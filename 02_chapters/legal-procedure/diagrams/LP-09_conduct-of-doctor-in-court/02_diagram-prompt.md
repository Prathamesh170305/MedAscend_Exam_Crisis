# LP-09 — Diagram Prompt

**Topic:** Conduct of a doctor in court — Do's and Don'ts.

---

## Engine + Type Decision

- **Diagram type:** Dual-column comparison cards (Do's vs Don'ts)
- **Engine chosen:** **GPT Image 2** — two-card parallel comparison with shared "rule" attribute. Section 5.3 Step 4.
- **Focal point (declared):** Heading banner "DOCTOR IN COURT — DO'S vs DON'TS" centred above the two columns. Each column has equal visual weight.
- **Colour palette used (≤ 5):**
  - Green `#3FA86B` — "DO" column header + checkmarks
  - Red `#C8534F` — "DON'T" column header + X marks
  - Deep Blue `#1F3A6E` — title block
  - Grey `#5A5A5A` — body text
- **Node count vs cap:** 2 cards. Within cap. ✅

---

## Engine-Ready Prompt (paste into GPT Image 2)

> Generate a **dual-column comparison infographic** of a doctor's conduct in court.
>
> **Canvas:** 1400 × 1100 px landscape, 80 px margins.
>
> **Title block:** "Conduct of Doctor in Court" — 36 pt bold dark grey.
>
> **Heading banner:** Below the title — a blue pill (1200 × 50 px) with white 18 pt centred: "Professional conduct on the witness stand — credibility = case integrity"
>
> **Two columns side-by-side, each 620 × 750 px:**
>
> LEFT COLUMN — **DO'S** ✅
> - Header strip: green `#3FA86B`, white 22 pt bold, text "✅ DO"
> - Body bullets (14 pt, each prefixed with a small green checkmark):
>   1. **Be punctual** — arrive before scheduled time
>   2. **Dress formally** — convey professionalism
>   3. Address the court properly — **"My Lord" / "Your Honour" / "Sir"**
>   4. Carry your **MLR / PM report / case notes** (refer only with court's permission)
>   5. **Speak clearly, slowly**, audible to the court
>   6. **Answer only what is asked** — confine to your professional opinion
>   7. **Use plain language** — explain medical terms when used
>   8. Take **oath** before deposing
>
> RIGHT COLUMN — **DON'T'S** ❌
> - Header strip: red `#C8534F`, white 22 pt bold, text "❌ DON'T"
> - Body bullets (14 pt, each prefixed with a small red ✖ mark):
>   1. **Don't lose temper** under cross-examination
>   2. **Don't argue** with the lawyer or the judge
>   3. **Don't volunteer** information — answer only what is asked
>   4. **Don't speculate** beyond your evidence
>   5. **Don't disclose patient secrets** without consent / court order
>   6. **Don't take sides** — remain neutral
>   7. **Don't refuse** to answer a court-directed question — refusal = contempt of court
>   8. **Don't give false evidence** — perjury (§229 BNS / old §193 IPC)
>
> **Visual directives:**
> - Both columns identical width, identical bullet count (8 each)
> - 80 px gap between columns
> - The two header strips (green / red) sit at the same vertical position so the eye reads them in parallel
>
> **Inclusions (mandatory):**
> - "Perjury §229 BNS / old §193 IPC" must appear on the DON'T column
> - "Contempt of court" must appear on the DON'T column
> - Address forms ("My Lord" / "Your Honour" / "Sir") on the DO column
>
> **Exclusions:**
> - No textbook name on canvas
> - No more than 5 colours
> - No images of doctors / courtrooms — text-based only
>
> **Do-not-use constraints:**
> - Do not arrange Do's / Don'ts as a single mixed bullet list — the side-by-side contrast is the design
>
> **Anti-clutter declaration:** Maximum 8 bullets per column. If a column overflows, drop the least-tested item.
