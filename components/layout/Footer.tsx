"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { TextHoverEffect, FooterBackgroundGradient } from "@/components/ui/TextHoverEffect";

/* ================================================================
   HVTI MASTER FOOTER COMPONENT
   File: components/layout/Footer.tsx

   - Modern architectural layout with full-bleed dynamic HVTI text
   - In-viewport sketch animation triggering on scroll entrance
   - Interactive high-voltage plasma spotlight on cursor hover
   - Dark industrial theme: Deep Purple (#7C3AED), Violet (#A855F7), Safety Orange (#F97316)
   ================================================================ */

const footerColumns = [
  {
    title: "ABOUT US",
    links: [
      { label: "About HVTI", href: "/about" },
      { label: "Our Clients", href: "/our-clients" },
      { label: "Management Office", href: "/management-office" },
      { label: "Laboratory Facilities", href: "/laboratory-facilities" },
      { label: "Our Team", href: "/about/team" },
      { label: "Quality & Certifications", href: "/about/quality" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
  {
    title: "HELPFUL LINKS",
    links: [
      { label: "All Products", href: "/products" },
      { label: "HV AC & DC Testing", href: "/products/high-voltage-ac-dc-testing-systems" },
      { label: "Measurement & Dividers", href: "/products/high-voltage-measurement-dividers" },
      { label: "Current Injection Systems", href: "/products/current-injection-protection-testing" },
      { label: "Partial Discharge Solutions", href: "/products/partial-discharge-solutions" },
      { label: "Thermal & Corona Cameras", href: "/products/corona-cameras" },
      { label: "Technical Resources & FAQs", href: "/resources" },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection((current) => (current === title ? null : title));
  };

  return (
    <footer className="relative z-20 overflow-hidden border-t border-white/[0.08] bg-[#05070D]">
      {/* High-Voltage Ambient Background Gradient */}
      <FooterBackgroundGradient />

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

      {/* ============================================================
          FOOTER MAIN CONTAINER
          ============================================================ */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pt-12 pb-6 sm:px-8 sm:pt-16 sm:pb-8 lg:px-10 lg:pt-20 lg:pb-10">
        {/* ============================================================
            DESKTOP FOOTER GRID (4 Columns: Brand, About Us, Helpful Links, Contact Us)
            ============================================================ */}
        <div className="hidden lg:grid lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-12">
          {/* 1. BRAND COLUMN */}
          <div className="pr-6">
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
                className="h-auto w-[185px] object-contain object-left"
              />
            </Link>

            <p className="mt-6 max-w-[300px] font-sans text-[13.5px] leading-6 text-[#94A3B8]">
              High-voltage testing, electrical safety, and condition monitoring
              solutions engineered and manufactured for a resilient energy future.
            </p>
          </div>

          {/* 2. ABOUT US & 3. HELPFUL LINKS */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-sans text-[13px] font-semibold tracking-[0.06em] text-white">
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
                        hover:text-[#CBD5E1]
                      "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* 4. CONTACT US */}
          <div>
            <h3 className="font-sans text-[13px] font-semibold tracking-[0.06em] text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">
              {/* Email */}
              <a
                href="mailto:info@hvti.in"
                className="group flex items-center gap-3 font-sans text-[13px] text-[#CBD5E1] transition-colors hover:text-white"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A855F7] transition-colors group-hover:border-[#7C3AED]/60 group-hover:bg-[#7C3AED]/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7L12 13L21 7" />
                  </svg>
                </div>
                <span>info@hvti.in</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+911244448010"
                className="group flex items-center gap-3 font-sans text-[13px] text-[#CBD5E1] transition-colors hover:text-white"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A855F7] transition-colors group-hover:border-[#7C3AED]/60 group-hover:bg-[#7C3AED]/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.9V19C22 20.1 21.1 21 20 21C10.6 21 3 13.4 3 4C3 2.9 3.9 2 5 2H7.1C7.6 2 8 2.3 8.2 2.8L9.2 5.5C9.4 6.1 9.3 6.7 8.9 7.1L7.6 8.4C8.7 10.8 10.2 12.3 12.6 13.4L13.9 12.1C14.3 11.7 14.9 11.6 15.5 11.8L18.2 12.8C18.7 13 19 13.4 19 13.9V16" />
                  </svg>
                </div>
                <span>+91 124 444 8010</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 pt-1">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A855F7]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.13 11.37 7.44 11.63.33.28.8.28 1.13 0C12.87 21.37 20 15.25 20 10c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                  </svg>
                </div>
                <div className="font-sans text-[12.5px] leading-[1.45] text-[#94A3B8]">
                  <strong className="font-semibold text-white">Management Office &amp; Labs</strong>
                  <br />
                  Gurgaon, Haryana, India
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
          <div className="pb-6">
            <Link href="/" aria-label="HVTI Home" className="inline-flex">
              <Image
                src="/images/brand/hvti-logo.png"
                alt="HVTI"
                width={210}
                height={80}
                className="h-auto w-[165px] object-contain object-left"
              />
            </Link>

            <p className="mt-4 max-w-[330px] font-sans text-[13.5px] leading-6 text-[#94A3B8]">
              High-voltage testing, electrical safety, and condition monitoring solutions
              engineered and manufactured in India.
            </p>
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
                    <span className="font-sans text-[13px] font-bold tracking-[0.06em] text-[#CBD5E1]">
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

            {/* Mobile Contact Accordion */}
            <div className="border-b border-white/[0.08]">
              <button
                type="button"
                onClick={() => toggleSection("CONTACT US")}
                className="flex w-full items-center justify-between py-4 text-left"
                aria-expanded={openSection === "CONTACT US"}
              >
                <span className="font-sans text-[13px] font-bold tracking-[0.06em] text-[#CBD5E1]">
                  CONTACT US
                </span>

                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`text-[#A855F7] transition-transform duration-200 ${
                    openSection === "CONTACT US" ? "rotate-45" : ""
                  }`}
                >
                  <path d="M12 5V19M5 12H19" />
                </svg>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openSection === "CONTACT US"
                    ? "grid-rows-[1fr] pb-5 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="space-y-3.5 overflow-hidden pl-1 text-[13px] text-[#CBD5E1]">
                  <a href="mailto:info@hvti.in" className="flex items-center gap-2.5 text-[#CBD5E1]">
                    <span className="text-[#F97316]">Email:</span> info@hvti.in
                  </a>
                  <a href="tel:+911244448010" className="flex items-center gap-2.5 text-[#CBD5E1]">
                    <span className="text-[#F97316]">Phone:</span> +91 124 444 8010
                  </a>
                  <div className="pt-1 text-[12.5px] leading-relaxed text-[#94A3B8]">
                    <strong className="text-white">Management Office &amp; Labs:</strong>
                    <br />
                    Sector 21 &amp; Udyog Vihar Phase 4, Gurgaon, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            DIVIDER LINE + SOCIAL ICONS & COPYRIGHT ROW
            ============================================================ */}
        <div className="mt-12 border-t border-white/[0.09] pt-6 sm:mt-16 sm:pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Left: Minimal Social Icons */}
            <div className="flex items-center gap-4 text-[#94A3B8]">
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="HVTI LinkedIn"
                className="transition-colors duration-200 hover:text-[#A855F7]"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 8.5H3.5V20H6.5V8.5ZM5 3C3.9 3 3 3.9 3 5C3 6.1 3.9 7 5 7C6.1 7 7 6.1 7 5C7 3.9 6.1 3 5 3ZM20.5 13.4C20.5 9.9 18.6 8.2 16.1 8.2C14.1 8.2 13.2 9.3 12.7 10V8.5H9.7V20H12.7V14.3C12.7 12.8 13 11.3 14.7 11.3C16.3 11.3 16.3 12.8 16.3 14.2V20H20.5V13.4Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="HVTI Instagram"
                className="transition-colors duration-200 hover:text-[#A855F7]"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="HVTI Twitter / X"
                className="transition-colors duration-200 hover:text-[#A855F7]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="HVTI YouTube"
                className="transition-colors duration-200 hover:text-[#A855F7]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.6 7.2C21.4 6.4 20.8 5.8 20 5.6C18.6 5.2 12 5.2 12 5.2C12 5.2 5.4 5.2 4 5.6C3.2 5.8 2.6 6.4 2.4 7.2C2 8.6 2 12 2 12C2 12 2 15.4 2.4 16.8C2.6 17.6 3.2 18.2 4 18.4C5.4 18.8 12 18.8 12 18.8C12 18.8 18.6 18.8 20 18.4C20.8 18.2 21.4 17.6 21.6 16.8C22 15.4 22 12 22 12C22 12 22 8.6 21.6 7.2ZM10 15.2V8.8L15.5 12L10 15.2Z" />
                </svg>
              </a>

              {/* Global Web */}
              <a
                href="#"
                aria-label="HVTI Global Network"
                className="transition-colors duration-200 hover:text-[#A855F7]"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
            </div>

            {/* Right: Copyright & Legal */}
            <div className="flex flex-wrap items-center gap-4 font-sans text-[12.5px] text-[#94A3B8]">
              <p>© {new Date().getFullYear()} HVTI Private Limited. All rights reserved.</p>
              <span className="hidden sm:inline h-3 w-px bg-white/[0.15]" />
              <Link href="/terms" className="transition-colors hover:text-white">
                Terms
              </Link>
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy
              </Link>
            </div>
          </div>
        </div>

        {/* ============================================================
            FULL-BLEED GIANT HVTI TEXT (In-viewport sketching from invisible + cursor hover)
            ============================================================ */}
        <div className="relative mt-4 -mb-4 flex w-full items-center justify-center overflow-hidden sm:mt-6 sm:-mb-6">
          <div className="w-full max-w-7xl h-36 sm:h-52 md:h-64 lg:h-80 flex items-center justify-center">
            <TextHoverEffect key={pathname} text="HVTI" className="h-full w-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}