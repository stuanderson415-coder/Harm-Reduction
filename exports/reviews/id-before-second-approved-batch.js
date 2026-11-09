// Drugs 101 Knowledge Base - Categorized by Drug Wheel model
export const DRUG_CATEGORIES = [
  { id: "all", name: "All Substances", icon: "sparkles", color: "#64748b" },
  { id: "stimulants", name: "Stimulants", icon: "zap", color: "#f59e0b", desc: "Speed up the central nervous system; increase heart rate, alertness, and energy." },
  { id: "depressants", name: "Depressants", icon: "moon", color: "#3b82f6", desc: "Slow down messages between the brain and body; relax muscles, induce sleep, cause disinhibition." },
  { id: "opioids", name: "Opioids", icon: "shield-alert", color: "#ef4444", desc: "Pain relief and intense sedation; high risk of respiratory depression and fatal overdose." },
  { id: "psychedelics", name: "Psychedelics", icon: "eye", color: "#8b5cf6", desc: "Alter perception, thoughts, emotions, and sensory processing; intense visual/auditory experiences." },
  { id: "dissociatives", name: "Dissociatives", icon: "shuffle", color: "#06b6d4", desc: "Induce feelings of detachment from reality, environment, and physical body." },
  { id: "empathogens", name: "Empathogens", icon: "heart", color: "#ec4899", desc: "Enhance empathy, emotional openness, sensory connection, and social bonding." },
  { id: "cannabinoids", name: "Cannabinoids", icon: "leaf", color: "#10b981", desc: "Act on CB1/CB2 receptors; alter mood, relaxation, time perception, and appetite." }
];

export const SUBSTANCES_DATA = [
  {
    id: "mdma",
    image: { src: 'assets/mdma-crystals.jpg', alt: 'Tan MDMA crystals photographed on foil', author: 'Thawt Hawthje', source: 'https://commons.wikimedia.org/wiki/File:Tan_MDMA_Crystals.jpg', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/' },
    name: "MDMA / Ecstasy",
    category: "empathogens",
    secondaryCategory: "stimulants",
    slang: "Mandy, Molly, Pingers, Caps, Pills, MD",
    form: "Crystals, powder, pressed pills, gelatin capsules",
    timeline: {
      oral: { onset: "30–60 mins", peak: "1.5–2.5 hrs", duration: "4–6 hrs", afterglow: "24–48 hrs" },
      nasal: { onset: "5–15 mins", peak: "1 hr", duration: "2–3 hrs", note: "Nasal ROA is more intense, shorter, more damaging to nasal lining, and has higher redosing risk." }
    },
    commonDose: "There is no universal safe dose of MDMA. Effects and overdose risk vary with the amount, contents, health, other substances and individual response. A body-weight formula cannot establish safety.",
    effects: [
      "Deep empathy, emotional openness, and social warmth",
      "Euphoria, tactile sensitivity, and music enhancement",
      "Increased energy, dilated pupils, mild bruxism (jaw clenching)",
      "Elevated heart rate and body temperature"
    ],
    risks: [
      "Hyperthermia (life-threatening overheating)",
      "Hyponatremia (water intoxication from drinking too much plain water while antidiuretic hormone is elevated)",
      "Serotonin toxicity when mixed with SSRIs/SNRIs, MAOIs, or Tramadol",
      "Mid-week depression / serotonin depletion ('Suicide Tuesday')"
    ],
    harmReductionTips: [
      "Test before use: Check for synthetic cathinones, PMA/PMMA, or high milligram dosage (>200mg) at CanTEST.",
      "MDMA tablets vary greatly in strength and contents; a fraction of a pill does not establish a safe dose. ADF advises waiting at least two hours before considering more. Use Play it Safe’s Dose Interval Timer to track use. Waiting does not guarantee that redosing is safe.",
      "Hydrate mindfully: Sip 250ml (1 cup) per hour if resting, or 500ml per hour if dancing in hot clubs. Choose electrolytes or sports drinks rather than plain water alone.",
      "Cool down regularly: Take 15-minute breaks every hour away from heat and crowd.",
      "ADF recommends allowing one to three months between occasions of MDMA use. This does not guarantee recovery or make future use safe. Seek support if low mood, anxiety or other effects persist."
    ],
    overdoseSigns: "Body temp >39°C, uncontrollable tremors, rigid muscles, severe agitation, seizures, passing out, dark urine.",
    emergencyAction: "Move to cool area, remove excess layers, mist with water, call 000 immediately if confused, rigid, or seizing.",
    sources: [
      {
        "title": "ADF: MDMA",
        "url": "https://adf.org.au/drug-facts/mdma/"
      },
      {
        "title": "Healthdirect: MDMA",
        "url": "https://www.healthdirect.gov.au/healthy-living/alcohol-and-drugs/mdma-ecstasy"
      }
    ]
  },
  {
    id: "ketamine",
    image: { src: 'assets/ketamine.jpg', alt: 'Ketamine' },
    name: "Ketamine",
    category: "dissociatives",
    slang: "K, Special K, Wonk, Calvin Klein (when mixed with coke)",
    form: "Fine white crystalline powder, clear liquid vials",
    timeline: {
      nasal: { onset: "5–15 mins", peak: "20–40 mins", duration: "45–90 mins", afterglow: "1–2 hrs" },
      oral: { onset: "20–30 mins", peak: "1 hr", duration: "2–3 hrs", note: "Low oral bioavailability, converted to norketamine, harsher on stomach." }
    },
    commonDose: "There is no universal safe dose of ketamine. Strength, route, tolerance, health and other substances affect the response. Labels such as “bump”, “line” or “K-hole dose” do not establish a predictable or safe amount.",
    effects: [
      "Dissociation from physical body and surroundings",
      "Distorted perception of time, space, and sound ('wonky')",
      "Analgesia (numbness, pain relief)",
      "Deep introspective state or 'K-hole' (near-anesthetic immobility and mystical visions)"
    ],
    risks: [
      "Accidental injury and falls due to profound loss of motor coordination",
      "Aspiration of vomit if combined with alcohol or GHB (frequent fatal cause)",
      "Ketamine bladder syndrome (ulcerative cystitis, chronic bladder shrinkage, and severe pain with frequent use)",
      "Nasal septum perforation and stomach cramps ('K-cramps')"
    ],
    harmReductionTips: [
      "NEVER combine with Alcohol, GHB, or Opioids: Depressant synergies can cause respiratory arrest and choking on vomit.",
      "Sit or lie down in a safe, soft setting before dosing to avoid falling.",
      "Crush powder thoroughly into a flour-like texture to prevent tearing nasal tissue.",
      "Spitting out nasal drip is not proven to prevent ketamine-related bladder or stomach harm. Seek medical advice for urinary pain, blood in urine, frequent urination or persistent abdominal pain.",
      "Rinse nostrils with saline spray after use.",
      "Take extended breaks to prevent irreversible bladder wall fibrosis."
    ],
    overdoseSigns: "Loss of consciousness, slow irregular breathing, vomiting while unresponsive, inability to move or speak in an unsafe area.",
    emergencyAction: "Call 000 if the person is unresponsive or breathing abnormally. If unresponsive and not breathing normally, start CPR and follow the operator’s instructions. If unconscious but breathing normally, place them on their side and stay with them.",
    sources: [
      {
        "title": "ADF: Ketamine",
        "url": "https://adf.org.au/drug-facts/ketamine/"
      },
      {
        "title": "Healthdirect: Ketamine",
        "url": "https://www.healthdirect.gov.au/healthy-living/alcohol-and-drugs/ketamine"
      },
      {
        "title": "ANZCOR: CPR",
        "url": "https://www.anzcor.org/home/basic-life-support/guideline-8-cardiopulmonary-resuscitation-cpr"
      }
    ]
  },
  {
    id: "cocaine",
    image: { src: 'assets/cocaine.jpg', alt: 'Cocaine' },
    name: "Cocaine",
    category: "stimulants",
    slang: "Coke, Charlie, Blow, Snow, Rack",
    form: "White crystalline powder (hydrochloride), off-white rocks (crack freebase)",
    timeline: {
      nasal: { onset: "1–3 mins", peak: "15–30 mins", duration: "45–90 mins", afterglow: "1–2 hrs" }
    },
    commonDose: "A “line” is not a standard dose. Cocaine strength and contents vary, and serious cardiovascular harm can occur even in people without known heart conditions. Repeated dosing increases risk.",
    effects: [
      "Surge of energy, extreme confidence, and alertness",
      "Talkativeness, appetite suppression, pupil dilation",
      "Elevated heart rate and constriction of blood vessels"
    ],
    risks: [
      "Cardiovascular strain: Heart attack, arrhythmias, and stroke even in young healthy users",
      "Combining cocaine with alcohol produces cocaethylene and increases the risk of serious cardiovascular harm, including cardiac arrest and death.",
      "Contamination with Levamisole (damages white blood cells) or deadly Nitazenes/Fentanyl in Australian supply",
      "Compulsive binge redosing leading to severe agitation and paranoia"
    ],
    harmReductionTips: [
      "Avoid mixing with alcohol: Cocaethylene drastically increases sudden cardiac arrest risk.",
      "Never share straws or notes: Blood-borne viruses (Hepatitis C) transmit easily through microscopic nasal tears.",
      "Use clean, disposable plastic/paper straws; avoid dirty rolled banknotes.",
      "Rinse nose with sterile saline water between lines and at end of session.",
      "Get powders tested at CanTEST to learn more about the contents and strength of your sample. Testing has limitations: a result cannot guarantee that every contaminant is absent or that a substance is safe to use.",
      "Set a strict spending/gram limit beforehand to prevent bingeing."
    ],
    overdoseSigns: "Chest pain, racing heart (>160 bpm), difficulty breathing, seizure, severe panic, fever.",
    emergencyAction: "Sit person down, remove tight clothing, stay calm. If chest pain or seizures occur, call 000 immediately.",
    sources: [
      {
        "title": "ADF: Cocaine",
        "url": "https://adf.org.au/drug-facts/cocaine/"
      },
      {
        "title": "Alcohol–cocaine cardiovascular evidence review",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10935323/"
      }
    ]
  },
  {
    id: "ghb",
    image: { src: 'assets/GHB.jpg', alt: 'GHB' },
    name: "GHB & GBL",
    category: "depressants",
    slang: "G, Fantasy, Liquid Ecstasy, Gina, Juice",
    form: "Clear oily liquid, salty (GHB) or chemical/nail polish taste (GBL)",
    timeline: {
      oral: { onset: "10–20 mins", peak: "45–60 mins", duration: "2–4 hrs", afterglow: "1 hr" }
    },
    commonDose: "Indicative volumes: GHB 0.8–1.5 mL; GBL 0.5–1.0 mL. These are not safe-dose recommendations: without knowing concentration, volume cannot establish dose. Both have a steep dose-response relationship—small increases can cause unconsciousness or stopped breathing. GBL is generally more potent and faster acting; GHB and GBL are not interchangeable and have no reliable fixed volume conversion.",
    effects: [
      "Euphoria, disinhibition, relaxation, and heightened libido",
      "Intoxication, reduced inhibitions and impaired coordination. Effects vary with dose, product strength and other substances taken.",
      "Drowsiness and sedation"
    ],
    risks: [
      "'G-ing out' (sudden loss of consciousness, coma, respiratory arrest)",
      "Zero room for measurement error - dropper bottles without precise marking cause frequent overdoses",
      "Fatal synergy when combined with Alcohol, Benzos, Ketamine, or Opioids",
      "Severe physical dependence requiring medically supervised withdrawal if used around the clock"
    ],
    harmReductionTips: [
      "ALWAYS measure with a precise 1ml needleless oral syringe or pipette - never drink from caps, bottles, or cups.",
      "NEVER combine with alcohol: Even a single beer can precipitate a sudden life-threatening coma.",
      "ADF advises waiting at least two hours before taking more GHB. GHB can remain active after its effects seem to fade, and further doses can accumulate to dangerous levels. Use the Dose Interval Timer in Play it Safe’s CPR / Playing it Safe Toolbox section to track when you last took a dose. A two-hour interval does not guarantee safety.",
      "Add food coloring to your G bottle so nobody mistakes it for water or alcohol.",
      "Tell friends you have taken G so they don't give you alcohol or let you sleep flat on your back."
    ],
    overdoseSigns: "Unresponsive, snoring/gasping breathing, twitching/myoclonus, vomiting while unconscious, limp body.",
    emergencyAction: "Never leave someone to ‘sleep it off’. Call 000 immediately if they are unresponsive or breathing abnormally. If unresponsive and not breathing normally, start CPR and follow the operator’s instructions. If unconscious but breathing normally, place them on their side and stay with them.",
    sources: [
      {
        "title": "ADF: GHB",
        "url": "https://adf.org.au/drug-facts/ghb/"
      },
      {
        "title": "ANZCOR: CPR",
        "url": "https://www.anzcor.org/home/basic-life-support/guideline-8-cardiopulmonary-resuscitation-cpr"
      }
    ]
  },
  {
    id: "heroin-opioids",
    image: { src: 'assets/heroin.jpg', alt: 'Heroin' },
    name: "Heroin & Prescription Opioids",
    category: "opioids",
    slang: "Smack, Gear, H, Oxy, Hammer, Lean",
    form: "White/brown powder, sticky black tar, pharmaceutical tablets, syrups",
    timeline: {
      injected: { onset: "Seconds", peak: "10 mins", duration: "3–5 hrs" },
      smoked: { onset: "1–2 mins", peak: "15 mins", duration: "3–5 hrs" },
      oral: { onset: "20–40 mins", peak: "1–2 hrs", duration: "4–8 hrs" }
    },
    commonDose: "Varies widely by tolerance. High risk of overdose following periods of abstinence (rehab, prison release).",
    effects: [
      "Intense warm euphoria, rush, and tranquility",
      "Profound pain relief, mental contentment",
      "Drowsiness ('nodding off'), slow breathing, pupil constriction"
    ],
    risks: [
      "Fatal respiratory depression (breathing stops completely)",
      "Contamination with ultra-potent Nitazenes or Fentanyl in the Australian illicit market",
      "Severe physical dependence and painful withdrawal syndrome",
      "Vein damage, endocarditis, and blood-borne virus transmission (Hep C, HIV)"
    ],
    harmReductionTips: [
      "Carry Naloxone (Nyxoid / Prenoxad) at all times. Know how to use it and ensure companions know too.",
      "Never use alone: Use with a trusted person who can monitor breathing and intervene.",
      "Do a 'tester shot' / test line before taking a full amount to assess potency.",
      "Use fresh sterile equipment from local Needle & Syringe Programs (NSP) or CAHMA.",
      "Avoid mixing with Benzos, Alcohol, or other downers (the #1 cause of fatal opioid overdoses in Australia).",
      "Be aware of tolerance loss: If you haven't used for even a few days, your previous dose can easily kill you."
    ],
    overdoseSigns: "Pinpoint pupils, limp body, blue/purple/grey lips or fingertips, slow or stopped breathing, snoring/choking sounds.",
    emergencyAction: "Call 000 immediately and give naloxone if available. If unresponsive and not breathing normally, start CPR and follow the operator’s instructions. If unconscious but breathing normally, place them on their side. Stay with them and follow the naloxone instructions for repeat doses if needed.",
    sources: [
      {
        "title": "ADF: Heroin",
        "url": "https://adf.org.au/drug-facts/heroin/"
      },
      {
        "title": "ADF: Opioids",
        "url": "https://adf.org.au/drug-facts/opioids/"
      },
      {
        "title": "NSW Health: Opioid overdose response",
        "url": "https://www.health.nsw.gov.au/aod/programs/opioid-treatment/Pages/overdose.aspx"
      }
    ]
  },
  {
    id: "nitazenes",
    image: { src: 'assets/nitazene.jpg', alt: 'Nitazenes' },
    name: "Nitazenes (Synthetic Opioids)",
    category: "opioids",
    slang: "Protonitazene, Metonitazene, Isotonitazene, 'Frankenstein opioids'",
    form: "White/grey/yellow powders, pressed into fake Xanax or OxyContin, or cut into ketamine and MDMA",
    timeline: {
      all: { onset: "Can be rapid; varies by compound and route.", peak: "Variable; reliable timing is not established for all nitazenes.", duration: "Variable and potentially prolonged. Overdose symptoms can return after naloxone wears off." }
    },
    commonDose: "Nitazenes can be active in extremely small amounts. Potency varies greatly between compounds and products, and there is no known safe dose. Appearance or volume cannot establish strength.",
    effects: [
      "Profound sedation and slowed or stopped breathing. Effects may develop rapidly, but timing varies."
    ],
    risks: [
      "Sudden respiratory arrest before the person can even call for help",
      "Unexpected presence in non-opioid drugs (e.g. counterfeit benzos, MDMA, ketamine)",
      "A single dose of naloxone may not be enough. Repeat doses and ongoing breathing support may be needed. Naloxone can wear off before the opioid, allowing overdose symptoms to return."
    ],
    harmReductionTips: [
      "Carry multiple doses of Naloxone (Nyxoid / Prenoxad) - a single dose may not be enough to reverse a nitazene overdose.",
      "Get all illicit powders, pills, and prescription tablets from unverified sources tested at CanTEST.",
      "Nitazene test strips may detect some nitazenes but not all types or concentrations. A negative result does not rule out contamination or establish safety. Ask CanTEST or a harm reduction service about testing options and availability.",
      "Never use when alone in a locked room."
    ],
    overdoseSigns: "Cannot be woken, pinpoint pupils, slow or stopped breathing, gurgling or snoring, and blue or grey lips or fingertips. Symptoms may develop rapidly or emerge later.",
    emergencyAction: "Call 000 immediately and give naloxone if available. If unresponsive and not breathing normally, start CPR and follow the operator’s instructions. If unconscious but breathing normally, place them on their side. Stay with them and repeat naloxone according to the product instructions if needed. More than one dose may be required, and overdose symptoms can return.",
    sources: [
      {
        "title": "ADF: Nitazenes",
        "url": "https://adf.org.au/drug-facts/nitazenes/"
      },
      {
        "title": "NSW Health: Nitazenes",
        "url": "https://yourroom.health.nsw.gov.au/a-z-of-drugs/Pages/nitazenes.aspx"
      },
      {
        "title": "NSW Health: Opioid overdose response",
        "url": "https://www.health.nsw.gov.au/aod/programs/opioid-treatment/Pages/overdose.aspx"
      }
    ]
  },
  {
    id: "lsd",
    image: { src: 'assets/LSD.jpg', alt: 'LSD' },
    name: "LSD (Lysergic Acid Diethylamide)",
    category: "psychedelics",
    slang: "Acid, Tabs, Blotter, Microdots, Trips",
    form: "Perforated blotter paper tabs, liquid drops, gel tabs",
    timeline: {
      sublingual: { onset: "30–90 mins", peak: "2.5–4 hrs", duration: "8–12 hrs", afterglow: "12–24 hrs" }
    },
    commonDose: "Microdose: 5–15 µg; Mild: 50–75 µg; Common: 100–150 µg; Strong: 200+ µg.",
    effects: [
      "Visual geometry, enhanced colors, sound and light synesthesia",
      "Dissolution of ego and boundary between self and environment",
      "Intense emotional shifts, altered concept of time and philosophy",
      "Mild physical stimulation, pupil dilation, temperature shifts"
    ],
    risks: [
      "Psychological distress ('Bad trip'), acute anxiety, paranoia, disorientation",
      "Accidental physical injury in unfamiliar or dangerous environments",
      "Precipitation of latent psychiatric conditions (psychosis, schizophrenia)",
      "Hallucinogen Persisting Perception Disorder (HPPD) with frequent high doses",
      "Other substances, including NBOMe compounds, may be sold as LSD. Taste cannot establish identity or safety."
    ],
    harmReductionTips: [
      "Set & Setting: Only take when in a calm mindset and comfortable, safe environment with trusted friends.",
      "Have a sober 'trip sitter' who can reassure you if feelings become overwhelming.",
      "A strong bitter, metallic or numbing taste is a warning that a product may not be LSD. Do not take more. Taste cannot identify the chemical, and a tasteless tab is not proof of LSD or safety. Use professional drug checking where available.",
      "Clear your schedule for 24 hours: Do not drive or make major decisions.",
      "Grounding techniques: If anxious, change the room, change the music, focus on slow deep breaths, remember 'this is temporary'."
    ],
    overdoseSigns: "Extreme panic, agitation, terrifying delusions, aggressive confusion. (Physically, LSD does not cause fatal respiratory arrest).",
    emergencyAction: "Take to quiet, dim space. Reassure gently. Do not restrain. Seek medical attention if violent or self-harming.",
    sources: [
      {
        "title": "ADF: LSD",
        "url": "https://adf.org.au/drug-facts/lsd/"
      }
    ]
  },
  {
    id: "psilocybin",
    image: { src: 'assets/psilocybe-cubensis.jpg', alt: 'Psilocybe cubensis mushrooms growing outdoors', author: 'Erick Vélez Sánchez', source: 'https://commons.wikimedia.org/wiki/File:Psilocybe_cubensis_321199915.jpg', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/' },
    name: "Psilocybin (Magic Mushrooms)",
    category: "psychedelics",
    slang: "Shrooms, Mushies, Gold Tops, Blue Meanies",
    form: "Dried mushrooms, powdered capsules, teas, mushroom chocolates",
    timeline: {
      oral: { onset: "20–50 mins", peak: "1.5–2.5 hrs", duration: "4–6 hrs", afterglow: "12 hrs" }
    },
    commonDose: "Mushroom potency varies within and between species, batches and individual mushrooms. Weight alone cannot reliably predict strength or safety, and there is no reliable fixed conversion between species.",
    effects: [
      "Visual waving, breathing walls, enhanced nature connection",
      "Emotional catharsis, introspective insights, laughter",
      "Nausea during onset ('come-up'), yawning, body relaxation"
    ],
    risks: [
      "Foraging misidentification: Ingesting deadly poisonous Galerina or Amanita mushrooms by mistake",
      "Severe anxiety, panic, or confusion during challenging trips",
      "Nausea and vomiting on empty stomach",
      "Wood Lover's Paralysis (temporary motor weakness reported with Australian wood-dwelling species)"
    ],
    harmReductionTips: [
      "Never pick wild mushrooms unless 100% verified by an expert mycologist. Poisonous lookalikes can cause fatal liver failure.",
      "Ginger tea or lemon-tek can help alleviate initial stomach nausea.",
      "Potency can vary greatly within and between mushroom species. Do not use a fixed species multiplier to estimate strength. Misidentification can cause fatal poisoning.",
      "Have a trusted sober trip sitter in a safe, peaceful natural or home environment."
    ],
    overdoseSigns: "Severe panic, disorientation, vomiting, terror. Physical toxicity is low for pure psilocybin.",
    emergencyAction: "Stay with the person in a quiet, safe place and offer calm reassurance. Call 000 for collapse, seizures, breathing difficulties or severe confusion. If a poisonous or unidentified mushroom may have been eaten, call the Poisons Information Centre on 13 11 26 immediately—do not wait for symptoms.",
    sources: [
      {
        "title": "ADF: Psilocybin",
        "url": "https://adf.org.au/drug-facts/psilocybin/"
      },
      {
        "title": "ANZCOR: Poisoning first aid",
        "url": "https://www.anzcor.org/home/first-aid/guideline-9-5-1-first-aid-management-of-poisoning"
      }
    ]
  },
  {
    id: "methamphetamine",
    image: { src: 'assets/meth.jpg', alt: 'Methamphetamine' },
    name: "Methamphetamine & Amphetamine",
    category: "stimulants",
    slang: "Ice, Meth, Crystal, Glass, Shard, Speed, Dexies",
    form: "Clear glass-like crystals (ice), off-white powder or paste (speed), prescription tablets (dexamphetamine)",
    timeline: {
      smoked: { onset: "Seconds", peak: "10–30 mins", duration: "8–14 hrs" },
      nasal: { onset: "3–5 mins", peak: "30 mins", duration: "6–10 hrs" },
      oral: { onset: "20–40 mins", peak: "2–3 hrs", duration: "8–12 hrs" }
    },
    commonDose: "There is no universal safe dose of methamphetamine. Strength, route, tolerance, health and other substances affect the response. Effects can persist for many hours, and further doses can accumulate.",
    effects: [
      "Intense burst of energy, hyper-focus, wakefulness, euphoria",
      "Suppressed appetite, elevated body temperature, fast heart rate",
      "Talkativeness, compulsive repetitive actions"
    ],
    risks: [
      "Stimulant toxicity ('Overamping'): Arrhythmias, hyperthermia, seizures, stroke",
      "Sleep deprivation psychosis (hallucinations, persecutory paranoia from being awake >48 hrs)",
      "Severe dental wear and jaw clenching",
      "High addiction potential and prolonged post-use depressive crash"
    ],
    harmReductionTips: [
      "Prioritise sleep: The brain requires sleep to prevent psychosis. Avoid staying awake for more than 24 hours.",
      "Stay hydrated and eat nutritious foods/smoothies even when not hungry.",
      "Take magnesium supplements and chew gum to protect teeth and jaw.",
      "Use clean glass pipes; do not share pipes or injecting equipment (NSP/CAHMA).",
      "Avoid mixing with other stimulants, caffeine, or MDMA."
    ],
    overdoseSigns: "Extreme fever, chest pain, rapid chaotic pulse, extreme paranoia, hallucinations, seizing.",
    emergencyAction: "Call 000 for chest pain, seizures, severe overheating, severe agitation or confusion, collapse, or breathing difficulties. Move away from hazards to a cooler, quiet place if safe, reduce exertion and stay with the person. Offer small sips of water only if fully alert and able to swallow safely; do not force fluids. If unresponsive and not breathing normally, start CPR and follow the operator’s instructions.",
    sources: [
      {
        "title": "ADF: Methamphetamine",
        "url": "https://adf.org.au/drug-facts/ice/"
      },
      {
        "title": "ADF: Amphetamines",
        "url": "https://adf.org.au/drug-facts/amphetamines/"
      }
    ]
  },
  {
    id: "benzodiazepines",
    image: { src: 'assets/benzo.jpg', alt: 'Benzodiazepines' },
    name: "Benzodiazepines",
    category: "depressants",
    slang: "Benzos, Xanies, Vallies, Bars, Mylan, Bricks",
    form: "Pharmaceutical tablets, illicit pressed 'counterfeit' bars, capsules",
    timeline: {
      oral: { onset: "15–45 mins", peak: "1–2 hrs", duration: "6–24 hrs depending on compound (Alprazolam vs Diazepam)" }
    },
    commonDose: "Benzodiazepines differ greatly in strength and duration; milligram amounts are not interchangeable. Take prescribed medicines only as directed. Tablets from unregulated sources may contain different drugs or strengths.",
    effects: [
      "Relief of anxiety and panic, sedation, muscle relaxation",
      "Loss of inhibitions, mental calming"
    ],
    risks: [
      "Severe anterograde amnesia ('blackouts') leading to dangerous impulsive behavior",
      "Extreme risk of fatal overdose when combined with Opioids or Alcohol",
      "High prevalence of illicit pressed tablets containing unlisted designer benzos (Clonazolam, Bromazolam) or lethal Nitazenes",
      "Rapid tolerance and life-threatening withdrawal seizures if stopped abruptly"
    ],
    harmReductionTips: [
      "Test all street tablets at CanTEST: Counterfeit 'Xanax' in the ACT has frequently tested positive for dangerous nitazenes and novel synthetic benzos.",
      "NEVER drink alcohol or take opioids with benzos: This is the leading cause of drug-induced death in Australia.",
      "Avoid redosing during memory lapses: Lock away remaining pills so you don't compulsively redose while blacked out.",
      "Do not stop daily use abruptly: Seek medical assistance for a gradual taper to prevent seizures."
    ],
    overdoseSigns: "Profound stupor, slurred speech, uncoordinated stumbling, slowed breathing, unresponsiveness.",
    emergencyAction: "Call 000 immediately if the person cannot be woken or is breathing abnormally. If unresponsive and not breathing normally, start CPR and follow the operator’s instructions. If unconscious but breathing normally, place them on their side and stay with them. Give naloxone if opioids may also be involved; naloxone does not reverse benzodiazepines.",
    sources: [
      {
        "title": "ADF: Benzodiazepines",
        "url": "https://adf.org.au/drug-facts/benzodiazepines/"
      }
    ]
  },
  {
    id: "cannabis",
    image: { src: 'assets/cannabis-bud.jpg', alt: 'Close-up of a cannabis flower', author: 'Thomas Elliott', source: 'https://commons.wikimedia.org/wiki/File:CannabisBud.jpg', license: 'CC0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/' },
    name: "Cannabis",
    category: "cannabinoids",
    slang: "Weed, Bud, Green, Herb, Mull, Mary Jane",
    form: "Dried flowers/buds, concentrates (shatter, rosin, wax), vape cartridges, edibles",
    timeline: {
      inhaled: { onset: "Seconds to 2 mins", peak: "15–30 mins", duration: "2–4 hrs" },
      edibles: { onset: "30–90 mins", peak: "2–4 hrs", duration: "6–10 hrs", note: "11-Hydroxy-THC is metabolised in liver, making edibles much more potent and long-lasting." }
    },
    commonDose: "Inhaled: 5–15mg THC; Edible: 5–10mg THC for beginners.",
    effects: [
      "Relaxation, euphoria, altered sensory and time perception",
      "Appetite stimulation ('munchies'), laughter, mild sedation",
      "Increased heart rate, dry mouth, red eyes"
    ],
    risks: [
      "Acute anxiety, panic attacks, or paranoia ('greening out')",
      "Edible overdosing due to delayed onset",
      "Cannabinoid hyperemesis syndrome (CHS): recurrent severe nausea, vomiting and abdominal pain associated with ongoing cannabis use. Hot showers may temporarily ease symptoms, but stopping cannabis is needed for lasting recovery. Seek medical care for persistent vomiting or dehydration.",
      "Respiratory irritation from smoking with tobacco ('spin')"
    ],
    harmReductionTips: [
      "Edibles can have delayed and prolonged effects. Wait at least four hours before considering more. Strength and individual responses vary; this waiting period does not guarantee safety.",
      "Avoid spinning with tobacco: Tobacco significantly increases addiction, cancer risk, and cardiovascular strain.",
      "Use dry-herb vaporizers or water pipes instead of smoking joints or bongs with tobacco.",
      "If anxious or panicking, move to a quiet, safe place, sit down and stay with a trusted person. Use calm reassurance. Call 000 for chest pain, breathing difficulties, collapse or severe confusion."
    ],
    overdoseSigns: "Severe panic, dizziness, heart palpitations, persistent nausea, extreme disorientation.",
    emergencyAction: "Stay with the person in a quiet, safe place and offer calm reassurance. Call 000 for chest pain, breathing difficulties, collapse or severe confusion. Offer small sips of water only if fully alert and able to swallow safely. If unresponsive and not breathing normally, start CPR and follow the operator’s instructions. If unconscious but breathing normally, place them on their side.",
    sources: [
      {
        "title": "ADF: Cannabis",
        "url": "https://adf.org.au/drug-facts/cannabis/"
      },
      {
        "title": "California Department of Public Health: CHS",
        "url": "https://www.cdph.ca.gov/Programs/CCDPHP/sapb/cannabis/Pages/CHS.aspx"
      }
    ]
  },
  {
    id: "nitrous-oxide",
    image: { src: 'assets/nang.jpg', alt: 'Nitrous oxide canisters' },
    name: "Nitrous Oxide",
    category: "dissociatives",
    slang: "Nangs, Whippets, Laughing Gas, Bulbs, Nos",
    form: "Steel metal bulbs, large fast-gas cylinders, inhaled via balloons",
    timeline: {
      inhaled: { onset: "Seconds", peak: "15–30 secs", duration: "1–3 mins" }
    },
    commonDose: "1–2 bulbs inhaled from a balloon.",
    effects: [
      "Brief tingling numbness, auditory flanging / 'whomp-whomp' sound",
      "Euphoria, light-headedness, giggles, short dissociation"
    ],
    risks: [
      "Hypoxia (oxygen deprivation) if inhaled repeatedly without breathing fresh air",
      "Frostbite burns to lips, vocal cords, or lungs if inhaled directly from dispenser or cylinder nozzle",
      "Vitamin B12 inactivation: Chronic use permanently destroys active Vitamin B12, leading to severe nerve damage, numbness in legs, paralysis, and spinal cord subacute degeneration",
      "Falls and head injuries if standing while inhaling"
    ],
    harmReductionTips: [
      "ALWAYS discharge gas into a balloon first: NEVER inhale directly from a dispenser, cracker, or large tank (gas is below -40°C and causes catastrophic freeze burns).",
      "Always sit down before inhaling to avoid falling and head injury.",
      "Breathe normal oxygen between balloons: Do not hold your breath for extended periods.",
      "Space out sessions: Chronic daily or weekly use inactivates B12 enzymes. Supplementing B12 while still using nangs DOES NOT work because the enzyme remains blocked.",
      "Seek medical advice immediately if noticing tingling, pins and needles, or numbness in toes and fingers."
    ],
    overdoseSigns: "Loss of consciousness, lips turning blue (lack of oxygen), falling over.",
    emergencyAction: "Call 000 immediately if the person is unresponsive. Check their breathing. If they are not breathing normally, start CPR and follow the operator’s instructions. If unconscious but breathing normally, place them on their side and stay with them.",
    sources: [
      {
        "title": "ADF: Nitrous oxide",
        "url": "https://adf.org.au/drug-facts/nitrous-oxide/"
      },
      {
        "title": "Victorian Department of Health: Nitrous oxide",
        "url": "https://www.betterhealth.vic.gov.au/nitrous-oxide"
      },
      {
        "title": "ANZCOR: CPR",
        "url": "https://www.anzcor.org/home/basic-life-support/guideline-8-cardiopulmonary-resuscitation-cpr"
      }
    ]
  },
  {
    "id": "2cb",
    "image": { "src": "assets/2CB.jpg", "alt": "2C-B example" },
    "name": "2C-B",
    "category": "psychedelics",
    "slang": "Nexus, Bees, 2CB, Bromo, sometimes incorrectly called Tucibi or Tusi.",
    "form": "Tablets and powders",
    "keySafety": "Small changes in dose can produce much stronger effects. Products sold as 2C-B may contain entirely different substances.",
    "overview": "Synthetic Psychedelic / Phenethylamine Chemical name: 4-Bromo-2,5-dimethoxyphenethylamine. Drug classification: Psychedelic with stimulant-like and some entactogenic effects. 2C-B is a synthetic psychedelic belonging to the substituted phenethylamine family. Its effects can include enhanced sensory perception, visual distortions, stimulation and changes in emotional experience. Its effects are primarily mediated through serotonin receptors, particularly 5-HT2A. Important: Products sold as Tusi, Tucibi or Pink Cocaine frequently contain mixtures of other substances rather than genuine 2C-B. These products should not be treated as equivalent.",
    "timeline": {
      "oral": {
        "onset": "30–120 minutes",
        "peak": "Approximately 2–4 hours",
        "duration": "4–8 hours"
      },
      "nasal": {
        "onset": "Within minutes",
        "peak": "Variable",
        "duration": "Often shorter than oral use",
        "note": "Significant nasal irritation and pain are common."
      }
    },
    "commonDose": "2C-B has a steep dose-response relationship. Relatively small changes in the amount consumed can produce substantially stronger psychedelic effects. Illicitly manufactured tablets and powders may vary greatly in strength and composition.",
    "effects": [
      "Enhanced colours, patterns and visual perception.",
      "Euphoria, stimulation and increased sociability.",
      "Heightened appreciation of music and sensory experiences.",
      "Changes in the perception of time and space.",
      "Increased emotional sensitivity and feelings of connection.",
      "Altered tactile sensations and bodily awareness.",
      "Visual distortions ranging from mild patterns to intense hallucinations."
    ],
    "risks": [
      "Increased heart rate and blood pressure.",
      "Nausea, vomiting and gastrointestinal discomfort.",
      "Anxiety, panic attacks and overwhelming psychedelic experiences.",
      "Confusion, paranoia and impaired judgement.",
      "Increased body temperature, particularly when combined with stimulants.",
      "Potential psychological destabilisation in people vulnerable to psychosis or mania.",
      "Risk of accidentally consuming more dangerous substances sold as 2C-B.",
      "Particular concern: Other drugs, including NBOMe compounds, have been misrepresented as 2C-B. These can have substantially greater toxicity."
    ],
    "harmReductionTips": [
      "Check the substance: Use a professional drug-checking service where available. Appearance, colour and branding cannot establish identity.",
      "Avoid rapid redosing: Oral effects can take up to two hours to develop. Taking more before the initial effects emerge increases the risk of an overwhelming experience.",
      "Avoid mixing substances: Combining 2C-B with stimulants, other psychedelics or alcohol introduces additional risks.",
      "Consider set and setting: A familiar, calm environment with trusted people can reduce distress.",
      "Have a sober support person: Someone who can provide reassurance and obtain medical assistance if necessary.",
      "Avoid overheating: Take breaks from dancing or strenuous activity, particularly in hot environments.",
      "Consider mental health vulnerabilities: Psychedelics may exacerbate psychotic symptoms or trigger mania in susceptible people.",
      "Avoid driving: Visual distortions, altered perception and impaired judgement may persist after the strongest effects diminish."
    ],
    "overdoseSigns": "Severe agitation, panic or uncontrollable confusion. Very high body temperature. Chest pain or dangerously rapid heartbeat. Seizures or uncontrolled muscle movements. Severe headache, collapse or loss of consciousness. Persistent psychotic symptoms or behaviour creating immediate danger.",
    "emergencyAction": "Call 000 for severe symptoms. Move the person away from hazards, minimise stimulation and stay with them until medical assistance arrives.",
    "interactions": [
      "Stimulants (MDMA, methamphetamine, cocaine): Increased cardiovascular strain, overheating and psychological distress.",
      "Other psychedelics: Potentially unpredictable intensification of hallucinations and psychological effects.",
      "Cannabis: May substantially intensify visual effects, anxiety or paranoia.",
      "MAOIs and serotonergic medications: Potential for serious interactions, including serotonin toxicity in some combinations. Specific risks depend on the substances involved.",
      "Alcohol: Increased impairment and reduced ability to respond appropriately to an adverse experience."
    ],
    "showEmergencyInfo": true,
    "sources": [
      {
        "title": "DanceWize NSW resources",
        "url": "https://www.dancewizensw.org.au/order-resources/full-suite"
      },
      {
        "title": "ADF: 2C-B",
        "url": "https://adf.org.au/drug-facts/2c-b/"
      }
    ]
  },
  {
    "id": "pregabalin",
    "image": { "src": "assets/pregabalin.jpg", "alt": "Pregabalin example" },
    "name": "Pregabalin (Lyrica)",
    "category": "depressants",
    "slang": "Lyrica, Pregabs, Pregabalin.",
    "form": "Prescription capsules and oral solution",
    "keySafety": "Combining pregabalin with opioids, alcohol or benzodiazepines can cause fatal respiratory depression.",
    "overview": "(Lyrica) Prescription Gabapentinoid / Central Nervous System Depressant Drug classification: Gabapentinoid; anticonvulsant and neuropathic pain medication. Pregabalin is a prescription medication used to treat conditions including neuropathic pain and certain seizure disorders. It acts by binding to the alpha-2-delta subunit of voltage-gated calcium channels in the nervous system, reducing the release of certain excitatory neurotransmitters. Although structurally related to GABA, pregabalin does not act directly on GABA receptors in the same way as benzodiazepines. Pregabalin is increasingly recognised as a substance associated with non-medical use, dependence and overdose, particularly when combined with opioids or other depressants.",
    "timeline": {
      "oral": {
        "onset": "Approximately 30–90 minutes",
        "peak": "Blood concentration around 1 hour fasting; later with food",
        "duration": "Several hours",
        "note": "Elimination half-life is approximately 6 hours with normal kidney function. Kidney impairment can prolong exposure."
      }
    },
    "commonDose": "Prescribed doses vary considerably depending on the condition being treated and kidney function. Pregabalin is principally eliminated through the kidneys. Reduced kidney function can significantly increase exposure to the drug. Taking additional capsules because effects appear delayed can produce unexpectedly strong sedation.",
    "effects": [
      "Relaxation and reduced anxiety.",
      "Feelings of calmness or tranquillity.",
      "Euphoria or elevated mood.",
      "Reduced sensitivity to pain.",
      "Mild disinhibition and increased sociability.",
      "Sedation and sleepiness.",
      "Feelings of physical relaxation.",
      "The intensity and nature of effects vary substantially, particularly between people taking prescribed therapeutic doses and those using the drug non-medically."
    ],
    "risks": [
      "Respiratory depression, particularly when combined with opioids, benzodiazepines or alcohol.",
      "Profound sedation and reduced consciousness.",
      "Dizziness, impaired coordination and falls.",
      "Confusion, memory impairment and slowed reaction times.",
      "Physical dependence and withdrawal following regular use.",
      "Increased risk of seizures following abrupt withdrawal in some people.",
      "Fluid retention and peripheral oedema.",
      "Accumulation and increased toxicity in people with impaired kidney function.",
      "Critical warning: Pregabalin can substantially increase the risk of fatal opioid overdose when taken alongside heroin, fentanyl, oxycodone, methadone or other opioids."
    ],
    "harmReductionTips": [
      "Avoid combining with opioids: The combination increases the risk of potentially fatal respiratory depression.",
      "Avoid alcohol and benzodiazepines: Combined depressant effects can result in severe sedation, coma or death.",
      "Take only as prescribed: Do not increase doses without medical advice.",
      "Avoid rapid redosing: Sedation and impairment may become more pronounced as the drug is absorbed.",
      "Do not stop abruptly: Regular use can produce physical dependence. Gradual reduction under medical supervision may be necessary.",
      "Consider kidney function: People with kidney impairment may require substantially different prescribed doses.",
      "Avoid driving or machinery: Coordination, judgement and reaction time may be impaired.",
      "Know the signs of overdose: Severe drowsiness, inability to wake and slowed breathing require urgent assessment.",
      "Carry naloxone where opioids may be involved: Naloxone reverses opioid effects, not pregabalin itself."
    ],
    "overdoseSigns": "Extreme drowsiness or inability to remain awake. Confusion, disorientation or severe agitation. Slurred speech and loss of coordination. Slow, shallow or irregular breathing. Loss of consciousness. Seizures. Coma.",
    "emergencyAction": "Call 000 if someone is unresponsive, has abnormal breathing or experiences seizures. If opioid involvement is possible, administer naloxone according to its instructions. Naloxone does not reverse pregabalin toxicity, and emergency medical assessment remains essential. Do not induce vomiting.",
    "interactions": [
      "Opioids: Particularly dangerous. Increased respiratory depression, sedation, coma and risk of death.",
      "Benzodiazepines (diazepam, alprazolam and others): Additive sedation and respiratory impairment.",
      "Alcohol: Increased drowsiness, confusion and impaired coordination.",
      "GHB/GBL: Potentially dangerous additive central nervous system depression.",
      "Sedating antihistamines and sleeping medications: Increased sedation and reduced alertness.",
      "Cannabis: May increase dizziness, sedation and impairment.",
      "Important: Dependence can develop even when pregabalin is prescribed. Abrupt discontinuation after regular use can cause significant withdrawal symptoms."
    ],
    "showEmergencyInfo": true,
    "sources": [
      {
        "title": "TGA: Pregabalin and gabapentin",
        "url": "https://www.tga.gov.au/safety/safety-monitoring-and-information/safety-alerts/pregabalin-and-gabapentin"
      },
      {
        "title": "Pregabalin product information: pharmacology and kidney function",
        "url": "https://www.safetyandquality.gov.au/medicine-finder/pregabalin-drla"
      }
    ]
  },
  {
    "id": "dmt",
    "image": { "src": "assets/DMT.jpg", "alt": "DMT example" },
    "name": "DMT (N,N-Dimethyltryptamine)",
    "category": "psychedelics",
    "slang": "Dimitri, Deems, The Spirit Molecule, Spice.",
    "form": "DMT preparations, DMT-infused plant material (changa), and ayahuasca brews",
    "keySafety": "Effects can be extremely rapid and overwhelming. Ayahuasca and some changa preparations introduce potentially dangerous MAOI interactions.",
    "overview": "(N,N-Dimethyltryptamine) Powerful Short-Acting Psychedelic / Tryptamine Drug classification: Classical serotonergic psychedelic. DMT is a naturally occurring psychedelic compound found in numerous plant species and produced synthetically. It belongs to the tryptamine family and produces profound alterations in visual perception, consciousness, time perception and sense of self. Its effects are primarily associated with activity at serotonin receptors, particularly 5-HT2A. Unlike most other classical psychedelics, inhaled DMT produces an extremely rapid and intense experience that generally lasts only minutes. Important distinction: DMT, changa and ayahuasca are not interchangeable. Changa and ayahuasca may contain monoamine oxidase inhibitors (MAOIs), which substantially change the duration, interactions and risks.",
    "timeline": {
      "inhaled": {
        "onset": "Seconds to 1 minute",
        "peak": "Approximately 3–15 minutes",
        "duration": "Approximately 6–20 minutes",
        "note": "After-effects may persist for 15–60 minutes or longer."
      },
      "oral (ayahuasca)": {
        "onset": "Approximately 20–60 minutes",
        "peak": "Within the first few hours",
        "duration": "Commonly 4–6 hours, sometimes longer"
      },
      "changa": {
        "onset": "Usually within seconds",
        "peak": "Variable",
        "duration": "Variable",
        "note": "MAOI-containing preparations may prolong and intensify effects."
      }
    },
    "commonDose": "DMT is extremely potent, and relatively small differences in the quantity absorbed may produce major changes in subjective intensity. The concentration and composition of illicit preparations can be uncertain, particularly with changa and herbal mixtures.",
    "effects": [
      "Extremely vivid visual hallucinations and geometric patterns.",
      "Profound changes in the perception of space and time.",
      "Intense alterations in consciousness and self-awareness.",
      "Experiences of ego dissolution or loss of ordinary self-identity.",
      "Feelings of unity, interconnectedness or transcendence.",
      "Intense emotional experiences, including euphoria and awe.",
      "Unusual auditory sensations, buzzing or altered sound perception.",
      "Experiences interpreted as spiritual, mystical or personally meaningful.",
      "Perceived encounters with entities or unfamiliar environments.",
      "Experiences can vary dramatically between individuals and between occasions.",
      "Some people describe experiences as profoundly meaningful, while others experience overwhelming fear, confusion or psychological distress."
    ],
    "risks": [
      "Rapid increases in heart rate and blood pressure.",
      "Intense anxiety, panic or overwhelming psychological experiences.",
      "Temporary disorientation and inability to communicate.",
      "Loss of awareness of the surrounding physical environment.",
      "Impaired coordination and increased risk of accidental injury.",
      "Nausea and vomiting, particularly with ayahuasca.",
      "Potential worsening of existing psychotic or mood disorders.",
      "Possible triggering of mania or psychotic symptoms in vulnerable individuals.",
      "Persistent perceptual disturbances or psychological distress in rare cases.",
      "Potentially dangerous drug interactions involving MAOI-containing preparations.",
      "Critical warning: Ayahuasca and some changa preparations contain MAOIs. Combining these with certain antidepressants, MDMA, stimulants or other medications can cause serious and potentially life-threatening reactions.",
      "DMT should also be distinguished from 5-MeO-DMT, a different and highly potent substance with a distinct risk profile."
    ],
    "harmReductionTips": [
      "Understand the preparation: Pure DMT, changa and ayahuasca have different pharmacological characteristics and risks.",
      "Avoid using alone: A trusted, sober person can provide reassurance, prevent accidental injury and seek assistance if required.",
      "Consider set and setting: Anxiety, emotional distress and unfamiliar environments may increase the likelihood of frightening experiences.",
      "Remain seated or lying down: Rapid loss of awareness and coordination can increase the risk of falls, burns or other injuries.",
      "Remove environmental hazards: Open flames, hot equipment, traffic, water and elevated surfaces present particular dangers.",
      "Avoid mixing substances: Combining psychedelics with alcohol, stimulants or other psychoactive drugs increases unpredictability.",
      "Check medication interactions: MAOI-containing preparations can interact dangerously with numerous prescription and non-prescription medicines.",
      "Consider mental health vulnerabilities: People with personal or family histories of psychosis or bipolar disorder may face increased psychological risks.",
      "Allow time for recovery: The subjective experience may end quickly, but confusion, emotional sensitivity and impaired judgement can persist.",
      "Seek support following difficult experiences: Psychological integration or professional assistance may help if distressing effects continue.",
      "Important: Never abruptly discontinue prescribed antidepressants or other psychiatric medications in preparation for psychedelic use. Discuss medication risks with a qualified healthcare professional."
    ],
    "overdoseSigns": "DMT-related emergencies may result from severe psychological distress, cardiovascular effects, accidental injury or dangerous interactions rather than a conventional sedative overdose. Warning signs include: Extreme agitation, terror or uncontrolled confusion. Chest pain or severe cardiovascular symptoms. Seizures or loss of consciousness. Severe overheating or unusually high body temperature. Persistent disorientation or psychotic symptoms. Dangerous behaviour resulting from loss of awareness. Severe muscle rigidity, tremors and excessive sweating. Rapid deterioration following use with other drugs. Serotonin toxicity warning: High temperature, agitation, muscle rigidity, tremor, clonus (involuntary rhythmic muscle contractions) and confusion may indicate serotonin syndrome, particularly following MAOI-containing preparations combined with serotonergic drugs.",
    "emergencyAction": "Call 000 for severe symptoms. Remain with the person, reduce environmental stimulation and protect them from injury. Do not physically restrain them unless necessary to prevent immediate harm.",
    "interactions": [
      "MAOIs: Can dramatically alter DMT's effects and duration. MAOI-containing preparations introduce significant medication-interaction risks.",
      "Antidepressants (SSRIs, SNRIs and some others): Potentially dangerous interactions, particularly with ayahuasca or MAOI-containing changa. Risks depend on the medication and preparation.",
      "MDMA: Combining MDMA with MAOI-containing DMT preparations may cause life-threatening serotonin toxicity.",
      "Stimulants (methamphetamine, cocaine): Increased cardiovascular strain, anxiety and risk of overheating.",
      "Other psychedelics: Intensified psychological and perceptual effects, potentially increasing the likelihood of panic or disorientation.",
      "Cannabis: May intensify psychedelic effects, anxiety or paranoia.",
      "Alcohol and other depressants: Increased impairment and unpredictable effects."
    ],
    "showEmergencyInfo": true,
    "sources": [
      {
        "title": "Alcohol and Drug Foundation: DMT",
        "url": "https://adf.org.au/drug-facts/dmt/"
      },
      {
        "title": "Alcohol and Drug Foundation: Ayahuasca",
        "url": "https://adf.org.au/drug-facts/ayahuasca/"
      }
    ]
  }
];
