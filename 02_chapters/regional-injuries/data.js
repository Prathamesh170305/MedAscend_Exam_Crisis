/* ===================================================================
   Medascend FMT — Chapter 11: Regional Injuries (Head + Spine + Trunk)
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

/* === SVG DIAGRAMS RI-01 .. RI-10 === */

const SVG_RI01 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Regional Injuries — Master Overview</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Head injury classification (GCS) · 4 anatomical regions · 8 testable LAQ topics</text>

<g data-node-id="ri-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🧠 REGIONAL INJURIES — Scope</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810"><strong>HEAD INJURY is the single highest-yield LAQ topic</strong> in FMT — covers scalp, skull, meninges (extradural / subdural / subarachnoid / intracerebral), and brain (concussion, contusion, DAI, laceration). This chapter also covers spine, chest, abdomen, pelvis, and bone injuries.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-gcs"><rect class="body-white" x="60" y="240" width="730" height="280" rx="14"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="280" class="t-nlg">📊 Head Injury — GCS Classification</text><text x="80" y="325" class="t-keylbl">Mild / Minor:</text><text x="220" y="325" class="t-keyval">GCS 13–15 · LOC &lt; 30 min</text><text x="80" y="355" class="t-keylbl">Moderate:</text><text x="190" y="355" class="t-keyval">GCS 9–12 · LOC 30 min – 6 h</text><text x="80" y="385" class="t-keylbl">Severe:</text><text x="160" y="385" class="t-keyval">GCS 8 or less · LOC &gt; 6 h</text><text x="80" y="420" class="t-keylbl">GCS components (3):</text><text x="80" y="445" class="t-keyval">• <strong>Eye opening (E)</strong> — 1 to 4</text><text x="80" y="470" class="t-keyval">• <strong>Verbal response (V)</strong> — 1 to 5</text><text x="80" y="495" class="t-keyval">• <strong>Motor response (M)</strong> — 1 to 6 · Total = E+V+M (max 15, min 3)</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-regions"><rect class="body-white" x="810" y="240" width="730" height="280" rx="14"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gGreen)"/><text x="830" y="280" class="t-nlg">🎯 4 Anatomical Regions of Head Injury</text><text x="830" y="325" class="t-keylbl">1️⃣ Scalp:</text><text x="950" y="325" class="t-keyval">abrasion · contusion · laceration · avulsion · sub-galeal hematoma</text><text x="830" y="365" class="t-keylbl">2️⃣ Skull:</text><text x="940" y="365" class="t-keyval">5 vault + 5 basilar fracture patterns</text><text x="830" y="395" class="t-keyval">(linear · depressed · comminuted · pond · gutter · ring · hinge)</text><text x="830" y="430" class="t-keylbl">3️⃣ Meninges:</text><text x="990" y="430" class="t-keyval">EDH · SDH · SAH · IVH</text><text x="830" y="450" class="t-keyval">(4 intracranial hemorrhages — high-yield)</text><text x="830" y="485" class="t-keylbl">4️⃣ Brain:</text><text x="930" y="485" class="t-keyval">concussion · contusion · DAI · laceration</text><text x="830" y="510" class="t-keyval">(primary vs secondary brain injury · coup vs contre-coup)</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-topics"><rect x="60" y="540" width="900" height="280" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="510" y="580" class="t-nlg" text-anchor="middle">🎯 8 High-Yield LAQ Topics in Ch 11</text><text x="90" y="615" class="t-body">1. <strong>5 types of skull fracture</strong> + mechanisms + age estimation (2 LAQs in Q-bank)</text><text x="90" y="640" class="t-body">2. <strong>Head injury</strong> + 4 intracranial hemorrhages (EDH · SDH · SAH · IVH)</text><text x="90" y="665" class="t-body">3. <strong>Extradural hematoma</strong> — middle meningeal artery · lucid interval · biconvex CT</text><text x="90" y="690" class="t-body">4. <strong>Subdural hematoma</strong> — bridging veins · crescentic CT · acute/subacute/chronic + dating</text><text x="90" y="715" class="t-body">5. <strong>Subarachnoid hemorrhage</strong> — berry aneurysm · traumatic vs spontaneous</text><text x="90" y="740" class="t-body">6. <strong>Coup vs Contre-coup</strong> contusion · diffuse axonal injury (DAI)</text><text x="90" y="765" class="t-body">7. <strong>Punch-drunk syndrome</strong> (chronic traumatic encephalopathy in boxers)</text><text x="90" y="790" class="t-body">8. <strong>Spinal cord</strong> injuries (whiplash · pithing) · chest · abdomen · pelvic injuries</text><circle class="ic" cx="940" cy="558" r="14"/><text class="t-info" x="940" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-primary-secondary"><rect x="980" y="540" width="560" height="280" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1260" y="580" class="t-nlg" text-anchor="middle">⚖️ Primary vs Secondary Brain Injury</text><text x="1000" y="615" class="t-body" font-weight="700">PRIMARY (at impact):</text><text x="1000" y="640" class="t-body">• Diffuse axonal injury (DAI)</text><text x="1000" y="665" class="t-body">• Cerebral concussion</text><text x="1000" y="690" class="t-body">• Cerebral contusions and lacerations</text><text x="1000" y="725" class="t-body" font-weight="700">SECONDARY (delayed):</text><text x="1000" y="748" class="t-body">• Intracranial hematoma · cerebral edema</text><text x="1000" y="773" class="t-body">• Cerebral ischemia · herniation</text><text x="1000" y="798" class="t-body">• Infection · epilepsy · hydrocephalus</text><circle class="ic" cx="1520" cy="558" r="14"/><text class="t-info" x="1520" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-pyqs"><rect x="60" y="840" width="1480" height="220" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="880" class="t-nlg" text-anchor="middle">📋 Chapter 11 PYQ Anchor Map</text><text x="90" y="915" class="t-body"><strong>★ NEET-PG 2018 Q11</strong> — Patient&apos;s finger blackening + intern/ortho PG priority → <strong>compartment syndrome / vascular compromise</strong></text><text x="90" y="940" class="t-body"><strong>★ NEET-PG 2020 Q10</strong> — Manhole fall + perineal injury + blood at meatus → <strong>bulbar urethra rupture</strong> (straddle injury)</text><text x="90" y="970" class="t-body"><strong>Subjective Q-bank (Ch 11):</strong> 2 LAQs (Skull fractures · Head Injury) + 4 SAQs (Skull fractures · Punch-drunk · SDH · Skull fracture classify)</text><text x="90" y="1000" class="t-body">Lucid interval — clinical hallmark of <strong>EDH</strong> · also present in some SDH · DIFFERENTIATING feature in head-injury LAQs</text><text x="90" y="1030" class="t-body">5 skull fracture types: <strong>linear · depressed · comminuted · pond (infant) · gutter (bullet) · diastatic · ring · hinge (motorcyclist&apos;s)</strong></text><circle class="ic" cx="1510" cy="858" r="14"/><text class="t-info" x="1510" y="864" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_RI02 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Soft Tissue Injuries — Scalp · Face · Ear · Eye</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Sub-galeal hematoma · Black eye mechanism · Spectacle hematoma · Battle sign</text>

<g data-node-id="ri-scalp"><rect class="body-white" x="60" y="110" width="730" height="320" rx="14"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 165 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gBlue)"/><text x="80" y="150" class="t-nlg">👤 SCALP Injuries (6 types)</text><text x="80" y="195" class="t-keyval">1. <strong>Abrasion</strong> — superficial · grazes after fall · hair masks</text><text x="80" y="220" class="t-keyval">2. <strong>Contusion (bruise)</strong> — may be MOBILE (gravitates)</text><text x="80" y="245" class="t-keyval">3. <strong>Laceration</strong> — gapes due to galea aponeurotica; bleeds heavily</text><text x="80" y="270" class="t-keyval">4. <strong>Incised wound</strong> — sharp weapon · clean margins</text><text x="80" y="295" class="t-keyval">5. <strong>Avulsion</strong> — scalp torn off; commonest in machinery accidents</text><text x="80" y="320" class="t-keyval">6. <strong>Sub-galeal hematoma</strong> — beneath galea aponeurotica</text><text x="80" y="360" class="t-keylbl" fill="#A14B47">★ Ectopic / Migratory Contusions:</text><text x="80" y="385" class="t-keyval">• Anterior scalp bruise → gravitates → "<strong>black eye</strong>"</text><text x="80" y="410" class="t-keyval">• Temporal scalp bruise → gravitates → "<strong>battle sign</strong>" (behind ear)</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-face"><rect class="body-white" x="810" y="110" width="730" height="320" rx="14"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 165 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gGreen)"/><text x="830" y="150" class="t-nlg">😶 FACE Injuries (7 types)</text><text x="830" y="195" class="t-keyval">1. Abrasion · 2. Contusion · 3. Laceration</text><text x="830" y="220" class="t-keyval">4. Incised wound · 5. Chop wound</text><text x="830" y="245" class="t-keyval">6. Penetrating wound · 7. <strong>Fracture of facial bones</strong></text><text x="830" y="280" class="t-keylbl">Facial fractures of forensic interest:</text><text x="830" y="305" class="t-keyval">• <strong>Le Fort I</strong> — horizontal maxillary</text><text x="830" y="330" class="t-keyval">• <strong>Le Fort II</strong> — pyramidal (nasal + maxilla)</text><text x="830" y="355" class="t-keyval">• <strong>Le Fort III</strong> — craniofacial dysjunction (severe)</text><text x="830" y="385" class="t-keyval">• Mandible · zygoma · nasal bone fractures common</text><text x="830" y="410" class="t-keyval">★ Forensic importance: bite marks · dental fractures</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-ear"><rect class="body-white" x="60" y="450" width="490" height="240" rx="14"/><path d="M 74,450 H 536 A 14,14 0 0 1 550,464 V 505 H 60 V 464 A 14,14 0 0 1 74,450 Z" fill="url(#gOrange)"/><text x="80" y="490" class="t-nlg">👂 EAR Injuries</text><text x="80" y="530" class="t-keyval">1. Abrasion · 2. Contusion · 3. Laceration</text><text x="80" y="555" class="t-keyval">4. Cut / chop · 5. Avulsion from root</text><text x="80" y="580" class="t-keyval">6. <strong>Hematoma of pinna</strong> ("cauliflower ear" — boxers, wrestlers)</text><text x="80" y="610" class="t-keyval">7. <strong>Tympanic membrane rupture</strong> from</text><text x="80" y="630" class="t-keyval">hard blunt impact → causes deafness</text><text x="80" y="660" class="t-keyval">★ Bleeding from ear = basal skull fracture (battle sign too)</text><circle class="ic" cx="540" cy="468" r="14"/><text class="t-info" x="540" y="474" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-eye"><rect class="body-white" x="570" y="450" width="490" height="240" rx="14"/><path d="M 584,450 H 1046 A 14,14 0 0 1 1060,464 V 505 H 570 V 464 A 14,14 0 0 1 584,450 Z" fill="url(#gRed)"/><text x="590" y="490" class="t-nlg">👁️ EYE Injuries</text><text x="590" y="530" class="t-keyval">• <strong>Blunt force</strong> → injury to: cornea · iris · lens · vitreous hemorrhage · retinal detachment · traumatic cataract</text><text x="590" y="580" class="t-keyval">• <strong>Penetrating injury</strong> — sharp weapon · GSR</text><text x="590" y="605" class="t-keyval">• <strong>Subconjunctival hemorrhage</strong></text><text x="590" y="635" class="t-keyval">• ★ <strong>BLACK EYE</strong> (periorbital hematoma)</text><text x="590" y="660" class="t-keyval">— see next box for 3 mechanisms</text><circle class="ic" cx="1050" cy="468" r="14"/><text class="t-info" x="1050" y="474" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-teeth"><rect class="body-white" x="1080" y="450" width="460" height="240" rx="14"/><path d="M 1094,450 H 1526 A 14,14 0 0 1 1540,464 V 505 H 1080 V 464 A 14,14 0 0 1 1094,450 Z" fill="url(#gPurple)"/><text x="1090" y="490" class="t-nlg">🦷 TEETH Injuries</text><text x="1090" y="530" class="t-keyval">1. Fracture / fracture-dislocation of teeth</text><text x="1090" y="560" class="t-keyval">2. Contusion + laceration of gums</text><text x="1090" y="590" class="t-keyval">3. Fracture of alveolar margin</text><text x="1090" y="625" class="t-keyval">★ Dental records useful for identity (Ch 3)</text><text x="1090" y="650" class="t-keyval">★ Bite marks preserved for DNA</text><circle class="ic" cx="1530" cy="468" r="14"/><text class="t-info" x="1530" y="474" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-blackeye"><rect x="60" y="710" width="900" height="280" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="510" y="750" class="t-nlg" text-anchor="middle">⚫ BLACK EYE — 3 Mechanisms of Production</text><text x="90" y="785" class="t-body">★ <strong>Black eye (periorbital hematoma)</strong> = bruising of eye lid / periorbital area.</text><text x="90" y="815" class="t-body">Three mechanisms of production:</text><text x="90" y="845" class="t-body">1️⃣ <strong>Direct trauma</strong> to the eye (commonest — punch, blunt blow)</text><text x="90" y="875" class="t-body">2️⃣ <strong>Gravitating / shifting</strong> of blood DOWNWARDS from an injury on the FRONTAL scalp</text><text x="90" y="905" class="t-body">3️⃣ <strong>Blood entering orbit from behind / above</strong> due to fracture of ORBITAL FLOOR</text><text x="90" y="925" class="t-body">    (commonly fracture of floor of anterior cranial fossa)</text><text x="90" y="960" class="t-body" font-style="italic">★ Forensic point: presence of black eye does NOT prove direct assault — exclude fracture + scalp gravitation</text><circle class="ic" cx="940" cy="728" r="14"/><text class="t-info" x="940" y="734" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-spectacle"><rect x="980" y="710" width="560" height="280" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="750" class="t-nlg" text-anchor="middle">👓 SPECTACLE HEMATOMA ★</text><text x="1000" y="790" class="t-body"><strong>= "Raccoon eyes" = black eye on BOTH sides</strong></text><text x="1000" y="815" class="t-body">= hemorrhage in soft tissue around both eyes in eyelids</text><text x="1000" y="855" class="t-body" font-weight="700" fill="#FFD9A8">★ STRONGLY SUGGESTS:</text><text x="1000" y="885" class="t-body" font-weight="700" fill="#FFD9A8">FRACTURE OF BASE OF SKULL</text><text x="1000" y="915" class="t-body">(usually fracture of floor of anterior cranial fossa)</text><text x="1000" y="950" class="t-body">★ Other basilar fracture clue:</text><text x="1000" y="975" class="t-body" font-style="italic">"Battle sign" = bruising behind ear (mastoid)</text><circle class="ic" cx="1520" cy="728" r="14"/><text class="t-info" x="1520" y="734" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1010" width="1480" height="50" rx="10" fill="url(#gOrange)"/><text x="800" y="1042" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">🎯 Spectacle hematoma (raccoon eyes) = basal skull fracture · Battle sign (mastoid bruise) = basal skull fracture · sub-galeal hematoma = beneath galea</text>
</svg>`;

const SVG_RI03 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Skull Anatomy &amp; Mechanism of Fracture</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Two tables + diploe · Rowbotham&apos;s hypothesis · Holbourn&apos;s · Struck-hoop · Puppe&apos;s rule</text>

<g data-node-id="ri-skull-anatomy"><rect class="body-white" x="60" y="110" width="730" height="280" rx="14"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 165 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gBlue)"/><text x="80" y="150" class="t-nlg">🧠 SKULL — Forensic Anatomy</text><text x="80" y="195" class="t-keyval"><strong>Calvaria</strong> (cranium) = bones of head minus face.</text><text x="80" y="220" class="t-keyval"><strong>Calva (skullcap)</strong> = roof / vault · rest = <strong>base of skull</strong>.</text><text x="80" y="255" class="t-keylbl">Adult skull = 2 parallel tables:</text><text x="80" y="280" class="t-keyval">• <strong>Outer table</strong> — twice as thick as inner</text><text x="80" y="305" class="t-keyval">• <strong>Inner table</strong> — fragile</text><text x="80" y="330" class="t-keyval">• <strong>Diploë</strong> — soft cancellous bone between them</text><text x="80" y="360" class="t-keylbl">Thickness varies:</text><text x="80" y="380" class="t-keyval">Frontal / parietal 6–10 mm · Temporal <strong>4 mm</strong> (thinnest) · Occipital midline ≥ 15 mm</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-rowbotham"><rect class="body-white" x="810" y="110" width="730" height="280" rx="14"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 165 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gGreen)"/><text x="830" y="150" class="t-nlg">⚙️ ROWBOTHAM&apos;S Hypothesis ★</text><text x="830" y="195" class="t-keyval">Skull fracture is caused by:</text><text x="830" y="230" class="t-keylbl">1. DIRECT force fracture:</text><text x="830" y="255" class="t-keyval">e.g., blow over head with iron rod. Two sub-mechanisms:</text><text x="830" y="280" class="t-keyval">• <strong>Local deformation</strong> (struck-hoop analogy)</text><text x="830" y="305" class="t-keyval">• <strong>General deformation</strong> (compression in one plane → bulge in another)</text><text x="830" y="340" class="t-keylbl">2. INDIRECT violence:</text><text x="830" y="365" class="t-keyval">• Fall from height landing on feet / buttock → <strong>ring fracture</strong></text><text x="830" y="385" class="t-keyval">• Blow on chin → fracture of cribriform plate</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-struckhoop"><rect class="body-white" x="60" y="410" width="730" height="280" rx="14"/><path d="M 74,410 H 776 A 14,14 0 0 1 790,424 V 465 H 60 V 424 A 14,14 0 0 1 74,410 Z" fill="url(#gOrange)"/><text x="80" y="450" class="t-nlg">🎯 STRUCK-HOOP Analogy ★</text><text x="80" y="495" class="t-keyval">When focal force impacts skull:</text><text x="80" y="520" class="t-keyval">• Skull tries to bend inward at point of impact</text><text x="80" y="545" class="t-keyval">• Adult skull is INCOMPRESSIBLE</text><text x="80" y="570" class="t-keyval">• Compensatory <strong>BULGING in OTHER areas</strong></text><text x="80" y="595" class="t-keyval">— resembles "struck hoop"</text><text x="80" y="625" class="t-keyval">• If force exceeds elastic limit, BOTH intruded</text><text x="80" y="650" class="t-keyval">(inward bend) AND extruded (bulged) areas fracture</text><text x="80" y="675" class="t-keyval">★ Infant skull = MORE ELASTIC → distorts more without fracture</text><circle class="ic" cx="770" cy="428" r="14"/><text class="t-info" x="770" y="434" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-holbourn"><rect class="body-white" x="810" y="410" width="730" height="280" rx="14"/><path d="M 824,410 H 1526 A 14,14 0 0 1 1540,424 V 465 H 810 V 424 A 14,14 0 0 1 824,410 Z" fill="url(#gPurple)"/><text x="830" y="450" class="t-nlg">🌀 HOLBOURN&apos;S Hypothesis — Brain Injury</text><text x="830" y="495" class="t-keyval">Mechanism of brain injury (3 components):</text><text x="830" y="525" class="t-keyval">1. <strong>Compression</strong> — units forced together</text><text x="830" y="550" class="t-keyval">2. <strong>Tension</strong> — units pulled apart</text><text x="830" y="575" class="t-keyval">3. <strong>Shear strain</strong> — adjacent strata slide laterally</text><text x="830" y="600" class="t-keyval">("playing cards" displacement)</text><text x="830" y="640" class="t-keyval">★ <strong>Rotational</strong> component is necessary to damage brain.</text><text x="830" y="665" class="t-keyval">Pure linear acceleration alone CANNOT damage brain</text><text x="830" y="685" class="t-keyval">(brain can distort but not compress).</text><circle class="ic" cx="1530" cy="428" r="14"/><text class="t-info" x="1530" y="434" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-puppe"><rect x="60" y="710" width="900" height="300" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="510" y="750" class="t-nlg" text-anchor="middle">📐 PUPPE&apos;S RULE — Sequence of Fractures ★</text><text x="90" y="790" class="t-body">When 2 or more separate fractures occur from SUCCESSIVE impacts and meet each other:</text><text x="90" y="825" class="t-body">★ The <strong>LATER fracture</strong> (second) will <strong>TERMINATE</strong> in the EARLIER fracture (first).</text><text x="90" y="860" class="t-body">★ Termination of second fracture line interrupts cranial distortion</text><text x="90" y="885" class="t-body">— this distortion is what precedes fracturing.</text><text x="90" y="920" class="t-body" font-style="italic">★ Forensic application:</text><text x="90" y="945" class="t-body">In multiple-blow homicides, Puppe&apos;s rule allows <strong>RECONSTRUCTION of SEQUENCE</strong></text><text x="90" y="970" class="t-body">of blows — older fracture stops the newer one.</text><circle class="ic" cx="940" cy="728" r="14"/><text class="t-info" x="940" y="734" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-spiderweb"><rect x="980" y="710" width="560" height="300" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1260" y="750" class="t-nlg" text-anchor="middle">🕸️ SPIDER-WEB FRACTURE</text><text x="1000" y="790" class="t-body">Severe LOCAL force causing BOTH:</text><text x="1000" y="815" class="t-body">• Focal deformation → depressed fracture</text><text x="1000" y="840" class="t-body">• General deformation → radial fissures</text><text x="1000" y="880" class="t-body" font-weight="700">★ COMBINATION = "SPIDER-WEB" pattern</text><text x="1000" y="910" class="t-body">= central depressed + radial linear fractures</text><text x="1000" y="945" class="t-body">= synonym for non-displaced</text><text x="1000" y="970" class="t-body" font-style="italic">comminuted fracture (mosaic)</text><circle class="ic" cx="1520" cy="728" r="14"/><text class="t-info" x="1520" y="734" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1030" width="1480" height="50" rx="10" fill="url(#gOrange)"/><text x="800" y="1062" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">🎯 Temporal bone = thinnest (4 mm) · Rowbotham (skull) · Holbourn (brain — rotation needed) · Puppe&apos;s rule = sequence of blows</text>
</svg>`;

const SVG_RI04 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ Vault of Skull — 8 Fracture Patterns</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Linear · Depressed (signature) · Comminuted · Pond · Gutter · Diastatic · Perforating · Cut</text>

<g data-node-id="ri-vault-overview"><rect class="nbcr" x="60" y="110" width="1480" height="90" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🔨 FRACTURES OF VAULT — 8 Types</text><text x="90" y="178" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">★ Classified by appearance + mechanism. Each pattern points to a distinct causative weapon / circumstance. <strong>LAQ topic in Q-bank — must know all 8 with mechanism.</strong></text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-linear"><rect class="body-white" x="60" y="220" width="365" height="260" rx="14"/><path d="M 74,220 H 411 A 14,14 0 0 1 425,234 V 270 H 60 V 234 A 14,14 0 0 1 74,220 Z" fill="url(#gBlue)"/><text x="80" y="255" class="t-nlg">1. LINEAR (Fissured)</text><text x="80" y="295" class="t-keyval">★ Most COMMON type</text><text x="80" y="320" class="t-keyval">• May involve outer / inner / both tables</text><text x="80" y="345" class="t-keyval">• Straight or curved fissure</text><text x="80" y="375" class="t-keyval">• In CHILDREN: may extend into suture line → diastatic fracture</text><text x="80" y="420" class="t-keylbl" fill="#A14B47">Mechanism:</text><text x="80" y="445" class="t-keyval">Blunt force over a large area</text><text x="80" y="465" class="t-keyval">(general deformation)</text><circle class="ic" cx="405" cy="238" r="14"/><text class="t-info" x="405" y="244" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-depressed"><rect class="body-white" x="445" y="220" width="365" height="260" rx="14"/><path d="M 459,220 H 796 A 14,14 0 0 1 810,234 V 270 H 445 V 234 A 14,14 0 0 1 459,220 Z" fill="url(#gRed)"/><text x="465" y="255" class="t-nlg">2. DEPRESSED ★</text><text x="465" y="295" class="t-keyval">= "<strong>SIGNATURE FRACTURE</strong>"</text><text x="465" y="320" class="t-keyval">= "fracture à la signature"</text><text x="465" y="350" class="t-keyval">• Fractured bone is DRIVEN INWARD</text><text x="465" y="375" class="t-keyval">• Pattern resembles SHAPE of weapon</text><text x="465" y="400" class="t-keyval">(hammer head, brick, rod tip etc.)</text><text x="465" y="430" class="t-keylbl" fill="#A14B47">Mechanism:</text><text x="465" y="455" class="t-keyval">Severe LOCAL force, small contact area</text><circle class="ic" cx="790" cy="238" r="14"/><text class="t-info" x="790" y="244" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-comminuted"><rect class="body-white" x="830" y="220" width="365" height="260" rx="14"/><path d="M 844,220 H 1181 A 14,14 0 0 1 1195,234 V 270 H 830 V 234 A 14,14 0 0 1 844,220 Z" fill="url(#gOrange)"/><text x="850" y="255" class="t-nlg">3. COMMINUTED</text><text x="850" y="295" class="t-keyval">• Bone broken into <strong>multiple pieces</strong></text><text x="850" y="320" class="t-keyval">(fragmentation)</text><text x="850" y="355" class="t-keyval">★ Non-displaced comminuted = SPIDER-WEB / MOSAIC pattern</text><text x="850" y="400" class="t-keyval">= depressed + radial fissures</text><text x="850" y="430" class="t-keylbl" fill="#A14B47">Mechanism:</text><text x="850" y="455" class="t-keyval">Very severe local force</text><circle class="ic" cx="1175" cy="238" r="14"/><text class="t-info" x="1175" y="244" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-pond"><rect class="body-white" x="1215" y="220" width="325" height="260" rx="14"/><path d="M 1229,220 H 1526 A 14,14 0 0 1 1540,234 V 270 H 1215 V 234 A 14,14 0 0 1 1229,220 Z" fill="url(#gGreen)"/><text x="1221" y="255" class="t-nlg">4. POND (Indented)</text><text x="1221" y="295" class="t-keyval">★ Occurs ONLY in INFANTS</text><text x="1221" y="325" class="t-keyval">• Dent / dimple-like depression</text><text x="1221" y="350" class="t-keyval">• Resembles concave pond</text><text x="1221" y="380" class="t-keylbl" fill="#A14B47">Mechanism:</text><text x="1221" y="405" class="t-keyval">Pliable infant bones distort</text><text x="1221" y="430" class="t-keyval">WITHOUT actual fracture</text><text x="1221" y="455" class="t-keyval" font-style="italic">(like squeezing a ping-pong ball)</text><circle class="ic" cx="1530" cy="238" r="14"/><text class="t-info" x="1530" y="244" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-gutter"><rect class="body-white" x="60" y="500" width="365" height="260" rx="14"/><path d="M 74,500 H 411 A 14,14 0 0 1 425,514 V 550 H 60 V 514 A 14,14 0 0 1 74,500 Z" fill="url(#gPurple)"/><text x="80" y="535" class="t-nlg">5. GUTTER ★</text><text x="80" y="575" class="t-keyval">• <strong>PART thickness</strong> of bone removed</text><text x="80" y="600" class="t-keyval">→ forms a GUTTER / FURROW</text><text x="80" y="625" class="t-keyval">in the skull bone</text><text x="80" y="660" class="t-keylbl" fill="#A14B47">Mechanism:</text><text x="80" y="685" class="t-keyval">★ <strong>GLANCING / TANGENTIAL</strong></text><text x="80" y="710" class="t-keyval">strike — classically a <strong>GLANCING BULLET</strong></text><text x="80" y="735" class="t-keyval">(see Ch 10 firearms)</text><circle class="ic" cx="405" cy="518" r="14"/><text class="t-info" x="405" y="524" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-diastatic"><rect class="body-white" x="445" y="500" width="365" height="260" rx="14"/><path d="M 459,500 H 796 A 14,14 0 0 1 810,514 V 550 H 445 V 514 A 14,14 0 0 1 459,500 Z" fill="url(#gBlue)"/><text x="465" y="535" class="t-nlg">6. DIASTATIC (Sutural)</text><text x="465" y="575" class="t-keyval">• Fracture along the line of SKULL SUTURES</text><text x="465" y="610" class="t-keyval">(e.g., coronal suture, sagittal)</text><text x="465" y="640" class="t-keylbl" fill="#A14B47">Mechanism:</text><text x="465" y="665" class="t-keyval">• Occurs in <strong>CHILDREN + YOUNG ADULTS</strong></text><text x="465" y="690" class="t-keyval">— NON-FUSED sutures separate</text><text x="465" y="715" class="t-keyval">★ Linear fracture in children may</text><text x="465" y="735" class="t-keyval">extend INTO suture → diastatic</text><circle class="ic" cx="790" cy="518" r="14"/><text class="t-info" x="790" y="524" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-perforating"><rect class="body-white" x="830" y="500" width="365" height="260" rx="14"/><path d="M 844,500 H 1181 A 14,14 0 0 1 1195,514 V 550 H 830 V 514 A 14,14 0 0 1 844,500 Z" fill="url(#gRed)"/><text x="850" y="535" class="t-nlg">7. PERFORATING</text><text x="850" y="575" class="t-keyval">• Skull PERFORATED by sharp</text><text x="850" y="600" class="t-keyval">pointed object OR <strong>BULLET</strong></text><text x="850" y="635" class="t-keyval">• Involves <strong>BOTH</strong> outer + inner tables</text><text x="850" y="670" class="t-keylbl" fill="#A14B47">Mechanism:</text><text x="850" y="695" class="t-keyval">Shape + size of injury</text><text x="850" y="720" class="t-keyval">corresponds to offending agent</text><text x="850" y="745" class="t-keyval">(see firearm entry wound, Ch 10)</text><circle class="ic" cx="1175" cy="518" r="14"/><text class="t-info" x="1175" y="524" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-cut"><rect class="body-white" x="1215" y="500" width="325" height="260" rx="14"/><path d="M 1229,500 H 1526 A 14,14 0 0 1 1540,514 V 550 H 1215 V 514 A 14,14 0 0 1 1229,500 Z" fill="url(#gGrey)"/><text x="1221" y="535" class="t-nlg">8. CUT Fracture</text><text x="1221" y="575" class="t-keyval">• Caused by <strong>SHARP weapons</strong></text><text x="1221" y="600" class="t-keyval">— sword · chopper · machete</text><text x="1221" y="635" class="t-keyval">• If BOTH tables involved:</text><text x="1221" y="660" class="t-keyval">clean-cut gap = thickness of blade</text><text x="1221" y="695" class="t-keyval">• If only outer table:</text><text x="1221" y="720" class="t-keyval">= "partial cut fracture"</text><circle class="ic" cx="1530" cy="518" r="14"/><text class="t-info" x="1530" y="524" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-vault-complications"><rect x="60" y="780" width="1480" height="220" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="800" y="820" class="t-nlg" text-anchor="middle">⚠️ 12 COMPLICATIONS of Skull Fracture</text><text x="90" y="855" class="t-body">1. Injury to <strong>brain</strong> · 2. <strong>Intracranial hemorrhage</strong> (EDH / SDH / SAH / ICH)</text><text x="90" y="880" class="t-body">3. Anterior cranial fossa fracture → involves frontal · ethmoidal · sphenoidal air sinuses</text><text x="90" y="905" class="t-body">4. <strong>Intracranial infections</strong> — meningitis · encephalitis · 5. Cranial pneumatocele / pneumocranium</text><text x="90" y="930" class="t-body">6. Cranial nerve injury · 7. <strong>Traumatic epilepsy</strong> · 8. CSF otorrhea / rhinorrhea</text><text x="90" y="955" class="t-body">9. Coma · 10. <strong>Cerebral edema</strong> · 11. Raised intracranial pressure · 12. Death</text><circle class="ic" cx="1510" cy="798" r="14"/><text class="t-info" x="1510" y="804" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1020" width="1480" height="50" rx="10" fill="url(#gGrey)"/><text x="800" y="1052" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">🎯 SIGNATURE = depressed (weapon shape) · POND = infants only · GUTTER = glancing bullet · DIASTATIC = children, suture · SPIDER-WEB = comminuted</text>
</svg>`;

const SVG_RI05 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ Base of Skull (Basilar) Fractures</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Ring · Hinge (Motorcyclist&apos;s) · Longitudinal · Secondary · Hutchinson</text>

<g data-node-id="ri-basilar-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚖️ BASILAR FRACTURES — 5 Patterns</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Vault OR base of skull may be fractured by <strong>indirect violence</strong> — force applied AWAY from skull but transmitted. Classic example: <strong>fall from height landing on feet / buttock</strong> → ring fracture; <strong>blow on side of head</strong> → hinge fracture.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-ring"><rect class="body-white" x="60" y="240" width="730" height="280" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gRed)"/><text x="80" y="280" class="t-nlg">1️⃣ RING FRACTURE ★</text><text x="80" y="320" class="t-keyval">• Fissured fracture <strong>AROUND FORAMEN MAGNUM</strong></text><text x="80" y="345" class="t-keyval">• Located in POSTERIOR cranial fossa</text><text x="80" y="380" class="t-keylbl" fill="#A14B47">★ MECHANISM (2 scenarios):</text><text x="80" y="405" class="t-keyval">1. <strong>FALL FROM HEIGHT</strong> landing on <strong>FEET OR BUTTOCK</strong></text><text x="80" y="430" class="t-keyval">    Force transmitted upward through spinal column</text><text x="80" y="455" class="t-keyval">2. Severe impact on VERTEX — drives skull DOWNWARD</text><text x="80" y="475" class="t-keyval">    on spinal column</text><text x="80" y="505" class="t-keyval">★ Spinal column "punches" upward around foramen magnum</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-hinge"><rect class="body-white" x="810" y="240" width="730" height="280" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gRed)"/><text x="830" y="280" class="t-nlg">2️⃣ HINGE FRACTURE ★ ★</text><text x="830" y="320" class="t-keyval">• Linear fracture across <strong>FLOOR of MIDDLE</strong></text><text x="830" y="345" class="t-keyval"><strong>CRANIAL FOSSA</strong> — runs ear to ear</text><text x="830" y="370" class="t-keyval">• Follows petrous temporal / greater wing of sphenoid</text><text x="830" y="395" class="t-keyval">into pituitary fossa on both sides</text><text x="830" y="425" class="t-keyval">★ <strong>Separates base of skull into 2 halves</strong></text><text x="830" y="455" class="t-keylbl" fill="#A14B47">★ MECHANISM + Famous Synonym:</text><text x="830" y="480" class="t-keyval">• HEAVY BLOW / IMPACT on SIDE of head</text><text x="830" y="505" class="t-keyval">★ Also called "<strong>MOTORCYCLIST&apos;S FRACTURE</strong>"</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-other-basilar"><rect class="body-white" x="60" y="540" width="730" height="240" rx="14"/><path d="M 74,540 H 776 A 14,14 0 0 1 790,554 V 595 H 60 V 554 A 14,14 0 0 1 74,540 Z" fill="url(#gOrange)"/><text x="80" y="580" class="t-nlg">3️⃣ 4️⃣ 5️⃣ Other Basilar Fractures</text><text x="80" y="620" class="t-keylbl">3. LINEAR / FISSURED basilar:</text><text x="80" y="645" class="t-keyval">most common basilar pattern — linear extension from vault</text><text x="80" y="675" class="t-keylbl">4. LONGITUDINAL:</text><text x="80" y="700" class="t-keyval">extends sagittally through base — petrous bone, often deafness</text><text x="80" y="730" class="t-keylbl">5. SECONDARY (Indirect):</text><text x="80" y="755" class="t-keyval">from forces transmitted — e.g., blow on chin → cribriform plate fracture</text><circle class="ic" cx="770" cy="558" r="14"/><text class="t-info" x="770" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-hutchinson"><rect class="body-white" x="810" y="540" width="730" height="240" rx="14"/><path d="M 824,540 H 1526 A 14,14 0 0 1 1540,554 V 595 H 810 V 554 A 14,14 0 0 1 824,540 Z" fill="url(#gPurple)"/><text x="830" y="580" class="t-nlg">🔬 HUTCHINSON FRACTURE ★</text><text x="830" y="620" class="t-keyval">• Fracture of the <strong>DISTAL RADIUS</strong> involving</text><text x="830" y="645" class="t-keyval">the styloid process (also called <strong>"chauffeur fracture"</strong>)</text><text x="830" y="680" class="t-keyval">★ Mechanism: forced ulnar deviation / direct blow</text><text x="830" y="705" class="t-keyval">on radial styloid — classically from a crank handle</text><text x="830" y="730" class="t-keyval">recoil (early automobile chauffeurs)</text><text x="830" y="760" class="t-keyval" font-style="italic">★ Note: distinct from Hutchinson&apos;s teeth (congenital syphilis)</text><circle class="ic" cx="1530" cy="558" r="14"/><text class="t-info" x="1530" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-basilar-signs"><rect x="60" y="800" width="1480" height="220" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="840" class="t-nlg" text-anchor="middle">🚨 Clinical Signs of BASILAR Fracture (5 key clues)</text><text x="90" y="875" class="t-body">1. ★ <strong>Spectacle hematoma / Raccoon eyes</strong> — bilateral periorbital bruising (anterior fossa fracture)</text><text x="90" y="900" class="t-body">2. ★ <strong>Battle sign</strong> — bruising behind ear over mastoid (middle / posterior fossa fracture)</text><text x="90" y="925" class="t-body">3. <strong>CSF rhinorrhea</strong> (anterior fossa) · <strong>CSF otorrhea</strong> (middle fossa, petrous temporal)</text><text x="90" y="950" class="t-body">4. <strong>Hemotympanum</strong> — blood behind tympanic membrane · bleeding from ear / nose</text><text x="90" y="975" class="t-body">5. <strong>Cranial nerve palsies</strong> — facial palsy (CN VII), deafness (CN VIII), olfactory loss (CN I)</text><circle class="ic" cx="1510" cy="818" r="14"/><text class="t-info" x="1510" y="824" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1030" width="1480" height="50" rx="10" fill="url(#gRed)"/><text x="800" y="1062" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⭐ RING fracture = fall on feet/buttock · HINGE fracture = "motorcyclist&apos;s" — blow on side of head · Spectacle hematoma + battle sign = basal #</text>
</svg>`;

const SVG_RI06 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Meninges Anatomy &amp; 4 Intracranial Hemorrhages</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Dura · Arachnoid · Pia · Epidural · Subdural · Subarachnoid · Intracerebral · Intraventricular</text>

<g data-node-id="ri-meninges"><rect class="nbcr" x="60" y="110" width="1480" height="130" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🧠 MENINGES — 3 Layers (outside to inside)</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">1. <strong>DURA MATER</strong> — outer layer attaches to skull (acts as internal periosteum). The <strong>meningeal arteries</strong> run between outer dura and skull. 2. <strong>ARACHNOID</strong> — thin vascular membrane. 3. <strong>PIA MATER</strong> — inseparable from brain.</text><text x="90" y="210" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Spaces: <strong>EPIDURAL</strong> (between dura + skull — meningeal arteries) · <strong>SUBDURAL</strong> (dura + arachnoid — <strong>BRIDGING VEINS</strong>, largest = great vein of Galen) · <strong>SUBARACHNOID</strong> (arachnoid + pia — CSF + cerebral arteries + cranial nerves)</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-edh-card"><rect class="body-white" x="60" y="260" width="365" height="380" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,260 H 411 A 14,14 0 0 1 425,274 V 310 H 60 V 274 A 14,14 0 0 1 74,260 Z" fill="url(#gRed)"/><text x="80" y="295" class="t-nlg">1️⃣ EXTRADURAL (EDH)</text><text x="80" y="335" class="t-keylbl">Space:</text><text x="155" y="335" class="t-keyval">Skull ↔ Dura</text><text x="80" y="365" class="t-keylbl">Source:</text><text x="155" y="365" class="t-keyval">★ <strong>Middle meningeal artery</strong></text><text x="80" y="390" class="t-keyval">(arterial bleed — most common)</text><text x="80" y="420" class="t-keylbl">Site:</text><text x="135" y="420" class="t-keyval">★ TEMPOROPARIETAL</text><text x="80" y="445" class="t-keyval">(thin temporal bone, 4 mm)</text><text x="80" y="475" class="t-keylbl">CT:</text><text x="115" y="475" class="t-keyval">★ <strong>BICONVEX / lens-shape</strong></text><text x="80" y="505" class="t-keylbl">Clinical:</text><text x="165" y="505" class="t-keyval">★ <strong>LUCID INTERVAL</strong></text><text x="80" y="530" class="t-keyval">→ ipsilateral fixed dilated pupil</text><text x="80" y="555" class="t-keyval">→ contralateral hemiparesis</text><text x="80" y="585" class="t-keylbl">Fatal volume:</text><text x="80" y="610" class="t-keyval">100 mL · clinical signs at 35 mL</text><text x="80" y="630" class="t-keyval" font-style="italic">★ NOT contre-coup</text><circle class="ic" cx="405" cy="278" r="14"/><text class="t-info" x="405" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-sdh-card"><rect class="body-white" x="445" y="260" width="365" height="380" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 459,260 H 796 A 14,14 0 0 1 810,274 V 310 H 445 V 274 A 14,14 0 0 1 459,260 Z" fill="url(#gOrange)"/><text x="465" y="295" class="t-nlg">2️⃣ SUBDURAL (SDH)</text><text x="465" y="335" class="t-keylbl">Space:</text><text x="540" y="335" class="t-keyval">Dura ↔ Arachnoid</text><text x="465" y="365" class="t-keylbl">Source:</text><text x="540" y="365" class="t-keyval">★ <strong>BRIDGING VEINS</strong></text><text x="465" y="390" class="t-keyval">(venous bleed — most common)</text><text x="465" y="420" class="t-keylbl">Site:</text><text x="520" y="420" class="t-keyval">★ Lateral aspect of</text><text x="465" y="445" class="t-keyval">cerebral hemisphere (commonest)</text><text x="465" y="475" class="t-keylbl">CT:</text><text x="500" y="475" class="t-keyval">★ <strong>CRESCENTIC</strong> / sickle-shape</text><text x="465" y="505" class="t-keylbl">Types (3):</text><text x="465" y="530" class="t-keyval">• Acute: &lt; 48–72 h</text><text x="465" y="555" class="t-keyval">• Subacute: 3–20 days</text><text x="465" y="580" class="t-keyval">• Chronic: &gt; 3 weeks (elderly, alcoholics)</text><text x="465" y="615" class="t-keyval" font-style="italic">★ Most common acute lesion in boxers</text><circle class="ic" cx="790" cy="278" r="14"/><text class="t-info" x="790" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-sah-card"><rect class="body-white" x="830" y="260" width="365" height="380" rx="14" stroke="#6B4F8E" stroke-width="3"/><path d="M 844,260 H 1181 A 14,14 0 0 1 1195,274 V 310 H 830 V 274 A 14,14 0 0 1 844,260 Z" fill="url(#gPurple)"/><text x="850" y="295" class="t-nlg">3️⃣ SUBARACHNOID (SAH)</text><text x="850" y="335" class="t-keylbl">Space:</text><text x="925" y="335" class="t-keyval">Arachnoid ↔ Pia</text><text x="850" y="365" class="t-keylbl">Source:</text><text x="930" y="365" class="t-keyval">Trauma OR ★ <strong>Berry</strong></text><text x="850" y="390" class="t-keyval"><strong>aneurysm</strong> (Circle of Willis)</text><text x="850" y="420" class="t-keylbl">★ MOST COMMON intracranial</text><text x="850" y="445" class="t-keyval">hemorrhage overall</text><text x="850" y="475" class="t-keylbl">CT:</text><text x="885" y="475" class="t-keyval">Blood in CSF cisterns / sulci</text><text x="850" y="505" class="t-keylbl">Clinical:</text><text x="940" y="505" class="t-keyval">★ "Thunderclap"</text><text x="850" y="530" class="t-keyval">headache · neck stiffness</text><text x="850" y="555" class="t-keyval">photophobia · LOC</text><text x="850" y="585" class="t-keylbl">★ Vertebral A. tear:</text><text x="850" y="610" class="t-keyval">basal SAH after neck blow</text><text x="850" y="635" class="t-keyval">(can be rapidly fatal)</text><circle class="ic" cx="1175" cy="278" r="14"/><text class="t-info" x="1175" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-ich-card"><rect class="body-white" x="1215" y="260" width="325" height="380" rx="14" stroke="#3D8B5B" stroke-width="3"/><path d="M 1229,260 H 1526 A 14,14 0 0 1 1540,274 V 310 H 1215 V 274 A 14,14 0 0 1 1229,260 Z" fill="url(#gGreen)"/><text x="1221" y="295" class="t-nlg">4️⃣ INTRACEREBRAL (ICH)</text><text x="1221" y="335" class="t-keylbl">Site:</text><text x="1275" y="335" class="t-keyval">Within brain</text><text x="1221" y="360" class="t-keyval">parenchyma</text><text x="1221" y="385" class="t-keyval">(parenchymatous</text><text x="1221" y="410" class="t-keyval">hemorrhage)</text><text x="1221" y="440" class="t-keylbl">Size:</text><text x="1280" y="440" class="t-keyval">2–5 cm</text><text x="1221" y="465" class="t-keyval">demarcated</text><text x="1221" y="495" class="t-keylbl">Causes:</text><text x="1221" y="520" class="t-keyval">• Traumatic (shearing)</text><text x="1221" y="545" class="t-keyval">• ★ <strong>Hypertension</strong></text><text x="1221" y="570" class="t-keyval">(non-trauma)</text><text x="1221" y="595" class="t-keyval">• AVM · spontaneous</text><text x="1221" y="620" class="t-keyval">• Bleeding into tumor</text><circle class="ic" cx="1530" cy="278" r="14"/><text class="t-info" x="1530" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-ivh"><rect x="60" y="660" width="900" height="200" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="510" y="700" class="t-nlg" text-anchor="middle">5️⃣ INTRAVENTRICULAR HEMORRHAGE (IVH)</text><text x="90" y="735" class="t-body">Bleeding into ventricular system. Usually arterial in origin.</text><text x="90" y="765" class="t-body">★ <strong>If IVH is the SOLE finding</strong> → suggests head striking firm object (fall-like injury).</text><text x="90" y="795" class="t-body">Causes: (i) Retrograde flow from SAH · (ii) Rupture of AVM in ventricle wall · (iii) ★ <strong>Berry aneurysm</strong></text><text x="90" y="820" class="t-body">of posterior communicating artery → bleeds into anterior horn of lateral ventricle.</text><text x="90" y="850" class="t-body">Brown/yellow ependyma + choroid plexus = OLD blood (hemosiderin / hematoidin deposits).</text><circle class="ic" cx="940" cy="678" r="14"/><text class="t-info" x="940" y="684" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-mostcommon"><rect x="980" y="660" width="560" height="200" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1260" y="700" class="t-nlg" text-anchor="middle">⭐ Frequency Ranking</text><text x="1000" y="735" class="t-body" font-weight="700">★ MOST COMMON intracranial hemorrhage =</text><text x="1000" y="760" class="t-body" font-weight="700" fill="#FFD9A8">SUBARACHNOID (SAH)</text><text x="1000" y="795" class="t-body">SDH more common than EDH</text><text x="1000" y="820" class="t-body">(SDH needs 35–100 mL · EDH needs 35 mL)</text><text x="1000" y="850" class="t-body" font-style="italic">★ Boxers acute lesion = SDH (never EDH — no fracture)</text><circle class="ic" cx="1520" cy="678" r="14"/><text class="t-info" x="1520" y="684" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-traumatic-vs-spontaneous"><rect x="60" y="880" width="1480" height="180" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="918" class="t-nlg" text-anchor="middle">⚖️ Traumatic vs Spontaneous (Pathological) Hemorrhage — Forensic Distinction</text><text x="90" y="955" class="t-body"><strong>TRAUMATIC:</strong> external injury · scalp contusion / fracture · convexity bleed · history of trauma · lucid interval</text><text x="90" y="980" class="t-body"><strong>SPONTANEOUS:</strong> no external injury · basal / deep · aneurysm / AVM / hypertension on CT angio · sudden collapse without history</text><text x="90" y="1010" class="t-body" font-style="italic">★ A <strong>TRAUMA may PRECIPITATE rupture of a pre-existing aneurysm</strong> — important medicolegal grey zone (mixed causation)</text><text x="90" y="1035" class="t-body">★ Pre-existing pathology is a defence consideration in alleged assault → fatal hemorrhage cases</text><circle class="ic" cx="1510" cy="898" r="14"/><text class="t-info" x="1510" y="904" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_RI07 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ EDH vs SDH — Deep Dive + SDH Dating</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">The two most-tested intracranial hemorrhages — high-yield LAQ comparison</text>

<g data-node-id="ri-edh-deep"><rect class="body-white" x="60" y="110" width="730" height="340" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 165 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gRed)"/><text x="80" y="150" class="t-nlg">🩸 EDH — Deep Dive (5 features)</text><text x="80" y="190" class="t-keylbl">1. Lucid Interval ★</text><text x="80" y="215" class="t-keyval">Brief consciousness recovery after initial LOC, then deterioration.</text><text x="80" y="240" class="t-keyval">Caused by hematoma slowly enlarging → raised ICP.</text><text x="80" y="270" class="t-keylbl">2. Contralateral paresis</text><text x="80" y="295" class="t-keyval">Hematoma compresses motor cortex on the IPSILATERAL side</text><text x="80" y="315" class="t-keyval">→ weakness on OPPOSITE (contralateral) side of body</text><text x="80" y="345" class="t-keylbl">3. Ipsilateral fixed-dilated pupil</text><text x="80" y="370" class="t-keyval">Uncus of temporal lobe compresses CN III on the SAME side</text><text x="80" y="395" class="t-keyval">→ pupillary fibres paralysed → dilated, non-reactive pupil</text><text x="80" y="425" class="t-keylbl">4. Coma + brainstem compression → DEATH</text><text x="80" y="445" class="t-keyval">downward displacement of cerebellar tonsils through foramen magnum</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-sdh-deep"><rect class="body-white" x="810" y="110" width="730" height="340" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 165 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gOrange)"/><text x="830" y="150" class="t-nlg">🩸 SDH — Deep Dive</text><text x="830" y="190" class="t-keylbl">Mechanism (Acute SDH):</text><text x="830" y="215" class="t-keyval">★ Change in velocity of head — acceleration / deceleration</text><text x="830" y="240" class="t-keyval">with a ROTATIONAL component</text><text x="830" y="265" class="t-keyval">→ gliding between dura and brain → bridging veins tear</text><text x="830" y="300" class="t-keylbl">Mobility:</text><text x="830" y="325" class="t-keyval">★ SDH is "MOBILE" — gravitates to LOWER side</text><text x="830" y="350" class="t-keyval">→ does NOT depend on site of force application (unlike EDH)</text><text x="830" y="385" class="t-keylbl">Chronic SDH (elderly / alcoholics):</text><text x="830" y="410" class="t-keyval">Brain atrophy → larger subdural space → free brain movement</text><text x="830" y="435" class="t-keyval">→ bridging vein rupture. Symptoms mimic dementia / schizophrenia.</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-sdh-causes"><rect class="body-white" x="60" y="470" width="730" height="260" rx="14"/><path d="M 74,470 H 776 A 14,14 0 0 1 790,484 V 525 H 60 V 484 A 14,14 0 0 1 74,470 Z" fill="url(#gBlue)"/><text x="80" y="510" class="t-nlg">📋 Causes of SDH (Trauma + Pathological)</text><text x="80" y="550" class="t-keylbl">1. TRAUMA (commonest):</text><text x="80" y="575" class="t-keyval">• Rupture of <strong>BRIDGING VEINS</strong> (most common)</text><text x="80" y="600" class="t-keyval">• Rupture of dural venous sinuses</text><text x="80" y="625" class="t-keyval">• Laceration / contusion of brain + dura</text><text x="80" y="660" class="t-keylbl">2. PATHOLOGICAL:</text><text x="80" y="685" class="t-keyval">• Rupture of aneurysm · Malformed blood vessels</text><text x="80" y="710" class="t-keyval">• Hypertensive bleed in superficial brain rupturing into subdural space</text><circle class="ic" cx="770" cy="488" r="14"/><text class="t-info" x="770" y="494" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-pachy"><rect class="body-white" x="810" y="470" width="730" height="260" rx="14"/><path d="M 824,470 H 1526 A 14,14 0 0 1 1540,484 V 525 H 810 V 484 A 14,14 0 0 1 824,470 Z" fill="url(#gPurple)"/><text x="830" y="510" class="t-nlg">🔬 PACHYMENINGITIS HEMORRHAGICA ★</text><text x="830" y="550" class="t-keyval">★ Chronic SDH with <strong>REPEATED hemorrhage</strong></text><text x="830" y="575" class="t-keyval">into the encapsulated hematoma</text><text x="830" y="605" class="t-keyval">★ Successive bleeds INCREASE volume of SDH</text><text x="830" y="630" class="t-keyval">→ progressive neurological symptoms over weeks</text><text x="830" y="660" class="t-keyval">★ Differential: bilateral chronic SDH from natural causes</text><text x="830" y="685" class="t-keyval">(traumatic usually unilateral)</text><text x="830" y="715" class="t-keyval" font-style="italic">★ Symptoms mistaken for schizophrenia / senile dementia</text><circle class="ic" cx="1530" cy="488" r="14"/><text class="t-info" x="1530" y="494" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-sdh-dating"><rect x="60" y="750" width="1480" height="320" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="788" class="t-nlg" text-anchor="middle">⏰ ★ SDH DATING TABLE — Gross + Microscopic Findings (LAQ topic)</text><text x="90" y="822" class="t-body" font-weight="700">★ Estimating the age of SDH is a high-yield LAQ skill — answers "how old is the injury?"</text><text x="90" y="855" class="t-body"><strong>24 hours:</strong> Fresh clot · intact RBCs · thin fibrin layer on both surfaces</text><text x="90" y="880" class="t-body"><strong>2–3 days:</strong> Intact RBCs · thin fibrin + early fibroblastic activity (dural side)</text><text x="90" y="905" class="t-body"><strong>4–5 days:</strong> RBCs lose contour · 2–5 layer NEOMEMBRANE on dural side</text><text x="90" y="930" class="t-body"><strong>5–8 days:</strong> Lysis of RBCs · clot liquefies · 12–14 fibroblast layers · visible on naked-eye</text><text x="90" y="955" class="t-body"><strong>10–11 days:</strong> Clot broken into islands · capillaries + fibrin strands · ★ <strong>siderophages</strong> appear (hemosiderin macrophages)</text><text x="90" y="980" class="t-body"><strong>15–17 days:</strong> Membrane = ¼ to ½ thickness of dura · undersurface covered</text><text x="90" y="1005" class="t-body"><strong>18–26 days:</strong> Large vessels · membrane = full thickness of dura · arachnoid side ½ thickness</text><text x="90" y="1030" class="t-body"><strong>1–3 months:</strong> Giant capillaries · secondary hemorrhage · <strong>HYALINIZATION</strong> begins</text><text x="90" y="1055" class="t-body"><strong>3–6 months:</strong> Fresh re-bleed common · hyalinised + thick + fibrous (looks like dura)</text><circle class="ic" cx="1510" cy="768" r="14"/><text class="t-info" x="1510" y="774" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_RI08 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Brain Injury — Concussion · Contusion · DAI · Coup-Contrecoup · Punch-Drunk</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Primary brain injuries — high-yield mechanism + autopsy + medicolegal pearls</text>

<g data-node-id="ri-concussion"><rect class="body-white" x="60" y="110" width="730" height="320" rx="14"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 165 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gBlue)"/><text x="80" y="150" class="t-nlg">🧠 CONCUSSION (Commotio cerebri)</text><text x="80" y="190" class="t-keyval"><strong>Definition (Trotter 1914):</strong> "<em>transient paralytic state</em></text><text x="80" y="215" class="t-keyval"><em>due to head injury — instantaneous onset, NO structural</em></text><text x="80" y="240" class="t-keyval"><em>cerebral injury, always followed by AMNESIA</em>"</text><text x="80" y="275" class="t-keylbl">Mechanism:</text><text x="80" y="300" class="t-keyval">Acceleration/deceleration of head at LOW levels</text><text x="80" y="325" class="t-keyval">→ neuronal physiology disrupted (no anatomic change)</text><text x="80" y="360" class="t-keylbl">Grading (3 grades):</text><text x="80" y="385" class="t-keyval">I = no LOC · II = LOC &lt; 5 min · III = LOC &gt; 5 min + amnesia &gt; 24 h</text><text x="80" y="410" class="t-keyval">★ Autopsy: NO visible damage (rarely punctate hemorrhages)</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-contusion"><rect class="body-white" x="810" y="110" width="730" height="320" rx="14"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 165 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gOrange)"/><text x="830" y="150" class="t-nlg">🩸 CONTUSION (Brain bruise)</text><text x="830" y="190" class="t-keyval">★ Circumscribed extravasation of blood in brain</text><text x="830" y="215" class="t-keyval">★ Cortex INTEGRITY MAINTAINED</text><text x="830" y="245" class="t-keyval">Caused by SHEARING forces at moment of impact</text><text x="830" y="270" class="t-keyval">Almost always associated with some SAH</text><text x="830" y="305" class="t-keylbl">Location ★:</text><text x="830" y="330" class="t-keyval">★ CREST of brain CONVOLUTIONS (gyri) facing dura</text><text x="830" y="355" class="t-keyval">★ CONE-shaped — BASE at dura, APEX in white matter</text><text x="830" y="390" class="t-keylbl">3 types:</text><text x="830" y="415" class="t-keyval">Contusion hemorrhage · Contusion necrosis · Contusion tear</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-coup"><rect class="body-white" x="60" y="450" width="730" height="280" rx="14" stroke="#3D8B5B" stroke-width="3"/><path d="M 74,450 H 776 A 14,14 0 0 1 790,464 V 505 H 60 V 464 A 14,14 0 0 1 74,450 Z" fill="url(#gGreen)"/><text x="80" y="490" class="t-nlg">⬅️ COUP Injury</text><text x="80" y="530" class="t-keyval">★ Injury at the <strong>SITE of impact</strong></text><text x="80" y="565" class="t-keylbl">Mechanism:</text><text x="80" y="590" class="t-keyval">• <strong>Stationary head</strong> struck by MOVING object</text><text x="80" y="615" class="t-keyval">(e.g., standing victim hit by iron rod)</text><text x="80" y="645" class="t-keyval">• Skull deforms locally → shear forces in brain UNDER</text><text x="80" y="670" class="t-keyval">  the deformed area</text><text x="80" y="695" class="t-keyval">★ Also called <strong>ACCELERATION injury</strong></text><circle class="ic" cx="770" cy="468" r="14"/><text class="t-info" x="770" y="474" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-contrecoup"><rect class="body-white" x="810" y="450" width="730" height="280" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 824,450 H 1526 A 14,14 0 0 1 1540,464 V 505 H 810 V 464 A 14,14 0 0 1 824,450 Z" fill="url(#gRed)"/><text x="830" y="490" class="t-nlg">➡️ CONTRE-COUP Injury</text><text x="830" y="530" class="t-keyval">★ Injury OPPOSITE to point of impact</text><text x="830" y="565" class="t-keylbl">Mechanism (★ DECELERATION injury):</text><text x="830" y="590" class="t-keyval">• <strong>Moving head</strong> strikes a STATIONARY object</text><text x="830" y="615" class="t-keyval">(e.g., person falls + skull hits ground)</text><text x="830" y="640" class="t-keyval">• Skull stops, but BRAIN continues briefly → hits the</text><text x="830" y="665" class="t-keyval">opposite inner surface of skull</text><text x="830" y="700" class="t-keyval">★ Coup injury MINIMAL, contre-coup EXTENSIVE</text><text x="830" y="720" class="t-keyval" font-style="italic">★ EDH is NOT contre-coup (it follows fracture site)</text><circle class="ic" cx="1530" cy="468" r="14"/><text class="t-info" x="1530" y="474" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-dai"><rect x="60" y="750" width="900" height="290" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="510" y="790" class="t-nlg" text-anchor="middle">🌀 DIFFUSE AXONAL INJURY (DAI) ★</text><text x="90" y="825" class="t-body"><strong>Mechanism:</strong> ANGULAR / ROTATIONAL acceleration-deceleration (Holbourn)</text><text x="90" y="850" class="t-body"><strong>Hallmark (microscopy):</strong> <strong>AXONAL SWELLING ("retraction balls")</strong> in:</text><text x="90" y="875" class="t-body">• Cerebral white matter · <strong>Corpus callosum</strong> · <strong>Upper brainstem</strong></text><text x="90" y="900" class="t-body" font-weight="700">★ Adams Classification (3 grades):</text><text x="90" y="925" class="t-body"><strong>Grade 1:</strong> Histological axonal injury in white matter, corpus callosum, brainstem, cerebellum</text><text x="90" y="950" class="t-body"><strong>Grade 2:</strong> Grade 1 + focal lesion in <strong>corpus callosum</strong></text><text x="90" y="975" class="t-body"><strong>Grade 3:</strong> Grade 1+2 + focal lesion in <strong>dorsolateral rostral brainstem</strong></text><text x="90" y="1010" class="t-body" font-style="italic">★ DAI = leading cause of persistent vegetative state after head injury</text><circle class="ic" cx="940" cy="768" r="14"/><text class="t-info" x="940" y="774" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-punchdrunk"><rect x="980" y="750" width="560" height="290" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1260" y="790" class="t-nlg" text-anchor="middle">🥊 PUNCH-DRUNK SYNDROME ★</text><text x="1000" y="825" class="t-body">= <strong>Chronic Traumatic Encephalopathy (CTE)</strong></text><text x="1000" y="850" class="t-body">= "Dementia pugilistica" — BOXERS</text><text x="1000" y="880" class="t-body" font-weight="700">★ Caused by REPEATED minor head blows</text><text x="1000" y="905" class="t-body"><strong>Acute boxing injury:</strong> commonest = SDH</text><text x="1000" y="925" class="t-body">(★ EDH RARE — no skull fracture in boxing)</text><text x="1000" y="960" class="t-body" font-weight="700">★ Chronic features:</text><text x="1000" y="985" class="t-body">• Slurred speech · defective memory</text><text x="1000" y="1010" class="t-body">• Slow thoughts · stiff limbs · ataxia</text><text x="1000" y="1030" class="t-body">• <strong>Parkinsonian dementia</strong> · unsteady gait</text><circle class="ic" cx="1520" cy="768" r="14"/><text class="t-info" x="1520" y="774" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_RI09 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Spine, Spinal Cord &amp; Neck Injuries</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">6 fracture mechanisms · whiplash · pithing · suicidal vs homicidal cut throat</text>

<g data-node-id="ri-spine-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🦴 SPINE — Common Sites</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">★ <strong>Thoraco-lumbar segment</strong> = COMMONEST site of spinal injury · followed by <strong>LOWER CERVICAL</strong> spine. Spinal fractures classified by MECHANISM of force application — 6 categories.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-spine-fracture"><rect class="body-white" x="60" y="240" width="730" height="380" rx="14"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="280" class="t-nlg">🦴 6 Mechanisms of Spinal Fracture</text><text x="80" y="320" class="t-keylbl">1. FLEXION injury:</text><text x="80" y="345" class="t-keyval">Compression fracture of vertebral body + dislocation</text><text x="80" y="380" class="t-keylbl">2. FLEXION-ROTATION:</text><text x="80" y="405" class="t-keyval">Fracture-dislocation (commonest "burst" pattern)</text><text x="80" y="440" class="t-keylbl">3. VERTICAL COMPRESSION:</text><text x="80" y="465" class="t-keyval">Vertebral body crushed into pieces (Jefferson fracture C1)</text><text x="80" y="500" class="t-keylbl">4. EXTENSION:</text><text x="80" y="525" class="t-keyval">Chip fracture of anterior rim of vertebra</text><text x="80" y="560" class="t-keylbl">5. DIRECT TRAUMA:</text><text x="80" y="585" class="t-keyval">Direct fracture / dislocation from external blow</text><text x="80" y="605" class="t-keylbl">6. INDIRECT TRAUMA:</text><text x="80" y="630" class="t-keyval">Transmitted force (fall from height landing on feet)</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-cord-injuries"><rect class="body-white" x="810" y="240" width="730" height="380" rx="14"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gGreen)"/><text x="830" y="280" class="t-nlg">🧠 7 Types of Spinal Cord Injury</text><text x="830" y="320" class="t-keyval">1. <strong>Concussion</strong> — temporary paralysis (48 h recovery)</text><text x="830" y="345" class="t-keyval">    ★ "RAILWAY SPINE" — common in train / motor collisions</text><text x="830" y="380" class="t-keyval">2. <strong>Compression</strong> — by bone fragment / hematoma</text><text x="830" y="410" class="t-keyval">3. <strong>★ PITHING</strong> — homicide method —</text><text x="830" y="430" class="t-keyval">fine needle inserted at nape of neck between base of skull</text><text x="830" y="450" class="t-keyval">+ upper cervical vertebra → death from cord transection</text><text x="830" y="485" class="t-keyval">4. <strong>Penetrating injury</strong> — bullet, stab</text><text x="830" y="510" class="t-keyval">5. <strong>Laceration</strong></text><text x="830" y="535" class="t-keyval">6. <strong>Transection</strong> — complete cord interruption</text><text x="830" y="570" class="t-keyval">7. <strong>★ WHIPLASH injury</strong> — see right →</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-whiplash"><rect class="body-white" x="60" y="640" width="730" height="200" rx="14"/><path d="M 74,640 H 776 A 14,14 0 0 1 790,654 V 695 H 60 V 654 A 14,14 0 0 1 74,640 Z" fill="url(#gRed)"/><text x="80" y="680" class="t-nlg">🚗 WHIPLASH Injury ★</text><text x="80" y="720" class="t-keyval">★ Sudden <strong>HYPERFLEXION then HYPEREXTENSION</strong> of spine</text><text x="80" y="745" class="t-keyval">WITHOUT fracture of spinal column</text><text x="80" y="775" class="t-keyval">Classic scenario: <strong>REAR-END motor vehicle collision</strong></text><text x="80" y="800" class="t-keyval">→ contusion / laceration of cervical cord</text><text x="80" y="825" class="t-keyval">→ neck pain · stiffness · radiculopathy · chronic disability</text><circle class="ic" cx="770" cy="658" r="14"/><text class="t-info" x="770" y="664" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-neck"><rect class="body-white" x="810" y="640" width="730" height="200" rx="14"/><path d="M 824,640 H 1526 A 14,14 0 0 1 1540,654 V 695 H 810 V 654 A 14,14 0 0 1 824,640 Z" fill="url(#gOrange)"/><text x="830" y="680" class="t-nlg">🫴 NECK Injuries (5 types)</text><text x="830" y="720" class="t-keyval">1. Contusion · 2. Abrasion · 3. Lacerated wound</text><text x="830" y="750" class="t-keyval">4. <strong>Incised / chop / cut throat</strong> (see DT-6)</text><text x="830" y="780" class="t-keyval">5. <strong>Ligature injury</strong> (hanging / strangulation — Ch 15)</text><text x="830" y="815" class="t-keyval">★ Pithing = special homicidal mechanism</text><circle class="ic" cx="1530" cy="658" r="14"/><text class="t-info" x="1530" y="664" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-cutthroat"><rect x="60" y="860" width="1480" height="220" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="900" class="t-nlg" text-anchor="middle">🔪 CUT-THROAT INJURY — Suicidal vs Homicidal (Quick Compare)</text><text x="90" y="935" class="t-body"><strong>SUICIDAL:</strong> multiple injuries · varying length/depth · <strong>HESITATION cuts</strong> · oblique → sloping toward floor of mouth</text><text x="90" y="960" class="t-body">→ carotid arteries usually PRESERVED · no defence wounds · suicide note · secluded place · room locked from inside</text><text x="90" y="990" class="t-body"><strong>HOMICIDAL:</strong> single or few <strong>DEEP wounds</strong> · no hesitation · usually horizontal · slope AWAY from floor of mouth</text><text x="90" y="1015" class="t-body">→ carotids FREQUENTLY CUT · DEFENCE wounds on hands/forearms · scene disturbed · no locking from inside</text><text x="90" y="1045" class="t-body" font-style="italic">★ Full diff-table in DT-6 (Suicidal vs Homicidal Cut-Throat)</text><circle class="ic" cx="1510" cy="878" r="14"/><text class="t-info" x="1510" y="884" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_RI10 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Thoracic · Abdominal · Pelvic · Bone Injuries</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Rib fracture · diaphragm · liver/spleen rupture · bulbar urethra rupture · compartment syndrome</text>

<g data-node-id="ri-chest"><rect class="body-white" x="60" y="110" width="730" height="290" rx="14"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 165 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gBlue)"/><text x="80" y="150" class="t-nlg">🫁 CHEST / THORAX Injuries</text><text x="80" y="195" class="t-keylbl">Closed wounds:</text><text x="80" y="220" class="t-keyval">Abrasion · contusion · rib fracture (★ FLAIL CHEST = ≥ 2 rib #</text><text x="80" y="245" class="t-keyval">in ≥ 2 places → paradoxical breathing)</text><text x="80" y="275" class="t-keylbl">Open / penetrating wounds → cause:</text><text x="80" y="300" class="t-keyval">• <strong>Hemothorax</strong> · <strong>Pneumothorax</strong></text><text x="80" y="330" class="t-keylbl">Heart injuries:</text><text x="80" y="355" class="t-keyval">Contusion · laceration · stab · ★ <strong>Hemopericardium</strong> →</text><text x="80" y="380" class="t-keyval">cardiac tamponade (commonest cause: stab over precordium)</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-diaphragm"><rect class="body-white" x="810" y="110" width="730" height="290" rx="14"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 165 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gGreen)"/><text x="830" y="150" class="t-nlg">🫁 DIAPHRAGM &amp; Lung</text><text x="830" y="195" class="t-keyval"><strong>Diaphragm rupture:</strong></text><text x="830" y="220" class="t-keyval">• Blunt trauma > penetrating (often missed)</text><text x="830" y="245" class="t-keyval">• ★ More common on <strong>LEFT</strong> (liver buffers right side)</text><text x="830" y="270" class="t-keyval">• Radial tears in posterolateral diaphragm</text><text x="830" y="295" class="t-keyval">• Multiple rib fractures often co-exist</text><text x="830" y="330" class="t-keylbl">Lung injuries:</text><text x="830" y="355" class="t-keyval">Contusion · laceration · stab · ★ <strong>blast injury</strong></text><text x="830" y="380" class="t-keyval">(see Ch 10 — "blast lung")</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-abdomen"><rect class="body-white" x="60" y="420" width="730" height="320" rx="14"/><path d="M 74,420 H 776 A 14,14 0 0 1 790,434 V 475 H 60 V 434 A 14,14 0 0 1 74,420 Z" fill="url(#gOrange)"/><text x="80" y="460" class="t-nlg">💢 ABDOMEN — Solid + Hollow Viscus</text><text x="80" y="500" class="t-keylbl">SOLID organ injuries (commoner from blunt trauma):</text><text x="80" y="525" class="t-keyval">• <strong>LIVER</strong> — contusion · laceration (transcapsular / subcapsular /</text><text x="80" y="545" class="t-keyval">parenchymal / coronal / crush / contre-coup)</text><text x="80" y="570" class="t-keyval">• <strong>SPLEEN</strong> — most commonly injured in blunt trauma</text><text x="80" y="595" class="t-keyval">  4 grades (subcapsular → parenchymal → vessels → shattered)</text><text x="80" y="620" class="t-keyval">• <strong>KIDNEY</strong> — 4 degrees (subcapsular → laceration → pole avulsion → pedicle avulsion)</text><text x="80" y="645" class="t-keyval">• <strong>PANCREAS</strong> — caught between vertebral column + force</text><text x="80" y="680" class="t-keylbl">HOLLOW viscus injuries:</text><text x="80" y="705" class="t-keyval">• <strong>STOMACH</strong> — DISTENDED stomach ruptures at <strong>PYLORIC end / lesser curvature</strong></text><text x="80" y="725" class="t-keyval">• Intestine — crushed against spine OR sheared at mesentery fixation points</text><circle class="ic" cx="770" cy="438" r="14"/><text class="t-info" x="770" y="444" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-pelvis-urethra"><rect class="body-white" x="810" y="420" width="730" height="320" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 824,420 H 1526 A 14,14 0 0 1 1540,434 V 475 H 810 V 434 A 14,14 0 0 1 824,420 Z" fill="url(#gRed)"/><text x="830" y="460" class="t-nlg">🦴 PELVIS + URETHRA ★ PYQ</text><text x="830" y="500" class="t-keylbl">Bladder injuries:</text><text x="830" y="525" class="t-keyval">• Distended bladder ruptures EASILY</text><text x="830" y="550" class="t-keyval">• <strong>Intra-peritoneal</strong> rupture → chemical peritonitis</text><text x="830" y="575" class="t-keyval">• <strong>Extra-peritoneal</strong> rupture → urine in abdominal wall, scrotum, thigh</text><text x="830" y="595" class="t-keyval">  (associated with PELVIC FRACTURE)</text><text x="830" y="625" class="t-keylbl" fill="#FFD9A8">★ NEET-PG 2020 Q10 — STRADDLE INJURY:</text><text x="830" y="650" class="t-keyval">Fall onto manhole / fence / bicycle bar →</text><text x="830" y="670" class="t-keyval">perineal injury + <strong>BLOOD AT MEATUS</strong> + retention =</text><text x="830" y="695" class="t-keyval" font-weight="700">★ BULBAR (BULBOUS) URETHRA rupture</text><text x="830" y="720" class="t-keyval">(in anterior urethra · crushed against pubic symphysis)</text><circle class="ic" cx="1530" cy="438" r="14"/><text class="t-info" x="1530" y="444" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-bone"><rect class="body-white" x="60" y="760" width="730" height="220" rx="14"/><path d="M 74,760 H 776 A 14,14 0 0 1 790,774 V 815 H 60 V 774 A 14,14 0 0 1 74,760 Z" fill="url(#gPurple)"/><text x="80" y="800" class="t-nlg">🦴 BONE Fracture Healing — 5 Stages</text><text x="80" y="835" class="t-keyval">1. <strong>Hematoma</strong> formation (0–48 h)</text><text x="80" y="860" class="t-keyval">2. <strong>Inflammation</strong> + cellular response (2–5 days)</text><text x="80" y="885" class="t-keyval">3. <strong>Soft callus / fibrocartilaginous</strong> (1–3 weeks)</text><text x="80" y="910" class="t-keyval">4. <strong>Hard / bony callus</strong> (3–12 weeks)</text><text x="80" y="935" class="t-keyval">5. <strong>Remodelling</strong> (months–years)</text><text x="80" y="965" class="t-keyval" font-style="italic">★ Forensic: fracture age → callus type seen on x-ray</text><circle class="ic" cx="770" cy="778" r="14"/><text class="t-info" x="770" y="784" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ri-compartment"><rect class="body-white" x="810" y="760" width="730" height="220" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 824,760 H 1526 A 14,14 0 0 1 1540,774 V 815 H 810 V 774 A 14,14 0 0 1 824,760 Z" fill="url(#gRed)"/><text x="830" y="800" class="t-nlg">🚨 COMPARTMENT SYNDROME ★ PYQ</text><text x="830" y="835" class="t-keyval"><strong>★ NEET-PG 2018 Q11:</strong> Patient&apos;s finger is BLACKENING</text><text x="830" y="860" class="t-keyval">in a crush / fracture patient (intern + ortho PG priority):</text><text x="830" y="885" class="t-keyval" font-weight="700">→ Answer: COMPARTMENT SYNDROME</text><text x="830" y="910" class="t-keyval">★ Vascular compromise = TOP priority — needs URGENT</text><text x="830" y="935" class="t-keyval">FASCIOTOMY · 6 P&apos;s: Pain, Pallor, Pulselessness,</text><text x="830" y="960" class="t-keyval">Paresthesia, Paralysis, Poikilothermia (cold)</text><circle class="ic" cx="1530" cy="778" r="14"/><text class="t-info" x="1530" y="784" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1000" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="1038" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⭐ Straddle injury → BULBAR urethra rupture (NEET-PG 2020 Q10) · Crush + blackening finger → COMPARTMENT syndrome (NEET-PG 2018 Q11) · Distended bladder ruptures intra-peritoneally</text>
</svg>`;

const NODES = {
  'ri-overview': { label: 'Regional Injuries — Master Scope', info: '<p><strong>Regional Injuries</strong> covers anatomic-region-wise mechanical injury — scalp, skull, meninges, brain, spine/cord, chest, abdomen, pelvis, and limbs.</p><p><strong>★ Head injury</strong> is the single highest-yield LAQ topic in the entire FMT syllabus — covering scalp + skull fractures + 4 intracranial hemorrhages + 4 types of brain injury.</p><ul><li>5 vault + 5 basilar skull fracture patterns</li><li>4 intracranial hemorrhages (EDH · SDH · SAH · ICH)</li><li>4 primary brain injuries (concussion · contusion · DAI · laceration)</li><li>Spine, chest, abdomen, pelvis, bone injuries</li></ul>', tags: ['Master scope'] },
  'ri-gcs': { label: 'Head Injury — GCS Classification', info: '<p>Head injury severity classified by <strong>Glasgow Coma Scale (GCS)</strong>:</p><ul><li><strong>Mild / Minor:</strong> GCS 13–15 · LOC &lt; 30 minutes</li><li><strong>Moderate:</strong> GCS 9–12 · LOC 30 min to 6 hours</li><li><strong>Severe:</strong> GCS ≤ 8 · LOC &gt; 6 hours</li></ul><p><strong>GCS components (3):</strong></p><ul><li><strong>Eye opening (E):</strong> 1 (none) to 4 (spontaneous)</li><li><strong>Verbal response (V):</strong> 1 (none) to 5 (oriented)</li><li><strong>Motor response (M):</strong> 1 (none) to 6 (obeys commands)</li></ul><p>Total = E + V + M · Max 15 · Min 3.</p>', tags: ['GCS scoring'] },
  'ri-regions': { label: '4 Anatomic Regions of Head Injury', info: '<ol><li><strong>SCALP:</strong> abrasion · contusion · laceration · incised · avulsion · sub-galeal hematoma</li><li><strong>SKULL:</strong> 5 vault fractures (linear · depressed · comminuted · pond · gutter) + 5 basilar (ring · hinge · longitudinal · etc.)</li><li><strong>MENINGES:</strong> 4 intracranial hemorrhages — EDH · SDH · SAH · ICH (+ IVH)</li><li><strong>BRAIN:</strong> primary (concussion · contusion · DAI · laceration) + secondary (edema · ischemia · herniation · infection · epilepsy)</li></ol>', tags: ['4 regions'] },
  'ri-topics': { label: '8 High-Yield LAQ Topics', info: '<ol><li>5 types of skull fracture + mechanism + age estimation (2 LAQs)</li><li>Head injury + 4 intracranial hemorrhages overview</li><li>Extradural hematoma — middle meningeal a. · lucid interval · biconvex CT</li><li>Subdural hematoma — bridging veins · crescentic CT · acute/subacute/chronic</li><li>Subarachnoid hemorrhage — berry aneurysm · traumatic vs spontaneous</li><li>Coup vs contre-coup · DAI</li><li>Punch-drunk syndrome (CTE in boxers)</li><li>Spinal cord (whiplash · pithing) · chest · abdomen · pelvic injuries</li></ol>', tags: ['LAQ topics'] },
  'ri-primary-secondary': { label: 'Primary vs Secondary Brain Injury', info: '<p><strong>PRIMARY (at moment of impact):</strong></p><ol><li>Diffuse axonal injury (DAI)</li><li>Cerebral concussion</li><li>Cerebral contusions + lacerations</li></ol><p><strong>SECONDARY (delayed — arises from primary):</strong></p><ol><li>Intracranial hematoma · cerebral edema</li><li>Cerebral ischemia · herniation</li><li>Infection · epilepsy · hydrocephalus</li></ol><p>★ Secondary injuries are <strong>PREVENTABLE</strong> with good early management.</p>', tags: ['Primary vs secondary'] },
  'ri-pyqs': { label: 'Ch 11 PYQ Anchor Map', info: '<ul><li>★ <strong>NEET-PG 2018 Q11:</strong> Crush patient with blackening finger → intern + ortho PG priority = <strong>compartment syndrome</strong> (vascular compromise top priority).</li><li>★ <strong>NEET-PG 2020 Q10:</strong> Manhole fall + perineal injury + blood at meatus → <strong>bulbar urethra rupture</strong> (straddle injury).</li><li>Subjective Q-bank (Ch 11): 2 LAQs (Skull fractures · Head Injury) + 4 SAQs (Skull #s · Punch-drunk · SDH · Skull # classify).</li></ul>', tags: ['PYQ map'] },

  'ri-scalp': { label: 'Scalp — 6 Injury Types', info: '<ol><li><strong>Abrasion</strong> — superficial; grazes after fall; hair masks</li><li><strong>Contusion</strong> — may be MOBILE (gravitates), called ectopic / percolated / migratory contusion</li><li><strong>Laceration</strong> — gapes due to galea aponeurotica · bleeds heavily</li><li><strong>Incised</strong> — sharp weapon · clean margins</li><li><strong>Avulsion</strong> — scalp torn off (machinery accidents)</li><li><strong>Sub-galeal hematoma</strong> — under galea aponeurotica</li></ol><p><strong>★ Migratory contusion examples:</strong></p><ul><li>Anterior scalp bruise → gravitates DOWN → "black eye"</li><li>Temporal scalp bruise → gravitates DOWN → "battle sign" (behind ear)</li></ul>', tags: ['6 types', 'Ectopic contusion'] },
  'ri-face': { label: 'Face — 7 Injury Types + Le Fort', info: '<ol><li>Abrasion · 2. Contusion · 3. Laceration · 4. Incised · 5. Chop · 6. Penetrating · 7. Fracture of facial bones</li></ol><p><strong>Le Fort facial fractures:</strong></p><ul><li><strong>Le Fort I</strong> — horizontal maxillary (Guérin&apos;s)</li><li><strong>Le Fort II</strong> — pyramidal (nasal + maxilla)</li><li><strong>Le Fort III</strong> — craniofacial dysjunction (severe — entire face separated from cranium)</li></ul><p>Mandible · zygoma · nasal bones common in assault and RTA. Bite marks and dental fractures have forensic value.</p>', tags: ['Le Fort I-III'] },
  'ri-ear': { label: 'Ear Injuries', info: '<ol><li>Abrasion · 2. Contusion · 3. Laceration · 4. Cut / chop · 5. Avulsion from root</li><li><strong>Hematoma of pinna</strong> — "cauliflower ear" — boxers, wrestlers (repeated trauma)</li><li><strong>Tympanic membrane rupture</strong> from hard blunt impact → deafness</li></ol><p>★ Bleeding from ear may indicate <strong>basal skull fracture</strong> (petrous temporal). Battle sign + hemotympanum are corroborating findings.</p>', tags: ['Cauliflower ear'] },
  'ri-eye': { label: 'Eye Injuries', info: '<p><strong>Blunt force injury:</strong></p><ul><li>Cornea · iris · lens · vitreous hemorrhage</li><li>Retinal detachment</li><li>Traumatic cataract</li></ul><p><strong>Penetrating injury</strong> — sharp weapon · GSR (firearm).</p><p><strong>Subconjunctival hemorrhage</strong> — bright red, painless · seen in trauma, asphyxia, strangulation (Tardieu spots).</p><p><strong>★ BLACK EYE (periorbital hematoma)</strong> — see separate node for 3 mechanisms.</p>', tags: ['Subconjunctival'] },
  'ri-teeth': { label: 'Teeth Injuries', info: '<ol><li>Fracture / fracture-dislocation of teeth</li><li>Contusion + laceration of gums</li><li>Fracture of alveolar margin</li></ol><p>★ Dental records useful for identification (Ch 3).</p><p>★ Bite marks preserved for <strong>DNA + dental superimposition</strong> in sexual assault, child abuse, and food remains at crime scene.</p>', tags: ['Dental forensics'] },
  'ri-blackeye': { label: '★ BLACK EYE — 3 Mechanisms', info: '<p><strong>Black eye (periorbital hematoma)</strong> = bruising of eye lid / periorbital area.</p><p><strong>3 mechanisms of production:</strong></p><ol><li><strong>Direct trauma</strong> to the eye — commonest (punch, blunt blow)</li><li><strong>Gravitating / shifting</strong> of blood DOWNWARDS from injury on FRONTAL scalp</li><li><strong>Blood entering orbit from behind / above</strong> due to fracture of orbital floor (commonly anterior cranial fossa fracture)</li></ol><p>★ <strong>Forensic point:</strong> presence of black eye does NOT prove direct assault — must exclude scalp gravitation + basal fracture.</p>', tags: ['3 mechanisms'] },
  'ri-spectacle': { label: '★ SPECTACLE HEMATOMA / Raccoon Eyes', info: '<p><strong>Spectacle hematoma</strong> = "raccoon eyes" = <strong>BLACK EYE ON BOTH SIDES</strong> (bilateral periorbital hemorrhage).</p><p>★ <strong>STRONGLY SUGGESTS FRACTURE OF BASE OF SKULL</strong> — usually fracture of floor of <strong>anterior cranial fossa</strong>.</p><p><strong>Associated basilar fracture clues:</strong></p><ul><li><strong>Battle sign</strong> — bruise behind ear over mastoid (middle / posterior fossa fracture)</li><li>CSF rhinorrhea (anterior fossa) · CSF otorrhea (middle fossa)</li><li>Hemotympanum · cranial nerve palsies</li></ul>', tags: ['Basal # marker'] },

  'ri-skull-anatomy': { label: 'Skull — Forensic Anatomy', info: '<p><strong>Calvaria (cranium)</strong> = bones of head minus face.</p><ul><li><strong>Calva (skullcap)</strong> = roof / vault</li><li><strong>Base of skull</strong> = rest</li></ul><p><strong>Adult skull = 2 parallel tables of compact bone:</strong></p><ul><li><strong>OUTER table</strong> — twice the thickness of inner</li><li><strong>INNER table</strong> — fragile</li><li><strong>Diploë</strong> — soft cancellous bone between tables</li></ul><p><strong>★ Thickness varies:</strong></p><ul><li>Frontal / parietal — 6 to 10 mm</li><li><strong>Temporal — 4 mm (thinnest)</strong> — explains middle meningeal artery vulnerability</li><li>Occipital midline — ≥ 15 mm</li></ul>', tags: ['2 tables + diploë'] },
  'ri-rowbotham': { label: 'Rowbotham&apos;s Hypothesis — Skull Fracture', info: '<p><strong>Two mechanisms of skull fracture:</strong></p><p><strong>1. DIRECT FORCE FRACTURE</strong> (e.g., blow over head with iron rod)</p><ul><li><strong>Local deformation</strong> — focal impact bends skull inward; struck-hoop bulging elsewhere; both fracture if force exceeds elasticity</li><li><strong>General deformation</strong> — skull compressed in one plane bulges in another (lateral compression → vertical/AP # lines)</li></ul><p><strong>2. INDIRECT VIOLENCE</strong> — force applied AWAY from skull, transmitted to it</p><ul><li>Fall from height landing on feet / buttock → <strong>ring fracture</strong> around foramen magnum</li><li>Blow on chin → maxilla transmits force to base → cribriform plate fracture</li></ul>', tags: ['Direct + indirect'] },
  'ri-struckhoop': { label: 'Struck-Hoop Analogy', info: '<p>When a focal force hits the skull:</p><ol><li>Skull tries to bend INWARD at the impact point</li><li>Adult skull is INCOMPRESSIBLE</li><li>★ Compensatory <strong>BULGING in OTHER areas</strong> — resembles a "struck hoop"</li><li>If force exceeds elastic limit → BOTH intruded (inward bend) AND extruded (bulged) areas fracture</li></ol><p>★ Infant skull is MORE ELASTIC — can distort more without fracturing → explains POND fracture (dent without fracture).</p>', tags: ['Adult vs infant'] },
  'ri-holbourn': { label: 'Holbourn&apos;s Hypothesis — Brain Injury', info: '<p>Mechanism of brain injury — 3 components:</p><ol><li><strong>Compression</strong> — units forced together</li><li><strong>Tension</strong> — units pulled apart</li><li><strong>Shear strain</strong> — adjacent strata slide laterally (like playing cards displaced one over another)</li></ol><p>★ <strong>Rotational</strong> component is necessary to damage brain. Pure linear acceleration / deceleration alone CANNOT damage brain because brain can distort but not be compressed.</p><p>★ Brain forced against sharp edges of tentorial opening, falx, sphenoid wing, and petrous bar → damages corpus callosum, brainstem, base of cerebrum.</p>', tags: ['Rotation needed'] },
  'ri-puppe': { label: '★ Puppe&apos;s Rule — Sequence of Fractures', info: '<p>★ When TWO or more separate fractures occur from SUCCESSIVE impacts and meet each other:</p><p>★ The <strong>LATER (second) fracture</strong> will <strong>TERMINATE</strong> in the EARLIER (first) fracture.</p><p><strong>Why:</strong> Termination of the second fracture line interrupts the cranial distortion (which precedes fracturing).</p><p><strong>Forensic application:</strong> In multiple-blow homicides, Puppe&apos;s rule allows <strong>RECONSTRUCTION of the SEQUENCE of blows</strong> — the older fracture stops the newer one.</p>', tags: ['Sequence of blows'] },
  'ri-spiderweb': { label: 'Spider-Web Fracture', info: '<p>★ When SEVERE LOCAL force causes BOTH focal AND general deformation simultaneously:</p><ul><li>Focal deformation → depressed fracture</li><li>General deformation → radial fissures</li></ul><p>★ <strong>COMBINATION = "SPIDER-WEB" pattern</strong> = central depressed component + radial linear fractures running outward.</p><p>★ Synonym for non-displaced comminuted fracture (mosaic appearance).</p>', tags: ['Comminuted mosaic'] },

  'ri-vault-overview': { label: 'Vault Fractures — 8 Types Overview', info: '<p>Vault of skull may fracture in 8 patterns, classified by appearance + causative mechanism:</p><ol><li>Linear (fissured) — most common</li><li>Depressed (signature) — weapon-shaped</li><li>Comminuted — multi-fragment (spider-web if mosaic)</li><li>Pond / indented — INFANTS only</li><li>Gutter — glancing bullet</li><li>Diastatic — along sutures (children)</li><li>Perforating — sharp / bullet</li><li>Cut — sharp-edged weapon</li></ol><p>★ Q-bank LAQ requires all 8 with mechanism.</p>', tags: ['8 vault patterns'] },
  'ri-linear': { label: 'Linear (Fissured) Fracture', info: '<p>★ <strong>Most COMMON type</strong> of skull fracture.</p><ul><li>May involve outer table · inner table · OR both</li><li>Can be straight or curved fissure</li><li>In children / young adults: linear fracture may extend INTO a suture line → become <strong>diastatic fracture</strong></li></ul><p><strong>Mechanism:</strong> Blunt force over a large area — general deformation principle.</p>', tags: ['Commonest'] },
  'ri-depressed': { label: '★ Depressed (Signature) Fracture', info: '<p>★ Also called <strong>"signature fracture"</strong> or "fracture à la signature".</p><ul><li>Fractured bone is <strong>DRIVEN INWARD</strong> into cranial cavity</li><li>★ Pattern resembles the SHAPE of the causative weapon</li><li>Common shapes: hammer head, brick edge, rod tip, square heel</li></ul><p><strong>Mechanism:</strong> SEVERE LOCAL force with SMALL contact area — focal deformation exceeds limit of elasticity.</p><p>★ Important medicolegal value — weapon can sometimes be identified by the fracture shape.</p>', tags: ['Weapon-shaped'] },
  'ri-comminuted': { label: 'Comminuted Fracture (Spider-Web)', info: '<p>★ Bone broken into MULTIPLE pieces — fragmentation.</p><p>★ <strong>Non-displaced comminuted fracture</strong> = <strong>SPIDER-WEB / MOSAIC pattern</strong>:</p><ul><li>Central depressed component (focal deformation)</li><li>Plus radial fissures (general deformation)</li></ul><p><strong>Mechanism:</strong> Very severe local force — combination of focal + general deformation simultaneously.</p>', tags: ['Spider-web / Mosaic'] },
  'ri-pond': { label: '★ Pond (Indented) Fracture — Infant ONLY', info: '<p>★ Occurs ONLY in skull of INFANTS.</p><ul><li>Dent / dimple-like depression on skull</li><li>Resembles a CONCAVE POND</li><li>NO actual fracture line</li></ul><p><strong>Mechanism:</strong> Pliable, elastic infant bones distort under impact WITHOUT fracturing (comparable to squeezing a table-tennis / ping-pong ball — it dents but does not break).</p><p>★ Forensic importance: pond fracture in an infant is a marker of significant blunt impact — investigate child abuse.</p>', tags: ['Infants only'] },
  'ri-gutter': { label: '★ Gutter Fracture — Glancing Bullet', info: '<p>★ <strong>PART thickness</strong> of skull bone removed → forms a <strong>GUTTER / FURROW</strong> in the bone.</p><p><strong>★ Mechanism:</strong> Weapon strikes skull <strong>TANGENTIALLY / GLANCING</strong> — most classic cause is a <strong>GLANCING BULLET</strong> (see Ch 10 firearm injuries).</p><p>★ Distinguishes from perforating fracture (which goes through both tables).</p>', tags: ['Tangential bullet'] },
  'ri-diastatic': { label: 'Diastatic (Sutural) Fracture', info: '<p>★ Fracture along the line of SKULL SUTURES (e.g., coronal, sagittal).</p><ul><li>Occurs in <strong>CHILDREN + YOUNG ADULTS</strong> because skull sutures are NOT yet fully fused</li><li>Results in separation (diastasis) of cranial sutures</li><li>★ A linear fracture in a child may extend into a suture line → become diastatic</li></ul><p><strong>Forensic relevance:</strong> can be confused with PM separation of skull sutures by putrefaction gas (Ch 6 — postmortem artefact).</p>', tags: ['Children + sutures'] },
  'ri-perforating': { label: 'Perforating Fracture', info: '<p>★ Skull PERFORATED by a sharp pointed object OR a BULLET.</p><ul><li>Involves BOTH outer AND inner tables</li><li>★ Shape + size of injury corresponds to the offending agent</li></ul><p>Common causes:</p><ul><li>Bullet (entry wound — Ch 10)</li><li>Stab with pointed instrument (ice pick, screwdriver)</li><li>Spike, arrow</li></ul>', tags: ['Both tables'] },
  'ri-cut': { label: 'Cut Fracture', info: '<p>★ Caused by <strong>SHARP-edged weapons</strong> — sword, chopper, machete, axe.</p><ul><li>If <strong>BOTH tables involved</strong> → clean-cut gap corresponding to the THICKNESS of the blade</li><li>If <strong>only outer table</strong> involved → "<strong>partial cut fracture</strong>"</li></ul><p>★ Forensic significance: blade thickness measurable from the gap — helps weapon matching.</p>', tags: ['Sharp weapon'] },
  'ri-vault-complications': { label: '12 Complications of Skull Fracture', info: '<ol><li>Injury to brain</li><li>Intracranial hemorrhage (EDH / SDH / SAH / ICH)</li><li>Anterior cranial fossa fracture → involves frontal · ethmoidal · sphenoidal air sinuses</li><li>Intracranial infections — meningitis / encephalitis</li><li>Cranial pneumatocele / pneumocranium (air in cranial cavity)</li><li>Cranial nerve injury</li><li>Traumatic epilepsy</li><li>CSF otorrhea / rhinorrhea</li><li>Coma</li><li>Cerebral edema</li><li>Raised intracranial pressure / tension</li><li>Death</li></ol>', tags: ['12 complications'] },

  'ri-basilar-overview': { label: 'Basilar Fractures — Overview', info: '<p>Base of skull may be fractured by direct OR indirect violence.</p><p><strong>5 patterns of basilar fracture:</strong></p><ol><li>Ring (fall on feet/buttock)</li><li>Hinge (motorcyclist&apos;s — blow on side)</li><li>Linear / fissured (commonest basilar)</li><li>Longitudinal</li><li>Secondary (indirect — e.g., from chin blow)</li></ol><p>★ Classic indirect-violence cases: fall from height landing on feet → ring fracture.</p>', tags: ['5 basilar patterns'] },
  'ri-ring': { label: '★ Ring Fracture', info: '<p>★ Fissured fracture that occurs <strong>AROUND the FORAMEN MAGNUM</strong> in POSTERIOR cranial fossa.</p><p>★ <strong>2 Causative Mechanisms:</strong></p><ol><li><strong>Fall from height</strong> landing on <strong>FEET or BUTTOCK</strong> — force transmitted upward through spinal column drives skull around the spine</li><li><strong>Severe impact on VERTEX</strong> — drives skull DOWNWARD on the spinal column</li></ol><p>Spinal column effectively "punches" upward around foramen magnum, creating the ring of fracture.</p>', tags: ['Fall from height'] },
  'ri-hinge': { label: '★ ★ Hinge Fracture (Motorcyclist&apos;s)', info: '<p>★ Linear fracture that passes ACROSS THE FLOOR OF MIDDLE CRANIAL FOSSA — runs ear to ear.</p><ul><li>Often follows the petrous temporal bone OR greater wing of sphenoid into the pituitary fossa on both sides</li><li>★ <strong>Separates the base of skull into TWO halves</strong></li></ul><p><strong>★ Mechanism:</strong> HEAVY blow / impact on the SIDE of the head.</p><p>★ <strong>Famous synonym: "MOTORCYCLIST&apos;S FRACTURE"</strong> — classically seen in motorcycle accidents with lateral helmet impact.</p>', tags: ['Motorcyclist&apos;s #'] },
  'ri-other-basilar': { label: 'Other Basilar Fractures', info: '<ol start="3"><li><strong>LINEAR / FISSURED basilar:</strong> commonest basilar pattern — linear fracture extending from vault into base</li><li><strong>LONGITUDINAL:</strong> extends sagittally through base — often through petrous temporal bone → may cause deafness</li><li><strong>SECONDARY (indirect):</strong> arises from transmitted forces (e.g., blow on chin transmits up through maxilla to base → fracture of cribriform plate)</li></ol>', tags: ['3 more patterns'] },
  'ri-hutchinson': { label: 'Hutchinson Fracture', info: '<p>★ Fracture of the <strong>DISTAL RADIUS</strong> involving the <strong>STYLOID PROCESS</strong>.</p><p>★ Also called <strong>"chauffeur fracture"</strong> — classically caused by recoil of a crank handle (early-automobile chauffeurs).</p><p><strong>Mechanism:</strong> Forced ulnar deviation / direct blow on radial styloid.</p><p>★ Note: distinct from <em>Hutchinson&apos;s teeth</em> (peg-shaped permanent incisors of congenital syphilis) — same surname, different entity.</p>', tags: ['Chauffeur #'] },
  'ri-basilar-signs': { label: '5 Clinical Signs of Basilar Fracture', info: '<ol><li>★ <strong>Spectacle hematoma / Raccoon eyes</strong> — bilateral periorbital bruising (anterior fossa)</li><li>★ <strong>Battle sign</strong> — bruising over mastoid behind ear (middle / posterior fossa)</li><li><strong>CSF rhinorrhea</strong> (anterior fossa) · <strong>CSF otorrhea</strong> (middle fossa, petrous temporal)</li><li><strong>Hemotympanum</strong> — blood behind tympanic membrane · bleeding from ear / nose</li><li><strong>Cranial nerve palsies</strong> — facial palsy (CN VII), deafness (CN VIII), anosmia (CN I)</li></ol>', tags: ['5 clinical clues'] },

  'ri-meninges': { label: 'Meninges — 3 Layers + 3 Spaces', info: '<p><strong>3 Layers (outside to inside):</strong></p><ol><li><strong>Dura mater</strong> — outer layer attaches to skull (acts as internal periosteum); inner layer faces brain. <strong>Meningeal arteries</strong> run between outer dura and skull.</li><li><strong>Arachnoid</strong> — thin vascular membrane closely associated with pia</li><li><strong>Pia mater</strong> — inseparable membrane covering brain</li></ol><p><strong>3 Potential Spaces:</strong></p><ul><li><strong>Epidural / extradural space</strong> — between dura and skull · contains meningeal (dural) arteries</li><li><strong>Subdural space</strong> — between dura and arachnoid · contains <strong>BRIDGING VEINS</strong> (largest = great vein of Galen)</li><li><strong>Subarachnoid space</strong> — between arachnoid and pia · contains CSF, cerebral vessels, cranial nerves</li></ul>', tags: ['3 layers + 3 spaces'] },
  'ri-edh-card': { label: '★ Extradural Hematoma (EDH) — Quick Card', info: '<ul><li><strong>Space:</strong> Skull ↔ Dura (epidural / extradural)</li><li><strong>Source:</strong> ★ <strong>Middle meningeal artery</strong> (arterial — most common); diploic veins / venous sinuses (rare)</li><li><strong>Site:</strong> ★ TEMPOROPARIETAL (thin 4 mm temporal bone) — common; occipital / basal rare; bilateral rare</li><li><strong>CT:</strong> ★ <strong>BICONVEX / lens-shaped</strong></li><li><strong>Clinical:</strong> ★ <strong>LUCID INTERVAL</strong> → contralateral hemiparesis → ipsilateral fixed-dilated pupil (uncal herniation, CN III) → brainstem compression → death</li><li><strong>Fatality:</strong> clinical signs at 35 mL · fatal at ~100 mL</li><li>★ <strong>NOT a contre-coup injury</strong> — follows the fracture site</li></ul>', tags: ['Biconvex CT', 'Lucid interval'] },
  'ri-sdh-card': { label: '★ Subdural Hematoma (SDH) — Quick Card', info: '<ul><li><strong>Space:</strong> Dura ↔ Arachnoid</li><li><strong>Source:</strong> ★ <strong>BRIDGING VEINS</strong> (venous — most common); occasionally small arachnoid arteries</li><li><strong>Site:</strong> ★ Lateral aspect of cerebral hemisphere (commonest); posterior fossa rare</li><li><strong>CT:</strong> ★ <strong>CRESCENTIC / sickle-shaped</strong></li><li><strong>3 types:</strong> Acute (&lt; 48–72 h) · Subacute (3–20 days) · Chronic (&gt; 3 weeks)</li><li><strong>Chronic SDH:</strong> elderly, alcoholics; brain atrophy → larger subdural space → bridging veins easily torn; often bilateral if natural-cause, unilateral if traumatic</li><li><strong>Volume needed:</strong> 35–100 mL to cause neurological signs</li><li>★ Most common acute lesion in BOXERS</li></ul>', tags: ['Crescentic CT', 'Bridging veins'] },
  'ri-sah-card': { label: '★ Subarachnoid Hemorrhage (SAH) — Quick Card', info: '<ul><li><strong>Space:</strong> Arachnoid ↔ Pia (in CSF)</li><li>★ <strong>MOST COMMON intracranial hemorrhage</strong></li><li><strong>Traumatic causes:</strong> laceration of brain · cortical contusion · blunt impact · severe hyperextension · ★ blow on neck → laceration of vertebral artery → basal SAH (rapidly fatal)</li><li><strong>Pathological causes:</strong> ★ <strong>BERRY (saccular) ANEURYSM</strong> · AVM · bleeding dyscrasia · ICH rupture into subarachnoid space</li><li><strong>CT:</strong> blood in CSF cisterns, sulci, fissures</li><li><strong>Clinical:</strong> "thunderclap" headache · neck stiffness · photophobia · LOC · focal deficit</li><li>Old SAH → ★ <strong>yellowish discolouration of leptomeninges</strong></li></ul>', tags: ['Most common', 'Berry aneurysm'] },
  'ri-ich-card': { label: 'Intracerebral Hemorrhage (ICH)', info: '<p>★ Hemorrhage WITHIN the cerebral parenchyma — "parenchymatous hemorrhage".</p><ul><li><strong>Size:</strong> 2–5 cm · usually well demarcated</li><li><strong>Caused by:</strong> shearing forces tearing parenchymal blood vessels</li></ul><p><strong>Causes:</strong></p><ul><li><strong>Traumatic</strong> — laceration of brain · blunt trauma (with or without fracture)</li><li><strong>Non-traumatic:</strong> ★ <strong>HYPERTENSION</strong> · AVM · spontaneous bleed · bleeding into cerebral neoplasm</li></ul><p>Multiple punctate hemorrhages → bleeding diathesis, septicemia, fat embolism.</p>', tags: ['Parenchymal'] },
  'ri-ivh': { label: 'Intraventricular Hemorrhage (IVH)', info: '<p>Bleeding into the ventricular system of brain. Usually <strong>arterial</strong> in origin.</p><p>★ <strong>If IVH is the SOLE finding</strong> → suggests head striking a firm object (fall-like injury).</p><p><strong>Causes:</strong></p><ol><li>Traumatic</li><li>Retrograde flow of SAH into ventricles</li><li>Rupture of AVM in ventricle wall</li><li>★ <strong>Berry aneurysm</strong> of posterior communicating artery → bleeds into anterior horn of lateral ventricle</li><li>Rupture of berry aneurysm of basilar artery through floor of 3rd ventricle</li></ol><p>★ Brown / yellow ependyma + choroid plexus = OLD blood (hemosiderin / hematoidin).</p>', tags: ['Sole IVH = fall'] },
  'ri-mostcommon': { label: 'Intracranial Hemorrhage — Frequency Ranking', info: '<p>★ <strong>MOST COMMON</strong> intracranial hemorrhage overall = <strong>SUBARACHNOID HEMORRHAGE (SAH)</strong>.</p><p>★ SDH is more common than EDH.</p><ul><li><strong>EDH</strong> — clinical signs at 35 mL · fatal at 100 mL</li><li><strong>SDH</strong> — 35–100 mL needed for signs</li></ul><p>★ In <strong>BOXERS</strong>: acute lesion = SDH; EDH NEVER occurs (boxing rarely causes skull fracture, which is needed for middle meningeal artery rupture).</p>', tags: ['Frequency'] },
  'ri-traumatic-vs-spontaneous': { label: 'Traumatic vs Spontaneous Hemorrhage — Forensic', info: '<p><strong>TRAUMATIC bleed:</strong></p><ul><li>External injury · scalp contusion / fracture</li><li>Convexity location</li><li>History of trauma · lucid interval may be present</li></ul><p><strong>SPONTANEOUS (pathological) bleed:</strong></p><ul><li>No external injury</li><li>Basal / deep brain location</li><li>Aneurysm, AVM, hypertension visible on imaging</li><li>Sudden collapse without trauma history</li></ul><p>★ <strong>A TRAUMA may PRECIPITATE rupture of a pre-existing aneurysm</strong> — important medicolegal grey zone (mixed causation, defence argument).</p>', tags: ['Mixed causation'] },

  'ri-edh-deep': { label: 'EDH — 5 Clinical Features', info: '<ol><li><strong>Lucid Interval ★</strong> — brief consciousness recovery after initial LOC, then deterioration as hematoma enlarges</li><li><strong>Contralateral hemiparesis</strong> — hematoma compresses motor cortex on the SAME side → weakness on OPPOSITE side of body</li><li><strong>Ipsilateral fixed-dilated pupil</strong> — uncus of temporal lobe compresses CN III on same side → pupillary fibres paralysed → dilated, non-reactive pupil</li><li><strong>Coma</strong> — added pressure displaces structures around 3rd ventricle and brainstem</li><li><strong>Death</strong> — brainstem compression + downward displacement of cerebellar tonsils through foramen magnum</li></ol><p><strong>Fate of EDH:</strong> may shrink (blood escapes into scalp through fracture) · resorb · encapsulate → chronic EDH.</p>', tags: ['5 features'] },
  'ri-sdh-deep': { label: 'SDH — Mechanism + Mobility + Chronic', info: '<p><strong>Acute SDH Mechanism:</strong></p><p>★ Change in head velocity (acceleration / deceleration) WITH a ROTATIONAL component → gliding movement between dura and skull → tearing of bridging veins → subdural bleed.</p><p>★ <strong>SDH is MOBILE</strong> — gravitates to LOWER side → does NOT depend on the site of force application (unlike EDH which sits at the fracture).</p><p><strong>Chronic SDH:</strong></p><ul><li>Common in elderly + chronic alcoholics</li><li>Brain atrophy → larger subdural space → freer brain movement → easier bridging vein rupture</li><li>Natural-cause chronic SDH often BILATERAL · traumatic usually UNILATERAL</li><li>Symptoms mimic <strong>schizophrenia / senile / pre-senile dementia</strong></li></ul>', tags: ['Mobile · Chronic'] },
  'ri-sdh-causes': { label: 'Causes of SDH', info: '<p><strong>1. TRAUMA (commonest):</strong></p><ul><li>★ Rupture of <strong>BRIDGING VEINS</strong> (most common source)</li><li>Rupture of dural venous sinuses</li><li>Laceration / contusion of brain + dura</li></ul><p><strong>2. PATHOLOGICAL:</strong></p><ul><li>Rupture of intracranial aneurysm</li><li>Malformed blood vessels (AVM)</li><li>Hypertensive bleed within superficial brain rupturing into subdural space</li></ul>', tags: ['Trauma + pathological'] },
  'ri-pachy': { label: 'Pachymeningitis Hemorrhagica', info: '<p>★ Chronic SDH with <strong>REPEATED hemorrhage</strong> into the encapsulated hematoma.</p><ul><li>Successive bleeds INCREASE the volume of SDH</li><li>Progressive neurological symptoms over weeks to months</li><li>★ Often BILATERAL when from natural causes (traumatic is usually unilateral)</li></ul><p>★ Symptoms may be mistaken for SCHIZOPHRENIA or SENILE / PRE-SENILE DEMENTIA — important diagnostic pitfall.</p>', tags: ['Repeated bleeds'] },
  'ri-sdh-dating': { label: '★ SDH Dating Table (Microscopic)', info: '<table><tr><th>Period</th><th>Clot</th><th>Dural surface</th><th>Arachnoid surface</th></tr><tr><td>24 hour</td><td>Fresh clot, intact RBCs</td><td>Thin fibrin layer</td><td>Thin fibrin layer</td></tr><tr><td>2-3 days</td><td>Intact RBCs</td><td>Thin fibrin + early fibroblasts</td><td>Thin fibrin</td></tr><tr><td>4-5 days</td><td>RBCs lose contour</td><td>2-5 layer neomembrane</td><td>Thin fibrin</td></tr><tr><td>5-8 days</td><td>RBCs lyse, clot liquefies</td><td>12-14 layers, visible to eye</td><td>Thin fibrin</td></tr><tr><td>10-11 days</td><td>Clot in islands; capillaries + fibrin</td><td>Fibroblasts toward clot</td><td>★ Siderophages</td></tr><tr><td>15-17 days</td><td>—</td><td>¼–½ dura thickness</td><td>Covers undersurface</td></tr><tr><td>18-26 days</td><td>Large vessels permeate</td><td>= full thickness of dura</td><td>½ dura thickness</td></tr><tr><td>1-3 months</td><td>Giant capillaries; rebleed</td><td>★ Hyalinisation</td><td>Hyalinisation</td></tr><tr><td>3-6 months</td><td>Fresh bleed may recur</td><td>Hyalinised, thick, fibrous</td><td>Hyalinised, thick, fibrous</td></tr></table>', tags: ['Microscopic dating'] },

  'ri-concussion': { label: 'Cerebral Concussion (Commotio cerebri)', info: '<p><strong>Definition (Trotter 1914):</strong> "A transient paralytic state due to head injury which is of INSTANTANEOUS onset, does NOT show any evidence of structural cerebral injury, and is ALWAYS followed by AMNESIA from the actual moment of the accident."</p><p><strong>Mechanism:</strong> acceleration / deceleration of head at LOW levels → physiologic disruption of neurons WITHOUT anatomic change.</p><p><strong>Grading (3 grades):</strong></p><ul><li>Grade I — no loss of consciousness</li><li>Grade II — LOC &lt; 5 minutes</li><li>Grade III — LOC &gt; 5 minutes + memory loss &gt; 24 h</li></ul><p>★ <strong>Autopsy:</strong> NO visible structural damage (rarely punctate hemorrhages). Death from concussion may occur — usually from respiratory paralysis with negative autopsy.</p><p><strong>Medicolegal:</strong> retrograde amnesia (true or feigned) · post-concussion state · differential includes punch-drunk / drunkenness.</p>', tags: ['Trotter 1914', '3 grades'] },
  'ri-contusion': { label: 'Cerebral Contusion (Brain Bruise)', info: '<p>★ <strong>Cerebral contusion</strong> = circumscribed extravasation of blood in traumatized brain · cortex integrity MAINTAINED.</p><p><strong>Mechanism:</strong> shearing forces within brain tissue at moment of impact. Almost always associated with some SAH.</p><p>★ <strong>Location:</strong> CREST of brain convolutions (gyri) facing the dura. ★ Pattern resembles a CONE — base at dural surface, apex pointing inward (toward white matter).</p><p><strong>3 morphological types:</strong></p><ol><li><strong>Contusion hemorrhages</strong> — gray matter then white matter; gyral crest</li><li><strong>Contusion necrosis</strong> — necrosis + hemorrhage + edema; overlying SAH common</li><li><strong>Contusion tears</strong> — gross disruption of brain</li></ol><p><strong>Mechanism classification (Lindenberg-Freytag):</strong> coup · contre-coup · intermediary · fracture · gliding · herniation contusions.</p>', tags: ['Cone-shaped', 'Gyral crests'] },
  'ri-coup': { label: '⬅️ COUP Injury — Site of Impact', info: '<p>★ Injury occurs at the <strong>SITE of impact</strong>.</p><p><strong>Mechanism (ACCELERATION injury):</strong></p><ul><li>Stationary head struck by a MOVING object</li><li>Example: a standing person XYZ is struck on the parieto-occipital area by an iron rod swung by attacker ABC</li><li>The stationary head deforms locally under impact; force is transmitted to brain</li><li>Brain lags behind the skull for a brief moment → coup injury under the impact site</li></ul>', tags: ['Acceleration injury'] },
  'ri-contrecoup': { label: '➡️ CONTRE-COUP Injury — Opposite Site', info: '<p>★ Injury occurs <strong>OPPOSITE to the point of impact</strong> ("contre" = opposite).</p><p><strong>Mechanism (DECELERATION injury):</strong></p><ul><li>A MOVING head strikes a STATIONARY object</li><li>Example: person XYZ falls and skull strikes the ground</li><li>The skull stops abruptly when arrested by the ground, but the brain inside continues to move briefly → brain hits the opposite inner surface of skull</li></ul><p>★ Abrupt deceleration of a moving head produces: a RELATIVELY MINIMAL coup injury at the impact site + an EXTENSIVE contre-coup contusion on the opposite side.</p><p>★ <strong>EDH is NOT a contre-coup injury</strong> — it follows the fracture site.</p>', tags: ['Deceleration injury'] },
  'ri-dai': { label: '★ Diffuse Axonal Injury (DAI)', info: '<p><strong>Mechanism:</strong> ★ ANGULAR / ROTATIONAL acceleration-deceleration (Holbourn) → shear strain on axons.</p><p>★ <strong>Hallmark (microscopy):</strong> <strong>AXONAL SWELLING ("retraction balls")</strong> in:</p><ul><li>Cerebral white matter</li><li>Corpus callosum</li><li>Upper brainstem</li></ul><p><strong>★ Adams Classification (1989) — 3 grades:</strong></p><ol><li><strong>Grade 1:</strong> Histological evidence of axonal injury in white matter of cerebral hemisphere, corpus callosum, brainstem, cerebellum</li><li><strong>Grade 2:</strong> Grade 1 + focal lesion in <strong>corpus callosum</strong></li><li><strong>Grade 3:</strong> Grade 1 + Grade 2 + focal lesion in the <strong>dorsolateral quadrant of the rostral brainstem</strong></li></ol><p>★ DAI is a leading cause of persistent vegetative state after head injury.</p>', tags: ['Retraction balls', 'Adams 3 grades'] },
  'ri-punchdrunk': { label: '★ Punch-Drunk Syndrome (CTE)', info: '<p>★ Also called <strong>Chronic Traumatic Encephalopathy (CTE)</strong> or "<strong>dementia pugilistica</strong>".</p><p>★ Described in BOXERS (Martland 1928) — caused by REPEATED minor head blows over a career.</p><p><strong>Acute boxing injuries:</strong></p><ul><li>Most common acute fatal lesion = ACUTE SDH</li><li>★ EDH NEVER occurs in boxing — boxing hardly causes skull fracture (needed for middle meningeal artery rupture)</li><li>SAH may occur in some — from rupture of berry aneurysm</li></ul><p><strong>★ Chronic features (Punch-Drunk Syndrome):</strong></p><ul><li>Deterioration in speed + coordination</li><li>Slurred speech · defective memory · slow thoughts</li><li>Stiff limbs · ataxia · unsteady gait</li><li><strong>Parkinsonian-like dementia</strong></li></ul><p><strong>Brain pathology:</strong> cortical atrophy · hydrocephalus · perforation of septum pellucidum · loss of neurons from cerebellum and substantia nigra.</p>', tags: ['CTE', 'Boxer&apos;s injury'] },

  'ri-spine-overview': { label: 'Spine — Common Sites of Injury', info: '<p>★ <strong>Thoraco-lumbar segment</strong> = COMMONEST site of spinal injury.</p><p>★ Followed by <strong>LOWER CERVICAL</strong> spine.</p><p>Spinal fractures are classified by MECHANISM of force application — 6 categories.</p>', tags: ['T-L commonest'] },
  'ri-spine-fracture': { label: '6 Mechanisms of Spinal Fracture', info: '<ol><li><strong>FLEXION injury</strong> — compression fracture of vertebral body + dislocation</li><li><strong>FLEXION-ROTATION</strong> — fracture-dislocation of vertebra (commonest "burst" pattern)</li><li><strong>VERTICAL COMPRESSION</strong> — vertebral body crushed into pieces (e.g., Jefferson fracture of C1 atlas)</li><li><strong>EXTENSION</strong> — chip fracture of anterior rim of vertebra</li><li><strong>DIRECT TRAUMA</strong> — fracture / dislocation from external direct blow</li><li><strong>INDIRECT TRAUMA</strong> — fracture from transmitted force (fall from height landing on feet)</li></ol>', tags: ['6 mechanisms'] },
  'ri-cord-injuries': { label: '7 Types of Spinal Cord Injury', info: '<ol><li><strong>Concussion</strong> — temporary paralysis of upper / lower limbs or bladder / bowel; recovery in ~48 h. ★ Common in railway / motor collisions → called "<strong>RAILWAY SPINE</strong>"</li><li><strong>Compression</strong> — by bone fragment / hematoma</li><li><strong>★ PITHING</strong> — homicidal method: fine needle inserted at nape of neck between base of skull + upper cervical vertebra → death from cord transection</li><li><strong>Penetrating injury</strong> — bullet, stab</li><li><strong>Laceration</strong></li><li><strong>Transection</strong> — complete cord interruption</li><li><strong>★ WHIPLASH injury</strong> — sudden hyperflexion + hyperextension</li></ol>', tags: ['Pithing', 'Railway spine'] },
  'ri-whiplash': { label: '★ Whiplash Injury', info: '<p>★ Sudden <strong>HYPERFLEXION then HYPEREXTENSION</strong> of spine WITHOUT fracture of spinal column.</p><p>★ Classic scenario: <strong>REAR-END motor vehicle collision</strong> — head snaps forward (flexion) then backward (extension).</p><p><strong>Result:</strong> contusion or laceration of cervical cord → neck pain · stiffness · radiculopathy · chronic disability.</p><p>★ Forensic / insurance-claim relevance: whiplash is a common litigated injury after RTA.</p>', tags: ['Hyperflexion + hyperextension'] },
  'ri-neck': { label: 'Neck — 5 Injury Types', info: '<ol><li>Contusion</li><li>Abrasion</li><li>Lacerated wound</li><li>Incised wound / chop / <strong>cut throat</strong> (see DT-6 suicidal vs homicidal)</li><li>Ligature injury (hanging / strangulation — Ch 15)</li></ol><p>★ Special homicidal mechanism: <strong>pithing</strong> — fine needle inserted into nape between skull and upper cervical vertebra → cord transection.</p>', tags: ['5 neck types'] },
  'ri-cutthroat': { label: 'Cut-Throat — Suicidal vs Homicidal', info: '<p><strong>SUICIDAL cut throat:</strong></p><ul><li>Multiple injuries of varying length / depth</li><li>★ Preceded by <strong>HESITATION cuts</strong></li><li>Tailing on RIGHT side (in right-handed person)</li><li>Oblique direction, sloping towards floor of mouth</li><li>Carotid arteries usually PRESERVED</li><li>No defence wounds · suicide note may be left</li><li>Secluded place · room locked from inside</li></ul><p><strong>HOMICIDAL cut throat:</strong></p><ul><li>Single or few but DEEP wounds (no hesitation)</li><li>Tailing on either side</li><li>Horizontal direction, sloping AWAY from floor of mouth</li><li>Carotid arteries FREQUENTLY CUT</li><li>DEFENCE wounds on hands / forearms</li><li>Scene disturbed · no locking from inside</li></ul>', tags: ['Hesitation vs defence'] },

  'ri-chest': { label: 'Chest / Thorax Injuries', info: '<p><strong>Closed wounds:</strong></p><ul><li>Abrasion · contusion · rib fracture</li><li>★ <strong>Flail chest</strong> = ≥ 2 ribs broken in ≥ 2 places → paradoxical breathing</li></ul><p><strong>Penetrating / open wounds → complications:</strong></p><ul><li><strong>Hemothorax</strong> · <strong>Pneumothorax</strong></li></ul><p><strong>Heart injuries:</strong> contusion · laceration · stab · ★ <strong>hemopericardium</strong> → cardiac tamponade (commonest: stab over precordium).</p><p><strong>Lung:</strong> contusion · laceration · stab · blast injuries.</p>', tags: ['Flail chest'] },
  'ri-diaphragm': { label: 'Diaphragm + Lung Injuries', info: '<p><strong>Diaphragmatic rupture:</strong></p><ul><li>Blunt trauma &gt; penetrating · often missed initially</li><li>★ More common on <strong>LEFT</strong> — liver buffers the right side</li><li>Radial tears in posterolateral diaphragm</li><li>Multiple rib fractures usually co-exist</li><li>Causes impaired venous return → circulatory collapse</li></ul><p><strong>Lung injuries:</strong></p><ul><li>Contusion · laceration · stab · ★ <strong>blast injury</strong> ("blast lung" — see Ch 10)</li></ul>', tags: ['Left > right'] },
  'ri-abdomen': { label: 'Abdomen — Solid + Hollow Viscus Injuries', info: '<p><strong>SOLID organs (commoner in blunt trauma):</strong></p><ul><li><strong>LIVER</strong> — 5 laceration types: transcapsular · subcapsular · parenchymal · coronal · crush · contre-coup laceration</li><li><strong>SPLEEN</strong> — most commonly injured in blunt abdominal trauma · 4 grades: subcapsular tear → parenchymal &lt; hilum → with vessels → shattered</li><li><strong>KIDNEY</strong> — 4 degrees: subcapsular hematoma → laceration → pole avulsion → pedicle avulsion</li><li><strong>PANCREAS</strong> — caught between vertebral column and impacting force; may evolve into pseudocyst</li></ul><p><strong>HOLLOW viscus:</strong></p><ul><li>★ Distended STOMACH ruptures at <strong>PYLORIC end along lesser curvature</strong> (deficient muscle + magenstrasse)</li><li>Intestine crushed against spine OR sheared at mesentery fixation points</li></ul>', tags: ['Spleen commonest blunt'] },
  'ri-pelvis-urethra': { label: '★ ★ Pelvis + Urethra (Straddle Injury)', info: '<p><strong>Bladder injuries:</strong></p><ul><li>Distended bladder ruptures more easily</li><li><strong>Intra-peritoneal</strong> rupture → chemical peritonitis</li><li><strong>Extra-peritoneal</strong> rupture → urine in abdominal wall, scrotum, thigh — often associated with PELVIC FRACTURE</li></ul><p>★ <strong>NEET-PG 2020 Q10 — STRADDLE INJURY:</strong></p><p>Fall onto manhole / fence / bicycle bar → perineal injury + <strong>BLOOD at urethral meatus</strong> + urinary retention → ★ <strong>BULBAR (BULBOUS) URETHRA rupture</strong>.</p><p><strong>Anatomy:</strong> Bulbar urethra is part of the ANTERIOR urethra. Straddle force crushes it against the pubic symphysis.</p><p>Differential: posterior urethra (membranous part) rupture → seen in PELVIC FRACTURES (not straddle).</p>', tags: ['PYQ 2020 Q10', 'Bulbar urethra'] },
  'ri-bone': { label: 'Bone Fracture Healing — 5 Stages', info: '<ol><li><strong>Hematoma formation</strong> — 0 to 48 h</li><li><strong>Inflammation</strong> + cellular response — 2 to 5 days</li><li><strong>Soft callus / fibrocartilaginous</strong> — 1 to 3 weeks</li><li><strong>Hard / bony callus</strong> — 3 to 12 weeks</li><li><strong>Remodelling</strong> — months to years</li></ol><p>★ Forensic: estimating fracture AGE from x-ray callus pattern is testable — older the fracture, the more bony / remodelled the callus.</p>', tags: ['5 stages'] },
  'ri-compartment': { label: '★ Compartment Syndrome — PYQ 2018 Q11', info: '<p>★ <strong>NEET-PG 2018 Q11:</strong> Crush / fracture patient with FINGER BLACKENING — intern + ortho PG priority?</p><p>★ <strong>Answer: COMPARTMENT SYNDROME / vascular compromise — top priority.</strong></p><p><strong>Why first?</strong> Irreversible muscle + nerve necrosis can occur in 4–6 hours of ischemia → Volkmann&apos;s ischemic contracture if missed.</p><p><strong>★ 6 P&apos;s of compartment syndrome:</strong></p><ol><li><strong>Pain</strong> — out of proportion, worse on passive stretch</li><li><strong>Pallor</strong></li><li><strong>Pulselessness</strong> (late)</li><li><strong>Paresthesia</strong></li><li><strong>Paralysis</strong> (late)</li><li><strong>Poikilothermia</strong> (cold limb)</li></ol><p><strong>Treatment:</strong> EMERGENCY FASCIOTOMY · do NOT wait for confirmation if clinical suspicion is high.</p>', tags: ['PYQ 2018 Q11', '6 Ps'] }
};

function nodeList(ids) { return ids.map(id => ({ nodeId: id, ...NODES[id] })); }

const MCQS = {
  'RI-01': [
    { stem: 'Mild head injury on Glasgow Coma Scale is defined as:', options: ['GCS 8 or less','GCS 9–12','GCS 13–15','GCS &gt; 15'], answerIdx: 2, explain: 'Mild head injury = GCS 13–15, LOC &lt; 30 min. Moderate = GCS 9–12. Severe = GCS ≤ 8.', tag: '[PG-Inspired]' },
    { stem: 'Primary brain injuries include all EXCEPT:', options: ['Diffuse axonal injury','Cerebral concussion','Cerebral contusion','Cerebral edema'], answerIdx: 3, explain: 'Primary = at moment of impact: DAI, concussion, contusion, laceration. Secondary (delayed) = hematoma, edema, ischemia, herniation, infection, epilepsy.', tag: '[PG-Inspired]' },
    { stem: 'The most common intracranial hemorrhage overall is:', options: ['Extradural','Subdural','Subarachnoid','Intracerebral'], answerIdx: 2, explain: 'SAH is the most common intracranial hemorrhage. Causes: traumatic (laceration, contusion, vertebral A. tear) or pathological (berry aneurysm, AVM).', tag: '[PG-Inspired]' }
  ],
  'RI-02': [
    { stem: 'Spectacle hematoma (raccoon eyes) most strongly suggests:', options: ['Direct facial trauma','Fracture of base of skull','Subarachnoid hemorrhage','Sub-galeal hematoma'], answerIdx: 1, explain: 'Bilateral periorbital hemorrhage strongly suggests fracture of base of skull, usually floor of anterior cranial fossa. Battle sign (mastoid) is the posterior equivalent.', tag: '[PG-Inspired]' },
    { stem: 'A migratory contusion from the temporal scalp typically appears:', options: ['Around the eye','Behind the ear (battle sign)','At the chin','At the occiput'], answerIdx: 1, explain: 'A bruise in the temporal scalp gravitates downward and appears behind the ear — battle sign. Frontal scalp bruises gravitate to give black eye.', tag: '[PG-Inspired]' },
    { stem: 'A black eye may be produced by all of the following EXCEPT:', options: ['Direct trauma to the eye','Gravitation of blood from frontal scalp injury','Fracture of orbital floor','Subarachnoid hemorrhage'], answerIdx: 3, explain: '3 mechanisms of black eye: direct trauma, gravitation from frontal scalp, fracture of orbital floor (anterior cranial fossa). SAH does NOT cause black eye.', tag: '[PG-Inspired]' },
    { stem: 'Cauliflower ear is seen in:', options: ['Strangulation','Repeated trauma — boxers / wrestlers','Asphyxia','Drowning'], answerIdx: 1, explain: 'Cauliflower ear = repeated hematoma of pinna in boxers / wrestlers → fibrosis + deformity.', tag: '[PG-Inspired]' }
  ],
  'RI-03': [
    { stem: 'The thinnest bone of the skull (most vulnerable to fracture) is:', options: ['Frontal','Parietal','Temporal','Occipital'], answerIdx: 2, explain: 'Temporal bone is thinnest at 4 mm. Frontal/parietal 6–10 mm; occipital midline ≥ 15 mm. Thin temporal explains why middle meningeal artery (running underneath) is so commonly torn → EDH.', tag: '[PG-Inspired]' },
    { stem: 'Puppe&apos;s rule helps determine:', options: ['Severity of head injury','Sequence of multiple skull fractures','Age of fracture','Cause of death'], answerIdx: 1, explain: 'Puppe&apos;s rule: when multiple fractures from successive impacts meet, the LATER fracture TERMINATES in the earlier one — used to reconstruct sequence of blows.', tag: '[PG-Inspired]' },
    { stem: 'According to Holbourn&apos;s hypothesis, brain injury requires:', options: ['Pure linear acceleration','Linear deceleration','Rotational component','Compression alone'], answerIdx: 2, explain: 'Brain can distort but cannot be compressed; pure linear forces do not damage. A ROTATIONAL component is necessary to produce shear strain (Holbourn 1943).', tag: '[PG-Inspired]' },
    { stem: 'Struck-hoop analogy describes the mechanism of:', options: ['EDH formation','Skull fracture from local force','Brain herniation','SDH formation'], answerIdx: 1, explain: 'Struck-hoop: focal impact bends skull inward; incompressible skull bulges elsewhere; if force exceeds elasticity, both intruded + extruded areas fracture.', tag: '[PG-Inspired]' }
  ],
  'RI-04': [
    { stem: 'A signature fracture of the skull is:', options: ['Linear','Depressed (resembles weapon)','Comminuted','Pond'], answerIdx: 1, explain: 'Signature fracture = depressed fracture in which the pattern of depression resembles the SHAPE of the causative weapon (hammer head, brick edge, rod tip).', tag: '[PG-Inspired]' },
    { stem: 'Pond fracture of the skull is characteristically seen in:', options: ['Elderly with osteoporosis','Infants','Boxers','Adults with severe blunt trauma'], answerIdx: 1, explain: 'Pond / indented fracture occurs ONLY in infants — pliable bones distort like a ping-pong ball without true fracture.', tag: '[PG-Inspired]' },
    { stem: 'Gutter fracture of the skull is caused by:', options: ['Direct blow with hammer','Glancing / tangential bullet','Fall from height','Sharp weapon'], answerIdx: 1, explain: 'Gutter fracture = part-thickness furrow in bone — caused by glancing / tangential strike, classically a glancing bullet.', tag: '[PG-Inspired]' },
    { stem: 'Diastatic fracture of skull is most commonly seen in:', options: ['Newborns','Children + young adults','Middle-aged','Elderly'], answerIdx: 1, explain: 'Diastatic = along skull sutures, occurs in children + young adults because sutures are not yet fully fused.', tag: '[PG-Inspired]' },
    { stem: 'A spider-web pattern of skull fracture indicates:', options: ['Linear fracture','Combination of depressed + radial fissures','Pond fracture','Diastatic fracture'], answerIdx: 1, explain: 'Spider-web = severe local force causes both depressed (focal) + radial linear (general) fractures simultaneously. Synonym for non-displaced comminuted (mosaic) fracture.', tag: '[PG-Inspired]' }
  ],
  'RI-05': [
    { stem: 'Ring fracture around foramen magnum classically results from:', options: ['Direct blow to vertex','Fall from height landing on feet or buttock','Side-of-head blow','Stab wound'], answerIdx: 1, explain: 'Ring fracture: indirect violence — force transmitted upward through spinal column when person falls from height landing on feet/buttock, or downward force on vertex driving skull onto spine.', tag: '[PG-Inspired]' },
    { stem: 'Hinge fracture of the skull is also called:', options: ['Pond fracture','Motorcyclist&apos;s fracture','Chauffeur fracture','Ring fracture'], answerIdx: 1, explain: 'Hinge fracture = linear fracture across floor of middle cranial fossa, separating base into 2 halves. Classically from heavy blow to SIDE of head — "motorcyclist&apos;s fracture".', tag: '[PG-Inspired]' },
    { stem: 'Hutchinson fracture refers to:', options: ['Fracture of distal radius involving styloid','Hinge fracture of skull','Pond fracture','Fracture of clavicle'], answerIdx: 0, explain: 'Hutchinson fracture = distal radius involving styloid process; also called "chauffeur fracture" (crank handle recoil). Distinct from Hutchinson&apos;s TEETH (congenital syphilis).', tag: '[PG-Inspired]' },
    { stem: 'CSF rhinorrhea following head injury suggests fracture of:', options: ['Anterior cranial fossa','Middle cranial fossa','Posterior cranial fossa','Vault only'], answerIdx: 0, explain: 'CSF rhinorrhea (CSF from nose) = anterior cranial fossa fracture (cribriform plate). CSF otorrhea (from ear) = middle cranial fossa (petrous temporal).', tag: '[PG-Inspired]' }
  ],
  'RI-06': [
    { stem: 'Extradural hematoma most commonly results from rupture of:', options: ['Bridging veins','Middle meningeal artery','Berry aneurysm','Sagittal sinus'], answerIdx: 1, explain: 'EDH is most commonly from rupture of the middle meningeal artery (arterial bleed) following temporoparietal skull fracture.', tag: '[PG-Inspired]' },
    { stem: 'On CT, biconvex (lens-shaped) collection of blood is characteristic of:', options: ['SDH','EDH','SAH','ICH'], answerIdx: 1, explain: 'EDH appears as a BICONVEX / LENS-SHAPED hyperdensity on CT. SDH is CRESCENTIC / sickle-shaped. SAH = blood in cisterns/sulci.', tag: '[PG-Inspired]' },
    { stem: 'Lucid interval is most characteristic of:', options: ['EDH','SDH','SAH','ICH'], answerIdx: 0, explain: 'Lucid interval is the classical clinical sign of EDH — initial LOC, brief recovery, then deterioration. May also occur in some SDH but is EDH-defining.', tag: '[PG-Inspired]' },
    { stem: 'Subdural hematoma is most commonly due to rupture of:', options: ['Middle meningeal artery','Bridging veins','Berry aneurysm','AVM'], answerIdx: 1, explain: 'SDH = venous bleed from rupture of bridging veins crossing subdural space to reach sinuses. Largest bridging vein = great vein of Galen.', tag: '[PG-Inspired]' },
    { stem: 'Subarachnoid hemorrhage from spontaneous (pathological) cause is most commonly due to:', options: ['Trauma','Berry (saccular) aneurysm','Hypertension','AVM'], answerIdx: 1, explain: 'Berry / saccular aneurysm in Circle of Willis is the commonest pathological cause of SAH. Trauma is the commonest cause overall; berry aneurysm = commonest non-traumatic.', tag: '[PG-Inspired]' }
  ],
  'RI-07': [
    { stem: 'In EDH, ipsilateral fixed-dilated pupil is due to:', options: ['Optic nerve injury','Compression of CN III by uncus of temporal lobe','Brainstem hemorrhage','Direct eye injury'], answerIdx: 1, explain: 'EDH expands → ipsilateral uncus of temporal lobe herniates → compresses CN III → parasympathetic fibres paralysed → dilated, non-reactive pupil on SAME side as hematoma.', tag: '[PG-Inspired]' },
    { stem: 'SDH gravitates to dependent areas because it is:', options: ['Fixed at fracture site','Arterial high-pressure bleed','Mobile in subdural space','Contained within dura'], answerIdx: 2, explain: 'SDH is MOBILE in subdural space — gravitates to lower side; does NOT depend on site of force application (unlike EDH which sits at fracture site).', tag: '[PG-Inspired]' },
    { stem: 'Chronic SDH from natural causes is typically:', options: ['Unilateral','Bilateral','Always traumatic','In posterior fossa'], answerIdx: 1, explain: 'Chronic SDH from natural causes is usually bilateral; traumatic chronic SDH is usually unilateral. Pachymeningitis hemorrhagica = repeated bleeds enlarging chronic SDH.', tag: '[PG-Inspired]' },
    { stem: 'Siderophages in SDH typically appear at approximately:', options: ['Within 24 h','2–3 days','10–11 days','3–6 months'], answerIdx: 2, explain: 'In SDH dating, siderophages (hemosiderin macrophages) typically appear by 10–11 days. Hyalinisation of membrane occurs at 1–3 months.', tag: '[PG-Inspired]' }
  ],
  'RI-08': [
    { stem: 'Cerebral concussion is defined as:', options: ['Visible structural brain injury','Transient paralytic state with no structural damage, followed by amnesia','Diffuse axonal injury','Cerebral contusion'], answerIdx: 1, explain: 'Trotter (1914): "transient paralytic state due to head injury, instantaneous onset, no evidence of structural cerebral injury, always followed by amnesia from the moment of accident".', tag: '[PG-Inspired]' },
    { stem: 'Hallmark microscopic feature of diffuse axonal injury is:', options: ['Cone-shaped hemorrhage','Axonal swelling (retraction balls)','Neutrophil infiltrate','Liquefactive necrosis'], answerIdx: 1, explain: 'DAI hallmark = axonal swelling ("retraction balls") in cerebral white matter, corpus callosum, upper brainstem. Caused by angular/rotational acceleration-deceleration.', tag: '[PG-Inspired]' },
    { stem: 'Cerebral contusions are typically located at:', options: ['Periventricular region','Crests of brain convolutions (gyri) facing dura','Brainstem','Cerebellum'], answerIdx: 1, explain: 'Contusion hemorrhages occur at the crests of gyri facing dura, in a cone shape with base at dural surface and apex pointing into white matter.', tag: '[PG-Inspired]' },
    { stem: 'A standing person is struck on the parieto-occipital area by a moving iron rod. The brain injury produced under the impact is:', options: ['Coup','Contre-coup','DAI','SDH'], answerIdx: 0, explain: 'Stationary head + moving object = COUP injury (acceleration injury) at the site of impact. Moving head + stationary object (e.g., fall) = contre-coup at opposite site (deceleration).', tag: '[PG-Inspired]' },
    { stem: 'Punch-drunk syndrome (chronic traumatic encephalopathy) is classically seen in:', options: ['Footballers','Boxers','Cricketers','Swimmers'], answerIdx: 1, explain: 'Punch-drunk syndrome = chronic traumatic encephalopathy / dementia pugilistica — repeated minor head blows in BOXERS; described by Martland 1928. Features: slurred speech, slow thoughts, parkinsonian dementia.', tag: '[PG-Inspired]' },
    { stem: 'In boxing, the most common acute fatal intracranial lesion is:', options: ['Extradural hematoma','Subdural hematoma','Cerebral concussion','Diffuse axonal injury'], answerIdx: 1, explain: 'Acute fatal boxing lesion = SDH. EDH is RARE because boxing rarely causes skull fracture (which is needed for middle meningeal artery rupture).', tag: '[PG-Inspired]' }
  ],
  'RI-09': [
    { stem: 'The commonest site of spinal injury is:', options: ['Cervical','Thoraco-lumbar','Lumbo-sacral','Coccygeal'], answerIdx: 1, explain: 'Thoraco-lumbar segment is the commonest site of spinal injury, followed by lower cervical spine.', tag: '[PG-Inspired]' },
    { stem: 'Whiplash injury of the spine involves:', options: ['Direct trauma','Hyperflexion + hyperextension without fracture','Penetrating injury','Vertical compression'], answerIdx: 1, explain: 'Whiplash = sudden hyperflexion then hyperextension without fracture of vertebral column; classic in rear-end RTA. Results in cord contusion/laceration.', tag: '[PG-Inspired]' },
    { stem: 'Pithing as a homicidal method involves:', options: ['Strangulation with ligature','Inserting fine needle at nape between skull and upper cervical vertebra','Suffocation with pillow','Drowning'], answerIdx: 1, explain: 'Pithing = killing by inserting a fine needle into nape of neck between base of skull and upper cervical vertebra → transection of cord at cervico-medullary junction → instant death.', tag: '[PG-Inspired]' },
    { stem: '"Railway spine" refers to:', options: ['Whiplash injury','Spinal cord concussion from railway / motor collision','Cervical fracture from train accident','Spinal cord transection'], answerIdx: 1, explain: 'Spinal cord concussion → temporary paralysis affecting limbs or bladder/bowel, recovers ~48 h. Common in railway / motor collisions → "railway spine".', tag: '[PG-Inspired]' },
    { stem: 'In suicidal cut throat, which finding is characteristic?', options: ['Defence wounds on hands','Hesitation cuts','Carotid artery cut','Scene of crime disturbed'], answerIdx: 1, explain: 'Suicidal cut-throat: HESITATION cuts, multiple varying depths, oblique sloping toward floor of mouth, carotids usually preserved, no defence wounds, locked room. Homicidal: single deep wounds, defence wounds, no hesitation.', tag: '[PG-Inspired]' }
  ],
  'RI-10': [
    { stem: 'In a road traffic accident, traumatic diaphragmatic rupture is more common on:', options: ['Right side','Left side','Bilateral equally','Posterior central'], answerIdx: 1, explain: 'Diaphragmatic rupture is more common on LEFT side because the liver buffers / protects the right hemidiaphragm.', tag: '[PG-Inspired]' },
    { stem: 'Distended stomach when subjected to blunt trauma typically ruptures at:', options: ['Cardia','Fundus','Pyloric end along lesser curvature','Greater curvature'], answerIdx: 2, explain: 'Distended stomach ruptures at pyloric end along the lesser curvature due to deficient muscular layer, paucity of mucosal folds, and location of magenstrasse.', tag: '[PG-Inspired]' },
    { stem: 'A 35-year-old man fell on a manhole while walking. He presents with perineal injury, blood at the urethral meatus, and inability to pass urine. The most likely injury is:', options: ['Posterior urethra (membranous) rupture','Bulbar urethra rupture (straddle injury)','Bladder rupture','Pelvic fracture only'], answerIdx: 1, explain: 'Classic STRADDLE INJURY: fall onto manhole/fence/bicycle bar crushes anterior urethra (BULBAR/BULBOUS part) against pubic symphysis. Features: perineal injury + blood at meatus + retention. NEET-PG 2020 Q10 verbatim.', tag: '[NEET-PG 2020]' },
    { stem: 'A patient with a crush injury of the forearm presents with severe pain, paresthesia, and blackening of fingers. Intern + ortho PG priority?', options: ['IV antibiotics','Compartment syndrome — urgent fasciotomy','Amputation','X-ray and discharge'], answerIdx: 1, explain: 'Blackening finger + crush mechanism = COMPARTMENT SYNDROME. Vascular compromise top priority — irreversible necrosis in 4–6 h ischemia → Volkmann&apos;s contracture if missed. 6 Ps: pain, pallor, pulselessness, paresthesia, paralysis, poikilothermia. NEET-PG 2018 Q11.', tag: '[NEET-PG 2018]' },
    { stem: 'Flail chest is defined as:', options: ['1 rib broken in 1 place','2 ribs broken in 1 place each','≥ 2 ribs broken in ≥ 2 places each → paradoxical breathing','Multiple rib fractures with hemothorax'], answerIdx: 2, explain: 'Flail chest = ≥ 2 ribs broken in ≥ 2 places → free-floating segment moves paradoxically with respiration. Life-threatening — needs ventilation.', tag: '[PG-Inspired]' },
    { stem: 'In a road traffic accident, the most commonly injured solid abdominal organ in blunt trauma is:', options: ['Liver','Spleen','Kidney','Pancreas'], answerIdx: 1, explain: 'Spleen — thin capsule, weak supportive framework, friable pulp → most susceptible to blunt trauma. Liver also commonly injured.', tag: '[PG-Inspired]' }
  ]
};

const DIFF_TABLES = [
  {
    id: 'DT-1', title: 'EDH vs SDH vs SAH ★ — The Master Comparison', shortTitle: 'EDH vs SDH vs SAH',
    intro: 'The three classic traumatic intracranial hemorrhages — high-yield LAQ comparison.',
    columns: ['Feature','EDH','SDH','SAH'],
    rows: [
      ['Space','Skull ↔ Dura (epidural)','Dura ↔ Arachnoid','Arachnoid ↔ Pia (in CSF)'],
      ['<strong>Source</strong>','★ Middle meningeal ARTERY','★ Bridging VEINS','Trauma / ★ Berry aneurysm'],
      ['Bleed type','Arterial (high pressure)','Venous (low pressure)','Mixed'],
      ['<strong>Site</strong>','Temporoparietal (thin temporal bone)','Lateral cerebral hemisphere','Basal / convexity / sulci'],
      ['<strong>CT appearance</strong>','★ <strong>BICONVEX / lens-shaped</strong>','★ <strong>CRESCENTIC / sickle</strong>','Blood in cisterns + sulci'],
      ['<strong>Clinical hallmark</strong>','★ <strong>LUCID INTERVAL</strong>','Delayed deterioration, can have lucid interval','★ Thunderclap headache + neck stiffness'],
      ['Pupil','Ipsilateral fixed-dilated (uncal herniation)','Variable, less specific','Variable'],
      ['Limb weakness','Contralateral hemiparesis','Contralateral hemiparesis','Focal deficit'],
      ['Mobility','Fixed at fracture site','★ Mobile, gravitates','Diffuse'],
      ['Boxers','★ NEVER occurs (no fracture)','★ Most common acute lesion','May occur (berry aneurysm)'],
      ['Volume for signs','35 mL','35–100 mL','Variable'],
      ['Fatal volume','100 mL','—','Basal SAH rapidly fatal'],
      ['Contre-coup','★ NOT contre-coup','Can be','Often contre-coup'],
      ['Frequency','Less common','Common (esp. chronic in elderly)','★ MOST COMMON ICH']
    ],
    parentDiagrams: ['RI-06','RI-07'],
    mcqs: [
      { stem: 'Lucid interval is most characteristic of:', options: ['EDH','SDH','SAH','ICH'], answerIdx: 0, explain: 'Classical EDH sign — initial LOC, brief recovery, then deterioration.', tag: '[PG-Inspired]' },
      { stem: 'Biconvex lens-shaped hemorrhage on CT is:', options: ['SDH','EDH','SAH','IVH'], answerIdx: 1, explain: 'EDH = biconvex (limited by dural attachments to skull). SDH = crescentic (spreads along dura).', tag: '[PG-Inspired]' },
      { stem: 'In boxers, the most common acute intracranial lesion is:', options: ['EDH','SDH','SAH','ICH'], answerIdx: 1, explain: 'SDH most common in boxers. EDH almost never occurs because boxing rarely causes skull fracture.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-2', title: 'Coup vs Contre-Coup Contusion', shortTitle: 'Coup vs Contre-Coup',
    columns: ['Feature','Coup','Contre-Coup'],
    rows: [
      ['Site','★ At site of impact','★ Opposite to impact'],
      ['<strong>Mechanism</strong>','Stationary head + MOVING object','MOVING head + stationary object'],
      ['Classic example','Standing victim hit by iron rod','Falling person + skull hits ground'],
      ['Force type','★ Acceleration injury','★ Deceleration injury'],
      ['Brain dynamics','Brain lags behind skull at impact site','Skull stops; brain continues into opposite wall'],
      ['Severity','Relatively minor','Extensive contusion'],
      ['Skull fracture','May coexist (under impact)','May coexist (less often)']
    ],
    parentDiagrams: ['RI-08'],
    mcqs: [
      { stem: 'A person falls backward and strikes the back of the head. The most extensive brain injury is most likely:', options: ['Coup occipital','Contre-coup frontal','SDH parietal','Brainstem'], answerIdx: 1, explain: 'Falling = moving head striking stationary object = deceleration → contre-coup is extensive. Skull stops, brain continues forward → frontal contre-coup contusion.', tag: '[PG-Inspired]' },
      { stem: 'Coup injury is also called:', options: ['Deceleration injury','Acceleration injury','Shear injury','Rotational injury'], answerIdx: 1, explain: 'Coup = acceleration injury — stationary head + moving object. Contre-coup = deceleration injury.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-3', title: 'Concussion vs Contusion vs DAI', shortTitle: 'Concussion vs Contusion vs DAI',
    columns: ['Feature','Concussion','Contusion','DAI'],
    rows: [
      ['Definition','Transient paralytic state with NO structural damage','Circumscribed blood extravasation, cortex intact','Diffuse axonal damage from rotation'],
      ['<strong>Mechanism</strong>','Low-level acceleration/deceleration','Shear forces at impact','★ Angular/rotational acceleration-deceleration'],
      ['<strong>Microscopy</strong>','None / rare punctate hemorrhages','Hemorrhage at gyral crests, cone-shape','★ Axonal swelling (retraction balls)'],
      ['Location','Diffuse','★ Crests of gyri facing dura','White matter, corpus callosum, upper brainstem'],
      ['Consciousness','Transient LOC + amnesia','Variable','Often prolonged coma'],
      ['Reversibility','Reversible','Partial','Often persistent vegetative state'],
      ['Grading','3 grades (Cantu)','Hemorrhage / necrosis / tear','★ 3 Adams grades']
    ],
    parentDiagrams: ['RI-08'],
    mcqs: [
      { stem: 'The hallmark microscopic finding in diffuse axonal injury is:', options: ['Cone-shaped hemorrhage','Axonal retraction balls','Liquefactive necrosis','Hyaline membrane'], answerIdx: 1, explain: 'DAI = axonal swelling (retraction balls) in white matter, corpus callosum, upper brainstem.', tag: '[PG-Inspired]' },
      { stem: 'Cerebral concussion is BEST defined by:', options: ['Visible structural injury','Transient paralytic state, no structural damage, with amnesia','Diffuse hemorrhage','Coma &gt; 48 h'], answerIdx: 1, explain: 'Trotter definition (1914) — transient, instantaneous, no structural damage, always followed by amnesia.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-4', title: '8 Skull Fracture Patterns — Quick Compare', shortTitle: '8 Skull Fractures',
    intro: '5 vault + 3 representative basilar patterns for the LAQ-grade comparison table.',
    columns: ['Type','Mechanism','Key feature','Clinical clue'],
    rows: [
      ['<strong>Linear (fissured)</strong>','Blunt force, large area','★ COMMONEST type','May extend to suture in children → diastatic'],
      ['<strong>Depressed (signature)</strong>','Severe local force, small area','Bone driven inward; shape = weapon','Hammer / brick / rod identifiable'],
      ['<strong>Comminuted</strong>','Severe local force, focal + general','Multiple fragments; mosaic/spider-web if non-displaced','Massive impact'],
      ['<strong>Pond / indented</strong>','Force on pliable bone','★ Dent without true fracture','★ INFANTS only'],
      ['<strong>Gutter</strong>','Tangential / glancing strike','Part-thickness furrow','★ Glancing BULLET'],
      ['<strong>Diastatic</strong>','Force along suture','Separation of cranial sutures','★ Children + young adults (non-fused sutures)'],
      ['<strong>Ring (basilar)</strong>','Indirect — feet/buttock impact OR vertex','Fissure around foramen magnum','Fall from height landing on feet/buttock'],
      ['<strong>Hinge (basilar)</strong>','Side-of-head blow','Linear ear-to-ear across middle fossa, base in 2 halves','★ "Motorcyclist&apos;s fracture"']
    ],
    parentDiagrams: ['RI-04','RI-05'],
    mcqs: [
      { stem: 'A "signature fracture" of the skull is:', options: ['Linear','Depressed (weapon-shaped)','Pond','Diastatic'], answerIdx: 1, explain: 'Depressed = signature; pattern resembles weapon.', tag: '[PG-Inspired]' },
      { stem: 'Hinge fracture is also known as:', options: ['Pond fracture','Motorcyclist&apos;s fracture','Chauffeur fracture','Ring fracture'], answerIdx: 1, explain: 'Hinge = motorcyclist&apos;s; linear across floor of middle cranial fossa from side-of-head impact.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-5', title: 'Suicidal vs Homicidal Cut-Throat', shortTitle: 'Suicidal vs Homicidal Cut-Throat',
    intro: 'Forensic differentiation for cut-throat injury cases (overlap with Ch 9 Mechanical Injury).',
    columns: ['Feature','Suicidal','Homicidal'],
    rows: [
      ['Number of wounds','★ Multiple, varying length + depth','Single or few, deep'],
      ['<strong>Hesitation cuts</strong>','★ PRESENT','★ ABSENT'],
      ['Tailing','Right side (right-handed)','Either side'],
      ['Direction','Oblique, sloping TOWARDS floor of mouth','Horizontal, sloping AWAY from floor of mouth'],
      ['Carotid arteries','Usually preserved','Frequently cut'],
      ['<strong>Defence wounds</strong>','★ ABSENT','★ PRESENT (hands, forearms)'],
      ['Suicide note','May be present','Absent'],
      ['Scene','Secluded, room locked from inside, undisturbed','Any place, scene disturbed, no locking'],
      ['Weapon','At hand of deceased, often grasped','At scene or absent']
    ],
    parentDiagrams: ['RI-09'],
    mcqs: [
      { stem: 'Hesitation cuts in cut-throat injury suggest:', options: ['Homicidal','Suicidal','Accidental','Postmortem'], answerIdx: 1, explain: 'Hesitation cuts are tentative shallow cuts before the fatal one — classic of suicidal attempt.', tag: '[PG-Inspired]' },
      { stem: 'Defence wounds on hands point to:', options: ['Suicidal','Homicidal','Accidental','Self-inflicted'], answerIdx: 1, explain: 'Defence wounds = victim raises hands to protect → cuts on palm, forearm, fingers. Indicates homicide.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-6', title: 'Antemortem vs Postmortem Skull Fracture', shortTitle: 'AM vs PM Fracture',
    intro: 'Critical forensic distinction in head-injury cases.',
    columns: ['Feature','Antemortem fracture','Postmortem fracture / artefact'],
    rows: [
      ['Vital reaction','★ PRESENT (hemorrhage in soft tissue, swelling)','ABSENT'],
      ['Hemorrhage at fracture line','Active extravasation, infiltration of margins','Minimal / none'],
      ['Sub-galeal hematoma','Present','Absent'],
      ['Bone edges','Sharp, irregular','May be rounded if old'],
      ['Diastasis confusion','True fracture, infiltration','PM separation of sutures from putrefaction gas (esp. children)'],
      ['Heat hematoma differential','True EDH','Heat artefact in burns (Ch 14) — CO in clot'],
      ['Fracture age','Estimated by callus stage (bone) or healing (skull rarely heals like long bone)','Not applicable'],
      ['Histology','PMN infiltrate, fibrin','No infiltrate']
    ],
    parentDiagrams: ['RI-04','RI-05'],
    mcqs: [
      { stem: 'The BEST evidence that a skull fracture is antemortem is:', options: ['Sharpness of edges','★ Vital reaction (sub-galeal hematoma + soft tissue infiltration)','Number of fragments','Fracture pattern'], answerIdx: 1, explain: 'Vital reaction (sub-galeal hematoma, soft tissue infiltration with blood, swelling) confirms antemortem. PM fractures lack vital reaction.', tag: '[PG-Inspired]' }
    ]
  }
];

const SUBJ = [
  {
    id: 'SAQ-11.1', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Describe different types of skull fractures, their characteristics and mechanism of causation.',
    answer: `<h4>Classification of Skull Fractures</h4>
<p>Skull fractures are classified into <strong>fractures of the VAULT (8 types)</strong> and <strong>fractures of the BASE (5 types)</strong>.</p>
<h4>Mechanism (Rowbotham&apos;s hypothesis — 2 mechanisms)</h4>
<ol>
<li><strong>Direct force fracture</strong> — by local OR general deformation of skull. The "struck-hoop" analogy explains how a focal blow can simultaneously cause inward depression at the impact site AND a compensatory bulge → fracture elsewhere if elastic limit is exceeded.</li>
<li><strong>Indirect violence</strong> — force applied away from skull but transmitted to it. Example: fall from height landing on feet → spinal column transmits force upward → ring fracture around foramen magnum.</li>
</ol>
<h4>Fractures of Vault — 8 Types</h4>
<table><tr><th>Type</th><th>Characteristic</th><th>Mechanism</th></tr>
<tr><td><strong>Linear (fissured)</strong></td><td>★ Commonest; straight/curved; may involve outer/inner/both tables</td><td>Blunt force over large area (general deformation)</td></tr>
<tr><td><strong>Depressed (signature)</strong></td><td>Bone driven inward; ★ pattern resembles SHAPE of weapon</td><td>Severe local force, small contact area (e.g., hammer)</td></tr>
<tr><td><strong>Comminuted</strong></td><td>Multiple fragments; non-displaced = ★ SPIDER-WEB/mosaic</td><td>Very severe local force, focal + general deformation</td></tr>
<tr><td><strong>Pond (indented)</strong></td><td>★ INFANTS only; dent without true fracture</td><td>Pliable infant skull distorts like ping-pong ball</td></tr>
<tr><td><strong>Gutter</strong></td><td>Part-thickness furrow in bone</td><td>★ Tangential / glancing strike — glancing BULLET</td></tr>
<tr><td><strong>Diastatic (sutural)</strong></td><td>Separation along skull sutures</td><td>★ Children + young adults — non-fused sutures separate</td></tr>
<tr><td><strong>Perforating</strong></td><td>Both tables perforated; shape = offending agent</td><td>Sharp pointed object OR bullet</td></tr>
<tr><td><strong>Cut</strong></td><td>Clean-cut gap = blade thickness</td><td>Sharp weapon — sword, chopper, machete</td></tr></table>
<h4>Fractures of Base — 5 Types</h4>
<table><tr><th>Type</th><th>Characteristic</th><th>Mechanism</th></tr>
<tr><td><strong>Linear / fissured basilar</strong></td><td>Commonest basilar pattern; extension from vault</td><td>Direct or indirect</td></tr>
<tr><td><strong>Ring</strong></td><td>★ Fissure around foramen magnum (posterior fossa)</td><td>★ Fall from height landing on feet/buttock; OR severe vertex impact driving skull on spine</td></tr>
<tr><td><strong>Hinge</strong></td><td>★ Linear across floor of middle cranial fossa; base in 2 halves</td><td>★ Heavy blow to SIDE of head — "MOTORCYCLIST&apos;S fracture"</td></tr>
<tr><td><strong>Longitudinal</strong></td><td>Sagittal extension through base; petrous bone → deafness</td><td>Direct base impact</td></tr>
<tr><td><strong>Secondary (indirect)</strong></td><td>Cribriform plate fracture</td><td>Blow on chin — force transmitted via maxilla to base</td></tr></table>
<h4>★ Puppe&apos;s Rule</h4>
<p>When 2 or more fractures from SUCCESSIVE impacts meet, the LATER fracture TERMINATES in the EARLIER one. Used to reconstruct the SEQUENCE of blows in multi-impact homicides.</p>`,
    sources: ['RI-04 Vault Fractures · RI-05 Basilar Fractures'],
    jumpToDiagram: 'RI-04'
  },
  {
    id: 'SAQ-11.2', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Punch-drunk syndrome — write a short note.',
    answer: `<h4>Definition</h4>
<p><strong>Punch-drunk syndrome</strong> (Martland 1928) = <strong>chronic traumatic encephalopathy (CTE)</strong> = "<strong>dementia pugilistica</strong>" — a progressive neurodegenerative state seen in <strong>BOXERS</strong> from <strong>REPEATED minor head blows</strong> over a career.</p>
<h4>Mechanism</h4>
<p>Each blow transmits sub-fatal acceleration/deceleration force through the brain — repeated micro-axonal injury accumulates over years → cortical neuronal loss + tau aggregation.</p>
<h4>Acute Boxing Injuries (for differential)</h4>
<ul>
<li>★ Acute fatal lesion = <strong>SUBDURAL HEMATOMA</strong> (rupture of bridging veins from acceleration-deceleration with rotational component)</li>
<li>★ <strong>EDH NEVER occurs</strong> in boxing — boxing hardly causes skull fracture (which is needed for middle meningeal artery rupture)</li>
<li>SAH may occur from rupture of pre-existing berry aneurysm</li>
<li>Death may occur in the ring OR after removal to hospital</li>
</ul>
<h4>★ Chronic Clinical Features (Punch-Drunk Syndrome)</h4>
<ul>
<li>Deterioration in <strong>SPEED</strong> + <strong>COORDINATION</strong></li>
<li><strong>Slurred speech</strong></li>
<li><strong>Defective memory</strong> + slow thoughts</li>
<li><strong>Stiff limbs</strong> · <strong>ATAXIA</strong> · unsteady gait</li>
<li>★ <strong>PARKINSONIAN-like DEMENTIA</strong> (rigidity, bradykinesia, tremor)</li>
<li>Personality changes — irritability, aggression, depression</li>
</ul>
<h4>Brain Pathology</h4>
<ul>
<li><strong>Cortical atrophy</strong></li>
<li><strong>Hydrocephalus</strong></li>
<li><strong>Perforation of septum pellucidum</strong></li>
<li>Loss of neurons from <strong>cerebellum</strong> and <strong>substantia nigra</strong> (explains parkinsonism)</li>
<li>Tau-positive neurofibrillary tangles</li>
</ul>
<h4>Medicolegal Importance</h4>
<ul>
<li>May be CONFUSED with concussion / drunkenness on examination (retrograde amnesia + slurred speech)</li>
<li>Symptoms can mimic schizophrenia / senile dementia</li>
<li>Increasing recognition in other contact sports (NFL, rugby)</li>
<li>Insurance / professional licensing implications</li>
</ul>`,
    sources: ['RI-08 Brain Injury · Punch-Drunk Node'],
    jumpToDiagram: 'RI-08'
  },
  {
    id: 'SAQ-11.3', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Subdural hemorrhage — describe causes, mechanism, types, clinical features, and findings for dating.',
    answer: `<h4>Definition</h4>
<p><strong>Subdural hematoma (SDH)</strong> = collection of blood in the subdural space (between dura mater and arachnoid membrane).</p>
<h4>Causes</h4>
<p><strong>1. Trauma (commonest):</strong></p>
<ul><li>★ Rupture of <strong>BRIDGING VEINS</strong> (most common source) — they cross the subdural space to reach venous sinuses; the largest is the great vein of Galen</li>
<li>Rupture of dural venous sinuses</li>
<li>Laceration / contusion of brain + dura</li>
<li>Rarely arterial — small rents in arachnoid arteries</li></ul>
<p><strong>2. Pathological:</strong></p>
<ul><li>Rupture of intracranial aneurysm</li>
<li>AVM</li>
<li>Hypertensive bleed within superficial brain rupturing into subdural space</li></ul>
<h4>Site</h4>
<ul><li><strong>Commonest:</strong> ★ lateral aspect of cerebral hemisphere</li>
<li><strong>Least common:</strong> posterior cranial fossa (around brainstem, cerebellum)</li></ul>
<h4>Mechanism</h4>
<p>★ Change in head velocity (acceleration/deceleration) WITH a ROTATIONAL component → gliding movement between dura and skull → tearing of bridging veins → subdural bleed.</p>
<p>★ SDH is MOBILE — gravitates to lower side; does NOT depend on the site of force application (unlike EDH).</p>
<h4>Types (3 — by duration since trauma)</h4>
<ol>
<li><strong>Acute</strong> — patient presents within 48–72 hours</li>
<li><strong>Subacute</strong> — presents 3–20 days</li>
<li><strong>Chronic</strong> — 3 weeks to several months</li>
</ol>
<h4>Acute SDH — Clinical Features</h4>
<ul><li>Onset delayed (venous, slow to accumulate); 35–100 mL required for signs</li>
<li>Lucid interval may be present</li>
<li>Gradual decline in consciousness</li>
<li>Speech defects · ipsilateral pupillary disturbance · contralateral hemiparesis</li></ul>
<h4>Chronic SDH</h4>
<ul><li>Elderly + chronic alcoholics — brain atrophy → larger subdural space → bridging veins more easily torn</li>
<li>Natural-cause chronic SDH often BILATERAL; traumatic usually UNILATERAL</li>
<li>Symptoms mimic schizophrenia / senile / pre-senile dementia</li>
<li>Pachymeningitis hemorrhagica — repeated bleeds enlarging the encapsulated SDH</li>
<li>Gross: recent = red-brown gelatinous; older = firm, tough, loculated</li></ul>
<h4>★ Microscopic Dating of SDH</h4>
<table><tr><th>Period</th><th>Clot</th><th>Dural surface</th></tr>
<tr><td>24 hour</td><td>Fresh clot, intact RBCs</td><td>Thin fibrin layer</td></tr>
<tr><td>2-3 days</td><td>Intact RBCs</td><td>Early fibroblastic activity</td></tr>
<tr><td>4-5 days</td><td>RBCs lose contour</td><td>2-5 layer neomembrane</td></tr>
<tr><td>5-8 days</td><td>RBC lysis, clot liquefies</td><td>12-14 fibroblast layers</td></tr>
<tr><td>10-11 days</td><td>Clot in islands; siderophages appear</td><td>Capillaries + fibrin strands</td></tr>
<tr><td>15-17 days</td><td>—</td><td>¼–½ thickness of dura</td></tr>
<tr><td>18-26 days</td><td>Large vessels permeate</td><td>= full thickness of dura</td></tr>
<tr><td>1-3 months</td><td>Giant capillaries; rebleed common</td><td>★ Hyalinisation</td></tr>
<tr><td>3-6 months</td><td>Fresh hemorrhage may occur</td><td>Hyalinised, thick, fibrous (like dura)</td></tr></table>
<h4>Medicolegal Importance</h4>
<ul><li>Lucid interval may be present (defence may use this)</li>
<li>Chronic SDH symptoms mistaken for psychiatric / dementia illness — autopsy clarifies</li>
<li>Bilateral chronic SDH suggests natural-cause; unilateral suggests trauma</li>
<li>Microscopic dating helps correlate alleged injury with autopsy findings</li></ul>`,
    sources: ['RI-06 · RI-07 SDH Deep Dive'],
    jumpToDiagram: 'RI-07'
  },
  {
    id: 'SAQ-11.4', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Classify skull fractures and describe each briefly with characteristic features.',
    answer: `<h4>Classification</h4>
<p>Skull fractures are classified into:</p>
<p><strong>A) Fractures of the VAULT (8 types)</strong></p>
<ol>
<li><strong>Linear (fissured)</strong> — ★ commonest; straight or curved; in children may extend into suture line (becomes diastatic).</li>
<li><strong>Depressed (signature)</strong> — bone driven inward; pattern resembles the SHAPE of the weapon ("fracture à la signature").</li>
<li><strong>Comminuted</strong> — multiple fragments; non-displaced variant = spider-web / mosaic pattern.</li>
<li><strong>Pond (indented)</strong> — ★ INFANTS only; dent / dimple without actual fracture due to pliable bones.</li>
<li><strong>Gutter</strong> — part-thickness furrow caused by a tangential / glancing strike, classically a glancing bullet.</li>
<li><strong>Diastatic (sutural)</strong> — separation along skull sutures; children + young adults with non-fused sutures.</li>
<li><strong>Perforating</strong> — both tables perforated; shape corresponds to offending agent (bullet or pointed weapon).</li>
<li><strong>Cut</strong> — sharp-edged weapon (sword, chopper); if both tables involved, gap = blade thickness.</li>
</ol>
<p><strong>B) Fractures of the BASE (5 types)</strong></p>
<ol>
<li><strong>Linear / fissured basilar</strong> — commonest basilar; extension from vault.</li>
<li><strong>Ring</strong> — fissure around foramen magnum (posterior fossa); from fall on feet/buttock or severe vertex impact driving skull on spine.</li>
<li><strong>Hinge</strong> — linear fracture across floor of middle cranial fossa, separating base into two halves; ★ called "MOTORCYCLIST&apos;S FRACTURE" — from heavy blow to side of head.</li>
<li><strong>Longitudinal</strong> — sagittal through base; petrous bone often → deafness.</li>
<li><strong>Secondary (indirect)</strong> — cribriform plate fracture from chin blow (force transmitted via maxilla).</li>
</ol>
<h4>Clinical Signs of Basilar Fracture</h4>
<ul><li>★ <strong>Spectacle hematoma (raccoon eyes)</strong> — bilateral periorbital bruising (anterior fossa)</li>
<li>★ <strong>Battle sign</strong> — bruising over mastoid behind ear (middle / posterior fossa)</li>
<li><strong>CSF rhinorrhea</strong> (anterior fossa) · <strong>CSF otorrhea</strong> (middle fossa)</li>
<li><strong>Hemotympanum</strong> · bleeding from ear / nose</li>
<li>Cranial nerve palsies (CN I, VII, VIII)</li></ul>
<h4>Complications</h4>
<p>Brain injury · intracranial hemorrhage · meningitis · cranial pneumatocele · cranial nerve injury · traumatic epilepsy · CSF leak · coma · cerebral edema · raised ICP · death.</p>`,
    sources: ['RI-04 · RI-05'],
    jumpToDiagram: 'RI-04'
  },
  {
    id: 'LAQ-11.1', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank',
    question: 'Skull Fractures — describe the five types of skull fractures, their causative mechanisms, and how you would estimate the age of a fracture.',
    answer: `<h4>Mechanism of Skull Fracture (Rowbotham&apos;s Hypothesis)</h4>
<p>Skull fractures arise by:</p>
<ol>
<li><strong>Direct force fracture</strong> — by LOCAL deformation (struck-hoop analogy) or GENERAL deformation (compression in one plane → bulge in another).</li>
<li><strong>Indirect violence</strong> — force applied away from skull but transmitted (fall on feet → ring fracture; blow on chin → cribriform plate fracture).</li>
</ol>
<h4>Five Types of Skull Fractures (with mechanism)</h4>
<h5>1. Linear (Fissured) Fracture</h5>
<ul><li>★ Most common type</li>
<li>Straight or curved fissure; may involve outer / inner / both tables</li>
<li>★ Mechanism: blunt force over a large area (general deformation principle)</li>
<li>In children, may extend into a suture line → diastatic</li></ul>
<h5>2. Depressed (Signature) Fracture</h5>
<ul><li>Fractured bone DRIVEN INWARD into cranial cavity</li>
<li>★ Pattern resembles SHAPE of the causative weapon ("fracture à la signature")</li>
<li>★ Mechanism: severe LOCAL force with small contact area (hammer, brick edge, rod tip)</li>
<li>Forensic value: weapon may be identifiable from the impression</li></ul>
<h5>3. Comminuted Fracture</h5>
<ul><li>Bone broken into multiple pieces</li>
<li>★ Non-displaced comminuted = SPIDER-WEB / MOSAIC = central depressed + radial linear</li>
<li>★ Mechanism: very severe local force producing focal AND general deformation simultaneously</li></ul>
<h5>4. Pond (Indented) Fracture</h5>
<ul><li>★ Occurs ONLY in INFANTS</li>
<li>Dent / dimple-like depression — NO actual fracture line</li>
<li>★ Mechanism: pliable infant bones distort under impact without fracturing (like squeezing a ping-pong ball)</li>
<li>Always investigate suspected child abuse</li></ul>
<h5>5. Gutter Fracture</h5>
<ul><li>★ Part-thickness furrow / gutter in skull bone</li>
<li>★ Mechanism: TANGENTIAL / GLANCING strike — classic cause is a GLANCING BULLET</li>
<li>Differentiates from perforating (which goes through both tables)</li></ul>
<p><strong>(Additional types — diastatic, perforating, cut, ring, hinge — also examinable; key points covered in SAQ-11.1.)</strong></p>
<h4>★ Estimation of AGE of Skull Fracture</h4>
<p>Unlike long bones, the skull (especially adult diploe) shows limited osseous union — fracture lines persist for years. Age estimation relies on:</p>
<h5>A) Sub-galeal / soft-tissue hemorrhage</h5>
<ul><li>Fresh (&lt; 24 h): bright red, fluid, infiltrating</li>
<li>1–3 days: dark clot, organised</li>
<li>1 week: yellow-brown, undergoing absorption</li>
<li>&gt; 2 weeks: largely resorbed</li></ul>
<h5>B) Bone margin appearance</h5>
<ul><li>★ Recent (≤ 1 week): sharp, well-defined edges; hemorrhage in margins</li>
<li>★ 1–4 weeks: edges still sharp; minimal callus (skull heals poorly)</li>
<li>★ Months: edges rounded by osteoclastic activity; minimal new bone</li>
<li>★ Years: fibrous union; line persists but is rounded and smooth</li></ul>
<h5>C) Histology of fracture line</h5>
<ul><li>0–48 h: hemorrhage + fibrin</li>
<li>2–5 days: PMN infiltrate, early granulation</li>
<li>1–3 weeks: fibroblasts, collagen, early osteoid</li>
<li>3 weeks–months: woven bone, gradual remodelling</li>
<li>Months–years: lamellar bone, mature union</li></ul>
<h5>D) Associated intracranial findings</h5>
<ul><li>Fresh EDH / SDH dating (see SDH table — siderophages by 10–11 days, hyalinisation 1–3 months)</li>
<li>Old healed dural defect, brain scar, glial cyst → suggests old fracture</li></ul>
<h4>Differential — antemortem vs postmortem fracture</h4>
<ul><li>★ Antemortem: vital reaction present (sub-galeal hematoma, soft-tissue blood infiltration, swelling)</li>
<li>Postmortem: no vital reaction; differentiate from PM separation of skull sutures by putrefaction gas (esp. in children)</li>
<li>Beware HEAT artefacts (heat hematoma mimics EDH — CO in clot confirms heat origin; Ch 14)</li></ul>`,
    sources: ['RI-03 · RI-04 · RI-05 · DT-6'],
    jumpToDiagram: 'RI-04'
  },
  {
    id: 'LAQ-11.2', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank',
    question: 'Head Injury — define, classify, and describe intracranial injuries with mechanism and medicolegal importance.',
    answer: `<h4>Definition</h4>
<p><strong>Head injury</strong> = any injury sustained by the scalp, skull, meninges, brain, and / or its blood vessels following external force.</p>
<h4>Classification by Severity (Glasgow Coma Scale)</h4>
<table><tr><th>Type</th><th>GCS</th><th>Loss of consciousness</th></tr>
<tr><td>Mild / minor</td><td>13–15</td><td>&lt; 30 minutes</td></tr>
<tr><td>Moderate</td><td>9–12</td><td>30 min to 6 hours</td></tr>
<tr><td>Severe</td><td>≤ 8</td><td>&gt; 6 hours</td></tr></table>
<h4>Anatomical Regions of Head Injury</h4>
<ol>
<li><strong>Scalp</strong> — abrasion, contusion, laceration, incised, avulsion, sub-galeal hematoma</li>
<li><strong>Skull</strong> — 8 vault + 5 basilar fracture patterns (see SAQ-11.1, LAQ-11.1)</li>
<li><strong>Meninges</strong> — 4 intracranial hemorrhages (EDH, SDH, SAH, ICH) + IVH</li>
<li><strong>Brain</strong> — primary + secondary brain injury</li>
</ol>
<h4>Primary vs Secondary Brain Injury</h4>
<p><strong>Primary (at moment of impact):</strong></p>
<ol><li>Diffuse axonal injury (DAI)</li>
<li>Cerebral concussion</li>
<li>Cerebral contusion + laceration</li></ol>
<p><strong>Secondary (delayed, from primary):</strong></p>
<ol><li>Intracranial hematoma</li>
<li>Cerebral edema · ischemia · herniation</li>
<li>Infection · epilepsy · hydrocephalus</li></ol>
<h4>Intracranial Hemorrhages — DETAILED</h4>
<h5>1. ★ EXTRADURAL HEMATOMA (EDH)</h5>
<ul><li><strong>Space:</strong> between skull and dura</li>
<li><strong>Source:</strong> ★ middle meningeal artery (arterial, most common); diploic veins / venous sinuses rare</li>
<li><strong>Site:</strong> ★ temporoparietal (thin temporal bone, 4 mm)</li>
<li><strong>Mechanism:</strong> usually with skull fracture causing dura to separate and tear artery</li>
<li><strong>CT:</strong> ★ BICONVEX / lens-shaped hyperdensity</li>
<li><strong>Clinical:</strong> ★ LUCID INTERVAL → contralateral hemiparesis → ipsilateral fixed-dilated pupil (CN III by uncus) → coma → death (brainstem compression, cerebellar tonsillar herniation)</li>
<li><strong>Fatality:</strong> 35 mL → signs; 100 mL → fatal</li>
<li>★ NOT a contre-coup injury</li></ul>
<h5>2. ★ SUBDURAL HEMATOMA (SDH)</h5>
<ul><li><strong>Space:</strong> between dura and arachnoid</li>
<li><strong>Source:</strong> ★ bridging veins (venous, most common) — largest = great vein of Galen</li>
<li><strong>Site:</strong> ★ lateral cerebral hemisphere</li>
<li><strong>Mechanism:</strong> change in head velocity with rotational component → gliding tears bridging veins</li>
<li><strong>CT:</strong> ★ CRESCENTIC / sickle-shaped</li>
<li><strong>Types:</strong> acute (&lt; 48–72 h) · subacute (3–20 d) · chronic (&gt; 3 weeks)</li>
<li><strong>Chronic SDH:</strong> elderly / alcoholics; mimics dementia / schizophrenia</li>
<li>★ Most common acute lesion in BOXERS</li></ul>
<h5>3. ★ SUBARACHNOID HEMORRHAGE (SAH)</h5>
<ul><li><strong>Space:</strong> between arachnoid and pia (CSF compartment)</li>
<li>★ <strong>MOST COMMON intracranial hemorrhage</strong></li>
<li><strong>Traumatic causes:</strong> laceration of brain · cortical contusion · severe hyperextension · ★ blow on neck → vertebral artery laceration → basal SAH (rapidly fatal)</li>
<li><strong>Pathological:</strong> ★ Berry (saccular) aneurysm · AVM · bleeding dyscrasia</li>
<li><strong>Clinical:</strong> "thunderclap" headache, neck stiffness, photophobia, LOC</li>
<li>Old SAH → yellow leptomeninges</li></ul>
<h5>4. INTRACEREBRAL HEMORRHAGE (ICH)</h5>
<ul><li>Within brain parenchyma; 2–5 cm; demarcated</li>
<li>Traumatic (shearing) or non-traumatic (★ hypertension, AVM, tumor bleed)</li></ul>
<h5>5. INTRAVENTRICULAR HEMORRHAGE (IVH)</h5>
<ul><li>Bleeding into ventricles; usually arterial</li>
<li>★ Sole IVH → suggests head striking firm object (fall-like injury)</li>
<li>Causes: trauma · retrograde SAH · ruptured AVM · berry aneurysm of PCom A. or basilar A.</li></ul>
<h4>Primary Brain Injuries</h4>
<ul><li><strong>Cerebral concussion</strong> — transient paralytic state, no structural damage, always followed by amnesia (Trotter 1914). Grades 1–3.</li>
<li><strong>Cerebral contusion</strong> — circumscribed blood extravasation; cortex intact; ★ cone-shaped at gyral crests, base at dural surface.</li>
<li><strong>Coup vs Contre-coup</strong> — coup = stationary head + moving object (acceleration); contre-coup = moving head + stationary object (deceleration, extensive).</li>
<li><strong>Diffuse axonal injury (DAI)</strong> — ★ angular/rotational acceleration; hallmark = axonal swelling (retraction balls) in white matter, corpus callosum, upper brainstem. Adams 3 grades.</li>
<li><strong>Cerebral laceration</strong> — loss of brain substance continuity; tear of pia + SAH.</li></ul>
<h4>★ Medicolegal Importance</h4>
<ol>
<li><strong>Lucid interval</strong> — defence may argue victim was "fine" between injury and death (EDH classic, SDH possible)</li>
<li><strong>Traumatic vs spontaneous bleed</strong> — pre-existing aneurysm rupture precipitated by trivial trauma is a defence grey zone</li>
<li><strong>Mechanism reconstruction</strong> — coup vs contre-coup tells whether head was moving or stationary; Puppe&apos;s rule reconstructs sequence of blows</li>
<li><strong>Age of injury</strong> — SDH microscopic dating (siderophages 10–11 d, hyalinisation 1–3 mo) correlates with alleged trauma timing</li>
<li><strong>Punch-drunk syndrome</strong> — chronic encephalopathy from cumulative minor head blows (boxers); relevant in professional sports liability</li>
<li><strong>Pre-existing pathology</strong> — atrophic brain (alcoholics, elderly) more prone to SDH from minor trauma — defence consideration</li>
<li><strong>Heat hematoma differential</strong> — burn cases can produce extradural blood collection mimicking EDH (Ch 14)</li>
</ol>`,
    sources: ['RI-06 · RI-07 · RI-08'],
    jumpToDiagram: 'RI-06'
  },
  {
    id: 'LAQ-11.3', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank-Inspired',
    question: 'A 35-year-old man fell on a manhole while walking. He presents with perineal injury, blood at the urethral meatus, and inability to pass urine. Describe the clinical scenario, mechanism, anatomical site, complications, and management. Mention the medicolegal aspects of straddle injuries.',
    answer: `<h4>Diagnosis</h4>
<p>★ <strong>STRADDLE INJURY</strong> with <strong>RUPTURE of the BULBAR (BULBOUS) URETHRA</strong>.</p>
<p>★ This is the answer to <strong>NEET-PG 2020 Q10</strong> verbatim.</p>
<h4>Mechanism</h4>
<p>When a person falls astride / straddles a hard linear object (manhole edge, bicycle bar, fence, gymnastic bar, chair edge):</p>
<ol>
<li>The PERINEUM impacts the object</li>
<li>The <strong>BULBAR URETHRA</strong> (part of the anterior urethra) is <strong>CRUSHED between the OBJECT BELOW and the PUBIC SYMPHYSIS ABOVE</strong></li>
<li>This causes contusion, partial laceration, or complete rupture of the bulbar urethra</li>
</ol>
<h4>Relevant Anatomy</h4>
<ul>
<li><strong>Anterior urethra:</strong> bulbar + penile (pendulous) — extends from urogenital diaphragm to external meatus</li>
<li><strong>Posterior urethra:</strong> prostatic + membranous — from bladder neck through prostate to UG diaphragm</li>
<li>★ Bulbar urethra is the MOST COMMON site of urethral injury in straddle injury</li>
<li>★ Posterior urethra (membranous) rupture is associated with PELVIC FRACTURE — NOT straddle</li>
</ul>
<h4>Clinical Features (Triad)</h4>
<ol>
<li>★ <strong>BLOOD AT URETHRAL MEATUS</strong> — pathognomonic clinical sign</li>
<li>★ <strong>INABILITY TO PASS URINE</strong> (retention)</li>
<li>★ <strong>PERINEAL INJURY</strong> — bruising, swelling ("butterfly hematoma" if extravasation past Buck&apos;s fascia)</li>
</ol>
<p>Associated: scrotal swelling · suprapubic bladder distension · pain on micturition attempt.</p>
<h4>Investigations</h4>
<ul>
<li><strong>★ Retrograde urethrogram (RUG)</strong> — gold standard; shows extravasation at injury site</li>
<li>Avoid urethral catheterisation BEFORE imaging — can convert partial tear to complete rupture</li>
<li>CT pelvis if pelvic fracture suspected</li>
<li>Suprapubic catheter for urinary diversion until imaging done</li>
</ul>
<h4>Complications</h4>
<ul>
<li><strong>Urinary extravasation</strong> → cellulitis, abscess, necrosis of perineum / scrotum</li>
<li><strong>Urethral stricture</strong> — common late complication</li>
<li>Erectile dysfunction</li>
<li>Recurrent UTI</li>
<li>Fistula formation</li>
</ul>
<h4>Management</h4>
<ol>
<li>★ <strong>SUPRAPUBIC catheterisation</strong> — urinary diversion BEFORE urethral instrumentation</li>
<li>RUG to confirm site and extent</li>
<li>Antibiotics</li>
<li>Partial tear → catheter drainage + delayed RUG follow-up</li>
<li>Complete rupture → delayed urethroplasty (3–6 months)</li>
<li>Stricture management — dilatation, internal urethrotomy, or formal urethroplasty</li>
</ol>
<h4>★ Medicolegal Aspects</h4>
<ul>
<li><strong>Manner of death/injury</strong> — usually ACCIDENTAL; rarely suicidal or homicidal</li>
<li><strong>RTA / industrial accident</strong> — liability questions arise (insurance, compensation)</li>
<li><strong>Public infrastructure failure</strong> — open manhole = municipal authority negligence</li>
<li>Pediatric cases — distinguish accidental straddle from sexual assault (corroborate with history, witnesses, examination of genital injuries pattern)</li>
<li>Document with photograph + measurements; preserve evidence if assault suspected</li>
<li>Long-term sequelae (impotence, stricture) → claims for damages</li>
<li><strong>Differential diagnoses to exclude:</strong> posterior urethra rupture (pelvic fracture), bladder rupture, penile fracture</li>
</ul>
<h4>★ Key PYQ Points</h4>
<ul><li>NEET-PG 2020 Q10 — manhole fall + perineal injury + blood at meatus → BULBAR urethra rupture</li>
<li>BULBAR (bulbous) urethra = anterior urethra; crushed between hard object below and pubic symphysis above</li>
<li>SUPRAPUBIC catheter before urethral instrumentation</li></ul>`,
    sources: ['RI-10 Pelvic + Urethra'],
    jumpToDiagram: 'RI-10'
  }
];

return {
  chapterNumber: 11,
  chapterTitle: 'Regional Injuries',
  prereqs: [
    { term: 'GCS (Glasgow Coma Scale)', meaning: 'Eye + Verbal + Motor (3+5+6 = 15 max, 3 min). Mild 13-15, Moderate 9-12, Severe ≤ 8.' },
    { term: 'Calvaria / Calva', meaning: 'Calvaria = cranium (head bones minus face). Calva = skullcap / vault. Rest = base of skull.' },
    { term: 'Diploë', meaning: 'Soft cancellous bone between outer and inner tables of skull.' },
    { term: 'Galea aponeurotica', meaning: 'Tough fibrous layer of scalp — causes scalp lacerations to gape; sub-galeal hematoma forms beneath it.' },
    { term: 'Spectacle hematoma', meaning: '"Raccoon eyes" — bilateral periorbital bruising. Strongly suggests basal skull fracture (anterior fossa).' },
    { term: 'Battle sign', meaning: 'Bruising behind ear over mastoid — suggests middle/posterior fossa skull fracture.' },
    { term: 'Sub-galeal hematoma', meaning: 'Hematoma under galea aponeurotica; vital sign of antemortem scalp/skull injury.' },
    { term: 'Le Fort fracture', meaning: 'Maxillary facial fracture — I horizontal, II pyramidal, III craniofacial dysjunction.' },
    { term: 'Rowbotham hypothesis', meaning: 'Skull fracture by (1) direct force — local or general deformation, or (2) indirect violence.' },
    { term: 'Struck-hoop analogy', meaning: 'Focal impact bends skull inward; incompressible adult skull bulges elsewhere; if force exceeds elasticity, both areas fracture.' },
    { term: 'Holbourn hypothesis', meaning: 'Brain injury requires compression + tension + shear, with a ROTATIONAL component (Lancet 1943).' },
    { term: 'Puppe&apos;s rule', meaning: 'Later fracture TERMINATES in earlier one — reconstructs sequence of blows.' },
    { term: 'Signature fracture', meaning: 'Depressed fracture whose pattern resembles the SHAPE of the weapon.' },
    { term: 'Pond fracture', meaning: 'Dent without true fracture — INFANTS only; pliable skull distorts like ping-pong ball.' },
    { term: 'Gutter fracture', meaning: 'Part-thickness furrow from tangential/glancing strike — classic glancing bullet.' },
    { term: 'Diastatic fracture', meaning: 'Fracture along skull suture — children + young adults with non-fused sutures.' },
    { term: 'Ring fracture', meaning: 'Fissure around foramen magnum from fall on feet/buttock or vertex impact driving skull on spine.' },
    { term: 'Hinge fracture', meaning: '"Motorcyclist&apos;s fracture" — linear across floor of middle cranial fossa; separates base in 2 halves.' },
    { term: 'Hutchinson fracture', meaning: 'Distal radius styloid fracture ("chauffeur fracture"). Different from Hutchinson teeth (syphilis).' },
    { term: 'Spider-web fracture', meaning: 'Non-displaced comminuted (mosaic) — central depressed + radial linear fissures.' },
    { term: 'Bridging veins', meaning: 'Veins crossing subdural space to reach sinuses. Tear → SDH. Largest = great vein of Galen.' },
    { term: 'Middle meningeal artery', meaning: 'Artery in epidural space; ruptures with temporoparietal fracture → EDH (arterial bleed).' },
    { term: 'Lucid interval', meaning: 'Brief recovery of consciousness after initial LOC, then deterioration — classic of EDH.' },
    { term: 'Berry aneurysm', meaning: 'Saccular aneurysm of Circle of Willis — commonest pathological cause of SAH.' },
    { term: 'Pachymeningitis hemorrhagica', meaning: 'Chronic SDH with repeated bleeds into the encapsulated hematoma.' },
    { term: 'Concussion', meaning: 'Trotter 1914 — transient paralytic state, no structural damage, always followed by amnesia.' },
    { term: 'DAI (Diffuse Axonal Injury)', meaning: 'Angular/rotational acceleration → axonal swelling (retraction balls). Adams 3 grades.' },
    { term: 'Coup injury', meaning: 'At impact site; stationary head + moving object; ACCELERATION injury.' },
    { term: 'Contre-coup injury', meaning: 'Opposite to impact site; moving head + stationary object; DECELERATION injury.' },
    { term: 'Punch-drunk syndrome', meaning: 'Chronic traumatic encephalopathy (CTE) / dementia pugilistica — boxers; repeated blows → parkinsonian dementia.' },
    { term: 'Whiplash', meaning: 'Sudden hyperflexion + hyperextension WITHOUT vertebral fracture — classic rear-end RTA.' },
    { term: 'Pithing', meaning: 'Homicidal method — fine needle inserted at nape between skull and upper cervical vertebra → cord transection.' },
    { term: 'Railway spine', meaning: 'Spinal cord concussion causing temporary paralysis (~48 h recovery); common in railway/motor collision.' },
    { term: 'Hesitation cuts', meaning: 'Tentative shallow cuts preceding fatal one — characteristic of SUICIDAL cut throat.' },
    { term: 'Flail chest', meaning: '≥ 2 ribs broken in ≥ 2 places → paradoxical breathing. Life-threatening.' },
    { term: 'Straddle injury', meaning: 'Fall astride hard object → bulbar urethra crushed against pubic symphysis. NEET-PG 2020 Q10.' },
    { term: 'Bulbar urethra', meaning: 'Anterior urethra part; commonest site of urethral rupture in straddle injury.' },
    { term: 'Compartment syndrome', meaning: 'Raised intra-compartment pressure → vascular compromise. 6 Ps. Needs urgent fasciotomy.' },
    { term: '6 Ps', meaning: 'Pain (out of proportion) · Pallor · Pulselessness · Paresthesia · Paralysis · Poikilothermia.' }
  ],
  diagrams: [
    { id: 'RI-01', title: 'Regional Injuries — Master Overview', shortTitle: 'Master Overview', svg: SVG_RI01,
      prereqs: [{term:'GCS scoring',meaning:'E+V+M; max 15, min 3.'},{term:'4 head injury regions',meaning:'Scalp · Skull · Meninges · Brain.'},{term:'Primary vs Secondary',meaning:'Primary at impact; Secondary delayed (edema, ischemia, infection).'}],
      nodes: nodeList(['ri-overview','ri-gcs','ri-regions','ri-topics','ri-primary-secondary','ri-pyqs']),
      mcqs: MCQS['RI-01']
    },
    { id: 'RI-02', title: 'Soft Tissue Injuries — Scalp · Face · Ear · Eye', shortTitle: 'Scalp Face Ear Eye', svg: SVG_RI02,
      prereqs: [{term:'6 scalp injury types',meaning:'Abrasion · contusion · laceration · incised · avulsion · sub-galeal.'},{term:'Black eye 3 mechanisms',meaning:'Direct · gravitation from frontal scalp · orbital floor fracture.'},{term:'Spectacle hematoma',meaning:'Raccoon eyes = basal skull #.'},{term:'Battle sign',meaning:'Mastoid bruise = basal skull #.'}],
      nodes: nodeList(['ri-scalp','ri-face','ri-ear','ri-eye','ri-teeth','ri-blackeye','ri-spectacle']),
      mcqs: MCQS['RI-02']
    },
    { id: 'RI-03', title: 'Skull Anatomy &amp; Mechanism of Fracture', shortTitle: 'Skull Anatomy + Mechanism', svg: SVG_RI03,
      prereqs: [{term:'2 tables + diploë',meaning:'Outer twice inner; diploë cancellous between.'},{term:'Temporal = 4 mm (thinnest)',meaning:'Explains middle meningeal A. vulnerability → EDH.'},{term:'Rowbotham',meaning:'Direct (local/general deformation) + indirect violence.'},{term:'Holbourn',meaning:'Brain needs rotational component to be damaged.'},{term:'Puppe&apos;s rule',meaning:'Later fracture terminates in earlier — sequence of blows.'}],
      nodes: nodeList(['ri-skull-anatomy','ri-rowbotham','ri-struckhoop','ri-holbourn','ri-puppe','ri-spiderweb']),
      mcqs: MCQS['RI-03']
    },
    { id: 'RI-04', title: '★ Vault of Skull — 8 Fracture Patterns', shortTitle: '8 Vault Fractures ★', svg: SVG_RI04,
      prereqs: [{term:'Linear = commonest',meaning:'Straight/curved fissure.'},{term:'Signature = depressed',meaning:'Pattern = weapon shape.'},{term:'Pond = INFANTS',meaning:'Dent without fracture; pliable bone.'},{term:'Gutter = glancing bullet',meaning:'Tangential force, part-thickness furrow.'},{term:'Diastatic = children',meaning:'Along non-fused sutures.'},{term:'Spider-web = comminuted',meaning:'Depressed + radial fissures.'}],
      nodes: nodeList(['ri-vault-overview','ri-linear','ri-depressed','ri-comminuted','ri-pond','ri-gutter','ri-diastatic','ri-perforating','ri-cut','ri-vault-complications']),
      mcqs: MCQS['RI-04']
    },
    { id: 'RI-05', title: '★ Base of Skull (Basilar) Fractures', shortTitle: 'Basilar Fractures ★', svg: SVG_RI05,
      prereqs: [{term:'Ring = fall on feet/buttock',meaning:'Around foramen magnum, posterior fossa.'},{term:'Hinge = motorcyclist&apos;s',meaning:'Side-blow; floor of middle fossa; base in 2 halves.'},{term:'Hutchinson = distal radius',meaning:'Chauffeur fracture (NOT skull).'},{term:'Spectacle + battle = basal',meaning:'Anterior + middle fossa fracture signs.'},{term:'CSF leak',meaning:'Rhinorrhea = ant fossa; otorrhea = middle fossa.'}],
      nodes: nodeList(['ri-basilar-overview','ri-ring','ri-hinge','ri-other-basilar','ri-hutchinson','ri-basilar-signs']),
      mcqs: MCQS['RI-05']
    },
    { id: 'RI-06', title: 'Meninges Anatomy &amp; 4 Intracranial Hemorrhages', shortTitle: '4 ICH Overview', svg: SVG_RI06,
      prereqs: [{term:'3 layers + 3 spaces',meaning:'Dura/arachnoid/pia; epidural (meningeal A.) · subdural (bridging veins) · subarachnoid (CSF).'},{term:'EDH = MMA · biconvex',meaning:'Middle meningeal artery; biconvex/lens CT.'},{term:'SDH = bridging V. · crescentic',meaning:'Venous bleed; crescentic CT.'},{term:'SAH = most common',meaning:'Trauma or berry aneurysm.'},{term:'Sole IVH = fall',meaning:'IVH alone suggests head striking firm object.'}],
      nodes: nodeList(['ri-meninges','ri-edh-card','ri-sdh-card','ri-sah-card','ri-ich-card','ri-ivh','ri-mostcommon','ri-traumatic-vs-spontaneous']),
      mcqs: MCQS['RI-06']
    },
    { id: 'RI-07', title: '★ EDH vs SDH — Deep Dive + SDH Dating', shortTitle: 'EDH vs SDH + Dating ★', svg: SVG_RI07,
      prereqs: [{term:'EDH 5 features',meaning:'Lucid interval · contralateral paresis · ipsilateral fixed pupil (CN III/uncus) · coma · death.'},{term:'SDH mobile',meaning:'Gravitates to lower side, unlike EDH.'},{term:'Chronic SDH',meaning:'Elderly/alcoholics; mimics dementia/schizophrenia; often bilateral if natural.'},{term:'Pachymeningitis hemorrhagica',meaning:'Repeated bleeds into chronic SDH.'},{term:'SDH dating',meaning:'Siderophages 10-11 d · hyalinisation 1-3 mo.'}],
      nodes: nodeList(['ri-edh-deep','ri-sdh-deep','ri-sdh-causes','ri-pachy','ri-sdh-dating']),
      mcqs: MCQS['RI-07']
    },
    { id: 'RI-08', title: 'Brain Injury — Concussion · Contusion · DAI · Coup-Contrecoup · Punch-Drunk', shortTitle: 'Brain Injuries', svg: SVG_RI08,
      prereqs: [{term:'Concussion (Trotter 1914)',meaning:'Transient paralytic state, no structural damage, with amnesia.'},{term:'Contusion = gyral crests cone-shape',meaning:'Base at dura, apex in white matter; cortex intact.'},{term:'Coup = acceleration',meaning:'Stationary head + moving object.'},{term:'Contre-coup = deceleration',meaning:'Moving head + stationary object; extensive.'},{term:'DAI retraction balls',meaning:'Axonal swelling in white matter, corpus callosum, upper brainstem; Adams 3 grades.'},{term:'Punch-drunk = boxers CTE',meaning:'Repeated blows → parkinsonian dementia. Acute boxer lesion = SDH; EDH never (no fracture).'}],
      nodes: nodeList(['ri-concussion','ri-contusion','ri-coup','ri-contrecoup','ri-dai','ri-punchdrunk']),
      mcqs: MCQS['RI-08']
    },
    { id: 'RI-09', title: 'Spine, Spinal Cord &amp; Neck Injuries', shortTitle: 'Spine + Neck', svg: SVG_RI09,
      prereqs: [{term:'T-L commonest',meaning:'Thoraco-lumbar then lower cervical.'},{term:'Whiplash',meaning:'Hyperflexion+hyperextension without fracture; rear-end RTA.'},{term:'Pithing',meaning:'Homicidal needle into nape between skull and C1.'},{term:'Railway spine',meaning:'Cord concussion in railway/motor collision; recovers ~48 h.'},{term:'Cut throat hesitation',meaning:'Suicidal feature.'},{term:'Cut throat defence wounds',meaning:'Homicidal feature.'}],
      nodes: nodeList(['ri-spine-overview','ri-spine-fracture','ri-cord-injuries','ri-whiplash','ri-neck','ri-cutthroat']),
      mcqs: MCQS['RI-09']
    },
    { id: 'RI-10', title: 'Thoracic · Abdominal · Pelvic · Bone Injuries', shortTitle: 'Trunk + Pelvis + Bone', svg: SVG_RI10,
      prereqs: [{term:'Flail chest = ≥2 ribs in ≥2 places',meaning:'Paradoxical breathing.'},{term:'Diaphragm: left > right',meaning:'Liver buffers right.'},{term:'Stomach ruptures at pylorus',meaning:'Distended; lesser curvature.'},{term:'Spleen most blunt-injured solid organ',meaning:'Thin capsule, friable.'},{term:'Bulbar urethra rupture',meaning:'★ NEET-PG 2020 Q10 — straddle injury.'},{term:'Compartment syndrome',meaning:'★ NEET-PG 2018 Q11 — blackening finger; 6 Ps; urgent fasciotomy.'}],
      nodes: nodeList(['ri-chest','ri-diaphragm','ri-abdomen','ri-pelvis-urethra','ri-bone','ri-compartment']),
      mcqs: MCQS['RI-10']
    }
  ],
  diffTables: DIFF_TABLES,
  subjectiveQs: SUBJ,
  highYield: [
    '<strong>★ NEET-PG 2018 Q11</strong> — Crush + finger blackening → COMPARTMENT SYNDROME (vascular compromise priority, urgent fasciotomy)',
    '<strong>★ NEET-PG 2020 Q10</strong> — Manhole fall + perineal injury + blood at meatus → BULBAR (bulbous) URETHRA rupture (straddle)',
    '<strong>★ Most common intracranial hemorrhage</strong> overall = <strong>SUBARACHNOID HEMORRHAGE (SAH)</strong>',
    '<strong>★ EDH</strong> = middle meningeal A · biconvex CT · LUCID INTERVAL · temporoparietal (thin 4 mm temporal bone)',
    '<strong>★ SDH</strong> = bridging veins · crescentic CT · most common acute lesion in BOXERS · acute &lt; 72 h, subacute 3-20 d, chronic &gt; 3 wk',
    '<strong>★ SAH</strong> = traumatic OR berry aneurysm (commonest pathological); thunderclap headache; basal SAH rapidly fatal',
    '<strong>★ Temporal bone = thinnest (4 mm)</strong> · frontal/parietal 6-10 mm · occipital midline ≥ 15 mm',
    '<strong>★ Rowbotham</strong> = skull fracture mechanism (direct + indirect); <strong>★ Holbourn</strong> = brain injury (rotation needed)',
    '<strong>★ Puppe&apos;s rule</strong> — later fracture terminates in earlier; reconstructs SEQUENCE of blows',
    '<strong>★ STRUCK-HOOP analogy</strong> — focal impact bends skull inward; incompressible skull bulges elsewhere; both fracture if exceeds elasticity',
    '<strong>★ Signature fracture = DEPRESSED</strong> — pattern resembles weapon shape (hammer, brick edge, rod tip)',
    '<strong>★ POND fracture = INFANTS only</strong> — dent without true fracture; pliable bone (like ping-pong ball)',
    '<strong>★ GUTTER fracture = GLANCING BULLET</strong> — part-thickness furrow from tangential strike',
    '<strong>★ DIASTATIC fracture = CHILDREN</strong> — along non-fused skull sutures',
    '<strong>★ SPIDER-WEB / MOSAIC</strong> = non-displaced comminuted = depressed centre + radial linear fissures',
    '<strong>★ RING fracture</strong> — around foramen magnum; FALL FROM HEIGHT landing on FEET / BUTTOCK',
    '<strong>★ HINGE fracture = "MOTORCYCLIST&apos;S fracture"</strong> — linear across middle fossa floor from side-blow',
    '<strong>★ HUTCHINSON fracture</strong> = distal radius styloid ("chauffeur"); ★ NOT Hutchinson&apos;s teeth (syphilis)',
    '<strong>★ Spectacle hematoma / raccoon eyes</strong> + <strong>★ Battle sign</strong> = basal skull fracture',
    '<strong>★ Black eye — 3 mechanisms:</strong> direct trauma · gravitation from frontal scalp · orbital floor fracture',
    '<strong>★ CSF rhinorrhea</strong> = anterior fossa # · <strong>★ CSF otorrhea</strong> = middle fossa (petrous temporal) #',
    '<strong>★ Sub-galeal hematoma</strong> beneath galea aponeurotica — vital reaction = antemortem skull/scalp injury',
    '<strong>★ Concussion (Trotter 1914)</strong> = transient paralytic, no structural damage, always followed by AMNESIA',
    '<strong>★ Contusion</strong> = blood extravasation at GYRAL CRESTS, CONE-SHAPED (base at dura, apex in white matter)',
    '<strong>★ COUP</strong> (acceleration) = stationary head + moving object · <strong>CONTRE-COUP</strong> (deceleration) = moving head + stationary object (extensive)',
    '<strong>★ DAI</strong> hallmark = AXONAL SWELLING ("retraction balls") in white matter · corpus callosum · upper brainstem; Adams 3 grades',
    '<strong>★ PUNCH-DRUNK syndrome (CTE)</strong> = boxers; repeated blows → parkinsonian dementia · ataxia · slurred speech',
    '<strong>★ Acute boxing lesion = SDH</strong>; <strong>EDH NEVER occurs in boxing</strong> (no skull fracture to tear MMA)',
    '<strong>★ Pachymeningitis hemorrhagica</strong> = chronic SDH with repeated bleeds; bilateral if natural-cause',
    '<strong>★ SDH dating microscopy:</strong> siderophages by 10-11 d · hyalinisation 1-3 mo · fresh re-bleed possible 3-6 mo',
    '<strong>★ Bridging veins</strong> cross subdural space to reach sinuses; largest = great vein of Galen',
    '<strong>★ Whiplash</strong> = sudden hyperflexion + hyperextension WITHOUT vertebral fracture; rear-end RTA',
    '<strong>★ Pithing</strong> = homicide method — fine needle at nape between skull and C1 → cord transection',
    '<strong>★ Railway spine</strong> = cord concussion in railway/motor collision; ~48 h recovery',
    '<strong>★ Cut-throat suicidal</strong> = hesitation cuts, oblique toward floor of mouth, carotids preserved, locked room, no defence wounds',
    '<strong>★ Cut-throat homicidal</strong> = deep wounds, no hesitation, defence wounds on hands, carotids cut, scene disturbed',
    '<strong>★ Diaphragm rupture</strong> = LEFT > right (liver buffers right) · multiple rib fractures co-exist',
    '<strong>★ Distended stomach ruptures at PYLORIC end / lesser curvature</strong> (deficient muscle, magenstrasse)',
    '<strong>★ Spleen</strong> = most commonly injured solid abdominal organ in blunt trauma; 4 grades',
    '<strong>★ Liver laceration types (6):</strong> transcapsular · subcapsular · parenchymal · coronal · crush · contre-coup',
    '<strong>★ Compartment syndrome 6 Ps:</strong> Pain (out of proportion) · Pallor · Pulselessness · Paresthesia · Paralysis · Poikilothermia',
    'See subject-pinned IPC↔BNS Quick-Reference Card + Subject Subjective Q-Bank'
  ]
};
})();

