# CanReduce ACT — Harm Reduction, Drug Checking & Naloxone Hub

**CanReduce ACT** is an evidence-based, compassionate, non-judgmental web application designed to reduce substance-related harms in the Australian Capital Territory (ACT). It integrates official pill testing information from **CanTEST**, real-time community health alerts, interactive **Naloxone** overdose reversal training, the **Drug Wheel 101** encyclopedia, a **combination risk matrix**, and essential emergency tools.

---

## 🌟 Key Features

### 1. 🔬 CanTEST & ACT Drug Checking Hub
* **Real-time Opening Hours Status**: Live calculator tracking CanTEST's operational schedule (Tuesdays 10am–2pm, Thursdays 3pm–7pm, Fridays 6pm–10pm at the Canberra City Health Building, 1 Moore St, Civic).
* **Testing Process Demystified**: Clear 4-step walkthrough of chemical spectrometry (FTIR), test strips, and harm reduction consultations with health professionals and peer workers (CAHMA, Directions Health, Pill Testing Australia).
* **Latest ACT Drug Alerts & Recalls**: Live notifications on local high-risk detections, including potent synthetic opioids (**Nitazenes** like Protonitazene), ultra-high-dose MDMA pressings (>200–300mg), substituted synthetic cathinones, and ketamine cuts.
* **ACT Decriminalisation Guide**: Overview of the *Drugs of Dependence (Personal Use) Amendment Act 2022* (in effect since October 2023), explaining civil notice thresholds (MDMA 1.5g, Cocaine 1.5g, Heroin 1.0g, etc.) and health diversion pathways.

### 2. 🫀 Naloxone Training & Overdose Response Simulator
* **Opioid Toxidrome vs. Overamping vs. G-Sleep**: Clear differential symptom charts to distinguish between opioid overdose, stimulant toxicity, and GHB coma.
* **Interactive 7-Step Overdose Simulator**: Step-by-step guidance covering consciousness checks, calling 000, airway clearing, administration of **Nyxoid** (nasal spray) or **Prenoxad** (intramuscular injection), recovery positioning, rescue breathing, and post-reversal care.
* **Overdose Readiness Quiz & Responder Badge**: 5-question clinical quiz with instant rationales and digital certification badge.
* **Take Home Naloxone Outlets Directory**: Direct details for free, no-script, no-cost Naloxone pickup across Canberra (CanTEST, CAHMA, Directions Health, and participating community pharmacies).

### 3. 📚 Drugs 101 Knowledge Base
* **The Drug Wheel**: Filterable by Stimulants, Depressants, Opioids, Psychedelics, Dissociatives, Empathogens, and Cannabinoids.
* **Substance Monographs**: Detailed profiles covering:
  - Pharmacokinetic timelines (onset, peak, duration across oral, nasal, and inhaled routes).
  - Subjective & desired effects.
  - Physiological risks and adverse reactions.
  - Practical harm reduction tips (hydration rules, testing, dosing, set and setting).
  - Overdose markers and immediate first aid.

### 4. 🔄 Substance Interaction & Combination Matrix
* **Pairwise Risk Evaluator**: Select any two substances (e.g. Alcohol + GHB, MDMA + Cocaine, Opioids + Benzos, LSD + MDMA) to view:
  - Clinical risk level: *Dangerous / Life-Threatening*, *Unsafe*, *Caution*, *Low Risk & Synergy*, *Low Risk & No Synergy*.
  - Detailed biochemical and physiological mechanisms.

### 5. 🌙 Night Out Safety Companion & CPR Tools
* **Mindful Hydration Counter**: Tracks water intake (~250ml/hr resting or 500ml/hr dancing) while alerting against hyponatremia (water intoxication from overhydration on MDMA).
* **Dose Interval Timer**: Logs dose times to prevent premature or compulsive redosing.
* **Australian Resuscitation CPR Metronome**: Web Audio API rhythm pacer at 100–120 BPM with audio clicks, visual pulse rings, and 30-compression cycle cues.
* **100% Privacy**: All session logs reside exclusively in local storage with a one-click session wipe.

### 6. 🚨 One-Tap Emergency SOS
* Instant 000 Ambulance dialer.
* High-accuracy GPS coordinate locator to assist emergency dispatchers.
* Australian police/ambulance attendance policy reassurance (paramedics attend to save lives, police do not attend routine medical overdoses).
* Direct hotlines for CAHMA peer support line, CanTEST / Directions Health, ADIS (1800 250 015), and Lifeline (13 11 14).

---

## 🚀 Running the Application Locally

The application is written in clean, modern HTML5, CSS3, and ES Modules without heavy bundler dependencies.

### Option A: Python Built-in Server
From the project directory:
```bash
python3 -m http.server 8081 --bind 127.0.0.1
```
Then open `http://localhost:8081` in your web browser. Port 8081 lets this workspace copy run alongside the original Antigravity app on port 8080.

### Option B: Node.js / npx serve
```bash
npx serve .
```

Use a local HTTP server rather than opening `index.html` directly, because the app uses JavaScript ES modules.

### Migration from Antigravity
The original source was copied from `/Users/stuart/.gemini/antigravity/scratch/harm-reduction-act` on 7 October 2026. HTML, CSS, JavaScript modules, and the manifest retain their original structure and contents. No framework conversion or dependency installation is required.

---

## 📂 Project Architecture

```
harm-reduction-act/
├── index.html                  # Accessible semantic UI & tabs layout
├── manifest.json               # PWA offline configuration
├── css/
│   └── styles.css              # Dark-mode theme, glassmorphism, responsive styles
├── js/
│   ├── app.js                  # Master application orchestrator & routing
│   ├── cantest-data.js         # CanTEST info, hours, and verified ACT drug alerts
│   ├── drugs101-data.js        # Comprehensive Drug Wheel substance encyclopedia
│   ├── interactions-data.js    # Combination risk matrix and clinical mechanisms
│   ├── naloxone-trainer.js     # Overdose protocol, simulator, quiz, and outlets
│   ├── metronome.js            # Web Audio API CPR metronome (100–120 BPM)
│   └── tracker.js              # Session hydration & dose timing tracker
└── README.md
```

---

## 🏛️ Clinical & Community Acknowledgments
This app draws on guidance from:
* **CanTEST Health and Drug Checking Service**
* **Directions Health Services**
* **CAHMA** (Canberra Alliance for Harm Minimisation and Advocacy)
* **Pill Testing Australia**
* **ACT Health Directorate**
* **Australian Resuscitation Council (ARC)**
* **Take Home Naloxone (THN) Program** (Commonwealth Department of Health)
