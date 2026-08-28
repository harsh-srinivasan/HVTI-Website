import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: DC EARTH FAULT LOCATOR
   File: data/products/dc-earth-fault-locator.ts
   ================================================================ */

const dcEarthFaultLocator: ProductData = {
  slug: "dc-earth-fault-locator",
  category: "Electrical Testing Equipment",
  title: "DC Earth Fault Locator",
  description:
    "Online ground fault detection and pinpoint localization system for floating DC battery distribution and control systems in substations and power generating stations without power interruption.",

  overview:
    "The HVTI DC Earth Fault Locator is an advanced dual-unit instrument designed to identify and pinpoint resistive or non-resistive current leakage paths from DC battery distribution systems to ground. Consisting of a Pulser Unit and a handheld high-sensitivity Pulse Detector with directional clamp-on sensors, the system tracks ground faults online without interrupting critical protection and control supplies. Built for hostile substation environments and supplied in a heavy-duty rugged Pelican carrying case.",

  highlights: [
    "Online Non-Invasive Fault Tracing",
    "Innovative Dual-Unit Design (Pulser + Detector)",
    "Dual Current Transformer Probes",
    "Zero Substation Power Interruption",
  ],

  renderType: "image",
  image: "/images/products/dc-earth-fault-locator.jpg",
  specImage: "/images/products/product-testing.jpg",

  engineeringAtAGlance: [
    {
      id: "design",
      icon: "control",
      value: "Dual-Unit Architecture",
      label: "SYSTEM DESIGN",
      description: "Dedicated Pulser unit generates distinctive test signal; handheld Detector pinpoints fault path.",
      highlighted: true,
    },
    {
      id: "operation",
      icon: "field",
      value: "Live Online Tracing",
      label: "OPERATING MODE",
      description: "Pinpoints earth faults on live 24 V, 48 V, 110 V, and 220 V DC battery banks without shutdown.",
    },
    {
      id: "sensitivity",
      icon: "testing",
      value: "Up to 100 kΩ Faults",
      label: "FAULT SENSITIVITY",
      description: "Detects high-resistance ground leakage paths and multiple simultaneous branch faults.",
    },
    {
      id: "probes",
      icon: "signal",
      value: "Dual CT Clamp Probes",
      label: "SENSOR PROBES",
      description: "Includes small and large current transformer clamps for various cable diameters.",
    },
  ],

  metrics: [
    {
      id: "system-voltage",
      icon: "voltage",
      label: "DC SYSTEM VOLTAGE",
      value: "24 V to 250 V DC",
      subtext: "Floating Battery Banks",
    },
    {
      id: "fault-resistance",
      icon: "power",
      label: "FAULT RESISTANCE",
      value: "0 to 100 kΩ",
      subtext: "High-sensitivity tracing",
    },
    {
      id: "pulse-current",
      icon: "current",
      label: "SIGNAL PULSE CURRENT",
      value: "< 5 mA",
      subtext: "Safe, non-tripping current",
    },
    {
      id: "enclosure",
      icon: "briefcase",
      label: "PROTECTION CASE",
      value: "Pelican Rugged",
      subtext: "Shock & weather resistant",
    },
  ],

  specificationsTable: [
    {
      parameter: "Applicable DC System Voltages",
      details: "Compatible with ungrounded floating DC supply networks",
      range: "24 V, 48 V, 110 V, 220 V, 250 V DC",
    },
    {
      parameter: "Fault Resistance Range",
      details: "High-sensitivity ground fault detection",
      range: "0 Ω (Dead ground) up to 100 kΩ (High resistance)",
    },
    {
      parameter: "Signal Injection Method",
      details: "Low-frequency distinctive current pulse train",
      range: "Pulsating DC signal < 5 mA peak",
    },
    {
      parameter: "Detection Probes Included",
      details: "Shielded directional clamp-on current transformers",
      range: "Small clamp (up to 20 mm cable) & Large clamp (up to 50 mm cable)",
    },
    {
      parameter: "Detector Display & Indication",
      details: "Center-zero analog / digital directional meter & audible tone",
      range: "Directional left/right fault orientation",
    },
    {
      parameter: "Power Supply",
      details: "Internal rechargeable battery in detector; pulser powered by DC bus",
      range: "Rechargeable NiMH / Li-Ion with smart charger",
    },
    {
      parameter: "Complete Kit Inclusions",
      details: "Turnkey deployment package",
      range: "Pulser, Detector, 2 CT probes, External Pulse Lamp, Fuses, Pelican Case",
    },
    {
      parameter: "Operating Environment",
      details: "Substation yard and control room grade",
      range: "-10°C to +55°C, up to 95% RH non-condensing",
    },
  ],

  applications: [
    {
      id: "substations",
      title: "Substation DC Control Circuits",
      icon: "substation",
      isCenter: true,
    },
    {
      id: "power-plants",
      title: "Thermal & Hydro Power Plants",
      icon: "generator",
    },
    {
      id: "railways",
      title: "Railway Traction Substations",
      icon: "cable",
    },
    {
      id: "telecom",
      title: "Telecom & UPS DC Plants",
      icon: "control",
    },
    {
      id: "industrial-dc",
      title: "Industrial Battery Rooms",
      icon: "transformer",
    },
  ],

  features: [
    {
      title: "Live Non-Invasive Fault Tracking Without Power Shutdown",
      description:
        "Locates resistive and capacitive earth faults on energized DC systems without tripping sensitive protection relays or cutting DC control power.",
    },
    {
      title: "Innovative Dual-Unit Design (Pulser & Pulse Detector)",
      description:
        "The Pulser unit injects a safe, distinctive current pulse through the DC ground loop, while the handheld Detector traces the signal directly to the faulty feeder branch.",
    },
    {
      title: "Directional Clamp-On Current Probes",
      description:
        "Directional sensor clamps eliminate trial-and-error by indicating whether the fault lies downstream or upstream of the measuring point.",
    },
    {
      title: "Immunity to Large System Distributed Capacitance",
      description:
        "Advanced digital filtering eliminates false readings caused by high distributed cable capacitance and AC ripple voltage on the DC bus.",
    },
    {
      title: "Rugged Pelican Case & Complete Field Accessories",
      description:
        "Shipped ready for immediate deployment with small/large CT probes, external pulse indicator lamp, spare fuses, and heavy-duty leads.",
    },
  ],

  benefits: [
    {
      id: "uptime",
      icon: "shield",
      title: "Prevents Catastrophic Relay Maloperation",
      description:
        "DC earth faults can cause protective relays to trip falsely or fail to trip during actual faults; locating them quickly prevents outages.",
    },
    {
      id: "efficiency",
      icon: "gear",
      title: "Cuts Troubleshooting Time by Over 80%",
      description:
        "Eliminates sectionalizing and breaker disconnection methods, reducing hours of manual searching to a few minutes of systematic tracing.",
    },
    {
      id: "safety",
      icon: "briefcase",
      title: "Complete Operator Isolation",
      description:
        "High-dielectric sensor probes provide non-contact current sensing, keeping maintenance engineers completely isolated from live terminals.",
    },
  ],

  cta: {
    title: "Need an online DC ground fault detection solution?",
    description:
      "Speak with our substation protection engineers to learn how the DC Earth Fault Locator protects your critical control supplies.",
    primaryButtonText: "Request Quotation",
    primaryButtonLink: "/contact?subject=DC%20Earth%20Fault%20Locator",
  },
};

export default dcEarthFaultLocator;
