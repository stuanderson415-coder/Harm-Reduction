// Source-linked substance combination guidance. Reviewed 9 November 2026.
// App categories are editorial guidance, not a validated clinical scoring system.
export const COMBINATION_RISK_REMINDER = "All combinations of drugs carry some risk. Every substance use experience is strongly influenced by dose, purity, the setting or situation, and the person’s emotional state at the time. Health, tolerance, medications and the time between substances also matter.";

export const RISK_LEVELS = {
  "DANGEROUS": {
    "label": "Dangerous / Life-Threatening",
    "badgeClass": "badge-dangerous",
    "color": "#ef4444",
    "description": "Risk of fatal overdose or other life-threatening harm. Avoid this combination."
  },
  "UNSAFE": {
    "label": "Unsafe",
    "badgeClass": "badge-unsafe",
    "color": "#f97316",
    "description": "Risk of serious physical harm or severe psychological distress. Severe outcomes can be life-threatening."
  },
  "CAUTION": {
    "label": "Caution Required",
    "badgeClass": "badge-caution",
    "color": "#eab308",
    "description": "Effects may intensify or become unpredictable. This does not mean safe."
  },
  "NOT_ASSESSED": {
    "label": "Not assessed / Insufficient information",
    "badgeClass": "badge-unassessed",
    "color": "#737b87",
    "description": "Insufficient pair-specific evidence to assign a rating. This does not mean safe."
  }
};

export const INTERACTION_SUBSTANCES = [
  {
    "id": "alcohol",
    "name": "Alcohol"
  },
  {
    "id": "mdma",
    "name": "MDMA"
  },
  {
    "id": "ketamine",
    "name": "Ketamine"
  },
  {
    "id": "ghb",
    "name": "GHB/GBL"
  },
  {
    "id": "opioids",
    "name": "Opioids"
  },
  {
    "id": "benzodiazepines",
    "name": "Benzodiazepines"
  },
  {
    "id": "cocaine",
    "name": "Cocaine"
  },
  {
    "id": "methamphetamine",
    "name": "Methamphetamine"
  },
  {
    "id": "cannabis",
    "name": "Cannabis"
  },
  {
    "id": "lsd",
    "name": "LSD"
  },
  {
    "id": "psilocybin",
    "name": "Psilocybin"
  },
  {
    "id": "nitrous-oxide",
    "name": "Nitrous oxide"
  }
];

export const INTERACTION_PAIRS = [
  {
    "substanceA": "alcohol",
    "substanceB": "mdma",
    "level": "UNSAFE",
    "title": "Alcohol + MDMA",
    "summary": "Masked intoxication, dehydration and impaired judgement can increase the risk of harm.",
    "sources": [
      {
        "title": "ADF: Alcohol",
        "url": "https://adf.org.au/drug-facts/alcohol/"
      },
      {
        "title": "ADF: MDMA",
        "url": "https://adf.org.au/drug-facts/mdma/"
      }
    ]
  },
  {
    "substanceA": "alcohol",
    "substanceB": "ketamine",
    "level": "DANGEROUS",
    "title": "Alcohol + Ketamine",
    "summary": "Sedation, vomiting and aspiration can lead to unconsciousness and serious harm.",
    "sources": [
      {
        "title": "ADF: Ketamine",
        "url": "https://adf.org.au/drug-facts/ketamine/"
      }
    ]
  },
  {
    "substanceA": "alcohol",
    "substanceB": "ghb",
    "level": "DANGEROUS",
    "title": "Alcohol + GHB/GBL",
    "summary": "Respiratory suppression, coma and death.",
    "sources": [
      {
        "title": "ADF: GHB",
        "url": "https://adf.org.au/drug-facts/ghb/"
      }
    ]
  },
  {
    "substanceA": "alcohol",
    "substanceB": "opioids",
    "level": "DANGEROUS",
    "title": "Alcohol + Opioids",
    "summary": "Respiratory suppression and fatal overdose.",
    "sources": [
      {
        "title": "ADF: Opioids",
        "url": "https://adf.org.au/drug-facts/opioids/"
      }
    ]
  },
  {
    "substanceA": "alcohol",
    "substanceB": "benzodiazepines",
    "level": "DANGEROUS",
    "title": "Alcohol + Benzodiazepines",
    "summary": "Respiratory suppression, blackouts and fatal overdose.",
    "sources": [
      {
        "title": "ADF: Benzodiazepines",
        "url": "https://adf.org.au/drug-facts/benzodiazepines/"
      }
    ]
  },
  {
    "substanceA": "alcohol",
    "substanceB": "cocaine",
    "level": "UNSAFE",
    "title": "Alcohol + Cocaine",
    "summary": "Cocaethylene forms when alcohol and cocaine are used together. Cardiovascular harm and death are concerns; no single risk multiplier applies to every person or dose.",
    "sources": [
      {
        "title": "ADF: Cocaine",
        "url": "https://adf.org.au/drug-facts/cocaine/"
      },
      {
        "title": "Alcohol–cocaine systematic review",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10935323/"
      }
    ]
  },
  {
    "substanceA": "alcohol",
    "substanceB": "methamphetamine",
    "level": "UNSAFE",
    "title": "Alcohol + Methamphetamine",
    "summary": "Stimulant effects mask intoxication; alcohol poisoning and overdose risk.",
    "sources": [
      {
        "title": "ADF: Alcohol",
        "url": "https://adf.org.au/drug-facts/alcohol/"
      },
      {
        "title": "ADF: Methamphetamine",
        "url": "https://adf.org.au/drug-facts/ice/"
      }
    ]
  },
  {
    "substanceA": "alcohol",
    "substanceB": "cannabis",
    "level": "CAUTION",
    "title": "Alcohol + Cannabis",
    "summary": "Nausea, vomiting and impaired coordination can increase the risk of injury.",
    "sources": [
      {
        "title": "ADF: Alcohol",
        "url": "https://adf.org.au/drug-facts/alcohol/"
      },
      {
        "title": "ADF: Cannabis",
        "url": "https://adf.org.au/drug-facts/cannabis/"
      }
    ]
  },
  {
    "substanceA": "alcohol",
    "substanceB": "lsd",
    "level": "CAUTION",
    "title": "Alcohol + LSD",
    "summary": "Nausea, vomiting and unpredictable effects.",
    "sources": [
      {
        "title": "ADF: LSD",
        "url": "https://adf.org.au/drug-facts/lsd/"
      }
    ]
  },
  {
    "substanceA": "alcohol",
    "substanceB": "psilocybin",
    "level": "NOT_ASSESSED",
    "title": "Alcohol + Psilocybin",
    "summary": "Insufficient pair-specific evidence to assign a rating. Do not assume the combination is safe.",
    "sources": [
      {
        "title": "ADF: Psilocybin",
        "url": "https://adf.org.au/drug-facts/psilocybin/"
      }
    ]
  },
  {
    "substanceA": "alcohol",
    "substanceB": "nitrous-oxide",
    "level": "UNSAFE",
    "title": "Alcohol + Nitrous oxide",
    "summary": "More sedation, impaired coordination and loss of consciousness.",
    "sources": [
      {
        "title": "ADF: Nitrous oxide",
        "url": "https://adf.org.au/drug-facts/nitrous-oxide/"
      }
    ]
  },
  {
    "substanceA": "mdma",
    "substanceB": "ketamine",
    "level": "NOT_ASSESSED",
    "title": "MDMA + Ketamine",
    "summary": "Insufficient pair-specific evidence to assign a rating. Both substances can raise heart rate and blood pressure; do not assume this combination is low risk.",
    "sources": [
      {
        "title": "ADF: MDMA",
        "url": "https://adf.org.au/drug-facts/mdma/"
      },
      {
        "title": "ADF: Ketamine",
        "url": "https://adf.org.au/drug-facts/ketamine/"
      }
    ]
  },
  {
    "substanceA": "mdma",
    "substanceB": "ghb",
    "level": "UNSAFE",
    "title": "MDMA + GHB/GBL",
    "summary": "Heart strain, seizures and masked effects.",
    "sources": [
      {
        "title": "ADF: GHB",
        "url": "https://adf.org.au/drug-facts/ghb/"
      }
    ]
  },
  {
    "substanceA": "mdma",
    "substanceB": "opioids",
    "level": "UNSAFE",
    "title": "MDMA + Opioids",
    "summary": "Masked opioid effects; overdose; risk differs by opioid.",
    "sources": [
      {
        "title": "ADF: MDMA",
        "url": "https://adf.org.au/drug-facts/mdma/"
      }
    ]
  },
  {
    "substanceA": "mdma",
    "substanceB": "benzodiazepines",
    "level": "UNSAFE",
    "title": "MDMA + Benzodiazepines",
    "summary": "Masked effects and impaired judgement; not a self-treatment recommendation.",
    "sources": [
      {
        "title": "ADF: MDMA",
        "url": "https://adf.org.au/drug-facts/mdma/"
      },
      {
        "title": "ADF: Benzodiazepines",
        "url": "https://adf.org.au/drug-facts/benzodiazepines/"
      }
    ]
  },
  {
    "substanceA": "mdma",
    "substanceB": "cocaine",
    "level": "UNSAFE",
    "title": "MDMA + Cocaine",
    "summary": "Heart strain, heart attack, agitation and psychosis risk.",
    "sources": [
      {
        "title": "ADF: MDMA",
        "url": "https://adf.org.au/drug-facts/mdma/"
      },
      {
        "title": "ADF: Cocaine",
        "url": "https://adf.org.au/drug-facts/cocaine/"
      }
    ]
  },
  {
    "substanceA": "mdma",
    "substanceB": "methamphetamine",
    "level": "UNSAFE",
    "title": "MDMA + Methamphetamine",
    "summary": "Stimulant toxicity (overamping), cardiovascular strain, overheating and agitation can be severe or life-threatening.",
    "sources": [
      {
        "title": "ADF: MDMA",
        "url": "https://adf.org.au/drug-facts/mdma/"
      },
      {
        "title": "ADF: Methamphetamine",
        "url": "https://adf.org.au/drug-facts/ice/"
      }
    ]
  },
  {
    "substanceA": "mdma",
    "substanceB": "cannabis",
    "level": "CAUTION",
    "title": "MDMA + Cannabis",
    "summary": "Intensified effects, anxiety, confusion and paranoia. The increase in psychosis risk for this specific pair has not been quantified.",
    "sources": [
      {
        "title": "ADF: MDMA",
        "url": "https://adf.org.au/drug-facts/mdma/"
      }
    ]
  },
  {
    "substanceA": "mdma",
    "substanceB": "lsd",
    "level": "CAUTION",
    "title": "MDMA + LSD",
    "summary": "An intensified psychedelic experience can include anxiety, confusion and paranoia. There is no established safe dose or timing regimen for this combination.",
    "sources": [
      {
        "title": "ADF: MDMA",
        "url": "https://adf.org.au/drug-facts/mdma/"
      },
      {
        "title": "ADF: LSD",
        "url": "https://adf.org.au/drug-facts/lsd/"
      }
    ]
  },
  {
    "substanceA": "mdma",
    "substanceB": "psilocybin",
    "level": "CAUTION",
    "title": "MDMA + Psilocybin",
    "summary": "Panic, anxiety or a difficult trip can occur as effects intensify.",
    "sources": [
      {
        "title": "ADF: MDMA",
        "url": "https://adf.org.au/drug-facts/mdma/"
      },
      {
        "title": "ADF: Psilocybin",
        "url": "https://adf.org.au/drug-facts/psilocybin/"
      }
    ]
  },
  {
    "substanceA": "mdma",
    "substanceB": "nitrous-oxide",
    "level": "CAUTION",
    "title": "MDMA + Nitrous oxide",
    "summary": "Intensified effects, confusion and nausea; nitrous hypoxia risk remains.",
    "sources": [
      {
        "title": "ADF: MDMA",
        "url": "https://adf.org.au/drug-facts/mdma/"
      },
      {
        "title": "ADF: Nitrous oxide",
        "url": "https://adf.org.au/drug-facts/nitrous-oxide/"
      }
    ]
  },
  {
    "substanceA": "ketamine",
    "substanceB": "ghb",
    "level": "DANGEROUS",
    "title": "Ketamine + GHB/GBL",
    "summary": "Unconsciousness, aspiration, breathing difficulty and possible death.",
    "sources": [
      {
        "title": "ADF: Ketamine",
        "url": "https://adf.org.au/drug-facts/ketamine/"
      },
      {
        "title": "ADF: GHB",
        "url": "https://adf.org.au/drug-facts/ghb/"
      }
    ]
  },
  {
    "substanceA": "ketamine",
    "substanceB": "opioids",
    "level": "DANGEROUS",
    "title": "Ketamine + Opioids",
    "summary": "Unconsciousness, aspiration and possible death.",
    "sources": [
      {
        "title": "ADF: Ketamine",
        "url": "https://adf.org.au/drug-facts/ketamine/"
      },
      {
        "title": "ADF: Opioids",
        "url": "https://adf.org.au/drug-facts/opioids/"
      }
    ]
  },
  {
    "substanceA": "ketamine",
    "substanceB": "benzodiazepines",
    "level": "DANGEROUS",
    "title": "Ketamine + Benzodiazepines",
    "summary": "Sedation, unconsciousness, vomiting and aspiration; possible death.",
    "sources": [
      {
        "title": "ADF: Ketamine",
        "url": "https://adf.org.au/drug-facts/ketamine/"
      },
      {
        "title": "ADF: Benzodiazepines",
        "url": "https://adf.org.au/drug-facts/benzodiazepines/"
      }
    ]
  },
  {
    "substanceA": "ketamine",
    "substanceB": "cocaine",
    "level": "UNSAFE",
    "title": "Ketamine + Cocaine",
    "summary": "Raised blood pressure and impaired thinking/coordination.",
    "sources": [
      {
        "title": "ADF: Ketamine",
        "url": "https://adf.org.au/drug-facts/ketamine/"
      },
      {
        "title": "ADF: Cocaine",
        "url": "https://adf.org.au/drug-facts/cocaine/"
      }
    ]
  },
  {
    "substanceA": "ketamine",
    "substanceB": "methamphetamine",
    "level": "UNSAFE",
    "title": "Ketamine + Methamphetamine",
    "summary": "Raised blood pressure and cardiovascular strain.",
    "sources": [
      {
        "title": "ADF: Ketamine",
        "url": "https://adf.org.au/drug-facts/ketamine/"
      },
      {
        "title": "ADF: Methamphetamine",
        "url": "https://adf.org.au/drug-facts/ice/"
      }
    ]
  },
  {
    "substanceA": "ketamine",
    "substanceB": "cannabis",
    "level": "NOT_ASSESSED",
    "title": "Ketamine + Cannabis",
    "summary": "Insufficient pair-specific evidence to assign a rating. Do not assume the combination is safe.",
    "sources": [
      {
        "title": "ADF: Cannabis",
        "url": "https://adf.org.au/drug-facts/cannabis/"
      },
      {
        "title": "ADF: Ketamine",
        "url": "https://adf.org.au/drug-facts/ketamine/"
      }
    ]
  },
  {
    "substanceA": "ketamine",
    "substanceB": "lsd",
    "level": "CAUTION",
    "title": "Ketamine + LSD",
    "summary": "Amplified effects and dissociation.",
    "sources": [
      {
        "title": "ADF: LSD",
        "url": "https://adf.org.au/drug-facts/lsd/"
      }
    ]
  },
  {
    "substanceA": "ketamine",
    "substanceB": "psilocybin",
    "level": "NOT_ASSESSED",
    "title": "Ketamine + Psilocybin",
    "summary": "Insufficient pair-specific evidence to assign a rating. Do not assume the combination is safe.",
    "sources": [
      {
        "title": "ADF: Psilocybin",
        "url": "https://adf.org.au/drug-facts/psilocybin/"
      },
      {
        "title": "ADF: Ketamine",
        "url": "https://adf.org.au/drug-facts/ketamine/"
      }
    ]
  },
  {
    "substanceA": "ketamine",
    "substanceB": "nitrous-oxide",
    "level": "CAUTION",
    "title": "Ketamine + Nitrous oxide",
    "summary": "Amplified dissociation/hallucinations; falls and hypoxia remain concerns.",
    "sources": [
      {
        "title": "ADF: Nitrous oxide",
        "url": "https://adf.org.au/drug-facts/nitrous-oxide/"
      }
    ]
  },
  {
    "substanceA": "ghb",
    "substanceB": "opioids",
    "level": "DANGEROUS",
    "title": "GHB/GBL + Opioids",
    "summary": "Very high overdose risk; slowed/stopped breathing.",
    "sources": [
      {
        "title": "ADF: GHB",
        "url": "https://adf.org.au/drug-facts/ghb/"
      },
      {
        "title": "ADF: Opioids",
        "url": "https://adf.org.au/drug-facts/opioids/"
      }
    ]
  },
  {
    "substanceA": "ghb",
    "substanceB": "benzodiazepines",
    "level": "DANGEROUS",
    "title": "GHB/GBL + Benzodiazepines",
    "summary": "Very high overdose risk; coma and death.",
    "sources": [
      {
        "title": "ADF: GHB",
        "url": "https://adf.org.au/drug-facts/ghb/"
      },
      {
        "title": "ADF: Benzodiazepines",
        "url": "https://adf.org.au/drug-facts/benzodiazepines/"
      }
    ]
  },
  {
    "substanceA": "ghb",
    "substanceB": "cocaine",
    "level": "UNSAFE",
    "title": "GHB/GBL + Cocaine",
    "summary": "Heart strain, seizures and risk of respiratory arrest.",
    "sources": [
      {
        "title": "ADF: GHB",
        "url": "https://adf.org.au/drug-facts/ghb/"
      },
      {
        "title": "ADF: Cocaine",
        "url": "https://adf.org.au/drug-facts/cocaine/"
      }
    ]
  },
  {
    "substanceA": "ghb",
    "substanceB": "methamphetamine",
    "level": "UNSAFE",
    "title": "GHB/GBL + Methamphetamine",
    "summary": "Masked GHB effects, redosing/overdose, heart strain and seizures.",
    "sources": [
      {
        "title": "ADF: GHB",
        "url": "https://adf.org.au/drug-facts/ghb/"
      },
      {
        "title": "ADF: Methamphetamine",
        "url": "https://adf.org.au/drug-facts/ice/"
      }
    ]
  },
  {
    "substanceA": "ghb",
    "substanceB": "cannabis",
    "level": "UNSAFE",
    "title": "GHB/GBL + Cannabis",
    "summary": "Increased drowsiness and sedation can impair awareness and coordination.",
    "sources": [
      {
        "title": "ADF: Cannabis",
        "url": "https://adf.org.au/drug-facts/cannabis/"
      },
      {
        "title": "ADF: GHB",
        "url": "https://adf.org.au/drug-facts/ghb/"
      }
    ]
  },
  {
    "substanceA": "ghb",
    "substanceB": "lsd",
    "level": "NOT_ASSESSED",
    "title": "GHB/GBL + LSD",
    "summary": "Insufficient pair-specific evidence to assign a rating. Do not assume the combination is safe.",
    "sources": [
      {
        "title": "ADF: GHB",
        "url": "https://adf.org.au/drug-facts/ghb/"
      },
      {
        "title": "ADF: LSD",
        "url": "https://adf.org.au/drug-facts/lsd/"
      }
    ]
  },
  {
    "substanceA": "ghb",
    "substanceB": "psilocybin",
    "level": "NOT_ASSESSED",
    "title": "GHB/GBL + Psilocybin",
    "summary": "Insufficient pair-specific evidence to assign a rating. Do not assume the combination is safe.",
    "sources": [
      {
        "title": "ADF: GHB",
        "url": "https://adf.org.au/drug-facts/ghb/"
      },
      {
        "title": "ADF: Psilocybin",
        "url": "https://adf.org.au/drug-facts/psilocybin/"
      }
    ]
  },
  {
    "substanceA": "ghb",
    "substanceB": "nitrous-oxide",
    "level": "DANGEROUS",
    "title": "GHB/GBL + Nitrous oxide",
    "summary": "Loss of consciousness and possible fatal overdose are concerns.",
    "sources": [
      {
        "title": "ADF: GHB",
        "url": "https://adf.org.au/drug-facts/ghb/"
      },
      {
        "title": "ADF: Nitrous oxide",
        "url": "https://adf.org.au/drug-facts/nitrous-oxide/"
      }
    ]
  },
  {
    "substanceA": "opioids",
    "substanceB": "benzodiazepines",
    "level": "DANGEROUS",
    "title": "Opioids + Benzodiazepines",
    "summary": "Severe respiratory suppression and fatal overdose are concerns.",
    "sources": [
      {
        "title": "ADF: Opioids",
        "url": "https://adf.org.au/drug-facts/opioids/"
      },
      {
        "title": "ADF: Benzodiazepines",
        "url": "https://adf.org.au/drug-facts/benzodiazepines/"
      }
    ]
  },
  {
    "substanceA": "opioids",
    "substanceB": "cocaine",
    "level": "DANGEROUS",
    "title": "Opioids + Cocaine",
    "summary": "Masked opioid effects, overdose and cardiovascular strain.",
    "sources": [
      {
        "title": "ADF: Opioids",
        "url": "https://adf.org.au/drug-facts/opioids/"
      },
      {
        "title": "ADF: Cocaine",
        "url": "https://adf.org.au/drug-facts/cocaine/"
      }
    ]
  },
  {
    "substanceA": "opioids",
    "substanceB": "methamphetamine",
    "level": "DANGEROUS",
    "title": "Opioids + Methamphetamine",
    "summary": "Masked effects, overdose and cardiovascular strain.",
    "sources": [
      {
        "title": "ADF: Opioids",
        "url": "https://adf.org.au/drug-facts/opioids/"
      },
      {
        "title": "ADF: Methamphetamine",
        "url": "https://adf.org.au/drug-facts/ice/"
      }
    ]
  },
  {
    "substanceA": "opioids",
    "substanceB": "cannabis",
    "level": "UNSAFE",
    "title": "Opioids + Cannabis",
    "summary": "Increased impairment and amplified effects. This does not mean cannabis has the same breathing-suppression effects as an opioid.",
    "sources": [
      {
        "title": "ADF: Opioids",
        "url": "https://adf.org.au/drug-facts/opioids/"
      },
      {
        "title": "ADF: Cannabis",
        "url": "https://adf.org.au/drug-facts/cannabis/"
      }
    ]
  },
  {
    "substanceA": "opioids",
    "substanceB": "lsd",
    "level": "NOT_ASSESSED",
    "title": "Opioids + LSD",
    "summary": "Insufficient pair-specific evidence to assign a rating. Opioid overdose risk still applies. Do not assume the combination is safe.",
    "sources": [
      {
        "title": "ADF: Opioids",
        "url": "https://adf.org.au/drug-facts/opioids/"
      },
      {
        "title": "ADF: LSD",
        "url": "https://adf.org.au/drug-facts/lsd/"
      }
    ]
  },
  {
    "substanceA": "opioids",
    "substanceB": "psilocybin",
    "level": "NOT_ASSESSED",
    "title": "Opioids + Psilocybin",
    "summary": "Insufficient pair-specific evidence to assign a rating. Opioid overdose risk still applies. Do not assume the combination is safe.",
    "sources": [
      {
        "title": "ADF: Opioids",
        "url": "https://adf.org.au/drug-facts/opioids/"
      },
      {
        "title": "ADF: Psilocybin",
        "url": "https://adf.org.au/drug-facts/psilocybin/"
      }
    ]
  },
  {
    "substanceA": "opioids",
    "substanceB": "nitrous-oxide",
    "level": "DANGEROUS",
    "title": "Opioids + Nitrous oxide",
    "summary": "Overdose, unconsciousness and breathing risk.",
    "sources": [
      {
        "title": "ADF: Opioids",
        "url": "https://adf.org.au/drug-facts/opioids/"
      },
      {
        "title": "ADF: Nitrous oxide",
        "url": "https://adf.org.au/drug-facts/nitrous-oxide/"
      }
    ]
  },
  {
    "substanceA": "benzodiazepines",
    "substanceB": "cocaine",
    "level": "UNSAFE",
    "title": "Benzodiazepines + Cocaine",
    "summary": "Masked effects and overdose risk as one drug wears off.",
    "sources": [
      {
        "title": "ADF: Benzodiazepines",
        "url": "https://adf.org.au/drug-facts/benzodiazepines/"
      }
    ]
  },
  {
    "substanceA": "benzodiazepines",
    "substanceB": "methamphetamine",
    "level": "UNSAFE",
    "title": "Benzodiazepines + Methamphetamine",
    "summary": "Masked effects, redosing and overdose risk.",
    "sources": [
      {
        "title": "ADF: Benzodiazepines",
        "url": "https://adf.org.au/drug-facts/benzodiazepines/"
      }
    ]
  },
  {
    "substanceA": "benzodiazepines",
    "substanceB": "cannabis",
    "level": "UNSAFE",
    "title": "Benzodiazepines + Cannabis",
    "summary": "Increased sedation and impairment can affect awareness, judgement and coordination.",
    "sources": [
      {
        "title": "ADF: Cannabis",
        "url": "https://adf.org.au/drug-facts/cannabis/"
      }
    ]
  },
  {
    "substanceA": "benzodiazepines",
    "substanceB": "lsd",
    "level": "NOT_ASSESSED",
    "title": "Benzodiazepines + LSD",
    "summary": "Insufficient evidence to rate unsupervised mixing. Clinical use of benzodiazepines in some emergencies does not establish safety for self-treatment.",
    "sources": [
      {
        "title": "ADF: Benzodiazepines",
        "url": "https://adf.org.au/drug-facts/benzodiazepines/"
      },
      {
        "title": "ADF: LSD",
        "url": "https://adf.org.au/drug-facts/lsd/"
      }
    ]
  },
  {
    "substanceA": "benzodiazepines",
    "substanceB": "psilocybin",
    "level": "NOT_ASSESSED",
    "title": "Benzodiazepines + Psilocybin",
    "summary": "Insufficient pair-specific evidence to rate unsupervised use.",
    "sources": [
      {
        "title": "ADF: Benzodiazepines",
        "url": "https://adf.org.au/drug-facts/benzodiazepines/"
      },
      {
        "title": "ADF: Psilocybin",
        "url": "https://adf.org.au/drug-facts/psilocybin/"
      }
    ]
  },
  {
    "substanceA": "benzodiazepines",
    "substanceB": "nitrous-oxide",
    "level": "UNSAFE",
    "title": "Benzodiazepines + Nitrous oxide",
    "summary": "Increased overdose risk, sleepiness and loss of consciousness.",
    "sources": [
      {
        "title": "ADF: Nitrous oxide",
        "url": "https://adf.org.au/drug-facts/nitrous-oxide/"
      }
    ]
  },
  {
    "substanceA": "cocaine",
    "substanceB": "methamphetamine",
    "level": "DANGEROUS",
    "title": "Cocaine + Methamphetamine",
    "summary": "Additional cardiovascular strain and stroke risk can cause serious or life-threatening harm.",
    "sources": [
      {
        "title": "ADF: Cocaine",
        "url": "https://adf.org.au/drug-facts/cocaine/"
      },
      {
        "title": "ADF: Methamphetamine",
        "url": "https://adf.org.au/drug-facts/ice/"
      }
    ]
  },
  {
    "substanceA": "cocaine",
    "substanceB": "cannabis",
    "level": "UNSAFE",
    "title": "Cocaine + Cannabis",
    "summary": "Anxiety, paranoia, confusion and additional cardiovascular concerns.",
    "sources": [
      {
        "title": "ADF: Cocaine",
        "url": "https://adf.org.au/drug-facts/cocaine/"
      },
      {
        "title": "ADF: Cannabis",
        "url": "https://adf.org.au/drug-facts/cannabis/"
      }
    ]
  },
  {
    "substanceA": "cocaine",
    "substanceB": "lsd",
    "level": "UNSAFE",
    "title": "Cocaine + LSD",
    "summary": "Anxiety, paranoia and thought loops.",
    "sources": [
      {
        "title": "ADF: Cocaine",
        "url": "https://adf.org.au/drug-facts/cocaine/"
      },
      {
        "title": "ADF: LSD",
        "url": "https://adf.org.au/drug-facts/lsd/"
      }
    ]
  },
  {
    "substanceA": "cocaine",
    "substanceB": "psilocybin",
    "level": "UNSAFE",
    "title": "Cocaine + Psilocybin",
    "summary": "Anxiety, paranoia, confusion and thought loops.",
    "sources": [
      {
        "title": "ADF: Cocaine",
        "url": "https://adf.org.au/drug-facts/cocaine/"
      }
    ]
  },
  {
    "substanceA": "cocaine",
    "substanceB": "nitrous-oxide",
    "level": "NOT_ASSESSED",
    "title": "Cocaine + Nitrous oxide",
    "summary": "Insufficient pair-specific evidence to assign a rating. Do not assume the combination is safe.",
    "sources": [
      {
        "title": "ADF: Cocaine",
        "url": "https://adf.org.au/drug-facts/cocaine/"
      },
      {
        "title": "ADF: Nitrous oxide",
        "url": "https://adf.org.au/drug-facts/nitrous-oxide/"
      }
    ]
  },
  {
    "substanceA": "methamphetamine",
    "substanceB": "cannabis",
    "level": "UNSAFE",
    "title": "Methamphetamine + Cannabis",
    "summary": "Intensified effects, confusion and distress can occur. Mental-health risks vary with the person, dose and pattern of use.",
    "sources": [
      {
        "title": "ADF: Cannabis",
        "url": "https://adf.org.au/drug-facts/cannabis/"
      },
      {
        "title": "ADF: Methamphetamine",
        "url": "https://adf.org.au/drug-facts/ice/"
      }
    ]
  },
  {
    "substanceA": "methamphetamine",
    "substanceB": "lsd",
    "level": "UNSAFE",
    "title": "Methamphetamine + LSD",
    "summary": "More intense/unwanted trip, anxiety and paranoia.",
    "sources": [
      {
        "title": "ADF: Methamphetamine",
        "url": "https://adf.org.au/drug-facts/ice/"
      },
      {
        "title": "ADF: LSD",
        "url": "https://adf.org.au/drug-facts/lsd/"
      }
    ]
  },
  {
    "substanceA": "methamphetamine",
    "substanceB": "psilocybin",
    "level": "UNSAFE",
    "title": "Methamphetamine + Psilocybin",
    "summary": "Panic and more intense/unwanted trip.",
    "sources": [
      {
        "title": "ADF: Methamphetamine",
        "url": "https://adf.org.au/drug-facts/ice/"
      },
      {
        "title": "ADF: Psilocybin",
        "url": "https://adf.org.au/drug-facts/psilocybin/"
      }
    ]
  },
  {
    "substanceA": "methamphetamine",
    "substanceB": "nitrous-oxide",
    "level": "NOT_ASSESSED",
    "title": "Methamphetamine + Nitrous oxide",
    "summary": "Insufficient pair-specific evidence to assign a rating. Do not assume the combination is safe.",
    "sources": [
      {
        "title": "ADF: Methamphetamine",
        "url": "https://adf.org.au/drug-facts/ice/"
      },
      {
        "title": "ADF: Nitrous oxide",
        "url": "https://adf.org.au/drug-facts/nitrous-oxide/"
      }
    ]
  },
  {
    "substanceA": "cannabis",
    "substanceB": "lsd",
    "level": "CAUTION",
    "title": "Cannabis + LSD",
    "summary": "Confusion, panic and difficult trips can occur; ADF also reports rare psychosis. There is no established universal risk multiplier.",
    "sources": [
      {
        "title": "ADF: Cannabis",
        "url": "https://adf.org.au/drug-facts/cannabis/"
      },
      {
        "title": "ADF: LSD",
        "url": "https://adf.org.au/drug-facts/lsd/"
      },
      {
        "title": "Cannabis–psychedelics study",
        "url": "https://link.springer.com/article/10.1007/s00213-021-05999-1"
      }
    ]
  },
  {
    "substanceA": "cannabis",
    "substanceB": "psilocybin",
    "level": "CAUTION",
    "title": "Cannabis + Psilocybin",
    "summary": "Amplified effects and difficult trips can occur. Panic and psychosis are different outcomes.",
    "sources": [
      {
        "title": "ADF: Cannabis",
        "url": "https://adf.org.au/drug-facts/cannabis/"
      },
      {
        "title": "Cannabis–psychedelics study",
        "url": "https://link.springer.com/article/10.1007/s00213-021-05999-1"
      }
    ]
  },
  {
    "substanceA": "cannabis",
    "substanceB": "nitrous-oxide",
    "level": "CAUTION",
    "title": "Cannabis + Nitrous oxide",
    "summary": "Intensified effects and hallucinations; hypoxia risk remains.",
    "sources": [
      {
        "title": "ADF: Nitrous oxide",
        "url": "https://adf.org.au/drug-facts/nitrous-oxide/"
      }
    ]
  },
  {
    "substanceA": "lsd",
    "substanceB": "psilocybin",
    "level": "CAUTION",
    "title": "LSD + Psilocybin",
    "summary": "More intense or negative psychedelic effects.",
    "sources": [
      {
        "title": "ADF: LSD",
        "url": "https://adf.org.au/drug-facts/lsd/"
      }
    ]
  },
  {
    "substanceA": "lsd",
    "substanceB": "nitrous-oxide",
    "level": "CAUTION",
    "title": "LSD + Nitrous oxide",
    "summary": "Intense dissociation or short negative psychedelic experience.",
    "sources": [
      {
        "title": "ADF: LSD",
        "url": "https://adf.org.au/drug-facts/lsd/"
      },
      {
        "title": "ADF: Nitrous oxide",
        "url": "https://adf.org.au/drug-facts/nitrous-oxide/"
      }
    ]
  },
  {
    "substanceA": "psilocybin",
    "substanceB": "nitrous-oxide",
    "level": "CAUTION",
    "title": "Psilocybin + Nitrous oxide",
    "summary": "Effects and hallucinations can intensify. Oxygen deprivation and loss of consciousness remain concerns; limited evidence does not establish low risk.",
    "sources": [
      {
        "title": "ADF: Nitrous oxide",
        "url": "https://adf.org.au/drug-facts/nitrous-oxide/"
      }
    ]
  }
];

export function findInteraction(a, b) {
  return INTERACTION_PAIRS.find(pair =>
    (pair.substanceA === a && pair.substanceB === b) ||
    (pair.substanceA === b && pair.substanceB === a)
  );
}
