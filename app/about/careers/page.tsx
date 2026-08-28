import { Metadata } from "next";
import Link from "next/link";
import GeometricAtmosphere from "@/components/ui/GeometricAtmosphere";

export const metadata: Metadata = {
  title: "Careers at HVTI | Join Our Engineering Team",
  description:
    "Explore high-voltage engineering, research and development, and technical sales career opportunities at HVTI.",
};

const openings = [
  {
    title: "High Voltage Design Engineer",
    department: "R&D / Product Engineering",
    location: "Gurgaon Facility (On-Site)",
    type: "Full-Time",
    experience: "3-6 Years",
  },
  {
    title: "Partial Discharge & Diagnostics Specialist",
    department: "Condition Monitoring",
    location: "Gurgaon Facility / Field",
    type: "Full-Time",
    experience: "4-8 Years",
  },
  {
    title: "Technical Sales & Utility Solutions Manager",
    department: "Commercial & Business Development",
    location: "Gurgaon HQ / Regional Travel",
    type: "Full-Time",
    experience: "5+ Years in Power Sector",
  },
];

export default function CareersPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070D] pt-[95px] pb-24 sm:pt-[110px]">
      <GeometricAtmosphere variant="office" />

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
          <span className="text-[#A855F7]">Careers</span>
        </div>

        {/* Header */}
        <div className="max-w-[800px]">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#F97316]" />
            <span className="font-mono text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
              Pioneer the Future of Energy
            </span>
          </div>

          <h1 className="font-heading text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Build Your Career at <span className="text-[#A855F7]">HVTI</span>
          </h1>

          <p className="mt-4 font-sans text-base leading-relaxed text-[#CBD5E1] sm:text-lg">
            Join a forward-thinking team of high-voltage engineers, researchers, and technical pioneers indigenously designing India&apos;s leading electrical testing and safety systems.
          </p>
        </div>

        {/* Openings */}
        <div className="mt-14 space-y-5">
          {openings.map((job, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-[#0B101B]/85 p-6 sm:p-8 backdrop-blur-md transition-all hover:border-[#A855F7]/40 md:flex-row md:items-center"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full border border-[#A855F7]/30 bg-[#7C3AED]/15 px-3 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#C084FC]">
                    {job.department}
                  </span>
                  <span className="font-mono text-[11px] text-[#94A3B8]">
                    {job.type} • {job.experience}
                  </span>
                </div>

                <h3 className="mt-2.5 font-heading text-[20px] font-bold text-white sm:text-[22px]">
                  {job.title}
                </h3>

                <p className="mt-1 text-[13.5px] text-[#94A3B8]">
                  Location: {job.location}
                </p>
              </div>

              <Link
                href={`/contact?subject=${encodeURIComponent("Job Application: " + job.title)}`}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#FB923C]/50 bg-[#F97316] px-6 py-3 font-sans text-[12.5px] font-bold tracking-[0.08em] text-white shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:bg-[#EA580C]"
              >
                <span>APPLY NOW</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
