/* ===================================================================
   Medascend FMT — Chapter 10: Firearm and Bomb Blast Injuries
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

const SVG_FA01 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Firearm Classification</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Rifled vs Smooth-bore · projectile type · velocity · range capacity</text>

<g data-node-id="fa-definition"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🔫 FIREARM</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= a weapon that fires a projectile by the expansive force of gases produced by burning gunpowder. Two main classes by barrel design: RIFLED (spiral grooves) and SMOOTH-BORE (no grooves). The Arms Act 1959 + Arms Rules 2016 govern licensing in India.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fa-rifled"><rect class="body-white" x="60" y="240" width="730" height="380" rx="14"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 310 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">🎯 1. RIFLED FIREARMS</text><text x="80" y="350" class="t-keylbl">Barrel:</text><text x="160" y="350" class="t-keyval">Spiral grooves (lands + grooves) — impart spin to bullet → stability</text><text x="80" y="382" class="t-keylbl">Projectile:</text><text x="190" y="382" class="t-keyval">Single BULLET (single missile)</text><text x="80" y="414" class="t-keylbl">Velocity:</text><text x="170" y="414" class="t-keyval">HIGH — 300-900 m/s</text><text x="80" y="446" class="t-keylbl">Range:</text><text x="160" y="446" class="t-keyval">LONG (effective &gt; 50 m)</text><text x="80" y="478" class="t-keylbl">Examples:</text><text x="190" y="478" class="t-keyval">Rifle · Revolver · Pistol · Carbine · Sten gun</text><text x="80" y="510" class="t-keylbl">Wound:</text><text x="170" y="510" class="t-keyval">Single round / oval entry; clear exit if distance</text><text x="80" y="542" class="t-keylbl">Marks on bullet:</text><text x="270" y="542" class="t-keyval">Striations from lands &amp; grooves (UNIQUE per gun)</text><text x="80" y="574" class="t-keylbl">Forensic ID:</text><text x="220" y="574" class="t-keyval">Comparison microscope — bullet striae → weapon</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fa-smoothbore"><rect class="body-white" x="810" y="240" width="730" height="380" rx="14"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 310 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gRed)"/><text x="830" y="285" font-family="Inter,system-ui,sans-serif" font-size="22" font-weight="800" fill="white">💥 2. SMOOTH-BORE FIREARMS</text><text x="830" y="350" class="t-keylbl">Barrel:</text><text x="910" y="350" class="t-keyval">No grooves — smooth interior</text><text x="830" y="382" class="t-keylbl">Projectile:</text><text x="940" y="382" class="t-keyval">MULTIPLE pellets (shot) or single slug</text><text x="830" y="414" class="t-keylbl">Velocity:</text><text x="920" y="414" class="t-keyval">LOWER — 250-450 m/s</text><text x="830" y="446" class="t-keylbl">Range:</text><text x="910" y="446" class="t-keyval">SHORTER (effective ~ 25-40 m)</text><text x="830" y="478" class="t-keylbl">Examples:</text><text x="940" y="478" class="t-keyval">Shotgun · Country-made "katta"</text><text x="830" y="510" class="t-keylbl">Wound:</text><text x="920" y="510" class="t-keyval">Multiple pellet holes (close: 1 hole + collar)</text><text x="830" y="542" class="t-keylbl">Choke:</text><text x="910" y="542" class="t-keyval">Constriction at muzzle controls pellet spread</text><text x="830" y="574" class="t-keylbl">Forensic ID:</text><text x="970" y="574" class="t-keyval">Pellet pattern + spread + cartridge case</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fa-velocity"><rect class="body-white" x="60" y="650" width="730" height="240" rx="14"/><path d="M 74,650 H 776 A 14,14 0 0 1 790,664 V 715 H 60 V 664 A 14,14 0 0 1 74,650 Z" fill="url(#gOrange)"/><text x="80" y="695" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">⚡ Velocity Classification</text><text x="80" y="750" class="t-keylbl">Low velocity:</text><text x="220" y="750" class="t-keyval">&lt; 350 m/s (revolver, pistol)</text><text x="80" y="780" class="t-keylbl">Medium velocity:</text><text x="270" y="780" class="t-keyval">350-600 m/s (sub-machine, sten)</text><text x="80" y="810" class="t-keylbl">High velocity:</text><text x="220" y="810" class="t-keyval">&gt; 600 m/s (military rifle)</text><text x="80" y="845" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">High-velocity wounds show temporary cavity, hydraulic shock, distant fractures.</text><circle class="ic" cx="770" cy="668" r="14"/><text class="t-info" x="770" y="674" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fa-legal"><rect x="810" y="650" width="730" height="240" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1175" y="695" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">⚖️ Legal Framework (India)</text><text x="830" y="740" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>Arms Act 1959</strong> + <strong>Arms Rules 2016</strong> — licensing</text><text x="830" y="765" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>Prohibited bore</strong> .303, 7.62, 9 mm — military / police only</text><text x="830" y="790" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>Non-prohibited bore</strong> .22, .315, .32, .380, 12-bore — civilian</text><text x="830" y="815" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>Country-made</strong> ("katta", deshi tamancha) — illegal &amp; common</text><text x="830" y="840" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• BNS 118 — hurt by dangerous weapon · BNS 101/103 if fatal</text><text x="830" y="865" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>NDPS</strong> + Arms Act — possession offence</text><circle class="ic" cx="1530" cy="668" r="14"/><text class="t-info" x="1530" y="674" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="910" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="948" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Rifled = single bullet · high velocity · long range · spin → striations · Smooth-bore = pellets · low velocity · choke</text>

<rect x="60" y="990" width="1480" height="50" rx="10" fill="url(#gBlue)"/><text x="800" y="1022" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">🧠 Mnemonic — "RHS / SLM": Rifled = High velocity, Single bullet · Smooth = Low velocity, Multiple pellets</text>
</svg>`;

const SVG_FA02 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Rifled Firearm Anatomy &amp; Bullet Types</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Cartridge components · special bullets (Dumdum · Tandem · Souvenir · Ricochet)</text>

<g data-node-id="cartridge-anatomy"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🔩 RIFLED CARTRIDGE COMPONENTS</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">4 parts: <strong>Bullet</strong> (projectile) · <strong>Cartridge case</strong> (brass tube) · <strong>Propellant</strong> (gunpowder / nitrocellulose) · <strong>Primer</strong> (percussion cap at base — ignites propellant when struck by firing pin).</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bullet-normal"><rect class="body-white" x="60" y="240" width="490" height="220" rx="14"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">🔵 Ordinary Bullet</text><text x="80" y="338" class="t-keylbl">Material:</text><text x="170" y="338" class="t-keyval">Lead core with copper / brass jacket</text><text x="80" y="368" class="t-keylbl">Shape:</text><text x="150" y="368" class="t-keyval">Pointed nose, full metal jacket (FMJ)</text><text x="80" y="398" class="t-keylbl">Behaviour:</text><text x="190" y="398" class="t-keyval">Holds together — passes through tissue</text><text x="80" y="430" class="t-keylbl">Wound:</text><text x="155" y="430" class="t-keyval">Clean entry + exit possible</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bullet-dumdum"><rect class="body-white" x="570" y="240" width="490" height="220" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 584,240 H 1046 A 14,14 0 0 1 1060,254 V 295 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gRed)"/><text x="590" y="285" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">💥 DUMDUM Bullet ★</text><text x="590" y="338" class="t-keylbl">Definition:</text><text x="700" y="338" class="t-keyval">Jacketed bullet with EXPOSED soft lead</text><text x="590" y="358" class="t-keyval">at the TIP (or hollow nose / X-cut)</text><text x="590" y="388" class="t-keylbl">Action:</text><text x="660" y="388" class="t-keyval">MUSHROOMS / EXPANDS in tissue</text><text x="590" y="418" class="t-keylbl">Effect:</text><text x="660" y="418" class="t-keyval">MAXIMUM tissue damage</text><text x="590" y="448" class="t-keylbl">Status:</text><text x="660" y="448" class="t-keyval">Banned for military (Hague 1899)</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bullet-tandem"><rect class="body-white" x="1080" y="240" width="460" height="220" rx="14"/><path d="M 1094,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 1080 V 254 A 14,14 0 0 1 1094,240 Z" fill="url(#gOrange)"/><text x="1090" y="285" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">🚂 TANDEM Bullet</text><text x="1090" y="338" class="t-keylbl">Definition:</text><text x="1200" y="338" class="t-keyval">Bullet stuck in barrel from</text><text x="1090" y="358" class="t-keyval">previous misfire, pushed out by next shot</text><text x="1090" y="388" class="t-keylbl">Effect:</text><text x="1160" y="388" class="t-keyval">TWO bullets emerge —</text><text x="1090" y="408" class="t-keyval">tandem (one behind other)</text><text x="1090" y="438" class="t-keyval">Two entry wounds close together</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bullet-souvenir"><rect class="body-white" x="60" y="490" width="490" height="220" rx="14"/><path d="M 74,490 H 536 A 14,14 0 0 1 550,504 V 545 H 60 V 504 A 14,14 0 0 1 74,490 Z" fill="url(#gGreen)"/><text x="80" y="535" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">🪙 SOUVENIR Bullet</text><text x="80" y="588" class="t-keylbl">Definition:</text><text x="190" y="588" class="t-keyval">Bullet that REMAINS in body —</text><text x="80" y="608" class="t-keyval">embeds in tissue without exiting</text><text x="80" y="638" class="t-keylbl">Cause:</text><text x="150" y="638" class="t-keyval">Low velocity OR resistance from bone</text><text x="80" y="668" class="t-keylbl">Use:</text><text x="135" y="668" class="t-keyval">Recovered at surgery / autopsy →</text><text x="80" y="688" class="t-keyval">forensic ID via comparison microscope</text><circle class="ic" cx="540" cy="508" r="14"/><text class="t-info" x="540" y="514" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bullet-ricochet"><rect class="body-white" x="570" y="490" width="490" height="220" rx="14"/><path d="M 584,490 H 1046 A 14,14 0 0 1 1060,504 V 545 H 570 V 504 A 14,14 0 0 1 584,490 Z" fill="url(#gPurple)"/><text x="590" y="535" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">↩️ RICOCHET Bullet</text><text x="590" y="588" class="t-keylbl">Definition:</text><text x="700" y="588" class="t-keyval">Bullet that strikes a surface</text><text x="590" y="608" class="t-keyval">(wall, ground) and DEFLECTS off course</text><text x="590" y="638" class="t-keylbl">Features:</text><text x="680" y="638" class="t-keyval">Tumbling motion → irregular,</text><text x="590" y="658" class="t-keyval">larger, IRREGULAR entry wound (key-hole shape)</text><text x="590" y="688" class="t-keylbl">Mark:</text><text x="650" y="688" class="t-keyval">Bullet may show flattening + scratch marks</text><circle class="ic" cx="1050" cy="508" r="14"/><text class="t-info" x="1050" y="514" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bullet-tracer"><rect class="body-white" x="1080" y="490" width="460" height="220" rx="14"/><path d="M 1094,490 H 1526 A 14,14 0 0 1 1540,504 V 545 H 1080 V 504 A 14,14 0 0 1 1094,490 Z" fill="url(#gGrey)"/><text x="1090" y="535" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">✨ Special Bullets</text><text x="1090" y="582" class="t-keyval"><strong>Tracer</strong> — chemical trail (luminous track)</text><text x="1090" y="608" class="t-keyval"><strong>Incendiary</strong> — sets target on fire</text><text x="1090" y="634" class="t-keyval"><strong>Armour-piercing</strong> — hardened core</text><text x="1090" y="660" class="t-keyval"><strong>Wadcutter</strong> — flat-nose, target practice</text><text x="1090" y="686" class="t-keyval"><strong>Duplex/Triplex</strong> — multiple projectiles in one shell</text><circle class="ic" cx="1530" cy="508" r="14"/><text class="t-info" x="1530" y="514" text-anchor="middle">ⓘ</text></g>

<g data-node-id="bullet-comparison"><rect x="60" y="740" width="1480" height="180" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="780" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">⚖️ Maximum Damage Bullet Ranking</text><text x="100" y="820" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>Most damaging: DUMDUM</strong> — expanding mushroom action transfers maximum kinetic energy + creates large permanent cavity. <strong>[NEET-PG 2016 PYQ — Q29]</strong></text><text x="100" y="848" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">Ranking (most → least damaging in soft tissue): <strong>Dumdum &gt; Tandem &gt; Souvenir &gt; Ricochet &gt; ordinary FMJ &gt; Wadcutter (variable)</strong></text><text x="100" y="876" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">NEET-PG 2016 Q30 — a bullet packed with jacket and OPENS AT THE BASE = <strong>Dumdum bullet</strong> (note: base-opening is one design variant).</text><circle class="ic" cx="1510" cy="758" r="14"/><text class="t-info" x="1510" y="764" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="940" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="978" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Dumdum = expanding (max damage) · Tandem = 2 bullets · Souvenir = retained · Ricochet = deflected/tumbling</text>
</svg>`;

const SVG_FA03 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Shotgun &amp; Smooth-bore Ammunition</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Cartridge structure · pellets · wads · choke · range &amp; spread relationship</text>

<g data-node-id="shotgun-cartridge"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">📦 SHOTGUN CARTRIDGE</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Components (proximal → distal): <strong>Brass base + primer</strong> → <strong>propellant powder</strong> → <strong>card / felt wads</strong> (separator) → <strong>shot pellets</strong> → <strong>over-shot wad</strong> (rim crimp). 12-bore is most common civilian gauge.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="shotgun-pellets"><rect class="body-white" x="60" y="240" width="730" height="270" rx="14"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">⚫ Pellet Types &amp; Sizes</text><text x="80" y="345" class="t-keylbl">Bird shot:</text><text x="180" y="345" class="t-keyval">Small lead spheres 1.3-4 mm — for fowl/game</text><text x="80" y="375" class="t-keylbl">Buck shot:</text><text x="190" y="375" class="t-keyval">Large lead spheres 6-9 mm — for deer/defence</text><text x="80" y="405" class="t-keylbl">Slug:</text><text x="135" y="405" class="t-keyval">Single solid heavy projectile — short range</text><text x="80" y="435" class="t-keylbl">Pellet count:</text><text x="210" y="435" class="t-keyval">12-bore #6 bird-shot ≈ 270 pellets per cartridge</text><text x="80" y="465" class="t-keylbl">Material:</text><text x="170" y="465" class="t-keyval">Lead · steel · bismuth · tungsten alloys</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="shotgun-wads"><rect class="body-white" x="810" y="240" width="730" height="270" rx="14"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gGreen)"/><text x="830" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🟢 Wads — Critical Forensic Clue</text><text x="830" y="345" class="t-keylbl">Function:</text><text x="930" y="345" class="t-keyval">Separate powder from pellets; gas-seal</text><text x="830" y="375" class="t-keylbl">Material:</text><text x="920" y="375" class="t-keyval">Felt · card · plastic cup-shape</text><text x="830" y="405" class="t-keylbl">★ Range value:</text><text x="990" y="405" class="t-keyval">If wad is INSIDE the wound,</text><text x="850" y="425" class="t-keyval">range ≤ 3 m (wads fall off beyond ~2-3 m)</text><text x="830" y="455" class="t-keylbl">Recovery:</text><text x="940" y="455" class="t-keyval">Always search for &amp; preserve wads in</text><text x="850" y="475" class="t-keyval">wound tract — they identify cartridge manufacturer</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="shotgun-choke"><rect class="body-white" x="60" y="540" width="730" height="270" rx="14"/><path d="M 74,540 H 776 A 14,14 0 0 1 790,554 V 605 H 60 V 554 A 14,14 0 0 1 74,540 Z" fill="url(#gOrange)"/><text x="80" y="585" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🔻 Choke (Muzzle Constriction)</text><text x="80" y="640" class="t-keyval">Constriction at the muzzle end controls how tightly the</text><text x="80" y="660" class="t-keyval">pellets cluster at range:</text><text x="80" y="695" class="t-keylbl">Cylinder (none):</text><text x="250" y="695" class="t-keyval">~ 40% pellets in 30" circle at 40 yd</text><text x="80" y="725" class="t-keylbl">Improved cylinder:</text><text x="280" y="725" class="t-keyval">~ 50%</text><text x="80" y="755" class="t-keylbl">Modified:</text><text x="170" y="755" class="t-keyval">~ 60%</text><text x="80" y="785" class="t-keylbl">Full choke:</text><text x="180" y="785" class="t-keyval">~ 70-75% — tightest pattern</text><circle class="ic" cx="770" cy="558" r="14"/><text class="t-info" x="770" y="564" text-anchor="middle">ⓘ</text></g>

<g data-node-id="shotgun-spread"><rect class="body-white" x="810" y="540" width="730" height="270" rx="14"/><path d="M 824,540 H 1526 A 14,14 0 0 1 1540,554 V 605 H 810 V 554 A 14,14 0 0 1 824,540 Z" fill="url(#gPurple)"/><text x="830" y="585" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">📐 Spread of Pellets vs Range</text><text x="830" y="640" class="t-keylbl">Contact / ≤ 1 m:</text><text x="1030" y="640" class="t-keyval">Single circular hole (no spread)</text><text x="830" y="670" class="t-keylbl">1-2 m:</text><text x="920" y="670" class="t-keyval">Single hole + few satellite pellets</text><text x="830" y="700" class="t-keylbl">2-4 m:</text><text x="920" y="700" class="t-keyval">"Rat-hole" pattern — central + satellites</text><text x="830" y="730" class="t-keylbl">4-8 m:</text><text x="920" y="730" class="t-keyval">Scattered pellets, no central hole</text><text x="830" y="760" class="t-keylbl">★ Rule of thumb:</text><text x="1030" y="760" class="t-keyval">Spread diameter (inches) ≈ range (yards) ×</text><text x="850" y="780" class="t-keyval">1 (cylinder bore) — used to estimate distance</text><circle class="ic" cx="1530" cy="558" r="14"/><text class="t-info" x="1530" y="564" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="840" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="878" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Shotgun cartridge — 5 parts: base+primer · powder · wads · pellets · over-shot wad</text>

<rect x="60" y="920" width="1480" height="60" rx="10" fill="url(#gGrey)"/><text x="800" y="958" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⚠️ Wad in wound = range ≤ 3 m · spread of pellets (inches) ≈ range (yards) × 1 (cylinder bore)</text>
</svg>`;

const SVG_FA04 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Rifled Entry Wound — Features</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">5 features around an entry — central hole · abrasion (dirt) collar · grease collar · burning · tattooing</text>

<g data-node-id="entry-definition"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🎯 RIFLED ENTRY WOUND</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Round / oval skin hole, slightly SMALLER than bullet diameter (skin retracts after passage). 5 concentric zones around it tell the firing range. Margins are inverted.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="entry-hole"><rect class="body-white" x="60" y="240" width="490" height="240" rx="14"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 295 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">1️⃣ Central Hole</text><text x="80" y="345" class="t-keylbl">Shape:</text><text x="150" y="345" class="t-keyval">Round / oval (oblique → oval)</text><text x="80" y="375" class="t-keylbl">Size:</text><text x="140" y="375" class="t-keyval">Smaller than bullet diameter</text><text x="80" y="405" class="t-keylbl">Margins:</text><text x="170" y="405" class="t-keyval">INVERTED (pushed inward)</text><text x="80" y="435" class="t-keylbl">Edges:</text><text x="150" y="435" class="t-keyval">Smooth, may show punched-out look</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="entry-abrasion"><rect class="body-white" x="570" y="240" width="490" height="240" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 584,240 H 1046 A 14,14 0 0 1 1060,254 V 295 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gOrange)"/><text x="590" y="285" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">2️⃣ Abrasion Collar ★</text><text x="590" y="345" class="t-keylbl">Synonym:</text><text x="700" y="345" class="t-keyval">"Dirt collar" · "contusion collar"</text><text x="590" y="375" class="t-keylbl">Width:</text><text x="660" y="375" class="t-keyval">1-3 mm reddish-brown ring</text><text x="590" y="405" class="t-keylbl">Cause:</text><text x="660" y="405" class="t-keyval">Skin scraped by spinning bullet</text><text x="590" y="425" class="t-keyval">on entry · friction abrasion</text><text x="590" y="455" class="t-keylbl">★ Confirms ENTRY (NOT exit)</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="entry-grease"><rect class="body-white" x="1080" y="240" width="460" height="240" rx="14"/><path d="M 1094,240 H 1526 A 14,14 0 0 1 1540,254 V 295 H 1080 V 254 A 14,14 0 0 1 1094,240 Z" fill="url(#gGreen)"/><text x="1090" y="285" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">3️⃣ Grease Collar</text><text x="1090" y="338" class="t-keylbl">Synonym:</text><text x="1200" y="338" class="t-keyval">"Lubricant collar"</text><text x="1090" y="368" class="t-keylbl">Cause:</text><text x="1160" y="368" class="t-keyval">Grease/lubricant from barrel</text><text x="1090" y="388" class="t-keyval">wiped off on skin by bullet</text><text x="1090" y="418" class="t-keylbl">Detection:</text><text x="1200" y="418" class="t-keyval">UV light · chemical test</text><text x="1090" y="448" class="t-keyval">First shot from clean gun = visible</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="entry-burning"><rect class="body-white" x="60" y="510" width="490" height="240" rx="14"/><path d="M 74,510 H 536 A 14,14 0 0 1 550,524 V 565 H 60 V 524 A 14,14 0 0 1 74,510 Z" fill="url(#gRed)"/><text x="80" y="555" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">4️⃣ Burning (Singeing)</text><text x="80" y="615" class="t-keylbl">Cause:</text><text x="150" y="615" class="t-keyval">Hot gases / flame from muzzle</text><text x="80" y="645" class="t-keylbl">Findings:</text><text x="180" y="645" class="t-keyval">Singed / burnt hair · charred skin</text><text x="80" y="675" class="t-keylbl">Range:</text><text x="150" y="675" class="t-keyval">CONTACT or very close (≤ 15 cm)</text><text x="80" y="705" class="t-keylbl">DD:</text><text x="120" y="705" class="t-keyval">Disappears beyond close range</text><circle class="ic" cx="540" cy="528" r="14"/><text class="t-info" x="540" y="534" text-anchor="middle">ⓘ</text></g>

<g data-node-id="entry-blackening"><rect class="body-white" x="570" y="510" width="490" height="240" rx="14"/><path d="M 584,510 H 1046 A 14,14 0 0 1 1060,524 V 565 H 570 V 524 A 14,14 0 0 1 584,510 Z" fill="url(#gGrey)"/><text x="590" y="555" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">5️⃣ Blackening (Smoke / Soot)</text><text x="590" y="615" class="t-keylbl">Cause:</text><text x="660" y="615" class="t-keyval">Smoke / unburnt powder deposit</text><text x="590" y="645" class="t-keylbl">Findings:</text><text x="690" y="645" class="t-keyval">Black soot deposit around hole</text><text x="590" y="675" class="t-keylbl">Range:</text><text x="660" y="675" class="t-keyval">Close shot (≤ 30 cm)</text><text x="590" y="705" class="t-keylbl">★ Wash test:</text><text x="720" y="705" class="t-keyval">WASHES OFF (smoke deposit)</text><circle class="ic" cx="1050" cy="528" r="14"/><text class="t-info" x="1050" y="534" text-anchor="middle">ⓘ</text></g>

<g data-node-id="entry-tattooing"><rect class="body-white" x="1080" y="510" width="460" height="240" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 1094,510 H 1526 A 14,14 0 0 1 1540,524 V 565 H 1080 V 524 A 14,14 0 0 1 1094,510 Z" fill="url(#gPurple)"/><text x="1090" y="555" font-family="Inter,system-ui,sans-serif" font-size="17" font-weight="800" fill="white">6️⃣ Tattooing ★</text><text x="1090" y="608" class="t-keylbl">Cause:</text><text x="1160" y="608" class="t-keyval">Unburnt &amp; partly burnt</text><text x="1090" y="628" class="t-keyval">powder particles embedded in skin</text><text x="1090" y="658" class="t-keylbl">Range:</text><text x="1160" y="658" class="t-keyval">Near shot (~ 15-60 cm)</text><text x="1090" y="688" class="t-keylbl">★ Wash test:</text><text x="1220" y="688" class="t-keyval">CANNOT be washed off</text><text x="1090" y="710" class="t-keyval">(particles embedded in skin)</text><circle class="ic" cx="1530" cy="528" r="14"/><text class="t-info" x="1530" y="534" text-anchor="middle">ⓘ</text></g>

<g data-node-id="entry-pyq"><rect x="60" y="780" width="1480" height="160" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="820" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">🎯 NEET-PG 2019 PYQ Q6</text><text x="100" y="858" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">"Alleged history of gun shot injury with burning, blackening, tattooing around the wound + dirt collar — the injury is:"</text><text x="100" y="888" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>Answer: CLOSE SHOT ENTRY WOUND</strong> — all 5 features (entry hole + dirt collar + burning + blackening + tattooing) present together → entry at close range.</text><text x="100" y="918" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="rgba(255,255,255,0.75)">Exit wounds have NO collar, no burning/blackening/tattooing — these features confirm ENTRY.</text><circle class="ic" cx="1510" cy="798" r="14"/><text class="t-info" x="1510" y="804" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="960" width="1480" height="80" rx="10" fill="url(#gOrange)"/><text x="800" y="1000" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Entry collars: ABRASION (always — friction) · GREASE (always — barrel) · BURNING (contact) ·</text><text x="800" y="1025" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">BLACKENING (close ≤30cm, washes) · TATTOOING (near ≤60cm, doesn't wash)</text>
</svg>`;

const SVG_FA05 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Rifled Entry vs Exit Wounds</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Size · shape · margins · collars · bone bevelling — the diagnostic side-by-side</text>

<g data-node-id="exit-features"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">↪️ EXIT WOUND</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">Larger, irregular, everted wound where bullet exits. Bullet tumbles/yaws after passing through tissue → exit usually bigger &amp; ragged. NO collars, NO burning/blackening/tattooing.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="entry-summary"><rect class="body-white" x="60" y="240" width="730" height="360" rx="14"/><path d="M 74,240 H 776 A 14,14 0 0 1 790,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🎯 ENTRY — Summary</text><text x="80" y="340" class="t-keylbl">Shape:</text><text x="160" y="340" class="t-keyval">Round / oval</text><text x="80" y="370" class="t-keylbl">Size:</text><text x="150" y="370" class="t-keyval">SMALLER than bullet</text><text x="80" y="400" class="t-keylbl">Margins:</text><text x="180" y="400" class="t-keyval">INVERTED inward</text><text x="80" y="430" class="t-keylbl">Abrasion collar:</text><text x="270" y="430" class="t-keyval">PRESENT (★ definitive)</text><text x="80" y="460" class="t-keylbl">Grease collar:</text><text x="240" y="460" class="t-keyval">Present</text><text x="80" y="490" class="t-keylbl">Burning/blackening:</text><text x="310" y="490" class="t-keyval">Possible (close range)</text><text x="80" y="520" class="t-keylbl">Tattooing:</text><text x="195" y="520" class="t-keyval">Possible (near range)</text><text x="80" y="550" class="t-keylbl">Bleeding:</text><text x="175" y="550" class="t-keyval">Less profuse externally</text><text x="80" y="580" class="t-keylbl">Bone bevel:</text><text x="220" y="580" class="t-keyval">INWARD bevelling (★ skull)</text><circle class="ic" cx="770" cy="258" r="14"/><text class="t-info" x="770" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="exit-summary"><rect class="body-white" x="810" y="240" width="730" height="360" rx="14"/><path d="M 824,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 810 V 254 A 14,14 0 0 1 824,240 Z" fill="url(#gRed)"/><text x="830" y="285" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">↪️ EXIT — Summary</text><text x="830" y="340" class="t-keylbl">Shape:</text><text x="910" y="340" class="t-keyval">IRREGULAR · stellate · slit</text><text x="830" y="370" class="t-keylbl">Size:</text><text x="900" y="370" class="t-keyval">LARGER than entry</text><text x="830" y="400" class="t-keylbl">Margins:</text><text x="930" y="400" class="t-keyval">EVERTED outward</text><text x="830" y="430" class="t-keylbl">Abrasion collar:</text><text x="1020" y="430" class="t-keyval">ABSENT (★)</text><text x="830" y="460" class="t-keylbl">Grease collar:</text><text x="990" y="460" class="t-keyval">Absent</text><text x="830" y="490" class="t-keylbl">Burning/blackening:</text><text x="1060" y="490" class="t-keyval">Absent</text><text x="830" y="520" class="t-keylbl">Tattooing:</text><text x="945" y="520" class="t-keyval">Absent</text><text x="830" y="550" class="t-keylbl">Bleeding:</text><text x="925" y="550" class="t-keyval">More profuse externally</text><text x="830" y="580" class="t-keylbl">Bone bevel:</text><text x="970" y="580" class="t-keyval">OUTWARD bevelling (★ skull)</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="skull-bevel"><rect class="body-white" x="60" y="630" width="900" height="280" rx="14"/><path d="M 74,630 H 946 A 14,14 0 0 1 960,644 V 695 H 60 V 644 A 14,14 0 0 1 74,630 Z" fill="url(#gPurple)"/><text x="80" y="675" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🦴 Bone Bevelling — Skull (★ key autopsy sign)</text><text x="80" y="730" class="t-keylbl">Inner table:</text><text x="200" y="730" class="t-keyval">Entry of bullet — INNER table beveled wider</text><text x="80" y="752" class="t-keyval">(the "cone" opens INTO the skull)</text><text x="80" y="788" class="t-keylbl">Outer table:</text><text x="210" y="788" class="t-keyval">Exit of bullet — OUTER table beveled wider</text><text x="80" y="810" class="t-keyval">(the "cone" opens OUT of the skull)</text><text x="80" y="845" class="t-keylbl">★ Rule:</text><text x="170" y="845" class="t-keyval">Bevelling widens in the direction of bullet TRAVEL</text><text x="80" y="878" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="#6B7283">Coup–contrecoup of bullet — most reliable autopsy sign of bullet direction on skull / flat bone.</text><circle class="ic" cx="950" cy="648" r="14"/><text class="t-info" x="950" y="654" text-anchor="middle">ⓘ</text></g>

<g data-node-id="kronlein"><rect x="980" y="630" width="560" height="280" rx="14" fill="url(#gGreen)" filter="url(#cardShadow)"/><text x="1260" y="670" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">🧠 KRONLEIN Shot (Bursting Head)</text><text x="1000" y="715" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">High-velocity bullet (rifle / shotgun contact) to head</text><text x="1000" y="740" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">→ skull EXPLODES, brain matter ejected</text><text x="1000" y="765" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">→ scalp may be split / blown off</text><text x="1000" y="795" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>Mechanism:</strong> Hot gases enter cranium, expand</text><text x="1000" y="815" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">explosively in confined space → hydraulic burst</text><text x="1000" y="845" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>Classic:</strong> contact-range suicidal shotgun to head</text><text x="1000" y="875" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="rgba(255,255,255,0.75)">Asked in QBank LAQ (Q10).</text><circle class="ic" cx="1520" cy="648" r="14"/><text class="t-info" x="1520" y="654" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="940" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="978" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Entry = SMALLER, inverted, abrasion collar, INWARD bone bevel · Exit = LARGER, everted, no collar, OUTWARD bone bevel</text>
</svg>`;

const SVG_FA06 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Range Estimation — Rifled Firearm</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">4 ranges by appearance · contact · close · near · distant</text>

<g data-node-id="range-contact"><rect class="body-white" x="60" y="110" width="370" height="380" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,110 H 416 A 14,14 0 0 1 430,124 V 175 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gRed)"/><text x="80" y="155" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">1. CONTACT</text><text x="80" y="210" class="t-keylbl">Distance:</text><text x="180" y="210" class="t-keyval">Muzzle ON skin</text><text x="80" y="240" class="t-keylbl">Wound:</text><text x="160" y="240" class="t-keyval">Large, ragged, cruciform</text><text x="80" y="270" class="t-keylbl">Margins:</text><text x="170" y="270" class="t-keyval">Burnt, blackened</text><text x="80" y="300" class="t-keylbl">Cherry-red:</text><text x="210" y="300" class="t-keyval">CO + heat in wound tract</text><text x="80" y="330" class="t-keylbl">Werkgartner:</text><text x="220" y="330" class="t-keyval">Muzzle imprint on skin</text><text x="80" y="360" class="t-keylbl">Skull:</text><text x="140" y="360" class="t-keyval">Kronlein bursting (Ch ref)</text><text x="80" y="395" class="t-keylbl">Tattooing:</text><text x="190" y="395" class="t-keyval">DEEP (sub-epidermal)</text><text x="80" y="425" class="t-keylbl">Burning:</text><text x="170" y="425" class="t-keyval">PROMINENT</text><text x="80" y="455" class="t-keylbl">Blackening:</text><text x="210" y="455" class="t-keyval">DEEP in wound</text><circle class="ic" cx="420" cy="128" r="14"/><text class="t-info" x="420" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="range-close"><rect class="body-white" x="450" y="110" width="370" height="380" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 464,110 H 806 A 14,14 0 0 1 820,124 V 175 H 450 V 124 A 14,14 0 0 1 464,110 Z" fill="url(#gOrange)"/><text x="470" y="155" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">2. CLOSE (≤ 30 cm)</text><text x="470" y="210" class="t-keylbl">Distance:</text><text x="570" y="210" class="t-keyval">0 - 30 cm (≈ 1 ft)</text><text x="470" y="240" class="t-keylbl">Wound:</text><text x="550" y="240" class="t-keyval">Round, ~ bullet size</text><text x="470" y="270" class="t-keylbl">Burning:</text><text x="560" y="270" class="t-keyval">Present (≤ 15 cm)</text><text x="470" y="300" class="t-keylbl">Blackening:</text><text x="600" y="300" class="t-keyval">PROMINENT (≤ 30 cm)</text><text x="470" y="330" class="t-keylbl">Tattooing:</text><text x="580" y="330" class="t-keyval">Marked</text><text x="470" y="360" class="t-keylbl">Wash test:</text><text x="580" y="360" class="t-keylbl">Blackening washes</text><text x="490" y="380" class="t-keyval">off (smoke deposit)</text><text x="470" y="410" class="t-keylbl">Collars:</text><text x="555" y="410" class="t-keyval">All present</text><text x="470" y="455" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="#6B7283">★ This is the range described in NEET-PG 2019 Q6.</text><circle class="ic" cx="810" cy="128" r="14"/><text class="t-info" x="810" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="range-near"><rect class="body-white" x="840" y="110" width="370" height="380" rx="14"/><path d="M 854,110 H 1196 A 14,14 0 0 1 1210,124 V 175 H 840 V 124 A 14,14 0 0 1 854,110 Z" fill="url(#gPurple)"/><text x="860" y="155" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">3. NEAR (30-60 cm)</text><text x="860" y="210" class="t-keylbl">Distance:</text><text x="960" y="210" class="t-keyval">30 - 60 cm (1-2 ft)</text><text x="860" y="240" class="t-keylbl">Burning:</text><text x="950" y="240" class="t-keyval">ABSENT</text><text x="860" y="270" class="t-keylbl">Blackening:</text><text x="990" y="270" class="t-keyval">ABSENT</text><text x="860" y="300" class="t-keylbl">Tattooing:</text><text x="970" y="300" class="t-keyval">PRESENT ★</text><text x="860" y="330" class="t-keylbl">Wash test:</text><text x="970" y="330" class="t-keyval">Does NOT wash</text><text x="880" y="350" class="t-keyval">(embedded particles)</text><text x="860" y="385" class="t-keylbl">Wound:</text><text x="940" y="385" class="t-keyval">Round, clear</text><text x="860" y="415" class="t-keylbl">Collars:</text><text x="945" y="415" class="t-keyval">All present</text><text x="860" y="455" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="#6B7283">★ NEET-PG 2022 Q4 — "pistol, near shot" image-based.</text><circle class="ic" cx="1200" cy="128" r="14"/><text class="t-info" x="1200" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="range-distant"><rect class="body-white" x="1230" y="110" width="310" height="380" rx="14"/><path d="M 1244,110 H 1526 A 14,14 0 0 1 1540,124 V 175 H 1230 V 124 A 14,14 0 0 1 1244,110 Z" fill="url(#gBlue)"/><text x="1240" y="155" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">4. DISTANT</text><text x="1240" y="210" class="t-keylbl">Distance:</text><text x="1340" y="210" class="t-keyval">&gt; 60 cm</text><text x="1240" y="240" class="t-keylbl">Burning:</text><text x="1330" y="240" class="t-keyval">ABSENT</text><text x="1240" y="270" class="t-keylbl">Blackening:</text><text x="1370" y="270" class="t-keyval">ABSENT</text><text x="1240" y="300" class="t-keylbl">Tattooing:</text><text x="1350" y="300" class="t-keyval">ABSENT</text><text x="1240" y="330" class="t-keylbl">Wound:</text><text x="1320" y="330" class="t-keyval">Round /</text><text x="1240" y="350" class="t-keyval">oval (clean punch)</text><text x="1240" y="380" class="t-keylbl">Collars:</text><text x="1320" y="380" class="t-keyval">Abrasion +</text><text x="1240" y="400" class="t-keyval">grease ONLY</text><text x="1240" y="430" class="t-keylbl">★ Cannot</text><text x="1240" y="450" class="t-keyval">estimate exact distance</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="range-summary"><rect x="60" y="520" width="1480" height="240" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="560" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">📊 Range Estimation — Quick Reference</text><text x="100" y="600" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>CONTACT:</strong> muzzle imprint (Werkgartner), Kronlein burst, cruciform wound, cherry-red CO in tract</text><text x="100" y="628" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>CLOSE (≤ 30 cm):</strong> burning + blackening + tattooing all present (NEET-PG 2019 Q6)</text><text x="100" y="656" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>NEAR (30-60 cm):</strong> TATTOOING ONLY (burning + blackening absent) — particles embedded, don\'t wash</text><text x="100" y="684" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>DISTANT (&gt; 60 cm):</strong> NO marks — only entry hole + abrasion/grease collar</text><text x="100" y="722" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="rgba(255,255,255,0.75)">Mnemonic: BBT decay — Burning (15cm) → Blackening (30cm) → Tattooing (60cm) → none</text><circle class="ic" cx="1510" cy="538" r="14"/><text class="t-info" x="1510" y="544" text-anchor="middle">ⓘ</text></g>

<g data-node-id="werkgartner"><rect x="60" y="790" width="1480" height="200" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="830" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">🔍 Contact-shot Special Signs</text><text x="100" y="868" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Werkgartner sign</strong> — imprint of muzzle (and sometimes foresight) on skin from hot gas recoil</text><text x="100" y="893" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Cherry-red discolouration</strong> — CO from explosion combines with Hb in wound tract</text><text x="100" y="918" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Kronlein shot</strong> — bursting head in contact-range shotgun / high-velocity to skull</text><text x="100" y="943" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Cruciform / stellate entry</strong> — gas trapped under skin tears it into cross/star pattern</text><text x="100" y="968" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Most suicidal shots are CONTACT</strong> — clothing partly removed, weapon in hand</text><circle class="ic" cx="1510" cy="808" r="14"/><text class="t-info" x="1510" y="814" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1010" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="1048" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 Contact (cruciform + Werkgartner) · Close ≤30 (blackening washes) · Near 30-60 (tattooing only) · Distant &gt;60 (collar only)</text>
</svg>`;

const SVG_FA07 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Shotgun Range — Pellet Spread Estimation</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Single hole · rat-hole · satellite pellets · wide scatter · range vs distance correlation</text>

<g data-node-id="shotgun-contact"><rect class="body-white" x="60" y="110" width="370" height="380" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,110 H 416 A 14,14 0 0 1 430,124 V 175 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gRed)"/><text x="80" y="155" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">1. CONTACT</text><text x="80" y="210" class="t-keylbl">Range:</text><text x="150" y="210" class="t-keyval">Muzzle on skin</text><text x="80" y="240" class="t-keylbl">Wound:</text><text x="155" y="240" class="t-keyval">Single LARGE ragged</text><text x="80" y="260" class="t-keyval">cruciform hole</text><text x="80" y="290" class="t-keylbl">Margins:</text><text x="170" y="290" class="t-keyval">Burnt, blackened</text><text x="80" y="320" class="t-keylbl">Wad:</text><text x="135" y="320" class="t-keyval">Inside wound</text><text x="80" y="350" class="t-keylbl">Bone:</text><text x="135" y="350" class="t-keyval">Wide destruction</text><text x="80" y="380" class="t-keylbl">Pellets:</text><text x="160" y="380" class="t-keyval">All enter together</text><text x="80" y="410" class="t-keylbl">Head:</text><text x="140" y="410" class="t-keyval">Kronlein burst possible</text><text x="80" y="450" class="t-keylbl">Suicide:</text><text x="170" y="450" class="t-keyval">Common — contact</text><text x="100" y="470" class="t-keyval">shotgun to head/chest</text><circle class="ic" cx="420" cy="128" r="14"/><text class="t-info" x="420" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="shotgun-close"><rect class="body-white" x="450" y="110" width="370" height="380" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 464,110 H 806 A 14,14 0 0 1 820,124 V 175 H 450 V 124 A 14,14 0 0 1 464,110 Z" fill="url(#gOrange)"/><text x="470" y="155" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">2. CLOSE (≤ 1 m)</text><text x="470" y="210" class="t-keylbl">Range:</text><text x="540" y="210" class="t-keyval">0 - 1 m</text><text x="470" y="240" class="t-keylbl">Wound:</text><text x="545" y="240" class="t-keyval">Single hole ~ bore</text><text x="470" y="260" class="t-keyval">size (no spread yet)</text><text x="470" y="290" class="t-keylbl">Burning:</text><text x="560" y="290" class="t-keyval">Present</text><text x="470" y="320" class="t-keylbl">Blackening:</text><text x="600" y="320" class="t-keyval">Present</text><text x="470" y="350" class="t-keylbl">Tattooing:</text><text x="580" y="350" class="t-keyval">Present</text><text x="470" y="380" class="t-keylbl">Wad:</text><text x="525" y="380" class="t-keyval">May be inside</text><text x="470" y="410" class="t-keylbl">Margins:</text><text x="570" y="410" class="t-keyval">Inverted, may be</text><text x="470" y="430" class="t-keyval">scalloped</text><circle class="ic" cx="810" cy="128" r="14"/><text class="t-info" x="810" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="shotgun-medium"><rect class="body-white" x="840" y="110" width="370" height="380" rx="14"/><path d="M 854,110 H 1196 A 14,14 0 0 1 1210,124 V 175 H 840 V 124 A 14,14 0 0 1 854,110 Z" fill="url(#gPurple)"/><text x="860" y="155" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">3. MEDIUM (1-3 m)</text><text x="860" y="210" class="t-keylbl">Range:</text><text x="930" y="210" class="t-keyval">1 - 3 m</text><text x="860" y="240" class="t-keylbl">Pattern:</text><text x="945" y="240" class="t-keyval">"RAT-HOLE" —</text><text x="860" y="260" class="t-keyval">central + satellite pellets</text><text x="860" y="290" class="t-keylbl">Wad:</text><text x="915" y="290" class="t-keyval">May still be inside</text><text x="860" y="320" class="t-keylbl">Burning:</text><text x="950" y="320" class="t-keyval">ABSENT</text><text x="860" y="350" class="t-keylbl">Blackening:</text><text x="990" y="350" class="t-keyval">ABSENT</text><text x="860" y="380" class="t-keylbl">Spread:</text><text x="945" y="380" class="t-keyval">2-5 cm satellite spread</text><text x="860" y="425" font-family="Inter,system-ui,sans-serif" font-size="13" font-style="italic" fill="#6B7283">★ Wad in wound = ≤ 3 m range</text><circle class="ic" cx="1200" cy="128" r="14"/><text class="t-info" x="1200" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="shotgun-distant"><rect class="body-white" x="1230" y="110" width="310" height="380" rx="14"/><path d="M 1244,110 H 1526 A 14,14 0 0 1 1540,124 V 175 H 1230 V 124 A 14,14 0 0 1 1244,110 Z" fill="url(#gBlue)"/><text x="1240" y="155" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">4. DISTANT (&gt; 3 m)</text><text x="1240" y="210" class="t-keylbl">Range:</text><text x="1310" y="210" class="t-keyval">3-8 m+</text><text x="1240" y="240" class="t-keylbl">Pattern:</text><text x="1325" y="240" class="t-keyval">Scattered</text><text x="1240" y="260" class="t-keyval">pellet holes ONLY</text><text x="1240" y="290" class="t-keylbl">Central hole:</text><text x="1380" y="290" class="t-keyval">ABSENT</text><text x="1240" y="320" class="t-keylbl">Burning/black/</text><text x="1240" y="340" class="t-keyval">tattoo:</text><text x="1305" y="340" class="t-keyval">All absent</text><text x="1240" y="370" class="t-keylbl">Wad:</text><text x="1300" y="370" class="t-keyval">Falls off</text><text x="1240" y="390" class="t-keyval">outside body</text><text x="1240" y="430" class="t-keylbl">Spread (in) ≈</text><text x="1240" y="450" class="t-keyval">range (yd) × 1 — cylinder bore</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="shotgun-rule"><rect x="60" y="520" width="1480" height="240" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="560" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white" text-anchor="middle">📐 Shotgun Range Estimation Rule</text><text x="100" y="608" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>Cylinder bore (no choke):</strong> spread of pellets (inches) ≈ range (yards) × 1</text><text x="100" y="636" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)">e.g., spread = 10 inches → range ≈ 10 yards</text><text x="100" y="676" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>Full choke:</strong> spread (inches) ≈ range (yards) × 0.75 (tighter pattern)</text><text x="100" y="710" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>Wad inside wound</strong> → range ≤ 3 m (wads fall off beyond 2-3 m)</text><text x="100" y="740" font-family="Inter,system-ui,sans-serif" font-size="14" fill="rgba(255,255,255,0.92)"><strong>Central hole + satellites</strong> → 1-3 m (rat-hole pattern)</text><circle class="ic" cx="1510" cy="538" r="14"/><text class="t-info" x="1510" y="544" text-anchor="middle">ⓘ</text></g>

<g data-node-id="shotgun-entry-exit"><rect x="60" y="790" width="1480" height="200" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="830" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">↔️ Shotgun Entry vs Exit</text><text x="100" y="868" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>EXIT in shotgun is RARE</strong> — pellets disperse in tissue, lose energy quickly. Most found embedded.</text><text x="100" y="893" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">If exit present: irregular, multiple small everted exits — NO collar, NO blackening</text><text x="100" y="918" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">Most pellets recovered at autopsy from soft tissue, viscera — preserve for ballistics</text><text x="100" y="943" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)">Slug (single shotgun projectile) behaves like a bullet — has entry collar + may exit</text><circle class="ic" cx="1510" cy="808" r="14"/><text class="t-info" x="1510" y="814" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1010" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="1048" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 Shotgun: Contact (cruciform + Kronlein) · Close (single hole) · Medium (rat-hole + wad ≤3m) · Distant (scatter only)</text>
</svg>`;

const SVG_FA08 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Gunshot Residue (GSR) — Tests &amp; Sample Collection</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Chemical &amp; instrumental tests · sample sites · identification of shooter</text>

<g data-node-id="gsr-definition"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">🧪 GUNSHOT RESIDUE (GSR)</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">= unburnt + partially burnt powder particles + primer particles (Pb, Sb, Ba) deposited on the hand of the shooter, on the victim, and around the entry wound. Detection identifies the shooter and the firing range.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gsr-dermal"><rect class="body-white" x="60" y="240" width="490" height="280" rx="14"/><path d="M 74,240 H 536 A 14,14 0 0 1 550,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gBlue)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">1. Dermal Nitrate (Paraffin) Test</text><text x="80" y="345" class="t-keylbl">Principle:</text><text x="180" y="345" class="t-keyval">Detects nitrates on shooter\'s hand</text><text x="80" y="375" class="t-keylbl">Method:</text><text x="170" y="375" class="t-keyval">Hot paraffin cast of hand →</text><text x="100" y="395" class="t-keyval">treated with diphenylamine in H₂SO₄</text><text x="80" y="425" class="t-keylbl">Positive:</text><text x="170" y="425" class="t-keyval">BLUE spots = nitrates</text><text x="80" y="455" class="t-keylbl">Status:</text><text x="155" y="455" class="t-keyval">LARGELY OBSOLETE</text><text x="80" y="485" class="t-keyval">(false +ve from urine, tobacco, fertiliser)</text><circle class="ic" cx="540" cy="258" r="14"/><text class="t-info" x="540" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gsr-aas"><rect class="body-white" x="570" y="240" width="490" height="280" rx="14"/><path d="M 584,240 H 1046 A 14,14 0 0 1 1060,254 V 305 H 570 V 254 A 14,14 0 0 1 584,240 Z" fill="url(#gGreen)"/><text x="590" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">2. AAS / Spectroscopy</text><text x="590" y="345" class="t-keylbl">Principle:</text><text x="690" y="345" class="t-keyval">Atomic absorption spectrometry</text><text x="610" y="365" class="t-keyval">detects Pb, Sb, Ba (primer metals)</text><text x="590" y="395" class="t-keylbl">Sample:</text><text x="670" y="395" class="t-keyval">Hand swabs (5% HNO₃)</text><text x="590" y="425" class="t-keylbl">Sensitive:</text><text x="690" y="425" class="t-keyval">Yes — quantitative</text><text x="590" y="455" class="t-keylbl">Status:</text><text x="660" y="455" class="t-keyval">Replaced by SEM-EDX</text><circle class="ic" cx="1050" cy="258" r="14"/><text class="t-info" x="1050" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gsr-sem"><rect class="body-white" x="1080" y="240" width="460" height="280" rx="14" stroke="#C58A3D" stroke-width="3"/><path d="M 1094,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 1080 V 254 A 14,14 0 0 1 1094,240 Z" fill="url(#gPurple)"/><text x="1090" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">3. SEM-EDX ★ Gold Standard</text><text x="1090" y="345" class="t-keylbl">Method:</text><text x="1170" y="345" class="t-keyval">Scanning electron</text><text x="1090" y="365" class="t-keyval">microscope + energy-dispersive X-ray</text><text x="1090" y="395" class="t-keylbl">Identifies:</text><text x="1190" y="395" class="t-keyval">Spheroidal primer</text><text x="1090" y="415" class="t-keyval">particles (Pb-Sb-Ba) — morphology + elements</text><text x="1090" y="445" class="t-keylbl">Specificity:</text><text x="1210" y="445" class="t-keyval">HIGH — false +ve rare</text><text x="1090" y="475" class="t-keylbl">★ Modern gold standard</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gsr-other"><rect class="body-white" x="60" y="550" width="730" height="240" rx="14"/><path d="M 74,550 H 776 A 14,14 0 0 1 790,564 V 615 H 60 V 564 A 14,14 0 0 1 74,550 Z" fill="url(#gOrange)"/><text x="80" y="595" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">🔬 Other GSR Tests</text><text x="80" y="650" class="t-keylbl">Walker test:</text><text x="220" y="650" class="t-keyval">Filter paper soaked in</text><text x="80" y="670" class="t-keyval">desensitised photographic paper → nitrite spots</text><text x="80" y="700" class="t-keylbl">Harrison-Gilroy:</text><text x="270" y="700" class="t-keyval">Pb, Sb on hand swabs</text><text x="80" y="730" class="t-keylbl">Modified Griess:</text><text x="260" y="730" class="t-keyval">Nitrite particles around</text><text x="80" y="750" class="t-keyval">entry wound — range estimation</text><circle class="ic" cx="770" cy="568" r="14"/><text class="t-info" x="770" y="574" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gsr-samples"><rect x="810" y="550" width="730" height="240" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="1175" y="590" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">📦 Sample Collection — Crime Scene</text><text x="830" y="630" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>Suspect</strong> — hand swabs (web, palm, dorsum), nail clippings, clothing</li></text><text x="830" y="655" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>Victim</strong> — entry wound area, clothing over entry, hair</text><text x="830" y="680" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>Wound tract</strong> — preserve tract tissue · recover bullet/pellets/wads</text><text x="830" y="705" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>Scene</strong> — cartridge cases (ejector/extractor marks), bullets in walls, blood spatter</text><text x="830" y="730" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>Time-frame</strong> — collect within 6 hours; GSR detectable up to 24 h</text><text x="830" y="755" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="rgba(255,255,255,0.75)">★ Hand washing removes GSR — collect ASAP and label suspect right vs left hand separately.</text><circle class="ic" cx="1530" cy="568" r="14"/><text class="t-info" x="1530" y="574" text-anchor="middle">ⓘ</text></g>

<g data-node-id="gsr-bullet-id"><rect x="60" y="820" width="1480" height="170" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="860" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">🔍 Bullet → Weapon Identification</text><text x="100" y="895" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>Comparison microscope</strong> — bullet striations from rifling lands/grooves are UNIQUE to each barrel</text><text x="100" y="918" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>Cartridge case</strong> — firing pin imprint, extractor &amp; ejector marks identify the weapon</text><text x="100" y="941" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>IBIS</strong> (Integrated Ballistic Identification System) — digital database for cross-case matching</text><text x="100" y="964" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>Cast bullet</strong> from victim → fired test bullets from suspect weapon → side-by-side striation match</text><circle class="ic" cx="1510" cy="838" r="14"/><text class="t-info" x="1510" y="844" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1010" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="1048" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 GSR tests — Dermal nitrate (obsolete) · AAS · SEM-EDX (gold std) · Walker / Griess for range · IBIS for weapon ID</text>
</svg>`;

const SVG_FA09 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Bomb Blast Injuries — 4 Mechanisms</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Primary · Secondary · Tertiary · Quaternary · pattern of damage by mechanism</text>

<g data-node-id="blast-overview"><rect class="nbcr" x="60" y="110" width="1480" height="100" rx="14"/><text x="90" y="148" font-family="Inter,system-ui,sans-serif" font-size="16" font-weight="800" fill="#8B6914">💣 BOMB BLAST INJURY</text><text x="90" y="180" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="500" fill="#5C4810">An explosive blast produces a high-pressure shock wave (overpressure) followed by hot gases, fragments, and physical displacement. Injuries are classified into <strong>4 mechanisms</strong> by what causes the damage.</text><circle class="ic" cx="1500" cy="130" r="14"/><text class="t-info" x="1500" y="136" text-anchor="middle">ⓘ</text></g>

<g data-node-id="blast-primary"><rect class="body-white" x="60" y="240" width="370" height="380" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 74,240 H 416 A 14,14 0 0 1 430,254 V 305 H 60 V 254 A 14,14 0 0 1 74,240 Z" fill="url(#gRed)"/><text x="80" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">1. PRIMARY ★</text><text x="80" y="340" class="t-keylbl">Cause:</text><text x="150" y="340" class="t-keyval">Pressure SHOCK WAVE</text><text x="80" y="360" class="t-keyval">(overpressure)</text><text x="80" y="395" class="t-keylbl">Targets:</text><text x="170" y="395" class="t-keyval">AIR-CONTAINING</text><text x="80" y="415" class="t-keyval">organs at air-tissue interface</text><text x="80" y="450" class="t-keylbl">Injuries:</text><text x="170" y="450" class="t-keyval">Tympanic membrane</text><text x="100" y="470" class="t-keyval">(most sensitive)</text><text x="100" y="490" class="t-keyval">Pulmonary contusion + blast lung</text><text x="100" y="510" class="t-keyval">Bowel rupture/haemorrhage</text><text x="100" y="530" class="t-keyval">Eye globe rupture</text><text x="80" y="565" class="t-keylbl">DD with no external</text><text x="100" y="585" class="t-keyval">injuries possible (★)</text><circle class="ic" cx="420" cy="258" r="14"/><text class="t-info" x="420" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="blast-secondary"><rect class="body-white" x="450" y="240" width="370" height="380" rx="14"/><path d="M 464,240 H 806 A 14,14 0 0 1 820,254 V 305 H 450 V 254 A 14,14 0 0 1 464,240 Z" fill="url(#gOrange)"/><text x="470" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">2. SECONDARY</text><text x="470" y="340" class="t-keylbl">Cause:</text><text x="540" y="340" class="t-keyval">FRAGMENTS &amp; shrapnel</text><text x="490" y="360" class="t-keyval">propelled by blast</text><text x="470" y="395" class="t-keylbl">Sources:</text><text x="570" y="395" class="t-keyval">Bomb casing,</text><text x="490" y="415" class="t-keyval">nails/bolts (IED), glass</text><text x="470" y="450" class="t-keylbl">Injuries:</text><text x="560" y="450" class="t-keyval">Penetrating wounds</text><text x="490" y="470" class="t-keyval">Lacerations, eye injury</text><text x="490" y="490" class="t-keyval">Stab-like wounds</text><text x="490" y="510" class="t-keyval">May reach any organ</text><text x="470" y="545" class="t-keylbl">MOST COMMON</text><text x="470" y="565" class="t-keyval">injury type in casualties</text><circle class="ic" cx="810" cy="258" r="14"/><text class="t-info" x="810" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="blast-tertiary"><rect class="body-white" x="840" y="240" width="370" height="380" rx="14"/><path d="M 854,240 H 1196 A 14,14 0 0 1 1210,254 V 305 H 840 V 254 A 14,14 0 0 1 854,240 Z" fill="url(#gPurple)"/><text x="860" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">3. TERTIARY</text><text x="860" y="340" class="t-keylbl">Cause:</text><text x="930" y="340" class="t-keyval">Body HURLED by</text><text x="880" y="360" class="t-keyval">blast wind / displacement</text><text x="860" y="395" class="t-keylbl">Mechanism:</text><text x="990" y="395" class="t-keyval">Acceleration-</text><text x="880" y="415" class="t-keyval">deceleration injuries on landing</text><text x="860" y="450" class="t-keylbl">Injuries:</text><text x="950" y="450" class="t-keyval">Fractures (incl. skull)</text><text x="880" y="470" class="t-keyval">Head injury — DAI</text><text x="880" y="490" class="t-keyval">Limb amputation</text><text x="880" y="510" class="t-keyval">Internal organ rupture</text><text x="880" y="530" class="t-keyval">Spinal cord injury</text><circle class="ic" cx="1200" cy="258" r="14"/><text class="t-info" x="1200" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="blast-quaternary"><rect class="body-white" x="1230" y="240" width="310" height="380" rx="14"/><path d="M 1244,240 H 1526 A 14,14 0 0 1 1540,254 V 305 H 1230 V 254 A 14,14 0 0 1 1244,240 Z" fill="url(#gGreen)"/><text x="1240" y="285" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white">4. QUATERNARY</text><text x="1240" y="340" class="t-keylbl">Cause:</text><text x="1310" y="340" class="t-keyval">All other</text><text x="1240" y="360" class="t-keyval">blast-related</text><text x="1240" y="395" class="t-keylbl">Examples:</text><text x="1240" y="415" class="t-keyval">• Burns (flash, fire)</text><text x="1240" y="435" class="t-keyval">• Inhalation injury</text><text x="1240" y="455" class="t-keyval">• Crush from rubble</text><text x="1240" y="475" class="t-keyval">• Chemical exposure</text><text x="1240" y="495" class="t-keyval">• Radiation (dirty bomb)</text><text x="1240" y="515" class="t-keyval">• PTSD / mental</text><text x="1240" y="535" class="t-keyval">• Crush syndrome</text><text x="1240" y="565" class="t-keylbl">Late complications</text><text x="1240" y="585" class="t-keyval">may dominate</text><circle class="ic" cx="1530" cy="258" r="14"/><text class="t-info" x="1530" y="264" text-anchor="middle">ⓘ</text></g>

<g data-node-id="blast-lung"><rect x="60" y="650" width="900" height="240" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="510" y="690" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">🫁 Blast Lung — Classic Primary Injury</text><text x="90" y="730" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Pathology:</strong> Shock wave at the alveoli-capillary interface (air-tissue) → alveolar rupture, capillary disruption</text><text x="90" y="758" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Macroscopic:</strong> "Bat-wing" pulmonary haemorrhage, sub-pleural petechiae, contusion patches</text><text x="90" y="786" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Clinical:</strong> Hypoxia, haemoptysis, tachypnoea · risk of pneumothorax, air embolism</text><text x="90" y="814" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Imaging:</strong> Bilateral diffuse pulmonary infiltrates (CXR), ARDS-like</text><text x="90" y="842" font-family="Inter,system-ui,sans-serif" font-size="13.5" fill="rgba(255,255,255,0.92)"><strong>Mortality:</strong> High — major cause of immediate &amp; delayed deaths in blast survivors</text><circle class="ic" cx="950" cy="668" r="14"/><text class="t-info" x="950" y="674" text-anchor="middle">ⓘ</text></g>

<g data-node-id="blast-autopsy"><rect x="980" y="650" width="560" height="240" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="1260" y="690" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">⚱️ Autopsy Findings — Chest &amp; Abdomen</text><text x="1000" y="725" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>Chest:</strong></text><text x="1000" y="745" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">• Blast lung (haemorrhage, oedema, petechiae)</text><text x="1000" y="765" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">• Pneumothorax / haemothorax</text><text x="1000" y="785" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">• Rib fractures, sternal #, mediastinal injuries</text><text x="1000" y="810" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>Abdomen:</strong></text><text x="1000" y="830" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">• Bowel rupture (terminal ileum / colon)</text><text x="1000" y="850" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">• Mesenteric haemorrhage</text><text x="1000" y="870" font-family="Inter,system-ui,sans-serif" font-size="12.5" fill="rgba(255,255,255,0.92)">• Solid organ contusions (liver, spleen, kidney)</text><circle class="ic" cx="1520" cy="668" r="14"/><text class="t-info" x="1520" y="674" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="910" width="1480" height="60" rx="10" fill="url(#gOrange)"/><text x="800" y="948" font-family="Inter,system-ui,sans-serif" font-size="14" font-weight="700" fill="white" text-anchor="middle">🎯 Blast injuries — Primary (pressure: blast lung, TM) · Secondary (fragments) · Tertiary (hurled body) · Quaternary (burns, crush)</text>

<rect x="60" y="990" width="1480" height="60" rx="10" fill="url(#gGrey)"/><text x="800" y="1028" font-family="Inter,system-ui,sans-serif" font-size="13" font-weight="700" fill="white" text-anchor="middle">⚠️ Most common injury = SECONDARY (fragments) · Most distinctive forensically = PRIMARY (blast lung, TM rupture)</text>
</svg>`;

const SVG_FA10 = `<svg viewBox="0 0 1600 1100" xmlns="http://www.w3.org/2000/svg" class="diagram-svg">
${STYLE}
<text class="t-title" x="800" y="50" text-anchor="middle">Suicidal vs Homicidal Firearm Death · Special Concepts</text>
<text class="t-sub" x="800" y="80" text-anchor="middle">Recognising self-inflicted vs assault firearm wounds · key signs · sample case-based summary</text>

<g data-node-id="suicidal-fa"><rect class="body-white" x="60" y="110" width="730" height="380" rx="14" stroke="#3D8B5B" stroke-width="3"/><path d="M 74,110 H 776 A 14,14 0 0 1 790,124 V 175 H 60 V 124 A 14,14 0 0 1 74,110 Z" fill="url(#gGreen)"/><text x="80" y="155" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🟢 SUICIDAL Firearm Injury</text><text x="80" y="220" class="t-keylbl">Range:</text><text x="150" y="220" class="t-keyval">CONTACT or very close (~ 95 %)</text><text x="80" y="250" class="t-keylbl">Site (favourable):</text><text x="270" y="250" class="t-keyval">Right temple (right-handed)</text><text x="100" y="270" class="t-keyval">Mouth (intra-oral, palatal)</text><text x="100" y="290" class="t-keyval">Precordium (chest)</text><text x="100" y="310" class="t-keyval">Forehead, behind ear</text><text x="80" y="345" class="t-keylbl">Weapon:</text><text x="180" y="345" class="t-keyval">In victim\'s hand (cadaveric spasm)</text><text x="80" y="375" class="t-keylbl">Clothing:</text><text x="180" y="375" class="t-keyval">Often partly removed over site</text><text x="80" y="405" class="t-keylbl">Number:</text><text x="170" y="405" class="t-keyval">Usually ONE wound (rarely 2)</text><text x="80" y="435" class="t-keylbl">Hesitation marks:</text><text x="280" y="435" class="t-keyval">Possible (test fires)</text><text x="80" y="465" class="t-keylbl">GSR on hand:</text><text x="240" y="465" class="t-keyval">PRESENT on firing hand</text><circle class="ic" cx="770" cy="128" r="14"/><text class="t-info" x="770" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="homicidal-fa"><rect class="body-white" x="810" y="110" width="730" height="380" rx="14" stroke="#A14B47" stroke-width="3"/><path d="M 824,110 H 1526 A 14,14 0 0 1 1540,124 V 175 H 810 V 124 A 14,14 0 0 1 824,110 Z" fill="url(#gRed)"/><text x="830" y="155" font-family="Inter,system-ui,sans-serif" font-size="20" font-weight="800" fill="white">🔴 HOMICIDAL Firearm Injury</text><text x="830" y="220" class="t-keylbl">Range:</text><text x="900" y="220" class="t-keyval">Variable — often distant</text><text x="830" y="250" class="t-keylbl">Site:</text><text x="880" y="250" class="t-keyval">Variable — back, chest, head, abdomen</text><text x="830" y="280" class="t-keylbl">Weapon:</text><text x="930" y="280" class="t-keyval">NOT at scene</text><text x="830" y="310" class="t-keylbl">Clothing:</text><text x="930" y="310" class="t-keyval">Intact / struggle marks</text><text x="830" y="340" class="t-keylbl">Number:</text><text x="920" y="340" class="t-keyval">Often MULTIPLE wounds</text><text x="830" y="370" class="t-keylbl">Defence wounds:</text><text x="1010" y="370" class="t-keyval">Present (resistance)</text><text x="830" y="400" class="t-keylbl">Hesitation marks:</text><text x="1030" y="400" class="t-keyval">ABSENT</text><text x="830" y="430" class="t-keylbl">GSR on hand:</text><text x="990" y="430" class="t-keyval">ABSENT (on victim hand)</text><text x="830" y="465" font-family="Inter,system-ui,sans-serif" font-size="12" font-style="italic" fill="#6B7283">★ Wounds on back, multiple, distant range → strong homicide</text><circle class="ic" cx="1530" cy="128" r="14"/><text class="t-info" x="1530" y="134" text-anchor="middle">ⓘ</text></g>

<g data-node-id="case-scenario"><rect x="60" y="520" width="1480" height="220" rx="14" fill="url(#gBlue)" filter="url(#cardShadow)"/><text x="800" y="560" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">📋 QBank Case Stem — Single Penetrating Chest Injury + Blackening</text><text x="100" y="595" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">"Man brought to casualty with a single circular penetrating injury to the LEFT side of chest, with BLACKENING around the skin."</text><text x="100" y="625" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>Likely weapon:</strong> RIFLED firearm (revolver / pistol) — single circular hole + blackening = close shot to precordium</text><text x="100" y="650" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>Distance:</strong> CLOSE range (≤ 30 cm) — blackening (smoke) limits → ~ 30 cm; if tattooing too → ≤ 60 cm</text><text x="100" y="675" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>Samples to preserve:</strong> Hand swabs (suspect &amp; victim), wound margin tissue, clothing, recovered bullet, blood, viscera</text><text x="100" y="700" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)"><strong>Tests:</strong> Modified Griess (range), SEM-EDX (GSR on hand), bullet → comparison microscope (weapon ID)</text><text x="100" y="725" font-family="Inter,system-ui,sans-serif" font-size="12.5" font-style="italic" fill="rgba(255,255,255,0.75)">★ This is the classic QBank SAQ stem — model answer in subjective bank.</text><circle class="ic" cx="1510" cy="538" r="14"/><text class="t-info" x="1510" y="544" text-anchor="middle">ⓘ</text></g>

<g data-node-id="fa-medicolegal"><rect x="60" y="760" width="1480" height="220" rx="14" fill="url(#gGrey)" filter="url(#cardShadow)"/><text x="800" y="800" font-family="Inter,system-ui,sans-serif" font-size="18" font-weight="800" fill="white" text-anchor="middle">⚖️ Medicolegal Importance</text><text x="100" y="835" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>Determine entry vs exit</strong> — guides bullet trajectory + position of shooter</text><text x="100" y="860" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>Range estimation</strong> — burning/blackening/tattooing → shooter\'s position</text><text x="100" y="885" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>Manner</strong> — suicide vs homicide vs accident</text><text x="100" y="910" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>Identify weapon</strong> — bullet striations · cartridge marks · IBIS</text><text x="100" y="935" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>Identify shooter</strong> — GSR on hand · SEM-EDX</text><text x="100" y="960" font-family="Inter,system-ui,sans-serif" font-size="13" fill="rgba(255,255,255,0.92)">• <strong>BNS sections</strong> — 117/118 (grievous + dangerous weapon) · 101/103 (murder) · Arms Act 1959</text><circle class="ic" cx="1510" cy="778" r="14"/><text class="t-info" x="1510" y="784" text-anchor="middle">ⓘ</text></g>

<rect x="60" y="1000" width="1480" height="50" rx="10" fill="url(#gOrange)"/><text x="800" y="1032" font-family="Inter,system-ui,sans-serif" font-size="13.5" font-weight="700" fill="white" text-anchor="middle">🎯 Suicide = contact + favourable site + weapon in hand + GSR on hand · Homicide = distant + multiple + defence wounds</text>
</svg>`;


const NODES = {
  'fa-definition': { label: 'Firearm — Definition', info: '<p>A <strong>firearm</strong> is a weapon that fires a projectile (bullet or shot) by the expansive force of gases produced by burning gunpowder (propellant).</p><p><strong>Two main classes by barrel:</strong></p><ul><li><strong>Rifled</strong> — spiral grooves (lands &amp; grooves) impart spin to a single bullet → stability + accuracy</li><li><strong>Smooth-bore</strong> — no grooves, fires multiple pellets (shot) or a single slug</li></ul><p><strong>Indian legal framework:</strong> Arms Act 1959 + Arms Rules 2016. Possession without licence is an offence.</p>', tags: ['Rifled vs Smooth-bore', 'Arms Act 1959'] },
  'fa-rifled': { label: 'Rifled Firearms', info: '<p><strong>Rifled firearms</strong> have spiral grooves cut into the inner barrel surface. The raised portions are <strong>"lands"</strong> and the cut portions are <strong>"grooves"</strong>. The bullet engages the lands → spins as it travels (gyroscopic stability).</p><ul><li><strong>Projectile:</strong> single BULLET</li><li><strong>Velocity:</strong> HIGH (300-900 m/s) → 3 classes (low &lt;350, medium 350-600, high &gt;600 m/s)</li><li><strong>Range:</strong> LONG · effective beyond 50 m</li><li><strong>Examples:</strong> Rifle, Revolver, Pistol, Carbine, Sten gun, Self-loading rifle</li><li><strong>Forensic ID:</strong> Striations on bullet from lands/grooves are UNIQUE per barrel — basis of comparison microscope match</li></ul>', tags: ['Single bullet', 'Spiral grooves'] },
  'fa-smoothbore': { label: 'Smooth-bore Firearms', info: '<p><strong>Smooth-bore firearms</strong> have an unrifled, smooth inner barrel. They fire either multiple pellets (shot) or a single solid slug.</p><ul><li><strong>Projectile:</strong> MULTIPLE pellets or single slug</li><li><strong>Velocity:</strong> LOWER (250-450 m/s)</li><li><strong>Range:</strong> SHORTER · effective ~25-40 m</li><li><strong>Examples:</strong> Shotgun (12-bore commonest), country-made "katta" / deshi tamancha</li><li><strong>Choke:</strong> Constriction at muzzle controls pellet spread (cylinder → improved cylinder → modified → full choke)</li><li><strong>Forensic ID:</strong> Pellet pattern + spread + cartridge case</li></ul>', tags: ['Pellets or slug', 'Shotgun'] },
  'fa-velocity': { label: 'Velocity Classification', info: '<p>Bullets are classified by muzzle velocity into 3 categories:</p><ul><li><strong>Low velocity (&lt; 350 m/s)</strong> — revolvers, pistols, .22 rifles</li><li><strong>Medium velocity (350-600 m/s)</strong> — sub-machine guns, sten</li><li><strong>High velocity (&gt; 600 m/s)</strong> — military rifles, hunting rifles</li></ul><p><strong>High-velocity wounds</strong> create a <strong>temporary cavity</strong> (hydraulic shock) much larger than the bullet path — distant fractures, organ rupture remote from track.</p>', tags: ['HV creates temp cavity'] },
  'fa-legal': { label: 'Legal Framework (India)', info: '<p><strong>Arms Act 1959 + Arms Rules 2016</strong> govern licensing in India.</p><ul><li><strong>Prohibited bore</strong> (military / police only): .303, 7.62 mm, 9 mm, .455, automatic weapons</li><li><strong>Non-prohibited bore</strong> (civilians with licence): .22, .315, .32, .380, 12-bore, single &amp; double-barrelled shotguns</li><li><strong>Country-made</strong> ("katta", deshi tamancha) — illegal &amp; commonly used in crimes</li><li><strong>BNS sections:</strong> BNS 118 — hurt by dangerous weapon · BNS 101/103 — murder if fatal · BNS 109 — attempt to murder</li><li><strong>Arms Act offences:</strong> illegal possession (sec 25), illegal manufacture (sec 27)</li></ul>', tags: ['Arms Act 1959'] },

  'cartridge-anatomy': { label: 'Rifled Cartridge Components', info: '<p>A rifled cartridge has <strong>4 main components</strong>:</p><ol><li><strong>Bullet</strong> — the projectile (lead core ± copper/brass jacket)</li><li><strong>Cartridge case</strong> — brass tube containing the other components; bears extractor/ejector marks unique to the firearm</li><li><strong>Propellant</strong> — gunpowder or nitrocellulose powder; burns rapidly producing gases</li><li><strong>Primer</strong> — percussion cap at base; struck by firing pin → ignites propellant (contains Pb, Sb, Ba — basis of GSR detection)</li></ol>', tags: ['4 parts', 'Primer = Pb/Sb/Ba'] },
  'bullet-normal': { label: 'Ordinary (FMJ) Bullet', info: '<p>An ordinary bullet has a lead core fully encased in a copper or brass jacket — Full Metal Jacket (FMJ).</p><ul><li><strong>Shape:</strong> Pointed nose</li><li><strong>Behaviour in tissue:</strong> Holds together — passes through, retaining its shape</li><li><strong>Wound:</strong> Clean entry; clean exit possible at longer ranges</li><li><strong>Use:</strong> Military, standard issue (Hague Convention compliant)</li></ul>', tags: ['FMJ', 'Holds together'] },
  'bullet-dumdum': { label: 'Dumdum Bullet ★', info: '<p><strong>Dumdum bullet</strong> = a jacketed bullet with the soft lead core EXPOSED at the tip (or hollow nose / X-cut) so that it <strong>mushrooms / expands</strong> on hitting tissue.</p><ul><li><strong>Effect:</strong> Maximum kinetic energy transfer · large permanent wound cavity · maximum tissue damage</li><li><strong>Status:</strong> BANNED for military use under Hague Declaration 1899; still used for hunting / self-defence in some jurisdictions</li><li><strong>Named after:</strong> Dumdum (Calcutta) — the British armoury where the original design was made</li></ul><p><strong>NEET-PG 2016 Q29:</strong> Maximum damage bullet → <strong>Dumdum</strong>.</p><p><strong>NEET-PG 2016 Q30:</strong> A bullet packed with jacket and opens at base → <strong>Dumdum</strong> (base-opening design variant).</p>', tags: ['Maximum damage', 'NEET-PG 2016 ×2'] },
  'bullet-tandem': { label: 'Tandem Bullet', info: '<p><strong>Tandem bullet</strong> = a bullet stuck in the barrel from a previous misfire is pushed out by the next shot, producing <strong>TWO bullets emerging in tandem</strong> (one behind the other).</p><p>Two entry wounds close together — must not be misinterpreted as multiple shots.</p>', tags: ['Two bullets', 'Misfire residue'] },
  'bullet-souvenir': { label: 'Souvenir Bullet', info: '<p><strong>Souvenir bullet</strong> = a bullet that <strong>REMAINS in the body</strong> after firing — does not exit.</p><p><strong>Causes:</strong> Low velocity at impact, resistance from bone, or long tract in soft tissue.</p><p><strong>Forensic use:</strong> Recovered at surgery or autopsy; preserved for ballistic ID via comparison microscope (striations match suspect weapon).</p>', tags: ['Retained bullet'] },
  'bullet-ricochet': { label: 'Ricochet Bullet', info: '<p><strong>Ricochet bullet</strong> = a bullet that strikes a hard surface (wall, ground, vehicle) and is <strong>deflected off course</strong>.</p><ul><li><strong>Tumbling motion:</strong> Loses gyroscopic stability after deflection → tumbles in flight</li><li><strong>Wound:</strong> Irregular, larger, often "key-hole" shape on entry</li><li><strong>Bullet:</strong> Shows flattening + scratch marks from deflecting surface</li></ul>', tags: ['Deflected', 'Key-hole entry'] },
  'bullet-tracer': { label: 'Special Bullets', info: '<p><strong>Tracer:</strong> Contains a chemical compound that burns visibly during flight — leaves luminous track (used for sighting at night).</p><p><strong>Incendiary:</strong> Designed to set the target on fire (white phosphorus etc.)</p><p><strong>Armour-piercing:</strong> Hardened tungsten/steel core for penetrating armour</p><p><strong>Wadcutter:</strong> Flat-nose, used for target practice — cuts a clean round hole in paper targets</p><p><strong>Duplex / Triplex:</strong> Multiple bullets in one cartridge.</p>', tags: ['Tracer · Incendiary · AP · Wadcutter'] },
  'bullet-comparison': { label: 'Maximum Damage Bullet Ranking', info: '<p>Ranking of bullets by tissue damage potential (most → least):</p><ol><li><strong>Dumdum</strong> — expanding/mushroom → maximum damage (NEET-PG 2016 Q29)</li><li><strong>Tandem</strong> — two bullets simultaneously</li><li><strong>Souvenir</strong> — retained bullet (full energy deposited in target)</li><li><strong>Ricochet</strong> — tumbling motion increases damage at close ricochet ranges</li><li><strong>Ordinary FMJ</strong> — passes through, less damage</li><li><strong>Wadcutter</strong> — variable (target use)</li></ol>', tags: ['NEET-PG 2016 ×2'] },

  'shotgun-cartridge': { label: 'Shotgun Cartridge — Components', info: '<p>A shotgun cartridge has the following components from base to muzzle end:</p><ol><li><strong>Brass base + primer</strong> — struck by firing pin to ignite propellant</li><li><strong>Propellant powder</strong> — burns to produce expansive gases</li><li><strong>Card / felt wads</strong> — separators between powder &amp; pellets; gas-seal</li><li><strong>Shot pellets</strong> (or single slug) — the projectiles</li><li><strong>Over-shot wad / crimp</strong> — closes the cartridge at the front</li></ol><p>12-bore is the most common civilian gauge in India.</p>', tags: ['5 components', '12-bore commonest'] },
  'shotgun-pellets': { label: 'Shotgun Pellets — Types &amp; Sizes', info: '<p><strong>Bird shot:</strong> Small lead spheres 1.3-4 mm — for fowl/game.</p><p><strong>Buck shot:</strong> Large lead spheres 6-9 mm — for deer / self-defence.</p><p><strong>Slug:</strong> Single solid heavy projectile (12-32 g) — short-range high-energy.</p><p><strong>Pellet count:</strong> A 12-bore #6 bird-shot cartridge contains ≈ 270 pellets.</p><p><strong>Material:</strong> Lead (traditional), steel (waterfowl), bismuth, tungsten alloys.</p>', tags: ['Bird shot · Buck shot · Slug'] },
  'shotgun-wads': { label: 'Shotgun Wads — Forensic Clue', info: '<p><strong>Wads</strong> separate the powder from the pellets and act as a gas-seal.</p><ul><li><strong>Material:</strong> Felt · card · plastic cup-shape</li><li><strong>★ Range value:</strong> If wad is found INSIDE the wound, range is ≤ 3 m (wads fall off beyond 2-3 m)</li><li><strong>Recovery:</strong> Always search the wound tract; wads identify cartridge manufacturer</li></ul>', tags: ['Wad in wound = ≤ 3 m'] },
  'shotgun-choke': { label: 'Choke (Muzzle Constriction)', info: '<p><strong>Choke</strong> = constriction at the muzzle end of a shotgun barrel that controls how tightly the pellets cluster at range.</p><p><strong>4 grades</strong> (loose → tight):</p><ul><li><strong>Cylinder (no choke):</strong> ~40% of pellets in 30" circle at 40 yards</li><li><strong>Improved cylinder:</strong> ~50%</li><li><strong>Modified:</strong> ~60%</li><li><strong>Full choke:</strong> ~70-75% — tightest pattern</li></ul><p>Choke determines the spread pattern, which is used to estimate firing range.</p>', tags: ['4 grades of constriction'] },
  'shotgun-spread': { label: 'Pellet Spread vs Range', info: '<p>Pattern of pellets on entry reveals range:</p><ul><li><strong>Contact / ≤ 1 m:</strong> Single circular hole — no spread</li><li><strong>1-2 m:</strong> Single hole + few satellite pellets</li><li><strong>2-4 m:</strong> "Rat-hole" — central hole + surrounding satellites</li><li><strong>4-8 m:</strong> Scattered pellet holes, no central hole</li></ul><p><strong>★ Rule of thumb (cylinder bore):</strong> spread of pellets (inches) ≈ range (yards) × 1.</p>', tags: ['Rat-hole at 2-4 m', 'Rule of thumb'] },

  'entry-definition': { label: 'Rifled Entry Wound — Overview', info: '<p>A rifled entry wound is typically <strong>round or oval</strong> (oblique → oval), <strong>slightly SMALLER than bullet diameter</strong> (skin retracts after passage), with <strong>INVERTED</strong> margins.</p><p>5 zones surround it — abrasion collar, grease collar, burning, blackening, tattooing — each with range significance.</p>', tags: ['Smaller than bullet', 'Inverted margins'] },
  'entry-hole': { label: 'Central Hole', info: '<p>The central skin defect of an entry wound:</p><ul><li><strong>Shape:</strong> Round (perpendicular shot) or oval (oblique shot)</li><li><strong>Size:</strong> Slightly SMALLER than bullet diameter (skin retracts)</li><li><strong>Margins:</strong> INVERTED (pushed inward by bullet)</li><li><strong>Edges:</strong> Smooth, "punched-out" look</li></ul>', tags: ['Smaller than bullet', 'Inverted'] },
  'entry-abrasion': { label: 'Abrasion (Dirt) Collar ★', info: '<p><strong>Abrasion collar</strong> (= dirt collar = contusion collar) is a 1-3 mm reddish-brown ring around the entry hole.</p><ul><li><strong>Cause:</strong> Skin scraped by the spinning bullet on entry (friction abrasion)</li><li><strong>★ Confirms ENTRY (NOT exit)</strong> — the single most reliable feature distinguishing entry from exit</li><li><strong>Persistence:</strong> Present at all ranges including distant shot</li></ul>', tags: ['★ Definitive entry marker'] },
  'entry-grease': { label: 'Grease (Lubricant) Collar', info: '<p>The <strong>grease collar</strong> is a ring of grease or lubricant wiped off the bullet onto the skin as it enters.</p><ul><li><strong>Source:</strong> Lubricant from the barrel</li><li><strong>Detection:</strong> UV light or chemical tests</li><li><strong>Most prominent:</strong> First shot from a clean / oiled gun</li></ul>', tags: ['Lubricant transfer'] },
  'entry-burning': { label: 'Burning (Singeing)', info: '<p><strong>Burning</strong> = scorched / singed skin and hair around the entry wound.</p><ul><li><strong>Cause:</strong> Hot gases / flame from the muzzle</li><li><strong>Range:</strong> CONTACT or very close (≤ 15 cm) — flame doesn\'t reach skin beyond that</li><li><strong>Disappears</strong> beyond close range</li></ul>', tags: ['≤ 15 cm', 'Hot gas flame'] },
  'entry-blackening': { label: 'Blackening (Smoke / Soot)', info: '<p><strong>Blackening</strong> = black soot deposit on the skin around the entry hole.</p><ul><li><strong>Cause:</strong> Smoke / unburnt powder from the explosion</li><li><strong>Range:</strong> Close shot (≤ 30 cm)</li><li><strong>★ Wash test:</strong> WASHES OFF (it\'s a surface deposit)</li></ul><p>Distinguishes from tattooing — which does NOT wash off.</p>', tags: ['≤ 30 cm', 'Washes off'] },
  'entry-tattooing': { label: 'Tattooing (Stippling) ★', info: '<p><strong>Tattooing</strong> (= stippling) = unburnt and partly burnt powder particles EMBEDDED in the skin around the entry wound.</p><ul><li><strong>Cause:</strong> Burning powder grains driven into skin by muzzle blast</li><li><strong>Range:</strong> Near shot (~15-60 cm)</li><li><strong>★ Wash test:</strong> CANNOT be washed off (particles embedded sub-epidermally)</li></ul><p><strong>This is the key DD vs blackening</strong> — tattooing persists beyond close range and identifies near-shot.</p>', tags: ['15-60 cm', 'Does NOT wash'] },
  'entry-pyq': { label: 'NEET-PG 2019 PYQ', info: '<p><strong>NEET-PG 2019 Q6:</strong> "Alleged history of gun shot injury — burning, blackening, tattooing around the wound + dirt collar — the injury is:"</p><p><strong>Answer: Close shot entry wound.</strong></p><p>All 5 features (entry hole + dirt/abrasion collar + burning + blackening + tattooing) present together → entry at CLOSE range. Exit wounds have NO collar, no burning/blackening/tattooing — these features confirm ENTRY.</p>', tags: ['NEET-PG 2019 verbatim'] },

  'exit-features': { label: 'Exit Wound — Overview', info: '<p>An exit wound is where the bullet leaves the body. Bullet typically tumbles or yaws after passing through tissue → exit is usually <strong>LARGER and IRREGULAR</strong>.</p><ul><li><strong>NO collars</strong> (no abrasion, no grease)</li><li><strong>NO burning, blackening, tattooing</strong></li><li><strong>Margins everted</strong> (pushed outward)</li><li><strong>Bleeding more profuse</strong> externally</li></ul>', tags: ['Larger · everted · no collar'] },
  'entry-summary': { label: 'Entry — Side-by-side Summary', info: '<p><strong>Entry wound features (all together):</strong></p><ul><li>Shape: round/oval</li><li>Size: SMALLER than bullet</li><li>Margins: INVERTED inward</li><li>Abrasion collar: PRESENT (★ definitive)</li><li>Grease collar: present</li><li>Burning/blackening: at close ranges</li><li>Tattooing: at near range</li><li>Bleeding: less profuse externally</li><li>Bone bevel (skull): INWARD bevelling</li></ul>', tags: ['Abrasion collar = definitive entry'] },
  'exit-summary': { label: 'Exit — Side-by-side Summary', info: '<p><strong>Exit wound features (all together):</strong></p><ul><li>Shape: IRREGULAR, stellate, slit</li><li>Size: LARGER than entry</li><li>Margins: EVERTED outward</li><li>Abrasion collar: ABSENT (★)</li><li>Grease collar: absent</li><li>Burning/blackening: absent</li><li>Tattooing: absent</li><li>Bleeding: more profuse externally</li><li>Bone bevel (skull): OUTWARD bevelling</li></ul>', tags: ['No collar', 'Outward bevel'] },
  'skull-bevel': { label: 'Bone Bevelling (★ Skull)', info: '<p>When a bullet passes through the skull, it produces a <strong>characteristic cone-shaped fracture</strong> that widens in the direction of travel.</p><ul><li><strong>Entry:</strong> INNER table beveled wider — cone opens INTO skull</li><li><strong>Exit:</strong> OUTER table beveled wider — cone opens OUT of skull</li></ul><p><strong>★ Rule:</strong> Bevelling widens in the direction of bullet TRAVEL — most reliable autopsy sign of bullet direction.</p>', tags: ['Cone widens in direction of travel'] },
  'kronlein': { label: 'Kronlein Shot (Bursting Head)', info: '<p><strong>Kronlein shot</strong> = a high-velocity bullet (rifle or shotgun) fired at close / contact range to the head causes the <strong>skull to EXPLODE / BURST</strong>, with the brain matter ejected and scalp split or blown off.</p><p><strong>Mechanism:</strong> Hot gases + bullet enter the cranium → expand explosively in confined space → hydraulic burst of the skull.</p><p><strong>Classic:</strong> contact-range suicidal shotgun to head; high-velocity rifle wounds.</p><p>★ Asked in QBank LAQ.</p>', tags: ['Bursting head', 'Contact shotgun/rifle'] },

  'range-contact': { label: 'Contact Range', info: '<p>The muzzle is in contact with the skin at the moment of firing.</p><ul><li><strong>Wound:</strong> Large, ragged, cruciform (gas tears skin)</li><li><strong>Margins:</strong> Burnt, blackened</li><li><strong>Cherry-red:</strong> CO from explosion + heat in wound tract</li><li><strong>Werkgartner sign:</strong> Muzzle imprint on skin from hot gas recoil</li><li><strong>Skull:</strong> Kronlein bursting in head shots</li><li><strong>Burning, blackening, tattooing:</strong> All present</li><li><strong>Most suicidal shots are contact range</strong></li></ul>', tags: ['Cruciform · Werkgartner · Kronlein'] },
  'range-close': { label: 'Close Range (≤ 30 cm)', info: '<p>0 - 30 cm (~1 ft) from muzzle to skin.</p><ul><li><strong>Wound:</strong> Round, ~ bullet size</li><li><strong>Burning:</strong> Present (≤ 15 cm)</li><li><strong>Blackening:</strong> PROMINENT (≤ 30 cm)</li><li><strong>Tattooing:</strong> Marked</li><li><strong>★ Wash test:</strong> Blackening washes off (smoke deposit on surface)</li><li><strong>All collars present</strong></li></ul><p>This is the range described in NEET-PG 2019 Q6.</p>', tags: ['NEET-PG 2019 Q6', 'Blackening washes'] },
  'range-near': { label: 'Near Range (30-60 cm)', info: '<p>30 - 60 cm (1-2 ft) from muzzle to skin.</p><ul><li><strong>Burning:</strong> ABSENT</li><li><strong>Blackening:</strong> ABSENT (smoke dissipates beyond 30 cm)</li><li><strong>Tattooing:</strong> PRESENT ★ (powder particles still reach skin)</li><li><strong>★ Wash test:</strong> Does NOT wash (embedded particles)</li><li><strong>Wound:</strong> Round, clear</li><li><strong>Collars:</strong> All present</li></ul><p>★ NEET-PG 2022 Q4 — image of "pistol, near shot".</p>', tags: ['NEET-PG 2022 Q4', 'Tattooing only'] },
  'range-distant': { label: 'Distant Range (&gt; 60 cm)', info: '<p>Greater than 60 cm — beyond the reach of muzzle effects.</p><ul><li><strong>Burning:</strong> ABSENT</li><li><strong>Blackening:</strong> ABSENT</li><li><strong>Tattooing:</strong> ABSENT</li><li><strong>Wound:</strong> Round / oval clean punch</li><li><strong>Collars:</strong> Abrasion + grease ONLY</li><li><strong>★ Cannot estimate exact distance</strong> from wound — could be 1 m or 100 m</li></ul>', tags: ['Only collar — exact range unknown'] },
  'range-summary': { label: 'Range Estimation Quick Reference', info: '<p><strong>Mnemonic — "BBT decay":</strong> Burning (≤15 cm) → Blackening (≤30 cm) → Tattooing (≤60 cm) → none beyond.</p><ul><li><strong>Contact:</strong> Muzzle imprint, Kronlein burst, cruciform wound, cherry-red CO</li><li><strong>Close (≤ 30 cm):</strong> Burning + blackening + tattooing all present (NEET-PG 2019 Q6)</li><li><strong>Near (30-60 cm):</strong> Tattooing only (NEET-PG 2022 Q4)</li><li><strong>Distant (&gt; 60 cm):</strong> No marks, only entry hole + abrasion/grease collar</li></ul>', tags: ['BBT decay mnemonic'] },
  'werkgartner': { label: 'Contact-shot Special Signs', info: '<p><strong>Werkgartner sign:</strong> Imprint of the muzzle (and sometimes foresight) on the skin from hot gas recoil — pathognomonic of contact shot.</p><p><strong>Cherry-red discolouration:</strong> CO from explosion combines with Hb in wound tract.</p><p><strong>Kronlein shot:</strong> Bursting head in contact-range shotgun / high-velocity rifle to skull.</p><p><strong>Cruciform / stellate entry:</strong> Gas trapped under skin tears it into a cross/star pattern.</p><p><strong>Most suicidal shots are CONTACT</strong> — clothing partly removed, weapon in hand.</p>', tags: ['Werkgartner · cherry-red · Kronlein'] },

  'shotgun-contact': { label: 'Shotgun — Contact Range', info: '<p>Muzzle on skin.</p><ul><li><strong>Wound:</strong> Single LARGE ragged cruciform hole (all pellets enter together as a mass)</li><li><strong>Margins:</strong> Burnt, blackened</li><li><strong>Wad:</strong> Inside wound</li><li><strong>Bone:</strong> Wide destruction</li><li><strong>Head:</strong> Kronlein burst possible</li><li><strong>Common scenario:</strong> Suicide — contact shotgun to head/chest</li></ul>', tags: ['Single mass entry'] },
  'shotgun-close': { label: 'Shotgun — Close Range (≤ 1 m)', info: '<p>0 - 1 m from muzzle.</p><ul><li><strong>Wound:</strong> Single hole ~ bore size (pellets still travelling as a mass)</li><li><strong>Burning, blackening, tattooing:</strong> All present</li><li><strong>Wad:</strong> May be inside wound</li><li><strong>Margins:</strong> Inverted, may be scalloped</li></ul>', tags: ['Single hole + BBT'] },
  'shotgun-medium': { label: 'Shotgun — Medium Range (1-3 m)', info: '<p>1 - 3 m from muzzle.</p><ul><li><strong>Pattern:</strong> "RAT-HOLE" — central hole + surrounding satellite pellets</li><li><strong>Wad:</strong> May still be inside wound</li><li><strong>Burning, blackening:</strong> ABSENT</li><li><strong>Spread:</strong> 2-5 cm satellite spread</li></ul><p>★ Wad found in wound = range ≤ 3 m.</p>', tags: ['Rat-hole pattern'] },
  'shotgun-distant': { label: 'Shotgun — Distant Range (&gt; 3 m)', info: '<p>3-8 m and beyond.</p><ul><li><strong>Pattern:</strong> Scattered individual pellet holes ONLY</li><li><strong>Central hole:</strong> Absent (pellets fully dispersed)</li><li><strong>Burning, blackening, tattooing:</strong> All absent</li><li><strong>Wad:</strong> Falls off outside body</li><li><strong>Estimation:</strong> Spread (inches) ≈ range (yards) × 1 (cylinder bore)</li></ul>', tags: ['Scatter only', 'No central hole'] },
  'shotgun-rule': { label: 'Shotgun Range Rule', info: '<p><strong>Cylinder bore (no choke):</strong> spread of pellets (inches) ≈ range (yards) × 1.</p><p><strong>Full choke:</strong> spread (inches) ≈ range (yards) × 0.75 (tighter pattern).</p><p><strong>Wad inside wound:</strong> range ≤ 3 m.</p><p><strong>Central hole + satellites:</strong> 1-3 m (rat-hole).</p>', tags: ['Range estimation rule'] },
  'shotgun-entry-exit': { label: 'Shotgun Entry vs Exit', info: '<p><strong>EXIT in shotgun is RARE</strong> — pellets disperse in tissue, lose energy quickly. Most are found embedded at autopsy.</p><p>If exit is present: <strong>irregular, multiple small everted</strong> exits — NO collar, NO blackening.</p><p>Most pellets recovered from soft tissue / viscera — preserve for ballistics.</p><p><strong>Slug</strong> (single shotgun projectile) behaves like a bullet — has entry collar &amp; may exit.</p>', tags: ['Exit usually absent'] },

  'gsr-definition': { label: 'Gunshot Residue (GSR)', info: '<p><strong>GSR</strong> = combination of unburnt + partially burnt propellant particles + primer metals (Pb, Sb, Ba) deposited on the shooter\'s hand, on the victim, and around the entry wound.</p><p>Detection of GSR helps identify (1) the shooter, (2) the firing range, and (3) the weapon type.</p>', tags: ['Pb · Sb · Ba (primer metals)'] },
  'gsr-dermal': { label: 'Dermal Nitrate (Paraffin) Test', info: '<p>The classical "paraffin test" — largely OBSOLETE today.</p><p><strong>Method:</strong> Hot paraffin cast of suspect\'s hand → treated with diphenylamine in concentrated H₂SO₄ → BLUE spots indicate nitrates.</p><p><strong>Problem:</strong> Many false positives — urine, tobacco, fertiliser, gunpowder residue from other sources. Replaced by more specific tests.</p>', tags: ['Obsolete', 'False +ve common'] },
  'gsr-aas': { label: 'AAS / Atomic Absorption', info: '<p><strong>Atomic Absorption Spectrometry</strong> (AAS) detects Pb, Sb, Ba from primer particles on hand swabs.</p><ul><li><strong>Sample:</strong> Hand swabs (5% HNO₃)</li><li><strong>Sensitivity:</strong> Quantitative; sensitive</li><li><strong>Status:</strong> Replaced by SEM-EDX for forensic use</li></ul>', tags: ['Quantitative'] },
  'gsr-sem': { label: 'SEM-EDX ★ Gold Standard', info: '<p><strong>Scanning Electron Microscope with Energy-Dispersive X-ray (SEM-EDX)</strong> = modern gold standard for GSR analysis.</p><ul><li><strong>Identifies:</strong> Spheroidal primer particles (Pb-Sb-Ba) — both MORPHOLOGY and elemental composition</li><li><strong>Specificity:</strong> Very high; false positives rare (the combination of all 3 metals in spheroidal particles is essentially diagnostic)</li><li><strong>Sample:</strong> Adhesive carbon stubs pressed on hand</li></ul>', tags: ['Gold standard', 'Morphology + composition'] },
  'gsr-other': { label: 'Other GSR Tests', info: '<p><strong>Walker test:</strong> Filter paper soaked in desensitised photographic paper → press on wound area → nitrite spots appear (range estimation).</p><p><strong>Harrison-Gilroy test:</strong> Detects Pb, Sb on hand swabs.</p><p><strong>Modified Griess test:</strong> Detects nitrite particles around the entry wound → quantifies range based on density of particles.</p>', tags: ['Walker · Harrison-Gilroy · Griess'] },
  'gsr-samples': { label: 'GSR Sample Collection', info: '<p>Samples to collect at the crime scene / autopsy:</p><ul><li><strong>Suspect:</strong> Hand swabs (web, palm, dorsum — label R/L separately), nail clippings, clothing</li><li><strong>Victim:</strong> Entry wound area, clothing over entry site, hair</li><li><strong>Wound tract:</strong> Preserve tissue, recover bullet/pellets/wads</li><li><strong>Scene:</strong> Cartridge cases (ejector/extractor marks), bullets in walls, blood spatter</li></ul><p><strong>Time-frame:</strong> Collect within 6 hours; GSR remains detectable up to 24 h. Hand washing removes GSR — speed is critical.</p>', tags: ['Within 6 hours', 'Label R vs L hand'] },
  'gsr-bullet-id': { label: 'Bullet → Weapon Identification', info: '<p><strong>Comparison microscope:</strong> Bullet striations from rifling lands/grooves are unique per barrel → side-by-side match with test-fired bullets from suspect weapon.</p><p><strong>Cartridge case:</strong> Firing pin imprint, extractor &amp; ejector marks identify the weapon.</p><p><strong>IBIS</strong> (Integrated Ballistic Identification System) — digital database for cross-case matching at national level.</p>', tags: ['Comparison microscope', 'IBIS database'] },

  'blast-overview': { label: 'Bomb Blast Injuries — Overview', info: '<p>An explosive blast produces a <strong>high-pressure shock wave</strong> (overpressure) followed by hot gases, fragments, and physical displacement. Injuries are classified into <strong>4 mechanisms</strong> by what causes the damage.</p>', tags: ['4 mechanisms'] },
  'blast-primary': { label: 'Primary Blast Injury ★', info: '<p><strong>Cause:</strong> The pressure SHOCK WAVE (overpressure) of the explosion.</p><p><strong>Targets:</strong> Air-tissue interfaces — air-containing organs are vulnerable.</p><ul><li><strong>Tympanic membrane</strong> — most sensitive; ruptures at very low overpressure (5 psi)</li><li><strong>Lung — "blast lung"</strong> — pulmonary contusion, haemorrhage, oedema; major mortality</li><li><strong>Bowel — rupture, mesenteric haemorrhage</strong></li><li><strong>Eye — globe rupture</strong></li></ul><p><strong>★ DD with no external injuries possible</strong> — internal damage without visible wounds. Always check tympanic membranes.</p>', tags: ['Shock wave', 'Blast lung', 'TM rupture'] },
  'blast-secondary': { label: 'Secondary Blast Injury (MOST COMMON)', info: '<p><strong>Cause:</strong> FRAGMENTS and shrapnel propelled by the blast.</p><p><strong>Sources:</strong> Bomb casing, deliberately added nails / bolts / ball bearings (IED), broken glass, masonry.</p><p><strong>Injuries:</strong> Penetrating wounds, lacerations, stab-like wounds, eye injury. Can reach any organ.</p><p><strong>★ Most common type of blast injury seen in casualties — bulk of survivors\'  injuries.</strong></p>', tags: ['Fragments', 'Most common'] },
  'blast-tertiary': { label: 'Tertiary Blast Injury', info: '<p><strong>Cause:</strong> The body is HURLED by the blast wind / displacement.</p><p><strong>Mechanism:</strong> Acceleration-deceleration injuries on landing against ground or objects.</p><p><strong>Injuries:</strong> Fractures (incl. skull), head injury (DAI — diffuse axonal injury), limb amputation, internal organ rupture, spinal cord injury.</p>', tags: ['Hurled by blast wind'] },
  'blast-quaternary': { label: 'Quaternary Blast Injury', info: '<p><strong>Cause:</strong> All other blast-related injuries not covered by primary, secondary, tertiary.</p><ul><li>Burns (flash, fire)</li><li>Inhalation injury (toxic fumes)</li><li>Crush from rubble / building collapse</li><li>Chemical exposure</li><li>Radiation (dirty bomb)</li><li>PTSD / mental sequelae</li><li>Crush syndrome (rhabdomyolysis)</li></ul><p>Late complications may dominate the clinical course.</p>', tags: ['Burns · crush · inhalation · PTSD'] },
  'blast-lung': { label: 'Blast Lung — Classic Primary Injury', info: '<p><strong>Pathology:</strong> Shock wave at the alveoli-capillary interface (air-tissue) → alveolar rupture, capillary disruption.</p><p><strong>Macroscopic findings:</strong> "Bat-wing" pulmonary haemorrhage, sub-pleural petechiae, contusion patches.</p><p><strong>Clinical:</strong> Hypoxia, haemoptysis, tachypnoea, risk of pneumothorax + air embolism.</p><p><strong>Imaging:</strong> Bilateral diffuse pulmonary infiltrates on CXR; ARDS-like picture.</p><p><strong>Mortality:</strong> High — major cause of immediate &amp; delayed deaths in blast survivors.</p>', tags: ['Bat-wing haemorrhage', 'High mortality'] },
  'blast-autopsy': { label: 'Blast Autopsy — Chest &amp; Abdomen', info: '<p><strong>Chest findings:</strong></p><ul><li>Blast lung (haemorrhage, oedema, sub-pleural petechiae)</li><li>Pneumothorax / haemothorax</li><li>Rib fractures, sternal #, mediastinal injuries</li><li>Air embolism in pulmonary veins</li></ul><p><strong>Abdomen findings:</strong></p><ul><li>Bowel rupture (terminal ileum / colon — most vulnerable)</li><li>Mesenteric haemorrhage</li><li>Solid organ contusions (liver, spleen, kidney)</li><li>Retroperitoneal haematoma</li></ul>', tags: ['Bowel rupture', 'Blast lung'] },

  'suicidal-fa': { label: 'Suicidal Firearm Injury', info: '<p>Features suggesting SUICIDAL firearm wound:</p><ul><li><strong>Range:</strong> CONTACT or very close (~95% of suicides)</li><li><strong>Site (favourable):</strong> Right temple (right-handed) · mouth (intra-oral, palatal) · precordium (chest) · forehead</li><li><strong>Weapon in victim\'s hand</strong> — sometimes held by cadaveric spasm</li><li><strong>Clothing</strong> often partly removed over site</li><li><strong>Single wound</strong> usually (rarely 2)</li><li><strong>Hesitation marks</strong> possible (test fires)</li><li><strong>GSR on firing hand</strong> — confirms self-firing</li></ul>', tags: ['Contact + favourable site'] },
  'homicidal-fa': { label: 'Homicidal Firearm Injury', info: '<p>Features suggesting HOMICIDAL firearm wound:</p><ul><li><strong>Range variable</strong> — often distant</li><li><strong>Site variable</strong> — back, chest, head, abdomen</li><li><strong>Weapon NOT at scene</strong></li><li><strong>Clothing intact</strong> or shows struggle marks</li><li><strong>Often MULTIPLE wounds</strong></li><li><strong>Defence wounds</strong> present (resistance)</li><li><strong>Hesitation marks absent</strong></li><li><strong>GSR absent</strong> on victim\'s hands</li></ul><p>★ Wounds on the BACK, multiple wounds, distant range = strong homicide indicators.</p>', tags: ['Distant + multiple + back'] },
  'case-scenario': { label: 'QBank Case — Chest Wound with Blackening', info: '<p><strong>Stem:</strong> "Man brought to casualty with single circular penetrating injury to the left side of chest, with blackening around the skin."</p><p><strong>Analysis:</strong></p><ul><li><strong>Weapon:</strong> RIFLED firearm (revolver / pistol) — single circular hole + blackening pattern</li><li><strong>Distance:</strong> CLOSE range (≤ 30 cm) — blackening limits range; if tattooing also present → ≤ 60 cm</li><li><strong>Samples to preserve:</strong> Hand swabs (suspect &amp; victim), wound margin tissue, clothing, recovered bullet, blood, viscera</li><li><strong>Tests:</strong> Modified Griess (range), SEM-EDX (GSR on hand), bullet via comparison microscope (weapon ID)</li></ul>', tags: ['QBank case stem'] },
  'fa-medicolegal': { label: 'Firearm — Medicolegal Importance', info: '<p>The autopsy / examination of a firearm victim aims to establish:</p><ul><li><strong>Entry vs exit</strong> — guides bullet trajectory and shooter position</li><li><strong>Range estimation</strong> — burning/blackening/tattooing → shooter\'s distance</li><li><strong>Manner of death</strong> — suicide vs homicide vs accident</li><li><strong>Weapon ID</strong> — bullet striations · cartridge marks · IBIS database</li><li><strong>Shooter ID</strong> — GSR on hand (SEM-EDX)</li></ul><p><strong>BNS sections:</strong> 117/118 (grievous + dangerous weapon), 101/103 (murder), 109 (attempt to murder), Arms Act 1959.</p>', tags: ['BNS + Arms Act'] }
};

function nodeList(ids) { return ids.map(id => ({ nodeId: id, ...NODES[id] })); }

const MCQS = {
  'FA-01': [
    { stem: 'Which of the following is NOT a rifled firearm?', options: ['Revolver','Pistol','Shotgun','Rifle'], answerIdx: 2, explain: 'Shotgun is smooth-bore (no rifling, fires pellets). Revolver, pistol, rifle are all rifled (single bullet, spiral grooves).', tag: '[PG-Inspired]' },
    { stem: 'The lands and grooves in a rifled barrel serve to:', options: ['Cool the barrel','Impart spin to the bullet for gyroscopic stability','Reduce noise','Increase muzzle velocity'], answerIdx: 1, explain: 'Lands &amp; grooves engage the bullet → impart spin → gyroscopic stability → accuracy. They leave unique striations on the bullet → forensic ID.', tag: '[PG-Inspired]' },
    { stem: 'High-velocity firearms are defined as those firing projectiles at:', options: ['&lt; 100 m/s','100-200 m/s','350-600 m/s','&gt; 600 m/s'], answerIdx: 3, explain: 'High velocity = &gt;600 m/s (military rifles). Medium 350-600 m/s. Low &lt;350 m/s (revolvers, pistols). HV produces temporary cavity + hydraulic shock.', tag: '[UNIV]' }
  ],
  'FA-02': [
    { stem: 'Which bullet causes MAXIMUM tissue damage?', options: ['Tandem','Dumdum','Souvenir','Piggy'], answerIdx: 1, explain: 'Dumdum bullet expands/mushrooms in tissue → transfers maximum kinetic energy → maximum damage. NEET-PG 2016 Q29 verbatim. Banned for military by Hague Declaration 1899.', tag: '[NEET-PG 2016]' },
    { stem: 'A bullet packed with jacket and that opens at the base is called:', options: ['Dum dum bullet','Tandem bullet','Duplex bullet','Souvenir bullet'], answerIdx: 0, explain: 'Dumdum bullet has the jacket designed such that the lead core is exposed (at tip OR at base in some variants) → mushrooms on impact. NEET-PG 2016 Q30.', tag: '[NEET-PG 2016]' },
    { stem: 'Two bullets emerging from the same shot (one stuck in barrel from previous misfire) is called:', options: ['Dumdum','Tandem','Souvenir','Ricochet'], answerIdx: 1, explain: 'Tandem bullet — a bullet stuck in the barrel from previous misfire is pushed out by the next shot, producing two bullets in tandem.', tag: '[PG-Inspired]' },
    { stem: 'A bullet that strikes a hard surface and is deflected off course is called:', options: ['Souvenir','Tandem','Ricochet','Dumdum'], answerIdx: 2, explain: 'Ricochet bullet — deflects off a hard surface → tumbles → irregular "key-hole" entry wound.', tag: '[UNIV]' }
  ],
  'FA-03': [
    { stem: 'The components of a shotgun cartridge from base to tip are:', options: ['Primer · powder · wads · pellets · over-shot wad','Primer · pellets · powder · wads','Pellets · wads · powder · primer','Powder · primer · pellets · wads'], answerIdx: 0, explain: 'Brass base+primer → propellant powder → felt/card wads → shot pellets → over-shot wad / crimp.', tag: '[PG-Inspired]' },
    { stem: 'In a shotgun wound, finding the wad inside the wound indicates a range of:', options: ['&gt; 10 m','&gt; 5 m','≤ 3 m','Contact only'], answerIdx: 2, explain: 'Wads fall off the pellet column at 2-3 m from the muzzle. If recovered from the wound → range ≤ 3 m.', tag: '[PG-Inspired]' },
    { stem: 'The constriction at the muzzle of a shotgun that controls pellet spread is called:', options: ['Bore','Choke','Stock','Breech'], answerIdx: 1, explain: 'Choke — constriction at the muzzle. Cylinder (none) → improved cylinder → modified → full choke (tightest pattern).', tag: '[UNIV]' }
  ],
  'FA-04': [
    { stem: 'In a gunshot wound with burning, blackening, tattooing around the wound and a dirt collar, the injury is:', options: ['Close shot entry wound','Close shot exit wound','Distant shot entry wound','Distant shot exit wound'], answerIdx: 0, explain: 'All 5 features (entry hole + dirt collar + burning + blackening + tattooing) present = CLOSE SHOT ENTRY WOUND. NEET-PG 2019 verbatim PYQ.', tag: '[NEET-PG 2019]' },
    { stem: 'The MOST reliable single feature confirming an entry wound is:', options: ['Burning','Blackening','Abrasion (dirt) collar','Tattooing'], answerIdx: 2, explain: 'Abrasion collar is present at ALL ranges (including distant), while burning/blackening/tattooing disappear at increasing range. It is the most reliable definitive sign of entry.', tag: '[PG-Inspired]' },
    { stem: 'Tattooing around an entry wound is best differentiated from blackening by:', options: ['Colour','Wash test (tattooing does NOT wash off)','Site','Bullet velocity'], answerIdx: 1, explain: 'Blackening = surface smoke deposit → WASHES OFF. Tattooing = powder particles embedded in skin → does NOT wash off. Confirms by water/soap.', tag: '[PG-Inspired]' }
  ],
  'FA-05': [
    { stem: 'In a rifled firearm wound, entry vs exit is BEST differentiated by:', options: ['Size of wound','Presence of abrasion collar (entry) and bone bevelling direction','Bleeding pattern','Margins'], answerIdx: 1, explain: 'Abrasion collar = entry (definitive). Bone bevel: inward in entry, outward in exit. Both are reliable autopsy signs.', tag: '[PG-Inspired]' },
    { stem: 'In skull, bone bevelling at an entry gunshot wound is:', options: ['Outward at outer table','Inward at inner table (cone opens into skull)','Equal both sides','Variable'], answerIdx: 1, explain: 'Entry: inner table bevelled wider (cone opens INTO skull). Exit: outer table bevelled wider (cone opens OUT). Bevelling widens in the direction of bullet travel.', tag: '[PG-Inspired]' },
    { stem: 'A "Kronlein shot" refers to:', options: ['Tandem bullet','Bursting head from contact-range shotgun/rifle','Suicide gunshot','Tracer bullet'], answerIdx: 1, explain: 'Kronlein = bursting head — hot gases enter cranium in contact-range high-velocity gunshot → hydraulic burst of skull, brain ejected.', tag: '[PG-Inspired]' }
  ],
  'FA-06': [
    { stem: 'Identify the gun that caused the wound and the range of the shot (image shows tattooing only with no blackening or burning, single circular entry):', options: ['Shotgun, intermediate range','Shotgun, close range','Pistol, near shot','Pistol, contact shot'], answerIdx: 2, explain: 'NEET-PG 2022 Q4 — single circular entry + tattooing only (no burning/blackening) = pistol/revolver at near range (30-60 cm). Shotgun would show pellet pattern.', tag: '[NEET-PG 2022]' },
    { stem: 'Burning around an entry wound suggests a range of:', options: ['≤ 15 cm','≤ 60 cm','&gt; 1 m','Contact only'], answerIdx: 0, explain: 'Burning (singeing) occurs only when the flame from the muzzle reaches the skin — ≤ 15 cm typically. Beyond, the flame doesn\'t reach.', tag: '[PG-Inspired]' },
    { stem: 'Werkgartner sign refers to:', options: ['Tattooing pattern','Muzzle imprint on skin from contact gunshot','Cherry-red lividity','Tandem bullet'], answerIdx: 1, explain: 'Werkgartner sign = imprint of muzzle (and sometimes foresight) on skin from hot gas recoil during contact gunshot. Pathognomonic of contact range.', tag: '[PG-Inspired]' }
  ],
  'FA-07': [
    { stem: 'A "rat-hole" appearance with central hole and surrounding satellite pellets in a shotgun wound indicates a range of:', options: ['Contact','&lt; 1 m','1-3 m','&gt; 5 m'], answerIdx: 2, explain: 'Rat-hole pattern (central hole + satellites) = 1-3 m range. Wads may still be in wound. Burning/blackening already absent.', tag: '[PG-Inspired]' },
    { stem: 'For a cylinder-bore shotgun, the rule of thumb for range estimation is:', options: ['Spread (in) = range (yards) × 2','Spread (in) ≈ range (yards) × 1','Spread (in) = range (m) × 0.5','No correlation'], answerIdx: 1, explain: 'Cylinder bore: spread of pellets (inches) ≈ range (yards) × 1. Full choke: spread × 0.75 (tighter).', tag: '[PG-Inspired]' },
    { stem: 'A contact-range shotgun wound to the head is associated with:', options: ['Single small entry','Kronlein bursting of skull','Tattooing only','No external injury'], answerIdx: 1, explain: 'Contact shotgun to head produces Kronlein shot — hot gases + pellet mass enter cranium → hydraulic burst of skull, brain ejected.', tag: '[UNIV]' }
  ],
  'FA-08': [
    { stem: 'The modern gold-standard test for gunshot residue (GSR) on the hand of a suspected shooter is:', options: ['Dermal nitrate (paraffin) test','Atomic absorption spectrometry','SEM-EDX','Walker test'], answerIdx: 2, explain: 'SEM-EDX (Scanning Electron Microscope + Energy-Dispersive X-ray) identifies spheroidal Pb-Sb-Ba primer particles — high specificity. Modern gold standard.', tag: '[PG-Inspired]' },
    { stem: 'The dermal nitrate (paraffin) test is largely obsolete because:', options: ['It is too expensive','It cannot detect lead','It has many false positives (urine, tobacco, fertiliser)','It requires SEM'], answerIdx: 2, explain: 'Dermal nitrate test detects ANY nitrate — many false positives from urine, tobacco, fertiliser, fireworks. Replaced by SEM-EDX which identifies primer-specific particles.', tag: '[PG-Inspired]' },
    { stem: 'Bullet → weapon identification is achieved primarily by:', options: ['DNA analysis','Comparison microscope examining bullet striations','Chemical assay','X-ray diffraction'], answerIdx: 1, explain: 'Comparison microscope compares striations on the recovered bullet with test-fired bullets from suspect weapon — striations from lands &amp; grooves are unique per barrel.', tag: '[UNIV]' }
  ],
  'FA-09': [
    { stem: 'Which is the MOST common type of blast injury in survivors?', options: ['Primary (shock wave)','Secondary (fragments)','Tertiary (hurled body)','Quaternary (burns)'], answerIdx: 1, explain: 'Secondary blast injury (penetrating wounds from fragments / shrapnel) is the most common injury type in survivors. Primary is most distinctive forensically (blast lung) but secondary dominates clinical load.', tag: '[PG-Inspired]' },
    { stem: '"Blast lung" is a manifestation of:', options: ['Primary blast injury','Secondary blast injury','Tertiary blast injury','Quaternary blast injury'], answerIdx: 0, explain: 'Blast lung = pulmonary contusion + haemorrhage at alveoli-capillary interface from the shock wave (primary blast injury). Air-tissue interface most affected.', tag: '[PG-Inspired]' },
    { stem: 'The MOST sensitive organ to blast overpressure (primary blast injury) is:', options: ['Lung','Liver','Tympanic membrane','Brain'], answerIdx: 2, explain: 'Tympanic membrane is the most sensitive — ruptures at very low overpressure (~5 psi). Always examine TM in blast survivors.', tag: '[PG-Inspired]' },
    { stem: 'Blast lung on autopsy shows:', options: ['Single localised contusion','Bilateral diffuse haemorrhage (bat-wing pattern) + sub-pleural petechiae','Necrosis only','Clear lungs'], answerIdx: 1, explain: 'Bilateral bat-wing pulmonary haemorrhage + sub-pleural petechiae + contusion patches = classic blast lung. ARDS-like picture on CXR.', tag: '[UNIV]' }
  ],
  'FA-10': [
    { stem: 'Features suggesting a SUICIDAL gunshot wound include all EXCEPT:', options: ['Contact range','Site at right temple (right-handed)','Multiple wounds on the back','Weapon in victim\'s hand'], answerIdx: 2, explain: 'Multiple wounds on the back are strongly homicidal — victim shot from behind, unable to self-inflict. Suicide = contact range, favourable site, weapon in hand, single wound usually.', tag: '[PG-Inspired]' },
    { stem: 'In a homicidal firearm victim, which would support the diagnosis?', options: ['Single contact-range shot to right temple','Hesitation marks','GSR on victim\'s hand','Defence wounds on palms + multiple wounds'], answerIdx: 3, explain: 'Defence wounds + multiple wounds → conscious resistance = HOMICIDE. Contact + favourable site + GSR on hand = suicide.', tag: '[PG-Inspired]' }
  ]

};

const DIFF_TABLES = [
  {
    id: 'DT-1', title: 'Rifled vs Smooth-bore Firearms', shortTitle: 'Rifled vs Smooth-bore',
    columns: ['Feature','Rifled','Smooth-bore'],
    rows: [
      ['Barrel','Spiral grooves (lands &amp; grooves)','Smooth, no grooves'],
      ['Projectile','Single BULLET','Multiple PELLETS or single slug'],
      ['Velocity','HIGH (300-900 m/s)','LOW (250-450 m/s)'],
      ['Range (effective)','LONG (&gt; 50 m)','SHORT (~25-40 m)'],
      ['Examples','Rifle · Revolver · Pistol · Carbine','Shotgun · katta (country-made)'],
      ['Wound (close)','Single round/oval','Single round (no spread)'],
      ['Wound (distant)','Same','Scattered pellet pattern'],
      ['Marks on bullet','Striations (unique to barrel)','None (pellets) / variable (slug)'],
      ['Forensic ID','Comparison microscope on bullet','Pellet pattern + cartridge'],
      ['Choke','None (rifled)','Cylinder → improved → modified → full']
    ],
    parentDiagrams: ['FA-01','FA-02','FA-03'],
    mcqs: [
      { stem: 'A 12-bore shotgun is which type of firearm?', options: ['Rifled','Smooth-bore','Mixed','Tracer'], answerIdx: 1, explain: '12-bore shotgun is smooth-bore — no rifling, fires shot pellets / slug.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-2', title: 'Rifled Entry vs Exit Wounds', shortTitle: 'Entry vs Exit (Rifled)',
    columns: ['Feature','Entry','Exit'],
    rows: [
      ['Shape','Round / oval (regular)','IRREGULAR · stellate · slit'],
      ['Size','SMALLER than bullet','LARGER than entry'],
      ['Margins','INVERTED inward','EVERTED outward'],
      ['Abrasion (dirt) collar','PRESENT ★','ABSENT ★'],
      ['Grease collar','Present','Absent'],
      ['Burning','Possible (≤ 15 cm)','Absent'],
      ['Blackening','Possible (≤ 30 cm)','Absent'],
      ['Tattooing','Possible (≤ 60 cm)','Absent'],
      ['Bleeding (external)','Less profuse','More profuse'],
      ['Bone bevel (skull)','INWARD (cone into skull)','OUTWARD (cone out of skull)']
    ],
    parentDiagrams: ['FA-04','FA-05'],
    mcqs: [
      { stem: 'Postmortem wound bevelling that opens outward on the skull indicates:', options: ['Entry','Exit','Contact shot','Distant shot'], answerIdx: 1, explain: 'Bone bevel widens in direction of travel — outward on skull = exit. Inward = entry.', tag: '[PG-Inspired]' },
      { stem: 'The single most reliable feature confirming an entry wound (vs exit) at any range is:', options: ['Wound size','Margins','Abrasion (dirt) collar','Bleeding'], answerIdx: 2, explain: 'Abrasion collar is present at ALL ranges including distant; burning/blackening/tattooing fade at increasing range.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-3', title: 'Range Estimation — Rifled Firearm', shortTitle: 'Range (Rifled)',
    columns: ['Feature','Contact','Close (≤ 30 cm)','Near (30-60 cm)','Distant (&gt; 60 cm)'],
    rows: [
      ['Wound shape','Large, cruciform, ragged','Round','Round','Round / oval'],
      ['Werkgartner sign (muzzle imprint)','★ PRESENT','Absent','Absent','Absent'],
      ['Burning','+++ (charring)','+ (≤ 15 cm)','—','—'],
      ['Blackening','+++ (deep)','++','—','—'],
      ['Tattooing','+++ (sub-epidermal)','++','★ + (only sign)','—'],
      ['Wash test','—','Blackening WASHES off','Tattooing does NOT wash','—'],
      ['Bullet / collar','Within wound','Around','Around','Around'],
      ['Skull','Kronlein burst possible','Round hole','Round hole','Round hole']
    ],
    parentDiagrams: ['FA-06'],
    mcqs: [
      { stem: 'At what range is tattooing typically the ONLY sign of muzzle proximity around an entry wound?', options: ['Contact','Close (≤ 30 cm)','Near (30-60 cm)','Distant (&gt; 60 cm)'], answerIdx: 2, explain: 'Near range (30-60 cm): blackening + burning have dissipated, but powder particles still embed → tattooing alone. NEET-PG 2022 Q4.', tag: '[NEET-PG 2022]' }
    ]
  },
  {
    id: 'DT-4', title: 'Range Estimation — Shotgun', shortTitle: 'Range (Shotgun)',
    columns: ['Feature','Contact','Close (≤ 1 m)','Medium (1-3 m)','Distant (&gt; 3 m)'],
    rows: [
      ['Wound pattern','Single large cruciform','Single hole ~ bore size','RAT-HOLE (central + satellites)','Scattered pellets only'],
      ['Burning/blackening','+++','+','—','—'],
      ['Tattooing','+++','+','—','—'],
      ['Wad in wound','Yes','May be present','★ Yes (≤ 3 m)','Absent (falls off)'],
      ['Central hole','Yes (large)','Yes','Yes','★ ABSENT (only satellites)'],
      ['Spread (in)','—','—','2-5 cm','≈ range (yd) × 1 (cylinder)'],
      ['Head (Kronlein)','★ Possible','Rare','—','—']
    ],
    parentDiagrams: ['FA-03','FA-07'],
    mcqs: [
      { stem: 'A wad recovered from inside a shotgun wound indicates a range of:', options: ['&gt; 5 m','&gt; 10 m','≤ 3 m','Contact only'], answerIdx: 2, explain: 'Wads fall off the pellet column at 2-3 m. If recovered from the wound = range ≤ 3 m. Cardinal forensic clue.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-5', title: 'Blast Injury — Primary vs Secondary vs Tertiary vs Quaternary', shortTitle: 'Blast Injury Types',
    columns: ['Type','Cause','Targets','Examples'],
    rows: [
      ['<strong>Primary ★</strong>','Pressure shock wave (overpressure)','Air-tissue interfaces','Blast lung · TM rupture · bowel rupture · eye'],
      ['<strong>Secondary (commonest)</strong>','Fragments / shrapnel','Any tissue','Penetrating wounds · lacerations · eye injury'],
      ['<strong>Tertiary</strong>','Body hurled by blast wind','Whole body','Fractures · head injury (DAI) · amputation · spinal'],
      ['<strong>Quaternary</strong>','All other blast-related','Variable','Burns · inhalation · crush · chemical · PTSD']
    ],
    parentDiagrams: ['FA-09'],
    mcqs: [
      { stem: 'Tympanic membrane rupture in a bomb blast survivor is an example of:', options: ['Primary blast injury','Secondary','Tertiary','Quaternary'], answerIdx: 0, explain: 'TM is the most sensitive organ to blast overpressure → primary blast injury. Ruptures at ~5 psi.', tag: '[PG-Inspired]' },
      { stem: 'The MOST common injury type seen in blast survivors is:', options: ['Primary','Secondary','Tertiary','Quaternary'], answerIdx: 1, explain: 'Secondary (fragments) = most common clinical load. Primary (blast lung, TM) is most distinctive forensically.', tag: '[PG-Inspired]' }
    ]
  },
  {
    id: 'DT-6', title: 'Suicidal vs Homicidal Firearm Death', shortTitle: 'Suicidal vs Homicidal FA',
    columns: ['Feature','Suicidal','Homicidal'],
    rows: [
      ['Range','CONTACT or very close (95%)','Variable — often distant'],
      ['Site','Right temple · mouth · precordium · forehead (favourable)','Anywhere — back, chest, head, abdomen'],
      ['Wounds','Usually SINGLE','Often MULTIPLE'],
      ['Weapon','In victim\'s hand (cadaveric spasm)','NOT at scene'],
      ['Clothing','Often partly removed over site','Intact / struggle marks'],
      ['Hesitation marks','Possible','Absent'],
      ['Defence wounds','Absent','Present (resistance)'],
      ['GSR on hand','Present on firing hand','Absent on victim\'s hand'],
      ['Wounds on back','Rare','Common']
    ],
    parentDiagrams: ['FA-10'],
    mcqs: [
      { stem: 'A man is shot in the back with multiple wounds at distant range. The manner of death is most likely:', options: ['Suicide','Homicide','Accident','Undetermined'], answerIdx: 1, explain: 'Wounds on back + multiple + distant range = strongly HOMICIDAL. Suicide is contact, single, favourable site.', tag: '[PG-Inspired]' }
    ]
  }
];

const SUBJ = [
  {
    id: 'SAQ-10.1', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Shotgun Cartridge — describe components with labelled diagram. Ricocheting of bullet — describe.',
    answer: `<h4>Part A — Shotgun Cartridge Components</h4>
<p>A shotgun cartridge has 5 main components from base to tip:</p>
<ol><li><strong>Brass base + primer</strong> — base of cartridge; primer (percussion cap) contains Pb-Sb-Ba; struck by firing pin → ignites propellant</li>
<li><strong>Propellant powder</strong> — gunpowder / nitrocellulose; burns rapidly producing expansive gases</li>
<li><strong>Card / felt wads</strong> — separators between powder and pellets; gas-seal; material is felt, card, or plastic cup-shape</li>
<li><strong>Shot pellets</strong> — multiple lead/steel spheres OR single slug</li>
<li><strong>Over-shot wad / crimp</strong> — closes the front of the cartridge (rim crimp or over-shot card wad)</li></ol>
<h4>Pellet Sizes</h4>
<ul><li><strong>Bird shot:</strong> 1.3-4 mm — for fowl/game</li>
<li><strong>Buck shot:</strong> 6-9 mm — for deer/defence</li>
<li><strong>Slug:</strong> single solid heavy projectile</li>
<li>A 12-bore #6 bird-shot cartridge ≈ 270 pellets</li></ul>
<h4>Cartridge Gauges</h4>
<p>Bore = inverse of barrel diameter in pounds. 12-bore is commonest civilian gauge in India (smaller number = larger bore).</p>
<h4>Forensic Value of Components</h4>
<ul><li><strong>Wad inside wound:</strong> range ≤ 3 m (wads fall off beyond 2-3 m)</li>
<li><strong>Pellets:</strong> recovered for ballistic comparison + material analysis</li>
<li><strong>Cartridge case:</strong> firing pin imprint, extractor &amp; ejector marks ID the weapon</li>
<li><strong>Primer particles (Pb-Sb-Ba):</strong> basis of GSR detection by SEM-EDX</li></ul>
<hr/>
<h4>Part B — Ricocheting of Bullet</h4>
<h5>Definition</h5>
<p>A <strong>ricochet bullet</strong> is one that strikes a hard surface (wall, ground, vehicle, water) and is DEFLECTED off its original course.</p>
<h5>Physics</h5>
<p>Determined by angle of incidence, surface hardness, and bullet velocity. Critical angle (above which bullet penetrates rather than deflects) varies with surface — soft surfaces (sand) allow ricochet only at low angles.</p>
<h5>Effects on the Bullet</h5>
<ul><li>Loses gyroscopic stability after deflection → <strong>tumbles in flight</strong></li>
<li>May show <strong>flattening + scratch marks</strong> from the deflecting surface</li>
<li>Reduced velocity</li>
<li>Direction unpredictable</li></ul>
<h5>Wound Characteristics</h5>
<ul><li><strong>Entry wound:</strong> Irregular, larger than usual, often "<strong>key-hole</strong>" shape from tumbling bullet</li>
<li>May be confused with shotgun wound</li>
<li>No burning/blackening/tattooing (ricochet implies distance)</li>
<li>Bullet may break into fragments → multiple wounds from a single shot</li></ul>
<h5>Medicolegal Importance</h5>
<ul><li>Reconstructs bullet trajectory — points to original direction of fire</li>
<li>Explains "impossible" trajectories (e.g., shooter location inconsistent with direct shot)</li>
<li>Recovered bullet shows characteristic scratches/flattening identifying ricochet surface</li>
<li>Multiple fragment wounds from a single shot can be misinterpreted as multiple shots</li></ul>`,
    sources: ['FA-02 (Bullet Types)','FA-03 (Shotgun Cartridge)'],
    jumpToDiagram: 'FA-03'
  },
  {
    id: 'SAQ-10.2', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Ammunition used in smooth-bore guns.',
    answer: `<h4>Smooth-bore Firearm — Definition</h4>
<p>A firearm with an unrifled (smooth) barrel; fires multiple pellets or a single slug. Most common example is the SHOTGUN. Country-made variants ("katta", "deshi tamancha") are common in Indian crimes.</p>
<h4>Cartridge Components (5)</h4>
<ol><li><strong>Brass base + primer</strong> — primer contains Pb-Sb-Ba; struck by firing pin</li>
<li><strong>Propellant powder</strong> — gunpowder / nitrocellulose</li>
<li><strong>Card / felt wads</strong> — separate powder from pellets; gas-seal</li>
<li><strong>Shot pellets</strong> OR single slug</li>
<li><strong>Over-shot wad / crimp</strong> — closes the cartridge front</li></ol>
<h4>Pellet Types &amp; Sizes</h4>
<table><tr><th>Type</th><th>Size</th><th>Use</th></tr>
<tr><td><strong>Bird shot</strong></td><td>1.3-4 mm (lead)</td><td>Fowl, small game</td></tr>
<tr><td><strong>Buck shot</strong></td><td>6-9 mm (lead)</td><td>Deer, self-defence</td></tr>
<tr><td><strong>Slug</strong></td><td>Single solid 12-32 g</td><td>Short-range high-energy</td></tr></table>
<h4>Wad Types</h4>
<ul><li><strong>Felt wad</strong> — traditional</li>
<li><strong>Card wad</strong> — paper-based</li>
<li><strong>Plastic cup wad</strong> — modern, contains pellets in a cup</li></ul>
<h4>Bore (Gauge)</h4>
<ul><li>Defined by the number of lead balls of barrel diameter required to weigh 1 pound</li>
<li><strong>12-bore</strong> — commonest civilian (barrel ≈ 18.5 mm)</li>
<li><strong>20-bore, 28-bore</strong> — lighter</li>
<li>Lower bore number = larger barrel diameter</li></ul>
<h4>Choke</h4>
<p>Constriction at the muzzle controls pellet spread:</p>
<ul><li><strong>Cylinder (no choke):</strong> ~40% in 30" circle at 40 yd</li>
<li><strong>Improved cylinder:</strong> ~50%</li>
<li><strong>Modified:</strong> ~60%</li>
<li><strong>Full choke:</strong> ~70-75% — tightest</li></ul>
<h4>Velocity &amp; Range</h4>
<p>Muzzle velocity 250-450 m/s (lower than rifled). Effective range ~25-40 m. Pellets lose energy rapidly with distance.</p>
<h4>Forensic Recovery</h4>
<ul><li>Pellets recovered from body/clothing → material analysis</li>
<li>Wads → manufacturer ID (range marker)</li>
<li>Cartridge case → firing-pin and ejector marks → weapon ID</li></ul>`,
    sources: ['FA-01 (Classification)','FA-03 (Shotgun Cartridge)'],
    jumpToDiagram: 'FA-03'
  },
  {
    id: 'SAQ-10.3', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Differentiate entry and exit wound caused by rifled firearm.',
    answer: `<h4>Diagnostic Importance</h4>
<p>Differentiating entry from exit wounds is essential to reconstruct bullet trajectory, position of the shooter, and the manner of death.</p>
<h4>Point-by-Point Comparison</h4>
<table><tr><th>Feature</th><th>Entry Wound</th><th>Exit Wound</th></tr>
<tr><td><strong>Shape</strong></td><td>Round / oval (regular)</td><td>IRREGULAR, stellate, slit</td></tr>
<tr><td><strong>Size</strong></td><td>SMALLER than bullet (skin retracts)</td><td>LARGER than entry</td></tr>
<tr><td><strong>Margins</strong></td><td>INVERTED inward</td><td>EVERTED outward</td></tr>
<tr><td><strong>Abrasion (dirt) collar</strong></td><td>PRESENT ★ (1-3 mm reddish-brown ring)</td><td>ABSENT ★</td></tr>
<tr><td><strong>Grease (lubricant) collar</strong></td><td>Present (UV / chemical detectable)</td><td>Absent</td></tr>
<tr><td><strong>Burning (singeing)</strong></td><td>Possible if contact / close (≤ 15 cm)</td><td>Absent</td></tr>
<tr><td><strong>Blackening (smoke)</strong></td><td>Possible (≤ 30 cm); WASHES off</td><td>Absent</td></tr>
<tr><td><strong>Tattooing (powder embedded)</strong></td><td>Possible (≤ 60 cm); does NOT wash off</td><td>Absent</td></tr>
<tr><td><strong>Bleeding (external)</strong></td><td>Less profuse</td><td>More profuse</td></tr>
<tr><td><strong>Bone bevel (skull)</strong></td><td>INWARD — cone opens INTO skull</td><td>OUTWARD — cone opens OUT</td></tr>
<tr><td><strong>Werkgartner sign</strong></td><td>Possible (contact range)</td><td>Absent</td></tr>
<tr><td><strong>Kronlein burst</strong></td><td>Possible (contact head shot)</td><td>Same overall skull damage</td></tr></table>
<h4>Cardinal Rules</h4>
<ol><li><strong>Abrasion collar is the most reliable single feature</strong> confirming entry — present at ALL ranges including distant shots</li>
<li><strong>Bone bevelling widens in the direction of bullet travel</strong> — most reliable autopsy sign on skull / flat bone</li>
<li>Burning, blackening, tattooing identify both entry AND range; their absence does not exclude entry</li>
<li>Exit wounds have NO collar, NO burning/blackening/tattooing</li></ol>
<h4>Pitfalls</h4>
<ul><li><strong>"Shored" exit wound</strong> — exit through clothing pressed against skin may show abrasion (mimics entry)</li>
<li><strong>Tangential shot</strong> — both entry and exit can be irregular</li>
<li><strong>Ricochet / tumbling bullet</strong> — entry can be irregular ("key-hole")</li></ul>
<h4>Special Concepts</h4>
<ul><li><strong>Kronlein shot</strong> — contact-range high-velocity shot to head → bursting skull, brain ejected</li>
<li><strong>Werkgartner sign</strong> — muzzle imprint on skin from contact gunshot</li>
<li><strong>Cherry-red discolouration</strong> — CO in wound tract (contact range)</li></ul>`,
    sources: ['FA-04 (Entry features)','FA-05 (Entry vs Exit)','DT-2'],
    jumpToDiagram: 'FA-05'
  },
  {
    id: 'SAQ-10.4', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Bomb blast injuries; mechanism of injury in bomb explosions. Autopsy findings in chest &amp; abdomen.',
    answer: `<h4>Bomb Blast Injury — Definition</h4>
<p>Injuries caused by an explosive detonation. Damage results from a sequence of forces: (1) high-pressure shock wave, (2) propelled fragments, (3) body displacement, (4) thermal/chemical effects.</p>
<h4>4 Mechanisms (Classification)</h4>
<h5>1. Primary Blast Injury ★</h5>
<ul><li><strong>Cause:</strong> Pressure shock wave (overpressure)</li>
<li><strong>Targets:</strong> Air-tissue interfaces — air-containing organs</li>
<li><strong>Injuries:</strong> Tympanic membrane rupture (most sensitive, ruptures at ~5 psi) · blast lung · bowel rupture · eye globe rupture</li>
<li><strong>★ DD:</strong> may have NO external injuries — internal damage only</li></ul>
<h5>2. Secondary Blast Injury (MOST COMMON)</h5>
<ul><li><strong>Cause:</strong> Fragments and shrapnel propelled by blast</li>
<li><strong>Sources:</strong> Bomb casing, deliberately added nails/bolts/ball bearings (IED), glass</li>
<li><strong>Injuries:</strong> Penetrating wounds, lacerations, stab-like wounds, eye injury</li>
<li>Bulk of casualty load in survivors</li></ul>
<h5>3. Tertiary Blast Injury</h5>
<ul><li><strong>Cause:</strong> Body hurled by blast wind / displacement</li>
<li><strong>Mechanism:</strong> Acceleration-deceleration injuries on landing</li>
<li><strong>Injuries:</strong> Fractures (incl. skull) · head injury (DAI) · limb amputation · spinal cord injury · internal organ rupture</li></ul>
<h5>4. Quaternary Blast Injury</h5>
<ul><li><strong>Cause:</strong> All other blast-related injuries</li>
<li><strong>Examples:</strong> Burns · inhalation injury · crush from rubble · chemical exposure · radiation (dirty bomb) · PTSD · crush syndrome / rhabdomyolysis</li></ul>
<hr/>
<h4>Autopsy Findings — CHEST</h4>
<ul><li><strong>Blast lung (★ classic):</strong> Bilateral diffuse "bat-wing" pulmonary haemorrhage, sub-pleural petechiae, contusion patches</li>
<li><strong>Pneumothorax / haemothorax</strong> — from alveolar rupture</li>
<li><strong>Rib fractures · sternal fracture · mediastinal injuries</strong></li>
<li><strong>Air embolism</strong> — in pulmonary veins (alveolo-capillary disruption)</li>
<li><strong>Cardiac contusion · pericardial haemorrhage</strong></li>
<li><strong>Penetrating fragments</strong> in lungs, heart, great vessels (secondary)</li></ul>
<h4>Autopsy Findings — ABDOMEN</h4>
<ul><li><strong>Bowel rupture</strong> — terminal ileum + colon most vulnerable (gas-filled segments)</li>
<li><strong>Mesenteric haemorrhage</strong> · retroperitoneal haematoma</li>
<li><strong>Solid organ contusions</strong> — liver, spleen, kidney</li>
<li><strong>Diaphragmatic rupture</strong></li>
<li><strong>Penetrating fragments</strong> reaching abdomen (secondary)</li>
<li><strong>Crush injuries</strong> from rubble (tertiary / quaternary)</li></ul>
<h4>Other Autopsy Findings</h4>
<ul><li><strong>TM rupture</strong> — always examine ears; most sensitive primary sign</li>
<li><strong>Eye globe rupture</strong></li>
<li><strong>Burns</strong> — flash burns + secondary fire</li>
<li><strong>Inhalation injury</strong> — soot in airways, mucosal burns</li>
<li><strong>Multiple fragment wounds</strong> — collect each for ballistics</li>
<li><strong>Identification challenges</strong> — fragmented bodies, DNA / dental ID</li></ul>
<h4>Mortality Pattern</h4>
<ul><li><strong>Immediate deaths:</strong> Massive primary blast (lung), tertiary (head injury, dismemberment), burns</li>
<li><strong>Early deaths (minutes-hours):</strong> Blast lung complications, haemorrhage, airway obstruction</li>
<li><strong>Late deaths (days-weeks):</strong> ARDS, sepsis, multi-organ failure, crush syndrome</li></ul>`,
    sources: ['FA-09 (Bomb Blast)','DT-5'],
    jumpToDiagram: 'FA-09'
  },
  {
    id: 'SAQ-10.5', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'A man is brought to the casualty with a single circular penetrating injury to the left side of chest, with blackening around the skin. What is the possible weapon of causation? How will you determine the distance from which the weapon was used? What samples should be preserved to recreate the crime scene?',
    answer: `<h4>Approach</h4>
<p>Single circular penetrating chest injury + blackening = firearm wound. The circular shape (not pellet pattern) points to a rifled firearm; blackening implies close range. This is a classic forensic medicolegal case.</p>
<h4>1. Probable Weapon</h4>
<ul><li><strong>RIFLED firearm</strong> — single circular hole (not multiple pellets, which a shotgun would give)</li>
<li><strong>Most likely:</strong> revolver, pistol, or rifle</li>
<li>The exact calibre is estimated by wound diameter — typically slightly smaller than the bullet (skin retracts after passage)</li>
<li><strong>Bullet recovery</strong> at surgery/autopsy → comparison microscope → matches suspect weapon by striation pattern</li></ul>
<h4>2. Distance / Range Estimation</h4>
<p>Range is estimated by the constellation of features around the entry wound:</p>
<table><tr><th>Range</th><th>Burning</th><th>Blackening</th><th>Tattooing</th><th>Other</th></tr>
<tr><td>Contact</td><td>+++</td><td>+++</td><td>+++</td><td>Cruciform · Werkgartner · cherry-red</td></tr>
<tr><td>Close (≤ 30 cm)</td><td>+ (≤15 cm)</td><td>+ (washes)</td><td>+</td><td>Round entry</td></tr>
<tr><td>Near (30-60 cm)</td><td>—</td><td>—</td><td>+ (doesn\'t wash)</td><td>Round entry</td></tr>
<tr><td>Distant (&gt; 60 cm)</td><td>—</td><td>—</td><td>—</td><td>Collar only</td></tr></table>
<p><strong>In this case:</strong> Blackening present → range ≤ 30 cm (close shot). If tattooing also visible → ≤ 60 cm (near shot). If burning + cruciform → contact. Verify by wash test (blackening washes off, tattooing does not).</p>
<h4>Tests for Range</h4>
<ul><li><strong>Wash test</strong> at bedside (blackening washes off)</li>
<li><strong>Modified Griess test</strong> — nitrite particles → quantitative range estimation</li>
<li><strong>Walker test</strong> — desensitised photographic paper → nitrite spots</li>
<li><strong>Stereoscopic / dissecting microscope</strong> — visualises tattooing particles</li></ul>
<h4>3. Samples to Preserve (Crime-scene Reconstruction)</h4>
<h5>From the VICTIM:</h5>
<ul><li><strong>Skin around entry wound</strong> (excise with margin) — for tattooing/blackening histology + Griess test</li>
<li><strong>Clothing</strong> over wound — preserve unwashed, in clean paper bag; powder residue may be on it (skips Griess test on skin if not visible)</li>
<li><strong>Recovered bullet</strong> — handle with rubber-tipped forceps (preserve striations); label with site of recovery</li>
<li><strong>Wound tract tissue</strong> — for histology (vital reaction, range estimation)</li>
<li><strong>Hands (both)</strong> — swab for GSR (rule out self-firing) — separately label R/L</li>
<li><strong>Blood</strong> — for ABO, DNA, alcohol/drug screen</li>
<li><strong>Viscera</strong> — if toxicology indicated</li></ul>
<h5>From the SUSPECT (if known):</h5>
<ul><li><strong>Hand swabs</strong> (both hands — web, palm, dorsum) — SEM-EDX for GSR</li>
<li><strong>Nail clippings</strong></li>
<li><strong>Clothing</strong> for trace evidence</li>
<li><strong>Suspected weapon</strong> — for test firing &amp; bullet comparison</li></ul>
<h5>From the SCENE:</h5>
<ul><li><strong>Cartridge cases</strong> — extractor / ejector / firing-pin marks identify weapon</li>
<li><strong>Bullets in walls / floor / furniture</strong> — for ballistics</li>
<li><strong>Blood spatter pattern</strong> — reconstructs victim position</li>
<li><strong>Weapon</strong> if found — fingerprints + DNA + ballistic test</li></ul>
<h4>Timing</h4>
<p>Collect GSR within 6 hours (preferable); detectable up to 24 hours. Hand washing removes GSR — restrain suspect from washing.</p>
<h4>Tests to Run</h4>
<ul><li><strong>Modified Griess</strong> → range</li>
<li><strong>SEM-EDX</strong> → GSR on hand (Pb-Sb-Ba spheroidal particles)</li>
<li><strong>Comparison microscope</strong> → bullet → weapon match</li>
<li><strong>IBIS</strong> → cross-case database match</li></ul>
<h4>Medicolegal Sections (BNS)</h4>
<ul><li>BNS 117/118 (grievous + dangerous weapon)</li>
<li>BNS 109 (attempt to murder) if survives</li>
<li>BNS 101/103 (murder) if fatal</li>
<li>Arms Act 1959 — illegal possession / use</li></ul>`,
    sources: ['FA-04 (Entry features)','FA-06 (Range)','FA-08 (GSR)','FA-10 (Manner)'],
    jumpToDiagram: 'FA-10'
  },
  {
    id: 'LAQ-10.1', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank',
    question: 'Differentiate between entrance and exit wound caused by SHOTGUN. What is a Kronlein shot? Describe the methods of sample collection to identify the perpetrator of gun violence. Write briefly about tests used for detection of gunshot residue.',
    answer: `<h4>Part A — Shotgun Entry vs Exit</h4>
<table><tr><th>Feature</th><th>Entry</th><th>Exit (uncommon)</th></tr>
<tr><td><strong>Frequency</strong></td><td>Always</td><td>RARE — pellets disperse in tissue, lose energy</td></tr>
<tr><td><strong>Shape (contact)</strong></td><td>Large cruciform / single ragged hole</td><td>Irregular multiple small wounds (if any)</td></tr>
<tr><td><strong>Shape (close ≤1 m)</strong></td><td>Single round hole ~ bore size</td><td>Rarely present</td></tr>
<tr><td><strong>Shape (medium 1-3 m)</strong></td><td>"Rat-hole" — central + satellite pellets</td><td>—</td></tr>
<tr><td><strong>Shape (distant &gt;3 m)</strong></td><td>Scattered pellet holes, no central hole</td><td>—</td></tr>
<tr><td><strong>Margins</strong></td><td>Inverted</td><td>Everted</td></tr>
<tr><td><strong>Burning, blackening, tattooing</strong></td><td>Present at close ranges</td><td>Absent</td></tr>
<tr><td><strong>Wad in wound</strong></td><td>If range ≤ 3 m</td><td>Absent</td></tr>
<tr><td><strong>Pellet recovery</strong></td><td>Often inside body</td><td>Some emerge if shallow tract</td></tr>
<tr><td><strong>Slug (single shotgun projectile)</strong></td><td>Behaves like a rifled bullet</td><td>May exit at close range</td></tr></table>
<h5>Spread Rule</h5>
<p><strong>Cylinder bore:</strong> spread of pellets (inches) ≈ range (yards) × 1. e.g., 10 inch spread → ~10 yard range.</p>
<p><strong>Full choke:</strong> spread (inches) ≈ range (yards) × 0.75 (tighter).</p>
<hr/>
<h4>Part B — Kronlein Shot</h4>
<p>A <strong>Kronlein shot</strong> (or "bursting head") is the explosive bursting of the cranium caused by a high-velocity firearm fired at <strong>CONTACT range</strong> to the head — typically a shotgun or military rifle.</p>
<h5>Mechanism</h5>
<p>Hot gases and the projectile mass enter the cranium through the entry wound. The cranium is a closed bony cavity — gases expand explosively in the confined space → hydraulic burst of the skull. Brain matter is ejected; the scalp may be split, torn off, or partly avulsed.</p>
<h5>Findings</h5>
<ul><li>Stellate splitting of scalp</li>
<li>Comminuted skull fracture; vault may be blown off</li>
<li>Brain matter ejected onto floor / wall</li>
<li>Werkgartner sign (muzzle imprint) often associated</li>
<li>Cherry-red CO in remaining wound tract</li></ul>
<h5>Manner of Death</h5>
<p>Classic in <strong>contact-range suicidal shotgun to head</strong>; also in homicidal high-velocity rifle close shots.</p>
<hr/>
<h4>Part C — Sample Collection (Identify Perpetrator)</h4>
<h5>From the SUSPECT</h5>
<ul><li><strong>Hand swabs</strong> — both hands (web spaces, palm, dorsum); label R and L SEPARATELY for SEM-EDX analysis</li>
<li><strong>Nail clippings</strong> — for trace evidence (GSR, victim DNA)</li>
<li><strong>Clothing</strong> — preserve unwashed in paper bags (powder residue, blood spatter)</li>
<li><strong>Suspect\'s weapon</strong> — secure with chain of custody; test fire for bullet comparison</li>
<li><strong>Buccal swab</strong> — for DNA reference</li>
<li><strong>Fingerprints</strong></li></ul>
<h5>From the VICTIM</h5>
<ul><li>Wound margin tissue, clothing over wound, recovered bullet(s)/pellets/wads, hand swabs (rule out self-firing), blood for DNA</li></ul>
<h5>From the SCENE</h5>
<ul><li>Cartridge cases (firing-pin, extractor, ejector marks)</li>
<li>Bullets in walls / floor / furniture</li>
<li>Blood spatter pattern</li>
<li>Weapon if abandoned at scene</li>
<li>Footprints, fingerprints, fibres</li></ul>
<h5>Time-frame &amp; Handling</h5>
<ul><li>GSR collection within 6 hours; detectable up to 24 h</li>
<li>Restrain suspect from washing hands</li>
<li>Use plastic bags on hands during transit</li>
<li>Chain of custody documented for each sample</li></ul>
<hr/>
<h4>Part D — GSR Detection Tests</h4>
<h5>1. Dermal Nitrate (Paraffin) Test — OBSOLETE</h5>
<ul><li>Hot paraffin cast of suspect\'s hand → treated with diphenylamine in conc. H₂SO₄ → BLUE spots = nitrates</li>
<li>FALSE POSITIVES from urine, tobacco, fertiliser → no longer used forensically</li></ul>
<h5>2. Atomic Absorption Spectrometry (AAS)</h5>
<ul><li>Hand swabs in 5% HNO₃ → measures Pb, Sb, Ba quantitatively</li>
<li>Sensitive but replaced by SEM-EDX for forensic certainty</li></ul>
<h5>3. SEM-EDX ★ Gold Standard</h5>
<ul><li>Scanning electron microscope + energy-dispersive X-ray</li>
<li>Identifies <strong>spheroidal Pb-Sb-Ba primer particles</strong> by both MORPHOLOGY and elemental composition</li>
<li>High specificity — false positives rare</li>
<li>Sample: adhesive carbon stubs pressed on suspect\'s hand</li></ul>
<h5>4. Other Tests</h5>
<ul><li><strong>Walker test</strong> — filter paper soaked in desensitised photographic paper → nitrite spots around wound</li>
<li><strong>Harrison-Gilroy test</strong> — Pb, Sb on hand swabs</li>
<li><strong>Modified Griess test</strong> — quantifies nitrite particles around entry → range estimation</li></ul>
<h5>5. Bullet → Weapon ID</h5>
<ul><li><strong>Comparison microscope</strong> — bullet striations from lands/grooves are UNIQUE per barrel</li>
<li><strong>IBIS</strong> (Integrated Ballistic Identification System) — national database</li>
<li>Cartridge case firing-pin imprint + ejector/extractor marks</li></ul>`,
    sources: ['FA-05 (Entry vs Exit)','FA-07 (Shotgun)','FA-08 (GSR)'],
    jumpToDiagram: 'FA-07'
  },
  {
    id: 'LAQ-10.2', type: 'LAQ', marks: 10, time: '~25 min', tag: 'QBank',
    question: 'Entry wound of revolver in a victim — describe specific features at different ranges.',
    answer: `<h4>Revolver — Definition</h4>
<p>A revolver is a RIFLED firearm with a rotating cylinder holding multiple cartridges. Each pull of the trigger rotates the cylinder, aligning a fresh cartridge with the barrel. Typical calibre: .22, .32, .38, .380, .45. Low-medium velocity (250-350 m/s).</p>
<h4>Common Entry Features (All Ranges)</h4>
<ul><li><strong>Central hole:</strong> round (perpendicular shot) or oval (oblique); slightly SMALLER than bullet diameter (skin retracts after passage)</li>
<li><strong>Margins:</strong> INVERTED inward</li>
<li><strong>Abrasion (dirt) collar:</strong> 1-3 mm reddish-brown ring — friction abrasion as bullet enters; PRESENT AT ALL RANGES (★ definitive marker of entry)</li>
<li><strong>Grease (lubricant) collar:</strong> grease wiped off bullet onto skin (UV / chemical detectable)</li></ul>
<h4>Features at Different Ranges</h4>
<h5>1. CONTACT (muzzle on skin)</h5>
<ul><li><strong>Wound:</strong> Large, ragged, cruciform / stellate (gas tears skin)</li>
<li><strong>Werkgartner sign</strong> — muzzle imprint (and sometimes foresight) on skin from hot gas recoil</li>
<li><strong>Burning, blackening, tattooing</strong> — all marked, may extend INTO wound (sub-epidermal)</li>
<li><strong>Cherry-red discolouration</strong> — CO from explosion combines with Hb in wound tract</li>
<li><strong>Skull (if applicable):</strong> Kronlein burst possible</li>
<li><strong>Significance:</strong> Most suicidal shots are contact range — esp. temple, mouth, precordium</li></ul>
<h5>2. CLOSE (≤ 30 cm / ~1 ft)</h5>
<ul><li><strong>Wound:</strong> Round, ~ bullet size</li>
<li><strong>Burning</strong> — present if ≤ 15 cm</li>
<li><strong>Blackening (smoke):</strong> PROMINENT — black soot around hole</li>
<li><strong>Tattooing:</strong> Present (powder grains embedded)</li>
<li><strong>★ Wash test:</strong> blackening WASHES OFF (smoke deposit); tattooing does NOT</li>
<li><strong>All collars (abrasion, grease):</strong> present</li>
<li><strong>★ This is the NEET-PG 2019 Q6 scenario</strong> — all 5 features around the wound</li></ul>
<h5>3. NEAR (30-60 cm / 1-2 ft)</h5>
<ul><li><strong>Burning:</strong> ABSENT</li><li><strong>Blackening:</strong> ABSENT (smoke dissipates beyond 30 cm)</li>
<li><strong>Tattooing:</strong> PRESENT ★ (powder grains still reach skin and embed)</li>
<li><strong>★ Wash test:</strong> tattooing does NOT wash off</li>
<li><strong>Wound:</strong> Round, clear; collars present</li>
<li><strong>★ NEET-PG 2022 Q4</strong> — image-based "pistol, near shot"</li></ul>
<h5>4. DISTANT (&gt; 60 cm / ~2 ft beyond)</h5>
<ul><li><strong>Burning, blackening, tattooing:</strong> ALL ABSENT</li>
<li><strong>Wound:</strong> Round / oval clean punch</li>
<li><strong>Collars:</strong> Abrasion + grease ONLY — these persist at all distances</li>
<li><strong>★ Cannot estimate exact distance</strong> — could be 1 m or 100 m from wound alone</li></ul>
<h4>Quick Range Mnemonic</h4>
<p><strong>"BBT decay":</strong> Burning (≤ 15 cm) → Blackening (≤ 30 cm) → Tattooing (≤ 60 cm) → none beyond.</p>
<h4>Differentiating from Exit (also at all ranges)</h4>
<ul><li>Exit: irregular, stellate, larger, EVERTED, NO collars, NO burning/blackening/tattooing</li>
<li>Bone bevel: entry — inward (cone into skull); exit — outward (cone out of skull)</li></ul>
<h4>Pitfalls</h4>
<ul><li><strong>Shored exit wound</strong> — exit through clothing pressed against skin shows abrasion (mimics entry)</li>
<li><strong>Tangential shot</strong> — both entry and exit can look irregular</li>
<li><strong>Ricochet</strong> — irregular "key-hole" entry from tumbling bullet</li></ul>
<h4>Medicolegal Implications</h4>
<ul><li>Determines shooter\'s position (direction + distance)</li>
<li>Differentiates suicide (contact, favourable site, weapon in hand, GSR on hand) vs homicide (distant, multiple, defence wounds)</li>
<li>BNS 117/118 — grievous + dangerous weapon</li>
<li>BNS 101/103 — murder if fatal</li>
<li>Arms Act 1959 — for unlicensed firearm</li></ul>`,
    sources: ['FA-04 (Entry features)','FA-06 (Range)'],
    jumpToDiagram: 'FA-06'
  }
];

return {
  chapterNumber: 10,
  chapterTitle: 'Firearm and Bomb Blast Injuries',
  prereqs: [
    { term: 'Firearm', meaning: 'A weapon that fires a projectile by expansive force of gases from burning propellant.' },
    { term: 'Rifled barrel', meaning: 'Barrel with spiral grooves (lands &amp; grooves) — imparts spin to bullet for stability.' },
    { term: 'Smooth-bore', meaning: 'Barrel without rifling; fires multiple pellets or single slug (shotgun, country-made).' },
    { term: 'Bullet', meaning: 'Single projectile from rifled firearm; lead core with copper/brass jacket.' },
    { term: 'Cartridge', meaning: 'Complete round = bullet + case + propellant + primer.' },
    { term: 'Primer', meaning: 'Percussion cap at cartridge base containing Pb-Sb-Ba; ignites propellant on striking.' },
    { term: 'Dumdum bullet', meaning: 'Expanding bullet with exposed lead core; mushrooms in tissue → max damage; banned military.' },
    { term: 'Wad', meaning: 'Separator between powder and pellets in shotgun cartridge; wad in wound = range ≤ 3 m.' },
    { term: 'Choke', meaning: 'Constriction at shotgun muzzle controlling pellet spread (cylinder → full).' },
    { term: 'Abrasion (dirt) collar', meaning: '1-3 mm reddish-brown ring around bullet entry — friction abrasion; definitive entry marker.' },
    { term: 'Tattooing', meaning: 'Powder particles embedded in skin around entry; range ≤ 60 cm; does NOT wash off.' },
    { term: 'Blackening', meaning: 'Smoke deposit around entry; range ≤ 30 cm; WASHES off.' },
    { term: 'Werkgartner sign', meaning: 'Muzzle imprint on skin from contact gunshot.' },
    { term: 'Kronlein shot', meaning: 'Bursting head from contact high-velocity firearm to skull.' },
    { term: 'GSR', meaning: 'Gunshot residue — powder + primer particles (Pb, Sb, Ba) on shooter\'s hand.' },
    { term: 'SEM-EDX', meaning: 'Scanning electron microscope + EDX — gold-standard GSR test, identifies spheroidal Pb-Sb-Ba particles.' },
    { term: 'Blast lung', meaning: 'Primary blast injury — pulmonary haemorrhage + oedema from shock wave at air-tissue interface.' },
    { term: 'Arms Act 1959', meaning: 'Indian statute governing licensing of firearms; non-prohibited bore civilian use only with licence.' }
  ],
  diagrams: [
    { id: 'FA-01', title: 'Firearm Classification', shortTitle: 'Classification', svg: SVG_FA01,
      prereqs: [{term:'Rifled',meaning:'Barrel with spiral grooves; single bullet.'},{term:'Smooth-bore',meaning:'Smooth barrel; pellets or slug.'},{term:'Muzzle velocity',meaning:'Speed at which projectile leaves barrel; classifies firearm.'},{term:'Arms Act 1959',meaning:'Indian licensing law.'}],
      nodes: nodeList(['fa-definition','fa-rifled','fa-smoothbore','fa-velocity','fa-legal']),
      mcqs: MCQS['FA-01']
    },
    { id: 'FA-02', title: 'Bullet Anatomy &amp; Types', shortTitle: 'Bullet Types', svg: SVG_FA02,
      prereqs: [{term:'FMJ',meaning:'Full Metal Jacket — ordinary military bullet.'},{term:'Dumdum',meaning:'Expanding bullet with exposed lead — max tissue damage.'},{term:'Tandem',meaning:'Two bullets from same shot (previous misfire).'},{term:'Ricochet',meaning:'Bullet deflected off hard surface; tumbles.'},{term:'Souvenir',meaning:'Bullet retained in body.'}],
      nodes: nodeList(['cartridge-anatomy','bullet-normal','bullet-dumdum','bullet-tandem','bullet-souvenir','bullet-ricochet','bullet-tracer','bullet-comparison']),
      mcqs: MCQS['FA-02']
    },
    { id: 'FA-03', title: 'Shotgun &amp; Smooth-bore Cartridge', shortTitle: 'Shotgun Cartridge', svg: SVG_FA03,
      prereqs: [{term:'Pellet',meaning:'Spherical lead shot in shotgun cartridge.'},{term:'Wad',meaning:'Separator/gas-seal between powder and pellets.'},{term:'Choke',meaning:'Muzzle constriction controlling pellet spread.'},{term:'Slug',meaning:'Single solid shotgun projectile.'},{term:'Bore (gauge)',meaning:'Inverse measure of barrel diameter; 12-bore commonest.'}],
      nodes: nodeList(['shotgun-cartridge','shotgun-pellets','shotgun-wads','shotgun-choke','shotgun-spread']),
      mcqs: MCQS['FA-03']
    },
    { id: 'FA-04', title: 'Rifled Entry Wound — Features', shortTitle: 'Entry Wound', svg: SVG_FA04,
      prereqs: [{term:'Abrasion collar',meaning:'1-3 mm reddish ring around entry — friction abrasion.'},{term:'Grease collar',meaning:'Lubricant from barrel wiped on skin.'},{term:'Burning',meaning:'Singed skin/hair from muzzle flame; ≤ 15 cm.'},{term:'Blackening',meaning:'Smoke deposit; ≤ 30 cm; washes off.'},{term:'Tattooing',meaning:'Embedded powder; ≤ 60 cm; does NOT wash off.'}],
      nodes: nodeList(['entry-definition','entry-hole','entry-abrasion','entry-grease','entry-burning','entry-blackening','entry-tattooing','entry-pyq']),
      mcqs: MCQS['FA-04']
    },
    { id: 'FA-05', title: 'Entry vs Exit Wounds', shortTitle: 'Entry vs Exit', svg: SVG_FA05,
      prereqs: [{term:'Bone bevel',meaning:'Cone fracture in skull widening in direction of bullet travel.'},{term:'Werkgartner sign',meaning:'Muzzle imprint on skin from contact gunshot.'},{term:'Kronlein shot',meaning:'Bursting head from contact high-velocity firearm.'},{term:'Shored exit',meaning:'Exit through clothing pressed against skin shows abrasion (mimics entry).'}],
      nodes: nodeList(['exit-features','entry-summary','exit-summary','skull-bevel','kronlein']),
      mcqs: MCQS['FA-05']
    },
    { id: 'FA-06', title: 'Range Estimation — Rifled', shortTitle: 'Range — Rifled', svg: SVG_FA06,
      prereqs: [{term:'Contact',meaning:'Muzzle on skin — burning, blackening, tattooing, Werkgartner.'},{term:'Close ≤ 30 cm',meaning:'Blackening + tattooing prominent.'},{term:'Near 30-60 cm',meaning:'Tattooing only (no blackening/burning).'},{term:'Distant &gt; 60 cm',meaning:'Only collar present; range unknown.'}],
      nodes: nodeList(['range-contact','range-close','range-near','range-distant','range-summary','werkgartner']),
      mcqs: MCQS['FA-06']
    },
    { id: 'FA-07', title: 'Shotgun Range &amp; Patterns', shortTitle: 'Shotgun Range', svg: SVG_FA07,
      prereqs: [{term:'Rat-hole',meaning:'Central hole + satellite pellets at 1-3 m range.'},{term:'Wad in wound',meaning:'Range ≤ 3 m.'},{term:'Pellet spread rule',meaning:'Spread (in) ≈ range (yards) × 1 for cylinder bore.'},{term:'Slug',meaning:'Single shotgun projectile; behaves like a bullet.'}],
      nodes: nodeList(['shotgun-contact','shotgun-close','shotgun-medium','shotgun-distant','shotgun-rule','shotgun-entry-exit']),
      mcqs: MCQS['FA-07']
    },
    { id: 'FA-08', title: 'GSR Tests &amp; Sample Collection', shortTitle: 'GSR &amp; Samples', svg: SVG_FA08,
      prereqs: [{term:'GSR',meaning:'Gunshot residue — powder + primer particles on hand.'},{term:'Dermal nitrate test',meaning:'Obsolete paraffin test — many false positives.'},{term:'SEM-EDX',meaning:'Gold standard — identifies Pb-Sb-Ba spheroidal particles.'},{term:'Walker test',meaning:'Nitrite detection around wound for range.'},{term:'Comparison microscope',meaning:'Bullet striations → weapon match.'}],
      nodes: nodeList(['gsr-definition','gsr-dermal','gsr-aas','gsr-sem','gsr-other','gsr-samples','gsr-bullet-id']),
      mcqs: MCQS['FA-08']
    },
    { id: 'FA-09', title: 'Bomb Blast Injuries — 4 Mechanisms', shortTitle: 'Bomb Blast', svg: SVG_FA09,
      prereqs: [{term:'Overpressure',meaning:'High-pressure shock wave from blast — primary injury.'},{term:'Blast lung',meaning:'Pulmonary haemorrhage at air-tissue interface; classic primary.'},{term:'TM rupture',meaning:'Tympanic membrane ruptures at ~5 psi; most sensitive primary marker.'},{term:'IED',meaning:'Improvised explosive device; often with nails/bolts for secondary injury.'}],
      nodes: nodeList(['blast-overview','blast-primary','blast-secondary','blast-tertiary','blast-quaternary','blast-lung','blast-autopsy']),
      mcqs: MCQS['FA-09']
    },
    { id: 'FA-10', title: 'Suicidal vs Homicidal Firearm Death', shortTitle: 'Manner of Death', svg: SVG_FA10,
      prereqs: [{term:'Suicide markers',meaning:'Contact, favourable site, weapon in hand, GSR on hand.'},{term:'Homicide markers',meaning:'Distant range, multiple wounds, defence wounds, no GSR on victim.'},{term:'Case-based interpretation',meaning:'QBank LAQ: chest wound with blackening → close range rifled firearm.'}],
      nodes: nodeList(['suicidal-fa','homicidal-fa','case-scenario','fa-medicolegal']),
      mcqs: MCQS['FA-10']
    }
  ],
  diffTables: DIFF_TABLES,
  subjectiveQs: SUBJ,
  highYield: [
    '<strong>Rifled</strong> = spiral grooves · single bullet · high velocity (300-900 m/s) · LONG range · striations on bullet',
    '<strong>Smooth-bore</strong> = no grooves · pellets or slug · LOW velocity · short range · choke controls spread',
    '<strong>Velocity classes</strong>: Low &lt; 350 · Medium 350-600 · High &gt; 600 m/s (HV → temp cavity, hydraulic shock)',
    '<strong>Cartridge components</strong>: bullet · case · propellant · primer (Pb-Sb-Ba primer = GSR basis)',
    '<strong>Dumdum bullet</strong> = expanding mushroom action → MAXIMUM damage <strong>[NEET-PG 2016 Q29]</strong>',
    'NEET-PG 2016 Q30 — "jacket opens at base" = Dumdum (base-opening variant)',
    '<strong>Tandem</strong> = 2 bullets from misfire residue · <strong>Souvenir</strong> = retained · <strong>Ricochet</strong> = deflected (key-hole entry)',
    'Shotgun cartridge: <strong>brass+primer · powder · wads · pellets · over-shot wad</strong>',
    '<strong>Wad inside wound</strong> = range ≤ 3 m (wads fall off beyond 2-3 m)',
    'Choke (cylinder → improved → modified → full) controls pellet spread; tightest = full',
    'Rule of thumb: spread (in) ≈ range (yards) × 1 for cylinder bore shotgun',
    '<strong>Entry wound</strong> — round, SMALLER than bullet, inverted, abrasion (dirt) collar ★ at all ranges',
    '<strong>Exit wound</strong> — irregular, LARGER, everted, NO collar, NO burning/blackening/tattooing',
    'Skull bone bevel widens in DIRECTION OF TRAVEL — entry inward, exit outward (★ key autopsy sign)',
    '<strong>Burning</strong> ≤ 15 cm · <strong>Blackening</strong> ≤ 30 cm (washes) · <strong>Tattooing</strong> ≤ 60 cm (doesn\'t wash) · "BBT decay"',
    'Burning + blackening + tattooing + dirt collar = <strong>CLOSE shot entry</strong> <strong>[NEET-PG 2019 Q6]</strong>',
    'Tattooing only (no blackening/burning) = NEAR range (30-60 cm) <strong>[NEET-PG 2022 Q4 — pistol near shot]</strong>',
    '<strong>Werkgartner sign</strong> = muzzle imprint on skin = CONTACT range · <strong>cherry-red</strong> CO in tract',
    '<strong>Kronlein shot</strong> = bursting head from contact high-velocity firearm (shotgun / rifle)',
    'Shotgun patterns: contact (cruciform) → close (single hole) → medium (rat-hole) → distant (scatter)',
    '<strong>SEM-EDX</strong> = GOLD STANDARD GSR test (identifies Pb-Sb-Ba spheroidal primer particles)',
    'Dermal nitrate (paraffin) test = OBSOLETE (false positives from urine, tobacco, fertiliser)',
    '<strong>Modified Griess</strong> for range; <strong>Walker test</strong> for nitrite particles; <strong>IBIS</strong> for cross-case bullet match',
    'Collect GSR within 6 hours; detectable up to 24 h; hand washing removes it',
    'Bomb blast — 4 mechanisms: <strong>Primary (shock wave)</strong> · <strong>Secondary (fragments)</strong> · <strong>Tertiary (hurled)</strong> · <strong>Quaternary (burns, crush)</strong>',
    '<strong>Blast lung</strong> = classic primary blast injury (bat-wing haemorrhage, sub-pleural petechiae)',
    '<strong>TM rupture</strong> = most sensitive primary blast marker (ruptures at ~5 psi)',
    'Most COMMON blast injury in survivors = <strong>SECONDARY</strong> (fragments)',
    'Most DISTINCTIVE blast injury forensically = PRIMARY (blast lung, internal damage without external)',
    'Bowel rupture = terminal ileum / colon most vulnerable (gas-filled segments)',
    'SUICIDE pattern: contact range · favourable site · weapon in hand · GSR on hand · single wound',
    'HOMICIDE pattern: distant · multiple · defence wounds · GSR absent on victim · wounds often on back',
    'BNS 117/118 (grievous + dangerous weapon) · BNS 101/103 (murder) · Arms Act 1959'
  ]
};
})();
