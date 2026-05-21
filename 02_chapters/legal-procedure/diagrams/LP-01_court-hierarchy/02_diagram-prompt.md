# LP-01 — Diagram Prompt

**Topic:** Hierarchy of Indian Courts (Criminal + Civil sides)

---

## Engine + Type Decision

- **Diagram type:** Radial / vertical hierarchical mindmap
- **Engine chosen:** **Scispace** — content is genuinely hierarchical with one clean root (Supreme Court → High Court → Sessions Court → Magistrate Courts). Section 5.3 Step 2 satisfied.
- **Focal point (declared):** "Supreme Court of India" — anchored at the top centre. The student's eye must land here first before tracing downward.
- **Colour palette used (≤ 5):**
  - Deep Blue `#1F3A6E` — court name boxes, ranks, hierarchy
  - Grey `#5A5A5A` — sentencing powers (medicolegal data)
  - White background, dark text only — no decorative colours
- **Node count vs cap:** Mindmap cap is 12 first-level branches / 25 total. This diagram = **2 first-level branches (Criminal / Civil) + 10 total nodes**. Within cap. ✅
- **Split required?** No.

---

## Engine-Ready Prompt (paste into Scispace)

> Generate a clean **vertical hierarchical mindmap** of the Indian Court system as it relates to medicolegal practice.
>
> **Canvas:** 1200 × 1500 px, portrait orientation, white background, generous margins (≥ 80 px on every side).
>
> **Title block:** "Hierarchy of Indian Courts" — top centre, 36 pt bold dark-grey serif, single line.
>
> **Root node (FOCAL POINT):** "Supreme Court of India" — placed top centre, 220 × 70 px rounded rectangle, fill `#1F3A6E`, white 18 pt bold text inside. This is the most visually prominent node — slightly larger than all children and with a 2 px outer border.
>
> **One level below the root, fork into two parallel branches:**
> - LEFT BRANCH labelled "CRIMINAL COURTS" (heading pill, fill `#1F3A6E`, white text)
> - RIGHT BRANCH labelled "CIVIL COURTS" (heading pill, fill `#1F3A6E`, white text)
>
> **Under CRIMINAL COURTS (top → bottom, vertical sub-tree):**
> 1. "High Court" — 180 × 55 px box, fill `#1F3A6E`, white text. Below it in a small grey `#5A5A5A` caption: "Confirms death sentence; appellate jurisdiction"
> 2. "Sessions Court / Additional Sessions Court" — same style. Grey caption: "May pass any sentence including death (confirmed by HC)"
> 3. "Assistant Sessions Court" — same style. Grey caption: "Up to 10 years imprisonment"
> 4. "Chief Judicial / Chief Metropolitan Magistrate" — same style. Grey caption: "Up to 7 years imprisonment + fine"
> 5. "Judicial / Metropolitan Magistrate — First Class" — same style. Grey caption: "Up to 3 years + ₹10,000 fine"
> 6. "Judicial Magistrate — Second Class" — same style. Grey caption: "Up to 1 year + ₹5,000 fine"
>
> **Under CIVIL COURTS (top → bottom):**
> 1. "High Court (Civil side)" — same style. Grey caption: "Appellate + original jurisdiction"
> 2. "District Court / Court of Civil Judge" — same style. Grey caption: "Highest civil court of district"
>
> **Connectors:** straight vertical lines, 1.5 px, dark grey `#5A5A5A`, no arrowheads (since hierarchy is implied by position).
>
> **Inter-node spacing:** minimum 50 px vertical between boxes; minimum 60 px horizontal between the two branches. White space breathes.
>
> **Inclusions (mandatory):**
> - Sentencing powers shown as grey caption under each criminal court box
> - Clear visual separation between criminal and civil sub-trees
>
> **Exclusions (forbidden on the canvas):**
> - No textbook name anywhere on the canvas, ever (no "Reddy", "Bardale", "Modi", "Vij", "Parikh", "Marrow", "PrepLadder")
> - No source citations or page numbers
> - No decorative shadows, gradients, or icons
> - No more than 5 colours total
>
> **Do-not-use constraints:**
> - Do not use a radial / circular layout — vertical hierarchy is essential for the rank order
> - Do not collapse Sessions + Assistant Sessions into one box — they are separate ranks
>
> **Anti-clutter declaration:** Do not exceed 10 nodes total. If sentencing-power captions overflow, shorten them but keep the layout breathing. Text length is fine; layout must stay clean.
