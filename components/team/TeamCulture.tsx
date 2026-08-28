"use client";

import React, { useEffect, useRef, useState } from "react";
import { engineeringPillars } from "@/data/team";

/* ================================================================
   HVTI TEAM — ENGINEERING CULTURE & CORE PILLARS
   File: components/team/TeamCulture.tsx
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

export default function TeamCulture() {
  const { ref: sectionRef, visible: sectionVisible } = useReveal(0.2);

  return (
    <section
      id="engineering-culture"
      className="
        relative
        z-10
        w-full
        px-6
        py-12
        sm:px-10
        sm:py-16
        lg:px-14
        lg:py-20
        xl:px-20
      "
    >
      <div
        ref={sectionRef}
        className={`
          mx-auto
          w-full
          max-w-[1400px]
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1.5px] w-6 bg-[#F97316]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#F97316]">
              OUR METHODOLOGY
            </span>
            <span className="h-[1.5px] w-6 bg-[#F97316]" />
          </div>
          <h2 className="mt-2.5 font-heading text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl lg:text-[36px]">
            The Engineering Standard
          </h2>
          <p className="mt-2 font-sans text-[14px] text-[#94A3B8] sm:text-[15px]">
            Four foundational disciplines guiding every circuit, chassis, and dielectric apparatus we create.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {engineeringPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="
                group
                relative
                flex
                flex-col
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
                hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]
              "
            >
              {/* Number Index */}
              <div className="flex items-center justify-between font-mono text-[12px] text-[#64748B]">
                <span className="font-bold text-[#F97316]">
                  0{idx + 1}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]/60" />
              </div>

              {/* Title */}
              <h3 className="mt-4 font-heading text-[17px] font-bold text-white transition-colors duration-200 group-hover:text-[#F97316]">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="mt-2 font-sans text-[13px] leading-[1.65] text-[#CBD5E1]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
