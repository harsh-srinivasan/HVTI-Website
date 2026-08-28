import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT DATA: HIGH VOLTAGE AC/DC DIVIDERS
   File: data/products/hv-ac-dc-dividers.ts
   ================================================================ */

const hvACDCDividers: ProductData = {
  slug: "hv-ac-dc-dividers",
  category: "Electrical Testing Equipment",
  title: "High Voltage AC/DC Dividers & Sphere Gaps",
  description:
    "High-precision resistive, capacitive, and R-C network high-voltage dividers engineered for accurate laboratory calibration and field measurement of AC, DC, and impulse high-voltage waveforms.",

  overview:
    "HVTI High Voltage AC/DC Dividers are available in Resistive, Capacitive, and damped capacitive R-C Network designs. Engineered for precision dielectric test measurements, high-voltage calibration, and impulse waveform recording. In addition, HVTI supplies high-precision Sphere Gaps from 20 mm to 1000 mm diameter conforming to IEC 60052 as absolute standards for calibration of high voltage test equipment.",

  highlights: [
    "Resistive, Capacitive & R-C Designs",
    "Up to 800 kV AC / DC / Impulse",
    "High Precision ± 0.5% Accuracy",
    "Standard Sphere Gaps (20 mm – 1000 mm)",
  ],

  renderType: "image",
  image: "/images/products/hv-ac-dc-dividers.jpg",
  specImage: "/images/products/product-testing.jpg",

  engineeringAtAGlance: [
    {
      id: "voltage",
      icon: "voltage",
      value: "Up to 800 kV",
      label: "VOLTAGE RATING",
      description: "Available in voltage classes from 20 kV up to 800 kV for laboratory and substation use.",
      highlighted: true,
    },
    {
      id: "types",
      icon: "control",
      value: "Resistive / R-C / Capacitive",
      label: "DIVIDER TYPES",
      description: "Broadband frequency response for DC, 50/60 Hz AC, and lightning impulse waveforms.",
    },
    {
      id: "accuracy",
      icon: "testing",
      value: "± 0.5% Class",
      label: "MEASURING ACCURACY",
      description: "Ultra-low temperature and voltage coefficients ensuring long-term measurement stability.",
    },
    {
      id: "sphere-gaps",
      icon: "field",
      value: "20 mm – 1000 mm",
      label: "SPHERE GAP STANDARDS",
      description: "Conforming strictly to IEC 60052 absolute calibration standards.",
    },
  ],

  metrics: [
    {
      id: "voltage",
      icon: "voltage",
      label: "MAX VOLTAGE",
      value: "50 kV – 800 kV",
      subtext: "AC / DC / Impulse",
    },
    {
      id: "division-ratio",
      icon: "signal",
      label: "DIVISION RATIO",
      value: "1000:1 / 2000:1 / 10000:1",
      subtext: "Custom ratios on request",
    },
    {
      id: "bandwidth",
      icon: "frequency",
      label: "FREQUENCY BANDWIDTH",
      value: "DC to 2 MHz",
      subtext: "Fast transient response",
    },
    {
      id: "impedance",
      icon: "power",
      label: "INPUT IMPEDANCE",
      value: "100 MΩ – 1000 MΩ",
      subtext: "Ultra-low loading error",
    },
  ],

  specificationsTable: [
    {
      parameter: "Divider Network Types",
      details: "Resistive (DC/AC), Capacitive (AC/Impulse), Damped R-C (Universal)",
      range: "Universal high voltage measurement",
    },
    {
      parameter: "Rated Voltage Classes",
      details: "Custom heights and voltage ratings available",
      range: "50 kV, 100 kV, 200 kV, 300 kV, 500 kV, 800 kV",
    },
    {
      parameter: "Measurement Uncertainty",
      details: "Calibrated against national standards",
      range: "± 0.5% (DC & AC), ± 1.0% (Lightning Impulse)",
    },
    {
      parameter: "Scale Factor / Division Ratio",
      details: "Matched with 50 Ω or 1 MΩ instrument input",
      range: "1000:1, 2000:1, 5000:1, 10000:1 ± 0.2%",
    },
    {
      parameter: "Frequency Response",
      details: "Full broadband bandwidth",
      range: "DC up to 2 MHz (R-C Network)",
    },
    {
      parameter: "Sphere Gap Calibration Standards",
      details: "Precision copper/brass spheres with motorized/manual adjustment",
      range: "20 mm, 50 mm, 100 mm, 250 mm, 500 mm, 750 mm, 1000 mm",
    },
    {
      parameter: "Signal Output Connector",
      details: "Shielded coaxial BNC output with transient suppression",
      range: "Standard 50 Ω coaxial cable",
    },
    {
      parameter: "Standard Compliance",
      details: "High-voltage test techniques",
      range: "IEC 60060-2 & IEC 60052",
    },
  ],

  applications: [
    {
      id: "hv-labs",
      title: "High Voltage Test Labs",
      icon: "substation",
      isCenter: true,
    },
    {
      id: "calibration",
      title: "Calibration Facilities",
      icon: "testing",
    },
    {
      id: "substations",
      title: "Substation Diagnostic Sets",
      icon: "switchgear",
    },
    {
      id: "transformers",
      title: "Power Transformer Testing",
      icon: "transformer",
    },
    {
      id: "impulse-testing",
      title: "Impulse Generators",
      icon: "signal",
    },
  ],

  features: [
    {
      title: "Resistive, Capacitive & Universal R-C Network Architectures",
      description:
        "Choose from pure resistive dividers for DC systems, capacitive dividers for AC power frequency, or damped R-C dividers for all waveform modes including lightning impulses.",
    },
    {
      title: "Ultra-Low Temperature & Voltage Drift",
      description:
        "Constructed with specialized low-temperature coefficient non-inductive resistors and high-stability dielectric capacitors to preserve ratio calibration under heavy electrical stress.",
    },
    {
      title: "Toroidal Corona Shielding Ring",
      description:
        "Equipped with smooth aluminum grading and corona rings to equalize potential distribution and eliminate partial discharge inception at full rated voltage.",
    },
    {
      title: "IEC 60052 Standard Sphere Gaps",
      description:
        "Precision machined, highly polished sphere gaps with micro-metric scale adjustments for verifying peak voltages in dielectric breakdown tests.",
    },
    {
      title: "Direct Oscilloscope & Voltmeter Interfacing",
      description:
        "Supplied with matched 50-ohm double-shielded coaxial cables and precision peak voltmeters for immediate Plug-and-Play measurement.",
    },
  ],

  benefits: [
    {
      id: "precision",
      icon: "gear",
      title: "Certified Calibration Accuracy",
      description:
        "Ensures full compliance with IEC 60060-2 with traceably calibrated voltage ratios for accredited test laboratories.",
    },
    {
      id: "durability",
      icon: "shield",
      title: "Rugged High-Dielectric Enclosure",
      description:
        "High-strength epoxy fiberglass insulation cylinder designed for long service life in demanding industrial testing yards.",
    },
    {
      id: "versatility",
      icon: "briefcase",
      title: "Multi-Waveform Measurement",
      description:
        "Measures AC RMS, AC Peak, DC Average, and lightning impulse peak values with a single integrated divider system.",
    },
  ],

  cta: {
    title: "Need precision high-voltage dividers or sphere gaps?",
    description:
      "Our metrology engineers will assist you in selecting the proper divider ratio and bandwidth for your testing laboratory.",
    primaryButtonText: "Request Technical Specs",
    primaryButtonLink: "/contact?subject=High%20Voltage%20AC/DC%20Dividers",
  },
};

export default hvACDCDividers;
