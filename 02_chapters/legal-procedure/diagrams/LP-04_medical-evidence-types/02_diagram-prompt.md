# LP-04 — Diagram Prompt

**Topic:** The five types of medical evidence admissible in court.

---

## Engine + Type Decision

- **Diagram type:** Radial mindmap
- **Engine chosen:** **Scispace** — genuinely hierarchical with one clean root ("Medical Evidence") and five first-level branches. Section 5.3 Step 2.
- **Focal point (declared):** Central node "MEDICAL EVIDENCE" — large blue pill at canvas centre.
- **Colour palette used (≤ 5):**
  - Deep Blue `#1F3A6E` — central node, branch headers
  - Grey `#5A5A5A` — examples / sub-points
  - Green `#3FA86B` — "Admissible" indicators
  - Red `#C8534F` — "Inadmissible (with exceptions)" indicator on Hearsay
- **Node count vs cap:** Mindmap cap = 12 first-level / 25 total. Diagram = 5 first-level + ≈ 12 sub-nodes = **17 total**. Well within cap. ✅
- **Split required?** No.

---

## Engine-Ready Prompt (paste into Scispace)

> Generate a **radial mindmap** of types of medical evidence.
>
> **Canvas:** 1500 × 1200 px landscape, white background, 80 px margins.
>
> **Title block:** "Types of Medical Evidence" — top centre, 36 pt bold dark grey.
>
> **Root node (FOCAL POINT):** "MEDICAL EVIDENCE" — large pill (260 × 80 px) at centre, fill `#1F3A6E`, white 22 pt bold text, slight outer glow.
>
> **Five first-level branches radiating outward (clock positions 1, 4, 6, 8, 11):**
>
> Branch 1 (top-right, 1 o'clock) — **"DOCUMENTARY"** (blue header pill):
> - Sub-points (grey text): Medical certificates · Medicolegal reports · Dying declaration · Affidavit · Birth/Death certificate
> - Green pill: "Admissible"
>
> Branch 2 (right, 4 o'clock) — **"ORAL"** (blue header pill):
> - Sub-points: Statement of witness in court under oath · Includes signs (gestures), written statement of mute witness
> - Green pill: "Admissible — Best evidence"
>
> Branch 3 (bottom, 6 o'clock) — **"REAL / MATERIAL"** (blue header pill):
> - Sub-points: Weapons · Clothing · Viscera · Body fluids · Bullets · Hair · Stains
> - Green pill: "Admissible — Physical objects in court"
>
> Branch 4 (left, 8 o'clock) — **"HEARSAY"** (blue header pill):
> - Sub-points: Statement learned from another person · Exceptions: dying declaration · res gestae · public records
> - Red pill: "Generally NOT admissible (exceptions exist)"
>
> Branch 5 (top-left, 11 o'clock) — **"CIRCUMSTANTIAL"** (blue header pill):
> - Sub-points: Indirect inference · Time of death from rigor · Cause inferred from injury pattern
> - Green pill: "Admissible — Inference-based"
>
> **Connectors:** 1.5 px curved grey lines from root to each branch header. Sub-points listed as bulleted text in a small grey box hanging off the branch header (no further connecting lines — sub-points sit visually under the header).
>
> **Inter-branch angular spacing:** equal — ~72° apart so the diagram reads radially even at 50 % zoom.
>
> **Inclusions (mandatory):**
> - All 5 first-level branches present
> - Status pill (green/red) on every branch
> - Hearsay's red pill must explicitly note that exceptions exist
>
> **Exclusions:**
> - No textbook name on canvas
> - No more than 5 colours
> - No icons inside the branches
>
> **Do-not-use constraints:**
> - Do not use a vertical list — radial layout is essential so all 5 read at a glance
> - Do not omit Hearsay just because it is "generally inadmissible" — it is the most-tested branch
>
> **Anti-clutter declaration:** Maximum 25 total nodes. Sub-points stay short. If a branch's sub-list overflows, drop the least-tested example rather than shrinking text.
