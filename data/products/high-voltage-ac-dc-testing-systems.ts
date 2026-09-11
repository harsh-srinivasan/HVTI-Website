import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: HIGH VOLTAGE AC & DC TESTING SYSTEMS
   File: data/products/high-voltage-ac-dc-testing-systems.ts
   ================================================================ */

const highVoltageACDCTestingSystems: ProductData = {
  slug: "high-voltage-ac-dc-testing-systems",
  category: "Electrical Testing Equipment",
  title: "High Voltage AC & DC Testing Systems",
  tagline: "High voltage testing for a safer, more reliable tomorrow.",
  description:
    "Reliable and precise high voltage test systems for dielectric withstand testing of electrical equipment in the field and laboratory.",

  overview:
    "HVTI High Voltage AC and DC Testing Systems provide industry-grade dielectric proof testing for critical power infrastructure. Covering AC testing from 25 kV to 300 kV (dry-type and oil-filled) and DC testing from 15 kV to 300 kV (including ultra-light SMPS technology), our systems combine high output stability, comprehensive safety interlocks, and flexible manual or motorized touchscreen controls.",

  highlights: [
    "AC & DC test systems up to 300 kV",
    "Rugged designs for field & laboratory use",
    "Manual and automated control options",
    "Trusted by utilities, industry and test laboratories",
  ],

  renderType: "image",
  image: "/images/products/hv-ac-dc-testing-kits.png",
  specImage: "/images/products/product-testing.jpg",

  engineeringAtAGlance: [
    {
      id: "ac-testing",
      icon: "voltage",
      value: "25 – 300 kV",
      label: "AC TESTING",
      description: "Various mA / kVA ratings across dry and oil-cooled configurations.",
      highlighted: true,
    },
    {
      id: "dc-testing",
      icon: "power",
      value: "15 – 300 kV",
      label: "DC TESTING",
      description: "Various mA / kW ratings including conventional and SMPS systems.",
    },
    {
      id: "field-lab",
      icon: "testing",
      value: "Field & Lab Ready",
      label: "DEPLOYMENT",
      description: "Rugged, reliable, and easy to operate across substations and plants.",
    },
  ],

  rangeEyebrow: "OUR PRODUCT RANGE",
  rangeHeading: "Choose the right test system for your application.",
  productVariants: [
    {
      id: "hv-ac-testing-kits",
      name: "High Voltage AC Testing Kits",
      subtitle: "25 – 300 kV AC",
      badge: "AC HIPOT",
      image: "/images/products/hv-ac-dc-testing-kits.png",
      description:
        "High-voltage AC proof test systems with resin-cast dry-type (25–150 kV) or oil-filled (50–300 kV) test transformers.",
      bulletPoints: [
        "Various mA / kVA ratings",
        "Manual or automated control",
        "Resin-cast dry type or oil-filled transformers",
        "For motors, generators, switchgear, cables, transformers and more.",
      ],
      ctaText: "View Details",
      ctaLink: "/products/high-voltage-ac-testing-kits",
    },
    {
      id: "hv-dc-testing-kits",
      name: "High Voltage DC Testing Kits",
      subtitle: "15 – 300 kV DC",
      badge: "DC HIPOT",
      image: "/images/products/hv-ac-dc-testing-kits-hd.png",
      description:
        "Conventional transformer-rectifier DC test systems delivering continuous high current with high filtration.",
      bulletPoints: [
        "Various mA / kW ratings",
        "Conventional transformer-rectifier systems (15 – 200 kV, 10 – 200 mA)",
        "Rugged and reliable designs",
        "For cables, switchgear, generators and transformers.",
      ],
      ctaText: "View Details",
      ctaLink: "/products/high-voltage-ac-testing-kits",
    },
    {
      id: "ultra-light-dc-test-sets",
      name: "Ultra-Light High Voltage DC Test Sets",
      subtitle: "60 – 300 kV DC",
      badge: "PORTABLE SMPS",
      image: "/images/products/ultra-light-hv-dc-test-sets.png",
      description:
        "Ultra-lightweight high-frequency SMPS technology engineered for effortless one-man field transportation.",
      bulletPoints: [
        "SMPS based ultra-light design",
        "5 mA output with low ripple",
        "Portable and compact chassis",
        "Ideal for field testing and on-site applications.",
      ],
      ctaText: "View Details",
      ctaLink: "/products/ultra-light-hv-dc-test-sets",
    },
  ],

  keyTechnicalRanges: {
    title: "Key Technical Ranges",
    description:
      "Explore the key technical specifications for our high voltage AC and DC test systems. View the full specifications for detailed information on all models, options and configurations.",
    headers: ["SYSTEM / PRODUCT", "VOLTAGE RANGE", "CURRENT / POWER RANGE", "KEY DETAILS"],
    rows: [
      {
        col1: "High Voltage AC Testing Kits",
        col2: "25 – 300 kV AC",
        col3: "Various mA / kVA ratings",
        col4: "Manual or automated control. For motors, generators, switchgear, cables and transformers.",
      },
      {
        col1: "Resin-Cast Dry Type Test Transformers",
        col2: "25 – 150 kV AC",
        col3: "Various ratings",
        col4: "Dry type, resin cast design with high mechanical strength.",
      },
      {
        col1: "Oil-Filled Test Transformers",
        col2: "50, 70, 100, 150, 200 & 300 kV AC",
        col3: "Various ratings",
        col4: "Oil filled design with optional tertiary metering winding. PD-free designs available.",
      },
      {
        col1: "Conventional DC Test Systems (Transformer-Rectifier)",
        col2: "15 – 200 kV DC",
        col3: "10 – 200 mA",
        col4: "Robust and reliable for a wide range of industrial applications.",
      },
      {
        col1: "Ultra-Light DC Test Sets (SMPS)",
        col2: "60 – 300 kV DC",
        col3: "5 mA",
        col4: "SMPS based, portable and compact, ideal for field testing.",
      },
    ],
  },

  fullTechnicalSpecs: {
    sections: [
      {
        title: "AC Test System Electrical Specifications",
        specs: [
          { parameter: "Output Voltage Ranges (AC)", value: "25 kV, 50 kV, 70 kV, 100 kV, 150 kV, 200 kV, 300 kV" },
          { parameter: "Power Frequency", value: "50 Hz / 60 Hz" },
          { parameter: "Capacity Ratings", value: "2 kVA to 300 kVA (Customizable for capacitive loads)" },
          { parameter: "Transformer Types", value: "Dry-type Epoxy Cast (up to 150 kV) / Mineral Oil Immersed (up to 300 kV)" },
          { parameter: "Partial Discharge Baseline", value: "< 5 pC (PD-free laboratory models on request)" },
          { parameter: "Metering Accuracy", value: "Class 1.0 / Class 0.5 with digital peak/RMS voltmeter" },
        ],
      },
      {
        title: "DC Test System Electrical Specifications",
        specs: [
          { parameter: "Output Voltage Ranges (DC)", value: "15 kV to 300 kV DC (Negative polarity standard / Reversible optional)" },
          { parameter: "Output Current Capacity", value: "5 mA (SMPS) / 10 mA to 200 mA (Transformer-Rectifier)" },
          { parameter: "Voltage Ripple Factor", value: "≤ 0.5% at rated full load" },
          { parameter: "Voltage Measurement Precision", value: "Digital display ± 1.0% ± 1 digit" },
          { parameter: "Leakage Current Resolution", value: "0.1 μA digital microammeter" },
          { parameter: "Discharge Protection", value: "Integrated high-energy internal discharge resistor + external discharge stick" },
        ],
      },
      {
        title: "Control Panel & Safety System",
        specs: [
          { parameter: "Control Options", value: "Manual analog variac / Motorized PLC automated touchscreen desk" },
          { parameter: "Protection Systems", value: "Zero-start interlock, fast electronic trip (< 10 ms), door safety interlock" },
          { parameter: "Timing System", value: "Digital timer 0 – 999 seconds with auto-voltage ramp and auto-cutoff" },
          { parameter: "Enclosure / Portability", value: "Heavy-duty castor-mounted chassis with lifting lugs and earth terminal" },
        ],
      },
    ],
  },

  workflow: {
    eyebrow: "HIGH-VOLTAGE DIELECTRIC TESTING WORKFLOW",
    heading: "A systematic 4-phase withstand & insulation integrity verification.",
    steps: [
      {
        step: "01",
        title: "Select AC or DC System",
        description: "Choose between oil/air-insulated AC Hipot test sets, ultra-light portable DC sets, or resonant testing kits based on DUT capacitance and test standards.",
        icon: "control",
        image: "/images/products/hv-ac-dc-testing-kits-hd.png",
        tag: "HV SOURCE SELECTION",
        technicalDetails: [
          "Safety Earth & Ground Lead Verification",
          "Zero-Voltage Interlock Guard Active",
          "DUT Capacitance Range Evaluation",
          "Source Voltage Selection (Up to 300 kV)",
        ],
      },
      {
        step: "02",
        title: "Configure Voltage & Ramp Rates",
        description: "Set target test voltage, programmable ramp rate (kV/s), overcurrent trip limit (mA), and withstand dwell timer on the digital controller.",
        icon: "gear",
        image: "/images/products/ultra-light-hv-dc-test-sets-hd.png",
        tag: "PARAMETER CONFIGURATION",
        technicalDetails: [
          "Voltage Threshold & Ramp Preset (0.5 - 2 kV/s)",
          "Overcurrent Fast Trip Threshold (0.1 - 100 mA)",
          "Dwell Withstand Timer (e.g. 60s Proof Test)",
          "Automated Flashover Protection Armed",
        ],
      },
      {
        step: "03",
        title: "Apply Dielectric Stress",
        description: "Initiate high-voltage ramp to the test object (cable, transformer, motor, or switchgear) while continuously logging leakage current and voltage stability.",
        icon: "voltage",
        image: "/images/products/hv-ac-dc-testing-kits.png",
        tag: "WITHSTAND APPLICATION",
        technicalDetails: [
          "Smooth Motorized / Solid-State Voltage Ramp",
          "Real-Time Leakage Current Monitoring",
          "Continuous Dielectric Stress Telemetry",
          "Corona & Micro-Breakdown Auto-Cutoff",
        ],
      },
      {
        step: "04",
        title: "Verify Insulation & Safe Discharge",
        description: "Confirm withstand compliance, evaluate insulation resistance values, and execute automatic internal grounding discharge before disconnecting.",
        icon: "shield",
        image: "/images/products/ultra-light-hv-dc-test-sets.png",
        tag: "PASS / FAIL VERIFICATION",
        technicalDetails: [
          "Insulation Withstand Level Verified",
          "Automatic Internal Grounding Discharge",
          "Dielectric Loss & Leakage Log Generation",
          "IEEE / IEC Standard Compliance Certificate",
        ],
      },
    ],
  },

  applications: [
    {
      id: "motors",
      title: "Motors",
      icon: "motor",
      description: "High-voltage stator winding insulation withstand and surge verification.",
      isCenter: true,
    },
    {
      id: "generators",
      title: "Generators",
      icon: "generator",
      description: "Commissioning and routine dielectric proof tests for hydro and turbo generators.",
    },
    {
      id: "switchgear",
      title: "Switchgear",
      icon: "switchgear",
      description: "High-voltage withstand testing across circuit breakers and vacuum interrupters.",
    },
    {
      id: "cables",
      title: "Cables",
      icon: "cable",
      description: "DC hipot and leakage current profiling of medium and high-voltage power cables.",
    },
    {
      id: "transformers",
      title: "Transformers",
      icon: "transformer",
      description: "Applied overvoltage testing of primary/secondary windings and bushings.",
    },
  ],

  benefits: [
    {
      id: "precision",
      icon: "testing",
      title: "Calibrated Dielectric Precision",
      description: "Engineered with ultra-stable voltage regulation and precision current monitoring.",
    },
    {
      id: "safety",
      icon: "shield",
      title: "Operator Safety First",
      description: "Comprehensive hardware interlocks, instant electronic overcurrent trip, and earth continuity.",
    },
    {
      id: "support",
      icon: "power",
      title: "Comprehensive Application Support",
      description: "Technical sizing, custom kVA ratings, and local on-site training across India.",
    },
  ],

  cta: {
    title: "Not sure which HV system fits your application?",
    description:
      "Our engineering team can help you select the right high voltage test system based on your equipment, testing standards and field conditions.",
    primaryButtonText: "Talk to an Engineer",
    primaryButtonLink: "/contact?subject=High%20Voltage%20AC%20DC%20Testing%20Systems%20Inquiry",
    secondaryButtonText: "Download Brochure",
    secondaryButtonLink: "/resources",
    supportingImage: "/images/products/hv-ac-dc-testing-kits.png",
  },
};

export default highVoltageACDCTestingSystems;
