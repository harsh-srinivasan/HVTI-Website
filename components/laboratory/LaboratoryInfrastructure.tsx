"use client";

import React, { useEffect, useRef, useState } from "react";

/* ================================================================
   VIEWPORT 2 — STATE-OF-THE-ART INFRASTRUCTURE & LIFECYCLE FLOW
   File: components/laboratory/LaboratoryInfrastructure.tsx

   - Scale Fact Highlight: 15,000 SQ. FT.
   - Narrative Body Copy (Direct from source text)
   - Product Lifecycle Engineering Progression Diagram:
     CONCEPT → DESIGN → PRODUCTION → TESTING → QUALITY ASSURANCE
   - Directly on dark canvas with zero giant card boxes
   ================================================================ */

function useReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

const lifecycleStages = [
  { step: "01", label: "CONCEPT" },
  { step: "02", label: "DESIGN" },
  { step: "03", label: "PRODUCTION" },
  { step: "04", label: "TESTING" },
  { step: "05", label: "QUALITY ASSURANCE" },
];

export default function LaboratoryInfrastructure() {
  const { ref: sectionRef, visible: sectionVisible } = useReveal(0.2);

  return (
    <section
      id="state-of-the-art-infrastructure"
      className="
        relative
        w-full
        overflow-hidden
        px-6
        py-16
        sm:px-8
        sm:py-20
        lg:px-12
        lg:py-24
      "
    >
      {/* Central Constrained Canvas (Max Width: 920px) */}
      <div
        ref={sectionRef}
        className={`
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[920px]
          flex-col
          items-center
          text-center
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        {/* ========================================================
            1. SCALE / FACT MOMENT (15,000 SQ. FT.)
            ======================================================== */}
        <div className="flex flex-col items-center">
          <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#A855F7] sm:text-[12px]">
            FACILITY SCALE &amp; FOOTPRINT
          </span>

          <div className="mt-2 flex items-baseline gap-2.5 sm:gap-3">
            <span
              className="
                font-heading
                text-[44px]
                font-extrabold
                leading-none
                tracking-[-0.03em]
                text-white
                drop-shadow-[0_2px_18px_rgba(168,85,247,0.35)]
                sm:text-[58px]
                md:text-[68px]
              "
            >
              15,000
            </span>
            <span className="font-heading text-[18px] font-bold tracking-[0.1em] text-[#F97316] sm:text-[22px] md:text-[26px]">
              SQ. FT.
            </span>
          </div>

          <span className="mt-1 font-sans text-[12px] font-medium tracking-[0.14em] text-[#94A3B8] sm:text-[13px]">
            STATE-OF-THE-ART LABORATORY
          </span>
        </div>

        {/* Section Heading */}
        <h2
          className="
            mt-10
            font-heading
            text-[26px]
            font-bold
            leading-[1.2]
            tracking-[-0.02em]
            text-white
            drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]
            sm:text-[32px]
            md:text-[36px]
          "
        >
          <span>State-of-the-Art</span>{" "}
          <span className="text-[#A855F7]">Infrastructure</span>
        </h2>

        {/* Orange Accent Line */}
        <div
          className={`
            my-4
            h-[2px]
            bg-[#F97316]
            transition-all
            duration-[1600ms]
            delay-[200ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${sectionVisible ? "w-12" : "w-0"}
          `}
        />

        {/* Exact Body Copy */}
        <div className="max-w-[760px] space-y-4 font-sans text-[14.5px] leading-[1.75] text-[#CBD5E1] drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)] sm:text-[15.5px]">
          <p>
            Spanning an impressive{" "}
            <strong className="font-semibold text-white">15,000 square feet</strong>
            , HVTI&apos;s laboratory is a state-of-the-art facility dedicated to
            meeting the highest standards of innovation, precision, and safety.
          </p>
          <p>
            Our advanced manufacturing and testing units support the entire
            lifecycle of our products, from concept and design to production,
            rigorous testing, and quality assurance.
          </p>
          <p className="text-[#94A3B8]">
            This facility represents a cornerstone of our unwavering commitment to
            excellence in the electrical testing and safety equipment industry.
          </p>
        </div>

        {/* ========================================================
            2. PRODUCT LIFECYCLE ENGINEERING PROGRESSION DIAGRAM
            ======================================================== */}
        <div className="mt-12 w-full pt-4">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="h-[1px] w-8 bg-[#A855F7]/40" />
            <span className="font-sans text-[11px] font-semibold tracking-[0.18em] text-[#C084FC]">
              FULL LIFECYCLE PRODUCT GOVERNANCE
            </span>
            <div className="h-[1px] w-8 bg-[#A855F7]/40" />
          </div>

          {/* Desktop & Tablet Progression Flow (>= sm) */}
          <div className="hidden sm:grid sm:grid-cols-5 sm:gap-3 lg:gap-4">
            {lifecycleStages.map((stage, idx) => (
              <div
                key={stage.step}
                className="
                  group
                  relative
                  flex
                  flex-col
                  items-center
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-[#0C1120]/70
                  px-3
                  py-4
                  shadow-[0_4px_20px_rgba(0,0,0,0.4)]
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-[#A855F7]/40
                  hover:bg-[#0C1120]
                  hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]
                "
              >
                {/* Step Index Badge */}
                <span className="font-mono text-[11px] font-bold text-[#F97316]">
                  {stage.step}
                </span>

                {/* Stage Label */}
                <span className="mt-1.5 font-sans text-[12px] font-bold tracking-[0.08em] text-white">
                  {stage.label}
                </span>

                {/* Connecting Arrow (except last) */}
                {idx < lifecycleStages.length - 1 && (
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-[14px]
                      top-1/2
                      hidden
                      -translate-y-1/2
                      text-[#A855F7]/60
                      md:block
                    "
                    aria-hidden="true"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Progression Flow (< sm) */}
          <div className="flex flex-col gap-2.5 sm:hidden">
            {lifecycleStages.map((stage, idx) => (
              <div
                key={stage.step}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-white/[0.08]
                  bg-[#0C1120]/75
                  px-4
                  py-2.5
                "
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] font-bold text-[#F97316]">
                    {stage.step}
                  </span>
                  <span className="font-sans text-[13px] font-bold text-white">
                    {stage.label}
                  </span>
                </div>
                {idx < lifecycleStages.length - 1 && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#A855F7]/60">
                    <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
