"use client";

import React, { useEffect, useRef, useState } from "react";
import { clientValueProps } from "@/data/clients";

/* ================================================================
   HVTI CLIENTS — FULL-VIEWPORT WHY CLIENTS CHOOSE HVTI
   File: components/clients/ClientWhyChoose.tsx
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

export default function ClientWhyChoose() {
  const { ref: sectionRef, visible: sectionVisible } = useReveal(0.2);

  return (
    <section
      id="why-choose-hvti"
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
              OUR COMMITMENT
            </span>
            <span className="h-[1.5px] w-6 bg-[#F97316]" />
          </div>
          <h2 className="mt-2.5 font-heading text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl lg:text-[36px]">
            Why Industry Leaders Choose HVTI
          </h2>
          <p className="mt-2 font-sans text-[14px] text-[#94A3B8] sm:text-[15px]">
            Engineered with precision, built for extreme utility resilience, and backed by direct technical expertise.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {clientValueProps.map((prop, idx) => (
            <div
              key={idx}
              className="
                group
                relative
                flex
                flex-col
                justify-between
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0A0F1D]/85
                p-7
                shadow-[0_16px_40px_rgba(0,0,0,0.6)]
                backdrop-blur-md
                transition-all
                duration-500
                hover:border-[#A855F7]/40
                hover:bg-[#0A0F1D]
                hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]
                sm:p-8
              "
            >
              <div>
                <span className="font-mono text-[12px] font-bold text-[#F97316]">
                  0{idx + 1}
                </span>

                <h3 className="mt-3 font-heading text-[18px] font-bold text-white transition-colors duration-200 group-hover:text-[#F97316] sm:text-[20px]">
                  {prop.title}
                </h3>

                <p className="mt-3 font-sans text-[13.5px] leading-[1.7] text-[#CBD5E1]">
                  {prop.description}
                </p>
              </div>

              <div className="mt-6 border-t border-white/[0.07] pt-4">
                <span className="font-mono text-[10.5px] font-semibold tracking-wider text-[#A855F7]">
                  PROVEN UTILITY HERITAGE
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
