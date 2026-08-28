import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: TRANSFORMER TESTING EQUIPMENT & BENCHES
   File: data/products/transformer-testing-benches.ts
   ================================================================ */

const transformerTestingBenches: ProductData = {
  slug: "transformer-testing-benches",
  category: "Electrical Testing Equipment",
  title: "Transformer Testing Equipment & Integrated Test Benches",
  description:
    "Comprehensive testing systems, automated test benches, transformer turns ratio meters (TTR), dual-channel winding resistance testers, and oil breakdown voltage (BDV) diagnostic instruments.",

  overview:
    "HVTI manufactures a complete suite of routine, type, and diagnostic testing equipment for distribution and power transformers. From turnkey automated test benches that measure no-load losses, load losses, impedance voltage, and heat run tests, to portable field diagnostic instruments including Transformer Turns Ratio Meters, DC Winding Resistance Testers with automated demagnetization, and fully automated 100 kV Oil BDV Spark Testers.",

  highlights: [
    "Turnkey Automated Transformer Test Benches",
    "Turns Ratio (TTR) & Phase Displacement Verification",
    "Dual-Channel Winding Resistance & Core Demagnetization",
    "Automated 80 kV / 100 kV Oil BDV Testers",
  ],

  renderType: "image",
  image: "/images/products/transformer-testing-benches.jpg",
  specImage: "/images/products/product-testing.jpg",

  engineeringAtAGlance: [
    {
      id: "bench",
      icon: "control",
      value: "Turnkey Test Benches",
      label: "SYSTEM INTEGRATION",
      description: "Full automated routine and type testing for distribution and power transformers.",
      highlighted: true,
    },
    {
      id: "ratio",
      icon: "testing",
      value: "0.9 to 10,000 Ratio",
      label: "TTR MEASUREMENT",
      description: "Measures turns ratio, phase angle, and excitation current with ± 0.1% accuracy.",
    },
    {
      id: "resistance",
      icon: "power",
      value: "Dual-Channel 20A/40A",
      label: "WINDING RESISTANCE",
      description: "Rapid measurement with built-in magnetic discharge and temperature correction.",
    },
    {
      id: "oil-bdv",
      icon: "voltage",
      value: "Up to 100 kV BDV",
      label: "INSULATING OIL BDV",
      description: "Fully automatic motorized oil breakdown test vessel to IEC 60156 standards.",
    },
  ],

  metrics: [
    {
      id: "test-capacity",
      icon: "power",
      label: "BENCH CAPACITY",
      value: "Up to 50 MVA / 132 kV",
      subtext: "Modular motor-generator sets",
    },
    {
      id: "ttr-range",
      icon: "signal",
      label: "TTR RATIO RANGE",
      value: "0.9 to 10,000",
      subtext: "Phase angle ± 0.05°",
    },
    {
      id: "resistance-range",
      icon: "testing",
      label: "RESISTANCE RANGE",
      value: "1 μΩ to 20 kΩ",
      subtext: "High-speed stabilization",
    },
    {
      id: "oil-bdv",
      icon: "voltage",
      label: "OIL BDV VOLTAGE",
      value: "0 to 100 kV AC",
      subtext: "IEC 60156 automated test",
    },
  ],

  specificationsTable: [
    {
      parameter: "Turnkey Test Bench Scope",
      details: "Automated measurement of No-load loss, Load loss, Impedance voltage, Induced overvoltage, Separate source HV",
      range: "Configured for distribution & power transformers up to 220 kV",
    },
    {
      parameter: "Transformer Turns Ratio (TTR)",
      details: "Single phase & Three phase automated test mode",
      range: "Ratio range: 0.9 to 10,000 (± 0.1% accuracy)",
    },
    {
      parameter: "Vector Group & Phase Angle Verification",
      details: "Automatic detection of 30° vector groups (Dyn11, YNd11, etc.)",
      range: "0° to 360° with 0.01° resolution",
    },
    {
      parameter: "DC Winding Resistance Tester",
      details: "Dual channel current injection with active demagnetizer",
      range: "Test current: 1A to 40A DC; Range: 1 μΩ to 20 kΩ",
    },
    {
      parameter: "Automated Oil BDV Tester",
      details: "Motorized electrode gap, magnetic stirrer, transparent safety interlock",
      range: "0 to 80 kV / 100 kV AC, slew rate 0.5 to 5 kV/s",
    },
    {
      parameter: "Oil Interfacial Tension & Moisture Measurement",
      details: "Model TP-IFT90 & Karl Fischer coulometric moisture titrator",
      range: "Compliant with ASTM D971 and IEC 60814",
    },
    {
      parameter: "Software & Automation",
      details: "Industrial PC with touchscreen SCADA, automated test certificate generator",
      range: "Database archiving with custom customer templates",
    },
    {
      parameter: "Standard Compliance",
      details: "Power transformer testing standards",
      range: "IEC 60076, IEEE C57.12.90, IS 2026",
    },
  ],

  applications: [
    {
      id: "transformer-mfg",
      title: "Transformer Manufacturers (OEM)",
      icon: "transformer",
      isCenter: true,
    },
    {
      id: "substations",
      title: "Transmission & Distribution Utilities",
      icon: "substation",
    },
    {
      id: "repair-shops",
      title: "Transformer Rewinding & Repair Workshops",
      icon: "gear",
    },
    {
      id: "third-party-labs",
      title: "Third-Party Testing & Calibration Labs",
      icon: "testing",
    },
    {
      id: "industrial-plants",
      title: "Heavy Industrial Captive Sub-Stations",
      icon: "switchgear",
    },
  ],

  features: [
    {
      title: "All-In-One Integrated Transformer Testing Benches",
      description:
        "Consolidates voltage regulators, intermediate transformers, precision power analyzers, and safety interlocks into a centralized control console with one-click automated testing.",
    },
    {
      title: "High-Speed DC Winding Resistance with Automatic Demagnetization",
      description:
        "Injects high constant DC current to saturate transformer cores rapidly, reading dual-winding resistance while safely discharging and demagnetizing the core prior to connection removal.",
    },
    {
      title: "Intelligent Turns Ratio & Vector Group Identification",
      description:
        "Calculates tap changer ratios across all tap positions in seconds, verifying transformation accuracy, phase displacement, and polarity automatically.",
    },
    {
      title: "Precision 100 kV Automated Insulating Oil BDV Tester",
      description:
        "Performs standard 6-shot oil breakdown test sequences according to IEC 60156, calculating average breakdown voltage, standard deviation, and printing results instantly.",
    },
    {
      title: "Full Temperature Correction to Reference Standard (75°C)",
      description:
        "Automatically converts measured winding resistance and load loss values to standard reference operating temperatures for accurate comparison against guarantees.",
    },
  ],

  benefits: [
    {
      id: "throughput",
      icon: "gear",
      title: "Multiplies Factory Testing Throughput",
      description:
        "Automates test switching and parameter calculation, reducing routine testing time per transformer from several hours to under 20 minutes.",
    },
    {
      id: "accuracy",
      icon: "shield",
      title: "Zero Operator Calculation Error",
      description:
        "High-precision Class 0.05 power analyzers and digital meters eliminate manual interpolation, guaranteeing 100% test certificate accuracy.",
    },
    {
      id: "safety",
      icon: "briefcase",
      title: "Fail-Safe Laboratory Protection",
      description:
        "Emergency mushroom stops, door interlocks, ground monitoring, and zero-start interlocks ensure complete operator safety in the high-voltage test bay.",
    },
  ],

  cta: {
    title: "Planning a transformer test bench or laboratory setup?",
    description:
      "Contact our systems engineering team for custom bench designs, layout planning, and technical specifications tailored to your transformer ratings.",
    primaryButtonText: "Request Test Bench Proposal",
    primaryButtonLink: "/contact?subject=Transformer%20Testing%20Benches",
  },
};

export default transformerTestingBenches;
