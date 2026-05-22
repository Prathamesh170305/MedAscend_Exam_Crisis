/* ===================================================================
   Medascend FMT — Chapter 13: Injury — Medicolegal Considerations
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

const SVG_IM01 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Injury &amp; Hurt — Statutory Definitions</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">BNS 2023 · IPC equivalents · scope of "injury" in law · who is liable</text>

<g data-node-id="im-injury-def"><rect class="nbcr" x="60" y="110" width="1480" height="120" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">📜 INJURY — BNS 2(14) (≡ IPC 44)</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">"Any harm whatever illegally caused to any person, in body, mind, reputation, or property."</text><text x="90" y="208" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="#5C4810">★ Broad — covers <strong>physical</strong> (body) · <strong>mental</strong> (mind) · <strong>reputation</strong> (defamation) · <strong>property</strong>.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="im-hurt-def"><rect class="body-white" x="60" y="260" width="730" height="280" rx="14"/><path d="M 74,260 H 776 A 14,14 0 0 1 790,274 V 325 H 60 V 274 A 14,14 0 0 1 74,260 Z" fill="url(#gBlue)"/><text x="80" y="305" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">📜 HURT — BNS 114 (≡ IPC 319)</text><text x="80" y="365" class="t-keylbl">Definition:</text><text x="200" y="365" class="t-keyval">"Whoever causes BODILY PAIN, DISEASE</text><text x="100" y="385" class="t-keyval">or INFIRMITY to any other person..."</text><text x="80" y="420" class="t-keylbl">3 elements:</text><text x="200" y="420" class="t-keyval">Bodily pain · disease · infirmity</text><text x="80" y="450" class="t-keylbl">★ Mental injury</text><text x="240" y="450" class="t-keyval">is NOT hurt — separate offence</text><text x="80" y="480" class="t-keylbl">Voluntarily causing hurt:</text><text x="320" y="480" class="t-keyval">BNS 115 (≡ IPC 321)</text><text x="80" y="510" class="t-keylbl">Punishment:</text><text x="200" y="510" class="t-keyval">BNS 115(2) — up to 1 yr / fine ₹10,000 / both</text><circle class="ic" cx="770" cy="278" r="14"/><text class="t-info" x="770" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="im-grievous-def"><rect class="body-white" x="810" y="260" width="730" height="280" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 824,260 H 1526 A 14,14 0 0 1 1540,274 V 325 H 810 V 274 A 14,14 0 0 1 824,260 Z" fill="url(#gRed)"/><text x="830" y="305" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">📜 GRIEVOUS HURT — BNS 116 (≡ IPC 320)</text><text x="830" y="365" class="t-keylbl">Definition:</text><text x="950" y="365" class="t-keyval">An ENUMERATED list of 8 categories</text><text x="850" y="385" class="t-keyval">designated as "grievous" by statute</text><text x="830" y="420" class="t-keylbl">8 clauses:</text><text x="930" y="420" class="t-keyval">See MI-03 / DT-1 (★)</text><text x="830" y="450" class="t-keylbl">Voluntarily causing grievous hurt:</text><text x="1180" y="450" class="t-keyval">BNS 117 (≡ IPC 325)</text><text x="830" y="480" class="t-keylbl">By dangerous weapon:</text><text x="1060" y="480" class="t-keyval">BNS 118 (≡ IPC 326)</text><text x="830" y="510" class="t-keylbl">Punishment:</text><text x="950" y="510" class="t-keyval">BNS 117(2) — up to 7 years + fine</text><circle class="ic" cx="1530" cy="278" r="14"/><text class="t-info" x="1530" y="284" text-anchor="middle">ⓘ</text></g>

<g data-node-id="im-bns-2023"><rect x="60" y="560" width="900" height="240" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="510" y="600" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">⚖️ BNS 2023 — New Provisions</text><text x="90" y="640" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">★ Bharatiya Nyaya Sanhita 2023 REPLACED Indian Penal Code 1860 on <strong>1 July 2024</strong></text><text x="90" y="668" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>BNS 103</strong> — Mob lynching: ≥5 persons murder on grounds of race/caste/community/religion/language</li></text><text x="90" y="696" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>BNS 124</strong> — Acid attack causing grievous hurt — 10 yrs to life + fine to victim</text><text x="90" y="724" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>BNS 117(4)</strong> — Permanent disability / vegetative state by grievous hurt — 10 yrs to life</text><text x="90" y="752" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>BNS 109</strong> — Attempt to murder (was IPC 307); life imprisonment if hurt caused</text><text x="90" y="780" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>BNS 110</strong> — Attempt to commit culpable homicide (was IPC 308)</text><circle class="ic" cx="940" cy="578" r="14"/><text class="t-info" x="940" y="584" text-anchor="middle">ⓘ</text></g>

<g data-node-id="im-key-sections"><rect x="980" y="560" width="560" height="240" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="600" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">📚 BNS ↔ IPC Quick Map</text><text x="1000" y="640" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• BNS 114 = IPC 319 (Hurt)</text><text x="1000" y="665" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• BNS 115 = IPC 321 (Voluntary hurt)</text><text x="1000" y="690" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• BNS 116 = IPC 320 (Grievous hurt def)</text><text x="1000" y="715" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• BNS 117 = IPC 325/322 (Vol grievous)</text><text x="1000" y="740" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• BNS 118 = IPC 324/326 (Dangerous weapon)</text><text x="1000" y="765" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• BNS 124 = IPC 326A/B (Acid attack)</text><text x="1000" y="790" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• BNS 100-101 = IPC 299/300 (Homicide / Murder)</text><circle class="ic" cx="1520" cy="578" r="14"/><text class="t-info" x="1520" y="584" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="820" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="858" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Injury (BNS 2(14)) = harm to body/mind/reputation/property · Hurt (BNS 114) = bodily pain/disease/infirmity</text>

<rect x="60" y="900" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="938" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">📅 BNS 2023 replaced IPC 1860 on 1 July 2024 · cross-ref: subject-pinned IPC↔BNS Quick-Reference Card</text>

<rect x="60" y="980" width="1480" height="60" rx="10" fill="url(#gGrey)"/><text x="800" y="1018" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⚠️ Memorise the BNS numbers — exam favourite · IPC equivalents still tested as legacy</text>
</svg>`;

const SVG_IM02 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Classification of Injuries — Medicolegal</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Simple vs Grievous vs Dangerous · severity ladder for legal reporting</text>

<g data-node-id="im-classification"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">📋 INJURY SEVERITY CLASSIFICATION</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Injuries are graded in medicolegal reports as <strong>Simple</strong> · <strong>Grievous</strong> · <strong>Dangerous</strong>. The grade determines BNS section, punishment, and bail eligibility.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="im-simple"><rect class="body-white" x="60" y="240" width="490" height="320" rx="14"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gGreen)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🟢 SIMPLE HURT</text><text x="80" y="345" class="t-keylbl">Definition:</text><text x="190" y="345" class="t-keyval">Hurt NOT meeting any of the</text><text x="100" y="365" class="t-keyval">8 grievous clauses</text><text x="80" y="400" class="t-keylbl">Examples:</text><text x="180" y="400" class="t-keyval">Minor abrasion, small bruise,</text><text x="100" y="420" class="t-keyval">superficial cut, sprain</text><text x="80" y="455" class="t-keylbl">Healing:</text><text x="160" y="455" class="t-keyval">&lt; 20 days · no permanent</text><text x="100" y="475" class="t-keyval">disability</text><text x="80" y="510" class="t-keylbl">BNS section:</text><text x="220" y="510" class="t-keyval">BNS 115 (≡ IPC 321/323)</text><text x="80" y="540" class="t-keylbl">Punishment:</text><text x="200" y="540" class="t-keyval">Up to 1 year / fine</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="im-grievous"><rect class="body-white" x="570" y="240" width="490" height="320" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 584,240 H 1046 A 14,14 0 0 1 1060,254 V 305 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gOrange)"/><text x="590" y="285" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🟠 GRIEVOUS HURT</text><text x="590" y="345" class="t-keylbl">Definition:</text><text x="700" y="345" class="t-keyval">Hurt meeting ANY ONE of</text><text x="610" y="365" class="t-keyval">8 enumerated categories (BNS 116(2))</text><text x="590" y="400" class="t-keylbl">Examples:</text><text x="690" y="400" class="t-keyval">Fracture, dislocation,</text><text x="610" y="420" class="t-keyval">privation of vision, &gt;20 days disability</text><text x="590" y="455" class="t-keylbl">Permanent</text><text x="700" y="455" class="t-keyval">disability OR &gt;20 days</text><text x="610" y="475" class="t-keyval">inability to follow ordinary pursuits</text><text x="590" y="510" class="t-keylbl">BNS section:</text><text x="730" y="510" class="t-keyval">BNS 117 (≡ IPC 325)</text><text x="590" y="540" class="t-keylbl">Punishment:</text><text x="710" y="540" class="t-keyval">Up to 7 years + fine</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="im-dangerous"><rect class="body-white" x="1080" y="240" width="460" height="320" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 1094,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 1080 V 254 A 14,14 0 0 1 1094,240 Z" fill="url(#gRed)"/><text x="1090" y="285" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🔴 DANGEROUS</text><text x="1090" y="345" class="t-keylbl">Definition:</text><text x="1200" y="345" class="t-keyval">Hurt ENDANGERING</text><text x="1110" y="365" class="t-keyval">LIFE — clinical/forensic</text><text x="1110" y="385" class="t-keyval">judgement of mortality risk</text><text x="1090" y="420" class="t-keylbl">Examples:</text><text x="1190" y="420" class="t-keyval">Penetrating chest,</text><text x="1110" y="440" class="t-keyval">major vessel cut, head injury</text><text x="1110" y="460" class="t-keyval">with LOC, internal organ rupture</text><text x="1090" y="495" class="t-keylbl">Status:</text><text x="1160" y="495" class="t-keyval">Sub-category of</text><text x="1110" y="515" class="t-keyval">grievous (clause 8 of BNS 116(2))</text><text x="1090" y="545" class="t-keylbl">★ Surgeon\'s opinion needed</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="im-dangerous-weapon"><rect x="60" y="580" width="1480" height="240" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="800" y="620" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">⚔️ BY DANGEROUS WEAPON OR MEANS — BNS 118 (≡ IPC 324/326)</text><text x="90" y="658" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Definition</strong> (BNS 118): hurt / grievous hurt caused by an instrument for shooting, stabbing or cutting OR by any instrument used as a weapon of offence likely to cause death</text><text x="90" y="688" font-family="Inter,style-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Includes</strong>: firearms · knives / sharp edged · heavy blunt (axe, hammer) · fire · heated substance · poison · explosive · corrosive · animal · any deleterious substance</text><text x="90" y="718" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>BNS 118(1)</strong> — hurt by dangerous weapon — up to 3 years OR fine OR both</text><text x="90" y="748" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>BNS 118(2)</strong> — grievous hurt by dangerous weapon — 10 years to life + fine</text><text x="90" y="778" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>NEET-PG 2016 Q7</strong>: "Use of dangerous weapon" — under IPC 324 (now BNS 118)</text><text x="90" y="808" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>NEET-PG 2016 Q8</strong>: "Grievous hurt" — under IPC 320 (now BNS 116(2))</text><circle class="ic" cx="1510" cy="598" r="14"/><text class="t-info" x="1510" y="604" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="840" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="878" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Simple (BNS 115, ≤ 1 yr) · Grievous (BNS 117, ≤ 7 yr) · By dangerous weapon (BNS 118, ≤ life)</text>

<rect x="60" y="920" width="1480" height="120" rx="10" fill="url(#gGrey)"/><text x="800" y="958" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">⚠️ Examiner duty: state injury TYPE (abrasion/contusion/laceration/incised) + GRADE (simple/grievous/dangerous)</text><text x="800" y="985" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.85)" text-anchor="middle">+ probable WEAPON · AGE of injury · whether ANTEMORTEM · AGE of patient at injury · KIND of injury</text><text x="800" y="1015" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="rgba(255,255,255,0.7)" text-anchor="middle">In doubt → declare "kept under observation" rather than commit prematurely (esp. head injury)</text>
</svg>`;

const SVG_IM03 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Grievous Hurt — 8 Clauses (BNS 116(2))</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Memorise verbatim · most asked LAQ in FMT · mnemonic helper</text>

<g data-node-id="gh-mnemonic"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🧠 MNEMONIC — "EVE Privates Disfigure Fracture 20-Days Dangerously"</text><text x="90" y="178" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="500" fill="#5C4810">★ EVE = Emasculation · privation of Vision · Ear (hearing). Privates = privation of limb / joint power. Disfigure = head/face. Fracture = bone/tooth. 20 Days = 20-day disability. Dangerously = endangering life.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gh-c1"><rect class="body-white" x="60" y="240" width="370" height="190" rx="14"/><path d="M 74,240 H 416 A 14,14 0 0 1 430,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="278" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="white">Clause 1 — EMASCULATION</text><text x="80" y="335" class="t-keyval">Castration / loss of</text><text x="80" y="355" class="t-keyval">reproductive function</text><text x="80" y="385" class="t-keylbl">Applies to:</text><text x="190" y="385" class="t-keyval">Males only</text><text x="80" y="410" class="t-keyval">★ Female sterilisation</text><text x="80" y="430" class="t-keyval">covered in clause 8</text><circle class="ic" cx="420" cy="258" r="14"/><text class="t-info" x="420" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gh-c2"><rect class="body-white" x="450" y="240" width="370" height="190" rx="14"/><path d="M 464,240 H 806 A 14,14 0 0 1 820,254 V 295 H 450 V 254 A 14,14 0 0 1 464,240 Z" fill="url(#gBlue)"/><text x="470" y="278" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="white">Clause 2 — PRIVATION SIGHT</text><text x="470" y="335" class="t-keyval">Permanent privation of</text><text x="470" y="355" class="t-keyval">sight of EITHER EYE</text><text x="470" y="385" class="t-keylbl">Note:</text><text x="530" y="385" class="t-keyval">Even ONE eye qualifies</text><text x="470" y="410" class="t-keyval">★ "Permanent" — temporary</text><text x="470" y="430" class="t-keyval">vision loss = simple hurt</text><circle class="ic" cx="810" cy="258" r="14"/><text class="t-info" x="810" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gh-c3"><rect class="body-white" x="840" y="240" width="370" height="190" rx="14"/><path d="M 854,240 H 1196 A 14,14 0 0 1 1210,254 V 295 H 840 V 254 A 14,14 0 0 1 854,240 Z" fill="url(#gBlue)"/><text x="860" y="278" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="white">Clause 3 — PRIVATION HEARING</text><text x="860" y="335" class="t-keyval">Permanent privation of</text><text x="860" y="355" class="t-keyval">hearing of EITHER EAR</text><text x="860" y="385" class="t-keylbl">Note:</text><text x="920" y="385" class="t-keyval">Even ONE ear qualifies</text><text x="860" y="410" class="t-keyval">★ Document by</text><text x="860" y="430" class="t-keyval">audiometry; "permanent"</text><circle class="ic" cx="1200" cy="258" r="14"/><text class="t-info" x="1200" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gh-c4"><rect class="body-white" x="1230" y="240" width="310" height="190" rx="14"/><path d="M 1244,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 1230 V 254 A 14,14 0 0 1 1244,240 Z" fill="url(#gBlue)"/><text x="1240" y="278" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="white">Clause 4 — LIMB / JOINT</text><text x="1240" y="335" class="t-keyval">Privation of ANY</text><text x="1240" y="355" class="t-keyval">MEMBER (limb) / JOINT</text><text x="1240" y="385" class="t-keylbl">e.g.:</text><text x="1280" y="385" class="t-keyval">Amputation, loss of</text><text x="1240" y="405" class="t-keyval">finger / toe / ear pinna</text><text x="1240" y="430" class="t-keyval">★ Permanent</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gh-c5"><rect class="body-white" x="60" y="450" width="370" height="190" rx="14"/><path d="M 74,450 H 416 A 14,14 0 0 1 430,464 V 505 H 60 V 464 A 14,14 0 0 1 74,450 Z" fill="url(#gGreen)"/><text x="80" y="488" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="white">Clause 5 — POWER OF LIMB</text><text x="80" y="545" class="t-keyval">Permanent IMPAIRING</text><text x="80" y="565" class="t-keyval">of powers of any member /</text><text x="80" y="585" class="t-keyval">joint OR HEAD/FACE</text><text x="80" y="615" class="t-keylbl">e.g.:</text><text x="120" y="615" class="t-keyval">Stroke from blow, paralysis,</text><text x="80" y="635" class="t-keyval">permanent stiffness of joint</text><circle class="ic" cx="420" cy="468" r="14"/><text class="t-info" x="420" y="474" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gh-c6"><rect class="body-white" x="450" y="450" width="370" height="190" rx="14"/><path d="M 464,450 H 806 A 14,14 0 0 1 820,464 V 505 H 450 V 464 A 14,14 0 0 1 464,450 Z" fill="url(#gGreen)"/><text x="470" y="488" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="white">Clause 6 — DISFIGURATION</text><text x="470" y="545" class="t-keyval">Permanent DISFIGURATION</text><text x="470" y="565" class="t-keyval">of HEAD or FACE</text><text x="470" y="595" class="t-keylbl">e.g.:</text><text x="510" y="595" class="t-keyval">Scar across face, loss of</text><text x="470" y="615" class="t-keyval">eyebrow, missing teeth</text><text x="470" y="635" class="t-keyval">★ Must be visible / permanent</text><circle class="ic" cx="810" cy="468" r="14"/><text class="t-info" x="810" y="474" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gh-c7"><rect class="body-white" x="840" y="450" width="370" height="190" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 854,450 H 1196 A 14,14 0 0 1 1210,464 V 505 H 840 V 464 A 14,14 0 0 1 854,450 Z" fill="url(#gOrange)"/><text x="860" y="488" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="white">Clause 7 — FRACTURE ★</text><text x="860" y="545" class="t-keyval">FRACTURE or DISLOCATION</text><text x="860" y="565" class="t-keyval">of any BONE or TOOTH</text><text x="860" y="595" class="t-keylbl">Note:</text><text x="920" y="595" class="t-keyval">Even hairline # qualifies</text><text x="860" y="620" class="t-keyval">★ Tooth loss = grievous</text><text x="860" y="640" class="t-keyval">(NEET-PG fave)</text><circle class="ic" cx="1200" cy="468" r="14"/><text class="t-info" x="1200" y="474" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gh-c8"><rect class="body-white" x="1230" y="450" width="310" height="190" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 1244,450 H 1526 A 14,14 0 0 1 1540,464 V 505 H 1230 V 464 A 14,14 0 0 1 1244,450 Z" fill="url(#gRed)"/><text x="1240" y="488" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="white">Clause 8 — ★ DUAL</text><text x="1240" y="545" class="t-keyval">(a) ENDANGERING LIFE</text><text x="1240" y="565" class="t-keyval">OR</text><text x="1240" y="585" class="t-keyval">(b) Severe pain /</text><text x="1240" y="605" class="t-keyval">20+ days unable to follow</text><text x="1240" y="625" class="t-keyval">ordinary pursuits</text><circle class="ic" cx="1530" cy="468" r="14"/><text class="t-info" x="1530" y="474" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gh-bns-acid"><rect x="60" y="660" width="1480" height="140" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="800" y="700" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">★ BNS 2023 — NEW 9th Clause-equivalent (added by BNS)</text><text x="90" y="738" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>BNS 124 — ACID ATTACK</strong> (was IPC 326A/B 2013 amendment):</text><text x="90" y="765" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">"Whoever throws/administers acid → permanent deformity / disability / disfigurement / burns" → grievous hurt</text><text x="90" y="790" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Punishment:</strong> 10 years to life + fine to victim (covers medical / rehab costs)</text><circle class="ic" cx="1510" cy="678" r="14"/><text class="t-info" x="1510" y="684" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gh-bns-disability"><rect x="60" y="820" width="1480" height="140" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="800" y="860" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">★ BNS 117(4) — Permanent Disability / Vegetative State (NEW)</text><text x="90" y="898" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>BNS 117(4)</strong>: causing grievous hurt that results in PERMANENT DISABILITY or PERMANENT VEGETATIVE STATE</text><text x="90" y="925" font-family="Inter,style-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Punishment:</strong> 10 years to life imprisonment + fine — addresses severe outcomes not previously well-graded</text><circle class="ic" cx="1510" cy="838" r="14"/><text class="t-info" x="1510" y="844" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="980" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="1018" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 8 clauses + BNS 124 (acid) + BNS 117(4) (perm disability / vegetative) — must recall verbatim for LAQ</text>
</svg>`;

const SVG_IM04 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Homicide — Culpable Homicide &amp; Murder</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">BNS 100-103 · IPC 299-302 equivalents · 4 elements of murder · culpable homicide not amounting to murder</text>

<g data-node-id="hom-def"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚖️ HOMICIDE — Killing of a Human Being</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Homicide = killing of one human by another. <strong>Lawful</strong> (e.g., self-defence, judicial execution) or <strong>Unlawful</strong> (culpable homicide / murder).</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="hom-types"><rect class="body-white" x="60" y="240" width="730" height="280" rx="14"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">📋 Classification of Homicide</text><text x="80" y="345" class="t-keylbl">A. Lawful (justifiable / excusable):</text><text x="100" y="370" class="t-keyval">• Self-defence (BNS 35)</text><text x="100" y="390" class="t-keyval">• Judicial execution</text><text x="100" y="410" class="t-keyval">• Act of war (legal combatant)</text><text x="100" y="430" class="t-keyval">• Accident in lawful act (BNS 27)</text><text x="80" y="465" class="t-keylbl">B. Unlawful:</text><text x="200" y="465" class="t-keyval">• Culpable homicide (BNS 100)</text><text x="100" y="490" class="t-keyval">• Murder (BNS 101)</text><text x="100" y="510" class="t-keyval">• Death by negligence (BNS 106)</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="hom-culpable"><rect class="body-white" x="810" y="240" width="730" height="280" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gOrange)"/><text x="830" y="285" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">📜 CULPABLE HOMICIDE — BNS 100 (≡ IPC 299)</text><text x="830" y="345" class="t-keylbl">Definition:</text><text x="940" y="345" class="t-keyval">Causing death by an act</text><text x="850" y="365" class="t-keyval">done with:</text><text x="830" y="395" class="t-keyval"><strong>(a)</strong> INTENTION of causing death, OR</text><text x="830" y="415" class="t-keyval"><strong>(b)</strong> Intention of causing such bodily injury</text><text x="850" y="435" class="t-keyval">as is LIKELY to cause death, OR</text><text x="830" y="455" class="t-keyval"><strong>(c)</strong> KNOWLEDGE that the act is likely</text><text x="850" y="475" class="t-keyval">to cause death</text><text x="830" y="505" class="t-keylbl">"All murders are culpable homicide; not all CH = murder"</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="hom-murder"><rect class="body-white" x="60" y="540" width="1480" height="240" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,540 H 1526 A 14,14 0 0 1 1540,554 V 605 H 60 V 554 A 14,14 0 0 1 74,540 Z" fill="url(#gRed)"/><text x="80" y="585" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🔴 MURDER — BNS 101 (≡ IPC 300)</text><text x="80" y="645" class="t-keylbl">Culpable homicide IS murder if the act is done with:</text><text x="80" y="675" class="t-keyval"><strong>1.</strong> INTENTION of causing DEATH</text><text x="80" y="695" class="t-keyval"><strong>2.</strong> INTENTION of causing bodily injury which the offender KNOWS to be LIKELY to cause death of THAT PERSON</text><text x="80" y="715" class="t-keyval"><strong>3.</strong> INTENTION of causing bodily injury SUFFICIENT in the ordinary course of nature to cause death</text><text x="80" y="735" class="t-keyval"><strong>4.</strong> KNOWLEDGE that the act is so IMMINENTLY DANGEROUS that it must in all probability cause death</text><text x="80" y="765" class="t-keylbl">Punishment (BNS 103):</text><text x="290" y="765" class="t-keyval">Death OR life imprisonment + fine</text><circle class="ic" cx="1530" cy="558" r="14"/><text class="t-info" x="1530" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="hom-exceptions"><rect x="60" y="800" width="900" height="200" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="510" y="840" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">⚠️ When Culpable Homicide is NOT Murder (BNS 101 exceptions)</text><text x="90" y="878" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>1. Grave &amp; sudden provocation</strong> — by the deceased</text><text x="90" y="903" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>2. Right of private defence</strong> exceeded in good faith</text><text x="90" y="928" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>3. Public servant</strong> exceeding lawful power in good faith</text><text x="90" y="953" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>4. Sudden fight</strong> — heat of passion, no premeditation</text><text x="90" y="978" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>5. Death of person with consent</strong> &gt; 18 years (Euthanasia / suicide pact)</text><circle class="ic" cx="940" cy="818" r="14"/><text class="t-info" x="940" y="824" text-anchor="middle">ⓘ</text></g>

<g data-node-id="hom-mob"><rect x="980" y="800" width="560" height="200" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1260" y="840" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">★ BNS 103(2) — MOB LYNCHING (NEW)</text><text x="1000" y="878" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">When a group of ≥ 5 persons MURDER on the grounds of:</text><text x="1000" y="903" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Race · caste · community</text><text x="1000" y="928" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Sex · place of birth · language</text><text x="1000" y="953" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Personal belief or any similar ground</text><text x="1000" y="980" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="rgba(255,255,255,0.75)">Punishment: death / life + fine — NEW in BNS 2023</text><circle class="ic" cx="1520" cy="818" r="14"/><text class="t-info" x="1520" y="824" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1020" width="1480" height="40" rx="10" fill="url(#gOrange)"/><text x="800" y="1048" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">🎯 Murder (BNS 101) requires INTENTION sufficient to cause death · CH (BNS 100) only requires likelihood / knowledge</text>
</svg>`;

const SVG_IM05 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Medicolegal Reporting — Age, Type, Cause of Injury</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">10-point MLC injury report · examiner duties · pitfalls</text>

<g data-node-id="mlc-purpose"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">📋 MEDICOLEGAL EXAMINATION OF INJURY</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Every injury examined for legal purposes must be documented for: nature · grade · weapon · age · vital reaction · consequences. The grade (simple / grievous / dangerous) carries legal weight.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="mlc-points"><rect class="body-white" x="60" y="240" width="900" height="500" rx="14"/><path d="M 74,240 H 946 A 14,14 0 0 1 960,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">📑 10-Point Injury Report (per injury)</text><text x="80" y="345" class="t-keyval"><strong>1. Site</strong> — exact anatomical location (cm from landmark)</text><text x="80" y="375" class="t-keyval"><strong>2. Dimensions</strong> — length × width × depth</text><text x="80" y="405" class="t-keyval"><strong>3. Shape</strong> — linear, curved, irregular, stellate</text><text x="80" y="435" class="t-keyval"><strong>4. Margins / edges</strong> — clean, abraded, bruised, everted, inverted</text><text x="80" y="465" class="t-keyval"><strong>5. Floor</strong> — tissue bridges, depth, structures cut</text><text x="80" y="495" class="t-keyval"><strong>6. Surrounding tissue</strong> — bruising, swelling, vital reaction</text><text x="80" y="525" class="t-keyval"><strong>7. Direction</strong> — tailing, force vector</text><text x="80" y="555" class="t-keyval"><strong>8. Probable weapon</strong> — sharp / blunt / dangerous</text><text x="80" y="585" class="t-keyval"><strong>9. Age of injury</strong> — fresh / 24 h / 2-7 d / &gt; 1 wk</text><text x="80" y="615" class="t-keyval"><strong>10. Grade</strong> — simple · grievous · dangerous</text><text x="80" y="655" class="t-keylbl">★ Always photograph with scale</text><text x="80" y="685" class="t-keylbl">★ Document AM vs PM by vital reaction</text><text x="80" y="715" class="t-keylbl">★ Mention concomitant disease / drug effect</text><circle class="ic" cx="950" cy="258" r="14"/><text class="t-info" x="950" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="mlc-age"><rect class="body-white" x="980" y="240" width="560" height="320" rx="14"/><path d="M 994,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 980 V 254 A 14,14 0 0 1 994,240 Z" fill="url(#gOrange)"/><text x="990" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🕐 Age of Injury — Quick Markers</text><text x="990" y="345" class="t-keylbl">Bruise colour:</text><text x="1140" y="345" class="t-keyval">RBGY mnemonic</text><text x="990" y="365" class="t-keyval">Red (0-2 d) · Blue (2-5 d) · Green (5-7 d)</text><text x="990" y="385" class="t-keyval">Yellow (7-10 d, ≥ 18 h minimum)</text><text x="990" y="420" class="t-keylbl">Abrasion scab:</text><text x="1140" y="420" class="t-keyval">24 h scab forming</text><text x="990" y="440" class="t-keyval">4-7 d dark adherent · 7+ d separates</text><text x="990" y="475" class="t-keylbl">Wound healing:</text><text x="1150" y="475" class="t-keyval">12-24 h: clot · neutrophils</text><text x="990" y="495" class="t-keyval">3-5 d: granulation tissue · capillary buds</text><text x="990" y="515" class="t-keyval">1 wk: epithelialisation</text><text x="990" y="535" class="t-keyval">2 wk: pink scar · 1 mo: pale firm scar</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="mlc-pitfalls"><rect x="980" y="580" width="560" height="160" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="620" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="white" text-anchor="middle">⚠️ Common Reporting Pitfalls</text><text x="1000" y="655" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">• Under-grading head injury (LOC → grievous)</text><text x="1000" y="675" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">• Missing intramuscular bruise (delayed)</text><text x="1000" y="695" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">• Misidentifying split lac as incised</text><text x="1000" y="715" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">• Premature commitment when X-ray pending</text><circle class="ic" cx="1520" cy="598" r="14"/><text class="t-info" x="1520" y="604" text-anchor="middle">ⓘ</text></g>

<g data-node-id="mlc-observation"><rect x="60" y="760" width="1480" height="160" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="800" y="800" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">⏳ "Kept Under Observation" — When to Use</text><text x="90" y="838" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">When in doubt about grade (esp. head injury, internal injury risk), declare injury as <strong>"kept under observation"</strong> rather than commit prematurely.</text><text x="90" y="863" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Re-examine at 24-48 hours; X-ray if bone underneath; CT if head/abdomen</text><text x="90" y="888" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Final grade given when picture is complete (e.g., if intracranial haemorrhage develops → grievous (endangering life))</text><circle class="ic" cx="1510" cy="778" r="14"/><text class="t-info" x="1510" y="784" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="940" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="978" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 10-point MLC report · grade injury (simple/grievous/dangerous) · "under observation" when in doubt</text>

<rect x="60" y="1020" width="1480" height="40" rx="10" fill="url(#gGrey)"/><text x="800" y="1048" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="700" fill="white" text-anchor="middle">⚠️ MLC is a legal document — sign &amp; seal · countersignature by senior · preserve carbon copy</text>
</svg>`;

const SVG_IM06 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Negligence-related Death · Other Special Sections</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">BNS 106 (negligence) · BNS 124 (acid) · 4 levels of culpability ladder</text>

<g data-node-id="bns106"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">📜 BNS 106 — Death by Negligence (≡ IPC 304A)</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">"Whoever causes the death of any person by doing any RASH or NEGLIGENT act NOT amounting to culpable homicide..."</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="negligence-medical"><rect class="body-white" x="60" y="240" width="730" height="320" rx="14"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gOrange)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🩺 Medical Negligence (BNS 106)</text><text x="80" y="340" class="t-keylbl">BNS 106(1):</text><text x="200" y="340" class="t-keyval">General rash/negligent death</text><text x="100" y="360" class="t-keyval">— up to 5 years + fine</text><text x="80" y="395" class="t-keylbl">BNS 106(2):</text><text x="200" y="395" class="t-keyval">Hit-and-run (escape after RTA)</text><text x="100" y="415" class="t-keyval">— up to 10 years + fine</text><text x="80" y="450" class="t-keylbl">Medical negligence:</text><text x="280" y="450" class="t-keyval">Doctor charged under</text><text x="100" y="470" class="t-keyval">BNS 106(1) ONLY if "gross/criminal" negligence</text><text x="80" y="505" class="t-keylbl">Jacob Mathew vs State (2005):</text><text x="100" y="525" class="t-keyval">Supreme Court — doctor needs higher</text><text x="100" y="545" class="t-keyval">threshold; expert opinion mandatory</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="culpability-ladder"><rect class="body-white" x="810" y="240" width="730" height="320" rx="14"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gBlue)"/><text x="830" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">📊 Culpability Ladder</text><text x="830" y="340" class="t-keylbl">1. ACCIDENT (BNS 27):</text><text x="1060" y="340" class="t-keyval">No criminal liability</text><text x="850" y="360" class="t-keyval">(lawful act + due care)</text><text x="830" y="395" class="t-keylbl">2. NEGLIGENCE (BNS 106):</text><text x="1100" y="395" class="t-keyval">5-10 yrs + fine</text><text x="850" y="415" class="t-keyval">(rash/negligent act)</text><text x="830" y="450" class="t-keylbl">3. CULPABLE HOMICIDE (BNS 100):</text><text x="1190" y="450" class="t-keyval">Up to life</text><text x="850" y="470" class="t-keyval">(intent of injury likely to cause death)</text><text x="830" y="505" class="t-keylbl">4. MURDER (BNS 101):</text><text x="1050" y="505" class="t-keyval">Death / Life + fine</text><text x="850" y="525" class="t-keyval">(intent of death OR sufficient injury)</text><text x="830" y="555" class="t-keylbl">★ Mens rea (mental element) escalates</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bns124-acid"><rect x="60" y="580" width="900" height="220" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/><text x="510" y="620" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">🧪 BNS 124 — ACID ATTACK</text><text x="90" y="660" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>BNS 124(1):</strong> throwing/administering acid causing permanent damage / disability / disfiguration / burning</text><text x="90" y="685" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>Punishment:</strong> 10 years to life + FINE to the victim (covers medical + rehab costs)</text><text x="90" y="715" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>BNS 124(2):</strong> Attempt to throw acid (even without actual injury) — 5-7 yrs + fine</text><text x="90" y="745" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>Acid = any substance with corrosive / burning capability</strong> — H₂SO₄, HCl, HNO₃, NaOH, KOH</text><text x="90" y="775" font-family="Inter,style-ui,sans-serif" font-size="12.5" font-style="italic" fill="rgba(255,255,255,0.75)">Equivalent to IPC 326A/326B (added 2013); now consolidated in BNS 2023</text><circle class="ic" cx="940" cy="598" r="14"/><text class="t-info" x="940" y="604" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bnss-summary"><rect x="980" y="580" width="560" height="220" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="620" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">📜 Related BNSS Sections (Procedural)</text><text x="1000" y="658" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>BNSS 174</strong> (≡ CrPC 174):</text><text x="1000" y="678" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">Police inquest in unnatural death</text><text x="1000" y="703" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>BNSS 176</strong> (≡ CrPC 176):</text><text x="1000" y="723" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">Magistrate inquest (dowry, custody)</text><text x="1000" y="748" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>BNSS 184</strong>:</text><text x="1000" y="768" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">Examination of rape victims by RMP</text><text x="1000" y="790" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="rgba(255,255,255,0.75)">See Ch 1 (Legal Procedure) for full BNSS</text><circle class="ic" cx="1520" cy="598" r="14"/><text class="t-info" x="1520" y="604" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="820" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="858" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 BNS 106 (negligence) · BNS 100 (CH) · BNS 101 (murder) · BNS 124 (acid) · BNS 117(4) (perm disability)</text>

<rect x="60" y="900" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="938" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">📋 Culpability ladder: Accident → Negligence → Culpable Homicide → Murder (mens rea escalates)</text>

<rect x="60" y="980" width="1480" height="60" rx="10" fill="url(#gGrey)"/><text x="800" y="1018" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⚠️ Jacob Mathew vs State (2005) — medical negligence threshold is HIGHER than civilian; "gross" required</text>
</svg>`;

const SVG_IM07 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Suicide · Abetment · Section 309 / 108 BNS</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Attempted suicide · abetment · Mental Healthcare Act 2017 · medicolegal handling</text>

<g data-node-id="suicide-def"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚕️ SUICIDE — Legal Status (India)</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">★ Per <strong>Mental Healthcare Act 2017 (Section 115)</strong>: any person who ATTEMPTS suicide shall be presumed to have severe stress and shall NOT be tried &amp; punished. Effectively decriminalises attempted suicide.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="suicide-309"><rect class="body-white" x="60" y="240" width="730" height="280" rx="14"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gGreen)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🟢 Attempted Suicide (Old IPC 309)</text><text x="80" y="345" class="t-keylbl">Old IPC 309:</text><text x="210" y="345" class="t-keyval">Punishable up to 1 year</text><text x="100" y="365" class="t-keyval">imprisonment OR fine</text><text x="80" y="400" class="t-keylbl">MHCA 2017 § 115:</text><text x="270" y="400" class="t-keyval">PRESUMED severe stress;</text><text x="100" y="420" class="t-keyval">NOT to be tried &amp; punished</text><text x="80" y="455" class="t-keylbl">BNS 2023 status:</text><text x="250" y="455" class="t-keyval">Suicide attempt itself</text><text x="100" y="475" class="t-keyval">NOT criminalised (MHCA prevails)</text><text x="80" y="510" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="#6B7283">★ Doctor\'s duty: treat + assess + refer mental health</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="suicide-abet"><rect class="body-white" x="810" y="240" width="730" height="280" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gRed)"/><text x="830" y="285" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🔴 ABETMENT of Suicide — BNS 108 (≡ IPC 306)</text><text x="830" y="345" class="t-keylbl">Definition:</text><text x="940" y="345" class="t-keyval">"Whoever ABETS the</text><text x="850" y="365" class="t-keyval">commission of suicide..."</text><text x="830" y="400" class="t-keylbl">Punishment:</text><text x="970" y="400" class="t-keyval">Up to 10 years + fine</text><text x="830" y="435" class="t-keylbl">Examples:</text><text x="940" y="435" class="t-keyval">Dowry harassment leading to</text><text x="850" y="455" class="t-keyval">suicide (cross-ref BNS 80 dowry death)</text><text x="830" y="490" class="t-keylbl">Abetment of insane / child:</text><text x="1120" y="490" class="t-keyval">BNS 107 — death penalty</text><text x="830" y="515" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="#6B7283">Suicide pact: survivor may be charged under BNS 108</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="suicide-rate"><rect x="60" y="540" width="900" height="200" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="510" y="580" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">📊 Suicide in India — Key Numbers</text><text x="90" y="618" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>India suicide rate</strong>: ~10.5 per 1,00,000 (NEET-PG 2016 Q51)</text><text x="90" y="643" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Risk factors (NEET-PG 2016 Q50): <strong>drug abuse</strong>, depression, prior attempt, social isolation, male sex</text><text x="90" y="668" font-family="Inter,style-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Common methods (India): hanging · poisoning (pesticides) · self-immolation · drowning</text><text x="90" y="693" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Suicide notes — preserve, photograph, secure, forensic handwriting analysis if disputed</text><text x="90" y="718" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• National Mental Health Programme · Suicide Prevention Strategy 2022</text><circle class="ic" cx="940" cy="558" r="14"/><text class="t-info" x="940" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="suicide-pyq"><rect x="980" y="540" width="560" height="200" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/><text x="1260" y="580" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">🎯 NEET-PG PYQs (2016)</text><text x="1000" y="615" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>Q50:</strong> "Risk factor for suicide is?"</text><text x="1000" y="635" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">Answer: Drug abuse</text><text x="1000" y="665" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>Q51:</strong> "Suicide rate in India is?"</text><text x="1000" y="685" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">Answer: 10.5/100,000</text><text x="1000" y="715" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">Source figures may vary by year (NCRB)</text><circle class="ic" cx="1520" cy="558" r="14"/><text class="t-info" x="1520" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="suicide-doc"><rect x="60" y="760" width="1480" height="200" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="800" y="800" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">📋 Medicolegal Duties — Suicide Case</text><text x="90" y="838" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">1. Inform <strong>POLICE</strong> — all suspected suicides are MLC (BNSS 174 inquest)</text><text x="90" y="863" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">2. Preserve <strong>SUICIDE NOTE</strong>, weapon, container of poison — photograph &amp; bag separately</text><text x="90" y="888" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">3. Document features supporting SUICIDE (hesitation cuts, weapon in hand, favourable site) vs HOMICIDE (defence wounds, no hesitation)</text><text x="90" y="913" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">4. <strong>Refer to psychiatry</strong> if patient survives (MHCA mandate)</text><text x="90" y="938" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">5. In <strong>dowry / harassment death</strong> within 7 yrs of marriage → magistrate inquest (BNSS 176); presume BNS 80 (dowry death) if &lt; 7 yrs</text><circle class="ic" cx="1510" cy="778" r="14"/><text class="t-info" x="1510" y="784" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="980" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="1018" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">🎯 Attempted suicide DECRIMINALISED by MHCA 2017 § 115 · ABETMENT of suicide = BNS 108 (≤ 10 yrs)</text>
</svg>`;


const NODES = {
  'im-injury-def': { label: 'Injury — BNS 2(14) / IPC 44', info: '<p><strong>Injury</strong> = "any harm whatever illegally caused to any person, in body, mind, reputation, or property."</p><p>Defined in <strong>BNS 2(14)</strong> (the General Definitions section), equivalent to the old <strong>IPC 44</strong>.</p><p>★ Broad — covers <strong>physical</strong> (body), <strong>mental</strong> (mind), <strong>reputation</strong> (defamation), and <strong>property</strong>. Unlike "hurt" which is narrowly physical.</p><p>Most other sections (BNS 114 hurt, BNS 116 grievous hurt) derive from this broader definition.</p>', tags: ['BNS 2(14) = IPC 44', '4 categories of harm'] },
  'im-hurt-def': { label: 'Hurt — BNS 114 (≡ IPC 319)', info: '<p><strong>Hurt</strong> (BNS 114): "Whoever causes <strong>bodily pain</strong>, <strong>disease</strong>, or <strong>infirmity</strong> to any other person is said to cause hurt."</p><p><strong>3 elements</strong> — bodily pain · disease · infirmity (any of these suffices).</p><p><strong>★ Mental anguish is NOT hurt</strong> — comes under "injury" but is a separate offence.</p><p><strong>Voluntarily causing hurt:</strong> BNS 115 (≡ IPC 321).</p><p><strong>Punishment</strong> (BNS 115(2)): up to 1 year imprisonment, or fine up to ₹10,000, or both.</p>', tags: ['BNS 114 = IPC 319', '3 elements'] },
  'im-grievous-def': { label: 'Grievous Hurt — BNS 116 (≡ IPC 320)', info: '<p><strong>Grievous hurt</strong> = a hurt designated as "grievous" by an ENUMERATED list of 8 categories in <strong>BNS 116(2)</strong> (≡ IPC 320).</p><p>The 8 clauses include: emasculation, privation of sight/hearing/limb, impairing power, permanent disfigurement, fracture/dislocation, &gt; 20-day disability, and endangering life.</p><p><strong>Voluntarily causing grievous hurt:</strong> BNS 117 (≡ IPC 325).</p><p><strong>By dangerous weapon:</strong> BNS 118 (≡ IPC 326).</p><p><strong>Punishment</strong> (BNS 117(2)): up to 7 years + fine.</p><p>See diagram IM-03 for all 8 clauses.</p>', tags: ['BNS 116 = IPC 320', '8 clauses'] },
  'im-bns-2023': { label: 'BNS 2023 — New Provisions', info: '<p>The <strong>Bharatiya Nyaya Sanhita 2023</strong> replaced the Indian Penal Code 1860 on <strong>1 July 2024</strong>. Key changes relevant to injury/medicolegal:</p><ul><li><strong>BNS 103(2)</strong> — Mob lynching: ≥ 5 persons murder on grounds of race/caste/community/religion/language/sex/personal belief — punishable by death or life imprisonment</li><li><strong>BNS 124</strong> — Acid attack (consolidates old IPC 326A/B 2013 amendment) — 10 yrs to life + fine to victim</li><li><strong>BNS 117(4)</strong> — Permanent disability or vegetative state due to grievous hurt — 10 yrs to life</li><li><strong>BNS 109</strong> — Attempt to murder (was IPC 307); life if hurt caused</li><li><strong>BNS 110</strong> — Attempt to commit culpable homicide (was IPC 308)</li></ul>', tags: ['BNS 2023 changes'] },
  'im-key-sections': { label: 'BNS ↔ IPC Quick Map', info: '<p>Memorise the BNS-IPC equivalents for exam:</p><ul><li>BNS 114 = IPC 319 (Hurt definition)</li><li>BNS 115 = IPC 321 (Voluntarily causing hurt)</li><li>BNS 116 = IPC 320 (Grievous hurt definition)</li><li>BNS 117 = IPC 325/322 (Voluntarily causing grievous hurt)</li><li>BNS 118 = IPC 324/326 (Hurt by dangerous weapon)</li><li>BNS 124 = IPC 326A/B (Acid attack — 2013 amendment)</li><li>BNS 100 = IPC 299 (Culpable homicide)</li><li>BNS 101 = IPC 300 (Murder)</li><li>BNS 103 = IPC 302 (Punishment for murder)</li><li>BNS 106 = IPC 304A (Death by negligence)</li><li>BNS 108 = IPC 306 (Abetment of suicide)</li><li>BNS 109 = IPC 307 (Attempt to murder)</li></ul><p>See subject-pinned <strong>IPC ↔ BNS Quick-Reference Card</strong>.</p>', tags: ['Cross-reference table'] },

  'im-classification': { label: 'Injury Severity Classification', info: '<p>Injuries in medicolegal reports are graded into 3 levels:</p><ol><li><strong>SIMPLE HURT</strong> — does not meet any grievous criterion</li><li><strong>GRIEVOUS HURT</strong> — meets ANY ONE of the 8 BNS 116(2) clauses</li><li><strong>DANGEROUS</strong> — sub-category of grievous (clause 8a) — endangers life</li></ol><p>The grade determines: BNS section invoked · punishment · bailability · cognizability.</p>', tags: ['3-level grading'] },
  'im-simple': { label: 'Simple Hurt', info: '<p><strong>Simple hurt</strong> = hurt that does NOT meet any of the 8 grievous criteria.</p><p><strong>Examples:</strong> Minor abrasion, small bruise, superficial cut not involving deep structures, sprain without joint instability, minor scalp lac.</p><p><strong>Healing:</strong> Typically &lt; 20 days, no permanent disability.</p><p><strong>BNS section:</strong> BNS 115 (≡ IPC 321/323).</p><p><strong>Punishment:</strong> Up to 1 year imprisonment or fine ₹10,000 or both.</p><p><strong>Bailable:</strong> Yes (non-cognizable).</p>', tags: ['BNS 115', '≤ 1 yr'] },
  'im-grievous': { label: 'Grievous Hurt — Quick Look', info: '<p><strong>Grievous hurt</strong> = hurt meeting ANY ONE of the 8 enumerated categories in BNS 116(2).</p><p><strong>Examples:</strong> Fracture (any), dislocation, privation of vision, permanent disfigurement of head/face, hurt causing &gt; 20 days inability to follow ordinary pursuits.</p><p><strong>BNS section:</strong> BNS 117 (≡ IPC 325) for voluntarily causing grievous hurt.</p><p><strong>Punishment:</strong> Up to 7 years + fine.</p><p><strong>★ NEW BNS 117(4):</strong> Permanent disability / vegetative state → 10 yrs to life.</p>', tags: ['BNS 117', '≤ 7 yr'] },
  'im-dangerous': { label: 'Dangerous Hurt', info: '<p><strong>Dangerous hurt</strong> = a sub-category of grievous hurt that, in the surgeon\'s judgement, ENDANGERS LIFE at the time of examination.</p><p><strong>Examples:</strong> Penetrating chest injury, major vessel cut, head injury with loss of consciousness, internal organ rupture, severe burns &gt; 30%.</p><p>Classified under BNS 116(2) clause 8 (a) — "endangers life".</p><p><strong>★ Clinical judgement of mortality risk</strong> at the moment of examination — surgeon\'s opinion needed.</p>', tags: ['Clause 8a', 'Surgeon judgement'] },
  'im-dangerous-weapon': { label: 'By Dangerous Weapon — BNS 118', info: '<p><strong>BNS 118</strong> (≡ IPC 324/326): hurt / grievous hurt caused by:</p><ul><li>Instrument for SHOOTING, STABBING, or CUTTING</li><li>OR any instrument used as a weapon of offence likely to cause death</li><li>OR fire / heated substance</li><li>OR any poison or corrosive substance</li><li>OR any explosive substance</li><li>OR any deleterious substance</li><li>OR any animal</li></ul><p><strong>Punishment:</strong></p><ul><li><strong>BNS 118(1)</strong> — hurt by dangerous weapon — up to 3 years OR fine OR both</li><li><strong>BNS 118(2)</strong> — grievous hurt by dangerous weapon — 10 years to life + fine</li></ul><p><strong>NEET-PG 2016 Q7:</strong> "Use of dangerous weapon" = IPC 324 (now BNS 118).</p>', tags: ['BNS 118', 'NEET-PG 2016 Q7'] },

  'gh-mnemonic': { label: 'Grievous Hurt Mnemonic', info: '<p>Mnemonic to recall the 8 clauses of BNS 116(2):</p><p><strong>"EVE Privates Disfigure Fracture 20-Days Dangerously"</strong></p><ul><li><strong>EVE</strong>: Emasculation · privation of Vision · privation of Ear (hearing)</li><li><strong>Privates</strong>: privation of limb/joint · power of limb/joint</li><li><strong>Disfigure</strong>: head/face permanent disfigurement</li><li><strong>Fracture</strong>: fracture/dislocation of bone or tooth</li><li><strong>20 Days</strong>: hurt causing &gt; 20 days inability to follow ordinary pursuits</li><li><strong>Dangerously</strong>: hurt endangering life</li></ul><p>★ Memorise verbatim — most-asked FMT LAQ.</p>', tags: ['Mnemonic for 8 clauses'] },
  'gh-c1': { label: 'Clause 1 — Emasculation', info: '<p><strong>Clause 1:</strong> Emasculation (castration or loss of reproductive function).</p><p><strong>Applies to males only.</strong></p><p>★ Female sterilisation falls under clause 8 (b) "20-day disability" or general grievous hurt rather than clause 1 specifically.</p>', tags: ['Male only'] },
  'gh-c2': { label: 'Clause 2 — Privation of Sight', info: '<p><strong>Clause 2:</strong> Permanent privation of the sight of <strong>EITHER eye</strong>.</p><p>Even ONE eye qualifies — does not require both.</p><p><strong>★ "Permanent"</strong> — temporary vision loss (e.g., post-trauma swelling that resolves) is simple hurt.</p>', tags: ['Either eye qualifies'] },
  'gh-c3': { label: 'Clause 3 — Privation of Hearing', info: '<p><strong>Clause 3:</strong> Permanent privation of hearing of <strong>EITHER ear</strong>.</p><p>Even ONE ear qualifies.</p><p><strong>★ Document by audiometry.</strong> Temporary loss (e.g., from TM rupture that heals) is simple hurt.</p>', tags: ['Either ear qualifies'] },
  'gh-c4': { label: 'Clause 4 — Loss of Limb / Joint', info: '<p><strong>Clause 4:</strong> Privation of any member (limb) or joint.</p><p><strong>Examples:</strong> Amputation, loss of finger/toe (even partial), loss of ear pinna, loss of nose.</p><p>★ Must be permanent.</p>', tags: ['Amputation / loss'] },
  'gh-c5': { label: 'Clause 5 — Power of Limb / Joint', info: '<p><strong>Clause 5:</strong> Permanent impairing of the <strong>POWERS</strong> of any member or joint OR head/face.</p><p>The limb is still present but does not function properly.</p><p><strong>Examples:</strong> Stroke from a blow (hemiparesis), permanent stiffness of a joint, nerve injury causing motor weakness.</p>', tags: ['Function lost, limb present'] },
  'gh-c6': { label: 'Clause 6 — Disfiguration of Head / Face', info: '<p><strong>Clause 6:</strong> Permanent disfiguration of the head or face.</p><p><strong>Examples:</strong> Scar across face, loss of eyebrow, missing teeth (esp. incisors), loss of ear pinna, distortion of nose shape.</p><p>★ Must be visible and permanent — small inconspicuous scars do not qualify.</p>', tags: ['Visible + permanent'] },
  'gh-c7': { label: 'Clause 7 — Fracture or Dislocation ★', info: '<p><strong>Clause 7:</strong> Fracture or dislocation of any BONE or TOOTH.</p><p><strong>★ Even a hairline fracture qualifies.</strong></p><p><strong>★ Loss / fracture of a tooth is grievous</strong> (NEET-PG favourite).</p><p>Document by X-ray; mention bone involved + type of fracture.</p>', tags: ['Any bone/tooth', '★ even hairline'] },
  'gh-c8': { label: 'Clause 8 — Dual (a + b) ★', info: '<p><strong>Clause 8 has TWO parts</strong> — meeting EITHER qualifies as grievous:</p><p><strong>(a)</strong> Hurt that <strong>endangers life</strong> (i.e., "dangerous hurt")</p><p><strong>(b)</strong> Hurt that causes the victim to be unable to follow ordinary pursuits for ≥ 20 days, OR severe bodily pain for ≥ 20 days</p><p><strong>Examples (a):</strong> Penetrating chest, head injury with LOC, internal organ rupture.</p><p><strong>Examples (b):</strong> Multiple long bone fractures, extensive burns, soft tissue injury requiring prolonged hospitalisation.</p>', tags: ['Endangers life OR &gt; 20 days'] },
  'gh-bns-acid': { label: 'BNS 124 — Acid Attack', info: '<p><strong>BNS 124</strong> (consolidating IPC 326A/B 2013 amendment):</p><p>"Whoever throws or administers acid → permanent or partial damage / disability / disfigurement / burns" → grievous hurt.</p><p><strong>Punishment:</strong> 10 years to life + fine to victim (covers medical + rehab costs).</p><p>BNS 124(2) — attempt to throw acid (even without injury) — 5-7 yrs.</p>', tags: ['10 yrs to life'] },
  'gh-bns-disability': { label: 'BNS 117(4) — Permanent Disability', info: '<p><strong>BNS 117(4) (NEW):</strong> Causing grievous hurt that results in PERMANENT DISABILITY or PERMANENT VEGETATIVE STATE.</p><p><strong>Punishment:</strong> 10 years to life imprisonment + fine.</p><p>Addresses severe outcomes that were previously inadequately graded under IPC.</p>', tags: ['10 yrs - life', 'NEW BNS'] },

  'hom-def': { label: 'Homicide — Definition', info: '<p><strong>Homicide</strong> = the killing of one human being by another.</p><p><strong>Classified into:</strong></p><ul><li><strong>Lawful</strong> (justifiable or excusable) — self-defence, judicial execution, lawful war, accident in lawful act</li><li><strong>Unlawful</strong> — culpable homicide, murder, death by negligence</li></ul><p>The forensic / legal task is to determine which category and what statutory section applies.</p>', tags: ['Lawful vs Unlawful'] },
  'hom-types': { label: 'Classification of Homicide', info: '<p><strong>A. Lawful Homicide</strong> (no criminal liability):</p><ul><li>Self-defence — BNS 35-44 (private defence of body / property)</li><li>Judicial execution — pursuant to court order</li><li>Lawful act of war — by legal combatant</li><li>Accident in lawful act — BNS 27</li></ul><p><strong>B. Unlawful Homicide:</strong></p><ul><li>Culpable homicide — BNS 100 (≡ IPC 299)</li><li>Murder — BNS 101 (≡ IPC 300)</li><li>Death by negligence — BNS 106 (≡ IPC 304A)</li></ul>', tags: ['Lawful + Unlawful'] },
  'hom-culpable': { label: 'Culpable Homicide — BNS 100', info: '<p><strong>Culpable Homicide</strong> (BNS 100, ≡ IPC 299): Causing death by an act done with:</p><ul><li><strong>(a)</strong> INTENTION of causing death, OR</li><li><strong>(b)</strong> INTENTION of causing such bodily injury as is LIKELY to cause death, OR</li><li><strong>(c)</strong> KNOWLEDGE that the act is likely to cause death</li></ul><p><strong>★ Cardinal rule:</strong> "All murders are culpable homicide; not all culpable homicide is murder."</p><p>Culpable homicide not amounting to murder is the lesser offence — punishment up to 10 years (BNS 105).</p>', tags: ['BNS 100', '3 mens rea levels'] },
  'hom-murder': { label: 'Murder — BNS 101 (≡ IPC 300)', info: '<p>Culpable homicide IS MURDER if the act is done with:</p><ol><li><strong>INTENTION of causing DEATH</strong> (direct intent)</li><li><strong>INTENTION of causing bodily injury</strong> which the offender KNOWS to be LIKELY to cause death of THAT PERSON (specific knowledge)</li><li><strong>INTENTION of causing bodily injury SUFFICIENT in the ordinary course of nature to cause death</strong> (objective gravity)</li><li><strong>KNOWLEDGE</strong> that the act is so IMMINENTLY DANGEROUS that it MUST in all probability cause death (recklessness equivalent)</li></ol><p><strong>Punishment (BNS 103):</strong> Death OR life imprisonment + fine.</p><p>5 exceptions reduce murder to culpable homicide not amounting to murder — see exceptions node.</p>', tags: ['4 elements', 'Death or life'] },
  'hom-exceptions': { label: 'When CH is NOT Murder (BNS 101 Exceptions)', info: '<p>Culpable Homicide is NOT Murder under 5 statutory exceptions:</p><ol><li><strong>Grave &amp; sudden provocation</strong> — by the deceased; loss of self-control</li><li><strong>Right of private defence exceeded in good faith</strong> — over-reaction</li><li><strong>Public servant exceeding lawful power in good faith</strong> — duty-bound excess</li><li><strong>Sudden fight</strong> — heat of passion, no premeditation, no undue advantage taken</li><li><strong>Death of person ≥ 18 with consent</strong> — euthanasia / suicide pact</li></ol><p>If any exception applies → BNS 100 (culpable homicide not amounting to murder), punishable under BNS 105 (up to 10 years).</p>', tags: ['5 exceptions'] },
  'hom-mob': { label: 'BNS 103(2) — Mob Lynching (NEW)', info: '<p><strong>BNS 103(2) — NEW in BNS 2023:</strong></p><p>When a group of ≥ 5 persons MURDER on the grounds of:</p><ul><li>Race · caste · community</li><li>Sex · place of birth · language</li><li>Personal belief or any similar ground</li></ul><p><strong>Punishment:</strong> DEATH or life imprisonment + fine. Each member of the group is severally liable.</p><p>Aimed at communal violence and identity-based lynching.</p>', tags: ['NEW BNS 2023', '≥ 5 persons'] },

  'mlc-purpose': { label: 'MLC Examination — Purpose', info: '<p>Every injury examined for legal purposes must be documented as a <strong>Medicolegal Case (MLC)</strong>.</p><p><strong>Documentation objectives:</strong></p><ul><li>Nature of injury (type, dimensions, site)</li><li>Grade (simple / grievous / dangerous)</li><li>Probable weapon</li><li>Age of injury</li><li>Vital reaction (AM vs PM)</li><li>Concomitant findings &amp; conditions</li></ul><p>The grade carries legal weight: it determines BNS section, punishment, bailability.</p>', tags: ['MLC purpose'] },
  'mlc-points': { label: '10-Point Injury Report', info: '<p>For each injury, document:</p><ol><li><strong>Site</strong> — exact anatomical location (cm from landmark)</li><li><strong>Dimensions</strong> — length × width × depth</li><li><strong>Shape</strong> — linear, curved, irregular, stellate</li><li><strong>Margins / edges</strong> — clean, abraded, bruised, everted, inverted</li><li><strong>Floor / depth</strong> — tissue bridges, structures cut</li><li><strong>Surrounding tissue</strong> — bruising, swelling, vital reaction</li><li><strong>Direction</strong> — tailing, force vector</li><li><strong>Probable weapon</strong> — sharp / blunt / dangerous</li><li><strong>Age of injury</strong> — fresh / 24 h / 2-7 d / &gt; 1 wk</li><li><strong>Grade</strong> — simple / grievous / dangerous</li></ol><p>★ Always photograph with scale. Document AM vs PM by vital reaction. Mention concomitant disease / drug effect.</p>', tags: ['10-point format'] },
  'mlc-age': { label: 'Age of Injury — Quick Markers', info: '<p><strong>Bruise colour (RBGY):</strong></p><ul><li>Red (0-2 d) · Blue (2-5 d) · Green (5-7 d) · Yellow (7-10 d, ≥ 18 h minimum)</li></ul><p><strong>Abrasion scab:</strong> 24 h scab forming · 4-7 d dark adherent · 7+ d separates · 10-14 d healed (no scar).</p><p><strong>Wound healing:</strong></p><ul><li>12-24 h: clot · neutrophilic margins · slight redness</li><li>2-3 d: macrophages predominate · scab</li><li>3-5 d: granulation tissue · capillary buds</li><li>1 wk: epithelialisation</li><li>2 wk: pink vascular scar</li><li>1 month: pale firm scar</li></ul>', tags: ['RBGY · scab · healing'] },
  'mlc-pitfalls': { label: 'Common Reporting Pitfalls', info: '<ul><li><strong>Under-grading head injury</strong> — LOC even briefly → endangers life → grievous (BNS 116(2)(8))</li><li><strong>Missing intramuscular bruise</strong> — may not surface for hours/days · always palpate, re-examine</li><li><strong>Misidentifying split lac as incised</strong> — look for tissue bridges + crushed hair bulbs</li><li><strong>Premature commitment</strong> when X-ray / CT pending — declare "under observation"</li><li><strong>Missing trace evidence</strong> — paint, glass, fibre, GSR</li></ul>', tags: ['Common errors'] },
  'mlc-observation': { label: '"Kept Under Observation" — When', info: '<p>When in doubt about grade, declare injury as <strong>"kept under observation"</strong> rather than commit prematurely.</p><p><strong>When to use:</strong></p><ul><li>Head injury awaiting CT</li><li>Suspected internal injury</li><li>Bone tenderness pending X-ray</li><li>Multiple injuries with potential late sequelae</li></ul><p>Re-examine at 24-48 hours; final grade given when picture is complete (e.g., if intracranial haemorrhage develops → grievous "endangering life").</p>', tags: ['When in doubt'] },

  'bns106': { label: 'BNS 106 — Death by Negligence', info: '<p><strong>BNS 106(1)</strong> (≡ IPC 304A): "Whoever causes the death of any person by doing any RASH or NEGLIGENT act NOT amounting to culpable homicide..."</p><p><strong>Punishment:</strong> up to 5 years + fine.</p><p><strong>BNS 106(2):</strong> Hit-and-run — escape after RTA — up to 10 years + fine (NEW provision).</p><p>Used for medical negligence cases (with caveats), RTA deaths, industrial accidents.</p>', tags: ['BNS 106 = IPC 304A'] },
  'negligence-medical': { label: 'Medical Negligence under BNS 106', info: '<p>A doctor can be charged under BNS 106(1) <strong>ONLY if the negligence is "gross" or "criminal"</strong> — mere error of judgement or therapeutic failure is NOT criminal negligence.</p><p><strong>Jacob Mathew vs State of Punjab (2005)</strong> — Supreme Court held:</p><ul><li>Higher threshold for medical professionals</li><li>Mens rea must be established</li><li>Expert opinion from a medical board MANDATORY before chargesheet</li><li>Investigating officer should not act without expert opinion</li></ul><p>Civil negligence (under Consumer Protection Act) has a LOWER threshold than criminal.</p>', tags: ['Jacob Mathew 2005', 'Gross only'] },
  'culpability-ladder': { label: 'Culpability Ladder (Mens Rea)', info: '<p>The "mens rea ladder" by escalating culpability:</p><ol><li><strong>Accident</strong> (BNS 27) — lawful act + due care — NO criminal liability</li><li><strong>Negligence</strong> (BNS 106) — rash / negligent act — 5-10 yrs + fine</li><li><strong>Culpable Homicide</strong> (BNS 100) — intent of injury likely to cause death — up to life</li><li><strong>Murder</strong> (BNS 101) — intent of death OR sufficient injury — death / life + fine</li></ol><p>★ The mental element (mens rea) escalates from absent (accident) → carelessness (negligence) → knowledge (CH) → intent (murder).</p>', tags: ['4 levels of mens rea'] },
  'bns124-acid': { label: 'BNS 124 — Acid Attack (Detail)', info: '<p><strong>BNS 124(1):</strong> throwing/administering acid causing permanent damage / disability / disfiguration / burns.</p><p><strong>Punishment:</strong> 10 years to life + FINE to the victim (covers medical + rehabilitation costs).</p><p><strong>BNS 124(2):</strong> Attempt to throw acid (even without actual injury) — 5-7 yrs + fine.</p><p><strong>Acid</strong> = any corrosive substance — H₂SO₄, HCl, HNO₃, NaOH, KOH (alkalis also covered).</p><p>Equivalent to old IPC 326A/326B (added 2013 amendment); now consolidated in BNS 2023.</p>', tags: ['10 yrs-life', 'Fine to victim'] },
  'bnss-summary': { label: 'Related BNSS Procedural Sections', info: '<p>The <strong>Bharatiya Nagarik Suraksha Sanhita 2023 (BNSS)</strong> is the procedural code (replaced CrPC 1973). Key sections for injury cases:</p><ul><li><strong>BNSS 174</strong> (≡ CrPC 174) — police inquest in unnatural death</li><li><strong>BNSS 176</strong> (≡ CrPC 176) — magistrate inquest in dowry death (within 7 yrs of marriage) and custody death</li><li><strong>BNSS 184</strong> — examination of rape victims by RMP</li></ul><p>See Ch 1 (Legal Procedure) for full BNSS framework.</p>', tags: ['See Ch 1'] },

  'suicide-def': { label: 'Suicide — Legal Status', info: '<p>★ Per <strong>Mental Healthcare Act 2017 (Section 115)</strong>:</p><p>"Any person who attempts suicide shall be presumed, unless proved otherwise, to have severe stress; and shall NOT be tried &amp; punished under the said code."</p><p>Effectively <strong>DECRIMINALISES attempted suicide</strong> in India.</p><p>The doctor\'s duty becomes therapeutic + mental health assessment, not law enforcement.</p>', tags: ['MHCA 2017 § 115'] },
  'suicide-309': { label: 'Attempted Suicide (Old IPC 309)', info: '<p><strong>Old IPC 309:</strong> attempt to commit suicide punishable by up to 1 year imprisonment OR fine.</p><p><strong>MHCA 2017 § 115:</strong> Person presumed under severe stress; NOT to be tried and punished.</p><p><strong>BNS 2023:</strong> Suicide attempt itself is NOT specifically criminalised (MHCA prevails).</p><p>★ Doctor\'s duty when patient survives:</p><ul><li>Treat the medical condition</li><li>Inform police (MLC)</li><li>Assess mental health</li><li>Refer to psychiatry under MHCA</li></ul>', tags: ['Decriminalised'] },
  'suicide-abet': { label: 'Abetment of Suicide — BNS 108', info: '<p><strong>BNS 108</strong> (≡ IPC 306): "Whoever abets the commission of suicide..."</p><p><strong>Punishment:</strong> Up to 10 years + fine.</p><p><strong>Examples:</strong></p><ul><li>Dowry harassment leading to wife\'s suicide (cross-ref BNS 80 dowry death)</li><li>Bullying / harassment leading to victim\'s suicide</li><li>Encouragement / instruction / facilitation</li></ul><p><strong>BNS 107</strong> (abetment of suicide of insane / child) — death penalty in extreme cases.</p>', tags: ['BNS 108 = IPC 306', '≤ 10 yrs'] },
  'suicide-rate': { label: 'Suicide in India — Key Figures', info: '<p>★ <strong>India suicide rate:</strong> ~10.5 per 100,000 (NEET-PG 2016 Q51). Figures vary by NCRB year.</p><p><strong>Risk factors</strong> (NEET-PG 2016 Q50):</p><ul><li><strong>Drug abuse</strong> ★</li><li>Depression, prior attempt, social isolation</li><li>Male sex (completed suicide); female sex (attempts)</li><li>Unemployment, marriage discord, chronic illness</li></ul><p><strong>Common methods (India):</strong> hanging · poisoning (pesticides) · self-immolation · drowning · firearm.</p><p><strong>Suicide notes:</strong> Preserve, photograph, secure, forensic handwriting analysis if disputed.</p>', tags: ['NEET-PG 2016 Q50,51'] },
  'suicide-pyq': { label: 'NEET-PG 2016 Suicide PYQs', info: '<p><strong>Q50 — Risk factor for suicide:</strong> Drug abuse · depression · prior attempt · drug abuse is the textbook answer.</p><p><strong>Q51 — Suicide rate in India:</strong> 10.5/100,000 (per the textbook). NCRB latest figures may differ — examiners stick to the textbook value.</p>', tags: ['Verbatim PYQs'] },
  'suicide-doc': { label: 'Medicolegal Duties — Suicide Case', info: '<ol><li><strong>Inform POLICE</strong> — all suspected suicides are MLC (BNSS 174 inquest)</li><li><strong>Preserve SUICIDE NOTE, weapon, container of poison</strong> — photograph, bag separately, chain of custody</li><li><strong>Document features</strong> supporting SUICIDE (hesitation cuts, weapon in hand, favourable site) vs HOMICIDE (defence wounds, no hesitation, multiple)</li><li><strong>Refer to psychiatry</strong> if patient survives (MHCA mandate)</li><li><strong>Dowry death within 7 yrs</strong> of marriage → magistrate inquest (BNSS 176) + BNS 80 (dowry death) presumption</li></ol>', tags: ['5-step duty'] }
};

function nodeList(ids) { return ids.map(id => ({ nodeId: id, ...NODES[id] })); }

const MCQS = {
  'IM-01': [
    { stem: 'The statutory definition of "Injury" is found in:', options: ['BNS 114','BNS 2(14) (= IPC 44)','BNS 116','BNS 118'], answerIdx: 1, explain: 'BNS 2(14) (≡ IPC 44) defines injury as "any harm whatever illegally caused to any person, in body, mind, reputation, or property."', tag: '[PG-Inspired]' },
    { stem: '"Hurt" under BNS 114 (≡ IPC 319) includes which of the following?', options: ['Bodily pain','Disease','Infirmity','All of the above'], answerIdx: 3, explain: 'Hurt = bodily pain, disease, or infirmity — any of the 3 elements suffices. Mental anguish alone is NOT hurt.', tag: '[PG-Inspired]' },
    { stem: 'BNS 2023 replaced IPC 1860 on:', options: ['26 January 2023','1 July 2024','15 August 2024','1 January 2025'], answerIdx: 1, explain: 'Bharatiya Nyaya Sanhita 2023 (along with BNSS, BSA) came into force on 1 July 2024 replacing IPC, CrPC, IEA respectively.', tag: '[UNIV]' }
  ],
  'IM-02': [
    { stem: '"Grievous hurt" under BNS 116 (≡ IPC 320) is defined by:', options: ['Surgical opinion','A list of 8 enumerated categories','Duration of disability alone','Cost of treatment'], answerIdx: 1, explain: 'Grievous hurt is defined by an enumerated list of 8 clauses in BNS 116(2). Meeting any one clause qualifies.', tag: '[NEET-PG 2016]' },
    { stem: '"Use of dangerous weapon" causing hurt comes under which section?', options: ['BNS 115 (= IPC 321)','BNS 117 (= IPC 325)','BNS 118 (= IPC 324)','BNS 124 (= IPC 326A)'], answerIdx: 2, explain: 'BNS 118 (≡ IPC 324 for simple, 326 for grievous) — hurt by dangerous weapon or means. NEET-PG 2016 Q7 verbatim (asked for IPC 324).', tag: '[NEET-PG 2016]' },
    { stem: 'In a medicolegal report, when the grade of injury is uncertain (esp. head injury), the examiner should:', options: ['Always grade as grievous','Always grade as simple','Declare "kept under observation"','Refuse to give an opinion'], answerIdx: 2, explain: '"Kept under observation" is the correct legal phrase when picture is incomplete (e.g., X-ray, CT pending). Re-examine in 24-48 h.', tag: '[PG-Inspired]' },
    { stem: 'Maximum punishment for voluntarily causing grievous hurt by dangerous weapon (BNS 118(2)) is:', options: ['3 years','7 years','10 years to life','Death'], answerIdx: 2, explain: 'BNS 118(2) — grievous hurt by dangerous weapon — 10 years to life + fine. BNS 117(2) (without dangerous weapon) is up to 7 years.', tag: '[PG-Inspired]' }
  ],
  'IM-03': [
    { stem: 'Loss of how many teeth qualifies as grievous hurt under BNS 116(2)?', options: ['1','2','3','Any number — even 1 tooth qualifies'], answerIdx: 3, explain: 'Clause 7 — "fracture or dislocation of any BONE or TOOTH" — even one tooth qualifies (NEET-PG favourite trap).', tag: '[PG-Inspired]' },
    { stem: 'Permanent privation of vision of ONE eye is graded as:', options: ['Simple hurt','Grievous hurt','Dangerous hurt only','Not graded'], answerIdx: 1, explain: 'Clause 2 of BNS 116(2) — privation of EITHER EYE is grievous. Both not required.', tag: '[PG-Inspired]' },
    { stem: 'Acid attack causing permanent disability is now covered under:', options: ['BNS 115','BNS 117','BNS 124','BNS 118'], answerIdx: 2, explain: 'BNS 124 (consolidates old IPC 326A/B) — acid attack — 10 yrs to life + fine to victim.', tag: '[PG-Inspired]' },
    { stem: 'Which of the following is NOT a clause of grievous hurt under BNS 116(2)?', options: ['Emasculation','Fracture / dislocation','Mental distress lasting 20+ days','Permanent disfiguration of head/face'], answerIdx: 2, explain: '"Mental distress" is NOT a grievous hurt clause. The 8 clauses are physical/anatomical. The 20-day clause refers to inability to follow ordinary pursuits or severe bodily pain.', tag: '[PG-Inspired]' }
  ],
  'IM-04': [
    { stem: '"Whoever causes death by an act done with intention of causing such bodily injury as is likely to cause death" is the definition of:', options: ['Murder','Culpable homicide','Death by negligence','Suicide abetment'], answerIdx: 1, explain: 'BNS 100 (≡ IPC 299) culpable homicide — 3 mens rea variants: (a) intent of death, (b) intent of injury LIKELY to cause death, (c) knowledge.', tag: '[PG-Inspired]' },
    { stem: 'For an act to be classified as MURDER (BNS 101) rather than culpable homicide, the offender must have:', options: ['No intention but caused death','Intention sufficient in ordinary course of nature to cause death','Acted negligently','Acted in self-defence'], answerIdx: 1, explain: 'BNS 101 element 3 — intention of causing bodily injury sufficient in the ordinary course of nature to cause death distinguishes murder from CH.', tag: '[PG-Inspired]' },
    { stem: 'Punishment for murder under BNS 103 is:', options: ['Up to 7 years','Up to 10 years','Up to life','Death OR life imprisonment + fine'], answerIdx: 3, explain: 'BNS 103 — punishment for murder is death OR life imprisonment + fine. BNS 103(2) — mob lynching also same.', tag: '[PG-Inspired]' },
    { stem: 'Mob lynching by ≥ 5 persons on grounds of race/caste/religion is a new provision under:', options: ['BNS 100','BNS 103(2)','BNS 124','BNS 117(4)'], answerIdx: 1, explain: 'BNS 103(2) — NEW in BNS 2023 — mob lynching by group of 5+ on identity-based grounds — death/life + fine.', tag: '[UNIV]' }
  ],
  'IM-05': [
    { stem: 'In a medicolegal report, the YELLOW colour of a bruise indicates a minimum age of:', options: ['6 hours','18 hours','3 days','7 days'], answerIdx: 1, explain: 'Yellow appears when bilirubin accumulates — at least 18 hours post-injury.', tag: '[PG-Inspired]' },
    { stem: 'Granulation tissue (capillary buds + fibroblasts) in a healing wound is seen at:', options: ['12-24 hours','24-48 hours','3-5 days','2 weeks'], answerIdx: 2, explain: 'Granulation tissue = 3-5 days post-injury (after neutrophil and macrophage phases).', tag: '[PG-Inspired]' }
  ],
  'IM-06': [
    { stem: 'Death by rash or negligent act NOT amounting to culpable homicide is punished under:', options: ['BNS 100','BNS 101','BNS 106','BNS 108'], answerIdx: 2, explain: 'BNS 106 (≡ IPC 304A) — death by negligence — up to 5 years (10 years for hit-and-run under BNS 106(2)).', tag: '[PG-Inspired]' },
    { stem: 'Per Jacob Mathew vs State of Punjab (2005), a doctor accused of medical negligence under BNS 106:', options: ['Can be arrested immediately','Should be charged only after expert medical opinion','Cannot ever be charged','Is automatically guilty'], answerIdx: 1, explain: 'Jacob Mathew (2005) — expert medical opinion from a board is MANDATORY before chargesheet; "gross / criminal" negligence threshold required.', tag: '[PG-Inspired]' },
    { stem: 'BNS 124 (acid attack) punishment is:', options: ['Up to 3 years','Up to 7 years','10 years to life + fine to victim','Death'], answerIdx: 2, explain: 'BNS 124 — 10 years to life imprisonment + FINE to the victim (covers medical &amp; rehab costs).', tag: '[PG-Inspired]' }
  ],
  'IM-07': [
    { stem: 'Per Mental Healthcare Act 2017 Section 115, a person who attempts suicide:', options: ['Is punished with up to 1 year','Is presumed to have severe stress and NOT punished','Must be admitted to a mental hospital','Is fined ₹10,000'], answerIdx: 1, explain: 'MHCA 2017 § 115 — presumed severe stress → effectively decriminalises attempted suicide; doctor\'s duty becomes therapeutic + mental health referral.', tag: '[PG-Inspired]' },
    { stem: 'Abetment of suicide under BNS 108 (≡ IPC 306) is punishable by:', options: ['Up to 1 year','Up to 5 years','Up to 10 years','Up to life'], answerIdx: 2, explain: 'BNS 108 — abetment of suicide — up to 10 years + fine. Common in dowry harassment leading to suicide cases.', tag: '[PG-Inspired]' },
    { stem: 'The suicide rate in India as per textbook/NCRB is approximately:', options: ['10.5 / 1,00,000','25 / 1,00,000','5 / 1,00,000','50 / 1,00,000'], answerIdx: 0, explain: '10.5 per 100,000 — NEET-PG 2016 Q51 verbatim. Actual figures vary slightly by NCRB year.', tag: '[NEET-PG 2016]' },
    { stem: 'A leading risk factor for suicide is:', options: ['Marriage','Increased serotonin','Drug abuse','Female sex'], answerIdx: 2, explain: 'Drug abuse — NEET-PG 2016 Q50 verbatim. Other factors: depression, prior attempt, social isolation, male sex (completed).', tag: '[NEET-PG 2016]' }
  ]

};

const DIFF_TABLES = [
  {
    id: 'DT-1', title: 'Simple vs Grievous vs Dangerous Hurt', shortTitle: 'Simple vs Grievous vs Dangerous',
    columns: ['Feature','Simple','Grievous','Dangerous'],
    rows: [
      ['Definition','Hurt NOT meeting any clause of BNS 116(2)','Meets ANY ONE of the 8 BNS 116(2) clauses','Sub-category of grievous; endangers life'],
      ['BNS section','BNS 115 (≡ IPC 321/323)','BNS 117 (≡ IPC 325)','BNS 116(2) clause 8(a)'],
      ['Punishment','Up to 1 year + fine','Up to 7 years + fine','Same as grievous (or BNS 117(4) for permanent disability)'],
      ['Examples','Minor abrasion, small bruise, superficial cut','Fracture, dislocation, &gt; 20-d disability, privation of vision','Penetrating chest, head injury with LOC, internal rupture'],
      ['Cognizable','No','Yes','Yes'],
      ['Bailable','Yes','No (per BNS schedule)','No'],
      ['Healing time','&lt; 20 days','&gt; 20 days OR permanent','Variable; survival risk']
    ],
    parentDiagrams: ['IM-02','IM-03'],
    mcqs: [
      { stem: 'A fracture of the proximal phalanx of little finger is graded as:', options: ['Simple hurt','Grievous hurt','Dangerous','Not graded'], answerIdx: 1, explain: 'Any fracture of any bone → grievous (clause 7 of BNS 116(2)). Size or significance of bone doesn\'t matter.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-2', title: 'Culpable Homicide vs Murder', shortTitle: 'CH vs Murder',
    columns: ['Feature','Culpable Homicide (BNS 100)','Murder (BNS 101)'],
    rows: [
      ['Mens rea','3 levels: intent of death OR intent of injury likely to cause death OR knowledge','4 elements: intent of death OR specific knowledge OR sufficient injury OR imminent danger'],
      ['Likelihood of death','Likely (probable)','Sufficient in ordinary course of nature OR imminent in all probability'],
      ['Section','BNS 100 (≡ IPC 299)','BNS 101 (≡ IPC 300)'],
      ['Punishment','Up to life (BNS 105)','Death OR life imprisonment + fine (BNS 103)'],
      ['Cardinal rule','All murders are culpable homicide; not all CH = murder','—'],
      ['5 exceptions','—','Reduce murder to CH not amounting to murder'],
      ['Examples','Single punch causing rupture of pre-existing aneurysm','Pre-meditated stabbing of vital organ']
    ],
    parentDiagrams: ['IM-04'],
    mcqs: [
      { stem: 'The CARDINAL legal rule distinguishing culpable homicide from murder is:', options: ['Method used','All murders are culpable homicide, but not all CH = murder','Number of stabs','Place of incident'], answerIdx: 1, explain: 'Cardinal rule of BNS 101 — every murder is CH but not every CH is murder. Murder requires higher mens rea.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-3', title: 'Culpability Ladder — 4 Levels', shortTitle: 'Culpability Ladder',
    columns: ['Level','Mental Element','Section','Punishment'],
    rows: [
      ['1. Accident','None (due care)','BNS 27','No liability'],
      ['2. Negligence','Rashness / carelessness','BNS 106','Up to 5 yrs (BNS 106(1)) · 10 yrs hit-run (BNS 106(2))'],
      ['3. Culpable Homicide','Intent of injury likely to cause death OR knowledge','BNS 100 · 105','Up to life'],
      ['4. Murder','Intent of death OR sufficient injury OR imminent danger','BNS 101 · 103','Death OR life + fine']
    ],
    parentDiagrams: ['IM-06'],
    mcqs: [
      { stem: 'A doctor accidentally cuts an artery during a surgery despite due care, leading to patient\'s death. The applicable category is:', options: ['Murder','Culpable homicide','Death by negligence','Accident — no criminal liability'], answerIdx: 3, explain: 'Lawful act + due care + accidental outcome = no criminal liability (BNS 27). Different from medical negligence (BNS 106), which requires gross negligence.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-4', title: 'BNS ↔ IPC Quick-Reference for Injury Sections', shortTitle: 'BNS ↔ IPC Map',
    columns: ['BNS','IPC','Offence'],
    rows: [
      ['BNS 2(14)','IPC 44','Injury (definition)'],
      ['BNS 114','IPC 319','Hurt (definition)'],
      ['BNS 115','IPC 321','Voluntarily causing hurt'],
      ['BNS 116','IPC 320','Grievous hurt (definition — 8 clauses)'],
      ['BNS 117','IPC 325','Voluntarily causing grievous hurt'],
      ['BNS 118','IPC 324 / 326','Hurt by dangerous weapon / means'],
      ['BNS 124','IPC 326A / B','Acid attack'],
      ['BNS 100','IPC 299','Culpable homicide'],
      ['BNS 101','IPC 300','Murder (definition)'],
      ['BNS 103','IPC 302','Punishment for murder + mob lynching (NEW)'],
      ['BNS 105','IPC 304','CH not amounting to murder (punishment)'],
      ['BNS 106','IPC 304A','Death by negligence'],
      ['BNS 108','IPC 306','Abetment of suicide'],
      ['BNS 109','IPC 307','Attempt to murder']
    ],
    parentDiagrams: ['IM-01','IM-04','IM-06'],
    mcqs: [
      { stem: 'Old IPC 307 (Attempt to murder) is now found at:', options: ['BNS 100','BNS 103','BNS 109','BNS 118'], answerIdx: 2, explain: 'BNS 109 = IPC 307 (attempt to murder). Life imprisonment if hurt is caused.', tag: '[PG-Inspired]' }
    ]
  }
];

const SUBJ = [
  {
    id: 'SAQ-13.1', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Define grievous hurt with examples for each clause and BNS sections. Mention any one new provision in BNS regarding causing death of a person illegally.',
    answer: `<h4>Definition of Grievous Hurt</h4>
<p><strong>Grievous hurt (BNS 116(2), ≡ IPC 320)</strong> = a hurt that meets ANY ONE of the 8 enumerated categories specified by statute. Voluntarily causing grievous hurt is punishable under <strong>BNS 117</strong> (≡ IPC 325) up to 7 years + fine.</p>
<h4>The 8 Clauses (BNS 116(2)) — with Examples</h4>
<table><tr><th>Clause</th><th>Definition</th><th>Example</th></tr>
<tr><td><strong>1.</strong></td><td>Emasculation</td><td>Castration / loss of reproductive organs (males)</td></tr>
<tr><td><strong>2.</strong></td><td>Permanent privation of sight of EITHER eye</td><td>Penetrating eye injury → blindness one eye</td></tr>
<tr><td><strong>3.</strong></td><td>Permanent privation of hearing of EITHER ear</td><td>Severe head injury → permanent deafness one ear</td></tr>
<tr><td><strong>4.</strong></td><td>Privation of any member (limb) or joint</td><td>Amputation; loss of finger / toe / ear pinna</td></tr>
<tr><td><strong>5.</strong></td><td>Permanent impairing of powers of any member or joint</td><td>Stroke from blow (hemiparesis); permanent joint stiffness</td></tr>
<tr><td><strong>6.</strong></td><td>Permanent disfiguration of head or face</td><td>Scar across face; loss of eyebrow; loss of incisor tooth</td></tr>
<tr><td><strong>7.</strong></td><td>Fracture or dislocation of any bone or tooth</td><td>Any fracture (even hairline); tooth loss</td></tr>
<tr><td><strong>8.</strong></td><td>(a) Hurt endangering life, OR<br>(b) Hurt causing &gt; 20 days inability to follow ordinary pursuits / severe bodily pain</td><td>Penetrating chest; head injury with LOC; multiple long-bone #</td></tr></table>
<h4>Mnemonic</h4>
<p><strong>"EVE Privates Disfigure Fracture 20-Days Dangerously"</strong></p>
<h4>BNS Sections Related to Grievous Hurt</h4>
<ul><li><strong>BNS 116</strong> — definition (8 clauses, was IPC 320)</li>
<li><strong>BNS 117</strong> — voluntarily causing grievous hurt — up to 7 yrs + fine (was IPC 325)</li>
<li><strong>BNS 117(4) ★ NEW:</strong> Grievous hurt resulting in PERMANENT DISABILITY or PERMANENT VEGETATIVE STATE — 10 yrs to life + fine</li>
<li><strong>BNS 118</strong> — grievous hurt by dangerous weapon — 10 yrs to life + fine (was IPC 326)</li>
<li><strong>BNS 124</strong> — acid attack (consolidates IPC 326A/B) — 10 yrs to life + fine to victim</li></ul>
<hr/>
<h4>NEW BNS Provision regarding "Causing Death Illegally"</h4>
<h5>★ BNS 103(2) — MOB LYNCHING (NEW in BNS 2023)</h5>
<p>"When a group of <strong>FIVE OR MORE PERSONS</strong> acting in concert COMMIT MURDER on the ground of race, caste or community, sex, place of birth, language, personal belief or any other similar ground, each member of such group shall be punished with death OR imprisonment for life, and shall also be liable to fine."</p>
<h5>Key features:</h5>
<ul><li>NEW section — has no direct IPC equivalent</li>
<li>Targets communal / identity-based lynching</li>
<li>Each member of the group is severally liable (joint culpability)</li>
<li>Same maximum punishment as ordinary murder under BNS 103(1)</li></ul>
<h5>Other NEW death-related provisions in BNS:</h5>
<ul><li><strong>BNS 106(2):</strong> Hit-and-run after RTA — up to 10 yrs (was not separately graded in IPC)</li>
<li><strong>BNS 124(1):</strong> Acid attack causing death — 10 yrs to life + fine</li>
<li><strong>BNS 117(4):</strong> Grievous hurt causing permanent disability / vegetative state — 10 yrs to life</li></ul>`,
    sources: ['IM-01 (Definitions)','IM-03 (8 Clauses)','IM-04 (Homicide)','DT-1','DT-4'],
    jumpToDiagram: 'IM-03'
  },
  {
    id: 'SAQ-13.2', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Grievous Hurt.',
    answer: `<h4>Definition</h4>
<p><strong>Grievous hurt</strong> (BNS 116(2), ≡ IPC 320) is a hurt designated as "grievous" by an enumerated list of 8 statutory categories. Meeting ANY ONE clause qualifies the injury as grievous, irrespective of severity in other respects.</p>
<h4>The 8 Clauses</h4>
<ol><li><strong>Emasculation</strong> — castration / loss of reproductive function (male)</li>
<li><strong>Permanent privation of sight of either eye</strong></li>
<li><strong>Permanent privation of hearing of either ear</strong></li>
<li><strong>Privation of any member (limb) or joint</strong> — amputation, loss of digit, ear pinna</li>
<li><strong>Permanent impairing of powers of any limb / joint / head / face</strong></li>
<li><strong>Permanent disfiguration of head or face</strong></li>
<li><strong>Fracture or dislocation of any bone or tooth</strong> ★ (any bone, even hairline)</li>
<li><strong>(a)</strong> Hurt endangering life OR <strong>(b)</strong> hurt causing &gt; 20 days inability to follow ordinary pursuits / severe bodily pain</li></ol>
<h4>Mnemonic</h4>
<p><strong>"EVE Privates Disfigure Fracture 20-Days Dangerously"</strong></p>
<h4>Statutory Punishment Sections</h4>
<ul><li>BNS 117 — voluntarily causing grievous hurt — up to 7 years + fine</li>
<li>BNS 117(4) — perm disability / vegetative state — 10 yrs to life</li>
<li>BNS 118 — by dangerous weapon — 10 yrs to life</li>
<li>BNS 124 — acid attack — 10 yrs to life + fine to victim</li></ul>
<h4>Key Concepts</h4>
<ul><li><strong>"Permanent"</strong> — many clauses (2, 3, 5, 6) require permanence. Temporary loss = simple hurt.</li>
<li><strong>"Either"</strong> — clauses 2, 3 — even one eye / one ear qualifies.</li>
<li><strong>"Any"</strong> — clauses 4, 7 — any limb / any bone / any tooth qualifies.</li>
<li><strong>20-day rule</strong> — refers to inability to follow ordinary pursuits (work, study, daily living), not hospital stay.</li></ul>
<h4>Medicolegal Reporting</h4>
<p>The doctor must specifically state in the MLC:</p>
<ul><li>"Injury is GRIEVOUS under clause [number] of BNS 116(2)"</li>
<li>The clinical basis (e.g., "fracture of right humerus confirmed on X-ray")</li>
<li>Permanence (where required) — supported by follow-up if needed</li>
<li>"Kept under observation" if doubt remains (esp. head injury)</li></ul>
<h4>Common Exam Traps</h4>
<ul><li>One tooth loss = grievous (clause 7)</li>
<li>One eye blindness = grievous (clause 2)</li>
<li>Hairline fracture = grievous (clause 7)</li>
<li>Mental anguish (without physical injury) = NOT grievous, NOT hurt</li>
<li>"Dangerous" hurt = sub-category of grievous (clause 8a)</li></ul>`,
    sources: ['IM-02 (Classification)','IM-03 (8 Clauses)','DT-1'],
    jumpToDiagram: 'IM-03'
  },
  {
    id: 'SAQ-13.3', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Homicide — define and describe types.',
    answer: `<h4>Definition</h4>
<p><strong>Homicide</strong> = the killing of one human being by another. (Suicide = self-killing, NOT homicide).</p>
<h4>Classification</h4>
<h5>A. LAWFUL HOMICIDE (no criminal liability)</h5>
<ol><li><strong>Self-defence</strong> — BNS 35-44 (right of private defence of body / property). Must meet conditions: imminent threat, proportionate force, no time to seek police aid.</li>
<li><strong>Judicial execution</strong> — pursuant to court order (death sentence)</li>
<li><strong>Lawful act of war</strong> — by legal combatant in declared armed conflict</li>
<li><strong>Accident in lawful act with due care</strong> — BNS 27</li></ol>
<h5>B. UNLAWFUL HOMICIDE</h5>
<ol><li><strong>Culpable Homicide</strong> — BNS 100 (≡ IPC 299)</li>
<li><strong>Murder</strong> — BNS 101 (≡ IPC 300)</li>
<li><strong>Death by negligence</strong> — BNS 106 (≡ IPC 304A)</li>
<li><strong>Dowry death</strong> — BNS 80 (≡ IPC 304B) — death of woman within 7 yrs of marriage from burns / bodily injury / unnatural cause + harassment for dowry</li>
<li><strong>Mob lynching</strong> — BNS 103(2) (NEW) — ≥ 5 persons on identity grounds</li>
<li><strong>Abetment of suicide</strong> — BNS 108 (≡ IPC 306)</li></ol>
<h4>Culpable Homicide vs Murder (★ Cardinal Distinction)</h4>
<h5>Culpable Homicide (BNS 100)</h5>
<p>Causing death by an act done with:</p>
<ul><li>(a) Intention of causing death, OR</li>
<li>(b) Intention of causing such bodily injury as is LIKELY to cause death, OR</li>
<li>(c) Knowledge that the act is likely to cause death</li></ul>
<h5>Murder (BNS 101)</h5>
<p>Culpable homicide IS murder if the act is done with:</p>
<ol><li>Intention of causing death</li>
<li>Intention of causing bodily injury KNOWN to be likely to cause death of THAT specific person</li>
<li>Intention of causing bodily injury SUFFICIENT in the ordinary course of nature to cause death</li>
<li>Knowledge that the act is so IMMINENTLY DANGEROUS that it must, in all probability, cause death</li></ol>
<h5>Cardinal rule:</h5>
<p>"All murders are culpable homicide; not all culpable homicide is murder."</p>
<h4>5 Exceptions — When CH is NOT Murder</h4>
<ol><li>Grave and sudden provocation (by deceased, loss of self-control)</li>
<li>Right of private defence exceeded in good faith</li>
<li>Public servant exceeding lawful power in good faith</li>
<li>Sudden fight (heat of passion, no premeditation, no undue advantage)</li>
<li>Death of person ≥ 18 with consent (euthanasia / suicide pact)</li></ol>
<h4>Punishment</h4>
<ul><li>Murder (BNS 103): Death OR life imprisonment + fine</li>
<li>Mob lynching (BNS 103(2)): Death OR life + fine</li>
<li>CH not amounting to murder (BNS 105): Up to life + fine</li>
<li>Death by negligence (BNS 106): Up to 5 yrs (10 yrs hit-and-run)</li>
<li>Dowry death (BNS 80): 7 yrs to life</li>
<li>Abetment of suicide (BNS 108): Up to 10 yrs + fine</li></ul>
<h4>Forensic Reconstruction</h4>
<p>The forensic doctor\'s role: determine the cause of death (medical) and provide opinion on:</p>
<ul><li>Was death due to injury or natural disease?</li>
<li>Was the injury sufficient in ordinary course of nature to cause death? (key for BNS 101 element 3)</li>
<li>Was there evidence of struggle / restraint / pre-existing disease?</li>
<li>Time of death, antemortem vs postmortem injuries</li></ul>`,
    sources: ['IM-04 (Homicide)','DT-2'],
    jumpToDiagram: 'IM-04'
  },
  {
    id: 'LAQ-13.1', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank',
    question: 'Define Injury &amp; Hurt. Classify injuries. What is grievous hurt? Include the BNS 116 / IPC 44 definition.',
    answer: `<h4>Part A — Definitions</h4>
<h5>Injury (BNS 2(14), ≡ IPC 44)</h5>
<p>"Any harm whatever illegally caused to any person, in body, mind, reputation, or property."</p>
<p>Broad — covers 4 categories of harm:</p>
<ul><li><strong>Body</strong> (physical) — most relevant to forensic medicine</li>
<li><strong>Mind</strong> (mental) — anxiety, fear, mental anguish</li>
<li><strong>Reputation</strong> — defamation, libel, slander</li>
<li><strong>Property</strong> — damage to belongings</li></ul>
<h5>Hurt (BNS 114, ≡ IPC 319)</h5>
<p>"Whoever causes <strong>bodily pain</strong>, <strong>disease</strong>, or <strong>infirmity</strong> to any other person is said to cause hurt."</p>
<p>3 elements (any one suffices):</p>
<ul><li><strong>Bodily pain</strong> — even transient pain (e.g., slap)</li>
<li><strong>Disease</strong> — infectious or otherwise transmitted</li>
<li><strong>Infirmity</strong> — temporary or permanent impairment of bodily function</li></ul>
<p><strong>★ Mental anguish alone is NOT hurt.</strong> It may come under "injury" but not "hurt".</p>
<h4>Part B — Classification of Injuries</h4>
<h5>1. By Causing Force / Mechanism (forensic types):</h5>
<ul><li><strong>Mechanical:</strong> Blunt (abrasion, contusion, laceration) · Sharp (incised, stab, chop) · Firearm/blast (Ch 9, 10)</li>
<li><strong>Thermal:</strong> Burns, scalds, frostbite (Ch 14)</li>
<li><strong>Electrical:</strong> Electric shock, lightning (Ch 14)</li>
<li><strong>Chemical:</strong> Corrosive (acid / alkali) (Ch 34)</li>
<li><strong>Radiation:</strong> X-ray, UV, nuclear</li>
<li><strong>Pressure:</strong> Barotrauma (caisson, blast lung)</li></ul>
<h5>2. By Severity (medicolegal grading):</h5>
<table><tr><th>Grade</th><th>Definition</th><th>Section</th><th>Punishment</th></tr>
<tr><td><strong>Simple</strong></td><td>Not meeting any grievous criterion</td><td>BNS 115 (≡ IPC 321)</td><td>Up to 1 yr + fine</td></tr>
<tr><td><strong>Grievous</strong></td><td>Meets any one of 8 BNS 116(2) clauses</td><td>BNS 117 (≡ IPC 325)</td><td>Up to 7 yrs + fine</td></tr>
<tr><td><strong>By dangerous weapon</strong></td><td>Caused by knife, firearm, fire, poison, acid</td><td>BNS 118 (≡ IPC 324/326)</td><td>Up to 3 yrs (simple) · 10 yrs-life (grievous)</td></tr>
<tr><td><strong>Dangerous (endangers life)</strong></td><td>Sub-category of grievous, clause 8(a)</td><td>BNS 116(2)(8)</td><td>Same as grievous</td></tr></table>
<h5>3. By Manner (intent):</h5>
<ul><li>Suicidal</li>
<li>Homicidal</li>
<li>Accidental</li>
<li>Undetermined</li></ul>
<h5>4. By Time (vital reaction):</h5>
<ul><li>Antemortem</li>
<li>Perimortem</li>
<li>Postmortem</li></ul>
<h4>Part C — Grievous Hurt (Detailed)</h4>
<h5>Definition</h5>
<p>Grievous hurt (BNS 116(2), ≡ IPC 320) = hurt designated as grievous by 8 enumerated categories. Meeting ANY ONE clause qualifies.</p>
<h5>The 8 Clauses</h5>
<ol><li><strong>Emasculation</strong> — male castration / loss of reproductive function</li>
<li><strong>Permanent privation of sight</strong> of either eye</li>
<li><strong>Permanent privation of hearing</strong> of either ear</li>
<li><strong>Privation of any limb or joint</strong> — amputation, loss of digit, pinna</li>
<li><strong>Permanent impairing of powers</strong> of any limb or joint or head/face</li>
<li><strong>Permanent disfiguration of head or face</strong></li>
<li><strong>Fracture or dislocation of any bone or tooth</strong> (★ even hairline)</li>
<li><strong>(a) Hurt endangering life, OR (b) hurt causing &gt; 20 days inability</strong> to follow ordinary pursuits / severe bodily pain</li></ol>
<h5>Mnemonic</h5>
<p><strong>"EVE Privates Disfigure Fracture 20-Days Dangerously"</strong></p>
<h5>Related BNS Sections</h5>
<ul><li>BNS 117 — voluntary grievous hurt — up to 7 yrs + fine</li>
<li>BNS 117(4) ★ NEW — perm disability / vegetative — 10 yrs-life</li>
<li>BNS 118 — by dangerous weapon — up to 3 yrs (simple) / 10 yrs-life (grievous)</li>
<li>BNS 124 — acid attack — 10 yrs-life + fine to victim</li></ul>
<h5>Medicolegal Reporting</h5>
<p>For each injury document: site, dimensions, shape, margins, depth, direction, probable weapon, age of injury, vital reaction, and GRADE. State: "Injury is grievous under BNS 116(2) clause [number]" with clinical basis.</p>
<h5>When in doubt</h5>
<p>Declare "kept under observation" — re-examine in 24-48 hours; pending X-ray, CT. Premature commitment is the commonest pitfall (esp. head injury, internal injury).</p>
<h5>BNS 2023 Key Changes</h5>
<ul><li>Replaced IPC 1860 on 1 July 2024</li>
<li>BNS 124 — acid attack consolidated from IPC 326A/B</li>
<li>BNS 117(4) — permanent disability / vegetative state graded separately</li>
<li>BNS 103(2) — mob lynching (NEW) — death/life for ≥ 5 persons on identity grounds</li>
<li>BNS 106(2) — hit-and-run after RTA — up to 10 yrs (NEW)</li></ul>`,
    sources: ['IM-01 (Definitions)','IM-02 (Classification)','IM-03 (8 Clauses)','DT-1','DT-4'],
    jumpToDiagram: 'IM-01'
  }
];

return {
  chapterNumber: 13,
  chapterTitle: 'Injury — Medicolegal Considerations',
  prereqs: [
    { term: 'Injury (BNS 2(14))', meaning: 'Any harm illegally caused in body, mind, reputation, or property. Broad legal definition (≡ IPC 44).' },
    { term: 'Hurt (BNS 114)', meaning: 'Bodily pain, disease, or infirmity caused to any person (≡ IPC 319).' },
    { term: 'Grievous hurt (BNS 116(2))', meaning: 'Hurt meeting any of 8 enumerated clauses; punishable under BNS 117 up to 7 years.' },
    { term: 'Simple hurt', meaning: 'Hurt NOT meeting any grievous criterion; BNS 115, up to 1 year + fine.' },
    { term: 'Dangerous hurt', meaning: 'Sub-category of grievous (clause 8a) — endangers life; surgeon\'s opinion needed.' },
    { term: 'Dangerous weapon', meaning: 'Knife, firearm, fire, poison, acid, explosive, corrosive substance; BNS 118 escalates punishment.' },
    { term: 'Culpable homicide (BNS 100)', meaning: 'Causing death with intent of death OR intent of injury LIKELY to cause death OR knowledge.' },
    { term: 'Murder (BNS 101)', meaning: 'Culpable homicide with intent of death OR injury sufficient in ordinary course of nature OR imminent danger.' },
    { term: 'Death by negligence (BNS 106)', meaning: 'Rash or negligent act causing death, NOT culpable homicide; up to 5 yrs (10 yrs hit-and-run).' },
    { term: 'Acid attack (BNS 124)', meaning: 'Throwing/administering corrosive substance; 10 yrs to life + fine to victim. NEW from IPC 326A/B.' },
    { term: 'Mob lynching (BNS 103(2))', meaning: 'NEW BNS provision — ≥ 5 persons murder on identity grounds — death/life.' },
    { term: 'Permanent disability (BNS 117(4))', meaning: 'NEW BNS — grievous hurt resulting in permanent disability / vegetative state — 10 yrs-life.' },
    { term: 'Mens rea', meaning: 'Guilty mental state — escalates Accident → Negligence → CH → Murder.' },
    { term: 'Abetment of suicide (BNS 108)', meaning: 'Abetting suicide — up to 10 yrs + fine (≡ IPC 306).' },
    { term: 'MHCA 2017 § 115', meaning: 'Mental Healthcare Act — decriminalises attempted suicide (presumed severe stress).' },
    { term: 'Jacob Mathew vs State (2005)', meaning: 'Supreme Court — medical negligence threshold = gross/criminal; expert opinion mandatory before chargesheet.' },
    { term: 'BNSS 2023', meaning: 'Bharatiya Nagarik Suraksha Sanhita — procedural code (≡ CrPC); from 1 July 2024.' }
  ],
  diagrams: [
    { id: 'IM-01', title: 'Injury &amp; Hurt — Statutory Definitions', shortTitle: 'Injury &amp; Hurt Defs', svg: SVG_IM01,
      prereqs: [{term:'BNS 2023',meaning:'Bharatiya Nyaya Sanhita; replaced IPC 1860 on 1 July 2024.'},{term:'Injury vs Hurt',meaning:'Injury (BNS 2(14)) is broader; hurt (BNS 114) is physical only.'},{term:'BNS 116',meaning:'Grievous hurt — 8 enumerated clauses.'}],
      nodes: nodeList(['im-injury-def','im-hurt-def','im-grievous-def','im-bns-2023','im-key-sections']),
      mcqs: MCQS['IM-01']
    },
    { id: 'IM-02', title: 'Classification of Injuries (Simple · Grievous · Dangerous)', shortTitle: 'Simple/Grievous/Dangerous', svg: SVG_IM02,
      prereqs: [{term:'Simple hurt',meaning:'Not meeting grievous criteria; BNS 115.'},{term:'Grievous hurt',meaning:'Any of 8 BNS 116(2) clauses.'},{term:'Dangerous hurt',meaning:'Endangers life — clause 8a.'},{term:'Dangerous weapon',meaning:'BNS 118 — knife, firearm, fire, poison, acid, explosive.'}],
      nodes: nodeList(['im-classification','im-simple','im-grievous','im-dangerous','im-dangerous-weapon']),
      mcqs: MCQS['IM-02']
    },
    { id: 'IM-03', title: 'Grievous Hurt — 8 Clauses (BNS 116(2))', shortTitle: '8 Grievous Clauses', svg: SVG_IM03,
      prereqs: [{term:'Mnemonic',meaning:'"EVE Privates Disfigure Fracture 20-Days Dangerously".'},{term:'Permanent',meaning:'Clauses 2, 3, 5, 6 require permanence.'},{term:'Either/Any',meaning:'Clauses 2-3 (either eye/ear); clauses 4, 7 (any limb/bone/tooth).'},{term:'BNS 124',meaning:'Acid attack — NEW (consolidates IPC 326A/B).'}],
      nodes: nodeList(['gh-mnemonic','gh-c1','gh-c2','gh-c3','gh-c4','gh-c5','gh-c6','gh-c7','gh-c8','gh-bns-acid','gh-bns-disability']),
      mcqs: MCQS['IM-03']
    },
    { id: 'IM-04', title: 'Homicide — Culpable vs Murder', shortTitle: 'CH vs Murder', svg: SVG_IM04,
      prereqs: [{term:'Mens rea',meaning:'Guilty mind — varies from accident to murder.'},{term:'Culpable homicide',meaning:'BNS 100 — 3 levels of intent.'},{term:'Murder',meaning:'BNS 101 — 4 elements; punishable by death or life (BNS 103).'},{term:'5 exceptions',meaning:'BNS 101 exceptions reduce murder to CH not amounting to murder.'},{term:'Mob lynching',meaning:'BNS 103(2) — NEW; ≥ 5 persons on identity grounds.'}],
      nodes: nodeList(['hom-def','hom-types','hom-culpable','hom-murder','hom-exceptions','hom-mob']),
      mcqs: MCQS['IM-04']
    },
    { id: 'IM-05', title: 'MLC Reporting of Injury', shortTitle: 'MLC Reporting', svg: SVG_IM05,
      prereqs: [{term:'MLC',meaning:'Medicolegal case — formal documentation for police/court.'},{term:'10-point report',meaning:'Site · dimensions · shape · margins · floor · adjacent · direction · weapon · age · grade.'},{term:'Under observation',meaning:'Legal phrase when grade is uncertain; re-examine 24-48 h.'}],
      nodes: nodeList(['mlc-purpose','mlc-points','mlc-age','mlc-pitfalls','mlc-observation']),
      mcqs: MCQS['IM-05']
    },
    { id: 'IM-06', title: 'Negligence · BNS 106 · Acid · BNSS', shortTitle: 'Negligence / Acid / BNSS', svg: SVG_IM06,
      prereqs: [{term:'BNS 106',meaning:'Death by rash/negligent act NOT amounting to CH — up to 5 yrs.'},{term:'Jacob Mathew (2005)',meaning:'Supreme Court — medical negligence threshold is gross/criminal; expert opinion mandatory.'},{term:'BNS 124',meaning:'Acid attack — 10 yrs-life + fine.'},{term:'BNSS 174/176',meaning:'Police/magistrate inquest in unnatural death.'}],
      nodes: nodeList(['bns106','negligence-medical','culpability-ladder','bns124-acid','bnss-summary']),
      mcqs: MCQS['IM-06']
    },
    { id: 'IM-07', title: 'Suicide · Abetment · MHCA 2017', shortTitle: 'Suicide &amp; Abetment', svg: SVG_IM07,
      prereqs: [{term:'MHCA 2017 § 115',meaning:'Decriminalises attempted suicide — presumed severe stress.'},{term:'BNS 108',meaning:'Abetment of suicide — up to 10 yrs + fine.'},{term:'Dowry death (BNS 80)',meaning:'Death of woman within 7 yrs of marriage from injury + harassment.'}],
      nodes: nodeList(['suicide-def','suicide-309','suicide-abet','suicide-rate','suicide-pyq','suicide-doc']),
      mcqs: MCQS['IM-07']
    }
  ],
  diffTables: DIFF_TABLES,
  subjectiveQs: SUBJ,
  highYield: [
    '<strong>BNS 2023</strong> replaced IPC 1860 on <strong>1 July 2024</strong> · BNSS replaced CrPC · BSA replaced IEA',
    'Injury (BNS 2(14)) = harm in body/mind/reputation/property · Hurt (BNS 114) = bodily pain/disease/infirmity',
    '<strong>Grievous hurt (BNS 116(2))</strong> = ANY of 8 enumerated clauses',
    'Mnemonic: <strong>"EVE Privates Disfigure Fracture 20-Days Dangerously"</strong>',
    'Clause 7 — any FRACTURE OR DISLOCATION of bone/tooth (even ONE tooth) = grievous',
    'Clauses 2, 3 — privation of EITHER eye/ear is grievous (not both required)',
    'Clause 8: (a) endangers life OR (b) &gt; 20 days disability',
    'Voluntary simple hurt = BNS 115 (≤ 1 yr) · Voluntary grievous = BNS 117 (≤ 7 yrs)',
    '<strong>BNS 118</strong> = hurt by DANGEROUS WEAPON — knife, firearm, fire, poison, acid, explosive · ≤ 3 yrs simple / 10 yrs-life grievous',
    '<strong>BNS 124 (NEW)</strong> = ACID attack — 10 yrs to life + fine to victim',
    '<strong>BNS 117(4) (NEW)</strong> = perm disability / vegetative state from grievous — 10 yrs-life',
    'Culpable homicide (BNS 100) — intent of death OR intent of injury likely to cause death OR knowledge',
    'Murder (BNS 101) — intent of death OR sufficient injury in ordinary course OR imminent danger',
    '<strong>"All murders are CH; not all CH = murder"</strong>',
    'Punishment for MURDER (BNS 103) = death OR life imprisonment + fine',
    '<strong>BNS 103(2) NEW — Mob lynching</strong> — ≥ 5 persons murder on identity grounds — death/life',
    '5 exceptions reduce murder to CH not amounting to murder (BNS 105) — up to life',
    '<strong>Death by negligence (BNS 106)</strong> — ≤ 5 yrs (≤ 10 yrs for hit-and-run BNS 106(2))',
    'Medical negligence: Jacob Mathew (2005) — gross/criminal threshold, expert opinion mandatory',
    'Mens rea ladder: Accident (BNS 27) → Negligence (BNS 106) → CH (BNS 100) → Murder (BNS 101)',
    '<strong>NEET-PG 2016 Q7</strong> — Use of dangerous weapon = IPC 324 (now BNS 118)',
    '<strong>NEET-PG 2016 Q8</strong> — Grievous hurt = IPC 320 (now BNS 116)',
    'MLC injury report = 10 points: site/dimensions/shape/margins/floor/adjacent/direction/weapon/age/grade',
    'When in doubt → "kept under observation" — re-examine 24-48 h (esp. head injury)',
    'Attempted suicide DECRIMINALISED by <strong>MHCA 2017 § 115</strong> (presumed severe stress)',
    '<strong>Abetment of suicide</strong> = BNS 108 (≡ IPC 306) — ≤ 10 yrs + fine',
    'India suicide rate ≈ 10.5/100,000 <strong>[NEET-PG 2016 Q51]</strong> · top risk factor = drug abuse <strong>[Q50]</strong>',
    'Dowry death (BNS 80) — woman dies within 7 yrs of marriage from injury + harassment',
    'BNSS 174 = police inquest · BNSS 176 = magistrate inquest (dowry, custody)',
    'See subject-pinned <strong>IPC ↔ BNS Quick-Reference Card</strong> for complete mapping'
  ]
};
})();
