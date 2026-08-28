import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: PRIMARY & SECONDARY CURRENT INJECTION TESTING SETS
   File: data/products/current-injection-testing-sets.ts
   ================================================================ */

const currentInjectionTestingSets: ProductData = {
  slug: "current-injection-testing-sets",
  category: "Electrical Testing Equipment",
  title: "Primary & Secondary Current Injection Testing Sets",
  description:
    "Heavy-duty primary current injection systems up to 10,000 A and multi-functional secondary injection test sets engineered for commissioning circuit breakers, protective relays, CTs, busbars, and switchgears.",

  overview:
    "HVTI Primary Current Injection Test Sets are engineered to test and commission Circuit Breakers, Busbars, Current Transformers (CTs), Relays, Motor Control Centers (MCCs), and Power Control Centers (PCCs). Available in ratings from 500 A up to 10,000 A in short time and continuous duty cycles. Systems feature automated touchscreen controls with CT ratio, phase angle, and timing analysis. Lightweight portable sets (1000 A and 2000 A) are also available for rapid on-site field testing alongside comprehensive secondary injection test sets.",

  highlights: [
    "500 A to 10,000 A Primary Injection",
    "Secondary Injection for All Relays",
    "Microprocessor Touchscreen & Manual Controls",
    "Integrated Millisecond Digital Timer & Phase Angle Meter",
  ],

  renderType: "image",
  image: "/images/products/current-injection-testing-sets.jpg",
  specImage: "/images/products/product-testing.jpg",

  engineeringAtAGlance: [
    {
      id: "current",
      icon: "current",
      value: "500 A – 10,000 A",
      label: "PRIMARY CURRENT",
      description: "High current injection outputs for primary circuit breaker and CT primary injection testing.",
      highlighted: true,
    },
    {
      id: "control",
      icon: "control",
      value: "Automated & Manual",
      label: "CONTROL DESK",
      description: "Microprocessor PLC touchscreen controls with programmable current steps and dwell times.",
    },
    {
      id: "timing",
      icon: "testing",
      value: "0.1 ms Resolution",
      label: "DIGITAL TIMER",
      description: "Precision trip timing measurement capturing breaker contact separation instantly.",
    },
    {
      id: "secondary",
      icon: "signal",
      value: "Static & Induction Relays",
      label: "SECONDARY SETS",
      description: "Calibrates thermal, directional, differential, and distance protective relays.",
    },
  ],

  metrics: [
    {
      id: "current",
      icon: "current",
      label: "PRIMARY OUTPUT",
      value: "Up to 10,000 A",
      subtext: "Short-time & continuous",
    },
    {
      id: "portable",
      icon: "briefcase",
      label: "PORTABLE SETS",
      value: "1000 A & 2000 A",
      subtext: "3 min full load duty",
    },
    {
      id: "secondary",
      icon: "power",
      label: "SECONDARY OUTPUT",
      value: "0 – 50 A / 0 – 250 V",
      subtext: "Adjustable AC/DC",
    },
    {
      id: "timer",
      icon: "testing",
      label: "TIMER ACCURACY",
      value: "± 0.05% ± 1 digit",
      subtext: "4/5 digit LED readout",
    },
  ],

  specificationsTable: [
    {
      parameter: "Primary Current Ratings",
      details: "Continuous and short-duration injection models",
      range: "500 A, 1000 A, 2000 A, 3000 A, 5000 A, 10000 A",
    },
    {
      parameter: "Portable Field Models",
      details: "Lightweight split-chassis design for site maintenance",
      range: "1000 A and 2000 A with 3-minute full load rating",
    },
    {
      parameter: "Secondary Injection Current",
      details: "Variable AC and DC current outputs for relay coils",
      range: "0 – 1 A, 0 – 5 A, 0 – 10 A, 0 – 25 A, 0 – 50 A, 0 – 100 A",
    },
    {
      parameter: "Auxiliary AC/DC Voltage Source",
      details: "For auxiliary supply and voltage relay coil excitation",
      range: "0 – 250 V AC / DC continuously variable",
    },
    {
      parameter: "Integrated Digital Timer",
      details: "Auto-sensing potential and potential-free trip contacts",
      range: "0.0001 s to 9999 s (Auto-ranging)",
    },
    {
      parameter: "CT Ratio & Phase Verification",
      details: "Automated measurement of CT primary/secondary current ratio",
      range: "Direct ratio display with % error calculation",
    },
    {
      parameter: "Duty Cycle",
      details: "Heavy-duty forced air cooling configuration",
      range: "Continuous 50% load / Short time full load",
    },
    {
      parameter: "Input Power Supply",
      details: "Single Phase / Two Phase AC utility connection",
      range: "230 V / 415 V AC ± 10%, 50 Hz",
    },
  ],

  applications: [
    {
      id: "circuit-breakers",
      title: "Circuit Breakers (VCB/SF6/ACB)",
      icon: "switchgear",
      isCenter: true,
    },
    {
      id: "current-transformers",
      title: "Current Transformers (CTs)",
      icon: "transformer",
    },
    {
      id: "protection-relays",
      title: "Protective Relays",
      icon: "testing",
    },
    {
      id: "busbars",
      title: "Substation Busbars & Joints",
      icon: "substation",
    },
    {
      id: "mcc-pcc",
      title: "MCC & PCC Panels",
      icon: "control",
    },
  ],

  features: [
    {
      title: "Ultra-High Current Primary Injection up to 10,000 Amperes",
      description:
        "Engineered with heavy-duty low-impedance toroidal transformers capable of driving high current through long busbars and breaker contacts.",
    },
    {
      title: "Automated Microprocessor Touchscreen Control",
      description:
        "Preset test current, automated ramp-up, dwell time countdown, automatic trip detection, and automatic report logging eliminate manual error.",
    },
    {
      title: "Automated CT Ratio & Polarity Diagnostics",
      description:
        "Simultaneously measures primary injected current and secondary CT output current, displaying actual transformation ratio and percentage error directly.",
    },
    {
      title: "Lightweight Portable Units for Field Linemen",
      description:
        "Compact 1000 A and 2000 A suitcase-style injection sets designed for field commissioning where heavy equipment access is limited.",
    },
    {
      title: "Comprehensive Secondary Relay Testing Suite",
      description:
        "Capable of testing static, attracted armature, induction disc, thermal overload, and directional overcurrent relays with millisecond trip timing.",
    },
  ],

  benefits: [
    {
      id: "reliability",
      icon: "shield",
      title: "Guaranteed Protection System Reliability",
      description:
        "Verifies that circuit breakers, CTs, and protective relays operate precisely to factory time-current tripping curves under real load currents.",
    },
    {
      id: "speed",
      icon: "gear",
      title: "Rapid Substation Commissioning",
      description:
        "Automated testing sequences significantly reduce commissioning hours for greenfield switchyards and routine shutdowns.",
    },
    {
      id: "safety",
      icon: "briefcase",
      title: "Thermal & Overcurrent Protection",
      description:
        "Built-in thermal sensors, instantaneous electronic overcurrent trip, and interlocked zero-start control safeguard operators and equipment.",
    },
  ],

  cta: {
    title: "Looking for a primary or secondary current injection system?",
    description:
      "Our engineering specialists will assist you in selecting the optimal current rating and duty cycle for your commissioning projects.",
    primaryButtonText: "Request a Quote",
    primaryButtonLink: "/contact?subject=Current%20Injection%20Testing%20Sets",
  },
};

export default currentInjectionTestingSets;
