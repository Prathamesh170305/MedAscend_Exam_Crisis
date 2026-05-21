# LP-06 — Diagram Prompt

**Topic:** The three types of witnesses appearing in court.

---

## Engine + Type Decision

- **Diagram type:** Card grid (3 cards in a single row)
- **Engine chosen:** **GPT Image 2** — three parallel categories with shared attributes (deposes on, oath, can be cross-examined, legal section). Section 5.3 Step 4.
- **Focal point (declared):** Heading pill "TYPES OF WITNESSES — 3 KINDS" at top centre.
- **Colour palette used (≤ 5):**
  - Deep Blue `#1F3A6E` — card headers
  - Grey `#5A5A5A` — captions, legal sections
  - Orange `#E8A04A` — "Doctor = Expert" highlight on Card 2
- **Node count vs cap:** 3 cards + 1 banner = 4. Within cap. ✅
- **Split required?** No.

---

## Engine-Ready Prompt (paste into GPT Image 2)

> Generate a **3-card horizontal grid** of witness types.
>
> **Canvas:** 1500 × 900 px landscape, white background, 80 px margins.
>
> **Title block + focal banner:** "Types of Witnesses" — 36 pt bold dark grey title. Below: a blue pill (1300 × 50 px) with white 16 pt: "Person who appears in court and gives evidence about facts within his knowledge."
>
> **Three cards in a single horizontal row, each 420 × 500 px:**
>
> CARD 1 (left) — **COMMON WITNESS** (a.k.a. Witness of Fact)
> - Header `#1F3A6E`
> - Body bullets:
>   - Deposes about **facts seen / heard / perceived** by himself
>   - **Cannot give opinion** — only what he directly observed
>   - Example: a passer-by who saw the accident
>   - Examined on oath in court
>
> CARD 2 (centre) — **EXPERT WITNESS** (a.k.a. Skilled Witness)
> - Header `#1F3A6E`
> - Top-right corner: orange `#E8A04A` pill: "Doctor in court = Expert"
> - Body bullets:
>   - Person specially **skilled in a subject** — science, art, foreign law, handwriting
>   - **Permitted to give opinion** before the court
>   - Legal basis: **BSA §39 (2023)** *(old IEA §45)*
>   - Examples: forensic doctor, ballistics expert, handwriting analyst, psychiatrist
>
> CARD 3 (right) — **HOSTILE WITNESS**
> - Header `#1F3A6E`
> - Body bullets:
>   - Witness who turns **against the party that called him** — gives evidence contrary to his earlier statement
>   - With the **judge's permission**, the calling party may **cross-examine its own witness** (a.k.a. "leading questions allowed")
>   - Often happens in cases involving threat / inducement of the witness
>   - The judge must declare a witness "hostile" before this happens
>
> **Visual directives:**
> - All three cards identical width / height
> - 60 px horizontal gaps
> - Section reference on Card 2 must be in italics (current law)
>
> **Inclusions (mandatory):**
> - BSA §39 (with IEA §45 in italics)
> - The "doctor in court = expert" tag on Card 2
> - Note on judge's permission requirement on Card 3
>
> **Exclusions:**
> - No textbook name on canvas
> - No more than 5 colours
> - No personal names or court titles
>
> **Do-not-use constraints:**
> - Do not stack the cards vertically — single-row horizontal grid is essential so all three contrast at a glance
> - Do not omit the legal section on Card 2 — current law is the high-yield point
>
> **Anti-clutter declaration:** Each card body ≤ 5 bullets. If a card grows, shorten bullets rather than adding rows.
