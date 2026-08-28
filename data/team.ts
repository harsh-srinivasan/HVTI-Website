/* ================================================================
   HVTI CORE TEAM & LEADERSHIP DATA
   File: data/team.ts

   Authoritative team members dataset verified against https://hvti.in/hvti-core-team/
   ================================================================ */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  image: string;
  pedigree: string[];
  bio: string;
  quote?: string;
  isLeadership?: boolean;
}

export const leadershipMembers: TeamMember[] = [
  {
    id: "raghbindra-singh",
    name: "Raghbindra Singh",
    role: "Chief Executive Officer",
    badge: "EXECUTIVE LEADERSHIP",
    image: "/images/about/ceo-raghbindra-singh.jpg",
    pedigree: ["30+ Years HV Experience", "B.Tech Electrical", "Ex-Tata Steel / NTPC"],
    bio: "Raghbindra Singh has steered HVTI to the forefront of the high-voltage testing and safety industry. With over 30 years of deep hands-on expertise in electrical engineering, his strategic vision has driven import substitution and state-of-the-art indigenous manufacturing across India.",
    quote: "Our mission is to empower electrical utilities with indigenously engineered equipment that matches or exceeds global standards in precision and reliability.",
    isLeadership: true,
  },
  {
    id: "mr-umed-singh",
    name: "Late Mr. Umed Singh",
    role: "Founder & Visionary",
    badge: "FOUNDING LEGACY",
    image: "/images/about/mr-umed-singh.jpg",
    pedigree: ["British Fellowship 1985", "Pioneer in Live-Line Safety", "3 Decades of Excellence"],
    bio: "A visionary electrical engineer recognized internationally with a British Fellowship in 1985 for electrical safety. Mr. Umed Singh founded HVTI with a commitment to human life and electrical infrastructure integrity, establishing principles that continue to guide every instrument we build.",
    quote: "Engineering is not just about building machines; it is about safeguarding human life and powering national progress.",
    isLeadership: true,
  },
];

export const coreTeamMembers: TeamMember[] = [
  {
    id: "himanshu-singh",
    name: "Himanshu Singh",
    role: "Electrical Engineer",
    badge: "R&D & EMBEDDED SYSTEMS",
    image: "/images/team/himanshu-singh.jpg",
    pedigree: ["Ex-SpaceX Starlink", "Virginia Tech Alum", "High-Speed PCB Design"],
    bio: "Himanshu brings advanced aerospace-grade engineering expertise from his role as a PCB design engineer for SpaceX’s groundbreaking Starlink satellite constellation. Holding a bachelor’s degree in Electrical Engineering from Virginia Tech, his deep knowledge of modern electronics, firmware, and sensor integration drives next-generation instrumentation design at HVTI.",
  },
  {
    id: "lakshmikant-srivastava",
    name: "Lakshmikant Srivastava",
    role: "Electrical & Electronics Engineer",
    badge: "ELECTRONICS INNOVATION",
    image: "/images/team/lakshmikant-srivastava.jpg",
    pedigree: ["10+ Years Electronics", "Ex-LG Electronics", "Precision Hardware Diagnostics"],
    bio: "Lakshmikant possesses over 10 years of specialized experience in electronics design, circuit prototyping, and hardware diagnostics. Prior to joining HVTI, he honed his technical problem-solving capabilities as an electronics service engineer at LG Electronics, ensuring unmatched reliability and precision across all HVTI electronic test systems.",
  },
  {
    id: "vijay-singh",
    name: "Vijay Singh",
    role: "Production Head",
    badge: "MANUFACTURING & QA",
    image: "/images/team/vijay-singh.jpg",
    pedigree: ["25+ Years Manufacturing", "Quality Assurance", "Plant Operations"],
    bio: "Vijay brings more than 25 years of seasoned expertise in precision manufacturing and plant operations. His in-depth mastery of high-voltage dielectric fabrication, assembly workflows, and strict quality control standards guarantees that every HVTI product meets rigorous international safety benchmarks.",
  },
];

export const engineeringPillars = [
  {
    icon: "shield",
    title: "Zero-Compromise Safety",
    description: "Every dielectric stick, hipot kit, and detector undergoes 100% individual routine testing to IEC/IS standards.",
  },
  {
    icon: "cpu",
    title: "Indigenous Innovation",
    description: "In-house PCB design, firmware algorithms, and precision sensor architecture eliminating import dependencies.",
  },
  {
    icon: "tool",
    title: "End-to-End Manufacturing",
    description: "From custom transformer winding to high-grade fiberglass hot-stick pultrusion in our Gurgaon facilities.",
  },
  {
    icon: "users",
    title: "Field Utility Support",
    description: "Direct engineering support, on-site commissioning, and customized utility diagnostic solutions.",
  },
];
