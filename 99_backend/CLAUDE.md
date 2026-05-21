# 🛠️ CLAUDE.md — Medascend FMT v4.2.1 Operating Rules (Backend Only)

> **Every new session reads `00_source-materials/medascend_fmt_blueprint_v4_2_1.md` and this file before any other action.** The blueprint is the locked source of truth; if anything here ever conflicts with it, the blueprint wins.

---

## 1. Mission (one line)

Build closed-loop FMT notes that obsolete every external resource for an Indian medical student. If a student finishes Medascend and still needs another book or app, the system has failed.

---

## 2. Source Hierarchy

| Tag | Role | Filename (under `00_source-materials/`) |
|-----|------|-----------------------------------------|
| **Source A** | Current-edition legal references, case law, BNS / BNSS / BSA citations | `Essentials_Of_FMT_KS_Narayan_Reddy_35th_E.txt` |
| **Source B** | Classification depth, autopsy findings, mechanism detail, figures | `Rajesh_Bardale_Forensic_Medicine.txt` |
| **Source C** | BNS / BNSS exam-relevance gate (shortlist) | ⚠️ **NOT YET SUPPLIED** — fallback rule active (see §3) |
| **PYQ Bank** | NEET-PG / INI-CET 2016–2024 — verbatim source for MCQ Layer 1 | `FMT_PYQ_Question_Bank.pdf` |
| **Subjective Bank** | Chapter-mapped LAQs / SAQs — verbatim source for Subjective Layer 1 | `Bardale_Subjective_QBank.md` |
| **BNS / BNSS Code** | Statutory text of the 2023 codes — used for legal verbatim only | `Bns_and_bnss.md` |

**Source-name leak rule (NON-NEGOTIABLE):** none of "Reddy", "Bardale", "Marrow", "PrepLadder", "Vij", "Modi", "Parikh" — or any other textbook name — ever appears in student-facing content. Backend references live **inside HTML comments only** (`<!-- Backend source: Source A p.XXX -->`).

---

## 3. Conflict-Resolution Rules (from blueprint § "SOURCES")

| Domain | Wins |
|--------|------|
| Legal / numerical / current-law disagreement | **Source A** |
| Classification depth / autopsy / mechanism | **Source B** |
| BNS section scope | **Source C** gate |

**Source C fallback (active until Source C is supplied):** the in-scope BNS section set = (sections explicitly cited in Source A) ∪ (sections appearing in the FMT PYQ Bank). Vedant overrides on request.

Every cross-source conflict logged to `99_backend/errata.md` (backend only — NEVER surfaced).

---

## 4. The Five-Deliverable Cycle (blueprint §3 — verbatim)

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
│    d) MCQs (3–5)                                  │
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

## 5. Locked Engine Roster (no exceptions, ever)

| Engine | Role |
|--------|------|
| **GPT Image 2** | Primary workhorse — card grids, comparison tables, labelled anatomical illustrations, custom hybrids, infographic layouts, vertical step diagrams |
| **GPAI** | Alternate to GPT Image 2 — used where GPAI produces a cleaner layout for the same prompt |
| **Scispace** | Hierarchical mindmaps and structural flowcharts — only where the information is genuinely hierarchical AND fits cleanly |
| **Excalidraw** | Fallback only — typically hand-drawn-style cyclic diagrams, custom loops where the above three can't produce clean output |

**Banned:** Canva, BioRender, Mermaid, every other tool. No exceptions. Engine selection rule = cleanest output wins.

**Image generation happens outside this environment.** Claude produces engine-ready text prompts only; Vedant pastes them into GPT Image 2 / GPAI and feeds images back if iteration is needed.

---

## 6. Anti-Clutter Caps (blueprint §5.4.1)

| Diagram Type | Max Nodes |
|--------------|-----------|
| Radial Mindmap | 12 first-level branches, 25 total nodes |
| Horizontal Flowchart | 6 nodes wide, 3 lanes deep |
| Vertical Step Diagram | 7 steps |
| Card Grid | 6 cards (2×3 or 3×2) |
| Labelled Anatomy | 10 labels max |
| Cyclic Diagram | 6 nodes in the loop |
| Colours | ≤ 5 (semantic palette only) |

**Over the cap → SPLIT** (`VA-6a`, `VA-6b`, …). Never cram. Text length per node is fine — the layout must breathe (≥ 60px padding around nodes, ≥ 40px between adjacent nodes). Squint test at 50% zoom: focal point and main branches still legible.

---

## 7. Semantic Colour Palette (blueprint §12.1) — max 5 per diagram

| Colour | Encodes |
|--------|---------|
| Deep Blue `#1F3A6E` | Definitions, classifications, anatomy |
| Green `#3FA86B` | Mechanisms, pathophysiology, processes |
| Orange `#E8A04A` | Clinical features, signs, autopsy findings |
| Red `#C8534F` | Fatal outcomes, critical findings, fatal periods |
| Purple `#7B5FA8` | Investigations, lab tests, biochemical tests |
| Grey `#5A5A5A` | Medicolegal points, manner of death, BNS sections |

Parallel-category card grids may use distinct per-card colours (explicitly noted in the prompt). Hard cap: 5 colours total per diagram.

---

## 8. Five Absolute Non-Negotiables

1. **NO textbook source names in any student-facing content.** Reddy, Bardale, Marrow, Vij, Modi, Parikh, PrepLadder — none appear in ⓘ-button text, MCQ explanations, model answers, mnemonic blocks, or diff-tables. Backend refs live inside HTML comments only.
2. **Visual clarity is paramount.** If a diagram exceeds any anti-clutter cap → split. Never cram. Text length doesn't matter; layout breathing room does.
3. **Diff-tables are standalone artefacts.** Never embedded inside diagrams.
4. **Every subjective answer is fully standalone.** No "refer to diagram" redirects, ever. A student who has never seen the diagrams must write the full exam answer from the model answer alone.
5. **Only the locked engine roster.** GPT Image 2, GPAI, Scispace, Excalidraw (fallback) — nothing else.

(Bonus rule, equally hard: image generation happens outside this environment. Claude produces prompts only; never attempts to generate images itself.)

---

## 9. Default Sign-Off Cadence

| Stage | Pause for sign-off? |
|-------|--------------------|
| After Deliverable 1 (Chapter prereqs + DT index) | ✅ Pause |
| After EACH diagram bundle (Visual Clarity gate + Textbook-name-leak check) | ✅ Pause |
| After ALL diff-tables in the chapter (Deliverable 3 batch) | ✅ Pause |
| After all MCQ passes (Deliverable 4 — coverage gate audited) | ✅ Pause |
| After Subjective Q-bank contributions (Deliverable 5 — coverage gate audited) | ✅ Pause |
| Before chapter lock (footer + production-log update) | ✅ Pause |

**Override:** if Vedant says "auto-pilot through diagrams N–M", run the range without pausing and present the full batch at the end. Auto-pilot scope ends at the diagram set named.

---

## 10. Continuous Backend Hygiene (every chapter)

1. **Source conflicts** (A vs B on the same fact) → log to `99_backend/errata.md` with resolution per §3. Never surfaced.
2. **Self-Audit Gate** fires on:
   - The first 3 chapters
   - Every toxicology chapter (Bardale Ch 32–50)
   Before declaring `[x] locked`, run:
   - Visual Clarity gate (anti-clutter caps + squint test) on every diagram
   - Textbook-name-leak grep across all student-facing files for: `Reddy|Bardale|Marrow|PrepLadder|Vij|Modi|Parikh` — must return zero hits
   - PYQ coverage: every chapter-mapped PYQ in `FMT_PYQ_Question_Bank.pdf` appears verbatim in its host diagram or diff-table
   - Subjective coverage: every diagram AND every diff-table touched by ≥ 1 subjective question
3. **IPC↔BNS card:** when any PYQ cites an IPC section, append the BNS equivalent to `01_subject-level-artifacts/ipc_bns_quick_reference.md`.
4. **Antidote index:** every toxicology poison card auto-contributes to `01_subject-level-artifacts/antidote_cross_index.md`.

---

## 11. File / Folder Naming Conventions

```
/00_source-materials/                       (read-only source files; never edit)
/01_subject-level-artifacts/                (top-pinned, subject-wide)
   ipc_bns_quick_reference.md
   antidote_cross_index.md
   subject_subjective_qbank.md
/02_chapters/
   <chapter-slug>/                          (lowercase, hyphenated, e.g. violent-asphyxia)
      00_chapter-prerequisites.md
      00_differentiation-tables-index.md
      diagrams/
         <DIAGRAM-ID>_<slug>/               (e.g. VA-01_classification, VA-06a_hanging-mechanism)
            01_prereqs.md
            02_diagram-prompt.md
            03_info-button-anchors.md
            04_mnemonic.md                  (only if a clean mnemonic exists)
            05_mcqs.md
      diff-tables/
         DT-<N>_<slug>/                     (e.g. DT-1_hanging-vs-strangulation)
            01_table.md
            02_mcqs.md
      99_chapter-footer.md                  (consolidated mnemonic list)
/99_backend/                                (production-only — never visible to students)
   CLAUDE.md                                (this file)
   errata.md
   production-log.md
```

**Chapter-slug rule:** lowercase, hyphen-separated, content-derived (e.g. `Violent Asphyxia` → `violent-asphyxia`; `Toxicology: General Considerations` → `toxicology-general`).

**Diagram-ID rule:** two-letter chapter code + zero-padded sequence (e.g. `VA-01` … `VA-12`). When a diagram is split, add a lowercase suffix (`VA-06a`, `VA-06b`). Each sub-diagram has its own full bundle.

---

## 12. Student-Facing Tag Whitelist (the only tags allowed in user-visible content)

`[NEET-PG YYYY]` · `[INI-CET YYYY]` · `[QBank]` · `[QBank-Inspired]` · `[PG-Inspired]` · `[UNIV]` · `[BNS XXX]` · `[BNSS XXX]` · `[BSA XXX]` · `[📖 Classical]` · `[⚙️ Auto-generated]`

Anything else (especially textbook names) is forbidden in student-facing surfaces.

---

## 13. Production Flow (per-chapter, summary)

1. Source audit (A + B + PYQs + Subjective bank) for this chapter.
2. Artefact plan: diagram count (split as needed), DT count, engine choice per diagram.
3. Deliverable 1 → pause for sign-off.
4. Loop Deliverable 2 per diagram → pause after each bundle (or run the named auto-pilot range).
5. Loop Deliverable 3 per diff-table → pause after the batch.
6. Deliverable 4 (MCQ coverage gate) → pause.
7. Deliverable 5 (Subjective coverage gate) → pause.
8. Chapter footer + production-log update → mark `[x] locked` with date.

---

## 14. End-of-Session Rule

Before signing off, ensure: production-log reflects current state; errata reflects any new conflicts; subject-level artefacts updated if any new entries; no half-written files left in chapter folders.
