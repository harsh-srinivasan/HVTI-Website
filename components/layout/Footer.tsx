"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const footerColumns = [
  {
    title: "PRODUCTS",
    links: [
      { label: "Electrical Safety Equipment", href: "/products/electrical-safety" },
      { label: "High Voltage Testing", href: "/products/high-voltage-testing" },
      { label: "Partial Discharge Testing", href: "/products/partial-discharge" },
      { label: "Condition Monitoring", href: "/products/condition-monitoring" },
      { label: "Thermal & Imaging Systems", href: "/products/thermal-imaging" },
      { label: "Custom Engineering", href: "/products/custom-engineering" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About HVTI", href: "/about" },
      { label: "Our Facilities", href: "/about/facilities" },
      { label: "Quality & Certifications", href: "/about/quality" },
      { label: "Our Team", href: "/about/team" },
      { label: "Careers", href: "/about/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { label: "Product Catalogue", href: "/resources/catalogue" },
      { label: "Brochures", href: "/resources/brochures" },
      { label: "Case Studies", href: "/resources/case-studies" },
      { label: "Datasheets", href: "/resources/datasheets" },
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Blogs", href: "/resources/blogs" },
    ],
  },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection((current) => (current === title ? null : title));
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070D]">
      {/* ============================================================
          FOOTER MAIN CONTAINER
          File: components/layout/Footer.tsx
          ============================================================ */}
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">

        {/* ============================================================
            DESKTOP FOOTER
            ============================================================ */}
        <div className="hidden lg:grid lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr] lg:gap-10">

          {/* ==========================================================
              BRAND COLUMN
              ========================================================== */}
          <div className="border-r border-white/[0.08] pr-10">

            {/* HVTI LOGO */}
            <Link
              href="/"
              className="inline-flex"
              aria-label="HVTI Home"
            >
              <Image
                src="/images/brand/hvti-logo.png"
                alt="HVTI"
                width={210}
                height={80}
                className="h-auto w-[190px] object-contain object-left"
              />
            </Link>

            <p className="mt-7 max-w-[270px] text-[14px] leading-7 text-[#9CA3AF]">
              Engineering safety, testing power and monitoring performance
              for a safer energy future.
            </p>

            {/* ========================================================
                SOCIAL LINKS
                ======================================================== */}
            <div className="mt-7 flex items-center gap-3">

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="HVTI LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.15] text-[#CBD5E1] transition-all duration-200 hover:border-[#7C3AED] hover:text-[#A78BFA]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.5 8.5H3.5V20H6.5V8.5ZM5 3C3.9 3 3 3.9 3 5C3 6.1 3.9 7 5 7C6.1 7 7 6.1 7 5C7 3.9 6.1 3 5 3ZM20.5 13.4C20.5 9.9 18.6 8.2 16.1 8.2C14.1 8.2 13.2 9.3 12.7 10V8.5H9.7V20H12.7V14.3C12.7 12.8 13 11.3 14.7 11.3C16.3 11.3 16.3 12.8 16.3 14.2V20H20.5V13.4Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="HVTI YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.15] text-[#CBD5E1] transition-all duration-200 hover:border-[#7C3AED] hover:text-[#A78BFA]"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.6 7.2C21.4 6.4 20.8 5.8 20 5.6C18.6 5.2 12 5.2 12 5.2C12 5.2 5.4 5.2 4 5.6C3.2 5.8 2.6 6.4 2.4 7.2C2 8.6 2 12 2 12C2 12 2 15.4 2.4 16.8C2.6 17.6 3.2 18.2 4 18.4C5.4 18.8 12 18.8 12 18.8C12 18.8 18.6 18.8 20 18.4C20.8 18.2 21.4 17.6 21.6 16.8C22 15.4 22 12 22 12C22 12 22 8.6 21.6 7.2ZM10 15.2V8.8L15.5 12L10 15.2Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="HVTI Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.15] text-[#CBD5E1] transition-all duration-200 hover:border-[#7C3AED] hover:text-[#A78BFA]"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

            </div>
          </div>

          {/* ==========================================================
              FOOTER LINK COLUMNS
              ========================================================== */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[13px] font-semibold tracking-[0.08em] text-[#A78BFA]">
                {column.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] leading-5 text-[#9CA3AF] transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ==========================================================
              GET IN TOUCH
              ========================================================== */}
          <div>
            <h3 className="text-[13px] font-semibold tracking-[0.08em] text-[#A78BFA]">
              GET IN TOUCH
            </h3>

            <div className="mt-6 space-y-6">

              {/* Phone */}
              <a
                href="tel:+911244448010"
                className="group flex items-start gap-4"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="mt-0.5 shrink-0 text-[#F97316]"
                >
                  <path d="M22 16.9V19C22 20.1 21.1 21 20 21C10.6 21 3 13.4 3 4C3 2.9 3.9 2 5 2H7.1C7.6 2 8 2.3 8.2 2.8L9.2 5.5C9.4 6.1 9.3 6.7 8.9 7.1L7.6 8.4C8.7 10.8 10.2 12.3 12.6 13.4L13.9 12.1C14.3 11.7 14.9 11.6 15.5 11.8L18.2 12.8C18.7 13 19 13.4 19 13.9V16" />
                </svg>

                <span className="text-[13px] leading-5 text-[#CBD5E1] transition-colors group-hover:text-white">
                  +91 124 444 8010
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@hvti.in"
                className="group flex items-start gap-4"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="mt-0.5 shrink-0 text-[#F97316]"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7L12 13L21 7" />
                </svg>

                <span className="text-[13px] leading-5 text-[#CBD5E1] transition-colors group-hover:text-white">
                  info@hvti.in
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="mt-0.5 shrink-0 text-[#F97316]"
                >
                  <path d="M20 10C20 15.5 12 22 12 22C12 22 4 15.5 4 10C4 5.6 7.6 2 12 2C16.4 2 20 5.6 20 10Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <span className="text-[13px] leading-5 text-[#CBD5E1]">
                  Gurugram, Haryana
                  <br />
                  India
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* ============================================================
            MOBILE FOOTER
            ============================================================ */}
        <div className="lg:hidden">

          {/* ==========================================================
              MOBILE BRAND
              ========================================================== */}
          <div className="pb-8">

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
                className="h-auto w-[175px] object-contain object-left"
              />
            </Link>

            <p className="mt-5 max-w-[330px] text-[14px] leading-6 text-[#9CA3AF]">
              Engineering safety, testing power and monitoring performance
              for a safer energy future.
            </p>

            {/* Mobile social links */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="HVTI LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.15] text-[#CBD5E1]"
              >
                <span className="text-xs font-bold">in</span>
              </a>

              <a
                href="#"
                aria-label="HVTI YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.15] text-[#CBD5E1]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.6 7.2C21.4 6.4 20.8 5.8 20 5.6C18.6 5.2 12 5.2 12 5.2C12 5.2 5.4 5.2 4 5.6C3.2 5.8 2.6 6.4 2.4 7.2C2 8.6 2 12 2 12C2 12 2 15.4 2.4 16.8C2.6 17.6 3.2 18.2 4 18.4C5.4 18.8 12 18.8 12 18.8C12 18.8 18.6 18.8 20 18.4C20.8 18.2 21.4 17.6 21.6 16.8C22 15.4 22 12 22 12C22 12 22 8.6 21.6 7.2ZM10 15.2V8.8L15.5 12L10 15.2Z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="HVTI Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.15] text-[#CBD5E1]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

            </div>
          </div>

          {/* ==========================================================
              MOBILE ACCORDION SECTIONS
              ========================================================== */}
          <div className="border-t border-white/[0.08]">

            {footerColumns.map((column) => {
              const isOpen = openSection === column.title;

              return (
                <div
                  key={column.title}
                  className="border-b border-white/[0.08]"
                >
                  <button
                    type="button"
                    onClick={() => toggleSection(column.title)}
                    className="flex w-full items-center justify-between py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[13px] font-semibold tracking-[0.08em] text-[#E8EAF0]">
                      {column.title}
                    </span>

                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className={`text-[#A78BFA] transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <path d="M12 5V19" />
                      <path d="M5 12H19" />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-5 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="space-y-3">
                        {column.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="text-[13px] leading-5 text-[#9CA3AF]"
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

            {/* ========================================================
                MOBILE GET IN TOUCH
                ======================================================== */}
            <div className="border-b border-white/[0.08]">

              <button
                type="button"
                onClick={() => toggleSection("GET IN TOUCH")}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={openSection === "GET IN TOUCH"}
              >
                <span className="text-[13px] font-semibold tracking-[0.08em] text-[#E8EAF0]">
                  GET IN TOUCH
                </span>

                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className={`text-[#A78BFA] transition-transform duration-200 ${
                    openSection === "GET IN TOUCH" ? "rotate-45" : ""
                  }`}
                >
                  <path d="M12 5V19" />
                  <path d="M5 12H19" />
                </svg>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openSection === "GET IN TOUCH"
                    ? "grid-rows-[1fr] pb-6 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden space-y-5">

                  <a
                    href="tel:+911244448010"
                    className="flex items-center gap-4 text-[13px] text-[#CBD5E1]"
                  >
                    <span className="text-[#F97316]">☎</span>
                    +91 124 444 8010
                  </a>

                  <a
                    href="mailto:info@hvti.in"
                    className="flex items-center gap-4 text-[13px] text-[#CBD5E1]"
                  >
                    <span className="text-[#F97316]">✉</span>
                    info@hvti.in
                  </a>

                  <div className="flex items-start gap-4 text-[13px] leading-5 text-[#CBD5E1]">
                    <span className="text-[#F97316]">⌖</span>

                    <span>
                      Gurugram, Haryana
                      <br />
                      India
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            COPYRIGHT / LEGAL BAR
            ============================================================ */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.08] pt-6 text-[12px] text-[#6B7280] sm:flex-row sm:items-center sm:justify-between lg:mt-12">

          <p>
            © 2024 HVTI Private Limited. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>

            <span className="h-3 w-px bg-white/[0.15]" />

            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}