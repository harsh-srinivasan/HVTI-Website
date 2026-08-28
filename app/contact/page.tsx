import { Metadata } from "next";
import Link from "next/link";
import GeometricAtmosphere from "@/components/ui/GeometricAtmosphere";

export const metadata: Metadata = {
  title: "Contact HVTI | High Voltage Testing & Instrumentation",
  description:
    "Get in touch with HVTI engineers for product inquiries, custom high-voltage testing systems, technical consultations, or request an official quote.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070D] pt-[95px] pb-24 sm:pt-[110px]">
      {/* 1. Geometric Background Canvas */}
      <GeometricAtmosphere variant="office" />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[#94A3B8]">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#A855F7]">Contact Us</span>
        </div>

        {/* Header */}
        <div className="max-w-[780px]">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#F97316]" />
            <span className="font-mono text-[11.5px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
              Direct Engineering Consultation
            </span>
          </div>

          <h1 className="font-heading text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Talk to an HVTI <span className="text-[#A855F7]">Engineer</span>
          </h1>

          <p className="mt-4 font-sans text-base leading-relaxed text-[#CBD5E1] sm:text-lg">
            Have a technical query or need a customized high-voltage testing solution? Fill out the form below or connect directly with our engineering team in Gurgaon.
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-[#0B101B]/90 p-7 sm:p-10 shadow-2xl backdrop-blur-xl lg:col-span-7">
            <h2 className="font-heading text-[22px] font-bold text-white sm:text-[24px]">
              Request a Technical Quote
            </h2>
            <p className="mt-1 text-[13.5px] text-[#94A3B8]">
              Our engineering specialists typically respond within 24 business hours.
            </p>

            <form className="mt-8 flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#CBD5E1]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full rounded-xl border border-white/15 bg-[#060913]/90 px-4 py-3 font-sans text-[14px] text-white placeholder-[#64748B] transition-colors focus:border-[#A855F7] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#CBD5E1]">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full rounded-xl border border-white/15 bg-[#060913]/90 px-4 py-3 font-sans text-[14px] text-white placeholder-[#64748B] transition-colors focus:border-[#A855F7] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#CBD5E1]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91-9876543210"
                    className="w-full rounded-xl border border-white/15 bg-[#060913]/90 px-4 py-3 font-sans text-[14px] text-white placeholder-[#64748B] transition-colors focus:border-[#A855F7] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#CBD5E1]">
                    Organization / Utility
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Power Grid / NTPC / Utility"
                    className="w-full rounded-xl border border-white/15 bg-[#060913]/90 px-4 py-3 font-sans text-[14px] text-white placeholder-[#64748B] transition-colors focus:border-[#A855F7] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#CBD5E1]">
                  Product Category / System of Interest
                </label>
                <select
                  defaultValue="testing"
                  className="w-full rounded-xl border border-white/15 bg-[#060913]/90 px-4 py-3 font-sans text-[14px] text-white transition-colors focus:border-[#A855F7] focus:outline-none"
                >
                  <option value="testing">Electrical Testing Equipment (Hipot Kits, Injection Sets)</option>
                  <option value="safety">Electrical Safety Equipment (Voltage Detectors, Hot Sticks)</option>
                  <option value="monitoring">Condition Monitoring Systems (Temperature, PD)</option>
                  <option value="cameras">Cameras &amp; Imaging Systems (Corona UV, Thermal)</option>
                  <option value="custom">Custom Engineering &amp; Specialized Rigs</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-wider text-[#CBD5E1]">
                  Project Requirements / Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Please describe your technical voltage levels, testing requirements, or application specifications..."
                  className="w-full rounded-xl border border-white/15 bg-[#060913]/90 px-4 py-3 font-sans text-[14px] text-white placeholder-[#64748B] transition-colors focus:border-[#A855F7] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#FB923C]/50 bg-gradient-to-r from-[#F97316] via-[#EA580C] to-[#C2410C] font-sans text-[13px] font-bold tracking-[0.10em] text-white shadow-[0_0_24px_rgba(249,115,22,0.30)] transition-all hover:scale-[1.01] hover:shadow-[0_0_32px_rgba(249,115,22,0.50)]"
              >
                <span>SUBMIT INQUIRY</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right Column: Corporate Locations & Hotlines */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Direct Hotlines Card */}
            <div className="rounded-2xl border border-white/10 bg-[#0B101B]/85 p-6 sm:p-7 backdrop-blur-md">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#A855F7]">
                Quick Contact
              </span>

              <h3 className="mt-2 font-heading text-[18px] font-bold text-white">
                Direct Telephone &amp; Email
              </h3>

              <div className="mt-5 space-y-4 font-sans text-[13.5px]">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[#94A3B8]">Direct Hotline:</span>
                  <a href="tel:+919990246301" className="font-semibold text-white hover:text-[#A855F7]">
                    +91-9990246301
                  </a>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[#94A3B8]">Landline (HQ):</span>
                  <a href="tel:01244018357" className="font-semibold text-white hover:text-[#A855F7]">
                    0124-4018357
                  </a>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-[#94A3B8]">General Inquiries:</span>
                  <a href="mailto:info@hvti.in" className="font-semibold text-[#CBD5E1] hover:text-white">
                    info@hvti.in
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#94A3B8]">Commercial Quotes:</span>
                  <a href="mailto:contact@hvti.in" className="font-semibold text-[#CBD5E1] hover:text-white">
                    contact@hvti.in
                  </a>
                </div>
              </div>
            </div>

            {/* Management Office Facility */}
            <div className="rounded-2xl border border-white/10 bg-[#0B101B]/85 p-6 sm:p-7 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#F97316]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.13 11.37 7.44 11.63.33.28.8.28 1.13 0C12.87 21.37 20 15.25 20 10c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                  Corporate Headquarters
                </span>
              </div>

              <h4 className="mt-2 font-heading text-[16px] font-bold text-white">
                Management Office
              </h4>

              <p className="mt-2 font-sans text-[13px] leading-relaxed text-[#94A3B8]">
                1171, Sector 21, Gurgaon, Haryana – 122016, India
              </p>

              <Link
                href="/management-office"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11.5px] font-semibold text-[#A855F7] hover:underline"
              >
                <span>View Facility Overview →</span>
              </Link>
            </div>

            {/* Laboratory Facility */}
            <div className="rounded-2xl border border-white/10 bg-[#0B101B]/85 p-6 sm:p-7 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[#A855F7]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.13 11.37 7.44 11.63.33.28.8.28 1.13 0C12.87 21.37 20 15.25 20 10c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                  R&amp;D &amp; Manufacturing Works
                </span>
              </div>

              <h4 className="mt-2 font-heading text-[16px] font-bold text-white">
                Laboratory &amp; Testing Facility
              </h4>

              <p className="mt-2 font-sans text-[13px] leading-relaxed text-[#94A3B8]">
                Plot 114, Udyog Vihar, Phase 4, Gurgaon, Haryana – 122015, India
              </p>

              <Link
                href="/laboratory-facilities"
                className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11.5px] font-semibold text-[#A855F7] hover:underline"
              >
                <span>View Laboratory Facilities →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
