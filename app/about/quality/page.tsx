import { Metadata } from "next";
import Link from "next/link";
import GeometricAtmosphere from "@/components/ui/GeometricAtmosphere";

export const metadata: Metadata = {
  title: "Quality & Certifications | HVTI High Voltage Testing",
  description:
    "HVTI quality management standards, ISO 9001:2015 certifications, and international IEC dielectric testing compliance.",
};

const certifications = [
  {
    title: "ISO 9001:2015 Certified",
    standard: "Quality Management Systems",
    description: "Certified manufacturing and testing processes ensuring uncompromising precision and traceable reliability across all products.",
  },
  {
    title: "IEC Standards Compliance",
    standard: "IEC 60060, IEC 61243 & IEC 60855",
    description: "Every instrument and dielectric operating stick is verified to comply with strict international high-voltage test procedures.",
  },
  {
    title: "100% In-House Calibration",
    standard: "Traceable Metrology Standards",
    description: "Our in-house 800 kV high-voltage test bay validates accuracy against NABL traceable reference standards before dispatch.",
  },
];

export default function QualityPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070D] pt-[95px] pb-24 sm:pt-[110px]">
      <GeometricAtmosphere variant="laboratory" />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[#94A3B8]">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span>/</span>
          <Link href="/about" className="transition-colors hover:text-white">
            About
          </Link>
          <span>/</span>
          <span className="text-[#A855F7]">Quality &amp; Certifications</span>
        </div>

        {/* Header */}
        <div className="max-w-[800px]">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#F97316]" />
            <span className="font-mono text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
              Uncompromising Standards
            </span>
          </div>

          <h1 className="font-heading text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Quality Assurance &amp; <span className="text-[#A855F7]">Certifications</span>
          </h1>

          <p className="mt-4 font-sans text-base leading-relaxed text-[#CBD5E1] sm:text-lg">
            Safety and accuracy are non-negotiable in high-voltage engineering. Discover our certified quality standards, calibration protocols, and laboratory validation capabilities.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {certifications.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#0B101B]/85 p-7 backdrop-blur-md transition-all hover:border-[#A855F7]/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#F97316]">
                {item.standard}
              </span>

              <h3 className="mt-3 font-heading text-[20px] font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-[#94A3B8]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Facility CTA Banner */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-[#0C1222] via-[#0A0F1D] to-[#070A14] p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#A855F7]">
                Live Verification
              </span>
              <h2 className="mt-2 font-heading text-[24px] font-bold text-white sm:text-[28px]">
                Witness Testing at Our 15,000 Sq. Ft. Laboratory
              </h2>
              <p className="mt-2 max-w-[680px] text-[14.5px] text-[#CBD5E1]">
                Clients and utility inspectors are welcome to conduct factory acceptance tests (FAT) and witness live proof tests at our Gurgaon facility.
              </p>
            </div>

            <Link
              href="/laboratory-facilities"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#FB923C]/50 bg-[#F97316] px-6 py-3.5 font-sans text-[12.5px] font-bold tracking-[0.10em] text-white shadow-[0_0_20px_rgba(249,115,22,0.30)] hover:bg-[#EA580C]"
            >
              <span>EXPLORE LABORATORY</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
