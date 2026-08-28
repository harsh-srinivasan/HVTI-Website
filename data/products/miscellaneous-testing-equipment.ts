import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: MISCELLANEOUS TESTING EQUIPMENT
   File: data/products/miscellaneous-testing-equipment.ts
   ================================================================ */

const miscellaneousTestingEquipment: ProductData = {
  slug: "miscellaneous-testing-equipment",
  category: "Electrical Testing Equipment",
  title: "Miscellaneous Testing Equipment & Specialized Rigs",
  description:
    "Time Domain Reflectometer (TDR) cable fault locators, precision digital time interval meters (0.0001 s), SF6 gas evacuating & refilling carts, and specialized relay maintenance toolkits.",

  overview:
    "HVTI provides specialized high-voltage diagnostic instruments and maintenance accessories to support power plant, utility, and heavy industrial operations. Key equipment includes the Model 1550 Time Domain Reflectometer (TDR) for locating faults in power cables up to 3,000 meters, High-Resolution Digital Time Interval Meters with microsecond accuracy, TP-ER100 SF6 gas evacuating and refilling carts for switchgear servicing, and 15-piece precision relay maintenance toolkits.",

  highlights: [
    "TDR Cable Fault Locating up to 3,000 m",
    "High-Accuracy Digital Time Interval Meters (0.0001 s)",
    "TP-ER100 SF6 Gas Evacuating & Refilling Carts",
    "Specialized 15-Piece Relay Maintenance Toolkits",
  ],

  renderType: "image",
  image: "/images/products/miscellaneous-testing-equipment.jpg",
  specImage: "/images/products/product-testing.jpg",

  engineeringAtAGlance: [
    {
      id: "cable-fault",
      icon: "cable",
      value: "Up to 3,000 m Range",
      label: "CABLE FAULT LOCATOR",
      description: "Model 1550 Time Domain Reflectometer for LV & HV power cable fault pinpointing.",
      highlighted: true,
    },
    {
      id: "timer",
      icon: "testing",
      value: "0.0001 s Resolution",
      label: "TIME INTERVAL METER",
      description: "Programmable multi-range digital timer for relay, contactor, and mechanism timing.",
    },
    {
      id: "sf6-cart",
      icon: "control",
      value: "TP-ER100 SF6 Cart",
      label: "GAS HANDLING CART",
      description: "Heavy-duty pneumatic-tired cart with vacuum pumps, gauges, and safety valves.",
    },
    {
      id: "toolkit",
      icon: "briefcase",
      value: "15-Piece Kit",
      label: "RELAY TOOLKIT",
      description: "Specialized burnishers, gauges, and adjusters for electromechanical and solid-state relays.",
    },
  ],

  metrics: [
    {
      id: "tdr-range",
      icon: "cable",
      label: "TDR FAULT RANGE",
      value: "Up to 3000 Meters",
      subtext: "Low & high voltage cables",
    },
    {
      id: "timer-range",
      icon: "testing",
      label: "TIMER RANGE",
      value: "0.0000 to 9999 s",
      subtext: "Programmable Auto/Manual",
    },
    {
      id: "timer-accuracy",
      icon: "signal",
      label: "TIMER ACCURACY",
      value: "± 0.05% ± 1 digit",
      subtext: "8-Segment digital LED",
    },
    {
      id: "sf6-vacuum",
      icon: "power",
      label: "SF6 VACUUM PUMP",
      value: "< 1 mbar",
      subtext: "High-vacuum evacuation",
    },
  ],

  specificationsTable: [
    {
      parameter: "Cable Fault Locator (Model 1550 TDR)",
      details: "Pulse reflection echo method for open circuits, shorts, and high resistance faults",
      range: "Range: Up to 3,000 meters in LV & HV underground cables",
    },
    {
      parameter: "Digital Time Interval Meter Range",
      details: "Programmable resolution: 1 ms, 10 ms, 100 ms, 1 s",
      range: "0.0000 to 9999 seconds (Auto / Manual ranging)",
    },
    {
      parameter: "Time Interval Meter Accuracy & Display",
      details: "High-stability quartz crystal time base with 8-segment LED",
      range: "0.05% ± 1 digit with short-duration trip memory retention",
    },
    {
      parameter: "SF6 Gas Handling Cart (Model TP-ER100)",
      details: "Evacuating and refilling cart mounted on 4 pneumatic off-road tires",
      range: "Includes vacuum pump, digital vacuum gauges, solenoid valve, safety pressure regulator",
    },
    {
      parameter: "Relay Maintenance Toolkit",
      details: "Comprehensive selection for electro-mechanical & solid state relays",
      range: "15 precision tools including burnishing blades, contact adjusters, thickness gauges",
    },
    {
      parameter: "Environmental Suitability",
      details: "Rugged chassis for harsh outdoor substation and switchyard use",
      range: "-10°C to +55°C, dust & splash resistant",
    },
  ],

  applications: [
    {
      id: "underground-cables",
      title: "Underground Power Cable Networks",
      icon: "cable",
      isCenter: true,
    },
    {
      id: "sf6-switchgear",
      title: "SF6 Circuit Breakers & GIS",
      icon: "switchgear",
    },
    {
      id: "protection-panels",
      title: "Relay & Protection Panels",
      icon: "control",
    },
    {
      id: "substations",
      title: "Substation Maintenance Workshops",
      icon: "substation",
    },
    {
      id: "power-generation",
      title: "Thermal & Nuclear Power Plants",
      icon: "generator",
    },
  ],

  features: [
    {
      title: "Model 1550 Time Domain Reflectometer (TDR) for Rapid Cable Fault Finding",
      description:
        "Emits high-speed electrical pulses along underground power cables to detect impedance mismatches, locating open circuits, short circuits, and water ingress up to 3,000 meters away.",
    },
    {
      title: "High-Resolution Multi-Mode Digital Time Interval Meter",
      description:
        "Engineered with versatile start/stop triggering logic for potential and dry contacts, delivering millisecond precision for testing circuit breakers, contactors, and relays.",
    },
    {
      title: "TP-ER100 All-Terrain SF6 Gas Evacuating & Refilling Cart",
      description:
        "Rugged steel cart with four pneumatic tires designed to maneuver easily over crushed gravel switchyards, providing vacuum evacuation, pressure regulation, and leak-free SF6 cylinder refilling.",
    },
    {
      title: "Complete 15-Piece Precision Relay Toolkit",
      description:
        "Specialized non-magnetic adjustment tools, contact burnishers, spring tension gauges, and alignment keys tailored for protective relay calibration.",
    },
  ],

  benefits: [
    {
      id: "downtime-reduction",
      icon: "shield",
      title: "Minimizes Expensive Cable Outages",
      description:
        "Pinpoints cable fault locations quickly to avoid costly exploratory digging and restore power to distribution consumers in minimal time.",
    },
    {
      id: "gas-safety",
      icon: "gear",
      title: "Zero-Emission SF6 Handling",
      description:
        "Sealed valving and precision vacuum evacuation prevent greenhouse gas release while ensuring pure SF6 filling for maximum breaker insulation.",
    },
    {
      id: "versatility",
      icon: "briefcase",
      title: "Complete Maintenance Ready",
      description:
        "Equips utility teams with essential diagnostic tools for on-site commissioning and scheduled substation turnaround maintenance.",
    },
  ],

  cta: {
    title: "Need specialized cable fault or SF6 maintenance tools?",
    description:
      "Contact our utility instrumentation team for complete technical datasheets and customized equipment bundles.",
    primaryButtonText: "Inquire About Equipment",
    primaryButtonLink: "/contact?subject=Miscellaneous%20Testing%20Equipment",
  },
};

export default miscellaneousTestingEquipment;
