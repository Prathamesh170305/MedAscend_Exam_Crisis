/* ===================================================================
   Medascend FMT — Chapter 14: Thermal Injuries
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

const SVG_TI01 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Thermal Injuries — Master Classification</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">By temperature direction (cold vs heat) · By extent (general vs local)</text>

<g data-node-id="ti-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🌡️ THERMAL INJURY — Definition</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Tissue damage from exposure to abnormal temperature — either <strong>COLD</strong> (below body temp) or <strong>HEAT</strong> (above body temp). Effects may be <strong>GENERAL</strong> (whole body, systemic) or <strong>LOCAL</strong> (focal contact).</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ti-cold-general"><rect class="body-white" x="60" y="240" width="730" height="180" rx="14"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" class="t-nlg">❄️ COLD — General Effect</text><text x="80" y="345" class="t-keylbl">HYPOTHERMIA</text><text x="240" y="345" class="t-keyval">core temp &lt; 35°C (95°F)</text><text x="80" y="375" class="t-keyval">• Mild 32-35°C · Moderate 28-32°C · Severe &lt; 28°C</text><text x="80" y="400" class="t-keyval">• Mountaineers · drowning survivors · elderly · alcoholics</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ti-cold-local"><rect class="body-white" x="810" y="240" width="730" height="180" rx="14"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gBlue)"/><text x="830" y="285" class="t-nlg">❄️ COLD — Local Effects</text><text x="830" y="345" class="t-keyval">• <strong>Frostbite</strong> — freezing &amp; vasoconstriction (4 degrees)</text><text x="830" y="370" class="t-keyval">• <strong>Trench foot / Immersion foot</strong> — wet cold 5-6°C</text><text x="830" y="395" class="t-keyval">• <strong>Pernio (Chilblains)</strong> — vasculitic reaction to cold</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ti-heat-general"><rect class="body-white" x="60" y="440" width="730" height="180" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,440 H 776 A 14,14 0 0 1 790,454 V 505 H 60 V 454 A 14,14 0 0 1 74,440 Z" fill="url(#gRed)"/><text x="80" y="485" class="t-nlg">🔥 HEAT — General Effects</text><text x="80" y="545" class="t-keyval">• <strong>Heat syncope</strong> (heat collapse / exhaustion)</text><text x="80" y="570" class="t-keyval">• <strong>Heat cramps</strong> — electrolyte loss</text><text x="80" y="595" class="t-keyval">• <strong>Heat stroke / sunstroke</strong> — core &gt; 41°C (106°F) ★</text><circle class="ic" cx="770" cy="458" r="14"/><text class="t-info" x="770" y="464" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ti-heat-local"><rect class="body-white" x="810" y="440" width="730" height="180" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 824,440 H 1526 A 14,14 0 0 1 1540,454 V 505 H 810 V 454 A 14,14 0 0 1 824,440 Z" fill="url(#gRed)"/><text x="830" y="485" class="t-nlg">🔥 HEAT — Local Effects</text><text x="830" y="545" class="t-keyval">• <strong>Burns</strong> — DRY heat (flame, contact, friction, chemical, electric, radiation)</text><text x="830" y="570" class="t-keyval">• <strong>Scalds</strong> — MOIST heat (liquid ≥ 50°C, steam)</text><text x="830" y="595" class="t-keyval">• <strong>Electrocution</strong> &amp; <strong>Lightning</strong> — current-induced thermal damage</text><circle class="ic" cx="1530" cy="458" r="14"/><text class="t-info" x="1530" y="464" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ti-burn-causes"><rect x="60" y="640" width="900" height="200" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="510" y="680" class="t-nlg" text-anchor="middle">📋 CAUSATION — Who gets burned?</text><text x="90" y="718" class="t-body">• <strong>Infants / toddlers</strong> — scalds from spilled liquid (kitchen accidents)</text><text x="90" y="743" class="t-body">• <strong>Children</strong> — matchbox / bonfire play · battered baby (cigarette, hot fork)</text><text x="90" y="768" class="t-body">• <strong>Epileptics, intoxicated, senile</strong> — fall into fire / cooking flame</text><text x="90" y="793" class="t-body">• <strong>Bride / dowry burns</strong> — kerosene + ignition · ★ India epidemic</text><text x="90" y="818" class="t-body">• <strong>Industrial</strong> — furnace, mining, electrical · <strong>Transport</strong> — aviation</text><circle class="ic" cx="940" cy="658" r="14"/><text class="t-info" x="940" y="664" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ti-legal-frame"><rect x="980" y="640" width="560" height="200" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="680" class="t-nlg" text-anchor="middle">⚖️ Legal Frame (BNS 2023)</text><text x="1000" y="718" class="t-body">• <strong>BNS 80</strong> — Dowry death (was IPC 304-B)</text><text x="1000" y="743" class="t-body">• <strong>BNS 85 / 86</strong> — Cruelty by husband / relative (498-A)</text><text x="1000" y="768" class="t-body">• <strong>BNS 118</strong> — Hurt by fire / heated substance / acid</text><text x="1000" y="793" class="t-body">• <strong>BNS 124</strong> — Acid attack (326A/B)</text><text x="1000" y="818" class="t-body">• <strong>BSA 117 / 118</strong> — Presumption: AOS / dowry death</text><circle class="ic" cx="1520" cy="658" r="14"/><text class="t-info" x="1520" y="664" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="860" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="898" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 4-cell matrix: COLD/HEAT × GENERAL/LOCAL · Pugilistic + Heat Rupture + Heat Stroke (106°F) are the heaviest PYQ targets</text>

<rect x="60" y="940" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="978" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">📅 BNS replaced IPC on 1 July 2024 · BSA replaced IEA · IPC numbers still tested as legacy in 2016-2024 PYQs</text>

<rect x="60" y="1020" width="1480" height="60" rx="10" fill="url(#gGrey)"/><text x="800" y="1058" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⚠️ NEET-PG 2016 Q28 — Pugilistic attitude = BURNS · 2021 Q9 / 2023 Q1 — Heat stroke = hot DRY skin (NO sweating)</text>
</svg>`;

const SVG_TI02 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Hypothermia — General Effect of Cold</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Core body temp &lt; 35°C · "White death" · Pinkish lividity · Wischnewski ulcers</text>

<g data-node-id="hypo-def"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">❄️ HYPOTHERMIA — Definition</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">State in which an individual's <strong>CORE BODY TEMPERATURE falls below 35°C (95°F)</strong>. Heat loss exceeds heat production. Diagnosed by rectal / oesophageal probe — peripheral thermometers underestimate.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="hypo-class"><rect class="body-white" x="60" y="240" width="490" height="320" rx="14"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" class="t-nlg">📊 Severity Grading</text><text x="80" y="345" class="t-keylbl">MILD</text><text x="170" y="345" class="t-keyval">core 32 – 35°C</text><text x="100" y="365" class="t-keyval">shivering · ↑HR · ↑BP · confusion</text><text x="80" y="405" class="t-keylbl">MODERATE</text><text x="200" y="405" class="t-keyval">core 28 – &lt; 32°C</text><text x="100" y="425" class="t-keyval">stupor · bradycardia · ↓BP · shivering stops</text><text x="80" y="465" class="t-keylbl">SEVERE</text><text x="180" y="465" class="t-keyval">core &lt; 28°C ★</text><text x="100" y="485" class="t-keyval">coma · ventricular fibrillation · apnoea</text><text x="80" y="520" class="t-keyval" font-style="italic">★ Below 28°C — heart prone to VF on any handling</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="hypo-causes"><rect class="body-white" x="570" y="240" width="490" height="320" rx="14"/><path d="M 584,240 H 1046 A 14,14 0 0 1 1060,254 V 305 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gGreen)"/><text x="590" y="285" class="t-nlg">🌡️ Causes / Risk Factors</text><text x="590" y="345" class="t-keyval">1. <strong>Environmental</strong> — cold + exhaustion (mountaineers, snowstorm)</text><text x="590" y="370" class="t-keyval">2. <strong>Immersion</strong> — cold water drowning survivors</text><text x="590" y="395" class="t-keyval">3. <strong>↑ Heat loss</strong> — burns, psoriasis, TEN</text><text x="590" y="430" class="t-keyval">4. <strong>↓ Heat production</strong> — malnutrition, hypothyroid, hepatic failure</text><text x="590" y="465" class="t-keyval">5. <strong>Drug-induced</strong> — phenothiazines, barbiturates, ethanol, opiates</text><text x="590" y="500" class="t-keyval">6. <strong>Iatrogenic</strong> — prolonged anaesthesia, cold transfusion</text><text x="590" y="535" class="t-keyval">7. <strong>Extremes of age</strong> — neonates, elderly</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="hypo-autopsy"><rect class="body-white" x="1080" y="240" width="460" height="320" rx="14" stroke="#7B5FA8" stroke-width="3"/><path d="M 1094,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 1080 V 254 A 14,14 0 0 1 1094,240 Z" fill="url(#gPurple)"/><text x="1090" y="285" class="t-nlg">🔬 Autopsy Findings ★</text><text x="1090" y="345" class="t-keyval">• <strong>Pinkish lividity</strong> — persistent oxy-Hb (cold tissues don't use O₂)</text><text x="1090" y="380" class="t-keyval">• Skin: erythematous patches over knees / elbows / hips ("frost erythema")</text><text x="1090" y="415" class="t-keyval">• "<strong>White death</strong>" — rarely pale skin</text><text x="1090" y="445" class="t-keyval">• <strong>Wischnewski ulcers</strong> — gastric mucosal haemorrhages</text><text x="1090" y="480" class="t-keyval">• Pancreatitis · acute tubular necrosis</text><text x="1090" y="510" class="t-keyval">• ↑ Urinary catecholamines</text><text x="1090" y="540" class="t-keyval">• Hyperglycaemia + glucosuria</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="hypo-cod"><rect x="60" y="580" width="900" height="200" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="510" y="620" class="t-nlg" text-anchor="middle">💀 Causes of Death</text><text x="90" y="660" class="t-body">1. <strong>Ventricular fibrillation</strong> ★ — main mechanism in severe (&lt; 28°C)</text><text x="90" y="688" class="t-body">2. <strong>Disseminated intravascular coagulation</strong></text><text x="90" y="716" class="t-body">3. Acid-base imbalance (metabolic acidosis)</text><text x="90" y="744" class="t-body">4. Bronchospasm</text><text x="90" y="772" class="t-body">5. Pulmonary oedema · fresh lung haemorrhages</text><circle class="ic" cx="940" cy="598" r="14"/><text class="t-info" x="940" y="604" text-anchor="middle">ⓘ</text></g>

<g data-node-id="hypo-pitfalls"><rect x="980" y="580" width="560" height="200" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="620" class="t-nlg" text-anchor="middle">⚠️ Diagnostic Pitfalls</text><text x="1000" y="658" class="t-body">• Hypothermic patients may APPEAR dead</text><text x="1000" y="682" class="t-body">• "<strong>Not dead until WARM and dead</strong>" ★</text><text x="1000" y="708" class="t-body">• Rewarm to ≥ 35°C before declaring death</text><text x="1000" y="732" class="t-body">• Pink lividity → don't mistake for CO/cyanide poisoning</text><text x="1000" y="758" class="t-body">• Differential: barbiturate / CNS depressant overdose</text><circle class="ic" cx="1520" cy="598" r="14"/><text class="t-info" x="1520" y="604" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="800" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="838" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Hypothermia = core &lt; 35°C · Severe &lt; 28°C → VF risk · Pink lividity + Wischnewski ulcers = autopsy hallmark</text>

<rect x="60" y="880" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="918" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">📚 Differential of pink lividity: <strong>Hypothermia · CO poisoning · Cyanide · Refrigeration of body</strong> (see Ch 7 lividity table)</text>

<rect x="60" y="960" width="1480" height="60" rx="10" fill="url(#gGrey)"/><text x="800" y="998" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⚠️ "Not dead until warm and dead" — rewarm to 35°C before declaring · VF reversible up to 33-34°C with rewarming + defibrillation</text>
</svg>`;

const SVG_TI03 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Local Cold Effects — Frostbite · Trench Foot · Pernio</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Distal extremities · freezing vs wet-cold vs vasculitic responses</text>

<g data-node-id="cold-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">❄️ LOCAL COLD INJURY — Anatomy of Vulnerability</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Distal extremities (fingers, toes) + facial prominences (ears, nose, chin, cheeks) — poor blood supply + maximum surface area. Mechanism: <strong>freezing + vasoconstriction</strong> (frostbite) OR <strong>wet cold</strong> (trench foot) OR <strong>vasculitic reaction</strong> (pernio).</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="frostbite-def"><rect class="body-white" x="60" y="240" width="490" height="380" rx="14" stroke="#15294F" stroke-width="3"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" class="t-nlg">🥶 FROSTBITE</text><text x="80" y="345" class="t-keylbl">Mechanism:</text><text x="200" y="345" class="t-keyval">DRY cold or contact with</text><text x="100" y="365" class="t-keyval">object &lt; 0°C → freezing + vasoconstriction</text><text x="80" y="400" class="t-keylbl">Settings:</text><text x="170" y="400" class="t-keyval">Mountaineering, polar trips,</text><text x="100" y="420" class="t-keyval">winter expeditions, Ladakh / Kashmir</text><text x="80" y="455" class="t-keylbl">Sites:</text><text x="150" y="455" class="t-keyval">Fingers · toes · ears · nose · chin</text><text x="80" y="490" class="t-keylbl">Symptoms:</text><text x="200" y="490" class="t-keyval">Numbness → pain → pallor</text><text x="100" y="510" class="t-keyval">→ blackening / gangrene on rewarming</text><text x="80" y="545" class="t-keylbl">Treatment:</text><text x="200" y="545" class="t-keyval">Rapid rewarming in 40-42°C</text><text x="100" y="565" class="t-keyval">water · analgesia · tetanus · NO rubbing</text><text x="80" y="590" class="t-keyval">★ <strong>Delayed amputation</strong> — wait for line of demarcation</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="frostbite-degrees"><rect class="body-white" x="570" y="240" width="490" height="380" rx="14"/><path d="M 584,240 H 1046 A 14,14 0 0 1 1060,254 V 305 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gPurple)"/><text x="590" y="285" class="t-nlg">📋 4 Degrees of Frostbite</text><text x="590" y="345" class="t-keylbl">1st degree:</text><text x="710" y="345" class="t-keyval">Erythema + oedema</text><text x="610" y="365" class="t-keyval">of skin · superficial · reversible</text><text x="590" y="405" class="t-keylbl">2nd degree:</text><text x="720" y="405" class="t-keyval">Blister formation</text><text x="610" y="425" class="t-keyval">(epidermis affected, dermis intact)</text><text x="590" y="465" class="t-keylbl">3rd degree:</text><text x="720" y="465" class="t-keyval">Skin + subcutaneous</text><text x="610" y="485" class="t-keyval">tissue NECROSIS (full thickness)</text><text x="590" y="525" class="t-keylbl">4th degree:</text><text x="720" y="525" class="t-keyval">Total tissue loss</text><text x="610" y="545" class="t-keyval">including <strong>MUSCLE and BONE</strong></text><text x="590" y="580" class="t-keyval" font-style="italic">★ Black gangrene = 3rd / 4th degree (Ladakh PYQ)</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="trench-foot"><rect class="body-white" x="1080" y="240" width="460" height="380" rx="14" stroke="#3D8B5B" stroke-width="3"/><path d="M 1094,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 1080 V 254 A 14,14 0 0 1 1094,240 Z" fill="url(#gGreen)"/><text x="1090" y="285" class="t-nlg">💧 TRENCH / IMMERSION FOOT</text><text x="1090" y="345" class="t-keylbl">Mechanism:</text><text x="1210" y="345" class="t-keyval">WET cold (5-6°C)</text><text x="1110" y="365" class="t-keyval">prolonged · wetness penetrates further</text><text x="1090" y="400" class="t-keylbl">Settings:</text><text x="1180" y="400" class="t-keyval">WW1 trenches,</text><text x="1110" y="420" class="t-keyval">fishermen, flood victims, soldiers</text><text x="1090" y="455" class="t-keylbl">Features:</text><text x="1190" y="455" class="t-keyval">Pale, swollen, cold</text><text x="1110" y="475" class="t-keyval">foot · numb · later red &amp; painful</text><text x="1090" y="510" class="t-keylbl">Complication:</text><text x="1240" y="510" class="t-keyval">Obliterating</text><text x="1110" y="530" class="t-keyval">angiitis → gangrene · loss of digits</text><text x="1090" y="565" class="t-keyval" font-style="italic">★ Distinguishes from frostbite: WET, not frozen</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="pernio"><rect x="60" y="640" width="900" height="200" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="510" y="680" class="t-nlg" text-anchor="middle">🟣 PERNIO (Chilblains)</text><text x="90" y="718" class="t-body"><strong>Vasculitic disorder</strong> — abnormal vascular response to cold (above freezing)</text><text x="90" y="743" class="t-body">• Raised <strong>ERYTHEMATOUS LESIONS</strong> on lower legs &amp; feet (sometimes hands)</text><text x="90" y="768" class="t-body">• <strong>Pruritus + burning sensation</strong> · purplish discoloration</text><text x="90" y="793" class="t-body">• More common in young women · associated with Raynaud's</text><text x="90" y="818" class="t-body">• Treatment: <strong>warming · nifedipine</strong> for vasospasm · topical steroids</text><circle class="ic" cx="940" cy="658" r="14"/><text class="t-info" x="940" y="664" text-anchor="middle">ⓘ</text></g>

<g data-node-id="prevention"><rect x="980" y="640" width="560" height="200" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="680" class="t-nlg" text-anchor="middle">🛡️ Prevention</text><text x="1000" y="715" class="t-body">• Layered insulating clothing (esp. extremities)</text><text x="1000" y="738" class="t-body">• Keep feet DRY — change socks frequently</text><text x="1000" y="761" class="t-body">• Avoid alcohol &amp; smoking (peripheral vasoconstriction)</text><text x="1000" y="784" class="t-body">• Stay hydrated · maintain caloric intake</text><text x="1000" y="807" class="t-body">• Buddy system in extreme cold</text><circle class="ic" cx="1520" cy="658" r="14"/><text class="t-info" x="1520" y="664" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="860" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="898" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Frostbite (DRY cold, &lt; 0°C) · Trench foot (WET cold, 5-6°C) · Pernio (vasculitis, above freezing)</text>

<rect x="60" y="940" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="978" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">📝 SAQ: 24-y/o Ladakh hiker with blackened toes → Frostbite (3rd-4th degree) → rapid rewarming + delayed amputation</text>

<rect x="60" y="1020" width="1480" height="60" rx="10" fill="url(#gGrey)"/><text x="800" y="1058" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⚠️ NEVER rub frostbitten tissue (mechanical damage to frozen tissue) · NEVER use direct flame heat · delayed amputation only</text>
</svg>`;

const SVG_TI04 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">General Heat Effects — Stroke · Exhaustion · Cramps · Syncope</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Heat regulation failure ladder · Heat stroke 106°F = HOT DRY skin ★</text>

<g data-node-id="heat-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🔥 HYPERTHERMIA — Definition</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Elevation of body temperature <strong>above the hypothalamic set point</strong> (normal 37°C / 98.6°F). Reflects failure of heat dissipation — sweating, vasodilation, behavioural cooling can no longer keep pace with thermal load.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="heat-syncope"><rect class="body-white" x="60" y="240" width="370" height="280" rx="14"/><path d="M 74,240 H 416 A 14,14 0 0 1 430,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gGreen)"/><text x="80" y="278" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="white">🟢 HEAT SYNCOPE</text><text x="80" y="335" class="t-keyval">aka heat collapse · heat exhaustion ·</text><text x="80" y="355" class="t-keyval">heat prostration</text><text x="80" y="385" class="t-keylbl">Mechanism:</text><text x="80" y="405" class="t-keyval">Peripheral vasodilation →</text><text x="80" y="425" class="t-keyval">hypotension → cerebral hypoperfusion</text><text x="80" y="455" class="t-keylbl">Features:</text><text x="80" y="475" class="t-keyval">Prostration, pallor, hypotension,</text><text x="80" y="495" class="t-keyval">flushing, headache, oliguria</text><circle class="ic" cx="420" cy="258" r="14"/><text class="t-info" x="420" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="heat-cramps"><rect class="body-white" x="450" y="240" width="370" height="280" rx="14"/><path d="M 464,240 H 806 A 14,14 0 0 1 820,254 V 295 H 450 V 254 A 14,14 0 0 1 464,240 Z" fill="url(#gOrange)"/><text x="470" y="278" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="white">🟠 HEAT CRAMPS</text><text x="470" y="335" class="t-keyval">aka miner's cramps · stoker's cramps ·</text><text x="470" y="355" class="t-keyval">boiler-room cramps</text><text x="470" y="385" class="t-keylbl">Mechanism:</text><text x="470" y="405" class="t-keyval"><strong>Hyponatraemia + electrolyte loss</strong></text><text x="470" y="425" class="t-keyval">from profuse sweating in hot work</text><text x="470" y="455" class="t-keylbl">Features:</text><text x="470" y="475" class="t-keyval">Painful spasm of voluntary muscles</text><text x="470" y="495" class="t-keyval">(calves, abdomen)</text><text x="470" y="515" class="t-keylbl">Rx: ORS / IV saline</text><circle class="ic" cx="810" cy="258" r="14"/><text class="t-info" x="810" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="heat-exhaustion"><rect class="body-white" x="840" y="240" width="370" height="280" rx="14"/><path d="M 854,240 H 1196 A 14,14 0 0 1 1210,254 V 295 H 840 V 254 A 14,14 0 0 1 854,240 Z" fill="url(#gOrange)"/><text x="860" y="278" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="white">🟠 HEAT EXHAUSTION</text><text x="860" y="335" class="t-keyval">Volume + electrolyte depletion</text><text x="860" y="355" class="t-keyval">without core temp &gt; 40°C</text><text x="860" y="385" class="t-keylbl">Temperature:</text><text x="860" y="405" class="t-keyval">37 – 40°C (99 – 104°F)</text><text x="860" y="435" class="t-keylbl">Features:</text><text x="860" y="455" class="t-keyval"><strong>Sweating PRESERVED</strong> ·</text><text x="860" y="475" class="t-keyval">cool clammy skin · weakness ·</text><text x="860" y="495" class="t-keyval">nausea · headache · tachycardia ·</text><text x="860" y="515" class="t-keyval">consciousness preserved</text><circle class="ic" cx="1200" cy="258" r="14"/><text class="t-info" x="1200" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="heat-stroke"><rect class="body-white" x="1230" y="240" width="310" height="280" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 1244,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 1230 V 254 A 14,14 0 0 1 1244,240 Z" fill="url(#gRed)"/><text x="1240" y="278" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="white">🔴 HEAT STROKE ★</text><text x="1240" y="335" class="t-keyval">aka SUNSTROKE · heat</text><text x="1240" y="355" class="t-keyval">hyperpyrexia · thermic fever</text><text x="1240" y="385" class="t-keylbl">Core temp:</text><text x="1240" y="405" class="t-keyval"><strong>&gt; 41°C (106°F)</strong></text><text x="1240" y="435" class="t-keylbl">★ KEY:</text><text x="1240" y="455" class="t-keyval"><strong>HOT &amp; DRY SKIN</strong></text><text x="1240" y="475" class="t-keyval">(sweating ABSENT — failed thermoregulation)</text><text x="1240" y="495" class="t-keyval">Tachycardia · convulsions ·</text><text x="1240" y="515" class="t-keyval">delirium · coma</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="stroke-autopsy"><rect x="60" y="540" width="900" height="260" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="510" y="580" class="t-nlg" text-anchor="middle">🔬 Heat Stroke — Autopsy Findings</text><text x="90" y="618" class="t-body">• <strong>Post-mortem caloricity</strong> — body remains warm after death</text><text x="90" y="643" class="t-body">• <strong>Rigor mortis</strong> sets in EARLY and passes off EARLY</text><text x="90" y="668" class="t-body">• <strong>Putrefaction is RAPID</strong></text><text x="90" y="693" class="t-body">• <strong>Brain</strong> — oedematous, congested, petechial haemorrhages in white matter</text><text x="90" y="718" class="t-body">• <strong>Lungs</strong> — congested with fresh haemorrhages</text><text x="90" y="743" class="t-body">• Multi-organ damage (&gt; 12-24 h survival): focal myocardial necrosis, centrilobular hepatic necrosis</text><text x="90" y="768" class="t-body">• Renal tubular necrosis · adrenal necrosis · rhabdomyolysis · pancreatitis · DIC</text><text x="90" y="793" class="t-body">• <strong>Death mechanism:</strong> paralysis of hypothalamic heat-regulatory centre</text><circle class="ic" cx="940" cy="558" r="14"/><text class="t-info" x="940" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="stroke-causes"><rect x="980" y="540" width="560" height="260" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1260" y="580" class="t-nlg" text-anchor="middle">📋 Causes of Hyperthermia (besides classic stroke)</text><text x="1000" y="615" class="t-body">1. <strong>Classic heat stroke</strong> — hot environment + exertion</text><text x="1000" y="640" class="t-body">2. <strong>Drug-induced</strong> — amphetamine, MAO-I, TCA, cocaine</text><text x="1000" y="665" class="t-body">3. <strong>Neuroleptic Malignant Syndrome</strong> — phenothiazines, haloperidol, fluoxetine</text><text x="1000" y="695" class="t-body">4. <strong>Malignant hyperthermia</strong> — inhaled anaesthetics (halothane) + succinylcholine</text><text x="1000" y="725" class="t-body">5. <strong>Endocrine</strong> — thyrotoxic crisis, pheochromocytoma</text><text x="1000" y="755" class="t-body">6. <strong>Sepsis</strong> — systemic inflammatory response</text><text x="1000" y="780" class="t-body" font-style="italic">★ Differentiate FEVER (set point ↑) vs HYPERTHERMIA (set point normal but exceeded)</text><circle class="ic" cx="1520" cy="558" r="14"/><text class="t-info" x="1520" y="564" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="820" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="858" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 HEAT STROKE = core &gt; 41°C / 106°F + HOT DRY SKIN (no sweating) · vs Heat Exhaustion = sweating preserved + temp 37-40°C</text>

<rect x="60" y="900" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="938" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">⭐ NEET-PG 2021 Q9 + 2023 Q1 — Farm labourer 106°F → SWEATING is the LEAST likely feature (heat-stroke skin is DRY)</text>

<rect x="60" y="980" width="1480" height="60" rx="10" fill="url(#gGrey)"/><text x="800" y="1018" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⚠️ Heat stroke = MEDICAL EMERGENCY · cool to 39°C within 30 min · ice packs to groin/axilla · prevent rhabdomyolysis &amp; renal failure</text>
</svg>`;

const SVG_TI05 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Burns — Definition + 3 Classifications</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Dupuytren (6°) · Wilson (3°) · Modern (Superficial/Deep) · zones of injury</text>

<g data-node-id="burn-def"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🔥 BURN — Definition (FMT)</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">"Tissue injury due to application of <strong>HEAT</strong> (in any form) to the external or internal body surface." Heat may be <strong>dry</strong> (flame, contact) · <strong>moist</strong> (steam = scald) · <strong>friction</strong> (brush) · <strong>chemical</strong> (acid/alkali) · <strong>electrical</strong> (current) · <strong>radiation</strong> (UV, X-ray).</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="burn-zones"><rect class="body-white" x="60" y="240" width="490" height="240" rx="14"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gRed)"/><text x="80" y="278" class="t-nlg">🎯 3 Zones of Burn Injury</text><text x="80" y="335" class="t-keylbl">1. Zone of COAGULATION</text><text x="100" y="355" class="t-keyval">Central · necrotic · cells irreversibly damaged</text><text x="80" y="385" class="t-keylbl">2. Zone of STASIS</text><text x="100" y="405" class="t-keyval">Surrounding · ↓ perfusion · cells may survive</text><text x="100" y="425" class="t-keyval">or progress to necrosis</text><text x="80" y="450" class="t-keylbl">3. Zone of HYPEREMIA</text><text x="100" y="470" class="t-keyval">Outermost · vasodilation · healing begins here</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="burn-types"><rect class="body-white" x="570" y="240" width="490" height="240" rx="14"/><path d="M 584,240 H 1046 A 14,14 0 0 1 1060,254 V 295 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gPurple)"/><text x="590" y="278" class="t-nlg">📋 Types of Burns (by agent)</text><text x="590" y="335" class="t-keyval">1. <strong>Dry heat</strong> — flame, contact (iron, stove)</text><text x="590" y="360" class="t-keyval">2. <strong>Moist heat</strong> — scalds (liquid, steam)</text><text x="590" y="385" class="t-keyval">3. <strong>Friction</strong> — brush burns (RTA, motorcyclist)</text><text x="590" y="410" class="t-keyval">4. <strong>Chemical</strong> — acid · alkali · corrosive salts</text><text x="590" y="435" class="t-keyval">5. <strong>Electric / lightning</strong></text><text x="590" y="460" class="t-keyval">6. <strong>Radiation</strong> — UV, X-ray, IR, laser, explosion</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="burn-pathophys"><rect class="body-white" x="1080" y="240" width="460" height="240" rx="14"/><path d="M 1094,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 1080 V 254 A 14,14 0 0 1 1094,240 Z" fill="url(#gOrange)"/><text x="1090" y="278" class="t-nlg">⚙️ Pathophysiology</text><text x="1090" y="335" class="t-keyval"><strong>Coagulative necrosis</strong> of epidermis</text><text x="1090" y="355" class="t-keyval">and underlying tissues via:</text><text x="1090" y="385" class="t-keyval">• Heat transfer → protein denaturation</text><text x="1090" y="410" class="t-keyval">• Chemicals → direct cell membrane lysis</text><text x="1090" y="435" class="t-keyval">• Electricity → ion shifts + Joule heating</text><text x="1090" y="460" class="t-keyval">Depth = ƒ (temp · duration · skin thickness · blood flow)</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dupuytren"><rect class="body-white" x="60" y="500" width="490" height="320" rx="14" stroke="#15294F" stroke-width="2"/><path d="M 74,500 H 536 A 14,14 0 0 1 550,514 V 555 H 60 V 514 A 14,14 0 0 1 74,500 Z" fill="url(#gBlue)"/><text x="80" y="538" class="t-nlg">📜 DUPUYTREN — 6 Degrees</text><text x="80" y="588" class="t-keylbl">1° :</text><text x="120" y="588" class="t-keyval">Erythema only (superficial epidermis)</text><text x="80" y="618" class="t-keylbl">2° :</text><text x="120" y="618" class="t-keyval">Blister · epidermis · painful</text><text x="80" y="648" class="t-keylbl">3° :</text><text x="120" y="648" class="t-keyval">Partial dermis destruction · blisters · painful</text><text x="80" y="678" class="t-keylbl">4° :</text><text x="120" y="678" class="t-keyval">Whole skin thickness · heals with scar</text><text x="80" y="708" class="t-keylbl">5° :</text><text x="120" y="708" class="t-keyval">Subcutaneous fat involved · LESS PAINFUL</text><text x="100" y="728" class="t-keyval">(nerves destroyed) · deep scarring + contracture</text><text x="80" y="758" class="t-keylbl">6° :</text><text x="120" y="758" class="t-keyval">Muscle &amp; BONE · charring</text><text x="80" y="790" class="t-keyval" font-style="italic">★ Precise but exhaustive — limited clinical use</text><circle class="ic" cx="540" cy="518" r="14"/><text class="t-info" x="540" y="524" text-anchor="middle">ⓘ</text></g>

<g data-node-id="wilson"><rect class="body-white" x="570" y="500" width="490" height="320" rx="14" stroke="#3D8B5B" stroke-width="2"/><path d="M 584,500 H 1046 A 14,14 0 0 1 1060,514 V 555 H 570 V 514 A 14,14 0 0 1 584,500 Z" fill="url(#gGreen)"/><text x="590" y="538" class="t-nlg">📜 WILSON — 3 Degrees</text><text x="590" y="585" class="t-keylbl">1° — EPIDERMAL</text><text x="590" y="605" class="t-keyval">= Dupuytren 1+2 · erythema ± blisters</text><text x="610" y="625" class="t-keyval">HEALS without scar</text><text x="590" y="660" class="t-keylbl">2° — DERMO-EPIDERMAL</text><text x="590" y="680" class="t-keyval">= Dupuytren 3+4 · charring &amp; full skin loss</text><text x="610" y="700" class="t-keyval">HEALS with PERMANENT SCAR</text><text x="590" y="735" class="t-keylbl">3° — DEEP BURNS</text><text x="590" y="755" class="t-keyval">= Dupuytren 5+6 · subQ / muscle / bone</text><text x="610" y="775" class="t-keyval">LESS PAINFUL (nerves gone) · contracture</text><text x="590" y="800" class="t-keyval" font-style="italic">★ Each Wilson = 2 Dupuytren merged</text><circle class="ic" cx="1050" cy="518" r="14"/><text class="t-info" x="1050" y="524" text-anchor="middle">ⓘ</text></g>

<g data-node-id="modern-class"><rect class="body-white" x="1080" y="500" width="460" height="320" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 1094,500 H 1526 A 14,14 0 0 1 1540,514 V 555 H 1080 V 514 A 14,14 0 0 1 1094,500 Z" fill="url(#gOrange)"/><text x="1090" y="538" class="t-nlg">📜 MODERN — 2 Grades</text><text x="1090" y="588" class="t-keylbl">SUPERFICIAL</text><text x="1090" y="608" class="t-keyval">Dermo-epidermal · does NOT</text><text x="1090" y="628" class="t-keyval">extend full skin thickness</text><text x="1090" y="650" class="t-keyval">Heals without permanent scar</text><text x="1090" y="690" class="t-keylbl">DEEP</text><text x="1090" y="710" class="t-keyval">Extends BEYOND true skin</text><text x="1090" y="730" class="t-keyval">Involves subQ / muscle / bone</text><text x="1090" y="755" class="t-keyval">★ Any burn beyond true skin</text><text x="1090" y="775" class="t-keyval">= "deep" by modern criterion</text><text x="1090" y="800" class="t-keyval" font-style="italic">Gross + practical</text><circle class="ic" cx="1530" cy="518" r="14"/><text class="t-info" x="1530" y="524" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="840" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="878" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Dupuytren 6° → Wilson 3° (pairs of 2) → Modern 2° (Superficial / Deep) · Deep burns are LESS PAINFUL (nerve destruction)</text>

<rect x="60" y="920" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="958" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">📚 ★ DEPTH determinants: (1) temperature applied (2) duration of contact (3) skin thickness (4) heat-dissipating capacity (blood flow)</text>

<rect x="60" y="1000" width="1480" height="60" rx="10" fill="url(#gGrey)"/><text x="800" y="1038" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⚠️ "Burn depth is hardest to judge in first 24 h" · re-examine at 48 h before final grading · zone of stasis can evolve either way</text>
</svg>`;

const SVG_TI06 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Burn Surface Area — Wallace Rule of 9 · Lund-Browder · Palm Rule</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">% TBSA estimation · severity classification · paediatric adjustment</text>

<g data-node-id="tbsa-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">📏 TBSA — Total Body Surface Area Estimation</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Quantifies extent of burn — determines fluid resuscitation (Parkland), severity grade, and prognosis. Three methods: <strong>Wallace Rule of 9</strong> (adults), <strong>Lund-Browder chart</strong> (children — corrects for larger head), <strong>Patient's palm</strong> (~1% — for small / scattered burns).</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="wallace"><rect class="body-white" x="60" y="240" width="730" height="440" rx="14" stroke="#15294F" stroke-width="3"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="278" class="t-nlg">📐 WALLACE RULE OF 9 (Adult)</text><text x="80" y="335" class="t-keylbl">Head + neck:</text><text x="240" y="335" class="t-keyval"><strong>9%</strong> (face 4.5 + scalp 4.5)</text><text x="80" y="365" class="t-keylbl">Anterior trunk:</text><text x="260" y="365" class="t-keyval"><strong>18%</strong> (chest 9 + abdomen 9)</text><text x="80" y="395" class="t-keylbl">Posterior trunk:</text><text x="270" y="395" class="t-keyval"><strong>18%</strong> (upper 9 + lower 9 inc. buttock)</text><text x="80" y="425" class="t-keylbl">Right upper limb:</text><text x="290" y="425" class="t-keyval"><strong>9%</strong> (front 4.5 + back 4.5)</text><text x="80" y="455" class="t-keylbl">Left upper limb:</text><text x="270" y="455" class="t-keyval"><strong>9%</strong></text><text x="80" y="485" class="t-keylbl">Right lower limb:</text><text x="290" y="485" class="t-keyval"><strong>18%</strong> (front 9 + back 9)</text><text x="80" y="515" class="t-keylbl">Left lower limb:</text><text x="270" y="515" class="t-keyval"><strong>18%</strong></text><text x="80" y="545" class="t-keylbl">Genitals / perineum:</text><text x="310" y="545" class="t-keyval"><strong>1%</strong></text><text x="80" y="585" class="t-keylbl">Total:</text><text x="160" y="585" class="t-keyval"><strong>9 + 18 + 18 + 9 + 9 + 18 + 18 + 1 = 100%</strong></text><text x="80" y="630" class="t-keyval" font-style="italic">★ Designed by Wallace · quick bedside · adults only</text><text x="80" y="655" class="t-keyval" font-style="italic">★ Children: head proportionally LARGER · limbs SHORTER — use Lund-Browder instead</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lund-browder"><rect class="body-white" x="810" y="240" width="730" height="440" rx="14" stroke="#3D8B5B" stroke-width="3"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gGreen)"/><text x="830" y="278" class="t-nlg">👶 LUND-BROWDER (Children)</text><text x="830" y="335" class="t-keyval"><strong>Why needed:</strong> Children &lt; 4 yr have larger heads and shorter</text><text x="830" y="355" class="t-keyval">lower limbs proportionally. Wallace over-estimates trunk and</text><text x="830" y="375" class="t-keyval">under-estimates head in paediatrics.</text><text x="830" y="415" class="t-keylbl">Head — age-graded:</text><text x="830" y="435" class="t-keyval">• 0-1 yr: <strong>19%</strong> · 1-4 yr: 17% · 5-9 yr: 13%</text><text x="830" y="455" class="t-keyval">• 10-14 yr: 11% · 15 yr: 9% · Adult: 7%</text><text x="830" y="490" class="t-keylbl">Each lower limb — age-graded:</text><text x="830" y="510" class="t-keyval">• 0-1 yr: 14% · 1-4 yr: 15% · 5-9 yr: 17%</text><text x="830" y="530" class="t-keyval">• 10-14 yr: 18% · 15 yr: 19% · Adult: 20%</text><text x="830" y="570" class="t-keylbl">Constant across all ages:</text><text x="830" y="590" class="t-keyval">Neck 2% · Ant/Post trunk 13% each · Each buttock 2.5%</text><text x="830" y="610" class="t-keyval">Genitals 1% · Each upper limb 9.5%</text><text x="830" y="650" class="t-keyval" font-style="italic">★ Most accurate method, especially in paediatrics</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="palm-rule"><rect x="60" y="700" width="900" height="170" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="510" y="740" class="t-nlg" text-anchor="middle">✋ PATIENT'S PALM RULE</text><text x="90" y="778" class="t-body">• <strong>Patient's palm (with fingers) = 1% TBSA</strong> — applies to ALL ages</text><text x="90" y="803" class="t-body">• Useful for SMALL or SCATTERED burns (where Wallace/Lund-Browder are over-engineered)</text><text x="90" y="828" class="t-body">• Quick at scene · no chart needed · uses patient's own anatomy as reference</text><text x="90" y="853" class="t-body" font-style="italic">Some sources: palm WITHOUT fingers = 0.5% · palm WITH fingers = 1%</text><circle class="ic" cx="940" cy="718" r="14"/><text class="t-info" x="940" y="724" text-anchor="middle">ⓘ</text></g>

<g data-node-id="severity"><rect x="980" y="700" width="560" height="170" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1260" y="740" class="t-nlg" text-anchor="middle">📊 ABA Severity (Adult)</text><text x="1000" y="775" class="t-body">• <strong>MINOR</strong> — superficial &lt; 15% TBSA</text><text x="1000" y="800" class="t-body">• <strong>MODERATE</strong> — superficial 15-25% (10-20% child)</text><text x="1000" y="825" class="t-body">or full thickness &lt; 10% (not eyes/ears/face/hands/feet/perineum)</text><text x="1000" y="855" class="t-body">• <strong>MAJOR</strong> — above + most full thickness in infants/elderly</text><circle class="ic" cx="1520" cy="718" r="14"/><text class="t-info" x="1520" y="724" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="890" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="928" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Wallace = 9% × multiples (adult bedside) · Lund-Browder = age-graded (paediatric accurate) · Palm = 1% (small burns)</text>

<rect x="60" y="970" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="1008" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">📚 ★ Trick: Adult head 9% but INFANT head 19% (1-y/o) · each lower limb decreases as age decreases (14% infant vs 18% adult)</text>

<rect x="60" y="1050" width="1480" height="40" rx="10" fill="url(#gGrey)"/><text x="800" y="1078" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="700" fill="white" text-anchor="middle">⚠️ &gt; 30% TBSA = major life threat · &gt; 60% TBSA = often fatal · always exclude erythema (1°) from TBSA total</text>
</svg>`;

const SVG_TI07 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Autopsy Findings — Pugilistic · Heat Rupture · Heat Fracture · Heat Hematoma</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Postmortem appearances of fire victims · do NOT distinguish AM from PM burns</text>

<g data-node-id="pugilistic"><rect class="body-white" x="60" y="110" width="730" height="280" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 175 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gRed)"/><text x="80" y="155" class="t-nlg">🥊 PUGILISTIC ATTITUDE ★</text><text x="80" y="215" class="t-keylbl">aka:</text><text x="140" y="215" class="t-keyval">Boxer's attitude · Fencer's attitude</text><text x="80" y="245" class="t-keylbl">Mechanism:</text><text x="80" y="265" class="t-keyval">Heat → <strong>coagulation + denaturation of muscle</strong></text><text x="80" y="285" class="t-keyval"><strong>protein</strong> → muscle contraction &amp; stiffening</text><text x="80" y="305" class="t-keyval">(heat rigor / heat stiffening)</text><text x="80" y="335" class="t-keylbl">Appearance:</text><text x="80" y="355" class="t-keyval">Generalised flexion of trunk + limbs ·</text><text x="80" y="375" class="t-keyval">fingers curl inward · OPISTHOTONOS of paraspinals</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="heat-rupture"><rect class="body-white" x="810" y="110" width="730" height="280" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 175 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gOrange)"/><text x="830" y="155" class="t-nlg">✂️ HEAT RUPTURES ("Splits") ★</text><text x="830" y="215" class="t-keylbl">Mechanism:</text><text x="830" y="235" class="t-keyval">Heat-induced contraction → skin splits</text><text x="830" y="265" class="t-keylbl">Appearance:</text><text x="830" y="285" class="t-keyval">Linear tears, mimicking lacerations / incisions</text><text x="830" y="315" class="t-keylbl">Sites:</text><text x="900" y="315" class="t-keyval">Extensor surfaces · over joints (elbow / knee) · scalp</text><text x="830" y="345" class="t-keylbl">Differential (vs true wounds):</text><text x="830" y="365" class="t-keyval">• <strong>IRREGULAR MARGINS</strong> ★ (NEET-PG 2016 Q31)</text><text x="830" y="385" class="t-keyval">• No bleeding · no clot · no extravasation</text><text x="830" y="405" class="t-keyval">• INTACT vessels / nerves bridge the split floor</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="heat-fracture"><rect class="body-white" x="60" y="410" width="490" height="320" rx="14"/><path d="M 74,410 H 536 A 14,14 0 0 1 550,424 V 465 H 60 V 424 A 14,14 0 0 1 74,410 Z" fill="url(#gPurple)"/><text x="80" y="448" class="t-nlg">🦴 HEAT (Thermal) FRACTURES</text><text x="80" y="500" class="t-keylbl">1. BURSTING type</text><text x="80" y="520" class="t-keyval">↑ Intracranial steam pressure →</text><text x="80" y="540" class="t-keyval">separates sutures · gaping skull defect</text><text x="80" y="560" class="t-keyval">with widely separated margins</text><text x="80" y="600" class="t-keylbl">2. SURFACE fracture</text><text x="80" y="620" class="t-keyval">Bone drying + contraction → outer table</text><text x="80" y="640" class="t-keyval">only · NO displacement · STELLATE lines</text><text x="80" y="680" class="t-keylbl">3. CURVED fracture</text><text x="80" y="700" class="t-keyval">Limb bones at high temp · peculiar curves</text><circle class="ic" cx="540" cy="428" r="14"/><text class="t-info" x="540" y="434" text-anchor="middle">ⓘ</text></g>

<g data-node-id="heat-hematoma"><rect class="body-white" x="570" y="410" width="490" height="320" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 584,410 H 1046 A 14,14 0 0 1 1060,424 V 465 H 570 V 424 A 14,14 0 0 1 584,410 Z" fill="url(#gRed)"/><text x="590" y="448" class="t-nlg">🩸 HEAT HEMATOMA ★</text><text x="590" y="495" class="t-keylbl">Location:</text><text x="700" y="495" class="t-keyval">EXTRADURAL space</text><text x="590" y="525" class="t-keylbl">Site:</text><text x="660" y="525" class="t-keyval">Parieto-temporal region (common)</text><text x="590" y="555" class="t-keylbl">Mechanism:</text><text x="590" y="575" class="t-keyval">From <strong>venous sinuses</strong> or via</text><text x="590" y="595" class="t-keyval">diploic emissary channels under heat</text><text x="590" y="625" class="t-keylbl">Appearance:</text><text x="590" y="645" class="t-keyval">Soft · spongy · FRIABLE · HONEYCOMB</text><text x="590" y="665" class="t-keyval">Tawny / chocolate-brown (cherry-red if CO+)</text><text x="590" y="695" class="t-keyval">★ CO in clot CONFIRMS heat artefact, not</text><text x="590" y="715" class="t-keyval">true antemortem trauma</text><circle class="ic" cx="1050" cy="428" r="14"/><text class="t-info" x="1050" y="434" text-anchor="middle">ⓘ</text></g>

<g data-node-id="soot-co"><rect class="body-white" x="1080" y="410" width="460" height="320" rx="14" stroke="#3D8B5B" stroke-width="3"/><path d="M 1094,410 H 1526 A 14,14 0 0 1 1540,424 V 465 H 1080 V 424 A 14,14 0 0 1 1094,410 Z" fill="url(#gGreen)"/><text x="1090" y="448" class="t-nlg">💨 SOOT &amp; CARBON MONOXIDE ★</text><text x="1090" y="498" class="t-keylbl">SOOT in respiratory tract:</text><text x="1090" y="518" class="t-keyval">• Below VOCAL CORDS → person was</text><text x="1090" y="538" class="t-keyval">BREATHING during fire = <strong>ANTEMORTEM</strong></text><text x="1090" y="558" class="t-keyval">• In terminal bronchioles = absolute proof</text><text x="1090" y="585" class="t-keylbl">SOOT in oesophagus/stomach:</text><text x="1090" y="605" class="t-keyval">Person was swallowing = ANTEMORTEM</text><text x="1090" y="640" class="t-keylbl">Carboxyhaemoglobin in blood:</text><text x="1090" y="660" class="t-keyval">• &gt; 5% saturation → ANTEMORTEM ★</text><text x="1090" y="680" class="t-keyval">• &gt; 50% → likely cause of death (CO-poisoning)</text><text x="1090" y="710" class="t-keyval">Cyanide &gt; 0.3% = inhaled during fire</text><circle class="ic" cx="1530" cy="428" r="14"/><text class="t-info" x="1530" y="434" text-anchor="middle">ⓘ</text></g>

<g data-node-id="muscle-organ"><rect x="60" y="750" width="900" height="170" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="510" y="790" class="t-nlg" text-anchor="middle">🥩 Cooked Muscle &amp; Organs · Singed Hair · Charred Bone</text><text x="90" y="825" class="t-body">• <strong>Subcutaneous fat acts as fuel</strong> → muscle below partly cooked / coagulated</text><text x="90" y="850" class="t-body">• <strong>Hair singeing</strong> — clubbed melted ends · scalp / eyebrows / pubic — used to localise burn path</text><text x="90" y="875" class="t-body">• Severe burns → <strong>charring of muscle &amp; bone</strong> (e.g., clavicle) — identification challenge</text><text x="90" y="900" class="t-body">• Internal organs: congested, partly cooked, firm and pallid · Curling's ulcer in stomach/duodenum (stress)</text><circle class="ic" cx="940" cy="768" r="14"/><text class="t-info" x="940" y="774" text-anchor="middle">ⓘ</text></g>

<g data-node-id="pug-pitfall"><rect x="980" y="750" width="560" height="170" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="790" class="t-nlg" text-anchor="middle">⚠️ Critical Pitfall</text><text x="1000" y="825" class="t-body">★ Pugilistic attitude · heat rupture · heat fracture · heat hematoma</text><text x="1000" y="850" class="t-body">— ALL occur in <strong>ANTEMORTEM</strong> AS WELL AS <strong>POSTMORTEM</strong></text><text x="1000" y="875" class="t-body">burns — they DO NOT distinguish between the two.</text><text x="1000" y="900" class="t-body">Discriminators: line of redness, vital reaction, soot in airway, CO in blood.</text><circle class="ic" cx="1520" cy="768" r="14"/><text class="t-info" x="1520" y="774" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="940" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="978" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 ★ NEET-PG 2016 Q28 — Pugilistic = BURNS · 2016 Q31 — Heat rupture = IRREGULAR margins · Heat hematoma = parieto-temporal</text>

<rect x="60" y="1020" width="1480" height="60" rx="10" fill="url(#gGrey)"/><text x="800" y="1058" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⚠️ Heat artefacts DO NOT prove AM/PM — only soot in lower airway + ↑CO + vital reaction prove ANTEMORTEM burns</text>
</svg>`;

const SVG_TI08 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Antemortem vs Postmortem Burns + Causes of Death</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Vital signs of life in fire · Immediate vs delayed mortality · Enzyme histochemistry</text>

<g data-node-id="am-pm-key"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚖️ Antemortem vs Postmortem Burns — Why It Matters</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">A body found burnt → were the burns sustained while ALIVE (accidental / suicidal / homicidal fire) OR was the person killed first and burnt to destroy evidence? AM/PM differentiation = central forensic question.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="line-redness"><rect class="body-white" x="60" y="240" width="490" height="190" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gRed)"/><text x="80" y="285" class="t-nlg">🔴 LINE OF REDNESS</text><text x="80" y="345" class="t-keyval">Hyperaemic / reddened margin AROUND burn area</text><text x="80" y="370" class="t-keyval"><strong>Present</strong> in antemortem burns (vital reaction)</text><text x="80" y="395" class="t-keyval"><strong>Absent</strong> in postmortem burns</text><text x="80" y="420" class="t-keyval" font-style="italic">★ Classic vital sign — first thing to look for</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="vital-blister"><rect class="body-white" x="570" y="240" width="490" height="190" rx="14"/><path d="M 584,240 H 1046 A 14,14 0 0 1 1060,254 V 295 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gOrange)"/><text x="590" y="285" class="t-nlg">💧 BLISTER CONTENT</text><text x="590" y="345" class="t-keylbl">Antemortem:</text><text x="710" y="345" class="t-keyval">Serous fluid rich in</text><text x="590" y="365" class="t-keyval">PROTEIN + CHLORIDES · base RED, inflamed, raised papillae</text><text x="590" y="395" class="t-keylbl">Postmortem:</text><text x="700" y="395" class="t-keyval">Usually ABSENT.</text><text x="590" y="415" class="t-keyval">If present → AIR + clear fluid · base DRY, pale, hard, horny</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="vital-co-soot"><rect class="body-white" x="1080" y="240" width="460" height="190" rx="14" stroke="#3D8B5B" stroke-width="3"/><path d="M 1094,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 1080 V 254 A 14,14 0 0 1 1094,240 Z" fill="url(#gGreen)"/><text x="1090" y="285" class="t-nlg">💨 CO + SOOT in Body</text><text x="1090" y="335" class="t-keyval">Carboxyhaemoglobin &gt; 5%</text><text x="1090" y="355" class="t-keyval">→ <strong>ANTEMORTEM</strong> (breathed fire)</text><text x="1090" y="385" class="t-keyval">SOOT below vocal cords / in stomach</text><text x="1090" y="405" class="t-keyval">→ <strong>ANTEMORTEM</strong> (breathed / swallowed)</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="enzyme-timing"><rect x="60" y="450" width="900" height="240" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="510" y="490" class="t-nlg" text-anchor="middle">🧪 Enzyme Histochemistry — Vital Reaction Timing</text><text x="90" y="525" class="t-body"><strong>Cathepsin</strong> — immediate (within minutes)</text><text x="90" y="550" class="t-body"><strong>Serotonin</strong> — 10 min</text><text x="90" y="575" class="t-body"><strong>Histamine</strong> — 20 min</text><text x="90" y="600" class="t-body"><strong>Esterase</strong> — 1 hour</text><text x="90" y="625" class="t-body"><strong>ATPase</strong> — 1 hour</text><text x="90" y="650" class="t-body"><strong>Acid phosphatase</strong> — 3 hours</text><text x="90" y="675" class="t-body"><strong>Alkaline phosphatase</strong> — 4 hours</text><circle class="ic" cx="940" cy="468" r="14"/><text class="t-info" x="940" y="474" text-anchor="middle">ⓘ</text></g>

<g data-node-id="cod-immediate"><rect x="980" y="450" width="560" height="240" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1260" y="490" class="t-nlg" text-anchor="middle">💀 Causes of Death — IMMEDIATE</text><text x="1000" y="525" class="t-body">1. <strong>Neurogenic shock</strong></text><text x="1000" y="550" class="t-body">2. <strong>Hypovolaemic shock</strong> (fluid loss from burnt skin)</text><text x="1000" y="575" class="t-body">3. <strong>Inhalation of smoke</strong> — anoxia, irritant gases</text><text x="1000" y="600" class="t-body">4. <strong>Carbon monoxide</strong> inhalation</text><text x="1000" y="625" class="t-body">5. <strong>Laryngeal oedema / glottic oedema</strong> (inhalational burn)</text><text x="1000" y="650" class="t-body">6. Secondary injuries while escaping / falling masonry</text><circle class="ic" cx="1520" cy="468" r="14"/><text class="t-info" x="1520" y="474" text-anchor="middle">ⓘ</text></g>

<g data-node-id="cod-delayed"><rect x="60" y="710" width="900" height="200" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="510" y="750" class="t-nlg" text-anchor="middle">⏰ Causes of Death — DELAYED</text><text x="90" y="788" class="t-body">1. <strong>Septicaemic shock</strong> — burnt skin = giant infected wound · Pseudomonas, Staph</text><text x="90" y="813" class="t-body">2. <strong>Toxaemia</strong> — endogenous toxins from necrotic tissue</text><text x="90" y="838" class="t-body">3. <strong>Renal failure</strong> — myoglobinuria · hypovolaemia · sepsis</text><text x="90" y="863" class="t-body">4. <strong>Pulmonary embolism</strong> (rare) · <strong>Fat embolism</strong> (rare)</text><text x="90" y="888" class="t-body">5. <strong>ARDS</strong> — inhalational injury + SIRS · <strong>Curling's ulcer</strong> → GI bleed</text><circle class="ic" cx="940" cy="728" r="14"/><text class="t-info" x="940" y="734" text-anchor="middle">ⓘ</text></g>

<g data-node-id="age-burn"><rect x="980" y="710" width="560" height="200" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="1260" y="750" class="t-nlg" text-anchor="middle">⏳ Age of Burn Wound</text><text x="1000" y="785" class="t-body">• &lt; 1 h: redness · vesication · vasodilation · oozing</text><text x="1000" y="808" class="t-body">• 6-12 h: PMN infiltrate · epidermis coagulated</text><text x="1000" y="831" class="t-body">• 12-24 h: exudate starts to dry</text><text x="1000" y="854" class="t-body">• 24-72 h: brown crust · slough · pus begins</text><text x="1000" y="877" class="t-body">• 4-6 d: superficial slough falls off · 2 wk: deep slough off</text><text x="1000" y="900" class="t-body">• Wks - months: cicatrix &amp; deformity</text><circle class="ic" cx="1520" cy="728" r="14"/><text class="t-info" x="1520" y="734" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="930" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="968" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 AM hallmarks: LINE OF REDNESS + serous protein-rich blister + ↑CO + soot below cords + vital reaction enzymes</text>

<rect x="60" y="1000" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="1038" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">⭐ See DT-1 (full AM vs PM table) · pugilistic + heat hematoma DO NOT discriminate AM from PM</text>
</svg>`;

const SVG_TI09 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Scalds + Bride/Dowry Burns Legal Frame</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Moist heat injury · BNS 80 · BNS 85/86 · BSA 117/118 presumptions</text>

<g data-node-id="scald-def"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">💧 SCALD — Definition</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Tissue damage from <strong>MOIST HEAT</strong> — application of liquid (≥ 50°C) or its gaseous form (steam) to the body. Common agents: water, oil, molten rubber/metal, liquid chemicals, tar, steam.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="scald-features"><rect class="body-white" x="60" y="240" width="730" height="280" rx="14"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" class="t-nlg">🔬 SCALD — Features</text><text x="80" y="335" class="t-keyval">• <strong>NO charring, carbonisation, or singeing of hair</strong></text><text x="80" y="365" class="t-keyval">• Shape: <strong>sharply demarcated edge</strong> = contact limit</text><text x="80" y="395" class="t-keyval">• <strong>TRICKLE pattern</strong> — splashed water runs down by gravity</text><text x="80" y="425" class="t-keyval">• <strong>HORIZONTAL fluid level</strong> if hand immersed in bucket</text><text x="80" y="455" class="t-keyval">• Greatest damage at point of initial contact (decreasing downstream)</text><text x="80" y="485" class="t-keyval">• Clothes: wet, NOT burnt · may PROLONG contact (double-edged)</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="scald-grades"><rect class="body-white" x="810" y="240" width="730" height="280" rx="14"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gGreen)"/><text x="830" y="285" class="t-nlg">📊 SCALD — 3 Degrees</text><text x="830" y="345" class="t-keylbl">1st degree:</text><text x="950" y="345" class="t-keyval">Erythema only</text><text x="830" y="395" class="t-keylbl">2nd degree:</text><text x="960" y="395" class="t-keyval">Blister formation +</text><text x="830" y="415" class="t-keyval">↑ vascular permeability</text><text x="830" y="465" class="t-keylbl">3rd degree:</text><text x="960" y="465" class="t-keyval">Drying / desiccation</text><text x="830" y="485" class="t-keyval">of underlying tissue with NECROSIS</text><text x="830" y="510" class="t-keyval" font-style="italic">★ Steam inhalation → scald oral cavity/larynx → asphyxia</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="dowry-frame"><rect x="60" y="540" width="1480" height="200" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="800" y="580" class="t-nlg" text-anchor="middle">🔥 BRIDE BURNS / DOWRY DEATH — Indian Forensic Reality</text><text x="90" y="615" class="t-body">Indian textbooks cite ~30% of married-women homicidal burnings + 21% suicide-by-burning happen in in-laws' home</text><text x="90" y="640" class="t-body">• Daughter-in-law subjected to KEROSENE burns by husband / in-laws for DOWRY · or coerced to suicide by burning</text><text x="90" y="665" class="t-body">• Burns are usually <strong>extensive</strong>, often involve face + chest + abdomen, with deposition of <strong>kerosene smell + soot</strong></text><text x="90" y="690" class="t-body">• Pattern clues: stocking distribution suggests pouring of liquid; sharp demarcation lines suggest acid; forced submersion → wide spaced burns</text><text x="90" y="715" class="t-body">• Look for <strong>defence injuries · history of cruelty · prior MLC entries · psychiatric history · dowry demand evidence</strong></text><circle class="ic" cx="1510" cy="558" r="14"/><text class="t-info" x="1510" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bns-80"><rect class="body-white" x="60" y="760" width="490" height="240" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,760 H 536 A 14,14 0 0 1 550,774 V 815 H 60 V 774 A 14,14 0 0 1 74,760 Z" fill="url(#gRed)"/><text x="80" y="800" class="t-nlg">📜 BNS 80 — Dowry Death</text><text x="80" y="845" class="t-keyval">(≡ old IPC 304-B)</text><text x="80" y="875" class="t-keyval"><strong>Definition:</strong> Death of a woman by ANY burn /</text><text x="80" y="895" class="t-keyval">bodily injury / non-normal circumstances</text><text x="80" y="915" class="t-keyval"><strong>WITHIN 7 YEARS of marriage</strong>,</text><text x="80" y="935" class="t-keyval">where prior cruelty / dowry harassment is shown</text><text x="80" y="965" class="t-keylbl">Punishment:</text><text x="200" y="965" class="t-keyval">Minimum 7 yrs to life imprisonment</text><circle class="ic" cx="540" cy="778" r="14"/><text class="t-info" x="540" y="784" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bns-85"><rect class="body-white" x="570" y="760" width="490" height="240" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 584,760 H 1046 A 14,14 0 0 1 1060,774 V 815 H 570 V 774 A 14,14 0 0 1 584,760 Z" fill="url(#gOrange)"/><text x="590" y="800" class="t-nlg">📜 BNS 85/86 — Cruelty</text><text x="590" y="845" class="t-keyval">(≡ old IPC 498-A) ★ NEET-PG 2016 Q4</text><text x="590" y="875" class="t-keyval">Husband / relative subjects woman to:</text><text x="590" y="900" class="t-keyval">• Wilful conduct likely to drive her to suicide</text><text x="590" y="920" class="t-keyval">• Cause grave injury to life/limb/health</text><text x="590" y="940" class="t-keyval">• OR harassment to coerce dowry / property</text><text x="590" y="970" class="t-keylbl">Punishment:</text><text x="710" y="970" class="t-keyval">Up to 3 years + fine</text><circle class="ic" cx="1050" cy="778" r="14"/><text class="t-info" x="1050" y="784" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bsa-presump"><rect class="body-white" x="1080" y="760" width="460" height="240" rx="14" stroke="#7B5FA8" stroke-width="3"/><path d="M 1094,760 H 1526 A 14,14 0 0 1 1540,774 V 815 H 1080 V 774 A 14,14 0 0 1 1094,760 Z" fill="url(#gPurple)"/><text x="1090" y="800" class="t-nlg">📜 BSA Presumptions</text><text x="1090" y="840" class="t-keyval"><strong>BSA 117</strong> (≡ IEA 113-A):</text><text x="1090" y="860" class="t-keyval">Presumption of <strong>abetment of suicide</strong></text><text x="1090" y="880" class="t-keyval">by a married woman if within 7 yrs +</text><text x="1090" y="900" class="t-keyval">prior cruelty proven</text><text x="1090" y="935" class="t-keyval"><strong>BSA 118</strong> (≡ IEA 113-B):</text><text x="1090" y="955" class="t-keyval">Presumption of <strong>dowry death</strong></text><text x="1090" y="975" class="t-keyval">if soon before death cruelty for dowry shown</text><circle class="ic" cx="1530" cy="778" r="14"/><text class="t-info" x="1530" y="784" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1020" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="1058" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 BNS 80 (Dowry death) + BNS 85/86 (Cruelty IPC 498-A) + BSA 117/118 (presumptions) · BNSS 196 magistrate inquest mandatory</text>
</svg>`;

const SVG_TI10 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Electrocution — Mechanism + Lesion Types</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">AC more dangerous than DC · Joule burn · Crater · Spark · Crocodile · Collapsed blister</text>

<g data-node-id="elec-mech"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚡ ELECTROCUTION — Mechanism</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Death by electric current. Mechanism = <strong>ventricular fibrillation</strong> (low/medium voltage) OR <strong>respiratory paralysis</strong> (current through chest / head) OR <strong>arcing + ignition burns</strong> (high voltage). Ohm's law: I = V/R · heat generated = I²R × time (Joule effect).</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ac-vs-dc"><rect class="body-white" x="60" y="240" width="490" height="280" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gRed)"/><text x="80" y="285" class="t-nlg">⚡ AC vs DC — Lethality</text><text x="80" y="335" class="t-keylbl">AC (alternating current):</text><text x="80" y="365" class="t-keyval">• <strong>MORE DANGEROUS</strong> than DC ★</text><text x="80" y="385" class="t-keyval">• 50-80 mA AC = fatal in seconds</text><text x="80" y="405" class="t-keyval">• Domestic supply: 50 Hz · most dangerous 40-150 Hz</text><text x="80" y="425" class="t-keyval">• Causes tetanic muscle contraction → <strong>cannot let go</strong></text><text x="80" y="455" class="t-keylbl">DC (direct current):</text><text x="80" y="475" class="t-keyval">• Less dangerous — 250 mA for same time often non-fatal</text><text x="80" y="495" class="t-keyval">• Causes single jolt — victim thrown clear</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="elec-factors"><rect class="body-white" x="570" y="240" width="490" height="280" rx="14"/><path d="M 584,240 H 1046 A 14,14 0 0 1 1060,254 V 295 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gBlue)"/><text x="590" y="285" class="t-nlg">🔢 Factors Affecting Severity</text><text x="590" y="335" class="t-keyval">1. <strong>Nature of current</strong> (AC vs DC)</text><text x="590" y="360" class="t-keyval">2. <strong>Voltage</strong> + <strong>amperage</strong></text><text x="590" y="385" class="t-keyval">3. <strong>Resistance</strong> — skin ≈ 5000 Ω dry</text><text x="610" y="405" class="t-keyval">- WET skin → near 0 Ω → no mark possible</text><text x="610" y="425" class="t-keyval">- Sole/palm thick keratin → high resistance</text><text x="590" y="450" class="t-keyval">4. <strong>Earthing</strong> · 5. Duration · 6. Area of contact</text><text x="590" y="475" class="t-keyval">7. <strong>Path of current</strong> — chest &gt; head &gt; limb</text><text x="590" y="500" class="t-keyval">8. Frequency — &lt; 10 Hz or &gt; 100 Hz are SAFER</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="contact-injury"><rect class="body-white" x="1080" y="240" width="460" height="280" rx="14"/><path d="M 1094,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 1080 V 254 A 14,14 0 0 1 1094,240 Z" fill="url(#gGreen)"/><text x="1090" y="285" class="t-nlg">📋 3 Injury Patterns</text><text x="1090" y="335" class="t-keylbl">1. CONTACT INJURY</text><text x="1090" y="355" class="t-keyval">Direct contact with live wire</text><text x="1090" y="375" class="t-keyval">(domestic voltage) — produces ENTRY</text><text x="1090" y="395" class="t-keyval">and EXIT wounds</text><text x="1090" y="425" class="t-keylbl">2. SPARK INJURY</text><text x="1090" y="445" class="t-keyval">Poor / intermittent contact — current jumps</text><text x="1090" y="465" class="t-keyval">gap → keratin nodule + pale halo</text><text x="1090" y="495" class="t-keylbl">3. FLASH BURNS</text><text x="1090" y="515" class="t-keyval">Arcing without contact (HV line-man)</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="joule-burn"><rect class="body-white" x="60" y="540" width="370" height="280" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 74,540 H 416 A 14,14 0 0 1 430,554 V 595 H 60 V 554 A 14,14 0 0 1 74,540 Z" fill="url(#gOrange)"/><text x="80" y="578" class="t-nlg">🔥 JOULE BURN ★</text><text x="80" y="635" class="t-keylbl">Synonym:</text><text x="80" y="655" class="t-keyval">ENDOGENOUS burn</text><text x="80" y="690" class="t-keylbl">Mechanism:</text><text x="80" y="710" class="t-keyval">Prolonged skin contact with live</text><text x="80" y="730" class="t-keyval">conductor → I²R heat at point of</text><text x="80" y="750" class="t-keyval">entry (Joule effect)</text><text x="80" y="780" class="t-keylbl">Appearance:</text><text x="80" y="800" class="t-keyval">Brownish biscuit colour → charring</text><circle class="ic" cx="420" cy="558" r="14"/><text class="t-info" x="420" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="crater-lesion"><rect class="body-white" x="450" y="540" width="370" height="280" rx="14"/><path d="M 464,540 H 806 A 14,14 0 0 1 820,554 V 595 H 450 V 554 A 14,14 0 0 1 464,540 Z" fill="url(#gBlue)"/><text x="470" y="578" class="t-nlg">🕳️ CRATER LESION</text><text x="470" y="635" class="t-keylbl">Setting:</text><text x="540" y="635" class="t-keyval">Low/medium voltage</text><text x="470" y="670" class="t-keylbl">Appearance:</text><text x="470" y="690" class="t-keyval">Round/oval shallow depression,</text><text x="470" y="710" class="t-keyval">1-3 mm raised ridge of pale skin,</text><text x="470" y="730" class="t-keyval">tough on palpation</text><text x="470" y="760" class="t-keyval"><strong>Floor:</strong> pale flattened skin · ridges preserved</text><text x="470" y="780" class="t-keyval"><strong>Surrounded by</strong> pale areola/halo</text><text x="470" y="800" class="t-keyval">Hard / dry skin (palm/sole) → cracks</text><circle class="ic" cx="810" cy="558" r="14"/><text class="t-info" x="810" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="collapsed-blister"><rect class="body-white" x="840" y="540" width="370" height="280" rx="14"/><path d="M 854,540 H 1196 A 14,14 0 0 1 1210,554 V 595 H 840 V 554 A 14,14 0 0 1 854,540 Z" fill="url(#gPurple)"/><text x="860" y="578" class="t-nlg">💧 COLLAPSED BLISTER</text><text x="860" y="635" class="t-keylbl">Mechanism:</text><text x="860" y="655" class="t-keyval">Firm skin-conductor contact →</text><text x="860" y="675" class="t-keyval">tissue fluid heats → STEAM</text><text x="860" y="695" class="t-keyval">→ splits epidermo-dermal junction → blister</text><text x="860" y="725" class="t-keylbl">Cooling:</text><text x="860" y="745" class="t-keyval">Blister collapses → umbilicated centre,</text><text x="860" y="765" class="t-keyval">raised gray/white ring/margin</text><text x="860" y="800" class="t-keyval">★ Circular · classic AC contact mark</text><circle class="ic" cx="1200" cy="558" r="14"/><text class="t-info" x="1200" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="crocodile"><rect class="body-white" x="1230" y="540" width="310" height="280" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 1244,540 H 1526 A 14,14 0 0 1 1540,554 V 595 H 1230 V 554 A 14,14 0 0 1 1244,540 Z" fill="url(#gRed)"/><text x="1240" y="578" class="t-nlg">🐊 CROCODILE SKIN</text><text x="1240" y="635" class="t-keylbl">Setting:</text><text x="1310" y="635" class="t-keyval">HIGH voltage</text><text x="1240" y="670" class="t-keylbl">Mechanism:</text><text x="1240" y="690" class="t-keyval">Sparking over many mm/cm</text><text x="1240" y="710" class="t-keyval">→ multiple focal burns</text><text x="1240" y="745" class="t-keylbl">Appearance:</text><text x="1240" y="765" class="t-keyval">Multiple spark lesions —</text><text x="1240" y="785" class="t-keyval">resembling crocodile skin</text><circle class="ic" cx="1530" cy="558" r="14"/><text class="t-info" x="1530" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="elec-autopsy"><rect x="60" y="840" width="1480" height="160" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="880" class="t-nlg" text-anchor="middle">🔬 Electrocution — Autopsy &amp; Forensic Pearls</text><text x="90" y="915" class="t-body">• <strong>PALE HALO / areola</strong> around mark (arteriolar spasm) — PATHOGNOMIC of electric injury · persists after death</text><text x="90" y="940" class="t-body">• <strong>METALLIZATION</strong> — metal ions deposited in skin at entry (e.g., green from copper); spectroscopy / chemistry confirms</text><text x="90" y="965" class="t-body">• <strong>PATTERNED marks</strong> — conductor shape (wire grid / appliance) may be imprinted on skin</text><text x="90" y="990" class="t-body">• Internal: congested organs · pulmonary oedema · petechiae on pericardium/pleura/brain · <strong>Acroreaction test</strong> for metal</text><circle class="ic" cx="1510" cy="858" r="14"/><text class="t-info" x="1510" y="864" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1020" width="1480" height="40" rx="10" fill="url(#gOrange)"/><text x="800" y="1048" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">🎯 AC &gt; DC · 50-80 mA AC fatal · Joule = endogenous · Crater (LV) · Crocodile (HV) · Pale halo = pathognomic</text>
</svg>`;

const SVG_TI11 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Lightning — Mechanism, Marks &amp; Autopsy</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">10-100 million V DC · Lichtenberg figures (filigree) · Direct/splash/ground stroke</text>

<g data-node-id="lightning-physics"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚡ LIGHTNING — Physics</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Atmospheric electrical discharge — <strong>10 to 100 MILLION VOLTS DC</strong>, current up to 200,000 A, lasting &lt; 10⁻⁴ second. Cloud lower surface (negative) + earth/object (positive) creates "leader stroke" + "streamer/pilot" + "return stroke." Speed &gt; 100 km/sec.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="strike-types"><rect class="body-white" x="60" y="240" width="490" height="260" rx="14"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" class="t-nlg">⚡ Ways Lightning Strikes Victim</text><text x="80" y="335" class="t-keylbl">1. DIRECT stroke</text><text x="80" y="355" class="t-keyval">Strike on victim or held object (umbrella, tree)</text><text x="80" y="395" class="t-keylbl">2. SPLASH strike</text><text x="80" y="415" class="t-keyval">Strikes nearby building/tree → jumps to person</text><text x="80" y="455" class="t-keylbl">3. GROUND current</text><text x="80" y="475" class="t-keyval">Spread via earth · "step potential" effect</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lightning-effects"><rect class="body-white" x="570" y="240" width="490" height="260" rx="14"/><path d="M 584,240 H 1046 A 14,14 0 0 1 1060,254 V 295 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gRed)"/><text x="590" y="285" class="t-nlg">💥 4 Effects (Spencer)</text><text x="590" y="335" class="t-keyval">1. <strong>Direct high-voltage current</strong> — VF / asystole</text><text x="590" y="370" class="t-keyval">2. <strong>Heat</strong> — singeing / burning by superheated air</text><text x="590" y="405" class="t-keyval">3. <strong>Air expansion-regression</strong> — blast-like effect</text><text x="590" y="440" class="t-keyval">4. <strong>Sledge-hammer blow</strong> — compression of</text><text x="590" y="460" class="t-keyval">air ahead of return stroke = blunt trauma</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lichtenberg"><rect class="body-white" x="1080" y="240" width="460" height="260" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 1094,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 1080 V 254 A 14,14 0 0 1 1094,240 Z" fill="url(#gRed)"/><text x="1090" y="285" class="t-nlg">🌿 LICHTENBERG ★</text><text x="1090" y="320" class="t-keyval">aka <strong>FILIGREE / Arborescent /</strong></text><text x="1090" y="340" class="t-keyval"><strong>Fern-leaf pattern / Feathering</strong></text><text x="1090" y="370" class="t-keylbl">Site:</text><text x="1150" y="370" class="t-keyval">Shoulder / chest / arm</text><text x="1090" y="400" class="t-keylbl">Cause:</text><text x="1090" y="420" class="t-keyval">Postulated: copper deposition</text><text x="1090" y="440" class="t-keyval">OR Hb staining along current path</text><text x="1090" y="470" class="t-keyval">★ <strong>Pathognomic of lightning</strong></text><text x="1090" y="490" class="t-keyval">★ <strong>FADES in 2-3 days</strong> — document immediately</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lightning-marks"><rect x="60" y="520" width="900" height="260" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="510" y="560" class="t-nlg" text-anchor="middle">🩹 External Marks of Lightning (Spencer 1932)</text><text x="90" y="595" class="t-body"><strong>1. SURFACE BURNS</strong> — tissue burns, often related to metallic objects worn/carried</text><text x="90" y="620" class="t-body">Secondary burns from clothing ignition · blisters, fissures, charring of deep tissue</text><text x="90" y="655" class="t-body"><strong>2. LINEAR BURNS</strong> — 1-12 inches long, 1/8-1 inch wide</text><text x="90" y="680" class="t-body">Found where skin offers less resistance — <strong>moist creases &amp; folds</strong></text><text x="90" y="715" class="t-body"><strong>3. ARBORESCENT / FILIGREE BURNS</strong> — Lichtenberg figures (see right)</text><text x="90" y="740" class="t-body">Multiple, superficial, irregular, tortuous markings resembling tree branches</text><text x="90" y="765" class="t-body" font-style="italic">★ NEET-PG 2021 Q3 — Lightning case identification clue</text><circle class="ic" cx="940" cy="538" r="14"/><text class="t-info" x="940" y="544" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lightning-autopsy"><rect x="980" y="520" width="560" height="260" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="560" class="t-nlg" text-anchor="middle">🔬 Autopsy &amp; Scene Findings</text><text x="1000" y="595" class="t-body">• Scene: storm history · damaged trees · charred arc marks on walls</text><text x="1000" y="620" class="t-body">• "Fern pattern" in grass — surface discharge</text><text x="1000" y="645" class="t-body">• Clothes singed / torn off · boots / belts may BURST OPEN</text><text x="1000" y="670" class="t-body">• Metal objects (buttons, hairpins, key) MAGNETISED / fused</text><text x="1000" y="695" class="t-body">• Rigor mortis: early onset + quick passage</text><text x="1000" y="720" class="t-body">• <strong>Tympanic rupture</strong> (explosive effect) · cluster punctate arc burns</text><text x="1000" y="745" class="t-body">• Petechiae brain · axon chromatolysis · pulmonary oedema</text><circle class="ic" cx="1520" cy="538" r="14"/><text class="t-info" x="1520" y="544" text-anchor="middle">ⓘ</text></g>

<g data-node-id="elec-vs-lightning"><rect x="60" y="800" width="1480" height="200" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="840" class="t-nlg" text-anchor="middle">⚡ Electrocution vs Lightning — Quick Differential</text><text x="90" y="878" class="t-body">• <strong>Voltage:</strong> Electric ≤ kV · Lightning 10-100 million V DC</text><text x="90" y="903" class="t-body">• <strong>Current type:</strong> Domestic = AC · Lightning = very high DC</text><text x="90" y="928" class="t-body">• <strong>Entry/exit wounds:</strong> Electrocution often distinct · Lightning usually NOT — energy dissipates over skin</text><text x="90" y="953" class="t-body">• <strong>Pathognomic mark:</strong> Electric — pale halo + Joule + crater · Lightning — <strong>FILIGREE / Lichtenberg figures</strong></text><text x="90" y="978" class="t-body">• <strong>Tympanic rupture &amp; metal magnetisation</strong> are LIGHTNING-specific</text><circle class="ic" cx="1510" cy="818" r="14"/><text class="t-info" x="1510" y="824" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1020" width="1480" height="40" rx="10" fill="url(#gOrange)"/><text x="800" y="1048" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">🎯 Lightning = 10-100 million V DC · Lichtenberg/filigree pathognomic · fades 2-3 days · tympanic rupture + magnetised metal</text>
</svg>`;


const NODES = {
  'ti-overview': { label: 'Thermal Injury — Master Definition', info: '<p><strong>Thermal injury</strong> = tissue damage due to exposure to abnormal temperature, either above or below body temperature.</p><p>Classification matrix:</p><ul><li><strong>By direction:</strong> COLD vs HEAT</li><li><strong>By extent:</strong> GENERAL (systemic, whole-body effect) vs LOCAL (focal contact)</li></ul><p>The 4 quadrants — cold/general (hypothermia) · cold/local (frostbite/trench foot) · heat/general (heat stroke) · heat/local (burns/scalds/electrocution/lightning) — organise the entire chapter.</p>', tags: ['4-quadrant matrix'] },
  'ti-cold-general': { label: 'Cold — General Effect (Hypothermia)', info: '<p><strong>HYPOTHERMIA</strong> = core body temp &lt; 35°C (95°F).</p><p><strong>Grading:</strong></p><ul><li>Mild: 32-35°C — shivering, confusion</li><li>Moderate: 28-&lt; 32°C — stupor, bradycardia, shivering stops</li><li>Severe: &lt; 28°C — coma, ventricular fibrillation, apnoea</li></ul><p><strong>At-risk:</strong> mountaineers, drowning survivors, elderly, alcoholics, neonates, malnourished.</p><p><strong>Cause of death:</strong> Ventricular fibrillation (especially &lt; 28°C).</p>', tags: ['Core &lt; 35°C', 'VF &lt; 28°C'] },
  'ti-cold-local': { label: 'Cold — Local Effects', info: '<p>3 conditions caused by local cold:</p><ol><li><strong>Frostbite</strong> — DRY cold &lt; 0°C → freezing + vasoconstriction → 4 degrees</li><li><strong>Trench foot / Immersion foot</strong> — WET cold 5-6°C, prolonged → obliterating angiitis</li><li><strong>Pernio (Chilblains)</strong> — vasculitic response to cold (above freezing) → raised erythematous lesions with pruritus</li></ol><p>Distal extremities (fingers/toes) + facial prominences (ears/nose/chin) most vulnerable.</p>', tags: ['Frostbite · trench · pernio'] },
  'ti-heat-general': { label: 'Heat — General Effects', info: '<p>Spectrum of heat-related systemic illness:</p><ol><li><strong>Heat syncope / collapse / exhaustion</strong> — peripheral vasodilation → hypotension → faint</li><li><strong>Heat cramps</strong> — hyponatraemia + electrolyte loss → painful muscle spasm</li><li><strong>Heat exhaustion</strong> — temp 37-40°C · SWEATING preserved</li><li><strong>Heat stroke / Sunstroke / Hyperpyrexia</strong> ★ — core &gt; 41°C / 106°F · <strong>HOT DRY SKIN</strong> · medical emergency</li></ol><p>Differentiating feature: heat exhaustion has sweating; heat stroke does not (thermoregulation has failed).</p>', tags: ['Stroke = 106°F + dry skin'] },
  'ti-heat-local': { label: 'Heat — Local Effects', info: '<p>4 categories:</p><ul><li><strong>Burns</strong> — DRY heat (flame, contact, friction, chemical, electric, radiation)</li><li><strong>Scalds</strong> — MOIST heat (liquid ≥ 50°C, steam)</li><li><strong>Electrocution</strong> — current-induced thermal damage (Joule effect)</li><li><strong>Lightning</strong> — extreme high-voltage DC (10-100 million V)</li></ul><p>Each is covered by a dedicated diagram in this chapter.</p>', tags: ['Burns · scalds · electrical'] },
  'ti-burn-causes': { label: 'Causation Patterns of Burn Injury', info: '<p>Population-specific causation:</p><ul><li><strong>Infants / toddlers</strong> — scalds from kitchen spills (hot tea, milk, oil)</li><li><strong>Children</strong> — matchbox/bonfire play · curiosity-driven contact burns</li><li><strong>Battered baby syndrome</strong> — purposeful cigarette/hot fork/iron marks</li><li><strong>Epileptics, intoxicated, senile</strong> — fall into fire / cooking flame during seizure or stupor</li><li><strong>Dowry / bride burns</strong> — kerosene poured, ignited; significant Indian forensic problem</li><li><strong>Industrial</strong> — furnace, mining, electrical, chemical</li><li><strong>Transport</strong> — aviation accidents (less common than mechanical injury)</li></ul>', tags: ['Population patterns'] },
  'ti-legal-frame': { label: 'Legal Framework — Thermal Injury', info: '<p>Key BNS / BSA sections for burn cases:</p><ul><li><strong>BNS 80</strong> — Dowry death (was IPC 304-B): death of woman by burn / injury within 7 yrs of marriage + prior cruelty → 7 yrs to life</li><li><strong>BNS 85 / 86</strong> — Cruelty by husband/relative (was IPC 498-A): up to 3 yrs + fine</li><li><strong>BNS 118</strong> — Hurt by fire / heated substance / corrosive / poison: hurt 3 yrs · grievous hurt 10 yrs to life</li><li><strong>BNS 124</strong> — Acid attack (was IPC 326A/B): 10 yrs to life + fine to victim</li><li><strong>BSA 117</strong> (≡ IEA 113-A) — Presumption of abetment of suicide by married woman</li><li><strong>BSA 118</strong> (≡ IEA 113-B) — Presumption of dowry death</li><li><strong>BNSS 196</strong> (≡ CrPC 176) — Magistrate inquest mandatory in dowry death</li></ul>', tags: ['BNS 80 / 85 / 118 / 124'] },

  'hypo-def': { label: 'Hypothermia — Definition', info: '<p><strong>Hypothermia</strong> = state in which core body temperature falls below <strong>35°C (95°F)</strong>.</p><p>Defined by core temperature (rectal / oesophageal probe). Peripheral / axillary temperature underestimates and is unreliable in cold-exposed patients.</p><p>Heat loss exceeds heat production. The body progressively loses ability to maintain thermoregulatory set-point.</p>', tags: ['Core &lt; 35°C'] },
  'hypo-class': { label: 'Hypothermia — Severity Grading', info: '<p>Severity correlates with clinical features and risk:</p><ul><li><strong>MILD (32-35°C)</strong> — shivering, vasoconstriction, tachycardia, ↑BP, mental confusion, dysarthria</li><li><strong>MODERATE (28-&lt; 32°C)</strong> — shivering CEASES (paradoxical), bradycardia, ↓BP, stupor, dilated pupils, J-wave (Osborn) on ECG</li><li><strong>SEVERE (&lt; 28°C)</strong> — coma, no shivering, areflexia, apnoea, profound bradycardia, <strong>ventricular fibrillation risk on any handling</strong></li></ul>', tags: ['Mild · Moderate · Severe'] },
  'hypo-causes': { label: 'Hypothermia — Causes / Risk Factors', info: '<ol><li><strong>Environmental cold + exhaustion</strong> — mountaineers, polar expedition, snowstorm</li><li><strong>Immersion hypothermia</strong> — cold-water drowning survivors</li><li><strong>Increased heat loss</strong> — burns, psoriasis, toxic epidermal necrolysis</li><li><strong>Decreased heat production</strong> — malnutrition, hypothyroidism, hepatic failure, adrenal failure</li><li><strong>Drug-induced</strong> — phenothiazines, barbiturates, ethanol, opiates, benzodiazepines</li><li><strong>Iatrogenic</strong> — prolonged anaesthesia, cold blood transfusion, cold IV fluids</li><li><strong>Extremes of age</strong> — neonates (large surface area), elderly (impaired thermoregulation)</li></ol>', tags: ['7 risk categories'] },
  'hypo-autopsy': { label: 'Hypothermia — Autopsy Findings ★', info: '<p>Forensic autopsy markers:</p><ul><li><strong>Pinkish post-mortem lividity</strong> — persistent oxyhaemoglobin in capillaries (cold tissues do not extract delivered O₂); slows decomposition</li><li>Skin may show <strong>erythematous patches</strong> ("frost erythema") over extensor surfaces of large joints — outer hips, elbows, knees, flanks, face</li><li>Rarely pale skin → "<strong>WHITE DEATH</strong>"</li><li>Lungs: oedematous with fresh haemorrhages</li><li>Trachea: froth + bronchospasm</li><li><strong>WISCHNEWSKI ulcers</strong> — small gastric mucosal haemorrhages and ulcerations (pathognomic)</li><li>Acute tubular necrosis · acute pancreatitis</li><li>↑ urinary catecholamines (prolonged agonal stress)</li><li>Hyperglycaemia + glucosuria</li></ul>', tags: ['Pink lividity · Wischnewski'] },
  'hypo-cod': { label: 'Hypothermia — Causes of Death', info: '<ol><li><strong>Ventricular fibrillation</strong> ★ — main mechanism, especially &lt; 28°C; cold myocardium becomes electrically unstable</li><li><strong>Disseminated intravascular coagulation</strong></li><li>Acid-base imbalance (metabolic acidosis from poor tissue perfusion)</li><li>Bronchospasm</li><li>Pulmonary oedema + fresh lung haemorrhages</li></ol><p>★ "Not dead until WARM and dead" — rewarm to ≥ 35°C before declaring death. VF refractory at low temp but may convert on rewarming + defibrillation.</p>', tags: ['VF leading cause'] },
  'hypo-pitfalls': { label: 'Hypothermia — Diagnostic Pitfalls', info: '<ul><li>Hypothermic patients may APPEAR dead — minimal breathing, profound bradycardia, fixed dilated pupils</li><li>★ "<strong>Not dead until warm and dead</strong>" — continue CPR + rewarming until core &gt; 35°C before declaring death</li><li>Pink lividity → differential includes <strong>CO poisoning · cyanide · refrigeration of body · hypothermia</strong> (see Ch 7)</li><li>Differential of unresponsive cold patient: <strong>barbiturate or CNS depressant overdose</strong>, alcohol intoxication, hypoglycaemia</li><li>Resuscitation algorithm differs — drug intervals doubled in hypothermia, repeated defibrillation only after warming &gt; 30°C</li></ul>', tags: ['Resuscitation rules'] },

  'cold-overview': { label: 'Local Cold — Anatomy of Vulnerability', info: '<p>Distal extremities + facial prominences are most vulnerable:</p><ul><li><strong>Fingers, toes</strong> — small mass, large surface area, vasoconstrictive shunting</li><li><strong>Ears, nose, chin, cheeks</strong> — exposed prominences</li></ul><p>Three distinct mechanisms produce three distinct entities:</p><ol><li><strong>Freezing + vasoconstriction</strong> (&lt; 0°C) → frostbite</li><li><strong>Prolonged WET cold</strong> (5-6°C) → trench foot / immersion foot</li><li><strong>Vasculitic reaction</strong> (cold but above freezing) → pernio (chilblains)</li></ol>', tags: ['3 mechanisms'] },
  'frostbite-def': { label: 'Frostbite — Mechanism & Treatment', info: '<p><strong>Frostbite</strong> = tissue injury from exposure to severe DRY cold OR contact with object &lt; 0°C.</p><p><strong>Mechanism:</strong> intracellular and extracellular ice crystal formation + vasoconstriction → ischaemic injury.</p><p><strong>Settings:</strong> mountaineering, polar expeditions, Ladakh / Kashmir winter, high-altitude trekking.</p><p><strong>Sites:</strong> fingers, toes, ears, nose, chin, cheeks.</p><p><strong>Symptoms:</strong> numbness → pain on rewarming → pallor → blackening / gangrene.</p><p><strong>Treatment:</strong></p><ul><li><strong>Rapid rewarming</strong> in 40-42°C water bath (30-45 min)</li><li>Analgesia (rewarming is painful)</li><li>Tetanus prophylaxis · NSAIDs</li><li><strong>NO rubbing</strong> (mechanical damage to frozen tissue)</li><li>★ <strong>Delayed amputation</strong> — wait weeks for line of demarcation</li></ul><p><strong>Prevention:</strong> layered insulating clothing, dry feet/hands, avoid alcohol &amp; smoking.</p>', tags: ['Rewarm 40-42°C · delayed amputation'] },
  'frostbite-degrees': { label: 'Frostbite — 4 Degrees', info: '<p>Pathological grading:</p><ul><li><strong>1st degree:</strong> Erythema + oedema only — superficial, reversible</li><li><strong>2nd degree:</strong> Blister formation — epidermis affected, dermis intact</li><li><strong>3rd degree:</strong> Skin + subcutaneous tissue NECROSIS — full thickness</li><li><strong>4th degree:</strong> Total tissue loss including <strong>MUSCLE and BONE</strong></li></ul><p>★ Black gangrene = 3rd or 4th degree (Ladakh hiker PYQ scenario).</p>', tags: ['4 degrees', 'Ladakh PYQ'] },
  'trench-foot': { label: 'Trench Foot / Immersion Foot', info: '<p><strong>Trench foot</strong> (aka <strong>immersion foot</strong>) — develops when foot or hand is exposed to WET cold at 5-6°C for prolonged periods.</p><p><strong>Key distinguishing feature:</strong> WETNESS — water penetrates further than dry cold, even though the temperature is above freezing.</p><p><strong>Settings:</strong> WW1 trenches (historical), modern fishermen, flood victims, soldiers, prolonged immersion.</p><p><strong>Features:</strong> Pale, swollen, cold foot initially numb · later red and painful on rewarming.</p><p><strong>Complication:</strong> Obliterating angiitis → gangrene → loss of digits / hand / foot.</p>', tags: ['Wet 5-6°C', 'Obliterating angiitis'] },
  'pernio': { label: 'Pernio (Chilblains)', info: '<p><strong>Pernio (Chilblains)</strong> = vasculitic disorder — an abnormal vascular response to cold (above freezing).</p><p>Mechanism: vasospasm + inflammatory reaction in small dermal vessels.</p><p><strong>Features:</strong></p><ul><li>Raised <strong>ERYTHEMATOUS LESIONS</strong> on lower legs and feet (sometimes hands)</li><li>Purplish discoloration</li><li><strong>Pruritus + burning sensation</strong></li><li>More common in young women; associated with Raynaud\'s phenomenon</li></ul><p><strong>Treatment:</strong> warming, nifedipine (vasodilator), topical steroids, avoidance of cold.</p>', tags: ['Vasculitic', 'Pruritus + burning'] },
  'prevention': { label: 'Cold Injury — Prevention', info: '<ul><li>Layered insulating clothing — especially extremities &amp; head (most heat loss)</li><li>Keep extremities <strong>DRY</strong> — change socks frequently in wet conditions</li><li>Avoid <strong>alcohol</strong> (false sense of warmth + peripheral vasoconstriction) &amp; <strong>smoking</strong> (nicotinic vasoconstriction)</li><li>Stay <strong>hydrated</strong> &amp; maintain caloric intake (cold burns ~ 25% extra calories)</li><li><strong>Buddy system</strong> in extreme cold — early frostbite easier to spot in someone else</li><li>Cover face, ears, nose · break from cold every 1-2 hr</li><li>Pre-acclimatisation for high-altitude trekkers</li></ul>', tags: ['Layered · dry · no alcohol'] },

  'heat-overview': { label: 'Hyperthermia — Definition', info: '<p><strong>Hyperthermia</strong> = elevation of body temperature ABOVE the hypothalamic set point (normal 37°C / 98.6°F).</p><p>★ <strong>Distinguish from FEVER:</strong> in fever, the hypothalamic set point itself is RAISED (e.g., infection releases pyrogens like IL-1 → PGE₂); in hyperthermia, the set point is NORMAL but heat dissipation cannot keep up with thermal load.</p><p>Mechanisms of heat loss (failing in hyperthermia): radiation, conduction, convection, evaporation (sweating).</p>', tags: ['Set-point exceeded'] },
  'heat-syncope': { label: 'Heat Syncope (Heat Collapse / Exhaustion)', info: '<p><strong>Synonyms:</strong> heat collapse, heat exhaustion, heat prostration.</p><p><strong>Mechanism:</strong> Peripheral vasodilation in hot environment → reduced effective blood volume → cerebral hypoperfusion → transient loss of consciousness.</p><p><strong>Features:</strong></p><ul><li>Prostration · pallor · hypotension</li><li>Flushing of face · headache · giddiness</li><li>Oliguria · irritability</li><li>Collapse but consciousness usually recovers</li></ul><p><strong>Rx:</strong> Move to cool environment, supine position, oral fluids.</p>', tags: ['Vasodilation → syncope'] },
  'heat-cramps': { label: 'Heat Cramps', info: '<p><strong>Synonyms:</strong> miner\'s cramps, stoker\'s cramps, boiler-room cramps.</p><p><strong>Mechanism:</strong> Profuse sweating in hot work → loss of sodium + water → <strong>hyponatraemia + electrolyte derangement</strong> → painful muscle spasms.</p><p><strong>Features:</strong> Painful spasms of voluntary muscles (calves, abdomen, thighs).</p><p><strong>Rx:</strong> Oral rehydration solution (ORS) or IV saline.</p>', tags: ['Hyponatraemia', 'Painful spasms'] },
  'heat-exhaustion': { label: 'Heat Exhaustion', info: '<p><strong>Heat exhaustion</strong> = volume + electrolyte depletion WITHOUT core temperature &gt; 40°C.</p><p><strong>Temperature:</strong> 37 – 40°C (99 – 104°F)</p><p><strong>Features:</strong></p><ul><li><strong>SWEATING PRESERVED</strong> ★ — key distinction from heat stroke</li><li>Cool clammy skin · weakness · nausea</li><li>Headache · tachycardia</li><li>Consciousness PRESERVED · no major CNS dysfunction</li></ul><p><strong>Rx:</strong> Move to cool environment, IV/oral rehydration, electrolyte replacement.</p><p>★ If sweating fails → progresses to HEAT STROKE.</p>', tags: ['Sweating preserved', '37-40°C'] },
  'heat-stroke': { label: 'Heat Stroke (Sunstroke / Hyperpyrexia) ★', info: '<p><strong>Synonyms:</strong> sunstroke, heat hyperpyrexia, thermic fever, systemic hyperthermia.</p><p><strong>Core temperature:</strong> &gt; 41°C (106°F)</p><p>★ <strong>KEY FEATURE — HOT AND DRY SKIN</strong> — sweating ABSENT because the heat-regulatory mechanism has FAILED.</p><p><strong>Other features:</strong> tachycardia, ↑ depth of respiration, headache, nausea, vomiting, weakness, dizziness, convulsions, delirium, stupor, coma, hypotension.</p><p><strong>Mechanism of death:</strong> Paralysis of hypothalamic heat-regulatory centre.</p><p><strong>NEET-PG 2021 Q9 + 2023 Q1</strong> — Farm labourer 106°F → <strong>SWEATING is LEAST likely</strong> (heat stroke = HOT DRY skin).</p>', tags: ['&gt; 41°C', 'HOT DRY skin', 'PYQ 2021 Q9 + 2023 Q1'] },
  'stroke-autopsy': { label: 'Heat Stroke — Autopsy Findings', info: '<ul><li><strong>Post-mortem caloricity</strong> — body remains warm after death (rectal temp continues to rise briefly)</li><li><strong>Rigor mortis</strong> sets in EARLY and passes off EARLY (already-warm muscle proteins denature faster)</li><li><strong>Putrefaction is RAPID</strong> (body remains warm, decomposition starts immediately)</li><li><strong>Brain:</strong> oedematous, congested, petechial haemorrhages in white matter</li><li><strong>Lungs:</strong> congested, fresh haemorrhages</li><li>Survival &gt; 12-24 h → multi-organ damage: focal myocardial necrosis, centrilobular hepatic necrosis, renal tubular necrosis, adrenal necrosis</li><li>Rhabdomyolysis, pancreatitis, disseminated intravascular coagulation</li></ul>', tags: ['PM caloricity · rapid rigor + putrefaction'] },
  'stroke-causes': { label: 'Causes of Hyperthermia (besides classic stroke)', info: '<ol><li><strong>Classic heat stroke</strong> — hot environment ± exertion</li><li><strong>Drug-induced</strong> — amphetamines, MAO inhibitors, tricyclic antidepressants, cocaine</li><li><strong>Neuroleptic Malignant Syndrome (NMS)</strong> — phenothiazines, haloperidol, fluoxetine (rigidity + hyperthermia + altered mental state)</li><li><strong>Malignant hyperthermia</strong> — inhaled anaesthetic agents (halothane) + succinylcholine in genetically susceptible individuals (RYR1 mutation)</li><li><strong>Endocrine</strong> — thyrotoxic crisis, pheochromocytoma</li><li><strong>Sepsis</strong> — systemic inflammatory response</li></ol>', tags: ['6 hyperthermia causes'] },

  'burn-def': { label: 'Burn — Definition (Forensic)', info: '<p><strong>Burn</strong> = "tissue injury due to the application of HEAT (in any form) to the external or internal body surface."</p><p>Heat may be in form of:</p><ol><li><strong>Dry heat</strong> — flame, contact with hot solid (iron, stove)</li><li><strong>Moist heat</strong> — scalds (hot liquid or steam)</li><li><strong>Friction</strong> — brush burns (RTA, motorcyclist drag)</li><li><strong>Chemical burns</strong> — acid (coagulative), alkali (liquefactive), corrosive metal salts</li><li><strong>Electric / lightning burns</strong></li><li><strong>Radiation</strong> — UV, X-ray, IR, laser, radium, explosion (flash)</li></ol>', tags: ['6 forms of heat'] },
  'burn-zones': { label: '3 Zones of Burn Injury', info: '<p>Concentric zones radiating outward from centre of burn (Jackson 1947):</p><ol><li><strong>Zone of COAGULATION</strong> — central, necrotic, irreversibly damaged cells</li><li><strong>Zone of STASIS</strong> — surrounding, reduced perfusion, cells may survive OR progress to necrosis (dependent on fluid resuscitation, infection control)</li><li><strong>Zone of HYPEREMIA</strong> — outermost, vasodilation, healing process begins from here</li></ol><p>★ The zone of stasis is the THERAPEUTIC TARGET — early fluid resuscitation can save these cells from progressing to coagulative necrosis.</p>', tags: ['Coag · Stasis · Hyperaemia'] },
  'burn-types': { label: 'Types of Burns (by Agent)', info: '<ol><li><strong>Dry heat</strong> — flame, contact (hot iron, stove, exhaust pipe)</li><li><strong>Moist heat (scalds)</strong> — water, oil, molten rubber/metal, steam</li><li><strong>Friction</strong> — brush burns in motorcyclist drag, RTA</li><li><strong>Chemical</strong> — acid (eschar formation), alkali (deep liquefactive injury)</li><li><strong>Electric / lightning</strong> — current converted to heat (Joule effect)</li><li><strong>Radiation</strong> — UV (sunburn), X-ray, IR (welder\'s arc), laser, explosion flash</li></ol>', tags: ['6 types by agent'] },
  'burn-pathophys': { label: 'Burn Pathophysiology', info: '<p>Burn injury causes <strong>COAGULATIVE NECROSIS</strong> of epidermis and underlying tissues.</p><p><strong>Mechanism:</strong></p><ul><li><strong>Heat transfer</strong> → protein denaturation → cellular death</li><li><strong>Chemicals</strong> → direct cell membrane lysis + protein damage</li><li><strong>Electricity</strong> → ion shifts + Joule heating + electroporation</li></ul><p><strong>Depth depends on:</strong></p><ol><li><strong>Temperature</strong> applied</li><li><strong>Duration</strong> of contact</li><li>Skin <strong>thickness</strong></li><li>Heat-dissipating capacity (blood flow)</li></ol><p>Even moderate temperature (~ 50°C) for prolonged duration produces severe burn; very high temperature for brief duration may be superficial.</p>', tags: ['Coagulative necrosis · 4 depth determinants'] },
  'dupuytren': { label: 'Dupuytren Classification (6 Degrees)', info: '<p>French surgeon\'s exhaustive 6-degree system:</p><ul><li><strong>1°</strong> — erythema only (superficial epidermis); low heat or brief contact</li><li><strong>2°</strong> — blister + hyperaemia + singeing of hair; epidermis only · painful</li><li><strong>3°</strong> — partial dermis destruction; epidermis destroyed; blisters + singeing · painful · heals with scar</li><li><strong>4°</strong> — whole skin thickness involved; painful; heals by scar formation</li><li><strong>5°</strong> — subcutaneous fat (hypodermis) involved · <strong>LESS PAINFUL</strong> (nerves destroyed) · deep scarring + contracture</li><li><strong>6°</strong> — muscle + BONE involved; charring · heals with deep scar + contracture + loss of function</li></ul><p><strong>★ Advantage:</strong> precise. <strong>★ Disadvantage:</strong> exhaustive — limited clinical use due to subjective variation.</p>', tags: ['6° classification'] },
  'wilson': { label: 'Wilson Classification (3 Degrees)', info: '<p>Practical simplification of Dupuytren — merged each adjacent pair:</p><ul><li><strong>1° (Epidermal)</strong> = Dupuytren 1 + 2 — erythema ± blisters · heals WITHOUT scar</li><li><strong>2° (Dermo-epidermal)</strong> = Dupuytren 3 + 4 — full thickness skin · charring + blisters · heals with PERMANENT scar</li><li><strong>3° (Deep)</strong> = Dupuytren 5 + 6 — subcutaneous + muscle/bone · LESS PAINFUL (nerves gone) · contracture + disfigurement + loss of function</li></ul><p><strong>★ Advantage:</strong> Easy to apply, clinically practical.</p>', tags: ['3° classification'] },
  'modern-class': { label: 'Modern Classification (2 Grades)', info: '<p>Gross practical classification, dividing burns into 2 grades:</p><ul><li><strong>SUPERFICIAL burns</strong> — dermo-epidermal injuries that do NOT extend through full skin thickness; heal without permanent scar</li><li><strong>DEEP burns</strong> — extend BEYOND true skin (subcutaneous, muscle, bone); permanent scar + contracture + functional loss</li></ul><p>★ Any burn extending beyond true skin = "deep" by modern criterion.</p><p>Used in modern surgical practice for graft / dressing decisions.</p>', tags: ['Superficial vs Deep'] },

  'tbsa-overview': { label: 'TBSA — Why &amp; How', info: '<p><strong>Total Body Surface Area (TBSA)</strong> quantifies the extent of burn injury.</p><p><strong>Used for:</strong></p><ul><li>Severity classification (minor / moderate / major)</li><li><strong>Fluid resuscitation</strong> (Parkland formula: 4 mL/kg × %TBSA of Ringer\'s lactate in first 24 h)</li><li>Prognosis (mortality correlates with %TBSA + age + inhalation injury)</li><li>Transfer-to-burn-centre criteria</li></ul><p><strong>3 estimation methods:</strong> Wallace Rule of 9 (adult bedside) · Lund-Browder chart (age-graded paediatric) · Patient\'s palm (~ 1%, for small / scattered burns).</p>', tags: ['Severity · fluids · prognosis'] },
  'wallace': { label: 'Wallace Rule of 9 (Adult)', info: '<p>Quick bedside estimation in adults:</p><ul><li><strong>Head + neck:</strong> 9% (face 4.5 + scalp 4.5)</li><li><strong>Anterior trunk:</strong> 18% (chest 9 + abdomen 9)</li><li><strong>Posterior trunk:</strong> 18% (upper back 9 + lower back 9, incl. buttock)</li><li><strong>Each upper limb:</strong> 9% (front 4.5 + back 4.5)</li><li><strong>Each lower limb:</strong> 18% (front 9 + back 9)</li><li><strong>Genitals / perineum:</strong> 1%</li></ul><p>Total = 9 + 18 + 18 + 9 + 9 + 18 + 18 + 1 = <strong>100%</strong>.</p><p>★ <strong>Adults only</strong> — children need Lund-Browder due to proportionally larger heads + shorter lower limbs.</p>', tags: ['Adult bedside'] },
  'lund-browder': { label: 'Lund-Browder Chart (Children) ★', info: '<p>Age-graded chart correcting for paediatric proportions.</p><p><strong>Why needed:</strong> children &lt; 4 yr have heads accounting for up to 19% of TBSA (vs 7% in adults) and shorter lower limbs (~14% vs 20%).</p><p><strong>Head — varies by age:</strong></p><ul><li>0-1 yr: <strong>19%</strong></li><li>1-4 yr: 17%</li><li>5-9 yr: 13%</li><li>10-14 yr: 11%</li><li>15 yr: 9%</li><li>Adult: 7%</li></ul><p><strong>Each lower limb — varies by age:</strong></p><ul><li>0-1 yr: 14% · 1-4 yr: 15% · 5-9 yr: 17% · 10-14 yr: 18% · 15 yr: 19% · Adult: 20%</li></ul><p><strong>Constant across ages:</strong> Neck 2% · Ant/Post trunk 13% each · Each buttock 2.5% · Genitals 1% · Each upper limb 9.5%.</p>', tags: ['Age-graded'] },
  'palm-rule': { label: 'Palm Rule (Quick Bedside)', info: '<p><strong>Patient\'s palm (with fingers) ≈ 1% TBSA</strong> — applies to ALL ages (the palm is proportional to the body).</p><p><strong>Use case:</strong> Small or scattered burns where Wallace / Lund-Browder are over-engineered.</p><p>★ Quick at scene, no chart needed, uses patient\'s own anatomy as the reference.</p><p><em>Note:</em> Some sources distinguish palm WITHOUT fingers = 0.5%; palm WITH fingers = 1%.</p>', tags: ['1% per palm'] },
  'severity': { label: 'ABA Severity Classification', info: '<p>American Burn Association severity grading:</p><ul><li><strong>MINOR</strong> — superficial burns &lt; 15% TBSA in adults (&lt; 10% in children)</li><li><strong>MODERATE</strong> — superficial 15-25% TBSA in adults (10-20% in children) OR full thickness &lt; 10% TBSA (not involving eyes, ears, face, hands, feet, perineum)</li><li><strong>MAJOR</strong> — above thresholds + most full-thickness burns in infants &amp; elderly + inhalational injury + concomitant trauma</li></ul><p>Major burns require transfer to burn centre.</p>', tags: ['Minor / Mod / Major'] },

  'pugilistic': { label: 'Pugilistic Attitude ★', info: '<p><strong>Pugilistic attitude</strong> (boxer\'s / fencer\'s attitude) = postmortem postural change seen in fire victims.</p><p><strong>Mechanism:</strong> Heat causes <strong>coagulation + denaturation of muscle proteins</strong> → muscle contraction + stiffening ("heat rigor" or "heat stiffening").</p><p><strong>Appearance:</strong> Generalised <strong>flexion</strong> of trunk and limbs; <strong>fingers curl inwards</strong> like a boxer\'s clenched fist. Contraction of paraspinal muscles produces marked <strong>opisthotonos</strong>.</p><p>★ <strong>NEET-PG 2016 Q28</strong> — Pugilistic attitude is characteristically seen in <strong>BURNS</strong>.</p><p>★ <strong>Does NOT distinguish AM from PM</strong> — occurs in both antemortem and postmortem burns.</p>', tags: ['PYQ 2016 Q28', 'Heat rigor'] },
  'heat-rupture': { label: 'Heat Ruptures (Skin Splits) ★', info: '<p><strong>Heat ruptures (splits)</strong> = linear skin tears from heat-induced tissue contraction.</p><p><strong>Mechanism:</strong> Continued heat → skin contracts and SPLITS → linear tears that mimic lacerations or incised wounds.</p><p><strong>Sites:</strong> Extensor surfaces, over joints (elbow, knee), scalp.</p><p><strong>Differentiating from true incised / lacerated wounds:</strong></p><ul><li>★ <strong>IRREGULAR MARGINS</strong> (NEET-PG 2016 Q31)</li><li>NO bleeding, NO clot, NO extravasation of blood</li><li>INTACT blood vessels &amp; nerves bridge the floor of the split</li><li>Pattern of distribution follows joints / extensor surfaces, not weapon path</li></ul><p>★ <strong>Does NOT distinguish AM from PM</strong> — heat ruptures occur in both.</p>', tags: ['PYQ 2016 Q31', 'Irregular margins'] },
  'heat-fracture': { label: 'Heat (Thermal) Fractures', info: '<p>Three types of thermal fracture:</p><ol><li><strong>BURSTING type:</strong> ↑ intracranial pressure from steam → separates un-united sutures or bursts the skull → gaping defect with widely separated margins</li><li><strong>SURFACE fracture:</strong> Bone drying + contraction → outer table of skull only → NO displacement → stellate fracture lines</li><li><strong>CURVED fracture:</strong> In long bones of extremities exposed to high temperature → peculiar curved fractures</li></ol><p>Differential from antemortem skull fractures: heat fractures do not cross sutures predictably and often have a characteristic stellate / radial pattern.</p>', tags: ['Bursting · Surface · Curved'] },
  'heat-hematoma': { label: 'Heat Hematoma ★', info: '<p><strong>Heat hematoma</strong> — postmortem extradural collection found in fire victims sustained to intense heat for prolonged duration.</p><p><strong>Location:</strong> Extradural space (between skull and dura).</p><p><strong>Site of predilection:</strong> Parieto-temporal region (commonest).</p><p><strong>Mechanism:</strong> Heat-induced extravasation from venous sinuses or via diploic emissary channels of the skull.</p><p><strong>Appearance:</strong> Soft, spongy from gas bubbles, friable, <strong>HONEYCOMB</strong> appearance · tawny or chocolate-brown (cherry-red if CO present).</p><p><strong>★ Differentiation from TRUE extradural haematoma:</strong></p><ul><li>True EDH from mechanical trauma + skull fracture</li><li>Heat hematoma has NO underlying trauma + skull exterior is charred</li><li>★ Presence of <strong>CO in the clot</strong> confirms it is a heat artefact (not antemortem injury)</li></ul>', tags: ['Parieto-temporal', 'Honeycomb'] },
  'soot-co': { label: 'Soot &amp; CO — Vital Signs of Life in Fire', info: '<p><strong>SOOT in respiratory tract:</strong></p><ul><li>Soot <strong>BELOW the vocal cords</strong> (in trachea, bronchi) → person was BREATHING during the fire = <strong>ANTEMORTEM</strong> exposure</li><li>Soot in <strong>terminal bronchioles</strong> = absolute proof of respiratory effort during fire (histological demonstration)</li></ul><p><strong>SOOT in oesophagus / stomach:</strong></p><ul><li>Person was SWALLOWING during fire = ANTEMORTEM</li><li>Gastric contents may be soot-stained</li></ul><p><strong>Carboxyhaemoglobin (CO-Hb) in blood:</strong></p><ul><li><strong>&gt; 5% saturation</strong> → ANTEMORTEM (breathed combustion products) ★</li><li>&gt; 50% saturation → likely cause of death (CO poisoning)</li><li>Bright cherry-red lividity from high CO levels</li></ul><p><strong>Cyanide:</strong> &gt; 0.3% in blood — from burnt lacquered wood / plastic (contains thiocyanate / cyanide precursors); confirms inhalation during fire.</p>', tags: ['Below cords + ↑CO = AM'] },
  'muscle-organ': { label: 'Cooked Muscle / Organs / Singed Hair / Charring', info: '<ul><li><strong>Subcutaneous fat</strong> acts as fuel when skin ignites — muscle below appears partly cooked / coagulated</li><li><strong>Hair singeing</strong> — scalp, eyebrows, eyelashes, body, axillary, even pubic hair; ends appear "clubbed" — keratin melts and re-solidifies on cooling</li><li>Severe sustained heat → <strong>charring of muscle &amp; bone</strong> (clavicle, ribs commonly charred); creates identification challenge</li><li>Internal organs: congested, partly cooked, firm and pallid</li><li><strong>Curling\'s ulcer</strong> — stress ulcer in stomach / duodenum (Curling 1842 — surgeon who described it in burns patients)</li></ul>', tags: ['Hair singeing · Curling ulcer'] },
  'pug-pitfall': { label: '⚠️ Critical Pitfall', info: '<p>★ <strong>HEAT ARTEFACTS DO NOT distinguish antemortem from postmortem burns:</strong></p><ul><li><strong>Pugilistic attitude</strong> — occurs in AM AND PM burns</li><li><strong>Heat rupture (skin splits)</strong> — occurs in AM AND PM</li><li><strong>Heat fracture (skull / bone)</strong> — occurs in AM AND PM</li><li><strong>Heat hematoma</strong> — occurs in AM AND PM (it IS itself a postmortem heat artefact when blood is from heated sinus)</li></ul><p><strong>To prove ANTEMORTEM:</strong></p><ul><li>Line of redness (vital reaction)</li><li>Soot BELOW vocal cords (respiratory effort during fire)</li><li>CO-Hb &gt; 5% (breathed combustion products)</li><li>Protein-rich blister fluid + raised papillae</li><li>Vital reaction histochemistry (cathepsin, esterase, etc.)</li></ul>', tags: ['Discriminators only'] },

  'am-pm-key': { label: 'AM vs PM Burns — Why It Matters', info: '<p>A body found burnt → critical forensic question: were the burns sustained while ALIVE (accidental, suicidal, homicidal fire) OR was the person killed first and burnt to destroy evidence (concealed homicide)?</p><p><strong>AM/PM differentiation = central forensic question in fire deaths.</strong></p><p>Approach: examine systematically for vital reaction (line of redness, blister composition, CO, soot), and exclude heat-only artefacts (pugilistic, splits, fractures, heat haematoma) from your "antemortem" pile.</p>', tags: ['Central forensic question'] },
  'line-redness': { label: 'Line of Redness ★', info: '<p><strong>LINE OF REDNESS</strong> = a hyperaemic / reddened margin AROUND the burn area, indicating vital inflammatory reaction.</p><p><strong>Present</strong> in <strong>ANTEMORTEM</strong> burns (vital reaction proves circulation was active).</p><p><strong>Absent</strong> in <strong>POSTMORTEM</strong> burns (no living tissue to mount inflammatory response).</p><p>★ Classic vital sign — first thing to look for. May fade or be obscured by heavy charring, but generally a reliable marker.</p>', tags: ['Classic vital sign'] },
  'vital-blister': { label: 'Blister Composition (AM vs PM)', info: '<p><strong>ANTEMORTEM blisters:</strong></p><ul><li>Contain serous fluid <strong>RICH in PROTEIN + CHLORIDES</strong></li><li>Base is RED, INFLAMED, with raised papillae</li><li>Reflects exudation from living vessels</li></ul><p><strong>POSTMORTEM blisters:</strong></p><ul><li>Usually ABSENT</li><li>If present (from heat alone) → contain AIR + clear watery fluid (NO protein)</li><li>Base is DRY, PALE or YELLOW, HARD and HORNY</li></ul><p>★ Chloride content + protein in fluid + base appearance = strongest histological discriminators.</p>', tags: ['Protein + chloride = AM'] },
  'vital-co-soot': { label: 'CO + Soot in Body (AM Markers)', info: '<p><strong>Carboxyhaemoglobin (CO-Hb):</strong></p><ul><li>&gt; 5% saturation → ANTEMORTEM (person breathed combustion products)</li><li>&gt; 50% → CO is the likely cause of death</li><li>Bright cherry-red lividity at autopsy</li></ul><p><strong>Soot below vocal cords</strong> → ANTEMORTEM (active inspiration during fire).</p><p><strong>Soot in stomach</strong> → ANTEMORTEM (swallowing during fire).</p><p>These three markers together provide near-conclusive evidence of antemortem fire exposure.</p>', tags: ['CO &gt; 5% + soot below cords'] },
  'enzyme-timing': { label: 'Enzyme Histochemistry — Vital Reaction Timeline', info: '<p>If the person was alive during the burn, enzyme activity at the wound margins appears in this sequence:</p><ul><li><strong>Cathepsin</strong> — immediate (within minutes)</li><li><strong>Serotonin</strong> — 10 min</li><li><strong>Histamine</strong> — 20 min</li><li><strong>Esterase</strong> — 1 hour</li><li><strong>ATPase</strong> — 1 hour</li><li><strong>Acid phosphatase</strong> — 3 hours</li><li><strong>Alkaline phosphatase</strong> — 4 hours</li></ul><p>Used to estimate survival time after burning, and to confirm antemortem nature of injury when the gross signs are equivocal.</p>', tags: ['Histochemical timeline'] },
  'cod-immediate': { label: 'Causes of Death — Immediate (Burns)', info: '<ol><li><strong>Neurogenic shock</strong> — pain-driven, vasovagal collapse</li><li><strong>Hypovolaemic shock</strong> — massive fluid loss from burnt skin (capillary leak)</li><li><strong>Inhalation of smoke</strong> — anoxia, irritant gases (acrolein, HCl, phosgene)</li><li><strong>Carbon monoxide inhalation</strong> — CO-Hb displaces O₂, blocks oxidative phosphorylation</li><li><strong>Laryngeal oedema / glottic oedema</strong> — inhalational burn → airway obstruction</li><li><strong>Secondary injuries</strong> — sustained while escaping (falls, jumps from windows, falling masonry)</li></ol>', tags: ['6 immediate causes'] },
  'cod-delayed': { label: 'Causes of Death — Delayed (Burns)', info: '<ol><li><strong>Septicaemic shock</strong> — burnt skin = giant infected wound · Pseudomonas, Staph aureus, Acinetobacter</li><li><strong>Toxaemia</strong> — endogenous toxins absorbed from necrotic tissue</li><li><strong>Renal failure</strong> — myoglobinuria (from rhabdomyolysis) + hypovolaemia + sepsis</li><li><strong>Pulmonary embolism</strong> (rare; immobilisation)</li><li><strong>Fat embolism</strong> (rare; long bone involvement)</li><li><strong>ARDS</strong> — inhalational injury + SIRS</li><li><strong>Curling\'s ulcer</strong> → GI haemorrhage</li><li>Multi-organ failure</li></ol>', tags: ['8 delayed causes'] },
  'age-burn': { label: 'Age of Burn Wound', info: '<p>Rough chronology of burn healing for age estimation:</p><ul><li>&lt; 1 hour: redness, vesication, vasodilation, oozing of fluid</li><li>6-12 hr: inflammatory reaction intensifies · PMN infiltration · epidermis coagulated</li><li>12-24 hr: exudate begins to dry</li><li>24-72 hr: exudate forms dry brown crust · inflammatory zone fades · slough &amp; pus formation begins</li><li>4-6 days: superficial slough falls off</li><li>2 weeks (fortnight): deep slough separates · granulation tissue covers surface</li><li>Weeks to months: cicatrix (scar) + deformity</li></ul>', tags: ['1h → months'] },

  'scald-def': { label: 'Scald — Definition', info: '<p><strong>Scald</strong> = tissue damage from application of MOIST HEAT — a liquid (≥ 50°C) or its gaseous form (steam) on the body.</p><p><strong>Common agents:</strong> water (commonest), oil, molten rubber, liquid chemicals, tar, molten metal, steam.</p><p>★ Water at 50°C applied to vulnerable skin can cause a scald — duration matters as much as temperature.</p><p><strong>Causes of death:</strong> Shock · hypovolaemia · electrolyte disturbance · secondary infection · asphyxia (steam inhalation → laryngeal oedema).</p>', tags: ['Moist heat ≥ 50°C'] },
  'scald-features': { label: 'Scald — Distinguishing Features', info: '<ul><li><strong>NO charring, carbonisation, or singeing of hair</strong> — diagnostic against burns</li><li>Shape: <strong>sharply demarcated edge</strong> corresponding to the contact limit of the fluid</li><li><strong>TRICKLE pattern</strong> — when water is splashed/poured, the liquid runs down by gravity → drip-like trails</li><li>If hand immersed in bucket / pot of hot water → <strong>HORIZONTAL fluid level mark</strong> on skin</li><li>Greatest damage at <strong>point of initial contact</strong>; severity decreases downstream as liquid cools while running</li><li>Clothes: WET (not burnt) · may MAGNIFY damage by holding hot liquid against skin longer ("double-edged sword")</li></ul>', tags: ['No singeing · trickle pattern'] },
  'scald-grades': { label: 'Scald — 3 Degrees', info: '<ul><li><strong>1st degree:</strong> Erythema only — analogous to mild sunburn</li><li><strong>2nd degree:</strong> Blister formation with ↑ vascular permeability — partial thickness</li><li><strong>3rd degree:</strong> Drying / desiccation of underlying tissue with NECROSIS — full thickness</li></ul><p>★ <strong>Steam inhalation:</strong> may scald oral cavity, nasal mucosa, epiglottis, and larynx → laryngeal oedema → asphyxia.</p>', tags: ['3 degrees'] },
  'dowry-frame': { label: 'Bride Burns / Dowry Death — Indian Reality', info: '<p>Bride burns / dowry death remain a serious forensic problem in India.</p><p><strong>Textbook estimates:</strong> ~ 30% of homicidal burnings of married women + ~ 21% of suicides by burning occur in in-laws\' home.</p><p><strong>Pattern:</strong></p><ul><li>Daughter-in-law subjected to <strong>kerosene burns</strong> by husband / in-laws over dowry demand</li><li>OR coerced into self-burning suicide</li><li>Burns usually <strong>extensive</strong>, often involve face + chest + abdomen</li><li>Deposition of <strong>kerosene smell + soot</strong> on clothes &amp; skin</li></ul><p><strong>Pattern clues at autopsy:</strong></p><ul><li>Stocking distribution → pouring of liquid (homicidal)</li><li>Sharp demarcation lines → acid attack</li><li>Wide spaced burns → forced submersion</li><li>Defence injuries on forearms → struggle</li><li>Prior MLC entries + psychiatric history + dowry demand evidence</li></ul><p><strong>Protection of Women from Domestic Violence Act 2005</strong> has extended definition of domestic violence to include dowry demands.</p>', tags: ['Indian forensic reality'] },
  'bns-80': { label: 'BNS 80 — Dowry Death (≡ IPC 304-B)', info: '<p><strong>BNS 80</strong> (replacing old IPC 304-B) — Dowry death.</p><p><strong>Definition:</strong> Where the death of a woman is caused by any BURN or BODILY INJURY or occurs otherwise than under normal circumstances <strong>WITHIN 7 YEARS of marriage</strong>, AND it is shown that <strong>SOON BEFORE her death she was subjected to cruelty or harassment</strong> by her husband or any relative of her husband in connection with any DEMAND FOR DOWRY — such death is called "dowry death" and the husband or relative is deemed to have caused her death.</p><p><strong>Punishment:</strong> Imprisonment not less than 7 YEARS, which may extend to LIFE.</p><p><strong>BNSS 196</strong> (≡ CrPC 176) — Magistrate inquest is MANDATORY in dowry death cases.</p>', tags: ['7-yr rule', '7 yrs to life'] },
  'bns-85': { label: 'BNS 85 / 86 — Cruelty (≡ IPC 498-A) ★', info: '<p><strong>BNS 85</strong> (replacing IPC 498-A) — Husband or relative of husband of a woman subjecting her to cruelty.</p><p><strong>BNS 86</strong> provides the definition of "cruelty" for the purpose of BNS 85.</p><p><strong>Cruelty</strong> means:</p><ol><li>Any WILFUL conduct of such a nature as is likely to DRIVE the woman to commit SUICIDE OR to cause grave injury or danger to her life, limb, or health (whether mental or physical), OR</li><li>HARASSMENT of a woman with a view to coercing her or any person related to her to meet any UNLAWFUL DEMAND for property / valuable security (dowry)</li></ol><p><strong>Punishment:</strong> Up to 3 years imprisonment + fine.</p><p>★ <strong>NEET-PG 2016 Q4</strong> — "If a woman is assaulted by her husband, he is charged under IPC 498-A" (now BNS 85).</p>', tags: ['IPC 498-A = BNS 85', 'PYQ 2016 Q4'] },
  'bsa-presump': { label: 'BSA 117 / 118 — Presumptions', info: '<p><strong>BSA 117</strong> (replacing IEA 113-A) — Presumption as to <strong>abetment of suicide by a married woman</strong>:</p><p>When the question is whether the commission of suicide by a woman had been abetted by her husband or any relative, AND it is shown that she committed suicide <strong>within 7 years of marriage</strong> AND her husband or relative subjected her to <strong>cruelty</strong>, the court MAY presume that such suicide had been abetted by her husband / his relative.</p><p><strong>BSA 118</strong> (replacing IEA 113-B) — Presumption as to <strong>dowry death</strong>:</p><p>Where the question is whether a person has committed dowry death AND it is shown that <strong>soon before her death</strong> the woman had been subjected by such person to cruelty or harassment for / in connection with any demand for dowry, the court SHALL presume that such person had caused the dowry death.</p><p>Key distinction: BSA 117 = MAY presume (discretionary); BSA 118 = SHALL presume (mandatory).</p>', tags: ['MAY (117) vs SHALL (118)'] },

  'elec-mech': { label: 'Electrocution — Mechanism', info: '<p><strong>Electrocution</strong> = death by passage of electric current through the body.</p><p><strong>Mechanism of death:</strong></p><ul><li><strong>Low / medium voltage:</strong> Ventricular fibrillation (commonest) · or asphyxia from tetanic respiratory muscle contraction · or respiratory paralysis if current passes through head</li><li><strong>High voltage:</strong> Arcing (flash-over) → ignition of clothes → burns; victim may be thrown off, sustaining secondary fall injuries</li></ul><p><strong>Ohm\'s law:</strong> I = V / R · Heat generated = I² × R × time (Joule effect — basis of contact burn).</p><p><strong>Causes of death (in order of frequency):</strong></p><ol><li>Ventricular fibrillation</li><li>Tetanic asphyxia (chest muscle tetany)</li><li>Respiratory arrest (medullary paralysis)</li><li>Cardiac arrest</li><li>Cerebral anoxia</li><li>Burns</li><li>Secondary injuries from fall</li></ol>', tags: ['VF + tetanic asphyxia'] },
  'ac-vs-dc': { label: 'AC vs DC — Lethality', info: '<p><strong>AC (alternating current) is MORE DANGEROUS than DC.</strong></p><p><strong>AC features:</strong></p><ul><li>50 – 80 mA AC can be fatal in seconds</li><li>Domestic supply: 50 Hz (India) or 60 Hz (US)</li><li>★ Most dangerous frequency range: <strong>40 – 150 Hz</strong></li><li>Causes <strong>TETANIC muscle contraction</strong> → victim cannot let go of conductor → prolonged exposure → fatal</li></ul><p><strong>DC features:</strong></p><ul><li>250 mA DC for the same time is often non-fatal</li><li>Causes a single jolt → victim thrown clear of source</li></ul><p>★ Very low (&lt; 10 Hz) or very high (&gt; 100 Hz) frequency is RELATIVELY SAFE for the body.</p>', tags: ['AC &gt; DC', '40-150 Hz most lethal'] },
  'elec-factors': { label: 'Factors Affecting Electrocution Severity', info: '<ol><li><strong>Nature of current</strong> — AC vs DC</li><li><strong>Voltage</strong> — domestic 220V, industrial higher</li><li><strong>Amperage (current)</strong> — the killer, not voltage per se</li><li><strong>Resistance</strong>:<ul><li>Skin: ~ 5000 Ω dry · drops to near 0 if WET</li><li>Sole/palm thick keratin: high resistance</li><li>Internal tissues: low resistance (semi-fluid cytoplasm)</li></ul></li><li><strong>Earthing</strong> — completion of circuit</li><li><strong>Duration of contact</strong></li><li><strong>Area of contact</strong> — larger area = wider distribution, less localised heat</li><li><strong>Path of current</strong> — chest (heart) &gt; head &gt; limb</li><li><strong>Alertness</strong> of the person</li></ol>', tags: ['9 factors'] },
  'contact-injury': { label: '3 Patterns of Electrical Injury', info: '<ol><li><strong>CONTACT INJURY</strong> — direct contact with live conductor (domestic wire / appliance). Produces ENTRY wound (point of contact) and EXIT wound (where current "earthed" / grounded). Damage varies from small burn to charring.</li><li><strong>SPARK INJURY</strong> — poor or intermittent contact with live conductor. Current jumps a small gap as a spark. Lesion: dry pitted area / nodule + yellowish parchment-like scab (melted keratin) + pale halo.</li><li><strong>FLASH BURNS</strong> — actual arcing of high-voltage current to a person approaching the source, without contact. Seen in line-men working on grid. Heat may ignite clothing.</li></ol>', tags: ['Contact · Spark · Flash'] },
  'joule-burn': { label: 'Joule Burn (Endogenous Burn) ★', info: '<p><strong>Joule burn</strong> (synonym: <strong>ENDOGENOUS BURN</strong>) — caused by HEAT GENERATED INSIDE the body when current passes through tissue.</p><p><strong>Mechanism:</strong> Prolonged skin contact with a live conductor → I²R heat at the point of entry → tissue heating &amp; coagulation. Named after the <strong>Joule effect</strong> (heat = I² × R × time).</p><p><strong>Setting:</strong> Contact injuries with sustained contact.</p><p><strong>Appearance:</strong> Skin acquires a BROWNISH BISCUIT colour at the contact point · with further continued contact → CHARRING of skin.</p><p>★ <strong>Distinct from EXOGENOUS burns</strong> (= flash burns, where heat comes from arcing flame, not internal Joule heating).</p>', tags: ['Endogenous (internal) heat'] },
  'crater-lesion': { label: 'Crater Lesion (Contact Mark)', info: '<p><strong>Crater lesion</strong> = a distinctive contact electric mark, seen in low / medium voltage fatalities.</p><p><strong>Appearance:</strong></p><ul><li>Round or oval, shallow depression</li><li>Bordered by a ridge of pale skin <strong>1 – 3 mm high</strong> around part or whole circumference</li><li>Tough on palpation</li><li><strong>Floor:</strong> pale flattened skin · ridge pattern preserved but flattened/broadened</li><li>Hard / dry skin (palm/sole) → may show CRACKING due to higher resistance</li><li>Floor may exhibit blackening if heat is considerable</li><li>Usually surrounded by <strong>PALE AREOLA</strong> (arteriolar spasm — pathognomic)</li></ul>', tags: ['LV/MV contact mark'] },
  'collapsed-blister': { label: 'Collapsed Blister', info: '<p><strong>Collapsed blister</strong> = electric mark produced when the skin is in FIRM contact with a conductor.</p><p><strong>Mechanism:</strong></p><ol><li>Current passes through skin → resistance → HEAT</li><li>Tissue fluid heats up → STEAM</li><li>Steam splits epidermo-dermal junction → RAISED BLISTER</li><li>When current ceases → blister COOLS &amp; COLLAPSES</li></ol><p><strong>Final appearance at autopsy:</strong> Circular collapsed blister with raised gray/white ring/margin and an <strong>UMBILICATED CENTRE</strong>.</p>', tags: ['Steam → blister → collapses'] },
  'crocodile': { label: 'Crocodile Skin (HV Burn)', info: '<p><strong>Crocodile skin</strong> = pattern of multiple focal burns seen in HIGH-VOLTAGE injury.</p><p><strong>Mechanism:</strong> Sparking occurs over many millimetres or centimetres → produces multiple discrete focal burns / spark lesions distributed over a wider area.</p><p><strong>Appearance:</strong> The cluster of spark lesions resembles crocodile skin.</p><p>Seen in line-men, electricians working on high-voltage equipment.</p>', tags: ['HV cluster of spark burns'] },
  'elec-autopsy': { label: 'Electrocution — Autopsy Pearls', info: '<ul><li><strong>PALE HALO / areola</strong> around the electric mark — due to arteriolar spasm from direct effect of current on vessel-wall musculature. ★ <strong>Pathognomic of electrical damage</strong>. Persists after death.</li><li><strong>METALLIZATION</strong> — metal ions deposited in skin and subcutaneous tissue at the entry point (electrolysis). May be visible to naked eye (e.g., green from copper); detected by chemistry / histology / spectroscopy.</li><li><strong>PATTERNED marks</strong> — conductor shape (e.g., wire grid, appliance shape) imprinted on skin.</li><li><strong>EXIT marks</strong> — grayish-white circular spots, firm, no inflammatory reaction. Wound of exit may show splitting / puncture / laceration. If on feet, sole may be lacerated &amp; shoe torn.</li><li>Internal findings: congested organs, pulmonary oedema, petechial haemorrhages on pericardium / pleura / brain.</li><li><strong>Acroreaction test</strong> (Skalos) — microchemical test for metal ions.</li><li>Medicolegal categories: accidental (commonest) · suicide · homicide · judicial electrocution · custodial torture · child abuse · auto-erotic.</li></ul>', tags: ['Pale halo pathognomic'] },

  'lightning-physics': { label: 'Lightning — Physics', info: '<p><strong>Lightning</strong> = atmospheric electrical discharge.</p><p><strong>Voltage:</strong> 10 – 100 MILLION VOLTS DC</p><p><strong>Current:</strong> up to 200,000 A</p><p><strong>Duration:</strong> &lt; 10⁻⁴ second (extremely brief)</p><p><strong>Mechanism:</strong> Turbulence in clouds → charge separation. Upper cloud surface becomes positive, lower negative. Three varieties:</p><ol><li>Intra-cloud lightning (within same cloud)</li><li>Inter-cloud lightning (between clouds)</li><li><strong>Cloud-to-earth lightning</strong> — fatal type</li></ol><p><strong>Stages of cloud-to-earth strike:</strong></p><ul><li><strong>Leader stroke</strong> — initial descending negative charge from cloud, in steps</li><li><strong>Streamer / pilot</strong> — positive discharge ascending from earth or tall structure when leader is within 30-40 feet</li><li><strong>Return stroke</strong> — when streamer meets leader, massive current wave flows back along the channel — this is the visible flash + audible thunder</li></ul><p>Speed of leader stroke &gt; 100 km/sec.</p>', tags: ['10-100 million V DC'] },
  'strike-types': { label: 'Ways Lightning Strikes Victim', info: '<ol><li><strong>DIRECT stroke</strong> — lightning strikes the victim directly OR an object immediately overhead (umbrella, tree, antenna)</li><li><strong>SPLASH strike</strong> — lightning strikes a nearby object (building, tree, fence) and then JUMPS to a person nearby</li><li><strong>GROUND current ("step potential")</strong> — current spreads radially through earth from strike point; victim standing nearby suffers potential difference between feet</li><li><strong>Indoor strike</strong> — through telephone, plumbing, or electrical wiring (rare)</li></ol><p>★ Hiding under tall isolated tree is a classic risk — tree gets struck, splash strike + ground current both possible.</p>', tags: ['Direct · Splash · Ground · Indoor'] },
  'lightning-effects': { label: 'Lightning — 4 Patterns of Effect (Spencer)', info: '<ol><li><strong>Direct high-voltage current</strong> → ventricular fibrillation, asystole, or instantaneous "cardiac standstill"</li><li><strong>Heat</strong> → singeing of hair / superficial burns / deep burns (depending on proximity to flash); usually minor because exposure is so brief (&lt; 10⁻⁴ sec)</li><li><strong>Air expansion and regression of heated air</strong> → blast-like effect → mechanical injuries (lacerations, contusions, torn clothes/shoes)</li><li><strong>Sledge-hammer blow</strong> — compression of air ahead of the high-speed return stroke → blunt trauma to body</li></ol><p>Rapid resuscitation (CPR) of a struck person has chances of survival — many "deaths" are actually transient cardiac standstill that may recover.</p>', tags: ['Spencer\'s 4 effects'] },
  'lichtenberg': { label: 'Lichtenberg Figures (Filigree Burns) ★', info: '<p><strong>Lichtenberg figures</strong> = pathognomic skin marking of lightning strike.</p><p><strong>Synonyms:</strong> Filigree burns · Arborescent marks · Fern-leaf pattern · Feathering.</p><p><strong>Appearance:</strong> Multiple, superficial, irregular, tortuous markings on the skin resembling branches of a tree — fern-like erythema.</p><p><strong>Common sites:</strong> Shoulder, chest, arm.</p><p><strong>Mechanism (debated):</strong></p><ul><li>Postulated copper deposition along current path</li><li>OR staining of tissues by haemoglobin from lysed RBCs along the path of electric current</li></ul><p>★ <strong>Pathognomic of lightning</strong> — distinguishes lightning from electrocution.</p><p>★ <strong>FADES in 2 – 3 DAYS</strong> — must document immediately (photograph + scale).</p>', tags: ['Pathognomic · fades 2-3 days'] },
  'lightning-marks': { label: 'External Marks of Lightning (Spencer)', info: '<p>Spencer (1932) classified external marks into 3 classes:</p><ol><li><strong>SURFACE BURNS</strong><ul><li>Tissue burns related to METALLIC OBJECTS worn or carried (collar studs, hairpins, belts, jewellery — focal heating)</li><li>Secondary burns from ignition of clothing</li><li>May show blisters, fissures, or charring of deeper tissue depending on intensity</li></ul></li><li><strong>LINEAR BURNS</strong><ul><li>1 – 12 inches long, 1/8 – 1 inch wide</li><li>Found on body areas where skin offers less resistance — <strong>MOIST CREASES &amp; FOLDS</strong> of skin (axilla, groin, neck folds)</li></ul></li><li><strong>ARBORESCENT / FILIGREE BURNS</strong> (Lichtenberg figures) — see dedicated node</li></ol>', tags: ['Surface · Linear · Filigree'] },
  'lightning-autopsy': { label: 'Lightning — Autopsy &amp; Scene', info: '<p><strong>Scene findings:</strong></p><ul><li>Recent storm / lightning history</li><li>Damage to nearby trees (splitting, removal of bark)</li><li>Charred arc marks on walls of nearby buildings</li><li>"Fern pattern" in grass — surface discharge mark</li></ul><p><strong>Clothing:</strong> May show singeing, melting, complete burning. May be TORN OFF the body with tear-end scorching. <strong>Boots / shoes / waist belts may BURST OPEN.</strong></p><p><strong>Body:</strong></p><ul><li>Rigor mortis: appears EARLY + passes off EARLY</li><li>Skin may show clusters of <strong>punctate burns from electrical arcing</strong> · or singeing of hair</li><li><strong>RUPTURE OF EAR DRUMS</strong> — from explosive effect / muscular contraction</li><li>Petechial haemorrhages in brain · chromatolysis &amp; fragmentation of axons</li><li>Congestion of internal organs · pulmonary oedema</li><li><strong>Metallic objects MAGNETISED / fused</strong> (buttons, hairpins, pendant, key, key-chain) — from intense magnetic field of lightning current</li></ul>', tags: ['Tympanic rupture · magnetised metal'] },
  'elec-vs-lightning': { label: 'Electrocution vs Lightning — Quick Differential', info: '<table><tr><th>Feature</th><th>Electrocution</th><th>Lightning</th></tr><tr><td>Voltage</td><td>up to several kV</td><td>10 – 100 million V</td></tr><tr><td>Current type</td><td>AC (domestic 50 Hz)</td><td>Very high DC</td></tr><tr><td>Duration</td><td>seconds to minutes</td><td>&lt; 10⁻⁴ sec</td></tr><tr><td>Entry/exit wound</td><td>Usually distinct</td><td>Usually absent (energy dissipates over skin surface)</td></tr><tr><td>Pathognomic mark</td><td>Pale halo + Joule burn + crater</td><td><strong>Lichtenberg / filigree</strong> ★</td></tr><tr><td>Tympanic rupture</td><td>Rare</td><td>Common</td></tr><tr><td>Metal magnetisation</td><td>Absent</td><td>Present</td></tr><tr><td>Heat injury</td><td>Significant (long contact)</td><td>Often minimal (brief)</td></tr><tr><td>Boots/belts burst</td><td>No</td><td>Yes</td></tr></table>', tags: ['Quick comparison'] }
};

function nodeList(ids) { return ids.map(id => ({ nodeId: id, ...NODES[id] })); }

const MCQS = {
  'TI-01': [
    { stem: 'The 4-quadrant classification of thermal injuries is best described by:', options: ['Heat × Speed','Cold × Heat × General × Local','Skin × Bone × Muscle','Acid × Alkali × Hot × Cold'], answerIdx: 1, explain: 'Thermal injuries divide into 4 quadrants: Cold/General (hypothermia), Cold/Local (frostbite/trench foot/pernio), Heat/General (heat stroke/exhaustion/cramps), Heat/Local (burns/scalds/electrocution/lightning).', tag: '[PG-Inspired]' },
    { stem: 'BNS 80 (formerly IPC 304-B) deals with:', options: ['Acid attack','Death by burns of a married woman within 7 yrs','Hurt by dangerous weapon','Mob lynching'], answerIdx: 1, explain: 'BNS 80 = Dowry death — death of a woman by any burn or injury or unnatural circumstances within 7 yrs of marriage + prior cruelty for dowry → 7 yrs to life imprisonment.', tag: '[PG-Inspired]' }
  ],
  'TI-02': [
    { stem: 'Hypothermia is defined by core body temperature falling below:', options: ['37°C','36°C','35°C','32°C'], answerIdx: 2, explain: 'Hypothermia = core temp &lt; 35°C (95°F). Mild 32-35°C, moderate 28-&lt;32°C, severe &lt;28°C (VF risk).', tag: '[PG-Inspired]' },
    { stem: 'Pinkish post-mortem lividity is characteristic of which of the following deaths?', options: ['Hanging','Strangulation','Hypothermia','Drowning'], answerIdx: 2, explain: 'Pinkish lividity (persistent oxy-Hb) is seen in hypothermia. Differential includes CO poisoning, cyanide, refrigerated body.', tag: '[PG-Inspired]' },
    { stem: 'Wischnewski ulcers are seen in:', options: ['Burns','Drowning','Hypothermia','Heat stroke'], answerIdx: 2, explain: 'Wischnewski ulcers = small gastric mucosal haemorrhages/ulcerations — pathognomic of hypothermic death.', tag: '[PG-Inspired]' },
    { stem: 'In severe hypothermia (&lt; 28°C), the commonest cause of death is:', options: ['Respiratory failure','Renal failure','Ventricular fibrillation','Hypoglycaemia'], answerIdx: 2, explain: 'VF is the main mechanism — cold myocardium becomes electrically unstable. "Not dead until warm and dead" — rewarm to ≥ 35°C before declaring.', tag: '[PG-Inspired]' }
  ],
  'TI-03': [
    { stem: 'A 24-year-old hiker returns from Ladakh with blackened toes. The most likely diagnosis is:', options: ['Pernio (chilblains)','Trench foot','Frostbite (3rd/4th degree)','Heat stroke'], answerIdx: 2, explain: 'Dry cold &lt; 0°C at high altitude → frostbite. Blackening = 3rd/4th degree (skin necrosis ± muscle/bone). Rx: rapid rewarming 40-42°C + delayed amputation.', tag: '[QBank-Inspired]' },
    { stem: 'The condition seen in trench foot is best described as:', options: ['Frostbite of feet','Wet cold exposure 5-6°C leading to obliterating angiitis','Vasculitic reaction to mild cold','Heat-induced sweating'], answerIdx: 1, explain: 'Trench foot (immersion foot) = WET cold at 5-6°C — wetness penetrates further than dry cold. Obliterating angiitis → gangrene.', tag: '[PG-Inspired]' },
    { stem: 'Pernio (chilblains) is best characterised as:', options: ['Tissue freezing','Wet cold exposure','Vasculitic disorder to cold','Heat injury'], answerIdx: 2, explain: 'Pernio = vasculitic response to cold (above freezing). Raised erythematous lesions on lower legs + pruritus + burning. Rx: warming, nifedipine, topical steroids.', tag: '[PG-Inspired]' },
    { stem: 'In treating frostbite, which is WRONG?', options: ['Rapid rewarming in 40-42°C water','Analgesia for rewarming pain','Vigorous rubbing of affected area','Delayed amputation after line of demarcation'], answerIdx: 2, explain: 'NEVER rub frostbitten tissue — mechanical damage to frozen tissue. Other principles correct.', tag: '[PG-Inspired]' }
  ],
  'TI-04': [
    { stem: 'A daily wage labourer collapsed in the farm on a hot summer day, body temp 106°F. Which symptom is LEAST likely?', options: ['Hot skin','Sweating','Hypotension','Disorientation'], answerIdx: 1, explain: 'Heat stroke = HOT and DRY skin (sweating ABSENT — thermoregulation failed). NEET-PG 2021 Q9 verbatim.', tag: '[NEET-PG 2021]' },
    { stem: 'A worker became unconscious in a steel construction unit, temp 106°F, skin turgid &amp; dry. Which would NOT be seen?', options: ['Hot dry skin','Raised core temperature','Sweating','CNS dysfunction'], answerIdx: 2, explain: 'Heat stroke — SWEATING IS ABSENT (the cardinal distinguishing feature from heat exhaustion). NEET-PG 2023 Q1 verbatim.', tag: '[NEET-PG 2023]' },
    { stem: 'Heat stroke is defined by core body temperature exceeding:', options: ['38°C','40°C','41°C (106°F)','43°C'], answerIdx: 2, explain: 'Heat stroke (sunstroke, heat hyperpyrexia) = core &gt; 41°C / 106°F + hot DRY skin + CNS dysfunction.', tag: '[PG-Inspired]' },
    { stem: 'Stoker\'s cramps / boiler-room cramps refer to:', options: ['Heat syncope','Heat cramps','Heat stroke','Malignant hyperthermia'], answerIdx: 1, explain: 'Heat cramps (synonyms: miner\'s, stoker\'s, boiler-room cramps) — hyponatraemia from sweat loss → painful muscle spasms. Rx: ORS / IV saline.', tag: '[UNIV]' },
    { stem: 'A key autopsy finding in heat stroke is:', options: ['Delayed rigor mortis','Post-mortem caloricity + early rigor + rapid putrefaction','Pinkish lividity','Wischnewski ulcers'], answerIdx: 1, explain: 'Heat stroke autopsy: post-mortem caloricity (body warm), rigor EARLY (sets in &amp; passes off early), RAPID putrefaction. Pink lividity → hypothermia. Wischnewski → hypothermia.', tag: '[PG-Inspired]' }
  ],
  'TI-05': [
    { stem: 'Dupuytren classified burns into how many degrees?', options: ['3','4','6','8'], answerIdx: 2, explain: 'Dupuytren = 6 degrees (precise but exhaustive). Wilson = 3 degrees (merged in pairs). Modern = 2 (superficial/deep).', tag: '[UNIV]' },
    { stem: '"Less painful" burns at autopsy suggest:', options: ['1st degree','Superficial dermo-epidermal','Deep burns involving subQ/muscle','Scald'], answerIdx: 2, explain: 'Deep burns (Dupuytren 5°/6° or Wilson 3°) are less painful because NERVES are destroyed. Superficial burns are painful (intact nociceptors).', tag: '[PG-Inspired]' },
    { stem: '3 zones of burn injury described by Jackson are:', options: ['Erythema · vesication · charring','Coagulation · Stasis · Hyperaemia','Epidermal · Dermal · Hypodermal','Acute · Sub-acute · Chronic'], answerIdx: 1, explain: '3 zones: central coagulation (necrotic) → stasis (may survive or progress) → hyperaemia (healing). Zone of stasis is the therapeutic target.', tag: '[PG-Inspired]' },
    { stem: 'Burn depth depends on all EXCEPT:', options: ['Temperature applied','Duration of contact','Skin thickness','Patient sex'], answerIdx: 3, explain: 'Burn depth = ƒ (temp · duration · skin thickness · blood flow). Patient sex is not a determinant.', tag: '[UNIV]' }
  ],
  'TI-06': [
    { stem: 'According to Wallace Rule of 9, the percentage of TBSA contributed by each lower limb in an adult is:', options: ['9%','13.5%','18%','22.5%'], answerIdx: 2, explain: 'Each lower limb = 18% (front 9% + back 9%). Total: head 9 + ant trunk 18 + post trunk 18 + each upper limb 9 × 2 + each lower limb 18 × 2 + genitals 1 = 100%.', tag: '[PG-Inspired]' },
    { stem: 'In an infant (&lt; 1 yr), the head accounts for approximately what % of TBSA (Lund-Browder)?', options: ['7%','9%','13%','19%'], answerIdx: 3, explain: 'Lund-Browder: infant head = 19% (vs adult 7%). Conversely, each lower limb in infant = 14% (vs adult 20%). Hence Wallace overestimates in children.', tag: '[PG-Inspired]' },
    { stem: 'The patient\'s palm (with fingers) approximately equals:', options: ['0.5% TBSA','1% TBSA','2% TBSA','5% TBSA'], answerIdx: 1, explain: 'Patient\'s palm with fingers ≈ 1% TBSA — useful for scattered / small burns across all ages.', tag: '[PG-Inspired]' },
    { stem: 'Parkland formula for fluid resuscitation in major burns is:', options: ['2 mL/kg × %TBSA in 24 h','4 mL/kg × %TBSA in 24 h','4 mL/kg × %TBSA in first 8 h','6 mL/kg × %TBSA in 24 h'], answerIdx: 1, explain: 'Parkland: 4 mL Ringer\'s lactate × kg × %TBSA in first 24 h (half in first 8 h from time of burn, half over next 16 h).', tag: '[PG-Inspired]' }
  ],
  'TI-07': [
    { stem: 'Pugilistic attitude is characteristically seen in:', options: ['Burns','Drowning','Electrocution','Hanging'], answerIdx: 0, explain: 'Pugilistic (boxer\'s) attitude = burns — heat coagulates muscle proteins → flexion contraction. NEET-PG 2016 Q28 verbatim.', tag: '[NEET-PG 2016]' },
    { stem: 'Heat Rupture is characterised by:', options: ['Regular margins','Irregular margins','Ruptured blood vessels','Clotted blood'], answerIdx: 1, explain: 'Heat rupture = IRREGULAR margins (skin splits from heat contraction). Differs from true incised/lacerated wound: no bleeding, no clot, intact vessels bridge floor. NEET-PG 2016 Q31 verbatim.', tag: '[NEET-PG 2016]' },
    { stem: 'Heat hematoma is typically located in the:', options: ['Subdural space','Subarachnoid space','Extradural space, parieto-temporal','Intracerebral white matter'], answerIdx: 2, explain: 'Heat hematoma = EXTRADURAL, parieto-temporal region. Soft, spongy, honeycomb, tawny/chocolate brown. CO in clot confirms it is heat artefact.', tag: '[PG-Inspired]' },
    { stem: 'Bursting type of heat fracture of skull is due to:', options: ['Direct mechanical trauma','↑ intracranial steam pressure separating sutures','Drying &amp; contraction of outer table','Heat-induced osteolysis'], answerIdx: 1, explain: 'Bursting heat fracture = steam pressure inside skull → separates sutures → gaping defect with widely separated margins. Surface fracture = outer table from drying. Curved = long bones.', tag: '[PG-Inspired]' },
    { stem: 'Which of the following does NOT distinguish antemortem from postmortem burns?', options: ['Line of redness','Carboxyhaemoglobin in blood','Pugilistic attitude','Soot below vocal cords'], answerIdx: 2, explain: 'Pugilistic attitude occurs in BOTH AM and PM burns — does not discriminate. AM markers: line of redness, CO &gt; 5%, soot below cords, protein-rich blister.', tag: '[PG-Inspired]' }
  ],
  'TI-08': [
    { stem: 'The MOST reliable evidence that burns were sustained antemortem is:', options: ['Pugilistic attitude','Heat hematoma','Soot in terminal bronchioles + CO-Hb &gt; 5%','Charring of bones'], answerIdx: 2, explain: 'Soot in lower airways + ↑ CO-Hb prove respiratory activity during fire = antemortem. Other findings (pugilistic, heat hematoma, charring) occur AM or PM.', tag: '[PG-Inspired]' },
    { stem: 'The earliest enzyme to appear in vital reaction of skin to burn injury is:', options: ['Alkaline phosphatase','Histamine','Cathepsin','Esterase'], answerIdx: 2, explain: 'Vital reaction timeline: Cathepsin (immediate) → Serotonin 10 min → Histamine 20 min → Esterase/ATPase 1 hr → Acid phosphatase 3 hr → Alkaline phosphatase 4 hr.', tag: '[PG-Inspired]' },
    { stem: 'Carboxyhaemoglobin saturation that proves antemortem fire exposure is &gt;:', options: ['1%','5%','25%','50%'], answerIdx: 1, explain: 'CO-Hb &gt; 5% saturation indicates breathing of fire gases = antemortem. &gt; 50% is generally fatal CO toxicity.', tag: '[PG-Inspired]' },
    { stem: 'Antemortem blister contains:', options: ['Air + clear watery fluid','Serous fluid rich in protein + chloride','Pus','Blood clot'], answerIdx: 1, explain: 'AM blister = protein + chloride-rich serous fluid + red inflamed base with raised papillae. PM blister (rare) = air + clear fluid + dry pale hard base.', tag: '[PG-Inspired]' },
    { stem: 'A delayed cause of death (&gt; 1 week) in extensive burns is:', options: ['Neurogenic shock','Hypovolaemic shock','Septicaemic shock + renal failure','CO poisoning'], answerIdx: 2, explain: 'Immediate: shock, smoke/CO inhalation, laryngeal oedema. Delayed: sepsis, toxaemia, renal failure (myoglobinuria), ARDS, Curling\'s ulcer.', tag: '[PG-Inspired]' }
  ],
  'TI-09': [
    { stem: 'If a woman is assaulted by her husband, he is charged under:', options: ['Sec 498-A IPC (now BNS 85)','Sec 304-A IPC','Sec 304-B IPC','Sec 504 IPC'], answerIdx: 0, explain: 'IPC 498-A (now BNS 85/86) — cruelty by husband or relative — up to 3 yrs + fine. NEET-PG 2016 Q4 verbatim.', tag: '[NEET-PG 2016]' },
    { stem: 'A woman dies of burns within 7 years of her marriage and prior cruelty for dowry is shown. The applicable section is:', options: ['BNS 80 (≡ IPC 304-B)','BNS 85 (≡ IPC 498-A)','BNS 106 (≡ IPC 304-A)','BNS 124 (acid attack)'], answerIdx: 0, explain: 'BNS 80 = dowry death — death by burn/injury within 7 yrs + prior cruelty for dowry → 7 yrs to life.', tag: '[PG-Inspired]' },
    { stem: 'Difference between scald and burn includes ALL EXCEPT:', options: ['Scald = no charring','Scald = no singeing of hair','Scald = no clothing involvement','Scald shows trickle pattern'], answerIdx: 2, explain: 'Clothing IS involved in scald (becomes wet) — sometimes prolongs contact. No charring + no singeing + trickle pattern are scald hallmarks.', tag: '[PG-Inspired]' },
    { stem: 'BSA 118 (≡ IEA 113-B) provides for presumption of:', options: ['Abetment of suicide','Dowry death','Murder','Sodomy'], answerIdx: 1, explain: 'BSA 118 (was IEA 113-B) — court SHALL presume dowry death if cruelty soon before death is shown. BSA 117 (113-A) = abetment of suicide presumption.', tag: '[PG-Inspired]' }
  ],
  'TI-10': [
    { stem: 'Which is MORE dangerous?', options: ['Alternating current (AC)','Direct current (DC)','Both equally dangerous','Depends only on voltage'], answerIdx: 0, explain: 'AC is more dangerous than DC. 50-80 mA AC fatal in seconds; 250 mA DC for same time often non-fatal. AC causes tetanic contraction → cannot let go.', tag: '[PG-Inspired]' },
    { stem: 'Joule burn is also known as:', options: ['Exogenous burn','Endogenous burn','Flash burn','Spark burn'], answerIdx: 1, explain: 'Joule burn = ENDOGENOUS burn — heat generated INSIDE the body from I²R at contact point. Exogenous = flash burns from external arcing.', tag: '[PG-Inspired]' },
    { stem: 'The pathognomic feature of electrocution mark is:', options: ['Charring','Pale halo / areola around mark','Blistering','Wet skin'], answerIdx: 1, explain: 'Pale halo / areola = arteriolar spasm from current effect on vessel-wall musculature. Pathognomic of electric injury, persists after death.', tag: '[PG-Inspired]' },
    { stem: 'The most dangerous frequency range of AC is:', options: ['1-10 Hz','40-150 Hz','200-500 Hz','&gt; 1000 Hz'], answerIdx: 1, explain: '40-150 Hz is most dangerous (encompasses domestic 50 Hz). Very low (&lt; 10 Hz) or very high (&gt; 100 Hz, esp &gt; 1000 Hz) frequency is relatively safe.', tag: '[UNIV]' },
    { stem: 'Crocodile skin pattern of burns is seen with:', options: ['Domestic low-voltage AC','High-voltage current with sparking','DC battery contact','Cigarette burns'], answerIdx: 1, explain: 'Crocodile skin = cluster of focal spark lesions over many cm — seen in HIGH VOLTAGE current with sparking over a wide area.', tag: '[PG-Inspired]' }
  ],
  'TI-11': [
    { stem: 'A doctor notices a finding on the cadaver. True about it is:', options: ['Due to sulphaemoglobin pigment','Change seen at 24 hours','It is non-bacterial','Associated with lightning case'], answerIdx: 3, explain: 'Lightning-associated finding = Lichtenberg figures / filigree burns — fern-leaf pattern, pathognomic, fades in 2-3 days. NEET-PG 2021 Q3.', tag: '[NEET-PG 2021]' },
    { stem: 'Lichtenberg figures / filigree burns are characteristic of:', options: ['Electrocution by domestic AC','Lightning strike','Burns','Hypothermia'], answerIdx: 1, explain: 'Lichtenberg / arborescent / fern-leaf pattern is pathognomic of lightning. Fades in 2-3 days — document immediately with photographs.', tag: '[PG-Inspired]' },
    { stem: 'Lightning typically reaches voltages of:', options: ['220 V','11 kV','1 MV','10 – 100 million V'], answerIdx: 3, explain: 'Lightning = 10-100 million volts DC, currents up to 200,000 A, duration &lt; 10⁻⁴ sec.', tag: '[UNIV]' },
    { stem: 'Which finding is characteristic of lightning rather than electrocution?', options: ['Pale halo','Tympanic membrane rupture + magnetised metal objects','Crater lesion','Joule burn'], answerIdx: 1, explain: 'Tympanic rupture (from explosive air expansion) + magnetised metal objects (from intense magnetic field) are LIGHTNING-specific. Pale halo, crater, Joule burn = electrocution.', tag: '[PG-Inspired]' },
    { stem: 'Lichtenberg figures FADE in:', options: ['Hours','2-3 days','1 week','1 month'], answerIdx: 1, explain: 'Filigree / Lichtenberg figures fade in 2-3 days — must be photographed immediately on arrival as they may not be present at later autopsy.', tag: '[PG-Inspired]' }
  ]
};

const DIFF_TABLES = [
  {
    id: 'DT-1', title: 'Antemortem vs Postmortem Burns', shortTitle: 'AM vs PM Burns',
    intro: 'The central forensic question in any fire-death case — were the burns sustained before or after death? Use the table below as a checklist at every burn autopsy.',
    columns: ['Feature','Antemortem Burns','Postmortem Burns'],
    rows: [
      ['<strong>Line of redness</strong>','PRESENT around burn (hyperaemia / vital reaction)','ABSENT'],
      ['<strong>Blister content</strong>','Serous fluid <strong>rich in PROTEIN + CHLORIDES</strong>; base RED, inflamed, raised papillae','Usually absent; if present: AIR + clear watery fluid; base dry, pale, hard, horny'],
      ['Vital reaction (inflammation)','PRESENT (PMN infiltrate, ↑ vascular permeability)','ABSENT'],
      ['Reparative process','PRESENT (granulation, epithelialisation if survival)','ABSENT'],
      ['Infection / pus','May be present','ABSENT'],
      ['<strong>Soot in respiratory passages</strong>','PRESENT below vocal cords ★ (breathed during fire)','ABSENT'],
      ['<strong>Carboxyhaemoglobin in blood</strong>','&gt; 5% saturation ★ (often much higher)','Absent or trace'],
      ['Cyanide in blood','Present if burnt plastic / lacquer','Absent or trace'],
      ['<strong>Enzyme histochemistry</strong>','Cathepsin (immediate) · Serotonin 10m · Histamine 20m · Esterase 1h · ATPase 1h · Acid phosphatase 3h · Alkaline phosphatase 4h','ABSENT'],
      ['<strong>Heat artefacts (pugilistic, splits, fractures, heat hematoma)</strong>','PRESENT — but do NOT discriminate','PRESENT — but do NOT discriminate']
    ],
    parentDiagrams: ['TI-07','TI-08'],
    mcqs: [
      { stem: 'The MOST useful sign of antemortem burns is:', options: ['Pugilistic attitude','Heat hematoma','Soot below vocal cords + ↑ CO-Hb','Charring'], answerIdx: 2, explain: 'Soot in lower airways + CO-Hb &gt; 5% prove respiratory activity during fire. Heat artefacts (pugilistic, heat hematoma) occur in both AM and PM.', tag: '[PG-Inspired]' },
      { stem: 'A blister with serous fluid rich in protein and chloride + red inflamed base indicates:', options: ['Antemortem burn','Postmortem burn','Heat artefact','Cannot be determined'], answerIdx: 0, explain: 'Protein + chloride-rich fluid + red papilliferous base = vital reaction = antemortem.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-2', title: 'Burns vs Scalds', shortTitle: 'Burns vs Scalds',
    intro: 'Burns from DRY heat (flame, contact) vs scalds from MOIST heat (liquid, steam) — exam-favourite comparison.',
    columns: ['Feature','Burns (Dry Heat)','Scalds (Moist Heat)'],
    rows: [
      ['Cause','Flame, hot solid, friction, chemical, electric, radiation','Hot liquid (≥ 50°C) or steam'],
      ['Clothes','May show burning, singeing, melted fibers','Not burnt — wet; may magnify damage by holding hot liquid'],
      ['Site of damage','At and ABOVE site of contact (flame rises)','At and BELOW site of contact (liquid drips down)'],
      ['Skin appearance','Reddening → superficial burns → CHARRING','Erythema, blisters, sodden / bleached'],
      ['<strong>Splashing pattern</strong>','Absent','PRESENT — trickle pattern, horizontal level if immersion'],
      ['<strong>Charring of skin</strong>','PRESENT','ABSENT'],
      ['<strong>Singeing of hair</strong>','PRESENT','ABSENT'],
      ['Scar','Thick + contracted (especially deep burns)','Thinner, less contracted'],
      ['Pugilistic attitude','May occur in extensive burns','Does NOT occur (no protein denaturation at lower temp)']
    ],
    parentDiagrams: ['TI-09'],
    mcqs: [
      { stem: 'Singeing of hair occurs in:', options: ['Burns only','Scalds only','Both','Neither'], answerIdx: 0, explain: 'Singeing of hair requires high dry heat — occurs in burns, NOT in scalds (moist heat from steam does not melt hair keratin).', tag: '[PG-Inspired]' },
      { stem: 'Trickle pattern is characteristic of:', options: ['Burns','Scalds','Electrocution','Frostbite'], answerIdx: 1, explain: 'Trickle pattern = scald — splashed water flows by gravity, leaving drip-like trails. Pathognomic morphology of scald.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-3', title: 'Heat Stroke vs Heat Exhaustion vs Heat Cramps', shortTitle: 'Heat Stroke vs Exhaustion',
    intro: 'Three distinct heat-related syndromes on the same spectrum — heat stroke is the medical emergency.',
    columns: ['Feature','Heat Cramps','Heat Exhaustion','Heat Stroke ★'],
    rows: [
      ['Core temp','Normal','37 – 40°C','&gt; 41°C (106°F)'],
      ['<strong>Skin / Sweating</strong>','Normal, sweaty','Cool, clammy, SWEATING PRESERVED','HOT, DRY ★ (sweating ABSENT)'],
      ['Mental status','Alert','Alert / mild confusion','ALTERED (delirium, coma, convulsions)'],
      ['Mechanism','Hyponatraemia from sweat loss','Volume + electrolyte depletion','FAILURE of thermoregulation (hypothalamic paralysis)'],
      ['Pulse','Normal','Tachycardia','Tachycardia → bradycardia (terminal)'],
      ['BP','Normal','Hypotension','Hypotension'],
      ['Treatment','ORS / IV saline','Cool environment, IV fluids','MEDICAL EMERGENCY — rapid cooling (ice packs to groin/axilla), goal 39°C in 30 min'],
      ['Autopsy','Survivable','Survivable','Post-mortem caloricity, EARLY rigor, RAPID putrefaction, multi-organ damage']
    ],
    parentDiagrams: ['TI-04'],
    mcqs: [
      { stem: 'A 28-y/o worker at construction site, body temp 106°F, hot dry skin, disoriented. Diagnosis:', options: ['Heat exhaustion','Heat stroke','Heat cramps','Heat syncope'], answerIdx: 1, explain: 'Core &gt; 106°F + HOT DRY skin + altered mental state = HEAT STROKE. Sweating absent because thermoregulation has failed.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-4', title: 'Electrocution vs Lightning', shortTitle: 'Electric vs Lightning',
    intro: 'Both are current-mediated injuries, but voltage, duration, marks, and complications differ dramatically.',
    columns: ['Feature','Electrocution (domestic / industrial)','Lightning'],
    rows: [
      ['<strong>Voltage</strong>','Up to several kV','<strong>10 – 100 MILLION V</strong>'],
      ['<strong>Current type</strong>','Usually AC (50 Hz)','Very high DC'],
      ['Duration','Seconds to minutes (cannot let go)','&lt; 10⁻⁴ second (instantaneous)'],
      ['Entry / exit wounds','Usually DISTINCT (esp. low voltage)','Usually ABSENT (energy dissipates over skin)'],
      ['<strong>Pathognomic mark</strong>','Pale halo / Joule burn / crater / collapsed blister','<strong>LICHTENBERG / filigree figures</strong> ★'],
      ['Tympanic membrane','Usually intact','RUPTURE common (explosive air expansion)'],
      ['Metal objects','No change','MAGNETISED / fused (button, hairpin, key)'],
      ['Clothing','Singed at contact only','May be torn off; boots / belts BURST OPEN'],
      ['Heat / charring','Significant (long contact)','Often minimal (brief)'],
      ['Mechanism of death','VF (LV) · arcing burns (HV)','Cardiac standstill · CNS damage · blast trauma'],
      ['Resuscitation','Variable success','Often RESPONDS to early CPR — "apparent death"']
    ],
    parentDiagrams: ['TI-10','TI-11'],
    mcqs: [
      { stem: 'Magnetisation of metal objects on the body is a feature of:', options: ['Electrocution','Lightning','Burns','Both equally'], answerIdx: 1, explain: 'Lightning generates intense magnetic field → magnetises / fuses metal worn (buttons, hairpins, keys). Not seen in electrocution.', tag: '[PG-Inspired]' },
      { stem: 'Lichtenberg figures fade in:', options: ['Hours','2 – 3 days','1 week','Never (permanent)'], answerIdx: 1, explain: 'Filigree / Lichtenberg figures = transient (2-3 days). Must be photographed at first opportunity.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-5', title: 'Heat Hematoma vs True Extradural Hematoma', shortTitle: 'Heat EDH vs True EDH',
    intro: 'Critical distinction at autopsy — heat hematoma is a postmortem artefact in fire victims and can mimic fatal traumatic EDH.',
    columns: ['Feature','Heat Hematoma (heat artefact)','True Extradural Hematoma (mechanical)'],
    rows: [
      ['Cause','Intense heat → venous sinus / diploic emissary extravasation','Mechanical trauma + skull fracture (middle meningeal a.)'],
      ['Location','Extradural space, often parieto-temporal','Extradural space, often temporal (middle meningeal a.)'],
      ['<strong>Underlying skull</strong>','EXTERIOR CHARRED, heat fractures may be present, no impact #','Linear or depressed fracture from impact'],
      ['Consistency','SOFT, SPONGY, FRIABLE, HONEYCOMB (gas bubbles)','Firm, dark coagulated blood clot'],
      ['Colour','Tawny / chocolate brown (cherry-red if CO+)','Dark red / black'],
      ['<strong>Carbon monoxide in clot</strong>','PRESENT (key diagnostic — proves heat artefact)','Absent'],
      ['Mechanism of death','NOT cause of death (postmortem artefact)','Can be cause of death (mass effect, herniation)'],
      ['Other features in body','Burns / charring of skin · soot inhalation','Skull fracture · scalp contusion / laceration']
    ],
    parentDiagrams: ['TI-07'],
    mcqs: [
      { stem: 'A spongy, honeycomb, chocolate-brown extradural clot in a charred body most likely represents:', options: ['Traumatic EDH','Heat hematoma','Subdural haemorrhage','Subarachnoid haemorrhage'], answerIdx: 1, explain: 'Honeycomb appearance + chocolate-brown + charred skull above = HEAT hematoma (postmortem artefact). CO in clot confirms diagnosis.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-6', title: 'Dupuytren vs Wilson vs Modern Burn Classification', shortTitle: 'Burn Classifications',
    intro: '3 classification systems for burn depth — exam pearl is the merging logic between them.',
    columns: ['System','Degrees','Mapping / Features','Use'],
    rows: [
      ['<strong>Dupuytren</strong>','6 degrees','1°-2° superficial epidermal · 3°-4° dermo-epidermal · 5°-6° deep (subQ → muscle/bone)','Precise but exhaustive; limited clinical use'],
      ['<strong>Wilson</strong>','3 degrees','1° (= Dupuytren 1+2) epidermal · 2° (= 3+4) dermo-epidermal · 3° (= 5+6) deep','Practical clinical grading'],
      ['<strong>Modern</strong>','2 grades','Superficial (does NOT extend full skin) · Deep (extends beyond true skin)','Surgical practice — graft/dressing decisions'],
      ['Painful?','—','Painful: 1°-4° (Dupuytren) / 1°-2° (Wilson) · LESS PAINFUL: 5°-6° (Dupuytren) / 3° (Wilson) deep burns (nerves destroyed)','—'],
      ['Heals with scar?','—','No scar: superficial · Permanent scar: dermo-epidermal · Contracture + disfigurement: deep','—']
    ],
    parentDiagrams: ['TI-05'],
    mcqs: [
      { stem: 'Deep burns are LESS painful because:', options: ['Heat-induced anaesthesia','Destruction of nerve endings','Vasoconstriction','Endorphin release'], answerIdx: 1, explain: 'Deep burns destroy nerve endings → loss of nociception → LESS painful (paradoxical to severity). Superficial burns are painful (intact nociceptors).', tag: '[PG-Inspired]' }
    ]
  }
];

const SUBJ = [
  {
    id: 'SAQ-14.1', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'A 24-year-old man went hiking in Ladakh. On returning to base camp, he found his toes were blackened. Explain the condition, its treatment and prevention.',
    answer: `<h4>Diagnosis: FROSTBITE</h4>
<p>The clinical picture — high-altitude cold exposure (Ladakh) + blackened toes — is diagnostic of <strong>FROSTBITE</strong>, likely 3rd or 4th degree (skin necrosis ± involvement of muscle / bone).</p>
<h4>Definition</h4>
<p>Frostbite = tissue injury from exposure to severe environmental cold (dry cold) or direct contact with object below 0°C, due to <strong>freezing + vasoconstriction</strong>.</p>
<h4>Pathological Grading (4 degrees)</h4>
<table><tr><th>Degree</th><th>Pathology</th></tr>
<tr><td>1st</td><td>Redness + oedema of skin only (reversible)</td></tr>
<tr><td>2nd</td><td>Blister formation (epidermis affected, dermis intact)</td></tr>
<tr><td>3rd</td><td>Skin + subcutaneous tissue NECROSIS (full thickness)</td></tr>
<tr><td>4th</td><td>Total tissue loss including MUSCLE and BONE</td></tr></table>
<p>★ Blackening of toes = 3rd or 4th degree.</p>
<h4>Treatment</h4>
<ol>
<li><strong>Rapid rewarming</strong> — immerse affected part in water bath at 40 – 42°C for 30 – 45 minutes until skin becomes pliable and erythematous</li>
<li><strong>Analgesia</strong> — rewarming is painful (NSAIDs / opioids as needed)</li>
<li><strong>Tetanus prophylaxis</strong></li>
<li><strong>Antibiotics</strong> if signs of infection</li>
<li><strong>Wound care</strong> — gentle débridement, sterile dressings, elevation</li>
<li><strong>NO rubbing</strong> ★ of frostbitten tissue (causes mechanical damage to frozen cells)</li>
<li><strong>NO direct flame heat</strong> (uneven thawing, deeper damage)</li>
<li><strong>DELAYED AMPUTATION</strong> ★ — wait weeks for "line of demarcation" (clear boundary between viable and necrotic tissue) before surgical amputation. Aphorism: "frostbite in January, amputation in July."</li>
</ol>
<h4>Prevention</h4>
<ol>
<li>Layered insulating clothing — especially extremities (gloves, socks, boots) and head</li>
<li>Keep extremities <strong>DRY</strong> — change socks/gloves frequently in wet conditions</li>
<li>Avoid <strong>alcohol</strong> (false sense of warmth + peripheral vasodilation → ↑ heat loss) &amp; <strong>smoking</strong> (nicotinic vasoconstriction → ↓ perfusion to fingers)</li>
<li>Maintain <strong>hydration + caloric intake</strong> (cold burns ~ 25% extra calories)</li>
<li><strong>Buddy system</strong> in extreme cold — early frostbite easier to identify in someone else</li>
<li>Cover face / ears / nose · take warmth breaks every 1-2 h</li>
<li>Pre-acclimatisation for high-altitude trekkers · gradual ascent</li>
<li>Avoid tight clothing / boots (impair circulation)</li>
</ol>`,
    sources: ['TI-03 Local Cold Effects'],
    jumpToDiagram: 'TI-03'
  },
  {
    id: 'SAQ-14.2', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Write a note on death due to lightning strike.',
    answer: `<h4>Lightning — Definition &amp; Physics</h4>
<p>Lightning = atmospheric electrical discharge. <strong>Voltage 10 – 100 MILLION V DC</strong> · current up to 200,000 A · duration &lt; 10⁻⁴ second. Cloud-to-earth discharge through ionised air channel ("leader stroke" + "streamer" + "return stroke"). Speed &gt; 100 km/sec.</p>
<h4>Modes of Strike</h4>
<ol><li><strong>Direct stroke</strong> — strikes victim or object held overhead</li>
<li><strong>Splash strike</strong> — strikes nearby object, jumps to person</li>
<li><strong>Ground current ("step potential")</strong> — current spreads through earth from strike point</li>
<li>Indoor — via telephone, plumbing, electrical wiring (rare)</li></ol>
<h4>4 Patterns of Effect (Spencer)</h4>
<ol>
<li><strong>Direct high-voltage current</strong> — ventricular fibrillation / asystole / "cardiac standstill"</li>
<li><strong>Heat</strong> — singeing / superficial / deep burns (usually minor because exposure &lt; 10⁻⁴ s)</li>
<li><strong>Air expansion + regression of heated air</strong> — blast-like effect → mechanical injuries</li>
<li><strong>Sledge-hammer blow</strong> — compression of air ahead of high-speed return stroke = blunt trauma</li>
</ol>
<h4>External Marks (Spencer 1932 — 3 classes)</h4>
<ol>
<li><strong>SURFACE BURNS</strong> — tissue burns related to metallic objects worn (collar studs, hairpins, jewellery); blisters, fissures, charring of deep tissue</li>
<li><strong>LINEAR BURNS</strong> — 1-12 inches long, 1/8-1 inch wide; found on moist creases &amp; folds of skin</li>
<li><strong>ARBORESCENT / FILIGREE BURNS</strong> — Lichtenberg figures · multiple, superficial, irregular, tortuous, tree-branch pattern on skin (shoulder / chest) · ★ <strong>PATHOGNOMIC</strong> of lightning · <strong>FADES in 2-3 days</strong> (document immediately)</li>
</ol>
<h4>Autopsy &amp; Scene Findings</h4>
<ul>
<li><strong>Scene:</strong> storm history · damaged trees (splitting, bark removal) · charred arc marks on walls · "fern pattern" in grass</li>
<li><strong>Clothing:</strong> singed / melted / completely burnt · may be TORN OFF the body with scorched tear ends · <strong>boots / shoes / waist belts may BURST OPEN</strong></li>
<li><strong>Body:</strong> Rigor mortis appears early + passes off early</li>
<li>Skin: clusters of punctate burns from arcing · singeing of hair</li>
<li><strong>Tympanic membrane rupture</strong> ★ — from explosive air effect / muscular contraction</li>
<li><strong>Metallic objects MAGNETISED / fused</strong> ★ (button, hairpin, key) — from intense magnetic field</li>
<li>Petechial haemorrhages in brain · chromatolysis of axons · pulmonary oedema · congested organs</li>
</ul>
<h4>Causes of Death</h4>
<ol><li>Cardiac standstill / VF / asystole (commonest)</li>
<li>CNS damage / cerebral oedema</li>
<li>Burns &amp; blast trauma (mechanical injuries from sledge-hammer effect)</li>
<li>Secondary injuries (falls)</li></ol>
<h4>Medicolegal Importance</h4>
<ul>
<li>Almost always <strong>ACCIDENTAL</strong> (deaths during thunderstorms)</li>
<li>Documenting Lichtenberg figures <strong>BEFORE THEY FADE</strong> is forensic priority</li>
<li>Magnetised metal + tympanic rupture + boots burst = strong supporting evidence in absence of witness</li>
<li>Rapid CPR may revive "apparently dead" victims — cardiac standstill from lightning often transient</li>
</ul>`,
    sources: ['TI-11 Lightning'],
    jumpToDiagram: 'TI-11'
  },
  {
    id: 'SAQ-14.3', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Describe mechanism of causation of heat hematomas and heat fractures with their medicolegal significance. Describe pugilistic attitude.',
    answer: `<h4>Heat Hematoma</h4>
<p><strong>Definition:</strong> Postmortem collection of blood in the EXTRADURAL space, found in fire victims subjected to intense heat for prolonged duration.</p>
<p><strong>Mechanism:</strong></p>
<ol>
<li>Prolonged heat → boiling of blood in <strong>venous sinuses</strong> of skull (especially superior sagittal &amp; transverse) → expansion + extravasation</li>
<li>OR via <strong>diploic emissary venous channels</strong> of the skull — blood is forced out under heat</li>
<li>Heated blood accumulates in extradural space (between charred skull and dura)</li>
</ol>
<p><strong>Appearance:</strong> Soft · spongy (gas bubbles from heating) · friable · <strong>HONEYCOMB</strong> · tawny / chocolate-brown (cherry-red if CO present) · usually in <strong>PARIETO-TEMPORAL region</strong> · skull above is charred / heat-fractured.</p>
<h4>Heat Fractures (Thermal Fractures)</h4>
<p><strong>Three types:</strong></p>
<ol>
<li><strong>BURSTING type</strong> — ↑ intracranial steam pressure due to boiling of brain water → separates un-united sutures OR bursts the skull → gaping defect with widely separated margins</li>
<li><strong>SURFACE fracture</strong> — drying + contraction of bone → outer table of skull only → NO displacement → fracture lines often STELLATE</li>
<li><strong>CURVED fracture</strong> — in long bones of extremities exposed to high temperature → peculiar curved fractures</li>
</ol>
<h4>Medicolegal Significance</h4>
<ul>
<li>★ <strong>Heat hematoma can mimic TRAUMATIC extradural hematoma</strong> (which is a fatal mechanical injury). Critical to differentiate to avoid mis-attributing cause of death.</li>
<li><strong>Differentiation:</strong>
<ul><li>Heat hematoma: charred skull above, no impact fracture, honeycomb spongy clot, CO present in clot</li>
<li>True EDH: skull impact #, firm dark clot, no CO in clot</li></ul></li>
<li>★ <strong>CO in the heat hematoma confirms it as a heat artefact</strong> (the heated blood absorbed CO from fire gases), not a fatal antemortem injury</li>
<li>Heat fractures can be mistaken for blunt force trauma fractures — distinguishing features: lack of impact bevelling, stellate pattern (surface type), suture separation pattern (bursting type)</li>
<li>★ Heat hematoma and heat fractures DO NOT distinguish antemortem from postmortem burns — they occur in both</li>
</ul>
<h4>Pugilistic Attitude</h4>
<p><strong>Synonyms:</strong> Boxer's attitude · Fencer's attitude.</p>
<p><strong>Definition:</strong> Characteristic postural appearance of body in fire victims — generalised flexion of trunk and limbs resembling a boxer's stance.</p>
<p><strong>Mechanism:</strong></p>
<ul>
<li>Heat causes <strong>coagulation and denaturation of muscle proteins</strong> → muscles contract and stiffen</li>
<li>This is termed <strong>heat rigor</strong> or <strong>heat stiffening</strong> (distinct from normal rigor mortis)</li>
<li>The flexor groups are stronger than extensors → body assumes flexed posture</li>
</ul>
<p><strong>Appearance:</strong></p>
<ul>
<li>Generalised flexion of trunk + upper limbs + lower limbs</li>
<li>Fingers curl inwards (clenched fist appearance)</li>
<li>Contraction of paraspinal muscles → marked <strong>OPISTHOTONOS</strong> (arched back)</li>
<li>Resembles a boxer (pugilist) on guard — hence the name</li>
</ul>
<p><strong>Medicolegal Significance:</strong></p>
<ul>
<li>★ <strong>NEET-PG 2016 Q28</strong> — Pugilistic attitude is characteristically seen in BURNS</li>
<li>★ <strong>Does NOT distinguish AM from PM burns</strong> — occurs in both — therefore not diagnostic of "alive at time of fire"</li>
<li>Important to document in autopsy report as evidence of heat exposure</li>
</ul>`,
    sources: ['TI-07 Pugilistic + Heat Rupture/Fracture/Hematoma'],
    jumpToDiagram: 'TI-07'
  },
  {
    id: 'SAQ-14.4', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Write a note on Joule Burn.',
    answer: `<h4>Joule Burn — Definition</h4>
<p><strong>Joule burn</strong> (also called <strong>ENDOGENOUS BURN</strong>) is a thermal burn produced at the point of entry of electric current, caused by heat generated INSIDE the body due to tissue resistance to the current flow.</p>
<h4>Mechanism — The Joule Effect</h4>
<p>When electric current passes through skin/tissue, heat is generated according to the formula:</p>
<p style="text-align:center"><strong>Heat (gram calories per sec) = (C² × R) / 4.187</strong></p>
<p>where C = current in amperes, R = resistance in ohms.</p>
<ol>
<li>Prolonged firm contact between skin and live conductor</li>
<li>Skin offers maximum resistance to current (≈ 5000 Ω when dry)</li>
<li>Heat = I²R × time → tissue under contact point heats up</li>
<li>Temperature at contact point can reach 95°C (tissue damage at just 50°C)</li>
<li>Coagulation of proteins → coagulative necrosis at contact point</li>
</ol>
<h4>Appearance</h4>
<ul>
<li>Skin at contact point acquires a <strong>BROWNISH "BISCUIT" colour</strong></li>
<li>With further continued contact → CHARRING of skin</li>
<li>Located at the <strong>point of entry</strong> of current</li>
<li>Often accompanied by a pale halo (arteriolar spasm — pathognomic of electric injury)</li>
<li>May show metallisation if from metallic conductor</li>
</ul>
<h4>Distinction from Exogenous Burns</h4>
<table><tr><th>Feature</th><th>Joule (Endogenous) Burn</th><th>Flash (Exogenous) Burn</th></tr>
<tr><td>Source of heat</td><td>Internal — I²R heating</td><td>External — arc flame</td></tr>
<tr><td>Setting</td><td>Contact injury, long duration</td><td>High-voltage arcing without contact</td></tr>
<tr><td>Pattern</td><td>Focal at contact point</td><td>Widespread, may ignite clothing</td></tr></table>
<h4>Medicolegal Significance</h4>
<ul>
<li>Confirms an <strong>electrical injury</strong> (vs ordinary thermal burn)</li>
<li>Marks the <strong>POINT OF ENTRY</strong> of current — helps reconstruct mechanism and contact site</li>
<li>Persists after death — diagnosable on autopsy</li>
<li>May contain METAL TRACES (metallisation) from conductor — confirms type of source</li>
<li>Distinguishes electrocution from other thermal injuries when victim is found burnt near live wire</li>
</ul>`,
    sources: ['TI-10 Electrocution'],
    jumpToDiagram: 'TI-10'
  },
  {
    id: 'SAQ-14.5', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Causes of Death due to Burns.',
    answer: `<h4>Causes of Death in Burns — IMMEDIATE</h4>
<ol>
<li><strong>Neurogenic shock</strong> — overwhelming pain → vasovagal collapse → cardiac arrest</li>
<li><strong>Hypovolaemic shock</strong> — massive fluid + electrolyte loss from burnt skin (capillary leak through damaged surface; fluid loss may exceed 10 L in extensive burns)</li>
<li><strong>Inhalation of smoke</strong> — anoxia from O₂ depletion at the fire + irritant gases (acrolein, hydrogen cyanide, phosgene, HCl from PVC)</li>
<li><strong>Carbon monoxide poisoning</strong> — CO-Hb binds 240× more avidly than O₂ → tissue hypoxia · brain &amp; heart most vulnerable</li>
<li><strong>Laryngeal / glottic oedema</strong> — inhalational burn of upper airway → mechanical airway obstruction within minutes to hours</li>
<li><strong>Secondary injuries sustained while escaping</strong> — falls, jumps from windows, falling masonry</li>
</ol>
<h4>Causes of Death in Burns — DELAYED (hours to weeks)</h4>
<ol>
<li><strong>Septicaemic shock</strong> — burnt skin = giant infected wound; Pseudomonas aeruginosa, Staphylococcus aureus, Streptococcus, Acinetobacter; multi-drug-resistant organisms common</li>
<li><strong>Toxaemia</strong> — endogenous toxins (cytokines, denatured proteins) absorbed from necrotic burnt tissue</li>
<li><strong>Renal failure</strong> — multifactorial:
<ul><li>Hypovolaemia → pre-renal AKI</li>
<li>Myoglobinuria from rhabdomyolysis (deep burns)</li>
<li>Sepsis</li>
<li>Drugs (aminoglycosides for sepsis)</li></ul></li>
<li><strong>Pulmonary embolism</strong> (rare) — prolonged immobilisation</li>
<li><strong>Fat embolism</strong> (rare) — from long bone involvement</li>
<li><strong>Acute Respiratory Distress Syndrome (ARDS)</strong> — inhalational injury + SIRS</li>
<li><strong>Curling's ulcer</strong> — stress ulcer in stomach / duodenum → GI haemorrhage</li>
<li>Multi-organ failure (cumulative)</li>
</ol>
<h4>Determinants of Mortality</h4>
<ul>
<li><strong>% TBSA</strong> — &gt; 30% major life threat · &gt; 60% often fatal</li>
<li><strong>Depth</strong> — full thickness mortality higher</li>
<li><strong>Age</strong> — extremes (infants, &gt; 60 yr) higher mortality</li>
<li><strong>Inhalational injury</strong> — doubles mortality at any TBSA</li>
<li><strong>Comorbidity</strong> — diabetes, cardiac disease, immunosuppression</li>
<li><strong>Delay to fluid resuscitation</strong> — Parkland: 4 mL/kg × %TBSA Ringer's lactate in first 24 h</li>
</ul>`,
    sources: ['TI-08 AM/PM + Causes of Death'],
    jumpToDiagram: 'TI-08'
  },
  {
    id: 'LAQ-14.1', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank',
    question: 'Burns — define, classify; Ante-Mortem and Post-Mortem Burns — differentiate; Causes of Death due to Burns; Medicolegal Aspects of Burns.',
    answer: `<h4>Definition</h4>
<p><strong>Burn</strong> = "tissue injury due to application of HEAT (in any form) to the external or internal body surface."</p>
<h4>Classification — By Causative Agent</h4>
<ol>
<li><strong>Dry heat</strong> — flame, hot solid contact (iron, stove)</li>
<li><strong>Moist heat</strong> — scalds (water ≥ 50°C, steam)</li>
<li><strong>Friction</strong> — brush burns (RTA, motorcyclist drag)</li>
<li><strong>Chemical</strong> — acid (coagulative), alkali (liquefactive), corrosive salts</li>
<li><strong>Electric / lightning</strong></li>
<li><strong>Radiation</strong> — UV, X-ray, IR, laser, radium, explosion (flash)</li>
</ol>
<h4>Classification — By Depth</h4>
<table><tr><th>System</th><th>Degrees</th><th>Description</th></tr>
<tr><td>Dupuytren</td><td>6</td><td>1° erythema · 2° blister · 3° partial dermis · 4° full skin · 5° subQ · 6° muscle/bone</td></tr>
<tr><td>Wilson</td><td>3</td><td>1° = Dupuytren 1+2 (epidermal) · 2° = 3+4 (dermo-epidermal) · 3° = 5+6 (deep)</td></tr>
<tr><td>Modern</td><td>2</td><td>Superficial · Deep</td></tr></table>
<h4>Classification — By Extent (Wallace Rule of 9, Adult)</h4>
<ul><li>Head + neck 9% · Each upper limb 9% · Anterior trunk 18% · Posterior trunk 18% · Each lower limb 18% · Genitals 1% = 100%</li>
<li>Children use Lund-Browder (head up to 19% in &lt; 1 yr) · Palm = 1% for small burns</li></ul>
<h4>Severity Classification (ABA)</h4>
<p>Minor &lt; 15% TBSA superficial · Moderate 15-25% (10-20% child) · Major above + most full thickness in extremes of age</p>
<h4>Differentiation — Antemortem vs Postmortem Burns</h4>
<table><tr><th>Feature</th><th>Antemortem</th><th>Postmortem</th></tr>
<tr><td><strong>Line of redness</strong></td><td>PRESENT</td><td>Absent</td></tr>
<tr><td><strong>Blister content</strong></td><td>Serous fluid rich in PROTEIN + CHLORIDES; base red, inflamed, raised papillae</td><td>Usually absent; if present → AIR + clear fluid; base dry, pale, hard</td></tr>
<tr><td>Vital reaction</td><td>Present</td><td>Absent</td></tr>
<tr><td>Reparative process</td><td>Present</td><td>Absent</td></tr>
<tr><td>Infection</td><td>May be present</td><td>Absent</td></tr>
<tr><td><strong>Soot in respiratory passage</strong></td><td>PRESENT below cords ★</td><td>Absent</td></tr>
<tr><td><strong>Carboxyhaemoglobin</strong></td><td>&gt; 5% saturation ★</td><td>Absent / trace</td></tr>
<tr><td>Cyanide</td><td>May be present</td><td>Absent / trace</td></tr>
<tr><td>Enzyme activity</td><td>Cathepsin (immediate) · Serotonin 10m · Histamine 20m · Esterase 1h · ATPase 1h · Acid phosphatase 3h · Alkaline phosphatase 4h</td><td>Absent</td></tr>
<tr><td>Heat artefacts (pugilistic, splits, fractures, heat hematoma)</td><td>Present (NOT discriminatory)</td><td>Present (NOT discriminatory)</td></tr></table>
<h4>Causes of Death — IMMEDIATE</h4>
<ol><li>Neurogenic shock</li><li>Hypovolaemic shock</li><li>Smoke inhalation</li><li>CO poisoning</li><li>Laryngeal oedema</li><li>Secondary injuries (falls, masonry)</li></ol>
<h4>Causes of Death — DELAYED</h4>
<ol><li>Septicaemia</li><li>Toxaemia</li><li>Renal failure (myoglobinuria + hypovolaemia + sepsis)</li><li>ARDS</li><li>Pulmonary / fat embolism (rare)</li><li>Curling's ulcer → GI bleed</li><li>Multi-organ failure</li></ol>
<h4>Medicolegal Aspects of Burns</h4>
<ol>
<li><strong>Identification</strong> of deceased — face often charred · use dental records, DNA, surviving tattoos, prior medical records, jewellery</li>
<li><strong>Antemortem or postmortem?</strong> — see table above</li>
<li><strong>Age of burn</strong> — from clinical features:
<ul><li>&lt; 1 h: redness, vesication · 6-12 h: PMN infiltrate · 12-24 h: exudate dries · 24-72 h: brown crust · 4-6 d: superficial slough · 2 wks: deep slough off · wks-months: cicatrix</li></ul></li>
<li><strong>Cause of death</strong> — immediate vs delayed</li>
<li><strong>Manner of death</strong> — accidental (commonest), suicidal (self-immolation), homicidal (assault, dowry burns)</li>
<li><strong>Bride / dowry deaths</strong> — BNS 80 (dowry death, ≡ IPC 304-B); BNS 85 (cruelty, ≡ IPC 498-A); BSA 117/118 presumptions; BNSS 196 magistrate inquest mandatory</li>
<li><strong>Survival assessment</strong> — were antemortem burns sufficient to cause death? Document % TBSA, depth, inhalation injury, organ failure</li>
<li><strong>Scene examination</strong> — accelerants (kerosene, petrol smell), position of body, witness statements, dying declaration if patient survived</li>
<li><strong>Sampling</strong> — clothes (for accelerants), blood (CO-Hb, cyanide, alcohol, drugs), urine, hair</li>
</ol>`,
    sources: ['TI-05 + TI-06 + TI-07 + TI-08 + TI-09'],
    jumpToDiagram: 'TI-08'
  },
  {
    id: 'LAQ-14.2', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank',
    question: 'Lightning Injury — mechanism; Death due to Lightning — autopsy appearances; Lightning Fatalities.',
    answer: `<h4>Lightning — Definition &amp; Physics</h4>
<p>Lightning = atmospheric electrical discharge between clouds, or between cloud and earth.</p>
<ul><li>Voltage: <strong>10 – 100 MILLION V DC</strong></li>
<li>Current: up to 200,000 A</li>
<li>Duration: &lt; 10⁻⁴ second</li>
<li>Speed of leader stroke: &gt; 100 km/sec</li></ul>
<h4>Mechanism of Formation</h4>
<p>Turbulence in clouds causes charge separation — upper surface becomes positive, lower surface negative. Three varieties:</p>
<ol><li>Intra-cloud lightning (within same cloud — visible as glow)</li>
<li>Inter-cloud lightning (between two clouds — visible spark)</li>
<li><strong>Cloud-to-earth lightning</strong> — the fatal type, occurs in 3 stages:
<ul><li><strong>Leader stroke</strong> — initial descending negative charge from cloud, in steps</li>
<li><strong>Streamer / pilot</strong> — positive discharge ascending from earth / tall structure when leader is within 30-40 feet</li>
<li><strong>Return stroke</strong> — when streamer meets leader, massive current wave flows back — visible flash + audible thunder (rapid air expansion)</li></ul></li></ol>
<h4>Mode of Strike (How Lightning Hits Victim)</h4>
<ol><li><strong>Direct stroke</strong> — strikes victim / object held overhead (umbrella, tree)</li>
<li><strong>Splash strike</strong> — strikes nearby object, jumps to person</li>
<li><strong>Ground current ("step potential")</strong> — spreads radially through earth from strike point</li>
<li>Indoor strike — through telephone, plumbing, wiring (rare)</li></ol>
<h4>4 Patterns of Effect (Spencer)</h4>
<ol>
<li><strong>Direct high-voltage current</strong> → ventricular fibrillation / cardiac standstill / asystole — commonest cause of death</li>
<li><strong>Heat effect</strong> — singeing of hair / superficial burns / occasional deep burns (usually minor because exposure is so brief)</li>
<li><strong>Air expansion + regression of heated air</strong> → blast-like effect → mechanical injuries (lacerations, contusions, torn clothing)</li>
<li><strong>Sledge-hammer blow</strong> — compression of air ahead of high-speed return stroke = blunt trauma</li>
</ol>
<h4>External Marks of Lightning (Spencer 1932)</h4>
<ol>
<li><strong>SURFACE BURNS</strong>
<ul><li>Tissue burns related to METALLIC OBJECTS worn or carried (collar studs, hairpins, jewellery, belt buckle — focal heating)</li>
<li>Secondary burns from ignition of clothing</li>
<li>Blisters, fissures, charring of deeper tissue depending on intensity</li></ul></li>
<li><strong>LINEAR BURNS</strong>
<ul><li>1 – 12 inches long, 1/8 – 1 inch wide</li>
<li>Found on moist creases &amp; folds of skin (axilla, groin, neck) — lower resistance</li></ul></li>
<li><strong>ARBORESCENT / FILIGREE BURNS (Lichtenberg Figures)</strong>
<ul><li>Multiple, superficial, irregular, tortuous markings on skin resembling branches of tree — fern-leaf erythema</li>
<li>Common sites: shoulder, chest, arm</li>
<li>Postulated mechanism: copper deposition OR Hb staining along current path</li>
<li>★ <strong>PATHOGNOMIC of lightning</strong></li>
<li>★ <strong>FADES in 2 – 3 days</strong> — document immediately (photograph + scale)</li></ul></li>
</ol>
<h4>Autopsy Appearances</h4>
<p><strong>Scene findings:</strong></p>
<ul><li>Storm history · damaged trees (split bark, broken branches)</li>
<li>Charred arc marks on walls of nearby buildings</li>
<li>"Fern pattern" in grass at strike point</li></ul>
<p><strong>Clothing:</strong></p>
<ul><li>Singed / melted / completely burnt</li>
<li>May be TORN OFF body with scorched tear ends</li>
<li>★ <strong>Boots / shoes / waist belts may BURST OPEN</strong></li></ul>
<p><strong>External examination:</strong></p>
<ul><li>Rigor mortis: appears EARLY + passes off EARLY</li>
<li>Pattern of injuries varies — may show disruptive injuries on one body, no external marks on another</li>
<li>Burns related to metal objects worn</li>
<li>Punctate cluster burns from electrical arcing</li>
<li>Singeing of hair</li>
<li>Lichtenberg figures (most important — fading)</li>
<li>★ <strong>TYMPANIC MEMBRANE RUPTURE</strong> — from explosive air effect or muscular contraction</li>
<li>★ <strong>METALLIC OBJECTS MAGNETISED or fused</strong> (button, hairpin, key, key-chain, pendant) — pathognomic; from intense magnetic field of lightning</li></ul>
<p><strong>Internal examination:</strong></p>
<ul><li>Brain: petechial haemorrhages, chromatolysis &amp; fragmentation of axons</li>
<li>Lungs: pulmonary oedema, congestion</li>
<li>Organs: congested</li></ul>
<h4>Causes of Death</h4>
<ol>
<li>Cardiac standstill / VF / asystole (instantaneous in most fatal cases)</li>
<li>CNS damage (brainstem / cerebral oedema)</li>
<li>Burns &amp; blast trauma (secondary)</li>
<li>Secondary injuries (falls from height after strike)</li>
</ol>
<h4>Lightning Fatalities — Forensic Pearls</h4>
<ul>
<li>Almost always <strong>ACCIDENTAL</strong> (deaths during thunderstorm)</li>
<li>India has occasional mass casualty incidents (group struck by single bolt)</li>
<li><strong>Rapid CPR can revive "apparently dead" victims</strong> — cardiac standstill is often transient; permanent damage minimal if circulation restored quickly</li>
<li>Documenting Lichtenberg figures <strong>BEFORE THEY FADE</strong> is the forensic priority</li>
<li>Combined evidence — Lichtenberg + tympanic rupture + magnetised metal + boots burst — strongly supports lightning in absence of witness</li>
<li>BNSS 196 inquest (if circumstances unclear), otherwise BNSS 174 police inquest</li>
</ul>`,
    sources: ['TI-11 Lightning'],
    jumpToDiagram: 'TI-11'
  },
  {
    id: 'SAQ-14.6', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'Describe the legal framework for bride burns / dowry deaths under BNS 2023 and BSA 2023.',
    answer: `<h4>Bride Burns / Dowry Death — Indian Forensic Context</h4>
<p>Bride burns remain a serious forensic problem in India. Textbook estimates: ~ 30% of homicidal burnings of married women + ~ 21% of suicides by burning occur in in-laws' home. Common pattern: kerosene burns + dowry demand + prior cruelty.</p>
<h4>Key Statutory Provisions — BNS 2023 (replaced IPC 1860 on 1 July 2024)</h4>
<h5>1. BNS 80 — Dowry Death (≡ IPC 304-B)</h5>
<p><strong>Definition:</strong> Where the death of a woman is caused by ANY burn, bodily injury, or occurs otherwise than under NORMAL CIRCUMSTANCES <strong>WITHIN 7 YEARS of marriage</strong>, AND it is shown that SOON BEFORE her death she was subjected to cruelty or harassment by her husband or any relative of her husband for, or in connection with, ANY DEMAND FOR DOWRY — such death shall be called "dowry death", and such husband or relative shall be DEEMED to have caused her death.</p>
<p><strong>Punishment:</strong> Imprisonment NOT LESS than 7 YEARS, may extend to LIFE imprisonment.</p>
<h5>2. BNS 85 / 86 — Cruelty (≡ IPC 498-A) ★ NEET-PG 2016 Q4</h5>
<p><strong>BNS 85:</strong> Husband or relative of husband subjecting a woman to cruelty.</p>
<p><strong>BNS 86 — Definition of cruelty:</strong></p>
<ol><li>Any WILFUL conduct likely to drive the woman to commit SUICIDE OR cause grave injury / danger to her life, limb, or health (mental or physical), OR</li>
<li>HARASSMENT with a view to coercing her or any related person to meet any UNLAWFUL demand for property / valuable security (dowry)</li></ol>
<p><strong>Punishment:</strong> Up to 3 years + fine.</p>
<h5>3. BNS 118 — Hurt by Fire / Heated Substance / Corrosive</h5>
<p>Applies if burning is the means of voluntary hurt or grievous hurt.</p>
<ul><li>BNS 118(1) — voluntary hurt by fire / heated substance / corrosive — up to 3 yrs</li>
<li>BNS 118(2) — voluntary grievous hurt by such means — 10 yrs to life + fine</li></ul>
<h5>4. BNS 124 — Acid Attack</h5>
<p>Throwing / administering acid causing permanent damage / disability / disfigurement / burns — 10 yrs to life + fine to victim.</p>
<h4>Evidentiary Presumptions — BSA 2023 (replaced IEA 1872)</h4>
<h5>BSA 117 (≡ IEA 113-A) — Presumption of Abetment of Suicide by Married Woman</h5>
<p>Where a married woman commits suicide within 7 yrs of marriage + her husband / relative subjected her to cruelty → court MAY presume that the suicide was abetted by them.</p>
<h5>BSA 118 (≡ IEA 113-B) — Presumption of Dowry Death</h5>
<p>Where SOON BEFORE death the woman had been subjected to cruelty or harassment for dowry → court SHALL presume that the person caused the dowry death.</p>
<p><strong>Key distinction:</strong> BSA 117 = MAY presume (discretionary); BSA 118 = SHALL presume (mandatory) — shifts burden of proof to accused.</p>
<h4>Procedural Framework — BNSS 2023 (replaced CrPC 1973)</h4>
<ul><li><strong>BNSS 196</strong> (≡ CrPC 176) — Magistrate inquest MANDATORY for dowry deaths (within 7 yrs)</li>
<li>Autopsy by senior forensic medicine specialist · second opinion if necessary</li>
<li>Detailed scene examination + sampling for accelerants (kerosene, petrol)</li>
<li>Dying declaration from victim if survives — high evidentiary value</li></ul>
<h4>Forensic Approach to Suspected Bride Burning</h4>
<ol>
<li>Examine pattern of burns — stocking distribution → pouring; horizontal level → immersion; sharp demarcation → acid</li>
<li>Look for <strong>defence injuries</strong> on forearms, hands</li>
<li>Smell of accelerant (kerosene) on clothing, body</li>
<li>Soot deposition pattern — concentrated areas suggest accelerant pouring</li>
<li>Prior MLC entries · psychiatric history · history of cruelty</li>
<li>Dying declaration if patient was conscious — record in presence of magistrate</li>
<li>Preserve clothes (for accelerant analysis) + blood (for CO-Hb, alcohol, drug screen)</li>
<li>Family + community interview re dowry demand evidence</li>
</ol>
<h4>Additional Protection</h4>
<p>The <strong>Protection of Women from Domestic Violence Act 2005</strong> has extended the definition of domestic violence to include dowry demands, providing civil remedy + protection orders.</p>`,
    sources: ['TI-09 Scalds + Bride/Dowry Burns Legal Frame'],
    jumpToDiagram: 'TI-09'
  },
  {
    id: 'SAQ-14.7', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'A 35-year-old construction worker collapsed at the work-site in peak summer. On admission his core temperature is 41.2°C, skin is hot and dry. Discuss diagnosis, immediate management, and autopsy findings if death occurs.',
    answer: `<h4>Diagnosis: HEAT STROKE</h4>
<p>Clinical picture — hot environment + collapse + core &gt; 41°C + HOT DRY SKIN — is diagnostic of <strong>HEAT STROKE</strong> (synonyms: sunstroke, heat hyperpyrexia, thermic fever).</p>
<p>★ The defining feature is <strong>ABSENCE of sweating</strong> — the hypothalamic heat-regulatory mechanism has failed. (NEET-PG 2021 Q9 + 2023 Q1 — exactly this scenario.)</p>
<h4>Pathophysiology</h4>
<ul><li>Heavy heat load (radiant + ambient) + impaired heat dissipation → core temp rises</li>
<li>Once core &gt; 41°C, hypothalamic set-point regulation fails → sweating stops → vicious cycle of further temperature rise</li>
<li>Direct cellular injury at temp &gt; 42°C (protein denaturation)</li>
<li>Systemic inflammatory response → multi-organ damage</li></ul>
<h4>Clinical Features (apart from temp + dry skin)</h4>
<ul><li>Tachycardia · hypotension (later)</li>
<li>↑ depth of respiration</li>
<li>CNS dysfunction: headache, nausea, vomiting, dizziness, delirium, convulsions, coma</li></ul>
<h4>Immediate Management — Medical Emergency</h4>
<ol>
<li><strong>Move to cool environment</strong> immediately</li>
<li><strong>Aggressive cooling</strong> — goal: core temp 39°C within 30 minutes
<ul><li>Ice packs to <strong>GROIN, AXILLA, NECK</strong> (large vessels close to skin)</li>
<li>Evaporative cooling — fan + tepid water spray (most efficient at field setting)</li>
<li>Cold water immersion (most rapid; reserved for hospital)</li>
<li>Avoid alcohol rubs (peripheral vasoconstriction reduces heat loss)</li></ul></li>
<li><strong>IV fluids</strong> — Ringer's lactate, careful (risk of pulmonary oedema if delayed)</li>
<li><strong>Airway protection</strong> — intubate if comatose</li>
<li><strong>Treat seizures</strong> — benzodiazepines</li>
<li><strong>Monitor</strong> — continuous core temperature (rectal/oesophageal), ECG, urine output</li>
<li><strong>Prevent rhabdomyolysis-induced renal failure</strong> — alkaline diuresis, mannitol if myoglobinuria</li>
<li><strong>Treat complications</strong> — DIC, hepatic failure, ARDS, renal failure</li>
</ol>
<h4>Autopsy Findings if Death Occurs</h4>
<ul>
<li><strong>Post-mortem caloricity</strong> — body remains WARM after death; rectal temperature may continue to rise briefly post-mortem</li>
<li><strong>Rigor mortis</strong> sets in EARLY and passes off EARLY (already-warm muscles)</li>
<li><strong>Putrefaction is RAPID</strong> — body warm + bacterial proliferation</li>
<li><strong>Brain:</strong> oedematous, congested, petechial haemorrhages in white matter</li>
<li><strong>Lungs:</strong> congested with fresh haemorrhages</li>
<li><strong>If survival &gt; 12-24 h before death:</strong>
<ul><li>Focal myocardial necrosis</li>
<li>Centrilobular hepatic necrosis</li>
<li>Renal tubular necrosis</li>
<li>Adrenal cortical necrosis</li>
<li>Rhabdomyolysis (rectus, calf muscles)</li>
<li>Pancreatitis</li>
<li>Disseminated intravascular coagulation</li>
<li>Microglial reaction in CNS</li></ul></li>
<li>Cause of death: <strong>paralysis of hypothalamic heat-regulatory centre</strong> + multi-organ failure</li>
</ul>
<h4>Differentiation from Other Hyperthermias</h4>
<table><tr><th>Feature</th><th>Heat Stroke</th><th>Heat Exhaustion</th></tr>
<tr><td>Core temp</td><td>&gt; 41°C</td><td>37 – 40°C</td></tr>
<tr><td>Sweating</td><td>ABSENT (dry skin) ★</td><td>PRESERVED (clammy skin)</td></tr>
<tr><td>CNS</td><td>Altered (delirium, coma)</td><td>Preserved consciousness</td></tr>
<tr><td>Severity</td><td>EMERGENCY</td><td>Survivable with fluids + cooling</td></tr></table>
<h4>Medicolegal Notes</h4>
<ul><li>Almost always ACCIDENTAL (occupational exposure)</li>
<li>Document working conditions, ambient temperature, hydration access, protective equipment provided</li>
<li>BNS 106 (death by negligence) may apply if employer failed to provide protective measures for heat-exposed workers</li>
<li>Industrial / labour law obligations under Factories Act</li></ul>`,
    sources: ['TI-04 General Heat Effects'],
    jumpToDiagram: 'TI-04'
  }
];

return {
  chapterNumber: 14,
  chapterTitle: 'Thermal Injuries',
  prereqs: [
    { term: 'Thermal injury', meaning: 'Tissue damage from abnormal temperature exposure — cold (hypothermia, frostbite) OR heat (burns, scalds, electrocution, lightning).' },
    { term: 'Hypothermia', meaning: 'Core body temperature &lt; 35°C (95°F). Mild 32-35°C · moderate 28-&lt; 32°C · severe &lt; 28°C (VF risk).' },
    { term: 'Frostbite', meaning: 'Local tissue injury from DRY cold (&lt; 0°C) → freezing + vasoconstriction. 4 degrees from erythema to muscle/bone loss.' },
    { term: 'Trench foot / Immersion foot', meaning: 'Local cold injury from prolonged WET cold (5-6°C). Causes obliterating angiitis.' },
    { term: 'Pernio (chilblains)', meaning: 'Vasculitic disorder from cold (above freezing) — raised erythematous lesions with pruritus on lower legs.' },
    { term: 'Heat stroke', meaning: 'Core body temperature &gt; 41°C (106°F) with HOT DRY SKIN (sweating absent). Synonyms: sunstroke, heat hyperpyrexia.' },
    { term: 'Heat exhaustion', meaning: 'Volume + electrolyte depletion · 37-40°C · sweating PRESERVED · consciousness preserved.' },
    { term: 'Burn (forensic)', meaning: 'Tissue injury from application of heat to body surface. Dry / moist / chemical / electric / radiation.' },
    { term: 'Pugilistic attitude', meaning: 'Postmortem boxer-like flexed posture in fire victims — heat coagulates muscle proteins. Does NOT distinguish AM from PM.' },
    { term: 'Heat rupture', meaning: 'Skin splits from heat contraction — mimic lacerations but have IRREGULAR margins, NO bleeding, intact vessels bridge.' },
    { term: 'Heat hematoma', meaning: 'Postmortem extradural collection in fire victims — soft, spongy, honeycomb, parieto-temporal. CO in clot confirms heat artefact.' },
    { term: 'Wallace Rule of 9', meaning: 'TBSA estimation in adults — head 9% · each upper limb 9% · each lower limb 18% · ant/post trunk 18% each · genitals 1%.' },
    { term: 'Lund-Browder chart', meaning: 'Age-graded TBSA estimation for children — head 19% at &lt; 1 yr, decreasing to 7% in adult. More accurate in paediatrics.' },
    { term: 'Joule burn', meaning: 'Endogenous burn at point of electrical contact — heat generated INSIDE body by I²R (Joule effect). Brownish biscuit → charring.' },
    { term: 'Crocodile skin', meaning: 'Pattern of multiple focal burns from HIGH-voltage current with sparking. Mimics crocodile skin.' },
    { term: 'Lichtenberg figures', meaning: 'Filigree / arborescent / fern-leaf pattern on skin — PATHOGNOMIC of lightning. Fades in 2-3 days.' },
    { term: 'Carboxyhaemoglobin', meaning: '&gt; 5% saturation in blood proves antemortem fire exposure (person breathed combustion products).' },
    { term: 'Curling\'s ulcer', meaning: 'Stress ulcer in stomach / duodenum in burn patients (delayed cause of death via GI haemorrhage).' },
    { term: 'BNS 80', meaning: 'Dowry death (≡ IPC 304-B) — death of woman by burn/injury within 7 yrs of marriage + cruelty for dowry. 7 yrs to life.' },
    { term: 'BNS 85 / 86', meaning: 'Cruelty by husband or relative (≡ IPC 498-A) — up to 3 yrs + fine. NEET-PG 2016 Q4.' },
    { term: 'BSA 117 / 118', meaning: 'Presumptions — BSA 117 (≡ IEA 113-A): abetment of suicide by married woman (MAY presume); BSA 118 (≡ IEA 113-B): dowry death (SHALL presume).' },
    { term: 'BNSS 196', meaning: 'Magistrate inquest mandatory in dowry deaths (≡ CrPC 176).' }
  ],
  diagrams: [
    { id: 'TI-01', title: 'Thermal Injuries — Master Classification', shortTitle: 'Classification Overview', svg: SVG_TI01,
      prereqs: [{term:'4-quadrant model',meaning:'Cold vs Heat × General vs Local — organises entire chapter.'},{term:'BNS 2023',meaning:'Replaced IPC 1860 on 1 July 2024 — new section numbers for dowry death, cruelty, acid attack.'}],
      nodes: nodeList(['ti-overview','ti-cold-general','ti-cold-local','ti-heat-general','ti-heat-local','ti-burn-causes','ti-legal-frame']),
      mcqs: MCQS['TI-01']
    },
    { id: 'TI-02', title: 'Hypothermia — General Effect of Cold', shortTitle: 'Hypothermia', svg: SVG_TI02,
      prereqs: [{term:'Core temp',meaning:'Rectal / oesophageal probe; peripheral underestimates.'},{term:'VF risk',meaning:'Cold myocardium electrically unstable below 28°C.'},{term:'Wischnewski ulcers',meaning:'Gastric mucosal haemorrhages — pathognomic of hypothermic death.'}],
      nodes: nodeList(['hypo-def','hypo-class','hypo-causes','hypo-autopsy','hypo-cod','hypo-pitfalls']),
      mcqs: MCQS['TI-02']
    },
    { id: 'TI-03', title: 'Local Cold — Frostbite · Trench Foot · Pernio', shortTitle: 'Local Cold Effects', svg: SVG_TI03,
      prereqs: [{term:'Dry vs wet cold',meaning:'Dry cold &lt; 0°C → frostbite (freezing); wet cold 5-6°C → trench foot (penetrates further).'},{term:'Delayed amputation',meaning:'Wait for line of demarcation — "frostbite in January, amputation in July".'}],
      nodes: nodeList(['cold-overview','frostbite-def','frostbite-degrees','trench-foot','pernio','prevention']),
      mcqs: MCQS['TI-03']
    },
    { id: 'TI-04', title: 'General Heat Effects — Stroke · Exhaustion · Cramps · Syncope', shortTitle: 'Heat Stroke Spectrum', svg: SVG_TI04,
      prereqs: [{term:'Heat stroke vs exhaustion',meaning:'Stroke &gt; 41°C + DRY skin + altered mental state vs Exhaustion 37-40°C + sweating preserved.'},{term:'Set point',meaning:'Hyperthermia = set point exceeded; Fever = set point raised by pyrogens.'}],
      nodes: nodeList(['heat-overview','heat-syncope','heat-cramps','heat-exhaustion','heat-stroke','stroke-autopsy','stroke-causes']),
      mcqs: MCQS['TI-04']
    },
    { id: 'TI-05', title: 'Burns — Definition + 3 Classifications', shortTitle: 'Burns Classification', svg: SVG_TI05,
      prereqs: [{term:'Coagulative necrosis',meaning:'Burn injury mechanism — heat denatures proteins.'},{term:'Dupuytren · Wilson · Modern',meaning:'6° · 3° · 2° — Wilson merges pairs of Dupuytren.'},{term:'Zones',meaning:'Coagulation (central, dead) · Stasis (may survive) · Hyperaemia (healing).'}],
      nodes: nodeList(['burn-def','burn-zones','burn-types','burn-pathophys','dupuytren','wilson','modern-class']),
      mcqs: MCQS['TI-05']
    },
    { id: 'TI-06', title: 'Burn Surface Area — Wallace · Lund-Browder · Palm', shortTitle: 'TBSA Estimation', svg: SVG_TI06,
      prereqs: [{term:'TBSA',meaning:'Total body surface area — drives fluid resuscitation (Parkland) and severity grading.'},{term:'Paediatric difference',meaning:'Children &lt; 4 yr have proportionally larger heads (up to 19%) — Wallace overestimates.'}],
      nodes: nodeList(['tbsa-overview','wallace','lund-browder','palm-rule','severity']),
      mcqs: MCQS['TI-06']
    },
    { id: 'TI-07', title: 'Autopsy — Pugilistic · Heat Rupture · Fracture · Hematoma', shortTitle: 'Heat Artefacts ★', svg: SVG_TI07,
      prereqs: [{term:'Heat rigor',meaning:'Muscle protein coagulation by heat — produces pugilistic flexion.'},{term:'Heat artefacts',meaning:'Pugilistic + splits + fractures + heat hematoma — do NOT distinguish AM from PM.'},{term:'CO in heat hematoma',meaning:'Key marker — confirms heat artefact (vs true antemortem EDH).'}],
      nodes: nodeList(['pugilistic','heat-rupture','heat-fracture','heat-hematoma','soot-co','muscle-organ','pug-pitfall']),
      mcqs: MCQS['TI-07']
    },
    { id: 'TI-08', title: 'Antemortem vs Postmortem Burns + Causes of Death', shortTitle: 'AM vs PM + COD', svg: SVG_TI08,
      prereqs: [{term:'Vital reaction',meaning:'Inflammatory response only possible if alive — proves antemortem.'},{term:'Vital signs of life in fire',meaning:'Soot below cords + CO &gt; 5% + protein-rich blister + line of redness.'},{term:'Curling\'s ulcer',meaning:'Stress ulcer in burn patient — delayed cause of death (GI bleed).'}],
      nodes: nodeList(['am-pm-key','line-redness','vital-blister','vital-co-soot','enzyme-timing','cod-immediate','cod-delayed','age-burn']),
      mcqs: MCQS['TI-08']
    },
    { id: 'TI-09', title: 'Scalds + Bride/Dowry Burns Legal Frame', shortTitle: 'Scalds + Dowry Burns', svg: SVG_TI09,
      prereqs: [{term:'Moist heat',meaning:'Liquid ≥ 50°C or steam — scald (no charring, no singeing, trickle pattern).'},{term:'BNS 80',meaning:'Dowry death within 7 yrs + cruelty — 7 yrs to life imprisonment.'},{term:'BSA 117/118',meaning:'Presumptions of abetment of suicide (MAY) and dowry death (SHALL).'}],
      nodes: nodeList(['scald-def','scald-features','scald-grades','dowry-frame','bns-80','bns-85','bsa-presump']),
      mcqs: MCQS['TI-09']
    },
    { id: 'TI-10', title: 'Electrocution — Mechanism + Lesion Types', shortTitle: 'Electrocution', svg: SVG_TI10,
      prereqs: [{term:'AC > DC',meaning:'AC causes tetanic contraction (cannot let go) — 50-80 mA fatal in seconds.'},{term:'Joule effect',meaning:'Heat = I²R × time — basis of endogenous burn at contact point.'},{term:'Pale halo',meaning:'Arteriolar spasm — PATHOGNOMIC of electric injury, persists after death.'}],
      nodes: nodeList(['elec-mech','ac-vs-dc','elec-factors','contact-injury','joule-burn','crater-lesion','collapsed-blister','crocodile','elec-autopsy']),
      mcqs: MCQS['TI-10']
    },
    { id: 'TI-11', title: 'Lightning — Mechanism, Marks &amp; Autopsy', shortTitle: 'Lightning', svg: SVG_TI11,
      prereqs: [{term:'10-100 million V DC',meaning:'Lightning voltage range; current up to 200,000 A; duration &lt; 10⁻⁴ sec.'},{term:'Lichtenberg figures',meaning:'Filigree / fern-leaf pattern on skin — PATHOGNOMIC of lightning. FADES in 2-3 days.'},{term:'Tympanic rupture + magnetised metal',meaning:'Lightning-specific findings; not seen in domestic electrocution.'}],
      nodes: nodeList(['lightning-physics','strike-types','lightning-effects','lichtenberg','lightning-marks','lightning-autopsy','elec-vs-lightning']),
      mcqs: MCQS['TI-11']
    }
  ],
  diffTables: DIFF_TABLES,
  subjectiveQs: SUBJ,
  highYield: [
    '<strong>Pugilistic attitude = BURNS</strong> · NEET-PG 2016 Q28 verbatim',
    '<strong>Heat rupture = IRREGULAR margins</strong> + no bleeding + intact vessels bridge floor · NEET-PG 2016 Q31 verbatim',
    '<strong>Heat stroke = 106°F (&gt; 41°C) + HOT DRY skin</strong> · sweating ABSENT · NEET-PG 2021 Q9 + 2023 Q1',
    'Heat stroke vs heat exhaustion — <strong>SWEATING preserved in exhaustion</strong>, ABSENT in stroke',
    'Hypothermia = core &lt; 35°C · Severe &lt; 28°C → VF risk · "Not dead until WARM and dead"',
    '<strong>Pinkish PM lividity</strong> = hypothermia · CO poisoning · cyanide · refrigeration (Ch 7)',
    '<strong>Wischnewski ulcers</strong> = gastric mucosal haemorrhages — pathognomic of hypothermic death',
    'Frostbite = DRY cold &lt; 0°C · 4 degrees · rapid rewarming 40-42°C · <strong>NO rubbing</strong> · delayed amputation',
    'Trench foot = WET cold 5-6°C → obliterating angiitis · differs from frostbite (wet, not frozen)',
    'Pernio (chilblains) = vasculitic response to cold above freezing · pruritus + burning · Rx nifedipine',
    '<strong>Wallace Rule of 9</strong> (adult): head 9 · each upper limb 9 · each lower limb 18 · ant/post trunk 18 each · genitals 1 = 100%',
    '<strong>Lund-Browder</strong>: infant head 19% vs adult 7% · each lower limb 14% (infant) vs 20% (adult)',
    'Patient\'s palm with fingers = <strong>1% TBSA</strong> for all ages — quick bedside method',
    'Parkland formula = <strong>4 mL/kg × %TBSA Ringer\'s lactate in 24 h</strong> (half in first 8 h)',
    'Dupuytren = 6° · Wilson = 3° (merges pairs) · Modern = 2° (superficial / deep)',
    '<strong>Deep burns are LESS PAINFUL</strong> — nerve endings destroyed',
    '<strong>Heat hematoma</strong> = parieto-temporal extradural · honeycomb · tawny brown · <strong>CO in clot confirms heat artefact</strong>',
    'Heat fractures: BURSTING (steam pressure separates sutures) · SURFACE (drying, stellate) · CURVED (long bones)',
    'AM burn markers: <strong>LINE OF REDNESS · CO-Hb &gt; 5% · soot BELOW vocal cords · protein-rich blister</strong>',
    'Enzyme timeline: Cathepsin (immediate) → Serotonin 10m → Histamine 20m → Esterase 1h → Acid phosphatase 3h → Alkaline phosphatase 4h',
    'Heat artefacts (pugilistic · splits · fractures · heat hematoma) DO NOT distinguish AM from PM',
    'Immediate CoD: shock · smoke · CO · laryngeal oedema · escape injuries',
    'Delayed CoD: <strong>sepsis · toxaemia · renal failure (myoglobinuria) · ARDS · Curling\'s ulcer</strong>',
    'Scalds: NO charring · NO singeing · sharp demarcation · <strong>TRICKLE pattern</strong> · clothes wet (may magnify damage)',
    '<strong>BNS 80</strong> (≡ IPC 304-B) — Dowry death within 7 yrs + cruelty = 7 yrs to life',
    '<strong>BNS 85/86</strong> (≡ IPC 498-A) — Cruelty by husband/relative — up to 3 yrs · NEET-PG 2016 Q4',
    '<strong>BSA 117</strong> (≡ IEA 113-A) — MAY presume abetment of suicide · <strong>BSA 118</strong> (≡ IEA 113-B) — SHALL presume dowry death',
    'BNSS 196 — magistrate inquest mandatory in dowry deaths',
    '<strong>AC &gt; DC in lethality</strong> · 50-80 mA AC fatal in seconds · domestic 50 Hz · most dangerous 40-150 Hz',
    '<strong>Joule burn</strong> = endogenous burn at contact point · biscuit brown → charring · I²R × time',
    'Crater (LV) · Spark (gap) · Crocodile (HV multifocal) · Collapsed blister (AC firm contact, umbilicated centre)',
    '<strong>Pale halo</strong> = arteriolar spasm — PATHOGNOMIC of electric injury · persists after death',
    'Lightning = <strong>10-100 million V DC</strong> · duration &lt; 10⁻⁴ sec · current up to 200,000 A',
    '<strong>Lichtenberg figures (filigree)</strong> — fern-leaf · pathognomic of lightning · <strong>FADES in 2-3 days</strong> (photograph immediately) · NEET-PG 2021 Q3',
    'Lightning-specific: <strong>tympanic rupture + magnetised metal + boots/belts burst open</strong>',
    'See subject-pinned <strong>IPC ↔ BNS Quick-Reference Card</strong> + <strong>Subject Subjective Q-Bank</strong>'
  ]
};
})();
