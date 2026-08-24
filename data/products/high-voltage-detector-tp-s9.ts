import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: HIGH VOLTAGE DETECTOR — MODEL TP-S9
   File: data/products/high-voltage-detector-tp-s9.ts

   Authentic engineering data conforming strictly to ProductData schema.
   ================================================================ */

const highVoltageDetectorTPS9: ProductData = {
  slug: "high-voltage-detector-tp-s9",
  category: "Electrical Safety",
  title: "High Voltage Detector — Model TP-S9",
  description:
    "Our handheld high voltage detector – commonly known as Neon Tester or HV Power Tester – is an essential safety tool engineered for high voltage installations. Designed for engineers and technicians, these high voltage detectors ensure your equipment is either live or dead before maintenance work begins, enhancing electrical safety and reducing risk during inspections.",

  overview:
    "Each HV detector is built with a capacitive sensor detector securely mounted on an insulated pole. This high voltage test equipment actively monitors for the presence of electrical charge by detecting contact with any charged high voltage object. When in proximity, the sensor provides both audible and visual indicators, making it a reliable high voltage detector for field engineers. The inbuilt self-test mode (proving unit) verifies the health of the detector before and after every operation, ensuring dependable performance every time.",

  highlights: [
    "LT – 765 kV Range",
    "High Intensity Light & Sound Indication",
    "Automatic Continuous Inbuilt Self Check",
    "Indoor & Outdoor Operation",
  ],

  modelUrl: "/models/voltage_detector_tp_s9.glb",
  renderType: "3d",
  image: "/images/products/product-safety.jpg",
  specImage: "/images/products/tp-s9-accessories.jpg",

  engineeringAtAGlance: [
    {
      id: "voltage",
      icon: "voltage",
      value: "LT – 765 kV",
      label: "VOLTAGE RANGE",
      description:
        "Range extendible up to 765 kV using additional insulated extension handles.",
      highlighted: true,
    },
    {
      id: "indication",
      icon: "signal",
      value: "Audible + Visual",
      label: "INDICATION",
      description:
        "Provides both audible and visual indication of detected electrical charge.",
    },
    {
      id: "selftest",
      icon: "selftest",
      value: "Inbuilt Self Check",
      label: "SELF TEST",
      description:
        "Automatic continuous self-check verifies detector health before and after operation.",
    },
    {
      id: "operation",
      icon: "field",
      value: "Indoor + Outdoor",
      label: "OPERATION",
      description: "Suitable for indoor and outdoor operation.",
    },
  ],

  specificationsTable: [
    {
      parameter: "Voltage Range",
      details: "LT to 765 kV",
      range: "Up to 765 kV with extension handles",
    },
    {
      parameter: "Detection Method",
      details: "Capacitive sensor detector",
      range: "High-voltage object detection",
    },
    {
      parameter: "Indication",
      details: "Audible & visual",
      range: "High intensity light & sound",
    },
    {
      parameter: "Self Check",
      details: "Automatic continuous inbuilt self-check",
      range: "Before and after operation",
    },
    {
      parameter: "Battery",
      details: "Universal “C” size",
      range: "3 nos. for long operational life",
    },
    {
      parameter: "Operation",
      details: "Indoor & Outdoor",
      range: "Standard pole up to 33 kV",
    },
    {
      parameter: "Connector",
      details: "Universal Sunrise Connector",
      range: "Standard hot stick attachment",
    },
    {
      parameter: "Testing",
      details: "Type tested",
      range: "Recognized laboratories",
    },
  ],

  applications: [
    {
      id: "hv-installations",
      title: "High Voltage Installations",
      icon: "installation",
      description:
        "Verification of overhead lines, busbars, and switchyard apparatus.",
    },
    {
      id: "industrial-safety",
      title: "Industrial Safety",
      icon: "shield",
      description:
        "Live/dead line safety verification prior to maintenance work.",
    },
    {
      id: "electrical-maintenance",
      title: "Electrical Maintenance",
      icon: "maintenance",
      description:
        "Preventative safety inspections for engineers and technicians.",
    },
    {
      id: "field-inspection",
      title: "Field Engineering",
      icon: "field",
      description:
        "Indoor substations and outdoor transmission utility inspections.",
    },
  ],

  features: [
    {
      title: "High Intensity Light & Sound Indication",
      description:
        "Dual audible and high-intensity visual signaling provides unambiguous alert upon detecting charged high voltage equipment.",
    },
    {
      title: "Sensitivity Adjustment in Several Steps",
      description:
        "Multiple sensitivity settings allow precise calibration and safe operation across various voltage environments.",
    },
    {
      title: "Suitable for Indoor & Outdoor Operation",
      description:
        "Engineered for reliable detection in both indoor substation environments and outdoor field installations.",
    },
    {
      title: "Range Extendible Up to 765 kV",
      description:
        "Standard insulated pole covers up to 33 kV, easily extendible up to 765 kV using modular insulated extension handles.",
    },
    {
      title: "Automatic Continuous Inbuilt Self Check",
      description:
        "Integrated proving unit verifies the detector's operational health before and after every inspection.",
    },
    {
      title: "Universal “C” Size Batteries (3 Nos.)",
      description:
        "Powered by three standard universal C-size cells designed for long operational life.",
    },
    {
      title: "Universal Sunrise Connector",
      description:
        "Equipped with an industry-standard universal sunrise connector for secure attachment to hot sticks and extension rods.",
    },
    {
      title: "Type Tested from Recognized Laboratories",
      description:
        "Tested and certified in recognized high-voltage laboratories for dependable safety and dielectric performance.",
    },
  ],

  benefits: [
    {
      id: "safer-verification",
      icon: "shield",
      title: "Safer Verification Before Maintenance",
      description:
        "Ensures electrical circuits and apparatus are dead before personnel begin inspection or maintenance.",
    },
    {
      id: "proving-unit",
      icon: "selftest",
      title: "Dependable Self-Checking Proving Unit",
      description:
        "Inbuilt continuous self-check confirms sensor readiness and battery integrity on site.",
    },
    {
      id: "modular-scaling",
      icon: "gear",
      title: "Flexible LT to 765 kV Scalability",
      description:
        "Modular insulated extension rods provide safe standoff distances across transmission and distribution voltages.",
    },
  ],

  cta: {
    title: "Need reliable high-voltage safety equipment?",
    description:
      "Our engineering team will help you select the ideal voltage detector and insulated extension setup for your utility or industrial installation.",
    primaryButtonText: "Talk to an Engineer",
    primaryButtonLink: "/contact",
  },
};

export default highVoltageDetectorTPS9;
