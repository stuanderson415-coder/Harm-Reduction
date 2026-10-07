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
    commonDose: "Standard oral guideline: 1.5 mg per kg body weight (approx 80–120 mg total).",
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
      "Start low and go slow: If taking a pill, take 1/4 or 1/2 first. Wait 90–120 minutes before redosing.",
      "Hydrate mindfully: Sip 250ml (1 cup) per hour if resting, or 500ml per hour if dancing in hot clubs. Choose electrolytes or sports drinks rather than plain water alone.",
      "Cool down regularly: Take 15-minute breaks every hour away from heat and crowd.",
      "3-Month Rule: Allow 2–3 months between sessions to allow brain serotonin axons and receptors to regenerate."
    ],
    overdoseSigns: "Body temp >39°C, uncontrollable tremors, rigid muscles, severe agitation, seizures, passing out, dark urine.",
    emergencyAction: "Move to cool area, remove excess layers, mist with water, call 000 immediately if confused, rigid, or seizing."
  },
  {
    id: "ketamine",
    name: "Ketamine",
    category: "dissociatives",
    slang: "K, Special K, Wonk, Calvin Klein (when mixed with coke)",
    form: "Fine white crystalline powder, clear liquid vials",
    timeline: {
      nasal: { onset: "5–15 mins", peak: "20–40 mins", duration: "45–90 mins", afterglow: "1–2 hrs" },
      oral: { onset: "20–30 mins", peak: "1 hr", duration: "2–3 hrs", note: "Low oral bioavailability, converted to norketamine, harsher on stomach." }
    },
    commonDose: "Threshold bump: 15–30 mg; Moderate line: 50–80 mg; 'K-hole' dose: 100–150+ mg.",
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
      "Spit the drip: The swallowed drip can irritate stomach lining ('K-cramps') and bladder.",
      "Rinse nostrils with saline spray after use.",
      "Take extended breaks to prevent irreversible bladder wall fibrosis."
    ],
    overdoseSigns: "Loss of consciousness, slow irregular breathing, vomiting while unresponsive, inability to move or speak in an unsafe area.",
    emergencyAction: "Turn onto side in Recovery Position immediately to prevent choking. Call 000 if breathing is shallow or unresponsive."
  },
  {
    id: "cocaine",
    name: "Cocaine",
    category: "stimulants",
    slang: "Coke, Charlie, Blow, Snow, Rack",
    form: "White crystalline powder (hydrochloride), off-white rocks (crack freebase)",
    timeline: {
      nasal: { onset: "1–3 mins", peak: "15–30 mins", duration: "45–90 mins", afterglow: "1–2 hrs" }
    },
    commonDose: "Typical line: 30–60 mg. High compulsive redosing urge.",
    effects: [
      "Surge of energy, extreme confidence, and alertness",
      "Talkativeness, appetite suppression, pupil dilation",
      "Elevated heart rate and constriction of blood vessels"
    ],
    risks: [
      "Cardiovascular strain: Heart attack, arrhythmias, and stroke even in young healthy users",
      "Mixing with alcohol produces Cocaethylene, which is 18–25x more toxic to the liver and heart muscle",
      "Contamination with Levamisole (damages white blood cells) or deadly Nitazenes/Fentanyl in Australian supply",
      "Compulsive binge redosing leading to severe agitation and paranoia"
    ],
    harmReductionTips: [
      "Avoid mixing with alcohol: Cocaethylene drastically increases sudden cardiac arrest risk.",
      "Never share straws or notes: Blood-borne viruses (Hepatitis C) transmit easily through microscopic nasal tears.",
      "Use clean, disposable plastic/paper straws; avoid dirty rolled banknotes.",
      "Rinse nose with sterile saline water between lines and at end of session.",
      "Get powders tested at CanTEST to verify absence of synthetic opioids or toxic cuts.",
      "Set a strict spending/gram limit beforehand to prevent bingeing."
    ],
    overdoseSigns: "Chest pain, racing heart (>160 bpm), difficulty breathing, seizure, severe panic, fever.",
    emergencyAction: "Sit person down, remove tight clothing, stay calm. If chest pain or seizures occur, call 000 immediately."
  },
  {
    id: "ghb",
    name: "GHB & GBL",
    category: "depressants",
    slang: "G, Fantasy, Liquid Ecstasy, Gina, Juice",
    form: "Clear oily liquid, salty (GHB) or chemical/nail polish taste (GBL)",
    timeline: {
      oral: { onset: "10–20 mins", peak: "45–60 mins", duration: "2–4 hrs", afterglow: "1 hr" }
    },
    commonDose: "Extremely steep dose-response curve: 0.8ml – 1.5ml GHB (GBL is 2x stronger: 0.5ml – 1.0ml). A fraction of a milliliter difference can mean the difference between euphoria and coma.",
    effects: [
      "Euphoria, disinhibition, relaxation, and heightened libido",
      "Mild intoxication similar to alcohol without the hangover",
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
      "Set a phone timer: Never redose earlier than 2 hours after your previous dose, as G builds up in the system.",
      "Add food coloring to your G bottle so nobody mistakes it for water or alcohol.",
      "Tell friends you have taken G so they don't give you alcohol or let you sleep flat on your back."
    ],
    overdoseSigns: "Unresponsive, snoring/gasping breathing, twitching/myoclonus, vomiting while unconscious, limp body.",
    emergencyAction: "NEVER leave them to 'sleep it off'. Put in Recovery Position immediately. Call 000 immediately - airway obstruction kills."
  },
  {
    id: "heroin-opioids",
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
    emergencyAction: "Call 000 immediately, administer Naloxone, place in recovery position or perform rescue breaths/CPR."
  },
  {
    id: "nitazenes",
    name: "Nitazenes (Synthetic Opioids)",
    category: "opioids",
    slang: "Protonitazene, Metonitazene, Isotonitazene, 'Frankenstein opioids'",
    form: "White/grey/yellow powders, pressed into fake Xanax or OxyContin, or cut into ketamine and MDMA",
    timeline: {
      all: { onset: "Rapid (seconds to minutes)", peak: "10–30 mins", duration: "4–6 hrs" }
    },
    commonDose: "Micrograms (fraction of a milligram). Potency up to 1,000x morphine.",
    effects: [
      "Extreme rapid sedation and opioid receptor saturation",
      "Immediate suppression of respiratory drive"
    ],
    risks: [
      "Sudden respiratory arrest before the person can even call for help",
      "Unexpected presence in non-opioid drugs (e.g. counterfeit benzos, MDMA, ketamine)",
      "Resistance to single doses of naloxone due to high receptor affinity"
    ],
    harmReductionTips: [
      "Carry multiple doses of Naloxone (Nyxoid / Prenoxad) - a single dose may not be enough to reverse a nitazene overdose.",
      "Get all illicit powders, pills, and prescription tablets from unverified sources tested at CanTEST.",
      "Use Nitazene test strips (available at CanTEST and harm reduction outlets).",
      "Never use when alone in a locked room."
    ],
    overdoseSigns: "Instant collapse, pinpoint pupils, breathing stops almost immediately, blue skin.",
    emergencyAction: "Call 000 immediately, administer Naloxone immediately, start CPR compressions, repeat Naloxone every 2–3 minutes."
  },
  {
    id: "lsd",
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
      "Substituted NBOMes ('if it's bitter, it's a spitter' - real LSD is tasteless)"
    ],
    harmReductionTips: [
      "Set & Setting: Only take when in a calm mindset and comfortable, safe environment with trusted friends.",
      "Have a sober 'trip sitter' who can reassure you if feelings become overwhelming.",
      "If it's bitter, it's a spitter: Real LSD blotter is tasteless. Severe bitter/numbing taste indicates toxic 25I-NBOMe.",
      "Clear your schedule for 24 hours: Do not drive or make major decisions.",
      "Grounding techniques: If anxious, change the room, change the music, focus on slow deep breaths, remember 'this is temporary'."
    ],
    overdoseSigns: "Extreme panic, agitation, terrifying delusions, aggressive confusion. (Physically, LSD does not cause fatal respiratory arrest).",
    emergencyAction: "Take to quiet, dim space. Reassure gently. Do not restrain. Seek medical attention if violent or self-harming."
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
    commonDose: "Dried Psilocybe cubensis: Mild: 1–1.5g; Moderate: 2–3g; Strong: 3.5g+ (Note: Native Australian species like P. subaeruginosa are 2–3x stronger!).",
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
      "Respect species potency: Australian wild 'Subs' (*P. subaeruginosa*) are much stronger than garden *P. cubensis*.",
      "Have a trusted sober trip sitter in a safe, peaceful natural or home environment."
    ],
    overdoseSigns: "Severe panic, disorientation, vomiting, terror. Physical toxicity is low for pure psilocybin.",
    emergencyAction: "Provide warmth, calm voices, quiet environment, reassurance that the drug will wear off safely."
  },
  {
    id: "methamphetamine",
    name: "Methamphetamine & Amphetamine",
    category: "stimulants",
    slang: "Ice, Meth, Crystal, Glass, Shard, Speed, Dexies",
    form: "Clear glass-like crystals (ice), off-white powder or paste (speed), prescription tablets (dexamphetamine)",
    timeline: {
      smoked: { onset: "Seconds", peak: "10–30 mins", duration: "8–14 hrs" },
      nasal: { onset: "3–5 mins", peak: "30 mins", duration: "6–10 hrs" },
      oral: { onset: "20–40 mins", peak: "2–3 hrs", duration: "8–12 hrs" }
    },
    commonDose: "10–30 mg for low tolerance. Long elimination half-life (10–12 hours).",
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
    emergencyAction: "Calm quiet space, cool towels, encourage hydration. Call 000 if chest pain, seizures, or violent delirium occur."
  },
  {
    id: "benzodiazepines",
    name: "Benzodiazepines",
    category: "depressants",
    slang: "Benzos, Xanies, Vallies, Bars, Mylan, Bricks",
    form: "Pharmaceutical tablets, illicit pressed 'counterfeit' bars, capsules",
    timeline: {
      oral: { onset: "15–45 mins", peak: "1–2 hrs", duration: "6–24 hrs depending on compound (Alprazolam vs Diazepam)" }
    },
    commonDose: "Varies by specific drug: Diazepam 5–10mg; Alprazolam 0.5–1mg.",
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
    emergencyAction: "Place in Recovery Position, ensure open airway. Call 000 immediately if breathing is slow or person cannot be aroused."
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
      "Cannabinoid Hyperemesis Syndrome (CHS - cyclic severe nausea relieved only by hot showers)",
      "Respiratory irritation from smoking with tobacco ('spin')"
    ],
    harmReductionTips: [
      "Edibles rule: Start low (2.5–5mg THC) and wait at least 2 full hours before eating more.",
      "Avoid spinning with tobacco: Tobacco significantly increases addiction, cancer risk, and cardiovascular strain.",
      "Use dry-herb vaporizers or water pipes instead of smoking joints or bongs with tobacco.",
      "If having a panic attack ('greened out'): Chew black peppercorns (contains beta-caryophyllene), drink water, lie down, remember THC cannot cause a fatal physical overdose."
    ],
    overdoseSigns: "Severe panic, dizziness, heart palpitations, persistent nausea, extreme disorientation.",
    emergencyAction: "Sit person in quiet airy space, reassure with calm voice, provide cool water or lemon/honey drink."
  },
  {
    id: "nitrous-oxide",
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
    emergencyAction: "Remove balloon, supply fresh air immediately. If unresponsive after 30 seconds, call 000."
  }
];
