"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/* ================================================================
   HVTI MASTER NAVBAR COMPONENT
   File: components/layout/Navbar.tsx

   - Dark architectural minimal luxury styling
   - Hairline bottom gradient with subtle electric purple ambient edge
   - Sleek frosted glassmorphism dropdown menus with real site pages
   - Refined high-voltage capsule CTA button with neon aura
   - Capsule language switcher & smooth responsive mobile drawer
   ================================================================ */

interface DropdownLink {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: boolean;
  links?: DropdownLink[];
}

const navItems: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    dropdown: true,
    links: [
      {
        label: "Electrical Testing Equipment",
        href: "/viewall/electrical-testing-equipment",
        description: "Hipot test kits, current injection sets & dividers",
        badge: "Category",
      },
      {
        label: "Electrical Safety Equipments",
        href: "/viewall/electrical-safety-equipment",
        description: "Voltage detectors, hot sticks & grounding equipment",
        badge: "Category",
      },
      {
        label: "Condition Monitoring",
        href: "/viewall/condition-monitoring",
        description: "Online temperature & partial discharge monitoring",
        badge: "Category",
      },
      {
        label: "Cameras & Imaging Systems",
        href: "/viewall/cameras-and-imaging-systems",
        description: "Infrared thermal & solar-blind UV corona cameras",
        badge: "Category",
      },
    ],
  },
  {
    label: "About HVTI",
    href: "/about",
    dropdown: true,
    links: [
      {
        label: "Management Office",
        href: "/management-office",
        description: "Corporate HQ & Operations in Gurgaon (Sec 21)",
        badge: "Facility",
      },
      {
        label: "Laboratory Facilities",
        href: "/laboratory-facilities",
        description: "15,000 sq. ft. R&D, Testing & Manufacturing",
        badge: "Facility",
      },
      {
        label: "HVTI Team",
        href: "/about/team",
        description: "High-voltage engineers, researchers & leadership",
        badge: "People",
      },
      {
        label: "Company Overview",
        href: "/about",
        description: "Our history, vision & high-voltage engineering expertise",
      },
      {
        label: "Quality & Certifications",
        href: "/about/quality",
        description: "Rigorous standards & testing certifications",
      },
    ],
  },
  {
    label: "Events",
    href: "/events",
    dropdown: true,
    links: [
      {
        label: "Upcoming Events",
        href: "/events/upcoming",
        description: "Conferences, exhibitions & high-voltage industry seminars",
        badge: "Upcoming",
      },
      {
        label: "Past Events",
        href: "/events/past",
        description: "Previous expo archives, technical presentations & galleries",
        badge: "Archive",
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    dropdown: true,
    links: [
      {
        label: "Product Catalogues",
        href: "/resources",
        description: "Download full equipment specifications PDF",
      },
      {
        label: "Blog & Insights",
        href: "/blog",
        description: "High-voltage testing trends, guides & safety articles",
        badge: "Articles",
      },
      {
        label: "Technical Case Studies",
        href: "/resources",
        description: "Field deployment reports & validation data",
      },
    ],
  },
  {
    label: "Clients",
    href: "/clients",
    dropdown: false,
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ============================================================
          MASTER FIXED HEADER
          ============================================================ */}
      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-300
          ${
            scrolled
              ? "border-b border-white/[0.08] bg-[#05070D]/85 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
              : "border-b border-white/[0.06] bg-[#05070D]/75 backdrop-blur-xl"
          }
        `}
      >
        {/* Subtle Ambient Bottom Hairline Gradient */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            right-0
            h-[1px]
            bg-gradient-to-r
            from-transparent
            via-[#A855F7]/30
            to-transparent
          "
        />

        {/* Inner Flex Container */}
        <div
          className={`
            relative
            mx-auto
            flex
            w-full
            max-w-[1440px]
            items-center
            justify-between
            px-5
            transition-all
            duration-300
            sm:px-8
            lg:px-10
            ${scrolled ? "h-[64px]" : "h-[74px]"}
          `}
        >
          {/* ========================================================
              1. HVTI BRAND LOGO
              ======================================================== */}
          <Link
            href="/"
            className="group flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.02]"
            aria-label="HVTI Home"
          >
            <img
              src="/images/brand/hvti-logo.png"
              alt="HVTI"
              className={`
                w-auto
                object-contain
                transition-all
                duration-300
                ${scrolled ? "h-[40px]" : "h-[46px] sm:h-[58px]"}
              `}
            />
          </Link>

          {/* ========================================================
              2. DESKTOP CENTER NAVIGATION LINKS
              ======================================================== */}
          <nav className="hidden items-center lg:flex">
            <div
              className={`
                flex
                items-center
                transition-all
                duration-300
                ${scrolled ? "gap-7 xl:gap-10" : "gap-8 xl:gap-11"}
              `}
            >
              {navItems.map((item) => (
                <div key={item.label} className="group relative py-2">
                  {/* Top Link */}
                  <Link
                    href={item.href}
                    className={`
                      flex
                      items-center
                      gap-1.5
                      whitespace-nowrap
                      font-sans
                      font-medium
                      tracking-[0.015em]
                      text-[#CBD5E1]
                      transition-all
                      duration-200
                      hover:text-white
                      ${scrolled ? "text-[14.5px] xl:text-[15px]" : "text-[15px] xl:text-[16px]"}
                    `}
                  >
                    <span>{item.label}</span>

                    {item.dropdown && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-[#94A3B8] transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#A855F7]"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Desktop Dropdown Card with Continuous Looping Animated Border Beam */}
                  {item.dropdown && item.links && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-full
                        w-[315px]
                        -translate-x-1/2
                        translate-y-2
                        overflow-hidden
                        rounded-xl
                        p-[1.5px]
                        opacity-0
                        shadow-[0_25px_60px_rgba(0,0,0,0.98),0_0_35px_rgba(168,85,247,0.18)]
                        transition-all
                        duration-200
                        ease-out
                        group-hover:pointer-events-auto
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      {/* Subtle Static Perimeter Border */}
                      <div className="pointer-events-none absolute inset-0 rounded-xl border border-white/[0.08]" />

                      {/* Continuous Orbiting Glowing Border Beam (Looping Conic Gradient) */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          -inset-[150%]
                          animate-border-beam
                          bg-[conic-gradient(from_0deg,transparent_0_270deg,rgba(168,85,247,0.3)_300deg,rgba(192,132,252,0.9)_340deg,#F97316_360deg)]
                        "
                      />

                      {/* Inner 100% Solid Card Surface */}
                      <div className="relative z-10 flex flex-col gap-1 rounded-[10.5px] bg-[#0A0F1D] p-2">
                        {item.links.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            className="
                              group/link
                              flex
                              flex-col
                              rounded-lg
                              border
                              border-transparent
                              p-2.5
                              transition-all
                              duration-150
                              hover:border-[#A855F7]/30
                              hover:bg-[#131C35]
                            "
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-sans text-[13px] font-semibold text-white group-hover/link:text-[#C084FC]">
                                {link.label}
                              </span>
                              {link.badge && (
                                <span className="rounded-full border border-[#A855F7]/50 bg-[#7C3AED]/30 px-2 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#C084FC]">
                                  {link.badge}
                                </span>
                              )}
                            </div>
                            {link.description && (
                              <span className="mt-1 font-sans text-[11.5px] leading-snug text-[#94A3B8] transition-colors group-hover/link:text-[#CBD5E1]">
                                {link.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* ========================================================
              3. DESKTOP RIGHT-SIDE ACTIONS (CTA & Language Capsule)
              ======================================================== */}
          <div className="hidden items-center gap-3.5 lg:flex">
            {/* Request a Quote Capsule CTA */}
            <Link
              href="/contact"
              className={`
                group
                relative
                inline-flex
                items-center
                justify-center
                gap-2
                overflow-hidden
                rounded-full
                border
                border-[#FB923C]/50
                bg-gradient-to-r
                from-[#F97316]
                via-[#EA580C]
                to-[#C2410C]
                font-sans
                font-bold
                tracking-[0.10em]
                text-white
                shadow-[0_0_20px_rgba(249,115,22,0.28)]
                transition-all
                duration-300
                hover:border-[#FB923C]
                hover:shadow-[0_0_28px_rgba(249,115,22,0.50)]
                hover:scale-[1.02]
                active:scale-[0.98]
                ${scrolled ? "h-9 px-4 text-[11px]" : "h-10 px-5 text-[11.5px]"}
              `}
            >
              <span>REQUEST A QUOTE</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Frosted Glass Language Capsule */}
            <button
              type="button"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-white/[0.10]
                bg-[#0C1120]/75
                px-3
                py-1.5
                font-sans
                text-[12px]
                font-medium
                text-[#CBD5E1]
                backdrop-blur-md
                transition-all
                duration-200
                hover:border-[#A855F7]/40
                hover:bg-[#0C1120]
                hover:text-white
              "
              aria-label="Select Language"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9s1.1-6.6 3.3-9z" />
              </svg>
              <span>EN</span>
              <svg
                width="8"
                height="8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* ========================================================
              4. MOBILE HEADER CONTROLS (Hamburger & Lang)
              ======================================================== */}
          <div className="flex items-center gap-2.5 lg:hidden">
            {/* Mobile Lang Button */}
            <button
              type="button"
              className="
                inline-flex
                items-center
                gap-1
                rounded-full
                border
                border-white/[0.10]
                bg-[#0C1120]/75
                px-2.5
                py-1
                text-[11.5px]
                font-medium
                text-[#CBD5E1]
              "
              aria-label="Select Language"
            >
              <span>EN</span>
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-white/[0.10]
                bg-[#0C1120]/80
                text-white
                transition-colors
                hover:border-[#A855F7]/40
                hover:bg-white/[0.05]
              "
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
                <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
                <line x1="4" y1="18" x2="20" y2="18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ============================================================
          5. MOBILE NAVIGATION OVERLAY DRAWER
          ============================================================ */}
      <div
        className={`
          fixed
          inset-0
          z-[60]
          bg-[#05070D]/95
          backdrop-blur-2xl
          transition-all
          duration-300
          lg:hidden
          ${mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
        `}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Mobile Drawer Top Bar */}
          <div className="flex h-[64px] items-center justify-between border-b border-white/[0.08] px-5 sm:px-8">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="HVTI Home"
            >
              <img
                src="/images/brand/hvti-logo.png"
                alt="HVTI"
                className="h-[38px] w-auto object-contain"
              />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-white/[0.10]
                text-white
                hover:bg-white/[0.05]
              "
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Mobile Links List */}
          <nav className="flex flex-1 flex-col px-5 py-6 sm:px-8">
            <div className="flex flex-col divide-y divide-white/[0.06]">
              {navItems.map((item) => (
                <div key={item.label} className="py-2.5">
                  {item.dropdown && item.links ? (
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenMobileDropdown(
                            openMobileDropdown === item.label ? null : item.label
                          )
                        }
                        className="flex w-full items-center justify-between py-2 text-left font-sans text-[16px] font-semibold text-white"
                      >
                        <span>{item.label}</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className={`text-[#A855F7] transition-transform duration-200 ${
                            openMobileDropdown === item.label ? "rotate-180" : ""
                          }`}
                        >
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {openMobileDropdown === item.label && (
                        <div className="mt-1 flex flex-col gap-1.5 pl-3 border-l border-[#A855F7]/30 pb-2">
                          {item.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between py-1.5 font-sans text-[14px] text-[#CBD5E1] hover:text-white"
                            >
                              <span>{link.label}</span>
                              {link.badge && (
                                <span className="rounded-full border border-[#A855F7]/30 bg-[#7C3AED]/20 px-1.5 py-0.5 font-mono text-[9px] text-[#A855F7]">
                                  {link.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 font-sans text-[16px] font-semibold text-white hover:text-[#C084FC]"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Quote Button */}
            <div className="mt-8 pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="
                  flex
                  h-11
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#F97316]
                  to-[#EA580C]
                  font-sans
                  text-[12.5px]
                  font-bold
                  tracking-[0.10em]
                  text-white
                  shadow-[0_0_24px_rgba(249,115,22,0.35)]
                "
              >
                <span>REQUEST A QUOTE</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}