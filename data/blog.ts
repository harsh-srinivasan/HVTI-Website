/* ================================================================
   HVTI MASTER BLOG & TECHNICAL ARTICLES DATA
   File: data/blog.ts

   Authoritative dataset verified against https://hvti.in/blog/
   ================================================================ */

export interface BlogTableData {
  headers: string[];
  rows: string[][];
}

export interface BlogParagraph {
  type: "text" | "list" | "table" | "quote" | "callout";
  text?: string;
  items?: string[];
  table?: BlogTableData;
  calloutTitle?: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: BlogParagraph[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  sections: BlogSection[];
}

export const blogCategories = [
  "All",
  "Transmission & Grid",
  "Renewable Energy & Safety",
  "Condition Monitoring & PD",
  "Electrical Safety & Protocols",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "empowering-a-resilient-energy-future",
    title: "Empowering a Resilient Energy Future: Advanced Safety and Monitoring Solutions for Renewable-Rich Power Grids",
    category: "Renewable Energy & Safety",
    date: "August 2025",
    readTime: "6 min read",
    image: "/images/blog/Blog-02.jpg",
    featured: true,
    author: {
      name: "HVTI Engineering & Research Team",
      role: "High-Voltage Testing & Diagnostics",
      avatar: "/images/brand/hvti-logo.png",
    },
    tags: [
      "Renewables",
      "Solar Parks",
      "Wind Energy",
      "Substation Safety",
      "Condition Monitoring",
      "BESS",
    ],
    excerpt:
      "In an era defined by rapid renewable energy growth and ambitious decarbonization targets, ensuring grid reliability and worker safety is paramount. Discover how advanced voltage detection and condition monitoring empower renewable-rich power networks.",
    sections: [
      {
        heading: "Overview: The Renewable Transformation and Its Challenges",
        paragraphs: [
          {
            type: "text",
            text: "In an era defined by rapid renewable energy growth and ambitious decarbonization targets, ensuring grid reliability and worker safety is paramount. High Voltage Testing Instruments (HVTI) is at the forefront of delivering cutting-edge safety equipment and condition-monitoring systems that empower utilities, grid operators, and industrial facilities to integrate renewables seamlessly while protecting personnel and critical grid assets.",
          },
          {
            type: "text",
            text: "India has set an ambitious target of installing 500 GW of non-fossil fuel electricity capacity by 2030. While this monumental energy transition accelerates decarbonization, it introduces complex technical challenges into the transmission network:",
          },
          {
            type: "list",
            items: [
              "Intermittency & Voltage Instability: Rapid output fluctuations from utility-scale solar PV and wind farms challenge voltage stability, demanding robust real-time monitoring.",
              "Complex Live-Line Environments: High-voltage collector substations and pooling lines operate under dynamic loading, requiring certified non-contact detection tools to prevent fatal arc-flash accidents.",
              "Accelerated Asset Aging: Legacy step-up transformers and switchgear experience increased thermal and harmonic stress, making continuous condition monitoring vital to avert unscheduled outages.",
            ],
          },
        ],
      },
      {
        heading: "Ultra-Mega Solar Parks: India's Pillars of Scale",
        paragraphs: [
          {
            type: "text",
            text: "India’s solar capacity has expanded thirty-fold over the last decade, propelled by ultra-mega solar parks that rank among the largest clean-energy installations on the planet. The table below highlights key operational solar parks and their grid evacuation infrastructure:",
          },
          {
            type: "table",
            table: {
              headers: [
                "Solar Project",
                "State",
                "Capacity (MW)",
                "Commissioned",
                "Infrastructure & Key Features",
              ],
              rows: [
                [
                  "Bhadla Solar Park",
                  "Rajasthan",
                  "2,245 MW",
                  "Dec 2018",
                  "World's largest PV park spanning 14,000 acres; 10 million panels; saves ~4 mt CO₂/year.",
                ],
                [
                  "Pavagada 'Shakti Sthala'",
                  "Karnataka",
                  "2,050 MW",
                  "Dec 2019",
                  "13,000 acres leased from 2,300 farmers; 40 individual 250 MW blocks; 3.6 mt CO₂ offset.",
                ],
                [
                  "Rewa Ultra Mega Solar",
                  "Madhya Pradesh",
                  "750 MW",
                  "Jan 2020",
                  "Broke grid parity at ₹2.97/unit; supplies 24% of Delhi Metro's total traction power demand.",
                ],
                [
                  "Kurnool Ultra Mega Park",
                  "Andhra Pradesh",
                  "1,000 MW",
                  "Mar 2017",
                  "24 km²; 4 million solar modules; four dedicated 220/33 kV pooling substations.",
                ],
                [
                  "NP Kunta Solar Park",
                  "Andhra Pradesh",
                  "978.5 MW",
                  "2019",
                  "Spans 32 km² with high-voltage interconnections feeding the central Southern Grid.",
                ],
                [
                  "Charanka Solar Park",
                  "Gujarat",
                  "615 MW",
                  "2012",
                  "India's pioneering solar park under the National Solar Mission; paved the way for competitive bidding.",
                ],
              ],
            },
          },
        ],
      },
      {
        heading: "Advanced High Voltage Detection: Safeguarding Live-Line Operations",
        paragraphs: [
          {
            type: "text",
            text: "In utility-scale renewable parks, maintenance crews regularly service medium and high-voltage feeder circuits under intense time pressure. HVTI’s flagship TP-S9 Hand-Held High Voltage Detector addresses the critical requirement for foolproof, non-contact live/dead verification:",
          },
          {
            type: "list",
            items: [
              "Capacitive Sensor Technology: Delivers accurate detection from 240 V up to 510 kV (extendable to 765 kV) with adjustable multi-range sensitivity.",
              "Dual High-Visibility Alerts: High-intensity daylight-visible LEDs coupled with an 85+ dB piercing audible buzzer ensure unequivocal warning in noisy outdoor switchyards.",
              "Integrated Self-Test Mode: Built-in circuitry verifies battery health and electronic sensor integrity before and after each measurement, ensuring complete compliance with IEC 61243-1 / IS standards.",
              "IP66 Ruggedized Chassis: Engineered with UV-resistant impact polycarbonate to withstand desert dust, high humidity, and extreme monsoon environments.",
            ],
          },
          {
            type: "callout",
            calloutTitle: "SAFETY PROTOCOL MANDATE",
            text: "Before touching any overhead conductor or busbar in a solar pooling substation, technicians must always execute the 3-point test: (1) Test detector on known live source/self-test, (2) Test the target circuit to verify dead condition, (3) Retest detector on known source to confirm operational readiness.",
          },
        ],
      },
      {
        heading: "Condition Monitoring: Enabling Predictive Maintenance in Renewable Grids",
        paragraphs: [
          {
            type: "text",
            text: "To integrate variable renewable generation at scale, grid operators are deploying Battery Energy Storage Systems (BESS) and continuous diagnostic telemetry. HVTI’s condition monitoring suite provides real-time visibility into mission-critical asset health:",
          },
          {
            type: "list",
            items: [
              "Partial Discharge (PD) Localization: Detects microscopic insulation breakdown, void discharges, and surface tracking in transformers and GIS switchgear before catastrophic flashovers occur.",
              "Wireless Temperature Telemetry: Continuous thermal sensor arrays track hot-spot evolution in inverter duty transformers, wind turbine nacelle generators, and busbar joints.",
              "IoT Data Logging & Edge Analytics: Secure field transmitters push diagnostic telemetry directly to SCADA and centralized asset management platforms for trend-based predictive scheduling.",
            ],
          },
        ],
      },
      {
        heading: "Integrating Safety with Smart Grid Initiatives",
        paragraphs: [
          {
            type: "text",
            text: "As India approaches its 500 GW renewable horizon, smart grid architecture—spanning dynamic line rating, automated sectionalizers, and distributed energy resource management (DERMS)—is expanding nationwide. HVTI tools interface smoothly across these platforms:",
          },
          {
            type: "list",
            items: [
              "Universal Sunrise Fitting Compatibility: HV detectors and hot sticks attach seamlessly onto standard utility insulated poles used by POWERGRID, state discoms, and private developers.",
              "Modular Telescopic Hot Sticks: Ultra-lightweight fiberglass pultrusion rods allow ground-level testing up to 765 kV without requiring elevating platforms.",
              "Standardized Calibration Traceability: Every instrument carries NABL-accredited test certificates, ensuring regulatory audit compliance and personnel peace of mind.",
            ],
          },
          {
            type: "text",
            text: "By pairing advanced dielectric engineering with user-centric safety design, HVTI empowers utility teams to accelerate India’s clean energy transition securely and reliably.",
          },
        ],
      },
    ],
  },
  {
    slug: "hvac-vs-hvdc-transmission-in-india",
    title: "HVAC vs HVDC Transmission in India: Key Differences, Applications, and Projects",
    category: "Transmission & Grid",
    date: "August 2025",
    readTime: "8 min read",
    image: "/images/blog/Blog-01.jpg",
    author: {
      name: "HVTI Engineering & Research Team",
      role: "High-Voltage Testing & Diagnostics",
      avatar: "/images/brand/hvti-logo.png",
    },
    tags: [
      "HVAC",
      "HVDC",
      "POWERGRID",
      "Long-Distance Transmission",
      "Grid Stability",
    ],
    excerpt:
      "India’s power network is the backbone of its growing economy. Discover the fundamental engineering trade-offs between HVAC and HVDC transmission, break-even distance economics, and major Indian grid projects.",
    sections: [
      {
        heading: "Overview: The Spine of Indian Power Transmission",
        paragraphs: [
          {
            type: "text",
            text: "India’s power network is the backbone of its growing economy, spanning vast distances from remote coal-rich pitheads and renewable mega-parks to densely populated metropolitan load centers. A foundational question in power system engineering is whether to deploy High Voltage Alternating Current (HVAC) lines or High Voltage Direct Current (HVDC) corridors.",
          },
          {
            type: "text",
            text: "Both technologies play indispensable roles in the National Grid, but each has distinct operational physics, reactive power characteristics, capital expenditure profiles, and break-even thresholds.",
          },
        ],
      },
      {
        heading: "Engineering Fundamentals: HVAC vs HVDC",
        paragraphs: [
          {
            type: "list",
            items: [
              "HVAC (High Voltage AC): Operates at 50 Hz. Ubiquitous across India at 400 kV and 765 kV. Transformers make voltage stepping easy and cost-effective, but reactive power losses and line charging currents limit practical underground or ultra-long-distance efficiency.",
              "HVDC (High Voltage DC): Operates at 0 Hz (direct current). Utilizes electronic thyristor/IGBT converter stations at terminals. Eliminates reactive line losses and skin effect, making it the supreme choice for bulk power transfer over 600–800+ kilometers.",
              "Asynchronous Interconnection: HVDC allows two independent AC grid systems operating at different phase angles or frequencies to interconnect without transmitting system-wide cascading disturbances.",
            ],
          },
        ],
      },
      {
        heading: "Notable Indian HVDC Transmission Corridors",
        paragraphs: [
          {
            type: "list",
            items: [
              "Champa–Kurukshetra ±800 kV UHVDC Corridor: Spanning 1,287 km with an 8,000 MW bulk power capacity transmitting power from thermal hubs in Chhattisgarh to the Northern Region.",
              "Raigarh–Pugalur ±800 kV HVDC Link: Transmitting 6,000 MW over 1,830 km from Raigarh (Chhattisgarh) to Pugalur (Tamil Nadu), stabilizing the Southern regional grid.",
              "Biswanath Chariali–Agra ±800 kV Multi-Terminal HVDC: World's first multi-terminal UHVDC corridor bringing 6,000 MW hydro power from the North-East across the 'Chicken's Neck' corridor into Agra.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "understanding-partial-discharge-in-high-voltage-systems",
    title: "Understanding Partial Discharge in High-Voltage Systems: Causes, Consequences, and Early Detection",
    category: "Condition Monitoring & PD",
    date: "June 2025",
    readTime: "7 min read",
    image: "/images/blog/Understanding-Partial-Discharge-Blog.jpg",
    author: {
      name: "HVTI Engineering & Research Team",
      role: "High-Voltage Testing & Diagnostics",
      avatar: "/images/brand/hvti-logo.png",
    },
    tags: [
      "Partial Discharge",
      "Transformer Diagnostics",
      "Insulation Breakdown",
      "Acoustic PD",
    ],
    excerpt:
      "Partial discharge is the leading precursor to catastrophic high-voltage insulation failure. Learn how microscopic void breakdown develops and how online acoustic and electrical PD diagnostics prevent substation outages.",
    sections: [
      {
        heading: "What is Partial Discharge (PD)?",
        paragraphs: [
          {
            type: "text",
            text: "Partial discharge (PD) is a localized dielectric breakdown of a small portion of an electrical insulation system under high electric field stress that does not completely bridge the space between conductors. Over time, recurring micro-discharges erode insulation material, eventually culminating in total catastrophic dielectric failure.",
          },
        ],
      },
      {
        heading: "Primary Causes of PD in High-Voltage Apparatus",
        paragraphs: [
          {
            type: "list",
            items: [
              "Internal Voids & Bubbles: Microscopic manufacturing imperfections inside solid epoxy resin or paper-oil transformer insulation.",
              "Contaminants & Moisture: High moisture content in transformer mineral oil reducing localized dielectric strength.",
              "Sharp Edge Protrusions: Microscopic burrs on conductors concentrating electrical stress fields and generating localized corona ionization.",
              "Surface Tracking: Atmospheric dust, chemical pollution, and moisture creating conductive surface leakage paths along insulators.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "high-voltage-safety-preventing-accidents-with-proper-equipment",
    title: "High-Voltage Safety: Preventing Accidents with Proper Equipment",
    category: "Electrical Safety & Protocols",
    date: "June 2023",
    readTime: "9 min read",
    image: "/images/blog/High-Voltage-Safety-Preventing-Accidents-with-Proper-Equipment.jpg",
    author: {
      name: "HVTI Engineering & Research Team",
      role: "High-Voltage Testing & Diagnostics",
      avatar: "/images/brand/hvti-logo.png",
    },
    tags: [
      "Worker Safety",
      "Arc Flash",
      "Insulated Sticks",
      "Voltage Detectors",
      "Earthing Equipment",
    ],
    excerpt:
      "Every year, thousands of preventable electrical accidents occur on industrial power systems. Review the essential life-saving equipment—from non-contact detectors to discharge sticks and earthing sets.",
    sections: [
      {
        heading: "The Critical Need for Certified High-Voltage Safety",
        paragraphs: [
          {
            type: "text",
            text: "High-voltage transmission lines and industrial distribution switchyards carry massive power—and immense risk if handled without certified safety tools. In India alone, electrical accidents account for a substantial percentage of industrial fatalities, virtually all of which are preventable with rigorous testing protocols and certified PPE.",
          },
        ],
      },
      {
        heading: "Essential High-Voltage Safety Apparatus",
        paragraphs: [
          {
            type: "list",
            items: [
              "Non-Contact High-Voltage Detectors: Confirms zero energy state before any physical contact is made.",
              "Insulated Fiberglass Operating Sticks: Rated for high dielectric breakdown resistance (up to 100 kV per foot).",
              "Discharge Rods with Damping Resistors: Safely bleeds off residual capacitive charges on cables and power factor banks.",
              "Portable Protective Earthing Sets: Creates a low-impedance short-circuit path to ground, protecting lineworkers against inadvertent re-energization.",
              "Body Rescue Hooks: Insulated retrieval tool designed to safely pull shocked personnel out of hazardous live zones without endangering rescuers.",
            ],
          },
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 2): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
