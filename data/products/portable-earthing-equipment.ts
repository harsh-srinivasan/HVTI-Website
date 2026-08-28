import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: PORTABLE EARTHING EQUIPMENT
   File: data/products/portable-earthing-equipment.ts
   ================================================================ */

const portableEarthingEquipment: ProductData = {
  slug: "portable-earthing-equipment",
  category: "Electrical Safety Equipment",
  title: "Portable Earthing Equipment & Short-Circuit Grounding Kits",
  description:
    "Temporary short-circuit portable earthing sets with snap-on phase clamps, transparent silicone copper leads, and insulated operating sticks rated for fault levels from 7.5 kA up to 40 kA.",

  overview:
    "HVTI Portable Earthing Equipment provides essential temporary personal protective grounding for overhead transmission lines, distribution networks, and substation switchyards during maintenance. Operating clamps are applied from ground level using an insulated operating pole, ensuring the technician never comes in contact with conductors. Available in short-circuit fault ratings of 7.5 kA, 10.2 kA, 21 kA, 35 kA, and 40 kA with transparent heat-resistant copper leads and certified snap-on line end clamps.",

  highlights: [
    "Fault Level Ratings: 7.5 kA to 40 kA (1 sec / 3 sec)",
    "Remote Application via Insulated Operating Pole",
    "Transparent & Bright Orange Flexible Silicone Leads",
    "Class F Insulated Hot Sticks & Rugged Waterproof Bag",
  ],

  renderType: "image",
  image: "/images/products/portable-earthing-equipment.jpg",
  specImage: "/images/products/product-safety.jpg",

  engineeringAtAGlance: [
    {
      id: "fault-rating",
      icon: "power",
      value: "7.5 kA – 40 kA",
      label: "FAULT LEVEL RATING",
      description: "Certified to withstand full substation short-circuit fault current without mechanical separation.",
      highlighted: true,
    },
    {
      id: "operation",
      icon: "shield",
      value: "Remote Hot Stick Mount",
      label: "OPERATOR SAFETY",
      description: "Clamps applied and torqued remotely via insulated stick without approaching live zone.",
    },
    {
      id: "cables",
      icon: "cable",
      value: "Transparent Silicone",
      label: "GROUNDING CABLES",
      description: "High-flexibility multistrand copper in transparent sheath for instant strand visual check.",
    },
    {
      id: "clamps",
      icon: "gear",
      value: "Snap-On / Screw-Type",
      label: "LINE END CLAMPS",
      description: "High-conductivity aluminum bronze alloy clamps for round conductors and flat busbars.",
    },
  ],

  metrics: [
    {
      id: "fault-current",
      icon: "power",
      label: "SHORT CIRCUIT RATING",
      value: "7.5, 10, 21, 35, 40 kA",
      subtext: "For 1.0 second duration",
    },
    {
      id: "cable-cross-section",
      icon: "cable",
      label: "CABLE SIZE",
      value: "25, 35, 50, 70, 95 mm²",
      subtext: "Class 6 extra-flexible copper",
    },
    {
      id: "voltage-class",
      icon: "voltage",
      label: "APPLICABLE VOLTAGE",
      value: "11 kV to 400 kV",
      subtext: "Transmission & Substation",
    },
    {
      id: "standard",
      icon: "testing",
      label: "STANDARD",
      value: "IEC 61230 / IS 13770",
      subtext: "Short-circuit tested",
    },
  ],

  specificationsTable: [
    {
      parameter: "Standard Compliance",
      details: "Live working — Portable equipment for earthing or earthing and short-circuiting",
      range: "IEC 61230, IS 13770, ASTM F855",
    },
    {
      parameter: "Short Circuit Fault Ratings",
      details: "Dynamic electro-mechanical and thermal withstand certification",
      range: "7.5 kA, 10.2 kA, 21 kA, 35 kA, 40 kA for 1 second duration",
    },
    {
      parameter: "Grounding Cable Construction",
      details: "Extra-flexible fine-stranded electrolytic copper (Class 6)",
      range: "Cross sections: 25 mm², 35 mm², 50 mm², 70 mm², 95 mm²",
    },
    {
      parameter: "Cable Insulation Sheath",
      details: "High-grade clear transparent or bright orange silicone / PVC",
      range: "UV-resistant, heat-resistant from -25°C to +70°C",
    },
    {
      parameter: "Line End Clamps",
      details: "Snap-on spring loaded / bayonet screw-type aluminum bronze alloy",
      range: "Conductor clamping capacity: 5 mm to 50 mm diameter",
    },
    {
      parameter: "Earth End Clamps",
      details: "Heavy-duty flat/round G-clamp with bronze T-screw and earthing point lug",
      range: "Clamps securely onto earth flats up to 30 mm thickness",
    },
    {
      parameter: "Operating Hot Stick Included",
      details: "Closed-cell foam-filled fiberglass stick with operating socket head",
      range: "Class F insulation, lengths from 1.5 m up to 6.0 m",
    },
    {
      parameter: "Configuration Options",
      details: "3-Phase 3-lead cluster with central junction point or 3 independent single leads",
      range: "Complete turnkey grounding cluster assembly",
    },
  ],

  applications: [
    {
      id: "overhead-lines",
      title: "Overhead Transmission & Distribution Lines",
      icon: "field",
      isCenter: true,
    },
    {
      id: "substations",
      title: "Substation Busbars & Switchyards",
      icon: "substation",
    },
    {
      id: "transformers",
      title: "Power Transformer Bushing Terminals",
      icon: "transformer",
    },
    {
      id: "switchgear",
      title: "Indoor Switchgear Panels & Cubicles",
      icon: "switchgear",
    },
    {
      id: "cables",
      title: "Underground Cable Termination Kiosks",
      icon: "cable",
    },
  ],

  features: [
    {
      title: "Certified Fault Current Withstand (Up to 40 kA for 1 sec)",
      description:
        "Constructed and type-tested to withstand immense electro-dynamic bursting forces and thermal heating without loosening or disconnecting during accidental re-energization.",
    },
    {
      title: "Remote Operating Pole Application Mechanism",
      description:
        "Engineered with specialized operating socket heads that engage line end clamps, enabling technicians to tighten clamps onto overhead conductors from safe ground standing positions.",
    },
    {
      title: "Transparent Silicone Sheath for Pre-Use Strand Inspection",
      description:
        "Crystal-clear protective sheath allows instant visual identification of broken copper strands or internal corrosion prior to every use, ensuring full current carrying integrity.",
    },
    {
      title: "Heavy-Duty Pressure-Crimped Compression Lugs",
      description:
        "All cable terminations feature heavy-duty stress-relieved copper ferrules with transparent heat-shrink strain relief boots to prevent wire fatigue.",
    },
    {
      title: "Complete Turnkey Substation Grounding Kit",
      description:
        "Supplied complete with 3 line clamps, 3 transparent leads, central trifurcating cluster boss, earth clamp, operating hot stick, and heavy-duty canvas transport bag.",
    },
  ],

  benefits: [
    {
      id: "life-safety",
      icon: "shield",
      title: "Uncompromised Life Protection",
      description:
        "Creates an equipotential zero-voltage safety zone around maintenance personnel, diverting dangerous fault currents straight to ground.",
    },
    {
      id: "speed",
      icon: "gear",
      title: "Fast & Ergonomic Installation",
      description:
        "Snap-on spring jaws latch onto busbars effortlessly, cutting line earthing setup times by more than 50%.",
    },
    {
      id: "standards",
      icon: "briefcase",
      title: "Strict Compliance with Central Electricity Authority (CEA)",
      description:
        "Fully meets CEA and Indian Electricity Rules mandatory requirements for temporary portable earthing on high-voltage apparatus.",
    },
  ],

  cta: {
    title: "Need customized portable earthing sets for your network?",
    description:
      "Our safety team will configure clamp sizes, fault ratings, lead lengths, and operating sticks tailored to your transmission line or substation layout.",
    primaryButtonText: "Request Grounding Kit Quote",
    primaryButtonLink: "/contact?subject=Portable%20Earthing%20Equipment",
  },
};

export default portableEarthingEquipment;
