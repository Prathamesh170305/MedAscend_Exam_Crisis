"""
Medascend FMT — diagram image generator.

Reads a chapter's diagram-prompt.md, calls OpenAI's gpt-image-1 model,
saves the result as diagram.png in the same folder.

Usage:
    python scripts/generate_image.py 02_chapters/<slug>/diagrams/<DIAGRAM-ID>_<slug>

The script:
- Loads OPENAI_API_KEY from .env (never from CLI args)
- Strips the markdown header / engine-justification block; sends only the actual
  prompt body to the API
- Saves diagram.png alongside diagram-prompt.md
- Idempotent: if diagram.png already exists, requires --force

Cost guard: ~$0.04–0.08 per image at gpt-image-1 1536×1024 quality. Always
review the prompt before spending.
"""

from __future__ import annotations
import argparse
import base64
import os
import re
import sys
from pathlib import Path

try:
    from dotenv import load_dotenv
except ImportError:
    print("ERROR: python-dotenv not installed. Run: pip install python-dotenv openai", file=sys.stderr)
    sys.exit(1)

try:
    from openai import OpenAI
except ImportError:
    print("ERROR: openai SDK not installed. Run: pip install python-dotenv openai", file=sys.stderr)
    sys.exit(1)


PROJECT_ROOT = Path(__file__).resolve().parent.parent


def extract_prompt_body(md_text: str) -> str:
    """Strip the .md header and engine-justification block; return only the
    actual paste-ready prompt body (everything from 'Generate a' onwards)."""
    # The blueprint format puts the prompt body inside a blockquote starting "> Generate"
    m = re.search(r"^> Generate.*?(?=\n##|\Z)", md_text, flags=re.S | re.M)
    if m:
        body = m.group(0)
        # Strip leading "> " from each line
        body = re.sub(r"^> ?", "", body, flags=re.M)
        return body.strip()
    # Fallback: take everything after the last "---"
    parts = md_text.split("\n---\n")
    return parts[-1].strip()


def call_openai_image(prompt: str, model: str, size: str) -> bytes:
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key or "paste-your" in api_key:
        print("ERROR: OPENAI_API_KEY missing or placeholder. Set it in .env.", file=sys.stderr)
        sys.exit(2)

    client = OpenAI(api_key=api_key)

    print(f"  → calling {model} at {size} …")
    resp = client.images.generate(
        model=model,
        prompt=prompt,
        size=size,
        n=1,
    )

    item = resp.data[0]
    if hasattr(item, "b64_json") and item.b64_json:
        return base64.b64decode(item.b64_json)
    if hasattr(item, "url") and item.url:
        import urllib.request
        with urllib.request.urlopen(item.url) as r:
            return r.read()
    raise RuntimeError("No image data in API response.")


def main():
    p = argparse.ArgumentParser(description="Generate one diagram image via OpenAI.")
    p.add_argument("diagram_folder", help="Path to the diagram folder (contains 02_diagram-prompt.md)")
    p.add_argument("--force", action="store_true", help="Overwrite existing diagram.png")
    p.add_argument("--dry-run", action="store_true", help="Print the prompt without calling the API")
    args = p.parse_args()

    load_dotenv(PROJECT_ROOT / ".env")
    model = os.environ.get("OPENAI_IMAGE_MODEL", "gpt-image-1")
    size = os.environ.get("OPENAI_IMAGE_SIZE", "1536x1024")

    folder = Path(args.diagram_folder).resolve()
    if not folder.is_dir():
        print(f"ERROR: folder not found: {folder}", file=sys.stderr)
        sys.exit(1)

    prompt_md = folder / "02_diagram-prompt.md"
    if not prompt_md.exists():
        print(f"ERROR: prompt file not found: {prompt_md}", file=sys.stderr)
        sys.exit(1)

    out_path = folder / "diagram.png"
    if out_path.exists() and not args.force:
        print(f"⏭️  Skipping {folder.name} — diagram.png exists. Use --force to overwrite.")
        return

    prompt_body = extract_prompt_body(prompt_md.read_text(encoding="utf-8"))

    print(f"▶ {folder.name}")
    print(f"  prompt length: {len(prompt_body)} chars")

    if args.dry_run:
        print("\n--- PROMPT BODY (dry-run) ---")
        print(prompt_body)
        print("--- END PROMPT ---")
        return

    png_bytes = call_openai_image(prompt_body, model, size)
    out_path.write_bytes(png_bytes)
    print(f"✅ Saved {out_path.relative_to(PROJECT_ROOT)} ({len(png_bytes)//1024} KB)")


if __name__ == "__main__":
    main()
