/* ================================================================
   HVTI PRODUCT DATA: CABLE FAULT LOCATION & TESTING
   File: data/products/cable-fault-location-testing.ts

   Based on official HVTI Cable Fault Location & Testing catalogue.
   ================================================================ */

import { ProductData } from "@/types/product";

const cableFaultLocationTesting: ProductData = {
  slug: "cable-fault-location-testing",
  title: "Cable Fault Location & Testing",
  tagline: "Find Faults. Minimize Downtime.",
  category: "CABLE FAULT LOCATION & TESTING",
  categoryHref: "/viewall/electrical-testing-equipment",
  slogan: "Locate today. Keep the network tomorrow.",
  description:
    "Advanced cable fault locating and testing solutions for accurate, fast and reliable diagnostics.",
  longDescription: [
    "HVTI provides industry-standard cable fault location and testing systems engineered to rapidly pre-locate, pinpoint, and diagnose faults in underground medium- and high-voltage power cable networks.",
    "Utilizing advanced Time Domain Reflectometry (TDR), high-voltage DC proof testing, capacitive surge pulse discharge (thumping), and precision acoustic listening, our systems minimize outage duration across shielded XLPE, PILC, and EPR cable systems up to 3,000 meters and beyond.",
  ],
  image: "/images/products/miscellaneous-testing-equipment-hd.png",
  highlights: [
    "Accurate fault location",
    "Suitable for all cable types",
    "Reduces outage time",
    "Trusted by utilities and industry",
  ],

  engineeringAtAGlance: [
    {
      id: "tdr-range",
      icon: "testing",
      code: "RANGE",
      label: "PRE-LOCATION",
      value: "Up to 3,000 m",
      description: "Sub-meter resolution Time Domain Reflectometry pulse echo",
    },
    {
      id: "thump-voltage",
      icon: "voltage",
      code: "SURGE",
      label: "THUMPER OUTPUT",
      value: "0 – 32 kV DC",
      description: "Multi-stage capacitive discharge for flashing high-resistance faults",
      highlighted: true,
    },
    {
      id: "pulse-width",
      icon: "signal",
      code: "PULSE",
      label: "PULSE WIDTH",
      value: "10 ns – 10 µs",
      description: "Adjustable pulse width for short dead-zones and long-range reach",
    },
    {
      id: "display-size",
      icon: "control",
      code: "DISPLAY",
      label: "DIGITAL SCOPE",
      value: '7" / 10" Color',
      description: "Sunlight-readable color LCD with automated marker calculation",
    },
    {
      id: "cable-types",
      icon: "shield",
      code: "ASSETS",
      label: "CABLE COMPATIBILITY",
      value: "XLPE / PILC / EPR",
      description: "Universal compatibility with low, medium, and high voltage power cables",
    },
  ],

  benefits: [
    {
      id: "rapid-location",
      icon: "testing",
      title: "Rapid Fault Pre-Location",
      description: "Identifies distance to open-circuit, short-circuit, and high-impedance cable faults in seconds.",
    },
    {
      id: "universal-cables",
      icon: "shield",
      title: "Universal Cable Compatibility",
      description: "Works across armored, shielded, unshielded, direct-buried, and ducted power cables.",
    },
    {
      id: "minimizes-outages",
      icon: "gear",
      title: "Minimizes Outage Duration",
      description: "Drastically reduces search time, excavation footprint, and customer interruption minutes.",
    },
    {
      id: "utility-trusted",
      icon: "briefcase",
      title: "Trusted by Utilities Worldwide",
      description: "Built in rugged, weather-sealed Pelican enclosures engineered for demanding field service.",
    },
  ],

  rangeEyebrow: "OUR PRODUCTS",
  rangeHeading: "Explore our cable testing solutions.",
  rangeSubtitle:
    "From fault location to cable condition assessment, our solutions help you quickly identify and analyse cable faults, ensuring minimal downtime and reliable power delivery.",

  variants: [
    {
      id: "tdr-locator",
      name: "Cable Fault Locating Equipment (TDR)",
      model: "TDR-3000",
      subtitle: "Time Domain Reflectometry Cable Pre-Locator",
      badge: "TDR PRE-LOCATOR",
      image: "/images/products/miscellaneous-testing-equipment-hd.png",
      description:
        "Accurate fault location for power cables up to 3000 m using high-resolution pulse echo reflectometry.",
      highlights: [
        "High-resolution TDR technology",
        "Fault location up to 3000 m",
        "Easy to use, rugged and portable",
        "Suitable for all types of power cables",
      ],
      productUrl: "#technical-specifications",
    },
    {
      id: "hv-cable-test-sets",
      name: "High Voltage Test Sets (for Cable Testing)",
      model: "HVT-Cable Series",
      subtitle: "DC High-Voltage Proof & Fault Pinpointing Systems",
      badge: "DC CABLE HIPOT & THUMPING",
      image: "/images/products/miscellaneous-testing-equipment.png",
      description:
        "DC high-voltage test systems for cable insulation dielectric testing, breakdown flashover, and fault pinpointing.",
      highlights: [
        "Multiple voltage ranges (up to 70 kV DC)",
        "Stable and reliable high-voltage output",
        "Seamless integration with TDR systems",
        "Rugged castor-mounted design for field use",
      ],
      productUrl: "#technical-specifications",
    },
    {
      id: "cable-accessories",
      name: "Cable Testing Accessories",
      model: "CTA Series",
      subtitle: "Couplers, Leads, Discharge Rods & Earthing Kits",
      badge: "COUPLERS & ACCESSORIES",
      image: "/images/products/miscellaneous-testing-equipment-hd.png",
      description:
        "Complete range of field-tested accessories for safe, compliant, and efficient high-voltage cable diagnostics.",
      highlights: [
        "High-voltage couplers, test leads and reels",
        "Safety discharge rods and grounding kits",
        "Transportable, heavy-duty and field-ready",
        "100% compatible with all HVTI test sets",
      ],
      productUrl: "#technical-specifications",
    },
  ],

  keyTechnicalRanges: {
    title: "Key Specifications (TDR & Cable Testing Sets)",
    description:
      "Core operating parameters for HVTI cable fault locating and insulation testing systems.",
    headers: ["PARAMETER", "SPECIFICATION / RANGE", "DETAILS", "APPLICATION"],
    rows: [
      {
        col1: "Measurement Range",
        col2: "Up to 3,000 m (model dependent up to 10 km)",
        col3: "Dead-zone < 1 meter",
        col4: "Underground distribution & transmission cable runs",
      },
      {
        col1: "Resolution",
        col2: "High resolution for accurate fault location (< 0.1 m)",
        col3: "Digital sampling rate up to 200 MHz",
        col4: "Exact distance-to-fault pinpointing",
      },
      {
        col1: "Pulse Width",
        col2: "Adjustable (10 ns, 50 ns, 100 ns, 500 ns, 1 µs, 10 µs)",
        col3: "Automatic impedance matching",
        col4: "Short service drops to long cross-country feeders",
      },
      {
        col1: "Display",
        col2: '7" / 10" High-Contrast Colour Display',
        col3: "Sunlight readable with dual cursor markers",
        col4: "Field waveform analysis in bright daylight",
      },
      {
        col1: "Cable Types",
        col2: "Suitable for all types of power cables",
        col3: "XLPE, PILC, EPR, PVC, Armored & Coaxial",
        col4: "Single-core and 3-core underground cables",
      },
      {
        col1: "Power Supply",
        col2: "AC mains / Rechargeable internal battery",
        col3: "> 6 hours continuous field battery autonomy",
        col4: "Substation yard and remote trench operation",
      },
    ],
  },

  fullTechnicalSpecs: {
    sections: [
      {
        title: "TDR Pre-Location & Reflectometry Specifications",
        specs: [
          { parameter: "Velocity of Propagation (VoP)", value: "50 to 150 m/µs (adjustable & pre-set cable library)" },
          { parameter: "Gain Control", value: "0 to 80 dB adjustable in 1 dB steps" },
          { parameter: "Impedance Matching", value: "25 Ω, 50 Ω, 75 Ω, 100 Ω, 125 Ω, and Auto-Match" },
          { parameter: "Sampling Rate", value: "200 MS/s real-time hardware sampling" },
          { parameter: "Memory Capacity", value: "1,000 waveform traces with USB export" },
          { parameter: "Enclosure Protection", value: "IP67 waterproof Pelican case (closed) / IP54 (open)" },
        ],
      },
      {
        title: "High Voltage Thumping & Surge Generator Specifications",
        specs: [
          { parameter: "Surge Voltage Output", value: "0 – 8 kV / 0 – 16 kV / 0 – 32 kV selectable stages" },
          { parameter: "Max Surge Energy", value: "1,000 Joules / 2,000 Joules at maximum voltage" },
          { parameter: "Discharge Pulse Interval", value: "Single pulse / Automatic 3 to 12 seconds repetitive cycle" },
          { parameter: "Safety Earthing", value: "Automatic internal high-voltage discharge grounding solenoid" },
          { parameter: "Weight & Mobility", value: "Heavy-duty pneumatic wheels with secure lifting handles" },
        ],
      },
    ],
  },

  workflow: {
    categorySlug: "cable-fault-location-testing",
    eyebrow: "A SIMPLE PATH TO FAULT LOCATION",
    heading: "4-phase systematic cable fault pre-location & pinpointing.",
    steps: [
      {
        step: "01",
        title: "Test",
        description: "Connect the TDR leads to the de-energized cable phase and set pulse width, gain, and velocity of propagation.",
        icon: "testing",
        image: "/images/products/miscellaneous-testing-equipment-hd.png",
        tag: "TDR SETUP & CALIBRATION",
        technicalDetails: [
          "Cable De-Energized & Safety Earth Discharged",
          "TDR Coaxial Leads Clamped to Conductor & Shield",
          "VoP Set for Cable Dielectric (e.g. 80 m/µs XLPE)",
          "Pulse Width Adjusted for Target Distance",
        ],
      },
      {
        step: "02",
        title: "Locate",
        description: "Transmit TDR pulse and identify the reflected pulse anomaly on the color display to compute the exact distance to fault.",
        icon: "control",
        image: "/images/products/miscellaneous-testing-equipment.png",
        tag: "PULSE ECHO REFLECTION PRE-LOCATION",
        technicalDetails: [
          "Incident & Reflected Pulse Echo Captured",
          "Dual Digital Marker Placement at Reflection",
          "Distance-to-Fault Computed Automatically",
          "Open-Circuit vs Short-Circuit Polarity Confirmed",
        ],
      },
      {
        step: "03",
        title: "Analyse",
        description: "Interpret the reflected waveform signature, confirm fault type (low-resistance vs high-resistance breakdown), and correlate with thumper.",
        icon: "signal",
        image: "/images/products/miscellaneous-testing-equipment-hd.png",
        tag: "FAULT CLASSIFICATION & PINPOINTING",
        technicalDetails: [
          "Reflectance Anomaly Amplitude Evaluation",
          "High-Voltage Thumper Flashover Triggered",
          "Acoustic Ground Microphone Surface Correlation",
          "Exact Surface Excavation Coordinates Marked",
        ],
      },
      {
        step: "04",
        title: "Repair & Restore",
        description: "Carry out targeted jointing/splice repairs and re-test with DC withstand hipot to restore reliable service quickly.",
        icon: "shield",
        image: "/images/products/miscellaneous-testing-equipment.png",
        tag: "REPAIR & SERVICE RESTORATION",
        technicalDetails: [
          "Targeted Minimal Excavation Pit Opened",
          "Cable Joint / Splice Section Replaced",
          "Proof Withstand Dielectric Retest Passed",
          "Network Re-Energized & Outage Cleared",
        ],
      },
    ],
  },

  applications: [
    {
      id: "underground-cables",
      title: "Underground Power Cables",
      icon: "cable",
      description: "Medium and high voltage buried transmission and distribution cable feeder diagnostics.",
      isCenter: true,
    },
    {
      id: "substation-interconnects",
      title: "Substation Interconnects",
      icon: "substation",
      description: "Transformer-to-switchgear riser cables and busbar duct interconnects.",
    },
    {
      id: "industrial-plants",
      title: "Industrial Plants",
      icon: "switchgear",
      description: "Critical plant motor feeders, smelter cables, and manufacturing power distribution.",
    },
    {
      id: "renewable-energy",
      title: "Renewable Energy",
      icon: "solar",
      description: "Solar farm inter-array collection cables and wind farm collector networks.",
    },
    {
      id: "urban-distribution",
      title: "Urban Distribution Networks",
      icon: "city",
      description: "City duct banks, underground vaults, and densely populated utility grids.",
    },
  ],

  cta: {
    title: "Need help with cable fault location & testing?",
    description: "Our engineering team can help you choose the right solution based on your cable type, test requirements and site conditions.",
    primaryButtonText: "Talk to an Engineer",
    primaryButtonLink: "/contact?subject=Cable%20Fault%20Location%20Inquiry",
    secondaryButtonText: "Download Brochure",
    secondaryButtonLink: "/resources",
  },
};

export default cableFaultLocationTesting;
