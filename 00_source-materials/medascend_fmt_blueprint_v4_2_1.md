# 📘 MEDASCEND FMT — PRODUCTION BLUEPRINT
## The Deadly Notes System

**Version:** 4.2.1 — Final Locked
**Application:** Medascend (Samsung Notes-style interface)
**Purpose:** Build notes that obsolete every other FMT resource a medical student has.

**What changed from v4.2:**
- **🎯 Exam-favourite point column removed from diff-tables.** Diff-tables are now pure side-by-side comparisons with no exam-importance flagging. The PYQ-tested points still get tested through MCQs; the table itself stays clean and unannotated.

---

## MISSION

Build the most lethal FMT notes a medical student in India can study from. Notes so complete, so dense, so structurally sound — and **so visually clean** — that:

- A first-time reader achieves mastery without opening another resource
- An exam-week student revises an entire chapter in 30 minutes
- A PG aspirant grinds through every NEET-PG / INI-CET PYQ in its actual context
- A university student writes any LAQ or SAQ from memory because the model answer was already rehearsed
- Every diagram is instantly readable — never cluttered, never overwhelming

If a student finishes Medascend and still needs an external book or app — the system has failed. If any diagram makes a student squint, scroll back, or lose the thread — that diagram has failed.

---

## SOURCES (Backend Only — Never Surfaced to Students)

These sources govern Claude's production. **No source name ever appears in student-facing content** (no ⓘ-button panels, no MCQ explanations, no model answers).

| Source | Backend Role |
|--------|--------------|
| **Source A — Primary textbook (current edition)** | Legal references (BNS/BNSS/BSA), case law, procedural rules |
| **Source B — Primary textbook (depth-focused)** | Classification depth, autopsy findings, mechanism detail, figures |
| **Source C — BNS/BNSS shortlist file** | Exam-relevance filter — gates which BNS sections are in scope |
| **FMT PYQ Question Bank** | 122 NEET-PG + INI-CET questions, 2016–2024 (used for MCQ Layer 1) |
| **Subjective Q-Bank** | Chapter-mapped SAQ + LAQ list (used for Subjective Layer 1) |

**Internal conflict resolution (backend logic):**

| Domain | Wins |
|--------|------|
| Legal / numerical / current-law disagreement | Source A |
| Classification depth / autopsy / mechanism | Source B |
| BNS section scope | Source C (gate — not in file, not in scope) |

All conflicts logged in the subject-level errata sheet (backend-only document).

**Student-facing tags allowed:** `[NEET-PG YYYY]`, `[INI-CET YYYY]`, `[QBank]`, `[QBank-Inspired]`, `[PG-Inspired]`, `[UNIV]`, `[BNS XXX]`, `[BNSS XXX]`, `[BSA XXX]`. These reference exams and current law, not textbooks.

---

## DIAGRAM ENGINES (Locked Roster)

| Engine | Role |
|--------|------|
| **GPT Image 2** | Primary workhorse — card grids, comparison tables, labelled anatomical illustrations, custom hybrids, infographic layouts, vertical step diagrams |
| **GPAI** | Alternate to GPT Image 2 — used where GPAI produces a cleaner layout for the same prompt |
| **Scispace** | Hierarchical mindmaps and structural flowcharts — used only where the information is genuinely hierarchical AND fits cleanly |
| **Excalidraw** | Fallback only — used when none of the above produce a clean layout (typically hand-drawn-style cyclic diagrams, custom loops) |

**Canva, BioRender, and all other tools are removed.** No exceptions.

**Engine selection rule:** whichever locked engine produces the **cleanest** output. Clarity beats default.

---

## SECTION 1 — THE CLOSED LOOP

```
┌─────────────────────────────────────────────────────┐
│   Student opens chapter                             │
│        ↓                                            │
│   Reads chapter prerequisites                       │
│        ↓                                            │
│   Scans Differentiation Tables Index                │
│        ↓                                            │
│   Enters Diagram 1                                  │
│   ├─ Diagram-specific prerequisites                 │
│   ├─ Studies the diagram (full conceptual depth)    │
│   ├─ Taps any node → ⓘ opens content panel          │
│   ├─ Reads mnemonic (if applicable)                 │
│   ├─ Annotates anywhere on the canvas               │
│   ├─ Attempts MCQs below diagram                    │
│   └─ Reveals answers + explanations                 │
│        ↓                                            │
│   Repeats for Diagrams 2 → N                        │
│        ↓                                            │
│   At any point, opens a Differentiation Table       │
│   (DT-1, DT-2, …) from the chapter index            │
│   ├─ Full point-by-point comparison                 │
│   └─ Jump-link back to parent diagram(s)            │
│        ↓                                            │
│   Reads consolidated chapter mnemonic list (footer) │
│        ↓                                            │
│   For exam-crisis prep, opens top-pinned            │
│   Subject-Wide Subjective Q-Bank                    │
│        ↓                                            │
│   For PYQ-to-current-law conversion, opens          │
│   top-pinned IPC↔BNS Quick-Reference Card           │
│        ↓                                            │
│   Closed loop — zero external resources used        │
└─────────────────────────────────────────────────────┘
```

---

## SECTION 2 — THE NON-NEGOTIABLES

- **🥇 Visual clarity is paramount.** Every diagram must be neat, clean, uncluttered. If it feels busy, split it — never cram.
- **No textbook source names in student-facing content.** Anywhere. Ever.
- **Differentiation tables are standalone**, not embedded inside diagrams. Each gets its own page with full elaboration.
- **No "refer to diagram" redirects in subjective answers.** Every subjective question gets a complete written model answer.
- **No fancy prose. No storytelling.** Structure, not narrative.
- **No fixed diagram type per information shape.** Whatever stays cleanest wins.
- **No external resources required.** Everything needed is inside the app.
- **No tool outside the locked roster.** GPT Image 2, GPAI, Scispace, Excalidraw (fallback) — nothing else.

---

## SECTION 3 — THE FIVE DELIVERABLES PER CHAPTER

```
┌───────────────────────────────────────────────────┐
│  DELIVERABLE 1 — CHAPTER PREREQUISITES            │
│  Broad terms + Differentiation Tables Index       │
├───────────────────────────────────────────────────┤
│  DELIVERABLE 2 — DIAGRAMS (×N per chapter)        │
│  Per diagram:                                     │
│    a) Diagram-specific prerequisites              │
│    b) The diagram (CLEAN, fully elaborated)       │
│    c) ⓘ-button anchors                            │
│    d) Mnemonic block (if applicable)              │
├───────────────────────────────────────────────────┤
│  DELIVERABLE 3 — DIFFERENTIATION TABLES (×M)      │
│  Per diff-table (standalone artefact):            │
│    a) Title (Entity A vs Entity B)                │
│    b) Full point-by-point table                   │
│    c) Jump-links back to parent diagram(s)        │
├───────────────────────────────────────────────────┤
│  DELIVERABLE 4 — MCQs (per diagram + per DT)      │
│    L1: Verbatim from FMT PYQ Question Bank        │
│        [NEET-PG YYYY] / [INI-CET YYYY]            │
│    L2: PG-Inspired (Claude-generated)             │
│    L3: University-level recall [UNIV]             │
├───────────────────────────────────────────────────┤
│  DELIVERABLE 5 — SUBJECTIVE Q-BANK ENTRIES        │
│  Contributed to subject-wide top-pinned bank.     │
│    L1: Verbatim from uploaded Subjective Q-Bank   │
│        for this chapter [QBank]                   │
│    L2: Claude-generated in QBank style, fills     │
│        coverage gaps [QBank-Inspired]             │
│  Every entry has a complete standalone model      │
│  answer.                                          │
├───────────────────────────────────────────────────┤
│  CHAPTER FOOTER — CONSOLIDATED MNEMONIC LIST      │
└───────────────────────────────────────────────────┘
```

---

## SECTION 4 — DELIVERABLE 1: CHAPTER PREREQUISITES + DIFFERENTIATION TABLES INDEX

### 4.1 Chapter Prerequisites

Single table at the chapter opener.

| # | Term | Plain meaning (≤ 1 sentence) |
|---|------|-------------------------------|

**Rules:**
- Terms only — no concepts, no analogies, no narrative
- Cap: 8–10 broad terms for the entire chapter
- Cross-diagram terms only; diagram-specific terms are released inside that diagram
- Listed in chapter order, not alphabetical

### 4.2 Differentiation Tables Index

Immediately after the chapter prerequisites, before Diagram 1.

```
📊 DIFFERENTIATION TABLES IN THIS CHAPTER

| #    | Differentiation                          | Open           |
|------|------------------------------------------|----------------|
| DT-1 | Hanging vs Strangulation                 | → Open DT-1    |
| DT-2 | Antemortem vs Postmortem hanging         | → Open DT-2    |
| DT-3 | Suicidal vs Homicidal vs Accidental      | → Open DT-3    |
| ...  | ...                                      | ...            |
```

**Rules:**
- Each row opens its own standalone diff-table page
- Diff-tables are **independent artefacts** alongside diagrams, not embedded inside them
- Diff-tables are **additional** to conceptual content, never replacements
- Each diff-table can be as elaborate and point-rich as the topic deserves

---

## SECTION 5 — DELIVERABLE 2: DIAGRAMS

### 5.1 The Per-Diagram Bundle

```
DIAGRAM BUNDLE = 
  [Diagram-Specific Prerequisites] 
+ [The Diagram — fully elaborated, conceptually complete]
+ [ⓘ-Button Anchors for every node]
+ [Mnemonic block — if applicable]
```

Diagrams now carry **all the conceptual content for the topic** — no portion is sacrificed to make room for a diff-table, because diff-tables live elsewhere.

### 5.2 Component A: Diagram-Specific Prerequisites

Small table of terms-only needed for this specific diagram.

**Rules:** terms only; cap 3–6 per diagram; never repeated across diagrams; plain-English one-sentence definitions.

### 5.3 Component B: The Diagram

#### Information-Shape → Diagram-Type → Engine (STARTING POINT, NOT PRESCRIPTION)

The mapping below is a **starting suggestion**. The actual diagram type is whichever renders the information **cleanest, neatest, and least cluttered** for that specific topic. Override whenever clarity demands it.

| Information Shape | Suggested Diagram Type | Engine |
|-------------------|------------------------|--------|
| Hierarchical classification | Radial Mindmap | **Scispace** |
| Sequential mechanism / cascade | Horizontal Flowchart | **Scispace** or **GPT Image 2** |
| Anatomical / spatial finding | Labelled Anatomical Image | **GPT Image 2** or **GPAI** |
| Parallel categories with shared attributes | Card Grid | **GPT Image 2** or **GPAI** |
| Cyclic / loop process | Circular Diagram | **Excalidraw** (fallback) or **GPT Image 2** |
| Numerical thresholds / ladder | Vertical Step Diagram | **GPT Image 2** |
| Hybrid | Custom Hybrid Layout | **GPT Image 2** |

> **Side-by-side comparison tables are no longer a diagram type** — they're Deliverable 3 (standalone diff-tables).

#### Engine + Type Decision Logic

```
STEP 1 — CLARITY CHECK FIRST
   Will the suggested diagram type produce a clean, uncluttered
   layout for THIS specific content?
   YES → proceed to Step 2
   NO  → (a) split into multiple diagrams, OR
         (b) switch to a different diagram type that fits cleaner

STEP 2 — IS THE CONTENT HIERARCHICAL WITH ONE CLEAN ROOT?
   YES → Scispace radial mindmap
   NO ↓

STEP 3 — DOES IT NEED ANATOMICAL ACCURACY OR VISUAL RICHNESS?
   YES → GPT Image 2 (or GPAI if cleaner)
   NO ↓

STEP 4 — IS IT A PARALLEL-CATEGORY / CARD-GRID LAYOUT?
   YES → GPT Image 2 or GPAI
   NO ↓

STEP 5 — IS IT A CLOSED-LOOP / CYCLIC PROCESS GPT IMAGE 2 CAN'T HANDLE?
   YES → Excalidraw
   NO ↓

DEFAULT → GPT Image 2

OVERRIDE — At every step, if the resulting diagram would feel cluttered,
override: split the content, switch type, or reduce density.
```

### 5.4 Anti-Clutter & Clarity Rules (non-negotiable)

Every diagram must satisfy ALL of the following:

#### 5.4.1 Node Caps

| Diagram Type | Max Nodes |
|--------------|-----------|
| Radial Mindmap | 12 first-level branches, 25 total nodes |
| Horizontal Flowchart | 6 nodes wide, 3 lanes deep |
| Vertical Step Diagram | 7 steps |
| Card Grid | 6 cards (2×3 or 3×2) |
| Labelled Anatomy | 10 labels max |
| Cyclic Diagram | 6 nodes in the loop |

**If the topic exceeds the cap → SPLIT THE DIAGRAM** into VA-6a, VA-6b, etc. Each sub-diagram has its own full bundle.

#### 5.4.2 The One-Concept Rule
Every diagram explains exactly **one** concept.

#### 5.4.3 The Focal Point Rule
Every diagram has exactly **one** clear focal point. The prompt must declare it explicitly.

#### 5.4.4 White Space
Minimum 60px padding around every node. Minimum 40px between adjacent nodes. The layout must breathe — text length doesn't matter; visual breathing room does.

#### 5.4.5 Colour Discipline
Maximum 5 colours per diagram, all drawn from the locked semantic palette (Section 12.1). No decorative colours, gradients, or shadows unless they aid clarity.

#### 5.4.6 The Squint Test
At 50% zoom, the student must still identify the focal point and main branches at a glance.

#### 5.4.7 The Split Rule
If any anti-clutter rule fails, the diagram is split — not crammed. Text can be as long as needed; the layout must stay clean.

### 5.5 Toxicology Card Schema (for tox chapters only)

Every poison fills the same fixed-field card. No varied diagram types.

```
┌─────────────────────────────────────────────────────┐
│  POISON CARD                                        │
├─────────────────────────────────────────────────────┤
│  1. Name + Synonyms                                 │
│  2. Source / Common forms                           │
│  3. Fatal Dose (FD)                                 │
│  4. Fatal Period (FP)                               │
│  5. Mechanism of Action (MOA)                       │
│  6. Signs & Symptoms                                │
│  7. Treatment                                       │
│  8. Antidote (specific + supportive)                │
│  9. Autopsy / Postmortem findings                   │
│ 10. Medicolegal Importance                          │
│ 11. Notable PYQ / case reference                    │
└─────────────────────────────────────────────────────┘
```

**Rules:**
- All 30+ poisons use this same schema
- Rendered via GPT Image 2 or GPAI
- ⓘ-buttons attach to each of the 11 fields
- Field content can be as long as needed — the card layout must stay clean
- Cross-poison differentiations are Deliverable 3 standalone diff-tables (DT-x)
- **Antidote Cross-Index** is a subject-level pinned artefact

### 5.6 Mnemonic Block

**Placement:** under the diagram, before MCQs — when applicable.

```
[Diagram]
   ↓
[ⓘ-buttons accessible on diagram]
   ↓
🧠 MNEMONIC BLOCK
   ↓
[MCQs]
```

**Format:**

```
🧠 MNEMONIC

[Mnemonic phrase or acronym]
→ Each letter / word decoded line by line

Tag: [📖 Classical] or [⚙️ Auto-generated]
```

**Rules:**
- One mnemonic per diagram maximum
- Skipped if no clean mnemonic exists
- 📖 Classical = standard medical mnemonics widely used in practice
- ⚙️ Auto-generated = constructed by Claude, clearly flagged as a memory aid

### 5.7 Component C: ⓘ-Button Anchors

Every node has an ⓘ button. Tapping it opens a panel with the paraphrased content for that node.

For each node, the framework provides (backend only):

```
NODE NAME: [exact node label as it appears on the diagram]

▶ Start sentence: [verbatim opening line — for Vedant's Ctrl+F locate]
▶ End sentence:   [verbatim closing line — for Vedant's Ctrl+F locate]
▶ Backend source ref: [Source A / Source B + page] — INTERNAL ONLY,
                       never appears in the student-facing panel
```

**Vedant's workflow:** Ctrl+F the start sentence → copy block from start to end → paraphrase pointwise → paste into the ⓘ-button content field. **The paraphrased version is what the student sees — no source name attached.**

**Rules:**
- Anchor sentences must be **verbatim** for Ctrl+F locate
- Every node gets an anchor pair, no exceptions
- Backend source ref is for production logic only — never rendered in the app
- Student-facing ⓘ-button panel shows only the paraphrased content (and exam tags where relevant, e.g. `[BNS 103]`, `[NEET-PG 2022]`)
- For toxicology cards, anchors provided for each of the 11 fields

---

## SECTION 6 — DELIVERABLE 3: DIFFERENTIATION TABLES (STANDALONE)

### 6.1 Why Standalone

Embedding diff-tables inside diagrams forced both to compress. Standalone diff-tables let:
- Diagrams elaborate fully on the conceptual content
- Diff-tables elaborate fully on every comparison point, however many
- Each artefact serves its purpose without crowding the other

### 6.2 The Per-Diff-Table Bundle

```
DIFF-TABLE BUNDLE =
  [Title — Entity A vs Entity B (vs Entity C if 3-way)]
+ [The diff-table — full point-by-point comparison]
+ [Jump-links to parent diagram(s)]
+ [MCQs on discriminating features]
```

### 6.3 Format

```
═══════════════════════════════════════════════════════
DT-[N] — [Entity A] vs [Entity B]
═══════════════════════════════════════════════════════

| Feature              | [Entity A]        | [Entity B]        |
|----------------------|-------------------|-------------------|
| [Feature 1]          | [A description]   | [B description]   |
| [Feature 2]          | [A description]   | [B description]   |
| [Feature 3]          | [A description]   | [B description]   |
| ...                  | ...               | ...               |

🔗 Parent diagrams:
   • VA-6 — Hanging mechanism
   • VA-8 — Throttling mechanism
═══════════════════════════════════════════════════════
```

### 6.4 Rules

- Each diff-table is a standalone, scrollable page in the app
- Numbered DT-1, DT-2, … per chapter (separate from diagram numbering)
- Surfaced in the chapter's Differentiation Tables Index (Section 4.2)
- **No row cap** — a diff-table is as long as the comparison genuinely needs
- **No column cap on entities** — usually 2-way, but 3-way (e.g. Suicidal vs Homicidal vs Accidental) is supported
- Every diff-table carries jump-links to its parent diagrams so students can return to the underlying concept
- Diff-tables get their own MCQ set (Section 7.4) for discriminating-feature questions
- Diff-tables get their own subjective coverage (Section 8.4) where a QBank or QBank-Inspired Q is built around the comparison

### 6.5 Quantity

There is no quantity cap. Every natural contrast in a chapter becomes its own diff-table. For Violent Asphyxia, expect 6–10 diff-tables; for a small chapter, 1–3.

---

## SECTION 7 — DELIVERABLE 4: MCQs

### 7.1 Placement
- Below each diagram, after the mnemonic block (if any) → **diagram MCQs**
- Below each diff-table → **diff-table MCQs**

### 7.2 Format

```
Q[N]. [Question stem]
A) [option]
B) [option]
C) [option]
D) [option]

🔓 [Reveal Answer]

ANSWER REVEAL:
✅ Correct: [Letter] — [bold correct option text]
💡 Explanation: [1–2 line reason — pure content, no textbook name]
🏷️ Tag: [NEET-PG YYYY] / [INI-CET YYYY] / [PG-Inspired] / [UNIV]
```

### 7.3 Quantity

| Artefact | MCQs |
|----------|------|
| Light diagram | 5–6 |
| Medium diagram | 6–8 |
| Heavy diagram | 8–10 |
| Diff-table | 3–5 (focused on discriminating features) |

### 7.4 Three Layers

| Layer | Source | Tag |
|-------|--------|-----|
| **L1** | Verbatim from FMT PYQ Question Bank (NEET-PG / INI-CET 2016–2024) | `[NEET-PG YYYY]` / `[INI-CET YYYY]` |
| **L2** | Claude-generated, PG-pattern | `[PG-Inspired]` |
| **L3** | University-level recall | `[UNIV]` |

**Distribution:** ~50% PG-tier, ~50% UNIV-tier per chapter.

### 7.5 Coverage Rules
- Every Level 1 branch of every diagram → ≥1 MCQ
- Every numerical value → ≥1 MCQ
- Every relevant PYQ from the uploaded Question Bank → appears verbatim
- Every diff-table → ≥1 MCQ on a discriminating feature

---

## SECTION 8 — DELIVERABLE 5: SUBJECTIVE Q-BANK (SUBJECT-WIDE, TOP-PINNED)

### 8.1 Purpose
A single consolidated bank, pinned at the top of the FMT subject view, containing every LAQ and SAQ across all chapters — each with a complete written model answer.

### 8.2 Workflow (LOCKED)

For each chapter:

```
STEP A — QBANK PASS
  Pull every SAQ/LAQ from the uploaded Subjective Q-Bank
  for this chapter. Write the full standalone model answer
  for each. Tag [QBank].

STEP B — COVERAGE PASS
  Identify diagrams AND diff-tables in this chapter not
  touched by any QBank question. Generate SAQs/LAQs in
  QBank style to cover them. Write the full standalone
  model answer for each. Tag [QBank-Inspired].

STEP C — CONTRIBUTE
  Both types added to the subject-wide top-pinned bank
  with chapter tag and jump-links to source diagram(s) +
  source diff-table(s).
```

### 8.3 Two-Layer Tag System

| Layer | Source | Tag |
|-------|--------|-----|
| **L1** | Verbatim from uploaded Subjective Q-Bank | `[QBank]` |
| **L2** | Claude-generated in QBank style | `[QBank-Inspired]` |

### 8.4 Coverage Rule
Every diagram AND every diff-table in the chapter must be touched by at least one subjective question. No artefact goes untested subjectively.

### 8.5 Format

```
═══════════════════════════════════════════════════════
LAQ-[N]   [Marks: 12]   [Tag: QBank / QBank-Inspired]
═══════════════════════════════════════════════════════

CHAPTER: [Parent chapter name]

QUESTION:
[Full question, multi-part if applicable]

📝 MODEL ANSWER (complete, exam-ready):
[Standalone, full written answer the student could literally
write in the exam. No "refer to diagram" redirects. No
textbook name anywhere. Pure content.]

🔗 OPTIONAL — Source artefacts (jump-link):
   • Chapter X · Diagram VA-6
   • Chapter X · DT-2

⏱️ Time allocation: ~25–30 minutes
═══════════════════════════════════════════════════════
```

### 8.6 Quantity Per Chapter (Contributed to the Bank)

| Chapter Weight | LAQs (QBank + Inspired) | SAQs (QBank + Inspired) |
|----------------|--------------------------|--------------------------|
| Heavy | 6–8 | 25–35 |
| Medium | 4–6 | 15–25 |
| Light | 2–4 | 8–15 |

### 8.7 Cardinal Rule
**Every model answer is standalone.** A student who has never seen the diagrams or diff-tables must be able to read the answer and write a full exam answer from it.

### 8.8 Bank Organisation
Toggle views inside the bank:
- **By chapter** — default
- **By question type** — all LAQs first, then all SAQs

Filter chips: `[QBank]` · `[QBank-Inspired]` · LAQ-only · SAQ-only.

---

## SECTION 9 — SUBJECT-LEVEL TOP-PINNED ARTIFACTS

```
APP HOME → Subjects → FMT → Exam Crisis Content
   ↓
┌──────────────────────────────────────────────────┐
│  📚 [PINNED] Subject-Wide Subjective Q-Bank      │
│      All LAQs + SAQs across the entire subject   │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│  ⚖️ [PINNED] IPC↔BNS Quick-Reference Card       │
│      Old → New section mapping with deltas       │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│  💊 [PINNED] Antidote Cross-Index (Toxicology)   │
│      Built during toxicology section production  │
└──────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────┐
│  Chapter 1, 2, 3, …, N                           │
└──────────────────────────────────────────────────┘
```

### 9.1 IPC↔BNS Quick-Reference Card

Built once. Scope gated by the BNS/BNSS shortlist file (Source C).

| Old (IPC / CrPC / IEA) | New (BNS / BNSS / BSA 2023) | Status | Delta / Notes |
|------------------------|-----------------------------|--------|---------------|
| IPC 302 (Murder) | BNS 103 | Renumbered | No substantive change |
| IPC 320 (Grievous hurt) | BNS 117 | **Substantively changed** | Duration: 20 days → 15 days |
| IPC 309 (Attempt to suicide) | — | **Repealed** | No longer criminalised |
| ... | ... | ... | ... |

**Rules:**
- Renumbered-only rows in normal weight
- Substantively-changed rows in **bold** with delta populated
- Repealed sections shown struck-through
- Searchable by either old or new section number
- Only sections present in the BNS/BNSS shortlist appear here

### 9.2 Antidote Cross-Index
Built during toxicology section production. Subject-level: every poison → specific antidote → dose → mechanism → MLI.

---

## SECTION 10 — THE MEDASCEND APP INTERFACE

### 10.1 The Visual Metaphor: Samsung Notes

Annotatable canvas. Free-form text, highlights, images, drawings, ⓘ-button expansion, MCQ reveal, bookmarking. All annotations persist per-user, per-chapter.

### 10.2 Layout Inside a Chapter

```
[CHAPTER COVER]
   Title · Diagram count · Diff-table count · Time-to-complete

[DELIVERABLE 1A — CHAPTER PREREQUISITES]
[DELIVERABLE 1B — DIFFERENTIATION TABLES INDEX]
   ↓ Each row jump-links to its standalone DT page

[DELIVERABLE 2 — DIAGRAM 1 BUNDLE]
   ▸ Diagram-specific prerequisites
   ▸ The diagram (CLEAN, conceptually complete)
      └─ Every node has tappable ⓘ icon
   ▸ Mnemonic block (if applicable)
   ▸ MCQ section (collapsible, reveal-answer)

[DELIVERABLE 2 — DIAGRAM 2 BUNDLE]
   ... same pattern

[... DIAGRAMS 3 to N]

[DELIVERABLE 3 — DT-1 PAGE]    (standalone, opened from index)
   ▸ Title (Entity A vs Entity B)
   ▸ Full diff-table
   ▸ Jump-links to parent diagram(s)
   ▸ MCQs

[DELIVERABLE 3 — DT-2 PAGE]
   ... same pattern

[... DT-1 to DT-M]

[CHAPTER FOOTER]
   🧠 Consolidated Mnemonic List for this chapter
   Mark complete · Bookmark · Share notes
```

Diff-table pages are reachable two ways: from the chapter-top index, or from any diagram's jump-link panel.

### 10.3 Consolidated Mnemonic List (Chapter Footer)

```
🧠 ALL MNEMONICS — [Chapter name]

| Source artefact | Mnemonic | Type |
|-----------------|----------|------|
| Diagram VA-3    | ABC...   | 📖 Classical |
| Diagram VA-7    | XYZ...   | ⚙️ Auto-gen |
| DT-2            | PQR...   | 📖 Classical |
```

Each row links back to its parent artefact.

### 10.4 Cross-Linking Between Bank and Chapter Artefacts

Every subjective entry carries jump-links to its source diagrams AND source diff-tables. Tapping a link opens the parent chapter, scrolls to the artefact, with a back-button that returns to the bank.

---

## SECTION 11 — PRODUCTION WORKFLOW

### 11.1 Per-Chapter Steps

```
STEP 1: Source audit (backend only)
   ├─ Source A for legal references
   ├─ Source B for depth, classification, autopsy
   ├─ Source C for BNS/BNSS shortlist
   └─ Identify every figure, table, numerical value, classification

STEP 2: PYQ + Subjective harvest
   ├─ Pull NEET-PG / INI-CET PYQs from uploaded PYQ Question Bank
   └─ Pull SAQs + LAQs from uploaded Subjective Q-Bank

STEP 3: Artefact planning
   ├─ Determine total diagram count (split if over anti-clutter caps)
   ├─ Determine total diff-table count (every natural contrast → its own DT)
   ├─ Build chapter's Differentiation Tables Index
   └─ For each diagram: information shape → CLARITY CHECK →
       chosen type → engine

STEP 4: Deliverable 1 — Chapter prerequisites + Differentiation Index

STEP 5: Deliverable 2 — Per-diagram bundles
   For each diagram:
     a) Diagram-specific prerequisites
     b) Diagram production prompt (clarity constraints, full conceptual content)
     c) ⓘ-button anchor pairs (Ctrl+F locators; backend source ref internal)
     d) Mnemonic block (if applicable)

STEP 6: Deliverable 3 — Per-diff-table bundles
   For each DT:
     a) Title (Entity A vs Entity B)
     b) Full point-by-point table
     c) Jump-links to parent diagrams
     d) MCQs (3–5)

STEP 7: Deliverable 4 — MCQs per diagram
   ├─ L1: Verbatim PYQs from uploaded bank
   ├─ L2: PG-Inspired generated
   └─ L3: UNIV recall generated

STEP 8: Deliverable 5 — Subjective Q entries → subject-wide bank
   ├─ L1: Answers to every QBank Q for this chapter [QBank]
   └─ L2: Generated coverage-gap Qs + answers [QBank-Inspired]
       (covers any diagram OR diff-table not touched by QBank)

STEP 9: Chapter footer — Consolidated mnemonic list

STEP 10: Self-audit
   ├─ Mandatory on first 3 chapters
   ├─ Mandatory on every toxicology chapter
   ├─ Visual Clarity gate mandatory on every diagram
   └─ Textbook-name-leak check mandatory on every artefact
```

### 11.2 Sign-Off Gates

1. Prerequisites + Differentiation Index signed off → proceed
2. **Diagram passes the Visual Clarity gate** → proceed
3. Diagram prompts produce intended visual + conceptually complete → proceed
4. ⓘ-button anchors locate correctly; student-facing panel carries no source name → proceed
5. Mnemonic block correctly placed + tagged → proceed
6. Diff-tables are complete and standalone with jump-links → proceed
7. MCQs cover every diagram branch + every numerical + every PYQ + every diff-table → proceed
8. Subjective answers — every QBank Q answered + coverage gaps filled + every diagram AND diff-table touched → proceed
9. **Textbook-name-leak check passes** (no source name anywhere student-facing) → proceed
10. Chapter footer mnemonic list complete → upload

### 11.3 Self-Audit Checklist

```
✅ VISUAL CLARITY GATE (every diagram)
   □ Passes the squint test (focal point visible at 50% zoom)
   □ Node count within the cap for that diagram type
   □ One concept per diagram
   □ Clear focal point declared in prompt and visible in output
   □ ≥ 60px padding around nodes, ≥ 40px between nodes
   □ ≤ 5 colours, all from the locked semantic palette
   □ Layout breathes; doesn't feel cluttered

✅ TEXTBOOK-NAME-LEAK CHECK (every artefact)
   □ No textbook name in any ⓘ-button panel
   □ No textbook name in any MCQ explanation
   □ No textbook name in any model answer
   □ No textbook name in any diff-table
   □ No textbook name in any mnemonic block
   □ Backend source refs exist for production but never render

✅ COVERAGE
   □ Every figure addressed in some artefact
   □ Every numerical value reproduced in ⓘ-button or model answer
   □ Every classification has its own diagram (split if needed)
   □ Every natural contrast has its own standalone diff-table
   □ Differentiation Tables Index complete and jump-linked

✅ DIAGRAM FITNESS
   □ Each diagram's visual type matches its information shape
     OR overrides the suggestion in favour of clarity
   □ Engine choice matches the locked roster
   □ Toxicology cards use the locked 11-field schema

✅ ⓘ-BUTTON COVERAGE
   □ Every node has start/end anchor pair (Ctrl+F locators)
   □ Each anchor has a backend source ref (not rendered)
   □ Student-facing panel is paraphrased content only

✅ MNEMONIC COVERAGE
   □ Each applicable artefact has its mnemonic
   □ Tagged Classical 📖 or Auto-gen ⚙️
   □ Chapter footer list complete

✅ MCQ COVERAGE
   □ Every NEET-PG / INI-CET PYQ from uploaded bank present verbatim
   □ Every diagram branch ≥ 1 MCQ
   □ Every numerical value ≥ 1 MCQ
   □ Every diff-table ≥ 1 MCQ on discriminating feature
   □ Every explanation is pure content (no textbook name)

✅ SUBJECTIVE COVERAGE
   □ Every SAQ + LAQ from uploaded Subjective Q-Bank answered → [QBank]
   □ Coverage gaps filled by generated Qs → [QBank-Inspired]
   □ Every diagram touched by ≥ 1 subjective question
   □ Every diff-table touched by ≥ 1 subjective question
   □ Every model answer standalone
   □ Every model answer is pure content (no textbook name)
   □ Every Q chapter-tagged + jump-linked

✅ ACCURACY
   □ Legal references use BNS / BNSS / BSA 2023 codes
   □ Only BNS sections from the shortlist file included
   □ Source conflicts logged in backend errata sheet
   □ Numerical values cross-checked

✅ CLOSED-LOOP TEST
   □ A first-time reader, using only the app, can study the topic
     from zero to mastery without consulting any external source
```

---

## SECTION 12 — DESIGN STANDARDS

### 12.1 Locked Semantic Colour Palette

| Colour | Encodes |
|--------|---------|
| Deep Blue (#1F3A6E) | Definitions, classifications, anatomy |
| Green (#3FA86B) | Mechanisms, pathophysiology, processes |
| Orange (#E8A04A) | Clinical features, signs, autopsy findings |
| Red (#C8534F) | Fatal outcomes, critical findings, fatal periods |
| Purple (#7B5FA8) | Investigations, lab tests, biochemical tests |
| Grey (#5A5A5A) | Medicolegal points, manner of death, BNS sections |

**Override:** parallel-category card grids may use distinct per-card colours; this must be explicitly noted in the prompt. **Maximum 5 colours total per diagram.**

### 12.2 Per-Prompt Variables (NOT globally locked)

Typography, aspect ratio, canvas margins, padding, font hierarchy, border-radius — all decided per-prompt for that specific artefact's shape, density, and engine.

### 12.3 Prompt Standards

Every diagram production prompt must declare:

1. **Diagram type** (with reason if overriding the Section 5.3 suggestion)
2. **Engine** (from locked roster)
3. **Layout instruction** with explicit spatial directives
4. **Canvas specs** (aspect ratio, dimensions)
5. **Title block** content + font
6. **Node / box / card specifications** with exact text
7. **Visual directives** — semantic colour assignments + per-prompt typography
8. **🥇 Clarity constraints (mandatory):**
   - Total node count (within the cap for that diagram type)
   - **Focal point** — single point declared, where the eye must land first
   - White space — minimum padding & inter-node spacing
   - Colour count cap (max 5)
9. **Inclusions** (mandatory items)
10. **Exclusions** (items that explicitly do NOT belong, including "no textbook name anywhere on the canvas")
11. **Do-not-use constraints** (to prevent default-mode reversion)
12. **Anti-clutter declaration:** "do not exceed [N] nodes; if content overflows, request a split rather than cramming. Text length per node is fine; the layout must stay clean."

The prompt must be detailed enough that the same prompt run twice produces near-identical output, and clean enough to pass the Visual Clarity gate on the first attempt.

---

## SECTION 13 — CHARTER

### 13.1 Claude commits to

✅ **Visual clarity as the highest priority on every diagram**
✅ Anti-clutter rules enforced on every diagram
✅ Splitting over cramming whenever a topic exceeds clarity caps
✅ Diagram type chosen for cleanliness, not by rigid formula
✅ Five-deliverable format per chapter + chapter footer mnemonic list
✅ Differentiation Tables Index at the top of every chapter
✅ Diff-tables produced as **standalone artefacts** (DT-1, DT-2, …), not embedded
✅ Every diagram and every diff-table is conceptually complete on its own
✅ Toxicology card schema enforced across all tox chapters
✅ Mnemonic blocks under each relevant artefact
✅ **No textbook source names in any student-facing content — anywhere**
✅ Backend source refs stay backend-only (used for Ctrl+F locators and production logic)
✅ Every MCQ Layer 1 sourced verbatim from uploaded FMT PYQ Question Bank
✅ Every Subjective Layer 1 (QBank) Q answered from the uploaded Subjective Q-Bank
✅ Every Subjective Layer 2 (QBank-Inspired) Q generated to fill coverage gaps
✅ Every subjective answer standalone + chapter-tagged + jump-linked
✅ Every diagram AND every diff-table touched by at least one subjective question
✅ All legal references via current 2023 codes; scope gated by the shortlist file
✅ All diagrams produced using only GPT Image 2 / GPAI / Scispace / Excalidraw (fallback)
✅ Conflict resolutions logged in backend errata sheet
✅ Self-audit on first 3 chapters and on every toxicology chapter
✅ Visual Clarity gate + Textbook-name-leak check run on every artefact

### 13.2 What this system guarantees

1. 100% FMT undergraduate syllabus coverage
2. Every diagram is clean, neat, uncluttered, and conceptually complete
3. Every contrast in the subject lives as a standalone, fully elaborated diff-table
4. Reveal-answer MCQs at the moment of learning, drawn from real PYQs
5. Complete standalone model answers for every subjective Q
6. Every NEET-PG / INI-CET PYQ in the uploaded bank present verbatim in its chapter
7. All law against 2023 codes with IPC↔BNS bridge accessible
8. No textbook name surfaces anywhere a student can see
9. First-time reader achieves mastery using only the app
10. Closed-loop study experience — zero external resources required

---

## APPENDIX — QUICK REFERENCE CARD

```
┌─────────────────────────────────────────────────────────┐
│       MEDASCEND FMT v4.2.1 — DEADLY NOTES BLUEPRINT     │
├─────────────────────────────────────────────────────────┤
│ INTERFACE: Samsung Notes-style annotatable canvas       │
│                                                         │
│ 🥇 #1 NON-NEGOTIABLE: VISUAL CLARITY                    │
│   Every diagram must be neat, clean, uncluttered.       │
│   Diagram type chosen for cleanliness, not by formula.  │
│   Text length is fine — layout must breathe.            │
│   Split before you cram.                                │
│                                                         │
│ 🚫 NEVER:                                               │
│   • Mention any textbook name in student-facing content │
│   • Embed diff-tables inside diagrams                   │
│   • Compress diagram content to fit a diff-table        │
│                                                         │
│ NAVIGATION:                                             │
│   Home → Subjects → FMT → Exam Crisis Content →         │
│      [PINNED] Subject-Wide Subjective Q-Bank            │
│      [PINNED] IPC↔BNS Quick-Reference Card              │
│      [PINNED] Antidote Cross-Index (toxicology)         │
│      Chapter 1, 2, 3, …, N                              │
│                                                         │
│ SOURCES (backend only, never shown to student):         │
│   Source A         — legal references, BNS/BNSS/BSA     │
│   Source B         — depth, classification, autopsy     │
│   Source C         — BNS/BNSS exam-relevance gate       │
│   FMT PYQ QBank    — NEET-PG/INI-CET 2016–2024          │
│   Subjective QBank — chapter-mapped SAQs + LAQs         │
│                                                         │
│ ENGINES (locked roster):                                │
│   GPT Image 2 — workhorse                               │
│   GPAI        — alternate workhorse                     │
│   Scispace    — hierarchical mindmaps only              │
│   Excalidraw  — fallback only                           │
│                                                         │
│ ANTI-CLUTTER CAPS (diagrams):                           │
│   Mindmap        ≤ 12 first-level / 25 total nodes      │
│   Flowchart      ≤ 6 wide × 3 deep                      │
│   Step diagram   ≤ 7 steps                              │
│   Card grid      ≤ 6 cards                              │
│   Anatomy        ≤ 10 labels                            │
│   Cyclic         ≤ 6 nodes                              │
│   Colours        ≤ 5 (semantic palette)                 │
│   Squint test    pass at 50% zoom                       │
│   Over the cap?  SPLIT, don't cram                      │
│                                                         │
│ DIFF-TABLES (standalone, no caps):                      │
│   Each natural contrast → its own DT page               │
│   As many rows as the comparison needs                  │
│   Pure side-by-side comparison (no exam flagging)       │
│   Jump-links to parent diagrams                         │
│                                                         │
│ DELIVERABLES PER CHAPTER (5 + footer):                  │
│   1. Chapter prereqs + Differentiation Tables Index     │
│   2. Diagrams × N:                                      │
│      a) Diagram-specific prereqs                        │
│      b) Diagram (CLEAN, fully elaborated)               │
│      c) ⓘ-button anchors                                │
│      d) Mnemonic block (if applicable)                  │
│   3. Diff-tables × M (standalone artefacts):            │
│      a) Title                                           │
│      b) Full point-by-point table                       │
│      c) Jump-links to parent diagrams                   │
│      d) MCQs (3–5)                                      │
│   4. MCQs per diagram (reveal-answer):                  │
│      L1 [NEET-PG/INI-CET YYYY] — verbatim from QBank    │
│      L2 [PG-Inspired]          — generated              │
│      L3 [UNIV]                 — generated              │
│   5. Subjective Q entries → subject-wide bank:          │
│      L1 [QBank]          — verbatim from uploaded bank  │
│      L2 [QBank-Inspired] — generated to fill gaps       │
│   Footer: Consolidated chapter mnemonic list            │
│                                                         │
│ TOXICOLOGY: locked 11-field Poison Card schema          │
│                                                         │
│ DIAGRAM TYPE = WHATEVER STAYS CLEAN                     │
│   (the Section 5.3 mapping is a starting point only)    │
│                                                         │
│ DIFF-TABLES are STANDALONE, never embedded              │
│                                                         │
│ MNEMONICS: 📖 Classical or ⚙️ Auto-generated            │
│                                                         │
│ COVERAGE RULE: every diagram AND every diff-table       │
│ touched by ≥ 1 subjective question.                     │
│                                                         │
│ LAW: BNS / BNSS / BSA 2023                              │
│      Scope gated by the shortlist file                  │
│      PYQ-to-BNS bridge via IPC↔BNS card                 │
│                                                         │
│ CORE PRINCIPLE: Closed Loop + Clean Loop                │
│   The student never leaves Medascend.                   │
│   No diagram makes them squint.                         │
│   No textbook name leaks through.                       │
└─────────────────────────────────────────────────────────┘
```

---

## 🚦 BLUEPRINT LOCKED

This is the production blueprint. Start any chapter by requesting it by name. The five-deliverable cycle begins immediately, in the locked format, using only the locked engine roster, against the backend source hierarchy, under the **Visual Clarity gate** and the **Textbook-name-leak check**.

**Rule of the build:** if a diagram feels cluttered, split it. If a comparison wants to grow inside a diagram, hand it to a standalone diff-table. If a textbook name nearly slipped in, scrub it.
