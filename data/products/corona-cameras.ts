import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: CORONA CAMERAS (SOLAR-BLIND UVc INSPECTION)
   File: data/products/corona-cameras.ts
   ================================================================ */

const coronaCameras: ProductData = {
  slug: "corona-cameras",
  category: "Cameras and Imaging Systems",
  title: "Solar-Blind UV Corona Cameras",
  tagline: "Detect Early. Prevent Failures.",
  description:
    "Advanced UV and daylight corona cameras for detecting corona discharges in high-voltage equipment. Improve reliability and safety with early fault detection.",

  overview:
    "HVTI distributes the world-renowned CoroCAM® series of solar-blind ultraviolet (UVc) inspection systems engineered for high-voltage transmission lines, substations, and industrial power plants operating at 3.3 kV and above. The family includes the lightweight CoroCAM 6D with motorized Non-Solar Blind (NSB) night mode, the professional CoroCAM 7 with high-performance viewfinder and synchronized 4x zoom, and the multi-spectral CoroCAM 8 combining solar-blind UV, radiometric FLIR thermal IR, and high-definition Sony visible video into a single handheld inspection instrument.",

  highlights: [
    "Detect corona discharges",
    "Day and night operation",
    "Improve system reliability",
    "Solar-blind UVc 240–280 nm",
  ],

  renderType: "image",
  image: "/images/products/corocam-8.png",
  specImage: "/images/products/product-thermal.jpg",

  rangeEyebrow: "OUR CORONA CAMERA RANGE",
  rangeHeading: "Select the ideal solar-blind UV camera for your inspection voltage class.",

  productVariants: [
    {
      id: "corocam6d",
      name: "CoroCAM 6D",
      subtitle: "Daylight UV Corona Inspection Camera",
      badge: "Compact UV",
      image: "/images/products/corocam-6d.png",
      description:
        "Innovative solar-blind UVc camera engineered for routine substation and switchgear inspection. Features high UV sensitivity, motorized NSB night mode, and daylight-readable LCD.",
      bulletPoints: [
        "High-sensitivity UVc detector (2.05 × 10⁻¹⁸ W/cm²)",
        "Motorized Non-Solar-Blind (NSB) night inspection mode",
        "768 × 576 visible color camera (0.0004 lux low-light)",
        "Translucent UV overlay with user-selectable color palettes",
      ],
      ctaText: "View Details",
      ctaLink: "#comparison-table",
    },
    {
      id: "corocam7",
      name: "CoroCAM 7 / 7D",
      subtitle: "Professional Enhanced UV Camera with Viewfinder",
      badge: "Viewfinder & 4x Zoom",
      image: "/images/products/corocam-7.png",
      description:
        "Professional grade solar-blind UVc inspection system paired with a high-resolution 800×600 ventilated viewfinder, synchronized 4x optical/digital zoom, and distance compensation.",
      bulletPoints: [
        "Focusable 800×600 ventilated viewfinder + 5.7″ daylight LCD",
        "Synchronized UV & visible zoom from 1x to 4x system zoom",
        "Real-time photon count with distance compensation algorithms",
        "Integrated GPS and high-power auxiliary flashlight",
      ],
      ctaText: "View Details",
      ctaLink: "#comparison-table",
    },
    {
      id: "corocam8",
      name: "CoroCAM 8",
      subtitle: "Tri-Spectral Multi-Channel Camera (UV + IR + Visible)",
      badge: "Tri-Spectral Elite",
      image: "/images/products/corocam-8.png",
      description:
        "Flagship inspection instrument combining solar-blind UVc, radiometric FLIR thermal IR (640×480), and Sony HD visible video. Enables simultaneous co-location of corona arcs and thermal hot spots.",
      bulletPoints: [
        "Simultaneous UV Corona + FLIR Thermal IR + Sony HD Video",
        "Radiometric 640×480 IR channel (NETD < 62.5 mK, -20°C to +650°C)",
        "Simultaneous co-location of electrical discharge & thermal faults",
        "Full environmental metadata logging: GPS, temp, humidity, pressure",
      ],
      ctaText: "View Details",
      ctaLink: "#comparison-table",
    },
  ],

  comparisonMatrix: {
    title: "Compare Corona Cameras",
    fullSpecLink: "/contact?subject=Corona%20Camera%20Datasheet",
    columns: [
      { id: "corocam6d", name: "CoroCAM 6D", tag: "Compact Daylight", image: "/images/products/corocam-6d.png" },
      { id: "corocam7", name: "CoroCAM 7", tag: "Professional Viewfinder", image: "/images/products/corocam-7.png" },
      { id: "corocam8", name: "CoroCAM 8", tag: "Tri-Spectral UV+IR", image: "/images/products/corocam-8.png" },
    ],
    rows: [
      {
        parameter: "UV Detector Sensitivity",
        values: {
          corocam6d: "2.05 × 10⁻¹⁸ W/cm² (< 1 pC @ 10m)",
          corocam7: "2.05 × 10⁻¹⁸ W/cm² (< 1 pC @ 10m)",
          corocam8: "2.05 × 10⁻¹⁸ W/cm² (< 1 pC @ 10m)",
        },
        highlight: true,
      },
      {
        parameter: "Visible Optical Channel",
        values: {
          corocam6d: "768 × 576 px (0.0004 lux low-light)",
          corocam7: "768 × 576 px High-Zoom Camera",
          corocam8: "High-Specification Sony HD Video",
        },
      },
      {
        parameter: "Thermal Infrared Channel",
        values: {
          corocam6d: "—",
          corocam7: "—",
          corocam8: "FLIR Radiometric (640×480, NETD <62.5mK)",
        },
        highlight: true,
      },
      {
        parameter: "Day / Night Operation",
        values: {
          corocam6d: "Full Daylight + NSB Night Mode",
          corocam7: "Full Daylight + NSB Night Mode",
          corocam8: "Full Daylight Solar-Blind UV + Thermal",
        },
      },
      {
        parameter: "Display & Viewfinder",
        values: {
          corocam6d: "5.7″ Colour LED Daylight LCD (640×480)",
          corocam7: "5.7″ LCD + 800×600 Ventilated Viewfinder",
          corocam8: "5.7″ Daylight LCD + 800×600 Viewfinder",
        },
      },
      {
        parameter: "System Zoom Capability",
        values: {
          corocam6d: "1x – 2x Synchronized Zoom",
          corocam7: "1x – 4x Synchronized Zoom",
          corocam8: "Synchronized Smooth 3-Channel Zoom",
        },
      },
      {
        parameter: "Metadata & Environmental Logging",
        values: {
          corocam6d: "Integrated GPS + OSD Overlay",
          corocam7: "GPS + Distance Compensation",
          corocam8: "GPS + Temp, Humidity, Pressure & Wind",
        },
      },
      {
        parameter: "Primary Applications",
        values: {
          corocam6d: "Substation Busbars, Switchgear & Motor End-Turns",
          corocam7: "Overhead Transmission Lines & Tower Insulators",
          corocam8: "Tri-Spectral Substation, Power Plant & Line Audits",
        },
      },
    ],
  },

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
      id: "transmission-lines",
      title: "Transmission Lines",
      icon: "field",
      description: "Inspect ceramic, glass, and composite polymer insulator strings across energized lines.",
    },
    {
      id: "substations",
      title: "Substations",
      icon: "substation",
      description: "Detect surface tracking and micro-arcing on disconnectors, busbars, and surge arresters.",
    },
    {
      id: "switchgear",
      title: "Switchgear",
      icon: "switchgear",
      description: "Identify insulation degradation and partial discharge inside medium-voltage switchrooms.",
    },
    {
      id: "transformers",
      title: "Transformers",
      icon: "transformer",
      description: "Inspect high-voltage transformer bushings, cable terminations, and tap-changer connections.",
    },
    {
      id: "insulators",
      title: "Insulators",
      icon: "voltage",
      description: "Pinpoint micro-cracks and hydrophobic loss in composite insulators before flashover occurs.",
    },
    {
      id: "utility-maintenance",
      title: "Utility Maintenance",
      icon: "shield",
      description: "Routine aerial or ground-based predictive maintenance across power distribution networks.",
    },
  ],

  benefits: [
    {
      id: "early-detection",
      icon: "shield",
      title: "Detects Non-Thermal Faults",
      description:
        "Unlike thermal cameras which only see heat from heavy current flow, corona cameras detect early surface tracking and partial discharge where zero heat is generated.",
    },
    {
      id: "broad-daylight",
      icon: "testing",
      title: "100% Solar Blind Daylight Use",
      description:
        "Inspect high-voltage equipment under bright midday sunlight without taking lines out of service or waiting for nighttime outages.",
    },
    {
      id: "quantitative-trending",
      icon: "control",
      title: "Calibrated Photon Counting",
      description:
        "Logs precise discharge intensity values normalized for target distance, establishing reliable condition trending over asset lifespans.",
    },
    {
      id: "tri-spectral-efficiency",
      icon: "power",
      title: "Tri-Spectral CoroCAM 8",
      description:
        "Complete both thermal infrared and solar-blind UV corona audits in a single inspection pass, cutting field survey time by 50%.",
    },
  ],

  cta: {
    title: "Need help selecting the right corona camera?",
    description:
      "Our high-voltage diagnostics specialists will help you choose between the CoroCAM 6D, 7, and Tri-Spectral 8 based on your inspection voltage levels and operating environments.",
    primaryButtonText: "Talk to an Engineer",
    primaryButtonLink: "/contact?subject=Corona%20Cameras%20Inquiry",
    secondaryButtonText: "Download Brochure",
    secondaryButtonLink: "/resources",
    supportingImage: "/images/products/corocam-8.png",
  },
};

export default coronaCameras;
