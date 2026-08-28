/* ================================================================
   HVTI MASTER EVENTS DATA
   File: data/events.ts

   Authentic event data extracted directly from HVTI archives:
   - National Steel & Power Exhibition 2025 (Raipur)
   - Windergy India 2024 (Chennai Trade Centre)
   - Upcoming Events & Industry Roadshow schedule status
   ================================================================ */

export interface EventHighlight {
  title: string;
  description: string;
}

export interface PastEvent {
  id: string;
  title: string;
  subtitle: string;
  edition?: string;
  date: string;
  dateRange: {
    start: string;
    end: string;
    year: number;
  };
  location: string;
  venue: string;
  city: string;
  state: string;
  country: string;
  booth: string;
  category: "Industrial & Power" | "Renewable Energy" | "Utility & Grid";
  theme?: string;
  summary: string;
  description: string[];
  showcasedProducts: string[];
  keyEngagements?: string[];
  galleryImages: {
    src: string;
    alt: string;
    caption: string;
  }[];
  bannerImage?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface UpcomingEventStatus {
  title: string;
  subtitle: string;
  statusMessage: string;
  description: string;
  ctaText: string;
  roadshowFocus: string[];
}

export const UPCOMING_EVENTS_STATUS: UpcomingEventStatus = {
  title: "Upcoming Exhibitions & Technical Conferences",
  subtitle: "Connect with HVTI High-Voltage Engineering Specialists Worldwide",
  statusMessage:
    "We are actively engaged in industry exhibitions, trade shows, and technical symposiums worldwide to showcase our cutting-edge high-voltage testing, dielectric diagnostic, and electrical safety solutions.",
  description:
    "While our engineers and technical delegates are currently finalizing the upcoming schedule for national and international exhibitions, we regularly participate in premier power grid, steel, renewable energy, and electrical safety expos across India and globally. Stay tuned for dates and stall announcements.",
  ctaText: "Request an On-Site Product Demonstration",
  roadshowFocus: [
    "High Voltage Live-Line Safety & Voltage Detectors (Model TP-S9)",
    "Dielectric Hipot AC/DC Test Systems & Primary Injection Rigs",
    "Transformer Condition Monitoring & Partial Discharge Acoustics",
    "Substation Telescopic Operating Sticks & Safety Earthing Systems",
    "Wind Turbine & Solar Substation Predictive Thermal Diagnostics",
  ],
};

export const PAST_EVENTS: PastEvent[] = [
  {
    id: "national-steel-power-exhibition-2025",
    title: "National Steel & Power Exhibition 2025",
    subtitle: "Premier Industrial Exposition for Steel Mills, Power Utilities & Heavy Engineering",
    date: "19 – 22 January 2025",
    dateRange: {
      start: "2025-01-19",
      end: "2025-01-22",
      year: 2025,
    },
    location: "Raipur, Chhattisgarh, India",
    venue: "Shriram Business Park, Vidhansabha Road",
    city: "Raipur",
    state: "Chhattisgarh",
    country: "India",
    booth: "Stall No. C-53",
    category: "Industrial & Power",
    theme: "Engineering Safety & Dielectric Reliability in Heavy Continuous-Duty Plants",
    summary:
      "HVTI successfully participated as an exhibitor at the National Steel & Power Exhibition 2025 in Raipur, showcasing specialized electrical testing equipment, live-line safety tools, and online partial discharge monitoring systems tailored for heavy metallurgical and continuous-process power plants.",
    description: [
      "HVTI successfully participated as an exhibitor at the National Steel & Power Exhibition 2025, held from January 19 to 22, 2025, at Shriram Business Park, Vidhansabha Road, Raipur, India.",
      "This prestigious event brought together top suppliers and manufacturers catering to industries such as Steel Plants, Power Plants, Sponge Iron Plants, Re-Rolling Mills, Cement Plants, Mining, and Heavy Industries. At our booth (Stall C-53), we showcased HVTI's cutting-edge solutions tailored for the steel and power sector, engaging in insightful discussions with industry executives about their evolving needs and electrical safety challenges.",
      "We had an excellent opportunity to connect with key decision-makers and explore how HVTI's advanced electrical safety and testing solutions can enhance operational efficiency and personnel safety in high-load continuous industrial environments.",
      "We thank all visitors for their time and interest and look forward to building strong industrial collaborations in the future!",
    ],
    showcasedProducts: [
      "High Voltage Live Line Detectors (Model TP-S9 & Helmet Mounted Detectors)",
      "Substation Testing Equipment (ART-3D Turns Ratio Tester, WRT-100 Winding Resistance Tester)",
      "Partial Discharge Testing & Acoustic Pinpointing Systems (AE-150 & XDP-II)",
      "Online Continuous Partial Discharge Monitoring for Switchgears, Transformers & Cables",
      "Dielectric Rescue Sticks, Operating Rods & Portable Earthing Equipment",
      "High Voltage AC/DC Testing Kits & High Voltage Dividers",
    ],
    keyEngagements: [
      "Technical consultations with chief electrical engineers from major sponge iron and steel rolling mills.",
      "Live demonstrations of Model TP-S9 voltage verification before maintenance operations.",
      "Insulation health assessment strategies for aged substation transformers and heavy busbars.",
    ],
    galleryImages: [
      {
        src: "/images/events/national-steel-power-raipur-2025.jpg",
        alt: "HVTI Booth C-53 at National Steel & Power Exhibition 2025 Raipur",
        caption: "HVTI engineering team at Stall C-53 exhibiting substation testing, live line detectors, and PD monitoring instruments in Raipur.",
      },
    ],
    stats: [
      { label: "Delegates & Engineers Connected", value: "350+" },
      { label: "Industrial Plant Executives", value: "120+" },
      { label: "Live Equipment Demonstrations", value: "24" },
    ],
  },
  {
    id: "wind-energy-india-expo-2024",
    title: "Windergy India 2024 (Wind Energy India Expo)",
    subtitle: "6th International Trade Fair & Conference for Wind Energy & Renewable Grid Integration",
    edition: "6th International Edition",
    date: "23 – 25 October 2024",
    dateRange: {
      start: "2024-10-23",
      end: "2024-10-25",
      year: 2024,
    },
    location: "Chennai, Tamil Nadu, India",
    venue: "Chennai Trade Centre, Nandambakkam",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    booth: "Stall No. A101a",
    category: "Renewable Energy",
    theme: "Wind Power Forever — Safeguarding High-Voltage Renewable Generation",
    summary:
      "HVTI proudly participated in Windergy India 2024 at Chennai Trade Centre, introducing specialized high-voltage safety tools and condition/temperature monitoring systems designed specifically for wind turbines and renewable energy substations.",
    description: [
      "HVTI proudly participated in the prestigious Windergy India Expo 2024, held at the Chennai Trade Centre, showcasing our cutting-edge high voltage safety and testing equipment. These essential tools play a vital role in ensuring the safe and efficient operation of large-scale wind farms and grid pooling substations.",
      "At our booth (Stall A101a), we also introduced our innovative condition and temperature monitoring systems, specifically designed for wind turbines and nacelle switchgear. These systems help maximize efficiency, reduce unscheduled downtime, and ensure reliable performance in demanding renewable energy environments.",
      "The event proved to be highly fruitful, as we engaged with industry leaders and generated significant interest from prominent companies like Suzlon, ReNew Power, HPCL, and others. Our solutions sparked meaningful discussions about improving operational safety and monitoring for India's rapidly expanding wind and solar energy sector.",
      "This exhibition reflects HVTI's commitment to supporting the renewable energy revolution with trusted, calibration-accurate solutions for safety, testing, and monitoring.",
    ],
    showcasedProducts: [
      "Wind Turbine Nacelle Temperature & Vibration Monitoring Systems",
      "High Voltage Telescopic Safety Sticks with Universal Sunrise Fittings",
      "Model TP-S9 Capacitive Voltage Detectors for Renewable Grid Feeders",
      "Online Partial Discharge Monitoring for Wind Farm Collector Substations",
      "Portable Earthing Equipment & Phase Comparator Sticks",
    ],
    keyEngagements: [
      "Suzlon Energy: Discussion on nacelle safety and predictive temperature monitoring.",
      "ReNew Power: High-voltage substation testing and preventative insulation diagnostics.",
      "HPCL Green Energy: Dielectric testing equipment for renewable grid integration.",
    ],
    galleryImages: [
      {
        src: "/images/events/windergy-chennai-2024.jpg",
        alt: "HVTI Booth A101a at Windergy India 2024 Chennai",
        caption: "HVTI team at Stall A101a, Chennai Trade Centre showcasing electrical safety equipment and wind turbine monitoring systems.",
      },
    ],
    bannerImage: "/images/events/windergy-banner-2024.jpg",
    stats: [
      { label: "Wind & Solar Utility Leaders", value: "450+" },
      { label: "Clean-Tech Enterprises Engaged", value: "85+" },
      { label: "Key Clients Connected", value: "Suzlon, ReNew, HPCL" },
    ],
  },
];
