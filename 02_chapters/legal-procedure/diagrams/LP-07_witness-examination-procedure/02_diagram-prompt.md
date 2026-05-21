# LP-07 — Diagram Prompt

**Topic:** Sequence of witness examination in an Indian court.

---

## Engine + Type Decision

- **Diagram type:** Vertical step diagram (5 steps top → bottom)
- **Engine chosen:** **GPT Image 2** — sequential mechanism with linear progression. Section 5.3 Step 5 default to GPT Image 2.
- **Focal point (declared):** Step 1 "OATH" — visually highlighted as the gateway step. The eye lands at the top and walks downward.
- **Colour palette used (≤ 5):**
  - Deep Blue `#1F3A6E` — step boxes
  - Green `#3FA86B` — "leading questions allowed" tag
  - Red `#C8534F` — "leading questions NOT allowed" tag
  - Grey `#5A5A5A` — "conducted by" captions
- **Node count vs cap:** Vertical step cap = 7 steps. Diagram = 5 steps. Within cap. ✅
- **Split required?** No.

---

## Engine-Ready Prompt (paste into GPT Image 2)

> Generate a **vertical step diagram** of the procedure for examination of a witness in court.
>
> **Canvas:** 1100 × 1500 px portrait, white background, 80 px margins.
>
> **Title block:** "Witness Examination in Court — Procedure" — top centre, 32 pt bold dark grey.
>
> **Five sequential steps top → bottom, each step a rounded-rectangle 800 × 180 px, fill `#1F3A6E`, white text:**
>
> STEP 1 — **OATH** (FOCAL POINT — slightly thicker outer border)
> - Header (white, 22 pt bold): "Step 1 — OATH"
> - Body (white, 14 pt): "Administered by the judge / court officer. Witness swears to speak the truth. Refusal without cause = punishable."
> - Right-side grey caption tag: "Mandatory before deposing"
>
> STEP 2 — **EXAMINATION-IN-CHIEF**
> - Header: "Step 2 — EXAMINATION-IN-CHIEF"
> - Body: "Conducted by the party that **called** the witness. Purpose: elicit facts supporting the calling party's case."
> - Right-side caption tag: "Conducted by: calling party"
> - **Red `#C8534F` mini-pill on the right edge: "Leading Q ❌ NOT allowed"**
>
> STEP 3 — **CROSS-EXAMINATION**
> - Header: "Step 3 — CROSS-EXAMINATION"
> - Body: "Conducted by the **opposing party**. Purpose: test credibility, expose inconsistencies, elicit favourable facts."
> - Right-side caption tag: "Conducted by: opposing party"
> - **Green `#3FA86B` mini-pill on the right edge: "Leading Q ✅ ALLOWED"**
> - **Orange `#E8A04A` (only colour beyond the 5 if chosen — drop a colour elsewhere if used) tag: "Most important phase — credibility test"** (OR replace with grey tag to stay within 5 colours)
>
> STEP 4 — **RE-EXAMINATION**
> - Header: "Step 4 — RE-EXAMINATION"
> - Body: "Conducted again by the **calling party**, only to clarify points raised in cross. No new matter without court's permission."
> - Right-side caption tag: "Conducted by: calling party"
> - **Red mini-pill: "Leading Q ❌ NOT allowed"**
>
> STEP 5 — **COURT QUESTIONS**
> - Header: "Step 5 — COURT QUESTIONS"
> - Body: "Questions put **directly by the judge** — may be asked at any stage of the deposition for clarification."
> - Right-side caption tag: "Conducted by: presiding judge"
>
> **Connectors:** Thick downward arrows (4 px, grey `#5A5A5A`) between consecutive steps, 30 px tall.
>
> **Visual directives:**
> - All five step boxes identical dimensions
> - 60 px vertical spacing between boxes
> - Status pills (red / green) consistent in position so the "leading Q allowed/not allowed" pattern is visually obvious from a glance
>
> **Inclusions (mandatory):**
> - Leading-question allowed/not-allowed pill on Steps 2, 3, 4
> - "Conducted by" caption on every step
>
> **Exclusions:**
> - No textbook name on canvas
> - No more than 5 colours (drop orange if you use it; keep only blue/green/red/grey + white background)
> - No icons / gavels / scales
>
> **Do-not-use constraints:**
> - Do not place the steps horizontally — vertical flow is essential for the sequence-of-events reading
> - Do not omit Step 1 (Oath) just because it precedes the actual questioning — its omission is a frequent error
>
> **Anti-clutter declaration:** Maximum 5 steps. If a sixth (e.g., recall of witness) tempts you, fold it into Step 5 caption instead of adding a box.
