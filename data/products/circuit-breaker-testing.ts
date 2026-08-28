import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: CIRCUIT BREAKER TESTING SETS
   File: data/products/circuit-breaker-testing.ts
   ================================================================ */

const circuitBreakerTesting: ProductData = {
  slug: "circuit-breaker-testing",
  category: "Electrical Testing Equipment",
  title: "Circuit Breaker Dynamic Timing & Micro-Ohmmeter Testing Sets",
  description:
    "Microprocessor dynamic timing analyzers, DRM-1A / MM100 / MM900 micro-ohmmeters (1 μΩ to 200 Ω), and SA100 switchgear analyzers for evaluating contact timing, bounce, dynamic contact resistance (DCRM), and motion travel of VCBs, SF6, and GIS breakers.",

  overview:
    "HVTI provides industry-leading circuit breaker testing solutions engineered for precision commissioning and maintenance of high, medium, and low voltage switchgear. The lineup includes the lightweight DRM-1A micro-ohmmeter measuring contact resistance down to 1 μΩ with injection currents up to 1200 A, and the Weis SA100 / SA100Rs dynamic switchgear analyzers providing simultaneous 12-channel contact timing, dynamic contact resistance measurement (DCRM), dual-coil current capture, and rotary/linear travel transducer velocity analysis.",

  highlights: [
    "DRM-1A / MM100 / MM900 Micro-Ohmmeter (1 μΩ – 200 Ω)",
    "Dynamic Contact Resistance Measurement (DCRM)",
    "SA100 / SA100Rs 12-Channel Dynamic Timing Analyzers",
    "Linear & Rotary Motion Velocity Analysis",
  ],

  renderType: "image",
  image: "/images/products/circuit-breaker-testing.jpg",
  specImage: "/images/products/product-testing.jpg",

  engineeringAtAGlance: [
    {
      id: "timing",
      icon: "testing",
      value: "12 Contact Channels",
      label: "DYNAMIC TIMING",
      description: "Simultaneous timing capture across main and resistive contacts with 0.1 ms resolution.",
      highlighted: true,
    },
    {
      id: "dcrm",
      icon: "signal",
      value: "Dynamic DCRM",
      label: "CONTACT RESISTANCE",
      description: "Dynamic resistance profiling during breaker opening/closing reveals arcing contact wear.",
    },
    {
      id: "micro-ohm",
      icon: "current",
      value: "1 μΩ – 200 Ω Range",
      label: "STATIC RESISTANCE",
      description: "High current injection (up to 1200 A) for joint and contact micro-ohm resistance.",
    },
    {
      id: "motion",
      icon: "control",
      value: "Velocity & Stroke",
      label: "TRAVEL TRANSDUCER",
      description: "Linear and rotary motion transducers measuring velocity, damping, and overtravel.",
    },
  ],

  metrics: [
    {
      id: "timing-accuracy",
      icon: "testing",
      label: "TIMING ACCURACY",
      value: "± 0.01% ± 0.1 ms",
      subtext: "Microsecond timing capture",
    },
    {
      id: "resistance-range",
      icon: "power",
      label: "RESISTANCE RANGE",
      value: "1 μΩ to 200 Ω",
      subtext: "High current 4-wire Kelvin",
    },
    {
      id: "current-output",
      icon: "current",
      label: "INJECTION CURRENT",
      value: "100 A to 1200 A DC",
      subtext: "True constant current",
    },
    {
      id: "channels",
      icon: "signal",
      label: "ANALOG & DIGITAL",
      value: "6 Analog / 10 Digital",
      subtext: "SA100 Switchgear Analyzer",
    },
  ],

  specificationsTable: [
    {
      parameter: "Dynamic Contact Timing Channels",
      details: "Simultaneous capture across all 3 poles with both ends grounded",
      range: "Up to 12 main contacts & 12 resistive auxiliary contacts",
    },
    {
      parameter: "Timing Resolution & Range",
      details: "Sampling rate up to 50 kHz for contact bounce detection",
      range: "0 to 99.99 seconds (0.1 ms resolution)",
    },
    {
      parameter: "Micro-Ohmmeter Models",
      details: "DRM-1A, MM100, MM900 self-powered handheld test sets",
      range: "Range: 1 μΩ to 200 Ω with injection currents of 100A, 200A, 600A, 1200A",
    },
    {
      parameter: "Dynamic Contact Resistance (DCRM)",
      details: "Evaluates arcing contact length and erosion without dismantling",
      range: "Dynamic timing of up to 2 breaks per phase with 6 x 20A constant current outputs",
    },
    {
      parameter: "Coil Current Measurement",
      details: "Dual-range analog inputs for Trip and Close coils",
      range: "0 – 5 A / 0 – 30 A capture of coil current waveform profile",
    },
    {
      parameter: "Travel & Velocity Transducers",
      details: "Linear and rotary optical / resistive motion sensors",
      range: "Calculates stroke length, contact velocity, damping time, and rebound",
    },
    {
      parameter: "Breaker Test & Analysis Software (BTA)",
      details: "32/64-bit Windows diagnostic suite with fingerprint comparison",
      range: "Automatic computation of open/close time, non-simultaneity, velocity",
    },
    {
      parameter: "Applicable Breaker Types",
      details: "Field and factory testing compatibility",
      range: "Vacuum (VCB), SF6, Air Blast, Minimum Oil (MOCB), and GIS breakers",
    },
  ],

  applications: [
    {
      id: "sf6-breakers",
      title: "EHV SF6 Circuit Breakers",
      icon: "switchgear",
      isCenter: true,
    },
    {
      id: "vcb",
      title: "Vacuum Circuit Breakers (VCB)",
      icon: "substation",
    },
    {
      id: "gis",
      title: "Gas Insulated Substations (GIS)",
      icon: "switchgear",
    },
    {
      id: "busbar-joints",
      title: "Busbar & Switch Joints",
      icon: "cable",
    },
    {
      id: "disconnectors",
      title: "Isolators & Disconnector Switches",
      icon: "field",
    },
  ],

  features: [
    {
      title: "Multi-Channel Dynamic Contact Timing & Non-Simultaneity Analysis",
      description:
        "Simultaneously measures opening, closing, close-open (CO), open-close-open (OCO) cycle times, pole-to-pole discrepancy, and contact bounce across all interrupters.",
    },
    {
      title: "Dynamic Contact Resistance Measurement (DCRM)",
      description:
        "Plots dynamic micro-ohm resistance variations during contact motion, revealing arcing contact length, contact wiping, and erosion without opening the interrupter chamber.",
    },
    {
      title: "Portable High-Precision DRM-1A Micro-Ohmmeter",
      description:
        "Lightweight, shock-resistant 4-wire Kelvin micro-ohmmeter injecting heavy current up to 1200 A to measure very low contact and busbar joint resistances from 1 μΩ to 200 Ω.",
    },
    {
      title: "Dual Coil Current Signature Profiling",
      description:
        "Captures trip and close coil current waveforms, detecting mechanical binding, latch friction, and coil degradation prior to complete mechanism failure.",
    },
    {
      title: "Comprehensive BTA Diagnostic Software with Fingerprint Comparison",
      description:
        "Compares captured waveforms against historical baseline signatures (grey-zone checking) to immediately pinpoint mechanical anomalies and aging.",
    },
  ],

  benefits: [
    {
      id: "reliability",
      icon: "shield",
      title: "Ensures High-Speed Fault Clearing",
      description:
        "Guarantees that circuit breakers trip within designated millisecond tolerances, preventing catastrophic transformer and busbar damage during network faults.",
    },
    {
      id: "cost-savings",
      icon: "gear",
      title: "Non-Intrusive Condition-Based Maintenance",
      description:
        "DCRM and travel curve analytics identify exactly which breaker interrupter requires overhaul, avoiding unnecessary, expensive breaker teardowns.",
    },
    {
      id: "portability",
      icon: "briefcase",
      title: "Substation Rugged & Lightweight",
      description:
        "Engineered with high noise immunity for high-voltage substation switchyards with heavy electrostatic and electromagnetic interference.",
    },
  ],

  cta: {
    title: "Need advanced circuit breaker analyzers or micro-ohmmeters?",
    description:
      "Consult with our switchgear diagnostics engineers to configure the optimal timing and contact resistance test package for your utility.",
    primaryButtonText: "Request Technical Specs",
    primaryButtonLink: "/contact?subject=Circuit%20Breaker%20Testing%20Sets",
  },
};

export default circuitBreakerTesting;
