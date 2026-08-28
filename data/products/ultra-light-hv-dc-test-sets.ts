import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: ULTRA LIGHT HIGH VOLTAGE DC TEST SETS
   File: data/products/ultra-light-hv-dc-test-sets.ts
   ================================================================ */

const ultraLightHVDCTestSets: ProductData = {
  slug: "ultra-light-hv-dc-test-sets",
  category: "Electrical Testing Equipment",
  title: "Ultra Light High Voltage DC Test Sets",
  description:
    "Compact, ultra-lightweight SMPS-based high-voltage DC test sets engineered for on-site cable testing, surge arresters, electrical machinery, and substation insulation diagnostics.",

  overview:
    "The Ultra Light Compact HV DC Testing Kit utilizes advanced high-frequency Switch Mode Power Supply (SMPS) design to deliver exceptional power-to-weight performance. Available in ratings from 60 kV to 300 kV with current ratings of 2 mA, 5 mA, and 10 mA, this compact power supply performs all laboratory and field DC Hipot withstand tests with precision digital metering and integrated automatic cable discharge protection.",

  highlights: [
    "60 kV – 300 kV DC Range",
    "SMPS High-Frequency Design",
    "Ultra-Lightweight & Portable",
    "Automatic Cable Discharge",
  ],

  renderType: "image",
  image: "/images/products/ultra-light-hv-dc-test-sets.jpg",
  specImage: "/images/products/product-testing.jpg",

  engineeringAtAGlance: [
    {
      id: "voltage",
      icon: "voltage",
      value: "60 – 300 kV DC",
      label: "OUTPUT VOLTAGE",
      description: "High-precision adjustable DC output voltage for dielectric withstand testing.",
      highlighted: true,
    },
    {
      id: "current",
      icon: "current",
      value: "2 / 5 / 10 mA",
      label: "CURRENT RATINGS",
      description: "Selectable current outputs with micro-ampere leakage current resolution.",
    },
    {
      id: "technology",
      icon: "control",
      value: "SMPS High-Frequency",
      label: "ARCHITECTURE",
      description: "High-efficiency solid-state inverter reducing total chassis weight by over 60%.",
    },
    {
      id: "safety",
      icon: "shield",
      value: "Auto Cable Discharge",
      label: "SAFETY SYSTEM",
      description: "Inbuilt high-capacity internal discharge resistor for safe capacitive load bleed.",
    },
  ],

  metrics: [
    {
      id: "voltage",
      icon: "voltage",
      label: "VOLTAGE RANGE",
      value: "60 – 300 kV DC",
      subtext: "Continuously Adjustable",
    },
    {
      id: "current",
      icon: "current",
      label: "MAX CURRENT",
      value: "2 mA / 5 mA / 10 mA",
      subtext: "Multi-range models",
    },
    {
      id: "ripple",
      icon: "signal",
      label: "VOLTAGE RIPPLE",
      value: "≤ 0.5%",
      subtext: "Ultra-low ripple factor",
    },
    {
      id: "accuracy",
      icon: "testing",
      label: "METERING ACCURACY",
      value: "± 1.0% FS",
      subtext: "Digital kV & mA display",
    },
  ],

  specificationsTable: [
    {
      parameter: "Output Voltage (DC)",
      details: "Continuously adjustable 0 to rated voltage",
      range: "60 kV, 100 kV, 120 kV, 200 kV, 300 kV",
    },
    {
      parameter: "Output Current",
      details: "Short-circuit and overload protected",
      range: "2 mA / 5 mA / 10 mA options",
    },
    {
      parameter: "Power Supply Technology",
      details: "High frequency resonant SMPS inverter",
      range: "40 kHz switching frequency",
    },
    {
      parameter: "Voltage Ripple",
      details: "Low harmonic content for precision DC testing",
      range: "≤ 0.5% at rated load",
    },
    {
      parameter: "Metering & Display",
      details: "Simultaneous dual digital display for kV & μA",
      range: "3.5 digit LCD / LED meter",
    },
    {
      parameter: "Cable Discharge Protection",
      details: "Inbuilt grounding discharge circuit",
      range: "Automatic capacitive energy dissipation",
    },
    {
      parameter: "Operating Duty Cycle",
      details: "Continuous at rated output",
      range: "30 min continuous / Intermittent",
    },
    {
      parameter: "Input Voltage Supply",
      details: "Standard single phase AC utility",
      range: "230 V AC ± 10%, 50/60 Hz",
    },
  ],

  applications: [
    {
      id: "power-cables",
      title: "HV Power Cables",
      icon: "cable",
      isCenter: true,
    },
    {
      id: "surge-arresters",
      title: "Surge Arresters",
      icon: "switchgear",
    },
    {
      id: "generators",
      title: "Generators & Motors",
      icon: "generator",
    },
    {
      id: "switchgears",
      title: "GIS & Switchgear",
      icon: "substation",
    },
    {
      id: "capacitors",
      title: "Power Capacitors",
      icon: "transformer",
    },
  ],

  features: [
    {
      title: "High-Frequency SMPS Architecture",
      description:
        "Advanced high-frequency switching technology drastically reduces weight and footprint compared to traditional line-frequency iron-core transformers.",
    },
    {
      title: "Precision Micro-Ampere Leakage Current Metering",
      description:
        "Ultra-sensitive insulation resistance and leakage current monitoring enables early detection of localized insulation degradation and moisture ingress.",
    },
    {
      title: "Integrated Automatic Discharge Protection",
      description:
        "Safely dissipates energy stored in long power cables and capacitive test objects automatically upon test shutdown or emergency stop.",
    },
    {
      title: "Rugged Two-Piece Transportable Layout",
      description:
        "Divided into a lightweight operator control unit and a separate shielded high-voltage multiplier cylinder connected via a rugged control cable.",
    },
    {
      title: "Over-Voltage & Over-Current Electronic Trip",
      description:
        "High-speed electronic protection circuit trips the high voltage output within 10 milliseconds in the event of dielectric breakdown.",
    },
  ],

  benefits: [
    {
      id: "mobility",
      icon: "briefcase",
      title: "Single-Operator Portability",
      description:
        "Compact design allows easy transportation to remote substations, cable trenches, and overhead utility lines.",
    },
    {
      id: "safety",
      icon: "shield",
      title: "Comprehensive Personnel Safety",
      description:
        "Zero-start interlock, external grounding interlock, and automatic residual discharge ensure complete operational safety.",
    },
    {
      id: "accuracy",
      icon: "gear",
      title: "Laboratory-Grade Field Accuracy",
      description:
        "Provides stable DC output with less than 0.5% ripple, compliant with IEC 60060-1 high-voltage test techniques.",
    },
  ],

  cta: {
    title: "Need an ultra-light DC high-voltage test set?",
    description:
      "Contact our application engineers to determine the ideal voltage and current rating for your cable and electrical machinery testing requirements.",
    primaryButtonText: "Request a Quotation",
    primaryButtonLink: "/contact?subject=Ultra%20Light%20HV%20DC%20Test%20Sets",
  },
};

export default ultraLightHVDCTestSets;
