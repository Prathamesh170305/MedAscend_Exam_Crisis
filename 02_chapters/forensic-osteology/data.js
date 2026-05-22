/* ===================================================================
   Medascend FMT — Chapter 4: Forensic Osteology
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

const SVG_FO01 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Forensic Osteology — Master Overview</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">10 questions a forensic doctor must answer · "Big Four" focus · Krogman&apos;s accuracy</text>

<g data-node-id="fo-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🦴 FORENSIC OSTEOLOGY — Scope</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Sub-specialty of forensic medicine dealing with examination of <strong>HUMAN SKELETON</strong>. Required when skeletonised / partial / fragmented remains are submitted by legal authorities. Goal: identify the victim&apos;s characteristics AND determine cause + manner of death from bones alone.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-10qs"><rect x="60" y="240" width="900" height="380" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="510" y="280" class="t-nlg" text-anchor="middle">📋 10 Questions When Bones Are Submitted</text><text x="90" y="315" class="t-body">1. Are they <strong>BONES</strong>? (gross + microscopy + serology)</text><text x="90" y="345" class="t-body">2. Are they <strong>HUMAN</strong> bones? (Haversian system size; precipitin test)</text><text x="90" y="375" class="t-body">3. What is the <strong>SEX</strong>? ★ "Big Four"</text><text x="90" y="405" class="t-body">4. What is the <strong>AGE</strong> at time of death? ★ "Big Four"</text><text x="90" y="435" class="t-body">5. What is the <strong>STATURE</strong>? ★ "Big Four"</text><text x="90" y="465" class="t-body">6. What is the <strong>RACE</strong>? ★ "Big Four"</text><text x="90" y="495" class="t-body">7. How can <strong>IDENTITY</strong> be established? (dental, DNA, peculiarities)</text><text x="90" y="525" class="t-body">8. What is the <strong>TIME since death</strong>? (UV, nitrogen, amino acids)</text><text x="90" y="555" class="t-body">9. What was the <strong>CAUSE of death</strong>? (injuries, foreign body)</text><text x="90" y="585" class="t-body">10. What is the <strong>MANNER of separation</strong>? (natural / cut / bite)</text><circle class="ic" cx="940" cy="258" r="14"/><text class="t-info" x="940" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-krogman"><rect x="980" y="240" width="560" height="380" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="1260" y="280" class="t-nlg" text-anchor="middle">📊 ★ Krogman&apos;s Accuracy of Sex from Skeleton</text><text x="1000" y="320" class="t-body" font-weight="700">Sexing accuracy by available bone:</text><text x="1000" y="355" class="t-body">• ★ <strong>ENTIRE SKELETON</strong> — 100%</text><text x="1000" y="385" class="t-body">• ★ <strong>PELVIS + SKULL together</strong> — 98%</text><text x="1000" y="415" class="t-body">• ★ <strong>PELVIS alone</strong> — 95% (★ BEST single bone)</text><text x="1000" y="445" class="t-body">• ★ <strong>SKULL alone</strong> — 92%</text><text x="1000" y="475" class="t-body">• ★ <strong>LONG BONES alone</strong> — 80%</text><text x="1000" y="520" class="t-body" font-weight="700">★ General sex difference:</text><text x="1000" y="550" class="t-body">• Male — large, massive · <strong>4.5 kg</strong></text><text x="1000" y="580" class="t-body">• Female — small, slender · <strong>2.75 kg</strong></text><circle class="ic" cx="1520" cy="258" r="14"/><text class="t-info" x="1520" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-bigfour"><rect x="60" y="650" width="1480" height="200" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="800" y="690" class="t-nlg" text-anchor="middle">🎯 The "BIG FOUR" of Forensic Osteology</text><text x="90" y="725" class="t-body" font-weight="700">When examining skeletal remains, begin with these four:</text><text x="90" y="755" class="t-body"><strong>1. SEX</strong> — pelvis best (95%); skull next (92%); long bones least (80%)</text><text x="90" y="780" class="t-body"><strong>2. AGE at death</strong> — dental status · ossification · epiphyseal fusion · suture closure · pubic symphysis (Todd 10 phases, McKern-Stewart components)</text><text x="90" y="805" class="t-body"><strong>3. STATURE</strong> — long bones × multiplication factor (Karl Pearson Europeans · Trotter-Gleser Americans · Pan/Nat/Shah-Siddiqui Indians)</text><text x="90" y="830" class="t-body"><strong>4. RACE</strong> — skull (90-95% — Krogman) · cephalic index · dolichocephalic / mesaticephalic / brachycephalic</text><circle class="ic" cx="1510" cy="668" r="14"/><text class="t-info" x="1510" y="674" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-other-bones"><rect x="60" y="880" width="900" height="180" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="510" y="918" class="t-nlg" text-anchor="middle">🧬 Other Bone Yields</text><text x="90" y="955" class="t-body"><strong>DNA</strong> — best preserved in <strong>FEMUR / TEETH</strong> (cortical bone shields nuclear DNA; teeth also have mtDNA — see Ch 5)</text><text x="90" y="985" class="t-body"><strong>Blood group</strong> — bone marrow / teeth (ABH antigens persist)</text><text x="90" y="1015" class="t-body"><strong>Bullets / pellets / implants / surgical plates</strong> — preserved in bone matrix; weapon + identity clues</text><text x="90" y="1040" class="t-body"><strong>Hair, dental records</strong> — accompany skeletal evidence for identification</text><circle class="ic" cx="940" cy="898" r="14"/><text class="t-info" x="940" y="904" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-tools"><rect x="980" y="880" width="560" height="180" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="918" class="t-nlg" text-anchor="middle">⚙️ Tools of the Trade</text><text x="1000" y="955" class="t-body">• ★ <strong>Hepburn osteometric board</strong> — measure long bones</text><text x="1000" y="985" class="t-body">• Sliding + spreading calipers · mandibulometer</text><text x="1000" y="1015" class="t-body">• ★ UV light · benzidine / Kastle-Meyer test</text><text x="1000" y="1040" class="t-body">• Precipitin test · gel diffusion · radiology · DNA</text><circle class="ic" cx="1520" cy="898" r="14"/><text class="t-info" x="1520" y="904" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_FO02 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Bone or Not? · Human or Animal?</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Gross · Haversian microscopy · Precipitin test (species-specific antisera)</text>

<g data-node-id="fo-boneornot"><rect class="body-white" x="60" y="110" width="730" height="340" rx="14"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 165 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gBlue)"/><text x="80" y="150" class="t-nlg">🔍 Step 1 — Bone or Not?</text><text x="80" y="195" class="t-keylbl">1. Gross examination:</text><text x="80" y="220" class="t-keyval">• Shape · size · texture · weight</text><text x="80" y="245" class="t-keyval">• Morphology with anatomical landmarks</text><text x="80" y="270" class="t-keyval">• Compare to established bone reference</text><text x="80" y="305" class="t-keylbl">2. Microscopy:</text><text x="80" y="330" class="t-keyval">• Reveals true <strong>HAVERSIAN system</strong></text><text x="80" y="355" class="t-keyval">• Presence of <strong>OSTEONS</strong></text><text x="80" y="385" class="t-keylbl">3. Serology (if doubt):</text><text x="80" y="410" class="t-keyval">• Extract species-specific protein from bone</text><text x="80" y="430" class="t-keyval">• Test against specific antisera (precipitin)</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-humananimal"><rect class="body-white" x="810" y="110" width="730" height="340" rx="14"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 165 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gGreen)"/><text x="830" y="150" class="t-nlg">🐾 Step 2 — Human or Animal?</text><text x="830" y="195" class="t-keyval">Usually easy. Difficulty arises with:</text><text x="830" y="220" class="t-keyval">• Small bones OR fragments</text><text x="830" y="245" class="t-keyval">• Closely related species (great apes vs humans)</text><text x="830" y="280" class="t-keylbl">★ Microscopic Discriminator:</text><text x="830" y="305" class="t-keyval">★ <strong>Haversian systems + canals are LARGER</strong></text><text x="830" y="330" class="t-keyval">in <strong>HUMANS</strong> than in animals</text><text x="830" y="365" class="t-keylbl">Serological:</text><text x="830" y="390" class="t-keyval">• <strong>PRECIPITIN test</strong> — antihuman serum</text><text x="830" y="415" class="t-keyval">• Electrophoresis · gel diffusion</text><text x="830" y="440" class="t-keyval">— now confirms human tissue</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-haversian"><rect x="60" y="470" width="900" height="280" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="510" y="510" class="t-nlg" text-anchor="middle">🔬 HAVERSIAN SYSTEM — Microscopic Key</text><text x="90" y="545" class="t-body">★ <strong>Haversian system / OSTEON</strong> = structural unit of compact bone:</text><text x="90" y="575" class="t-body">• Central <strong>Haversian canal</strong> (containing blood vessel, nerve)</text><text x="90" y="600" class="t-body">• Concentric <strong>lamellae</strong> around canal</text><text x="90" y="625" class="t-body">• <strong>Osteocytes</strong> within lacunae</text><text x="90" y="650" class="t-body">• <strong>Canaliculi</strong> radiating to neighbours</text><text x="90" y="685" class="t-body" font-weight="700">★ Forensic discriminator (vs animal):</text><text x="90" y="710" class="t-body">★ Haversian systems + canals are LARGER in DIAMETER in humans</text><text x="90" y="735" class="t-body">★ Age estimation: Rai equation → Age = (number of osteons) + 8.3</text><circle class="ic" cx="940" cy="488" r="14"/><text class="t-info" x="940" y="494" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-precipitin"><rect x="980" y="470" width="560" height="280" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1260" y="510" class="t-nlg" text-anchor="middle">🧪 PRECIPITIN Test</text><text x="1000" y="545" class="t-body" font-weight="700">★ Confirms human origin of bone/tissue</text><text x="1000" y="575" class="t-body">1. Extract protein from bone</text><text x="1000" y="600" class="t-body">2. React with specific antisera (anti-human)</text><text x="1000" y="625" class="t-body">3. Visible <strong>PRECIPITATE</strong> at antigen-antibody zone</text><text x="1000" y="660" class="t-body">★ <strong>Time limit:</strong> positive up to ~5–10 years</text><text x="1000" y="685" class="t-body">— degrades with age</text><text x="1000" y="715" class="t-body">★ For older bones → DNA / mtDNA preferred</text><circle class="ic" cx="1520" cy="488" r="14"/><text class="t-info" x="1520" y="494" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="780" width="1480" height="60" rx="10" fill="url(#gRed)"/><text x="800" y="818" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">★ HAVERSIAN canals LARGER in HUMANS · PRECIPITIN test confirms human origin (positive up to 5-10 yr)</text>

<g data-node-id="fo-cartilage-tooth"><rect x="60" y="870" width="1480" height="200" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="910" class="t-nlg" text-anchor="middle">⚖️ Distinguishing Bone from Cartilage, Tooth, and Stone</text><text x="90" y="945" class="t-body"><strong>Cartilage</strong> — flexible, no Haversian system, hyaline appearance, chondrocytes in lacunae</text><text x="90" y="970" class="t-body"><strong>Tooth</strong> — enamel (hardest tissue), dentine (Haversian-like tubules), pulp; ★ resists fire / decomposition longer than bone</text><text x="90" y="995" class="t-body"><strong>Stone / plaster / ceramic</strong> — no organic component, no Haversian, fails Kastle-Meyer (no blood) and precipitin tests</text><text x="90" y="1020" class="t-body"><strong>Bone</strong> — Haversian present, 4.5% nitrogen fresh, blood reaction positive (benzidine) up to 100 years</text><circle class="ic" cx="1510" cy="888" r="14"/><text class="t-info" x="1510" y="894" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_FO03 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ Sex from Bones — Krogman&apos;s Hierarchy</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Pelvis (95%) &gt; Skull (92%) &gt; Long bones (80%) · Combined pelvis+skull = 98%</text>

<g data-node-id="fo-sex-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚥ SEX DETERMINATION — 3 Methods</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">1. <strong>Morphological</strong> — visual examination of bone features. 2. <strong>Morphometry / osteometry</strong> — measurements + indices. 3. <strong>Multivariate discriminant function analysis</strong>. If soft parts available: Y-chromosome demonstration · DNA profiling.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-krogman-table"><rect x="60" y="240" width="900" height="320" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="510" y="280" class="t-nlg" text-anchor="middle">📊 ★ KROGMAN&apos;S Accuracy Hierarchy</text><text x="90" y="320" class="t-body" font-weight="700">Sexing accuracy from skeletal material:</text><text x="90" y="360" class="t-body">★ <strong>ENTIRE skeleton</strong> ........................ <strong>100%</strong></text><text x="90" y="395" class="t-body">★ <strong>PELVIS + SKULL together</strong> .............. <strong>98%</strong></text><text x="90" y="430" class="t-body">★ <strong>PELVIS alone</strong> ................................ <strong>95%</strong> ← best single bone</text><text x="90" y="465" class="t-body">★ <strong>SKULL alone</strong> .................................. <strong>92%</strong></text><text x="90" y="500" class="t-body">★ <strong>LONG BONES alone</strong> ..................... <strong>80%</strong></text><text x="90" y="540" class="t-body" font-style="italic">Reason: pelvis adapted for childbirth → most sexually dimorphic structure</text><circle class="ic" cx="940" cy="258" r="14"/><text class="t-info" x="940" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-general-skel"><rect x="980" y="240" width="560" height="320" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="1260" y="280" class="t-nlg" text-anchor="middle">⚖️ General Skeletal Sex Differences</text><text x="1000" y="320" class="t-body" font-weight="700">MALE skeleton:</text><text x="1000" y="350" class="t-body">• Large · massive</text><text x="1000" y="375" class="t-body">• Heavier · rough</text><text x="1000" y="400" class="t-body">• Prominent muscle impressions</text><text x="1000" y="425" class="t-body">• <strong>Weight: 4.5 kg</strong></text><text x="1000" y="465" class="t-body" font-weight="700">FEMALE skeleton:</text><text x="1000" y="495" class="t-body">• Small · slender</text><text x="1000" y="520" class="t-body">• Light · smooth</text><text x="1000" y="545" class="t-body">• Muscle impressions less prominent</text><text x="1000" y="570" class="t-body">• <strong>Weight: 2.75 kg</strong></text><circle class="ic" cx="1520" cy="258" r="14"/><text class="t-info" x="1520" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-femur-sex"><rect x="60" y="590" width="730" height="240" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="425" y="630" class="t-nlg" text-anchor="middle">🦴 FEMUR Sex Differences</text><text x="90" y="665" class="t-body">• Length: ♂ 438 mm · ♀ 400 mm</text><text x="90" y="690" class="t-body">• Head diameter (vertical): ♂ &gt; 48 mm · ♀ &lt; 44 mm</text><text x="90" y="715" class="t-body">• Bicondylar breadth: ♂ 77.9 mm · ♀ 71.1 mm</text><text x="90" y="740" class="t-body">• Head articular surface: ♂ &gt; 2/3 sphere · ♀ &lt; 2/3 sphere</text><text x="90" y="765" class="t-body">• Collodiaphyseal angle: ♂ 45° (low) · ♀ 46° (high)</text><text x="90" y="795" class="t-body">• Angulation of shaft with condyles: ♂ ~80° · ♀ ~76°</text><circle class="ic" cx="770" cy="608" r="14"/><text class="t-info" x="770" y="614" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-sternum-sex"><rect x="810" y="590" width="730" height="240" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1175" y="630" class="t-nlg" text-anchor="middle">🦴 STERNUM ★ Ashley&apos;s + Hyrtl&apos;s</text><text x="830" y="665" class="t-body">★ <strong>Ashley&apos;s rule:</strong> total midline length (manubrium + body)</text><text x="830" y="690" class="t-body">  ♂ &gt; 149 mm · ♀ &lt; 149 mm</text><text x="830" y="725" class="t-body">★ <strong>Hyrtl&apos;s law (Manubrium-corpus index):</strong></text><text x="830" y="750" class="t-body">  = manubrium length × 100 ÷ body length</text><text x="830" y="775" class="t-body">  ♂ &lt; 50 · ♀ &gt; 50</text><text x="830" y="805" class="t-body">★ Male body &gt; 2× length of manubrium · Female body &lt; 2× manubrium</text><circle class="ic" cx="1530" cy="608" r="14"/><text class="t-info" x="1530" y="614" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-clav-scap-sex"><rect x="60" y="860" width="1480" height="200" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="900" class="t-nlg" text-anchor="middle">🦴 Other Sex-Dimorphic Bones (quick yields)</text><text x="90" y="935" class="t-body"><strong>CLAVICLE:</strong> ♂ length 147.6 mm · weight &gt; 20.1 g · more curved · ♀ length 129.8 mm · weight &lt; 7.82 g · less curved</text><text x="90" y="960" class="t-body"><strong>SCAPULA (Iordanidis):</strong> ♂ height &gt; 157 mm, breadth &gt; 106 mm, glenoid width &gt; 29 mm · ♀ height &lt; 144 mm, breadth &lt; 93 mm</text><text x="90" y="985" class="t-body"><strong>HUMERUS:</strong> ♂ length 31.1 cm, head vertical Ø 48 mm · ♀ length 27.9 cm, head Ø 40.5 mm</text><text x="90" y="1010" class="t-body"><strong>SACRUM:</strong> ♂ 5 OR 6 segments, more projected promontory · ♀ always 5 segments, less projected; Sacral index ♂ &lt; 114, ♀ &gt; 114</text><text x="90" y="1035" class="t-body">★ Long bones combined accuracy = 80% (Krogman) · individual bone accuracy lower</text><circle class="ic" cx="1510" cy="878" r="14"/><text class="t-info" x="1510" y="884" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_FO04 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ Sex from SKULL &amp; MANDIBLE</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Skull 92% accuracy · Mandible — angle, chin, ramus</text>

<g data-node-id="fo-skull-sex"><rect x="60" y="110" width="730" height="950" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="425" y="150" class="t-nlg" text-anchor="middle">🧠 SKULL Sex Differences (92%)</text><text x="90" y="190" class="t-body" font-weight="700">GENERAL</text><text x="90" y="215" class="t-body">• Size: ♂ large, longer · ♀ small</text><text x="90" y="240" class="t-body">• Architecture: ♂ ragged · ♀ smooth</text><text x="90" y="275" class="t-body" font-weight="700">ANTERIOR (face)</text><text x="90" y="300" class="t-body">• Forehead: ♂ steep + less rounded · ♀ vertical + rounded + "infantile"</text><text x="90" y="325" class="t-body">• Glabella: ♂ prominent · ♀ less</text><text x="90" y="350" class="t-body">• Supra-orbital ridge: ♂ prominent · ♀ less</text><text x="90" y="375" class="t-body">• Supra-orbital margin: ♂ rounded · ♀ <strong>SHARP</strong></text><text x="90" y="400" class="t-body">• Orbit: ♂ rectangular, lower · ♀ rounded, higher</text><text x="90" y="425" class="t-body">• Fronto-nasal angle: ♂ distinct · ♀ smoothly curved</text><text x="90" y="450" class="t-body">• Nasal aperture: ♂ higher + narrower + sharp margins · ♀ lower + broader + rounded</text><text x="90" y="485" class="t-body" font-weight="700">SUPERIOR / INFERIOR</text><text x="90" y="510" class="t-body">• Frontal + parietal eminence: ♂ less · ♀ <strong>more prominent</strong></text><text x="90" y="535" class="t-body">• ★ <strong>Palate: ♂ U-shaped · ♀ PARABOLA</strong></text><text x="90" y="560" class="t-body">• Foramen magnum: ♂ large + longer (&gt; 963 mm²) · ♀ small + rounded (&lt; 805 mm²)</text><text x="90" y="595" class="t-body" font-weight="700">LATERAL</text><text x="90" y="620" class="t-body">• Mastoid: ♂ <strong>prominent, large, round, blunt</strong> · ♀ less pointed, smooth</text><text x="90" y="645" class="t-body">• External auditory meatus suprameatal crest: ♂ prominent · ♀ often absent</text><text x="90" y="670" class="t-body">• Digastric groove: ♂ deeper · ♀ shallow</text><text x="90" y="705" class="t-body" font-weight="700">POSTERIOR</text><text x="90" y="730" class="t-body">• External occipital protuberance: ♂ prominent · ♀ smooth</text><text x="90" y="755" class="t-body">• Nuchal lines: ♂ prominent · ♀ not prominent</text><text x="90" y="790" class="t-body" font-weight="700">VOLUMETRIC</text><text x="90" y="815" class="t-body">• ★ <strong>Cranial capacity:</strong> ♂ 1500–1550 cc · ♀ 1350–1400 cc</text><text x="90" y="840" class="t-body">• Mid-sagittal arc: ♂ shorter (less arched) · ♀ highly arched</text><text x="90" y="875" class="t-body" font-weight="700">SKULL : SKELETON WEIGHT</text><text x="90" y="900" class="t-body">• ★ ♂ skull : skeleton = <strong>1 : 8</strong> (smaller)</text><text x="90" y="925" class="t-body">• ★ ♀ skull : skeleton = <strong>1 : 6</strong> (larger relative)</text><text x="90" y="965" class="t-body" font-style="italic">★ Memory: female skull is more "infantile" — rounded forehead, sharp orbital margin, smooth surface, parabolic palate</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-mandible-sex"><rect x="810" y="110" width="730" height="950" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="1175" y="150" class="t-nlg" text-anchor="middle">😬 MANDIBLE Sex Differences</text><text x="830" y="195" class="t-body" font-weight="700">GENERAL</text><text x="830" y="220" class="t-body">• Size: ♂ large · ♀ small</text><text x="830" y="245" class="t-body">• Architecture: ♂ ragged · ♀ smooth</text><text x="830" y="270" class="t-body">• Muscular impressions: ♂ prominent · ♀ not prominent</text><text x="830" y="310" class="t-body" font-weight="700">★ MANDIBULAR ANGLE</text><text x="830" y="335" class="t-body">• ♂ <strong>EVERTED</strong> (turned outward)</text><text x="830" y="360" class="t-body">• ♀ <strong>INVERTED</strong> (turned inward)</text><text x="830" y="395" class="t-body" font-weight="700">★ CHIN</text><text x="830" y="420" class="t-body">• ♂ <strong>SQUARE-shaped</strong></text><text x="830" y="445" class="t-body">• ♀ <strong>ROUND</strong></text><text x="830" y="480" class="t-body" font-weight="700">★ SHAPE OF BONE</text><text x="830" y="505" class="t-body">• ♂ <strong>"V"-shaped</strong></text><text x="830" y="530" class="t-body">• ♀ <strong>"U"-shaped</strong></text><text x="830" y="565" class="t-body" font-weight="700">MENTAL TUBERCLE</text><text x="830" y="590" class="t-body">• ♂ large + prominent · ♀ insignificant</text><text x="830" y="625" class="t-body" font-weight="700">MYLOHYOID LINE</text><text x="830" y="650" class="t-body">• ♂ prominent + deep · ♀ shallow</text><text x="830" y="680" class="t-body" font-weight="700">SYMPHYSIS</text><text x="830" y="705" class="t-body">• Height at symphysis menti: ♂ more · ♀ less</text><text x="830" y="740" class="t-body" font-weight="700">ASCENDING RAMUS + CONDYLE</text><text x="830" y="765" class="t-body">• Ramus: ♂ broad · ♀ narrow</text><text x="830" y="790" class="t-body">• Condylar process: ♂ larger · ♀ smaller</text><text x="830" y="830" class="t-body" font-weight="700">★ STATURE FROM MANDIBLE</text><text x="830" y="855" class="t-body">• Stature = (symphysis menti to angle of mandible) × <strong>16</strong></text><text x="830" y="895" class="t-body" font-weight="700">AGE — old age changes:</text><text x="830" y="920" class="t-body">• Alveolar absorption · mental foramen near upper border</text><text x="830" y="945" class="t-body">• Mandibular canal near superior border</text><text x="830" y="970" class="t-body">• Ramus oblique · angle ~140°</text><text x="830" y="995" class="t-body">• Coronoid process higher than condyloid</text><text x="830" y="1030" class="t-body" font-style="italic">★ Memory: male "V chin, everted, square" · female "U chin, inverted, round"</text><circle class="ic" cx="1520" cy="128" r="14"/><text class="t-info" x="1520" y="134" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_FO05 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ Sex from PELVIS — Best Single Bone (95%)</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Sub-pubic angle · Sciatic notch · Ventral arc · Phenice criteria</text>

<g data-node-id="fo-pelvis-overview"><rect class="nbcr" x="60" y="110" width="1480" height="90" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚥ PELVIS — Most Sexually Dimorphic Bone (95% accuracy)</text><text x="90" y="178" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Female pelvis is anatomically modified for <strong>CHILDBIRTH</strong> → wider, shallower, broader subpubic angle. These features are detectable even on isolated hip bone or articulated pelvis.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-pelvis-articulated"><rect x="60" y="230" width="730" height="400" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="425" y="270" class="t-nlg" text-anchor="middle">⚖️ ARTICULATED PELVIS — Male vs Female</text><text x="90" y="310" class="t-body" font-weight="700">PELVIC INLET (brim)</text><text x="90" y="335" class="t-body">• ♂ <strong>HEART-shaped</strong></text><text x="90" y="360" class="t-body">• ♀ <strong>CIRCULAR / OVAL-shaped</strong></text><text x="90" y="395" class="t-body" font-weight="700">PELVIC CAVITY</text><text x="90" y="420" class="t-body">• ♂ <strong>Conical, FUNNEL-shaped</strong></text><text x="90" y="445" class="t-body">• ♀ <strong>BROAD + ROUND</strong></text><text x="90" y="480" class="t-body" font-weight="700">★ SUB-PUBIC ANGLE (most distinctive)</text><text x="90" y="505" class="t-body">• ♂ <strong>NARROW ("V"-shaped) — 70°–75°</strong></text><text x="90" y="530" class="t-body">• ♀ <strong>WIDE ("U"-shaped) — 90°–100°</strong></text><text x="90" y="565" class="t-body" font-weight="700">PELVIC OUTLET</text><text x="90" y="590" class="t-body">• ♂ smaller · ♀ larger</text><text x="90" y="615" class="t-body" font-style="italic">★ Memory: female "round, broad, wide U" — adapted for parturition</text><circle class="ic" cx="770" cy="248" r="14"/><text class="t-info" x="770" y="254" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-hipbone"><rect x="810" y="230" width="730" height="400" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="1175" y="270" class="t-nlg" text-anchor="middle">🦴 HIP BONE Sex Differences</text><text x="830" y="310" class="t-body" font-weight="700">OBTURATOR FORAMEN</text><text x="830" y="335" class="t-body">• ♂ <strong>Large, OVAL</strong> · ♀ <strong>Small, TRIANGULAR</strong></text><text x="830" y="370" class="t-body" font-weight="700">ACETABULUM</text><text x="830" y="395" class="t-body">• ♂ large, directed laterally</text><text x="830" y="420" class="t-body">• ♀ small, directed antero-laterally</text><text x="830" y="455" class="t-body" font-weight="700">★ GREATER SCIATIC NOTCH</text><text x="830" y="480" class="t-body">• ♂ <strong>SMALLER, NARROWER, DEEPER</strong></text><text x="830" y="505" class="t-body">• ♀ <strong>LARGER, WIDER, SHALLOWER</strong></text><text x="830" y="540" class="t-body" font-weight="700">PRE-AURICULAR SULCUS</text><text x="830" y="565" class="t-body">• ♂ not frequent · ♀ <strong>frequent, well-developed</strong></text><text x="830" y="600" class="t-body" font-weight="700">ISCHIAL TUBEROSITY</text><text x="830" y="625" class="t-body">• ♂ inverted · ♀ <strong>everted</strong></text><circle class="ic" cx="1520" cy="248" r="14"/><text class="t-info" x="1520" y="254" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-phenice"><rect x="60" y="650" width="900" height="280" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="510" y="690" class="t-nlg" text-anchor="middle">★ PHENICE CRITERIA — 3 Female-Specific Pubic Features</text><text x="90" y="725" class="t-body">3 features of the ventral aspect of pubic bone — PRESENT in females, ABSENT in males:</text><text x="90" y="765" class="t-body">1️⃣ <strong>VENTRAL ARC</strong> — slightly elevated bony ridge on ventral surface of pubis</text><text x="90" y="790" class="t-body">      extending from pubic crest down to pubic ramus</text><text x="90" y="820" class="t-body">2️⃣ <strong>SUB-PUBIC CONCAVITY</strong> — deep concave structure located immediately</text><text x="90" y="845" class="t-body">      below the symphysis on the ramus</text><text x="90" y="875" class="t-body">3️⃣ <strong>MEDIAL ASPECT of ISCHIOPUBIC RAMUS</strong> — ♀ narrow + crest-like · ♂ broad + flat</text><text x="90" y="910" class="t-body" font-style="italic">★ Phenice (1969) — high accuracy ~95% for pubic-region sexing</text><circle class="ic" cx="940" cy="668" r="14"/><text class="t-info" x="940" y="674" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-indices"><rect x="980" y="650" width="560" height="280" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1260" y="690" class="t-nlg" text-anchor="middle">📏 Pelvic Sex Indices</text><text x="1000" y="725" class="t-body" font-weight="700">★ Ischio-pubic index</text><text x="1000" y="750" class="t-body">= length pubis × 100 ÷ length ischium</text><text x="1000" y="775" class="t-body">♂ 73–94 · ♀ <strong>91–115</strong></text><text x="1000" y="805" class="t-body" font-weight="700">★ Sciatic notch index</text><text x="1000" y="830" class="t-body">= width × 100 ÷ depth</text><text x="1000" y="855" class="t-body">♂ 4–5 · ♀ 5–6</text><text x="1000" y="885" class="t-body" font-weight="700">Coxal index = iliac × 100 ÷ innominate</text><text x="1000" y="910" class="t-body">♂ 72.6 · ♀ <strong>75.8</strong></text><circle class="ic" cx="1520" cy="668" r="14"/><text class="t-info" x="1520" y="674" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="950" width="1480" height="110" rx="10" fill="url(#gOrange)"/><text x="800" y="985" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 ★ Sub-pubic angle: ♂ 70-75° "V" (narrow) · ♀ 90-100° "U" (wide)</text><text x="800" y="1015" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="white" text-anchor="middle">★ Sciatic notch: ♂ narrow/deep · ♀ wide/shallow · ★ Phenice (1969): ventral arc + sub-pubic concavity + medial ischiopubic ramus = FEMALE</text><text x="800" y="1045" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="white" text-anchor="middle">★ Pelvic inlet: ♂ heart · ♀ circular · ★ Obturator foramen: ♂ oval · ♀ triangular</text>
</svg>`;

const SVG_FO06 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Age from Bones — Ossification &amp; Epiphyseal Fusion</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Galstaun&apos;s Indian data · Appearance + Fusion of major long-bone centers</text>

<g data-node-id="fo-age-methods"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">📅 AGE ESTIMATION — 5 Methods</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">1. <strong>Dental status</strong> (Ch 3). 2. <strong>Ossification data</strong> — appearance + fusion of ossification centers. 3. <strong>Age-related changes</strong> in individual bones (mandible, pubic symphysis). 4. <strong>Radiographic</strong> method. 5. <strong>Histological</strong> (Rai equation: age = osteons + 8.3).</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-femur-age"><rect x="60" y="240" width="730" height="280" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="425" y="280" class="t-nlg" text-anchor="middle">🦴 FEMUR — Ossification (Galstaun)</text><text x="90" y="320" class="t-body" font-weight="700">HEAD:</text><text x="90" y="345" class="t-body">• Appearance: 1 yr (♂ + ♀)</text><text x="90" y="370" class="t-body">• Fusion: ♀ 14-15 yr · ♂ 16-19 yr</text><text x="90" y="405" class="t-body" font-weight="700">GREATER TROCHANTER:</text><text x="90" y="430" class="t-body">• Appearance: 5 yr · Fusion: ♀ 14 yr · ♂ 17 yr</text><text x="90" y="465" class="t-body" font-weight="700">★ LOWER END OF FEMUR (medicolegal):</text><text x="90" y="490" class="t-body">• Appearance: <strong>36 weeks intrauterine</strong> (medicolegal — live birth)</text><text x="90" y="510" class="t-body">• Fusion: 14-17 yr</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-humerus-age"><rect x="810" y="240" width="730" height="280" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="1175" y="280" class="t-nlg" text-anchor="middle">🦴 HUMERUS — Ossification</text><text x="830" y="320" class="t-body" font-weight="700">HEAD:</text><text x="830" y="345" class="t-body">• Appearance: 1 yr · Fusion: ♂ 14-18 · ♀ 14-16</text><text x="830" y="380" class="t-body" font-weight="700">CAPITULUM:</text><text x="830" y="405" class="t-body">• Appearance: ♂ 5 mo · ♀ 7-10 mo</text><text x="830" y="440" class="t-body" font-weight="700">MEDIAL EPICONDYLE:</text><text x="830" y="465" class="t-body">• Appearance: ♂ 7 yr · ♀ 5 yr · Fusion: ♂ 16 · ♀ 14</text><text x="830" y="500" class="t-body" font-style="italic">★ Lateral epicondyle + capitulum + trochlea fuse together → larger lower epiphysis</text><circle class="ic" cx="1520" cy="258" r="14"/><text class="t-info" x="1520" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-tibia-fibula"><rect x="60" y="540" width="730" height="240" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="425" y="580" class="t-nlg" text-anchor="middle">🦴 TIBIA + FIBULA Ages</text><text x="90" y="620" class="t-body" font-weight="700">TIBIA Upper end:</text><text x="90" y="645" class="t-body">• Appearance: before birth · Fusion ♀ 14-15 · ♂ 15-17</text><text x="90" y="680" class="t-body" font-weight="700">TIBIA Lower end:</text><text x="90" y="705" class="t-body">• Appearance: 1 yr · Fusion ♀ 14.1-14.4 · ♂ 16</text><text x="90" y="740" class="t-body" font-weight="700">FIBULA: Upper ♀ 3 yr / ♂ 5 yr · Lower 1-2 yr</text><circle class="ic" cx="770" cy="558" r="14"/><text class="t-info" x="770" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-rad-ulna"><rect x="810" y="540" width="730" height="240" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1175" y="580" class="t-nlg" text-anchor="middle">🦴 RADIUS + ULNA Ages</text><text x="830" y="620" class="t-body" font-weight="700">RADIUS Upper end:</text><text x="830" y="645" class="t-body">• Appearance: ♀ 6 yr · ♂ 8 yr · Fusion ♀ 14 · ♂ 16</text><text x="830" y="680" class="t-body" font-weight="700">RADIUS Lower end:</text><text x="830" y="705" class="t-body">• Appearance: 1 yr · Fusion ♀ 16.5 · ♂ 16-17</text><text x="830" y="745" class="t-body" font-weight="700">ULNA Olecranon: 9-13 yr → fuses ♀ 15 · ♂ 17</text><circle class="ic" cx="1520" cy="558" r="14"/><text class="t-info" x="1520" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-sternum-age"><rect x="60" y="800" width="730" height="260" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="425" y="840" class="t-nlg" text-anchor="middle">🦴 STERNUM — Age Markers</text><text x="90" y="880" class="t-body" font-weight="700">Ossifies from 6 centers (5 primary + 1 secondary):</text><text x="90" y="905" class="t-body">• Manubrium center: 5 mo intrauterine</text><text x="90" y="925" class="t-body">• Segments 1-3: 5 mo IU · Segment 4: 6 mo IU</text><text x="90" y="945" class="t-body">• Secondary center for xiphoid: 3rd year of life</text><text x="90" y="980" class="t-body" font-weight="700">★ KEY FUSION AGES:</text><text x="90" y="1005" class="t-body">• Sternal segments unite (puberty → 25 yr)</text><text x="90" y="1030" class="t-body">• ★ <strong>Xiphoid + body: 40 yr</strong> · ★ <strong>Manubrium + body: 60 yr</strong></text><circle class="ic" cx="770" cy="818" r="14"/><text class="t-info" x="770" y="824" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-hipbone-age"><rect x="810" y="800" width="730" height="260" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1175" y="840" class="t-nlg" text-anchor="middle">🦴 HIPBONE + SCAPULA + CLAVICLE</text><text x="830" y="880" class="t-body" font-weight="700">HIPBONE — secondary centers (Galstaun):</text><text x="830" y="905" class="t-body">• ★ <strong>Triradiate cartilage</strong> fuses: ♀ 13-14 · ♂ 15-16</text><text x="830" y="930" class="t-body">• Iliac crest: appearance 14-17 · fusion 17-20</text><text x="830" y="955" class="t-body">• Ischio-pubic rami fuse: 8½ yr</text><text x="830" y="985" class="t-body" font-weight="700">SCAPULA — full union by 20 yr</text><text x="830" y="1010" class="t-body" font-weight="700">CLAVICLE: Sternal end appearance 14-19 · fusion 20-22</text><text x="830" y="1035" class="t-body" font-style="italic">★ Clavicle = first to ossify (5th wk IU), last to fuse (~25 yr)</text><circle class="ic" cx="1520" cy="818" r="14"/><text class="t-info" x="1520" y="824" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_FO07 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ Age from Skull Sutures &amp; Pubic Symphysis</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">McKern-Stewart sutures · Todd 10 phases · Pubic symphysis component analysis</text>

<g data-node-id="fo-fontanelle"><rect class="body-white" x="60" y="110" width="730" height="240" rx="14"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 165 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gBlue)"/><text x="80" y="150" class="t-nlg">👶 FONTANELLES — Closure Ages</text><text x="80" y="195" class="t-keyval">• <strong>Lateral + occipital fontanelle</strong>: close within <strong>2 months</strong></text><text x="80" y="230" class="t-keyval">• <strong>Posterior fontanelle</strong>: closes at <strong>6-8 months</strong></text><text x="80" y="265" class="t-keyval">• ★ <strong>ANTERIOR fontanelle</strong>: closes at <strong>1.5-2 YEARS</strong></text><text x="80" y="305" class="t-keylbl">Fusion of occipital bone parts:</text><text x="80" y="325" class="t-keyval">• Squamous + condylar parts: end of 2nd year</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-sutures"><rect class="body-white" x="810" y="110" width="730" height="240" rx="14"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 165 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gOrange)"/><text x="830" y="150" class="t-nlg">⚖️ ★ SKULL SUTURES — McKern-Stewart</text><text x="830" y="190" class="t-keylbl">Order of closure (endocranial first, then ectocranial):</text><text x="830" y="215" class="t-keyval">• Metopic: <strong>2-4 yr</strong></text><text x="830" y="240" class="t-keyval">• ★ <strong>Basal (spheno-occipital): 18-20 yr</strong></text><text x="830" y="265" class="t-keyval">• Sagittal: 30-40 yr</text><text x="830" y="290" class="t-keyval">• Coronal + Lambdoid: 40-50 yr</text><text x="830" y="315" class="t-keyval">• Sphenotemporal: 50-60 yr · Parietomastoid + Masto-occipital: 80-90</text><text x="830" y="340" class="t-keyval" font-style="italic">★ Vault sutures: 17-50 yr · Circummeatal: above 50 yr</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-suture-terms"><rect x="60" y="370" width="730" height="240" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="425" y="410" class="t-nlg" text-anchor="middle">📖 Terminology — Suture Closure</text><text x="90" y="445" class="t-body">• <strong>Lapsed union</strong> — fusion has begun but not completed</text><text x="90" y="475" class="t-body">• <strong>Precocious closure</strong> — closure BEFORE age 7 yr (cranial growth ~95% complete)</text><text x="90" y="505" class="t-body">• <strong>Premature closure</strong> — after age 7 yr but considerably before normal age</text><text x="90" y="535" class="t-body" font-weight="700">Pattern of closure (closes from inside out):</text><text x="90" y="560" class="t-body">• Sagittal — front to back · Coronal + Lambdoid — medial to lateral</text><text x="90" y="585" class="t-body">• No L/R difference · No sex difference</text><circle class="ic" cx="770" cy="388" r="14"/><text class="t-info" x="770" y="394" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-todd-phases"><rect x="810" y="370" width="730" height="240" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1175" y="410" class="t-nlg" text-anchor="middle">⚖️ TODD&apos;S 10 Phases — Pubic Symphysis</text><text x="830" y="445" class="t-body">Todd 1920 — examined 5 features of pubic symphysis:</text><text x="830" y="470" class="t-body">1. Surface · 2. Ventral rampart · 3. Dorsal border</text><text x="830" y="495" class="t-body">4. Superior + 5. Inferior extremities</text><text x="830" y="525" class="t-body" font-weight="700">10 phases spanning 18 → 50+ years:</text><text x="830" y="550" class="t-body">• Phase 1: 18-19 yr (rugged, horizontal grooves)</text><text x="830" y="575" class="t-body">• Phase 5: 27-30 yr · Phase 8: 40-44 yr (smooth, no rim)</text><text x="830" y="600" class="t-body">• Phase 10: 50+ yr (erosion, breakdown, erratic ossification)</text><circle class="ic" cx="1520" cy="388" r="14"/><text class="t-info" x="1520" y="394" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-mckern-stewart"><rect x="60" y="630" width="900" height="280" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="510" y="670" class="t-nlg" text-anchor="middle">⚖️ McKERN-STEWART COMPONENT Analysis (1957)</text><text x="90" y="705" class="t-body">Revision of Todd&apos;s method — divides pubic symphysis into 3 components:</text><text x="90" y="740" class="t-body">1️⃣ <strong>Component I — DORSAL DEMI-FACE</strong> (dorsal plateau)</text><text x="90" y="770" class="t-body">2️⃣ <strong>Component II — VENTRAL DEMI-FACE</strong> (ventral rampart)</text><text x="90" y="800" class="t-body">3️⃣ <strong>Component III — SYMPHYSEAL RIM</strong> (whole surface)</text><text x="90" y="835" class="t-body">Each component scored 0-5 → total used to estimate age</text><text x="90" y="865" class="t-body">★ Developmental sequence: I → II → III</text><text x="90" y="895" class="t-body" font-style="italic">★ Total scores ♂: 17.3 yr (0) → 41 yr (15) · ♀: 16 yr (0) → 55.7 yr (14-15)</text><circle class="ic" cx="940" cy="648" r="14"/><text class="t-info" x="940" y="654" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-mandible-age"><rect x="980" y="630" width="560" height="280" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="670" class="t-nlg" text-anchor="middle">🦷 MANDIBLE — Age Markers</text><text x="1000" y="705" class="t-body" font-weight="700">At birth:</text><text x="1000" y="730" class="t-body">• Halves united by fibrous symphysis menti</text><text x="1000" y="755" class="t-body">• Mental foramen near LOWER border</text><text x="1000" y="785" class="t-body" font-weight="700">Year 1-2: halves fuse at symphysis</text><text x="1000" y="815" class="t-body" font-weight="700">Adult: foramen midway</text><text x="1000" y="845" class="t-body" font-weight="700">★ OLD AGE:</text><text x="1000" y="870" class="t-body">• Alveolar region absorbed</text><text x="1000" y="895" class="t-body">• Mental foramen near UPPER border · angle ~140°</text><circle class="ic" cx="1520" cy="648" r="14"/><text class="t-info" x="1520" y="654" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="930" width="1480" height="60" rx="10" fill="url(#gRed)"/><text x="800" y="968" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">🎯 Anterior fontanelle 1.5-2 yr · Basal suture 18-20 yr · Pubic symphysis (Todd 10 phases, McKern-Stewart 3 components I→II→III)</text>

<rect x="60" y="1000" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="1038" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⭐ Skull sutures: METOPIC 2-4 · BASAL 18-20 · SAGITTAL 30-40 · CORONAL 40-50 · LAMBDOID 40-50 yr (McKern-Stewart)</text>
</svg>`;

const SVG_FO08 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ Stature from Long Bones — Multiplication Factors</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Karl Pearson · Trotter &amp; Gleser · Pan · Nat · Shah &amp; Siddiqui · Hepburn board</text>

<g data-node-id="fo-stature-intro"><rect class="nbcr" x="60" y="110" width="1480" height="110" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">📏 STATURE — Principle</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Estimating body height from a long bone uses <strong>multiplication factor</strong> regression: <strong>stature = bone length × multiplication factor</strong>. Length measured on <strong>★ Hepburn osteometric board</strong>. After calculation, ADD <strong>2.5–4 cm</strong> to compensate for soft-tissue thickness at joints (heel to vertex).</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-formulae"><rect x="60" y="250" width="730" height="380" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="425" y="290" class="t-nlg" text-anchor="middle">📐 5 Stature Formulae by Author</text><text x="90" y="330" class="t-body" font-weight="700">★ Karl Pearson</text><text x="90" y="355" class="t-body">• For <strong>EUROPEANS</strong> (Caucasians)</text><text x="90" y="390" class="t-body" font-weight="700">★ Trotter &amp; Gleser</text><text x="90" y="415" class="t-body">• For <strong>AMERICANS</strong> (Black + White separate formulae)</text><text x="90" y="450" class="t-body" font-weight="700">★ INDIAN Multiplication Factors:</text><text x="90" y="475" class="t-body">• <strong>Pan</strong> — Bengal, Bihar, Orissa</text><text x="90" y="500" class="t-body">• <strong>Nat</strong> — Uttar Pradesh</text><text x="90" y="525" class="t-body">• <strong>Shah &amp; Siddiqui</strong> — Punjab</text><text x="90" y="550" class="t-body">• <strong>Singh &amp; Shoha</strong> — East Punjab</text><text x="90" y="575" class="t-body">• <strong>Mehta &amp; Thomas</strong> — Mysore</text><text x="90" y="610" class="t-body">• Dupertuis &amp; Haden — alternative regression</text><circle class="ic" cx="770" cy="268" r="14"/><text class="t-info" x="770" y="274" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-mf-table"><rect x="810" y="250" width="730" height="380" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="1175" y="290" class="t-nlg" text-anchor="middle">📊 ★ Indian Multiplication Factors (♂)</text><text x="830" y="325" class="t-body" font-weight="700">FEMUR:</text><text x="830" y="350" class="t-body">• Shah &amp; Siddiqui 3.6 · Pan 3.82 · Nat 3.7</text><text x="830" y="375" class="t-body">• Singh-Shoha 3.57 · Mehta-Thomas 3.6</text><text x="830" y="410" class="t-body" font-weight="700">TIBIA:</text><text x="830" y="435" class="t-body">• Shah-Siddiqui 4.2 · Pan 4.49 · Nat 4.48 · Singh-Shoha 4.18</text><text x="830" y="470" class="t-body" font-weight="700">HUMERUS:</text><text x="830" y="495" class="t-body">• Shah-Siddiqui 5.0 · Pan 5.31 · Nat 5.3 · Singh-Shoha 4.97</text><text x="830" y="530" class="t-body" font-weight="700">RADIUS:</text><text x="830" y="555" class="t-body">• Shah-Siddiqui 6.3 · Pan 6.78 · Nat 6.9 · Singh-Shoha 6.63</text><text x="830" y="590" class="t-body" font-weight="700">FIBULA: Shah 4.4 · Pan 4.46 · Nat 4.48</text><circle class="ic" cx="1520" cy="268" r="14"/><text class="t-info" x="1520" y="274" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-stature-skull"><rect x="60" y="650" width="730" height="240" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="425" y="690" class="t-nlg" text-anchor="middle">📏 Stature — Other Bones</text><text x="90" y="725" class="t-body"><strong>★ From SKULL:</strong> Stature = height of skull × <strong>8</strong></text><text x="90" y="750" class="t-body">(basion to bregma)</text><text x="90" y="785" class="t-body"><strong>★ From MANDIBLE:</strong> Stature = (symphysis menti to angle) × <strong>16</strong></text><text x="90" y="820" class="t-body"><strong>★ From CLAVICLE (Singh-Sohel 1954):</strong> Stature = length × <strong>11.1</strong></text><text x="90" y="855" class="t-body" font-style="italic">★ Long bones (esp. femur + tibia) are MORE RELIABLE than skull / clavicle</text><circle class="ic" cx="770" cy="668" r="14"/><text class="t-info" x="770" y="674" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-fragmented"><rect x="810" y="650" width="730" height="240" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1175" y="690" class="t-nlg" text-anchor="middle">🧩 FRAGMENTED Long Bones</text><text x="830" y="725" class="t-body">If only fragments are available, use:</text><text x="830" y="755" class="t-body">• <strong>Muller</strong> formula</text><text x="830" y="780" class="t-body">• <strong>Steele</strong> formula</text><text x="830" y="805" class="t-body">• <strong>Steele &amp; McKern</strong> formula</text><text x="830" y="840" class="t-body" font-style="italic">★ Principle: estimate full bone length from segment + apply standard MF</text><circle class="ic" cx="1520" cy="668" r="14"/><text class="t-info" x="1520" y="674" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-osteometric"><rect x="60" y="910" width="1480" height="150" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="950" class="t-nlg" text-anchor="middle">🛠️ ★ HEPBURN OSTEOMETRIC BOARD</text><text x="90" y="985" class="t-body">★ Standard tool for measuring long-bone length — fixed end at bone&apos;s proximal extremity; sliding caliper at distal end.</text><text x="90" y="1010" class="t-body">• Length read from millimetre scale on board · always reading is from MAXIMUM length (most reliable measurement)</text><text x="90" y="1035" class="t-body">• Femur measured supine on board (lower end at fixed wall) · result entered into multiplication-factor formula</text><circle class="ic" cx="1510" cy="928" r="14"/><text class="t-info" x="1510" y="934" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_FO09 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ Race from Bones — Cephalic Index &amp; Skull Morphology</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Dolicho · Mesati · Brachycephalic · Caucasoid vs Negroid vs Mongoloid</text>

<g data-node-id="fo-race-intro"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🌍 RACE — Best from Skull (Krogman 90-95%)</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">★ Race determination is HARDER than sex/age — racial traits less marked, ethnic mixing common. SKULL is the best (★ 90-95% per Krogman-Iscan); femur is best long bone. DNA / genetic identification will replace this in future.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-cephalic"><rect x="60" y="240" width="730" height="280" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="425" y="280" class="t-nlg" text-anchor="middle">📐 ★ CEPHALIC INDEX (C.I.)</text><text x="90" y="320" class="t-body" font-weight="700">Formula:</text><text x="90" y="345" class="t-body">C.I. = (Max breadth × 100) ÷ (Max length of skull)</text><text x="90" y="380" class="t-body" font-weight="700">★ 3 Categories by C.I.:</text><text x="90" y="410" class="t-body">• ★ <strong>DOLICHOCEPHALIC</strong> (long-headed) <strong>70-75</strong></text><text x="90" y="430" class="t-body">  → ★ Pure Aryans · Aborigines · NEGROES</text><text x="90" y="460" class="t-body">• ★ <strong>MESATICEPHALIC</strong> (medium-headed) <strong>75-80</strong></text><text x="90" y="480" class="t-body">  → ★ EUROPEANS · CHINESE</text><text x="90" y="510" class="t-body">• ★ <strong>BRACHYCEPHALIC</strong> (short-headed) <strong>80-85</strong></text><text x="90" y="530" class="t-body">  → ★ MONGOLIANS</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-race-skull"><rect x="810" y="240" width="730" height="280" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="1175" y="280" class="t-nlg" text-anchor="middle">🧠 ★ Skull Morphology by Race</text><text x="830" y="320" class="t-body" font-weight="700">★ CAUCASOID:</text><text x="830" y="345" class="t-body">• Skull rounded · narrow nasal opening · sharp lower nasal margin · narrow palate</text><text x="830" y="380" class="t-body" font-weight="700">★ NEGROID:</text><text x="830" y="405" class="t-body">• Narrow + elongated · FLAT sagittal contour · WIDE nasal opening</text><text x="830" y="430" class="t-body">• Lower nasal margin "guttered" · WIDE palate · LOW face height · downward nasal slant</text><text x="830" y="465" class="t-body" font-weight="700">★ MONGOLOID:</text><text x="830" y="490" class="t-body">• SQUARE skull · ARCHED sagittal · ROUNDED orbital opening</text><text x="830" y="515" class="t-body">• VERY WIDE face · narrow nasal opening · medium palate</text><circle class="ic" cx="1520" cy="258" r="14"/><text class="t-info" x="1520" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-race-pelvis"><rect x="60" y="540" width="730" height="220" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="425" y="580" class="t-nlg" text-anchor="middle">🦴 Race from PELVIS</text><text x="90" y="615" class="t-body">Less reliable; needs specialised measurements (Todd &amp; Lindala 1928).</text><text x="90" y="645" class="t-body" font-weight="700">In WHITE people:</text><text x="90" y="670" class="t-body">• Ilium FLARES outward + upward · pelvis BROADER · symphysis placed LOW</text><text x="90" y="700" class="t-body" font-weight="700">In BLACK people:</text><text x="90" y="725" class="t-body">• Ilium more VERTICAL · pelvis NOT broader · symphysis placed HIGH</text><circle class="ic" cx="770" cy="558" r="14"/><text class="t-info" x="770" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-race-femur"><rect x="810" y="540" width="730" height="220" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1175" y="580" class="t-nlg" text-anchor="middle">🦴 Race from FEMUR (Stewart 1962)</text><text x="830" y="615" class="t-body">★ Anterior curvature of femur shaft:</text><text x="830" y="640" class="t-body">• ★ <strong>BLACK</strong> people: femur <strong>STRAIGHTER</strong> (less curved)</text><text x="830" y="665" class="t-body">• ★ <strong>WHITE</strong> people: femur <strong>BOWED FORWARD</strong></text><text x="830" y="695" class="t-body">• <strong>AMERICAN INDIANS</strong>: greatest anterior curvature</text><text x="830" y="730" class="t-body" font-style="italic">★ Best long bone for race (vs all others)</text><circle class="ic" cx="1520" cy="558" r="14"/><text class="t-info" x="1520" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-race-indices"><rect x="60" y="780" width="900" height="280" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="510" y="820" class="t-nlg" text-anchor="middle">📐 RACE Indices — Crural · Intermembral · Humero-femoral</text><text x="90" y="855" class="t-body" font-weight="700">★ CRURAL INDEX</text><text x="90" y="880" class="t-body">= length tibia × 100 ÷ length femur</text><text x="90" y="905" class="t-body">→ Indian 86.49 · European 89.3 · Black 86.2</text><text x="90" y="935" class="t-body" font-weight="700">★ INTERMEMBRAL INDEX</text><text x="90" y="960" class="t-body">= (humerus + radius) × 100 ÷ (femur + tibia)</text><text x="90" y="985" class="t-body">→ Indian 67.27 · European 70.4 · Black 70.3</text><text x="90" y="1015" class="t-body" font-weight="700">★ HUMERO-FEMORAL INDEX</text><text x="90" y="1040" class="t-body">= humerus × 100 ÷ femur · → Indian 71.11 · European 69 · Black 72.4</text><circle class="ic" cx="940" cy="798" r="14"/><text class="t-info" x="940" y="804" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-race-other"><rect x="980" y="780" width="560" height="280" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="820" class="t-nlg" text-anchor="middle">📊 Additional Race Clues</text><text x="1000" y="855" class="t-body" font-weight="700">★ Sacrum (Kimura 1982):</text><text x="1000" y="880" class="t-body">Base-wing index = width wing × 100 ÷ width base</text><text x="1000" y="905" class="t-body">• Japanese · White · Black profiles differ</text><text x="1000" y="940" class="t-body" font-weight="700">Mandible (Schultz 1933):</text><text x="1000" y="965" class="t-body">• White: larger breadth, higher ramus, protrusive chin</text><text x="1000" y="990" class="t-body">• Black: lower wider ramus, "U" dental arch, less prominent chin</text><text x="1000" y="1020" class="t-body" font-style="italic">★ Teeth + hair add evidence</text><circle class="ic" cx="1520" cy="798" r="14"/><text class="t-info" x="1520" y="804" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_FO10 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Time Since Death from Bones · Cause of Death · Manner of Separation</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">UV fluorescence · Nitrogen content · Benzidine · Amino acids · 5 fracture healing stages</text>

<g data-node-id="fo-tsd-gross"><rect class="body-white" x="60" y="110" width="730" height="280" rx="14"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 165 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gBlue)"/><text x="80" y="150" class="t-nlg">👁️ GROSS Examination — TSD</text><text x="80" y="195" class="t-keylbl">Recent bones (&lt; 3 yr):</text><text x="80" y="220" class="t-keyval">• Soft tissue attached (ligaments, tendons near joints)</text><text x="80" y="245" class="t-keyval">• Periosteum + cartilage visible · putrid smell</text><text x="80" y="270" class="t-keyval">• Bones soft, moist, greasy to touch</text><text x="80" y="305" class="t-keylbl">Old bones:</text><text x="80" y="330" class="t-keyval">• Light (loss of organic matter + collagen)</text><text x="80" y="355" class="t-keyval">• "<strong>SANDWICH effect</strong>" on sawing — central hard ring + porous outer + inner layers</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-uv"><rect class="body-white" x="810" y="110" width="730" height="280" rx="14"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 165 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gPurple)"/><text x="830" y="150" class="t-nlg">🔦 ★ UV FLUORESCENCE Test</text><text x="830" y="195" class="t-keyval">Cut surface examined under <strong>UV light</strong>:</text><text x="830" y="225" class="t-keyval">• Recent bone — entire cut surface fluoresces SILVERY-BLUE</text><text x="830" y="255" class="t-keyval">• With age, outer rim + rim around marrow CEASE to fluoresce</text><text x="830" y="285" class="t-keyval">• Progressively deepens toward centre</text><text x="830" y="315" class="t-keyval">• Older bone: NO fluorescence anywhere</text><text x="830" y="355" class="t-keyval">★ <strong>Total time for complete loss of fluorescence: 100-150 yr</strong></text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-chemical"><rect x="60" y="410" width="900" height="280" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="510" y="450" class="t-nlg" text-anchor="middle">🧪 CHEMICAL / SEROLOGICAL — TSD Markers</text><text x="90" y="485" class="t-body"><strong>★ Benzidine / Kastle-Meyer test</strong> (blood detection): positive up to <strong>100 years</strong></text><text x="90" y="515" class="t-body"><strong>Precipitation / gel diffusion (Coombs reagent):</strong> positive <strong>5-10 years</strong></text><text x="90" y="550" class="t-body" font-weight="700">★ NITROGEN content (% by mass):</text><text x="90" y="575" class="t-body">• Fresh bone: <strong>4.5%</strong></text><text x="90" y="600" class="t-body">• ~ 4% → death interval <strong>up to 100 yr</strong></text><text x="90" y="625" class="t-body">• At ~ 350 yr → falls to <strong>≤ 2.5%</strong></text><text x="90" y="660" class="t-body" font-weight="700">★ Amino acids: fresh bone has 15 AAs (mostly collagen-derived)</text><text x="90" y="685" class="t-body">• <strong>Proline + hydroxyproline VANISH in ~50 years</strong></text><circle class="ic" cx="940" cy="428" r="14"/><text class="t-info" x="940" y="434" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-specific-gravity"><rect x="980" y="410" width="560" height="280" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="1260" y="450" class="t-nlg" text-anchor="middle">⚖️ Specific Gravity Test</text><text x="1000" y="485" class="t-body">★ Specific gravity of fresh bone = <strong>2.0</strong></text><text x="1000" y="515" class="t-body">As bones age:</text><text x="1000" y="545" class="t-body">• Become less dense · lose specific gravity</text><text x="1000" y="580" class="t-body" font-weight="700">★ Key thresholds:</text><text x="1000" y="605" class="t-body">• SG <strong>1.2 → FOSSIL</strong> bone</text><text x="1000" y="630" class="t-body">• SG <strong>1.7 → forensically significant</strong></text><text x="1000" y="650" class="t-body">  (distinguishes bone from fossil)</text><circle class="ic" cx="1520" cy="428" r="14"/><text class="t-info" x="1520" y="434" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-fracture-healing"><rect x="60" y="710" width="900" height="350" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="510" y="750" class="t-nlg" text-anchor="middle">🦴 ★ 5 STAGES of Fracture Healing (Cortical Bone)</text><text x="90" y="790" class="t-body" font-weight="700">1️⃣ HEMATOMA FORMATION (0-7 days)</text><text x="90" y="815" class="t-body">• Bleeding from torn vessels at fracture site · clot + fibrin meshwork</text><text x="90" y="840" class="t-body">• Osteocytes differentiate into daughter cells</text><text x="90" y="875" class="t-body" font-weight="700">2️⃣ GRANULATION TISSUE FORMATION (2-3 weeks)</text><text x="90" y="900" class="t-body">• Daughter cells form blood vessels, fibroblasts, osteoblasts</text><text x="90" y="930" class="t-body" font-weight="700">3️⃣ CALLUS FORMATION (3-12 weeks)</text><text x="90" y="955" class="t-body">• Osteoblasts lay intercellular matrix · calcium impregnation · woven bone</text><text x="90" y="975" class="t-body">★ First sign of union on X-ray — usually 3 weeks after fracture</text><text x="90" y="1005" class="t-body" font-weight="700">4️⃣ REMODELLING — woven bone → mature lamellar</text><text x="90" y="1035" class="t-body" font-weight="700">5️⃣ MODELLING — strengthening at periosteal + endosteal surfaces</text><circle class="ic" cx="940" cy="728" r="14"/><text class="t-info" x="940" y="734" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fo-cause-manner"><rect x="980" y="710" width="560" height="350" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="750" class="t-nlg" text-anchor="middle">⚖️ Cause of Death &amp; Manner of Separation</text><text x="1000" y="790" class="t-body" font-weight="700">★ Cause of Death from bone:</text><text x="1000" y="815" class="t-body">• Injury / fracture incompatible with life</text><text x="1000" y="840" class="t-body">• Foreign body — <strong>bullet, pellets, weapon piece</strong></text><text x="1000" y="865" class="t-body">• Chemical analysis for poison (As in bone)</text><text x="1000" y="890" class="t-body">• Radiology — malignancy, secondaries</text><text x="1000" y="925" class="t-body" font-weight="700">★ Manner of Separation:</text><text x="1000" y="950" class="t-body">• <strong>Natural:</strong> intact articular cartilage, no cut marks</text><text x="1000" y="975" class="t-body">• <strong>Cut</strong> — sharp weapon dismemberment</text><text x="1000" y="1000" class="t-body">• <strong>Bite</strong> — animal/insect post-disposal</text><text x="1000" y="1025" class="t-body">• Burnt — calcined / charred bones</text><circle class="ic" cx="1520" cy="728" r="14"/><text class="t-info" x="1520" y="734" text-anchor="middle">ⓘ</text></g>
</svg>`;

const NODES = {
  'fo-overview': { label: 'Forensic Osteology — Scope', info: '<p><strong>Forensic osteology</strong> = sub-specialty of forensic medicine dealing with examination of human skeleton. Required when whole, partial, or fragmented skeletal remains are submitted by legal authority.</p><p><strong>Twin goals:</strong></p><ol><li>Identify <strong>victim&apos;s characteristics</strong> (sex, age, stature, race, identity)</li><li>Determine <strong>cause + manner of death</strong> from skeleton</li></ol>', tags: ['Sub-specialty'] },
  'fo-10qs': { label: '10 Questions for Skeletal Remains', info: '<ol><li>Are they BONES? — gross + microscopy + serology</li><li>Are they HUMAN bones? — Haversian size + precipitin</li><li>What is the SEX?</li><li>What is the AGE at time of death?</li><li>What is the STATURE?</li><li>What is the RACE?</li><li>How can IDENTITY be established? (dental, DNA, peculiarities)</li><li>What is the TIME since death?</li><li>What was the CAUSE of death?</li><li>What is the MANNER of separation?</li></ol><p>★ "<strong>Big Four</strong>" = Sex · Age · Stature · Race</p>', tags: ['10 questions'] },
  'fo-krogman': { label: '★ Krogman&apos;s Accuracy Hierarchy', info: '<p>Sexing accuracy from skeletal material (Krogman):</p><ul><li>★ <strong>ENTIRE skeleton — 100%</strong></li><li>★ <strong>PELVIS + SKULL together — 98%</strong></li><li>★ <strong>PELVIS alone — 95%</strong> (best single bone — pelvis adapted for childbirth = most sexually dimorphic)</li><li>★ <strong>SKULL alone — 92%</strong></li><li>★ <strong>LONG BONES alone — 80%</strong></li></ul><p><strong>General sex difference:</strong></p><ul><li>Male skeleton — large, massive, <strong>4.5 kg</strong></li><li>Female skeleton — small, slender, <strong>2.75 kg</strong></li></ul>', tags: ['100/98/95/92/80'] },
  'fo-bigfour': { label: '"Big Four" of Forensic Osteology', info: '<ol><li><strong>SEX</strong> — pelvis (95%) &gt; skull (92%) &gt; long bones (80%)</li><li><strong>AGE</strong> — dental + ossification + epiphyseal fusion + suture closure + pubic symphysis (Todd 10 phases, McKern-Stewart components)</li><li><strong>STATURE</strong> — long bones × multiplication factor (Karl Pearson · Trotter-Gleser · Pan · Nat · Shah-Siddiqui)</li><li><strong>RACE</strong> — skull (90-95% — Krogman); cephalic index → dolichocephalic / mesaticephalic / brachycephalic</li></ol>', tags: ['Sex Age Stature Race'] },
  'fo-other-bones': { label: 'Other Bone Yields', info: '<ul><li><strong>DNA</strong> — best from <strong>FEMUR</strong> (cortical shields nuclear DNA) and <strong>TEETH</strong> (also have mtDNA — see Ch 5)</li><li><strong>Blood group</strong> — from bone marrow or teeth (ABH antigens persist)</li><li><strong>Bullets / pellets / implants / surgical plates</strong> — preserved in bone matrix — weapon + identity clues</li><li><strong>Hair, dental records</strong> — accompany skeletal evidence for ID</li><li><strong>Poison (e.g., arsenic)</strong> — detectable in bone for years (Marsh test)</li></ul>', tags: ['DNA · Plates · As'] },
  'fo-tools': { label: 'Tools of the Trade', info: '<ul><li>★ <strong>Hepburn osteometric board</strong> — measures long-bone length (max length)</li><li>Sliding + spreading calipers</li><li>Mandibulometer</li><li>★ <strong>UV light</strong> — fluorescence test (recent bone fluoresces silvery-blue)</li><li>★ <strong>Benzidine / Kastle-Meyer</strong> — blood detection (positive up to 100 yr)</li><li><strong>Precipitin test</strong> — confirms human origin</li><li>Gel diffusion · electrophoresis · radiology · DNA</li></ul>', tags: ['Hepburn board · UV'] },

  'fo-boneornot': { label: 'Bone or Not — 3 Steps', info: '<ol><li><strong>Gross examination</strong> — shape, size, texture, weight, morphology vs established anatomical landmarks</li><li><strong>Microscopy</strong> — reveals true Haversian system + presence of osteons (definitive)</li><li><strong>Serology</strong> — extract species-specific protein, test with antisera (precipitin)</li></ol><p>If all 3 confirm presence of Haversian + osteons → bone identified.</p>', tags: ['3-step ID'] },
  'fo-humananimal': { label: 'Human vs Animal Bone', info: '<p>Usually easy by gross morphology. Difficulty with:</p><ul><li>Small bones / fragments</li><li>Closely related species (great apes vs humans)</li></ul><p><strong>★ Microscopic discriminator:</strong></p><p>★ <strong>Haversian systems + canals are LARGER in DIAMETER in HUMANS</strong> than in animals.</p><p><strong>Serological:</strong></p><ul><li>Precipitin test with anti-human serum</li><li>Electrophoresis · gel diffusion</li><li>Confirm human tissue</li></ul>', tags: ['Haversian size'] },
  'fo-haversian': { label: 'Haversian System — Microscopic Key', info: '<p>★ Haversian system = OSTEON = structural unit of compact bone:</p><ul><li>Central <strong>Haversian canal</strong> (vessel, nerve)</li><li>Concentric <strong>lamellae</strong> around canal</li><li><strong>Osteocytes</strong> in lacunae</li><li><strong>Canaliculi</strong> radiating to neighbours</li></ul><p><strong>★ Forensic value:</strong></p><ul><li>Confirms BONE identity</li><li>Confirms HUMAN origin (canals larger than animal)</li><li>★ <strong>Age estimation — Rai equation:</strong> Age = (number of osteons) + 8.3</li></ul>', tags: ['Osteon · Rai eq'] },
  'fo-precipitin': { label: 'Precipitin Test', info: '<p>★ <strong>PRECIPITIN test</strong> — confirms human origin of bone / tissue.</p><p><strong>Procedure:</strong></p><ol><li>Extract protein from bone</li><li>React with specific antisera (anti-human serum)</li><li>Visible precipitate at antigen-antibody zone confirms human</li></ol><p><strong>★ Time limit:</strong> positive up to <strong>5–10 years</strong> after death (degrades with age).</p><p>For older bones → switch to DNA / mtDNA analysis.</p>', tags: ['5-10 yr window'] },
  'fo-cartilage-tooth': { label: 'Distinguishing Bone from Cartilage, Tooth, Stone', info: '<ul><li><strong>Cartilage</strong> — flexible, no Haversian system, hyaline matrix, chondrocytes in lacunae</li><li><strong>Tooth</strong> — enamel (hardest tissue), dentine (Haversian-like tubules), pulp; ★ resists fire and decomposition LONGER than bone</li><li><strong>Stone / plaster / ceramic</strong> — no organic component; fails Kastle-Meyer + precipitin</li><li><strong>Bone</strong> — Haversian present; 4.5% nitrogen fresh; benzidine + up to 100 yr</li></ul>', tags: ['4 materials'] },

  'fo-sex-overview': { label: 'Sex Determination — 3 Methods', info: '<ol><li><strong>Morphological examination</strong> — visual bone features</li><li><strong>Morphometry / osteometry</strong> — measurements + indices</li><li><strong>Multivariate discriminant function analysis</strong></li></ol><p>If soft parts available:</p><ul><li>Y-chromosome demonstration</li><li>DNA profiling</li></ul>', tags: ['3 methods'] },
  'fo-krogman-table': { label: '★ Krogman&apos;s Sexing Accuracy Table', info: '<table><tr><th>Available material</th><th>Accuracy</th></tr><tr><td>★ Entire skeleton</td><td>★ <strong>100%</strong></td></tr><tr><td>★ Pelvis + skull combined</td><td>★ <strong>98%</strong></td></tr><tr><td>★ Pelvis alone</td><td>★ <strong>95%</strong></td></tr><tr><td>★ Skull alone</td><td>★ <strong>92%</strong></td></tr><tr><td>★ Long bones alone</td><td>★ <strong>80%</strong></td></tr></table><p>★ Reason pelvis is best: anatomically modified for <strong>childbirth</strong> — most sexually dimorphic structure in human skeleton.</p>', tags: ['100/98/95/92/80'] },
  'fo-general-skel': { label: 'General Skeletal Sex Differences', info: '<table><tr><th>Feature</th><th>Male</th><th>Female</th></tr><tr><td>Size</td><td>Large, massive</td><td>Small, slender</td></tr><tr><td>Surface</td><td>Heavier, rough</td><td>Light, smooth</td></tr><tr><td>Muscle impressions</td><td>Prominent</td><td>Less prominent</td></tr><tr><td>★ Weight</td><td>★ 4.5 kg</td><td>★ 2.75 kg</td></tr></table>', tags: ['Weight 4.5 vs 2.75'] },
  'fo-femur-sex': { label: 'Femur — Sex Differences', info: '<table><tr><th>Feature</th><th>Male</th><th>Female</th></tr><tr><td>Length</td><td>438.4 mm</td><td>400.2 mm</td></tr><tr><td>Head Ø horizontal</td><td>44.1 mm</td><td>39.8 mm</td></tr><tr><td>Head Ø vertical</td><td>&gt; 48 mm</td><td>44 mm</td></tr><tr><td>Bicondylar breadth</td><td>77.9 mm</td><td>71.1 mm</td></tr><tr><td>Popliteal length</td><td>135-145 mm</td><td>106-114 mm</td></tr><tr><td>Head — articular surface</td><td>&gt; 2/3 sphere</td><td>&lt; 2/3 sphere</td></tr><tr><td>Collodiaphyseal angle</td><td>45° (low)</td><td>46° (high)</td></tr></table>', tags: ['Femur ♂ vs ♀'] },
  'fo-sternum-sex': { label: '★ Sternum — Ashley + Hyrtl', info: '<p>★ <strong>Ashley&apos;s rule:</strong> Total midline length (manubrium + body):</p><ul><li>♂ &gt; 149 mm</li><li>♀ &lt; 149 mm</li></ul><p>★ <strong>Hyrtl&apos;s law / Manubrium-corpus index:</strong> = manubrium length × 100 ÷ body length</p><ul><li>♂ &lt; 50</li><li>♀ &gt; 50</li></ul><p>★ Male body &gt; 2× manubrium length · Female body &lt; 2× manubrium length.</p>', tags: ['Ashley · Hyrtl'] },
  'fo-clav-scap-sex': { label: 'Other Sex-Dimorphic Bones', info: '<p><strong>CLAVICLE:</strong> ♂ 147.6 mm, weight &gt; 20.1 g, more curved · ♀ 129.8 mm, weight &lt; 7.82 g, less curved.</p><p><strong>SCAPULA (Iordanidis):</strong> ♂ height &gt; 157 mm, breadth &gt; 106 mm, glenoid &gt; 29 mm · ♀ &lt; 144 / &lt; 93 / &lt; 26.</p><p><strong>HUMERUS:</strong> ♂ length 31.1 cm, head vertical Ø 48 mm · ♀ 27.9 cm, 40.5 mm.</p><p><strong>SACRUM:</strong> ♂ 5 or 6 segments, projected promontory · ♀ always 5 segments. Sacral index: ♂ &lt; 114, ♀ &gt; 114.</p>', tags: ['Clav · Scap · Humerus · Sac'] },

  'fo-skull-sex': { label: '★ Skull — 92% Sexing Accuracy', info: '<p>Comprehensive skull sex differences (Krogman):</p><p><strong>GENERAL:</strong> ♂ large + longer, ragged · ♀ small, smooth.</p><p><strong>FACE:</strong></p><ul><li>Forehead: ♂ steep + less rounded · ♀ vertical + rounded "infantile"</li><li>Glabella: ♂ prominent · ♀ less</li><li>Supra-orbital margin: ♂ rounded · ♀ <strong>SHARP</strong></li><li>Orbit: ♂ rectangular, lower · ♀ rounded, higher</li><li>Nasal aperture: ♂ higher, narrower, sharp margin · ♀ lower, broader, rounded</li></ul><p><strong>INFERIOR:</strong></p><ul><li>★ <strong>Palate: ♂ U-shaped · ♀ PARABOLA</strong></li><li>Foramen magnum: ♂ &gt; 963 mm² · ♀ &lt; 805 mm²</li></ul><p><strong>LATERAL:</strong></p><ul><li>Mastoid: ♂ prominent, large, round, blunt · ♀ pointed, smooth</li></ul><p><strong>POSTERIOR:</strong> External occipital protuberance ♂ prominent · ♀ smooth.</p><p><strong>VOLUMETRIC:</strong></p><ul><li>★ Cranial capacity: ♂ 1500–1550 cc · ♀ 1350–1400 cc</li><li>★ Skull:skeleton weight ratio — ♂ <strong>1:8</strong> (smaller) · ♀ <strong>1:6</strong> (larger relative)</li></ul>', tags: ['Skull dimorphism'] },
  'fo-mandible-sex': { label: '★ Mandible — Sex Differences', info: '<p>Key mandibular dimorphism features:</p><ul><li><strong>★ Mandibular angle:</strong> ♂ EVERTED (outward) · ♀ INVERTED (inward)</li><li><strong>★ Chin:</strong> ♂ SQUARE · ♀ ROUND</li><li><strong>★ Shape of bone:</strong> ♂ "V"-shaped · ♀ "U"-shaped</li><li>Mental tubercle: ♂ large + prominent · ♀ insignificant</li><li>Mylohyoid line: ♂ prominent + deep · ♀ shallow</li><li>Height at symphysis menti: ♂ more · ♀ less</li><li>Ascending ramus: ♂ broad · ♀ narrow</li><li>Condylar process: ♂ larger · ♀ smaller</li></ul><p>★ <strong>Stature from mandible:</strong> = (length from angle to symphysis menti) × <strong>16</strong></p><p><strong>Old age changes:</strong> alveolar absorption · mental foramen near upper border · angle ~140° · coronoid &gt; condyloid process.</p>', tags: ['V vs U chin'] },

  'fo-pelvis-overview': { label: 'Pelvis — Most Dimorphic (95%)', info: '<p>Pelvis = best single bone for sex determination (95% accuracy).</p><p>Female pelvis anatomically modified for childbirth → wider, shallower, broader subpubic angle.</p><p>Features detectable even on isolated hip bone OR articulated pelvis.</p>', tags: ['95% accuracy'] },
  'fo-pelvis-articulated': { label: 'Articulated Pelvis — ♂ vs ♀', info: '<table><tr><th>Feature</th><th>Male</th><th>Female</th></tr><tr><td>Pelvic inlet</td><td>★ Heart-shaped</td><td>★ Circular / oval</td></tr><tr><td>Pelvic cavity</td><td>Conical, funnel</td><td>Broad, round</td></tr><tr><td>★ Sub-pubic angle</td><td>★ Narrow "V" 70-75°</td><td>★ Wide "U" 90-100°</td></tr><tr><td>Pelvic outlet</td><td>Smaller</td><td>Larger</td></tr><tr><td>Symphysis</td><td>Higher</td><td>Lower</td></tr></table>', tags: ['Sub-pubic angle'] },
  'fo-hipbone': { label: 'Hip Bone — Sex Differences', info: '<table><tr><th>Feature</th><th>Male</th><th>Female</th></tr><tr><td>Obturator foramen</td><td>★ Large, OVAL</td><td>★ Small, TRIANGULAR</td></tr><tr><td>Acetabulum</td><td>Large, lateral</td><td>Small, antero-lateral</td></tr><tr><td>★ Greater sciatic notch</td><td>★ Smaller, narrower, DEEPER</td><td>★ Larger, wider, SHALLOWER</td></tr><tr><td>Pre-auricular sulcus</td><td>Not frequent</td><td>Frequent, well-developed</td></tr><tr><td>Ischial tuberosity</td><td>Inverted</td><td>Everted</td></tr><tr><td>Body of pubis</td><td>Narrow, triangular</td><td>Broad, square</td></tr></table>', tags: ['Obturator · Sciatic notch'] },
  'fo-phenice': { label: '★ Phenice Criteria (1969)', info: '<p>★ <strong>Phenice 3 criteria</strong> — present in FEMALE, absent in MALE (ventral aspect of pubis):</p><ol><li><strong>VENTRAL ARC</strong> — slightly elevated bony ridge on ventral surface of pubis, from pubic crest to pubic ramus</li><li><strong>SUB-PUBIC CONCAVITY</strong> — deep concave structure immediately below symphysis on ramus</li><li><strong>MEDIAL ASPECT of ISCHIOPUBIC RAMUS</strong> — ♀ narrow + crest-like · ♂ broad + flat</li></ol><p>★ High accuracy ~95% for pubic-region sexing.</p>', tags: ['Phenice 3'] },
  'fo-indices': { label: 'Pelvic Sex Indices', info: '<ul><li>★ <strong>Ischio-pubic index</strong> = pubis × 100 ÷ ischium · ♂ 73-94 · ♀ <strong>91-115</strong></li><li>★ <strong>Sciatic notch index</strong> = width × 100 ÷ depth · ♂ 4-5 · ♀ 5-6</li><li><strong>Coxal index</strong> = iliac × 100 ÷ innominate · ♂ 72.6 · ♀ 75.8</li><li><strong>Pubo-acetabular index</strong> = acetabulo-symphyseal × 100 ÷ acetabular transverse · ♂ 110.5 · ♀ 143.3</li></ul>', tags: ['Indices'] },

  'fo-age-methods': { label: 'Age Estimation — 5 Methods', info: '<ol><li><strong>Dental status</strong> (Ch 3 Identification — eruption, attrition)</li><li><strong>Ossification data</strong> — appearance + fusion of ossification centers</li><li><strong>Age-related changes</strong> in individual bones — mandible, pubic symphysis, scapula</li><li><strong>Radiographic</strong> method — medullary cavity extension</li><li><strong>Histological</strong> — Rai equation (age = osteons + 8.3)</li></ol>', tags: ['5 methods'] },
  'fo-femur-age': { label: 'Femur — Ossification (Galstaun)', info: '<table><tr><th>Center</th><th>♀</th><th>♂</th></tr><tr><td>Head — appearance</td><td>1 yr</td><td>1 yr</td></tr><tr><td>Head — fusion</td><td>14-15 yr</td><td>16-19 yr</td></tr><tr><td>Greater trochanter — appear</td><td>5 yr</td><td>5 yr</td></tr><tr><td>Greater trochanter — fusion</td><td>14 yr</td><td>17 yr</td></tr><tr><td>Lesser trochanter — fusion</td><td>15 yr</td><td>15-17 yr</td></tr><tr><td>★ Lower end — appearance</td><td>★ <strong>36 weeks IU</strong></td><td>★ <strong>36 weeks IU</strong></td></tr><tr><td>Lower end — fusion</td><td>14-17 yr</td><td>14-17 yr</td></tr></table><p>★ Medicolegal — appearance of lower femur center at 36 wk IU is used as evidence of LIVE birth / viability.</p>', tags: ['Lower femur 36 wk IU'] },
  'fo-humerus-age': { label: 'Humerus — Ossification', info: '<table><tr><th>Center</th><th>♀</th><th>♂</th></tr><tr><td>Head — appearance</td><td>1 yr</td><td>1 yr</td></tr><tr><td>Head — fusion</td><td>14-16</td><td>14-18</td></tr><tr><td>Greater tubercle — appearance</td><td>2-4 yr</td><td>2-4 yr</td></tr><tr><td>Capitulum — appearance</td><td>7-10 mo</td><td>5 mo</td></tr><tr><td>Medial epicondyle — appearance</td><td>5 yr</td><td>7 yr</td></tr><tr><td>Medial epicondyle — fusion</td><td>14 yr</td><td>16 yr</td></tr></table><p>★ Lateral epicondyle + capitulum + trochlea fuse together → form larger lower epiphysis that unites with shaft at 14 (♀) / 14-16 yr (♂).</p>', tags: ['Lower epiphysis fuses'] },
  'fo-tibia-fibula': { label: 'Tibia &amp; Fibula — Ossification', info: '<p><strong>TIBIA</strong></p><ul><li>Upper end appearance: <strong>before birth</strong> · fusion: ♀ 14-15 · ♂ 15-17</li><li>Lower end appearance: 1 yr · fusion: ♀ 14.1-14.4 · ♂ 16</li></ul><p><strong>FIBULA</strong></p><ul><li>Upper appearance: ♀ 3 yr · ♂ 5 yr · fusion: 14-16</li><li>Lower appearance: 1-2 yr · fusion: 13-16</li></ul>', tags: ['Tibia upper before birth'] },
  'fo-rad-ulna': { label: 'Radius &amp; Ulna — Ossification', info: '<p><strong>RADIUS</strong></p><ul><li>Upper end appearance: ♀ 6 yr · ♂ 8 yr · fusion: ♀ 14 · ♂ 16</li><li>Lower end appearance: 1 yr · fusion: ♀ 16.5 · ♂ 16-17</li></ul><p><strong>ULNA</strong></p><ul><li>Upper end (olecranon): appearance ♀ 9-12 · ♂ 11-13 · fusion: ♀ 15 · ♂ 17</li><li>Lower end: appearance ♀ 8-10 · ♂ 10-11 · fusion: ♀ 17 · ♂ 18</li></ul>', tags: ['Radius lower 1 yr'] },
  'fo-sternum-age': { label: 'Sternum — 6 Centers + Fusion', info: '<p><strong>Sternum ossifies from 6 centers</strong> (5 primary + 1 secondary).</p><ul><li>Manubrium + segments 1-3: appear <strong>5 mo intrauterine</strong></li><li>Segment 4: appears 6 mo IU</li><li>Secondary center for xiphoid: <strong>3rd year of life</strong></li></ul><p><strong>★ Key fusion ages:</strong></p><ul><li>Sternal segments fuse from below upwards (puberty → 25 yr)</li><li>★ <strong>Xiphoid + body: 40 yr</strong></li><li>★ <strong>Manubrium + body: 60 yr</strong></li></ul>', tags: ['40 yr xiphoid · 60 yr manubrium'] },
  'fo-hipbone-age': { label: 'Hip Bone + Scapula + Clavicle Ages', info: '<p><strong>HIP BONE — secondary centers (Galstaun):</strong></p><ul><li>★ <strong>Triradiate cartilage</strong> fuses: ♀ 13-14 · ♂ 15-16</li><li>Iliac crest: appearance 14-17 · fusion 17-20</li><li>Ischial tuberosity: appearance 14-18 · fusion 20</li><li>Ischio-pubic rami fuse: 8½ yr</li></ul><p><strong>SCAPULA</strong> — full union by 20 yr</p><p><strong>CLAVICLE</strong> — sternal end appearance 14-19 · fusion <strong>20-22</strong> · ★ Clavicle is the first bone to ossify (5th wk IU) and last to fuse (~25 yr).</p>', tags: ['Triradiate · Clavicle last'] },

  'fo-fontanelle': { label: 'Fontanelles — Closure Ages', info: '<ul><li>Lateral + occipital fontanelle — close within <strong>2 months</strong></li><li>Posterior fontanelle — <strong>6-8 months</strong></li><li>★ <strong>ANTERIOR fontanelle — 1.5-2 YEARS</strong> (high-yield)</li></ul><p>Fusion of occipital bone parts:</p><ul><li>Squamous + condylar parts: end of 2nd year</li><li>Squamous + basilar: 6th year</li></ul>', tags: ['Anterior 1.5-2 yr'] },
  'fo-sutures': { label: '★ Skull Sutures — McKern-Stewart', info: '<table><tr><th>Suture</th><th>Age of closure</th></tr><tr><td>Metopic</td><td>2-4 yr</td></tr><tr><td>★ Basal (spheno-occipital)</td><td>★ <strong>18-20 yr</strong></td></tr><tr><td>Sagittal</td><td>30-40 yr</td></tr><tr><td>Coronal</td><td>40-50 yr</td></tr><tr><td>Lambdoid</td><td>40-50 yr</td></tr><tr><td>Sphenotemporal</td><td>50-60 yr</td></tr><tr><td>Parietomastoid</td><td>80-90 yr</td></tr><tr><td>Masto-occipital</td><td>80-90 yr</td></tr><tr><td>Squamous</td><td>&gt; 80 yr</td></tr></table><p>★ Vault sutures: 17-50 yr · Circummeatal: above 50 yr.</p>', tags: ['McKern-Stewart'] },
  'fo-suture-terms': { label: 'Suture Closure — Terminology &amp; Pattern', info: '<ul><li><strong>Lapsed union</strong> — fusion begun but not completed</li><li><strong>Precocious closure</strong> — closure BEFORE age 7 yr (cranial growth ~95% complete)</li><li><strong>Premature closure</strong> — after 7 yr but considerably before normal age</li></ul><p><strong>Pattern of closure:</strong></p><ul><li>Closes from <strong>inside out</strong> (endocranial first, then ectocranial)</li><li>Sagittal — front to back</li><li>Coronal + Lambdoid — medial to lateral</li><li>No L/R difference · No sex difference</li></ul>', tags: ['Inside-out'] },
  'fo-todd-phases': { label: 'Todd&apos;s 10 Phases — Pubic Symphysis', info: '<p>Todd 1920 — examined 5 features of pubic symphysis surface in 10 phases from 18-19 yr to 50+ yr:</p><ol><li>Phase 1: 18-19 yr — rugged, horizontal grooves</li><li>Phase 2: 20-21 — grooves filling dorsally</li><li>Phase 3: 22-24 — going progressively</li><li>Phase 4: 25-26 — beveling, dorsal plateau</li><li>Phase 5: 27-30 — ventral rampart attempt</li><li>Phase 6: 30-35 — granular appearance, ventral rampart complete</li><li>Phase 7: 35-39 — texture finer</li><li>Phase 8: 40-44 — smooth, no rim</li><li>Phase 9: 44-50 — rim present</li><li>Phase 10: 50+ — erosion, breakdown, erratic ossification</li></ol>', tags: ['Todd 10 phases'] },
  'fo-mckern-stewart': { label: 'McKern-Stewart Component Analysis (1957)', info: '<p>Revision of Todd&apos;s method. Pubic symphysis divided into 3 components:</p><ol><li><strong>Component I — DORSAL DEMI-FACE</strong> (dorsal plateau)</li><li><strong>Component II — VENTRAL DEMI-FACE</strong> (ventral rampart)</li><li><strong>Component III — SYMPHYSEAL RIM</strong> (whole surface)</li></ol><p>Each component scored 0 to 5; total used to estimate age.</p><p>★ Developmental sequence: I → II → III.</p><p><strong>★ Score → age:</strong></p><ul><li>♂ 0 → 17.3 yr · 6-7 → 22.4 yr · 14 → 35.8 yr · 15 → 41 yr</li><li>♀ 0 → 16 yr · 4-5 → 26 yr · 12 → 39 yr · 14-15 → 55.7 yr</li></ul>', tags: ['3 components I-II-III'] },
  'fo-mandible-age': { label: 'Mandible — Age Markers', info: '<p><strong>At birth:</strong></p><ul><li>2 halves united by fibrous symphysis menti</li><li>Mental foramen near LOWER border, directed forward</li><li>Coronoid process above condyle</li></ul><p><strong>Year 1-2:</strong> halves fuse at symphysis from below upward.</p><p><strong>Year 6:</strong> mandible enlarges; bone added at posterior ramus.</p><p><strong>Adult:</strong> alveolar + sub-alveolar regions equal; mental foramen MIDWAY; ramal height increases.</p><p><strong>★ OLD AGE:</strong></p><ul><li>Alveolar region ABSORBED → linear ridge</li><li>Mandibular canal + mental foramen near UPPER border</li><li>Ramus oblique; angle ~140°</li><li>Coronoid process projects higher than condyloid</li></ul>', tags: ['Old age changes'] },

  'fo-stature-intro': { label: 'Stature — Principle + Soft-Tissue Allowance', info: '<p><strong>Principle:</strong> Stature = bone length × multiplication factor (MF).</p><p>Length measured on <strong>★ Hepburn osteometric board</strong> (maximum length reading).</p><p>★ After calculation, add <strong>2.5–4 cm</strong> to compensate for soft-tissue thickness at joints (heel to vertex).</p><p>Long bones &gt; flat / irregular bones in reliability.</p>', tags: ['Hepburn · +2.5-4 cm'] },
  'fo-formulae': { label: 'Stature Formulae — Authors', info: '<ul><li>★ <strong>Karl Pearson</strong> — for Europeans (Caucasians)</li><li>★ <strong>Trotter &amp; Gleser</strong> — for Americans (Black + White separate)</li><li><strong>Dupertuis &amp; Haden</strong> — alternative regression</li></ul><p><strong>★ Indian Multiplication Factors:</strong></p><ul><li><strong>Pan</strong> — Bengal · Bihar · Orissa</li><li><strong>Nat</strong> — Uttar Pradesh</li><li><strong>Shah &amp; Siddiqui</strong> — Punjab</li><li><strong>Singh &amp; Shoha</strong> — East Punjab</li><li><strong>Mehta &amp; Thomas</strong> — Mysore</li></ul><p><strong>Fragmented bones:</strong> Muller · Steele · Steele &amp; McKern.</p>', tags: ['Pan/Nat/Shah Indian'] },
  'fo-mf-table': { label: 'Indian Multiplication Factors (♂)', info: '<table><tr><th>Bone</th><th>Shah&amp;S</th><th>Pan</th><th>Nat</th><th>Singh-Shoha</th></tr><tr><td>Femur</td><td>3.6</td><td>3.82</td><td>3.7</td><td>3.57</td></tr><tr><td>Tibia</td><td>4.2</td><td>4.49</td><td>4.48</td><td>4.18</td></tr><tr><td>Humerus</td><td>5.0</td><td>5.31</td><td>5.3</td><td>4.97</td></tr><tr><td>Radius</td><td>6.3</td><td>6.78</td><td>6.9</td><td>6.63</td></tr><tr><td>Ulna</td><td>6.0</td><td>6.0</td><td>6.3</td><td>5.93</td></tr><tr><td>Fibula</td><td>4.4</td><td>4.46</td><td>4.48</td><td>4.35</td></tr></table>', tags: ['MF table'] },
  'fo-stature-skull': { label: 'Stature — Skull, Mandible, Clavicle', info: '<p><strong>★ From SKULL:</strong> Stature = height of skull (basion to bregma) × <strong>8</strong></p><p><strong>★ From MANDIBLE:</strong> Stature = (symphysis menti to angle) × <strong>16</strong></p><p><strong>★ From CLAVICLE (Singh-Sohel 1954):</strong> Stature = clavicle length × <strong>11.1</strong></p><p>★ Long bones (femur, tibia) more reliable than skull / clavicle / mandible.</p>', tags: ['×8, ×16, ×11.1'] },
  'fo-fragmented': { label: 'Stature from Fragmented Long Bones', info: '<p>When only fragments are available:</p><ul><li><strong>Muller</strong> formula</li><li><strong>Steele</strong> formula</li><li><strong>Steele &amp; McKern</strong> formula</li></ul><p>★ <strong>Principle:</strong> estimate full bone length from segment → apply standard multiplication factor.</p>', tags: ['Muller · Steele'] },
  'fo-osteometric': { label: 'Hepburn Osteometric Board', info: '<p>★ Standard tool for measuring long-bone length.</p><ul><li>Fixed end at bone&apos;s proximal extremity</li><li>Sliding caliper at distal end</li><li>Length read from millimetre scale</li><li>★ Reading is MAXIMUM length of bone</li></ul><p>Femur measured supine on board; result entered into multiplication-factor formula.</p>', tags: ['Hepburn board'] },

  'fo-race-intro': { label: 'Race Determination — Skull Best', info: '<p>★ Race determination harder than sex / age — racial traits less marked, ethnic mixing common.</p><ul><li>★ <strong>SKULL is best</strong> (Krogman-Iscan accuracy: 90-95%)</li><li>★ <strong>FEMUR</strong> = best long bone</li><li>Pelvis also has racial signals</li><li>Teeth + hair provide additional clues</li><li>DNA / genetic identification will replace this in future</li></ul>', tags: ['90-95% skull'] },
  'fo-cephalic': { label: '★ Cephalic Index', info: '<p>★ <strong>Cephalic Index (C.I.)</strong> = (max breadth × 100) ÷ (max length of skull)</p><p>★ <strong>3 Categories:</strong></p><table><tr><th>Type</th><th>C.I.</th><th>Race</th></tr><tr><td>★ Dolichocephalic (long-headed)</td><td>70-75</td><td>★ Pure Aryans · Aborigines · NEGROES</td></tr><tr><td>★ Mesaticephalic (medium)</td><td>75-80</td><td>★ EUROPEANS · CHINESE</td></tr><tr><td>★ Brachycephalic (short)</td><td>80-85</td><td>★ MONGOLIANS</td></tr></table>', tags: ['Dolicho · Mesati · Brachy'] },
  'fo-race-skull': { label: '★ Skull Morphology by Race', info: '<table><tr><th>Feature</th><th>Caucasoid</th><th>Negroid</th><th>Mongoloid</th></tr><tr><td>Skull shape</td><td>Rounded</td><td>Narrow + elongated</td><td>Square</td></tr><tr><td>Sagittal contour</td><td>Rounded</td><td>★ Flat</td><td>Arched</td></tr><tr><td>Face breadth</td><td>Narrow to wide</td><td>Narrow</td><td>★ Very wide</td></tr><tr><td>Orbital opening</td><td>Angular to rounded</td><td>Rectangular</td><td>Rounded</td></tr><tr><td>Nasal opening</td><td>Narrow</td><td>★ Wide</td><td>Narrow</td></tr><tr><td>Lower nasal margin</td><td>Sharp</td><td>★ Trough / guttered</td><td>Sharp</td></tr><tr><td>Palate shape</td><td>Narrow</td><td>Wide</td><td>Medium</td></tr></table>', tags: ['3 races skull'] },
  'fo-race-pelvis': { label: 'Race from Pelvis (Todd-Lindala)', info: '<p>Less reliable; needs specialised measurements (Todd &amp; Lindala 1928).</p><p><strong>In WHITE people:</strong></p><ul><li>Ilium FLARES outward + upward</li><li>Pelvis BROADER</li><li>Symphysis placed LOW</li></ul><p><strong>In BLACK people:</strong></p><ul><li>Ilium more VERTICAL</li><li>Pelvis NOT broader</li><li>Symphysis placed HIGH</li></ul>', tags: ['White vs Black pelvis'] },
  'fo-race-femur': { label: 'Race from Femur (Stewart 1962)', info: '<p>★ <strong>Anterior curvature of femur shaft:</strong></p><ul><li>★ <strong>BLACK people:</strong> femur <strong>STRAIGHTER</strong> (less anterior curve)</li><li>★ <strong>WHITE people:</strong> femur <strong>BOWED FORWARD</strong></li><li>American Indians: GREATEST anterior curvature, most distal max-curvature point</li></ul><p>★ Femur is the best long bone for race determination.</p>', tags: ['Black straighter'] },
  'fo-race-indices': { label: 'Race Indices — Crural, Intermembral, Humero-femoral', info: '<table><tr><th>Index</th><th>Formula</th><th>Indian</th><th>European</th><th>Black</th></tr><tr><td>★ Crural</td><td>tibia × 100 ÷ femur</td><td>86.49</td><td>89.3</td><td>86.2</td></tr><tr><td>★ Intermembral</td><td>(humerus+radius)×100 ÷ (femur+tibia)</td><td>67.27</td><td>70.4</td><td>70.3</td></tr><tr><td>★ Humero-femoral</td><td>humerus × 100 ÷ femur</td><td>71.11</td><td>69</td><td>72.4</td></tr><tr><td>Brachial</td><td>radius × 100 ÷ humerus</td><td>76.49</td><td>75.5</td><td>78.5</td></tr></table>', tags: ['3 race indices'] },
  'fo-race-other': { label: 'Race — Sacrum + Mandible', info: '<p><strong>★ Sacrum (Kimura 1982):</strong></p><p>Base-wing index = (width of wing × 100) ÷ (width of base)</p><ul><li>Japanese, White, Black profiles differ</li></ul><p><strong>Mandible (Schultz 1933):</strong></p><ul><li>WHITE: larger breadth · higher narrower ramus · greater gonial angle · protrusive chin · mental tubercles lateral</li><li>BLACK: lower wider vertical ramus · long "U" dental arch · less prominent chin · mental tubercles medial</li></ul><p>★ Teeth (shovel-shaped incisors = Mongoloid) + hair (texture, cross-section) add evidence.</p>', tags: ['Sacrum · Mandible'] },

  'fo-tsd-gross': { label: 'Time Since Death — Gross', info: '<p><strong>Recent bones (&lt; 3 yr):</strong></p><ul><li>Soft tissue (ligaments, tendons, cartilage) attached near joints</li><li>Periosteum visible · putrid smell</li><li>Bones SOFT, MOIST, GREASY to touch</li><li>3-10 yr coffin burial → all soft tissues removed (shorter in India)</li></ul><p><strong>Old bones (on sawing):</strong></p><ul><li>Light (loss of organic matter + collagen)</li><li>★ "<strong>SANDWICH effect</strong>" — central hard ring + porous outer + inner layers</li><li>Ends of long bones fragile, brittle (wear and tear)</li></ul>', tags: ['Sandwich effect'] },
  'fo-uv': { label: '★ UV Fluorescence Test', info: '<p>★ Cut surface of bone examined under <strong>UV light</strong>:</p><ul><li>Recent bone — ENTIRE cut surface fluoresces SILVERY-BLUE</li><li>With age, outer rim + rim around marrow CEASE to fluoresce (loss of organic matter)</li><li>Progressively deepens toward centre</li><li>Old bones — NO fluorescence anywhere on cut surface</li></ul><p>★ <strong>Total time for complete loss of fluorescence: 100-150 years</strong></p>', tags: ['100-150 yr'] },
  'fo-chemical': { label: '★ Chemical / Serological — TSD', info: '<ul><li>★ <strong>Benzidine / Kastle-Meyer test</strong> (detects blood): positive up to <strong>100 years</strong></li><li><strong>Precipitin / gel diffusion (Coombs):</strong> positive <strong>5-10 years</strong></li><li>★ <strong>Nitrogen content:</strong> fresh bone <strong>4.5%</strong> · ~4% at <strong>100 yr</strong> · ≤2.5% at <strong>350 yr</strong></li><li>★ <strong>Amino acids:</strong> 15 AAs in fresh bone; mostly collagen-derived (glycine, alanine, proline, hydroxyproline). <strong>Proline + hydroxyproline VANISH in ~50 years</strong></li></ul>', tags: ['Benzidine 100 yr · N 4.5%'] },
  'fo-specific-gravity': { label: 'Specific Gravity Test', info: '<p>★ Specific gravity of fresh bone = <strong>2.0</strong>.</p><p>As bones age → become less dense → lose SG.</p><p><strong>★ Key thresholds:</strong></p><ul><li>SG <strong>1.2</strong> → indicates <strong>FOSSIL</strong> bone</li><li>SG <strong>1.7</strong> → forensically significant (distinguishes bone from fossil)</li></ul>', tags: ['SG 2 → 1.2 fossil'] },
  'fo-fracture-healing': { label: '★ 5 Stages of Fracture Healing', info: '<ol><li><strong>HEMATOMA formation</strong> (0-7 days) — bleeding from torn vessels, clot + fibrin meshwork, osteocytes differentiate</li><li><strong>GRANULATION tissue</strong> (2-3 weeks) — daughter cells differentiate into vessels, fibroblasts, osteoblasts</li><li><strong>CALLUS formation</strong> (3-12 weeks) — osteoblasts lay intercellular matrix, calcium impregnation, woven bone. ★ First sign of union on X-ray — usually 3 weeks after fracture</li><li><strong>REMODELLING</strong> — woven bone → mature lamellar pattern (slow process)</li><li><strong>MODELLING</strong> — bone gradually strengthened, shaping at endosteal + periosteal surfaces</li></ol>', tags: ['5 stages healing'] },
  'fo-cause-manner': { label: 'Cause of Death + Manner of Separation', info: '<p><strong>★ Cause of Death from bones:</strong></p><ul><li>Injury / fracture incompatible with life</li><li>Foreign body — bullet, pellets, weapon piece</li><li>Chemical analysis for poison (As, Pb, Hg in bone)</li><li>Radiology — malignancy, secondaries, healed pathology</li></ul><p><strong>★ Manner of Separation:</strong></p><ul><li><strong>Natural:</strong> intact articular cartilage, no cut marks</li><li><strong>Cut</strong> — sharp weapon dismemberment</li><li><strong>Bite</strong> — animal / insect after disposal</li><li><strong>Burnt</strong> — calcined / charred bones</li></ul>', tags: ['COD + manner'] }
};

function nodeList(ids) { return ids.map(id => ({ nodeId: id, ...NODES[id] })); }

const MCQS = {
  'FO-01': [
    { stem: 'Sex from skeletal remains can be determined with 100% accuracy from:', options: ['Skull alone','Pelvis alone','Entire skeleton','Long bones alone'], answerIdx: 2, explain: 'Krogman&apos;s hierarchy: entire skeleton 100% · pelvis+skull 98% · pelvis alone 95% · skull alone 92% · long bones alone 80%.', tag: '[PG-Inspired]' },
    { stem: 'The "Big Four" of forensic osteology refers to:', options: ['Sex · age · stature · race','Skull · pelvis · femur · tibia','Identity · cause · manner · time','DNA · dental · fingerprint · iris'], answerIdx: 0, explain: 'Big Four = Sex · Age · Stature · Race. These are the priority answers when skeletal remains are submitted.', tag: '[PG-Inspired]' },
    { stem: 'Average weight of an adult male skeleton is approximately:', options: ['2.75 kg','4.5 kg','6 kg','10 kg'], answerIdx: 1, explain: 'Male skeleton ≈ 4.5 kg · female skeleton ≈ 2.75 kg.', tag: '[PG-Inspired]' }
  ],
  'FO-02': [
    { stem: 'Bones are best differentiated from animal bones by:', options: ['Color','Larger Haversian canals + osteons','Weight','Cartilage attached'], answerIdx: 1, explain: 'Haversian systems + canals are LARGER in diameter in HUMAN bones than in animals. Best microscopic discriminator.', tag: '[PG-Inspired]' },
    { stem: 'Precipitin test on a bone is reliably positive up to:', options: ['1 year','5-10 years','50 years','100 years'], answerIdx: 1, explain: 'Precipitin test confirms human origin; positive up to 5-10 years. Older bones need DNA analysis.', tag: '[PG-Inspired]' },
    { stem: 'Histologic structural unit of compact bone is the:', options: ['Haversian system / osteon','Lamellae','Lacuna','Trabecula'], answerIdx: 0, explain: 'Osteon = Haversian system = structural unit. Central canal + concentric lamellae + osteocytes in lacunae + canaliculi.', tag: '[PG-Inspired]' },
    { stem: 'Rai equation for estimating age from histology of bone is:', options: ['Age = osteons × 2','Age = osteons + 8.3','Age = lamellae × 5','Age = lacunae + 10'], answerIdx: 1, explain: 'Rai equation: Age = number of osteons + 8.3. Based on observation that osteon count increases with age.', tag: '[PG-Inspired]' }
  ],
  'FO-03': [
    { stem: 'Best single bone for sex determination is:', options: ['Skull','Pelvis','Femur','Sternum'], answerIdx: 1, explain: 'Pelvis = best single bone (95% accuracy) — most sexually dimorphic, adapted for childbirth.', tag: '[PG-Inspired]' },
    { stem: 'Ashley&apos;s rule applies to which bone for sex determination?', options: ['Femur','Sternum','Pelvis','Skull'], answerIdx: 1, explain: 'Ashley&apos;s rule: total midline length (manubrium + body) of sternum &gt; 149 mm in males · &lt; 149 mm in females.', tag: '[PG-Inspired]' },
    { stem: 'Hyrtl&apos;s law / Manubrium-corpus index:', options: ['&gt; 50 in male','&gt; 50 in female','Same in both','Not used in forensic'], answerIdx: 1, explain: 'Hyrtl: (manubrium × 100 / body length). Value &lt; 50 in male · &gt; 50 in female.', tag: '[PG-Inspired]' }
  ],
  'FO-04': [
    { stem: 'A female skull is characterized by:', options: ['Steep forehead, rounded supra-orbital margin, U-shaped palate','Vertical rounded forehead, sharp supra-orbital margin, parabolic palate','Large foramen magnum, prominent occipital protuberance','Square chin, V-shaped mandible'], answerIdx: 1, explain: 'Female skull: vertical rounded (infantile) forehead, sharp supra-orbital margin, parabolic palate, smooth + less prominent muscle markings. Cranial capacity 1350-1400 cc vs male 1500-1550 cc.', tag: '[PG-Inspired]' },
    { stem: 'Adult cranial capacity in males:', options: ['1000-1200 cc','1350-1400 cc','1500-1550 cc','1700-1800 cc'], answerIdx: 2, explain: 'Male cranial capacity 1500-1550 cc · female 1350-1400 cc.', tag: '[PG-Inspired]' },
    { stem: 'Mandibular angle that is everted (turned outward) is seen in:', options: ['Male','Female','Both equally','Children'], answerIdx: 0, explain: 'Male mandible has EVERTED (outward) angle, square chin, V-shape. Female has INVERTED (inward) angle, round chin, U-shape.', tag: '[PG-Inspired]' },
    { stem: 'Stature from mandible is estimated by:', options: ['Length × 8','Length × 16 (angle to symphysis menti)','Length × 11','Width × 6'], answerIdx: 1, explain: 'Stature = (length from mandibular angle to symphysis menti) × 16.', tag: '[PG-Inspired]' },
    { stem: 'Palate shape in females is typically:', options: ['U-shaped','V-shaped','Parabolic','Square'], answerIdx: 2, explain: 'Female palate = parabola (curved). Male palate = U-shape. Useful in skull sexing.', tag: '[PG-Inspired]' }
  ],
  'FO-05': [
    { stem: 'Sub-pubic angle in females:', options: ['Narrow V, 70-75°','Wide U, 90-100°','Same as male','Variable'], answerIdx: 1, explain: 'Female sub-pubic angle is WIDE U-shape, 90-100°. Male is NARROW V-shape, 70-75°. Most distinctive pelvic feature.', tag: '[PG-Inspired]' },
    { stem: 'Greater sciatic notch in females is:', options: ['Narrow and deep','Wide and shallow','Closed','Absent'], answerIdx: 1, explain: 'Female greater sciatic notch = wider + shallower. Male = narrower + deeper.', tag: '[PG-Inspired]' },
    { stem: 'Pelvic inlet in males is:', options: ['Heart-shaped','Circular','Oval','Triangular'], answerIdx: 0, explain: 'Male pelvic inlet = heart-shaped. Female = circular/oval. Adaptation for fetal head passage in females.', tag: '[PG-Inspired]' },
    { stem: 'Phenice criteria (1969) for sex determination from pubis include all EXCEPT:', options: ['Ventral arc','Sub-pubic concavity','Medial aspect of ischiopubic ramus','Acetabular diameter'], answerIdx: 3, explain: 'Phenice 3 criteria (female-positive): ventral arc · sub-pubic concavity · medial aspect of ischiopubic ramus (narrow + crest-like). Acetabular diameter is a separate index.', tag: '[PG-Inspired]' }
  ],
  'FO-06': [
    { stem: 'Appearance of lower end of femur ossification center is used to determine:', options: ['Sex','Live birth (36 wk IU appearance)','Stature','Race'], answerIdx: 1, explain: 'Lower end of femur center appears at 36 weeks IU — used as evidence of viability / live birth in newborn infanticide cases.', tag: '[PG-Inspired]' },
    { stem: 'Fusion of xiphoid with body of sternum occurs at approximately:', options: ['20 years','30 years','40 years','60 years'], answerIdx: 2, explain: 'Xiphoid fuses with body of sternum at ~40 years. Manubrium fuses with body at ~60 years.', tag: '[PG-Inspired]' },
    { stem: 'Triradiate cartilage of hipbone fuses at:', options: ['8-9 years','13-16 years','20-22 years','25-30 years'], answerIdx: 1, explain: 'Triradiate cartilage (acetabulum) fuses at ♀ 13-14 yr · ♂ 15-16 yr.', tag: '[PG-Inspired]' },
    { stem: 'The first bone to begin ossification in human is:', options: ['Femur','Clavicle','Mandible','Skull'], answerIdx: 1, explain: 'Clavicle begins ossifying at 5th week IU — earliest. Also one of the LAST to fully fuse (sternal end at ~20-22 yr).', tag: '[PG-Inspired]' }
  ],
  'FO-07': [
    { stem: 'Anterior fontanelle closes at:', options: ['2 months','6-8 months','1.5-2 years','5 years'], answerIdx: 2, explain: 'Anterior fontanelle closes at 1.5-2 years. Posterior 6-8 months · Lateral + occipital within 2 months.', tag: '[PG-Inspired]' },
    { stem: 'Basal (spheno-occipital) suture fuses at:', options: ['2-4 years','18-20 years','30-40 years','&gt; 50 years'], answerIdx: 1, explain: 'Basal suture (spheno-occipital) fuses at 18-20 years. Useful age marker for late adolescence/early adult.', tag: '[PG-Inspired]' },
    { stem: 'Sagittal suture fuses approximately at:', options: ['10-15 years','15-20 years','30-40 years','60-70 years'], answerIdx: 2, explain: 'Sagittal 30-40 yr · Coronal + Lambdoid 40-50 yr · Sphenotemporal 50-60 yr · Parietomastoid + Masto-occipital 80-90 yr.', tag: '[PG-Inspired]' },
    { stem: 'Todd&apos;s 10 phases system is used to estimate age from:', options: ['Skull sutures','Pubic symphysis','Teeth','Long bones'], answerIdx: 1, explain: 'Todd 1920 — 10 phases of pubic symphyseal surface from 18-19 yr (Phase 1) to 50+ yr (Phase 10).', tag: '[PG-Inspired]' },
    { stem: 'McKern-Stewart component analysis (1957) is for:', options: ['Skull suture closure','Pubic symphysis age','Tooth wear','Bone density'], answerIdx: 1, explain: 'McKern-Stewart revised Todd&apos;s method using 3 components (dorsal demi-face · ventral demi-face · symphyseal rim), each scored 0-5.', tag: '[PG-Inspired]' }
  ],
  'FO-08': [
    { stem: 'For estimation of stature from long bones in Europeans, the classical formula is given by:', options: ['Karl Pearson','Pan','Nat','Shah and Siddiqui'], answerIdx: 0, explain: 'Karl Pearson — Europeans. Trotter-Gleser — Americans. Pan, Nat, Shah-Siddiqui — Indian regional formulae.', tag: '[PG-Inspired]' },
    { stem: 'Stature estimation from skull is by formula:', options: ['Height of skull × 5','Height of skull × 8','Height of skull × 11','Height of skull × 16'], answerIdx: 1, explain: 'Stature = skull height (basion to bregma) × 8. From mandible × 16. From clavicle × 11.1 (Singh-Sohel 1954).', tag: '[PG-Inspired]' },
    { stem: 'Hepburn osteometric board is used for:', options: ['Measuring skull capacity','Measuring long bone length','Measuring dental arch','Estimating age'], answerIdx: 1, explain: 'Hepburn osteometric board = standard tool for measuring maximum long-bone length, used in stature regression.', tag: '[PG-Inspired]' },
    { stem: 'Soft-tissue allowance added to bone-derived stature:', options: ['0.5 cm','1 cm','2.5-4 cm','5-7 cm'], answerIdx: 2, explain: 'Add 2.5-4 cm to compensate for soft-tissue thickness at joints (heel to vertex).', tag: '[PG-Inspired]' }
  ],
  'FO-09': [
    { stem: 'A cephalic index of 75-80 is classified as:', options: ['Dolichocephalic','Mesaticephalic','Brachycephalic','Hyperbrachycephalic'], answerIdx: 1, explain: 'Mesaticephalic 75-80 → Europeans + Chinese. Dolichocephalic 70-75 (Negroes, Aryans, aborigines). Brachycephalic 80-85 (Mongolians).', tag: '[PG-Inspired]' },
    { stem: 'A dolichocephalic skull (CI 70-75) is typically seen in:', options: ['Mongolians','Europeans','Negroes / pure Aryans','Brachycephalic populations'], answerIdx: 2, explain: 'Dolichocephalic = long-headed (CI 70-75) → Negroes, pure Aryans, Aborigines.', tag: '[PG-Inspired]' },
    { stem: 'A brachycephalic (short-headed) skull is characteristic of:', options: ['Caucasoids','Negroids','Mongolians','Australian aborigines'], answerIdx: 2, explain: 'Brachycephalic (CI 80-85) → Mongolians.', tag: '[PG-Inspired]' },
    { stem: 'A skull with wide nasal opening + flat sagittal contour + guttered lower nasal margin is most likely:', options: ['Caucasoid','Negroid','Mongoloid','Australoid'], answerIdx: 1, explain: 'Negroid skull: wide nasal opening, flat sagittal contour, troughed/guttered lower nasal margin, narrow + elongated shape.', tag: '[PG-Inspired]' },
    { stem: 'Anterior curvature of the femur is GREATEST in:', options: ['White people','Black people','American Indians','Mongolians'], answerIdx: 2, explain: 'American Indians have the greatest anterior curvature with most distal positioning of max-curvature point. Black femurs are straighter; white femurs are bowed forward.', tag: '[PG-Inspired]' }
  ],
  'FO-10': [
    { stem: 'Bone shows fluorescence under UV light up to approximately:', options: ['10-15 years','50 years','100-150 years','500 years'], answerIdx: 2, explain: 'Recent bone fluoresces silvery-blue across cut surface under UV. Total time for complete loss of fluorescence ~100-150 years.', tag: '[PG-Inspired]' },
    { stem: 'Specific gravity of fossil bone is approximately:', options: ['2.0','1.7','1.2','0.8'], answerIdx: 2, explain: 'Fresh bone SG = 2.0. SG of 1.7 = forensically significant cutoff. SG of 1.2 = fossil bone.', tag: '[PG-Inspired]' },
    { stem: 'Nitrogen content in a bone that died ~ 100 years ago is approximately:', options: ['4.5%','4%','2.5%','&lt; 1%'], answerIdx: 1, explain: 'Fresh bone N = 4.5% · ~ 4% at 100 yr · ≤ 2.5% at 350 yr.', tag: '[PG-Inspired]' },
    { stem: 'Proline and hydroxyproline disappear from bone in approximately:', options: ['1 year','10 years','50 years','200 years'], answerIdx: 2, explain: 'Proline + hydroxyproline (collagen-specific AAs) disappear in ~50 years. Useful marker for time since death.', tag: '[PG-Inspired]' },
    { stem: 'Callus formation is first visible on X-ray approximately how long after fracture?', options: ['3 days','1 week','3 weeks','6 months'], answerIdx: 2, explain: 'Callus formation (Stage 3 of 5) begins ~ 3 weeks after fracture and is the first sign of union visible on X-ray. Lasts 4-12 weeks.', tag: '[PG-Inspired]' },
    { stem: 'Benzidine/Kastle-Meyer test for blood on bone remains positive up to approximately:', options: ['1 year','10 years','100 years','1000 years'], answerIdx: 2, explain: 'Benzidine + Kastle-Meyer (blood detection) remain positive up to 100 years.', tag: '[PG-Inspired]' }
  ]
};

const DIFF_TABLES = [
  {
    id: 'DT-1', title: '★ Krogman&apos;s Sexing Accuracy Hierarchy', shortTitle: 'Krogman Hierarchy',
    intro: 'The fundamental ranking of skeletal material for sex determination — most-tested table in forensic osteology.',
    columns: ['Available material','Accuracy','Notes'],
    rows: [
      ['★ Entire skeleton','★ 100%','Best — all dimorphic features assessable'],
      ['★ Pelvis + skull','★ 98%','Combined gives near-perfect sexing'],
      ['★ Pelvis alone','★ 95%','★ BEST single bone — childbirth adaptation'],
      ['★ Skull alone','★ 92%','Cranial capacity + 12 morphological features'],
      ['★ Long bones alone','★ 80%','Femur dimensions, head diameter'],
      ['Single long bone','&lt; 80%','Combined accuracy = 80%; single = lower']
    ],
    parentDiagrams: ['FO-01','FO-03'],
    mcqs: [
      { stem: 'Pelvis alone gives sex determination accuracy of:', options: ['80%','92%','95%','100%'], answerIdx: 2, explain: 'Pelvis alone = 95% (best single bone). Entire skeleton = 100%.', tag: '[PG-Inspired]' },
      { stem: 'Skull alone is reliable for sex determination in:', options: ['~50% cases','~80% cases','~92% cases','~98% cases'], answerIdx: 2, explain: 'Skull alone = 92% (Krogman).', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-2', title: 'Skull — Male vs Female (12 key features)', shortTitle: 'Skull ♂ vs ♀',
    columns: ['Feature','Male','Female'],
    rows: [
      ['Size + architecture','Large + ragged','Small + smooth'],
      ['Forehead','Steep, less rounded','★ Vertical, rounded, "infantile"'],
      ['Glabella','Prominent','Less prominent'],
      ['Supra-orbital ridge','Prominent','Less prominent'],
      ['Supra-orbital margin','★ Rounded','★ SHARP'],
      ['Orbit shape','Rectangular, lower','Rounded, higher'],
      ['Nasal aperture','Higher, narrow, sharp margins','Lower, broad, rounded margins'],
      ['Mastoid','Prominent, large, round, blunt','Pointed, smooth, less prominent'],
      ['★ Palate','U-shaped','★ PARABOLA'],
      ['Foramen magnum','Large + longer (&gt; 963 mm²)','Small + rounded (&lt; 805 mm²)'],
      ['Occipital protuberance','Prominent','Smooth'],
      ['★ Cranial capacity','★ 1500-1550 cc','★ 1350-1400 cc'],
      ['Skull : skeleton weight','★ 1 : 8 (smaller)','★ 1 : 6 (larger relative)']
    ],
    parentDiagrams: ['FO-04'],
    mcqs: [
      { stem: 'Supra-orbital margin in female skull is:', options: ['Rounded','Sharp','Absent','Bony ridge'], answerIdx: 1, explain: 'Sharp in female · rounded in male. Useful palpation test.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-3', title: 'Pelvis — Male vs Female (Articulated + Hip bone)', shortTitle: 'Pelvis ♂ vs ♀',
    intro: '95% accuracy — pelvis is the best single bone for sexing.',
    columns: ['Feature','Male','Female'],
    rows: [
      ['General','Heavier, rough','Light, smooth'],
      ['★ Pelvic inlet','★ Heart-shaped','★ Circular / oval'],
      ['Pelvic cavity','Conical, funnel','Broad, round'],
      ['★ Sub-pubic angle','★ Narrow "V" 70-75°','★ Wide "U" 90-100°'],
      ['Pelvic outlet','Smaller','Larger'],
      ['★ Obturator foramen','★ Large, OVAL','★ Small, TRIANGULAR'],
      ['Acetabulum','Large, lateral','Small, antero-lateral'],
      ['★ Greater sciatic notch','★ Narrow, deep','★ Wide, shallow'],
      ['Pre-auricular sulcus','Not frequent','Frequent, well-developed'],
      ['Ischial tuberosity','Inverted','Everted'],
      ['Phenice ventral arc','Absent','★ Present'],
      ['Phenice sub-pubic concavity','Absent','★ Present'],
      ['Medial ischiopubic ramus','Broad + flat','Narrow + crest-like'],
      ['Ischio-pubic index','73-94','91-115']
    ],
    parentDiagrams: ['FO-05'],
    mcqs: [
      { stem: 'Pelvic inlet shape in male is:', options: ['Circular','Heart-shaped','Oval','Triangular'], answerIdx: 1, explain: 'Heart-shaped = male. Circular/oval = female.', tag: '[PG-Inspired]' },
      { stem: 'Phenice criteria are used for:', options: ['Age from sutures','Sex from pubis','Stature from femur','Race from skull'], answerIdx: 1, explain: 'Phenice 1969 — 3 features (ventral arc, sub-pubic concavity, medial ischiopubic ramus) — female-positive sexing of pubis.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-4', title: '★ Skull Sutures — Closure Ages (McKern-Stewart)', shortTitle: 'Suture Ages',
    intro: 'Approximate age of fusion of skull sutures — used for age estimation. Note erratic onset; range = decade.',
    columns: ['Suture','Age of closure'],
    rows: [
      ['Metopic','2-4 yr'],
      ['★ Basal (spheno-occipital)','★ 18-20 yr'],
      ['Sagittal','30-40 yr'],
      ['Coronal','40-50 yr'],
      ['Lambdoid','40-50 yr'],
      ['Sphenotemporal','50-60 yr'],
      ['Parietomastoid','80-90 yr'],
      ['Masto-occipital','80-90 yr'],
      ['Squamous','&gt; 80 yr'],
      ['<strong>Vault sutures overall</strong>','17-50 yr'],
      ['<strong>Circummeatal sutures overall</strong>','above 50 yr']
    ],
    parentDiagrams: ['FO-07'],
    mcqs: [
      { stem: 'Basal (spheno-occipital) suture fuses at:', options: ['8-10 yr','18-20 yr','30-40 yr','50-60 yr'], answerIdx: 1, explain: 'Basal suture fuses 18-20 yr. Useful late-adolescent age marker.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-5', title: '★ Stature — Indian Multiplication Factors (♂)', shortTitle: 'Indian MF Table',
    intro: 'Apply MF to bone length measured on Hepburn board, then add 2.5-4 cm soft-tissue allowance.',
    columns: ['Bone','Shah&amp;S','Pan','Nat','Singh-Shoha','Mehta-Thomas'],
    rows: [
      ['Femur','3.6','3.82','3.7','3.57','3.6'],
      ['Tibia','4.2','4.49','4.48','4.18','4.2'],
      ['Humerus','5.0','5.31','5.3','4.97','5.08'],
      ['Radius','6.3','6.78','6.9','6.63','6.01'],
      ['Ulna','6.0','6.0','6.3','5.93','6.4'],
      ['Fibula','4.4','4.46','4.48','4.35','4.44']
    ],
    parentDiagrams: ['FO-08'],
    mcqs: [
      { stem: 'Pan formula was developed for residents of:', options: ['Punjab','Bengal/Bihar/Orissa','Uttar Pradesh','Mysore'], answerIdx: 1, explain: 'Pan = Bengal, Bihar, Orissa. Nat = UP. Shah&amp;Siddiqui = Punjab. Mehta&amp;Thomas = Mysore.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-6', title: '★ Cephalic Index → Race', shortTitle: 'Cephalic Index',
    intro: 'C.I. = max breadth × 100 ÷ max length of skull. Race determination is best from skull (90-95%).',
    columns: ['Skull type','Cephalic index','Race'],
    rows: [
      ['★ Dolichocephalic (long-headed)','70-75','★ Pure Aryans · Aborigines · Negroes'],
      ['★ Mesaticephalic (medium-headed)','75-80','★ Europeans · Chinese'],
      ['★ Brachycephalic (short-headed)','80-85','★ Mongolians'],
      ['Hyperbrachycephalic','&gt; 85','Some Asian sub-groups']
    ],
    parentDiagrams: ['FO-09'],
    mcqs: [
      { stem: 'Brachycephalic skulls (CI 80-85) are characteristic of:', options: ['Negroes','Europeans','Mongolians','Indians'], answerIdx: 2, explain: 'Brachycephalic = Mongolians. Dolichocephalic = Negroes/Aryans. Mesaticephalic = Europeans/Chinese.', tag: '[PG-Inspired]' }
    ]
  }
];

const SUBJ = [
  {
    id: 'SAQ-4.1', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'Discuss the determination of sex from skeletal remains. Mention Krogman&apos;s accuracy hierarchy.',
    answer: `<h4>Methods of Sex Determination from Bones</h4>
<ol>
<li><strong>Morphological examination</strong> — visual inspection of dimorphic bone features</li>
<li><strong>Morphometry / osteometry</strong> — measurements + indices</li>
<li><strong>Multivariate discriminant function analysis</strong></li>
<li>If soft parts available: Y-chromosome demonstration · DNA profiling</li>
</ol>
<h4>★ Krogman&apos;s Accuracy Hierarchy</h4>
<table><tr><th>Available material</th><th>Accuracy</th></tr>
<tr><td>★ Entire skeleton</td><td>★ 100%</td></tr>
<tr><td>★ Pelvis + skull combined</td><td>★ 98%</td></tr>
<tr><td>★ Pelvis alone</td><td>★ 95%</td></tr>
<tr><td>★ Skull alone</td><td>★ 92%</td></tr>
<tr><td>★ Long bones alone</td><td>★ 80%</td></tr></table>
<p>Pelvis = best single bone because anatomically modified for childbirth — most sexually dimorphic structure.</p>
<h4>General Skeletal Sex Differences</h4>
<table><tr><th>Feature</th><th>Male</th><th>Female</th></tr>
<tr><td>Size + architecture</td><td>Large, heavy, ragged</td><td>Small, light, smooth</td></tr>
<tr><td>Muscle impressions</td><td>Prominent</td><td>Less prominent</td></tr>
<tr><td>★ Weight</td><td>4.5 kg</td><td>2.75 kg</td></tr></table>
<h4>Pelvis (95% accuracy)</h4>
<ul>
<li>★ Pelvic inlet: ♂ heart · ♀ circular/oval</li>
<li>★ Sub-pubic angle: ♂ 70-75° "V" · ♀ 90-100° "U"</li>
<li>★ Greater sciatic notch: ♂ narrow + deep · ♀ wide + shallow</li>
<li>★ Obturator foramen: ♂ large + oval · ♀ small + triangular</li>
<li>★ Phenice 1969: ventral arc, sub-pubic concavity, medial ischiopubic ramus (narrow + crest-like) → female-positive</li>
</ul>
<h4>Skull (92% accuracy)</h4>
<ul>
<li>Forehead: ♂ steep · ♀ vertical rounded "infantile"</li>
<li>Supra-orbital margin: ♂ rounded · ♀ SHARP</li>
<li>Mastoid: ♂ prominent, large · ♀ pointed, smooth</li>
<li>★ Palate: ♂ U-shape · ♀ parabola</li>
<li>★ Cranial capacity: ♂ 1500-1550 cc · ♀ 1350-1400 cc</li>
</ul>
<h4>Mandible</h4>
<ul>
<li>★ Angle: ♂ everted · ♀ inverted</li>
<li>★ Chin: ♂ square · ♀ round</li>
<li>★ Shape: ♂ V · ♀ U</li>
</ul>
<h4>Sternum — Ashley + Hyrtl</h4>
<ul>
<li>★ Ashley&apos;s rule: total length (manubrium + body) ♂ &gt; 149 mm · ♀ &lt; 149 mm</li>
<li>★ Hyrtl&apos;s law: manubrium-corpus index ♂ &lt; 50 · ♀ &gt; 50</li>
</ul>`,
    sources: ['FO-03 Krogman + FO-04 Skull + FO-05 Pelvis'],
    jumpToDiagram: 'FO-03'
  },
  {
    id: 'SAQ-4.2', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'Describe age estimation from skull sutures and pubic symphysis.',
    answer: `<h4>Skull Sutures</h4>
<p>★ Closure begins ENDOCRANIALLY (inside) before ECTOCRANIALLY (outside). No L/R or sex difference. McKern-Stewart approximate ages:</p>
<table><tr><th>Suture</th><th>Age of closure</th></tr>
<tr><td>Metopic</td><td>2-4 yr</td></tr>
<tr><td>★ Basal (spheno-occipital)</td><td>★ 18-20 yr</td></tr>
<tr><td>Sagittal</td><td>30-40 yr</td></tr>
<tr><td>Coronal + Lambdoid</td><td>40-50 yr</td></tr>
<tr><td>Sphenotemporal</td><td>50-60 yr</td></tr>
<tr><td>Parietomastoid + Masto-occipital</td><td>80-90 yr</td></tr></table>
<p>★ Vault sutures fuse 17-50 yr · Circummeatal sutures above 50 yr.</p>
<h4>Terminology</h4>
<ul><li><strong>Lapsed union</strong> — fusion begun but not complete</li>
<li><strong>Precocious closure</strong> — before age 7 yr</li>
<li><strong>Premature closure</strong> — after 7 yr but before normal age</li></ul>
<h4>Pattern</h4>
<ul><li>Sagittal — front to back</li>
<li>Coronal + Lambdoid — medial to lateral</li>
<li>★ Method only gives age within a DECADE range — not reliable alone (McKern + Stewart)</li></ul>
<h4>★ Pubic Symphysis — Todd&apos;s 10 Phases (1920)</h4>
<p>5 features examined: surface · ventral rampart · dorsal border · superior + inferior extremities. Divided into 10 phases from 18-19 yr (Phase 1) to 50+ yr (Phase 10).</p>
<ul><li>Phase 1: 18-19 yr — rugged grooves</li>
<li>Phase 5: 27-30 yr — ventral rampart attempt</li>
<li>Phase 8: 40-44 yr — smooth, no rim</li>
<li>Phase 10: 50+ yr — erosion, breakdown</li></ul>
<h4>★ McKern-Stewart Component Analysis (1957)</h4>
<p>Revised Todd&apos;s method using 3 components:</p>
<ol><li><strong>Component I — Dorsal demi-face</strong> (dorsal plateau)</li>
<li><strong>Component II — Ventral demi-face</strong> (ventral rampart)</li>
<li><strong>Component III — Symphyseal rim</strong> (whole surface)</li></ol>
<p>Each scored 0-5; total → age. Developmental sequence I → II → III.</p>
<p>★ Total score → age: ♂ 17.3 yr (0) to 41 yr (15) · ♀ 16 yr (0) to 55.7 yr (14-15).</p>
<h4>Limitations</h4>
<ul><li>Aging an individual SOLELY on suture closure is UNSAFE</li><li>Age range = decade</li><li>Should combine with dental, ossification, other bone changes</li></ul>`,
    sources: ['FO-07'],
    jumpToDiagram: 'FO-07'
  },
  {
    id: 'SAQ-4.3', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'Describe stature estimation from long bones. Mention the formulae and the Hepburn osteometric board.',
    answer: `<h4>Principle</h4>
<p>Stature = bone length × multiplication factor (MF). Length measured on ★ <strong>Hepburn osteometric board</strong> (maximum length reading).</p>
<p>★ After calculation, add <strong>2.5-4 cm</strong> to compensate for soft-tissue thickness at joints (heel to vertex).</p>
<h4>Formulae</h4>
<ul>
<li>★ <strong>Karl Pearson</strong> — Europeans</li>
<li>★ <strong>Trotter &amp; Gleser</strong> — Americans (Black + White separate)</li>
<li><strong>Dupertuis &amp; Haden</strong> — alternative regression</li>
</ul>
<h4>★ Indian Multiplication Factors</h4>
<ul>
<li><strong>Pan</strong> — Bengal, Bihar, Orissa</li>
<li><strong>Nat</strong> — Uttar Pradesh</li>
<li><strong>Shah &amp; Siddiqui</strong> — Punjab</li>
<li><strong>Singh &amp; Shoha</strong> — East Punjab</li>
<li><strong>Mehta &amp; Thomas</strong> — Mysore</li>
</ul>
<h4>MF Values (Males)</h4>
<table><tr><th>Bone</th><th>Shah-Sid</th><th>Pan</th><th>Nat</th></tr>
<tr><td>Femur</td><td>3.6</td><td>3.82</td><td>3.7</td></tr>
<tr><td>Tibia</td><td>4.2</td><td>4.49</td><td>4.48</td></tr>
<tr><td>Humerus</td><td>5.0</td><td>5.31</td><td>5.3</td></tr>
<tr><td>Radius</td><td>6.3</td><td>6.78</td><td>6.9</td></tr>
<tr><td>Ulna</td><td>6.0</td><td>6.0</td><td>6.3</td></tr>
<tr><td>Fibula</td><td>4.4</td><td>4.46</td><td>4.48</td></tr></table>
<h4>Other Stature Formulae</h4>
<ul>
<li>★ <strong>From SKULL</strong> — height × 8 (basion to bregma)</li>
<li>★ <strong>From MANDIBLE</strong> — (symphysis menti to angle) × 16</li>
<li>★ <strong>From CLAVICLE</strong> (Singh-Sohel 1954) — length × 11.1</li>
</ul>
<h4>Fragmented Long Bones</h4>
<ul><li><strong>Muller</strong> · <strong>Steele</strong> · <strong>Steele &amp; McKern</strong> formulae estimate full bone length from segment → apply standard MF</li></ul>
<h4>Hepburn Osteometric Board</h4>
<p>★ Standard tool — fixed end at proximal extremity, sliding caliper at distal end. Reading = MAXIMUM length on millimetre scale. Femur measured supine.</p>
<h4>Limitations</h4>
<ul><li>MF varies by population — must use appropriate formula for victim&apos;s race/region</li>
<li>Long bones (femur, tibia) more reliable than skull/clavicle/mandible</li>
<li>Combining multiple bones improves accuracy</li></ul>`,
    sources: ['FO-08'],
    jumpToDiagram: 'FO-08'
  },
  {
    id: 'SAQ-4.4', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'Discuss determination of race from skeletal remains. Mention cephalic index.',
    answer: `<h4>Best Source for Race</h4>
<ul><li>★ Skull (Krogman-Iscan accuracy 90-95%)</li>
<li>★ Femur — best long bone</li>
<li>Pelvis (specialised measurements by Todd-Lindala 1928)</li>
<li>Teeth + hair (corroborating)</li>
<li>DNA / genetic identification — future gold standard</li></ul>
<h4>★ Cephalic Index</h4>
<p>C.I. = (max breadth × 100) ÷ (max length of skull)</p>
<table><tr><th>Type</th><th>C.I.</th><th>Race</th></tr>
<tr><td>★ Dolichocephalic (long-headed)</td><td>70-75</td><td>Pure Aryans · Aborigines · Negroes</td></tr>
<tr><td>★ Mesaticephalic (medium)</td><td>75-80</td><td>Europeans · Chinese</td></tr>
<tr><td>★ Brachycephalic (short-headed)</td><td>80-85</td><td>Mongolians</td></tr></table>
<h4>Skull Morphology by Race</h4>
<table><tr><th>Feature</th><th>Caucasoid</th><th>Negroid</th><th>Mongoloid</th></tr>
<tr><td>Skull shape</td><td>Rounded</td><td>Narrow + elongated</td><td>Square</td></tr>
<tr><td>Sagittal contour</td><td>Rounded</td><td>★ Flat</td><td>Arched</td></tr>
<tr><td>Face breadth</td><td>Narrow to wide</td><td>Narrow</td><td>★ Very wide</td></tr>
<tr><td>Nasal opening</td><td>Narrow</td><td>★ Wide</td><td>Narrow</td></tr>
<tr><td>Lower nasal margin</td><td>Sharp</td><td>★ Trough/guttered</td><td>Sharp</td></tr>
<tr><td>Palate</td><td>Narrow</td><td>Wide</td><td>Medium</td></tr></table>
<h4>Femur — Anterior Curvature</h4>
<ul><li>★ Black: femur STRAIGHTER (less curve)</li>
<li>★ White: femur BOWED FORWARD</li>
<li>American Indian: GREATEST anterior curvature</li></ul>
<h4>Race Indices</h4>
<table><tr><th>Index</th><th>Indian</th><th>European</th><th>Black</th></tr>
<tr><td>Crural (tibia/femur)</td><td>86.49</td><td>89.3</td><td>86.2</td></tr>
<tr><td>Intermembral</td><td>67.27</td><td>70.4</td><td>70.3</td></tr>
<tr><td>Humero-femoral</td><td>71.11</td><td>69</td><td>72.4</td></tr></table>
<h4>Pelvis</h4>
<ul><li>White: ilium flares outward + upward · pelvis broader · symphysis low</li>
<li>Black: ilium more vertical · pelvis not broader · symphysis high</li></ul>
<h4>Limitations</h4>
<p>Race determination is the hardest of the "Big Four" because racial traits are less marked and ethnic mixing is common. Genetic DNA identification will replace morphological assessment in future.</p>`,
    sources: ['FO-09'],
    jumpToDiagram: 'FO-09'
  },
  {
    id: 'LAQ-4.1', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank-Inspired',
    question: 'A bundle of bones is submitted to you by police for medical examination. Describe the systematic approach you will take to answer the legal authority&apos;s questions.',
    answer: `<h4>★ 10 Questions to Answer</h4>
<ol>
<li>Are they BONES?</li>
<li>Are they HUMAN bones?</li>
<li>What is the SEX? ★ (Big Four)</li>
<li>What is the AGE at time of death? ★</li>
<li>What is the STATURE? ★</li>
<li>What is the RACE? ★</li>
<li>How can IDENTITY be established?</li>
<li>What is the TIME since death?</li>
<li>What was the CAUSE of death?</li>
<li>What is the MANNER of separation?</li>
</ol>
<h4>★ Step 1 — Bone or Not?</h4>
<ul><li>Gross examination — shape, size, texture, weight, anatomical landmarks</li>
<li>Microscopy — confirms HAVERSIAN systems + osteons</li>
<li>Serology if doubtful — precipitin test</li></ul>
<h4>★ Step 2 — Human or Animal?</h4>
<ul><li>★ Microscopic discriminator: Haversian systems + canals are LARGER in DIAMETER in HUMANS</li>
<li>Precipitin test with anti-human serum (positive up to 5-10 yr)</li>
<li>Electrophoresis · gel diffusion</li></ul>
<h4>Step 3 — The Big Four</h4>
<h5>SEX (Krogman hierarchy)</h5>
<ul><li>Entire skeleton 100% · Pelvis+skull 98% · Pelvis 95% · Skull 92% · Long bones 80%</li>
<li>Examine pelvis: sub-pubic angle, sciatic notch, Phenice criteria</li>
<li>Examine skull: palate shape, mastoid, cranial capacity</li>
<li>Examine sternum: Ashley + Hyrtl</li></ul>
<h5>AGE</h5>
<ul><li>Dental (Ch 3)</li>
<li>Ossification + epiphyseal fusion (Galstaun) — appearance + fusion dates of each bone</li>
<li>Skull sutures — metopic 2-4 yr · basal 18-20 yr · sagittal 30-40 yr · etc.</li>
<li>Mandible age changes (alveolar absorption)</li>
<li>Pubic symphysis — Todd 10 phases OR McKern-Stewart 3 components</li>
<li>Histology — Rai equation: age = osteons + 8.3</li></ul>
<h5>STATURE</h5>
<ul><li>Long bone length × multiplication factor (Pan/Nat/Shah for Indians; Karl Pearson for Europeans; Trotter-Gleser for Americans)</li>
<li>Hepburn osteometric board for measurement</li>
<li>Add 2.5-4 cm soft-tissue allowance</li>
<li>From skull × 8 · mandible × 16 · clavicle × 11.1</li></ul>
<h5>RACE</h5>
<ul><li>Skull (90-95% — Krogman) — cephalic index → dolichocephalic / mesaticephalic / brachycephalic</li>
<li>Skull morphology (Caucasoid / Negroid / Mongoloid)</li>
<li>Femur anterior curvature (Black straighter, White bowed)</li>
<li>Crural, intermembral, humero-femoral indices</li></ul>
<h4>Step 4 — Identity</h4>
<ul><li>Dental records · prosthesis · filling · root canal</li>
<li>Implants · plates · pins · screws (radiology)</li>
<li>Congenital / acquired peculiarities · old fractures · healed deformities</li>
<li>DNA profiling from femur or teeth (mtDNA in teeth)</li>
<li>Blood group from marrow / teeth</li></ul>
<h4>Step 5 — Time Since Death</h4>
<ul><li>Gross — soft tissues attached (recent) · "sandwich" sawing effect (old)</li>
<li>★ UV fluorescence — silvery-blue (recent) · none (old, total loss 100-150 yr)</li>
<li>Benzidine / Kastle-Meyer — positive up to 100 yr</li>
<li>Precipitin — positive 5-10 yr</li>
<li>★ Nitrogen content — fresh 4.5% · 4% at 100 yr · ≤ 2.5% at 350 yr</li>
<li>Amino acids — proline + hydroxyproline vanish in ~50 yr</li>
<li>Specific gravity — fresh 2.0 · fossil 1.2 · 1.7 forensically significant</li>
<li>Stage of fracture healing (1 hematoma · 2 granulation · 3 callus · 4 remodelling · 5 modelling)</li></ul>
<h4>Step 6 — Cause of Death</h4>
<ul><li>Injury/fracture incompatible with life</li>
<li>Foreign body — bullet, pellets, weapon piece</li>
<li>Chemical analysis for poison (arsenic in bone)</li>
<li>Radiology — malignancy, secondaries</li></ul>
<h4>Step 7 — Manner of Separation</h4>
<ul><li>Natural — intact articular cartilage, no cut marks</li>
<li>Cut — sharp weapon dismemberment</li>
<li>Bite — animal / insect</li>
<li>Burnt — calcined / charred bones</li></ul>
<h4>Documentation</h4>
<p>Photographs · measurements · diagrams · radiographs · histology · samples preserved (DNA from femur/teeth, bone marrow for ABO).</p>`,
    sources: ['FO-01 through FO-10'],
    jumpToDiagram: 'FO-01'
  },
  {
    id: 'LAQ-4.2', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank-Inspired',
    question: 'Describe estimation of time since death from skeletal remains. Mention physical, chemical, and serological tests.',
    answer: `<h4>★ Methods (5 categories)</h4>
<ol>
<li>Gross examination of bones + state of soft tissues</li>
<li>Stage of healing in case of fracture</li>
<li>Physical tests (UV fluorescence · specific gravity)</li>
<li>Chemical tests (nitrogen · amino acids)</li>
<li>Serological tests (benzidine · precipitin · gel diffusion)</li>
</ol>
<h4>1. Gross Examination</h4>
<ul><li>Recent bones (&lt; 3 yr) — soft tissue (ligaments, tendons, cartilage) attached; periosteum visible; putrid smell; bones SOFT, MOIST, GREASY to touch</li>
<li>3-10 yr in coffin → all soft tissues removed (shorter in India due to climate)</li>
<li>Old bones (on sawing) — light, loss of organic matter + collagen; ★ "SANDWICH effect" — central hard ring + porous outer + inner layers</li>
<li>Ends of long bones become fragile + brittle from wear and tear</li></ul>
<h4>2. Stage of Fracture Healing (5 stages)</h4>
<ol>
<li><strong>Hematoma formation</strong> (0-7 days) — clot + fibrin meshwork</li>
<li><strong>Granulation tissue</strong> (2-3 weeks) — vessels + fibroblasts + osteoblasts</li>
<li><strong>Callus formation</strong> (3-12 weeks) — woven bone; ★ first sign of union on X-ray ~3 weeks</li>
<li><strong>Remodelling</strong> — woven → lamellar bone (slow)</li>
<li><strong>Modelling</strong> — strengthening at periosteal + endosteal surfaces</li>
</ol>
<h4>★ 3. Physical Tests</h4>
<h5>UV Fluorescence</h5>
<ul><li>Recent bone — entire cut surface fluoresces SILVERY-BLUE under UV</li>
<li>With age, outer rim + rim around marrow lose fluorescence first</li>
<li>Progressively deepens toward centre</li>
<li>★ Total time for complete loss = <strong>100-150 years</strong></li></ul>
<h5>Specific Gravity</h5>
<ul><li>Fresh bone SG = <strong>2.0</strong></li>
<li>★ SG <strong>1.7</strong> = forensically significant</li>
<li>★ SG <strong>1.2</strong> = FOSSIL bone</li></ul>
<h4>★ 4. Chemical Tests</h4>
<h5>Nitrogen Content</h5>
<ul><li>Fresh bone: <strong>4.5%</strong></li>
<li>~ <strong>4%</strong> → death interval up to <strong>100 yr</strong></li>
<li>~ <strong>2.5%</strong> → ~ <strong>350 yr</strong></li></ul>
<h5>Amino Acid Analysis</h5>
<ul><li>Fresh bone has 15 AAs (mostly collagen-derived)</li>
<li>Glycine + alanine predominant</li>
<li>★ <strong>Proline + hydroxyproline</strong> (collagen-specific) <strong>VANISH in ~50 years</strong></li></ul>
<h4>★ 5. Chemical / Serological Tests</h4>
<table><tr><th>Test</th><th>Detects</th><th>Time limit</th></tr>
<tr><td>★ Benzidine / Kastle-Meyer</td><td>Blood</td><td>★ Up to 100 yr</td></tr>
<tr><td>Precipitation / gel diffusion (Coombs)</td><td>Species-specific protein</td><td>5-10 yr</td></tr>
<tr><td>Precipitin test</td><td>Human origin</td><td>5-10 yr</td></tr></table>
<h4>Integrating the Findings</h4>
<p>Time since death from skeleton requires INTEGRATION of multiple tests. No single test is reliable.</p>
<ul><li>If soft tissue + putrid smell + benzidine + + nitrogen 4.5% + UV bright fluorescence → recent (within months)</li>
<li>If no soft tissue + bone light + sandwich effect + UV partial loss + nitrogen 3-4% → decades old (50-100 yr)</li>
<li>If skeletal + UV no fluorescence + nitrogen &lt; 2.5% + proline absent + SG &lt; 1.7 → very old (&gt; 200 yr)</li>
<li>SG 1.2 + no benzidine + no nitrogen → FOSSIL (not forensic case)</li></ul>`,
    sources: ['FO-10'],
    jumpToDiagram: 'FO-10'
  },
  {
    id: 'LAQ-4.3', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank-Inspired',
    question: 'A complete adult skeleton is brought for examination. Describe how you would estimate sex, age, stature, and race from this skeleton.',
    answer: `<h4>"Big Four" Approach</h4>
<p>With a complete skeleton, all 4 of the "Big Four" can be determined with high accuracy.</p>
<h4>★ SEX (100% accuracy with entire skeleton)</h4>
<h5>Pelvis (most dimorphic, 95% alone)</h5>
<ul><li>Pelvic inlet: ♂ heart · ♀ circular/oval</li>
<li>Sub-pubic angle: ♂ 70-75° "V" · ♀ 90-100° "U"</li>
<li>Greater sciatic notch: ♂ narrow + deep · ♀ wide + shallow</li>
<li>Obturator foramen: ♂ oval · ♀ triangular</li>
<li>Phenice criteria: ventral arc + sub-pubic concavity + medial ischiopubic ramus → female</li></ul>
<h5>Skull (92% alone)</h5>
<ul><li>Forehead: ♂ steep · ♀ vertical rounded</li>
<li>Supra-orbital margin: ♂ rounded · ♀ sharp</li>
<li>Mastoid: ♂ prominent · ♀ smooth</li>
<li>Palate: ♂ U · ♀ parabola</li>
<li>Cranial capacity: ♂ 1500-1550 cc · ♀ 1350-1400 cc</li></ul>
<h5>Mandible</h5>
<ul><li>Angle: ♂ everted · ♀ inverted · Chin: ♂ square · ♀ round</li></ul>
<h5>Sternum</h5>
<ul><li>Ashley&apos;s rule: total length &gt; 149 mm = ♂</li>
<li>Hyrtl&apos;s law: manubrium-corpus index &lt; 50 = ♂</li></ul>
<h5>Long bones</h5>
<ul><li>Femur head Ø, length, bicondylar breadth (Krogman cutoffs)</li>
<li>Humerus head Ø, length</li></ul>
<h4>★ AGE</h4>
<h5>Ossification (Galstaun) — if young adult</h5>
<ul><li>Femur head fuses ♀ 14-15 · ♂ 16-19 yr</li>
<li>Lower femur appearance: 36 wk IU (live-birth marker)</li>
<li>Triradiate cartilage fuses ♀ 13-14 · ♂ 15-16</li>
<li>Clavicle sternal end fuses 20-22 yr (last to fuse)</li></ul>
<h5>Skull Sutures (McKern-Stewart)</h5>
<ul><li>Metopic 2-4 yr · Basal 18-20 yr · Sagittal 30-40 · Coronal + Lambdoid 40-50 · Sphenotemporal 50-60 · Parietomastoid + Masto-occipital 80-90 yr</li></ul>
<h5>Sternum Fusions</h5>
<ul><li>★ Xiphoid + body: 40 yr · Manubrium + body: 60 yr</li></ul>
<h5>Pubic Symphysis</h5>
<ul><li>Todd 10 phases (18-19 to 50+ yr) OR McKern-Stewart 3 components</li>
<li>Score → age table</li></ul>
<h5>Mandible</h5>
<ul><li>Old age — alveolar absorption · mental foramen near upper border · angle ~140°</li></ul>
<h5>Histology</h5>
<ul><li>Rai equation: Age = osteons + 8.3</li></ul>
<h4>★ STATURE</h4>
<ul><li>Measure each long bone on Hepburn osteometric board (maximum length)</li>
<li>Apply Indian MF: Femur × 3.7 (Nat) · Tibia × 4.48 · Humerus × 5.3 · Radius × 6.9</li>
<li>Add 2.5-4 cm soft-tissue allowance</li>
<li>Cross-check with skull × 8 · mandible × 16 · clavicle × 11.1</li>
<li>Multiple bones → averaging improves accuracy</li></ul>
<h4>★ RACE</h4>
<h5>Cephalic Index (best method)</h5>
<ul><li>Dolichocephalic 70-75 — Negroes / Aryans</li>
<li>Mesaticephalic 75-80 — Europeans / Chinese</li>
<li>Brachycephalic 80-85 — Mongolians</li></ul>
<h5>Skull Morphology</h5>
<ul><li>Caucasoid — rounded shape, narrow nasal, sharp nasal margin</li>
<li>Negroid — narrow + elongated, flat sagittal, WIDE nasal, GUTTERED nasal margin</li>
<li>Mongoloid — SQUARE skull, very WIDE face, arched sagittal</li></ul>
<h5>Femur Anterior Curvature (Stewart 1962)</h5>
<ul><li>Black: STRAIGHTER · White: BOWED FORWARD · American Indian: GREATEST curve</li></ul>
<h5>Race Indices</h5>
<ul><li>Crural (tibia/femur)</li><li>Intermembral</li><li>Humero-femoral</li></ul>
<h4>Documentation</h4>
<p>Photographs · measurements (osteometric board) · drawings · radiographs · histology · DNA sample (femur or tooth).</p>
<p>★ Best practice: use MULTIPLE methods for each parameter; report findings as a RANGE not single value; clearly state confidence level.</p>`,
    sources: ['FO-01 through FO-10'],
    jumpToDiagram: 'FO-03'
  }
];

return {
  chapterNumber: 4,
  chapterTitle: 'Forensic Osteology',
  prereqs: [
    { term: 'Forensic osteology', meaning: 'Sub-specialty of forensic medicine dealing with examination + assessment of human skeleton for identification, cause, and manner of death.' },
    { term: '"Big Four"', meaning: 'Sex · Age · Stature · Race — the primary forensic questions about skeletal remains.' },
    { term: 'Krogman&apos;s hierarchy', meaning: 'Sexing accuracy: entire skeleton 100% · pelvis+skull 98% · pelvis 95% · skull 92% · long bones 80%.' },
    { term: 'Haversian system / osteon', meaning: 'Structural unit of compact bone. Central canal + concentric lamellae + osteocytes. ★ Larger diameter in humans than animals.' },
    { term: 'Precipitin test', meaning: 'Antigen-antibody test confirming human bone origin. Positive up to 5-10 years.' },
    { term: 'Rai equation', meaning: 'Age = osteons + 8.3. Histological age estimation from osteon count.' },
    { term: 'Ashley&apos;s rule', meaning: 'Total midline sternum length ♂ &gt; 149 mm · ♀ &lt; 149 mm.' },
    { term: 'Hyrtl&apos;s law', meaning: 'Manubrium-corpus index (manubrium × 100 / body): ♂ &lt; 50 · ♀ &gt; 50.' },
    { term: 'Phenice criteria (1969)', meaning: '3 female-positive pubic features: ventral arc + sub-pubic concavity + medial ischiopubic ramus narrow/crest-like.' },
    { term: 'Sub-pubic angle', meaning: '♂ narrow V 70-75° · ♀ wide U 90-100°. Most distinctive pelvic sex feature.' },
    { term: 'Cephalic index', meaning: 'C.I. = (max breadth × 100) ÷ (max length of skull). Race determination.' },
    { term: 'Dolichocephalic', meaning: 'CI 70-75 — long-headed — Negroes, pure Aryans, Aborigines.' },
    { term: 'Mesaticephalic', meaning: 'CI 75-80 — medium-headed — Europeans, Chinese.' },
    { term: 'Brachycephalic', meaning: 'CI 80-85 — short-headed — Mongolians.' },
    { term: 'Karl Pearson formula', meaning: 'Stature regression for Europeans (Caucasians).' },
    { term: 'Trotter &amp; Gleser', meaning: 'Stature regression for Americans (Black and White separate formulae).' },
    { term: 'Pan formula', meaning: 'Indian MF — Bengal, Bihar, Orissa residents.' },
    { term: 'Nat formula', meaning: 'Indian MF — Uttar Pradesh residents.' },
    { term: 'Shah &amp; Siddiqui', meaning: 'Indian MF — Punjab residents.' },
    { term: 'Hepburn osteometric board', meaning: 'Standard tool for measuring maximum long-bone length in stature regression.' },
    { term: 'Soft-tissue allowance', meaning: '2.5-4 cm added to bone-derived stature for heel-to-vertex tissue thickness.' },
    { term: 'Todd&apos;s 10 phases', meaning: '1920 — pubic symphysis age estimation 18-19 yr (Phase 1) to 50+ (Phase 10).' },
    { term: 'McKern-Stewart components', meaning: '1957 — 3 pubic symphysis components (dorsal demi-face · ventral demi-face · symphyseal rim), each scored 0-5.' },
    { term: 'Basal suture', meaning: 'Spheno-occipital suture fuses 18-20 yr. Useful late-adolescent age marker.' },
    { term: 'Anterior fontanelle', meaning: 'Closes 1.5-2 yr. Posterior 6-8 mo. Lateral + occipital within 2 mo.' },
    { term: 'Triradiate cartilage', meaning: 'Hipbone acetabular cartilage. Fuses ♀ 13-14 · ♂ 15-16 yr.' },
    { term: 'Lower femur ossification', meaning: '★ Appears 36 weeks intrauterine — used as evidence of live birth.' },
    { term: 'Sandwich effect', meaning: 'On sawing old bone: central hard ring + porous outer + inner layers — loss of organic matter.' },
    { term: 'UV fluorescence test', meaning: 'Recent bone fluoresces silvery-blue. Complete loss in 100-150 yr.' },
    { term: 'Benzidine / Kastle-Meyer', meaning: 'Blood detection. Positive on bone up to 100 yr.' },
    { term: 'Pachymeningitis hemorrhagica', meaning: '(See Ch 11) Chronic SDH with repeated bleeds — not osteology but cross-references.' },
    { term: '5 fracture-healing stages', meaning: 'Hematoma → Granulation → Callus (3 wk on X-ray) → Remodelling → Modelling.' },
    { term: 'Specific gravity', meaning: 'Fresh bone 2.0 · SG 1.7 forensically significant · SG 1.2 = fossil.' },
    { term: 'Nitrogen content', meaning: 'Fresh 4.5% · ~4% at 100 yr · ≤2.5% at 350 yr.' },
    { term: 'Proline + hydroxyproline', meaning: 'Collagen-specific amino acids. Vanish in ~50 years.' }
  ],
  diagrams: [
    { id: 'FO-01', title: 'Forensic Osteology — Master Overview', shortTitle: 'Master Overview', svg: SVG_FO01,
      prereqs: [{term:'10 questions',meaning:'Bone? Human? Sex? Age? Stature? Race? Identity? TSD? COD? Manner of separation?'},{term:'Big Four',meaning:'Sex · Age · Stature · Race.'},{term:'Krogman hierarchy',meaning:'100 / 98 / 95 / 92 / 80 %.'}],
      nodes: nodeList(['fo-overview','fo-10qs','fo-krogman','fo-bigfour','fo-other-bones','fo-tools']),
      mcqs: MCQS['FO-01']
    },
    { id: 'FO-02', title: 'Bone or Not? Human or Animal?', shortTitle: 'Bone ID + Human/Animal', svg: SVG_FO02,
      prereqs: [{term:'Haversian system',meaning:'Osteon = structural unit; larger in humans.'},{term:'Precipitin test',meaning:'Human origin; 5-10 yr window.'},{term:'Rai equation',meaning:'Age = osteons + 8.3.'}],
      nodes: nodeList(['fo-boneornot','fo-humananimal','fo-haversian','fo-precipitin','fo-cartilage-tooth']),
      mcqs: MCQS['FO-02']
    },
    { id: 'FO-03', title: '★ Sex from Bones — Krogman&apos;s Hierarchy', shortTitle: 'Sex from Bones ★', svg: SVG_FO03,
      prereqs: [{term:'Krogman 100/98/95/92/80',meaning:'Skeleton/pelvis+skull/pelvis/skull/long bones.'},{term:'Pelvis = best single bone',meaning:'95% — childbirth adaptation.'},{term:'Ashley + Hyrtl',meaning:'Sternum sex rules.'},{term:'Skeleton weight',meaning:'♂ 4.5 kg · ♀ 2.75 kg.'}],
      nodes: nodeList(['fo-sex-overview','fo-krogman-table','fo-general-skel','fo-femur-sex','fo-sternum-sex','fo-clav-scap-sex']),
      mcqs: MCQS['FO-03']
    },
    { id: 'FO-04', title: '★ Sex from SKULL &amp; MANDIBLE', shortTitle: 'Sex Skull + Mandible', svg: SVG_FO04,
      prereqs: [{term:'Cranial capacity',meaning:'♂ 1500-1550 · ♀ 1350-1400 cc.'},{term:'Palate ♀ parabola',meaning:'♂ U-shape.'},{term:'Supra-orbital margin ♀ sharp',meaning:'♂ rounded.'},{term:'Mandible angle ♂ everted',meaning:'♀ inverted. Chin ♂ square (V); ♀ round (U).'},{term:'Stature mandible × 16',meaning:'Symphysis to angle.'}],
      nodes: nodeList(['fo-skull-sex','fo-mandible-sex']),
      mcqs: MCQS['FO-04']
    },
    { id: 'FO-05', title: '★ Sex from PELVIS — Best Single Bone (95%)', shortTitle: 'Sex from Pelvis ★', svg: SVG_FO05,
      prereqs: [{term:'Sub-pubic angle',meaning:'♂ narrow V 70-75° · ♀ wide U 90-100°.'},{term:'Greater sciatic notch',meaning:'♂ narrow/deep · ♀ wide/shallow.'},{term:'Obturator foramen',meaning:'♂ oval · ♀ triangular.'},{term:'Phenice 3 criteria',meaning:'Ventral arc, sub-pubic concavity, medial ischiopubic ramus → ♀.'}],
      nodes: nodeList(['fo-pelvis-overview','fo-pelvis-articulated','fo-hipbone','fo-phenice','fo-indices']),
      mcqs: MCQS['FO-05']
    },
    { id: 'FO-06', title: 'Age from Bones — Ossification (Galstaun)', shortTitle: 'Age — Ossification', svg: SVG_FO06,
      prereqs: [{term:'Lower femur 36 wk IU',meaning:'Live birth marker.'},{term:'Triradiate cartilage',meaning:'♀ 13-14 · ♂ 15-16 yr fusion.'},{term:'Sternum xiphoid 40 yr',meaning:'Manubrium 60 yr.'},{term:'Clavicle last to fuse',meaning:'20-22 yr (sternal end).'}],
      nodes: nodeList(['fo-age-methods','fo-femur-age','fo-humerus-age','fo-tibia-fibula','fo-rad-ulna','fo-sternum-age','fo-hipbone-age']),
      mcqs: MCQS['FO-06']
    },
    { id: 'FO-07', title: '★ Age from Skull Sutures &amp; Pubic Symphysis', shortTitle: 'Sutures + Pubic Symphysis', svg: SVG_FO07,
      prereqs: [{term:'Anterior fontanelle 1.5-2 yr',meaning:'Post 6-8 mo · Lat/Occ 2 mo.'},{term:'Basal suture 18-20 yr',meaning:'Sagittal 30-40 · Coronal+Lambdoid 40-50.'},{term:'Todd 10 phases',meaning:'18-19 (Ph 1) to 50+ (Ph 10).'},{term:'McKern-Stewart 3 components',meaning:'Dorsal/ventral/rim, scored 0-5.'}],
      nodes: nodeList(['fo-fontanelle','fo-sutures','fo-suture-terms','fo-todd-phases','fo-mckern-stewart','fo-mandible-age']),
      mcqs: MCQS['FO-07']
    },
    { id: 'FO-08', title: '★ Stature from Long Bones — Multiplication Factors', shortTitle: 'Stature ★', svg: SVG_FO08,
      prereqs: [{term:'Karl Pearson Europeans',meaning:'Trotter-Gleser Americans.'},{term:'Indian MFs',meaning:'Pan (Bengal) · Nat (UP) · Shah-Siddiqui (Punjab) · Singh-Shoha · Mehta-Thomas.'},{term:'Hepburn osteometric board',meaning:'Standard maximum length.'},{term:'2.5-4 cm allowance',meaning:'Soft tissue (heel to vertex).'},{term:'Skull ×8 · Mandible ×16 · Clavicle ×11.1',meaning:'Alternative formulae.'}],
      nodes: nodeList(['fo-stature-intro','fo-formulae','fo-mf-table','fo-stature-skull','fo-fragmented','fo-osteometric']),
      mcqs: MCQS['FO-08']
    },
    { id: 'FO-09', title: '★ Race from Bones — Cephalic Index &amp; Skull Morphology', shortTitle: 'Race + Cephalic Index ★', svg: SVG_FO09,
      prereqs: [{term:'Skull = best (90-95%)',meaning:'Krogman-Iscan.'},{term:'Cephalic index',meaning:'Dolicho 70-75 (Negro/Aryan) · Mesati 75-80 (Europe/Chinese) · Brachy 80-85 (Mongol).'},{term:'Femur curvature',meaning:'Black straighter · White bowed · Am Indian most curved.'}],
      nodes: nodeList(['fo-race-intro','fo-cephalic','fo-race-skull','fo-race-pelvis','fo-race-femur','fo-race-indices','fo-race-other']),
      mcqs: MCQS['FO-09']
    },
    { id: 'FO-10', title: 'Time Since Death · Cause · Manner of Separation', shortTitle: 'TSD + COD + Manner', svg: SVG_FO10,
      prereqs: [{term:'UV fluorescence 100-150 yr',meaning:'Recent silvery-blue.'},{term:'Benzidine 100 yr',meaning:'Blood detection.'},{term:'Nitrogen 4.5% fresh',meaning:'4% at 100 yr · 2.5% at 350 yr.'},{term:'Proline 50 yr',meaning:'Collagen amino acid vanish.'},{term:'SG 2.0 → 1.2 fossil',meaning:'1.7 forensically significant.'},{term:'5 healing stages',meaning:'Hematoma → granulation → callus (3 wk) → remodelling → modelling.'}],
      nodes: nodeList(['fo-tsd-gross','fo-uv','fo-chemical','fo-specific-gravity','fo-fracture-healing','fo-cause-manner']),
      mcqs: MCQS['FO-10']
    }
  ],
  diffTables: DIFF_TABLES,
  subjectiveQs: SUBJ,
  highYield: [
    '<strong>★ Krogman&apos;s sexing hierarchy:</strong> Entire skeleton 100% · Pelvis+skull 98% · Pelvis 95% · Skull 92% · Long bones 80%',
    '<strong>★ PELVIS = best single bone for sex</strong> (95%) — childbirth adaptation',
    '<strong>★ Big Four:</strong> Sex · Age · Stature · Race',
    '<strong>★ Skeleton weight:</strong> ♂ 4.5 kg · ♀ 2.75 kg',
    '<strong>★ Sub-pubic angle:</strong> ♂ narrow V 70-75° · ♀ wide U 90-100°',
    '<strong>★ Greater sciatic notch:</strong> ♂ narrow + deep · ♀ wide + shallow',
    '<strong>★ Obturator foramen:</strong> ♂ large + oval · ♀ small + triangular',
    '<strong>★ Pelvic inlet:</strong> ♂ heart-shaped · ♀ circular/oval',
    '<strong>★ Phenice criteria (1969):</strong> ventral arc · sub-pubic concavity · medial ischiopubic ramus (narrow/crest-like) — present in ♀',
    '<strong>★ Female skull:</strong> vertical rounded "infantile" forehead · ★ SHARP supra-orbital margin · ★ parabolic palate',
    '<strong>★ Male skull:</strong> steep forehead · rounded supra-orbital margin · U-shaped palate · prominent occipital protuberance',
    '<strong>★ Cranial capacity:</strong> ♂ 1500-1550 cc · ♀ 1350-1400 cc',
    '<strong>★ Skull:skeleton weight ratio:</strong> ♂ 1:8 · ♀ 1:6',
    '<strong>★ Mandible angle:</strong> ♂ everted (V chin) · ♀ inverted (U chin)',
    '<strong>★ Ashley&apos;s rule (sternum):</strong> total length ♂ &gt; 149 mm · ♀ &lt; 149 mm',
    '<strong>★ Hyrtl&apos;s law (sternum):</strong> manubrium-corpus index ♂ &lt; 50 · ♀ &gt; 50',
    '<strong>★ Stature from skull</strong> = height × 8 · <strong>★ from mandible</strong> = length × 16 · <strong>★ from clavicle</strong> = length × 11.1',
    '<strong>★ Karl Pearson</strong> — Europeans · <strong>Trotter-Gleser</strong> — Americans (Black + White separate)',
    '<strong>★ Indian MFs:</strong> Pan (Bengal/Bihar/Orissa) · Nat (UP) · Shah-Siddiqui (Punjab) · Singh-Shoha · Mehta-Thomas (Mysore)',
    '<strong>★ Hepburn osteometric board</strong> — measures maximum long-bone length',
    '<strong>★ Soft-tissue allowance:</strong> add 2.5-4 cm to bone-derived stature',
    '<strong>★ Fragmented long bones:</strong> Muller · Steele · Steele-McKern formulae',
    '<strong>★ Cephalic Index:</strong> Dolichocephalic 70-75 (Negroes/Aryans/Aborigines) · Mesaticephalic 75-80 (Europeans/Chinese) · Brachycephalic 80-85 (Mongolians)',
    '<strong>★ Negroid skull:</strong> narrow + elongated · FLAT sagittal · WIDE nasal opening · troughed/guttered lower nasal margin',
    '<strong>★ Mongoloid skull:</strong> SQUARE · very WIDE face · arched sagittal · rounded orbit',
    '<strong>★ Femur curvature:</strong> Black straighter · White bowed forward · American Indian most curved',
    '<strong>★ Race indices:</strong> Crural (tibia/femur) · Intermembral · Humero-femoral',
    '<strong>★ Anterior fontanelle:</strong> closes 1.5-2 yr · Posterior 6-8 mo · Lateral+Occipital within 2 mo',
    '<strong>★ Basal suture (spheno-occipital):</strong> fuses 18-20 yr',
    '<strong>★ Sagittal suture:</strong> 30-40 yr · <strong>Coronal + Lambdoid:</strong> 40-50 yr',
    '<strong>★ Triradiate cartilage:</strong> fuses ♀ 13-14 · ♂ 15-16 yr',
    '<strong>★ Xiphoid + body:</strong> 40 yr · <strong>Manubrium + body:</strong> 60 yr',
    '<strong>★ Lower femur ossification</strong> appears at 36 weeks IU — live birth marker',
    '<strong>★ Todd 10 phases</strong> + <strong>McKern-Stewart 3 components</strong> for pubic symphysis age',
    '<strong>★ Haversian canals LARGER</strong> in humans than animals',
    '<strong>★ Precipitin test:</strong> positive on bone up to 5-10 yr',
    '<strong>★ Benzidine/Kastle-Meyer:</strong> positive on bone up to 100 yr',
    '<strong>★ Rai equation:</strong> Age = osteons + 8.3',
    '<strong>★ UV fluorescence:</strong> recent bone silvery-blue · total loss 100-150 yr',
    '<strong>★ Nitrogen content:</strong> fresh 4.5% · ~4% at 100 yr · ≤2.5% at 350 yr',
    '<strong>★ Proline + hydroxyproline:</strong> vanish in ~50 years',
    '<strong>★ Specific gravity:</strong> fresh 2.0 · 1.7 forensically significant · 1.2 = fossil',
    '<strong>★ 5 fracture-healing stages:</strong> Hematoma → Granulation → Callus (3 wk on X-ray) → Remodelling → Modelling',
    '<strong>★ "Sandwich effect"</strong> on sawing old bone: central hard ring + porous layers',
    'See subject-pinned IPC↔BNS Quick-Reference Card + Subject Subjective Q-Bank'
  ]
};
})();

