/* ===================================================================
   Medascend FMT — Chapter 9: Mechanical Injury
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

const SVG_MI01 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Mechanical Injury — Classification</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Injury produced by physical force · 4 broad categories by mechanism · BNS 116 / IPC 44 statutory definition</text>

<g data-node-id="mi-injury-definition"><rect class="nbcr" x="60" y="110" width="1480" height="110" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">📜 INJURY — Statutory Definition</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="500" fill="#5C4810">"Any harm whatever illegally caused to any person, in body, mind, reputation, or property." [BNS 116 · ≡ IPC 44]</text><text x="90" y="204" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="#5C4810">Hurt = bodily pain, disease or infirmity caused [BNS 114 · ≡ IPC 319] · Grievous hurt = 8 categories [BNS 116(2) · ≡ IPC 320]</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="mi-blunt-group"><rect class="body-white" x="60" y="250" width="730" height="350" rx="14"/><path d="M 74,250 H 776 A 14,14 0 0 1 790,264 V 320 H 60 V 264 A 14,14 0 0 1 74,250 Z" fill="url(#gBlue)"/><text x="90" y="295" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🔨 1. BLUNT FORCE INJURIES</text><text x="90" y="356" class="t-keylbl">Agent:</text><text x="160" y="356" class="t-keyval">Object with NO sharp edge (fist, stick, stone, ground, vehicle)</text><text x="90" y="388" class="t-keylbl">3 Wound types:</text><text x="270" y="388" class="t-keyval"><strong>Abrasion · Contusion (Bruise) · Laceration</strong></text><text x="90" y="424" class="t-keylbl">Mechanism:</text><text x="220" y="424" class="t-keyval">Crush · friction · stretching · shearing</text><text x="90" y="456" class="t-keylbl">Cardinal feature:</text><text x="270" y="456" class="t-keyval">Irregular margins, bruising of adjacent skin</text><text x="90" y="488" class="t-keylbl">Manner:</text><text x="180" y="488" class="t-keyval">Often accidental (RTA, fall, assault); homicidal possible</text><text x="90" y="524" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">Diagrams MI-02 (Abrasion) · MI-03 (Contusion) · MI-04 (Laceration)</text><circle class="ic" cx="770" cy="268" r="14"/><text class="t-info" x="770" y="274" text-anchor="middle">ⓘ</text></g>

<g data-node-id="mi-sharp-group"><rect class="body-white" x="810" y="250" width="730" height="350" rx="14"/><path d="M 824,250 H 1526 A 14,14 0 0 1 1540,264 V 320 H 810 V 264 A 14,14 0 0 1 824,250 Z" fill="url(#gRed)"/><text x="840" y="295" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🔪 2. SHARP FORCE INJURIES</text><text x="840" y="356" class="t-keylbl">Agent:</text><text x="910" y="356" class="t-keyval">Object with sharp cutting edge / point (knife, blade, glass)</text><text x="840" y="388" class="t-keylbl">3 Wound types:</text><text x="1020" y="388" class="t-keyval"><strong>Incised · Stab (Punctured) · Chop</strong></text><text x="840" y="424" class="t-keylbl">Mechanism:</text><text x="970" y="424" class="t-keyval">Cutting · piercing</text><text x="840" y="456" class="t-keylbl">Cardinal feature:</text><text x="1020" y="456" class="t-keyval">CLEAN margins, no surrounding bruising</text><text x="840" y="488" class="t-keylbl">Manner:</text><text x="930" y="488" class="t-keyval">Mostly HOMICIDAL · suicidal (cut throat / wrist)</text><text x="840" y="524" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">Diagrams MI-05 (Incised) · MI-06 (Stab) · MI-07 (Chop)</text><circle class="ic" cx="1510" cy="268" r="14"/><text class="t-info" x="1510" y="274" text-anchor="middle">ⓘ</text></g>

<g data-node-id="mi-firearm-group"><rect class="body-white" x="60" y="630" width="730" height="290" rx="14"/><path d="M 74,630 H 776 A 14,14 0 0 1 790,644 V 700 H 60 V 644 A 14,14 0 0 1 74,630 Z" fill="url(#gOrange)"/><text x="90" y="675" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🔫 3. FIREARM &amp; BLAST INJURIES</text><text x="90" y="734" class="t-keylbl">Agent:</text><text x="160" y="734" class="t-keyval">Projectile from firearm · explosive blast</text><text x="90" y="766" class="t-keylbl">Mechanism:</text><text x="220" y="766" class="t-keyval">Kinetic energy of bullet · pressure wave + fragments</text><text x="90" y="798" class="t-keylbl">Cross-ref:</text><text x="200" y="798" class="t-keyval">Detailed in Ch 10 (Firearm and Bomb Blast Injuries)</text><text x="90" y="830" class="t-keylbl">Forensic priority:</text><text x="270" y="830" class="t-keyval">Entry vs exit · range estimation · weapon ID</text><text x="90" y="862" class="t-keylbl">Manner:</text><text x="180" y="862" class="t-keyval">Mostly HOMICIDAL · accidental · suicidal (contact)</text><circle class="ic" cx="770" cy="648" r="14"/><text class="t-info" x="770" y="654" text-anchor="middle">ⓘ</text></g>

<g data-node-id="mi-misc-group"><rect class="body-white" x="810" y="630" width="730" height="290" rx="14"/><path d="M 824,630 H 1526 A 14,14 0 0 1 1540,644 V 700 H 810 V 644 A 14,14 0 0 1 824,630 Z" fill="url(#gPurple)"/><text x="840" y="675" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">⚡ 4. MISCELLANEOUS INJURIES</text><text x="840" y="734" class="t-keylbl">Thermal:</text><text x="930" y="734" class="t-keyval">Burns, scalds, frostbite (Ch 14)</text><text x="840" y="766" class="t-keylbl">Electrical:</text><text x="940" y="766" class="t-keyval">Electric burns, lightning (Ch 14)</text><text x="840" y="798" class="t-keylbl">Chemical:</text><text x="940" y="798" class="t-keyval">Acid, alkali burns (corrosive — Ch 34)</text><text x="840" y="830" class="t-keylbl">Radiation:</text><text x="940" y="830" class="t-keyval">X-ray, UV, nuclear</text><text x="840" y="862" class="t-keylbl">Pressure (barotrauma):</text><text x="1070" y="862" class="t-keyval">Air, water</text><circle class="ic" cx="1510" cy="648" r="14"/><text class="t-info" x="1510" y="654" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="950" width="1480" height="60" rx="10" fill="url(#gGrey)"/><text x="800" y="988" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Mnemonic — Blunt = ACL (Abrasion · Contusion · Laceration) · Sharp = ISC (Incised · Stab · Chop)</text>

<rect x="60" y="1030" width="1480" height="50" rx="10" fill="url(#gOrange)"/><text x="800" y="1062" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⚖️ Legal pegs — BNS 116 (Hurt) · BNS 117 (Grievous hurt) · BNS 118 (by dangerous weapon) · BNS 100/101 (Culpable homicide / Murder)</text>
</svg>`;

const SVG_MI02 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Abrasion — Types, Features &amp; Ageing</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Superficial wound of skin involving the epidermis only · 5 types by mechanism · age by colour stages</text>

<g data-node-id="abrasion-definition"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🩹 ABRASION</text><text x="90" y="178" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= a superficial wound involving the EPIDERMIS only (does not breach the dermis). Caused by friction or pressure of a rough/blunt object against the skin. Heals WITHOUT a scar.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="abrasion-scratch"><rect class="body-white" x="60" y="240" width="290" height="220" rx="14"/><path d="M 74,240 H 336 A 14,14 0 0 1 350,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="278" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">1. SCRATCH (Linear)</text><text x="80" y="328" class="t-keylbl">Agent:</text><text x="150" y="328" class="t-keyval">Pin, nail, thorn</text><text x="80" y="354" class="t-keylbl">Shape:</text><text x="145" y="354" class="t-keyval">Linear, narrow</text><text x="80" y="380" class="t-keylbl">Direction:</text><text x="180" y="380" class="t-keyval">Epidermal tags pile</text><text x="80" y="400" class="t-keyval">at the FAR end (tells direction)</text><text x="80" y="430" class="t-keylbl">e.g.:</text><text x="125" y="430" class="t-keyval">Fingernail marks in throttling</text><circle class="ic" cx="330" cy="258" r="14"/><text class="t-info" x="330" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="abrasion-graze"><rect class="body-white" x="370" y="240" width="290" height="220" rx="14"/><path d="M 384,240 H 646 A 14,14 0 0 1 660,254 V 295 H 370 V 254 A 14,14 0 0 1 384,240 Z" fill="url(#gOrange)"/><text x="390" y="278" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">2. GRAZE (Brush-burn)</text><text x="390" y="328" class="t-keylbl">Agent:</text><text x="460" y="328" class="t-keyval">Rough surface dragged</text><text x="390" y="354" class="t-keyval">across skin (road, ground)</text><text x="390" y="384" class="t-keylbl">Shape:</text><text x="460" y="384" class="t-keyval">Broad, irregular</text><text x="390" y="410" class="t-keylbl">Direction:</text><text x="490" y="410" class="t-keyval">Parallel lines · tags</text><text x="390" y="430" class="t-keyval">pile at far end</text><text x="390" y="448" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">RTA: classic finding</text><circle class="ic" cx="640" cy="258" r="14"/><text class="t-info" x="640" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="abrasion-pressure"><rect class="body-white" x="680" y="240" width="290" height="220" rx="14"/><path d="M 694,240 H 956 A 14,14 0 0 1 970,254 V 295 H 680 V 254 A 14,14 0 0 1 694,240 Z" fill="url(#gRed)"/><text x="700" y="278" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">3. PRESSURE</text><text x="700" y="328" class="t-keylbl">Mechanism:</text><text x="830" y="328" class="t-keyval">Sustained pressure of</text><text x="700" y="354" class="t-keyval">ligature / cord on skin</text><text x="700" y="384" class="t-keylbl">Result:</text><text x="770" y="384" class="t-keyval">Parchmentised mark</text><text x="700" y="404" class="t-keyval">(dry, leathery, brown)</text><text x="700" y="434" class="t-keylbl">Classic:</text><text x="780" y="434" class="t-keyval">Hanging / ligature</text><text x="700" y="454" class="t-keyval">strangulation marks</text><circle class="ic" cx="950" cy="258" r="14"/><text class="t-info" x="950" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="abrasion-patterned"><rect class="body-white" x="990" y="240" width="290" height="220" rx="14"/><path d="M 1004,240 H 1266 A 14,14 0 0 1 1280,254 V 295 H 990 V 254 A 14,14 0 0 1 1004,240 Z" fill="url(#gGreen)"/><text x="1000" y="278" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">4. PATTERNED</text><text x="1000" y="328" class="t-keylbl">Definition:</text><text x="1100" y="328" class="t-keyval">Reproduces shape of</text><text x="1000" y="354" class="t-keyval">causing agent on skin</text><text x="1000" y="384" class="t-keylbl">Examples:</text><text x="1100" y="384" class="t-keyval">Tyre tread, belt buckle,</text><text x="1000" y="404" class="t-keyval">teeth (bite), shoe</text><text x="1000" y="434" class="t-keylbl">Value:</text><text x="1060" y="434" class="t-keyval">High evidentiary value</text><text x="1000" y="454" class="t-keyval">— IDs the weapon</text><circle class="ic" cx="1260" cy="258" r="14"/><text class="t-info" x="1260" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="abrasion-imprint"><rect class="body-white" x="1300" y="240" width="240" height="220" rx="14"/><path d="M 1314,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 1300 V 254 A 14,14 0 0 1 1314,240 Z" fill="url(#gPurple)"/><text x="1310" y="278" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">5. IMPRINT</text><text x="1310" y="328" class="t-keylbl">a.k.a.:</text><text x="1365" y="328" class="t-keyval">Contact, stamp</text><text x="1310" y="354" class="t-keyval">abrasion</text><text x="1310" y="384" class="t-keylbl">Mechanism:</text><text x="1310" y="406" class="t-keyval">Impact only —</text><text x="1310" y="426" class="t-keyval">no movement</text><text x="1310" y="456" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Subset of patterned</text><circle class="ic" cx="1520" cy="258" r="14"/><text class="t-info" x="1520" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="abrasion-age"><rect class="body-white" x="60" y="490" width="900" height="370" rx="14"/><path d="M 74,490 H 946 A 14,14 0 0 1 960,504 V 560 H 60 V 504 A 14,14 0 0 1 74,490 Z" fill="url(#gPurple)"/><text x="90" y="538" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🕐 Ageing of Abrasion — by Colour</text><text x="90" y="595" class="t-keylbl">Fresh (0-24 h):</text><text x="240" y="595" class="t-keyval">Bright red / pink · slight ooze of lymph + blood</text><text x="90" y="625" class="t-keylbl">12-24 h:</text><text x="175" y="625" class="t-keyval">Reddish-brown · scab begins to form</text><text x="90" y="655" class="t-keylbl">2-3 days:</text><text x="185" y="655" class="t-keyval">Reddish-brown · dark scab firmly adherent</text><text x="90" y="685" class="t-keylbl">4-7 days:</text><text x="185" y="685" class="t-keyval">Dark brown / black · scab dry, slightly raised</text><text x="90" y="715" class="t-keylbl">After 7 days:</text><text x="215" y="715" class="t-keyval">Scab separates from edges, falls off</text><text x="90" y="745" class="t-keylbl">10-14 days:</text><text x="200" y="745" class="t-keyval">Healed completely — depigmented pink area, no scar</text><text x="90" y="783" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="#6B7283">Note: scab formation lags slightly in elderly/diabetics; accelerated in children.</text><text x="90" y="820" class="t-keylbl">★ Heals WITHOUT a scar</text><text x="320" y="820" class="t-keyval">(epidermal injury only)</text><circle class="ic" cx="940" cy="508" r="14"/><text class="t-info" x="940" y="514" text-anchor="middle">ⓘ</text></g>

<g data-node-id="abrasion-medicolegal"><rect x="980" y="490" width="560" height="370" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="1260" y="538" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">⚖️ Medicolegal Importance</text><text x="1000" y="585" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>Site</strong> — indicates point of impact / contact</text><text x="1000" y="612" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>Pattern</strong> — may identify weapon (tyre tread, teeth, ligature)</text><text x="1000" y="639" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>Direction</strong> — tag pile-up at far end → direction of force</text><text x="1000" y="666" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>Vital reaction</strong> — bright red, lymph ooze = antemortem</text><text x="1000" y="693" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>Age</strong> — colour stages help dating</text><text x="1000" y="720" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>Crime reconstruction</strong> — finger-nail abrasions = struggle</text><text x="1000" y="747" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>BNS 115 / IPC 321</strong> — voluntarily causing hurt</text><text x="1000" y="785" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="rgba(255,255,255,0.75)">Abrasions are often the MOST useful injuries forensically — patterned ones can identify the assault weapon.</text><circle class="ic" cx="1520" cy="508" r="14"/><text class="t-info" x="1520" y="514" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="890" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="928" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Abrasion = EPIDERMAL only · heals WITHOUT scar · tag direction reveals force direction</text>

<rect x="60" y="970" width="1480" height="60" rx="10" fill="url(#gGrey)"/><text x="800" y="1008" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">⚠️ Patterned abrasion (tyre, belt, teeth) = highest evidentiary value — always photograph with scale</text>
</svg>`;

const SVG_MI03 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Contusion (Bruise) — Types, Age &amp; Pitfalls</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Extravasation of blood into tissue from ruptured small vessels · age by colour change · ectopic migration</text>

<g data-node-id="contusion-definition"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🟣 CONTUSION (Bruise)</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= effusion of blood into tissues from rupture of small blood vessels (capillaries, venules) caused by blunt force. Skin remains INTACT. Develops &amp; resolves through characteristic colour stages.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="contusion-intradermal"><rect class="body-white" x="60" y="240" width="360" height="220" rx="14"/><path d="M 74,240 H 406 A 14,14 0 0 1 420,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="278" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">1. INTRADERMAL</text><text x="80" y="328" class="t-keylbl">Depth:</text><text x="150" y="328" class="t-keyval">Within DERMIS</text><text x="80" y="358" class="t-keylbl">Feature:</text><text x="160" y="358" class="t-keyval">Sharp margins, often</text><text x="80" y="378" class="t-keyval">PATTERNED (whip, belt)</text><text x="80" y="408" class="t-keylbl">Importance:</text><text x="190" y="408" class="t-keyval">Reproduces shape of</text><text x="80" y="428" class="t-keyval">causing weapon</text><circle class="ic" cx="400" cy="258" r="14"/><text class="t-info" x="400" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="contusion-subcutaneous"><rect class="body-white" x="440" y="240" width="360" height="220" rx="14"/><path d="M 454,240 H 786 A 14,14 0 0 1 800,254 V 295 H 440 V 254 A 14,14 0 0 1 454,240 Z" fill="url(#gGreen)"/><text x="460" y="278" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">2. SUBCUTANEOUS</text><text x="460" y="328" class="t-keylbl">Depth:</text><text x="530" y="328" class="t-keyval">Subcutaneous fat</text><text x="460" y="358" class="t-keylbl">Feature:</text><text x="540" y="358" class="t-keyval">Diffuse margins, may</text><text x="460" y="378" class="t-keyval">migrate by gravity</text><text x="460" y="408" class="t-keylbl">Most common</text><text x="460" y="438" class="t-keyval">type seen clinically</text><circle class="ic" cx="780" cy="258" r="14"/><text class="t-info" x="780" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="contusion-intramuscular"><rect class="body-white" x="820" y="240" width="360" height="220" rx="14"/><path d="M 834,240 H 1166 A 14,14 0 0 1 1180,254 V 295 H 820 V 254 A 14,14 0 0 1 834,240 Z" fill="url(#gOrange)"/><text x="840" y="278" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">3. INTRAMUSCULAR</text><text x="840" y="328" class="t-keylbl">Depth:</text><text x="910" y="328" class="t-keyval">Within muscle</text><text x="840" y="358" class="t-keylbl">Feature:</text><text x="920" y="358" class="t-keyval">May not be visible on</text><text x="840" y="378" class="t-keyval">surface for HOURS-DAYS</text><text x="840" y="408" class="t-keylbl">Pitfall:</text><text x="900" y="408" class="t-keyval">Delayed appearance can</text><text x="840" y="428" class="t-keyval">mimic later assault</text><circle class="ic" cx="1160" cy="258" r="14"/><text class="t-info" x="1160" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="contusion-deep"><rect class="body-white" x="1200" y="240" width="340" height="220" rx="14"/><path d="M 1214,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 1200 V 254 A 14,14 0 0 1 1214,240 Z" fill="url(#gRed)"/><text x="1210" y="278" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">4. DEEP / VISCERAL</text><text x="1210" y="328" class="t-keylbl">Site:</text><text x="1260" y="328" class="t-keyval">Solid organs (liver,</text><text x="1210" y="348" class="t-keyval">spleen, kidney, heart)</text><text x="1210" y="378" class="t-keylbl">Risk:</text><text x="1260" y="378" class="t-keyval">Internal haemorrhage</text><text x="1210" y="398" class="t-keyval">→ death without external</text><text x="1210" y="418" class="t-keyval">signs of injury</text><circle class="ic" cx="1520" cy="258" r="14"/><text class="t-info" x="1520" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="contusion-age"><rect class="body-white" x="60" y="490" width="900" height="370" rx="14"/><path d="M 74,490 H 946 A 14,14 0 0 1 960,504 V 560 H 60 V 504 A 14,14 0 0 1 74,490 Z" fill="url(#gPurple)"/><text x="90" y="538" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🌈 Ageing of Bruise — Colour Stages</text><text x="90" y="595" class="t-keylbl">0-2 days:</text><text x="180" y="595" class="t-keyval"><strong>RED → reddish-blue</strong> — extravasated oxygenated blood</text><text x="90" y="625" class="t-keylbl">2-5 days:</text><text x="180" y="625" class="t-keyval"><strong>BLUE → dark purple</strong> — deoxygenation of Hb</text><text x="90" y="655" class="t-keylbl">5-7 days:</text><text x="180" y="655" class="t-keyval"><strong>GREEN</strong> — biliverdin (Hb → biliverdin)</text><text x="90" y="685" class="t-keylbl">7-10 days:</text><text x="195" y="685" class="t-keyval"><strong>YELLOW</strong> — bilirubin · haemosiderin</text><text x="90" y="715" class="t-keylbl">10-14 days:</text><text x="205" y="715" class="t-keyval">Fading; normal skin restored</text><text x="90" y="755" class="t-keylbl">★ Mnemonic — Red · Blue · Green · Yellow ("RBGY")</text><text x="90" y="788" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">★ YELLOW colour proves bruise is at LEAST 18 hours old (bilirubin needs time).</text><text x="90" y="815" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">⚠️ Colour ageing is APPROXIMATE — varies by depth, age, site, individual.</text><circle class="ic" cx="940" cy="508" r="14"/><text class="t-info" x="940" y="514" text-anchor="middle">ⓘ</text></g>

<g data-node-id="contusion-ectopic"><rect class="body-white" x="980" y="490" width="560" height="180" rx="14"/><path d="M 994,490 H 1526 A 14,14 0 0 1 1540,504 V 555 H 980 V 504 A 14,14 0 0 1 994,490 Z" fill="url(#gOrange)"/><text x="990" y="538" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">↘️ Ectopic / Migrated Bruise</text><text x="1000" y="585" class="t-keyval">Blood from deep bruise tracks along fascial planes &amp;</text><text x="1000" y="606" class="t-keyval">surfaces at a site distant from impact (by gravity).</text><text x="1000" y="636" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="#6B7283">Classic: forehead blow → "black eye" (orbital bruise hours later).</text><circle class="ic" cx="1520" cy="508" r="14"/><text class="t-info" x="1520" y="514" text-anchor="middle">ⓘ</text></g>

<g data-node-id="contusion-pseudo"><rect class="body-white" x="980" y="690" width="560" height="170" rx="14"/><path d="M 994,690 H 1526 A 14,14 0 0 1 1540,704 V 750 H 980 V 704 A 14,14 0 0 1 994,690 Z" fill="url(#gGrey)"/><text x="990" y="735" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">⚠️ Pseudo-bruise (PM lividity)</text><text x="1000" y="780" class="t-keyval">PM hypostatic lividity in dependent parts can</text><text x="1000" y="800" class="t-keyval">mimic bruise. Distinguish on incision: blood</text><text x="1000" y="820" class="t-keyval">extravasated in tissues = bruise · in vessels = lividity.</text><circle class="ic" cx="1520" cy="708" r="14"/><text class="t-info" x="1520" y="714" text-anchor="middle">ⓘ</text></g>

<g data-node-id="contusion-battered"><rect x="60" y="890" width="1480" height="100" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="925" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">👶 Battered Baby Syndrome — Bruises of DIFFERENT AGES</text><text x="100" y="960" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">★ Multiple bruises in different stages of colour healing (red, blue, green, yellow) → repeated trauma at different times = pathognomonic. <strong>[NEET-PG 2019]</strong></text><circle class="ic" cx="1510" cy="908" r="14"/><text class="t-info" x="1510" y="914" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1010" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="1048" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 Bruise colour: Red → Blue → Green → Yellow · YELLOW ≥ 18 h old · Battered baby = bruises of different ages</text>
</svg>`;

const SVG_MI04 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Laceration — 5 Types &amp; Cardinal Features</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Tearing of skin &amp; soft tissue by blunt force · irregular margins · bridges of tissue across wound</text>

<g data-node-id="laceration-definition"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🩸 LACERATION</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= a tear of skin and underlying soft tissue caused by blunt force (skin breach). Margins are IRREGULAR, contused, abraded; tissue BRIDGES (nerves, vessels, fibrous strands) cross the floor of the wound — the cardinal feature.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lac-split"><rect class="body-white" x="60" y="240" width="290" height="240" rx="14"/><path d="M 74,240 H 336 A 14,14 0 0 1 350,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="278" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">1. SPLIT</text><text x="80" y="328" class="t-keylbl">Mechanism:</text><text x="200" y="328" class="t-keyval">Skin compressed</text><text x="80" y="348" class="t-keyval">between blunt object &amp;</text><text x="80" y="368" class="t-keyval">underlying BONE → splits</text><text x="80" y="400" class="t-keylbl">Site:</text><text x="135" y="400" class="t-keyval">Scalp, eyebrow,</text><text x="80" y="420" class="t-keyval">shin, elbow, cheek</text><text x="80" y="450" class="t-keylbl">★ Pitfall:</text><text x="170" y="450" class="t-keyval">LOOKS INCISED —</text><text x="80" y="470" class="t-keyval">but has tissue bridges</text><circle class="ic" cx="330" cy="258" r="14"/><text class="t-info" x="330" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lac-stretch"><rect class="body-white" x="370" y="240" width="290" height="240" rx="14"/><path d="M 384,240 H 646 A 14,14 0 0 1 660,254 V 295 H 370 V 254 A 14,14 0 0 1 384,240 Z" fill="url(#gGreen)"/><text x="390" y="278" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">2. STRETCH</text><text x="390" y="328" class="t-keylbl">Mechanism:</text><text x="510" y="328" class="t-keyval">Overstretching of skin</text><text x="390" y="348" class="t-keyval">beyond elastic limit</text><text x="390" y="380" class="t-keylbl">Site:</text><text x="445" y="380" class="t-keyval">Joints (extension),</text><text x="390" y="400" class="t-keyval">abdomen (parturition,</text><text x="390" y="420" class="t-keyval">crush)</text><text x="390" y="450" class="t-keylbl">e.g.:</text><text x="435" y="450" class="t-keyval">Pelvic crush, run-over</text><text x="390" y="470" class="t-keyval">limb dislocations</text><circle class="ic" cx="640" cy="258" r="14"/><text class="t-info" x="640" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lac-crush"><rect class="body-white" x="680" y="240" width="290" height="240" rx="14"/><path d="M 694,240 H 956 A 14,14 0 0 1 970,254 V 295 H 680 V 254 A 14,14 0 0 1 694,240 Z" fill="url(#gOrange)"/><text x="700" y="278" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">3. CRUSH</text><text x="700" y="328" class="t-keylbl">Mechanism:</text><text x="820" y="328" class="t-keyval">Heavy compression</text><text x="700" y="348" class="t-keyval">crushes skin + deep tissue</text><text x="700" y="380" class="t-keylbl">Features:</text><text x="800" y="380" class="t-keyval">Wide, ragged margins;</text><text x="700" y="400" class="t-keyval">extensive bruising;</text><text x="700" y="420" class="t-keyval">underlying fracture</text><text x="700" y="450" class="t-keylbl">e.g.:</text><text x="745" y="450" class="t-keyval">Run-over by vehicle</text><text x="700" y="470" class="t-keyval">tyre, building collapse</text><circle class="ic" cx="950" cy="258" r="14"/><text class="t-info" x="950" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lac-avulsion"><rect class="body-white" x="990" y="240" width="290" height="240" rx="14"/><path d="M 1004,240 H 1266 A 14,14 0 0 1 1280,254 V 295 H 990 V 254 A 14,14 0 0 1 1004,240 Z" fill="url(#gRed)"/><text x="1000" y="278" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">4. AVULSION</text><text x="1000" y="328" class="t-keylbl">Mechanism:</text><text x="1120" y="328" class="t-keyval">Skin/tissue torn AWAY</text><text x="1000" y="348" class="t-keyval">from underlying parts</text><text x="1000" y="380" class="t-keylbl">Types:</text><text x="1075" y="380" class="t-keyval">Skin flap (degloving),</text><text x="1000" y="400" class="t-keyval">scalp avulsion, traumatic</text><text x="1000" y="420" class="t-keyval">amputation</text><text x="1000" y="450" class="t-keylbl">e.g.:</text><text x="1045" y="450" class="t-keyval">Limb caught in</text><text x="1000" y="470" class="t-keyval">machinery, RTA shearing</text><circle class="ic" cx="1260" cy="258" r="14"/><text class="t-info" x="1260" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lac-tear"><rect class="body-white" x="1300" y="240" width="240" height="240" rx="14"/><path d="M 1314,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 1300 V 254 A 14,14 0 0 1 1314,240 Z" fill="url(#gPurple)"/><text x="1310" y="278" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">5. TEAR</text><text x="1310" y="328" class="t-keylbl">Mechanism:</text><text x="1310" y="350" class="t-keyval">Irregular pointed</text><text x="1310" y="370" class="t-keyval">object pierces +</text><text x="1310" y="390" class="t-keyval">drags skin</text><text x="1310" y="420" class="t-keylbl">e.g.:</text><text x="1355" y="420" class="t-keyval">Door hinge,</text><text x="1310" y="440" class="t-keyval">animal horn,</text><text x="1310" y="460" class="t-keyval">broken glass</text><circle class="ic" cx="1520" cy="258" r="14"/><text class="t-info" x="1520" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lac-features"><rect x="60" y="510" width="900" height="370" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="510" y="552" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">📋 Cardinal Features of Laceration</text><text x="90" y="600" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">• <strong>Margins:</strong> IRREGULAR, contused, abraded, swollen</text><text x="90" y="628" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">• <strong>Tissue bridges</strong> across floor (vessels, nerves, fibres) — <strong>★ KEY DD vs INCISED</strong></text><text x="90" y="656" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">• <strong>Hair bulbs</strong> at margins INTACT (crushed not cut)</text><text x="90" y="684" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">• <strong>Bleeding:</strong> usually LESS than incised (crushed vessels retract + thrombose)</text><text x="90" y="712" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">• <strong>Depth:</strong> may reach bone; often has bruised base</text><text x="90" y="740" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">• <strong>Shape:</strong> variable — Y, L, stellate, linear</text><text x="90" y="768" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">• <strong>Foreign bodies</strong> commonly in wound (grit, hair, fabric)</text><text x="90" y="796" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">• <strong>Healing:</strong> by SECONDARY intention — leaves a SCAR</text><text x="90" y="833" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="rgba(255,255,255,0.75)">★ Tissue bridges + irregular margins + bruising = laceration, even if it superficially "looks incised" (split laceration).</text><circle class="ic" cx="940" cy="528" r="14"/><text class="t-info" x="940" y="534" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lac-medicolegal"><rect x="980" y="510" width="560" height="370" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="552" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">⚖️ Medicolegal Importance</text><text x="1000" y="600" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• Indicates BLUNT force assault / accident</text><text x="1000" y="628" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• Site &amp; pattern → reconstruct nature of blow</text><text x="1000" y="656" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• Scalp lacerations — common in homicidal blunt</text><text x="1000" y="684" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">  trauma (skull underlying = "split lac"; mimics incised)</text><text x="1000" y="712" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• Underlying fracture / visceral injury common</text><text x="1000" y="740" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• Trace evidence collection — foreign material</text><text x="1000" y="768" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• Section: BNS 117/118 if grievous / dangerous weapon</text><text x="1000" y="805" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="rgba(255,255,255,0.75)">⚠️ Always send X-ray request if laceration over bone (fracture often missed).</text><circle class="ic" cx="1520" cy="528" r="14"/><text class="t-info" x="1520" y="534" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="900" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="938" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Cardinal sign of laceration = TISSUE BRIDGES across the floor + irregular bruised margins</text>

<rect x="60" y="980" width="1480" height="60" rx="10" fill="url(#gGrey)"/><text x="800" y="1018" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">⚠️ "Split laceration" (scalp / eyebrow / shin) looks incised — but has tissue bridges &amp; crushed hair bulbs → see DT-2</text>
</svg>`;

const SVG_MI05 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Incised Wound — Features &amp; Medicolegal Importance</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Clean cut by sharp edge · length &gt; depth · margins clean · no tissue bridges</text>

<g data-node-id="incised-definition"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🔪 INCISED WOUND (Slash / Cut)</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= a clean cut produced by drawing a sharp-edged object (knife, blade, glass, razor) across the skin. Wound is LONGER than DEEPER. Margins are clean, well-defined, NO tissue bridges.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="incised-margins"><rect class="body-white" x="60" y="240" width="490" height="280" rx="14"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">✂️ 1. Margins</text><text x="80" y="340" class="t-keylbl">Edges:</text><text x="150" y="340" class="t-keyval">CLEAN, sharp, well-defined</text><text x="80" y="370" class="t-keylbl">Bruising:</text><text x="170" y="370" class="t-keyval">ABSENT (no surrounding contusion)</text><text x="80" y="400" class="t-keylbl">Abrasion:</text><text x="175" y="400" class="t-keyval">ABSENT around margins</text><text x="80" y="430" class="t-keylbl">Hair:</text><text x="130" y="430" class="t-keyval">CUT (not crushed) at edges</text><text x="80" y="460" class="t-keylbl">Tissue bridges:</text><text x="240" y="460" class="t-keyval">NONE — vessels, nerves all cleanly cut</text><text x="80" y="490" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">These features are the DD vs laceration (DT-2).</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="incised-dimensions"><rect class="body-white" x="570" y="240" width="490" height="280" rx="14"/><path d="M 584,240 H 1046 A 14,14 0 0 1 1060,254 V 305 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gGreen)"/><text x="590" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">📏 2. Dimensions</text><text x="590" y="340" class="t-keylbl">Length:</text><text x="660" y="340" class="t-keyval">Always &gt; depth · &gt; width</text><text x="590" y="370" class="t-keylbl">Depth:</text><text x="650" y="370" class="t-keyval">Limited (skin + subcut.)</text><text x="590" y="400" class="t-keylbl">Width:</text><text x="650" y="400" class="t-keyval">Gapes due to elastic skin recoil</text><text x="590" y="430" class="t-keylbl">Direction:</text><text x="680" y="430" class="t-keyval">Tailing at one end (drag-off)</text><text x="590" y="460" class="t-keylbl">Skin tension:</text><text x="720" y="460" class="t-keyval">Wound gapes more when</text><text x="590" y="480" class="t-keyval">perpendicular to Langer\'s lines</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="incised-bleeding"><rect class="body-white" x="1080" y="240" width="460" height="280" rx="14"/><path d="M 1094,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 1080 V 254 A 14,14 0 0 1 1094,240 Z" fill="url(#gRed)"/><text x="1090" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🩸 3. Bleeding</text><text x="1090" y="340" class="t-keylbl">Severity:</text><text x="1180" y="340" class="t-keyval">PROFUSE — more than</text><text x="1090" y="360" class="t-keyval">in laceration of same size</text><text x="1090" y="395" class="t-keylbl">Reason:</text><text x="1180" y="395" class="t-keyval">Vessels CLEANLY CUT</text><text x="1090" y="415" class="t-keyval">don\'t retract / thrombose</text><text x="1090" y="450" class="t-keylbl">Risk:</text><text x="1145" y="450" class="t-keyval">Major artery cut →</text><text x="1090" y="470" class="t-keyval">haemorrhagic shock</text><text x="1090" y="495" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Common cause of death in slash wounds.</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="incised-tailing"><rect class="body-white" x="60" y="550" width="490" height="280" rx="14"/><path d="M 74,550 H 536 A 14,14 0 0 1 550,564 V 615 H 60 V 564 A 14,14 0 0 1 74,550 Z" fill="url(#gOrange)"/><text x="80" y="595" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">↗️ 4. Tailing — Direction</text><text x="80" y="650" class="t-keyval">As the blade is drawn across &amp; lifted off, the</text><text x="80" y="672" class="t-keyval">trailing end becomes shallow and tapers — the</text><text x="80" y="694" class="t-keyval"><strong>TAIL (drag-off)</strong>.</text><text x="80" y="730" class="t-keylbl">Direction of cut:</text><text x="240" y="730" class="t-keyval">DEEP end → SHALLOW (tail) end</text><text x="80" y="762" class="t-keylbl">Importance:</text><text x="200" y="762" class="t-keyval">Reconstructs handedness +</text><text x="80" y="782" class="t-keyval">position of assailant</text><text x="80" y="810" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">e.g. cut throat — right-handed attacker from behind: L → R, downward.</text><circle class="ic" cx="540" cy="568" r="14"/><text class="t-info" x="540" y="574" text-anchor="middle">ⓘ</text></g>

<g data-node-id="incised-hesitation"><rect class="body-white" x="570" y="550" width="490" height="280" rx="14"/><path d="M 584,550 H 1046 A 14,14 0 0 1 1060,564 V 615 H 570 V 564 A 14,14 0 0 1 584,550 Z" fill="url(#gPurple)"/><text x="590" y="595" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">😔 5. Hesitation Cuts (Tentative)</text><text x="590" y="650" class="t-keyval">Small, multiple, SUPERFICIAL parallel cuts</text><text x="590" y="672" class="t-keyval">alongside a main deep cut.</text><text x="590" y="705" class="t-keylbl">Site:</text><text x="640" y="705" class="t-keyval">Wrist, neck (cut throat), antecubital</text><text x="590" y="735" class="t-keylbl">Significance:</text><text x="720" y="735" class="t-keyval">PATHOGNOMONIC of</text><text x="590" y="755" class="t-keyval">SUICIDE attempts</text><text x="590" y="785" class="t-keylbl">Mechanism:</text><text x="710" y="785" class="t-keyval">Victim "tests" the cut</text><text x="590" y="805" class="t-keyval">before committing — pain/fear</text><circle class="ic" cx="1050" cy="568" r="14"/><text class="t-info" x="1050" y="574" text-anchor="middle">ⓘ</text></g>

<g data-node-id="incised-medicolegal"><rect x="1080" y="550" width="460" height="280" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1310" y="595" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">⚖️ Medicolegal Importance</text><text x="1090" y="635" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Hesitation cuts → SUICIDE attempt</text><text x="1090" y="660" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• No hesitation + deep → HOMICIDE</text><text x="1090" y="685" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Defence wounds on hands/forearms</text><text x="1090" y="710" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">  → conscious resistance (MI-08)</text><text x="1090" y="735" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Tailing → direction of stroke</text><text x="1090" y="760" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• BNS 117/118 — grievous / dangerous</text><text x="1090" y="785" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Vital reaction → AM vs PM</text><circle class="ic" cx="1520" cy="568" r="14"/><text class="t-info" x="1520" y="574" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="850" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="888" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Incised = clean margins · NO bridges · length &gt; depth · hesitation cuts = suicide</text>

<rect x="60" y="930" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="968" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🧠 Mnemonic — "Clean Cuts Drain Profusely" — Clean margins · Cuts to depth limited · Drain (bleed) profusely</text>
</svg>`;

const SVG_MI06 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Stab &amp; Punctured Wounds — Features</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Sharp-pointed object thrust into the body · depth &gt; length · shape reveals blade type</text>

<g data-node-id="stab-definition"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🗡️ STAB / PUNCTURED WOUND</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= a wound produced when a pointed object is thrust into the body. DEPTH &gt; length / width. Surface wound is small but deep tract may damage vital structures. Distinguish from incised wound (length &gt; depth).</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="stab-types"><rect class="body-white" x="60" y="240" width="730" height="280" rx="14"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">📂 Types by Tract</text><text x="80" y="345" class="t-keylbl">Penetrating:</text><text x="220" y="345" class="t-keyval">Blade enters body cavity but does NOT exit</text><text x="100" y="375" class="t-keyval">(e.g., knife in chest stops in lung)</text><text x="80" y="410" class="t-keylbl">Perforating:</text><text x="210" y="410" class="t-keyval">Blade passes THROUGH a structure with</text><text x="100" y="430" class="t-keyval">entry + exit (e.g., through-and-through chest)</text><text x="80" y="465" class="t-keylbl">Punctured:</text><text x="200" y="465" class="t-keyval">Small surface · deep, narrow tract</text><text x="100" y="485" class="t-keyval">(e.g., needle, ice-pick, nail)</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="stab-margins"><rect class="body-white" x="810" y="240" width="730" height="280" rx="14"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gGreen)"/><text x="840" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🔍 Shape vs Blade Type</text><text x="840" y="345" class="t-keylbl">Single-edged knife:</text><text x="1030" y="345" class="t-keyval"><strong>BOAT / WEDGE</strong> shape —</text><text x="860" y="375" class="t-keyval">one sharp end (cutting edge) + one blunt end (back)</text><text x="840" y="410" class="t-keylbl">Double-edged knife:</text><text x="1040" y="410" class="t-keyval"><strong>SPINDLE / OVAL</strong> —</text><text x="860" y="430" class="t-keyval">both ends sharp / pointed (e.g., dagger)</text><text x="840" y="465" class="t-keylbl">Round / needle:</text><text x="990" y="465" class="t-keyval">CIRCULAR puncture</text><text x="840" y="495" class="t-keylbl">Cruciform / triangular:</text><text x="1060" y="495" class="t-keyval">Multi-edged blade prints same shape</text><circle class="ic" cx="1520" cy="258" r="14"/><text class="t-info" x="1520" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="stab-dimensions"><rect class="body-white" x="60" y="550" width="730" height="280" rx="14"/><path d="M 74,550 H 776 A 14,14 0 0 1 790,564 V 615 H 60 V 564 A 14,14 0 0 1 74,550 Z" fill="url(#gOrange)"/><text x="80" y="595" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">📏 Dimensions → Weapon</text><text x="80" y="655" class="t-keylbl">Length of wound:</text><text x="260" y="655" class="t-keyval">≈ WIDTH of blade at insertion level</text><text x="100" y="675" class="t-keyval">(skin elastic recoil may make it slightly smaller)</text><text x="80" y="710" class="t-keylbl">Depth of tract:</text><text x="230" y="710" class="t-keyval">≈ LENGTH of blade (max insertion)</text><text x="100" y="730" class="t-keyval">— but can be exceeded if soft tissue compresses</text><text x="80" y="765" class="t-keylbl">Width of wound:</text><text x="260" y="765" class="t-keyval">Minimal (skin closes on withdrawal)</text><text x="80" y="800" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">★ Skin can be compressed; tract depth may exceed blade length (esp. abdomen, breast).</text><circle class="ic" cx="770" cy="568" r="14"/><text class="t-info" x="770" y="574" text-anchor="middle">ⓘ</text></g>

<g data-node-id="stab-tract"><rect class="body-white" x="810" y="550" width="430" height="280" rx="14"/><path d="M 824,550 H 1226 A 14,14 0 0 1 1240,564 V 615 H 810 V 564 A 14,14 0 0 1 824,550 Z" fill="url(#gRed)"/><text x="830" y="595" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🩻 Tract — Internal</text><text x="830" y="650" class="t-keylbl">Direction:</text><text x="930" y="650" class="t-keyval">Path angle, layers</text><text x="830" y="670" class="t-keyval">pierced — reveals stab direction</text><text x="830" y="705" class="t-keylbl">Vessels / organs:</text><text x="1010" y="705" class="t-keyval">May injure heart,</text><text x="830" y="725" class="t-keyval">lung, liver, kidney, great vessels</text><text x="830" y="760" class="t-keylbl">Damage:</text><text x="920" y="760" class="t-keyval">Internal haemorrhage,</text><text x="830" y="780" class="t-keyval">pneumothorax, haemothorax</text><circle class="ic" cx="1230" cy="568" r="14"/><text class="t-info" x="1230" y="574" text-anchor="middle">ⓘ</text></g>

<g data-node-id="stab-medicolegal"><rect x="1260" y="550" width="280" height="280" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1400" y="595" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white" text-anchor="middle">⚖️ Medicolegal</text><text x="1270" y="635" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">• Mostly HOMICIDAL</text><text x="1270" y="660" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">• Rarely suicidal (chest)</text><text x="1270" y="685" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">• Single fatal stab</text><text x="1270" y="710" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">  most common</text><text x="1270" y="735" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">• Defence wounds</text><text x="1270" y="760" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">• BNS 118 dangerous</text><text x="1270" y="785" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">  weapon / 117 grievous</text><circle class="ic" cx="1520" cy="568" r="14"/><text class="t-info" x="1520" y="574" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="850" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="888" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Stab = depth &gt; length · single-edged = boat · double-edged = spindle · length ≈ blade width</text>

<rect x="60" y="930" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="968" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">⚠️ Tract DEPTH may EXCEED blade length (soft tissue compresses) — but never falls short of it</text>
</svg>`;

const SVG_MI07 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Chop Wound — Sharp + Heavy Hybrid</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Combines incised wound's sharp margins with laceration's depth &amp; bone involvement · almost always homicidal</text>

<g data-node-id="chop-definition"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🪓 CHOP WOUND</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= produced by a heavy weapon with a sharp cutting edge swung with great force. Hybrid wound: SHARP margins (like incised) + DEPTH &amp; BONE involvement (like laceration). Often deep enough to fracture skull or amputate limb.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="chop-weapons"><rect class="body-white" x="60" y="240" width="490" height="280" rx="14"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🛠️ Weapons</text><text x="80" y="345" class="t-keyval"><strong>• Axe</strong> — wood-cutter, butcher\'s axe</text><text x="80" y="378" class="t-keyval"><strong>• Machete / chopper</strong> (Hindi: gandasa, kulhari)</text><text x="80" y="411" class="t-keyval"><strong>• Sword</strong> — straight or curved blade</text><text x="80" y="444" class="t-keyval"><strong>• Sickle</strong> — curved agricultural blade</text><text x="80" y="477" class="t-keyval"><strong>• Heavy knife / cleaver</strong></text><text x="80" y="510" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">Common Indian context: farm + caste violence weapons.</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="chop-features"><rect class="body-white" x="570" y="240" width="970" height="280" rx="14"/><path d="M 584,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gOrange)"/><text x="590" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🔍 Cardinal Features</text><text x="590" y="345" class="t-keylbl">Margins:</text><text x="680" y="345" class="t-keyval">Relatively CLEAN at superficial level (sharp edge) — but may be slightly bruised / contused</text><text x="590" y="378" class="t-keylbl">Depth:</text><text x="660" y="378" class="t-keyval">DEEP — extends to deeper tissue, often involves muscle, bone</text><text x="590" y="411" class="t-keylbl">Bone:</text><text x="650" y="411" class="t-keyval">CHARACTERISTIC — clean linear cut on bone with chip / wedge fracture nearby</text><text x="590" y="444" class="t-keylbl">Width:</text><text x="660" y="444" class="t-keyval">Gaping; tissue may be partially severed (limbs, fingers, scalp flaps)</text><text x="590" y="477" class="t-keylbl">Bleeding:</text><text x="680" y="477" class="t-keyval">PROFUSE — severs arteries; haemorrhagic shock common cause of death</text><text x="590" y="510" class="t-keylbl">Hair bulbs:</text><text x="700" y="510" class="t-keyval">May be CUT (like incised) at the margins — DD from split laceration</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="chop-sites"><rect class="body-white" x="60" y="550" width="490" height="280" rx="14"/><path d="M 74,550 H 536 A 14,14 0 0 1 550,564 V 615 H 60 V 564 A 14,14 0 0 1 74,550 Z" fill="url(#gGreen)"/><text x="80" y="595" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">📍 Typical Sites</text><text x="80" y="655" class="t-keyval"><strong>• HEAD &amp; NECK</strong> — most common · skull fracture</text><text x="80" y="688" class="t-keyval"><strong>• Hands &amp; forearms</strong> — defence wounds (active)</text><text x="80" y="721" class="t-keyval"><strong>• Shoulders / clavicle</strong> — common attack site</text><text x="80" y="754" class="t-keyval"><strong>• Limbs</strong> — traumatic amputation possible</text><text x="80" y="787" class="t-keyval"><strong>• Anterior trunk</strong> — chest / abdomen wounds</text><circle class="ic" cx="540" cy="568" r="14"/><text class="t-info" x="540" y="574" text-anchor="middle">ⓘ</text></g>

<g data-node-id="chop-medicolegal"><rect x="570" y="550" width="970" height="280" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1055" y="595" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">⚖️ Medicolegal Importance</text><text x="590" y="640" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>Manner of death:</strong> almost always HOMICIDAL — heavy weapon + sustained swing impossible to self-inflict</text><text x="590" y="668" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>Single fatal chop</strong> common (esp. skull) — death from intracranial haemorrhage / brain damage</text><text x="590" y="696" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>Defence wounds</strong> on forearms / hands frequent — conscious resisting victim</text><text x="590" y="724" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>Bone marks</strong> ID weapon edge — preserve bone specimen for tool-mark analysis</text><text x="590" y="752" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>Multiple chops</strong> often present — frenzied attack, group assault</text><text x="590" y="780" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• <strong>BNS sections:</strong> 117 (grievous) / 118 (dangerous weapon) / 103 (murder) — death usually inevitable</text><text x="590" y="808" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="rgba(255,255,255,0.75)">★ Chop is the textbook "sharp + heavy" hybrid — quoted in QBank LAQ (chop wound).</text><circle class="ic" cx="1530" cy="568" r="14"/><text class="t-info" x="1530" y="574" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="860" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="898" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Chop = sharp + heavy weapon · margins clean · bone cut + chip fracture · almost always HOMICIDAL</text>

<rect x="60" y="940" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="978" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🧠 Common Indian weapons — axe (kulhari) · machete (gandasa) · sickle · sword (talwar)</text>
</svg>`;

const SVG_MI08 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Defence Wounds — Active &amp; Passive</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Injuries sustained by the victim trying to ward off the attack · prove conscious resistance · always antemortem</text>

<g data-node-id="defence-definition"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🛡️ DEFENCE WOUNDS</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= injuries on the body of a victim sustained while trying to ward off an attack. Prove that the victim was CONSCIOUS, RESISTING, and ALIVE at the time of assault. Always ANTEMORTEM. <strong>[NEET-PG 2022 PYQ]</strong></text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="defence-active"><rect class="body-white" x="60" y="240" width="730" height="300" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">✋ ACTIVE Defence Wounds</text><text x="80" y="345" class="t-keylbl">Mechanism:</text><text x="220" y="345" class="t-keyval">Victim GRASPS the weapon attempting</text><text x="100" y="365" class="t-keyval">to disarm assailant</text><text x="80" y="400" class="t-keylbl">Sites:</text><text x="160" y="400" class="t-keyval"><strong>PALM, FINGERS, palmar surface of hands</strong></text><text x="80" y="430" class="t-keylbl">Type of wound:</text><text x="250" y="430" class="t-keyval">INCISED or chop — clean cuts</text><text x="100" y="450" class="t-keyval">across palm / between fingers</text><text x="80" y="485" class="t-keylbl">Classic:</text><text x="170" y="485" class="t-keyval">Knife-handle-grasp wounds on palm</text><text x="80" y="515" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="#6B7283">★ Active defence = palmar surface · victim attacked with sharp weapon</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="defence-passive"><rect class="body-white" x="810" y="240" width="730" height="300" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gRed)"/><text x="830" y="285" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🙅 PASSIVE Defence Wounds</text><text x="830" y="345" class="t-keylbl">Mechanism:</text><text x="970" y="345" class="t-keyval">Victim RAISES forearm to SHIELD</text><text x="850" y="365" class="t-keyval">head / face (instinct)</text><text x="830" y="400" class="t-keylbl">Sites:</text><text x="910" y="400" class="t-keyval"><strong>EXTENSOR / dorsal surface of forearm,</strong></text><text x="850" y="420" class="t-keyval"><strong>DORSUM of hand, ulnar border</strong></text><text x="830" y="450" class="t-keylbl">Type of wound:</text><text x="1000" y="450" class="t-keyval">Cuts, bruises, lacerations or</text><text x="850" y="470" class="t-keyval">fractures (ulna — "nightstick fracture")</text><text x="830" y="500" class="t-keylbl">Classic:</text><text x="920" y="500" class="t-keyval">Bruise + ulnar # on outer forearm</text><text x="830" y="525" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="#6B7283">★ Passive defence = extensor surface · victim warding off blunt or sharp blow</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="defence-sites"><rect x="60" y="570" width="900" height="320" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="510" y="612" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">📍 Site Summary — Active vs Passive</text><text x="90" y="660" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>ACTIVE (palmar):</strong></text><text x="90" y="685" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• Palm — sharp transverse incised cuts</text><text x="90" y="710" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• Web spaces between fingers — clean cuts</text><text x="90" y="735" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• Volar wrist — when grabbing assailant\'s arm</text><text x="90" y="775" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>PASSIVE (extensor):</strong></text><text x="90" y="800" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• Dorsum of forearm — bruises, cuts, fractures (ulna)</text><text x="90" y="825" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• Dorsum of hand — chop/cut marks</text><text x="90" y="850" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">• Outer aspect of upper arm, shoulder, back</text><circle class="ic" cx="940" cy="588" r="14"/><text class="t-info" x="940" y="594" text-anchor="middle">ⓘ</text></g>

<g data-node-id="defence-medicolegal"><rect x="980" y="570" width="560" height="320" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="612" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">⚖️ Medicolegal Importance</text><text x="1000" y="660" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Prove victim was CONSCIOUS &amp; RESISTING</text><text x="1000" y="685" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Prove HOMICIDAL nature of incident</text><text x="1000" y="710" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Rule out SUICIDE in cut-throat etc.</text><text x="1000" y="735" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Always ANTEMORTEM (active resistance)</text><text x="1000" y="760" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Suggest victim was not surprised from</text><text x="1000" y="780" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">  behind / not unconscious at start</text><text x="1000" y="805" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Trace evidence on hands — DNA, fibres</text><text x="1000" y="830" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• ABSENCE = surprise, instant fatal blow,</text><text x="1000" y="850" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">  intoxication, restraint, or earlier asphyxia</text><circle class="ic" cx="1520" cy="588" r="14"/><text class="t-info" x="1520" y="594" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="910" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="948" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Defence wounds = PROOF of conscious resistance + ANTEMORTEM · Active (palmar) · Passive (extensor)</text>

<rect x="60" y="990" width="1480" height="50" rx="10" fill="url(#gBlue)"/><text x="800" y="1022" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">🧠 Mnemonic — "GraB or ShieLD" → Grab (palm/active) · Shield (forearm extensor/passive)</text>
</svg>`;

const SVG_MI09 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Cut Throat — Suicidal vs Homicidal</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Differentiation by 6 cardinal features · direction · hesitation cuts · defence wounds · depth uniformity</text>

<g data-node-id="cut-throat-definition"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🔪 CUT THROAT</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= incised wound of the neck. May be suicidal, homicidal, or accidental. Cause of death: haemorrhage (vessel injury), air embolism (jugular cut), asphyxia (trachea cut), or shock. Differentiation rests on 6 cardinal features.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ct-suicidal"><rect class="body-white" x="60" y="240" width="730" height="380" rx="14" stroke="#3D8B5B" stroke-width="3"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gGreen)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🟢 SUICIDAL Cut Throat</text><text x="80" y="345" class="t-keylbl">1. Site:</text><text x="155" y="345" class="t-keyval">HIGH on the neck (above thyroid cartilage)</text><text x="80" y="375" class="t-keylbl">2. Direction:</text><text x="210" y="375" class="t-keyval">L to R + above-downward (in right-handed)</text><text x="80" y="405" class="t-keylbl">3. Depth:</text><text x="170" y="405" class="t-keyval">DEEP at start (L), SHALLOW at end (R) → tailing</text><text x="80" y="435" class="t-keylbl">4. Hesitation cuts:</text><text x="270" y="435" class="t-keyval">PRESENT — multiple shallow parallel</text><text x="100" y="455" class="t-keyval">"tentative" cuts above/below the main wound</text><text x="80" y="485" class="t-keylbl">5. Defence wounds:</text><text x="280" y="485" class="t-keyval">ABSENT</text><text x="80" y="515" class="t-keylbl">6. Weapon:</text><text x="190" y="515" class="t-keyval">Found near body in victim\'s hand (sometimes</text><text x="100" y="535" class="t-keyval">cadaveric spasm); blade-edge facing victim</text><text x="80" y="565" class="t-keylbl">Clothing:</text><text x="170" y="565" class="t-keyval">May be partly removed / collar loosened</text><text x="80" y="595" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">Common in: depression, psychosis, intoxication.</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ct-homicidal"><rect class="body-white" x="810" y="240" width="730" height="380" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gRed)"/><text x="830" y="285" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🔴 HOMICIDAL Cut Throat</text><text x="830" y="345" class="t-keylbl">1. Site:</text><text x="905" y="345" class="t-keyval">LOW on neck (at / below thyroid cartilage)</text><text x="830" y="375" class="t-keylbl">2. Direction:</text><text x="960" y="375" class="t-keyval">Horizontal across neck; or L→R if attacker</text><text x="850" y="395" class="t-keyval">behind victim &amp; right-handed</text><text x="830" y="425" class="t-keylbl">3. Depth:</text><text x="920" y="425" class="t-keyval">DEEP &amp; uniform · single firm cut</text><text x="830" y="455" class="t-keylbl">4. Hesitation cuts:</text><text x="1030" y="455" class="t-keyval">ABSENT</text><text x="830" y="485" class="t-keylbl">5. Defence wounds:</text><text x="1040" y="485" class="t-keyval">PRESENT — palms, fingers,</text><text x="850" y="505" class="t-keyval">forearms (★ pathognomonic clue)</text><text x="830" y="535" class="t-keylbl">6. Weapon:</text><text x="940" y="535" class="t-keyval">NOT found at scene · or thrown</text><text x="850" y="555" class="t-keyval">far · sometimes inconsistent with injury</text><text x="830" y="585" class="t-keylbl">Clothing:</text><text x="920" y="585" class="t-keyval">May show struggle marks, disarray</text><text x="830" y="610" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">Often combined with stab wounds, multiple injuries.</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ct-anatomy"><rect x="60" y="650" width="900" height="240" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="510" y="690" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">🩻 Structures Cut (Layer-wise)</text><text x="90" y="730" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Superficial → deep:</strong> skin → platysma → superficial fascia → sternomastoid → strap muscles</text><text x="90" y="755" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Vessels:</strong> external jugular vein → anterior jugular → common carotid + internal jugular (deep cut)</text><text x="90" y="780" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Airway:</strong> trachea / larynx — air embolism, aspirated blood, asphyxia</text><text x="90" y="805" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Nerves:</strong> vagus, recurrent laryngeal (hoarseness if survives), cervical sympathetic</text><text x="90" y="830" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Cause of death:</strong> haemorrhage (most) · air embolism (jugular cut) · aspiration / asphyxia · shock</text><text x="90" y="868" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="rgba(255,255,255,0.75)">Always assess depth on autopsy — even apparently "superficial" cuts may sever great vessels.</text><circle class="ic" cx="940" cy="668" r="14"/><text class="t-info" x="940" y="674" text-anchor="middle">ⓘ</text></g>

<g data-node-id="ct-mirror"><rect x="980" y="650" width="560" height="240" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="1260" y="690" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">🪞 The "Mirror" Test</text><text x="1000" y="730" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">Suicidal cut throat by a right-handed victim:</text><text x="1000" y="755" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Often done facing a mirror</text><text x="1000" y="780" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Head tilted back; chin up</text><text x="1000" y="805" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Cut runs from L (deep) → R (shallow)</text><text x="1000" y="830" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• Blood splash patterns confirm seated</text><text x="1000" y="850" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">  posture (bathroom basin classic)</text><circle class="ic" cx="1520" cy="668" r="14"/><text class="t-info" x="1520" y="674" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="910" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="948" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Suicidal = HIGH · L→R · HESITATION cuts · NO defence wounds · weapon in hand</text>

<rect x="60" y="990" width="1480" height="50" rx="10" fill="url(#gRed)"/><text x="800" y="1022" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⚠️ Homicidal = LOW · uniform deep · DEFENCE wounds present · weapon absent / inconsistent</text>
</svg>`;

const SVG_MI10 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Antemortem vs Postmortem Wounds + Healing Timeline</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Vital reaction = the litmus test · cellular + chemical + histological evidence · healing stages help dating</text>

<g data-node-id="am-pm-definition"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">⏱️ ANTEMORTEM vs POSTMORTEM WOUND</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Antemortem = inflicted while ALIVE → shows VITAL REACTION (circulatory + cellular response). Postmortem = after death → no vital reaction. <strong>[NEET-PG 2016: best distinguished by absence of erythema &amp; cellular changes.]</strong></text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="vital-erythema"><rect class="body-white" x="60" y="240" width="490" height="280" rx="14"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gRed)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🔴 1. Erythema (Red zone)</text><text x="80" y="345" class="t-keylbl">AM:</text><text x="120" y="345" class="t-keyval">Red zone of vasodilation +</text><text x="80" y="365" class="t-keyval">inflammation around wound edges</text><text x="80" y="400" class="t-keylbl">PM:</text><text x="120" y="400" class="t-keyval">ABSENT — no vital response</text><text x="80" y="435" class="t-keylbl">Mechanism:</text><text x="220" y="435" class="t-keyval">Active arteriolar dilation</text><text x="100" y="455" class="t-keyval">+ exudate (only if alive)</text><text x="80" y="490" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="#6B7283">Classic NEET-PG 2016 answer — erythema/cellular changes absent in PM.</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="vital-bleeding"><rect class="body-white" x="570" y="240" width="490" height="280" rx="14"/><path d="M 584,240 H 1046 A 14,14 0 0 1 1060,254 V 305 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gBlue)"/><text x="590" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🩸 2. Bleeding &amp; Clotting</text><text x="590" y="345" class="t-keylbl">AM:</text><text x="630" y="345" class="t-keyval">PROFUSE arterial bleeding;</text><text x="610" y="365" class="t-keyval">blood CLOTS in &amp; around wound</text><text x="590" y="400" class="t-keylbl">PM:</text><text x="630" y="400" class="t-keyval">Sparse oozing; blood does NOT clot</text><text x="610" y="420" class="t-keyval">(no fibrinogen activation)</text><text x="590" y="455" class="t-keylbl">PM lividity in cut:</text><text x="780" y="455" class="t-keyval">Static blood drains</text><text x="610" y="475" class="t-keyval">by gravity — DD from active flow</text><text x="590" y="505" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">"Spurting" arterial bleeding = unquestionably AM.</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="vital-cellular"><rect class="body-white" x="1080" y="240" width="460" height="280" rx="14"/><path d="M 1094,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 1080 V 254 A 14,14 0 0 1 1094,240 Z" fill="url(#gOrange)"/><text x="1090" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🦠 3. Cellular Response</text><text x="1090" y="340" class="t-keylbl">0-6 h:</text><text x="1160" y="340" class="t-keyval">Neutrophil infiltrate</text><text x="1090" y="370" class="t-keylbl">12-24 h:</text><text x="1180" y="370" class="t-keyval">Macrophages</text><text x="1090" y="400" class="t-keylbl">24-72 h:</text><text x="1180" y="400" class="t-keyval">Fibroblast proliferation</text><text x="1090" y="430" class="t-keylbl">3-5 d:</text><text x="1155" y="430" class="t-keyval">Capillary buds</text><text x="1090" y="460" class="t-keylbl">5-10 d:</text><text x="1170" y="460" class="t-keyval">Collagen deposition</text><text x="1090" y="490" class="t-keylbl">&gt; 2 wk:</text><text x="1170" y="490" class="t-keyval">Scar maturation</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="vital-biochem"><rect class="body-white" x="60" y="550" width="730" height="280" rx="14"/><path d="M 74,550 H 776 A 14,14 0 0 1 790,564 V 615 H 60 V 564 A 14,14 0 0 1 74,550 Z" fill="url(#gPurple)"/><text x="80" y="595" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🧪 4. Biochemical Markers (Vital Reaction)</text><text x="80" y="655" class="t-keylbl">Histamine:</text><text x="190" y="655" class="t-keyval">↑ within minutes of injury (AM marker)</text><text x="80" y="685" class="t-keylbl">Serotonin:</text><text x="185" y="685" class="t-keyval">↑ in margins of AM wound</text><text x="80" y="715" class="t-keylbl">Free histamine &gt; 50 %:</text><text x="320" y="715" class="t-keyval">indicates vital reaction</text><text x="80" y="745" class="t-keylbl">ATP / Catecholamines:</text><text x="320" y="745" class="t-keyval">↑ in AM wound edges</text><text x="80" y="775" class="t-keylbl">Enzymes:</text><text x="180" y="775" class="t-keyval">Cathepsin D, aminopeptidase ↑ at edges</text><text x="80" y="805" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">These prove vital reaction biochemically even when histology is borderline.</text><circle class="ic" cx="770" cy="568" r="14"/><text class="t-info" x="770" y="574" text-anchor="middle">ⓘ</text></g>

<g data-node-id="wound-healing"><rect x="810" y="550" width="730" height="280" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="1175" y="595" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">⏰ Wound Healing Timeline (★)</text><text x="830" y="640" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>12-24 h:</strong> Clot · neutrophilic margins · slight redness</text><text x="830" y="665" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>2-3 d:</strong> Scab formed; macrophages predominate</text><text x="830" y="690" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>3-5 d:</strong> Granulation tissue · capillary buds · fibroblasts</text><text x="830" y="715" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>1 wk:</strong> Scab separating · epithelialisation starting</text><text x="830" y="740" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>2 wk:</strong> Pink, vascular soft scar</text><text x="830" y="765" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>1 month:</strong> Scar maturing — pale, firm</text><text x="830" y="790" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>3-6 months:</strong> Mature scar — white, atrophic</text><text x="830" y="820" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="rgba(255,255,255,0.75)">Abrasions heal without scar; lacerations &amp; incisions leave a scar.</text><circle class="ic" cx="1530" cy="568" r="14"/><text class="t-info" x="1530" y="574" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="850" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="888" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Vital reaction = erythema · clotted bleeding · cellular infiltrate · histamine/serotonin ↑ · scab formation</text>

<rect x="60" y="930" width="1480" height="60" rx="10" fill="url(#gBlue)"/><text x="800" y="968" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">⚠️ Best PM-vs-AM single sign = ABSENCE of erythema + cellular changes [NEET-PG 2016 verbatim PYQ]</text>
</svg>`;


const NODES = {
  'mi-injury-definition': { label: 'Injury — Statutory Definition', info: '<p><strong>Injury</strong> means "any harm whatever illegally caused to any person, in body, mind, reputation, or property." [<strong>BNS 116</strong>, ≡ <strong>IPC 44</strong>]</p><p><strong>Hurt</strong> = bodily pain, disease or infirmity caused to any person [<strong>BNS 114</strong>, ≡ <strong>IPC 319</strong>].</p><p><strong>Grievous hurt</strong> = 8 enumerated categories [<strong>BNS 116(2)</strong>, ≡ <strong>IPC 320</strong>]: emasculation, permanent privation of sight/hearing, privation of any limb/joint, impairing power of limb/joint, permanent disfiguration of head/face, fracture/dislocation of bone/tooth, hurt endangering life or causing severe bodily pain &gt;20 days/inability to follow ordinary pursuits, and (BNS additional) any hurt causing death by acid attack.</p><p>The legal framework underpins all mechanical injury cases — exam favourite is the 8-clause grievous-hurt list.</p>', tags: ['BNS 116', 'BNS 114 = IPC 319', '8 grievous clauses'] },
  'mi-blunt-group': { label: 'Blunt Force Injuries', info: '<p>Injuries produced by an object with NO sharp edge — fist, stick, stone, ground (fall), vehicle, brick, hammer. Force is delivered as crush + friction + stretch.</p><p><strong>Three wound types:</strong></p><ul><li><strong>Abrasion</strong> — superficial, epidermal (MI-02)</li><li><strong>Contusion (Bruise)</strong> — bleeding under intact skin (MI-03)</li><li><strong>Laceration</strong> — torn skin with bridges (MI-04)</li></ul><p><strong>Cardinal feature:</strong> IRREGULAR margins · surrounding bruising · crushed hair bulbs · tissue bridges (in lacs).</p>', tags: ['ACL — Abrasion · Contusion · Laceration'] },
  'mi-sharp-group': { label: 'Sharp Force Injuries', info: '<p>Injuries produced by objects with a sharp cutting edge or point — knife, razor, blade, glass, sword.</p><p><strong>Three wound types:</strong></p><ul><li><strong>Incised wound</strong> — length &gt; depth (MI-05)</li><li><strong>Stab / Punctured</strong> — depth &gt; length (MI-06)</li><li><strong>Chop wound</strong> — sharp + heavy hybrid (MI-07)</li></ul><p><strong>Cardinal feature:</strong> CLEAN margins · NO surrounding bruising · NO tissue bridges · profuse bleeding.</p><p><strong>Manner:</strong> Mostly homicidal; suicidal cut throat / wrist common.</p>', tags: ['ISC — Incised · Stab · Chop'] },
  'mi-firearm-group': { label: 'Firearm &amp; Blast Injuries', info: '<p>Injuries caused by projectiles from firearms (rifled or smooth-bore) or by the pressure wave + fragments of an explosive blast.</p><p><strong>Forensic priority:</strong></p><ul><li>Entry vs exit wound differentiation</li><li>Range estimation (contact, near, distant)</li><li>Weapon class identification (rifled vs shotgun)</li><li>Gunshot residue analysis</li></ul><p><strong>Manner:</strong> Mostly homicidal · suicidal (often contact) · accidental.</p><p><strong>Cross-reference:</strong> detailed in Ch 10 (Firearm and Bomb Blast Injuries).</p>', tags: ['See Ch 10'] },
  'mi-misc-group': { label: 'Miscellaneous Injuries', info: '<p>Non-mechanical or hybrid injuries treated under separate chapters:</p><ul><li><strong>Thermal</strong> — burns, scalds, frostbite, hyperthermia (Ch 14)</li><li><strong>Electrical</strong> — electric shock burns, lightning (Ch 14)</li><li><strong>Chemical</strong> — acid / alkali corrosive burns (Ch 34 toxicology)</li><li><strong>Radiation</strong> — X-ray, UV, nuclear</li><li><strong>Pressure (barotrauma)</strong> — caisson disease, blast lung</li></ul><p>These are mechanisms of energy transfer other than direct mechanical impact.</p>', tags: ['See Ch 14, Ch 34'] },

  'abrasion-definition': { label: 'Abrasion — Definition', info: '<p>An <strong>abrasion</strong> is a superficial wound involving the <strong>EPIDERMIS ONLY</strong> — it does not breach the dermis. Caused by friction or pressure of a rough or blunt object against the skin.</p><p><strong>Key consequences of epidermal-only depth:</strong></p><ul><li>Heals WITHOUT a scar (epidermis regenerates from basal layer)</li><li>Bleeding is minimal (capillary lymph + slight oozing only)</li><li>Easily missed if small / on hairy skin</li></ul>', tags: ['Epidermis only', 'No scar'] },
  'abrasion-scratch': { label: 'Scratch (Linear) Abrasion', info: '<p>A LINEAR, narrow abrasion produced by a pointed object (pin, nail, thorn, fingernail) drawn across the skin.</p><p><strong>Direction marker:</strong> Epidermal tags pile up at the <strong>FAR end</strong> (where the object lifts off) — this tells the direction of force.</p><p><strong>Classic example:</strong> Curved fingernail marks on the neck in throttling — usually 4 on one side + 1 thumb mark on the opposite side.</p>', tags: ['Linear', 'Tags pile at far end'] },
  'abrasion-graze': { label: 'Graze (Brush Burn) Abrasion', info: '<p>A broad, irregular abrasion produced when a <strong>rough surface is dragged across the skin</strong> — or skin is dragged across a rough surface.</p><p><strong>Classic scenario:</strong> Road traffic accident — skin scraped across tarmac shows broad parallel linear abrasions, dirt and grit embedded.</p><p><strong>Direction:</strong> The leading edge is sharp; tags + dirt pile at the far end indicating direction of relative motion.</p><p><strong>Sub-types include "brush burn"</strong> — rope/cable dragged across skin (e.g. ligature drag, vehicular skid).</p>', tags: ['Broad pattern', 'RTA classic'] },
  'abrasion-pressure': { label: 'Pressure Abrasion', info: '<p>Produced by <strong>sustained pressure</strong> of a relatively narrow object against the skin — without sliding movement.</p><p><strong>Classic examples:</strong></p><ul><li>Ligature marks of hanging / strangulation</li><li>Bite marks (curved pressure abrasions)</li><li>Fingernail marks in throttling (curved pressure type)</li></ul><p><strong>Appearance:</strong> Often <strong>parchmentised</strong> — dry, leathery, dark brown from drying of compressed dermis (the pressure squeezes blood out of capillaries → dehydration of skin).</p>', tags: ['Ligature / bite', 'Parchmentisation'] },
  'abrasion-patterned': { label: 'Patterned Abrasion', info: '<p>An abrasion that <strong>reproduces the shape of the causing agent</strong> on the skin. Highest forensic value — it can identify the weapon.</p><p><strong>Common patterns:</strong></p><ul><li>Tyre tread — RTA</li><li>Belt buckle — domestic assault</li><li>Teeth (bite mark) — assault / sexual offence</li><li>Shoe sole — kicking</li><li>Whip or cane — flogging</li></ul><p><strong>Always photograph with a scale</strong> — these become court evidence.</p>', tags: ['Highest evidentiary value'] },
  'abrasion-imprint': { label: 'Imprint (Contact) Abrasion', info: '<p>A sub-type of patterned abrasion produced by <strong>impact only — no sliding movement</strong>.</p><p>The object presses against skin briefly, transferring its pattern but without scraping.</p><p><strong>Classic:</strong> Radiator grille imprint on chest in pedestrian struck by car; rifle muzzle imprint in contact gunshot wound (Werkgartner sign — Ch 10).</p>', tags: ['Impact only — no slide'] },
  'abrasion-age': { label: 'Ageing of Abrasion — Colour Stages', info: '<p>Abrasions age through characteristic colour stages — useful for dating injuries:</p><ul><li><strong>Fresh (0-24 h):</strong> Bright red / pink with slight ooze of lymph + blood</li><li><strong>12-24 h:</strong> Reddish-brown — scab begins to form</li><li><strong>2-3 days:</strong> Reddish-brown dark scab, firmly adherent</li><li><strong>4-7 days:</strong> Dark brown / black scab, dry, slightly raised</li><li><strong>After 7 days:</strong> Scab separates from the edges first, falls off</li><li><strong>10-14 days:</strong> Healed — depigmented pink area, NO scar</li></ul><p><strong>Caveat:</strong> Healing is faster in children, slower in elderly / diabetics / malnourished.</p>', tags: ['Heals 10-14 days', 'No scar'] },
  'abrasion-medicolegal': { label: 'Abrasion — Medicolegal Importance', info: '<p>Abrasions are forensically valuable out of proportion to their clinical triviality:</p><ul><li><strong>Site</strong> — indicates point of impact / contact</li><li><strong>Pattern</strong> — may identify the weapon (tyre, belt, teeth, shoe, ligature)</li><li><strong>Direction</strong> — tag pile-up at far end gives direction of force</li><li><strong>Vital reaction</strong> — bright red colour + lymph ooze = antemortem</li><li><strong>Age</strong> — colour stages help date the injury</li><li><strong>Crime reconstruction</strong> — fingernail abrasions on neck = throttling struggle; defence abrasions on forearm</li></ul><p><strong>Statutory peg:</strong> Voluntarily causing hurt — <strong>BNS 115 / IPC 321</strong>.</p>', tags: ['Highest forensic yield', 'BNS 115'] },

  'contusion-definition': { label: 'Contusion (Bruise) — Definition', info: '<p>A <strong>contusion</strong> (= bruise) is the effusion of blood into tissues from rupture of small blood vessels (capillaries, venules) caused by blunt force, with the <strong>SKIN remaining INTACT</strong>.</p><p>It develops and resolves through a sequence of characteristic colour changes, making it dateable.</p>', tags: ['Intact skin', 'Dateable by colour'] },
  'contusion-intradermal': { label: 'Intradermal Contusion', info: '<p>Bleeding into the DERMIS only.</p><p><strong>Features:</strong></p><ul><li>Sharp margins (depth-limited)</li><li>Often <strong>PATTERNED</strong> — reproduces the shape of the weapon</li></ul><p><strong>Forensic value:</strong> May reproduce the pattern of the causing agent (whip, belt, palm, knuckle, tyre tread), helping identify the weapon.</p>', tags: ['Sharp margins', 'Patterned'] },
  'contusion-subcutaneous': { label: 'Subcutaneous Contusion', info: '<p>Bleeding into the subcutaneous fat. The <strong>most common clinical type</strong>.</p><p><strong>Features:</strong></p><ul><li>Diffuse margins (blood spreads in loose subcutaneous tissue)</li><li>May migrate by gravity (see ectopic bruise)</li></ul>', tags: ['Diffuse margins', 'Most common'] },
  'contusion-intramuscular': { label: 'Intramuscular Contusion', info: '<p>Bleeding within muscle tissue.</p><p><strong>Pitfall:</strong> May NOT appear on the skin surface for HOURS to DAYS — delayed appearance can mistakenly suggest later assault.</p><p>Always palpate suspicious areas; consider repeat examination at 24-48 h in homicide investigations.</p>', tags: ['Delayed appearance', 'May mimic later assault'] },
  'contusion-deep': { label: 'Deep / Visceral Contusion', info: '<p>Bruising of solid organs — liver, spleen, kidney, heart, brain.</p><p><strong>Risk:</strong> Internal haemorrhage may cause death WITHOUT external signs of injury — important consideration in road traffic + crush trauma autopsies.</p><p><strong>Examples:</strong> Splenic rupture from minor LUQ blow; cardiac contusion from steering-wheel impact; liver contusion from RUQ blow.</p>', tags: ['Internal haemorrhage'] },
  'contusion-age': { label: 'Ageing of Bruise — Colour Stages', info: '<p>The "rainbow" of bruise colour stages reflects Hb degradation:</p><ul><li><strong>0-2 days:</strong> RED → reddish-blue — extravasated oxygenated blood</li><li><strong>2-5 days:</strong> BLUE → dark purple — deoxygenation of Hb</li><li><strong>5-7 days:</strong> GREEN — biliverdin (Hb → biliverdin)</li><li><strong>7-10 days:</strong> YELLOW — bilirubin + haemosiderin</li><li><strong>10-14 days:</strong> Fading; normal skin restored</li></ul><p><strong>★ Yellow colour proves bruise is at LEAST 18 hours old</strong> — bilirubin takes time to accumulate.</p><p><strong>Mnemonic:</strong> "RBGY" — Red, Blue, Green, Yellow.</p><p><strong>Caveat:</strong> Ageing is approximate — varies by depth, age of person, site, individual.</p>', tags: ['RBGY mnemonic', 'Yellow ≥ 18h'] },
  'contusion-ectopic': { label: 'Ectopic (Migrated) Bruise', info: '<p>A bruise that surfaces at a site DISTANT from the original impact — blood tracks along fascial planes by gravity.</p><p><strong>Classic example:</strong> A blow to the forehead produces a "black eye" (peri-orbital bruise) hours later, as blood seeps down through the loose orbital tissue.</p><p><strong>Forensic implication:</strong> Don\'t assume the surface bruise location = point of impact — examine higher up the fascial plane.</p>', tags: ['Migrates by gravity', 'Black eye from forehead blow'] },
  'contusion-pseudo': { label: 'Pseudo-bruise vs PM Lividity', info: '<p>Post-mortem hypostatic lividity in dependent parts of the body can closely mimic a true bruise.</p><p><strong>Distinguishing on incision:</strong></p><ul><li><strong>Bruise:</strong> Blood EXTRAVASATED into tissues — cannot be washed out</li><li><strong>Lividity:</strong> Blood remains within vessels — can be washed out with water</li></ul><p>Microscopy + biochemistry of vital reaction (histamine, serotonin ↑) confirms true antemortem bruise.</p>', tags: ['Wash test', 'Histamine ↑ = AM'] },
  'contusion-battered': { label: 'Battered Baby Syndrome ★', info: '<p><strong>Battered baby syndrome</strong> (or Caffey\'s syndrome / Non-Accidental Injury — NAI) refers to a constellation of injuries in an infant from repeated abuse by a caretaker.</p><p><strong>Pathognomonic finding:</strong> Multiple bruises in <strong>DIFFERENT STAGES of colour healing</strong> (red, blue, green, yellow seen simultaneously) — proves repeated trauma at different times.</p><p><strong>Other features:</strong> Multiple fractures of different ages (X-ray), retinal haemorrhages, subdural haematoma (shaken baby), failure to thrive, behavioural withdrawal.</p><p><strong>[NEET-PG 2019 PYQ]:</strong> Battered baby identified by "bruise of different ages".</p>', tags: ['NEET-PG 2019 PYQ', 'Bruises of different ages'] },

  'laceration-definition': { label: 'Laceration — Definition', info: '<p>A <strong>laceration</strong> is a tear of skin and underlying soft tissue caused by blunt force, with skin breach.</p><p><strong>Cardinal features:</strong></p><ul><li>IRREGULAR, contused, abraded margins</li><li>TISSUE BRIDGES across the floor — vessels, nerves, connective tissue fibres NOT cleanly cut</li><li>Hair bulbs at margins are intact (crushed not cut)</li><li>Bleeding USUALLY LESS than incised wound — crushed vessels retract + thrombose</li></ul>', tags: ['Tissue bridges', 'Crushed hair bulbs'] },
  'lac-split': { label: 'Split Laceration', info: '<p>Skin is compressed between a blunt object and an underlying BONE → the skin SPLITS.</p><p><strong>Classic sites:</strong> Where bone lies just beneath skin — scalp, eyebrow, shin, elbow, cheek, chin.</p><p><strong>★ Forensic pitfall:</strong> A split laceration superficially LOOKS INCISED — clean linear gap — but has the characteristic features of a laceration on close inspection (tissue bridges + crushed hair bulbs + bruised abraded margins).</p><p>Classic QBank SAQ: <em>"Split laceration vs incised wound — differentiate."</em> See DT-2.</p>', tags: ['Looks incised', 'See DT-2'] },
  'lac-stretch': { label: 'Stretch Laceration', info: '<p>Overstretching of skin beyond its elastic limit → the skin tears.</p><p><strong>Examples:</strong></p><ul><li>Pelvic crush in RTA → stretch lac of perineum / inguinal region</li><li>Abdominal wall stretched by violent compression</li><li>Limb dislocations stretching overlying skin</li></ul>', tags: ['Skin tears at elastic limit'] },
  'lac-crush': { label: 'Crush Laceration', info: '<p>Heavy compression crushes both skin and deep tissue.</p><p><strong>Features:</strong></p><ul><li>Wide, ragged margins</li><li>Extensive surrounding bruising</li><li>Underlying fracture / visceral damage common</li></ul><p><strong>Classic:</strong> Run-over by a vehicle tyre; building collapse on a limb.</p>', tags: ['Vehicle tyre / collapse'] },
  'lac-avulsion': { label: 'Avulsion Laceration', info: '<p>Skin or tissue torn AWAY from the underlying parts.</p><p><strong>Types:</strong></p><ul><li><strong>Degloving</strong> — circumferential skin avulsion (RTA wheel crush of limb)</li><li><strong>Scalp avulsion</strong> — common in hair-pulling machinery accidents</li><li><strong>Traumatic amputation</strong> — at extreme</li></ul>', tags: ['Degloving', 'Machinery'] },
  'lac-tear': { label: 'Tear Laceration', info: '<p>Caused by an irregular pointed object piercing AND dragging the skin.</p><p><strong>Examples:</strong> Door hinge, animal horn, broken glass edge, machinery hook.</p><p>Typically has an irregular pierce + drag pattern.</p>', tags: ['Hinge / horn / glass'] },
  'lac-features': { label: 'Cardinal Features of Laceration ★', info: '<p>The diagnostic features of laceration — distinguish from incised wound:</p><ul><li><strong>Margins:</strong> IRREGULAR, contused, abraded, swollen</li><li><strong>Tissue bridges</strong> across the floor — vessels, nerves, fibres NOT cleanly cut (★ KEY)</li><li><strong>Hair bulbs</strong> at margins are INTACT — crushed not cut</li><li><strong>Bleeding:</strong> usually LESS than incised wound (crushed vessels retract + thrombose)</li><li><strong>Depth:</strong> may reach bone; often bruised base</li><li><strong>Shape:</strong> variable — Y-shaped, L-shaped, stellate, linear, irregular</li><li><strong>Foreign bodies</strong> often within wound (grit, hair, fabric)</li><li><strong>Healing:</strong> by secondary intention → leaves a SCAR</li></ul>', tags: ['★ Tissue bridges', 'Scar on healing'] },
  'lac-medicolegal': { label: 'Laceration — Medicolegal Importance', info: '<p><strong>Clinical/forensic significance:</strong></p><ul><li>Indicates BLUNT force assault / accident</li><li>Site + pattern → reconstructs nature of blow</li><li>Scalp laceration ("split laceration") common in homicidal blunt trauma — easily mistaken for incised</li><li>Underlying fracture or visceral injury common — <strong>always request X-ray when laceration overlies bone</strong></li><li>Trace evidence collection — foreign material in wound (paint, glass, fabric, weapon fragments)</li><li><strong>Statutory peg:</strong> BNS 117 (grievous hurt) / BNS 118 (by dangerous weapon)</li></ul>', tags: ['X-ray bone underneath', 'Trace evidence'] },

  'incised-definition': { label: 'Incised Wound — Definition', info: '<p>An <strong>incised wound</strong> (slash / cut) is a clean cut produced by drawing a sharp-edged object (knife, blade, glass, razor) across the skin.</p><p><strong>Cardinal feature:</strong> length is GREATER than depth.</p><p><strong>Differentiator vs laceration:</strong> CLEAN margins · NO surrounding bruising · NO tissue bridges (everything cleanly severed).</p>', tags: ['Length &gt; depth', 'Clean cut'] },
  'incised-margins': { label: 'Incised Wound — Margins', info: '<p><strong>Diagnostic features of incised wound margins:</strong></p><ul><li><strong>Edges:</strong> CLEAN, sharp, well-defined (no jagged tearing)</li><li><strong>Bruising:</strong> ABSENT around margins</li><li><strong>Abrasion:</strong> ABSENT around margins</li><li><strong>Hair bulbs:</strong> CUT at edges (not crushed as in laceration)</li><li><strong>Tissue bridges:</strong> NONE — vessels, nerves, fibres cleanly severed</li></ul><p>These features collectively distinguish incised from laceration — the basis of DT-2.</p>', tags: ['Clean, sharp', 'No bridges'] },
  'incised-dimensions': { label: 'Incised Wound — Dimensions', info: '<p><strong>Dimensions of incised wound:</strong></p><ul><li><strong>Length:</strong> always &gt; depth, &gt; width</li><li><strong>Depth:</strong> limited (skin + subcutaneous, rarely deeper)</li><li><strong>Width:</strong> gapes due to elastic recoil of skin</li><li><strong>Skin tension lines (Langer\'s lines):</strong> wound gapes more when CUT PERPENDICULAR to Langer\'s lines</li><li><strong>Tailing:</strong> drag-off at one end indicating direction of cut</li></ul>', tags: ['Langer lines affect gape'] },
  'incised-bleeding': { label: 'Incised Wound — Bleeding', info: '<p><strong>Bleeding is PROFUSE</strong> — more than in a laceration of equal size.</p><p><strong>Reason:</strong> Vessels are cleanly cut and CANNOT retract or thrombose efficiently — they remain open.</p><p><strong>Risk:</strong> Cutting a major artery (carotid, brachial, femoral) can cause haemorrhagic shock and death within minutes.</p><p>Severe blood loss is a common cause of death in slash / cut-throat cases.</p>', tags: ['Profuse — vessels don\'t retract'] },
  'incised-tailing': { label: 'Tailing — Direction of Cut', info: '<p>As the blade is drawn across the skin and lifted off, the <strong>trailing end becomes shallow and tapers</strong> — this is the <strong>tail (or drag-off)</strong>.</p><p><strong>Direction of cut:</strong> from the DEEP end → SHALLOW (tail) end.</p><p><strong>Importance:</strong> Reconstructs handedness + position of assailant. e.g., in a cut throat, an attacker right-handed and behind the victim produces L → R + downward tail.</p>', tags: ['Deep → shallow direction'] },
  'incised-hesitation': { label: 'Hesitation (Tentative) Cuts ★', info: '<p><strong>Hesitation cuts</strong> are small, multiple, SUPERFICIAL parallel cuts alongside a main deep cut.</p><p><strong>Site:</strong> Wrist (most common in slash suicide), neck (cut throat), antecubital fossa.</p><p><strong>★ Significance:</strong> PATHOGNOMONIC of <strong>SUICIDE</strong> attempts — the victim "tests" the cut tentatively before committing to a deep one because of pain/fear.</p><p><strong>Absence</strong> of hesitation cuts in a wrist/throat injury argues against suicide.</p>', tags: ['Pathognomonic of suicide'] },
  'incised-medicolegal': { label: 'Incised — Medicolegal Importance', info: '<p><strong>Forensic interpretation of incised wounds:</strong></p><ul><li><strong>Hesitation cuts</strong> → SUICIDE attempt</li><li><strong>No hesitation + deep + multiple</strong> → HOMICIDE</li><li><strong>Defence wounds</strong> on hands/forearms → conscious resistance → HOMICIDE</li><li><strong>Tailing direction</strong> → reveals stroke direction → handedness of assailant</li><li><strong>BNS 117/118</strong> — grievous / by dangerous weapon</li><li><strong>Vital reaction</strong> → AM vs PM</li></ul>', tags: ['BNS 117 / 118'] },

  'stab-definition': { label: 'Stab / Punctured Wound — Definition', info: '<p>A <strong>stab wound</strong> is produced when a pointed object is thrust into the body.</p><p><strong>Cardinal feature:</strong> DEPTH &gt; length / width (the opposite of incised wound).</p><p>Surface wound is small but the deep tract may damage vital structures (heart, lung, great vessels, liver, kidney).</p><p><strong>Punctured wound</strong> = same concept with very small surface (needle, ice-pick, nail).</p>', tags: ['Depth &gt; length'] },
  'stab-types': { label: 'Stab Types — by Tract', info: '<p><strong>Penetrating:</strong> Blade enters a body cavity but does NOT exit (e.g., knife in chest stops in lung).</p><p><strong>Perforating:</strong> Blade passes THROUGH a structure with entry + exit (e.g., through-and-through chest).</p><p><strong>Punctured:</strong> Small surface · deep, narrow tract (needle, ice-pick, nail).</p><p>The terms apply both at body level and at organ level.</p>', tags: ['Penetrating · Perforating · Punctured'] },
  'stab-margins': { label: 'Stab Shape vs Blade Type', info: '<p>The shape of the surface wound reflects the cross-section of the blade:</p><ul><li><strong>Single-edged knife</strong> → BOAT / WEDGE shape — one sharp end + one blunt end (the back of the blade)</li><li><strong>Double-edged knife (dagger)</strong> → SPINDLE / OVAL — both ends pointed/sharp</li><li><strong>Round / needle</strong> → CIRCULAR puncture</li><li><strong>Cruciform / triangular blade</strong> → reproduces blade cross-section</li></ul><p>Always document end angles and measure precisely — the blade can often be matched to the wound.</p>', tags: ['Single-edge = boat', 'Double-edge = spindle'] },
  'stab-dimensions': { label: 'Stab Dimensions → Weapon', info: '<p>Stab dimensions provide weapon clues:</p><ul><li><strong>Length of surface wound</strong> ≈ WIDTH of blade at insertion level (slightly less due to skin recoil)</li><li><strong>Depth of tract</strong> ≈ LENGTH of blade (max insertion)</li><li><strong>Width of wound</strong> minimal (skin closes on withdrawal)</li></ul><p><strong>★ Tract DEPTH may EXCEED blade length</strong> in soft yielding regions (abdomen, breast) where tissue compresses inward against the blade. It rarely falls short of the blade length.</p>', tags: ['Length ≈ blade width', 'Depth ≈ blade length'] },
  'stab-tract': { label: 'Stab — Internal Tract', info: '<p>On autopsy, follow the wound tract layer by layer:</p><ul><li><strong>Direction</strong> — angle + layers pierced reveals stab direction (e.g., upward / downward, L-to-R)</li><li><strong>Structures injured</strong> — heart, lung, liver, spleen, great vessels</li><li><strong>Damage</strong> — internal haemorrhage, pneumothorax, haemothorax, cardiac tamponade</li></ul><p>Place a probe (gently) along the tract to document direction; photograph in situ.</p>', tags: ['Direction + structures + damage'] },
  'stab-medicolegal': { label: 'Stab — Medicolegal Importance', info: '<p><strong>Manner of death:</strong></p><ul><li>Mostly HOMICIDAL</li><li>Rarely SUICIDAL (single stab over precordium / epigastrium; clothing often partly removed)</li><li>Accidental — uncommon</li></ul><p><strong>Diagnostic features of homicide:</strong> multiple stabs, defence wounds, no hesitation marks.</p><p><strong>Statutory peg:</strong> BNS 118 (dangerous weapon) / BNS 117 (grievous) / BNS 101 (murder) if fatal.</p>', tags: ['Mostly homicidal'] },

  'chop-definition': { label: 'Chop Wound — Definition', info: '<p>A <strong>chop wound</strong> is produced by a heavy weapon with a sharp cutting edge swung with great force.</p><p>It is a HYBRID wound — combines features of incised (sharp margins) with features of laceration (depth, bone involvement, gaping).</p><p><strong>Cardinal trait:</strong> The weapon often cuts CLEANLY into bone (skull, limb bones) with an associated chip/wedge fracture.</p>', tags: ['Sharp + heavy hybrid'] },
  'chop-weapons': { label: 'Chop — Weapons', info: '<p>Common chop weapons:</p><ul><li><strong>Axe</strong> — wood-cutter\'s, butcher\'s</li><li><strong>Machete / chopper</strong> (Hindi: gandasa, kulhari)</li><li><strong>Sword</strong> — straight or curved (talwar)</li><li><strong>Sickle</strong> — curved agricultural blade</li><li><strong>Heavy knife / cleaver</strong></li></ul><p>Indian context — these are common farm + caste violence weapons. Bone tool-marks can be matched to the weapon edge by forensic toolmark analysis.</p>', tags: ['Axe · machete · sickle · sword'] },
  'chop-features': { label: 'Chop — Cardinal Features', info: '<p><strong>Diagnostic features of chop wound:</strong></p><ul><li><strong>Margins:</strong> relatively CLEAN at superficial level (sharp edge) — may be slightly bruised / contused</li><li><strong>Depth:</strong> DEEP, extends to deeper tissue, often muscle + bone</li><li><strong>Bone:</strong> CHARACTERISTIC — clean linear cut in bone with a chip / wedge fracture nearby (★ key feature)</li><li><strong>Width:</strong> gaping; tissue may be partly severed (limbs, fingers, scalp flaps)</li><li><strong>Bleeding:</strong> PROFUSE — severs arteries; haemorrhagic shock common cause of death</li><li><strong>Hair bulbs:</strong> may be CUT (like incised) at margins — DD from split laceration</li></ul>', tags: ['Bone cut + chip #'] },
  'chop-sites': { label: 'Chop — Typical Sites', info: '<p>Common sites of chop wounds:</p><ul><li><strong>Head &amp; neck</strong> — most common; skull fracture, intracranial haemorrhage</li><li><strong>Hands &amp; forearms</strong> — active defence wounds against the weapon</li><li><strong>Shoulders / clavicle</strong> — common attack target</li><li><strong>Limbs</strong> — traumatic amputation possible</li><li><strong>Anterior trunk</strong> — chest, abdomen</li></ul>', tags: ['Head + extremities'] },
  'chop-medicolegal': { label: 'Chop — Medicolegal Importance', info: '<p><strong>Manner of death:</strong> ALMOST ALWAYS HOMICIDAL — a heavy weapon swung with great force cannot be reliably self-inflicted.</p><ul><li>Single fatal chop common (esp. skull) — death from intracranial haemorrhage / brain damage</li><li>Defence wounds (forearms / hands) frequent — conscious resistance</li><li>Bone marks → identify weapon edge (preserve bone specimen for tool-mark analysis)</li><li>Multiple chops often present — frenzied attack / group assault</li><li><strong>Statutory peg:</strong> BNS 117 (grievous) · BNS 118 (dangerous weapon) · BNS 101 (murder) if fatal</li></ul>', tags: ['Almost always homicidal'] },

  'defence-definition': { label: 'Defence Wounds — Definition', info: '<p><strong>Defence wounds</strong> are injuries sustained by the victim while trying to ward off an attack.</p><p><strong>Forensic significance:</strong></p><ul><li>Prove that the victim was CONSCIOUS at the time of attack</li><li>Prove ACTIVE RESISTANCE</li><li>Prove the wounds are ANTEMORTEM (always)</li><li>Strongly argue HOMICIDE (in cut-throat etc.)</li><li><strong>[NEET-PG 2022 PYQ]</strong> — image-based identification</li></ul>', tags: ['Always AM', 'NEET-PG 2022 PYQ'] },
  'defence-active': { label: 'Active Defence Wounds', info: '<p><strong>Active defence wounds</strong> occur when the victim <strong>GRASPS the weapon</strong> in an attempt to disarm the assailant.</p><p><strong>Sites:</strong> PALM, palmar surface of fingers, web spaces between fingers, volar wrist.</p><p><strong>Wound type:</strong> Incised or chop — clean cuts across the palm or between fingers.</p><p><strong>Classic:</strong> Knife handle-grasp wounds on palm; cuts on flexor surface of fingers.</p>', tags: ['Palmar surface', 'Grasping'] },
  'defence-passive': { label: 'Passive Defence Wounds', info: '<p><strong>Passive defence wounds</strong> occur when the victim <strong>raises the forearm to SHIELD the head/face</strong>. Instinctive ulnar-side-up posture.</p><p><strong>Sites:</strong> EXTENSOR (dorsal) surface of forearm, dorsum of hand, ulnar border of forearm.</p><p><strong>Wound type:</strong> Cuts, bruises, lacerations, or fractures (ulna shaft — "nightstick fracture").</p><p><strong>Classic:</strong> Bruise + ulnar shaft fracture on outer forearm from a blow with a stick (lathi).</p>', tags: ['Extensor surface', 'Shielding'] },
  'defence-sites': { label: 'Defence — Site Summary', info: '<p><strong>Active defence (palmar):</strong></p><ul><li>Palm — sharp transverse incised cuts</li><li>Web spaces between fingers — clean cuts</li><li>Volar wrist — when grabbing assailant\'s arm</li></ul><p><strong>Passive defence (extensor):</strong></p><ul><li>Dorsum of forearm — bruises, cuts, fractures (ulna)</li><li>Dorsum of hand — chop/cut marks</li><li>Outer aspect of upper arm, shoulder, back</li></ul>', tags: ['Palmar = active', 'Extensor = passive'] },
  'defence-medicolegal': { label: 'Defence Wounds — Importance', info: '<p><strong>Forensic value of defence wounds:</strong></p><ul><li>Prove victim was CONSCIOUS &amp; RESISTING</li><li>Prove HOMICIDAL nature of incident</li><li>Rule out SUICIDE (e.g., cut throat with defence wounds = homicidal)</li><li>Always ANTEMORTEM (active resistance not possible postmortem)</li><li>Suggest victim was NOT surprised from behind or unconscious at start</li><li>Trace evidence — DNA / fibres on hands</li><li><strong>ABSENCE</strong> may indicate: surprise attack, instant fatal blow, intoxication, restraint, prior asphyxia/sedation</li></ul>', tags: ['Proves consciousness + resistance'] },

  'cut-throat-definition': { label: 'Cut Throat — Definition', info: '<p>A <strong>cut throat</strong> is an incised wound of the neck.</p><p>It may be:</p><ul><li><strong>Suicidal</strong> — typical hesitation cuts, high site</li><li><strong>Homicidal</strong> — uniform deep, defence wounds present</li><li><strong>Accidental</strong> — rare (broken glass, machinery)</li></ul><p><strong>Cause of death:</strong> Haemorrhage (most common) · air embolism (jugular vein cut) · asphyxia (trachea cut + aspirated blood) · shock.</p>', tags: ['Suicidal vs Homicidal'] },
  'ct-suicidal': { label: 'Suicidal Cut Throat ★', info: '<p><strong>Six cardinal features of suicidal cut throat:</strong></p><ol><li><strong>Site:</strong> HIGH on the neck (above thyroid cartilage)</li><li><strong>Direction:</strong> L → R + above-downward (in a right-handed person, facing a mirror)</li><li><strong>Depth:</strong> DEEP at start (L), SHALLOW at end (R) — characteristic tailing</li><li><strong>Hesitation cuts:</strong> PRESENT — multiple superficial parallel "tentative" cuts above/below the main wound (★ pathognomonic)</li><li><strong>Defence wounds:</strong> ABSENT</li><li><strong>Weapon:</strong> Found near body, in the victim\'s hand or close by (sometimes held by cadaveric spasm); blade-edge facing victim</li></ol><p><strong>Clothing:</strong> Collar often loosened or removed; mirror may be present; bathroom scene classic.</p>', tags: ['HIGH · hesitation · weapon in hand'] },
  'ct-homicidal': { label: 'Homicidal Cut Throat ★', info: '<p><strong>Six cardinal features of homicidal cut throat:</strong></p><ol><li><strong>Site:</strong> LOW on neck (at or below thyroid cartilage)</li><li><strong>Direction:</strong> Horizontal across neck; or L→R if attacker behind victim &amp; right-handed</li><li><strong>Depth:</strong> DEEP &amp; UNIFORM — single firm cut</li><li><strong>Hesitation cuts:</strong> ABSENT</li><li><strong>Defence wounds:</strong> PRESENT on palms, fingers, forearms (★ pathognomonic of homicide)</li><li><strong>Weapon:</strong> NOT found at scene · or thrown far · sometimes inconsistent with injury</li></ol><p><strong>Clothing:</strong> May show struggle marks, disarray; often combined with stab wounds or multiple injuries.</p>', tags: ['LOW · uniform deep · DEFENCE +ve'] },
  'ct-anatomy': { label: 'Cut Throat — Structures Cut', info: '<p><strong>Superficial to deep:</strong></p><ol><li>Skin · platysma · superficial fascia</li><li>Sternomastoid muscle · strap muscles (sternohyoid, sternothyroid, omohyoid)</li><li><strong>Vessels:</strong> external jugular vein → anterior jugular → (deeper) common carotid + internal jugular</li><li><strong>Airway:</strong> trachea / larynx — air embolism, aspirated blood, asphyxia</li><li><strong>Nerves:</strong> vagus, recurrent laryngeal (hoarseness if survives), cervical sympathetic</li></ol><p><strong>Cause of death:</strong> haemorrhage (most) · air embolism (jugular cut) · aspiration / asphyxia · shock.</p>', tags: ['Layers + vessels + airway'] },
  'ct-mirror': { label: 'Mirror Test (Suicidal Reconstruction)', info: '<p>The "mirror" reconstruction is classic for suicidal cut throat by a right-handed victim:</p><ul><li>Done facing a mirror (often bathroom basin / dresser)</li><li>Head tilted back; chin up</li><li>Cut runs L (deep) → R (shallow, tail)</li><li>Blood splash patterns confirm seated posture</li></ul><p>Combined with hesitation cuts + weapon in hand → strong evidence of suicide.</p>', tags: ['Bathroom basin classic'] },

  'am-pm-definition': { label: 'AM vs PM Wound — Definition', info: '<p><strong>Antemortem wound</strong> = inflicted while the person was alive → shows VITAL REACTION (circulatory + cellular response).</p><p><strong>Postmortem wound</strong> = inflicted after death → NO vital reaction.</p><p><strong>★ Best single distinguishing feature [NEET-PG 2016]:</strong> ABSENCE of erythema and cellular changes in PM wounds.</p>', tags: ['NEET-PG 2016', 'Vital reaction litmus'] },
  'vital-erythema': { label: 'Vital Reaction — Erythema', info: '<p>The "red zone" of vasodilation and inflammation around an antemortem wound is one of the earliest signs of vital reaction.</p><ul><li><strong>AM:</strong> Red zone (1-2 mm wide) around wound edges from arteriolar dilation + exudate</li><li><strong>PM:</strong> ABSENT — no active vascular response</li></ul><p><strong>Mechanism:</strong> Histamine + kinin-mediated vasodilation. Only happens with circulation active.</p><p>This is the textbook NEET-PG 2016 answer — PM differs by "absence of erythema and cellular changes."</p>', tags: ['NEET-PG 2016 key answer'] },
  'vital-bleeding': { label: 'Vital Reaction — Bleeding &amp; Clotting', info: '<p><strong>Antemortem wound:</strong></p><ul><li>PROFUSE arterial bleeding — often spurting</li><li>Blood CLOTS in and around the wound (fibrinogen → fibrin under enzymatic activation)</li></ul><p><strong>Postmortem wound:</strong></p><ul><li>Sparse oozing only (static blood drains by gravity)</li><li>Blood does NOT clot — postmortem fibrinolysis</li></ul><p>Spurting arterial bleeding is unquestionably antemortem.</p>', tags: ['Clots in AM', 'PM = no clot'] },
  'vital-cellular': { label: 'Vital Reaction — Cellular Response', info: '<p>Histological timeline of antemortem cellular response:</p><ul><li><strong>0-6 h:</strong> Neutrophil infiltrate at wound edges</li><li><strong>12-24 h:</strong> Macrophages predominate</li><li><strong>24-72 h:</strong> Fibroblast proliferation</li><li><strong>3-5 d:</strong> Capillary buds (granulation tissue)</li><li><strong>5-10 d:</strong> Collagen deposition</li><li><strong>&gt;2 weeks:</strong> Scar maturation</li></ul><p>Histology can date a wound to days. PM wounds show none of these.</p>', tags: ['Datable to days'] },
  'vital-biochem': { label: 'Vital Reaction — Biochemical Markers', info: '<p>Biochemical markers of vital reaction (within margins of AM wound):</p><ul><li><strong>Histamine</strong> ↑ within minutes of injury (key AM marker)</li><li><strong>Serotonin</strong> ↑ at margins</li><li><strong>Free histamine &gt; 50 %</strong> indicates vital reaction</li><li><strong>ATP / catecholamines</strong> ↑ at wound edges</li><li><strong>Cathepsin D, aminopeptidase</strong> ↑ at edges</li></ul><p>These chemicals confirm vital reaction biochemically even when histology is borderline.</p>', tags: ['Histamine + serotonin ↑'] },
  'wound-healing': { label: 'Wound Healing Timeline ★', info: '<p>Approximate timeline for an uncomplicated incised wound:</p><ul><li><strong>12-24 h:</strong> Clot · neutrophilic margins · slight redness</li><li><strong>2-3 d:</strong> Scab formed; macrophages predominate</li><li><strong>3-5 d:</strong> Granulation tissue · capillary buds · fibroblasts</li><li><strong>1 wk:</strong> Scab separating · epithelialisation starting</li><li><strong>2 wk:</strong> Pink, vascular soft scar</li><li><strong>1 month:</strong> Scar maturing — pale, firm</li><li><strong>3-6 months:</strong> Mature scar — white, atrophic</li></ul><p><strong>Important:</strong> Abrasions heal WITHOUT scar; lacerations &amp; incisions leave a SCAR.</p>', tags: ['Datable wound'] }

};

function nodeList(ids) { return ids.map(id => ({ nodeId: id, ...NODES[id] })); }

const MCQS = {
  'MI-01': [
    { stem: '"Injury" is defined in which section of the Bharatiya Nyaya Sanhita (BNS)?', options: ['BNS 100','BNS 114','BNS 116','BNS 118'], answerIdx: 2, explain: 'BNS 116 (≡ IPC 44) defines injury as "any harm whatever illegally caused to any person, in body, mind, reputation, or property."', tag: '[PG-Inspired]' },
    { stem: 'Grievous hurt enumerates how many categories under BNS 116(2) / IPC 320?', options: ['5','6','7','8'], answerIdx: 3, explain: '8 enumerated categories of grievous hurt — emasculation, privation of sight/hearing, privation of limb, impairing limb power, permanent head/face disfigurement, fracture/dislocation, hurt endangering life or causing &gt;20 d disability, and acid-attack death (BNS addition).', tag: '[PG-Inspired]' },
    { stem: 'Which is NOT a blunt force mechanical injury?', options: ['Abrasion','Contusion','Laceration','Incised wound'], answerIdx: 3, explain: 'Incised is sharp force. Blunt = Abrasion · Contusion · Laceration (mnemonic ACL).', tag: '[UNIV]' }
  ],
  'MI-02': [
    { stem: 'Tag epidermal pile-up at the FAR end of an abrasion indicates:', options: ['Postmortem origin','Direction of force','Healing stage','Site of impact'], answerIdx: 1, explain: 'Tags pile at the far end where the object lifts off — gives the direction of the relative motion / force.', tag: '[PG-Inspired]' },
    { stem: 'A patterned tyre-tread abrasion is forensically valuable because it:', options: ['Indicates antemortem origin','Identifies the causing weapon / vehicle','Indicates depth of injury','Is always grievous'], answerIdx: 1, explain: 'Patterned abrasions reproduce the shape of the agent — tyre, belt, teeth, shoe — and can identify the weapon. Always photograph with a scale.', tag: '[PG-Inspired]' },
    { stem: 'An abrasion typically heals:', options: ['With a hypertrophic scar','With a depigmented atrophic scar','Without a scar (depigmented pink area)','With a keloid'], answerIdx: 2, explain: 'Abrasion involves epidermis only → heals by regeneration from basal layer → NO scar (depigmented pink area within 10-14 days).', tag: '[UNIV]' },
    { stem: 'Parchmentisation of an abrasion is due to:', options: ['Vital reaction','Drying of compressed dermis after pressure','Bacterial colonisation','Postmortem lividity'], answerIdx: 1, explain: 'Parchmentisation = pressure squeezes blood from capillaries → dermis dries → leathery dark brown mark. Classic in ligature pressure abrasions.', tag: '[PG-Inspired]' }
  ],
  'MI-03': [
    { stem: 'A child shows multiple bruises in different stages of colour healing — red, blue, green, and yellow seen simultaneously. The likely diagnosis is:', options: ['Stab wound','Gunshot wound','Battered baby syndrome (bruises of different ages)','Birth marks'], answerIdx: 2, explain: 'Multiple bruises in different healing stages = repeated trauma at different times = pathognomonic of battered baby (NAI / Caffey\'s syndrome).', tag: '[NEET-PG 2019]' },
    { stem: 'The MINIMUM age of a bruise that shows YELLOW colour is:', options: ['1-2 hours','6 hours','18 hours','3 days'], answerIdx: 2, explain: 'Yellow colour appears only when bilirubin/haemosiderin has accumulated — at least 18 hours after injury. Useful for age-dating bruises.', tag: '[PG-Inspired]' },
    { stem: 'A "black eye" after a forehead blow is an example of:', options: ['Patterned bruise','Ectopic / migrated bruise','Pseudo-bruise','Subconjunctival haemorrhage'], answerIdx: 1, explain: 'Ectopic / migrated bruise — blood tracks down through loose orbital tissue by gravity → peri-orbital bruise appears hours later at a site distant from the impact.', tag: '[PG-Inspired]' },
    { stem: 'The classical bruise colour sequence is:', options: ['Red → Yellow → Green → Blue','Red → Blue → Green → Yellow','Blue → Red → Yellow → Green','Yellow → Green → Blue → Red'], answerIdx: 1, explain: 'RBGY mnemonic — Red (0-2d) · Blue (2-5d) · Green (5-7d) · Yellow (7-10d) → fade by 10-14 days.', tag: '[UNIV]' }
  ],
  'MI-04': [
    { stem: 'The CARDINAL feature distinguishing laceration from incised wound is:', options: ['Bleeding profusely','Length greater than depth','Tissue bridges across the floor','Site over bone'], answerIdx: 2, explain: 'Tissue bridges (vessels, nerves, fibres) across the wound floor + crushed hair bulbs + abraded bruised margins = laceration. Incised has clean margins and no bridges.', tag: '[PG-Inspired]' },
    { stem: 'A scalp wound from a blunt object that has clean linear gap but with tissue bridges and crushed hair bulbs is termed:', options: ['Incised wound','Split laceration','Stab wound','Chop wound'], answerIdx: 1, explain: 'Split laceration — skin compressed between blunt object and underlying bone (scalp/eyebrow/shin) splits. LOOKS incised but has bridges + crushed hair bulbs.', tag: '[QBank-Inspired]' },
    { stem: 'Identify the injury — clean cut margins seen on the image but the wound has irregular floor with tissue bridges and crushed hair bulbs:', options: ['Incised looking laceration','Laceration','Laceration looking incision','Incision'], answerIdx: 0, explain: 'Incised-LOOKING laceration = split laceration. The superficial gap looks clean but the floor shows tissue bridges → identifies it as laceration.', tag: '[NEET-PG 2021]' }
  ],
  'MI-05': [
    { stem: 'The defining dimensional feature of an incised wound is:', options: ['Depth greater than length','Length greater than depth','Length equal to depth','Bone involvement'], answerIdx: 1, explain: 'Incised wound = length &gt; depth. (Opposite of stab wound, where depth &gt; length.)', tag: '[PG-Inspired]' },
    { stem: 'Multiple superficial parallel cuts alongside a deep main wound on the wrist are termed:', options: ['Defence wounds','Hesitation cuts','Postmortem cuts','Bansdola marks'], answerIdx: 1, explain: 'Hesitation (tentative) cuts — pathognomonic of suicide attempts. Victim "tests" the cut before committing the deep stroke.', tag: '[PG-Inspired]' },
    { stem: 'In an incised wound, bleeding is profuse because:', options: ['Multiple vessels are torn','Vessels are cleanly cut and cannot retract / thrombose','Blood fails to clot','The wound is deep'], answerIdx: 1, explain: 'Cleanly cut vessels remain open — cannot retract into the tissue or thrombose effectively. Lacerations bleed less because crushed vessels retract + thrombose.', tag: '[UNIV]' }
  ],
  'MI-06': [
    { stem: 'A stab wound with one sharp angled end and one blunt squared end (boat / wedge shape) indicates a:', options: ['Double-edged dagger','Single-edged knife','Ice-pick','Round nail'], answerIdx: 1, explain: 'Single-edged knife produces a boat / wedge-shaped stab wound — one end sharp (cutting edge), one end blunt (back of blade). Double-edged = spindle.', tag: '[PG-Inspired]' },
    { stem: 'The length of the surface stab wound corresponds approximately to:', options: ['Length of the blade','Width of the blade at insertion','Thickness of the blade','Total weapon length'], answerIdx: 1, explain: 'Length of the surface wound ≈ WIDTH of the blade at insertion (depth of tract ≈ length of blade).', tag: '[PG-Inspired]' },
    { stem: 'In a stab wound, the tract DEPTH may exceed the blade length because:', options: ['Skin stretches','Soft tissue (abdomen, breast) compresses inward against the blade','Blood pushes the blade','The wound continues to extend post-mortem'], answerIdx: 1, explain: 'Soft yielding tissue (abdomen, breast) is compressed inward by the thrusting blade, so the resultant tract can be deeper than the blade itself. Important not to assume blade is longer than tract.', tag: '[UNIV]' }
  ],
  'MI-07': [
    { stem: 'A chop wound is BEST described as:', options: ['Pure sharp force','Pure blunt force','Combined sharp + heavy weapon — clean margins + bone involvement','Sharp object thrust into body'], answerIdx: 2, explain: 'Chop wound = hybrid of sharp + heavy force (axe, machete, sword). Clean margins (sharp edge) + deep, often into bone (heavy weight) + chip/wedge fracture.', tag: '[PG-Inspired]' },
    { stem: 'A chop wound on the skull is associated with:', options: ['Comminuted depressed fracture only','Clean linear cut in bone with a chip / wedge fracture nearby','Stellate fracture','No bone injury'], answerIdx: 1, explain: 'Characteristic bone signature of chop wound = clean linear cut from the blade edge + chip/wedge fracture from the weight impact.', tag: '[PG-Inspired]' },
    { stem: 'The manner of death in chop wound is almost always:', options: ['Suicidal','Homicidal','Accidental','Self-inflicted in fugue state'], answerIdx: 1, explain: 'Heavy weapon swung with great force is virtually impossible to self-inflict → almost always HOMICIDAL.', tag: '[UNIV]' }
  ],
  'MI-08': [
    { stem: 'Identify the type of wound — incised cuts seen across the palmar surface and web spaces of fingers in a struggle assault:', options: ['Defence wounds','Antemortem wound','Postmortem wound','Hesitation cuts'], answerIdx: 0, explain: 'Defence wounds — cuts on palmar surface (active type, grasping the weapon) or extensor forearm (passive type, shielding). Prove conscious resistance.', tag: '[NEET-PG 2022]' },
    { stem: 'Active defence wounds are typically located on the:', options: ['Extensor surface of forearm','Palmar surface of hand and fingers','Sole of foot','Anterior chest'], answerIdx: 1, explain: 'Active defence = victim grasps the weapon → cuts on PALMAR surface of hand / fingers / web spaces. Passive defence (forearm shielding) = extensor / dorsal surface.', tag: '[PG-Inspired]' },
    { stem: '"Nightstick fracture" of the ulna in an assault victim is an example of:', options: ['Active defence injury','Passive defence injury','Postmortem injury','Hesitation injury'], answerIdx: 1, explain: 'Passive defence — victim raises forearm to shield head/face → ulna shaft fractures (nightstick fracture). Extensor surface bruise + ulna # = classic.', tag: '[PG-Inspired]' }
  ],
  'MI-09': [
    { stem: 'In a SUICIDAL cut throat (right-handed person), the typical direction of the wound is:', options: ['Right (deep) → Left (shallow), horizontal','Left (deep) → Right (shallow), above-downward','Strictly horizontal at thyroid level','Vertical'], answerIdx: 1, explain: 'Right-handed suicidal cut throat: starts deep on LEFT side high on neck, runs downward to the right, ending shallow (tail). Often done facing a mirror.', tag: '[PG-Inspired]' },
    { stem: 'The MOST useful single feature differentiating homicidal from suicidal cut throat is:', options: ['Site (high vs low)','Depth uniformity','Defence wounds on hands / forearms','Direction of cut'], answerIdx: 2, explain: 'Defence wounds = pathognomonic of homicidal cut throat (victim resists). Suicide has hesitation cuts but NO defence wounds.', tag: '[PG-Inspired]' },
    { stem: 'Air embolism as a cause of death in cut throat is typically due to cutting of:', options: ['Common carotid','Internal jugular / external jugular vein','Trachea','Vagus nerve'], answerIdx: 1, explain: 'Air embolism occurs when negative intrathoracic pressure sucks air into open jugular veins (low pressure) — characteristic in cut-throat deaths.', tag: '[UNIV]' }
  ],
  'MI-10': [
    { stem: 'Postmortem wound differs from antemortem wound BEST by:', options: ['Gaps on incising','No clots','Absence of erythema and cellular changes','All of the above'], answerIdx: 2, explain: 'Absence of erythema (red zone) and cellular reaction (neutrophil/macrophage infiltrate) is the BEST distinguishing feature of postmortem wound. NEET-PG 2016 verbatim.', tag: '[NEET-PG 2016]' },
    { stem: 'The YELLOW colour of a bruise indicates a minimum age of:', options: ['6 hours','12 hours','18 hours','72 hours'], answerIdx: 2, explain: 'Yellow = bilirubin / haemosiderin accumulation → takes at least 18 hours to develop.', tag: '[PG-Inspired]' },
    { stem: 'Which biochemical marker is elevated within minutes in an antemortem wound and serves as an early vital reaction marker?', options: ['Cathepsin D','Histamine','Albumin','Glucose'], answerIdx: 1, explain: 'Histamine rises within minutes of injury (mast cell degranulation) → key early biochemical marker of vital reaction. Free histamine &gt;50% of total = AM.', tag: '[PG-Inspired]' },
    { stem: 'Granulation tissue (capillary buds + fibroblasts) in a healing wound typically appears at:', options: ['12-24 hours','24-48 hours','3-5 days','2 weeks'], answerIdx: 2, explain: 'Granulation tissue = 3-5 days post-injury. Earlier: neutrophils (0-6 h) → macrophages (12-24 h) → fibroblasts (24-72 h). Later: collagen (5-10 d), scar (&gt;2 wk).', tag: '[UNIV]' }
  ]

};

const DIFF_TABLES = [
  {
    id: 'DT-1', title: 'Abrasion vs Bruise vs Laceration vs Incised — 4-way Comparison', shortTitle: 'Blunt vs Sharp wounds',
    columns: ['Feature','Abrasion','Bruise (Contusion)','Laceration','Incised'],
    rows: [
      ['Force','Blunt (friction)','Blunt (impact)','Blunt (heavy)','Sharp'],
      ['Skin breach','Epidermis only','Skin INTACT','Full thickness, irregular','Full thickness, clean'],
      ['Margins','Raw, raised tags','—','Irregular, contused, abraded','Clean, sharp'],
      ['Tissue bridges','Absent','—','<strong>PRESENT</strong> ★','Absent'],
      ['Hair bulbs','Cut or crushed at edges','Intact','Crushed (intact)','Cut'],
      ['Bleeding','Minimal (lymph + ooze)','Internal extravasation','Less than incised','PROFUSE'],
      ['Bruising adjacent','Variable','Diffuse','Present','Absent'],
      ['Length vs depth','Surface only','—','Variable','Length &gt; depth'],
      ['Healing','No scar','Resolves by colour stages','SCAR','SCAR'],
      ['Forensic value','Pattern → weapon','Datable by colour','Foreign bodies, bone #','Direction of force']
    ],
    parentDiagrams: ['MI-01','MI-02','MI-03','MI-04','MI-05'],
    mcqs: [
      { stem: 'Which wound does NOT heal with a scar?', options: ['Abrasion','Laceration','Incised wound','Stab wound'], answerIdx: 0, explain: 'Abrasion (epidermal only) heals from basal layer regeneration — no scar. The other three breach dermis → scar.', tag: '[PG-Inspired]' },
      { stem: 'Tissue bridges across the wound floor are characteristic of:', options: ['Incised','Laceration','Stab','Cut throat'], answerIdx: 1, explain: 'Tissue bridges (vessels, nerves, fibres not cleanly cut) = laceration. Incised has clean margins, no bridges.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-2', title: 'Split Laceration vs Incised Wound', shortTitle: 'Split Lac vs Incised',
    columns: ['Feature','Split Laceration','Incised Wound'],
    rows: [
      ['Force','Blunt (over underlying bone)','Sharp cutting edge'],
      ['Margins on naked-eye','Looks clean linear gap','Clean linear gap'],
      ['Margins on close inspection','Bruised, abraded, swollen','Sharp, well-defined'],
      ['Tissue bridges','<strong>PRESENT</strong> across floor','ABSENT'],
      ['Hair bulbs at margins','<strong>Crushed</strong> (intact)','Cut'],
      ['Bruising adjacent','Present','Absent'],
      ['Foreign bodies in wound','Common (grit, hair)','Uncommon'],
      ['Typical sites','Scalp · eyebrow · shin · elbow · cheek (where bone is just under skin)','Any skin surface'],
      ['Bleeding','Less profuse (crushed vessels)','Profuse (clean cut vessels)'],
      ['Underlying fracture','Possible (bone splits with skin)','Rare']
    ],
    parentDiagrams: ['MI-04','MI-05'],
    mcqs: [
      { stem: 'A scalp wound is suspected to be split laceration rather than incised. The MOST reliable feature to confirm is:', options: ['Wound length','Tissue bridges across the floor + crushed hair bulbs','Bleeding pattern','Direction of cut'], answerIdx: 1, explain: 'Tissue bridges + crushed hair bulbs at margins = laceration. These persist even when the superficial gap looks "incised" (split lac).', tag: '[QBank-Inspired]' },
      { stem: 'Classic sites of split laceration include all EXCEPT:', options: ['Scalp','Eyebrow','Anterior abdomen','Shin'], answerIdx: 2, explain: 'Split lacs occur where bone is JUST under skin (scalp, eyebrow, shin, elbow, cheek, chin). Anterior abdomen has soft tissue beneath → produces stretch/crush lac instead.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-3', title: 'Stab Wound vs Incised Wound', shortTitle: 'Stab vs Incised',
    columns: ['Feature','Stab Wound','Incised Wound'],
    rows: [
      ['Mechanism','Pointed object THRUST into body','Sharp edge DRAWN across skin'],
      ['Length vs depth','<strong>Depth &gt; length</strong>','<strong>Length &gt; depth</strong>'],
      ['Surface wound','Small, gaping slit','Long, gaping cut'],
      ['Bleeding','May be relatively less externally; INTERNAL haemorrhage major','PROFUSE external'],
      ['Tract / depth','Deep tract often into cavity / viscera','Shallow (subcutaneous, rarely deeper)'],
      ['Direction','Reconstructed from tract angle','Tailing (drag-off) at one end'],
      ['Weapon clue','Length of wound ≈ blade width · depth ≈ blade length','Length / depth of cut'],
      ['Internal injury','Common (heart, lung, liver, vessels)','Uncommon'],
      ['Manner','Mostly HOMICIDAL · rarely suicidal (chest)','Mixed — hesitation cuts → suicide; defence wounds → homicide']
    ],
    parentDiagrams: ['MI-05','MI-06'],
    mcqs: [
      { stem: 'The defining dimensional difference between stab and incised wound is:', options: ['Stab is on chest, incised is on neck','Stab depth &gt; length; incised length &gt; depth','Stab bleeds more','Incised is always suicidal'], answerIdx: 1, explain: 'Stab = depth &gt; length (thrust). Incised = length &gt; depth (drawn across). This is the operational definition.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-4', title: 'Suicidal vs Homicidal Cut Throat', shortTitle: 'Suicidal vs Homicidal Cut Throat',
    columns: ['Feature','Suicidal','Homicidal'],
    rows: [
      ['Site on neck','<strong>HIGH</strong> (above thyroid cartilage)','<strong>LOW</strong> (at / below thyroid)'],
      ['Direction (right-handed)','L (deep) → R (shallow), above-downward','Horizontal, or L→R from behind'],
      ['Depth','Variable; deep at start, tailing at end','DEEP &amp; UNIFORM, single firm cut'],
      ['Hesitation cuts','<strong>PRESENT ★</strong> (pathognomonic)','ABSENT'],
      ['Defence wounds','ABSENT','<strong>PRESENT ★</strong> (pathognomonic)'],
      ['Weapon location','Found near body / in hand (sometimes cadaveric spasm)','Not at scene / thrown away / inconsistent'],
      ['Number of wounds','Usually one main + hesitation cuts','Often multiple deep'],
      ['Other injuries on body','Absent','Common (stabs, blunt trauma)'],
      ['Clothing','Collar loosened or removed; bathroom scene','Struggle marks, disarray'],
      ['Mirror / posture','Mirror present; head tilted back','Variable']
    ],
    parentDiagrams: ['MI-08','MI-09'],
    mcqs: [
      { stem: 'A neck wound is found with multiple parallel superficial cuts above the main deep wound, with the weapon in the victim\'s hand. The manner of death is:', options: ['Homicide','Suicide','Accident','Undetermined'], answerIdx: 1, explain: 'Hesitation cuts + weapon in hand + no defence wounds = SUICIDAL cut throat. Hesitation cuts are pathognomonic of suicide.', tag: '[QBank-Inspired]' },
      { stem: 'The MOST conclusive single feature pointing to HOMICIDAL cut throat is:', options: ['Site low on neck','Direction of cut','Defence wounds on hands / forearms','Depth of cut'], answerIdx: 2, explain: 'Defence wounds prove the victim was conscious and resisting — pathognomonic of homicide. Site/depth are supportive but defence wounds are decisive.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-5', title: 'Antemortem vs Postmortem Wounds', shortTitle: 'AM vs PM Wounds',
    columns: ['Feature','Antemortem','Postmortem'],
    rows: [
      ['Erythema (red zone)','PRESENT around margins','<strong>ABSENT</strong> ★'],
      ['Bleeding','Profuse, may spurt arterially','Sparse oozing only'],
      ['Clotting of blood','Blood CLOTS','Does NOT clot (PM fibrinolysis)'],
      ['Cellular infiltrate (histology)','Neutrophils → macrophages → fibroblasts','None'],
      ['Histamine at margins','↑ (within minutes)','Low / basal'],
      ['Serotonin','↑ at margins','Basal'],
      ['Free histamine &gt;50 %','Yes','No'],
      ['Granulation tissue','If &gt; 3 days','Never'],
      ['Scab formation','From 24 h','Never'],
      ['Vital reaction overall','PRESENT','ABSENT']
    ],
    parentDiagrams: ['MI-10'],
    mcqs: [
      { stem: 'Postmortem wound differs from antemortem wound BEST by:', options: ['Gaps on incising','No clots','Absence of erythema and cellular changes','All of the above'], answerIdx: 2, explain: 'NEET-PG 2016 verbatim — absence of erythema (red zone of inflammation) + cellular changes (neutrophil/macrophage infiltrate) is the best distinguishing feature.', tag: '[NEET-PG 2016]' }
    ]
  },
  {
    id: 'DT-6', title: 'Active vs Passive Defence Wounds', shortTitle: 'Active vs Passive Defence',
    columns: ['Feature','Active','Passive'],
    rows: [
      ['Mechanism','Victim GRASPS the weapon','Victim raises forearm to SHIELD head/face'],
      ['Site','PALMAR surface of hands/fingers · web spaces · volar wrist','EXTENSOR (dorsal) forearm · dorsum of hand · ulnar border'],
      ['Wound type','Incised / chop cuts','Bruises · cuts · fractures (ulna)'],
      ['Typical with','Sharp weapon (knife)','Blunt or sharp weapon (lathi, axe, stick)'],
      ['Classic finding','Cuts across palm or between fingers','Bruise + ulnar shaft # ("nightstick #")'],
      ['Vital reaction','Always ANTEMORTEM','Always ANTEMORTEM']
    ],
    parentDiagrams: ['MI-08'],
    mcqs: [
      { stem: '"Nightstick fracture" of the ulna sustained while shielding the head is:', options: ['Active defence wound','Passive defence wound','Postmortem injury','Hesitation injury'], answerIdx: 1, explain: 'Passive defence = victim raises forearm to shield head → blow to outer/extensor forearm → ulnar shaft fracture (nightstick #).', tag: '[PG-Inspired]' }
    ]
  }
];

const SUBJ = [
  {
    id: 'SAQ-9.1', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Describe wounds caused by sharp and heavy weapons — their characteristics, nature, and relevant laws. (Chop Wound)',
    answer: `<h4>Definition</h4>
<p>A <strong>chop wound</strong> is a wound produced by a heavy weapon with a sharp cutting edge, swung with considerable force. It is a HYBRID injury — combining features of an incised wound (sharp clean margins) with features of a laceration (depth and bone involvement).</p>
<h4>Weapons</h4>
<ul><li><strong>Axe</strong> — wood-cutter\'s, butcher\'s, hatchet</li>
<li><strong>Machete / chopper</strong> (gandasa, kulhari)</li>
<li><strong>Sword</strong> (talwar)</li>
<li><strong>Sickle</strong> — curved agricultural blade</li>
<li><strong>Heavy knife / cleaver</strong></li></ul>
<h4>Characteristic Features (Cardinal)</h4>
<ol><li><strong>Margins:</strong> relatively CLEAN at superficial level (sharp edge), may be slightly bruised/contused at periphery</li>
<li><strong>Depth:</strong> DEEP — extends to deeper tissue, often involves muscle and bone</li>
<li><strong>Bone signature:</strong> CHARACTERISTIC — clean linear cut in the bone with a chip / wedge fracture nearby (key forensic finding)</li>
<li><strong>Width:</strong> gaping; tissue may be partially severed (limbs, fingers, scalp flaps)</li>
<li><strong>Bleeding:</strong> PROFUSE — major arteries severed; haemorrhagic shock is common cause of death</li>
<li><strong>Hair bulbs:</strong> may be CUT (like incised) at margins — DD from split laceration</li>
<li><strong>Tissue bridges:</strong> ABSENT — vessels and fibres cleanly severed</li></ol>
<h4>Typical Sites</h4>
<ul><li><strong>Head and neck</strong> — most common; skull fracture, intracranial haemorrhage</li>
<li><strong>Hands &amp; forearms</strong> — active defence wounds against the weapon</li>
<li><strong>Shoulders / clavicle</strong> — common attack target</li>
<li><strong>Limbs</strong> — traumatic amputation possible</li></ul>
<h4>Causes of Death</h4>
<ul><li>Haemorrhagic shock — main cause</li>
<li>Direct brain damage (skull chop)</li>
<li>Air embolism (large vein cut)</li>
<li>Sepsis if survives long enough</li></ul>
<h4>Nature of Injury &amp; Medicolegal Importance</h4>
<ul><li>Manner of death: ALMOST ALWAYS HOMICIDAL — sustained swing of a heavy weapon is virtually impossible to self-inflict.</li>
<li>Defence wounds (forearms, hands) frequently present — proves conscious resistance.</li>
<li>Bone marks can identify the weapon edge — preserve bone specimen for tool-mark analysis.</li>
<li>Multiple chops often present — frenzied attack or group assault.</li>
<li>Trace evidence — paint, fibre, rust from blade may transfer to wound.</li></ul>
<h4>Relevant Laws (BNS &amp; IPC equivalents)</h4>
<ul><li><strong>BNS 117</strong> (≡ IPC 320) — voluntarily causing grievous hurt</li>
<li><strong>BNS 118</strong> (≡ IPC 324 / 326) — by means of dangerous weapon</li>
<li><strong>BNS 100/101</strong> (≡ IPC 299 / 300 / 302) — culpable homicide / murder if fatal</li>
<li><strong>BNS 103</strong> (≡ IPC 302) — punishment for murder</li></ul>
<h4>Reporting Points</h4>
<p>Describe site, dimensions (length × width × depth), shape, margins, floor, bone involvement, surrounding skin, direction, and underlying organ damage. Photograph with scale. Preserve any tissue / bone specimen showing weapon mark.</p>`,
    sources: ['MI-07 (Chop Wound)'],
    jumpToDiagram: 'MI-07'
  },
  {
    id: 'SAQ-9.2', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'A 23-year-old man was assaulted with a knife and suffered incised wounds to wrist and palm. How will you describe the injury in your report? Justify the nature of injury and the law applicable.',
    answer: `<h4>Approach to the Case</h4>
<p>This is a case of <strong>sharp-force injury</strong> (knife assault) producing <strong>incised wounds</strong> on the wrist and palm. The location is highly suggestive of <strong>active defence wounds</strong> — sustained by the victim while warding off the attack.</p>
<h4>Format of Injury Description (in the MLC / medical report)</h4>
<ol><li><strong>Site</strong> — exact anatomical location (e.g., "transverse incised wound across volar surface of right wrist, 2 cm above the wrist crease")</li>
<li><strong>Dimensions</strong> — length × width × depth (cm)</li>
<li><strong>Shape</strong> — linear / curved / irregular</li>
<li><strong>Margins</strong> — clean / sharp / well-defined / everted / inverted</li>
<li><strong>Edges</strong> — abraded or bruised? (incised = clean)</li>
<li><strong>Direction</strong> — oblique, horizontal · deep end vs shallow end (tailing)</li>
<li><strong>Floor / depth</strong> — structures cut (tendons, vessels, nerves)</li>
<li><strong>Surrounding tissue</strong> — bruising present? absent?</li>
<li><strong>Bleeding</strong> — active / controlled</li>
<li><strong>Vital reaction</strong> — erythema, swelling = antemortem</li>
<li><strong>Probable weapon</strong> — sharp-edged single / double-edged</li>
<li><strong>Time of injury</strong> — by appearance + history</li></ol>
<h4>Features of Incised Wound</h4>
<ul><li>Length &gt; depth</li>
<li>Clean, sharp margins · no bruising · no abrasion</li>
<li>No tissue bridges; hair bulbs cleanly cut</li>
<li>Bleeding profuse (vessels cannot retract)</li>
<li>Tailing at one end indicates direction of stroke</li></ul>
<h4>Defence Wounds (★ key in this case)</h4>
<p>Cuts on the <strong>palmar surface and palmar wrist</strong> indicate <strong>ACTIVE defence wounds</strong> — the victim grasped the knife / assailant\'s arm to disarm. Their presence:</p>
<ul><li>Proves victim was CONSCIOUS and RESISTING during the attack</li>
<li>Strongly argues for HOMICIDAL nature (rules out self-inflicted wrist injury — those have hesitation cuts on volar wrist, no palm cuts)</li>
<li>Always ANTEMORTEM (active resistance not possible after death)</li></ul>
<h4>Nature of Injury</h4>
<p>Depending on depth and structures cut:</p>
<ul><li><strong>Simple hurt</strong> — superficial cuts (BNS 115 ≡ IPC 321)</li>
<li><strong>Grievous hurt</strong> if any of the 8 BNS 116(2) clauses are met — fracture, privation of limb power, hurt &gt;20 days disability, etc.</li>
<li>If tendons, median/ulnar nerves are cut → "impairing the powers of any limb / joint" → GRIEVOUS HURT</li></ul>
<h4>Applicable Sections of Law</h4>
<ul><li><strong>BNS 115</strong> (≡ IPC 321) — voluntarily causing hurt</li>
<li><strong>BNS 117</strong> (≡ IPC 320) — grievous hurt (if applicable)</li>
<li><strong>BNS 118</strong> (≡ IPC 324 / 326) — voluntarily causing hurt by dangerous weapon — <strong>knife is a "dangerous weapon"</strong> as it is likely to cause death</li>
<li>If intent to kill present → <strong>BNS 109</strong> (attempt to murder; ≡ IPC 307)</li></ul>
<h4>Additional Reporting Duties</h4>
<ul><li>This is a Medicolegal Case (MLC) — police intimation mandatory</li>
<li>Preserve clothing for trace evidence</li>
<li>Photograph wounds with scale</li>
<li>Document defence wounds on palms separately — they are decisive for homicide argument</li></ul>`,
    sources: ['MI-05 (Incised)','MI-08 (Defence Wounds)','DT-6'],
    jumpToDiagram: 'MI-08'
  },
  {
    id: 'SAQ-9.3', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Differentiate suicidal and homicidal cut throat.',
    answer: `<h4>Definition</h4>
<p>A <strong>cut throat</strong> is an incised wound of the neck. Differentiation between suicidal and homicidal cut throat rests on <strong>six cardinal features</strong>.</p>
<h4>Six Cardinal Features — Comparison</h4>
<table><tr><th>Feature</th><th>Suicidal</th><th>Homicidal</th></tr>
<tr><td><strong>1. Site on neck</strong></td><td>HIGH (above thyroid cartilage)</td><td>LOW (at / below thyroid)</td></tr>
<tr><td><strong>2. Direction</strong> (R-handed)</td><td>L (deep) → R (shallow), above-downward</td><td>Horizontal; or L→R if attacker behind</td></tr>
<tr><td><strong>3. Depth</strong></td><td>Variable — deep at start, tailing at end</td><td>DEEP &amp; UNIFORM, single firm cut</td></tr>
<tr><td><strong>4. Hesitation cuts</strong></td><td><strong>PRESENT ★</strong> (pathognomonic)</td><td>ABSENT</td></tr>
<tr><td><strong>5. Defence wounds</strong></td><td>ABSENT</td><td><strong>PRESENT ★</strong> (pathognomonic)</td></tr>
<tr><td><strong>6. Weapon</strong></td><td>Found near body / in hand (cadaveric spasm possible)</td><td>Not at scene · or thrown · inconsistent with injury</td></tr></table>
<h4>Other Differentiating Points</h4>
<ul><li><strong>Number of wounds:</strong> usually 1 main + hesitation cuts in suicide; often multiple deep in homicide</li>
<li><strong>Other body injuries:</strong> absent in suicide; common in homicide (stabs, blunt trauma)</li>
<li><strong>Clothing:</strong> collar loosened/removed in suicide; struggle marks in homicide</li>
<li><strong>Scene:</strong> mirror present, bathroom basin common in suicide; disturbed in homicide</li>
<li><strong>Blood pattern:</strong> "drip pattern" downward + onto front of victim in suicide; spatter + struggle pattern in homicide</li></ul>
<h4>Structures Cut (Layer-wise)</h4>
<ul><li>Skin → platysma → superficial fascia</li>
<li>Sternomastoid + strap muscles</li>
<li>External jugular → anterior jugular → (deeper) common carotid + internal jugular</li>
<li>Trachea / larynx (may cause air embolism, aspirated blood, asphyxia)</li>
<li>Vagus, recurrent laryngeal, cervical sympathetic nerves</li></ul>
<h4>Causes of Death</h4>
<ol><li>Haemorrhage from large vessels — most common</li>
<li>Air embolism via cut jugular vein</li>
<li>Aspiration of blood / asphyxia (if larynx open)</li>
<li>Shock</li></ol>
<h4>Mirror Reconstruction (Suicidal)</h4>
<p>A right-handed suicidal victim typically faces a mirror, tilts head back, and makes a left-to-right downward cut. Hesitation cuts above and below the main wound are pathognomonic. The bathroom basin scene with weapon in hand is classic.</p>
<h4>Legal Sections</h4>
<ul><li><strong>Suicide</strong> — attempted suicide is no longer punishable per Mental Healthcare Act 2017; abetment of suicide under BNS 108 (≡ IPC 306)</li>
<li><strong>Homicide</strong> — BNS 101/103 (≡ IPC 302) murder; BNS 100 (≡ IPC 299/304) culpable homicide</li>
<li>BNS 117/118 — grievous hurt by dangerous weapon if non-fatal</li></ul>`,
    sources: ['MI-05 (Incised)','MI-08 (Defence Wounds)','MI-09 (Cut Throat)','DT-4'],
    jumpToDiagram: 'MI-09'
  },
  {
    id: 'SAQ-9.4', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Differentiate split laceration and incised wound.',
    answer: `<h4>Why This Differentiation Matters</h4>
<p>A <strong>split laceration</strong> can superficially look like an incised wound on naked-eye examination — a clean linear gap. Differentiating them correctly determines whether a blunt or sharp weapon was used and influences the entire case interpretation. Common in scalp / forehead / shin trauma.</p>
<h4>Definitions</h4>
<ul><li><strong>Split laceration:</strong> tear of skin caused by blunt force compressing skin against an underlying BONE → skin splits along a line.</li>
<li><strong>Incised wound:</strong> clean cut produced by drawing a sharp-edged object across the skin.</li></ul>
<h4>Point-by-Point Comparison</h4>
<table><tr><th>Feature</th><th>Split Laceration</th><th>Incised Wound</th></tr>
<tr><td><strong>Causing force</strong></td><td>BLUNT, over underlying bone</td><td>SHARP cutting edge</td></tr>
<tr><td><strong>Margins (naked eye)</strong></td><td>Appears clean / linear</td><td>Clean linear gap</td></tr>
<tr><td><strong>Margins (close inspection)</strong></td><td>BRUISED, ABRADED, swollen</td><td>Sharp, well-defined, no bruising / abrasion</td></tr>
<tr><td><strong>Tissue bridges</strong></td><td>PRESENT ★ across floor</td><td>ABSENT</td></tr>
<tr><td><strong>Hair bulbs at margins</strong></td><td>CRUSHED (intact)</td><td>CUT</td></tr>
<tr><td><strong>Bruising of adjacent skin</strong></td><td>PRESENT</td><td>ABSENT</td></tr>
<tr><td><strong>Foreign bodies in wound</strong></td><td>Common (grit, hair, dirt)</td><td>Uncommon</td></tr>
<tr><td><strong>Bleeding</strong></td><td>LESS profuse (crushed vessels)</td><td>PROFUSE (clean cut vessels)</td></tr>
<tr><td><strong>Underlying fracture</strong></td><td>POSSIBLE (bone splits with skin)</td><td>Rare</td></tr>
<tr><td><strong>Typical sites</strong></td><td>Scalp · eyebrow · shin · elbow · cheek · chin</td><td>Any skin surface</td></tr>
<tr><td><strong>Likely weapon</strong></td><td>Stick, fist, ground (fall), brick, club</td><td>Knife, blade, glass, razor</td></tr></table>
<h4>Anatomical Rule</h4>
<p>Split lacerations occur where bone lies <strong>just beneath the skin</strong> — there is no soft tissue cushion to absorb the impact, so the skin splits over the underlying bone.</p>
<h4>Why "Looks Incised"</h4>
<p>The crushed dermis tears along a relatively straight line — the gap on the surface looks linear and clean. Close inspection of the floor (tissue bridges) and the margins (bruising, abrasion, crushed hair bulbs) reveals the true mechanism.</p>
<h4>Medicolegal Relevance</h4>
<ul><li>Determines weapon: BLUNT (split lac) vs SHARP (incised) — central to investigation</li>
<li>Misidentification can mislead an inquest — examiner must always look for tissue bridges and abrasion of margins</li>
<li>Suspect a split lac when injury is over scalp / eyebrow / shin and the assault history involves a blunt object</li>
<li>Always request X-ray when laceration overlies bone — concomitant fracture is common</li></ul>`,
    sources: ['MI-04 (Laceration)','MI-05 (Incised)','DT-2'],
    jumpToDiagram: 'MI-04'
  },
  {
    id: 'SAQ-9.5', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Defence wounds — define, types, sites, and medicolegal importance.',
    answer: `<h4>Definition</h4>
<p><strong>Defence wounds</strong> are injuries sustained by a victim while trying to ward off an attack. They prove the victim was CONSCIOUS, ALIVE, and ACTIVELY RESISTING at the time of assault.</p>
<h4>Two Types</h4>
<h5>1. ACTIVE Defence Wounds</h5>
<ul><li><strong>Mechanism:</strong> Victim GRASPS the weapon attempting to disarm the assailant</li>
<li><strong>Sites:</strong> PALMAR surface of hands &amp; fingers · web spaces between fingers · volar wrist</li>
<li><strong>Wound type:</strong> Incised or chop cuts — clean cuts across palm / between fingers</li>
<li><strong>Weapon:</strong> Sharp (knife, machete)</li>
<li><strong>Classic finding:</strong> Knife-handle-grasp wounds on palm; clean cuts between fingers</li></ul>
<h5>2. PASSIVE Defence Wounds</h5>
<ul><li><strong>Mechanism:</strong> Victim raises forearm to SHIELD head / face (instinctive reflex)</li>
<li><strong>Sites:</strong> EXTENSOR (dorsal) surface of forearm · dorsum of hand · ulnar border of forearm</li>
<li><strong>Wound type:</strong> Cuts · bruises · lacerations · fractures (ulna shaft — "nightstick fracture")</li>
<li><strong>Weapon:</strong> Blunt (lathi, stick) or sharp</li>
<li><strong>Classic finding:</strong> Bruise + ulna shaft fracture on outer forearm from blow with stick</li></ul>
<h4>Mnemonic</h4>
<p><strong>"GraB or ShieLD"</strong> → Grab (palmar / active) · Shield (extensor / passive).</p>
<h4>Medicolegal Importance</h4>
<ol><li><strong>Prove victim was CONSCIOUS &amp; RESISTING</strong> — argues against surprise / immediate fatal blow</li>
<li><strong>Prove HOMICIDAL nature</strong> — defence wounds are pathognomonic of homicide</li>
<li><strong>Rule out SUICIDE</strong> — e.g., cut throat with defence wounds = HOMICIDAL</li>
<li><strong>Always ANTEMORTEM</strong> — active resistance is not possible after death</li>
<li><strong>Indicate the victim was NOT surprised from behind</strong> or unconscious from the start</li>
<li><strong>Trace evidence on hands</strong> — DNA, fibres, blood, fragments from the attacker / weapon — IMPORTANT to collect and preserve</li>
<li><strong>Forensic photography</strong> — always photograph with scale</li></ol>
<h4>Significance of ABSENCE of Defence Wounds</h4>
<p>Absence does NOT prove suicide. Possible explanations:</p>
<ul><li>Surprise attack — victim had no time to react</li>
<li>Instant fatal blow — death before resistance was possible</li>
<li>Intoxication / drug-induced obtundation</li>
<li>Restraint by multiple assailants</li>
<li>Prior asphyxia / sedation / unconsciousness</li>
<li>Suicide (where there is no second person)</li></ul>
<h4>Examination Pointers</h4>
<ul><li>Always examine BOTH hands &amp; both forearms — palms AND backs</li>
<li>Compare with patient history of attack direction</li>
<li>Document each wound individually with site, dimensions, depth, type</li>
<li>Preserve fingernail scrapings — trace evidence from attacker</li></ul>
<h4>NEET-PG 2022 PYQ Reference</h4>
<p>An image-based question asking "Identify the type of wound" with incised wounds across palms and fingers — answer: <strong>Defence wounds</strong>.</p>`,
    sources: ['MI-08 (Defence Wounds)','DT-6'],
    jumpToDiagram: 'MI-08'
  },
  {
    id: 'LAQ-9.1', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank',
    question: 'Classify mechanical injuries. Describe stab wounds in detail and discuss their medicolegal importance.',
    answer: `<h4>Part A — Classification of Mechanical Injuries</h4>
<p>Mechanical injuries are caused by physical force and are classified by the nature of the causing agent:</p>
<h5>1. Blunt Force Injuries (Mnemonic "ACL")</h5>
<ul><li><strong>Abrasion</strong> — superficial, epidermis only (scratch, graze, pressure, patterned, imprint)</li>
<li><strong>Contusion (Bruise)</strong> — bleeding under intact skin (intradermal, subcutaneous, intramuscular, deep/visceral)</li>
<li><strong>Laceration</strong> — torn skin with bridges (split, stretch, crush, avulsion, tear)</li></ul>
<h5>2. Sharp Force Injuries (Mnemonic "ISC")</h5>
<ul><li><strong>Incised wound</strong> — length &gt; depth, clean margins</li>
<li><strong>Stab / Punctured</strong> — depth &gt; length, pointed object</li>
<li><strong>Chop wound</strong> — sharp + heavy hybrid (axe, machete, sword)</li></ul>
<h5>3. Firearm &amp; Blast Injuries</h5>
<p>Detailed in Ch 10 — bullet wounds, shotgun pellet patterns, blast injuries.</p>
<h5>4. Miscellaneous</h5>
<p>Thermal (burns / scalds / frostbite, Ch 14) · Electrical (Ch 14) · Chemical (Ch 34) · Radiation · Pressure (barotrauma).</p>
<hr/>
<h4>Part B — STAB WOUND in Detail</h4>
<h5>Definition</h5>
<p>A wound produced when a pointed object is thrust into the body. Cardinal feature: <strong>DEPTH &gt; length / width</strong>.</p>
<h5>Types (by tract)</h5>
<ul><li><strong>Penetrating:</strong> blade enters body cavity but does NOT exit</li>
<li><strong>Perforating:</strong> blade passes THROUGH with entry + exit</li>
<li><strong>Punctured:</strong> small surface with deep narrow tract (needle, ice-pick)</li></ul>
<h5>Shape — Indicates Blade Type</h5>
<ul><li><strong>Single-edged knife</strong> → BOAT / WEDGE — one sharp end + one blunt end (back of blade)</li>
<li><strong>Double-edged knife (dagger)</strong> → SPINDLE / OVAL — both ends sharp/pointed</li>
<li><strong>Round / needle</strong> → CIRCULAR puncture</li>
<li><strong>Multi-edged / triangular</strong> → reproduces blade cross-section</li></ul>
<h5>Dimensions → Weapon Clues</h5>
<ul><li>Length of surface wound ≈ WIDTH of blade at insertion (slightly less due to skin recoil)</li>
<li>Depth of tract ≈ LENGTH of blade (max insertion)</li>
<li>★ Tract DEPTH may EXCEED blade length in soft tissue (abdomen, breast) — tissue compresses inward against blade. Rarely falls short.</li></ul>
<h5>Examination of Tract on Autopsy</h5>
<ul><li>Direction — angle &amp; layers pierced indicate stab direction</li>
<li>Structures injured — heart, lung, liver, kidney, great vessels</li>
<li>Internal haemorrhage · pneumothorax · haemothorax · cardiac tamponade</li>
<li>Probe (gently) along tract; photograph in situ</li></ul>
<hr/>
<h4>Part C — Medicolegal Importance of Stab Wounds</h4>
<h5>Manner of Death</h5>
<ul><li><strong>HOMICIDAL</strong> — most common scenario</li>
<li><strong>Suicidal</strong> — rare; typical site is precordium / epigastrium; clothing often partly removed; single wound</li>
<li><strong>Accidental</strong> — uncommon (falling on broken glass, industrial accident)</li></ul>
<h5>Diagnostic Pointers for HOMICIDE</h5>
<ul><li>Multiple stab wounds</li>
<li>Defence wounds on palms/forearms (★ key)</li>
<li>No hesitation marks</li>
<li>Weapon not at scene / inconsistent with injury</li>
<li>Site away from "suicide-favoured" zones</li></ul>
<h5>Diagnostic Pointers for SUICIDE</h5>
<ul><li>Single stab in precordium / epigastrium</li>
<li>Clothing removed / loosened over the area</li>
<li>Hesitation marks (multiple shallow stabs near main wound)</li>
<li>Weapon in victim\'s hand</li>
<li>No defence wounds</li></ul>
<h5>Cause of Death</h5>
<ul><li>Haemorrhagic shock (most common)</li>
<li>Cardiac tamponade (precordial stab)</li>
<li>Pneumothorax / haemothorax (chest stab)</li>
<li>Air embolism (vein injury)</li>
<li>Peritonitis / sepsis (delayed)</li></ul>
<h5>Forensic Reporting Points</h5>
<ul><li>Document each wound separately — site, dimensions, shape, margins, depth, direction</li>
<li>Photograph with scale</li>
<li>Preserve clothing for trace evidence (fibres, fluids)</li>
<li>Match wound to suspected weapon — length vs blade width, shape vs blade cross-section</li>
<li>Document defence wounds separately</li></ul>
<h5>Applicable Sections (BNS &amp; IPC equivalents)</h5>
<ul><li><strong>BNS 115</strong> (≡ IPC 321) — voluntarily causing hurt</li>
<li><strong>BNS 117</strong> (≡ IPC 320) — grievous hurt</li>
<li><strong>BNS 118</strong> (≡ IPC 324 / 326) — hurt by dangerous weapon (knife)</li>
<li><strong>BNS 109</strong> (≡ IPC 307) — attempt to murder</li>
<li><strong>BNS 101 / 103</strong> (≡ IPC 300 / 302) — murder if fatal</li>
<li><strong>BNS 100</strong> (≡ IPC 299 / 304) — culpable homicide not amounting to murder</li></ul>`,
    sources: ['MI-01 (Classification)','MI-06 (Stab Wound)','DT-3'],
    jumpToDiagram: 'MI-06'
  },
  {
    id: 'LAQ-9.2', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank',
    question: 'Classify mechanical injuries. Describe contusions in detail — types, ageing, and medicolegal importance.',
    answer: `<h4>Part A — Classification of Mechanical Injuries</h4>
<p>Mechanical injuries are produced by physical force:</p>
<h5>1. Blunt force injuries (ACL)</h5>
<p>Abrasion (epidermal) · Contusion (bleeding into intact skin) · Laceration (tear with bridges).</p>
<h5>2. Sharp force injuries (ISC)</h5>
<p>Incised (length &gt; depth) · Stab (depth &gt; length) · Chop (sharp + heavy hybrid).</p>
<h5>3. Firearm &amp; blast injuries</h5>
<p>Bullet, pellet, blast injuries (Ch 10).</p>
<h5>4. Miscellaneous</h5>
<p>Thermal · electrical · chemical · radiation · pressure (Ch 14, Ch 34).</p>
<hr/>
<h4>Part B — CONTUSION (BRUISE) in Detail</h4>
<h5>Definition</h5>
<p>A <strong>contusion</strong> is the effusion of blood into tissues from rupture of small blood vessels (capillaries, venules) caused by blunt force, with the <strong>SKIN remaining INTACT</strong>. Develops &amp; resolves through characteristic colour stages.</p>
<h5>Mechanism</h5>
<p>Blunt force ruptures small vessels in dermis / subcutaneous / muscle → blood leaks into tissue spaces → bruise visible through intact skin.</p>
<h5>Types of Contusion (by depth)</h5>
<table><tr><th>Type</th><th>Depth</th><th>Features</th></tr>
<tr><td><strong>1. Intradermal</strong></td><td>Within dermis</td><td>Sharp margins · often PATTERNED (whip, belt, palm) · reproduces weapon shape</td></tr>
<tr><td><strong>2. Subcutaneous</strong></td><td>Subcutaneous fat</td><td>MOST COMMON · diffuse margins · may migrate</td></tr>
<tr><td><strong>3. Intramuscular</strong></td><td>Muscle</td><td>May NOT show on surface for hours-days (★ pitfall)</td></tr>
<tr><td><strong>4. Deep / visceral</strong></td><td>Solid organs (liver, spleen, kidney, brain, heart)</td><td>Internal haemorrhage; may cause death without external signs</td></tr></table>
<h5>Ageing of Bruise by Colour ("RBGY" mnemonic)</h5>
<table><tr><th>Time</th><th>Colour</th><th>Pigment</th></tr>
<tr><td>0-2 days</td><td><strong>RED → reddish-blue</strong></td><td>Extravasated oxyhaemoglobin</td></tr>
<tr><td>2-5 days</td><td><strong>BLUE → dark purple</strong></td><td>Deoxygenated Hb</td></tr>
<tr><td>5-7 days</td><td><strong>GREEN</strong></td><td>Biliverdin (from Hb)</td></tr>
<tr><td>7-10 days</td><td><strong>YELLOW</strong></td><td>Bilirubin · haemosiderin</td></tr>
<tr><td>10-14 days</td><td>Fading → normal skin</td><td>—</td></tr></table>
<p>★ <strong>Yellow colour</strong> proves bruise is at least <strong>18 hours old</strong> — bilirubin needs time to accumulate. Caveat: ageing is approximate, varies by depth, individual, site, age, anti-coagulant use.</p>
<h5>Ectopic / Migrated Bruise</h5>
<p>Blood from deep bruise tracks along fascial planes by gravity → surfaces at a site distant from impact. <strong>Classic:</strong> a blow to the forehead may surface as a "black eye" (peri-orbital bruise) hours later.</p>
<h5>Pseudo-bruise (DD with PM Lividity)</h5>
<p>Postmortem hypostatic lividity in dependent parts can mimic a bruise. Distinguish on incision:</p>
<ul><li><strong>Bruise:</strong> blood extravasated INTO tissues — cannot be washed out</li>
<li><strong>Lividity:</strong> blood remains within VESSELS — washes out with water</li>
<li>Microscopy + biochemistry of vital reaction confirms true bruise</li></ul>
<h5>Battered Baby Syndrome (★ NEET-PG 2019)</h5>
<p>Multiple bruises in <strong>different stages of colour healing</strong> in an infant (red, blue, green, yellow simultaneously) → repeated trauma at different times = <strong>pathognomonic</strong>. Associated findings: multiple fractures of different ages on X-ray; retinal haemorrhages; subdural haematoma (shaken baby); failure to thrive; behavioural withdrawal.</p>
<hr/>
<h4>Part C — Medicolegal Importance</h4>
<ol><li><strong>Indicates blunt force assault</strong></li>
<li><strong>Patterned (intradermal) bruise</strong> may IDENTIFY the weapon — palm imprint, knuckle marks, belt buckle, tyre tread</li>
<li><strong>Age dating</strong> — colour stages help estimate when injury was inflicted (RBGY)</li>
<li><strong>Battered baby syndrome</strong> — bruises of DIFFERENT ages = pathognomonic of child abuse</li>
<li><strong>Hidden internal injury</strong> — external bruise may not reflect severity of internal damage; especially in elderly, intoxicated</li>
<li><strong>Drug history</strong> — anti-coagulants, bleeding diathesis, advanced age increase bruise size disproportionately</li>
<li><strong>Sexual offences</strong> — fingertip / grip-pattern bruises on thighs, breasts, arms</li>
<li><strong>Restraint marks</strong> — bruising over wrists, ankles in homicide</li></ol>
<h5>Statutory Pegs</h5>
<ul><li>BNS 115 (≡ IPC 321) — voluntarily causing hurt</li>
<li>BNS 117 (≡ IPC 320) — grievous hurt</li>
<li>BNS 118 (≡ IPC 324 / 326) — hurt by dangerous means</li>
<li>POCSO Act / Juvenile Justice Act for battered baby</li></ul>`,
    sources: ['MI-01 (Classification)','MI-03 (Contusion)'],
    jumpToDiagram: 'MI-03'
  }
];

return {
  chapterNumber: 9,
  chapterTitle: 'Mechanical Injury',
  prereqs: [
    { term: 'Injury (BNS 116)', meaning: 'Any harm whatever illegally caused to any person, in body, mind, reputation, or property. Equivalent to IPC 44.' },
    { term: 'Hurt (BNS 114)', meaning: 'Bodily pain, disease, or infirmity caused to any person. Equivalent to IPC 319.' },
    { term: 'Grievous hurt (BNS 116(2))', meaning: '8 enumerated categories — emasculation, privation of sight/hearing/limb, impairing limb power, permanent disfiguration, fracture/dislocation, hurt &gt;20 d disability, acid-attack death.' },
    { term: 'Mechanical injury', meaning: 'Injury produced by physical force — blunt, sharp, firearm, or hybrid.' },
    { term: 'Abrasion', meaning: 'Superficial wound involving epidermis only; heals without a scar.' },
    { term: 'Contusion (Bruise)', meaning: 'Effusion of blood into tissues from ruptured small vessels under intact skin.' },
    { term: 'Laceration', meaning: 'Tear of skin and soft tissue by blunt force; has irregular margins and tissue bridges.' },
    { term: 'Incised wound', meaning: 'Clean cut by sharp edge; length &gt; depth; clean margins; no tissue bridges.' },
    { term: 'Stab wound', meaning: 'Wound produced by thrusting a pointed object; depth &gt; length.' },
    { term: 'Chop wound', meaning: 'Hybrid wound — sharp + heavy weapon (axe, machete); deep, often involves bone.' },
    { term: 'Defence wound', meaning: 'Wound sustained while warding off attack; proves conscious resistance; always antemortem.' },
    { term: 'Hesitation cut', meaning: 'Small superficial parallel cuts alongside a main deep cut; pathognomonic of suicide.' },
    { term: 'Vital reaction', meaning: 'Circulatory + cellular response (erythema, bleeding, clot, inflammation) that proves wound is antemortem.' },
    { term: 'Tissue bridges', meaning: 'Strands of unsevered tissue (vessels, nerves, fibres) crossing the floor of a laceration; key DD vs incised.' },
    { term: 'Battered baby syndrome', meaning: 'Repeated child abuse with bruises &amp; fractures of different ages (Caffey\'s syndrome / NAI).' }
  ],
  diagrams: [
    { id: 'MI-01', title: 'Mechanical Injury — Classification', shortTitle: 'Classification', svg: SVG_MI01,
      prereqs: [{term:'Injury (BNS 116)',meaning:'Any harm illegally caused.'},{term:'Hurt (BNS 114)',meaning:'Bodily pain, disease or infirmity.'},{term:'Grievous hurt',meaning:'8 enumerated categories in BNS 116(2) / IPC 320.'},{term:'Blunt vs Sharp',meaning:'Two main subgroups of mechanical injury based on the causing agent\'s edge.'}],
      nodes: nodeList(['mi-injury-definition','mi-blunt-group','mi-sharp-group','mi-firearm-group','mi-misc-group']),
      mcqs: MCQS['MI-01']
    },
    { id: 'MI-02', title: 'Abrasion — Types, Features &amp; Ageing', shortTitle: 'Abrasion', svg: SVG_MI02,
      prereqs: [{term:'Epidermis',meaning:'Outermost layer of skin — regenerates from basal layer.'},{term:'Tag direction',meaning:'Epidermal tag pile-up at the FAR end of an abrasion indicates direction of force.'},{term:'Parchmentisation',meaning:'Drying + shrinkage of compressed dermis producing dark leathery mark.'},{term:'Patterned abrasion',meaning:'Reproduces the shape of the causing agent — highest forensic value.'}],
      nodes: nodeList(['abrasion-definition','abrasion-scratch','abrasion-graze','abrasion-pressure','abrasion-patterned','abrasion-imprint','abrasion-age','abrasion-medicolegal']),
      mcqs: MCQS['MI-02']
    },
    { id: 'MI-03', title: 'Contusion (Bruise) — Types, Age &amp; Pitfalls', shortTitle: 'Contusion', svg: SVG_MI03,
      prereqs: [{term:'Extravasation',meaning:'Leakage of blood out of vessels into tissue.'},{term:'Biliverdin',meaning:'Green pigment from Hb breakdown — bruise turns green at 5-7 days.'},{term:'Bilirubin',meaning:'Yellow pigment — bruise turns yellow ≥ 18 hours.'},{term:'Ectopic bruise',meaning:'Bruise that migrates to a distant site by gravity along fascial planes.'},{term:'PM lividity',meaning:'Hypostatic blood pooling in dependent parts after death — pseudo-bruise DD.'}],
      nodes: nodeList(['contusion-definition','contusion-intradermal','contusion-subcutaneous','contusion-intramuscular','contusion-deep','contusion-age','contusion-ectopic','contusion-pseudo','contusion-battered']),
      mcqs: MCQS['MI-03']
    },
    { id: 'MI-04', title: 'Laceration — 5 Types &amp; Cardinal Features', shortTitle: 'Laceration', svg: SVG_MI04,
      prereqs: [{term:'Tissue bridges',meaning:'Strands of unsevered tissue (vessels, nerves, fibres) crossing the wound floor — cardinal sign of laceration.'},{term:'Crushed hair bulbs',meaning:'Hair bulbs at margins are crushed (intact) in laceration; cut in incised wound.'},{term:'Split laceration',meaning:'Skin compressed against underlying bone splits — looks incised but has bridges.'},{term:'Secondary intention healing',meaning:'Wound healing with granulation + scar formation, not direct edge approximation.'}],
      nodes: nodeList(['laceration-definition','lac-split','lac-stretch','lac-crush','lac-avulsion','lac-tear','lac-features','lac-medicolegal']),
      mcqs: MCQS['MI-04']
    },
    { id: 'MI-05', title: 'Incised Wound — Features &amp; ML Importance', shortTitle: 'Incised Wound', svg: SVG_MI05,
      prereqs: [{term:'Tailing (drag-off)',meaning:'Shallow tapered end of incised wound where blade lifts off — indicates direction of cut.'},{term:'Hesitation cuts',meaning:'Multiple superficial parallel cuts beside main wound — pathognomonic of suicide.'},{term:'Langer\'s lines',meaning:'Skin tension lines; wound gapes more when cut perpendicular to them.'},{term:'Spurting bleeding',meaning:'Profuse arterial pulsatile bleeding — only in antemortem incised wounds.'}],
      nodes: nodeList(['incised-definition','incised-margins','incised-dimensions','incised-bleeding','incised-tailing','incised-hesitation','incised-medicolegal']),
      mcqs: MCQS['MI-05']
    },
    { id: 'MI-06', title: 'Stab &amp; Punctured Wounds', shortTitle: 'Stab Wound', svg: SVG_MI06,
      prereqs: [{term:'Penetrating',meaning:'Blade enters a cavity but does not exit.'},{term:'Perforating',meaning:'Blade passes through with entry + exit.'},{term:'Boat / wedge shape',meaning:'Surface stab wound shape produced by single-edged blade.'},{term:'Spindle / oval shape',meaning:'Surface stab wound shape produced by double-edged dagger.'}],
      nodes: nodeList(['stab-definition','stab-types','stab-margins','stab-dimensions','stab-tract','stab-medicolegal']),
      mcqs: MCQS['MI-06']
    },
    { id: 'MI-07', title: 'Chop Wound — Sharp + Heavy Hybrid', shortTitle: 'Chop Wound', svg: SVG_MI07,
      prereqs: [{term:'Hybrid wound',meaning:'Combines features of incised (clean margins) + laceration (depth, bone).'},{term:'Chip / wedge fracture',meaning:'Characteristic fracture pattern of bone struck by a heavy cutting weapon.'},{term:'Tool-mark analysis',meaning:'Matching the weapon edge to bone cut surface for forensic identification.'}],
      nodes: nodeList(['chop-definition','chop-weapons','chop-features','chop-sites','chop-medicolegal']),
      mcqs: MCQS['MI-07']
    },
    { id: 'MI-08', title: 'Defence Wounds — Active &amp; Passive', shortTitle: 'Defence Wounds', svg: SVG_MI08,
      prereqs: [{term:'Active defence',meaning:'Cuts on palmar surface — victim grasping the weapon.'},{term:'Passive defence',meaning:'Injuries on extensor forearm — victim shielding head/face.'},{term:'Nightstick fracture',meaning:'Isolated ulnar shaft # from blow with stick to outer forearm — passive defence.'}],
      nodes: nodeList(['defence-definition','defence-active','defence-passive','defence-sites','defence-medicolegal']),
      mcqs: MCQS['MI-08']
    },
    { id: 'MI-09', title: 'Cut Throat — Suicidal vs Homicidal', shortTitle: 'Cut Throat', svg: SVG_MI09,
      prereqs: [{term:'Hesitation cuts',meaning:'Pathognomonic of suicidal cut throat.'},{term:'Defence wounds',meaning:'Pathognomonic of homicidal cut throat.'},{term:'Air embolism',meaning:'Air sucked into open jugular vein → cardiac arrest — cause of death in cut throat.'},{term:'Mirror reconstruction',meaning:'Right-handed suicidal victim cuts L→R facing mirror.'}],
      nodes: nodeList(['cut-throat-definition','ct-suicidal','ct-homicidal','ct-anatomy','ct-mirror']),
      mcqs: MCQS['MI-09']
    },
    { id: 'MI-10', title: 'AM vs PM Wounds + Healing Timeline', shortTitle: 'AM vs PM · Healing', svg: SVG_MI10,
      prereqs: [{term:'Vital reaction',meaning:'Circulatory + cellular response that proves wound is antemortem.'},{term:'Erythema (red zone)',meaning:'Inflammatory red margin around antemortem wound — absent in PM.'},{term:'Histamine',meaning:'Rises within minutes of injury — early AM biochemical marker.'},{term:'Granulation tissue',meaning:'Capillary buds + fibroblasts; appears at 3-5 days.'}],
      nodes: nodeList(['am-pm-definition','vital-erythema','vital-bleeding','vital-cellular','vital-biochem','wound-healing']),
      mcqs: MCQS['MI-10']
    }
  ],
  diffTables: DIFF_TABLES,
  subjectiveQs: SUBJ,
  highYield: [
    'Mnemonic — <strong>Blunt = ACL</strong> (Abrasion · Contusion · Laceration) · <strong>Sharp = ISC</strong> (Incised · Stab · Chop)',
    '<strong>Injury</strong> defined in <strong>BNS 116</strong> (≡ IPC 44); <strong>Hurt</strong> in BNS 114 (≡ IPC 319); <strong>Grievous hurt</strong> = 8 clauses in BNS 116(2) (≡ IPC 320)',
    'Abrasion = <strong>EPIDERMIS only</strong> · heals <strong>WITHOUT scar</strong> · tag pile-up at far end = direction of force',
    'Patterned abrasion (tyre, belt, teeth) = HIGHEST forensic value — identifies the weapon',
    'Bruise colour sequence — <strong>Red → Blue → Green → Yellow</strong> ("RBGY") · YELLOW ≥ 18 hours old',
    '<strong>Battered baby syndrome</strong> — bruises of DIFFERENT ages = pathognomonic <strong>[NEET-PG 2019]</strong>',
    'Laceration cardinal sign = <strong>TISSUE BRIDGES</strong> across floor + crushed hair bulbs + bruised abraded margins',
    '<strong>Split laceration</strong> looks incised but has bridges; classic sites — scalp · eyebrow · shin · elbow',
    'Incised wound: <strong>length &gt; depth</strong> · clean margins · NO bridges · profuse bleeding (vessels can\'t retract)',
    '<strong>Hesitation cuts</strong> = pathognomonic of <strong>SUICIDE</strong>',
    'Stab wound: <strong>depth &gt; length</strong>; single-edged = BOAT, double-edged = SPINDLE',
    'Tract depth may EXCEED blade length (soft tissue compresses) but rarely falls short',
    'Chop wound = sharp + heavy hybrid (axe/machete/sword); bone cut with chip fracture; <strong>almost always HOMICIDAL</strong>',
    'Defence wounds prove <strong>conscious resistance + ANTEMORTEM</strong>; Active = palmar (grasp); Passive = extensor (shield)',
    '<strong>[NEET-PG 2022]</strong> — incised wounds on palms / fingers = defence wounds',
    '<strong>Suicidal cut throat</strong>: HIGH · L→R · hesitation cuts · NO defence wounds · weapon in hand',
    '<strong>Homicidal cut throat</strong>: LOW · uniform deep · DEFENCE wounds present · weapon absent / inconsistent',
    'PM differs from AM wound by <strong>absence of erythema + cellular changes</strong> <strong>[NEET-PG 2016]</strong>',
    'Vital reaction biochemistry: <strong>histamine ↑ within minutes</strong>; serotonin ↑ at margins; free histamine &gt; 50 % = AM',
    'Granulation tissue at 3-5 days · scab at 24 h · mature scar 3-6 months',
    'Most reliable single feature DD homicidal vs suicidal cut throat = <strong>DEFENCE WOUNDS</strong>',
    'Cause of death in cut throat: haemorrhage (most) · air embolism (jugular) · aspiration / asphyxia · shock',
    '"Incised-looking laceration" = split lac <strong>[NEET-PG 2021 image]</strong> — tissue bridges + crushed hair bulbs give it away',
    'BNS 118 (≡ IPC 324/326) = hurt by <strong>dangerous weapon</strong> — knife / axe / machete fall here'
  ]
};
})();
