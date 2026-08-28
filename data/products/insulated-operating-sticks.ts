import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: INSULATED OPERATING STICKS (HOT STICKS)
   File: data/products/insulated-operating-sticks.ts
   ================================================================ */

const insulatedOperatingSticks: ProductData = {
  slug: "insulated-operating-sticks",
  category: "Electrical Safety Equipment",
  title: "Insulated Operating Sticks (Telescopic & Sectional Hot Sticks)",
  description:
    "Closed-cell foam-filled fiberglass operating hot sticks manufactured to IEC 855 and Class F insulation for live-line switching, fuse operation, grounding, and voltage detection up to 800 kV.",

  overview:
    "HVTI Insulated Operating Sticks are manufactured in-house using high-pressure extrusion. Conforming to IEC 855, IEC 61235, and IS 13770, our foam-filled rods use specialized closed-cell polyurethane foam with controlled density to prevent internal moisture ingress, condensation, and tracking. Rated for Class F insulation (up to 155°C), each stick section undergoes 100 kV/foot dielectric proof testing and is fitted with a universal sunrise spline head for disconnector hooks, grounding clamps, and voltage detectors up to 800 kV.",

  highlights: [
    "Foam-Filled Closed Cell Structure (IEC 855)",
    "Class F High-Dielectric Insulation",
    "Telescopic & Modular Sectional Options up to 800 kV",
    "Universal Sunrise Head for Multi-Tool Attachment",
  ],

  renderType: "image",
  image: "/images/products/insulated-operating-sticks.jpg",
  specImage: "/images/products/product-safety.jpg",

  engineeringAtAGlance: [
    {
      id: "dielectric",
      icon: "voltage",
      value: "100 kV / Foot",
      label: "DIELECTRIC STRENGTH",
      description: "High dielectric proof tested as per IEC 60855 and ASTM F711.",
      highlighted: true,
    },
    {
      id: "foam",
      icon: "shield",
      value: "Closed-Cell Polyurethane",
      label: "INTERNAL CORE",
      description: "Foam-filled interior prevents internal moisture condensation and dielectric breakdown.",
    },
    {
      id: "rating",
      icon: "field",
      value: "Up to 800 kV",
      label: "VOLTAGE CLASS",
      description: "Modular sections extend safe operating standoff distance up to 800 kV extra-high voltage.",
    },
    {
      id: "head",
      icon: "gear",
      value: "Universal Sunrise Spline",
      label: "ATTACHMENT HEAD",
      description: "Accepts disconnect hooks, fuse pullers, tree trimmers, and grounding clamps.",
    },
  ],

  metrics: [
    {
      id: "voltage-range",
      icon: "voltage",
      label: "VOLTAGE RATING",
      value: "11 kV to 800 kV",
      subtext: "Telescopic & Sectional",
    },
    {
      id: "insulation-class",
      icon: "shield",
      label: "INSULATION CLASS",
      value: "Class F (155°C)",
      subtext: "IS, BS & IEC compliant",
    },
    {
      id: "proof-test",
      icon: "testing",
      label: "PROOF TESTED",
      value: "100 kV/ft for 5 min",
      subtext: "100% factory routine tested",
    },
    {
      id: "standard",
      icon: "power",
      label: "STANDARD",
      value: "IEC 855 / IEC 61235",
      subtext: "International safety code",
    },
  ],

  specificationsTable: [
    {
      parameter: "Standard Compliance",
      details: "Insulating foam-filled tubes and solid rods for live working",
      range: "IEC 60855, IEC 61235, IS 13770, ASTM F711",
    },
    {
      parameter: "Main Insulation Material",
      details: "Epoxy resin reinforced high-density electrical grade fiberglass",
      range: "Class 'F' thermal rating (155°C)",
    },
    {
      parameter: "Internal Core Structure",
      details: "Controlled-density closed-cell polyurethane foam filling",
      range: "Zero moisture absorption / 100% water repellant",
    },
    {
      parameter: "Voltage Range & Sections",
      details: "Available in 1 to 6 push-button telescopic or screw-joint sectional pieces",
      range: "11 kV (1.5 m) up to 800 kV (9 m+)",
    },
    {
      parameter: "Mechanical Deflection & Rigidity",
      details: "High flexural modulus with minimal sagging under horizontal cantilever load",
      range: "Withstands > 100 kg tensile and compressive force",
    },
    {
      parameter: "End Fitting / Connector Head",
      details: "Cast bronze / aircraft aluminum universal sunrise spline with wing nut",
      range: "Standard universal spline compatible with all international hot stick tools",
    },
    {
      parameter: "Base & Grip Protection",
      details: "Heavy-duty neoprene rubber boot, handguard ring, and non-slip silicone grip",
      range: "Ergonomic hand safety zone indicator",
    },
    {
      parameter: "Storage & Transport",
      details: "High-grade water-repellant heavy-duty padded canvas carrying case",
      range: "Included with every stick set",
    },
  ],

  applications: [
    {
      id: "switchyard",
      title: "Substation Isolator & Switch Operation",
      icon: "switchgear",
      isCenter: true,
    },
    {
      id: "do-fuse",
      title: "Drop Out (DO) Fuse Replacement",
      icon: "field",
    },
    {
      id: "earthing",
      title: "Portable Earthing Cluster Application",
      icon: "substation",
    },
    {
      id: "voltage-sensing",
      title: "Live Line High Voltage Testing",
      icon: "voltage",
    },
    {
      id: "line-maintenance",
      title: "Transmission & Distribution Hot Line Work",
      icon: "cable",
    },
  ],

  features: [
    {
      title: "Closed-Cell Polyurethane Foam Core (IEC 855)",
      description:
        "Injected under controlled pressure to form a seamless barrier that completely eliminates internal void formation, moisture condensation, and internal tracking.",
    },
    {
      title: "Class F High-Dielectric Thermal Performance",
      description:
        "High-temperature epoxy matrix maintains mechanical rigidity and dielectric breakdown resistance even under severe solar heating and heavy ambient humidity.",
    },
    {
      title: "Telescopic Quick-Snap Button Locking Mechanism",
      description:
        "Heavy-duty spring-loaded brass lock buttons allow linemen to extend and lock stick sections smoothly from ground level in seconds.",
    },
    {
      title: "Universal Sunrise Spline Interface",
      description:
        "Standard serrated spline head accepts disconnector hooks, fuse tongs, grounding sockets, pruning saws, and high-voltage detector units.",
    },
    {
      title: "100% Routine Factory Dielectric Flashover Testing",
      description:
        "Every manufactured pole section undergoes 100 kV/foot high-voltage withstand testing in our NABL-traceable high-voltage test bay prior to shipment.",
    },
  ],

  benefits: [
    {
      id: "safety",
      icon: "shield",
      title: "Maximum Personnel Safety Standoff",
      description:
        "Ensures linemen maintain safe clearance distances from energized lines in accordance with OSHA and IEEE 516 standards.",
    },
    {
      id: "durability",
      icon: "gear",
      title: "Weatherproof & High Mechanical Rigidity",
      description:
        "Hydrophobic silicone coating repels water droplets while high-modulus fiberglass prevents bowing when operating heavy switchgear.",
    },
    {
      id: "versatility",
      icon: "briefcase",
      title: "Multi-Functional Substation Tool",
      description:
        "One hot stick handle operates fuse carriers, attaches earth clamps, and hosts voltage detectors across all utility voltage levels.",
    },
  ],

  cta: {
    title: "Need certified telescopic or sectional hot sticks?",
    description:
      "Our safety equipment experts will help you select the exact length, section count, and head attachments for your substation voltages.",
    primaryButtonText: "Request Hot Stick Pricing",
    primaryButtonLink: "/contact?subject=Insulated%20Operating%20Sticks",
  },
};

export default insulatedOperatingSticks;
