import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: INDUSTRIAL & ELECTRICAL THERMAL IMAGING CAMERAS
   File: data/products/industrial-thermal-cameras.ts
   ================================================================ */

const industrialThermalCameras: ProductData = {
  slug: "industrial-thermal-cameras",
  category: "Cameras and Imaging Systems",
  title: "Industrial & Electrical Thermal Imaging Cameras",
  tagline: "Detect. Diagnose. Prevent.",
  description:
    "High-performance thermal imaging cameras for electrical inspection, condition monitoring and predictive maintenance across power generation, transmission, distribution and industrial facilities.",

  overview:
    "HVTI provides certified industrial-grade thermal imaging solutions engineered specifically for power utilities, industrial maintenance teams, and electrical testing contractors. From ultra-portable Android thermal tablets (PK-80 / PK-160) to high-definition industrial workhorses (Hotfind S / D300 / D500) and premium remote-control analysis systems (G96), our lineup delivers crisp thermograms with NETD down to < 30 mK, Duo-Vision image blending, and automated hotspot localization.",

  highlights: [
    "Early fault detection",
    "Improve operational safety",
    "Reduce downtime",
    "Reliable measurements",
  ],

  renderType: "image",
  image: "/images/products/satir-hotfind-s.png",
  specImage: "/images/products/product-thermal.jpg",

  engineeringAtAGlance: [
    {
      id: "resolution",
      icon: "signal",
      value: "Up to 640 × 480 IR",
      label: "THERMAL RESOLUTION",
      description: "High-density uncooled focal plane array (UFPA) sensor for crisp infrared thermograms.",
      highlighted: true,
    },
    {
      id: "sensitivity",
      icon: "testing",
      value: "NETD ≤ 0.03°C",
      label: "THERMAL SENSITIVITY",
      description: "Resolves minute temperature differences down to 30 mK for early electrical hotspot detection.",
    },
    {
      id: "platform",
      icon: "control",
      value: "Android OS & 50Hz",
      label: "SMART PLATFORM",
      description: "Smart tablet touch technology with instant Wi-Fi cloud sharing and 50Hz dynamic imaging.",
    },
    {
      id: "range",
      icon: "voltage",
      value: "-20°C to +650°C",
      label: "TEMPERATURE SPAN",
      description: "Wide measurement range extendible up to 2000°C for electrical, mechanical, and refractory testing.",
    },
  ],

  rangeEyebrow: "OUR RANGE",
  rangeHeading: "Choose the right thermal imaging camera for your application.",

  rangeGroups: [
    {
      index: "01",
      title: "Portable / Entry Level",
      description: "Android OS thermal tablets for rapid walk-through electrical audits and on-site PDF reporting.",
      products: [
        { name: "PK-80", image: "/images/products/satir-pk80.png", tag: "80×80 IR" },
        { name: "PK-160", image: "/images/products/satir-pk160.png", tag: "160×120 IR" },
      ],
      ctaText: "View Details",
      ctaLink: "#comparison-table",
    },
    {
      index: "02",
      title: "Professional / Industrial",
      description: "High-precision handheld infrared cameras with motorized focus, laser range finder, and 50Hz dynamic imaging.",
      products: [
        { name: "Hotfind S", image: "/images/products/satir-hotfind-s.png", tag: "384×288 IR" },
        { name: "D300", image: "/images/products/satir-d300.png", tag: "384×288 + LRF" },
        { name: "D500", image: "/images/products/satir-d500.png", tag: "640×480 HD" },
      ],
      ctaText: "View Details",
      ctaLink: "#comparison-table",
    },
    {
      index: "03",
      title: "Advanced Analysis",
      description: "Performance-grade 640×480 UFPA camera with 5-inch detachable LCD remote console for hazardous substation bays.",
      products: [
        { name: "G96", image: "/images/products/satir-g96.png", tag: "640×480 Detachable" },
      ],
      ctaText: "View Details",
      ctaLink: "#comparison-table",
    },
  ],

  comparisonMatrix: {
    title: "Compare Thermal Imaging Cameras",
    fullSpecLink: "/contact?subject=Thermal%20Camera%20Datasheet%20Request",
    columns: [
      { id: "pk80", name: "PK-80", tag: "Entry Tablet", image: "/images/products/satir-pk80.png" },
      { id: "pk160", name: "PK-160", tag: "Smart Tablet", image: "/images/products/satir-pk160.png" },
      { id: "hotfind", name: "Hotfind S", tag: "Industrial 50Hz", image: "/images/products/satir-hotfind-s.png" },
      { id: "d300", name: "D300", tag: "Auto-Focus LRF", image: "/images/products/satir-d300.png" },
      { id: "d500", name: "D500", tag: "HD 640×480", image: "/images/products/satir-d500.png" },
      { id: "g96", name: "G96", tag: "Analysis Console", image: "/images/products/satir-g96.png" },
    ],
    rows: [
      {
        parameter: "Thermal Resolution",
        values: {
          pk80: "80 × 80 (6,400 px)",
          pk160: "160 × 120 (19,200 px)",
          hotfind: "384 × 288 (110,592 px)",
          d300: "384 × 288 (110,592 px)",
          d500: "640 × 480 (307,200 px)",
          g96: "640 × 480 (307,200 px)",
        },
        highlight: true,
      },
      {
        parameter: "Temperature Range",
        values: {
          pk80: "-20°C to +160°C",
          pk160: "-20°C to +350°C",
          hotfind: "-20°C to +650°C (opt 1500°C)",
          d300: "-20°C to +650°C (opt 1500°C)",
          d500: "-20°C to +600°C (opt 1000°C)",
          g96: "-20°C to +600°C (opt 2000°C)",
        },
      },
      {
        parameter: "NETD Sensitivity",
        values: {
          pk80: "< 0.08°C @ 30°C",
          pk160: "< 0.05°C @ 30°C",
          hotfind: "≤ 0.035°C @ 30°C",
          d300: "≤ 0.03°C @ 30°C",
          d500: "≤ 0.03°C @ 30°C",
          g96: "≤ 0.03°C @ 30°C",
        },
      },
      {
        parameter: "Display",
        values: {
          pk80: "5.5″ Capacitive Touch",
          pk160: "5.0″ Capacitive Touch",
          hotfind: "3.5″ Tilting Touch LCD",
          d300: "3.5″ Rotatable Touch LCD",
          d500: "3.5″ LED Touch Screen",
          g96: "5.0″ Detachable LCD Console",
        },
      },
      {
        parameter: "Visual Camera",
        values: {
          pk80: "8 MP HD CCD",
          pk160: "8 MP HD CCD",
          hotfind: "5 MP HD",
          d300: "5 MP CCD + Duo-Vision+",
          d500: "5 MP CCD",
          g96: "5 MP HD + DuoVision",
        },
      },
      {
        parameter: "Focusing",
        values: {
          pk80: "Focus Free",
          pk160: "Focus Free",
          hotfind: "Manual Focus",
          d300: "Laser Rangefinder Auto",
          d500: "Motorized Auto-Focus",
          g96: "Motorized / Manual",
        },
      },
      {
        parameter: "Connectivity",
        values: {
          pk80: "Wi-Fi / Bluetooth / USB",
          pk160: "Wi-Fi / Bluetooth / USB",
          hotfind: "USB / Internal Memory",
          d300: "USB Type-C / SD Card",
          d500: "USB / 32GB SD Card",
          g96: "USB Real-Time / SD / GPS",
        },
      },
      {
        parameter: "Key Architecture",
        values: {
          pk80: "Android Tablet Platform",
          pk160: "Android OS Report Sync",
          hotfind: "50Hz Dynamic Frame Rate",
          d300: "Integrated LRF & Duo-Vision+",
          d500: "High Resolution Industrial",
          g96: "Remote Control Detachable",
        },
      },
    ],
  },

  applications: [
    {
      id: "panels",
      title: "Electrical Panels & Switchgear",
      icon: "switchgear",
      description: "Detect phase unbalances, loose lugs, and contact oxidation before catastrophic flashover.",
    },
    {
      id: "cables",
      title: "Cables & Connections",
      icon: "cable",
      description: "Spot high-resistance crimps and overloaded cable terminations in dense cable trays.",
    },
    {
      id: "substations",
      title: "Substations & Busbars",
      icon: "substation",
      isCenter: true,
      description: "Inspect energized disconnectors, busbar bolted joints, and bushings from safe yard distances.",
    },
    {
      id: "motors",
      title: "Motors & Generators",
      icon: "generator",
      description: "Monitor bearing friction, winding temperature anomalies, and cooling blockage.",
    },
    {
      id: "maintenance",
      title: "Preventive Maintenance",
      icon: "shield",
      description: "Continuous condition trending and baseline thermography across utility infrastructure.",
    },
  ],

  benefits: [
    {
      id: "expert-guidance",
      icon: "shield",
      title: "Expert Guidance",
      description: "Get the right resolution and optical configuration tailored specifically to your inspection requirements.",
    },
    {
      id: "reliable-products",
      icon: "testing",
      title: "Reliable Products",
      description: "Proven technology from world-leading thermography manufacturers with calibrated radiometric precision.",
    },
    {
      id: "application-support",
      icon: "control",
      title: "Application Support",
      description: "From model selection and on-site training to desktop analysis software and workflow integration.",
    },
    {
      id: "long-term-partnership",
      icon: "power",
      title: "Long-Term Partnership",
      description: "Dedicated calibration, warranty servicing, and lifetime technical assistance for your inspection fleet.",
    },
  ],

  cta: {
    title: "Not sure which thermal imaging camera is right for you?",
    description:
      "Our high-voltage application engineers will analyze your target distances, thermal sensitivity needs, and temperature ranges to recommend the optimal solution.",
    primaryButtonText: "Talk to an Engineer",
    primaryButtonLink: "/contact?subject=Thermal%20Imaging%20Cameras%20Inquiry",
    secondaryButtonText: "Download Brochure",
    secondaryButtonLink: "/resources",
    supportingImage: "/images/products/satir-hotfind-s.png",
  },
};

export default industrialThermalCameras;
