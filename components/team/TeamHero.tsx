"use client";

import React, { useEffect, useRef, useState } from "react";

/* ================================================================
   HVTI TEAM — HERO SECTION
   File: components/team/TeamHero.tsx
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

export default function TeamHero() {
  const { ref: heroRef, visible: heroVisible } = useReveal(0.2);

  return (
    <section
      id="team-hero"
      className="
        relative
        z-10
        flex
        min-h-[100svh]
        min-h-screen
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-6
        py-12
        pt-[95px]
        text-center
        sm:px-10
        sm:py-16
        sm:pt-[110px]
        lg:px-14
        xl:px-20
      "
    >
      <div
        ref={heroRef}
        className={`
          my-auto
          mx-auto
          flex
          w-full
          max-w-[1000px]
          flex-col
          items-center
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        {/* Eyebrow */}
        <div className="mb-4 flex items-center gap-3.5">
          <span
            className={`
              h-[2px]
              shrink-0
              bg-[#F97316]
              transition-all
              duration-[1600ms]
              delay-[200ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${heroVisible ? "w-8 sm:w-10" : "w-0"}
            `}
          />
          <span className="font-mono text-[11.5px] font-bold uppercase tracking-[0.20em] text-[#F97316] sm:text-[12.5px]">
            ENGINEERING LEADERSHIP &amp; SPECIALISTS
          </span>
          <span
            className={`
              h-[2px]
              shrink-0
              bg-[#F97316]
              transition-all
              duration-[1600ms]
              delay-[200ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${heroVisible ? "w-8 sm:w-10" : "w-0"}
            `}
          />
        </div>

        {/* Title */}
        <h1
          className="
            font-heading
            text-3xl
            font-bold
            leading-[1.08]
            tracking-[-0.035em]
            text-white
            drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]
            sm:text-4xl
            md:text-[48px]
            lg:text-[54px]
            xl:text-[58px]
          "
        >
          <span>The Minds Behind</span>{" "}
          <span className="text-[#A855F7]">High-Voltage Innovation</span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-[760px] font-sans text-base leading-[1.7] text-[#CBD5E1] sm:text-lg lg:text-[18px]">
          Meet the engineers, designers, and production leaders driving indigenous
          high-voltage testing systems, live-line safety apparatus, and critical power
          diagnostics for power utilities across India and international markets.
        </p>

        {/* Highlight Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {[
            { value: "30+ Years", label: "Industry Leadership" },
            { value: "SpaceX & Global Tech", label: "Engineering Pedigree" },
            { value: "100% In-House", label: "Design & Fabrication" },
            { value: "Gurgaon, India", label: "R&D & Production Facility" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="
                flex
                items-center
                gap-2.5
                rounded-full
                border
                border-white/[0.12]
                bg-[#0C1120]/80
                px-4
                py-1.5
                shadow-[0_4px_16px_rgba(0,0,0,0.4)]
                backdrop-blur-md
              "
            >
              <span className="font-mono text-[12px] font-bold text-white">
                {item.value}
              </span>
              <span className="h-2 w-px bg-white/[0.2]" />
              <span className="font-sans text-[10.5px] font-medium uppercase tracking-wider text-[#A855F7]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
