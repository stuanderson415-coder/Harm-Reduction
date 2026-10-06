// Substance Interactions and Combination Risk Matrix
export const RISK_LEVELS = {
  DANGEROUS: {
    label: "Dangerous / Life-Threatening",
    badgeClass: "badge-dangerous",
    color: "#ef4444",
    icon: "alert-triangle",
    description: "These combinations present extreme risk of fatal toxicity, cardiac arrest, respiratory failure, or serotonin syndrome. Avoid completely."
  },
  UNSAFE: {
    label: "Unsafe",
    badgeClass: "badge-unsafe",
    color: "#f97316",
    icon: "alert-circle",
    description: "Considerable risk of physical harm, severe physiological strain, toxic metabolites, or severe psychological distress."
  },
  CAUTION: {
    label: "Caution Required",
    badgeClass: "badge-caution",
    color: "#eab308",
    icon: "info",
    description: "Synergistic effects or unexpected reactions. Can be unpredictable; doses of both substances must be reduced significantly."
  },
  LOW_RISK_SYNERGY: {
    label: "Low Risk & Synergy",
    badgeClass: "badge-synergy",
    color: "#10b981",
    icon: "plus-circle",
    description: "Substances interact synergistically without dangerous physical toxicity. Subjective effects are substantially magnified."
  },
  LOW_RISK_NO_SYNERGY: {
    label: "Low Risk & No Synergy",
    badgeClass: "badge-neutral",
    color: "#06b6d4",
    icon: "check-circle",
    description: "Effects do not amplify each other dangerously. Minor or additive interaction only."
  }
};

export const INTERACTION_PAIRS = [
  {
    substanceA: "alcohol",
    substanceB: "ghb",
    level: "DANGEROUS",
    title: "Alcohol + GHB / GBL",
    summary: "EXTREMELY DANGEROUS: High risk of sudden respiratory arrest, coma, and fatal choking.",
    mechanism: "Both substances act heavily on GABA receptors in the brainstem. Even small amounts of alcohol combined with normal doses of GHB multiply central nervous system depression exponentially, rapidly causing unconsciousness, severe vomiting while immobilized, and cessation of breathing."
  },
  {
    substanceA: "alcohol",
    substanceB: "ketamine",
    level: "DANGEROUS",
    title: "Alcohol + Ketamine",
    summary: "DANGEROUS: Severe ataxia, loss of motor control, vomiting while unconscious, respiratory distress.",
    mechanism: "Alcohol significantly increases ketamine's dissociative sedation while impairing the gag reflex and motor coordination. Aspiration of vomitus is a frequent cause of death with this mixture."
  },
  {
    substanceA: "alcohol",
    substanceB: "benzodiazepines",
    level: "DANGEROUS",
    title: "Alcohol + Benzodiazepines",
    summary: "DANGEROUS: Severe blackouts, complete respiratory depression, and cardiac arrest.",
    mechanism: "Both are positive allosteric modulators at GABA-A receptors. Together they cause profound respiratory collapse, profound amnesia, and dangerous disinhibited behavior with high fatal overdose statistics."
  },
  {
    substanceA: "alcohol",
    substanceB: "opioids",
    level: "DANGEROUS",
    title: "Alcohol + Opioids (Heroin / Oxycodone / Methadone)",
    summary: "DANGEROUS: Fatal respiratory depression. The leading cause of opioid-related fatalities.",
    mechanism: "Both compounds suppress the medullary respiratory center in the brain stem that triggers breathing reflex when carbon dioxide builds up. Breathing slows to zero without the person realizing it."
  },
  {
    substanceA: "alcohol",
    substanceB: "cocaine",
    level: "UNSAFE",
    title: "Alcohol + Cocaine",
    summary: "UNSAFE: Formation of Cocaethylene in the liver; 18–25x cardiotoxic risk.",
    mechanism: "When ingested together, the liver metabolizes ethanol and cocaine into a unique toxic metabolite called Cocaethylene. It has a longer half-life and dramatically increases arrhythmias, heart attack, and stroke risk."
  },
  {
    substanceA: "alcohol",
    substanceB: "mdma",
    level: "CAUTION",
    title: "Alcohol + MDMA",
    summary: "CAUTION: Dehydration, liver strain, masks intoxication, dulls MDMA euphoria.",
    mechanism: "Alcohol is a diuretic and dulls the desired empathic and cognitive effects of MDMA, causing users to drink or redose more than intended. Both compounds impair thermoregulation."
  },
  {
    substanceA: "alcohol",
    substanceB: "cannabis",
    level: "CAUTION",
    title: "Alcohol + Cannabis ('Crossfading')",
    summary: "CAUTION: Alcohol increases THC bloodstream absorption; dizziness, severe nausea ('the spins').",
    mechanism: "Ethanol causes vasodilation and accelerates gastrointestinal/pulmonary absorption of THC, resulting in plasma THC levels up to double compared to cannabis alone. Take cannabis BEFORE alcohol or reduce intake."
  },
  {
    substanceA: "opioids",
    substanceB: "benzodiazepines",
    level: "DANGEROUS",
    title: "Opioids + Benzodiazepines",
    summary: "EXTREMELY DANGEROUS: Responsible for over 50% of pharmaceutical overdose deaths.",
    mechanism: "Synergistic sedation completely arrests autonomic breathing drive. If you must use opioids, never combine with Xanax, Valium, or unprescribed street benzos."
  },
  {
    substanceA: "opioids",
    substanceB: "cocaine",
    level: "DANGEROUS",
    title: "Opioids + Cocaine ('Speedball')",
    summary: "DANGEROUS: Masking effect leads to delayed fatal opioid overdose.",
    mechanism: "The intense stimulant effect of cocaine temporarily masks the respiratory depression of the opioid. Because cocaine's duration is short (45 mins) while opioids last 3–6 hours, the user can suddenly stop breathing when the cocaine wears off."
  },
  {
    substanceA: "opioids",
    substanceB: "ketamine",
    level: "DANGEROUS",
    title: "Opioids + Ketamine",
    summary: "DANGEROUS: Profound anesthesia, airway collapse, and respiratory arrest.",
    mechanism: "Both suppress protective airway reflexes and conscious sedation. High risk of asphyxiation."
  },
  {
    substanceA: "mdma",
    substanceB: "cocaine",
    level: "UNSAFE",
    title: "MDMA + Cocaine",
    summary: "UNSAFE: Severe cardiac stress, blunts empathic euphoria, high neurotoxicity.",
    mechanism: "Cocaine has high affinity for dopamine and serotonin transporters, which directly blocks MDMA from entering the transporter to release serotonin. This destroys the magical empathogenic 'roll' while multiplying blood pressure and heart rate."
  },
  {
    substanceA: "mdma",
    substanceB: "ketamine",
    level: "CAUTION",
    title: "MDMA + Ketamine ('Kitty Flip')",
    summary: "CAUTION: High synergy. Can induce confusion and mask hyperthermia; dose K low.",
    mechanism: "Popular combination at festivals, but ketamine reduces pain and heat awareness, making users unaware if their core temperature is dangerously rising. Always stay seated and reduce ketamine amounts."
  },
  {
    substanceA: "mdma",
    substanceB: "lsd",
    level: "LOW_RISK_SYNERGY",
    title: "MDMA + LSD ('Candy Flip')",
    summary: "LOW RISK & SYNERGY: Physically well tolerated, but subjectively intense. Halve doses.",
    mechanism: "Physiologically safe with normal doses, but psychological intensity multiplies. Harm reduction practice is to take MDMA 3–4 hours after LSD so peaks align, and reduce both substances by 30–50%."
  },
  {
    substanceA: "mdma",
    substanceB: "psilocybin",
    level: "LOW_RISK_SYNERGY",
    title: "MDMA + Psilocybin ('Hippy Flip')",
    summary: "LOW RISK & SYNERGY: Deep emotional openness, strong visual synergy. Halve doses.",
    mechanism: "Both act on 5-HT receptors. Highly profound empathic experience; stay well hydrated and stay in a comfortable, low-stress environment."
  },
  {
    substanceA: "ketamine",
    substanceB: "ghb",
    level: "DANGEROUS",
    title: "Ketamine + GHB / GBL",
    summary: "EXTREMELY DANGEROUS: Fatal respiratory failure and coma.",
    mechanism: "Both substances produce intense unconsciousness and respiratory suppression. Combining them is life-threatening."
  },
  {
    substanceA: "cannabis",
    substanceB: "lsd",
    level: "CAUTION",
    title: "Cannabis + LSD or Psilocybin",
    summary: "CAUTION: Exponential visual amplification and high risk of sudden thought loops/panic.",
    mechanism: "Cannabis is the most common trigger for challenging psychedelic trips ('bad trips'). It shatters thought continuity and drastically ramps up auditory/visual distortions. If trying, take one small puff and wait 20 minutes."
  },
  {
    substanceA: "methamphetamine",
    substanceB: "cocaine",
    level: "DANGEROUS",
    title: "Methamphetamine + Cocaine / Other Stimulants",
    summary: "DANGEROUS: Severe cardiac strain, hypertensive crisis, hyperthermia, seizures.",
    mechanism: "Massive catecholamine dump (adrenaline and noradrenaline) causing dangerous vasoconstriction, blood pressure spikes (>180/120), and sudden ventricular arrhythmias."
  },
  {
    substanceA: "nitrous-oxide",
    substanceB: "psychedelics",
    level: "LOW_RISK_SYNERGY",
    title: "Nitrous Oxide + Psychedelics / Ketamine",
    summary: "LOW RISK & SYNERGY: Brief, extremely intense peak. Must be seated to prevent falls.",
    mechanism: "Produces profound, near-instantaneous breakthroughs lasting 1–2 minutes. Main physical risk is dropping the dispenser/balloon and falling. Always sit or lie down."
  }
];
