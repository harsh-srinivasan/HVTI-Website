/* ================================================================
   HVTI PRODUCT DATA: TRANSFORMER TESTING & DIAGNOSTICS
   File: data/products/transformer-testing-diagnostics.ts

   Based on official HVTI Transformer Testing & Diagnostics catalogue.
   ================================================================ */

import { ProductData } from "@/types/product";

const transformerTestingDiagnostics: ProductData = {
  slug: "transformer-testing-diagnostics",
  title: "Transformer Testing & Diagnostics",
  tagline: "Complete Transformer Assessment",
  category: "TRANSFORMER TESTING & DIAGNOSTICS",
  categoryHref: "/viewall/electrical-testing-equipment",
  slogan: "Reliable transformers power a brighter tomorrow.",
  description:
    "From electrical tests to oil analysis — our solutions help you ensure the reliability, efficiency and longevity of your transformers.",
  longDescription: [
    "HVTI provides industry-leading diagnostic and testing instrumentation engineered for complete lifecycle assessment of power, distribution, and instrument transformers.",
    "Our comprehensive portfolio spans precision turns ratio meters (ART-3D), dual-channel winding resistance testers with rapid demagnetization (WRT-10D), comprehensive CT test sets (CTTx2 / CTTx5), fully automatic oil breakdown voltage testers (OTS Series), interfacial tension meters (IFT), and ppm moisture-in-oil analyzers (VM-III).",
  ],
  image: "/images/products/transformer-testing-benches-hd.png",
  highlights: [
    "Accurate results",
    "Comprehensive diagnostics",
    "Field & laboratory use",
    "Trusted by utilities and industry",
  ],

  engineeringAtAGlance: [
    {
      id: "ratio-accuracy",
      icon: "testing",
      code: "RATIO",
      label: "TURNS RATIO",
      value: "Up to 10,000:1",
      description: "0.08% precision turns ratio & phase angle displacement",
    },
    {
      id: "winding-current",
      icon: "current",
      code: "RESIST",
      label: "WINDING OHMMETER",
      value: "10 A / 0.1 µΩ",
      description: "Dual-channel resistance with automatic demagnetization",
    },
    {
      id: "oil-bdv",
      icon: "voltage",
      code: "OIL BDV",
      label: "DIELECTRIC OIL",
      value: "Up to 100 kV",
      description: "Fully automatic oil breakdown voltage according to IEC / ASTM",
      highlighted: true,
    },
    {
      id: "moisture-ppm",
      icon: "signal",
      code: "MOISTURE",
      label: "OIL MOISTURE",
      value: "1 – 100 ppm",
      description: "Coulometric Karl Fischer ppm precision in insulating oils",
    },
    {
      id: "ct-analysis",
      icon: "control",
      code: "CT TEST",
      label: "INSTRUMENT CTs",
      value: "Knee Point & Ratio",
      description: "Comprehensive excitation, ratio, polarity & burden testing",
    },
  ],

  benefits: [
    {
      id: "prevents-failures",
      icon: "shield",
      title: "Prevents Unexpected Failures",
      description: "Identifies turn-to-turn shorts, core degradation, and tap-changer contact wear before catastrophic breakdown.",
    },
    {
      id: "extends-life",
      icon: "gear",
      title: "Extends Equipment Life",
      description: "Monitors oil dielectric quality and moisture to preserve cellulose insulation integrity over decades.",
    },
    {
      id: "reduces-costs",
      icon: "briefcase",
      title: "Reduces Maintenance Costs",
      description: "Enables condition-based maintenance scheduling, eliminating unnecessary overhauls.",
    },
    {
      id: "ensures-operation",
      icon: "voltage",
      title: "Ensures Safe & Efficient Operation",
      description: "Guarantees regulatory compliance with IEEE C57, IEC 60076, and IEC 60156 international standards.",
    },
  ],

  rangeEyebrow: "OUR SOLUTIONS",
  rangeHeading: "Test every critical parameter.",
  rangeSubtitle:
    "Our transformer testing equipment covers electrical, mechanical and insulation parameters, giving you a complete view of transformer health and performance.",

  variants: [
    {
      id: "art-3d",
      name: "ART-3D",
      model: "ART-3D",
      subtitle: "Automatic Transformer Ratio Tester",
      badge: "TURNS RATIO & PHASE",
      image: "/images/products/transformer-testing-benches.png",
      description:
        "Accurate measurement of turns ratio, phase angle displacement and excitation current with automatic test sequences.",
      highlights: [
        "Turns ratio up to 10000:1",
        "Phase angle measurement (0° – 360°)",
        "Excitation current & polarity check",
        "Automatic tap-changer sequences",
      ],
      productUrl: "#technical-specifications",
    },
    {
      id: "cttx2-cttx5",
      name: "CTTx2 / CTTx5",
      model: "CTTx2 / CTTx5",
      subtitle: "Current Transformer Test Sets",
      badge: "CT EXCITATION & RATIO",
      image: "/images/products/transformer-testing-benches-hd.png",
      description:
        "Comprehensive testing of CTs with high accuracy, advanced knee-point excitation analysis, and burden measurement.",
      highlights: [
        "Ratio, polarity, phase angle",
        "Excitation and knee point (V/I curve)",
        "CT secondary burden measurement",
        "Wide range of current outputs",
      ],
      productUrl: "#technical-specifications",
    },
    {
      id: "wrt-10d",
      name: "WRT-10D",
      model: "WRT-10D",
      subtitle: "Winding Resistance Tester",
      badge: "DUAL-CHANNEL OHMMETER",
      image: "/images/products/transformer-testing-benches.png",
      description:
        "Precise measurement of transformer winding resistance with rapid demagnetization and temperature compensation.",
      highlights: [
        "High accuracy and thermal stability",
        "Wide test current range (up to 10A DC)",
        "Automatic core demagnetization",
        "Suitable for all transformer types",
      ],
      productUrl: "#technical-specifications",
    },
    {
      id: "ots-series",
      name: "OTS Series",
      model: "OTS Series",
      subtitle: "Oil Testing Sets (BDV)",
      badge: "OIL DIELECTRIC BDV",
      image: "/images/products/transformer-testing-benches-hd.png",
      description:
        "Automatic oil breakdown voltage testers with high accuracy, magnetic stirring, and safety interlocked test cell.",
      highlights: [
        "Fully automatic breakdown operation",
        "Pre-programmed IEC & ASTM standards",
        "Robust, spill-proof compact design",
        "Suitable for mineral and synthetic oils",
      ],
      productUrl: "#technical-specifications",
    },
    {
      id: "ift-meter",
      name: "Interfacial Tension Meter",
      model: "IFT Meter",
      subtitle: "Measurement of Interfacial Tension of Oils",
      badge: "OIL DEGRADATION (IFT)",
      image: "/images/products/transformer-testing-benches.png",
      description:
        "High-precision du Noüy ring interfacial tension measurement detecting early polar contaminants and sludge formation.",
      highlights: [
        "High precision du Noüy ring measurement",
        "Digital display and automatic motorized lift",
        "User-friendly calibration & operation",
        "Portable and reliable laboratory grade",
      ],
      productUrl: "#technical-specifications",
    },
    {
      id: "vm-iii",
      name: "VM-III",
      model: "VM-III",
      subtitle: "Moisture in Oil Meter (PPM)",
      badge: "MOISTURE IN OIL (PPM)",
      image: "/images/products/transformer-testing-benches-hd.png",
      description:
        "Quick and accurate determination of moisture content in ppm for insulating oils using coulometric extraction.",
      highlights: [
        "Moisture measurement down to 1 ppm",
        "Fast and reliable digital results",
        "Portable, rugged case for field use",
        "Ideal for field and laboratory use",
      ],
      productUrl: "#technical-specifications",
    },
  ],

  keyTechnicalRanges: {
    title: "Key Specifications across Transformer Assessment Solutions",
    description:
      "Summary of technical measurement ranges across electrical parameters and oil insulation diagnostics.",
    headers: ["INSTRUMENT", "MEASUREMENT PARAMETER", "ACCURACY / RANGE", "PRIMARY APPLICATION"],
    rows: [
      {
        col1: "ART-3D (Turns Ratio)",
        col2: "Turns Ratio (0.8 to 10,000:1), Phase Angle (0–360°)",
        col3: "±0.08% reading accuracy",
        col4: "Power, distribution & potential transformer ratio verification",
      },
      {
        col1: "CTTx2 / CTTx5",
        col2: "CT Ratio, Phase Error, Knee Point (V/I), Burden",
        col3: "Class 0.2 / 0.5 metering accuracy",
        col4: "Current transformer excitation & protection verification",
      },
      {
        col1: "WRT-10D",
        col2: "DC Winding Resistance (0.1 µΩ to 2,000 Ω)",
        col3: "±0.25% ± 0.5 µΩ (10 A max test current)",
        col4: "Transformer windings, OLTC tap contacts, core demag",
      },
      {
        col1: "OTS Series (Oil BDV)",
        col2: "Dielectric Breakdown Voltage (0 to 100 kV)",
        col3: "±1% accuracy, < 1 ms trip cutoff",
        col4: "Transformer insulating oil dielectric breakdown testing",
      },
      {
        col1: "IFT Meter",
        col2: "Interfacial Tension (0 to 100 mN/m)",
        col3: "±0.1 mN/m resolution",
        col4: "Early detection of oil aging and polar degradation products",
      },
      {
        col1: "VM-III (Moisture)",
        col2: "Moisture Content (1 to 100 ppm)",
        col3: "±2 ppm accuracy (< 20 ppm range)",
        col4: "Water content assessment in mineral & synthetic insulating fluids",
      },
    ],
  },

  fullTechnicalSpecs: {
    sections: [
      {
        title: "Electrical & Magnetic Diagnostic Specifications",
        specs: [
          { parameter: "ART-3D Ratio Range", value: "0.8000 to 10,000:1 (Single & 3-Phase)" },
          { parameter: "ART-3D Phase Angle", value: "0.0° to 360.0° (±0.05° resolution)" },
          { parameter: "WRT-10D Test Current", value: "Selectable 10A, 5A, 1A, 100mA, 10mA DC" },
          { parameter: "WRT-10D Resistance Range", value: "0.1 µΩ to 2000 Ω (Dual-channel measurement)" },
          { parameter: "Demagnetization", value: "Automatic multi-cycle bipolar demagnetization sequence" },
          { parameter: "CTTx2 / CTTx5 Test Modes", value: "Ratio, Polarity, Knee-Point Voltage, Secondary Burden" },
        ],
      },
      {
        title: "Insulating Oil & Dielectric Fluid Analysis Specifications",
        specs: [
          { parameter: "OTS BDV Voltage Output", value: "0 to 80 kV / 100 kV AC (50/60 Hz)" },
          { parameter: "OTS Voltage Slew Rate", value: "Programmable 0.5 kV/s to 5.0 kV/s (IEC 60156 / ASTM D877)" },
          { parameter: "IFT Measuring Range", value: "0 to 100 mN/m with platinum du Noüy ring" },
          { parameter: "VM-III Moisture Range", value: "1 to 100 ppm (0.0001% to 0.01%)" },
          { parameter: "Test Vessel", value: "Precision glass test vessel with magnetic stirrer & micrometer gap" },
          { parameter: "Communication & Storage", value: "USB / RS232 with internal 500-test non-volatile memory" },
        ],
      },
    ],
  },

  workflow: {
    categorySlug: "transformer-testing-diagnostics",
    eyebrow: "COMPLETE TRANSFORMER ASSESSMENT WORKFLOW",
    heading: "A systematic 4-phase electrical & oil condition methodology.",
    steps: [
      {
        step: "01",
        title: "Select Assessment Method",
        description: "Choose between electrical diagnostic tests (Turns Ratio, Winding Resistance, CT excitation) and chemical oil insulation analysis (BDV, IFT, Moisture ppm).",
        icon: "control",
        image: "/images/products/transformer-testing-benches-hd.png",
        tag: "ASSESSMENT METHOD SELECTION",
        technicalDetails: [
          "Electrical vs Oil Quality Path Selection",
          "Transformer Nameplate Vector Group Setup",
          "Bushing High-Voltage Clearance Verified",
          "Test Vessel Oil Sampling Procedure Followed",
        ],
      },
      {
        step: "02",
        title: "Connect & Calibrate Instrumentation",
        description: "Connect 4-wire Kelvin leads to transformer bushings or load the de-gassed oil sample into the precision temperature-controlled test vessel.",
        icon: "gear",
        image: "/images/products/transformer-testing-benches.png",
        tag: "LEAD & SENSOR INTERFACE",
        technicalDetails: [
          "Kelvin Clamps Attached to Primary/Secondary",
          "Safety Grounding Earth Terminal Bonded",
          "Oil Vessel Electrode Gap Set to 2.5 mm",
          "Ambient Temperature Sensor Synchronized",
        ],
      },
      {
        step: "03",
        title: "Execute Automated Test Sequence",
        description: "Run automated multi-tap turns ratio sequencing, high-current resistance measurement with demagnetization, or automated multi-breakdown oil BDV cycles.",
        icon: "testing",
        image: "/images/products/transformer-testing-benches-hd.png",
        tag: "TEST SEQUENCE EXECUTION",
        technicalDetails: [
          "Automatic 3-Phase Turns Ratio Excitation",
          "Dual-Channel Winding Resistance Current Ramp",
          "Motorized Magnetic Stirrer BDV Spark Cycle",
          "Coulometric Moisture Extraction in ppm",
        ],
      },
      {
        step: "04",
        title: "Diagnose & Trend Health Fingerprint",
        description: "Compare measured parameters against factory baseline values, detect winding deformation or oil degradation, and export IEEE/IEC compliance certificates.",
        icon: "shield",
        image: "/images/products/transformer-testing-benches.png",
        tag: "DIAGNOSIS & IEEE REPORTING",
        technicalDetails: [
          "Turns Ratio Error < 0.5% Tolerance Verified",
          "Winding Resistance Phase Discrepancy < 2%",
          "Oil BDV > 60 kV Dielectric Quality Confirmed",
          "Automated IEEE C57 / IEC 60076 Test Certificate",
        ],
      },
    ],
  },

  applications: [
    {
      id: "power-generation",
      title: "Power Generation",
      icon: "generator",
      description: "Routine and commissioning diagnostics for Generator Step-Up (GSU) and unit auxiliary transformers.",
      isCenter: true,
    },
    {
      id: "transmission-distribution",
      title: "Transmission & Distribution",
      icon: "substation",
      description: "Substation grid transformers from 33 kV to 765 kV verification across utilities.",
    },
    {
      id: "industrial-facilities",
      title: "Industrial Facilities",
      icon: "switchgear",
      description: "Furnace, rectifier, and distribution transformers in chemical and manufacturing plants.",
    },
    {
      id: "renewable-energy",
      title: "Renewable Energy",
      icon: "solar",
      description: "Solar inverter step-up and wind turbine pad-mounted transformer condition monitoring.",
    },
    {
      id: "railways",
      title: "Railways",
      icon: "train",
      description: "Traction substation and trackside 25 kV feeding transformer health testing.",
    },
    {
      id: "oil-gas",
      title: "Oil & Gas",
      icon: "oil",
      description: "Offshore platform and refinery hazardous-area transformer oil and winding assessment.",
    },
  ],

  cta: {
    title: "Need help selecting the right transformer testing solution?",
    description: "Our engineering team can help you choose the best equipment based on your testing requirements and applicable standards.",
    primaryButtonText: "Talk to an Engineer",
    primaryButtonLink: "/contact?subject=Transformer%20Testing%20Inquiry",
    secondaryButtonText: "Download Brochure",
    secondaryButtonLink: "/resources",
  },
};

export default transformerTestingDiagnostics;
