/* ===================================================================
   Medascend FMT — Chapter 1: Legal Procedure
   Viewer data file (read by /assets/viewer.js)
   =================================================================== */

window.chapterData = (function () {

/* -- shared SVG style block — reused inside every diagram via inline injection ----- */
const STYLE = `<defs>
  <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
    <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="#0F1729" flood-opacity="0.12"/>
  </filter>
  <filter id="cardShadowSoft" x="-10%" y="-10%" width="120%" height="120%">
    <feDropShadow dx="0" dy="1" stdDeviation="3" flood-color="#0F1729" flood-opacity="0.08"/>
  </filter>
  <filter id="iconGlow" x="-50%" y="-50%" width="200%" height="200%">
    <feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-color="#15294F" flood-opacity="0.30"/>
  </filter>
  <!-- Sophisticated palette: deep navy / forest / amber / burgundy / plum / graphite -->
  <linearGradient id="gBlue" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#2D4B82"/><stop offset="100%" stop-color="#15294F"/>
  </linearGradient>
  <linearGradient id="gGreen" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#3D8B5B"/><stop offset="100%" stop-color="#1F5A3D"/>
  </linearGradient>
  <linearGradient id="gRed" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#A14B47"/><stop offset="100%" stop-color="#6E2E2A"/>
  </linearGradient>
  <linearGradient id="gOrange" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#C58A3D"/><stop offset="100%" stop-color="#8E5E1F"/>
  </linearGradient>
  <linearGradient id="gPurple" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#6B4F8E"/><stop offset="100%" stop-color="#4A3667"/>
  </linearGradient>
  <linearGradient id="gGrey" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#4A4D55"/><stop offset="100%" stop-color="#2C2F36"/>
  </linearGradient>
  <linearGradient id="gCream" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#FCF8EC"/><stop offset="100%" stop-color="#F0E5C0"/>
  </linearGradient>
  <linearGradient id="gBodyLight" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#FBFAF6"/>
  </linearGradient>
</defs>
<style>
  .t-title{font-family:'Inter',system-ui,sans-serif;font-size:30px;font-weight:800;fill:#15294F;letter-spacing:-0.5px}
  .t-sub{font-family:'Inter',system-ui,sans-serif;font-size:14.5px;font-weight:500;fill:#6B7283}
  .t-hdr{font-family:'Inter',system-ui,sans-serif;font-size:17px;font-weight:700;fill:#fff;letter-spacing:0.2px}
  .t-node{font-family:'Inter',system-ui,sans-serif;font-size:15px;font-weight:600;fill:#fff;letter-spacing:-0.1px}
  .t-nlg{font-family:'Inter',system-ui,sans-serif;font-size:20px;font-weight:800;fill:#fff;letter-spacing:-0.3px}
  .t-body{font-family:'Inter',system-ui,sans-serif;font-size:13px;font-weight:500;fill:#fff}
  .t-bodyd{font-family:'Inter',system-ui,sans-serif;font-size:13.5px;font-weight:500;fill:#1A1D26}
  .t-bodydark{font-family:'Inter',system-ui,sans-serif;font-size:13px;font-weight:500;fill:#2D3748}
  .t-keylbl{font-family:'Inter',system-ui,sans-serif;font-size:12.5px;font-weight:700;fill:#15294F}
  .t-keyval{font-family:'Inter',system-ui,sans-serif;font-size:13px;font-weight:500;fill:#1A1D26}
  .t-cap{font-family:'Inter',system-ui,sans-serif;font-size:11.5px;font-weight:500;fill:#D5DDEE}
  .t-capd{font-family:'Inter',system-ui,sans-serif;font-size:11.5px;font-weight:500;fill:#6B7283}
  .t-info{font-family:'Inter',system-ui,sans-serif;font-size:13px;font-weight:800;fill:#15294F}
  .t-pill{font-family:'Inter',system-ui,sans-serif;font-size:11px;font-weight:700;fill:#fff;letter-spacing:0.2px}
  .nb{fill:url(#gBlue);filter:url(#cardShadow)}
  .nbg{fill:url(#gGreen);filter:url(#cardShadow)}
  .nbr{fill:url(#gRed);filter:url(#cardShadow)}
  .nbo{fill:url(#gOrange);filter:url(#cardShadow)}
  .nbp{fill:url(#gPurple);filter:url(#cardShadow)}
  .nbgr{fill:url(#gGrey);filter:url(#cardShadow)}
  .nbcr{fill:url(#gCream);stroke:#D6C480;stroke-width:1.5;filter:url(#cardShadow)}
  .body-white{fill:url(#gBodyLight);stroke:#E5E7EE;stroke-width:1;filter:url(#cardShadowSoft)}
  .conn{stroke:#A8AEBC;stroke-width:2.5;fill:none;stroke-linecap:round}
  .ic{fill:#fff;stroke:#15294F;stroke-width:2;filter:url(#iconGlow)}
</style>`;

/* ================================================================
   DIAGRAM 1 — LP-01 — Court Hierarchy
   ================================================================ */
const SVG_LP01 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<!-- Title block -->
<text class="t-title" x="800" y="56" text-anchor="middle" font-size="32">Criminal Courts in India — Hierarchy &amp; Powers</text>
<text class="t-sub" x="800" y="88" text-anchor="middle" font-size="15">Top to bottom: jurisdiction descends · lower courts are bound by the rulings of higher ones</text>

<!-- ========== LEFT COLUMN: 4 hierarchical cards ========== -->

<!-- Card 1: Supreme Court (deep blue) -->
<g data-node-id="supreme-court">
  <rect x="60" y="130" width="860" height="120" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/>
  <text x="90" y="184" font-family="Inter,system-ui,sans-serif" font-size="28" font-weight="800" fill="white" letter-spacing="-0.3px">1. SUPREME COURT</text>
  <text x="90" y="222" font-family="Inter,system-ui,sans-serif" font-size="14.5" font-weight="500" fill="rgba(255,255,255,0.92)">📍 New Delhi  ·  Highest judicial tribunal  ·  Appellate-only in criminal cases</text>
  <circle class="ic" cx="880" cy="160" r="14"/>
  <text class="t-info" x="880" y="166" text-anchor="middle" font-size="14">ⓘ</text>
</g>

<!-- Arrow 1 -->
<path d="M 490 250 L 490 285" stroke="#9AA0AE" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<path d="M 477 275 L 490 290 L 503 275" stroke="#9AA0AE" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

<!-- Card 2: High Court (green) -->
<g data-node-id="high-court">
  <rect x="60" y="300" width="860" height="120" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/>
  <text x="90" y="354" font-family="Inter,system-ui,sans-serif" font-size="28" font-weight="800" fill="white" letter-spacing="-0.3px">2. HIGH COURT</text>
  <text x="90" y="392" font-family="Inter,system-ui,sans-serif" font-size="14.5" font-weight="500" fill="rgba(255,255,255,0.92)">📍 State capital  ·  Highest court of the State  ·  Confirms death sentences passed by Sessions</text>
  <circle class="ic" cx="880" cy="330" r="14"/>
  <text class="t-info" x="880" y="336" text-anchor="middle" font-size="14">ⓘ</text>
</g>

<!-- Arrow 2 -->
<path d="M 490 420 L 490 455" stroke="#9AA0AE" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<path d="M 477 445 L 490 460 L 503 445" stroke="#9AA0AE" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

<!-- Card 3: Sessions Court (orange, taller — has subdivisions) -->
<g data-node-id="sessions-court">
  <rect x="60" y="470" width="860" height="180" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/>
  <text x="90" y="524" font-family="Inter,system-ui,sans-serif" font-size="28" font-weight="800" fill="white" letter-spacing="-0.3px">3. SESSIONS COURT</text>
  <text x="90" y="558" font-family="Inter,system-ui,sans-serif" font-size="14.5" font-weight="500" fill="rgba(255,255,255,0.92)">📍 District HQ</text>
  <text x="90" y="586" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.95)">• Principal &amp; Additional Sessions Judges → <tspan font-weight="700">any punishment in law</tspan>*</text>
  <text x="90" y="610" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.95)">• Assistant Sessions Judge → ≤ 10 yrs + unlimited fine</text>
  <text x="90" y="636" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="500" fill="rgba(255,255,255,0.78)" font-style="italic">*Death sentence must be confirmed by High Court</text>
  <circle class="ic" cx="880" cy="500" r="14"/>
  <text class="t-info" x="880" y="506" text-anchor="middle" font-size="14">ⓘ</text>
</g>

<!-- Arrow 3 -->
<path d="M 490 650 L 490 685" stroke="#9AA0AE" stroke-width="3.5" fill="none" stroke-linecap="round"/>
<path d="M 477 675 L 490 690 L 503 675" stroke="#9AA0AE" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

<!-- Card 4: Magistrate Court (red, taller — has 3 subdivisions) -->
<g data-node-id="magistrate-court">
  <rect x="60" y="700" width="860" height="200" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/>
  <text x="90" y="754" font-family="Inter,system-ui,sans-serif" font-size="28" font-weight="800" fill="white" letter-spacing="-0.3px">4. MAGISTRATE COURT</text>
  <text x="90" y="794" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.95)">• CJM / Chief Metropolitan Magistrate → ≤ 7 yrs + unlimited fine</text>
  <text x="90" y="822" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.95)">• JMFC / Metropolitan Magistrate → ≤ 3 yrs + ₹10,000 fine</text>
  <text x="90" y="850" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.95)">• II Class Judicial Magistrate → ≤ 1 yr + ₹5,000 fine</text>
  <circle class="ic" cx="880" cy="730" r="14"/>
  <text class="t-info" x="880" y="736" text-anchor="middle" font-size="14">ⓘ</text>
</g>

<!-- ========== RIGHT COLUMN: Powers comparison table ========== -->
<text x="960" y="184" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="#15294F" letter-spacing="-0.3px">Powers of Criminal Courts</text>
<text x="960" y="208" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="500" fill="#6B7283" font-style="italic">Sentencing limits under BNSS 2023</text>

<g data-node-id="powers-table">
  <!-- Header row -->
  <rect x="960" y="225" width="600" height="48" rx="8" fill="#3F424A"/>
  <rect x="960" y="245" width="600" height="28" fill="#3F424A"/>
  <text x="985" y="256" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white">Court</text>
  <text x="1220" y="256" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white">Imprisonment</text>
  <text x="1440" y="256" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white">Fine</text>

  <!-- Row 1: Supreme Court -->
  <rect x="960" y="273" width="600" height="50" fill="#FFFFFF" stroke="#E5E7EE" stroke-width="1"/>
  <text x="985" y="303" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="#1A1D26">Supreme Court</text>
  <text x="1220" y="303" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">Any in law</text>
  <text x="1440" y="303" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">Any in law</text>

  <!-- Row 2: High Court -->
  <rect x="960" y="323" width="600" height="50" fill="#FAFBFD" stroke="#E5E7EE" stroke-width="1"/>
  <text x="985" y="353" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="#1A1D26">High Court</text>
  <text x="1220" y="353" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">Any in law</text>
  <text x="1440" y="353" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">Any in law</text>

  <!-- Row 3: Sessions / Add'l Sessions -->
  <rect x="960" y="373" width="600" height="50" fill="#FFFFFF" stroke="#E5E7EE" stroke-width="1"/>
  <text x="985" y="403" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="#1A1D26">Sessions / Add'l Sessions Judge</text>
  <text x="1220" y="403" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">Any in law*</text>
  <text x="1440" y="403" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">Any in law</text>

  <!-- Row 4: Asst Sessions -->
  <rect x="960" y="423" width="600" height="50" fill="#FAFBFD" stroke="#E5E7EE" stroke-width="1"/>
  <text x="985" y="453" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="#1A1D26">Assistant Sessions Judge</text>
  <text x="1220" y="453" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">Up to 10 yrs</text>
  <text x="1440" y="453" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">Unlimited</text>

  <!-- Row 5: CJM -->
  <rect x="960" y="473" width="600" height="50" fill="#FFFFFF" stroke="#E5E7EE" stroke-width="1"/>
  <text x="985" y="503" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="#1A1D26">CJM / Chief Metropolitan Magistrate</text>
  <text x="1220" y="503" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">Up to 7 yrs</text>
  <text x="1440" y="503" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">Unlimited</text>

  <!-- Row 6: JMFC -->
  <rect x="960" y="523" width="600" height="50" fill="#FAFBFD" stroke="#E5E7EE" stroke-width="1"/>
  <text x="985" y="553" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="#1A1D26">JMFC / Metropolitan Magistrate</text>
  <text x="1220" y="553" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">Up to 3 yrs</text>
  <text x="1440" y="553" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">₹10,000</text>

  <!-- Row 7: II Class -->
  <rect x="960" y="573" width="600" height="50" fill="#FFFFFF" stroke="#E5E7EE" stroke-width="1"/>
  <text x="985" y="603" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="#1A1D26">II Class Judicial Magistrate</text>
  <text x="1220" y="603" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">Up to 1 yr</text>
  <text x="1440" y="603" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">₹5,000</text>

  <!-- Outer border (decorative) -->
  <rect x="960" y="225" width="600" height="398" rx="8" fill="none" stroke="#D5D9E2" stroke-width="1.5"/>

  <!-- click hotspot on header -->
  <circle class="ic" cx="1530" cy="249" r="14"/>
  <text class="t-info" x="1530" y="255" text-anchor="middle" font-size="14">ⓘ</text>
</g>

<!-- Footnote -->
<text x="960" y="654" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="#6B7283" font-style="italic">*Death sentence by Sessions Court must be confirmed by High Court before execution.</text>

<!-- Civil courts mini-bar (bottom right) -->
<g data-node-id="civil-courts-note">
  <rect x="960" y="700" width="600" height="200" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/>
  <text x="990" y="744" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">⚖️ CIVIL SIDE (parallel hierarchy)</text>
  <text x="990" y="780" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="500" fill="rgba(255,255,255,0.92)">📍 Supreme Court  →  High Court (civil)  →  District Court</text>
  <text x="990" y="810" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.85)">• Plaintiff vs Defendant · awards decree, compensation, injunction</text>
  <text x="990" y="836" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.85)">• Burden of proof: preponderance of probability</text>
  <text x="990" y="862" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.85)">• Conduct money paid to witnesses IN ADVANCE</text>
  <text x="990" y="888" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="500" fill="rgba(255,255,255,0.72)" font-style="italic">Medical-negligence damages claims are filed on the civil side.</text>
  <circle class="ic" cx="1520" cy="730" r="14"/>
  <text class="t-info" x="1520" y="736" text-anchor="middle" font-size="14">ⓘ</text>
</g>
</svg>`;

/* ================================================================
   DIAGRAM 2 — LP-02 — Inquest Types (2×2 + central banner)
   ================================================================ */
const SVG_LP02 = `<svg viewBox="0 0 1600 1200" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Types of Inquest</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Legal inquiry to ascertain cause of death — only Police &amp; Magistrate inquests are practised in India</text>

<g data-node-id="inquest-definition">
  <rect class="nbcr" x="60" y="120" width="1480" height="80" rx="14"/>
  <text x="90" y="155" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🎯 INQUEST</text>
  <text x="90" y="184" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= legal inquiry conducted to ascertain the cause and circumstances of a sudden, suspicious, or unnatural death.</text>
  <circle class="ic" cx="1500" cy="140" r="14"/>
  <text class="t-info" x="1500" y="146" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="police-inquest">
  <rect class="body-white" x="60" y="230" width="740" height="420" rx="14"/>
  <path d="M 74,230 H 786 A 14,14 0 0 1 800,244 V 290 H 60 V 244 A 14,14 0 0 1 74,230 Z" fill="url(#gBlue)"/>
  <text x="90" y="270" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🚓 Police Inquest</text>
  <text x="90" y="324" class="t-keylbl">📜 Legal basis:</text>
  <text x="260" y="324" class="t-keyval">§174 CrPC → §194 BNSS 2023</text>
  <text x="90" y="358" class="t-keylbl">👮 Conducted by:</text>
  <text x="260" y="358" class="t-keyval">Investigating Officer (≥ Sub-Inspector)</text>
  <text x="90" y="392" class="t-keylbl">📋 Report:</text>
  <text x="260" y="392" class="t-keyval">Panchnama — signed by IO + 2 Panchas</text>
  <text x="90" y="426" class="t-keylbl">🎯 Used in:</text>
  <text x="260" y="426" class="t-keyval">RTA · found bodies · sudden / unnatural</text>
  <text x="90" y="460" class="t-keylbl">📊 Frequency:</text>
  <text x="260" y="460" class="t-keyval">Most common inquest type in India</text>
  <rect fill="url(#gGreen)" x="90" y="580" width="240" height="38" rx="19"/>
  <text x="210" y="605" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="700" fill="white" text-anchor="middle">✅ PRACTISED IN INDIA</text>
  <circle class="ic" cx="770" cy="248" r="14"/>
  <text class="t-info" x="770" y="254" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="magistrate-inquest">
  <rect class="body-white" x="820" y="230" width="720" height="420" rx="14"/>
  <path d="M 834,230 H 1526 A 14,14 0 0 1 1540,244 V 290 H 820 V 244 A 14,14 0 0 1 834,230 Z" fill="url(#gGreen)"/>
  <text x="850" y="270" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">⚖️ Magistrate Inquest</text>
  <text x="850" y="324" class="t-keylbl">📜 Legal basis:</text>
  <text x="1010" y="324" class="t-keyval">§176 CrPC → §196 BNSS 2023</text>
  <text x="850" y="358" class="t-keylbl">👨‍⚖️ Conducted by:</text>
  <text x="1010" y="358" class="t-keyval">Executive Magistrate</text>
  <text x="850" y="392" class="t-keylbl">⚡ Mandatory in:</text>
  <text x="870" y="416" class="t-keyval">• Death in police custody</text>
  <text x="870" y="438" class="t-keyval">• Dowry death (within 7 yrs of marriage)</text>
  <text x="870" y="460" class="t-keyval">• Exhumation cases</text>
  <text x="870" y="482" class="t-keyval">• Death in psychiatric hospital</text>
  <text x="850" y="516" class="t-keylbl">⭐ Status:</text>
  <text x="1010" y="516" class="t-keyval">Higher evidentiary weight (judicial)</text>
  <rect fill="url(#gGreen)" x="860" y="580" width="240" height="38" rx="19"/>
  <text x="980" y="605" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="700" fill="white" text-anchor="middle">✅ PRACTISED IN INDIA</text>
  <circle class="ic" cx="1510" cy="248" r="14"/>
  <text class="t-info" x="1510" y="254" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="coroner-inquest">
  <rect class="body-white" x="60" y="680" width="740" height="450" rx="14"/>
  <path d="M 74,680 H 786 A 14,14 0 0 1 800,694 V 740 H 60 V 694 A 14,14 0 0 1 74,680 Z" fill="url(#gRed)"/>
  <text x="90" y="720" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">👨‍⚖️ Coroner Inquest</text>
  <text x="90" y="774" class="t-keylbl">📜 Governing law:</text>
  <text x="280" y="774" class="t-keyval">Coroner's Act</text>
  <text x="90" y="808" class="t-keylbl">👤 Coroner:</text>
  <text x="280" y="808" class="t-keyval">Rank of 1st Class Magistrate (doctor OR lawyer)</text>
  <text x="90" y="842" class="t-keylbl">📍 Location:</text>
  <text x="280" y="842" class="t-keyval">Mumbai (until 29-Jul-1999) · Kolkata (earlier)</text>
  <text x="90" y="876" class="t-keylbl">⚖️ Powers:</text>
  <text x="280" y="876" class="t-keyval">Court of inquiry only — issues verdict on cause</text>
  <text x="90" y="910" class="t-keylbl">📋 "Open verdict":</text>
  <text x="280" y="910" class="t-keyval">Crime confirmed but accused unknown</text>
  <rect fill="url(#gRed)" x="90" y="1050" width="260" height="38" rx="19"/>
  <text x="220" y="1075" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="700" fill="white" text-anchor="middle">❌ ABOLISHED IN INDIA</text>
  <circle class="ic" cx="770" cy="698" r="14"/>
  <text class="t-info" x="770" y="704" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="medical-examiner-system">
  <rect class="body-white" x="820" y="680" width="720" height="450" rx="14"/>
  <path d="M 834,680 H 1526 A 14,14 0 0 1 1540,694 V 740 H 820 V 694 A 14,14 0 0 1 834,680 Z" fill="url(#gGrey)"/>
  <text x="850" y="720" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🩺 Medical Examiner System</text>
  <text x="850" y="774" class="t-keylbl">📍 Prevalent in:</text>
  <text x="1020" y="774" class="t-keyval">Most United States states</text>
  <text x="850" y="808" class="t-keylbl">👨‍⚕️ Conducted by:</text>
  <text x="1020" y="808" class="t-keyval">Qualified Forensic Pathologist</text>
  <text x="850" y="842" class="t-keylbl">⭐ Status:</text>
  <text x="1020" y="842" class="t-keyval">Considered the most scientific / superior</text>
  <text x="850" y="876" class="t-keylbl">🔄 Replaced:</text>
  <text x="1020" y="876" class="t-keyval">Coroner system in the USA</text>
  <text x="850" y="910" class="t-keylbl">📌 In India:</text>
  <text x="1020" y="910" class="t-keyval">Not followed — closest equivalent is govt-doctor PM</text>
  <rect fill="url(#gRed)" x="860" y="1050" width="220" height="38" rx="19"/>
  <text x="970" y="1075" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="700" fill="white" text-anchor="middle">❌ NOT IN INDIA</text>
  <circle class="ic" cx="1510" cy="698" r="14"/>
  <text class="t-info" x="1510" y="704" text-anchor="middle">ⓘ</text>
</g>
</svg>`;

/* ================================================================
   DIAGRAM 3 — LP-03 — Summons / Subpoena anatomy
   ================================================================ */
const SVG_LP03 = `<svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Summons / Subpoena</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Written court order to attend / produce · Summons (Indian) = Subpoena (foreign) · "sub poena" = under penalty</text>

<g data-node-id="summons-document">
  <rect class="nbcr" x="60" y="120" width="600" height="760" rx="14"/>
  <text x="360" y="170" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="#8B6914" text-anchor="middle">— COURT LETTERHEAD —</text>
  <text x="360" y="220" font-family="Inter,system-ui,sans-serif" font-size="32" font-weight="800" fill="#15294F" text-anchor="middle">SUMMONS</text>
  <line x1="160" y1="240" x2="560" y2="240" stroke="#8B6914" stroke-width="1.5"/>
  <text x="110" y="290" class="t-keylbl">📍 Court:</text>
  <text x="200" y="290" class="t-keyval">[Name + designation]</text>
  <text x="110" y="340" class="t-keylbl">👤 To:</text>
  <text x="200" y="340" class="t-keyval">[Name + address of person summoned]</text>
  <text x="110" y="390" class="t-keylbl">📅 When:</text>
  <text x="200" y="390" class="t-keyval">[Date + time of attendance]</text>
  <text x="110" y="440" class="t-keylbl">🎯 Purpose:</text>
  <text x="200" y="440" class="t-keyval">☐ Give evidence  ☐ Produce documents</text>
  <text x="110" y="490" class="t-keylbl">📋 Case ref:</text>
  <text x="200" y="490" class="t-keyval">[Cause number]</text>
  <circle cx="490" cy="620" r="55" fill="#15294F" opacity="0.92"/>
  <text x="490" y="615" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">COURT</text>
  <text x="490" y="635" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="700" fill="white" text-anchor="middle">SEAL</text>
  <line x1="110" y1="720" x2="380" y2="720" stroke="#8B6914" stroke-width="1"/>
  <text x="110" y="745" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="500" fill="#8B6914">Signature of Judge</text>
  <text x="360" y="830" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="500" fill="#5C4810" text-anchor="middle" font-style="italic">Issued in duplicate — original served, duplicate signed &amp; returned</text>
  <circle class="ic" cx="630" cy="144" r="14"/>
  <text class="t-info" x="630" y="150" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="witness-summons">
  <rect class="body-white" x="700" y="120" width="840" height="200" rx="14"/>
  <path d="M 714,120 H 1526 A 14,14 0 0 1 1540,134 V 180 H 700 V 134 A 14,14 0 0 1 714,120 Z" fill="url(#gBlue)"/>
  <text x="730" y="160" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">📢 Witness Summons</text>
  <text x="730" y="220" class="t-keylbl">🎯 Purpose:</text>
  <text x="850" y="220" class="t-keyval">Compels recipient to ATTEND court and give oral evidence</text>
  <text x="730" y="248" class="t-keylbl">📚 Foreign:</text>
  <text x="850" y="248" class="t-keyval">"Subpoena ad testificandum"</text>
  <text x="730" y="276" class="t-keylbl">💼 Use:</text>
  <text x="850" y="276" class="t-keyval">Doctor testifying as expert witness on injuries / autopsy</text>
  <text x="730" y="304" class="t-keylbl">⚠️ Disobey:</text>
  <text x="850" y="304" class="t-keyval">Contempt of court — punishable</text>
  <circle class="ic" cx="1510" cy="138" r="14"/>
  <text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="production-summons">
  <rect class="body-white" x="700" y="350" width="840" height="200" rx="14"/>
  <path d="M 714,350 H 1526 A 14,14 0 0 1 1540,364 V 410 H 700 V 364 A 14,14 0 0 1 714,350 Z" fill="url(#gGreen)"/>
  <text x="730" y="390" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">📁 Production Summons</text>
  <text x="730" y="450" class="t-keylbl">🎯 Purpose:</text>
  <text x="850" y="450" class="t-keyval">Compels recipient to PRODUCE documents / objects</text>
  <text x="730" y="478" class="t-keylbl">📚 Foreign:</text>
  <text x="850" y="478" class="t-keyval">"Subpoena duces tecum"</text>
  <text x="730" y="506" class="t-keylbl">📋 Examples:</text>
  <text x="850" y="506" class="t-keyval">MLR · PM report · X-rays · case notes · viscera</text>
  <text x="730" y="534" class="t-keylbl">📌 Tip:</text>
  <text x="850" y="534" class="t-keyval">Bring records but refer only with court's permission</text>
  <circle class="ic" cx="1510" cy="368" r="14"/>
  <text class="t-info" x="1510" y="374" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="conduct-money">
  <rect class="body-white" x="700" y="580" width="840" height="220" rx="14"/>
  <path d="M 714,580 H 1526 A 14,14 0 0 1 1540,594 V 640 H 700 V 594 A 14,14 0 0 1 714,580 Z" fill="url(#gOrange)"/>
  <text x="730" y="620" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">💰 Conduct Money</text>
  <text x="730" y="680" class="t-bodydark">Travelling + subsistence allowance paid to a witness — rule differs by case type:</text>
  <rect fill="url(#gGreen)" x="730" y="700" width="380" height="44" rx="10"/>
  <text x="920" y="728" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">✅ CIVIL CASES — paid in advance</text>
  <rect fill="url(#gRed)" x="1120" y="700" width="380" height="44" rx="10"/>
  <text x="1310" y="728" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">❌ CRIMINAL — govt reimburses after</text>
  <text x="730" y="776" font-family="Inter,system-ui,sans-serif" font-size="12" fill="#6B7283" font-style="italic">High-yield exam point — comes up in cross-examination of doctor witnesses.</text>
  <circle class="ic" cx="1510" cy="598" r="14"/>
  <text class="t-info" x="1510" y="604" text-anchor="middle">ⓘ</text>
</g>

<rect x="700" y="830" width="840" height="50" rx="10" fill="url(#gGrey)"/>
<text x="1120" y="862" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">⚠️ Disobedience of summons → CONTEMPT OF COURT (punishable)</text>
</svg>`;

/* ================================================================
   DIAGRAM 4 — LP-04 — Medical Evidence (radial mindmap, 5 branches)
   ================================================================ */
const SVG_LP04 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Types of Medical Evidence</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">5 classifications · 4 direct + 1 inferential · hearsay generally inadmissible (with exceptions)</text>

<g data-node-id="medical-evidence-root">
  <rect class="nbcr" x="60" y="120" width="1480" height="100" rx="14"/>
  <text x="90" y="158" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="#8B6914">⚖️ MEDICAL EVIDENCE</text>
  <text x="90" y="188" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= evidence given by a medical practitioner in his professional capacity. Classified into 5 types:</text>
  <circle class="ic" cx="1500" cy="144" r="14"/>
  <text class="t-info" x="1500" y="150" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="documentary-evidence">
  <rect class="body-white" x="60" y="250" width="480" height="370" rx="14"/>
  <path d="M 74,250 H 526 A 14,14 0 0 1 540,264 V 310 H 60 V 264 A 14,14 0 0 1 74,250 Z" fill="url(#gBlue)"/>
  <text x="90" y="290" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">📄 Documentary</text>
  <text x="90" y="346" class="t-bodydark">Documents produced before court:</text>
  <text x="90" y="376" class="t-keyval">• Medical certificates (birth/death/age/fitness)</text>
  <text x="90" y="400" class="t-keyval">• Medicolegal reports (MLR)</text>
  <text x="90" y="424" class="t-keyval">• Postmortem reports</text>
  <text x="90" y="448" class="t-keyval">• Dying declaration (BSA §26 exception)</text>
  <text x="90" y="472" class="t-keyval">• Affidavits, X-rays, lab reports</text>
  <rect fill="url(#gGreen)" x="90" y="550" width="160" height="34" rx="17"/>
  <text x="170" y="572" class="t-pill" text-anchor="middle">✅ Admissible</text>
  <circle class="ic" cx="510" cy="268" r="14"/>
  <text class="t-info" x="510" y="274" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="oral-evidence">
  <rect class="body-white" x="560" y="250" width="480" height="370" rx="14"/>
  <path d="M 574,250 H 1026 A 14,14 0 0 1 1040,264 V 310 H 560 V 264 A 14,14 0 0 1 574,250 Z" fill="url(#gGreen)"/>
  <text x="590" y="290" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🗣️ Oral</text>
  <text x="590" y="346" class="t-bodydark">Statement made in court under oath:</text>
  <text x="590" y="376" class="t-keyval">• Doctor's deposition on injuries / autopsy</text>
  <text x="590" y="400" class="t-keyval">• Signs / gestures of mute witness</text>
  <text x="590" y="424" class="t-keyval">• Written statement of mute witness</text>
  <text x="590" y="478" class="t-keylbl">⭐ Strongest direct type</text>
  <text x="590" y="502" class="t-keyval">— direct perception + cross-examinable</text>
  <rect fill="url(#gGreen)" x="590" y="550" width="200" height="34" rx="17"/>
  <text x="690" y="572" class="t-pill" text-anchor="middle">✅ Best evidence</text>
  <circle class="ic" cx="1010" cy="268" r="14"/>
  <text class="t-info" x="1010" y="274" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="real-evidence">
  <rect class="body-white" x="1060" y="250" width="480" height="370" rx="14"/>
  <path d="M 1074,250 H 1526 A 14,14 0 0 1 1540,264 V 310 H 1060 V 264 A 14,14 0 0 1 1074,250 Z" fill="url(#gOrange)"/>
  <text x="1090" y="290" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">📦 Real / Material</text>
  <text x="1090" y="346" class="t-bodydark">Physical objects produced in court:</text>
  <text x="1090" y="376" class="t-keyval">• Weapons (knives, firearms)</text>
  <text x="1090" y="400" class="t-keyval">• Clothing of victim / accused</text>
  <text x="1090" y="424" class="t-keyval">• Bullets, cartridges, residue</text>
  <text x="1090" y="448" class="t-keyval">• Viscera, body fluids, hair</text>
  <text x="1090" y="472" class="t-keyval">• Bloodstained articles</text>
  <rect fill="url(#gGreen)" x="1090" y="550" width="160" height="34" rx="17"/>
  <text x="1170" y="572" class="t-pill" text-anchor="middle">✅ Admissible</text>
  <circle class="ic" cx="1510" cy="268" r="14"/>
  <text class="t-info" x="1510" y="274" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="hearsay-evidence">
  <rect class="body-white" x="60" y="660" width="740" height="380" rx="14"/>
  <path d="M 74,660 H 786 A 14,14 0 0 1 800,674 V 720 H 60 V 674 A 14,14 0 0 1 74,660 Z" fill="url(#gRed)"/>
  <text x="90" y="700" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">👂 Hearsay</text>
  <text x="90" y="756" class="t-bodydark">What a witness heard from another person — original speaker absent.</text>
  <text x="90" y="800" class="t-keylbl">⚠️ Rule:</text>
  <text x="170" y="800" class="t-keyval">GENERALLY NOT admissible — no cross-examination possible</text>
  <text x="90" y="836" class="t-keylbl">✅ Recognised exceptions:</text>
  <text x="110" y="864" class="t-keyval">• Dying declaration — BSA §26 / old IEA §32</text>
  <text x="110" y="888" class="t-keyval">• Res gestae — spontaneous, contemporaneous</text>
  <text x="110" y="912" class="t-keyval">• Public records (birth / death / marriage)</text>
  <text x="110" y="936" class="t-keyval">• Expert opinion in published textbooks</text>
  <rect fill="url(#gRed)" x="90" y="985" width="260" height="34" rx="17"/>
  <text x="220" y="1007" class="t-pill" text-anchor="middle">❌ Generally inadmissible</text>
  <circle class="ic" cx="770" cy="678" r="14"/>
  <text class="t-info" x="770" y="684" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="circumstantial-evidence">
  <rect class="body-white" x="820" y="660" width="720" height="380" rx="14"/>
  <path d="M 834,660 H 1526 A 14,14 0 0 1 1540,674 V 720 H 820 V 674 A 14,14 0 0 1 834,660 Z" fill="url(#gPurple)"/>
  <text x="850" y="700" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🔍 Circumstantial</text>
  <text x="850" y="756" class="t-bodydark">Indirect evidence — a fact in issue is INFERRED from another fact.</text>
  <text x="850" y="800" class="t-keylbl">📌 Medicolegal examples:</text>
  <text x="870" y="828" class="t-keyval">• Time since death from rigor mortis / lividity</text>
  <text x="870" y="852" class="t-keyval">• Weapon inferred from wound morphology</text>
  <text x="870" y="876" class="t-keyval">• Poisoning inferred from autopsy stains (CO → cherry red)</text>
  <text x="870" y="900" class="t-keyval">• Manner of death from injury pattern</text>
  <text x="850" y="940" class="t-keylbl">⚠️ Chain of inference must be unbroken</text>
  <rect fill="url(#gGreen)" x="850" y="985" width="260" height="34" rx="17"/>
  <text x="980" y="1007" class="t-pill" text-anchor="middle">✅ Admissible — inferential</text>
  <circle class="ic" cx="1510" cy="678" r="14"/>
  <text class="t-info" x="1510" y="684" text-anchor="middle">ⓘ</text>
</g>
</svg>`;

/* ================================================================
   DIAGRAM 5 — LP-05 — Documentary Evidence subtypes (2×2)
   ================================================================ */
const SVG_LP05 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Documentary Evidence — 4 Subtypes</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Documents produced in court as proof of fact · Dying Declaration vs Deposition = single most-tested differentiation</text>

<g data-node-id="medical-certificates">
  <rect class="body-white" x="60" y="120" width="740" height="420" rx="14"/>
  <path d="M 74,120 H 786 A 14,14 0 0 1 800,134 V 180 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gBlue)"/>
  <text x="90" y="160" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">📜 Medical Certificates</text>
  <text x="90" y="220" class="t-keylbl">👨‍⚕️ Issued by:</text>
  <text x="250" y="220" class="t-keyval">Any Registered Medical Practitioner (RMP)</text>
  <text x="90" y="254" class="t-keylbl">📋 Covers:</text>
  <text x="110" y="282" class="t-keyval">• Birth, Death (mandatory before disposal of body)</text>
  <text x="110" y="306" class="t-keyval">• Age, Sickness (leave), Fitness (school / job)</text>
  <text x="110" y="330" class="t-keyval">• Vaccination, Insanity</text>
  <text x="90" y="370" class="t-keylbl">⚠️ False certification:</text>
  <text x="280" y="370" class="t-keyval">Professional misconduct (IMC regs)</text>
  <text x="90" y="404" class="t-keylbl">📌 Format:</text>
  <text x="180" y="404" class="t-keyval">Defined by IMC regulations</text>
  <circle class="ic" cx="770" cy="138" r="14"/>
  <text class="t-info" x="770" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="medicolegal-report">
  <rect class="body-white" x="820" y="120" width="720" height="420" rx="14"/>
  <path d="M 834,120 H 1526 A 14,14 0 0 1 1540,134 V 180 H 820 V 134 A 14,14 0 0 1 834,120 Z" fill="url(#gGreen)"/>
  <text x="850" y="160" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">📋 Medicolegal Report (MLR)</text>
  <text x="850" y="220" class="t-keylbl">📞 Referral:</text>
  <text x="980" y="220" class="t-keyval">Person referred BY POLICE</text>
  <text x="850" y="254" class="t-keylbl">📑 Types:</text>
  <text x="870" y="282" class="t-keyval">• Injury report (assault, accident, hurt)</text>
  <text x="870" y="306" class="t-keyval">• Sexual-assault examination (victim + accused)</text>
  <text x="870" y="330" class="t-keyval">• Drunkenness / intoxication (§185 MV Act etc.)</text>
  <text x="870" y="354" class="t-keyval">• Age estimation</text>
  <text x="850" y="394" class="t-keylbl">👨‍⚕️ Prepared by:</text>
  <text x="1010" y="394" class="t-keyval">Duty medical officer / govt doctor</text>
  <text x="850" y="428" class="t-keylbl">📂 Storage:</text>
  <text x="950" y="428" class="t-keyval">Copy → police; original retained at hospital</text>
  <circle class="ic" cx="1510" cy="138" r="14"/>
  <text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="dying-declaration">
  <rect class="body-white" x="60" y="570" width="740" height="470" rx="14" stroke="#C58A3D" stroke-width="3"/>
  <path d="M 74,570 H 786 A 14,14 0 0 1 800,584 V 630 H 60 V 584 A 14,14 0 0 1 74,570 Z" fill="url(#gRed)"/>
  <text x="90" y="610" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">💬 Dying Declaration</text>
  <text x="700" y="600" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="700" fill="#FFD166">⭐ HIGH-YIELD</text>
  <text x="90" y="670" class="t-keylbl">📜 Legal basis:</text>
  <text x="250" y="670" class="t-keyval">BSA §26 (old IEA §32) — hearsay exception</text>
  <text x="90" y="704" class="t-keylbl">📍 Recorded by:</text>
  <text x="250" y="704" class="t-keyval">Magistrate (ideal) → else doctor / police</text>
  <text x="90" y="738" class="t-keylbl">💬 Subject:</text>
  <text x="200" y="738" class="t-keyval">Cause &amp; circumstances of impending death</text>
  <text x="90" y="772" class="t-keylbl">⚖️ Validity:</text>
  <text x="200" y="772" class="t-keyval">Admissible ONLY IF declarant dies afterwards</text>
  <rect fill="url(#gRed)" x="90" y="820" width="280" height="44" rx="10"/>
  <text x="230" y="848" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">❌ NO OATH</text>
  <rect fill="url(#gRed)" x="390" y="820" width="380" height="44" rx="10"/>
  <text x="580" y="848" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">❌ NO CROSS-EXAMINATION</text>
  <text x="90" y="900" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">"nemo moriturus praesumitur mentiri" — no one about to die is presumed to lie.</text>
  <circle class="ic" cx="770" cy="588" r="14"/>
  <text class="t-info" x="770" y="594" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="dying-deposition">
  <rect class="body-white" x="820" y="570" width="720" height="470" rx="14" stroke="#C58A3D" stroke-width="3"/>
  <path d="M 834,570 H 1526 A 14,14 0 0 1 1540,584 V 630 H 820 V 584 A 14,14 0 0 1 834,570 Z" fill="url(#gPurple)"/>
  <text x="850" y="610" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">⚖️ Dying Deposition</text>
  <text x="1430" y="600" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="700" fill="#FFD166">⭐ HIGH-YIELD</text>
  <text x="850" y="670" class="t-keylbl">📋 Format:</text>
  <text x="970" y="670" class="t-keyval">Court deposition style (Q &amp; A)</text>
  <text x="850" y="704" class="t-keylbl">📍 Recorded by:</text>
  <text x="1010" y="704" class="t-keyval">MAGISTRATE only</text>
  <text x="850" y="738" class="t-keylbl">👨‍⚖️ Present:</text>
  <text x="970" y="738" class="t-keyval">Accused / his pleader</text>
  <text x="850" y="772" class="t-keylbl">⚖️ Validity:</text>
  <text x="970" y="772" class="t-keyval">Admissible regardless — even if declarant survives</text>
  <rect fill="url(#gGreen)" x="850" y="820" width="280" height="44" rx="10"/>
  <text x="990" y="848" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">✅ ON OATH</text>
  <rect fill="url(#gGreen)" x="1150" y="820" width="380" height="44" rx="10"/>
  <text x="1340" y="848" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">✅ WITH CROSS-EXAMINATION</text>
  <text x="850" y="900" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Higher evidentiary value — equivalent to a court deposition.</text>
  <circle class="ic" cx="1510" cy="588" r="14"/>
  <text class="t-info" x="1510" y="594" text-anchor="middle">ⓘ</text>
</g>
</svg>`;

/* ================================================================
   DIAGRAM 6 — LP-06 — Witness Types (3 columns)
   ================================================================ */
const SVG_LP06 = `<svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Types of Witnesses</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">3 types · doctor in court = expert witness · BSA §39 (old IEA §45)</text>

<rect class="nbcr" x="60" y="120" width="1480" height="70" rx="14"/>
<text x="800" y="158" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="500" fill="#5C4810" text-anchor="middle" font-style="italic">A witness is any person who appears in court and gives evidence under oath about facts within his knowledge.</text>

<g data-node-id="common-witness">
  <rect class="body-white" x="60" y="220" width="490" height="700" rx="14"/>
  <path d="M 74,220 H 536 A 14,14 0 0 1 550,234 V 320 H 60 V 234 A 14,14 0 0 1 74,220 Z" fill="url(#gGrey)"/>
  <text x="305" y="270" font-family="Inter,system-ui,sans-serif" font-size="24" font-weight="800" fill="white" text-anchor="middle">👤 Common Witness</text>
  <text x="305" y="298" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="500" fill="rgba(255,255,255,0.85)" text-anchor="middle" font-style="italic">(a.k.a. Witness of Fact)</text>
  <text x="80" y="360" class="t-keylbl">📋 Role:</text>
  <text x="80" y="384" class="t-keyval">Deposes about facts SEEN / heard / perceived</text>
  <text x="80" y="430" class="t-keylbl">⚠️ Critical limit:</text>
  <text x="80" y="454" class="t-keyval">CANNOT give opinion — facts only</text>
  <text x="80" y="500" class="t-keylbl">📌 Examples:</text>
  <text x="100" y="524" class="t-keyval">• Passer-by who saw an accident</text>
  <text x="100" y="548" class="t-keyval">• Neighbour who heard a victim's cry</text>
  <text x="100" y="572" class="t-keyval">• Panchas signing a panchnama</text>
  <text x="80" y="618" class="t-keylbl">📜 Procedure:</text>
  <text x="80" y="642" class="t-keyval">Examined on oath — opinion objections sustained</text>
  <rect fill="url(#gRed)" x="80" y="850" width="240" height="40" rx="20"/>
  <text x="200" y="876" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="700" fill="white" text-anchor="middle">❌ No opinion allowed</text>
  <circle class="ic" cx="520" cy="238" r="14"/>
  <text class="t-info" x="520" y="244" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="expert-witness">
  <rect class="body-white" x="570" y="220" width="490" height="700" rx="14" stroke="#C58A3D" stroke-width="3"/>
  <path d="M 584,220 H 1046 A 14,14 0 0 1 1060,234 V 320 H 570 V 234 A 14,14 0 0 1 584,220 Z" fill="url(#gBlue)"/>
  <text x="815" y="270" font-family="Inter,system-ui,sans-serif" font-size="24" font-weight="800" fill="white" text-anchor="middle">🩺 Expert Witness</text>
  <text x="815" y="298" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="500" fill="rgba(255,255,255,0.85)" text-anchor="middle" font-style="italic">(a.k.a. Skilled Witness)</text>
  <text x="1020" y="240" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="700" fill="#FFD166">⭐ FOCAL</text>
  <text x="590" y="360" class="t-keylbl">📋 Role:</text>
  <text x="590" y="384" class="t-keyval">Specially SKILLED in a subject — gives opinion</text>
  <text x="590" y="430" class="t-keylbl">📜 Legal basis:</text>
  <text x="590" y="454" class="t-keyval">BSA §39 (corresponds to old IEA §45)</text>
  <text x="590" y="500" class="t-keylbl">📌 Examples:</text>
  <text x="610" y="524" class="t-keyval">• Forensic doctor</text>
  <text x="610" y="548" class="t-keyval">• Ballistics expert</text>
  <text x="610" y="572" class="t-keyval">• Handwriting analyst</text>
  <text x="610" y="596" class="t-keyval">• Psychiatrist</text>
  <rect fill="url(#gOrange)" x="590" y="640" width="450" height="60" rx="10"/>
  <text x="815" y="666" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🏆 Doctor appearing in court</text>
  <text x="815" y="685" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">= EXPERT WITNESS</text>
  <rect fill="url(#gGreen)" x="590" y="850" width="240" height="40" rx="20"/>
  <text x="710" y="876" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="700" fill="white" text-anchor="middle">✅ Opinion allowed</text>
  <circle class="ic" cx="1030" cy="238" r="14"/>
  <text class="t-info" x="1030" y="244" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="hostile-witness">
  <rect class="body-white" x="1080" y="220" width="460" height="700" rx="14"/>
  <path d="M 1094,220 H 1526 A 14,14 0 0 1 1540,234 V 320 H 1080 V 234 A 14,14 0 0 1 1094,220 Z" fill="url(#gRed)"/>
  <text x="1310" y="270" font-family="Inter,system-ui,sans-serif" font-size="24" font-weight="800" fill="white" text-anchor="middle">🔥 Hostile Witness</text>
  <text x="1310" y="298" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="500" fill="rgba(255,255,255,0.85)" text-anchor="middle" font-style="italic">(turned against calling party)</text>
  <text x="1100" y="360" class="t-keylbl">📋 Definition:</text>
  <text x="1100" y="384" class="t-keyval">Gives evidence AGAINST the calling party</text>
  <text x="1100" y="430" class="t-keylbl">⚖️ Procedure:</text>
  <text x="1100" y="454" class="t-keyval">Court must FORMALLY declare him hostile</text>
  <text x="1100" y="478" class="t-keyval">→ calling party may then cross-examine</text>
  <text x="1100" y="502" class="t-keyval">→ leading questions allowed</text>
  <text x="1100" y="548" class="t-keylbl">📌 Common scenarios:</text>
  <text x="1120" y="572" class="t-keyval">• Witness intimidation</text>
  <text x="1120" y="596" class="t-keyval">• Bribery / inducement</text>
  <text x="1120" y="620" class="t-keyval">• Mid-trial compromise</text>
  <rect fill="url(#gOrange)" x="1100" y="850" width="320" height="40" rx="20"/>
  <text x="1260" y="876" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-weight="700" fill="white" text-anchor="middle">⚖️ Court's permission required</text>
  <circle class="ic" cx="1510" cy="238" r="14"/>
  <text class="t-info" x="1510" y="244" text-anchor="middle">ⓘ</text>
</g>

<rect fill="url(#gGrey)" x="60" y="940" width="1480" height="38" rx="10"/>
<text x="800" y="965" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⚖️ Common = facts only · Expert = opinion (BSA §39) · Hostile = cross-examined by own side after court declaration</text>
</svg>`;

/* ================================================================
   DIAGRAM 7 — LP-07 — Witness Examination (vertical 5-step)
   ================================================================ */
const SVG_LP07 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Witness Examination in Court — Procedure</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">5-stage sequence · Oath → Exam-in-chief → Cross → Re-exam · Court Qs at any stage</text>

<g data-node-id="step-oath">
  <rect x="100" y="120" width="1400" height="130" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)" stroke="#C58A3D" stroke-width="3"/>
  <text x="130" y="170" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="rgba(255,255,255,0.7)">STEP 1</text>
  <text x="130" y="208" font-family="Inter,system-ui,sans-serif" font-size="28" font-weight="800" fill="white">⚖️ OATH</text>
  <text x="130" y="234" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">Administered by judge · Witness swears: "I shall speak the truth, the whole truth, and nothing but the truth"</text>
  <rect fill="rgba(255,255,255,0.18)" x="1200" y="180" width="270" height="34" rx="17"/>
  <text x="1335" y="202" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">Mandatory before deposing</text>
  <circle class="ic" cx="1470" cy="140" r="14"/>
  <text class="t-info" x="1470" y="146" text-anchor="middle">ⓘ</text>
</g>

<path d="M 800 250 L 800 280" stroke="#A8AEBC" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M 785 268 L 800 285 L 815 268" stroke="#A8AEBC" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

<g data-node-id="step-exam-in-chief">
  <rect x="100" y="300" width="1400" height="140" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/>
  <text x="130" y="350" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="rgba(255,255,255,0.7)">STEP 2</text>
  <text x="130" y="388" font-family="Inter,system-ui,sans-serif" font-size="26" font-weight="800" fill="white">🎤 EXAMINATION-IN-CHIEF</text>
  <text x="130" y="416" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">By the CALLING party · Purpose: elicit facts supporting calling party's case</text>
  <rect fill="rgba(255,255,255,0.18)" x="900" y="370" width="170" height="34" rx="17"/>
  <text x="985" y="392" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">By: Calling party</text>
  <rect fill="url(#gRed)" x="1090" y="370" width="270" height="34" rx="17"/>
  <text x="1225" y="392" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">❌ Leading Q NOT allowed</text>
  <circle class="ic" cx="1470" cy="320" r="14"/>
  <text class="t-info" x="1470" y="326" text-anchor="middle">ⓘ</text>
</g>

<path d="M 800 440 L 800 470" stroke="#A8AEBC" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M 785 458 L 800 475 L 815 458" stroke="#A8AEBC" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

<g data-node-id="step-cross-examination">
  <rect x="100" y="490" width="1400" height="140" rx="14" fill="url(#gOrange)" filter="url(#cardShadow)"/>
  <text x="130" y="540" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="rgba(255,255,255,0.85)">STEP 3</text>
  <text x="130" y="578" font-family="Inter,system-ui,sans-serif" font-size="26" font-weight="800" fill="white">🎯 CROSS-EXAMINATION</text>
  <text x="130" y="606" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">By the OPPOSING party · Tests credibility · Most important phase</text>
  <rect fill="rgba(255,255,255,0.22)" x="900" y="560" width="180" height="34" rx="17"/>
  <text x="990" y="582" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">By: Opposing party</text>
  <rect fill="url(#gGreen)" x="1100" y="560" width="270" height="34" rx="17"/>
  <text x="1235" y="582" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">✅ Leading Q ALLOWED</text>
  <circle class="ic" cx="1470" cy="510" r="14"/>
  <text class="t-info" x="1470" y="516" text-anchor="middle">ⓘ</text>
</g>

<path d="M 800 630 L 800 660" stroke="#A8AEBC" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M 785 648 L 800 665 L 815 648" stroke="#A8AEBC" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

<g data-node-id="step-re-examination">
  <rect x="100" y="680" width="1400" height="140" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/>
  <text x="130" y="730" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="rgba(255,255,255,0.7)">STEP 4</text>
  <text x="130" y="768" font-family="Inter,system-ui,sans-serif" font-size="26" font-weight="800" fill="white">🔄 RE-EXAMINATION</text>
  <text x="130" y="796" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">By CALLING party again · Clarify cross-exam · New matter needs court's leave</text>
  <rect fill="rgba(255,255,255,0.18)" x="900" y="750" width="170" height="34" rx="17"/>
  <text x="985" y="772" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">By: Calling party</text>
  <rect fill="url(#gRed)" x="1090" y="750" width="270" height="34" rx="17"/>
  <text x="1225" y="772" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">❌ Leading Q NOT allowed</text>
  <circle class="ic" cx="1470" cy="700" r="14"/>
  <text class="t-info" x="1470" y="706" text-anchor="middle">ⓘ</text>
</g>

<path d="M 800 820 L 800 850" stroke="#A8AEBC" stroke-width="4" fill="none" stroke-linecap="round"/>
<path d="M 785 838 L 800 855 L 815 838" stroke="#A8AEBC" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

<g data-node-id="step-court-questions">
  <rect x="100" y="870" width="1400" height="140" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/>
  <text x="130" y="920" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="rgba(255,255,255,0.7)">STEP 5</text>
  <text x="130" y="958" font-family="Inter,system-ui,sans-serif" font-size="26" font-weight="800" fill="white">👨‍⚖️ COURT QUESTIONS</text>
  <text x="130" y="986" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">By the JUDGE · At ANY stage · No objection allowed by either party</text>
  <rect fill="rgba(255,255,255,0.18)" x="900" y="940" width="220" height="34" rx="17"/>
  <text x="1010" y="962" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">By: Presiding judge</text>
  <rect fill="url(#gGreen)" x="1140" y="940" width="220" height="34" rx="17"/>
  <text x="1250" y="962" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">✅ Leading Q OK</text>
  <circle class="ic" cx="1470" cy="890" r="14"/>
  <text class="t-info" x="1470" y="896" text-anchor="middle">ⓘ</text>
</g>

<rect fill="url(#gOrange)" x="100" y="1040" width="1400" height="44" rx="10"/>
<text x="800" y="1068" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="800" fill="white" text-anchor="middle">🎯 Pattern: Leading Q allowed only when OPPOSING party (or the judge) asks · Mnemonic: OECRC</text>
</svg>`;

/* ================================================================
   DIAGRAM 8 — LP-08 — Question Types (2×2)
   ================================================================ */
const SVG_LP08 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Types of Questions in Court</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">4 main types · the leading-Q rule across examination phases is the most-tested point</text>

<g data-node-id="leading-question">
  <rect class="body-white" x="60" y="120" width="740" height="430" rx="14" stroke="#C58A3D" stroke-width="3"/>
  <path d="M 74,120 H 786 A 14,14 0 0 1 800,134 V 180 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gBlue)"/>
  <text x="90" y="160" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">❓ Leading Question</text>
  <text x="700" y="150" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="700" fill="#FFD166">⭐ MOST-TESTED</text>
  <text x="90" y="220" class="t-keylbl">📋 Definition:</text>
  <text x="90" y="244" class="t-keyval">Question that SUGGESTS its own answer</text>
  <text x="90" y="278" class="t-keylbl">💡 Example:</text>
  <text x="90" y="302" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="#5C4810" font-style="italic">"You were present at the scene, weren't you?"</text>
  <rect fill="url(#gGreen)" x="90" y="332" width="680" height="32" rx="6"/>
  <text x="430" y="352" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">✅ ALLOWED in Cross-examination</text>
  <rect fill="url(#gGreen)" x="90" y="370" width="680" height="32" rx="6"/>
  <text x="430" y="390" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">✅ ALLOWED in Court Questions (by judge)</text>
  <rect fill="url(#gRed)" x="90" y="408" width="680" height="32" rx="6"/>
  <text x="430" y="428" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">❌ NOT allowed in Examination-in-chief</text>
  <rect fill="url(#gRed)" x="90" y="446" width="680" height="32" rx="6"/>
  <text x="430" y="466" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">❌ NOT allowed in Re-examination</text>
  <text x="90" y="510" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Memory pattern: Allowed only when OPPOSING party (or judge) asks.</text>
  <circle class="ic" cx="770" cy="138" r="14"/>
  <text class="t-info" x="770" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="hypothetical-question">
  <rect class="body-white" x="820" y="120" width="720" height="430" rx="14"/>
  <path d="M 834,120 H 1526 A 14,14 0 0 1 1540,134 V 180 H 820 V 134 A 14,14 0 0 1 834,120 Z" fill="url(#gGreen)"/>
  <text x="850" y="160" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🧪 Hypothetical Question</text>
  <text x="850" y="220" class="t-keylbl">📋 Definition:</text>
  <text x="850" y="244" class="t-keyval">Question based on ASSUMED facts — to draw expert opinion</text>
  <text x="850" y="278" class="t-keylbl">💡 Example:</text>
  <text x="850" y="302" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="#5C4810" font-style="italic">"Doctor, if a stab wound of 10 cm depth is found in the chest,</text>
  <text x="850" y="320" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="#5C4810" font-style="italic">would it be fatal?"</text>
  <text x="850" y="360" class="t-keylbl">🎯 Purpose:</text>
  <text x="850" y="384" class="t-keyval">Standard way to elicit opinion from expert witness</text>
  <text x="850" y="424" class="t-keylbl">👨‍⚕️ Common in:</text>
  <text x="850" y="448" class="t-keyval">Doctor's testimony on cause-of-death / mechanism</text>
  <rect fill="url(#gGreen)" x="850" y="490" width="600" height="40" rx="20"/>
  <text x="1150" y="516" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">✅ ALLOWED — to draw expert opinion</text>
  <circle class="ic" cx="1510" cy="138" r="14"/>
  <text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="compound-question">
  <rect class="body-white" x="60" y="580" width="740" height="430" rx="14"/>
  <path d="M 74,580 H 786 A 14,14 0 0 1 800,594 V 640 H 60 V 594 A 14,14 0 0 1 74,580 Z" fill="url(#gOrange)"/>
  <text x="90" y="620" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🪢 Compound Question</text>
  <text x="90" y="680" class="t-keylbl">📋 Definition:</text>
  <text x="90" y="704" class="t-keyval">Single question bundling TWO OR MORE queries together</text>
  <text x="90" y="738" class="t-keylbl">💡 Example:</text>
  <text x="90" y="762" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="#5C4810" font-style="italic">"Did you see the accused, and did he have a knife?"</text>
  <text x="90" y="802" class="t-keylbl">⚠️ Problem:</text>
  <text x="90" y="826" class="t-keyval">Confuses the witness · produces ambiguous answer</text>
  <text x="90" y="866" class="t-keylbl">🛠️ Fix:</text>
  <text x="90" y="890" class="t-keyval">Judge may direct lawyer to split into two separate Qs</text>
  <rect fill="url(#gRed)" x="90" y="940" width="600" height="40" rx="20"/>
  <text x="390" y="966" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">❌ Judge MAY DISALLOW — confusing</text>
  <circle class="ic" cx="770" cy="598" r="14"/>
  <text class="t-info" x="770" y="604" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="indecent-question">
  <rect class="body-white" x="820" y="580" width="720" height="430" rx="14"/>
  <path d="M 834,580 H 1526 A 14,14 0 0 1 1540,594 V 640 H 820 V 594 A 14,14 0 0 1 834,580 Z" fill="url(#gRed)"/>
  <text x="850" y="620" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🚫 Indecent / Insulting Q</text>
  <text x="850" y="680" class="t-keylbl">📋 Definition:</text>
  <text x="850" y="704" class="t-keyval">Intimate / scandalous matter NOT related to case</text>
  <text x="850" y="724" class="t-keyval">— or questions meant to insult / harass</text>
  <text x="850" y="764" class="t-keylbl">⚖️ Court's discretion:</text>
  <text x="850" y="788" class="t-keyval">MUST forbid if irrelevant to facts in issue</text>
  <text x="850" y="822" class="t-keylbl">⚠️ Exception:</text>
  <text x="850" y="846" class="t-keyval">MAY allow if relevant (e.g., sexual-offence trial)</text>
  <text x="850" y="886" class="t-keylbl">📌 Insulting Qs:</text>
  <text x="850" y="910" class="t-keyval">Forbidden regardless of relevance</text>
  <rect fill="url(#gRed)" x="850" y="940" width="600" height="40" rx="20"/>
  <text x="1150" y="966" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">❌ Judge MUST forbid (if irrelevant)</text>
  <circle class="ic" cx="1510" cy="598" r="14"/>
  <text class="t-info" x="1510" y="604" text-anchor="middle">ⓘ</text>
</g>
</svg>`;

/* ================================================================
   DIAGRAM 9 — LP-09 — Conduct of Doctor (2 columns: Do's / Don'ts)
   ================================================================ */
const SVG_LP09 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Conduct of Doctor in Court</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Credibility = case integrity · You appear as an Expert Witness under BSA §39 (old IEA §45)</text>

<g data-node-id="conduct-dos">
  <rect x="60" y="120" width="740" height="920" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/>
  <text x="430" y="180" font-family="Inter,system-ui,sans-serif" font-size="36" font-weight="800" fill="white" text-anchor="middle">✅ DO</text>
  <line x1="80" y1="210" x2="780" y2="210" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
  <text x="90" y="260" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✓ Be PUNCTUAL</text>
  <text x="110" y="284" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.88)">— arrive before the scheduled time</text>
  <text x="90" y="324" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✓ Dress FORMALLY</text>
  <text x="110" y="348" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.88)">— convey professionalism</text>
  <text x="90" y="388" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✓ Address the court properly</text>
  <text x="110" y="412" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.88)">"My Lord" / "Your Honour" (HC/SC) · "Sir" (subordinate)</text>
  <text x="90" y="452" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✓ CARRY all records</text>
  <text x="110" y="476" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.88)">MLR · PM report · case notes</text>
  <text x="90" y="516" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✓ Refer to records ONLY with court's permission</text>
  <text x="90" y="556" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✓ Speak CLEARLY and slowly</text>
  <text x="110" y="580" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.88)">— audible to court and recording clerk</text>
  <text x="90" y="620" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✓ Answer ONLY what is asked</text>
  <text x="90" y="660" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✓ Use plain language</text>
  <text x="110" y="684" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.88)">— explain medical terms when used</text>
  <text x="90" y="724" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✓ Take OATH before deposing</text>
  <text x="90" y="764" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✓ Stay composed under cross-examination</text>
  <rect x="90" y="900" width="680" height="100" rx="10" fill="rgba(255,255,255,0.15)"/>
  <text x="430" y="940" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">🧠 PALACE</text>
  <text x="430" y="975" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="600" fill="rgba(255,255,255,0.9)" text-anchor="middle">Punctual · Attire · Language · Answer · Carry · Explain</text>
  <circle class="ic" cx="770" cy="138" r="14"/>
  <text class="t-info" x="770" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="conduct-donts">
  <rect x="820" y="120" width="720" height="920" rx="14" fill="url(#gRed)" filter="url(#cardShadow)"/>
  <text x="1180" y="180" font-family="Inter,system-ui,sans-serif" font-size="36" font-weight="800" fill="white" text-anchor="middle">❌ DON'T</text>
  <line x1="840" y1="210" x2="1520" y2="210" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
  <text x="850" y="260" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✗ Don't LOSE TEMPER</text>
  <text x="870" y="284" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.88)">— stay calm under cross-exam, however provocative</text>
  <text x="850" y="324" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✗ Don't ARGUE</text>
  <text x="870" y="348" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.88)">— with lawyer or judge</text>
  <text x="850" y="388" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✗ Don't VOLUNTEER information</text>
  <text x="870" y="412" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.88)">— answer only what is asked</text>
  <text x="850" y="452" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✗ Don't SPECULATE</text>
  <text x="870" y="476" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.88)">— beyond your evidence</text>
  <text x="850" y="516" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✗ Don't DISCLOSE patient secrets</text>
  <text x="870" y="540" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.88)">— without consent or explicit court direction</text>
  <text x="850" y="580" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✗ Don't TAKE SIDES</text>
  <text x="870" y="604" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.88)">— remain neutral; you're expert, not advocate</text>
  <text x="850" y="644" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✗ Don't REFUSE a court-directed Q</text>
  <text x="870" y="668" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="#FFD166">→ CONTEMPT OF COURT</text>
  <text x="850" y="708" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white">✗ Don't give FALSE evidence</text>
  <text x="870" y="732" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="#FFD166">→ PERJURY · §229 BNS / old §193 IPC</text>
  <text x="870" y="752" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="500" fill="rgba(255,255,255,0.85)">  up to 7 years imprisonment + fine</text>
  <rect x="850" y="900" width="660" height="100" rx="10" fill="rgba(255,255,255,0.15)"/>
  <text x="1180" y="940" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">🧠 NEVER</text>
  <text x="1180" y="975" font-family="Inter,system-ui,sans-serif" font-size="12" font-weight="600" fill="rgba(255,255,255,0.9)" text-anchor="middle">No temper · Evade nothing · No volunteer · Exceed · Reveal</text>
  <circle class="ic" cx="1510" cy="138" r="14"/>
  <text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text>
</g>
</svg>`;

/* ================================================================
   PARAPHRASED ⓘ-BUTTON CONTENT
   ================================================================ */
const NODES = {
  /* ----- LP-01 ----- */
  'supreme-court': { label: 'Supreme Court of India', info: '<p>The Supreme Court is the apex judicial body in India and the final court of appeal in both civil and criminal matters.</p><p>It has <strong>appellate jurisdiction</strong> over all courts and also <strong>original jurisdiction</strong> in disputes between states, or between the centre and a state.</p><p>For medicolegal practice, the Supreme Court is where final precedents on medical negligence, consent, and criminal liability are set.</p>', tags: ['Apex court', 'Original + Appellate jurisdiction'] },
  'high-court': { label: 'High Court', info: '<p>The High Court is the highest court in a state. It exercises appellate jurisdiction over all subordinate courts in the state and original jurisdiction in specified matters.</p><p><strong>Critical rule:</strong> Every sentence of death passed by a Sessions Court must be <strong>confirmed by the High Court</strong> before it can be executed.</p><p>A doctor may be summoned to High Court for serious criminal appeals or for civil matters of high pecuniary value.</p>', tags: ['Confirms death sentence', 'State-level apex'] },
  'sessions-court': { label: 'Sessions Court (incl. Additional & Assistant)', info: '<p>The Sessions Court is the <strong>highest criminal court in a district</strong> — tries the most serious offences (murder, rape, dacoity, dowry death).</p><p><strong>Principal & Additional Sessions Judges</strong> may pass <strong>any sentence authorised by law, including death</strong> — but a death sentence requires <strong>confirmation by the High Court</strong> before execution.</p><p>The <strong>Assistant Sessions Judge</strong> tries cases referred to him by the Sessions Judge and may impose up to <strong>10 years imprisonment</strong> + unlimited fine, but cannot award death, life, or imprisonment exceeding 10 years.</p>', tags: ['District HQ', 'Any sentence (HC confirms death)', 'Asst Sessions ≤ 10 yrs'] },
  'magistrate-court': { label: 'Magistrate Court — 3 sub-ranks', info: '<p>The lower tier of criminal courts. Three ranks, in descending power:</p><ul><li><strong>CJM / Chief Metropolitan Magistrate</strong> — heads the Magistrate courts in a district. ≤ <strong>7 years</strong> imprisonment + unlimited fine. Cannot award death or life.</li><li><strong>JMFC / Metropolitan Magistrate (First Class)</strong> — most routine medicolegal cases sit here. ≤ <strong>3 years</strong> + ₹10,000 fine.</li><li><strong>II Class Judicial Magistrate</strong> — lowest tier; minor offences only. ≤ <strong>1 year</strong> + ₹5,000 fine.</li></ul><p>Note: in metropolitan areas, the equivalent ranks are called Chief Metropolitan Magistrate and Metropolitan Magistrate respectively.</p>', tags: ['CJM ≤ 7y', 'JMFC ≤ 3y / ₹10k', 'II Class ≤ 1y / ₹5k'] },
  'powers-table': { label: 'Powers of Criminal Courts — at a glance', info: '<p>The maximum imprisonment and fine that each rank can impose:</p><table style="font-size:12.5px"><tr><th>Court</th><th>Imprisonment</th><th>Fine</th></tr><tr><td>Supreme Court / High Court</td><td>Any in law</td><td>Any in law</td></tr><tr><td>Sessions / Add\'l Sessions</td><td>Any in law*</td><td>Any in law</td></tr><tr><td>Asst Sessions</td><td>≤ 10 yrs</td><td>Unlimited</td></tr><tr><td>CJM / Chief Metro Mag</td><td>≤ 7 yrs</td><td>Unlimited</td></tr><tr><td>JMFC / Metro Mag</td><td>≤ 3 yrs</td><td>₹10,000</td></tr><tr><td>II Class JM</td><td>≤ 1 yr</td><td>₹5,000</td></tr></table><p><strong>*</strong> Death sentence by Sessions Court must be confirmed by High Court before execution.</p>', tags: ['Sentencing limits', 'BNSS 2023'] },
  'civil-courts-note': { label: 'Civil Courts — Parallel Hierarchy', info: '<p>Civil disputes (property, contract, family, tort, medical-negligence damages) follow a separate but parallel hierarchy:</p><ul><li><strong>Supreme Court</strong> — final court of appeal in civil matters too</li><li><strong>High Court (civil side)</strong> — appellate + original jurisdiction in high-value matters</li><li><strong>District Court / Court of Civil Judge</strong> — highest civil court at district level</li><li><strong>Subordinate civil judges</strong> — handle smaller-value matters</li></ul><p>Key differences from criminal courts:</p><ul><li>Parties are <strong>Plaintiff vs Defendant</strong></li><li>Burden of proof is <strong>preponderance of probability</strong> (not "beyond reasonable doubt")</li><li>Outcome is a <strong>decree</strong> — money, injunction, declaration — not a sentence</li><li><strong>Conduct money</strong> is paid to witnesses <strong>in advance</strong> (criminal cases reimburse afterwards)</li></ul><p>A patient suing a doctor for damages files in a civil court. Criminal prosecution of the same doctor (rash/negligent act) sits in a criminal court — both can run in parallel.</p>', tags: ['Civil = Plaintiff vs Defendant', 'Conduct money in advance', 'Preponderance of probability'] },
  'asst-sessions-court': { label: 'Assistant Sessions Court', info: '<p>The Assistant Sessions Judge tries cases referred to him by the Sessions Judge.</p><p>He can impose <strong>imprisonment up to 10 years</strong> and any fine, but <strong>cannot</strong> award:</p><ul><li>Death sentence</li><li>Life imprisonment</li><li>Imprisonment exceeding 10 years</li></ul>', tags: ['≤ 10 years', 'No death / no life'] },
  'cjm': { label: 'Chief Judicial / Chief Metropolitan Magistrate', info: '<p>Heads the Magistrate courts in a district (rural areas — Chief Judicial Magistrate; metropolitan areas — Chief Metropolitan Magistrate).</p><p>Can pass any sentence authorised by law except:</p><ul><li>Death</li><li>Life imprisonment</li><li>Imprisonment exceeding <strong>7 years</strong></li></ul>', tags: ['≤ 7 years + fine'] },
  'jmfc': { label: 'Judicial / Metropolitan Magistrate — First Class', info: '<p>Can try cases punishable with imprisonment up to <strong>3 years</strong> and impose a fine not exceeding <strong>₹10,000</strong>, or both.</p><p>Most routine medicolegal cases (simple hurt, MLR-based offences) are tried at this level. A doctor receiving a summons for a simple hurt case is being called to a JMFC court.</p>', tags: ['≤ 3 years', '≤ ₹10,000 fine'] },
  'jm2nd': { label: 'Judicial Magistrate — Second Class', info: '<p>Can pass a sentence of imprisonment up to <strong>1 year</strong> and a fine not exceeding <strong>₹5,000</strong>, or both.</p><p>The lowest tier of criminal court. Tries minor offences only.</p>', tags: ['≤ 1 year', '≤ ₹5,000 fine'] },
  'high-court-civil': { label: 'High Court — Civil side', info: '<p>On the civil side, the High Court has both <strong>appellate</strong> jurisdiction (over District Court decisions) and <strong>original</strong> jurisdiction (over certain civil matters above a pecuniary threshold).</p><p>A medical-negligence damages claim of high value may originate here.</p>' },
  'district-court': { label: 'District Court / Civil Judge', info: "<p>The District Court is the <strong>highest civil court at the district level</strong>. It hears appeals from courts of subordinate civil judges and decides civil suits of higher pecuniary value (above the Munsif court's limit).</p><p>Most medical-negligence damages claims against doctors are filed here.</p>", tags: ['Highest civil court of district'] },

  /* ----- LP-02 ----- */
  'inquest-definition': { label: 'Inquest — Definition', info: '<p>An <strong>inquest</strong> is a legal inquiry or investigation conducted to ascertain the <strong>cause and circumstances of death</strong>.</p><p>It is held in any death that is:</p><ul><li>Sudden</li><li>Suspicious</li><li>Unnatural (homicide, suicide, accident, including RTAs)</li></ul><p>Four types exist worldwide; only <strong>Police and Magistrate inquests</strong> are practised in India.</p>' },
  'police-inquest': { label: 'Police Inquest', info: '<p>Most common type in India. The <strong>Investigating Officer (IO)</strong> — typically a Sub-Inspector or higher — receives information of a sudden / suspicious / unnatural death and proceeds to the scene.</p><p>In the presence of <strong>two or more responsible local persons (Panchas)</strong>, the IO records his observations and prepares a report called the <strong>Panchnama</strong>, which is signed by the IO and the Panchas.</p><p>The body is then sent to the government doctor for postmortem examination.</p>', tags: ['§174 CrPC → §194 BNSS', 'Panchnama'] },
  'magistrate-inquest': { label: 'Magistrate Inquest', info: '<p>Conducted by an <strong>Executive Magistrate</strong>. Has higher evidentiary weight than a police inquest because of the judicial standing of the officer.</p><p>Mandatory in:</p><ul><li>Death in <strong>police custody</strong></li><li><strong>Dowry death</strong> (within 7 yrs of marriage)</li><li><strong>Exhumation</strong> cases</li><li>Death in a <strong>psychiatric hospital</strong></li><li>Any other politically / legally sensitive case</li></ul>', tags: ['§176 CrPC → §196 BNSS', 'Higher evidentiary value'] },
  'coroner-inquest': { label: 'Coroner Inquest', info: '<p>A <strong>Coroner</strong> was an officer of the rank of First Class Magistrate appointed by the State Government — could be a doctor OR a lawyer.</p><p>The Coroner\'s court was a <strong>court of inquiry only</strong> — it could examine witnesses on oath and issue a <strong>verdict</strong> on cause of death, but could not try a case.</p><p>If the accused was unknown, the Coroner returned an <strong>"open verdict"</strong> — announcement of a crime without identification of the accused.</p><p>The system was <strong>abolished in Mumbai on 29 July 1999</strong>; Kolkata had abolished it earlier. It is no longer practised anywhere in India.</p>', tags: ['❌ Abolished', '"Open verdict"'] },
  'medical-examiner-system': { label: 'Medical Examiner System', info: '<p>An inquest conducted by a <strong>Medical Examiner</strong> — a qualified Forensic Pathologist (not a layperson or police officer).</p><p>Prevalent in most <strong>United States</strong> states. Considered the <strong>most scientific and superior</strong> inquest system because the determination of cause of death is made by a forensic specialist rather than a police officer or magistrate.</p><p><strong>Not followed in India.</strong> India\'s closest equivalent is the requirement that postmortem be done by a government doctor after a police / magistrate inquest.</p>', tags: ['USA', '❌ Not in India'] },

  /* ----- LP-03 ----- */
  'summons-document': { label: 'Summons — Document', info: '<p>A <strong>summons</strong> is a written order from a court directing a person to attend court on a specified date and time, either to give evidence or to produce documents.</p><p><strong>Essential contents:</strong></p><ol><li>Name and designation of the issuing court</li><li>Name and address of the person summoned</li><li>Date, time, and place of attendance</li><li>Purpose — give evidence OR produce documents</li><li>Signature of the presiding judge</li><li>Seal of the court</li></ol><p>Issued in <strong>duplicate</strong> — the original is served on the recipient; the duplicate is signed by him and returned to the court as proof of service.</p>', tags: ['Issued in duplicate', 'Foreign term: Subpoena'] },
  'witness-summons': { label: 'Witness Summons', info: '<p>Compels the recipient to <strong>attend court and give oral evidence</strong> about facts within his knowledge.</p><p>Foreign equivalent: <strong>"subpoena ad testificandum"</strong> (subpoena to testify).</p><p>A doctor receiving a witness summons is being called as an expert witness to depose on his medical findings (injuries, autopsy results, age estimation, etc.).</p><p>Disobedience without sufficient cause is punishable as contempt of court.</p>' },
  'production-summons': { label: 'Production Summons', info: '<p>Compels the recipient to <strong>produce specified documents or material objects</strong> before the court.</p><p>Foreign equivalent: <strong>"subpoena duces tecum"</strong> (subpoena to bring with you).</p><p>Documents typically required:</p><ul><li>Medicolegal Report (MLR)</li><li>Postmortem report</li><li>X-rays and lab reports</li><li>Case notes / hospital records</li><li>Viscera or other physical specimens (rare)</li></ul>' },
  'conduct-money': { label: 'Conduct Money', info: '<p>Conduct money is the sum paid to a witness summoned in court to cover his <strong>travelling and subsistence expenses</strong>.</p><p>The rule differs sharply between civil and criminal cases:</p><ul><li><strong>Civil cases:</strong> Conduct money is paid <strong>in advance</strong> at the time the summons is served.</li><li><strong>Criminal cases:</strong> <strong>No advance</strong> is paid — the government reimburses expenses <strong>after</strong> the witness has attended court.</li></ul><p>This rule is a frequent PG-exam favourite.</p>', tags: ['Civil = advance', 'Criminal = post-reimbursed'] },

  /* ----- LP-04 ----- */
  'medical-evidence-root': { label: 'Medical Evidence', info: '<p>Medical evidence is the evidence given by a medical practitioner in his professional capacity. It is classified into <strong>five types</strong>:</p><ol><li><strong>Documentary</strong> — written records (MLR, PM report, dying declaration)</li><li><strong>Oral</strong> — spoken testimony in court</li><li><strong>Real / material</strong> — physical objects (weapons, viscera)</li><li><strong>Hearsay</strong> — what was heard from another</li><li><strong>Circumstantial</strong> — indirect inference</li></ol><p>The first four are direct types; circumstantial evidence is inferential.</p>' },
  'documentary-evidence': { label: 'Documentary Evidence', info: '<p>Evidence in the form of <strong>documents produced before the court</strong>.</p><p>Examples relevant to medicolegal practice:</p><ul><li>Medical certificates (birth, death, age, fitness)</li><li>Medicolegal reports (MLR)</li><li>Postmortem reports</li><li>Dying declarations (admissible under <strong>BSA §26</strong>)</li><li>Affidavits</li><li>X-rays and lab reports</li></ul><p>Always admissible. The author of the document may be cross-examined on its contents.</p>' },
  'oral-evidence': { label: 'Oral Evidence', info: '<p>The <strong>statement made by a witness in court under oath</strong>.</p><p>It also includes:</p><ul><li>Signs and gestures of a witness who cannot speak</li><li>Written statement of a mute witness</li></ul><p>Generally regarded as the <strong>"best evidence"</strong> — the witness directly perceived the fact and can be cross-examined on the spot. This is the form in which a doctor most often gives evidence in court.</p>' },
  'real-evidence': { label: 'Real / Material Evidence', info: '<p>Physical objects produced before the court for examination.</p><p>Examples:</p><ul><li>Weapons (knives, guns)</li><li>Clothing of victim / accused</li><li>Bullets, cartridges, gunshot residue</li><li>Hair, fibres, body fluids</li><li>Viscera and other biological samples</li><li>Bloodstained articles</li></ul><p>Real evidence is the strongest type of direct evidence because the court physically inspects the object.</p>' },
  'hearsay-evidence': { label: 'Hearsay Evidence', info: '<p>What a witness has heard from <strong>another person</strong> about the matter in dispute. The original speaker is not present in court.</p><p><strong>Generally NOT admissible</strong> because the original speaker cannot be cross-examined.</p><p><strong>Recognised exceptions:</strong></p><ol><li><strong>Dying declaration</strong> (BSA §26 / old IEA §32) — dying person is presumed to speak the truth</li><li><strong>Res gestae</strong> — spontaneous statements forming part of the same transaction</li><li>Entries in <strong>public records</strong> (birth/death/marriage registers)</li><li><strong>Expert opinion in published textbooks</strong></li></ol>', tags: ['❌ Generally inadmissible', 'BSA §26 exception'] },
  'circumstantial-evidence': { label: 'Circumstantial Evidence', info: '<p>Indirect evidence from which the existence of a fact in dispute is <strong>inferred</strong>, rather than directly proved.</p><p>Medicolegal examples:</p><ul><li>Estimating <strong>time since death</strong> from rigor mortis, lividity, or temperature</li><li>Inferring the <strong>type of weapon</strong> from wound morphology</li><li>Inferring <strong>poisoning</strong> from autopsy stains (e.g., cherry-red lividity → CO poisoning)</li><li>Inferring <strong>manner of death</strong> from injury pattern</li></ul><p>Admissible — but the chain of inference must be unbroken and exclude alternative explanations.</p>' },

  /* ----- LP-05 ----- */
  'medical-certificates': { label: 'Medical Certificates', info: '<p>Written statements issued by any RMP (Registered Medical Practitioner) regarding:</p><ul><li>Birth</li><li>Death (mandatory before disposal of body)</li><li>Age</li><li>Sickness (sick leave)</li><li>Fitness (for school, job, sports)</li><li>Vaccination</li><li>Insanity</li></ul><p>Issuing a <strong>false certificate</strong> is treated as professional misconduct under the Indian Medical Council regulations and can lead to suspension or removal from the medical register.</p>' },
  'medicolegal-report': { label: 'Medicolegal Report (MLR)', info: '<p>A written report prepared by a doctor about a person <strong>referred by police</strong> for a medicolegal purpose.</p><p>Common types:</p><ul><li><strong>Injury report</strong> — for cases of assault, accident, hurt</li><li><strong>Sexual-assault examination</strong> — for victims and accused</li><li><strong>Drunkenness / intoxication report</strong> — under §185 MV Act and similar provisions</li><li><strong>Age estimation report</strong> — for juvenile/adult determination</li></ul><p>Prepared by the duty medical officer or government doctor. A copy is forwarded to police; the original is retained at the hospital. The MLR is admissible as documentary evidence.</p>' },
  'dying-declaration': { label: 'Dying Declaration', info: '<p>A statement — written or oral — made by a person <strong>who is dying</strong>, regarding the <strong>cause and circumstances of his impending death</strong>.</p><p><strong>Defining features:</strong></p><ul><li><strong>NO OATH</strong> is administered — based on the Latin maxim <em>"nemo moriturus praesumitur mentiri"</em> (no one about to die is presumed to lie)</li><li><strong>NO CROSS-EXAMINATION</strong></li><li>Becomes admissible <strong>only if the declarant dies</strong> afterwards</li></ul><p>Ideally recorded by a <strong>Magistrate</strong>; if not available, by a doctor or police officer.</p><p><strong>Legal basis:</strong> Section 26 of the Bharatiya Sakshya Adhiniyam, 2023 (old IEA §32) — an exception to the hearsay rule.</p>', tags: ['BSA §26 (old IEA §32)', '❌ No oath', '❌ No cross-exam'] },
  'dying-deposition': { label: 'Dying Deposition', info: '<p>A statement of a dying person <strong>recorded in the form of a court deposition</strong>.</p><p><strong>Distinguishing features (vs declaration):</strong></p><ul><li><strong>OATH IS ADMINISTERED</strong></li><li><strong>Accused or his pleader is PRESENT</strong></li><li><strong>CROSS-EXAMINATION is conducted</strong></li><li>Recorded only by a <strong>Magistrate</strong></li></ul><p>Because of these procedural safeguards, it carries <strong>higher evidentiary value</strong> than a dying declaration — effectively equivalent to a court deposition.</p><p><strong>When chosen:</strong> when the patient is too ill to attend court but is expected to live long enough for a formal deposition to be recorded.</p>', tags: ['✅ Oath', '✅ Cross-exam', 'Highest evidentiary value'] },

  /* ----- LP-06 ----- */
  'common-witness': { label: 'Common Witness (Witness of Fact)', info: '<p>A witness who deposes about <strong>facts seen, heard, or otherwise perceived</strong> by him.</p><p><strong>Critical rule:</strong> A common witness <strong>CANNOT give opinion</strong> — he is purely an observer of facts. Any opinion he offers may be objected to and disallowed.</p><p>Examples:</p><ul><li>A passer-by who witnessed a road traffic accident</li><li>A neighbour who heard a victim\'s cry</li><li>The Panchas signing a panchnama</li></ul><p>Examined on oath like any other witness.</p>' },
  'expert-witness': { label: 'Expert (Skilled) Witness', info: '<p>A person <strong>specially skilled</strong> in a particular branch of knowledge, who is <strong>permitted by law to give an opinion</strong> in court.</p><p><strong>Legal basis:</strong> Section 39 of the Bharatiya Sakshya Adhiniyam, 2023 (corresponds to old IEA §45) — opinions of persons skilled in <em>science, art, foreign law, handwriting, or finger impressions</em> are relevant facts.</p><p>Examples:</p><ul><li><strong>Forensic doctor</strong> (cause of death, injuries, age)</li><li>Ballistics expert (firearm identification)</li><li>Handwriting analyst</li><li>Psychiatrist (mental state, insanity)</li></ul><p><strong>Key point:</strong> A doctor appearing in court in his professional capacity is treated as an <strong>expert witness</strong> — this is the most testable point on this topic.</p>', tags: ['BSA §39 (old IEA §45)', '🏆 Doctor = Expert'] },
  'hostile-witness': { label: 'Hostile Witness', info: '<p>A witness who, after being called by one party, gives evidence <strong>against the case of the party that summoned him</strong>.</p><p><strong>Procedure:</strong></p><ol><li>During examination-in-chief, witness deposes contrary to the calling party\'s case.</li><li>Calling party applies to the court to <strong>declare the witness "hostile"</strong>.</li><li>If the court so declares, the calling party may then <strong>cross-examine its own witness</strong> as if he were the opposing party\'s witness — including using <strong>leading questions</strong>.</li></ol><p>Often arises in cases involving witness intimidation, inducement, or compromise between parties.</p>', tags: ['⚖️ Court must declare hostile first'] },

  /* ----- LP-07 ----- */
  'step-oath': { label: 'Step 1 — Oath', info: '<p>Before a witness deposes, the court administers an <strong>oath</strong>.</p><p>The witness swears: <em>"I shall speak the truth, the whole truth, and nothing but the truth."</em></p><p>Religious affirmation may be substituted (e.g., on the Gita, Bible, Quran, or a solemn affirmation) depending on the witness\'s preference.</p><p><strong>Refusal to take oath</strong> without sufficient cause is itself a punishable offence. Giving false evidence on oath is <strong>perjury</strong> (§229 BNS / old §193 IPC).</p>' },
  'step-exam-in-chief': { label: 'Step 2 — Examination-in-Chief', info: '<p>The <strong>first round</strong> of questioning, conducted by the party that <strong>called</strong> the witness.</p><p><strong>Purpose:</strong> to elicit facts that support the calling party\'s case.</p><p><strong>Rules:</strong></p><ul><li>Open-ended questions only — no leading</li><li><strong>Leading questions NOT allowed</strong> (except with court\'s permission, e.g., for hostile witness)</li><li>Witness should stick to his report, answer plainly, and refer to records only with the court\'s permission</li></ul>', tags: ['By: Calling party', '❌ Leading Q not allowed'] },
  'step-cross-examination': { label: 'Step 3 — Cross-Examination', info: '<p>The <strong>second round</strong>, conducted by the <strong>opposing party</strong>.</p><p><strong>Purpose:</strong> to <strong>test credibility</strong> of the witness, expose inconsistencies, and elicit any favourable facts.</p><p><strong>Rules:</strong></p><ul><li><strong>Leading questions ARE allowed</strong> — this is the only phase where they are routine</li><li>Scope is wide: may extend beyond what was said in examination-in-chief</li><li>Includes <strong>credit-testing</strong> — questioning about bias, motive, prior inconsistent statements</li></ul><p>This is regarded as <strong>the most important phase</strong> — the credibility of a witness stands or falls in cross-examination.</p>', tags: ['By: Opposing party', '✅ Leading Q allowed', '🎯 Credibility test'] },
  'step-re-examination': { label: 'Step 4 — Re-Examination', info: '<p>The <strong>third round</strong>, conducted again by the <strong>calling party</strong>.</p><p><strong>Purpose:</strong> to <strong>clarify points raised in cross-examination</strong> and rehabilitate the witness if necessary.</p><p><strong>Rules:</strong></p><ul><li><strong>Leading questions NOT allowed</strong></li><li>Scope is <strong>narrow</strong> — confined to matters arising in cross</li><li><strong>New matter</strong> can be introduced only with the <strong>court\'s permission</strong></li></ul>', tags: ['By: Calling party', '❌ Leading Q not allowed', 'Clarification only'] },
  'step-court-questions': { label: 'Step 5 — Court Questions', info: '<p>The judge may put any question directly to the witness <strong>at any stage</strong> of the deposition.</p><p>Such questions are intended to clarify points or elicit additional information that the court needs to arrive at a just decision.</p><p><strong>Critical rule:</strong> Court questions are <strong>not subject to objection</strong> by either party. The witness must answer; refusal without lawful excuse is contempt of court.</p>', tags: ['By: Judge', '✅ Leading Q allowed', 'No objection permitted'] },

  /* ----- LP-08 ----- */
  'leading-question': { label: 'Leading Question', info: '<p>A question that <strong>suggests its own answer</strong>.</p><p>Example: <em>"You were present at the scene, weren\'t you?"</em> The questioner is essentially feeding the answer.</p><p><strong>Where allowed:</strong></p><ul><li>✅ <strong>Cross-examination</strong> (the routine use)</li><li>✅ <strong>Court questions</strong> (by the judge)</li><li>✅ <strong>Examination-in-chief of a hostile witness</strong> (after court declares him hostile)</li></ul><p><strong>Where NOT allowed:</strong></p><ul><li>❌ Examination-in-chief (general rule)</li><li>❌ Re-examination</li></ul><p><strong>Memory pattern:</strong> Leading Qs are allowed when the <strong>opposing party</strong> (or the judge) asks. Not when the calling party asks.</p>', tags: ['✅ Cross-exam only', '🎯 Most-tested point'] },
  'hypothetical-question': { label: 'Hypothetical Question', info: '<p>A question based on <strong>assumed facts</strong> (already proved or expected to be proved) — used mainly to elicit an <strong>expert\'s opinion</strong>.</p><p>Example put to a forensic doctor: <em>"Doctor, if a stab wound of 10 cm depth is found in the chest, would it be fatal?"</em></p><p>The doctor is being asked to apply his expertise to an assumed scenario, not to facts he personally observed.</p><p>Such questions are permitted because they are the standard way to draw out opinion evidence from an expert.</p>' },
  'compound-question': { label: 'Compound Question', info: '<p>A single question that <strong>bundles two or more queries</strong> together.</p><p>Example: <em>"Did you see the accused, and did he have a knife?"</em> — two distinct questions packed into one.</p><p>Compound questions <strong>confuse the witness</strong> and produce an ambiguous "yes" or "no" that cannot be unambiguously linked to either part.</p><p>The judge may <strong>disallow</strong> a compound question and direct the lawyer to break it into two separate questions.</p>' },
  'indecent-question': { label: 'Indecent / Insulting Question', info: '<p>Questions about <strong>intimate, scandalous, or insulting</strong> matters unrelated to the case, OR questions meant to insult / harass the witness.</p><p><strong>Court\'s discretion:</strong></p><ul><li>The court <strong>MUST forbid</strong> indecent or scandalous questions that have <strong>no bearing on the facts in issue</strong>.</li><li>The court <strong>MAY allow</strong> indecent questions that <strong>relate</strong> to the facts in issue — for example, in a sexual-offence trial, intimate details ARE the issue and questions about them are permitted.</li></ul><p>Insulting or annoying questions are forbidden regardless of relevance.</p>' },

  /* ----- LP-09 ----- */
  'conduct-dos': { label: '✅ Conduct in Court — Do\'s', info: '<p>Professional conduct expected of a doctor on the witness stand:</p><ol><li><strong>Be punctual</strong> — arrive before the scheduled time</li><li><strong>Dress formally</strong> — convey professionalism</li><li>Address the court properly — "My Lord" / "Your Honour" in High Court & Supreme Court; "Sir" in subordinate courts</li><li>Carry MLR, postmortem report, and case notes</li><li>Refer to records only with the court\'s permission</li><li>Speak clearly and slowly, audible to the court and recording clerk</li><li>Answer only what is asked — confine to professional knowledge</li><li>Use plain language; explain medical terms when used</li><li>Take oath before deposing</li><li>Stay composed under cross-examination</li></ol><p>Mnemonic: <strong>PALACE</strong> — Punctual · Attire · Language · Answer · Carry · Explain.</p>' },
  'conduct-donts': { label: '❌ Conduct in Court — Don\'ts', info: '<p>What a doctor must NEVER do on the witness stand:</p><ol><li><strong>Don\'t lose temper</strong> under cross-examination, however provocative</li><li><strong>Don\'t argue</strong> with the lawyer or the judge</li><li><strong>Don\'t volunteer</strong> information not asked for</li><li><strong>Don\'t speculate</strong> beyond the evidence</li><li><strong>Don\'t disclose patient secrets</strong> without consent or court direction</li><li><strong>Don\'t take sides</strong> — remain neutral; doctor is expert, not advocate</li><li><strong>Don\'t refuse</strong> a court-directed question → <strong>CONTEMPT OF COURT</strong></li><li><strong>Don\'t give false evidence</strong> on oath → <strong>PERJURY</strong> under §229 BNS (old §193 IPC), up to 7 years + fine</li></ol><p>Mnemonic: <strong>NEVER</strong> — No temper · Evade nothing · No Volunteer · Exceed (don\'t) · Reveal (don\'t).</p>', tags: ['Perjury §229 BNS', 'Contempt of court'] }
};

/* ================================================================
   SHORT HELPERS for nodes per diagram (id → list of node-ids on that diagram)
   ================================================================ */
function nodeList(ids) { return ids.map(id => ({ nodeId: id, ...NODES[id] })); }

/* ================================================================
   MCQs — copied from chapter .md files
   ================================================================ */
const MCQS = {
  'LP-01': [
    { stem: 'Death sentence passed by a Sessions Court must be confirmed by which authority before execution?', options: ['Supreme Court','High Court','Chief Judicial Magistrate','Governor of the State'], answerIdx: 1, explain: 'Sessions Court may pass any sentence including death, but it is not executable until the High Court confirms it.', tag: '[PG-Inspired]' },
    { stem: 'The maximum term of imprisonment a Judicial Magistrate First Class can pass is:', options: ['1 year','3 years','7 years','10 years'], answerIdx: 1, explain: 'JMFC: up to 3 years + ₹10,000 fine. JM-2nd: 1 year / ₹5,000. CJM: 7 years. Asst Sessions: 10 years.', tag: '[PG-Inspired]' },
    { stem: 'Highest criminal court in a district is:', options: ['High Court','Sessions Court','Chief Judicial Magistrate Court','Judicial Magistrate First Class Court'], answerIdx: 1, explain: 'Sessions Court is the apex criminal court at the district level. High Court is state-level.', tag: '[UNIV]' },
    { stem: 'Maximum fine that can be imposed by a Judicial Magistrate Second Class is:', options: ['₹1,000','₹5,000','₹10,000','₹50,000'], answerIdx: 1, explain: 'JM-2nd Class: up to 1 year imprisonment and/or fine up to ₹5,000.', tag: '[UNIV]' },
    { stem: 'Highest court of appeal in India is:', options: ['High Court','Supreme Court','Sessions Court','Constitutional Bench'], answerIdx: 1, explain: 'The Supreme Court of India is the apex court — the final court of appeal.', tag: '[UNIV]' }
  ],
  'LP-02': [
    { stem: 'In the event of a death resulting from a road traffic accident, which authority is responsible for requesting an autopsy?', options: ['Forensic expert','Police','Lawyer','Forensic doctor'], answerIdx: 1, explain: 'Under police inquest, the IO (Sub-Inspector or above) takes cognizance of any sudden/unnatural death — including RTAs — and forwards the body for postmortem.', tag: '[NEET-PG 2024]' },
    { stem: 'Which of the following types of inquest is <strong>not</strong> practised in India?', options: ['Police inquest','Magistrate inquest','Coroner inquest','Both C and Medical Examiner system'], answerIdx: 3, explain: 'Only Police and Magistrate inquests are practised in India. Coroner\'s inquest was abolished (Mumbai, 29 July 1999); Medical Examiner system is followed in the USA.', tag: '[PG-Inspired]' },
    { stem: 'Magistrate inquest is mandatory in all the following situations <strong>except</strong>:', options: ['Death in police custody','Dowry death within 7 years of marriage','Death due to road traffic accident','Death in a psychiatric hospital'], answerIdx: 2, explain: 'RTA deaths are handled by police inquest. Magistrate inquest is reserved for custodial, dowry, exhumation, and psychiatric-hospital deaths.', tag: '[PG-Inspired]' },
    { stem: 'Police inquest is conducted under which section?', options: ['§174 CrPC','§176 CrPC','§175 CrPC','§173 CrPC'], answerIdx: 0, explain: '§174 CrPC (now §194 BNSS) governs police inquest. §176 CrPC (now §196 BNSS) governs Magistrate inquest.', tag: '[PG-Inspired]' },
    { stem: 'An "open verdict" returned by a Coroner means:', options: ['Coroner\'s court is open to public','Crime confirmed but accused unknown','No crime occurred','Body to be re-examined'], answerIdx: 1, explain: 'Open verdict = announcement of commission of crime without information regarding the accused.', tag: '[PG-Inspired]' }
  ],
  'LP-03': [
    { stem: 'Conduct money is paid to a witness in:', options: ['Criminal cases only','Civil cases only','Both civil and criminal cases','Only in Sessions Court cases'], answerIdx: 1, explain: 'Conduct money (advance travelling and subsistence) is paid only in <strong>civil</strong> cases. In criminal cases, expenses are reimbursed by the government after the witness attends.', tag: '[PG-Inspired]' },
    { stem: 'A summons that directs a doctor to bring specified medical records to court is called:', options: ['Witness summons','Production summons (subpoena duces tecum)','Notice','Cognizable warrant'], answerIdx: 1, explain: 'Witness summons → give oral evidence. Production summons (subpoena duces tecum) → produce documents.', tag: '[PG-Inspired]' },
    { stem: 'The Latin meaning of "subpoena" is:', options: ['"By the court"','"Under penalty"','"To be present"','"On the record"'], answerIdx: 1, explain: '"Sub poena" literally = under penalty — emphasising that disobedience is punishable.', tag: '[UNIV]' },
    { stem: 'A summons is <strong>not</strong> legally enforceable without:', options: ['Court seal and judge\'s signature','Name of opposing party','Conduct money attached','Police endorsement'], answerIdx: 0, explain: 'The seal of the issuing court and the signature of the presiding judicial officer are essential.', tag: '[UNIV]' }
  ],
  'LP-04': [
    { stem: 'Which of the following is <strong>generally inadmissible</strong> as evidence, with specific exceptions?', options: ['Documentary','Oral','Real','Hearsay'], answerIdx: 3, explain: 'Hearsay is generally inadmissible. Exceptions: dying declaration, res gestae, public records.', tag: '[PG-Inspired]' },
    { stem: 'A dying declaration is admissible as evidence under which section of the 2023 evidence code?', options: ['BSA §26','BSA §39','BSA §45','IEA §32'], answerIdx: 0, explain: 'BSA 2023 §26 (renumbered from IEA §32). Expert evidence sits under BSA §39 (old IEA §45).', tag: '[PG-Inspired]' },
    { stem: 'A postmortem report submitted to a court falls under which category of evidence?', options: ['Oral','Documentary','Real','Circumstantial'], answerIdx: 1, explain: 'PM report = document → documentary evidence. The viscera (separately attached) would be real evidence.', tag: '[UNIV]' },
    { stem: 'A weapon retrieved from a crime scene and produced in court is an example of:', options: ['Real evidence','Documentary evidence','Hearsay','Circumstantial'], answerIdx: 0, explain: 'Real (material) evidence = physical object produced before the court.', tag: '[UNIV]' },
    { stem: 'Determination of time since death from the degree of rigor mortis is an example of:', options: ['Documentary evidence','Oral evidence','Circumstantial evidence','Real evidence'], answerIdx: 2, explain: 'A fact (time of death) is inferred from another fact (degree of rigor) — circumstantial.', tag: '[PG-Inspired]' }
  ],
  'LP-05': [
    { stem: 'Which of the following is <strong>NOT</strong> required while recording a dying declaration?', options: ['Fit mental state of the declarant','Statement to be recorded in declarant\'s own words','Administration of oath','Signature / thumb impression of declarant'], answerIdx: 2, explain: 'No oath — the dying person is presumed to speak the truth ("nemo moriturus praesumitur mentiri").', tag: '[PG-Inspired]' },
    { stem: 'A dying declaration becomes admissible as evidence:', options: ['Immediately on being recorded','Only after the declarant dies','Only if recorded by a magistrate','Only in cases of poisoning'], answerIdx: 1, explain: 'Admissibility under BSA §26 is contingent on death. If declarant survives, it is treated as an ordinary statement.', tag: '[PG-Inspired]' },
    { stem: 'A dying deposition is recorded:', options: ['Without oath, by a doctor','On oath, in the presence of the accused or his lawyer, by a magistrate','Only after the patient has died','By police, in the police station'], answerIdx: 1, explain: 'Dying deposition = court-style recording with oath + cross-examination.', tag: '[PG-Inspired]' },
    { stem: 'A 56-year-old female victim of domestic violence is admitted to hospital with severe injuries. Her statement about the perpetrator is recorded. Under which section of the current evidence code is this dying declaration admissible if she dies?', options: ['BSA §26','BSA §39','BSA §45','BNSS §174'], answerIdx: 0, explain: 'BSA 2023 §26 (renumbered from IEA §32) governs dying declaration admissibility.', tag: '[QBank-Inspired]' }
  ],
  'LP-06': [
    { stem: 'A doctor giving evidence in court about the injuries he examined is appearing as a:', options: ['Common witness','Expert (skilled) witness','Hostile witness','Eyewitness'], answerIdx: 1, explain: 'Doctor in court = expert witness. Law permits him to give opinion (BSA §39 / old IEA §45).', tag: '[PG-Inspired]' },
    { stem: 'Expert evidence is admissible under which section of the 2023 evidence code?', options: ['BSA §26','BSA §39','BSA §45','IEA §32'], answerIdx: 1, explain: 'BSA 2023 §39 (renumbered from old IEA §45) covers expert opinions.', tag: '[PG-Inspired]' },
    { stem: 'When a witness, with the court\'s permission, is cross-examined by the very party that called him, he is termed a:', options: ['Common witness','Hostile witness','Expert witness','Eyewitness'], answerIdx: 1, explain: 'Hostile witness — deposed against the calling party; the court must formally declare him hostile.', tag: '[PG-Inspired]' }
  ],
  'LP-07': [
    { stem: 'While recording evidence in the court of law, lawyer asked the witness, "Were you present when A killed B?", and the witness answered "yes". This type of questioning is permitted in?', options: ['Examination in chief','Direct examination','Redirect examination','Cross examination'], answerIdx: 3, explain: 'The question "Were you present when A killed B?" suggests its own answer → <strong>leading question</strong>. Allowed only in cross-examination (and from the judge).', tag: '[NEET-PG 2021]' },
    { stem: 'During the court proceedings, the defense lawyer asks a leading question, which the prosecutor appeals against. The judge grants the appeal. Leading questions are not allowed in all of the following except?', options: ['Re-examination','Cross-examination','Examination in chief','Dying declaration'], answerIdx: 1, explain: 'Leading Qs are NOT allowed in examination-in-chief and re-examination, but ARE allowed in cross-examination — that\'s the exception.', tag: '[NEET-PG 2022]' },
    { stem: 'The correct sequence of phases of witness examination in court is:', options: ['Oath → Cross-examination → Examination-in-chief → Re-examination','Oath → Examination-in-chief → Cross-examination → Re-examination','Examination-in-chief → Oath → Cross-examination → Re-examination','Examination-in-chief → Re-examination → Cross-examination → Oath'], answerIdx: 1, explain: 'Oath first; calling party does examination-in-chief; opposing party cross-examines; calling party re-examines (clarification only). Judge may interject at any stage.', tag: '[PG-Inspired]' },
    { stem: 'Re-examination is permitted to:', options: ['Introduce entirely new evidence','Clarify points raised in cross-examination','Discredit the cross-examiner','Replace the oath'], answerIdx: 1, explain: 'Restricted to clarification of cross-exam material. Introduction of new matter requires court\'s leave.', tag: '[PG-Inspired]' },
    { stem: 'The primary purpose of cross-examination is to:', options: ['Establish facts of the case','Test credibility of the witness','Permit re-examination','Replace direct examination'], answerIdx: 1, explain: 'Cross-exam = credibility test phase. Examination-in-chief = elicit favourable facts. Re-exam = clarify cross.', tag: '[PG-Inspired]' }
  ],
  'LP-08': [
    { stem: '"Doctor, if a stab wound of 5 cm depth is found in the chest, would it be fatal?" — This is an example of:', options: ['Leading question','Hypothetical question','Compound question','Indecent question'], answerIdx: 1, explain: 'Based on assumed facts, used to elicit expert opinion → hypothetical question.', tag: '[PG-Inspired]' },
    { stem: 'A question that bundles two or more queries into one, liable to be disallowed by the court, is:', options: ['Compound question','Leading question','Recall question','Insulting question'], answerIdx: 0, explain: 'Compound questions confuse the witness — may be disallowed.', tag: '[UNIV]' },
    { stem: 'Leading questions are <strong>NOT</strong> allowed in:', options: ['Cross-examination','Examination-in-chief','Court questions','Recall by court'], answerIdx: 1, explain: 'Leading Q: not allowed in examination-in-chief and re-examination. Allowed in cross-examination and from the judge.', tag: '[PG-Inspired]' }
  ],
  'LP-09': [
    { stem: 'Punishment for perjury is under which section of IPC?', options: ['Sec 191','Sec 192','Sec 193','Sec 197'], answerIdx: 2, explain: 'Perjury = giving false evidence on oath. IPC §193 (renumbered as BNS §229) prescribes imprisonment up to 7 years + fine.', tag: '[NEET-PG 2020]' },
    { stem: 'Punishment for perjury is under which section IPC?', options: ['Sec 193','Sec 191','Sec 197','Sec 190'], answerIdx: 0, explain: '§193 IPC / §229 BNS — punishment for giving false evidence.', tag: '[NEET-PG 2019]' },
    { stem: 'A doctor in court refuses to answer a question that the judge has directed him to answer. He has committed:', options: ['Perjury','Contempt of court','Professional misconduct','Breach of secrecy'], answerIdx: 1, explain: 'Refusal to answer a court-directed question = contempt of court. Perjury is giving false evidence on oath.', tag: '[PG-Inspired]' },
    { stem: 'A doctor may refer to his case notes while deposing:', options: ['Without any permission','Only with the court\'s permission','Only if the opposing lawyer permits','Never'], answerIdx: 1, explain: 'Doctor should carry his records but may consult them while deposing only after obtaining the court\'s permission.', tag: '[UNIV]' }
  ]
};

/* ================================================================
   DIFF-TABLES (from .md files)
   ================================================================ */
const DIFF_TABLES = [
  {
    id: 'DT-1', title: 'Civil Court vs Criminal Court', shortTitle: 'Civil vs Criminal',
    columns: ['Feature','Civil Court','Criminal Court'],
    rows: [
      ['Nature of dispute','Private disputes (property, contract, family, tort)','Offences against the state (theft, hurt, murder, rape)'],
      ['Initiated by','Plaint filed by the aggrieved party','FIR / complaint to police; state prosecutes'],
      ['Parties','Plaintiff vs Defendant','State (prosecution) vs Accused'],
      ['Highest district court','District Court','Sessions Court'],
      ['Burden of proof','Preponderance of probability','<strong>Beyond reasonable doubt</strong>'],
      ['Outcome','Decree (monetary, injunction, declaration)','Sentence (imprisonment, fine, death)'],
      ['Conduct money','Paid to witness in advance','Govt reimburses after attendance'],
      ['Examples','Land disputes, divorce, medical-negligence damages claim','Murder, rape, grievous hurt, theft, criminal negligence']
    ],
    parentDiagrams: ['LP-01','LP-03'],
    mcqs: [
      { stem: 'Burden of proof in a criminal trial is:', options: ['Preponderance of probability','Beyond reasonable doubt','Balance of convenience','On both parties equally'], answerIdx: 1, explain: 'Criminal: beyond reasonable doubt. Civil: preponderance of probability.', tag: '[UNIV]' },
      { stem: 'Conduct money is paid to a witness in:', options: ['Civil cases','Criminal cases','Both','Neither'], answerIdx: 0, explain: 'Civil cases → conduct money paid in advance. Criminal cases → govt reimburses afterwards.', tag: '[PG-Inspired]' },
      { stem: 'Which of the following matters is heard in a criminal court?', options: ['Recovery of debt','Divorce','Grievous hurt','Property dispute'], answerIdx: 2, explain: 'Grievous hurt = offence against state → criminal court.', tag: '[UNIV]' }
    ]
  },
  {
    id: 'DT-2', title: 'Cognizable vs Non-cognizable Offence', shortTitle: 'Cognizable vs Non-cognizable',
    columns: ['Feature','Cognizable','Non-cognizable'],
    rows: [
      ['Definition','Serious offence where police may arrest <strong>without warrant</strong>','Less serious offence; police <strong>need a warrant</strong>'],
      ['Police powers','Investigate without magistrate\'s order','Need magistrate\'s permission'],
      ['Typical examples','Murder, rape, grievous hurt, dacoity, kidnapping, dowry death','Simple hurt, defamation, public nuisance, criminal trespass'],
      ['Severity / Punishment','Generally ≥ 3 years imprisonment','Generally &lt; 3 years'],
      ['FIR registration','Mandatory — police MUST register FIR','Optional — "Non-Cognizable Report"'],
      ['Bail','Often non-bailable','Usually bailable']
    ],
    parentDiagrams: ['LP-01','LP-02'],
    mcqs: [
      { stem: 'A cognizable offence is one in which:', options: ['Police can arrest without warrant','Police need a magistrate\'s warrant to arrest','Bail is automatically granted','Trial is in a civil court'], answerIdx: 0, explain: 'Cognizable = police can take cognizance directly. Serious offences (murder, rape, dacoity).', tag: '[UNIV]' },
      { stem: 'Which of the following is a cognizable offence?', options: ['Simple hurt','Defamation','Murder','Public nuisance'], answerIdx: 2, explain: 'Murder = heinous offence → cognizable, non-bailable, tried in Sessions Court.', tag: '[UNIV]' },
      { stem: 'A non-cognizable offence requires:', options: ['No police involvement','Magistrate\'s order before police can investigate / arrest','Sessions Court trial','Coroner\'s inquest'], answerIdx: 1, explain: 'In non-cognizable offences, police must obtain magistrate\'s permission to investigate.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-3', title: 'Bailable vs Non-bailable Offence', shortTitle: 'Bailable vs Non-bailable',
    columns: ['Feature','Bailable','Non-bailable'],
    rows: [
      ['Definition','Bail is a <strong>matter of right</strong>','Bail is <strong>not a right</strong> — discretion of the court'],
      ['Granting authority','Police or court — must grant on application','Only court can grant; usually denied for serious offences'],
      ['Examples','Simple hurt, defamation, public nuisance, criminal trespass','Murder (BNS §103), rape (BNS §63), dacoity, dowry death'],
      ['Severity','Less serious','Serious — generally cognizable too'],
      ['Police power','Must release on bail once bond is furnished','Cannot grant bail — must produce before magistrate']
    ],
    parentDiagrams: ['LP-01','LP-02'],
    mcqs: [
      { stem: 'In a bailable offence:', options: ['Bail is a matter of right for the accused','Bail is at the discretion of the police only','Bail can never be granted','Bail is granted only after trial'], answerIdx: 0, explain: 'Bailable = bail is a right. Non-bailable = discretionary.', tag: '[UNIV]' },
      { stem: 'Which of the following is a non-bailable offence?', options: ['Defamation','Murder','Simple hurt','Public nuisance'], answerIdx: 1, explain: 'Murder (BNS §103) is heinous → non-bailable, cognizable, tried in Sessions Court.', tag: '[UNIV]' },
      { stem: 'Bail in a non-bailable offence:', options: ['Cannot be granted under any circumstances','Can be granted only by the court, at its discretion','Is granted only by police','Is automatic after 7 days'], answerIdx: 1, explain: 'Police cannot grant bail in non-bailable offences — only the court.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-4', title: 'Summons vs Subpoena', shortTitle: 'Summons vs Subpoena',
    intro: 'Functionally the same document, named differently in different jurisdictions. Exam value lies in knowing the equivalence and the sub-types.',
    columns: ['Feature','Summons (Indian)','Subpoena (foreign)'],
    rows: [
      ['Etymology','Latin "to call"','Latin "sub poena" = <strong>"under penalty"</strong>'],
      ['Jurisdiction','Indian courts — standard term','UK, USA, common-law countries'],
      ['Function','Written court order to attend / produce','Same'],
      ['Sub-types','Witness summons + Production summons','"Subpoena ad testificandum" (witness) + "Subpoena duces tecum" (production)'],
      ['Issued by','Court — signed by judge, court seal','Same formalities'],
      ['Disobedience','Punishable as contempt of court','Punishable; "under penalty" emphasises this']
    ],
    parentDiagrams: ['LP-03'],
    mcqs: [
      { stem: '"Subpoena duces tecum" refers to:', options: ['Witness summons','Production summons','Arrest warrant','Search warrant'], answerIdx: 1, explain: '"Duces tecum" = bring with you. Production summons.', tag: '[PG-Inspired]' },
      { stem: 'The Latin meaning of "subpoena" is:', options: ['"By the court"','"Under penalty"','"To be present"','"On the record"'], answerIdx: 1, explain: '"Sub poena" = under penalty.', tag: '[UNIV]' }
    ]
  },
  {
    id: 'DT-5', title: 'Police vs Magistrate vs Coroner Inquest', shortTitle: 'Inquest types (3-way)',
    columns: ['Feature','Police Inquest','Magistrate Inquest','Coroner Inquest'],
    rows: [
      ['Conducted by','Investigating Officer (≥ Sub-Inspector)','Executive Magistrate','Coroner (1st Class Magistrate)'],
      ['Legal basis','<strong>§174 CrPC</strong> → §194 BNSS','<strong>§176 CrPC</strong> → §196 BNSS','Coroner\'s Act'],
      ['When mandatory','Sudden / suspicious / unnatural deaths (RTAs, burns)','Custodial / dowry / exhumation / psychiatric','(historical)'],
      ['Report','<strong>Panchnama</strong> (IO + 2 Panchas)','Magistrate\'s inquest report','<strong>Verdict</strong> — "open verdict" if accused unknown'],
      ['Evidentiary weight','Lower','<strong>Higher (judicial)</strong>','Court of inquiry only'],
      ['Status in India','✅ Practised — most common','✅ Practised','❌ Abolished — Mumbai 29 July 1999']
    ],
    parentDiagrams: ['LP-02'],
    mcqs: [
      { stem: 'Police inquest is conducted under:', options: ['§174 CrPC / §194 BNSS','§176 CrPC / §196 BNSS','§172 CrPC','Coroner\'s Act'], answerIdx: 0, explain: '§174 CrPC (→ §194 BNSS). §176 (→ §196 BNSS) for Magistrate inquest.', tag: '[PG-Inspired]' },
      { stem: 'A custodial death must be subjected to:', options: ['Police inquest','Magistrate inquest','Coroner inquest','Medical Examiner system'], answerIdx: 1, explain: 'Magistrate inquest is mandatory in custodial death, dowry death (&lt; 7 yrs), exhumation, psychiatric-hospital death.', tag: '[PG-Inspired]' },
      { stem: 'Coroner\'s inquest was abolished in Mumbai in the year:', options: ['1989','1995','1999','2005'], answerIdx: 2, explain: 'Last Coroner\'s court in India (Mumbai) abolished 29 July 1999.', tag: '[UNIV]' }
    ]
  },
  {
    id: 'DT-6', title: 'Documentary vs Oral vs Hearsay Evidence', shortTitle: 'Evidence types (3-way)',
    columns: ['Feature','Documentary','Oral','Hearsay'],
    rows: [
      ['Definition','Documents produced before court','Statement of witness in court under oath','What witness heard from another person'],
      ['Examples','MLR, PM report, dying declaration, X-rays','Doctor\'s oral testimony','Friend\'s report of victim\'s statement'],
      ['Admissibility','✅ Admissible','✅ <strong>Best evidence</strong>','❌ Generally <strong>NOT</strong> admissible'],
      ['Cross-examination of source','Yes (author)','Yes (witness)','Often impossible'],
      ['Exceptions','—','—','<strong>Dying declaration, res gestae, public records, expert textbooks</strong>']
    ],
    parentDiagrams: ['LP-04','LP-05'],
    mcqs: [
      { stem: 'Hearsay evidence is generally inadmissible, but the following is an admitted exception:', options: ['Affidavit','Dying declaration','Police investigation report','Medical certificate'], answerIdx: 1, explain: 'Dying declaration is admissible under BSA §26.', tag: '[PG-Inspired]' },
      { stem: 'A doctor\'s deposition in court is which type of evidence?', options: ['Documentary','Oral','Hearsay','Real'], answerIdx: 1, explain: 'Spoken testimony = oral evidence. PM report itself = documentary.', tag: '[UNIV]' },
      { stem: '"Res gestae" admission exception applies to:', options: ['Statements forming part of the same transaction, made spontaneously','Statements made after deliberation','Statements made by experts only','Statements admitting guilt'], answerIdx: 0, explain: 'Res gestae = spontaneous statements so close in time that fabrication is unlikely.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-7', title: 'Common vs Expert vs Hostile Witness', shortTitle: 'Witness types (3-way)',
    columns: ['Feature','Common Witness','Expert Witness','Hostile Witness'],
    rows: [
      ['Definition','Deposes about facts seen/heard/perceived','Specially skilled in subject; gives opinion','Witness who turns against the calling party'],
      ['Can give opinion?','❌ <strong>No</strong>','✅ <strong>Yes</strong> (within expertise)','Depends'],
      ['Legal basis','—','<strong>BSA §39</strong> (old IEA §45)','—'],
      ['Oath required','✅ Yes','✅ Yes','✅ Yes'],
      ['Cross-examined by','Opposing party','Opposing party','Opposing party — <strong>and own side</strong> with court permission'],
      ['Examples','Eyewitness to accident, panchas','Forensic doctor, ballistics expert','Complainant denying police version']
    ],
    parentDiagrams: ['LP-06'],
    mcqs: [
      { stem: 'A common witness in court:', options: ['Can give opinion in his area of interest','Can only state facts perceived by him','Is the same as an expert witness','Cannot be cross-examined'], answerIdx: 1, explain: 'Common witness = facts only, no opinion.', tag: '[UNIV]' },
      { stem: 'A doctor appearing in court is considered which type of witness?', options: ['Common','Expert (skilled)','Hostile','Eyewitness'], answerIdx: 1, explain: 'Doctor is permitted to give opinion under BSA §39 (old IEA §45).', tag: '[PG-Inspired]' },
      { stem: 'A witness can be cross-examined by the party that called him only after:', options: ['Re-examination','The witness has been declared "hostile" by the court','Permission from the police','The opposing party agrees'], answerIdx: 1, explain: 'Only after the court formally declares the witness hostile.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-8', title: 'Examination-in-Chief vs Cross-Examination vs Re-Examination', shortTitle: 'Examination phases (3-way)',
    columns: ['Feature','Examination-in-Chief','Cross-Examination','Re-Examination'],
    rows: [
      ['Conducted by','The <strong>calling</strong> party','The <strong>opposing</strong> party','The <strong>calling</strong> party (again)'],
      ['Sequence','1st (after oath)','2nd','3rd'],
      ['Purpose','Elicit facts supporting calling party\'s case','<strong>Test credibility</strong>','Clarify matters raised in cross'],
      ['Leading questions','❌ <strong>NOT allowed</strong>','✅ <strong>ALLOWED</strong>','❌ <strong>NOT allowed</strong>'],
      ['Scope','Wide — any relevant fact','Wide — extends beyond chief','<strong>Narrow</strong> — confined to cross']
    ],
    parentDiagrams: ['LP-07','LP-08'],
    mcqs: [
      { stem: 'Leading questions are permitted in:', options: ['Examination-in-chief','Cross-examination only','Re-examination','All three phases'], answerIdx: 1, explain: 'Leading Qs allowed only in cross-examination (and judge\'s questions).', tag: '[PG-Inspired]' },
      { stem: 'Re-examination is conducted by:', options: ['The opposing party, to discredit the witness','The calling party, to clarify points raised in cross-examination','The judge directly','The calling party, to introduce new evidence'], answerIdx: 1, explain: 'Re-exam = calling party again, restricted to cross-exam material.', tag: '[PG-Inspired]' },
      { stem: 'The primary purpose of cross-examination is to:', options: ['Confirm the witness\'s case','Test the credibility of the witness','Take a sworn statement','Establish the doctor\'s qualifications'], answerIdx: 1, explain: 'Cross-exam = credibility test phase.', tag: '[UNIV]' }
    ]
  },
  {
    id: 'DT-9', title: 'Dying Declaration vs Dying Deposition', shortTitle: 'DD vs DD',
    intro: 'The single most-tested differentiation in Legal Procedure. Master this table = master an exam favourite.',
    columns: ['Feature','Dying Declaration','Dying Deposition'],
    rows: [
      ['Definition','Statement of dying person re: cause of his death','Statement of dying person in court-deposition format'],
      ['Recorded by','Magistrate (ideal) → otherwise doctor / police','<strong>Magistrate only</strong>'],
      ['Oath','❌ <strong>NOT required</strong> — "nemo moriturus praesumitur mentiri"','✅ <strong>Required</strong>'],
      ['Accused / pleader present?','❌ NOT present','✅ <strong>Present</strong>'],
      ['Cross-examination?','❌ NOT done','✅ <strong>Done</strong>'],
      ['Validity','Admissible <strong>only if declarant dies</strong>','Admissible regardless'],
      ['Evidentiary weight','Strong but with caveats','<strong>Higher</strong> — equivalent to court deposition'],
      ['Legal basis','<strong>BSA §26 (2023)</strong> · old IEA §32','Procedural']
    ],
    parentDiagrams: ['LP-05'],
    mcqs: [
      { stem: 'Which of the following is the <strong>defining difference</strong> between a dying declaration and a dying deposition?', options: ['Patient\'s condition','Oath + cross-examination','Recording paper used','Doctor\'s involvement'], answerIdx: 1, explain: 'Dying declaration → no oath, no cross-exam. Dying deposition → oath + cross-exam.', tag: '[PG-Inspired]' },
      { stem: 'A dying declaration is admissible:', options: ['Even if the declarant survives','Only if the declarant dies','Only if recorded by a magistrate','Only in cases of poisoning'], answerIdx: 1, explain: 'BSA §26 (old IEA §32): admissibility contingent on death.', tag: '[PG-Inspired]' },
      { stem: 'Which has higher evidentiary value?', options: ['Dying declaration','Dying deposition','Both equal','Depends on the court'], answerIdx: 1, explain: 'Dying deposition — includes oath + cross-examination.', tag: '[PG-Inspired]' }
    ]
  }
];

/* ================================================================
   SUBJECTIVE Q-BANK (from subject_subjective_qbank.md)
   ================================================================ */
const SUBJ = [
  {
    id: 'SAQ-1.1', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'A 56-year-old female victim of domestic violence is admitted to the hospital with severe injuries. What is the procedure undertaken as per the Bharatiya Sakshya Adhiniyam (relevant section)? <em>(Dying Declaration / Medical Evidence)</em>',
    answer: `<h4>Identification of the procedure</h4>
<p>The procedure that applies is the recording of a <strong>dying declaration</strong> — a statement, oral or written, made by a person under the apprehension of death, regarding the cause and circumstances of her death. It is admissible as an exception to the hearsay rule under <strong>section 26 of the Bharatiya Sakshya Adhiniyam, 2023</strong> (earlier IEA §32).</p>
<h4>Legal basis &amp; rationale</h4>
<p>BSA §26 makes such a statement a relevant fact in any proceeding where the cause of death comes into question. Oath is not administered because of the maxim <em>"nemo moriturus praesumitur mentiri"</em> — no one about to die is presumed to lie.</p>
<h4>Step-by-step procedure</h4>
<ol><li><strong>Assess mental fitness</strong> — treating doctor certifies the patient is conscious, oriented, fit to make a statement.</li>
<li><strong>Inform a Magistrate</strong> (most authoritative recorder). If unavailable, doctor or police officer can record.</li>
<li><strong>Bedside setting</strong> — privacy ensured; relatives excluded; patient not coached.</li>
<li><strong>Record in patient\'s own words</strong> — Q&amp;A or free narrative; preferably in her language. <strong>No oath.</strong></li>
<li><strong>Authentication</strong> — read back to patient → signature/thumb impression → magistrate signs → doctor counter-signs certifying patient remained conscious throughout.</li>
<li><strong>Documentation</strong> — original to court, copy retained, fitness certificate preserved.</li></ol>
<h4>Admissibility caveats</h4>
<ul><li>Admissible <strong>only if she dies</strong>. If she survives, treated as ordinary statement.</li><li>Mental fitness at recording = lynchpin.</li><li>Multiple contradictory statements weaken weight.</li></ul>
<h4>Dying declaration vs dying deposition</h4>
<p>If circumstances permit a more formal recording with the accused or his pleader present, and cross-examination is conducted, the document is a <strong>dying deposition</strong> — taken on oath, higher evidentiary value than a dying declaration.</p>`,
    sources: ['LP-05 (Documentary Evidence Subtypes)','DT-9 (Dying Declaration vs Deposition)'],
    jumpToDiagram: 'LP-05'
  },
  {
    id: 'SAQ-1.2', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Describe the procedure of recording of evidence in the Court of Law.',
    answer: `<p>A witness summoned to a court of law in India undergoes a fixed five-stage procedure governed by procedural law and the Bharatiya Sakshya Adhiniyam, 2023.</p>
<h4>Step 1 — Identification and oath</h4>
<ul><li>Witness\'s name, age, occupation, address recorded.</li><li>Oath administered: "I shall speak the truth, the whole truth, and nothing but the truth."</li><li>A doctor is treated as an <strong>expert (skilled) witness</strong> under §39 BSA (old §45 IEA).</li></ul>
<h4>Step 2 — Examination-in-chief</h4>
<ul><li>Conducted by the party that <strong>called</strong> the witness.</li><li>Purpose: elicit favourable facts.</li><li><strong>Leading questions NOT allowed</strong> (except with court\'s permission).</li></ul>
<h4>Step 3 — Cross-examination</h4>
<ul><li>By the opposing party.</li><li>Purpose: <strong>test credibility</strong>, expose inconsistencies, elicit favourable facts.</li><li><strong>Leading questions ALLOWED.</strong></li><li>Most critical phase — credibility stands or falls here.</li></ul>
<h4>Step 4 — Re-examination</h4>
<ul><li>By the calling party again.</li><li>Purpose: clarify points raised in cross.</li><li><strong>Leading questions NOT allowed.</strong></li><li>New matter only with court\'s permission.</li></ul>
<h4>Step 5 — Court questions</h4>
<ul><li>Judge may ask any question at <strong>any stage</strong>; not subject to objection.</li></ul>
<h4>Special: Hostile witness</h4>
<p>If witness gives evidence against the calling party, the court may declare him hostile; calling party may then cross-examine its own witness.</p>
<h4>Conduct of doctor</h4>
<p>Be punctual, dress formally, address court ("My Lord"/"Your Honour"/"Sir"), carry MLR/PM report, refer only with permission, speak clearly, answer only what is asked. Do not lose temper, do not volunteer, do not speculate, do not disclose patient secrets without consent / court order, do not refuse court-directed Qs (= contempt), do not give false evidence (= <strong>perjury §229 BNS / old §193 IPC</strong>, up to 7 years + fine).</p>
<p><strong>Mnemonic: OECRC</strong> — Oath → Examination-in-chief → Cross → Re-exam → Court Qs.</p>`,
    sources: ['LP-07 (Witness Examination)','LP-08 (Question Types)','LP-09 (Conduct of Doctor)','DT-8 (Examination Phases)'],
    jumpToDiagram: 'LP-07'
  },
  {
    id: 'LAQ-1.1', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank-Inspired',
    question: '(a) Classify the courts in India. (b) Differentiate between civil and criminal courts. (c) Mention the powers of various criminal courts to impose sentence.',
    answer: `<h4>(a) Hierarchy of courts in India</h4>
<p>Two streams that converge at the Supreme Court — civil and criminal.</p>
<p><strong>Criminal (top → bottom):</strong> Supreme Court → High Court → Sessions Court / Additional Sessions Court → Assistant Sessions Court → Chief Judicial / Chief Metropolitan Magistrate → Judicial / Metropolitan Magistrate (First Class) → Judicial Magistrate (Second Class).</p>
<p><strong>Civil (top → bottom):</strong> Supreme Court → High Court (civil side) → District Court (Civil Judge) → subordinate civil judges.</p>
<h4>(b) Civil vs Criminal courts</h4>
<table><tr><th>Feature</th><th>Civil</th><th>Criminal</th></tr>
<tr><td>Dispute</td><td>Private</td><td>Against the state</td></tr>
<tr><td>Initiated by</td><td>Plaint</td><td>FIR; state prosecutes</td></tr>
<tr><td>Parties</td><td>Plaintiff vs Defendant</td><td>State vs Accused</td></tr>
<tr><td>Burden of proof</td><td>Preponderance</td><td><strong>Beyond reasonable doubt</strong></td></tr>
<tr><td>Outcome</td><td>Decree/compensation</td><td>Imprisonment/fine/death</td></tr></table>
<h4>(c) Sentencing powers</h4>
<table><tr><th>Court</th><th>Maximum sentence</th></tr>
<tr><td>Sessions / Additional Sessions</td><td><strong>Any sentence</strong> incl. death (HC confirms)</td></tr>
<tr><td>Assistant Sessions</td><td>10 years; no death / no life</td></tr>
<tr><td>CJM / CMM</td><td>7 years + fine; no death / no life</td></tr>
<tr><td>JM-1st / MM</td><td>3 years + ₹10,000 fine</td></tr>
<tr><td>JM-2nd</td><td>1 year + ₹5,000 fine</td></tr></table>
<p><strong>Note:</strong> A death sentence is never executable until confirmed by the High Court, regardless of which court passed it.</p>`,
    sources: ['LP-01 (Court Hierarchy)','DT-1 (Civil vs Criminal Court)'],
    jumpToDiagram: 'LP-01'
  },
  {
    id: 'SAQ-1.3', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Define inquest. Enumerate the types of inquest. Mention which types are practised in India and the legal sections under which they are held.',
    answer: `<h4>Definition</h4>
<p>An inquest is a legal inquiry conducted to ascertain the <strong>cause and circumstances of a death</strong> that is sudden, suspicious, or unnatural.</p>
<h4>Four types</h4>
<table><tr><th>Type</th><th>Conducted by</th><th>Legal section</th><th>India status</th></tr>
<tr><td>Police inquest</td><td>IO (≥ Sub-Inspector)</td><td>§174 CrPC → §194 BNSS</td><td>✅ Most common</td></tr>
<tr><td>Magistrate inquest</td><td>Executive Magistrate</td><td>§176 CrPC → §196 BNSS</td><td>✅ Practised</td></tr>
<tr><td>Coroner inquest</td><td>Coroner (1st Class Magistrate)</td><td>Coroner\'s Act</td><td>❌ Abolished (Mumbai 29-Jul-1999)</td></tr>
<tr><td>Medical Examiner</td><td>Forensic Pathologist</td><td>US statutes</td><td>❌ Not in India (USA)</td></tr></table>
<h4>Police inquest — practical details</h4>
<p>IO receives info → reaches scene → records observations in presence of 2+ Panchas → prepares <strong>Panchnama</strong> → forwards body to government doctor for PM.</p>
<h4>Magistrate inquest — mandatory in</h4>
<ul><li>Police custody death</li><li>Dowry death (within 7 yrs of marriage)</li><li>Exhumation</li><li>Death in psychiatric hospital</li></ul>
<h4>Coroner inquest (historical)</h4>
<p>Coroner could be doctor or lawyer. Examined witnesses on oath, issued verdict on cause of death. "Open verdict" = crime confirmed but accused unknown. Abolished in Kolkata earlier; in Mumbai on 29 July 1999.</p>
<p><strong>Mnemonic — "PoMaCoMe"</strong> in descending order of India relevance.</p>`,
    sources: ['LP-02 (Inquest Types)','DT-5 (Inquest 3-way)'],
    jumpToDiagram: 'LP-02'
  },
  {
    id: 'SAQ-1.4', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Define summons. Describe its types, essential contents, and the concept of conduct money.',
    answer: `<h4>Definition</h4>
<p>A summons is a <strong>written order issued by a court</strong> directing a person to appear before it on a specified date and time, either to give evidence or to produce a document. Foreign equivalent: <strong>subpoena</strong> ("under penalty").</p>
<h4>Essential contents</h4>
<ol><li>Name + designation of issuing court</li><li>Name + address of person summoned</li><li>Date, time, place of attendance</li><li>Purpose — give evidence or produce documents</li><li>Signature of judge + court seal</li><li>Issued in duplicate</li></ol>
<h4>Types</h4>
<table><tr><th>Type</th><th>Purpose</th><th>Foreign term</th></tr>
<tr><td>Witness summons</td><td>Attend &amp; give oral evidence</td><td>Subpoena ad testificandum</td></tr>
<tr><td>Production summons</td><td>Produce documents/objects</td><td>Subpoena duces tecum</td></tr></table>
<h4>Conduct money</h4>
<table><tr><th>Setting</th><th>Rule</th></tr>
<tr><td><strong>Civil cases</strong></td><td>Paid <strong>in advance</strong> to cover travel + subsistence</td></tr>
<tr><td><strong>Criminal cases</strong></td><td><strong>No advance</strong> — government reimburses after attendance</td></tr></table>
<p><strong>Disobedience</strong> of a duly served summons = contempt of court.</p>`,
    sources: ['LP-03 (Summons anatomy)','DT-4 (Summons vs Subpoena)'],
    jumpToDiagram: 'LP-03'
  },
  {
    id: 'SAQ-1.5', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank-Inspired',
    question: 'Classify medical evidence. Define each type with examples. Mention the admissibility of hearsay evidence with exceptions.',
    answer: `<h4>Classification (5 types)</h4>
<ol><li><strong>Documentary</strong> — documents produced in court. Examples: medical certificates, MLR, PM reports, dying declarations, affidavits, X-rays. <em>Admissible.</em></li>
<li><strong>Oral</strong> — statements in court under oath. Examples: doctor\'s deposition, signs of a mute witness. <em>Admissible — best evidence.</em></li>
<li><strong>Real / material</strong> — physical objects produced in court. Examples: weapons, clothing, bullets, viscera, body fluids, stains. <em>Admissible.</em></li>
<li><strong>Hearsay</strong> — what a witness heard from another. <em>Generally NOT admissible.</em></li>
<li><strong>Circumstantial</strong> — indirect inference. Examples: time of death from rigor mortis, weapon from wound morphology. <em>Admissible.</em></li></ol>
<h4>Hearsay — admitted exceptions</h4>
<table><tr><th>Exception</th><th>Legal basis (2023)</th><th>Rationale</th></tr>
<tr><td>Dying declaration</td><td><strong>BSA §26</strong> (old IEA §32)</td><td>Dying person presumed to speak truth</td></tr>
<tr><td>Res gestae</td><td>BSA equivalent of IEA §6</td><td>Spontaneous, contemporaneous</td></tr>
<tr><td>Public records</td><td>BSA equivalent</td><td>Routine official records</td></tr>
<tr><td>Expert opinion in published textbooks</td><td>BSA equivalent of IEA §45</td><td>Standard treatises</td></tr></table>`,
    sources: ['LP-04 (Evidence types)','LP-05 (Documentary subtypes)','DT-6 (Evidence 3-way)'],
    jumpToDiagram: 'LP-04'
  },
  {
    id: 'SAQ-1.6', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Differentiate between (a) cognizable and non-cognizable offences and (b) bailable and non-bailable offences, with examples.',
    answer: `<h4>(a) Cognizable vs Non-cognizable</h4>
<table><tr><th>Feature</th><th>Cognizable</th><th>Non-cognizable</th></tr>
<tr><td>Police arrest</td><td><strong>Without warrant</strong></td><td>Warrant required</td></tr>
<tr><td>Investigation</td><td>Without magistrate\'s order</td><td>Needs magistrate\'s order</td></tr>
<tr><td>FIR</td><td>Mandatory</td><td>Optional</td></tr>
<tr><td>Bail</td><td>Often non-bailable</td><td>Usually bailable</td></tr>
<tr><td>Examples</td><td>Murder, rape, dacoity, dowry death</td><td>Defamation, simple hurt, public nuisance</td></tr></table>
<h4>(b) Bailable vs Non-bailable</h4>
<table><tr><th>Feature</th><th>Bailable</th><th>Non-bailable</th></tr>
<tr><td>Bail</td><td><strong>Matter of right</strong></td><td><strong>Discretionary</strong> — only court can grant</td></tr>
<tr><td>Granting authority</td><td>Police or court</td><td>Only court</td></tr>
<tr><td>Severity</td><td>Less serious</td><td>Serious; usually cognizable</td></tr>
<tr><td>Examples</td><td>Simple hurt, defamation, criminal trespass</td><td>Murder (BNS §103), rape (BNS §63), dacoity</td></tr></table>
<h4>Combined classification (typical)</h4>
<ul><li>Cognizable + non-bailable = most serious (e.g., murder)</li><li>Non-cognizable + bailable = least serious (e.g., defamation)</li></ul>
<p>Current classification of each offence is in the First Schedule of BNSS 2023.</p>`,
    sources: ['DT-2 (Cognizable)','DT-3 (Bailable)'],
    jumpToDT: 'DT-2'
  },
  {
    id: 'SAQ-1.7', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Describe the conduct expected of a doctor while giving evidence in a court of law. Mention the legal consequences of giving false evidence.',
    answer: `<p>A doctor is summoned to court as an <strong>expert witness</strong> under §39 BSA, 2023 (old §45 IEA). His credibility = the credibility of his evidence.</p>
<h4>Do\'s</h4>
<ol><li><strong>Be punctual</strong> — arrive before scheduled time</li><li>Dress formally</li><li>Address court properly — "My Lord"/"Your Honour" in HC/SC; "Sir" in subordinate courts</li><li>Carry MLR, PM report, case notes; refer only with court\'s permission</li><li>Speak clearly and slowly</li><li>Answer only what is asked</li><li>Use plain language; explain medical terms</li><li>Take oath before deposing</li></ol>
<h4>Don\'ts</h4>
<ol><li>Don\'t lose temper under cross-exam</li><li>Don\'t argue with lawyer/judge</li><li>Don\'t volunteer information</li><li>Don\'t speculate beyond evidence</li><li>Don\'t disclose patient secrets without consent/court order</li><li>Don\'t take sides — remain neutral</li><li>Don\'t refuse a court-directed Q → <strong>CONTEMPT OF COURT</strong></li><li>Don\'t give false evidence → <strong>PERJURY</strong></li></ol>
<h4>Legal consequences of false evidence (perjury)</h4>
<ul><li>Wilfully giving false evidence on oath in judicial proceeding</li><li>Punishable under <strong>§229 BNS, 2023</strong> (old §193 IPC)</li><li><strong>Imprisonment up to 7 years + fine</strong></li><li>Plus professional consequences: infamous conduct under medical-council regulations — possible suspension or removal from register</li></ul>
<p><strong>Mnemonics:</strong> Do\'s = <strong>PALACE</strong> (Punctual, Attire, Language, Answer, Carry, Explain); Don\'ts = <strong>NEVER</strong>.</p>`,
    sources: ['LP-09 (Conduct in Court)'],
    jumpToDiagram: 'LP-09'
  },
  {
    id: 'SAQ-1.8', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Classify witnesses appearing in a court of law. Differentiate between a common witness, expert witness, and hostile witness.',
    answer: `<h4>Definition</h4>
<p>A witness is any person who appears in court and gives evidence under oath about facts within his knowledge.</p>
<h4>Three types</h4>
<ol><li><strong>Common witness (witness of fact)</strong> — facts seen/heard/perceived; cannot give opinion. Examples: passer-by, neighbour, panchas.</li>
<li><strong>Expert (skilled) witness</strong> — specially skilled; permitted to give opinion under <strong>§39 BSA / §45 IEA</strong>. Examples: forensic doctor, ballistics expert, handwriting analyst, psychiatrist. <em>A doctor in court is always an expert witness.</em></li>
<li><strong>Hostile witness</strong> — turns against the calling party; court must formally declare him hostile, after which the calling party may cross-examine its own witness.</li></ol>
<h4>Differentiating table</h4>
<table><tr><th>Feature</th><th>Common</th><th>Expert</th><th>Hostile</th></tr>
<tr><td>Synonym</td><td>Witness of fact</td><td>Skilled witness</td><td>—</td></tr>
<tr><td>Opinion allowed?</td><td>❌ No</td><td>✅ Yes</td><td>Depends</td></tr>
<tr><td>Legal basis (opinion)</td><td>—</td><td><strong>BSA §39</strong></td><td>—</td></tr>
<tr><td>Cross-examined by</td><td>Opposing</td><td>Opposing</td><td>Opposing <strong>+ own side</strong> (court permits)</td></tr>
<tr><td>Example</td><td>Eyewitness to fall</td><td>Forensic doctor</td><td>Complainant denying police version</td></tr></table>
<h4>Medicolegal relevance</h4>
<p>A doctor giving evidence in court is always an expert witness. His opinion is given weight but not binding — the court decides on totality of evidence.</p>`,
    sources: ['LP-06 (Witness Types)','DT-7 (Witness 3-way)'],
    jumpToDiagram: 'LP-06'
  }
];

/* ================================================================
   MNEMONICS PER DIAGRAM
   ================================================================ */
const MNEMONIC_LP02 = { name: 'PoMaCoMe', html: '<p>In descending order of India relevance:</p><ul><li><strong>Po</strong>lice inquest — §174 CrPC / §194 BNSS — ✅ practised</li><li><strong>Ma</strong>gistrate inquest — §176 CrPC / §196 BNSS — ✅ practised</li><li><strong>Co</strong>roner inquest — ❌ abolished (Mumbai 29-Jul-1999)</li><li><strong>Me</strong>dical Examiner — USA only</li></ul>', tag: '⚙️ Auto-generated' };
const MNEMONIC_LP03 = { name: '4 W\'s of a Summons', html: '<p>The four essential contents:</p><ul><li><strong>W</strong>ho — person summoned</li><li><strong>W</strong>hen — date + time</li><li><strong>W</strong>here — court + place</li><li><strong>W</strong>hat — purpose (witness / production)</li></ul><p>➕ Conduct money: <strong>C</strong>ivil = <strong>C</strong>ash in advance; <strong>C</strong>riminal = government reimburses after.</p>', tag: '⚙️ Auto-generated' };
const MNEMONIC_LP05 = { name: 'MM-DD', html: '<p><strong>M</strong>edical Certificates · <strong>M</strong>edicolegal Report (MLR) · <strong>D</strong>ying <strong>D</strong>eclaration · <strong>D</strong>ying <strong>D</strong>eposition</p><p><strong>Critical contrast (DD vs DD):</strong></p><ul><li>Declaration → ❌ no oath, ❌ no cross-exam, valid only if declarant dies (BSA §26)</li><li>Deposition → ✅ oath, ✅ cross-exam, highest evidentiary value</li></ul>', tag: '⚙️ Auto-generated' };
const MNEMONIC_LP07 = { name: 'OECRC', html: '<p>The 5-stage sequence:</p><p><strong>O</strong>ath → <strong>E</strong>xamination-in-chief → <strong>C</strong>ross → <strong>R</strong>e-exam → <strong>C</strong>ourt Qs</p><p><strong>Leading-Q rule:</strong> Allowed only when the <strong>opposing party</strong> (or the judge) asks — i.e. C (cross) and C (court Qs). Not in E (chief) or R (re-exam).</p>', tag: '⚙️ Auto-generated' };
const MNEMONIC_LP09 = { name: 'PALACE / NEVER', html: '<p>✅ <strong>DO — PALACE</strong> (treat the witness box like a palace):<br><strong>P</strong>unctual · <strong>A</strong>ttire formal · <strong>L</strong>anguage (address court) · <strong>A</strong>nswer only what is asked · <strong>C</strong>arry records · <strong>E</strong>xplain medical terms</p><p>❌ <strong>DON\'T — NEVER:</strong><br><strong>N</strong>o losing temper · <strong>E</strong>vade nothing (refusal = contempt) · <strong>V</strong>olunteer (don\'t) · <strong>E</strong>xceed your evidence · <strong>R</strong>eveal patient secrets (don\'t)</p><p>⚠️ Perjury watch: §229 BNS / §193 IPC, up to 7 yrs + fine.</p>', tag: '⚙️ Auto-generated' };

/* ================================================================
   ASSEMBLE CHAPTER DATA
   ================================================================ */
return {
  chapterNumber: 1,
  chapterTitle: 'Legal Procedure',

  prereqs: [
    { term: 'Inquest', meaning: 'A legal enquiry held to find out the cause and circumstances of a sudden, suspicious or unnatural death.' },
    { term: 'Court', meaning: 'A government-established body that hears legal disputes and decides them according to law.' },
    { term: 'Magistrate', meaning: 'A judicial officer (of various ranks) who tries cases, issues warrants, or conducts legal enquiries.' },
    { term: 'Summons', meaning: 'A formal written order from a court directing a person to appear before it on a specified date.' },
    { term: 'Subpoena', meaning: 'Foreign-jurisdiction equivalent of a summons — written legal document compelling attendance or production of documents.' },
    { term: 'Cognizable offense', meaning: 'A serious crime (e.g. murder, rape) in which police can arrest the accused without a warrant.' },
    { term: 'Witness', meaning: 'Any person who appears in court and gives evidence about facts within his knowledge.' },
    { term: 'Oath', meaning: 'A solemn declaration to tell the truth, sworn before giving evidence in court.' },
    { term: 'Evidence', meaning: 'Anything (oral, documentary, or material) presented in court to prove or disprove a fact.' },
    { term: 'Affidavit', meaning: 'A written statement made under oath, used in court as a form of documentary evidence.' }
  ],

  diagrams: [
    { id: 'LP-01', title: 'Criminal Courts in India — Hierarchy & Powers', shortTitle: 'Court Hierarchy', svg: SVG_LP01,
      prereqs: [{term:'Jurisdiction',meaning:'The geographical area or subject matter over which a court has authority.'},{term:'Sessions Court',meaning:'Highest criminal court at district level — can impose any sentence incl. death.'},{term:'Magistrate Court',meaning:'Lower criminal court (Metropolitan/Judicial) with capped sentencing power.'},{term:'Capital punishment',meaning:'Death sentence — Sessions Court can pass it; must be confirmed by High Court before execution.'},{term:'Cognizance',meaning:"A court's act of formally taking up a case for trial."}],
      nodes: nodeList(['supreme-court','high-court','sessions-court','magistrate-court','powers-table','civil-courts-note']),
      mcqs: MCQS['LP-01']
    },
    { id: 'LP-02', title: 'Types of Inquest', shortTitle: 'Inquest Types', svg: SVG_LP02,
      prereqs: [{term:'Investigating Officer (IO)',meaning:'Police officer (≥ Sub-Inspector) who conducts a police inquest.'},{term:'Panchas',meaning:'Two or more responsible local persons witnessing the IO\'s investigation.'},{term:'Panchnama',meaning:'Written report by the IO describing the body, scene, and circumstances.'},{term:'Coroner',meaning:'Judicial officer (rank of First Class Magistrate) — doctor or lawyer.'},{term:'Exhumation',meaning:'Lawful disinterment of an already-buried body for re-examination.'}],
      nodes: nodeList(['inquest-definition','police-inquest','magistrate-inquest','coroner-inquest','medical-examiner-system']),
      mnemonic: MNEMONIC_LP02, mcqs: MCQS['LP-02']
    },
    { id: 'LP-03', title: 'Summons / Subpoena Anatomy', shortTitle: 'Summons', svg: SVG_LP03,
      prereqs: [{term:'Conduct money',meaning:'Travel + subsistence allowance paid to a witness in civil cases.'},{term:'Witness summons',meaning:'Summons directing a person to attend court and give evidence.'},{term:'Production summons',meaning:'Summons directing production of documents/objects in court.'},{term:'Court seal',meaning:'Official stamp making the summons legally enforceable.'}],
      nodes: nodeList(['summons-document','witness-summons','production-summons','conduct-money']),
      mnemonic: MNEMONIC_LP03, mcqs: MCQS['LP-03']
    },
    { id: 'LP-04', title: 'Types of Medical Evidence', shortTitle: 'Evidence Types', svg: SVG_LP04,
      prereqs: [{term:'Documentary evidence',meaning:'Written or recorded documents (MLR, certificates, reports).'},{term:'Oral evidence',meaning:'Statements made in court under oath.'},{term:'Real (material) evidence',meaning:'Physical objects produced before the court.'},{term:'Hearsay evidence',meaning:'Statements heard from another person — generally inadmissible.'},{term:'Circumstantial evidence',meaning:'Indirect evidence — fact inferred from another fact.'}],
      nodes: nodeList(['medical-evidence-root','documentary-evidence','oral-evidence','real-evidence','hearsay-evidence','circumstantial-evidence']),
      mcqs: MCQS['LP-04']
    },
    { id: 'LP-05', title: 'Documentary Evidence — 4 Subtypes', shortTitle: 'Documentary Subtypes', svg: SVG_LP05,
      prereqs: [{term:'Medical certificate',meaning:'RMP-issued statement re: birth, death, age, illness, fitness.'},{term:'Medicolegal report (MLR)',meaning:'Doctor\'s report on a person referred by police.'},{term:'Dying declaration',meaning:'Statement of a dying person re: cause of his death.'},{term:'Dying deposition',meaning:'Statement of a dying person in court-deposition format — on oath, cross-examined.'},{term:'Res gestae',meaning:'Spontaneous statements forming part of the same transaction — admissible despite hearsay.'}],
      nodes: nodeList(['medical-certificates','medicolegal-report','dying-declaration','dying-deposition']),
      mnemonic: MNEMONIC_LP05, mcqs: MCQS['LP-05']
    },
    { id: 'LP-06', title: 'Types of Witnesses', shortTitle: 'Witness Types', svg: SVG_LP06,
      prereqs: [{term:'Common witness',meaning:'Deposes about facts seen/heard/perceived — also called witness of fact.'},{term:'Expert witness',meaning:'Specially skilled in a subject — permitted to give opinion.'},{term:'Hostile witness',meaning:'Witness who turns against the calling party.'},{term:'Skilled witness',meaning:'Same as expert witness — used interchangeably.'}],
      nodes: nodeList(['common-witness','expert-witness','hostile-witness']),
      mcqs: MCQS['LP-06']
    },
    { id: 'LP-07', title: 'Witness Examination Procedure', shortTitle: 'Examination Procedure', svg: SVG_LP07,
      prereqs: [{term:'Examination-in-chief',meaning:'First round of questioning, by the calling party.'},{term:'Cross-examination',meaning:'Second round of questioning, by the opposing party.'},{term:'Re-examination',meaning:'Third round by the calling party to clarify cross-exam points.'},{term:'Leading question',meaning:'Question that suggests its own answer.'},{term:'Court question',meaning:'Question put directly by the judge at any stage.'}],
      nodes: nodeList(['step-oath','step-exam-in-chief','step-cross-examination','step-re-examination','step-court-questions']),
      mnemonic: MNEMONIC_LP07, mcqs: MCQS['LP-07']
    },
    { id: 'LP-08', title: 'Types of Questions in Court', shortTitle: 'Question Types', svg: SVG_LP08,
      prereqs: [{term:'Leading question',meaning:'Question that suggests its own answer.'},{term:'Hypothetical question',meaning:'Question based on assumed facts — used for expert opinion.'},{term:'Compound question',meaning:'Single question bundling two or more queries.'},{term:'Indecent / Scandalous question',meaning:'Question on intimate matter unrelated to case — judge may forbid.'}],
      nodes: nodeList(['leading-question','hypothetical-question','compound-question','indecent-question']),
      mcqs: MCQS['LP-08']
    },
    { id: 'LP-09', title: 'Conduct of Doctor in Court', shortTitle: 'Doctor in Court', svg: SVG_LP09,
      prereqs: [{term:'Professional secrecy',meaning:'Doctor\'s duty to keep patient info confidential — overridden by consent / court order.'},{term:'Contempt of court',meaning:'Wilful disobedience or disrespect to a court — punishable.'},{term:'Perjury',meaning:'Giving false evidence under oath — §229 BNS (old §193 IPC).'},{term:'Composure',meaning:'Maintaining calm under cross-examination pressure.'}],
      nodes: nodeList(['conduct-dos','conduct-donts']),
      mnemonic: MNEMONIC_LP09, mcqs: MCQS['LP-09']
    }
  ],

  diffTables: DIFF_TABLES,
  subjectiveQs: SUBJ,

  highYield: [
    '<strong>Perjury → §229 BNS</strong> (old §193 IPC) — up to 7 years + fine',
    '<strong>Dying declaration → BSA §26</strong> (old IEA §32) — no oath, no cross-exam, valid only if declarant dies',
    '<strong>Expert opinion → BSA §39</strong> (old IEA §45)',
    '<strong>Police inquest → §194 BNSS</strong> (old §174 CrPC)',
    '<strong>Magistrate inquest → §196 BNSS</strong> (old §176 CrPC). Mandatory in custodial / dowry / exhumation / psych-hospital deaths',
    '<strong>Coroner inquest abolished</strong> in Mumbai on <strong>29 July 1999</strong>',
    '<strong>Conduct money</strong> — civil cases only',
    '<strong>Leading questions allowed in cross-examination only</strong> (and from the judge)',
    '<strong>Dying deposition &gt; Dying declaration</strong> in evidentiary value (oath + cross-exam)',
    '<strong>Doctor in court = Expert witness</strong>'
  ]
};

})();
