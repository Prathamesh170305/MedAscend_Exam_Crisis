/* ===================================================================
   Medascend FMT — Chapter 5: DNA Profiling
   =================================================================== */
window.chapterData = (function () {

const STYLE = `<defs>
  <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="#0F1729" flood-opacity="0.12"/></filter>
  <filter id="cardShadowSoft" x="-10%" y="-10%" width="120%" height="120%"><feDropShadow dx="0" dy="1" stdDeviation="3" flood-color="#0F1729" flood-opacity="0.08"/></filter>
  <filter id="iconGlow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#15294F" flood-opacity="0.30"/></filter>
  <linearGradient id="gBlue" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#2D4B82"/><stop offset="100%" stop-color="#15294F"/></linearGradient>
  <linearGradient id="gGreen" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#3D8B5B"/><stop offset="100%" stop-color="#1F5A3D"/></linearGradient>
  <linearGradient id="gRed" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#A14B47"/><stop offset="100%" stop-color="#6E2E2A"/></linearGradient>
  <linearGradient id="gOrange" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#C58A3D"/><stop offset="100%" stop-color="#8E5E1F"/></linearGradient>
  <linearGradient id="gPurple" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#6B4F8E"/><stop offset="100%" stop-color="#4A3667"/></linearGradient>
  <linearGradient id="gGrey" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4A4D55"/><stop offset="100%" stop-color="#2C2F36"/></linearGradient>
  <linearGradient id="gCream" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#FCF8EC"/><stop offset="100%" stop-color="#F0E5C0"/></linearGradient>
  <linearGradient id="gBodyLight" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#FBFAF6"/></linearGradient>
</defs>
<style>
  .t-title{font-family:'Inter',system-ui,sans-serif;font-size:30px;font-weight:800;fill:#15294F;letter-spacing:-0.5px}
  .t-sub{font-family:'Inter',system-ui,sans-serif;font-size:14.5px;font-weight:500;fill:#6B7283}
  .t-hdr{font-family:'Inter',system-ui,sans-serif;font-size:17px;font-weight:700;fill:#fff;letter-spacing:0.2px}
  .t-nlg{font-family:'Inter',system-ui,sans-serif;font-size:20px;font-weight:800;fill:#fff;letter-spacing:-0.3px}
  .t-body{font-family:'Inter',system-ui,sans-serif;font-size:13px;font-weight:500;fill:#fff}
  .t-bodyd{font-family:'Inter',system-ui,sans-serif;font-size:13.5px;font-weight:500;fill:#1A1D26}
  .t-keylbl{font-family:'Inter',system-ui,sans-serif;font-size:12.5px;font-weight:700;fill:#15294F}
  .t-keyval{font-family:'Inter',system-ui,sans-serif;font-size:13px;font-weight:500;fill:#1A1D26}
  .t-info{font-family:'Inter',system-ui,sans-serif;font-size:13px;font-weight:800;fill:#15294F}
  .t-pill{font-family:'Inter',system-ui,sans-serif;font-size:11px;font-weight:700;fill:#fff;letter-spacing:0.2px}
  .nbcr{fill:url(#gCream);stroke:#D6C480;stroke-width:1.5;filter:url(#cardShadow)}
  .body-white{fill:url(#gBodyLight);stroke:#E5E7EE;stroke-width:1;filter:url(#cardShadowSoft)}
  .ic{fill:#fff;stroke:#15294F;stroke-width:2;filter:url(#iconGlow)}
</style>`;

const SVG_DP01 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">DNA Profiling — Master Overview</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Alec Jeffreys 1984 (Leicester) · 4 typing methods · 10 forensic applications</text>

<g data-node-id="dp-history"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🧬 DNA FINGERPRINTING — Origin</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">★ <strong>Sir Alec JEFFREYS</strong> discovered DNA fingerprinting in <strong>1984</strong> at <strong>LEICESTER UNIVERSITY</strong>. By 1984, he used restriction enzymes to fragment DNA → obtained band patterns akin to supermarket bar-codes. This discovery <strong>REVOLUTIONIZED forensic science</strong>.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-overview"><rect x="60" y="240" width="730" height="320" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="425" y="280" class="t-nlg" text-anchor="middle">🔬 4 DNA Typing Methods</text><text x="90" y="320" class="t-body" font-weight="700">1. ★ RFLP (Restriction Fragment Length Polymorphism)</text><text x="90" y="345" class="t-body">   Restriction enzymes cut DNA → bands on X-ray film</text><text x="90" y="380" class="t-body" font-weight="700">2. ★ PCR (Polymerase Chain Reaction)</text><text x="90" y="405" class="t-body">   Amplifies trace DNA · 3-step procedure</text><text x="90" y="440" class="t-body" font-weight="700">3. ★ STR (Short Tandem Repeats) — CURRENT GOLD STANDARD</text><text x="90" y="465" class="t-body">   2-5 bp microsatellite tandem repeats</text><text x="90" y="500" class="t-body" font-weight="700">4. ★ Mitochondrial DNA (mtDNA)</text><text x="90" y="525" class="t-body">   Maternal inheritance · for old/degraded samples</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-applications"><rect x="810" y="240" width="730" height="320" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="1175" y="280" class="t-nlg" text-anchor="middle">🎯 10 Applications of DNA Profiling</text><text x="830" y="315" class="t-body">1. Identity in sexual crimes (rape, sodomy, buccal coitus)</text><text x="830" y="340" class="t-body">2. Violent crimes — murder · accidents · mass disaster</text><text x="830" y="365" class="t-body">3. Missing person · amnesia · disabled person</text><text x="830" y="390" class="t-body">4. Acquit a FALSELY IMPLICATED person</text><text x="830" y="415" class="t-body">5. PM identification (decomposition · skeleton · exhumation)</text><text x="830" y="440" class="t-body">6. ★ Disputed PATERNITY · disputed maternity</text><text x="830" y="465" class="t-body">7. Adultery · incest · child of rape · custody disputes</text><text x="830" y="490" class="t-body">8. Extortion cases · immigration cases</text><text x="830" y="515" class="t-body">9. Determination of TWIN ZYGOSITY</text><text x="830" y="540" class="t-body">10. Sex identification (from blood, fragments)</text><circle class="ic" cx="1520" cy="258" r="14"/><text class="t-info" x="1520" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-quote"><rect x="60" y="580" width="1480" height="80" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="800" y="615" class="t-nlg" text-anchor="middle">💬 "Some techniques are poor in most cases, some good in many, some good in most — but NONE reliable in EVERY case."</text><text x="800" y="640" class="t-body" text-anchor="middle">— William R Maples (forensic anthropologist)</text><circle class="ic" cx="1510" cy="598" r="14"/><text class="t-info" x="1510" y="604" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-advantages"><rect x="60" y="690" width="730" height="180" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="425" y="730" class="t-nlg" text-anchor="middle">✅ Advantages of DNA Fingerprinting</text><text x="90" y="765" class="t-body">1. ★ <strong>CONCLUSIVE method</strong> of identification</text><text x="90" y="790" class="t-body">2. Can be applied to OLD stains / biological material</text><text x="90" y="815" class="t-body">3. ★ Only a <strong>SMALL quantity of sample</strong> required</text><text x="90" y="845" class="t-body">4. Highly discriminatory power</text><circle class="ic" cx="770" cy="708" r="14"/><text class="t-info" x="770" y="714" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-disadvantages"><rect x="810" y="690" width="730" height="180" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1175" y="730" class="t-nlg" text-anchor="middle">⚠️ Disadvantages / Limitations</text><text x="830" y="765" class="t-body">1. ★ <strong>CANNOT differentiate MONOZYGOTIC TWINS</strong></text><text x="830" y="790" class="t-body">2. EXPENSIVE</text><text x="830" y="815" class="t-body">3. Interpretation needs TRAINED manpower</text><text x="830" y="845" class="t-body">4. Susceptible to CONTAMINATION</text><circle class="ic" cx="1520" cy="708" r="14"/><text class="t-info" x="1520" y="714" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-modern"><rect x="60" y="890" width="1480" height="170" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="930" class="t-nlg" text-anchor="middle">🌐 Modern DNA Profiling in Forensic Practice</text><text x="90" y="965" class="t-body">• ★ <strong>STR-PCR</strong> is the current GOLD STANDARD (rapid, small sample, can type degraded DNA)</text><text x="90" y="990" class="t-body">• ★ <strong>CODIS</strong> (Combined DNA Index System) — USA · 13-20 core STR loci</text><text x="90" y="1015" class="t-body">• ★ <strong>Y-STR</strong> — Y-chromosome typing for sexual assault (separates male contributor in female matrix)</text><text x="90" y="1040" class="t-body">• ★ <strong>mtDNA</strong> — for very degraded samples (bones, teeth, hair shafts) and maternal lineage</text><circle class="ic" cx="1510" cy="908" r="14"/><text class="t-info" x="1510" y="914" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_DP02 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">DNA Structure &amp; Types — Nuclear vs Mitochondrial</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Double helix · A-T C-G base pairs · nDNA vs mtDNA · Chromosomes</text>

<g data-node-id="dp-basics"><rect class="body-white" x="60" y="110" width="730" height="340" rx="14"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 165 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gBlue)"/><text x="80" y="150" class="t-nlg">🧬 DNA — Basic Considerations</text><text x="80" y="195" class="t-keyval">• <strong>NUCLEUS</strong> present in all eukaryotic cells</text><text x="80" y="225" class="t-keyval">• Nucleus contains <strong>CHROMOSOMES</strong> in large part</text><text x="80" y="255" class="t-keyval">• Each chromosome = <strong>2 complementary strands</strong> of DNA</text><text x="80" y="290" class="t-keylbl">DNA = polymer of nucleotides. Each nucleotide:</text><text x="80" y="315" class="t-keyval">1. Phosphate</text><text x="80" y="340" class="t-keyval">2. Deoxyribose (sugar)</text><text x="80" y="365" class="t-keyval">3. One of 4 nitrogenous bases:</text><text x="100" y="390" class="t-keyval">• Adenine (A) · Thymine (T)</text><text x="100" y="415" class="t-keyval">• Guanine (G) · Cytosine (C)</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-bonds"><rect class="body-white" x="810" y="110" width="730" height="340" rx="14"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 165 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gGreen)"/><text x="830" y="150" class="t-nlg">🔗 Base Pairing &amp; H-Bonds</text><text x="830" y="195" class="t-keyval">★ Complementary bases joined by <strong>HYDROGEN BONDS</strong>:</text><text x="830" y="230" class="t-keylbl">• A — T (2 H-bonds)</text><text x="830" y="260" class="t-keylbl">• G — C (3 H-bonds)</text><text x="830" y="300" class="t-keyval">• Chargaff&apos;s rule: A=T, G=C</text><text x="830" y="330" class="t-keyval">• Strands run anti-parallel (5&apos; → 3&apos; vs 3&apos; → 5&apos;)</text><text x="830" y="365" class="t-keyval">• Watson + Crick double-helix structure (1953)</text><text x="830" y="395" class="t-keyval">★ Forms basis for replication + repair + transcription</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-ndna"><rect x="60" y="470" width="730" height="290" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="425" y="510" class="t-nlg" text-anchor="middle">🔬 ★ NUCLEAR DNA (nDNA)</text><text x="90" y="545" class="t-body" font-weight="700">Source:</text><text x="90" y="570" class="t-body">• Within NUCLEUS of each cell · 2 copies (one from each parent)</text><text x="90" y="595" class="t-body">• Organised in 46 chromosomes (22 autosomal pairs + 1 sex pair)</text><text x="90" y="630" class="t-body" font-weight="700">Inheritance:</text><text x="90" y="655" class="t-body">• <strong>BIPARENTAL</strong> — 50% from each parent</text><text x="90" y="690" class="t-body" font-weight="700">Forensic use:</text><text x="90" y="715" class="t-body">• ★ STR-PCR typing — gold standard for fresh samples</text><text x="90" y="740" class="t-body">• Highly discriminatory · individual identification</text><circle class="ic" cx="770" cy="488" r="14"/><text class="t-info" x="770" y="494" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-mtdna"><rect x="810" y="470" width="730" height="290" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1175" y="510" class="t-nlg" text-anchor="middle">🔬 ★ MITOCHONDRIAL DNA (mtDNA)</text><text x="830" y="545" class="t-body" font-weight="700">Source:</text><text x="830" y="570" class="t-body">• Within MITOCHONDRIA · ~ 1000-10,000 copies per cell</text><text x="830" y="595" class="t-body">• Circular DNA · 16,569 bp</text><text x="830" y="630" class="t-body" font-weight="700">★ Inheritance — MATERNAL only:</text><text x="830" y="655" class="t-body">• Only from MOTHER (sperm mitochondria destroyed at fertilization)</text><text x="830" y="680" class="t-body">• Tracks maternal lineage across generations</text><text x="830" y="715" class="t-body" font-weight="700">★ Forensic use:</text><text x="830" y="740" class="t-body">• OLD / degraded samples · bones · teeth · hair SHAFTS</text><circle class="ic" cx="1520" cy="488" r="14"/><text class="t-info" x="1520" y="494" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-helix"><rect x="60" y="780" width="1480" height="180" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="800" y="820" class="t-nlg" text-anchor="middle">🌀 Double Helix Structure (Watson + Crick 1953)</text><text x="90" y="855" class="t-body">• <strong>2 anti-parallel strands</strong> wound around each other</text><text x="90" y="880" class="t-body">• <strong>Sugar-phosphate backbone</strong> on outside · <strong>bases</strong> on inside (paired by H-bonds)</text><text x="90" y="905" class="t-body">• Diameter ≈ 2 nm · 10 base pairs per turn · 3.4 nm pitch</text><text x="90" y="930" class="t-body">• ★ Total human genome ≈ <strong>3 billion base pairs</strong> · ≈ 30,000 genes</text><circle class="ic" cx="1510" cy="798" r="14"/><text class="t-info" x="1510" y="804" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="980" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="1018" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">🎯 A-T (2 H-bonds) · G-C (3 H-bonds) · nDNA biparental · mtDNA MATERNAL only (sperm mito destroyed at fertilization)</text>
</svg>`;

const SVG_DP03 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ 4 Methods of DNA Typing — Overview</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">RFLP · PCR · STR (gold standard) · Mitochondrial DNA</text>

<g data-node-id="dp-methods-intro"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🔬 4 DNA TYPING METHODS</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Evolution of forensic DNA: <strong>RFLP</strong> (1984 original) → <strong>PCR</strong> (amplification breakthrough) → <strong>STR</strong> (current gold standard) → <strong>mtDNA</strong> (for degraded/old samples). Each method has specific use cases.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-rflp-card"><rect class="body-white" x="60" y="240" width="365" height="380" rx="14"/><path d="M 74,240 H 411 A 14,14 0 0 1 425,254 V 290 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="275" class="t-nlg">1️⃣ RFLP</text><text x="80" y="315" class="t-keyval">★ <strong>R</strong>estriction <strong>F</strong>ragment</text><text x="80" y="340" class="t-keyval"><strong>L</strong>ength <strong>P</strong>olymorphism</text><text x="80" y="375" class="t-keyval"><strong>Mechanism:</strong></text><text x="80" y="400" class="t-keyval">Restriction enzymes cut DNA at specific sites</text><text x="80" y="425" class="t-keyval">→ fragments separated by gel electrophoresis</text><text x="80" y="450" class="t-keyval">→ Southern blot · radioactive probe</text><text x="80" y="475" class="t-keyval">→ bar-code-like bands on X-ray film</text><text x="80" y="510" class="t-keyval"><strong>Pros:</strong> highly discriminatory · fewer loci needed</text><text x="80" y="545" class="t-keyval"><strong>Cons:</strong> needs <strong>HIGH-MOLECULAR-WEIGHT, HIGH-QUALITY DNA</strong></text><text x="80" y="580" class="t-keyval">★ Needs LARGE sample · slow</text><circle class="ic" cx="405" cy="258" r="14"/><text class="t-info" x="405" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-pcr-card"><rect class="body-white" x="445" y="240" width="365" height="380" rx="14"/><path d="M 459,240 H 796 A 14,14 0 0 1 810,254 V 290 H 445 V 254 A 14,14 0 0 1 459,240 Z" fill="url(#gGreen)"/><text x="465" y="275" class="t-nlg">2️⃣ PCR</text><text x="465" y="315" class="t-keyval">★ <strong>P</strong>olymerase <strong>C</strong>hain</text><text x="465" y="340" class="t-keyval"><strong>R</strong>eaction (Kary Mullis 1985)</text><text x="465" y="375" class="t-keyval"><strong>Mechanism:</strong></text><text x="465" y="400" class="t-keyval">Amplifies TRACE DNA exponentially</text><text x="465" y="425" class="t-keyval">3-step thermal cycle:</text><text x="465" y="445" class="t-keyval">• 1. Denaturation (95°C)</text><text x="465" y="465" class="t-keyval">• 2. Annealing (primers, ~55°C)</text><text x="465" y="485" class="t-keyval">• 3. Extension (Taq pol, 72°C)</text><text x="465" y="515" class="t-keyval"><strong>Pros:</strong> ★ TRACE amount sufficient · fast · sensitive</text><text x="465" y="555" class="t-keyval"><strong>Cons:</strong> ★ susceptible to contamination</text><text x="465" y="580" class="t-keyval">★ Hard from degraded DNA</text><circle class="ic" cx="790" cy="258" r="14"/><text class="t-info" x="790" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-str-card"><rect class="body-white" x="830" y="240" width="365" height="380" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 844,240 H 1181 A 14,14 0 0 1 1195,254 V 290 H 830 V 254 A 14,14 0 0 1 844,240 Z" fill="url(#gRed)"/><text x="850" y="275" class="t-nlg">3️⃣ ★ STR — GOLD STANDARD</text><text x="850" y="315" class="t-keyval">★ <strong>S</strong>hort <strong>T</strong>andem <strong>R</strong>epeats</text><text x="850" y="355" class="t-keyval"><strong>Mechanism:</strong></text><text x="850" y="380" class="t-keyval">Targets microsatellite tandem-repeat regions</text><text x="850" y="405" class="t-keyval">(2-5 bp repeats)</text><text x="850" y="430" class="t-keyval">★ PCR-based amplification of STR loci</text><text x="850" y="455" class="t-keyval">→ gel electrophoresis · laser/stain</text><text x="850" y="490" class="t-keyval"><strong>Pros:</strong></text><text x="850" y="510" class="t-keyval">• ★ <strong>Rapid · small sample · CAN type DEGRADED DNA</strong></text><text x="850" y="535" class="t-keyval">• Replaces RFLP for routine forensic</text><text x="850" y="565" class="t-keyval"><strong>CODIS</strong> — 13-20 STR loci used in USA</text><circle class="ic" cx="1175" cy="258" r="14"/><text class="t-info" x="1175" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-mt-card"><rect class="body-white" x="1215" y="240" width="325" height="380" rx="14"/><path d="M 1229,240 H 1526 A 14,14 0 0 1 1540,254 V 290 H 1215 V 254 A 14,14 0 0 1 1229,240 Z" fill="url(#gPurple)"/><text x="1221" y="275" class="t-nlg">4️⃣ mtDNA</text><text x="1221" y="315" class="t-keyval">★ <strong>Mitochondrial DNA</strong> analysis</text><text x="1221" y="355" class="t-keyval"><strong>Source:</strong></text><text x="1221" y="380" class="t-keyval">Mitochondria · circular</text><text x="1221" y="405" class="t-keyval">~ 1000-10000 copies/cell</text><text x="1221" y="440" class="t-keyval"><strong>★ Inheritance:</strong></text><text x="1221" y="465" class="t-keyval">★ <strong>MATERNAL only</strong></text><text x="1221" y="500" class="t-keyval"><strong>Use cases:</strong></text><text x="1221" y="525" class="t-keyval">• ★ OLD / degraded samples</text><text x="1221" y="550" class="t-keyval">• Bones · teeth · hair SHAFTS</text><text x="1221" y="575" class="t-keyval">• Maternal lineage tracing</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-evolution"><rect x="60" y="650" width="1480" height="220" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="800" y="690" class="t-nlg" text-anchor="middle">📈 Evolution of DNA Profiling Methods</text><text x="90" y="725" class="t-body">★ <strong>1984:</strong> Sir Alec JEFFREYS at Leicester University discovers DNA fingerprinting via RFLP</text><text x="90" y="755" class="t-body">★ <strong>1985:</strong> Kary MULLIS invents PCR — Nobel Prize 1993</text><text x="90" y="785" class="t-body">★ <strong>1990s:</strong> STR-PCR developed → high sensitivity + speed → replaces RFLP for routine forensic</text><text x="90" y="815" class="t-body">★ <strong>2000s:</strong> mtDNA + Y-STR + autosomal STR multiplexed kits become standard</text><text x="90" y="845" class="t-body">★ <strong>2010s onward:</strong> Next-generation sequencing (NGS) · rapid DNA · familial searching</text><circle class="ic" cx="1510" cy="668" r="14"/><text class="t-info" x="1510" y="674" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-y-str"><rect x="60" y="890" width="1480" height="170" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="930" class="t-nlg" text-anchor="middle">🎯 Y-STR — Y-chromosome STR analysis</text><text x="90" y="965" class="t-body">• Targets STR loci on the <strong>Y chromosome</strong> only (paternal inheritance)</text><text x="90" y="990" class="t-body">• ★ <strong>SEPARATES MALE contributor</strong> in mixed samples (e.g., sexual assault: male sperm in female matrix)</text><text x="90" y="1015" class="t-body">• Tracks PATERNAL lineage · less discriminating than autosomal STR (shared in male relatives)</text><text x="90" y="1040" class="t-body">• Sister marker for mtDNA (mt = maternal · Y = paternal lineage)</text><circle class="ic" cx="1510" cy="908" r="14"/><text class="t-info" x="1510" y="914" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_DP04 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">RFLP Method — Step by Step</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Original Jeffreys 1984 technique · Restriction enzymes · Southern blot · Radioactive probe</text>

<g data-node-id="dp-rflp-steps"><rect class="body-white" x="60" y="110" width="1480" height="540" rx="14"/><path d="M 74,110 H 1526 A 14,14 0 0 1 1540,124 V 165 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gBlue)"/><text x="800" y="150" class="t-nlg" text-anchor="middle">🔬 RFLP — 6 Steps</text><text x="90" y="195" class="t-keylbl">Step 1 — Extract DNA from sample (blood, semen, tissue)</text><text x="90" y="230" class="t-keylbl">Step 2 — Digest with RESTRICTION ENZYMES (endonucleases):</text><text x="90" y="255" class="t-keyval">• Examples: <strong>EcoR-1, PsT-1, Hinf-1</strong></text><text x="90" y="280" class="t-keyval">• Each enzyme recognises a specific 4-8 bp sequence + cuts at that site</text><text x="90" y="315" class="t-keylbl">Step 3 — Separate fragments by GEL ELECTROPHORESIS:</text><text x="90" y="340" class="t-keyval">• Agarose gel · DC current · smaller fragments migrate further</text><text x="90" y="365" class="t-keyval">• Fragments arranged by SIZE on the gel</text><text x="90" y="400" class="t-keylbl">Step 4 — SOUTHERN BLOT transfer:</text><text x="90" y="425" class="t-keyval">• Transfer fragments from gel to NYLON / nitrocellulose membrane</text><text x="90" y="460" class="t-keylbl">Step 5 — RADIOACTIVE PROBE hybridization:</text><text x="90" y="485" class="t-keyval">• Radio-labelled DNA probe complementary to repetitive sequences</text><text x="90" y="510" class="t-keyval">• Probe binds to its complement on membrane</text><text x="90" y="545" class="t-keylbl">Step 6 — Expose X-RAY FILM:</text><text x="90" y="570" class="t-keyval">• Membrane placed in contact with X-ray film</text><text x="90" y="595" class="t-keyval">• X-ray film developed → ★ shows GRAY-BLACK BANDS (like bar-code)</text><text x="90" y="620" class="t-keyval">• Each band = hybridised radioactive probe with complementary sequence</text><circle class="ic" cx="1510" cy="128" r="14"/><text class="t-info" x="1510" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-rflp-pros"><rect x="60" y="670" width="730" height="200" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="425" y="710" class="t-nlg" text-anchor="middle">✅ Advantages of RFLP</text><text x="90" y="745" class="t-body">1. Differentiates samples from different sources using FEWER loci than other systems</text><text x="90" y="775" class="t-body">2. Detects whether single sample contains DNA from MORE THAN ONE PERSON</text><text x="90" y="805" class="t-body">3. ★ High power of discrimination (hyper-variability at each locus + many loci possible)</text><text x="90" y="835" class="t-body">4. Was the gold standard in 1980s-1990s before STR-PCR</text><circle class="ic" cx="770" cy="688" r="14"/><text class="t-info" x="770" y="694" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-rflp-cons"><rect x="810" y="670" width="730" height="200" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1175" y="710" class="t-nlg" text-anchor="middle">⚠️ Disadvantages of RFLP</text><text x="830" y="745" class="t-body">1. ★ Requires <strong>HIGH-MOLECULAR-WEIGHT, HIGH-QUALITY DNA</strong></text><text x="830" y="775" class="t-body">2. ★ Requires <strong>LARGE sample</strong> (microgram quantity)</text><text x="830" y="805" class="t-body">3. SLOW — radioactive autoradiography takes weeks</text><text x="830" y="835" class="t-body">4. Cannot handle degraded DNA</text><circle class="ic" cx="1520" cy="688" r="14"/><text class="t-info" x="1520" y="694" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-rflp-enzymes"><rect x="60" y="890" width="1480" height="170" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="800" y="930" class="t-nlg" text-anchor="middle">🔬 Key Restriction Enzymes (Endonucleases) — Examples</text><text x="90" y="965" class="t-body">• ★ <strong>EcoR-1</strong> — recognises GAATTC sequence (E. coli RY13)</text><text x="90" y="990" class="t-body">• <strong>PsT-1</strong> — recognises CTGCAG sequence</text><text x="90" y="1015" class="t-body">• <strong>HinF-1</strong> — recognises GANTC sequence</text><text x="90" y="1040" class="t-body">• Hundreds of bacterial restriction enzymes available — each cuts DNA at a unique sequence</text><circle class="ic" cx="1510" cy="908" r="14"/><text class="t-info" x="1510" y="914" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_DP05 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">PCR Method — Polymerase Chain Reaction</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Kary Mullis 1985 · Nobel Prize 1993 · DNA amplification</text>

<g data-node-id="dp-pcr-intro"><rect class="nbcr" x="60" y="110" width="1480" height="120" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🔬 PCR — Discovery + Use</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">★ <strong>Kary Mullis</strong> invented PCR in <strong>1985</strong> (Nobel Prize 1993). ★ <strong>PCR amplifies a TRACE amount of DNA EXPONENTIALLY</strong>. After 30 cycles → ~ 10⁹-fold amplification. Forensic-critical when only a few cells are recovered from crime scene.</text><text x="90" y="210" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">PCR is now COMBINED with STR analysis (★ STR-PCR is current gold standard).</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-pcr-steps"><rect class="body-white" x="60" y="260" width="1480" height="350" rx="14"/><path d="M 74,260 H 1526 A 14,14 0 0 1 1540,274 V 315 H 60 V 274 A 14,14 0 0 1 74,260 Z" fill="url(#gGreen)"/><text x="800" y="300" class="t-nlg" text-anchor="middle">🔬 PCR — 3 Steps per Thermal Cycle</text><text x="90" y="350" class="t-keylbl">★ STEP 1 — DENATURATION (~95°C):</text><text x="90" y="375" class="t-keyval">• Double-strand DNA is heated → separates into 2 single strands</text><text x="90" y="400" class="t-keyval">• H-bonds between A-T + G-C broken</text><text x="90" y="445" class="t-keylbl">★ STEP 2 — ANNEALING (~55°C):</text><text x="90" y="470" class="t-keyval">• Temperature lowered → short DNA <strong>PRIMERS</strong> (synthetic oligonucleotides) bind to specific complementary sites</text><text x="90" y="495" class="t-keyval">• Forward + reverse primers bracket the region of interest</text><text x="90" y="540" class="t-keylbl">★ STEP 3 — EXTENSION (~72°C):</text><text x="90" y="565" class="t-keyval">• <strong>Taq DNA polymerase</strong> (from Thermus aquaticus) extends new strand from primer&apos;s 3&apos; end</text><text x="90" y="590" class="t-keyval">• Synthesis 5&apos; → 3&apos; · uses dNTPs (A, T, G, C nucleotides)</text><text x="90" y="615" class="t-keyval">• At end of each cycle → 2 identical double-stranded DNA copies (exponential growth)</text><circle class="ic" cx="1510" cy="278" r="14"/><text class="t-info" x="1510" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-pcr-pros"><rect x="60" y="630" width="730" height="200" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="425" y="670" class="t-nlg" text-anchor="middle">✅ Advantages of PCR</text><text x="90" y="705" class="t-body">1. ★ <strong>Requires only TRACE amount of DNA</strong> (single cell sufficient)</text><text x="90" y="735" class="t-body">2. ★ <strong>FAST</strong> — 2-3 hours vs RFLP weeks</text><text x="90" y="765" class="t-body">3. ★ Highly SENSITIVE — can detect ng or pg amounts</text><text x="90" y="795" class="t-body">4. No radioactive materials</text><circle class="ic" cx="770" cy="648" r="14"/><text class="t-info" x="770" y="654" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-pcr-cons"><rect x="810" y="630" width="730" height="200" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1175" y="670" class="t-nlg" text-anchor="middle">⚠️ Disadvantages of PCR</text><text x="830" y="705" class="t-body">1. ★ Highly susceptible to <strong>CONTAMINATION</strong> (single extraneous cell can amplify)</text><text x="830" y="735" class="t-body">2. ★ PCR amplification is DIFFICULT from degraded DNA</text><text x="830" y="765" class="t-body">3. Requires careful primer design</text><text x="830" y="795" class="t-body">4. Allele drop-out can occur with very small samples</text><circle class="ic" cx="1520" cy="648" r="14"/><text class="t-info" x="1520" y="654" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-pcr-exponential"><rect x="60" y="850" width="1480" height="210" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="800" y="890" class="t-nlg" text-anchor="middle">📈 PCR — Exponential Amplification</text><text x="90" y="925" class="t-body">Each cycle DOUBLES the target sequence: 1 → 2 → 4 → 8 → 16 → 32 → … (2ⁿ)</text><text x="90" y="955" class="t-body">★ After 30 cycles → 2³⁰ ≈ <strong>10⁹ copies</strong> from a single starting template</text><text x="90" y="985" class="t-body">A complete PCR run with 30 cycles takes ~2-3 hours using a <strong>thermal cycler</strong></text><text x="90" y="1015" class="t-body">★ Forensic application: a single cell from a crime-scene sample can be amplified to detectable quantities</text><text x="90" y="1040" class="t-body">Combined with STR markers (STR-PCR) = current forensic GOLD STANDARD</text><circle class="ic" cx="1510" cy="868" r="14"/><text class="t-info" x="1510" y="874" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_DP06 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ STR Method — Current Gold Standard</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Short Tandem Repeats · Microsatellites 2-5 bp · STR-PCR · CODIS</text>

<g data-node-id="dp-tandem"><rect class="body-white" x="60" y="110" width="730" height="280" rx="14"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 165 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gBlue)"/><text x="80" y="150" class="t-nlg">🧬 Tandem Repeats — Classification</text><text x="80" y="195" class="t-keyval">★ Tandem repeated DNA sequences in human genome SHOW</text><text x="80" y="225" class="t-keyval">★ VARIABILITY between individuals</text><text x="80" y="260" class="t-keylbl">2 Groups by repeat region size:</text><text x="80" y="290" class="t-keyval">1. <strong>MINISATELLITES = VNTR</strong></text><text x="80" y="310" class="t-keyval">    (Variable Number of Tandem Repeats)</text><text x="80" y="335" class="t-keyval">    — 10-100 bp repeat units, total kbp</text><text x="80" y="365" class="t-keyval">2. <strong>MICROSATELLITES = STR</strong></text><text x="80" y="385" class="t-keyval">    (Short Tandem Repeats) — ★ <strong>2-5 bp</strong> repeats</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-str-steps"><rect class="body-white" x="810" y="110" width="730" height="280" rx="14"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 165 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gGreen)"/><text x="830" y="150" class="t-nlg">🔬 STR — 4 Steps</text><text x="830" y="195" class="t-keylbl">1. Isolate the DNA from sample</text><text x="830" y="230" class="t-keylbl">2. Replicate STR fragments by PCR</text><text x="830" y="255" class="t-keyval">    (PCR-based amplification of specific STR loci)</text><text x="830" y="290" class="t-keylbl">3. Gel electrophoresis to separate fragments</text><text x="830" y="315" class="t-keyval">    (Capillary electrophoresis in modern labs)</text><text x="830" y="350" class="t-keylbl">4. Identify fragments using stains OR laser detection</text><text x="830" y="380" class="t-keyval">    (Fluorescent dyes on primers → laser-induced fluorescence)</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-str-advantages"><rect x="60" y="410" width="730" height="280" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="425" y="450" class="t-nlg" text-anchor="middle">✅ Advantages of STR — Gold Standard</text><text x="90" y="485" class="t-body">1. ★ <strong>RAPID</strong> — modern STR runs in &lt; 24 h</text><text x="90" y="515" class="t-body">2. ★ <strong>Small sample required</strong> (single cell sufficient via PCR amplification)</text><text x="90" y="545" class="t-body">3. ★ <strong>CAN type DEGRADED DNA</strong> (small target size — 100-300 bp)</text><text x="90" y="575" class="t-body">4. High discriminatory power (multiple loci multiplexed)</text><text x="90" y="605" class="t-body">5. Standardised → cross-lab comparison possible</text><text x="90" y="635" class="t-body">6. Mostly REPLACES RFLP for routine forensic work</text><text x="90" y="665" class="t-body">7. Universal databases enable cold-case + suspect-less searches</text><circle class="ic" cx="770" cy="428" r="14"/><text class="t-info" x="770" y="434" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-codis"><rect x="810" y="410" width="730" height="280" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1175" y="450" class="t-nlg" text-anchor="middle">🇺🇸 CODIS — USA Database</text><text x="830" y="485" class="t-body"><strong>CODIS</strong> = <strong>C</strong>ombined <strong>D</strong>NA <strong>I</strong>ndex <strong>S</strong>ystem</text><text x="830" y="515" class="t-body">FBI-maintained STR database (USA, since 1998).</text><text x="830" y="550" class="t-body">★ <strong>Originally 13 core STR loci</strong></text><text x="830" y="580" class="t-body">★ Expanded to <strong>20 core loci</strong> in 2017</text><text x="830" y="615" class="t-body">Examples: D3S1358 · D5S818 · D7S820 · D8S1179</text><text x="830" y="645" class="t-body">vWA · TH01 · TPOX · CSF1PO · D13S317 · D16S539</text><text x="830" y="670" class="t-body">D18S51 · D21S11 · AmelX/Y (sex)</text><circle class="ic" cx="1520" cy="428" r="14"/><text class="t-info" x="1520" y="434" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-str-loci"><rect x="60" y="710" width="900" height="350" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="510" y="750" class="t-nlg" text-anchor="middle">📍 STR Loci — Examples + Inheritance</text><text x="90" y="790" class="t-body" font-weight="700">Autosomal STR (biparental):</text><text x="90" y="815" class="t-body">• Markers on non-sex chromosomes (1-22)</text><text x="90" y="840" class="t-body">• Each locus has alleles named by REPEAT COUNT</text><text x="90" y="865" class="t-body">• e.g., D3S1358 might show alleles 14, 16 in heterozygote</text><text x="90" y="900" class="t-body" font-weight="700">★ AmelX/Y (Amelogenin):</text><text x="90" y="925" class="t-body">• X chromosome amplifies a 106 bp product</text><text x="90" y="950" class="t-body">• Y chromosome amplifies a 112 bp product</text><text x="90" y="975" class="t-body">• ★ One band = female (XX) · Two bands = male (XY)</text><text x="90" y="1010" class="t-body">★ Allows SEX DETERMINATION from any DNA sample</text><circle class="ic" cx="940" cy="728" r="14"/><text class="t-info" x="940" y="734" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-str-clinical"><rect x="980" y="710" width="560" height="350" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="750" class="t-nlg" text-anchor="middle">🎯 Clinical/Forensic Use</text><text x="1000" y="790" class="t-body" font-weight="700">★ Identity from trace:</text><text x="1000" y="815" class="t-body">• Touch DNA · saliva · cigarette butt · skin cells</text><text x="1000" y="850" class="t-body" font-weight="700">★ Sexual assault:</text><text x="1000" y="875" class="t-body">• Y-STR separates male fraction in vaginal swab</text><text x="1000" y="910" class="t-body" font-weight="700">★ Mass disaster (Tsunami, 9/11, etc.):</text><text x="1000" y="935" class="t-body">• STR from degraded teeth/bone + AM reference</text><text x="1000" y="970" class="t-body" font-weight="700">★ Paternity:</text><text x="1000" y="995" class="t-body">• Child inherits one allele per locus from each parent</text><text x="1000" y="1020" class="t-body">• 16+ matching loci → ★ paternity probability &gt; 99.99%</text><circle class="ic" cx="1520" cy="728" r="14"/><text class="t-info" x="1520" y="734" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_DP07 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Mitochondrial DNA (mtDNA) — Maternal Lineage Tool</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Circular DNA · 16,569 bp · Hair shafts · Bones · Old samples</text>

<g data-node-id="dp-mtdna-features"><rect class="body-white" x="60" y="110" width="730" height="380" rx="14"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 165 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gPurple)"/><text x="80" y="150" class="t-nlg">🧬 mtDNA — Key Features</text><text x="80" y="195" class="t-keyval"><strong>Location:</strong> Inside MITOCHONDRIA (cytoplasmic organelle)</text><text x="80" y="225" class="t-keyval"><strong>Structure:</strong> Circular DNA (no histones)</text><text x="80" y="255" class="t-keyval"><strong>Size:</strong> 16,569 bp (small compared to nuclear)</text><text x="80" y="285" class="t-keyval"><strong>Copy number:</strong> ★ 1000-10,000 copies per cell</text><text x="80" y="320" class="t-keyval">  → much more abundant than nuclear DNA</text><text x="80" y="355" class="t-keylbl">★ INHERITANCE — MATERNAL ONLY</text><text x="80" y="380" class="t-keyval">• Sperm mitochondria are tagged + DESTROYED at fertilization</text><text x="80" y="405" class="t-keyval">• Only the oocyte&apos;s mitochondria pass to offspring</text><text x="80" y="430" class="t-keyval">• Tracks maternal lineage across generations</text><text x="80" y="465" class="t-keylbl">D-loop / HV-1 + HV-2:</text><text x="80" y="490" class="t-keyval">  Hypervariable control regions used for sequencing</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-mtdna-uses"><rect class="body-white" x="810" y="110" width="730" height="380" rx="14"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 165 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gBlue)"/><text x="830" y="150" class="t-nlg">🎯 mtDNA — Forensic Use Cases</text><text x="830" y="195" class="t-keyval">★ When NUCLEAR DNA is degraded / absent:</text><text x="830" y="225" class="t-keyval">• ★ <strong>OLD bones</strong> — skeletal remains, exhumation</text><text x="830" y="255" class="t-keyval">• ★ <strong>TEETH</strong> — DNA preserved in pulp + dentine</text><text x="830" y="285" class="t-keyval">• ★ <strong>HAIR SHAFTS</strong> (without follicle) — no nuclear DNA</text><text x="830" y="315" class="t-keyval">• Decomposed / charred bodies · adipocere</text><text x="830" y="355" class="t-keyval">★ Missing person — maternal relatives as reference</text><text x="830" y="385" class="t-keyval">★ Mass disasters — Identification when only fragments left</text><text x="830" y="420" class="t-keyval">★ Historical / archaeological cases (e.g., Romanov royals, Tsar Nicholas II)</text><text x="830" y="450" class="t-keyval">★ Maternal lineage research / paternity excludes (less powerful)</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-mtdna-vs-ndna"><rect x="60" y="510" width="1480" height="270" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="800" y="550" class="t-nlg" text-anchor="middle">⚖️ mtDNA vs Nuclear DNA — Comparison</text><text x="90" y="585" class="t-body" font-weight="700">FEATURE — Nuclear DNA — Mitochondrial DNA</text><text x="90" y="615" class="t-body">• Location — Nucleus — Mitochondria</text><text x="90" y="640" class="t-body">• Copy number per cell — 2 copies (1 from each parent) — ★ 1000-10000</text><text x="90" y="665" class="t-body">• Inheritance — ★ BIPARENTAL — ★ MATERNAL only</text><text x="90" y="690" class="t-body">• Discriminatory power — HIGH (individual ID) — LOWER (shared in maternal line)</text><text x="90" y="715" class="t-body">• Best for — Fresh samples · standard cases — Old · degraded · hair shafts · bones</text><text x="90" y="745" class="t-body">• Recombination — YES (biparental shuffling) — ★ NONE (clonal inheritance)</text><circle class="ic" cx="1510" cy="528" r="14"/><text class="t-info" x="1510" y="534" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-mtdna-cases"><rect x="60" y="800" width="1480" height="260" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="800" y="840" class="t-nlg" text-anchor="middle">🏛️ Famous mtDNA Forensic Cases</text><text x="90" y="875" class="t-body">★ <strong>Tsar Nicholas II + Romanov family (Russia)</strong> — identified by mtDNA from bone fragments (1991-2007)</text><text x="90" y="905" class="t-body">★ <strong>9/11 World Trade Center victims (USA, 2001)</strong> — mtDNA identified many fragmented remains</text><text x="90" y="935" class="t-body">★ <strong>Indian Ocean Tsunami victims (2004)</strong> — mtDNA for decomposed/decayed bodies (Interpol DVI)</text><text x="90" y="965" class="t-body">★ <strong>Vietnam War MIA soldiers</strong> — mtDNA from skeletal remains decades later</text><text x="90" y="995" class="t-body">★ <strong>Joseph Mengele identification</strong> — mtDNA in exhumed Auschwitz "Angel of Death"</text><text x="90" y="1025" class="t-body" font-style="italic">★ mtDNA is the workhorse for ancient + historical + skeletal identifications</text><circle class="ic" cx="1510" cy="818" r="14"/><text class="t-info" x="1510" y="824" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_DP08 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ 10 Applications of DNA Profiling</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Identity · paternity · disaster ID · acquit innocent · 6 forensic domains</text>

<g data-node-id="dp-apps-overview"><rect class="nbcr" x="60" y="110" width="1480" height="90" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🎯 DNA PROFILING — Forensic Applications (10)</text><text x="90" y="178" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">★ "Few cells are sufficient to obtain DNA information for investigation." — DNA evidence is obtained from crime scene, clinical examination, or dead bodies.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-app1"><rect class="body-white" x="60" y="230" width="490" height="240" rx="14"/><path d="M 74,230 H 536 A 14,14 0 0 1 550,244 V 285 H 60 V 244 A 14,14 0 0 1 74,230 Z" fill="url(#gBlue)"/><text x="80" y="270" class="t-nlg">1️⃣ Identity in Sexual Crimes</text><text x="80" y="310" class="t-keyval">• Rape · sodomy · buccal coitus</text><text x="80" y="335" class="t-keyval">• Semen on vaginal swab / clothes / bedsheet</text><text x="80" y="365" class="t-keyval">• ★ Y-STR separates male contributor</text><text x="80" y="395" class="t-keyval">• DNA from used condom (semen + vaginal + penile + hair)</text><text x="80" y="425" class="t-keyval">★ Critical evidence in BNS rape cases</text><circle class="ic" cx="540" cy="248" r="14"/><text class="t-info" x="540" y="254" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-app2"><rect class="body-white" x="570" y="230" width="490" height="240" rx="14"/><path d="M 584,230 H 1046 A 14,14 0 0 1 1060,244 V 285 H 570 V 244 A 14,14 0 0 1 584,230 Z" fill="url(#gGreen)"/><text x="590" y="270" class="t-nlg">2️⃣ Violent Crimes</text><text x="590" y="310" class="t-keyval">• Murder — DNA on weapon, scene, victim&apos;s nails</text><text x="590" y="340" class="t-keyval">• Mass disasters — accident/terror/transport</text><text x="590" y="370" class="t-keyval">• War casualties (MIA repatriation)</text><text x="590" y="400" class="t-keyval">• Bite marks — saliva DNA</text><circle class="ic" cx="1050" cy="248" r="14"/><text class="t-info" x="1050" y="254" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-app3"><rect class="body-white" x="1080" y="230" width="460" height="240" rx="14"/><path d="M 1094,230 H 1526 A 14,14 0 0 1 1540,244 V 285 H 1080 V 244 A 14,14 0 0 1 1094,230 Z" fill="url(#gOrange)"/><text x="1090" y="270" class="t-nlg">3️⃣ Missing Person / ID</text><text x="1090" y="310" class="t-keyval">• Missing person — match family DNA</text><text x="1090" y="340" class="t-keyval">• Amnesia / disabled person — reunite</text><text x="1090" y="370" class="t-keyval">• Baby mix-ups in hospital</text><text x="1090" y="400" class="t-keyval">• Mistaken identity (police custody)</text><circle class="ic" cx="1530" cy="248" r="14"/><text class="t-info" x="1530" y="254" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-app4"><rect class="body-white" x="60" y="490" width="490" height="240" rx="14"/><path d="M 74,490 H 536 A 14,14 0 0 1 550,504 V 545 H 60 V 504 A 14,14 0 0 1 74,490 Z" fill="url(#gRed)"/><text x="80" y="530" class="t-nlg">4️⃣ ★ Acquit Falsely Implicated</text><text x="80" y="570" class="t-keyval">• EXCLUDES innocent suspects</text><text x="80" y="600" class="t-keyval">• "Innocence Project" cases (USA) — hundreds exonerated</text><text x="80" y="630" class="t-keyval">• Critical defence tool</text><text x="80" y="660" class="t-keyval" font-weight="700">★ "Better to acquit 100 guilty than convict 1 innocent" applied via DNA</text><circle class="ic" cx="540" cy="508" r="14"/><text class="t-info" x="540" y="514" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-app5"><rect class="body-white" x="570" y="490" width="490" height="240" rx="14"/><path d="M 584,490 H 1046 A 14,14 0 0 1 1060,504 V 545 H 570 V 504 A 14,14 0 0 1 584,490 Z" fill="url(#gPurple)"/><text x="590" y="530" class="t-nlg">5️⃣ Postmortem Identification</text><text x="590" y="570" class="t-keyval">• Accidents · disasters</text><text x="590" y="595" class="t-keyval">• ★ Decomposition · mutilated remains</text><text x="590" y="620" class="t-keyval">• ★ Skeleton (mtDNA from femur, teeth)</text><text x="590" y="645" class="t-keyval">• Exhumation</text><text x="590" y="670" class="t-keyval">• Embalmed tissues</text><text x="590" y="700" class="t-keyval">★ Interpol DVI Pink/Yellow form integration (Ch 6)</text><circle class="ic" cx="1050" cy="508" r="14"/><text class="t-info" x="1050" y="514" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-app6"><rect class="body-white" x="1080" y="490" width="460" height="240" rx="14"/><path d="M 1094,490 H 1526 A 14,14 0 0 1 1540,504 V 545 H 1080 V 504 A 14,14 0 0 1 1094,490 Z" fill="url(#gGrey)"/><text x="1090" y="530" class="t-nlg">6️⃣ Disputed Paternity / Maternity</text><text x="1090" y="570" class="t-keyval">• Each locus: child has 1 allele from each parent</text><text x="1090" y="595" class="t-keyval">• &gt;16 STR loci match → 99.99% probability</text><text x="1090" y="625" class="t-keyval">• Exclusion: presence of allele not in alleged parent</text><text x="1090" y="655" class="t-keyval">• ★ Child of rape · custody · false implication</text><text x="1090" y="685" class="t-keyval">• Adultery · incest disputes</text><circle class="ic" cx="1530" cy="508" r="14"/><text class="t-info" x="1530" y="514" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-app-other"><rect x="60" y="750" width="900" height="310" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="510" y="790" class="t-nlg" text-anchor="middle">7️⃣ - 10️⃣ Other Applications</text><text x="90" y="825" class="t-body" font-weight="700">7️⃣ Resolve disputes of:</text><text x="90" y="850" class="t-body">• Adultery · incest · child born out of rape</text><text x="90" y="875" class="t-body">• Custody disputes · child born out of wedlock</text><text x="90" y="900" class="t-body">• False implication of fatherhood</text><text x="90" y="935" class="t-body" font-weight="700">8️⃣ Extortion cases — DNA on threat letters, ransom notes</text><text x="90" y="970" class="t-body" font-weight="700">9️⃣ Immigration cases — biological relatedness check</text><text x="90" y="1005" class="t-body" font-weight="700">🔟 ★ Determination of TWIN ZYGOSITY</text><text x="90" y="1030" class="t-body">• Monozygotic vs dizygotic (★ but cannot differentiate MZ twins from each other)</text><circle class="ic" cx="940" cy="768" r="14"/><text class="t-info" x="940" y="774" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-sex-id"><rect x="980" y="750" width="560" height="310" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="1260" y="790" class="t-nlg" text-anchor="middle">⚥ Sex Identification from DNA</text><text x="1000" y="825" class="t-body">★ Especially from BLOOD STAINS or fragmentary remains</text><text x="1000" y="855" class="t-body" font-weight="700">★ Amelogenin gene (AmelX / AmelY):</text><text x="1000" y="885" class="t-body">• X chromosome → 106 bp PCR product</text><text x="1000" y="910" class="t-body">• Y chromosome → 112 bp PCR product</text><text x="1000" y="945" class="t-body">★ ONE band → FEMALE (XX)</text><text x="1000" y="975" class="t-body">★ TWO bands → MALE (XY)</text><text x="1000" y="1010" class="t-body">★ Useful when only blood / fragment available</text><circle class="ic" cx="1520" cy="768" r="14"/><text class="t-info" x="1520" y="774" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_DP09 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">DNA Evidence Sources — Crime Scene + Autopsy</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Common evidentiary materials · Weapons · Clothes · Toothbrush · Bite mark</text>

<g data-node-id="dp-evidence-intro"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🔍 DNA EVIDENCE — Sources</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">★ <strong>FEW CELLS are sufficient</strong> to obtain DNA information. Evidence (sample) can be obtained from: (1) scene of crime, (2) clinical examination of person, (3) dead body autopsy. Common objects/items found at scene OR during autopsy that can yield DNA are listed below.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-evidence-table"><rect x="60" y="240" width="1480" height="450" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="280" class="t-nlg" text-anchor="middle">📋 ★ Common Evidentiary Materials &amp; DNA Sources</text><text x="90" y="320" class="t-body" font-weight="700">EVIDENCE — SOURCES of DNA</text><text x="90" y="355" class="t-body">• <strong>WEAPONS</strong> — Blood · hair · tissue (from attacker grip / victim&apos;s contact)</text><text x="90" y="385" class="t-body">• <strong>BULLET</strong> — Blood · tissue (from passage through body)</text><text x="90" y="415" class="t-body">• <strong>CLOTHES</strong> — Blood · semen · sweat</text><text x="90" y="445" class="t-body">• <strong>TOOTHBRUSH</strong> — Saliva (cells on bristles)</text><text x="90" y="475" class="t-body">• <strong>USED CIGARETTE / BUTT</strong> — Saliva (epithelial cells on filter)</text><text x="90" y="505" class="t-body">• ★ <strong>USED CONDOM</strong> — Semen · vaginal cells · penile cells · pubic hairs (★ critical in rape)</text><text x="90" y="535" class="t-body">• <strong>BITE MARK</strong> — Saliva (★ should be swabbed immediately + photographed)</text><text x="90" y="565" class="t-body">• <strong>FINGER SCRAPINGS / NAIL CONTENTS</strong> — Tissue · blood (★ from attacker, victim struggle)</text><text x="90" y="610" class="t-body" font-weight="700">★ Additional Sources:</text><text x="90" y="640" class="t-body">• Hair (with root follicle for nuclear DNA · hair shaft for mtDNA)</text><text x="90" y="665" class="t-body">• Skin cells (touch DNA), saliva, urine, feces, vomit, dandruff, earwax</text><circle class="ic" cx="1510" cy="258" r="14"/><text class="t-info" x="1510" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-touch-dna"><rect x="60" y="710" width="900" height="200" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="510" y="750" class="t-nlg" text-anchor="middle">👆 TOUCH DNA</text><text x="90" y="785" class="t-body">★ Skin cells shed by handling an object → DNA profile possible from few cells</text><text x="90" y="815" class="t-body">Sources: door handles · steering wheel · keyboard · weapon grip · clothing collar</text><text x="90" y="845" class="t-body">★ Modern STR-PCR can recover profiles from &lt; 100 pg DNA = ~ 15 cells</text><text x="90" y="875" class="t-body">Risks: secondary transfer (X touched A, then B; B&apos;s DNA found at A&apos;s scene)</text><circle class="ic" cx="940" cy="728" r="14"/><text class="t-info" x="940" y="734" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-postmortem"><rect x="980" y="710" width="560" height="200" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1260" y="750" class="t-nlg" text-anchor="middle">⚰️ Autopsy DNA Sources</text><text x="1000" y="785" class="t-body">• ★ <strong>FEMUR</strong> — best preserved nuclear DNA (cortical bone shields)</text><text x="1000" y="815" class="t-body">• ★ <strong>TEETH</strong> — nuclear + mtDNA (pulp + dentine)</text><text x="1000" y="845" class="t-body">• Blood from cardiac chambers · clot</text><text x="1000" y="870" class="t-body">• Liver / spleen (fresh) · muscle</text><text x="1000" y="895" class="t-body">• Decomposed → quadriceps muscle, ribs</text><circle class="ic" cx="1520" cy="728" r="14"/><text class="t-info" x="1520" y="734" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-fetal"><rect x="60" y="930" width="1480" height="130" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="800" y="970" class="t-nlg" text-anchor="middle">👶 Fetal DNA Sampling</text><text x="90" y="1005" class="t-body">★ Older fetus — <strong>FETAL BLOOD via heart puncture</strong> = optimal sample</text><text x="90" y="1030" class="t-body">Young fetus — <strong>CHORIONIC VILLI</strong> sampling (no maternal contamination) · OR quadriceps muscle / ribs</text><text x="90" y="1055" class="t-body">★ Macerated fetus — <strong>fetal LUNGS + BRAIN</strong> most suitable for DNA typing</text><circle class="ic" cx="1510" cy="948" r="14"/><text class="t-info" x="1510" y="954" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_DP10 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Sample Collection · Preservation · Contamination · Limitations</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">EDTA blood · paper packing · 4°C swabs · NO polythene · Chain of custody</text>

<g data-node-id="dp-collection"><rect class="body-white" x="60" y="110" width="730" height="350" rx="14"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 165 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gBlue)"/><text x="80" y="150" class="t-nlg">📦 Sample Collection — Key Rules</text><text x="80" y="195" class="t-keylbl">1. Dried blood stains (non-porous surface):</text><text x="80" y="220" class="t-keyval">• Lift with conventional ADHESIVE TAPE</text><text x="80" y="255" class="t-keylbl">2. Liquid blood:</text><text x="80" y="280" class="t-keyval">• 2-5 mL IV blood · sterile tube · ★ <strong>4% EDTA</strong> preservative</text><text x="80" y="315" class="t-keylbl">3. Semen / vaginal swabs (rape):</text><text x="80" y="340" class="t-keyval">• Clean + sterile container · ★ &gt; 2 swabs in gang-rape, separate tubes</text><text x="80" y="365" class="t-keyval">• If delay: store at <strong>★ 4°C</strong></text><text x="80" y="400" class="t-keylbl">4. Saliva swabs:</text><text x="80" y="425" class="t-keyval">• ★ <strong>AIR-DRIED</strong> · ★ <strong>DOUBLE SWAB</strong> technique (wet swab + dry swab)</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-storage"><rect class="body-white" x="810" y="110" width="730" height="350" rx="14"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 165 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gOrange)"/><text x="830" y="150" class="t-nlg">📥 Storage &amp; Packing Rules</text><text x="830" y="195" class="t-keyval">★ <strong>Clothes:</strong> AIR DRY → pack in <strong>PAPER</strong> · ★ NEVER polythene/plastic</text><text x="830" y="225" class="t-keyval">• Store at ROOM TEMPERATURE</text><text x="830" y="260" class="t-keyval">★ <strong>NO POLYTHENE BAG</strong> — retains moisture → microbial growth → DNA degraded</text><text x="830" y="295" class="t-keyval">★ <strong>Airtight container</strong> for soft tissue · paper packets for trace evidence</text><text x="830" y="330" class="t-keyval">★ <strong>Avoid 25-37°C storage</strong> for &gt; 2 wk → DNA degrades · PCR amplification fails</text><text x="830" y="365" class="t-keyval">★ Refrigeration (4°C) or freezing for long-term storage</text><text x="830" y="395" class="t-keyval">★ Exhumation cases: dry tissues in sterile container · NO preservative · room temp transport</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-samples-table"><rect x="60" y="480" width="1480" height="220" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="800" y="520" class="t-nlg" text-anchor="middle">📋 Sample &amp; Preservative Summary</text><text x="90" y="555" class="t-body" font-weight="700">SAMPLE — PRESERVATIVE / METHOD</text><text x="90" y="585" class="t-body">• ★ Liquid blood (2-5 mL) — 4% EDTA · sterile tube</text><text x="90" y="610" class="t-body">• Dried blood stain — Adhesive tape lift; pack paper</text><text x="90" y="635" class="t-body">• Semen / vaginal swab — Sterile container; 4°C if delay; AIR DRY first</text><text x="90" y="660" class="t-body">• Saliva swab — Air-dried; double swab technique</text><text x="90" y="685" class="t-body">• Clothes — Air-dried, paper packing, room temp · ★ NEVER polythene</text><circle class="ic" cx="1510" cy="498" r="14"/><text class="t-info" x="1510" y="504" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-contamination"><rect x="60" y="720" width="730" height="340" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="425" y="760" class="t-nlg" text-anchor="middle">⚠️ Sources of DNA Contamination</text><text x="90" y="795" class="t-body" font-weight="700">★ 3 Sources of contamination:</text><text x="90" y="820" class="t-body">1. Sample contamination with GENOMIC DNA from ENVIRONMENT</text><text x="90" y="850" class="t-body">2. Contamination BETWEEN SAMPLES during preparation</text><text x="90" y="880" class="t-body">3. Contamination of sample with AMPLIFIED DNA from PREVIOUS REACTION</text><text x="90" y="915" class="t-body" font-weight="700">★ Factors affecting DNA technique applicability:</text><text x="90" y="945" class="t-body">1. Non-human DNA contamination</text><text x="90" y="970" class="t-body">2. Degradation of sample</text><text x="90" y="995" class="t-body">3. Contamination of sample</text><text x="90" y="1020" class="t-body">4. Multiple contributors to sample (mixtures)</text><circle class="ic" cx="770" cy="738" r="14"/><text class="t-info" x="770" y="744" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dp-limitations"><rect x="810" y="720" width="730" height="340" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1175" y="760" class="t-nlg" text-anchor="middle">📋 DNA Limitations + Consequences</text><text x="830" y="800" class="t-body" font-weight="700">★ Consequences of improper sample handling:</text><text x="830" y="830" class="t-body">1. If NOT properly COLLECTED → biological activity lost</text><text x="830" y="855" class="t-body">2. If improperly PACKED → CROSS CONTAMINATION</text><text x="830" y="880" class="t-body">3. If improperly PRESERVED → decomposition / degradation</text><text x="830" y="910" class="t-body" font-weight="700">★ Inherent Limitations:</text><text x="830" y="935" class="t-body">• ★ Cannot differentiate MONOZYGOTIC TWINS</text><text x="830" y="960" class="t-body">• Costly · technical · time-consuming (vs rapid POC tests)</text><text x="830" y="985" class="t-body">• Interpretation needs expertise (mixture analysis)</text><text x="830" y="1010" class="t-body">• Probabilistic, not absolute (probability statement only)</text><text x="830" y="1035" class="t-body">• Chain of custody breaks → inadmissible in court</text><circle class="ic" cx="1520" cy="738" r="14"/><text class="t-info" x="1520" y="744" text-anchor="middle">ⓘ</text></g>
</svg>`;

const NODES = {
  'dp-history': { label: 'DNA Fingerprinting — Origin', info: '<p>★ <strong>Sir Alec JEFFREYS</strong> discovered DNA fingerprinting in <strong>1984</strong> at <strong>LEICESTER UNIVERSITY</strong> (UK).</p><p>He used restriction enzymes to fragment human DNA → obtained band patterns akin to <strong>supermarket bar-codes</strong>.</p><p>★ His discovery <strong>REVOLUTIONIZED forensic science</strong> and enabled individual identification with near-absolute certainty.</p>', tags: ['Jeffreys 1984 Leicester'] },
  'dp-overview': { label: '4 DNA Typing Methods — Overview', info: '<ol><li>★ <strong>RFLP</strong> (Restriction Fragment Length Polymorphism) — original Jeffreys method</li><li>★ <strong>PCR</strong> (Polymerase Chain Reaction) — amplification</li><li>★ <strong>STR</strong> (Short Tandem Repeats) — current GOLD STANDARD (PCR-based, microsatellite 2-5 bp)</li><li>★ <strong>mtDNA</strong> (Mitochondrial DNA) — maternal inheritance, for degraded samples</li></ol>', tags: ['4 methods'] },
  'dp-applications': { label: '10 Applications of DNA Profiling', info: '<ol><li>Identity in sexual crimes (rape, sodomy, buccal coitus)</li><li>Violent crimes — murder, accidents, mass disasters</li><li>Missing person · amnesia · disabled</li><li>★ Acquit a FALSELY IMPLICATED person</li><li>Postmortem identification — decomposition, skeleton, exhumation</li><li>★ Disputed PATERNITY / maternity</li><li>Adultery · incest · child of rape · custody disputes · false implication</li><li>Extortion cases · immigration cases</li><li>Determination of TWIN ZYGOSITY</li><li>★ Sex identification (amelogenin)</li></ol>', tags: ['10 uses'] },
  'dp-quote': { label: 'William R Maples Quote', info: '<p>"Some techniques are poor in most cases, some good in many cases and some are good in most cases, but none are reliable in every case." — <strong>William R Maples</strong> (forensic anthropologist).</p><p>Underscores that DNA profiling, while powerful, is not infallible — needs careful collection, preservation, and interpretation.</p>', tags: ['Maples'] },
  'dp-advantages': { label: 'Advantages of DNA Fingerprinting', info: '<ol><li>★ <strong>CONCLUSIVE method</strong> of identification of an individual</li><li>Can be applied to OLD stains or biological material</li><li>★ Only SMALL quantity of sample required (via PCR)</li><li>Highly discriminatory power</li><li>Universal databases (CODIS) enable cold-case + suspect-less searches</li></ol>', tags: ['Pros'] },
  'dp-disadvantages': { label: 'Disadvantages of DNA Fingerprinting', info: '<ol><li>★ <strong>CANNOT differentiate MONOZYGOTIC TWINS</strong></li><li>★ EXPENSIVE</li><li>Interpretation requires TRAINED manpower</li><li>Susceptible to CONTAMINATION</li></ol>', tags: ['Cons'] },
  'dp-modern': { label: 'Modern DNA Forensic Practice', info: '<ul><li>★ <strong>STR-PCR</strong> = current GOLD STANDARD — rapid, small sample, can type degraded DNA</li><li>★ <strong>CODIS</strong> (Combined DNA Index System) — USA · originally 13, now 20 core STR loci</li><li>★ <strong>Y-STR</strong> — Y-chromosome STR analysis · separates male contributor in sexual assault swab</li><li>★ <strong>mtDNA</strong> — for degraded samples (bones, teeth, hair shafts) and maternal lineage</li><li>Next-generation sequencing (NGS) · rapid DNA · familial searching emerging</li></ul>', tags: ['STR-PCR · CODIS · Y-STR'] },

  'dp-basics': { label: 'DNA — Basics', info: '<ul><li><strong>NUCLEUS</strong> is present in all eukaryotic cells</li><li>Nucleus contains <strong>CHROMOSOMES</strong></li><li>Each chromosome = <strong>2 complementary strands</strong> of DNA</li></ul><p><strong>DNA = polymer of nucleotides.</strong> Each nucleotide contains:</p><ol><li>Phosphate group</li><li>Deoxyribose sugar</li><li>One of 4 nitrogenous bases — Adenine (A), Thymine (T), Guanine (G), Cytosine (C)</li></ol>', tags: ['Nucleotide structure'] },
  'dp-bonds': { label: 'Base Pairing &amp; Hydrogen Bonds', info: '<p>★ Complementary bases joined by <strong>HYDROGEN BONDS</strong>:</p><ul><li><strong>A — T</strong> (2 H-bonds)</li><li><strong>G — C</strong> (3 H-bonds)</li></ul><p>Chargaff&apos;s rule: A=T, G=C. Strands run anti-parallel (5&apos;→3&apos; vs 3&apos;→5&apos;). Watson + Crick double-helix structure (1953).</p>', tags: ['A-T G-C'] },
  'dp-ndna': { label: '★ Nuclear DNA (nDNA)', info: '<p><strong>Source:</strong> Within nucleus of each cell · 2 copies (one from each parent) · organised in 46 chromosomes (22 autosomal pairs + 1 sex pair).</p><p><strong>★ Inheritance: BIPARENTAL</strong> — 50% from each parent.</p><p><strong>Forensic use:</strong></p><ul><li>★ STR-PCR typing = gold standard for fresh samples</li><li>Highly discriminatory · individual identification</li><li>Best from blood, semen, fresh tissue, fresh bone</li></ul>', tags: ['Biparental · STR'] },
  'dp-mtdna': { label: '★ Mitochondrial DNA (mtDNA)', info: '<p><strong>Source:</strong> Within mitochondria · circular DNA · 16,569 bp · ~ 1000-10,000 copies per cell.</p><p>★ <strong>Inheritance — MATERNAL ONLY</strong>:</p><ul><li>Sperm mitochondria destroyed at fertilization</li><li>Only oocyte&apos;s mitochondria pass to offspring</li><li>Tracks maternal lineage across generations</li></ul><p>★ <strong>Forensic use:</strong> OLD / degraded samples · bones · teeth · hair SHAFTS · ancient remains.</p>', tags: ['Maternal · Degraded'] },
  'dp-helix': { label: 'Double Helix Structure', info: '<p>Watson + Crick (1953):</p><ul><li>2 anti-parallel strands wound around each other</li><li>Sugar-phosphate backbone on outside · bases on inside (paired by H-bonds)</li><li>Diameter ≈ 2 nm · 10 base pairs per turn · 3.4 nm pitch</li></ul><p>★ Total human genome ≈ <strong>3 billion base pairs</strong> · ≈ 30,000 genes.</p>', tags: ['Double helix'] },

  'dp-methods-intro': { label: '4 DNA Typing Methods — Overview', info: '<p>Evolution of forensic DNA:</p><ol><li>★ <strong>RFLP</strong> (1984 original Jeffreys)</li><li>★ <strong>PCR</strong> (1985 Kary Mullis — amplification breakthrough, Nobel 1993)</li><li>★ <strong>STR</strong> (1990s+ — current gold standard, combines PCR + microsatellite repeats)</li><li>★ <strong>mtDNA</strong> (for degraded/old/skeletal samples + maternal lineage)</li></ol>', tags: ['Evolution'] },
  'dp-rflp-card': { label: 'RFLP — Quick Card', info: '<p>★ <strong>R</strong>estriction <strong>F</strong>ragment <strong>L</strong>ength <strong>P</strong>olymorphism (Jeffreys 1984)</p><p><strong>Mechanism:</strong></p><ul><li>Restriction enzymes (endonucleases) cut DNA at specific sites</li><li>Fragments separated by gel electrophoresis</li><li>Southern blot transfers DNA to nylon membrane</li><li>Radioactive probe hybridises with complementary sequences</li><li>X-ray film shows BAR-CODE-like band pattern</li></ul><p><strong>Pros:</strong> highly discriminatory · fewer loci needed.</p><p><strong>Cons:</strong> needs HIGH-MOLECULAR-WEIGHT, HIGH-QUALITY DNA · large sample · slow.</p>', tags: ['Original method'] },
  'dp-pcr-card': { label: 'PCR — Quick Card', info: '<p>★ <strong>P</strong>olymerase <strong>C</strong>hain <strong>R</strong>eaction (Kary Mullis 1985, Nobel 1993)</p><p><strong>Mechanism:</strong> AMPLIFIES trace DNA exponentially. 3-step thermal cycle:</p><ol><li>Denaturation (95°C) — DNA strands separate</li><li>Annealing (~55°C) — primers bind specific sites</li><li>Extension (72°C) — Taq polymerase extends new strand</li></ol><p><strong>Pros:</strong> ★ trace sample sufficient · fast · sensitive.</p><p><strong>Cons:</strong> ★ susceptible to contamination · hard with degraded DNA.</p>', tags: ['Amplification'] },
  'dp-str-card': { label: '★ STR — Gold Standard', info: '<p>★ <strong>S</strong>hort <strong>T</strong>andem <strong>R</strong>epeats — current forensic GOLD STANDARD.</p><p><strong>Mechanism:</strong></p><ul><li>Targets microsatellite tandem-repeat regions (2-5 bp repeats)</li><li>PCR-based amplification of STR loci</li><li>Gel/capillary electrophoresis · fluorescent dye + laser detection</li></ul><p><strong>Pros:</strong> ★ RAPID · small sample · ★ CAN TYPE DEGRADED DNA · multiplexed loci.</p><p>★ <strong>CODIS</strong> — 13-20 STR loci in USA database.</p>', tags: ['Microsatellite · Gold standard'] },
  'dp-mt-card': { label: 'mtDNA — Quick Card', info: '<p>★ Mitochondrial DNA analysis.</p><ul><li><strong>Source:</strong> mitochondria · circular · 1000-10000 copies/cell</li><li><strong>★ Inheritance: MATERNAL only</strong></li></ul><p><strong>Use cases:</strong></p><ul><li>★ OLD / degraded samples</li><li>Bones · teeth · hair SHAFTS</li><li>Maternal lineage tracing</li></ul>', tags: ['Maternal'] },
  'dp-evolution': { label: 'Evolution of DNA Profiling', info: '<ul><li>★ <strong>1984:</strong> Alec Jeffreys at Leicester discovers DNA fingerprinting via RFLP</li><li>★ <strong>1985:</strong> Kary Mullis invents PCR (Nobel Prize 1993)</li><li>★ <strong>1990s:</strong> STR-PCR developed → replaces RFLP for routine forensic</li><li>★ <strong>2000s:</strong> mtDNA + Y-STR + multiplexed autosomal STR kits become standard</li><li>★ <strong>2010s+:</strong> Next-generation sequencing (NGS) · rapid DNA · familial searching</li></ul>', tags: ['Timeline'] },
  'dp-y-str': { label: 'Y-STR Analysis', info: '<p>★ Targets STR loci on the <strong>Y CHROMOSOME ONLY</strong> (paternal inheritance).</p><p>★ <strong>SEPARATES MALE contributor</strong> in mixed samples (e.g., sexual assault — male sperm in female vaginal matrix).</p><ul><li>Tracks PATERNAL lineage</li><li>Less discriminating than autosomal STR (shared in all male relatives)</li><li>Sister marker for mtDNA (mt = maternal · Y = paternal lineage)</li></ul>', tags: ['Male fraction'] },

  'dp-rflp-steps': { label: 'RFLP — 6 Steps', info: '<ol><li><strong>Extract DNA</strong> from sample (blood, semen, tissue)</li><li><strong>Digest with restriction enzymes</strong> — endonucleases (Eco-R-1, PsT-1, Hinf-1) cut DNA at specific 4-8 bp sequences</li><li><strong>Gel electrophoresis</strong> — fragments separated by size</li><li><strong>Southern blot</strong> — transfer fragments to nylon / nitrocellulose membrane</li><li><strong>Radioactive probe hybridisation</strong> — labelled DNA probe binds complementary sequence</li><li><strong>X-ray film exposure</strong> — develop → gray-black bands (bar-code pattern)</li></ol>', tags: ['6 steps'] },
  'dp-rflp-pros': { label: 'RFLP — Advantages', info: '<ol><li>Differentiates samples from different sources using FEWER loci</li><li>Detects whether sample contains DNA from MORE THAN ONE PERSON</li><li>★ High discrimination power (hyper-variability at each locus)</li><li>Was gold standard 1980s-1990s before STR-PCR</li></ol>', tags: ['Pros'] },
  'dp-rflp-cons': { label: 'RFLP — Disadvantages', info: '<ol><li>★ Requires <strong>HIGH-MOLECULAR-WEIGHT, HIGH-QUALITY DNA</strong></li><li>★ Requires <strong>LARGE sample</strong> (microgram amounts)</li><li>SLOW — radioactive autoradiography takes weeks</li><li>Cannot handle degraded DNA</li></ol>', tags: ['Cons'] },
  'dp-rflp-enzymes': { label: 'Restriction Enzymes', info: '<p>Examples of restriction endonucleases used in RFLP:</p><ul><li>★ <strong>EcoR-1</strong> — recognises GAATTC sequence (E. coli RY13)</li><li><strong>PsT-1</strong> — recognises CTGCAG</li><li><strong>HinF-1</strong> — recognises GANTC</li></ul><p>Hundreds of bacterial restriction enzymes available — each cuts DNA at a unique sequence.</p>', tags: ['EcoR-1 · PsT-1 · HinF-1'] },

  'dp-pcr-intro': { label: 'PCR — Origin', info: '<p>★ <strong>Kary Mullis</strong> invented PCR in <strong>1985</strong> (Nobel Prize in Chemistry, 1993).</p><p>★ PCR <strong>AMPLIFIES trace DNA EXPONENTIALLY</strong>. After 30 cycles → ~ 10⁹-fold amplification. Forensic-critical when only a few cells are recovered.</p><p>PCR is now COMBINED with STR analysis — ★ STR-PCR is current gold standard.</p>', tags: ['Mullis 1985 · Nobel 1993'] },
  'dp-pcr-steps': { label: 'PCR — 3 Steps per Thermal Cycle', info: '<ol><li>★ <strong>DENATURATION (~95°C):</strong> double-strand DNA separates into 2 single strands (H-bonds break)</li><li>★ <strong>ANNEALING (~55°C):</strong> short DNA primers bind specific complementary sites</li><li>★ <strong>EXTENSION (~72°C):</strong> Taq polymerase (Thermus aquaticus) extends new strand 5&apos;→3&apos; using dNTPs</li></ol><p>Each cycle DOUBLES target DNA. After 30 cycles → ~ 10⁹ copies.</p>', tags: ['95-55-72 °C'] },
  'dp-pcr-pros': { label: 'PCR — Advantages', info: '<ol><li>★ Requires only TRACE amount of DNA (single cell sufficient)</li><li>★ FAST — 2-3 hours vs RFLP&apos;s weeks</li><li>★ Highly sensitive (ng or pg amounts detectable)</li><li>No radioactive materials needed</li></ol>', tags: ['Trace · Fast'] },
  'dp-pcr-cons': { label: 'PCR — Disadvantages', info: '<ol><li>★ Highly susceptible to CONTAMINATION (single extraneous cell amplifies)</li><li>★ PCR amplification is DIFFICULT from degraded DNA</li><li>Requires careful primer design</li><li>Allele drop-out can occur with very small samples</li></ol>', tags: ['Contamination'] },
  'dp-pcr-exponential': { label: 'PCR — Exponential Amplification', info: '<p>Each cycle DOUBLES the target sequence: 1 → 2 → 4 → 8 → 16 → 32 → … (2ⁿ).</p><p>★ After 30 cycles → 2³⁰ ≈ <strong>10⁹ copies</strong> from a single starting template.</p><p>A complete PCR run with 30 cycles takes ~2-3 hours using a <strong>thermal cycler</strong>.</p><p>★ Forensic application: a single cell from a crime-scene sample can be amplified to detectable quantities.</p>', tags: ['10⁹ copies'] },

  'dp-tandem': { label: 'Tandem Repeats — Classification', info: '<p>★ Tandem-repeated DNA sequences in human genome SHOW VARIABILITY between individuals.</p><p><strong>2 Groups by repeat-region size:</strong></p><ol><li><strong>MINISATELLITES = VNTR</strong> (Variable Number of Tandem Repeats) — 10-100 bp repeat units; total kbp</li><li>★ <strong>MICROSATELLITES = STR</strong> (Short Tandem Repeats) — <strong>2-5 bp</strong> repeats</li></ol>', tags: ['VNTR vs STR'] },
  'dp-str-steps': { label: 'STR — 4 Steps', info: '<ol><li>Isolate DNA from sample</li><li>Replicate STR fragments by PCR (specific primers for each STR locus)</li><li>Gel electrophoresis (capillary in modern labs)</li><li>Identify fragments using stains OR laser detection (fluorescent dyes on primers)</li></ol>', tags: ['4 steps'] },
  'dp-str-advantages': { label: 'STR — Advantages (Why Gold Standard)', info: '<ol><li>★ RAPID — modern STR run &lt; 24 h</li><li>★ Small sample required (single cell via PCR)</li><li>★ CAN TYPE DEGRADED DNA (small target 100-300 bp)</li><li>High discriminatory power (multiplexed loci)</li><li>Standardised → cross-lab comparison</li><li>Mostly REPLACES RFLP for routine forensic</li><li>Universal databases enable cold-case searches</li></ol>', tags: ['Gold standard pros'] },
  'dp-codis': { label: '★ CODIS Database', info: '<p><strong>CODIS</strong> = <strong>C</strong>ombined <strong>D</strong>NA <strong>I</strong>ndex <strong>S</strong>ystem · FBI-maintained STR database (USA, since 1998).</p><ul><li>★ Originally <strong>13 core STR loci</strong></li><li>★ Expanded to <strong>20 core loci in 2017</strong></li></ul><p>Examples: D3S1358 · D5S818 · D7S820 · D8S1179 · vWA · TH01 · TPOX · CSF1PO · D13S317 · D16S539 · D18S51 · D21S11 · AmelX/Y (sex).</p>', tags: ['13 → 20 loci'] },
  'dp-str-loci': { label: 'STR Loci — Examples + Sex Determination', info: '<p><strong>Autosomal STR (biparental):</strong></p><ul><li>Markers on non-sex chromosomes (1-22)</li><li>Each locus alleles named by REPEAT COUNT (e.g., D3S1358 alleles 14, 16)</li></ul><p><strong>★ Amelogenin (AmelX/Y) — Sex Determination:</strong></p><ul><li>X chromosome → 106 bp PCR product</li><li>Y chromosome → 112 bp PCR product</li><li>★ ONE band = FEMALE (XX) · TWO bands = MALE (XY)</li></ul><p>★ Allows SEX determination from any DNA sample including bloodstain.</p>', tags: ['AmelX/Y'] },
  'dp-str-clinical': { label: 'STR — Clinical / Forensic Use', info: '<ul><li>★ Identity from trace — touch DNA · saliva · cigarette butt · skin cells</li><li>★ Sexual assault — Y-STR separates male fraction in vaginal swab</li><li>★ Mass disaster — STR from degraded teeth/bone + AM reference</li><li>★ Paternity — &gt;16 STR loci match → probability &gt; 99.99%</li><li>Exclusion: allele present in child but absent in alleged parent</li></ul>', tags: ['Use cases'] },

  'dp-mtdna-features': { label: 'mtDNA — Key Features', info: '<ul><li><strong>Location:</strong> inside mitochondria (cytoplasmic organelle)</li><li><strong>Structure:</strong> circular DNA, no histones</li><li><strong>Size:</strong> 16,569 bp</li><li>★ <strong>Copy number:</strong> 1000-10,000 copies per cell (vs 2 for nuclear)</li><li>★ <strong>Inheritance: MATERNAL only</strong> — sperm mitochondria destroyed at fertilization</li><li><strong>D-loop / HV-1 + HV-2:</strong> hypervariable control regions used for sequencing</li></ul>', tags: ['Circular · 16569 bp'] },
  'dp-mtdna-uses': { label: 'mtDNA — Forensic Use Cases', info: '<p>When NUCLEAR DNA is degraded / absent:</p><ul><li>★ OLD bones — skeletal remains · exhumation</li><li>★ TEETH — DNA preserved in pulp + dentine</li><li>★ HAIR SHAFTS (without follicle) — no nuclear DNA</li><li>Decomposed / charred bodies · adipocere</li><li>Missing person — maternal relatives as reference</li><li>Mass disasters · historical / archaeological cases</li><li>Maternal lineage research</li></ul>', tags: ['Degraded · Old'] },
  'dp-mtdna-vs-ndna': { label: 'mtDNA vs nDNA — Comparison', info: '<table><tr><th>Feature</th><th>Nuclear</th><th>Mitochondrial</th></tr><tr><td>Location</td><td>Nucleus</td><td>Mitochondria</td></tr><tr><td>Copy number</td><td>2 (1/parent)</td><td>★ 1000-10000</td></tr><tr><td>Inheritance</td><td>★ Biparental</td><td>★ Maternal only</td></tr><tr><td>Discrimination</td><td>HIGH (individual)</td><td>LOWER (maternal line)</td></tr><tr><td>Best for</td><td>Fresh samples</td><td>★ Old/degraded/hair shafts/bones</td></tr><tr><td>Recombination</td><td>YES</td><td>★ NONE (clonal)</td></tr></table>', tags: ['Comparison'] },
  'dp-mtdna-cases': { label: 'Famous mtDNA Cases', info: '<ul><li>★ <strong>Tsar Nicholas II + Romanov family</strong> (Russia) — mtDNA from bone fragments (1991-2007)</li><li>★ <strong>9/11 WTC victims</strong> (USA, 2001) — mtDNA identified many fragmented remains</li><li>★ <strong>Indian Ocean Tsunami</strong> (2004) — mtDNA for decomposed bodies (Interpol DVI)</li><li>★ <strong>Vietnam War MIA soldiers</strong> — mtDNA from skeletal remains decades later</li><li>★ <strong>Josef Mengele</strong> — mtDNA in exhumed Auschwitz "Angel of Death"</li></ul>', tags: ['Romanovs · 9/11'] },

  'dp-apps-overview': { label: 'DNA Applications — Overview', info: '<p>★ "Few cells are sufficient" — DNA evidence obtained from:</p><ol><li>Scene of crime</li><li>Clinical examination of person</li><li>Dead body / autopsy</li></ol>', tags: ['Scope'] },
  'dp-app1': { label: 'Identity in Sexual Crimes', info: '<ul><li>Rape · sodomy · buccal coitus</li><li>Semen on vaginal swab / clothes / bedsheet</li><li>★ Y-STR separates male contributor in vaginal sample</li><li>DNA from used condom (semen + vaginal + penile + hair)</li><li>Bite marks (saliva DNA)</li></ul><p>★ Critical evidence in BNS rape sections (63-69) — see Ch 16.</p>', tags: ['Rape · sodomy'] },
  'dp-app2': { label: 'Violent Crimes', info: '<ul><li>Murder — DNA on weapon, scene, victim&apos;s nails</li><li>Mass disasters — accident / terror / transport</li><li>War casualties (MIA repatriation)</li><li>Bite marks — saliva DNA</li><li>Touch DNA on door handle, weapon grip</li></ul>', tags: ['Murder · disaster'] },
  'dp-app3': { label: 'Missing Person + Identity', info: '<ul><li>Missing person — match against family DNA</li><li>Amnesia / disabled person — reunite with family</li><li>Baby mix-ups in hospital</li><li>Mistaken identity (police custody)</li><li>Long-lost soldier / lost relative repatriation</li></ul>', tags: ['Missing · mix-up'] },
  'dp-app4': { label: '★ Acquit Falsely Implicated', info: '<p>★ DNA <strong>EXCLUDES</strong> innocent suspects.</p><ul><li>"Innocence Project" (USA) — hundreds of wrongful convictions overturned by DNA</li><li>★ Critical DEFENCE tool — exonerates the innocent</li><li>Principle: "Better to acquit 100 guilty than convict 1 innocent" — DNA operationalises this in court</li></ul>', tags: ['Defence tool'] },
  'dp-app5': { label: 'Postmortem Identification', info: '<ul><li>Accidents · disasters</li><li>★ Decomposition · mutilated remains</li><li>★ Skeleton (mtDNA from femur, teeth)</li><li>Exhumation cases</li><li>Embalmed tissues (mtDNA still recoverable)</li></ul><p>★ Integrates with Interpol DVI Pink/Yellow form system (Ch 6).</p>', tags: ['PM ID'] },
  'dp-app6': { label: 'Disputed Paternity / Maternity', info: '<ul><li>★ At each locus, child has 1 allele from each parent</li><li>★ &gt;16 STR loci match → paternity probability &gt; <strong>99.99%</strong></li><li>EXCLUSION: allele present in child but absent in alleged parent</li><li>★ Useful in: child of rape · custody disputes · adultery · false implication of fatherhood</li><li>BNS Section 134 (BNSS regarding consent for testing in disputed paternity)</li></ul>', tags: ['Paternity'] },
  'dp-app-other': { label: 'Other Applications (7-10)', info: '<ol start="7"><li>Resolve disputes — adultery · incest · child born out of rape · custody · child born out of wedlock · false implication of paternity</li><li>Extortion cases — DNA on threat letters, ransom notes</li><li>Immigration cases — biological relatedness check (UK, EU, US)</li><li>★ Determination of TWIN ZYGOSITY (monozygotic vs dizygotic) — although CANNOT differentiate MZ twins from each other</li></ol>', tags: ['Misc apps'] },
  'dp-sex-id': { label: '★ Sex Identification from DNA', info: '<p>★ Especially useful from BLOOD STAINS or fragmentary remains.</p><p>★ <strong>Amelogenin gene (AmelX / AmelY):</strong></p><ul><li>X chromosome → 106 bp PCR product</li><li>Y chromosome → 112 bp PCR product</li></ul><p>★ <strong>One band → FEMALE (XX)</strong></p><p>★ <strong>Two bands → MALE (XY)</strong></p><p>Useful when only blood or fragment is available; included in most CODIS multiplex kits.</p>', tags: ['Amelogenin'] },

  'dp-evidence-intro': { label: 'DNA Evidence — Sources Overview', info: '<p>★ "Few cells are sufficient" — DNA evidence (sample) can be obtained from:</p><ol><li>Scene of crime</li><li>Clinical examination of person (alive)</li><li>Dead body / autopsy</li></ol>', tags: ['3 sources'] },
  'dp-evidence-table': { label: '★ Common Evidentiary Materials &amp; DNA Sources', info: '<table><tr><th>Evidence</th><th>DNA Sources</th></tr><tr><td>Weapons</td><td>Blood · hair · tissue</td></tr><tr><td>Bullet</td><td>Blood · tissue</td></tr><tr><td>Clothes</td><td>Blood · semen · sweat</td></tr><tr><td>Toothbrush</td><td>Saliva</td></tr><tr><td>Used cigarette / butt</td><td>Saliva</td></tr><tr><td>★ Used condom</td><td>Semen · vaginal cells · penile cells · pubic hair</td></tr><tr><td>Bite mark</td><td>Saliva</td></tr><tr><td>Finger scrapings / nail content</td><td>Tissue · blood</td></tr></table><p>Additional: hair (with root = nuclear DNA · shaft = mtDNA) · skin cells · saliva · urine · feces · vomit · dandruff · earwax.</p>', tags: ['Evidence sources'] },
  'dp-touch-dna': { label: 'Touch DNA', info: '<p>★ Skin cells shed by handling an object → DNA profile possible from few cells.</p><p><strong>Sources:</strong> door handles · steering wheel · keyboard · weapon grip · clothing collar.</p><p>★ Modern STR-PCR can recover profiles from &lt; 100 pg DNA = ~ 15 cells.</p><p><strong>Risk:</strong> SECONDARY TRANSFER — X touched A, then B; B&apos;s DNA found at A&apos;s scene (raises defence concerns).</p>', tags: ['Skin cells'] },
  'dp-postmortem': { label: 'Autopsy DNA Sources', info: '<ul><li>★ <strong>FEMUR</strong> — best-preserved nuclear DNA (cortical bone shields)</li><li>★ <strong>TEETH</strong> — nuclear + mtDNA (in pulp + dentine)</li><li>Blood from cardiac chambers / clot</li><li>Liver / spleen (fresh) · muscle</li><li>★ <strong>Decomposed body</strong> → quadriceps muscle, ribs</li></ul>', tags: ['Femur · Teeth · Muscle'] },
  'dp-fetal': { label: 'Fetal DNA Sampling', info: '<ul><li>★ Older fetus — FETAL BLOOD via heart puncture = optimal sample</li><li>Young fetus — CHORIONIC VILLI sampling (no maternal contamination) OR quadriceps muscle / ribs</li><li>★ Macerated fetus — fetal LUNGS + BRAIN most suitable for DNA typing</li><li>Fetus jar: send in normal saline OR DMSO saturated with NaCl · ice box transport</li></ul>', tags: ['Fetal samples'] },

  'dp-collection': { label: 'Sample Collection — Rules', info: '<ol><li>★ Dried blood stains (non-porous surface) — lift with ADHESIVE TAPE</li><li>★ Liquid blood — 2-5 mL IV blood · sterile tube · <strong>4% EDTA</strong> preservative</li><li>★ Semen / vaginal swabs (rape) — clean + sterile container · &gt; 2 swabs separate tubes in gang-rape · if delay store at <strong>4°C</strong></li><li>★ Saliva swabs — AIR-DRIED · <strong>DOUBLE SWAB</strong> technique (wet then dry)</li></ol>', tags: ['EDTA · 4°C · Double swab'] },
  'dp-storage': { label: 'Storage &amp; Packing Rules', info: '<ul><li>★ Clothes — AIR DRY → pack in PAPER · ★ NEVER polythene/plastic</li><li>Store at ROOM TEMPERATURE</li><li>★ <strong>NO POLYTHENE BAG</strong> — retains moisture → microbial growth → DNA degraded</li><li>★ AIRTIGHT container for soft tissue · paper packets for trace evidence</li><li>★ Avoid 25-37°C storage &gt; 2 weeks → DNA degrades · PCR amplification fails</li><li>Refrigeration (4°C) or freezing for long-term storage</li><li>Exhumation — dry tissues in sterile container · NO preservative · room temp transport</li></ul>', tags: ['Paper · 4°C · No polythene'] },
  'dp-samples-table': { label: 'Sample &amp; Preservative Summary', info: '<table><tr><th>Sample</th><th>Preservative / Method</th></tr><tr><td>★ Liquid blood (2-5 mL)</td><td>4% EDTA · sterile tube</td></tr><tr><td>Dried blood stain</td><td>Adhesive tape lift · pack in paper</td></tr><tr><td>Semen / vaginal swab</td><td>Sterile container · 4°C if delay · AIR DRY first</td></tr><tr><td>Saliva swab</td><td>Air-dried · double swab</td></tr><tr><td>Clothes</td><td>Air-dried · paper packing · room temp · ★ NEVER polythene</td></tr></table>', tags: ['Sample table'] },
  'dp-contamination': { label: 'Sources of DNA Contamination', info: '<p>★ <strong>3 Sources of contamination:</strong></p><ol><li>Sample contamination with GENOMIC DNA from ENVIRONMENT</li><li>Contamination BETWEEN SAMPLES during preparation</li><li>Contamination of sample with AMPLIFIED DNA from PREVIOUS REACTION</li></ol><p><strong>★ 4 Factors affecting DNA technique applicability:</strong></p><ol><li>Non-human DNA contamination</li><li>Degradation of sample</li><li>Contamination of sample</li><li>Multiple contributors (mixtures)</li></ol>', tags: ['3 contamination sources'] },
  'dp-limitations': { label: 'DNA Limitations + Consequences', info: '<p>★ <strong>Consequences of improper sample handling:</strong></p><ol><li>If NOT properly COLLECTED → biological activity lost</li><li>If improperly PACKED → CROSS CONTAMINATION</li><li>If improperly PRESERVED → decomposition / degradation</li></ol><p>★ <strong>Inherent Limitations:</strong></p><ul><li>Cannot differentiate MONOZYGOTIC TWINS</li><li>Costly · technical · time-consuming</li><li>Interpretation needs expertise (mixture analysis)</li><li>Probabilistic, not absolute</li><li>Chain of custody breaks → inadmissible in court</li></ul>', tags: ['Limitations'] }
};

function nodeList(ids) { return ids.map(id => ({ nodeId: id, ...NODES[id] })); }

const MCQS = {
  'DP-01': [
    { stem: 'DNA fingerprinting was discovered by:', options: ['Watson and Crick','Kary Mullis','Alec Jeffreys','James Watson'], answerIdx: 2, explain: 'Sir Alec Jeffreys discovered DNA fingerprinting in 1984 at Leicester University using RFLP.', tag: '[PG-Inspired]' },
    { stem: 'DNA fingerprinting was discovered in:', options: ['1953','1984','1985','1990'], answerIdx: 1, explain: 'Jeffreys discovered DNA fingerprinting in 1984. Kary Mullis invented PCR in 1985.', tag: '[PG-Inspired]' },
    { stem: 'DNA cannot differentiate:', options: ['Father and son','Mother and daughter','Monozygotic twins','Dizygotic twins'], answerIdx: 2, explain: 'DNA profiling CANNOT differentiate MONOZYGOTIC (identical) TWINS — they share an identical genome. Key limitation.', tag: '[PG-Inspired]' }
  ],
  'DP-02': [
    { stem: 'In DNA, adenine pairs with thymine via:', options: ['1 H-bond','2 H-bonds','3 H-bonds','Ionic bond'], answerIdx: 1, explain: 'A-T = 2 hydrogen bonds. G-C = 3 hydrogen bonds. Chargaff&apos;s rule: A=T, G=C.', tag: '[PG-Inspired]' },
    { stem: 'Mitochondrial DNA is inherited from:', options: ['Father only','Mother only','Both parents','Neither parent'], answerIdx: 1, explain: 'mtDNA is inherited MATERNALLY only — sperm mitochondria are destroyed at fertilization. Tracks maternal lineage.', tag: '[PG-Inspired]' },
    { stem: 'Number of copies of mtDNA per cell is approximately:', options: ['2','46','1000-10,000','1 billion'], answerIdx: 2, explain: 'mtDNA = 1000-10,000 copies/cell (vs nuclear DNA = 2 copies). High copy number makes mtDNA useful from degraded samples.', tag: '[PG-Inspired]' }
  ],
  'DP-03': [
    { stem: 'The current gold standard DNA typing method in forensic practice is:', options: ['RFLP','PCR alone','STR-PCR','Mitochondrial DNA sequencing'], answerIdx: 2, explain: 'STR-PCR (Short Tandem Repeats with PCR amplification) is the current forensic gold standard — rapid, small sample, can type degraded DNA.', tag: '[PG-Inspired]' },
    { stem: 'Y-STR analysis is most useful in:', options: ['Paternity testing','Sexual assault — separating male fraction','Mass disaster of female victims','Maternal lineage tracing'], answerIdx: 1, explain: 'Y-STR targets Y-chromosome STR loci → SEPARATES MALE contributor in mixed samples (vaginal swab with male sperm). Tracks paternal lineage.', tag: '[PG-Inspired]' }
  ],
  'DP-04': [
    { stem: 'Restriction enzyme used in RFLP:', options: ['Taq polymerase','EcoR-1','Reverse transcriptase','Helicase'], answerIdx: 1, explain: 'EcoR-1, PsT-1, HinF-1 are restriction endonucleases used in RFLP to cut DNA at specific sequences.', tag: '[PG-Inspired]' },
    { stem: 'Major disadvantage of RFLP is:', options: ['Cannot differentiate individuals','Requires high-quality, high-MW, large sample','Slow only by 1 hour','Cannot type human DNA'], answerIdx: 1, explain: 'RFLP requires high-molecular-weight, high-quality DNA in LARGE samples; slow (weeks for autoradiography). Now largely replaced by STR-PCR.', tag: '[PG-Inspired]' },
    { stem: 'The Southern blot in RFLP transfers DNA fragments onto:', options: ['Filter paper','Nylon / nitrocellulose membrane','X-ray film directly','Glass slide'], answerIdx: 1, explain: 'Southern blot: DNA fragments transferred from gel to nylon or nitrocellulose membrane before hybridisation with radioactive probe.', tag: '[PG-Inspired]' }
  ],
  'DP-05': [
    { stem: 'PCR was invented by:', options: ['Watson and Crick','Alec Jeffreys','Kary Mullis','Frederick Sanger'], answerIdx: 2, explain: 'Kary Mullis invented PCR in 1985, awarded Nobel Prize in Chemistry 1993.', tag: '[PG-Inspired]' },
    { stem: 'In PCR, denaturation occurs at approximately:', options: ['55°C','72°C','95°C','100°C'], answerIdx: 2, explain: 'PCR cycle: Denaturation 95°C · Annealing ~55°C · Extension 72°C (Taq polymerase optimum).', tag: '[PG-Inspired]' },
    { stem: 'The enzyme used in the extension step of PCR is:', options: ['DNA ligase','Taq polymerase','Restriction endonuclease','Reverse transcriptase'], answerIdx: 1, explain: 'Taq polymerase (from Thermus aquaticus) extends new strand 5&apos;→3&apos; from primer using dNTPs. Heat-stable to survive denaturation.', tag: '[PG-Inspired]' },
    { stem: 'PCR is highly sensitive but susceptible to:', options: ['Contamination','UV light','Cold temperature','Centrifugation'], answerIdx: 0, explain: 'PCR amplifies any starting DNA including contaminants → single extraneous cell can cause false positive. Strict workflow + negative controls essential.', tag: '[PG-Inspired]' }
  ],
  'DP-06': [
    { stem: 'STR stands for:', options: ['Sequence Tagged Region','Short Tandem Repeats','Specific Target Region','Single Tandem Repeat'], answerIdx: 1, explain: 'STR = Short Tandem Repeats. Microsatellites with 2-5 bp repeat units showing inter-individual variability.', tag: '[PG-Inspired]' },
    { stem: 'CODIS originally used how many STR core loci?', options: ['5','13','20','30'], answerIdx: 1, explain: 'CODIS (FBI USA) originally used 13 core STR loci; expanded to 20 in 2017.', tag: '[PG-Inspired]' },
    { stem: 'Amelogenin gene helps determine:', options: ['Race','Sex','Age','Stature'], answerIdx: 1, explain: 'AmelX = 106 bp · AmelY = 112 bp. One band = female (XX) · two bands = male (XY). Sex determination from DNA.', tag: '[PG-Inspired]' }
  ],
  'DP-07': [
    { stem: 'Mitochondrial DNA is best used for:', options: ['Fresh blood samples','Old / degraded samples (bones, teeth, hair shafts)','Touch DNA','Paternity testing'], answerIdx: 1, explain: 'mtDNA = high copy number, circular, no histones; survives degradation. Used for old bones, teeth, hair shafts, mass disaster victims.', tag: '[PG-Inspired]' },
    { stem: 'Famous historical mtDNA case:', options: ['JFK assassination','Tsar Nicholas II / Romanov family','Bin Laden DNA','Marilyn Monroe'], answerIdx: 1, explain: 'Romanov royal family (Tsar Nicholas II) identified via mtDNA from bone fragments (1991-2007). Other famous: 9/11 victims, Vietnam MIA, Josef Mengele.', tag: '[PG-Inspired]' },
    { stem: 'Hair WITHOUT root follicle:', options: ['Has abundant nuclear DNA','Has only mitochondrial DNA','Cannot be DNA-typed','Has Y-chromosome DNA only'], answerIdx: 1, explain: 'Hair SHAFT (without root follicle) has no nuclear DNA — only mtDNA. mtDNA analysis required for hair-shaft typing.', tag: '[PG-Inspired]' }
  ],
  'DP-08': [
    { stem: 'DNA profiling CANNOT differentiate:', options: ['Father and son','Two unrelated males','Monozygotic twins','Mother and daughter'], answerIdx: 2, explain: 'Identical (monozygotic) twins share the same genome → DNA profiling cannot distinguish between them. Major limitation.', tag: '[PG-Inspired]' },
    { stem: 'In paternity testing, &gt;16 STR loci match between alleged father and child gives paternity probability of approximately:', options: ['50%','90%','99%','&gt; 99.99%'], answerIdx: 3, explain: '16+ STR loci match → paternity probability &gt; 99.99%. Modern paternity testing uses 16-24 loci for near-certainty.', tag: '[PG-Inspired]' },
    { stem: 'In sexual assault evidence, DNA from a used condom can yield:', options: ['Only semen','Only vaginal cells','Semen + vaginal + penile cells + hair','Only saliva'], answerIdx: 2, explain: 'Used condom can yield multiple DNA sources: semen (interior) + vaginal cells + penile cells + pubic hair. Critical evidence in rape cases.', tag: '[PG-Inspired]' }
  ],
  'DP-09': [
    { stem: 'In a homicide case, which evidence is least likely to yield touch DNA?', options: ['Weapon grip','Cigarette butt','Stone wall','Steering wheel'], answerIdx: 2, explain: 'Touch DNA found on smooth, handled surfaces (weapon grip, cigarette butt, steering wheel). Stone wall is too rough/porous to retain useful epithelial cells reliably.', tag: '[PG-Inspired]' },
    { stem: 'In autopsy of decomposed body, best source of DNA is:', options: ['Skin','Femur / teeth','Decomposed liver','Hair shaft only'], answerIdx: 1, explain: 'Femur (cortical bone) and teeth (pulp/dentine) preserve DNA best in decomposed bodies. Quadriceps muscle and ribs alternative.', tag: '[PG-Inspired]' },
    { stem: 'For macerated fetus, best tissue for DNA typing is:', options: ['Cardiac blood','Lungs + brain','Limb muscle','Liver'], answerIdx: 1, explain: 'Macerated fetus → fetal lungs + brain most suitable for DNA typing. Older fetus = fetal blood via heart puncture. Young fetus = chorionic villi.', tag: '[PG-Inspired]' }
  ],
  'DP-10': [
    { stem: 'For DNA preservation of liquid blood, the preservative used is:', options: ['10% formalin','Saturated salt','4% EDTA','Sodium fluoride'], answerIdx: 2, explain: '4% EDTA (anticoagulant) in sterile tube preserves liquid blood for DNA. Formalin DESTROYS DNA. Saturated salt = toxicology (Ch 6).', tag: '[PG-Inspired]' },
    { stem: 'Clothes for DNA evidence should be packed in:', options: ['Plastic bag','Polythene','Paper packet','Aluminium foil'], answerIdx: 2, explain: '★ Clothes are air-dried then packed in PAPER. NEVER use polythene/plastic — retains moisture → microbial growth → DNA degraded.', tag: '[PG-Inspired]' },
    { stem: 'Saliva swab from bite mark should be:', options: ['Wet-stored at room temp','Air-dried + double swab technique','Frozen immediately','Stored in formalin'], answerIdx: 1, explain: 'Saliva swab — AIR-DRIED + DOUBLE SWAB technique (wet swab first, then dry swab). Prevents bacterial overgrowth + maximises recovery.', tag: '[PG-Inspired]' },
    { stem: 'DNA contamination sources include all EXCEPT:', options: ['Environmental DNA','Cross-contamination during preparation','Amplified DNA from previous reaction','UV light exposure'], answerIdx: 3, explain: '3 contamination sources: environmental DNA · between-sample preparation · amplified DNA from previous PCR (carryover). UV decontaminates DNA, not a source.', tag: '[PG-Inspired]' }
  ]
};

const DIFF_TABLES = [
  {
    id: 'DT-1', title: '★ RFLP vs PCR vs STR vs mtDNA — Master Comparison', shortTitle: '4 Methods Compare',
    intro: 'The 4 forensic DNA typing methods — high-yield LAQ comparison.',
    columns: ['Feature','RFLP','PCR','STR','mtDNA'],
    rows: [
      ['Year / Originator','1984 · Jeffreys','1985 · Mullis','1990s','1980s+'],
      ['Sample size needed','★ Large (μg)','Trace','Trace','Trace · degraded OK'],
      ['DNA quality','★ High-MW, intact','Any','★ Even DEGRADED','★ Even degraded'],
      ['Speed','★ Slow (weeks)','Fast (hours)','Fast (24 h)','Days'],
      ['Discrimination','High','Variable','★ Very high (CODIS)','★ Lower (maternal line)'],
      ['Inheritance assessed','Biparental','Biparental','Biparental (autosomal)','★ Maternal'],
      ['Recombination','Yes','Yes','Yes','★ No (clonal)'],
      ['Contamination risk','Lower','★ High','High','High'],
      ['Method','Restriction enzymes + Southern blot + radio probe','Thermal cycle amplification','PCR of microsatellite repeats (2-5 bp)','Sequencing of D-loop / HV regions'],
      ['Best use','Historical method','Amplification step','★ CURRENT GOLD STANDARD','★ Old bones · teeth · hair shafts']
    ],
    parentDiagrams: ['DP-03','DP-04','DP-05','DP-06','DP-07'],
    mcqs: [
      { stem: 'Which DNA method best types degraded skeletal remains?', options: ['RFLP','PCR alone','STR or mtDNA','Southern blot'], answerIdx: 2, explain: 'STR and mtDNA both handle degraded DNA. mtDNA particularly good for old skeletal remains (high copy number + cortical preservation).', tag: '[PG-Inspired]' },
      { stem: 'Which method tracks maternal lineage?', options: ['RFLP','STR','mtDNA','Y-STR'], answerIdx: 2, explain: 'mtDNA = MATERNAL lineage. Y-STR = paternal lineage.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-2', title: 'Nuclear DNA vs Mitochondrial DNA', shortTitle: 'nDNA vs mtDNA',
    columns: ['Feature','Nuclear DNA','Mitochondrial DNA'],
    rows: [
      ['Location','Nucleus','Mitochondria'],
      ['Structure','Linear (chromosomes)','★ Circular'],
      ['Size','3 billion bp (haploid)','16,569 bp'],
      ['Copy number per cell','2 (1 from each parent)','★ 1000-10,000'],
      ['Histones','Yes','★ No'],
      ['Inheritance','★ Biparental (50/50)','★ Maternal only'],
      ['Recombination','Yes','★ None'],
      ['Mutation rate','Lower','★ 10× faster'],
      ['Discrimination power','★ HIGH (individual ID)','Lower (shared maternal line)'],
      ['Best forensic use','★ Fresh samples · STR-PCR','★ Old · degraded · hair shafts · bones · teeth']
    ],
    parentDiagrams: ['DP-02','DP-07'],
    mcqs: [
      { stem: 'Mitochondrial DNA shows all EXCEPT:', options: ['Maternal inheritance','High copy number','★ Recombination','Circular structure'], answerIdx: 2, explain: 'mtDNA does NOT undergo recombination (clonal inheritance). It is maternal, circular, high copy number.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-3', title: 'Y-STR vs Autosomal STR vs mtDNA — Lineage Markers', shortTitle: 'Y-STR · Autosomal STR · mtDNA',
    columns: ['Feature','Autosomal STR','Y-STR','mtDNA'],
    rows: [
      ['Location','Chromosomes 1-22','Y chromosome','Mitochondria'],
      ['Inheritance','★ Biparental','★ Paternal (males only)','★ Maternal only'],
      ['Discrimination','★ Highest (individual)','Lower (paternal lineage)','Lower (maternal lineage)'],
      ['Best forensic use','Routine identity','★ Sexual assault — male in female matrix','★ Old · degraded · hair shafts'],
      ['Database','CODIS (USA)','YHRD','EMPOP (European)'],
      ['Limitation','Mixtures complex','All male relatives share','All maternal relatives share']
    ],
    parentDiagrams: ['DP-03','DP-06','DP-07'],
    mcqs: [
      { stem: 'In a rape kit with majority female DNA, the best marker to isolate male contributor is:', options: ['Autosomal STR','Y-STR','mtDNA','RFLP'], answerIdx: 1, explain: 'Y-STR — Y-chromosome STR loci are present only in males → separates male contributor in mixed sample.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-4', title: 'PCR Thermal Cycle — 3 Steps', shortTitle: 'PCR Cycle',
    intro: 'Each PCR cycle has 3 temperature steps; ~30 cycles total → 10⁹-fold amplification.',
    columns: ['Step','Temperature','Process'],
    rows: [
      ['★ 1. Denaturation','★ ~95°C','Double-strand DNA separates into 2 single strands; H-bonds break'],
      ['★ 2. Annealing','★ ~55°C','Short DNA primers (synthetic oligonucleotides) bind specific complementary sites'],
      ['★ 3. Extension','★ ~72°C','Taq polymerase extends new strand 5&apos;→3&apos; using dNTPs'],
      ['Cycle outcome','—','Target DNA doubles. After 30 cycles → ~10⁹ copies']
    ],
    parentDiagrams: ['DP-05'],
    mcqs: [
      { stem: 'Annealing temperature in PCR is approximately:', options: ['~55°C','~72°C','~95°C','~100°C'], answerIdx: 0, explain: 'Annealing ~55°C (primer binding) · Extension 72°C (Taq optimum) · Denaturation 95°C.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-5', title: 'DNA Sample Collection &amp; Preservation', shortTitle: 'Sample Preservation',
    intro: 'Wrong preservation destroys DNA evidence. Critical for chain of custody and admissibility.',
    columns: ['Sample','Container / Treatment','Preservative'],
    rows: [
      ['★ Liquid blood (2-5 mL)','Sterile tube','★ 4% EDTA'],
      ['Dried blood stain on non-porous surface','Adhesive tape lift','Pack in paper'],
      ['Semen / vaginal swab','Sterile container','AIR DRY · 4°C if delay'],
      ['Saliva swab (bite mark)','Cotton swab','AIR DRY · double swab (wet+dry)'],
      ['★ Clothes','★ Paper packet (NEVER polythene)','Air-dried · room temp'],
      ['Exhumation tissue','Sterile container','No preservative · room temp'],
      ['Fetal blood (older fetus)','Sterile tube','EDTA · heart puncture'],
      ['Macerated fetus','—','Lungs + brain'],
      ['Whole fetus','—','Normal saline OR DMSO + NaCl · ice box']
    ],
    parentDiagrams: ['DP-10'],
    mcqs: [
      { stem: 'Blood for DNA analysis is preserved in:', options: ['10% formalin','Saturated salt solution','4% EDTA','Sodium fluoride + K-oxalate'], answerIdx: 2, explain: '4% EDTA for DNA blood. Saturated salt = toxicology. NaF+K-oxalate = alcohol estimation. Formalin DESTROYS DNA (cross-links nucleic acids).', tag: '[PG-Inspired]' },
      { stem: 'Clothes containing biological evidence should NEVER be packed in:', options: ['Paper','Polythene / plastic','Manila envelope','Aluminium foil'], answerIdx: 1, explain: 'Polythene/plastic retains moisture → microbial growth → DNA degraded. Always use paper packets.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-6', title: 'DNA Profiling — Advantages vs Disadvantages', shortTitle: 'Pros vs Cons',
    columns: ['Advantages','Disadvantages'],
    rows: [
      ['★ Conclusive identification','★ Cannot differentiate MONOZYGOTIC TWINS'],
      ['Applicable to OLD stains / biological material','Expensive · technical · time-consuming'],
      ['★ SMALL quantity of sample required (PCR)','Interpretation needs trained manpower'],
      ['Highly discriminatory power','Susceptible to contamination (esp. PCR)'],
      ['Universal databases enable cold-case search','Probabilistic, not absolute'],
      ['Can exonerate falsely implicated persons','Chain of custody breaks → inadmissible'],
      ['Standardised (cross-lab comparison)','Mixed samples / degraded → complex analysis']
    ],
    parentDiagrams: ['DP-01','DP-10'],
    mcqs: [
      { stem: 'The major inherent limitation of DNA profiling is:', options: ['Cannot identify race','Cannot differentiate monozygotic twins','Cannot type blood','Cannot type semen'], answerIdx: 1, explain: 'MZ twins share an identical genome → DNA profiling cannot distinguish between them. Epigenetic markers being researched.', tag: '[PG-Inspired]' }
    ]
  }
];

const SUBJ = [
  {
    id: 'SAQ-5.1', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Describe the role of DNA profiling in forensic investigation including its limitations and potential pitfalls.',
    answer: `<h4>Definition</h4>
<p>DNA profiling = analytical method to identify individuals by their unique DNA sequence pattern. ★ Discovered by Sir Alec JEFFREYS in 1984 at Leicester University.</p>
<h4>Methods (4)</h4>
<ol>
<li>★ <strong>RFLP</strong> (Restriction Fragment Length Polymorphism) — original Jeffreys method · restriction enzymes + Southern blot</li>
<li>★ <strong>PCR</strong> (Polymerase Chain Reaction) — Kary Mullis 1985 · 3-step thermal cycle amplifies trace DNA</li>
<li>★ <strong>STR</strong> (Short Tandem Repeats) — current GOLD STANDARD · PCR of microsatellite 2-5 bp repeats</li>
<li>★ <strong>mtDNA</strong> — circular DNA, maternal inheritance, 1000-10,000 copies/cell · for old/degraded samples</li>
</ol>
<h4>★ 10 Forensic Applications</h4>
<ol>
<li>Identity in sexual crimes (rape · sodomy · buccal coitus)</li>
<li>Violent crimes — murder · accidents · mass disasters</li>
<li>Missing person · amnesia · disabled person</li>
<li>★ Acquit FALSELY IMPLICATED person</li>
<li>Postmortem identification — decomposition · skeleton · exhumation · embalmed</li>
<li>★ Disputed PATERNITY · maternity</li>
<li>Adultery · incest · child born of rape · custody · false implication</li>
<li>Extortion · immigration</li>
<li>★ Twin ZYGOSITY determination</li>
<li>★ Sex identification (Amelogenin AmelX/Y)</li>
</ol>
<h4>★ Advantages</h4>
<ul>
<li>★ CONCLUSIVE method of identification</li>
<li>Can be applied to OLD stains / biological material</li>
<li>★ SMALL quantity of sample needed (via PCR)</li>
<li>Universal databases (CODIS) enable cold-case + suspect-less searches</li>
</ul>
<h4>★ Limitations + Pitfalls</h4>
<ol>
<li>★ <strong>CANNOT differentiate MONOZYGOTIC TWINS</strong></li>
<li>Expensive · technical · time-consuming</li>
<li>Interpretation requires trained expertise</li>
<li>★ Susceptible to CONTAMINATION (especially PCR)</li>
<li>★ 3 sources of contamination: environment · between samples · amplified DNA from previous reaction</li>
<li>★ Factors affecting applicability: non-human DNA · degradation · contamination · multiple contributors (mixtures)</li>
<li>Improper collection → biological activity lost</li>
<li>Improper packing → cross-contamination</li>
<li>Improper preservation → decomposition / degradation</li>
<li>Chain of custody breaks → inadmissible in court</li>
<li>Secondary transfer of touch DNA → false leads</li>
<li>Probabilistic result, not absolute (probability statement only)</li>
</ol>
<h4>★ Sample Preservation Critical Rules</h4>
<ul>
<li>Liquid blood — 4% EDTA in sterile tube</li>
<li>Semen/vaginal swab — air-dried, sterile container, 4°C if delay</li>
<li>Saliva — air-dried, double swab technique</li>
<li>Clothes — paper packet, NEVER polythene</li>
</ul>`,
    sources: ['DP-01 · DP-08 · DP-10'],
    jumpToDiagram: 'DP-01'
  },
  {
    id: 'SAQ-5.2', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'DNA Fingerprinting — write a short note.',
    answer: `<h4>Definition + Origin</h4>
<p>DNA fingerprinting = analytical technique to identify individuals by their unique DNA band pattern.</p>
<p>★ Discovered by <strong>Sir Alec JEFFREYS</strong> at <strong>LEICESTER UNIVERSITY</strong> in <strong>1984</strong>. By 1984, he used restriction enzymes to fragment DNA, obtaining band patterns akin to supermarket bar-codes.</p>
<h4>Basis</h4>
<ul>
<li>Nucleus contains chromosomes; each chromosome = 2 complementary DNA strands</li>
<li>DNA = polymer of nucleotides (phosphate + deoxyribose + base: A / T / G / C)</li>
<li>A-T (2 H-bonds) · G-C (3 H-bonds)</li>
<li>★ Types: <strong>Nuclear DNA</strong> (biparental) · <strong>Mitochondrial DNA</strong> (maternal)</li>
</ul>
<h4>★ 4 Typing Methods</h4>
<ol>
<li><strong>RFLP</strong> — restriction enzymes cut DNA → Southern blot → radioactive probe → bar-code on X-ray film</li>
<li><strong>PCR</strong> — 3-step thermal amplification (denaturation 95°C · annealing 55°C · extension 72°C with Taq polymerase)</li>
<li>★ <strong>STR</strong> (★ current gold standard) — microsatellite tandem repeats 2-5 bp + PCR + electrophoresis</li>
<li><strong>mtDNA</strong> — circular DNA · maternal inheritance · for degraded/old samples</li>
</ol>
<h4>★ Applications</h4>
<ul>
<li>Sexual + violent crimes · paternity · missing person · PM ID · sex determination · mass disasters · acquit innocent · twin zygosity</li>
</ul>
<h4>★ Advantages</h4>
<ul>
<li>Conclusive identification · trace sample sufficient · applicable to old stains</li>
</ul>
<h4>★ Disadvantages</h4>
<ul>
<li>Cannot differentiate MONOZYGOTIC TWINS · expensive · contamination-prone · expertise required</li>
</ul>
<h4>★ Modern Practice</h4>
<ul>
<li>STR-PCR = gold standard</li>
<li>CODIS (USA) — 13 → 20 core STR loci</li>
<li>Y-STR for sexual assault male-fraction separation</li>
<li>mtDNA for old bones / teeth / hair shafts</li>
</ul>`,
    sources: ['DP-01 · DP-03'],
    jumpToDiagram: 'DP-01'
  },
  {
    id: 'SAQ-5.3', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'Describe the steps of PCR and STR techniques. Mention their forensic applications.',
    answer: `<h4>★ PCR — Polymerase Chain Reaction</h4>
<p>Invented by Kary Mullis (1985, Nobel 1993). Amplifies trace DNA exponentially.</p>
<h5>3-Step Thermal Cycle</h5>
<ol>
<li>★ <strong>Denaturation</strong> (~95°C) — double-strand DNA separates into single strands (H-bonds break)</li>
<li>★ <strong>Annealing</strong> (~55°C) — short DNA primers (forward + reverse) bind specific complementary sites</li>
<li>★ <strong>Extension</strong> (~72°C) — Taq polymerase (from Thermus aquaticus) extends new strand 5&apos;→3&apos; using dNTPs</li>
</ol>
<p>Each cycle doubles target DNA. After 30 cycles → ~10⁹ copies in ~2-3 hours.</p>
<h5>Pros + Cons</h5>
<ul>
<li>Pros: ★ trace sample sufficient · fast · sensitive</li>
<li>Cons: ★ contamination risk · hard with degraded DNA</li>
</ul>
<h4>★ STR — Short Tandem Repeats</h4>
<p>Current FORENSIC GOLD STANDARD.</p>
<h5>Basis</h5>
<ul>
<li>Tandem-repeated DNA sequences in human genome show variability between individuals</li>
<li>Minisatellites = VNTR (10-100 bp units, total kbp)</li>
<li>★ Microsatellites = STR (2-5 bp repeats)</li>
</ul>
<h5>4-Step Method</h5>
<ol>
<li>Isolate DNA from sample</li>
<li>Replicate STR fragments by PCR (specific primers for each STR locus)</li>
<li>Gel / capillary electrophoresis</li>
<li>Identify fragments — stains or laser-induced fluorescence</li>
</ol>
<h5>★ Advantages</h5>
<ul>
<li>Rapid (&lt; 24 h) · small sample · ★ can type DEGRADED DNA</li>
<li>High discriminatory power · multiplexed loci</li>
<li>Mostly replaces RFLP for routine forensic</li>
</ul>
<h5>CODIS</h5>
<p>FBI-maintained database — originally 13 STR loci · expanded to 20 in 2017. Includes AmelX/Y for sex determination.</p>
<h4>★ Applications</h4>
<ul>
<li>Sexual crimes (Y-STR for male fraction)</li>
<li>Mass disaster identification (degraded teeth/bone STR)</li>
<li>Paternity (16+ loci match → 99.99%)</li>
<li>Touch DNA · cigarette butts · weapons</li>
</ul>`,
    sources: ['DP-05 · DP-06'],
    jumpToDiagram: 'DP-05'
  },
  {
    id: 'SAQ-5.4', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'Discuss the collection, preservation, and forwarding of samples for DNA analysis. Mention sources of DNA contamination.',
    answer: `<h4>★ Collection Rules</h4>
<ol>
<li><strong>Dried blood stain</strong> (non-porous) — lift with ADHESIVE TAPE</li>
<li><strong>Liquid blood</strong> — 2-5 mL IV blood · sterile tube · ★ 4% EDTA preservative</li>
<li><strong>Semen / vaginal swab</strong> (rape) — clean + sterile container · &gt; 2 swabs separately in gang-rape · if delay store at ★ 4°C</li>
<li><strong>Saliva swab</strong> (bite mark, oral) — ★ AIR-DRIED · DOUBLE SWAB technique (wet then dry)</li>
<li><strong>Clothes</strong> — air-dried · pack in PAPER · ★ NEVER polythene</li>
<li><strong>Exhumation tissue</strong> — sterile container · NO preservative · room temp transport</li>
<li><strong>Fetal samples</strong> — older fetus: heart puncture blood · young: chorionic villi · macerated: lungs + brain · whole fetus: NS or DMSO+NaCl + ice box</li>
</ol>
<h4>★ Storage Rules</h4>
<ul>
<li>Clean PAPER packets for trace evidence</li>
<li>Airtight containers for soft tissue</li>
<li>★ NO POLYTHENE — retains moisture → microbial growth → DNA degraded</li>
<li>★ Avoid 25-37°C storage &gt; 2 weeks — DNA degrades · PCR fails</li>
<li>Refrigerate (4°C) or freeze for long-term storage</li>
</ul>
<h4>★ 3 Sources of DNA Contamination</h4>
<ol>
<li>Sample contamination with GENOMIC DNA from ENVIRONMENT</li>
<li>Contamination BETWEEN SAMPLES during preparation</li>
<li>Contamination of sample with AMPLIFIED DNA from PREVIOUS REACTION (carryover)</li>
</ol>
<h4>★ 4 Factors Affecting Applicability</h4>
<ol>
<li>Non-human DNA contamination</li>
<li>Degradation of sample</li>
<li>Contamination of sample</li>
<li>Multiple contributors to sample (mixtures)</li>
</ol>
<h4>★ Consequences of Improper Handling</h4>
<ul>
<li>NOT properly collected → biological activity lost</li>
<li>Improperly packed → cross-contamination</li>
<li>Improperly preserved → decomposition / degradation · PCR fails</li>
</ul>
<h4>★ Forwarding</h4>
<ul>
<li>Each sample labelled (case no., body region, date, time, doctor&apos;s signature)</li>
<li>Sealed with cloth + paper + thread + wax</li>
<li>Forwarded to <strong>FORENSIC SCIENCE LABORATORY (FSL)</strong> via investigating officer</li>
<li>Receipt obtained · chain of custody maintained throughout</li>
</ul>
<p>★ Wrong preservative or broken chain of custody → evidence may be INADMISSIBLE in court.</p>`,
    sources: ['DP-09 · DP-10'],
    jumpToDiagram: 'DP-10'
  },
  {
    id: 'LAQ-5.1', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank-Inspired',
    question: 'Describe DNA structure, types of DNA, and the four methods of DNA typing in forensic practice. Mention forensic applications and limitations.',
    answer: `<h4>★ DNA Structure</h4>
<ul>
<li>Nucleus in all eukaryotic cells contains chromosomes; each chromosome = 2 complementary strands of DNA</li>
<li>DNA = polymer of nucleotides; each nucleotide = phosphate + deoxyribose + 1 nitrogenous base</li>
<li>4 bases: Adenine (A) · Thymine (T) · Guanine (G) · Cytosine (C)</li>
<li>★ A-T joined by 2 H-bonds · G-C joined by 3 H-bonds</li>
<li>Watson + Crick (1953) double helix — anti-parallel strands · sugar-phosphate backbone outside · bases inside</li>
<li>Total human genome ≈ 3 billion bp · ≈ 30,000 genes</li>
</ul>
<h4>★ Types of DNA</h4>
<h5>1. Nuclear DNA (nDNA)</h5>
<ul>
<li>Location: nucleus · 2 copies (biparental)</li>
<li>46 chromosomes (22 autosomal pairs + 1 sex pair)</li>
<li>★ Inheritance: BIPARENTAL (50% from each parent)</li>
<li>Best for: STR-PCR typing (gold standard) — fresh samples</li>
</ul>
<h5>2. Mitochondrial DNA (mtDNA)</h5>
<ul>
<li>Location: mitochondria · circular · 16,569 bp</li>
<li>★ 1000-10,000 copies per cell (vs 2 for nuclear)</li>
<li>★ Inheritance: MATERNAL only (sperm mitochondria destroyed at fertilization)</li>
<li>Best for: OLD / degraded samples · bones · teeth · hair SHAFTS · maternal lineage</li>
</ul>
<h4>★ 4 DNA Typing Methods</h4>
<h5>1. RFLP (Restriction Fragment Length Polymorphism)</h5>
<ul>
<li>Discovered by Jeffreys 1984</li>
<li>Steps: extract DNA → digest with restriction enzymes (EcoR-1, PsT-1, HinF-1) → gel electrophoresis → Southern blot to nylon membrane → radioactive probe → X-ray film shows bar-code bands</li>
<li>Pros: highly discriminatory · fewer loci needed</li>
<li>Cons: ★ needs HIGH-MW, HIGH-QUALITY, LARGE sample · slow (weeks)</li>
</ul>
<h5>2. PCR (Polymerase Chain Reaction)</h5>
<ul>
<li>Invented by Kary Mullis 1985 (Nobel 1993)</li>
<li>3-step cycle: ★ denaturation 95°C → annealing 55°C → extension 72°C (Taq polymerase)</li>
<li>30 cycles → 10⁹-fold amplification</li>
<li>Pros: ★ trace sample · fast · sensitive</li>
<li>Cons: ★ contamination risk · hard with degraded DNA</li>
</ul>
<h5>3. STR (Short Tandem Repeats) — ★ CURRENT GOLD STANDARD</h5>
<ul>
<li>★ Microsatellite 2-5 bp tandem repeats</li>
<li>Steps: isolate DNA → PCR-amplify STR loci → electrophoresis → fluorescent detection</li>
<li>★ Pros: rapid · small sample · can type DEGRADED DNA · multiplexed loci · CODIS database (13 → 20 loci)</li>
<li>Includes AmelX/Y for sex determination (one band = ♀, two = ♂)</li>
</ul>
<h5>4. Mitochondrial DNA Analysis</h5>
<ul>
<li>Sequencing of D-loop / HV-1 + HV-2 hypervariable regions</li>
<li>Used when nuclear DNA degraded — bones · teeth · hair shafts · old / decomposed samples</li>
<li>Maternal lineage tracing</li>
<li>Famous cases: Romanovs · 9/11 victims · Vietnam MIA · Tsunami DVI</li>
</ul>
<h4>★ Y-STR — Sister Method</h4>
<ul>
<li>STR loci on Y chromosome only — paternal inheritance</li>
<li>★ Separates MALE contributor in mixed samples (sexual assault male-in-female matrix)</li>
</ul>
<h4>★ 10 Forensic Applications</h4>
<ol>
<li>Identity in sexual crimes (rape, sodomy)</li>
<li>Violent crimes — murder, mass disaster</li>
<li>Missing person · amnesia · baby mix-up</li>
<li>★ Acquit FALSELY IMPLICATED</li>
<li>PM identification — decomposed · skeleton · exhumation · embalmed</li>
<li>★ Disputed paternity / maternity (16+ loci → 99.99%)</li>
<li>Adultery · incest · child of rape · custody</li>
<li>Extortion · immigration</li>
<li>Twin zygosity</li>
<li>Sex identification (amelogenin)</li>
</ol>
<h4>★ Limitations</h4>
<ol>
<li>★ Cannot differentiate MONOZYGOTIC TWINS</li>
<li>Expensive · technical · time-consuming</li>
<li>Trained interpretation needed</li>
<li>Contamination-prone (especially PCR)</li>
<li>Improper collection / packing / preservation → evidence lost</li>
<li>Probabilistic, not absolute</li>
<li>Chain of custody breaks → inadmissible</li>
</ol>
<h4>★ Sample Preservation Highlights</h4>
<ul>
<li>Liquid blood — 4% EDTA</li>
<li>Clothes — paper packing · NEVER polythene</li>
<li>Saliva — air-dried · double swab</li>
<li>Vaginal swab — sterile container · 4°C if delay</li>
<li>Macerated fetus — lungs + brain</li>
</ul>`,
    sources: ['DP-01 through DP-10'],
    jumpToDiagram: 'DP-01'
  },
  {
    id: 'LAQ-5.2', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank-Inspired',
    question: 'A 28-year-old woman alleged sexual assault by an unknown male. As a forensic doctor, describe the DNA-related evidence collection, preservation, and analysis you would undertake.',
    answer: `<h4>★ Clinical Examination + Consent</h4>
<ul>
<li>Written informed consent · female chaperone · privacy</li>
<li>Police requisition · BNS Section 63 (rape) / BNSS Section 51 (medical exam of accused)</li>
<li>Document history, clothing, time since incident, washing/bathing status</li>
</ul>
<h4>★ Evidence to Collect for DNA Analysis</h4>
<h5>From Survivor</h5>
<ol>
<li><strong>Vaginal swabs</strong> — &gt; 2 separate swabs (anterior fornix, posterior fornix, vault)</li>
<li><strong>Cervical swabs</strong> — within 72 h post-incident</li>
<li><strong>Oral swabs</strong> (if oral penetration alleged) — &gt; 2 from cheek pouches + tongue</li>
<li><strong>Anal swabs</strong> (if anal penetration alleged)</li>
<li><strong>Skin swabs</strong> — bite marks · suction marks · areas with visible saliva</li>
<li><strong>Pubic combings</strong> — foreign hair from assailant</li>
<li><strong>Pubic hair pluckings</strong> — survivor reference (5-10 hairs with root)</li>
<li><strong>Fingernail clippings / scrapings</strong> — if survivor scratched assailant</li>
<li><strong>Clothes worn during incident</strong> — undergarments, pants, top — air-dried, paper-packed</li>
<li><strong>Sanitary pad / tampon</strong> if used</li>
<li><strong>Blood sample (EDTA)</strong> — survivor reference profile</li>
<li>★ Buccal swab — alternative reference</li>
</ol>
<h5>From Scene of Crime</h5>
<ul>
<li>Bedsheet · pillowcase · blanket — semen, saliva, blood</li>
<li>Used condom — semen + vaginal + penile + hair</li>
<li>Tissue / cloth used to clean</li>
<li>Carpet stains · weapon if any</li>
</ul>
<h5>From Suspect (if identified)</h5>
<ul>
<li>Blood (EDTA) reference · buccal swab</li>
<li>Penile swab — for vaginal epithelium</li>
<li>Pubic combings · pubic hair pluckings</li>
<li>Fingernail clippings</li>
<li>Clothes worn during incident</li>
</ul>
<h4>★ Preservation Rules</h4>
<ul>
<li>★ All swabs ★ AIR-DRIED before packing (prevents bacterial overgrowth)</li>
<li>Sterile container · labelled (case no., body region, date, time, doctor sign)</li>
<li>★ If delay: store at 4°C</li>
<li>★ Clothes: paper packing · NEVER polythene</li>
<li>Hair: paper packet</li>
<li>Blood: 4% EDTA sterile tube</li>
<li>Chain of custody form maintained at every transfer</li>
</ul>
<h4>★ Forwarding</h4>
<ul>
<li>Sealed with cloth + paper + thread + wax · doctor&apos;s signature on seal</li>
<li>Forwarded to FSL with covering letter and chain of custody form</li>
<li>Receipt obtained from investigating officer</li>
</ul>
<h4>★ DNA Analysis Plan</h4>
<ol>
<li><strong>Initial screen</strong> — acid phosphatase + Christmas tree stain for spermatozoa (microscopy)</li>
<li><strong>Differential extraction</strong> — separates sperm fraction from epithelial cells</li>
<li><strong>★ Autosomal STR</strong> on sperm fraction → male DNA profile</li>
<li><strong>★ Y-STR</strong> — particularly useful: targets Y-chromosome STR loci → separates male contributor from female matrix (e.g., post-vasectomy or low sperm samples)</li>
<li>Compare with suspect&apos;s reference profile</li>
<li>Upload to database (if available) for cold-hit search</li>
</ol>
<h4>★ Interpretation</h4>
<ul>
<li>Match: report random match probability (often &lt; 1 in 10⁹)</li>
<li>Exclusion: definitive — suspect is excluded</li>
<li>Mixture: report likelihood ratios</li>
<li>★ Y-STR match: indicates SAME PATERNAL lineage (cannot distinguish father / brothers)</li>
</ul>
<h4>★ Medicolegal Aspects</h4>
<ul>
<li>★ NEET-PG / forensic case: critical evidence in BNS rape (Sections 63-69) — see Ch 16</li>
<li>POCSO Act 2012 — for minor victims</li>
<li>Report kept confidential · authorised release only to court / police</li>
<li>If discrepancy with clinical findings → report HONESTLY · do not assume guilt</li>
<li>★ DNA can EXCLUDE → critical for falsely accused</li>
</ul>
<h4>★ Pitfalls to Avoid</h4>
<ul>
<li>Contamination — separate kits per case · gloves changed</li>
<li>Wet packing → microbial overgrowth → DNA degraded</li>
<li>Delay in 4°C storage</li>
<li>Inadequate documentation → chain of custody broken</li>
</ul>`,
    sources: ['DP-08 · DP-09 · DP-10'],
    jumpToDiagram: 'DP-09'
  },
  {
    id: 'LAQ-5.3', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank-Inspired',
    question: 'Discuss DNA profiling in disputed paternity and mass disaster identification.',
    answer: `<h4>★ DNA in Disputed Paternity</h4>
<h5>Principle</h5>
<ul>
<li>★ At each autosomal STR locus, child inherits 1 allele from each parent</li>
<li>★ Mother contributes 1 allele · alleged father&apos;s allele must match the remaining child allele</li>
<li>★ Test ≥ 16 STR loci → paternity probability &gt; 99.99%</li>
</ul>
<h5>Samples Required</h5>
<ul>
<li>Mother — 2 mL blood in EDTA OR buccal swab</li>
<li>Child — 2 mL blood OR buccal swab (or cord blood in newborn)</li>
<li>Alleged father — 2 mL blood OR buccal swab</li>
<li>Optional: alleged paternal grandparents if alleged father deceased / unavailable</li>
</ul>
<h5>Interpretation</h5>
<ul>
<li><strong>★ Inclusion (paternity probability &gt; 99.99%)</strong> — alleged father&apos;s alleles match expected at all loci</li>
<li><strong>★ Exclusion</strong> — child has alleles NOT present in alleged parent (definitive)</li>
<li>Random match probability calculated using population allele frequencies</li>
</ul>
<h5>Indications</h5>
<ul>
<li>Disputed paternity in divorce / inheritance / immigration</li>
<li>Child born out of rape — to identify perpetrator</li>
<li>Child born out of wedlock — succession claims</li>
<li>False implication of fatherhood</li>
<li>Maintenance disputes</li>
</ul>
<h5>Special Cases</h5>
<ul>
<li>Alleged father deceased: test paternal grandparents (each shares ~25% with child)</li>
<li>Y-STR for father-son lineage when only male relatives available</li>
<li>mtDNA for mother-child lineage</li>
</ul>
<h4>★ DNA in MASS DISASTER Identification</h4>
<h5>Context</h5>
<ul>
<li>Air crashes · tsunamis · earthquakes · terror attacks (e.g., 9/11) · transport disasters</li>
<li>★ Bodies often FRAGMENTED · DECOMPOSED · BURNT</li>
<li>★ Interpol DVI (Disaster Victim Identification) protocol (Ch 6)</li>
</ul>
<h5>★ Interpol DVI Workflow</h5>
<ol>
<li><strong>Pink form</strong> — post-mortem (PM) data — body fragments, dental, fingerprints, DNA samples</li>
<li><strong>Yellow form</strong> — ante-mortem (AM) data from family — descriptions, dental records, DNA from relatives</li>
<li>Reconciliation — matches PM with AM</li>
</ol>
<h5>DNA Sample Sources from Disaster Victims</h5>
<ul>
<li>★ FEMUR — best preserved nuclear DNA (cortical bone shields)</li>
<li>★ TEETH — nuclear + mtDNA (pulp + dentine)</li>
<li>Blood / muscle / liver / spleen if fresh</li>
<li>If decomposed → quadriceps muscle, ribs</li>
<li>★ For burnt / charred remains → mtDNA from teeth often only option</li>
</ul>
<h5>DNA Methods Used</h5>
<ul>
<li>★ STR-PCR — when nuclear DNA available (fresh remains)</li>
<li>★ <strong>mtDNA</strong> — when nuclear DNA degraded (★ critical in fragmented / burnt cases)</li>
<li>Y-STR for male identification</li>
<li>SNP analysis as alternative</li>
</ul>
<h5>Reference Samples</h5>
<ul>
<li>From maternal relatives (mtDNA matching) — siblings, mother, maternal aunts/uncles</li>
<li>From paternal relatives (Y-STR for males)</li>
<li>Personal effects of victim — toothbrush, comb, razor (touch DNA)</li>
</ul>
<h5>Famous mtDNA Cases</h5>
<ul>
<li>★ 9/11 WTC victims — mtDNA identified many fragmented remains</li>
<li>★ Indian Ocean Tsunami 2004 — mtDNA for decomposed bodies</li>
<li>★ Romanov royal family</li>
<li>★ Vietnam War MIA soldiers</li>
</ul>
<h5>Team Approach</h5>
<ul>
<li>Forensic pathologist · odontologist · DNA expert · police · counsellors</li>
<li>Body bags numbered systematically</li>
<li>Photographs at each stage · personal effects bagged separately</li>
<li>DNA samples from EVERY body</li>
<li>Multi-disciplinary reconciliation</li>
</ul>
<h5>Pitfalls</h5>
<ul>
<li>Cross-contamination among nearby remains</li>
<li>Heat-degraded DNA in burnt cases</li>
<li>Insufficient AM reference samples (especially with full-family fatalities)</li>
<li>Cultural / religious objections to delays in burial</li>
<li>Cost + capacity overwhelm for very large incidents</li>
</ul>
<h4>Ethical / Legal Considerations</h4>
<ul>
<li>Family consent for DNA reference samples</li>
<li>Confidentiality of profiles</li>
<li>Disposition of remains — handed over only after positive ID</li>
<li>Some families may opt for partial ID (e.g., one bone fragment) for closure</li>
</ul>`,
    sources: ['DP-07 · DP-08'],
    jumpToDiagram: 'DP-07'
  }
];

return {
  chapterNumber: 5,
  chapterTitle: 'DNA Profiling',
  prereqs: [
    { term: 'DNA fingerprinting', meaning: '★ Discovered by Sir Alec Jeffreys at Leicester University in 1984. Revolutionised forensic science.' },
    { term: 'Nucleotide', meaning: 'DNA building block: phosphate + deoxyribose + one base (A, T, G, C).' },
    { term: 'A-T bond', meaning: 'Adenine pairs with Thymine via 2 hydrogen bonds.' },
    { term: 'G-C bond', meaning: 'Guanine pairs with Cytosine via 3 hydrogen bonds.' },
    { term: 'Nuclear DNA (nDNA)', meaning: 'In nucleus · 2 copies · biparental inheritance · 46 chromosomes.' },
    { term: 'Mitochondrial DNA (mtDNA)', meaning: 'In mitochondria · circular · 16,569 bp · 1000-10,000 copies/cell · ★ MATERNAL only.' },
    { term: 'RFLP', meaning: 'Restriction Fragment Length Polymorphism — original Jeffreys method. Needs large, high-quality DNA.' },
    { term: 'PCR', meaning: '★ Polymerase Chain Reaction — Kary Mullis 1985 (Nobel 1993). 3-step thermal cycle. Amplifies trace DNA exponentially.' },
    { term: 'STR', meaning: '★ Short Tandem Repeats — microsatellites 2-5 bp. Current FORENSIC GOLD STANDARD.' },
    { term: 'VNTR', meaning: 'Variable Number of Tandem Repeats — minisatellites (10-100 bp repeat units).' },
    { term: 'Microsatellite', meaning: 'STR = 2-5 bp tandem repeats. Used in modern STR-PCR profiling.' },
    { term: 'CODIS', meaning: 'Combined DNA Index System (FBI USA) — originally 13 STR loci, expanded to 20 in 2017.' },
    { term: 'Y-STR', meaning: 'Y-chromosome STR analysis — paternal inheritance. Separates male contributor in sexual assault samples.' },
    { term: 'Amelogenin (AmelX/Y)', meaning: 'Sex determination gene — X chromosome 106 bp · Y chromosome 112 bp. One band = ♀, two = ♂.' },
    { term: 'Restriction enzymes', meaning: 'Endonucleases (EcoR-1, PsT-1, HinF-1) — cut DNA at specific sequences in RFLP.' },
    { term: 'Southern blot', meaning: 'Transfer of DNA fragments from gel to nylon/nitrocellulose membrane in RFLP.' },
    { term: 'Taq polymerase', meaning: 'Heat-stable DNA polymerase from Thermus aquaticus — used in PCR extension step at 72°C.' },
    { term: 'Denaturation (PCR)', meaning: '★ 95°C — DNA strands separate (H-bonds break).' },
    { term: 'Annealing (PCR)', meaning: '★ 55°C — primers bind specific complementary sites.' },
    { term: 'Extension (PCR)', meaning: '★ 72°C — Taq polymerase extends new strand 5&apos;→3&apos;.' },
    { term: 'Primer', meaning: 'Short synthetic oligonucleotide (~ 20 bp) that binds specific DNA region in PCR.' },
    { term: 'D-loop', meaning: 'Hypervariable control region of mtDNA — used for sequencing.' },
    { term: 'Monozygotic twins limitation', meaning: '★ DNA profiling CANNOT differentiate monozygotic (identical) twins — same genome.' },
    { term: '4% EDTA', meaning: '★ Preservative for liquid blood for DNA analysis (2-5 mL in sterile tube).' },
    { term: 'Air-dry + double swab', meaning: '★ Saliva swab technique — wet swab first, then dry swab. Prevents bacterial overgrowth.' },
    { term: 'Paper packing', meaning: '★ Clothes for DNA evidence — air-dried, then paper packet. NEVER polythene.' },
    { term: 'Touch DNA', meaning: 'DNA from skin cells shed by handling objects — detectable from ~15 cells via STR-PCR.' },
    { term: 'Secondary transfer', meaning: 'Touch-DNA risk — X touches A then B, B&apos;s DNA found at A&apos;s scene.' },
    { term: 'Femur for DNA', meaning: '★ Cortical bone shields nuclear DNA — best skeletal source.' },
    { term: 'Tooth for DNA', meaning: 'Pulp + dentine preserve nuclear + mtDNA — survives fire, decomposition.' },
    { term: 'Hair shaft', meaning: '★ Has only mtDNA (no nuclear) — used for mtDNA typing.' },
    { term: 'Macerated fetus DNA', meaning: '★ Fetal lungs + brain most suitable for DNA typing.' },
    { term: '3 contamination sources', meaning: '(1) environmental DNA · (2) between-sample preparation · (3) amplified DNA from previous PCR.' },
    { term: 'Forensic Science Laboratory (FSL)', meaning: 'Destination for DNA samples · chain of custody maintained · receipt obtained.' }
  ],
  diagrams: [
    { id: 'DP-01', title: 'DNA Profiling — Master Overview', shortTitle: 'Master Overview', svg: SVG_DP01,
      prereqs: [{term:'Jeffreys 1984 Leicester',meaning:'Original RFLP discovery.'},{term:'4 typing methods',meaning:'RFLP · PCR · STR (gold std) · mtDNA.'},{term:'CANNOT differentiate MZ twins',meaning:'Major limitation.'},{term:'STR-PCR gold standard',meaning:'Rapid · small · degraded OK.'}],
      nodes: nodeList(['dp-history','dp-overview','dp-applications','dp-quote','dp-advantages','dp-disadvantages','dp-modern']),
      mcqs: MCQS['DP-01']
    },
    { id: 'DP-02', title: 'DNA Structure &amp; Types', shortTitle: 'DNA Structure', svg: SVG_DP02,
      prereqs: [{term:'A-T 2 H-bonds',meaning:'G-C 3 H-bonds.'},{term:'nDNA biparental',meaning:'mtDNA maternal only.'},{term:'mtDNA 1000-10000 copies/cell',meaning:'Vs nDNA 2 copies.'},{term:'Watson-Crick 1953',meaning:'Double helix.'},{term:'Human genome 3 billion bp',meaning:'≈ 30,000 genes.'}],
      nodes: nodeList(['dp-basics','dp-bonds','dp-ndna','dp-mtdna','dp-helix']),
      mcqs: MCQS['DP-02']
    },
    { id: 'DP-03', title: '★ 4 Methods of DNA Typing — Overview', shortTitle: '4 Methods ★', svg: SVG_DP03,
      prereqs: [{term:'RFLP original',meaning:'Jeffreys 1984.'},{term:'PCR amplification',meaning:'Mullis 1985 · Nobel 1993.'},{term:'STR gold standard',meaning:'Microsatellite 2-5 bp.'},{term:'mtDNA for degraded',meaning:'Bones · teeth · hair shafts.'},{term:'Y-STR for sexual assault',meaning:'Separates male in female matrix.'}],
      nodes: nodeList(['dp-methods-intro','dp-rflp-card','dp-pcr-card','dp-str-card','dp-mt-card','dp-evolution','dp-y-str']),
      mcqs: MCQS['DP-03']
    },
    { id: 'DP-04', title: 'RFLP Method — Step by Step', shortTitle: 'RFLP', svg: SVG_DP04,
      prereqs: [{term:'6 RFLP steps',meaning:'Extract · digest · gel · Southern blot · probe · X-ray.'},{term:'EcoR-1 / PsT-1 / HinF-1',meaning:'Restriction endonucleases.'},{term:'High-MW DNA needed',meaning:'Major RFLP limitation.'},{term:'Bar-code-like X-ray',meaning:'Final RFLP output.'}],
      nodes: nodeList(['dp-rflp-steps','dp-rflp-pros','dp-rflp-cons','dp-rflp-enzymes']),
      mcqs: MCQS['DP-04']
    },
    { id: 'DP-05', title: 'PCR Method — Polymerase Chain Reaction', shortTitle: 'PCR', svg: SVG_DP05,
      prereqs: [{term:'Mullis 1985 · Nobel 1993',meaning:'PCR origin.'},{term:'3-step cycle',meaning:'Denaturation 95° · Annealing 55° · Extension 72°.'},{term:'Taq polymerase',meaning:'Thermus aquaticus, heat-stable.'},{term:'10⁹ copies in 30 cycles',meaning:'Exponential amplification.'},{term:'Contamination risk',meaning:'Single cell → false positive.'}],
      nodes: nodeList(['dp-pcr-intro','dp-pcr-steps','dp-pcr-pros','dp-pcr-cons','dp-pcr-exponential']),
      mcqs: MCQS['DP-05']
    },
    { id: 'DP-06', title: '★ STR Method — Current Gold Standard', shortTitle: 'STR ★', svg: SVG_DP06,
      prereqs: [{term:'Microsatellites 2-5 bp',meaning:'STR repeat units.'},{term:'Minisatellites = VNTR',meaning:'10-100 bp larger repeats.'},{term:'CODIS 13→20 loci',meaning:'USA database.'},{term:'AmelX 106 bp · AmelY 112 bp',meaning:'Sex determination.'},{term:'Degraded DNA OK',meaning:'STR target size 100-300 bp.'}],
      nodes: nodeList(['dp-tandem','dp-str-steps','dp-str-advantages','dp-codis','dp-str-loci','dp-str-clinical']),
      mcqs: MCQS['DP-06']
    },
    { id: 'DP-07', title: 'Mitochondrial DNA (mtDNA)', shortTitle: 'mtDNA', svg: SVG_DP07,
      prereqs: [{term:'mtDNA circular · 16569 bp',meaning:'1000-10000 copies/cell.'},{term:'MATERNAL only',meaning:'Sperm mito destroyed.'},{term:'Hair shaft = only mtDNA',meaning:'No nuclear DNA without follicle.'},{term:'Romanovs · 9/11 · Tsunami',meaning:'Famous mtDNA cases.'}],
      nodes: nodeList(['dp-mtdna-features','dp-mtdna-uses','dp-mtdna-vs-ndna','dp-mtdna-cases']),
      mcqs: MCQS['DP-07']
    },
    { id: 'DP-08', title: '10 Applications of DNA Profiling', shortTitle: '10 Applications', svg: SVG_DP08,
      prereqs: [{term:'Sexual + violent crimes',meaning:'Y-STR for male fraction.'},{term:'Acquit falsely implicated',meaning:'Defence tool · Innocence Project.'},{term:'PM identification',meaning:'Skeleton · exhumation · embalmed.'},{term:'Paternity 99.99%',meaning:'≥ 16 STR loci.'},{term:'Amelogenin sex',meaning:'One band ♀, two ♂.'}],
      nodes: nodeList(['dp-apps-overview','dp-app1','dp-app2','dp-app3','dp-app4','dp-app5','dp-app6','dp-app-other','dp-sex-id']),
      mcqs: MCQS['DP-08']
    },
    { id: 'DP-09', title: 'DNA Evidence Sources — Crime Scene + Autopsy', shortTitle: 'Evidence Sources', svg: SVG_DP09,
      prereqs: [{term:'Common DNA evidence',meaning:'Weapons · clothes · toothbrush · cigarette · condom · bite mark · nail.'},{term:'Femur + teeth = best PM',meaning:'Cortical bone protects DNA.'},{term:'Touch DNA ~15 cells',meaning:'Modern STR-PCR sensitivity.'},{term:'Macerated fetus = lungs + brain',meaning:'DNA-rich.'}],
      nodes: nodeList(['dp-evidence-intro','dp-evidence-table','dp-touch-dna','dp-postmortem','dp-fetal']),
      mcqs: MCQS['DP-09']
    },
    { id: 'DP-10', title: 'Sample Collection · Preservation · Contamination', shortTitle: 'Collection · Storage · Contamination', svg: SVG_DP10,
      prereqs: [{term:'4% EDTA for blood',meaning:'Standard DNA preservative.'},{term:'Air-dried double swab',meaning:'Saliva method.'},{term:'Paper packing · NEVER polythene',meaning:'Clothes.'},{term:'3 contamination sources',meaning:'Environment · between-samples · previous PCR.'},{term:'4 applicability factors',meaning:'Non-human · degraded · contaminated · mixed.'}],
      nodes: nodeList(['dp-collection','dp-storage','dp-samples-table','dp-contamination','dp-limitations']),
      mcqs: MCQS['DP-10']
    }
  ],
  diffTables: DIFF_TABLES,
  subjectiveQs: SUBJ,
  highYield: [
    '<strong>★ Sir Alec JEFFREYS</strong> discovered DNA fingerprinting in <strong>1984</strong> at <strong>LEICESTER UNIVERSITY</strong>',
    '<strong>★ Kary MULLIS</strong> invented PCR in <strong>1985</strong> (Nobel Prize Chemistry 1993)',
    '<strong>★ 4 DNA typing methods:</strong> RFLP · PCR · STR (★ current gold standard) · mtDNA',
    '<strong>★ STR-PCR</strong> = current FORENSIC GOLD STANDARD — rapid · small sample · can type degraded DNA',
    '<strong>★ Microsatellites (STR) = 2-5 bp tandem repeats</strong> · Minisatellites (VNTR) = 10-100 bp',
    '<strong>★ CODIS:</strong> FBI USA database · originally 13 STR loci · expanded to 20 in 2017',
    '<strong>★ Y-STR</strong> — separates MALE contributor in sexual assault samples (vaginal swab male-in-female matrix)',
    '<strong>★ Amelogenin (AmelX 106 bp · AmelY 112 bp)</strong> — sex determination · ONE band = ♀ · TWO bands = ♂',
    '<strong>★ Major LIMITATION:</strong> DNA CANNOT differentiate MONOZYGOTIC TWINS',
    '<strong>★ Mitochondrial DNA:</strong> circular · 16,569 bp · 1000-10,000 copies/cell · ★ MATERNAL inheritance only',
    '<strong>★ mtDNA forensic use:</strong> OLD/degraded samples · BONES · TEETH · HAIR SHAFTS · ancient remains',
    '<strong>★ Famous mtDNA cases:</strong> Romanovs · 9/11 WTC · Tsunami 2004 · Vietnam MIA · Mengele',
    '<strong>★ A-T = 2 H-bonds · G-C = 3 H-bonds</strong> (Chargaff)',
    '<strong>★ Human genome ≈ 3 billion bp</strong> · ≈ 30,000 genes',
    '<strong>★ Nuclear DNA — biparental · Mitochondrial DNA — maternal only</strong>',
    '<strong>★ PCR 3 steps:</strong> Denaturation 95°C · Annealing 55°C · Extension 72°C (Taq polymerase)',
    '<strong>★ Taq polymerase</strong> = heat-stable DNA polymerase from <em>Thermus aquaticus</em>',
    '<strong>★ 30 PCR cycles → ~ 10⁹ copies</strong> (exponential)',
    '<strong>★ RFLP enzymes:</strong> EcoR-1 · PsT-1 · HinF-1 (restriction endonucleases)',
    '<strong>★ RFLP needs HIGH-MW HIGH-QUALITY LARGE sample</strong> (vs PCR which needs only trace)',
    '<strong>★ 10 Applications</strong> of DNA: sexual crimes · violent crimes · missing person · ★ acquit innocent · PM ID · paternity · custody disputes · extortion · immigration · ★ sex ID',
    '<strong>★ Paternity:</strong> &gt; 16 STR loci match → probability &gt; 99.99%',
    '<strong>★ FEMUR</strong> = best PM nuclear DNA source (cortical bone shields)',
    '<strong>★ TEETH</strong> = nuclear + mtDNA (pulp + dentine survive fire / decomposition)',
    '<strong>★ HAIR SHAFT</strong> (without follicle) = ONLY mtDNA',
    '<strong>★ Macerated fetus DNA:</strong> lungs + brain most suitable',
    '<strong>★ Touch DNA</strong> — STR-PCR can recover profile from ~15 cells (~ 100 pg)',
    '<strong>★ Liquid blood preservation:</strong> 2-5 mL in 4% EDTA · sterile tube',
    '<strong>★ Saliva / bite mark swab:</strong> AIR-DRIED · DOUBLE SWAB technique (wet then dry)',
    '<strong>★ Clothes:</strong> air-dried, PAPER packing · ★ NEVER polythene/plastic (moisture → microbial growth → DNA degraded)',
    '<strong>★ Vaginal swab</strong> in rape: &gt; 2 separate sterile tubes · 4°C if delay',
    '<strong>★ Exhumation tissue:</strong> sterile container · NO preservative · room temp',
    '<strong>★ 3 Sources of DNA Contamination:</strong> environmental · between-samples · amplified DNA from previous reaction',
    '<strong>★ 4 Factors affecting DNA technique:</strong> non-human DNA · degradation · contamination · multiple contributors',
    '<strong>★ Avoid 25-37°C storage &gt; 2 weeks</strong> — DNA degrades · PCR fails',
    '<strong>★ Used condom</strong> in rape: semen + vaginal + penile + pubic hair (multi-source DNA)',
    '<strong>★ Common DNA evidence sources:</strong> weapons, bullet, clothes, toothbrush, cigarette, condom, bite mark, nail',
    '<strong>★ Wrong preservative or broken chain of custody</strong> → evidence INADMISSIBLE in court',
    '<strong>★ Y-STR + mtDNA</strong> = sister lineage markers (Y paternal · mt maternal)',
    '<strong>★ Interpol DVI:</strong> Pink form (PM data) + Yellow form (AM data) reconciliation (Ch 6)',
    '<strong>★ DNA can EXONERATE</strong> falsely implicated persons (Innocence Project)',
    '<strong>★ DNA evidence sources:</strong> (1) scene of crime · (2) clinical exam · (3) dead body / autopsy',
    'See subject-pinned IPC↔BNS Quick-Reference Card + Subject Subjective Q-Bank'
  ]
};
})();

