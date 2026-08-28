import type { Metadata } from "next";
import LaboratoryPage from "@/components/laboratory/LaboratoryPage";

export const metadata: Metadata = {
  title: "Laboratory Facilities | High Voltage Test Systems | HVTI",
  description:
    "Explore HVTI's 15,000 sq. ft. state-of-the-art laboratory and manufacturing facility in Gurgaon, India. Advanced R&D, manufacturing up to 800 kV, and rigorous testing & quality assurance.",
  keywords: [
    "HVTI Laboratory",
    "High Voltage Testing Laboratory",
    "HVTI Facilities",
    "Electrical Testing Lab Gurgaon",
    "800 kV Testing Equipment",
    "R&D Electrical Testing",
    "High Voltage Safety Equipment",
  ],
  openGraph: {
    title: "Laboratory Facilities | High Voltage Test Systems | HVTI",
    description:
      "Explore HVTI's 15,000 sq. ft. state-of-the-art laboratory and manufacturing facility in Gurgaon, India.",
    url: "https://hvti.in/laboratory-facilities",
    siteName: "HVTI",
    images: [
      {
        url: "/images/office/hvti-building-hero-hd.jpg",
        width: 1376,
        height: 768,
        alt: "HVTI Laboratory Facilities",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <LaboratoryPage />;
}
