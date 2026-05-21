/* Surgical upgrade: replace all SVG_LP02..LP09 constants in data.js with
   redesigned versions matching the Reference 2/3 infographic aesthetic.
   Run: node scripts/upgrade-svgs.js                                       */
const fs = require('fs');
const path = require('path');

const DATA = path.resolve(__dirname, '../02_chapters/legal-procedure/data.js');

const SVGS = {

/* ============ LP-02 — Types of Inquest ============ */
LP02: `<svg viewBox="0 0 1600 1200" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
\${STYLE}
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
</svg>`,

/* ============ LP-03 — Summons / Subpoena ============ */
LP03: `<svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
\${STYLE}
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
</svg>`,

/* ============ LP-04 — Medical Evidence ============ */
LP04: `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
\${STYLE}
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
</svg>`,

/* ============ LP-05 — Documentary Evidence Subtypes ============ */
LP05: `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
\${STYLE}
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
</svg>`,

/* ============ LP-06 — Witness Types ============ */
LP06: `<svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
\${STYLE}
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
</svg>`,

/* ============ LP-07 — Witness Examination ============ */
LP07: `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
\${STYLE}
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
</svg>`,

/* ============ LP-08 — Question Types ============ */
LP08: `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
\${STYLE}
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
</svg>`,

/* ============ LP-09 — Conduct of Doctor ============ */
LP09: `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
\${STYLE}
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
</svg>`,

};

/* === SURGERY === */
let data = fs.readFileSync(DATA, 'utf8');
let replaced = 0, missed = 0;
for (const [key, svg] of Object.entries(SVGS)) {
  const regex = new RegExp('const SVG_' + key + ' = `[\\s\\S]*?`;', 'g');
  if (!regex.test(data)) { console.error('  ✗ no match: SVG_' + key); missed++; continue; }
  data = data.replace(regex, 'const SVG_' + key + ' = `' + svg + '`;');
  console.log('  ✓ replaced SVG_' + key);
  replaced++;
}
fs.writeFileSync(DATA, data);
console.log('\\nReplaced ' + replaced + ' / ' + (replaced + missed) + ' SVGs.');
