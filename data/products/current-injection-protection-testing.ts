import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: CURRENT INJECTION & PROTECTION TESTING
   File: data/products/current-injection-protection-testing.ts
   ================================================================ */

const currentInjectionProtectionTesting: ProductData = {
  slug: "current-injection-protection-testing",
  category: "Electrical Testing Equipment",
  title: "Primary & Secondary Current Injection Testing Sets",
  tagline: "Testing the systems that keep the world running.",
  description:
    "Reliable, high-performance current injection systems for testing circuit breakers, CTs, relays, busbars and protection systems.",

  overview:
    "HVTI Primary and Secondary Current Injection Testing Sets provide indispensable commissioning and diagnostic capabilities for high-voltage substations, industrial power distribution networks, and protection relay panels. Delivering true continuous and short-time current injection from 30 A up to 10,000 A, our equipment verifies thermal/magnetic trip characteristics, CT ratios and knee points, contact resistance voltage drops, and protection relay timing with millisecond accuracy.",

  highlights: [
    "Wide current range (30 A – 10,000 A)",
    "Robust and field-proven design",
    "Simple operation with precise control",
    "Trusted by utilities and industry worldwide",
  ],

  renderType: "image",
  image: "/images/products/current-injection-testing-sets.png",
  specImage: "/images/products/product-testing.jpg",

  engineeringAtAGlance: [
    {
      id: "primary-injection",
      icon: "current",
      value: "500 A – 10,000 A",
      label: "PRIMARY INJECTION",
      description: "High-current heavy injection for circuit breaker trips, busbars, and CT ratio tests.",
      highlighted: true,
    },
    {
      id: "secondary-injection",
      icon: "shield",
      value: "30 A – 200 A",
      label: "SECONDARY INJECTION",
      description: "Precision injection for static, thermal, directional, and numerical relays.",
    },
    {
      id: "field-ready",
      icon: "testing",
      value: "Built for Field Use",
      label: "PORTABILITY",
      description: "Rugged castor-mounted enclosures designed for switchyards and MCC panels.",
    },
  ],

  rangeEyebrow: "OUR PRODUCTS",
  rangeHeading: "Choose the right current injection system.",
  productVariants: [
    {
      id: "primary-injection-sets",
      name: "Primary Current Injection Testing Sets",
      subtitle: "500 A – 10,000 A High Current",
      badge: "PRIMARY INJECTION",
      image: "/images/products/current-injection-testing-sets.png",
      description:
        "High current injection systems for testing circuit breakers, busbars, CTs, relays, MCCs and PCCs.",
      bulletPoints: [
        "Current range: 500 A – 10,000 A",
        "Multiple output configurations (continuous & short-time)",
        "Rugged, portable castor-mounted design",
        "Precise control and millisecond timer measurement.",
      ],
      ctaText: "View Details",
      ctaLink: "/products/current-injection-testing-sets",
    },
    {
      id: "secondary-injection-sets",
      name: "Secondary Current Injection Testing Sets",
      subtitle: "30 A – 200 A Precision Relay Testing",
      badge: "SECONDARY INJECTION",
      image: "/images/products/current-injection-testing-sets-hd.png",
      description:
        "Accurate and reliable secondary injection systems for testing protection relays, CTs and auxiliary devices.",
      bulletPoints: [
        "Current range: 30 A – 200 A",
        "High accuracy, low harmonic distortion",
        "Lightweight and portable Pelican case form factor",
        "User-friendly operation with NO/NC trip contacts.",
      ],
      ctaText: "View Details",
      ctaLink: "/products/current-injection-testing-sets",
    },
  ],

  keyTechnicalRanges: {
    title: "Key Specifications",
    description:
      "Explore the key technical specifications for our current injection testing sets. View detailed specifications on each product page.",
    headers: ["PARAMETER", "PRIMARY INJECTION SETS", "SECONDARY INJECTION SETS", ""],
    rows: [
      {
        col1: "Current Range",
        col2: "500 A – 10,000 A",
        col3: "30 A – 200 A",
        col4: "Wide dynamic output",
      },
      {
        col1: "Output Modes",
        col2: "AC (standard), DC (select models)",
        col3: "AC / DC (model dependent)",
        col4: "Continuously variable",
      },
      {
        col1: "Accuracy",
        col2: "High-accuracy measurement (Class 1.0)",
        col3: "High-accuracy measurement (Class 0.5)",
        col4: "Digital true RMS",
      },
      {
        col1: "Control",
        col2: "Manual / Automatic (model dependent)",
        col3: "Manual / Automatic (model dependent)",
        col4: "Microprocessor timing",
      },
      {
        col1: "Applications",
        col2: "Circuit breakers, busbars, CTs, relays, MCCs, PCCs",
        col3: "Protection relays, CTs, auxiliary devices",
        col4: "Commissioning & maintenance",
      },
      {
        col1: "Design",
        col2: "Rugged, portable, field-tested",
        col3: "Compact, lightweight, easy to operate",
        col4: "Castor & case models",
      },
    ],
  },

  fullTechnicalSpecs: {
    sections: [
      {
        title: "Primary Current Injection Technical Specifications",
        specs: [
          { parameter: "Current Output Ratings", value: "500 A, 1000 A, 2000 A, 3000 A, 5000 A, 10,000 A" },
          { parameter: "Duty Cycle Options", value: "Continuous (100% duty) / Short-time (5 mins on / 15 mins off)" },
          { parameter: "Digital Timer Range", value: "0.0001 s to 9999.9 s (Resolution: 1 ms)" },
          { parameter: "Timer Auto-Stop Triggers", value: "Normally Open (NO), Normally Closed (NC), Potential Free, Voltage sensing" },
          { parameter: "CT Ratio & Polarity Mode", value: "Simultaneous primary and secondary current monitoring with direct ratio calculation" },
          { parameter: "Enclosure", value: "Heavy-gauge MS cabinet with industrial castor wheels and heavy copper busbar outputs" },
        ],
      },
      {
        title: "Secondary Current Injection Technical Specifications",
        specs: [
          { parameter: "Current Output Channels", value: "0 – 30 A / 0 – 100 A / 0 – 200 A AC & DC" },
          { parameter: "Auxiliary AC/DC Voltage Output", value: "0 – 250 V AC (variable) / 0 – 300 V DC (variable) for relay coil energization" },
          { parameter: "Phase Angle Measurement", value: "0 to 360° with 0.1° resolution" },
          { parameter: "Frequency Output", value: "45 Hz to 65 Hz variable / 50 Hz power frequency standard" },
          { parameter: "Compatible Relay Types", value: "Overcurrent, Earth Fault, Directional, Differential, Under/Over Voltage, Thermal Overload" },
        ],
      },
    ],
  },

  workflow: {
    eyebrow: "PRIMARY & SECONDARY CURRENT INJECTION WORKFLOW",
    heading: "4-phase current injection, trip timing & protection curve verification.",
    steps: [
      {
        step: "01",
        title: "Connect High-Current Test Leads",
        description: "Connect heavy-gauge low-impedance copper leads to the circuit breaker primary terminals or secondary relay inputs with high-pressure contact clamps.",
        icon: "control",
        image: "/images/products/current-injection-testing-sets-hd.png",
        tag: "HIGH-CURRENT LEAD CONNECTION",
        technicalDetails: [
          "Low-Resistance Busbar Clamp Torqueing",
          "CT Primary / Secondary Polarity Verification",
          "Timer Auxiliary Contact Wiring",
          "Safety Ground Lead Earth Bond Check",
        ],
      },
      {
        step: "02",
        title: "Configure Current Amplitude & Timing",
        description: "Select continuous or momentary high-current output range, set trip detection sense (dry/wet contact), and arm digital timing counters on the controller.",
        icon: "current",
        image: "/images/products/current-injection-testing-sets.png",
        tag: "CURRENT INJECTION CONFIGURATION",
        technicalDetails: [
          "Injection Output Range (Up to 5000A AC/DC)",
          "Instantaneous vs Inverse-Time Trip Mode",
          "Sub-Millisecond Stop Trigger Sense Setup",
          "Thermal Duty Cycle & Overload Protection Active",
        ],
      },
      {
        step: "03",
        title: "Inject High Current & Measure Trip Time",
        description: "Initiate smooth motorized or pulsed current injection; the system detects the exact instant of breaker contact separation and records trip time in milliseconds.",
        icon: "testing",
        image: "/images/products/current-injection-testing-sets-hd.png",
        tag: "PRIMARY INJECTION & TRIP CAPTURE",
        technicalDetails: [
          "Smooth Motorized Variac Current Injection",
          "Sub-Millisecond Contact Opening Timer (< 1 ms)",
          "True RMS Injected Current Measurement",
          "Relay Pickup & Instantaneous Trip Thresholds",
        ],
      },
      {
        step: "04",
        title: "Verify Time-Current Characteristics",
        description: "Plot measured trip times against standard IEC/IEEE protection curves, verify relay coordination margins, and confirm switchgear reliability.",
        icon: "shield",
        image: "/images/products/current-injection-testing-sets.png",
        tag: "TRIP CURVE VERIFICATION",
        technicalDetails: [
          "Measured vs Manufacturer Curve Comparison",
          "Relay Coordination & Discrimination Margin Check",
          "Breaker Auxiliary Contact Integrity Verified",
          "Automated IEC 60255 Standard Test Report",
        ],
      },
    ],
  },

  applications: [
    {
      id: "circuit-breakers",
      title: "Circuit Breakers",
      icon: "switchgear",
      description: "Verify thermal and magnetic trip thresholds under high-current primary injection.",
      isCenter: true,
    },
    {
      id: "current-transformers",
      title: "Current Transformers",
      icon: "transformer",
      description: "Direct measurement of CT ratio, polarity, and excitation saturation characteristics.",
    },
    {
      id: "protection-relays",
      title: "Protection Relays",
      icon: "control",
      description: "Timing curves and pick-up/drop-off threshold verification for electro-mechanical and numerical relays.",
    },
    {
      id: "busbars",
      title: "Busbars",
      icon: "cable",
      description: "High-current joint resistance and thermal hotspot verification across switchgear busbars.",
    },
    {
      id: "mcc-pcc",
      title: "MCCs & PCCs",
      icon: "substation",
      description: "End-to-end commissioning of Motor Control Centers and Power Control Centers.",
    },
    {
      id: "industrial-systems",
      title: "Industrial Systems",
      icon: "power",
      description: "Routine maintenance and protection testing in manufacturing plants, steel mills, and refineries.",
    },
  ],

  benefits: [
    {
      id: "end-to-end",
      icon: "shield",
      title: "True Real-Load Testing",
      description: "Primary injection validates the entire protection loop from CT primary to breaker trip mechanism.",
    },
    {
      id: "precision-timing",
      icon: "testing",
      title: "Millisecond Precision Timing",
      description: "Integrated digital timers capture exact trip durations for instantaneous and inverse-time curves.",
    },
    {
      id: "ruggedness",
      icon: "briefcase",
      title: "Substation Heavy-Duty Construction",
      description: "Castor-mounted industrial enclosures designed to withstand harsh outdoor utility environments.",
    },
  ],

  cta: {
    title: "Need help selecting the right current injection system?",
    description:
      "Our team can help you choose the best solution for your testing requirements, based on your application and testing standards.",
    primaryButtonText: "Talk to an Engineer",
    primaryButtonLink: "/contact?subject=Current%20Injection%20Testing%20Sets%20Inquiry",
    secondaryButtonText: "Request a Quote",
    secondaryButtonLink: "/contact?subject=Request%20a%20Quote%20Current%20Injection",
    supportingImage: "/images/products/current-injection-testing-sets.png",
  },
};

export default currentInjectionProtectionTesting;
