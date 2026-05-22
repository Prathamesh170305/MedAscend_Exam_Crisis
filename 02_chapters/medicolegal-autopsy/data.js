/* ===================================================================
   Medascend FMT — Chapter 6: Medicolegal Autopsy
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

const SVG_MA01 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Autopsy — Master Overview</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Definition · Types · 8 Objectives · "to see for oneself"</text>

<g data-node-id="ma-def"><rect class="nbcr" x="60" y="110" width="1480" height="120" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🔪 AUTOPSY — Definition &amp; Etymology</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810"><strong>Autopsy</strong> = "to see for oneself" (Greek: <em>autos</em> = self, <em>opis</em> = view).</text><text x="90" y="205" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810"><strong>Synonyms:</strong> Necropsy (necros = dead, opis = view) · Postmortem examination · <strong>Forensic autopsy</strong> (when medicolegal).</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ma-clinical"><rect class="body-white" x="60" y="260" width="730" height="280" rx="14"/><path d="M 74,260 H 776 A 14,14 0 0 1 790,274 V 325 H 60 V 274 A 14,14 0 0 1 74,260 Z" fill="url(#gBlue)"/><text x="80" y="305" class="t-nlg">🏥 CLINICAL (Pathological / Academic)</text><text x="80" y="355" class="t-keylbl">Done by:</text><text x="180" y="355" class="t-keyval">Pathologist / treating doctor</text><text x="80" y="385" class="t-keylbl">Purpose:</text><text x="170" y="385" class="t-keyval">Confirm diagnosis · academic learning</text><text x="80" y="415" class="t-keylbl">Consent:</text><text x="170" y="415" class="t-keyval">★ REQUIRED from relatives</text><text x="80" y="445" class="t-keylbl">Requisition:</text><text x="200" y="445" class="t-keyval">No police requisition needed</text><text x="80" y="475" class="t-keylbl">Extent:</text><text x="150" y="475" class="t-keyval">May be partial — limited by consent</text><text x="80" y="505" class="t-keylbl">Setting:</text><text x="160" y="505" class="t-keyval">Hospital · academic institution</text><circle class="ic" cx="770" cy="278" r="14"/><text class="t-info" x="770" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ma-medicolegal"><rect class="body-white" x="810" y="260" width="730" height="280" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 824,260 H 1526 A 14,14 0 0 1 1540,274 V 325 H 810 V 274 A 14,14 0 0 1 824,260 Z" fill="url(#gRed)"/><text x="830" y="305" class="t-nlg">⚖️ MEDICOLEGAL (Forensic)</text><text x="830" y="355" class="t-keylbl">Done by:</text><text x="930" y="355" class="t-keyval">Registered Medical Practitioner (RMP)</text><text x="830" y="385" class="t-keylbl">Purpose:</text><text x="920" y="385" class="t-keyval">Cause + manner + time of death</text><text x="830" y="415" class="t-keylbl">Consent:</text><text x="920" y="415" class="t-keyval">★ NOT required (state law overrides)</text><text x="830" y="445" class="t-keylbl">Requisition:</text><text x="950" y="445" class="t-keyval">★ MANDATORY — Police (≥ Sub-Inspector)</text><text x="830" y="465" class="t-keyval">OR Executive Magistrate</text><text x="830" y="495" class="t-keylbl">Extent:</text><text x="900" y="495" class="t-keyval">★ ALWAYS COMPLETE — no partial</text><text x="830" y="525" class="t-keylbl">Setting:</text><text x="910" y="525" class="t-keyval">Government mortuary (daylight ★)</text><circle class="ic" cx="1530" cy="278" r="14"/><text class="t-info" x="1530" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ma-objectives"><rect x="60" y="560" width="900" height="260" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="510" y="600" class="t-nlg" text-anchor="middle">🎯 8 Objectives of Medicolegal Autopsy</text><text x="90" y="638" class="t-body">1. To determine the <strong>CAUSE of death</strong> (immediate, antecedent, underlying)</text><text x="90" y="663" class="t-body">2. To determine the <strong>MANNER of death</strong> (natural, accident, suicide, homicide, undetermined)</text><text x="90" y="688" class="t-body">3. To estimate <strong>TIME since death</strong></text><text x="90" y="713" class="t-body">4. To establish <strong>IDENTITY</strong> of deceased when not known</text><text x="90" y="738" class="t-body">5. To collect <strong>EVIDENCES</strong> identifying the object causing death and the criminal</text><text x="90" y="763" class="t-body">6. To document <strong>INJURIES</strong> and deduce how they occurred</text><text x="90" y="788" class="t-body">7. To retain relevant organs / viscera / tissues as evidence</text><text x="90" y="813" class="t-body">8. In newborns — determine <strong>live birth + viability</strong> (infanticide)</text><circle class="ic" cx="940" cy="578" r="14"/><text class="t-info" x="940" y="584" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ma-when"><rect x="980" y="560" width="560" height="260" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1260" y="600" class="t-nlg" text-anchor="middle">📋 When is Medicolegal Autopsy Required?</text><text x="1000" y="638" class="t-body">• Sudden / unexpected death</text><text x="1000" y="663" class="t-body">• Suspicious / unnatural circumstances</text><text x="1000" y="688" class="t-body">• Homicide / suicide / accident</text><text x="1000" y="713" class="t-body">• Road traffic accident ★ NEET-PG 2024 Q2</text><text x="1000" y="738" class="t-body">• Custodial death</text><text x="1000" y="763" class="t-body">• Death in hospital within 24 h of admission</text><text x="1000" y="788" class="t-body">• Dowry death · within 7 yrs of marriage</text><text x="1000" y="813" class="t-body">• Suspected poisoning · operative / anaesthetic death</text><circle class="ic" cx="1520" cy="578" r="14"/><text class="t-info" x="1520" y="584" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="840" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="878" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Clinical autopsy = consent · partial OK · no requisition · MEDICOLEGAL = no consent · always complete · police requisition mandatory</text>

<rect x="60" y="920" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="958" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">⭐ NEET-PG 2024 Q2: In RTA death → POLICE requests the autopsy (not lawyer, not forensic doctor)</text>

<rect x="60" y="1000" width="1480" height="60" rx="10" fill="url(#gGrey)"/><text x="800" y="1038" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⚠️ "I am a truth seeker, not a case maker — more important to protect the innocent than to convict the guilty" · NEET-PG 2018 Q14: "pathology" = work (study of)</text>
</svg>`;

const SVG_MA02 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Legal Authority &amp; Pre-Autopsy Formalities</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">BNSS 174 inquest · Dead body challan · Identification · Daylight rule</text>

<g data-node-id="ma-bnss"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚖️ LEGAL AUTHORITY — BNSS Inquest</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810"><strong>BNSS §174</strong> (was CrPC 174) — Police inquest in unnatural death · <strong>BNSS §196</strong> (was CrPC 176) — Magistrate inquest in dowry death (&lt; 7 yrs marriage) / custody death. The autopsy can ONLY be conducted after legal requisition from the competent authority.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ma-requisition"><rect class="body-white" x="60" y="240" width="730" height="280" rx="14"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="280" class="t-nlg">📜 Requisition + Dead Body Challan</text><text x="80" y="325" class="t-keylbl">Authority:</text><text x="190" y="325" class="t-keyval">Police (≥ Sub-Inspector rank)</text><text x="100" y="345" class="t-keyval">OR Executive Magistrate · Judicial Magistrate</text><text x="80" y="375" class="t-keylbl">Dead Body Challan contains:</text><text x="80" y="395" class="t-keyval">• Name, age, sex, address of deceased</text><text x="80" y="415" class="t-keyval">• Probable date + time of death</text><text x="80" y="435" class="t-keyval">• Date + time of body examination</text><text x="80" y="465" class="t-keylbl">Inquest report:</text><text x="220" y="465" class="t-keyval">Preliminary findings</text><text x="80" y="485" class="t-keyval">• Details of body · scene · injuries · circumstances</text><text x="80" y="505" class="t-keyval">★ Doctor must read carefully before starting</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ma-identification"><rect class="body-white" x="810" y="240" width="730" height="280" rx="14"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gGreen)"/><text x="830" y="280" class="t-nlg">🪪 Pre-Autopsy Identification</text><text x="830" y="325" class="t-keyval"><strong>Known bodies:</strong> Police constable accompanying body identifies it.</text><text x="830" y="355" class="t-keyval">If feasible, relatives also asked to identify.</text><text x="830" y="385" class="t-keyval"><strong>Unknown bodies — record:</strong></text><text x="830" y="405" class="t-keyval">• Identification marks (moles, scars, tattoos)</text><text x="830" y="425" class="t-keyval">• Deformities</text><text x="830" y="445" class="t-keyval">• Fingerprints (request from investigating officer)</text><text x="830" y="465" class="t-keyval">• Photographs (face + profile)</text><text x="830" y="495" class="t-keyval">• Preserve hair, dental records, DNA for later matching</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ma-rules"><rect x="60" y="540" width="1480" height="240" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="800" y="580" class="t-nlg" text-anchor="middle">📋 8 Rules for Medicolegal Autopsy</text><text x="90" y="618" class="t-body">1. Conducted by <strong>REGISTERED MEDICAL PRACTITIONER</strong> only</text><text x="90" y="643" class="t-body">2. Only on receiving <strong>official requisition</strong> from competent authority</text><text x="90" y="668" class="t-body">3. Conducted at the <strong>EARLIEST</strong> possible</text><text x="90" y="693" class="t-body">4. Dead body must be accompanied by <strong>dead body challan + inquest report</strong></text><text x="90" y="718" class="t-body">5. At authorised centre — preferably well-equipped <strong>government mortuary</strong></text><text x="90" y="743" class="t-body">6. Body should be <strong>identified by police</strong> accompanying it</text><text x="90" y="768" class="t-body">7. <strong>No unauthorised person</strong> should be present</text><circle class="ic" cx="1510" cy="558" r="14"/><text class="t-info" x="1510" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ma-daylight"><rect x="60" y="800" width="900" height="160" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="510" y="840" class="t-nlg" text-anchor="middle">☀️ Rule 8 — DAYLIGHT Rule ★</text><text x="90" y="878" class="t-body"><strong>Autopsy MUST be conducted in DAYLIGHT</strong> because in artificial light:</text><text x="90" y="903" class="t-body">• Colour changes (JAUNDICE) cannot be appreciated</text><text x="90" y="928" class="t-body">• Postmortem lividity colour mis-interpreted</text><text x="90" y="953" class="t-body">• Contusion colour changes (age of injury) misjudged · postmortem artefacts missed</text><circle class="ic" cx="940" cy="818" r="14"/><text class="t-info" x="940" y="824" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ma-custody"><rect x="980" y="800" width="560" height="160" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="840" class="t-nlg" text-anchor="middle">📹 Custodial Death — Special Rule</text><text x="1000" y="878" class="t-body">★ <strong>Video recording mandatory</strong></text><text x="1000" y="903" class="t-body">Video must be sent by doctor himself to:</text><text x="1000" y="928" class="t-body">Chairman, <strong>NHRC (National Human Rights Commission)</strong></text><text x="1000" y="953" class="t-body">New Delhi · BNSS 196 magistrate inquest also mandatory</text><circle class="ic" cx="1520" cy="818" r="14"/><text class="t-info" x="1520" y="824" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="980" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="1018" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 ★ DAYLIGHT mandatory · POLICE identifies · NO unauthorised persons · custodial death = VIDEO + NHRC + magistrate inquest</text>
</svg>`;

const SVG_MA03 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ 4 Autopsy Techniques — Virchow · Rokitansky · Ghon · Letulle</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Letulle = "tongue to prostate en masse" · NEET-PG 2023 Q3 + Q4 + Q5</text>

<g data-node-id="tech-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🔪 FOUR AUTOPSY TECHNIQUES</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Different schools developed different methods of organ removal. Choice depends on <strong>case requirement</strong>, <strong>suspected disease</strong>, <strong>biohazard risk</strong>, and surgeon convenience. ★ <strong>Letulle</strong> is preferred for HIV+ / TB / hepatitis cases (minimises operator exposure).</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="virchow"><rect class="body-white" x="60" y="240" width="730" height="280" rx="14" stroke="#15294F" stroke-width="3"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="280" class="t-nlg">1️⃣ VIRCHOW — Organ by Organ</text><text x="80" y="325" class="t-keylbl">Principle:</text><text x="180" y="325" class="t-keyval">Organs removed ONE BY ONE</text><text x="80" y="355" class="t-keylbl">Sequence:</text><text x="180" y="355" class="t-keyval">Brain → thoracic → abdominal organs</text><text x="80" y="385" class="t-keyval">Each organ examined as it is taken out</text><text x="80" y="415" class="t-keylbl">Advantages:</text><text x="80" y="435" class="t-keyval">• Most popular + widely practiced</text><text x="80" y="455" class="t-keyval">• Convenient · quick</text><text x="80" y="485" class="t-keylbl">Disadvantages:</text><text x="80" y="505" class="t-keyval">• Inter-organ relationships lost · vascular continuity broken</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="rokitansky"><rect class="body-white" x="810" y="240" width="730" height="280" rx="14" stroke="#3D8B5B" stroke-width="3"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gGreen)"/><text x="830" y="280" class="t-nlg">2️⃣ ROKITANSKY — In-situ Dissection</text><text x="830" y="325" class="t-keylbl">Principle:</text><text x="930" y="325" class="t-keyval">PARTIAL IN-SITU dissection</text><text x="850" y="345" class="t-keyval">of organs WITHIN the body, followed by en-bloc removal</text><text x="830" y="385" class="t-keylbl">Method:</text><text x="910" y="385" class="t-keyval">Organs examined / dissected in situ</text><text x="850" y="405" class="t-keyval">while still inside body cavity, then removed in blocks</text><text x="830" y="435" class="t-keylbl">Advantages:</text><text x="830" y="455" class="t-keyval">• Minimal organ disturbance · preserves relationships</text><text x="830" y="475" class="t-keyval">• Useful when extensive vascular evaluation needed</text><text x="830" y="500" class="t-keylbl">Used by:</text><text x="900" y="500" class="t-keyval">Karl Rokitansky (Austrian pathologist)</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ghon"><rect class="body-white" x="60" y="540" width="730" height="280" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 74,540 H 776 A 14,14 0 0 1 790,554 V 595 H 60 V 554 A 14,14 0 0 1 74,540 Z" fill="url(#gOrange)"/><text x="80" y="580" class="t-nlg">3️⃣ GHON — En-bloc by Functional Groups</text><text x="80" y="625" class="t-keylbl">Principle:</text><text x="180" y="625" class="t-keyval">Organs removed as EN-BLOC GROUPS:</text><text x="80" y="655" class="t-keyval">• <strong>Cervical bloc</strong> — tongue, pharynx, larynx, oesophagus, trachea, thyroid</text><text x="80" y="680" class="t-keyval">• <strong>Thoracic bloc</strong> — heart, lungs (with great vessels)</text><text x="80" y="705" class="t-keyval">• <strong>Abdominal bloc</strong> — stomach, intestine, liver, spleen, pancreas</text><text x="80" y="730" class="t-keyval">• <strong>Urogenital bloc</strong> — kidneys, ureters, bladder, prostate / uterus</text><text x="80" y="760" class="t-keylbl">Advantage:</text><text x="190" y="760" class="t-keyval">Preserves organ relationships within system</text><text x="80" y="785" class="t-keylbl">Used by:</text><text x="170" y="785" class="t-keyval">Anton Ghon (Austrian pathologist — TB Ghon\'s complex!)</text><circle class="ic" cx="770" cy="558" r="14"/><text class="t-info" x="770" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="letulle"><rect class="body-white" x="810" y="540" width="730" height="280" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 824,540 H 1526 A 14,14 0 0 1 1540,554 V 595 H 810 V 554 A 14,14 0 0 1 824,540 Z" fill="url(#gRed)"/><text x="830" y="580" class="t-nlg">4️⃣ LETULLE — En-masse ★ ★ ★</text><text x="830" y="625" class="t-keylbl">Principle:</text><text x="930" y="625" class="t-keyval">ALL organs removed as ONE MASS</text><text x="850" y="645" class="t-keyval"><strong>FROM TONGUE TO PROSTATE</strong> en masse</text><text x="830" y="680" class="t-keylbl">Method:</text><text x="910" y="680" class="t-keyval">Cervical + thoracic + abdominal + pelvic</text><text x="830" y="700" class="t-keyval">viscera removed together → dissected OFF THE BODY</text><text x="830" y="730" class="t-keylbl">★ ADVANTAGES:</text><text x="830" y="752" class="t-keyval">• <strong>Best preservation of organ relationships</strong></text><text x="830" y="772" class="t-keyval">• <strong>Minimal exposure of operator to body</strong> — IDEAL for</text><text x="830" y="792" class="t-keyval"><strong>HIV+ / TB / hepatitis / COVID-19 cases</strong> (NEET-PG 2023 Q4+Q5)</text><text x="830" y="812" class="t-keyval">• ★ Considered the BEST technique overall</text><circle class="ic" cx="1530" cy="558" r="14"/><text class="t-info" x="1530" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="tech-comparison"><rect x="60" y="840" width="1480" height="160" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="800" y="880" class="t-nlg" text-anchor="middle">🎯 Memory Hooks for 4 Techniques</text><text x="90" y="915" class="t-body"><strong>Virchow</strong> = "Very-one" — one organ at a time · <strong>Rokitansky</strong> = "Rok in situ" — dissect inside body</text><text x="90" y="940" class="t-body"><strong>Ghon</strong> = "Group-Ghon" — 4 functional blocks · <strong>Letulle</strong> = "Let it all out" — en masse tongue-to-prostate</text><text x="90" y="975" class="t-body">★ <strong>NEET-PG 2023 Q3</strong> — "Removed en masse from tongue to prostate" = LETULLE technique (verbatim)</text><circle class="ic" cx="1510" cy="858" r="14"/><text class="t-info" x="1510" y="864" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1020" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="1058" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">⭐ HIV+ / infectious body → LETULLE technique (NEET-PG 2023 Q4+Q5 verbatim) · minimises pathologist exposure</text>
</svg>`;

const SVG_MA04 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">External Examination — Step-by-Step</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Clothing → identity → PM changes → injuries → genitals</text>

<g data-node-id="ext-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">👀 EXTERNAL EXAMINATION — Master Sequence</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Always proceed in a fixed sequence: <strong>Clothing → Identity → Preliminary particulars (height/weight/PM changes) → Skin/odour/orifices → Documentation of injuries → External genitals</strong>. Always head-to-toe; metric system; photographs with scale.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ext-clothing"><rect class="body-white" x="60" y="240" width="490" height="240" rx="14"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="280" class="t-nlg">👕 1. CLOTHING</text><text x="80" y="325" class="t-keyval">Examine BEFORE removing for:</text><text x="80" y="350" class="t-keyval">• Stains — blood, semen, urine, vomit, drugs</text><text x="80" y="375" class="t-keyval">• Soiling material — mud, paint, GSR</text><text x="80" y="400" class="t-keyval">• Foreign material — hair, fibre, glass</text><text x="80" y="425" class="t-keyval">• Cuts / tears / stab marks (correlate with body)</text><text x="80" y="450" class="t-keyval">• Loss of buttons (struggle)</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ext-pm-changes"><rect class="body-white" x="570" y="240" width="490" height="240" rx="14"/><path d="M 584,240 H 1046 A 14,14 0 0 1 1060,254 V 295 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gGreen)"/><text x="590" y="280" class="t-nlg">⏰ 2. Postmortem Changes</text><text x="590" y="325" class="t-keyval">• <strong>Rigor mortis</strong> — present / absent · distribution</text><text x="590" y="355" class="t-keyval">• <strong>Postmortem lividity</strong> — site, colour, fixed / unfixed</text><text x="590" y="385" class="t-keyval">  (purplish · cherry-red if CO · brown if methHb · pink if cold)</text><text x="590" y="415" class="t-keyval">• <strong>Algor mortis</strong> — rectal temperature</text><text x="590" y="445" class="t-keyval">• <strong>Decomposition</strong> — extent · maggots · larvae · eggs</text><text x="590" y="470" class="t-keyval">• Features — identifiable / distorted / bloated</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ext-skin-odour"><rect class="body-white" x="1080" y="240" width="460" height="240" rx="14"/><path d="M 1094,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 1080 V 254 A 14,14 0 0 1 1094,240 Z" fill="url(#gOrange)"/><text x="1090" y="280" class="t-nlg">🌬️ 3. Skin + Odour + Orifices</text><text x="1090" y="325" class="t-keyval"><strong>Skin:</strong> pustules · vesicles · macular · papular · purpura · cyanosis · oedema</text><text x="1090" y="385" class="t-keyval"><strong>Odour:</strong> insecticide (OP) · kerosene · bitter almond (cyanide) · garlic (As, P) · alcohol</text><text x="1090" y="440" class="t-keyval"><strong>Orifices:</strong> nose, mouth, ear, anus, vagina, urethra — froth, blood, foreign body, semen</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ext-injuries"><rect x="60" y="500" width="900" height="280" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="510" y="540" class="t-nlg" text-anchor="middle">🩹 4. Documentation of INJURIES</text><text x="90" y="575" class="t-body"><strong>★ 10-point format</strong> for each injury (numbered head-to-toe):</text><text x="90" y="600" class="t-body">1. <strong>Type</strong> — abrasion · contusion · laceration · incised · stab · chop · crush · burn · electrical</text>
<text x="90" y="625" class="t-body">2. <strong>Site</strong> — exact anatomical (cm from fixed landmark)</text><text x="90" y="650" class="t-body">3. <strong>Dimensions</strong> — length × width × depth (metric)</text><text x="90" y="675" class="t-body">4. <strong>Shape</strong> — linear · curved · irregular · stellate</text><text x="90" y="700" class="t-body">5. <strong>Margins / edges</strong> · 6. <strong>Floor</strong> · 7. <strong>Surrounding tissue</strong> (vital reaction)</text><text x="90" y="725" class="t-body">8. <strong>Direction</strong> · 9. <strong>Probable weapon</strong> · 10. <strong>Age of injury</strong></text><text x="90" y="755" class="t-body" font-style="italic">★ Photographs with scale · always state if antemortem / postmortem</text><circle class="ic" cx="940" cy="518" r="14"/><text class="t-info" x="940" y="524" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ext-genitals"><rect x="980" y="500" width="560" height="280" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1260" y="540" class="t-nlg" text-anchor="middle">🩺 5. External Genitals</text><text x="1000" y="578" class="t-body"><strong>Examine for:</strong></text><text x="1000" y="603" class="t-body">• Disease — STIs, ulcers, discharge</text><text x="1000" y="628" class="t-body">• Injury — laceration, contusion, bite marks</text><text x="1000" y="653" class="t-body">• Foreign body</text><text x="1000" y="678" class="t-body">• Stains — semen, blood, mucus</text><text x="1000" y="703" class="t-body">• Secretions</text><text x="1000" y="728" class="t-body">• Signs of sexual insult / assault</text><text x="1000" y="755" class="t-body" font-style="italic">★ In rape suspect: vaginal swabs, smears, pubic combings — DNA reference</text><circle class="ic" cx="1520" cy="518" r="14"/><text class="t-info" x="1520" y="524" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ext-identity"><rect x="60" y="800" width="1480" height="240" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="840" class="t-nlg" text-anchor="middle">🪪 Pre-Examination Identity Recording</text><text x="90" y="878" class="t-body"><strong>Known body:</strong> Police constable + relatives identify · record name, age, sex, address</text><text x="90" y="903" class="t-body"><strong>Unknown body:</strong> Record identification marks (moles, scars, tattoos, deformities), photograph, take fingerprints</text><text x="90" y="928" class="t-body"><strong>Height + weight</strong> — measured (live or postmortem)</text><text x="90" y="953" class="t-body"><strong>Nutritional status + built</strong> — well-nourished / moderately / poorly · gross deformities</text><text x="90" y="978" class="t-body"><strong>Hair patterns + colour</strong> — scalp, beard, body, pubic distribution</text><text x="90" y="1003" class="t-body" font-style="italic">★ NEVER allow body to be disposed without recording ≥ 2 identification marks (MLC rule)</text><circle class="ic" cx="1510" cy="818" r="14"/><text class="t-info" x="1510" y="824" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_MA05 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Internal Examination — Incisions &amp; Cavity Opening</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">I-shaped · Y-shaped · Modified-Y · Coronal scalp · 3 body cavities</text>

<g data-node-id="int-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🔪 INTERNAL EXAMINATION — 5 Components</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Includes dissection of: <strong>(1) Cranial cavity</strong> (skull + brain) · <strong>(2) Thoracic cavity</strong> · <strong>(3) Abdominal cavity</strong> · <strong>(4) Spinal cord</strong> (when indicated) · <strong>(5) Extremities</strong> (when indicated). In FOETUS, ABDOMEN is opened first to record diaphragm position. Routine order otherwise: head → chest → abdomen.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="i-incision"><rect class="body-white" x="60" y="240" width="490" height="280" rx="14" stroke="#15294F" stroke-width="3"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="280" class="t-nlg">📍 I-SHAPED Incision</text><text x="80" y="325" class="t-keylbl">Path:</text><text x="140" y="325" class="t-keyval">CHIN (symphysis mentis) → PUBIS (symphysis pubis)</text><text x="80" y="355" class="t-keylbl">Use:</text><text x="140" y="355" class="t-keyval">★ COMMONEST method used</text><text x="80" y="385" class="t-keylbl">Advantages:</text><text x="80" y="405" class="t-keyval">• Easy · fast · simple</text><text x="80" y="425" class="t-keylbl">Disadvantages:</text><text x="80" y="445" class="t-keyval">• Inadequate exposure of axillary region</text><text x="80" y="465" class="t-keyval">• Inadequate exposure of neck organs</text><text x="80" y="490" class="t-keyval" font-style="italic">★ Default in routine autopsy</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="y-incision"><rect class="body-white" x="570" y="240" width="490" height="280" rx="14" stroke="#3D8B5B" stroke-width="3"/><path d="M 584,240 H 1046 A 14,14 0 0 1 1060,254 V 295 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gGreen)"/><text x="590" y="280" class="t-nlg">📍 Y-SHAPED Incision</text><text x="590" y="325" class="t-keylbl">Path:</text><text x="650" y="325" class="t-keyval">Acromion → below breast → xiphoid</text><text x="610" y="345" class="t-keyval">(both sides) · then xiphoid → pubis straight</text><text x="590" y="385" class="t-keylbl">Advantages:</text><text x="590" y="405" class="t-keyval">• MORE COSMETIC ★</text><text x="590" y="425" class="t-keyval">• Spares skin of NECK area</text><text x="590" y="445" class="t-keyval">• Axillary + neck regions easily accessible</text><text x="590" y="470" class="t-keylbl">Disadvantages:</text><text x="590" y="490" class="t-keyval">• More tedious · requires more time</text><text x="590" y="510" class="t-keyval" font-style="italic">★ Preferred when body is to be returned to family</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="modY-incision"><rect class="body-white" x="1080" y="240" width="460" height="280" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 1094,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 1080 V 254 A 14,14 0 0 1 1094,240 Z" fill="url(#gOrange)"/><text x="1090" y="280" class="t-nlg">📍 MODIFIED Y</text><text x="1090" y="325" class="t-keylbl">Path:</text><text x="1150" y="325" class="t-keyval">Sternal notch → pubis</text><text x="1090" y="345" class="t-keyval">(straight) · then sternal notch →</text><text x="1090" y="365" class="t-keyval">mid-clavicle → behind ear (both sides)</text><text x="1090" y="395" class="t-keylbl">Advantage:</text><text x="1090" y="415" class="t-keyval">• Best exposure of neck region</text><text x="1090" y="435" class="t-keyval">• Faster than full Y</text><text x="1090" y="460" class="t-keylbl">Disadvantage:</text><text x="1090" y="480" class="t-keyval">• Tedious · time-consuming</text><text x="1090" y="500" class="t-keyval">• Inadequate axillary exposure</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="coronal-scalp"><rect x="60" y="540" width="900" height="200" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="510" y="580" class="t-nlg" text-anchor="middle">🧠 Cranial Cavity — Coronal Scalp Incision</text><text x="90" y="615" class="t-body"><strong>Coronal incision:</strong> Behind one ear → over vertex → behind other ear</text><text x="90" y="640" class="t-body">★ MORE PREFERABLE — incision hidden by hair when scalp closed</text><text x="90" y="665" class="t-body"><strong>Skullcap removal:</strong> Saw horizontally — mid-forehead → above mastoid → external occipital protuberance</text><text x="90" y="690" class="t-body"><strong>Examination:</strong> Skullcap (fractures) · dura (collection, injury) · superior sagittal sinus (thrombosis)</text><text x="90" y="715" class="t-body"><strong>Brain:</strong> Examined in situ first, then dissected · note injuries · aneurysms · vascular malformations · ventricles</text><circle class="ic" cx="940" cy="558" r="14"/><text class="t-info" x="940" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="spinal-cord"><rect x="980" y="540" width="560" height="200" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1260" y="580" class="t-nlg" text-anchor="middle">🦴 Spinal Cord — When Indicated</text><text x="1000" y="618" class="t-body"><strong>Indications</strong> (3):</text><text x="1000" y="643" class="t-body">1. Injury to spine / spinal cord</text><text x="1000" y="668" class="t-body">2. Disease affecting spinal cord</text><text x="1000" y="693" class="t-body">3. <strong>STRYCHNINE poisoning</strong> ★ (spinal poison)</text><text x="1000" y="718" class="t-body"><strong>Approach:</strong> Posterior (midline + laminectomies) or anterior</text><circle class="ic" cx="1520" cy="558" r="14"/><text class="t-info" x="1520" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="cavity-exam"><rect x="60" y="760" width="1480" height="220" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="800" class="t-nlg" text-anchor="middle">🫀🫁🫃 Chest, Abdomen — Cavity Examination Routine</text><text x="90" y="835" class="t-body"><strong>For each cavity, examine:</strong></text><text x="90" y="860" class="t-body">• Injuries · diseases · pathological lesions · collections (blood, fluid, pus)</text><text x="90" y="885" class="t-body">• <strong>For each organ:</strong> WEIGHT · SIZE · SHAPE · SURFACE · CONSISTENCY · CUT SURFACE · COLOUR</text><text x="90" y="910" class="t-body">• Pleural / pericardial / peritoneal effusion · adhesions</text><text x="90" y="935" class="t-body">• Stomach contents — note volume, smell, food particles, foreign body, tablets, capsules</text><text x="90" y="960" class="t-body" font-style="italic">★ Standard normal organ weights — heart ♂ 300 g / ♀ 250 g · right lung 450 g · left lung 400 g · liver 1500 g · brain 1400 g</text><circle class="ic" cx="1510" cy="778" r="14"/><text class="t-info" x="1510" y="784" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1000" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="1038" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 I-shaped (commonest) · Y-shaped (cosmetic) · Modified-Y (neck access) · Coronal scalp (hidden) · Spinal opened only in strychnine / spinal injury / disease</text>
</svg>`;

const SVG_MA06 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Sampling &amp; Preservation — Viscera, Blood, Vitreous</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Saturated salt solution · rectified spirit · formalin · fluoride (NaF) preservatives</text>

<g data-node-id="sample-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🧪 SAMPLING — Why &amp; What</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Samples are preserved for <strong>toxicology · histopathology · microbiology · biochemistry · DNA</strong>. Wrong preservative or contamination can <strong>destroy evidence</strong>. Chain of custody must be maintained: doctor → packing → labelling → seal → handover to investigating officer with receipt.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="viscera-salt"><rect class="body-white" x="60" y="240" width="730" height="280" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gRed)"/><text x="80" y="280" class="t-nlg">🧂 ★ VISCERA = Saturated Salt Solution</text><text x="80" y="325" class="t-keylbl">Preservative:</text><text x="220" y="325" class="t-keyval">SATURATED COMMON SALT (NaCl) solution</text><text x="80" y="355" class="t-keylbl">For:</text><text x="130" y="355" class="t-keyval">Viscera samples sent for chemical analysis</text><text x="80" y="385" class="t-keylbl">Container:</text><text x="190" y="385" class="t-keyval">Wide-mouth glass bottle</text><text x="80" y="415" class="t-keyval">★ <strong>Volume:</strong> twice the volume of viscera (immersion)</text><text x="80" y="445" class="t-keyval">★ Preserves most poisons EXCEPT corrosives (which alter pH)</text><text x="80" y="475" class="t-keylbl">★ NEET-PG 2019 Q4 verbatim:</text><text x="80" y="495" class="t-keyval">"Viscera in toxicology stored in" → SATURATED SALT SOLUTION</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="blood-preserve"><rect class="body-white" x="810" y="240" width="730" height="280" rx="14"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gBlue)"/><text x="830" y="280" class="t-nlg">🩸 BLOOD — Preservatives by Purpose</text><text x="830" y="325" class="t-keylbl">For alcohol estimation:</text><text x="830" y="345" class="t-keyval">★ <strong>Sodium FLUORIDE (NaF) + Potassium oxalate</strong></text><text x="830" y="365" class="t-keyval">(NaF prevents bacterial fermentation → false alcohol)</text><text x="830" y="395" class="t-keylbl">For toxicology:</text><text x="830" y="415" class="t-keyval">Sodium fluoride or sodium citrate</text><text x="830" y="440" class="t-keylbl">For DNA / serology:</text><text x="830" y="460" class="t-keyval">EDTA (purple top tube)</text><text x="830" y="485" class="t-keylbl">For carboxyhaemoglobin (CO):</text><text x="830" y="505" class="t-keyval">Air-tight bottle filled completely (no air space)</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="histo-formalin"><rect class="body-white" x="60" y="540" width="490" height="220" rx="14" stroke="#3D8B5B" stroke-width="3"/><path d="M 74,540 H 536 A 14,14 0 0 1 550,554 V 595 H 60 V 554 A 14,14 0 0 1 74,540 Z" fill="url(#gGreen)"/><text x="80" y="580" class="t-nlg">🔬 HISTOPATHOLOGY = 10% Formalin</text><text x="80" y="625" class="t-keyval">Tissue pieces (1-2 cm cubes)</text><text x="80" y="650" class="t-keyval">Fixative: <strong>10% buffered FORMALIN</strong></text><text x="80" y="675" class="t-keyval">Volume: 10× tissue volume</text><text x="80" y="700" class="t-keyval">★ NEVER use formalin for toxicology</text><text x="80" y="725" class="t-keyval">(destroys CO, alcohol, opiates, cyanide)</text><circle class="ic" cx="540" cy="558" r="14"/><text class="t-info" x="540" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="other-fluids"><rect class="body-white" x="570" y="540" width="490" height="220" rx="14"/><path d="M 584,540 H 1046 A 14,14 0 0 1 1060,554 V 595 H 570 V 554 A 14,14 0 0 1 584,540 Z" fill="url(#gPurple)"/><text x="590" y="580" class="t-nlg">💧 Other Body Fluids</text><text x="590" y="625" class="t-keyval"><strong>Urine:</strong> 100 mL · saturated salt OR refrigerated</text><text x="590" y="650" class="t-keyval"><strong>Vitreous humour:</strong> 1-2 mL via 18-G needle</text><text x="590" y="670" class="t-keyval">(for K⁺/glucose → time since death + alcohol stable)</text><text x="590" y="695" class="t-keyval"><strong>Bile:</strong> for opiates, paracetamol metabolites</text><text x="590" y="720" class="t-keyval"><strong>CSF:</strong> meningitis · electrolytes</text><text x="590" y="745" class="t-keyval"><strong>Stomach contents:</strong> for poison identification</text><circle class="ic" cx="1050" cy="558" r="14"/><text class="t-info" x="1050" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="standard-viscera"><rect class="body-white" x="1080" y="540" width="460" height="220" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 1094,540 H 1526 A 14,14 0 0 1 1540,554 V 595 H 1080 V 554 A 14,14 0 0 1 1094,540 Z" fill="url(#gOrange)"/><text x="1090" y="580" class="t-nlg">📦 Standard Viscera Set</text><text x="1090" y="625" class="t-keyval"><strong>Bottle 1:</strong> Stomach + intestines (500 g)</text><text x="1090" y="650" class="t-keyval"><strong>Bottle 2:</strong> Liver (200 g) + spleen (whole) + kidney (½)</text><text x="1090" y="675" class="t-keyval"><strong>Bottle 3:</strong> Brain (½) + lung (½)</text><text x="1090" y="700" class="t-keyval"><strong>Bottle 4:</strong> Blood (10 mL)</text><text x="1090" y="725" class="t-keyval"><strong>Bottle 5:</strong> Urine (50-100 mL)</text><text x="1090" y="750" class="t-keyval">★ Each labelled · sealed · sent to FSL</text><circle class="ic" cx="1530" cy="558" r="14"/><text class="t-info" x="1530" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="special-poisons"><rect x="60" y="780" width="1480" height="200" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="820" class="t-nlg" text-anchor="middle">⚗️ Special Preservatives by Poison</text><text x="90" y="855" class="t-body">• <strong>Strychnine</strong> → save SPINAL CORD in saturated salt solution</text><text x="90" y="880" class="t-body">• <strong>Heavy metals (As, Pb, Hg)</strong> → preserve hair, nails, bone, urine in saturated salt</text><text x="90" y="905" class="t-body">• <strong>Carbon monoxide</strong> → blood in AIRTIGHT bottle filled completely (no air space)</text><text x="90" y="930" class="t-body">• <strong>Cyanide</strong> → blood in airtight container · analyse FRESH (cyanide degrades on storage)</text><text x="90" y="955" class="t-body">• <strong>Volatile poisons (alcohol, ether)</strong> → tightly stoppered bottles · refrigerate</text><circle class="ic" cx="1510" cy="798" r="14"/><text class="t-info" x="1510" y="804" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1000" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="1038" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 ★ Viscera for toxicology = SATURATED SALT SOLUTION (NEET-PG 2019 Q4) · Histopathology = 10% formalin · Alcohol = NaF + K-oxalate</text>
</svg>`;

const SVG_MA07 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Special Autopsies — HIV+ · COVID · Decomposed · Mutilated · Foetal</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Biosafety · Letulle technique for infectious · COVID = fibrin layer in alveoli</text>

<g data-node-id="hiv-autopsy"><rect class="body-white" x="60" y="110" width="730" height="280" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 165 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gRed)"/><text x="80" y="150" class="t-nlg">🦠 ★ HIV+ Body — LETULLE Technique</text><text x="80" y="195" class="t-keylbl">Why LETULLE?</text><text x="220" y="195" class="t-keyval">En-masse removal</text><text x="80" y="215" class="t-keyval">minimises operator EXPOSURE — dissection done OFF the body</text><text x="80" y="245" class="t-keylbl">Universal precautions:</text><text x="80" y="265" class="t-keyval">• Double gloves · gown · mask (N95) · face shield · boots</text><text x="80" y="285" class="t-keyval">• Avoid sharp injuries · use blunt-tipped scissors when possible</text><text x="80" y="305" class="t-keyval">• Limit number of personnel</text><text x="80" y="325" class="t-keyval">• Hepatitis B vaccination of staff</text><text x="80" y="355" class="t-keyval">★ <strong>NEET-PG 2023 Q4 + Q5</strong> (verbatim): HIV+ patient autopsy → LETULLE technique</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="covid-autopsy"><rect class="body-white" x="810" y="110" width="730" height="280" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 165 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gOrange)"/><text x="830" y="150" class="t-nlg">😷 COVID-19 Autopsy ★ NEET-PG 2022 Q9</text><text x="830" y="200" class="t-keylbl">Question stem:</text><text x="830" y="220" class="t-keyval">56-y/o COVID-19 patient on mechanical ventilation died after a week. Likely post-mortem lung finding?</text><text x="830" y="255" class="t-keylbl">★ Answer:</text><text x="830" y="275" class="t-keyval">"<strong>THICK LAYER OF FIBRIN lining the alveoli</strong>"</text><text x="830" y="295" class="t-keyval">(Diffuse alveolar damage / hyaline membrane)</text><text x="830" y="325" class="t-keylbl">Other findings:</text><text x="830" y="345" class="t-keyval">• Microthrombi in pulmonary vessels</text><text x="830" y="365" class="t-keyval">• Hemorrhagic infarcts · ARDS pattern</text><text x="830" y="385" class="t-keyval">• Use LETULLE + N95 + airborne precautions</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="decomposed"><rect class="body-white" x="60" y="410" width="490" height="280" rx="14"/><path d="M 74,410 H 536 A 14,14 0 0 1 550,424 V 465 H 60 V 424 A 14,14 0 0 1 74,410 Z" fill="url(#gGreen)"/><text x="80" y="450" class="t-nlg">💀 Decomposed Body</text><text x="80" y="495" class="t-keyval">• Autopsy on SAME lines as routine</text><text x="80" y="520" class="t-keyval">• Carefully record injuries · ligature marks · fractures</text><text x="80" y="545" class="t-keyval">• <strong>Identify ARTEFACTS produced by decomposition</strong>:</text><text x="80" y="565" class="t-keyval">  - bloody fluid from mouth/nose (NOT bleeding)</text><text x="80" y="585" class="t-keyval">  - skin fissures (NOT lacerations)</text><text x="80" y="605" class="t-keyval">  - gas bubbles in heart (NOT embolism)</text><text x="80" y="625" class="t-keyval">• Preserve viscera for chemical analysis</text><text x="80" y="650" class="t-keyval">• Note foreign body / mud / sand in airway</text><text x="80" y="675" class="t-keyval">• Entomology — maggots, flies for time estimation</text><circle class="ic" cx="540" cy="428" r="14"/><text class="t-info" x="540" y="434" text-anchor="middle">ⓘ</text></g>

<g data-node-id="mutilated"><rect class="body-white" x="570" y="410" width="490" height="280" rx="14"/><path d="M 584,410 H 1046 A 14,14 0 0 1 1060,424 V 465 H 570 V 424 A 14,14 0 0 1 584,410 Z" fill="url(#gPurple)"/><text x="590" y="450" class="t-nlg">✂️ Mutilated Body</text><text x="590" y="495" class="t-keylbl">Why mutilated:</text><text x="590" y="515" class="t-keyval">• By criminals — destroy identity / evidence</text><text x="590" y="535" class="t-keyval">• Convenience of disposal (smaller pieces)</text><text x="590" y="555" class="t-keyval">• PM artefact — wild animals · birds</text><text x="590" y="585" class="t-keylbl">Examination:</text><text x="590" y="605" class="t-keyval">• Ascertain all parts are HUMAN</text><text x="590" y="625" class="t-keyval">• One individual or multiple?</text><text x="590" y="645" class="t-keyval">• Reassemble parts in proper fashion</text><text x="590" y="665" class="t-keyval">• Manner of separation — AM or PM?</text><text x="590" y="685" class="t-keyval">• Identification: sex, age, race, stature, DNA</text><circle class="ic" cx="1050" cy="428" r="14"/><text class="t-info" x="1050" y="434" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fetal-autopsy"><rect class="body-white" x="1080" y="410" width="460" height="280" rx="14"/><path d="M 1094,410 H 1526 A 14,14 0 0 1 1540,424 V 465 H 1080 V 424 A 14,14 0 0 1 1094,410 Z" fill="url(#gBlue)"/><text x="1090" y="450" class="t-nlg">👶 Foetal Autopsy</text><text x="1090" y="495" class="t-keylbl">Objectives:</text><text x="1090" y="515" class="t-keyval">• Live born / dead born / stillborn?</text><text x="1090" y="535" class="t-keyval">• Viability · IUL age · duration of survival</text><text x="1090" y="555" class="t-keyval">• Cause / manner of death</text><text x="1090" y="585" class="t-keylbl">★ Key rule:</text><text x="1090" y="605" class="t-keyval">★ ABDOMEN opened FIRST</text><text x="1090" y="625" class="t-keyval">(to record diaphragm position)</text><text x="1090" y="655" class="t-keylbl">By age:</text><text x="1090" y="675" class="t-keyval">• &lt; 12 wk → free-hand sectioning</text><text x="1090" y="695" class="t-keyval">• 12-22 wk → mini-necropsy en bloc</text><text x="1090" y="715" class="t-keyval">• &gt; 22 wk → full necropsy (★ Letulle preferred)</text><circle class="ic" cx="1530" cy="428" r="14"/><text class="t-info" x="1530" y="434" text-anchor="middle">ⓘ</text></g>

<g data-node-id="mass-disaster"><rect x="60" y="710" width="900" height="200" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="510" y="750" class="t-nlg" text-anchor="middle">⚠️ Mass Disaster Autopsy</text><text x="90" y="788" class="t-body">• Multiple deaths from air crash · terror attack · bomb · tsunami · earthquake · stampede</text><text x="90" y="813" class="t-body">• <strong>Interpol DVI protocol</strong> — Pink form (PM data) + Yellow form (AM data) for identification</text><text x="90" y="838" class="t-body">• Triage approach: identify first by visible features, then primary identifiers (FP / dental / DNA)</text><text x="90" y="863" class="t-body">• Coordinated team: forensic medicine + odontology + DNA + police + counsellors</text><text x="90" y="888" class="t-body">• Body bags numbered · photographs · personal effects bagged separately · DNA samples from each body</text><circle class="ic" cx="940" cy="728" r="14"/><text class="t-info" x="940" y="734" text-anchor="middle">ⓘ</text></g>

<g data-node-id="special-others"><rect x="980" y="710" width="560" height="200" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="750" class="t-nlg" text-anchor="middle">🏥 Other Special Autopsies</text><text x="1000" y="785" class="t-body"><strong>Brought dead</strong> — full autopsy + records review</text><text x="1000" y="810" class="t-body"><strong>Anaesthetic death</strong> — preserve drugs, IV bag, fluids</text><text x="1000" y="835" class="t-body"><strong>Operative death</strong> — preserve all surgical specimens, instruments</text><text x="1000" y="860" class="t-body"><strong>Dowry death</strong> — magistrate inquest (BNSS 196)</text><text x="1000" y="885" class="t-body"><strong>Custody death</strong> — video + NHRC + magistrate</text><circle class="ic" cx="1520" cy="728" r="14"/><text class="t-info" x="1520" y="734" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="930" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="968" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 HIV+ / TB / COVID-19 → ★ LETULLE technique (NEET-PG 2023 Q4+Q5) · COVID lungs → FIBRIN layer (NEET-PG 2022 Q9)</text>

<rect x="60" y="1010" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="1048" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">📚 Foetal autopsy: ABDOMEN opened first → record diaphragm position before chest manipulation alters it</text>
</svg>`;

const SVG_MA08 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Exhumation — Lawful Disinterment</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Magistrate order · No time limit in India · 500 g soil from 4 sites</text>

<g data-node-id="exh-def"><rect class="nbcr" x="60" y="110" width="1480" height="120" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚰️ EXHUMATION — Definition</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810"><strong>Exhumation</strong> = lawful disinterment — digging out of a previously buried body for postmortem examination. The term is restricted to retrieval of a body interred in a legitimate fashion in the graveyard.</text><text x="90" y="208" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="#5C4810">"Exhumare" (Latin) — ex (out of) + humus (ground)</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="exh-purpose"><rect class="body-white" x="60" y="260" width="730" height="240" rx="14"/><path d="M 74,260 H 776 A 14,14 0 0 1 790,274 V 315 H 60 V 274 A 14,14 0 0 1 74,260 Z" fill="url(#gBlue)"/><text x="80" y="305" class="t-nlg">🎯 5 Purposes of Exhumation</text><text x="80" y="355" class="t-keyval">1. <strong>IDENTIFICATION</strong> of body</text><text x="80" y="385" class="t-keyval">2. <strong>Second autopsy</strong> when first report is doubtful / ambiguous</text><text x="80" y="415" class="t-keyval">3. <strong>Civil cases</strong> — insurance · negligence claims</text><text x="80" y="445" class="t-keyval">4. <strong>Disputed cause</strong> of death</text><text x="80" y="475" class="t-keyval">5. <strong>Suspected foul play</strong> revealed AFTER burial</text><circle class="ic" cx="770" cy="278" r="14"/><text class="t-info" x="770" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="exh-authority"><rect class="body-white" x="810" y="260" width="730" height="240" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 824,260 H 1526 A 14,14 0 0 1 1540,274 V 315 H 810 V 274 A 14,14 0 0 1 824,260 Z" fill="url(#gRed)"/><text x="830" y="305" class="t-nlg">⚖️ Legal Authorisation</text><text x="830" y="355" class="t-keylbl">Required from:</text><text x="970" y="355" class="t-keyval">★ WRITTEN ORDER from</text><text x="850" y="375" class="t-keyval">EXECUTIVE MAGISTRATE OR JUDICIAL MAGISTRATE</text><text x="830" y="410" class="t-keylbl">★ Time limit in India:</text><text x="830" y="430" class="t-keyval">NO TIME LIMIT — can be done any time after burial</text><text x="830" y="460" class="t-keylbl">Time limits in other countries:</text><text x="830" y="480" class="t-keyval">• France — 10 years from burial</text><text x="830" y="500" class="t-keyval">• Germany — 30 years</text><circle class="ic" cx="1530" cy="278" r="14"/><text class="t-info" x="1530" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="exh-procedure"><rect x="60" y="520" width="1480" height="280" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="800" y="560" class="t-nlg" text-anchor="middle">📋 Exhumation Procedure (Step-by-Step)</text><text x="90" y="600" class="t-body">1. <strong>Identify grave</strong> properly — cross-check with cemetery records · relatives confirm</text><text x="90" y="625" class="t-body">2. <strong>Dig out under MAGISTRATE\'S supervision</strong> + medical examiner + police present</text><text x="90" y="650" class="t-body">3. Identify the coffin / shroud · take photographs at each stage</text><text x="90" y="675" class="t-body">4. <strong>Body lifted out</strong> · ★ identified by relatives</text><text x="90" y="700" class="t-body">5. Examine condition of clothes · note state of body (skeletal, decomposed, adipocere)</text><text x="90" y="725" class="t-body">6. ★ <strong>Collect 500 g of SOIL</strong> from 4 sites:</text><text x="90" y="750" class="t-body">  → from ABOVE the body · LATERAL sides · BELOW · plus a CONTROL site (distant)</text><text x="90" y="775" class="t-body">  → for chemical analysis in suspected poisoning</text><circle class="ic" cx="1510" cy="538" r="14"/><text class="t-info" x="1510" y="544" text-anchor="middle">ⓘ</text></g>

<g data-node-id="exh-samples"><rect x="60" y="820" width="900" height="200" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="510" y="860" class="t-nlg" text-anchor="middle">📦 Samples to Preserve at Exhumation</text><text x="90" y="895" class="t-body">• <strong>Soil</strong> — 500 g × 4 sites (top + sides + bottom + control) for chemical analysis</text><text x="90" y="920" class="t-body">• <strong>Hairs</strong> from head and pubic region (for poison testing)</text><text x="90" y="945" class="t-body">• <strong>Available viscera</strong> in saturated salt solution</text><text x="90" y="970" class="t-body">• <strong>Teeth, nails, bone</strong> samples (for heavy metals — As detected in bone after years)</text><text x="90" y="995" class="t-body">• Clothes, coffin material, ornaments preserved separately</text><circle class="ic" cx="940" cy="838" r="14"/><text class="t-info" x="940" y="844" text-anchor="middle">ⓘ</text></g>

<g data-node-id="exh-pitfalls"><rect x="980" y="820" width="560" height="200" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="860" class="t-nlg" text-anchor="middle">⚠️ Pitfalls in Exhumation</text><text x="1000" y="895" class="t-body">• <strong>Digging tools cause artefactual injuries</strong> /</text><text x="1000" y="920" class="t-body">fractures — must distinguish from antemortem</text><text x="1000" y="945" class="t-body">• Decomposition obliterates many findings</text><text x="1000" y="970" class="t-body">• Adipocere may preserve tissues for years</text><text x="1000" y="995" class="t-body">• Embalming artefacts confound toxicology</text><circle class="ic" cx="1520" cy="838" r="14"/><text class="t-info" x="1520" y="844" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1040" width="1480" height="40" rx="10" fill="url(#gOrange)"/><text x="800" y="1068" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">🎯 Exhumation = MAGISTRATE order · NO time limit (India) · 500 g soil × 4 sites · arsenic stays in bone for years</text>
</svg>`;

const SVG_MA09 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Negative vs Obscure Autopsy</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">3-5% of cases · cause cannot be determined · further investigations needed</text>

<g data-node-id="neg-def"><rect class="body-white" x="60" y="110" width="730" height="300" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 165 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gRed)"/><text x="80" y="150" class="t-nlg">❌ NEGATIVE Autopsy</text><text x="80" y="195" class="t-keylbl">Definition:</text><text x="180" y="195" class="t-keyval">Autopsy that FAILS to reveal</text><text x="100" y="215" class="t-keyval">a cause of death even with GROSS + MICROSCOPIC +</text><text x="100" y="235" class="t-keyval">TOXICOLOGICAL + other laboratory investigations</text><text x="80" y="270" class="t-keylbl">Frequency:</text><text x="190" y="270" class="t-keyval">~ <strong>3-5%</strong> of all autopsies</text><text x="80" y="305" class="t-keylbl">Causes (4 categories):</text><text x="80" y="325" class="t-keyval">1. <strong>Inadequate history</strong></text><text x="80" y="345" class="t-keyval">2. <strong>Lapses in external / internal examination</strong></text><text x="80" y="365" class="t-keyval">3. <strong>Inadequate sample collection</strong></text><text x="80" y="385" class="t-keyval">4. <strong>Inadequate laboratory support</strong></text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="obs-def"><rect class="body-white" x="810" y="110" width="730" height="300" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 165 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gOrange)"/><text x="830" y="150" class="t-nlg">🌫️ OBSCURE Autopsy ★</text><text x="830" y="195" class="t-keylbl">Definition:</text><text x="930" y="195" class="t-keyval">Findings DO NOT lead to</text><text x="850" y="215" class="t-keyval">a DEFINITE cause of death</text><text x="850" y="240" class="t-keyval">— minimal · indefinite · obscure findings</text><text x="850" y="260" class="t-keyval">that CONFUSE the examiner</text><text x="830" y="295" class="t-keylbl">Common causes:</text><text x="830" y="315" class="t-keyval">• Death from <strong>endocrine dysfunction</strong> (DKA, Addison)</text><text x="830" y="335" class="t-keyval">• <strong>Vagal inhibition</strong> (sudden cardiac death)</text><text x="830" y="355" class="t-keyval">• Concealed trauma · reflex vagal inhibition</text><text x="830" y="375" class="t-keyval">• <strong>Drug idiosyncrasy</strong> · anaphylaxis</text><text x="830" y="395" class="t-keyval">• Biochemical disturbances — uraemia · hypoglycaemia · electrolyte</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="neg-obs-compare"><rect x="60" y="430" width="1480" height="200" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="470" class="t-nlg" text-anchor="middle">⚖️ Negative vs Obscure — Key Distinction</text><text x="90" y="510" class="t-body"><strong>Negative</strong> — investigation FAILED (lapse in procedure / sample / lab); a definite cause exists but couldn\'t be found</text><text x="90" y="540" class="t-body"><strong>Obscure</strong> — investigation was COMPLETE but the findings themselves are minimal / non-specific (the disease did not leave a strong morphological footprint)</text><text x="90" y="575" class="t-body">★ Examples of obscure causes — death from <strong>vagal inhibition</strong> (sudden cardiac), <strong>anaphylaxis</strong>, <strong>asthma</strong>, certain <strong>arrhythmias</strong>, <strong>concealed trauma</strong></text><text x="90" y="605" class="t-body">★ Both demand <strong>further investigations</strong> — histopathology, biochemistry, drug levels, scene revisit, family history</text><circle class="ic" cx="1510" cy="448" r="14"/><text class="t-info" x="1510" y="454" text-anchor="middle">ⓘ</text></g>

<g data-node-id="obs-investigation"><rect x="60" y="650" width="900" height="280" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="510" y="690" class="t-nlg" text-anchor="middle">🔬 Approach to Obscure / Negative Autopsy</text><text x="90" y="725" class="t-body">1. <strong>Histopathology</strong> — multiple sections from heart, lungs, brain, liver, kidney, pancreas</text><text x="90" y="750" class="t-body">2. <strong>Toxicology</strong> — viscera + blood + urine + bile + vitreous · screen for drugs / poisons</text><text x="90" y="775" class="t-body">3. <strong>Biochemistry</strong> — vitreous K⁺ / glucose · cortisol · troponin · electrolytes</text><text x="90" y="800" class="t-body">4. <strong>Microbiology</strong> — blood culture · CSF · lung swabs · stool</text><text x="90" y="825" class="t-body">5. <strong>DNA / molecular</strong> — channelopathy genes in unexplained sudden cardiac death (long QT, Brugada)</text><text x="90" y="850" class="t-body">6. <strong>Re-visit scene</strong> · review medical records · family history (sudden cardiac death, hypoglycaemia)</text><text x="90" y="875" class="t-body">7. <strong>Coronary cast</strong> · electron microscopy · immunohistochemistry (myocarditis, IgE for anaphylaxis)</text><text x="90" y="900" class="t-body" font-style="italic">★ Even after all this, ~ 5% remain unexplained — declared "cause undetermined"</text><circle class="ic" cx="940" cy="668" r="14"/><text class="t-info" x="940" y="674" text-anchor="middle">ⓘ</text></g>

<g data-node-id="vagal-inhibition"><rect x="980" y="650" width="560" height="280" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1260" y="690" class="t-nlg" text-anchor="middle">⚡ Vagal Inhibition — Common Obscure Cause</text><text x="1000" y="725" class="t-body"><strong>Mechanism:</strong> Sudden parasympathetic discharge →</text><text x="1000" y="745" class="t-body">cardiac inhibition → asystole within seconds</text><text x="1000" y="775" class="t-body"><strong>Triggers:</strong></text><text x="1000" y="795" class="t-body">• Pressure on neck (carotid sinus)</text><text x="1000" y="815" class="t-body">• Blow to abdomen / scrotum / hypogastrium</text><text x="1000" y="835" class="t-body">• Sudden immersion in cold water</text><text x="1000" y="855" class="t-body">• Anal / vaginal stimulation</text><text x="1000" y="880" class="t-body"><strong>Autopsy:</strong> NEGATIVE / minimal — exclusion diagnosis</text><text x="1000" y="905" class="t-body" font-style="italic">★ Death within seconds of trigger</text><circle class="ic" cx="1520" cy="668" r="14"/><text class="t-info" x="1520" y="674" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="950" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="988" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 Negative = procedure failed · Obscure = findings indefinite · Both → histopath + tox + biochem + molecular · ~ 3-5% remain unexplained</text>

<rect x="60" y="1020" width="1480" height="40" rx="10" fill="url(#gBlue)"/><text x="800" y="1048" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⭐ Vagal inhibition · anaphylaxis · channelopathy · drug idiosyncrasy = classic causes of obscure autopsy</text>
</svg>`;

const SVG_MA10 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Postmortem Artefacts — 5 Categories</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">PM exam · Decomposition · Third-party · Environment · Autopsy surgeon-induced</text>

<g data-node-id="art-def"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚠️ POSTMORTEM ARTEFACT — Definition</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Any change / new feature introduced into the body AFTER DEATH that poses difficulty in interpreting autopsy findings. Artefacts are <strong>physiologically unrelated</strong> to the natural state or disease of the body. Misinterpretation → wrong cause / manner of death, undue criminal suspicion, miscarriage of justice.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="art-pm-exam"><rect class="body-white" x="60" y="240" width="490" height="320" rx="14"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="280" class="t-nlg">1️⃣ During PM Examination</text><text x="80" y="325" class="t-keyval">• Pinpoint hemorrhages in livor areas — mimic PETECHIAE</text><text x="80" y="355" class="t-keyval">• Conjunctival oedema from dependent head — mimic asphyxia</text><text x="80" y="385" class="t-keyval">• Punctate hemorrhages beneath scalp on reflection</text><text x="80" y="415" class="t-keyval">• Cerebral convolution flattening (esp. occipital) — mimic oedema</text><text x="80" y="445" class="t-keyval">• PM hypostasis in internal organs — mimic CONTUSION</text><text x="80" y="475" class="t-keyval">• Banding of oesophagus — pale areas from hypostasis</text><text x="80" y="505" class="t-keyval">• Cardiac rigor — mimics CONCENTRIC HYPERTROPHY</text><text x="80" y="535" class="t-keyval">• Pyloric rigor — firm contracted stomach</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="art-decomp"><rect class="body-white" x="570" y="240" width="490" height="320" rx="14" stroke="#3D8B5B" stroke-width="3"/><path d="M 584,240 H 1046 A 14,14 0 0 1 1060,254 V 295 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gGreen)"/><text x="590" y="280" class="t-nlg">2️⃣ Decomposition Artefacts</text><text x="590" y="325" class="t-keyval">• PM bloating → mimics OBESITY</text><text x="590" y="350" class="t-keyval">• Bloody fluid from mouth/nose → NOT bleeding</text><text x="590" y="375" class="t-keyval">• Hemolysed blood diffusion → mimics CONTUSION</text><text x="590" y="400" class="t-keyval">• Skin fissures → mimic LACERATIONS / INCISED</text><text x="590" y="425" class="t-keyval">• Dilated flaccid vagina/anus → mimic SEXUAL ASSAULT</text><text x="590" y="450" class="t-keyval">• Tight cloth groove around neck → mimic LIGATURE</text><text x="590" y="475" class="t-keyval">• Skull suture separation by gas → mimic FRACTURE</text><text x="590" y="500" class="t-keyval">• Gas bubbles in heart → mimic AIR EMBOLISM</text><text x="590" y="525" class="t-keyval">• Gastromalacia / oesophagomalacia → mimic perforation</text><text x="590" y="545" class="t-keyval">• Endogenous alcohol (up to 0.15%) → mimics intoxication</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="art-3rd-party"><rect class="body-white" x="1080" y="240" width="460" height="320" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 1094,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 1080 V 254 A 14,14 0 0 1 1094,240 Z" fill="url(#gRed)"/><text x="1090" y="280" class="t-nlg">3️⃣ Third Party Artefacts</text><text x="1090" y="320" class="t-keylbl">A. Animals/birds/insects:</text><text x="1090" y="340" class="t-keyval">• Rodents — gnaw soft parts (ear, nose, lips)</text><text x="1090" y="360" class="t-keyval">• Dogs/cats/vultures — puncture-like injuries</text><text x="1090" y="380" class="t-keyval">• Ants — abrasion-like marks (moist sites)</text><text x="1090" y="400" class="t-keyval">• Aquatic animals — gnawing on submerged bodies</text><text x="1090" y="430" class="t-keylbl">B. Resuscitation / treatment:</text><text x="1090" y="450" class="t-keyval">• CPR → rib + sternum fractures</text><text x="1090" y="470" class="t-keyval">• Defibrillator → chest contusion-like marks</text><text x="1090" y="490" class="t-keyval">• Intracardiac injection → bruised heart</text><text x="1090" y="510" class="t-keyval">• ETT/laryngoscope → oral/pharyngeal injury</text><text x="1090" y="530" class="t-keyval">• Central line → neck extravasation (mimic strangulation)</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="art-embalm"><rect x="60" y="580" width="900" height="200" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="510" y="620" class="t-nlg" text-anchor="middle">3️⃣C Embalming + Deliberate Mutilation</text><text x="90" y="655" class="t-body"><strong>Embalming:</strong></text><text x="90" y="678" class="t-body">• Trocar passes through wound or fresh skin wound — confounds original injury</text><text x="90" y="700" class="t-body">• Chemical stiffening mimics rigor — distorts time-of-death estimate</text><text x="90" y="722" class="t-body">• Destroys CYANIDE, ALCOHOL, OPIATES, CO — toxicology useless</text><text x="90" y="750" class="t-body"><strong>Deliberate mutilation:</strong></text><text x="90" y="772" class="t-body">• Cadaver dismembered for disposal · post-death wounds to mislead</text><circle class="ic" cx="940" cy="598" r="14"/><text class="t-info" x="940" y="604" text-anchor="middle">ⓘ</text></g>

<g data-node-id="art-surgeon"><rect x="980" y="580" width="560" height="200" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="620" class="t-nlg" text-anchor="middle">4️⃣ Autopsy Surgeon-Induced</text><text x="1000" y="655" class="t-body">• Existing skull fracture extended during opening</text><text x="1000" y="680" class="t-body">• Neck incision → blood pooling mimics hemorrhage</text><text x="1000" y="705" class="t-body">• Forced separation → hyoid/thyroid fracture (mimics strangulation)</text><text x="1000" y="730" class="t-body">• Liver pulled apart → diaphragm tears</text><text x="1000" y="755" class="t-body" font-style="italic">★ Gentle, sequential dissection avoids these</text><circle class="ic" cx="1520" cy="598" r="14"/><text class="t-info" x="1520" y="604" text-anchor="middle">ⓘ</text></g>

<g data-node-id="art-environment"><rect x="60" y="800" width="900" height="200" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="510" y="840" class="t-nlg" text-anchor="middle">5️⃣ Environmental Artefacts</text><text x="90" y="875" class="t-body">• <strong>Burns</strong> → SubQ fat ruptures mimic incised / lacerated wounds</text><text x="90" y="900" class="t-body">• <strong>Heat hematomas</strong> mimic true extradural hematoma (see Ch 14)</text><text x="90" y="925" class="t-body">• <strong>Refrigeration</strong> → pinkish lividity (mimics CO/cyanide); solidified subQ fat in infants → crease at neck mimics strangulation</text><text x="90" y="950" class="t-body">• <strong>Undertaker\'s fracture</strong> — C6-C7 dislocation from rough handling, mimics antemortem cervical injury</text><text x="90" y="975" class="t-body">• <strong>Digging tool injuries</strong> in exhumation</text><circle class="ic" cx="940" cy="818" r="14"/><text class="t-info" x="940" y="824" text-anchor="middle">ⓘ</text></g>

<g data-node-id="art-significance"><rect x="980" y="800" width="560" height="200" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1260" y="840" class="t-nlg" text-anchor="middle">⚖️ Importance — 5 Consequences</text><text x="1000" y="875" class="t-body">Misinterpretation leads to:</text><text x="1000" y="900" class="t-body">1. Wrong CAUSE of death</text><text x="1000" y="925" class="t-body">2. Wrong MANNER of death</text><text x="1000" y="950" class="t-body">3. Undue suspicion of CRIMINAL interference</text><text x="1000" y="975" class="t-body">4. Halt in investigation / wasted effort</text><circle class="ic" cx="1520" cy="818" r="14"/><text class="t-info" x="1520" y="824" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1020" width="1480" height="40" rx="10" fill="url(#gOrange)"/><text x="800" y="1048" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">🎯 5 categories of PM artefact · embalming destroys CO/CN/alcohol/opiates · undertaker\'s fracture = C6-C7 dislocation from rough handling</text>
</svg>`;


const NODES = {
  'ma-def': { label: 'Autopsy — Definition &amp; Etymology', info: '<p><strong>Autopsy</strong> = "to see for oneself" (Greek: <em>autos</em> = self, <em>opis</em> = view).</p><p><strong>Synonyms:</strong></p><ul><li><strong>Necropsy</strong> (necros = dead, opis = view) — most accurate term for investigative dissection of dead body</li><li><strong>Postmortem examination</strong> — alternative term, but lacks precision (may sometimes mean only external)</li><li><strong>Forensic autopsy</strong> — when medicolegal</li></ul><p>The term "autopsy" is most commonly used in medical/lay contexts.</p>', tags: ['Greek origin'] },
  'ma-clinical': { label: 'Clinical (Pathological) Autopsy', info: '<p><strong>Clinical autopsy</strong> = pathological / academic autopsy.</p><ul><li><strong>Done by:</strong> Pathologist / treating doctor</li><li><strong>Purpose:</strong> Confirm clinical diagnosis · academic learning · medical audit · understand disease course</li><li><strong>Consent:</strong> ★ MANDATORY from relatives — without consent, autopsy CANNOT proceed</li><li><strong>Requisition:</strong> No police requisition needed (private hospital decision)</li><li><strong>Extent:</strong> May be partial (limited by consent) — e.g., chest only if family declines head</li><li><strong>Setting:</strong> Hospital / academic institution</li></ul><p>Used to be common; now declining due to legal concerns and family hesitation.</p>', tags: ['Consent required', 'Partial OK'] },
  'ma-medicolegal': { label: 'Medicolegal (Forensic) Autopsy', info: '<p><strong>Medicolegal autopsy</strong> = scientific examination of dead body carried out under the laws of the State on the requisition of a legal authority.</p><ul><li><strong>Done by:</strong> Registered Medical Practitioner only</li><li><strong>Purpose:</strong> Cause + manner + time of death · establish identity · collect evidence</li><li><strong>Consent:</strong> ★ NOT REQUIRED — state authority overrides family</li><li><strong>Requisition:</strong> ★ MANDATORY from police officer (≥ Sub-Inspector) OR Executive Magistrate</li><li><strong>Extent:</strong> ★ ALWAYS COMPLETE — partial autopsy NOT allowed</li><li><strong>Setting:</strong> Government mortuary (preferably well-equipped) in DAYLIGHT</li></ul>', tags: ['No consent', 'Always complete'] },
  'ma-objectives': { label: '8 Objectives of Medicolegal Autopsy', info: '<ol><li>To determine the <strong>CAUSE of death</strong> (immediate · antecedent · underlying)</li><li>To determine the <strong>MANNER of death</strong> (natural / accident / suicide / homicide / undetermined)</li><li>To estimate <strong>TIME since death</strong></li><li>To establish <strong>IDENTITY</strong> of deceased when not known</li><li>To collect <strong>EVIDENCES</strong> identifying the object/weapon causing death and the criminal</li><li>To document <strong>INJURIES</strong> and deduce mechanism of causation</li><li>To <strong>RETAIN</strong> relevant organs / viscera / tissues as evidence</li><li>In <strong>NEWBORN INFANTS</strong> — determine live birth and viability (infanticide cases)</li></ol>', tags: ['8 aims'] },
  'ma-when': { label: 'When is Medicolegal Autopsy Required?', info: '<ul><li>Sudden / unexpected death</li><li>Suspicious or unnatural circumstances</li><li>Homicide / suicide / accident</li><li><strong>Road traffic accidents</strong> — NEET-PG 2024 Q2 (police requests)</li><li>Custodial death (jail, police custody)</li><li>Death in hospital within 24 h of admission (some states require)</li><li>Death following operative / anaesthetic procedures</li><li><strong>Dowry death</strong> — within 7 yrs of marriage</li><li>Suspected poisoning</li><li>Deaths in mass disasters</li><li>Exhumation cases</li><li>Brought-dead cases</li></ul>', tags: ['12 categories'] },

  'ma-bnss': { label: 'Legal Authority — BNSS Sections', info: '<p>Statutory framework for medicolegal autopsy:</p><ul><li><strong>BNSS §174</strong> (was CrPC §174) — <strong>Police inquest</strong> in unnatural death by officer ≥ Sub-Inspector rank</li><li><strong>BNSS §196</strong> (was CrPC §176) — <strong>Magistrate inquest</strong> mandatory in: (a) dowry death within 7 yrs of marriage, (b) custody death</li></ul><p>The autopsy can only proceed AFTER legal requisition from the competent authority. Without requisition → no medicolegal autopsy can be done.</p>', tags: ['BNSS 174 / 196'] },
  'ma-requisition': { label: 'Requisition + Dead Body Challan', info: '<p><strong>Authority that can issue requisition:</strong></p><ul><li>Police officer of rank ≥ <strong>Sub-Inspector</strong></li><li>Executive Magistrate</li><li>Judicial Magistrate (in BNSS 196 cases)</li></ul><p><strong>Dead Body Challan</strong> = requisition document containing:</p><ul><li>Name, age, sex, address of deceased</li><li>Probable date + time of death</li><li>Date + time of body examination</li></ul><p><strong>Inquest report</strong> = preliminary investigation findings (details of body, scene, injuries, circumstances). The doctor must read both BEFORE starting the autopsy.</p>', tags: ['Challan + Inquest'] },
  'ma-identification': { label: 'Pre-Autopsy Identification', info: '<p><strong>Known body:</strong></p><ul><li>Police constable accompanying body identifies it</li><li>If feasible, relatives also asked to identify (especially in homicide cases)</li></ul><p><strong>Unknown body — record:</strong></p><ul><li>Identification marks (moles, scars, tattoos)</li><li>Congenital / acquired deformities</li><li>Fingerprints (request from investigating officer)</li><li>Photographs (face + profile + identification marks)</li><li>Preserve samples for later matching — hair, dental records, DNA</li></ul><p>★ Always record ≥ 2 identification marks in MLC certificate.</p>', tags: ['IO photographs FP'] },
  'ma-rules': { label: '8 Rules for Medicolegal Autopsy', info: '<ol><li>Conducted by Registered Medical Practitioner (RMP) only</li><li>Only on receiving official requisition from competent authority</li><li>Conducted at the earliest</li><li>Body accompanied by dead body challan + inquest report</li><li>At authorised centre — well-equipped government mortuary</li><li>Body identified by police accompanying it</li><li>No unauthorised person should be present</li><li>★ <strong>DAYLIGHT</strong> rule — colour changes can be appreciated only in natural light</li></ol><p>Additional: scene visit by doctor (when possible) is beneficial; treatment records reviewed.</p>', tags: ['8 rules'] },
  'ma-daylight': { label: 'Daylight Rule ★', info: '<p>★ <strong>Medicolegal autopsy must be conducted in DAYLIGHT</strong>.</p><p><strong>Why artificial light is inadequate:</strong></p><ul><li><strong>Jaundice colour</strong> cannot be appreciated</li><li>Postmortem <strong>lividity colour</strong> mis-interpreted (cherry-red CO vs purple normal vs pink hypothermia)</li><li><strong>Contusion colour changes</strong> (RBGY age estimation) inaccurate</li><li>Postmortem artefacts missed</li><li>Subtle skin lesions / injuries missed</li></ul><p>Exception only in emergencies when delay would prejudice investigation; should be recorded.</p>', tags: ['No artificial light'] },
  'ma-custody': { label: 'Custodial Death — Special Rule', info: '<p><strong>Custodial death</strong> = death in police / judicial custody.</p><p><strong>Special requirements:</strong></p><ul><li>★ <strong>VIDEO RECORDING of the autopsy is MANDATORY</strong></li><li>Video must be sent by the doctor HIMSELF to:<br><strong>Chairman, National Human Rights Commission (NHRC), New Delhi</strong></li><li>BNSS §196 magistrate inquest also mandatory (was CrPC 176)</li><li>Photographs at each stage</li><li>Senior forensic medicine specialist preferred</li><li>Second opinion may be sought</li></ul><p>Rationale: prevent allegations of cover-up · transparency in custodial deaths.</p>', tags: ['Video + NHRC'] },

  'tech-overview': { label: 'Autopsy Techniques — Overview', info: '<p>4 classical techniques developed by different European schools:</p><ol><li><strong>Virchow</strong> (Germany) — organ by organ</li><li><strong>Rokitansky</strong> (Austria) — in-situ dissection</li><li><strong>Ghon</strong> (Austria — TB pioneer) — en-bloc by functional groups</li><li><strong>Letulle</strong> (France) — en-masse</li></ol><p>Choice depends on: case requirement · suspected disease · biohazard risk (HIV/TB/COVID-19) · surgeon convenience. <strong>Letulle is preferred for infectious cases</strong> because dissection happens OFF the body, minimising operator exposure.</p>', tags: ['4 schools'] },
  'virchow': { label: 'Virchow Technique — Organ by Organ', info: '<p><strong>Rudolf Virchow</strong> (1821-1902, Germany) — father of modern pathology.</p><p><strong>Principle:</strong> Organs removed <strong>ONE BY ONE</strong> from the body.</p><p><strong>Sequence:</strong> Brain → thoracic organs (heart, lungs) → abdominal organs (liver, spleen, kidneys, GI tract).</p><p>Each organ is examined as it is taken out.</p><p><strong>Advantages:</strong></p><ul><li>Most popular and widely practiced</li><li>Convenient · quick</li><li>Easy to teach</li></ul><p><strong>Disadvantages:</strong></p><ul><li>Inter-organ relationships LOST</li><li>Vascular continuity broken</li><li>Difficult to appreciate complex pathology spanning multiple organs</li></ul>', tags: ['Most popular'] },
  'rokitansky': { label: 'Rokitansky Technique — In-situ Dissection', info: '<p><strong>Karl von Rokitansky</strong> (1804-1878, Austria) — Vienna school of pathology.</p><p><strong>Principle:</strong> Partial <strong>IN-SITU DISSECTION</strong> of organs (within body cavity) followed by en-bloc removal.</p><p><strong>Method:</strong> Organs are examined and partially dissected while still INSIDE the body cavity, then removed in blocks.</p><p><strong>Advantages:</strong></p><ul><li>Minimal organ disturbance</li><li>Preserves anatomical and vascular relationships</li><li>Useful when extensive vascular evaluation is needed</li><li>Less risk of accidental injury during removal</li></ul><p><strong>Disadvantages:</strong></p><ul><li>Limited view inside body</li><li>Some lesions only appreciable after removal</li></ul>', tags: ['In situ'] },
  'ghon': { label: 'Ghon Technique — En-bloc Functional Groups', info: '<p><strong>Anton Ghon</strong> (1866-1936, Austria) — best known for "<strong>Ghon\'s complex</strong>" in pulmonary tuberculosis.</p><p><strong>Principle:</strong> Organs removed as <strong>EN-BLOC FUNCTIONAL GROUPS</strong>:</p><ul><li><strong>Cervical bloc</strong> — tongue, pharynx, larynx, oesophagus, trachea, thyroid</li><li><strong>Thoracic bloc</strong> — heart, lungs (with great vessels)</li><li><strong>Abdominal bloc</strong> — stomach, intestine, liver, spleen, pancreas</li><li><strong>Urogenital bloc</strong> — kidneys, ureters, bladder, prostate / uterus</li></ul><p><strong>Advantages:</strong></p><ul><li>Preserves organ relationships WITHIN each system</li><li>Allows systematic examination by organ system</li><li>Good for teaching</li></ul><p><strong>Disadvantages:</strong> Inter-bloc relationships lost.</p>', tags: ['4 functional blocs'] },
  'letulle': { label: 'Letulle Technique — En-masse (★ Best) ★', info: '<p><strong>Maurice Letulle</strong> (1853-1929, France).</p><p><strong>Principle:</strong> ALL organs removed as ONE MASS — <strong>EN MASSE from TONGUE to PROSTATE / VAGINA</strong>.</p><p><strong>Method:</strong> Cervical + thoracic + abdominal + pelvic viscera removed TOGETHER as a single block, then dissected OFF THE BODY on a separate dissection table.</p><p><strong>★ Advantages:</strong></p><ul><li><strong>BEST preservation</strong> of organ relationships</li><li><strong>★ MINIMAL EXPOSURE</strong> of operator to body — IDEAL for biohazardous cases (HIV+, TB, hepatitis, COVID-19)</li><li>Considered the BEST technique overall</li><li>Excellent for systemic pathology demonstration</li></ul><p><strong>Disadvantage:</strong> Most time-consuming · heavy mass to handle.</p><p>★ <strong>NEET-PG 2023 Q3</strong>: "Removed en masse from tongue to prostate" = LETULLE.</p><p>★ <strong>NEET-PG 2023 Q4+Q5</strong>: HIV+ body autopsy → LETULLE technique.</p>', tags: ['Tongue to prostate', 'HIV+', 'PYQ 2023 Q3-5'] },
  'tech-comparison': { label: 'Memory Hooks for Techniques', info: '<ul><li><strong>Virchow</strong> = "Very one" — organ by ONE</li><li><strong>Rokitansky</strong> = "Rok in situ" — dissect INSIDE body</li><li><strong>Ghon</strong> = "Group-Ghon" — 4 functional GROUPS</li><li><strong>Letulle</strong> = "Let it ALL out" — en masse</li></ul><p>Trick for PYQs: if the stem says "tongue to prostate" / "en masse" / "HIV+" / "infectious case" → Letulle.</p><p>If stem says "one organ at a time" / "common method" → Virchow.</p>', tags: ['Mnemonics'] },

  'ext-overview': { label: 'External Examination — Master Sequence', info: '<p>Fixed sequence to ensure nothing is missed:</p><ol><li><strong>Clothing</strong> (before removal)</li><li><strong>Identity</strong> — record marks if unknown</li><li><strong>Preliminary particulars</strong> — height, weight, nutrition, built</li><li><strong>Postmortem changes</strong> — rigor, lividity, algor, decomposition</li><li><strong>Skin / odour / orifices</strong></li><li><strong>Injuries</strong> (10-point format)</li><li><strong>External genitals</strong></li></ol><p>Always head-to-toe documentation; metric system; photographs with scale.</p>', tags: ['7-step sequence'] },
  'ext-clothing': { label: 'Clothing Examination', info: '<p><strong>Examine BEFORE removing</strong> the clothes:</p><ul><li><strong>Stains</strong> — blood, semen, urine, vomit, drugs · note pattern (running, splatter, contact)</li><li><strong>Soiling material</strong> — mud, paint, grease, GSR (gunshot residue)</li><li><strong>Foreign material</strong> — hair, fibre, glass, vegetation</li><li><strong>Cuts / tears / stab marks</strong> — correlate with body injuries (alignment helps reconstruct attack)</li><li><strong>Loss of buttons</strong> — indicates struggle</li><li><strong>Bullet holes / explosive damage</strong></li></ul><p>Each garment removed, photographed, dried (if wet), labelled, and preserved.</p>', tags: ['Before removal'] },
  'ext-pm-changes': { label: 'Postmortem Changes Documentation', info: '<ul><li><strong>Rigor mortis</strong> — present / absent · distribution (which muscles)</li><li><strong>Postmortem lividity</strong> — site · colour · fixed (after 7-8 h) / unfixed · disintegrating</li><li>Colour clues: purplish (normal) · cherry-red (CO) · brown (methaemoglobin) · pink (hypothermia, refrigeration) · cyanide</li><li><strong>Algor mortis</strong> — rectal temperature (Henssge nomogram)</li><li><strong>Decomposition</strong> — extent · maggots · larvae · eggs (entomology for time of death)</li><li><strong>Features</strong> — identifiable, distorted, bloated, adipocere, mummified</li></ul>', tags: ['Rigor · Lividity · Algor'] },
  'ext-skin-odour': { label: 'Skin, Odour, Orifices', info: '<p><strong>Skin examination:</strong></p><ul><li>Dermatological lesions — pustules, vesicles, infections, boils</li><li>Macular / papular / purpura / bleeding spots</li><li>Oedema, cyanosis, jaundice</li></ul><p><strong>Odour from body:</strong></p><ul><li><strong>Insecticide / OP</strong> — kerosene-like</li><li><strong>Bitter almonds</strong> — cyanide</li><li><strong>Garlicky</strong> — arsenic, phosphorus, thallium</li><li><strong>Acetone</strong> — DKA</li><li><strong>Fermented / fruity</strong> — alcohol</li></ul><p><strong>Natural orifices</strong> — nose, mouth, ear, anus, vagina, urethra — examine for: froth, blood, foreign body, semen, secretions, injury.</p>', tags: ['Odour clues'] },
  'ext-injuries': { label: 'Injury Documentation — 10-Point Format', info: '<p>For each injury, document in sequence (head-to-toe, numbered):</p><ol><li><strong>Type</strong> — abrasion · contusion · laceration · incised · stab · chop · crush · burn · electrical</li><li><strong>Site</strong> — exact anatomical position (cm from fixed landmark)</li><li><strong>Dimensions</strong> — length × width × depth (metric)</li><li><strong>Shape</strong> — linear · curved · irregular · stellate</li><li><strong>Margins / edges</strong> — clean, abraded, bruised, everted, inverted</li><li><strong>Floor / depth</strong> — tissue bridges (laceration), no bridges (incised)</li><li><strong>Surrounding tissue</strong> — bruising, swelling, vital reaction</li><li><strong>Direction</strong> — tailing, force vector</li><li><strong>Probable weapon</strong> — sharp / blunt / dangerous</li><li><strong>Age of injury</strong> — fresh / 24 h / 2-7 d / &gt; 1 wk</li></ol><p>★ Always photograph with scale · always state AM vs PM.</p>', tags: ['10-point format'] },
  'ext-genitals': { label: 'External Genitals Examination', info: '<p>Examine for:</p><ul><li><strong>Disease</strong> — STIs, ulcers, discharge, scars</li><li><strong>Injury</strong> — laceration, contusion, bite marks, bruising</li><li><strong>Foreign body</strong> in vagina / urethra / anus</li><li><strong>Stains</strong> — semen, blood, mucus</li><li><strong>Secretions</strong> — discharge, smegma</li><li><strong>Signs of sexual assault</strong> — genital injuries, bruising of inner thighs, defence wounds</li></ul><p><strong>In suspected rape:</strong></p><ul><li>Vaginal swabs and smears (for sperm, semen)</li><li>Pubic combings (foreign hair)</li><li>DNA reference from victim and suspect</li><li>Photograph with scale</li></ul>', tags: ['Sexual assault'] },
  'ext-identity': { label: 'Identity Recording Detail', info: '<p><strong>Known body:</strong> police constable + relatives identify · record name, age, sex, address from challan.</p><p><strong>Unknown body:</strong> document for later matching:</p><ul><li>Identification marks (moles, scars, tattoos, deformities)</li><li>Photographs (face, profile, distinctive marks)</li><li>Fingerprints (request from IO)</li><li>Dental chart</li><li>DNA samples for later comparison</li></ul><p><strong>Preliminary particulars:</strong></p><ul><li>Height + weight (measure even after death)</li><li>Nutritional status, built</li><li>Gross deformities</li><li>Hair patterns / colour (scalp, beard, body, pubic)</li><li>Stains, foreign body, mud, grease, paint</li></ul>', tags: ['MLC requires ≥ 2 marks'] },

  'int-overview': { label: 'Internal Examination — Components', info: '<p>Includes:</p><ol><li><strong>Cranial cavity</strong> (skull + brain)</li><li><strong>Thoracic cavity</strong> (heart + lungs + great vessels)</li><li><strong>Abdominal cavity</strong> (liver, spleen, GI, kidneys, pelvis)</li><li><strong>Spinal cord</strong> (when indicated)</li><li><strong>Extremities</strong> (when indicated)</li></ol><p><strong>Routine order:</strong> head → chest → abdomen.</p><p>★ <strong>In FOETUS, abdomen is opened FIRST</strong> to record diaphragm position (to determine if respiration occurred — live birth question).</p>', tags: ['5 components'] },
  'i-incision': { label: 'I-shaped Incision', info: '<p>Straight incision from <strong>chin (symphysis mentis) to pubis (symphysis pubis)</strong>.</p><p><strong>Use:</strong> ★ COMMONEST method used.</p><p><strong>Advantages:</strong></p><ul><li>Easy · fast · simple</li><li>Less surgical skill required</li></ul><p><strong>Disadvantages:</strong></p><ul><li>Inadequate exposure of axillary region</li><li>Inadequate exposure of neck organs</li><li>Less cosmetic (visible scar)</li></ul><p>Default choice in routine medicolegal autopsy.</p>', tags: ['Commonest'] },
  'y-incision': { label: 'Y-shaped Incision', info: '<p><strong>Path:</strong> Starts at acromial process on each side → extends down below the breast → meets at xiphoid → continues straight down to pubis.</p><p><strong>Advantages:</strong></p><ul><li>★ <strong>MORE COSMETIC</strong> — incision hidden under clothing when body is returned</li><li>Spares skin of neck</li><li>Axillary and neck regions easily accessible</li></ul><p><strong>Disadvantages:</strong></p><ul><li>More tedious</li><li>Requires more time</li></ul><p>Preferred when body is to be returned to family.</p>', tags: ['Cosmetic'] },
  'modY-incision': { label: 'Modified Y-shaped Incision', info: '<p><strong>Path:</strong> Straight incision from suprasternal notch to pubis. Then extended from suprasternal notch → mid-point of clavicle → upwards behind ear (both sides).</p><p><strong>Advantage:</strong></p><ul><li>Better exposure of neck region than I-shaped</li><li>Faster than full Y-shaped</li></ul><p><strong>Disadvantage:</strong></p><ul><li>Tedious procedure</li><li>Requires more time than I-shaped</li><li>Inadequate axillary exposure</li></ul>', tags: ['Best neck access'] },
  'coronal-scalp': { label: 'Cranial — Coronal Scalp Incision', info: '<p><strong>Coronal incision:</strong> Begins behind one ear → extends upward and across vertex → ends behind the other ear.</p><p>★ MORE PREFERABLE — the incision is hidden by hair when scalp is closed.</p><p><strong>Skullcap removal:</strong> Saw horizontally on both sides — line extending from about CENTER OF FOREHEAD → above MASTOID PROCESS → EXTERNAL OCCIPITAL PROTUBERANCE backward.</p><p><strong>Examination sequence:</strong></p><ul><li>Skullcap — fractures, depressions</li><li>Dura — collection of blood, injury, disease</li><li>Superior sagittal sinus — thrombosis</li><li>Brain in situ — note injuries, then dissect</li><li>Vascular malformations · aneurysms · ventricles · cerebellum · brainstem</li></ul>', tags: ['Hidden in hair'] },
  'spinal-cord': { label: 'Spinal Cord Opening — 3 Indications', info: '<p>Spine is NOT routinely opened. Open ONLY when indicated:</p><ol><li><strong>Injury</strong> to spine / spinal cord (suspected paraplegia, quadriplegia)</li><li><strong>Disease</strong> affecting spinal cord (transverse myelitis, GBS, MS)</li><li><strong>Strychnine poisoning</strong> ★ (spinal poison — causes opisthotonos)</li></ol><p><strong>Approach methods:</strong></p><ul><li><strong>Posterior</strong> — midline incision over spinous processes + bilateral laminectomies with saw</li><li><strong>Anterior</strong> — through removed thoracic + abdominal viscera</li></ul>', tags: ['Strychnine = spinal'] },
  'cavity-exam': { label: 'Chest, Abdomen — Organ Examination', info: '<p><strong>For each cavity examine:</strong></p><ul><li>Injuries, diseases, pathological lesions</li><li>Collections (blood, fluid, pus)</li><li>Adhesions, displacement</li></ul><p><strong>For each organ document:</strong></p><ul><li><strong>Weight</strong> · <strong>Size</strong> · <strong>Shape</strong> · <strong>Surface</strong> · <strong>Consistency</strong> · <strong>Cut surface</strong> · <strong>Colour</strong></li></ul><p><strong>Normal organ weights (adult):</strong></p><ul><li>Heart — ♂ 300 g · ♀ 250 g</li><li>Right lung — 450 g · Left lung — 400 g</li><li>Liver — 1500 g · Spleen — 150 g</li><li>Each kidney — 150 g · Pancreas — 100 g</li><li>Brain — 1400 g · Thyroid — 25 g</li></ul><p><strong>Stomach contents</strong> — volume, smell, food particles, foreign body, tablets, capsules.</p>', tags: ['Organ weights'] },

  'sample-overview': { label: 'Sampling — Why &amp; What', info: '<p>Samples preserved for:</p><ul><li><strong>Toxicology</strong> — viscera, blood, urine, vitreous</li><li><strong>Histopathology</strong> — tissue in formalin</li><li><strong>Microbiology</strong> — blood culture, swabs</li><li><strong>Biochemistry</strong> — blood, vitreous</li><li><strong>DNA</strong> — blood (EDTA), tissue, bone marrow</li></ul><p>★ <strong>Wrong preservative or contamination → destroys evidence</strong>.</p><p><strong>Chain of custody:</strong> doctor → packing → labelling (name, age, sex, site, date) → seal with cloth + paper + thread + wax → handover to investigating officer with signed receipt.</p>', tags: ['Chain of custody'] },
  'viscera-salt': { label: '★ Viscera Preservation = Saturated Salt Solution', info: '<p>★ <strong>Standard preservative for viscera</strong> sent for chemical analysis (toxicology) = <strong>SATURATED COMMON SALT (NaCl) SOLUTION</strong>.</p><p><strong>Container:</strong> Wide-mouth glass bottle, clean and dry.</p><p><strong>Volume:</strong> Twice the volume of viscera (to ensure complete immersion).</p><p><strong>Why salt:</strong></p><ul><li>Inhibits bacterial decomposition</li><li>Preserves most poisons (organic + inorganic) without altering them</li><li>Easily available + cheap</li></ul><p><strong>NOT used for CORROSIVES</strong> (which alter pH and themselves react with salt).</p><p>★ <strong>NEET-PG 2019 Q4</strong> verbatim: "Viscera in toxicology stored in" → SATURATED SALT SOLUTION.</p>', tags: ['PYQ 2019 Q4', 'NaCl saturated'] },
  'blood-preserve': { label: 'Blood Preservation by Purpose', info: '<table><tr><th>Purpose</th><th>Preservative</th></tr><tr><td><strong>Alcohol estimation</strong></td><td>Sodium FLUORIDE (NaF) + Potassium oxalate ★</td></tr><tr><td>Toxicology general</td><td>NaF or sodium citrate</td></tr><tr><td>DNA / serology</td><td>EDTA (purple top tube)</td></tr><tr><td>Carboxyhaemoglobin (CO)</td><td>Air-tight bottle, no air space</td></tr><tr><td>Cyanide</td><td>Air-tight container, analyse FRESH</td></tr><tr><td>Heavy metals</td><td>Heparin / no preservative — clean tube</td></tr></table><p>★ NaF prevents bacterial fermentation that would otherwise produce false alcohol post-mortem.</p>', tags: ['NaF for alcohol'] },
  'histo-formalin': { label: 'Histopathology = 10% Formalin', info: '<p><strong>For histopathological examination:</strong></p><ul><li><strong>Tissue pieces</strong> 1-2 cm cubes from each organ</li><li><strong>Fixative:</strong> 10% BUFFERED FORMALIN (= 4% formaldehyde)</li><li><strong>Volume:</strong> 10× the tissue volume (immersion principle)</li><li><strong>Container:</strong> wide-mouth glass / plastic with tight lid</li></ul><p>★ <strong>NEVER use formalin for toxicology</strong> — destroys:</p><ul><li>Carbon monoxide</li><li>Alcohol</li><li>Opiates</li><li>Cyanide</li></ul><p>Use SEPARATE samples and bottles for histopathology and toxicology.</p>', tags: ['10% formalin'] },
  'other-fluids': { label: 'Other Body Fluids for Analysis', info: '<ul><li><strong>Urine</strong> — 100 mL · saturated salt OR refrigerated · drug screen</li><li><strong>Vitreous humour</strong> — 1-2 mL via 18-G needle into eye<ul><li>Stable site (resistant to decomposition)</li><li>Useful for: alcohol estimation, K⁺ for time since death, glucose for DKA, electrolytes</li></ul></li><li><strong>Bile</strong> — for opiates, paracetamol metabolites (concentrated in bile)</li><li><strong>CSF</strong> — meningitis, electrolytes</li><li><strong>Stomach contents</strong> — for poison identification, food residue, tablets</li><li><strong>Pericardial fluid</strong> — diagnosis of myocardial infarction (troponin, CK isozymes)</li></ul>', tags: ['Vitreous = stable'] },
  'standard-viscera': { label: 'Standard Viscera Set (for FSL)', info: '<p>★ Standard 5-bottle viscera set sent to Forensic Science Laboratory (FSL):</p><ul><li><strong>Bottle 1:</strong> Stomach + small intestine (500 g) + saturated salt</li><li><strong>Bottle 2:</strong> Liver (200 g) + spleen (whole) + half kidney + salt</li><li><strong>Bottle 3:</strong> Brain (half) + lung (half) + salt</li><li><strong>Bottle 4:</strong> Blood (10 mL) — with appropriate preservative</li><li><strong>Bottle 5:</strong> Urine (50-100 mL) + salt</li></ul><p>Each bottle:</p><ul><li>Labelled — name, age, sex, organ, date, autopsy number</li><li>Sealed with cloth + paper + thread + wax</li><li>Doctor\'s signature on seal</li><li>Forwarded to FSL with covering letter and chain of custody form</li></ul>', tags: ['5 bottles'] },
  'special-poisons': { label: 'Special Preservatives by Poison', info: '<ul><li><strong>Strychnine</strong> → save SPINAL CORD in saturated salt solution</li><li><strong>Heavy metals (As, Pb, Hg, Tl)</strong> → preserve HAIR, NAILS, BONE in addition to viscera (deposit in keratin and bone)</li><li><strong>Arsenic</strong> → can be detected in bone for YEARS (Marsh test)</li><li><strong>Carbon monoxide (CO)</strong> → blood in airtight bottle filled COMPLETELY (no air space) — CO can dissociate</li><li><strong>Cyanide</strong> → blood in airtight container · analyse FRESH (cyanide degrades on storage)</li><li><strong>Volatile poisons (alcohol, ether, chloroform)</strong> → tightly stoppered bottles, refrigerate</li><li><strong>Paraquat</strong> → urine particularly useful (excreted)</li></ul>', tags: ['Poison-specific'] },

  'hiv-autopsy': { label: '★ HIV+ Body Autopsy', info: '<p>★ <strong>HIV+ body autopsy uses LETULLE technique</strong> (en-masse removal) because dissection happens OFF THE BODY, minimising operator exposure.</p><p><strong>Universal precautions for biohazard autopsies:</strong></p><ul><li><strong>Double gloves</strong> (cut-resistant under nitrile)</li><li>Gown (impermeable)</li><li>Mask — N95 / FFP3 for COVID, TB, droplet</li><li>Face shield / goggles</li><li>Boots (rubber, washable)</li><li>Avoid sharp injuries — blunt-tipped scissors when possible</li><li>Limit number of personnel</li><li><strong>Hepatitis B vaccination</strong> of all staff</li><li>Post-exposure prophylaxis (PEP) protocol available</li></ul><p>★ <strong>NEET-PG 2023 Q4 + Q5</strong> verbatim: HIV+ patient autopsy → LETULLE technique.</p>', tags: ['PYQ 2023 Q4+Q5'] },
  'covid-autopsy': { label: 'COVID-19 Autopsy ★', info: '<p>★ <strong>NEET-PG 2022 Q9 verbatim:</strong></p><p><em>"56-year-old man with COVID-19 on mechanical ventilation; died after a week. Likely post-mortem lung finding?"</em></p><p>★ <strong>Answer:</strong> "<strong>Thick layer of FIBRIN lining the alveoli</strong>" (diffuse alveolar damage / hyaline membrane).</p><p><strong>Other characteristic findings:</strong></p><ul><li>MICROTHROMBI in pulmonary vessels (hypercoagulable state)</li><li>Hemorrhagic infarcts</li><li>ARDS pattern</li><li>Type II pneumocyte hyperplasia</li><li>Multinucleated giant cells</li></ul><p><strong>Biosafety:</strong> Use LETULLE technique · N95 / FFP3 · airborne precautions · negative-pressure morgue if available.</p>', tags: ['PYQ 2022 Q9', 'Fibrin layer'] },
  'decomposed': { label: 'Decomposed Body Autopsy', info: '<ul><li>Autopsy on SAME lines as routine</li><li>Carefully record injuries / ligature marks / fractures (★ may be PM artefact!)</li><li>★ <strong>Identify ARTEFACTS</strong> produced by decomposition (see MA-10)</li><li>Note foreign body / mud / sand particles in mouth / respiratory tract</li><li>Preserve necessary viscera for chemical analysis</li><li>Pay attention to ENTOMOLOGICAL aspects (maggots / flies) — for time of death estimation</li><li>If body unidentified — preserve DNA samples, skull for superimposition, fingerprints (if possible)</li><li>Note adipocere, mummification, skeletalisation extent</li></ul>', tags: ['Distinguish PM artefacts'] },
  'mutilated': { label: 'Mutilated Body Examination', info: '<p><strong>Causes of mutilation:</strong></p><ul><li>By criminals — destroy identity / evidence</li><li>By criminals — convenience of body disposal</li><li>Postmortem artefact — wild animals, birds</li></ul><p><strong>Examination approach:</strong></p><ol><li>Ascertain all parts are HUMAN (vs animal bones)</li><li>Determine if parts belong to one or more individuals</li><li>Reassemble parts in proper anatomical fashion</li><li>Nature and character of parts recorded</li><li>Manner of separation — AM (with vital reaction) or PM (no vital reaction)</li><li>Identification — sex, age, race, stature, time since death, place of disposal</li><li>Preserve samples — DNA, bone, teeth, hair</li><li>Preserve material evidence</li></ol>', tags: ['Reassemble parts'] },
  'fetal-autopsy': { label: 'Foetal Autopsy', info: '<p><strong>Objectives:</strong></p><ol><li>Cause of death</li><li>Live born / dead born / stillborn determination</li><li>Viability of foetus</li><li>Intrauterine age</li><li>Duration of survival after birth</li><li>Manner of death</li><li>Time since death</li><li>Material evidence collection</li><li>Identity</li></ol><p>★ <strong>KEY RULE — ABDOMEN OPENED FIRST</strong> to record diaphragm position (high diaphragm = no respiration = dead born).</p><p><strong>By gestational age (MacPherson and Valdes-Dapena 1991):</strong></p><ul><li>&lt; 12 wk or &lt; 25 g → free-hand sectioning of trunk into 1 cm slices</li><li>12-22 wk or &lt; 400 g → mini-necropsy with en-bloc organ removal</li><li>&gt; 22 wk → full necropsy (★ Letulle preferred)</li></ul>', tags: ['Abdomen first'] },
  'mass-disaster': { label: 'Mass Disaster Autopsy', info: '<ul><li>Multiple deaths from air crash · terror attack · bomb · tsunami · earthquake · stampede</li><li><strong>Interpol DVI</strong> (Disaster Victim Identification) protocol:<ul><li>Pink form — PM data</li><li>Yellow form — AM data</li><li>Reconciliation matches PM with AM</li></ul></li><li><strong>Triage approach:</strong> identify first by visible features, then by primary identifiers (FP / dental / DNA)</li><li><strong>Team:</strong> forensic medicine + odontology + DNA + police + counsellors</li><li>Body bags numbered systematically</li><li>Photographs at each stage</li><li>Personal effects bagged separately</li><li>DNA samples from EVERY body</li></ul><p>★ India used DVI after 2004 tsunami, 26/11 attacks, helicopter crashes.</p>', tags: ['DVI Pink + Yellow'] },
  'special-others': { label: 'Other Special Autopsies', info: '<ul><li><strong>Brought dead</strong> — full autopsy + review of clinical records · usually negative or natural cause</li><li><strong>Anaesthetic death</strong> — preserve all drugs, IV bag, fluids, vials · investigate malignant hyperthermia (RYR1 mutation), latex anaphylaxis</li><li><strong>Operative death</strong> — preserve all surgical specimens, instruments, transfused blood</li><li><strong>Dowry death</strong> within 7 yrs of marriage → magistrate inquest (BNSS §196 / CrPC 176) mandatory</li><li><strong>Custody death</strong> — VIDEO recording → send to NHRC → magistrate inquest</li><li><strong>Encounter death</strong> — magistrate inquest · NHRC guidelines</li></ul>', tags: ['Dowry · custody · operative'] },

  'exh-def': { label: 'Exhumation — Definition', info: '<p><strong>Exhumation</strong> = lawful disinterment — the digging out of a previously buried body for postmortem examination.</p><p><strong>Etymology:</strong> Latin <em>ex</em> (out of) + <em>humus</em> (ground) — "out of the earth".</p><p>The term is restricted to the retrieval of a body interred in a legitimate fashion in the graveyard (not random disturbance of corpses).</p>', tags: ['Lawful disinterment'] },
  'exh-purpose': { label: 'Purposes of Exhumation', info: '<ol><li><strong>Identification</strong> of body (later identification needed)</li><li><strong>Second autopsy</strong> when first report is doubtful / ambiguous</li><li><strong>Civil cases</strong> — insurance claims · negligence allegations</li><li><strong>Disputed cause of death</strong> — new evidence emerges</li><li><strong>Suspected foul play</strong> — revealed after burial (e.g., poisoning suspected)</li></ol><p>Common scenarios: dowry death suspicion arising weeks later · insurance fraud · suspected poisoning revealed by witness later.</p>', tags: ['5 purposes'] },
  'exh-authority': { label: 'Authorisation &amp; Time Limit', info: '<p><strong>Authorisation:</strong></p><p>★ <strong>WRITTEN ORDER from an EXECUTIVE MAGISTRATE or JUDICIAL MAGISTRATE</strong> is mandatory.</p><p>Police alone cannot order exhumation — magistrate authority needed.</p><p><strong>★ Time limit in India:</strong></p><p>★ <strong>NO TIME LIMIT</strong> — exhumation can be done at any time after burial in India.</p><p><strong>Time limits in other countries:</strong></p><ul><li>France — 10 years from burial</li><li>Germany — 30 years</li><li>UK — varies by Coroner</li></ul><p>Even decades after burial, arsenic and lead can still be detected in bones and hair.</p>', tags: ['Magistrate · No time limit'] },
  'exh-procedure': { label: 'Exhumation Procedure (Step-by-Step)', info: '<ol><li>Identify grave PROPERLY — cross-check cemetery records · relatives confirm</li><li>Dig out under MAGISTRATE\'S SUPERVISION + medical examiner + police present</li><li>Identify the coffin / shroud · photograph at each stage</li><li>Body lifted out · ★ identified by relatives</li><li>Examine condition of clothes · note state of body (skeletal, decomposed, adipocere, mummified)</li><li>★ <strong>Collect 500 g of SOIL from 4 sites</strong>:<ul><li>From above body</li><li>From lateral sides</li><li>From below body</li><li>From a CONTROL site (distant) — establishes baseline</li></ul></li><li>Soil samples sent for chemical analysis (suspected poisoning)</li><li>Hairs from head and pubic region collected</li><li>Body shifted to mortuary for autopsy</li><li>Routine autopsy procedure followed · viscera + teeth + nails + bone preserved</li></ol>', tags: ['500 g × 4 sites'] },
  'exh-samples': { label: 'Samples to Preserve at Exhumation', info: '<ul><li><strong>Soil</strong> — 500 g × 4 sites (above + lateral + below + control)</li><li><strong>Hairs</strong> — head + pubic region (heavy metals stay in hair)</li><li><strong>Available viscera</strong> — in saturated salt solution</li><li><strong>Teeth, nails, bone</strong> — for heavy metals (arsenic detected in bone after years)</li><li><strong>Clothes, coffin material, ornaments</strong> — preserved separately</li><li><strong>Embalming fluid sample</strong> if embalmed</li><li><strong>Insect / larval samples</strong> — entomology</li><li><strong>Photographs</strong> at every stage</li></ul>', tags: ['Multi-site samples'] },
  'exh-pitfalls': { label: 'Pitfalls in Exhumation', info: '<ul><li><strong>Digging tools cause artefactual injuries</strong> / fractures — must distinguish from antemortem</li><li><strong>Decomposition</strong> obliterates many findings (soft tissue injuries, lividity, vital reaction)</li><li><strong>Adipocere</strong> may preserve tissues for years — both helpful and confounding</li><li><strong>Embalming artefacts</strong> confound toxicology (CO, alcohol, opiates destroyed; trocar wounds)</li><li><strong>Contamination</strong> — soil/water contaminants may give false-positive toxicology if controls not taken</li><li><strong>Re-burial</strong> issues — religious / cultural concerns of family</li></ul>', tags: ['Digging artefacts'] },

  'neg-def': { label: 'Negative Autopsy', info: '<p><strong>Negative autopsy</strong> = autopsy that FAILS to reveal a cause of death even after gross + microscopic + toxicological + laboratory investigations.</p><p><strong>Frequency:</strong> ~ 3-5% of all autopsies.</p><p><strong>Causes (4 categories):</strong></p><ol><li>Inadequate <strong>HISTORY</strong> from family / treating doctor / scene</li><li>Lapses in <strong>EXTERNAL or INTERNAL examination</strong> (something missed)</li><li>Inadequate <strong>SAMPLE COLLECTION</strong> (wrong site / volume / preservative)</li><li>Inadequate <strong>LABORATORY support</strong> (FSL turnaround, equipment, expertise)</li></ol><p>★ "Negative" means the investigation failed — the cause exists but was not identified.</p>', tags: ['Procedural failure'] },
  'obs-def': { label: 'Obscure Autopsy ★', info: '<p><strong>Obscure autopsy</strong> = findings DO NOT lead to a definite cause of death. Minimal · indefinite · obscure findings that CONFUSE the examiner.</p><p><strong>Common causes:</strong></p><ul><li>Death from <strong>endocrine dysfunction</strong> (DKA, Addisonian crisis, thyroid storm)</li><li><strong>Vagal inhibition</strong> (sudden cardiac death from neck pressure / abdominal blow / cold immersion)</li><li><strong>Concealed trauma</strong> · reflex vagal inhibition</li><li><strong>Drug idiosyncrasy</strong> · anaphylaxis</li><li><strong>Biochemical disturbances</strong> — uraemic coma, hypoglycaemia, hypo/hyperkalaemia</li><li><strong>Channelopathies</strong> (Long QT, Brugada — molecular autopsy)</li><li><strong>Myocarditis</strong> (subtle gross findings)</li></ul><p>★ The disease did not leave a strong morphological footprint.</p>', tags: ['Indefinite findings'] },
  'neg-obs-compare': { label: 'Negative vs Obscure — Distinction', info: '<table><tr><th>Feature</th><th>Negative</th><th>Obscure</th></tr><tr><td>Investigation</td><td>FAILED (procedural lapse)</td><td>Complete but findings indefinite</td></tr><tr><td>Cause of death</td><td>Exists but not found</td><td>Subtle / morphologically silent</td></tr><tr><td>Frequency</td><td>3-5%</td><td>Less common</td></tr><tr><td>Solution</td><td>Better history, sampling, lab</td><td>Specialised tests (molecular, channelopathy)</td></tr><tr><td>Examples</td><td>Missed brain stem injury, lost viscera</td><td>Vagal inhibition, anaphylaxis, channelopathy</td></tr></table><p>Both demand further investigations — histopathology, biochemistry, drug levels, scene revisit, family history.</p>', tags: ['Procedural vs intrinsic'] },
  'obs-investigation': { label: 'Approach to Obscure/Negative Autopsy', info: '<ol><li><strong>Histopathology</strong> — multiple sections from heart, lungs, brain, liver, kidney, pancreas, adrenals</li><li><strong>Toxicology</strong> — viscera + blood + urine + bile + vitreous · drug + poison screen</li><li><strong>Biochemistry</strong> — vitreous K⁺ (time since death) / glucose · cortisol · troponin · electrolytes</li><li><strong>Microbiology</strong> — blood culture · CSF · lung swabs · stool</li><li><strong>DNA / Molecular autopsy</strong> — channelopathy genes (long QT, Brugada) in unexplained sudden cardiac death</li><li><strong>Re-visit scene</strong> · review medical records · family history (sudden cardiac death, hypoglycaemia)</li><li><strong>Special tests</strong> — coronary cast · electron microscopy · immunohistochemistry (myocarditis, IgE for anaphylaxis)</li><li>Tryptase for anaphylaxis · HbA1c for occult diabetes</li></ol><p>★ Even after all this, ~ 5% remain unexplained → declared "cause undetermined".</p>', tags: ['8-step workup'] },
  'vagal-inhibition': { label: 'Vagal Inhibition — Classic Obscure Cause', info: '<p><strong>Vagal inhibition</strong> = sudden parasympathetic discharge → cardiac inhibition → asystole within seconds.</p><p><strong>Mechanism:</strong> Reflex stimulation of vagus nerve via:</p><ul><li>Carotid sinus (neck pressure)</li><li>Glossopharyngeal nerve (pharyngeal stimulation)</li><li>Sympathetic / parasympathetic afferents from abdomen</li></ul><p><strong>Triggers:</strong></p><ul><li>Pressure on neck (carotid sinus massage, garroting)</li><li>Blow to abdomen / scrotum / hypogastrium</li><li>Sudden immersion in COLD WATER</li><li>Anal / vaginal stimulation</li><li>Endotracheal intubation</li><li>Pericardiocentesis</li></ul><p><strong>Autopsy:</strong> NEGATIVE or minimal — diagnosis is by EXCLUSION based on circumstances. Death occurs within seconds.</p>', tags: ['Sudden asystole'] },

  'art-def': { label: 'Postmortem Artefact — Definition', info: '<p><strong>Postmortem artefact</strong> = any change or new feature introduced into the body AFTER death that poses difficulty in interpreting autopsy findings.</p><p>Artefacts are <strong>physiologically unrelated</strong> to the natural state of the body, the disease process, or events the body was subjected to before death.</p><p><strong>Why important:</strong></p><ol><li>Wrong CAUSE of death attributed</li><li>Wrong MANNER of death</li><li>Undue suspicion of CRIMINAL interference</li><li>Halt in investigation · wasted time and effort</li><li>Miscarriage of JUSTICE</li></ol>', tags: ['5 consequences'] },
  'art-pm-exam': { label: 'Artefacts During PM Examination', info: '<ul><li><strong>Pinpoint hemorrhages</strong> in livor areas (burst capillaries) → mimic ANTEMORTEM PETECHIAE</li><li><strong>Conjunctival oedema</strong> from head in dependent position → mimic asphyxia</li><li><strong>Punctate hemorrhages</strong> beneath scalp during reflection (torn pericranium vessels) → mimic AM trauma</li><li><strong>Regional / occipital flattening of cerebral convolutions</strong> → mimic cerebral oedema</li><li><strong>PM hypostasis of internal organs</strong> (esp. posterior lung, intestine) → mimic CONTUSION</li><li><strong>Banding of oesophagus</strong> — pale areas in mucosa from PM hypostasis → mimic injury</li><li><strong>Cardiac rigor</strong> → mimics CONCENTRIC HYPERTROPHY</li><li><strong>Pyloric rigor</strong> → unduly firm + contracted stomach</li></ul>', tags: ['During autopsy'] },
  'art-decomp': { label: 'Decomposition Artefacts', info: '<ul><li><strong>PM bloating</strong> → mimics OBESITY</li><li><strong>Bloody decomposition fluid from mouth/nose</strong> → mimics antemortem bleeding from trauma</li><li><strong>Diffusion of hemolysed blood</strong> into tissues in livor areas → mimic CONTUSION</li><li><strong>Skin fissures / splits</strong> from decomposition → mimic LACERATIONS / INCISED wounds</li><li><strong>PM dilatation + flaccidity of vagina / anus</strong> → mimic sexual assault</li><li><strong>Tight cloth groove around neck</strong> (dupatta) → mimics LIGATURE MARK</li><li><strong>PM separation of child\'s skull sutures</strong> by putrefaction gas → mimic FRACTURE</li><li><strong>Internal hypostasis with hemolysis in meninges</strong> → resembles hemorrhage</li><li><strong>Bloody fluid in chest</strong> → mimic pleural effusion / hemothorax</li><li><strong>Gas bubbles in blood / right heart</strong> → mimic AIR EMBOLISM</li><li><strong>Bursting abdomen</strong> with protrusion of contents → mimic abdominal trauma</li><li><strong>Gastromalacia / oesophagomalacia</strong> (PM autolysis) → mimic ANTEMORTEM perforation</li><li><strong>Focal autolysis of pancreas</strong> → mimic pancreatitis</li><li><strong>PM accumulation of neck blood</strong> in drowning → mimic strangulation</li><li><strong>Regurgitation + aspiration</strong> of gastric content (agonal) → mimic choking</li><li><strong>Endogenous alcohol</strong> from bacterial action (up to 0.15%) → mimics intoxication</li></ul>', tags: ['Numerous mimics'] },
  'art-3rd-party': { label: 'Third-Party Artefacts', info: '<p><strong>A. Animals / birds / insects:</strong></p><ul><li><strong>Rodents</strong> — gnaw soft tissues (ear, nose, lips); shallow craters with irregular borders</li><li><strong>Dogs, cats, vultures</strong> — bite marks may mimic puncture wounds</li><li><strong>Insects</strong> (ants, roaches) — abrasion-like marks in moist body areas (groin, scrotum, anus, armpits)</li><li><strong>Aquatic animals</strong> — gnawing of submerged bodies</li><li><strong>Maggots / flies</strong> — alter wound appearance</li></ul><p><strong>B. Emergency medical / surgical:</strong></p><ul><li>External CPR → rib + sternum fractures</li><li>Defibrillator → chest contusion-like marks</li><li>Intracardiac injection → bruised heart, hemopericardium</li><li>Central venous line → neck muscle extravasation (mimic strangulation)</li><li>ETT / laryngoscope → oral / pharyngeal injury</li><li>Mouth-to-mouth → face / lips / gums injury (mimic smothering)</li><li>Positive pressure ventilation → surgical emphysema, pneumothorax</li></ul>', tags: ['Animals + CPR'] },
  'art-embalm': { label: 'Embalming + Deliberate Mutilation', info: '<p><strong>C. Embalming artefacts:</strong></p><ul><li>Embalmer may pass TROCAR through an existing wound or make a fresh wound for fluid injection</li><li>Embalming provides chemical STIFFENING (mimics rigor) → confounds time of death</li><li>★ <strong>Embalming DESTROYS:</strong> cyanide · alcohol · opiates · carbon monoxide → TOXICOLOGY USELESS</li></ul><p><strong>D. Deliberate mutilation:</strong></p><ul><li>Cadaver dismembered by criminals for disposal (size reduction)</li><li>Sometimes criminals inflict PM injuries to mislead investigation</li><li>Disposal in concealed sites (water bodies, forests, fire)</li></ul>', tags: ['Embalming destroys toxicology'] },
  'art-surgeon': { label: 'Autopsy Surgeon-Induced Artefacts', info: '<ul><li>Existing skull fracture may be EXTENDED during opening · or fresh fracture produced</li><li>Neck incision → blood pools in neck structures → mimics ANTEMORTEM HEMORRHAGE</li><li>★ Hyoid bone + thyroid cartilage may FRACTURE during forceful separation, especially in elderly — mimics antemortem strangulation injury</li><li>Liver pulled apart (not carefully dissected) → tears in diaphragm + denudation / laceration in bare area</li><li>Vessels lacerated during organ removal → false air embolism appearance</li></ul><p>★ Gentle, sequential dissection avoids these. The pathologist should document deliberate vs accidental incisions clearly.</p>', tags: ['Gentle technique'] },
  'art-environment': { label: 'Environmental Artefacts', info: '<ul><li><strong>BURNS</strong> — subcutaneous fat hardens + ruptures → mimics INCISED / LACERATED wounds (heat splits — see Ch 14)</li><li><strong>Heat hematoma</strong> in extradural space → mimics true EDH (CO in clot confirms heat artefact)</li><li><strong>REFRIGERATION</strong>:<ul><li>Pinkish PM lividity (mimics CO / cyanide / hypothermia)</li><li>In infants — solidifies subcutaneous fat → prominent crease at neck → mimics STRANGULATION mark</li></ul></li><li><strong>Undertaker\'s fracture</strong> — C6-C7 dislocation from rough handling of body → mimics antemortem cervical spine injury</li><li><strong>Broken rigor mortis</strong> by attendants during shifting → confounds TIME of death estimation</li><li><strong>Digging tool injuries</strong> in exhumation</li></ul>', tags: ['Heat + cold + handling'] },
  'art-significance': { label: 'Importance — 5 Consequences', info: '<p>Misinterpretation of postmortem artefacts leads to:</p><ol><li><strong>Wrong CAUSE of death</strong> (e.g., heat hematoma diagnosed as EDH → wrong fatal mechanism)</li><li><strong>Wrong MANNER of death</strong> (e.g., decomposition skin fissures diagnosed as lacerations → false homicide)</li><li><strong>Undue suspicion of CRIMINAL interference</strong> (e.g., rodent injuries diagnosed as antemortem assault)</li><li><strong>HALT in criminal investigation</strong> · unnecessary spending of time / effort on false leads</li><li><strong>MISCARRIAGE of justice</strong> — innocent person prosecuted, real perpetrator escapes</li></ol><p>★ Vigilance about artefacts is critical · every finding must pass the "AM vs PM" sieve.</p>', tags: ['5 consequences'] }
};

function nodeList(ids) { return ids.map(id => ({ nodeId: id, ...NODES[id] })); }

const MCQS = {
  'MA-01': [
    { stem: 'In the event of a death resulting from a road traffic accident, which authority is responsible for requesting an autopsy?', options: ['Forensic expert','Police','Lawyer','Forensic doctor'], answerIdx: 1, explain: 'In RTA / unnatural death, POLICE (≥ Sub-Inspector rank) requests the medicolegal autopsy via BNSS §174 inquest. NEET-PG 2024 Q2 verbatim.', tag: '[NEET-PG 2024]' },
    { stem: 'Which of the following is NOT a key difference between clinical and medicolegal autopsy?', options: ['Consent','Requisition','Patient identity','Extent — partial OK in clinical only'], answerIdx: 2, explain: 'Identity is recorded in both. Differences are: clinical needs CONSENT + no requisition + may be partial; medicolegal needs NO consent + REQUISITION mandatory + always complete.', tag: '[PG-Inspired]' },
    { stem: 'In medicolegal autopsy, the minimum rank of police officer who can issue requisition is:', options: ['Constable','Head constable','Sub-Inspector','Inspector'], answerIdx: 2, explain: 'BNSS §174 (was CrPC 174) — police officer of rank ≥ SUB-INSPECTOR can issue inquest + autopsy requisition.', tag: '[PG-Inspired]' },
    { stem: 'Medicolegal autopsy must be conducted in:', options: ['Artificial light','Daylight','Either','Any setting'], answerIdx: 1, explain: 'DAYLIGHT mandatory — artificial light masks jaundice, lividity colour changes, contusion age. Exception only in unavoidable emergencies.', tag: '[PG-Inspired]' },
    { stem: 'Term "pathology" refers to:', options: ['Work','Function','Details','Explains'], answerIdx: 0, explain: '"Pathology" — Greek pathos (suffering/disease) + logos (study/word). The "study of" disease. NEET-PG 2018 Q14 — answer was given as "Work" reflecting the Greek root logos. (Standard textbook: study/science of disease.)', tag: '[NEET-PG 2018]' }
  ],
  'MA-02': [
    { stem: 'Magistrate inquest is mandatory in:', options: ['All RTA deaths','Dowry death within 7 yrs of marriage','Hospital death after 24 h','Brought dead'], answerIdx: 1, explain: 'BNSS §196 (was CrPC §176) — magistrate inquest mandatory for (1) dowry death within 7 yrs of marriage, (2) custody death. Other deaths → BNSS §174 police inquest.', tag: '[PG-Inspired]' },
    { stem: 'Video recording of autopsy is MANDATORY in:', options: ['Dowry death','Custodial death','RTA','Suicide'], answerIdx: 1, explain: 'Custodial death (jail/police) requires video recording — sent by doctor himself to Chairman, NHRC, New Delhi. Plus magistrate inquest.', tag: '[PG-Inspired]' },
    { stem: 'The "dead body challan" sent with the body contains:', options: ['Name, age, sex, address only','Time of death + examination','Probable cause + time + examination details','None of these'], answerIdx: 2, explain: 'Dead body challan = requisition document with name, age, sex, address, probable date+time of death, date+time of examination. Plus inquest report.', tag: '[PG-Inspired]' }
  ],
  'MA-03': [
    { stem: 'The method of autopsy carried out en masse to remove from tongue to prostate is:', options: ['Virchow technique','Rokitansky technique','Ghon technique','Letulle technique'], answerIdx: 3, explain: 'LETULLE — all organs (cervical + thoracic + abdominal + pelvic) removed EN MASSE as one block, then dissected off the body. "Tongue to prostate" is the hallmark phrase. NEET-PG 2023 Q3 verbatim.', tag: '[NEET-PG 2023]' },
    { stem: 'A 42-year-old HIV-positive patient died and his body was brought for post-mortem. The method of autopsy to be done is:', options: ['Ghon technique','Letulle technique','Virchow technique','Rokitansky technique'], answerIdx: 1, explain: 'HIV+ body → LETULLE technique. Dissection happens OFF the body → minimal operator exposure. NEET-PG 2023 Q4+Q5 verbatim.', tag: '[NEET-PG 2023]' },
    { stem: 'In Virchow technique of autopsy, organs are:', options: ['Removed en masse','Removed one by one','Dissected in situ','Removed as functional blocs'], answerIdx: 1, explain: 'Virchow = organs removed ONE BY ONE. Most popular technique. Rokitansky = in situ. Ghon = functional blocs. Letulle = en masse.', tag: '[PG-Inspired]' },
    { stem: 'Ghon technique removes organs as:', options: ['One by one','En masse from tongue to prostate','EN-BLOC by functional groups (cervical/thoracic/abdominal/urogenital)','In situ'], answerIdx: 2, explain: 'Ghon = 4 functional blocs (cervical, thoracic, abdominal, urogenital). Named after Anton Ghon (TB Ghon\'s complex pioneer).', tag: '[PG-Inspired]' }
  ],
  'MA-04': [
    { stem: 'Standard format of injury documentation in autopsy report has how many points?', options: ['5','7','10','12'], answerIdx: 2, explain: '10-point format: type · site · dimensions · shape · margins · floor · surrounding · direction · weapon · age. Documented head-to-toe, numbered.', tag: '[PG-Inspired]' },
    { stem: 'A garlic-like odour from the body suggests:', options: ['Cyanide','Alcohol','Arsenic / Phosphorus / Thallium','Organophosphate'], answerIdx: 2, explain: 'Garlic odour → Arsenic, Phosphorus, Thallium. Bitter almonds → cyanide. Insecticide-like → OP. Acetone → DKA.', tag: '[PG-Inspired]' }
  ],
  'MA-05': [
    { stem: 'The COMMONEST incision used in routine medicolegal autopsy is:', options: ['I-shaped','Y-shaped','Modified Y-shaped','T-shaped'], answerIdx: 0, explain: 'I-shaped (chin to pubis) is the commonest — easy + fast. Y-shaped more cosmetic but tedious. Modified Y best for neck access.', tag: '[PG-Inspired]' },
    { stem: 'Spinal cord is opened during autopsy in suspected poisoning by:', options: ['Datura','Strychnine','OP','Arsenic'], answerIdx: 1, explain: 'STRYCHNINE = spinal poison → spinal cord must be examined. Other indications: spinal injury or disease. Routine autopsy does NOT open spine.', tag: '[PG-Inspired]' },
    { stem: 'In FOETAL autopsy, which cavity is opened first?', options: ['Cranial','Thoracic','Abdominal','Pelvic'], answerIdx: 2, explain: '★ In foetus, ABDOMEN opened FIRST to record diaphragm position (high diaphragm = dead born; low = live born with respiration).', tag: '[PG-Inspired]' },
    { stem: 'Y-shaped incision is preferred over I-shaped because:', options: ['Easier','More cosmetic + spares neck skin','Faster','Better for foetus'], answerIdx: 1, explain: 'Y-shaped is more cosmetic — incision hidden under clothing when body returned to family. Spares skin at neck. But more tedious.', tag: '[PG-Inspired]' }
  ],
  'MA-06': [
    { stem: 'Viscera in toxicology is stored in:', options: ['Glycerine','Rectified spirit','Formalin','Saturated salt solution'], answerIdx: 3, explain: 'Viscera for chemical analysis = SATURATED COMMON SALT (NaCl) SOLUTION. NEET-PG 2019 Q4 verbatim.', tag: '[NEET-PG 2019]' },
    { stem: 'For blood alcohol estimation, the preservative used is:', options: ['EDTA','Heparin','Sodium fluoride + Potassium oxalate','Formalin'], answerIdx: 2, explain: 'Sodium FLUORIDE (NaF) + Potassium oxalate. NaF prevents bacterial fermentation that would create false alcohol. K-oxalate is anticoagulant.', tag: '[PG-Inspired]' },
    { stem: 'Tissue for histopathological examination is preserved in:', options: ['Saturated salt','Sodium fluoride','10% formalin','Rectified spirit'], answerIdx: 2, explain: '10% buffered FORMALIN for histopathology — 10× tissue volume. NEVER use formalin for toxicology (destroys CO, alcohol, opiates, cyanide).', tag: '[PG-Inspired]' },
    { stem: 'What poison can be detected in skeleton even after emaciation?', options: ['Lead','Arsenic','Mercury','Cadmium'], answerIdx: 1, explain: 'ARSENIC stays in bone for years (Marsh test). Useful in exhumation cases. NEET-PG 2020 Q8 verbatim.', tag: '[NEET-PG 2020]' },
    { stem: 'Vitreous humour is collected via 18-G needle for:', options: ['DNA only','Alcohol + K⁺ for time since death + glucose for DKA','Toxicology only','Microbiology'], answerIdx: 1, explain: 'Vitreous is decomposition-resistant — useful for alcohol, K⁺ (time since death via Sturner-Henssge formula), glucose (DKA), electrolytes.', tag: '[PG-Inspired]' }
  ],
  'MA-07': [
    { stem: 'A 56-year-old man diagnosed with COVID-19 on mechanical ventilation died after a week. What is the likely post-mortem change in the lungs?', options: ['Thick layer of fibrin lining the alveoli','Acute and chronic alveolar hemorrhage','Perivascular cuffing','Pulmonary artery hypertrophy with increased resistance'], answerIdx: 0, explain: 'COVID-19 lung autopsy = DIFFUSE ALVEOLAR DAMAGE with thick FIBRIN/hyaline membrane lining alveoli + microthrombi in pulmonary vessels. NEET-PG 2022 Q9 verbatim.', tag: '[NEET-PG 2022]' },
    { stem: 'For HIV+ body autopsy, which technique is preferred?', options: ['Virchow','Rokitansky','Ghon','Letulle'], answerIdx: 3, explain: 'LETULLE — en-masse removal minimises operator exposure (dissection done OFF the body). Ideal for HIV, TB, hepatitis, COVID-19. NEET-PG 2023 Q4+Q5.', tag: '[NEET-PG 2023]' },
    { stem: 'In a decomposed body autopsy, gas bubbles in heart represent:', options: ['Air embolism','Postmortem artefact','Sepsis','Trauma'], answerIdx: 1, explain: 'Gas bubbles from decomposition gases are POSTMORTEM ARTEFACT — must be differentiated from true air embolism (which has clinical history of intervention).', tag: '[PG-Inspired]' }
  ],
  'MA-08': [
    { stem: 'In India, the time limit for carrying out exhumation is:', options: ['10 years','30 years','50 years','No time limit'], answerIdx: 3, explain: 'India has NO TIME LIMIT for exhumation. France = 10 yrs · Germany = 30 yrs · UK varies.', tag: '[PG-Inspired]' },
    { stem: 'Authorisation for exhumation in India comes from:', options: ['Police Sub-Inspector','Executive / Judicial Magistrate (written order)','Collector','Sessions Court'], answerIdx: 1, explain: 'Written order from EXECUTIVE or JUDICIAL MAGISTRATE is mandatory. Police alone cannot order exhumation.', tag: '[PG-Inspired]' },
    { stem: 'At exhumation, soil for chemical analysis is collected from:', options: ['Single site, 100 g','3 sites, 200 g each','★ 4 sites (above + lateral + below + control), 500 g each','Random sampling'], answerIdx: 2, explain: '4 sites — above body, lateral sides, below body, and a CONTROL site (distant) — 500 g each. For chemical analysis of soil (suspected poisoning).', tag: '[PG-Inspired]' }
  ],
  'MA-09': [
    { stem: 'Negative autopsy refers to:', options: ['No injuries on body','Failure to determine cause despite all investigations','Suicide ruled out','Body refused for examination'], answerIdx: 1, explain: 'Negative autopsy = autopsy fails to reveal cause of death even with gross + microscopic + toxicological + lab investigations. ~ 3-5% of cases.', tag: '[PG-Inspired]' },
    { stem: 'Causes of OBSCURE autopsy include all EXCEPT:', options: ['Vagal inhibition','Drug idiosyncrasy','Endocrine dysfunction','Penetrating chest injury'], answerIdx: 3, explain: 'Obscure causes = subtle / non-specific findings: vagal inhibition, drug idiosyncrasy, endocrine, biochemical disturbance. Penetrating chest wound is obvious + diagnostic, NOT obscure.', tag: '[PG-Inspired]' },
    { stem: 'Vagal inhibition is BEST diagnosed by:', options: ['Histopathology of heart','Toxicology','Exclusion based on circumstances','Cardiac enzymes'], answerIdx: 2, explain: 'Vagal inhibition is a DIAGNOSIS OF EXCLUSION — no specific autopsy findings. Death occurs within seconds of trigger (carotid pressure, abdominal blow, cold immersion).', tag: '[PG-Inspired]' }
  ],
  'MA-10': [
    { stem: 'Embalming destroys all the following toxicologically EXCEPT:', options: ['Cyanide','Alcohol','Opiates','Heavy metals'], answerIdx: 3, explain: 'Embalming destroys CO, cyanide, alcohol, opiates (volatile / fluid-soluble). Heavy metals (As, Pb, Hg) PERSIST in tissues (deposit in bone, hair, nails).', tag: '[PG-Inspired]' },
    { stem: 'Skin fissures in a decomposed body should be interpreted as:', options: ['Antemortem incised wound','Antemortem laceration','Postmortem decomposition artefact','Defence wound'], answerIdx: 2, explain: 'Skin fissures from decomposition gas pressure → mimic lacerated/incised wounds but are POSTMORTEM ARTEFACT. No vital reaction. No bleeding.', tag: '[PG-Inspired]' },
    { stem: '"Undertaker\'s fracture" refers to:', options: ['Skull fracture from carrying','C6-C7 dislocation from rough handling of body','Long bone from coffin loading','Mandible fracture from embalming'], answerIdx: 1, explain: 'Undertaker\'s fracture = C6-C7 dislocation from rough handling of body during transport → mimics antemortem cervical injury (e.g., hanging injury).', tag: '[PG-Inspired]' },
    { stem: 'Pinkish PM lividity in a refrigerated body is:', options: ['Cause of death','Postmortem artefact mimicking CO','Sign of hypothermia','Pathological'], answerIdx: 1, explain: 'Refrigeration causes pinkish PM lividity → mimics CO poisoning / cyanide / hypothermia. Must correlate with history. PM artefact.', tag: '[PG-Inspired]' },
    { stem: 'CPR (cardiopulmonary resuscitation) can produce which artefact?', options: ['Skull fracture','Rib + sternum fractures + bruised heart','Spinal fracture','Hyoid fracture'], answerIdx: 1, explain: 'CPR → rib + sternum fractures (anterior, multiple, bilateral) + intracardiac injection → bruised heart + hemopericardium. Defibrillator → chest contusion-like marks.', tag: '[PG-Inspired]' }
  ]
};

const DIFF_TABLES = [
  {
    id: 'DT-1', title: 'Virchow vs Rokitansky vs Ghon vs Letulle Techniques ★', shortTitle: '4 Autopsy Techniques',
    intro: 'The four classical autopsy techniques — choice depends on case, suspected disease, and biohazard risk. Letulle is preferred for HIV+/TB/COVID-19 cases.',
    columns: ['Feature','Virchow','Rokitansky','Ghon','Letulle'],
    rows: [
      ['Principle','Organs ONE BY ONE','Partial IN-SITU dissection','EN-BLOC functional groups','EN-MASSE (tongue to prostate)'],
      ['Method','Removed one by one, each examined as taken out','Dissected inside body, then removed in blocks','4 blocs: cervical · thoracic · abdominal · urogenital','All viscera removed as single mass; dissected off body'],
      ['Inter-organ relationships','Lost','Preserved','Preserved within bloc','★ Best preserved'],
      ['Time','Quick','Moderate','Moderate','Slow'],
      ['Operator exposure','High (multiple cuts on body)','Moderate','Moderate','★ MINIMAL (off-body)'],
      ['Best use','Routine autopsy · most popular','Vascular evaluation','Systemic/organ-specific pathology','★ HIV+ / TB / COVID-19 / hepatitis · biohazard cases'],
      ['Originator','Rudolf Virchow (Germany)','Karl Rokitansky (Austria)','Anton Ghon (Austria, TB)','Maurice Letulle (France)'],
      ['Popularity','★ Most popular','Common','Common','Considered BEST technique']
    ],
    parentDiagrams: ['MA-03'],
    mcqs: [
      { stem: '"Removed en masse from tongue to prostate" describes which technique?', options: ['Virchow','Rokitansky','Ghon','Letulle'], answerIdx: 3, explain: 'LETULLE — en masse, tongue to prostate. NEET-PG 2023 Q3 verbatim.', tag: '[NEET-PG 2023]' },
      { stem: 'For HIV+ body, the technique of choice is:', options: ['Virchow','Rokitansky','Ghon','Letulle'], answerIdx: 3, explain: 'LETULLE — minimal operator exposure as dissection is done off the body. NEET-PG 2023 Q4+Q5.', tag: '[NEET-PG 2023]' }
    ]
  },
  {
    id: 'DT-2', title: 'Clinical vs Medicolegal Autopsy', shortTitle: 'Clinical vs Medicolegal',
    columns: ['Feature','Clinical (Pathological)','Medicolegal (Forensic)'],
    rows: [
      ['Synonyms','Pathological / academic autopsy','Forensic autopsy / postmortem examination'],
      ['<strong>Consent</strong>','★ REQUIRED from relatives','★ NOT required'],
      ['<strong>Requisition</strong>','Not needed','★ MANDATORY (Police ≥ SI or Magistrate)'],
      ['Conducted under','Hospital authority','State legal authority'],
      ['Done by','Pathologist / treating doctor','Registered Medical Practitioner (RMP)'],
      ['<strong>Extent</strong>','Partial OK (limited by consent)','★ ALWAYS COMPLETE'],
      ['Purpose','Confirm diagnosis · academic learning','Cause + manner + time + identity + evidence'],
      ['Setting','Hospital / academic institution','Government mortuary'],
      ['Lighting','Any','★ Daylight mandatory'],
      ['Report','Hospital records','Police / court / FSL'],
      ['Sample preservation','Optional','Mandatory (saturated salt for viscera, etc.)']
    ],
    parentDiagrams: ['MA-01'],
    mcqs: [
      { stem: 'Consent is NOT required for which autopsy?', options: ['Clinical','Medicolegal','Both','Neither'], answerIdx: 1, explain: 'Medicolegal autopsy = state authority overrides family consent. Clinical autopsy mandatorily needs relative consent.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-3', title: 'I-shaped vs Y-shaped vs Modified Y Incisions', shortTitle: 'Autopsy Incisions',
    columns: ['Feature','I-shaped','Y-shaped','Modified Y'],
    rows: [
      ['Path','Chin (symphysis mentis) → pubis','Acromion → below breast → xiphoid (both sides) + xiphoid → pubis','Suprasternal notch → pubis + notch → mid-clavicle → behind ear (both sides)'],
      ['Frequency','★ Commonest','Less common','Specialised'],
      ['Cosmetic','Poor','★ Best (hidden under clothes)','Moderate'],
      ['Neck access','Poor','Good','★ Best'],
      ['Axillary access','Poor','★ Best','Poor'],
      ['Time','Fastest','Slow','Slow'],
      ['Difficulty','Easy','Tedious','Tedious'],
      ['Default use','Routine','Body to be returned to family','Suspected neck pathology']
    ],
    parentDiagrams: ['MA-05'],
    mcqs: [
      { stem: 'For best neck region exposure in autopsy, use:', options: ['I-shaped','Y-shaped','Modified Y','Z-shaped'], answerIdx: 2, explain: 'Modified Y (with extensions to behind ears) gives best neck access. I-shaped poor, Y-shaped moderate.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-4', title: 'Negative vs Obscure Autopsy', shortTitle: 'Negative vs Obscure',
    columns: ['Feature','Negative Autopsy','Obscure Autopsy'],
    rows: [
      ['Definition','Cannot find cause despite full investigation','Findings indefinite/minimal · confusing'],
      ['Investigation status','Procedurally INCOMPLETE / lapse','Procedurally COMPLETE but morphologically silent'],
      ['Cause of death','Exists but missed','Subtle disease without obvious lesion'],
      ['Frequency','~ 3-5%','Less common'],
      ['Common causes','Inadequate history · missed findings · sample / lab failure','Vagal inhibition · anaphylaxis · channelopathy · endocrine · drug idiosyncrasy · biochemical'],
      ['Solution','Better history · better sampling · re-examination · expert lab','Specialised tests: tryptase (anaphylaxis) · molecular autopsy (channelopathy) · biochemistry (vitreous)'],
      ['Diagnosis','Procedural failure','Diagnosis of exclusion']
    ],
    parentDiagrams: ['MA-09'],
    mcqs: [
      { stem: 'Vagal inhibition causing sudden death is classified under:', options: ['Negative autopsy','Obscure autopsy','Iatrogenic death','Natural death'], answerIdx: 1, explain: 'Vagal inhibition = no specific autopsy finding → diagnosed by EXCLUSION based on circumstances. Classic obscure autopsy cause.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-5', title: 'Sample Preservatives by Purpose ★', shortTitle: 'Preservatives by Purpose',
    intro: 'Wrong preservative = destroyed evidence. Critical knowledge for autopsy practice.',
    columns: ['Sample','Purpose','Preservative'],
    rows: [
      ['<strong>Viscera</strong>','Toxicology / chemical analysis','★ SATURATED SALT solution (NaCl) ★ NEET-PG 2019 Q4'],
      ['Tissue (1-2 cm)','Histopathology','10% buffered FORMALIN (10× volume)'],
      ['Blood','Alcohol estimation','★ Sodium FLUORIDE (NaF) + Potassium oxalate'],
      ['Blood','DNA / serology','EDTA (purple top)'],
      ['Blood','Carboxyhaemoglobin (CO)','Airtight bottle, NO air space'],
      ['Blood','Cyanide','Airtight container, analyse FRESH'],
      ['Urine','Drug screen','Saturated salt OR refrigerated'],
      ['Vitreous humour','K⁺ for time since death, alcohol, glucose','Refrigerated, no preservative needed'],
      ['Bile','Opiates, paracetamol','Refrigerated'],
      ['Hair / nails / bone','Heavy metals (As, Pb, Hg)','Dry container, salt for soft tissue'],
      ['Stomach contents','Poison identification','Saturated salt'],
      ['Spinal cord','Strychnine','Saturated salt']
    ],
    parentDiagrams: ['MA-06'],
    mcqs: [
      { stem: 'Viscera in toxicology is stored in:', options: ['Glycerine','Rectified spirit','Formalin','Saturated salt solution'], answerIdx: 3, explain: 'Saturated salt solution (NaCl) for viscera in toxicology. NEET-PG 2019 Q4 verbatim. NEVER use formalin (destroys CO, alcohol, opiates, cyanide).', tag: '[NEET-PG 2019]' }
    ]
  },
  {
    id: 'DT-6', title: 'Antemortem Injury vs Postmortem Artefact', shortTitle: 'AM Injury vs PM Artefact',
    intro: 'Distinguishing PM artefacts from real antemortem injuries is critical to avoid miscarriage of justice.',
    columns: ['Feature','Antemortem Injury','Postmortem Artefact'],
    rows: [
      ['Vital reaction','PRESENT (inflammation, vasodilation, leucocyte infiltrate)','ABSENT'],
      ['Margins','Clean, defined','Irregular, decomposition-altered'],
      ['Bleeding','★ Active hemorrhage, clot formation','No bleeding (no circulation)'],
      ['Tissue bridges','Variable by type','Often absent or distorted'],
      ['Histology','PMN infiltrate, fibrin','No infiltrate, autolysis'],
      ['Enzyme activity','Cathepsin (immediate) → Alk phos (4 h)','Absent'],
      ['Pattern fit','Matches alleged weapon/mechanism','Does not match — fits decomposition / rodent / CPR / surgeon'],
      ['Common mimics','—','Skin fissures (lacerations) · CPR fractures (assault) · neck groove (ligature) · gas bubbles (embolism) · pinkish lividity (CO/cyanide)']
    ],
    parentDiagrams: ['MA-10'],
    mcqs: [
      { stem: 'Postmortem wound best differs from antemortem wound by:', options: ['Gaps on incising','No clots','Absence of erythema and cellular changes','All of the above'], answerIdx: 2, explain: 'Absence of ERYTHEMA + CELLULAR CHANGES (vital reaction) = best discriminator. PM wound has no inflammation, no clot, no PMN. NEET-PG 2016 Q27 verbatim.', tag: '[NEET-PG 2016]' }
    ]
  }
];

const SUBJ = [
  {
    id: 'SAQ-6.1', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Define obscure autopsy. Enumerate its causes and describe the approach.',
    answer: `<h4>Definition</h4>
<p><strong>Obscure autopsy</strong> = autopsy in which the findings DO NOT lead to a definite cause of death. There may be minimal, indefinite, or obscure findings that cause CONFUSION to the medical examiner.</p>
<p>The morphological footprint of the disease is subtle or absent — but the disease did exist.</p>
<h4>Distinction from Negative Autopsy</h4>
<p><strong>Negative</strong> = investigation procedurally failed (lapses in history, examination, sampling, lab support).<br>
<strong>Obscure</strong> = investigation was complete but findings themselves are non-specific.</p>
<h4>Causes of Obscure Autopsy</h4>
<ol>
<li><strong>Vagal inhibition</strong> — sudden parasympathetic discharge → cardiac asystole. Triggered by:
<ul><li>Pressure on neck (carotid sinus, garroting)</li>
<li>Blow to abdomen / scrotum / hypogastrium</li>
<li>Sudden cold water immersion</li>
<li>Anal / vaginal stimulation</li></ul>
Death within seconds; autopsy negative or minimal.</li>
<li><strong>Endocrine dysfunction</strong> — diabetic ketoacidosis, Addisonian crisis, thyroid storm, hypoglycaemia</li>
<li><strong>Concealed trauma</strong> — small but fatal injuries hidden by clothing, hair, or natural orifices</li>
<li><strong>Reflex vagal inhibition</strong> — from minor stimuli (intubation, pericardiocentesis)</li>
<li><strong>Drug idiosyncrasy</strong> — anaphylaxis, malignant hyperthermia, neuroleptic malignant syndrome</li>
<li><strong>Biochemical disturbances</strong>:
<ul><li>Uraemic coma</li>
<li>Hypoglycaemia (insulin overdose)</li>
<li>Hypo/hyperkalaemia</li>
<li>Hyponatraemia (water intoxication)</li></ul></li>
<li><strong>Channelopathies</strong> — Long QT, Brugada syndrome, CPVT (require MOLECULAR autopsy)</li>
<li><strong>Subtle myocarditis</strong> — viral, lymphocytic infiltrate may be missed</li>
<li><strong>Coronary spasm</strong> — no morphological lesion</li>
</ol>
<h4>Approach to Obscure / Negative Autopsy</h4>
<ol>
<li><strong>Re-examine</strong> the body carefully; revisit scene if possible</li>
<li><strong>Review</strong> medical records · family history (sudden cardiac death, hypoglycaemia, allergy)</li>
<li><strong>Histopathology</strong> — multiple sections from heart, lungs, brain, liver, kidney, pancreas, adrenals</li>
<li><strong>Toxicology</strong> — viscera + blood + urine + bile + vitreous; drug + poison screen</li>
<li><strong>Biochemistry</strong>:
<ul><li>Vitreous K⁺ (time since death by Sturner-Henssge)</li>
<li>Vitreous glucose (DKA detection)</li>
<li>Cortisol (Addison)</li>
<li>Troponin (subtle MI)</li>
<li>Tryptase (anaphylaxis — within 6 h of death)</li>
<li>HbA1c (occult diabetes)</li></ul></li>
<li><strong>Microbiology</strong> — blood culture, CSF, lung swabs (fulminant sepsis)</li>
<li><strong>Molecular autopsy / DNA</strong> — channelopathy genes (long QT — KCNQ1, KCNH2; Brugada — SCN5A)</li>
<li><strong>Special tests</strong> — coronary cast, electron microscopy, immunohistochemistry, IgE for anaphylaxis</li>
</ol>
<p>★ Even after thorough investigation, ~ 5% remain unexplained → "cause undetermined" in death certificate.</p>`,
    sources: ['MA-09 Obscure + Negative Autopsy'],
    jumpToDiagram: 'MA-09'
  },
  {
    id: 'SAQ-6.2', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Write a note on postmortem artefacts. Classify and give examples.',
    answer: `<h4>Definition</h4>
<p><strong>Postmortem artefact</strong> = any change or new feature introduced into the body AFTER death that poses difficulty in interpreting autopsy findings. Artefacts are physiologically unrelated to the natural state of body, disease process, or events the body was subjected to before death.</p>
<h4>Importance — 5 Consequences of Misinterpretation</h4>
<ol>
<li>Wrong CAUSE of death</li>
<li>Wrong MANNER of death</li>
<li>Undue suspicion of CRIMINAL interference</li>
<li>Halt in investigation · wasted time and effort</li>
<li>Miscarriage of JUSTICE</li>
</ol>
<h4>Classification — 5 Categories</h4>
<h5>1. Encountered During PM Examination</h5>
<ul><li>Pinpoint hemorrhages in livor areas → mimic ANTEMORTEM PETECHIAE</li>
<li>Conjunctival oedema from head-dependent position → mimic asphyxia</li>
<li>Punctate hemorrhages beneath scalp on reflection → mimic AM trauma</li>
<li>PM hypostasis of internal organs → mimic CONTUSION</li>
<li>Banding of oesophagus from hypostasis → mimic injury</li>
<li>Cardiac rigor → mimics CONCENTRIC HYPERTROPHY</li></ul>
<h5>2. Decomposition Artefacts</h5>
<ul><li>PM bloating → mimics OBESITY</li>
<li>Bloody fluid from mouth/nose → NOT antemortem bleeding</li>
<li>Hemolysed blood diffusion in livor → mimic CONTUSION</li>
<li>Skin fissures → mimic LACERATIONS / INCISED wounds</li>
<li>PM dilatation of vagina/anus → mimic sexual assault</li>
<li>Tight cloth groove around neck → mimic LIGATURE</li>
<li>Skull suture separation by gas → mimic FRACTURE</li>
<li>Gas bubbles in heart → mimic AIR EMBOLISM</li>
<li>Gastromalacia → mimic perforation</li>
<li>Endogenous alcohol (up to 0.15%) → mimics intoxication</li></ul>
<h5>3. Third-Party Artefacts</h5>
<p><strong>A. Animals/birds/insects:</strong></p>
<ul><li>Rodents — gnaw soft parts (ear, nose, lips) · shallow craters with irregular borders</li>
<li>Dogs/cats/vultures — bite marks mimic puncture wounds</li>
<li>Insects (ants) — abrasion-like marks in moist body areas</li>
<li>Aquatic animals — gnawing of submerged bodies</li></ul>
<p><strong>B. Resuscitation/treatment:</strong></p>
<ul><li>CPR → rib + sternum fractures</li>
<li>Defibrillator → chest contusion-like marks</li>
<li>Intracardiac injection → bruised heart, hemopericardium</li>
<li>Central line → neck extravasation (mimic strangulation)</li>
<li>ETT/laryngoscope → oral injury</li></ul>
<p><strong>C. Embalming:</strong></p>
<ul><li>Trocar passes through wounds</li>
<li>Chemical stiffening mimics rigor — confounds time of death</li>
<li>★ DESTROYS: cyanide, alcohol, opiates, CO → toxicology useless</li></ul>
<p><strong>D. Deliberate mutilation</strong> — by criminals for disposal or to mislead</p>
<h5>4. Autopsy Surgeon-Induced</h5>
<ul><li>Existing skull fracture extended during opening</li>
<li>Neck incision → blood pooling mimics hemorrhage</li>
<li>Forced separation → hyoid/thyroid fracture (mimics strangulation)</li>
<li>Liver pulled apart → diaphragm tears</li></ul>
<h5>5. Environmental</h5>
<ul><li>BURNS — subQ fat ruptures mimic incised/lacerated wounds (heat splits)</li>
<li>Heat hematomas mimic extradural hematoma (Ch 14)</li>
<li>REFRIGERATION → pinkish PM lividity (mimics CO/cyanide); subQ fat crease in infants mimics strangulation</li>
<li>Undertaker\'s fracture — C6-C7 dislocation from rough handling</li>
<li>Broken rigor by attendants → wrong time of death</li>
<li>Digging tool injuries in exhumation</li></ul>
<h4>Approach</h4>
<p>★ Every autopsy finding must pass the AM vs PM sieve. Suspicious findings should be:</p>
<ul><li>Correlated with history and scene</li>
<li>Confirmed by histology (vital reaction)</li>
<li>Correlated with body state (decomposition extent)</li>
<li>Reported clearly distinguishing antemortem from postmortem changes</li></ul>`,
    sources: ['MA-10 Postmortem Artefacts'],
    jumpToDiagram: 'MA-10'
  },
  {
    id: 'LAQ-6.1', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank-Inspired',
    question: 'Define autopsy. Describe types of autopsy. Enumerate the objectives of medicolegal autopsy. Describe the four classical autopsy techniques with their advantages.',
    answer: `<h4>Definition</h4>
<p><strong>Autopsy</strong> = "to see for oneself" (Greek: <em>autos</em> = self, <em>opis</em> = view).</p>
<p><strong>Synonyms:</strong> Necropsy · Postmortem examination · Forensic autopsy.</p>
<p>It is a scientific examination of a dead body to determine the cause, manner, time of death and to collect evidence.</p>
<h4>Types of Autopsy</h4>
<h5>1. Clinical (Pathological / Academic) Autopsy</h5>
<ul><li>Done by pathologist / treating doctor</li>
<li>Purpose: confirm diagnosis · academic learning · medical audit</li>
<li>★ CONSENT of relatives REQUIRED</li>
<li>No police requisition needed</li>
<li>May be partial (limited by consent)</li>
<li>Conducted in hospital / academic institution</li></ul>
<h5>2. Medicolegal (Forensic) Autopsy</h5>
<ul><li>Done by Registered Medical Practitioner</li>
<li>Carried out under State law on requisition of legal authority</li>
<li>★ NO consent needed (state authority overrides family)</li>
<li>★ REQUISITION mandatory from police (≥ Sub-Inspector) or Executive Magistrate</li>
<li>★ Always COMPLETE — partial autopsy NOT allowed</li>
<li>Conducted in government mortuary in DAYLIGHT</li></ul>
<h4>Objectives of Medicolegal Autopsy (8)</h4>
<ol>
<li>To determine the CAUSE of death (immediate, antecedent, underlying)</li>
<li>To determine the MANNER of death (natural / accident / suicide / homicide / undetermined)</li>
<li>To estimate TIME since death</li>
<li>To establish IDENTITY when not known</li>
<li>To collect EVIDENCES identifying the object causing death and the criminal</li>
<li>To document INJURIES and deduce how they occurred</li>
<li>To retain relevant organs / viscera / tissues as evidence</li>
<li>In newborn infants — to determine live birth and viability (infanticide cases)</li>
</ol>
<h4>Four Classical Autopsy Techniques</h4>
<h5>1. Virchow Technique (Germany — Rudolf Virchow)</h5>
<ul><li><strong>Principle:</strong> Organs removed ONE BY ONE</li>
<li><strong>Sequence:</strong> Brain → thoracic organs → abdominal organs</li>
<li><strong>Advantages:</strong> Most popular, widely practiced, quick, easy to teach</li>
<li><strong>Disadvantages:</strong> Inter-organ relationships lost, vascular continuity broken</li></ul>
<h5>2. Rokitansky Technique (Austria — Karl Rokitansky)</h5>
<ul><li><strong>Principle:</strong> Partial IN-SITU dissection within body cavity, followed by en-bloc removal</li>
<li><strong>Advantages:</strong> Minimal organ disturbance, preserves vascular relationships, less risk of accidental injury</li>
<li><strong>Disadvantages:</strong> Limited visual access during in-situ dissection</li></ul>
<h5>3. Ghon Technique (Austria — Anton Ghon, TB pioneer)</h5>
<ul><li><strong>Principle:</strong> Organs removed as EN-BLOC FUNCTIONAL GROUPS:
<ul><li>Cervical bloc: tongue, pharynx, larynx, oesophagus, trachea, thyroid</li>
<li>Thoracic bloc: heart, lungs, great vessels</li>
<li>Abdominal bloc: stomach, intestine, liver, spleen, pancreas</li>
<li>Urogenital bloc: kidneys, ureters, bladder, prostate/uterus</li></ul></li>
<li><strong>Advantages:</strong> Preserves relationships WITHIN each system, good for teaching</li>
<li><strong>Disadvantages:</strong> Inter-bloc relationships lost</li></ul>
<h5>4. ★ Letulle Technique (France — Maurice Letulle) — BEST</h5>
<ul><li><strong>Principle:</strong> ALL organs removed as ONE MASS — en masse FROM TONGUE TO PROSTATE</li>
<li><strong>Method:</strong> Cervical + thoracic + abdominal + pelvic viscera removed together, then dissected OFF the body</li>
<li><strong>★ Advantages:</strong>
<ul><li>BEST preservation of all organ relationships</li>
<li>★ MINIMAL operator exposure — ideal for HIV+, TB, hepatitis, COVID-19 cases (NEET-PG 2023 Q4+Q5)</li>
<li>Excellent for systemic pathology demonstration</li>
<li>Considered the BEST technique overall</li></ul></li>
<li><strong>Disadvantages:</strong> Most time-consuming, heavy mass to handle</li></ul>
<h4>Choice of Technique</h4>
<ul><li>Routine case → Virchow</li>
<li>Vascular pathology → Rokitansky</li>
<li>Systemic disease (e.g., TB) → Ghon</li>
<li>★ HIV+ / TB / COVID-19 / infectious / dangerous → LETULLE</li>
<li>Foetal autopsy &gt; 22 weeks → Letulle</li></ul>
<p>★ <strong>PYQ pearls:</strong></p>
<ul><li>NEET-PG 2023 Q3: "tongue to prostate en masse" = LETULLE</li>
<li>NEET-PG 2023 Q4+Q5: HIV+ patient autopsy = LETULLE</li></ul>`,
    sources: ['MA-01 · MA-03'],
    jumpToDiagram: 'MA-03'
  },
  {
    id: 'SAQ-6.3', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'A 42-year-old HIV-positive patient died and the body is brought for medicolegal autopsy. Discuss the technique of choice, biosafety precautions, and special considerations.',
    answer: `<h4>Diagnosis &amp; Technique</h4>
<p>★ <strong>Technique of choice: LETULLE (en-masse) technique.</strong> NEET-PG 2023 Q4+Q5 verbatim.</p>
<p><strong>Why Letulle?</strong> All viscera are removed together as one mass, and dissection happens OFF the body on a separate dissection table. This minimises operator exposure to the body and infectious tissues during the prolonged dissection process.</p>
<h4>Universal Precautions / PPE</h4>
<ol>
<li><strong>Double gloves</strong> — cut-resistant under nitrile / latex</li>
<li><strong>Impermeable gown</strong> covering entire body</li>
<li><strong>Mask</strong> — N95 / FFP3 (for COVID-19, TB co-infection)</li>
<li><strong>Face shield / goggles</strong> — protect eyes from splashes</li>
<li><strong>Rubber boots</strong> (washable)</li>
<li>Limit number of personnel in the autopsy room</li>
<li>Avoid sharp injuries — use blunt-tipped scissors when possible</li>
<li>NO mouth pipetting · NO recapping needles</li>
<li>Sharps disposal in puncture-proof containers immediately</li>
</ol>
<h4>Pre-Autopsy Preparation</h4>
<ul><li>★ Hepatitis B vaccination of all autopsy staff (mandatory)</li>
<li>HIV testing of staff post-exposure</li>
<li>Post-exposure prophylaxis (PEP) protocol must be available — tenofovir + emtricitabine + dolutegravir within 72 h</li>
<li>Briefing of all staff on biohazard procedures</li>
<li>Mark the body / mortuary slot as "biohazard"</li>
<li>Use negative-pressure morgue / well-ventilated room</li></ul>
<h4>Special Considerations</h4>
<ul><li><strong>Cause of death:</strong> Look for opportunistic infections — PCP, TB, CMV, cryptococcal meningitis, lymphoma, KS</li>
<li><strong>Co-morbidities:</strong> Hepatitis B/C co-infection common</li>
<li><strong>Tissue handling:</strong> Avoid bone saw if possible (aerosol generation) — use hand saw or shears</li>
<li><strong>Sample collection:</strong>
<ul><li>HIV viral load if treatment status unclear</li>
<li>CD4 count from spleen if possible</li>
<li>Standard toxicology</li>
<li>Microbiology for opportunistic infections</li></ul></li>
<li><strong>Histopathology:</strong> All organs need formalin fixation; inform pathologist of HIV status</li>
<li><strong>Post-autopsy:</strong>
<ul><li>Disinfect instruments with 10% bleach or autoclave</li>
<li>Surfaces wiped with 0.5% sodium hypochlorite</li>
<li>Body bagged in double bags · labelled biohazard</li>
<li>Cremation often preferred over burial</li></ul></li></ul>
<h4>Documentation</h4>
<ul><li>HIV status mentioned in report (only to authorised persons — confidentiality)</li>
<li>Cause of death may need to be coded sensitively if family does not know HIV status (privacy concerns)</li>
<li>Detailed report of opportunistic infections found</li></ul>
<h4>★ Key PYQ Points</h4>
<ul><li>NEET-PG 2023 Q4+Q5 — HIV+ body autopsy → LETULLE technique</li>
<li>Same principle applies to TB, viral haemorrhagic fevers, COVID-19, suspected prion disease</li></ul>`,
    sources: ['MA-03 · MA-07'],
    jumpToDiagram: 'MA-07'
  },
  {
    id: 'SAQ-6.4', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'Describe exhumation — definition, purposes, authorisation, procedure, and samples to be collected.',
    answer: `<h4>Definition</h4>
<p><strong>Exhumation</strong> = lawful disinterment — the digging out of a previously buried body for postmortem examination.</p>
<p>Etymology: Latin <em>ex</em> (out of) + <em>humus</em> (ground).</p>
<p>The term is restricted to retrieval of a body interred in a legitimate fashion in the graveyard.</p>
<h4>Purposes (5)</h4>
<ol>
<li><strong>Identification</strong> of the body (later identification needed)</li>
<li><strong>Second autopsy</strong> when first report is doubtful / ambiguous</li>
<li><strong>Civil cases</strong> — insurance claims · negligence allegations · inheritance disputes</li>
<li><strong>Disputed cause of death</strong> — new evidence emerges after burial</li>
<li><strong>Suspected foul play</strong> — revealed after burial (e.g., poisoning suspected, witness comes forward)</li>
</ol>
<h4>Authorisation</h4>
<p>★ <strong>WRITTEN ORDER from EXECUTIVE MAGISTRATE or JUDICIAL MAGISTRATE</strong> is mandatory.</p>
<p>Police alone CANNOT order exhumation. The magistrate ensures legal scrutiny + family / cultural sensitivity.</p>
<h4>Time Limit</h4>
<p>★ <strong>India — NO time limit</strong>. Exhumation can be done at any time after burial.</p>
<p><strong>Other countries:</strong> France 10 yrs · Germany 30 yrs · UK varies by Coroner.</p>
<p>Arsenic and lead can be detected in bone even DECADES after burial — making exhumation valuable even years later.</p>
<h4>Procedure (Step-by-Step)</h4>
<ol>
<li>Identify grave PROPERLY — cross-check with cemetery records · relatives confirm</li>
<li>Dig out under <strong>MAGISTRATE\'S SUPERVISION</strong> + medical examiner + police present</li>
<li>Identify the coffin / shroud · photograph at each stage</li>
<li>Body lifted out carefully · ★ identified by relatives</li>
<li>Examine condition of clothes · note state of body (skeletal, decomposed, adipocere, mummified)</li>
<li>★ Collect 500 g of SOIL from 4 sites:
<ul><li>From ABOVE the body</li>
<li>From LATERAL sides</li>
<li>From BELOW the body</li>
<li>From a CONTROL site (distant) — establishes baseline</li></ul>
For chemical analysis in suspected poisoning</li>
<li>Collect hairs from head and pubic region</li>
<li>Body shifted to mortuary for autopsy</li>
<li>Routine autopsy procedure followed</li>
<li>Available viscera preserved in saturated salt solution</li>
<li>Teeth, nails, bone preserved separately for heavy metals</li>
</ol>
<h4>Samples to Preserve</h4>
<ul><li><strong>Soil</strong> — 500 g × 4 sites (above + lateral + below + control)</li>
<li><strong>Hairs</strong> — head + pubic region (heavy metals deposit in hair)</li>
<li><strong>Available viscera</strong> in saturated salt solution</li>
<li><strong>Teeth, nails, bone</strong> samples (arsenic detected in bone after years — Marsh test)</li>
<li><strong>Clothes, coffin material, ornaments</strong> — preserved separately</li>
<li><strong>Embalming fluid sample</strong> if body was embalmed</li>
<li><strong>Insect / larval samples</strong> — entomology</li>
<li><strong>Photographs</strong> at every stage of procedure</li></ul>
<h4>Pitfalls in Exhumation</h4>
<ul><li>Digging tools may cause artefactual injuries / fractures — must distinguish from antemortem</li>
<li>Decomposition obliterates many findings (soft tissue, vital reaction, lividity)</li>
<li>Adipocere may preserve tissues for years (both helpful and confounding)</li>
<li>Embalming artefacts confound toxicology (CO, alcohol, opiates destroyed; trocar wounds)</li>
<li>Soil / water contaminants may give false-positive toxicology if control not taken</li>
<li>Religious / cultural concerns of family for re-burial</li></ul>`,
    sources: ['MA-08 Exhumation'],
    jumpToDiagram: 'MA-08'
  },
  {
    id: 'SAQ-6.5', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'Describe preservation of viscera and other body samples for chemical analysis (toxicology) in medicolegal autopsy.',
    answer: `<h4>Standard Viscera Set (5 bottles)</h4>
<table><tr><th>Bottle</th><th>Contents</th><th>Preservative</th></tr>
<tr><td>1</td><td>Stomach + small intestine (500 g)</td><td>★ SATURATED salt solution (NaCl)</td></tr>
<tr><td>2</td><td>Liver (200 g) + spleen (whole) + ½ kidney</td><td>Saturated salt solution</td></tr>
<tr><td>3</td><td>Brain (½) + lung (½)</td><td>Saturated salt solution</td></tr>
<tr><td>4</td><td>Blood (10 mL)</td><td>Appropriate (see below)</td></tr>
<tr><td>5</td><td>Urine (50-100 mL)</td><td>Saturated salt solution</td></tr></table>
<p>★ <strong>NEET-PG 2019 Q4 verbatim:</strong> Viscera in toxicology stored in SATURATED SALT SOLUTION.</p>
<h4>Why Saturated Salt Solution?</h4>
<ul><li>Inhibits bacterial decomposition</li>
<li>Preserves most poisons (organic + inorganic) without altering them</li>
<li>Cheap and universally available</li>
<li>Volume should be TWICE the volume of viscera (immersion principle)</li>
<li><strong>Exception:</strong> NOT used for CORROSIVES (acids/alkalis) — they alter pH and react with salt</li></ul>
<h4>Blood Preservatives by Purpose</h4>
<table><tr><th>Purpose</th><th>Preservative</th></tr>
<tr><td>Alcohol estimation</td><td>★ Sodium FLUORIDE (NaF) + Potassium oxalate</td></tr>
<tr><td>General toxicology</td><td>NaF or sodium citrate</td></tr>
<tr><td>DNA / serology</td><td>EDTA (purple top tube)</td></tr>
<tr><td>Carboxyhaemoglobin (CO)</td><td>Airtight bottle, NO air space</td></tr>
<tr><td>Cyanide</td><td>Airtight container, analyse FRESH</td></tr>
<tr><td>Heavy metals</td><td>Heparin or no preservative</td></tr></table>
<p>★ NaF prevents bacterial fermentation that would create false alcohol postmortem.</p>
<h4>Histopathology Samples (separate)</h4>
<ul><li><strong>10% buffered FORMALIN</strong> — 10× tissue volume</li>
<li>1-2 cm cubes from each organ</li>
<li>★ NEVER use formalin for toxicology samples (destroys CO, alcohol, opiates, cyanide)</li></ul>
<h4>Special Poisons — Special Preservation</h4>
<ul><li><strong>Strychnine</strong> → save SPINAL CORD in saturated salt</li>
<li><strong>Heavy metals (As, Pb, Hg, Tl)</strong> → preserve HAIR, NAILS, BONE in addition to viscera (keratin deposits)</li>
<li><strong>Arsenic</strong> → detectable in BONE for YEARS (Marsh test)</li>
<li><strong>Carbon monoxide (CO)</strong> → blood in airtight bottle filled completely</li>
<li><strong>Cyanide</strong> → airtight container; analyse FRESH (degrades on storage)</li>
<li><strong>Volatile poisons (alcohol, ether, chloroform)</strong> → tightly stoppered bottles; refrigerate</li>
<li><strong>Paraquat</strong> → urine particularly useful (excreted unchanged)</li></ul>
<h4>Other Body Fluids</h4>
<ul><li><strong>Urine</strong> — 100 mL, saturated salt or refrigerated</li>
<li><strong>Vitreous humour</strong> — 1-2 mL via 18-G needle (decomposition resistant; for alcohol, K⁺ for time of death, glucose for DKA)</li>
<li><strong>Bile</strong> — for opiates, paracetamol metabolites (concentrated in bile)</li>
<li><strong>CSF</strong> — meningitis, electrolytes</li>
<li><strong>Stomach contents</strong> — for poison identification</li>
<li><strong>Pericardial fluid</strong> — troponin, CK isozymes (MI)</li></ul>
<h4>Chain of Custody</h4>
<ol><li>Each bottle labelled — name, age, sex, organ, date, autopsy number</li>
<li>Sealed with cloth + paper + thread + WAX</li>
<li>Doctor\'s signature on seal</li>
<li>Forwarded to FSL with covering letter</li>
<li>Receipt obtained from investigating officer</li>
<li>Chain of custody form maintained at every transfer</li></ol>
<p>★ Wrong preservative or breaks in chain of custody → evidence may be inadmissible in court.</p>`,
    sources: ['MA-06'],
    jumpToDiagram: 'MA-06'
  },
  {
    id: 'SAQ-6.6', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'Describe the procedure of medicolegal autopsy of a 56-year-old man who died after a week on mechanical ventilation due to COVID-19. What are the likely post-mortem findings?',
    answer: `<h4>Pre-Autopsy Considerations</h4>
<ul><li>★ Body is BIOHAZARDOUS — COVID-19 (SARS-CoV-2 RNA detectable in tissues days after death)</li>
<li>Apply universal precautions + airborne / droplet precautions</li>
<li>★ Use <strong>LETULLE technique</strong> — minimises operator exposure (en-masse organ removal, dissection done off the body)</li></ul>
<h4>PPE Required</h4>
<ol>
<li>Double gloves (cut-resistant under nitrile)</li>
<li>Impermeable gown</li>
<li>★ <strong>N95 / FFP3 mask</strong> (airborne precautions)</li>
<li>Face shield + goggles</li>
<li>Rubber boots</li>
<li>Head cover · shoe covers</li>
<li>Negative-pressure morgue or well-ventilated room</li>
<li>Avoid bone saw if possible (aerosol generation) — use hand saw or shears
</li></ol>
<h4>Likely Post-Mortem Findings — Lungs ★</h4>
<p><strong>★ NEET-PG 2022 Q9 (verbatim):</strong> 56-y/o COVID on MV died after a week → likely PM lung finding = <strong>"Thick layer of FIBRIN lining the alveoli"</strong>.</p>
<h5>Detailed Lung Findings:</h5>
<ul><li><strong>★ Diffuse alveolar damage (DAD)</strong> — exudative phase</li>
<li><strong>★ Hyaline membrane formation</strong> — thick FIBRIN layer lining alveoli</li>
<li><strong>Pulmonary edema</strong> — heavy, "wet" lungs</li>
<li><strong>Microthrombi in pulmonary vessels</strong> (small + medium vessels) — pro-thrombotic state</li>
<li><strong>Type II pneumocyte hyperplasia</strong> (regenerative response)</li>
<li>Multinucleated giant cells (viral cytopathic effect)</li>
<li>Hemorrhagic infarcts (from microthrombi)</li>
<li>Lymphocytic / inflammatory infiltrate</li>
<li>Lungs heavy, weight 1500-2000 g each (vs normal 400-450 g)</li>
<li>Cut surface — beefy red, "hepatised" appearance</li></ul>
<h4>Other Organs</h4>
<ul><li><strong>Heart</strong> — myocarditis (lymphocytic infiltrate), thrombi in chambers, microangiopathy</li>
<li><strong>Kidneys</strong> — acute tubular necrosis (sepsis + nephrotoxic drugs), microthrombi</li>
<li><strong>Brain</strong> — encephalitis, microthrombi, hemorrhages (some patients)</li>
<li><strong>Liver</strong> — centrilobular necrosis (shock liver), portal inflammation</li>
<li><strong>Spleen</strong> — congested, sometimes lymphoid depletion</li>
<li><strong>Vessels</strong> — endothelialitis throughout body</li>
<li><strong>Skin</strong> — petechiae · livedo reticularis · vesicular eruptions</li></ul>
<h4>Sampling</h4>
<ul><li>Lung tissue for histopathology (multiple sections from different lobes)</li>
<li>Nasopharyngeal swab — confirm SARS-CoV-2 RNA</li>
<li>Lung tissue for viral PCR</li>
<li>Blood culture (secondary bacterial infection)</li>
<li>Routine toxicology (drugs given)</li>
<li>★ Use SATURATED salt for viscera; FORMALIN for histopathology</li></ul>
<h4>Cause of Death Determination</h4>
<p>Likely COD: <strong>COVID-19 pneumonia / ARDS with multi-organ failure</strong>.</p>
<p>Manner of death: <strong>NATURAL</strong>.</p>
<p>If ventilator complication suspected (e.g., barotrauma, ventilator-associated pneumonia) — document separately.</p>
<h4>Post-Autopsy</h4>
<ul><li>Disinfect instruments — 10% bleach or autoclave</li>
<li>Surfaces wiped with 0.5% sodium hypochlorite</li>
<li>Body bagged in double bags · labelled biohazard</li>
<li>Cremation preferred (per WHO + ICMR guidelines during pandemic)</li>
<li>Limit family viewing — through bag if at all</li></ul>`,
    sources: ['MA-03 · MA-07 · MA-09'],
    jumpToDiagram: 'MA-07'
  }
];

return {
  chapterNumber: 6,
  chapterTitle: 'Medicolegal Autopsy',
  prereqs: [
    { term: 'Autopsy', meaning: 'Greek autos (self) + opis (view) — "to see for oneself". Scientific examination of dead body to determine cause, manner, time of death.' },
    { term: 'Necropsy', meaning: 'necros (dead) + opis (view) — most accurate term for investigative dissection of dead body. Synonym for autopsy.' },
    { term: 'Clinical autopsy', meaning: 'Pathological / academic — confirms diagnosis. Needs CONSENT, no requisition, may be partial.' },
    { term: 'Medicolegal autopsy', meaning: 'Forensic autopsy under state law on requisition of legal authority. NO consent needed, REQUISITION mandatory, always complete.' },
    { term: 'BNSS §174', meaning: 'Police inquest in unnatural death (≡ CrPC 174). Officer ≥ Sub-Inspector rank.' },
    { term: 'BNSS §196', meaning: 'Magistrate inquest in dowry death within 7 yrs / custody death (≡ CrPC 176).' },
    { term: 'Dead body challan', meaning: 'Requisition document with name, age, sex, address, probable date+time of death, date+time of examination.' },
    { term: 'Inquest report', meaning: 'Preliminary investigation findings — details of body, scene, injuries, circumstances.' },
    { term: 'Daylight rule', meaning: 'Autopsy mandatorily in daylight — artificial light masks jaundice, lividity colour, contusion age.' },
    { term: 'Virchow technique', meaning: 'Organs removed ONE BY ONE. Most popular. Germany — Rudolf Virchow.' },
    { term: 'Rokitansky technique', meaning: 'Partial IN-SITU dissection within body, then en-bloc removal. Austria — Karl Rokitansky.' },
    { term: 'Ghon technique', meaning: 'EN-BLOC by functional groups (cervical/thoracic/abdominal/urogenital). Austria — Anton Ghon (TB Ghon\'s complex).' },
    { term: 'Letulle technique ★', meaning: 'EN-MASSE removal tongue to prostate; dissected off body. Best for HIV+ / TB / COVID-19. NEET-PG 2023 Q3+Q4+Q5.' },
    { term: 'I-shaped incision', meaning: 'Chin (symphysis mentis) to pubis. Commonest. Easy + fast.' },
    { term: 'Y-shaped incision', meaning: 'Acromion → below breast → xiphoid (both sides) + xiphoid to pubis. More cosmetic.' },
    { term: 'Modified Y incision', meaning: 'Sternal notch → pubis + notch → mid-clavicle → behind ear. Best neck access.' },
    { term: 'Coronal scalp incision', meaning: 'Behind ear to behind ear over vertex. Hidden in hair when closed.' },
    { term: 'Saturated salt solution', meaning: 'Standard preservative for viscera in toxicology. NaCl saturated. NEET-PG 2019 Q4.' },
    { term: '10% formalin', meaning: 'Histopathology preservative. 10× tissue volume. NEVER use for toxicology (destroys CO/alcohol/opiates/cyanide).' },
    { term: 'NaF + K-oxalate', meaning: 'Blood preservative for ALCOHOL estimation. NaF prevents bacterial fermentation creating false alcohol.' },
    { term: 'Vitreous humour', meaning: 'Eye fluid, decomposition-resistant. For K⁺ (time since death), alcohol, glucose (DKA).' },
    { term: 'Exhumation', meaning: 'Lawful disinterment for autopsy. Requires MAGISTRATE order. NO time limit in India.' },
    { term: 'Soil samples in exhumation', meaning: '500 g × 4 sites (above + lateral + below + control) for chemical analysis.' },
    { term: 'Negative autopsy', meaning: 'Fails to reveal cause despite full investigation. 3-5%. Procedural failure.' },
    { term: 'Obscure autopsy', meaning: 'Findings indefinite/minimal. Causes: vagal inhibition · endocrine · drug idiosyncrasy · channelopathy.' },
    { term: 'Vagal inhibition', meaning: 'Sudden parasympathetic discharge → cardiac asystole. Classic obscure cause. Diagnosis of exclusion.' },
    { term: 'Postmortem artefact', meaning: 'Change introduced after death that confuses interpretation. 5 categories: PM exam · decomposition · 3rd party · environment · surgeon-induced.' },
    { term: 'Embalming', meaning: 'Chemical preservation. Destroys CO, alcohol, opiates, cyanide for toxicology. Trocar may pass through wounds.' },
    { term: 'Undertaker\'s fracture', meaning: 'C6-C7 dislocation from rough handling of body. Mimics antemortem cervical injury.' },
    { term: 'NHRC', meaning: 'National Human Rights Commission. Receives video recordings of custodial death autopsies.' }
  ],
  diagrams: [
    { id: 'MA-01', title: 'Autopsy — Master Overview', shortTitle: 'Master Overview', svg: SVG_MA01,
      prereqs: [{term:'Autopsy etymology',meaning:'Greek "to see for oneself".'},{term:'2 types',meaning:'Clinical (needs consent) vs Medicolegal (needs requisition).'},{term:'8 objectives',meaning:'Cause + manner + time + identity + evidence + injuries + viscera + neonate viability.'}],
      nodes: nodeList(['ma-def','ma-clinical','ma-medicolegal','ma-objectives','ma-when']),
      mcqs: MCQS['MA-01']
    },
    { id: 'MA-02', title: 'Legal Authority &amp; Pre-Autopsy Formalities', shortTitle: 'Legal Authority', svg: SVG_MA02,
      prereqs: [{term:'BNSS 174',meaning:'Police inquest in unnatural death.'},{term:'BNSS 196',meaning:'Magistrate inquest in dowry/custody death.'},{term:'Daylight rule',meaning:'Mandatory; artificial light masks important colour changes.'},{term:'NHRC',meaning:'Receives video of custodial death autopsy.'}],
      nodes: nodeList(['ma-bnss','ma-requisition','ma-identification','ma-rules','ma-daylight','ma-custody']),
      mcqs: MCQS['MA-02']
    },
    { id: 'MA-03', title: '★ 4 Autopsy Techniques — Virchow · Rokitansky · Ghon · Letulle', shortTitle: '4 Techniques ★', svg: SVG_MA03,
      prereqs: [{term:'Letulle = tongue to prostate',meaning:'En masse, NEET-PG 2023 Q3.'},{term:'HIV+ = Letulle',meaning:'NEET-PG 2023 Q4+Q5.'},{term:'Virchow = most popular',meaning:'Organ by organ.'},{term:'Ghon = 4 blocs',meaning:'Cervical/thoracic/abdominal/urogenital.'}],
      nodes: nodeList(['tech-overview','virchow','rokitansky','ghon','letulle','tech-comparison']),
      mcqs: MCQS['MA-03']
    },
    { id: 'MA-04', title: 'External Examination — Step-by-Step', shortTitle: 'External Examination', svg: SVG_MA04,
      prereqs: [{term:'7-step sequence',meaning:'Clothing → identity → PM changes → skin/odour/orifices → injuries → genitals.'},{term:'10-point injury format',meaning:'Type · site · dimensions · shape · margins · floor · surrounding · direction · weapon · age.'},{term:'Odour clues',meaning:'Cyanide (bitter almond), arsenic (garlic), OP (insecticide), DKA (acetone).'}],
      nodes: nodeList(['ext-overview','ext-clothing','ext-pm-changes','ext-skin-odour','ext-injuries','ext-genitals','ext-identity']),
      mcqs: MCQS['MA-04']
    },
    { id: 'MA-05', title: 'Internal Examination — Incisions &amp; Cavity Opening', shortTitle: 'Internal Examination', svg: SVG_MA05,
      prereqs: [{term:'I-shaped',meaning:'Commonest, chin to pubis.'},{term:'Y-shaped',meaning:'Cosmetic, spares neck skin.'},{term:'Modified Y',meaning:'Best neck access.'},{term:'Coronal scalp',meaning:'Hidden in hair when closed.'},{term:'Foetal autopsy',meaning:'★ Abdomen opened FIRST to check diaphragm.'},{term:'Strychnine = spinal',meaning:'Spinal cord opened only for spinal injury/disease/strychnine.'}],
      nodes: nodeList(['int-overview','i-incision','y-incision','modY-incision','coronal-scalp','spinal-cord','cavity-exam']),
      mcqs: MCQS['MA-05']
    },
    { id: 'MA-06', title: 'Sampling &amp; Preservation — Viscera, Blood, Vitreous', shortTitle: 'Sampling', svg: SVG_MA06,
      prereqs: [{term:'Saturated salt for viscera',meaning:'NEET-PG 2019 Q4.'},{term:'10% formalin for histopath',meaning:'NEVER for toxicology.'},{term:'NaF + K-oxalate for alcohol',meaning:'NaF prevents fermentation false alcohol.'},{term:'Vitreous',meaning:'Decomposition resistant; K⁺ for time of death.'},{term:'Arsenic in bone',meaning:'Detectable years later (Marsh test).'}],
      nodes: nodeList(['sample-overview','viscera-salt','blood-preserve','histo-formalin','other-fluids','standard-viscera','special-poisons']),
      mcqs: MCQS['MA-06']
    },
    { id: 'MA-07', title: 'Special Autopsies — HIV+ · COVID · Decomposed · Mutilated · Foetal · Mass Disaster', shortTitle: 'Special Autopsies', svg: SVG_MA07,
      prereqs: [{term:'HIV+ → Letulle',meaning:'NEET-PG 2023 Q4+Q5.'},{term:'COVID-19 lung',meaning:'Fibrin layer lining alveoli, NEET-PG 2022 Q9.'},{term:'Foetal autopsy',meaning:'Abdomen opened first to check diaphragm (live birth).'},{term:'DVI Pink/Yellow',meaning:'Interpol Disaster Victim ID protocol forms.'}],
      nodes: nodeList(['hiv-autopsy','covid-autopsy','decomposed','mutilated','fetal-autopsy','mass-disaster','special-others']),
      mcqs: MCQS['MA-07']
    },
    { id: 'MA-08', title: 'Exhumation — Lawful Disinterment', shortTitle: 'Exhumation', svg: SVG_MA08,
      prereqs: [{term:'Exhumation',meaning:'Lawful disinterment for postmortem.'},{term:'Magistrate order',meaning:'Written order mandatory.'},{term:'No time limit India',meaning:'Can be done any time; France 10 yr; Germany 30 yr.'},{term:'Soil 500 g × 4 sites',meaning:'Above + lateral + below + control.'}],
      nodes: nodeList(['exh-def','exh-purpose','exh-authority','exh-procedure','exh-samples','exh-pitfalls']),
      mcqs: MCQS['MA-08']
    },
    { id: 'MA-09', title: 'Negative vs Obscure Autopsy', shortTitle: 'Negative vs Obscure', svg: SVG_MA09,
      prereqs: [{term:'Negative',meaning:'Procedural failure to find cause despite full investigation.'},{term:'Obscure',meaning:'Findings minimal/indefinite — vagal inhibition, anaphylaxis, channelopathy.'},{term:'Vagal inhibition',meaning:'Sudden asystole from neck/abdominal/cold stimulus — diagnosis of exclusion.'},{term:'Molecular autopsy',meaning:'DNA testing for channelopathies in unexplained sudden death.'}],
      nodes: nodeList(['neg-def','obs-def','neg-obs-compare','obs-investigation','vagal-inhibition']),
      mcqs: MCQS['MA-09']
    },
    { id: 'MA-10', title: 'Postmortem Artefacts — 5 Categories', shortTitle: 'PM Artefacts', svg: SVG_MA10,
      prereqs: [{term:'PM artefact',meaning:'Change introduced after death that confuses interpretation.'},{term:'5 categories',meaning:'PM exam · decomposition · 3rd party · environment · surgeon-induced.'},{term:'Embalming',meaning:'Destroys CO, alcohol, opiates, cyanide.'},{term:'Undertaker fracture',meaning:'C6-C7 dislocation from rough handling.'}],
      nodes: nodeList(['art-def','art-pm-exam','art-decomp','art-3rd-party','art-embalm','art-surgeon','art-environment','art-significance']),
      mcqs: MCQS['MA-10']
    }
  ],
  diffTables: DIFF_TABLES,
  subjectiveQs: SUBJ,
  highYield: [
    '<strong>★ LETULLE technique</strong> = en-masse, "tongue to prostate" · NEET-PG 2023 Q3 verbatim',
    '<strong>★ HIV+ body autopsy → LETULLE technique</strong> · NEET-PG 2023 Q4+Q5 verbatim',
    '<strong>★ COVID-19 lungs</strong> → thick FIBRIN layer lining alveoli (DAD/hyaline membrane) · NEET-PG 2022 Q9',
    '<strong>★ Viscera in toxicology = SATURATED SALT SOLUTION</strong> · NEET-PG 2019 Q4',
    '<strong>★ RTA death → POLICE</strong> requests autopsy · NEET-PG 2024 Q2',
    '<strong>★ Pathology</strong> = study/work · NEET-PG 2018 Q14',
    '★ Postmortem wound differs from antemortem by <strong>absence of erythema + cellular changes</strong> · NEET-PG 2016 Q27',
    '★ Arsenic detected in bone after years (exhumation) · NEET-PG 2020 Q8',
    'Autopsy = "to see for oneself" (Greek autos + opis)',
    'Clinical autopsy = CONSENT needed · partial OK · no requisition · Medicolegal = no consent · always complete · police requisition mandatory',
    '★ Medicolegal autopsy requisition by police rank ≥ <strong>Sub-Inspector</strong> OR Magistrate',
    '★ <strong>BNSS §174</strong> (was CrPC 174) — police inquest · <strong>BNSS §196</strong> (was CrPC 176) — magistrate inquest in dowry/custody death',
    '★ Custodial death → VIDEO recording → send to NHRC, New Delhi + magistrate inquest',
    '★ DAYLIGHT mandatory — artificial light masks jaundice, lividity colour, contusion age',
    'Virchow = one by one (commonest) · Rokitansky = in situ · Ghon = 4 functional blocs · Letulle = en masse',
    '★ Foetal autopsy — ABDOMEN opened FIRST (record diaphragm position for live birth)',
    'Spinal cord opened only for: spinal injury · spinal disease · STRYCHNINE poisoning',
    'I-shaped incision = commonest · Y-shaped = cosmetic · Modified Y = best neck access',
    'Coronal scalp incision = behind ear to behind ear (hidden in hair)',
    '★ 10% formalin for histopathology · NEVER for toxicology (destroys CO/alcohol/opiates/cyanide)',
    '★ Blood ALCOHOL preservation = Sodium fluoride (NaF) + Potassium oxalate',
    'CO in airtight bottle filled COMPLETELY (no air space) · Cyanide analysed FRESH',
    'Heavy metals (As, Pb, Hg) → preserve hair, nails, bone (deposit in keratin)',
    'Vitreous humour = decomposition-resistant · K⁺ for time of death (Sturner-Henssge formula) · glucose for DKA',
    '★ <strong>Exhumation in India — NO TIME LIMIT</strong> · France 10 yr · Germany 30 yr',
    'Exhumation needs WRITTEN ORDER from Executive / Judicial MAGISTRATE',
    'Exhumation soil = 500 g × 4 sites (above + lateral + below + CONTROL)',
    'Negative autopsy ~ 3-5% · causes = inadequate history, exam, sampling, lab',
    'Obscure autopsy causes = <strong>vagal inhibition</strong> · endocrine · drug idiosyncrasy · channelopathy · concealed trauma',
    'Vagal inhibition = sudden asystole from neck pressure / abdominal blow / cold immersion · diagnosis of EXCLUSION',
    '5 PM artefact categories: <strong>PM exam · decomposition · 3rd party · environment · surgeon-induced</strong>',
    '★ Embalming DESTROYS: cyanide · alcohol · opiates · carbon monoxide (toxicology useless)',
    '★ Undertaker\'s fracture = C6-C7 dislocation from rough handling (mimics AM cervical injury)',
    'PM gas bubbles in heart → mimic air embolism · skin fissures → mimic lacerations · neck cloth groove → mimic ligature',
    'CPR artefacts: rib + sternum fractures · defibrillator chest marks · intracardiac injection bruised heart',
    'Pinkish PM lividity differentials: hypothermia · CO · cyanide · REFRIGERATION (PM artefact)',
    'Standard viscera set = 5 bottles: stomach+intestine · liver+spleen+½kidney · brain+lung · blood · urine',
    'Interpol DVI protocol: Pink form (PM data) + Yellow form (AM data) in mass disasters',
    'See subject-pinned IPC↔BNS Quick-Reference Card + Subject Subjective Q-Bank'
  ]
};
})();
