"use client";

import React, { useEffect, useRef, useState } from "react";
import { clientSectors } from "@/data/clients";

/* ================================================================
   HVTI CLIENTS — FULL-VIEWPORT SECTORS & INDUSTRIES WE SERVE
   File: components/clients/ClientSectors.tsx
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

export default function ClientSectors() {
  const { ref: sectionRef, visible: sectionVisible } = useReveal(0.2);

  return (
    <section
      id="industries"
      className="
        relative
        z-10
        flex
        min-h-screen
        w-full
        flex-col
        items-center
        justify-center
        px-6
        py-16
        sm:px-10
        sm:py-20
        lg:px-14
        xl:px-20
      "
    >
      <div
        ref={sectionRef}
        className={`
          mx-auto
          my-auto
          w-full
          max-w-[1400px]
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        {/* Section Header */}
        <div className="mb-10 text-center sm:mb-12">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-6 bg-[#F97316]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#F97316]">
              INDUSTRY DOMAINS
            </span>
            <span className="h-[1.5px] w-6 bg-[#F97316]" />
          </div>
          <h2 className="mt-2.5 font-heading text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl lg:text-[36px]">
            Industries We Power Across the Nation
          </h2>
          <p className="mt-2 font-sans text-[14px] text-[#94A3B8] sm:text-[15px]">
            Our high-voltage testing and personnel safety apparatus are deployed across critical infrastructure sectors.
          </p>
        </div>

        {/* 6 Sectors Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {clientSectors.map((sector, idx) => (
            <div
              key={sector.id}
              className="
                group
                relative
                flex
                flex-col
                justify-between
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0A0F1D]/80
                p-6
                shadow-[0_12px_32px_rgba(0,0,0,0.5)]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-[#A855F7]/40
                hover:bg-[#0A0F1D]
                hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]
                sm:p-7
              "
            >
              <div>
                {/* Number & Count Tag */}
                <div className="flex items-center justify-between font-mono text-[11.5px]">
                  <span className="font-bold text-[#F97316]">
                    0{idx + 1}
                  </span>
                  <span className="rounded-full border border-white/[0.10] bg-[#05070D]/80 px-2.5 py-0.5 text-[#A855F7]">
                    {sector.count}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-3.5 font-heading text-[18px] font-bold text-white transition-colors duration-200 group-hover:text-[#F97316] sm:text-[19px]">
                  {sector.name}
                </h3>

                {/* Description */}
                <p className="mt-2 font-sans text-[13px] leading-[1.65] text-[#CBD5E1]">
                  {sector.description}
                </p>
              </div>

              {/* Bottom Hairline Indicator */}
              <div className="mt-5 border-t border-white/[0.07] pt-3.5">
                <span className="font-mono text-[10.5px] font-semibold uppercase tracking-wider text-[#64748B]">
                  CERTIFIED DEPLOYMENT
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
