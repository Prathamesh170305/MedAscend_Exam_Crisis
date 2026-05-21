# LP-05 — Diagram Prompt

**Topic:** The four subtypes of documentary evidence with a focus on dying declaration vs dying deposition (high-yield).

---

## Engine + Type Decision

- **Diagram type:** Card grid (2 × 2)
- **Engine chosen:** **GPT Image 2** — parallel categories sharing attributes (issuer, oath, format, exam tag). Section 5.3 Step 4.
- **Focal point (declared):** Heading banner "DOCUMENTARY EVIDENCE — 4 SUBTYPES" at top.
- **Colour palette used (≤ 5):**
  - Deep Blue `#1F3A6E` — card headers, banner
  - Grey `#5A5A5A` — legal sections, examples
  - Orange `#E8A04A` — "Exam favourite" indicators (sparingly)
  - Red `#C8534F` — "Oath NOT required" cell on dying declaration
  - Green `#3FA86B` — "Oath required" cell on dying deposition
- **Node count vs cap:** 4 cards + 1 banner = 5. Within card-grid cap of 6. ✅
- **Split required?** No.

---

## Engine-Ready Prompt (paste into GPT Image 2)

> Generate a **2 × 2 card grid** of the four subtypes of documentary evidence used in medicolegal practice.
>
> **Canvas:** 1400 × 1100 px landscape, white background, 80 px margins.
>
> **Title block + focal banner (top):** "Documentary Evidence — 4 Subtypes" — 36 pt bold dark grey title. Below it: a dark-blue pill (1100 × 60 px) with white 18 pt text: "Documents produced before a court as proof of fact".
>
> **Four cards (2 × 2), each 480 × 360 px:**
>
> CARD 1 (top-left) — **MEDICAL CERTIFICATES**
> - Header strip fill `#1F3A6E`, white 20 pt bold
> - Body bullets (14 pt dark grey):
>   - Issued by any **RMP** (Registered Medical Practitioner)
>   - Subjects: **birth, death, age, sickness, fitness, vaccination**
>   - Death certificate is mandatory before disposal of body
>   - False certification → professional misconduct
>
> CARD 2 (top-right) — **MEDICOLEGAL REPORT (MLR)**
> - Header strip
> - Body bullets:
>   - Written report on a person **referred by police** for a medicolegal purpose
>   - Common types: **injury report, sexual-assault exam, drunkenness, age estimation**
>   - Prepared by the duty medical officer / govt doctor
>   - Copy to police; original retained at hospital
>
> CARD 3 (bottom-left) — **DYING DECLARATION**
> - Header strip
> - Body bullets:
>   - Statement of a **dying person** about the **cause and circumstances of his death**
>   - Ideally recorded by a **Magistrate**, otherwise by doctor / police
>   - **OATH NOT REQUIRED** — show as a red `#C8534F` mini-pill in the card corner
>   - **No cross-examination**
>   - Admissible under **BSA §26 (2023)** *(old IEA §32)*
>   - Becomes valid evidence **only if declarant dies**
>
> CARD 4 (bottom-right) — **DYING DEPOSITION**
> - Header strip
> - Body bullets:
>   - Statement of a dying person recorded **in the format of a court deposition**
>   - **Magistrate + accused (or pleader) + cross-examination** present
>   - **OATH REQUIRED** — show as a green `#3FA86B` mini-pill in the card corner
>   - **Higher evidentiary value** than a dying declaration (orange "Exam favourite" tag in the header corner)
>   - Used only when the declarant is too ill to attend court but lives long enough for a deposition
>
> **Visual directives:**
> - All four cards identical dimensions; identical padding
> - Inter-card gap 60 px
> - The two corner pills (red on Card 3, green on Card 4) are mirror-positioned to draw the eye to the oath difference
>
> **Inclusions (mandatory):**
> - Current-law section reference for dying declaration (BSA §26, old IEA §32 noted in italics)
> - The oath / cross-examination contrast must be visually obvious between Cards 3 and 4
>
> **Exclusions:**
> - No textbook name anywhere
> - No more than 5 colours
> - No icons / flags / signatures
>
> **Do-not-use constraints:**
> - Do not merge Cards 3 and 4 into one — the comparison is the most-tested point and warrants two visually distinct cards (+ DT-9 later)
> - Do not omit the section reference — current law is essential
>
> **Anti-clutter declaration:** Card body bullets ≤ 6 each. If a card overflows, shorten bullets; never shrink the corner pills.
