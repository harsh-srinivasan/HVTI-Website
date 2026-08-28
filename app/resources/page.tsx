import { Metadata } from "next";
import Link from "next/link";
import GeometricAtmosphere from "@/components/ui/GeometricAtmosphere";

export const metadata: Metadata = {
  title: "Technical Resources & Catalogues | HVTI",
  description:
    "Download official product catalogues, technical data sheets, high-voltage application notes, and industry case studies from HVTI.",
};

const catalogues = [
  {
    title: "High Voltage Electrical Testing Catalogue",
    description: "Complete specifications for Hipot Kits, Current Injection sets, PD Testing and Transformer Test Benches.",
    category: "Testing",
    size: "4.8 MB PDF",
  },
  {
    title: "Electrical Safety Equipment & Live-Line Apparatus",
    description: "Technical data on Voltage Detectors (Model TP-S9), Insulated Hot Sticks (800 kV), and Earthing Sets.",
    category: "Safety",
    size: "3.2 MB PDF",
  },
  {
    title: "Condition Monitoring & Thermal Imaging Systems",
    description: "Online continuous temperature monitoring, UHF partial discharge sensors, and UV corona cameras.",
    category: "Monitoring",
    size: "5.1 MB PDF",
  },
];

const caseStudies = [
  {
    title: "800 kV Substation Live-Line Insulation Verification",
    summary: "How HVTI insulated telescopic operating sticks and detectors ensured zero-incident maintenance in a major national transmission utility.",
    tag: "Field Deployment",
  },
  {
    title: "Continuous Online Thermal Tracking in Steel Plant Switchgears",
    summary: "Early detection of phase joint overheating using wireless SAW sensors, preventing an estimated 48-hour continuous furnace downtime.",
    tag: "Predictive Health",
  },
];

export default function ResourcesPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070D] pt-[95px] pb-24 sm:pt-[110px]">
      <GeometricAtmosphere variant="default" />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[#94A3B8]">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#A855F7]">Resources</span>
        </div>

        {/* Header */}
        <div className="max-w-[800px]">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#F97316]" />
            <span className="font-mono text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
              Documentation &amp; Downloads
            </span>
          </div>

          <h1 className="font-heading text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Technical Resources &amp; <span className="text-[#A855F7]">Catalogues</span>
          </h1>

          <p className="mt-4 font-sans text-base leading-relaxed text-[#CBD5E1] sm:text-lg">
            Access certified product literature, engineering data sheets, and real-world high-voltage field validation reports.
          </p>
        </div>

        {/* Section 1: Product Catalogues */}
        <section className="mt-14">
          <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
            <span className="font-heading text-[22px] font-bold text-white">
              Official Equipment Catalogues
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {catalogues.map((cat, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B101B]/85 p-6 sm:p-7 backdrop-blur-md transition-all hover:border-[#A855F7]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)]"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full border border-[#A855F7]/30 bg-[#7C3AED]/15 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#C084FC]">
                      {cat.category}
                    </span>
                    <span className="font-mono text-[11px] text-[#94A3B8]">{cat.size}</span>
                  </div>

                  <h3 className="font-heading text-[18px] font-bold text-white">
                    {cat.title}
                  </h3>

                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#94A3B8]">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href="/contact?subject=Catalogue%20Request"
                    className="inline-flex items-center gap-2 font-mono text-[12px] font-bold text-[#F97316] hover:text-[#FB923C]"
                  >
                    <span>Request PDF Download</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Technical Case Studies */}
        <section className="mt-16">
          <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-heading text-[22px] font-bold text-white">
              Field Case Studies &amp; Validation
            </span>
            <Link href="/blog" className="font-mono text-[12px] font-semibold text-[#A855F7] hover:underline">
              Read Blog Articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B101B]/85 p-6 sm:p-7 backdrop-blur-md transition-all hover:border-[#A855F7]/40"
              >
                <div>
                  <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#CBD5E1]">
                    {cs.tag}
                  </span>

                  <h3 className="mt-3 font-heading text-[18px] font-bold text-white">
                    {cs.title}
                  </h3>

                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#94A3B8]">
                    {cs.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-mono text-[12px] font-bold text-[#A855F7] hover:text-[#C084FC]"
                  >
                    <span>Request Full Whitepaper →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
