# LP-08 — Diagram Prompt

**Topic:** Types of questions asked of a witness, and when each is allowed / disallowed.

---

## Engine + Type Decision

- **Diagram type:** Card grid (2 × 2)
- **Engine chosen:** **GPT Image 2** — four parallel categories sharing the attribute "when allowed / when disallowed". Section 5.3 Step 4.
- **Focal point (declared):** Heading banner "TYPES OF QUESTIONS IN COURT" at top.
- **Colour palette used (≤ 5):**
  - Deep Blue `#1F3A6E` — card headers
  - Grey `#5A5A5A` — captions
  - Green `#3FA86B` — "Allowed" indicator
  - Red `#C8534F` — "Judge may disallow" indicator
- **Node count vs cap:** 4 cards + 1 banner = 5. Within cap. ✅

---

## Engine-Ready Prompt (paste into GPT Image 2)

> Generate a **2 × 2 card grid** of question types asked of witnesses in Indian courts.
>
> **Canvas:** 1400 × 1000 px landscape, 80 px margins.
>
> **Title block + focal banner:** "Types of Questions in Court" — 36 pt bold. Below: blue pill 1100 × 50 px white text 16 pt: "Question types govern what the witness can be asked — and which questions the judge may forbid."
>
> **Four cards (2 × 2), 480 × 350 px each:**
>
> CARD 1 — **LEADING QUESTION**
> - Header `#1F3A6E`
> - Body: "A question that **suggests its own answer**. Example: 'You were present at the scene, weren't you?'"
> - **Status pills (stacked, bottom-right):**
>   - Green pill: "✅ Allowed in CROSS-EXAMINATION"
>   - Green pill: "✅ Allowed in court questions"
>   - Red pill: "❌ NOT allowed in examination-in-chief"
>   - Red pill: "❌ NOT allowed in re-examination"
>
> CARD 2 — **HYPOTHETICAL QUESTION**
> - Header
> - Body: "Question based on **assumed facts**, used to draw out an **expert's opinion** (e.g., 'Doctor, if a wound of 10 cm depth is found in the chest, would it be fatal?')."
> - Status pill: "✅ Allowed — used to elicit expert opinion"
>
> CARD 3 — **COMPOUND QUESTION**
> - Header
> - Body: "Single question that bundles **two or more queries** together. Confuses the witness."
> - Example caption (grey, italic): "'Did you see the accused, and did he have a knife?'"
> - Red pill: "❌ Judge may disallow — confusing"
>
> CARD 4 — **INDECENT / INSULTING QUESTION**
> - Header
> - Body: "Question on intimate, scandalous, or insulting matter **unrelated to the case**."
> - Red pill: "❌ Judge MUST forbid (under evidence law)"
> - Grey caption: "Excludes questions relevant to a fact in issue (e.g., a relevant question in a sexual-offence case is not 'indecent')."
>
> **Inclusions (mandatory):**
> - Allowed/disallowed status visible on every card
> - Concrete example on every card
> - On Card 1, all four status pills must be present (the differential rule across the 4 phases)
>
> **Exclusions:**
> - No textbook name on canvas
> - No more than 5 colours
>
> **Do-not-use constraints:**
> - Do not omit Card 1's full pill set — the leading-question rule across examination phases is the most-tested point
>
> **Anti-clutter declaration:** If Card 1's four pills crowd the corner, stack them vertically along the right side of the card body. Layout must breathe.
