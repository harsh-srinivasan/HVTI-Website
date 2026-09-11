/* ================================================================
   HVTI PRODUCT DATA: SPECIALIZED ELECTRICAL TESTING EQUIPMENT
   File: data/products/specialized-electrical-testing-equipment.ts

   Based on official HVTI Specialized Electrical Testing Equipment catalogue.
   ================================================================ */

import { ProductData } from "@/types/product";

const specializedElectricalTestingEquipment: ProductData = {
  slug: "specialized-electrical-testing-equipment",
  title: "Specialized Electrical Testing Equipment",
  tagline: "Specialized Tools for Critical Electrical Testing",
  category: "SPECIALIZED ELECTRICAL TESTING EQUIPMENT",
  categoryHref: "/viewall/electrical-testing-equipment",
  slogan: "Specialized solutions for a more reliable tomorrow.",
  description:
    "A focused range of high-precision instruments to support fault location, timing, DC system earth-fault detection, SF6 circuit-breaker servicing and relay maintenance.",
  longDescription: [
    "HVTI delivers specialized, mission-critical diagnostic tools engineered to solve niche challenges in high-voltage substations, DC battery systems, protective relay rooms, and SF6 switchgear maintenance bays.",
    "Our specialized portfolio includes online non-invasive DC earth-fault locators for floating battery distribution networks (GFL-T + GFL-R), microsecond-precision digital time interval meters (DTIM), complete cart-mounted SF6 gas recovery and refilling systems (TP-ER100), and 15-piece precision relay servicing tool kits.",
  ],
  image: "/images/products/dc-earth-fault-locator-hd.png",
  highlights: [
    "Live DC Fault Detection",
    "Precision Timing",
    "SF6 Service Support",
    "Relay Maintenance",
  ],

  engineeringAtAGlance: [
    {
      id: "dc-earth-fault",
      icon: "testing",
      code: "DC GFL",
      label: "DC EARTH FAULT",
      value: "0 – 400 kΩ",
      description: "Non-invasive online ground fault tracking on live floating battery systems",
      highlighted: true,
    },
    {
      id: "time-interval",
      icon: "control",
      code: "DTIM",
      label: "DIGITAL TIMING",
      value: "0.0000 – 9999s",
      description: "0.05% ± 1 digit microsecond resolution digital time interval meters",
    },
    {
      id: "sf6-recovery",
      icon: "gear",
      code: "SF6 CART",
      label: "SF6 HANDLING",
      value: "< 1 mbar Vacuum",
      description: "High-capacity cart-mounted evacuation, purification, and refilling system",
    },
    {
      id: "relay-tools",
      icon: "shield",
      code: "TOOLKIT",
      label: "RELAY TOOLKIT",
      value: "15-Piece Kit",
      description: "Special-purpose precision burnishers, gauges, and adjustment tools",
    },
    {
      id: "utility-spec",
      icon: "briefcase",
      code: "STANDARDS",
      label: "UTILITY GRADE",
      value: "IP65 Field Ready",
      description: "Engineered to withstand rigorous substation and power plant environments",
    },
  ],

  benefits: [
    {
      id: "live-dc-tracking",
      icon: "testing",
      title: "Live DC Fault Detection",
      description: "Identifies resistive and capacitive current paths on floating battery systems without de-energizing critical protection loads.",
    },
    {
      id: "precision-timing",
      icon: "control",
      title: "Precision Timing Diagnostics",
      description: "Captures contact pickup, dropout, and operating times with sub-millisecond accuracy.",
    },
    {
      id: "sf6-environmental",
      icon: "gear",
      title: "SF6 Environmental Compliance",
      description: "Zero-emission SF6 gas recovery and vacuum evacuation prevents greenhouse gas venting during circuit breaker overhaul.",
    },
    {
      id: "relay-longevity",
      icon: "shield",
      title: "Optimized Relay Performance",
      description: "Restores electromechanical contact alignment and solid-state relay response to factory tolerances.",
    },
  ],

  rangeEyebrow: "OUR PRODUCT RANGE",
  rangeHeading: "Specialized electrical testing solutions.",
  rangeSubtitle:
    "Trusted by utilities and industry worldwide, our specialized testing equipment is designed for accurate diagnostics, simpler maintenance and improved system reliability.",

  variants: [
    {
      id: "dc-earth-fault-locator",
      name: "DC Earth Fault Locator",
      model: "GFL-T + GFL-R",
      subtitle: "Online Ground Fault Locator for DC Battery Systems",
      badge: "LIVE DC GROUND LOCATOR",
      image: "/images/products/dc-earth-fault-locator-hd.png",
      description:
        "Identifies resistive and non-resistive current paths in DC battery distribution systems to ground without de-energizing loads.",
      highlights: [
        "Two-part design: Pulser Unit + Pulse Detector Unit",
        "Detects faults up to 0 - 100 kΩ / 0 - 400 kΩ",
        "Two high-sensitivity current-sensing probes",
        "IP65 weather protection when case closed",
        "Rugged, shock-absorbing Pelican case",
      ],
      productUrl: "#technical-specifications",
    },
    {
      id: "digital-time-interval-meters",
      name: "Digital Time Interval Meters",
      model: "DTIM Series",
      subtitle: "High-Precision Microsecond Digital Timing Meters",
      badge: "PRECISION DIGITAL TIMING",
      image: "/images/products/dc-earth-fault-locator.png",
      description:
        "High-accuracy digital timer designed for measuring operating times of protective relays, trip coils, and circuit breaker mechanisms.",
      highlights: [
        "Range: 0.0000 – 9999 seconds",
        "Programmable resolution: 1 ms / 10 ms / 100 ms / 1 s",
        "Accuracy: 0.05% ± 1 digit",
        "8-segment bright digital LED display",
        "Auto / manual reset with short-duration memory",
      ],
      productUrl: "#technical-specifications",
    },
    {
      id: "sf6-gas-handling-equipment",
      name: "SF6 Gas Handling Equipment",
      model: "TP-ER100",
      subtitle: "Cart-Mounted SF6 Evacuating & Refilling Device",
      badge: "SF6 EVACUATION & REFILL",
      image: "/images/products/dc-earth-fault-locator-hd.png",
      description:
        "Evacuating and refilling device for SF6 circuit-breaker servicing with integrated vacuum pump, digital gauges, and safety valves.",
      highlights: [
        "Rugged four-pneumatic-tyre mobile cart",
        "High-capacity deep vacuum pump (< 1 mbar)",
        "Precision digital vacuum gauges & solenoid valve",
        "Safety relief valves and pressure regulator",
        "High-pressure hoses & standard SF6 breaker couplings",
      ],
      productUrl: "#technical-specifications",
    },
    {
      id: "relay-tool-kits",
      name: "Relay Tool Kits",
      model: "RTK-15",
      subtitle: "15-Piece Precision Protective Relay Servicing Toolkit",
      badge: "15-PIECE RELAY TOOLKIT",
      image: "/images/products/dc-earth-fault-locator.png",
      description:
        "A set of 15 special-purpose precision tools selected for electromechanical relays, solid-state relays and general-purpose substation maintenance.",
      highlights: [
        "15 specialized precision tools",
        "Contact burnishers, spring adjusters & thickness gauges",
        "Suitable for electromechanical & solid-state relays",
        "Heavy-duty cushioned field carrying case",
      ],
      productUrl: "#technical-specifications",
    },
  ],

  keyTechnicalRanges: {
    title: "Key Specifications across Specialized Instruments",
    description:
      "Comparative summary of parameters across DC earth fault detection, digital timing, and SF6 servicing tools.",
    headers: ["PARAMETER", "DC EARTH FAULT LOCATOR (GFL-T+R)", "DIGITAL TIME INTERVAL METERS", "SF6 GAS HANDLING (TP-ER100)", "RELAY TOOL KITS"],
    rows: [
      {
        col1: "Measurement Range",
        col2: "0 – 100 kΩ / 0 – 400 kΩ",
        col3: "0.0000 – 9999 seconds",
        col4: "Vacuum to < 1 mbar / 0-10 bar pressure",
        col5: "15 specialized tool items",
      },
      {
        col1: "Accuracy",
        col2: "High-sensitivity direction indication",
        col3: "0.05% ± 1 digit",
        col4: "Digital gauge accuracy ±0.5%",
        col5: "Precision tolerance matching",
      },
      {
        col1: "Resolution",
        col2: "Dual current clamp sensitivity",
        col3: "1 ms / 10 ms / 100 ms / 1 s",
        col4: "0.01 mbar vacuum readout",
        col5: "Feeler gauges 0.02 - 1.0 mm",
      },
      {
        col1: "Key Features",
        col2: "Two-part design, current probes, IP65 Pelican case",
        col3: "8-segment digital LED, auto/manual reset, memory",
        col4: "Vacuum pump, digital gauges, pneumatic tyre cart",
        col5: "Contact burnishers, spring adjusters, rugged case",
      },
    ],
  },

  fullTechnicalSpecs: {
    sections: [
      {
        title: "DC Earth Fault Locator (GFL-T + GFL-R) Technical Specifications",
        specs: [
          { parameter: "Signal Generator Output", value: "Low-frequency encoded pulse (0.5 Hz / 2.5 Hz, max 5 mA)" },
          { parameter: "System DC Voltage", value: "24 V, 48 V, 110 V, 220 V, 250 V floating battery systems" },
          { parameter: "Fault Resistance Detection", value: "Resistive and capacitive earth faults up to 400 kΩ" },
          { parameter: "Current Sensing Clamps", value: "High-permeability dual magnetic clamps (20 mm / 50 mm aperture)" },
          { parameter: "Directional Arrow Indicator", value: "Automatic LED pointer showing upstream/downstream fault direction" },
          { parameter: "Enclosure", value: "IP65 heavy-duty Pelican waterproof case with shoulder strap" },
        ],
      },
      {
        title: "Digital Time Interval Meters & SF6 Handling Specifications",
        specs: [
          { parameter: "DTIM Timing Inputs", value: "Dry contact / Wet contact voltage sense (12 V to 300 V DC/AC)" },
          { parameter: "DTIM Display", value: "5-digit high-visibility red 8-segment LED display" },
          { parameter: "TP-ER100 Vacuum Capacity", value: "High-throughput direct-drive rotary vane vacuum pump (< 1 mbar ultimate)" },
          { parameter: "TP-ER100 Pressure Rating", value: "0 to 10 bar (145 psi) regulated filling pressure" },
          { parameter: "TP-ER100 Mobility", value: "Heavy-duty 4-wheel steel cart with pneumatic puncture-proof tyres" },
          { parameter: "Relay Kit Contents", value: "15 insulated tools including diamond burnishers, offset wrenches, spring benders" },
        ],
      },
    ],
  },

  workflow: {
    categorySlug: "specialized-electrical-testing-equipment",
    eyebrow: "THE RIGHT TOOL FOR THE TASK",
    heading: "4-phase precision diagnosis, timing, and service execution.",
    steps: [
      {
        step: "01",
        title: "Identify",
        description: "Detect faults or specific testing requirements on floating DC systems, relay timing circuits, or SF6 switchgear compartments.",
        icon: "testing",
        image: "/images/products/dc-earth-fault-locator-hd.png",
        tag: "FAULT & TASK IDENTIFICATION",
        technicalDetails: [
          "DC Floating Bus Voltage Imbalance Check",
          "Relay Trip Timing Requirements Identified",
          "SF6 Gas Compartment Pressure Evaluated",
          "Tool Requirements Selected from Kit",
        ],
      },
      {
        step: "02",
        title: "Measure",
        description: "Connect precision instruments (GFL pulser or DTIM timer) to get accurate, real-time measurements without disturbing live loads.",
        icon: "control",
        image: "/images/products/dc-earth-fault-locator.png",
        tag: "PRECISION ON-LINE MEASUREMENT",
        technicalDetails: [
          "Low-Frequency Safe Signal Injection (0.5 Hz)",
          "Dual Current Clamp Differential Tracing",
          "Digital Time Interval Counter Armed",
          "High-Accuracy Measurement Logged",
        ],
      },
      {
        step: "03",
        title: "Service",
        description: "Carry out targeted maintenance, contact burnishing, or deep vacuum evacuation (< 1 mbar) and SF6 refilling using TP-ER100.",
        icon: "gear",
        image: "/images/products/dc-earth-fault-locator-hd.png",
        tag: "MAINTENANCE & SERVICING",
        technicalDetails: [
          "High-Resistance Ground Branch Isolated",
          "SF6 Deep Vacuum Evacuation to < 1 mbar",
          "Regulated SF6 Gas Refill to Rated Pressure",
          "Relay Contact Alignment & Tension Adjusted",
        ],
      },
      {
        step: "04",
        title: "Restore & Verify",
        description: "Confirm normal system insulation resistance, verify timing parameters, and ensure safe, reliable substation re-commissioning.",
        icon: "shield",
        image: "/images/products/dc-earth-fault-locator.png",
        tag: "SYSTEM RESTORATION & VERIFICATION",
        technicalDetails: [
          "DC Positive/Negative Bus Balanced to Earth",
          "Relay Millisecond Operating Time Passed",
          "SF6 Compartment Moisture & Leak Free",
          "Substation Protection System Operational",
        ],
      },
    ],
  },

  applications: [
    {
      id: "dc-battery-systems",
      title: "DC Battery Systems",
      icon: "battery",
      description: "Floating 24V/48V/110V/220V station battery and UPS earth fault tracking.",
      isCenter: true,
    },
    {
      id: "substations",
      title: "Substations",
      icon: "substation",
      description: "Utility control rooms, protection relay panels, and switchyard DC circuits.",
    },
    {
      id: "circuit-breaker-servicing",
      title: "Circuit-Breaker Servicing",
      icon: "switchgear",
      description: "SF6 gas recovery, evacuation, moisture filtration, and regulated refill.",
    },
    {
      id: "relay-maintenance",
      title: "Relay Maintenance",
      icon: "shield",
      description: "Electromechanical and solid-state protective relay tuning and timing checks.",
    },
    {
      id: "power-generation",
      title: "Power Generation",
      icon: "generator",
      description: "Plant DC emergency power systems and turbine generator trip timing.",
    },
    {
      id: "transmission-distribution",
      title: "Transmission & Distribution",
      icon: "substation",
      description: "Transmission grid substation DC auxiliary supplies and breaker maintenance.",
    },
    {
      id: "heavy-industry",
      title: "Heavy Industry",
      icon: "factory",
      description: "Steel mills, chemical plants, and oil refineries with critical DC automation.",
    },
  ],

  cta: {
    title: "Need a specialized testing solution?",
    description: "Our team can help you choose the right equipment based on your application, testing requirements and field conditions.",
    primaryButtonText: "Talk to an Engineer",
    primaryButtonLink: "/contact?subject=Specialized%20Electrical%20Testing%20Inquiry",
    secondaryButtonText: "Download Brochure",
    secondaryButtonLink: "/resources",
  },
};

export default specializedElectricalTestingEquipment;
