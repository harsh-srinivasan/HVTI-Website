"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/* ================================================================
   HVTI MASTER FOOTER COMPONENT
   File: components/layout/Footer.tsx

   - Dark architectural minimal luxury styling
   - Hairline top gradient with subtle electric purple ambient glow
   - Verified real links to products, facilities, and resources
   - High-fidelity SVG icons across both desktop and mobile
   - Comprehensive facility locations & contact information
   ================================================================ */

const footerColumns = [
  {
    title: "PRODUCTS",
    links: [
      { label: "High Voltage AC Testing Kits", href: "/products/high-voltage-ac-testing-kits" },
      { label: "High Voltage Detector TP-S9", href: "/products/high-voltage-detector-tp-s9" },
      { label: "Electrical Safety Equipment", href: "/products" },
      { label: "High Voltage Testing Systems", href: "/products" },
      { label: "Partial Discharge & Diagnostics", href: "/products" },
      { label: "Custom High Voltage Engineering", href: "/products" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About HVTI", href: "/about" },
      { label: "Our Clients", href: "/our-clients" },
      { label: "Management Office", href: "/management-office" },
      { label: "Laboratory Facilities", href: "/laboratory-facilities" },
      { label: "Our Team", href: "/about/team" },
      { label: "Quality & Certifications", href: "/about/quality" },
      { label: "Careers", href: "/about/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Product Catalogues", href: "/resources" },
      { label: "Blog & Insights", href: "/blog" },
      { label: "Technical Datasheets", href: "/resources" },
      { label: "Case Studies", href: "/resources" },
      { label: "Brochures & Guides", href: "/resources" },
      { label: "FAQs", href: "/resources" },
    ],
  },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection((current) => (current === title ? null : title));
  };

  return (
    <footer className="relative z-20 overflow-hidden border-t border-white/[0.08] bg-[#05070D]">
      {/* Top Ambient Hairline Gradient */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          h-[1px]
          bg-gradient-to-r
          from-transparent
          via-[#A855F7]/30
          to-transparent
        "
      />

      {/* Subtle Corner Violet Glows */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[100px]
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.06),transparent_70%)]
          blur-[70px]
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          -right-[100px]
          top-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.06),transparent_70%)]
          blur-[70px]
        "
      />

      {/* ============================================================
          FOOTER MAIN CONTAINER
          ============================================================ */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        {/* ============================================================
            DESKTOP FOOTER GRID (>= lg)
            ============================================================ */}
        <div className="hidden lg:grid lg:grid-cols-[1.35fr_1fr_1fr_1fr_1.15fr] lg:gap-10">
          {/* ==========================================================
              1. BRAND COLUMN
              ========================================================== */}
          <div className="border-r border-white/[0.07] pr-8">
            <Link
              href="/"
              className="group inline-flex transition-transform duration-300 hover:scale-[1.02]"
              aria-label="HVTI Home"
            >
              <Image
                src="/images/brand/hvti-logo.png"
                alt="HVTI"
                width={210}
                height={80}
                className="h-auto w-[180px] object-contain object-left"
              />
            </Link>

            <p className="mt-6 max-w-[270px] font-sans text-[13.5px] leading-6 text-[#94A3B8]">
              Engineering safety, testing power and monitoring performance for a
              safer, resilient high-voltage energy future.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="HVTI LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.12]
                  bg-[#0C1120]/75
                  text-[#CBD5E1]
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:border-[#A855F7]/50
                  hover:bg-[#7C3AED]/15
                  hover:text-[#C084FC]
                  hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]
                "
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 8.5H3.5V20H6.5V8.5ZM5 3C3.9 3 3 3.9 3 5C3 6.1 3.9 7 5 7C6.1 7 7 6.1 7 5C7 3.9 6.1 3 5 3ZM20.5 13.4C20.5 9.9 18.6 8.2 16.1 8.2C14.1 8.2 13.2 9.3 12.7 10V8.5H9.7V20H12.7V14.3C12.7 12.8 13 11.3 14.7 11.3C16.3 11.3 16.3 12.8 16.3 14.2V20H20.5V13.4Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="HVTI YouTube"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.12]
                  bg-[#0C1120]/75
                  text-[#CBD5E1]
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:border-[#A855F7]/50
                  hover:bg-[#7C3AED]/15
                  hover:text-[#C084FC]
                  hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]
                "
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.6 7.2C21.4 6.4 20.8 5.8 20 5.6C18.6 5.2 12 5.2 12 5.2C12 5.2 5.4 5.2 4 5.6C3.2 5.8 2.6 6.4 2.4 7.2C2 8.6 2 12 2 12C2 12 2 15.4 2.4 16.8C2.6 17.6 3.2 18.2 4 18.4C5.4 18.8 12 18.8 12 18.8C12 18.8 18.6 18.8 20 18.4C20.8 18.2 21.4 17.6 21.6 16.8C22 15.4 22 12 22 12C22 12 22 8.6 21.6 7.2ZM10 15.2V8.8L15.5 12L10 15.2Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="HVTI Instagram"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/[0.12]
                  bg-[#0C1120]/75
                  text-[#CBD5E1]
                  backdrop-blur-md
                  transition-all
                  duration-200
                  hover:border-[#A855F7]/50
                  hover:bg-[#7C3AED]/15
                  hover:text-[#C084FC]
                  hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]
                "
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* ==========================================================
              2. FOOTER LINK COLUMNS (Products, Company, Resources)
              ========================================================== */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-sans text-[12px] font-bold tracking-[0.14em] text-[#A855F7]">
                {column.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="
                        inline-block
                        font-sans
                        text-[13px]
                        leading-5
                        text-[#94A3B8]
                        transition-all
                        duration-200
                        hover:translate-x-1
                        hover:text-white
                      "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ==========================================================
              3. GET IN TOUCH / FACILITIES COLUMN
              ========================================================== */}
          <div>
            <h3 className="font-sans text-[12px] font-bold tracking-[0.14em] text-[#A855F7]">
              GET IN TOUCH
            </h3>

            <div className="mt-5 space-y-4">
              {/* Phone */}
              <a
                href="tel:+911244448010"
                className="group flex items-center gap-3 font-sans text-[13px] text-[#CBD5E1] transition-colors hover:text-white"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] transition-colors group-hover:bg-[#F97316]/20">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.9V19C22 20.1 21.1 21 20 21C10.6 21 3 13.4 3 4C3 2.9 3.9 2 5 2H7.1C7.6 2 8 2.3 8.2 2.8L9.2 5.5C9.4 6.1 9.3 6.7 8.9 7.1L7.6 8.4C8.7 10.8 10.2 12.3 12.6 13.4L13.9 12.1C14.3 11.7 14.9 11.6 15.5 11.8L18.2 12.8C18.7 13 19 13.4 19 13.9V16" />
                  </svg>
                </div>
                <span>+91 124 444 8010</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@hvti.in"
                className="group flex items-center gap-3 font-sans text-[13px] text-[#CBD5E1] transition-colors hover:text-white"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316] transition-colors group-hover:bg-[#F97316]/20">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7L12 13L21 7" />
                  </svg>
                </div>
                <span>info@hvti.in</span>
              </a>

              {/* Management Office Location */}
              <div className="flex items-start gap-3 pt-1">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.13 11.37 7.44 11.63.33.28.8.28 1.13 0C12.87 21.37 20 15.25 20 10c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                  </svg>
                </div>
                <div className="font-sans text-[12.5px] leading-[1.45] text-[#94A3B8]">
                  <strong className="font-semibold text-white">Management Office</strong>
                  <br />
                  1171, Sector 21, Gurgaon,
                  <br />
                  Haryana – 122016, India
                </div>
              </div>

              {/* Laboratory Facilities Location */}
              <div className="flex items-start gap-3 pt-1">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#F97316]/30 bg-[#F97316]/10 text-[#F97316]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.13 11.37 7.44 11.63.33.28.8.28 1.13 0C12.87 21.37 20 15.25 20 10c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                  </svg>
                </div>
                <div className="font-sans text-[12.5px] leading-[1.45] text-[#94A3B8]">
                  <strong className="font-semibold text-white">Laboratory Facilities</strong>
                  <br />
                  Plot 114, Udyog Vihar, Phase 4,
                  <br />
                  Gurgaon, Haryana – 122015, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            MOBILE FOOTER (< lg)
            ============================================================ */}
        <div className="lg:hidden">
          {/* Mobile Brand */}
          <div className="pb-7">
            <Link
              href="/"
              aria-label="HVTI Home"
              className="inline-flex"
            >
              <Image
                src="/images/brand/hvti-logo.png"
                alt="HVTI"
                width={210}
                height={80}
                className="h-auto w-[165px] object-contain object-left"
              />
            </Link>

            <p className="mt-4 max-w-[330px] font-sans text-[13.5px] leading-6 text-[#94A3B8]">
              Engineering safety, testing power and monitoring performance for a
              safer, resilient energy future.
            </p>

            {/* Mobile Social Links with Crisp SVGs */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="HVTI LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-[#0C1120]/75 text-[#CBD5E1]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 8.5H3.5V20H6.5V8.5ZM5 3C3.9 3 3 3.9 3 5C3 6.1 3.9 7 5 7C6.1 7 7 6.1 7 5C7 3.9 6.1 3 5 3ZM20.5 13.4C20.5 9.9 18.6 8.2 16.1 8.2C14.1 8.2 13.2 9.3 12.7 10V8.5H9.7V20H12.7V14.3C12.7 12.8 13 11.3 14.7 11.3C16.3 11.3 16.3 12.8 16.3 14.2V20H20.5V13.4Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="HVTI YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-[#0C1120]/75 text-[#CBD5E1]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.6 7.2C21.4 6.4 20.8 5.8 20 5.6C18.6 5.2 12 5.2 12 5.2C12 5.2 5.4 5.2 4 5.6C3.2 5.8 2.6 6.4 2.4 7.2C2 8.6 2 12 2 12C2 12 2 15.4 2.4 16.8C2.6 17.6 3.2 18.2 4 18.4C5.4 18.8 12 18.8 12 18.8C12 18.8 18.6 18.8 20 18.4C20.8 18.2 21.4 17.6 21.6 16.8C22 15.4 22 12 22 12C22 12 22 8.6 21.6 7.2ZM10 15.2V8.8L15.5 12L10 15.2Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="HVTI Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-[#0C1120]/75 text-[#CBD5E1]"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Accordion Sections */}
          <div className="border-t border-white/[0.08]">
            {footerColumns.map((column) => {
              const isOpen = openSection === column.title;

              return (
                <div key={column.title} className="border-b border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => toggleSection(column.title)}
                    className="flex w-full items-center justify-between py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans text-[13px] font-bold tracking-[0.1em] text-[#CBD5E1]">
                      {column.title}
                    </span>

                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`text-[#A855F7] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <path d="M12 5V19M5 12H19" />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] pb-4 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-2.5 pl-1">
                        {column.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="font-sans text-[13px] text-[#94A3B8] hover:text-white"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Mobile Contact & Locations Accordion */}
            <div className="border-b border-white/[0.08]">
              <button
                type="button"
                onClick={() => toggleSection("GET IN TOUCH")}
                className="flex w-full items-center justify-between py-4 text-left"
                aria-expanded={openSection === "GET IN TOUCH"}
              >
                <span className="font-sans text-[13px] font-bold tracking-[0.1em] text-[#CBD5E1]">
                  GET IN TOUCH
                </span>

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`text-[#A855F7] transition-transform duration-200 ${
                    openSection === "GET IN TOUCH" ? "rotate-45" : ""
                  }`}
                >
                  <path d="M12 5V19M5 12H19" />
                </svg>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openSection === "GET IN TOUCH"
                    ? "grid-rows-[1fr] pb-5 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="space-y-3.5 overflow-hidden pl-1 text-[13px] text-[#CBD5E1]">
                  <a href="tel:+911244448010" className="flex items-center gap-2.5 text-[#CBD5E1]">
                    <span className="text-[#F97316]">Phone:</span> +91 124 444 8010
                  </a>

                  <a href="mailto:info@hvti.in" className="flex items-center gap-2.5 text-[#CBD5E1]">
                    <span className="text-[#F97316]">Email:</span> info@hvti.in
                  </a>

                  <div className="pt-1 text-[12.5px] leading-relaxed text-[#94A3B8]">
                    <strong className="text-white">Management Office:</strong>
                    <br />
                    1171, Sector 21, Gurgaon – 122016
                  </div>

                  <div className="text-[12.5px] leading-relaxed text-[#94A3B8]">
                    <strong className="text-white">Laboratory Facilities:</strong>
                    <br />
                    Plot 114, Udyog Vihar, Phase 4, Gurgaon – 122015
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            COPYRIGHT / LEGAL BAR
            ============================================================ */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.07] pt-6 font-sans text-[12px] text-[#64748B] sm:flex-row sm:items-center sm:justify-between lg:mt-12">
          <p>© {new Date().getFullYear()} HVTI Private Limited. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
            <span className="h-3 w-px bg-white/[0.15]" />
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}