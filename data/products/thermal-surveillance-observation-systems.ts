import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: THERMAL SURVEILLANCE & OBSERVATION SYSTEMS
   File: data/products/thermal-surveillance-observation-systems.ts
   ================================================================ */

const thermalSurveillanceObservationSystems: ProductData = {
  slug: "thermal-surveillance-observation-systems",
  category: "Cameras and Imaging Systems",
  title: "Thermal Surveillance & Observation Systems",
  tagline: "See More. Stay Safer.",
  description:
    "Thermal imaging solutions for security, surveillance and long-range observation. Designed for night patrolling, perimeter monitoring and critical infrastructure protection.",

  overview:
    "HVTI provides specialized tactical thermal surveillance and long-range observation systems designed for security agencies, border forces, critical utility perimeter guarding, and emergency search operations. Utilizing passive infrared detection that requires zero ambient illumination or illuminators, our handheld monoculars and long-range thermal binoculars identify human and vehicle thermal signatures through pitch darkness, dense foliage, smoke, and camouflage at distances up to 2.5 kilometers.",

  highlights: [
    "Reliable night vision",
    "Long-range observation",
    "Compact and portable",
    "Ideal for security and surveillance",
  ],

  renderType: "image",
  image: "/images/products/satir-utr50.png",
  specImage: "/images/products/product-thermal.jpg",

  engineeringAtAGlance: [
    {
      id: "range",
      icon: "signal",
      value: "Up to 2.5 km Range",
      label: "OBSERVATION RANGE",
      description: "Long-range vehicle and human identification through total darkness and dense fog.",
      highlighted: true,
    },
    {
      id: "sensitivity",
      icon: "testing",
      value: "NETD < 50 mK",
      label: "THERMAL SENSITIVITY",
      description: "High signal-to-noise ratio uncooled UFPA detector resolving subtle thermal signatures.",
    },
    {
      id: "optics",
      icon: "control",
      value: "50mm / 100mm Optics",
      label: "AUTO-FOCUS LENSES",
      description: "Interchangeable optical lenses with digital 2x zoom and motorized auto-focusing.",
    },
    {
      id: "encapsulation",
      icon: "shield",
      value: "MIL-STD-810 Standard",
      label: "TACTICAL ENCAPSULATION",
      description: "Pressurized anti-fog eyepieces and military standard shock and weatherproofing.",
    },
  ],

  rangeEyebrow: "OUR SURVEILLANCE & OBSERVATION RANGE",
  rangeHeading: "Portable monoculars and binocular systems for tactical surveillance.",

  productVariants: [
    {
      id: "umti",
      name: "SATIR UMTI / UHTI",
      subtitle: "Handheld Tactical Thermal Camera",
      badge: "Handheld Monocular",
      image: "/images/products/satir-umti.png",
      description:
        "Compact entry-level thermal monocular designed for night patrolling, security observation, and perimeter rounds. Equipped with a 384×288 uncooled detector and pressurized eyepiece.",
      bulletPoints: [
        "High-sensitivity 384×288 uncooled infrared detector",
        "Built-in MP4 real-time thermal video recording to SD card",
        "Pressurized eyepiece preventing fogging in humid climates",
        "MIL-STD-810 military standard encapsulation for rugged field use",
      ],
      ctaText: "View Details",
      ctaLink: "#comparison-table",
    },
    {
      id: "utr50",
      name: "SATIR UTR50 / UTR75",
      subtitle: "Long-Range Thermal Binoculars",
      badge: "Binocular System",
      image: "/images/products/satir-utr50.png",
      description:
        "Lightweight uncooled thermal binoculars engineered for extended surveillance missions. Features 50mm/100mm lenses, detachable bi-ocular viewer, and up to 2500m vehicle detection.",
      bulletPoints: [
        "Choice of 384×288 (UTR50) or 640×480 (UTR75) UFPA detector",
        "Detection range up to 2,500m (Vehicle) / 750m (Human)",
        "Detachable bi-ocular viewer with high-resolution OLED display",
        "Includes remote control unit with 6-meter extension cable",
      ],
      ctaText: "View Details",
      ctaLink: "#comparison-table",
    },
  ],

  comparisonMatrix: {
    title: "Compare Surveillance & Observation Systems",
    fullSpecLink: "/contact?subject=Thermal%20Surveillance%20Datasheet",
    columns: [
      { id: "umti", name: "SATIR UMTI / UHTI", tag: "Tactical Monocular", image: "/images/products/satir-umti.png" },
      { id: "utr50", name: "SATIR UTR50 / UTR75", tag: "Long-Range Binoculars", image: "/images/products/satir-utr50.png" },
    ],
    rows: [
      {
        parameter: "Detector Resolution",
        values: {
          umti: "384 × 288 UFPA Uncooled",
          utr50: "384 × 288 (UTR50) / 640 × 480 (UTR75)",
        },
        highlight: true,
      },
      {
        parameter: "Thermal Sensitivity",
        values: {
          umti: "NETD < 50 mK @ 30°C",
          utr50: "NETD < 50 mK @ 30°C",
        },
      },
      {
        parameter: "Optical Lens Options",
        values: {
          umti: "Manual Focus Interchangeable Lens",
          utr50: "50mm Auto-Focus (Optional 100mm Telephoto)",
        },
      },
      {
        parameter: "Detection Range (Vehicle)",
        values: {
          umti: "Up to 1,200 meters",
          utr50: "Up to 2,500 meters",
        },
        highlight: true,
      },
      {
        parameter: "Detection Range (Human)",
        values: {
          umti: "Up to 450 meters",
          utr50: "Up to 750 meters",
        },
      },
      {
        parameter: "Viewfinder / Display",
        values: {
          umti: "Pressurized High-Res OLED Eyepiece",
          utr50: "Detachable Bi-Ocular OLED Console",
        },
      },
      {
        parameter: "Recording & Storage",
        values: {
          umti: "Built-in MP4 Video to SD Card",
          utr50: "Digital Video & High-Quality Snapshot Storage",
        },
      },
      {
        parameter: "Remote Operation",
        values: {
          umti: "Compact Ergonomic Handheld Grip",
          utr50: "Remote Control Unit with 6m Extension Cable",
        },
      },
      {
        parameter: "Battery Operating Time",
        values: {
          umti: "> 4 Hours Continuous (Li-ion)",
          utr50: "> 6 Hours Continuous (7.2V Li-ion Pack)",
        },
      },
      {
        parameter: "Environmental Standard",
        values: {
          umti: "MIL-STD-810 Encapsulation",
          utr50: "MIL-STD-810 Ruggedized Outdoor Enclosure",
        },
      },
    ],
  },

  applications: [
    {
      id: "perimeter",
      title: "Perimeter Monitoring",
      icon: "substation",
      isCenter: true,
      description: "24/7 boundary defense around power plants, substations, and critical industrial compounds.",
    },
    {
      id: "patrolling",
      title: "Night Patrolling",
      icon: "field",
      description: "Silent, covert security rounds with instantaneous human signature detection.",
    },
    {
      id: "infrastructure",
      title: "Infrastructure Security",
      icon: "switchgear",
      description: "Preventing trespassing, copper theft, and vandalism at remote utility installations.",
    },
    {
      id: "wildlife",
      title: "Wildlife Observation",
      icon: "signal",
      description: "Non-invasive ecological tracking and anti-poaching surveillance in wildlife reserves.",
    },
    {
      id: "border",
      title: "Border Surveillance",
      icon: "testing",
      description: "Long-range tactical observation across international borders, coastlines, and checkpoints.",
    },
    {
      id: "search-rescue",
      title: "Search & Rescue",
      icon: "generator",
      description: "Rapid localization of lost persons and disaster survivors across vast outdoor areas.",
    },
  ],

  benefits: [
    {
      id: "expert-guidance",
      icon: "shield",
      title: "Expert Guidance",
      description: "Optical calculations and range modeling for fixed and mobile surveillance deployments.",
    },
    {
      id: "reliable-products",
      icon: "testing",
      title: "Rugged Reliability",
      description: "MIL-STD tested enclosures built to perform in extreme temperatures, rain, and dust.",
    },
    {
      id: "application-support",
      icon: "control",
      title: "Tactical Training",
      description: "User training, tactical accessories, and optics calibration support.",
    },
    {
      id: "long-term-partnership",
      icon: "power",
      title: "Long-Term Partnership",
      description: "Guaranteed spare parts, sensor servicing, and comprehensive maintenance contracts.",
    },
  ],

  cta: {
    title: "Need help with surveillance solutions?",
    description:
      "Our security and surveillance specialists will help configure the appropriate optical focal lengths and detector resolutions for your perimeter requirements.",
    primaryButtonText: "Talk to an Engineer",
    primaryButtonLink: "/contact?subject=Thermal%20Surveillance%20Systems%20Inquiry",
    secondaryButtonText: "Download Brochure",
    secondaryButtonLink: "/resources",
    supportingImage: "/images/products/satir-utr50.png",
  },
};

export default thermalSurveillanceObservationSystems;
