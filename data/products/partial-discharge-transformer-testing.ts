import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: PARTIAL DISCHARGE TESTING & LOCALIZATION SYSTEM
   File: data/products/partial-discharge-transformer-testing.ts
   ================================================================ */

const partialDischargeTransformerTesting: ProductData = {
  slug: "partial-discharge-transformer-testing",
  category: "Electrical Testing Equipment",
  title: "Partial Discharge Testing & Localization System",
  description:
    "Advanced multi-channel acoustic and electrical partial discharge detection, phase-resolved analysis (PRPD), and 3D coordinate fault localization system for power transformers, GIS, and high-voltage cables.",

  overview:
    "The HVTI Partial Discharge Testing & Localization System combines high-sensitivity electrical HFCT/capacitive sensors with multi-channel ultrasonic acoustic sensors to detect, analyze, and localize insulation defects inside power transformers, GIS switchgears, and power cables. Featuring advanced Phase-Resolved Partial Discharge (PRPD/PRPS) pattern recognition algorithms, intelligent digital noise suppression, and 3D time-of-flight acoustic triangulation to pinpoint the exact physical coordinates of internal insulation faults.",

  highlights: [
    "Multi-Channel Acoustic & Electrical Acquisition",
    "3D Coordinate Acoustic Fault Triangulation",
    "Phase-Resolved Pattern Recognition (PRPD/PRPS)",
    "Ultra-Wide Frequency Bandwidth & Noise Filtering",
  ],

  renderType: "image",
  image: "/images/products/partial-discharge-transformer-testing.jpg",
  specImage: "/images/products/product-testing.jpg",

  engineeringAtAGlance: [
    {
      id: "channels",
      icon: "signal",
      value: "Up to 16 Channels",
      label: "ACQUISITION CHANNELS",
      description: "Synchronous acquisition across acoustic, HFCT, UHF, and TEV sensor inputs.",
      highlighted: true,
    },
    {
      id: "sensitivity",
      icon: "testing",
      value: "< 1 pC Sensitivity",
      label: "ELECTRICAL SENSITIVITY",
      description: "IEC 60270 compliant ultra-low noise measurement floor for lab and on-site testing.",
    },
    {
      id: "localization",
      icon: "field",
      value: "3D Acoustic Triangulation",
      label: "FAULT LOCALIZATION",
      description: "Calculates exact X-Y-Z coordinates of internal partial discharge source in transformers.",
    },
    {
      id: "analysis",
      icon: "control",
      value: "AI Pattern Classification",
      label: "DEFECT RECOGNITION",
      description: "Distinguishes corona, internal cavity discharge, floating electrode, and surface tracking.",
    },
  ],

  metrics: [
    {
      id: "sensitivity",
      icon: "testing",
      label: "PD SENSITIVITY",
      value: "< 1 pC (Electrical)",
      subtext: "IEC 60270 Standard",
    },
    {
      id: "acoustic",
      icon: "signal",
      label: "ACOUSTIC BANDWIDTH",
      value: "20 kHz – 300 kHz",
      subtext: "Resonant Piezo Sensors",
    },
    {
      id: "sampling",
      icon: "voltage",
      label: "SAMPLING RATE",
      value: "100 MS/s per channel",
      subtext: "High-speed 14-bit ADC",
    },
    {
      id: "localization-accuracy",
      icon: "field",
      label: "3D LOCATION ACCURACY",
      value: "± 10 cm in oil",
      subtext: "Time of flight algorithm",
    },
  ],

  specificationsTable: [
    {
      parameter: "Standard Compliance",
      details: "High-voltage test techniques — Partial discharge measurements",
      range: "IEC 60270, IEEE Std C57.127, IEEE Std 400.3",
    },
    {
      parameter: "Number of Channels",
      details: "Modular expandability for large transformer tanks",
      range: "4, 8, 12, or 16 synchronous acquisition channels",
    },
    {
      parameter: "Electrical PD Measurement Range",
      details: "Calibrated apparent charge measurement",
      range: "1 pC to 100,000 pC (± 1% accuracy)",
    },
    {
      parameter: "Acoustic Sensor Type",
      details: "Magnetic-mount resonant piezoelectric transducers with preamps",
      range: "40 kHz, 80 kHz, 150 kHz resonance options",
    },
    {
      parameter: "Dynamic Range",
      details: "Ultra-wide linear dynamic range",
      range: "> 80 dB with programmable digital gain",
    },
    {
      parameter: "Noise Suppression System",
      details: "Dynamic hardware and software noise filtering",
      range: "Time-window gating, DSP notch filters, wave-shape classification",
    },
    {
      parameter: "Localization Software Algorithms",
      details: "Automated 3D geometric coordinate solver for transformer tanks",
      range: "Calculates acoustic velocity, sensor coordinates, and fault center",
    },
    {
      parameter: "Interface & Data Export",
      details: "High-speed USB 3.0 / Gigabit Ethernet to rugged industrial laptop",
      range: "Automated test certificate generation in PDF/Word",
    },
  ],

  applications: [
    {
      id: "transformers",
      title: "Power Transformers & Shunt Reactors",
      icon: "transformer",
      isCenter: true,
    },
    {
      id: "gis",
      title: "Gas Insulated Switchgear (GIS)",
      icon: "switchgear",
    },
    {
      id: "cables",
      title: "HV & EHV Underground Cables",
      icon: "cable",
    },
    {
      id: "bushings",
      title: "High Voltage Bushings",
      icon: "substation",
    },
    {
      id: "generators",
      title: "Rotating Machines (Generators/Motors)",
      icon: "generator",
    },
  ],

  features: [
    {
      title: "Synchronous Combined Acoustic & Electrical Detection",
      description:
        "Simultaneously triggers on electrical PD pulses and records ultrasonic acoustic sound waves propagating through transformer insulating oil for foolproof confirmation.",
    },
    {
      title: "3D Time-of-Arrival (TOA) Fault Triangulation",
      description:
        "Uses nanosecond-resolution time-difference algorithms across multiple magnetic acoustic sensors to pinpoint the 3D X-Y-Z coordinates of internal insulation defects.",
    },
    {
      title: "Phase-Resolved Partial Discharge (PRPD & PRPS) Pattern Library",
      description:
        "Automatically maps discharge events against the AC voltage phase angle, recognizing signature patterns for void discharge, surface tracking, and corona.",
    },
    {
      title: "Advanced Real-Time Substation Noise Gating",
      description:
        "State-of-the-art DSP digital filtering and reference channel gating effectively reject heavy electromagnetic interference, broadcast signals, and corona in switchyards.",
    },
    {
      title: "Comprehensive Diagnostic Reporting Suite",
      description:
        "Generates standardized diagnostic reports with statistical PD metrics, q-max, repetition rates, pulse waveforms, and 3D defect location plots.",
    },
  ],

  benefits: [
    {
      id: "prevention",
      icon: "shield",
      title: "Early Prevention of Catastrophic Failures",
      description:
        "Identifies evolving insulation weaknesses months before complete dielectric breakdown or transformer explosion occurs.",
    },
    {
      id: "savings",
      icon: "gear",
      title: "Targeted Repair & Reduced Downtime",
      description:
        "Knowing the exact 3D location of the defect allows maintenance crews to open the transformer tank and repair the affected winding section directly.",
    },
    {
      id: "compliance",
      icon: "briefcase",
      title: "Full IEC 60270 Testing Compliance",
      description:
        "Provides calibrated factory acceptance (FAT) and site commissioning testing for high-voltage utilities and transformer manufacturers.",
    },
  ],

  cta: {
    title: "Need advanced partial discharge testing or localization?",
    description:
      "Consult with our high-voltage diagnostics team for system configurations, sensor selection, and turnkey transformer testing services.",
    primaryButtonText: "Request Technical Consultation",
    primaryButtonLink: "/contact?subject=Partial%20Discharge%20Testing%20System",
  },
};

export default partialDischargeTransformerTesting;
