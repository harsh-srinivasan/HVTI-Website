import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: AUTOMOTIVE THERMAL IMAGING SYSTEMS
   File: data/products/automotive-thermal-imaging-systems.ts
   ================================================================ */

const automotiveThermalImagingSystems: ProductData = {
  slug: "automotive-thermal-imaging-systems",
  category: "Cameras and Imaging Systems",
  title: "Automotive Thermal Imaging Systems",
  tagline: "See Further. Drive Safer.",
  description:
    "Thermal imaging systems for enhanced visibility in low-light, fog and adverse weather conditions. Designed for automotive safety and specialised vehicle applications.",

  overview:
    "HVTI delivers cutting-edge vehicle-mounted infrared night vision solutions engineered to enhance operator safety across passenger, commercial, emergency response, and heavy utility fleets. Featuring advanced uncooled thermal sensors and low-light optical technology, the NV-series pierces total darkness, thick fog, heavy rain, and oncoming headlight glare, providing real-time pedestrian, animal, and obstacle warnings far beyond standard high-beam headlights.",

  highlights: [
    "Enhanced night visibility",
    "Detect pedestrians & obstacles",
    "Improved driving safety",
  ],

  renderType: "image",
  image: "/images/products/satir-nv618s.png",
  specImage: "/images/products/product-thermal.jpg",

  engineeringAtAGlance: [
    {
      id: "detection",
      icon: "signal",
      value: "Up to 400m Detection",
      label: "DETECTION RANGE",
      description: "Detects pedestrians, cyclists, and unlit road hazards 3x further than high-beam headlights.",
      highlighted: true,
    },
    {
      id: "channels",
      icon: "control",
      value: "Dual-Vision Channels",
      label: "OPTICAL SENSORS",
      description: "Combines long-wave infrared thermal sensor with 1080×720 low-light night-vision optics.",
    },
    {
      id: "weather",
      icon: "field",
      value: "IP67 All-Weather",
      label: "RUGGED HOUSING",
      description: "Hermetically sealed shock-proof chassis with built-in heated lens element for de-icing.",
    },
    {
      id: "alerts",
      icon: "testing",
      value: "Real-Time AI Alarms",
      label: "ACTIVE SAFETY ALERTS",
      description: "Intelligent on-screen bounding boxes and in-cabin audible collision warning signals.",
    },
  ],

  rangeEyebrow: "OUR AUTOMOTIVE RANGE",
  rangeHeading: "Advanced vehicle night-vision and obstacle avoidance systems.",

  productVariants: [
    {
      id: "nv618s",
      name: "SATIR NV618S",
      subtitle: "Dual-Field Vehicle Night Vision Camera",
      badge: "Dual-Channel",
      image: "/images/products/satir-nv618s.png",
      description:
        "Dual-channel automotive safety camera combining 384×288 thermal imaging with a 1080×720 low-light sensor, built-in pedestrian analytics, and IP67 weather sealing.",
      bulletPoints: [
        "Detect pedestrians, cyclists & animals in total darkness",
        "Dual-channel thermal IR + low-light optical sensor",
        "Single or 4-screen video output to existing in-dash monitor",
        "Rugged IP67 encapsulation with heated front lens element",
      ],
      ctaText: "View Details",
      ctaLink: "#comparison-table",
    },
    {
      id: "nv618w",
      name: "SATIR NV618W / La Moon",
      subtitle: "Wide-Angle Wireless Vehicle Thermal Imager",
      badge: "Wireless Tablet",
      image: "/images/products/satir-nv618w.png",
      description:
        "Vehicle-mounted thermal night vision system featuring a wireless link to a dedicated 7-inch touchscreen Android tablet, wide-angle optics, and glare immunity.",
      bulletPoints: [
        "Wireless connection between bumper camera and 7″ tablet",
        "Wide field of view showing road edges and approaching hazards",
        "Completely immune to oncoming high-beam headlight glare",
        "Additional connectivity: GPS, Bluetooth, Wi-Fi & Android OS",
      ],
      ctaText: "View Details",
      ctaLink: "#comparison-table",
    },
  ],

  comparisonMatrix: {
    title: "Compare Automotive Thermal Imaging",
    fullSpecLink: "/contact?subject=Automotive%20Thermal%20Datasheet",
    columns: [
      { id: "nv618s", name: "SATIR NV618S", tag: "Dual-Field Camera", image: "/images/products/satir-nv618s.png" },
      { id: "nv618w", name: "NV618W / La Moon", tag: "Wireless Tablet System", image: "/images/products/satir-nv618w.png" },
    ],
    rows: [
      {
        parameter: "Primary Application",
        values: {
          nv618s: "Commercial, Emergency & Utility Fleets",
          nv618w: "Passenger, Long-Haul & Specialized Vehicles",
        },
        highlight: true,
      },
      {
        parameter: "Thermal Resolution",
        values: {
          nv618s: "384 × 288 Uncooled FPA",
          nv618w: "384 × 288 Uncooled FPA",
        },
      },
      {
        parameter: "Optical Configuration",
        values: {
          nv618s: "Dual Channel: 28°×21° IR + 19°×11° Low-Light",
          nv618w: "Wide Angle 28°×21° Thermal Optics",
        },
      },
      {
        parameter: "Night Vision Channel",
        values: {
          nv618s: "1080×720 B/W Sensor (0.01 Lux Sensitivity)",
          nv618w: "Direct High-Definition Thermal IR Streaming",
        },
      },
      {
        parameter: "Obstacle / Pedestrian Alarms",
        values: {
          nv618s: "Visual & Audible In-Cabin Warning Alerts",
          nv618w: "On-Screen Dynamic Highlight & Warning Bounding",
        },
      },
      {
        parameter: "Display Integration",
        values: {
          nv618s: "Standard CVBS / RCA Video to Vehicle Head Unit",
          nv618w: "Included 7″ High-Resolution Wireless Touch Tablet",
        },
      },
      {
        parameter: "Encapsulation & Rating",
        values: {
          nv618s: "IP67 Submersible Shock-Proof Aluminium",
          nv618w: "IP65 Weatherproof Sealed Enclosure",
        },
      },
      {
        parameter: "Power Input",
        values: {
          nv618s: "DC 9V – 32V (Automotive 12V/24V compatible)",
          nv618w: "DC 10V – 30V Vehicle Power Supply",
        },
      },
    ],
  },

  applications: [
    {
      id: "night-driving",
      title: "Night Driving Safety",
      icon: "voltage",
      isCenter: true,
      description: "Detect unlit obstacles, broken-down vehicles, and animals up to 400m ahead in total darkness.",
    },
    {
      id: "highways",
      title: "Highways & Expressways",
      icon: "field",
      description: "High-speed road safety with extended reaction time during adverse weather transit.",
    },
    {
      id: "urban-roads",
      title: "Urban Roads",
      icon: "control",
      description: "Intelligent pedestrian and cyclist detection in complex, busy city traffic environments.",
    },
    {
      id: "weather",
      title: "Fog / Rain Conditions",
      icon: "testing",
      description: "Long-wave infrared wavelengths easily penetrate heavy fog, smoke, haze, and rainstorms.",
    },
    {
      id: "pedestrian-safety",
      title: "Pedestrian Safety",
      icon: "shield",
      description: "Instantaneous identification of warm body signatures stepping out from blind corners.",
    },
  ],

  benefits: [
    {
      id: "expert-guidance",
      icon: "shield",
      title: "Expert Guidance",
      description: "Tailored mounting, lens selection, and system integration advice for vehicle fleets.",
    },
    {
      id: "reliable-products",
      icon: "testing",
      title: "Automotive Reliability",
      description: "Vibration-tested, IP67 ruggedized thermal sensors engineered for demanding road conditions.",
    },
    {
      id: "application-support",
      icon: "control",
      title: "Application Support",
      description: "Wiring schematics, CAN/video interfacing, and fleet installation engineering support.",
    },
    {
      id: "long-term-partnership",
      icon: "power",
      title: "Long-Term Partnership",
      description: "Warranty backing, spares availability, and technical service for fleet operations.",
    },
  ],

  cta: {
    title: "Need help with automotive thermal imaging?",
    description:
      "Contact our engineering team to explore vehicle integration kits, fleet pilot trials, and commercial quotation options.",
    primaryButtonText: "Talk to an Engineer",
    primaryButtonLink: "/contact?subject=Automotive%20Thermal%20Imaging%20Inquiry",
    secondaryButtonText: "Download Brochure",
    secondaryButtonLink: "/resources",
    supportingImage: "/images/products/satir-nv618s.png",
  },
};

export default automotiveThermalImagingSystems;
