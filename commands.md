# 📋 MedAscend FMT — Continuation Handoff Brief (for new Claude session)

> **READ THIS FIRST. ENTIRE FILE.** Then read `99_backend/CLAUDE.md` and `00_source-materials/medascend_fmt_blueprint_v4_2_1.md` before touching any chapter.

---

## 0. ONE-LINE BRIEF

Build interactive forensic-medicine exam-prep chapters for NEET-PG / INI-CET aspirants. Each chapter is an HTML viewer that renders **10 SVG diagrams** with ⓘ-info popups, plus diff-tables, subjective Q-bank entries, and MCQ banks — all served from a single `data.js` file.

---

## 1. PROJECT STATE — what's already done

**15 / 50 FMT chapters locked** (as of last session). See `99_backend/production-log.md` for the canonical status tracker.

### Locked chapters

| # | Slug folder | Title |
|---|---|---|
| 1 | `legal-procedure` | Legal Procedure |
| 2 | `medical-jurisprudence` | Medical Jurisprudence |
| 3 | `identification` | Identification |
| 4 | `forensic-osteology` | Forensic Osteology |
| 5 | `dna-profiling` | DNA Profiling |
| 6 | `medicolegal-autopsy` | Medicolegal Autopsy |
| 7 | `death-and-changes-after-death` | Death and Changes after Death |
| 8 | `injury-general` | Injury — General Considerations & Biophysics |
| 9 | `mechanical-injury` | Mechanical Injury |
| 10 | `firearm-and-bomb-blast` | Firearm and Bomb Blast Injuries |
| 11 | `regional-injuries` | Regional Injuries |
| 13 | `injury-medicolegal` | Injury — Medicolegal Considerations |
| 14 | `thermal-injuries` | Thermal Injuries |
| 15 | `violent-asphyxia` | Violent Asphyxia |
| 16 | `sexual-offenses` | Virginity, Sexual Offenses and Perversions |

### Pending chapters (Section A — 16 chapters)

12 (RTA), 17 (Impotence/Sterility), 18 (Pregnancy/Delivery), 19 (Abortion/MTP), 20 (Infant Deaths/Female Feticide), 21 (Legitimacy/Paternity), 22 (Assisted Reproduction), 23 (Starvation), 24 (Euthanasia), 25 (Human Rights/Torture/Ethics), 26 (AIDS Medicolegal), 27 (Anesthetic/Operative Deaths), 28 (Embalming), 29 (Forensic Psychiatry), 30 (Trace Evidence), 31 (Forensic Science Lab).

### Pending chapters (Section B — Toxicology — 19 chapters)

32 through 50. **NOTE:** All toxicology chapters have a **MANDATORY self-audit gate** — must run leak-grep + node-integrity-check + `node --check` before declaring locked.

---

## 2. ABSOLUTE NON-NEGOTIABLES (do not violate)

1. **🚫 NO textbook source names anywhere in student-facing content.** Banned strings: `Reddy`, `Bardale`, `Marrow`, `PrepLadder`, `Vij`, `Modi`, `Parikh`. This includes node `label`, `info`, MCQ stems/explanations, diff-table titles/intros, subjective questions/answers, high-yield bullets, prereq `term`/`meaning`. Backend references only inside HTML comments. **Self-audit GREP after every chapter.**
2. **🚫 NO image generation.** Claude produces SVG code directly in `data.js`. No GPT Image / GPAI / Canva / BioRender / Mermaid calls. **EVER.**
3. **🚫 NO half-finished chapters.** Every chapter must pass syntax + leak + node-integrity gate before marking locked.
4. **🚫 Diff-tables are STANDALONE.** Never embed DTs inside diagram SVGs.
5. **🚫 Every subjective answer must be FULLY STANDALONE.** No "refer to diagram" redirects. A student who has never seen the diagrams must be able to write the full exam answer from the model answer alone.

---

## 3. THE CHAPTER TEMPLATE — exactly how every locked chapter is built

Each chapter folder lives at `02_chapters/<slug>/` and contains **two files only**:

```
02_chapters/<slug>/
├── viewer.html      ← 12 lines · copy verbatim · NEVER edit
└── data.js          ← the entire chapter (~200 KB)
```

### `viewer.html` — copy this VERBATIM into every new chapter folder

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Loading… · Medascend FMT</title>
<link rel="stylesheet" href="../../assets/viewer.css">
</head>
<body>
<script src="data.js"></script>
<script src="../../assets/viewer.js"></script>
</body>
</html>
```

### `data.js` — structure (in this exact order)

```javascript
/* ===================================================================
   Medascend FMT — Chapter <N>: <Title>
   =================================================================== */
window.chapterData = (function () {

const STYLE = `<defs>...gradients/filters/CSS...</defs>`;  // copy verbatim from any locked chapter

const SVG_XX01 = `<svg viewBox="0 0 1600 1100" ...>${STYLE}...</svg>`;
const SVG_XX02 = `...`;
// ... 10 SVGs total: XX01 through XX10
// XX = chapter-specific 2-letter prefix (e.g., FO for Forensic Osteology, DP for DNA Profiling)

const NODES = {
  'xx-node-id-1': { label: '...', info: '<p>HTML content...</p>', tags: ['tag1', 'tag2'] },
  // ... one entry per data-node-id that appears in ANY SVG
};

function nodeList(ids) { return ids.map(id => ({ nodeId: id, ...NODES[id] })); }

const MCQS = {
  'XX-01': [
    { stem: '...', options: ['A','B','C','D'], answerIdx: 0, explain: '...', tag: '[PG-Inspired]' },
    // ... 3-6 MCQs per diagram
  ],
  'XX-02': [...],
  // ... XX-01 through XX-10
};

const DIFF_TABLES = [
  {
    id: 'DT-1', title: '...', shortTitle: '...',
    intro: '...',  // optional
    columns: ['Feature', 'A', 'B'],
    rows: [
      ['row label', 'A value', 'B value'],
      // ...
    ],
    parentDiagrams: ['XX-01', 'XX-02'],
    mcqs: [
      { stem: '...', options: [...], answerIdx: 0, explain: '...', tag: '...' },
    ]
  },
  // ... 6 DTs total
];

const SUBJ = [
  {
    id: 'SAQ-<N>.1', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: '...',
    answer: `<h4>Heading</h4><p>...</p>`,  // FULLY STANDALONE — no "see diagram X" references
    sources: ['XX-01 · XX-02'],
    jumpToDiagram: 'XX-01'
  },
  // ... 7 entries total: mix of SAQ + LAQ, mix of [QBank] + [QBank-Inspired] tags
];

return {
  chapterNumber: <N>,
  chapterTitle: '<Title>',
  prereqs: [
    { term: '...', meaning: '...' },
    // ... ~25-35 entries
  ],
  diagrams: [
    { id: 'XX-01', title: '...', shortTitle: '...', svg: SVG_XX01,
      prereqs: [{term:'...',meaning:'...'}],
      nodes: nodeList(['xx-node-id-1', 'xx-node-id-2', ...]),
      mcqs: MCQS['XX-01']
    },
    // ... 10 diagrams
  ],
  diffTables: DIFF_TABLES,
  subjectiveQs: SUBJ,
  highYield: [
    '<strong>★ ...</strong>',  // ~40 single-line bullets
    'See subject-pinned IPC↔BNS Quick-Reference Card + Subject Subjective Q-Bank'  // ALWAYS last line
  ]
};
})();
```

### Per-chapter targets

| Element | Target |
|---|---|
| SVG diagrams | **10** (named `SVG_XX01` … `SVG_XX10`) |
| Nodes (info popups) | **45-70** distributed across 10 diagrams |
| Diff-tables | **6** |
| Subjective entries | **5-9** (mix of SAQ + LAQ; mix of `[QBank]` verbatim and `[QBank-Inspired]`) |
| MCQs | **35-60** (3-6 per diagram + 1-2 per DT) |
| High-yield bullets | **35-45** |
| Prereqs in return block | **25-35** |

### Naming conventions

- **Chapter slug** — lowercase, hyphen-separated, content-derived (e.g., `forensic-osteology`, `sexual-offenses`)
- **SVG variable prefix** — 2 letters per chapter:
  - Ch 4 → `FO` · Ch 5 → `DP` · Ch 8 → `IG` · Ch 11 → `RI` · Ch 16 → `SO` etc.
- **Node IDs** — prefix matching the chapter prefix in lowercase + descriptive slug:
  - `fo-krogman`, `dp-pcr-steps`, `so-hymen-types-1` etc.
- **Diagram IDs** — `XX-01` to `XX-10` (uppercase, zero-padded)
- **Diff-table IDs** — `DT-1` to `DT-6`
- **Subjective IDs** — `SAQ-<chapter>.<N>` or `LAQ-<chapter>.<N>` (e.g., `SAQ-16.1`, `LAQ-4.2`)

---

## 4. STEP-BY-STEP CHAPTER BUILD PROCESS

When the user asks to build a new chapter, follow this EXACT sequence:

### Step 1 — Read references

Always read these before touching the chapter:
- `99_backend/CLAUDE.md`
- `99_backend/production-log.md` (confirm chapter is pending)
- An already-locked chapter as a structural template (recommend `medicolegal-autopsy/data.js` or `regional-injuries/data.js`)

### Step 2 — Extract source content

The chapter source lives in `00_source-materials/`:
- `Rajesh_Bardale_Forensic_Medicine.txt` (Source B — classification depth, autopsy findings, mechanism)
- `Essentials_Of_FMT_KS_Narayan_Reddy_35th_E.txt` (Source A — current-edition legal references, BNS/BNSS/BSA, case law)
- `Bardale_Subjective_QBank.md` (chapter-mapped LAQs/SAQs for `[QBank]` verbatim quotes)
- `FMT_PYQ_Question_Bank.pdf` (NEET-PG / INI-CET 2016-2024 verbatim MCQs)
- `Bns_and_bnss.md` (statutory text)

**Source-conflict resolution:** legal/numerical/current-law disputes → Source A wins. Classification/autopsy/mechanism disputes → Source B wins.

Use `Grep` on the source `.txt` files to locate the chapter content. Bardale chapters are clearly marked (`### Ch. 11 — REGIONAL INJURIES` etc.).

### Step 3 — Plan 10 diagrams

Each diagram occupies a `viewBox="0 0 1600 1100"` canvas. Decide the topical split. Recommendation: 1 master-overview + 8 deep-dive + 1 medicolegal-cross-references.

**Anti-clutter caps (from blueprint §5.4.1):**
- Radial Mindmap: 12 first-level branches, 25 total nodes
- Card Grid: 6 cards (2×3 or 3×2)
- Colours: ≤ 5 per diagram

### Step 4 — Semantic colour palette (max 5 per diagram)

Use the locked gradients in `STYLE` (don't invent new ones):

| Gradient | Encodes |
|---|---|
| `gBlue` | Definitions · classifications · anatomy |
| `gGreen` | Mechanisms · pathophysiology · processes |
| `gOrange` | Clinical features · signs · autopsy findings |
| `gRed` | Fatal outcomes · critical findings |
| `gPurple` | Investigations · lab tests |
| `gGrey` | Medicolegal points · BNS sections |
| `gCream` (`.nbcr` class) | Notebook-card header (master sections) |

### Step 5 — Build `data.js` in order

1. Copy the `STYLE` constant **verbatim** from any locked chapter
2. Write all 10 `SVG_XX01` … `SVG_XX10` constants (each ~50-150 lines)
3. Write `NODES` dict — one entry per `data-node-id` attribute that appears in any SVG
4. `nodeList` helper (one line, identical to every locked chapter)
5. `MCQS` dict
6. `DIFF_TABLES` array
7. `SUBJ` array
8. `return { ... };` block with `prereqs`, `diagrams`, `diffTables`, `subjectiveQs`, `highYield`
9. Close with `})();`

### Step 6 — Self-audit gate (MANDATORY before declaring locked)

Run these three checks. **All must pass.**

```bash
# 1. Syntax check
cd "d:/MedAscend/Notes/MedAscend_Exam_Crisis/02_chapters/<slug>"
node --check data.js
# Should print nothing (success). If error → fix and re-run.
```

```bash
# 2. Textbook-name leak grep (Grep tool)
# Search the data.js file for: \bReddy\b|\bBardale\b|\bMarrow\b|\bPrepLadder\b|\bVij\b|\bModi\b|\bParikh\b
# Expected: "No files found"
# If any matches → strip them out of student-facing content
```

```bash
# 3. Node-integrity check (run this exact node script)
node -e "
const fs = require('fs');
const txt = fs.readFileSync('d:/MedAscend/Notes/MedAscend_Exam_Crisis/02_chapters/<slug>/data.js', 'utf8');
const nodesMatch = txt.match(/const NODES = \{([\s\S]*?)\};\s*\n\s*function nodeList/);
const nodesBlock = nodesMatch[1];
const nodeKeys = new Set([...nodesBlock.matchAll(/^\s*'([^']+)':\s*\{/gm)].map(m => m[1]));
const nodeListCalls = [...txt.matchAll(/nodeList\(\[([^\]]+)\]\)/g)];
let missing = [];
nodeListCalls.forEach(call => {
  const ids = call[1].match(/'([^']+)'/g).map(s => s.slice(1, -1));
  ids.forEach(id => { if (!nodeKeys.has(id)) missing.push(id); });
});
const svgIds = new Set([...txt.matchAll(/data-node-id=\"([^\"]+)\"/g)].map(m => m[1]));
const missingSvgIds = [...svgIds].filter(id => !nodeKeys.has(id));
const unusedNodes = [...nodeKeys].filter(id => !svgIds.has(id));
console.log('NODES:', nodeKeys.size, '· SVG IDs:', svgIds.size);
console.log('Missing in NODES (broken nodeList ref):', missing);
console.log('SVG without NODES (broken data-node-id):', missingSvgIds);
console.log('Unused NODES (declared but unreferenced):', unusedNodes);
"
# All three arrays must be []. NODES size and SVG IDs size must match exactly.
```

### Step 7 — Integration (4 files to update)

After all 3 gates pass, update these 4 files **in order**:

1. **`99_backend/production-log.md`** — change the `- [ ] pending — N. <Title>` line to:
   ```
   - [x] **locked 2026-05-21** — N. <Title>  *(10 diagrams · <NODES> ⓘ nodes · 6 DTs · 7 subjective entries (... SAQ + ... LAQ) · <MCQs> MCQs · <highyield> high-yield)*
   ```
   And increment the `Locked: X / 50.` counter at the bottom.

2. **`index.html`** — replace the `<div class="chapter-card pending">...</div>` for this chapter number with an `<a class="chapter-card locked" href="02_chapters/<slug>/viewer.html">` block. Update the footer `Locked: X / 50 chapters · Last updated 2026-05-21` counter.

3. **`01_subject-level-artifacts/subject_subjective_qbank.md`** — append a new `## 📘 Chapter N — <Title>` section with all subjective entries from this chapter formatted using the existing template (see Ch 16 entries as the most recent format reference).

4. **`01_subject-level-artifacts/ipc_bns_quick_reference.md`** — if this chapter cites any NEW IPC sections, append the corresponding BNS equivalent.

### Step 8 — Status report & ask

End the chapter build with a status table like:

```
Status (X / 50 chapters locked):

| Ch | Title | Diagrams | Nodes | DTs | Subj | MCQs |
|----|-------|----------|-------|-----|------|------|
| ... |
```

Then **ask the user which chapter to build next.** Do not auto-continue.

---

## 5. CONTENT STYLE RULES

### Student-facing tag whitelist (the only tags allowed)

`[NEET-PG YYYY]` · `[INI-CET YYYY]` · `[QBank]` · `[QBank-Inspired]` · `[PG-Inspired]` · `[UNIV]` · `[BNS XXX]` · `[BNSS XXX]` · `[BSA XXX]` · `[📖 Classical]` · `[⚙️ Auto-generated]`

Anything else (especially textbook names) is forbidden in student-facing surfaces.

### Subjective Q-bank entries — tags & sources

- `[QBank]` — verbatim question from `Bardale_Subjective_QBank.md` for this chapter. Use ONLY if the question text is literally in that file.
- `[QBank-Inspired]` — Claude-generated in the same style, filling coverage gaps. Use this for anything not literally in the source file.

### MCQ tags

- `[NEET-PG YYYY]` — verbatim from the PYQ bank. Quote the year of the actual paper.
- `[PG-Inspired]` — Claude-generated in PYQ style (most MCQs)

### IPC → BNS section mapping

The 2023 transition is heavily tested. When citing law:

| Old | New |
|---|---|
| IPC §44 | BNS §2(14) — injury |
| IPC §319 | BNS §114 — hurt |
| IPC §320 | BNS §116 — grievous hurt |
| IPC §375 | BNS §63 — rape |
| IPC §376 | BNS §64-71 — rape punishment |
| IPC §377 | (read down 2018; no equivalent in BNS) |
| CrPC §174 | BNSS §174 — police inquest |
| CrPC §176 | BNSS §196 — magistrate inquest |
| CrPC §53A | BNSS §51 — medical exam of accused |
| IEA §53A | BSA §126 — past sexual history inadmissible |
| IEA §114A | BSA §103 — burden of proof |

Always show both old and new section numbers, with the new one starred (`★`).

### Style markers

- Use `★` to mark high-yield items
- Use `<strong>...</strong>` for bold (the renderer is HTML)
- Use `&apos;` not `'` inside template-literal strings to avoid breakage
- Use `&amp;` not `&` in titles/labels
- Use `&lt;` `&gt;` for `<` `>` in HTML strings

### Cross-chapter references

When linking to another chapter, write `(see Ch X)` or `(Ch X)` — do not link to source textbooks.

---

## 6. WORKING WITH SOURCE FILES — important quirks

### Bardale .txt file

This file has heavy whitespace contamination — `grep` lines often look like every word is on its own line. Read a 200-500 line window around the chapter heading to get the actual content. Chapter headings look like `### Ch. 11 — REGIONAL INJURIES`.

### Reddy .txt file

Cleaner. Contains current BNS section numbers, case law, and modern guidelines (e.g., MoHFW 2014 rape protocol).

### Subjective Q-bank

`Bardale_Subjective_QBank.md` is well-formatted markdown. For each chapter, look for the `### Ch. N — <TITLE>` section and list the SAQs and LAQs verbatim — those become your `[QBank]` entries.

### PYQ PDF

`FMT_PYQ_Question_Bank.pdf` cannot be grepped directly. The relevant PYQs for each chapter are usually mentioned by year+question number in user briefs or in already-locked chapters. Cross-reference the chapter-mapped PYQs in the locked chapters (e.g., Ch 11 cites NEET-PG 2018 Q11 and NEET-PG 2020 Q10).

---

## 7. RECOMMENDED NEXT-CHAPTER ORDER

When user just says "continue", suggest in this order:

1. **Ch 12 Road Traffic Accidents** — natural follow-up to Ch 11 (Regional Injuries); covers pedestrian/cyclist/occupant injury patterns, Waddle's triad, primary/secondary/tertiary impact
2. **Ch 18 Pregnancy & Delivery** — heavy LAQ chapter; integrates with Ch 22 (ART) and Ch 19 (Abortion)
3. **Ch 19 Abortion & MTP** — MTP Act 2021, ethical/legal grey zones
4. **Ch 20 Infant Deaths & Female Feticide** — PCPNDT Act, neonatal autopsy, hydrostatic test
5. **Ch 25 Human Rights, Torture & Medical Ethics** — high-yield ethics MCQs
6. **Ch 32 Toxicology: General Considerations** — entry to Section B; self-audit gate becomes mandatory

For maximum exam yield, prioritise chapters with the most NEET-PG PYQs first. Toxicology chapters all require self-audit; do not batch them.

---

## 8. THINGS THE PREVIOUS CLAUDE LEARNED THE HARD WAY

1. **Stray `</title>` tags** — when copy-pasting SVG headers, sometimes `</text>` accidentally becomes `</title>`. Grep for `</title>` after writing each SVG and fix any.
2. **`'` inside template literals** — use `&apos;` instead of bare `'` to avoid breaking the JavaScript string. Affects words like "Puppe's", "motorcyclist's", "victim's".
3. **"Bardale Table 5.1" leaks** — when summarising source-table content, do NOT cite the source by name. Just write "Common Evidentiary Materials &amp; DNA Sources" without attribution.
4. **`assets/viewer.js` and `assets/viewer.css`** — already exist in the project; don't recreate. They handle the ⓘ-button popups, MCQ rendering, diff-table layout, and subjective-Q expansion. Each chapter only ships `viewer.html` (12 lines) and `data.js`.
5. **Self-audit gate is non-negotiable.** It's tempting to skip after a long build. Don't. The node-integrity check has caught broken `data-node-id` references multiple times.
6. **Append, never rewrite.** When updating `subject_subjective_qbank.md` or `production-log.md` or `index.html`, use the `Edit` tool with targeted `old_string`/`new_string` — don't rewrite the entire file.
7. **The user expects an end-of-chapter status report + the question "want me to continue?"** Don't auto-chain into the next chapter.

---

## 9. PROJECT FILE MAP

```
d:/MedAscend/Notes/MedAscend_Exam_Crisis/
├── commands.md                                   ← THIS FILE
├── index.html                                    ← landing page; update with each chapter lock
├── README.md
│
├── 00_source-materials/                          ← READ-ONLY source files
│   ├── Rajesh_Bardale_Forensic_Medicine.txt
│   ├── Essentials_Of_FMT_KS_Narayan_Reddy_35th_E.txt
│   ├── Bardale_Subjective_QBank.md
│   ├── FMT_PYQ_Question_Bank.pdf
│   ├── Bns_and_bnss.md
│   └── medascend_fmt_blueprint_v4_2_1.md
│
├── 01_subject-level-artifacts/                   ← top-pinned, subject-wide
│   ├── ipc_bns_quick_reference.md
│   ├── antidote_cross_index.md                   ← grows with every toxicology chapter
│   └── subject_subjective_qbank.md               ← append all SAQs/LAQs of locked chapters
│
├── 02_chapters/                                  ← one folder per chapter
│   ├── legal-procedure/        { viewer.html, data.js }
│   ├── medical-jurisprudence/  { viewer.html, data.js }
│   ├── identification/         { viewer.html, data.js }
│   ├── forensic-osteology/     { viewer.html, data.js }
│   ├── dna-profiling/          { viewer.html, data.js }
│   ├── medicolegal-autopsy/    { viewer.html, data.js }
│   ├── death-and-changes-after-death/ { viewer.html, data.js }
│   ├── injury-general/         { viewer.html, data.js }
│   ├── mechanical-injury/      { viewer.html, data.js }
│   ├── firearm-and-bomb-blast/ { viewer.html, data.js }
│   ├── regional-injuries/      { viewer.html, data.js }
│   ├── injury-medicolegal/     { viewer.html, data.js }
│   ├── thermal-injuries/       { viewer.html, data.js }
│   ├── violent-asphyxia/       { viewer.html, data.js }
│   └── sexual-offenses/        { viewer.html, data.js }
│
├── 99_backend/                                   ← never visible to students
│   ├── CLAUDE.md                                 ← operating rules (read first)
│   ├── production-log.md                         ← chapter status tracker
│   └── errata.md                                 ← source-conflict log
│
└── assets/                                       ← shared CSS+JS for all chapters
    ├── viewer.css
    └── viewer.js
```

---

## 10. SAMPLE OPENING PROMPT FOR THE NEXT CLAUDE SESSION

If you're the new Claude reading this — when the user invokes you, your opening move should be:

> I've read `commands.md`, `99_backend/CLAUDE.md`, and `99_backend/production-log.md`. Current state: **15/50 chapters locked**. The next chapter you suggested in priority order is Ch 12 RTA (natural follow-up to Ch 11 Regional Injuries). Want me to start with Ch 12, or specify a different chapter?

Then follow the Step 1 → 8 process for whichever chapter the user picks.

---

## 11. WHAT THE USER WANTS

- High-quality content, professionally organised SVGs
- No hurry — accuracy over speed
- Each chapter follows the same template (consistency matters)
- Status report after each chapter
- Pause and confirm before starting the next chapter
- ASAP completion of both Section A (Forensic Medicine) and Section B (Toxicology)

---

**End of brief. Now read `99_backend/CLAUDE.md` and begin.**
