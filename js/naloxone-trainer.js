// Naloxone Training Module & Overdose Response Simulator
export const NALOXONE_BASICS = {
  title: "Naloxone: The Opioid Reversal Medication",
  whatIsIt: "Naloxone is a life-saving medication that rapidly reverses the toxic effects of opioids (such as heroin, fentanyl, oxycodone, methadone, and nitazenes) by binding tightly to opioid receptors and displacing the opioid molecules.",
  keyFacts: [
    { title: "Completely Non-Addictive", desc: "Naloxone has zero abuse potential and cannot cause a high or intoxication." },
    { title: "Safe Even If Unsure", desc: "If someone is unresponsive and you don't know what they took, giving Naloxone WILL NOT harm them. It has zero effect if no opioids are in their system." },
    { title: "Temporary Action (30–90 Mins)", desc: "Naloxone wears off in 30 to 90 minutes. Many opioids (especially methadone, slow-release oxycodone, or nitazenes) stay in the body much longer. Calling 000 is always required because the overdose can return when Naloxone fades." },
    { title: "100% Free in Australia", desc: "Under the Australian Government Take Home Naloxone (THN) program, anyone in the ACT can collect free Naloxone from community pharmacies, CanTEST, CAHMA, or Directions Health with no prescription and no Medicare card needed." }
  ],
  formulations: [
    {
      id: "nyxoid",
      name: "Nyxoid Nasal Spray (1.8mg)",
      type: "Intranasal",
      package: "Pack contains 2 single-dose nasal spray devices",
      howToAdminister: "Peel blister pack. Insert nozzle into one nostril. Press the plunger firmly until it clicks. Do NOT test spray or prime (primes waste the single dose!)."
    },
    {
      id: "prenoxad",
      name: "Prenoxad Pre-filled Syringe (0.4ml / dose)",
      type: "Intramuscular Injection",
      package: "Pre-filled 2ml glass syringe with 2 sterile needles (contains 5 separate 0.4ml doses)",
      howToAdminister: "Twist needle onto syringe. Inject 90° straight into outer middle thigh (can inject through denim or clothing). Press plunger down to the first marker line (0.4ml)."
    }
  ]
};

export const RECOGNITION_GUIDE = {
  opioidOverdose: {
    title: "Opioid Overdose (Requires Naloxone Immediately)",
    symptoms: [
      "Pinpoint / constricted pupils (very tiny pupils)",
      "Unresponsive to shouting, shaking, or sternal rub",
      "Very slow, shallow breathing (<8 breaths per minute) or stopped breathing entirely",
      "Gurgling, choking, or snoring sounds ('the death rattle')",
      "Lips, tongue, or fingernails turning blue, purple, or pale grey",
      "Limp, floppy arms and legs",
      "Cool, clammy, pale skin"
    ]
  },
  stimulantOveramping: {
    title: "Stimulant Overamping (Ice / Cocaine / MDMA - Naloxone NOT directly effective, but given if suspected opioid cut)",
    symptoms: [
      "Rapid racing pulse (>140 bpm) and severe chest pain",
      "Extreme hyperthermia (burning hot skin, intense sweating)",
      "Severe agitation, panic, paranoia, or psychosis",
      "Rigid muscles, uncontrollable jaw clenching, seizures"
    ],
    response: "Do NOT give sedatives. Move to quiet cool space, loosen clothing, cold water on neck, call 000 immediately if chest pain or seizure occurs."
  },
  ghbComa: {
    title: "GHB / GBL 'G-Sleep' or Coma (Naloxone NOT effective)",
    symptoms: [
      "Sudden deep unresponsiveness within 20–45 mins of dosing",
      "Erratic or gasping breathing",
      "Muscle twitching or jerking (myoclonus)",
      "Vomiting while unconscious (extreme choking hazard)"
    ],
    response: "Immediately place in RECOVERY POSITION. Clear airway. Call 000 immediately. Never let them 'sleep it off' on their back."
  }
};

export const SIMULATION_STEPS = [
  {
    step: 1,
    title: "1. Check Response & Stimulate",
    action: "Assess consciousness",
    instructions: [
      "Call the person's name loudly in both ears.",
      "Firmly squeeze their shoulder muscles or perform a vigorous 'sternal rub' (rub your knuckles firmly up and down their breastbone for 5 seconds).",
      "If there is NO response or they only groan weakly, they are in a medical emergency."
    ],
    warning: "Never slap, throw cold water, or inject salt water/milk into the person. These are myths that waste critical minutes."
  },
  {
    step: 2,
    title: "2. Call 000 (Emergency Services)",
    action: "Call for an ambulance immediately",
    instructions: [
      "Dial 000 on your mobile phone and put it on speaker.",
      "Tell the operator: 'I have an unresponsive person who is not breathing normally. I suspect a drug overdose.'",
      "Provide your exact address or nearby landmarks.",
      "ACT Police Protocol: In the ACT and across Australia, police DO NOT routinely attend medical overdose calls unless paramedics request assistance for violence or an unattended death. Paramedics are there to save lives, not arrest people."
    ],
    warning: "Do not delay calling 000. Naloxone is temporary; professional medical support is vital."
  },
  {
    step: 3,
    title: "3. Check Airway & Breathing",
    action: "Look, Listen, and Feel for 10 seconds",
    instructions: [
      "Gently tilt their head back and lift the chin to open the airway.",
      "Check mouth for food, vomit, or obstructions.",
      "Look for chest rise and fall; listen for breathing sounds; feel for breath on your cheek for 10 seconds.",
      "If breathing is absent, slow (<1 breath every 6 seconds), or sounds like loud gurgling/snoring, proceed immediately to administer Naloxone."
    ]
  },
  {
    step: 4,
    title: "4. Administer Naloxone",
    action: "Choose formulation to administer",
    options: {
      nyxoid: {
        name: "Nyxoid (Nasal Spray)",
        steps: [
          "1. Peel open the blister package to remove the single device.",
          "2. Support the device with two fingers on the nozzle collar and your thumb on the red plunger.",
          "3. DO NOT test-spray or prime the device.",
          "4. Gently insert nozzle into one nostril until your fingers touch the base of the nose.",
          "5. Press plunger firmly until it clicks to deliver the full 1.8mg dose."
        ]
      },
      prenoxad: {
        name: "Prenoxad (IM Injection)",
        steps: [
          "1. Open yellow case and remove pre-filled syringe and needle.",
          "2. Twist needle firmly onto syringe tip and pull off protective needle cap.",
          "3. Hold like a dart and inject needle at a 90-degree angle into outer mid-thigh (can inject through jeans).",
          "4. Depress plunger down to the first black marker line on the barrel (0.4ml).",
          "5. Carefully withdraw needle and recap inside yellow case."
        ]
      }
    }
  },
  {
    step: 5,
    title: "5. Position & Support Breathing",
    action: "Recovery Position or CPR",
    instructions: [
      "IF BREATHING: Place the person into the RECOVERY POSITION on their side to prevent choking if they vomit.",
      "IF NOT BREATHING: Keep them on their back, open airway, and start CPR (30 chest compressions at 100–120 bpm followed by 2 rescue breaths, or hands-only continuous compressions).",
      "Use our CPR Metronome tool to maintain the correct rhythm."
    ]
  },
  {
    step: 6,
    title: "6. Wait 2 to 3 Minutes & Re-Evaluate",
    action: "Monitor for revival",
    instructions: [
      "Naloxone takes approximately 2 to 3 minutes to activate in the brain.",
      "Stay with the person and continue monitoring breathing and pulse.",
      "IF NO IMPROVEMENT after 2–3 minutes: Administer a SECOND DOSE of Naloxone (using a new Nyxoid device in the alternate nostril, or depressing Prenoxad to the next line)."
    ],
    warning: "Strong synthetic opioids like Nitazenes or Fentanyl frequently require 2 to 4 doses of Naloxone to fully restore breathing."
  },
  {
    step: 7,
    title: "7. Post-Reversal Care & Support",
    action: "Handle awakening safely",
    instructions: [
      "When the person wakes up, they may feel confused, disoriented, cold, or experience acute withdrawal symptoms (sweating, nausea, agitation).",
      "Speak calmly and reassuringly: 'You had an overdose. I gave you Naloxone and an ambulance is coming. You are safe.'",
      "DO NOT let them consume more drugs or alcohol: Taking more drugs to counter withdrawal can cause fatal overdose as soon as Naloxone wears off in 30–60 minutes.",
      "Insist that they wait for paramedics to evaluate them."
    ]
  }
];

export const RECOVERY_POSITION_STEPS = [
  { step: 1, text: "Kneel beside the person. Place the arm nearest you out at a right angle (90°) to their body, palm facing up." },
  { step: 2, text: "Bring their other arm across their chest, and hold the back of their hand against the opposite cheek." },
  { step: 3, text: "With your other hand, pull their far knee up so the foot is flat on the ground. Pull the knee towards you to roll them smoothly onto their side." },
  { step: 4, text: "Tilt the head back slightly to keep the airway open. Check that their mouth is pointing downward so fluids drain out freely." }
];

export const NALOXONE_QUIZ = [
  {
    question: "If someone is unresponsive and you are NOT sure what substance they took, should you administer Naloxone?",
    options: [
      "No, Naloxone is dangerous if no opioids were taken.",
      "Yes, Naloxone is completely harmless if no opioids are present and could save their life if opioids or cuts were involved.",
      "Only after waiting 15 minutes to see if they wake up.",
      "Only if you have a doctor's prescription."
    ],
    correctIndex: 1,
    explanation: "Correct! Naloxone has zero adverse effect on someone who has not consumed opioids. When in doubt, always administer Naloxone immediately."
  },
  {
    question: "When using Nyxoid nasal spray, should you test spray / prime it first into the air?",
    options: [
      "Yes, you must prime it to clear air bubbles.",
      "No! Priming Nyxoid will waste the entire single dose.",
      "Only if the person is an adult.",
      "Prime it twice before inserting."
    ],
    correctIndex: 1,
    explanation: "Correct! Each Nyxoid unit contains only ONE single dose. Pressing the plunger before putting it in the nostril empties the medication and wastes it."
  },
  {
    question: "How long should you wait before giving a second dose of Naloxone if the person has not started breathing normally?",
    options: [
      "30 seconds",
      "2 to 3 minutes",
      "10 minutes",
      "Never give a second dose"
    ],
    correctIndex: 1,
    explanation: "Correct! Naloxone takes 2 to 3 minutes to cross the blood-brain barrier. If breathing remains absent or shallow after 2-3 minutes, administer the second dose."
  },
  {
    question: "Why MUST you call 000 even if the person wakes up completely after receiving Naloxone?",
    options: [
      "Because police must file an incident report.",
      "Because Naloxone wears off in 30–90 minutes, and the original opioid can put them back into an overdose.",
      "Because Naloxone becomes toxic in the bloodstream after 1 hour.",
      "It is not necessary to call 000 if they wake up."
    ],
    correctIndex: 1,
    explanation: "Correct! Naloxone's half-life is shorter than most opioids (especially methadone, nitazenes, and slow-release opioids). Once Naloxone leaves receptors, the person can slip back into fatal coma."
  },
  {
    question: "How can anyone in the ACT obtain free Naloxone under the Take Home Naloxone program?",
    options: [
      "Must have a doctor's prescription and pay $45.",
      "Walk into participating ACT community pharmacies, CanTEST, or CAHMA and request it for free with zero prescription and no Medicare card needed.",
      "Only registered emergency medical staff can obtain it.",
      "Must complete an 8-hour classroom qualification."
    ],
    correctIndex: 1,
    explanation: "Correct! The Australian Take Home Naloxone program provides free Nyxoid and Prenoxad across the ACT to any member of the public, family member, or venue worker."
  }
];

export const ACT_FREE_NALOXONE_OUTLETS = [
  { name: "CanTEST Health & Drug Checking Service", location: "Canberra City Health Building, 1 Moore St, Civic", hours: "Tue 10-2, Thu 3-7, Fri 6-10" },
  { name: "CAHMA (Canberra Alliance for Harm Minimisation)", location: "The Griffin Centre, Level 2, 20 Genge St, Canberra City", phone: "(02) 6253 4020" },
  { name: "Directions Health Services", location: "Level 6, Cosmopolitan Centre, Woden ACT", phone: "(02) 6132 4800" },
  { name: "Directions NSP (Needle & Syringe Program)", location: "Philip / Woden & Mobile Delivery", phone: "(02) 6132 4800" },
  { name: "Participating ACT Community Pharmacies", location: "Over 50 community pharmacies across Canberra (Belconnen, Civic, Woden, Tuggeranong, Gungahlin)", note: "Ask the pharmacist for 'Take Home Naloxone' (Free, confidential)" }
];
