# LP-03 — Diagram Prompt

**Topic:** Anatomy of a court summons + types + conduct money rule.

---

## Engine + Type Decision

- **Diagram type:** Custom hybrid — labelled "anatomy of a summons" document on the left, two-card "Types of Summons" on the right, with a bottom strip on Conduct Money.
- **Engine chosen:** **GPT Image 2** — hybrid combining a labelled document mock-up with two card panels. GPAI as fallback if layout cluttered. Section 5.3 Step 3 / Step 4 hybrid.
- **Focal point (declared):** The illustrated summons document on the left (drawn as a paper rectangle with seal). The eye lands on it first.
- **Colour palette used (≤ 5):**
  - Deep Blue `#1F3A6E` — header strips, document title
  - Grey `#5A5A5A` — legal section captions, medicolegal pills
  - Cream `#F5EFE0` — paper background of the summons mock-up (decorative; counts toward 5)
- **Node count vs cap:** Hybrid — 1 document with 6 labels + 2 type cards + 1 conduct-money strip = 9 total elements. Within reasonable density. ✅
- **Split required?** No.

---

## Engine-Ready Prompt (paste into GPT Image 2)

> Generate a **hybrid forensic-medicine infographic** showing the anatomy of a court summons.
>
> **Canvas:** 1500 × 1000 px landscape, white background, 80 px margins.
>
> **Title block:** "Summons / Subpoena" — top centre, 36 pt bold dark grey. Below in 18 pt italic grey: "Summons = Subpoena (foreign jurisdictions)".
>
> **LEFT HALF (≈ 55 % of canvas) — FOCAL POINT — Labelled summons document:**
> - Draw an A4-shaped paper rectangle, cream `#F5EFE0` fill, light grey border, tilted ~3° for depth.
> - On the document, draw a circular blue `#1F3A6E` court seal in the top-right corner.
> - Label six parts of the document with leader lines pointing outward to grey caption tags:
>   1. "Name and designation of the issuing **court**" (top of document)
>   2. "Name and address of the **person summoned**"
>   3. "**Date, time and place** of attendance"
>   4. "**Purpose** — give evidence OR produce documents"
>   5. "**Signature of the judge** + court seal"
>   6. "Two copies — original served, duplicate signed and returned"
> - Each leader line is 1 px grey, terminates in a small dot on the document and a 14 pt caption in a thin grey box.
>
> **RIGHT HALF — Two stacked cards (top + bottom):**
>
> CARD A (top, 500 × 200 px):
> - Header strip fill `#1F3A6E`, white 18 pt: "Witness Summons"
> - Body (white, 14 pt): "Compels the recipient to **attend court and give oral evidence** about facts within his knowledge."
>
> CARD B (bottom, 500 × 200 px):
> - Header strip: "Production Summons"
> - Body: "Compels the recipient to **produce specified documents or objects** (e.g., medical records, X-rays, MLR) in court."
>
> **BOTTOM STRIP (full width, 1300 × 90 px), fill `#5A5A5A`, white text 18 pt centred:**
> - "⚖️ CONDUCT MONEY — Travelling allowance paid in advance to a witness in **CIVIL CASES ONLY**. In criminal cases, expenses are paid by the government after attendance."
>
> **Visual directives:**
> - Document and cards equal visual weight — neither dominates beyond the focal-point lead
> - Inter-element gaps ≥ 50 px, label captions ≥ 14 pt
>
> **Inclusions (mandatory):**
> - Six labelled parts of the document
> - Explicit "Conduct money = civil cases only" rule on the bottom strip
> - Subpoena equivalence noted in the subtitle
>
> **Exclusions:**
> - No textbook name anywhere on canvas
> - No more than 5 colours
> - No real names, no real court letterheads
>
> **Do-not-use constraints:**
> - Do not separate Summons and Subpoena onto two diagrams — they are equivalent and belong in one focal block
> - Do not omit the conduct-money rule — it is the most-tested point
>
> **Anti-clutter declaration:** Keep the document airy — six labels max. If a seventh is tempting, drop it. Layout must breathe at 50 % zoom.
