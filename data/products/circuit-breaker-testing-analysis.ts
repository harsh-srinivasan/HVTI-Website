import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: CIRCUIT BREAKER TESTING & ANALYSIS
   File: data/products/circuit-breaker-testing-analysis.ts
   ================================================================ */

const circuitBreakerTestingAnalysis: ProductData = {
  slug: "circuit-breaker-testing-analysis",
  category: "Electrical Testing Equipment",
  title: "Circuit Breaker Testing & Analysis",
  tagline: "Reliable breakers for a more stable tomorrow.",
  description:
    "Advanced testing solutions for comprehensive circuit breaker evaluation — from contact resistance to timing, travel and dynamic analysis.",

  overview:
    "HVTI provides industry-standard circuit breaker diagnostic solutions engineered around the complete testing workflow. From precision micro-ohm contact resistance measurement (DRM-1A, LRM, MM series) to comprehensive 12-channel dynamic contact timing, dual-coil signature capture, and rotary/linear travel transducer velocity profiling (Weis SA50S / SA100 series), our instruments enable non-intrusive, condition-based switchgear maintenance across VCBs, SF6, and GIS installations.",

  highlights: [
    "Complete testing workflow (Static + Dynamic)",
    "Accurate and repeatable results",
    "Rugged, field-proven instruments",
    "Trusted by utilities and industry worldwide",
  ],

  renderType: "image",
  image: "/images/products/circuit-breaker-testing.png",
  specImage: "/images/products/product-testing.jpg",

  engineeringAtAGlance: [
    {
      id: "contact-resistance",
      icon: "current",
      value: "1 μΩ – 10 mΩ",
      label: "CONTACT RESISTANCE",
      description: "High-resolution 4-wire Kelvin micro-ohmmeter with heavy current injection up to 1200 A.",
      highlighted: true,
    },
    {
      id: "timing-travel",
      icon: "testing",
      value: "0.1 ms Accuracy",
      label: "TIMING & TRAVEL",
      description: "Precise multi-channel main and resistive contact timing with microsecond resolution.",
    },
    {
      id: "dynamic-analysis",
      icon: "signal",
      value: "Velocity & Acceleration",
      label: "DYNAMIC DCRM",
      description: "Evaluates arcing contact length and mechanical damping without opening the interrupter.",
    },
    {
      id: "field-ready",
      icon: "briefcase",
      value: "Rugged & Portable",
      label: "DEPLOYMENT",
      description: "Built for harsh high-voltage substation switchyards with high EMI immunity.",
    },
  ],

  rangeEyebrow: "OUR SOLUTIONS",
  rangeHeading: "Choose the right testing solution.",
  productVariants: [
    {
      id: "sa-series",
      name: "SA Series Switchgear Analyzers",
      subtitle: "Dynamic Timing & Travel Analyzers",
      badge: "SWITCHGEAR ANALYZER",
      image: "/images/products/circuit-breaker-testing.png",
      description:
        "Complete circuit breaker analysis including timing, travel, velocity, coil current and dynamic behaviour.",
      bulletPoints: [
        "Accurate timing & travel measurement (0.1 ms)",
        "Dynamic analysis & waveform capture",
        "Wide range of breaker types (VCB, SF6, GIS)",
        "User-friendly software and automated reporting.",
      ],
      ctaText: "View Details",
      ctaLink: "/products/circuit-breaker-testing",
    },
    {
      id: "drm-series",
      name: "DRM Series Micro-ohmmeters",
      subtitle: "High-Current Static Contact Resistance",
      badge: "MICRO-OHMMETER",
      image: "/images/products/circuit-breaker-testing-hd.png",
      description:
        "High-precision contact resistance measurement for circuit breakers and other high-current contacts.",
      bulletPoints: [
        "1 μΩ resolution with true constant current",
        "High test current capability (100 A to 1200 A)",
        "Fast and reliable measurement across joints and contacts",
        "Rugged, battery and mains powered field design.",
      ],
      ctaText: "View Details",
      ctaLink: "/products/circuit-breaker-testing",
    },
    {
      id: "lv-trip-coil-systems",
      name: "LV/Trip Coil Test Systems",
      subtitle: "Coil Current & Auxiliary Voltage Testing",
      badge: "COIL TEST SYSTEMS",
      image: "/images/products/circuit-breaker-testing.jpg",
      description:
        "Test closing and tripping coils, auxiliary circuits and control circuitry with reliable and precise instruments.",
      bulletPoints: [
        "Coil current measurement and signature profiling",
        "Operating voltage pick-up / drop-out verification",
        "Suitable for various substation breaker mechanisms",
        "Compact and portable Pelican casing.",
      ],
      ctaText: "View Details",
      ctaLink: "/products/circuit-breaker-testing",
    },
  ],

  keyTechnicalRanges: {
    title: "Key Specifications",
    description:
      "Explore the key specifications for our circuit breaker testing instruments. View detailed specifications on each product page.",
    headers: ["PARAMETER", "SA SERIES (SWITCHGEAR ANALYZER)", "DRM SERIES (MICRO-OHMMETER)", "LV/TRIP COIL TEST SYSTEMS"],
    rows: [
      {
        col1: "Measurement Range",
        col2: "0.1 ms – 9999 ms",
        col3: "1 μΩ – 10 mΩ (up to 200 Ω)",
        col4: "Up to 300 V / 20 A (model dependent)",
      },
      {
        col1: "Accuracy",
        col2: "± 0.1% rdg ± 0.1 ms",
        col3: "± 0.25% rdg",
        col4: "± 1% rdg",
      },
      {
        col1: "Measured Parameters",
        col2: "Timing, travel, velocity, acceleration, coil current",
        col3: "Contact resistance, joint resistance",
        col4: "Coil current, operating voltage threshold",
      },
      {
        col1: "Applications",
        col2: "Circuit breakers, disconnectors, reclosers",
        col3: "Circuit breaker contacts, busbar joints",
        col4: "Closing/tripping coils, auxiliary contacts",
      },
      {
        col1: "Data Interface",
        col2: "USB, software reporting (BTA Suite)",
        col3: "Digital display, onboard data logging",
        col4: "Digital display (model dependent)",
      },
    ],
  },

  fullTechnicalSpecs: {
    sections: [
      {
        title: "SA Series Switchgear Timing & Travel Specifications",
        specs: [
          { parameter: "Timing Channels", value: "Up to 12 main contacts & 12 resistive auxiliary contacts simultaneously" },
          { parameter: "Sampling Resolution", value: "0.1 ms (Sampling rate up to 50 kHz for microsecond bounce capture)" },
          { parameter: "Motion Channels", value: "2 digital / analog channels for linear and rotary travel transducers" },
          { parameter: "Calculated Motion Values", value: "Total stroke, contact wiping length, speed at contact touch, damping overtravel" },
          { parameter: "Coil Current Inputs", value: "Dual range 0 – 5 A / 0 – 30 A with real-time waveform capture" },
          { parameter: "Dynamic Contact Resistance (DCRM)", value: "Dynamic micro-ohm curve recording with 6 x 20A constant current source" },
        ],
      },
      {
        title: "DRM & Micro-Ohmmeter Series Specifications",
        specs: [
          { parameter: "Available Models", value: "DRM-1A, DRM-10A, LRM-10, MM100, MM200, MM600, MM900" },
          { parameter: "Resistance Range", value: "1 μΩ to 200 Ω (Resolution: 0.1 μΩ on lowest range)" },
          { parameter: "Test Current Outputs", value: "10 A, 50 A, 100 A, 200 A, 600 A, 1200 A DC (True constant current)" },
          { parameter: "Measurement Method", value: "4-wire Kelvin bridge eliminates test lead resistance errors" },
          { parameter: "Power Supply", value: "Integrated rechargeable Li-Ion battery pack (up to 1000 tests per charge) + Mains AC" },
        ],
      },
    ],
  },

  workflow: {
    eyebrow: "CIRCUIT BREAKER DIAGNOSTIC & TIMING WORKFLOW",
    heading: "4-phase dynamic timing, motion travel & contact resistance profiling.",
    steps: [
      {
        step: "01",
        title: "Connect Timing & Micro-Ohm Channels",
        description: "Attach DRM-1A 4-wire Kelvin probes across closed main contacts and connect 12 timing channels to main and resistor contacts across all 3 phases.",
        icon: "control",
        image: "/images/products/circuit-breaker-testing-hd.png",
        tag: "STATIC RESISTANCE & TIMING SETUP",
        technicalDetails: [
          "4-Wire Kelvin Micro-Ohm Probes Connected",
          "12-Channel Main & Resistor Timing Leads",
          "Optical Ground Isolation Active",
          "Station Earth Return Bond Verified",
        ],
      },
      {
        step: "02",
        title: "Mount Travel Sensors & Coil Controls",
        description: "Affix linear or rotary travel transducers to the breaker operating linkage and wire the close/trip coil initiation circuits to the analyzer console.",
        icon: "gear",
        image: "/images/products/circuit-breaker-testing.png",
        tag: "TRANSDUCER & COIL INTERFACE",
        technicalDetails: [
          "Linear / Rotary Travel Sensor Mechanical Coupling",
          "Close & Trip Coil Control Circuit Wiring",
          "DC Station Battery Voltage Sensing",
          "Motor Charging Current Sense Connected",
        ],
      },
      {
        step: "03",
        title: "Execute Automated Operating Sequence",
        description: "Trigger standardized Open (O), Close (C), Close-Open (C-O), or Open-Close-Open (O-C-O) test pulses from the digital timing analyzer.",
        icon: "testing",
        image: "/images/products/circuit-breaker-testing-hd.png",
        tag: "TEST SEQUENCE EXECUTION",
        technicalDetails: [
          "Standard Sequence Execution (C, O, C-O, O-C-O)",
          "Dual Trip Coil Independent Triggering",
          "Simultaneous 3-Phase Contact Initiation",
          "High-Speed Dynamic Data Logging Active",
        ],
      },
      {
        step: "04",
        title: "Analyze Velocity, Bounce & Resistance",
        description: "Analyze sub-millisecond 3-phase contact synchronism, contact wipe, mechanical travel velocity, dynamic resistance (DRM), and coil current signatures.",
        icon: "signal",
        image: "/images/products/circuit-breaker-testing.png",
        tag: "DYNAMIC DIAGNOSTIC ANALYSIS",
        technicalDetails: [
          "Sub-Millisecond 3-Phase Timing Discrepancy",
          "Travel Velocity, Total Stroke & Contact Wipe",
          "Dynamic Resistance Micro-Ohm Curve (DRM)",
          "Baseline Fingerprint & IEEE/IEC Diagnostic Sheet",
        ],
      },
    ],
  },

  applications: [
    {
      id: "power-generation",
      title: "Power Generation",
      icon: "generator",
      description: "Verification of generator circuit breakers (GCB) and auxiliary plant switchgear.",
      isCenter: true,
    },
    {
      id: "transmission-distribution",
      title: "Transmission & Distribution",
      icon: "substation",
      description: "Commissioning and routine timing diagnostics of 66 kV to 765 kV SF6 and vacuum breakers.",
    },
    {
      id: "substations",
      title: "Substations",
      icon: "switchgear",
      description: "Contact resistance and DCRM profiling across AIS, GIS, and hybrid substation bays.",
    },
    {
      id: "industrial-systems",
      title: "Industrial Systems",
      icon: "cable",
      description: "Low and medium-voltage breaker maintenance in steel plants, refineries, and manufacturing lines.",
    },
    {
      id: "utilities",
      title: "Utilities",
      icon: "power",
      description: "Annual maintenance inspections and fleet-wide breaker condition assessment for state utilities.",
    },
  ],

  benefits: [
    {
      id: "holistic",
      icon: "testing",
      title: "Complete Mechanical & Electrical Assessment",
      description: "Combines micro-ohm contact resistance with dynamic mechanical travel analysis in one workflow.",
    },
    {
      id: "fingerprint",
      icon: "signal",
      title: "Signature Fingerprint Comparison",
      description: "Historical curve overlay detects mechanism wear, latch friction, and contact erosion early.",
    },
    {
      id: "efficiency",
      icon: "shield",
      title: "Prevents Unnecessary Teardowns",
      description: "Non-intrusive diagnostics pinpoint exactly which interrupter requires maintenance.",
    },
  ],

  cta: {
    title: "Need help selecting the right circuit breaker testing solution?",
    description:
      "Our engineering team can help you choose the best instruments for your applications, testing standards and field conditions.",
    primaryButtonText: "Talk to an Engineer",
    primaryButtonLink: "/contact?subject=Circuit%20Breaker%20Testing%20Analysis%20Inquiry",
    secondaryButtonText: "Request a Quote",
    secondaryButtonLink: "/contact?subject=Request%20a%20Quote%20Circuit%20Breaker%20Testing",
    supportingImage: "/images/products/circuit-breaker-testing.png",
  },
};

export default circuitBreakerTestingAnalysis;
