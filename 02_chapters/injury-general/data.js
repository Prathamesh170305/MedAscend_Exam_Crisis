/* ===================================================================
   Medascend FMT — Chapter 8: Injury — General Considerations & Biophysics
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

const SVG_IG01 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Injury — Definition &amp; Master Overview</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">★ Section 44 IPC / BNS 2 — injury · Hurt = BNS 114 (IPC 319)</text>

<g data-node-id="ig-def"><rect class="nbcr" x="60" y="110" width="1480" height="170" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚖️ INJURY — Statutory Definition</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">★ <strong>Section 44 IPC (now BNS Section 2(14))</strong> defines INJURY as: "any harm caused ILLEGALLY to a person in <strong>body · mind · reputation · property</strong>".</text><text x="90" y="210" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">★ <strong>Section 319 IPC (now BNS Section 114)</strong> defines HURT: "Whoever causes <strong>bodily PAIN · disease · INFIRMITY</strong> to any person is said to cause hurt."</text><text x="90" y="240" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">★ Legal conception of WOUND is broader than medical — "any lesion, external or internal, caused by violence, with or without breach of continuity of skin".</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-salient"><rect x="60" y="310" width="730" height="320" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="425" y="350" class="t-nlg" text-anchor="middle">📋 Salient Features of Injury Definition</text><text x="90" y="395" class="t-body" font-weight="700">1. ★ Wider meaning than medical:</text><text x="90" y="420" class="t-body">    Includes bodily harm + mental suffering + reputation + property</text><text x="90" y="460" class="t-body" font-weight="700">2. ★ Use of word "ILLEGAL":</text><text x="90" y="485" class="t-body">    Not all injuries are illegal — surgery is LEGAL injury (done with consent)</text><text x="90" y="515" class="t-body">    Hence "illegal" exempts therapeutic + consented procedures</text><text x="90" y="550" class="t-body" font-weight="700">3. "Hurt" (BNS 114 / IPC 319):</text><text x="90" y="575" class="t-body">    Bodily pain · disease · infirmity to a person</text><text x="90" y="600" class="t-body">    Distinguishes from "wound" which is medical term</text><circle class="ic" cx="770" cy="328" r="14"/><text class="t-info" x="770" y="334" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-medical-vs-legal"><rect x="810" y="310" width="730" height="320" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="1175" y="350" class="t-nlg" text-anchor="middle">⚖️ Medical vs Legal Perception</text><text x="830" y="395" class="t-body" font-weight="700">★ MEDICAL view of injury:</text><text x="830" y="420" class="t-body">• Anatomical lesion (skin/tissue break, fracture, hemorrhage)</text><text x="830" y="445" class="t-body">• Focus on cause + mechanism + healing</text><text x="830" y="485" class="t-body" font-weight="700">★ LEGAL view of injury:</text><text x="830" y="510" class="t-body">• "Any harm" — broader than medical lesion</text><text x="830" y="535" class="t-body">• Includes mind · reputation · property damage</text><text x="830" y="560" class="t-body">• Term "wound" not statutorily defined in Indian law</text><text x="830" y="585" class="t-body">• ★ "Hurt" used instead — codified in BNS 114 / IPC 319</text><circle class="ic" cx="1520" cy="328" r="14"/><text class="t-info" x="1520" y="334" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-classifications"><rect x="60" y="660" width="1480" height="220" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="800" y="700" class="t-nlg" text-anchor="middle">📚 ★ 4 Classifications of Injury</text><text x="90" y="735" class="t-body" font-weight="700">I. According to CAUSATIVE FORCE (most important):</text><text x="90" y="760" class="t-body">    A) Mechanical (blunt · sharp · piercing · firearm) · B) Thermal (cold · heat) · C) Chemical (corrosion · irritation) · D) Miscellaneous (electricity · lightning · X-rays · radioactive)</text><text x="90" y="795" class="t-body" font-weight="700">II. MEDICOLEGAL classification:</text><text x="90" y="820" class="t-body">    Suicidal / self-inflicted · Homicidal · Accidental · Defence wounds · Fabricated wounds</text><text x="90" y="850" class="t-body" font-weight="700">III. RELATION TO DEATH:</text><text x="90" y="875" class="t-body">    Antemortem (with vital reaction) · Postmortem (no vital reaction)</text><circle class="ic" cx="1510" cy="678" r="14"/><text class="t-info" x="1510" y="684" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-legal-class"><rect x="60" y="910" width="900" height="150" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="510" y="950" class="t-nlg" text-anchor="middle">⚖️ IV. LEGAL Classification</text><text x="90" y="985" class="t-body">• <strong>SIMPLE injury</strong> — minor; heals without complication; small fine / brief imprisonment</text><text x="90" y="1010" class="t-body">• <strong>GRIEVOUS injury / hurt</strong> — 8 specific categories (BNS 116 / IPC 320) — see Ch 13</text><text x="90" y="1035" class="t-body" font-style="italic">★ "Dangerous injury" — endangers life · separate from simple/grievous in older Indian law</text><circle class="ic" cx="940" cy="928" r="14"/><text class="t-info" x="940" y="934" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-bns-map"><rect x="980" y="910" width="560" height="150" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="950" class="t-nlg" text-anchor="middle">📜 IPC → BNS Sections (2023)</text><text x="1000" y="985" class="t-body">• IPC §44 → ★ <strong>BNS §2(14)</strong> — Injury</text><text x="1000" y="1010" class="t-body">• IPC §319 → ★ <strong>BNS §114</strong> — Hurt</text><text x="1000" y="1035" class="t-body">• IPC §320 → ★ <strong>BNS §116</strong> — Grievous hurt (8 clauses)</text><circle class="ic" cx="1520" cy="928" r="14"/><text class="t-info" x="1520" y="934" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_IG02 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ Classification of Injuries by Causative Force</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Mechanical · Thermal · Chemical · Miscellaneous (electricity, lightning, radiation)</text>

<g data-node-id="ig-mech"><rect x="60" y="110" width="730" height="380" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="425" y="150" class="t-nlg" text-anchor="middle">⚙️ A. MECHANICAL Injuries (Ch 9)</text><text x="90" y="190" class="t-body" font-weight="700">1. Blunt force injuries:</text><text x="90" y="215" class="t-body">    • Abrasion · Contusion · Laceration</text><text x="90" y="240" class="t-body">    • Fracture / dislocation of teeth / bone</text><text x="90" y="275" class="t-body" font-weight="700">2. Sharp-edged weapon injuries:</text><text x="90" y="300" class="t-body">    • Incised wounds (cut · slash · slice)</text><text x="90" y="325" class="t-body">    • Chop wounds (sharp + heavy weapons)</text><text x="90" y="360" class="t-body" font-weight="700">3. Piercing weapons:</text><text x="90" y="385" class="t-body">    • Stab wounds (penetrating · perforating)</text><text x="90" y="420" class="t-body" font-weight="700">4. Firearm weapons (Ch 10):</text><text x="90" y="445" class="t-body">    • Firearm wounds (entry · exit · ricochet · GSR)</text><text x="90" y="475" class="t-body" font-style="italic">★ Covered in detail in Ch 9 (Mechanical) + Ch 10 (Firearm)</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-thermal"><rect x="810" y="110" width="730" height="380" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1175" y="150" class="t-nlg" text-anchor="middle">🔥 B. THERMAL Injuries (Ch 14)</text><text x="830" y="190" class="t-body" font-weight="700">1. ★ Due to COLD:</text><text x="830" y="215" class="t-body">    • Frostbite · Trench foot · Immersion foot</text><text x="830" y="240" class="t-body">    • Hypothermia (Ch 14)</text><text x="830" y="280" class="t-body" font-weight="700">2. ★ Due to HEAT:</text><text x="830" y="305" class="t-body">    • Burns (flame · contact · electrical · chemical)</text><text x="830" y="330" class="t-body">    • Scalds (hot liquid · steam)</text><text x="830" y="355" class="t-body">    • Heat stroke · heat exhaustion · heat cramps</text><text x="830" y="395" class="t-body" font-weight="700">3. Related — LIGHTNING:</text><text x="830" y="420" class="t-body">    • Lichtenberg figures · arborescent burn marks</text><text x="830" y="450" class="t-body" font-style="italic">★ Detailed in Ch 14 — Thermal Injuries</text><circle class="ic" cx="1520" cy="128" r="14"/><text class="t-info" x="1520" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-chemical"><rect x="60" y="520" width="730" height="280" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="425" y="560" class="t-nlg" text-anchor="middle">🧪 C. CHEMICAL Injuries (Ch 34)</text><text x="90" y="600" class="t-body" font-weight="700">1. CORROSION:</text><text x="90" y="625" class="t-body">    • Corrosive ACIDS (sulphuric · nitric · hydrochloric)</text><text x="90" y="650" class="t-body">    • Corrosive ALKALIS (NaOH · KOH · ammonia)</text><text x="90" y="675" class="t-body">    • Metal SALTS (mercuric chloride, zinc chloride)</text><text x="90" y="715" class="t-body" font-weight="700">2. IRRITATION:</text><text x="90" y="740" class="t-body">    • Weak acids OR weak alkali</text><text x="90" y="775" class="t-body" font-style="italic">★ Detailed in Ch 34 — Corrosive Poisons (Toxicology)</text><circle class="ic" cx="770" cy="538" r="14"/><text class="t-info" x="770" y="544" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-misc"><rect x="810" y="520" width="730" height="280" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1175" y="560" class="t-nlg" text-anchor="middle">⚡ D. MISCELLANEOUS Injuries</text><text x="830" y="600" class="t-body" font-weight="700">1. ELECTRICITY (Ch 14):</text><text x="830" y="625" class="t-body">    • Joule burn · Filigree burn · entry/exit marks</text><text x="830" y="660" class="t-body" font-weight="700">2. LIGHTNING (Ch 14):</text><text x="830" y="685" class="t-body">    • Lichtenberg figures (arborescent burns)</text><text x="830" y="720" class="t-body" font-weight="700">3. X-RAYS:</text><text x="830" y="745" class="t-body">    • Radiation burns · cataract (occupational)</text><text x="830" y="775" class="t-body" font-weight="700">4. RADIOACTIVE substances</text><circle class="ic" cx="1520" cy="538" r="14"/><text class="t-info" x="1520" y="544" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-summary-table"><rect x="60" y="830" width="1480" height="230" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="870" class="t-nlg" text-anchor="middle">📋 Cross-Chapter Map of Injury Subtypes</text><text x="90" y="905" class="t-body">• <strong>Mechanical</strong> → Chapter 9 (general) + Chapter 11 (regional) + Chapter 12 (RTA)</text><text x="90" y="930" class="t-body">• <strong>Thermal</strong> → Chapter 14 (burns · scalds · cold · electricity · lightning)</text><text x="90" y="955" class="t-body">• <strong>Chemical</strong> → Chapter 34 (corrosive poisons)</text><text x="90" y="985" class="t-body">• <strong>Firearm</strong> → Chapter 10 (firearm + bomb blast)</text><text x="90" y="1015" class="t-body">• <strong>Asphyxial</strong> (overlap) → Chapter 15 (Violent Asphyxia)</text><circle class="ic" cx="1510" cy="848" r="14"/><text class="t-info" x="1510" y="854" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_IG03 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Medicolegal &amp; Death-Relation Classification</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">5 medicolegal categories · Antemortem vs Postmortem · Simple vs Grievous</text>

<g data-node-id="ig-mlc"><rect x="60" y="110" width="1480" height="380" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="150" class="t-nlg" text-anchor="middle">⚖️ II. MEDICOLEGAL Classification — 5 Categories</text><text x="90" y="190" class="t-body" font-weight="700">1. ★ SUICIDAL / SELF-INFLICTED injury</text><text x="90" y="215" class="t-body">    • Accessible site · multiple wounds with varying depth · hesitation cuts · clothes spared</text><text x="90" y="240" class="t-body">    • Suicide note · secluded location · weapon at hand</text><text x="90" y="280" class="t-body" font-weight="700">2. ★ HOMICIDAL injury</text><text x="90" y="305" class="t-body">    • Single or few deep wounds · no hesitation · defence wounds present · clothes cut</text><text x="90" y="330" class="t-body">    • Scene disturbed · weapon often absent</text><text x="90" y="370" class="t-body" font-weight="700">3. ★ ACCIDENTAL injury</text><text x="90" y="395" class="t-body">    • Pattern matches circumstance · no intent</text><text x="90" y="425" class="t-body" font-weight="700">4. ★ DEFENCE wounds</text><text x="90" y="450" class="t-body">    • Hands, forearms (palmar surface) · victim raised hands to ward off attacker</text><circle class="ic" cx="1510" cy="128" r="14"/><text class="t-info" x="1510" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-fabricated"><rect x="60" y="520" width="730" height="280" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="425" y="560" class="t-nlg" text-anchor="middle">🎭 5. FABRICATED Wounds</text><text x="90" y="600" class="t-body">★ Self-inflicted wounds with intent to:</text><text x="90" y="630" class="t-body">• Falsely implicate another person</text><text x="90" y="655" class="t-body">• Claim insurance / compensation</text><text x="90" y="680" class="t-body">• Escape duty / avoid prosecution</text><text x="90" y="710" class="t-body" font-weight="700">★ Features suggesting fabricated:</text><text x="90" y="735" class="t-body">• Within reach of victim&apos;s own hand</text><text x="90" y="760" class="t-body">• Multiple superficial parallel wounds</text><text x="90" y="785" class="t-body">• Spare vital areas · cloth not corresponding</text><circle class="ic" cx="770" cy="538" r="14"/><text class="t-info" x="770" y="544" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-am-pm"><rect x="810" y="520" width="730" height="280" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="1175" y="560" class="t-nlg" text-anchor="middle">⏰ III. Antemortem vs Postmortem</text><text x="830" y="600" class="t-body" font-weight="700">★ ANTEMORTEM injury:</text><text x="830" y="625" class="t-body">• ★ Vital reaction PRESENT</text><text x="830" y="650" class="t-body">• Active bleeding · clot formation</text><text x="830" y="675" class="t-body">• PMN infiltrate · fibrin</text><text x="830" y="700" class="t-body">• Erythema · swelling · cellular changes</text><text x="830" y="735" class="t-body" font-weight="700">★ POSTMORTEM injury:</text><text x="830" y="760" class="t-body">• ★ Vital reaction ABSENT</text><text x="830" y="785" class="t-body">• Minimal/no bleeding · NO erythema</text><circle class="ic" cx="1520" cy="538" r="14"/><text class="t-info" x="1520" y="544" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-simple-grievous"><rect x="60" y="830" width="1480" height="230" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="800" y="870" class="t-nlg" text-anchor="middle">⚖️ IV. LEGAL Classification — Simple vs Grievous</text><text x="90" y="905" class="t-body" font-weight="700">SIMPLE injury (BNS 115 / IPC 323):</text><text x="90" y="930" class="t-body">• Heals without complication · short healing time · no permanent disability</text><text x="90" y="960" class="t-body" font-weight="700">★ GRIEVOUS hurt (BNS 116 / IPC 320) — 8 clauses (see Ch 13):</text><text x="90" y="985" class="t-body">    Emasculation · permanent loss of sight/hearing · loss of limb · permanent disfigurement of head/face · fracture/dislocation of bone/tooth · hurt that endangers life or pain &gt; 20 days</text><text x="90" y="1015" class="t-body" font-style="italic">★ Detailed in Ch 13 — Injury: Medicolegal Considerations</text><circle class="ic" cx="1510" cy="848" r="14"/><text class="t-info" x="1510" y="854" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_IG04 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Forensic Anatomy of Skin — 5 Epidermal Layers</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">★ 4 kg · 2 m² · stratum corneum thickness varies regionally · no vessels in epidermis</text>

<g data-node-id="ig-skin-intro"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🩹 SKIN — Forensic Anatomy</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">★ Weight: <strong>4 kg</strong> · Surface area: <strong>2 m²</strong> · Three layers: <strong>EPIDERMIS</strong> · <strong>DERMIS</strong> · <strong>HYPODERMIS</strong>. Epidermis is avascular (no blood vessels). Forensic importance — thickness determines force needed to break skin + reach vessels.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-epidermis"><rect x="60" y="240" width="730" height="380" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="425" y="280" class="t-nlg" text-anchor="middle">📚 ★ 5 Layers of EPIDERMIS</text><text x="90" y="320" class="t-body" font-weight="700">From deep to superficial:</text><text x="90" y="355" class="t-body">1. ★ <strong>Stratum BASALE</strong> (basal layer / stratum germinativum)</text><text x="90" y="375" class="t-body">    — single layer; cell division here</text><text x="90" y="405" class="t-body">2. ★ <strong>Stratum SPINOSUM</strong> (prickle cell / Malpighian layer)</text><text x="90" y="425" class="t-body">    — desmosomes "spines"</text><text x="90" y="455" class="t-body">3. ★ <strong>Stratum GRANULOSUM</strong> (granular cell layer)</text><text x="90" y="475" class="t-body">    — keratohyalin granules</text><text x="90" y="505" class="t-body">4. <strong>Stratum LUCIDUM</strong></text><text x="90" y="525" class="t-body">    — thick on palms / soles only</text><text x="90" y="555" class="t-body">5. ★ <strong>Stratum CORNEUM</strong> (horny layer)</text><text x="90" y="575" class="t-body">    — most superficial · keratinized DEAD cells</text><text x="90" y="600" class="t-body" font-style="italic">Mnemonic: "★ BASAL → SPINY → GRAINS → LIGHTNING → HORNS"</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-thickness"><rect x="810" y="240" width="730" height="380" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="1175" y="280" class="t-nlg" text-anchor="middle">📏 ★ Thickness — Forensic Importance</text><text x="830" y="320" class="t-body">★ <strong>Stratum corneum thickness VARIES by region:</strong></text><text x="830" y="355" class="t-body">• <strong>★ Palms + Soles</strong> — THICKEST (most resistant to abrasion)</text><text x="830" y="385" class="t-body">• Protected areas:</text><text x="830" y="410" class="t-body">    — ★ <strong>SCROTUM</strong> + <strong>EYELIDS</strong> — fraction of mm (THINNEST)</text><text x="830" y="445" class="t-body" font-weight="700">★ Forensic relevance:</text><text x="830" y="470" class="t-body">• Determines AMOUNT of force needed to penetrate skin</text><text x="830" y="495" class="t-body">• Determines amount of force to allow bleeding from underlying tissues</text><text x="830" y="530" class="t-body">• Eyelids/scrotum injuries are FORENSIC FLAGS</text><text x="830" y="555" class="t-body">    (thin skin breaks easily → suggests greater force OR weak attacker)</text><circle class="ic" cx="1520" cy="258" r="14"/><text class="t-info" x="1520" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-dermis"><rect x="60" y="650" width="730" height="200" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="425" y="690" class="t-nlg" text-anchor="middle">🩸 DERMIS Layer</text><text x="90" y="725" class="t-body">• Contains <strong>BLOOD VESSELS</strong>, nerves, hair follicles, sweat + sebaceous glands</text><text x="90" y="755" class="t-body">• ★ Abrasions usually DON&apos;T bleed (vessels in dermis · epidermis avascular)</text><text x="90" y="785" class="t-body">• ★ Due to CORRUGATED dermal papillae, dermis often IS involved → abrasion bleeds</text><text x="90" y="815" class="t-body">• Dermal injury required for true scarring</text><circle class="ic" cx="770" cy="668" r="14"/><text class="t-info" x="770" y="674" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-hypodermis"><rect x="810" y="650" width="730" height="200" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1175" y="690" class="t-nlg" text-anchor="middle">🧈 HYPODERMIS (Subcutis)</text><text x="830" y="725" class="t-body">• Subcutaneous tissue — adipose + connective tissue</text><text x="830" y="755" class="t-body">• Provides <strong>CUSHIONING</strong> effect for ordinary blows</text><text x="830" y="785" class="t-body">• Severe blunt blows crush capillaries → contusion + lacerations</text><text x="830" y="815" class="t-body">• Fat embolism possible from extensive crush</text><circle class="ic" cx="1520" cy="668" r="14"/><text class="t-info" x="1520" y="674" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-skin-resistance"><rect x="60" y="880" width="1480" height="180" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="800" y="920" class="t-nlg" text-anchor="middle">⚙️ Skin Resistance Hierarchy (Stab Wounds)</text><text x="90" y="955" class="t-body">★ Resistance to stab wound (highest to lowest):</text><text x="90" y="985" class="t-body">• <strong>Calcified cartilage / BONE</strong> (most resistant)</text><text x="90" y="1010" class="t-body">• <strong>SKIN</strong> (very resistant due to keratinized cells + firm cohesion)</text><text x="90" y="1035" class="t-body">• <strong>MUSCLE</strong> (less resistant) · <strong>SubQ fat</strong> (least)</text><circle class="ic" cx="1510" cy="898" r="14"/><text class="t-info" x="1510" y="904" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_IG05 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ Biophysics of Wounding — Force, Mass, Velocity</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">F = ½ M·V² · velocity matters more than mass · force-area inverse</text>

<g data-node-id="ig-biophysics"><rect class="nbcr" x="60" y="110" width="1480" height="120" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚙️ BIOPHYSICS — Wound Production</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">A wound is produced when the <strong>INTENSITY of APPLIED FORCE EXCEEDS the CAPABILITY of TISSUES</strong> to adapt / resist. Body absorbs mechanical force via <strong>(1) resilience &amp; elasticity of soft tissues</strong> or <strong>(2) rigid strength of skeletal framework</strong>.</text><text x="90" y="210" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">A wound is produced when the propelling force of weapon meets counter-force of body — energy transferred to tissues produces changes in their state of rest/motion.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-kinetic"><rect x="60" y="260" width="730" height="380" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="425" y="300" class="t-nlg" text-anchor="middle">📐 ★ Kinetic Energy Formula</text><text x="90" y="340" class="t-body" font-weight="700">★ F α M (mass) — linear relationship</text><text x="90" y="370" class="t-body" font-weight="700">★ F α V² (velocity) — exponential relationship</text><text x="90" y="410" class="t-body" font-weight="700">★ Force = ½ × Mass × Velocity²    (KE = ½ MV²)</text><text x="90" y="450" class="t-body" font-weight="700">★ Key implications:</text><text x="90" y="480" class="t-body">• Doubling MASS → KE doubles (×2)</text><text x="90" y="505" class="t-body">• Doubling VELOCITY → KE quadruples (×4)</text><text x="90" y="540" class="t-body">★ Therefore <strong>VELOCITY is more important than MASS</strong></text><text x="90" y="575" class="t-body" font-style="italic">★ Example: a 1-kg brick pressed against scalp causes no injury;</text><text x="90" y="600" class="t-body" font-style="italic">    same 1-kg brick thrown at 10 ft/s may break the skull.</text><circle class="ic" cx="770" cy="278" r="14"/><text class="t-info" x="770" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-area"><rect x="810" y="260" width="730" height="380" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="1175" y="300" class="t-nlg" text-anchor="middle">📏 ★ Force-Area Relationship</text><text x="830" y="340" class="t-body" font-weight="700">★ Force per unit AREA = PRESSURE</text><text x="830" y="370" class="t-body">• Same force over SMALLER area → GREATER damage</text><text x="830" y="395" class="t-body">• Same force over LARGER area → LESS damage</text><text x="830" y="430" class="t-body" font-style="italic">★ Example: a plank of wood — narrow edge causes more damage</text><text x="830" y="455" class="t-body" font-style="italic">    than flat broad surface against skin.</text><text x="830" y="495" class="t-body" font-weight="700">★ Practical applications:</text><text x="830" y="520" class="t-body">• Sharp weapon → small contact area → deep penetrating injury</text><text x="830" y="545" class="t-body">• Blunt broad surface → force dissipated over large area → less damage</text><text x="830" y="580" class="t-body">• Rigid weapon → more damage than plastic / flexible</text><text x="830" y="605" class="t-body">• If weapon BREAKS on impact → KE lost → less damage</text><circle class="ic" cx="1520" cy="278" r="14"/><text class="t-info" x="1520" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-counter-force"><rect x="60" y="670" width="900" height="240" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="510" y="710" class="t-nlg" text-anchor="middle">⚖️ Counter Force — 2 Scenarios</text><text x="90" y="745" class="t-body" font-weight="700">A wound results from physical contact between weapon and body:</text><text x="90" y="780" class="t-body">★ Scenario 1: MOVING WEAPON strikes STATIONARY BODY</text><text x="90" y="805" class="t-body">    → Counter-force = INERTIA of body</text><text x="90" y="840" class="t-body">★ Scenario 2: MOVING BODY strikes STATIONARY OBJECT</text><text x="90" y="865" class="t-body">    → Counter-force = RIGIDITY of stationary object/weapon</text><text x="90" y="895" class="t-body" font-style="italic">★ Usually BOTH counter-forces are combined in real-world incidents</text><circle class="ic" cx="940" cy="688" r="14"/><text class="t-info" x="940" y="694" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-tissue-props"><rect x="980" y="670" width="560" height="240" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1260" y="710" class="t-nlg" text-anchor="middle">🧬 Tissue Physical Properties</text><text x="1000" y="745" class="t-body">Body is composed of tissues with varied physical properties:</text><text x="1000" y="780" class="t-body">1. ★ <strong>State of SOLIDITY</strong></text><text x="1000" y="805" class="t-body">2. ★ <strong>FLUIDITY</strong></text><text x="1000" y="830" class="t-body">3. ★ <strong>DENSITY</strong></text><text x="1000" y="855" class="t-body">4. ★ <strong>ELASTICITY</strong></text><text x="1000" y="890" class="t-body" font-style="italic">★ Forceful impact does NOT affect all tissues uniformly</text><circle class="ic" cx="1520" cy="688" r="14"/><text class="t-info" x="1520" y="694" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-conditions"><rect x="60" y="930" width="1480" height="130" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="800" y="965" class="t-nlg" text-anchor="middle">⚡ Conditions of Energy Discharge</text><text x="90" y="1000" class="t-body">• If person is KNOCKED DOWN by impact → KE liberated is SMALL → local damage LESS</text><text x="90" y="1025" class="t-body">• If person STANDS still and sustains impact → immobilised → MORE KE liberated → GREATER damage</text><text x="90" y="1050" class="t-body">• Longer time of energy discharge → less destructive effect on target tissues</text><circle class="ic" cx="1510" cy="948" r="14"/><text class="t-info" x="1510" y="954" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_IG06 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ 3 Primary Forces Acting on Body</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Tensile (traction) · Compressive · Shearing — each produces distinct injury patterns</text>

<g data-node-id="ig-forces-intro"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚙️ 3 PRIMARY FORCES — Overview</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">All forces acting on body can be reduced to 3 primary types: <strong>TENSILE</strong> (pulls apart) · <strong>COMPRESSIVE</strong> (pushes together) · <strong>SHEARING</strong> (slides one part over another). Each produces characteristic injury patterns based on tissue properties.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-tensile"><rect x="60" y="240" width="490" height="380" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="305" y="280" class="t-nlg" text-anchor="middle">1️⃣ TENSILE Force</text><text x="80" y="320" class="t-body" font-weight="700">★ "Traction-strain" / pulling-apart force</text><text x="80" y="350" class="t-body">• Pulls a body apart</text><text x="80" y="375" class="t-body">• If sufficient, may cause SEPARATION of body into parts</text><text x="80" y="410" class="t-body" font-weight="700">★ Tissue response:</text><text x="80" y="435" class="t-body">• Skin RESISTS due to firm cohesion of keratinised cells</text><text x="80" y="460" class="t-body">• Tissues rupture when STRETCHED beyond their tensile strength</text><text x="80" y="495" class="t-body" font-weight="700">Examples:</text><text x="80" y="520" class="t-body">• Avulsion injuries — limb torn off</text><text x="80" y="545" class="t-body">• Mesenteric tear — sudden deceleration</text><text x="80" y="570" class="t-body">• Spinal cord stretch in fall from height</text><text x="80" y="595" class="t-body">• Splenic / liver capsule tear</text><circle class="ic" cx="530" cy="258" r="14"/><text class="t-info" x="530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-compressive"><rect x="570" y="240" width="490" height="380" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="815" y="280" class="t-nlg" text-anchor="middle">2️⃣ COMPRESSIVE Force</text><text x="590" y="320" class="t-body" font-weight="700">★ "Compression-strain" / pushing-together force</text><text x="590" y="350" class="t-body">• Tends to push body together</text><text x="590" y="375" class="t-body">• If sufficient, body may break into pieces</text><text x="590" y="410" class="t-body" font-weight="700">★ Tissue response:</text><text x="590" y="435" class="t-body">• ★ ALL tissues EXCEPT gas-containing RESIST compression</text><text x="590" y="460" class="t-body">    (will not reduce in volume)</text><text x="590" y="495" class="t-body" font-weight="700">Examples:</text><text x="590" y="520" class="t-body">• ★ Sudden chest compression → facial/neck/shoulder petechiae</text><text x="590" y="545" class="t-body">    (retrograde venous blood displacement)</text><text x="590" y="575" class="t-body">• Crush injuries in building collapse</text><text x="590" y="600" class="t-body">• Bone fracture from direct blow</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-shearing"><rect x="1080" y="240" width="460" height="380" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1310" y="280" class="t-nlg" text-anchor="middle">3️⃣ SHEARING Force</text><text x="1100" y="320" class="t-body" font-weight="700">★ "Shear-strain" / sliding force</text><text x="1100" y="350" class="t-body">• Slides one part of body over</text><text x="1100" y="375" class="t-body">  adjacent part</text><text x="1100" y="410" class="t-body" font-weight="700">★ Tissue response:</text><text x="1100" y="435" class="t-body">• Produces ALTERATION in body SHAPE</text><text x="1100" y="460" class="t-body">• ★ Does NOT change body volume</text><text x="1100" y="495" class="t-body" font-weight="700">Examples:</text><text x="1100" y="520" class="t-body">• ★ Diffuse axonal injury (DAI)</text><text x="1100" y="545" class="t-body">    — Ch 11 brain injury</text><text x="1100" y="570" class="t-body">• Aortic shear at ligamentum</text><text x="1100" y="595" class="t-body">    arteriosum in deceleration RTA</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-tissue-types"><rect x="60" y="650" width="1480" height="410" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="800" y="690" class="t-nlg" text-anchor="middle">🧬 5 Tissue Types — Force Responses</text><text x="90" y="730" class="t-body" font-weight="700">A) SKIN:</text><text x="90" y="755" class="t-body">• Pliable + little elastic · readily affected by blunt impact · resistant to traction (keratin cohesion)</text><text x="90" y="780" class="t-body">• ★ Skin SPLITS when struck + crushed against rigid bone</text><text x="90" y="815" class="t-body" font-weight="700">B) SUBCUTANEOUS TISSUE:</text><text x="90" y="840" class="t-body">• Plastic + pliable due to fat + connective tissue fibres · cushions ordinary blows</text><text x="90" y="865" class="t-body">• Severe blunt blows crush vessels → fat droplet displacement → contusion / laceration</text><text x="90" y="900" class="t-body" font-weight="700">C) MUSCLE: elastic + plastic · resists impact to limit · then avulsed/torn/ruptured</text><text x="90" y="935" class="t-body" font-weight="700">D) BONE: rigid + elastic · bends without breaking and recoils · ★ greenstick # if elastic limit exceeded; spiral # from twisting strain</text><text x="90" y="975" class="t-body" font-weight="700">E) BODY FLUID + GAS:</text><text x="90" y="1000" class="t-body">• Fluid easily displaced, cannot be compressed</text><text x="90" y="1025" class="t-body">• Gas can be compressed → violent compression sets up powerful pneumostatic force (★ blast injury)</text><circle class="ic" cx="1510" cy="668" r="14"/><text class="t-info" x="1510" y="674" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_IG07 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ 4 Factors Influencing Wound Causation</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Nature of weapon · Energy discharged · Conditions · Tissue affected</text>

<g data-node-id="ig-factors-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🎯 4 FACTORS Influencing Wound Causation</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Whether a wound forms — and how severe — depends on: (1) Nature of object/weapon, (2) Amount of energy discharged, (3) Conditions under which energy is discharged, (4) Nature of tissue affected.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-factor1"><rect x="60" y="240" width="730" height="380" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="425" y="280" class="t-nlg" text-anchor="middle">1️⃣ Nature of Object / Weapon</text><text x="90" y="320" class="t-body" font-weight="700">★ Sharp vs Blunt:</text><text x="90" y="345" class="t-body">• Sharp weapon → force concentrated on small area → ★ DEEP penetrating injury</text><text x="90" y="380" class="t-body">• Blunt broad weapon → force DISSIPATED over larger area → less damage</text><text x="90" y="420" class="t-body" font-weight="700">★ Rigid vs Plastic:</text><text x="90" y="445" class="t-body">• Rigid weapon → MORE damage</text><text x="90" y="470" class="t-body">• Plastic / flexible weapon → less damage</text><text x="90" y="510" class="t-body" font-weight="700">★ Weapon breaks on impact:</text><text x="90" y="535" class="t-body">• Much kinetic energy LOST → LESS damage</text><text x="90" y="570" class="t-body" font-style="italic">Examples: knife = sharp; iron rod = rigid blunt; bamboo = elastic blunt</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-factor2"><rect x="810" y="240" width="730" height="380" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="1175" y="280" class="t-nlg" text-anchor="middle">2️⃣ Amount of Energy Discharged</text><text x="830" y="320" class="t-body" font-weight="700">★ Kinetic energy = ½ M·V²</text><text x="830" y="360" class="t-body">• Mass-energy relationship is LINEAR (double mass = double energy)</text><text x="830" y="385" class="t-body">• ★ Velocity-energy relationship is EXPONENTIAL</text><text x="830" y="410" class="t-body">    (double velocity = QUADRUPLE energy)</text><text x="830" y="445" class="t-body" font-weight="700">★ Practical implication:</text><text x="830" y="470" class="t-body">• <strong>VELOCITY is MORE IMPORTANT than mass</strong></text><text x="830" y="495" class="t-body">• Explains why bullets cause severe damage despite small mass</text><text x="830" y="520" class="t-body">• A flying brick (high V) does more than the same brick pressed (zero V)</text><text x="830" y="555" class="t-body" font-style="italic">Examples: bullet 8 g at 800 m/s → fatal; same bullet thrown by hand → harmless</text><circle class="ic" cx="1520" cy="258" r="14"/><text class="t-info" x="1520" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-factor3"><rect x="60" y="650" width="730" height="380" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="425" y="690" class="t-nlg" text-anchor="middle">3️⃣ Conditions of Energy Discharge</text><text x="90" y="730" class="t-body" font-weight="700">★ Whether person is mobilised or static:</text><text x="90" y="765" class="t-body">• ★ Person KNOCKED DOWN by impact → KE liberated SMALL → less damage</text><text x="90" y="790" class="t-body">    (energy dissipated into motion of victim)</text><text x="90" y="825" class="t-body">• ★ Person STANDS STILL + sustains impact → immobilised</text><text x="90" y="850" class="t-body">    → MORE KE liberated to tissues → GREATER damage</text><text x="90" y="890" class="t-body" font-weight="700">★ Time of energy discharge:</text><text x="90" y="915" class="t-body">• Longer time → less destructive effect on target tissues</text><text x="90" y="940" class="t-body">    (force averaged over more area + time)</text><text x="90" y="975" class="t-body" font-style="italic">Forensic significance: explains why victim braced against wall has worse injury than thrown back.</text><circle class="ic" cx="770" cy="668" r="14"/><text class="t-info" x="770" y="674" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-factor4"><rect x="810" y="650" width="730" height="380" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1175" y="690" class="t-nlg" text-anchor="middle">4️⃣ Nature of Tissue Affected</text><text x="830" y="730" class="t-body" font-weight="700">★ Different tissues respond differently:</text><text x="830" y="770" class="t-body">• <strong>SKIN</strong> — pliable, little elastic, resistant to traction</text><text x="830" y="800" class="t-body">• <strong>SubQ TISSUE</strong> — plastic cushion · ordinary blows OK</text><text x="830" y="830" class="t-body">• <strong>MUSCLE</strong> — elastic + plastic, can absorb until limit</text><text x="830" y="860" class="t-body">• <strong>BONE</strong> — rigid + elastic, ★ greenstick # if young / spiral # if twisted</text><text x="830" y="890" class="t-body">• <strong>FLUID</strong> — incompressible → can transmit force</text><text x="830" y="920" class="t-body">• <strong>GAS</strong> — compressible → ★ blast injury when violently compressed</text><text x="830" y="960" class="t-body" font-style="italic">★ Tissue properties determine WHERE wound forms (e.g., skin splits when crushed against bone underneath).</text><circle class="ic" cx="1520" cy="668" r="14"/><text class="t-info" x="1520" y="674" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_IG08 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Tissue-Specific Response to Force</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Skin · Subcutaneous · Muscle · Bone · Body fluids/gases</text>

<g data-node-id="ig-skin-response"><rect x="60" y="110" width="490" height="300" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="305" y="150" class="t-nlg" text-anchor="middle">🩹 SKIN Response</text><text x="80" y="190" class="t-body">• Pliable but little elastic</text><text x="80" y="215" class="t-body">• Resistant to TRACTION (keratin cohesion)</text><text x="80" y="245" class="t-body">• Struck by BLUNT weapon → cells flatten/elongate</text><text x="80" y="270" class="t-body">  but skin less damaged than subQ tissue</text><text x="80" y="305" class="t-body">• ★ Skin SPLITS when struck + crushed against rigid bone</text><text x="80" y="335" class="t-body" font-weight="700">Resistance to STAB wound:</text><text x="80" y="360" class="t-body">★ Calcified cartilage / bone &gt; SKIN &gt; muscle &gt; subQ fat</text><text x="80" y="385" class="t-body">★ Eyelids + scrotum = thinnest → split easily</text><circle class="ic" cx="530" cy="128" r="14"/><text class="t-info" x="530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-subq-response"><rect x="570" y="110" width="490" height="300" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="815" y="150" class="t-nlg" text-anchor="middle">🧈 SubQ TISSUE Response</text><text x="590" y="190" class="t-body">• Plastic + pliable</text><text x="590" y="215" class="t-body">• Fat + supporting connective tissue fibres</text><text x="590" y="245" class="t-body">★ Acts as CUSHION for body</text><text x="590" y="275" class="t-body">• Ordinary blows absorbed</text><text x="590" y="310" class="t-body" font-weight="700">★ With SEVERE blunt blows:</text><text x="590" y="335" class="t-body">• Subcutaneous vessels CRUSHED</text><text x="590" y="360" class="t-body">• Fat droplets displaced</text><text x="590" y="385" class="t-body">• Connective tissue framework torn → CONTUSION or LACERATION</text><circle class="ic" cx="1050" cy="128" r="14"/><text class="t-info" x="1050" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-muscle-response"><rect x="1080" y="110" width="460" height="300" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="1310" y="150" class="t-nlg" text-anchor="middle">💪 MUSCLE Response</text><text x="1100" y="190" class="t-body">• ★ Elastic + plastic</text><text x="1100" y="220" class="t-body">• Resists impact UP TO certain extent</text><text x="1100" y="255" class="t-body" font-weight="700">★ If elastic limit EXCEEDED:</text><text x="1100" y="280" class="t-body">• Avulsed · torn · ruptured</text><text x="1100" y="305" class="t-body">• Stretched · crushed</text><text x="1100" y="340" class="t-body">• Hematoma · myoglobinuria</text><text x="1100" y="365" class="t-body">  (crush syndrome)</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-bone-response"><rect x="60" y="440" width="730" height="380" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="425" y="480" class="t-nlg" text-anchor="middle">🦴 BONE Response</text><text x="90" y="520" class="t-body">• ★ RIGID + ELASTIC</text><text x="90" y="550" class="t-body">• First BENDS against force without breaking</text><text x="90" y="575" class="t-body">• Recoils to original shape after force released</text><text x="90" y="615" class="t-body" font-weight="700">★ When elastic limit EXCEEDED:</text><text x="90" y="640" class="t-body">• Bone breaks at point of MAXIMUM CONVEXITY of bending</text><text x="90" y="665" class="t-body">• ★ <strong>GREENSTICK fracture</strong> results (esp. in young / pliable bones)</text><text x="90" y="705" class="t-body" font-weight="700">★ Force over greater surface area:</text><text x="90" y="730" class="t-body">• Extensive bending strains</text><text x="90" y="755" class="t-body">• Bone breaks with MULTIPLE fragments (comminuted)</text><text x="90" y="790" class="t-body" font-weight="700">★ TWISTING strain → SPIRAL fracture</text><circle class="ic" cx="770" cy="458" r="14"/><text class="t-info" x="770" y="464" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-fluid-gas"><rect x="810" y="440" width="730" height="380" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1175" y="480" class="t-nlg" text-anchor="middle">💧 FLUID + GAS Response</text><text x="830" y="520" class="t-body" font-weight="700">★ FLUID:</text><text x="830" y="545" class="t-body">• Easily DISPLACED</text><text x="830" y="570" class="t-body">• CANNOT be compressed or reduced in size</text><text x="830" y="605" class="t-body" font-style="italic">★ Forensic example — sudden chest compression:</text><text x="830" y="630" class="t-body">• Rupture of capillaries + small venules in face, neck, shoulder</text><text x="830" y="655" class="t-body">• From RETROGRADE displacement of blood in veins</text><text x="830" y="680" class="t-body">• Tardieu spots / petechiae (Ch 15 asphyxia)</text><text x="830" y="720" class="t-body" font-weight="700">★ GAS:</text><text x="830" y="745" class="t-body">• Easily COMPRESSED</text><text x="830" y="775" class="t-body">• ★ Violent compression sets up POWERFUL PNEUMOSTATIC force</text><text x="830" y="800" class="t-body">• ★ Example — BLAST INJURY (Ch 10) — primary blast lung</text><circle class="ic" cx="1520" cy="458" r="14"/><text class="t-info" x="1520" y="464" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-special"><rect x="60" y="840" width="1480" height="220" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="880" class="t-nlg" text-anchor="middle">⚖️ Special Tissue Behaviour</text><text x="90" y="915" class="t-body">• ★ <strong>Greenstick fracture</strong> — children · pliable bone bends past elastic limit → incomplete fracture</text><text x="90" y="945" class="t-body">• ★ <strong>Spiral fracture</strong> — twisting strain → fracture line spirals along bone shaft (child abuse marker if young child)</text><text x="90" y="975" class="t-body">• ★ <strong>Comminuted fracture</strong> — high-energy force over wide area → multiple fragments</text><text x="90" y="1005" class="t-body">• ★ <strong>Blast injury</strong> — violent gas compression → barotrauma (lung, eardrum, GI tract — Ch 10)</text><text x="90" y="1035" class="t-body">• ★ <strong>Tardieu spots</strong> — petechial hemorrhages from sudden venous compression (chest crush, asphyxia — Ch 15)</text><circle class="ic" cx="1510" cy="858" r="14"/><text class="t-info" x="1510" y="864" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_IG09 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ Antemortem vs Postmortem Injury — Vital Reaction</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Critical forensic differentiation · vital reaction = bleeding + inflammation + histology</text>

<g data-node-id="ig-am-pm-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚖️ AM vs PM Injury — Why It Matters</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">★ Critical to distinguish injuries inflicted before death from those caused after. The presence of <strong>VITAL REACTION</strong> is the single most important sign — without circulation, the body cannot mount inflammation. Forensic implication: wrong AM/PM classification → wrong cause/manner of death.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-am"><rect x="60" y="240" width="730" height="400" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)" stroke="#3D8B5B" stroke-width="3"/><text x="425" y="280" class="t-nlg" text-anchor="middle">✅ ANTEMORTEM Injury — Vital Reaction</text><text x="90" y="320" class="t-body" font-weight="700">★ Gross features:</text><text x="90" y="345" class="t-body">• ACTIVE bleeding · CLOT formation</text><text x="90" y="370" class="t-body">• ERYTHEMA · swelling · ecchymosis</text><text x="90" y="395" class="t-body">• Margins everted / bruised</text><text x="90" y="420" class="t-body">• Surrounding tissue infiltrated with blood</text><text x="90" y="460" class="t-body" font-weight="700">★ Microscopic features:</text><text x="90" y="485" class="t-body">• PMN INFILTRATE (within 4-6 h)</text><text x="90" y="510" class="t-body">• FIBRIN deposition</text><text x="90" y="535" class="t-body">• 3 layers at 12 h:</text><text x="90" y="555" class="t-body">    — Surface: fibrin + RBCs</text><text x="90" y="575" class="t-body">    — Middle: PMN</text><text x="90" y="595" class="t-body">    — Deep: damaged/staining collagen</text><text x="90" y="620" class="t-body" font-weight="700">Enzymatic markers:</text><text x="90" y="645" class="t-body">• Cathepsin (immediate) → ALK PHOS (4 h)</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-pm"><rect x="810" y="240" width="730" height="400" rx="14" fill="url(#gRed)" filter="url(#cardShadow)" stroke="#A14B47" stroke-width="3"/><text x="1175" y="280" class="t-nlg" text-anchor="middle">❌ POSTMORTEM Injury — NO Vital Reaction</text><text x="830" y="320" class="t-body" font-weight="700">★ Gross features:</text><text x="830" y="345" class="t-body">• MINIMAL or NO bleeding (no circulation)</text><text x="830" y="370" class="t-body">• NO erythema · no swelling</text><text x="830" y="395" class="t-body">• Margins sharp, no eversion</text><text x="830" y="420" class="t-body">• PALE, dry edges</text><text x="830" y="445" class="t-body">• Yellowish (no hemoglobin staining)</text><text x="830" y="485" class="t-body" font-weight="700">★ Microscopic features:</text><text x="830" y="510" class="t-body">• NO PMN infiltrate</text><text x="830" y="535" class="t-body">• NO fibrin / autolysis only</text><text x="830" y="560" class="t-body">• No vital cellular reaction</text><text x="830" y="600" class="t-body" font-style="italic">★ Includes PM artefacts (Ch 6, Ch 10): skin fissures from decomposition mimicking lacerations; rodent gnawing; CPR-related rib fractures.</text><circle class="ic" cx="1520" cy="258" r="14"/><text class="t-info" x="1520" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-mid-perimortem"><rect x="60" y="670" width="1480" height="180" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="800" y="710" class="t-nlg" text-anchor="middle">⏱️ The PERI-MORTEM Period — Diagnostic Challenge</text><text x="90" y="745" class="t-body">• Injuries inflicted very close to time of death (★ within seconds) may show MINIMAL vital reaction</text><text x="90" y="775" class="t-body">• Agonal vital reaction may be ambiguous — partial PMN infiltrate, partial clotting</text><text x="90" y="805" class="t-body">★ Histology + enzymatic markers + multiple injury cross-comparison help clarify</text><text x="90" y="830" class="t-body">★ Important in alleged homicide vs alleged dumping of body after natural death</text><circle class="ic" cx="1510" cy="688" r="14"/><text class="t-info" x="1510" y="694" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-mimics"><rect x="60" y="870" width="1480" height="190" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="910" class="t-nlg" text-anchor="middle">⚠️ Common PM Mimics — Beware</text><text x="90" y="945" class="t-body">• ★ Decomposition skin fissures → mimic LACERATIONS / incised wounds (Ch 6)</text><text x="90" y="970" class="t-body">• ★ Rodent / insect gnawing → mimic puncture / abraded wounds</text><text x="90" y="995" class="t-body">• ★ CPR → rib + sternum fractures (anterior, bilateral) → mimic assault</text><text x="90" y="1020" class="t-body">• ★ Heat hematoma in burns → mimics true EDH (Ch 14) · CO in clot confirms heat origin</text><text x="90" y="1045" class="t-body">• ★ Undertaker&apos;s fracture (C6-C7) from rough body handling → mimics antemortem cervical injury</text><circle class="ic" cx="1510" cy="888" r="14"/><text class="t-info" x="1510" y="894" text-anchor="middle">ⓘ</text></g>
</svg>`;

const SVG_IG10 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">★ Wound Age Estimation — Gross + Microscopy</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Color changes · PMN infiltration timeline · contusion R-B-G-Y rule</text>

<g data-node-id="ig-age-intro"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⏰ AGE OF WOUND — Forensic Estimation</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">★ Estimating the AGE of a wound correlates the medical finding with the alleged time of incident. Uses <strong>GROSS appearance</strong> + <strong>MICROSCOPIC features</strong>. Contusions follow a distinct colour-change timeline (RBGY rule).</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-abrasion-age"><rect x="60" y="240" width="900" height="380" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="510" y="280" class="t-nlg" text-anchor="middle">📅 Age of Abrasion (Gross)</text><text x="90" y="320" class="t-body" font-weight="700">★ Fresh (≤ 12 h):</text><text x="90" y="345" class="t-body">• Reddish · NO scab</text><text x="90" y="370" class="t-body">• Bright red color</text><text x="90" y="405" class="t-body" font-weight="700">★ 12-24 hours:</text><text x="90" y="430" class="t-body">• DARK RED scab forms</text><text x="90" y="465" class="t-body" font-weight="700">★ 1-2 days:</text><text x="90" y="490" class="t-body">• REDDISH BROWN scab</text><text x="90" y="525" class="t-body" font-weight="700">★ 4-7 days:</text><text x="90" y="550" class="t-body">• Brown → black scab · separation begins</text><text x="90" y="580" class="t-body" font-weight="700">★ 7-14 days:</text><text x="90" y="605" class="t-body">• Scab falls off · leaves pale hypopigmented area · no scar</text><circle class="ic" cx="940" cy="258" r="14"/><text class="t-info" x="940" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-abrasion-histo"><rect x="980" y="240" width="560" height="380" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="1260" y="280" class="t-nlg" text-anchor="middle">🔬 Abrasion Microscopy</text><text x="1000" y="320" class="t-body" font-weight="700">★ 4-6 hours:</text><text x="1000" y="345" class="t-body">• Cellular infiltration begins</text><text x="1000" y="380" class="t-body" font-weight="700">★ 12 hours — 3 layers:</text><text x="1000" y="405" class="t-body">• Surface: fibrin + RBCs</text><text x="1000" y="430" class="t-body">• Middle: PMN cells</text><text x="1000" y="455" class="t-body">• Deeper: damaged/abnormally staining collagen</text><text x="1000" y="490" class="t-body" font-weight="700">★ 48 hours:</text><text x="1000" y="515" class="t-body">• Epithelial regeneration at periphery</text><text x="1000" y="540" class="t-body">• Granulation tissue in sub-epithelial area</text><text x="1000" y="575" class="t-body" font-weight="700">Healing:</text><text x="1000" y="600" class="t-body">• From PERIPHERY by new epithelial growth</text><circle class="ic" cx="1520" cy="258" r="14"/><text class="t-info" x="1520" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-contusion-rbgy"><rect x="60" y="650" width="1480" height="200" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="800" y="690" class="t-nlg" text-anchor="middle">🎨 ★ Contusion Age — RBGY Rule (Color Timeline)</text><text x="90" y="725" class="t-body" font-weight="700">★ Fresh (0-2 days):</text><text x="350" y="725" class="t-body">RED / PURPLE — fresh oxyhemoglobin</text><text x="90" y="755" class="t-body" font-weight="700">★ 3-5 days:</text><text x="350" y="755" class="t-body">BLUE → BLACK — deoxyhemoglobin</text><text x="90" y="785" class="t-body" font-weight="700">★ 5-7 days:</text><text x="350" y="785" class="t-body">★ GREEN — BILIVERDIN</text><text x="90" y="815" class="t-body" font-weight="700">★ 7-12 days:</text><text x="350" y="815" class="t-body">★ YELLOW — BILIRUBIN · then fades to normal skin</text><circle class="ic" cx="1510" cy="668" r="14"/><text class="t-info" x="1510" y="674" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-incised-age"><rect x="60" y="880" width="730" height="180" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="425" y="920" class="t-nlg" text-anchor="middle">🔪 Age of Incised Wound</text><text x="90" y="955" class="t-body">• 0-12 h: clean margins · bleeding · clot</text><text x="90" y="980" class="t-body">• 12-24 h: PMN infiltrate · early scab</text><text x="90" y="1005" class="t-body">• 2-3 days: granulation tissue begins</text><text x="90" y="1030" class="t-body">• 5-7 days: epithelialisation · fibroblasts</text><text x="90" y="1055" class="t-body">• &gt; 14 days: contraction · scar formation</text><circle class="ic" cx="770" cy="898" r="14"/><text class="t-info" x="770" y="904" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ig-lac-age"><rect x="810" y="880" width="730" height="180" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="1175" y="920" class="t-nlg" text-anchor="middle">💢 Age of Laceration / Fracture Healing</text><text x="830" y="955" class="t-body">• Same general timeline as incised, but slower (more tissue damage)</text><text x="830" y="980" class="t-body">• Bone fracture healing: 5 stages (see Ch 4 + Ch 11)</text><text x="830" y="1005" class="t-body">    Hematoma (0-7 d) → Granulation (2-3 wk) → Callus (3-12 wk, X-ray at 3 wk) → Remodelling → Modelling</text><text x="830" y="1030" class="t-body">• ★ Skull # heals POORLY (vs long bones) — line persists for years</text><circle class="ic" cx="1520" cy="898" r="14"/><text class="t-info" x="1520" y="904" text-anchor="middle">ⓘ</text></g>
</svg>`;

const NODES = {
  'ig-def': { label: '★ Injury — Statutory Definition', info: '<p>★ <strong>Section 44 IPC</strong> (now <strong>BNS Section 2(14)</strong>) defines INJURY as:</p><p><em>"Any harm caused ILLEGALLY to a person in body, mind, reputation, or property."</em></p><p>★ <strong>Section 319 IPC</strong> (now <strong>BNS Section 114</strong>) defines HURT:</p><p><em>"Whoever causes bodily PAIN, disease, or infirmity to any person is said to cause hurt."</em></p><p>★ Legal "WOUND" is broader than medical — "any lesion, external or internal, caused by violence, with or without breach of continuity of skin." Not statutorily defined; law uses "hurt".</p>', tags: ['BNS 2(14) · BNS 114'] },
  'ig-salient': { label: 'Salient Features of Injury Definition', info: '<ol><li>★ <strong>Wider meaning than medical:</strong> includes BODY + mind + reputation + property</li><li>★ Use of word "<strong>ILLEGAL</strong>": not all injuries are illegal — surgery is LEGAL injury (done with consent, for patient benefit). Excludes therapeutic + consented procedures.</li><li>"Hurt" (BNS 114 / IPC 319): bodily pain, disease, infirmity</li></ol>', tags: ['Wider · Illegal · Hurt'] },
  'ig-medical-vs-legal': { label: 'Medical vs Legal Perception of Injury', info: '<p><strong>★ MEDICAL view:</strong></p><ul><li>Anatomical lesion (skin/tissue break, fracture, hemorrhage)</li><li>Focus on cause + mechanism + healing</li></ul><p><strong>★ LEGAL view:</strong></p><ul><li>"Any harm" — broader than medical lesion</li><li>Includes mind · reputation · property damage</li><li>Term "wound" not statutorily defined</li><li>★ "Hurt" used instead — BNS 114 / IPC 319</li></ul>', tags: ['Med vs Law'] },
  'ig-classifications': { label: '4 Classifications of Injury', info: '<ol><li><strong>I. By CAUSATIVE FORCE:</strong> A) Mechanical · B) Thermal · C) Chemical · D) Miscellaneous (electricity · lightning · X-rays · radioactive)</li><li><strong>II. MEDICOLEGAL:</strong> Suicidal · Homicidal · Accidental · Defence · Fabricated</li><li><strong>III. RELATION TO DEATH:</strong> Antemortem · Postmortem</li><li><strong>IV. LEGAL:</strong> Simple · Grievous</li></ol>', tags: ['4 classifications'] },
  'ig-legal-class': { label: 'Legal Classification — Simple vs Grievous', info: '<ul><li><strong>SIMPLE injury</strong> (BNS 115 / IPC 323) — minor; heals without complication</li><li><strong>★ GRIEVOUS hurt</strong> (BNS 116 / IPC 320) — 8 specific clauses (see Ch 13):</li></ul><ol><li>Emasculation</li><li>Permanent loss of sight (either eye)</li><li>Permanent loss of hearing (either ear)</li><li>Loss of limb / joint</li><li>Permanent disfigurement of head/face</li><li>Fracture or dislocation of bone / tooth</li><li>Hurt that endangers life OR causes pain &gt; 20 days</li><li>Privation of any member or joint</li></ol>', tags: ['Simple vs Grievous'] },
  'ig-bns-map': { label: 'IPC → BNS Sections (2023)', info: '<p>★ Bharatiya Nyaya Sanhita 2023 replaces IPC effective 2024:</p><ul><li>IPC §44 → ★ <strong>BNS §2(14)</strong> — Injury definition</li><li>IPC §319 → ★ <strong>BNS §114</strong> — Hurt</li><li>IPC §320 → ★ <strong>BNS §116</strong> — Grievous hurt (8 clauses)</li><li>IPC §323 → BNS §115 — Voluntarily causing hurt punishment</li><li>IPC §324 → BNS §118 — Hurt by dangerous weapons</li><li>IPC §326 → BNS §118 — Grievous hurt by dangerous weapons</li></ul><p>★ See subject-wide IPC↔BNS Quick-Reference Card.</p>', tags: ['IPC→BNS map'] },

  'ig-mech': { label: 'A. Mechanical Injuries', info: '<p>Subdivided into 4 categories (detailed in Ch 9, Ch 10, Ch 11):</p><ol><li><strong>Blunt force:</strong> abrasion · contusion · laceration · fracture / dislocation</li><li><strong>Sharp-edged weapon:</strong> incised wounds · chop wounds</li><li><strong>Piercing weapons:</strong> stab wounds (penetrating · perforating)</li><li><strong>Firearm:</strong> entry/exit wounds · GSR · ricochet (Ch 10)</li></ol>', tags: ['Mech 4 types'] },
  'ig-thermal': { label: 'B. Thermal Injuries (Ch 14)', info: '<p><strong>1. Due to COLD:</strong></p><ul><li>Frostbite · Trench foot · Immersion foot · Hypothermia</li></ul><p><strong>2. Due to HEAT:</strong></p><ul><li>Burns (flame · contact · electrical · chemical)</li><li>Scalds (hot liquid · steam)</li><li>Heat stroke · heat exhaustion · heat cramps</li></ul><p><strong>3. Lightning:</strong> Lichtenberg figures · arborescent burns.</p>', tags: ['Cold + Heat'] },
  'ig-chemical': { label: 'C. Chemical Injuries (Ch 34)', info: '<p><strong>1. CORROSION:</strong></p><ul><li>Corrosive ACIDS — H₂SO₄, HNO₃, HCl</li><li>Corrosive ALKALIS — NaOH, KOH, ammonia</li><li>Metal SALTS — mercuric chloride, zinc chloride</li></ul><p><strong>2. IRRITATION:</strong> weak acids OR weak alkalis · skin/mucous membrane inflammation.</p>', tags: ['Acids · Alkalis · Salts'] },
  'ig-misc': { label: 'D. Miscellaneous Injuries', info: '<ol><li><strong>Electricity</strong> — Joule burn · Filigree burn · entry/exit marks (Ch 14)</li><li><strong>Lightning</strong> — Lichtenberg figures · arborescent burns</li><li><strong>X-rays</strong> — radiation burns · cataract (occupational)</li><li><strong>Radioactive substances</strong> — acute radiation syndrome</li></ol>', tags: ['Electricity · Radiation'] },
  'ig-summary-table': { label: 'Cross-Chapter Map of Injury Subtypes', info: '<ul><li><strong>Mechanical</strong> → Ch 9 (general) + Ch 11 (regional) + Ch 12 (RTA)</li><li><strong>Thermal</strong> → Ch 14 (burns · scalds · cold · electricity · lightning)</li><li><strong>Chemical</strong> → Ch 34 (corrosive poisons)</li><li><strong>Firearm</strong> → Ch 10 (firearm + bomb blast)</li><li><strong>Asphyxial</strong> (overlap) → Ch 15 (Violent Asphyxia)</li></ul>', tags: ['Cross-chapter'] },

  'ig-mlc': { label: 'Medicolegal Classification (5 categories)', info: '<ol><li><strong>SUICIDAL / self-inflicted:</strong> accessible site · multiple varying-depth wounds · hesitation cuts · clothes often spared · suicide note · secluded location</li><li><strong>HOMICIDAL:</strong> single or few deep wounds · no hesitation · ★ defence wounds present · clothes cut · scene disturbed</li><li><strong>ACCIDENTAL:</strong> pattern matches circumstance · no intent</li><li><strong>DEFENCE wounds:</strong> hands · forearms (palmar surface) · feet · raised to ward off attacker</li><li><strong>FABRICATED wounds:</strong> self-inflicted to mislead investigation or claim compensation</li></ol>', tags: ['5 ML categories'] },
  'ig-fabricated': { label: '★ Fabricated Wounds', info: '<p>★ Self-inflicted wounds with intent to:</p><ul><li>Falsely implicate another person</li><li>Claim insurance / compensation</li><li>Escape duty / avoid prosecution</li></ul><p><strong>★ Features suggesting fabricated wounds:</strong></p><ul><li>Within reach of victim&apos;s own hand</li><li>Multiple superficial parallel wounds (often same direction)</li><li>Spare vital areas (face, neck)</li><li>Clothing not corresponding to wound location</li><li>No defensive wounds inconsistent with claimed attack</li></ul>', tags: ['Self-inflicted to mislead'] },
  'ig-am-pm': { label: 'Antemortem vs Postmortem Injury (Brief)', info: '<p>★ <strong>ANTEMORTEM:</strong></p><ul><li>★ VITAL REACTION present (active bleeding, clot, erythema, swelling)</li><li>PMN infiltrate · fibrin · cellular changes</li></ul><p>★ <strong>POSTMORTEM:</strong></p><ul><li>★ NO vital reaction</li><li>Minimal/no bleeding · pale margins</li><li>No erythema · no cellular response</li></ul><p>(See IG-09 for detailed comparison)</p>', tags: ['AM vs PM brief'] },
  'ig-simple-grievous': { label: 'Simple vs Grievous Hurt', info: '<p><strong>SIMPLE injury</strong> (BNS 115 / IPC 323):</p><ul><li>Heals without complication · short healing time · no permanent disability</li></ul><p><strong>★ GRIEVOUS hurt</strong> (BNS 116 / IPC 320) — 8 clauses:</p><ol><li>Emasculation</li><li>Permanent loss of sight (either eye)</li><li>Permanent loss of hearing (either ear)</li><li>Loss of limb/joint</li><li>Permanent disfigurement of head/face</li><li>Fracture/dislocation of bone/tooth</li><li>Hurt that endangers life OR pain &gt; 20 days</li><li>Privation of any member/joint</li></ol><p>★ Detailed in Ch 13.</p>', tags: ['Grievous 8 clauses'] },

  'ig-skin-intro': { label: 'Skin — Forensic Anatomy', info: '<ul><li>★ Weight: <strong>4 kg</strong></li><li>★ Surface area: <strong>2 m²</strong></li><li>3 layers: EPIDERMIS · DERMIS · HYPODERMIS</li><li>★ Epidermis is AVASCULAR — no blood vessels</li><li>Forensic importance — thickness determines force needed to break skin + reach bleeding vessels</li></ul>', tags: ['4 kg · 2 m²'] },
  'ig-epidermis': { label: '★ 5 Layers of Epidermis', info: '<p>From deep to superficial:</p><ol><li><strong>★ Stratum BASALE</strong> (basal layer / stratum germinativum) — single layer; cell division</li><li><strong>★ Stratum SPINOSUM</strong> (prickle cell / Malpighian) — desmosomes "spines"</li><li><strong>★ Stratum GRANULOSUM</strong> — keratohyalin granules</li><li><strong>Stratum LUCIDUM</strong> — thick on palms / soles only</li><li><strong>★ Stratum CORNEUM</strong> (horny layer) — most superficial · keratinized DEAD cells</li></ol><p><em>Mnemonic: "BASAL → SPINY → GRAINS → LIGHTNING → HORNS"</em></p>', tags: ['5 epidermal layers'] },
  'ig-thickness': { label: '★ Stratum Corneum Thickness — Regional', info: '<p>★ Thickness of stratum corneum varies greatly by body region:</p><ul><li>★ <strong>Palms + Soles</strong> — THICKEST (most abrasion-resistant)</li><li>Protected areas — ★ <strong>SCROTUM + EYELIDS</strong> — fraction of a mm (THINNEST)</li></ul><p><strong>★ Forensic relevance:</strong></p><ul><li>Determines amount of force needed to penetrate skin</li><li>Determines force needed to allow bleeding from underlying dermal vessels</li><li>Eyelid/scrotum injuries → forensic flags (thin skin breaks with little force)</li></ul>', tags: ['Palms thickest · Scrotum thinnest'] },
  'ig-dermis': { label: 'Dermis Layer', info: '<ul><li>Contains BLOOD VESSELS · nerves · hair follicles · sweat + sebaceous glands</li><li>★ Pure abrasion (epidermis only) does NOT bleed</li><li>★ Due to CORRUGATED dermal papillae, dermis often involved → abrasion bleeds</li><li>Dermal injury required for true scarring</li></ul>', tags: ['Dermis vessels'] },
  'ig-hypodermis': { label: 'Hypodermis (Subcutis)', info: '<ul><li>Subcutaneous tissue — adipose + connective tissue</li><li>Provides CUSHIONING effect for ordinary blows</li><li>Severe blunt blows crush capillaries → contusion + lacerations</li><li>Fat embolism possible from extensive crush</li></ul>', tags: ['Cushion'] },
  'ig-skin-resistance': { label: 'Skin Resistance to Stab Wounds', info: '<p>★ Resistance to stab wound (highest to lowest):</p><ul><li><strong>Calcified cartilage / BONE</strong> — most resistant</li><li><strong>SKIN</strong> — very resistant (keratin cohesion)</li><li><strong>MUSCLE</strong> — less resistant</li><li><strong>SubQ fat</strong> — least resistant</li></ul><p>★ Forensic significance: stab depth + force can be estimated knowing tissue resistance.</p>', tags: ['Resistance order'] },

  'ig-biophysics': { label: 'Biophysics of Wound Production', info: '<p>★ A wound is produced when intensity of applied force EXCEEDS capability of tissues to resist.</p><p><strong>Body absorbs force via:</strong></p><ol><li>Resilience + elasticity of soft tissues</li><li>Rigid strength of skeletal framework</li></ol><p>Wound results from physical contact between weapon and body, with energy transfer to tissues producing changes in their state.</p>', tags: ['Force exceeds resistance'] },
  'ig-kinetic': { label: '★ Kinetic Energy Formula (½MV²)', info: '<p>★ <strong>Force formula:</strong> F α M (linear) · F α V² (exponential)</p><p>★ <strong>Kinetic energy = ½ × Mass × Velocity²</strong></p><p><strong>Key implications:</strong></p><ul><li>Doubling MASS → KE doubles (×2)</li><li>★ Doubling VELOCITY → KE quadruples (×4)</li></ul><p>★ Therefore <strong>VELOCITY is more important than MASS</strong>.</p><p><em>Example: 1 kg brick PRESSED against scalp → no injury · Same brick THROWN at 10 ft/s may break skull.</em></p>', tags: ['½MV² · V exponential'] },
  'ig-area': { label: '★ Force-Area Relationship', info: '<p>★ Force per unit AREA = PRESSURE.</p><ul><li>Same force, SMALLER area → GREATER damage</li><li>Same force, LARGER area → LESS damage</li></ul><p><strong>★ Practical examples:</strong></p><ul><li>Sharp weapon — small contact area → deep penetrating injury</li><li>Blunt broad surface — force dissipated → less damage</li><li>Rigid weapon → more damage than plastic/flexible</li><li>If weapon BREAKS on impact → KE lost → less damage</li></ul><p><em>Plank narrow edge causes more damage than flat broad surface.</em></p>', tags: ['Pressure = F/A'] },
  'ig-counter-force': { label: 'Counter Force — 2 Scenarios', info: '<p>★ A wound is produced from physical contact between weapon and body:</p><ol><li><strong>MOVING WEAPON strikes STATIONARY BODY</strong> → counter-force = INERTIA of body</li><li><strong>MOVING BODY strikes STATIONARY OBJECT</strong> → counter-force = RIGIDITY of stationary object</li></ol><p>★ Usually a COMBINATION of both forces in real incidents.</p>', tags: ['Inertia vs Rigidity'] },
  'ig-tissue-props': { label: 'Tissue Physical Properties (4)', info: '<p>Body composed of tissues with varied physical properties:</p><ol><li>★ <strong>State of SOLIDITY</strong></li><li>★ <strong>FLUIDITY</strong></li><li>★ <strong>DENSITY</strong></li><li>★ <strong>ELASTICITY</strong></li></ol><p>★ A forceful impact does NOT affect all tissues UNIFORMLY — different tissue responses produce different injuries at different sites.</p>', tags: ['4 properties'] },
  'ig-conditions': { label: 'Conditions of Energy Discharge', info: '<ul><li>★ Person KNOCKED DOWN by impact → KE small → local damage less (energy dissipated into motion)</li><li>★ Person STANDS still + sustains impact → immobilised → MORE KE liberated → GREATER damage</li><li>Longer time of energy discharge → less destructive effect</li></ul><p><em>Forensic example: victim braced against wall has worse injury than thrown back.</em></p>', tags: ['Mobile vs immobilised'] },

  'ig-forces-intro': { label: '3 Primary Forces — Overview', info: '<p>★ All forces on body reduce to 3 primary types:</p><ol><li><strong>TENSILE</strong> (pulls apart) — "traction-strain"</li><li><strong>COMPRESSIVE</strong> (pushes together) — "compression-strain"</li><li><strong>SHEARING</strong> (slides one part over adjacent) — "shear-strain"</li></ol><p>Each produces characteristic injury patterns based on tissue properties.</p>', tags: ['3 forces'] },
  'ig-tensile': { label: 'Tensile Force (Traction-Strain)', info: '<p>★ Force that pulls a body apart; may cause SEPARATION into parts.</p><p><strong>Tissue response:</strong></p><ul><li>Skin RESISTS due to firm cohesion of keratinised cells</li><li>Tissues rupture when STRETCHED beyond tensile strength</li></ul><p><strong>★ Examples:</strong></p><ul><li>Avulsion injuries — limb torn off</li><li>Mesenteric tear — sudden deceleration</li><li>Spinal cord stretch in fall from height</li><li>Splenic / liver capsule tear</li></ul>', tags: ['Pull apart'] },
  'ig-compressive': { label: 'Compressive Force (Compression-Strain)', info: '<p>★ Force that pushes body together; if sufficient, body breaks into pieces.</p><p><strong>Tissue response:</strong></p><ul><li>★ ALL tissues EXCEPT gas-containing RESIST compression (will not reduce volume)</li></ul><p><strong>★ Examples:</strong></p><ul><li>★ Sudden chest compression → facial/neck/shoulder petechiae (retrograde venous blood displacement)</li><li>Crush injuries in building collapse</li><li>Bone fracture from direct blow</li></ul>', tags: ['Push together'] },
  'ig-shearing': { label: 'Shearing Force (Shear-Strain)', info: '<p>★ Force that slides one part of body over adjacent part.</p><p><strong>Tissue response:</strong></p><ul><li>Produces ALTERATION in body SHAPE</li><li>★ Does NOT change body volume</li></ul><p><strong>★ Examples:</strong></p><ul><li>★ Diffuse axonal injury (DAI) — Ch 11 brain injury</li><li>Aortic shear at ligamentum arteriosum in deceleration RTA</li><li>Mesenteric tear at fixation points</li></ul>', tags: ['Slide / shear'] },
  'ig-tissue-types': { label: '5 Tissue Types — Force Response Summary', info: '<ul><li><strong>SKIN</strong> — pliable + little elastic · resistant to traction · SPLITS when crushed against bone</li><li><strong>SubQ TISSUE</strong> — plastic + pliable · cushions ordinary blows · contusion/laceration if severe</li><li><strong>MUSCLE</strong> — elastic + plastic · avulsed/torn/ruptured if elastic limit exceeded</li><li><strong>BONE</strong> — rigid + elastic · ★ greenstick # if young · spiral # from twisting</li><li><strong>FLUID</strong> — easily displaced, incompressible · ★ retrograde displacement → petechiae</li><li><strong>GAS</strong> — easily compressed · ★ violent compression → blast injury (pneumostatic force)</li></ul>', tags: ['5 tissue summary'] },

  'ig-factors-overview': { label: '★ 4 Factors Influencing Wound Causation', info: '<ol><li>Nature of object / weapon (sharp vs blunt · rigid vs flexible)</li><li>Amount of energy discharged (½ MV²)</li><li>Conditions of discharge (mobile vs static victim · time of discharge)</li><li>Nature of tissue affected (skin · subQ · muscle · bone · fluid · gas)</li></ol>', tags: ['4 factors'] },
  'ig-factor1': { label: 'Factor 1: Nature of Object / Weapon', info: '<p>★ <strong>Sharp vs Blunt:</strong></p><ul><li>Sharp weapon → force CONCENTRATED on small area → DEEP penetrating injury</li><li>Blunt broad weapon → force DISSIPATED over larger area → less damage</li></ul><p>★ <strong>Rigid vs Plastic:</strong></p><ul><li>Rigid weapon → MORE damage</li><li>Plastic / flexible weapon → less damage</li></ul><p>★ <strong>Weapon breaks on impact</strong> → kinetic energy LOST → less damage.</p>', tags: ['Sharp · Rigid'] },
  'ig-factor2': { label: 'Factor 2: Energy Discharged', info: '<p>★ <strong>Kinetic energy = ½ MV²</strong></p><ul><li>Mass-energy: LINEAR (double mass = double energy)</li><li>★ Velocity-energy: EXPONENTIAL (double velocity = QUADRUPLE energy)</li><li>★ Therefore <strong>VELOCITY more important than mass</strong></li></ul><p><em>Example: bullet 8 g at 800 m/s → fatal · same bullet thrown by hand → harmless</em></p>', tags: ['Velocity > Mass'] },
  'ig-factor3': { label: 'Factor 3: Conditions of Discharge', info: '<p>★ Whether person is mobile or static:</p><ul><li>★ Person KNOCKED DOWN → KE liberated SMALL → less damage</li><li>★ Person STANDS still + sustains impact → immobilised → MORE KE liberated → GREATER damage</li></ul><p>★ Time of energy discharge:</p><ul><li>Longer time → less destructive effect on tissues (force averaged)</li></ul>', tags: ['Mobile vs Static'] },
  'ig-factor4': { label: 'Factor 4: Nature of Tissue Affected', info: '<p>★ Different tissues respond differently to same force:</p><ul><li><strong>Skin</strong> — pliable, little elastic, resistant to traction</li><li><strong>SubQ tissue</strong> — plastic cushion · ordinary blows OK</li><li><strong>Muscle</strong> — elastic + plastic, absorbs to limit</li><li><strong>Bone</strong> — rigid + elastic, ★ greenstick (young) / spiral (twisted)</li><li><strong>Fluid</strong> — incompressible → transmits force</li><li><strong>Gas</strong> — compressible → ★ blast injury (violent compression)</li></ul>', tags: ['Tissue-dependent'] },

  'ig-skin-response': { label: 'Skin Response to Force', info: '<ul><li>Pliable but little elastic</li><li>Resistant to TRACTION (keratin cohesion)</li><li>Struck by BLUNT weapon → cells flatten/elongate, less damage than subQ</li><li>★ Skin SPLITS when struck + crushed against rigid bone</li></ul><p><strong>★ Resistance to STAB:</strong></p><p>★ Calcified cartilage / bone &gt; SKIN &gt; muscle &gt; subQ fat</p><p>★ Eyelids + scrotum = thinnest → split easily.</p>', tags: ['Pliable · Splits on bone'] },
  'ig-subq-response': { label: 'SubQ Tissue Response to Force', info: '<ul><li>Plastic + pliable</li><li>Fat + supporting connective tissue fibres</li><li>★ Acts as CUSHION for body — absorbs ordinary blows</li></ul><p><strong>★ With SEVERE blunt blows:</strong></p><ul><li>Subcutaneous vessels CRUSHED</li><li>Fat droplets displaced</li><li>Connective tissue framework torn → CONTUSION / LACERATION</li></ul>', tags: ['Cushion · Crush vessels'] },
  'ig-muscle-response': { label: 'Muscle Response to Force', info: '<ul><li>★ Elastic + plastic</li><li>Resists impact UP TO certain extent</li></ul><p><strong>★ If elastic limit EXCEEDED:</strong></p><ul><li>Avulsed · torn · ruptured</li><li>Stretched · crushed</li><li>Hematoma · myoglobinuria (crush syndrome)</li></ul>', tags: ['Elastic + Plastic'] },
  'ig-bone-response': { label: '★ Bone Response to Force', info: '<ul><li>★ RIGID + ELASTIC</li><li>First BENDS against force without breaking</li><li>Recoils to original shape after force released</li></ul><p><strong>★ Elastic limit EXCEEDED:</strong></p><ul><li>Bone breaks at point of MAXIMUM CONVEXITY of bending</li><li>★ <strong>GREENSTICK fracture</strong> (esp. young / pliable bones)</li></ul><p><strong>★ Force over greater surface area:</strong></p><ul><li>Extensive bending strains</li><li>Bone breaks with MULTIPLE fragments (comminuted)</li></ul><p><strong>★ TWISTING strain → SPIRAL fracture</strong></p>', tags: ['Greenstick · Spiral'] },
  'ig-fluid-gas': { label: 'Fluid + Gas Response', info: '<p>★ <strong>FLUID:</strong></p><ul><li>Easily DISPLACED · CANNOT be compressed</li><li>★ Forensic example — sudden chest compression: capillary + venule rupture in face/neck/shoulder from retrograde venous blood displacement (TARDIEU spots)</li></ul><p>★ <strong>GAS:</strong></p><ul><li>Easily COMPRESSED</li><li>★ Violent compression sets up powerful PNEUMOSTATIC force</li><li>★ Example — BLAST INJURY (Ch 10) — primary blast lung</li></ul>', tags: ['Fluid incompressible · Gas compressible'] },
  'ig-special': { label: 'Special Tissue Behaviours', info: '<ul><li>★ <strong>Greenstick fracture</strong> — children · pliable bone bends past elastic limit → incomplete fracture</li><li>★ <strong>Spiral fracture</strong> — twisting strain → spiral fracture line along shaft (child abuse marker if young child)</li><li>★ <strong>Comminuted fracture</strong> — high-energy + wide area → multiple fragments</li><li>★ <strong>Blast injury</strong> — violent gas compression → barotrauma (Ch 10)</li><li>★ <strong>Tardieu spots</strong> — petechial hemorrhages from sudden venous compression (chest crush / asphyxia, Ch 15)</li></ul>', tags: ['Special patterns'] },

  'ig-am-pm-overview': { label: 'AM vs PM Injury — Why It Matters', info: '<p>★ Critical to distinguish injuries before vs after death.</p><p>★ <strong>VITAL REACTION</strong> = single most important sign. Without circulation, body cannot mount inflammation.</p><p><strong>Forensic implications:</strong></p><ul><li>Wrong AM/PM classification → wrong cause of death</li><li>Wrong manner determination</li><li>Wrong sequence reconstruction in multi-injury cases</li></ul>', tags: ['Vital reaction'] },
  'ig-am': { label: '✅ ANTEMORTEM Injury — Vital Reaction', info: '<p>★ <strong>Gross features:</strong></p><ul><li>ACTIVE bleeding · CLOT formation</li><li>ERYTHEMA · swelling · ecchymosis</li><li>Margins everted / bruised</li><li>Surrounding tissue infiltrated with blood</li></ul><p>★ <strong>Microscopic features:</strong></p><ul><li>PMN INFILTRATE (within 4-6 h)</li><li>FIBRIN deposition</li><li>3 layers at 12 h: surface fibrin+RBC · middle PMN · deep damaged collagen</li></ul><p><strong>Enzymatic markers:</strong> Cathepsin (immediate) → Alkaline phosphatase (4 h).</p>', tags: ['Vital reaction present'] },
  'ig-pm': { label: '❌ POSTMORTEM Injury — No Vital Reaction', info: '<p>★ <strong>Gross features:</strong></p><ul><li>MINIMAL or NO bleeding (no circulation)</li><li>NO erythema · no swelling</li><li>Margins sharp, no eversion</li><li>PALE, dry edges · yellowish</li></ul><p>★ <strong>Microscopic features:</strong></p><ul><li>NO PMN infiltrate</li><li>NO fibrin · autolysis only</li><li>No vital cellular reaction</li></ul><p>★ Includes PM artefacts: skin fissures (mimic lacerations), rodent gnawing, CPR rib fractures.</p>', tags: ['No vital reaction'] },
  'ig-mid-perimortem': { label: 'Peri-Mortem Period', info: '<p>★ Injuries inflicted very close to time of death (within seconds) may show MINIMAL vital reaction.</p><ul><li>Agonal vital reaction may be AMBIGUOUS — partial PMN infiltrate, partial clotting</li><li>★ Histology + enzymatic markers + cross-comparison of multiple injuries help clarify</li><li>★ Critical in alleged homicide vs alleged dumping of body after natural death</li></ul>', tags: ['Peri-mortem'] },
  'ig-mimics': { label: 'Common PM Mimics', info: '<ul><li>★ Decomposition skin fissures → mimic LACERATIONS / incised wounds (Ch 6)</li><li>★ Rodent / insect gnawing → mimic puncture / abraded wounds</li><li>★ CPR → rib + sternum fractures (bilateral anterior) → mimic assault</li><li>★ Heat hematoma in burns → mimics true EDH (Ch 14) · CO in clot confirms heat origin</li><li>★ Undertaker&apos;s fracture (C6-C7) from rough body handling → mimics antemortem cervical injury</li></ul>', tags: ['Mimics'] },

  'ig-age-intro': { label: 'Wound Age Estimation — Principle', info: '<p>★ Correlates the medical finding with the alleged time of incident.</p><p>★ Uses:</p><ul><li><strong>GROSS</strong> appearance (color, scab, healing)</li><li><strong>MICROSCOPIC</strong> features (PMN infiltrate, fibrin, granulation)</li><li><strong>Enzymatic</strong> markers</li><li>For contusions: ★ R-B-G-Y color rule</li></ul>', tags: ['Age estimation'] },
  'ig-abrasion-age': { label: 'Age of Abrasion — Gross', info: '<ul><li>★ FRESH (≤ 12 h): reddish · NO scab · bright red color</li><li>★ 12-24 h: dark red scab</li><li>★ 1-2 days: reddish brown scab</li><li>★ 4-7 days: brown → black scab · separation begins</li><li>★ 7-14 days: scab falls off · pale hypopigmented area · NO scar</li></ul>', tags: ['Scab evolution'] },
  'ig-abrasion-histo': { label: 'Age of Abrasion — Microscopy', info: '<ul><li>★ 4-6 h: cellular infiltration begins</li><li>★ 12 h — 3 layers:<ul><li>Surface: fibrin + RBCs</li><li>Middle: PMN cells</li><li>Deeper: damaged / staining collagen</li></ul></li><li>★ 48 h: epithelial regeneration at periphery + granulation tissue</li><li>Healing FROM PERIPHERY by new epithelial growth</li></ul>', tags: ['Histology timeline'] },
  'ig-contusion-rbgy': { label: '★ Contusion Age — RBGY Rule', info: '<p>★ <strong>R-B-G-Y color timeline:</strong></p><ul><li>★ <strong>FRESH (0-2 days):</strong> RED / PURPLE — oxyhemoglobin</li><li>★ <strong>3-5 days:</strong> BLUE → BLACK — deoxyhemoglobin</li><li>★ <strong>5-7 days:</strong> GREEN — <strong>BILIVERDIN</strong></li><li>★ <strong>7-12 days:</strong> YELLOW — <strong>BILIRUBIN</strong> · then fades</li></ul><p><em>Mnemonic: "Red → Blue → Green → Yellow" — biliverdin (green) precedes bilirubin (yellow), mirroring heme catabolism.</em></p>', tags: ['RBGY'] },
  'ig-incised-age': { label: 'Age of Incised Wound', info: '<ul><li>0-12 h: clean margins · bleeding · clot</li><li>12-24 h: PMN infiltrate · early scab</li><li>2-3 days: granulation tissue begins</li><li>5-7 days: epithelialisation · fibroblasts</li><li>&gt; 14 days: contraction · scar formation</li></ul>', tags: ['Incised timeline'] },
  'ig-lac-age': { label: 'Age of Laceration / Fracture', info: '<ul><li>Same general timeline as incised, but slower (more tissue damage)</li><li>Bone fracture healing — 5 stages (see Ch 4 + Ch 11):<ol><li>Hematoma (0-7 d)</li><li>Granulation (2-3 wk)</li><li>★ Callus (3-12 wk · first visible on X-ray at 3 wk)</li><li>Remodelling (woven → lamellar)</li><li>Modelling (strengthening)</li></ol></li><li>★ Skull fracture heals POORLY vs long bones — line persists for years</li></ul>', tags: ['Fracture healing 5 stages'] }
};

function nodeList(ids) { return ids.map(id => ({ nodeId: id, ...NODES[id] })); }

const MCQS = {
  'IG-01': [
    { stem: 'Section 44 of IPC (BNS Section 2(14)) defines injury as harm to:', options: ['Body only','Body + mind','Body + mind + reputation','Body + mind + reputation + property'], answerIdx: 3, explain: 'IPC 44 / BNS 2(14): "Any harm caused ILLEGALLY to a person in body, mind, reputation, or property." Wider than medical concept.', tag: '[PG-Inspired]' },
    { stem: 'Hurt is defined under which section?', options: ['IPC 319 / BNS 114','IPC 320 / BNS 116','IPC 44 / BNS 2(14)','IPC 323 / BNS 115'], answerIdx: 0, explain: 'IPC 319 / BNS 114 defines HURT — "bodily pain, disease, or infirmity". IPC 44 / BNS 2(14) defines INJURY (wider). IPC 320 / BNS 116 defines grievous hurt.', tag: '[PG-Inspired]' },
    { stem: 'Surgical incision is NOT considered an illegal injury because:', options: ['It is done by a surgeon','It uses sterile instruments','It is done WITH CONSENT and for benefit of patient','Surgeons are legally immune'], answerIdx: 2, explain: 'Definition of injury includes word "ILLEGALLY". Surgical incision with consent for patient benefit is LEGAL — hence not punishable.', tag: '[PG-Inspired]' }
  ],
  'IG-02': [
    { stem: 'According to causative force, lightning injury is classified under:', options: ['Mechanical','Thermal','Chemical','Miscellaneous'], answerIdx: 3, explain: 'Lightning is classified under MISCELLANEOUS injuries (along with electricity, X-rays, radioactive). Burns are caused but mechanism is electrical/heat combined.', tag: '[PG-Inspired]' },
    { stem: 'Sharp-edged weapon injuries include:', options: ['Abrasion','Contusion','Incised + chop wounds','Stab wound'], answerIdx: 2, explain: 'Sharp-edged: incised + chop. Stab = piercing weapon. Blunt force: abrasion · contusion · laceration · fracture.', tag: '[PG-Inspired]' },
    { stem: 'Frostbite is an example of:', options: ['Mechanical injury','Heat-induced thermal injury','Cold-induced thermal injury','Chemical injury'], answerIdx: 2, explain: 'Frostbite, trench foot, immersion foot = cold-induced thermal injuries. Burns + scalds = heat-induced.', tag: '[PG-Inspired]' }
  ],
  'IG-03': [
    { stem: 'A wound on the right hand palm of a victim with deep cuts is most likely:', options: ['Suicidal','Defence wound','Fabricated','Accidental'], answerIdx: 1, explain: 'Defence wounds are on hands (palmar surface), forearms — victim raises hands to ward off attacker. Indicates HOMICIDE.', tag: '[PG-Inspired]' },
    { stem: 'Hesitation cuts are characteristic of:', options: ['Homicidal','Suicidal','Accidental','Fabricated'], answerIdx: 1, explain: 'Hesitation cuts (multiple shallow parallel attempts before fatal cut) = SUICIDAL. Indicates victim&apos;s tentative attempts.', tag: '[PG-Inspired]' },
    { stem: 'Fabricated wounds typically:', options: ['Are deep over vital areas','Are out of reach of victim&apos;s own hands','Are within reach of victim&apos;s own hand · superficial · parallel','Cause death'], answerIdx: 2, explain: 'Fabricated = self-inflicted to mislead. Within reach · superficial · multiple parallel · sparing vital areas · clothes not corresponding.', tag: '[PG-Inspired]' }
  ],
  'IG-04': [
    { stem: 'Weight and surface area of adult skin is approximately:', options: ['2 kg, 1 m²','4 kg, 2 m²','6 kg, 1.5 m²','10 kg, 3 m²'], answerIdx: 1, explain: 'Adult skin: weight 4 kg · surface area 2 m². Forensically — thickness varies regionally.', tag: '[PG-Inspired]' },
    { stem: 'The 5 layers of epidermis from deep to superficial:', options: ['Basale → Spinosum → Granulosum → Lucidum → Corneum','Corneum → Lucidum → Granulosum → Spinosum → Basale','Spinosum → Basale → Granulosum → Lucidum → Corneum','Basale → Granulosum → Spinosum → Lucidum → Corneum'], answerIdx: 0, explain: 'Deep to superficial: Stratum Basale → Spinosum → Granulosum → Lucidum → Corneum. Mnemonic: "Basal Spiny Grains Lightning Horns".', tag: '[PG-Inspired]' },
    { stem: 'Thinnest stratum corneum is found over:', options: ['Palms','Soles','Scrotum and eyelids','Back'], answerIdx: 2, explain: 'Stratum corneum is THINNEST over scrotum + eyelids (fraction of mm) · THICKEST over palms + soles. Forensic relevance — eyelid/scrotum injuries break easily.', tag: '[PG-Inspired]' },
    { stem: 'In a stab wound, resistance is HIGHEST in:', options: ['Subcutaneous fat','Muscle','Skin','Calcified cartilage / bone'], answerIdx: 3, explain: 'Resistance hierarchy: calcified cartilage/bone &gt; SKIN &gt; muscle &gt; subQ fat.', tag: '[PG-Inspired]' }
  ],
  'IG-05': [
    { stem: 'The formula for kinetic energy of a moving object is:', options: ['F = M × V','F = M × V²','F = ½ M × V²','F = M²V'], answerIdx: 2, explain: 'Kinetic energy = ½ × Mass × Velocity². Velocity has exponential effect — doubling V quadruples KE.', tag: '[PG-Inspired]' },
    { stem: 'Doubling the velocity of a weapon results in:', options: ['Doubling of kinetic energy','Quadrupling of kinetic energy','Halving of kinetic energy','No change'], answerIdx: 1, explain: 'KE = ½ MV² · V² → doubling V quadruples KE. Velocity is exponential. Doubling mass only doubles KE.', tag: '[PG-Inspired]' },
    { stem: 'Same force over a smaller area causes:', options: ['Less damage','More damage','Same damage','No damage'], answerIdx: 1, explain: 'Pressure = Force / Area. Smaller area → higher pressure → more damage. Explains why sharp weapons penetrate deep.', tag: '[PG-Inspired]' }
  ],
  'IG-06': [
    { stem: 'Tensile force on tissues produces:', options: ['Compression','Pulling apart','Sliding','Twisting'], answerIdx: 1, explain: 'Tensile (traction-strain) = pulls body apart. Examples: avulsion, mesenteric tear, splenic capsule tear.', tag: '[PG-Inspired]' },
    { stem: 'Diffuse axonal injury (DAI) is primarily caused by:', options: ['Tensile force','Compressive force','Shearing force','Direct laceration'], answerIdx: 2, explain: 'DAI = SHEAR force - sliding of adjacent strata of brain tissue. Rotational acceleration. See Ch 11.', tag: '[PG-Inspired]' },
    { stem: 'Tardieu spots in chest crush result from:', options: ['Direct trauma to face','Retrograde venous blood displacement','Suffocation','Cardiac arrest'], answerIdx: 1, explain: 'Sudden chest compression → retrograde displacement of blood in veins → capillary rupture in face/neck/shoulder = Tardieu spots / petechiae.', tag: '[PG-Inspired]' }
  ],
  'IG-07': [
    { stem: 'Which factor is MOST important in determining the damage caused by a weapon?', options: ['Mass','Velocity','Shape','Material'], answerIdx: 1, explain: 'VELOCITY — relationship is exponential (V²). Mass is linear. Explains why bullets cause severe damage despite small mass.', tag: '[PG-Inspired]' },
    { stem: 'A person standing still and sustaining a blow has:', options: ['Less damage than one knocked down','Same damage as one knocked down','More damage than one knocked down','No damage'], answerIdx: 2, explain: 'Standing = immobilised → more KE absorbed by tissues → greater damage. Knocked down dissipates energy into motion.', tag: '[PG-Inspired]' }
  ],
  'IG-08': [
    { stem: 'Greenstick fracture is characteristic of:', options: ['Elderly','Young children with pliable bones','Athletes','Postmortem fractures'], answerIdx: 1, explain: 'Greenstick = incomplete fracture in pliable young bones bending past elastic limit. Bone partially breaks on one side, like a green stick.', tag: '[PG-Inspired]' },
    { stem: 'Spiral fracture of long bone suggests:', options: ['Direct blunt blow','Twisting force','Compression','Greenstick mechanism'], answerIdx: 1, explain: 'Twisting strain → spiral fracture line along bone shaft. In young child without adequate history → child abuse marker.', tag: '[PG-Inspired]' },
    { stem: 'Blast injury (primary) is caused by:', options: ['Flying debris','Body thrown by blast wave','★ Compression of gas in body cavities','Heat from explosion'], answerIdx: 2, explain: 'Primary blast = violent gas compression → barotrauma to lung, eardrum, GI. Secondary = debris. Tertiary = body thrown. Quaternary = burns/inhalation. (Ch 10)', tag: '[PG-Inspired]' }
  ],
  'IG-09': [
    { stem: 'The single most important sign distinguishing antemortem from postmortem injury is:', options: ['Bleeding','Erythema','Vital reaction (PMN infiltrate, fibrin, cellular response)','Color of margins'], answerIdx: 2, explain: 'Vital reaction (PMN, fibrin, erythema, swelling, clot) = single most important sign. Without circulation, body cannot mount inflammation.', tag: '[PG-Inspired]' },
    { stem: 'Which is NOT a feature of antemortem injury?', options: ['Active bleeding','Clot formation','Erythema and swelling','Sharp margins with no surrounding response'], answerIdx: 3, explain: 'AM injury has erythema, swelling, bleeding, clot, PMN infiltrate. Sharp margins with NO response → suggests POSTMORTEM injury.', tag: '[PG-Inspired]' },
    { stem: 'Skin fissures from decomposition can be mistaken for:', options: ['Surgical incisions','Antemortem lacerations / incised wounds','Burns','Bite marks'], answerIdx: 1, explain: 'Decomposition gas distends skin → skin fissures (splits) mimic AM lacerations/incised wounds. PM artefact (Ch 6).', tag: '[PG-Inspired]' }
  ],
  'IG-10': [
    { stem: 'In a contusion, a GREEN color suggests age of approximately:', options: ['1 day','3 days','5-7 days','&gt; 2 weeks'], answerIdx: 2, explain: 'R-B-G-Y rule: Red (0-2 d) → Blue/Black (3-5 d) → ★ GREEN/Biliverdin (5-7 d) → Yellow/Bilirubin (7-12 d).', tag: '[PG-Inspired]' },
    { stem: 'The yellow color in resolving contusion is due to:', options: ['Oxyhemoglobin','Deoxyhemoglobin','Biliverdin','Bilirubin'], answerIdx: 3, explain: 'Yellow color = BILIRUBIN (7-12 days). Green = biliverdin (5-7 d). Red/purple = oxyhemoglobin. Blue/black = deoxyhemoglobin.', tag: '[PG-Inspired]' },
    { stem: 'First sign of bone fracture union visible on X-ray is at approximately:', options: ['3 days','1 week','3 weeks','6 months'], answerIdx: 2, explain: 'Callus formation (stage 3 of 5) = visible on X-ray at ~3 weeks. Earlier stages: hematoma (0-7 d), granulation (2-3 wk).', tag: '[PG-Inspired]' },
    { stem: 'In an abrasion, the dark red scab forms at approximately:', options: ['Fresh (immediate)','12-24 hours','4-7 days','&gt; 14 days'], answerIdx: 1, explain: 'Abrasion gross: Fresh = reddish, no scab · 12-24 h = dark red scab · 1-2 d = reddish brown · 4-7 d = brown/black · 7-14 d = scab falls off.', tag: '[PG-Inspired]' }
  ]
};

const DIFF_TABLES = [
  {
    id: 'DT-1', title: '★ Injury vs Hurt vs Wound — Legal Terminology', shortTitle: 'Injury · Hurt · Wound',
    intro: 'Three terms with overlapping but distinct legal meanings.',
    columns: ['Term','Source','Definition','Scope'],
    rows: [
      ['<strong>★ Injury</strong>','★ BNS 2(14) / IPC 44','"Any harm caused ILLEGALLY to a person in body, mind, reputation, or property"','★ WIDEST — includes mental + reputation + property'],
      ['<strong>★ Hurt</strong>','★ BNS 114 / IPC 319','"Whoever causes bodily PAIN, disease, or infirmity"','Bodily — pain/disease/infirmity'],
      ['<strong>★ Wound</strong>','Not statutorily defined','"Any lesion, external or internal, caused by violence ± breach of continuity of skin"','Medical term, broader than colloquial'],
      ['<strong>Grievous hurt</strong>','★ BNS 116 / IPC 320','8 clauses (Ch 13)','Most serious'],
      ['<strong>Simple injury</strong>','BNS 115 / IPC 323','Heals without complication','Minor']
    ],
    parentDiagrams: ['IG-01'],
    mcqs: [
      { stem: 'Which is the WIDEST in scope?', options: ['Wound','Hurt','Injury','Simple injury'], answerIdx: 2, explain: 'Injury (BNS 2(14)) is widest — includes body, mind, reputation, property.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-2', title: '★ 4 Classifications of Injury — Master Table', shortTitle: '4 Classifications',
    columns: ['Classification','Categories'],
    rows: [
      ['<strong>I. By Causative Force</strong>','Mechanical · Thermal · Chemical · Miscellaneous (electricity, lightning, X-rays, radioactive)'],
      ['<strong>II. Medicolegal</strong>','Suicidal · Homicidal · Accidental · Defence · Fabricated'],
      ['<strong>III. Relation to Death</strong>','Antemortem · Postmortem'],
      ['<strong>IV. Legal</strong>','Simple · Grievous (BNS 116 / IPC 320 — 8 clauses)']
    ],
    parentDiagrams: ['IG-01','IG-02','IG-03'],
    mcqs: [
      { stem: 'Defence wound is classified under:', options: ['Causative force','Medicolegal','Relation to death','Legal'], answerIdx: 1, explain: 'Defence wounds belong to MEDICOLEGAL classification (suicidal · homicidal · accidental · defence · fabricated).', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-3', title: '★ 3 Primary Forces — Tensile vs Compressive vs Shearing', shortTitle: '3 Forces',
    intro: 'All forces on body reduce to 3 primary types; each produces characteristic injury.',
    columns: ['Feature','Tensile','Compressive','Shearing'],
    rows: [
      ['Synonym','Traction-strain','Compression-strain','Shear-strain'],
      ['★ Effect','Pulls apart','Pushes together','Slides one part over adjacent'],
      ['★ Volume change','Decrease (separation)','★ NO (resists)','★ NO (only shape change)'],
      ['Tissue susceptibility','Gas-containing OK · soft tissues rupture','★ Gas tissues compressible · others resist','All tissues affected'],
      ['Classic examples','Avulsion · mesenteric tear · splenic capsule','★ Chest crush → Tardieu petechiae · bone fracture','★ DAI (Ch 11) · aortic shear at ligamentum arteriosum'],
      ['Forensic application','Avulsion in machinery accidents','Crush injury, deep tissue rupture','Rotational head injury, deceleration RTA']
    ],
    parentDiagrams: ['IG-06'],
    mcqs: [
      { stem: 'Which force produces no change in body volume?', options: ['Tensile','Compressive','Shearing','All do'], answerIdx: 2, explain: 'Shearing alters shape but NOT volume. Tensile reduces volume by separation. Compressive resisted by most tissues.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-4', title: '★ 4 Factors Influencing Wound Causation', shortTitle: '4 Factors',
    columns: ['Factor','Sub-factors','Key Principle'],
    rows: [
      ['<strong>1. Nature of weapon</strong>','Sharp vs blunt · rigid vs plastic · breaks vs intact','Sharp narrow concentrates force · rigid weapons cause more damage'],
      ['<strong>2. Energy discharged</strong>','★ KE = ½ MV²','★ Velocity exponentially more important than mass'],
      ['<strong>3. Conditions of discharge</strong>','Mobile vs static victim · time of discharge','Static victim absorbs more KE · longer time = less damage'],
      ['<strong>4. Tissue affected</strong>','Skin · subQ · muscle · bone · fluid · gas','Different tissues respond differently to same force']
    ],
    parentDiagrams: ['IG-07'],
    mcqs: [
      { stem: 'Doubling weapon velocity changes kinetic energy by a factor of:', options: ['1× (no change)','2×','4×','8×'], answerIdx: 2, explain: 'KE = ½ MV² · doubling V → V² becomes 4× → KE quadruples. Velocity exponentially affects damage.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-5', title: '★ Antemortem vs Postmortem Injury — Vital Reaction Comparison', shortTitle: 'AM vs PM',
    intro: 'Critical forensic distinction. Vital reaction is the single most important discriminator.',
    columns: ['Feature','Antemortem','Postmortem'],
    rows: [
      ['★ Vital reaction','★ PRESENT','★ ABSENT'],
      ['Bleeding','★ Active · clot formation','Minimal / none (no circulation)'],
      ['Erythema · swelling','PRESENT','ABSENT'],
      ['Margins','Everted · bruised','Sharp · pale · dry · yellowish'],
      ['Surrounding tissue','Blood infiltration','No infiltration'],
      ['Histology — PMN','★ Infiltrate (within 4-6 h)','★ Absent'],
      ['Histology — fibrin','Deposition','None'],
      ['Cellular changes','Inflammatory response','Autolysis only'],
      ['Enzyme markers','Cathepsin (immediate) · Alkaline phosphatase (4 h)','Absent'],
      ['Common pitfalls','Peri-mortem injuries may have minimal reaction','Decomposition fissures · CPR # · rodent gnawing · heat hematoma mimic AM']
    ],
    parentDiagrams: ['IG-09'],
    mcqs: [
      { stem: 'Postmortem wound differs from antemortem by:', options: ['Gaps','No clots','★ Absence of erythema + cellular changes (vital reaction)','All of the above'], answerIdx: 2, explain: 'Absence of vital reaction (erythema + cellular changes) is the BEST discriminator. NEET-PG 2016 Q27 verbatim.', tag: '[NEET-PG 2016]' }
    ]
  },
  {
    id: 'DT-6', title: '★ Contusion Age Estimation — RBGY Color Timeline', shortTitle: 'Contusion RBGY',
    intro: 'Hemoglobin → biliverdin → bilirubin pigment evolution drives the colour timeline.',
    columns: ['Age','Color','Pigment'],
    rows: [
      ['★ Fresh (0-2 days)','RED / PURPLE','Oxyhemoglobin (intact RBCs)'],
      ['★ 3-5 days','BLUE → BLACK','Deoxyhemoglobin'],
      ['★ 5-7 days','★ GREEN','★ BILIVERDIN'],
      ['★ 7-12 days','★ YELLOW','★ BILIRUBIN'],
      ['&gt; 12 days','Fades to normal','Bilirubin cleared']
    ],
    parentDiagrams: ['IG-10'],
    mcqs: [
      { stem: 'Green color in a contusion is due to:', options: ['Oxyhemoglobin','Deoxyhemoglobin','Biliverdin','Bilirubin'], answerIdx: 2, explain: 'Green = BILIVERDIN (5-7 days). Then converts to yellow = BILIRUBIN (7-12 d). Heme catabolism: Hb → biliverdin → bilirubin.', tag: '[PG-Inspired]' }
    ]
  }
];

const SUBJ = [
  {
    id: 'SAQ-8.1', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'Define injury, hurt, and wound. Mention the relevant statutory sections under IPC and BNS.',
    answer: `<h4>★ Definitions</h4>
<p><strong>★ INJURY:</strong> Section 44 IPC (now ★ <strong>BNS Section 2(14)</strong>) defines INJURY as:</p>
<p><em>"Any HARM caused ILLEGALLY to a person in BODY, MIND, REPUTATION, or PROPERTY."</em></p>
<p><strong>★ HURT:</strong> Section 319 IPC (now ★ <strong>BNS Section 114</strong>) defines HURT as:</p>
<p><em>"Whoever causes bodily PAIN, DISEASE, or INFIRMITY to any person is said to cause hurt."</em></p>
<p><strong>★ WOUND:</strong> NOT statutorily defined in Indian law. Medical definition: "any LESION, external or internal, caused by violence, with or without breach of continuity of skin."</p>
<h4>★ Salient Features of Injury Definition</h4>
<ol>
<li>★ <strong>Wider meaning than medical</strong> — includes body + mind + reputation + property</li>
<li>★ <strong>Use of word "ILLEGAL"</strong> — not all injuries are illegal:
    <ul><li>Surgical incision with consent = LEGAL injury</li>
    <li>Therapeutic procedures, military combat = legal under specific circumstances</li></ul></li>
<li>"Hurt" is the legal term used because "wound" is not statutorily defined</li>
</ol>
<h4>★ IPC → BNS Map (2023)</h4>

| IPC Section | BNS Section | Subject |
|---|---|---|
| §44 | ★ §2(14) | Injury |
| §319 | ★ §114 | Hurt |
| §320 | ★ §116 | Grievous hurt (8 clauses) |
| §323 | §115 | Voluntarily causing hurt - punishment |
| §324 | §118 | Hurt by dangerous weapons |
| §326 | §118 | Grievous hurt by dangerous weapons |

<h4>★ Medical vs Legal Perception</h4>
<ul>
<li><strong>MEDICAL</strong> — anatomical lesion (focus on cause, mechanism, healing)</li>
<li><strong>LEGAL</strong> — broader; includes mind, reputation, property damage</li>
<li>Doctor must understand BOTH perspectives for accurate medico-legal reports</li>
</ul>
<h4>★ Grievous Hurt — 8 Clauses (BNS 116 / IPC 320)</h4>
<ol>
<li>Emasculation</li>
<li>Permanent loss of sight (either eye)</li>
<li>Permanent loss of hearing (either ear)</li>
<li>Loss of limb / joint</li>
<li>Permanent disfigurement of head/face</li>
<li>Fracture or dislocation of bone / tooth</li>
<li>Hurt that endangers life OR causes pain &gt; 20 days</li>
<li>Privation of any member or joint</li>
</ol>
<p>★ Detailed in Chapter 13 (Injury: Medicolegal Considerations).</p>`,
    sources: ['IG-01'],
    jumpToDiagram: 'IG-01'
  },
  {
    id: 'SAQ-8.2', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'Classify injuries. Mention the 4 main classification systems used.',
    answer: `<h4>★ 4 Major Classification Systems</h4>
<h5>I. According to CAUSATIVE FORCE</h5>
<p><strong>A) Mechanical injuries:</strong></p>
<ol>
<li>★ Blunt force — abrasion · contusion · laceration · fracture / dislocation</li>
<li>★ Sharp-edged weapon — incised wounds · chop wounds</li>
<li>★ Piercing weapons — stab wounds (penetrating · perforating)</li>
<li>★ Firearm — entry / exit wounds (Ch 10)</li>
</ol>
<p><strong>B) Thermal injuries:</strong></p>
<ol>
<li>Cold — frostbite · trench foot · immersion foot · hypothermia</li>
<li>Heat — burns · scalds · heat stroke</li>
</ol>
<p><strong>C) Chemical injuries:</strong></p>
<ol>
<li>Corrosion — corrosive acid · alkali · metal salts</li>
<li>Irritation — weak acids · weak alkalis</li>
</ol>
<p><strong>D) Miscellaneous:</strong></p>
<ol>
<li>Electricity (Ch 14)</li>
<li>Lightning (Ch 14)</li>
<li>X-rays · radioactive substances</li>
</ol>
<h5>★ II. MEDICOLEGAL Classification</h5>
<ol>
<li>★ <strong>Suicidal / self-inflicted</strong> — multiple varying-depth, hesitation cuts, suicide note</li>
<li>★ <strong>Homicidal</strong> — single deep wounds · defence wounds present · scene disturbed</li>
<li><strong>Accidental</strong> — pattern matches circumstance, no intent</li>
<li>★ <strong>Defence wounds</strong> — palms, forearms · victim raised hands to ward off</li>
<li>★ <strong>Fabricated</strong> — self-inflicted to mislead investigation</li>
</ol>
<h5>★ III. Relation to DEATH</h5>
<ol>
<li>★ <strong>Antemortem</strong> — vital reaction present (PMN infiltrate, bleeding, erythema)</li>
<li>★ <strong>Postmortem</strong> — no vital reaction</li>
</ol>
<h5>★ IV. LEGAL Classification</h5>
<ol>
<li><strong>SIMPLE injury</strong> (BNS 115 / IPC 323) — heals without complication</li>
<li>★ <strong>GRIEVOUS hurt</strong> (BNS 116 / IPC 320) — 8 specific clauses</li>
</ol>
<h4>Cross-Chapter Map</h4>
<ul>
<li>Mechanical → Ch 9 + Ch 11 (regional) + Ch 12 (RTA)</li>
<li>Thermal → Ch 14</li>
<li>Chemical → Ch 34 (toxicology)</li>
<li>Firearm → Ch 10</li>
<li>Medicolegal aspects of grievous hurt → Ch 13</li>
</ul>`,
    sources: ['IG-02 · IG-03'],
    jumpToDiagram: 'IG-02'
  },
  {
    id: 'SAQ-8.3', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'Discuss the biophysics of wound production. Mention the kinetic energy formula and the 3 primary forces acting on body.',
    answer: `<h4>★ Biophysics Principle</h4>
<p>A wound is produced when the INTENSITY of APPLIED FORCE EXCEEDS the CAPABILITY of TISSUES to adapt or resist.</p>
<p><strong>★ Body absorbs mechanical force via:</strong></p>
<ol>
<li>RESILIENCE + ELASTICITY of soft tissues</li>
<li>RIGID STRENGTH of skeletal framework</li>
</ol>
<h4>★ Kinetic Energy Formula</h4>
<p>★ <strong>F α M</strong> (linear relationship with mass)</p>
<p>★ <strong>F α V²</strong> (exponential relationship with velocity)</p>
<p>★ <strong>Force = ½ × Mass × Velocity²</strong> (KE = ½ MV²)</p>
<p><strong>Key implications:</strong></p>
<ul>
<li>Doubling MASS → KE doubles (×2)</li>
<li>★ Doubling VELOCITY → KE quadruples (×4)</li>
<li>★ Therefore <strong>VELOCITY is MORE IMPORTANT than MASS</strong></li>
</ul>
<p><em>Example: a 1-kg brick PRESSED against scalp = no injury; same brick THROWN at 10 ft/s = may break skull.</em></p>
<h4>★ Force-Area Relationship</h4>
<p>★ Pressure = Force / Area</p>
<ul>
<li>Same force, SMALLER area → GREATER damage</li>
<li>Same force, LARGER area → LESS damage</li>
<li>★ Explains why sharp weapons (small contact area) cause deep penetrating injury</li>
</ul>
<h4>★ Counter Force — 2 Scenarios</h4>
<ol>
<li>★ MOVING WEAPON strikes STATIONARY BODY → counter-force = INERTIA of body</li>
<li>★ MOVING BODY strikes STATIONARY OBJECT → counter-force = RIGIDITY of object</li>
</ol>
<h4>★ 3 Primary Forces</h4>
<table><tr><th>Force</th><th>Effect</th><th>Examples</th></tr>
<tr><td>★ <strong>TENSILE</strong> (traction-strain)</td><td>Pulls body apart</td><td>Avulsion · mesenteric tear · splenic capsule tear</td></tr>
<tr><td>★ <strong>COMPRESSIVE</strong> (compression-strain)</td><td>Pushes body together · all tissues except gas resist</td><td>Crush injury · Tardieu petechiae · bone fracture</td></tr>
<tr><td>★ <strong>SHEARING</strong> (shear-strain)</td><td>Slides one part over adjacent · alters shape NOT volume</td><td>★ DAI (Ch 11) · aortic shear at ligamentum arteriosum (RTA)</td></tr></table>
<h4>★ 4 Factors Influencing Wound Causation</h4>
<ol>
<li>Nature of object / weapon (sharp vs blunt, rigid vs plastic, weapon breaks)</li>
<li>Amount of energy discharged (½ MV² — velocity exponential)</li>
<li>Conditions of discharge (mobile vs static victim, time of discharge)</li>
<li>Nature of tissue affected (skin · subQ · muscle · bone · fluid · gas)</li>
</ol>`,
    sources: ['IG-05 · IG-06 · IG-07'],
    jumpToDiagram: 'IG-05'
  },
  {
    id: 'SAQ-8.4', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'Differentiate antemortem from postmortem injuries. Mention common postmortem mimics.',
    answer: `<h4>★ Key Discriminator: VITAL REACTION</h4>
<p>★ Vital reaction = inflammatory + cellular response of LIVING tissues to injury — only possible with intact circulation.</p>
<h4>★ Antemortem (AM) Injury Features</h4>
<p><strong>Gross:</strong></p>
<ul>
<li>★ ACTIVE bleeding · CLOT formation</li>
<li>★ ERYTHEMA · swelling · ecchymosis</li>
<li>Margins everted / bruised</li>
<li>Surrounding tissue blood-infiltrated</li>
</ul>
<p><strong>Microscopic:</strong></p>
<ul>
<li>★ PMN INFILTRATE (within 4-6 h)</li>
<li>FIBRIN deposition</li>
<li>★ 3 layers at 12 h:
    <ul><li>Surface: fibrin + RBCs</li>
    <li>Middle: PMN</li>
    <li>Deep: damaged / abnormally staining collagen</li></ul></li>
<li>Enzyme markers: Cathepsin (immediate) → Alkaline phosphatase (4 h)</li>
</ul>
<h4>★ Postmortem (PM) Injury Features</h4>
<p><strong>Gross:</strong></p>
<ul>
<li>★ MINIMAL or NO bleeding (no circulation)</li>
<li>NO erythema · no swelling</li>
<li>Margins sharp · NO eversion</li>
<li>PALE, dry, yellowish edges</li>
</ul>
<p><strong>Microscopic:</strong></p>
<ul>
<li>★ NO PMN infiltrate</li>
<li>NO fibrin · autolysis only</li>
<li>No vital cellular reaction</li>
</ul>
<h4>★ PERI-MORTEM Period</h4>
<ul>
<li>Injuries within seconds of death → minimal/ambiguous vital reaction</li>
<li>Agonal reaction may be partial</li>
<li>Histology + enzymatic markers help clarify</li>
<li>Important in homicide vs natural-death-followed-by-dumping cases</li>
</ul>
<h4>★ Common PM Mimics — Beware</h4>
<ol>
<li>★ <strong>Decomposition skin fissures</strong> → mimic LACERATIONS / incised wounds (Ch 6)</li>
<li>★ <strong>Rodent / insect gnawing</strong> → mimic puncture / abraded wounds</li>
<li>★ <strong>CPR</strong> → rib + sternum fractures (bilateral anterior) → mimic assault</li>
<li>★ <strong>Heat hematoma in burns</strong> → mimics true EDH (Ch 14); CO in clot confirms heat origin</li>
<li>★ <strong>Undertaker&apos;s fracture</strong> (C6-C7) from rough body handling → mimics antemortem cervical injury</li>
<li>★ <strong>Hypostasis (PM lividity)</strong> in dependent areas → mimics contusion</li>
<li>★ <strong>PM bloating</strong> → may obscure injuries</li>
</ol>
<h4>Forensic Importance</h4>
<ul>
<li>★ Wrong AM/PM classification → wrong cause / manner of death</li>
<li>Wrong sequence reconstruction in multi-injury cases</li>
<li>Critical to scrutinise every finding for vital reaction</li>
<li>Histology (PMN infiltrate, fibrin) is gold standard when gross is ambiguous</li>
</ul>`,
    sources: ['IG-09'],
    jumpToDiagram: 'IG-09'
  },
  {
    id: 'LAQ-8.1', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank-Inspired',
    question: 'Define injury. Classify injuries comprehensively. Describe biophysics of wound production with emphasis on forces, mass-velocity relationship, and tissue response.',
    answer: `<h4>★ Definition</h4>
<p>★ <strong>Section 44 IPC (BNS 2(14))</strong> defines INJURY: "Any harm caused ILLEGALLY to a person in body, mind, reputation, or property."</p>
<p>★ <strong>Section 319 IPC (BNS 114)</strong> defines HURT: "Whoever causes bodily pain, disease, or infirmity to any person is said to cause hurt."</p>
<p>★ Legal "wound" is broader than medical — "any lesion, external or internal, caused by violence with or without breach of continuity of skin." Not statutorily defined.</p>
<h4>★ Salient Features of Injury Definition</h4>
<ol>
<li>★ Wider meaning than medical — includes body + mind + reputation + property</li>
<li>★ Use of word "ILLEGAL" — surgical incision with consent is LEGAL injury</li>
</ol>
<h4>★ Classification (4 Systems)</h4>
<h5>I. By Causative Force</h5>
<p><strong>A) Mechanical:</strong> blunt · sharp · piercing · firearm.</p>
<p><strong>B) Thermal:</strong> cold (frostbite, trench foot) · heat (burns, scalds).</p>
<p><strong>C) Chemical:</strong> corrosion (acids, alkalis, salts) · irritation.</p>
<p><strong>D) Miscellaneous:</strong> electricity · lightning · X-rays · radioactive.</p>
<h5>II. Medicolegal</h5>
<p>Suicidal · Homicidal · Accidental · Defence · Fabricated.</p>
<h5>III. Relation to Death</h5>
<p>Antemortem (with vital reaction) · Postmortem (without).</p>
<h5>IV. Legal</h5>
<p>Simple (BNS 115 / IPC 323) · Grievous hurt (BNS 116 / IPC 320 — 8 clauses).</p>
<h4>★ BIOPHYSICS OF WOUND PRODUCTION</h4>
<h5>Principle</h5>
<p>★ A wound is produced when the INTENSITY of APPLIED FORCE EXCEEDS the CAPABILITY of TISSUES to adapt or resist.</p>
<p>★ Body absorbs mechanical force via: (1) resilience + elasticity of soft tissues, (2) rigid strength of skeletal framework.</p>
<h5>★ Mass-Velocity Relationship</h5>
<p>★ <strong>Kinetic Energy = ½ × Mass × Velocity²</strong></p>
<ul>
<li>Mass-energy LINEAR (×2 mass → ×2 energy)</li>
<li>★ Velocity-energy EXPONENTIAL (×2 velocity → ×4 energy)</li>
<li>★ <strong>VELOCITY more important than MASS</strong></li>
</ul>
<p><em>Example: 1 kg brick pressed against scalp = no injury · thrown at 10 ft/s = may break skull.</em></p>
<h5>Force-Area Relationship</h5>
<p>★ Pressure = Force / Area. Same force over smaller area → greater damage. Explains why sharp weapons penetrate deep.</p>
<h5>Counter Force — 2 Scenarios</h5>
<ol>
<li>Moving weapon strikes stationary body → counter = INERTIA</li>
<li>Moving body strikes stationary object → counter = RIGIDITY</li>
</ol>
<h5>★ 3 Primary Forces</h5>
<p><strong>1. ★ TENSILE</strong> (traction-strain) — pulls apart. Examples: avulsion, mesenteric tear, splenic capsule rupture.</p>
<p><strong>2. ★ COMPRESSIVE</strong> (compression-strain) — pushes together. All tissues resist EXCEPT gas-containing. Examples: chest crush → Tardieu petechiae from retrograde venous blood displacement.</p>
<p><strong>3. ★ SHEARING</strong> (shear-strain) — slides adjacent layers. Alters shape, NOT volume. Examples: ★ DAI (Ch 11), aortic shear in deceleration RTA.</p>
<h5>★ 4 Factors Influencing Wound Causation</h5>
<ol>
<li>★ Nature of weapon (sharp vs blunt, rigid vs plastic, weapon breaks on impact)</li>
<li>★ Energy discharged (½ MV² — velocity exponential)</li>
<li>★ Conditions of discharge (mobile vs static victim, time of energy discharge)</li>
<li>★ Nature of tissue affected</li>
</ol>
<h5>★ Tissue-Specific Response</h5>
<ul>
<li><strong>SKIN</strong> — pliable, little elastic, resistant to traction (keratin cohesion); ★ splits when crushed against bone</li>
<li><strong>SubQ tissue</strong> — plastic + pliable, cushions ordinary blows</li>
<li><strong>MUSCLE</strong> — elastic + plastic, absorbs to limit</li>
<li><strong>BONE</strong> — rigid + elastic, ★ greenstick (young) or spiral (twisting) fracture if elastic limit exceeded</li>
<li><strong>FLUID</strong> — incompressible, transmits force (retrograde venous displacement → Tardieu spots)</li>
<li><strong>GAS</strong> — compressible, ★ blast injury when violently compressed</li>
</ul>
<h5>★ Skin Resistance to Stab</h5>
<p>★ Calcified cartilage/bone &gt; SKIN &gt; muscle &gt; subQ fat</p>
<p>★ Thinnest skin: eyelids + scrotum (fraction of mm) · Thickest: palms + soles.</p>
<h4>★ Skin Anatomy (5 Epidermal Layers)</h4>
<p>Deep to superficial:</p>
<ol>
<li>Stratum BASALE (germinativum)</li>
<li>Stratum SPINOSUM (Malpighian / prickle)</li>
<li>Stratum GRANULOSUM</li>
<li>Stratum LUCIDUM (palms/soles only)</li>
<li>★ Stratum CORNEUM — keratinised dead cells, thickness varies by region</li>
</ol>
<p>★ Epidermis is avascular — abrasions involving only epidermis don&apos;t bleed; dermal involvement → bleeding.</p>`,
    sources: ['IG-01 · IG-02 · IG-05 · IG-06 · IG-07 · IG-08'],
    jumpToDiagram: 'IG-05'
  },
  {
    id: 'LAQ-8.2', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank-Inspired',
    question: 'Discuss the medicolegal aspects of skin and tissue response to mechanical force. Include skin anatomy, factors influencing wound severity, and antemortem vs postmortem differentiation.',
    answer: `<h4>★ Skin — Forensic Anatomy</h4>
<ul>
<li>★ Weight: 4 kg · Surface area: 2 m²</li>
<li>3 layers: EPIDERMIS · DERMIS · HYPODERMIS</li>
<li>★ Epidermis avascular — abrasions limited to epidermis don&apos;t bleed</li>
</ul>
<h5>★ 5 Layers of Epidermis (deep → superficial)</h5>
<ol>
<li>Stratum BASALE / germinativum — cell division</li>
<li>Stratum SPINOSUM (Malpighian) — desmosomes</li>
<li>Stratum GRANULOSUM — keratohyalin granules</li>
<li>Stratum LUCIDUM — palms/soles only</li>
<li>★ Stratum CORNEUM — keratinised dead cells (most superficial)</li>
</ol>
<h5>★ Regional Thickness</h5>
<ul>
<li>Thickest: ★ palms + soles</li>
<li>Thinnest: ★ scrotum + eyelids (fraction of mm)</li>
<li>★ Forensic relevance — determines force needed to penetrate skin + cause bleeding</li>
</ul>
<h5>Stab Wound Resistance Hierarchy</h5>
<p>★ Calcified cartilage/bone &gt; SKIN &gt; muscle &gt; subQ fat</p>
<h4>★ Tissue Response to Mechanical Force</h4>
<h5>Skin</h5>
<ul>
<li>Pliable, little elastic, resistant to traction (keratin cohesion)</li>
<li>★ Skin SPLITS when struck + crushed against rigid bone underneath</li>
</ul>
<h5>SubQ Tissue</h5>
<ul>
<li>Plastic + pliable — fat + connective tissue</li>
<li>★ Cushions ordinary blows</li>
<li>Severe blows crush vessels → contusion / laceration</li>
</ul>
<h5>Muscle</h5>
<ul>
<li>Elastic + plastic; absorbs to limit</li>
<li>If elastic limit exceeded → avulsed/torn/ruptured/crushed</li>
<li>Crush syndrome → myoglobinuria</li>
</ul>
<h5>Bone</h5>
<ul>
<li>★ Rigid + elastic; bends without breaking, recoils</li>
<li>Elastic limit exceeded → breaks at MAXIMUM CONVEXITY of bending</li>
<li>★ Greenstick fracture (young pliable bones)</li>
<li>★ Spiral fracture (twisting strain)</li>
<li>★ Comminuted fracture (high energy + wide area)</li>
</ul>
<h5>Fluid + Gas</h5>
<ul>
<li>★ Fluid incompressible → transmits force (Tardieu spots in chest crush)</li>
<li>★ Gas compressible → violent compression → blast injury</li>
</ul>
<h4>★ 4 Factors Influencing Wound Severity</h4>
<ol>
<li><strong>Nature of weapon</strong> — sharp vs blunt · rigid vs plastic · breaks vs intact</li>
<li><strong>Energy discharged</strong> — ★ KE = ½ MV² — velocity exponentially more important than mass</li>
<li><strong>Conditions</strong> — mobile vs static victim · time of discharge</li>
<li><strong>Tissue affected</strong> — skin · subQ · muscle · bone · fluid · gas</li>
</ol>
<h4>★ Antemortem vs Postmortem Differentiation</h4>
<table><tr><th>Feature</th><th>Antemortem</th><th>Postmortem</th></tr>
<tr><td>★ Vital reaction</td><td>★ PRESENT</td><td>★ ABSENT</td></tr>
<tr><td>Bleeding</td><td>Active + clot</td><td>Minimal/none</td></tr>
<tr><td>Erythema · swelling</td><td>Present</td><td>Absent</td></tr>
<tr><td>Margins</td><td>Everted, bruised</td><td>Sharp, pale, dry</td></tr>
<tr><td>PMN infiltrate</td><td>★ Present (4-6 h)</td><td>★ Absent</td></tr>
<tr><td>Fibrin</td><td>Deposition</td><td>None</td></tr>
<tr><td>Enzyme markers</td><td>Cathepsin · Alk phos (4 h)</td><td>Absent</td></tr>
<tr><td>Cellular response</td><td>Inflammation</td><td>Autolysis only</td></tr></table>
<h4>★ PM Mimics Beware</h4>
<ul>
<li>Decomposition skin fissures → mimic lacerations</li>
<li>Rodent / insect gnawing → mimic puncture wounds</li>
<li>CPR → rib + sternum fractures (mimic assault)</li>
<li>Heat hematoma → mimics EDH (Ch 14); CO in clot confirms heat origin</li>
<li>Undertaker&apos;s fracture (C6-C7) from rough handling</li>
<li>Hypostasis (PM lividity) → mimic contusion</li>
</ul>
<h4>★ Wound Age — Contusion RBGY Rule</h4>
<ul>
<li>★ 0-2 days: RED/PURPLE (oxyhemoglobin)</li>
<li>★ 3-5 days: BLUE/BLACK (deoxyhemoglobin)</li>
<li>★ 5-7 days: GREEN (BILIVERDIN)</li>
<li>★ 7-12 days: YELLOW (BILIRUBIN) → fades</li>
</ul>
<h4>★ Medicolegal Aspects</h4>
<ul>
<li>Document all injuries with diagrams, photographs, measurements (Ch 6 + 10-point format)</li>
<li>Age of injury correlates with alleged time of incident</li>
<li>Pattern of injuries differentiates suicidal · homicidal · accidental · fabricated</li>
<li>★ Vital reaction is single most important AM/PM discriminator</li>
<li>Wrong classification → wrong cause/manner of death → miscarriage of justice</li>
</ul>`,
    sources: ['IG-04 · IG-07 · IG-08 · IG-09 · IG-10'],
    jumpToDiagram: 'IG-04'
  },
  {
    id: 'LAQ-8.3', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank-Inspired',
    question: 'A 30-year-old man was brought dead with multiple injuries on the body. Discuss the systematic approach to documenting and interpreting these injuries.',
    answer: `<h4>★ Systematic Approach to Multiple Injuries</h4>
<h5>1. Pre-Autopsy Preparation</h5>
<ul>
<li>Receive requisition + dead body challan + inquest report</li>
<li>Verify identity (police constable + relatives if known)</li>
<li>★ Examine in DAYLIGHT (Ch 6 rule)</li>
<li>Photograph with case number + scale</li>
</ul>
<h5>2. Clothing Examination (Before Removal)</h5>
<ul>
<li>Stains: blood, semen, urine, vomit</li>
<li>Cuts/tears — correlate alignment with body injuries</li>
<li>Foreign material — hair, fibre, glass, vegetation, GSR</li>
<li>Photograph each garment + dry + preserve in paper</li>
</ul>
<h5>3. ★ 10-Point Injury Documentation Format (per injury)</h5>
<ol>
<li>★ <strong>Type</strong> — abrasion · contusion · laceration · incised · stab · chop · firearm · burn · electrical</li>
<li>★ <strong>Site</strong> — exact anatomical position + cm from fixed landmark</li>
<li>★ <strong>Dimensions</strong> — length × width × depth (metric)</li>
<li>★ <strong>Shape</strong> — linear · curved · irregular · stellate</li>
<li>★ <strong>Margins / edges</strong> — clean, abraded, bruised, everted, inverted</li>
<li>★ <strong>Floor / depth</strong> — tissue bridges (laceration), no bridges (incised)</li>
<li>★ <strong>Surrounding tissue</strong> — bruising, swelling, vital reaction</li>
<li>★ <strong>Direction</strong> — tailing, force vector</li>
<li>★ <strong>Probable weapon</strong> — sharp / blunt / dangerous</li>
<li>★ <strong>Age of injury</strong> — fresh / 24 h / 2-7 d / &gt; 1 wk (RBGY for contusions)</li>
</ol>
<h5>4. Sequence of Examination</h5>
<ul>
<li>Number injuries head-to-toe</li>
<li>Photograph each with scale + injury number</li>
<li>Note relationship between injuries (e.g., entry + exit of stab)</li>
</ul>
<h5>5. ★ Classification of Each Injury</h5>
<p><strong>I. By Causative Force:</strong></p>
<ul>
<li>Mechanical — blunt/sharp/piercing/firearm</li>
<li>Thermal · chemical · miscellaneous</li>
</ul>
<p><strong>II. Medicolegal:</strong></p>
<ul>
<li>Suicidal / Homicidal / Accidental / Defence / Fabricated</li>
</ul>
<p><strong>III. Relation to Death (★ critical):</strong></p>
<ul>
<li>Antemortem — vital reaction present (PMN infiltrate, bleeding, erythema)</li>
<li>Postmortem — no vital reaction</li>
</ul>
<p><strong>IV. Legal:</strong></p>
<ul>
<li>Simple (BNS 115) · Grievous hurt (BNS 116 / IPC 320 — 8 clauses)</li>
</ul>
<h5>6. ★ Pattern Analysis</h5>
<p><strong>Suggesting SUICIDAL:</strong></p>
<ul>
<li>Multiple injuries varying in depth — hesitation cuts</li>
<li>Accessible site (left wrist if right-handed)</li>
<li>Clothes spared, weapon at hand, suicide note</li>
<li>Secluded location, room locked</li>
</ul>
<p><strong>Suggesting HOMICIDAL:</strong></p>
<ul>
<li>Single or few DEEP wounds</li>
<li>Defence wounds on palms / forearms / fingers</li>
<li>Clothes cut</li>
<li>Scene disturbed, no locking from inside</li>
<li>Patterns inconsistent with self-infliction (e.g., back of head)</li>
</ul>
<p><strong>Suggesting ACCIDENTAL:</strong></p>
<ul>
<li>Pattern matches reported circumstance (e.g., RTA — radiator/bumper pattern)</li>
<li>Distribution consistent with mechanism</li>
</ul>
<p><strong>Suggesting FABRICATED:</strong></p>
<ul>
<li>Within reach of victim&apos;s own hand</li>
<li>Multiple superficial parallel wounds</li>
<li>Spare vital areas</li>
<li>Clothes not corresponding</li>
</ul>
<h5>7. ★ Biophysics Interpretation</h5>
<ul>
<li>Estimate weapon — sharp (small contact area, deep), blunt (broader, less deep)</li>
<li>Estimate force — KE = ½ MV²</li>
<li>★ Note tissue-specific response — skin splits on bone, spiral fracture suggests twist, blast lung suggests explosion</li>
</ul>
<h5>8. Age of Injury Estimation</h5>
<ul>
<li>★ Contusion RBGY: Red 0-2 d → Blue/Black 3-5 d → Green 5-7 d → Yellow 7-12 d</li>
<li>Abrasion: fresh (no scab) → dark red scab (12-24 h) → brown (1-2 d) → black (4-7 d) → falls off (7-14 d)</li>
<li>Histology: PMN infiltrate (4-6 h), epithelial regeneration (48 h)</li>
</ul>
<h5>9. ★ Cause-of-Death Determination</h5>
<ul>
<li>Identify FATAL injury (incompatible with life)</li>
<li>Distinguish from non-fatal coexisting injuries</li>
<li>Note immediate, antecedent, underlying causes</li>
<li>Manner of death (natural / accidental / suicidal / homicidal / undetermined)</li>
</ul>
<h5>10. Documentation + Reporting</h5>
<ul>
<li>Body diagrams with injury numbers</li>
<li>Photographs (case number + scale + injury number)</li>
<li>Detailed 10-point description per injury</li>
<li>Histology samples for vital reaction questions</li>
<li>Conclusion: nature (simple/grievous), antemortem/postmortem, weapon, age, manner</li>
</ul>
<h4>★ Common Pitfalls</h4>
<ul>
<li>Missing peri-mortem injuries (ambiguous vital reaction)</li>
<li>★ Decomposition skin fissures mistaken for lacerations</li>
<li>★ CPR rib fractures mistaken for assault</li>
<li>★ Heat hematoma mistaken for EDH (Ch 14)</li>
<li>Rodent/insect gnawing mistaken for puncture wounds</li>
<li>Hypostasis mistaken for contusion</li>
</ul>`,
    sources: ['IG-03 · IG-09 · IG-10'],
    jumpToDiagram: 'IG-03'
  }
];

return {
  chapterNumber: 8,
  chapterTitle: 'Injury — General Considerations and Biophysics',
  prereqs: [
    { term: 'Injury (BNS 2(14) / IPC 44)', meaning: 'Any harm caused ILLEGALLY to a person in body, mind, reputation, or property.' },
    { term: 'Hurt (BNS 114 / IPC 319)', meaning: 'Bodily pain, disease, or infirmity caused to any person.' },
    { term: 'Wound', meaning: 'Not statutorily defined. Medical: any lesion external or internal caused by violence, ± breach of continuity of skin.' },
    { term: 'Grievous hurt (BNS 116 / IPC 320)', meaning: '8 specific clauses — emasculation, sight/hearing loss, limb loss, disfigurement, fracture, &gt; 20 days pain. Ch 13.' },
    { term: 'Simple injury (BNS 115 / IPC 323)', meaning: 'Heals without complication; minor.' },
    { term: 'Mechanical injury', meaning: '4 subtypes: blunt force, sharp-edged, piercing (stab), firearm. Ch 9-12.' },
    { term: 'Thermal injury', meaning: 'Cold (frostbite, hypothermia) OR heat (burns, scalds). Ch 14.' },
    { term: 'Chemical injury', meaning: 'Corrosion (acids, alkalis, salts) OR irritation (weak acids/alkalis). Ch 34.' },
    { term: 'Defence wound', meaning: 'On palms, forearms — victim raised hands to ward off attacker. Marker of homicide.' },
    { term: 'Hesitation cut', meaning: 'Tentative shallow parallel cut before fatal one — characteristic of suicide.' },
    { term: 'Fabricated wound', meaning: 'Self-inflicted to mislead — within reach, superficial, parallel, sparing vital areas.' },
    { term: 'Vital reaction', meaning: 'Inflammatory + cellular response of living tissues to injury — gold standard for AM identification.' },
    { term: 'PMN infiltrate', meaning: 'Polymorphonuclear cells appear within 4-6 hours in antemortem injuries.' },
    { term: 'Cathepsin', meaning: 'Enzyme released immediately after injury — early AM marker.' },
    { term: 'Alkaline phosphatase', meaning: 'Released around 4 hours after antemortem injury.' },
    { term: 'Stratum corneum', meaning: '★ Most superficial epidermal layer. Keratinized dead cells. Thinnest on scrotum + eyelids. Thickest on palms + soles.' },
    { term: 'Stratum basale', meaning: 'Deepest epidermal layer. Cell division here. Germinativum.' },
    { term: 'Epidermis', meaning: 'Avascular outer layer of skin. 5 sub-layers (Basale → Spinosum → Granulosum → Lucidum → Corneum).' },
    { term: 'Dermis', meaning: 'Contains blood vessels, nerves, glands. Pure abrasion (epidermis only) does not bleed.' },
    { term: 'Hypodermis', meaning: 'Subcutaneous fat + connective tissue. Cushions ordinary blows.' },
    { term: 'Kinetic energy (½ MV²)', meaning: '★ Mass linear, Velocity exponential. Doubling velocity quadruples KE. Velocity more important than mass.' },
    { term: 'Tensile force', meaning: '★ Traction-strain. Pulls body apart. Examples: avulsion, mesenteric tear.' },
    { term: 'Compressive force', meaning: '★ Compression-strain. Pushes together. All tissues resist EXCEPT gas-containing.' },
    { term: 'Shearing force', meaning: '★ Shear-strain. Slides adjacent layers. Alters shape NOT volume. Examples: DAI, aortic shear.' },
    { term: 'Greenstick fracture', meaning: '★ Incomplete fracture in young pliable bones bending past elastic limit.' },
    { term: 'Spiral fracture', meaning: '★ Twisting strain → spiral fracture line along shaft. Child abuse marker if young child.' },
    { term: 'Comminuted fracture', meaning: 'High-energy + wide-area force → multiple fragments (Ch 11).' },
    { term: 'Blast injury (primary)', meaning: '★ Violent gas compression → barotrauma (lung, eardrum, GI). Ch 10.' },
    { term: 'Tardieu spots', meaning: 'Petechial hemorrhages from sudden venous compression — chest crush, asphyxia. Ch 15.' },
    { term: 'Antemortem (AM)', meaning: 'Injury before death — vital reaction PRESENT (PMN, fibrin, erythema, clot).' },
    { term: 'Postmortem (PM)', meaning: 'Injury after death — vital reaction ABSENT (no PMN, no bleeding, pale margins).' },
    { term: 'Peri-mortem period', meaning: 'Injuries within seconds of death — ambiguous vital reaction. Diagnostic challenge.' },
    { term: 'RBGY rule', meaning: '★ Contusion color timeline: Red (0-2 d) → Blue/Black (3-5 d) → GREEN/biliverdin (5-7 d) → YELLOW/bilirubin (7-12 d).' },
    { term: 'Biliverdin', meaning: '★ Green pigment in resolving contusion (5-7 days). Heme catabolism intermediate.' },
    { term: 'Bilirubin', meaning: '★ Yellow pigment in resolving contusion (7-12 days). Final heme catabolism product.' },
    { term: '10-point injury format', meaning: 'Type · site · dimensions · shape · margins · floor · surrounding · direction · weapon · age. Ch 6.' },
    { term: '4 factors of wound causation', meaning: 'Nature of weapon · energy discharged · conditions of discharge · tissue affected.' },
    { term: 'Heat hematoma', meaning: 'Burn artefact mimicking EDH — CO in clot confirms heat origin (Ch 14).' },
    { term: 'Undertaker&apos;s fracture', meaning: 'C6-C7 dislocation from rough body handling — PM artefact mimicking AM cervical injury (Ch 6).' }
  ],
  diagrams: [
    { id: 'IG-01', title: 'Injury — Statutory Definition &amp; Master Overview', shortTitle: 'Master Overview', svg: SVG_IG01,
      prereqs: [{term:'BNS 2(14) / IPC 44',meaning:'Injury — wider than medical (body+mind+reputation+property).'},{term:'BNS 114 / IPC 319',meaning:'Hurt — bodily pain/disease/infirmity.'},{term:'BNS 116 / IPC 320',meaning:'Grievous hurt — 8 clauses (Ch 13).'},{term:'Wound not defined',meaning:'Law uses "hurt" instead.'}],
      nodes: nodeList(['ig-def','ig-salient','ig-medical-vs-legal','ig-classifications','ig-legal-class','ig-bns-map']),
      mcqs: MCQS['IG-01']
    },
    { id: 'IG-02', title: 'Classification by Causative Force', shortTitle: 'Causative Force', svg: SVG_IG02,
      prereqs: [{term:'Mechanical → Ch 9-12',meaning:'Blunt · sharp · piercing · firearm.'},{term:'Thermal → Ch 14',meaning:'Cold + heat.'},{term:'Chemical → Ch 34',meaning:'Corrosion + irritation.'},{term:'Misc',meaning:'Electricity · lightning · X-rays.'}],
      nodes: nodeList(['ig-mech','ig-thermal','ig-chemical','ig-misc','ig-summary-table']),
      mcqs: MCQS['IG-02']
    },
    { id: 'IG-03', title: 'Medicolegal &amp; Death-Relation Classification', shortTitle: 'ML + AM/PM', svg: SVG_IG03,
      prereqs: [{term:'5 ML categories',meaning:'Suicidal · Homicidal · Accidental · Defence · Fabricated.'},{term:'Defence wound',meaning:'Palms · forearms · victim raised hands.'},{term:'Hesitation cut',meaning:'Suicide marker.'},{term:'Fabricated wounds',meaning:'Self-inflicted to mislead.'}],
      nodes: nodeList(['ig-mlc','ig-fabricated','ig-am-pm','ig-simple-grievous']),
      mcqs: MCQS['IG-03']
    },
    { id: 'IG-04', title: 'Forensic Anatomy of Skin — 5 Epidermal Layers', shortTitle: 'Skin Anatomy', svg: SVG_IG04,
      prereqs: [{term:'4 kg · 2 m²',meaning:'Adult skin.'},{term:'5 epidermal layers',meaning:'Basale → Spinosum → Granulosum → Lucidum → Corneum.'},{term:'Palms thickest · Scrotum thinnest',meaning:'Stratum corneum varies regionally.'},{term:'Skin resistance to stab',meaning:'Bone &gt; SKIN &gt; muscle &gt; subQ fat.'}],
      nodes: nodeList(['ig-skin-intro','ig-epidermis','ig-thickness','ig-dermis','ig-hypodermis','ig-skin-resistance']),
      mcqs: MCQS['IG-04']
    },
    { id: 'IG-05', title: 'Biophysics of Wounding — Force, Mass, Velocity', shortTitle: 'Biophysics ½MV²', svg: SVG_IG05,
      prereqs: [{term:'KE = ½ MV²',meaning:'Velocity exponential.'},{term:'2 counter-force scenarios',meaning:'Moving weapon + stationary body OR moving body + stationary object.'},{term:'4 tissue properties',meaning:'Solidity · fluidity · density · elasticity.'},{term:'Force/area',meaning:'Smaller area → greater pressure → greater damage.'}],
      nodes: nodeList(['ig-biophysics','ig-kinetic','ig-area','ig-counter-force','ig-tissue-props','ig-conditions']),
      mcqs: MCQS['IG-05']
    },
    { id: 'IG-06', title: '3 Primary Forces — Tensile · Compressive · Shearing', shortTitle: '3 Forces', svg: SVG_IG06,
      prereqs: [{term:'Tensile (traction-strain)',meaning:'Pulls apart — avulsion.'},{term:'Compressive (compression-strain)',meaning:'Pushes together — Tardieu spots, fracture.'},{term:'Shearing (shear-strain)',meaning:'Slides layers — DAI, aortic shear.'},{term:'5 tissue types',meaning:'Skin · subQ · muscle · bone · fluid/gas.'}],
      nodes: nodeList(['ig-forces-intro','ig-tensile','ig-compressive','ig-shearing','ig-tissue-types']),
      mcqs: MCQS['IG-06']
    },
    { id: 'IG-07', title: '4 Factors Influencing Wound Causation', shortTitle: '4 Factors', svg: SVG_IG07,
      prereqs: [{term:'Factor 1: Weapon',meaning:'Sharp vs blunt · rigid vs plastic.'},{term:'Factor 2: Energy',meaning:'½ MV² · velocity exponential.'},{term:'Factor 3: Conditions',meaning:'Mobile vs static victim.'},{term:'Factor 4: Tissue',meaning:'Skin · subQ · muscle · bone · fluid · gas.'}],
      nodes: nodeList(['ig-factors-overview','ig-factor1','ig-factor2','ig-factor3','ig-factor4']),
      mcqs: MCQS['IG-07']
    },
    { id: 'IG-08', title: 'Tissue-Specific Response to Force', shortTitle: 'Tissue Response', svg: SVG_IG08,
      prereqs: [{term:'Skin splits on bone',meaning:'Crushing against rigid surface.'},{term:'Bone — greenstick · spiral · comminuted',meaning:'Pliable vs twisting vs high energy.'},{term:'Fluid incompressible · gas compressible',meaning:'Tardieu spots vs blast injury.'},{term:'Muscle elastic+plastic',meaning:'Resists to limit.'}],
      nodes: nodeList(['ig-skin-response','ig-subq-response','ig-muscle-response','ig-bone-response','ig-fluid-gas','ig-special']),
      mcqs: MCQS['IG-08']
    },
    { id: 'IG-09', title: '★ Antemortem vs Postmortem — Vital Reaction', shortTitle: 'AM vs PM ★', svg: SVG_IG09,
      prereqs: [{term:'Vital reaction',meaning:'Single best AM/PM discriminator.'},{term:'PMN 4-6 h',meaning:'AM histology marker.'},{term:'Peri-mortem ambiguous',meaning:'Injuries within seconds of death.'},{term:'PM mimics',meaning:'Decomposition fissures · CPR · rodent gnaw · heat hematoma · undertaker # .'}],
      nodes: nodeList(['ig-am-pm-overview','ig-am','ig-pm','ig-mid-perimortem','ig-mimics']),
      mcqs: MCQS['IG-09']
    },
    { id: 'IG-10', title: 'Wound Age Estimation — Gross + Microscopy', shortTitle: 'Wound Age', svg: SVG_IG10,
      prereqs: [{term:'Abrasion scab evolution',meaning:'Fresh red → dark red 12-24 h → brown 1-7 d → falls 7-14 d.'},{term:'Contusion RBGY rule',meaning:'Red → Blue → Green → Yellow.'},{term:'Biliverdin (green) → Bilirubin (yellow)',meaning:'Heme catabolism.'},{term:'Callus on X-ray at 3 wk',meaning:'Bone fracture healing.'}],
      nodes: nodeList(['ig-age-intro','ig-abrasion-age','ig-abrasion-histo','ig-contusion-rbgy','ig-incised-age','ig-lac-age']),
      mcqs: MCQS['IG-10']
    }
  ],
  diffTables: DIFF_TABLES,
  subjectiveQs: SUBJ,
  highYield: [
    '<strong>★ INJURY (BNS 2(14) / IPC 44):</strong> harm caused ILLEGALLY to body · mind · reputation · property',
    '<strong>★ HURT (BNS 114 / IPC 319):</strong> bodily pain · disease · infirmity',
    '<strong>★ "WOUND" not statutorily defined</strong> — law uses "hurt"',
    '<strong>★ Use of word "ILLEGAL"</strong> — surgical incision with consent = LEGAL injury',
    '<strong>★ Grievous hurt (BNS 116 / IPC 320):</strong> 8 clauses (Ch 13)',
    '<strong>★ 4 Classifications:</strong> Causative force · Medicolegal · AM/PM · Legal',
    '<strong>★ Medicolegal 5:</strong> Suicidal · Homicidal · Accidental · Defence · Fabricated',
    '<strong>★ Defence wounds</strong> on palms + forearms — victim raised hands → HOMICIDE',
    '<strong>★ Hesitation cuts</strong> = SUICIDAL marker (tentative shallow attempts)',
    '<strong>★ Fabricated wounds:</strong> within reach · superficial · parallel · spare vital areas',
    '<strong>★ Skin: 4 kg · 2 m²</strong> · 3 layers (epidermis avascular)',
    '<strong>★ 5 epidermal layers (deep → superficial):</strong> Basale · Spinosum · Granulosum · Lucidum · Corneum',
    '<strong>★ Stratum corneum thickest</strong> on PALMS + SOLES · <strong>THINNEST</strong> on SCROTUM + EYELIDS',
    '<strong>★ Stab resistance:</strong> calcified cartilage/bone &gt; SKIN &gt; muscle &gt; subQ fat',
    '<strong>★ KE = ½ MV²</strong> · Mass linear · ★ Velocity EXPONENTIAL',
    '<strong>★ Doubling velocity → KE QUADRUPLES</strong> (×4)',
    '<strong>★ Velocity more important than mass</strong>',
    '<strong>★ Pressure = Force / Area</strong> — smaller area → greater damage (sharp weapon)',
    '<strong>★ 3 Primary Forces:</strong> TENSILE (pulls apart) · COMPRESSIVE (pushes together) · SHEARING (slides)',
    '<strong>★ Tensile</strong> → avulsion · mesenteric tear · splenic capsule',
    '<strong>★ Compressive</strong> → chest crush → ★ Tardieu spots (retrograde venous displacement)',
    '<strong>★ Shearing</strong> → ★ DAI (Ch 11) · aortic shear at ligamentum arteriosum',
    '<strong>★ All tissues except GAS resist compression</strong>',
    '<strong>★ Gas violently compressed → BLAST INJURY (pneumostatic force, Ch 10)</strong>',
    '<strong>★ 4 Factors of wound causation:</strong> weapon · energy · conditions · tissue',
    '<strong>★ Bone responses:</strong> greenstick (young pliable) · spiral (twist) · comminuted (high energy)',
    '<strong>★ Skin SPLITS</strong> when crushed against bone underneath',
    '<strong>★ Static victim absorbs MORE KE</strong> than one knocked down → greater damage',
    '<strong>★ Vital reaction = single best AM/PM discriminator</strong>',
    '<strong>★ AM features:</strong> active bleeding · clot · erythema · swelling · PMN (4-6 h) · fibrin · enzyme markers',
    '<strong>★ PM features:</strong> no bleeding · no erythema · pale dry margins · no PMN · autolysis only',
    '<strong>★ Cathepsin</strong> (immediate) and ★ <strong>alkaline phosphatase</strong> (4 h) — AM enzyme markers',
    '<strong>★ PM Mimics:</strong> decomposition fissures · rodent gnawing · CPR # · heat hematoma · undertaker # · hypostasis',
    '<strong>★ Heat hematoma in burns</strong> mimics true EDH — CO in clot confirms heat origin (Ch 14)',
    '<strong>★ NEET-PG 2016 Q27:</strong> PM wound differs from AM by absence of erythema + cellular changes',
    '<strong>★ Contusion RBGY rule:</strong> Red 0-2 d → Blue/Black 3-5 d → ★ GREEN/biliverdin 5-7 d → ★ YELLOW/bilirubin 7-12 d',
    '<strong>★ Biliverdin (green)</strong> precedes ★ <strong>bilirubin (yellow)</strong> — heme catabolism',
    '<strong>★ Abrasion ages:</strong> fresh (no scab) → dark red scab (12-24 h) → brown (1-7 d) → falls off (7-14 d)',
    '<strong>★ PMN infiltrate at 4-6 h</strong> · 3-layer histology at 12 h (fibrin/RBC · PMN · damaged collagen)',
    '<strong>★ Callus visible on X-ray at 3 weeks</strong> (bone fracture healing)',
    '<strong>★ 10-point injury format</strong> (Ch 6): type · site · dimensions · shape · margins · floor · surrounding · direction · weapon · age',
    '<strong>★ Cross-chapter map:</strong> Mechanical Ch 9-12 · Thermal Ch 14 · Chemical Ch 34 · Firearm Ch 10 · Asphyxia Ch 15',
    'See subject-pinned IPC↔BNS Quick-Reference Card + Subject Subjective Q-Bank'
  ]
};
})();

