import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: HELMET MOUNTED VOLTAGE DETECTOR (HVTI HMD)
   File: data/products/helmet-mounted-voltage-detector.ts
   ================================================================ */

const helmetMountedVoltageDetector: ProductData = {
  slug: "helmet-mounted-voltage-detector",
  category: "Electrical Safety Equipment",
  title: "Helmet Mounted Voltage Detector (HVTI HMD)",
  description:
    "Hands-free electric field proximity warning detector easily mounted on safety helmets, hard hats, or wrists with 360° electrostatic sensing, > 70 dB audible buzzer, high-intensity LEDs, and USB-C recharging.",

  overview:
    "The HVTI Helmet Mounted Voltage Detector (HVTI HMD) is an essential hands-free safety device designed to boost electrical safety and personal hazard detection in high-risk high-voltage environments. Easily attached to standard utility helmets, hard hats, wristbands, or body harnesses, the HMD detects the electrostatic field of energized conductors and delivers early dual audio (> 70 dB) and visual LED warnings before personnel cross minimum approach safety distances.",

  highlights: [
    "Hands-Free 360° Electrostatic Proximity Sensing",
    "Dual High-Intensity LED Flashers & > 70 dB Buzzer",
    "Universal Helmet, Hard Hat & Wrist Mount",
    "Rechargeable Battery with USB Type-C Fast Charging",
  ],

  renderType: "3d",
  modelUrl: "/models/detector_helmet_mounted.glb",
  image: "/images/products/helmet-mounted-voltage-detector.jpg",
  specImage: "/images/products/product-safety.jpg",

  engineeringAtAGlance: [
    {
      id: "proximity",
      icon: "signal",
      value: "Hands-Free 360°",
      label: "SENSING FIELD",
      description: "Omnidirectional capacitive sensor monitors electric fields regardless of head orientation.",
      highlighted: true,
    },
    {
      id: "alarm",
      icon: "testing",
      value: "> 70 dB + Flash LEDs",
      label: "WARNING ALARM",
      description: "High-decibel buzzer and flashing ultra-bright red LEDs alert operator instantly.",
    },
    {
      id: "voltage-range",
      icon: "voltage",
      value: "1 kV to 500 kV",
      label: "VOLTAGE SENSITIVITY",
      description: "Calibrated warning distances across distribution lines, switchyards, and transmission towers.",
    },
    {
      id: "charging",
      icon: "power",
      value: "USB-C Rechargeable",
      label: "BATTERY SYSTEM",
      description: "Long-life internal lithium polymer battery supporting continuous full-shift operation.",
    },
  ],

  metrics: [
    {
      id: "voltage-range",
      icon: "voltage",
      label: "DETECTABLE VOLTAGE",
      value: "1 kV – 500 kV AC",
      subtext: "50 Hz / 60 Hz power frequency",
    },
    {
      id: "sound-level",
      icon: "signal",
      label: "AUDIO ALARM",
      value: "> 70 dB at 1 Meter",
      subtext: "Loud piercing buzzer",
    },
    {
      id: "battery-life",
      icon: "power",
      label: "BATTERY LIFE",
      value: "> 50 Hours Standby",
      subtext: "USB-C fast recharging",
    },
    {
      id: "weight",
      icon: "briefcase",
      label: "DEVICE WEIGHT",
      value: "< 75 Grams",
      subtext: "Ultra-lightweight helmet clip",
    },
  ],

  specificationsTable: [
    {
      parameter: "Operating Voltage Detection Range",
      details: "Non-contact capacitive electric field proximity detection",
      range: "1 kV up to 500 kV AC (50/60 Hz)",
    },
    {
      parameter: "Detection Sensing Orientation",
      details: "Omnidirectional 360° spherical electrostatic field sensor",
      range: "Uniform sensitivity front, rear, sides, and top",
    },
    {
      parameter: "Warning Alarm System",
      details: "Synchronized dual audible buzzer and high-intensity LED light pulses",
      range: "Audible: > 70 dB at 1 meter; Visual: Ultra-bright red flashing LEDs",
    },
    {
      parameter: "Mounting Versatility",
      details: "Includes universal helmet clip, wrist strap, and harness bracket",
      range: "Fits all standard industrial safety hard hats and helmets",
    },
    {
      parameter: "Power Supply & Charging",
      details: "Internal high-capacity lithium-ion polymer rechargeable battery",
      range: "Standard USB Type-C charging port (Full charge in < 2 hours)",
    },
    {
      parameter: "Environmental Ingress & Durability",
      details: "Drop-tested rugged ABS enclosure with shock and vibration rating",
      range: "IP54 dust and splash resistant (-15°C to +55°C)",
    },
    {
      parameter: "Self-Test / Battery Health Function",
      details: "Built-in self-test button verifying sensor circuitry and battery level",
      range: "LED battery state indicator with low-battery warning chirp",
    },
  ],

  applications: [
    {
      id: "substation-yard",
      title: "Substation Yard Walking Inspections",
      icon: "substation",
      isCenter: true,
    },
    {
      id: "overhead-lines",
      title: "Transmission Tower & Pole Maintenance",
      icon: "field",
    },
    {
      id: "bucket-trucks",
      title: "Elevated Bucket Truck & Aerial Work",
      icon: "gear",
    },
    {
      id: "indoor-switchgear",
      title: "Indoor Switchgear & Transformer Rooms",
      icon: "switchgear",
    },
    {
      id: "emergency-rescue",
      title: "Storm Damage Emergency Line Crew",
      icon: "shield",
    },
  ],

  features: [
    {
      title: "Continuous Hands-Free Proximity Protection",
      description:
        "Operates autonomously on the technician's hard hat, warning them if they inadvertently approach energized high-voltage busbars, conductors, or dropped lines.",
    },
    {
      title: "Omnidirectional 360° Electric Field Sensing",
      description:
        "Advanced electrostatic antenna monitors the surrounding field uniformly, ensuring warnings fire regardless of whether the hazard is behind, above, or beside the worker.",
    },
    {
      title: "Ultra-Lightweight (< 75g) Ergonomic Design",
      description:
        "Compact, low-profile clip attaches securely to the side or rim of any hard hat without causing neck strain or shifting helmet balance.",
    },
    {
      title: "USB Type-C Fast Charging & Long-Life Lithium Cell",
      description:
        "Conveniently recharges with standard phone cables, providing over 50 hours of continuous active monitoring per charge.",
    },
    {
      title: "Vibration & Shock-Rated Rugged Enclosure",
      description:
        "Built to withstand rough utility field use, drops from heights, rain splashes, and heavy substation switchyard environments.",
    },
  ],

  benefits: [
    {
      id: "safety-buffer",
      icon: "shield",
      title: "Prevents Inadvertent Entry into Live Zones",
      description:
        "Provides an essential psychological safety buffer for workers navigating congested substations with mixed live and de-energized bays.",
    },
    {
      id: "comfort",
      icon: "gear",
      title: "Zero Distraction for Linemen",
      description:
        "Linemen keep both hands completely free for climbing, tools, and line maintenance while enjoying continuous background protection.",
    },
    {
      id: "cost-effective",
      icon: "briefcase",
      title: "Universal Fleet Deployment",
      description:
        "Affordable personal protective equipment (PPE) enhancement easily deployed to every utility lineman and contractor.",
    },
  ],

  safetySimulator: {
    enabled: true,
    type: "proximity",
    badge: "Interactive Proximity Simulator",
    title: "Hands-Free Electric Field Hazard & Proximity Simulator",
    subtitle:
      "Simulate technician movement near energized high-voltage panels to experience 360° electrostatic proximity detection in real time.",
    description:
      "Move the avatar along the walking path towards the energized high-voltage panel on the right. When the technician enters the electrostatic hazard radius of the charged equipment, the helmet detector immediately triggers high-decibel audible beeping and red strobe warnings.",
    productModel: "HVTI Helmet Mounted Voltage Detector (HMD)",
    defaultVoltage: 33,
    voltageOptions: [
      {
        label: "1 kV",
        value: 1,
        unit: "kV",
        category: "Low Voltage Distribution",
        description: "1 kV auxiliary power panel & motor control center",
        warningDistanceMeters: 0.4,
      },
      {
        label: "3.3 kV",
        value: 3.3,
        unit: "kV",
        category: "Medium Voltage Plant",
        description: "3.3 kV industrial plant distribution switchboard",
        warningDistanceMeters: 0.7,
      },
      {
        label: "11 kV",
        value: 11,
        unit: "kV",
        category: "Distribution Feeder",
        description: "11 kV overhead distribution line / kiosk breaker",
        warningDistanceMeters: 1.1,
      },
      {
        label: "33 kV",
        value: 33,
        unit: "kV",
        category: "Substation Incomer",
        description: "33 kV primary substation switchgear panel",
        warningDistanceMeters: 1.6,
      },
      {
        label: "66 kV",
        value: 66,
        unit: "kV",
        category: "Sub-Transmission",
        description: "66 kV regional transformer terminal bay",
        warningDistanceMeters: 2.4,
      },
      {
        label: "132 kV",
        value: 132,
        unit: "kV",
        category: "Grid Transmission",
        description: "132 kV outdoor switchyard busbar & gantry",
        warningDistanceMeters: 3.5,
      },
      {
        label: "220 kV",
        value: 220,
        unit: "kV",
        category: "Bulk Transmission",
        description: "220 kV substation interconnector bay",
        warningDistanceMeters: 4.6,
      },
      {
        label: "500 kV",
        value: 500,
        unit: "kV",
        category: "Extra High Voltage (EHV)",
        description: "500 kV bulk grid transmission corridor",
        warningDistanceMeters: 6.2,
      },
    ],
  },

  cta: {
    title: "Equip your field crews with helmet-mounted voltage detectors?",
    description:
      "Contact our safety equipment division for fleet pricing, bulk orders, and custom branding for your utility organization.",
    primaryButtonText: "Request HMD Pricing",
    primaryButtonLink: "/contact?subject=Helmet%20Mounted%20Voltage%20Detector",
  },
};

export default helmetMountedVoltageDetector;
