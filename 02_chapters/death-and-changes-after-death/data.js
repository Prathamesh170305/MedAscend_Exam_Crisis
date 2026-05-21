/* ===================================================================
   Medascend FMT — Chapter 7: Death and Changes after Death
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

const SVG_DC01 = `<svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Death — Definition &amp; Types</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Death is a process, not an event · 3 sequential types — Somatic → Cellular (Molecular) → Brain</text>

<g data-node-id="death-definition"><rect class="nbcr" x="60" y="120" width="1480" height="110" rx="14"/><text x="90" y="160" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="#8B6914">⚕️ DEATH — DEFINITION</text><text x="90" y="192" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">"Permanent and irreversible cessation of the vital functions of the body — circulation, respiration, and nervous activity."</text><text x="90" y="214" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="#5C4810">Modern medico-legal definition centres on irreversible cessation of brainstem function (Transplantation of Human Organs Act, 1994).</text><circle class="ic" cx="1500" cy="140" r="14"/><text class="t-info" x="1500" y="146" text-anchor="middle">ⓘ</text></g>

<g data-node-id="death-somatic"><rect class="body-white" x="60" y="260" width="480" height="280" rx="14"/><path d="M 74,260 H 526 A 14,14 0 0 1 540,274 V 330 H 60 V 274 A 14,14 0 0 1 74,260 Z" fill="url(#gBlue)"/><text x="90" y="310" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🫀 1. SOMATIC DEATH</text><text x="90" y="370" class="t-keyval">Permanent cessation of the body as</text><text x="90" y="392" class="t-keyval">an integrated unit — heart, lungs, brain</text><text x="90" y="414" class="t-keyval">all stop functioning.</text><text x="90" y="450" class="t-keylbl">Synonyms:</text><text x="200" y="450" class="t-keyval">Clinical death, systemic death</text><text x="90" y="480" class="t-keylbl">Diagnosed by:</text><text x="225" y="480" class="t-keyval">Absent pulse, respiration,</text><text x="90" y="502" class="t-keyval">reflexes, flat ECG, fixed dilated pupils</text><text x="90" y="528" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Marks the START of the dying process.</text><circle class="ic" cx="510" cy="278" r="14"/><text class="t-info" x="510" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="death-cellular"><rect class="body-white" x="560" y="260" width="480" height="280" rx="14"/><path d="M 574,260 H 1026 A 14,14 0 0 1 1040,274 V 330 H 560 V 274 A 14,14 0 0 1 574,260 Z" fill="url(#gGreen)"/><text x="590" y="310" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🧬 2. CELLULAR / MOLECULAR</text><text x="590" y="370" class="t-keyval">Death of individual cells and tissues —</text><text x="590" y="392" class="t-keyval">occurs gradually over hours after</text><text x="590" y="414" class="t-keyval">somatic death.</text><text x="590" y="450" class="t-keylbl">Order:</text><text x="660" y="450" class="t-keyval">Nervous tissue dies fastest</text><text x="590" y="472" class="t-keyval">(neurons in ~5 min) → muscle (~2 hr) →</text><text x="590" y="494" class="t-keyval">connective tissue (last to die)</text><text x="590" y="528" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Window between somatic and molecular death is used for organ retrieval.</text><circle class="ic" cx="1010" cy="278" r="14"/><text class="t-info" x="1010" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="death-brain"><rect class="body-white" x="1060" y="260" width="480" height="280" rx="14"/><path d="M 1074,260 H 1526 A 14,14 0 0 1 1540,274 V 330 H 1060 V 274 A 14,14 0 0 1 1074,260 Z" fill="url(#gPurple)"/><text x="1090" y="310" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🧠 3. BRAIN DEATH</text><text x="1090" y="370" class="t-keyval">Irreversible loss of brain function</text><text x="1090" y="392" class="t-keyval">while heart + lungs may still be</text><text x="1090" y="414" class="t-keyval">supported on a ventilator.</text><text x="1090" y="450" class="t-keylbl">3 sub-types:</text><text x="1210" y="450" class="t-keyval">Cortical · Brainstem · Whole</text><text x="1090" y="480" class="t-keylbl">Legal:</text><text x="1160" y="480" class="t-keyval">Brainstem death = death in India</text><text x="1090" y="502" class="t-keyval">under Transplantation of Human Organs Act 1994</text><circle class="ic" cx="1510" cy="278" r="14"/><text class="t-info" x="1510" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="death-suspended"><rect class="body-white" x="60" y="560" width="730" height="240" rx="14"/><path d="M 74,560 H 776 A 14,14 0 0 1 790,574 V 620 H 60 V 574 A 14,14 0 0 1 74,560 Z" fill="url(#gOrange)"/><text x="90" y="600" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">💤 SUSPENDED ANIMATION</text><text x="90" y="660" class="t-keyval">State where vital signs are so reduced</text><text x="90" y="682" class="t-keyval">they appear absent — but person is ALIVE.</text><text x="90" y="716" class="t-keylbl">Seen in:</text><text x="170" y="716" class="t-keyval">Drowning, electrocution, hypothermia,</text><text x="90" y="738" class="t-keyval">cholera, narcotic poisoning, newborn (apparent death)</text><text x="90" y="772" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#A14B47" font-weight="700">⚠️ MUST exclude before declaring death — risk of premature burial.</text><circle class="ic" cx="770" cy="578" r="14"/><text class="t-info" x="770" y="584" text-anchor="middle">ⓘ</text></g>

<g data-node-id="death-signs"><rect class="body-white" x="810" y="560" width="730" height="240" rx="14"/><path d="M 824,560 H 1526 A 14,14 0 0 1 1540,574 V 620 H 810 V 574 A 14,14 0 0 1 824,560 Z" fill="url(#gRed)"/><text x="840" y="600" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">⚰️ SIGNS THAT CONFIRM DEATH</text><text x="840" y="650" class="t-keyval">• Cessation of respiration (5+ min auscultation)</text><text x="840" y="675" class="t-keyval">• Cessation of circulation (no pulse, no heart sound, flat ECG)</text><text x="840" y="700" class="t-keyval">• Loss of brainstem reflexes (pupillary, corneal, gag, oculo-vestibular)</text><text x="840" y="725" class="t-keyval">• Cooling of body (algor mortis) — early</text><text x="840" y="750" class="t-keyval">• Postmortem lividity, rigor mortis — confirmatory</text><text x="840" y="775" class="t-keyval" font-weight="700">★ Putrefaction = MOST ABSOLUTE sign of death</text><circle class="ic" cx="1510" cy="578" r="14"/><text class="t-info" x="1510" y="584" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="820" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="858" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white" text-anchor="middle">🎯 Death sequence: SOMATIC (clinical) → CELLULAR (molecular) → BRAIN (irreversible) · Putrefaction = most absolute sign</text>

<rect x="60" y="900" width="1480" height="60" rx="10" fill="url(#gGreen)"/><text x="800" y="938" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">⭐ India: Brainstem death legally recognized under Transplantation of Human Organs Act, 1994 → enables organ donation</text>
</svg>`;

const SVG_DC02 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Brain Death — 3 Types &amp; Diagnostic Criteria</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Legal basis: Transplantation of Human Organs Act 1994 (India) · brainstem death = death</text>

<g data-node-id="bd-cortical"><rect class="body-white" x="60" y="120" width="490" height="290" rx="14"/><path d="M 74,120 H 536 A 14,14 0 0 1 550,134 V 195 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gBlue)"/><text x="80" y="170" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🧠 1. Cortical Brain Death</text><text x="80" y="240" class="t-keylbl">Synonym:</text><text x="180" y="240" class="t-keyval">Cerebral brain death / PVS</text><text x="80" y="262" class="t-keyval">(persistent vegetative state)</text><text x="80" y="295" class="t-keylbl">Lost:</text><text x="140" y="295" class="t-keyval">Higher cortical function (awareness)</text><text x="80" y="324" class="t-keylbl">Preserved:</text><text x="195" y="324" class="t-keyval">Brainstem — so respiration +</text><text x="80" y="346" class="t-keyval">cardiac activity continue spontaneously</text><text x="80" y="378" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">"Living cadavers" — NOT legally dead. Life support is ethically problematic.</text><circle class="ic" cx="520" cy="138" r="14"/><text class="t-info" x="520" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bd-brainstem"><rect class="body-white" x="570" y="120" width="490" height="290" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 584,120 H 1046 A 14,14 0 0 1 1060,134 V 195 H 570 V 134 A 14,14 0 0 1 584,120 Z" fill="url(#gOrange)"/><text x="590" y="170" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">⭐ 2. Brainstem Death (LEGAL DEATH)</text><text x="590" y="240" class="t-keylbl">Definition:</text><text x="700" y="240" class="t-keyval">All functions of brainstem</text><text x="590" y="262" class="t-keyval">permanently + irreversibly ceased</text><text x="590" y="295" class="t-keylbl">Lost:</text><text x="650" y="295" class="t-keyval">Respiration, vasomotor control,</text><text x="590" y="317" class="t-keyval">consciousness, all brainstem reflexes</text><text x="590" y="350" class="t-keylbl">Legal status:</text><text x="710" y="350" class="t-keyval">= DEATH in India under THO Act 1994</text><text x="590" y="378" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">★ Triggers organ donation eligibility · life support may be withdrawn legally.</text><circle class="ic" cx="1040" cy="138" r="14"/><text class="t-info" x="1040" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bd-whole"><rect class="body-white" x="1080" y="120" width="460" height="290" rx="14"/><path d="M 1094,120 H 1526 A 14,14 0 0 1 1540,134 V 195 H 1080 V 134 A 14,14 0 0 1 1094,120 Z" fill="url(#gPurple)"/><text x="1100" y="170" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🧬 3. Whole Brain Death</text><text x="1100" y="240" class="t-keylbl">Synonym:</text><text x="1210" y="240" class="t-keyval">Mixed brain death</text><text x="1100" y="270" class="t-keylbl">Definition:</text><text x="1215" y="270" class="t-keyval">Cortical + Brainstem death</text><text x="1100" y="292" class="t-keyval">combined</text><text x="1100" y="325" class="t-keylbl">Mechanism:</text><text x="1240" y="325" class="t-keyval">Anoxia kills cortex first</text><text x="1100" y="347" class="t-keyval">→ then midbrain → brainstem</text><text x="1100" y="380" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Final endpoint of severe global brain injury.</text><circle class="ic" cx="1510" cy="138" r="14"/><text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bd-criteria"><rect x="60" y="430" width="740" height="370" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="90" y="470" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">✅ Diagnostic Criteria (THO Act 1994)</text><text x="90" y="510" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="500" fill="rgba(255,255,255,0.92)">PREREQUISITES (all must be met):</text><text x="110" y="535" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">1. Deep coma with KNOWN cause = irreversible brainstem damage</text><text x="110" y="558" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">2. Exclude reversible causes:</text><text x="130" y="580" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.85)">• Hypothermia (core temp &lt; 32.2°C / 90°F)</text><text x="130" y="600" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.85)">• CNS depressants (barbiturates, benzodiazepines)</text><text x="130" y="620" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.85)">• Metabolic / endocrine disturbances</text><text x="130" y="640" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.85)">• Alcohol intoxication</text><text x="90" y="675" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="500" fill="rgba(255,255,255,0.92)">REQUIREMENTS:</text><text x="110" y="700" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">3. ALL brainstem reflexes absent (see table)</text><text x="110" y="722" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">4. NO spontaneous respiration (apnoea test)</text><text x="110" y="744" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">5. Examined TWICE by board, at interval of 6 hours</text><text x="110" y="766" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">6. Certificate signed by all 4 board members</text><circle class="ic" cx="770" cy="450" r="14"/><text class="t-info" x="770" y="456" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bd-reflexes"><rect x="820" y="430" width="720" height="370" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="850" y="470" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🔬 Brainstem Reflexes (all ABSENT)</text><rect x="850" y="490" width="660" height="36" rx="6" fill="rgba(255,255,255,0.18)"/><text x="870" y="514" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Reflex</text><text x="1090" y="514" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Afferent CN</text><text x="1280" y="514" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Efferent CN</text><text x="870" y="550" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">1. Pupillary</text><text x="1090" y="550" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">CN II (Optic)</text><text x="1280" y="550" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">CN III (Oculomotor)</text><text x="870" y="580" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">2. Corneal</text><text x="1090" y="580" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">CN V (Trigeminal)</text><text x="1280" y="580" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">CN VII (Facial)</text><text x="870" y="610" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">3. Vestibulo-ocular</text><text x="1090" y="610" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">CN VIII (Vestibular)</text><text x="1280" y="610" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">CN III + VI</text><text x="870" y="640" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">4. Grimace</text><text x="1090" y="640" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">CN V (Trigeminal)</text><text x="1280" y="640" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">CN VII (Facial)</text><text x="870" y="670" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">5. Gag / Cough</text><text x="1090" y="670" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">CN IX (Glossopharyngeal)</text><text x="1280" y="670" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">CN X (Vagus)</text><text x="850" y="710" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">+ Apnoea test:</text><text x="980" y="710" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">no respiratory effort even when PaCO₂ &gt; 60 mmHg</text><text x="850" y="745" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.95)">Mnemonic: "P-C-V-G-G" — Pupillary, Corneal, Vestibulo-ocular, Grimace, Gag</text><text x="850" y="775" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="rgba(255,255,255,0.85)">All five absent + apnoea + no reversible cause = brainstem death.</text><circle class="ic" cx="1510" cy="450" r="14"/><text class="t-info" x="1510" y="456" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bd-board"><rect class="body-white" x="60" y="820" width="1480" height="170" rx="14"/><path d="M 74,820 H 1526 A 14,14 0 0 1 1540,834 V 880 H 60 V 834 A 14,14 0 0 1 74,820 Z" fill="url(#gGrey)"/><text x="90" y="860" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">👨‍⚕️ Board of Experts (4 members) — THO Act 1994</text><text x="90" y="908" class="t-keyval">1. <strong>RMP in-charge of hospital</strong> where brainstem death occurred</text><text x="90" y="932" class="t-keyval">2. <strong>Independent specialist RMP</strong> — nominated by hospital in-charge from approved panel</text><text x="90" y="956" class="t-keyval">3. <strong>Neurologist OR neurosurgeon</strong> — nominated from approved panel</text><text x="90" y="980" class="t-keyval">4. <strong>RMP treating the patient</strong> whose brainstem death has occurred</text><circle class="ic" cx="1510" cy="838" r="14"/><text class="t-info" x="1510" y="844" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_DC03 = `<svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Modes of Death — Bichat&apos;s Tripod</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">3 fundamental modes by which the &quot;tripod of life&quot; (heart, lungs, brain) collapses</text>

<g data-node-id="mode-coma"><rect class="body-white" x="60" y="120" width="480" height="340" rx="14"/><path d="M 74,120 H 526 A 14,14 0 0 1 540,134 V 200 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gPurple)"/><text x="90" y="170" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🧠 1. COMA</text><text x="90" y="250" class="t-keylbl">Definition:</text><text x="200" y="250" class="t-keyval">Failure of brain function</text><text x="90" y="280" class="t-keylbl">Pathway:</text><text x="180" y="280" class="t-keyval">Loss of consciousness →</text><text x="90" y="302" class="t-keyval">loss of brainstem control → death</text><text x="90" y="338" class="t-keylbl">Causes:</text><text x="170" y="338" class="t-keyval">CNS depressants, head injury,</text><text x="90" y="360" class="t-keyval">stroke, hypoxia, hepatic / uraemic</text><text x="90" y="382" class="t-keyval">encephalopathy, hypoglycaemia, poisoning</text><text x="90" y="420" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">PM findings: cerebral oedema, congestion, ± underlying lesion.</text><circle class="ic" cx="510" cy="138" r="14"/><text class="t-info" x="510" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="mode-syncope"><rect class="body-white" x="560" y="120" width="480" height="340" rx="14"/><path d="M 574,120 H 1026 A 14,14 0 0 1 1040,134 V 200 H 560 V 134 A 14,14 0 0 1 574,120 Z" fill="url(#gRed)"/><text x="590" y="170" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">❤️ 2. SYNCOPE</text><text x="590" y="250" class="t-keylbl">Definition:</text><text x="700" y="250" class="t-keyval">Sudden stopping of heart</text><text x="590" y="280" class="t-keylbl">Pathway:</text><text x="680" y="280" class="t-keyval">Cardiac arrest →</text><text x="590" y="302" class="t-keyval">brain anoxia → death within minutes</text><text x="590" y="338" class="t-keylbl">Causes:</text><text x="670" y="338" class="t-keyval">MI, arrhythmia, vasovagal,</text><text x="590" y="360" class="t-keyval">orthostatic, haemorrhagic shock,</text><text x="590" y="382" class="t-keyval">cardiac tamponade, hypoxia</text><text x="590" y="420" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">PM findings: empty L heart, dark fluid blood in chambers.</text><circle class="ic" cx="1010" cy="138" r="14"/><text class="t-info" x="1010" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="mode-asphyxia"><rect class="body-white" x="1060" y="120" width="480" height="340" rx="14"/><path d="M 1074,120 H 1526 A 14,14 0 0 1 1540,134 V 200 H 1060 V 134 A 14,14 0 0 1 1074,120 Z" fill="url(#gBlue)"/><text x="1090" y="170" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🫁 3. ASPHYXIA</text><text x="1090" y="250" class="t-keylbl">Definition:</text><text x="1200" y="250" class="t-keyval">Failure of respiration</text><text x="1090" y="280" class="t-keylbl">Pathway:</text><text x="1180" y="280" class="t-keyval">Impaired O₂ + ↑ CO₂ →</text><text x="1090" y="302" class="t-keyval">cerebral hypoxia → cardiac arrest</text><text x="1090" y="338" class="t-keylbl">Causes:</text><text x="1170" y="338" class="t-keyval">Hanging, strangulation,</text><text x="1090" y="360" class="t-keyval">suffocation, drowning, foreign body</text><text x="1090" y="382" class="t-keyval">aspiration, CO poisoning, pneumothorax</text><text x="1090" y="420" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">PM: Tardieu spots, congestion, dark fluid blood (★ Ch 15).</text><circle class="ic" cx="1510" cy="138" r="14"/><text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="mode-tripod"><rect x="60" y="480" width="1480" height="180" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="800" y="520" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">⚖️ Bichat&apos;s Tripod of Life (1800)</text><text x="800" y="560" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)" text-anchor="middle">French anatomist Marie François Xavier Bichat described 3 vital functions whose collapse causes death:</text><text x="350" y="600" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="700" fill="white" text-anchor="middle">🧠 BRAIN (Coma)</text><text x="800" y="600" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="700" fill="white" text-anchor="middle">❤️ HEART (Syncope)</text><text x="1250" y="600" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="700" fill="white" text-anchor="middle">🫁 LUNGS (Asphyxia)</text><text x="800" y="635" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)" text-anchor="middle">Failure of ANY ONE eventually drags the other two down → cycle of death</text><circle class="ic" cx="1510" cy="498" r="14"/><text class="t-info" x="1510" y="504" text-anchor="middle">ⓘ</text></g>

<g data-node-id="mode-vagal"><rect class="body-white" x="60" y="680" width="1480" height="200" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,680 H 1526 A 14,14 0 0 1 1540,694 V 740 H 60 V 694 A 14,14 0 0 1 74,680 Z" fill="url(#gRed)"/><text x="90" y="720" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">⚡ VAGAL INHIBITION (special note)</text><text x="90" y="770" class="t-keyval">A sudden form of cardiac arrest mediated by <strong>vagus nerve overactivity</strong> — reflex from pressure on baroreceptors</text><text x="90" y="794" class="t-keyval">(carotid sinus, epigastrium), unexpected cold-water immersion, sudden emotional shock, or sudden distension of viscera.</text><text x="90" y="826" class="t-keylbl">Examples:</text><text x="190" y="826" class="t-keyval">Hydrocution (cold water entry) · Death from a light blow to neck · Sudden death during medical procedures</text><text x="90" y="858" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#A14B47" font-weight="700">⚠️ Death is SUDDEN — few or no asphyxial signs. Mechanism is vagal, not pure asphyxia.</text><circle class="ic" cx="1510" cy="698" r="14"/><text class="t-info" x="1510" y="704" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="900" width="1480" height="80" rx="10" fill="url(#gBlue)"/><text x="800" y="938" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white" text-anchor="middle">🎯 Bichat&apos;s Tripod: BRAIN (Coma) · HEART (Syncope) · LUNGS (Asphyxia) · Plus VAGAL INHIBITION = sudden reflex cardiac arrest</text><text x="800" y="965" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.85)" text-anchor="middle">Mode = HOW the body died · differs from Cause (disease/injury) and Manner (natural/accidental/suicide/homicide)</text>
</svg>`;

const SVG_DC04 = `<svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Manner of Death — 5 Categories</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Legal classification of HOW the death came about · cause = what · manner = why/by whom</text>

<g data-node-id="man-natural"><rect class="body-white" x="60" y="120" width="290" height="280" rx="14"/><path d="M 74,120 H 336 A 14,14 0 0 1 350,134 V 200 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gGreen)"/><text x="80" y="170" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🍃 NATURAL</text><text x="80" y="240" class="t-keyval">Death from disease or</text><text x="80" y="262" class="t-keyval">internal pathology only —</text><text x="80" y="284" class="t-keyval">no external trauma.</text><text x="80" y="316" class="t-keylbl">Examples:</text><text x="80" y="338" class="t-keyval">MI, stroke, cancer,</text><text x="80" y="360" class="t-keyval">pneumonia, kidney failure,</text><text x="80" y="382" class="t-keyval">old age</text><circle class="ic" cx="330" cy="138" r="12"/><text class="t-info" x="330" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="man-accident"><rect class="body-white" x="370" y="120" width="290" height="280" rx="14"/><path d="M 384,120 H 646 A 14,14 0 0 1 660,134 V 200 H 370 V 134 A 14,14 0 0 1 384,120 Z" fill="url(#gOrange)"/><text x="390" y="170" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🚗 ACCIDENTAL</text><text x="390" y="240" class="t-keyval">Death from unintended</text><text x="390" y="262" class="t-keyval">external event — neither</text><text x="390" y="284" class="t-keyval">deliberate nor disease.</text><text x="390" y="316" class="t-keylbl">Examples:</text><text x="390" y="338" class="t-keyval">RTA, fall from height,</text><text x="390" y="360" class="t-keyval">drowning, accidental burns,</text><text x="390" y="382" class="t-keyval">workplace injury</text><circle class="ic" cx="640" cy="138" r="12"/><text class="t-info" x="640" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="man-suicide"><rect class="body-white" x="680" y="120" width="290" height="280" rx="14"/><path d="M 694,120 H 956 A 14,14 0 0 1 970,134 V 200 H 680 V 134 A 14,14 0 0 1 694,120 Z" fill="url(#gPurple)"/><text x="700" y="170" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🕯️ SUICIDE</text><text x="700" y="240" class="t-keyval">Self-inflicted death by an</text><text x="700" y="262" class="t-keyval">individual capable of</text><text x="700" y="284" class="t-keyval">understanding the act.</text><text x="700" y="316" class="t-keylbl">Common methods:</text><text x="700" y="338" class="t-keyval">Hanging (most common),</text><text x="700" y="360" class="t-keyval">poisoning (organophosphate),</text><text x="700" y="382" class="t-keyval">drowning, firearm, jumping</text><circle class="ic" cx="950" cy="138" r="12"/><text class="t-info" x="950" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="man-homicide"><rect class="body-white" x="990" y="120" width="290" height="280" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 1004,120 H 1266 A 14,14 0 0 1 1280,134 V 200 H 990 V 134 A 14,14 0 0 1 1004,120 Z" fill="url(#gRed)"/><text x="1010" y="170" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">⚔️ HOMICIDE</text><text x="1010" y="240" class="t-keyval">Killing by another person —</text><text x="1010" y="262" class="t-keyval">covers murder, culpable</text><text x="1010" y="284" class="t-keyval">homicide, manslaughter.</text><text x="1010" y="316" class="t-keylbl">Common methods:</text><text x="1010" y="338" class="t-keyval">Strangulation, stab/gunshot,</text><text x="1010" y="360" class="t-keyval">poisoning, blunt trauma,</text><text x="1010" y="382" class="t-keyval">smothering, burning</text><circle class="ic" cx="1260" cy="138" r="12"/><text class="t-info" x="1260" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="man-undetermined"><rect class="body-white" x="1300" y="120" width="240" height="280" rx="14"/><path d="M 1314,120 H 1526 A 14,14 0 0 1 1540,134 V 200 H 1300 V 134 A 14,14 0 0 1 1314,120 Z" fill="url(#gGrey)"/><text x="1310" y="170" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">❓ UNDETERMINED</text><text x="1310" y="240" class="t-keyval">Cause is established</text><text x="1310" y="262" class="t-keyval">but manner cannot be</text><text x="1310" y="284" class="t-keyval">decided on evidence.</text><text x="1310" y="316" class="t-keylbl">Examples:</text><text x="1310" y="338" class="t-keyval">Body in water,</text><text x="1310" y="360" class="t-keyval">drug overdose,</text><text x="1310" y="382" class="t-keyval">isolated GSW</text><circle class="ic" cx="1520" cy="138" r="12"/><text class="t-info" x="1520" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="man-cause-vs-manner"><rect x="60" y="420" width="730" height="290" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="90" y="460" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🎯 Cause vs Mode vs Manner</text><text x="90" y="510" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white">CAUSE OF DEATH (proximate)</text><text x="90" y="535" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.9)">= disease / injury that initiated the chain (e.g., gunshot to chest)</text><text x="90" y="575" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white">MODE OF DEATH</text><text x="90" y="600" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.9)">= functional mechanism by which death occurred (Coma / Syncope / Asphyxia / Vagal)</text><text x="90" y="640" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white">MANNER OF DEATH</text><text x="90" y="665" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.9)">= circumstantial / legal category — natural / accident / suicide / homicide / undetermined</text><text x="90" y="694" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="rgba(255,255,255,0.75)">Example: gunshot to chest → cause; haemorrhagic shock → mode; suicide → manner.</text><circle class="ic" cx="760" cy="440" r="14"/><text class="t-info" x="760" y="446" text-anchor="middle">ⓘ</text></g>

<g data-node-id="man-suicide-vs-homicide"><rect x="810" y="420" width="730" height="290" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="840" y="460" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">⚖️ Suicide vs Homicide — Clues</text><text x="840" y="510" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white">SUICIDE pointers:</text><text x="850" y="535" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.9)">• Hesitation marks / tentative cuts on wrist</text><text x="850" y="555" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.9)">• Site accessible to victim&apos;s dominant hand</text><text x="850" y="575" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.9)">• Single mechanism; suicide note; cadaveric spasm on weapon</text><text x="840" y="615" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white">HOMICIDE pointers:</text><text x="850" y="640" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.9)">• Defence wounds on hands / forearms</text><text x="850" y="660" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.9)">• Multiple wounds, atypical sites (back, between scapulae)</text><text x="850" y="680" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.9)">• Scene disturbed / signs of struggle / missing valuables</text><circle class="ic" cx="1510" cy="440" r="14"/><text class="t-info" x="1510" y="446" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="730" width="1480" height="100" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="800" y="770" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">📋 Manner is decided by the magistrate/court · The doctor opines on CAUSE and MODE only</text><text x="800" y="800" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)" text-anchor="middle">The autopsy surgeon may indicate &quot;suggestive of suicide / homicide&quot; based on findings — but the legal manner is for the magistrate to determine.</text>

<rect x="60" y="850" width="1480" height="120" rx="10" fill="url(#gBlue)"/><text x="800" y="895" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white" text-anchor="middle">🎯 5 MANNERS: Natural · Accidental · Suicide · Homicide · Undetermined</text><text x="800" y="925" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.85)" text-anchor="middle">All UNNATURAL deaths (the 4 non-natural manners) must be reported to police under §174 BNSS 2023 (formerly §174 CrPC) for inquest.</text><text x="800" y="952" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.85)" text-anchor="middle">⚖️ §194 BNSS 2023 = police inquest · §196 BNSS 2023 = magisterial inquest (dowry / custody / unnatural deaths)</text>
</svg>`;

const SVG_DC05 = `<svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Sequence of Changes after Death</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">3 phases · used to estimate time since death (TOD)</text>

<g data-node-id="seq-immediate"><rect class="body-white" x="60" y="120" width="480" height="340" rx="14"/><path d="M 74,120 H 526 A 14,14 0 0 1 540,134 V 200 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gBlue)"/><text x="90" y="170" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">⚡ IMMEDIATE</text><text x="90" y="240" class="t-keylbl">Timing:</text><text x="170" y="240" class="t-keyval">0 → minutes (= somatic death)</text><text x="90" y="280" class="t-keylbl">Changes:</text><text x="110" y="310" class="t-keyval">• Stoppage of nervous activity</text><text x="110" y="334" class="t-keyval">(coma, areflexia, dilated fixed pupils)</text><text x="110" y="362" class="t-keyval">• Stoppage of respiration</text><text x="110" y="386" class="t-keyval">(no chest movement, no breath sounds)</text><text x="110" y="414" class="t-keyval">• Stoppage of circulation</text><text x="110" y="438" class="t-keyval">(no pulse, no heart sounds, flat ECG)</text><circle class="ic" cx="510" cy="138" r="14"/><text class="t-info" x="510" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="seq-early"><rect class="body-white" x="560" y="120" width="480" height="340" rx="14"/><path d="M 574,120 H 1026 A 14,14 0 0 1 1040,134 V 200 H 560 V 134 A 14,14 0 0 1 574,120 Z" fill="url(#gGreen)"/><text x="590" y="170" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🌙 EARLY</text><text x="590" y="240" class="t-keylbl">Timing:</text><text x="670" y="240" class="t-keyval">minutes → 36 hours</text><text x="590" y="280" class="t-keylbl">Changes:</text><text x="610" y="310" class="t-keyval">• Eye changes (corneal haziness, tache</text><text x="610" y="334" class="t-keyval">noire, ↓ ocular tension, fundus changes)</text><text x="610" y="362" class="t-keyval">• Skin pallor, loss of elasticity</text><text x="610" y="386" class="t-keyval">• Algor mortis (cooling)</text><text x="610" y="410" class="t-keyval">• Postmortem lividity</text><text x="610" y="434" class="t-keyval">• Rigor mortis</text><text x="610" y="454" class="t-keyval">• Changes in body fluids (vitreous K⁺)</text><circle class="ic" cx="1010" cy="138" r="14"/><text class="t-info" x="1010" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="seq-late"><rect class="body-white" x="1060" y="120" width="480" height="340" rx="14"/><path d="M 1074,120 H 1526 A 14,14 0 0 1 1540,134 V 200 H 1060 V 134 A 14,14 0 0 1 1074,120 Z" fill="url(#gPurple)"/><text x="1090" y="170" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🍂 LATE</text><text x="1090" y="240" class="t-keylbl">Timing:</text><text x="1170" y="240" class="t-keyval">36 hours onwards</text><text x="1090" y="280" class="t-keylbl">Changes:</text><text x="1110" y="310" class="t-keyval">• Decomposition / putrefaction</text><text x="1110" y="334" class="t-keyval">(greenish discolouration → marbling →</text><text x="1110" y="358" class="t-keyval">bloating → liquefaction → skeletonization)</text><text x="1110" y="392" class="t-keyval">Modified decomposition:</text><text x="1110" y="416" class="t-keyval">• Adipocere (moist conditions)</text><text x="1110" y="440" class="t-keyval">• Mummification (dry / hot conditions)</text><circle class="ic" cx="1510" cy="138" r="14"/><text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="seq-timeline"><rect x="60" y="500" width="1480" height="290" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="800" y="540" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">⏱️ Timeline of TOD Markers</text><line x1="100" y1="650" x2="1500" y2="650" stroke="white" stroke-width="3" marker-end="url(#arrow)"/><circle cx="100" cy="650" r="8" fill="white"/><circle cx="280" cy="650" r="8" fill="white"/><circle cx="460" cy="650" r="8" fill="white"/><circle cx="640" cy="650" r="8" fill="white"/><circle cx="820" cy="650" r="8" fill="white"/><circle cx="1000" cy="650" r="8" fill="white"/><circle cx="1180" cy="650" r="8" fill="white"/><circle cx="1360" cy="650" r="8" fill="white"/><text x="100" y="630" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">0 min</text><text x="280" y="630" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">2 hr</text><text x="460" y="630" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">6 hr</text><text x="640" y="630" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">12 hr</text><text x="820" y="630" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">24 hr</text><text x="1000" y="630" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">36 hr</text><text x="1180" y="630" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">48 hr</text><text x="1360" y="630" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">7+ days</text><text x="100" y="685" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">Somatic</text><text x="100" y="700" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">death</text><text x="280" y="685" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">Cooling +</text><text x="280" y="700" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">lividity start</text><text x="460" y="685" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">Lividity</text><text x="460" y="700" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">fixes</text><text x="640" y="685" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">Rigor full</text><text x="640" y="700" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">(rule of 12)</text><text x="820" y="685" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">Rigor</text><text x="820" y="700" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">passes</text><text x="1000" y="685" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">Putrefaction</text><text x="1000" y="700" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">starts (green)</text><text x="1180" y="685" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">Marbling +</text><text x="1180" y="700" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">bloating</text><text x="1360" y="685" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">Adipocere /</text><text x="1360" y="700" font-family="Inter,system-ui,sans-serif" font-size="11" fill="rgba(255,255,255,0.92)" text-anchor="middle">mummification</text><text x="800" y="760" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">★ Estimating TOD: combine MULTIPLE signs — never rely on one alone (each has wide confidence interval)</text><circle class="ic" cx="1510" cy="520" r="14"/><text class="t-info" x="1510" y="526" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="810" width="1480" height="80" rx="10" fill="url(#gBlue)"/><text x="800" y="848" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white" text-anchor="middle">🎯 3 phases: IMMEDIATE (0 min) → EARLY (minutes-36 hr) → LATE (36 hr+)</text><text x="800" y="875" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.85)" text-anchor="middle">Putrefaction = most absolute sign of death · Casper&apos;s dictum (Air:Water:Earth = 1:2:8) governs late changes</text>

<rect x="60" y="910" width="1480" height="60" rx="10" fill="url(#gGreen)"/><text x="800" y="948" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">⭐ Internal organs: brain &amp; mucosa decompose first · uterus, prostate, fibrous tissue last</text>
</svg>`;

const SVG_DC06 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Algor Mortis — Cooling of the Body</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">algor = coldness · mortis = of death · early sign · TOD estimation in temperate climates</text>

<g data-node-id="algor-definition"><rect class="nbcr" x="60" y="120" width="1480" height="120" rx="14"/><text x="90" y="160" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="#8B6914">🌡️ DEFINITION</text><text x="90" y="190" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Progressive cooling of the body after death — heat is no longer produced (metabolism stopped) and is lost to environment.</text><text x="90" y="218" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Body temperature falls until it equilibrates with ambient temperature.</text><circle class="ic" cx="1500" cy="140" r="14"/><text class="t-info" x="1500" y="146" text-anchor="middle">ⓘ</text></g>

<g data-node-id="algor-mechanism"><rect class="body-white" x="60" y="270" width="730" height="280" rx="14"/><path d="M 74,270 H 776 A 14,14 0 0 1 790,284 V 340 H 60 V 284 A 14,14 0 0 1 74,270 Z" fill="url(#gBlue)"/><text x="90" y="320" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🔁 Heat Loss Mechanisms</text><text x="90" y="370" class="t-keylbl">1. Conduction:</text><text x="240" y="370" class="t-keyval">heat transfer by direct contact</text><text x="90" y="392" class="t-keyval">(body to ground/floor) · internal organs cool by conduction</text><text x="90" y="424" class="t-keylbl">2. Convection:</text><text x="240" y="424" class="t-keyval">heat carried away by moving air currents</text><text x="90" y="456" class="t-keylbl">3. Radiation:</text><text x="220" y="456" class="t-keyval">infrared heat radiated to surroundings</text><text x="90" y="500" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="#6B7283">All three operate simultaneously · proportions vary with body position and environment.</text><circle class="ic" cx="770" cy="288" r="14"/><text class="t-info" x="770" y="294" text-anchor="middle">ⓘ</text></g>

<g data-node-id="algor-curve"><rect class="body-white" x="810" y="270" width="730" height="280" rx="14"/><path d="M 824,270 H 1526 A 14,14 0 0 1 1540,284 V 340 H 810 V 284 A 14,14 0 0 1 824,270 Z" fill="url(#gPurple)"/><text x="840" y="320" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">📈 Cooling Curve — Sigmoid (Inverted S)</text><text x="840" y="372" class="t-keyval">Body cooling does NOT follow a simple exponential curve.</text><text x="840" y="395" class="t-keyval">Actual curve is &quot;sigmoid&quot; / inverted S — 3 phases:</text><text x="860" y="424" class="t-keyval">• <strong>Initial plateau</strong> (~3-4 hr) — core temp barely falls</text><text x="860" y="448" class="t-keyval">• <strong>Steep fall</strong> (~9-12 hr) — rapid drop</text><text x="860" y="472" class="t-keyval">• <strong>Final plateau</strong> — equilibrates with ambient</text><text x="840" y="510" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#A14B47" font-weight="700">⚠️ Newton&apos;s law (simple exponential cooling) does NOT apply to cadaver — composite tissue.</text><circle class="ic" cx="1510" cy="288" r="14"/><text class="t-info" x="1510" y="294" text-anchor="middle">ⓘ</text></g>

<g data-node-id="algor-rate"><rect class="body-white" x="60" y="580" width="730" height="240" rx="14" stroke="#3D8B5B" stroke-width="3"/><path d="M 74,580 H 776 A 14,14 0 0 1 790,594 V 650 H 60 V 594 A 14,14 0 0 1 74,580 Z" fill="url(#gGreen)"/><text x="90" y="630" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">⚖️ Rate of Cooling — INDIA</text><text x="90" y="690" class="t-keyval">Average rate of fall in inner core temperature:</text><text x="90" y="725" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="#15294F">0.4 – 0.7 °C per hour</text><text x="90" y="760" class="t-keyval">(approx. 0.8 – 1.3 °F per hour)</text><text x="90" y="794" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">★ Used in Marshall &amp; Hore formula for TOD in temperate climates · less useful in tropical Indian summer when ambient ≥ body temp.</text><circle class="ic" cx="770" cy="598" r="14"/><text class="t-info" x="770" y="604" text-anchor="middle">ⓘ</text></g>

<g data-node-id="algor-sites"><rect class="body-white" x="810" y="580" width="730" height="240" rx="14"/><path d="M 824,580 H 1526 A 14,14 0 0 1 1540,594 V 650 H 810 V 594 A 14,14 0 0 1 824,580 Z" fill="url(#gOrange)"/><text x="840" y="630" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">📍 Recording Sites</text><text x="840" y="690" class="t-keylbl">Preferred:</text><text x="950" y="690" class="t-keyval">Rectum — 4 inches above anus</text><text x="840" y="720" class="t-keylbl">Alternative:</text><text x="970" y="720" class="t-keyval">Sub-hepatic region (intra-abdominal)</text><text x="840" y="752" class="t-keylbl">Instrument:</text><text x="970" y="752" class="t-keyval">Chemical thermometer, ~25 cm,</text><text x="840" y="774" class="t-keyval">graduation 0 – 50 °C</text><text x="840" y="800" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">Hourly serial recordings give better estimate than single reading.</text><circle class="ic" cx="1510" cy="598" r="14"/><text class="t-info" x="1510" y="604" text-anchor="middle">ⓘ</text></g>

<g data-node-id="algor-factors"><rect class="body-white" x="60" y="840" width="1480" height="170" rx="14"/><path d="M 74,840 H 1526 A 14,14 0 0 1 1540,854 V 900 H 60 V 854 A 14,14 0 0 1 74,840 Z" fill="url(#gRed)"/><text x="90" y="880" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">⚙️ Factors Affecting Cooling</text><text x="90" y="930" class="t-keyval"><strong>Cooling FASTER:</strong> low ambient temp · thin body · infant/child (high surface area) · undressed body · air movement · death in water</text><text x="90" y="958" class="t-keyval"><strong>Cooling SLOWER:</strong> high ambient temp · obese body (fat insulates) · adults · clothing/blanket · still air · death indoors</text><text x="90" y="988" class="t-keylbl">★ Casper&apos;s dictum (rate):</text><text x="320" y="988" class="t-keyval">Water : Air : Earth = <strong>4 : 2 : 1</strong> · same body cools 4× faster in water vs 1× in grave</text><circle class="ic" cx="1510" cy="858" r="14"/><text class="t-info" x="1510" y="864" text-anchor="middle">ⓘ</text></g>

<g data-node-id="algor-caloricity"><rect x="60" y="1030" width="1480" height="50" rx="10" fill="url(#gGrey)"/><text x="800" y="1062" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⚡ POSTMORTEM CALORICITY: temperature RISES (not falls) in early phase — septicaemia · infections · sunstroke · tetanus · strychnine poisoning</text><circle class="ic" cx="1510" cy="1048" r="12"/><text class="t-info" x="1510" y="1054" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_DC07 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Postmortem Lividity (Livor Mortis / Hypostasis)</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Purplish-blue discolouration from gravitational pooling of blood in dependent vessels</text>

<g data-node-id="liv-definition"><rect class="nbcr" x="60" y="120" width="1480" height="120" rx="14"/><text x="90" y="160" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="#8B6914">🩸 DEFINITION + SYNONYMS</text><text x="90" y="190" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Purplish-blue or reddish-blue discolouration of skin due to settling of blood by gravity into dependent, dilated, toneless capillaries and small veins of the rete mucosum.</text><text x="90" y="218" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="#5C4810">Synonyms: Livor mortis · Hypostasis · Suggilation · Postmortem staining · Vibices</text><circle class="ic" cx="1500" cy="140" r="14"/><text class="t-info" x="1500" y="146" text-anchor="middle">ⓘ</text></g>

<g data-node-id="liv-formation"><rect class="body-white" x="60" y="270" width="730" height="280" rx="14"/><path d="M 74,270 H 776 A 14,14 0 0 1 790,284 V 340 H 60 V 284 A 14,14 0 0 1 74,270 Z" fill="url(#gBlue)"/><text x="90" y="320" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">⏱️ Formation Timeline</text><text x="90" y="372" class="t-keylbl">Onset:</text><text x="160" y="372" class="t-keyval">Begins by end of 1st hour after death</text><text x="90" y="404" class="t-keylbl">Patchy → uniform:</text><text x="270" y="404" class="t-keyval">Small patches coalesce</text><text x="90" y="426" class="t-keyval">into uniformly stained areas over <strong>5-6 hours</strong></text><text x="90" y="458" class="t-keylbl">Fixation:</text><text x="180" y="458" class="t-keyval">By <strong>~7-8 hours</strong> (varies 6-12 hr)</text><text x="90" y="490" class="t-keylbl">Disappears:</text><text x="220" y="490" class="t-keyval">With onset of decomposition</text><text x="90" y="522" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="#6B7283">Earliest visible PM change after death — useful for early TOD.</text><circle class="ic" cx="770" cy="288" r="14"/><text class="t-info" x="770" y="294" text-anchor="middle">ⓘ</text></g>

<g data-node-id="liv-fixation"><rect class="body-white" x="810" y="270" width="730" height="280" rx="14" stroke="#3D8B5B" stroke-width="3"/><path d="M 824,270 H 1526 A 14,14 0 0 1 1540,284 V 340 H 810 V 284 A 14,14 0 0 1 824,270 Z" fill="url(#gGreen)"/><text x="840" y="320" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🔒 Fixation Test (★)</text><text x="840" y="372" class="t-keyval">Press the livid area with thumb for 30 seconds.</text><text x="840" y="404" class="t-keyval"><strong>NOT fixed:</strong> blanches on pressure → livor disappears</text><text x="840" y="424" class="t-keyval">temporarily then refills · means body still movable to</text><text x="840" y="444" class="t-keyval">change pattern (early phase)</text><text x="840" y="478" class="t-keyval"><strong>FIXED:</strong> no blanching → livor permanent · means body</text><text x="840" y="498" class="t-keyval">moved AFTER fixation will not redistribute livor</text><text x="840" y="526" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="#6B7283">★ MLI: pattern of lividity tells if body was moved post-death.</text><circle class="ic" cx="1510" cy="288" r="14"/><text class="t-info" x="1510" y="294" text-anchor="middle">ⓘ</text></g>

<g data-node-id="liv-colours"><rect x="60" y="580" width="1480" height="280" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="800" y="620" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">🎨 Colour of Lividity → Cause of Death</text><rect x="100" y="650" width="1400" height="36" rx="6" fill="rgba(255,255,255,0.18)"/><text x="130" y="675" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Cause</text><text x="450" y="675" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Colour</text><text x="800" y="675" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Mechanism / Pigment</text><text x="130" y="710" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Normal (asphyxial)</text><text x="450" y="710" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Purplish / reddish-blue</text><text x="800" y="710" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Deoxyhaemoglobin</text><text x="130" y="735" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Carbon monoxide</text><text x="450" y="735" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">CHERRY-PINK</text><text x="800" y="735" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Carboxyhaemoglobin (HbCO)</text><text x="130" y="760" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Cyanide</text><text x="450" y="760" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Bright cherry-red</text><text x="800" y="760" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Excess oxygenated blood (O₂ not used)</text><text x="130" y="785" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Refrigeration / Hypothermia</text><text x="450" y="785" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Pinkish</text><text x="800" y="785" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">O₂ retained in cutaneous blood (cold)</text><text x="130" y="810" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Hydrogen sulphide / putrefaction</text><text x="450" y="810" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Greenish</text><text x="800" y="810" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Sulphaemoglobin</text><text x="130" y="835" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Sodium chlorate / nitrites</text><text x="450" y="835" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Chocolate-brown</text><text x="800" y="835" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Methaemoglobin</text><circle class="ic" cx="1510" cy="600" r="14"/><text class="t-info" x="1510" y="606" text-anchor="middle">ⓘ</text></g>

<g data-node-id="liv-patterns"><rect class="body-white" x="60" y="890" width="730" height="170" rx="14"/><path d="M 74,890 H 776 A 14,14 0 0 1 790,904 V 950 H 60 V 904 A 14,14 0 0 1 74,890 Z" fill="url(#gOrange)"/><text x="90" y="930" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🦶 Distribution Patterns</text><text x="90" y="975" class="t-keylbl">Supine:</text><text x="170" y="975" class="t-keyval">Back, buttocks, posterior limbs</text><text x="90" y="1000" class="t-keylbl">Hanging:</text><text x="190" y="1000" class="t-keyval">Lower limbs, hands (glove-and-stocking)</text><text x="90" y="1025" class="t-keylbl">Contact pallor:</text><text x="240" y="1025" class="t-keyval">Pale areas where skin touches ground</text><text x="90" y="1048" class="t-keyval">(skin pressed → vessels emptied)</text><circle class="ic" cx="770" cy="908" r="14"/><text class="t-info" x="770" y="914" text-anchor="middle">ⓘ</text></g>

<g data-node-id="liv-mli"><rect class="body-white" x="810" y="890" width="730" height="170" rx="14" stroke="#15294F" stroke-width="3"/><path d="M 824,890 H 1526 A 14,14 0 0 1 1540,904 V 950 H 810 V 904 A 14,14 0 0 1 824,890 Z" fill="url(#gBlue)"/><text x="840" y="930" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">⚖️ Medico-Legal Importance</text><text x="840" y="975" class="t-keyval">1. <strong>Sign of death</strong> — earliest reliable PM change</text><text x="840" y="998" class="t-keyval">2. <strong>Time since death</strong> — fixation at ~7-8 hr</text><text x="840" y="1021" class="t-keyval">3. <strong>Position of body</strong> at death · whether moved post-mortem</text><text x="840" y="1044" class="t-keyval">4. <strong>Cause of death</strong> — colour suggests CO / cyanide / etc.</text><circle class="ic" cx="1510" cy="908" r="14"/><text class="t-info" x="1510" y="914" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_DC08 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Rigor Mortis — Cadaveric Rigidity</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Stiffness from ATP depletion · &quot;Rule of 12&quot; · most-tested topic in this chapter</text>

<g data-node-id="rigor-definition"><rect class="nbcr" x="60" y="120" width="1480" height="100" rx="14"/><text x="90" y="156" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="#8B6914">💪 DEFINITION</text><text x="90" y="186" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Stiffness of muscle (with some shortening) after death — follows the period of primary flaccidity, due to ATP depletion and irreversible actin–myosin cross-linkage.</text><text x="90" y="208" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="#5C4810">Appearance of rigor = onset of MOLECULAR (cellular) death.</text><circle class="ic" cx="1500" cy="140" r="14"/><text class="t-info" x="1500" y="146" text-anchor="middle">ⓘ</text></g>

<g data-node-id="rigor-mechanism"><rect class="body-white" x="60" y="250" width="730" height="290" rx="14"/><path d="M 74,250 H 776 A 14,14 0 0 1 790,264 V 320 H 60 V 264 A 14,14 0 0 1 74,250 Z" fill="url(#gBlue)"/><text x="90" y="300" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🔬 Mechanism</text><text x="90" y="350" class="t-keyval">1. ATP normally maintains actin–myosin in <strong>relaxed</strong> state.</text><text x="90" y="378" class="t-keyval">2. After death, no O₂ → no aerobic ATP synthesis.</text><text x="90" y="406" class="t-keyval">3. Glycogen depletion → lactate accumulation → ATP falls.</text><text x="90" y="434" class="t-keyval">4. Below 15% normal ATP → actin and myosin form</text><text x="90" y="456" class="t-keyval">irreversible <strong>acto-myosin gel</strong> → muscle stiffens.</text><text x="90" y="488" class="t-keyval">5. Rigor persists until proteolytic enzymes (lysosomal)</text><text x="90" y="510" class="t-keyval">destroy muscle proteins → secondary relaxation.</text><circle class="ic" cx="770" cy="268" r="14"/><text class="t-info" x="770" y="274" text-anchor="middle">ⓘ</text></g>

<g data-node-id="rigor-march"><rect class="body-white" x="810" y="250" width="730" height="290" rx="14"/><path d="M 824,250 H 1526 A 14,14 0 0 1 1540,264 V 320 H 810 V 264 A 14,14 0 0 1 824,250 Z" fill="url(#gPurple)"/><text x="840" y="300" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">⏬ March of Rigor (Onset Order)</text><text x="840" y="350" class="t-keyval">Onset follows a TOP-DOWN sequence:</text><text x="860" y="380" class="t-keyval">1. Involuntary muscles first (heart, then iris)</text><text x="860" y="404" class="t-keyval">2. Eyelids (orbicularis oculi)</text><text x="860" y="428" class="t-keyval">3. Face → neck → jaw</text><text x="860" y="452" class="t-keyval">4. Trunk → upper limbs (shoulder→hand)</text><text x="860" y="476" class="t-keyval">5. Lower limbs (hip→foot)</text><text x="860" y="500" class="t-keyval">6. <strong>Small muscles of hands &amp; feet LAST</strong></text><text x="840" y="528" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">Disappearance follows the SAME order — first in, first out.</text><circle class="ic" cx="1510" cy="268" r="14"/><text class="t-info" x="1510" y="274" text-anchor="middle">ⓘ</text></g>

<g data-node-id="rigor-rule12"><rect x="60" y="570" width="1480" height="170" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)" stroke="#8E5E1F" stroke-width="3"/><text x="800" y="615" font-family="Inter,system-ui,sans-serif" font-size="24" font-weight="800" fill="white" text-anchor="middle">⭐ RULE OF 12 (★ HIGHLY TESTED)</text><text x="800" y="660" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="500" fill="rgba(255,255,255,0.95)" text-anchor="middle">Rigor takes ~<strong>12 hours</strong> to develop · stays for ~<strong>12 hours</strong> · takes ~<strong>12 hours</strong> to pass off</text><text x="800" y="700" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)" text-anchor="middle">Total ~36 hours from death to complete disappearance · India varies by season (see factors)</text><text x="800" y="725" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="rgba(255,255,255,0.85)" text-anchor="middle">Generalised guide only — actual onset/duration depends on temperature, body habitus, cause of death</text><circle class="ic" cx="1510" cy="588" r="14"/><text class="t-info" x="1510" y="594" text-anchor="middle">ⓘ</text></g>

<g data-node-id="rigor-factors"><rect class="body-white" x="60" y="770" width="730" height="240" rx="14"/><path d="M 74,770 H 776 A 14,14 0 0 1 790,784 V 840 H 60 V 784 A 14,14 0 0 1 74,770 Z" fill="url(#gGreen)"/><text x="90" y="820" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">⚙️ Factors Affecting Rigor</text><text x="90" y="870" class="t-keylbl">Early onset + early off:</text><text x="320" y="870" class="t-keyval">Electrocution, convulsions,</text><text x="90" y="892" class="t-keyval">hyperpyrexia, cancer, uraemia, hot weather</text><text x="90" y="922" class="t-keylbl">Delayed onset:</text><text x="240" y="922" class="t-keyval">Asphyxia, apoplexy, hypothermia,</text><text x="90" y="944" class="t-keyval">cold environment</text><text x="90" y="974" class="t-keylbl">Rapid onset, stays LONGER:</text><text x="360" y="974" class="t-keyval">Strychnine, hydrocyanic acid</text><text x="90" y="996" class="t-keyval">poisoning (sustained muscle excitation)</text><circle class="ic" cx="770" cy="788" r="14"/><text class="t-info" x="770" y="794" text-anchor="middle">ⓘ</text></g>

<g data-node-id="rigor-mli"><rect class="body-white" x="810" y="770" width="730" height="240" rx="14" stroke="#15294F" stroke-width="3"/><path d="M 824,770 H 1526 A 14,14 0 0 1 1540,784 V 840 H 810 V 784 A 14,14 0 0 1 824,770 Z" fill="url(#gBlue)"/><text x="840" y="820" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">⚖️ Medico-Legal Importance</text><text x="840" y="870" class="t-keyval">1. <strong>Sign of death</strong> (confirms molecular death)</text><text x="840" y="894" class="t-keyval">2. <strong>Time since death</strong> — Rule of 12</text><text x="840" y="918" class="t-keyval">3. <strong>Indicates posture/position</strong> at time of death</text><text x="840" y="942" class="t-keyval">4. Breaking of rigor (by rough handling) → DOES NOT</text><text x="840" y="964" class="t-keyval">reset; muscles stay flaccid · may mislead TOD estimate</text><text x="840" y="990" class="t-keyval">5. Also develops in <strong>paralysed limbs</strong> (independent of nervous system)</text><circle class="ic" cx="1510" cy="788" r="14"/><text class="t-info" x="1510" y="794" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1030" width="1480" height="50" rx="10" fill="url(#gRed)"/><text x="800" y="1062" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">★ Rigor in HEART → mimics ventricular hypertrophy · Rigor in PUPILS → unequal size · Rigor in DARTOS → postmortem semen emission</text>
</svg>`;

const SVG_DC09 = `<svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Conditions Simulating Rigor Mortis</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">4 mimics of postmortem stiffening — Cadaveric spasm · Heat · Cold · Gas stiffening</text>

<g data-node-id="sim-cadaveric"><rect class="body-white" x="60" y="120" width="730" height="350" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,120 H 776 A 14,14 0 0 1 790,134 V 200 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gRed)"/><text x="90" y="170" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">⚡ 1. Cadaveric Spasm (★ MLI)</text><text x="90" y="240" class="t-keylbl">Synonyms:</text><text x="200" y="240" class="t-keyval">Instantaneous rigor · Cataleptic rigidity</text><text x="90" y="278" class="t-keylbl">Onset:</text><text x="160" y="278" class="t-keyval">IMMEDIATE — at moment of death,</text><text x="90" y="300" class="t-keyval">skipping primary flaccidity phase</text><text x="90" y="332" class="t-keylbl">Mechanism:</text><text x="220" y="332" class="t-keyval">Unknown · associated with violent</text><text x="90" y="354" class="t-keyval">deaths + intense emotional/physical exertion</text><text x="90" y="386" class="t-keylbl">Muscles:</text><text x="190" y="386" class="t-keyval">Usually a group (hand) — rarely whole body</text><text x="90" y="418" class="t-keylbl">Stiffness:</text><text x="190" y="418" class="t-keyval">VERY STRONG · cannot be overcome easily</text><text x="90" y="450" class="t-keylbl">★ MLI:</text><text x="160" y="450" class="t-keyval">Proves person was ALIVE + ACTIVE at moment of death</text><circle class="ic" cx="770" cy="138" r="14"/><text class="t-info" x="770" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="sim-heat"><rect class="body-white" x="810" y="120" width="730" height="350" rx="14"/><path d="M 824,120 H 1526 A 14,14 0 0 1 1540,134 V 200 H 810 V 134 A 14,14 0 0 1 824,120 Z" fill="url(#gOrange)"/><text x="840" y="170" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🔥 2. Heat Stiffening</text><text x="840" y="240" class="t-keylbl">Cause:</text><text x="910" y="240" class="t-keyval">Body exposed to temperature &gt; 65 °C</text><text x="840" y="278" class="t-keylbl">Mechanism:</text><text x="970" y="278" class="t-keyval">Coagulation of muscle proteins</text><text x="840" y="300" class="t-keyval">→ contraction of muscles</text><text x="840" y="332" class="t-keylbl">Posture:</text><text x="930" y="332" class="t-keyval">&quot;Pugilistic attitude&quot; — flexed limbs,</text><text x="840" y="354" class="t-keyval">clenched fists (boxer pose)</text><text x="840" y="386" class="t-keylbl">Seen in:</text><text x="930" y="386" class="t-keyval">Severe burns, high-voltage electric</text><text x="840" y="408" class="t-keyval">burns, charred bodies</text><text x="840" y="440" class="t-keylbl">Nature:</text><text x="920" y="440" class="t-keyval">MAY be antemortem OR postmortem</text><text x="840" y="462" class="t-keyval">Stiffness lasts until decomposition softens muscles</text><circle class="ic" cx="1510" cy="138" r="14"/><text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="sim-cold"><rect class="body-white" x="60" y="490" width="730" height="280" rx="14"/><path d="M 74,490 H 776 A 14,14 0 0 1 790,504 V 570 H 60 V 504 A 14,14 0 0 1 74,490 Z" fill="url(#gBlue)"/><text x="90" y="540" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">❄️ 3. Cold Stiffening</text><text x="90" y="610" class="t-keylbl">Cause:</text><text x="160" y="610" class="t-keyval">Body exposed to FREEZING temperature</text><text x="90" y="642" class="t-keylbl">Mechanism:</text><text x="220" y="642" class="t-keyval">Solidification of body fluids + fat</text><text x="90" y="674" class="t-keylbl">Recovery:</text><text x="200" y="674" class="t-keyval">Stiffness DISAPPEARS on rewarming;</text><text x="90" y="696" class="t-keyval">rigor mortis then sets in normally</text><text x="90" y="728" class="t-keylbl">Seen in:</text><text x="170" y="728" class="t-keyval">Alpine deaths, exposure in freezers,</text><text x="90" y="750" class="t-keyval">cold-storage warehouses</text><circle class="ic" cx="770" cy="508" r="14"/><text class="t-info" x="770" y="514" text-anchor="middle">ⓘ</text></g>

<g data-node-id="sim-gas"><rect class="body-white" x="810" y="490" width="730" height="280" rx="14"/><path d="M 824,490 H 1526 A 14,14 0 0 1 1540,504 V 570 H 810 V 504 A 14,14 0 0 1 824,490 Z" fill="url(#gGreen)"/><text x="840" y="540" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">💨 4. Gas Stiffening</text><text x="840" y="610" class="t-keylbl">Cause:</text><text x="910" y="610" class="t-keyval">Accumulation of gases of decomposition</text><text x="840" y="642" class="t-keylbl">Mechanism:</text><text x="970" y="642" class="t-keyval">Gas distends tissues</text><text x="840" y="664" class="t-keyval">→ false rigidity</text><text x="840" y="696" class="t-keylbl">Seen in:</text><text x="920" y="696" class="t-keyval">Bodies in advanced decomposition</text><text x="840" y="728" class="t-keylbl">Distinguishing:</text><text x="1010" y="728" class="t-keyval">Putrefactive signs (bloating, greenish</text><text x="840" y="750" class="t-keyval">colour, smell) are present alongside</text><circle class="ic" cx="1510" cy="508" r="14"/><text class="t-info" x="1510" y="514" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="790" width="1480" height="100" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="800" y="828" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">🎯 Cadaveric spasm = ONLY mimic that proves AM activity (clutched weapon / hair / weeds)</text><text x="800" y="858" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)" text-anchor="middle">Examples — drowning victim clutching weeds · suicide victim still grasping firearm (★ pathognomonic of antemortem)</text><text x="800" y="878" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.85)" text-anchor="middle">It CONTINUES through the rigor mortis phase and disappears only with secondary relaxation.</text>

<rect x="60" y="910" width="1480" height="60" rx="10" fill="url(#gRed)"/><text x="800" y="948" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">★ &quot;CHCG&quot; mnemonic — Cadaveric spasm · Heat · Cold · Gas — 4 simulators of rigor mortis</text>
</svg>`;

const SVG_DC10 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Decomposition — Putrefaction + Casper&apos;s Dictum</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Autolysis (self) + Putrefaction (bacterial) · putrefaction = most absolute sign of death</text>

<g data-node-id="dec-autolysis"><rect class="body-white" x="60" y="120" width="730" height="280" rx="14"/><path d="M 74,120 H 776 A 14,14 0 0 1 790,134 V 200 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gBlue)"/><text x="90" y="170" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🧫 1. Autolysis</text><text x="90" y="240" class="t-keyval">Self-dissolution of body tissues by</text><text x="90" y="262" class="t-keyval">enzymes released from lysosomes after death.</text><text x="90" y="298" class="t-keylbl">Earliest organs:</text><text x="260" y="298" class="t-keyval">Pancreas, gastric mucosa</text><text x="90" y="320" class="t-keyval">(rich in hydrolytic enzymes)</text><text x="90" y="354" class="t-keylbl">Visible signs:</text><text x="220" y="354" class="t-keyval">Skin slippage, hair/nail loosening,</text><text x="90" y="376" class="t-keyval">gastromalacia, oesophagomalacia, hemolysis</text><circle class="ic" cx="770" cy="138" r="14"/><text class="t-info" x="770" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dec-putrefaction"><rect class="body-white" x="810" y="120" width="730" height="280" rx="14"/><path d="M 824,120 H 1526 A 14,14 0 0 1 1540,134 V 200 H 810 V 134 A 14,14 0 0 1 824,120 Z" fill="url(#gGreen)"/><text x="840" y="170" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🦠 2. Putrefaction</text><text x="840" y="240" class="t-keyval">Bacterial decomposition by saprophytic flora</text><text x="840" y="262" class="t-keyval">(<em>Clostridium welchii</em>, <em>E. coli</em>, Staph, Proteus...)</text><text x="840" y="298" class="t-keylbl">3 main changes:</text><text x="990" y="298" class="t-keyval">Colour · Gas · Liquefaction</text><text x="840" y="334" class="t-keylbl">Gases produced:</text><text x="1010" y="334" class="t-keyval">H₂S · CO₂ · CH₄ · NH₃ · mercaptans</text><text x="840" y="370" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="#6B7283">★ Putrefaction = MOST ABSOLUTE sign of death (cannot occur in living body).</text><circle class="ic" cx="1510" cy="138" r="14"/><text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dec-external"><rect x="60" y="420" width="730" height="370" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="90" y="460" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">👁️ External Signs (Sequence)</text><text x="90" y="510" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Summer (faster) · Winter in brackets</text><text x="90" y="545" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">⏱ <strong>12-18 hr</strong> (18-24): Greenish discolouration of</text><text x="90" y="567" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">RIGHT ILIAC FOSSA (caecum) — first external sign</text><text x="90" y="600" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">⏱ <strong>24 hr</strong> (36-48): Marbling of skin appears (sulph-</text><text x="90" y="622" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">methaemoglobin in superficial vessels)</text><text x="90" y="655" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">⏱ <strong>24-36 hr</strong>: Bloating — abdomen distended, face</text><text x="90" y="677" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">puffy, eyes bulging, scrotal swelling, tongue protrudes</text><text x="90" y="710" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">⏱ <strong>36-48 hr</strong>: Blisters · skin peeling · PM purging</text><text x="90" y="732" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">(blood-stained fluid from mouth/nose)</text><text x="90" y="765" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">⏱ <strong>48-72 hr</strong>: Liquefaction · maggot infestation</text><circle class="ic" cx="770" cy="440" r="14"/><text class="t-info" x="770" y="446" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dec-internal"><rect x="810" y="420" width="730" height="370" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="840" y="460" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🫀 Internal Signs — Order of Putrefaction</text><text x="840" y="510" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white">EARLY (soft, vascular):</text><text x="860" y="535" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">1. Brain · 2. Larynx + trachea mucosa</text><text x="860" y="557" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">3. Stomach + intestines · 4. Spleen</text><text x="860" y="579" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">5. Liver · 6. Oesophagus · 7. Diaphragm</text><text x="840" y="615" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white">LATE (firm, fibrous):</text><text x="860" y="640" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">8. Heart · 9. Lungs · 10. Kidneys</text><text x="860" y="662" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">11. Urinary bladder · 12. Uterus</text><text x="860" y="684" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">13. Prostate (LAST to decompose)</text><text x="840" y="720" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.92)">★ MLI of late-decomposing organs:</text><text x="860" y="745" font-family="Inter,system-ui,sans-serif" font-size="12" fill="rgba(255,255,255,0.88)">Uterus + prostate may yield evidence (drugs, blood) even in</text><text x="860" y="765" font-family="Inter,system-ui,sans-serif" font-size="12" fill="rgba(255,255,255,0.88)">decomposed bodies — preserved longer than other viscera.</text><circle class="ic" cx="1510" cy="440" r="14"/><text class="t-info" x="1510" y="446" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dec-casper"><rect x="60" y="810" width="1480" height="200" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)" stroke="#8E5E1F" stroke-width="3"/><text x="800" y="855" font-family="Inter,system-ui,sans-serif" font-size="24" font-weight="800" fill="white" text-anchor="middle">⭐ CASPER&apos;S DICTUM (★ HIGHLY TESTED)</text><text x="800" y="895" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="500" fill="rgba(255,255,255,0.95)" text-anchor="middle">Rate of decomposition in different media (RELATIVE)</text><text x="350" y="945" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">🌬️ AIR</text><text x="800" y="945" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">💧 WATER</text><text x="1250" y="945" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">⛰️ EARTH</text><text x="350" y="980" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">1 week</text><text x="800" y="980" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">2 weeks</text><text x="1250" y="980" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">8 weeks</text><text x="800" y="1000" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="rgba(255,255,255,0.95)" text-anchor="middle">Ratio AIR : WATER : EARTH = 1 : 2 : 8</text><circle class="ic" cx="1510" cy="828" r="14"/><text class="t-info" x="1510" y="834" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1030" width="1480" height="50" rx="10" fill="url(#gBlue)"/><text x="800" y="1062" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">🎯 Greenish RIF (first sign) → marbling → bloating → blisters → liquefaction · Same body decomposes 8× faster in air than buried in earth</text>
</svg>`;

const SVG_DC11 = `<svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Modified Decomposition — Adipocere &amp; Mummification</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Atypical preservation patterns · MLI = body identifiable long after normal decomposition would have destroyed it</text>

<g data-node-id="adip-definition"><rect class="body-white" x="60" y="120" width="730" height="430" rx="14" stroke="#3D8B5B" stroke-width="3"/><path d="M 74,120 H 776 A 14,14 0 0 1 790,134 V 200 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gGreen)"/><text x="90" y="170" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🧈 ADIPOCERE (Grave Wax)</text><text x="90" y="240" class="t-keylbl">Definition:</text><text x="200" y="240" class="t-keyval">Conversion of body fat into</text><text x="90" y="262" class="t-keyval">grey-white, soft, waxy, foul-smelling substance</text><text x="90" y="296" class="t-keylbl">Chemistry:</text><text x="200" y="296" class="t-keyval">Hydrogenation + hydrolysis of</text><text x="90" y="318" class="t-keyval">neutral fats → saturated fatty acids (palmitic, stearic)</text><text x="90" y="352" class="t-keylbl">Conditions:</text><text x="210" y="352" class="t-keyval">Moist, warm, anaerobic environment</text><text x="90" y="374" class="t-keyval">Bodies in WATER, sewers, damp graves, septic tanks</text><text x="90" y="408" class="t-keylbl">Onset:</text><text x="160" y="408" class="t-keyval">First signs in 1-2 weeks (cheeks, breasts)</text><text x="90" y="430" class="t-keyval">Complete adipocere in 3-6 months</text><text x="90" y="464" class="t-keylbl">First sites:</text><text x="200" y="464" class="t-keyval">Cheeks, breasts, buttocks, abdomen</text><text x="90" y="486" class="t-keyval">(fat-rich subcutaneous regions)</text><text x="90" y="518" class="t-keylbl">MLI:</text><text x="140" y="518" class="t-keyval">Body identifiable for months/years · facial features +</text><text x="90" y="540" class="t-keyval">injuries preserved · skin slippage, lividity still detectable</text><circle class="ic" cx="770" cy="138" r="14"/><text class="t-info" x="770" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="mum-definition"><rect class="body-white" x="810" y="120" width="730" height="430" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 824,120 H 1526 A 14,14 0 0 1 1540,134 V 200 H 810 V 134 A 14,14 0 0 1 824,120 Z" fill="url(#gOrange)"/><text x="840" y="170" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🏜️ MUMMIFICATION</text><text x="840" y="240" class="t-keylbl">Definition:</text><text x="950" y="240" class="t-keyval">Drying + shrinking of soft</text><text x="840" y="262" class="t-keyval">tissues without bacterial putrefaction</text><text x="840" y="296" class="t-keylbl">Mechanism:</text><text x="970" y="296" class="t-keyval">Rapid water loss prevents</text><text x="840" y="318" class="t-keyval">bacterial growth · tissues become hard, leathery</text><text x="840" y="352" class="t-keylbl">Conditions:</text><text x="960" y="352" class="t-keyval">Dry, hot, well-ventilated</text><text x="840" y="374" class="t-keyval">Sandy soil, desert, hot attics, low humidity</text><text x="840" y="408" class="t-keylbl">Onset:</text><text x="910" y="408" class="t-keyval">First signs in 1-2 weeks (fingers, face)</text><text x="840" y="430" class="t-keyval">Complete mummification in 3-12 months</text><text x="840" y="464" class="t-keylbl">First sites:</text><text x="950" y="464" class="t-keyval">Exposed parts — fingers, face,</text><text x="840" y="486" class="t-keyval">toes (high surface-area / low fat)</text><text x="840" y="518" class="t-keylbl">MLI:</text><text x="890" y="518" class="t-keyval">Body identifiable for years · facial features +</text><text x="840" y="540" class="t-keyval">injuries preserved · classical &quot;Egyptian mummy&quot; appearance</text><circle class="ic" cx="1510" cy="138" r="14"/><text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="modif-compare"><rect x="60" y="570" width="1480" height="240" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="610" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">⚖️ Adipocere vs Mummification — Quick Compare</text><rect x="100" y="640" width="1400" height="32" rx="6" fill="rgba(255,255,255,0.18)"/><text x="130" y="662" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Feature</text><text x="600" y="662" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Adipocere</text><text x="1050" y="662" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Mummification</text><text x="130" y="695" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Mechanism</text><text x="600" y="695" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Hydrolysis of fat → fatty acids</text><text x="1050" y="695" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Desiccation (drying)</text><text x="130" y="720" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Environment</text><text x="600" y="720" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Moist, warm, anaerobic</text><text x="1050" y="720" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Dry, hot, ventilated</text><text x="130" y="745" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Tissue affected</text><text x="600" y="745" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Subcutaneous fat</text><text x="1050" y="745" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">All soft tissues</text><text x="130" y="770" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Appearance</text><text x="600" y="770" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Soft, waxy, grey-white, foul</text><text x="1050" y="770" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Hard, leathery, brown, dry</text><text x="130" y="795" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Onset</text><text x="600" y="795" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">1-2 weeks (signs); months (full)</text><text x="1050" y="795" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">1-2 weeks (signs); months (full)</text><circle class="ic" cx="1510" cy="590" r="14"/><text class="t-info" x="1510" y="596" text-anchor="middle">ⓘ</text></g>

<g data-node-id="modif-maceration"><rect x="60" y="830" width="1480" height="140" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="800" y="868" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">👶 MACERATION (special case)</text><text x="800" y="900" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="500" fill="rgba(255,255,255,0.92)" text-anchor="middle">Aseptic autolysis of a DEAD FETUS retained in the uterus — no bacterial contamination → sterile decomposition</text><text x="800" y="925" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.88)" text-anchor="middle">Features: skin peels off in sheets · joints loose · body soft + flat · brown reddish-coloured · sweetish odour</text><text x="800" y="950" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="rgba(255,255,255,0.75)" text-anchor="middle">MLI: confirms intrauterine death (must precede expulsion by 12+ hr) · differentiates stillbirth from neonatal death</text><circle class="ic" cx="1510" cy="848" r="14"/><text class="t-info" x="1510" y="854" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_DC12 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Time of Death (TOD) Estimation</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Combine multiple postmortem changes — no single sign is precise</text>

<g data-node-id="tod-early"><rect x="60" y="120" width="1480" height="280" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="160" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">⏱ EARLY POSTMORTEM (0 – 36 hr)</text><rect x="100" y="190" width="1400" height="32" rx="6" fill="rgba(255,255,255,0.18)"/><text x="130" y="212" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Sign</text><text x="600" y="212" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Finding</text><text x="1050" y="212" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Time since death</text><text x="130" y="245" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Body temperature</text><text x="600" y="245" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Warm</text><text x="1050" y="245" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">&lt; 4-6 hr</text><text x="130" y="268" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Body temperature</text><text x="600" y="268" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Cold, ambient</text><text x="1050" y="268" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">&gt; 18-24 hr</text><text x="130" y="291" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Lividity</text><text x="600" y="291" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Patchy, blanches on pressure</text><text x="1050" y="291" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">1 – 6 hr</text><text x="130" y="314" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Lividity</text><text x="600" y="314" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Fixed (no blanching)</text><text x="1050" y="314" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">&gt; 7-8 hr</text><text x="130" y="337" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Rigor — face / neck</text><text x="600" y="337" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Just starting</text><text x="1050" y="337" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">2 – 4 hr</text><text x="130" y="360" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Rigor — whole body</text><text x="600" y="360" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Complete</text><text x="1050" y="360" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">12 hr (rule of 12)</text><text x="130" y="383" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Rigor</text><text x="600" y="383" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Disappeared (flaccid)</text><text x="1050" y="383" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">&gt; 24-36 hr</text><circle class="ic" cx="1510" cy="138" r="14"/><text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="tod-late"><rect x="60" y="420" width="1480" height="280" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="800" y="460" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">⏱ LATE POSTMORTEM (36 hr +)</text><rect x="100" y="490" width="1400" height="32" rx="6" fill="rgba(255,255,255,0.18)"/><text x="130" y="512" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Sign</text><text x="600" y="512" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Finding</text><text x="1050" y="512" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white">Time since death</text><text x="130" y="545" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Greenish discolouration RIF</text><text x="600" y="545" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">First external sign</text><text x="1050" y="545" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">12-18 hr (summer)</text><text x="130" y="568" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Marbling of skin</text><text x="600" y="568" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Prominent vessel patterns</text><text x="1050" y="568" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">24 hr (summer)</text><text x="130" y="591" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Bloating</text><text x="600" y="591" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Abdomen distended, eyes bulging</text><text x="1050" y="591" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">24-48 hr</text><text x="130" y="614" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Maggot eggs laid</text><text x="600" y="614" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">At orifices</text><text x="1050" y="614" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">18-36 hr</text><text x="130" y="637" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Maggots (larvae)</text><text x="600" y="637" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Active feeding</text><text x="1050" y="637" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">2-3 days</text><text x="130" y="660" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Adipocere (signs)</text><text x="600" y="660" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Wax in fatty areas</text><text x="1050" y="660" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">1-2 weeks</text><text x="130" y="683" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Skeletonization</text><text x="600" y="683" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">All soft tissue gone</text><text x="1050" y="683" font-family="Inter,system-ui,sans-serif" font-size="13" fill="white">Weeks-months (varies)</text><circle class="ic" cx="1510" cy="438" r="14"/><text class="t-info" x="1510" y="444" text-anchor="middle">ⓘ</text></g>

<g data-node-id="tod-other"><rect class="body-white" x="60" y="720" width="730" height="260" rx="14"/><path d="M 74,720 H 776 A 14,14 0 0 1 790,734 V 790 H 60 V 734 A 14,14 0 0 1 74,720 Z" fill="url(#gPurple)"/><text x="90" y="770" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🔬 Other Indicators</text><text x="90" y="820" class="t-keylbl">Stomach contents:</text><text x="290" y="820" class="t-keyval">food type + digestion stage —</text><text x="90" y="842" class="t-keyval">empty stomach ~4-6 hr post meal</text><text x="90" y="874" class="t-keylbl">Vitreous K⁺:</text><text x="230" y="874" class="t-keyval">linear rise with PMI — useful 24-100 hr</text><text x="90" y="906" class="t-keylbl">Eye changes:</text><text x="240" y="906" class="t-keyval">cornea hazy &gt; 10-12 hr · tache</text><text x="90" y="928" class="t-keyval">noire in 2-3 hr (eyes open)</text><text x="90" y="958" class="t-keylbl">Forensic entomology:</text><text x="310" y="958" class="t-keyval">fly larvae stage estimates days-weeks</text><circle class="ic" cx="770" cy="738" r="14"/><text class="t-info" x="770" y="744" text-anchor="middle">ⓘ</text></g>

<g data-node-id="tod-caveats"><rect class="body-white" x="810" y="720" width="730" height="260" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 824,720 H 1526 A 14,14 0 0 1 1540,734 V 790 H 810 V 734 A 14,14 0 0 1 824,720 Z" fill="url(#gRed)"/><text x="840" y="770" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">⚠️ Caveats &amp; Errors</text><text x="840" y="820" class="t-keyval">1. <strong>Never rely on ONE sign</strong> — combine multiple</text><text x="840" y="848" class="t-keyval">2. Estimates always given as a <strong>RANGE</strong>, not point</text><text x="840" y="876" class="t-keyval">3. <strong>Broken rigor</strong> (rough handling) can mislead</text><text x="840" y="904" class="t-keyval">4. <strong>PM caloricity</strong> (sepsis) can mimic warm body</text><text x="840" y="932" class="t-keyval">5. <strong>Casper&apos;s dictum</strong> — adjust for media (air/water/grave)</text><text x="840" y="964" class="t-keyval">6. Tropical Indian summer → algor mortis unreliable</text><circle class="ic" cx="1510" cy="738" r="14"/><text class="t-info" x="1510" y="744" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1000" width="1480" height="80" rx="10" fill="url(#gBlue)"/><text x="800" y="1040" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white" text-anchor="middle">🎯 TOD estimation = LIVIDITY (1-6 hr / fixed 7-8 hr) + RIGOR (Rule of 12) + ALGOR (0.4-0.7°C/hr) + DECOMPOSITION (12-18 hr greenish RIF)</text><text x="800" y="1067" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.85)" text-anchor="middle">★ Always provide a RANGE (e.g., &quot;between 6 and 12 hours&quot;), never a single value · scene + history is part of the evidence</text>
</svg>`;

const NODES = {
  'death-definition': { label: 'Death — Definition', info: '<p>"Permanent and irreversible cessation of the vital functions of the body — circulation, respiration, and nervous activity."</p><p>Death is not an instantaneous event but a PROCESS. It begins with somatic (clinical) death — cessation of cardiopulmonary function — and ends with molecular (cellular) death of all individual cells.</p><p>The modern medico-legal definition centres on irreversible cessation of <strong>brainstem function</strong>. India recognises this under the <strong>Transplantation of Human Organs Act 1994</strong> — brainstem death is legally equivalent to death.</p>', tags: ['Process not event', 'Brainstem definition'] },
  'death-somatic': { label: 'Somatic Death (Clinical Death)', info: '<p>Permanent cessation of the body as an <strong>integrated unit</strong> — heart, lungs and brain all stop functioning.</p><p><strong>Diagnosed by:</strong></p><ul><li>Absent pulse and heart sounds</li><li>Absent respiration (no chest movement)</li><li>Absent reflexes (corneal, pupillary, gag)</li><li>Fixed dilated pupils, not reacting to light</li><li>Flat ECG (asystole)</li></ul><p>Synonyms: clinical death, systemic death. Marks the <strong>start</strong> of the dying process — molecular (cellular) death follows gradually over hours.</p>', tags: ['Clinical/systemic', 'Heart-lung-brain stop'] },
  'death-cellular': { label: 'Cellular / Molecular Death', info: '<p>Death of <strong>individual cells and tissues</strong> — occurs gradually over hours after somatic death.</p><p><strong>Order:</strong></p><ul><li><strong>Nervous tissue</strong> dies fastest — neurons within ~5 minutes</li><li><strong>Muscle</strong> ~2 hours</li><li><strong>Connective tissue / fibrous tissue</strong> — LAST to die</li></ul><p><strong>Significance:</strong> The window between somatic and molecular death is the period during which organs can be retrieved for transplantation (heart 4-6 hr, liver 12 hr, kidneys 24-36 hr).</p>', tags: ['Cells die at different rates', 'Organ retrieval window'] },
  'death-brain': { label: 'Brain Death', info: '<p>Irreversible loss of brain function while heart + lungs may still be supported on a ventilator.</p><p><strong>3 sub-types:</strong></p><ul><li><strong>Cortical (cerebral)</strong> — loss of higher functions; brainstem intact; = persistent vegetative state (NOT legally dead)</li><li><strong>Brainstem</strong> — loss of brainstem reflexes + spontaneous respiration; = LEGAL DEATH in India</li><li><strong>Whole brain</strong> — combination of both; final stage of severe anoxic injury</li></ul><p><strong>India legal basis:</strong> Transplantation of Human Organs Act 1994 recognises brainstem death as death, enabling cadaveric organ donation.</p>', tags: ['3 subtypes', 'THO Act 1994'] },
  'death-suspended': { label: 'Suspended Animation', info: '<p>A state where vital signs are so reduced they appear absent — but the person is <strong>still alive</strong>.</p><p><strong>Seen in:</strong></p><ul><li>Near-drowning (esp. cold water)</li><li>Electrocution</li><li>Hypothermia</li><li>Cholera, narcotic poisoning</li><li>Newborns ("apparent death")</li><li>Voluntary in yogis (claimed)</li></ul><p><strong>⚠️ MUST be excluded</strong> before declaring death — risk of premature burial. The classical tests (Magnus, Diaphanous, Icard&apos;s fluorescein) were designed historically to detect circulation in such cases.</p>', tags: ['Apparent death', 'Exclude before declaring'] },
  'death-signs': { label: 'Signs Confirming Death', info: '<p>A doctor confirms death using:</p><ul><li><strong>Cessation of respiration</strong> — 5+ minute auscultation of chest, no breath sounds, no chest movement, mirror test, feather test</li><li><strong>Cessation of circulation</strong> — no pulse (radial, carotid, femoral), no heart sounds, flat ECG, Icard&apos;s test, Magnus test</li><li><strong>Loss of brainstem reflexes</strong> — fixed dilated pupils, absent corneal, gag, oculo-vestibular reflexes</li><li><strong>Cooling of body (algor mortis)</strong></li><li><strong>Postmortem lividity, rigor mortis</strong> — early changes</li><li><strong>★ Putrefaction</strong> — most absolute sign of death (cannot occur in living tissue)</li></ul>', tags: ['Putrefaction = absolute', 'Multiple confirmatory signs'] },

  'bd-cortical': { label: 'Cortical Brain Death (PVS)', info: '<p>Synonyms: <strong>Cerebral brain death · Persistent Vegetative State (PVS)</strong>.</p><p><strong>Lost:</strong> Higher cortical functions — awareness, cognition, voluntary movement.</p><p><strong>Preserved:</strong> Brainstem function — so respiration + cardiac activity continue spontaneously.</p><p><strong>Causes:</strong> Hypoxic insult (cardiac arrest, near-drowning), traumatic insult (head injury), or toxic insult.</p><p><strong>Clinical picture:</strong> Patient is irreversibly comatose but the body is "alive" — heart beats, lungs breathe, may even exhibit reflex eye opening / grimacing. Called "living cadavers".</p><p><strong>Legal status:</strong> NOT legally dead in India. Withdrawing life support is ethically problematic — requires Supreme Court rulings (Aruna Shanbaug case 2011 permitted passive euthanasia under strict guidelines).</p>', tags: ['PVS', 'Not legally dead'] },
  'bd-brainstem': { label: 'Brainstem Death (★ Legal Death)', info: '<p>The brainstem houses the vital centres for respiration, vasomotor control, consciousness (reticular activating system), and all cranial-nerve reflexes.</p><p><strong>Definition (THO Act 1994):</strong> "Brainstem death means the stage at which all functions of the brainstem have permanently and irreversibly ceased and is so certified."</p><p><strong>Lost:</strong> Respiration, all brainstem reflexes, consciousness.</p><p><strong>Preserved:</strong> Only what a ventilator can sustain — cardiac activity briefly.</p><p><strong>Legal status:</strong> = DEATH in India under THO Act 1994.</p><p><strong>★ Triggers:</strong> Eligibility for cadaveric organ donation; legal withdrawal of life support; determination of time of death for inheritance/insurance.</p>', tags: ['Legal death in India', 'THO Act 1994 trigger'] },
  'bd-whole': { label: 'Whole Brain Death', info: '<p>Synonym: <strong>Mixed brain death</strong>.</p><p><strong>Definition:</strong> Combination of cortical + brainstem death — total cessation of all brain function.</p><p><strong>Mechanism:</strong> Brain death occurs in steps — the cerebral cortex dies first (most sensitive to anoxia), followed by midbrain, then brainstem.</p><p>The final endpoint of severe global brain injury — anoxic encephalopathy, massive intracranial haemorrhage, severe head trauma.</p>', tags: ['Cortex + brainstem combined'] },
  'bd-criteria': { label: 'Diagnostic Criteria (THO Act 1994)', info: '<p><strong>Prerequisites (all required):</strong></p><ol><li>Deep coma with a <strong>KNOWN cause</strong> of irreversible brainstem damage (prolonged hypoxia, severe trauma, illness or toxic insult must be established)</li><li>Exclusion of reversible causes:<ul><li>Hypothermia (core temp &lt; 32.2 °C / 90 °F)</li><li>CNS depressant drugs (barbiturates, benzodiazepines, opioids)</li><li>Metabolic / endocrine disturbances</li><li>Alcohol intoxication</li></ul></li></ol><p><strong>Requirements:</strong></p><ol start="3"><li>ALL brainstem reflexes absent</li><li>NO spontaneous respiration (apnoea test — no breath even with PaCO₂ &gt; 60 mmHg)</li><li>Examined <strong>TWICE</strong> by board, at <strong>interval of 6 hours</strong></li><li>Brain-death certificate signed by ALL 4 board members</li></ol>', tags: ['THO Act 1994', '6-hr re-examination'] },
  'bd-reflexes': { label: 'Brainstem Reflexes (5)', info: '<p>All 5 brainstem reflexes must be <strong>ABSENT</strong> in brainstem death:</p><table><tr><th>Reflex</th><th>Afferent CN</th><th>Efferent CN</th></tr><tr><td>1. Pupillary (light)</td><td>II (Optic)</td><td>III (Oculomotor)</td></tr><tr><td>2. Corneal</td><td>V (Trigeminal)</td><td>VII (Facial)</td></tr><tr><td>3. Vestibulo-ocular (caloric)</td><td>VIII (Vestibular)</td><td>III + VI</td></tr><tr><td>4. Grimace</td><td>V (Trigeminal)</td><td>VII (Facial)</td></tr><tr><td>5. Gag / Cough</td><td>IX (Glossopharyngeal)</td><td>X (Vagus)</td></tr></table><p><strong>+ Apnoea test:</strong> no respiratory effort even when PaCO₂ &gt; 60 mmHg (preoxygenate with 100% O₂, disconnect ventilator, wait 8-10 min).</p><p><strong>Mnemonic: "PCVGG"</strong> — Pupillary, Corneal, Vestibulo-ocular, Grimace, Gag.</p>', tags: ['5 reflexes', 'All absent in BSD'] },
  'bd-board': { label: 'Board of Experts (4 members)', info: '<p>Per THO Act 1994, brainstem death must be certified by a <strong>board of 4 medical experts</strong>:</p><ol><li><strong>RMP in-charge of the hospital</strong> where brainstem death occurred</li><li><strong>Independent specialist RMP</strong> — nominated by hospital in-charge from a panel approved by the appropriate authority</li><li><strong>Neurologist OR neurosurgeon</strong> — nominated from the approved panel</li><li><strong>RMP treating the patient</strong> whose brainstem death has occurred</li></ol><p>The certification is signed by ALL FOUR members. Two examinations are required, separated by 6 hours.</p>', tags: ['4-member board', '6-hr interval'] },

  'mode-coma': { label: 'Coma — Mode of Death', info: '<p><strong>Definition:</strong> Failure of brain function as the mode of death.</p><p><strong>Pathway:</strong> Loss of consciousness → loss of brainstem control of respiration/circulation → death.</p><p><strong>Causes:</strong></p><ul><li>CNS depressants — barbiturates, benzodiazepines, opioids, alcohol</li><li>Head injury — intracranial haemorrhage, contusion</li><li>Stroke — ischaemic or haemorrhagic</li><li>Hypoxia (cerebral)</li><li>Hepatic encephalopathy, uraemic encephalopathy</li><li>Hypoglycaemia</li><li>Poisoning (especially CNS depressants)</li></ul><p><strong>PM findings:</strong> Cerebral oedema, congestion ± the underlying lesion (haemorrhage, infarct, tumour).</p>', tags: ['Brain function failure'] },
  'mode-syncope': { label: 'Syncope — Mode of Death', info: '<p><strong>Definition:</strong> Sudden stopping of the heart as the mode of death.</p><p><strong>Pathway:</strong> Cardiac arrest → cerebral anoxia → death within minutes.</p><p><strong>Causes:</strong></p><ul><li>Myocardial infarction</li><li>Arrhythmias (VF, asystole)</li><li>Vasovagal syncope (severe form)</li><li>Orthostatic hypotension</li><li>Haemorrhagic shock</li><li>Cardiac tamponade, pulmonary embolism</li><li>Hypoxia (cardiac)</li></ul><p><strong>PM findings:</strong> Empty L heart, dark fluid blood in chambers, ± underlying cardiac pathology.</p>', tags: ['Heart failure'] },
  'mode-asphyxia': { label: 'Asphyxia — Mode of Death', info: '<p><strong>Definition:</strong> Failure of respiration as the mode of death.</p><p><strong>Pathway:</strong> Impaired O₂ + ↑ CO₂ → cerebral hypoxia → cardiac arrest.</p><p><strong>Causes:</strong></p><ul><li>Mechanical — hanging, strangulation, suffocation, drowning, foreign body aspiration</li><li>Chemical — CO poisoning, cyanide, methane displacement</li><li>Pathological — laryngospasm, pneumonia, severe asthma, pulmonary oedema</li><li>Pneumothorax</li></ul><p><strong>PM findings:</strong> Tardieu spots (petechial haemorrhages), cyanosis, congestion of face/viscera, dark fluid blood, right heart dilatation. Detailed in Ch 15 (Violent Asphyxia).</p>', tags: ['Respiration failure', 'Cross-ref Ch 15'] },
  'mode-tripod': { label: 'Bichat&apos;s Tripod of Life', info: '<p>French anatomist <strong>Marie François Xavier Bichat</strong> (1771-1802) described 3 vital functions whose collapse causes death — the "tripod of life":</p><ol><li><strong>BRAIN</strong> → failure → Coma</li><li><strong>HEART</strong> → failure → Syncope</li><li><strong>LUNGS</strong> → failure → Asphyxia</li></ol><p>Failure of ANY ONE eventually drags the other two down — coma → respiratory depression → cardiac arrest; cardiac arrest → cerebral anoxia → respiratory arrest.</p><p>This conceptual framework remains the basis of how doctors describe the MECHANISM (mode) of death even today.</p>', tags: ['Brain · Heart · Lungs', 'Bichat 1800'] },
  'mode-vagal': { label: 'Vagal Inhibition', info: '<p>A sudden form of cardiac arrest mediated by <strong>vagus nerve overactivity</strong> — reflex from pressure on baroreceptors or visceral structures.</p><p><strong>Triggers:</strong></p><ul><li>Pressure on carotid sinus (mild neck pressure, throttling)</li><li>Pressure on epigastrium (sudden blow)</li><li>Unexpected cold-water immersion (hydrocution / immersion drowning)</li><li>Sudden emotional shock</li><li>Sudden distension of viscera (cervix, larynx during instrumentation)</li><li>Eye-ball pressure</li></ul><p><strong>Mechanism:</strong> Vagal stimulation → bradycardia → cardiac arrest → death.</p><p><strong>⚠️ Death is SUDDEN</strong> — few or no asphyxial signs. Mechanism is vagal, not pure asphyxia. Important MLI: a relatively minor injury (light blow to neck) can cause vagal death — important in homicide investigations.</p>', tags: ['Reflex cardiac arrest', 'Sudden, few signs'] },

  'man-natural': { label: 'Natural Death', info: '<p>Death from <strong>disease or internal pathology only</strong> — no external trauma or unnatural agency.</p><p><strong>Examples:</strong></p><ul><li>Myocardial infarction</li><li>Stroke (ischaemic / haemorrhagic)</li><li>Cancer</li><li>Pneumonia, sepsis</li><li>Kidney / liver failure</li><li>Old age (multi-organ failure)</li></ul><p>If death is clearly from documented disease and the doctor has been attending the patient, no police involvement is needed — the doctor issues the death certificate directly.</p><p><strong>Sudden natural death:</strong> may still require inquest if there is doubt about the natural origin.</p>', tags: ['Disease only', 'No inquest needed'] },
  'man-accident': { label: 'Accidental Death', info: '<p>Death from an <strong>unintended external event</strong> — neither deliberate (suicide/homicide) nor from disease.</p><p><strong>Examples:</strong></p><ul><li>Road traffic accident (RTA)</li><li>Fall from height</li><li>Accidental drowning</li><li>Accidental burns (kitchen fire, scalds)</li><li>Workplace injury (industrial accident)</li><li>Electrocution (accidental contact)</li><li>Accidental poisoning (carbon monoxide from faulty heater)</li></ul><p><strong>MLI:</strong> Always an unnatural death — police inquest under §194 BNSS 2023 required.</p>', tags: ['Unintended', 'Inquest required'] },
  'man-suicide': { label: 'Suicide', info: '<p><strong>Self-inflicted death</strong> by an individual capable of understanding the nature and consequences of the act.</p><p><strong>Common methods in India:</strong></p><ul><li>Hanging (most common)</li><li>Poisoning — organophosphate, aluminium phosphide</li><li>Drowning</li><li>Self-immolation (burns)</li><li>Firearm</li><li>Jumping from height</li><li>Drug overdose</li></ul><p><strong>Suicide pointers at scene/autopsy:</strong></p><ul><li>Suicide note</li><li>Hesitation marks (tentative cuts) on wrist</li><li>Cadaveric spasm clutching weapon</li><li>Scene typical (privacy, premeditation)</li><li>Mechanism accessible to dominant hand</li></ul><p><strong>Legal:</strong> Attempted suicide decriminalised in India under Mental Healthcare Act 2017 §115.</p>', tags: ['Self-inflicted', 'Hanging most common in India'] },
  'man-homicide': { label: 'Homicide', info: '<p><strong>Killing of one human being by another</strong> — covers murder (intent), culpable homicide not amounting to murder, and manslaughter.</p><p><strong>Common methods:</strong></p><ul><li>Strangulation (throttling, ligature)</li><li>Stab wounds, gunshot wounds</li><li>Poisoning (arsenic historically; organophosphate currently)</li><li>Blunt trauma (head injury)</li><li>Smothering (especially infants)</li><li>Burning (dowry deaths)</li></ul><p><strong>Homicide pointers at scene/autopsy:</strong></p><ul><li>Defence wounds on hands, forearms, face</li><li>Multiple wounds, atypical sites (back, between scapulae)</li><li>Disturbed scene, signs of struggle</li><li>Missing valuables (robbery-homicide)</li><li>Restraint marks (gagged, bound)</li></ul><p><strong>Legal:</strong> §103 BNS 2023 (murder, replacing §302 IPC) · §105 BNS 2023 (culpable homicide not amounting to murder, replacing §304 IPC).</p>', tags: ['Killed by another', 'Defence wounds key'] },
  'man-undetermined': { label: 'Undetermined Manner', info: '<p>The CAUSE of death is established (e.g., gunshot wound, drowning, drug overdose) but the MANNER (whether suicide, accident, or homicide) cannot be decided on available evidence.</p><p><strong>Common scenarios:</strong></p><ul><li>Body found in water — drowning confirmed but cannot tell suicide vs accident vs homicide</li><li>Drug overdose — therapeutic accidental vs suicidal vs given by another</li><li>Isolated gunshot wound where scene is disturbed/cleaned</li><li>Decomposed bodies where scene evidence is lost</li></ul><p>The autopsy surgeon may give an opinion but should not over-commit when evidence is insufficient. The legal manner ultimately is for the magistrate to decide on totality of evidence.</p>', tags: ['Cause known, manner unclear'] },
  'man-cause-vs-manner': { label: 'Cause vs Mode vs Manner', info: '<p>3 distinct concepts often confused:</p><ul><li><strong>CAUSE OF DEATH (proximate)</strong> = the disease or injury that initiated the chain leading to death · e.g., gunshot wound to chest</li><li><strong>MODE OF DEATH</strong> = the functional mechanism by which death occurred · e.g., haemorrhagic shock (cardiovascular collapse / syncope)</li><li><strong>MANNER OF DEATH</strong> = circumstantial / legal category · e.g., suicide</li></ul><p><strong>Worked example:</strong></p><ul><li>A man shoots himself in the chest.</li><li>Cause: gunshot wound to chest</li><li>Mode: haemorrhagic shock (syncope-type)</li><li>Manner: suicide</li></ul><p>The doctor opines on CAUSE and MODE; the magistrate decides MANNER.</p>', tags: ['3 distinct concepts'] },
  'man-suicide-vs-homicide': { label: 'Suicide vs Homicide — Clues', info: '<p><strong>SUICIDE pointers:</strong></p><ul><li>Hesitation marks / tentative cuts on wrist (gradual psychological build-up)</li><li>Site accessible to victim&apos;s dominant hand</li><li>Single mechanism, single wound (esp. in cut throat)</li><li>Suicide note (~10-30% of suicides)</li><li>Cadaveric spasm clutching weapon</li><li>Scene typical — privacy, premeditation, locked from inside</li></ul><p><strong>HOMICIDE pointers:</strong></p><ul><li>Defence wounds on hands / forearms (victim warding off attack)</li><li>Multiple wounds, atypical sites (back, between scapulae)</li><li>Scene disturbed, signs of struggle</li><li>Missing valuables (robbery motive)</li><li>Restraint marks (gagging, binding)</li><li>Injuries inconsistent with self-infliction (e.g., chops on back of head)</li></ul>', tags: ['Differentiating clues'] },

  'seq-immediate': { label: 'Immediate Changes after Death', info: '<p><strong>Timing:</strong> 0 → minutes (corresponds to somatic / clinical death).</p><p><strong>Changes:</strong></p><ol><li><strong>Stoppage of nervous activity</strong> — coma, areflexia, dilated fixed pupils. Tested by: pupillary, corneal, gag reflexes.</li><li><strong>Stoppage of respiration</strong> — no chest movement; tested by: feather test (no movement of feather in front of nostril), mirror test (no fogging on cold mirror), Winslow&apos;s test (no ripple on water bowl placed on chest).</li><li><strong>Stoppage of circulation</strong> — no pulse (radial, brachial, femoral, carotid); no heart sounds on auscultation (auscultate ≥ 1 min); flat ECG. Older tests: Magnus test (finger ligature), Icard&apos;s test (subcutaneous fluorescein), pressure test, diaphanous test, cut test, heat test.</li></ol>', tags: ['= Somatic death', 'Classical bedside tests'] },
  'seq-early': { label: 'Early Changes after Death', info: '<p><strong>Timing:</strong> minutes → ~36 hours (corresponds to molecular / cellular death).</p><p><strong>Changes:</strong></p><ol><li><strong>Eye changes</strong> — corneal haziness (10-12 hr), tache noire (drying of exposed sclera, 2-3 hr), ↓ ocular tension, fundus changes (segmented retinal vessels), pupil shape alteration</li><li><strong>Skin changes</strong> — pallor, loss of elasticity, contact flattening + pallor, cutis anserina</li><li><strong>Algor mortis</strong> — cooling of body (~0.4-0.7 °C/hr in India)</li><li><strong>Postmortem lividity</strong> — purplish-blue dependent discolouration; fixes at ~7-8 hr</li><li><strong>Rigor mortis</strong> — Rule of 12 (12 hr to develop, 12 hr stays, 12 hr to pass off)</li><li><strong>Changes in body fluids</strong> — vitreous K⁺ rises linearly</li></ol>', tags: ['Minutes-36 hr', 'Multiple TOD markers'] },
  'seq-late': { label: 'Late Changes after Death', info: '<p><strong>Timing:</strong> 36 hours onwards.</p><p><strong>Normal decomposition:</strong></p><ol><li>Greenish discolouration of RIF (12-18 hr summer)</li><li>Marbling of skin (24 hr)</li><li>Bloating (24-48 hr)</li><li>Blisters, skin peeling, PM purging (36-48 hr)</li><li>Maggot infestation (after egg laying at 18-36 hr)</li><li>Liquefaction (3-7 days)</li><li>Skeletonization (weeks-months)</li></ol><p><strong>Modified decomposition:</strong></p><ul><li><strong>Adipocere</strong> — moist/warm/anaerobic conditions → fat → grey-white wax (1-2 wk signs)</li><li><strong>Mummification</strong> — dry/hot conditions → desiccation → leathery brown body (1-2 wk signs)</li></ul>', tags: ['36 hr+', 'Includes modified types'] },
  'seq-timeline': { label: 'TOD Timeline — Integration', info: '<p>The classical timeline integrating multiple PM markers for TOD estimation:</p><table><tr><th>Time</th><th>Marker</th></tr><tr><td>0 min</td><td>Somatic death</td></tr><tr><td>2 hr</td><td>Cooling + lividity begin; tache noire visible</td></tr><tr><td>6 hr</td><td>Lividity widespread; rigor reaches whole body</td></tr><tr><td>7-8 hr</td><td>Lividity fixes (no blanching on pressure)</td></tr><tr><td>12 hr</td><td>Rigor complete (Rule of 12)</td></tr><tr><td>12-18 hr (summer)</td><td>Greenish discolouration RIF (1st putrefactive sign)</td></tr><tr><td>24 hr</td><td>Marbling; rigor begins to pass off</td></tr><tr><td>36 hr</td><td>Rigor mostly gone; bloating starts</td></tr><tr><td>48-72 hr</td><td>Blisters, peeling, liquefaction</td></tr><tr><td>1-2 wk</td><td>Adipocere / mummification signs (if conditions favour)</td></tr><tr><td>Weeks-months</td><td>Skeletonization</td></tr></table><p>★ Always combine multiple markers — never rely on a single sign for TOD estimation.</p>', tags: ['Integrated timeline'] },

  'algor-definition': { label: 'Algor Mortis — Definition', info: '<p><strong>Algor mortis</strong> = the progressive cooling of the body after death.</p><p>(Latin: <em>algor</em> = coldness; <em>mortis</em> = of death.)</p><p><strong>Why it happens:</strong></p><ul><li>After death there is <strong>no heat generation</strong> — all metabolism stops</li><li>Heat-regulating centre (hypothalamus) is inactive</li><li>Heat is constantly lost to environment until body reaches ambient temperature</li></ul><p>Body temperature falls progressively until equilibration with ambient.</p>', tags: ['Cooling after death'] },
  'algor-mechanism': { label: 'Algor Mortis — Heat Loss Mechanisms', info: '<p>Heat is lost from the body surface by 3 mechanisms simultaneously:</p><ol><li><strong>Conduction</strong> — direct contact transfer (body to ground, mattress). Also internal organs cool by conduction from skin inward.</li><li><strong>Convection</strong> — heat carried away by moving air currents (faster cooling in breeze).</li><li><strong>Radiation</strong> — infrared heat radiated to surrounding objects/walls.</li></ol><p>Proportions vary with body position, clothing, surface temperature, ventilation.</p>', tags: ['3 mechanisms'] },
  'algor-curve': { label: 'Cooling Curve — Sigmoid Pattern', info: '<p>Body cooling does NOT follow a simple exponential curve. Newton&apos;s law of cooling (designed for inert bodies) does not strictly apply because a cadaver is composite tissue (skin, fat, muscle, fluid, bone).</p><p><strong>Actual curve = "sigmoid" (inverted S):</strong></p><ol><li><strong>Initial plateau</strong> (~3-4 hr) — inner core temperature barely falls. Surface cools but the deep core is insulated.</li><li><strong>Steep linear fall</strong> (~9-12 hr) — once surface has cooled, steady heat flow from core establishes; core temp drops at constant rate.</li><li><strong>Final plateau</strong> — body reaches ambient temperature; cooling stops.</li></ol><p>This is why a single temperature reading at any one timepoint can be misleading — serial readings give better TOD estimates.</p>', tags: ['Sigmoid not exponential', 'Newton doesn&apos;t apply'] },
  'algor-rate': { label: 'Rate of Cooling — India', info: '<p>Average rate of fall of <strong>inner core temperature</strong> in India:</p><p style="font-size: 1.2em;"><strong>0.4 – 0.7 °C per hour</strong> (≈ 0.8 – 1.3 °F per hour).</p><p><strong>Marshall &amp; Hore formula</strong> (temperate climates):</p><p>TOD (hr) ≈ (Normal body temp − Rectal temp) / Rate of fall</p><p><strong>Tropical caveat:</strong> In Indian summer, ambient temp may exceed body temp → no cooling, or even heating (postmortem caloricity). Algor mortis is therefore <strong>unreliable in hot months</strong> — combine with other markers.</p>', tags: ['0.4-0.7 °C/hr India', 'Marshall-Hore formula'] },
  'algor-sites': { label: 'Temperature Recording Sites', info: '<p><strong>Preferred site:</strong> <strong>Rectum</strong> — insert thermometer ~4 inches (10 cm) above anus into rectal cavity. Reflects inner core temperature well.</p><p><strong>Alternative:</strong> Sub-hepatic region (intra-abdominal puncture, used in autopsy setting).</p><p><strong>Avoid:</strong> Skin / axillary — reflect surface temperature only, fall faster, poor TOD correlation.</p><p><strong>Instrument:</strong> Long chemical thermometer (~25 cm) with graduation 0 – 50 °C. Hourly serial recordings give better TOD estimate than a single reading.</p>', tags: ['Rectum preferred', '25 cm thermometer'] },
  'algor-factors': { label: 'Factors Affecting Cooling', info: '<p><strong>Faster cooling:</strong></p><ul><li>Low ambient temperature</li><li>Thin body / low fat (no insulation)</li><li>Infant / child (high surface area : mass ratio)</li><li>Undressed body</li><li>Air movement (breeze, fan)</li><li>Death in water (★ Casper&apos;s dictum — water cools 4× faster than air)</li></ul><p><strong>Slower cooling:</strong></p><ul><li>High ambient temperature</li><li>Obese body (fat insulates)</li><li>Adults (lower SA:mass)</li><li>Clothed / wrapped in blanket</li><li>Still air, enclosed space</li><li>Death in deep grave (8× slower than air)</li></ul><p><strong>Casper&apos;s dictum (rate of cooling/decomposition):</strong> Water : Air : Earth = <strong>4 : 2 : 1</strong>.</p>', tags: ['Casper&apos;s 4:2:1', 'Many modifiers'] },
  'algor-caloricity': { label: 'Postmortem Caloricity', info: '<p><strong>Postmortem caloricity</strong> = a paradoxical RISE (not fall) of body temperature after death, lasting up to ~2 hours.</p><p><strong>Causes:</strong></p><ul><li><strong>Postmortem glycogenolysis</strong> (universal but small — adds ~2 °C briefly)</li><li><strong>Septicaemia / infectious diseases</strong> — bacterial heat production continues after death</li><li><strong>Sunstroke</strong> — heat regulation centre disturbed</li><li><strong>Pontine haemorrhage</strong> — central thermoregulatory failure</li><li><strong>Strychnine / tetanus</strong> — sustained muscle activity generates heat</li></ul><p><strong>MLI:</strong> Body may feel WARM long after death — do not assume recent death without other corroborating signs.</p>', tags: ['Temperature RISES', 'Sepsis, sunstroke, strychnine'] },

  'liv-definition': { label: 'Lividity — Definition + Synonyms', info: '<p><strong>Postmortem lividity</strong> = purplish-blue or reddish-blue discolouration of the skin due to settling of blood by gravity into dependent, dilated, toneless capillaries and small veins of the rete mucosum.</p><p>The blood is no longer being pumped — it pools in the lowest parts of the body.</p><p><strong>Synonyms:</strong></p><ul><li>Livor mortis</li><li>Hypostasis</li><li>Suggilation</li><li>Postmortem staining</li><li>Vibices (when seen as patches between bands of contact pallor)</li></ul>', tags: ['Multiple synonyms'] },
  'liv-formation': { label: 'Formation Timeline', info: '<p><strong>Onset:</strong> Postmortem staining starts appearing in small patches over dependent body parts by <strong>end of 1st hour</strong> after death.</p><p><strong>Spread:</strong> Patches enlarge and coalesce into uniformly stained areas over <strong>5-6 hours</strong>.</p><p><strong>Fixation:</strong> By approximately <strong>7-8 hours</strong> (range 6-12 hr), the lividity becomes "fixed" — pressure no longer blanches it.</p><p><strong>Disappearance:</strong> With onset of decomposition, lividity disintegrates and disappears.</p><p>Lividity is the <strong>earliest visible postmortem change</strong> — useful for early TOD estimation.</p>', tags: ['1 hr onset', '5-6 hr uniform', '7-8 hr fixed'] },
  'liv-fixation': { label: 'Fixation Test (★)', info: '<p><strong>Test:</strong> Press the livid area with thumb for ~30 seconds.</p><p><strong>NOT fixed (early, &lt; ~7 hr):</strong> Pressure blanches the area (livor temporarily disappears, then refills). Means lividity will redistribute if body is moved.</p><p><strong>FIXED (&gt; ~7-8 hr):</strong> No blanching — colour persists despite pressure. Lividity is set in place; further movement will NOT redistribute it.</p><p><strong>★ MLI:</strong> If lividity pattern does not match the body&apos;s found position (e.g., lividity on back but body found prone), the body was moved AFTER lividity fixed → suggests scene tampering.</p>', tags: ['30-sec thumb pressure', 'Scene tampering clue'] },
  'liv-colours': { label: 'Colour of Lividity → Cause of Death', info: '<p>The colour of postmortem lividity can suggest the cause of death:</p><table><tr><th>Cause</th><th>Colour</th><th>Pigment / Mechanism</th></tr><tr><td>Normal (asphyxial)</td><td>Purplish / reddish-blue</td><td>Deoxyhaemoglobin</td></tr><tr><td><strong>Carbon monoxide</strong></td><td><strong>Cherry-pink</strong></td><td>Carboxyhaemoglobin (HbCO)</td></tr><tr><td><strong>Cyanide</strong></td><td>Bright cherry-red</td><td>Excess oxygenated blood (O₂ unutilized)</td></tr><tr><td>Refrigeration / Hypothermia</td><td>Pinkish</td><td>O₂ retained in cold cutaneous blood</td></tr><tr><td>Hydrogen sulphide / Putrefaction</td><td>Greenish</td><td>Sulphaemoglobin</td></tr><tr><td>Sodium chlorate / Nitrites / Aniline</td><td>Chocolate-brown</td><td>Methaemoglobin</td></tr><tr><td>Fluoroacetate</td><td>Pink/cherry-red</td><td>Excess oxygenated blood</td></tr></table><p>★ Cherry-pink lividity is the classic clue for <strong>CO poisoning</strong>.</p>', tags: ['Cherry-pink = CO', 'Diagnostic clue'] },
  'liv-patterns': { label: 'Distribution Patterns', info: '<p>Lividity pools in the most dependent parts:</p><ul><li><strong>Supine body</strong> — back, buttocks, posterior limbs (with contact pallor at scapulae, sacrum, calves)</li><li><strong>Prone body</strong> — face, anterior chest, abdomen</li><li><strong>Hanging body</strong> — lower limbs and hands (called <strong>glove-and-stocking</strong> pattern)</li><li><strong>Sitting</strong> — buttocks and lower limbs</li></ul><p><strong>Contact pallor:</strong> Pale areas where skin is pressed against ground/surface — vessels emptied by direct pressure cannot fill with blood.</p><p><strong>Vibices:</strong> When lividity appears as broken patches due to creases / clothing folds.</p>', tags: ['Glove-stocking hanging', 'Contact pallor'] },
  'liv-mli': { label: 'Medico-Legal Importance', info: '<p>The 4 major MLI uses of postmortem lividity:</p><ol><li><strong>Sign of death</strong> — earliest reliable postmortem change after death.</li><li><strong>Time since death</strong> — fixation at ~7-8 hours gives a useful TOD anchor.</li><li><strong>Position of body at death</strong> — pattern shows posture; if pattern doesn&apos;t match found position, body was moved AFTER lividity fixed.</li><li><strong>Cause of death</strong> — colour suggests CO (cherry-pink), cyanide (cherry-red), refrigeration (pinkish), nitrites (chocolate-brown), etc.</li></ol>', tags: ['4 MLI uses'] },

  'rigor-definition': { label: 'Rigor Mortis — Definition', info: '<p><strong>Rigor mortis</strong> = stiffness of muscles (with some shortening) of the dead body that follows the period of primary flaccidity.</p><p>(Latin: <em>rigor</em> = rigidity; <em>mortis</em> = of death.)</p><p>Synonyms: cadaveric rigidity.</p><p>Caused by ATP depletion in muscle → irreversible actin-myosin cross-linkage → muscle gel formation.</p><p>The appearance of rigor mortis indicates that <strong>molecular (cellular) death</strong> has occurred at the cellular level.</p>', tags: ['= Molecular death'] },
  'rigor-mechanism': { label: 'Mechanism of Rigor Mortis', info: '<p>Step-by-step pathophysiology:</p><ol><li>In life, <strong>ATP</strong> is needed both to maintain the relaxed state (calcium pumped out of myofibril) and to enable contraction (cross-bridge cycling).</li><li>After death, oxygen supply ceases → no aerobic ATP synthesis.</li><li>Muscle relies on anaerobic glycogenolysis → lactic acid + phosphate accumulate.</li><li>When ATP falls to ~95% of normal → extensibility starts to decline.</li><li>When ATP falls to ~15% of normal → muscle loses softness, elasticity, extensibility.</li><li>Actin + myosin form irreversible <strong>acto-myosin gel</strong> → muscle stiffens with slight shortening.</li><li>Rigor persists until <strong>lysosomal proteases</strong> destroy the muscle proteins (autolysis → onset of decomposition) → secondary relaxation.</li></ol>', tags: ['ATP depletion', 'Acto-myosin gel'] },
  'rigor-march': { label: 'March of Rigor (Onset Order)', info: '<p>Onset of rigor follows a characteristic <strong>top-down sequence</strong>:</p><ol><li><strong>Involuntary muscles first</strong> — heart (at end of 1st hour summer), then iris (pupils may become unequal)</li><li><strong>Eyelids</strong> — orbicularis oculi (in voluntary muscles, this is the first)</li><li><strong>Face → neck → jaw</strong></li><li><strong>Trunk → upper limbs</strong> (shoulder → elbow → wrist → hand)</li><li><strong>Lower limbs</strong> (hip → knee → ankle → foot)</li><li><strong>Small muscles of hands and feet — LAST</strong></li></ol><p><strong>Disappearance follows the SAME order</strong> — first appearing → first disappearing. Hence the muscles last to develop rigor are also the last to lose it.</p>', tags: ['Top-down spread', 'First in, first out'] },
  'rigor-rule12': { label: 'Rule of 12 (★ Highly Tested)', info: '<p><strong>Rule of 12</strong> — generalised timeline of rigor mortis in temperate climates:</p><ul><li>Takes ~<strong>12 hours</strong> to develop fully</li><li>Stays for another ~<strong>12 hours</strong></li><li>Takes ~<strong>12 hours</strong> to pass off</li></ul><p><strong>Total ~36 hours</strong> from death to complete disappearance.</p><p><strong>Indian variation by season</strong> (Bardale&apos;s data — total duration of rigor):</p><ul><li>April-June (summer): 11-28 hours</li><li>July-September (monsoon): 17-34 hours</li><li>October-December (winter): 16-61 hours</li><li>January-March (winter): 19-50 hours</li></ul><p>★ Rule of 12 is a guide — actual onset/duration depends on temperature, body habitus, cause of death.</p>', tags: ['12 + 12 + 12 hours', 'Total 36 hr'] },
  'rigor-factors': { label: 'Factors Affecting Rigor', info: '<p><strong>Early onset, passes off early:</strong></p><ul><li>Electrocution (sudden ATP depletion)</li><li>Convulsions (strychnine, tetanus, epilepsy)</li><li>Hyperpyrexia (heat exhaustion, sunstroke)</li><li>Cancer (cachexia)</li><li>Uraemia, metabolic acidosis</li><li>Hot environment</li></ul><p><strong>Delayed onset:</strong></p><ul><li>Asphyxia</li><li>Apoplexy (cerebral haemorrhage)</li><li>Hypothermia</li><li>Cold environment</li></ul><p><strong>Rapid onset, stays LONGER:</strong></p><ul><li>Strychnine poisoning</li><li>Hydrocyanic acid poisoning</li></ul><p>Mechanism in poisons: sustained muscle activity at moment of death → greater ATP depletion + more cross-bridges formed.</p>', tags: ['Strychnine = rapid + long'] },
  'rigor-mli': { label: 'Medico-Legal Importance of Rigor', info: '<p>5 main MLI uses:</p><ol><li><strong>Sign of death</strong> — its presence confirms molecular death has occurred.</li><li><strong>Time since death</strong> — Rule of 12 gives a useful estimate.</li><li><strong>Indicates posture/position</strong> at time of death — body retains posture in which rigor set (e.g., body found supine but with arm raised against gravity = arm was raised at moment of death).</li><li><strong>Breaking of rigor</strong> — if a rigid joint is forcibly moved (mortuary handling), the muscles do NOT resume rigor; they stay flaccid. This may mislead later TOD estimates.</li><li><strong>Develops in paralysed limbs too</strong> — rigor is NOT functionally related to the nervous system. Polio-affected or post-stroke paralysed limbs still show rigor.</li></ol><p>★ Rigor also affects the heart (mimics ventricular hypertrophy), iris (unequal pupils), and dartos muscle of scrotum (postmortem semen emission).</p>', tags: ['5 MLI uses'] },

  'sim-cadaveric': { label: 'Cadaveric Spasm (★)', info: '<p><strong>Cadaveric spasm</strong> = a state where a muscle or group of muscles, instead of going through primary flaccidity, goes into <strong>sudden stiffening at the moment of death</strong>.</p><p>Synonyms: instantaneous rigor · instant rigor · cataleptic rigidity.</p><p><strong>Onset:</strong> IMMEDIATE — at moment of death, skipping primary flaccidity.</p><p><strong>Mechanism:</strong> Unknown; associated with violent deaths + intense emotional/physical exertion at moment of death.</p><p><strong>Muscles involved:</strong> Usually a group (most often hand muscles); rarely whole body.</p><p><strong>Stiffness:</strong> VERY STRONG — cannot be overcome by force without breaking joints.</p><p><strong>Duration:</strong> Continues through the period of rigor mortis; disappears with secondary relaxation.</p><p><strong>★ MLI</strong> (most important):</p><ul><li>Proves person was ALIVE + ACTIVE at moment of death</li><li>Drowning victim clutching weeds/grass → antemortem drowning</li><li>Suicide victim clutching firearm → suicide (homicide perpetrators rarely place a weapon convincingly)</li><li>Hair or fabric grasped in hand → may identify assailant</li></ul>', tags: ['Immediate', 'Proves AM activity'] },
  'sim-heat': { label: 'Heat Stiffening', info: '<p><strong>Cause:</strong> Body exposed to temperature above 65 °C — burning, charring, high-voltage electric burns.</p><p><strong>Mechanism:</strong> Heat coagulates muscle proteins → contraction of muscles → stiffness.</p><p><strong>Posture:</strong> Characteristic <strong>"pugilistic attitude"</strong> — flexed elbows, clenched fists, flexed knees (boxer pose). This is because flexors are bulkier than extensors and contract more strongly.</p><p><strong>Seen in:</strong> Severe burns (especially charred bodies), high-voltage electrical burns.</p><p><strong>Nature:</strong> MAY be antemortem or postmortem — does NOT prove the burn was inflicted during life.</p><p><strong>Persistence:</strong> Stiffness lasts until decomposition softens the muscles; rigor mortis does NOT occur in burnt muscles.</p>', tags: ['&gt;65°C', 'Pugilistic attitude'] },
  'sim-cold': { label: 'Cold Stiffening', info: '<p><strong>Cause:</strong> Body exposed to FREEZING temperatures.</p><p><strong>Mechanism:</strong> Solidification of body fluids and fat → tissues become frozen and rigid.</p><p><strong>Recovery:</strong> The stiffness DISAPPEARS upon rewarming. After rewarming, true rigor mortis then sets in normally.</p><p><strong>Seen in:</strong></p><ul><li>Alpine / mountaineering deaths</li><li>Exposure in walk-in freezers</li><li>Cold-storage warehouse accidents</li><li>Bodies left in extreme winter conditions</li></ul><p>Distinguished from rigor mortis by the response to rewarming.</p>', tags: ['Freezing temp', 'Disappears on rewarming'] },
  'sim-gas': { label: 'Gas Stiffening', info: '<p><strong>Cause:</strong> Accumulation of gases of putrefaction (H₂S, CO₂, methane, ammonia) in tissues during advanced decomposition.</p><p><strong>Mechanism:</strong> Gas distends tissues → produces false rigidity / firmness.</p><p><strong>Seen in:</strong> Bodies in advanced decomposition (typically &gt; 24-48 hours postmortem in summer).</p><p><strong>Distinguishing features:</strong> Other putrefactive signs are obviously present alongside — greenish discolouration, bloating of features/abdomen, marbling, blisters, putrid smell, maggot infestation.</p><p>This is NOT true rigor — it is mechanical distension and resolves on incision of tissues (gas escapes).</p>', tags: ['Decomposition gases', 'False rigidity'] },

  'dec-autolysis': { label: 'Autolysis', info: '<p><strong>Autolysis</strong> = self-dissolution of body tissues by enzymes released from disintegrating cells.</p><p>"Auto" = self · "lysis" = breakdown.</p><p><strong>Mechanism:</strong> After death, intracellular pH falls (no O₂ → lactic acid accumulation) → lysosomes rupture → release of proteolytic, lipolytic, and glycolytic enzymes → digestion of cellular components.</p><p><strong>Earliest organs:</strong> Those rich in hydrolytic enzymes:</p><ul><li>Pancreas (full of digestive enzymes)</li><li>Gastric mucosa (acid + pepsin)</li><li>Adrenal medulla</li></ul><p><strong>Intermediate:</strong> Heart, liver, kidneys.</p><p><strong>Delayed:</strong> Fibrous tissue, uterus, skeletal muscle.</p><p><strong>Visible signs:</strong> Skin slippage, hair/nail loosening, gastromalacia (gastric wall softening), oesophagomalacia, postmortem haemolysis of vascular intima.</p><p><strong>Maceration:</strong> Aseptic autolysis of a dead fetus retained in the uterus.</p>', tags: ['Self-enzymatic', 'Pancreas first'] },
  'dec-putrefaction': { label: 'Putrefaction', info: '<p><strong>Putrefaction</strong> = bacterial decomposition of body tissues by saprophytic flora.</p><p><strong>Organisms:</strong> <em>Clostridium welchii</em> (perfringens), <em>E. coli</em>, Staphylococci, non-haemolytic Streptococci, Proteus, diphtheroids — mostly from the intestinal tract.</p><p><strong>3 main changes during putrefaction:</strong></p><ol><li><strong>Colour changes</strong> — sulphaemoglobin → greenish discolouration of skin</li><li><strong>Gas production</strong> — H₂S, CO₂, methane, ammonia, mercaptans → bloating</li><li><strong>Liquefaction</strong> — organs convert to thick semi-fluid matter</li></ol><p><strong>Importance of gases:</strong></p><ul><li>Causes bloating of features (difficulty in identification)</li><li>Disintegrates and shifts postmortem lividity</li><li>Causes postmortem purging (blood-stained fluid from mouth/nose)</li><li>Causes expulsion of fetus from uterus ("coffin birth")</li></ul><p>★ Putrefaction = <strong>most absolute sign of death</strong> — cannot occur in living tissue.</p>', tags: ['Bacterial', 'Most absolute sign of death'] },
  'dec-external': { label: 'External Signs (Sequence)', info: '<p>Timeline of external decomposition (summer; winter in brackets — slower):</p><ul><li><strong>12-18 hr (18-24 hr):</strong> Greenish discolouration of RIGHT ILIAC FOSSA (over caecum) — the <strong>FIRST external sign</strong>. Caecum has more bacteria + is close to anterior abdominal wall.</li><li><strong>24 hr (36-48 hr):</strong> Greenish colour spreads across abdomen, then chest. Marbling of skin appears (sulphmethaemoglobin in superficial vessels makes them prominent).</li><li><strong>24-36 hr:</strong> Bloating — abdomen distended, face puffy, eyes bulge, scrotal swelling (gas forced through inguinal canal), tongue protrudes through mouth.</li><li><strong>36-48 hr:</strong> Blisters form (containing gas/fluid); skin peels at places; PM purging — blood-stained fluid escapes from mouth/nose.</li><li><strong>48-72 hr:</strong> Liquefaction; maggot infestation (flies lay eggs at orifices within 18-36 hr → eggs hatch in 12-24 hr → maggots feed actively).</li><li><strong>Weeks-months:</strong> Skeletonization (depends on temperature, scavengers, burial).</li></ul>', tags: ['Greenish RIF = first', 'Summer faster'] },
  'dec-internal': { label: 'Internal Signs — Putrefaction Order', info: '<p>Internal organs putrefy at different rates depending on firmness, moisture, density and vascularity.</p><p><strong>EARLY (soft, vascular):</strong></p><ol><li>Brain</li><li>Larynx + trachea mucosa</li><li>Stomach + intestines</li><li>Spleen</li><li>Liver</li><li>Oesophagus</li><li>Diaphragm</li></ol><p><strong>LATE (firm, fibrous):</strong></p><ol start="8"><li>Heart</li><li>Lungs</li><li>Kidneys</li><li>Urinary bladder</li><li>Uterus (especially non-pregnant)</li><li><strong>Prostate</strong> (LAST to decompose)</li></ol><p><strong>★ MLI of late-decomposing organs:</strong> Uterus and prostate may still yield evidence — drugs, toxins, blood — even in advanced decomposition. The non-pregnant uterus is especially resistant to putrefaction.</p>', tags: ['Brain first', 'Prostate last'] },
  'dec-casper': { label: 'Casper&apos;s Dictum (★)', info: '<p><strong>Casper&apos;s dictum</strong> compares the RATE of decomposition in 3 different media — relative to each other.</p><p style="font-size: 1.3em;"><strong>AIR : WATER : EARTH = 1 : 2 : 8</strong></p><p>Read as: a body exposed to AIR decomposes in roughly 1 week to a stage reached in 2 weeks under WATER, or 8 weeks if buried in EARTH.</p><p><strong>Mnemonic order — fastest to slowest:</strong> AIR → WATER → EARTH.</p><p><strong>Why earth is slowest:</strong> Limited O₂ (anaerobic), cooler temperature, fewer scavenging insects, soil protects from temperature variation.</p><p><strong>Note:</strong> Older sources give the ratio as 4:2:1 specifically for the rate of COOLING — the dictum has slightly different formulations for cooling vs decomposition. Most exams expect <strong>1:2:8 (air:water:earth) for decomposition rates</strong>.</p>', tags: ['1:2:8 air-water-earth', 'PYQ favourite'] },

  'adip-definition': { label: 'Adipocere (Grave Wax)', info: '<p><strong>Adipocere</strong> = conversion of body fat into a <strong>grey-white, soft, waxy, foul-smelling substance</strong> resembling rancid butter or candle wax.</p><p><strong>Synonyms:</strong> Grave wax, mortuary wax, lipocera.</p><p><strong>Chemistry:</strong> Hydrolysis + hydrogenation of neutral fats (triglycerides) → free saturated fatty acids — palmitic, stearic, oleic acids. Glycerol is released and washed away.</p><p><strong>Conditions favouring formation:</strong></p><ul><li>MOIST environment (water content essential)</li><li>WARM temperature (~20-30 °C)</li><li>ANAEROBIC conditions</li><li>Presence of <em>Clostridium perfringens</em> (lecithinase enzyme)</li></ul><p><strong>Typical scenarios:</strong> Bodies in water (rivers, ponds), septic tanks, sewers, damp graves, wells.</p><p><strong>Onset:</strong> First signs visible at <strong>1-2 weeks</strong>; complete adipocere over <strong>3-6 months</strong>.</p><p><strong>First sites:</strong> Cheeks, breasts, buttocks, abdomen (fat-rich subcutaneous regions).</p><p><strong>★ MLI:</strong> The body remains identifiable for months or years — facial features and injuries are preserved. Skin slippage, lividity, and even wounds remain detectable.</p>', tags: ['Wet conditions', 'Saponification'] },
  'mum-definition': { label: 'Mummification', info: '<p><strong>Mummification</strong> = drying and shrinking of soft tissues WITHOUT bacterial putrefaction — leaving a hard, leathery, brown body resembling an Egyptian mummy.</p><p><strong>Mechanism:</strong> Rapid loss of water from tissues prevents bacterial growth → tissues desiccate and harden.</p><p><strong>Conditions favouring formation:</strong></p><ul><li>DRY environment (low humidity)</li><li>HOT temperature</li><li>Good VENTILATION (air movement)</li></ul><p><strong>Typical scenarios:</strong> Sandy soil in desert, hot attics, well-ventilated lofts, dry climate (Rajasthan summer).</p><p><strong>Onset:</strong> First signs visible at <strong>1-2 weeks</strong>; complete mummification over <strong>3-12 months</strong>.</p><p><strong>First sites:</strong> Exposed parts with high surface-area : volume ratio + low fat — fingers, face (nose, ears), toes.</p><p><strong>Appearance:</strong> Brown, leathery, hard skin tightly adherent to bones; facial features often well preserved (the "Egyptian mummy" look).</p><p><strong>★ MLI:</strong> Body identifiable for years; facial features and injuries preserved.</p>', tags: ['Dry + hot conditions', 'Egyptian mummy look'] },
  'modif-compare': { label: 'Adipocere vs Mummification', info: '<p>Quick comparison:</p><table><tr><th>Feature</th><th>Adipocere</th><th>Mummification</th></tr><tr><td>Mechanism</td><td>Hydrolysis of fat → fatty acids</td><td>Desiccation (drying)</td></tr><tr><td>Environment</td><td>Moist, warm, anaerobic</td><td>Dry, hot, ventilated</td></tr><tr><td>Tissue affected</td><td>Subcutaneous fat primarily</td><td>All soft tissues</td></tr><tr><td>Appearance</td><td>Soft, waxy, grey-white, foul-smelling</td><td>Hard, leathery, brown, dry</td></tr><tr><td>First sites</td><td>Cheeks, breasts, buttocks (fat-rich)</td><td>Fingers, face, toes (exposed)</td></tr><tr><td>Onset (signs)</td><td>1-2 weeks</td><td>1-2 weeks</td></tr><tr><td>Complete</td><td>3-6 months</td><td>3-12 months</td></tr><tr><td>MLI value</td><td>ID + injuries preserved months</td><td>ID + injuries preserved years</td></tr></table><p>Both are forms of <strong>modified decomposition</strong> — they replace normal putrefactive breakdown with a preservative process.</p>', tags: ['Side-by-side'] },
  'modif-maceration': { label: 'Maceration (special case)', info: '<p><strong>Maceration</strong> = aseptic autolysis of a DEAD FETUS retained in the uterus.</p><p>Because the uterus is a sterile environment (no bacteria), this is autolysis WITHOUT putrefaction — bacterial decomposition does not occur.</p><p><strong>Conditions required:</strong></p><ul><li>Fetal death (intrauterine death)</li><li>Retention in uterus for at least 12-24 hours after death</li><li>Sterile environment (membranes intact)</li></ul><p><strong>Features:</strong></p><ul><li>Skin peels off in sheets</li><li>Joints loose / flail</li><li>Body soft + flattened</li><li>Brown-red discolouration</li><li>Sweetish odour (not putrid)</li><li>Bones visible through translucent skin in advanced cases</li><li>Cranium soft (Spalding sign on X-ray = overlapping skull bones)</li></ul><p><strong>★ MLI:</strong></p><ul><li>Confirms <strong>intrauterine death</strong> — fetus died at least 12-24 hours before expulsion</li><li>Differentiates <strong>stillbirth from neonatal death</strong> — a macerated fetus was dead before birth</li><li>Important in determining cause of perinatal death</li></ul>', tags: ['Aseptic autolysis', 'Stillbirth marker'] },

  'tod-early': { label: 'Early Postmortem (0-36 hr)', info: '<p>The most useful TOD markers in the first 36 hours postmortem:</p><table><tr><th>Sign</th><th>Finding</th><th>Time since death</th></tr><tr><td>Body temperature (warm)</td><td>Warm to touch</td><td>&lt; 4-6 hr</td></tr><tr><td>Body temperature (cold)</td><td>Equilibrated with ambient</td><td>&gt; 18-24 hr</td></tr><tr><td>Lividity (patchy)</td><td>Blanches on pressure</td><td>1 – 6 hr</td></tr><tr><td>Lividity (fixed)</td><td>No blanching</td><td>&gt; 7-8 hr</td></tr><tr><td>Rigor (face/neck only)</td><td>Just starting</td><td>2 – 4 hr</td></tr><tr><td>Rigor (whole body)</td><td>Complete</td><td>12 hr (rule of 12)</td></tr><tr><td>Rigor disappeared</td><td>Flaccid again</td><td>&gt; 24-36 hr</td></tr><tr><td>Corneal haziness</td><td>Hazy</td><td>10-12 hr</td></tr><tr><td>Tache noire</td><td>Brown sclera spots</td><td>2-3 hr (if eyes open)</td></tr></table>', tags: ['Early markers'] },
  'tod-late': { label: 'Late Postmortem (36 hr +)', info: '<p>The key TOD markers after 36 hours:</p><table><tr><th>Sign</th><th>Finding</th><th>Time since death</th></tr><tr><td>Greenish RIF discolouration</td><td>First external putrefactive sign</td><td>12-18 hr (summer)</td></tr><tr><td>Marbling of skin</td><td>Prominent superficial vessels</td><td>24 hr (summer)</td></tr><tr><td>Bloating</td><td>Abdomen distended, face puffy</td><td>24-48 hr</td></tr><tr><td>Maggot eggs at orifices</td><td>Whitish clusters laid by flies</td><td>18-36 hr</td></tr><tr><td>Active maggots (larvae)</td><td>Feeding voraciously</td><td>2-3 days</td></tr><tr><td>Adipocere (early signs)</td><td>Wax in fatty areas</td><td>1-2 weeks</td></tr><tr><td>Mummification (signs)</td><td>Drying of fingers, face</td><td>1-2 weeks</td></tr><tr><td>Skeletonization</td><td>Soft tissue gone</td><td>Weeks-months (variable)</td></tr></table><p>★ Forensic entomology (fly larvae stage) gives the most precise estimate for the 2-30 day window.</p>', tags: ['Late markers', 'Entomology useful'] },
  'tod-other': { label: 'Other TOD Indicators', info: '<p>Additional approaches to TOD estimation:</p><ul><li><strong>Stomach contents</strong> — type of food + stage of digestion (empty in ~4-6 hr after a meal). Useful when last meal time is known.</li><li><strong>Vitreous K⁺</strong> — rises linearly with PMI (~0.17 mEq/L/hr); useful 24-100 hr postmortem.</li><li><strong>Vitreous SGOT</strong> — rises with PMI but less reliable than K⁺.</li><li><strong>Eye changes</strong> — corneal haziness &gt; 10-12 hr · tache noire 2-3 hr if eyes open · retinal "trucking" immediately · pupil fixed dilated immediately.</li><li><strong>Forensic entomology</strong> — fly egg → larva → pupa → adult succession; identifies days-weeks PMI accurately.</li><li><strong>Hair growth</strong> — does NOT continue after death (myth); apparent "growth" is skin retraction.</li></ul>', tags: ['Vitreous K+', 'Entomology', 'Stomach contents'] },
  'tod-caveats': { label: 'TOD — Caveats &amp; Errors', info: '<p>Important caveats when estimating TOD:</p><ol><li><strong>Never rely on a single sign</strong> — every method has wide confidence intervals; combine multiple markers.</li><li><strong>Estimates always given as a RANGE</strong>, never as a single value. E.g., "between 6 and 12 hours" or "12 to 24 hours".</li><li><strong>Broken rigor</strong> from rough handling at scene/mortuary can grossly mislead — the broken muscle does NOT resume rigor.</li><li><strong>Postmortem caloricity</strong> (sepsis, sunstroke, tetanus) can give a misleadingly warm body — temperature may RISE, not fall.</li><li><strong>Casper&apos;s dictum</strong> — adjust for the medium of disposal (air, water, grave) when comparing rates.</li><li><strong>Tropical Indian summer</strong> — ambient temperature may exceed body temperature; algor mortis is unreliable.</li><li><strong>Drowning</strong> — bodies in cold water may show preserved features for long periods.</li><li><strong>Scene context</strong> — last sighting, last meal, witness accounts are integral to the TOD opinion.</li></ol>', tags: ['Range not point', 'Scene context essential'] }
};

function nodeList(ids) { return ids.map(id => ({ nodeId: id, ...NODES[id] })); }

const MCQS = {
  'DC-01': [
    { stem: 'The MOST absolute sign of death is:', options: ['Cessation of respiration','Cessation of circulation','Rigor mortis','Putrefaction'], answerIdx: 3, explain: 'Putrefaction is the most absolute sign — it cannot occur in living tissue. Other signs may be simulated by suspended animation.', tag: '[PG-Inspired]' },
    { stem: 'In India, the legal definition of death is based on:', options: ['Cardiac death','Whole brain death','Brainstem death','Cellular death'], answerIdx: 2, explain: 'Brainstem death is recognised as legal death under the Transplantation of Human Organs Act 1994.', tag: '[PG-Inspired]' },
    { stem: 'The first cells/tissues to undergo molecular death are:', options: ['Muscle cells','Connective tissue','Neurons','Liver cells'], answerIdx: 2, explain: 'Neurons are most sensitive to anoxia and die first (within ~5 minutes). Fibrous tissue dies last.', tag: '[UNIV]' }
  ],
  'DC-02': [
    { stem: 'Under the Transplantation of Human Organs Act 1994, brainstem death must be examined and certified by a board of:', options: ['2 members','3 members','4 members','5 members'], answerIdx: 2, explain: '4-member board: RMP in-charge, independent specialist, neurologist/neurosurgeon, treating physician.', tag: '[PG-Inspired]' },
    { stem: 'In brainstem death certification, the two examinations must be separated by an interval of:', options: ['1 hour','3 hours','6 hours','12 hours'], answerIdx: 2, explain: 'Two examinations 6 hours apart, both showing absent brainstem reflexes + apnoea, with the same prerequisites.', tag: '[PG-Inspired]' },
    { stem: 'Which of the following is NOT a brainstem reflex tested in brain death certification?', options: ['Pupillary reflex','Knee jerk','Corneal reflex','Vestibulo-ocular reflex'], answerIdx: 1, explain: 'Knee jerk is a spinal reflex — may PERSIST in brain death. The 5 brainstem reflexes are pupillary, corneal, vestibulo-ocular, grimace, gag/cough.', tag: '[UNIV]' },
    { stem: 'Persistent vegetative state corresponds to which type of brain death?', options: ['Cortical (cerebral) brain death','Brainstem death','Whole brain death','None'], answerIdx: 0, explain: 'PVS = cortical brain death — brainstem intact (so respiration + heart continue spontaneously) but no higher cortical function. NOT legally dead.', tag: '[PG-Inspired]' }
  ],
  'DC-03': [
    { stem: 'Bichat&apos;s tripod of life consists of:', options: ['Heart, Lungs, Liver','Brain, Heart, Lungs','Brain, Spine, Heart','Heart, Kidneys, Lungs'], answerIdx: 1, explain: 'Bichat (1800) — failure of any of Brain (coma), Heart (syncope), or Lungs (asphyxia) ultimately causes death.', tag: '[PG-Inspired]' },
    { stem: 'A man dies suddenly after immersion in cold water with few asphyxial signs. The most likely mechanism is:', options: ['Wet drowning','Dry drowning','Vagal inhibition (hydrocution)','Asphyxia'], answerIdx: 2, explain: 'Hydrocution = sudden vagal cardiac arrest from cold-water shock. Few asphyxial signs because death precedes the asphyxial phase.', tag: '[PG-Inspired]' },
    { stem: 'Sudden death from a light blow to the neck without significant trauma is most likely due to:', options: ['Spinal cord injury','Vagal inhibition (carotid sinus pressure)','Air embolism','Cardiac contusion'], answerIdx: 1, explain: 'Vagal inhibition — pressure on carotid sinus baroreceptor triggers reflex bradycardia → cardiac arrest. Important MLI in homicide cases.', tag: '[UNIV]' }
  ],
  'DC-04': [
    { stem: 'The MANNER of death is decided by:', options: ['The autopsy surgeon','The treating physician','The magistrate / court','The investigating officer'], answerIdx: 2, explain: 'Manner is a legal/circumstantial classification decided by the magistrate. The doctor opines on CAUSE and MODE only.', tag: '[PG-Inspired]' },
    { stem: 'A homicidal stab wound that pierces the heart causing massive haemorrhage. Identify the cause / mode / manner correctly:', options: ['Cause: shock; Mode: stab wound; Manner: homicide','Cause: stab wound to heart; Mode: haemorrhagic shock; Manner: homicide','Cause: homicide; Mode: heart injury; Manner: stab','Cause: bleeding; Mode: homicide; Manner: stab wound'], answerIdx: 1, explain: 'Cause = injury/disease that initiated death (stab wound). Mode = functional mechanism (haemorrhagic shock). Manner = circumstantial category (homicide).', tag: '[PG-Inspired]' },
    { stem: 'Defence wounds on the forearms and hands of a deceased person primarily suggest:', options: ['Suicide','Accident','Homicide','Natural disease'], answerIdx: 2, explain: 'Defence wounds = victim attempting to ward off attack — strongly suggest HOMICIDE.', tag: '[UNIV]' }
  ],
  'DC-05': [
    { stem: 'Which of the following is an EARLY change after death?', options: ['Putrefaction','Adipocere','Rigor mortis','Mummification'], answerIdx: 2, explain: 'Rigor mortis = early change (within 36 hr). Putrefaction, adipocere, mummification = late changes.', tag: '[PG-Inspired]' },
    { stem: 'The FIRST external sign of putrefaction is:', options: ['Marbling of skin','Greenish discolouration of right iliac fossa','Bloating of abdomen','Blisters and skin peeling'], answerIdx: 1, explain: 'Greenish discolouration of RIF (over caecum) appears first because caecum has high bacterial load + close to anterior abdominal wall.', tag: '[PG-Inspired]' }
  ],
  'DC-06': [
    { stem: 'The average rate of fall of body temperature in India (algor mortis) is approximately:', options: ['0.1-0.3 °C/hr','0.4-0.7 °C/hr','1-2 °C/hr','3-4 °C/hr'], answerIdx: 1, explain: 'In India, the inner core temperature falls at approximately 0.4-0.7 °C/hr on average.', tag: '[PG-Inspired]' },
    { stem: 'Casper&apos;s dictum gives the ratio of cooling/decomposition in water : air : grave as:', options: ['1 : 2 : 4','2 : 4 : 1','4 : 2 : 1','1 : 4 : 8'], answerIdx: 2, explain: 'Water : Air : Earth (grave) = 4 : 2 : 1 (for cooling). For decomposition, the equivalent dictum is Air : Water : Earth = 1 : 2 : 8.', tag: '[NEET-PG-Inspired]' },
    { stem: 'Postmortem caloricity (paradoxical rise of body temperature) is seen in all EXCEPT:', options: ['Septicaemia','Tetanus','Hypothermia','Strychnine poisoning'], answerIdx: 2, explain: 'Hypothermia (cold environment) accelerates COOLING — opposite of caloricity. Caloricity seen in septicaemia, sunstroke, pontine haemorrhage, tetanus, strychnine.', tag: '[PG-Inspired]' },
    { stem: 'The preferred site for recording postmortem body temperature is:', options: ['Axilla','Oral cavity','Rectum (4 inches above anus)','Skin'], answerIdx: 2, explain: 'Rectal temperature reflects inner core well. Axillary/skin are surface readings and fall too quickly.', tag: '[UNIV]' }
  ],
  'DC-07': [
    { stem: 'Postmortem lividity typically becomes FIXED by approximately:', options: ['2-3 hours','7-8 hours','12-14 hours','24 hours'], answerIdx: 1, explain: 'Fixation of lividity occurs by ~7-8 hours after death. Before that, pressure can blanch it; after, no blanching.', tag: '[NEET-PG-Inspired]' },
    { stem: 'Cherry-pink colour of postmortem lividity is characteristic of:', options: ['Cyanide poisoning','Carbon monoxide poisoning','Hypothermia','Methaemoglobinaemia'], answerIdx: 1, explain: 'CO poisoning → carboxyhaemoglobin → bright CHERRY-PINK lividity. Cyanide is also cherry-red but slightly different shade.', tag: '[PG-Inspired]' },
    { stem: 'Chocolate-brown postmortem lividity suggests poisoning with:', options: ['Carbon monoxide','Sodium chlorate / nitrites','Strychnine','Phosphorus'], answerIdx: 1, explain: 'Methaemoglobin → chocolate-brown lividity. Caused by sodium chlorate, nitrites, aniline dyes.', tag: '[PG-Inspired]' },
    { stem: '&quot;Glove and stocking&quot; pattern of lividity is typically seen in:', options: ['Drowning','Hanging','Strangulation','Burning'], answerIdx: 1, explain: 'Hanging causes lividity in lower limbs (stocking) and hands (gloves) due to prolonged upright suspension.', tag: '[UNIV]' }
  ],
  'DC-08': [
    { stem: 'According to the &quot;Rule of 12&quot; for rigor mortis, the total duration from death to complete disappearance of rigor is approximately:', options: ['12 hours','24 hours','36 hours','48 hours'], answerIdx: 2, explain: '12 hr to develop + 12 hr stays + 12 hr to pass off = ~36 hours total. Generalised guide.', tag: '[PG-Inspired]' },
    { stem: 'The biochemical basis of rigor mortis is:', options: ['Accumulation of lactic acid','Depletion of ATP and formation of acto-myosin gel','Calcium influx','Glycogen accumulation'], answerIdx: 1, explain: 'ATP depletion → actin and myosin form irreversible cross-bridges → muscle stiffens.', tag: '[PG-Inspired]' },
    { stem: 'In which condition does rigor mortis appear EARLY and pass off EARLY?', options: ['Strychnine poisoning','Asphyxia','Electrocution','Hypothermia'], answerIdx: 2, explain: 'Electrocution → sudden ATP depletion → rapid early rigor + rapid passage off. Strychnine = rapid onset but STAYS LONGER.', tag: '[PG-Inspired]' },
    { stem: 'The first muscle group to develop rigor mortis (in voluntary muscles) is:', options: ['Hands','Face','Eyelids (orbicularis oculi)','Lower limbs'], answerIdx: 2, explain: 'In voluntary muscles, eyelids (orbicularis oculi) develop rigor first. Among ALL muscles, the heart is first (involuntary).', tag: '[UNIV]' }
  ],
  'DC-09': [
    { stem: 'A drowned body is found clutching weeds/grass tightly in the hand. This finding indicates:', options: ['Postmortem submersion','Rigor mortis','Antemortem drowning (cadaveric spasm)','Heat stiffening'], answerIdx: 2, explain: 'Cadaveric spasm = immediate postmortem stiffness; clutching weeds proves the person was ALIVE and struggling at moment of drowning.', tag: '[PG-Inspired]' },
    { stem: 'The characteristic &quot;pugilistic attitude&quot; (boxer pose) of a body recovered from a fire is due to:', options: ['Rigor mortis','Cadaveric spasm','Heat stiffening (coagulation of muscle proteins)','Cold stiffening'], answerIdx: 2, explain: 'Heat stiffening from temperatures &gt; 65 °C coagulates muscle proteins → flexor contraction → boxer/pugilistic pose. May be AM or PM.', tag: '[PG-Inspired]' },
    { stem: 'Cadaveric spasm differs from rigor mortis in that it:', options: ['Affects all muscles equally','Appears immediately, affects usually a single muscle group','Develops only after 12 hours','Disappears in 1-2 hours'], answerIdx: 1, explain: 'Cadaveric spasm = immediate, usually a single group (hand), very strong stiffness — proves AM activity at moment of death.', tag: '[UNIV]' }
  ],
  'DC-10': [
    { stem: 'According to Casper&apos;s dictum, a body in air, water, and earth decomposes in the ratio:', options: ['1 : 2 : 4','1 : 2 : 8','1 : 4 : 8','2 : 1 : 4'], answerIdx: 1, explain: 'Casper&apos;s dictum (decomposition): AIR : WATER : EARTH = 1 : 2 : 8. A body buried in earth decomposes 8× slower than in air.', tag: '[PG-Inspired]' },
    { stem: 'The internal organ that decomposes LAST is:', options: ['Brain','Liver','Heart','Prostate'], answerIdx: 3, explain: 'Prostate is the last internal organ to decompose. Brain and gastric mucosa decompose first.', tag: '[PG-Inspired]' },
    { stem: 'The earliest internal organ to undergo putrefactive decomposition is:', options: ['Heart','Brain','Kidney','Prostate'], answerIdx: 1, explain: 'Brain decomposes first internally — soft, vascular, high water content. Followed by trachea/larynx mucosa, then stomach/intestines.', tag: '[UNIV]' },
    { stem: 'Maggot eggs are typically laid on a corpse within:', options: ['1-2 hours','18-36 hours','48-72 hours','5-7 days'], answerIdx: 1, explain: 'Flies lay eggs at orifices within 18-36 hours (faster in summer). Eggs hatch in 12-24 hr to maggots.', tag: '[PG-Inspired]' }
  ],
  'DC-11': [
    { stem: 'Adipocere formation requires:', options: ['Dry and hot conditions','Moist and warm anaerobic conditions','Cold and dry conditions','Freezing temperature'], answerIdx: 1, explain: 'Adipocere = hydrogenation/hydrolysis of fat in MOIST, WARM, ANAEROBIC conditions (e.g., bodies in water, septic tanks, damp graves).', tag: '[PG-Inspired]' },
    { stem: 'Mummification of a body is favoured by:', options: ['Wet, cold environment','Dry, hot, well-ventilated environment','Burial in shallow grave','Submersion in water'], answerIdx: 1, explain: 'Mummification = desiccation in DRY + HOT + VENTILATED conditions. Body becomes hard, leathery, brown.', tag: '[PG-Inspired]' },
    { stem: 'Maceration of a fetus in the uterus is best described as:', options: ['Bacterial putrefaction','Aseptic autolysis','Mummification','Adipocere formation'], answerIdx: 1, explain: 'Maceration = aseptic autolysis (no bacteria) of a dead fetus retained in utero. Skin peels in sheets, sweetish odour.', tag: '[UNIV]' },
    { stem: 'The chemical product of adipocere formation is primarily:', options: ['Triglycerides','Saturated fatty acids (palmitic, stearic)','Glycogen','Cholesterol esters'], answerIdx: 1, explain: 'Adipocere is composed of saturated free fatty acids (palmitic, stearic) formed by hydrolysis + hydrogenation of triglycerides.', tag: '[PG-Inspired]' }
  ],
  'DC-12': [
    { stem: 'A body is found warm to touch with rigor only in face and neck. The approximate time since death is:', options: ['&lt; 1 hour','2-4 hours','6-8 hours','12 hours'], answerIdx: 1, explain: 'Body still warm + rigor only in face/neck → rigor is just starting → approximately 2-4 hours after death.', tag: '[PG-Inspired]' },
    { stem: 'Vitreous potassium concentration is useful for TOD estimation because:', options: ['It falls linearly with time','It rises linearly with postmortem interval','It remains constant','It varies randomly'], answerIdx: 1, explain: 'Vitreous K⁺ rises linearly with PMI (~0.17 mEq/L per hour); useful 24-100 hr postmortem.', tag: '[PG-Inspired]' },
    { stem: 'A body recovered from open ground in Indian summer shows greenish discolouration of right iliac fossa and early bloating. Estimated TOD:', options: ['2-4 hours','6-8 hours','12-24 hours','3-5 days'], answerIdx: 2, explain: 'Greenish RIF appears at 12-18 hr in summer; early bloating at 24-36 hr → approximately 12-24 hours since death.', tag: '[UNIV]' }
  ]
};

const DIFF_TABLES = [
  {
    id: 'DT-1', title: 'Somatic vs Cellular (Molecular) Death', shortTitle: 'Somatic vs Cellular',
    columns: ['Feature','Somatic (Clinical) Death','Cellular (Molecular) Death'],
    rows: [
      ['Definition','Cessation of body as an integrated unit','Death of individual cells/tissues'],
      ['Timing','Instantaneous (at clinical death)','Gradual over hours after somatic death'],
      ['Tested by','Pulse, respiration, ECG, brainstem reflexes','Onset of early postmortem changes'],
      ['Reversibility','Possibly reversible (CPR) for minutes','Irreversible'],
      ['Order','Whole body together','Neurons first → muscle → fibrous tissue last'],
      ['MLI','Time of legal death','Window for organ retrieval lies here']
    ],
    parentDiagrams: ['DC-01'],
    mcqs: [
      { stem: 'Window for cadaveric organ retrieval exists between:', options: ['Brain death and cardiac death','Somatic death and molecular death','Rigor onset and rigor passage','Lividity and putrefaction'], answerIdx: 1, explain: 'Between somatic (clinical) death and molecular (cellular) death — organs are still viable for retrieval.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-2', title: 'Rigor Mortis vs Cadaveric Spasm', shortTitle: 'Rigor vs Cadaveric Spasm',
    columns: ['Feature','Rigor Mortis','Cadaveric Spasm'],
    rows: [
      ['Time of onset','1-2 hours after death','IMMEDIATE — at moment of death'],
      ['Primary flaccidity','Present (rigor follows it)','ABSENT (skipped)'],
      ['Muscles involved','ALL muscles gradually','Usually a single group (e.g., hand)'],
      ['Stiffness','Moderate','VERY STRONG'],
      ['Mechanism','Breakdown of ATP → acto-myosin gel','Unknown · linked to violent + emotional deaths'],
      ['Predisposing factors','None specific','Exertion, fear, emotional disturbance'],
      ['Disappears with','Secondary relaxation (decomposition)','Secondary relaxation'],
      ['MLI','Time since death, position','Proves AM ACTIVITY at moment of death — clutched weapon / weeds / hair']
    ],
    parentDiagrams: ['DC-08','DC-09'],
    mcqs: [
      { stem: 'Which feature MOST distinguishes cadaveric spasm from rigor mortis?', options: ['Affects all muscles','Time of onset (immediate vs delayed)','Disappears in 1 hour','Reversed by warming'], answerIdx: 1, explain: 'Cadaveric spasm = IMMEDIATE; rigor mortis = delayed (1-2 hr) after primary flaccidity.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-3', title: 'Rigor Mortis vs Heat / Cold / Gas Stiffening', shortTitle: 'Rigor vs other stiffening',
    columns: ['Feature','Rigor Mortis','Heat Stiffening','Cold Stiffening','Gas Stiffening'],
    rows: [
      ['Nature','Postmortem','AM or PM','Postmortem','Postmortem'],
      ['Mechanism','ATP depletion → acto-myosin gel','Heat coagulation of muscle protein','Freezing of fluids + fat','Putrefactive gas distension'],
      ['Stiffness','Moderate','Very high','High (while frozen)','False rigidity'],
      ['Reversibility','Disappears with decomposition','Lasts till decomposition softens muscle','Disappears on rewarming → true rigor sets','Resolves on incision'],
      ['Posture','As at moment of death','Pugilistic attitude (boxer pose)','Frozen posture','Bloated, swollen'],
      ['Associated signs','None','Burns, blisters, charring','Cold environment','Putrefactive signs (greenish, smell)']
    ],
    parentDiagrams: ['DC-08','DC-09'],
    mcqs: [
      { stem: 'Pugilistic attitude in a burnt body is due to:', options: ['Rigor mortis','Cadaveric spasm','Heat stiffening (muscle protein coagulation)','Gas stiffening'], answerIdx: 2, explain: 'Heat &gt; 65 °C coagulates muscle proteins → flexor contraction → boxer pose.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-4', title: 'Postmortem Lividity vs Bruise (Contusion)', shortTitle: 'Lividity vs Bruise',
    columns: ['Feature','Postmortem Lividity','Bruise (Antemortem)'],
    rows: [
      ['Location','Dependent parts only','Anywhere on body'],
      ['Pattern','Diffuse, follows gravity','Localised, follows trauma'],
      ['Margins','Indistinct, diffuse','Distinct, may be patterned'],
      ['Colour','Uniform purplish-blue','Variable (red → blue → green → yellow) over days'],
      ['Contact pallor','Present at pressure points','Absent (lesion confined)'],
      ['On incision','Blood stays in vessels','Blood extravasates into tissues (clots)'],
      ['Vital reaction','Absent','Present (inflammation, leucocyte infiltration)'],
      ['Significance','Postmortem sign','Antemortem injury']
    ],
    parentDiagrams: ['DC-07'],
    mcqs: [
      { stem: 'A purplish discolouration over the back of a body could be lividity rather than bruise if on incision:', options: ['Blood extravasates into tissues','Blood remains within vessels','Yellow staining is seen','Margins are well-defined'], answerIdx: 1, explain: 'Lividity → blood IN VESSELS (washes out on cutting). Bruise → blood IN TISSUES (does not wash out, may clot).', tag: '[UNIV]' }
    ]
  },
  {
    id: 'DT-5', title: 'Adipocere vs Mummification', shortTitle: 'Adipocere vs Mummif.',
    columns: ['Feature','Adipocere','Mummification'],
    rows: [
      ['Definition','Fat → grey-white waxy substance','Drying + shrinking without putrefaction'],
      ['Mechanism','Hydrolysis + hydrogenation of fat → fatty acids','Desiccation (water loss)'],
      ['Environment','Moist, warm, anaerobic','Dry, hot, well-ventilated'],
      ['Tissue affected','Subcutaneous fat mainly','All soft tissues'],
      ['Appearance','Soft, waxy, grey-white, foul-smelling','Hard, leathery, brown, dry'],
      ['First sites','Cheeks, breasts, buttocks (fat-rich)','Fingers, face, toes (exposed)'],
      ['Onset (signs)','1-2 weeks','1-2 weeks'],
      ['Complete','3-6 months','3-12 months'],
      ['MLI','Body ID + injuries preserved months','Body ID + injuries preserved years']
    ],
    parentDiagrams: ['DC-11'],
    mcqs: [
      { stem: 'A body recovered from a septic tank shows soft, grey-white, waxy substance over cheeks and buttocks. The most likely change is:', options: ['Mummification','Maceration','Adipocere','Putrefaction'], answerIdx: 2, explain: 'Soft, waxy, grey-white in subcutaneous fat = adipocere (moist, warm, anaerobic environment of septic tank).', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-6', title: 'Brainstem Death vs Persistent Vegetative State', shortTitle: 'BSD vs PVS',
    columns: ['Feature','Brainstem Death','Persistent Vegetative State (PVS)'],
    rows: [
      ['Definition','Irreversible cessation of all brainstem function','Loss of cortical function with intact brainstem'],
      ['Brainstem reflexes','ALL absent','Present'],
      ['Respiration','Absent (ventilator dependent)','Spontaneous'],
      ['Cardiac activity','Maintained briefly by ventilator only','Spontaneous'],
      ['Awareness','None','None'],
      ['Sleep-wake cycle','Absent','Present'],
      ['Legal status (India)','= DEATH (THO Act 1994)','NOT dead'],
      ['Organ donation','Yes (cadaveric)','No'],
      ['Examples','Severe TBI with brainstem damage','Post-cardiac arrest, post-near drowning']
    ],
    parentDiagrams: ['DC-02'],
    mcqs: [
      { stem: 'Which feature is PRESENT in PVS but ABSENT in brainstem death?', options: ['Cortical activity','Brainstem reflexes','Awareness','Voluntary movement'], answerIdx: 1, explain: 'Brainstem reflexes PRESENT in PVS (brainstem intact) but ABSENT in brainstem death.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-7', title: 'Manner of Death — Categories with Examples', shortTitle: 'Manner — examples',
    columns: ['Manner','Definition','Common examples'],
    rows: [
      ['Natural','Disease / internal pathology only','MI, stroke, cancer, pneumonia'],
      ['Accidental','Unintended external event','RTA, fall, accidental drowning, electrocution'],
      ['Suicide','Self-inflicted with intent','Hanging, OP poisoning, jumping'],
      ['Homicide','Killed by another person','Strangulation, stab, gunshot, smothering, dowry burns'],
      ['Undetermined','Cause known, manner unclear','Body in water, drug overdose, decomposed body']
    ],
    parentDiagrams: ['DC-04'],
    mcqs: [
      { stem: 'A body recovered from a lake, drowning is established but circumstances are unclear. The manner of death should be recorded as:', options: ['Suicide','Accident','Homicide','Undetermined'], answerIdx: 3, explain: 'When cause (drowning) is established but manner cannot be decided on available evidence → UNDETERMINED. Do not over-commit.', tag: '[UNIV]' }
    ]
  },
  {
    id: 'DT-8', title: 'Colour of Lividity → Cause of Death', shortTitle: 'Lividity colour → cause',
    columns: ['Colour','Cause of death','Pigment / Mechanism'],
    rows: [
      ['Purplish-blue (normal)','Asphyxia, most natural','Deoxyhaemoglobin'],
      ['Cherry-PINK','Carbon monoxide poisoning','Carboxyhaemoglobin (HbCO)'],
      ['Bright cherry-red','Cyanide poisoning','Excess oxygenated blood'],
      ['Pinkish','Refrigeration / Hypothermia','O₂ retained in cold cutaneous blood'],
      ['Chocolate-brown','Sodium chlorate / Nitrites / Aniline','Methaemoglobin'],
      ['Greenish','H₂S inhalation / advanced putrefaction','Sulphaemoglobin'],
      ['Deep blue','Aniline dye, CO₂ poisoning','Deoxygenated blood with toxic pigment']
    ],
    parentDiagrams: ['DC-07'],
    mcqs: [
      { stem: 'Cherry-pink lividity in a body recovered from a closed garage with a running car suggests:', options: ['Cyanide poisoning','Carbon monoxide poisoning','Hypothermia','Methaemoglobinaemia'], answerIdx: 1, explain: 'Closed garage + running engine = classic CO poisoning. Carboxyhaemoglobin → cherry-pink lividity.', tag: '[PG-Inspired]' }
    ]
  }
];

const SUBJ = [
  {
    id: 'SAQ-7.1', type: 'SAQ', marks: 10, time: '~15 min', tag: 'QBank',
    question: 'The body of a 32-year-old man was found on roadside, stiff and cold. How will you determine time of death by assessing the stiffness? What are other conditions simulating this stiffness?',
    answer: `<h4>Stiffness → Rigor Mortis</h4>
<p>"Stiff and cold" body raises rigor mortis as the principal postmortem change. The systematic approach is to confirm rigor, estimate the stage, and exclude mimics.</p>

<h4>Step 1 — Confirm Rigor Mortis</h4>
<ul><li>Test multiple joints — face, neck, jaw, upper limbs, trunk, lower limbs, hands, feet</li>
<li>Look for the typical TOP-DOWN distribution (face → trunk → limbs)</li>
<li>Test resistance to passive movement at jaw, elbow, knee</li>
<li>Confirm no response to mechanical or electrical stimulation</li></ul>

<h4>Step 2 — Stage of Rigor (Rule of 12)</h4>
<table><tr><th>Stage</th><th>Distribution</th><th>Approx. TOD</th></tr>
<tr><td>Onset (just appearing)</td><td>Eyelids, face, jaw only</td><td>2-4 hours</td></tr>
<tr><td>Spreading</td><td>Neck, upper trunk, upper limbs</td><td>4-8 hours</td></tr>
<tr><td>Fully established</td><td>Whole body including hands &amp; feet</td><td>12 hours (Rule of 12)</td></tr>
<tr><td>Established (peak)</td><td>Whole body, maximum stiffness</td><td>12-24 hours</td></tr>
<tr><td>Passing off</td><td>Disappearing in same top-down order</td><td>24-36 hours</td></tr>
<tr><td>Disappeared</td><td>Flaccid again + early decomposition</td><td>&gt; 36 hours</td></tr></table>

<h4>Step 3 — Estimate TOD by Integration</h4>
<p>Combine rigor stage with:</p>
<ul><li><strong>Algor mortis</strong> — &quot;cold&quot; suggests TOD &gt; 12-18 hours (body equilibrated with ambient roadside temperature)</li>
<li><strong>Lividity</strong> — check if fixed (&gt; 7-8 hr) and distribution pattern</li>
<li><strong>Decomposition signs</strong> — if greenish RIF present → &gt; 12-18 hr in summer</li>
<li><strong>Scene</strong> — last sighting, weather, clothing</li></ul>
<p>In this scenario (stiff + cold but no decomposition mentioned) → most consistent with <strong>~12-24 hours since death</strong>.</p>

<h4>Step 4 — Conditions Simulating Stiffness (4 mimics)</h4>

<p><strong>1. Cadaveric Spasm</strong></p>
<ul><li>Immediate stiffness at moment of death, skipping primary flaccidity</li>
<li>Usually a single muscle group (hand)</li>
<li>VERY STRONG, almost cannot be overcome</li>
<li>Linked to violent deaths with intense exertion/emotion</li>
<li>MLI: proves AM activity (clutched weapon / weeds / hair)</li></ul>

<p><strong>2. Heat Stiffening</strong></p>
<ul><li>Body exposed to temperature &gt; 65 °C</li>
<li>Mechanism: heat coagulation of muscle proteins</li>
<li>Pugilistic attitude (boxer pose)</li>
<li>Seen in burns, charring, high-voltage electrocution</li>
<li>May be AM or PM</li></ul>

<p><strong>3. Cold Stiffening</strong></p>
<ul><li>Body exposed to freezing temperature</li>
<li>Mechanism: solidification of body fluids + fat</li>
<li>Disappears on rewarming → true rigor then sets in</li>
<li>Seen in alpine deaths, walk-in freezers</li></ul>

<p><strong>4. Gas Stiffening</strong></p>
<ul><li>Accumulation of putrefactive gases distends tissues → false rigidity</li>
<li>Seen in advanced decomposition</li>
<li>Putrefactive signs (greenish, smell, bloating) are obvious alongside</li></ul>

<h4>Mnemonic</h4>
<p><strong>"CHCG"</strong> — Cadaveric spasm · Heat · Cold · Gas — the 4 conditions simulating rigor mortis.</p>

<h4>Conclusion</h4>
<p>In a 32-year-old male roadside body — stiff + cold but otherwise no decomposition — most likely TOD is <strong>12-24 hours</strong>, based on fully established rigor mortis and body equilibrated with ambient temperature. Must exclude cadaveric spasm (immediate, group only), heat/cold stiffening (history dependent), and gas stiffening (decomposition signs).</p>`,
    sources: ['DC-08 (Rigor Mortis)','DC-09 (Mimics of Rigor)','DC-12 (TOD Estimation)','DT-2','DT-3'],
    jumpToDiagram: 'DC-08'
  },
  {
    id: 'SAQ-7.2', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank',
    question: 'Write a short note on Rigor Mortis.',
    answer: `<h4>Definition</h4>
<p>Rigor mortis is the stiffness of muscles (with slight shortening) that develops in the dead body after the period of primary flaccidity. It signifies the onset of molecular (cellular) death.</p>

<h4>Mechanism</h4>
<ol><li>In life, ATP maintains the relaxed state of muscle by pumping Ca²⁺ back into the sarcoplasmic reticulum.</li>
<li>After death, no O₂ → no aerobic ATP synthesis.</li>
<li>Glycogen depletes → lactate accumulates → ATP falls.</li>
<li>When ATP falls below ~15% of normal → actin and myosin form an irreversible <strong>acto-myosin gel</strong> → muscle stiffens with slight shortening.</li>
<li>Rigor persists until proteolytic (lysosomal) enzymes destroy the muscle proteins → secondary relaxation (overlaps with decomposition).</li></ol>

<h4>Rule of 12 (★ highly tested)</h4>
<ul><li>~12 hours to develop fully</li>
<li>~12 hours stays</li>
<li>~12 hours to pass off</li>
<li>Total ~36 hours from death to complete disappearance</li></ul>

<h4>March of Rigor (Onset Order)</h4>
<ol><li>Involuntary muscles first — heart, then iris</li>
<li>Eyelids (orbicularis oculi)</li>
<li>Face → neck → jaw</li>
<li>Trunk → upper limbs (shoulder → hand)</li>
<li>Lower limbs (hip → foot)</li>
<li>Small muscles of hands and feet — LAST</li></ol>
<p>Disappearance follows the SAME order — first in, first out.</p>

<h4>Factors Affecting Rigor</h4>
<table><tr><th>Pattern</th><th>Conditions</th></tr>
<tr><td>Early onset + early off</td><td>Electrocution, convulsions, hyperpyrexia, cancer, uraemia, hot environment</td></tr>
<tr><td>Delayed onset</td><td>Asphyxia, apoplexy, hypothermia, cold environment</td></tr>
<tr><td>Rapid onset + STAYS LONGER</td><td>Strychnine, hydrocyanic acid poisoning</td></tr></table>

<h4>Medico-Legal Importance</h4>
<ol><li><strong>Sign of death</strong> — confirms molecular death</li>
<li><strong>Time since death</strong> — Rule of 12</li>
<li><strong>Posture / position at death</strong> — body retains its position at moment rigor set in</li>
<li><strong>Breaking of rigor</strong> — once broken by handling, muscle stays flaccid (does NOT reset)</li>
<li><strong>Paralysed limbs</strong> — rigor still occurs (independent of nervous system)</li></ol>

<h4>Special Sites</h4>
<ul><li><strong>Heart</strong> — rigor mimics ventricular hypertrophy</li>
<li><strong>Iris</strong> — unequal pupils</li>
<li><strong>Dartos muscle</strong> — postmortem semen emission</li></ul>`,
    sources: ['DC-08 (Rigor Mortis)','DT-2','DT-3'],
    jumpToDiagram: 'DC-08'
  },
  {
    id: 'SAQ-7.3', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Write a short note on Postmortem Lividity (Livor Mortis / Hypostasis).',
    answer: `<h4>Definition</h4>
<p>Postmortem lividity is the purplish-blue or reddish-blue discolouration of the skin caused by settling of blood by gravity into dependent, dilated, toneless capillaries and small veins of the rete mucosum.</p>
<p><strong>Synonyms:</strong> Livor mortis · Hypostasis · Suggilation · Postmortem staining · Vibices</p>

<h4>Formation Timeline</h4>
<ul><li><strong>Onset:</strong> patches by end of 1st hour after death</li>
<li><strong>Coalescence:</strong> uniformly stained areas by 5-6 hours</li>
<li><strong>Fixation:</strong> ~7-8 hours (no blanching on thumb pressure for 30 seconds)</li>
<li><strong>Disappears:</strong> with onset of decomposition</li></ul>

<h4>Fixation Test</h4>
<p>Apply firm thumb pressure for 30 seconds:</p>
<ul><li><strong>Not fixed:</strong> blanches → livor will redistribute if body moved</li>
<li><strong>Fixed:</strong> no blanching → moving body will NOT redistribute</li></ul>

<h4>Distribution Patterns</h4>
<ul><li><strong>Supine:</strong> back, buttocks, posterior limbs (contact pallor at scapulae, sacrum, calves)</li>
<li><strong>Prone:</strong> face, anterior chest, abdomen</li>
<li><strong>Hanging:</strong> lower limbs + hands (&quot;glove-and-stocking&quot;)</li>
<li><strong>Vibices:</strong> patches between bands of clothing folds</li></ul>

<h4>Colour → Cause of Death</h4>
<table><tr><th>Cause</th><th>Colour</th><th>Mechanism</th></tr>
<tr><td>Normal (asphyxia)</td><td>Purplish-blue</td><td>Deoxyhaemoglobin</td></tr>
<tr><td>CO poisoning</td><td>Cherry-PINK</td><td>Carboxyhaemoglobin</td></tr>
<tr><td>Cyanide</td><td>Cherry-RED</td><td>Excess oxygenated blood</td></tr>
<tr><td>Refrigeration / Hypothermia</td><td>Pinkish</td><td>O₂ retained in cold blood</td></tr>
<tr><td>Sodium chlorate / nitrites</td><td>Chocolate-brown</td><td>Methaemoglobin</td></tr>
<tr><td>H₂S / putrefaction</td><td>Greenish</td><td>Sulphaemoglobin</td></tr></table>

<h4>Lividity vs Bruise</h4>
<ul><li><strong>Lividity:</strong> dependent parts, diffuse, indistinct margins, blood stays in vessels on incision, no vital reaction</li>
<li><strong>Bruise:</strong> anywhere, localised, distinct margins, blood extravasates into tissues, vital reaction present</li></ul>

<h4>Medico-Legal Importance</h4>
<ol><li>Sign of death — earliest reliable PM change</li>
<li>Time since death — fixation at ~7-8 hours</li>
<li>Position of body at death · scene tampering (if pattern doesn&apos;t match found position, body was moved after fixation)</li>
<li>Cause of death — colour suggests CO, cyanide, refrigeration, nitrites, etc.</li></ol>`,
    sources: ['DC-07 (Lividity)','DT-4','DT-8'],
    jumpToDiagram: 'DC-07'
  },
  {
    id: 'SAQ-7.4', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Write a short note on Brain Death — types, diagnostic criteria, medicolegal importance.',
    answer: `<h4>Definition</h4>
<p>Brain death is the irreversible loss of brain function while heart and lungs may still be supported on a ventilator. India recognises BRAINSTEM death as legal death under the Transplantation of Human Organs Act 1994.</p>

<h4>Three Types</h4>
<ol><li><strong>Cortical (Cerebral) Brain Death = Persistent Vegetative State</strong>
<ul><li>Loss of higher cortical function (awareness)</li>
<li>Brainstem INTACT — spontaneous respiration + cardiac activity</li>
<li>Patient called &quot;living cadaver&quot;</li>
<li>NOT legally dead in India</li>
<li>Causes: hypoxic / traumatic / toxic insult</li></ul></li>
<li><strong>Brainstem Death</strong> (★ legal death)
<ul><li>All brainstem functions permanently + irreversibly ceased</li>
<li>No respiration, no brainstem reflexes, no consciousness</li>
<li>Cardiac activity maintained only by ventilator</li>
<li>= LEGAL DEATH under THO Act 1994</li></ul></li>
<li><strong>Whole Brain Death</strong>
<ul><li>Cortical + Brainstem death combined</li>
<li>Final endpoint of severe global brain injury</li></ul></li></ol>

<h4>Diagnostic Criteria (THO Act 1994)</h4>
<p><strong>Prerequisites:</strong></p>
<ol><li>Deep coma with KNOWN cause of irreversible brainstem damage</li>
<li>Exclude reversible causes: hypothermia (&lt; 32.2 °C), CNS depressant drugs, metabolic/endocrine disturbances, alcohol intoxication</li></ol>
<p><strong>Tests:</strong></p>
<ol start="3"><li>ALL 5 brainstem reflexes absent (Pupillary · Corneal · Vestibulo-ocular · Grimace · Gag) — &quot;PCVGG&quot;</li>
<li>NO spontaneous respiration (apnoea test — no breathing even with PaCO₂ &gt; 60 mmHg)</li>
<li>Examined TWICE by board, at interval of 6 hours</li>
<li>Certificate signed by ALL 4 board members</li></ol>

<h4>Board of Experts (4 members)</h4>
<ol><li>RMP in-charge of hospital</li>
<li>Independent specialist RMP (from approved panel)</li>
<li>Neurologist OR neurosurgeon (from approved panel)</li>
<li>RMP treating the patient</li></ol>

<h4>Brainstem Reflexes — Cranial Nerves</h4>
<table><tr><th>Reflex</th><th>Afferent</th><th>Efferent</th></tr>
<tr><td>Pupillary</td><td>CN II</td><td>CN III</td></tr>
<tr><td>Corneal</td><td>CN V</td><td>CN VII</td></tr>
<tr><td>Vestibulo-ocular</td><td>CN VIII</td><td>CN III + VI</td></tr>
<tr><td>Grimace</td><td>CN V</td><td>CN VII</td></tr>
<tr><td>Gag / Cough</td><td>CN IX</td><td>CN X</td></tr></table>

<h4>Medico-Legal Importance</h4>
<ol><li><strong>Eligibility for cadaveric organ donation</strong> — only after brainstem death certification</li>
<li><strong>Legal withdrawal of life support</strong> — once certified, life support can be discontinued lawfully</li>
<li><strong>Time of death for legal purposes</strong> — inheritance, insurance, criminal proceedings</li>
<li><strong>Differentiates from PVS</strong> — PVS not legally dead; passive euthanasia in PVS only by Supreme Court direction (Aruna Shanbaug case 2011)</li></ol>`,
    sources: ['DC-02 (Brain Death)','DT-6'],
    jumpToDiagram: 'DC-02'
  },
  {
    id: 'SAQ-7.5', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Write a short note on Modes of Death (Bichat&apos;s Tripod).',
    answer: `<h4>Definition</h4>
<p>The MODE of death is the functional mechanism by which death occurred — the immediate physiological pathway. French anatomist Marie François Xavier Bichat (1800) described three modes — the &quot;tripod of life&quot;.</p>

<h4>Three Modes — Bichat&apos;s Tripod</h4>

<p><strong>1. Coma (Brain failure)</strong></p>
<ul><li>Loss of consciousness → loss of brainstem control of respiration/circulation → death</li>
<li>Causes: CNS depressant drugs, head injury, stroke, hypoxia, hepatic/uraemic encephalopathy, hypoglycaemia, poisoning</li>
<li>PM findings: cerebral oedema, congestion, ± underlying lesion</li></ul>

<p><strong>2. Syncope (Heart failure)</strong></p>
<ul><li>Sudden stopping of heart → cerebral anoxia → death in minutes</li>
<li>Causes: MI, arrhythmia (VF, asystole), vasovagal, haemorrhagic shock, cardiac tamponade, pulmonary embolism</li>
<li>PM findings: empty L heart, dark fluid blood, ± underlying cardiac pathology</li></ul>

<p><strong>3. Asphyxia (Lung failure)</strong></p>
<ul><li>Impaired O₂ + ↑ CO₂ → cerebral hypoxia → cardiac arrest</li>
<li>Causes: hanging, strangulation, suffocation, drowning (mechanical) · CO/cyanide poisoning (chemical) · pneumonia, severe asthma, pulmonary oedema (pathological)</li>
<li>PM findings: Tardieu spots, cyanosis, congestion, dark fluid blood, right heart dilatation (detailed in Ch 15)</li></ul>

<h4>The &quot;Tripod&quot; Concept</h4>
<p>Failure of ANY ONE function eventually drags the other two down:</p>
<ul><li>Coma → respiratory depression → cardiac arrest</li>
<li>Cardiac arrest → cerebral anoxia → respiratory arrest</li>
<li>Asphyxia → cerebral anoxia → cardiac arrest</li></ul>

<h4>Vagal Inhibition — Special Mode</h4>
<p>Modern addition to Bichat&apos;s tripod — sudden reflex cardiac arrest mediated by vagus nerve.</p>
<p><strong>Triggers:</strong></p>
<ul><li>Pressure on carotid sinus (mild neck pressure, throttling)</li>
<li>Pressure on epigastrium (sudden blow)</li>
<li>Cold-water immersion (hydrocution)</li>
<li>Sudden emotional shock</li>
<li>Distension of viscera (cervix during instrumentation, eye-ball pressure)</li></ul>
<p>Death is sudden with few or no asphyxial signs.</p>

<h4>Cause vs Mode vs Manner</h4>
<ul><li><strong>Cause</strong> = injury / disease that initiated death (e.g., stab wound to heart)</li>
<li><strong>Mode</strong> = functional mechanism (e.g., haemorrhagic shock = syncope)</li>
<li><strong>Manner</strong> = circumstantial / legal category (e.g., homicide)</li></ul>

<h4>MLI</h4>
<p>The doctor opines on CAUSE and MODE; MANNER is decided by the magistrate on totality of evidence.</p>`,
    sources: ['DC-03 (Modes of Death)','DC-04 (Manner of Death)'],
    jumpToDiagram: 'DC-03'
  },
  {
    id: 'SAQ-7.6', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Write a short note on Cadaveric Spasm — define, mechanism, types, medicolegal importance, differentiation from rigor mortis.',
    answer: `<h4>Definition</h4>
<p>Cadaveric spasm is a state where a muscle or group of muscles, instead of undergoing primary flaccidity, goes into sudden stiffening at the very moment of death.</p>
<p>Synonyms: Instantaneous rigor · Instant rigor · Cataleptic rigidity</p>

<h4>Mechanism</h4>
<p>The exact mechanism is unknown. It is associated with violent deaths coupled with intense emotional or physical exertion at the moment of death. Postulated: severe sympathetic discharge + immediate ATP depletion in active muscles → instantaneous acto-myosin lock without the usual primary flaccidity phase.</p>

<h4>Features</h4>
<ul><li><strong>Onset:</strong> IMMEDIATE — at moment of death</li>
<li><strong>Distribution:</strong> Usually a single muscle group (most often hand); rarely whole body</li>
<li><strong>Stiffness:</strong> VERY STRONG — cannot be overcome by force without breaking joints</li>
<li><strong>Skips primary flaccidity</strong></li>
<li><strong>Duration:</strong> Continues through the rigor mortis phase; disappears with secondary relaxation</li></ul>

<h4>Examples</h4>
<ul><li><strong>Drowning:</strong> Victim clutches weeds, grass, mud, sand → confirms antemortem drowning + struggle</li>
<li><strong>Suicide by firearm:</strong> Weapon firmly gripped in dominant hand</li>
<li><strong>Combat / assault:</strong> Victim&apos;s hand grasps hair, clothing fragments, button of assailant</li>
<li><strong>Sudden cardiac arrest:</strong> Pen / phone / object grasped at moment of collapse</li></ul>

<h4>Medico-Legal Importance (★ key)</h4>
<ol><li><strong>Proves the person was ALIVE + ACTIVE at the moment of death</strong></li>
<li><strong>In drowning</strong> — clutched weeds = antemortem drowning (vs body thrown in water postmortem)</li>
<li><strong>In suicide</strong> — weapon clutched in hand strongly suggests SUICIDE (homicide perpetrators rarely arrange this convincingly)</li>
<li><strong>In assault</strong> — hairs / cloth fragments may identify assailant (DNA / fibre evidence)</li>
<li><strong>Antemortem nature of injury</strong></li></ol>

<h4>Differentiation from Rigor Mortis</h4>
<table><tr><th>Feature</th><th>Rigor Mortis</th><th>Cadaveric Spasm</th></tr>
<tr><td>Time of onset</td><td>1-2 hours after death</td><td>IMMEDIATE</td></tr>
<tr><td>Primary flaccidity</td><td>Present (rigor follows it)</td><td>ABSENT (skipped)</td></tr>
<tr><td>Muscles involved</td><td>ALL gradually</td><td>Usually a group (e.g., hand)</td></tr>
<tr><td>Stiffness</td><td>Moderate</td><td>VERY STRONG</td></tr>
<tr><td>Mechanism</td><td>ATP depletion → acto-myosin gel</td><td>Unknown</td></tr>
<tr><td>Predisposing</td><td>None</td><td>Violence + emotional/physical exertion</td></tr>
<tr><td>MLI</td><td>TOD, position</td><td>Proves AM activity at death</td></tr></table>`,
    sources: ['DC-09 (Mimics of Rigor)','DT-2'],
    jumpToDiagram: 'DC-09'
  },
  {
    id: 'SAQ-7.7', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Write a short note on Algor Mortis — definition, mechanism, factors affecting cooling, medicolegal importance.',
    answer: `<h4>Definition</h4>
<p>Algor mortis = progressive cooling of the body after death until it equilibrates with ambient temperature.</p>
<p>(Latin: <em>algor</em> = coldness; <em>mortis</em> = of death.)</p>

<h4>Mechanism</h4>
<p>After death:</p>
<ul><li>No heat generation — all metabolism stops</li>
<li>Heat-regulating centre (hypothalamus) inactive</li>
<li>Heat is constantly lost to environment</li></ul>
<p>Heat loss occurs by 3 mechanisms simultaneously:</p>
<ol><li><strong>Conduction</strong> — direct contact (body to ground); also internal organs cool by conduction from skin inward</li>
<li><strong>Convection</strong> — heat carried away by moving air currents</li>
<li><strong>Radiation</strong> — infrared heat radiated to surroundings</li></ol>

<h4>Cooling Curve</h4>
<p>The fall of body temperature does NOT follow a simple exponential (Newton&apos;s law does not strictly apply to a composite body).</p>
<p>Actual curve = <strong>sigmoid (inverted S)</strong>:</p>
<ul><li><strong>Initial plateau</strong> (~3-4 hr) — inner core barely cools (surface insulates)</li>
<li><strong>Steep linear fall</strong> (~9-12 hr) — constant rate of core cooling</li>
<li><strong>Final plateau</strong> — equilibrium with ambient</li></ul>

<h4>Average Rate of Cooling — India</h4>
<p style="font-size: 1.1em;"><strong>0.4 – 0.7 °C per hour</strong> (≈ 0.8 – 1.3 °F per hour)</p>
<p>Marshall &amp; Hore formula (temperate climates): TOD (hr) ≈ (Normal body temp − Rectal temp) / Rate of fall</p>

<h4>Recording Sites</h4>
<ul><li><strong>Preferred:</strong> Rectum — 4 inches above anus</li>
<li><strong>Alternative:</strong> Sub-hepatic (intra-abdominal)</li>
<li><strong>Instrument:</strong> Chemical thermometer ~25 cm, graduation 0-50 °C</li>
<li><strong>Avoid:</strong> Axilla, oral, skin (surface readings fall too fast)</li></ul>

<h4>Factors Affecting Cooling</h4>
<table><tr><th>Faster cooling</th><th>Slower cooling</th></tr>
<tr><td>Low ambient temperature</td><td>High ambient temperature (tropical summer)</td></tr>
<tr><td>Thin body, low fat</td><td>Obese body (fat insulates)</td></tr>
<tr><td>Infant / child (high SA:mass)</td><td>Adults (lower SA:mass)</td></tr>
<tr><td>Undressed body</td><td>Clothed / wrapped</td></tr>
<tr><td>Air movement, breeze</td><td>Still air, enclosed space</td></tr>
<tr><td>Death in water</td><td>Buried in deep grave</td></tr></table>
<p><strong>Casper&apos;s dictum (cooling rate):</strong> Water : Air : Earth = 4 : 2 : 1.</p>

<h4>Postmortem Caloricity (paradoxical RISE)</h4>
<p>Body temperature may RISE (not fall) in early postmortem period in:</p>
<ul><li>Septicaemia, infectious diseases (bacterial heat production)</li>
<li>Sunstroke (heat regulation centre disturbed)</li>
<li>Pontine haemorrhage</li>
<li>Tetanus, strychnine poisoning (sustained muscle activity)</li>
<li>Universal postmortem glycogenolysis adds ~2 °C briefly</li></ul>

<h4>Medico-Legal Importance</h4>
<ol><li>Sign of death</li>
<li>Time since death — early TOD marker (best in cool/temperate climates)</li>
<li>Casper&apos;s dictum — adjust for medium of disposal</li>
<li>Tropical caveat — unreliable in Indian summer (ambient ≥ body temp)</li>
<li>Caloricity must be remembered — warm body does NOT always mean recent death</li></ol>`,
    sources: ['DC-06 (Algor Mortis)','DC-12 (TOD)'],
    jumpToDiagram: 'DC-06'
  },
  {
    id: 'SAQ-7.8', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Write a short note on Decomposition — external and internal signs, with Casper&apos;s dictum.',
    answer: `<h4>Definition</h4>
<p>Decomposition (putrefaction) = the disintegration of body tissues after death due to combined action of autolysis (self-enzymes) and bacterial putrefaction. It is the <strong>MOST ABSOLUTE sign of death</strong> — cannot occur in living tissue.</p>

<h4>Two Parallel Processes</h4>
<ol><li><strong>Autolysis</strong> — self-dissolution by enzymes released from lysosomes. Starts in pancreas + gastric mucosa first.</li>
<li><strong>Putrefaction</strong> — bacterial decomposition by saprophytic flora (<em>Clostridium welchii</em>, <em>E. coli</em>, Staphylococci, Proteus) producing H₂S, CO₂, methane, ammonia, mercaptans.</li></ol>

<h4>Three Main Changes in Putrefaction</h4>
<ol><li><strong>Colour</strong> — sulphaemoglobin → greenish discolouration</li>
<li><strong>Gas production</strong> → bloating</li>
<li><strong>Liquefaction</strong> — organs convert to thick semi-fluid matter</li></ol>

<h4>External Signs — Timeline (Summer; Winter slower)</h4>
<table><tr><th>Time</th><th>Finding</th></tr>
<tr><td>12-18 hr (18-24 winter)</td><td><strong>Greenish discolouration of RIGHT ILIAC FOSSA</strong> — first external sign (over caecum)</td></tr>
<tr><td>24 hr (36-48)</td><td>Marbling of skin (vessels prominent due to sulphmethaemoglobin)</td></tr>
<tr><td>24-36 hr</td><td>Bloating — abdomen distended, face puffy, eyes bulge, scrotal swelling, tongue protrudes</td></tr>
<tr><td>36-48 hr</td><td>Blisters, skin peeling, PM purging (blood-stained fluid)</td></tr>
<tr><td>18-36 hr</td><td>Fly eggs laid at orifices</td></tr>
<tr><td>2-3 days</td><td>Active maggot infestation</td></tr>
<tr><td>48-72 hr</td><td>Liquefaction begins</td></tr>
<tr><td>Weeks-months</td><td>Skeletonization</td></tr></table>

<h4>Internal Signs — Order of Putrefaction</h4>
<p><strong>EARLY (soft, vascular):</strong></p>
<ol><li>Brain</li><li>Larynx + trachea mucosa</li><li>Stomach + intestines</li><li>Spleen</li><li>Liver</li><li>Oesophagus</li><li>Diaphragm</li></ol>
<p><strong>LATE (firm, fibrous):</strong></p>
<ol start="8"><li>Heart</li><li>Lungs</li><li>Kidneys</li><li>Urinary bladder</li><li>Uterus (especially non-pregnant)</li><li><strong>Prostate</strong> — LAST to decompose</li></ol>

<h4>★ Casper&apos;s Dictum</h4>
<p>The most-tested fact about decomposition rates:</p>
<p style="font-size: 1.2em;"><strong>AIR : WATER : EARTH = 1 : 2 : 8</strong></p>
<p>A body decomposes in 1 week in air to the same extent as 2 weeks in water or 8 weeks buried in earth. Earth is slowest because of limited O₂, cooler temperature, fewer scavenging insects, soil insulation from temperature variation.</p>
<p>For cooling: Water : Air : Earth = 4 : 2 : 1 (water cools 4× faster than grave).</p>

<h4>Medico-Legal Importance</h4>
<ol><li>Most absolute sign of death</li>
<li>Time since death (timeline above)</li>
<li>Casper&apos;s dictum — adjust for medium of disposal</li>
<li>Identification difficulty — bloating distorts facial features</li>
<li>Forensic entomology — maggot succession gives precise PMI for days-weeks window</li>
<li>Late-decomposing organs (uterus, prostate) may still yield evidence (drugs, toxins, blood) in advanced cases</li></ol>`,
    sources: ['DC-10 (Decomposition)','DC-12 (TOD)'],
    jumpToDiagram: 'DC-10'
  },
  {
    id: 'SAQ-7.9', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Write a short note on Adipocere — definition, mechanism, conditions favouring formation, medicolegal importance.',
    answer: `<h4>Definition</h4>
<p>Adipocere is the conversion of body fat into a grey-white, soft, waxy, foul-smelling substance resembling rancid butter or candle wax.</p>
<p>Synonyms: Grave wax · Mortuary wax · Lipocera.</p>

<h4>Chemistry</h4>
<p>Body fat (triglycerides) undergoes <strong>hydrolysis + hydrogenation</strong>:</p>
<ul><li>Triglycerides → free saturated fatty acids (palmitic, stearic, oleic)</li>
<li>Glycerol is released and washed away</li>
<li><em>Clostridium perfringens</em> lecithinase enzyme plays a key role</li></ul>
<p>The resulting fatty acid mixture forms the characteristic wax.</p>

<h4>Conditions Favouring Formation</h4>
<ol><li><strong>MOIST environment</strong> (water content essential)</li>
<li><strong>WARM temperature</strong> (~20-30 °C)</li>
<li><strong>ANAEROBIC conditions</strong> (low oxygen)</li>
<li>Presence of <em>Clostridium</em> bacteria</li></ol>

<h4>Typical Scenarios</h4>
<ul><li>Bodies in water (rivers, ponds, lakes)</li>
<li>Septic tanks, sewers</li>
<li>Damp graves, marshy soil</li>
<li>Wells</li>
<li>Closed humid environments</li></ul>

<h4>Onset and Timeline</h4>
<ul><li><strong>First signs:</strong> 1-2 weeks postmortem</li>
<li><strong>Substantial adipocere:</strong> 3-4 weeks</li>
<li><strong>Complete:</strong> 3-6 months</li></ul>

<h4>First Sites Affected</h4>
<p>Fat-rich subcutaneous regions affected first:</p>
<ul><li>Cheeks</li><li>Breasts</li><li>Buttocks</li><li>Abdomen</li><li>Eventually whole body fat</li></ul>

<h4>Appearance</h4>
<ul><li>Grey-white to yellowish in colour</li>
<li>Soft, greasy, waxy consistency</li>
<li>Foul, rancid smell</li>
<li>Floats in water</li>
<li>Burns with a yellow flame when ignited</li></ul>

<h4>Medico-Legal Importance</h4>
<ol><li><strong>Body remains identifiable for months/years</strong></li>
<li><strong>Facial features preserved</strong> → identification possible</li>
<li><strong>Wounds, ligature marks, injuries preserved</strong> → cause of death may still be determinable</li>
<li><strong>Lividity, skin slippage often detectable</strong></li>
<li><strong>Indicates the body was in moist/anaerobic environment</strong> after death</li>
<li><strong>Time since death</strong> — at least several weeks (first signs at 1-2 wk; complete at 3-6 months)</li></ol>

<h4>Differentiation from Mummification</h4>
<p>Adipocere = wet preservation (moist, anaerobic, fat → fatty acids). Mummification = dry preservation (desiccation in dry/hot conditions). Both are modified decomposition.</p>`,
    sources: ['DC-11 (Adipocere/Mummification)','DT-5'],
    jumpToDiagram: 'DC-11'
  },
  {
    id: 'SAQ-7.10', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Write a short note on Mummification — definition, conditions, features, medicolegal importance.',
    answer: `<h4>Definition</h4>
<p>Mummification is the drying and shrinking of soft tissues of the body WITHOUT bacterial putrefaction, resulting in a hard, leathery, brown body resembling an Egyptian mummy.</p>

<h4>Mechanism</h4>
<p>Rapid loss of water from tissues prevents bacterial growth → tissues desiccate and harden. Without sufficient moisture, putrefactive bacteria cannot multiply.</p>

<h4>Conditions Favouring Formation</h4>
<ol><li><strong>DRY environment</strong> (low humidity)</li>
<li><strong>HOT temperature</strong></li>
<li><strong>Good VENTILATION</strong> (air movement promotes drying)</li></ol>

<h4>Typical Scenarios</h4>
<ul><li>Sandy soil in desert regions</li>
<li>Hot, dry attics or lofts</li>
<li>Well-ventilated chambers</li>
<li>Dry climate (Rajasthan summer)</li>
<li>Above-ground placement in arid conditions</li></ul>

<h4>Onset and Timeline</h4>
<ul><li><strong>First signs:</strong> 1-2 weeks postmortem (drying of exposed parts)</li>
<li><strong>Substantial:</strong> 1-2 months</li>
<li><strong>Complete:</strong> 3-12 months</li></ul>

<h4>First Sites Affected</h4>
<p>Exposed parts with high surface-area : volume ratio and low fat content:</p>
<ul><li>Fingers and toes (early)</li><li>Face (nose, ears)</li><li>Lips</li><li>Forearms</li><li>Eventually trunk follows</li></ul>

<h4>Appearance</h4>
<ul><li>Brown to dark-brown discolouration</li>
<li>Hard, leathery skin</li>
<li>Tissue tightly adherent to underlying bone</li>
<li>Facial features often well preserved (classical &quot;Egyptian mummy&quot; look)</li>
<li>Body weight drastically reduced (loss of water)</li>
<li>No putrid smell (no bacterial decomposition)</li></ul>

<h4>Medico-Legal Importance</h4>
<ol><li><strong>Body identifiable for YEARS</strong> (often much longer than adipocere)</li>
<li><strong>Facial features preserved</strong> → photographic identification possible</li>
<li><strong>Injuries preserved</strong> → wounds (sharp cuts, gunshot, ligature marks) remain detectable</li>
<li><strong>Identification of clothing + ornaments</strong> preserved on body</li>
<li><strong>Indicates dry, hot environment</strong> after death (geographical / contextual clue)</li>
<li><strong>Time since death</strong> — at least 1-2 weeks (first signs); months to years for full</li>
<li><strong>DNA</strong> can often be recovered from mummified tissue (especially bone marrow)</li></ol>

<h4>Differentiation from Adipocere</h4>
<table><tr><th>Feature</th><th>Adipocere</th><th>Mummification</th></tr>
<tr><td>Environment</td><td>Moist, warm, anaerobic</td><td>Dry, hot, ventilated</td></tr>
<tr><td>Mechanism</td><td>Hydrolysis of fat</td><td>Desiccation</td></tr>
<tr><td>Appearance</td><td>Soft, waxy, grey-white</td><td>Hard, leathery, brown</td></tr>
<tr><td>Smell</td><td>Foul, rancid</td><td>None (no putrefaction)</td></tr>
<tr><td>First sites</td><td>Cheeks, breasts (fat)</td><td>Fingers, face (exposed)</td></tr></table>`,
    sources: ['DC-11 (Adipocere/Mummification)','DT-5'],
    jumpToDiagram: 'DC-11'
  },
  {
    id: 'SAQ-7.11', type: 'SAQ', marks: 10, time: '~15 min', tag: 'QBank-Inspired',
    question: 'Describe how you would estimate Time of Death (TOD) in a body brought to the mortuary. Discuss the major postmortem changes used and their limitations.',
    answer: `<h4>Approach</h4>
<p>TOD estimation requires <strong>integration of multiple postmortem changes</strong>; no single sign is precise. The doctor gives a RANGE, not a single value. Always combine PM findings with scene investigation, last sighting, last meal, ambient conditions.</p>

<h4>Stepwise Method</h4>

<p><strong>1. Body temperature (algor mortis)</strong></p>
<ul><li>Record rectal temperature (4 in above anus)</li>
<li>Average rate of cooling in India: 0.4-0.7 °C/hr</li>
<li>Marshall &amp; Hore formula: TOD ≈ (37 − rectal °C) ÷ rate</li>
<li>Body warm = &lt; 4-6 hr; cold/ambient = &gt; 18-24 hr</li>
<li><strong>Limitations:</strong> unreliable in tropical Indian summer; affected by clothing, body habitus, medium (Casper 4:2:1); postmortem caloricity may give false warmth</li></ul>

<p><strong>2. Postmortem lividity</strong></p>
<ul><li>Patchy &amp; blanches on pressure: 1-6 hr</li>
<li>Uniform but blanches: 6-7 hr</li>
<li>Fixed (no blanching): &gt; 7-8 hr</li>
<li>Distribution shows position at death</li>
<li><strong>Limitations:</strong> can shift before fixation; colour modified by cause of death (CO = cherry-pink)</li></ul>

<p><strong>3. Rigor mortis</strong></p>
<ul><li>Just starting in face/jaw: 2-4 hr</li>
<li>Whole body: ~12 hr (Rule of 12)</li>
<li>Passing off: 24-36 hr</li>
<li>Gone (flaccid) + early decomposition: &gt; 36 hr</li>
<li><strong>Limitations:</strong> broken by handling and does NOT reset; varies with season (Indian data); modified by cause of death (strychnine = rapid, stays longer)</li></ul>

<p><strong>4. Decomposition (late changes)</strong></p>
<ul><li>Greenish discolouration RIF: 12-18 hr (summer), 18-24 hr (winter) — FIRST external sign</li>
<li>Marbling: 24 hr (summer)</li>
<li>Bloating + tongue protrusion: 24-48 hr</li>
<li>Blisters, peeling, PM purging: 36-48 hr</li>
<li>Liquefaction: 48-72 hr</li>
<li>Adipocere / mummification (signs): 1-2 weeks</li>
<li>Skeletonization: weeks-months</li>
<li><strong>Limitations:</strong> depends heavily on medium (Casper 1:2:8 air:water:earth) and ambient temperature</li></ul>

<p><strong>5. Eye changes</strong></p>
<ul><li>Tache noire (drying of exposed sclera): 2-3 hr (if eyes open)</li>
<li>Corneal haziness: 10-12 hr; opaque on decomposition</li>
<li>Retinal &quot;trucking&quot;: immediate</li>
<li>Vitreous K⁺ rise: linear with PMI (~0.17 mEq/L/hr); useful 24-100 hr</li></ul>

<p><strong>6. Stomach contents</strong></p>
<ul><li>Type + stage of digestion of food</li>
<li>Empty stomach ≈ 4-6 hours after last meal</li>
<li>Useful only when last meal time is known</li></ul>

<p><strong>7. Forensic entomology (★ for late PMI)</strong></p>
<ul><li>Fly eggs laid at orifices in 18-36 hr</li>
<li>Maggots active in 2-3 days</li>
<li>Pupal stage in 1-2 weeks</li>
<li>Adult fly emergence; subsequent waves of insects</li>
<li>Identifies days-to-weeks PMI accurately based on insect succession</li></ul>

<h4>Integration Example</h4>
<p>Body found in indoor air-conditioned room, fully clothed:</p>
<ul><li>Cool (29 °C rectal, ambient 24 °C): cooling ~2/3 done → ~12 hr</li>
<li>Lividity fixed → &gt; 7-8 hr (consistent)</li>
<li>Rigor fully established whole body → ~12 hr (consistent)</li>
<li>No decomposition signs yet → &lt; ~24 hr</li>
<li>Stomach: partially digested food (last meal known to be 6 hr before): supports ~12 hr</li></ul>
<p><strong>Conclusion:</strong> TOD approximately 10-14 hours before examination.</p>

<h4>General Principles</h4>
<ol><li>Always combine MULTIPLE markers; never a single sign</li>
<li>Always give a RANGE, never a point estimate</li>
<li>State the assumptions (ambient temp, clothing, posture)</li>
<li>Integrate scene + history + last meal + last sighting</li>
<li>Be conservative in court — over-precision = poor science</li></ol>`,
    sources: ['DC-05 (Sequence)','DC-06 (Algor)','DC-07 (Lividity)','DC-08 (Rigor)','DC-10 (Decomposition)','DC-12 (TOD Integration)'],
    jumpToDiagram: 'DC-12'
  }
];

return {
  chapterNumber: 7,
  chapterTitle: 'Death and Changes after Death',
  prereqs: [
    { term: 'Somatic (clinical) death', meaning: 'Permanent cessation of the body as an integrated unit — heart, lungs, brain all stop.' },
    { term: 'Cellular (molecular) death', meaning: 'Gradual death of individual cells/tissues over hours after somatic death.' },
    { term: 'Brainstem death', meaning: 'Irreversible cessation of brainstem function — = legal death in India (THO Act 1994).' },
    { term: 'Suspended animation', meaning: 'State where vital signs are so reduced they appear absent, but the person is alive (drowning, hypothermia).' },
    { term: 'Bichat&apos;s tripod of life', meaning: '3 vital functions — brain · heart · lungs — failure of any one causes death.' },
    { term: 'Mode of death', meaning: 'Functional mechanism — Coma · Syncope · Asphyxia · Vagal inhibition.' },
    { term: 'Manner of death', meaning: 'Circumstantial/legal category — Natural · Accidental · Suicide · Homicide · Undetermined.' },
    { term: 'Algor mortis', meaning: 'Postmortem cooling of body (~0.4-0.7 °C/hr in India).' },
    { term: 'Livor mortis (lividity)', meaning: 'Gravitational settling of blood → purplish discolouration of dependent parts.' },
    { term: 'Rigor mortis', meaning: 'Postmortem stiffness from ATP depletion + acto-myosin gel formation.' },
    { term: 'Cadaveric spasm', meaning: 'Immediate stiffness at moment of death — proves antemortem activity.' },
    { term: 'Putrefaction', meaning: 'Bacterial decomposition of body tissues — most absolute sign of death.' },
    { term: 'Adipocere', meaning: 'Modified decomposition — fat → grey-white wax in moist/anaerobic conditions.' },
    { term: 'Mummification', meaning: 'Modified decomposition — desiccation in dry/hot conditions → leathery brown body.' },
    { term: 'Casper&apos;s dictum', meaning: 'Decomposition rate Air:Water:Earth = 1:2:8 (cooling rate 4:2:1 water:air:earth).' }
  ],
  diagrams: [
    { id: 'DC-01', title: 'Death — Definition &amp; Types', shortTitle: 'Types of Death', svg: SVG_DC01,
      prereqs: [{term:'Somatic death',meaning:'Death of body as integrated unit.'},{term:'Cellular death',meaning:'Gradual death of individual cells.'},{term:'Brain death',meaning:'Irreversible cessation of brain function.'},{term:'Suspended animation',meaning:'Apparent death — vital signs imperceptible but alive.'}],
      nodes: nodeList(['death-definition','death-somatic','death-cellular','death-brain','death-suspended','death-signs']),
      mcqs: MCQS['DC-01']
    },
    { id: 'DC-02', title: 'Brain Death — Types &amp; Criteria (THO Act 1994)', shortTitle: 'Brain Death + Criteria', svg: SVG_DC02,
      prereqs: [{term:'Cortical brain death',meaning:'PVS — brainstem intact, no higher cortical function.'},{term:'Brainstem death',meaning:'= legal death in India.'},{term:'Whole brain death',meaning:'Cortex + brainstem dead.'},{term:'Apnoea test',meaning:'No spontaneous breath with PaCO₂ &gt; 60 mmHg.'},{term:'PCVGG',meaning:'Pupillary, Corneal, Vestibulo-ocular, Grimace, Gag — 5 brainstem reflexes.'}],
      nodes: nodeList(['bd-cortical','bd-brainstem','bd-whole','bd-criteria','bd-reflexes','bd-board']),
      mcqs: MCQS['DC-02']
    },
    { id: 'DC-03', title: 'Modes of Death — Bichat&apos;s Tripod', shortTitle: 'Modes of Death', svg: SVG_DC03,
      prereqs: [{term:'Coma',meaning:'Brain failure as mode of death.'},{term:'Syncope',meaning:'Sudden cardiac arrest as mode of death.'},{term:'Asphyxia',meaning:'Failure of respiration as mode of death.'},{term:'Vagal inhibition',meaning:'Reflex cardiac arrest from vagal stimulation.'}],
      nodes: nodeList(['mode-coma','mode-syncope','mode-asphyxia','mode-tripod','mode-vagal']),
      mcqs: MCQS['DC-03']
    },
    { id: 'DC-04', title: 'Manner of Death — 5 Categories', shortTitle: 'Manner of Death', svg: SVG_DC04,
      prereqs: [{term:'Natural',meaning:'Disease only, no trauma.'},{term:'Accidental',meaning:'Unintended external event.'},{term:'Suicide',meaning:'Self-inflicted.'},{term:'Homicide',meaning:'Killed by another.'},{term:'Undetermined',meaning:'Manner cannot be decided on evidence.'},{term:'§194 BNSS 2023',meaning:'Police inquest in unnatural deaths (formerly §174 CrPC).'}],
      nodes: nodeList(['man-natural','man-accident','man-suicide','man-homicide','man-undetermined','man-cause-vs-manner','man-suicide-vs-homicide']),
      mcqs: MCQS['DC-04']
    },
    { id: 'DC-05', title: 'Sequence of Changes after Death', shortTitle: 'PM Change Sequence', svg: SVG_DC05,
      prereqs: [{term:'Immediate changes',meaning:'Stoppage of NS, respiration, circulation — at somatic death.'},{term:'Early changes',meaning:'Algor, livor, rigor — minutes to 36 hr.'},{term:'Late changes',meaning:'Putrefaction, adipocere, mummification — 36 hr+.'}],
      nodes: nodeList(['seq-immediate','seq-early','seq-late','seq-timeline']),
      mcqs: MCQS['DC-05']
    },
    { id: 'DC-06', title: 'Algor Mortis — Body Cooling', shortTitle: 'Algor Mortis', svg: SVG_DC06,
      prereqs: [{term:'Newton&apos;s law',meaning:'Heat loss ∝ temp difference — does not strictly apply to cadaver.'},{term:'Sigmoid cooling curve',meaning:'Inverted S — initial plateau, steep fall, final plateau.'},{term:'Marshall-Hore formula',meaning:'TOD estimate from rectal temperature drop.'},{term:'Postmortem caloricity',meaning:'Paradoxical rise of body temp in early PM phase.'},{term:'Casper&apos;s dictum (cooling)',meaning:'Water:Air:Earth = 4:2:1.'}],
      nodes: nodeList(['algor-definition','algor-mechanism','algor-curve','algor-rate','algor-sites','algor-factors','algor-caloricity']),
      mcqs: MCQS['DC-06']
    },
    { id: 'DC-07', title: 'Postmortem Lividity (Livor Mortis)', shortTitle: 'Postmortem Lividity', svg: SVG_DC07,
      prereqs: [{term:'Hypostasis',meaning:'Gravitational pooling of blood after death.'},{term:'Vibices',meaning:'Patches of lividity between bands of clothing pressure.'},{term:'Contact pallor',meaning:'Pale areas where skin presses against ground.'},{term:'Carboxyhaemoglobin',meaning:'HbCO — cherry-pink colour in CO poisoning.'},{term:'Methaemoglobin',meaning:'Chocolate-brown colour in nitrite/chlorate poisoning.'}],
      nodes: nodeList(['liv-definition','liv-formation','liv-fixation','liv-colours','liv-patterns','liv-mli']),
      mcqs: MCQS['DC-07']
    },
    { id: 'DC-08', title: 'Rigor Mortis — Cadaveric Rigidity', shortTitle: 'Rigor Mortis', svg: SVG_DC08,
      prereqs: [{term:'Rule of 12',meaning:'12 hr to develop, 12 hr stays, 12 hr passes off.'},{term:'Acto-myosin gel',meaning:'Irreversible cross-bridge formation from ATP depletion.'},{term:'March of rigor',meaning:'Top-down onset order — eyelids first, hands last.'},{term:'Primary flaccidity',meaning:'Initial relaxation 1-2 hr post-death before rigor sets.'},{term:'Secondary relaxation',meaning:'Flaccidity returning after rigor passes off + decomposition.'}],
      nodes: nodeList(['rigor-definition','rigor-mechanism','rigor-march','rigor-rule12','rigor-factors','rigor-mli']),
      mcqs: MCQS['DC-08']
    },
    { id: 'DC-09', title: 'Conditions Simulating Rigor Mortis', shortTitle: 'Mimics of Rigor', svg: SVG_DC09,
      prereqs: [{term:'Cadaveric spasm',meaning:'Immediate stiffness at moment of death.'},{term:'Heat stiffening',meaning:'Muscle protein coagulation &gt; 65°C → pugilistic attitude.'},{term:'Cold stiffening',meaning:'Freezing of body fluids → disappears on rewarming.'},{term:'Gas stiffening',meaning:'False rigidity from putrefactive gas distension.'},{term:'Pugilistic attitude',meaning:'Boxer-like flexed pose in burnt bodies.'}],
      nodes: nodeList(['sim-cadaveric','sim-heat','sim-cold','sim-gas']),
      mcqs: MCQS['DC-09']
    },
    { id: 'DC-10', title: 'Decomposition + Casper&apos;s Dictum', shortTitle: 'Decomposition', svg: SVG_DC10,
      prereqs: [{term:'Autolysis',meaning:'Self-dissolution by lysosomal enzymes — pancreas first.'},{term:'Putrefaction',meaning:'Bacterial decomposition — most absolute sign of death.'},{term:'Sulphmethaemoglobin',meaning:'Greenish pigment causing marbling and discolouration.'},{term:'Casper&apos;s dictum',meaning:'Decomposition rate Air:Water:Earth = 1:2:8.'},{term:'Maggot succession',meaning:'Fly larvae stages used for forensic entomology.'}],
      nodes: nodeList(['dec-autolysis','dec-putrefaction','dec-external','dec-internal','dec-casper']),
      mcqs: MCQS['DC-10']
    },
    { id: 'DC-11', title: 'Adipocere &amp; Mummification', shortTitle: 'Adipocere / Mummification', svg: SVG_DC11,
      prereqs: [{term:'Adipocere',meaning:'Fat → grey-white wax in moist anaerobic conditions.'},{term:'Mummification',meaning:'Desiccation in dry hot conditions — leathery brown body.'},{term:'Maceration',meaning:'Aseptic autolysis of dead fetus in utero.'},{term:'Spalding sign',meaning:'Overlapping skull bones on X-ray in macerated fetus.'},{term:'Saponification',meaning:'Conversion of fat to fatty acid salts in adipocere.'}],
      nodes: nodeList(['adip-definition','mum-definition','modif-compare','modif-maceration']),
      mcqs: MCQS['DC-11']
    },
    { id: 'DC-12', title: 'Time of Death (TOD) Estimation', shortTitle: 'TOD Estimation', svg: SVG_DC12,
      prereqs: [{term:'Postmortem interval (PMI)',meaning:'Time elapsed since death.'},{term:'Vitreous K⁺',meaning:'Rises linearly with PMI — useful 24-100 hr.'},{term:'Forensic entomology',meaning:'Insect succession for late PMI estimation.'},{term:'Tache noire',meaning:'Brown drying of exposed sclera 2-3 hr if eyes open.'}],
      nodes: nodeList(['tod-early','tod-late','tod-other','tod-caveats']),
      mcqs: MCQS['DC-12']
    }
  ],
  diffTables: DIFF_TABLES,
  subjectiveQs: SUBJ,
  highYield: [
    '<strong>Death = process not event</strong>: Somatic → Cellular → Brain · Putrefaction = MOST ABSOLUTE sign',
    '<strong>India legal death</strong>: Brainstem death under Transplantation of Human Organs Act <strong>1994</strong>',
    'Brain death board = <strong>4 members</strong> · examined twice at <strong>6-hour interval</strong>',
    '<strong>5 brainstem reflexes (PCVGG)</strong>: Pupillary · Corneal · Vestibulo-ocular · Grimace · Gag — all absent in BSD',
    '<strong>Bichat&apos;s tripod</strong>: Brain (coma) · Heart (syncope) · Lungs (asphyxia) — failure of any one drags down other two',
    '<strong>Vagal inhibition</strong> = sudden reflex cardiac arrest — few asphyxial signs (hydrocution, light blow to neck)',
    'Manner of death = 5 categories: <strong>Natural · Accidental · Suicide · Homicide · Undetermined</strong>',
    'Cause = injury/disease · Mode = functional mechanism · <strong>Manner = legal category (decided by magistrate)</strong>',
    '<strong>Algor mortis</strong> rate in India = <strong>0.4-0.7 °C/hour</strong>',
    'Cooling curve is <strong>SIGMOID</strong> (not simple exponential) — Newton&apos;s law does not apply to cadaver',
    '<strong>Casper&apos;s dictum (cooling)</strong>: Water : Air : Earth = <strong>4 : 2 : 1</strong>',
    '<strong>Casper&apos;s dictum (decomposition)</strong>: Air : Water : Earth = <strong>1 : 2 : 8</strong>',
    '<strong>Postmortem caloricity</strong> (temp RISES) — septicaemia, sunstroke, pontine bleed, tetanus, strychnine',
    '<strong>Lividity fixes at ~7-8 hours</strong> (no blanching on thumb pressure)',
    '<strong>Cherry-pink lividity</strong> = CO poisoning (carboxyhaemoglobin)',
    '<strong>Chocolate-brown lividity</strong> = nitrite / sodium chlorate (methaemoglobin)',
    '<strong>Rule of 12</strong>: rigor takes 12 hr to develop, stays 12 hr, takes 12 hr to pass off (~36 hr total)',
    'Rigor onset: <strong>orbicularis oculi first</strong> in voluntary muscles · heart first overall · <strong>hands/feet last</strong>',
    'Electrocution → rigor <strong>early onset + early off</strong> · Strychnine → rapid onset <strong>STAYS LONGER</strong>',
    '<strong>Cadaveric spasm</strong> = IMMEDIATE stiffness — proves AM activity (clutched weapon/weeds)',
    '<strong>Pugilistic attitude</strong> (boxer pose) in burnt body = heat stiffening (&gt;65°C coagulates muscle)',
    '<strong>First external sign of putrefaction</strong> = greenish discolouration of <strong>RIGHT ILIAC FOSSA</strong> (caecum) at 12-18 hr summer',
    '<strong>Order of internal putrefaction</strong>: Brain first · <strong>Prostate LAST</strong>',
    'Maggot eggs laid in <strong>18-36 hours</strong> · forensic entomology = days-weeks PMI',
    '<strong>Adipocere</strong> = grey-white wax · MOIST + WARM + anaerobic · cheeks/breasts/buttocks first',
    '<strong>Mummification</strong> = leathery brown body · DRY + HOT + ventilated · fingers/face first',
    '<strong>Maceration</strong> = aseptic autolysis of dead fetus in utero · Spalding sign on X-ray = stillbirth',
    'TOD always given as a <strong>RANGE</strong>, never a single value · combine ALL markers · scene + history essential',
    '<strong>Vitreous K⁺</strong> rises linearly with PMI — useful 24-100 hr',
    'Adipocere &amp; mummification = modified decomposition — body preserved months/years (identification possible)'
  ]
};

})();
