/* ================================================================
   HVTI MASTER CLIENTS & SECTORS DATA
   File: data/clients.ts

   Authoritative dataset verified against https://hvti.in/our-clients/
   ================================================================ */

export interface ClientPartner {
  id: string;
  name: string;
  category: "power" | "heavy-industry" | "railways" | "tech" | "energy";
  categoryLabel: string;
  logo: string;
}

export interface ClientSector {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: string;
}

export const clientSectors: ClientSector[] = [
  {
    id: "power",
    name: "Power Generation & Distribution",
    icon: "zap",
    description: "State electricity boards, central transmission utilities, and private power distribution companies.",
    count: "40+ Utilities",
  },
  {
    id: "heavy-industry",
    name: "Manufacturing & Heavy Industries",
    icon: "factory",
    description: "Steel plants, aluminium smelters, cement manufacturing complexes, and heavy engineering facilities.",
    count: "120+ Plants",
  },
  {
    id: "energy",
    name: "Renewable Energy, Mining & Refineries",
    icon: "flame",
    description: "Coal mining operations, petroleum refineries, large-scale solar farms, and wind power parks.",
    count: "60+ Sites",
  },
  {
    id: "railways",
    name: "Railways & Metro Transit Systems",
    icon: "train",
    description: "Overhead traction line maintenance, locomotive testing bays, and urban mass rapid transit corridors.",
    count: "15+ Networks",
  },
  {
    id: "tech",
    name: "Semiconductor & Technology OEMs",
    icon: "cpu",
    description: "Global electrical switchgear manufacturers, motor OEMs, and precision technology infrastructure.",
    count: "35+ OEMs",
  },
  {
    id: "defense",
    name: "Defense & Research Institutions",
    icon: "shield",
    description: "National laboratories, central research facilities, and defense electrical testing installations.",
    count: "20+ Labs",
  },
];

export const clientLogos = [
  { id: "powergrid", name: "Power Grid Corporation of India (POWERGRID)", logo: "/images/clients/Powergrid.jpg", sector: "power" },
  { id: "tata-power-ddl", name: "Tata Power-DDL", logo: "/images/clients/Tata-Power-DDl.jpg", sector: "power" },
  { id: "tpcodl", name: "TP Central Odisha Distribution Limited (TPCODL)", logo: "/images/clients/TPcodl.jpg", sector: "power" },
  { id: "power-corp", name: "State Power Corporation", logo: "/images/clients/Power-Corp.jpg", sector: "power" },
  { id: "coal-india", name: "Coal India Limited", logo: "/images/clients/Coal-India.jpg", sector: "energy" },
  { id: "aditya-birla", name: "Aditya Birla Group", logo: "/images/clients/Aditya-Birla-Group.jpg", sector: "heavy-industry" },
  { id: "nidec", name: "Nidec Corporation", logo: "/images/clients/Nidec.jpg", sector: "tech" },
  { id: "lauritz", name: "Lauritz Knudsen Electrical & Automation", logo: "/images/clients/Lauritz.jpg", sector: "tech" },
  { id: "dhunseri", name: "Dhunseri Ventures", logo: "/images/clients/Dhunseri-FIlms.jpg", sector: "heavy-industry" },
  { id: "client-1", name: "Major Electrical Utility Partner", logo: "/images/clients/1.jpg", sector: "power" },
  { id: "client-2", name: "Power Generation Partner", logo: "/images/clients/4-1.jpg", sector: "power" },
  { id: "client-3", name: "Heavy Industry Partner", logo: "/images/clients/5-1.jpg", sector: "heavy-industry" },
  { id: "client-4", name: "Transmission & Substation Partner", logo: "/images/clients/6-1.jpg", sector: "power" },
  { id: "client-5", name: "Industrial Manufacturing Partner", logo: "/images/clients/7-1.jpg", sector: "heavy-industry" },
  { id: "client-6", name: "Engineering Corporation Partner", logo: "/images/clients/9-1.jpg", sector: "heavy-industry" },
  { id: "client-7", name: "Electrical Distribution Partner", logo: "/images/clients/11-1.jpg", sector: "power" },
  { id: "client-8", name: "Industrial Utilities Partner", logo: "/images/clients/13-1.jpg", sector: "heavy-industry" },
  { id: "client-9", name: "Power Systems Partner", logo: "/images/clients/14-1.jpg", sector: "power" },
  { id: "client-10", name: "Heavy Manufacturing Partner", logo: "/images/clients/18-1.jpg", sector: "heavy-industry" },
  { id: "client-11", name: "High-Voltage Testing Partner", logo: "/images/clients/19-1.jpg", sector: "power" },
  { id: "client-12", name: "Energy & Infrastructure Partner", logo: "/images/clients/21.jpg", sector: "energy" },
  { id: "client-13", name: "Substation Engineering Partner", logo: "/images/clients/22.jpg", sector: "power" },
  { id: "client-14", name: "Global Technology Partner", logo: "/images/clients/c561.jpg", sector: "tech" },
  { id: "client-15", name: "National Infrastructure Partner", logo: "/images/clients/c701.jpg", sector: "railways" },
  { id: "client-16", name: "Precision Switchgear Partner", logo: "/images/clients/c57.jpg", sector: "tech" },
  { id: "client-17", name: "Heavy Metals Partner", logo: "/images/clients/c071.jpg", sector: "heavy-industry" },
  { id: "client-18", name: "Industrial Corporation Partner", logo: "/images/clients/c84.jpg", sector: "heavy-industry" },
];

export const clientValueProps = [
  {
    icon: "shield-check",
    title: "Over 30 Years of Uncompromised Reliability",
    description:
      "With more than three decades of specialized high-voltage engineering, HVTI has built a stellar reputation for delivering reliable, calibration-accurate, and operator-safe solutions in the most demanding field environments.",
  },
  {
    icon: "sliders",
    title: "Bespoke Custom Engineering",
    description:
      "Our in-house R&D and manufacturing teams excel at customizing voltage output ratings (up to 800 kV), automated control consoles, and specialized test jigs to match unique utility and laboratory specifications.",
  },
  {
    icon: "award",
    title: "Trusted by National Power Leaders",
    description:
      "Chosen as the dielectric testing and live-line safety partner by POWERGRID, Tata Power, state utilities, and heavy industrial corporations across power, steel, mining, and transit sectors.",
  },
];
