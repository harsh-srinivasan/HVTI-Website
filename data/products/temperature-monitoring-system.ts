import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: TEMPERATURE MONITORING SYSTEM
   File: data/products/temperature-monitoring-system.ts
   ================================================================ */

const temperatureMonitoringSystem: ProductData = {
  slug: "temperature-monitoring-system",
  category: "Condition Monitoring",
  title: "Continuous Online Temperature Monitoring System",
  description:
    "Real-time 24/7 non-invasive thermal monitoring system using passive wireless surface acoustic wave (SAW) and fiber-optic sensors for high-voltage busbars, switchgear contacts, cable terminations, and transformer connections.",

  overview:
    "HVTI Temperature Monitoring Systems deliver continuous, non-line-of-sight thermal health tracking of critical high-voltage assets. Using passive battery-free wireless sensors or fiber optic probes installed directly on energized busbars, contact arms, and cable joints, the system captures overheating anomalies caused by loose connections or contact degradation. Features seamless SCADA, BMS, and HMI integration via Modbus RTU/TCP protocols with zero electromagnetic cross-interference and zero sensor maintenance.",

  highlights: [
    "Non-Line-of-Sight Wireless & Fiber Optic Sensors",
    "Passive Battery-Free Sensor Technology (Zero Maintenance)",
    "Seamless SCADA, BMS & Modbus RTU Integration",
    "24/7 Real-Time Thermal Anomaly & Trend Alarming",
  ],

  renderType: "image",
  image: "/images/products/temperature-monitoring-system.jpg",
  specImage: "/images/products/product-monitoring.jpg",

  engineeringAtAGlance: [
    {
      id: "sensors",
      icon: "signal",
      value: "Passive Battery-Free",
      label: "SENSOR TYPE",
      description: "Maintenance-free RF surface acoustic wave (SAW) sensors powered by reader interrogation pulses.",
      highlighted: true,
    },
    {
      id: "range",
      icon: "testing",
      value: "-40°C to +150°C",
      label: "TEMPERATURE RANGE",
      description: "High-accuracy thermal measurement up to +150°C with ± 1°C precision.",
    },
    {
      id: "isolation",
      icon: "voltage",
      value: "Up to 800 kV",
      label: "HIGH VOLTAGE ISOLATION",
      description: "Direct attachment on energized high-voltage conductors with zero dielectric degradation.",
    },
    {
      id: "scada",
      icon: "control",
      value: "Modbus RTU / TCP",
      label: "SCADA CONNECTIVITY",
      description: "Transmits real-time thermal telemetry directly into substation control room automation.",
    },
  ],

  metrics: [
    {
      id: "temp-range",
      icon: "testing",
      label: "MEASUREMENT RANGE",
      value: "-40°C to +150°C",
      subtext: "High-temperature continuous",
    },
    {
      id: "accuracy",
      icon: "signal",
      label: "ACCURACY",
      value: "± 1.0°C",
      subtext: "High resolution 0.1°C",
    },
    {
      id: "channels",
      icon: "control",
      label: "MONITORING POINTS",
      value: "Up to 60 Sensors / Hub",
      subtext: "Multi-point switchgear busbars",
    },
    {
      id: "communication",
      icon: "power",
      label: "INTERFACE PROTOCOL",
      value: "RS485 / Modbus / Ethernet",
      subtext: "Substation SCADA ready",
    },
  ],

  specificationsTable: [
    {
      parameter: "Sensor Technology Options",
      details: "Passive Surface Acoustic Wave (SAW) / Multi-channel Fiber Optic (GaAs / FBG)",
      range: "Battery-free, RF interrogation or pure optical fiber",
    },
    {
      parameter: "Measurement Temperature Range",
      details: "Calibrated across industrial and high-voltage ambient spans",
      range: "-40°C to +150°C (Extendible to +200°C for specialized probes)",
    },
    {
      parameter: "Measurement Accuracy & Resolution",
      details: "High repeatability with zero drift over years of continuous operation",
      range: "Accuracy: ± 1.0°C; Resolution: 0.1°C",
    },
    {
      parameter: "Dielectric Insulation Level",
      details: "Compliant with medium and high voltage substation safety clearances",
      range: "Tested for installation on conductors up to 800 kV",
    },
    {
      parameter: "Wireless Transmission Distance",
      details: "Non-line-of-sight RF transmission through metallic switchgear compartments",
      range: "Up to 10 meters inside closed metalclad panels",
    },
    {
      parameter: "Central Processing Unit (Hub)",
      details: "Panel-mounted transceiver with color OLED display and alarm relay contacts",
      range: "Monitors up to 60 individual wireless temperature sensor nodes",
    },
    {
      parameter: "Communication Interfaces",
      details: "Dual RS-485 serial ports and 10/100 Mbps RJ45 Ethernet port",
      range: "Modbus RTU, Modbus TCP/IP, IEC 61850 protocol support",
    },
    {
      parameter: "Alarm Outputs",
      details: "Programmable high-temperature threshold and rate-of-rise (ΔT) dry contacts",
      range: "4 programmable form-C relay outputs (250V AC / 5A)",
    },
  ],

  applications: [
    {
      id: "switchgear-contacts",
      title: "Switchgear Spouts & Tulip Contacts",
      icon: "switchgear",
      isCenter: true,
    },
    {
      id: "busbar-joints",
      title: "Main Substation Busbar Bolted Joints",
      icon: "substation",
    },
    {
      id: "cable-terminations",
      title: "HV Power Cable Termination Elbows",
      icon: "cable",
    },
    {
      id: "transformer-bushings",
      title: "Transformer Bushing Connections",
      icon: "transformer",
    },
    {
      id: "generator-leads",
      title: "Generator Isolated Phase Bus (IPB)",
      icon: "generator",
    },
  ],

  features: [
    {
      title: "Non-Line-of-Sight Thermal Tracking in Sealed Compartments",
      description:
        "Unlike infrared cameras which cannot see through closed metal panels, RF wireless and fiber sensors monitor energized joints 24/7 inside sealed, arc-resistant cubicles.",
    },
    {
      title: "Zero-Maintenance Passive Battery-Free Sensors",
      description:
        "Sensors contain no batteries, electrochemical cells, or active silicon chips, ensuring an infinite operating lifespan with zero scheduled sensor replacements.",
    },
    {
      title: "Early Thermal Runaway Detection via Rate-of-Rise (ΔT) Alarms",
      description:
        "Advanced firmware analyzes differential temperature between phases and ambient air, triggering early warning alarms long before contacts reach critical flashover temperatures.",
    },
    {
      title: "Seamless Integration with Substation SCADA & BMS",
      description:
        "Standard Modbus RTU/TCP telemetry streams live temperature data directly to central SCADA systems, power quality software, and cloud monitoring dashboards.",
    },
    {
      title: "Immunity to High Electromagnetic Fields & Partial Discharge",
      description:
        "Engineered with robust spread-spectrum communication and shielding that operates flawlessly adjacent to 400 kV switching surges and arc flash transients.",
    },
  ],

  benefits: [
    {
      id: "fire-prevention",
      icon: "shield",
      title: "Prevents Catastrophic Switchgear Arc Fires",
      description:
        "Detects loose busbar bolts and oxidizing contact fingers before thermal runaway causes catastrophic explosive phase-to-phase flashovers.",
    },
    {
      id: "predictive-maintenance",
      icon: "gear",
      title: "Enables True Condition-Based Maintenance (CBM)",
      description:
        "Eliminates unnecessary time-based outages by alerting technicians only when specific contact points exhibit abnormal thermal loading.",
    },
    {
      id: "uninterrupted-service",
      icon: "briefcase",
      title: "Continuous 24/7 Asset Health Visibility",
      description:
        "Provides continuous visibility during peak electrical loading conditions when periodic thermal imaging scans cannot be conducted.",
    },
  ],

  cta: {
    title: "Ready to protect your switchgears with online temperature monitoring?",
    description:
      "Our condition monitoring engineers will help you design the optimal sensor layout and communication architecture for your substation.",
    primaryButtonText: "Request Technical Proposal",
    primaryButtonLink: "/contact?subject=Temperature%20Monitoring%20System",
  },
};

export default temperatureMonitoringSystem;
