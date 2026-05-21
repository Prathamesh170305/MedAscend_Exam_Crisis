# LP-02 — Diagram Prompt

**Topic:** The four types of inquest, with focus on the two practised in India.

---

## Engine + Type Decision

- **Diagram type:** Card grid (2 × 2)
- **Engine chosen:** **GPT Image 2** — four parallel categories with shared attribute layout (conducting authority, legal section, current status in India). Section 5.3 Step 4.
- **Focal point (declared):** Central banner — "INQUEST = Legal inquiry to ascertain cause of death". The eye lands here first; the four cards radiate from it.
- **Colour palette used (≤ 5):**
  - Deep Blue `#1F3A6E` — central definition banner, card headers
  - Grey `#5A5A5A` — medicolegal data (sections, status flags)
  - Green `#3FA86B` — "Practised in India" tag
  - Red `#C8534F` — "Not practised / Abolished in India" tag
- **Node count vs cap:** Card-grid cap = 6 cards. This diagram = 4 cards + 1 central banner. Within cap. ✅
- **Split required?** No.

---

## Engine-Ready Prompt (paste into GPT Image 2)

> Generate a **4-card grid (2 × 2) with a central definition banner** showing the four types of inquest.
>
> **Canvas:** 1400 × 1100 px landscape, white background, ≥ 80 px outer margins.
>
> **Title block:** "Types of Inquest" — top centre, 36 pt bold dark-grey sans-serif.
>
> **Central banner (FOCAL POINT):** Horizontal pill placed in the dead centre of the canvas, 600 × 90 px, fill `#1F3A6E`, white 20 pt text reading "INQUEST = Legal inquiry to ascertain cause of death (held in sudden / suspicious / unnatural deaths)". Slight glow / 2 px outer border so the eye locks on it first.
>
> **Four cards radiating around the central banner (clockwise from top-left):**
>
> CARD 1 — top-left, 420 × 350 px:
> - Header strip (fill `#1F3A6E`, white text, 22 pt bold): "POLICE INQUEST"
> - Body (white fill, dark 14 pt body text, bulleted):
>   - Held under **Section 174 CrPC** *(now §194 BNSS 2023)*
>   - Conducted by **Investigating Officer (IO)**, ≥ rank of Sub-Inspector
>   - Report = **Panchnama**, signed by 2+ Panchas
>   - Most common type in India
> - Bottom-right corner: green pill "PRACTISED IN INDIA" (fill `#3FA86B`, white 12 pt)
>
> CARD 2 — top-right, 420 × 350 px:
> - Header: "MAGISTRATE INQUEST"
> - Body:
>   - Held by an **Executive Magistrate** under §176 CrPC *(now §196 BNSS)*
>   - **Mandatory** in: deaths in police custody, dowry deaths (within 7 yrs of marriage), exhumation cases, deaths in psychiatric hospitals
>   - Higher evidentiary value than police inquest
> - Bottom-right: green pill "PRACTISED IN INDIA"
>
> CARD 3 — bottom-right, 420 × 350 px:
> - Header: "CORONER INQUEST"
> - Body:
>   - Coroner = officer of rank of **First Class Magistrate** (could be doctor or lawyer)
>   - Was held only in **Mumbai (until 29 July 1999)** and **Kolkata** (earlier)
>   - Coroner's court = court of inquiry only — issues verdict on cause of death
>   - **Open verdict** = crime announced but accused unknown
> - Bottom-right: red pill "ABOLISHED IN INDIA" (fill `#C8534F`)
>
> CARD 4 — bottom-left, 420 × 350 px:
> - Header: "MEDICAL EXAMINER SYSTEM"
> - Body:
>   - Inquest conducted by a **Medical Examiner = Forensic Pathologist**
>   - Prevalent in most **United States** states
>   - Considered the **most superior / scientific** system
>   - **Not followed in India**
> - Bottom-right: red pill "NOT IN INDIA"
>
> **Visual directives:**
> - All four cards same dimensions, same internal padding (≥ 20 px)
> - Equal gaps between cards (60 px horizontal, 60 px vertical)
> - The central banner sits in the gap and overlaps cards by no more than 20 px on each side
>
> **Inclusions (mandatory):**
> - Legal section numbers (both old CrPC and new BNSS in italics for the renumbered ones)
> - Status pill on every card (green = practised; red = not practised)
>
> **Exclusions:**
> - No textbook name, no source citation anywhere on canvas
> - No more than 5 colours
> - No icons, no flags, no decorative borders
>
> **Do-not-use constraints:**
> - Do not arrange the cards in a single row — the 2 × 2 grid is essential so all four read at a glance
> - Do not omit the status pill — it carries the "practised vs abolished" exam point
>
> **Anti-clutter declaration:** Card content can grow vertically if needed — let the cards breathe. If any card overflows, shorten bullets but keep all four cards the same size.
