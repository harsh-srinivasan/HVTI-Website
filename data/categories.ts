import { CategoryData } from "@/types/category";

/* ================================================================
   HVTI MASTER CATEGORY & PRODUCT TAXONOMY DATA
   File: data/categories.ts

   Authoritative product dataset verified against the official HVTI catalogue.
   ================================================================ */

export const categoriesData: Record<string, CategoryData> = {
  "electrical-testing-equipment": {
    slug: "electrical-testing-equipment",
    title: "Electrical Testing Equipment",
    eyebrow: "ELECTRICAL TECHNOLOGY FOR A SAFER FUTURE",
    tagline: "Smarter Equipment for Safer Electrical Systems",
    description:
      "Advanced electrical testing, safety, condition monitoring, and diagnostics engineered for high-voltage power transmission, distribution substations, and heavy industrial utilities.",
    heroImage: "/images/products/product-testing.jpg",
    stats: [
      { value: "Up to 800 kV", label: "Maximum Voltage Capability" },
      { value: "100% In-House", label: "Design & Calibration" },
      { value: "PD-Free", label: "Ultra-Low Noise Architecture" },
    ],
    products: [
      {
        id: "hv-ac-dc-testing-kits",
        slug: "high-voltage-ac-testing-kits",
        title: "High Voltage AC / DC Testing Kits (HIPOT KITS)",
        subtitle: "Motors, Generators, Cables & Transformers",
        description:
          "High-voltage AC and DC hipot test kits engineered for proof testing and dielectric withstand diagnostics of electrical apparatus, generators, cables, and power transformers.",
        features: [
          {
            title: "AC & DC High Voltage Testing",
            description: "Wide voltage range from 25 kV to 300 kV AC/DC in various mA and kVA ratings for diverse substation testing.",
          },
          {
            title: "Automated & Manual Control Systems",
            description: "Equipped with motorized voltage control, digital timing, and customizable rate of voltage rise (dV/dt).",
          },
          {
            title: "PD-Free & High-Precision Design",
            description: "Ultra-low partial discharge baseline for laboratory grade and rugged on-site field insulation diagnostics.",
          },
        ],
        button: "View Product",
        image: "/images/products/hv-ac-dc-testing-kits.png",
        badge: "25 – 300 kV AC",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
      {
        id: "ultra-light-hv-dc-test-sets",
        slug: "ultra-light-hv-dc-test-sets",
        title: "Ultra Light High Voltage DC Test Sets",
        subtitle: "Field Portable High-Voltage DC Diagnostics",
        description:
          "Ultra-lightweight, field-portable DC high-voltage test sets designed for on-site cable testing, surge arresters, and electrical utility maintenance.",
        features: [
          {
            title: "Ultra-Lightweight Form Factor",
            description: "Optimized power-to-weight ratio for easy one-man field transportation and rapid on-site setup.",
          },
          {
            title: "Digital Voltage & Current Monitoring",
            description: "Precision digital metering displaying breakdown voltage, leakage current, and automatic trip threshold.",
          },
          {
            title: "Automatic Cable Discharge Protection",
            description: "Integrated high-capacity internal discharge resistor for safe discharge of capacitive loads upon test completion.",
          },
        ],
        button: "View Product",
        image: "/images/products/ultra-light-hv-dc-test-sets.jpg",
        badge: "Lightweight DC",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
      {
        id: "hv-ac-dc-dividers",
        slug: "hv-ac-dc-dividers",
        title: "High Voltage AC/DC Dividers",
        subtitle: "Precision High-Voltage Calibration & Measurement",
        description:
          "High-precision resistive and capacitive voltage dividers engineered for accurate laboratory and field measurement of AC, DC, and impulse high-voltage waveforms.",
        features: [
          {
            title: "Universal AC & DC Voltage Measurement",
            description: "Compatible with power frequency AC, pure DC, and high-frequency transient impulse voltage verification.",
          },
          {
            title: "Ultra-Low Temperature Coefficient",
            description: "Built with high-stability precision elements ensuring minimal drift across wide temperature variations.",
          },
          {
            title: "Standard BNC Signal Output",
            description: "Direct connection to digital oscilloscopes, data loggers, and precision voltmeter instrumentation.",
          },
        ],
        button: "View Product",
        image: "/images/products/hv-ac-dc-dividers.jpg",
        badge: "Precision Measurement",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
      {
        id: "current-injection-testing-sets",
        slug: "current-injection-testing-sets",
        title: "Primary & Secondary Current Injection Testing Sets",
        subtitle: "Relay, CT & Circuit Breaker Commissioning",
        shortDescription:
          "Heavy-duty primary and secondary current injection sets for testing protective relays, current transformers (CTs), switchgears, and circuit breaker trip units.",
        description:
          "Heavy-duty primary and secondary current injection sets for testing protective relays, current transformers (CTs), switchgears, and circuit breaker trip units under real load conditions.",
        features: [
          {
            title: "High Current Injection Capacity",
            description: "Continuous and short-duration injection up to 5000 Amperes for high-voltage substation commissioning.",
          },
          {
            title: "Integrated Digital Timer & Phase Angle Meter",
            description: "High-accuracy timing measurement to milliseconds for tripping characteristics and phase-shift verification.",
          },
          {
            title: "Rugged Transportable Enclosure",
            description: "Castor-mounted industrial chassis built for harsh substation yards and switchgear testing bays.",
          },
        ],
        button: "View Product",
        image: "/images/products/current-injection-testing-sets.jpg",
        badge: "High Current Injection",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
      {
        id: "dc-earth-fault-locator",
        slug: "dc-earth-fault-locator",
        title: "DC Earth Fault Locator",
        subtitle: "Online Substation DC Floating Battery System Diagnostics",
        description:
          "Online ground fault detection system for locating earth faults in control, protection, and DC floating battery supply circuits without shutting down power.",
        features: [
          {
            title: "Live Non-Invasive Fault Tracking",
            description: "Detects and pinpoints earth faults online without interrupting critical DC control power supplies.",
          },
          {
            title: "High Sensitivity Resistance Detection",
            description: "Capable of detecting high-resistance ground faults up to hundreds of kilo-ohms with pinpoint direction.",
          },
          {
            title: "Directional Clamp-On Current Sensor",
            description: "Easy-to-use handheld sensor indicating the exact feeder branch and physical location of the fault.",
          },
        ],
        button: "View Product",
        image: "/images/products/dc-earth-fault-locator.jpg",
        badge: "Online Fault Detection",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
      {
        id: "partial-discharge-transformer-testing",
        slug: "partial-discharge-transformer-testing",
        title: "Partial Discharge Testing & Localization System",
        subtitle: "Power Transformer & Cable Insulation Health",
        description:
          "High-sensitivity multi-channel partial discharge detection and acoustic/electrical localization system for power transformers, GIS, and HV cables.",
        features: [
          {
            title: "Multi-Channel Synchronous PD Acquisition",
            description: "Simultaneous acoustic and electrical sensor processing for 3D coordinate fault localization.",
          },
          {
            title: "Intelligent Pattern Recognition (PRPD/PRPS)",
            description: "Automated classification distinguishing between corona, internal void discharge, and surface tracking.",
          },
          {
            title: "Ultra-Wide Frequency Bandwidth",
            description: "Advanced digital filtering eliminating ambient substation electromagnetic noise and harmonics.",
          },
        ],
        button: "View Product",
        image: "/images/products/partial-discharge-transformer-testing.jpg",
        badge: "PD Localization",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
      {
        id: "transformer-testing-benches",
        slug: "transformer-testing-benches",
        title: "Transformer Testing Equipment & Benches",
        subtitle: "Loss, Ratio, Winding Resistance & Impedance Testing",
        description:
          "Integrated test benches for routine, type, and diagnostic testing of distribution and power transformers, including turn ratio, winding resistance, and no-load loss measurements.",
        features: [
          {
            title: "Comprehensive Parameter Verification",
            description: "Automated measurement of voltage ratio, phase displacement, magnetizing current, and copper losses.",
          },
          {
            title: "Dual-Channel Winding Resistance",
            description: "Built-in rapid core demagnetization and temperature-compensated resistance calculation.",
          },
          {
            title: "Automated Data Logging & Reports",
            description: "Generates standardized compliance test certificates for utility and manufacturing QA records.",
          },
        ],
        button: "View Product",
        image: "/images/products/transformer-testing-benches.jpg",
        badge: "Complete Bench Setup",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
      {
        id: "circuit-breaker-testing",
        slug: "circuit-breaker-testing",
        title: "Circuit Breaker Testing Sets",
        subtitle: "Dynamic Timing, Contact Resistance & Travel Analysis",
        description:
          "Microprocessor-based dynamic timing analyzers and micro-ohmmeters for evaluating opening/closing times, bounce, synchronization, and dynamic resistance of VCBs and SF6 breakers.",
        features: [
          {
            title: "12-Channel Main & Resistive Contact Timing",
            description: "Simultaneous timing capture across all three poles with microsecond resolution.",
          },
          {
            title: "Dynamic Contact Resistance Measurement (DCRM)",
            description: "Evaluates contact wear and arc erosion without dismantling the breaker interrupter.",
          },
          {
            title: "Linear & Rotary Travel Transducer",
            description: "Calculates stroke velocity, damping, over-travel, and rebound characteristics.",
          },
        ],
        button: "View Product",
        image: "/images/products/circuit-breaker-testing.jpg",
        badge: "Dynamic Timing",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
      {
        id: "miscellaneous-testing-equipment",
        slug: "miscellaneous-testing-equipment",
        title: "Miscellaneous Testing Equipment",
        subtitle: "Vacuum Bottle Testers, Oil BDV Sets & Custom Test Rigs",
        description:
          "Tailored custom test rigs, vacuum interrupter bottle testers, transformer oil breakdown voltage (BDV) testers, and specialized diagnostic instruments for industrial utilities.",
        features: [
          {
            title: "VCB Vacuum Bottle Integrity Testers",
            description: "Quickly verifies vacuum pressure and dielectric integrity inside sealed vacuum interrupters.",
          },
          {
            title: "Transformer Insulating Oil BDV Testers",
            description: "Precision automated high-voltage spark-gap oil breakdown testers up to 100 kV.",
          },
          {
            title: "Customized High-Voltage Engineering Rigs",
            description: "Built-to-order test systems configured to specific utility standards and plant specifications.",
          },
        ],
        button: "View Product",
        image: "/images/products/miscellaneous-testing-equipment.jpg",
        badge: "Custom Engineering",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
    ],
  },

  "electrical-safety-equipment": {
    slug: "electrical-safety-equipment",
    title: "Electrical Safety Equipments",
    eyebrow: "LIVE-LINE PROTECTION & SAFETY APPARATUS",
    tagline: "Certified Protection for High-Voltage Utility Personnel",
    description:
      "Engineered to protect utility personnel during live-line operation, substation maintenance, and emergency response. Tested to strict international dielectric standards.",
    heroImage: "/images/products/product-safety.jpg",
    stats: [
      { value: "Up to 800 kV", label: "Rated Operating Stick Range" },
      { value: "IEC Tested", label: "Certified Dielectric Strength" },
      { value: "Zero Compromise", label: "Personnel Safety Factor" },
    ],
    products: [
      {
        id: "high-voltage-detector-tp-s9",
        slug: "high-voltage-detector-tp-s9",
        title: "High Voltage Detector: Model TP-S9",
        subtitle: "Capacitive Non-Contact & Direct High-Voltage Sensing",
        description:
          "Multi-range capacitive high-voltage detector designed for electrical safety inspections, overhead line verification, and energized system detection.",
        features: [
          {
            title: "High Voltage Detection (11 kV – 400 kV)",
            description: "Designed to detect the presence of high voltage on live conductors and switchgear with multi-range selection.",
          },
          {
            title: "Dual Audio-Visual Warning System",
            description: "High-intensity LED flashers and loud buzzer ensure clear indication in noisy, outdoor substation environments.",
          },
          {
            title: "Self-Diagnostic Test Function",
            description: "Integrated built-in test circuit allows operators to verify internal sensor circuitry before approaching live lines.",
          },
        ],
        button: "View Product",
        image: "/images/products/tp-s9-detector.jpg",
        badge: "11 kV – 400 kV",
        categorySlug: "electrical-safety-equipment",
        categoryTitle: "Electrical Safety Equipments",
        isAvailable: true,
      },
      {
        id: "insulated-operating-sticks",
        slug: "insulated-operating-sticks",
        title: "Insulated Operating Sticks",
        subtitle: "Telescopic & Sectional High-Voltage Hot Sticks",
        description:
          "High-grade fiberglass reinforced epoxy operating hot sticks for fuse handling, switch operation, and live-line maintenance rated from 11 kV up to 800 kV.",
        features: [
          {
            title: "High Mechanical Rigidity & Low Deflection",
            description: "Precision foam-filled fiberglass tubing prevents internal moisture ingress and minimizes bending under load.",
          },
          {
            title: "Universal Spline Head Attachment",
            description: "Compatible with disconnect hooks, fuse pullers, grounding clamps, and inspection tools.",
          },
          {
            title: "Tested up to 800 kV Dielectric Rating",
            description: "Each stick section undergoes rigorous high-voltage flashover testing according to IEC and ASTM standards.",
          },
        ],
        button: "View Product",
        image: "/images/products/insulated-operating-sticks.jpg",
        badge: "Up to 800 kV",
        categorySlug: "electrical-safety-equipment",
        categoryTitle: "Electrical Safety Equipments",
        isAvailable: true,
      },
      {
        id: "discharge-rods",
        slug: "discharge-rods",
        title: "Discharge Rods (HV Static & Residual)",
        subtitle: "Capacitance & Line Residual Charge Bleeding",
        description:
          "High-voltage grounding discharge rods with built-in damping resistors for safely bleeding trapped residual charges from cables, capacitors, and transformers.",
        features: [
          {
            title: "Internal Damping Resistor Circuit",
            description: "Limits discharge current surges to prevent arc flash and equipment damage while bleeding high residual voltage.",
          },
          {
            title: "Transparent High-Dielectric Handle",
            description: "Provides full visual inspection of the internal conductor and insulating barriers during discharge.",
          },
          {
            title: "Heavy-Duty Grounding Cable & Clamp",
            description: "Supplied with high-flexibility transparent copper grounding lead and heavy-duty earth clamp.",
          },
        ],
        button: "View Product",
        image: "/images/products/discharge-rods.jpg",
        badge: "Residual Bleed",
        categorySlug: "electrical-safety-equipment",
        categoryTitle: "Electrical Safety Equipments",
        isAvailable: true,
      },
      {
        id: "portable-earthing-equipment",
        slug: "portable-earthing-equipment",
        title: "Portable Earthing Equipment",
        subtitle: "Substation & Overhead Line Temporary Grounding",
        description:
          "Heavy-duty short-circuit earthing sets with snap-on phase clamps and flexible transparent copper grounding leads for total operator safety during maintenance.",
        features: [
          {
            title: "Certified Short-Circuit Fault Rating",
            description: "Designed and tested to safely withstand full substation short-circuit fault current without mechanical separation.",
          },
          {
            title: "Aircraft-Grade Aluminum Alloy Clamps",
            description: "Precision snap-on and screw-type clamps ensuring firm contact on flat busbars and round conductors.",
          },
          {
            title: "Transparent Heat-Resistant Silicone Sheath",
            description: "Enables instant visual verification of internal copper strands for broken wire strands before use.",
          },
        ],
        button: "View Product",
        image: "/images/products/portable-earthing-equipment.jpg",
        badge: "Short-Circuit Rated",
        categorySlug: "electrical-safety-equipment",
        categoryTitle: "Electrical Safety Equipments",
        isAvailable: true,
      },
      {
        id: "dropout-fuse-operating-rods",
        slug: "dropout-fuse-operating-rods",
        title: "Drop Out Fuse Operating Rods",
        subtitle: "Distribution Transformer Fuse Operation",
        description:
          "Specialized telescopic fiberglass rods with custom prong heads designed for safe opening, closing, and replacement of 11 kV to 33 kV drop-out fuse carriers.",
        features: [
          {
            title: "Telescopic Quick-Lock Adjustment",
            description: "Allows linemen to adjust the reach effortlessly for high pole-mounted distribution transformers.",
          },
          {
            title: "Heavy-Duty Fuse Puller Prong Head",
            description: "Engineered geometry for positive capture and secure maneuvering of heavy porcelain/polymer fuse barrels.",
          },
          {
            title: "High Impact & Weatherproof Construction",
            description: "Resistant to moisture, UV sunlight degradation, and heavy outdoor field usage.",
          },
        ],
        button: "View Product",
        image: "/images/products/dropout-fuse-operating-rods.jpg",
        badge: "DO Fuse Specific",
        categorySlug: "electrical-safety-equipment",
        categoryTitle: "Electrical Safety Equipments",
        isAvailable: true,
      },
      {
        id: "phasing-out-sticks",
        slug: "phasing-out-sticks",
        title: "Phasing Out Sticks & Phase Comparators",
        subtitle: "Transmission & Distribution Phase Verification",
        description:
          "Dual-rod high-voltage phasing sticks for verifying correct phase matching across busbars, transformers, and disconnect switches before paralleling circuits.",
        features: [
          {
            title: "Direct Dual-Rod Comparison",
            description: "High-accuracy phase verification preventing disastrous out-of-phase interconnections and transformer damage.",
          },
          {
            title: "Clear Analog / Digital Indication",
            description: "Displays clear voltage differential indicating whether phases are identical (0V) or 120° out of phase.",
          },
          {
            title: "High-Voltage Interconnecting Cable",
            description: "Fully shielded dielectric cable connecting the sensing rods with total operator isolation.",
          },
        ],
        button: "View Product",
        image: "/images/products/phasing-out-sticks.jpg",
        badge: "Phase Matching",
        categorySlug: "electrical-safety-equipment",
        categoryTitle: "Electrical Safety Equipments",
        isAvailable: true,
      },
      {
        id: "helmet-mounted-voltage-detector",
        slug: "helmet-mounted-voltage-detector",
        title: "Helmet Mounted Voltage Detector",
        subtitle: "Hands-Free Personal Proximity Warning",
        description:
          "Hands-free electric field detector attached to the lineman's hardhat that sounds an audible alarm when approaching energized high-voltage equipment.",
        features: [
          {
            title: "Hands-Free Proximity Warning",
            description: "Constantly monitors the surrounding electrostatic field and alerts the wearer before crossing safety clearance limits.",
          },
          {
            title: "360-Degree Omnidirectional Sensing",
            description: "Ensures uniform detection sensitivity regardless of head orientation or equipment direction.",
          },
          {
            title: "Long-Life Battery with Low-Power Chirp",
            description: "Designed for months of continuous daily utility operations with automatic battery status indication.",
          },
        ],
        button: "View Product",
        image: "/images/products/helmet-mounted-voltage-detector.jpg",
        badge: "Hands-Free Warning",
        categorySlug: "electrical-safety-equipment",
        categoryTitle: "Electrical Safety Equipments",
        isAvailable: true,
      },
      {
        id: "rescue-sticks",
        slug: "rescue-sticks",
        title: "High-Voltage Rescue Hooks & Sticks",
        subtitle: "Emergency Substation & Panel Personnel Extraction",
        description:
          "Essential electrical safety rescue hooks for safely pulling injured or shock-affected personnel away from energized high-voltage panels and substations.",
        features: [
          {
            title: "Heavy-Duty Insulated Dip-Coated Hook",
            description: "Specially shaped 18-inch opening hook for quickly grasping around the victim's waist or limbs.",
          },
          {
            title: "Tested to 100 kV/Foot Dielectric Rating",
            description: "Ensures total electrical isolation and safety for the rescue operator during high-stress emergency response.",
          },
          {
            title: "Ergonomic Handguard & Grip",
            description: "Integrated hand safety guard prevents hands from slipping past the designated safe insulation zone.",
          },
        ],
        button: "View Product",
        image: "/images/products/rescue-sticks.jpg",
        badge: "Emergency Rescue",
        categorySlug: "electrical-safety-equipment",
        categoryTitle: "Electrical Safety Equipments",
        isAvailable: true,
      },
    ],
  },

  "condition-monitoring": {
    slug: "condition-monitoring",
    title: "Condition Monitoring",
    eyebrow: "CONTINUOUS ONLINE ASSET DIAGNOSTICS",
    tagline: "Smart Sensors & Predictive Monitoring Systems",
    description:
      "Advanced condition monitoring systems provide 24/7 continuous health tracking of critical electrical assets, enabling predictive maintenance, thermal anomaly detection, and early partial discharge localization.",
    heroImage: "/images/products/product-monitoring.jpg",
    stats: [
      { value: "24/7 Online", label: "Real-Time Asset Health" },
      { value: "Optical & Wireless", label: "Non-Invasive Sensors" },
      { value: "Predictive AI", label: "Early Warning & Trend Alarms" },
    ],
    products: [
      {
        id: "temperature-monitoring-system",
        slug: "temperature-monitoring-system",
        title: "Temperature Monitoring System",
        subtitle: "Fiber Optic & Wireless Substation Busbar Thermal Tracking",
        description:
          "Real-time online temperature monitoring system using passive wireless surface acoustic wave (SAW) or fiber optic sensors for busbars, cable joints, and switchgear contacts.",
        features: [
          {
            title: "Passive Wireless Battery-Free Sensors",
            description: "Maintenance-free sensors powered by RF energy, installed directly onto high-voltage busbars and contact arms.",
          },
          {
            title: "High Thermal Accuracy & Fast Response",
            description: "Detects hot spots and abnormal resistance increases before thermal runaway or flashover occurs.",
          },
          {
            title: "Seamless SCADA & Modbus Integration",
            description: "Transmits real-time temperature telemetry directly into substation control room automation systems.",
          },
        ],
        button: "View Product",
        image: "/images/products/temperature-monitoring-system.jpg",
        badge: "Wireless & Fiber",
        categorySlug: "condition-monitoring",
        categoryTitle: "Condition Monitoring",
        isAvailable: true,
      },
      {
        id: "partial-discharge-online-monitoring",
        slug: "partial-discharge-online-monitoring",
        title: "Partial Discharge (PD) Continuous Online Monitoring",
        subtitle: "UHF & Acoustic Online Insulation Health for Transformers & GIS",
        description:
          "Continuous online partial discharge monitoring system for power transformers, gas-insulated switchgear (GIS), and high-voltage underground cables with smart cloud alarms.",
        features: [
          {
            title: "UHF & High-Frequency Current Sensors",
            description: "Non-invasive sensors capturing partial discharge pulses across critical insulation barriers in real time.",
          },
          {
            title: "Automated AI Trend & Pulse Analysis",
            description: "Tracks PD pulse recurrence frequency, apparent charge (pC), and identifies evolving insulation faults.",
          },
          {
            title: "Early Warning Multi-Threshold Alarms",
            description: "Configurable alert levels notifying maintenance teams well in advance of dielectric breakdown.",
          },
        ],
        button: "View Product",
        image: "/images/products/partial-discharge-online-monitoring.jpg",
        badge: "24/7 Online PD",
        categorySlug: "condition-monitoring",
        categoryTitle: "Condition Monitoring",
        isAvailable: true,
      },
    ],
  },

  "cameras-and-imaging-systems": {
    slug: "cameras-and-imaging-systems",
    title: "Cameras and Imaging Systems",
    eyebrow: "OPTICAL & THERMAL SUBSTATION DIAGNOSTICS",
    tagline: "High-Resolution Thermal & Solar-Blind Corona Cameras",
    description:
      "High-performance optical inspection cameras designed for substation and transmission line diagnostics, detecting invisible UV corona discharges, SF6 gas leaks, and localized thermal hot spots in broad daylight.",
    heroImage: "/images/products/product-thermal.jpg",
    stats: [
      { value: "Daylight Solar-Blind", label: "UV Corona Localization" },
      { value: "High Thermal Res", label: "Infrared Hotspot Accuracy" },
      { value: "Field Ergonomic", label: "Rugged Lightweight Form Factor" },
    ],
    products: [
      {
        id: "thermal-imaging-cameras",
        slug: "thermal-imaging-cameras",
        title: "Thermal Imaging Cameras",
        subtitle: "High-Resolution Infrared Inspection for Substations",
        description:
          "Professional high-definition thermal imaging cameras with wide temperature ranges and intuitive analytics for pinpointing loose contacts, overloaded phases, and transformer hot spots.",
        features: [
          {
            title: "Ultra-Sensitive Thermal Sensor (NETD < 30 mK)",
            description: "Detects subtle thermal gradients and overheating connectors with razor-sharp infrared clarity.",
          },
          {
            title: "Dual Visual & Thermal Image Blending",
            description: "Overlays thermal heatmaps onto high-resolution optical photographs for instant problem identification.",
          },
          {
            title: "Automated Hot & Cold Spot Tracking",
            description: "Dynamic on-screen cursor automatically tracks the hottest temperature point in real time.",
          },
        ],
        button: "View Product",
        image: "/images/products/thermal-imaging-cameras.jpg",
        badge: "Infrared Thermal",
        categorySlug: "cameras-and-imaging-systems",
        categoryTitle: "Cameras and Imaging Systems",
        isAvailable: true,
      },
      {
        id: "corona-cameras",
        slug: "corona-cameras",
        title: "Solar-Blind UV Corona Cameras",
        subtitle: "Daylight High-Voltage Discharge & Arc Localization",
        description:
          "State-of-the-art solar-blind ultraviolet corona cameras for detecting, recording, and pinpointing invisible high-voltage partial discharge, arcing, and insulation degradation in full sunlight.",
        features: [
          {
            title: "100% Solar-Blind Optical Channel",
            description: "Specialized solar-blind UV filter allows daylight operation without false triggers from sunlight.",
          },
          {
            title: "Real-Time UV Photon Overlay on Video",
            description: "Directly overlays glowing UV discharge events onto full-color visible video for precise fault localization.",
          },
          {
            title: "High Optical Zoom for Transmission Towers",
            description: "Inspect high-voltage insulators, switchgear, and overhead lines safely from ground level.",
          },
        ],
        button: "View Product",
        image: "/images/products/corona-cameras.jpg",
        badge: "Solar-Blind UV",
        categorySlug: "cameras-and-imaging-systems",
        categoryTitle: "Cameras and Imaging Systems",
        isAvailable: true,
      },
    ],
  },
};

export const categoriesList: CategoryData[] = Object.values(categoriesData);

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  const normalized = slug
    .toLowerCase()
    .replace(/-equipments?$/, "")
    .replace(/-systems?$/, "");

  for (const cat of categoriesList) {
    const catNormalized = cat.slug
      .toLowerCase()
      .replace(/-equipments?$/, "")
      .replace(/-systems?$/, "");
    if (cat.slug === slug || catNormalized === normalized) {
      return cat;
    }
  }
  return undefined;
}
