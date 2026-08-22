"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "Products",
    href: "/products",
    dropdown: true,
  },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: true,
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: true,
  },
  {
    label: "About HVTI",
    href: "/about",
    dropdown: true,
  },
  {
    label: "Resources",
    href: "/resources",
    dropdown: true,
  },
  {
    label: "Clients",
    href: "/clients",
    dropdown: false,
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  {/* ============================================================
      NAVBAR SCROLL DETECTION
      ============================================================ */}

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ============================================================
          NAVBAR
          Translucent background + shrinking effect on scroll
          ============================================================ */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.10] bg-[#05070D]/70 backdrop-blur-xl"
            : "border-b border-white/[0.08] bg-[#05070D]/85 backdrop-blur-xl"
        }`}
      >
        {/* ============================================================
            NAVBAR INNER CONTAINER
            Height shrinks from 78px → 64px
            ============================================================ */}

        <div
          className={`relative mx-auto flex w-full max-w-[1440px] items-center px-5 transition-all duration-300 sm:px-8 lg:px-10 ${
            scrolled ? "h-[64px]" : "h-[78px]"
          }`}
        >

          {/* ========================================================
              HVTI LOGO
              Slightly shrinks when navbar shrinks
              ======================================================== */}

          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="HVTI Home"
          >
            <img
              src="/images/brand/hvti-logo.png"
              alt="HVTI"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled
                  ? "h-[42px]"
                  : "h-[48px] sm:h-[68px]"
              }`}
            />
          </Link>

          {/* ========================================================
              DESKTOP NAVIGATION
              PERFECTLY CENTERED
              ======================================================== */}

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
            <div
              className={`flex items-center transition-all duration-300 ${
                scrolled
                  ? "gap-7 xl:gap-9"
                  : "gap-8 xl:gap-10"
              }`}
            >

              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="group relative"
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 whitespace-nowrap font-medium text-[#E8EAF0] transition-all duration-300 hover:text-white ${
                      scrolled
                        ? "text-[14px]"
                        : "text-[15px]"
                    }`}
                  >
                    {item.label}

                    {item.dropdown && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-200 group-hover:rotate-180"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* ==================================================
                      DESKTOP DROPDOWN
                      ================================================== */}

                  {item.dropdown && (
                    <div className="pointer-events-none absolute left-1/2 top-full w-52 -translate-x-1/2 translate-y-3 rounded-xl border border-white/[0.08] bg-[#0C1120]/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">

                      <Link
                        href={item.href}
                        className="block rounded-lg px-4 py-3 text-sm text-[#CBD5E1] transition-colors hover:bg-white/[0.05] hover:text-white"
                      >
                        View {item.label}
                      </Link>

                      <Link
                        href={item.href}
                        className="block rounded-lg px-4 py-3 text-sm text-[#CBD5E1] transition-colors hover:bg-white/[0.05] hover:text-white"
                      >
                        Explore
                      </Link>

                    </div>
                  )}
                </div>
              ))}

            </div>
          </nav>

          {/* ========================================================
              DESKTOP RIGHT-SIDE ACTIONS
              ======================================================== */}

          <div className="ml-auto hidden items-center lg:flex">

            {/* ======================================================
                REQUEST A QUOTE
                Also becomes slightly smaller when scrolled
                ====================================================== */}

            <Link
              href="/contact"
              className={`inline-flex items-center justify-center rounded-md bg-[#F97316] font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#FB923C] hover:shadow-[0_0_25px_rgba(249,115,22,0.25)] ${
                scrolled
                  ? "h-9 px-4 text-[11px]"
                  : "h-11 px-5 text-[12px]"
              }`}
            >
              REQUEST A QUOTE
            </Link>

            {/* ======================================================
                LANGUAGE SELECTOR
                ====================================================== */}

            <button
              type="button"
              className={`ml-6 flex items-center gap-2 font-medium text-[#E8EAF0] transition-all duration-300 hover:text-white ${
                scrolled
                  ? "text-[12px]"
                  : "text-[13px]"
              }`}
              aria-label="Select language"
            >
              <svg
                width={scrolled ? "17" : "19"}
                height={scrolled ? "17" : "19"}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M12 3C14.2 5.4 15.3 8.4 15.3 12C15.3 15.6 14.2 18.6 12 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M12 3C9.8 5.4 8.7 8.4 8.7 12C8.7 15.6 9.8 18.6 12 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>

              <span>EN</span>

              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </div>

          {/* ========================================================
              MOBILE CONTROLS
              ======================================================== */}

          <div className="ml-auto flex items-center lg:hidden">

            {/* Mobile language */}
            <button
              type="button"
              className="mr-4 flex items-center gap-1.5 text-xs font-medium text-[#E8EAF0]"
              aria-label="Select language"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M12 3C14.2 5.4 15.3 8.4 15.3 12C15.3 15.6 14.2 18.6 12 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M12 3C9.8 5.4 8.7 8.4 8.7 12C8.7 15.6 9.8 18.6 12 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>

              EN
            </button>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/[0.1] text-white transition-colors hover:bg-white/[0.05]"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="flex w-5 flex-col gap-1.5">
                <span className="h-px w-full bg-white" />
                <span className="h-px w-full bg-white" />
                <span className="h-px w-full bg-white" />
              </span>
            </button>

          </div>

        </div>
      </header>

      {/* ============================================================
          MOBILE MENU
          ============================================================ */}

      <div
        className={`fixed inset-0 z-[60] bg-[#05070D] transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col">

          {/* ========================================================
              MOBILE MENU HEADER
              ======================================================== */}

          <div className="flex h-[78px] items-center justify-between border-b border-white/[0.08] px-5 sm:px-8">

            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="HVTI Home"
            >
              <img
                src="/images/brand/hvti-logo.png"
                alt="HVTI"
                className="h-[48px] w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-white"
              aria-label="Close menu"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

          </div>

          {/* ========================================================
              MOBILE NAVIGATION LINKS
              ======================================================== */}

          <nav className="flex flex-1 flex-col px-5 py-8 sm:px-8">

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[58px] items-center justify-between border-b border-white/[0.07] text-[16px] font-medium text-[#E8EAF0] transition-colors hover:text-[#A78BFA]"
              >
                <span>{item.label}</span>

                {item.dropdown && (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#A78BFA]"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
            ))}

            {/* ======================================================
                MOBILE QUOTE BUTTON
                ====================================================== */}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 flex h-12 items-center justify-center rounded-md bg-[#F97316] text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#FB923C]"
            >
              REQUEST A QUOTE
            </Link>

            {/* ======================================================
                MOBILE LANGUAGE
                ====================================================== */}

            <button
              type="button"
              className="mx-auto mt-7 flex items-center gap-2 text-sm text-[#CBD5E1]"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M12 3C14.2 5.4 15.3 8.4 15.3 12C15.3 15.6 14.2 18.6 12 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M12 3C9.8 5.4 8.7 8.4 8.7 12C8.7 15.6 9.8 18.6 12 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>

              <span>English</span>

              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </nav>
        </div>
      </div>
    </>
  );
}