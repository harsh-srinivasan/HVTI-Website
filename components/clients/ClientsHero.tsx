"use client";

import React, { useEffect, useRef, useState } from "react";

/* ================================================================
   HVTI CLIENTS — FULL-VIEWPORT HERO SECTION
   File: components/clients/ClientsHero.tsx
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

export default function ClientsHero() {
  const { ref: heroRef, visible: heroVisible } = useReveal(0.2);

  const scrollToGrid = () => {
    const el = document.getElementById("clients-grid");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="clients-hero"
      className="
        relative
        z-10
        flex
        min-h-screen
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-6
        py-20
        pt-[110px]
        text-center
        sm:px-10
        lg:px-14
        xl:px-20
      "
    >
      <div
        ref={heroRef}
        className={`
          my-auto
          flex
          w-full
          max-w-[1050px]
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
            NATIONAL INFRASTRUCTURE &amp; INDUSTRIAL PARTNERS
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

        {/* Main Heading */}
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
          <span>Trusted by Leaders in</span>{" "}
          <span className="text-[#A855F7]">Power, Grid &amp; Industry</span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-[780px] font-sans text-base leading-[1.7] text-[#CBD5E1] sm:text-lg lg:text-[18px]">
          At HVTI, we take pride in collaborating with prominent power transmission grids,
          generation utilities, state electricity boards, and heavy industrial corporations.
          Our partners rely on our certified dielectric testing, live-line safety tools, and predictive diagnostics.
        </p>

        {/* Capability Metric Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {[
            { value: "30+ Years", label: "Utility Partnerships" },
            { value: "500+ Plants", label: "Equipped Nationwide" },
            { value: "8 Core Sectors", label: "Power, Transit & Heavy Industry" },
            { value: "100% Tested", label: "Zero-Defect Reliability" },
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

      {/* Scroll Down Cue */}
      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={scrollToGrid}
          className="
            group
            inline-flex
            flex-col
            items-center
            gap-1.5
            font-mono
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-[#64748B]
            transition-colors
            duration-200
            hover:text-[#F97316]
          "
        >
          <span>EXPLORE PARTNER PORTFOLIO</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-bounce text-[#A855F7] group-hover:text-[#F97316]"
            aria-hidden="true"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
