/* ===================================================================
   Medascend FMT — Chapter 15: Violent Asphyxia
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

const SVG_VA01 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Violent Asphyxia — Classification + Signs</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Asphyxia = condition of impaired gas exchange · classified by mechanism into 5 main types</text>

<g data-node-id="asphyxia-definition">
  <rect class="nbcr" x="60" y="120" width="1480" height="100" rx="14"/>
  <text x="90" y="158" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🫁 ASPHYXIA / VIOLENT ASPHYXIA</text>
  <text x="90" y="188" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= a condition of impaired gas exchange (deficient O₂ + accumulated CO₂) caused by mechanical interference with respiration. "Violent" implies external mechanical force as the cause.</text>
  <circle class="ic" cx="1500" cy="140" r="14"/>
  <text class="t-info" x="1500" y="146" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="va-hanging">
  <rect class="body-white" x="60" y="250" width="480" height="220" rx="14"/>
  <path d="M 74,250 H 526 A 14,14 0 0 1 540,264 V 310 H 60 V 264 A 14,14 0 0 1 74,250 Z" fill="url(#gBlue)"/>
  <text x="90" y="290" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🪢 1. HANGING</text>
  <text x="90" y="346" class="t-keyval">Constriction of neck by ligature suspended at one end,</text>
  <text x="90" y="370" class="t-keyval">with body weight providing the force.</text>
  <text x="90" y="402" class="t-keylbl">Manner:</text>
  <text x="180" y="402" class="t-keyval">Mostly suicidal · rarely homicidal/accidental</text>
  <text x="90" y="432" class="t-keylbl">Mechanism:</text>
  <text x="220" y="432" class="t-keyval">Venous obstruction → cerebral hypoxia</text>
  <circle class="ic" cx="510" cy="268" r="14"/>
  <text class="t-info" x="510" y="274" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="va-strangulation">
  <rect class="body-white" x="560" y="250" width="480" height="220" rx="14"/>
  <path d="M 574,250 H 1026 A 14,14 0 0 1 1040,264 V 310 H 560 V 264 A 14,14 0 0 1 574,250 Z" fill="url(#gRed)"/>
  <text x="590" y="290" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">✊ 2. STRANGULATION</text>
  <text x="590" y="346" class="t-keyval">Constriction of neck by external force OTHER</text>
  <text x="590" y="370" class="t-keyval">than body weight (ligature, hand, stick, etc.)</text>
  <text x="590" y="402" class="t-keylbl">Manner:</text>
  <text x="680" y="402" class="t-keyval">Mostly HOMICIDAL · rarely accidental</text>
  <text x="590" y="432" class="t-keylbl">Subtypes:</text>
  <text x="690" y="432" class="t-keyval">Ligature · Throttling · Bansdola · Garroting</text>
  <circle class="ic" cx="1010" cy="268" r="14"/>
  <text class="t-info" x="1010" y="274" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="va-suffocation">
  <rect class="body-white" x="1060" y="250" width="480" height="220" rx="14"/>
  <path d="M 1074,250 H 1526 A 14,14 0 0 1 1540,264 V 310 H 1060 V 264 A 14,14 0 0 1 1074,250 Z" fill="url(#gOrange)"/>
  <text x="1090" y="290" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🫨 3. SUFFOCATION</text>
  <text x="1090" y="346" class="t-keyval">Obstruction of external air passages without</text>
  <text x="1090" y="370" class="t-keyval">force on the neck.</text>
  <text x="1090" y="402" class="t-keylbl">Subtypes:</text>
  <text x="1190" y="402" class="t-keyval">Smothering · Gagging · Choking ·</text>
  <text x="1190" y="424" class="t-keyval">Traumatic asphyxia · Overlying (SIDS)</text>
  <circle class="ic" cx="1510" cy="268" r="14"/>
  <text class="t-info" x="1510" y="274" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="va-drowning">
  <rect class="body-white" x="60" y="490" width="480" height="220" rx="14"/>
  <path d="M 74,490 H 526 A 14,14 0 0 1 540,504 V 550 H 60 V 504 A 14,14 0 0 1 74,490 Z" fill="url(#gPurple)"/>
  <text x="90" y="530" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">💧 4. DROWNING</text>
  <text x="90" y="586" class="t-keyval">Asphyxia from immersion in fluid that fills the</text>
  <text x="90" y="610" class="t-keyval">airways and prevents gas exchange.</text>
  <text x="90" y="642" class="t-keylbl">Types:</text>
  <text x="160" y="642" class="t-keyval">Wet · Dry · Secondary · Immersion (hydrocution)</text>
  <text x="90" y="672" class="t-keylbl">Manner:</text>
  <text x="180" y="672" class="t-keyval">Mostly accidental · sometimes suicidal/homicidal</text>
  <circle class="ic" cx="510" cy="508" r="14"/>
  <text class="t-info" x="510" y="514" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="va-chemical">
  <rect class="body-white" x="560" y="490" width="480" height="220" rx="14"/>
  <path d="M 574,490 H 1026 A 14,14 0 0 1 1040,504 V 550 H 560 V 504 A 14,14 0 0 1 574,490 Z" fill="url(#gGreen)"/>
  <text x="590" y="530" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">☁️ 5. CHEMICAL ASPHYXIA</text>
  <text x="590" y="586" class="t-keyval">Asphyxia caused by gases that interfere with</text>
  <text x="590" y="610" class="t-keyval">O₂ uptake or transport.</text>
  <text x="590" y="642" class="t-keylbl">Examples:</text>
  <text x="700" y="642" class="t-keyval">CO · CO₂ · H₂S · HCN · Methyl isocyanate</text>
  <text x="590" y="672" class="t-keylbl">Cross-ref:</text>
  <text x="700" y="672" class="t-keyval">Toxicology — Ch 47 Asphyxiants</text>
  <circle class="ic" cx="1010" cy="508" r="14"/>
  <text class="t-info" x="1010" y="514" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="va-stages">
  <rect class="body-white" x="1060" y="490" width="480" height="220" rx="14"/>
  <path d="M 1074,490 H 1526 A 14,14 0 0 1 1540,504 V 550 H 1060 V 504 A 14,14 0 0 1 1074,490 Z" fill="url(#gGrey)"/>
  <text x="1090" y="530" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">⏱️ 4 STAGES OF ASPHYXIA</text>
  <text x="1090" y="580" class="t-keyval"><strong>1. Dyspnoea</strong> — increased respiratory effort (~1 min)</text>
  <text x="1090" y="604" class="t-keyval"><strong>2. Convulsions</strong> — generalised seizures (~1 min)</text>
  <text x="1090" y="628" class="t-keyval"><strong>3. Apnoea / Exhaustion</strong> — irregular gasps (~1 min)</text>
  <text x="1090" y="652" class="t-keyval"><strong>4. Death</strong> — total respiratory arrest</text>
  <text x="1090" y="684" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Typical total duration to death: 3-5 min</text>
  <circle class="ic" cx="1510" cy="508" r="14"/>
  <text class="t-info" x="1510" y="514" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="va-signs">
  <rect x="60" y="740" width="1480" height="280" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/>
  <text x="800" y="784" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">🔍 CLASSICAL SIGNS OF ASPHYXIA (Asphyxial Stigmata)</text>
  <text x="100" y="824" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">• <strong>Cyanosis</strong> — bluish discolouration (skin, lips, nails) from deoxygenated blood</text>
  <text x="100" y="850" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">• <strong>Petechial haemorrhages</strong> (<strong>Tardieu spots</strong>) — pinpoint haemorrhages on conjunctivae, face, behind ears, pleura, pericardium · most pathognomonic</text>
  <text x="100" y="876" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">• <strong>Congestion</strong> — face, head, neck appear engorged; visceral congestion</text>
  <text x="100" y="902" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">• <strong>Fluidity of blood</strong> — blood remains dark and fluid (high CO₂ → fibrinolysis)</text>
  <text x="100" y="928" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">• <strong>Right heart dilatation</strong> — RV engorged with dark fluid blood</text>
  <text x="100" y="954" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">• <strong>Pulmonary oedema + congestion</strong> · <strong>Visceral congestion</strong> (liver, kidneys)</text>
  <text x="100" y="986" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="rgba(255,255,255,0.75)">⚠️ These signs are NON-SPECIFIC — also seen in other modes of sudden death; collectively support but don't prove asphyxia.</text>
  <circle class="ic" cx="1510" cy="762" r="14"/>
  <text class="t-info" x="1510" y="768" text-anchor="middle">ⓘ</text>
</g>

<rect x="60" y="1040" width="1480" height="46" rx="10" fill="url(#gOrange)"/>
<text x="800" y="1070" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 5-class mnemonic — "HSSDC": Hanging · Strangulation · Suffocation · Drowning · Chemical</text>
</svg>`;

const SVG_VA02 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Hanging — Types &amp; Mechanism of Death</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Constriction of neck by ligature with body weight providing the force · 4 anatomical types</text>

<g data-node-id="hanging-definition">
  <rect class="nbcr" x="60" y="120" width="1480" height="100" rx="14"/>
  <text x="90" y="158" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🪢 HANGING</text>
  <text x="90" y="188" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= Constriction of neck by a ligature, the constricting force being supplied by the body weight (whole or partial). Distinct from strangulation (force NOT body weight).</text>
  <circle class="ic" cx="1500" cy="140" r="14"/>
  <text class="t-info" x="1500" y="146" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="hanging-complete">
  <rect class="body-white" x="60" y="250" width="740" height="280" rx="14"/>
  <path d="M 74,250 H 786 A 14,14 0 0 1 800,264 V 310 H 60 V 264 A 14,14 0 0 1 74,250 Z" fill="url(#gBlue)"/>
  <text x="90" y="290" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">1. COMPLETE Hanging</text>
  <text x="90" y="346" class="t-keylbl">Definition:</text>
  <text x="200" y="346" class="t-keyval">Body is fully suspended; feet do NOT touch the ground.</text>
  <text x="90" y="380" class="t-keylbl">Force:</text>
  <text x="160" y="380" class="t-keyval">Full body weight on the neck</text>
  <text x="90" y="414" class="t-keylbl">Ligature mark:</text>
  <text x="220" y="414" class="t-keyval">Deep, oblique, ABOVE the level of thyroid cartilage</text>
  <text x="90" y="448" class="t-keylbl">Knot position:</text>
  <text x="220" y="448" class="t-keyval">Typically posterior (occipital) or lateral</text>
  <text x="90" y="482" class="t-keylbl">Outcome:</text>
  <text x="180" y="482" class="t-keyval">Death is usual; rescue rare</text>
  <circle class="ic" cx="770" cy="268" r="14"/>
  <text class="t-info" x="770" y="274" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="hanging-partial">
  <rect class="body-white" x="820" y="250" width="720" height="280" rx="14"/>
  <path d="M 834,250 H 1526 A 14,14 0 0 1 1540,264 V 310 H 820 V 264 A 14,14 0 0 1 834,250 Z" fill="url(#gOrange)"/>
  <text x="850" y="290" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">2. PARTIAL Hanging</text>
  <text x="850" y="346" class="t-keylbl">Definition:</text>
  <text x="960" y="346" class="t-keyval">Body is partly supported (feet/knees touch ground, sitting, kneeling).</text>
  <text x="850" y="380" class="t-keylbl">Force:</text>
  <text x="920" y="380" class="t-keyval">Only fraction of body weight on neck</text>
  <text x="850" y="414" class="t-keylbl">Importance:</text>
  <text x="980" y="414" class="t-keyval">~50 % of suicidal hangings are partial</text>
  <text x="850" y="448" class="t-keylbl">Key insight:</text>
  <text x="970" y="448" class="t-keyval">Only 4-5 kg pressure suffices to occlude carotid →</text>
  <text x="850" y="472" class="t-keyval">death possible from partial suspension alone</text>
  <text x="850" y="506" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Partial hangings often mistaken for "non-suicide" — careful scene examination needed.</text>
  <circle class="ic" cx="1510" cy="268" r="14"/>
  <text class="t-info" x="1510" y="274" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="hanging-typical">
  <rect class="body-white" x="60" y="550" width="740" height="260" rx="14"/>
  <path d="M 74,550 H 786 A 14,14 0 0 1 800,564 V 610 H 60 V 564 A 14,14 0 0 1 74,550 Z" fill="url(#gGreen)"/>
  <text x="90" y="590" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">3. TYPICAL Hanging</text>
  <text x="90" y="646" class="t-keylbl">Knot position:</text>
  <text x="240" y="646" class="t-keyval">EXACTLY at the back of neck (occiput / nape)</text>
  <text x="90" y="680" class="t-keylbl">Body position:</text>
  <text x="240" y="680" class="t-keyval">Body hangs symmetrically</text>
  <text x="90" y="714" class="t-keylbl">Ligature direction:</text>
  <text x="270" y="714" class="t-keyval">Rises symmetrically on both sides of neck</text>
  <text x="90" y="748" class="t-keylbl">Vascular effects:</text>
  <text x="270" y="748" class="t-keyval">Both carotids fully occluded — fast unconsciousness</text>
  <text x="90" y="782" class="t-keylbl">PM findings:</text>
  <text x="230" y="782" class="t-keyval">Face PALE; ligature mark V-shaped above thyroid</text>
  <circle class="ic" cx="770" cy="568" r="14"/>
  <text class="t-info" x="770" y="574" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="hanging-atypical">
  <rect class="body-white" x="820" y="550" width="720" height="260" rx="14"/>
  <path d="M 834,550 H 1526 A 14,14 0 0 1 1540,564 V 610 H 820 V 564 A 14,14 0 0 1 834,550 Z" fill="url(#gRed)"/>
  <text x="850" y="590" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">4. ATYPICAL Hanging</text>
  <text x="850" y="646" class="t-keylbl">Knot position:</text>
  <text x="1000" y="646" class="t-keyval">ANYWHERE except back of neck (sides, front)</text>
  <text x="850" y="680" class="t-keylbl">Body position:</text>
  <text x="1000" y="680" class="t-keyval">Head tilted to opposite side</text>
  <text x="850" y="714" class="t-keylbl">Vascular effects:</text>
  <text x="1030" y="714" class="t-keyval">ASYMMETRIC carotid occlusion — slower onset</text>
  <text x="850" y="748" class="t-keylbl">PM findings:</text>
  <text x="990" y="748" class="t-keyval">Face CONGESTED + cyanosed; ligature mark less marked</text>
  <text x="850" y="782" class="t-keylbl">Suicidal manner:</text>
  <text x="1020" y="782" class="t-keyval">Still possible — verified by scene + position</text>
  <circle class="ic" cx="1510" cy="568" r="14"/>
  <text class="t-info" x="1510" y="574" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="hanging-mechanism">
  <rect x="60" y="830" width="1480" height="200" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/>
  <text x="800" y="870" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">⚙️ Mechanism of Death in Hanging (in descending frequency)</text>
  <text x="100" y="908" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">1. <strong>Venous obstruction</strong> (most common) — jugular veins compress before carotids → cerebral congestion + hypoxia</text>
  <text x="100" y="934" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">2. <strong>Asphyxia</strong> — tracheal/laryngeal occlusion (esp. complete typical hanging)</text>
  <text x="100" y="960" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">3. <strong>Vagal inhibition (cardiac arrest)</strong> — reflex via carotid sinus pressure → sudden death</text>
  <text x="100" y="986" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">4. <strong>Cervical spine injury</strong> (judicial hanging) — fracture-dislocation of C2-C3 (the "hangman\\\'s fracture")</text>
  <text x="100" y="1012" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.75)">Drop of 5-7 feet in judicial hanging produces cervical fracture; suicidal hangings rarely break the neck.</text>
  <circle class="ic" cx="1510" cy="852" r="14"/>
  <text class="t-info" x="1510" y="858" text-anchor="middle">ⓘ</text>
</g>
</svg>`;

const SVG_VA03 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">PM Findings in Hanging — External + Internal</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">External: ligature mark + face features · Internal: neck dissection + asphyxial stigmata</text>

<g data-node-id="pm-external-face">
  <rect class="body-white" x="60" y="120" width="740" height="380" rx="14"/>
  <path d="M 74,120 H 786 A 14,14 0 0 1 800,134 V 180 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gBlue)"/>
  <text x="90" y="160" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">👤 External — Face &amp; Head</text>
  <text x="90" y="220" class="t-keylbl">Typical hanging:</text>
  <text x="240" y="220" class="t-keyval">Face PALE (both carotids occluded → no flow)</text>
  <text x="90" y="252" class="t-keylbl">Atypical hanging:</text>
  <text x="250" y="252" class="t-keyval">Face CONGESTED, cyanosed (one carotid patent)</text>
  <text x="90" y="290" class="t-keylbl">Tongue:</text>
  <text x="180" y="290" class="t-keyval">PROTRUDED, bitten, swollen, congested</text>
  <text x="90" y="322" class="t-keylbl">Eyes:</text>
  <text x="160" y="322" class="t-keyval">Open or half-open; pupils dilated; conjunctival petechiae</text>
  <text x="90" y="354" class="t-keylbl">Salivary dribbling:</text>
  <text x="260" y="354" class="t-keyval"><strong>Most reliable AM sign</strong> — saliva trickles DOWN</text>
  <text x="90" y="376" class="t-keyval">from corner of mouth on the side OPPOSITE to knot.</text>
  <text x="90" y="412" class="t-keylbl">Hands:</text>
  <text x="170" y="412" class="t-keyval">Clenched (cadaveric spasm) — significant of antemortem</text>
  <text x="90" y="444" class="t-keylbl">Penis:</text>
  <text x="170" y="444" class="t-keyval">Erection ± seminal discharge (male, common)</text>
  <text x="90" y="476" class="t-keylbl">Lividity:</text>
  <text x="180" y="476" class="t-keyval">Lower limbs, hands, glove-and-stocking pattern</text>
  <circle class="ic" cx="770" cy="138" r="14"/>
  <text class="t-info" x="770" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="pm-external-ligature">
  <rect class="body-white" x="820" y="120" width="720" height="380" rx="14" stroke="#C58A3D" stroke-width="3"/>
  <path d="M 834,120 H 1526 A 14,14 0 0 1 1540,134 V 180 H 820 V 134 A 14,14 0 0 1 834,120 Z" fill="url(#gOrange)"/>
  <text x="850" y="160" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🪢 External — Ligature Mark (★ KEY)</text>
  <text x="850" y="220" class="t-keylbl">Direction:</text>
  <text x="960" y="220" class="t-keyval">OBLIQUE — rises towards the knot</text>
  <text x="850" y="252" class="t-keylbl">Continuity:</text>
  <text x="970" y="252" class="t-keyval">INCOMPLETE (interrupted at knot site)</text>
  <text x="850" y="284" class="t-keylbl">Level:</text>
  <text x="930" y="284" class="t-keyval">ABOVE thyroid cartilage</text>
  <text x="850" y="316" class="t-keylbl">Depth &amp; pattern:</text>
  <text x="1010" y="316" class="t-keyval">Reproduces ligature texture (rope twist, leather stitching)</text>
  <text x="850" y="348" class="t-keylbl">Colour:</text>
  <text x="930" y="348" class="t-keyval">Pale/yellow-brown initially → dark parchment-like after death</text>
  <text x="850" y="380" class="t-keylbl">Skin around:</text>
  <text x="990" y="380" class="t-keyval">Antemortem: bruising, abrasions, vital reaction</text>
  <text x="850" y="412" class="t-keylbl">Knot impression:</text>
  <text x="1020" y="412" class="t-keyval">Pressure mark at knot site</text>
  <text x="850" y="444" class="t-keylbl">Number of marks:</text>
  <text x="1030" y="444" class="t-keyval">Usually 1 (multiple turns leave parallel marks)</text>
  <text x="850" y="476" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Compare with strangulation: HORIZONTAL, COMPLETE, BELOW thyroid.</text>
  <circle class="ic" cx="1510" cy="138" r="14"/>
  <text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="pm-internal-neck">
  <rect class="body-white" x="60" y="520" width="740" height="380" rx="14"/>
  <path d="M 74,520 H 786 A 14,14 0 0 1 800,534 V 580 H 60 V 534 A 14,14 0 0 1 74,520 Z" fill="url(#gRed)"/>
  <text x="90" y="560" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🔬 Internal — Neck Dissection</text>
  <text x="90" y="620" class="t-keylbl">Subcutaneous tissues:</text>
  <text x="290" y="620" class="t-keyval">PALE, glistening, dry beneath the ligature</text>
  <text x="90" y="654" class="t-keylbl">Sternomastoid muscles:</text>
  <text x="310" y="654" class="t-keyval">Haemorrhage (vital reaction) if antemortem</text>
  <text x="90" y="688" class="t-keylbl">Carotid sheath:</text>
  <text x="240" y="688" class="t-keyval">Tear in intima (<strong>Amussat\\\'s sign</strong>) - jerk hangings</text>
  <text x="90" y="722" class="t-keylbl">Hyoid bone:</text>
  <text x="220" y="722" class="t-keyval">Fracture in &lt;30 % (greater wing/cornu)</text>
  <text x="90" y="756" class="t-keylbl">Thyroid cartilage:</text>
  <text x="260" y="756" class="t-keyval">Superior cornu fracture possible</text>
  <text x="90" y="790" class="t-keylbl">Cervical spine:</text>
  <text x="240" y="790" class="t-keyval">Fracture of C2-C3 in JUDICIAL hanging only</text>
  <text x="90" y="824" class="t-keyval">(suicidal: rare unless drop &gt; body height)</text>
  <text x="90" y="864" class="t-keylbl">Trachea/larynx:</text>
  <text x="240" y="864" class="t-keyval">Congestion, occasional minor abrasions</text>
  <circle class="ic" cx="770" cy="538" r="14"/>
  <text class="t-info" x="770" y="544" text-anchor="middle">ⓘ</text>
</g>

<g data-node-id="pm-internal-asphyxial">
  <rect class="body-white" x="820" y="520" width="720" height="380" rx="14"/>
  <path d="M 834,520 H 1526 A 14,14 0 0 1 1540,534 V 580 H 820 V 534 A 14,14 0 0 1 834,520 Z" fill="url(#gPurple)"/>
  <text x="850" y="560" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🫁 Internal — Asphyxial Signs</text>
  <text x="850" y="620" class="t-keylbl">Petechial haemorrhages:</text>
  <text x="850" y="644" class="t-keyval">Pleura, pericardium, conjunctivae (Tardieu spots)</text>
  <text x="850" y="678" class="t-keylbl">Lungs:</text>
  <text x="930" y="678" class="t-keyval">Congested, oedematous; sub-pleural petechiae</text>
  <text x="850" y="710" class="t-keylbl">Heart:</text>
  <text x="930" y="710" class="t-keyval">Right side dilated, full of dark fluid blood</text>
  <text x="850" y="742" class="t-keylbl">Brain:</text>
  <text x="930" y="742" class="t-keyval">Congested; meningeal vessels engorged</text>
  <text x="850" y="774" class="t-keylbl">Blood:</text>
  <text x="930" y="774" class="t-keyval">Dark, fluid (does NOT clot well)</text>
  <text x="850" y="806" class="t-keylbl">Visceral congestion:</text>
  <text x="1030" y="806" class="t-keyval">Liver, kidneys, spleen all engorged</text>
  <text x="850" y="848" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Asphyxial stigmata are LESS pronounced in typical hanging (death too fast) compared to atypical.</text>
  <circle class="ic" cx="1510" cy="538" r="14"/>
  <text class="t-info" x="1510" y="544" text-anchor="middle">ⓘ</text>
</g>

<rect x="60" y="920" width="1480" height="46" rx="10" fill="url(#gGreen)"/>
<text x="800" y="950" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 Salivary dribbling = MOST reliable sign of antemortem hanging (NEET-PG 2016 PYQ)</text>
</svg>`;

/* Placeholders for VA-04 to VA-10 */
const SVG_VA04 = `<svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Ligature Mark in Hanging — 7 Features</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">The single most-tested external finding · differentiates hanging from strangulation</text>

<g data-node-id="lm-direction"><rect class="body-white" x="60" y="120" width="490" height="200" rx="14"/><path d="M 74,120 H 536 A 14,14 0 0 1 550,134 V 180 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gBlue)"/><text x="80" y="160" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">1️⃣ DIRECTION</text><text x="80" y="220" class="t-keylbl">Hanging:</text><text x="180" y="220" class="t-keyval"><strong>OBLIQUE</strong> — rises toward knot</text><text x="80" y="250" class="t-keylbl">Strangulation:</text><text x="230" y="250" class="t-keyval">HORIZONTAL</text><text x="80" y="288" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Most reliable single distinguishing feature</text><circle class="ic" cx="520" cy="138" r="12"/><text class="t-info" x="520" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lm-continuity"><rect class="body-white" x="570" y="120" width="490" height="200" rx="14"/><path d="M 584,120 H 1046 A 14,14 0 0 1 1060,134 V 180 H 570 V 134 A 14,14 0 0 1 584,120 Z" fill="url(#gGreen)"/><text x="590" y="160" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">2️⃣ CONTINUITY</text><text x="590" y="220" class="t-keylbl">Hanging:</text><text x="690" y="220" class="t-keyval"><strong>INCOMPLETE</strong> — broken at knot</text><text x="590" y="250" class="t-keylbl">Strangulation:</text><text x="740" y="250" class="t-keyval">COMPLETE (fully encircles neck)</text><text x="590" y="288" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Ligature lifts off skin at knot in hanging</text><circle class="ic" cx="1040" cy="138" r="12"/><text class="t-info" x="1040" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lm-level"><rect class="body-white" x="1080" y="120" width="460" height="200" rx="14"/><path d="M 1094,120 H 1526 A 14,14 0 0 1 1540,134 V 180 H 1080 V 134 A 14,14 0 0 1 1094,120 Z" fill="url(#gOrange)"/><text x="1100" y="160" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">3️⃣ LEVEL vs THYROID</text><text x="1100" y="220" class="t-keylbl">Hanging:</text><text x="1200" y="220" class="t-keyval"><strong>ABOVE</strong> thyroid (near chin)</text><text x="1100" y="250" class="t-keylbl">Strangulation:</text><text x="1250" y="250" class="t-keyval">AT or BELOW thyroid</text><text x="1100" y="288" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Thyroid cartilage = anatomical landmark</text><circle class="ic" cx="1510" cy="138" r="12"/><text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lm-texture"><rect class="body-white" x="60" y="340" width="490" height="200" rx="14"/><path d="M 74,340 H 536 A 14,14 0 0 1 550,354 V 400 H 60 V 354 A 14,14 0 0 1 74,340 Z" fill="url(#gPurple)"/><text x="80" y="380" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">4️⃣ TEXTURE / PATTERN</text><text x="80" y="440" class="t-keyval">Reproduces ligature surface — rope twist,</text><text x="80" y="464" class="t-keyval">leather stitching, dupatta weave, cable ridges.</text><text x="80" y="494" class="t-keylbl">Hard ligature:</text><text x="220" y="494" class="t-keyval">Sharp, deep, parchment-like</text><text x="80" y="518" class="t-keylbl">Soft ligature:</text><text x="220" y="518" class="t-keyval">Shallow, broad, often subtle</text><circle class="ic" cx="520" cy="358" r="12"/><text class="t-info" x="520" y="364" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lm-colour"><rect class="body-white" x="570" y="340" width="490" height="200" rx="14"/><path d="M 584,340 H 1046 A 14,14 0 0 1 1060,354 V 400 H 570 V 354 A 14,14 0 0 1 584,340 Z" fill="url(#gRed)"/><text x="590" y="380" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">5️⃣ COLOUR</text><text x="590" y="440" class="t-keylbl">Initial:</text><text x="690" y="440" class="t-keyval">Pale / yellow-brown</text><text x="590" y="470" class="t-keylbl">After hours:</text><text x="730" y="470" class="t-keyval">Dark brown, parchment-like</text><text x="590" y="500" class="t-keylbl">Mechanism:</text><text x="730" y="500" class="t-keyval">Drying + shrinkage of compressed dermis</text><text x="590" y="528" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Parchmentisation = a key sign of vital reaction</text><circle class="ic" cx="1040" cy="358" r="12"/><text class="t-info" x="1040" y="364" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lm-knot"><rect class="body-white" x="1080" y="340" width="460" height="200" rx="14"/><path d="M 1094,340 H 1526 A 14,14 0 0 1 1540,354 V 400 H 1080 V 354 A 14,14 0 0 1 1094,340 Z" fill="url(#gGrey)"/><text x="1100" y="380" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">6️⃣ KNOT IMPRESSION</text><text x="1100" y="440" class="t-keyval">Distinct pressure mark at knot site.</text><text x="1100" y="470" class="t-keyval">Helps identify ligature type + technique.</text><text x="1100" y="510" class="t-keylbl">Typical:</text><text x="1190" y="510" class="t-keyval">Posterior (occipital)</text><text x="1100" y="538" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Atypical knots → side / front</text><circle class="ic" cx="1510" cy="358" r="12"/><text class="t-info" x="1510" y="364" text-anchor="middle">ⓘ</text></g>

<g data-node-id="lm-vital"><rect class="body-white" x="60" y="560" width="1480" height="240" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 74,560 H 1526 A 14,14 0 0 1 1540,574 V 620 H 60 V 574 A 14,14 0 0 1 74,560 Z" fill="url(#gBlue)"/><text x="800" y="600" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">7️⃣ VITAL REACTION ★ (= antemortem marker)</text><text x="100" y="660" class="t-keylbl">Antemortem signs around the mark:</text><text x="120" y="688" class="t-keyval">• Bruising (ecchymosis) — small haemorrhages in skin / subcutaneous tissue</text><text x="120" y="712" class="t-keyval">• Abrasions — friction marks on edges</text><text x="120" y="736" class="t-keyval">• Oedema / inflammation</text><text x="120" y="760" class="t-keyval">• Sternomastoid muscle haemorrhage on dissection</text><text x="120" y="784" class="t-keyval">• <strong>Salivary dribbling</strong> from corner of mouth opposite knot (★ NEET-PG 2016)</text><circle class="ic" cx="1510" cy="578" r="14"/><text class="t-info" x="1510" y="584" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="820" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="858" font-family="Inter,system-ui,sans-serif" font-size="15" font-weight="700" fill="white" text-anchor="middle">🎯 Memory: "DCLT-CKV" — Direction · Continuity · Level · Texture · Colour · Knot · Vital</text>

<rect x="60" y="900" width="1480" height="60" rx="10" fill="url(#gGreen)"/><text x="800" y="938" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">⭐ Hanging: OBLIQUE + INCOMPLETE + ABOVE thyroid · Strangulation: HORIZONTAL + COMPLETE + AT/BELOW</text>
</svg>`;
const SVG_VA05 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Strangulation — 6 Subtypes</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Constriction of neck by external force (NOT body weight) · mostly HOMICIDAL</text>

<g data-node-id="str-ligature"><rect class="body-white" x="60" y="120" width="490" height="290" rx="14"/><path d="M 74,120 H 536 A 14,14 0 0 1 550,134 V 195 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gRed)"/><text x="80" y="170" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🪢 1. Ligature Strangulation</text><text x="80" y="240" class="t-keylbl">Agent:</text><text x="160" y="240" class="t-keyval">Rope, scarf, dupatta, wire, electrical cable</text><text x="80" y="272" class="t-keylbl">Mark:</text><text x="160" y="272" class="t-keyval">HORIZONTAL, COMPLETE, at/below thyroid</text><text x="80" y="304" class="t-keylbl">Mechanism:</text><text x="220" y="304" class="t-keyval">Venous + carotid compression → asphyxia</text><text x="80" y="336" class="t-keylbl">Hyoid #:</text><text x="180" y="336" class="t-keyval">~30-40% (greater horn)</text><text x="80" y="368" class="t-keylbl">PYQ context:</text><text x="220" y="368" class="t-keyval">"horizontal ligature, no salivary dribbling"</text><text x="80" y="390" class="t-keyval">→ ligature strangulation (NEET-PG 2022)</text><circle class="ic" cx="520" cy="138" r="14"/><text class="t-info" x="520" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="str-throttling"><rect class="body-white" x="570" y="120" width="490" height="290" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 584,120 H 1046 A 14,14 0 0 1 1060,134 V 195 H 570 V 134 A 14,14 0 0 1 584,120 Z" fill="url(#gOrange)"/><text x="590" y="170" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">✋ 2. Throttling (Manual)</text><text x="590" y="240" class="t-keylbl">Agent:</text><text x="670" y="240" class="t-keyval">HANDS at the neck</text><text x="590" y="272" class="t-keylbl">Marks:</text><text x="670" y="272" class="t-keyval">Multiple curved abrasions, bruises (finger nails)</text><text x="590" y="304" class="t-keylbl">Hand pattern:</text><text x="730" y="304" class="t-keyval">Thumb on one side, 4 fingers on opposite</text><text x="590" y="336" class="t-keylbl">Hyoid #:</text><text x="690" y="336" class="t-keyval">MOST COMMON site of hyoid fracture</text><text x="590" y="368" class="t-keylbl">Internal:</text><text x="690" y="368" class="t-keyval">Deep bruising of cricoid + thyroid cartilages</text><text x="590" y="390" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Always HOMICIDAL — self-throttling impossible</text><circle class="ic" cx="1040" cy="138" r="14"/><text class="t-info" x="1040" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="str-bansdola"><rect class="body-white" x="1080" y="120" width="460" height="290" rx="14"/><path d="M 1094,120 H 1526 A 14,14 0 0 1 1540,134 V 195 H 1080 V 134 A 14,14 0 0 1 1094,120 Z" fill="url(#gPurple)"/><text x="1100" y="170" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🪵 3. Bansdola</text><text x="1100" y="240" class="t-keylbl">Method:</text><text x="1190" y="240" class="t-keyval">Two WOODEN STICKS (or bamboo)</text><text x="1100" y="262" class="t-keyval">placed on either side of neck</text><text x="1100" y="284" class="t-keyval">+ tied/squeezed together</text><text x="1100" y="320" class="t-keylbl">Mark:</text><text x="1170" y="320" class="t-keyval">Two parallel linear bruises</text><text x="1100" y="356" class="t-keylbl">PYQ 2016:</text><text x="1200" y="356" class="t-keyval">"Bansdola is a form of</text><text x="1100" y="378" class="t-keyval">strangulation by — WOODEN STICKS"</text><circle class="ic" cx="1510" cy="138" r="14"/><text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="str-garroting"><rect class="body-white" x="60" y="430" width="490" height="290" rx="14"/><path d="M 74,430 H 536 A 14,14 0 0 1 550,444 V 505 H 60 V 444 A 14,14 0 0 1 74,430 Z" fill="url(#gBlue)"/><text x="80" y="480" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🪢 4. Garroting (Spanish)</text><text x="80" y="550" class="t-keylbl">Method:</text><text x="170" y="550" class="t-keyval">Ligature thrown from BEHIND</text><text x="80" y="572" class="t-keyval">+ tightened by a STICK (windlass / tourniquet)</text><text x="80" y="608" class="t-keylbl">Origin:</text><text x="160" y="608" class="t-keyval">Spanish judicial execution method</text><text x="80" y="640" class="t-keylbl">Mark:</text><text x="150" y="640" class="t-keyval">Single horizontal, complete</text><text x="80" y="672" class="t-keylbl">Always:</text><text x="170" y="672" class="t-keyval">HOMICIDAL (sneak attack from behind)</text><circle class="ic" cx="520" cy="448" r="14"/><text class="t-info" x="520" y="454" text-anchor="middle">ⓘ</text></g>

<g data-node-id="str-mugging"><rect class="body-white" x="570" y="430" width="490" height="290" rx="14"/><path d="M 584,430 H 1046 A 14,14 0 0 1 1060,444 V 505 H 570 V 444 A 14,14 0 0 1 584,430 Z" fill="url(#gGreen)"/><text x="590" y="480" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">💪 5. Mugging (Chokehold)</text><text x="590" y="550" class="t-keylbl">Method:</text><text x="680" y="550" class="t-keyval">BEND OF ELBOW around neck from behind</text><text x="590" y="586" class="t-keylbl">Mark:</text><text x="660" y="586" class="t-keyval">Often absent (broad surface — no impression)</text><text x="590" y="618" class="t-keylbl">Mechanism:</text><text x="730" y="618" class="t-keyval">Carotid compression → cerebral hypoxia</text><text x="590" y="650" class="t-keylbl">Context:</text><text x="680" y="650" class="t-keyval">Robbery (street mugging) · police restraint</text><text x="590" y="682" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Hard to prove on autopsy — relies on circumstance</text><circle class="ic" cx="1040" cy="448" r="14"/><text class="t-info" x="1040" y="454" text-anchor="middle">ⓘ</text></g>

<g data-node-id="str-palmar"><rect class="body-white" x="1080" y="430" width="460" height="290" rx="14"/><path d="M 1094,430 H 1526 A 14,14 0 0 1 1540,444 V 505 H 1080 V 444 A 14,14 0 0 1 1094,430 Z" fill="url(#gGrey)"/><text x="1100" y="480" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🖐️ 6. Palmar Strangulation</text><text x="1100" y="550" class="t-keylbl">Method:</text><text x="1190" y="550" class="t-keyval">Heel of palm on front of neck,</text><text x="1100" y="572" class="t-keyval">pressing inward + back</text><text x="1100" y="608" class="t-keylbl">Target:</text><text x="1170" y="608" class="t-keyval">Crushes larynx / trachea</text><text x="1100" y="640" class="t-keylbl">Mark:</text><text x="1170" y="640" class="t-keyval">Bruise on anterior neck</text><text x="1100" y="672" class="t-keylbl">Context:</text><text x="1190" y="672" class="t-keyval">Domestic violence, ambush</text><circle class="ic" cx="1510" cy="448" r="14"/><text class="t-info" x="1510" y="454" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="740" width="1480" height="160" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="784" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">🎯 Strangulation — Universal Features</text><text x="100" y="824" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">• Almost always HOMICIDAL — exception: rare accidental (autoerotic, scarf caught in machine)</text><text x="100" y="850" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">• Face MARKEDLY congested + cyanosed (one or both carotids occluded for shorter time)</text><text x="100" y="876" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">• Pronounced asphyxial stigmata · marked Tardieu spots · severe pulmonary oedema</text>

<rect x="60" y="920" width="1480" height="60" rx="10" fill="url(#gRed)"/><text x="800" y="958" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">⚖️ "LiTh-BaGa-MuPa" — Ligature · Throttling · Bansdola · Garroting · Mugging · Palmar</text>
</svg>`;
const SVG_VA06 = `<svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">PM Findings in Strangulation</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">External: face + ligature/hand marks · Internal: neck + asphyxial signs MORE pronounced than hanging</text>

<g data-node-id="str-pm-face"><rect class="body-white" x="60" y="120" width="740" height="320" rx="14"/><path d="M 74,120 H 786 A 14,14 0 0 1 800,134 V 180 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gBlue)"/><text x="90" y="160" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">👤 External — Face</text><text x="90" y="220" class="t-keylbl">Face:</text><text x="160" y="220" class="t-keyval">MARKEDLY congested + cyanosed (always)</text><text x="90" y="252" class="t-keylbl">Eyes:</text><text x="160" y="252" class="t-keyval">Bulging, pupils dilated; numerous conjunctival petechiae</text><text x="90" y="284" class="t-keylbl">Tongue:</text><text x="180" y="284" class="t-keyval">Protruded, swollen, bitten</text><text x="90" y="316" class="t-keylbl">Lips/ears:</text><text x="200" y="316" class="t-keyval">Cyanosed</text><text x="90" y="348" class="t-keylbl">Bleeding:</text><text x="190" y="348" class="t-keyval">From mouth/nose/ears in severe cases</text><text x="90" y="380" class="t-keylbl">No salivary dribbling:</text><text x="290" y="380" class="t-keyval">(unlike hanging) — important DD point</text><text x="90" y="410" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">More dramatic than hanging due to one-sided occlusion + struggle.</text><circle class="ic" cx="770" cy="138" r="14"/><text class="t-info" x="770" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="str-pm-mark"><rect class="body-white" x="820" y="120" width="720" height="320" rx="14"/><path d="M 834,120 H 1526 A 14,14 0 0 1 1540,134 V 180 H 820 V 134 A 14,14 0 0 1 834,120 Z" fill="url(#gRed)"/><text x="850" y="160" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🪢 External — Mark on Neck</text><text x="850" y="220" class="t-keylbl">Ligature mark:</text><text x="1000" y="220" class="t-keyval"><strong>HORIZONTAL</strong>, COMPLETE, AT/BELOW thyroid</text><text x="850" y="252" class="t-keylbl">Throttling marks:</text><text x="1020" y="252" class="t-keyval">Curved abrasions (finger nails) + bruises</text><text x="850" y="284" class="t-keylbl">Hand pattern:</text><text x="980" y="284" class="t-keyval">Thumb mark on one side, 4 finger marks on other</text><text x="850" y="316" class="t-keylbl">Bansdola:</text><text x="940" y="316" class="t-keyval">Two parallel linear bruises</text><text x="850" y="348" class="t-keylbl">Vital reaction:</text><text x="990" y="348" class="t-keyval">PRONOUNCED bruising, oedema, abrasions</text><text x="850" y="380" class="t-keylbl">Defence wounds:</text><text x="1010" y="380" class="t-keyval">On hands, forearms, face (sign of struggle)</text><circle class="ic" cx="1510" cy="138" r="14"/><text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="str-pm-internal"><rect class="body-white" x="60" y="460" width="740" height="320" rx="14"/><path d="M 74,460 H 786 A 14,14 0 0 1 800,474 V 520 H 60 V 474 A 14,14 0 0 1 74,460 Z" fill="url(#gOrange)"/><text x="90" y="500" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🔬 Internal — Neck Dissection</text><text x="90" y="560" class="t-keylbl">Subcutaneous tissue:</text><text x="290" y="560" class="t-keyval">EXTENSIVE haemorrhage + bruising</text><text x="90" y="592" class="t-keylbl">Strap muscles:</text><text x="240" y="592" class="t-keyval">Sternomastoid + omohyoid haemorrhage</text><text x="90" y="624" class="t-keylbl">Hyoid bone:</text><text x="220" y="624" class="t-keyval">FRACTURE more common (~30-40%, esp. throttling)</text><text x="90" y="656" class="t-keylbl">Cartilages:</text><text x="200" y="656" class="t-keyval">Thyroid + cricoid fracture / bruising</text><text x="90" y="688" class="t-keylbl">Trachea/larynx:</text><text x="240" y="688" class="t-keyval">Congestion, oedema, mucosal abrasion</text><text x="90" y="720" class="t-keylbl">Carotid sheath:</text><text x="240" y="720" class="t-keyval">Bruising; rarely intimal tear</text><text x="90" y="752" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Internal injuries MORE marked than in hanging.</text><circle class="ic" cx="770" cy="478" r="14"/><text class="t-info" x="770" y="484" text-anchor="middle">ⓘ</text></g>

<g data-node-id="str-pm-asphyxial"><rect class="body-white" x="820" y="460" width="720" height="320" rx="14"/><path d="M 834,460 H 1526 A 14,14 0 0 1 1540,474 V 520 H 820 V 474 A 14,14 0 0 1 834,460 Z" fill="url(#gPurple)"/><text x="850" y="500" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🫁 Internal — Asphyxial Signs (MARKED)</text><text x="850" y="560" class="t-keylbl">Petechiae:</text><text x="970" y="560" class="t-keyval">Numerous Tardieu spots — pleura, pericardium</text><text x="850" y="592" class="t-keylbl">Lungs:</text><text x="930" y="592" class="t-keyval">Markedly congested, oedematous, sub-pleural petechiae</text><text x="850" y="624" class="t-keylbl">Heart:</text><text x="930" y="624" class="t-keyval">Right side distended with dark fluid blood</text><text x="850" y="656" class="t-keylbl">Brain:</text><text x="930" y="656" class="t-keyval">Severely congested + oedematous</text><text x="850" y="688" class="t-keylbl">Visceral congestion:</text><text x="1030" y="688" class="t-keyval">Universal — liver, kidneys, spleen</text><text x="850" y="720" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Asphyxial stigmata are typically MORE pronounced than hanging (slower death).</text><circle class="ic" cx="1510" cy="478" r="14"/><text class="t-info" x="1510" y="484" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="800" width="1480" height="60" rx="10" fill="url(#gGreen)"/><text x="800" y="838" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Strangulation findings = hanging findings × MARKED + horizontal mark + no salivary dribbling + defence wounds</text>
</svg>`;
const SVG_VA07 = `<svg viewBox="0 0 1600 1000" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Hyoid Bone Fractures in Asphyxial Deaths</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Hyoid = U-shaped bone at C3 level · 3 fracture patterns based on direction of compression</text>

<g data-node-id="hyoid-anatomy"><rect x="60" y="120" width="1480" height="200" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="160" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white" text-anchor="middle">🦴 Hyoid Bone — Anatomy</text><text x="100" y="200" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">• <strong>U-shaped bone</strong> at the level of <strong>C3 vertebra</strong></text><text x="100" y="226" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">• Suspended from styloid process by stylohyoid ligament · attached to thyroid cartilage</text><text x="100" y="252" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">• Parts: 1 <strong>BODY</strong> (anterior) · 2 <strong>GREATER cornu</strong> (lateral, longer) · 2 <strong>LESSER cornu</strong> (superior, shorter)</text><text x="100" y="278" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">• Ossification: greater cornu fuses with body in middle age — younger hyoid is more flexible (less fracture)</text><text x="100" y="304" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.75)">⭐ Fracture is more common in older individuals (post-fusion); rare under age 25.</text><circle class="ic" cx="1510" cy="140" r="14"/><text class="t-info" x="1510" y="146" text-anchor="middle">ⓘ</text></g>

<g data-node-id="hyoid-inout"><rect class="body-white" x="60" y="340" width="490" height="360" rx="14"/><path d="M 74,340 H 536 A 14,14 0 0 1 550,354 V 410 H 60 V 354 A 14,14 0 0 1 74,340 Z" fill="url(#gGreen)"/><text x="80" y="390" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🔃 1. Inward Compression (IN-and-OUT)</text><text x="80" y="450" class="t-keylbl">Direction:</text><text x="190" y="450" class="t-keyval">Both greater cornua pushed INWARD</text><text x="80" y="482" class="t-keylbl">Fracture site:</text><text x="220" y="482" class="t-keyval">Body or junction of body + greater cornu</text><text x="80" y="514" class="t-keylbl">Outer periosteum:</text><text x="270" y="514" class="t-keyval">TORN (on outer surface)</text><text x="80" y="546" class="t-keylbl">Inner periosteum:</text><text x="270" y="546" class="t-keyval">INTACT</text><text x="80" y="580" class="t-keylbl">Seen in:</text><text x="180" y="580" class="t-keyval">THROTTLING — bilateral compression by hands</text><text x="80" y="620" class="t-keylbl">Vital reaction:</text><text x="240" y="620" class="t-keyval">Haemorrhage in surrounding tissue</text><text x="80" y="658" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Most common fracture pattern in throttling.</text><circle class="ic" cx="520" cy="358" r="14"/><text class="t-info" x="520" y="364" text-anchor="middle">ⓘ</text></g>

<g data-node-id="hyoid-outin"><rect class="body-white" x="570" y="340" width="490" height="360" rx="14"/><path d="M 584,340 H 1046 A 14,14 0 0 1 1060,354 V 410 H 570 V 354 A 14,14 0 0 1 584,340 Z" fill="url(#gOrange)"/><text x="590" y="390" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🔄 2. Outward Compression (OUT-and-IN)</text><text x="590" y="450" class="t-keylbl">Direction:</text><text x="700" y="450" class="t-keyval">Cornua splay OUTWARD</text><text x="590" y="482" class="t-keylbl">Mechanism:</text><text x="730" y="482" class="t-keyval">Ligature pulls upward → splaying force</text><text x="590" y="514" class="t-keylbl">Fracture site:</text><text x="730" y="514" class="t-keyval">Greater cornu tip</text><text x="590" y="546" class="t-keylbl">Outer periosteum:</text><text x="780" y="546" class="t-keyval">INTACT</text><text x="590" y="578" class="t-keylbl">Inner periosteum:</text><text x="780" y="578" class="t-keyval">TORN</text><text x="590" y="612" class="t-keylbl">Seen in:</text><text x="690" y="612" class="t-keyval">HANGING with high knot position</text><text x="590" y="650" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Diagnostic of hanging — direction differentiates from throttling.</text><circle class="ic" cx="1040" cy="358" r="14"/><text class="t-info" x="1040" y="364" text-anchor="middle">ⓘ</text></g>

<g data-node-id="hyoid-ap"><rect class="body-white" x="1080" y="340" width="460" height="360" rx="14"/><path d="M 1094,340 H 1526 A 14,14 0 0 1 1540,354 V 410 H 1080 V 354 A 14,14 0 0 1 1094,340 Z" fill="url(#gRed)"/><text x="1100" y="390" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">↕️ 3. Antero-Posterior</text><text x="1100" y="450" class="t-keylbl">Direction:</text><text x="1210" y="450" class="t-keyval">Cornua pushed BACKWARDS</text><text x="1100" y="482" class="t-keylbl">Mechanism:</text><text x="1240" y="482" class="t-keyval">Direct anterior force</text><text x="1100" y="514" class="t-keyval">(palmar strangulation, direct blow)</text><text x="1100" y="550" class="t-keylbl">Fracture site:</text><text x="1240" y="550" class="t-keyval">Variable; can be body</text><text x="1100" y="582" class="t-keylbl">Seen in:</text><text x="1190" y="582" class="t-keyval">Palmar strangulation,</text><text x="1100" y="604" class="t-keyval">blunt force trauma to neck</text><text x="1100" y="640" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Less common pattern; needs direct frontal force.</text><circle class="ic" cx="1510" cy="358" r="14"/><text class="t-info" x="1510" y="364" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="720" width="1480" height="160" rx="14" fill="url(#gPurple)" filter="url(#cardShadow)"/><text x="800" y="760" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">📊 Hyoid Fracture — Frequency by Cause</text><text x="100" y="798" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">• <strong>Throttling</strong> — fracture in <strong>~30-40 %</strong> · greater cornu (in-and-out pattern) · most common cause of hyoid #</text><text x="100" y="824" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">• <strong>Ligature strangulation</strong> — fracture in <strong>~20-30 %</strong> · variable site</text><text x="100" y="850" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="rgba(255,255,255,0.92)">• <strong>Hanging</strong> — fracture in <strong>&lt; 30 %</strong> · greater cornu (out-and-in) · less common than strangulation</text>

<rect x="60" y="900" width="1480" height="50" rx="10" fill="url(#gOrange)"/><text x="800" y="932" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Throttling = highest hyoid # rate · pattern: greater cornu, inward compression, outer periosteum torn</text>
</svg>`;
const SVG_VA08 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Suffocation Group — 5 Mechanisms</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Obstruction of air passages WITHOUT force on the neck · mostly accidental, some homicidal</text>

<g data-node-id="suf-smothering"><rect class="body-white" x="60" y="120" width="490" height="290" rx="14"/><path d="M 74,120 H 536 A 14,14 0 0 1 550,134 V 195 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gBlue)"/><text x="80" y="170" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">😷 1. Smothering</text><text x="80" y="240" class="t-keylbl">Definition:</text><text x="190" y="240" class="t-keyval">Closing of MOUTH + NOSE externally</text><text x="80" y="272" class="t-keylbl">Agents:</text><text x="160" y="272" class="t-keyval">Pillow, hand, plastic bag, cloth, soft tissue</text><text x="80" y="304" class="t-keylbl">PM findings:</text><text x="220" y="304" class="t-keyval">Bruises / abrasions around mouth + nose</text><text x="80" y="336" class="t-keylbl">Common in:</text><text x="220" y="336" class="t-keyval">Infants (overlying / SIDS DD), homicide</text><text x="80" y="368" class="t-keylbl">Plastic bag:</text><text x="220" y="368" class="t-keyval">Suicide (terminally ill, depression)</text><circle class="ic" cx="520" cy="138" r="14"/><text class="t-info" x="520" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="suf-gagging"><rect class="body-white" x="570" y="120" width="490" height="290" rx="14"/><path d="M 584,120 H 1046 A 14,14 0 0 1 1060,134 V 195 H 570 V 134 A 14,14 0 0 1 584,120 Z" fill="url(#gOrange)"/><text x="590" y="170" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🤐 2. Gagging</text><text x="590" y="240" class="t-keylbl">Definition:</text><text x="700" y="240" class="t-keyval">Material forced INTO mouth</text><text x="590" y="272" class="t-keyval">to block oral cavity / pharynx</text><text x="590" y="304" class="t-keylbl">Agents:</text><text x="670" y="304" class="t-keyval">Cloth, handkerchief, paper, tape</text><text x="590" y="336" class="t-keylbl">PM findings:</text><text x="730" y="336" class="t-keyval">Foreign material in oropharynx; abrasions</text><text x="590" y="358" class="t-keyval">on lips, teeth marks on cheek mucosa</text><text x="590" y="390" class="t-keylbl">Common in:</text><text x="730" y="390" class="t-keyval">Burglary victims (silenced + restrained)</text><circle class="ic" cx="1040" cy="138" r="14"/><text class="t-info" x="1040" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="suf-choking"><rect class="body-white" x="1080" y="120" width="460" height="290" rx="14"/><path d="M 1094,120 H 1526 A 14,14 0 0 1 1540,134 V 195 H 1080 V 134 A 14,14 0 0 1 1094,120 Z" fill="url(#gRed)"/><text x="1100" y="170" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🍞 3. Choking</text><text x="1100" y="240" class="t-keylbl">Definition:</text><text x="1210" y="240" class="t-keyval">INTERNAL obstruction of</text><text x="1100" y="262" class="t-keyval">airway by foreign body</text><text x="1100" y="298" class="t-keylbl">Bolus death:</text><text x="1230" y="298" class="t-keyval">Food bolus stuck at larynx</text><text x="1100" y="320" class="t-keyval">— vagal reflex → sudden cardiac arrest</text><text x="1100" y="356" class="t-keylbl">PM:</text><text x="1160" y="356" class="t-keyval">Foreign body in larynx/trachea</text><text x="1100" y="388" class="t-keylbl">Common in:</text><text x="1220" y="388" class="t-keyval">Elderly, drunk, dementia</text><circle class="ic" cx="1510" cy="138" r="14"/><text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="suf-traumatic"><rect class="body-white" x="60" y="430" width="490" height="290" rx="14"/><path d="M 74,430 H 536 A 14,14 0 0 1 550,444 V 505 H 60 V 444 A 14,14 0 0 1 74,430 Z" fill="url(#gPurple)"/><text x="80" y="480" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">💥 4. Traumatic Asphyxia</text><text x="80" y="550" class="t-keylbl">Definition:</text><text x="190" y="550" class="t-keyval">External compression of CHEST</text><text x="80" y="572" class="t-keyval">prevents respiratory movements</text><text x="80" y="608" class="t-keylbl">Causes:</text><text x="170" y="608" class="t-keyval">Crowd crush, stampede, building collapse,</text><text x="80" y="630" class="t-keyval">vehicle pinning, industrial accident</text><text x="80" y="664" class="t-keylbl">Cardinal sign:</text><text x="240" y="664" class="t-keyval"><strong>Masque ecchymotique</strong> — deep blue</text><text x="80" y="686" class="t-keyval">discolouration of face, neck, upper chest</text><circle class="ic" cx="520" cy="448" r="14"/><text class="t-info" x="520" y="454" text-anchor="middle">ⓘ</text></g>

<g data-node-id="suf-overlying"><rect class="body-white" x="570" y="430" width="490" height="290" rx="14"/><path d="M 584,430 H 1046 A 14,14 0 0 1 1060,444 V 505 H 570 V 444 A 14,14 0 0 1 584,430 Z" fill="url(#gGreen)"/><text x="590" y="480" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">👶 5. Overlying / SIDS DD</text><text x="590" y="550" class="t-keylbl">Overlying:</text><text x="690" y="550" class="t-keyval">Adult accidentally smothers infant</text><text x="590" y="572" class="t-keyval">while co-sleeping (mostly accidental)</text><text x="590" y="608" class="t-keylbl">SIDS:</text><text x="650" y="608" class="t-keyval">Sudden Infant Death Syndrome — unexplained</text><text x="590" y="630" class="t-keyval">death of infant &lt; 1 yr (DD for overlying)</text><text x="590" y="666" class="t-keylbl">Distinguish:</text><text x="720" y="666" class="t-keyval">Detailed scene reconstruction + autopsy needed</text><text x="590" y="696" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">SIDS detailed in Ch 20 (Infant Deaths).</text><circle class="ic" cx="1040" cy="448" r="14"/><text class="t-info" x="1040" y="454" text-anchor="middle">ⓘ</text></g>

<g data-node-id="suf-burking"><rect class="body-white" x="1080" y="430" width="460" height="290" rx="14"/><path d="M 1094,430 H 1526 A 14,14 0 0 1 1540,444 V 505 H 1080 V 444 A 14,14 0 0 1 1094,430 Z" fill="url(#gGrey)"/><text x="1100" y="480" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">⚖️ 6. Burking</text><text x="1100" y="550" class="t-keylbl">Definition:</text><text x="1210" y="550" class="t-keyval">Combined smothering +</text><text x="1100" y="572" class="t-keyval">chest compression</text><text x="1100" y="608" class="t-keylbl">Method:</text><text x="1180" y="608" class="t-keyval">Sitting on chest + closing</text><text x="1100" y="630" class="t-keyval">mouth/nose</text><text x="1100" y="666" class="t-keylbl">Named after:</text><text x="1230" y="666" class="t-keyval">William Burke (1828 Edinburgh)</text><text x="1100" y="688" class="t-keyval">— sold bodies to anatomy school</text><circle class="ic" cx="1510" cy="448" r="14"/><text class="t-info" x="1510" y="454" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="740" width="1480" height="180" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="780" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">⚙️ Common Features in Suffocation Group</text><text x="100" y="820" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">• Classical asphyxial signs (Tardieu spots, cyanosis, congestion) usually present</text><text x="100" y="846" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">• Marks AROUND or INSIDE mouth/nose · NO ligature mark on neck</text><text x="100" y="872" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">• Foreign body may be retrieved on autopsy (gagging, choking)</text><text x="100" y="898" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">• Diagnosis often relies on scene reconstruction + circumstances</text>

<rect x="60" y="940" width="1480" height="50" rx="10" fill="url(#gOrange)"/><text x="800" y="972" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Masque ecchymotique = pathognomonic for traumatic asphyxia (crush)</text>
</svg>`;
const SVG_VA09 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Drowning — Types &amp; Mechanism</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Asphyxia from immersion of mouth/nose in fluid · 4 types based on mechanism</text>

<g data-node-id="drown-definition"><rect class="nbcr" x="60" y="120" width="1480" height="100" rx="14"/><text x="90" y="158" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">💧 DROWNING</text><text x="90" y="188" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= Death by asphyxia caused by immersion of mouth and nose in fluid medium · fluid fills the airways preventing gas exchange · "fluid" can be water, sewage, mud, oil, blood, etc.</text><circle class="ic" cx="1500" cy="140" r="14"/><text class="t-info" x="1500" y="146" text-anchor="middle">ⓘ</text></g>

<g data-node-id="drown-wet"><rect class="body-white" x="60" y="250" width="740" height="290" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 74,250 H 786 A 14,14 0 0 1 800,264 V 320 H 60 V 264 A 14,14 0 0 1 74,250 Z" fill="url(#gBlue)"/><text x="90" y="290" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🌊 1. WET Drowning (~90%)</text><text x="90" y="350" class="t-keylbl">Mechanism:</text><text x="240" y="350" class="t-keyval">Fluid aspirated into LUNGS</text><text x="90" y="382" class="t-keylbl">Fresh water:</text><text x="220" y="382" class="t-keyval">Hypotonic → into circulation → haemodilution</text><text x="110" y="404" class="t-keyval">→ haemolysis → hyperkalaemia → VF + death (5-10 min)</text><text x="90" y="436" class="t-keylbl">Sea water:</text><text x="200" y="436" class="t-keyval">Hypertonic → water OUT of circulation → pulmonary</text><text x="110" y="458" class="t-keyval">oedema → hypovolaemia + hypoxia → death (8-12 min)</text><text x="90" y="494" class="t-keylbl">Most common type</text><circle class="ic" cx="770" cy="268" r="14"/><text class="t-info" x="770" y="274" text-anchor="middle">ⓘ</text></g>

<g data-node-id="drown-dry"><rect class="body-white" x="820" y="250" width="720" height="290" rx="14"/><path d="M 834,250 H 1526 A 14,14 0 0 1 1540,264 V 320 H 820 V 264 A 14,14 0 0 1 834,250 Z" fill="url(#gGreen)"/><text x="850" y="290" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🚫 2. DRY Drowning (~10%)</text><text x="850" y="350" class="t-keylbl">Mechanism:</text><text x="1000" y="350" class="t-keyval">Sudden LARYNGOSPASM at first contact</text><text x="870" y="372" class="t-keyval">with water → larynx closes → asphyxia → death</text><text x="850" y="404" class="t-keylbl">Lungs:</text><text x="920" y="404" class="t-keyval">REMAIN DRY at autopsy (no fluid)</text><text x="850" y="436" class="t-keylbl">Common in:</text><text x="980" y="436" class="t-keyval">Cold water entry, panic, intoxication</text><text x="850" y="468" class="t-keylbl">Diagnosis:</text><text x="960" y="468" class="t-keyval">Difficult — by exclusion + history</text><text x="850" y="500" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Tip: Watch for cyanosed face, foaming at mouth despite dry lungs.</text><circle class="ic" cx="1510" cy="268" r="14"/><text class="t-info" x="1510" y="274" text-anchor="middle">ⓘ</text></g>

<g data-node-id="drown-secondary"><rect class="body-white" x="60" y="560" width="740" height="290" rx="14"/><path d="M 74,560 H 786 A 14,14 0 0 1 800,574 V 630 H 60 V 574 A 14,14 0 0 1 74,560 Z" fill="url(#gOrange)"/><text x="90" y="600" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">⏱️ 3. SECONDARY (Post-immersion)</text><text x="90" y="660" class="t-keylbl">Time:</text><text x="160" y="660" class="t-keyval">Death HOURS to DAYS after rescue</text><text x="90" y="692" class="t-keylbl">Mechanism:</text><text x="240" y="692" class="t-keyval">Aspirated water damages surfactant →</text><text x="110" y="714" class="t-keyval">delayed pulmonary oedema · ARDS · pneumonia</text><text x="90" y="750" class="t-keylbl">Risk factors:</text><text x="240" y="750" class="t-keyval">Aspiration of large volume, cold water,</text><text x="110" y="772" class="t-keyval">prolonged immersion, fresh water</text><text x="90" y="804" class="t-keylbl">Management:</text><text x="250" y="804" class="t-keyval">Observe rescued drowning victims ≥ 24h</text><circle class="ic" cx="770" cy="578" r="14"/><text class="t-info" x="770" y="584" text-anchor="middle">ⓘ</text></g>

<g data-node-id="drown-immersion"><rect class="body-white" x="820" y="560" width="720" height="290" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 834,560 H 1526 A 14,14 0 0 1 1540,574 V 630 H 820 V 574 A 14,14 0 0 1 834,560 Z" fill="url(#gPurple)"/><text x="850" y="600" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">⚡ 4. IMMERSION (HYDROCUTION)</text><text x="850" y="660" class="t-keylbl">Definition:</text><text x="980" y="660" class="t-keyval">SUDDEN DEATH on entering cold water</text><text x="850" y="692" class="t-keylbl">Mechanism:</text><text x="1000" y="692" class="t-keyval"><strong>VAGAL INHIBITION</strong> — cold water on</text><text x="870" y="714" class="t-keyval">skin / hitting epigastrium triggers reflex cardiac arrest</text><text x="850" y="750" class="t-keylbl">Time to death:</text><text x="1010" y="750" class="t-keyval">Within SECONDS to 1-2 minutes</text><text x="850" y="782" class="t-keylbl">Lungs:</text><text x="930" y="782" class="t-keyval">May be dry (death too fast to aspirate)</text><text x="850" y="814" class="t-keylbl">Synonyms:</text><text x="970" y="814" class="t-keyval">"Hydrocution" · "Cold shock"</text><circle class="ic" cx="1510" cy="578" r="14"/><text class="t-info" x="1510" y="584" text-anchor="middle">ⓘ</text></g>

<g data-node-id="drown-stages"><rect x="60" y="870" width="1480" height="200" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="912" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">⏱️ 5 Stages of Drowning (in wet drowning)</text><text x="100" y="950" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>1. Surprise</strong> (5-10 sec) — sudden immersion → reflex inspiration → water enters airways</text><text x="100" y="976" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>2. Resistance / Struggle</strong> (1-2 min) — breath-holding · violent struggle · panic · efforts to rise</text><text x="100" y="1002" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>3. Deep respiration phase</strong> (1-2 min) — involuntary deep breaths → massive water inhalation</text><text x="100" y="1028" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>4. Convulsions / exhaustion</strong> (1 min) — generalised seizures · hypoxia · unconsciousness</text><text x="100" y="1054" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>5. Death</strong> — total respiratory + cardiac arrest · typical duration ~5 min</text><circle class="ic" cx="1510" cy="890" r="14"/><text class="t-info" x="1510" y="896" text-anchor="middle">ⓘ</text></g>
</svg>`;
const SVG_VA10 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">PM Findings in Drowning</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">External: cutis anserina, washerwoman's hand, champignon froth · Internal: emphysema aquosum, diatoms</text>

<g data-node-id="drown-pm-external"><rect class="body-white" x="60" y="120" width="740" height="380" rx="14"/><path d="M 74,120 H 786 A 14,14 0 0 1 800,134 V 180 H 60 V 134 A 14,14 0 0 1 74,120 Z" fill="url(#gBlue)"/><text x="90" y="160" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">👤 External Findings</text><text x="90" y="220" class="t-keylbl">Face:</text><text x="160" y="220" class="t-keyval">Pale (early) or cyanosed (late); puffy</text><text x="90" y="252" class="t-keylbl">Mouth/nostrils:</text><text x="270" y="252" class="t-keyval"><strong>Champignon mushroom froth</strong></text><text x="110" y="274" class="t-keyval">(fine, white-pinkish, persistent — pathognomonic)</text><text x="90" y="310" class="t-keylbl">Eyes:</text><text x="160" y="310" class="t-keyval">Open; conjunctival haemorrhages</text><text x="90" y="342" class="t-keylbl">Cutis anserina (goose-skin):</text><text x="330" y="342" class="t-keyval">Erection of hair follicles</text><text x="110" y="364" class="t-keyval">from cold + rigor of arrectores pilorum (NON-specific)</text><text x="90" y="400" class="t-keylbl">Washerwoman's hand:</text><text x="290" y="400" class="t-keyval">Wrinkling + sodden whitening of</text><text x="110" y="422" class="t-keyval">palms and soles (after &gt; 2 hours immersion)</text><text x="90" y="458" class="t-keylbl">Clenched fists:</text><text x="240" y="458" class="t-keyval">Cadaveric spasm — may grasp weeds, mud</text><circle class="ic" cx="770" cy="138" r="14"/><text class="t-info" x="770" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="drown-pm-lungs"><rect class="body-white" x="820" y="120" width="720" height="380" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 834,120 H 1526 A 14,14 0 0 1 1540,134 V 180 H 820 V 134 A 14,14 0 0 1 834,120 Z" fill="url(#gRed)"/><text x="850" y="160" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🫁 Lungs — Key Findings</text><text x="850" y="220" class="t-keylbl">Emphysema aquosum:</text><text x="1080" y="220" class="t-keyval">Lungs ballooned, heavy,</text><text x="870" y="242" class="t-keyval">overlap at midline · pit on pressure</text><text x="850" y="278" class="t-keylbl">Surface:</text><text x="940" y="278" class="t-keyval"><strong>Paltauf haemorrhages</strong> — sub-pleural</text><text x="870" y="300" class="t-keyval">bluish-red haemorrhages (rupture of alveolar capillaries)</text><text x="850" y="336" class="t-keylbl">Cut surface:</text><text x="980" y="336" class="t-keyval">Frothy fluid + blood-stained mucus</text><text x="850" y="368" class="t-keylbl">Airways:</text><text x="940" y="368" class="t-keyval">Fine frothy fluid in trachea, bronchi</text><text x="850" y="400" class="t-keylbl">Stomach:</text><text x="950" y="400" class="t-keyval">Water + sand / silt (swallowed during struggle)</text><text x="850" y="432" class="t-keylbl">Middle ear:</text><text x="980" y="432" class="t-keyval">Haemorrhage (Niles sign — DD: head injury)</text><text x="850" y="464" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Paltauf haemorrhage = relatively specific for drowning.</text><circle class="ic" cx="1510" cy="138" r="14"/><text class="t-info" x="1510" y="144" text-anchor="middle">ⓘ</text></g>

<g data-node-id="drown-diatom"><rect class="body-white" x="60" y="520" width="740" height="320" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 74,520 H 786 A 14,14 0 0 1 800,534 V 580 H 60 V 534 A 14,14 0 0 1 74,520 Z" fill="url(#gGreen)"/><text x="90" y="560" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🔬 Diatom Test (Gold Standard)</text><text x="90" y="620" class="t-keylbl">Principle:</text><text x="190" y="620" class="t-keyval">Diatoms = microscopic algae in water</text><text x="90" y="650" class="t-keyval">Antemortem drowning → diatoms aspirated into lungs →</text><text x="90" y="672" class="t-keyval">enter circulation via pulmonary capillaries → reach</text><text x="90" y="694" class="t-keyval">distant organs (brain, kidney, bone marrow, sternum)</text><text x="90" y="730" class="t-keylbl">Test:</text><text x="160" y="730" class="t-keyval">Acid-digestion of organs · examine sediment by microscopy</text><text x="90" y="762" class="t-keylbl">Best sample:</text><text x="240" y="762" class="t-keyval">FEMUR BONE MARROW (deep, less contamination)</text><text x="90" y="794" class="t-keylbl">Positive test:</text><text x="240" y="794" class="t-keyval">Diatoms in distant organs ⟹ ANTEMORTEM drowning</text><text x="90" y="822" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">Limitations: false positives (contamination), false negatives (clean water).</text><circle class="ic" cx="770" cy="538" r="14"/><text class="t-info" x="770" y="544" text-anchor="middle">ⓘ</text></g>

<g data-node-id="drown-misc"><rect class="body-white" x="820" y="520" width="720" height="320" rx="14"/><path d="M 834,520 H 1526 A 14,14 0 0 1 1540,534 V 580 H 820 V 534 A 14,14 0 0 1 834,520 Z" fill="url(#gPurple)"/><text x="850" y="560" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">📊 Other Useful Tests</text><text x="850" y="620" class="t-keylbl">Gettler test:</text><text x="970" y="620" class="t-keyval">Chloride concentration in L vs R heart blood</text><text x="870" y="642" class="t-keyval">— fresh water drowning: ↑ in L heart</text><text x="850" y="678" class="t-keylbl">Specific gravity test:</text><text x="1040" y="678" class="t-keyval">Blood specific gravity ↓ in fresh-water</text><text x="850" y="710" class="t-keylbl">Strontium test:</text><text x="990" y="710" class="t-keyval">Strontium in blood = sea-water drowning</text><text x="850" y="742" class="t-keylbl">Hydrocution (immersion):</text><text x="1090" y="742" class="t-keyval">Lungs may be DRY</text><text x="870" y="764" class="t-keyval">— sudden vagal arrest before aspiration</text><text x="850" y="800" font-family="Inter,system-ui,sans-serif" font-size="11.5" font-style="italic" fill="#6B7283">In hydrocution, suspect on history + cold water + sudden collapse.</text><circle class="ic" cx="1510" cy="538" r="14"/><text class="t-info" x="1510" y="544" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="860" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="898" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Pathognomonic = champignon froth + Paltauf haemorrhages + diatoms in distant organs</text>

<rect x="60" y="940" width="1480" height="60" rx="10" fill="url(#gGrey)"/><text x="800" y="978" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">⚠️ DD for body in water: drowning · antemortem injury + body dumped · hydrocution · cardiac death</text>
</svg>`;

const NODES = {
  'asphyxia-definition': { label: 'Violent Asphyxia — Definition', info: '<p>A condition of impaired gas exchange — deficient O₂ + accumulated CO₂ — caused by <strong>mechanical interference with respiration</strong>. The word "violent" implies external mechanical force as the cause (as opposed to disease-related asphyxia like pneumonia or asthma).</p><p>The result is cellular hypoxia, particularly affecting the most O₂-sensitive organ — the brain — leading to unconsciousness within ~10 seconds of cerebral O₂ deprivation and irreversible neuronal damage after 4-5 minutes.</p>', tags: ['Mechanical', '5 main types'] },
  'va-hanging': { label: 'Hanging', info: '<p>Constriction of neck by a <strong>ligature suspended at one end</strong>, with <strong>body weight</strong> (whole or partial) providing the constricting force.</p><p><strong>Manner of death:</strong> Mostly <strong>suicidal</strong>; very rarely homicidal (extremely difficult to overpower an adult); occasionally accidental (autoerotic asphyxia, children playing).</p><p><strong>Mechanism:</strong> primarily <strong>venous obstruction</strong> → cerebral congestion + hypoxia. Other mechanisms: asphyxia (airway occlusion), vagal inhibition, cervical spine injury (judicial).</p>', tags: ['Suspended', 'Mostly suicidal'] },
  'va-strangulation': { label: 'Strangulation', info: '<p>Constriction of neck by external force OTHER than body weight. Force applied by ligature, hand, stick, or arm bend.</p><p><strong>Manner:</strong> Mostly <strong>HOMICIDAL</strong> (the converse of hanging).</p><p><strong>Subtypes:</strong></p><ul><li><strong>Ligature strangulation</strong> — by rope, scarf, dupatta, wire</li><li><strong>Throttling (Manual)</strong> — by hands at the neck</li><li><strong>Bansdola</strong> — between two wooden sticks (NEET-PG 2016 PYQ)</li><li><strong>Garroting</strong> — Spanish method, ligature with stick (windlass)</li><li><strong>Mugging</strong> — bend of elbow around neck (chokehold)</li><li><strong>Palmar</strong> — pressure with palm on front of neck</li></ul>', tags: ['Mostly homicidal', '6 subtypes'] },
  'va-suffocation': { label: 'Suffocation', info: '<p>Obstruction of the <strong>external air passages</strong> (mouth, nose) WITHOUT force on the neck.</p><p><strong>Subtypes:</strong></p><ul><li><strong>Smothering</strong> — closing of mouth and nose (pillow, hand, plastic bag)</li><li><strong>Gagging</strong> — material forced into mouth</li><li><strong>Choking</strong> — internal obstruction of airway (food, foreign body, bolus death)</li><li><strong>Traumatic asphyxia</strong> — external compression of chest (crush injury, stampede)</li><li><strong>Overlying</strong> — accidental in infants (SIDS differential)</li><li><strong>Burking</strong> — sitting on chest + closing mouth/nose (named after William Burke)</li></ul>', tags: ['No neck force', '6 subtypes'] },
  'va-drowning': { label: 'Drowning', info: '<p>Asphyxia from <strong>immersion of mouth/nose in fluid</strong> that fills the airways and prevents gas exchange.</p><p><strong>Types:</strong></p><ul><li><strong>Wet drowning</strong> (~90 %) — fluid aspirated into lungs</li><li><strong>Dry drowning</strong> (~10 %) — laryngospasm; lungs remain dry</li><li><strong>Secondary drowning</strong> — death hours-days later from pulmonary oedema/ARDS</li><li><strong>Immersion (hydrocution)</strong> — sudden death on entering cold water, vagal reflex</li></ul><p><strong>Manner:</strong> Mostly accidental; sometimes suicidal (in deep water); rarely homicidal (forcibly held under).</p>', tags: ['Wet/Dry/Secondary/Immersion'] },
  'va-chemical': { label: 'Chemical Asphyxia', info: '<p>Asphyxia caused by gases or chemicals that interfere with O₂ uptake, transport, or cellular utilization. Detailed in toxicology (Ch 47 Asphyxiants).</p><p><strong>Common agents:</strong></p><ul><li><strong>Carbon monoxide (CO)</strong> — binds Hb (240× O₂ affinity) → carboxyhaemoglobin → cherry-red lividity</li><li><strong>Carbon dioxide (CO₂)</strong> — displaces O₂; in confined spaces, silos, wells</li><li><strong>Hydrogen sulfide (H₂S)</strong> — "rotten egg" gas; sewer death</li><li><strong>Hydrogen cyanide (HCN)</strong> — inhibits cytochrome oxidase</li><li><strong>Methyl isocyanate (MIC)</strong> — Bhopal disaster</li></ul>', tags: ['Cross-ref Ch 47', 'CO most common'] },
  'va-stages': { label: 'Four Stages of Asphyxia', info: '<p>Pathophysiological progression in mechanical asphyxia:</p><ol><li><strong>Dyspnoea</strong> (~1 min) — increased respiratory effort; rising PaCO₂ stimulates respiratory centre</li><li><strong>Convulsions</strong> (~1 min) — generalised seizures from cerebral hypoxia; consciousness lost</li><li><strong>Apnoea / Exhaustion</strong> (~1 min) — irregular gasps, paralysis of respiratory centre</li><li><strong>Death</strong> — total respiratory + cardiac arrest</li></ol><p><strong>Typical duration to death:</strong> 3-5 minutes from onset.</p><p>This sequence is classical but may be telescoped or absent in vagal-inhibition deaths (which are sudden).</p>', tags: ['~3-5 min total', 'Classical 4 stages'] },
  'va-signs': { label: 'Classical Asphyxial Signs (Stigmata)', info: '<p>Constellation of post-mortem findings traditionally associated with asphyxia. None is specific; collectively they support the diagnosis.</p><p><strong>1. Cyanosis</strong> — bluish discolouration (skin, lips, nails) from deoxygenated blood.</p><p><strong>2. Petechial haemorrhages</strong> (<em>Tardieu spots</em>) — pinpoint haemorrhages on conjunctivae, face, behind ears, pleura, pericardium. The most pathognomonic of asphyxial signs.</p><p><strong>3. Congestion</strong> — face, head, neck appear engorged; visceral organs congested.</p><p><strong>4. Fluidity of blood</strong> — blood remains dark and fluid (high CO₂ + post-mortem fibrinolysis).</p><p><strong>5. Right heart dilatation</strong> — RV engorged with dark fluid blood.</p><p><strong>6. Pulmonary oedema + congestion</strong></p><p><strong>7. Visceral congestion</strong> (liver, kidneys, spleen).</p><p><strong>⚠️ Caveat:</strong> these signs are NON-SPECIFIC — seen in other modes of sudden death too. The diagnosis of asphyxia rests on history, scene, and exclusion.</p>', tags: ['Tardieu spots', 'Non-specific'] },

  'hanging-definition': { label: 'Hanging — Definition', info: '<p><strong>Hanging</strong> is the constriction of the neck by a ligature, the constricting force being supplied by the weight of the body (whole or partial).</p><p>The defining feature — distinguishing it from strangulation — is that the body weight itself supplies the force; the ligature is suspended from a fixed point above.</p>', tags: ['Force = body weight'] },
  'hanging-complete': { label: 'Complete Hanging', info: '<p>Body is <strong>fully suspended</strong>; feet do not touch the ground.</p><p><strong>Force on neck:</strong> Full body weight.</p><p><strong>Ligature mark:</strong> Deep, oblique, above the level of thyroid cartilage, often parchment-like.</p><p><strong>Knot position:</strong> typically posterior (occipital) or lateral.</p><p><strong>Outcome:</strong> Death is usual; rescue is rare. Loss of consciousness within 10-15 seconds; brain death within minutes.</p>', tags: ['Body fully suspended', 'Deep oblique mark'] },
  'hanging-partial': { label: 'Partial Hanging', info: '<p>Body is <strong>partly supported</strong> — feet/knees touch the ground, or in sitting/kneeling/lying position.</p><p><strong>Force on neck:</strong> Only a fraction of body weight.</p><p><strong>Important insight:</strong> Only <strong>4-5 kg of pressure</strong> is needed to occlude carotid arteries. So death by hanging is fully possible from partial suspension alone.</p><p><strong>~50 % of suicidal hangings are partial</strong> — must not be dismissed as "non-suicide" just because the body wasn\\\'t fully suspended.</p>', tags: ['Feet may touch ground', '4-5 kg occludes carotid'] },
  'hanging-typical': { label: 'Typical Hanging', info: '<p><strong>Knot at the back of the neck</strong> (occiput / nape). Body hangs symmetrically.</p><p><strong>Vascular effects:</strong> Both carotids fully occluded — fast unconsciousness.</p><p><strong>PM findings:</strong> Face PALE (no blood reaching head); ligature mark V-shaped above thyroid; symmetric.</p><p>Asphyxial stigmata are LESS pronounced because death is rapid.</p>', tags: ['Knot at back', 'Face PALE'] },
  'hanging-atypical': { label: 'Atypical Hanging', info: '<p><strong>Knot anywhere EXCEPT the back of neck</strong> (sides, front, anterior, lateral).</p><p>Head tilts to the opposite side of the knot.</p><p><strong>Vascular effects:</strong> ASYMMETRIC carotid occlusion — one side may remain patent → slower onset of unconsciousness.</p><p><strong>PM findings:</strong> Face CONGESTED + cyanosed (blood reaches head via patent vessel); ligature mark less marked; asphyxial signs MORE pronounced.</p>', tags: ['Knot lateral/anterior', 'Face CONGESTED'] },
  'hanging-mechanism': { label: 'Mechanism of Death in Hanging', info: '<p>Death in hanging results from one or more of:</p><ol><li><strong>Venous obstruction</strong> (most common) — jugular veins compress before carotids → cerebral congestion + hypoxia. ~4 kg pressure occludes jugulars.</li><li><strong>Asphyxia</strong> — tracheal/laryngeal occlusion (~15 kg pressure). Common in complete typical hanging.</li><li><strong>Vagal inhibition (cardiac arrest)</strong> — reflex via carotid sinus baroreceptor pressure → sudden cardiac arrest. Death almost instantaneous; few asphyxial signs.</li><li><strong>Cervical spine injury</strong> — fracture-dislocation of C2-C3 (the "hangman\\\'s fracture") in JUDICIAL hanging with calculated drop. Suicidal hangings rarely break the neck.</li></ol><p><strong>Judicial hanging drop:</strong> ~5-7 feet, calculated by formula (1260 ÷ body weight in pounds, in feet) — fractures cervical spine causing instantaneous death.</p>', tags: ['Venous → asphyxia → vagal → spine', 'Hangman fracture C2-C3'] },

  'pm-external-face': { label: 'External — Face &amp; Head', info: '<p><strong>Typical (knot at back) — face PALE</strong> because both carotids are occluded.</p><p><strong>Atypical (knot elsewhere) — face CONGESTED + cyanosed</strong> because one carotid stays patent.</p><p><strong>Tongue:</strong> protruded, swollen, bitten by teeth at corners; congested.</p><p><strong>Eyes:</strong> open or half-open; pupils dilated; conjunctival petechiae (Tardieu spots).</p><p><strong>Salivary dribbling — most reliable antemortem sign:</strong> saliva trickles DOWN from corner of mouth on the side OPPOSITE to the knot, due to pressure on the parotid duct. Only happens in antemortem hanging — proves the person was alive when suspended. (NEET-PG 2016 PYQ.)</p><p><strong>Hands:</strong> often clenched (cadaveric spasm) — significant of antemortem suspension.</p><p><strong>Penis:</strong> erection ± seminal discharge (common in male suicides).</p><p><strong>Lividity:</strong> in dependent parts — lower limbs, hands; "glove-and-stocking" pattern from prolonged suspension.</p>', tags: ['Face pale/congested', 'Salivary dribbling = AM sign'] },
  'pm-external-ligature': { label: 'External — Ligature Mark (★ KEY)', info: '<p>The ligature mark in hanging has 7 characteristic features that distinguish it from strangulation:</p><ol><li><strong>OBLIQUE</strong> — rises towards the knot</li><li><strong>INCOMPLETE</strong> — interrupted at the knot site</li><li><strong>ABOVE thyroid cartilage</strong> (at level of chin)</li><li><strong>Reproduces ligature texture</strong> — rope twist, leather stitching, dupatta weave</li><li><strong>Colour:</strong> pale/yellow-brown initially → dark parchment-like (dried &amp; shrunken) after death</li><li><strong>Knot impression</strong> — pressure mark at knot site</li><li><strong>Vital reaction</strong> — bruising/abrasion around mark = antemortem</li></ol><p>Contrast with strangulation: HORIZONTAL · COMPLETE · BELOW thyroid · less variable depth.</p>', tags: ['7 features', 'AM vs PM'] },
  'pm-internal-neck': { label: 'Internal — Neck Dissection', info: '<p>Examined via bloodless neck-dissection technique (head elevated, blood drained):</p><ul><li><strong>Subcutaneous tissues</strong> — PALE, glistening, dry beneath the ligature mark</li><li><strong>Sternomastoid muscles</strong> — small haemorrhages (vital reaction) if antemortem</li><li><strong>Carotid sheath</strong> — <strong>Amussat\\\'s sign</strong>: transverse tear in intima of common carotid (in jerk / judicial hangings)</li><li><strong>Hyoid bone</strong> — fracture in &lt;30 % (greater wing or cornu)</li><li><strong>Thyroid cartilage</strong> — superior cornu fracture possible</li><li><strong>Cervical spine</strong> — fracture of C2-C3 in JUDICIAL hanging only; rare in suicidal</li><li><strong>Trachea/larynx</strong> — congestion, occasional minor abrasions on mucosa</li></ul>', tags: ['Amussat sign', 'Hyoid &lt;30%'] },
  'pm-internal-asphyxial': { label: 'Internal — Asphyxial Signs', info: '<p>The classical asphyxial stigmata seen at autopsy in hanging:</p><ul><li><strong>Petechial haemorrhages</strong> on pleura (Tardieu spots), pericardium, conjunctivae</li><li><strong>Lungs</strong> — congested, oedematous; sub-pleural petechiae</li><li><strong>Heart</strong> — right side dilated, full of dark fluid blood</li><li><strong>Brain</strong> — congested; meningeal vessels engorged</li><li><strong>Blood</strong> — dark, fluid (high CO₂ + fibrinolysis); does not clot well</li><li><strong>Visceral congestion</strong> — liver, kidneys, spleen all engorged</li></ul><p><strong>Note:</strong> asphyxial stigmata are LESS pronounced in typical hanging (death too fast, mostly cerebral) compared to atypical (slower, more classical asphyxia).</p>', tags: ['Tardieu spots', 'Right heart full'] },
  'lm-direction': { label: 'Ligature Mark — Direction', info: '<p><strong>Hanging mark:</strong> OBLIQUE — runs upward toward the knot. The most reliable single distinguishing feature.</p><p><strong>Strangulation mark:</strong> HORIZONTAL — encircles the neck level.</p><p>Reason: hanging suspends body weight from a fixed knot above, so the ligature angles up to that point. Strangulation force is applied horizontally around the neck.</p>', tags: ['Oblique vs Horizontal'] },
  'lm-continuity': { label: 'Ligature Mark — Continuity', info: '<p><strong>Hanging mark:</strong> INCOMPLETE — broken at the knot site, because the ligature lifts off the skin at that point.</p><p><strong>Strangulation mark:</strong> COMPLETE — fully encircles the neck, because the ligature is wound around without a single elevated knot.</p>', tags: ['Incomplete vs Complete'] },
  'lm-level': { label: 'Ligature Mark — Level vs Thyroid Cartilage', info: '<p>The thyroid cartilage is the anatomical landmark:</p><ul><li><strong>Hanging:</strong> mark is <strong>ABOVE</strong> the thyroid (typically at level of chin / mandibular angle)</li><li><strong>Strangulation:</strong> mark is <strong>AT or BELOW</strong> the thyroid</li></ul><p>Reason: in hanging, the rising direction places the upper portion of the loop above thyroid.</p>', tags: ['Above vs At/Below'] },
  'lm-texture': { label: 'Ligature Mark — Texture / Pattern', info: '<p>The ligature mark <strong>reproduces the surface pattern</strong> of the constricting agent:</p><ul><li><strong>Rope:</strong> twisted pattern with linear depressions</li><li><strong>Leather belt:</strong> stitching pattern visible</li><li><strong>Dupatta / scarf:</strong> weave pattern</li><li><strong>Electrical cable:</strong> ridges</li><li><strong>Soft cloth:</strong> shallow, broad, often subtle</li></ul><p><strong>Hard ligatures</strong> (rope, cable) leave sharp, deep, parchment-like marks. <strong>Soft ligatures</strong> (silk scarf) may leave only a faint mark — search carefully.</p>', tags: ['Reproduces ligature pattern'] },
  'lm-colour': { label: 'Ligature Mark — Colour', info: '<p><strong>Initially:</strong> pale to yellow-brown.</p><p><strong>After hours-days:</strong> dark brown, parchment-like (dried + shrunken).</p><p><strong>Mechanism of parchmentisation:</strong> Pressure squeezes blood out of the compressed dermis → drying → leathery appearance.</p><p>Parchmentisation is a key sign of vital reaction — confirms ligature applied with significant force.</p>', tags: ['Parchmentisation'] },
  'lm-knot': { label: 'Ligature Mark — Knot Impression', info: '<p>A distinct pressure mark at the knot site, often surrounded by:</p><ul><li>Ecchymosis (vital reaction in antemortem)</li><li>Abrasion / friction marks on edges</li><li>Pattern reflecting knot type</li></ul><p><strong>Typical hanging:</strong> knot posterior (occipital).</p><p><strong>Atypical hanging:</strong> knot lateral or anterior.</p>', tags: ['Pressure point at knot'] },
  'lm-vital': { label: 'Vital Reaction (★ = AM marker)', info: '<p>The single most important determinant of <strong>antemortem</strong> ligature application is <strong>vital reaction</strong> around and beneath the mark.</p><p><strong>Antemortem signs:</strong></p><ul><li>Bruising (ecchymosis) — small haemorrhages in skin / subcutaneous tissue</li><li>Abrasions on edges of the mark</li><li>Oedema and inflammation around the mark</li><li>Sternomastoid muscle haemorrhage on dissection</li><li><strong>Salivary dribbling</strong> from corner of mouth opposite the knot (★ NEET-PG 2016 PYQ)</li></ul><p><strong>Postmortem ligature:</strong> mark is pale, no vital reaction, no haemorrhage in surrounding tissues.</p>', tags: ['★ AM determinant', 'Salivary dribbling = NEET-PG 2016'] },

  'str-ligature': { label: 'Ligature Strangulation', info: '<p>Constriction of neck by a <strong>ligature</strong> (rope, scarf, dupatta, wire, electrical cable) where force is applied by hand (not body weight).</p><p><strong>Ligature mark:</strong> HORIZONTAL, COMPLETE, AT or BELOW thyroid cartilage.</p><p><strong>Mechanism:</strong> Venous + carotid compression → cerebral hypoxia → asphyxia. Slower than complete hanging.</p><p><strong>Hyoid fracture:</strong> ~30-40 % (greater horn).</p><p><strong>NEET-PG 2022 PYQ:</strong> a body with ligature completely encircling the neck, horizontal, below thyroid, with no salivary dribbling → ligature strangulation (not hanging).</p>', tags: ['Most common strangulation', 'NEET-PG 2022 PYQ'] },
  'str-throttling': { label: 'Throttling (Manual Strangulation)', info: '<p>Strangulation by <strong>HANDS</strong> applied directly to the neck.</p><p><strong>Marks:</strong> Multiple curved abrasions (finger nails) + bruises. Classic pattern: thumb mark on one side of neck + 4 finger marks on the opposite side.</p><p><strong>Hyoid fracture:</strong> Most common site of hyoid fracture overall — pattern: greater cornu, in-and-out (inward compression).</p><p><strong>Internal:</strong> Deep bruising of cricoid + thyroid cartilages; sternomastoid muscle haemorrhage.</p><p><strong>Always HOMICIDAL</strong> — self-throttling is impossible because consciousness is lost before sustained force can be applied.</p>', tags: ['Always homicidal', 'Highest hyoid # rate'] },
  'str-bansdola': { label: 'Bansdola Strangulation', info: '<p>An Indian sub-continental method using <strong>two wooden sticks (or bamboo)</strong> placed on either side of the neck, then tied or squeezed together.</p><p><strong>Mark:</strong> Two parallel linear bruises corresponding to the stick edges.</p><p><strong>NEET-PG 2016 PYQ:</strong> "Bansdola is a form of strangulation by — Wooden sticks."</p><p>The word "bans" = bamboo in Hindi.</p>', tags: ['NEET-PG 2016 PYQ', 'Wooden sticks'] },
  'str-garroting': { label: 'Garroting (Spanish)', info: '<p>Strangulation by throwing a <strong>ligature from BEHIND</strong> the victim, then tightening it using a <strong>STICK (windlass / tourniquet)</strong>.</p><p><strong>Origin:</strong> Spanish judicial execution method ("garrote vil").</p><p><strong>Mark:</strong> Single horizontal, complete ligature mark.</p><p><strong>Always HOMICIDAL</strong> — typical sneak attack from behind, often with co-perpetrator.</p>', tags: ['Spanish execution method', 'Sneak attack'] },
  'str-mugging': { label: 'Mugging (Chokehold)', info: '<p>Strangulation by placing the <strong>bend of the elbow around the neck</strong> from behind, pressing inward (carotid sleeper hold).</p><p><strong>Mark:</strong> Often ABSENT — broad surface area distributes force, leaving no clear impression.</p><p><strong>Mechanism:</strong> Carotid compression → cerebral hypoxia → unconsciousness within seconds. Continued pressure → death.</p><p><strong>Context:</strong> Street robbery / mugging. Also used as police restraint hold (controversial — implicated in custodial deaths).</p>', tags: ['Often no neck mark', 'Police restraint'] },
  'str-palmar': { label: 'Palmar Strangulation', info: '<p>Direct pressure with the <strong>heel of the palm</strong> on the front of the neck, pressing inward and backward.</p><p><strong>Target:</strong> Crushes larynx or trachea against cervical spine.</p><p><strong>Mark:</strong> Bruise on anterior neck — often with imprint of palm.</p><p><strong>Context:</strong> Domestic violence, ambush situations, sometimes part of a wider assault.</p>', tags: ['Anterior neck bruise', 'Crushes larynx'] },

  'str-pm-face': { label: 'Strangulation — External Face', info: '<p><strong>Face:</strong> MARKEDLY congested + cyanosed (always — much more pronounced than hanging).</p><p><strong>Eyes:</strong> Bulging; pupils dilated; numerous conjunctival petechiae (Tardieu spots).</p><p><strong>Tongue:</strong> Protruded, swollen, bitten.</p><p><strong>Lips/ears:</strong> Cyanosed.</p><p><strong>Bleeding</strong> from mouth/nose/ears in severe cases.</p><p><strong>No salivary dribbling</strong> — unlike hanging. This is an important DD point.</p>', tags: ['More dramatic than hanging', 'No salivary dribbling'] },
  'str-pm-mark': { label: 'Strangulation — Mark on Neck', info: '<p><strong>Ligature strangulation mark:</strong> HORIZONTAL, COMPLETE, at or below thyroid cartilage. Pronounced vital reaction.</p><p><strong>Throttling marks:</strong> Curved abrasions (finger nails) + bruises in characteristic hand pattern — thumb on one side, 4 fingers on the other.</p><p><strong>Bansdola:</strong> Two parallel linear bruises.</p><p><strong>Vital reaction:</strong> PRONOUNCED — significant bruising, oedema, abrasions around the marks.</p><p><strong>Defence wounds:</strong> Often present on hands, forearms, face — signs of victim\'s struggle.</p>', tags: ['Vital reaction pronounced', 'Defence wounds suggest struggle'] },
  'str-pm-internal': { label: 'Strangulation — Internal Neck', info: '<p>Examined via bloodless neck-dissection. Findings are MORE marked than hanging:</p><ul><li><strong>Subcutaneous tissues</strong> — extensive haemorrhage + bruising</li><li><strong>Strap muscles</strong> — sternomastoid + omohyoid haemorrhage</li><li><strong>Hyoid bone</strong> — fracture more common (~30-40 %, esp. throttling)</li><li><strong>Cartilages</strong> — thyroid + cricoid fracture / bruising</li><li><strong>Trachea/larynx</strong> — congestion, oedema, mucosal abrasion</li><li><strong>Carotid sheath</strong> — bruising; rarely intimal tear</li></ul>', tags: ['More marked than hanging'] },
  'str-pm-asphyxial': { label: 'Strangulation — Asphyxial Signs (MARKED)', info: '<p>Classical asphyxial stigmata are typically <strong>more pronounced</strong> in strangulation than hanging, because death is slower → more time for petechiae to form.</p><ul><li><strong>Petechiae</strong> — numerous Tardieu spots on pleura, pericardium, conjunctivae</li><li><strong>Lungs</strong> — markedly congested, oedematous, sub-pleural petechiae</li><li><strong>Heart</strong> — right side distended with dark fluid blood</li><li><strong>Brain</strong> — severely congested + oedematous</li><li><strong>Visceral congestion</strong> — universal (liver, kidneys, spleen)</li></ul>', tags: ['More pronounced than hanging'] },

  'hyoid-anatomy': { label: 'Hyoid Bone — Anatomy', info: '<p>The <strong>hyoid bone</strong> is a U-shaped bone located at the level of <strong>C3 vertebra</strong>, suspended from the styloid process by stylohyoid ligament. It is the only bone in the body that does not articulate with another bone.</p><p><strong>Parts:</strong> 1 BODY (anterior) + 2 GREATER cornu (lateral, longer, postero-lateral) + 2 LESSER cornu (superior, shorter).</p><p><strong>Ossification:</strong> Greater cornu fuses with body in middle age (varies 25-45 years). Younger hyoid is more flexible → less fracture in young victims.</p><p><strong>Clinical pearl:</strong> Hyoid fracture in a victim under 25 years is unusual and should prompt suspicion of significant force.</p>', tags: ['U-shape', 'C3 level', 'Fusion in middle age'] },
  'hyoid-inout': { label: 'Inward Compression (IN-and-OUT)', info: '<p><strong>Direction:</strong> Both greater cornua pushed INWARD.</p><p><strong>Fracture site:</strong> Body or junction of body + greater cornu.</p><p><strong>Periosteum:</strong> Outer torn, inner intact.</p><p><strong>Seen in:</strong> THROTTLING — bilateral compression by hands on the neck pushes the cornua inward.</p><p><strong>Vital reaction:</strong> Haemorrhage in surrounding tissue confirms antemortem fracture.</p><p>Most common hyoid fracture pattern in throttling.</p>', tags: ['Throttling pattern', 'Outer periosteum torn'] },
  'hyoid-outin': { label: 'Outward Compression (OUT-and-IN)', info: '<p><strong>Direction:</strong> Cornua splay OUTWARD.</p><p><strong>Mechanism:</strong> Ligature pulls upward (as in hanging) → produces a splaying force on the cornua.</p><p><strong>Fracture site:</strong> Greater cornu tip.</p><p><strong>Periosteum:</strong> Outer intact, inner torn.</p><p><strong>Seen in:</strong> HANGING with high knot position.</p><p>Direction of periosteum tear differentiates hanging from throttling fractures.</p>', tags: ['Hanging pattern', 'Inner periosteum torn'] },
  'hyoid-ap': { label: 'Antero-Posterior Compression', info: '<p><strong>Direction:</strong> Cornua pushed BACKWARDS by direct anterior force.</p><p><strong>Mechanism:</strong> Direct anterior force on neck — palmar strangulation, blunt force trauma to neck, direct blow.</p><p><strong>Fracture site:</strong> Variable; can be body.</p><p><strong>Less common</strong> pattern; requires direct frontal force on the neck.</p>', tags: ['Direct anterior force'] },

  'suf-smothering': { label: 'Smothering', info: '<p>Closing of <strong>MOUTH + NOSE externally</strong>.</p><p><strong>Agents:</strong> Pillow, hand, plastic bag, cloth, soft tissue.</p><p><strong>PM findings:</strong> Bruises / abrasions around the mouth and nostrils. Plastic bag may leave imprint.</p><p><strong>Common scenarios:</strong></p><ul><li>Infants (overlying / SIDS differential)</li><li>Homicide of debilitated or sleeping person</li><li>Plastic bag suicide (terminally ill, depression)</li></ul>', tags: ['External obstruction', 'Pillow / plastic bag'] },
  'suf-gagging': { label: 'Gagging', info: '<p>Material forced <strong>INTO mouth</strong> to block the oral cavity and pharynx.</p><p><strong>Agents:</strong> Cloth, handkerchief, paper, tape across mouth.</p><p><strong>PM findings:</strong> Foreign material in oropharynx; abrasions on lips; teeth marks on cheek mucosa from biting on gag.</p><p><strong>Common in:</strong> Burglary victims (silenced + restrained); kidnapping.</p>', tags: ['Material into mouth', 'Restrained victims'] },
  'suf-choking': { label: 'Choking', info: '<p>INTERNAL obstruction of the airway by a foreign body.</p><p><strong>"Bolus death":</strong> Food bolus stuck at larynx → triggers vagal reflex → sudden cardiac arrest (mechanism: not pure asphyxia but vagal-mediated death).</p><p><strong>PM:</strong> Foreign body retrieved from larynx / trachea on autopsy.</p><p><strong>Common in:</strong> Elderly, drunk persons, dementia patients, neurological dysphagia.</p>', tags: ['Internal obstruction', 'Bolus death = vagal'] },
  'suf-traumatic': { label: 'Traumatic Asphyxia', info: '<p>External compression of the <strong>CHEST</strong> preventing respiratory movements.</p><p><strong>Causes:</strong> Crowd crush, stampede, building collapse, vehicle pinning, industrial accident.</p><p><strong>Cardinal sign:</strong> <strong>Masque ecchymotique</strong> — deep blue/purple discolouration of face, neck, upper chest above the level of compression. Caused by reflux of venous blood with no valves.</p><p>Pathognomonic finding when present.</p>', tags: ['Chest compression', 'Masque ecchymotique'] },
  'suf-overlying': { label: 'Overlying / SIDS DD', info: '<p><strong>Overlying:</strong> Adult accidentally smothers an infant while co-sleeping. Mostly accidental, especially in overcrowded households.</p><p><strong>SIDS</strong> (Sudden Infant Death Syndrome): Sudden unexplained death of infant &lt; 1 year — the differential for overlying.</p><p><strong>Distinguishing:</strong> requires detailed scene reconstruction + autopsy + exclusion. SIDS = diagnosis of exclusion.</p><p>Detailed in Ch 20 (Infant Deaths and Female Feticide).</p>', tags: ['Cross-ref Ch 20', 'Co-sleeping risk'] },
  'suf-burking': { label: 'Burking', info: '<p>Combined <strong>smothering + chest compression</strong> — sitting on the chest while closing the mouth and nose.</p><p><strong>Named after William Burke</strong> (1828 Edinburgh) who, with William Hare, murdered 16 people by this method and sold the bodies to anatomy schools.</p><p>Produces few external marks — historically used to make deaths look natural.</p>', tags: ['William Burke 1828'] },

  'drown-definition': { label: 'Drowning — Definition', info: '<p>Death by asphyxia caused by <strong>immersion of mouth and nose in a fluid medium</strong> — fluid fills the airways preventing gas exchange.</p><p>"Fluid" is not limited to water — can be sewage, mud, oil, blood, or any liquid that can occlude airways.</p><p><strong>Manner of death:</strong> mostly accidental; sometimes suicidal (especially in deep water); rarely homicidal (forcibly held under).</p>', tags: ['Immersion asphyxia', 'Mostly accidental'] },
  'drown-wet': { label: 'Wet Drowning (~90%)', info: '<p>The classic drowning — fluid is <strong>aspirated into the lungs</strong>.</p><p><strong>Fresh water</strong> (hypotonic, &lt; blood osmolality): water absorbed into circulation → haemodilution → haemolysis → hyperkalaemia → ventricular fibrillation → death in 5-10 min.</p><p><strong>Sea water</strong> (hypertonic, &gt; blood osmolality): pulls water OUT of circulation into alveoli → severe pulmonary oedema → hypovolaemia → hypoxia → death in 8-12 min.</p><p>Most common type — accounts for ~90 % of drowning deaths.</p>', tags: ['~90% of drownings', 'Fresh vs sea differs in mechanism'] },
  'drown-dry': { label: 'Dry Drowning (~10%)', info: '<p><strong>Mechanism:</strong> Sudden <strong>LARYNGOSPASM</strong> at first contact of water with the larynx → larynx clamps shut → asphyxia → death.</p><p><strong>Lungs:</strong> Remain DRY at autopsy — no fluid aspirated.</p><p><strong>Common in:</strong> Cold-water entry, panic, intoxication, drug overdose.</p><p><strong>Diagnosis:</strong> Difficult — by exclusion of other causes + history of immersion.</p><p>Distinguish from hydrocution (which is vagal cardiac arrest, not laryngospasm).</p>', tags: ['~10%', 'Laryngospasm', 'Lungs dry'] },
  'drown-secondary': { label: 'Secondary (Post-immersion) Drowning', info: '<p>Death HOURS to DAYS after rescue from drowning.</p><p><strong>Mechanism:</strong> Aspirated water damages pulmonary surfactant → delayed pulmonary oedema → ARDS or aspiration pneumonia → respiratory failure.</p><p><strong>Risk factors:</strong> Aspiration of large volume, cold water, prolonged immersion, fresh water (more haemolysis).</p><p><strong>Management:</strong> All rescued drowning victims should be observed for at least 24 hours — even if initially asymptomatic.</p>', tags: ['Hours-days after rescue', 'ARDS / pneumonia'] },
  'drown-immersion': { label: 'Immersion (Hydrocution) — Cold Shock', info: '<p>Sudden death on entering <strong>cold water</strong> — within seconds to 1-2 minutes.</p><p><strong>Mechanism:</strong> <strong>VAGAL INHIBITION</strong> — cold water on skin or hitting the epigastrium triggers a reflex cardiac arrest via vagal pathway.</p><p><strong>Lungs:</strong> May be DRY — death is too fast for water aspiration.</p><p><strong>Synonyms:</strong> "Hydrocution" · "Cold shock".</p><p><strong>Risk factors:</strong> Sudden plunge into cold water, full stomach, alcohol, cardiac disease.</p>', tags: ['Vagal inhibition', 'Cold water', 'Seconds-min'] },
  'drown-stages': { label: '5 Stages of (Wet) Drowning', info: '<p>The classical sequence in wet drowning:</p><ol><li><strong>Surprise</strong> (5-10 sec) — sudden immersion triggers reflex inspiration; water enters airways.</li><li><strong>Resistance / Struggle</strong> (1-2 min) — breath-holding, violent struggle, panic, attempts to rise. The visible "drowning person" phase.</li><li><strong>Deep respiration phase</strong> (1-2 min) — involuntary deep breaths from CO₂ accumulation → massive water inhalation. Patient becomes unconscious.</li><li><strong>Convulsions / Exhaustion</strong> (1 min) — generalised seizures from cerebral hypoxia.</li><li><strong>Death</strong> — total respiratory + cardiac arrest. Typical total duration: ~5 minutes.</li></ol>', tags: ['~5 min total', '5 stages'] },

  'drown-pm-external': { label: 'Drowning — External PM Findings', info: '<p><strong>Face:</strong> Pale (early) or cyanosed (late); puffy.</p><p><strong>Mouth/nostrils:</strong> <strong>Champignon mushroom froth</strong> — fine, white-pinkish, persistent foam. Pathognomonic when present.</p><p><strong>Eyes:</strong> Open; conjunctival haemorrhages.</p><p><strong>Cutis anserina</strong> (goose-skin): Erection of hair follicles from cold + rigor of arrectores pilorum muscles. Non-specific (also in cold deaths).</p><p><strong>Washerwoman\'s hand:</strong> Wrinkling + sodden whitening of palms and soles after &gt; 2 hours immersion.</p><p><strong>Clenched fists:</strong> Cadaveric spasm — may grasp weeds, mud, fabric — confirms antemortem struggle.</p>', tags: ['Champignon froth', 'Washerwoman hand', 'Cutis anserina'] },
  'drown-pm-lungs': { label: 'Drowning — Lung Findings (★)', info: '<p>Key autopsy findings on the lungs in wet drowning:</p><ul><li><strong>Emphysema aquosum:</strong> Lungs ballooned, heavy, overlap at the midline, pit on pressure.</li><li><strong>Paltauf haemorrhages:</strong> Sub-pleural bluish-red haemorrhages from rupture of alveolar capillaries. Relatively specific for drowning.</li><li><strong>Cut surface:</strong> Frothy fluid + blood-stained mucus exudes.</li><li><strong>Airways:</strong> Fine frothy fluid in trachea, bronchi.</li><li><strong>Stomach:</strong> Water + sand / silt (swallowed during struggle).</li><li><strong>Middle ear:</strong> Haemorrhage (Niles sign — differential: head injury).</li></ul>', tags: ['Emphysema aquosum', 'Paltauf haemorrhages'] },
  'drown-diatom': { label: 'Diatom Test — Gold Standard', info: '<p><strong>Principle:</strong> Diatoms are microscopic algae present in natural water bodies. In antemortem drowning, diatoms are aspirated into the lungs → enter circulation via pulmonary capillaries → reach distant organs (brain, kidney, bone marrow, sternum) via active circulation.</p><p><strong>Test procedure:</strong> Acid-digestion of organ samples (typically femur bone marrow — deep tissue, less external contamination). The sediment is examined under microscopy for characteristic diatom skeletons.</p><p><strong>Positive test:</strong> Presence of diatoms in distant organs ⟹ <strong>ANTEMORTEM drowning</strong> (circulation was active when water entered lungs).</p><p><strong>Limitations:</strong></p><ul><li>False positives — environmental contamination, ingested water</li><li>False negatives — drowning in clean water (chlorinated pools, distilled water)</li><li>Must compare with diatoms from the water source</li></ul>', tags: ['Gold standard', 'Femur marrow ideal'] },
  'drown-misc': { label: 'Other Drowning Tests', info: '<p><strong>Gettler test:</strong> Compare chloride concentration in blood from L vs R heart. Fresh water drowning → ↑ in L heart (water absorbed into circulation).</p><p><strong>Specific gravity test:</strong> Blood specific gravity decreased in fresh-water drowning (haemodilution).</p><p><strong>Strontium test:</strong> Strontium in blood = sea-water drowning marker.</p><p><strong>Hydrocution (immersion):</strong> Lungs may be DRY because sudden vagal arrest precedes aspiration. Diagnosis on history + cold water + sudden collapse.</p>', tags: ['Gettler · Specific gravity · Strontium'] }

};

function nodeList(ids) { return ids.map(id => ({ nodeId: id, ...NODES[id] })); }

const MCQS = {
  'VA-01': [
    { stem: 'Tardieu spots / petechial haemorrhages are most characteristic of:', options: ['Drowning','Asphyxia','Burns','Lightning'], answerIdx: 1, explain: 'Petechial haemorrhages on conjunctivae, face, pleura, pericardium — classic asphyxial stigmata. Most pathognomonic individual sign.', tag: '[PG-Inspired]' },
    { stem: 'The classical sequence of stages in asphyxia is:', options: ['Convulsion → Dyspnoea → Apnoea → Death','Dyspnoea → Convulsion → Apnoea → Death','Apnoea → Dyspnoea → Convulsion → Death','Convulsion → Apnoea → Death → Dyspnoea'], answerIdx: 1, explain: '1. Dyspnoea (~1 min) 2. Convulsions (~1 min) 3. Apnoea/Exhaustion (~1 min) 4. Death. Total ~3-5 min.', tag: '[PG-Inspired]' },
    { stem: 'The most common mechanism of death in hanging is:', options: ['Asphyxia','Cervical spine fracture','Venous obstruction','Vagal inhibition'], answerIdx: 2, explain: 'Venous obstruction (jugular compression) → cerebral congestion + hypoxia — most common. Asphyxia is the 2nd most common.', tag: '[UNIV]' }
  ],
  'VA-02': [
    { stem: 'In typical hanging, the knot is positioned at:', options: ['Front of neck','Side of neck','Back of neck (occiput)','Either side equally'], answerIdx: 2, explain: 'Typical hanging = knot at the back of neck. Body hangs symmetrically; both carotids occluded; face PALE.', tag: '[PG-Inspired]' },
    { stem: 'The minimum pressure (in kg) required to occlude carotid arteries is:', options: ['1-2','4-5','15-20','25-30'], answerIdx: 1, explain: '4-5 kg pressure occludes carotid → death possible even in partial hanging.', tag: '[PG-Inspired]' },
    { stem: '"Hangman\\\'s fracture" refers to fracture of:', options: ['C1 (atlas)','C2 dens','C2-C3 (pedicles of axis)','C7'], answerIdx: 2, explain: 'Bilateral fracture through pedicles of C2 (axis) — produced in judicial hanging with calculated drop. Suicidal hangings rarely produce this.', tag: '[PG-Inspired]' }
  ],
  'VA-03': [
    { stem: 'The most reliable sign of ANTEMORTEM hanging is:', options: ['Salivary dribbling','Congestion of lungs','Ligature marks','Petechial hemorrhages'], answerIdx: 0, explain: 'Salivary dribbling — trickles DOWN from corner of mouth OPPOSITE to knot. Only possible if person was alive at time of suspension (parotid duct pressure + active secretion).', tag: '[NEET-PG 2016]' },
    { stem: 'Amussat\\\'s sign refers to:', options: ['Tongue protrusion','Tear in intima of carotid artery','Salivary dribbling','Hyoid fracture'], answerIdx: 1, explain: 'Amussat\\\'s sign = transverse tear in intima of common carotid artery — seen in jerk/judicial hangings (rapid stretch).', tag: '[PG-Inspired]' },
    { stem: 'In a typical hanging, the face appears:', options: ['Cyanosed and congested','Pale','Flushed','Yellowish'], answerIdx: 1, explain: 'Typical hanging — both carotids fully occluded → no blood reaches face → PALE face. Atypical hanging → one carotid patent → CONGESTED face.', tag: '[UNIV]' },
    { stem: 'Hyoid bone fracture in hanging occurs in approximately what percentage of cases?', options: ['&lt; 10%','&lt; 30%','&gt; 50%','&gt; 80%'], answerIdx: 1, explain: 'Hyoid fracture in &lt;30% of hangings (older age + downward force on greater cornu). More common in throttling.', tag: '[QBank-Inspired]' }
  ],
  'VA-04': [
    { stem: 'The most reliable single feature distinguishing a hanging mark from a strangulation mark is:', options: ['Colour','Depth','Direction (oblique vs horizontal)','Width'], answerIdx: 2, explain: 'Direction — hanging is OBLIQUE (rises to knot); strangulation is HORIZONTAL.', tag: '[PG-Inspired]' },
    { stem: 'Parchmentisation of the ligature mark refers to:', options: ['Discolouration to yellow','Drying + shrinkage of compressed dermis → leathery dark mark','Lifting of skin','Petechial change'], answerIdx: 1, explain: 'Parchmentisation = drying + shrinkage of dermis beneath ligature → dark leathery appearance — key sign of vital reaction.', tag: '[UNIV]' }
  ],
  'VA-05': [
    { stem: 'Bansdola is a form of strangulation by:', options: ['Ligature','Hands','Wooden sticks','Bend of elbow'], answerIdx: 2, explain: '"Bans" = bamboo in Hindi. Bansdola = strangulation by two wooden sticks placed on either side of the neck.', tag: '[NEET-PG 2016]' },
    { stem: 'The strangulation method involving a ligature thrown from behind and tightened with a stick (windlass) is:', options: ['Throttling','Garroting','Mugging','Bansdola'], answerIdx: 1, explain: 'Garroting — Spanish judicial execution method using ligature + tightening stick.', tag: '[PG-Inspired]' },
    { stem: 'The MOST common site of hyoid bone fracture occurs in:', options: ['Hanging','Ligature strangulation','Throttling','Drowning'], answerIdx: 2, explain: 'Throttling — bilateral manual compression often fractures hyoid greater cornu (~30-40 %).', tag: '[PG-Inspired]' }
  ],
  'VA-06': [
    { stem: 'A dead body is brought for evaluation. On post-mortem examination, a ligature completely encircled the neck, horizontal, and below the thyroid level was seen. There was no dribbling of saliva. What is the cause of death?', options: ['Throttling','Ligature strangulation','Gagging','Hanging'], answerIdx: 1, explain: 'Horizontal + complete + below thyroid + no salivary dribbling → ligature strangulation (not hanging — hanging would be oblique, incomplete, above thyroid, with salivary dribbling).', tag: '[NEET-PG 2022]' },
    { stem: 'In strangulation, defence wounds are typically found on:', options: ['Back','Hands and forearms','Lower limbs','Head only'], answerIdx: 1, explain: 'Defence wounds on hands, forearms, face — sign of struggle by the victim trying to remove the ligature/hands.', tag: '[PG-Inspired]' }
  ],
  'VA-07': [
    { stem: 'In which of the following is hyoid bone fracture most common?', options: ['Suicidal hanging','Ligature strangulation','Throttling','Drowning'], answerIdx: 2, explain: 'Throttling has the highest hyoid fracture rate (~30-40 %). Hanging fractures hyoid in &lt;30 %; drowning rarely.', tag: '[PG-Inspired]' },
    { stem: 'In throttling, the typical hyoid fracture pattern is:', options: ['Outward compression (out-and-in)','Inward compression (in-and-out)','Antero-posterior','Vertical'], answerIdx: 1, explain: 'Throttling = bilateral inward compression by hands → in-and-out pattern · outer periosteum torn, inner intact.', tag: '[PG-Inspired]' }
  ],
  'VA-08': [
    { stem: 'Masque ecchymotique is the cardinal sign of:', options: ['Smothering','Gagging','Choking','Traumatic asphyxia'], answerIdx: 3, explain: 'Masque ecchymotique = deep blue discolouration of face/neck/upper chest from venous reflux during chest compression — pathognomonic for traumatic asphyxia.', tag: '[PG-Inspired]' },
    { stem: 'Bolus death refers to:', options: ['Choking from food bolus + vagal reflex causing cardiac arrest','Massive haemorrhage','Drowning in alcohol','Asphyxia from chest crush'], answerIdx: 0, explain: 'Bolus death = food bolus stuck at larynx triggers vagal reflex → sudden cardiac arrest. Mechanism is vagal, not pure asphyxia.', tag: '[UNIV]' }
  ],
  'VA-09': [
    { stem: 'Mechanism of death in DRY drowning is:', options: ['Massive water aspiration','Sudden laryngospasm with closure of larynx','Vagal cardiac arrest','Haemolysis'], answerIdx: 1, explain: 'Dry drowning (~10 %) = sudden laryngospasm at first water contact → larynx clamps shut → asphyxia. Lungs remain dry at autopsy.', tag: '[PG-Inspired]' },
    { stem: 'Hydrocution (immersion drowning) is caused by:', options: ['Aspiration of cold water','Vagal cardiac arrest from cold-water shock','Pulmonary embolism','Haemolysis'], answerIdx: 1, explain: 'Hydrocution = sudden vagal cardiac arrest on entering cold water (cold shock on skin / epigastrium). Death within seconds-minutes.', tag: '[QBank-Inspired]' },
    { stem: 'In fresh-water drowning, the mechanism of death is:', options: ['Pulmonary oedema from hypertonic water','Haemodilution → haemolysis → hyperkalaemia → VF','Cold shock','Air embolism'], answerIdx: 1, explain: 'Fresh water is hypotonic → absorbed into circulation → haemodilution → haemolysis → hyperkalaemia → VF. Sea water = opposite (pulmonary oedema).', tag: '[PG-Inspired]' }
  ],
  'VA-10': [
    { stem: 'The mushroom-like froth at the mouth and nostrils in a drowned body is called:', options: ['Cutis anserina','Champignon mushroom froth','Washerwoman\'s hand','Masque ecchymotique'], answerIdx: 1, explain: 'Champignon mushroom froth — fine white-pinkish persistent foam at mouth/nostrils; pathognomonic for antemortem drowning.', tag: '[PG-Inspired]' },
    { stem: 'In the diatom test, the BEST sample for examination is:', options: ['Lung tissue','Stomach contents','Femur bone marrow','Blood'], answerIdx: 2, explain: 'Femur bone marrow — deep tissue, minimal contamination. Diatoms reaching marrow confirm antemortem circulation = antemortem drowning.', tag: '[PG-Inspired]' },
    { stem: 'Washerwoman\'s hand in a drowned body indicates:', options: ['Antemortem drowning','Postmortem submersion','Immersion for &gt; 2 hours (non-specific)','Hydrocution'], answerIdx: 2, explain: 'Washerwoman\'s hand = wrinkling + sodden whitening of palms/soles. Develops after &gt; 2 hours in water. Indicates duration of immersion, NOT antemortem vs postmortem.', tag: '[UNIV]' },
    { stem: 'Paltauf haemorrhages are found on the:', options: ['Conjunctivae','Sub-pleural surface of lungs','Pericardium','Brain'], answerIdx: 1, explain: 'Paltauf haemorrhages = bluish-red sub-pleural haemorrhages from alveolar capillary rupture. Relatively specific for drowning.', tag: '[PG-Inspired]' }
  ]

};

const DIFF_TABLES = [
  {
    id: 'DT-1', title: 'Hanging vs Strangulation', shortTitle: 'Hanging vs Strangulation',
    columns: ['Feature','Hanging','Strangulation'],
    rows: [
      ['Force','Body weight','External force (hand, ligature, stick)'],
      ['Manner','Mostly suicidal','Mostly homicidal'],
      ['Ligature mark direction','<strong>Oblique</strong>, rises to knot','<strong>Horizontal</strong>'],
      ['Continuity','<strong>Incomplete</strong> (broken at knot)','<strong>Complete</strong> (encircles)'],
      ['Level vs thyroid','<strong>Above</strong> thyroid','<strong>Below</strong> or AT thyroid'],
      ['Face','Pale (typical) / congested (atypical)','Congested + cyanosed'],
      ['Tongue','Protruded','Protruded'],
      ['Salivary dribbling','<strong>Present</strong> (AM sign — opposite to knot)','Absent'],
      ['Hyoid fracture','&lt; 30%','More common (~30-40%, esp. throttling)'],
      ['Vital reaction at mark','Sparse','Marked (vital bruising, oedema)'],
      ['Spine injury','Only judicial hanging','None']
    ],
    parentDiagrams: ['VA-02','VA-03'],
    mcqs: [
      { stem: 'The ligature mark in hanging is typically:', options: ['Horizontal and complete','Oblique and incomplete, above thyroid','Vertical and continuous','Crisscross pattern'], answerIdx: 1, explain: 'Hanging — OBLIQUE, INCOMPLETE, ABOVE thyroid. Strangulation — HORIZONTAL, COMPLETE, AT/BELOW thyroid.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-2', title: 'Antemortem vs Postmortem Hanging', shortTitle: 'AM vs PM Hanging',
    columns: ['Feature','Antemortem','Postmortem'],
    rows: [
      ['Salivary dribbling','<strong>Present</strong> (downward, opposite side)','Absent'],
      ['Ligature mark — vital reaction','Bruising, ecchymosis','Absent (pale)'],
      ['Hands','Often clenched (cadaveric spasm)','Relaxed'],
      ['Subcutaneous haemorrhage','Yes (sternomastoid)','No'],
      ['Asphyxial signs','Present','Absent or minimal'],
      ['Lividity','Glove-stocking pattern','Variable']
    ],
    parentDiagrams: ['VA-03'],
    mcqs: [
      { stem: 'The MOST reliable single sign of antemortem hanging is:', options: ['Salivary dribbling','Congestion of lungs','Ligature marks','Petechial hemorrhages'], answerIdx: 0, explain: 'Salivary dribbling — only happens if alive at suspension. NEET-PG 2016 verbatim PYQ.', tag: '[NEET-PG 2016]' }
    ]
  },
  {
    id: 'DT-3', title: 'Wet vs Dry vs Secondary vs Immersion (Hydrocution) Drowning', shortTitle: 'Drowning types',
    columns: ['Feature','Wet (~90%)','Dry (~10%)','Secondary','Immersion (hydrocution)'],
    rows: [
      ['Mechanism','Water aspirated into lungs','Laryngospasm — no aspiration','Delayed pulmonary oedema hrs-days after rescue','<strong>Vagal arrest</strong> from cold-water shock'],
      ['Time to death','5-10 min','Seconds-minutes','Hours-days','Seconds to 1-2 min'],
      ['Lungs at PM','Wet, emphysema aquosum, Paltauf','<strong>DRY</strong> (no fluid)','Pulmonary oedema, ARDS','May be DRY'],
      ['Diatom test','Usually +ve','Negative','+ve','Negative (no aspiration)'],
      ['Champignon froth','Usually present','Usually absent','Absent','Absent']
    ],
    parentDiagrams: ['VA-09','VA-10'],
    mcqs: [
      { stem: 'In dry drowning, the lungs are characteristically:', options: ['Heavy and wet','DRY (no aspiration due to laryngospasm)','Filled with blood','Collapsed'], answerIdx: 1, explain: 'Dry drowning — laryngospasm prevents water from reaching lungs → DRY at autopsy.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-4', title: 'Throttling vs Ligature Strangulation', shortTitle: 'Throttling vs Ligature Strang.',
    columns: ['Feature','Throttling','Ligature Strangulation'],
    rows: [
      ['Agent','Hands','Ligature (rope, scarf, wire)'],
      ['Mark on neck','Curved abrasions + bruises (finger nail marks)','Single horizontal complete mark'],
      ['Hand pattern','Thumb on one side, 4 fingers on opposite','—'],
      ['Hyoid fracture rate','HIGHEST (~30-40%)','~20-30%'],
      ['Cartilage injury','Marked','Common'],
      ['Defence wounds','Often present','Often present'],
      ['Manner','Always HOMICIDAL','Mostly homicidal']
    ],
    parentDiagrams: ['VA-05','VA-06'],
    mcqs: [
      { stem: 'Which has the highest rate of hyoid bone fracture?', options: ['Hanging','Ligature strangulation','Throttling','Bansdola'], answerIdx: 2, explain: 'Throttling — manual compression often fractures hyoid (~30-40 %).', tag: '[PG-Inspired]' }
    ]
  }
];

const SUBJ = [
  {
    id: 'SAQ-15.1', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank',
    question: 'Signs of Asphyxia.',
    answer: `<h4>Definition</h4>
<p>The classical asphyxial signs ("asphyxial stigmata") are a constellation of post-mortem findings traditionally associated with deaths from mechanical asphyxia (hanging, strangulation, suffocation, drowning). None is specific; collectively they support — but do not prove — a diagnosis of asphyxia.</p>
<h4>External Signs</h4>
<ul><li><strong>Cyanosis</strong> — bluish discolouration of skin, lips, nails, ear lobes due to deoxygenated blood</li>
<li><strong>Congestion of face</strong> — engorged, dusky-blue appearance</li>
<li><strong>Petechial haemorrhages (Tardieu spots)</strong> — pinpoint haemorrhages on conjunctivae, sclera, behind ears, face, scalp · most pathognomonic external sign</li>
<li><strong>Tongue protrusion</strong> — swollen, bitten, often cyanosed</li>
<li><strong>Bleeding from mouth, nose, ears</strong> — uncommon</li></ul>
<h4>Internal Signs</h4>
<ul><li><strong>Pleural &amp; pericardial petechiae</strong> (Tardieu spots on serous membranes)</li>
<li><strong>Lung congestion + oedema</strong> with sub-pleural petechiae</li>
<li><strong>Right heart dilatation</strong> — RV engorged with dark fluid blood</li>
<li><strong>Blood is dark and fluid</strong> — high CO₂ + post-mortem fibrinolysis; does not clot well</li>
<li><strong>Visceral congestion</strong> — liver, kidneys, spleen, brain all engorged</li>
<li><strong>Cerebral congestion + oedema</strong></li></ul>
<h4>Pathophysiology</h4>
<p>Mechanical obstruction → ↓ O₂ + ↑ CO₂ → cerebral hypoxia → unconsciousness within 10-15 sec → death within 3-5 min. The increased intra-venous pressure during the dyspnoeic / convulsive phases ruptures small capillaries → Tardieu spots.</p>
<h4>Caveat</h4>
<p>None of these signs is pathognomonic of asphyxia alone — they may also be seen in sudden natural death, drug overdose, electrocution. Diagnosis rests on the totality of evidence including history, scene of death, and exclusion.</p>`,
    sources: ['VA-01 (Classification + Signs)'],
    jumpToDiagram: 'VA-01'
  },
  {
    id: 'SAQ-15.2', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Ligature Mark in Hanging.',
    answer: `<h4>Definition</h4>
<p>The ligature mark is the imprint left on the skin of the neck by the constricting agent (rope, dupatta, belt, electric cable, etc.) used to suspend the body in hanging. It is a critical piece of evidence to differentiate hanging from strangulation and to assess antemortem/postmortem status.</p>
<h4>Characteristic Features (7 features)</h4>
<ol><li><strong>Direction:</strong> OBLIQUE — runs upward and converges toward the knot</li>
<li><strong>Continuity:</strong> INCOMPLETE — interrupted at the knot site (where ligature lifts off the skin)</li>
<li><strong>Level:</strong> ABOVE the level of thyroid cartilage (typically at or near level of chin)</li>
<li><strong>Texture:</strong> Reproduces the surface pattern of the ligature — rope twist, leather stitching, dupatta weave, electrical-cord ridge</li>
<li><strong>Colour:</strong> Initially pale/yellow-brown; over time becomes dark parchment-like (dried + shrunken) due to drying of compressed dermis</li>
<li><strong>Knot impression:</strong> A distinct pressure mark visible at the knot site</li>
<li><strong>Vital reaction:</strong> Bruising / abrasion / oedema around the mark = ANTEMORTEM (vital reaction present at time of injury)</li></ol>
<h4>Number of marks</h4>
<p>Usually 1. Multiple turns of the ligature leave multiple parallel marks. A double mark may indicate two distinct suspensions or a ligature that slipped before final position.</p>
<h4>Soft vs Hard Ligature</h4>
<ul><li><strong>Hard ligature</strong> (rope, electrical cable) — sharp, deep, parchment-like mark</li>
<li><strong>Soft ligature</strong> (dupatta, scarf, soft cloth) — shallow, broad, less distinct mark; may be missed if not searched carefully</li></ul>
<h4>Vs Strangulation Mark</h4>
<table><tr><th>Feature</th><th>Hanging</th><th>Strangulation</th></tr>
<tr><td>Direction</td><td>Oblique</td><td>Horizontal</td></tr>
<tr><td>Continuity</td><td>Incomplete</td><td>Complete</td></tr>
<tr><td>Level</td><td>Above thyroid</td><td>At/below thyroid</td></tr>
<tr><td>Vital reaction</td><td>Sparse</td><td>Marked (bruising)</td></tr></table>
<h4>Vs Bruise / Birth Mark / Skin Crease</h4>
<p>A normal skin crease in the neck (obese persons) may be mistaken for ligature mark — but it has no vital reaction, no underlying haemorrhage. Photograph and document carefully.</p>`,
    sources: ['VA-03 (PM Hanging)','DT-1 (Hanging vs Strangulation)','DT-2 (AM vs PM)'],
    jumpToDiagram: 'VA-03'
  },
  {
    id: 'SAQ-15.3', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'What are different hyoid bone fractures? Explain the different scenarios in which each type of fractures may be found.',
    answer: `<h4>Hyoid bone anatomy</h4>
<p>U-shaped bone at C3 level. Parts: 1 body + 2 greater cornu (lateral) + 2 lesser cornu (superior). Younger hyoid is more flexible (greater cornu fuses with body in middle age) → less fracture in young victims.</p>
<h4>Three Patterns of Hyoid Fracture (by direction of compression)</h4>
<table><tr><th>Pattern</th><th>Direction</th><th>Periosteum</th><th>Scenario</th></tr>
<tr><td><strong>1. Inward compression (IN-and-OUT)</strong></td><td>Cornua pushed inward (toward midline)</td><td>Outer TORN; inner intact</td><td><strong>THROTTLING</strong> — bilateral manual compression. Most common pattern.</td></tr>
<tr><td><strong>2. Outward compression (OUT-and-IN)</strong></td><td>Cornua splay outward</td><td>Outer intact; inner TORN</td><td><strong>HANGING</strong> with high knot position. Ligature pulls upward → splaying force.</td></tr>
<tr><td><strong>3. Antero-posterior</strong></td><td>Cornua pushed backwards</td><td>Variable</td><td><strong>Palmar strangulation</strong> or direct blunt force trauma to anterior neck.</td></tr></table>
<h4>Frequency of hyoid fracture by cause of death</h4>
<ul><li><strong>Throttling</strong>: ~30-40 % (highest)</li>
<li><strong>Ligature strangulation</strong>: ~20-30 %</li>
<li><strong>Hanging</strong>: &lt; 30 %</li>
<li><strong>Drowning / smothering</strong>: rare</li>
<li><strong>Blunt trauma to neck</strong>: variable</li></ul>
<h4>Vital reaction</h4>
<p>To distinguish antemortem from postmortem fracture: presence of haemorrhage in surrounding soft tissues confirms antemortem origin. Postmortem fractures (e.g., from rough handling at autopsy) show no haemorrhage.</p>
<h4>Age factor</h4>
<p>Hyoid bone in young persons (&lt; 25 years) is flexible due to incomplete fusion of greater cornu with body — fracture is uncommon. In elderly (post-fusion), the bone is rigid and fractures more easily.</p>
<h4>Clinical relevance</h4>
<p>Hyoid fracture is suggestive of neck compression but is NOT diagnostic of mechanism by itself — the pattern (in-and-out vs out-and-in) helps differentiate throttling from hanging.</p>`,
    sources: ['VA-07 (Hyoid Fractures)','DT-4 (Throttling vs Ligature)'],
    jumpToDiagram: 'VA-07'
  },
  {
    id: 'SAQ-15.4', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Garroting — define, enumerate PM findings on Face and Neck.',
    answer: `<h4>Definition</h4>
<p>Garroting (Garrote) is a form of <strong>ligature strangulation</strong> in which a ligature is thrown around the victim\'s neck <strong>from behind</strong> and tightened by a <strong>stick (windlass / tourniquet)</strong>. Originated as a Spanish judicial execution method.</p>
<h4>Manner of death</h4>
<p>Always <strong>HOMICIDAL</strong> — a sneak attack from behind, often with a co-perpetrator.</p>
<h4>PM Findings on Face</h4>
<ul><li><strong>Face</strong>: markedly congested + cyanosed (asphyxial)</li>
<li><strong>Eyes</strong>: bulging; pupils dilated; numerous conjunctival petechiae (Tardieu spots)</li>
<li><strong>Tongue</strong>: protruded, swollen, bitten</li>
<li><strong>Lips/ears</strong>: cyanosed; petechiae behind ears</li>
<li><strong>Bleeding</strong>: may be from nose/mouth in severe cases</li>
<li><strong>No salivary dribbling</strong> (unlike hanging)</li></ul>
<h4>PM Findings on Neck</h4>
<p><strong>External:</strong></p>
<ul><li><strong>Single horizontal complete ligature mark</strong>, often at or below thyroid level</li>
<li>Vital reaction — bruising, oedema, abrasions around the mark</li>
<li><strong>Stick / windlass impression</strong> — pressure mark at site where the stick was applied</li>
<li>Defence wounds on hands, forearms, face (struggle)</li></ul>
<p><strong>Internal (on neck dissection):</strong></p>
<ul><li>Extensive subcutaneous haemorrhage</li>
<li>Sternomastoid + strap muscle haemorrhage</li>
<li>Hyoid bone fracture in ~20-30 %</li>
<li>Thyroid + cricoid cartilage bruising / fracture</li>
<li>Tracheal / laryngeal congestion + mucosal abrasion</li>
<li>Carotid sheath bruising</li></ul>
<h4>General asphyxial signs (often pronounced)</h4>
<ul><li>Pleural + pericardial Tardieu spots</li>
<li>Pulmonary congestion + oedema</li>
<li>Right heart distention with dark fluid blood</li>
<li>Cerebral congestion</li>
<li>Visceral congestion</li></ul>
<h4>Medico-legal importance</h4>
<p>Garroting always homicidal — the windlass impression + sneak-attack scene strongly support homicide. Compare with self-strangulation (rare and usually with simple knot, never windlass).</p>`,
    sources: ['VA-05 (Strangulation Types)','VA-06 (PM Strangulation)'],
    jumpToDiagram: 'VA-05'
  },
  {
    id: 'SAQ-15.5', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Drowning — enumerate types, postmortem findings, medicolegal importance.',
    answer: `<h4>Definition</h4>
<p>Death by asphyxia caused by immersion of mouth and nose in a fluid medium that fills the airways and prevents gas exchange.</p>
<h4>Four Types of Drowning</h4>
<ol><li><strong>Wet drowning (~90 %)</strong> — water aspirated into lungs. Fresh water → haemodilution → haemolysis → hyperkalaemia → VF (5-10 min). Sea water → pulmonary oedema → hypovolaemia → hypoxia (8-12 min).</li>
<li><strong>Dry drowning (~10 %)</strong> — sudden laryngospasm prevents aspiration. Lungs DRY at autopsy.</li>
<li><strong>Secondary drowning</strong> — death hours-days after rescue from ARDS / pneumonia due to surfactant damage.</li>
<li><strong>Immersion (hydrocution)</strong> — sudden vagal cardiac arrest on entering cold water. Lungs may be DRY. Death in seconds-minutes.</li></ol>
<h4>External Post-mortem Findings</h4>
<ul><li><strong>Champignon mushroom froth</strong> at mouth/nostrils (fine, white-pink, persistent) — pathognomonic for antemortem drowning</li>
<li><strong>Cutis anserina</strong> (goose-skin) — non-specific</li>
<li><strong>Washerwoman\'s hand</strong> — wrinkling of palms/soles after &gt; 2 hours immersion (duration only, not antemortem proof)</li>
<li><strong>Cadaveric spasm</strong> — clenched fists grasping weeds/mud — strong antemortem sign</li>
<li>Face pale (early) or cyanosed (late)</li>
<li>Conjunctival haemorrhages</li></ul>
<h4>Internal Post-mortem Findings</h4>
<ul><li><strong>Lungs</strong>: emphysema aquosum (heavy, ballooned, pit on pressure); <strong>Paltauf haemorrhages</strong> (sub-pleural bluish-red — relatively specific); frothy fluid on cut surface</li>
<li><strong>Airways</strong>: fine frothy fluid in trachea + bronchi</li>
<li><strong>Stomach</strong>: water + sand / silt (swallowed during struggle)</li>
<li><strong>Middle ear haemorrhage</strong> (Niles sign — DD with head injury)</li>
<li>Right heart distended with dark fluid blood</li>
<li>Visceral congestion</li></ul>
<h4>Key Tests</h4>
<ul><li><strong>Diatom test (gold standard)</strong>: acid-digestion of organs (especially femur marrow) → diatoms in distant organs = antemortem drowning</li>
<li><strong>Gettler test</strong>: chloride difference between L and R heart blood (fresh water → ↑ L heart)</li>
<li><strong>Specific gravity test</strong>: ↓ in fresh-water drowning (haemodilution)</li>
<li><strong>Strontium test</strong>: marker for sea-water drowning</li></ul>
<h4>Medicolegal Importance</h4>
<ul><li><strong>Manner of death</strong>: most accidental; some suicidal (deep water, weighted); rarely homicidal (forcibly held under)</li>
<li><strong>Differentiate antemortem vs postmortem submersion</strong> — diatom test, washerwoman\'s hand, vital reactions, cadaveric spasm</li>
<li><strong>Identify the body</strong> — bodies in water often decompose rapidly (aerial drowning, adipocere formation)</li>
<li><strong>Time of immersion</strong> — washerwoman\'s hand (2+ hrs), maceration of fingernails (24-48 hrs), skin slippage (3-5 days), adipocere (weeks-months)</li>
<li><strong>Cause and manner</strong> — depend on combining external/internal findings with scene investigation</li></ul>`,
    sources: ['VA-09 (Drowning Types)','VA-10 (PM Drowning)','DT-3 (Drowning types)'],
    jumpToDiagram: 'VA-09'
  }
];

return {
  chapterNumber: 15,
  chapterTitle: 'Violent Asphyxia',
  prereqs: [
    { term: 'Asphyxia', meaning: 'Impaired gas exchange (low O₂ + high CO₂) from mechanical interference with respiration.' },
    { term: 'Hanging', meaning: 'Neck constriction by ligature where body weight provides the force.' },
    { term: 'Strangulation', meaning: 'Neck constriction by external force OTHER than body weight.' },
    { term: 'Throttling', meaning: 'Manual strangulation — by hands at the neck.' },
    { term: 'Suffocation', meaning: 'Obstruction of external air passages without neck force.' },
    { term: 'Drowning', meaning: 'Asphyxia from immersion of mouth/nose in fluid.' },
    { term: 'Tardieu spots', meaning: 'Petechial haemorrhages — pinpoint bleeds on conjunctivae, pleura, pericardium · classic asphyxial sign.' },
    { term: 'Cadaveric spasm', meaning: 'Instantaneous post-death stiffening of hands grasping objects — strong sign of antemortem activity.' },
    { term: 'Vagal inhibition', meaning: 'Reflex cardiac arrest from pressure on carotid sinus baroreceptor.' },
    { term: 'Ligature mark', meaning: 'Imprint of the constricting agent on the skin of the neck.' }
  ],
  diagrams: [
    { id: 'VA-01', title: 'Violent Asphyxia — Classification + Signs', shortTitle: 'Classification + Signs', svg: SVG_VA01,
      prereqs: [{term:'Asphyxia',meaning:'Impaired gas exchange from mechanical cause.'},{term:'Tardieu spots',meaning:'Petechial haemorrhages on serous membranes.'},{term:'Cyanosis',meaning:'Bluish discolouration from deoxygenated blood.'},{term:'Visceral congestion',meaning:'Organ engorgement with venous blood.'}],
      nodes: nodeList(['asphyxia-definition','va-hanging','va-strangulation','va-suffocation','va-drowning','va-chemical','va-stages','va-signs']),
      mcqs: MCQS['VA-01']
    },
    { id: 'VA-02', title: 'Hanging — Types &amp; Mechanism', shortTitle: 'Hanging Types', svg: SVG_VA02,
      prereqs: [{term:'Complete hanging',meaning:'Body fully suspended; feet do not touch ground.'},{term:'Partial hanging',meaning:'Body partly supported; only fraction of weight on neck.'},{term:'Typical hanging',meaning:'Knot at back of neck.'},{term:'Atypical hanging',meaning:'Knot anywhere except back of neck.'},{term:'Hangman fracture',meaning:'Bilateral C2 pedicle fracture in judicial hanging.'}],
      nodes: nodeList(['hanging-definition','hanging-complete','hanging-partial','hanging-typical','hanging-atypical','hanging-mechanism']),
      mcqs: MCQS['VA-02']
    },
    { id: 'VA-03', title: 'PM Findings in Hanging', shortTitle: 'PM Hanging Findings', svg: SVG_VA03,
      prereqs: [{term:'Salivary dribbling',meaning:'Saliva trickling from corner of mouth opposite to knot — antemortem sign.'},{term:'Amussat sign',meaning:'Transverse tear in intima of carotid artery in jerk/judicial hangings.'},{term:'Glove-stocking lividity',meaning:'Lividity pattern in suspended bodies — hands and lower limbs.'}],
      nodes: nodeList(['pm-external-face','pm-external-ligature','pm-internal-neck','pm-internal-asphyxial']),
      mcqs: MCQS['VA-03']
    },
    { id: 'VA-04', title: 'Ligature Mark Features (7)', shortTitle: 'Ligature Mark — 7 Features', svg: SVG_VA04,
      prereqs: [{term:'Vital reaction',meaning:'Tissue response (haemorrhage / oedema) to injury — proves antemortem origin.'},{term:'Parchmentisation',meaning:'Drying + shrinkage of compressed dermis → dark leathery mark.'},{term:'Knot impression',meaning:'Pressure mark at site of ligature knot on the skin.'}],
      nodes: nodeList(['lm-direction','lm-continuity','lm-level','lm-texture','lm-colour','lm-knot','lm-vital']),
      mcqs: MCQS['VA-04']
    },
    { id: 'VA-05', title: 'Strangulation — 6 Subtypes', shortTitle: 'Strangulation Types', svg: SVG_VA05,
      prereqs: [{term:'Ligature strangulation',meaning:'Strangulation by rope, scarf, etc.'},{term:'Throttling',meaning:'Manual strangulation by hands.'},{term:'Bansdola',meaning:'Strangulation by two wooden sticks.'},{term:'Garroting',meaning:'Ligature + tightening stick from behind.'},{term:'Mugging',meaning:'Chokehold by bend of elbow.'},{term:'Palmar strangulation',meaning:'Heel of palm pressed on anterior neck.'}],
      nodes: nodeList(['str-ligature','str-throttling','str-bansdola','str-garroting','str-mugging','str-palmar']),
      mcqs: MCQS['VA-05']
    },
    { id: 'VA-06', title: 'PM Findings in Strangulation', shortTitle: 'PM Strangulation', svg: SVG_VA06,
      prereqs: [{term:'Defence wounds',meaning:'Injuries on hands/forearms from victim trying to ward off attack.'},{term:'Asphyxial stigmata',meaning:'Classical post-mortem signs of asphyxia.'}],
      nodes: nodeList(['str-pm-face','str-pm-mark','str-pm-internal','str-pm-asphyxial']),
      mcqs: MCQS['VA-06']
    },
    { id: 'VA-07', title: 'Hyoid Bone Fractures — 3 Patterns', shortTitle: 'Hyoid Fractures', svg: SVG_VA07,
      prereqs: [{term:'Greater cornu',meaning:'Lateral, longer part of hyoid bone — most common fracture site.'},{term:'In-and-out fracture',meaning:'Inward compression pattern (throttling).'},{term:'Out-and-in fracture',meaning:'Outward splaying pattern (hanging).'},{term:'Periosteum',meaning:'Outer fibrous covering of bone — its tear direction differentiates fracture pattern.'}],
      nodes: nodeList(['hyoid-anatomy','hyoid-inout','hyoid-outin','hyoid-ap']),
      mcqs: MCQS['VA-07']
    },
    { id: 'VA-08', title: 'Suffocation Group — 6 Mechanisms', shortTitle: 'Suffocation', svg: SVG_VA08,
      prereqs: [{term:'Smothering',meaning:'External obstruction of mouth + nose.'},{term:'Gagging',meaning:'Material forced into mouth blocking pharynx.'},{term:'Choking',meaning:'Internal airway obstruction by foreign body.'},{term:'Traumatic asphyxia',meaning:'External chest compression preventing respiration.'},{term:'Masque ecchymotique',meaning:'Blue discolouration of face/neck/upper chest in traumatic asphyxia.'},{term:'Bolus death',meaning:'Vagal cardiac arrest from food bolus stuck at larynx.'}],
      nodes: nodeList(['suf-smothering','suf-gagging','suf-choking','suf-traumatic','suf-overlying','suf-burking']),
      mcqs: MCQS['VA-08']
    },
    { id: 'VA-09', title: 'Drowning — 4 Types &amp; 5 Stages', shortTitle: 'Drowning Types', svg: SVG_VA09,
      prereqs: [{term:'Wet drowning',meaning:'Water aspirated into lungs — ~90% of cases.'},{term:'Dry drowning',meaning:'Laryngospasm prevents aspiration — lungs remain dry.'},{term:'Hydrocution',meaning:'Sudden vagal cardiac arrest on cold water entry.'},{term:'Secondary drowning',meaning:'Death hours-days post rescue from ARDS/pneumonia.'},{term:'Haemodilution',meaning:'Decrease in blood concentration from absorbed water.'}],
      nodes: nodeList(['drown-definition','drown-wet','drown-dry','drown-secondary','drown-immersion','drown-stages']),
      mcqs: MCQS['VA-09']
    },
    { id: 'VA-10', title: 'PM Findings in Drowning + Diatom Test', shortTitle: 'PM Drowning', svg: SVG_VA10,
      prereqs: [{term:'Champignon mushroom froth',meaning:'Fine white-pink persistent foam at mouth/nostrils — pathognomonic.'},{term:'Cutis anserina',meaning:'Goose-skin from erection of hair follicles.'},{term:'Washerwoman\'s hand',meaning:'Wrinkling of palms/soles after &gt;2 hrs immersion.'},{term:'Emphysema aquosum',meaning:'Ballooned heavy lungs in drowning.'},{term:'Paltauf haemorrhages',meaning:'Sub-pleural bluish-red haemorrhages in drowning.'},{term:'Diatom test',meaning:'Gold-standard test for antemortem drowning via microscopic algae.'}],
      nodes: nodeList(['drown-pm-external','drown-pm-lungs','drown-diatom','drown-misc']),
      mcqs: MCQS['VA-10']
    }
  ],
  diffTables: DIFF_TABLES,
  subjectiveQs: SUBJ,
  highYield: [
    '<strong>5 types of violent asphyxia</strong>: Hanging · Strangulation · Suffocation · Drowning · Chemical (HSSDC)',
    '<strong>4 stages of asphyxia</strong>: Dyspnoea → Convulsions → Apnoea/Exhaustion → Death (~3-5 min)',
    'Hanging = body weight; <strong>mostly SUICIDAL</strong>',
    'Strangulation = external force; <strong>mostly HOMICIDAL</strong>',
    'Hanging ligature mark: <strong>OBLIQUE · INCOMPLETE · ABOVE thyroid</strong>',
    'Strangulation ligature mark: <strong>HORIZONTAL · COMPLETE · AT/BELOW thyroid</strong>',
    '<strong>Typical hanging</strong> — knot at back · face PALE · both carotids occluded',
    '<strong>Atypical hanging</strong> — knot elsewhere · face CONGESTED · one carotid patent',
    'Only <strong>4-5 kg pressure</strong> needed to occlude carotid → partial hanging is fatal',
    '<strong>Salivary dribbling</strong> = most reliable antemortem hanging sign (NEET-PG 2016)',
    'Most common mechanism of death in hanging = <strong>venous obstruction</strong>',
    '<strong>Hangman\\\'s fracture</strong> = bilateral C2 pedicle # in judicial hanging only',
    '<strong>Amussat\\\'s sign</strong> = transverse tear in carotid intima (jerk hangings)',
    '<strong>Bansdola</strong> = strangulation by 2 wooden sticks (NEET-PG 2016)',
    'Ligature horizontal + below thyroid + no salivary dribbling = ligature strangulation (NEET-PG 2022)',
    '<strong>Hyoid fracture</strong>: &lt;30% in hanging; more common in throttling/strangulation',
    'Wet drowning (~90%) — fluid aspirated · Dry drowning (~10%) — laryngospasm',
    '<strong>Hydrocution</strong> = sudden death on entering cold water (vagal reflex)',
    '<strong>Tardieu spots</strong> = petechial haemorrhages (most pathognomonic asphyxial sign)',
    '<strong>Cherry-red lividity</strong> = CO poisoning (chemical asphyxia)'
  ]
};
})();
