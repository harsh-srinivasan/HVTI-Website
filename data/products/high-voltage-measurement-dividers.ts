import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: HIGH VOLTAGE MEASUREMENT & DIVIDERS
   File: data/products/high-voltage-measurement-dividers.ts
   ================================================================ */

const highVoltageMeasurementDividers: ProductData = {
  slug: "high-voltage-measurement-dividers",
  category: "Electrical Testing Equipment",
  title: "High Voltage Measurement & Dividers",
  tagline: "Measurement that builds a safer tomorrow.",
  description:
    "Precise measurement and calibration systems for high-voltage testing applications.",

  overview:
    "HVTI High Voltage Measurement & Voltage Divider Systems deliver benchmark accuracy for laboratory calibration, dielectric withstand monitoring, and field proof testing. Engineered across resistive, capacitive, and damped R-C network architectures up to 300 kV, our systems pair with digital kV peak/RMS indicators and automated motorized sphere gaps for absolute IEC 60052 standard compliance.",

  highlights: [
    "Accurate and reliable measurement",
    "Multiple divider technologies",
    "Trusted for laboratory and field use",
  ],

  renderType: "image",
  image: "/images/products/hv-ac-dc-dividers.png",
  specImage: "/images/products/product-testing.jpg",

  engineeringAtAGlance: [
    {
      id: "kv-range",
      icon: "voltage",
      value: "10 – 300 kV",
      label: "VOLTAGE RANGE",
      description: "Measurement range with high-precision digital peak and RMS indicators.",
      highlighted: true,
    },
    {
      id: "accuracy-class",
      icon: "testing",
      value: "Class 0.5 / 1.0",
      label: "ACCURACY",
      description: "Laboratory certified precision across AC, DC, and transient waveforms.",
    },
    {
      id: "sphere-gaps",
      icon: "control",
      value: "20 – 1500 mm",
      label: "SPHERE GAPS",
      description: "Automated motorized gap distance control with real-time digital display.",
    },
  ],

  rangeEyebrow: "OUR SOLUTIONS",
  rangeHeading: "Choose the right measurement solution.",
  productVariants: [
    {
      id: "ac-dc-dividers",
      name: "AC/DC Voltage Dividers",
      subtitle: "Resistive, Capacitive & R-C",
      badge: "VOLTAGE DIVIDER",
      image: "/images/products/hv-ac-dc-dividers.png",
      description:
        "Available in Resistive, Capacitive and R-C Network designs for high-voltage measurement applications.",
      bulletPoints: [
        "Resistive, Capacitive and R-C designs",
        "Ultra-low temperature coefficient",
        "Standard BNC / digital interface output",
        "PD-free design for high accuracy.",
      ],
      ctaText: "View Details",
      ctaLink: "/products/hv-ac-dc-dividers",
    },
    {
      id: "digital-kv-systems",
      name: "Digital kV Measurement Systems",
      subtitle: "10 – 300 kV (Class 0.5 / 1.0)",
      badge: "DIGITAL READOUT",
      image: "/images/products/hv-ac-dc-dividers-hd.png",
      description:
        "Voltage dividers with digital kV meters for AC/DC ranges of 10, 25, 50, 100, 150 and 300 kV, with accuracy class 0.5 and 1.0.",
      bulletPoints: [
        "10, 25, 50, 100, 150 and 300 kV models",
        "Dual Peak / RMS / DC digital readout",
        "High input impedance with surge suppression",
        "Portable desktop or rack-mount enclosures.",
      ],
      ctaText: "View Details",
      ctaLink: "/products/hv-ac-dc-dividers",
    },
    {
      id: "sphere-gaps",
      name: "Sphere Gaps",
      subtitle: "20 mm – 1500 mm Standards",
      badge: "CALIBRATION STANDARD",
      image: "/images/products/hv-ac-dc-dividers.jpg",
      description:
        "Absolute standards for measurement and calibration of high-voltage equipment. Available from 20 mm to 1500 mm, with automated controls and digital display.",
      bulletPoints: [
        "20 mm to 1500 mm sphere diameter range",
        "Automated motorized distance control",
        "Precision digital gap readout",
        "IEC 60052 international standard compliance.",
      ],
      ctaText: "View Details",
      ctaLink: "/products/hv-ac-dc-dividers",
    },
  ],

  keyTechnicalRanges: {
    title: "Key Specifications",
    description:
      "Explore the key specifications for our high-voltage measurement and calibration systems.",
    headers: ["PARAMETER", "SPECIFICATION", "", ""],
    rows: [
      {
        col1: "Voltage Divider Designs",
        col2: "Resistive, Capacitive and R-C Network",
        col3: "Low temperature drift",
        col4: "Universal AC/DC/Impulse verification",
      },
      {
        col1: "AC/DC Voltage Ranges (with Digital kV Meters)",
        col2: "10 kV, 25 kV, 50 kV, 100 kV, 150 kV and 300 kV",
        col3: "Direct BNC readout",
        col4: "Continuous load rating",
      },
      {
        col1: "Accuracy Class",
        col2: "0.5 / 1.0",
        col3: "NABL traceable calibration",
        col4: "High repeatability",
      },
      {
        col1: "Sphere Gap Diameter Range",
        col2: "20 mm to 1500 mm",
        col3: "High-purity brass/copper",
        col4: "Horizontal & vertical mountings",
      },
      {
        col1: "Sphere Gap Controls",
        col2: "Automated controls with digital display",
        col3: "Motorized micrometer drive",
        col4: "Flashover breakdown recording",
      },
    ],
  },

  fullTechnicalSpecs: {
    sections: [
      {
        title: "High Voltage Divider Technical Parameters",
        specs: [
          { parameter: "Rated Voltages (AC/DC)", value: "10 kV, 25 kV, 50 kV, 100 kV, 150 kV, 200 kV, 300 kV" },
          { parameter: "Divider Ratio Options", value: "1000:1 / 2000:1 / 5000:1 / 10000:1 (Custom ratios available)" },
          { parameter: "Divider Types", value: "Pure Resistive (DC/AC), Pure Capacitive (AC/Impulse), Damped R-C" },
          { parameter: "Frequency Response", value: "DC to 1 MHz (Transients & fast switching impulses)" },
          { parameter: "Measurement Uncertainty", value: "Class 0.5 (± 0.5% of reading) / Class 1.0 (± 1.0% of reading)" },
          { parameter: "Output Impedance", value: "50 Ω BNC connector for oscilloscope and digital multimeter" },
        ],
      },
      {
        title: "Sphere Gap Calibration Standards",
        specs: [
          { parameter: "Standard Spheres Available", value: "20 mm, 50 mm, 62.5 mm, 100 mm, 150 mm, 250 mm, 500 mm, 750 mm, 1000 mm, 1500 mm" },
          { parameter: "Applicable Standard", value: "IEC 60052 / IEEE Std 4 (Voltage measurement by standard air gaps)" },
          { parameter: "Drive Mechanism", value: "Motorized micro-stepper drive with manual fine vernier override" },
          { parameter: "Gap Distance Readout", value: "0.01 mm resolution digital LED/LCD display" },
          { parameter: "Protective Resistor", value: "Damping water / carbon composite series surge limiting resistor" },
        ],
      },
    ],
  },

  workflow: {
    eyebrow: "PRECISION HIGH-VOLTAGE MEASUREMENT WORKFLOW",
    heading: "Calibrated 4-step voltage division & digital readout methodology.",
    steps: [
      {
        step: "01",
        title: "Install Divider in HV Test Circuit",
        description: "Position the capacitive/resistive voltage divider or standard capacitor with rated flashover clearances adjacent to the test transformer and DUT.",
        icon: "voltage",
        image: "/images/products/hv-ac-dc-dividers-hd.png",
        tag: "HV CIRCUIT COUPLING",
        technicalDetails: [
          "Safe Phase Clearance & Creepage Check",
          "Solid Ground Base Earth Connection",
          "High-Voltage Bus Coupling & Corona Ring",
          "Divider Ratio Selection (e.g. 1000:1 / 10000:1)",
        ],
      },
      {
        step: "02",
        title: "Connect Shielded BNC Measuring Cable",
        description: "Connect double-shielded 50Ω low-loss coaxial cable from the divider low-voltage arm to the digital kilovoltmeter or oscilloscope.",
        icon: "control",
        image: "/images/products/hv-ac-dc-dividers.png",
        tag: "LOW-VOLTAGE INTERFACE",
        technicalDetails: [
          "Double-Shielded 50Ω Coaxial Cable Run",
          "Input Impedance Matching (1 MΩ / 50 Ω)",
          "Shield Grounding Verification",
          "Interference & Noise Immunity Check",
        ],
      },
      {
        step: "03",
        title: "Energize High-Voltage Circuit",
        description: "Apply AC RMS, DC Peak, or Lightning Impulse voltage; the divider steps down high potential with sub-nanosecond response time and minimal phase shift.",
        icon: "signal",
        image: "/images/products/hv-ac-dc-dividers-hd.png",
        tag: "VOLTAGE DIVISION & SENSING",
        technicalDetails: [
          "Sub-Nanosecond Response Time (< 20 ns)",
          "AC RMS / DC Peak / Impulse Ratio Division",
          "Negligible Phase Shift & Angle Error",
          "Continuous Thermal & Corona Stability",
        ],
      },
      {
        step: "04",
        title: "Read & Record Calibrated Values",
        description: "View real-time high-accuracy digital kV readouts, harmonic distortion profiles, peak crest factors, and capture waveform oscillograms for official NABL logs.",
        icon: "testing",
        image: "/images/products/hv-ac-dc-dividers.png",
        tag: "CALIBRATED DIGITAL READOUT",
        technicalDetails: [
          "Class 0.5 / 1.0 Calibrated Accuracy Display",
          "True RMS, Peak, and Peak/√2 Calculations",
          "Waveform Harmonic Distortion (THD) Analysis",
          "Traceable National Calibration Log Export",
        ],
      },
    ],
  },

  applications: [
    {
      id: "equipment-measurement",
      title: "High-Voltage Equipment Measurement",
      icon: "substation",
      description: "Precise proof test voltage measurement across transformers, cables, and switchgear.",
      isCenter: true,
    },
    {
      id: "calibration",
      title: "Testing & Calibration Labs",
      icon: "testing",
      description: "Primary and secondary standards calibration in NABL and utility testing facilities.",
    },
    {
      id: "power-generation",
      title: "Power Generation",
      icon: "generator",
      description: "Verification of generator terminal voltages and stator insulation withstand levels.",
    },
    {
      id: "transmission-distribution",
      title: "Transmission & Distribution",
      icon: "cable",
      description: "Substation metering verification and transmission line overvoltage monitoring.",
    },
    {
      id: "heavy-industry",
      title: "Heavy Industry",
      icon: "switchgear",
      description: "Dielectric monitoring for smelters, arc furnaces, and high-energy industrial plants.",
    },
  ],

  benefits: [
    {
      id: "accuracy",
      icon: "testing",
      title: "Standardized Measurement Traceability",
      description: "IEC 60052 certified sphere gaps and Class 0.5 calibrated voltage dividers.",
    },
    {
      id: "durability",
      icon: "shield",
      title: "Corona-Free Shielded Design",
      description: "Toroidal top corona rings prevent field distortion and measurement inaccuracies.",
    },
    {
      id: "versatility",
      icon: "power",
      title: "Multi-Waveform Capability",
      description: "Simultaneous accuracy across DC, 50/60 Hz AC, and high-frequency impulses.",
    },
  ],

  cta: {
    title: "Need help selecting the right measurement system?",
    description:
      "Our engineering team can help you choose the best solution for your testing and calibration requirements.",
    primaryButtonText: "Talk to an Engineer",
    primaryButtonLink: "/contact?subject=High%20Voltage%20Measurement%20Dividers%20Inquiry",
    secondaryButtonText: "Request a Quote",
    secondaryButtonLink: "/contact?subject=Request%20a%20Quote%20Voltage%20Dividers",
    supportingImage: "/images/products/hv-ac-dc-dividers.png",
  },
};

export default highVoltageMeasurementDividers;
