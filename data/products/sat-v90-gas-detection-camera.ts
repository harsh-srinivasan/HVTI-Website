import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: SAT V90 GAS DETECTION CAMERA
   File: data/products/sat-v90-gas-detection-camera.ts
   ================================================================ */

const satV90GasDetectionCamera: ProductData = {
  slug: "sat-v90-gas-detection-camera",
  category: "Cameras and Imaging Systems",
  title: "SAT V90 Gas Detection Camera",
  tagline: "See the Unseen. Detect Gas Leaks.",
  description:
    "Advanced thermal imaging camera for visualizing and pinpointing VOC gas leaks. Designed for petrochemical, oil & gas, refineries and industrial applications.",

  overview:
    "The SAT V90 is an elite optical gas imaging (OGI) system engineered for rapid, non-contact visualization and tracing of volatile organic compound (VOC) leaks. Powered by a cryogenic cooled Quantum Well Infrared Photodetector (QWIP) tuned precisely to the 3.2–3.5 μm hydrocarbon absorption band, the V90 detects minute leaks as small as 0.001 ml/s from safe distances. Fully compliant with EPA LDAR regulations and certified for hazardous environments, it enables comprehensive facility scans without plant shutdown.",

  highlights: [
    "Detects VOC gas leaks",
    "Cooled QWIP Detector",
    "Designed for industrial environments",
  ],

  renderType: "image",
  image: "/images/products/sat-v90.png",
  specImage: "/images/products/sat-v90.png",

  engineeringAtAGlance: [
    {
      id: "qwip-detector",
      icon: "sensor",
      code: "BAND",
      label: "SPECTRAL BAND",
      value: "3.2 – 3.5 μm",
      description: "Cooled QWIP narrow-band sensor tuned for VOC & methane leaks",
    },
    {
      id: "thermal-netd",
      icon: "testing",
      code: "NETD",
      label: "THERMAL SENSITIVITY",
      value: "≤ 15 mK (0.015°C)",
      description: "Cryogenic Stirling cooled sensor spots subtle gas temperature differentials",
      highlighted: true,
    },
    {
      id: "leak-threshold",
      icon: "pd",
      code: "LEAK",
      label: "LEAK THRESHOLD",
      value: "0.001 ml/s",
      description: "Detects minute fugitive emissions without shutting down operations",
    },
    {
      id: "atex-cert",
      icon: "shield",
      code: "CERT",
      label: "REGULATORY",
      value: "EPA OOOOa & ATEX",
      description: "Meets stringent EPA Method 21 and hazardous refinery requirements",
    },
  ],

  features: [
    {
      title: "Visualize Gas Leaks",
      description:
        "Transforms invisible volatile organic compounds and fugitive methane emissions into clear, real-time smoke-like plumes on screen, pinpointing the exact leak origin without plant downtime.",
    },
    {
      title: "High Sensitivity (NETD 15 mK)",
      description:
        "Exceptional thermal sensitivity down to ≤ 0.015°C enables operators to spot micro-leaks down to 0.001 ml/s even under low thermal contrast or windy outdoor atmospheric conditions.",
    },
    {
      title: "Cooled QWIP Detector (3.2 – 3.5 μm)",
      description:
        "High-performance Quantum Well Infrared Photodetector cooled by an integrated Stirling cooler, matched to the fundamental molecular resonance frequencies of petrochemical hydrocarbons.",
    },
    {
      title: "Rugged Industrial Design",
      description:
        "Engineered for hazardous petrochemical refineries, tank farms, and offshore rigs with high electromagnetic immunity, shock resistance, and rapid cold boot times under 7 minutes.",
    },
    {
      title: "Dual Gas & Radiometric Thermal Mode",
      description:
        "Functions simultaneously as a dedicated EPA LDAR optical gas leak survey camera and a high-precision calibrated radiometric thermography instrument with 5MP Duo-Vision blending.",
    },
  ],

  specificationsTable: [
    {
      parameter: "Detector & Cooling",
      details: "Cooled QWIP + Miniature Stirling Cooler",
      range: "Cool down < 7 minutes",
    },
    {
      parameter: "Spectral Response",
      details: "Narrowband hydrocarbon absorption",
      range: "3.2 μm – 3.5 μm",
    },
    {
      parameter: "Detector Resolution",
      details: "High-density cooled focal plane array",
      range: "320 × 256 / 640 × 512 px",
    },
    {
      parameter: "Thermal Sensitivity (NETD)",
      details: "Ultra-sensitive cryogenic Stirling sensor",
      range: "≤ 0.015°C (15 mK) at +30°C",
    },
    {
      parameter: "Leak Detection Limit",
      details: "Dynamic background subtraction filter",
      range: "Detects leaks down to 0.001 ml/s",
    },
    {
      parameter: "Target VOC Gases",
      details: "Methane, Ethane, Propane, VOCs",
      range: "20+ detectable hydrocarbons",
    },
    {
      parameter: "Temperature Range",
      details: "Calibrated radiometric thermography",
      range: "-20°C to +350°C (opt 500°C)",
    },
    {
      parameter: "Display & Viewfinder",
      details: "3.5″ daylight LCD + OLED EVF",
      range: "Dual glare-free displays",
    },
    {
      parameter: "Visual Camera",
      details: "5.0 MP HD CCD + Duo-Vision+",
      range: "Gas plume video fusion",
    },
  ],

  applications: [
    {
      id: "petrochemical",
      title: "Petrochemical Plants",
      icon: "substation",
      description: "Inspect valves, flanges, relief valves, and process piping across extensive chemical complexes.",
      isCenter: true,
    },
    {
      id: "oil-gas",
      title: "Oil & Gas Facilities",
      icon: "field",
      description: "Scan wellheads, offshore platforms, compressor stations, and separator units for fugitive emissions.",
    },
    {
      id: "refineries",
      title: "Refineries",
      icon: "transformer",
      description: "Routine LDAR compliance audits across distillation towers, tank storage farms, and flare stacks.",
    },
    {
      id: "safety",
      title: "Industrial Safety",
      icon: "shield",
      description: "Verify gas-tight integrity of seals and pipelines before personnel enter confined work zones.",
    },
    {
      id: "firefighting",
      title: "Fire Fighting & Hazmat",
      icon: "generator",
      description: "Locate dangerous explosive vapor clouds and track hazardous chemical spills during emergencies.",
    },
    {
      id: "search-rescue",
      title: "Search & Rescue",
      icon: "control",
      description: "Rapidly inspect industrial disaster zones and chemical storage breaches for toxic atmospheric pockets.",
    },
  ],

  benefits: [
    {
      id: "expert-guidance",
      icon: "shield",
      title: "Expert Guidance",
      description: "Technical consultation on gas detection limits, optical ranges, and EPA Method 21 / OOOOa compliance.",
    },
    {
      id: "reliable-products",
      icon: "testing",
      title: "Certified Safety",
      description: "ATEX certified hardware engineered specifically for explosive atmospheres and harsh petrochemical environments.",
    },
    {
      id: "application-support",
      icon: "control",
      title: "LDAR Workflow Training",
      description: "Comprehensive on-site operator training, reporting software setup, and inspection protocol optimization.",
    },
    {
      id: "long-term-partnership",
      icon: "power",
      title: "Cryocooler Support & Service",
      description: "Factory calibration, cryocooler maintenance, and responsive local high-voltage engineering service.",
    },
  ],

  cta: {
    title: "Need a solution for gas leak detection?",
    description:
      "Request a technical demonstration, consultation, or formal quotation for the SAT V90 Optical Gas Imaging camera.",
    primaryButtonText: "Talk to an Engineer",
    primaryButtonLink: "/contact?subject=SAT%20V90%20Gas%20Detection%20Camera%20Inquiry",
    secondaryButtonText: "Download Brochure",
    secondaryButtonLink: "/resources",
    supportingImage: "/images/products/sat-v90.png",
  },
};

export default satV90GasDetectionCamera;
