/* ================================================================

   HIGH VOLTAGE AC TESTING KITS

   File: data/products/high-voltage-ac-testing-kits.ts

   Product data for the High Voltage AC Testing Kits product page.

   ================================================================ */

const highVoltageACTestingKits = {
  slug: "high-voltage-ac-testing-kits",

  category: "Electrical Testing",

  title: "High Voltage AC Testing Kits",

  description:
    "High-voltage AC testing kits for testing and commissioning motors, generators, switchgears, cables and transformers with precision, safety and reliability.",

  /* ==============================================================
     PRODUCT OVERVIEW
     ============================================================== */

  overview:
    "HV AC test kits are used for testing and commissioning of HV electrical equipment including motors, generators, switchgears, cables and transformers. The kits are available from 25 kV to 300 kV AC in various mA and kVA ratings to meet diverse testing requirements.",

  /* ==============================================================
     HERO HIGHLIGHTS (2x2 checkmark grid in Hero)
     ============================================================== */

  highlights: [
    "25–300 kV AC",
    "Automated & Manual Control",
    "Laboratory & Field Use",
    "PD-Free Designs",
  ],

  /* ==============================================================
     PRODUCT AT A GLANCE (Overview Matrix)
     ============================================================== */

  atAGlance: [
    {
      code: "VOLT",
      label: "VOLTAGE RANGE",
      value: "25 kV – 300 kV AC",
    },
    {
      code: "CONT",
      label: "CONTROL",
      value: "Automated & Manual",
    },
    {
      code: "APP",
      label: "APPLICATIONS",
      value: "Motors, Generators, Switchgears, Cables & Transformers",
    },
    {
      code: "DEPT",
      label: "TESTING",
      value: "Laboratory & Field Use",
    },
    {
      code: "DIM",
      label: "DESIGN",
      value: "Compact Test Transformers",
    },
    {
      code: "PD",
      label: "PD DESIGN",
      value: "PD-Free Designs Available",
    },
  ],

  /* ==============================================================
     ENGINEERING AT A GLANCE (Visual metrics banner)
     ============================================================== */

  engineeringAtAGlance: [
    {
      id: "voltage",
      icon: "lightning",
      value: "25 – 300 kV AC",
      description: "Wide voltage range for diverse testing needs",
    },
    {
      id: "control",
      icon: "sliders",
      value: "Automated & Manual Control",
      description: "Flexibility to choose your control setup",
    },
    {
      id: "pd",
      icon: "shield",
      value: "PD-Free Designs",
      description: "Partial discharge free designs for accurate testing",
    },
    {
      id: "testing",
      icon: "briefcase",
      value: "Laboratory & Field Ready",
      description: "Built for both controlled labs and on-site testing",
    },
    {
      id: "power",
      icon: "transformer",
      value: "Multiple mA / kVA Ratings",
      description: "Multiple current and power ratings available",
    },
  ],

  /* ==============================================================
     TECHNICAL SPECIFICATIONS (3-Column Table)
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

  /* Specifications fallback for backwards compatibility */
  specifications: [
    {
      parameter: "Resin Cast Dry Type Test Transformers",
      value: "25 kV – 150 kV",
    },
    {
      parameter: "Oil Filled Test Transformers",
      value: "50, 70, 100, 150, 200 & 300 kV",
    },
    {
      parameter: "Control",
      value: "Automated and Manual Control Panels / Control Desks",
    },
    {
      parameter: "Automated Control",
      value:
        "Microprocessor-based controls with touchscreen interface and programmable parameters",
    },
    {
      parameter: "Metering",
      value: "Option of tertiary metering winding",
    },
    {
      parameter: "Design",
      value: "Compact designs suitable for laboratory and field testing",
    },
    {
      parameter: "PD Design",
      value: "PD-free designs available",
    },
  ],

  specImage: "/images/products/product-testing.jpg",

  /* ==============================================================
     APPLICATIONS
     ============================================================== */

  applications: [
    "Motors",
    "Generators",
    "Switchgears",
    "Cables",
    "Transformers",
  ],

  /* ==============================================================
     FEATURES (Numbered Editorial List)
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
     PRODUCT DOCUMENTS
     ============================================================== */

  brochure: "#",
};

export default highVoltageACTestingKits;