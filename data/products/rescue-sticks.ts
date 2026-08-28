import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: HIGH VOLTAGE RESCUE STICKS & HOOKS
   File: data/products/rescue-sticks.ts
   ================================================================ */

const rescueSticks: ProductData = {
  slug: "rescue-sticks",
  category: "Electrical Safety Equipment",
  title: "High-Voltage Safety Rescue Sticks & Hooks (100 kV/ft)",
  description:
    "Essential high-voltage life-saving rescue sticks with 100 kV/foot dielectric fiberglass handles and dip-coated 450 mm hardened steel hooks for safely extracting electric shock victims from energized areas.",

  overview:
    "HVTI High Voltage Rescue Sticks (Rescue Hooks) are mandatory safety life-saving equipment designed for the rapid retrieval of victims of electric shock from energized substations, high-voltage switchgear cubicles, and industrial control rooms without endangering the rescuer. Manufactured from closed-cell foam-filled electrical fiberglass conforming to IEC 60855, IEC 61235, and IS 13770 with 100 kV/foot insulation, each stick is fitted with a wide-opening plastic-coated heat-treated steel hook, safety hand stopper, non-slip rubber grip, and protective rubber boot.",

  highlights: [
    "100 kV / Foot Certified Dielectric Insulation",
    "450 mm Dip-Coated Hardened Steel Rescue Hook",
    "Ergonomic Hand Safety Stopper & Non-Slip Grip",
    "Available in Lengths from 1.2 m to 3.0 m (IEC 60855)",
  ],

  renderType: "image",
  image: "/images/products/rescue-sticks.jpg",
  specImage: "/images/products/product-safety.jpg",

  engineeringAtAGlance: [
    {
      id: "dielectric",
      icon: "voltage",
      value: "100 kV / Foot",
      label: "INSULATION LEVEL",
      description: "Class F foam-filled fiberglass handle providing total electrical isolation for the rescuer.",
      highlighted: true,
    },
    {
      id: "hook-size",
      icon: "gear",
      value: "400 – 500 mm Opening",
      label: "HOOK GEOMETRY",
      description: "Wide-diameter coated steel hook designed to grip securely around the victim's waist or limbs.",
    },
    {
      id: "length",
      icon: "field",
      value: "1.2 m to 3.0 m",
      label: "STICK LENGTHS",
      description: "Available in standard 1.2 m, 1.8 m, 2.4 m, and 3.0 m single-piece rigid sticks.",
    },
    {
      id: "stopper",
      icon: "shield",
      value: "Safety Handguard",
      label: "SAFETY STOPPER",
      description: "Integrated barrier prevents rescuer's hands from sliding past the safe insulation zone.",
    },
  ],

  metrics: [
    {
      id: "insulation-rating",
      icon: "voltage",
      label: "DIELECTRIC RATING",
      value: "100 kV / Foot",
      subtext: "IEC 60855 / IEC 61235",
    },
    {
      id: "hook-opening",
      icon: "gear",
      label: "HOOK DIAMETER",
      value: "450 mm (18 Inches)",
      subtext: "Insulated dip-coated steel",
    },
    {
      id: "tensile-strength",
      icon: "testing",
      label: "HOOK CAPACITY",
      value: "> 150 kg Pulling Force",
      subtext: "Heavy-duty body retrieval",
    },
    {
      id: "lengths",
      icon: "field",
      label: "AVAILABLE SIZES",
      value: "1.2 m, 1.8 m, 2.4 m, 3.0 m",
      subtext: "Single-piece rigid construction",
    },
  ],

  specificationsTable: [
    {
      parameter: "Standard Compliance",
      details: "Insulating foam-filled tubes for live working & rescue apparatus",
      range: "IEC 60855, IEC 61235, IS 13770, ASTM F711",
    },
    {
      parameter: "Insulation Dielectric Withstand",
      details: "Closed-cell polyurethane foam-filled electrical grade fiberglass handle",
      range: "100 kV per foot for 5 minutes (Class 'F' rating)",
    },
    {
      parameter: "Rescue Hook Construction",
      details: "Heat-treated hardened alloy steel with high-visibility bright yellow PVC dip-coating",
      range: "Opening width: 400 mm to 500 mm (Grips waist, arms, or legs)",
    },
    {
      parameter: "Available Handle Lengths",
      details: "Single-piece high-rigidity fiberglass rods",
      range: "1.2 meters, 1.8 meters, 2.4 meters, 3.0 meters",
    },
    {
      parameter: "Mechanical Pull Strength",
      details: "Tested for rapid dragging of heavy adult personnel under high-friction surfaces",
      range: "> 150 kg (330 lbs) continuous pulling force without deformation",
    },
    {
      parameter: "Operator Safety Features",
      details: "Handguard safety stopper ring, non-slip textured rubber grip, rubber end cap",
      range: "Clearly demarcated safe hand holding zone",
    },
    {
      parameter: "Storage Mounting Bracket",
      details: "Optional wall-mounting bracket clips for rapid emergency substation access",
      range: "High-visibility emergency wall station",
    },
  ],

  applications: [
    {
      id: "substations",
      title: "High-Voltage Substation Switchyards",
      icon: "substation",
      isCenter: true,
    },
    {
      id: "switchgear-rooms",
      title: "Indoor Switchgear & Motor Control Centers (MCC)",
      icon: "switchgear",
    },
    {
      id: "test-laboratories",
      title: "High Voltage Test Labs & R&D Facilities",
      icon: "testing",
    },
    {
      id: "industrial-plants",
      title: "Heavy Industrial & Manufacturing Plant Rooms",
      icon: "gear",
    },
    {
      id: "power-generation",
      title: "Thermal, Hydro & Nuclear Power Plants",
      icon: "generator",
    },
  ],

  features: [
    {
      title: "100 kV/Foot Dielectric Insulation (IEC 60855 Certified)",
      description:
        "Closed-cell foam-filled fiberglass stick isolates the rescuer completely from energized high-voltage equipment, even if the hook makes direct contact with a live 100 kV line.",
    },
    {
      title: "Heavy-Duty Dip-Coated Hardened Steel Rescue Hook",
      description:
        "Formed from 18 mm hardened steel with an 18-inch (450 mm) curved opening that effortlessly slides around an unconscious victim's waist, shoulder, or thigh.",
    },
    {
      title: "High-Visibility Dielectric PVC Protective Coating",
      description:
        "Thick dip-coated insulation over the steel hook prevents accidental short-circuit sparking against nearby grounded metallic structures during rescue.",
    },
    {
      title: "Molded Safety Handguard Stopper",
      description:
        "Physical barrier ring prevents the rescuer's hands from sliding past the designated safe insulation distance in high-stress emergency situations.",
    },
    {
      title: "Mandatory OSHA & Central Electricity Authority Compliance",
      description:
        "Meets mandatory utility risk-assessment protocols requiring dedicated rescue hooks mounted beside all live high-voltage control rooms and test bays.",
    },
  ],

  benefits: [
    {
      id: "rescuer-protection",
      icon: "shield",
      title: "Protects the Rescuer from Secondary Shock",
      description:
        "Allows personnel to pull an electrocuted co-worker away from live conductors immediately without waiting for supply de-energization.",
    },
    {
      id: "rapid-response",
      icon: "gear",
      title: "Saves Critical Seconds During Cardiac Arrest",
      description:
        "Enables immediate CPR and medical intervention within the golden first minute after electric shock contact.",
    },
    {
      id: "durability",
      icon: "briefcase",
      title: "Decades of Maintenance-Free Standby Life",
      description:
        "Corrosion-proof fiberglass and heavy dip-coated steel ensure the hook remains 100% emergency-ready on the wall for decades.",
    },
  ],

  cta: {
    title: "Need mandatory rescue sticks for your substation or plant rooms?",
    description:
      "Contact our safety equipment team for bulk wall-mount rescue stick packages and utility compliance kits.",
    primaryButtonText: "Order Rescue Sticks",
    primaryButtonLink: "/contact?subject=High%20Voltage%20Rescue%20Sticks",
  },
};

export default rescueSticks;
