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
        id: "high-voltage-ac-dc-testing-systems",
        slug: "high-voltage-ac-dc-testing-systems",
        title: "High Voltage AC & DC Testing Systems",
        subtitle: "Dielectric Withstand & Insulation Integrity up to 300 kV",
        description:
          "High-voltage AC and DC test systems engineered for proof testing and dielectric withstand diagnostics of electrical apparatus, generators, cables, and power transformers.",
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
            title: "Resin-Cast & Oil-Filled Designs",
            description: "Dry-type resin cast transformers (25–150 kV) and heavy-duty oil-filled transformers (50–300 kV) with ultra-low PD baseline.",
          },
        ],
        button: "View Category",
        image: "/images/products/hv-ac-dc-testing-kits.png",
        badge: "25 – 300 kV AC/DC",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
      {
        id: "high-voltage-measurement-dividers",
        slug: "high-voltage-measurement-dividers",
        title: "High Voltage Measurement & Dividers",
        subtitle: "Precision AC/DC Dividers, Digital kV Meters & Sphere Gaps",
        description:
          "High-precision resistive and capacitive voltage dividers and standard sphere gaps engineered for accurate laboratory and field measurement of AC, DC, and impulse high-voltage waveforms.",
        features: [
          {
            title: "Universal AC & DC Voltage Measurement",
            description: "Compatible with power frequency AC, pure DC, and high-frequency transient impulse voltage verification up to 300 kV.",
          },
          {
            title: "High Accuracy Classes 0.5 / 1.0",
            description: "Built with high-stability precision elements ensuring minimal temperature drift across wide ranges.",
          },
          {
            title: "Standard Sphere Gaps (20–1500 mm)",
            description: "Absolute standards for high-voltage measurement and calibration with motorized automated controls.",
          },
        ],
        button: "View Category",
        image: "/images/products/hv-ac-dc-dividers.jpg",
        badge: "Class 0.5 / 1.0",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
      {
        id: "current-injection-protection-testing",
        slug: "current-injection-protection-testing",
        title: "Current Injection & Protection Testing",
        subtitle: "Primary (500 A–10,000 A) & Secondary (30 A–200 A) Testing Sets",
        shortDescription:
          "Heavy-duty primary and secondary current injection sets for testing protective relays, current transformers (CTs), switchgears, and circuit breaker trip units.",
        description:
          "Heavy-duty primary and secondary current injection sets for testing protective relays, current transformers (CTs), switchgears, and circuit breaker trip units under real load conditions.",
        features: [
          {
            title: "Primary Injection up to 10,000 A",
            description: "High-current injection for circuit breakers, busbars, CT ratio/magnetization, MCCs, and PCCs.",
          },
          {
            title: "Secondary Injection 30 A – 200 A",
            description: "High-precision testing of static, induction, thermal, and directional protective relays with millisecond timing.",
          },
          {
            title: "Rugged Transportable Enclosure",
            description: "Castor-mounted industrial chassis built for harsh substation yards and switchgear testing bays.",
          },
        ],
        button: "View Category",
        image: "/images/products/current-injection-testing-sets.jpg",
        badge: "Up to 10,000 A",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
      {
        id: "circuit-breaker-testing-analysis",
        slug: "circuit-breaker-testing-analysis",
        title: "Circuit Breaker Testing & Analysis",
        subtitle: "Micro-ohmmeters & SA Series Switchgear Dynamic Analyzers",
        description:
          "Comprehensive diagnostic platform combining DRM/LRM/MM series micro-ohmmeters for contact resistance with SA series analyzers for timing, travel, and dynamic motion profiling.",
        features: [
          {
            title: "Contact Resistance (DRM / LRM / MM)",
            description: "High-current micro-ohm measurement from 0.01 µΩ to 200 Ω with test currents up to 900 A.",
          },
          {
            title: "Dynamic Timing & Motion Analysis",
            description: "Measures main/resistive contact timing, stroke velocity, damping, over-travel, and coil current profiles.",
          },
          {
            title: "Automated Compliance Reports",
            description: "Generates standardized fingerprint comparison and switchgear health assessments.",
          },
        ],
        button: "View Category",
        image: "/images/products/circuit-breaker-testing.jpg",
        badge: "0.1 ms / 1 µΩ",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
      {
        id: "partial-discharge-solutions",
        slug: "partial-discharge-solutions",
        title: "Partial Discharge Solutions",
        subtitle: "Online Spot Detection, 3D Acoustic Localization & 24/7 Monitoring",
        description:
          "Unified Partial Discharge ecosystem spanning handheld spot detectors (PD-LT, PDS, ADD), portable analyzers (XDP-II), acoustic 3D tank localization (AE-150), and continuous online monitoring networks.",
        features: [
          {
            title: "Online Spot Detection & Corona",
            description: "Non-invasive detection across overhead lines, underground cables, and ultrasonic corona inspection (ULD-40).",
          },
          {
            title: "3D Acoustic Tank Localization (AE-150)",
            description: "Simultaneous acoustic and electrical sensor processing for sub-millimeter coordinate fault triangulation.",
          },
          {
            title: "Continuous 24/7 Online Monitoring",
            description: "Multi-channel continuous PD trending and annunciator alert networks for transformers and GIS.",
          },
        ],
        button: "View Category",
        image: "/images/products/partial-discharge-transformer-testing.jpg",
        badge: "Complete Ecosystem",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
      {
        id: "transformer-testing-diagnostics",
        slug: "transformer-testing-diagnostics",
        title: "Transformer Testing & Diagnostics",
        subtitle: "Turns Ratio, Winding Resistance, Oil BDV & Moisture",
        description:
          "Dedicated instruments for comprehensive transformer health evaluation, including 3-phase turns ratio (ART-3D), DC winding resistance (WRT-10D), CT test sets (CTTx2/5), oil BDV testers (OTS series), and moisture analysis.",
        features: [
          {
            title: "Automatic Turns Ratio (ART-3D)",
            description: "Turns ratio up to 10000:1 with phase angle and excitation current measurement.",
          },
          {
            title: "Dual-Channel Winding Resistance (WRT-10D)",
            description: "Rapid demagnetization and temperature-compensated resistance calculation.",
          },
          {
            title: "Automated Oil BDV Breakdown (OTS)",
            description: "Fully automatic breakdown voltage testing according to IEC/ASTM standards.",
          },
        ],
        button: "View Category",
        image: "/images/products/transformer-testing-benches-hd.png",
        badge: "Comprehensive",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
      {
        id: "cable-fault-location-testing",
        slug: "cable-fault-location-testing",
        title: "Cable Fault Location & Testing",
        subtitle: "Pre-Location, Thumping & Acoustic Pinpointing",
        description:
          "Advanced underground power cable fault location equipment utilizing Time Domain Reflectometry (TDR), capacitive surge pulse discharge, and acoustic pin-pointing technologies.",
        features: [
          {
            title: "TDR Cable Fault Pre-Locators",
            description: "High-resolution pulse echo reflectometry for pinpointing open-circuit and short-circuit cable faults.",
          },
          {
            title: "High-Energy Surge Generators",
            description: "Multi-stage capacitive discharge thumpers for flashing intermittent and high-resistance faults.",
          },
          {
            title: "Acoustic Pin-Pointing Receivers",
            description: "Ground microphone acoustic and magnetic field correlation for exact surface pin-pointing.",
          },
        ],
        button: "View Category",
        image: "/images/products/miscellaneous-testing-equipment-hd.png",
        badge: "TDR & Thumpers",
        categorySlug: "electrical-testing-equipment",
        categoryTitle: "Electrical Testing Equipment",
        isAvailable: true,
      },
      {
        id: "specialized-electrical-testing-equipment",
        slug: "specialized-electrical-testing-equipment",
        title: "Specialized Electrical Testing Equipment",
        subtitle: "DC Earth Faults, Digital Time Interval Meters & SF6 Handling",
        description:
          "Specialized utility diagnostic tools including online DC earth fault locators for floating battery circuits, digital time interval meters, SF6 gas handling systems, and relay calibration toolkits.",
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
            title: "Digital Time Interval Meters (DTIM)",
            description: "Microsecond timing precision for relay coils, contactors, and protection schemes.",
          },
        ],
        button: "View Category",
        image: "/images/products/dc-earth-fault-locator-hd.png",
        badge: "Specialized Tools",
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
      { value: "Cooled QWIP OGI", label: "VOC Gas Leak Detection" },
    ],
    products: [
      {
        id: "industrial-thermal-cameras",
        slug: "industrial-thermal-cameras",
        title: "Industrial & Electrical Thermal Imaging Cameras",
        subtitle: "High-Performance Infrared Inspection for Substations & Plants",
        description:
          "Professional high-definition thermal imaging cameras (PK-80, PK-160, Hotfind S, D300, D500, G96) with NETD down to < 30 mK, Duo-Vision fusion, and automated hotspot analytics.",
        features: [
          {
            title: "Ultra-Sensitive Thermal Sensor (NETD < 30 mK)",
            description: "Detects subtle thermal gradients, loose bolted connections, and overloaded switchgear with razor-sharp infrared clarity.",
          },
          {
            title: "Wide Range Portfolio (Tablet to 640×480 Console)",
            description: "From Android smart tablets to motorized laser auto-focus cameras and detachable remote-control consoles for hazardous areas.",
          },
          {
            title: "Dual Visual & Thermal Fusion Blending",
            description: "Overlays radiometric thermal heatmaps onto high-resolution optical photographs for instant electrical component identification.",
          },
        ],
        button: "View Product Range",
        image: "/images/products/satir-hotfind-s.png",
        badge: "Infrared Thermal",
        categorySlug: "cameras-and-imaging-systems",
        categoryTitle: "Cameras and Imaging Systems",
        isAvailable: true,
      },
      {
        id: "automotive-thermal-imaging-systems",
        slug: "automotive-thermal-imaging-systems",
        title: "Automotive Thermal Imaging Systems",
        subtitle: "Vehicle Night Vision & Adverse Weather Safety",
        description:
          "Vehicle-mounted thermal imaging systems (SATIR NV618S & NV618W / La Moon) for enhanced driver visibility through pitch darkness, dense fog, heavy rain, and oncoming headlight glare.",
        features: [
          {
            title: "Dual-Channel Thermal & Night Vision Sensor",
            description: "Combines 384×288 thermal IR with low-light optical technology for comprehensive all-weather road situational awareness.",
          },
          {
            title: "Intelligent Pedestrian & Obstacle Analytics",
            description: "Real-time visual and audible warnings alerting drivers to pedestrians, cyclists, and animals beyond headlight range.",
          },
          {
            title: "Wireless Touchscreen Tablet Integration",
            description: "Convenient dash installation with high-resolution wireless display receivers and standard video output interfacing.",
          },
        ],
        button: "View Product Range",
        image: "/images/products/satir-nv618s.png",
        badge: "Vehicle Night Vision",
        categorySlug: "cameras-and-imaging-systems",
        categoryTitle: "Cameras and Imaging Systems",
        isAvailable: true,
      },
      {
        id: "thermal-surveillance-observation-systems",
        slug: "thermal-surveillance-observation-systems",
        title: "Thermal Surveillance & Observation Systems",
        subtitle: "Tactical Long-Range Perimeter & Security Solutions",
        description:
          "Specialized tactical thermal surveillance cameras and binoculars (SATIR UMTI & UTR50/75) for 24/7 security, border patrolling, utility perimeter monitoring, and search & rescue operations.",
        features: [
          {
            title: "Long-Range Observation (Up to 2.5 km)",
            description: "High-resolution UFPA sensors and interchangeable 50mm/100mm optics for detecting vehicle and human thermal signatures at long range.",
          },
          {
            title: "Handheld Monoculars & Binocular Viewers",
            description: "Lightweight, ruggedized form factors with high-definition OLED displays and integrated MP4 thermal video recording.",
          },
          {
            title: "MIL-STD-810 Rugged Weatherproof Enclosure",
            description: "Pressurized anti-fog eyepieces and military-grade encapsulation for covert tactical field operations in extreme environments.",
          },
        ],
        button: "View Product Range",
        image: "/images/products/satir-utr50.png",
        badge: "Tactical Observation",
        categorySlug: "cameras-and-imaging-systems",
        categoryTitle: "Cameras and Imaging Systems",
        isAvailable: true,
      },
      {
        id: "sat-v90-gas-detection-camera",
        slug: "sat-v90-gas-detection-camera",
        title: "SAT V90 Gas Detection Camera",
        subtitle: "Cooled QWIP Optical Gas Imaging (OGI) for VOC Leaks",
        description:
          "Advanced optical gas imaging camera with cryogenic cooled QWIP detector (3.2–3.5 μm) for visualizing and tracing invisible VOC gas leaks down to 0.001 ml/s in petrochemical facilities.",
        features: [
          {
            title: "Visualize Invisible VOC & Hydrocarbon Plumes",
            description: "Real-time optical gas imaging renders methane, benzene, propane, and 20+ hydrocarbon gas leaks visible without plant shutdowns.",
          },
          {
            title: "Ultra-High Sensitivity Cooled QWIP (NETD 15 mK)",
            description: "Stirling cryocooler core achieves exceptional thermal sensitivity for detecting micro-leaks in low thermal contrast conditions.",
          },
          {
            title: "EPA LDAR Compliant & ATEX Certified Design",
            description: "Engineered for hazardous explosive atmospheres with dual radiometric thermography and 5MP Duo-Vision Plus fusion.",
          },
        ],
        button: "View Product",
        image: "/images/products/sat-v90.png",
        badge: "Cooled QWIP OGI",
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
          "World-renowned CoroCAM® series (CoroCAM 6D, 7, and Tri-Spectral 8) for detecting, recording, and pinpointing invisible high-voltage partial discharge, arcing, and insulation degradation in broad daylight.",
        features: [
          {
            title: "100% Solar-Blind Optical Channel (240–280 nm)",
            description: "Specialized solar-blind optical filters completely block daylight, enabling zero false triggers under blazing midday sunlight.",
          },
          {
            title: "Tri-Spectral CoroCAM 8 (UV + IR + HD Video)",
            description: "Simultaneous co-location of electrical corona discharges, radiometric FLIR thermal hotspots, and Sony HD video in one frame.",
          },
          {
            title: "Calibrated Photon Counting & Distance Compensation",
            description: "Quantitative discharge metrics with synchronized optical/digital zoom and integrated GPS environmental data logging.",
          },
        ],
        button: "View Product Range",
        image: "/images/products/corocam-8.png",
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
