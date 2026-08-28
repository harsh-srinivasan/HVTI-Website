import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: THERMAL IMAGING CAMERAS
   File: data/products/thermal-imaging-cameras.ts
   ================================================================ */

const thermalImagingCameras: ProductData = {
  slug: "thermal-imaging-cameras",
  category: "Cameras and Imaging Systems",
  title: "Thermal Imaging Cameras (PK-160 / PK-80 & TP Series)",
  description:
    "Professional high-resolution infrared thermal imaging cameras and Android portable thermal tablets (PK-160 / PK-80 / TP-series) for pinpointing electrical hotspots, overloaded switchgear, loose connections, and transformer thermal anomalies.",

  overview:
    "HVTI provides industry-grade thermal imaging solutions engineered specifically for electrical utilities, industrial plants, and predictive maintenance inspections. The lineup features innovative Portable Thermal Tablets including the PK-160 (160x120 IR resolution, 8MP visual camera, Android OS, Wi-Fi, Bluetooth) and PK-80, along with high-definition TP-series long-range thermal cameras with NETD < 30 mK thermal sensitivity, motorized auto-focusing optics, dual-spectral image blending, and automated hot-spot tracking.",

  highlights: [
    "PK-160 / PK-80 Portable Android Thermal Tablets",
    "High-Sensitivity Infrared Detectors (NETD < 30 mK)",
    "Dual-Vision Thermal & 8 MP Optical Fusion Blending",
    "Integrated Wi-Fi, Bluetooth, Compass & Hot-Spot Tracking",
  ],

  renderType: "image",
  image: "/images/products/thermal-imaging-cameras.jpg",
  specImage: "/images/products/product-thermal.jpg",

  engineeringAtAGlance: [
    {
      id: "resolution",
      icon: "signal",
      value: "Up to 640 x 480 IR",
      label: "THERMAL RESOLUTION",
      description: "High-density uncooled focal plane array (UFPA) sensor for crisp infrared thermograms.",
      highlighted: true,
    },
    {
      id: "sensitivity",
      icon: "testing",
      value: "NETD < 30 mK",
      label: "THERMAL SENSITIVITY",
      description: "Resolves minute temperature differences down to 0.03°C for early hotspot detection.",
    },
    {
      id: "platform",
      icon: "control",
      value: "Android OS Tablet",
      label: "SMART PLATFORM",
      description: "PK-160 integrates tablet touch technology with instant Wi-Fi cloud report sharing.",
    },
    {
      id: "range",
      icon: "voltage",
      value: "-20°C to +650°C",
      label: "TEMPERATURE SPAN",
      description: "Wide temperature measurement span for electrical, mechanical, and refractory testing.",
    },
  ],

  metrics: [
    {
      id: "ir-resolution",
      icon: "signal",
      label: "IR RESOLUTION",
      value: "160x120 to 640x480",
      subtext: "Uncooled microbolometer",
    },
    {
      id: "temp-range",
      icon: "testing",
      label: "TEMP RANGE",
      value: "-20°C to +650°C",
      subtext: "Optional up to 1500°C",
    },
    {
      id: "visual-camera",
      icon: "field",
      label: "VISUAL CAMERA",
      value: "8 MegaPixel HD",
      subtext: "Dual-spectral fusion",
    },
    {
      id: "connectivity",
      icon: "power",
      label: "CONNECTIVITY",
      value: "Wi-Fi / Bluetooth / USB",
      subtext: "Instant mobile sync",
    },
  ],

  specificationsTable: [
    {
      parameter: "Detector Type & Pitch",
      details: "Uncooled Focal Plane Array (UFPA) Vox Microbolometer (17 μm / 12 μm)",
      range: "Models: PK-80 (80x60), PK-160 (160x120), TP-Series (384x288, 640x480)",
    },
    {
      parameter: "Thermal Sensitivity (NETD)",
      details: "High signal-to-noise ratio for fine thermal gradient resolution",
      range: "< 30 mK to < 50 mK at 30°C",
    },
    {
      parameter: "Spectral Range",
      details: "Standard long-wave infrared band",
      range: "7.5 to 14 μm",
    },
    {
      parameter: "Temperature Measurement Range",
      details: "Multi-range selectable for low, medium, and high temperature targets",
      range: "-20°C to +150°C, 0°C to +650°C (Extendible to +1500°C)",
    },
    {
      parameter: "Measurement Accuracy",
      details: "Calibrated radiometry with ambient and emissivity correction",
      range: "± 2°C or ± 2% of reading",
    },
    {
      parameter: "Optical & Focusing Options",
      details: "Manual and precision motorized auto-focus with interchangeable lenses",
      range: "Standard 25 mm lens (Optional 50 mm / 100 mm telephoto lenses)",
    },
    {
      parameter: "Display & User Interface",
      details: "Capacitive multi-touch LCD touchscreen with adjustable brightness",
      range: "4.3-inch to 5.5-inch high-brightness daylight readable display",
    },
    {
      parameter: "Operating System & Software",
      details: "Android OS platform supporting custom customer inspection apps",
      range: "Includes PC reporting software and mobile analysis application",
    },
  ],

  applications: [
    {
      id: "substations",
      title: "Substation Busbar Joints & Disconnectors",
      icon: "substation",
      isCenter: true,
    },
    {
      id: "switchgear",
      title: "Indoor Switchgear & Circuit Breakers",
      icon: "switchgear",
    },
    {
      id: "transformers",
      title: "Transformer Radiators & Bushings",
      icon: "transformer",
    },
    {
      id: "transmission-lines",
      title: "Overhead Transmission Line Clamps",
      icon: "field",
    },
    {
      id: "industrial-motors",
      title: "Heavy Industrial Motors & Bearings",
      icon: "generator",
    },
  ],

  features: [
    {
      title: "Smart Android Tablet Architecture (PK-160 / PK-80)",
      description:
        "Integrates an open Android platform with a high-performance infrared camera, enabling inspectors to run company-specific apps, create PDF reports on site, and email thermal images over 4G/Wi-Fi.",
    },
    {
      title: "Dual-Vision Thermal & High-Definition Optical Blending",
      description:
        "Fuses radiometric thermal heatmaps onto crisp 8 MP visual photographs (picture-in-picture and edge blending), making it effortless to identify exact component labels.",
    },
    {
      title: "Automated Dynamic Hot & Cold Spot Tracking",
      description:
        "On-screen cursors automatically lock onto the maximum and minimum temperature points in the frame, alerting the inspector instantly to localized high-resistance joints.",
    },
    {
      title: "Interchangeable Telephoto Lenses for Long-Distance Utility Towers",
      description:
        "Supports 50 mm and 100 mm optional telephoto lenses to inspect energized transmission tower insulators and clamp connectors safely from ground level.",
    },
    {
      title: "Complete Radiometric Video & Snapshot Recording",
      description:
        "Saves full radiometric temperature data for every single pixel in standard JPEG/MP4 formats, allowing comprehensive post-inspection analysis in desktop software.",
    },
  ],

  benefits: [
    {
      id: "hotspot-identification",
      icon: "shield",
      title: "Pinpoints Loose Contacts Before Melt-Down",
      description:
        "Detects high-resistance bolted connections, corroded crimps, and phase unbalances during routine walk-through inspections before power outages occur.",
    },
    {
      id: "reporting-speed",
      icon: "gear",
      title: "Instant Field Report Generation",
      description:
        "Generates standardized electrical thermography compliance reports directly on the device, eliminating hours of manual office data entry.",
    },
    {
      id: "ergonomics",
      icon: "briefcase",
      title: "Rugged Field Ergonomics",
      description:
        "Drop-tested, lightweight construction with long-life rechargeable battery packs designed for full-day utility audit rounds.",
    },
  ],

  cta: {
    title: "Looking for professional thermal imaging cameras or tablets?",
    description:
      "Contact our optical imaging specialists for demonstrations, lens selections, and thermography training packages.",
    primaryButtonText: "Request Camera Demonstration",
    primaryButtonLink: "/contact?subject=Thermal%20Imaging%20Cameras",
  },
};

export default thermalImagingCameras;
