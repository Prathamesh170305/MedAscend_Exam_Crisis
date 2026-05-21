/* Surgical completion of Ch 2 data.js — adds NODES, MCQs, DTs, Subj,
   rewrites the diagrams array with proper nodes + mcqs, sets highYield. */
const fs = require('fs');
const path = require('path');
const DATA = path.resolve(__dirname, '../02_chapters/medical-jurisprudence/data.js');
let data = fs.readFileSync(DATA, 'utf8');

const NODES_ADDITIONAL = `
  'negligence-duty': { label: 'Duty of Care (Negligence Component 1)', info: '<p>The first element of negligence — the doctor must owe a <strong>legal duty of care</strong> to the patient.</p><p><strong>When duty arises:</strong> The moment a doctor-patient relationship is established. This can be explicit (acceptance in OPD) or implicit (emergency in casualty).</p><p><strong>Good Samaritan rule:</strong> A doctor who voluntarily aids a stranger in emergency does not owe duty until intervention begins — and is protected from later liability under Good Samaritan provisions.</p><p>Govt-employed doctors on duty owe a duty to all patients of the institution.</p>', tags: ['Component 1 of 4', 'Doctor-patient relationship'] },
  'negligence-dereliction': { label: 'Dereliction / Breach (Negligence Component 2)', info: '<p>Second element — the doctor <strong>breached the standard of care</strong> that a reasonably skilled doctor would have met in the same circumstances.</p><p><strong>Bolam Test (1957):</strong> A doctor is not negligent if he acted in accordance with a practice accepted by a responsible body of medical opinion. India\\\'s Supreme Court applies a modified Bolam (Bolitho test) — the practice must also be logical and reasonable.</p><p><strong>Common breaches:</strong> wrong-site surgery, retained foreign body, misdiagnosis from inadequate history, failure to refer to a specialist.</p>', tags: ['Component 2 of 4', 'Bolam test'] },
  'negligence-direct': { label: 'Direct Causation (Negligence Component 3)', info: '<p>Third element — there must be a <strong>direct causal link</strong> between the breach and the patient\\\'s injury.</p><p><strong>"But for" test:</strong> But for the doctor\\\'s breach, would the harm have occurred? If yes (harm would have happened anyway), causation is not established.</p><p><strong>Chain of causation can be broken by:</strong></p><ul><li><strong>Novus actus interveniens</strong> — a new intervening event</li><li>Patient\\\'s own negligence (non-compliance)</li><li>Pre-existing disease unrelated to the breach</li></ul>', tags: ['Component 3 of 4', '"But for" test'] },
  'negligence-damage': { label: 'Damage (Negligence Component 4)', info: '<p>Fourth element — the patient must have <strong>actually suffered damage / injury / loss</strong>.</p><p><strong>Types of damage:</strong> physical injury, permanent disability, death, mental suffering, financial loss (cost of further treatment, lost income), loss of consortium, loss of reasonable expectations.</p><p><strong>Damages awarded:</strong> Compensatory (covering actual loss) ± Exemplary / Punitive (in cases of gross negligence to punish and deter).</p><p><strong>Critical rule:</strong> No damage = no case. Even if duty + breach + causation are proved, without quantifiable damage no negligence suit can succeed.</p>', tags: ['Component 4 of 4', 'No damage → no case'] },

  'def-volenti': { label: 'Volenti Non Fit Injuria', info: '<p>Latin: <em>"To one who volunteers, no injury is done"</em>.</p><p>A patient who has knowingly accepted a risk (through informed consent) cannot later sue for that specific risk materialising.</p><p><strong>Application:</strong> After full informed consent disclosing material risks, if a disclosed complication occurs, the patient is deemed to have accepted that risk.</p><p><strong>Limit:</strong> Does NOT cover negligent care. Accepting the risk of surgery does not mean accepting below-standard surgery.</p>', tags: ['Informed consent defence'] },
  'def-contributory': { label: 'Contributory Negligence', info: '<p>A <strong>partial defence</strong> — patient\\\'s own negligence contributed to the harm.</p><p><strong>Examples:</strong></p><ul><li>Patient hid relevant history (allergies)</li><li>Failed to take prescribed medication</li><li>Discharged self against medical advice (DAMA)</li><li>Did not return for follow-up</li></ul><p><strong>Effect:</strong> Damages are reduced in proportion to the patient\\\'s share of fault. If patient is 30 % at fault, damages are cut by 30 %.</p>', tags: ['Partial defence', 'Reduces damages'] },
  'def-resjudicata': { label: 'Res Judicata', info: '<p>Latin: <em>"A matter already decided"</em>.</p><p>Once a court has decided a dispute between specific parties, the same parties cannot re-litigate the same matter in another forum.</p><p><strong>Limit:</strong> Different causes of action (e.g., criminal and civil) can run in parallel — res judicata only bars identical claims.</p>', tags: ['One verdict bars relitigation'] },
  'def-misadventure': { label: 'Therapeutic Misadventure', info: '<p>An <strong>unforeseeable adverse outcome</strong> despite proper care — sometimes called "an act of God in medicine".</p><p><strong>Examples:</strong> idiosyncratic drug reaction, anaesthetic death despite normal preoperative screening, rare allergic reaction that was not predictable.</p><p><strong>Effect:</strong> Complete defence — there is no negligence because no reasonable doctor could have foreseen the outcome.</p><p><strong>Key distinction:</strong> Negligence = foreseeable harm. Misadventure = unforeseeable harm. The two are mutually exclusive.</p>', tags: ['Complete defence', 'Unforeseeable harm'] },
  'def-limitation': { label: 'Statute of Limitation', info: '<p>Lawsuits must be filed within a prescribed time limit from the date of cause of action.</p><p><strong>Time limits in India:</strong></p><ul><li>Tort (civil court) — <strong>3 years</strong> from cause</li><li>Consumer dispute — <strong>2 years</strong> from cause</li><li>Criminal — varies by offence</li></ul><p><strong>"Discoverability" exception:</strong> Clock starts when patient discovered (or should have discovered) the harm — relevant for retained-foreign-body cases where the harm is hidden for years.</p>', tags: ['Tort 3 yrs', 'Consumer 2 yrs'] },
  'def-standard': { label: 'Acted to Standard of Care', info: '<p>The strongest defence: doctor met the standard expected of a reasonably skilled professional.</p><p><strong>Bolam Test:</strong> Acted in accordance with a practice accepted by a responsible body of medical opinion.</p><p><strong>Indian update (Bolitho test):</strong> The practice must also be logical and reasonable — courts may scrutinise the opinion itself, not just defer to it blindly.</p><p>Best supported by expert testimony from senior doctors of the same specialty.</p>', tags: ['Strongest defence', 'Bolam + Bolitho'] },

  'res-ipsa': { label: 'Res Ipsa Loquitur', info: '<p>Latin: <em>"The thing speaks for itself"</em>. A doctrine where the very occurrence of the injury is itself proof of negligence — the patient need not prove specific acts.</p><p><strong>Effect:</strong> Shifts the burden of proof from patient to doctor — now the doctor must prove he was NOT negligent.</p><p><strong>Three conditions to invoke:</strong></p><ol><li>The injury does not ordinarily occur without negligence</li><li>The thing causing harm was under doctor\\\'s exclusive control</li><li>The patient did not contribute to the harm</li></ol><p><strong>Classic examples:</strong> retained surgical gauze, wrong-site surgery, transfusion of wrong blood group. The QBank gauze-post-hysterectomy case is a textbook Res Ipsa scenario.</p><p><strong>Indian landmark:</strong> Spring Meadows Hospital v Harjol Ahluwalia (1998).</p>', tags: ['Burden shifts to doctor', '⭐ High-yield', 'Gauze case'] },
  'vicarious-liability': { label: 'Vicarious Liability', info: '<p>The doctrine that holds an <strong>employer / superior liable</strong> for the negligent acts of his employee / subordinate, done in the course of employment.</p><p><strong>Latin maxim:</strong> <em>Respondeat superior</em> — "let the master answer".</p><p><strong>Three conditions:</strong></p><ol><li>Employer-employee relationship exists</li><li>Negligent act was in the course of employment</li><li>Damage was caused to a third party</li></ol><p><strong>Captain of the Ship doctrine:</strong> A surgeon-in-charge of OT is liable for acts of the entire team during surgery. (Now diluted — modern view is each professional is liable for own acts.)</p><p><strong>NOT vicarious:</strong> independent consultant\\\'s acts, acts outside scope of employment ("frolic of one\\\'s own"). Both employer AND employee may be jointly sued in India.</p>', tags: ['Hospital liable for doctor', 'Respondeat superior', '⭐ High-yield'] },

  'secrecy-rule': { label: 'Professional Secrecy — The Rule', info: '<p>A doctor must <strong>NOT disclose any information</strong> learnt about a patient in the course of professional duty — whether from the patient himself, his relatives, his condition, or his records.</p><p><strong>Origin:</strong> Hippocratic Oath · codified in IMC Code of Ethics 2002 · breach = professional misconduct.</p><p>The rule is not absolute — see the seven recognised exceptions where disclosure is permitted or even mandatory.</p>', tags: ['Hippocratic Oath', 'IMC Ethics 2002'] },
  'exception-court': { label: 'Exception 1 — Court Order', info: '<p>A doctor <strong>MUST disclose</strong> if directed by a court of law.</p><p><strong>Includes:</strong> producing records under subpoena, deposing as expert witness, answering specific questions directed by the judge.</p><p><strong>Refusal = contempt of court</strong>, punishable by fine and/or imprisonment.</p>', tags: ['Mandatory', 'Refusal = contempt'] },
  'exception-notifiable': { label: 'Exception 2 — Notifiable Diseases', info: '<p><strong>Statutory duty to report</strong> to public-health authorities — overrides confidentiality.</p><p><strong>Examples of notifiable diseases:</strong> TB, cholera, plague, COVID-19, leprosy, measles, diphtheria, polio, yellow fever, viral hepatitis, dengue, malaria (in some states), HIV (with specific consent caveats), all births and deaths.</p><p>List varies by state — check local public health regulations.</p>', tags: ['Public health', 'Mandatory reporting'] },
  'exception-thirdparty': { label: 'Exception 3 — Third-party Risk', info: '<p>If an identifiable third party is at <strong>imminent, serious risk</strong>, disclosure to them or the police is permitted (sometimes mandatory).</p><p><strong>Examples:</strong></p><ul><li>HIV-positive patient hiding diagnosis from sexual partner / spouse</li><li>Epileptic patient who refuses to stop driving</li><li>Psychiatric patient threatening specific harm to a named person (Tarasoff doctrine)</li><li>Communicable-disease patient working in a high-risk setting</li></ul><p>Disclosure should be the <strong>minimum necessary</strong> to avert the risk.</p>', tags: ['Tarasoff doctrine', 'Imminent harm'] },
  'exception-self-interest': { label: 'Exception 4 — Doctor\\\'s Self-defence', info: '<p>A doctor sued for negligence or accused of misconduct may disclose relevant patient information in his own defence.</p><p><strong>Examples:</strong> defending a malpractice suit, responding to a consumer complaint, answering an SMC inquiry.</p><p>Should be limited to information directly relevant to the defence.</p>', tags: ['Doctor\\\'s defence right'] },
  'exception-crime': { label: 'Exception 5 — Crime / Police Duty', info: '<p>Information about a <strong>serious offence</strong> must be reported to police — there is a legal duty under §39 CrPC (now §195 BNSS).</p><p><strong>Mandatory reporting examples:</strong> gunshot wound, attempted suicide, poisoning, criminal abortion, child abuse, sexual assault on a minor (POCSO).</p><p>Failure to report a knowable serious offence can itself be a punishable offence.</p>', tags: ['§39 CrPC / §195 BNSS', 'Mandatory'] },
  'exception-employer': { label: 'Exception 6 — Employer / Insurer Exam', info: '<p>When a medical examination is conducted at the request of an employer or insurer — and the patient has consented to the exam knowing its purpose — disclosure of findings to the employer / insurer is permitted.</p><p><strong>Examples:</strong> pre-employment medical, insurance medical exam, fitness-for-duty exam for armed forces / pilots / drivers.</p>', tags: ['Pre-employment', 'Insurance exam'] },
  'exception-consent': { label: 'Exception 7 — Patient\\\'s Own Consent', info: '<p>If the patient himself expressly consents to disclosure, the doctor may disclose.</p><p><strong>Common situations:</strong> patient asks for records to be shared with another doctor for second opinion, employer (with patient knowledge), family member, insurance company processing a claim.</p><p>Consent must be <strong>informed, voluntary, specific, and ideally in writing</strong>.</p>', tags: ['With patient consent', 'Ideally written'] },

  'misconduct-definition': { label: 'Professional Misconduct — Definition', info: '<p>Conduct of a doctor which is considered <strong>disgraceful or dishonourable</strong> by his professional colleagues of good repute and competence.</p><p>Also called <strong>"infamous conduct"</strong>. The standard is set by the medical profession itself, not by lay people.</p><p>Punishable by warning → temporary suspension → permanent erasure from the register (de-licensing).</p>', tags: ['Infamous conduct', 'IMC Code 2002'] },
  'six-As-misconduct': { label: 'The 6 A\\\'s — Memory Aid', info: '<p>A traditional memory aid for the most common forms of professional misconduct:</p><ol><li><strong>A</strong>dultery (with patient / patient\\\'s relative)</li><li><strong>A</strong>ssociation (with unqualified persons)</li><li><strong>A</strong>bortion (criminal — outside MTP Act)</li><li><strong>A</strong>ssociated certificate of efficiency to quacks</li><li><strong>A</strong>lcohol (practising under influence)</li><li><strong>A</strong>ddiction (habitual drug use)</li></ol>', tags: ['Memory aid'] },
  'A-adultery': { label: 'Adultery (1st A)', info: '<p>Voluntary sexual intercourse with a married female other than the doctor\\\'s own wife.</p><p><strong>Especially serious when:</strong> the female is a patient or a patient\\\'s relative — adds the dimension of abuse of doctor-patient trust.</p>', tags: ['Abuse of trust'] },
  'A-association': { label: 'Association with Unqualified (2nd A)', info: '<p>Associating with or employing an unqualified person to perform medical work.</p><p><strong>Examples:</strong> letting a quack assistant operate, signing certificates prepared by an unqualified person, allowing such persons to consult patients in your clinic.</p>', tags: ['Quack assistants'] },
  'A-abortion': { label: 'Criminal Abortion (3rd A)', info: '<p>Performing or assisting in an abortion <strong>outside the MTP Act 1971 framework</strong>.</p><p><strong>Legal MTP:</strong> up to 20 weeks (one doctor\\\'s opinion); 20-24 weeks (two doctors + specific categories under 2021 amendment).</p><p>Beyond these limits = criminal abortion = professional misconduct + criminal liability.</p>', tags: ['MTP Act compliance'] },
  'A-associated-unqualified': { label: 'Endorsing Quacks (4th A)', info: '<p>Issuing a certificate of efficiency in modern medicine to an unqualified or non-medical person.</p><p>Also includes <strong>fee splitting / dichotomy</strong> — taking or giving commission to colleagues for referrals.</p>', tags: ['Fee splitting'] },
  'A-alcohol': { label: 'Practising Under Alcohol (5th A)', info: '<p>Practising medicine while under the influence of alcohol or any intoxicating drug.</p><p><strong>If harm caused:</strong> may escalate to <strong>criminal negligence</strong> (rash / negligent act) — exactly the situation in the NEET-PG 2022 drunk-surgeon question.</p>', tags: ['Can become criminal negligence'] },
  'A-addiction': { label: 'Habitual Addiction (6th A)', info: '<p>Habitual drug-taking by the doctor — including misuse of his prescription privilege to obtain controlled drugs for personal use.</p><p>Self-prescription of NDPS substances is grounds for removal from the register.</p>', tags: ['Self-prescription = grounds'] },
  'other-misconduct': { label: 'Other Acts of Misconduct', info: '<p>Beyond the 6 A\\\'s, these acts also constitute professional misconduct:</p><ul><li>False certificates (birth, death, fitness, sickness)</li><li>Dichotomy / fee splitting</li><li>Improper advertising (large signboards, claims of cure, testimonials)</li><li>Sex-determination of foetus (PCPNDT Act violation)</li><li>Not maintaining indoor medical records for 3 years</li><li>Not displaying registration number on clinic / prescription / certificate</li><li>Conviction for any offence involving moral turpitude</li></ul>', tags: ['Beyond the 6 As'] },

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

  'records-overview': { label: 'Medical Records — Maintenance', info: '<p>Indoor medical records must be maintained by every doctor / hospital for <strong>at least 3 years</strong> (IMC Regulations 2002 §1.3.1).</p><p><strong>Patient\\\'s rights:</strong> Patient or his authorised representative may request a copy. It must be provided within <strong>72 hours</strong> of the request.</p><p><strong>Format:</strong> legible, dated, signed; corrections by strike-through + initial only — no white-out or overwriting.</p><p><strong>Failure to maintain records</strong> = professional misconduct AND grounds for adverse inference in negligence litigation (court may infer negligence from poor record-keeping).</p>', tags: ['3-year retention', '72-hour copy', 'IMC §1.3.1'] },
  'act-mtp': { label: 'MTP Act 1971 (amended 2021)', info: '<p>The <strong>Medical Termination of Pregnancy Act 1971</strong> permits abortion under specific circumstances by a Registered Medical Practitioner.</p><p><strong>Limits (post-2021 amendment):</strong></p><ul><li>Up to <strong>20 weeks</strong> — 1 doctor\\\'s opinion sufficient</li><li><strong>20–24 weeks</strong> — 2 doctors\\\' opinion + only for specific categories (rape survivors, minors, foetal abnormalities, change in marital status etc.)</li><li>No upper limit if foetal abnormality is diagnosed by Medical Board</li></ul><p>Records under MTP Act = kept for 5 years; consent in Form C; admission register in Form III.</p>', tags: ['20 wk / 20-24 wk', '1 doctor / 2 doctors'] },
  'act-pcpndt': { label: 'PCPNDT Act 1994', info: '<p>The <strong>Pre-Conception and Pre-Natal Diagnostic Techniques Act 1994</strong> prohibits prenatal sex determination and female foeticide.</p><p><strong>Key features:</strong></p><ul><li>Strict regulation of ultrasound clinics</li><li>Mandatory <strong>Form F</strong> for every USG (filled before scan)</li><li>Sex determination of foetus = criminal offence + professional misconduct</li><li><strong>Punishment:</strong> First offence — up to 3 years imprisonment + ₹10,000 fine; subsequent — up to 5 years + ₹50,000 fine</li><li>Conviction → removal from medical register</li></ul>', tags: ['Form F mandatory', '3 yrs + ₹10k first'] },
  'act-organ': { label: 'Transplantation of Human Organs Act 1994', info: '<p>The <strong>THO Act 1994</strong> regulates removal, storage, and transplantation of human organs and tissues.</p><p><strong>Key points:</strong></p><ul><li><strong>Brain death</strong> = legal definition of death for the purposes of organ donation</li><li>Minimum age for donor consent = <strong>18 years</strong></li><li>Commercial dealing in organs = criminal offence</li><li>Authorisation Committee approves unrelated donations</li><li>Cadaveric donation needs declaration by 4 doctors (2 brain-death certification)</li></ul>', tags: ['Brain death = legal death', 'Donor ≥ 18 yrs'] },
  'act-drugs': { label: 'Drugs &amp; Cosmetics Act 1940', info: '<p>The principal law regulating import, manufacture, distribution, and sale of drugs and cosmetics in India.</p><p><strong>Key Schedules:</strong></p><ul><li><strong>Schedule H</strong> — prescription-only drugs (most antibiotics, hormones)</li><li><strong>Schedule H1</strong> — prescription + name recorded in pharmacy register (4th-gen antibiotics, anti-TB)</li><li><strong>Schedule X</strong> — NDPS-equivalent narcotic + psychotropic drugs (special record-keeping)</li></ul><p><strong>§274 (adulteration of drugs)</strong> was a key section under IPC (now under BNS/equivalent) — testable PYQ.</p>', tags: ['Schedules H / H1 / X', 'Adulteration §274'] },
  'act-factory': { label: 'Factories Act 1948', info: '<p>Regulates labour, working conditions, child labour, and safety in industrial establishments.</p><p><strong>Key thresholds (for FMT exams):</strong></p><ul><li>Children under <strong>14 years</strong> cannot work in factories at all</li><li>Adolescents 14-18 yrs need a fitness certificate from a certifying surgeon</li><li>Maximum work hours including overtime = <strong>60 per week</strong></li><li>Mandatory medical examination of young workers</li><li>Notifiable occupational diseases must be reported by the certifying surgeon</li></ul>', tags: ['&lt; 14 no work', 'Max 60 hrs/wk'] },
  'act-constitutional': { label: 'Constitutional Articles on Children', info: '<p>Indian Constitution has several articles protecting children\\\'s welfare:</p><ul><li><strong>Article 21-A</strong> — Right to free and compulsory education (ages 6-14)</li><li><strong>Article 23</strong> — Prohibits trafficking and forced labour</li><li><strong>Article 24</strong> — Prohibits employment of children under 14 in hazardous work</li><li><strong>Article 39(e) &amp; (f)</strong> — Directive Principles to protect childhood</li><li><strong>Article 45</strong> — State to provide early childhood care for under-6</li></ul><p><strong>Article 42 is NOT child-specific</strong> — it deals with maternity relief and just/humane working conditions. This is a classic PYQ trap.</p>', tags: ['Art 21-A · 23 · 24 · 39 · 45', 'Art 42 = maternity'] }
};
`;

const MCQS_ADDITIONAL = `,
  'MJ-04': [
    { stem: 'Which of the following is NOT one of the 4 D\\\'s of medical negligence?', options: ['Duty','Dereliction','Diagnosis','Damage'], answerIdx: 2, explain: 'The 4 D\\\'s are Duty, Dereliction (breach), Direct causation, and Damage. Diagnosis is not one of them.', tag: '[PG-Inspired]' },
    { stem: 'The "Bolam Test" is used to determine:', options: ['Cause of death','Standard of care expected of a doctor','Time of death','Brain-stem death'], answerIdx: 1, explain: 'Bolam Test (1957): a doctor is not negligent if he acted in accordance with a practice accepted by a responsible body of medical opinion.', tag: '[PG-Inspired]' },
    { stem: 'In medical negligence litigation, the burden of proof initially rests on:', options: ['The doctor','The plaintiff (patient)','The State','The court'], answerIdx: 1, explain: 'The plaintiff (patient) must prove all four elements. Burden may shift to the doctor under Res Ipsa Loquitur.', tag: '[UNIV]' }
  ],
  'MJ-05': [
    { stem: 'Which defence is described by the maxim "Volenti non fit injuria"?', options: ['Therapeutic misadventure','Risk willingly accepted by the patient','Contributory negligence','Statute of limitation'], answerIdx: 1, explain: 'Volenti non fit injuria = "to one who volunteers, no injury is done". The patient who consented to a known risk cannot later sue for that risk.', tag: '[PG-Inspired]' },
    { stem: 'The time limit to file a consumer-protection complaint against a doctor is:', options: ['1 year','2 years','3 years','5 years'], answerIdx: 1, explain: 'Consumer dispute — 2 years from cause of action. Tort (civil court) — 3 years.', tag: '[PG-Inspired]' },
    { stem: 'A surgeon returns home from a party after many pegs of alcohol and is called to perform an emergency operation. During the operation, the assisting staff noticed the surgeon\\\'s hands shaking and the instruments falling. He eventually nicks an artery, and the patient collapses. Under which of the following terms will this incident be tried?', options: ['Criminal negligence','Civil negligence not amounting to criminal negligence','Therapeutic misadventure','Dichotomy'], answerIdx: 0, explain: 'Operating under the influence of alcohol = gross / rash / culpable conduct → criminal negligence (§106 BNS / old §304-A IPC). Not therapeutic misadventure (which is unforeseeable).', tag: '[NEET-PG 2022]' }
  ],
  'MJ-06': [
    { stem: 'Retained surgical sponge in the abdomen after hysterectomy is a classic example of:', options: ['Therapeutic misadventure','Volenti non fit injuria','Res Ipsa Loquitur','Vicarious liability'], answerIdx: 2, explain: 'Res Ipsa Loquitur — "the thing speaks for itself". The retained gauze cannot happen without negligence; burden shifts to doctor to disprove.', tag: '[QBank-Inspired]' },
    { stem: 'Vicarious liability is based on which Latin maxim?', options: ['Volenti non fit injuria','Respondeat superior','Res ipsa loquitur','Actus reus'], answerIdx: 1, explain: '"Respondeat superior" = "let the master answer". Hospital/employer liable for employee/doctor\\\'s negligence in course of employment.', tag: '[PG-Inspired]' },
    { stem: 'The "Captain of the Ship" doctrine in medical jurisprudence refers to:', options: ['Hospital director\\\'s overall liability','Surgeon-in-charge being liable for OT team acts','Anaesthetist liability during anaesthesia','Senior consultant\\\'s vicarious liability for junior\\\'s acts'], answerIdx: 1, explain: 'Captain of the Ship — the surgeon-in-charge of OT is liable for all acts of the operating team during surgery. Modern view dilutes this; each professional liable for own acts.', tag: '[UNIV]' }
  ],
  'MJ-07': [
    { stem: 'All of the following are recognised exceptions to professional secrecy EXCEPT:', options: ['Court order','Notifiable disease','Patient\\\'s own consent','Curious senior colleague'], answerIdx: 3, explain: 'Casual disclosure to a colleague without need-to-know is NOT an exception. The 7 valid exceptions: court, notifiable disease, third-party risk, doctor self-defence, crime/police, employer-insurer, patient consent.', tag: '[PG-Inspired]' },
    { stem: 'A doctor diagnoses HIV in a patient who refuses to disclose the diagnosis to his fiancée before their wedding. The doctor may:', options: ['Wait until patient consents','Disclose to the fiancée after counselling the patient','Maintain absolute secrecy','Inform police only'], answerIdx: 1, explain: 'Third-party-risk exception. Doctor should first try to persuade the patient to disclose; if refused, doctor may disclose to the partner to protect her from foreseeable harm.', tag: '[PG-Inspired]' }
  ],
  'MJ-08': [
    { stem: 'Section 89 IPC deals with criminal responsibility of:', options: ['Insane person','Child','Drunken person','Doctor'], answerIdx: 1, explain: '§89 IPC — acts done in good faith for the benefit of a child under 12 or person of unsound mind, by or with consent of guardian. (Related: §82 IPC: child below 7 yrs has no criminal responsibility.)', tag: '[NEET-PG 2016]' },
    { stem: 'Which one of the following is NOT among the "6 A\\\'s" of professional misconduct?', options: ['Adultery','Abortion (criminal)','Alcohol','Advertising'], answerIdx: 3, explain: 'The 6 A\\\'s are Adultery, Association, Abortion, Associated (with unqualified), Alcohol, Addiction. Improper advertising is also misconduct but not in the 6 A list.', tag: '[UNIV]' }
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
    { stem: 'You are posted as an intern in casualty. Which among the following patients with fracture will be your 1st priority to call ortho PG and inform?', options: ['Patient\\\'s finger is blackening','Patient can\\\'t extend his arm','A 10 cm abrasion','Intra articular fracture of Elbow Joint'], answerIdx: 0, explain: 'Blackening finger = compartment syndrome or vascular compromise → limb-threatening emergency, immediate priority over other fractures.', tag: '[NEET-PG 2018]' }
  ]
};
`;

const DIFF_TABLES_NEW = `[
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
      ['Concept','Burden of proof shifts to doctor','Employer liable for employee\\\'s acts'],
      ['Trigger','Self-evident negligence (gauze, wrong-site)','Employer-employee relationship + act in course'],
      ['Who pays?','The doctor (directly)','The hospital / employer'],
      ['Doctor\\\'s own liability','Yes — directly','Yes — can still be sued personally'],
      ['Classic example','Retained gauze after surgery','Hospital sued for nurse\\\'s drug error'],
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
      ['Concept','Patient voluntarily accepted risk','Patient\\\'s own negligence contributed'],
      ['Effect on damages','Full bar — no damages','Damages reduced proportionate to fault'],
      ['Example','Surgery with informed consent — disclosed risk materialised','Patient hid drug allergy / stopped medications mid-course'],
      ['Burden of proving','Doctor (must show patient knew + accepted)','Doctor (must show patient\\\'s share of fault)']
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
      ['Doctor\\\'s liability','Yes','No'],
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
];`;

const SUBJ_NEW = `[
  {
    id: 'SAQ-2.1', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Write a note on medical records and their maintenance.',
    answer: \`<h4>Definition</h4>
<p>A medical record is a chronological written/electronic document containing all information related to a patient\\\'s diagnosis, treatment, and progress during a clinical encounter.</p>
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
<p>Professional misconduct + adverse inference in negligence litigation (the court may infer negligence from the absence of records).</p>\`,
    sources: ['MJ-11 (Records + Acts)'],
    jumpToDiagram: 'MJ-11'
  },
  {
    id: 'SAQ-2.2', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'Explain Professional secrecy and its exceptions.',
    answer: \`<h4>Definition</h4>
<p>Professional secrecy is the doctor\\\'s ethical and legal obligation to keep confidential all information learnt about a patient in the course of professional duty — whether from the patient himself, his relatives, his condition, or his records.</p>
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
<li><strong>Doctor\\\'s self-defence:</strong> Disclosure of relevant patient information in defending a malpractice suit, consumer complaint, or SMC inquiry.</li>
<li><strong>Crime / police duty:</strong> §39 CrPC / §195 BNSS — mandatory reporting of gunshot wound, attempted suicide, poisoning, criminal abortion, child abuse, sexual assault on minor (POCSO).</li>
<li><strong>Employer / insurer exam:</strong> When exam is conducted at their request, with patient\\\'s consent — disclosure of findings is permitted.</li>
<li><strong>Patient\\\'s own consent:</strong> Express informed consent for disclosure (second opinion, insurance claim, etc.).</li></ol>
<h4>Breach</h4>
<p>Unjustified breach = professional misconduct under IMC Code → punishable by SMC / EMRB (warning, suspension, or erasure from register).</p>\`,
    sources: ['MJ-07 (Professional Secrecy)'],
    jumpToDiagram: 'MJ-07'
  },
  {
    id: 'SAQ-2.3', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'A 55-year-old woman is admitted to the hospital with acute abdomen. She had history of abdominal hysterectomy 3 months ago. On investigation, there is a mesh cloth-like foreign body seen. On laparotomy, a surgical gauze was retrieved. Explain the legal implications and the doctrine applicable.',
    answer: \`<h4>Identification of the case</h4>
<p>A retained surgical gauze inside the abdomen after a hysterectomy is a textbook example of <strong>medical negligence</strong> attracting the doctrine of <strong>Res Ipsa Loquitur</strong>.</p>
<h4>Doctrine applied — Res Ipsa Loquitur</h4>
<p>Latin: <em>"The thing speaks for itself"</em>. A doctrine where the very fact of injury proves negligence — the plaintiff need not prove specific acts of breach.</p>
<h4>Three conditions to invoke Res Ipsa (all satisfied here)</h4>
<ol><li>The injury (retained foreign body) does NOT ordinarily occur without negligence.</li>
<li>The instrument causing harm (the gauze) was in the doctor\\\'s exclusive control during surgery.</li>
<li>The patient did not contribute to the harm.</li></ol>
<h4>Effect of the doctrine</h4>
<p>The burden of proof shifts from the patient to the doctor — now the doctor must prove he was NOT negligent (a near-impossible task in a gauze case).</p>
<h4>Components of negligence in this case (all 4 D\\\'s satisfied)</h4>
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
<p>Therapeutic misadventure does NOT apply — sponge retention is foreseeable and preventable. Volenti non fit injuria does NOT apply — patient did not consent to having a gauze left behind.</p>\`,
    sources: ['MJ-06 (Res Ipsa + Vicarious)','MJ-04 (Negligence 4D)','MJ-09 (CPA)'],
    jumpToDiagram: 'MJ-06'
  },
  {
    id: 'SAQ-2.4', type: 'SAQ', marks: 5, time: '~12 min', tag: 'QBank',
    question: 'A child is brought to the hospital by a bystander after being found injured, unconscious on the side of the road. Explain whether a case of medical negligence can be filed against the doctor. Who can give consent in this case? Define criteria for a valid consent.',
    answer: \`<h4>Medical negligence — can it be filed?</h4>
<p>Yes, in principle a negligence case can be filed against the doctor if the 4 D\\\'s are satisfied: <strong>D</strong>uty, <strong>D</strong>ereliction, <strong>D</strong>irect causation, <strong>D</strong>amage. The fact that the patient is unconscious or a minor does NOT exempt the doctor from the standard of care.</p>
<p><strong>However</strong>, in an emergency, the doctor enjoys the protection of the <strong>doctrine of necessity / implied consent</strong> — life-saving care may be given without explicit consent, and reasonable judgement under emergency conditions is given latitude. Good Samaritan protections also apply.</p>
<h4>Who can give consent in this case?</h4>
<p>Since the patient is (a) a minor and (b) unconscious, and the parents are unavailable, valid consent may come from:</p>
<ol><li><strong>Doctrine of necessity</strong> — for immediate life-saving treatment, the doctor may proceed without anyone\\\'s consent. The law presumes consent of a reasonable patient in an emergency.</li>
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
<p>Doctor should: (1) document the emergency nature, (2) note efforts made to contact parents, (3) record who gave loco parentis consent (if any) with their signature, (4) document the treatment given. Subsequently, obtain parental consent for any further definitive care.</p>\`,
    sources: ['MJ-03 (Consent)','MJ-04 (Negligence 4D)'],
    jumpToDiagram: 'MJ-03'
  },
  {
    id: 'SAQ-2.5', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank',
    question: 'Medico-legal, Socio-cultural and ethical issues related to confidentiality in patient care.',
    answer: \`<h4>Medicolegal aspects of confidentiality</h4>
<ul><li>Codified in <strong>IMC Code of Medical Ethics 2002</strong> as professional misconduct if breached</li>
<li>Recognised as <strong>"privileged communication"</strong> in courts under BSA 2023</li>
<li>Breach can attract: complaint to SMC → suspension/erasure; civil suit for damages; consumer complaint</li>
<li>7 statutory/judicial exceptions exist (court order, notifiable disease, third-party risk, doctor\\\'s defence, crime reporting, employer/insurer exam, patient consent)</li></ul>
<h4>Socio-cultural issues</h4>
<ul><li><strong>Stigma:</strong> Diseases like HIV, TB, mental illness, sexual dysfunction carry social stigma — disclosure can lead to ostracism, job loss, marital breakdown</li>
<li><strong>Joint-family setup:</strong> Patient often comes with multiple relatives who expect to know everything; doctor must elicit patient\\\'s own preference on whom to inform</li>
<li><strong>Female patients:</strong> Patriarchal dynamics — patient may not want husband/in-laws to know about her reproductive history, abortions, contraception</li>
<li><strong>Adolescent patients:</strong> Confidentiality tension when minor wants treatment (contraception, abortion) without parental knowledge</li>
<li><strong>Marriage market:</strong> Disclosure of conditions like epilepsy, infertility, HIV before marriage can derail an alliance</li></ul>
<h4>Ethical issues</h4>
<ul><li><strong>Autonomy vs beneficence:</strong> When patient\\\'s autonomy (refusal to disclose) conflicts with beneficence (protecting a third party at risk)</li>
<li><strong>Truth-telling:</strong> Should family be told a terminal diagnosis before the patient? (Indian tradition often says yes; modern ethics says patient first)</li>
<li><strong>Genetic information:</strong> Hereditary disease affects family members — should they be informed?</li>
<li><strong>Research data:</strong> Anonymised vs identifiable; consent for secondary use</li>
<li><strong>Electronic records:</strong> Cybersecurity, unauthorised access by hospital staff, breach via shared logins</li></ul>
<h4>Practical guidelines for doctors</h4>
<ul><li>Discuss confidentiality early; ask patient who may be informed</li>
<li>Counsel before disclosing to third parties at risk (e.g., HIV partner)</li>
<li>Maintain physical privacy in consultation; lock records; restrict EMR access</li>
<li>Document all decisions about disclosure with rationale</li>
<li>When in doubt, seek institutional ethics committee guidance</li></ul>\`,
    sources: ['MJ-07 (Professional Secrecy)'],
    jumpToDiagram: 'MJ-07'
  },
  {
    id: 'LAQ-2.1', type: 'LAQ', marks: 12, time: '~25-30 min', tag: 'QBank',
    question: 'Define medical negligence. Explain the 4 components of medical negligence. Enumerate the defences available to the doctor against medical negligence. Differentiate between criminal and civil negligence.',
    answer: \`<h4>Definition of Medical Negligence</h4>
<p>Medical negligence is the <strong>breach of duty of care</strong> by a medical professional that results in damage to the patient. It is a tort (civil wrong) and may also be a crime if gross / rash.</p>
<p>In essence: a doctor fails to do what a reasonably competent doctor of the same specialty would have done in similar circumstances, and the patient suffers harm as a result.</p>
<h4>The Four Components (4 D\\\'s) — ALL must coexist</h4>
<ol><li><strong>DUTY of care:</strong> A legal duty owed by doctor to patient. Created when doctor-patient relationship is established (acceptance of case, casualty, govt-employed doctor on duty).</li>
<li><strong>DERELICTION (Breach):</strong> Failure to meet the standard of care expected of a reasonably skilled doctor in the same circumstances. Tested by the <strong>Bolam test</strong> (accepted practice of a responsible body of medical opinion) as modified by Bolitho (must be logical and reasonable). Examples: wrong-site surgery, retained foreign body, misdiagnosis from inadequate history.</li>
<li><strong>DIRECT causation:</strong> Direct causal link between breach and harm. Tested by the <strong>"but for" test</strong> — but for the breach, would the harm have occurred? Chain can be broken by novus actus interveniens, patient\\\'s own negligence, or pre-existing disease.</li>
<li><strong>DAMAGE:</strong> Actual injury / loss suffered. Includes physical injury, disability, death, mental suffering, financial loss. No damage = no case, even if duty + breach + causation exist.</li></ol>
<h4>Defences available to the doctor</h4>
<table><tr><th>Defence</th><th>Brief</th><th>Type</th></tr>
<tr><td><strong>1. Volenti non fit injuria</strong></td><td>Patient consented to known risk</td><td>Complete</td></tr>
<tr><td><strong>2. Contributory negligence</strong></td><td>Patient\\\'s own fault contributed</td><td>Partial — reduces damages</td></tr>
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
<ul><li>Maintain meticulous records (legible, dated, signed)</li><li>Obtain informed written consent for all major procedures</li><li>Follow standard protocols and guidelines</li><li>Refer when out of one\\\'s competence</li><li>Continuing medical education</li><li>Adequate professional indemnity insurance</li></ul>\`,
    sources: ['MJ-04 (Negligence 4D)','MJ-05 (Defences)','DT-2 (Civil vs Criminal Negligence)'],
    jumpToDiagram: 'MJ-04'
  },
  {
    id: 'LAQ-2.2', type: 'LAQ', marks: 12, time: '~25-30 min', tag: 'QBank',
    question: 'Define medical negligence. Differentiate between medical negligence and infamous conduct. Write a note on vicarious liability. What steps should be taken to prevent negligence?',
    answer: \`<h4>Definition of Medical Negligence</h4>
<p>Breach of duty of care by a medical professional that results in damage to the patient. Has 4 elements: Duty, Dereliction, Direct cause, Damage.</p>
<h4>Negligence vs Infamous Conduct (Professional Misconduct)</h4>
<table><tr><th>Feature</th><th>Medical Negligence</th><th>Infamous Conduct (Misconduct)</th></tr>
<tr><td>Definition</td><td>Breach of duty causing damage to patient</td><td>Conduct disgraceful to professional colleagues</td></tr>
<tr><td>Forum</td><td>Civil / Consumer / Criminal court</td><td>State Medical Council / EMRB (NMC)</td></tr>
<tr><td>Standard tested</td><td>Reasonably skilled doctor</td><td>"Disgraceful by colleagues of good repute"</td></tr>
<tr><td>Punishment</td><td>Damages / imprisonment</td><td>Warning → suspension → erasure from register</td></tr>
<tr><td>Damage required?</td><td>Yes (no damage = no case)</td><td>No (bad conduct alone is enough)</td></tr>
<tr><td>Examples</td><td>Wrong-site surgery, retained gauze</td><td>Adultery with patient, fee splitting, false certificate, 6 A\\\'s</td></tr>
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
<li>Surgeon liable for theatre nurse\\\'s failure to count sponges</li>
<li>Senior consultant for junior doctor\\\'s acts under his supervision</li></ul>
<p><strong>Captain of the Ship doctrine:</strong> Surgeon-in-charge of OT is traditionally liable for all acts of the team during surgery. Modern view dilutes this — each professional is liable for own acts; however, the surgeon retains responsibility for overall coordination.</p>
<p><strong>NOT vicariously liable for:</strong> independent consultant\\\'s acts (separate liability); acts outside scope of employment ("frolic of one\\\'s own"); deliberate criminal acts.</p>
<p><strong>Indian landmark case:</strong> Achutrao Haribhau Khodwa v State of Maharashtra (1996) — hospital held vicariously liable for surgeon-employee\\\'s negligence in retained-gauze case.</p>
<p><strong>Practical implications:</strong> Both employer AND employee may be jointly sued. Hospitals typically carry insurance covering vicarious liability.</p>
<h4>Steps to Prevent Negligence</h4>
<ol><li><strong>Record-keeping:</strong> Meticulous, contemporaneous, legible, dated, signed records of every encounter</li>
<li><strong>Consent:</strong> Informed written consent for all major procedures; document risk disclosure</li>
<li><strong>Standard protocols:</strong> Follow evidence-based guidelines (e.g., WHO Surgical Safety Checklist, surgical sponge counts)</li>
<li><strong>Communication:</strong> Clear and empathic communication with patient and family; written discharge instructions</li>
<li><strong>Referral:</strong> Refer promptly when outside one\\\'s competence or when patient needs higher centre</li>
<li><strong>Second opinion:</strong> In complex cases, document consultation with senior colleague</li>
<li><strong>Continuing Medical Education:</strong> Stay current with developments; renew skills</li>
<li><strong>Team work:</strong> Verify counts (sponges, instruments) by 2 people; "time out" before surgery</li>
<li><strong>Indemnity insurance:</strong> Adequate professional indemnity cover</li>
<li><strong>Follow-up:</strong> Schedule follow-up; act on patient complaints early</li>
<li><strong>Quality improvement:</strong> Participate in morbidity / mortality audits</li>
<li><strong>Ethics consultation:</strong> Use institutional ethics committee for difficult decisions</li></ol>\`,
    sources: ['MJ-04','MJ-06 (Vicarious)','MJ-08 (Misconduct)','DT-3 (Negligence vs Misconduct)'],
    jumpToDiagram: 'MJ-06'
  },
  {
    id: 'LAQ-2.3', type: 'LAQ', marks: 12, time: '~25-30 min', tag: 'QBank',
    question: 'Define Medical Negligence. What are its elements? Differentiate between Civil & Criminal Negligence. What are the defences available for Doctors against the charges of Medical Negligence?',
    answer: \`<h4>Definition</h4>
<p>Medical negligence is the breach of a doctor\\\'s duty of care toward a patient, resulting in damage. It is the doctor\\\'s failure to act with the degree of skill and knowledge expected of a reasonably competent professional of the same specialty under similar circumstances.</p>
<h4>Elements (4 D\\\'s)</h4>
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
<li><strong>Contributory negligence</strong> — Patient\\\'s own negligence contributed (hid history, non-compliance, DAMA). Partial defence — reduces damages proportionate to patient\\\'s share of fault.</li>
<li><strong>Res Judicata</strong> — Matter already decided by competent court between the same parties. Procedural bar to re-litigation.</li>
<li><strong>Therapeutic misadventure</strong> — Unforeseeable adverse outcome despite proper care (idiosyncratic drug reaction, rare anaphylaxis). Complete defence — no negligence as harm could not have been foreseen.</li>
<li><strong>Statute of limitation</strong> — Lawsuit filed after the time limit (tort 3 yrs, consumer 2 yrs). Procedural bar. Exception: discoverability rule for hidden harm (e.g., retained gauze discovered late).</li>
<li><strong>Acted to standard of care (Bolam-Bolitho)</strong> — Strongest defence. Doctor acted in accordance with a practice accepted by a responsible body of medical opinion, and that practice is logical/reasonable. Best supported by expert testimony.</li>
<li><strong>Good Samaritan protection</strong> — Doctor providing emergency aid to a stranger is protected from liability for honest assistance.</li>
<li><strong>Doctrine of common knowledge</strong> — In areas where every doctor would know (e.g., basic CPR), expert evidence not needed; but this also makes default easier to prove against doctor.</li></ol>
<h4>Practical points</h4>
<ul><li>Doctor cannot defend by saying "I did my best" — the test is what a reasonably skilled doctor would have done, not subjective best effort.</li>
<li>Honest error of judgement is not negligence (Bolam).</li>
<li>Documentation is the single most powerful real-world defence — "if it wasn\\\'t written, it wasn\\\'t done".</li>
<li>Indemnity insurance covers damages but not criminal liability.</li></ul>\`,
    sources: ['MJ-04','MJ-05','DT-2'],
    jumpToDiagram: 'MJ-04'
  },
  {
    id: 'SAQ-2.6', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Enumerate the four autonomous boards under the National Medical Commission. Briefly mention the role of each.',
    answer: \`<h4>The National Medical Commission (NMC)</h4>
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
<p>The 4-board structure was introduced to address opacity and corruption allegations against the erstwhile MCI. Autonomy of boards is expected to improve accountability and specialisation.</p>\`,
    sources: ['MJ-02 (NMC Structure)'],
    jumpToDiagram: 'MJ-02'
  },
  {
    id: 'SAQ-2.7', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Describe the colour-coded segregation of biomedical waste at source under the BMW Rules 2016.',
    answer: \`<h4>Background</h4>
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
<p><strong>"YRWB" — Yellow (anatomical) · Red (plastics) · White (sharps) · Blue (glass + implants)</strong></p>\`,
    sources: ['MJ-10 (BMW)','DT-9'],
    jumpToDiagram: 'MJ-10'
  },
  {
    id: 'SAQ-2.8', type: 'SAQ', marks: 5, time: '~10 min', tag: 'QBank-Inspired',
    question: 'Outline the pecuniary jurisdiction of the three-tier Consumer Commission hierarchy under the Consumer Protection Act 2019. What is the time limit for filing?',
    answer: \`<h4>Background</h4>
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
<li>Mediation option built in</li></ul>\`,
    sources: ['MJ-09 (CPA)','DT-7'],
    jumpToDiagram: 'MJ-09'
  }
];`;

const HIGHYIELD_NEW = `[
    '<strong>BNS / BNSS / BSA 2023</strong> all came into force on <strong>1 July 2024</strong> · replaced IPC 1860 / CrPC 1973 / IEA 1872',
    '<strong>NMC Act 2019</strong> replaced MCI Act 1956 · MCI dissolved 25 Sept 2020',
    'NMC has <strong>4 autonomous boards</strong>: UGMEB · PGMEB · MARB · <strong>EMRB</strong> (maintains National Medical Register)',
    '<strong>Informed consent</strong> requires: nature, risks, alternatives, consequences of refusal · Samira Kohli landmark (2008)',
    'Age of consent: ≥ 12 yrs exam · <strong>≥ 18 yrs</strong> for surgery / anaesthesia / MTP / organ donation',
    '<strong>4 D\\\'s of negligence</strong>: Duty · Dereliction · Direct cause · Damage · all must coexist',
    '<strong>Bolam test</strong> (1957): acted per practice of responsible body of medical opinion · modified by Bolitho',
    '<strong>Res Ipsa Loquitur</strong>: burden shifts to doctor (retained gauze case)',
    '<strong>Vicarious liability</strong>: hospital liable for doctor\\\'s acts in course of employment (Respondeat superior)',
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
  ]`;

/* === DO THE SURGERY === */

// 1. Insert additional NODES before the closing `};` of NODES
data = data.replace(/(const NODES = \{)([\s\S]*?)(\n\};)/, '$1$2,' + NODES_ADDITIONAL + '$3');

// 2. Append MJ-04..11 entries to MCQS object
data = data.replace(/(const MCQS = \{)([\s\S]*?)(\n\};)/, '$1$2' + MCQS_ADDITIONAL + '$3');

// 3. Replace DIFF_TABLES = []
data = data.replace(/const DIFF_TABLES = \[\];/, 'const DIFF_TABLES = ' + DIFF_TABLES_NEW);

// 4. Replace SUBJ = []
data = data.replace(/const SUBJ = \[\];/, 'const SUBJ = ' + SUBJ_NEW);

// 5. Replace placeholder diagram entries with full nodes+mcqs+prereqs config
const diagramReplacements = {
  'MJ-04': `{ id: 'MJ-04', title: 'Medical Negligence — The 4 D\\\'s', shortTitle: 'Negligence 4 D\\\'s', svg: SVG_MJ04,
      prereqs: [{term:'Duty of care',meaning:'Legal duty owed by doctor to patient — arises with doctor-patient relationship.'},{term:'Dereliction',meaning:'Breach of the standard of care expected of a reasonably skilled doctor.'},{term:'Direct causation',meaning:'Causal link between the breach and the patient\\\'s harm.'},{term:'Damage',meaning:'Actual physical / mental / financial loss suffered by the patient.'},{term:'Bolam test',meaning:'Standard for breach — acted per practice accepted by responsible body of medical opinion.'}],
      nodes: nodeList(['negligence-duty','negligence-dereliction','negligence-direct','negligence-damage']),
      mcqs: MCQS['MJ-04']
    }`,
  'MJ-05': `{ id: 'MJ-05', title: 'Defences against Medical Negligence', shortTitle: 'Negligence Defences', svg: SVG_MJ05,
      prereqs: [{term:'Volenti non fit injuria',meaning:'Patient who knowingly accepted a risk cannot later sue for it.'},{term:'Contributory negligence',meaning:'Patient\\\'s own negligence contributed — reduces damages.'},{term:'Therapeutic misadventure',meaning:'Unforeseeable adverse outcome despite proper care.'},{term:'Res judicata',meaning:'Bar on re-litigation of already-decided matter.'},{term:'Statute of limitation',meaning:'Time limit for filing a lawsuit.'}],
      nodes: nodeList(['def-volenti','def-contributory','def-resjudicata','def-misadventure','def-limitation','def-standard']),
      mcqs: MCQS['MJ-05']
    }`,
  'MJ-06': `{ id: 'MJ-06', title: 'Res Ipsa Loquitur + Vicarious Liability', shortTitle: 'Res Ipsa + Vicarious', svg: SVG_MJ06,
      prereqs: [{term:'Res Ipsa Loquitur',meaning:'Latin: "the thing speaks for itself" — burden of proof shifts to doctor.'},{term:'Vicarious liability',meaning:'Employer liable for employee\\\'s negligent acts done in course of employment.'},{term:'Respondeat superior',meaning:'Latin maxim for vicarious liability — "let the master answer".'},{term:'Captain of the Ship',meaning:'Doctrine making surgeon-in-charge liable for entire OT team during surgery.'}],
      nodes: nodeList(['res-ipsa','vicarious-liability']),
      mcqs: MCQS['MJ-06']
    }`,
  'MJ-07': `{ id: 'MJ-07', title: 'Professional Secrecy + Exceptions', shortTitle: 'Professional Secrecy', svg: SVG_MJ07,
      prereqs: [{term:'Professional secrecy',meaning:'Doctor\\\'s duty to keep patient information confidential.'},{term:'Privileged communication',meaning:'Information shared in doctor-patient relationship protected from disclosure.'},{term:'Notifiable disease',meaning:'Disease that must be reported by law to public health authorities.'},{term:'Tarasoff doctrine',meaning:'Duty to warn identifiable third parties of imminent serious harm.'}],
      nodes: nodeList(['secrecy-rule','exception-court','exception-notifiable','exception-thirdparty','exception-self-interest','exception-crime','exception-employer','exception-consent']),
      mcqs: MCQS['MJ-07']
    }`,
  'MJ-08': `{ id: 'MJ-08', title: 'Professional Misconduct — The 6 A\\\'s', shortTitle: 'Professional Misconduct', svg: SVG_MJ08,
      prereqs: [{term:'Professional misconduct',meaning:'Conduct disgraceful to colleagues of good repute — "infamous conduct".'},{term:'Adultery',meaning:'Voluntary sexual intercourse with married female other than wife.'},{term:'Dichotomy',meaning:'Fee splitting — taking/giving commission for referrals.'},{term:'Moral turpitude',meaning:'Offence involving inherent moral wrongness.'}],
      nodes: nodeList(['misconduct-definition','six-As-misconduct','A-adultery','A-association','A-abortion','A-associated-unqualified','A-alcohol','A-addiction','other-misconduct']),
      mcqs: MCQS['MJ-08']
    }`,
  'MJ-09': `{ id: 'MJ-09', title: 'Consumer Protection Act 2019 + Consumer Fora', shortTitle: 'CPA 2019', svg: SVG_MJ09,
      prereqs: [{term:'CPA 2019',meaning:'Consumer Protection Act 2019 — replaced CPA 1986, effective 20 July 2020.'},{term:'NCDRC',meaning:'National Consumer Disputes Redressal Commission — apex consumer forum.'},{term:'Pecuniary jurisdiction',meaning:'Monetary limit within which a forum can adjudicate.'},{term:'IMA v V.P. Shantha',meaning:'1995 Supreme Court landmark bringing medical services within CPA.'}],
      nodes: nodeList(['cpa-overview','district-forum','state-commission','national-commission','cpa-remedies']),
      mcqs: MCQS['MJ-09']
    }`,
  'MJ-10': `{ id: 'MJ-10', title: 'Biomedical Waste Management — Colour-coded Bins', shortTitle: 'BMW Colour-coded', svg: SVG_MJ10,
      prereqs: [{term:'Biomedical waste (BMW)',meaning:'Waste from diagnosis/treatment/immunisation of humans or animals.'},{term:'BMW Rules 2016',meaning:'Bio-Medical Waste Management Rules under EPA 1986.'},{term:'Incineration',meaning:'High-temperature combustion treatment.'},{term:'Autoclaving',meaning:'High-pressure steam sterilisation (121°C, 15 psi, 60 min).'}],
      nodes: nodeList(['bmw-overview','bin-yellow','bin-red','bin-white','bin-blue','bmw-quantity']),
      mcqs: MCQS['MJ-10']
    }`,
  'MJ-11': `{ id: 'MJ-11', title: 'Medical Records + Key Statutory Acts', shortTitle: 'Records + Acts', svg: SVG_MJ11,
      prereqs: [{term:'IMC Regulations 2002',meaning:'Code of Ethics for medical practitioners; §1.3.1 mandates 3-year record retention.'},{term:'MTP Act',meaning:'Medical Termination of Pregnancy Act 1971 (amended 2021).'},{term:'PCPNDT Act',meaning:'Pre-Conception and Pre-Natal Diagnostic Techniques Act 1994.'},{term:'THO Act',meaning:'Transplantation of Human Organs Act 1994.'},{term:'Schedule H drugs',meaning:'Prescription-only drugs under Drugs &amp; Cosmetics Act.'}],
      nodes: nodeList(['records-overview','act-mtp','act-pcpndt','act-organ','act-drugs','act-factory','act-constitutional']),
      mcqs: MCQS['MJ-11']
    }`
};
for (const [id, replacement] of Object.entries(diagramReplacements)) {
  const escapedId = id.replace(/-/g, '\\-');
  const regex = new RegExp("\\{ id: '" + id + "',[^}]*?mcqs: \\[\\] \\}", 'g');
  if (!regex.test(data)) { console.error('No match for', id); continue; }
  data = data.replace(regex, replacement);
  console.log('  ✓ replaced diagram config:', id);
}

// 6. Replace highYield: []
data = data.replace(/highYield: \[\]/, 'highYield: ' + HIGHYIELD_NEW);

fs.writeFileSync(DATA, data);
console.log('\n✅ Ch 2 surgery complete.');
