# Scripts — Medascend FMT

## `generate_image.py`

Generates one diagram PNG via OpenAI's `gpt-image-1` from an existing `02_diagram-prompt.md`.

### One-time setup

```powershell
# 1. Create your .env from the template
copy .env.example .env

# 2. Open .env and paste your **freshly-rotated** OpenAI key

# 3. Install dependencies
pip install python-dotenv openai
```

### Usage

```powershell
# Dry-run — show the prompt that would be sent, no API call
python scripts/generate_image.py 02_chapters/legal-procedure/diagrams/LP-01_court-hierarchy --dry-run

# Actually call the API and save diagram.png alongside the prompt
python scripts/generate_image.py 02_chapters/legal-procedure/diagrams/LP-01_court-hierarchy

# Force-overwrite an existing diagram.png
python scripts/generate_image.py 02_chapters/legal-procedure/diagrams/LP-01_court-hierarchy --force
```

### Notes

- The script reads `OPENAI_API_KEY` only from `.env`. It never accepts the key as a CLI argument (so it can't end up in shell history).
- Cost: ~$0.04–0.08 per image at 1536×1024 quality. Use `--dry-run` to review the prompt first.
- **For Chapter 1 (Legal Procedure), no API call is needed** — all diagrams are structural and rendered as hand-coded SVG by the viewer.
- API calls become useful from **Chapter 9 onwards** (wound morphology, burn anatomy, ligature marks, poisoning skin signs, etc.).
