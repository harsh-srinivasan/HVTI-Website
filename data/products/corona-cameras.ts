import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: CORONA CAMERAS (SOLAR-BLIND UVc INSPECTION)
   File: data/products/corona-cameras.ts
   ================================================================ */

const coronaCameras: ProductData = {
  slug: "corona-cameras",
  category: "Cameras and Imaging Systems",
  title: "Solar-Blind UV Corona Cameras (CoroCAM 6D / 7 / 8)",
  description:
    "Professional solar-blind ultraviolet (UVc) inspection cameras (CoroCAM 6D, CoroCAM 7, CoroCAM 8) for detecting, visualizing, and pinpointing invisible high-voltage corona discharges, surface tracking, and arcing in broad daylight.",

  overview:
    "HVTI distributes the world-renowned CoroCAM® series of solar-blind ultraviolet (UVc) inspection systems engineered for high-voltage transmission lines, substations, and industrial power plants operating at 3.3 kV and above. The family includes the lightweight CoroCAM 6D with motorized Non-Solar Blind (NSB) night mode, the professional CoroCAM 7 with high-performance viewfinder and synchronized 4x zoom, and the multi-spectral CoroCAM 8 combining solar-blind UV, radiometric FLIR thermal IR, and high-definition Sony visible video into a single handheld inspection instrument.",

  highlights: [
    "CoroCAM® 6D / 7 / 8 Solar-Blind UVc Inspection Systems",
    "Full Daylight Corona Detection (2.05 × 10⁻¹⁸ W/cm² Sensitivity)",
    "Tri-Spectral CoroCAM 8 (Solar-Blind UV + FLIR IR + HD Video)",
    "Synchronized Optical/Digital Zoom & Real-Time Photon Counting",
  ],

  renderType: "image",
  image: "/images/products/corona-cameras.jpg",
  specImage: "/images/products/product-thermal.jpg",

  engineeringAtAGlance: [
    {
      id: "sensitivity",
      icon: "signal",
      value: "2.05 × 10⁻¹⁸ W/cm²",
      label: "UV SENSITIVITY",
      description: "High-sensitivity solar-blind UV detector capable of sensing the smallest micro-corona discharges.",
      highlighted: true,
    },
    {
      id: "daylight",
      icon: "field",
      value: "100% Solar-Blind",
      label: "SOLAR BLIND FILTER",
      description: "Specialized optical bandpass filter completely blocks sunlight wavelengths (240–280 nm).",
    },
    {
      id: "tri-spectral",
      icon: "control",
      value: "UV + IR + Visible",
      label: "COROCAM 8 TRI-CAMERA",
      description: "Simultaneous co-location of electrical corona discharges and thermal IR hotspots in one frame.",
    },
    {
      id: "counting",
      icon: "testing",
      value: "Real-Time Photon Count",
      label: "DISCHARGE QUANTIFICATION",
      description: "Measures and logs calibrated UV photon counts with distance compensation algorithms.",
    },
  ],

  metrics: [
    {
      id: "uv-sensitivity",
      icon: "signal",
      label: "UV SENSITIVITY",
      value: "2.05 × 10⁻¹⁸ W/cm²",
      subtext: "Senses smallest discharges",
    },
    {
      id: "spectral-range",
      icon: "testing",
      label: "UV BANDWIDTH",
      value: "240 nm – 280 nm",
      subtext: "Solar-blind UVc spectrum",
    },
    {
      id: "tri-spectral",
      icon: "control",
      label: "SPECTRAL CHANNELS",
      value: "UV + Thermal IR + Video",
      subtext: "CoroCAM 8 Tri-Spectral",
    },
    {
      id: "display",
      icon: "power",
      label: "VIEWFINDER & LCD",
      value: "5.7-inch Daylight LCD",
      subtext: "High-resolution 800x600",
    },
  ],

  specificationsTable: [
    {
      parameter: "Available Camera Models",
      details: "CoroCAM 6D (Compact), CoroCAM 7 (Professional), CoroCAM 8 (Tri-Spectral UV+IR)",
      range: "Engineered for HV inspections from 3.3 kV to 800 kV UHV",
    },
    {
      parameter: "Ultraviolet Detector Sensitivity",
      details: "High-sensitivity solar-blind photocathode sensor",
      range: "2.05 × 10⁻¹⁸ W/cm² (Detects < 1 pC corona at 10 meters)",
    },
    {
      parameter: "UV Spectral Passband",
      details: "Solar-Blind Mode: 240 nm – 280 nm; Non-Solar-Blind Mode: 240 nm – 380 nm (Night mode)",
      range: "Motorized filter switching available on CoroCAM 6D & 7",
    },
    {
      parameter: "Thermal IR Channel (CoroCAM 8)",
      details: "Radiometric FLIR Uncooled Microbolometer (640x480 pixels, NETD < 62.5 mK)",
      range: "Measurement range: -20°C to +650°C with 15 color palettes",
    },
    {
      parameter: "Visible Optical Channel",
      details: "High-specification Sony color video camera (768x576 pixels, 0.0004 lux low-light mode)",
      range: "Synchronized smooth optical/digital zoom up to 4x system zoom",
    },
    {
      parameter: "Display & Viewfinder Options",
      details: "Variable-angle 5.7-inch daylight-readable LCD + focusable 800x600 ventilated viewfinder",
      range: "Real-time On-Screen Display (OSD) showing photon count, GPS, zoom, date",
    },
    {
      parameter: "GPS & Environmental Metadata",
      details: "Integrated GPS with internal/external booster antenna and environmental metadata logging",
      range: "Logs distance, ambient temperature, humidity, and barometric pressure",
    },
    {
      parameter: "Power Supply & Battery Life",
      details: "Standard commercial lightweight rechargeable Li-ion battery packs",
      range: "Up to 3 hours continuous operating time per battery pack",
    },
  ],

  applications: [
    {
      id: "overhead-insulators",
      title: "Transmission Line Insulator Strings",
      icon: "field",
      isCenter: true,
    },
    {
      id: "substation-busbars",
      title: "Substation Busbars, Jumpers & Clamps",
      icon: "substation",
    },
    {
      id: "switchgear-bushings",
      title: "Transformer & Circuit Breaker Bushings",
      icon: "switchgear",
    },
    {
      id: "generators-motors",
      title: "Generator End-Winding Corona Inspections",
      icon: "generator",
    },
    {
      id: "surge-arresters",
      title: "Lightning Arresters & Disconnectors",
      icon: "transformer",
    },
  ],

  features: [
    {
      title: "100% Daylight Solar-Blind UVc Detection (240–280 nm)",
      description:
        "Specialized solar-blind optical filters completely reject daylight solar radiation, enabling high-voltage inspection crews to detect corona streamers and micro-arcs under blazing mid-day sunlight.",
    },
    {
      title: "Revolutionary CoroCAM 8 Tri-Spectral Co-Location (UV + IR + Visible)",
      description:
        "Combines a solar-blind UV camera, a radiometric FLIR thermal camera, and a high-definition Sony visible camera in a single housing, allowing inspectors to visualize both electrical arcing and thermal hotspots simultaneously.",
    },
    {
      title: "Real-Time Translucent Photon Overlay with User Palette Selection",
      description:
        "Superimposes sparkling UV discharge photon counts onto the visible high-resolution video stream in selectable neon colors, pinpointing the exact physical component causing the discharge.",
    },
    {
      title: "Calibrated Photon Counting with Distance Compensation",
      description:
        "Calculates quantitative discharge intensity metrics, automatically normalizing photon counts for target distance and ambient air density for repeatable trending.",
    },
    {
      title: "Integrated GPS & Full Environmental Metadata Embedding",
      description:
        "Embeds precise GPS coordinates, distance measurements, ambient humidity, temperature, and camera settings directly into captured still images and video files.",
    },
  ],

  benefits: [
    {
      id: "early-detection",
      icon: "shield",
      title: "Detects Non-Thermal Insulation Failures",
      description:
        "Unlike thermal cameras which only see heat from heavy current flow, corona cameras detect early surface tracking and partial discharge where zero heat is generated.",
    },
    {
      id: "inspection-efficiency",
      icon: "gear",
      title: "Halves Inspection Flight & Walking Times",
      description:
        "With CoroCAM 8, helicopter and ground patrol crews capture both thermal IR audits and UV corona diagnostics in a single sweep.",
    },
    {
      id: "outage-prevention",
      icon: "briefcase",
      title: "Prevents Catastrophic Insulator Flashovers",
      description:
        "Locates cracked composite/porcelain insulators, loose hardware, and corona cutting on transmission lines months before catastrophic line drops occur.",
    },
  ],

  cta: {
    title: "Interested in the CoroCAM® series for transmission line audits?",
    description:
      "Contact our optical diagnostic specialists for live field demonstrations, camera comparisons, and rental/purchase quotations.",
    primaryButtonText: "Request CoroCAM Quote",
    primaryButtonLink: "/contact?subject=Corona%20Cameras",
  },
};

export default coronaCameras;
