import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: PHASING OUT STICKS & PHASE COMPARATORS
   File: data/products/phasing-out-sticks.ts
   ================================================================ */

const phasingOutSticks: ProductData = {
  slug: "phasing-out-sticks",
  category: "Electrical Safety Equipment",
  title: "Phasing Out Sticks & Phase Comparators",
  description:
    "Dual-pole handheld high-voltage phasing sticks with direct-reading analog / digital kV meters for verifying correct phase matching across 15 kV & 36 kV busbars, transformers, and switchgears without potential transformers (PTs).",

  overview:
    "HVTI Phasing Out Sticks are high-precision bipole handheld test sets designed to verify phase synchronization and phase matching between two high-tension electrical supply sources directly at line voltage without needing potential transformers. Available in 15 kV and 36 kV AC models with direct kV meter readouts, high-dielectric interconnecting cables, and internal protective resistors to protect against inadvertent ground faults and short circuits.",

  highlights: [
    "Direct High-Voltage Phase Verification (15 kV & 36 kV)",
    "Bipole Handheld Design with Direct-Reading kV Meter",
    "Inbuilt High-Voltage Protective Resistors Against Faults",
    "Eliminates Need for Bulky Potential Transformers",
  ],

  renderType: "image",
  image: "/images/products/phasing-out-sticks.jpg",
  specImage: "/images/products/product-safety.jpg",

  engineeringAtAGlance: [
    {
      id: "direct-meter",
      icon: "testing",
      value: "Direct kV Readout",
      label: "METERING DISPLAY",
      description: "Displays zero voltage when in-phase; displays line-to-line voltage when 120° out-of-phase.",
      highlighted: true,
    },
    {
      id: "range",
      icon: "voltage",
      value: "15 kV & 36 kV Models",
      label: "VOLTAGE CLASSES",
      description: "Calibrated ranges covering 0 to 15 kV AC and 0 to 36 kV AC distribution networks.",
    },
    {
      id: "protection",
      icon: "shield",
      value: "Inbuilt HV Resistors",
      label: "CURRENT LIMITING",
      description: "Internal high-voltage damping resistors protect operators against accidental phase-to-earth faults.",
    },
    {
      id: "cable",
      icon: "cable",
      value: "High-Dielectric Lead",
      label: "INTERCONNECT CABLE",
      description: "Shielded high-voltage interconnecting lead with total dielectric operator isolation.",
    },
  ],

  metrics: [
    {
      id: "voltage-model",
      icon: "voltage",
      label: "VOLTAGE MODELS",
      value: "15 kV & 36 kV AC",
      subtext: "Direct line phase testing",
    },
    {
      id: "poles",
      icon: "field",
      label: "NUMBER OF POLES",
      value: "2 (Dual Bipole)",
      subtext: "Active sensing rods",
    },
    {
      id: "meter-accuracy",
      icon: "testing",
      label: "METER ACCURACY",
      value: "± 2.5% Full Scale",
      subtext: "Direct analog/digital kV",
    },
    {
      id: "safety-resistors",
      icon: "power",
      label: "INTERNAL RESISTANCE",
      value: "> 20 MΩ per rod",
      subtext: "High-voltage safety current limit",
    },
  ],

  specificationsTable: [
    {
      parameter: "Instrument Type",
      details: "Dual-pole handheld high-voltage phase comparator",
      range: "Bipole design with integrated precision kV meter",
    },
    {
      parameter: "Voltage Range Options",
      details: "Calibrated for standard distribution voltage networks",
      range: "Model 15 kV (0 – 15 kV AC) & Model 36 kV (0 – 36 kV AC)",
    },
    {
      parameter: "Phase Identification Indication",
      details: "Clear visual interpretation of phase displacement",
      range: "In-Phase: Minimal / 0V reading; Out-of-Phase: Full line-to-line kV reading",
    },
    {
      parameter: "Inbuilt Electrical Protection",
      details: "Integrated series high-voltage current-limiting resistors inside both poles",
      range: "Limits fault current to < 1 mA in case of flashover or ground contact",
    },
    {
      parameter: "Interconnecting Cable Specification",
      details: "Double-insulated high-dielectric flexible silicone interconnecting lead",
      range: "Length: 2.0 to 3.0 meters (Rated for full operating voltage)",
    },
    {
      parameter: "Insulated Pole Construction",
      details: "High-grade closed-cell fiberglass conforming to IEC 60855",
      range: "Class 'F' insulation with hand safety guards",
    },
    {
      parameter: "Storage & Transport Case",
      details: "Padded nylon / high-impact hard carrying case",
      range: "Protects meter and sensing poles during transport",
    },
  ],

  applications: [
    {
      id: "busbar-paralleling",
      title: "Substation Busbar Paralleling & Synchronizing",
      icon: "substation",
      isCenter: true,
    },
    {
      id: "transformers",
      title: "Transformer Secondary Phase Matching",
      icon: "transformer",
    },
    {
      id: "switchgears",
      title: "Ring Main Units (RMU) & VCB Panels",
      icon: "switchgear",
    },
    {
      id: "cables",
      title: "Cable Joint Phase Identification",
      icon: "cable",
    },
    {
      id: "generators",
      title: "Captive Generator Synchronizing Checks",
      icon: "generator",
    },
  ],

  features: [
    {
      title: "Direct High-Tension Phase Verification Without PTs",
      description:
        "Allows operators to measure phase relationship directly on live busbars and disconnector terminals without relying on secondary wiring or potential transformers.",
    },
    {
      title: "Direct Voltage Reading Analog / Digital kV Scale",
      description:
        "Gives immediate, unambiguous differential voltage readouts: 0 V indicates identical phase (safe to parallel), while line-to-line voltage confirms 120° out-of-phase condition.",
    },
    {
      title: "Dual High-Voltage Internal Safety Resistor Banks",
      description:
        "Both sensing rods contain non-inductive high-voltage resistor stacks that restrict measuring currents to sub-milliampere levels, guaranteeing operator safety.",
    },
    {
      title: "High-Dielectric Shielded Interconnecting Lead",
      description:
        "Reinforced high-voltage cable linking the master and slave poles provides total electrical isolation between poles even when touching grounded steelwork.",
    },
  ],

  benefits: [
    {
      id: "prevents-disaster",
      icon: "shield",
      title: "Prevents Catastrophic Short-Circuit Explosions",
      description:
        "Paralleling two out-of-phase power transformers causes catastrophic busbar short circuits and equipment destruction; phasing sticks guarantee correct synchronization.",
    },
    {
      id: "portability",
      icon: "briefcase",
      title: "Lightweight Single-Operator Verification",
      description:
        "Compact 2-pole design in a padded shoulder bag allows rapid phase checks across multiple substation panels during commissioning.",
    },
    {
      id: "accuracy",
      icon: "gear",
      title: "100% Unambiguous Phase Alignment",
      description:
        "Eliminates guesswork and wiring confusion when commissioning new underground feeders or connecting standby generators to utility busbars.",
    },
  ],

  cta: {
    title: "Need reliable phasing out sticks for your substation?",
    description:
      "Contact our high-voltage safety team to select the appropriate 15 kV or 36 kV model for your network.",
    primaryButtonText: "Request Phasing Stick Specs",
    primaryButtonLink: "/contact?subject=Phasing%20Out%20Sticks",
  },
};

export default phasingOutSticks;
