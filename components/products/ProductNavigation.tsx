"use client";

import { useEffect, useState } from "react";

/* ================================================================
   PRODUCT NAVIGATION
   File: components/products/ProductNavigation.tsx

   Sticky in-page navigation bar with technical tab icons and
   active scroll spy highlighting.
   ================================================================ */

function OverviewIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SpecsIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ApplicationsIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function FeaturesIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8" cy="6" r="1.5" fill="currentColor" />
      <circle cx="14" cy="12" r="1.5" fill="currentColor" />
      <circle cx="10" cy="18" r="1.5" fill="currentColor" />
    </svg>
  );
}

function DocumentsIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const tabs = [
  {
    label: "Overview",
    href: "#overview",
    icon: OverviewIcon,
  },
  {
    label: "Specifications",
    href: "#specifications",
    icon: SpecsIcon,
  },
  {
    label: "Applications",
    href: "#applications",
    icon: ApplicationsIcon,
  },
  {
    label: "Features",
    href: "#features",
    icon: FeaturesIcon,
  },
  {
    label: "Documents",
    href: "#documents",
    icon: DocumentsIcon,
  },
];

export default function ProductNavigation() {
  const [activeTab, setActiveTab] = useState("#overview");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["overview", "specifications", "applications-features", "documents-cta"];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (id === "applications-features") {
              setActiveTab("#applications");
            } else if (id === "documents-cta") {
              setActiveTab("#documents");
            } else {
              setActiveTab(`#${id}`);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="product-navigation"
      className="
        sticky
        top-0
        z-30
        w-full
        border-b
        border-white/[0.08]
        bg-[#05070D]/90
        backdrop-blur-xl
      "
    >
      {/* ==========================================================
          DESKTOP NAVIGATION
          ========================================================== */}

      <div className="mx-auto hidden max-w-[1280px] px-10 xl:px-12 lg:block">
        <div className="flex h-[60px] items-center gap-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.href;

            return (
              <a
                key={tab.label}
                href={tab.href}
                onClick={() => setActiveTab(tab.href)}
                className={`
                  relative
                  flex
                  h-full
                  items-center
                  gap-2.5
                  font-sans
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  transition-colors
                  duration-200

                  ${
                    isActive
                      ? "text-[#F97316]"
                      : "text-[#94A3B8] hover:text-white"
                  }
                `}
              >
                <span className={isActive ? "text-[#F97316]" : "text-[#94A3B8]"}>
                  <Icon />
                </span>

                <span>{tab.label}</span>

                {/* ==================================================
                    ACTIVE INDICATOR
                    ================================================== */}

                {isActive && (
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-full
                      bg-[#F97316]
                      shadow-[0_0_12px_rgba(249,115,22,0.6)]
                    "
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>

      {/* ==========================================================
          MOBILE NAVIGATION
          ========================================================== */}

      <div className="block overflow-x-auto lg:hidden">
        <div className="flex h-[54px] min-w-max items-center px-5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.href;

            return (
              <a
                key={tab.label}
                href={tab.href}
                onClick={() => setActiveTab(tab.href)}
                className={`
                  mr-6
                  flex
                  h-full
                  items-center
                  gap-2
                  font-sans
                  text-[11.5px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]

                  ${
                    isActive
                      ? "text-[#F97316]"
                      : "text-[#94A3B8]"
                  }
                `}
              >
                <Icon />
                <span>{tab.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}