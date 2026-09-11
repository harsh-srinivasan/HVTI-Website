import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: PARTIAL DISCHARGE SOLUTIONS (UNIFIED FAMILY)
   File: data/products/partial-discharge-solutions.ts

   Authentic 6-Product Partial Discharge Family:
   1. PD-LT – Overhead (advanced)
   2. HFCT series
   3. PDS – Cable accessories
   4. ULD-40 – Corona effect
   5. XDP-II – Expert PD detector
   6. AE-150 – Localization system
   ================================================================ */

const partialDischargeSolutions: ProductData = {
  slug: "partial-discharge-solutions",
  category: "Electrical Testing Equipment",
  title: "Partial Discharge Solutions",
  tagline: "Detect. Diagnose. Prevent.",
  description:
    "Perform partial discharge and corona effect detection and diagnosis on a variety of devices using preventive maintenance. Discover our wide range of solutions for partial discharge detection and analysis.",

  overview:
    "HVTI provides an end-to-end Partial Discharge (PD) diagnostic ecosystem engineered to detect insulation deterioration before catastrophic flashover occurs. Covering online spot-checking on energized overhead lines (PD-LT), high-frequency current sensors (HFCT series), underground cable accessories (PDS), directional ultrasonic corona inspection (ULD-40), battery-portable laboratory-precision analyzers (XDP-II), and multi-sensor acoustic 3D tank localization for power transformers (AE-150), our instruments safeguard transformers, GIS, switchgear, and underground cables across their entire operational lifecycle.",

  highlights: [
    "Complete 6-product diagnostic family across all asset types",
    "Non-invasive online & offline PD and corona detection",
    "Acoustic, HFCT, Capacitive & Inductive sensor technologies",
    "Sub-pC sensitivity with 3D coordinate tank fault localization",
  ],

  renderType: "image",
  image: "/images/products/partial-discharge-transformer-testing.png",
  specImage: "/images/products/product-testing.jpg",

  engineeringAtAGlance: [
    {
      id: "sensitivity",
      icon: "pd",
      value: "Sub-pC Sensitivity",
      label: "DETECTION LIMIT",
      description: "Ultra-sensitive wideband sensors capture early microscopic insulation micro-voids.",
      highlighted: true,
    },
    {
      id: "localization",
      icon: "signal",
      value: "3D Coordinate Mapping",
      label: "AE-150 LOCALIZATION",
      description: "Multi-channel acoustic time-of-flight triangulates exact fault coordinates inside tanks.",
    },
    {
      id: "online-spot",
      icon: "testing",
      value: "100% Online & Safe",
      label: "LIVE INSPECTION",
      description: "Hotstick and wireless sensors enable thorough inspections without power outage.",
    },
    {
      id: "analyzers",
      icon: "field",
      value: "pC & dB Calibrated",
      label: "XDP-II PRECISION",
      description: "Dual calibrated measurement with PRPD phase-resolved pattern analysis.",
    },
  ],

  rangeEyebrow: "OUR PD SOLUTIONS",
  rangeHeading: "Choose the right partial discharge solution.",

  variants: [
    {
      id: "pd-lt",
      name: "PD-LT – Overhead (advanced)",
      model: "PD-LT",
      subtitle: "Wireless Overhead Apparatus & Cable PD Tester",
      badge: "OVERHEAD ADVANCED",
      image: "/images/products/partial-discharge-transformer-testing.jpg",
      description:
        "Online partial discharge detector with capacitive sensor probe mounted on standard hotsticks for testing live overhead equipment, surge arresters, and cable terminations.",
      highlights: [
        "Wireless telemetry to handheld display unit",
        "Capacitive non-contact & direct contact sensing",
        "Battery operated with real-time audio/visual alert",
        "Rated for medium and high-voltage energized lines",
      ],
      productUrl: "#technical-specifications",
    },
    {
      id: "hfct-series",
      name: "HFCT series",
      model: "HFCT-100/140",
      subtitle: "High Frequency Current Transformers",
      badge: "CLAMP SENSORS",
      image: "/images/products/partial-discharge-online-monitoring.jpg",
      description:
        "Split-core high-frequency current transformers for non-invasive clamping onto cable earth sheaths, neutral grounds, and transformer grounding leads.",
      highlights: [
        "Wideband response from 100 kHz to 50 MHz",
        "Split-core latch design for safe live-line attachment",
        "Optimized for cable joints, GIS grounds, and motors",
        "50 Ω BNC output compatible with all standard analyzers",
      ],
      productUrl: "#technical-specifications",
    },
    {
      id: "pds",
      name: "PDS – Cable accessories",
      model: "PDS",
      subtitle: "Compact Underground Cable Online PD Sensor",
      badge: "CABLE ACCESSORIES",
      image: "/images/products/partial-discharge-transformer-testing.png",
      description:
        "Rugged handheld online PD detection unit designed specifically for underground power cable joints, switchgear terminations, and distribution panels.",
      highlights: [
        "Inductive and capacitive dual-sensor interface",
        "Compact, lightweight, shock-resistant enclosure",
        "Long-life battery autonomy for full-day surveys",
        "Instant dB and pulse count display",
      ],
      productUrl: "#technical-specifications",
    },
    {
      id: "uld-40",
      name: "ULD-40 – Corona effect",
      model: "ULD-40",
      subtitle: "Ultrasonic Corona & Arcing Detector",
      badge: "CORONA EFFECT",
      image: "/images/products/partial-discharge-transformer-testing.jpg",
      description:
        "High-sensitivity directional ultrasonic detector converting high-frequency corona, arcing, and surface tracking signals into audible sound and digital visual levels.",
      highlights: [
        "Precision parabolic dish for long-range target pinpointing",
        "Laser pointer alignment for outdoor line inspection",
        "Immune to electromagnetic substation noise",
        "Detects insulator leakage, bushing cracking, and DO fuse arcing",
      ],
      productUrl: "#technical-specifications",
    },
    {
      id: "xdp-ii",
      name: "XDP-II – Expert PD detector",
      model: "XDP-II",
      subtitle: "Advanced Multi-Mode Portable PD Analyzer",
      badge: "EXPERT DETECTOR",
      image: "/images/products/partial-discharge-transformer-testing-hd.png",
      description:
        "The industry benchmark in battery-operated portable PD diagnostics. Displays real-time apparent charge in pC and dB with phase synchronization and internal memory.",
      highlights: [
        "Dual calibrated pC (picocoulomb) & dB measurement",
        "PRPD / PRPS phase-resolved pattern display",
        "7.5-hour rechargeable battery autonomy",
        "Internal waveform storage with USB PC analysis suite",
      ],
      productUrl: "#technical-specifications",
    },
    {
      id: "ae-150",
      name: "AE-150 – Localization system",
      model: "AE-150",
      subtitle: "Multi-Sensor Acoustic 3D PD Localization System",
      badge: "LOCALIZATION SYSTEM",
      image: "/images/products/partial-discharge-transformer-testing.png",
      description:
        "The premier acoustic localization system for power transformers. Employs multiple magnetic acoustic sensors on the outer tank wall correlated with electrical PD pulses to pinpoint the exact 3D coordinates (X, Y, Z) of faults inside the tank.",
      highlights: [
        "Simultaneous multi-channel acoustic sensor processing",
        "Software-based 3D coordinate mapping inside transformer geometry",
        "Wireless sensor units for rapid non-invasive tank mounting",
        "Distinguishes internal core/winding faults from exterior noise",
      ],
      productUrl: "#technical-specifications",
    },
  ],

  keyTechnicalRanges: {
    title: "Key Specifications across the 6 PD Solutions",
    description:
      "Summary of core measurement technologies and parameters across the official HVTI Partial Discharge family.",
    headers: ["PRODUCT / SYSTEM", "MEASUREMENT TYPE", "SENSOR ARCHITECTURE", "PRIMARY APPLICATION"],
    rows: [
      {
        col1: "PD-LT – Overhead (advanced)",
        col2: "Capacitive / Wireless dB",
        col3: "Capacitive probe on insulated hotstick",
        col4: "Live overhead lines, surge arresters, pole-top equipment",
      },
      {
        col1: "HFCT series",
        col2: "High-Frequency Current (100 kHz – 50 MHz)",
        col3: "Split-core inductive latch CT (50 Ω BNC)",
        col4: "Cable earth sheaths, grounding leads, GIS earth bonds",
      },
      {
        col1: "PDS – Cable accessories",
        col2: "Dual Inductive / Capacitive (dB & pulses)",
        col3: "Handheld contact probe & clamp sensor",
        col4: "Underground power cable joints, splices & terminations",
      },
      {
        col1: "ULD-40 – Corona effect",
        col2: "Directional Ultrasound (40 kHz ± 1 kHz)",
        col3: "Parabolic reflector dish & laser pointer",
        col4: "Outdoor substations, bushings, switchgear arcing & corona",
      },
      {
        col1: "XDP-II – Expert PD detector",
        col2: "Calibrated pC (0.1–100,000 pC) & dB",
        col3: "Multi-sensor: HFCT, TEV, Capacitive & Acoustic",
        col4: "Quantitative lab & field PD analysis with PRPD phase patterns",
      },
      {
        col1: "AE-150 – Localization system",
        col2: "3D Acoustic Time-of-Flight Triangulation",
        col3: "Multi-channel magnetic acoustic tank-wall sensors",
        col4: "Sub-millimeter 3D fault coordinate location in transformer tanks",
      },
    ],
  },

  fullTechnicalSpecs: {
    sections: [
      {
        title: "PD-LT – Overhead (advanced) Specifications",
        specs: [
          { parameter: "Operating Principle", value: "Capacitive field & contact sensing" },
          { parameter: "Telemetry", value: "Wireless radio link to handheld receiver" },
          { parameter: "Mounting Interface", value: "Standard universal hotstick / sunrise fitting" },
          { parameter: "Display Output", value: "Real-time dB level & audio tone alerts" },
          { parameter: "Battery Life", value: "Over 8 hours continuous operation" },
          { parameter: "Application Voltage", value: "Medium & High Voltage distribution/transmission" },
        ],
      },
      {
        title: "HFCT series Specifications",
        specs: [
          { parameter: "Frequency Range", value: "100 kHz – 50 MHz (-3 dB bandwidth)" },
          { parameter: "Core Design", value: "Split-core clamp with safety latch" },
          { parameter: "Output Impedance", value: "50 Ω BNC female connector" },
          { parameter: "Inner Diameter Options", value: "50 mm / 100 mm / 140 mm aperture" },
          { parameter: "Sensitivity", value: "Sub-pC detection on shielded cable grounds" },
          { parameter: "Operating Temperature", value: "-20 °C to +55 °C" },
        ],
      },
      {
        title: "PDS – Cable accessories Specifications",
        specs: [
          { parameter: "Sensor Compatibility", value: "Inductive HFCT & capacitive contact probe" },
          { parameter: "Measurement Display", value: "Backlit LCD displaying dB, peak, and pulse count" },
          { parameter: "Enclosure", value: "Heavy-duty shock-resistant ABS chassis" },
          { parameter: "Filter System", value: "Digital bandpass noise rejection" },
          { parameter: "Battery", value: "Rechargeable Li-ion with rapid USB charge" },
          { parameter: "Target Equipment", value: "Underground cable terminations, joints & spouts" },
        ],
      },
      {
        title: "ULD-40 – Corona effect Specifications",
        specs: [
          { parameter: "Acoustic Detection Center", value: "40 kHz ultrasonic frequency" },
          { parameter: "Optical Alignment", value: "Integrated high-visibility red laser pointer" },
          { parameter: "Directional Concentrator", value: "Detachable transparent parabolic dish" },
          { parameter: "Audio Interface", value: "Noise-cancelling industrial headphones" },
          { parameter: "Visual Indication", value: "Multi-segment LED bargraph level meter" },
          { parameter: "Substation Noise Rejection", value: "100% immune to electromagnetic harmonics" },
        ],
      },
      {
        title: "XDP-II – Expert PD detector Specifications",
        specs: [
          { parameter: "Measurement Modes", value: "pC (apparent charge) and dB (relative intensity)" },
          { parameter: "Phase Synchronization", value: "50 / 60 Hz wireless or line power sync" },
          { parameter: "PRPD / PRPS Display", value: "Phase-Resolved Partial Discharge patterns" },
          { parameter: "Internal Memory", value: "Up to 500 complete waveform recordings" },
          { parameter: "Battery Autonomy", value: "Approx. 7.5 hours continuous field testing" },
          { parameter: "PC Software Suite", value: "USB export with automated diagnostic reporting" },
        ],
      },
      {
        title: "AE-150 – Localization system Specifications",
        specs: [
          { parameter: "Localization Technology", value: "Acoustic / Electrical Time-of-Flight correlation" },
          { parameter: "Acoustic Sensors", value: "High-sensitivity magnetic clamp piezo sensors" },
          { parameter: "Channel Capacity", value: "Multi-channel synchronous high-speed sampling" },
          { parameter: "Positioning Algorithm", value: "Software 3D triangulation inside tank coordinates" },
          { parameter: "Mounting Method", value: "Non-invasive magnetic mounting on outer tank wall" },
          { parameter: "Geometry Mapping", value: "Customizable 3D transformer model import" },
        ],
      },
    ],
  },

  workflow: {
    eyebrow: "THE 4-PHASE PARTIAL DISCHARGE DIAGNOSTIC WORKFLOW",
    heading: "How our 6 solutions work together to pinpoint & eliminate insulation failure.",
    steps: [
      {
        step: "01",
        title: "Detect Live Discharge Signals",
        description: "Perform non-invasive live surveys across switchgear, cables, and transformers using PD-LT, PDS, HFCT sensors, or ULD-40 acoustic scanners.",
        icon: "testing",
        image: "/images/products/partial-discharge-transformer-testing-hd.png",
        tag: "NON-INVASIVE LIVE SURVEY",
        technicalDetails: [
          "Acoustic & Airborne Ultrasonic Detection (ULD-40)",
          "Overhead Line Parabolic PD Survey (PD-LT)",
          "Cable Screen High-Frequency CT Coupling (HFCT)",
          "Non-Intrusive Live Substation Assessment",
        ],
      },
      {
        step: "02",
        title: "Identify & Classify PRPD Patterns",
        description: "Deploy XDP-II to capture Phase-Resolved Partial Discharge (PRPD) patterns to distinguish between internal voids, surface tracking, and corona discharges.",
        icon: "signal",
        image: "/images/products/partial-discharge-transformer-testing.png",
        tag: "PRPD PATTERN CLASSIFICATION",
        technicalDetails: [
          "Phase-Resolved Partial Discharge Pattern Capture",
          "Distinguish Corona vs Surface vs Internal Void",
          "Multi-Sensor Signal Filtering & Noise Rejection",
          "50 / 60 Hz Power Frequency Phase Synchronization",
        ],
      },
      {
        step: "03",
        title: "Localize Exact Fault Origin in 3D",
        description: "Mount AE-150 acoustic sensors magnetically on the transformer tank; time-of-flight acoustic triangulation calculates exact [X, Y, Z] millimeter coordinates.",
        icon: "control",
        image: "/images/products/partial-discharge-transformer-testing-hd.png",
        tag: "3D ACOUSTIC TRIANGULATION",
        technicalDetails: [
          "AE-150 Multi-Sensor Magnetic Tank Mounting",
          "Acoustic Time-of-Flight Speed-of-Sound Triangulation",
          "Exact 3D Coordinates Calculation [X, Y, Z]",
          "Pinpoints Internal Winding & Core Faults",
        ],
      },
      {
        step: "04",
        title: "Diagnose Severity & Plan Maintenance",
        description: "Quantify apparent charge level in picocoulombs (pC), evaluate insulation degradation trends, and generate official IEC 60270 test reports.",
        icon: "gear",
        image: "/images/products/partial-discharge-transformer-testing.png",
        tag: "SEVERITY ASSESSMENT & REPORTING",
        technicalDetails: [
          "Apparent Charge Quantification in Picocoulombs (pC)",
          "Insulation Degradation Rate & Severity Index",
          "Targeted Maintenance & Repair Action Plan",
          "Automated IEC 60270 Standard Compliance Certificate",
        ],
      },
    ],
  },

  applications: [
    {
      id: "power-transformers",
      title: "Power Transformers",
      icon: "transformer",
      description: "Detect internal winding discharges, bushing core tracking, and 3D fault localization with AE-150.",
      isCenter: true,
    },
    {
      id: "overhead-lines",
      title: "Overhead Lines & Bushings",
      icon: "voltage",
      description: "Live-line spot detection on overhead lines and surge arresters with PD-LT and ULD-40.",
    },
    {
      id: "underground-cables",
      title: "Underground Cables",
      icon: "cable",
      description: "HFCT and PDS spot-checking across cable joints, splices, and pothead terminations.",
    },
    {
      id: "mv-switchgear",
      title: "MV / HV Switchgear",
      icon: "switchgear",
      description: "Detection of internal void discharges and surface tracking across busbars and breakers with XDP-II.",
    },
    {
      id: "generators-motors",
      title: "Generators & Motors",
      icon: "generator",
      description: "Stator bar insulation degradation and slot discharge monitoring during full operating load.",
    },
  ],

  benefits: [
    {
      id: "early-warning",
      icon: "shield",
      title: "Zero Unplanned Outages",
      description: "Identifies insulation degradation months before catastrophic flashover and apparatus breakdown.",
    },
    {
      id: "complete-ecosystem",
      icon: "power",
      title: "6 Specialized Instruments",
      description: "Targeted tools covering overhead, underground, acoustic corona, and 3D tank localization.",
    },
    {
      id: "expert-support",
      icon: "testing",
      title: "Turnkey Engineering Support",
      description: "Expert data interpretation, PRPD signature analysis, and certified on-site training.",
    },
  ],

  cta: {
    title: "Need a comprehensive Partial Discharge solution?",
    description:
      "Consult with our high-voltage insulation diagnostics team to configure the optimal detection, localization, and testing package for your substation assets.",
    primaryButtonText: "Talk to a PD Specialist",
    primaryButtonLink: "/contact?subject=Partial%20Discharge%20Solutions%20Inquiry",
    secondaryButtonText: "Request Technical Consultation",
    secondaryButtonLink: "/contact?subject=Request%20a%20Quote%20Partial%20Discharge",
    supportingImage: "/images/products/partial-discharge-transformer-testing.png",
  },
};

export default partialDischargeSolutions;
