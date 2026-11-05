// CanTEST Health and Drug Checking Service - ACT Data & Alerts
export const CANTEST_INFO = {
  name: "CanTEST Health and Drug Checking Service",
  tagline: "Australia's first fixed-site health and drug checking service",
  location: {
    address: "Ground Floor, Canberra City Health Building, 1 Moore Street, Canberra City (Civic), ACT 2601",
    transport: "2-minute walk from Alinga Street Light Rail Station and Civic Bus Interchange",
    coordinates: { lat: -35.2796, lng: 149.1294 },
    googleMapsUrl: "https://maps.google.com/?q=Canberra+City+Health+Building+1+Moore+Street+Canberra+ACT"
  },
  operatingHours: [
    { day: "Tuesday", hours: "10:00 AM – 2:00 PM", openMinutes: 600, closeMinutes: 840, dayIndex: 2 },
    { day: "Thursday", hours: "3:00 PM – 7:00 PM", openMinutes: 900, closeMinutes: 1140, dayIndex: 4 },
    { day: "Friday", hours: "6:00 PM – 10:00 PM", openMinutes: 1080, closeMinutes: 1320, dayIndex: 5 }
  ],
  contacts: {
    phone: "(02) 6132 4800",
    email: "info@directionshealth.com",
    website: "https://directionshealth.com/cantest/",
    partners: [
      { name: "Directions Health Services", role: "Primary Service Operator & Health Consultations" },
      { name: "CAHMA", fullName: "Canberra Alliance for Harm Minimisation and Advocacy", role: "Peer Support & Harm Reduction Educators" },
      { name: "Pill Testing Australia", role: "Chemical Analysis & Testing Technology" },
      { name: "ACT Government Health", role: "Policy, Clinical Governance & Funding" }
    ]
  },
  servicesOffered: [
    {
      title: "Chemical Analysis of Substances",
      desc: "Instant testing using FTIR (Fourier-Transform Infrared) spectrometry, fentanyl and nitazene strip tests, and lab screening to identify active ingredients, cuts, and adulterants."
    },
    {
      title: "1-on-1 Health & Harm Reduction Consultation",
      desc: "Private, non-judgmental discussion with a health professional or peer worker about expected effects, dosing, interactions, and realistic risk reduction."
    },
    {
      title: "Free Take-Home Naloxone (Nyxoid & Prenoxad)",
      desc: "Free overdose reversal kits provided with rapid 3-minute training on how to save a life."
    },
    {
      title: "Fentanyl & Nitazene Test Strips",
      desc: "Free test strips and instructional guidance for testing drug samples at home."
    },
    {
      title: "Amnesty Disposal Bin",
      desc: "If testing reveals an unexpected or toxic substance, you can safely and legally discard it on the spot with zero penalties."
    },
    {
      title: "General Drop-in Health Advice",
      desc: "Sexual health check-ups, wound care, vein care, mental health support, and direct referrals to medical specialists."
    }
  ],
  testingProcess: [
    {
      step: 1,
      title: "Anonymous Check-In",
      desc: "Walk in with no ID or Medicare card required. You receive a unique confidential number."
    },
    {
      step: 2,
      title: "Sample Scraping",
      desc: "Only a tiny sample (~5-10mg, smaller than a match head, or 1-2 drops of liquid) is scraped onto the testing plate."
    },
    {
      step: 3,
      title: "Analytical Testing",
      desc: "Chemists use FTIR spectroscopy and immunoassays to detect expected and unexpected chemical compounds."
    },
    {
      step: 4,
      title: "Health & Risk Consultation",
      desc: "You sit down with a health educator to review the findings, potency alerts, safer usage tips, or disposal options."
    }
  ]
};

export const ACT_LEGAL_CONTEXT = {
  title: "ACT Drug Decriminalisation: What the Law Means",
  effectiveDate: "In effect since 28 October 2023",
  legislation: "Drugs of Dependence (Personal Use) Amendment Act 2022 (ACT)",
  summary: "In the ACT, personal possession of small amounts of commonly used illicit drugs is decriminalised. It is treated as a health matter rather than a criminal conviction.",
  smallQuantitiesTable: [
    { substance: "MDMA / Ecstasy", maxQuantity: "1.5 grams" },
    { substance: "Cocaine", maxQuantity: "1.5 grams" },
    { substance: "Heroin", maxQuantity: "1.0 gram" },
    { substance: "Methamphetamine (Ice)", maxQuantity: "1.5 grams" },
    { substance: "Amphetamine (Speed)", maxQuantity: "1.5 grams" },
    { substance: "Psilocybin (Mushrooms)", maxQuantity: "1.5 grams" },
    { substance: "Cannabis (Adult possession in ACT)", maxQuantity: "50g dry / 150g wet (since 2020)" }
  ],
  keyRules: [
    "Possession under the limit results in a Simple Illicit Drug Offence Notice (SIDON) - a $100 civil fine OR referral to an assessment and education session (CADAS).",
    "NO criminal record, no court appearance, and no prison sentence for personal quantities under the threshold.",
    "Drugs are still illegal and will be confiscated by police if detected.",
    "Supply, trafficking, commercial dealing, and driving under the influence (Roadside Drug Testing - RDT) remain serious criminal offences."
  ]
};
