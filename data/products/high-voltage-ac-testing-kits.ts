import { ProductData } from "@/types/product";

/* ================================================================
   HIGH VOLTAGE AC TESTING KITS — PRODUCT DATA
   File: data/products/high-voltage-ac-testing-kits.ts

   Reference product data for the High Voltage AC Testing Kits.
   Contains only authentic, verified HVTI product specifications.
   ================================================================ */

const highVoltageACTestingKits: ProductData = {
  slug: "high-voltage-ac-testing-kits",

  category: "High Voltage AC Testing Kits",

  title: "High Voltage AC Testing Kits",

  description:
    "High-voltage AC testing kits for testing and commissioning motors, generators, switchgears, cables and transformers with precision, safety and reliability.",

  /* ==============================================================
     PRODUCT OVERVIEW
     ============================================================== */
  overview:
    "HV AC test kits are used for testing and commissioning of HV electrical equipment including motors, generators, switchgears, cables and transformers. The kits are available from 25 kV to 300 kV AC in various mA and kVA ratings to meet diverse testing requirements.",

  /* ==============================================================
     HERO HIGHLIGHTS
     ============================================================== */
  highlights: [
    "25–300 kV AC",
    "Automated & Manual Control",
    "Laboratory & Field Use",
    "PD-Free Designs",
  ],

  modelUrl: "/models/hv-ac-testing-kit.glb",
  renderType: "3d",

  /* ==============================================================
     ENGINEERING AT A GLANCE (Wave Metrics)
     ============================================================== */
  engineeringAtAGlance: [
    {
      id: "control",
      icon: "control",
      value: "Automated & Manual Control",
      description: "Flexibility to choose your control setup",
    },
    {
      id: "pd",
      icon: "pd",
      value: "PD-Free Designs",
      description: "Partial discharge free designs for accurate testing",
    },
    {
      id: "voltage",
      icon: "voltage",
      value: "25 – 300 kV AC",
      description: "Wide voltage range for diverse testing needs",
      highlighted: true,
    },
    {
      id: "testing",
      icon: "testing",
      value: "Laboratory & Field Ready",
      description: "Built for both controlled labs and on-site testing",
    },
    {
      id: "power",
      icon: "power",
      value: "Multiple mA / kVA Ratings",
      description: "Multiple current and power ratings available",
    },
  ],

  /* ==============================================================
     TOP TECHNICAL METRICS
     ============================================================== */
  metrics: [
    {
      id: "voltage",
      icon: "voltage",
      label: "OUTPUT VOLTAGE (AC)",
      value: "25 – 300 kV",
      subtext: "Adjustable",
    },
    {
      id: "frequency",
      icon: "frequency",
      label: "FREQUENCY",
      value: "50 / 60 Hz",
      subtext: "Power Frequency",
    },
    {
      id: "current",
      icon: "current",
      label: "OUTPUT CURRENT (AC)",
      value: "Upto 1000 mA",
      subtext: "Adjustable",
    },
    {
      id: "power",
      icon: "power",
      label: "OUTPUT POWER (AC)",
      value: "Upto 300 kVA",
      subtext: "Adjustable",
    },
  ],

  /* ==============================================================
     TECHNICAL SPECIFICATIONS TABLE (3-Column)
     ============================================================== */
  specificationsTable: [
    {
      parameter: "Output Voltage (AC)",
      details: "Adjustable",
      range: "25 kV – 300 kV",
    },
    {
      parameter: "Output Frequency",
      details: "Power Frequency",
      range: "50 / 60 Hz",
    },
    {
      parameter: "Output Current (AC)",
      details: "Adjustable",
      range: "Upto 1000 mA",
    },
    {
      parameter: "Output Power (AC)",
      details: "Adjustable",
      range: "Upto 300 kVA",
    },
    {
      parameter: "Control Mode",
      details: "Selectable",
      range: "Manual / Automated",
    },
    {
      parameter: "Application",
      details: "Motors, Generators, Switchgears, Cables, Transformers",
      range: "Laboratory / Field",
    },
    {
      parameter: "Design",
      details: "PD-Free, Compact, Portable",
      range: "–",
    },
    {
      parameter: "Safety",
      details: "Interlocks, Overvoltage Protection, Overcurrent Protection",
      range: "–",
    },
  ],

  specImage: "/images/products/product-testing.jpg",

  /* ==============================================================
     APPLICATIONS
     ============================================================== */
  applications: [
    {
      id: "motors",
      title: "Motors",
      icon: "motor",
      isCenter: true,
    },
    {
      id: "generators",
      title: "Generators",
      icon: "generator",
    },
    {
      id: "switchgears",
      title: "Switchgears",
      icon: "switchgear",
    },
    {
      id: "cables",
      title: "Cables",
      icon: "cable",
    },
    {
      id: "transformers",
      title: "Transformers",
      icon: "transformer",
    },
  ],

  /* ==============================================================
     FEATURES (Editorial Numbered List)
     ============================================================== */
  features: [
    {
      title: "Automated & Manual Control",
      description:
        "Available with automated and manual control panels or control desks.",
    },
    {
      title: "Microprocessor-Based Controls",
      description:
        "Automated controls use microprocessor-based systems with touchscreen interfaces and programmable parameters.",
    },
    {
      title: "Compact Test Transformers",
      description:
        "Compact test transformer designs are available for laboratory and field testing applications.",
    },
    {
      title: "Multiple Voltage Ranges",
      description:
        "Available across a wide range from 25 kV to 300 kV AC in various mA and kVA ratings.",
    },
    {
      title: "Tertiary Metering Winding",
      description:
        "Test transformer configurations can include an optional tertiary metering winding.",
    },
    {
      title: "PD-Free Designs",
      description:
        "Partial discharge-free designs are available for applicable testing requirements.",
    },
  ],

  /* ==============================================================
     ENGINEERED VALUE / BENEFITS
     ============================================================== */
  benefits: [
    {
      id: "reliability",
      icon: "shield",
      title: "Reliable High-Voltage Testing",
      description:
        "Designed to deliver accurate, repeatable and safe testing for critical HV equipment.",
    },
    {
      id: "flexibility",
      icon: "gear",
      title: "Flexible Configurations",
      description:
        "Choose from a wide range of voltage, current and power ratings to suit your application.",
    },
    {
      id: "durability",
      icon: "briefcase",
      title: "Built for Real-World Use",
      description:
        "Compact, robust and portable solutions for laboratories and field environments.",
    },
  ],

  /* ==============================================================
     CONVERSION CTA & DOCUMENTS
     ============================================================== */
  brochure: "#",
  cta: {
    title: "Need the right solution for your application?",
    description:
      "Our engineering team will help you select the ideal HV AC testing kit.",
    primaryButtonText: "Talk to an Engineer",
    primaryButtonLink: "/contact",
    secondaryButtonText: "Download Brochure",
    secondaryButtonLink: "#",
  },
};

export default highVoltageACTestingKits;