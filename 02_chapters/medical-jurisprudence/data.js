/* ===================================================================
   Medascend FMT — Chapter 2: Medical Jurisprudence
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
  <linearGradient id="gYellow" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#E8B23D"/><stop offset="100%" stop-color="#B58420"/></linearGradient>
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

/* ============ MJ-01 — Three Pillars (BNS / BNSS / BSA 2023) ============ */
const SVG_MJ01 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Three Pillars of Indian Law — BNS · BNSS · BSA 2023</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Effective 1 July 2024 · Replaced IPC 1860 / CrPC 1973 / IEA 1872</text>

<g data-node-id="bns-card">
  <rect class="body-white" x="60" y="120" width="490" height="490" rx="14"/>
  <path d="M 74,120 H 536 A 14,14 0 0 1 550,134 V 220 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gBlue)"/>
  <text x="305" y="172" font-family="Inter,system-ui,sans-serif" font-size="26" font-weight="800" fill="white" text-anchor="middle">BNS 2023</text>
  <text x="305" y="200" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="rgba(255,255,255,0.88)" text-anchor="middle">Bharatiya Nyaya Sanhita</text>
  <text x="90" y="270" class="t-keylbl">📜 Old:</text>
  <text x="180" y="270" class="t-keyval">IPC 1860</text>
  <text x="90" y="320" class="t-keylbl">📚 Type:</text>
  <text x="180" y="320" class="t-keyval">Substantive criminal law</text>
  <text x="90" y="370" class="t-keylbl">🎯 Role:</text>
  <text x="180" y="370" class="t-keyval">Defines offences +</text>
  <text x="180" y="392" class="t-keyval">prescribes punishments</text>
  <text x="90" y="442" class="t-keylbl">📅 Effective:</text>
  <text x="230" y="442" class="t-keyval">1 July 2024</text>
  <text x="90" y="500" class="t-keylbl">🔑 Total sections:</text>
  <text x="280" y="500" class="t-keyval">358 (vs IPC's 511)</text>
  <text x="90" y="540" class="t-keylbl">🆕 New offences:</text>
  <text x="270" y="540" class="t-keyval">Terrorism, organised crime, mob lynching</text>
  <circle class="ic" cx="520" cy="140" r="14"/>
  <text class="t-info" x="520" y="146" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="bnss-card">
  <rect class="body-white" x="570" y="120" width="490" height="490" rx="14"/>
  <path d="M 584,120 H 1046 A 14,14 0 0 1 1060,134 V 220 H 570 V 134 A 14,14 0 0 1 584,120 Z" fill="url(#gGreen)"/>
  <text x="815" y="172" font-family="Inter,system-ui,sans-serif" font-size="26" font-weight="800" fill="white" text-anchor="middle">BNSS 2023</text>
  <text x="815" y="200" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="rgba(255,255,255,0.88)" text-anchor="middle">Bharatiya Nagarik Suraksha Sanhita</text>
  <text x="600" y="270" class="t-keylbl">📜 Old:</text>
  <text x="690" y="270" class="t-keyval">CrPC 1973</text>
  <text x="600" y="320" class="t-keylbl">📚 Type:</text>
  <text x="690" y="320" class="t-keyval">Procedural law</text>
  <text x="600" y="370" class="t-keylbl">🎯 Role:</text>
  <text x="690" y="370" class="t-keyval">Mechanism for trial,</text>
  <text x="690" y="392" class="t-keyval">investigation, courts</text>
  <text x="600" y="442" class="t-keylbl">📅 Effective:</text>
  <text x="740" y="442" class="t-keyval">1 July 2024</text>
  <text x="600" y="500" class="t-keylbl">🔑 Total sections:</text>
  <text x="790" y="500" class="t-keyval">531 (vs CrPC's 484)</text>
  <text x="600" y="540" class="t-keylbl">🆕 Key changes:</text>
  <text x="760" y="540" class="t-keyval">Time-bound trials, e-FIR, video trial</text>
  <circle class="ic" cx="1030" cy="140" r="14"/>
  <text class="t-info" x="1030" y="146" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="bsa-card">
  <rect class="body-white" x="1080" y="120" width="460" height="490" rx="14"/>
  <path d="M 1094,120 H 1526 A 14,14 0 0 1 1540,134 V 220 H 1080 V 134 A 14,14 0 0 1 1094,120 Z" fill="url(#gPurple)"/>
  <text x="1310" y="172" font-family="Inter,system-ui,sans-serif" font-size="26" font-weight="800" fill="white" text-anchor="middle">BSA 2023</text>
  <text x="1310" y="200" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="rgba(255,255,255,0.88)" text-anchor="middle">Bharatiya Sakshya Adhiniyam</text>
  <text x="1100" y="270" class="t-keylbl">📜 Old:</text>
  <text x="1190" y="270" class="t-keyval">IEA 1872</text>
  <text x="1100" y="320" class="t-keylbl">📚 Type:</text>
  <text x="1190" y="320" class="t-keyval">Law of evidence</text>
  <text x="1100" y="370" class="t-keylbl">🎯 Role:</text>
  <text x="1190" y="370" class="t-keyval">Rules for collection,</text>
  <text x="1190" y="392" class="t-keyval">preservation, use of evidence</text>
  <text x="1100" y="442" class="t-keylbl">📅 Effective:</text>
  <text x="1240" y="442" class="t-keyval">1 July 2024</text>
  <text x="1100" y="500" class="t-keylbl">🔑 Total sections:</text>
  <text x="1280" y="500" class="t-keyval">170 (vs IEA's 167)</text>
  <text x="1100" y="540" class="t-keylbl">🆕 Key change:</text>
  <text x="1250" y="540" class="t-keyval">Electronic records as primary evidence</text>
  <circle class="ic" cx="1510" cy="140" r="14"/>
  <text class="t-info" x="1510" y="146" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="mapping-table">
  <rect class="body-white" x="60" y="640" width="1480" height="380" rx="14"/>
  <text x="800" y="690" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="#15294F" text-anchor="middle">Old ↔ New Mapping</text>
  <rect x="100" y="720" width="1400" height="44" rx="6" fill="#3F424A"/>
  <text x="150" y="748" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white">Old Code</text>
  <text x="600" y="748" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white">New Code (2023)</text>
  <text x="1100" y="748" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white">Status</text>
  <rect x="100" y="764" width="1400" height="48" fill="#FFFFFF" stroke="#E5E7EE"/>
  <text x="150" y="794" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="#1A1D26">IPC 1860 (Indian Penal Code)</text>
  <text x="600" y="794" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">BNS 2023</text>
  <text x="1100" y="794" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1F5A3D" font-weight="600">Repealed → Replaced</text>
  <rect x="100" y="812" width="1400" height="48" fill="#FAFBFD" stroke="#E5E7EE"/>
  <text x="150" y="842" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="#1A1D26">CrPC 1973 (Code of Criminal Procedure)</text>
  <text x="600" y="842" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">BNSS 2023</text>
  <text x="1100" y="842" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1F5A3D" font-weight="600">Repealed → Replaced</text>
  <rect x="100" y="860" width="1400" height="48" fill="#FFFFFF" stroke="#E5E7EE"/>
  <text x="150" y="890" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="#1A1D26">IEA 1872 (Indian Evidence Act)</text>
  <text x="600" y="890" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1A1D26">BSA 2023</text>
  <text x="1100" y="890" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#1F5A3D" font-weight="600">Repealed → Replaced</text>
  <text x="800" y="970" font-family="Inter,system-ui,sans-serif" font-size="13" fill="#6B7283" font-style="italic" text-anchor="middle">All three came into effect simultaneously on 1 July 2024. Cases registered before that date continue under the old codes.</text>
  <circle class="ic" cx="1510" cy="664" r="14"/>
  <text class="t-info" x="1510" y="670" text-anchor="middle">ⓘ</text>
</g>
</svg>`;

/* ============ MJ-02 — NMC Structure ============ */
const SVG_MJ02 = `<svg viewBox="0 0 1600 1200" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">National Medical Commission (NMC) — Structure</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">NMC Act 2019 · Replaced MCI Act 1956 (Medical Council of India dissolved 25 Sept 2020)</text>

<g data-node-id="nmc">
  <rect x="450" y="120" width="700" height="130" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)" stroke="#C58A3D" stroke-width="3"/>
  <text x="800" y="172" font-family="Inter,system-ui,sans-serif" font-size="28" font-weight="800" fill="white" text-anchor="middle">🏛️ NATIONAL MEDICAL COMMISSION</text>
  <text x="800" y="200" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)" text-anchor="middle">Apex regulatory body · 33 members · Chairperson + 10 ex-officio + 22 part-time</text>
  <text x="800" y="226" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.85)" text-anchor="middle">Headquarters: New Delhi</text>
  <circle class="ic" cx="1120" cy="140" r="14"/>
  <text class="t-info" x="1120" y="146" text-anchor="middle">ⓘ</text>
</g>

<path d="M 800 250 L 800 290 M 200 290 L 1400 290 M 200 290 L 200 320 M 590 290 L 590 320 M 1010 290 L 1010 320 M 1400 290 L 1400 320" stroke="#A8AEBC" stroke-width="3" fill="none" stroke-linecap="round"/>

<g data-node-id="ugmeb">
  <rect class="body-white" x="100" y="330" width="320" height="190" rx="14"/>
  <path d="M 114,330 H 406 A 14,14 0 0 1 420,344 V 388 H 100 V 344 A 14,14 0 0 1 114,330 Z" fill="url(#gGreen)"/>
  <text x="260" y="372" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">UGMEB</text>
  <text x="120" y="420" class="t-keylbl">Full form:</text>
  <text x="120" y="442" class="t-keyval">Under-Graduate Medical Education Board</text>
  <text x="120" y="470" class="t-keylbl">Role:</text>
  <text x="120" y="492" class="t-keyval">Regulates MBBS curriculum, exams, admissions</text>
  <circle class="ic" cx="400" cy="348" r="12"/>
  <text class="t-info" x="400" y="354" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="pgmeb">
  <rect class="body-white" x="490" y="330" width="320" height="190" rx="14"/>
  <path d="M 504,330 H 796 A 14,14 0 0 1 810,344 V 388 H 490 V 344 A 14,14 0 0 1 504,330 Z" fill="url(#gOrange)"/>
  <text x="650" y="372" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">PGMEB</text>
  <text x="510" y="420" class="t-keylbl">Full form:</text>
  <text x="510" y="442" class="t-keyval">Post-Graduate Medical Education Board</text>
  <text x="510" y="470" class="t-keylbl">Role:</text>
  <text x="510" y="492" class="t-keyval">Regulates MD/MS/DM/MCh — sets standards</text>
  <circle class="ic" cx="790" cy="348" r="12"/>
  <text class="t-info" x="790" y="354" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="marb">
  <rect class="body-white" x="880" y="330" width="320" height="190" rx="14"/>
  <path d="M 894,330 H 1186 A 14,14 0 0 1 1200,344 V 388 H 880 V 344 A 14,14 0 0 1 894,330 Z" fill="url(#gPurple)"/>
  <text x="1040" y="372" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">MARB</text>
  <text x="900" y="420" class="t-keylbl">Full form:</text>
  <text x="900" y="442" class="t-keyval">Medical Assessment &amp; Rating Board</text>
  <text x="900" y="470" class="t-keylbl">Role:</text>
  <text x="900" y="492" class="t-keyval">Inspects + rates medical colleges; quality control</text>
  <circle class="ic" cx="1180" cy="348" r="12"/>
  <text class="t-info" x="1180" y="354" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="emrb">
  <rect class="body-white" x="1270" y="330" width="260" height="190" rx="14"/>
  <path d="M 1284,330 H 1516 A 14,14 0 0 1 1530,344 V 388 H 1270 V 344 A 14,14 0 0 1 1284,330 Z" fill="url(#gRed)"/>
  <text x="1400" y="372" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">EMRB</text>
  <text x="1280" y="420" class="t-keylbl">Full form:</text>
  <text x="1280" y="440" class="t-keyval">Ethics &amp; Medical</text>
  <text x="1280" y="460" class="t-keyval">Registration Board</text>
  <text x="1280" y="488" class="t-keylbl">Role:</text>
  <text x="1280" y="508" class="t-keyval">Maintains National Medical Register</text>
  <circle class="ic" cx="1510" cy="348" r="12"/>
  <text class="t-info" x="1510" y="354" text-anchor="middle">ⓘ</text>
</g>

<path d="M 800 540 L 800 580" stroke="#A8AEBC" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M 785 568 L 800 585 L 815 568" stroke="#A8AEBC" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

<g data-node-id="smc">
  <rect x="400" y="600" width="800" height="120" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/>
  <text x="800" y="648" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">📍 STATE MEDICAL COUNCILS (SMC)</text>
  <text x="800" y="678" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)" text-anchor="middle">One per state · Maintains State Medical Register · Disciplinary action on misconduct</text>
  <text x="800" y="702" font-family="Inter,system-ui,sans-serif" font-size="12" fill="rgba(255,255,255,0.75)" text-anchor="middle">Hears complaints first; appeal lies with the EMRB (NMC)</text>
  <circle class="ic" cx="1170" cy="620" r="14"/>
  <text class="t-info" x="1170" y="626" text-anchor="middle">ⓘ</text>
</g>

<path d="M 800 720 L 800 760" stroke="#A8AEBC" stroke-width="3" fill="none" stroke-linecap="round"/>
<path d="M 785 748 L 800 765 L 815 748" stroke="#A8AEBC" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>

<g data-node-id="imr">
  <rect class="body-white" x="200" y="780" width="1200" height="200" rx="14"/>
  <path d="M 214,780 H 1386 A 14,14 0 0 1 1400,794 V 850 H 200 V 794 A 14,14 0 0 1 214,780 Z" fill="url(#gBlue)"/>
  <text x="800" y="824" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">📋 National Medical Register (NMR) + State Medical Register (SMR)</text>
  <text x="230" y="884" class="t-keylbl">📜 Authority to maintain:</text>
  <text x="230" y="906" class="t-keyval">NMR — by EMRB (NMC) · SMR — by State Medical Councils</text>
  <text x="230" y="934" class="t-keylbl">📌 Registered Medical Practitioner (RMP):</text>
  <text x="230" y="956" class="t-keyval">A doctor whose name appears in the State / National Medical Register — only an RMP can practise medicine in India</text>
  <circle class="ic" cx="1380" cy="800" r="14"/>
  <text class="t-info" x="1380" y="806" text-anchor="middle">ⓘ</text>
</g>

<rect fill="url(#gOrange)" x="200" y="1010" width="1200" height="50" rx="10"/>
<text x="800" y="1042" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="800" fill="white" text-anchor="middle">🎯 NMC Act 2019 replaced MCI Act 1956 · 4 autonomous boards + IMR maintained by EMRB</text>
</svg>`;

/* ============ MJ-03 — Types of Consent ============ */
const SVG_MJ03 = `<svg viewBox="0 0 1600 1200" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Consent in Medical Practice</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Permission given by a patient (or competent person) for examination / treatment · Legal protection for the doctor</text>

<g data-node-id="expressed-consent">
  <rect class="body-white" x="60" y="120" width="740" height="370" rx="14"/>
  <path d="M 74,120 H 786 A 14,14 0 0 1 800,134 V 180 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gBlue)"/>
  <text x="90" y="160" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">✍️ Expressed Consent</text>
  <text x="90" y="220" class="t-keylbl">📋 Definition:</text>
  <text x="250" y="220" class="t-keyval">Explicitly stated — written OR oral</text>
  <text x="90" y="260" class="t-keylbl">📝 Written:</text>
  <text x="200" y="260" class="t-keyval">Surgery, anaesthesia, sterilization, MTP, blood transfusion</text>
  <text x="90" y="290" class="t-keyval">— preferred medium for medicolegal protection</text>
  <text x="90" y="330" class="t-keylbl">🗣️ Oral:</text>
  <text x="170" y="330" class="t-keyval">Minor procedures, routine consultation</text>
  <text x="90" y="370" class="t-keylbl">⭐ Best practice:</text>
  <text x="240" y="370" class="t-keyval">Witnessed signature in the patient's own language</text>
  <text x="90" y="410" class="t-keylbl">⚠️ Caveat:</text>
  <text x="190" y="410" class="t-keyval">Consent withdrawn at any time before completion</text>
  <text x="90" y="450" class="t-keyval">→ procedure stops; doctor cannot continue</text>
  <circle class="ic" cx="770" cy="138" r="14"/>
  <text class="t-info" x="770" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="implied-consent">
  <rect class="body-white" x="820" y="120" width="720" height="370" rx="14"/>
  <path d="M 834,120 H 1526 A 14,14 0 0 1 1540,134 V 180 H 820 V 134 A 14,14 0 0 1 834,120 Z" fill="url(#gGreen)"/>
  <text x="850" y="160" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🤝 Implied Consent</text>
  <text x="850" y="220" class="t-keylbl">📋 Definition:</text>
  <text x="1010" y="220" class="t-keyval">Inferred from conduct, not stated</text>
  <text x="850" y="260" class="t-keylbl">💡 Examples:</text>
  <text x="870" y="284" class="t-keyval">• Patient extending arm for blood draw</text>
  <text x="870" y="308" class="t-keyval">• Walking into OPD for consultation</text>
  <text x="870" y="332" class="t-keyval">• Opening mouth for throat examination</text>
  <text x="850" y="372" class="t-keylbl">📌 Scope:</text>
  <text x="940" y="372" class="t-keyval">Limited to routine, non-invasive procedures</text>
  <text x="850" y="412" class="t-keylbl">⚠️ Not valid for:</text>
  <text x="1010" y="412" class="t-keyval">Surgery, anaesthesia, invasive procedures</text>
  <text x="850" y="452" class="t-keyval">— always need expressed consent</text>
  <circle class="ic" cx="1510" cy="138" r="14"/>
  <text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="loco-parentis">
  <rect class="body-white" x="60" y="510" width="740" height="320" rx="14"/>
  <path d="M 74,510 H 786 A 14,14 0 0 1 800,524 V 570 H 60 V 524 A 14,14 0 0 1 74,510 Z" fill="url(#gOrange)"/>
  <text x="90" y="550" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">👨‍👩‍👧 Loco Parentis</text>
  <text x="90" y="610" class="t-keylbl">📋 Meaning:</text>
  <text x="220" y="610" class="t-keyval">Latin — "in place of a parent"</text>
  <text x="90" y="650" class="t-keylbl">🎯 When applied:</text>
  <text x="280" y="650" class="t-keyval">Minor / unconscious patient · parent unavailable</text>
  <text x="90" y="690" class="t-keylbl">👤 Who consents:</text>
  <text x="280" y="690" class="t-keyval">Teacher, school principal, guardian, hostel warden</text>
  <text x="90" y="730" class="t-keylbl">📌 Common scenarios:</text>
  <text x="290" y="730" class="t-keyval">Sports injury at school, hostel illness, road-accident minor</text>
  <text x="90" y="770" class="t-keylbl">⚠️ Limit:</text>
  <text x="180" y="770" class="t-keyval">Emergency treatment only — definitive care awaits parent</text>
  <circle class="ic" cx="770" cy="528" r="14"/>
  <text class="t-info" x="770" y="534" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="informed-consent">
  <rect class="body-white" x="820" y="510" width="720" height="320" rx="14" stroke="#C58A3D" stroke-width="3"/>
  <path d="M 834,510 H 1526 A 14,14 0 0 1 1540,524 V 570 H 820 V 524 A 14,14 0 0 1 834,510 Z" fill="url(#gPurple)"/>
  <text x="850" y="550" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">📖 Informed Consent</text>
  <text x="1430" y="540" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="700" fill="#FFD166">⭐ MOST-TESTED</text>
  <text x="850" y="610" class="t-keylbl">📋 Definition:</text>
  <text x="1000" y="610" class="t-keyval">Consent after patient is told everything material</text>
  <text x="850" y="650" class="t-keylbl">📚 What must be disclosed:</text>
  <text x="870" y="675" class="t-keyval">• Nature &amp; purpose of procedure</text>
  <text x="870" y="700" class="t-keyval">• Material risks &amp; possible complications</text>
  <text x="870" y="725" class="t-keyval">• Alternative options available</text>
  <text x="870" y="750" class="t-keyval">• Consequences of refusing treatment</text>
  <text x="850" y="790" class="t-keylbl">⚖️ Standard test:</text>
  <text x="1010" y="790" class="t-keyval">"Reasonable patient" — what a reasonable patient would want to know</text>
  <circle class="ic" cx="1510" cy="528" r="14"/>
  <text class="t-info" x="1510" y="534" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="valid-consent">
  <rect x="60" y="860" width="1480" height="240" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/>
  <text x="800" y="912" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">✅ Criteria for a VALID Consent</text>
  <rect x="90" y="940" width="340" height="130" rx="10" fill="rgba(255,255,255,0.14)"/>
  <text x="260" y="970" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="800" fill="white" text-anchor="middle">1️⃣ AGE</text>
  <text x="260" y="995" font-family="Inter,system-ui,sans-serif" font-size="12" fill="rgba(255,255,255,0.92)" text-anchor="middle">≥ 12 yrs for examination</text>
  <text x="260" y="1015" font-family="Inter,system-ui,sans-serif" font-size="12" fill="rgba(255,255,255,0.92)" text-anchor="middle">≥ 18 yrs for surgery/anaesthesia</text>
  <text x="260" y="1040" font-family="Inter,system-ui,sans-serif" font-size="12" fill="rgba(255,255,255,0.92)" text-anchor="middle">≥ 18 yrs for organ donation</text>
  <rect x="450" y="940" width="340" height="130" rx="10" fill="rgba(255,255,255,0.14)"/>
  <text x="620" y="970" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="800" fill="white" text-anchor="middle">2️⃣ FREE</text>
  <text x="620" y="995" font-family="Inter,system-ui,sans-serif" font-size="12" fill="rgba(255,255,255,0.92)" text-anchor="middle">Voluntary, no coercion</text>
  <text x="620" y="1015" font-family="Inter,system-ui,sans-serif" font-size="12" fill="rgba(255,255,255,0.92)" text-anchor="middle">No fraud / undue influence</text>
  <text x="620" y="1040" font-family="Inter,system-ui,sans-serif" font-size="12" fill="rgba(255,255,255,0.92)" text-anchor="middle">Not under intoxication</text>
  <rect x="810" y="940" width="340" height="130" rx="10" fill="rgba(255,255,255,0.14)"/>
  <text x="980" y="970" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="800" fill="white" text-anchor="middle">3️⃣ INFORMED</text>
  <text x="980" y="995" font-family="Inter,system-ui,sans-serif" font-size="12" fill="rgba(255,255,255,0.92)" text-anchor="middle">Nature + purpose explained</text>
  <text x="980" y="1015" font-family="Inter,system-ui,sans-serif" font-size="12" fill="rgba(255,255,255,0.92)" text-anchor="middle">Material risks disclosed</text>
  <text x="980" y="1040" font-family="Inter,system-ui,sans-serif" font-size="12" fill="rgba(255,255,255,0.92)" text-anchor="middle">Alternatives mentioned</text>
  <rect x="1170" y="940" width="340" height="130" rx="10" fill="rgba(255,255,255,0.14)"/>
  <text x="1340" y="970" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="800" fill="white" text-anchor="middle">4️⃣ SPECIFIC</text>
  <text x="1340" y="995" font-family="Inter,system-ui,sans-serif" font-size="12" fill="rgba(255,255,255,0.92)" text-anchor="middle">Procedure-specific</text>
  <text x="1340" y="1015" font-family="Inter,system-ui,sans-serif" font-size="12" fill="rgba(255,255,255,0.92)" text-anchor="middle">No blanket consent</text>
  <text x="1340" y="1040" font-family="Inter,system-ui,sans-serif" font-size="12" fill="rgba(255,255,255,0.92)" text-anchor="middle">Withdrawable anytime</text>
  <circle class="ic" cx="1510" cy="880" r="14"/>
  <text class="t-info" x="1510" y="886" text-anchor="middle">ⓘ</text>
</g>
</svg>`;

/* === Placeholders for remaining SVGs — filled in subsequent edits === */
const SVG_MJ04 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Medical Negligence — The 4 D's</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">All four must coexist for a successful negligence claim · Plaintiff bears the burden of proof</text>

<g data-node-id="negligence-duty">
  <rect class="body-white" x="60" y="120" width="740" height="380" rx="14"/>
  <path d="M 74,120 H 786 A 14,14 0 0 1 800,134 V 200 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gBlue)"/>
  <text x="90" y="160" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.75)">1️⃣ COMPONENT ONE</text>
  <text x="90" y="190" font-family="Inter,system-ui,sans-serif" font-size="24" font-weight="800" fill="white">⚖️ DUTY of Care</text>
  <text x="90" y="250" class="t-keylbl">📋 Definition:</text>
  <text x="240" y="250" class="t-keyval">A legal duty owed by doctor to patient</text>
  <text x="90" y="290" class="t-keylbl">🤝 When created:</text>
  <text x="260" y="290" class="t-keyval">The moment a doctor-patient relationship is established</text>
  <text x="90" y="330" class="t-keylbl">📌 Sources of duty:</text>
  <text x="110" y="358" class="t-keyval">• Acceptance of the case (express / implied)</text>
  <text x="110" y="382" class="t-keyval">• Casualty / emergency situation</text>
  <text x="110" y="406" class="t-keyval">• Govt-employed doctor on duty</text>
  <text x="90" y="446" class="t-keylbl">⚠️ Good Samaritan:</text>
  <text x="290" y="446" class="t-keyval">No duty arises till intervention starts</text>
  <text x="90" y="476" class="t-keyval">(protected under Good Samaritan law — no liability for honest aid)</text>
  <circle class="ic" cx="770" cy="138" r="14"/>
  <text class="t-info" x="770" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="negligence-dereliction">
  <rect class="body-white" x="820" y="120" width="720" height="380" rx="14"/>
  <path d="M 834,120 H 1526 A 14,14 0 0 1 1540,134 V 200 H 820 V 134 A 14,14 0 0 1 834,120 Z" fill="url(#gOrange)"/>
  <text x="850" y="160" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.75)">2️⃣ COMPONENT TWO</text>
  <text x="850" y="190" font-family="Inter,system-ui,sans-serif" font-size="24" font-weight="800" fill="white">💥 DERELICTION (Breach)</text>
  <text x="850" y="250" class="t-keylbl">📋 Definition:</text>
  <text x="1000" y="250" class="t-keyval">Failure to meet the standard of care expected</text>
  <text x="850" y="290" class="t-keylbl">📏 Standard:</text>
  <text x="970" y="290" class="t-keyval">"Reasonably skilled doctor in the same circumstances"</text>
  <text x="850" y="328" class="t-keylbl">⚖️ Bolam Test (1957):</text>
  <text x="850" y="354" class="t-keyval">A doctor is not negligent if he acted in accordance with</text>
  <text x="850" y="378" class="t-keyval">a practice accepted by a responsible body of medical opinion.</text>
  <text x="850" y="418" class="t-keylbl">💡 Examples:</text>
  <text x="870" y="442" class="t-keyval">• Wrong-site surgery · Retained foreign body (gauze)</text>
  <text x="870" y="466" class="t-keyval">• Misdiagnosis from inadequate history</text>
  <text x="870" y="490" class="t-keyval">• Failure to refer / consult specialist</text>
  <circle class="ic" cx="1510" cy="138" r="14"/>
  <text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="negligence-direct">
  <rect class="body-white" x="60" y="520" width="740" height="380" rx="14"/>
  <path d="M 74,520 H 786 A 14,14 0 0 1 800,534 V 600 H 60 V 534 A 14,14 0 0 1 74,520 Z" fill="url(#gRed)"/>
  <text x="90" y="560" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.75)">3️⃣ COMPONENT THREE</text>
  <text x="90" y="590" font-family="Inter,system-ui,sans-serif" font-size="24" font-weight="800" fill="white">🔗 DIRECT Causation</text>
  <text x="90" y="650" class="t-keylbl">📋 Definition:</text>
  <text x="240" y="650" class="t-keyval">Direct causal link between breach and harm</text>
  <text x="90" y="690" class="t-keylbl">⚖️ Test:</text>
  <text x="170" y="690" class="t-keyval">"But for" test — but for the breach, would harm have occurred?</text>
  <text x="90" y="730" class="t-keylbl">📌 Key principle:</text>
  <text x="250" y="730" class="t-keyval">The chain of causation must be unbroken</text>
  <text x="90" y="770" class="t-keylbl">⚠️ Breaking factors:</text>
  <text x="110" y="798" class="t-keyval">• Intervening event (novus actus interveniens)</text>
  <text x="110" y="822" class="t-keyval">• Patient's own negligence (e.g., non-compliance)</text>
  <text x="110" y="846" class="t-keyval">• Pre-existing disease unrelated to the breach</text>
  <text x="90" y="876" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">If chain breaks → no liability even if breach occurred.</text>
  <circle class="ic" cx="770" cy="538" r="14"/>
  <text class="t-info" x="770" y="544" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="negligence-damage">
  <rect class="body-white" x="820" y="520" width="720" height="380" rx="14"/>
  <path d="M 834,520 H 1526 A 14,14 0 0 1 1540,534 V 600 H 820 V 534 A 14,14 0 0 1 834,520 Z" fill="url(#gPurple)"/>
  <text x="850" y="560" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.75)">4️⃣ COMPONENT FOUR</text>
  <text x="850" y="590" font-family="Inter,system-ui,sans-serif" font-size="24" font-weight="800" fill="white">📉 DAMAGE</text>
  <text x="850" y="650" class="t-keylbl">📋 Definition:</text>
  <text x="1000" y="650" class="t-keyval">Actual injury / loss suffered by the patient</text>
  <text x="850" y="690" class="t-keylbl">📌 Types of damage:</text>
  <text x="870" y="718" class="t-keyval">• Physical injury · permanent disability · death</text>
  <text x="870" y="742" class="t-keyval">• Mental suffering · loss of consortium</text>
  <text x="870" y="766" class="t-keyval">• Financial loss (cost of further treatment, loss of income)</text>
  <text x="870" y="790" class="t-keyval">• Loss of reasonable expectations</text>
  <text x="850" y="830" class="t-keylbl">⚖️ Damages awarded:</text>
  <text x="850" y="856" class="t-keyval">Compensatory (loss recovery) + sometimes exemplary (punitive)</text>
  <text x="850" y="880" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">No damage = no case — even if duty + breach + causation exist.</text>
  <circle class="ic" cx="1510" cy="538" r="14"/>
  <text class="t-info" x="1510" y="544" text-anchor="middle">ⓘ</text>
</g>

<rect x="60" y="930" width="1480" height="130" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/>
<text x="800" y="970" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">🎯 Mnemonic: "4 D's" — Duty · Dereliction · Direct cause · Damage</text>
<text x="800" y="1000" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)" text-anchor="middle">All four must be proved — by the plaintiff (patient) — on a balance of probabilities in civil court.</text>
<text x="800" y="1028" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.78)" text-anchor="middle">In criminal negligence (rash/negligent act), the standard is "beyond reasonable doubt" + gross / culpable nature.</text>
</svg>`;
const SVG_MJ05 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Defences against Medical Negligence</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Six legal defences a doctor may invoke when sued for negligence</text>

<g data-node-id="def-volenti">
  <rect class="body-white" x="60" y="120" width="490" height="430" rx="14"/>
  <path d="M 74,120 H 536 A 14,14 0 0 1 550,134 V 200 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gBlue)"/>
  <text x="80" y="160" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.75)">DEFENCE 1</text>
  <text x="80" y="190" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">Volenti Non Fit Injuria</text>
  <text x="80" y="240" class="t-keylbl">📚 Meaning:</text>
  <text x="80" y="264" class="t-keyval">"To one who volunteers, no injury is done"</text>
  <text x="80" y="300" class="t-keylbl">📋 Principle:</text>
  <text x="80" y="324" class="t-keyval">Patient who knowingly accepts risk cannot</text>
  <text x="80" y="348" class="t-keyval">later sue for that risk materialising.</text>
  <text x="80" y="384" class="t-keylbl">💡 Application:</text>
  <text x="80" y="408" class="t-keyval">After full informed consent, the patient</text>
  <text x="80" y="432" class="t-keyval">has accepted known material risks.</text>
  <text x="80" y="468" class="t-keylbl">⚠️ Limit:</text>
  <text x="80" y="492" class="t-keyval">Doesn't cover negligent care — risk-acceptance ≠</text>
  <text x="80" y="516" class="t-keyval">acceptance of below-standard treatment.</text>
  <circle class="ic" cx="520" cy="138" r="14"/>
  <text class="t-info" x="520" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="def-contributory">
  <rect class="body-white" x="570" y="120" width="490" height="430" rx="14"/>
  <path d="M 584,120 H 1046 A 14,14 0 0 1 1060,134 V 200 H 570 V 134 A 14,14 0 0 1 584,120 Z" fill="url(#gGreen)"/>
  <text x="590" y="160" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.75)">DEFENCE 2</text>
  <text x="590" y="190" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">Contributory Negligence</text>
  <text x="590" y="240" class="t-keylbl">📋 Principle:</text>
  <text x="590" y="264" class="t-keyval">Patient\'s own negligence contributed to the harm.</text>
  <text x="590" y="300" class="t-keylbl">💡 Examples:</text>
  <text x="610" y="324" class="t-keyval">• Patient hid relevant history (allergies)</text>
  <text x="610" y="348" class="t-keyval">• Failed to take prescribed medication</text>
  <text x="610" y="372" class="t-keyval">• Discharged self against medical advice (DAMA)</text>
  <text x="610" y="396" class="t-keyval">• Did not return for follow-up despite advice</text>
  <text x="590" y="436" class="t-keylbl">⚖️ Effect on damages:</text>
  <text x="590" y="460" class="t-keyval">Reduces damages proportionate to patient\'s share</text>
  <text x="590" y="484" class="t-keyval">of fault (e.g., 30 % patient → 30 % cut).</text>
  <text x="590" y="520" font-family="Inter,system-ui,sans-serif" font-size="11" font-style="italic" fill="#6B7283">Partial defence — reduces, does not extinguish liability.</text>
  <circle class="ic" cx="1040" cy="138" r="14"/>
  <text class="t-info" x="1040" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="def-resjudicata">
  <rect class="body-white" x="1080" y="120" width="460" height="430" rx="14"/>
  <path d="M 1094,120 H 1526 A 14,14 0 0 1 1540,134 V 200 H 1080 V 134 A 14,14 0 0 1 1094,120 Z" fill="url(#gOrange)"/>
  <text x="1100" y="160" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.75)">DEFENCE 3</text>
  <text x="1100" y="190" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">Res Judicata</text>
  <text x="1100" y="240" class="t-keylbl">📚 Meaning:</text>
  <text x="1100" y="264" class="t-keyval">"A matter already decided"</text>
  <text x="1100" y="300" class="t-keylbl">📋 Principle:</text>
  <text x="1100" y="324" class="t-keyval">Once a court has decided a dispute,</text>
  <text x="1100" y="348" class="t-keyval">the same parties cannot re-litigate it.</text>
  <text x="1100" y="384" class="t-keylbl">💡 Application:</text>
  <text x="1100" y="408" class="t-keyval">If patient lost a negligence suit in one</text>
  <text x="1100" y="432" class="t-keyval">forum, can\'t bring identical case elsewhere.</text>
  <text x="1100" y="478" class="t-keylbl">⚠️ Limit:</text>
  <text x="1100" y="502" class="t-keyval">Different cause of action (e.g., criminal +</text>
  <text x="1100" y="526" class="t-keyval">civil) can run parallel.</text>
  <circle class="ic" cx="1510" cy="138" r="14"/>
  <text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="def-misadventure">
  <rect class="body-white" x="60" y="570" width="490" height="450" rx="14"/>
  <path d="M 74,570 H 536 A 14,14 0 0 1 550,584 V 650 H 60 V 584 A 14,14 0 0 1 74,570 Z" fill="url(#gPurple)"/>
  <text x="80" y="610" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.75)">DEFENCE 4</text>
  <text x="80" y="640" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">Therapeutic Misadventure</text>
  <text x="80" y="690" class="t-keylbl">📋 Principle:</text>
  <text x="80" y="714" class="t-keyval">An unforeseeable adverse outcome despite</text>
  <text x="80" y="738" class="t-keyval">proper care — "an act of God in medicine".</text>
  <text x="80" y="778" class="t-keylbl">💡 Examples:</text>
  <text x="100" y="802" class="t-keyval">• Idiosyncratic drug reaction</text>
  <text x="100" y="826" class="t-keyval">• Anaesthetic death despite normal screening</text>
  <text x="100" y="850" class="t-keyval">• Rare allergic reaction not predictable</text>
  <text x="80" y="890" class="t-keylbl">⚖️ Effect:</text>
  <text x="80" y="914" class="t-keyval">Complete defence — no negligence as no</text>
  <text x="80" y="938" class="t-keyval">reasonable doctor could have foreseen it.</text>
  <text x="80" y="978" font-family="Inter,system-ui,sans-serif" font-size="11" font-style="italic" fill="#6B7283">Distinguish from <strong>negligence</strong> — which is foreseeable harm.</text>
  <circle class="ic" cx="520" cy="588" r="14"/>
  <text class="t-info" x="520" y="594" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="def-limitation">
  <rect class="body-white" x="570" y="570" width="490" height="450" rx="14"/>
  <path d="M 584,570 H 1046 A 14,14 0 0 1 1060,584 V 650 H 570 V 584 A 14,14 0 0 1 584,570 Z" fill="url(#gRed)"/>
  <text x="590" y="610" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.75)">DEFENCE 5</text>
  <text x="590" y="640" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">Statute of Limitation</text>
  <text x="590" y="690" class="t-keylbl">📋 Principle:</text>
  <text x="590" y="714" class="t-keyval">Lawsuits must be filed within a time limit</text>
  <text x="590" y="738" class="t-keyval">from the date of the alleged negligence.</text>
  <text x="590" y="778" class="t-keylbl">⏱️ Time limits in India:</text>
  <text x="610" y="802" class="t-keyval">• Tort (civil) — <strong>3 years</strong> from cause</text>
  <text x="610" y="826" class="t-keyval">• Consumer dispute — <strong>2 years</strong> from cause</text>
  <text x="610" y="850" class="t-keyval">• Criminal — varies by offence (NCRB matrix)</text>
  <text x="590" y="890" class="t-keylbl">⚠️ Exception:</text>
  <text x="590" y="914" class="t-keyval">"Discoverability rule" — clock starts when</text>
  <text x="590" y="938" class="t-keyval">patient discovered (or should have discovered)</text>
  <text x="590" y="962" class="t-keyval">the harm — relevant in retained-foreign-body cases.</text>
  <circle class="ic" cx="1040" cy="588" r="14"/>
  <text class="t-info" x="1040" y="594" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="def-standard">
  <rect class="body-white" x="1080" y="570" width="460" height="450" rx="14"/>
  <path d="M 1094,570 H 1526 A 14,14 0 0 1 1540,584 V 650 H 1080 V 584 A 14,14 0 0 1 1094,570 Z" fill="url(#gGrey)"/>
  <text x="1100" y="610" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="rgba(255,255,255,0.75)">DEFENCE 6</text>
  <text x="1100" y="640" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">Acted to Standard</text>
  <text x="1100" y="690" class="t-keylbl">📋 Principle:</text>
  <text x="1100" y="714" class="t-keyval">Doctor met the standard of care expected of</text>
  <text x="1100" y="738" class="t-keyval">a reasonably skilled professional.</text>
  <text x="1100" y="778" class="t-keylbl">⚖️ Bolam Test:</text>
  <text x="1100" y="802" class="t-keyval">Acted per a practice accepted by a</text>
  <text x="1100" y="826" class="t-keyval">responsible body of medical opinion.</text>
  <text x="1100" y="866" class="t-keylbl">📌 Indian update:</text>
  <text x="1100" y="890" class="t-keyval">Modified to also require the opinion to be</text>
  <text x="1100" y="914" class="t-keyval">logical and reasonable (Bolitho test).</text>
  <text x="1100" y="954" font-family="Inter,system-ui,sans-serif" font-size="11" font-style="italic" fill="#6B7283">Strongest defence when supported by expert testimony.</text>
  <circle class="ic" cx="1510" cy="588" r="14"/>
  <text class="t-info" x="1510" y="594" text-anchor="middle">ⓘ</text>
</g>

<rect x="60" y="1040" width="1480" height="40" rx="10" fill="url(#gOrange)"/>
<text x="800" y="1067" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 Mnemonic — "VCR-MLS": Volenti · Contributory · Res-judicata · Misadventure · Limitation · Standard</text>
</svg>`;
const SVG_MJ06 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Res Ipsa Loquitur + Vicarious Liability</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Two doctrines that shift the burden of proof — both expand the doctor's liability</text>

<g data-node-id="res-ipsa">
  <rect class="body-white" x="60" y="120" width="740" height="880" rx="14" stroke="#C58A3D" stroke-width="3"/>
  <path d="M 74,120 H 786 A 14,14 0 0 1 800,134 V 220 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gBlue)"/>
  <text x="430" y="166" font-family="Inter,system-ui,sans-serif" font-size="26" font-weight="800" fill="white" text-anchor="middle">📌 Res Ipsa Loquitur</text>
  <text x="430" y="198" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="rgba(255,255,255,0.88)" text-anchor="middle">"The thing speaks for itself"</text>
  <text x="700" y="148" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="700" fill="#FFD166">⭐ HIGH-YIELD</text>
  <text x="80" y="260" class="t-keylbl">📋 Definition:</text>
  <text x="80" y="284" class="t-keyval">A doctrine where the very occurrence of the</text>
  <text x="80" y="308" class="t-keyval">injury is itself proof of negligence — the</text>
  <text x="80" y="332" class="t-keyval">plaintiff need not prove specific acts.</text>
  <text x="80" y="370" class="t-keylbl">⚖️ Effect:</text>
  <text x="80" y="394" class="t-keyval">Shifts the burden of proof from the patient</text>
  <text x="80" y="418" class="t-keyval">to the doctor — now the doctor must prove</text>
  <text x="80" y="442" class="t-keyval">he was NOT negligent.</text>
  <text x="80" y="480" class="t-keylbl">📌 Three conditions to invoke:</text>
  <rect x="80" y="500" width="660" height="170" rx="8" fill="rgba(31,58,110,0.05)"/>
  <text x="100" y="530" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="#15294F">1️⃣ The injury does NOT ordinarily occur without negligence</text>
  <text x="100" y="580" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="#15294F">2️⃣ The thing that caused harm was under doctor's exclusive control</text>
  <text x="100" y="630" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="#15294F">3️⃣ The patient did not contribute to the harm</text>
  <text x="80" y="710" class="t-keylbl">💡 Classic examples:</text>
  <text x="100" y="738" class="t-keyval">• Retained surgical gauze / instrument after surgery</text>
  <text x="100" y="762" class="t-keyval">• Wrong-site surgery (operated on opposite limb)</text>
  <text x="100" y="786" class="t-keyval">• Transfusion of wrong blood group</text>
  <text x="100" y="810" class="t-keyval">• Burns from heat-pack during anaesthesia</text>
  <text x="100" y="834" class="t-keyval">• Forgotten/sponge gauze in abdomen post-hysterectomy</text>
  <text x="80" y="876" class="t-keylbl">📚 Origin:</text>
  <text x="160" y="876" class="t-keyval">Byrne v Boadle (1863, UK) — flour barrel falling from window</text>
  <text x="80" y="916" class="t-keylbl">📌 In India:</text>
  <text x="180" y="916" class="t-keyval">Recognised — Spring Meadows Hospital v Harjol Ahluwalia (1998)</text>
  <text x="80" y="950" font-family="Inter,system-ui,sans-serif" font-size="11" font-style="italic" fill="#6B7283">Specific QBank example: surgical gauze retained after hysterectomy.</text>
  <circle class="ic" cx="770" cy="138" r="14"/>
  <text class="t-info" x="770" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="vicarious-liability">
  <rect class="body-white" x="820" y="120" width="720" height="880" rx="14" stroke="#C58A3D" stroke-width="3"/>
  <path d="M 834,120 H 1526 A 14,14 0 0 1 1540,134 V 220 H 820 V 134 A 14,14 0 0 1 834,120 Z" fill="url(#gPurple)"/>
  <text x="1180" y="166" font-family="Inter,system-ui,sans-serif" font-size="26" font-weight="800" fill="white" text-anchor="middle">🏥 Vicarious Liability</text>
  <text x="1180" y="198" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="rgba(255,255,255,0.88)" text-anchor="middle">"Liability of one for the acts of another"</text>
  <text x="1440" y="148" font-family="Inter,system-ui,sans-serif" font-size="11" font-weight="700" fill="#FFD166">⭐ HIGH-YIELD</text>
  <text x="840" y="260" class="t-keylbl">📋 Definition:</text>
  <text x="840" y="284" class="t-keyval">The doctrine that holds an employer / superior</text>
  <text x="840" y="308" class="t-keyval">liable for the negligent acts of his employee /</text>
  <text x="840" y="332" class="t-keyval">subordinate, done in the course of employment.</text>
  <text x="840" y="370" class="t-keylbl">⚖️ Latin maxim:</text>
  <text x="840" y="394" class="t-keyval">"Respondeat superior" — let the master answer.</text>
  <text x="840" y="430" class="t-keylbl">📌 Conditions:</text>
  <rect x="840" y="450" width="660" height="120" rx="8" fill="rgba(107,79,142,0.05)"/>
  <text x="860" y="478" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="#4A3667">1️⃣ Employer-employee relationship exists</text>
  <text x="860" y="514" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="#4A3667">2️⃣ Negligent act was in the course of employment</text>
  <text x="860" y="550" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="#4A3667">3️⃣ Damage was caused to a third party</text>
  <text x="840" y="610" class="t-keylbl">💡 Common scenarios:</text>
  <text x="860" y="638" class="t-keyval">• Hospital liable for doctors / nurses' negligence</text>
  <text x="860" y="662" class="t-keyval">• Surgeon liable for theatre nurse counting sponges</text>
  <text x="860" y="686" class="t-keyval">• Senior consultant for junior's act under supervision</text>
  <text x="840" y="725" class="t-keylbl">⚓ Captain of the Ship doctrine:</text>
  <text x="840" y="752" class="t-keyval">Surgeon-in-charge of OT is liable for all acts of</text>
  <text x="840" y="776" class="t-keyval">the team during surgery. (Now diluted — modern</text>
  <text x="840" y="800" class="t-keyval">view is that each professional is liable for own acts.)</text>
  <text x="840" y="840" class="t-keylbl">⚠️ NOT vicarious:</text>
  <text x="840" y="864" class="t-keyval">• Independent consultant\'s acts (separate liability)</text>
  <text x="840" y="888" class="t-keyval">• Acts outside scope of employment ("frolic")</text>
  <text x="840" y="918" font-family="Inter,system-ui,sans-serif" font-size="11" font-style="italic" fill="#6B7283">Both employer AND employee may be jointly sued in India.</text>
  <text x="840" y="954" class="t-keylbl">📚 Landmark:</text>
  <text x="940" y="954" class="t-keyval">Achutrao Haribhau Khodwa v State of Maharashtra (1996)</text>
  <circle class="ic" cx="1510" cy="138" r="14"/>
  <text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text>
</g>

<rect x="60" y="1030" width="1480" height="40" rx="10" fill="url(#gGreen)"/>
<text x="800" y="1057" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 Res Ipsa = burden shifts to doctor · Vicarious = hospital liable for doctor's act</text>
</svg>`;
const SVG_MJ07 = `<svg viewBox="0 0 1600 1200" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Professional Secrecy + Privileged Communication</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Doctor-patient confidentiality is a sacred duty — but it is NOT absolute</text>

<g data-node-id="secrecy-rule">
  <rect x="60" y="120" width="1480" height="170" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/>
  <text x="800" y="170" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">🔒 THE RULE — Professional Secrecy</text>
  <text x="100" y="216" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">A doctor must NOT disclose any information learnt about a patient in the course of his professional duty —</text>
  <text x="100" y="240" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">whether the information was obtained from the patient himself, his relatives, his condition, or his records.</text>
  <text x="100" y="270" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.78)">Origin: Hippocratic Oath · Codified in IMC Code of Ethics 2002 · Breach = professional misconduct</text>
  <circle class="ic" cx="1510" cy="140" r="14"/>
  <text class="t-info" x="1510" y="146" text-anchor="middle">ⓘ</text>
</g>

<rect class="nbcr" x="60" y="310" width="1480" height="60" rx="10"/>
<text x="800" y="348" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="#8B6914" text-anchor="middle">⚠️ But there are EXCEPTIONS — situations where disclosure is permitted or even mandatory:</text>

<g data-node-id="exception-court">
  <rect class="body-white" x="60" y="390" width="490" height="220" rx="14"/>
  <path d="M 74,390 H 536 A 14,14 0 0 1 550,404 V 450 H 60 V 404 A 14,14 0 0 1 74,390 Z" fill="url(#gGreen)"/>
  <text x="80" y="430" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">1. Court Order</text>
  <text x="80" y="478" class="t-keyval">Doctor MUST disclose if a court directs.</text>
  <text x="80" y="504" class="t-keyval">Refusal = contempt of court.</text>
  <text x="80" y="540" class="t-keylbl">Includes:</text>
  <text x="80" y="564" class="t-keyval">• Producing records under subpoena</text>
  <text x="80" y="588" class="t-keyval">• Deposing as expert witness</text>
  <circle class="ic" cx="520" cy="408" r="12"/>
  <text class="t-info" x="520" y="414" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="exception-notifiable">
  <rect class="body-white" x="570" y="390" width="490" height="220" rx="14"/>
  <path d="M 584,390 H 1046 A 14,14 0 0 1 1060,404 V 450 H 570 V 404 A 14,14 0 0 1 584,390 Z" fill="url(#gRed)"/>
  <text x="590" y="430" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">2. Notifiable Diseases</text>
  <text x="590" y="478" class="t-keyval">Statutory duty to report to public-health</text>
  <text x="590" y="502" class="t-keyval">authorities — overrides confidentiality.</text>
  <text x="590" y="540" class="t-keylbl">Examples:</text>
  <text x="590" y="564" class="t-keyval">TB, cholera, plague, COVID-19, leprosy,</text>
  <text x="590" y="588" class="t-keyval">measles, HIV (with caveats), birth/death.</text>
  <circle class="ic" cx="1040" cy="408" r="12"/>
  <text class="t-info" x="1040" y="414" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="exception-thirdparty">
  <rect class="body-white" x="1080" y="390" width="460" height="220" rx="14"/>
  <path d="M 1094,390 H 1526 A 14,14 0 0 1 1540,404 V 450 H 1080 V 404 A 14,14 0 0 1 1094,390 Z" fill="url(#gOrange)"/>
  <text x="1100" y="430" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">3. Third-party Risk</text>
  <text x="1100" y="478" class="t-keyval">If a third party is at imminent serious risk,</text>
  <text x="1100" y="502" class="t-keyval">disclosure to them or police is permitted.</text>
  <text x="1100" y="540" class="t-keylbl">Examples:</text>
  <text x="1100" y="564" class="t-keyval">• HIV-positive patient hiding from spouse</text>
  <text x="1100" y="588" class="t-keyval">• Epileptic driver who refuses to stop driving</text>
  <circle class="ic" cx="1510" cy="408" r="12"/>
  <text class="t-info" x="1510" y="414" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="exception-self-interest">
  <rect class="body-white" x="60" y="630" width="490" height="220" rx="14"/>
  <path d="M 74,630 H 536 A 14,14 0 0 1 550,644 V 690 H 60 V 644 A 14,14 0 0 1 74,630 Z" fill="url(#gPurple)"/>
  <text x="80" y="670" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">4. Doctor's Self-defence</text>
  <text x="80" y="718" class="t-keyval">A doctor sued for negligence may disclose</text>
  <text x="80" y="742" class="t-keyval">relevant patient information in his defence.</text>
  <text x="80" y="780" class="t-keylbl">Examples:</text>
  <text x="80" y="804" class="t-keyval">• Defending a malpractice suit</text>
  <text x="80" y="828" class="t-keyval">• Responding to consumer complaint</text>
  <circle class="ic" cx="520" cy="648" r="12"/>
  <text class="t-info" x="520" y="654" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="exception-crime">
  <rect class="body-white" x="570" y="630" width="490" height="220" rx="14"/>
  <path d="M 584,630 H 1046 A 14,14 0 0 1 1060,644 V 690 H 570 V 644 A 14,14 0 0 1 584,630 Z" fill="url(#gGrey)"/>
  <text x="590" y="670" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">5. Crime / Police</text>
  <text x="590" y="718" class="t-keyval">Information about a serious offence must</text>
  <text x="590" y="742" class="t-keyval">be reported to police (legal duty).</text>
  <text x="590" y="780" class="t-keylbl">Examples:</text>
  <text x="590" y="804" class="t-keyval">• Gunshot wound, attempt suicide attempt,</text>
  <text x="590" y="828" class="t-keyval">poisoning, criminal abortion, child abuse</text>
  <circle class="ic" cx="1040" cy="648" r="12"/>
  <text class="t-info" x="1040" y="654" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="exception-employer">
  <rect class="body-white" x="1080" y="630" width="460" height="220" rx="14"/>
  <path d="M 1094,630 H 1526 A 14,14 0 0 1 1540,644 V 690 H 1080 V 644 A 14,14 0 0 1 1094,630 Z" fill="url(#gBlue)"/>
  <text x="1100" y="670" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">6. Employer / Insurer</text>
  <text x="1100" y="718" class="t-keyval">When examination is done at the request of</text>
  <text x="1100" y="742" class="t-keyval">an employer / insurer, with patient's consent.</text>
  <text x="1100" y="780" class="t-keylbl">Examples:</text>
  <text x="1100" y="804" class="t-keyval">• Pre-employment medical exam</text>
  <text x="1100" y="828" class="t-keyval">• Insurance medical exam</text>
  <circle class="ic" cx="1510" cy="648" r="12"/>
  <text class="t-info" x="1510" y="654" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="exception-consent">
  <rect class="body-white" x="60" y="870" width="1480" height="160" rx="14"/>
  <path d="M 74,870 H 1526 A 14,14 0 0 1 1540,884 V 930 H 60 V 884 A 14,14 0 0 1 74,870 Z" fill="url(#gGreen)"/>
  <text x="800" y="910" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">7. Patient's Own Consent</text>
  <text x="100" y="960" class="t-keyval">If the patient himself expressly consents to disclosure of his medical information, the doctor may disclose.</text>
  <text x="100" y="984" class="t-keyval">Common situations: patient asks for records to be shared with another doctor / employer / family member.</text>
  <text x="100" y="1010" class="t-keyval">Consent must be informed, voluntary, specific, and ideally in writing.</text>
  <circle class="ic" cx="1510" cy="888" r="14"/>
  <text class="t-info" x="1510" y="894" text-anchor="middle">ⓘ</text>
</g>

<rect x="60" y="1050" width="1480" height="50" rx="10" fill="url(#gGrey)"/>
<text x="800" y="1082" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🧠 Mnemonic — "CNT CSE-C": Court · Notifiable · Third-party · doCtor-self · State (crime) · Employer · Consent</text>
</svg>`;
const SVG_MJ08 = `<svg viewBox="0 0 1600 1150" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Professional Misconduct — The 6 A's</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">"Infamous conduct" under IMC Code of Ethics 2002 · Punished by State Medical Council / EMRB</text>

<g data-node-id="misconduct-definition">
  <rect class="nbcr" x="60" y="120" width="1480" height="100" rx="14"/>
  <text x="90" y="158" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⚖️ DEFINITION</text>
  <text x="90" y="186" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Professional misconduct = conduct of a doctor which is considered disgraceful or dishonourable</text>
  <text x="90" y="206" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">by his professional colleagues of good repute and competence. Also called "infamous conduct".</text>
  <circle class="ic" cx="1500" cy="140" r="14"/>
  <text class="t-info" x="1500" y="146" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="six-As-misconduct">
  <rect x="60" y="260" width="1480" height="60" rx="10" fill="url(#gRed)"/>
  <text x="800" y="298" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">🚫 THE 6 A's of Misconduct</text>
</g>

<g data-node-id="A-adultery">
  <rect class="body-white" x="60" y="340" width="490" height="200" rx="14"/>
  <path d="M 74,340 H 536 A 14,14 0 0 1 550,354 V 396 H 60 V 354 A 14,14 0 0 1 74,340 Z" fill="url(#gRed)"/>
  <text x="80" y="378" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">1. ADULTERY</text>
  <text x="80" y="426" class="t-keyval">Voluntary sexual intercourse with a married</text>
  <text x="80" y="450" class="t-keyval">female other than the doctor's own wife.</text>
  <text x="80" y="486" class="t-keylbl">⚠️ Especially:</text>
  <text x="80" y="510" class="t-keyval">With patient or patient's relative (abuse of trust).</text>
  <circle class="ic" cx="520" cy="358" r="12"/>
  <text class="t-info" x="520" y="364" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="A-association">
  <rect class="body-white" x="570" y="340" width="490" height="200" rx="14"/>
  <path d="M 584,340 H 1046 A 14,14 0 0 1 1060,354 V 396 H 570 V 354 A 14,14 0 0 1 584,340 Z" fill="url(#gOrange)"/>
  <text x="590" y="378" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">2. ASSOCIATION (unqualified)</text>
  <text x="590" y="426" class="t-keyval">Associating with or employing an unqualified</text>
  <text x="590" y="450" class="t-keyval">person to perform medical work.</text>
  <text x="590" y="486" class="t-keylbl">Examples:</text>
  <text x="590" y="510" class="t-keyval">Quack assistant operating, signing certificates.</text>
  <circle class="ic" cx="1040" cy="358" r="12"/>
  <text class="t-info" x="1040" y="364" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="A-abortion">
  <rect class="body-white" x="1080" y="340" width="460" height="200" rx="14"/>
  <path d="M 1094,340 H 1526 A 14,14 0 0 1 1540,354 V 396 H 1080 V 354 A 14,14 0 0 1 1094,340 Z" fill="url(#gPurple)"/>
  <text x="1100" y="378" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">3. ABORTION (criminal)</text>
  <text x="1100" y="426" class="t-keyval">Performing or assisting in a criminal abortion</text>
  <text x="1100" y="450" class="t-keyval">— outside MTP Act 1971 framework.</text>
  <text x="1100" y="486" class="t-keylbl">Legal under MTP:</text>
  <text x="1100" y="510" class="t-keyval">Up to 20 wks; 20-24 wks for specific categories.</text>
  <circle class="ic" cx="1510" cy="358" r="12"/>
  <text class="t-info" x="1510" y="364" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="A-associated-unqualified">
  <rect class="body-white" x="60" y="560" width="490" height="200" rx="14"/>
  <path d="M 74,560 H 536 A 14,14 0 0 1 550,574 V 616 H 60 V 574 A 14,14 0 0 1 74,560 Z" fill="url(#gBlue)"/>
  <text x="80" y="598" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">4. ASSOCIATED with quacks</text>
  <text x="80" y="646" class="t-keyval">Issuing a certificate of efficiency in modern</text>
  <text x="80" y="670" class="t-keyval">medicine to an unqualified / non-medical person.</text>
  <text x="80" y="706" class="t-keylbl">Includes:</text>
  <text x="80" y="730" class="t-keyval">Endorsing quacks; fee splitting / dichotomy.</text>
  <circle class="ic" cx="520" cy="578" r="12"/>
  <text class="t-info" x="520" y="584" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="A-alcohol">
  <rect class="body-white" x="570" y="560" width="490" height="200" rx="14"/>
  <path d="M 584,560 H 1046 A 14,14 0 0 1 1060,574 V 616 H 570 V 574 A 14,14 0 0 1 584,560 Z" fill="url(#gGreen)"/>
  <text x="590" y="598" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">5. ALCOHOL (intoxication)</text>
  <text x="590" y="646" class="t-keyval">Practising medicine while under the influence of</text>
  <text x="590" y="670" class="t-keyval">alcohol or any intoxicating drug.</text>
  <text x="590" y="706" class="t-keylbl">If harm caused:</text>
  <text x="590" y="730" class="t-keyval">May escalate to criminal negligence.</text>
  <circle class="ic" cx="1040" cy="578" r="12"/>
  <text class="t-info" x="1040" y="584" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="A-addiction">
  <rect class="body-white" x="1080" y="560" width="460" height="200" rx="14"/>
  <path d="M 1094,560 H 1526 A 14,14 0 0 1 1540,574 V 616 H 1080 V 574 A 14,14 0 0 1 1094,560 Z" fill="url(#gGrey)"/>
  <text x="1100" y="598" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">6. ADDICTION</text>
  <text x="1100" y="646" class="t-keyval">Habitual drug-taking — including prescribed</text>
  <text x="1100" y="670" class="t-keyval">controlled drugs misused by the doctor.</text>
  <text x="1100" y="706" class="t-keylbl">Self-prescription:</text>
  <text x="1100" y="730" class="t-keyval">Of NDPS substances → grounds for removal.</text>
  <circle class="ic" cx="1510" cy="578" r="12"/>
  <text class="t-info" x="1510" y="584" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="other-misconduct">
  <rect x="60" y="790" width="1480" height="240" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/>
  <text x="800" y="828" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">📋 Other Acts also constituting Professional Misconduct</text>
  <text x="100" y="872" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• False certificates (birth, death, fitness, sickness) — common cause of action</text>
  <text x="100" y="896" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Dichotomy / fee splitting — taking or giving commission to colleagues</text>
  <text x="100" y="920" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Improper advertising (large sign-boards, claims of cure, testimonials)</text>
  <text x="100" y="944" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Sex-determination of foetus (PCPNDT Act 1994 violation) — also criminal</text>
  <text x="100" y="968" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Not maintaining indoor medical records for 3 years</text>
  <text x="100" y="992" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Not displaying registration number on clinic / prescription / certificate</text>
  <text x="100" y="1016" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Conviction in any court for an offence involving moral turpitude</text>
  <circle class="ic" cx="1510" cy="810" r="14"/>
  <text class="t-info" x="1510" y="816" text-anchor="middle">ⓘ</text>
</g>

<rect x="60" y="1060" width="1480" height="50" rx="10" fill="url(#gOrange)"/>
<text x="800" y="1092" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">⚖️ Punishment: Warning → Temporary suspension → Permanent erasure from register (de-licensing)</text>
</svg>`;
const SVG_MJ09 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Consumer Protection Act + Consumer Fora</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">CPA 2019 (replaced CPA 1986) · Medical services = "service" · Patients = "consumers"</text>

<g data-node-id="cpa-overview">
  <rect x="60" y="120" width="1480" height="200" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/>
  <text x="800" y="166" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">⚖️ Consumer Protection Act 2019 — Key Points</text>
  <text x="100" y="208" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">📌 Replaces CPA 1986 · Came into force on 20 July 2020</text>
  <text x="100" y="234" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">📌 Indian Medical Association v V.P. Shantha (1995) — Medical services brought within CPA</text>
  <text x="100" y="260" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">📌 Exception: free service (govt hospitals where no fee charged) is NOT a "service" under CPA</text>
  <text x="100" y="286" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">📌 Time limit to file: 2 years from cause of action · Faster than civil court</text>
  <circle class="ic" cx="1510" cy="140" r="14"/>
  <text class="t-info" x="1510" y="146" text-anchor="middle">ⓘ</text>
</g>

<rect x="60" y="350" width="1480" height="50" rx="10" fill="url(#gGrey)"/>
<text x="800" y="382" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="700" fill="white" text-anchor="middle">📋 Three-Tier Consumer Dispute Redressal Hierarchy (CPA 2019)</text>

<g data-node-id="district-forum">
  <rect class="body-white" x="60" y="420" width="490" height="380" rx="14"/>
  <path d="M 74,420 H 536 A 14,14 0 0 1 550,434 V 480 H 60 V 434 A 14,14 0 0 1 74,420 Z" fill="url(#gGreen)"/>
  <text x="80" y="460" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">📍 District Commission</text>
  <text x="80" y="520" class="t-keylbl">📌 Level:</text>
  <text x="180" y="520" class="t-keyval">District-level (one per district)</text>
  <text x="80" y="554" class="t-keylbl">💰 Pecuniary jurisdiction:</text>
  <text x="80" y="578" class="t-keyval">Up to <strong>₹1 crore</strong> (CPA 2019)</text>
  <text x="80" y="612" class="t-keylbl">👨‍⚖️ Composition:</text>
  <text x="80" y="636" class="t-keyval">President + 2 members (1 woman)</text>
  <text x="80" y="670" class="t-keylbl">⏱️ Time to file:</text>
  <text x="80" y="694" class="t-keyval">2 years from cause</text>
  <text x="80" y="728" class="t-keylbl">↪️ Appeal to:</text>
  <text x="80" y="752" class="t-keyval">State Commission (within 45 days)</text>
  <circle class="ic" cx="520" cy="438" r="12"/>
  <text class="t-info" x="520" y="444" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="state-commission">
  <rect class="body-white" x="570" y="420" width="490" height="380" rx="14"/>
  <path d="M 584,420 H 1046 A 14,14 0 0 1 1060,434 V 480 H 570 V 434 A 14,14 0 0 1 584,420 Z" fill="url(#gOrange)"/>
  <text x="590" y="460" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">📍 State Commission</text>
  <text x="590" y="520" class="t-keylbl">📌 Level:</text>
  <text x="690" y="520" class="t-keyval">State-level (one per state)</text>
  <text x="590" y="554" class="t-keylbl">💰 Pecuniary jurisdiction:</text>
  <text x="590" y="578" class="t-keyval"><strong>₹1 crore</strong> to <strong>₹10 crore</strong> (CPA 2019)</text>
  <text x="590" y="612" class="t-keylbl">👨‍⚖️ Composition:</text>
  <text x="590" y="636" class="t-keyval">President (HC judge) + ≥ 4 members</text>
  <text x="590" y="670" class="t-keylbl">🎯 Original + Appellate:</text>
  <text x="590" y="694" class="t-keyval">Hears appeals from District Commissions</text>
  <text x="590" y="728" class="t-keylbl">↪️ Appeal to:</text>
  <text x="590" y="752" class="t-keyval">National Commission (within 30 days)</text>
  <circle class="ic" cx="1040" cy="438" r="12"/>
  <text class="t-info" x="1040" y="444" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="national-commission">
  <rect class="body-white" x="1080" y="420" width="460" height="380" rx="14" stroke="#C58A3D" stroke-width="3"/>
  <path d="M 1094,420 H 1526 A 14,14 0 0 1 1540,434 V 480 H 1080 V 434 A 14,14 0 0 1 1094,420 Z" fill="url(#gRed)"/>
  <text x="1100" y="460" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🏛️ National Commission</text>
  <text x="1100" y="520" class="t-keylbl">📌 Level:</text>
  <text x="1200" y="520" class="t-keyval">National (NCDRC, New Delhi)</text>
  <text x="1100" y="554" class="t-keylbl">💰 Pecuniary jurisdiction:</text>
  <text x="1100" y="578" class="t-keyval">Above <strong>₹10 crore</strong> (CPA 2019)</text>
  <text x="1100" y="612" class="t-keylbl">👨‍⚖️ Composition:</text>
  <text x="1100" y="636" class="t-keyval">President (SC judge) + ≥ 4 members</text>
  <text x="1100" y="670" class="t-keylbl">🎯 Original + Appellate:</text>
  <text x="1100" y="694" class="t-keyval">Hears appeals from State Commissions</text>
  <text x="1100" y="728" class="t-keylbl">↪️ Appeal to:</text>
  <text x="1100" y="752" class="t-keyval">Supreme Court (within 30 days)</text>
  <circle class="ic" cx="1510" cy="438" r="12"/>
  <text class="t-info" x="1510" y="444" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="cpa-remedies">
  <rect x="60" y="830" width="1480" height="170" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/>
  <text x="800" y="868" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">⚖️ Remedies Available to Consumers</text>
  <text x="100" y="906" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Compensatory damages (medical expenses, loss of income, suffering)</text>
  <text x="100" y="930" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Punitive damages (in case of gross negligence)</text>
  <text x="100" y="954" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Refund of fees + replacement of defective service</text>
  <text x="100" y="978" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Cease-and-desist orders against unfair practices</text>
  <circle class="ic" cx="1510" cy="850" r="14"/>
  <text class="t-info" x="1510" y="856" text-anchor="middle">ⓘ</text>
</g>

<rect x="60" y="1030" width="1480" height="50" rx="10" fill="url(#gOrange)"/>
<text x="800" y="1062" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 Memory: District ≤ ₹1 cr · State ₹1-10 cr · National &gt; ₹10 cr · 2-year filing limit</text>
</svg>`;
const SVG_MJ10 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Biomedical Waste Management — Colour-coded Segregation</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">BMW Rules 2016 (amended 2018, 2019) · Mandatory at source · 4 colour-coded categories</text>

<g data-node-id="bmw-overview">
  <rect class="nbcr" x="60" y="120" width="1480" height="90" rx="14"/>
  <text x="90" y="158" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🗑️ BIOMEDICAL WASTE</text>
  <text x="90" y="186" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= any waste generated during diagnosis, treatment, immunisation of humans/animals, or research activities.</text>
  <circle class="ic" cx="1500" cy="140" r="14"/>
  <text class="t-info" x="1500" y="146" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="bin-yellow">
  <rect class="body-white" x="60" y="240" width="370" height="440" rx="14"/>
  <path d="M 74,240 H 416 A 14,14 0 0 1 430,254 V 320 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gYellow)"/>
  <text x="245" y="278" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">🟡 YELLOW</text>
  <text x="245" y="306" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="rgba(255,255,255,0.92)" text-anchor="middle">Highly infectious + anatomical</text>
  <text x="80" y="360" class="t-keylbl">📋 Contents:</text>
  <text x="80" y="386" class="t-keyval">• Human anatomical waste</text>
  <text x="80" y="410" class="t-keyval">• Animal anatomical waste</text>
  <text x="80" y="434" class="t-keyval">• Soiled waste (blood-stained dressings)</text>
  <text x="80" y="458" class="t-keyval">• Expired / discarded medicines</text>
  <text x="80" y="482" class="t-keyval">• Chemical waste</text>
  <text x="80" y="506" class="t-keyval">• Microbiology, biotechnology waste</text>
  <text x="80" y="530" class="t-keyval">• Discarded linen / mattress</text>
  <text x="80" y="568" class="t-keylbl">🔥 Treatment:</text>
  <text x="80" y="594" class="t-keyval">Incineration / deep burial / autoclaving</text>
  <text x="80" y="620" class="t-keyval">followed by landfill (per category)</text>
  <text x="80" y="656" class="t-keylbl">📌 Bag:</text>
  <text x="140" y="656" class="t-keyval">Yellow non-chlorinated plastic</text>
  <circle class="ic" cx="400" cy="258" r="12"/>
  <text class="t-info" x="400" y="264" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="bin-red">
  <rect class="body-white" x="450" y="240" width="370" height="440" rx="14"/>
  <path d="M 464,240 H 806 A 14,14 0 0 1 820,254 V 320 H 450 V 254 A 14,14 0 0 1 464,240 Z" fill="url(#gRed)"/>
  <text x="635" y="278" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">🔴 RED</text>
  <text x="635" y="306" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="rgba(255,255,255,0.92)" text-anchor="middle">Recyclable contaminated plastics</text>
  <text x="470" y="360" class="t-keylbl">📋 Contents:</text>
  <text x="470" y="386" class="t-keyval">• Contaminated plastic waste:</text>
  <text x="490" y="410" class="t-keyval">– IV tubing &amp; sets</text>
  <text x="490" y="434" class="t-keyval">– Urine bags / catheters</text>
  <text x="490" y="458" class="t-keyval">– Syringes (without needles)</text>
  <text x="490" y="482" class="t-keyval">– Gloves (latex / nitrile)</text>
  <text x="490" y="506" class="t-keyval">– Blood / urine bags</text>
  <text x="490" y="530" class="t-keyval">– Vacutainers without sharps</text>
  <text x="470" y="568" class="t-keylbl">♻️ Treatment:</text>
  <text x="470" y="594" class="t-keyval">Autoclaving / micro-waving →</text>
  <text x="470" y="620" class="t-keyval">shredding → sent to recyclers</text>
  <text x="470" y="656" class="t-keylbl">📌 Bag:</text>
  <text x="530" y="656" class="t-keyval">Red non-chlorinated plastic</text>
  <circle class="ic" cx="790" cy="258" r="12"/>
  <text class="t-info" x="790" y="264" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="bin-white">
  <rect class="body-white" x="840" y="240" width="370" height="440" rx="14"/>
  <path d="M 854,240 H 1196 A 14,14 0 0 1 1210,254 V 320 H 840 V 254 A 14,14 0 0 1 854,240 Z" fill="url(#gGrey)"/>
  <text x="1025" y="278" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">⚪ WHITE</text>
  <text x="1025" y="306" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="rgba(255,255,255,0.92)" text-anchor="middle">Sharps (puncture-proof)</text>
  <text x="860" y="360" class="t-keylbl">📋 Contents:</text>
  <text x="860" y="386" class="t-keyval">• Needles (used / unused)</text>
  <text x="860" y="410" class="t-keyval">• Syringes WITH needles fixed</text>
  <text x="860" y="434" class="t-keyval">• Scalpels &amp; blades</text>
  <text x="860" y="458" class="t-keyval">• Lancets</text>
  <text x="860" y="482" class="t-keyval">• Trocars &amp; other sharps</text>
  <text x="860" y="506" class="t-keyval">• Contaminated glass slides</text>
  <text x="860" y="568" class="t-keylbl">🔥 Treatment:</text>
  <text x="860" y="594" class="t-keyval">Autoclave / dry heat sterilisation</text>
  <text x="860" y="620" class="t-keyval">→ shredding → encapsulation /</text>
  <text x="860" y="644" class="t-keyval">sanitary landfill</text>
  <text x="860" y="678" class="t-keylbl">📌 Container:</text>
  <text x="990" y="678" class="t-keyval">White translucent puncture-proof</text>
  <circle class="ic" cx="1180" cy="258" r="12"/>
  <text class="t-info" x="1180" y="264" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="bin-blue">
  <rect class="body-white" x="1230" y="240" width="310" height="440" rx="14"/>
  <path d="M 1244,240 H 1526 A 14,14 0 0 1 1540,254 V 320 H 1230 V 254 A 14,14 0 0 1 1244,240 Z" fill="url(#gBlue)"/>
  <text x="1385" y="278" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">🔵 BLUE</text>
  <text x="1385" y="306" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="600" fill="rgba(255,255,255,0.92)" text-anchor="middle">Glass + metallic implants</text>
  <text x="1250" y="360" class="t-keylbl">📋 Contents:</text>
  <text x="1250" y="386" class="t-keyval">• Broken / discarded</text>
  <text x="1250" y="410" class="t-keyval">  glass containers</text>
  <text x="1250" y="434" class="t-keyval">• Ampoules, vials</text>
  <text x="1250" y="458" class="t-keyval">• Empty / disposed</text>
  <text x="1250" y="482" class="t-keyval">  medicine bottles</text>
  <text x="1250" y="506" class="t-keyval">• Metallic body implants</text>
  <text x="1250" y="544" class="t-keylbl">♻️ Treatment:</text>
  <text x="1250" y="570" class="t-keyval">Disinfection (chemical)</text>
  <text x="1250" y="594" class="t-keyval">→ recycling</text>
  <text x="1250" y="628" class="t-keylbl">📌 Container:</text>
  <text x="1250" y="654" class="t-keyval">Blue puncture-proof,</text>
  <text x="1250" y="678" class="t-keyval">leak-proof box</text>
  <circle class="ic" cx="1510" cy="258" r="12"/>
  <text class="t-info" x="1510" y="264" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="bmw-quantity">
  <rect x="60" y="710" width="1480" height="160" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/>
  <text x="800" y="750" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">📊 Key BMW Numbers to Remember</text>
  <text x="100" y="790" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Total daily BMW generated in India: ~700 tonnes (urban hospitals contribute ~75 %)</text>
  <text x="100" y="814" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Liquid waste threshold: pH 6.5 – 9.0 before discharge (BMW Rules 2016)</text>
  <text x="100" y="838" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Waste stored ≤ 48 hours before treatment / disposal · Autoclave: 121 °C, 15 psi, 60 min</text>
  <circle class="ic" cx="1510" cy="730" r="14"/>
  <text class="t-info" x="1510" y="736" text-anchor="middle">ⓘ</text>
</g>

<rect x="60" y="900" width="1480" height="60" rx="10" fill="url(#gGrey)"/>
<text x="800" y="938" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white" text-anchor="middle">🧠 Mnemonic — "YRWB": Yellow (infectious) · Red (plastics) · White (sharps) · Blue (glass + implants)</text>

<rect x="60" y="980" width="1480" height="60" rx="10" fill="url(#gOrange)"/>
<text x="800" y="1018" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">⚠️ Improper BMW handling → professional misconduct + criminal liability under EPA 1986</text>
</svg>`;
const SVG_MJ11 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Medical Records + Key Statutory Acts</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Documentation duties, retention norms, and the major Acts every doctor must know</text>

<g data-node-id="records-overview">
  <rect x="60" y="120" width="1480" height="220" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/>
  <text x="800" y="166" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">📋 Medical Records — Maintenance &amp; Retention</text>
  <text x="100" y="208" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">📌 Indoor records must be maintained for at least <strong>3 years</strong> (IMC Regulations 2002 §1.3.1)</text>
  <text x="100" y="234" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">📌 Patient / authorised representative may request a copy — must be provided within <strong>72 hours</strong></text>
  <text x="100" y="260" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">📌 PCPNDT records, MTP records, transfusion records — kept longer per their respective Acts</text>
  <text x="100" y="286" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">📌 Format: legible, dated, signed; corrections by strike-through + initial (no white-out / overwrite)</text>
  <text x="100" y="316" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.78)">Failure to maintain = professional misconduct + grounds for adverse inference in negligence litigation</text>
  <circle class="ic" cx="1510" cy="140" r="14"/>
  <text class="t-info" x="1510" y="146" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="act-mtp">
  <rect class="body-white" x="60" y="370" width="490" height="220" rx="14"/>
  <path d="M 74,370 H 536 A 14,14 0 0 1 550,384 V 430 H 60 V 384 A 14,14 0 0 1 74,370 Z" fill="url(#gPurple)"/>
  <text x="80" y="410" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">🤰 MTP Act 1971 (amended 2021)</text>
  <text x="80" y="458" class="t-keyval">Permits medical termination of pregnancy in</text>
  <text x="80" y="482" class="t-keyval">specific circumstances by an RMP.</text>
  <text x="80" y="514" class="t-keylbl">Limits (amendment 2021):</text>
  <text x="80" y="538" class="t-keyval">• Up to 20 weeks — 1 doctor's opinion</text>
  <text x="80" y="562" class="t-keyval">• 20–24 weeks — 2 doctors + specific categories</text>
  <circle class="ic" cx="520" cy="388" r="12"/>
  <text class="t-info" x="520" y="394" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="act-pcpndt">
  <rect class="body-white" x="570" y="370" width="490" height="220" rx="14"/>
  <path d="M 584,370 H 1046 A 14,14 0 0 1 1060,384 V 430 H 570 V 384 A 14,14 0 0 1 584,370 Z" fill="url(#gRed)"/>
  <text x="590" y="410" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">🚫 PCPNDT Act 1994</text>
  <text x="590" y="458" class="t-keyval">Prohibits prenatal sex determination &amp;</text>
  <text x="590" y="482" class="t-keyval">female feticide. Strict regulation of USG clinics.</text>
  <text x="590" y="514" class="t-keylbl">Records:</text>
  <text x="660" y="514" class="t-keyval">Form F mandatory for every USG</text>
  <text x="590" y="538" class="t-keylbl">Punishment:</text>
  <text x="700" y="538" class="t-keyval">Up to 3 yrs + ₹10,000 (first offence)</text>
  <text x="590" y="568" class="t-keyval">Removal from medical register on conviction.</text>
  <circle class="ic" cx="1040" cy="388" r="12"/>
  <text class="t-info" x="1040" y="394" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="act-organ">
  <rect class="body-white" x="1080" y="370" width="460" height="220" rx="14"/>
  <path d="M 1094,370 H 1526 A 14,14 0 0 1 1540,384 V 430 H 1080 V 384 A 14,14 0 0 1 1094,370 Z" fill="url(#gGreen)"/>
  <text x="1100" y="410" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">💉 THO Act 1994</text>
  <text x="1100" y="458" class="t-keyval">Transplantation of Human Organs Act —</text>
  <text x="1100" y="482" class="t-keyval">regulates organ &amp; tissue transplantation.</text>
  <text x="1100" y="514" class="t-keylbl">Key points:</text>
  <text x="1100" y="538" class="t-keyval">• Brain death = legal definition of death</text>
  <text x="1100" y="562" class="t-keyval">• Min age for donor consent = 18 yrs</text>
  <text x="1100" y="586" class="t-keyval">• Commercial dealing in organs = criminal</text>
  <circle class="ic" cx="1510" cy="388" r="12"/>
  <text class="t-info" x="1510" y="394" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="act-drugs">
  <rect class="body-white" x="60" y="610" width="490" height="220" rx="14"/>
  <path d="M 74,610 H 536 A 14,14 0 0 1 550,624 V 670 H 60 V 624 A 14,14 0 0 1 74,610 Z" fill="url(#gOrange)"/>
  <text x="80" y="650" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">💊 Drugs &amp; Cosmetics Act 1940</text>
  <text x="80" y="698" class="t-keyval">Regulates import, manufacture, distribution,</text>
  <text x="80" y="722" class="t-keyval">and sale of drugs &amp; cosmetics in India.</text>
  <text x="80" y="754" class="t-keylbl">Schedules of relevance:</text>
  <text x="80" y="778" class="t-keyval">• Schedule H — Rx-only drugs</text>
  <text x="80" y="802" class="t-keyval">• Schedule H1 — Rx + name in register</text>
  <text x="80" y="826" class="t-keyval">• Schedule X — NDPS-equivalent narcotics</text>
  <circle class="ic" cx="520" cy="628" r="12"/>
  <text class="t-info" x="520" y="634" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="act-factory">
  <rect class="body-white" x="570" y="610" width="490" height="220" rx="14"/>
  <path d="M 584,610 H 1046 A 14,14 0 0 1 1060,624 V 670 H 570 V 624 A 14,14 0 0 1 584,610 Z" fill="url(#gGrey)"/>
  <text x="590" y="650" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">🏭 Factories Act 1948</text>
  <text x="590" y="698" class="t-keyval">Regulates labour, working conditions, child</text>
  <text x="590" y="722" class="t-keyval">labour, safety in industrial establishments.</text>
  <text x="590" y="754" class="t-keylbl">Key thresholds (for FMT):</text>
  <text x="590" y="778" class="t-keyval">• Children &lt; 14 yrs — cannot work in factories</text>
  <text x="590" y="802" class="t-keyval">• Max work hours incl. overtime = 60/week</text>
  <text x="590" y="826" class="t-keyval">• Mandatory medical exam of young workers</text>
  <circle class="ic" cx="1040" cy="628" r="12"/>
  <text class="t-info" x="1040" y="634" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="act-constitutional">
  <rect class="body-white" x="1080" y="610" width="460" height="220" rx="14"/>
  <path d="M 1094,610 H 1526 A 14,14 0 0 1 1540,624 V 670 H 1080 V 624 A 14,14 0 0 1 1094,610 Z" fill="url(#gBlue)"/>
  <text x="1100" y="650" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">📜 Constitutional Articles (Children)</text>
  <text x="1100" y="698" class="t-keyval">Provisions related to children's welfare:</text>
  <text x="1100" y="730" class="t-keyval">• Art 21-A — Right to education (6-14 yrs)</text>
  <text x="1100" y="754" class="t-keyval">• Art 23 — Prohibits trafficking + forced labour</text>
  <text x="1100" y="778" class="t-keyval">• Art 24 — No child &lt; 14 in hazardous work</text>
  <text x="1100" y="810" class="t-keyval"><strong>Art 42 — Maternity benefit (NOT child-specific)</strong></text>
  <circle class="ic" cx="1510" cy="628" r="12"/>
  <text class="t-info" x="1510" y="634" text-anchor="middle">ⓘ</text>
</g>

<rect x="60" y="850" width="1480" height="60" rx="10" fill="url(#gGreen)"/>
<text x="800" y="888" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">📋 Medical Record Retention: Indoor — 3 yrs · MTP — 5 yrs · PCPNDT Form F — 2 yrs · Trans­fusion — 5 yrs</text>

<rect x="60" y="920" width="1480" height="170" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/>
<text x="800" y="958" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="white" text-anchor="middle">⚠️ Other Acts a Doctor Should Know</text>
<text x="100" y="992" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Mental Healthcare Act 2017 (replaces Mental Health Act 1987) · Persons with Disabilities Act 2016</text>
<text x="100" y="1016" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• POCSO Act 2012 (sexual offences against children) · Maternity Benefit Act 1961 (26 wks paid leave)</text>
<text x="100" y="1040" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Clinical Establishments Act 2010 · Surrogacy (Regulation) Act 2021 · NMC Act 2019</text>
<text x="100" y="1064" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.92)">• Workmen's Compensation Act 1923 (work-related injury) · Born Wealth Act / Birth-Death Reg Act 1969</text>
</svg>`;

const NODES = {
  'bns-card': { label: 'BNS 2023 — Bharatiya Nyaya Sanhita', info: '<p>The <strong>Bharatiya Nyaya Sanhita 2023</strong> is India\'s new substantive criminal code, replacing the colonial-era <strong>Indian Penal Code 1860</strong>.</p><p><strong>Defines what is a crime</strong> and prescribes punishments. Total <strong>358 sections</strong> (vs IPC\'s 511). Effective from <strong>1 July 2024</strong>.</p><p><strong>New offences</strong> introduced: organised crime, mob lynching, terrorism with snatching definitions modernised. Adultery (old IPC §497) has been removed (struck down by Supreme Court). Sedition (IPC §124A) is now expanded under §150 BNS as "endangering sovereignty/unity".</p><p>Key sections for FMT: §103 (murder, was §302 IPC), §63 (rape, was §375), §106 (causing death by negligence, was §304-A), §229 (false evidence/perjury, was §193).</p>', tags: ['IPC 1860 → BNS 2023', '358 sections', 'Effective 1-Jul-2024'] },
  'bnss-card': { label: 'BNSS 2023 — Bharatiya Nagarik Suraksha Sanhita', info: '<p>The <strong>Bharatiya Nagarik Suraksha Sanhita 2023</strong> is India\'s new criminal procedural law, replacing the <strong>Code of Criminal Procedure 1973</strong>.</p><p>Sets the <strong>mechanism for trial, investigation, arrest, bail</strong>. Total <strong>531 sections</strong>. Introduces time-bound trials, e-FIR registration, video-conferencing trials, mandatory forensic investigation for offences ≥ 7 years.</p><p>Key sections for FMT: §194 BNSS (police inquest, old §174 CrPC), §196 BNSS (Magistrate inquest, old §176 CrPC).</p>', tags: ['CrPC 1973 → BNSS 2023', '531 sections', 'Time-bound trials'] },
  'bsa-card': { label: 'BSA 2023 — Bharatiya Sakshya Adhiniyam', info: '<p>The <strong>Bharatiya Sakshya Adhiniyam 2023</strong> is India\'s new law of evidence, replacing the <strong>Indian Evidence Act 1872</strong>.</p><p>Governs <strong>collection, admissibility, and use of evidence</strong> in court — both civil and criminal. Total <strong>170 sections</strong>. Major change: <strong>electronic records are now primary evidence</strong> (not just secondary), reflecting digital reality.</p><p>Key sections for FMT: <strong>§26 BSA (dying declaration, old §32 IEA)</strong>, <strong>§39 BSA (expert opinion, old §45 IEA)</strong>.</p>', tags: ['IEA 1872 → BSA 2023', '170 sections', 'Electronic records'] },
  'mapping-table': { label: 'Old ↔ New Code Mapping', info: '<p>All three new codes came into effect simultaneously on <strong>1 July 2024</strong>. The three old codes (IPC, CrPC, IEA) were formally repealed on the same date.</p><p><strong>Transitional rule:</strong> Cases registered <em>before</em> 1 July 2024 continue under the old codes through their natural lifecycle (trial, appeal). Cases registered <em>after</em> 1 July 2024 follow the new codes.</p><p>For FMT exam purposes, both old and new section numbers are testable. Always quote both: e.g., "murder under IPC §302 / BNS §103".</p>', tags: ['Effective 1-Jul-2024', 'Pre-2024 cases continue under old codes'] },

  'nmc': { label: 'National Medical Commission (NMC)', info: '<p>The <strong>National Medical Commission</strong> is the apex regulatory body for medical education and practice in India, established under the <strong>NMC Act 2019</strong>. It replaced the Medical Council of India (MCI) on <strong>25 September 2020</strong>.</p><p><strong>Composition:</strong> 33 members — chairperson + 10 ex-officio members + 22 part-time members. Headquarters at New Delhi.</p><p><strong>Functions:</strong> Frames policies for medical education + practice, sets standards, recognises medical colleges, maintains the National Medical Register, oversees four autonomous boards.</p>', tags: ['NMC Act 2019', '4 autonomous boards', '33 members'] },
  'ugmeb': { label: 'Under-Graduate Medical Education Board (UGMEB)', info: '<p>One of the four autonomous boards under the NMC. Regulates all aspects of <strong>undergraduate medical education (MBBS)</strong>.</p><p><strong>Functions:</strong></p><ul><li>Frames MBBS curriculum and competency standards</li><li>Sets norms for admission (NEET-UG)</li><li>Lays down standards for assessment and examinations</li><li>Approves new medical colleges for UG courses</li></ul>', tags: ['MBBS curriculum', 'NEET-UG'] },
  'pgmeb': { label: 'Post-Graduate Medical Education Board (PGMEB)', info: '<p>Regulates all aspects of <strong>postgraduate medical education</strong> in India — MD, MS, DM, MCh, DNB.</p><p><strong>Functions:</strong></p><ul><li>Frames PG curriculum and competency standards</li><li>Sets norms for PG entrance (NEET-PG, INI-CET)</li><li>Approves PG seats in medical colleges</li><li>Recognises specialty / super-specialty courses</li></ul>', tags: ['MD/MS/DM/MCh', 'NEET-PG / INI-CET'] },
  'marb': { label: 'Medical Assessment & Rating Board (MARB)', info: '<p>The quality-control arm of the NMC. Responsible for <strong>inspection, assessment, and rating</strong> of medical colleges.</p><p><strong>Functions:</strong></p><ul><li>Conducts annual inspections of medical colleges</li><li>Rates institutions on quality of education, infrastructure, faculty</li><li>Recommends action against substandard colleges (warning, suspension, deregistration)</li><li>Publishes ratings to inform aspiring students</li></ul>', tags: ['College inspections', 'Quality control'] },
  'emrb': { label: 'Ethics & Medical Registration Board (EMRB)', info: '<p>The <strong>Ethics & Medical Registration Board</strong> maintains the <strong>National Medical Register (NMR)</strong> and enforces the ethics code for doctors.</p><p><strong>Functions:</strong></p><ul><li>Maintains the NMR (online national-level register of all RMPs)</li><li>Frames the ethics code for medical practice</li><li>Hears appeals from State Medical Council decisions on professional misconduct</li><li>Has power to remove names from the register (de-licensing)</li></ul>', tags: ['Maintains NMR', 'Appellate body on misconduct'] },
  'smc': { label: 'State Medical Council (SMC)', info: '<p>Each Indian state has its own <strong>State Medical Council</strong>, which is the first point of contact for medical practice registration and disciplinary matters in that state.</p><p><strong>Functions:</strong></p><ul><li>Maintains the State Medical Register (SMR)</li><li>Registers doctors qualified for practice in the state</li><li>Hears complaints of professional misconduct (first authority)</li><li>Disciplinary actions: warning → temporary suspension → permanent removal</li></ul><p><strong>Appeal mechanism:</strong> A doctor aggrieved by an SMC decision may appeal to the EMRB (NMC) within prescribed time.</p>', tags: ['Per-state registry', 'First disciplinary forum'] },
  'imr': { label: 'Indian / National Medical Register (NMR + SMR)', info: '<p>The <strong>Medical Register</strong> is the official list of doctors qualified and authorised to practise medicine in India.</p><p><strong>Two tiers:</strong></p><ul><li><strong>National Medical Register (NMR)</strong> — maintained by the EMRB under NMC; aggregates all registered doctors in India</li><li><strong>State Medical Register (SMR)</strong> — maintained by each State Medical Council</li></ul><p><strong>Registered Medical Practitioner (RMP):</strong> A person whose name appears in the SMR / NMR. Only an RMP can legally practise medicine, prescribe drugs, issue medical certificates, sign medicolegal reports, or perform autopsies in India.</p><p><strong>Significance:</strong> Practising without registration is a <strong>criminal offence</strong> (NMC Act §34). Erasure from the register = "de-licensing".</p>', tags: ['NMR + SMR', 'Practising without it = offence'] },

  'expressed-consent': { label: 'Expressed Consent (written / oral)', info: '<p><strong>Expressed consent</strong> is explicitly stated by the patient — in writing or orally.</p><p><strong>Written</strong> consent is mandatory for:</p><ul><li>Surgery and invasive procedures</li><li>Anaesthesia (general / regional)</li><li>Sterilization (vasectomy, tubectomy)</li><li>Medical Termination of Pregnancy (MTP)</li><li>Blood transfusion</li><li>Clinical trials / research</li></ul><p>Written consent should be obtained on a printed proforma in the patient\'s own language, with the patient\'s signature (or thumb impression) and a witness signature. It is the strongest medicolegal protection.</p><p><strong>Oral</strong> consent is acceptable for minor procedures (suturing of a small wound, IV cannulation) but should ideally be documented.</p><p><strong>Withdrawal:</strong> A patient may withdraw consent at any time; the procedure must stop.</p>', tags: ['Surgery / anaesthesia / MTP need WRITTEN', 'Withdrawable anytime'] },
  'implied-consent': { label: 'Implied Consent', info: '<p><strong>Implied consent</strong> is consent inferred from a patient\'s conduct rather than explicitly stated.</p><p><strong>Examples:</strong></p><ul><li>Patient extending an arm for a blood draw</li><li>Walking into the OPD and consulting a doctor</li><li>Opening the mouth for throat examination</li><li>Lying on the examination couch when asked</li></ul><p><strong>Scope:</strong> Limited to <strong>routine, non-invasive procedures</strong>. Cannot cover surgery, anaesthesia, sterilization, or any invasive intervention — those need expressed (preferably written) consent.</p><p><strong>Medicolegal status:</strong> Recognised in court but weaker than written consent. Always upgrade to expressed consent for anything beyond a routine consultation.</p>', tags: ['Routine / non-invasive only', 'Inferred from conduct'] },
  'loco-parentis': { label: 'Loco Parentis (in place of a parent)', info: '<p><strong>Loco parentis</strong> (Latin: "in the place of a parent") is a legal doctrine that allows a non-parent in temporary custody of a minor to consent to emergency medical treatment.</p><p><strong>Who can give loco parentis consent:</strong></p><ul><li>School teacher / principal (sports injury, illness at school)</li><li>Hostel warden (illness in residence)</li><li>Guardian or relative (when parents unreachable)</li><li>Accompanying adult in road-accident scenarios</li></ul><p><strong>Scope:</strong> Emergency treatment only — life-saving or pain-relieving. Definitive surgery or non-urgent intervention must wait until parents are reached.</p><p><strong>Note:</strong> For an unconscious adult, the doctrine of <strong>necessity / implied consent</strong> applies — the doctor may proceed with life-saving treatment without consent.</p>', tags: ['Emergency only', 'School teacher / hostel warden'] },
  'informed-consent': { label: 'Informed Consent', info: '<p><strong>Informed consent</strong> is consent given by a patient <em>after</em> being informed about all material facts of the proposed procedure.</p><p><strong>What must be disclosed</strong> (the four pillars of disclosure):</p><ol><li><strong>Nature and purpose</strong> of the procedure</li><li><strong>Material risks</strong> and possible complications</li><li><strong>Alternative treatment options</strong></li><li><strong>Consequences of refusing</strong> treatment</li></ol><p><strong>Standard test:</strong> The <em>"reasonable patient" test</em> — what a reasonable patient would want to know before deciding. (Indian courts increasingly follow this; older "reasonable doctor" or Bolam test is being moved away from.)</p><p><strong>Why most-tested:</strong> Failure to obtain informed consent is one of the most common grounds for medical-negligence litigation. The Supreme Court of India has affirmed informed consent as a patient\'s right (Samira Kohli v Dr Prabha Manchanda, 2008).</p>', tags: ['⭐ Most-tested', '4 disclosures', 'Samira Kohli judgment'] },
  'valid-consent': { label: 'Criteria for a Valid Consent', info: '<p>For consent to be legally <strong>valid</strong>, four criteria must all be satisfied:</p><ol><li><strong>AGE:</strong> ≥ 12 yrs for general examination; <strong>≥ 18 yrs</strong> for surgery, anaesthesia, MTP, organ donation, sterilization, marriage, and clinical trials.</li><li><strong>FREE:</strong> Voluntary, given without coercion, undue influence, fraud, or intoxication. Consent under duress is invalid.</li><li><strong>INFORMED:</strong> Patient told the nature, purpose, material risks, alternatives, and consequences of refusal.</li><li><strong>SPECIFIC:</strong> Consent is for a particular procedure; blanket consent ("doctor may do whatever necessary") is invalid. May be withdrawn at any time.</li></ol><p><strong>Mental capacity:</strong> The patient must be of sound mind at the time of consent. A patient in shock, severely intoxicated, or with significant cognitive impairment cannot give valid consent — substitute decision-makers (next of kin, loco parentis, or doctrine of necessity) apply.</p>', tags: ['4 criteria: Age + Free + Informed + Specific', 'Withdrawable'] },
  'negligence-duty': { label: 'Duty of Care (Negligence Component 1)', info: '<p>The first element of negligence — the doctor must owe a <strong>legal duty of care</strong> to the patient.</p><p><strong>When duty arises:</strong> The moment a doctor-patient relationship is established. This can be explicit (acceptance in OPD) or implicit (emergency in casualty).</p><p><strong>Good Samaritan rule:</strong> A doctor who voluntarily aids a stranger in emergency does not owe duty until intervention begins — and is protected from later liability under Good Samaritan provisions.</p><p>Govt-employed doctors on duty owe a duty to all patients of the institution.</p>', tags: ['Component 1 of 4', 'Doctor-patient relationship'] },
  'negligence-dereliction': { label: 'Dereliction / Breach (Negligence Component 2)', info: '<p>Second element — the doctor <strong>breached the standard of care</strong> that a reasonably skilled doctor would have met in the same circumstances.</p><p><strong>Bolam Test (1957):</strong> A doctor is not negligent if he acted in accordance with a practice accepted by a responsible body of medical opinion. India\'s Supreme Court applies a modified Bolam (Bolitho test) — the practice must also be logical and reasonable.</p><p><strong>Common breaches:</strong> wrong-site surgery, retained foreign body, misdiagnosis from inadequate history, failure to refer to a specialist.</p>', tags: ['Component 2 of 4', 'Bolam test'] },
  'negligence-direct': { label: 'Direct Causation (Negligence Component 3)', info: '<p>Third element — there must be a <strong>direct causal link</strong> between the breach and the patient\'s injury.</p><p><strong>"But for" test:</strong> But for the doctor\'s breach, would the harm have occurred? If yes (harm would have happened anyway), causation is not established.</p><p><strong>Chain of causation can be broken by:</strong></p><ul><li><strong>Novus actus interveniens</strong> — a new intervening event</li><li>Patient\'s own negligence (non-compliance)</li><li>Pre-existing disease unrelated to the breach</li></ul>', tags: ['Component 3 of 4', '"But for" test'] },
  'negligence-damage': { label: 'Damage (Negligence Component 4)', info: '<p>Fourth element — the patient must have <strong>actually suffered damage / injury / loss</strong>.</p><p><strong>Types of damage:</strong> physical injury, permanent disability, death, mental suffering, financial loss (cost of further treatment, lost income), loss of consortium, loss of reasonable expectations.</p><p><strong>Damages awarded:</strong> Compensatory (covering actual loss) ± Exemplary / Punitive (in cases of gross negligence to punish and deter).</p><p><strong>Critical rule:</strong> No damage = no case. Even if duty + breach + causation are proved, without quantifiable damage no negligence suit can succeed.</p>', tags: ['Component 4 of 4', 'No damage → no case'] },

  'def-volenti': { label: 'Volenti Non Fit Injuria', info: '<p>Latin: <em>"To one who volunteers, no injury is done"</em>.</p><p>A patient who has knowingly accepted a risk (through informed consent) cannot later sue for that specific risk materialising.</p><p><strong>Application:</strong> After full informed consent disclosing material risks, if a disclosed complication occurs, the patient is deemed to have accepted that risk.</p><p><strong>Limit:</strong> Does NOT cover negligent care. Accepting the risk of surgery does not mean accepting below-standard surgery.</p>', tags: ['Informed consent defence'] },
  'def-contributory': { label: 'Contributory Negligence', info: '<p>A <strong>partial defence</strong> — patient\'s own negligence contributed to the harm.</p><p><strong>Examples:</strong></p><ul><li>Patient hid relevant history (allergies)</li><li>Failed to take prescribed medication</li><li>Discharged self against medical advice (DAMA)</li><li>Did not return for follow-up</li></ul><p><strong>Effect:</strong> Damages are reduced in proportion to the patient\'s share of fault. If patient is 30 % at fault, damages are cut by 30 %.</p>', tags: ['Partial defence', 'Reduces damages'] },
  'def-resjudicata': { label: 'Res Judicata', info: '<p>Latin: <em>"A matter already decided"</em>.</p><p>Once a court has decided a dispute between specific parties, the same parties cannot re-litigate the same matter in another forum.</p><p><strong>Limit:</strong> Different causes of action (e.g., criminal and civil) can run in parallel — res judicata only bars identical claims.</p>', tags: ['One verdict bars relitigation'] },
  'def-misadventure': { label: 'Therapeutic Misadventure', info: '<p>An <strong>unforeseeable adverse outcome</strong> despite proper care — sometimes called "an act of God in medicine".</p><p><strong>Examples:</strong> idiosyncratic drug reaction, anaesthetic death despite normal preoperative screening, rare allergic reaction that was not predictable.</p><p><strong>Effect:</strong> Complete defence — there is no negligence because no reasonable doctor could have foreseen the outcome.</p><p><strong>Key distinction:</strong> Negligence = foreseeable harm. Misadventure = unforeseeable harm. The two are mutually exclusive.</p>', tags: ['Complete defence', 'Unforeseeable harm'] },
  'def-limitation': { label: 'Statute of Limitation', info: '<p>Lawsuits must be filed within a prescribed time limit from the date of cause of action.</p><p><strong>Time limits in India:</strong></p><ul><li>Tort (civil court) — <strong>3 years</strong> from cause</li><li>Consumer dispute — <strong>2 years</strong> from cause</li><li>Criminal — varies by offence</li></ul><p><strong>"Discoverability" exception:</strong> Clock starts when patient discovered (or should have discovered) the harm — relevant for retained-foreign-body cases where the harm is hidden for years.</p>', tags: ['Tort 3 yrs', 'Consumer 2 yrs'] },
  'def-standard': { label: 'Acted to Standard of Care', info: '<p>The strongest defence: doctor met the standard expected of a reasonably skilled professional.</p><p><strong>Bolam Test:</strong> Acted in accordance with a practice accepted by a responsible body of medical opinion.</p><p><strong>Indian update (Bolitho test):</strong> The practice must also be logical and reasonable — courts may scrutinise the opinion itself, not just defer to it blindly.</p><p>Best supported by expert testimony from senior doctors of the same specialty.</p>', tags: ['Strongest defence', 'Bolam + Bolitho'] },

  'res-ipsa': { label: 'Res Ipsa Loquitur', info: '<p>Latin: <em>"The thing speaks for itself"</em>. A doctrine where the very occurrence of the injury is itself proof of negligence — the patient need not prove specific acts.</p><p><strong>Effect:</strong> Shifts the burden of proof from patient to doctor — now the doctor must prove he was NOT negligent.</p><p><strong>Three conditions to invoke:</strong></p><ol><li>The injury does not ordinarily occur without negligence</li><li>The thing causing harm was under doctor\'s exclusive control</li><li>The patient did not contribute to the harm</li></ol><p><strong>Classic examples:</strong> retained surgical gauze, wrong-site surgery, transfusion of wrong blood group. The QBank gauze-post-hysterectomy case is a textbook Res Ipsa scenario.</p><p><strong>Indian landmark:</strong> Spring Meadows Hospital v Harjol Ahluwalia (1998).</p>', tags: ['Burden shifts to doctor', '⭐ High-yield', 'Gauze case'] },
  'vicarious-liability': { label: 'Vicarious Liability', info: '<p>The doctrine that holds an <strong>employer / superior liable</strong> for the negligent acts of his employee / subordinate, done in the course of employment.</p><p><strong>Latin maxim:</strong> <em>Respondeat superior</em> — "let the master answer".</p><p><strong>Three conditions:</strong></p><ol><li>Employer-employee relationship exists</li><li>Negligent act was in the course of employment</li><li>Damage was caused to a third party</li></ol><p><strong>Captain of the Ship doctrine:</strong> A surgeon-in-charge of OT is liable for acts of the entire team during surgery. (Now diluted — modern view is each professional is liable for own acts.)</p><p><strong>NOT vicarious:</strong> independent consultant\'s acts, acts outside scope of employment ("frolic of one\'s own"). Both employer AND employee may be jointly sued in India.</p>', tags: ['Hospital liable for doctor', 'Respondeat superior', '⭐ High-yield'] },

  'secrecy-rule': { label: 'Professional Secrecy — The Rule', info: '<p>A doctor must <strong>NOT disclose any information</strong> learnt about a patient in the course of professional duty — whether from the patient himself, his relatives, his condition, or his records.</p><p><strong>Origin:</strong> Hippocratic Oath · codified in IMC Code of Ethics 2002 · breach = professional misconduct.</p><p>The rule is not absolute — see the seven recognised exceptions where disclosure is permitted or even mandatory.</p>', tags: ['Hippocratic Oath', 'IMC Ethics 2002'] },
  'exception-court': { label: 'Exception 1 — Court Order', info: '<p>A doctor <strong>MUST disclose</strong> if directed by a court of law.</p><p><strong>Includes:</strong> producing records under subpoena, deposing as expert witness, answering specific questions directed by the judge.</p><p><strong>Refusal = contempt of court</strong>, punishable by fine and/or imprisonment.</p>', tags: ['Mandatory', 'Refusal = contempt'] },
  'exception-notifiable': { label: 'Exception 2 — Notifiable Diseases', info: '<p><strong>Statutory duty to report</strong> to public-health authorities — overrides confidentiality.</p><p><strong>Examples of notifiable diseases:</strong> TB, cholera, plague, COVID-19, leprosy, measles, diphtheria, polio, yellow fever, viral hepatitis, dengue, malaria (in some states), HIV (with specific consent caveats), all births and deaths.</p><p>List varies by state — check local public health regulations.</p>', tags: ['Public health', 'Mandatory reporting'] },
  'exception-thirdparty': { label: 'Exception 3 — Third-party Risk', info: '<p>If an identifiable third party is at <strong>imminent, serious risk</strong>, disclosure to them or the police is permitted (sometimes mandatory).</p><p><strong>Examples:</strong></p><ul><li>HIV-positive patient hiding diagnosis from sexual partner / spouse</li><li>Epileptic patient who refuses to stop driving</li><li>Psychiatric patient threatening specific harm to a named person (Tarasoff doctrine)</li><li>Communicable-disease patient working in a high-risk setting</li></ul><p>Disclosure should be the <strong>minimum necessary</strong> to avert the risk.</p>', tags: ['Tarasoff doctrine', 'Imminent harm'] },
  'exception-self-interest': { label: 'Exception 4 — Doctor\'s Self-defence', info: '<p>A doctor sued for negligence or accused of misconduct may disclose relevant patient information in his own defence.</p><p><strong>Examples:</strong> defending a malpractice suit, responding to a consumer complaint, answering an SMC inquiry.</p><p>Should be limited to information directly relevant to the defence.</p>', tags: ['Doctor\'s defence right'] },
  'exception-crime': { label: 'Exception 5 — Crime / Police Duty', info: '<p>Information about a <strong>serious offence</strong> must be reported to police — there is a legal duty under §39 CrPC (now §195 BNSS).</p><p><strong>Mandatory reporting examples:</strong> gunshot wound, attempted suicide, poisoning, criminal abortion, child abuse, sexual assault on a minor (POCSO).</p><p>Failure to report a knowable serious offence can itself be a punishable offence.</p>', tags: ['§39 CrPC / §195 BNSS', 'Mandatory'] },
  'exception-employer': { label: 'Exception 6 — Employer / Insurer Exam', info: '<p>When a medical examination is conducted at the request of an employer or insurer — and the patient has consented to the exam knowing its purpose — disclosure of findings to the employer / insurer is permitted.</p><p><strong>Examples:</strong> pre-employment medical, insurance medical exam, fitness-for-duty exam for armed forces / pilots / drivers.</p>', tags: ['Pre-employment', 'Insurance exam'] },
  'exception-consent': { label: 'Exception 7 — Patient\'s Own Consent', info: '<p>If the patient himself expressly consents to disclosure, the doctor may disclose.</p><p><strong>Common situations:</strong> patient asks for records to be shared with another doctor for second opinion, employer (with patient knowledge), family member, insurance company processing a claim.</p><p>Consent must be <strong>informed, voluntary, specific, and ideally in writing</strong>.</p>', tags: ['With patient consent', 'Ideally written'] },

  'misconduct-definition': { label: 'Professional Misconduct — Definition', info: '<p>Conduct of a doctor which is considered <strong>disgraceful or dishonourable</strong> by his professional colleagues of good repute and competence.</p><p>Also called <strong>"infamous conduct"</strong>. The standard is set by the medical profession itself, not by lay people.</p><p>Punishable by warning → temporary suspension → permanent erasure from the register (de-licensing).</p>', tags: ['Infamous conduct', 'IMC Code 2002'] },
  'six-As-misconduct': { label: 'The 6 A\'s — Memory Aid', info: '<p>A traditional memory aid for the most common forms of professional misconduct:</p><ol><li><strong>A</strong>dultery (with patient / patient\'s relative)</li><li><strong>A</strong>ssociation (with unqualified persons)</li><li><strong>A</strong>bortion (criminal — outside MTP Act)</li><li><strong>A</strong>ssociated certificate of efficiency to quacks</li><li><strong>A</strong>lcohol (practising under influence)</li><li><strong>A</strong>ddiction (habitual drug use)</li></ol>', tags: ['Memory aid'] },
  'A-adultery': { label: 'Adultery (1st A)', info: '<p>Voluntary sexual intercourse with a married female other than the doctor\'s own wife.</p><p><strong>Especially serious when:</strong> the female is a patient or a patient\'s relative — adds the dimension of abuse of doctor-patient trust.</p>', tags: ['Abuse of trust'] },
  'A-association': { label: 'Association with Unqualified (2nd A)', info: '<p>Associating with or employing an unqualified person to perform medical work.</p><p><strong>Examples:</strong> letting a quack assistant operate, signing certificates prepared by an unqualified person, allowing such persons to consult patients in your clinic.</p>', tags: ['Quack assistants'] },
  'A-abortion': { label: 'Criminal Abortion (3rd A)', info: '<p>Performing or assisting in an abortion <strong>outside the MTP Act 1971 framework</strong>.</p><p><strong>Legal MTP:</strong> up to 20 weeks (one doctor\'s opinion); 20-24 weeks (two doctors + specific categories under 2021 amendment).</p><p>Beyond these limits = criminal abortion = professional misconduct + criminal liability.</p>', tags: ['MTP Act compliance'] },
  'A-associated-unqualified': { label: 'Endorsing Quacks (4th A)', info: '<p>Issuing a certificate of efficiency in modern medicine to an unqualified or non-medical person.</p><p>Also includes <strong>fee splitting / dichotomy</strong> — taking or giving commission to colleagues for referrals.</p>', tags: ['Fee splitting'] },
  'A-alcohol': { label: 'Practising Under Alcohol (5th A)', info: '<p>Practising medicine while under the influence of alcohol or any intoxicating drug.</p><p><strong>If harm caused:</strong> may escalate to <strong>criminal negligence</strong> (rash / negligent act) — exactly the situation in the NEET-PG 2022 drunk-surgeon question.</p>', tags: ['Can become criminal negligence'] },
  'A-addiction': { label: 'Habitual Addiction (6th A)', info: '<p>Habitual drug-taking by the doctor — including misuse of his prescription privilege to obtain controlled drugs for personal use.</p><p>Self-prescription of NDPS substances is grounds for removal from the register.</p>', tags: ['Self-prescription = grounds'] },
  'other-misconduct': { label: 'Other Acts of Misconduct', info: '<p>Beyond the 6 A\'s, these acts also constitute professional misconduct:</p><ul><li>False certificates (birth, death, fitness, sickness)</li><li>Dichotomy / fee splitting</li><li>Improper advertising (large signboards, claims of cure, testimonials)</li><li>Sex-determination of foetus (PCPNDT Act violation)</li><li>Not maintaining indoor medical records for 3 years</li><li>Not displaying registration number on clinic / prescription / certificate</li><li>Conviction for any offence involving moral turpitude</li></ul>', tags: ['Beyond the 6 As'] },

  'cpa-overview': { label: 'Consumer Protection Act 2019 — Overview', info: '<p>The <strong>Consumer Protection Act 2019</strong> replaced the CPA 1986, effective 20 July 2020.</p><p><strong>Indian Medical Association v V.P. Shantha (1995)</strong> — the landmark Supreme Court ruling that brought medical services within the CPA. Patients are "consumers", doctors render "service".</p><p><strong>Exception:</strong> Free service in govt hospitals (where no fee is charged from anyone) is NOT a "service" under CPA.</p><p><strong>Filing time limit:</strong> 2 years from cause of action. CPA is faster and cheaper than civil court — major reason for its popularity among patients suing doctors.</p>', tags: ['CPA 2019', 'IMA v V.P. Shantha', '2-year limit'] },
  'district-forum': { label: 'District Commission', info: '<p>The first tier of the consumer dispute redressal hierarchy. One per district.</p><p><strong>Pecuniary jurisdiction:</strong> Up to <strong>₹1 crore</strong> (CPA 2019).</p><p><strong>Composition:</strong> President + 2 members (at least one woman).</p><p><strong>Time to file:</strong> 2 years from cause of action.</p><p><strong>Appeal:</strong> to the State Commission within 45 days of the order.</p>', tags: ['≤ ₹1 cr', 'Appeal to State'] },
  'state-commission': { label: 'State Commission', info: '<p>State-level tier — one per state.</p><p><strong>Pecuniary jurisdiction:</strong> <strong>₹1 crore to ₹10 crore</strong> (CPA 2019).</p><p><strong>Composition:</strong> President (a sitting or retired High Court judge) + at least 4 members.</p><p><strong>Dual role:</strong> Original jurisdiction (₹1-10 cr matters) + Appellate jurisdiction (hears appeals from District Commissions in its state).</p><p><strong>Further appeal:</strong> to National Commission within 30 days.</p>', tags: ['₹1-10 cr', 'Original + Appellate'] },
  'national-commission': { label: 'National Commission (NCDRC)', info: '<p>The apex consumer forum — National Consumer Disputes Redressal Commission, located in New Delhi.</p><p><strong>Pecuniary jurisdiction:</strong> Above <strong>₹10 crore</strong> (CPA 2019).</p><p><strong>Composition:</strong> President (a sitting or retired Supreme Court judge) + at least 4 members.</p><p><strong>Dual role:</strong> Original jurisdiction for very high-value matters + Appellate from State Commissions.</p><p><strong>Final appeal:</strong> Supreme Court within 30 days (only on question of law).</p>', tags: ['&gt; ₹10 cr', 'NCDRC New Delhi'] },
  'cpa-remedies': { label: 'CPA Remedies Available', info: '<p>The Consumer Commissions can grant:</p><ul><li><strong>Compensatory damages</strong> — medical expenses, lost income, mental suffering</li><li><strong>Punitive damages</strong> — in gross-negligence cases, to punish and deter</li><li><strong>Refund of fees</strong> + replacement of defective service</li><li><strong>Cease-and-desist orders</strong> against unfair trade practices</li></ul><p>Orders can also direct the doctor / hospital to provide free corrective treatment.</p>', tags: ['Compensatory + Punitive'] },

  'bmw-overview': { label: 'Biomedical Waste — Definition', info: '<p>Any waste generated during <strong>diagnosis, treatment, or immunisation</strong> of humans or animals, or in research activities pertaining to or in production / testing of biological products.</p><p>Regulated by the <strong>Bio-Medical Waste Management Rules 2016</strong> (amended 2018 and 2019) — under the Environment Protection Act 1986.</p><p><strong>Mandatory segregation at source</strong> into 4 colour-coded categories.</p>', tags: ['BMW Rules 2016', 'EPA 1986'] },
  'bin-yellow': { label: 'Yellow Bin — Infectious + Anatomical', info: '<p><strong>Contents:</strong> Human anatomical waste, animal anatomical waste, soiled waste (blood-stained dressings), expired/discarded medicines, chemical waste, microbiology and biotechnology waste, discarded linen/mattress.</p><p><strong>Bag:</strong> Yellow non-chlorinated plastic.</p><p><strong>Treatment:</strong> Incineration, deep burial, or autoclaving (per category) — followed by sanitary landfill where applicable.</p>', tags: ['Anatomical waste', 'Incineration'] },
  'bin-red': { label: 'Red Bin — Recyclable Contaminated Plastics', info: '<p><strong>Contents:</strong> Contaminated plastic waste — IV tubing &amp; sets, urine bags, catheters, syringes (without needles), gloves, blood/urine bags, vacutainers without sharps.</p><p><strong>Bag:</strong> Red non-chlorinated plastic.</p><p><strong>Treatment:</strong> Autoclaving or microwaving → shredding → sent to authorised recyclers.</p>', tags: ['Plastic waste', 'Recycled after autoclaving'] },
  'bin-white': { label: 'White Container — Sharps', info: '<p><strong>Contents:</strong> Needles (used or unused), syringes with needles fixed, scalpels and blades, lancets, trocars, contaminated glass slides — all sharps that can puncture skin.</p><p><strong>Container:</strong> White translucent puncture-proof container.</p><p><strong>Treatment:</strong> Autoclave or dry heat sterilisation → shredding → encapsulation in concrete or sanitary landfill.</p>', tags: ['Sharps', 'Puncture-proof container'] },
  'bin-blue': { label: 'Blue Box — Glass + Metallic Implants', info: '<p><strong>Contents:</strong> Broken or discarded glass containers, ampoules, vials, empty/disposed medicine bottles, metallic body implants.</p><p><strong>Container:</strong> Blue puncture-proof, leak-proof box.</p><p><strong>Treatment:</strong> Chemical disinfection → sent for recycling.</p>', tags: ['Glass + metal', 'Recycled'] },
  'bmw-quantity': { label: 'Key BMW Numbers', info: '<p><strong>Total daily BMW in India:</strong> ~700 tonnes/day — urban hospitals contribute ~75 %.</p><p><strong>Liquid waste discharge pH:</strong> must be 6.5 – 9.0 before discharge (per BMW Rules 2016).</p><p><strong>Storage time before treatment:</strong> ≤ 48 hours.</p><p><strong>Autoclaving standard:</strong> 121 °C at 15 psi for 60 minutes.</p>', tags: ['~700 tonnes/day', '48-hour limit'] },

  'records-overview': { label: 'Medical Records — Maintenance', info: '<p>Indoor medical records must be maintained by every doctor / hospital for <strong>at least 3 years</strong> (IMC Regulations 2002 §1.3.1).</p><p><strong>Patient\'s rights:</strong> Patient or his authorised representative may request a copy. It must be provided within <strong>72 hours</strong> of the request.</p><p><strong>Format:</strong> legible, dated, signed; corrections by strike-through + initial only — no white-out or overwriting.</p><p><strong>Failure to maintain records</strong> = professional misconduct AND grounds for adverse inference in negligence litigation (court may infer negligence from poor record-keeping).</p>', tags: ['3-year retention', '72-hour copy', 'IMC §1.3.1'] },
  'act-mtp': { label: 'MTP Act 1971 (amended 2021)', info: '<p>The <strong>Medical Termination of Pregnancy Act 1971</strong> permits abortion under specific circumstances by a Registered Medical Practitioner.</p><p><strong>Limits (post-2021 amendment):</strong></p><ul><li>Up to <strong>20 weeks</strong> — 1 doctor\'s opinion sufficient</li><li><strong>20–24 weeks</strong> — 2 doctors\' opinion + only for specific categories (rape survivors, minors, foetal abnormalities, change in marital status etc.)</li><li>No upper limit if foetal abnormality is diagnosed by Medical Board</li></ul><p>Records under MTP Act = kept for 5 years; consent in Form C; admission register in Form III.</p>', tags: ['20 wk / 20-24 wk', '1 doctor / 2 doctors'] },
  'act-pcpndt': { label: 'PCPNDT Act 1994', info: '<p>The <strong>Pre-Conception and Pre-Natal Diagnostic Techniques Act 1994</strong> prohibits prenatal sex determination and female foeticide.</p><p><strong>Key features:</strong></p><ul><li>Strict regulation of ultrasound clinics</li><li>Mandatory <strong>Form F</strong> for every USG (filled before scan)</li><li>Sex determination of foetus = criminal offence + professional misconduct</li><li><strong>Punishment:</strong> First offence — up to 3 years imprisonment + ₹10,000 fine; subsequent — up to 5 years + ₹50,000 fine</li><li>Conviction → removal from medical register</li></ul>', tags: ['Form F mandatory', '3 yrs + ₹10k first'] },
  'act-organ': { label: 'Transplantation of Human Organs Act 1994', info: '<p>The <strong>THO Act 1994</strong> regulates removal, storage, and transplantation of human organs and tissues.</p><p><strong>Key points:</strong></p><ul><li><strong>Brain death</strong> = legal definition of death for the purposes of organ donation</li><li>Minimum age for donor consent = <strong>18 years</strong></li><li>Commercial dealing in organs = criminal offence</li><li>Authorisation Committee approves unrelated donations</li><li>Cadaveric donation needs declaration by 4 doctors (2 brain-death certification)</li></ul>', tags: ['Brain death = legal death', 'Donor ≥ 18 yrs'] },
  'act-drugs': { label: 'Drugs &amp; Cosmetics Act 1940', info: '<p>The principal law regulating import, manufacture, distribution, and sale of drugs and cosmetics in India.</p><p><strong>Key Schedules:</strong></p><ul><li><strong>Schedule H</strong> — prescription-only drugs (most antibiotics, hormones)</li><li><strong>Schedule H1</strong> — prescription + name recorded in pharmacy register (4th-gen antibiotics, anti-TB)</li><li><strong>Schedule X</strong> — NDPS-equivalent narcotic + psychotropic drugs (special record-keeping)</li></ul><p><strong>§274 (adulteration of drugs)</strong> was a key section under IPC (now under BNS/equivalent) — testable PYQ.</p>', tags: ['Schedules H / H1 / X', 'Adulteration §274'] },
  'act-factory': { label: 'Factories Act 1948', info: '<p>Regulates labour, working conditions, child labour, and safety in industrial establishments.</p><p><strong>Key thresholds (for FMT exams):</strong></p><ul><li>Children under <strong>14 years</strong> cannot work in factories at all</li><li>Adolescents 14-18 yrs need a fitness certificate from a certifying surgeon</li><li>Maximum work hours including overtime = <strong>60 per week</strong></li><li>Mandatory medical examination of young workers</li><li>Notifiable occupational diseases must be reported by the certifying surgeon</li></ul>', tags: ['&lt; 14 no work', 'Max 60 hrs/wk'] },
  'act-constitutional': { label: 'Constitutional Articles on Children', info: '<p>Indian Constitution has several articles protecting children\'s welfare:</p><ul><li><strong>Article 21-A</strong> — Right to free and compulsory education (ages 6-14)</li><li><strong>Article 23</strong> — Prohibits trafficking and forced labour</li><li><strong>Article 24</strong> — Prohibits employment of children under 14 in hazardous work</li><li><strong>Article 39(e) &amp; (f)</strong> — Directive Principles to protect childhood</li><li><strong>Article 45</strong> — State to provide early childhood care for under-6</li></ul><p><strong>Article 42 is NOT child-specific</strong> — it deals with maternity relief and just/humane working conditions. This is a classic PYQ trap.</p>', tags: ['Art 21-A · 23 · 24 · 39 · 45', 'Art 42 = maternity'] }
};

function nodeList(ids) { return ids.map(id => ({ nodeId: id, ...NODES[id] })); }

const MCQS = {
  'MJ-01': [
    { stem: 'The Bharatiya Nyaya Sanhita (BNS) 2023 replaced which old code?', options: ['IPC 1860','CrPC 1973','IEA 1872','MTP Act 1971'], answerIdx: 0, explain: 'BNS 2023 replaces the Indian Penal Code 1860 (substantive criminal law). CrPC → BNSS; IEA → BSA.', tag: '[PG-Inspired]' },
    { stem: 'All three new criminal codes (BNS, BNSS, BSA) came into effect on:', options: ['1 January 2024','1 April 2024','1 July 2024','1 October 2024'], answerIdx: 2, explain: 'Effective date: 1 July 2024. Simultaneous repeal of IPC, CrPC, and IEA.', tag: '[UNIV]' },
    { stem: 'Adulteration of drug was under which section of IPC?', options: ['§271 IPC','§272 IPC','§273 IPC','§274 IPC'], answerIdx: 3, explain: '§274 IPC dealt with adulteration of drugs (now under BNS §274 / equivalent). §272 = adulteration of food/drink.', tag: '[NEET-PG 2016]' }
  ],
  'MJ-02': [
    { stem: 'The NMC Act 2019 replaced which earlier act?', options: ['MCI Act 1956','Indian Medical Council Act 1933','Pharmacy Act 1948','Indian Medical Degrees Act 1916'], answerIdx: 0, explain: 'NMC Act 2019 replaced the MCI Act 1956. The MCI itself was dissolved on 25 September 2020.', tag: '[PG-Inspired]' },
    { stem: 'The body responsible for maintaining the Indian Medical Register under the NMC is:', options: ['UGMEB','PGMEB','MARB','EMRB'], answerIdx: 3, explain: 'EMRB (Ethics & Medical Registration Board) maintains the National Medical Register and frames the ethics code.', tag: '[PG-Inspired]' },
    { stem: 'A doctor aggrieved by a State Medical Council\'s disciplinary order may appeal to:', options: ['Supreme Court directly','High Court directly','Ethics & Medical Registration Board (NMC)','Ministry of Health'], answerIdx: 2, explain: 'First appeal lies with the EMRB under NMC. Further appeal can go to courts.', tag: '[UNIV]' }
  ],
  'MJ-03': [
    { stem: 'A 45-year-old female patient is told about the benefits and complications of a hysterectomy, and she agrees to the procedure. What kind of consent is this?', options: ['Informed consent','Implied consent','Opt-out','Passive consent'], answerIdx: 0, explain: 'Disclosure of benefits + complications followed by patient agreement = informed consent. The patient was given all material information.', tag: '[NEET-PG 2022]' },
    { stem: 'Minimum age for giving consent for organ donation in India is:', options: ['16 years','18 years','21 years','No age limit'], answerIdx: 1, explain: '18 years — the same as for surgery, anaesthesia, MTP, and other major medical decisions. The Transplantation of Human Organs Act, 1994 prescribes this.', tag: '[NEET-PG 2016]' },
    { stem: 'A school teacher consenting for emergency treatment of an injured student is an example of:', options: ['Expressed consent','Implied consent','Loco parentis','Hypothetical consent'], answerIdx: 2, explain: 'Loco parentis = "in the place of a parent". The teacher temporarily stands in for the parent for emergency treatment.', tag: '[PG-Inspired]' },
    { stem: 'A patient extending his arm for a blood draw is giving:', options: ['Expressed written consent','Implied consent','Informed consent','Loco parentis'], answerIdx: 1, explain: 'Conduct (extending the arm) infers consent without explicit statement — implied consent. Adequate for routine non-invasive procedures.', tag: '[UNIV]' }
  ],
  'MJ-04': [
    { stem: 'Which of the following is NOT one of the 4 D\'s of medical negligence?', options: ['Duty','Dereliction','Diagnosis','Damage'], answerIdx: 2, explain: 'The 4 D\'s are Duty, Dereliction (breach), Direct causation, and Damage. Diagnosis is not one of them.', tag: '[PG-Inspired]' },
    { stem: 'The "Bolam Test" is used to determine:', options: ['Cause of death','Standard of care expected of a doctor','Time of death','Brain-stem death'], answerIdx: 1, explain: 'Bolam Test (1957): a doctor is not negligent if he acted in accordance with a practice accepted by a responsible body of medical opinion.', tag: '[PG-Inspired]' },
    { stem: 'In medical negligence litigation, the burden of proof initially rests on:', options: ['The doctor','The plaintiff (patient)','The State','The court'], answerIdx: 1, explain: 'The plaintiff (patient) must prove all four elements. Burden may shift to the doctor under Res Ipsa Loquitur.', tag: '[UNIV]' }
  ],
  'MJ-05': [
    { stem: 'Which defence is described by the maxim "Volenti non fit injuria"?', options: ['Therapeutic misadventure','Risk willingly accepted by the patient','Contributory negligence','Statute of limitation'], answerIdx: 1, explain: 'Volenti non fit injuria = "to one who volunteers, no injury is done". The patient who consented to a known risk cannot later sue for that risk.', tag: '[PG-Inspired]' },
    { stem: 'The time limit to file a consumer-protection complaint against a doctor is:', options: ['1 year','2 years','3 years','5 years'], answerIdx: 1, explain: 'Consumer dispute — 2 years from cause of action. Tort (civil court) — 3 years.', tag: '[PG-Inspired]' },
    { stem: 'A surgeon returns home from a party after many pegs of alcohol and is called to perform an emergency operation. During the operation, the assisting staff noticed the surgeon\'s hands shaking and the instruments falling. He eventually nicks an artery, and the patient collapses. Under which of the following terms will this incident be tried?', options: ['Criminal negligence','Civil negligence not amounting to criminal negligence','Therapeutic misadventure','Dichotomy'], answerIdx: 0, explain: 'Operating under the influence of alcohol = gross / rash / culpable conduct → criminal negligence (§106 BNS / old §304-A IPC). Not therapeutic misadventure (which is unforeseeable).', tag: '[NEET-PG 2022]' }
  ],
  'MJ-06': [
    { stem: 'Retained surgical sponge in the abdomen after hysterectomy is a classic example of:', options: ['Therapeutic misadventure','Volenti non fit injuria','Res Ipsa Loquitur','Vicarious liability'], answerIdx: 2, explain: 'Res Ipsa Loquitur — "the thing speaks for itself". The retained gauze cannot happen without negligence; burden shifts to doctor to disprove.', tag: '[QBank-Inspired]' },
    { stem: 'Vicarious liability is based on which Latin maxim?', options: ['Volenti non fit injuria','Respondeat superior','Res ipsa loquitur','Actus reus'], answerIdx: 1, explain: '"Respondeat superior" = "let the master answer". Hospital/employer liable for employee/doctor\'s negligence in course of employment.', tag: '[PG-Inspired]' },
    { stem: 'The "Captain of the Ship" doctrine in medical jurisprudence refers to:', options: ['Hospital director\'s overall liability','Surgeon-in-charge being liable for OT team acts','Anaesthetist liability during anaesthesia','Senior consultant\'s vicarious liability for junior\'s acts'], answerIdx: 1, explain: 'Captain of the Ship — the surgeon-in-charge of OT is liable for all acts of the operating team during surgery. Modern view dilutes this; each professional liable for own acts.', tag: '[UNIV]' }
  ],
  'MJ-07': [
    { stem: 'All of the following are recognised exceptions to professional secrecy EXCEPT:', options: ['Court order','Notifiable disease','Patient\'s own consent','Curious senior colleague'], answerIdx: 3, explain: 'Casual disclosure to a colleague without need-to-know is NOT an exception. The 7 valid exceptions: court, notifiable disease, third-party risk, doctor self-defence, crime/police, employer-insurer, patient consent.', tag: '[PG-Inspired]' },
    { stem: 'A doctor diagnoses HIV in a patient who refuses to disclose the diagnosis to his fiancée before their wedding. The doctor may:', options: ['Wait until patient consents','Disclose to the fiancée after counselling the patient','Maintain absolute secrecy','Inform police only'], answerIdx: 1, explain: 'Third-party-risk exception. Doctor should first try to persuade the patient to disclose; if refused, doctor may disclose to the partner to protect her from foreseeable harm.', tag: '[PG-Inspired]' }
  ],
  'MJ-08': [
    { stem: 'Section 89 IPC deals with criminal responsibility of:', options: ['Insane person','Child','Drunken person','Doctor'], answerIdx: 1, explain: '§89 IPC — acts done in good faith for the benefit of a child under 12 or person of unsound mind, by or with consent of guardian. (Related: §82 IPC: child below 7 yrs has no criminal responsibility.)', tag: '[NEET-PG 2016]' },
    { stem: 'Which one of the following is NOT among the "6 A\'s" of professional misconduct?', options: ['Adultery','Abortion (criminal)','Alcohol','Advertising'], answerIdx: 3, explain: 'The 6 A\'s are Adultery, Association, Abortion, Associated (with unqualified), Alcohol, Addiction. Improper advertising is also misconduct but not in the 6 A list.', tag: '[UNIV]' }
  ],
  'MJ-09': [
    { stem: 'Pecuniary jurisdiction of the District Consumer Commission under CPA 2019 is:', options: ['Up to ₹50 lakh','Up to ₹1 crore','Up to ₹2 crore','Up to ₹5 crore'], answerIdx: 1, explain: 'CPA 2019: District ≤ ₹1 cr · State ₹1-10 cr · National &gt; ₹10 cr. (Old CPA 1986 had different limits — ₹20 lakh, ₹1 cr, &gt;₹1 cr.)', tag: '[PG-Inspired]' },
    { stem: 'Medical services were brought within the Consumer Protection Act by the landmark Supreme Court judgment in:', options: ['Achutrao Haribhau Khodwa','Indian Medical Association v V.P. Shantha','Spring Meadows Hospital','Samira Kohli'], answerIdx: 1, explain: 'IMA v V.P. Shantha (1995) — doctors held to be rendering "service" under CPA. Free service in govt hospitals exempted.', tag: '[PG-Inspired]' }
  ],
  'MJ-10': [
    { stem: 'In the colour-coded biomedical waste segregation, syringes WITH needles are disposed in:', options: ['Yellow bag','Red bag','White puncture-proof container','Blue box'], answerIdx: 2, explain: 'White container is for SHARPS — needles, syringes with needles, scalpels, blades, lancets. Red is for plastics without needles.', tag: '[PG-Inspired]' },
    { stem: 'Anatomical waste (e.g., placenta, amputated limb) is disposed in:', options: ['Yellow bag','Red bag','White container','Blue box'], answerIdx: 0, explain: 'Yellow bag — for human / animal anatomical waste, soiled waste, expired medicines, chemical waste. Treated by incineration / deep burial.', tag: '[PG-Inspired]' },
    { stem: 'Maximum permissible storage time for biomedical waste before treatment under BMW Rules 2016:', options: ['24 hours','48 hours','72 hours','7 days'], answerIdx: 1, explain: '48 hours — beyond which it must be treated or disposed.', tag: '[UNIV]' }
  ],
  'MJ-11': [
    { stem: 'Indoor medical records of patients must be maintained by a doctor for at least:', options: ['1 year','2 years','3 years','5 years'], answerIdx: 2, explain: '3 years — per IMC Regulations 2002 §1.3.1. Patient must be provided a copy within 72 hours of request.', tag: '[PG-Inspired]' },
    { stem: 'Adulteration of drug was punishable under which section of IPC?', options: ['§271','§272','§273','§274'], answerIdx: 3, explain: '§274 IPC — adulteration of drugs. §272 = adulteration of food/drink for sale.', tag: '[NEET-PG 2016]' },
    { stem: 'The minimum age for giving consent for organ donation in India under the Transplantation of Human Organs Act is:', options: ['16 years','18 years','21 years','No age limit'], answerIdx: 1, explain: '18 years — same as for surgery, anaesthesia, MTP. Under THO Act 1994.', tag: '[NEET-PG 2016]' },
    { stem: 'Which of the following constitutional articles is NOT related to children?', options: ['Article 23','Article 21-A','Article 42','Article 24'], answerIdx: 2, explain: 'Article 42 deals with maternity relief and humane working conditions — NOT children. Art 21-A = right to education (6-14), Art 23 = no trafficking, Art 24 = no child labour &lt;14.', tag: '[NEET-PG 2018]' },
    { stem: 'Which of the statements regarding the Factories Act is correct?', options: ['Children less than 14 carrying serious work earn more money','Less than 14 yrs NOT allowed to work under Factories Act','More than 72 hour work per week','More than 82 hours a week'], answerIdx: 1, explain: 'Factories Act 1948: children under 14 cannot work in factories. Max work hours incl. overtime = 60/week.', tag: '[NEET-PG 2018]' },
    { stem: 'Maximum work hours for a person including overtime under the Factories Act:', options: ['48','50','60','100'], answerIdx: 2, explain: '60 hours per week including overtime under Factories Act 1948.', tag: '[NEET-PG 2020]' },
    { stem: 'You are posted as an intern in casualty. Which among the following patients with fracture will be your 1st priority to call ortho PG and inform?', options: ['Patient\'s finger is blackening','Patient can\'t extend his arm','A 10 cm abrasion','Intra articular fracture of Elbow Joint'], answerIdx: 0, explain: 'Blackening finger = compartment syndrome or vascular compromise → limb-threatening emergency, immediate priority over other fractures.', tag: '[NEET-PG 2018]' }
  ]
};

const DIFF_TABLES = [
  {
    id: 'DT-1', title: 'MCI Act 1956 vs NMC Act 2019', shortTitle: 'MCI vs NMC',
    columns: ['Feature','MCI Act 1956','NMC Act 2019'],
    rows: [
      ['Apex body','Medical Council of India (MCI)','National Medical Commission (NMC)'],
      ['Composition','Mostly elected members','Mostly nominated (33 members)'],
      ['Sub-bodies','Single body','4 autonomous boards (UGMEB / PGMEB / MARB / EMRB)'],
      ['Common entrance','NEET introduced 2016 (under MCI)','NEET + NEXT (proposed common licensing exam)'],
      ['Status','Dissolved 25 Sept 2020','Currently in force'],
      ['Reason for change','Allegations of corruption, opaque functioning','Greater transparency, autonomy of boards, anti-corruption']
    ],
    parentDiagrams: ['MJ-02'],
    mcqs: [
      { stem: 'The MCI was dissolved and replaced by NMC on which date?', options: ['1 January 2020','25 September 2020','1 July 2020','15 August 2020'], answerIdx: 1, explain: '25 September 2020 — MCI dissolved; NMC took over.', tag: '[UNIV]' }
    ]
  },
  {
    id: 'DT-2', title: 'Civil Negligence vs Criminal Negligence', shortTitle: 'Civil vs Criminal Negligence',
    columns: ['Feature','Civil Negligence','Criminal Negligence'],
    rows: [
      ['Nature of act','Simple breach of duty','<strong>Gross / rash / culpable</strong> breach'],
      ['Standard of proof','Preponderance of probability','<strong>Beyond reasonable doubt</strong>'],
      ['Burden of proof','On plaintiff (patient)','On prosecution (State)'],
      ['Filed by','Patient (or family)','State (via FIR / complaint to police)'],
      ['Forum','Civil court OR Consumer Commission','Criminal court (Magistrate / Sessions)'],
      ['Outcome','Damages (money compensation)','Imprisonment + fine'],
      ['Legal section','Tort law / CPA','§106 BNS (was §304-A IPC) — causing death by negligence'],
      ['Examples','Wrong medication dose, missed diagnosis','Operating under alcohol, abandoning unconscious patient'],
      ['Mens rea','Not required','Required (gross indifference)']
    ],
    parentDiagrams: ['MJ-04','MJ-05'],
    mcqs: [
      { stem: 'The standard of proof for criminal negligence is:', options: ['Preponderance of probability','Balance of convenience','Beyond reasonable doubt','Best judgment'], answerIdx: 2, explain: 'Criminal — beyond reasonable doubt. Civil — preponderance of probability.', tag: '[UNIV]' }
    ]
  },
  {
    id: 'DT-3', title: 'Negligence vs Professional Misconduct', shortTitle: 'Negligence vs Misconduct',
    columns: ['Feature','Medical Negligence','Professional Misconduct'],
    rows: [
      ['Definition','Breach of duty of care causing damage','Conduct unbecoming of the profession (infamous conduct)'],
      ['Forum','Civil court / Consumer Commission / Criminal court','State Medical Council / EMRB (NMC)'],
      ['Punishment','Damages or imprisonment','Warning → suspension → erasure from register'],
      ['Examples','Wrong-site surgery, missed diagnosis','Adultery, fee splitting, false certificate'],
      ['Requires damage?','Yes — no damage = no case','No — bad behaviour alone is enough'],
      ['Reported by','Patient','Anyone (patient, colleague, public)']
    ],
    parentDiagrams: ['MJ-04','MJ-08'],
    mcqs: [
      { stem: 'Professional misconduct is tried by:', options: ['Civil court','Consumer Commission','State Medical Council','Sessions court'], answerIdx: 2, explain: 'State Medical Council is the first authority; appeal lies with EMRB (NMC).', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-4', title: 'Expressed vs Implied vs Informed Consent', shortTitle: 'Consent types',
    columns: ['Feature','Expressed','Implied','Informed'],
    rows: [
      ['How given','Stated (written or oral)','Inferred from conduct','Stated after full disclosure'],
      ['Scope','Surgery, invasive, MTP','Routine, non-invasive','Same as expressed PLUS disclosure'],
      ['Examples','Surgery consent form','Extending arm for blood draw','Cancer chemotherapy after counselling'],
      ['Best medium','Written + witnessed','Inferred only','Written + witnessed + documented disclosure'],
      ['Withdrawal','Anytime','Anytime','Anytime'],
      ['Medicolegal weight','Strong (esp. written)','Weak — needs corroboration','Strongest']
    ],
    parentDiagrams: ['MJ-03'],
    mcqs: [
      { stem: 'A patient is told risks, benefits, alternatives before signing a surgery form — this is:', options: ['Implied consent','Expressed consent only','Informed consent','Loco parentis'], answerIdx: 2, explain: 'Disclosure + agreement = informed consent. Expressed consent without disclosure is incomplete.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-5', title: 'Res Ipsa Loquitur vs Vicarious Liability', shortTitle: 'Res Ipsa vs Vicarious',
    columns: ['Feature','Res Ipsa Loquitur','Vicarious Liability'],
    rows: [
      ['Latin meaning','"The thing speaks for itself"','"Respondeat superior" — let the master answer'],
      ['Concept','Burden of proof shifts to doctor','Employer liable for employee\'s acts'],
      ['Trigger','Self-evident negligence (gauze, wrong-site)','Employer-employee relationship + act in course'],
      ['Who pays?','The doctor (directly)','The hospital / employer'],
      ['Doctor\'s own liability','Yes — directly','Yes — can still be sued personally'],
      ['Classic example','Retained gauze after surgery','Hospital sued for nurse\'s drug error'],
      ['Landmark case','Spring Meadows Hospital (1998)','Achutrao Haribhau Khodwa (1996)']
    ],
    parentDiagrams: ['MJ-06'],
    mcqs: [
      { stem: 'Which doctrine shifts the burden of proof from patient to doctor in a negligence suit?', options: ['Vicarious liability','Res Ipsa Loquitur','Volenti non fit injuria','Res Judicata'], answerIdx: 1, explain: 'Res Ipsa Loquitur. Vicarious liability shifts the responsibility to the employer.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-6', title: 'Volenti non fit injuria vs Contributory Negligence', shortTitle: 'Volenti vs Contributory',
    columns: ['Feature','Volenti non fit injuria','Contributory Negligence'],
    rows: [
      ['Nature','Complete defence','Partial defence'],
      ['Concept','Patient voluntarily accepted risk','Patient\'s own negligence contributed'],
      ['Effect on damages','Full bar — no damages','Damages reduced proportionate to fault'],
      ['Example','Surgery with informed consent — disclosed risk materialised','Patient hid drug allergy / stopped medications mid-course'],
      ['Burden of proving','Doctor (must show patient knew + accepted)','Doctor (must show patient\'s share of fault)']
    ],
    parentDiagrams: ['MJ-05'],
    mcqs: [
      { stem: '"Volenti non fit injuria" is a:', options: ['Partial defence','Complete defence','Aggravating factor','Procedural objection'], answerIdx: 1, explain: 'Complete defence — if applied, no damages. Contributory negligence is partial (reduces damages).', tag: '[UNIV]' }
    ]
  },
  {
    id: 'DT-7', title: 'CPA 1986 vs CPA 2019', shortTitle: 'CPA 1986 vs 2019',
    columns: ['Feature','CPA 1986','CPA 2019'],
    rows: [
      ['Effective','15 Apr 1987','20 Jul 2020'],
      ['District pecuniary','Up to ₹20 lakh','Up to <strong>₹1 crore</strong>'],
      ['State pecuniary','₹20 lakh – ₹1 cr','₹1 cr – ₹10 cr'],
      ['National pecuniary','&gt; ₹1 cr','&gt; ₹10 cr'],
      ['E-filing','No provision','Allowed'],
      ['Mediation','No','Mandatory at District/State level'],
      ['Product liability','Limited scope','Comprehensive (incl. e-commerce)'],
      ['CCPA (Central regulator)','No','Yes — Central Consumer Protection Authority']
    ],
    parentDiagrams: ['MJ-09'],
    mcqs: [
      { stem: 'Under CPA 2019, the pecuniary jurisdiction of the National Consumer Commission is:', options: ['&gt; ₹1 crore','&gt; ₹5 crore','&gt; ₹10 crore','&gt; ₹50 crore'], answerIdx: 2, explain: 'CPA 2019 increased thresholds — National &gt; ₹10 cr.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-8', title: 'Negligence vs Therapeutic Misadventure', shortTitle: 'Negligence vs Misadventure',
    columns: ['Feature','Medical Negligence','Therapeutic Misadventure'],
    rows: [
      ['Foreseeability','Harm was foreseeable + preventable','Harm was unforeseeable'],
      ['Standard of care','Breached','Met'],
      ['Doctor\'s liability','Yes','No'],
      ['Examples','Wrong-site surgery, missed allergy history','Idiosyncratic drug reaction, rare anaphylaxis'],
      ['Defence available?','Various (Bolam etc.)','Complete defence in itself']
    ],
    parentDiagrams: ['MJ-04','MJ-05'],
    mcqs: [
      { stem: 'An idiosyncratic anaesthetic reaction in a patient with normal preoperative workup is best classified as:', options: ['Medical negligence','Criminal negligence','Therapeutic misadventure','Vicarious liability'], answerIdx: 2, explain: 'Unforeseeable + proper care = therapeutic misadventure. No negligence; complete defence.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-9', title: 'Yellow vs Red vs White vs Blue BMW Bins', shortTitle: 'BMW colour bins',
    columns: ['Colour','Contents','Treatment'],
    rows: [
      ['<strong>Yellow</strong>','Anatomical waste, soiled dressings, expired meds, chemical/microbiology waste','Incineration / deep burial / autoclave'],
      ['<strong>Red</strong>','Plastic — IV tubing, syringes WITHOUT needles, gloves, urine bags','Autoclave / microwave → shredding → recycle'],
      ['<strong>White</strong>','Sharps — needles, syringes WITH needles, scalpels, blades','Autoclave / dry heat → shredding → encapsulation'],
      ['<strong>Blue</strong>','Glass — ampoules, vials, broken glass; metallic implants','Chemical disinfection → recycling']
    ],
    parentDiagrams: ['MJ-10'],
    mcqs: [
      { stem: 'A blood-soaked surgical dressing goes into:', options: ['Yellow bag','Red bag','White container','Blue box'], answerIdx: 0, explain: 'Yellow — soiled waste / blood-stained dressings. Red is for plastics.', tag: '[UNIV]' }
    ]
  }
];
const SUBJ = [
  {
    id: 'SAQ-2.1', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Write a note on medical records and their maintenance.',
    answer: `<h4>Definition</h4>
<p>A medical record is a chronological written/electronic document containing all information related to a patient\'s diagnosis, treatment, and progress during a clinical encounter.</p>
<h4>Types</h4>
<ul><li><strong>OPD records:</strong> prescription with diagnosis + Rx + advice</li>
<li><strong>Indoor (IPD) records:</strong> admission notes, history, examination, daily progress notes, investigations, treatment, operative notes, discharge summary</li>
<li><strong>Special records:</strong> consent forms, MLR / PM report, MTP form, PCPNDT Form F, blood-transfusion records</li></ul>
<h4>Maintenance norms (IMC Regulations 2002 §1.3.1)</h4>
<ul><li>Indoor records — kept for <strong>at least 3 years</strong> from the date of last entry</li>
<li>Copy to be provided to patient/authorised representative within <strong>72 hours</strong> of request</li>
<li>Records kept in legible, dated, signed form; corrections by strike-through + initial only</li>
<li>Electronic records must comply with IT Act 2000 + retention rules</li></ul>
<h4>Specific Acts requiring longer retention</h4>
<ul><li><strong>MTP records</strong> — 5 years (Form C, Form III)</li>
<li><strong>PCPNDT Form F</strong> — 2 years</li>
<li><strong>Transfusion records</strong> — 5 years</li>
<li><strong>POCSO records</strong> — until victim attains 25 years</li></ul>
<h4>Importance</h4>
<ul><li>Continuity of patient care</li><li>Medicolegal protection in negligence litigation</li><li>Research, audit, and quality improvement</li><li>Insurance + reimbursement</li></ul>
<h4>Consequences of poor record-keeping</h4>
<p>Professional misconduct + adverse inference in negligence litigation (the court may infer negligence from the absence of records).</p>`,
    sources: ['MJ-11 (Records + Acts)'],
    jumpToDiagram: 'MJ-11'
  },
  {
    id: 'SAQ-2.2', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Explain Professional secrecy and its exceptions.',
    answer: `<h4>Definition</h4>
<p>Professional secrecy is the doctor\'s ethical and legal obligation to keep confidential all information learnt about a patient in the course of professional duty — whether from the patient himself, his relatives, his condition, or his records.</p>
<h4>Origin and Legal Basis</h4>
<ul><li>Rooted in the <strong>Hippocratic Oath</strong></li>
<li>Codified in <strong>IMC Code of Medical Ethics 2002</strong></li>
<li>Recognised as "privileged communication" in courts</li></ul>
<h4>Why it matters</h4>
<p>Patient must feel safe to disclose intimate, embarrassing or stigmatising information to receive effective treatment. Breach destroys this trust and is professional misconduct.</p>
<h4>The Seven Recognised Exceptions</h4>
<ol><li><strong>Court order:</strong> Doctor MUST disclose; refusal = contempt of court.</li>
<li><strong>Notifiable diseases:</strong> Statutory duty to report (TB, cholera, COVID-19, etc.) to public-health authorities.</li>
<li><strong>Third-party risk:</strong> Disclosure permitted to avert imminent serious harm to identifiable third party (HIV partner, epileptic driver, Tarasoff doctrine).</li>
<li><strong>Doctor\'s self-defence:</strong> Disclosure of relevant patient information in defending a malpractice suit, consumer complaint, or SMC inquiry.</li>
<li><strong>Crime / police duty:</strong> §39 CrPC / §195 BNSS — mandatory reporting of gunshot wound, attempted suicide, poisoning, criminal abortion, child abuse, sexual assault on minor (POCSO).</li>
<li><strong>Employer / insurer exam:</strong> When exam is conducted at their request, with patient\'s consent — disclosure of findings is permitted.</li>
<li><strong>Patient\'s own consent:</strong> Express informed consent for disclosure (second opinion, insurance claim, etc.).</li></ol>
<h4>Breach</h4>
<p>Unjustified breach = professional misconduct under IMC Code → punishable by SMC / EMRB (warning, suspension, or erasure from register).</p>`,
    sources: ['MJ-07 (Professional Secrecy)'],
    jumpToDiagram: 'MJ-07'
  },
  {
    id: 'SAQ-2.3', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'A 55-year-old woman is admitted to the hospital with acute abdomen. She had history of abdominal hysterectomy 3 months ago. On investigation, there is a mesh cloth-like foreign body seen. On laparotomy, a surgical gauze was retrieved. Explain the legal implications and the doctrine applicable.',
    answer: `<h4>Identification of the case</h4>
<p>A retained surgical gauze inside the abdomen after a hysterectomy is a textbook example of <strong>medical negligence</strong> attracting the doctrine of <strong>Res Ipsa Loquitur</strong>.</p>
<h4>Doctrine applied — Res Ipsa Loquitur</h4>
<p>Latin: <em>"The thing speaks for itself"</em>. A doctrine where the very fact of injury proves negligence — the plaintiff need not prove specific acts of breach.</p>
<h4>Three conditions to invoke Res Ipsa (all satisfied here)</h4>
<ol><li>The injury (retained foreign body) does NOT ordinarily occur without negligence.</li>
<li>The instrument causing harm (the gauze) was in the doctor\'s exclusive control during surgery.</li>
<li>The patient did not contribute to the harm.</li></ol>
<h4>Effect of the doctrine</h4>
<p>The burden of proof shifts from the patient to the doctor — now the doctor must prove he was NOT negligent (a near-impossible task in a gauze case).</p>
<h4>Components of negligence in this case (all 4 D\'s satisfied)</h4>
<ol><li><strong>Duty:</strong> Doctor-patient relationship established at admission for hysterectomy.</li>
<li><strong>Dereliction:</strong> Failure to count sponges before closure — breach of standard of care.</li>
<li><strong>Direct causation:</strong> The retained gauze directly caused her acute abdomen 3 months later.</li>
<li><strong>Damage:</strong> Acute abdominal symptoms + need for re-laparotomy + recovery time + suffering.</li></ol>
<h4>Legal options for the patient</h4>
<ul><li><strong>Consumer Protection Act 2019</strong> — file in District Commission (≤ ₹1 cr) within 2 years</li>
<li><strong>Civil suit</strong> — tort of negligence (3-year limit; discoverability rule extends from date of detection)</li>
<li><strong>Criminal complaint</strong> — only if gross/rash conduct can be shown (rare in retained-gauze cases unless repeated)</li>
<li><strong>State Medical Council</strong> — complaint of professional misconduct</li></ul>
<h4>Vicarious liability</h4>
<p>The hospital is also liable under <strong>vicarious liability</strong> — the surgical team are employees, and the omission occurred in the course of employment. Both the surgeon and the hospital may be sued jointly.</p>
<h4>Defences typically unsuccessful here</h4>
<p>Therapeutic misadventure does NOT apply — sponge retention is foreseeable and preventable. Volenti non fit injuria does NOT apply — patient did not consent to having a gauze left behind.</p>`,
    sources: ['MJ-06 (Res Ipsa + Vicarious)','MJ-04 (Negligence 4D)','MJ-09 (CPA)'],
    jumpToDiagram: 'MJ-06'
  },
  {
    id: 'SAQ-2.4', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'A child is brought to the hospital by a bystander after being found injured, unconscious on the side of the road. Explain whether a case of medical negligence can be filed against the doctor. Who can give consent in this case? Define criteria for a valid consent.',
    answer: `<h4>Medical negligence — can it be filed?</h4>
<p>Yes, in principle a negligence case can be filed against the doctor if the 4 D\'s are satisfied: <strong>D</strong>uty, <strong>D</strong>ereliction, <strong>D</strong>irect causation, <strong>D</strong>amage. The fact that the patient is unconscious or a minor does NOT exempt the doctor from the standard of care.</p>
<p><strong>However</strong>, in an emergency, the doctor enjoys the protection of the <strong>doctrine of necessity / implied consent</strong> — life-saving care may be given without explicit consent, and reasonable judgement under emergency conditions is given latitude. Good Samaritan protections also apply.</p>
<h4>Who can give consent in this case?</h4>
<p>Since the patient is (a) a minor and (b) unconscious, and the parents are unavailable, valid consent may come from:</p>
<ol><li><strong>Doctrine of necessity</strong> — for immediate life-saving treatment, the doctor may proceed without anyone\'s consent. The law presumes consent of a reasonable patient in an emergency.</li>
<li><strong>Loco parentis</strong> ("in place of a parent") — the accompanying bystander, if a responsible adult (teacher, guardian, hostel warden, even the person who found him), may give consent for emergency treatment of a minor.</li>
<li><strong>Parents / legal guardian</strong> — as soon as they can be reached, definitive consent should be obtained from them.</li></ol>
<h4>Criteria for a Valid Consent</h4>
<p>For consent to be legally valid, ALL four criteria must be met:</p>
<table><tr><th>Criterion</th><th>Requirement</th></tr>
<tr><td><strong>1. Age</strong></td><td>≥ 12 yrs for examination; <strong>≥ 18 yrs</strong> for surgery, anaesthesia, MTP, organ donation, sterilization</td></tr>
<tr><td><strong>2. Free</strong></td><td>Voluntary, without coercion, undue influence, fraud, or intoxication</td></tr>
<tr><td><strong>3. Informed</strong></td><td>Patient told nature, purpose, material risks, alternatives, consequences of refusal</td></tr>
<tr><td><strong>4. Specific</strong></td><td>For a particular procedure; blanket consent invalid; withdrawable anytime</td></tr></table>
<h4>Mental capacity</h4>
<p>The consenting person must be of sound mind at the time of consent. A patient in shock, severe intoxication, or with significant cognitive impairment cannot give valid consent — substitute decision-makers (next of kin, loco parentis, or doctrine of necessity) apply.</p>
<h4>Documentation in this case</h4>
<p>Doctor should: (1) document the emergency nature, (2) note efforts made to contact parents, (3) record who gave loco parentis consent (if any) with their signature, (4) document the treatment given. Subsequently, obtain parental consent for any further definitive care.</p>`,
    sources: ['MJ-03 (Consent)','MJ-04 (Negligence 4D)'],
    jumpToDiagram: 'MJ-03'
  },
  {
    id: 'SAQ-2.5', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank',
    question: 'Medico-legal, Socio-cultural and ethical issues related to confidentiality in patient care.',
    answer: `<h4>Medicolegal aspects of confidentiality</h4>
<ul><li>Codified in <strong>IMC Code of Medical Ethics 2002</strong> as professional misconduct if breached</li>
<li>Recognised as <strong>"privileged communication"</strong> in courts under BSA 2023</li>
<li>Breach can attract: complaint to SMC → suspension/erasure; civil suit for damages; consumer complaint</li>
<li>7 statutory/judicial exceptions exist (court order, notifiable disease, third-party risk, doctor\'s defence, crime reporting, employer/insurer exam, patient consent)</li></ul>
<h4>Socio-cultural issues</h4>
<ul><li><strong>Stigma:</strong> Diseases like HIV, TB, mental illness, sexual dysfunction carry social stigma — disclosure can lead to ostracism, job loss, marital breakdown</li>
<li><strong>Joint-family setup:</strong> Patient often comes with multiple relatives who expect to know everything; doctor must elicit patient\'s own preference on whom to inform</li>
<li><strong>Female patients:</strong> Patriarchal dynamics — patient may not want husband/in-laws to know about her reproductive history, abortions, contraception</li>
<li><strong>Adolescent patients:</strong> Confidentiality tension when minor wants treatment (contraception, abortion) without parental knowledge</li>
<li><strong>Marriage market:</strong> Disclosure of conditions like epilepsy, infertility, HIV before marriage can derail an alliance</li></ul>
<h4>Ethical issues</h4>
<ul><li><strong>Autonomy vs beneficence:</strong> When patient\'s autonomy (refusal to disclose) conflicts with beneficence (protecting a third party at risk)</li>
<li><strong>Truth-telling:</strong> Should family be told a terminal diagnosis before the patient? (Indian tradition often says yes; modern ethics says patient first)</li>
<li><strong>Genetic information:</strong> Hereditary disease affects family members — should they be informed?</li>
<li><strong>Research data:</strong> Anonymised vs identifiable; consent for secondary use</li>
<li><strong>Electronic records:</strong> Cybersecurity, unauthorised access by hospital staff, breach via shared logins</li></ul>
<h4>Practical guidelines for doctors</h4>
<ul><li>Discuss confidentiality early; ask patient who may be informed</li>
<li>Counsel before disclosing to third parties at risk (e.g., HIV partner)</li>
<li>Maintain physical privacy in consultation; lock records; restrict EMR access</li>
<li>Document all decisions about disclosure with rationale</li>
<li>When in doubt, seek institutional ethics committee guidance</li></ul>`,
    sources: ['MJ-07 (Professional Secrecy)'],
    jumpToDiagram: 'MJ-07'
  },
  {
    id: 'LAQ-2.1', type: 'LAQ', marks: 12, time: '~25-30 min', tag: 'QBank',
    question: 'Define medical negligence. Explain the 4 components of medical negligence. Enumerate the defences available to the doctor against medical negligence. Differentiate between criminal and civil negligence.',
    answer: `<h4>Definition of Medical Negligence</h4>
<p>Medical negligence is the <strong>breach of duty of care</strong> by a medical professional that results in damage to the patient. It is a tort (civil wrong) and may also be a crime if gross / rash.</p>
<p>In essence: a doctor fails to do what a reasonably competent doctor of the same specialty would have done in similar circumstances, and the patient suffers harm as a result.</p>
<h4>The Four Components (4 D\'s) — ALL must coexist</h4>
<ol><li><strong>DUTY of care:</strong> A legal duty owed by doctor to patient. Created when doctor-patient relationship is established (acceptance of case, casualty, govt-employed doctor on duty).</li>
<li><strong>DERELICTION (Breach):</strong> Failure to meet the standard of care expected of a reasonably skilled doctor in the same circumstances. Tested by the <strong>Bolam test</strong> (accepted practice of a responsible body of medical opinion) as modified by Bolitho (must be logical and reasonable). Examples: wrong-site surgery, retained foreign body, misdiagnosis from inadequate history.</li>
<li><strong>DIRECT causation:</strong> Direct causal link between breach and harm. Tested by the <strong>"but for" test</strong> — but for the breach, would the harm have occurred? Chain can be broken by novus actus interveniens, patient\'s own negligence, or pre-existing disease.</li>
<li><strong>DAMAGE:</strong> Actual injury / loss suffered. Includes physical injury, disability, death, mental suffering, financial loss. No damage = no case, even if duty + breach + causation exist.</li></ol>
<h4>Defences available to the doctor</h4>
<table><tr><th>Defence</th><th>Brief</th><th>Type</th></tr>
<tr><td><strong>1. Volenti non fit injuria</strong></td><td>Patient consented to known risk</td><td>Complete</td></tr>
<tr><td><strong>2. Contributory negligence</strong></td><td>Patient\'s own fault contributed</td><td>Partial — reduces damages</td></tr>
<tr><td><strong>3. Res Judicata</strong></td><td>Matter already decided by court</td><td>Complete (procedural)</td></tr>
<tr><td><strong>4. Therapeutic misadventure</strong></td><td>Unforeseeable adverse outcome despite proper care</td><td>Complete</td></tr>
<tr><td><strong>5. Statute of limitation</strong></td><td>Lawsuit filed after time limit (tort 3 yrs, consumer 2 yrs)</td><td>Complete (procedural)</td></tr>
<tr><td><strong>6. Acted to standard of care</strong></td><td>Met Bolam/Bolitho standard — strongest defence</td><td>Complete</td></tr></table>
<h4>Criminal vs Civil Negligence — Differentiation</h4>
<table><tr><th>Feature</th><th>Civil Negligence</th><th>Criminal Negligence</th></tr>
<tr><td>Nature of act</td><td>Simple breach of duty</td><td><strong>Gross / rash / culpable</strong> breach</td></tr>
<tr><td>Standard of proof</td><td>Preponderance of probability</td><td><strong>Beyond reasonable doubt</strong></td></tr>
<tr><td>Filed by</td><td>Patient (or family)</td><td>State (via FIR / police complaint)</td></tr>
<tr><td>Forum</td><td>Civil court / Consumer Commission</td><td>Criminal court (Magistrate / Sessions)</td></tr>
<tr><td>Outcome</td><td>Damages (monetary)</td><td>Imprisonment + fine</td></tr>
<tr><td>Legal section</td><td>Tort law / CPA</td><td><strong>§106 BNS</strong> (was §304-A IPC) — causing death by negligence</td></tr>
<tr><td>Mens rea</td><td>Not required</td><td>Required (gross indifference)</td></tr>
<tr><td>Example</td><td>Missed allergy history</td><td>Operating under alcohol → death</td></tr></table>
<h4>Steps to prevent negligence</h4>
<ul><li>Maintain meticulous records (legible, dated, signed)</li><li>Obtain informed written consent for all major procedures</li><li>Follow standard protocols and guidelines</li><li>Refer when out of one\'s competence</li><li>Continuing medical education</li><li>Adequate professional indemnity insurance</li></ul>`,
    sources: ['MJ-04 (Negligence 4D)','MJ-05 (Defences)','DT-2 (Civil vs Criminal Negligence)'],
    jumpToDiagram: 'MJ-04'
  },
  {
    id: 'LAQ-2.2', type: 'LAQ', marks: 12, time: '~25-30 min', tag: 'QBank',
    question: 'Define medical negligence. Differentiate between medical negligence and infamous conduct. Write a note on vicarious liability. What steps should be taken to prevent negligence?',
    answer: `<h4>Definition of Medical Negligence</h4>
<p>Breach of duty of care by a medical professional that results in damage to the patient. Has 4 elements: Duty, Dereliction, Direct cause, Damage.</p>
<h4>Negligence vs Infamous Conduct (Professional Misconduct)</h4>
<table><tr><th>Feature</th><th>Medical Negligence</th><th>Infamous Conduct (Misconduct)</th></tr>
<tr><td>Definition</td><td>Breach of duty causing damage to patient</td><td>Conduct disgraceful to professional colleagues</td></tr>
<tr><td>Forum</td><td>Civil / Consumer / Criminal court</td><td>State Medical Council / EMRB (NMC)</td></tr>
<tr><td>Standard tested</td><td>Reasonably skilled doctor</td><td>"Disgraceful by colleagues of good repute"</td></tr>
<tr><td>Punishment</td><td>Damages / imprisonment</td><td>Warning → suspension → erasure from register</td></tr>
<tr><td>Damage required?</td><td>Yes (no damage = no case)</td><td>No (bad conduct alone is enough)</td></tr>
<tr><td>Examples</td><td>Wrong-site surgery, retained gauze</td><td>Adultery with patient, fee splitting, false certificate, 6 A\'s</td></tr>
<tr><td>Who reports</td><td>Patient</td><td>Anyone (patient, colleague, public)</td></tr>
<tr><td>Mens rea</td><td>Generally not required</td><td>Not required</td></tr>
<tr><td>Overlap</td><td colspan="2">Same act may be both negligence AND misconduct (e.g., operating drunk → criminal negligence + misconduct under "Alcohol")</td></tr></table>
<h4>Vicarious Liability</h4>
<p><strong>Definition:</strong> The doctrine that holds an employer / superior liable for the negligent acts of his employee / subordinate, done in the course of employment.</p>
<p><strong>Latin maxim:</strong> <em>Respondeat superior</em> — "let the master answer".</p>
<p><strong>Three conditions:</strong></p>
<ol><li>Employer-employee relationship exists</li>
<li>The negligent act was in the course of employment</li>
<li>Damage was caused to a third party</li></ol>
<p><strong>Common scenarios in medical practice:</strong></p>
<ul><li>Hospital liable for negligence of doctors / nurses it employs</li>
<li>Surgeon liable for theatre nurse\'s failure to count sponges</li>
<li>Senior consultant for junior doctor\'s acts under his supervision</li></ul>
<p><strong>Captain of the Ship doctrine:</strong> Surgeon-in-charge of OT is traditionally liable for all acts of the team during surgery. Modern view dilutes this — each professional is liable for own acts; however, the surgeon retains responsibility for overall coordination.</p>
<p><strong>NOT vicariously liable for:</strong> independent consultant\'s acts (separate liability); acts outside scope of employment ("frolic of one\'s own"); deliberate criminal acts.</p>
<p><strong>Indian landmark case:</strong> Achutrao Haribhau Khodwa v State of Maharashtra (1996) — hospital held vicariously liable for surgeon-employee\'s negligence in retained-gauze case.</p>
<p><strong>Practical implications:</strong> Both employer AND employee may be jointly sued. Hospitals typically carry insurance covering vicarious liability.</p>
<h4>Steps to Prevent Negligence</h4>
<ol><li><strong>Record-keeping:</strong> Meticulous, contemporaneous, legible, dated, signed records of every encounter</li>
<li><strong>Consent:</strong> Informed written consent for all major procedures; document risk disclosure</li>
<li><strong>Standard protocols:</strong> Follow evidence-based guidelines (e.g., WHO Surgical Safety Checklist, surgical sponge counts)</li>
<li><strong>Communication:</strong> Clear and empathic communication with patient and family; written discharge instructions</li>
<li><strong>Referral:</strong> Refer promptly when outside one\'s competence or when patient needs higher centre</li>
<li><strong>Second opinion:</strong> In complex cases, document consultation with senior colleague</li>
<li><strong>Continuing Medical Education:</strong> Stay current with developments; renew skills</li>
<li><strong>Team work:</strong> Verify counts (sponges, instruments) by 2 people; "time out" before surgery</li>
<li><strong>Indemnity insurance:</strong> Adequate professional indemnity cover</li>
<li><strong>Follow-up:</strong> Schedule follow-up; act on patient complaints early</li>
<li><strong>Quality improvement:</strong> Participate in morbidity / mortality audits</li>
<li><strong>Ethics consultation:</strong> Use institutional ethics committee for difficult decisions</li></ol>`,
    sources: ['MJ-04','MJ-06 (Vicarious)','MJ-08 (Misconduct)','DT-3 (Negligence vs Misconduct)'],
    jumpToDiagram: 'MJ-06'
  },
  {
    id: 'LAQ-2.3', type: 'LAQ', marks: 12, time: '~25-30 min', tag: 'QBank',
    question: 'Define Medical Negligence. What are its elements? Differentiate between Civil & Criminal Negligence. What are the defences available for Doctors against the charges of Medical Negligence?',
    answer: `<h4>Definition</h4>
<p>Medical negligence is the breach of a doctor\'s duty of care toward a patient, resulting in damage. It is the doctor\'s failure to act with the degree of skill and knowledge expected of a reasonably competent professional of the same specialty under similar circumstances.</p>
<h4>Elements (4 D\'s)</h4>
<table><tr><th>Element</th><th>Description</th><th>Test</th></tr>
<tr><td><strong>1. Duty</strong></td><td>Legal duty of care owed to patient</td><td>Doctor-patient relationship established?</td></tr>
<tr><td><strong>2. Dereliction</strong></td><td>Breach of the standard of care</td><td>Bolam / Bolitho test</td></tr>
<tr><td><strong>3. Direct causation</strong></td><td>Causal link between breach and harm</td><td>"But for" test</td></tr>
<tr><td><strong>4. Damage</strong></td><td>Actual injury / loss</td><td>Quantifiable harm — physical, mental, financial</td></tr></table>
<p>All four must be proved by the plaintiff on a balance of probabilities (civil) or beyond reasonable doubt (criminal). The doctrine of <strong>Res Ipsa Loquitur</strong> may shift the burden to the doctor in obvious cases.</p>
<h4>Civil vs Criminal Negligence</h4>
<table><tr><th>Feature</th><th>Civil Negligence</th><th>Criminal Negligence</th></tr>
<tr><td>Nature of act</td><td>Simple breach</td><td><strong>Gross / rash / culpable</strong> breach</td></tr>
<tr><td>Standard of proof</td><td>Preponderance of probability</td><td><strong>Beyond reasonable doubt</strong></td></tr>
<tr><td>Filed by</td><td>Patient</td><td>State (after FIR / complaint)</td></tr>
<tr><td>Forum</td><td>Civil court / CPA forum</td><td>Magistrate / Sessions Court</td></tr>
<tr><td>Outcome</td><td>Compensatory damages</td><td>Imprisonment + fine</td></tr>
<tr><td>Legal section</td><td>Tort law / Consumer Protection Act</td><td><strong>§106 BNS</strong> (was §304-A IPC)</td></tr>
<tr><td>Mens rea</td><td>Not required</td><td>Required (gross indifference shown)</td></tr>
<tr><td>Time limit</td><td>3 yrs (tort) / 2 yrs (CPA)</td><td>Per criminal procedure</td></tr>
<tr><td>Example</td><td>Wrong drug dose causing harm</td><td>Operating drunk causing death; abandoning unconscious patient</td></tr>
<tr><td>Landmark</td><td>IMA v V.P. Shantha (1995)</td><td>Jacob Mathew v State of Punjab (2005) — sets criteria for prosecuting doctors</td></tr></table>
<p><strong>Jacob Mathew safeguards</strong> for prosecuting a doctor for criminal negligence: (1) prior expert medical opinion mandatory before FIR registration in private complaints; (2) gross / rash conduct, not mere error of judgement, needed; (3) opinion should be from doctor of same specialty.</p>
<h4>Defences Available</h4>
<ol><li><strong>Volenti non fit injuria</strong> — Patient knowingly accepted the risk (through informed consent). Complete defence for that specific disclosed risk. Does not cover negligent care.</li>
<li><strong>Contributory negligence</strong> — Patient\'s own negligence contributed (hid history, non-compliance, DAMA). Partial defence — reduces damages proportionate to patient\'s share of fault.</li>
<li><strong>Res Judicata</strong> — Matter already decided by competent court between the same parties. Procedural bar to re-litigation.</li>
<li><strong>Therapeutic misadventure</strong> — Unforeseeable adverse outcome despite proper care (idiosyncratic drug reaction, rare anaphylaxis). Complete defence — no negligence as harm could not have been foreseen.</li>
<li><strong>Statute of limitation</strong> — Lawsuit filed after the time limit (tort 3 yrs, consumer 2 yrs). Procedural bar. Exception: discoverability rule for hidden harm (e.g., retained gauze discovered late).</li>
<li><strong>Acted to standard of care (Bolam-Bolitho)</strong> — Strongest defence. Doctor acted in accordance with a practice accepted by a responsible body of medical opinion, and that practice is logical/reasonable. Best supported by expert testimony.</li>
<li><strong>Good Samaritan protection</strong> — Doctor providing emergency aid to a stranger is protected from liability for honest assistance.</li>
<li><strong>Doctrine of common knowledge</strong> — In areas where every doctor would know (e.g., basic CPR), expert evidence not needed; but this also makes default easier to prove against doctor.</li></ol>
<h4>Practical points</h4>
<ul><li>Doctor cannot defend by saying "I did my best" — the test is what a reasonably skilled doctor would have done, not subjective best effort.</li>
<li>Honest error of judgement is not negligence (Bolam).</li>
<li>Documentation is the single most powerful real-world defence — "if it wasn\'t written, it wasn\'t done".</li>
<li>Indemnity insurance covers damages but not criminal liability.</li></ul>`,
    sources: ['MJ-04','MJ-05','DT-2'],
    jumpToDiagram: 'MJ-04'
  },
  {
    id: 'SAQ-2.6', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Enumerate the four autonomous boards under the National Medical Commission. Briefly mention the role of each.',
    answer: `<h4>The National Medical Commission (NMC)</h4>
<p>NMC Act 2019 replaced the MCI Act 1956. NMC is the apex regulatory body, comprising 33 members and 4 autonomous boards.</p>
<h4>The Four Autonomous Boards</h4>
<table><tr><th>Board</th><th>Full Form</th><th>Role</th></tr>
<tr><td><strong>UGMEB</strong></td><td>Under-Graduate Medical Education Board</td><td>Frames MBBS curriculum, NEET-UG norms, recognises UG seats</td></tr>
<tr><td><strong>PGMEB</strong></td><td>Post-Graduate Medical Education Board</td><td>Frames MD/MS/DM/MCh curriculum, NEET-PG / INI-CET norms, PG seat recognition</td></tr>
<tr><td><strong>MARB</strong></td><td>Medical Assessment &amp; Rating Board</td><td>Inspects + rates medical colleges; quality control; recommends action against substandard institutions</td></tr>
<tr><td><strong>EMRB</strong></td><td>Ethics &amp; Medical Registration Board</td><td>Maintains National Medical Register; frames ethics code; appellate body on misconduct</td></tr></table>
<h4>Hierarchy</h4>
<p>NMC → 4 boards → State Medical Councils (one per state, maintain SMR) → individual Registered Medical Practitioners.</p>
<h4>Significance</h4>
<p>The 4-board structure was introduced to address opacity and corruption allegations against the erstwhile MCI. Autonomy of boards is expected to improve accountability and specialisation.</p>`,
    sources: ['MJ-02 (NMC Structure)'],
    jumpToDiagram: 'MJ-02'
  },
  {
    id: 'SAQ-2.7', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Describe the colour-coded segregation of biomedical waste at source under the BMW Rules 2016.',
    answer: `<h4>Background</h4>
<p>The Bio-Medical Waste Management Rules 2016 (under Environment Protection Act 1986) mandate segregation of biomedical waste at source into four colour-coded categories. Improper handling = professional misconduct + criminal liability.</p>
<h4>The Four Colour Categories</h4>
<table><tr><th>Colour</th><th>Contents</th><th>Container</th><th>Treatment</th></tr>
<tr><td><strong>Yellow</strong></td><td>Anatomical waste (placenta, amputated limbs, animal parts), soiled dressings, expired/discarded medicines, microbiology + biotechnology waste, chemical waste, discarded linen/mattress</td><td>Yellow non-chlorinated plastic bag</td><td>Incineration / deep burial / autoclaving</td></tr>
<tr><td><strong>Red</strong></td><td>Contaminated recyclable plastics — IV tubing &amp; sets, urine bags, catheters, syringes (WITHOUT needles), gloves, blood / urine bags, vacutainers</td><td>Red non-chlorinated plastic bag</td><td>Autoclaving / microwaving → shredding → sent to recyclers</td></tr>
<tr><td><strong>White</strong></td><td>Sharps — needles, syringes WITH fixed needles, scalpels, blades, lancets, trocars, contaminated glass slides</td><td>White translucent puncture-proof container</td><td>Autoclave / dry heat → shredding → encapsulation in concrete / sanitary landfill</td></tr>
<tr><td><strong>Blue</strong></td><td>Glass waste — ampoules, vials, broken glass, empty medicine bottles; metallic body implants</td><td>Blue puncture-proof leak-proof box</td><td>Chemical disinfection → recycling</td></tr></table>
<h4>Key BMW numbers</h4>
<ul><li>Total daily BMW generated in India: ~700 tonnes (urban hospitals ~75 %)</li>
<li>Storage time before treatment: ≤ <strong>48 hours</strong></li>
<li>Autoclave standard: 121 °C, 15 psi, 60 min</li>
<li>Liquid waste discharge pH: 6.5 – 9.0</li></ul>
<h4>Mnemonic</h4>
<p><strong>"YRWB" — Yellow (anatomical) · Red (plastics) · White (sharps) · Blue (glass + implants)</strong></p>`,
    sources: ['MJ-10 (BMW)','DT-9'],
    jumpToDiagram: 'MJ-10'
  },
  {
    id: 'SAQ-2.8', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Outline the pecuniary jurisdiction of the three-tier Consumer Commission hierarchy under the Consumer Protection Act 2019. What is the time limit for filing?',
    answer: `<h4>Background</h4>
<p>The Consumer Protection Act 2019 (effective 20 July 2020) replaced CPA 1986. Medical services were brought within CPA by the landmark Supreme Court ruling in <strong>Indian Medical Association v V.P. Shantha (1995)</strong>. Exception: free service in govt hospitals is not "service" under CPA.</p>
<h4>The Three-Tier Hierarchy (Pecuniary Jurisdiction)</h4>
<table><tr><th>Forum</th><th>Pecuniary Limit (CPA 2019)</th><th>Composition</th><th>Appeal to</th></tr>
<tr><td><strong>District Commission</strong></td><td>Up to <strong>₹1 crore</strong></td><td>President + 2 members (≥ 1 woman)</td><td>State Commission (within 45 days)</td></tr>
<tr><td><strong>State Commission</strong></td><td><strong>₹1 cr – ₹10 cr</strong></td><td>President (sitting/retd HC judge) + ≥ 4 members</td><td>National Commission (within 30 days)</td></tr>
<tr><td><strong>National Commission (NCDRC)</strong></td><td>Above <strong>₹10 crore</strong></td><td>President (sitting/retd SC judge) + ≥ 4 members</td><td>Supreme Court (within 30 days, on question of law)</td></tr></table>
<h4>Time Limit for Filing</h4>
<p><strong>2 years</strong> from the cause of action (date of negligent act / discovery of harm). The forum may condone delay if sufficient cause is shown.</p>
<h4>Remedies Available</h4>
<ul><li>Compensatory damages — medical expenses, lost income, suffering</li>
<li>Punitive damages (in gross negligence)</li>
<li>Refund of fees + replacement of defective service</li>
<li>Cease-and-desist orders against unfair practices</li>
<li>Direction to provide free corrective treatment</li></ul>
<h4>Advantages of CPA forum over civil court</h4>
<ul><li>Faster disposal (typical 3-12 months vs years in civil court)</li>
<li>Lower fees</li>
<li>Simpler procedure</li>
<li>Mediation option built in</li></ul>`,
    sources: ['MJ-09 (CPA)','DT-7'],
    jumpToDiagram: 'MJ-09'
  }
];

return {
  chapterNumber: 2,
  chapterTitle: 'Medical Jurisprudence',
  prereqs: [
    { term: 'NMC', meaning: 'National Medical Commission — apex regulatory body for medical education and practice in India (NMC Act 2019).' },
    { term: 'BNS / BNSS / BSA 2023', meaning: 'The three new Indian codes effective 1 July 2024, replacing IPC / CrPC / IEA respectively.' },
    { term: 'RMP', meaning: 'Registered Medical Practitioner — a doctor whose name is in the State / National Medical Register.' },
    { term: 'Consent', meaning: 'Permission given by a patient (or competent person) for examination or treatment.' },
    { term: 'Negligence', meaning: 'Breach of duty of care that results in damage to the patient.' },
    { term: 'Tort', meaning: 'A civil wrong (other than breach of contract) for which the remedy is unliquidated damages.' },
    { term: 'Vicarious liability', meaning: 'Liability of a superior (employer / hospital) for the wrongful acts of his subordinate (doctor / nurse) done in the course of employment.' },
    { term: 'Res Ipsa Loquitur', meaning: 'Latin: "the thing speaks for itself" — a doctrine in negligence where the very fact of damage proves the breach.' },
    { term: 'Privileged communication', meaning: 'Information shared in a doctor-patient relationship that is legally protected from disclosure.' },
    { term: 'Biomedical waste', meaning: 'Waste generated during diagnosis, treatment, or immunisation of humans or animals.' }
  ],
  diagrams: [
    { id: 'MJ-01', title: 'Three Pillars of Indian Law — BNS · BNSS · BSA 2023', shortTitle: '3 Pillars (BNS/BNSS/BSA)', svg: SVG_MJ01,
      prereqs: [{term:'BNS 2023',meaning:'Bharatiya Nyaya Sanhita — substantive criminal law (replaces IPC 1860).'},{term:'BNSS 2023',meaning:'Bharatiya Nagarik Suraksha Sanhita — procedural law (replaces CrPC 1973).'},{term:'BSA 2023',meaning:'Bharatiya Sakshya Adhiniyam — law of evidence (replaces IEA 1872).'},{term:'Substantive law',meaning:'Defines rights and offences (BNS).'},{term:'Procedural law',meaning:'Defines how laws are enforced (BNSS).'}],
      nodes: nodeList(['bns-card','bnss-card','bsa-card','mapping-table']),
      mcqs: MCQS['MJ-01']
    },
    { id: 'MJ-02', title: 'National Medical Commission — Structure', shortTitle: 'NMC Structure', svg: SVG_MJ02,
      prereqs: [{term:'NMC Act 2019',meaning:'Act that replaced the Medical Council of India Act 1956; established NMC as apex regulatory body.'},{term:'Autonomous Board',meaning:'A semi-independent body under NMC with specific regulatory functions (UGMEB / PGMEB / MARB / EMRB).'},{term:'State Medical Council (SMC)',meaning:'State-level body for registration and discipline of doctors in that state.'},{term:'NMR / SMR',meaning:'National / State Medical Register — official list of registered medical practitioners.'},{term:'RMP',meaning:'Registered Medical Practitioner; only an RMP can legally practise medicine.'}],
      nodes: nodeList(['nmc','ugmeb','pgmeb','marb','emrb','smc','imr']),
      mcqs: MCQS['MJ-02']
    },
    { id: 'MJ-03', title: 'Consent in Medical Practice', shortTitle: 'Consent', svg: SVG_MJ03,
      prereqs: [{term:'Expressed consent',meaning:'Consent explicitly stated by the patient — written or oral.'},{term:'Implied consent',meaning:'Consent inferred from the patient\'s conduct.'},{term:'Loco parentis',meaning:'Latin for "in place of a parent" — allows a non-parent to consent for a minor\'s emergency treatment.'},{term:'Informed consent',meaning:'Consent given after the patient is told nature, risks, alternatives, and consequences.'},{term:'Doctrine of necessity',meaning:'Allows treatment of an unconscious adult patient without consent when life is at risk.'}],
      nodes: nodeList(['expressed-consent','implied-consent','loco-parentis','informed-consent','valid-consent']),
      mcqs: MCQS['MJ-03']
    },
    { id: 'MJ-04', title: 'Medical Negligence — The 4 D\'s', shortTitle: 'Negligence 4 D\'s', svg: SVG_MJ04,
      prereqs: [{term:'Duty of care',meaning:'Legal duty owed by doctor to patient — arises with doctor-patient relationship.'},{term:'Dereliction',meaning:'Breach of the standard of care expected of a reasonably skilled doctor.'},{term:'Direct causation',meaning:'Causal link between the breach and the patient\'s harm.'},{term:'Damage',meaning:'Actual physical / mental / financial loss suffered by the patient.'},{term:'Bolam test',meaning:'Standard for breach — acted per practice accepted by responsible body of medical opinion.'}],
      nodes: nodeList(['negligence-duty','negligence-dereliction','negligence-direct','negligence-damage']),
      mcqs: MCQS['MJ-04']
    },
    { id: 'MJ-05', title: 'Defences against Medical Negligence', shortTitle: 'Negligence Defences', svg: SVG_MJ05,
      prereqs: [{term:'Volenti non fit injuria',meaning:'Patient who knowingly accepted a risk cannot later sue for it.'},{term:'Contributory negligence',meaning:'Patient\'s own negligence contributed — reduces damages.'},{term:'Therapeutic misadventure',meaning:'Unforeseeable adverse outcome despite proper care.'},{term:'Res judicata',meaning:'Bar on re-litigation of already-decided matter.'},{term:'Statute of limitation',meaning:'Time limit for filing a lawsuit.'}],
      nodes: nodeList(['def-volenti','def-contributory','def-resjudicata','def-misadventure','def-limitation','def-standard']),
      mcqs: MCQS['MJ-05']
    },
    { id: 'MJ-06', title: 'Res Ipsa Loquitur + Vicarious Liability', shortTitle: 'Res Ipsa + Vicarious', svg: SVG_MJ06,
      prereqs: [{term:'Res Ipsa Loquitur',meaning:'Latin: "the thing speaks for itself" — burden of proof shifts to doctor.'},{term:'Vicarious liability',meaning:'Employer liable for employee\'s negligent acts done in course of employment.'},{term:'Respondeat superior',meaning:'Latin maxim for vicarious liability — "let the master answer".'},{term:'Captain of the Ship',meaning:'Doctrine making surgeon-in-charge liable for entire OT team during surgery.'}],
      nodes: nodeList(['res-ipsa','vicarious-liability']),
      mcqs: MCQS['MJ-06']
    },
    { id: 'MJ-07', title: 'Professional Secrecy + Exceptions', shortTitle: 'Professional Secrecy', svg: SVG_MJ07,
      prereqs: [{term:'Professional secrecy',meaning:'Doctor\'s duty to keep patient information confidential.'},{term:'Privileged communication',meaning:'Information shared in doctor-patient relationship protected from disclosure.'},{term:'Notifiable disease',meaning:'Disease that must be reported by law to public health authorities.'},{term:'Tarasoff doctrine',meaning:'Duty to warn identifiable third parties of imminent serious harm.'}],
      nodes: nodeList(['secrecy-rule','exception-court','exception-notifiable','exception-thirdparty','exception-self-interest','exception-crime','exception-employer','exception-consent']),
      mcqs: MCQS['MJ-07']
    },
    { id: 'MJ-08', title: 'Professional Misconduct — The 6 A\'s', shortTitle: 'Professional Misconduct', svg: SVG_MJ08,
      prereqs: [{term:'Professional misconduct',meaning:'Conduct disgraceful to colleagues of good repute — "infamous conduct".'},{term:'Adultery',meaning:'Voluntary sexual intercourse with married female other than wife.'},{term:'Dichotomy',meaning:'Fee splitting — taking/giving commission for referrals.'},{term:'Moral turpitude',meaning:'Offence involving inherent moral wrongness.'}],
      nodes: nodeList(['misconduct-definition','six-As-misconduct','A-adultery','A-association','A-abortion','A-associated-unqualified','A-alcohol','A-addiction','other-misconduct']),
      mcqs: MCQS['MJ-08']
    },
    { id: 'MJ-09', title: 'Consumer Protection Act 2019 + Consumer Fora', shortTitle: 'CPA 2019', svg: SVG_MJ09,
      prereqs: [{term:'CPA 2019',meaning:'Consumer Protection Act 2019 — replaced CPA 1986, effective 20 July 2020.'},{term:'NCDRC',meaning:'National Consumer Disputes Redressal Commission — apex consumer forum.'},{term:'Pecuniary jurisdiction',meaning:'Monetary limit within which a forum can adjudicate.'},{term:'IMA v V.P. Shantha',meaning:'1995 Supreme Court landmark bringing medical services within CPA.'}],
      nodes: nodeList(['cpa-overview','district-forum','state-commission','national-commission','cpa-remedies']),
      mcqs: MCQS['MJ-09']
    },
    { id: 'MJ-10', title: 'Biomedical Waste Management — Colour-coded Bins', shortTitle: 'BMW Colour-coded', svg: SVG_MJ10,
      prereqs: [{term:'Biomedical waste (BMW)',meaning:'Waste from diagnosis/treatment/immunisation of humans or animals.'},{term:'BMW Rules 2016',meaning:'Bio-Medical Waste Management Rules under EPA 1986.'},{term:'Incineration',meaning:'High-temperature combustion treatment.'},{term:'Autoclaving',meaning:'High-pressure steam sterilisation (121°C, 15 psi, 60 min).'}],
      nodes: nodeList(['bmw-overview','bin-yellow','bin-red','bin-white','bin-blue','bmw-quantity']),
      mcqs: MCQS['MJ-10']
    },
    { id: 'MJ-11', title: 'Medical Records + Key Statutory Acts', shortTitle: 'Records + Acts', svg: SVG_MJ11,
      prereqs: [{term:'IMC Regulations 2002',meaning:'Code of Ethics for medical practitioners; §1.3.1 mandates 3-year record retention.'},{term:'MTP Act',meaning:'Medical Termination of Pregnancy Act 1971 (amended 2021).'},{term:'PCPNDT Act',meaning:'Pre-Conception and Pre-Natal Diagnostic Techniques Act 1994.'},{term:'THO Act',meaning:'Transplantation of Human Organs Act 1994.'},{term:'Schedule H drugs',meaning:'Prescription-only drugs under Drugs &amp; Cosmetics Act.'}],
      nodes: nodeList(['records-overview','act-mtp','act-pcpndt','act-organ','act-drugs','act-factory','act-constitutional']),
      mcqs: MCQS['MJ-11']
    }
  ],
  diffTables: DIFF_TABLES,
  subjectiveQs: SUBJ,
  highYield: [
    '<strong>BNS / BNSS / BSA 2023</strong> all came into force on <strong>1 July 2024</strong> · replaced IPC 1860 / CrPC 1973 / IEA 1872',
    '<strong>NMC Act 2019</strong> replaced MCI Act 1956 · MCI dissolved 25 Sept 2020',
    'NMC has <strong>4 autonomous boards</strong>: UGMEB · PGMEB · MARB · <strong>EMRB</strong> (maintains National Medical Register)',
    '<strong>Informed consent</strong> requires: nature, risks, alternatives, consequences of refusal · Samira Kohli landmark (2008)',
    'Age of consent: ≥ 12 yrs exam · <strong>≥ 18 yrs</strong> for surgery / anaesthesia / MTP / organ donation',
    '<strong>4 D\'s of negligence</strong>: Duty · Dereliction · Direct cause · Damage · all must coexist',
    '<strong>Bolam test</strong> (1957): acted per practice of responsible body of medical opinion · modified by Bolitho',
    '<strong>Res Ipsa Loquitur</strong>: burden shifts to doctor (retained gauze case)',
    '<strong>Vicarious liability</strong>: hospital liable for doctor\'s acts in course of employment (Respondeat superior)',
    'Operating under alcohol → <strong>criminal negligence</strong> (§106 BNS / old §304-A IPC)',
    'Causing death by negligence: <strong>§106 BNS</strong> (was §304-A IPC)',
    '<strong>CPA 2019</strong> pecuniary limits: District ≤ ₹1 cr · State ₹1-10 cr · National &gt; ₹10 cr · Filing within 2 yrs',
    'IMA v V.P. Shantha (1995) brought <strong>medical services within CPA</strong>; free govt hospital service excluded',
    'Medical records: <strong>3-year retention</strong> · copy to patient within 72 hours · IMC Regs 2002 §1.3.1',
    'BMW colour-coded segregation: <strong>YRWB</strong> — Yellow (anatomical) · Red (plastics) · White (sharps) · Blue (glass + implants)',
    'MTP Act 2021 amendment: ≤ 20 wk (1 doctor) · 20-24 wk (2 doctors + specific categories)',
    'PCPNDT: Form F mandatory; sex determination = up to 3 yrs + ₹10,000 (first offence)',
    'Factories Act 1948: children &lt; 14 cannot work · max work hours incl. overtime = <strong>60/week</strong>',
    '<strong>Article 42</strong> is NOT child-specific (deals with maternity benefit) — common PYQ trap',
    'Perjury under §229 BNS (old §193 IPC) — up to 7 years + fine'
  ]
};
})();
