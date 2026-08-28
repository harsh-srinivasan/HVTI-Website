import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: PARTIAL DISCHARGE (PD) ONLINE MONITORING
   File: data/products/partial-discharge-online-monitoring.ts
   ================================================================ */

const partialDischargeOnlineMonitoring: ProductData = {
  slug: "partial-discharge-online-monitoring",
  category: "Condition Monitoring",
  title: "Continuous Online Partial Discharge (PD) Monitoring System (PD Annunciator™)",
  description:
    "24/7 online continuous partial discharge monitoring and alarm system for high-voltage switchgear panels, ring main units (RMUs), power transformers, and underground cables featuring the 3-channel PD Annunciator™ with TEV, HFCT, and ultrasonic acoustic sensors.",

  overview:
    "The PD Annunciator™ represents a major breakthrough in continuous partial discharge monitoring for metallic enclosed switchgear, RMUs, dry-type transformers, and cable terminations. Featuring a dedicated three-channel acquisition module combining Transient Earth Voltage (TEV), High Frequency Current Transformer (HFCT), and Ultrasonic Acoustic sensing, the system continuously tracks partial discharge activity, performs trending evolution analysis, activates local multi-level LED alarms, and transmits real-time telemetry to substation SCADA systems.",

  highlights: [
    "3-Channel Synchronous Acquisition Module (PD Annunciator™)",
    "Combined TEV, HFCT & Ultrasonic Acoustic Sensors",
    "Continuous Trending Evolution & Pulse Count Analysis",
    "Direct SCADA Modbus & Local Multi-Stage LED Alarms",
  ],

  renderType: "image",
  image: "/images/products/partial-discharge-online-monitoring.jpg",
  specImage: "/images/products/product-monitoring.jpg",

  engineeringAtAGlance: [
    {
      id: "module",
      icon: "control",
      value: "3-Channel Acquisition",
      label: "PD ANNUNCIATOR™",
      description: "Dedicated multi-sensor processor combining TEV, HFCT, and acoustic sensing in one chassis.",
      highlighted: true,
    },
    {
      id: "sensors",
      icon: "signal",
      value: "TEV / HFCT / Acoustic",
      label: "SENSOR COMPATIBILITY",
      description: "Non-invasive sensors mounted externally on switchgear enclosures, cable shields, and tanks.",
    },
    {
      id: "trending",
      icon: "testing",
      value: "Pulse Energy & Count",
      label: "TRENDING ALGORITHM",
      description: "Tracks apparent charge amplitude (dBmV / pC), repetition rate, and trending severity over time.",
    },
    {
      id: "alarms",
      icon: "shield",
      value: "Multi-Level Relay Alarms",
      label: "ALERT SYSTEM",
      description: "Local visual LED indicators plus remote dry-contact and SCADA Modbus alert triggers.",
    },
  ],

  metrics: [
    {
      id: "tev-range",
      icon: "voltage",
      label: "TEV MEASUREMENT",
      value: "0 to 60 dBmV",
      subtext: "Resolution 1 dBmV",
    },
    {
      id: "acoustic-range",
      icon: "signal",
      label: "ACOUSTIC SENSING",
      value: "-6 to +70 dBμV",
      subtext: "40 kHz ultrasonic center",
    },
    {
      id: "hfct-bandwidth",
      icon: "frequency",
      label: "HFCT BANDWIDTH",
      value: "500 kHz to 50 MHz",
      subtext: "High-frequency cable CT",
    },
    {
      id: "channels",
      icon: "power",
      label: "CHANNELS PER NODE",
      value: "3 Synchronous Inputs",
      subtext: "Expandable across switchboard",
    },
  ],

  specificationsTable: [
    {
      parameter: "System Architecture",
      details: "Distributed online monitoring node with central master station display",
      range: "PD Annunciator™ 3-channel acquisition unit per switchgear cubicle",
    },
    {
      parameter: "Transient Earth Voltage (TEV) Sensor",
      details: "Capacitive sensor measuring high-frequency voltage pulses on metallic panel exterior",
      range: "0 to 60 dBmV (Bandwidth: 3 MHz to 100 MHz)",
    },
    {
      parameter: "High Frequency Current Transformer (HFCT)",
      details: "Split-core clamp-on sensor installed over cable earthing sheath/neutral",
      range: "Transfer impedance: 4.5 V/A; Bandwidth: 500 kHz to 50 MHz",
    },
    {
      parameter: "Ultrasonic Acoustic Sensor",
      details: "Contact piezoelectric transducer for surface tracking and arcing detection",
      range: "Center frequency: 40 kHz (± 1 kHz); Dynamic range: -6 dBμV to 70 dBμV",
    },
    {
      parameter: "Sampling & Digital Signal Processing",
      details: "High-speed synchronous multi-channel sampling with noise rejection filters",
      range: "Distinguishes true internal insulation PD from external ambient noise",
    },
    {
      parameter: "Alarm Indication & Relays",
      details: "Front panel tri-color LED status (Normal / Warning / Alarm) + programmable relays",
      range: "Form-C dry contacts (250V AC / 5A) for trip and warning sirens",
    },
    {
      parameter: "Communication Interfaces",
      details: "Isolated RS-485 serial bus and Ethernet port with auto-baud rate support",
      range: "Modbus RTU / TCP protocol for direct SCADA / DCS integration",
    },
    {
      parameter: "Power Supply Requirements",
      details: "Universal AC/DC auxiliary power supply input",
      range: "85 – 264 V AC / 110 – 370 V DC, power consumption < 10 W",
    },
  ],

  applications: [
    {
      id: "switchgear",
      title: "Medium & High Voltage Switchgear Panels",
      icon: "switchgear",
      isCenter: true,
    },
    {
      id: "rmu",
      title: "Ring Main Units (RMU)",
      icon: "substation",
    },
    {
      id: "dry-transformers",
      title: "Cast Resin Dry-Type Transformers",
      icon: "transformer",
    },
    {
      id: "cable-terminations",
      title: "Power Cable Termination Boxes",
      icon: "cable",
    },
    {
      id: "generator-terminals",
      title: "Generator Terminal Enclosures",
      icon: "generator",
    },
  ],

  features: [
    {
      title: "Next-Generation PD Annunciator™ 3-Channel Acquisition Engine",
      description:
        "Integrates TEV, HFCT, and acoustic sensing into a single compact DIN-rail or panel-mounted unit, providing full 360-degree insulation health tracking of the cubicle.",
    },
    {
      title: "Intelligent Dual-Threshold Warning & Alarm Matrix",
      description:
        "Configurable warning and critical alarm thresholds alert maintenance teams at the first sign of insulation degradation and escalate as discharge intensity increases.",
    },
    {
      title: "Non-Invasive Magnetic & Split-Core Sensor Mounting",
      description:
        "Sensors attach externally to panel metalwork and cable grounding straps without requiring equipment shutdowns or internal high-voltage compartment modifications.",
    },
    {
      title: "Advanced Trend Evolution & Pattern Analysis",
      description:
        "Continuously logs pulse recurrence frequency, peak amplitude, and energy trends over months, enabling predictive maintenance algorithms to project remaining insulation life.",
    },
    {
      title: "Direct Substation SCADA & Central Software Interfacing",
      description:
        "Native Modbus communication allows central SCADA systems to poll discharge levels across dozens of switchgear bays in real time.",
    },
  ],

  benefits: [
    {
      id: "explosion-prevention",
      icon: "shield",
      title: "Eliminates Explosive Switchgear Failures",
      description:
        "Over 85% of disruptive switchgear failures are preceded by partial discharge activity; continuous monitoring gives weeks of advance warning.",
    },
    {
      id: "safety",
      icon: "gear",
      title: "Protects Substation Personnel",
      description:
        "Ensures switchgear panels are free from dangerous internal arcing defects before operators enter substation rooms for manual switching operations.",
    },
    {
      id: "uptime",
      icon: "briefcase",
      title: "Optimizes Capital Asset Longevity",
      description:
        "Targeted cleaning and re-insulation of defective bushings or cable terminations prevents complete switchgear replacement.",
    },
  ],

  cta: {
    title: "Need 24/7 online partial discharge monitoring for your switchboards?",
    description:
      "Consult with our condition monitoring specialists to design a turnkey PD Annunciator™ deployment for your critical substations.",
    primaryButtonText: "Request PD System Specs",
    primaryButtonLink: "/contact?subject=Partial%20Discharge%20Online%20Monitoring",
  },
};

export default partialDischargeOnlineMonitoring;
