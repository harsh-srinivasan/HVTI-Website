import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: DISCHARGE RODS
   File: data/products/discharge-rods.ts
   ================================================================ */

const dischargeRods: ProductData = {
  slug: "discharge-rods",
  category: "Electrical Safety Equipment",
  title: "Discharge Rods (Non-Linear Carbon Resistor Type)",
  description:
    "High-voltage grounding discharge rods with non-linear carbon damping resistors for safely bleeding trapped residual and static charges from cables, transformers, reactors, and capacitor banks without arc flash or impulse reflection.",

  overview:
    "HVTI Non-Linear Carbon Discharge Resistor Type Discharge Rods are specifically engineered to discharge de-energized circuits, transmission lines, power cables, transformers, shunt reactors, large busbars, and capacitor banks. When discharging inductive or capacitive apparatus, sudden dead earthing produces destructive 1.2/50 μsec impulse overvoltages. The reverse temperature coefficient of our internal carbon resistor smoothly lowers resistance as discharge current flows, executing controlled, arc-free discharge with complete operator safety.",

  highlights: [
    "Controlled Non-Linear Carbon Resistor Discharging",
    "Prevents Destructive 1.2/50 μsec Impulse Overvoltages",
    "Class F High-Dielectric Insulated Operating Stick",
    "Heavy-Duty Braided Copper Grounding Lead with Transparent Sheath",
  ],

  renderType: "image",
  image: "/images/products/discharge-rods.jpg",
  specImage: "/images/products/product-safety.jpg",

  engineeringAtAGlance: [
    {
      id: "damping",
      icon: "shield",
      value: "Non-Linear Carbon",
      label: "RESISTOR TECHNOLOGY",
      description: "Reverse temperature coefficient facilitates smooth controlled residual energy bleed.",
      highlighted: true,
    },
    {
      id: "voltage-class",
      icon: "voltage",
      value: "11 kV to 400 kV",
      label: "VOLTAGE RATINGS",
      description: "Available for medium voltage distribution up to 400 kV extra-high voltage transmission.",
    },
    {
      id: "grounding-lead",
      icon: "cable",
      value: "Flexible Braided Copper",
      label: "EARTHING LEAD",
      description: "Transparent silicone sheath allows visual inspection of all internal copper strands.",
    },
    {
      id: "hook",
      icon: "gear",
      value: "4-Inch Copper Hook",
      label: "DISCHARGE HEAD",
      description: "Solid copper contact hook designed for positive clamping over busbars and cables.",
    },
  ],

  metrics: [
    {
      id: "voltage-range",
      icon: "voltage",
      label: "VOLTAGE CLASS",
      value: "11 kV – 400 kV",
      subtext: "Modular stick lengths",
    },
    {
      id: "lead-cross-section",
      icon: "cable",
      label: "GROUND LEAD SIZE",
      value: "16 / 25 / 35 mm²",
      subtext: "High-flexibility copper",
    },
    {
      id: "lead-length",
      icon: "field",
      label: "GROUND LEAD LENGTH",
      value: "5 to 10 Meters",
      subtext: "Custom lengths available",
    },
    {
      id: "insulation-standard",
      icon: "testing",
      label: "INSULATION CLASS",
      value: "Class F (IEC 855)",
      subtext: "100 kV/ft dielectric proof",
    },
  ],

  specificationsTable: [
    {
      parameter: "Operating Voltage Classes",
      details: "Single piece and multi-section sectional rod configurations",
      range: "11 kV, 33 kV, 66 kV, 132 kV, 220 kV, 400 kV",
    },
    {
      parameter: "Discharge Resistor Element",
      details: "Non-linear carbon composition resistor enclosed in high-dielectric tube",
      range: "Smooth non-inductive damping preventing voltage oscillations",
    },
    {
      parameter: "Main Insulated Handle",
      details: "Closed-cell foam-filled fiberglass tubing conforming to IEC 60855",
      range: "Class 'F' insulation rating with hand safety stop",
    },
    {
      parameter: "Contact Head Configuration",
      details: "Solid copper contact hook (4-inch / 100 mm diameter) of 1/2-inch thick copper rod",
      range: "Fits round conductors and flat rectangular busbars",
    },
    {
      parameter: "Earth End Clamp",
      details: "High-strength aluminum alloy / bronze G-clamp with T-bar tightening screw",
      range: "Clamping range up to 50 mm substation earth flat/rod",
    },
    {
      parameter: "Earthing Cable Specification",
      details: "Ultra-flexible multistrand electrolytic copper braid in transparent sheath",
      range: "16 sq.mm / 25 sq.mm / 35 sq.mm with pressure-crimped copper lugs",
    },
    {
      parameter: "Storage Enclosure",
      details: "Waterproof heavy-duty synthetic carrying case",
      range: "Included with every discharge rod assembly",
    },
  ],

  applications: [
    {
      id: "capacitors",
      title: "Power Capacitor Banks",
      icon: "transformer",
      isCenter: true,
    },
    {
      id: "power-cables",
      title: "Long HV Underground Cables",
      icon: "cable",
    },
    {
      id: "transformers",
      title: "Power Transformers & Shunt Reactors",
      icon: "substation",
    },
    {
      id: "transmission-lines",
      title: "Overhead Transmission Lines (Static Bleed)",
      icon: "field",
    },
    {
      id: "switchgear",
      title: "Substation Switchgear Bays",
      icon: "switchgear",
    },
  ],

  features: [
    {
      title: "Controlled Energy Dissipation via Non-Linear Carbon Resistor",
      description:
        "As discharge current flows, carbon element resistance decreases automatically by virtue of its negative temperature coefficient, delivering a smooth, arc-free energy bleed without flashover.",
    },
    {
      title: "Eliminates Destructive LC Surge Resonances",
      description:
        "Prevents steep-fronted 1.2/50 μsec transient impulse voltages that occur when dead-earthing large inductive transformers or long capacitive cables, protecting turn insulation.",
    },
    {
      title: "Transparent Silicone Earthing Lead Sheath",
      description:
        "Allows instant visual pre-use inspection of all internal copper strands, ensuring no broken conductors compromise operator safety.",
    },
    {
      title: "Solid 4-Inch Heavy-Duty Copper Contact Hook",
      description:
        "Provides low contact resistance and secure mechanical hooking over wide overhead conductors and thick rectangular substation busbars.",
    },
    {
      title: "Modular Extension Stems for Extra High Voltages",
      description:
        "Can be coupled with extension hot stick handles to provide comfortable operator standoff reach for 132 kV, 220 kV, and 400 kV installations.",
    },
  ],

  benefits: [
    {
      id: "safety",
      icon: "shield",
      title: "Zero Arc Flash Risk for Technicians",
      description:
        "Controlled damping eliminates violent sparking and loud arc blasts during residual discharge of charged apparatus.",
    },
    {
      id: "equipment-protection",
      icon: "gear",
      title: "Safeguards Transformer & Cable Insulation",
      description:
        "Prevents internal dielectric stress and winding insulation puncturing caused by sudden dead grounding of trapped charges.",
    },
    {
      id: "compliance",
      icon: "briefcase",
      title: "Meets Mandatory Utility Safety Protocols",
      description:
        "Essential safety equipment required for electrical permit-to-work (PTW) procedures prior to human contact with high-voltage equipment.",
    },
  ],

  cta: {
    title: "Need certified discharge rods for your substation?",
    description:
      "Contact our electrical safety engineers to select the proper voltage rating, lead length, and clamp types for your utility.",
    primaryButtonText: "Request Discharge Rod Specs",
    primaryButtonLink: "/contact?subject=Discharge%20Rods",
  },
};

export default dischargeRods;
