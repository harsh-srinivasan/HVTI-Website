import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: DROP OUT FUSE OPERATING RODS
   File: data/products/dropout-fuse-operating-rods.ts
   ================================================================ */

const dropoutFuseOperatingRods: ProductData = {
  slug: "dropout-fuse-operating-rods",
  category: "Electrical Safety Equipment",
  title: "Drop Out Fuse Operating Rods & Pullers",
  description:
    "Specialized telescopic fiberglass operating hot sticks with spring-loaded fuse jaws for safely fitting, removing, and changing 11 kV to 33 kV drop-out (DO) fuse barrels from ground level.",

  overview:
    "HVTI Drop Out Fuse Operating Rods are innovatively engineered for fitting, removing, and replacing 11 kV, 22 kV, and 33 kV Drop Out (DO) fuse barrels on pole-mounted distribution transformers. Featuring a spring-loaded Fuse Jaw head that firmly grips and locks the DO fuse carrier, ensuring it cannot slip or fall during removal or insertion. The entire operation is carried out effortlessly and safely from ground level, eliminating the need to climb energized poles.",

  highlights: [
    "Spring-Loaded Positive-Lock Fuse Jaw Head",
    "Safe Ground-Level Operation (No Pole Climbing)",
    "Telescopic Fiberglass Pole (Up to 6 m Reach)",
    "Class F High-Dielectric Insulation (IEC 855)",
  ],

  renderType: "image",
  image: "/images/products/dropout-fuse-operating-rods.jpg",
  specImage: "/images/products/product-safety.jpg",

  engineeringAtAGlance: [
    {
      id: "jaw",
      icon: "gear",
      value: "Spring-Loaded Jaw",
      label: "FUSE HEAD DESIGN",
      description: "Locks DO fuse barrel firmly; prevents accidental dropping during overhead replacement.",
      highlighted: true,
    },
    {
      id: "voltage",
      icon: "voltage",
      value: "11 kV – 33 kV",
      label: "VOLTAGE RATING",
      description: "Engineered for all standard distribution transformer drop-out fuse carriers.",
    },
    {
      id: "reach",
      icon: "field",
      value: "Up to 6.0 Meters",
      label: "TELESCOPIC REACH",
      description: "Adjustable telescopic sections allow linemen to reach high pole crossarms from the ground.",
    },
    {
      id: "insulation",
      icon: "shield",
      value: "Class F Foam-Filled",
      label: "DIELECTRIC STRENGTH",
      description: "100 kV/ft proof tested fiberglass pole conforms to IEC 60855.",
    },
  ],

  metrics: [
    {
      id: "operating-voltage",
      icon: "voltage",
      label: "SYSTEM VOLTAGE",
      value: "11 kV to 33 kV",
      subtext: "Distribution Transformers",
    },
    {
      id: "stick-length",
      icon: "field",
      label: "EXTENDED LENGTH",
      value: "4.5 m to 6.0 m",
      subtext: "3 to 4 telescopic sections",
    },
    {
      id: "insulation-level",
      icon: "testing",
      label: "INSULATION LEVEL",
      value: "100 kV / Foot",
      subtext: "Closed-cell foam filled",
    },
    {
      id: "weight",
      icon: "briefcase",
      label: "TOTAL WEIGHT",
      value: "< 3.2 kg",
      subtext: "Lightweight ergonomic pole",
    },
  ],

  specificationsTable: [
    {
      parameter: "Application Voltage Class",
      details: "Medium voltage distribution transformer DO fuse units",
      range: "11 kV, 22 kV, 33 kV installations",
    },
    {
      parameter: "Fuse Jaw Head Mechanism",
      details: "Spring-loaded capturing jaw with guide prongs and locking latch",
      range: "Fits porcelain & polymer DO fuse tubes from 30 mm to 65 mm diameter",
    },
    {
      parameter: "Pole Construction",
      details: "Closed-cell foam-filled electrical grade fiberglass (FRP)",
      range: "Class 'F' insulation conforming to IEC 855 & IS 13770",
    },
    {
      parameter: "Sectional Adjustment",
      details: "Telescopic push-button quick-locking sections",
      range: "Collapsed: 1.6 m; Fully Extended: 4.5 m / 6.0 m",
    },
    {
      parameter: "Dielectric Strength",
      details: "Factory routine flashover and withstand tested",
      range: "100 kV/foot for 5 minutes",
    },
    {
      parameter: "Base & Grip Protection",
      details: "Heavy-duty non-slip ribbed neoprene rubber foot and safety hand stop",
      range: "Provides solid ground resting and hand isolation",
    },
    {
      parameter: "Accessories Included",
      details: "Heavy-duty water-repellant carrying bag and replacement spring kit",
      range: "Turnkey field kit",
    },
  ],

  applications: [
    {
      id: "pole-transformers",
      title: "Pole Mounted Distribution Transformers",
      icon: "transformer",
      isCenter: true,
    },
    {
      id: "feeder-branching",
      title: "11 kV / 33 kV Feeder Branching Tap-Offs",
      icon: "field",
    },
    {
      id: "substation-incomers",
      title: "Substation Distribution Incomers",
      icon: "substation",
    },
    {
      id: "switchgear",
      title: "Outdoor Switching Yards",
      icon: "switchgear",
    },
    {
      id: "utility-maintenance",
      title: "Rural & Urban DISCOM Maintenance",
      icon: "cable",
    },
  ],

  features: [
    {
      title: "Spring-Loaded Fuse Jaw with Fall Prevention",
      description:
        "Specially shaped capturing jaw securely locks around the fuse barrel trunnion, preventing expensive porcelain fuse carriers from dropping and shattering on the ground during replacement.",
    },
    {
      title: "Safe Ground-Level Operation Without Climbing Poles",
      description:
        "Allows linemen to open, pull down, re-fuse, and reinstall the DO fuse unit standing comfortably on the ground, completely eliminating ladder accidents and falling hazards.",
    },
    {
      title: "High-Modulus Telescopic Fiberglass Pole",
      description:
        "Reinforced resin structure provides exceptional rigidity with minimal bending when lifting and positioning heavy fuse barrels into high overhead contacts.",
    },
    {
      title: "Dielectric Foam-Filled Closed-Cell Interior",
      description:
        "Eliminates internal moisture absorption and tracking, ensuring total operator insulation when working near energized overhead jumpers.",
    },
  ],

  benefits: [
    {
      id: "safety",
      icon: "shield",
      title: "Prevents Lineman Falls & Electrocution",
      description:
        "Operating from the ground eliminates 90% of distribution line maintenance hazards associated with climbing wet or damaged utility poles.",
    },
    {
      id: "speed",
      icon: "gear",
      title: "Cuts Fuse Replacement Time to Under 2 Minutes",
      description:
        "Enables rapid power restoration for distribution substations and transformer centers with effortless push-and-twist fuse engagement.",
    },
    {
      id: "savings",
      icon: "briefcase",
      title: "Protects Costly Fuse Barrels from Impact Damage",
      description:
        "Positive-locking mechanical fingers prevent fuse tubes from slipping out and breaking during replacement.",
    },
  ],

  cta: {
    title: "Need efficient drop-out fuse operating rods for your linemen?",
    description:
      "Contact our distribution equipment team to order standard or custom-length DO fuse operating rods for your utility fleet.",
    primaryButtonText: "Request DO Rod Pricing",
    primaryButtonLink: "/contact?subject=Drop%20Out%20Fuse%20Operating%20Rods",
  },
};

export default dropoutFuseOperatingRods;
