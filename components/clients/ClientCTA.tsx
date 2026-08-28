"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

/* ================================================================
   HVTI CLIENTS — COMPACT PARTNERSHIP & PROCUREMENT CTA
   File: components/clients/ClientCTA.tsx
   ================================================================ */

function useReveal(threshold = 0.25) {
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

export default function ClientCTA() {
  const { ref: ctaRef, visible: ctaVisible } = useReveal(0.25);

  return (
    <section
      id="clients-cta"
      className="
        relative
        z-10
        w-full
        px-6
        py-8
        sm:px-10
        sm:py-10
        lg:px-14
        xl:px-20
      "
    >
      <div
        ref={ctaRef}
        className={`
          relative
          mx-auto
          w-full
          max-w-[720px]
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.10]
          bg-[#0A0F1D]/85
          p-5
          text-center
          shadow-[0_12px_32px_rgba(0,0,0,0.6),0_0_24px_rgba(168,85,247,0.10)]
          backdrop-blur-md
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          sm:p-6
          ${ctaVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-[0.98]"}
        `}
      >
        {/* Ambient Radial Glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-40
            w-[320px]
            -translate-x-1/2
            rounded-full
            bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.16),transparent_70%)]
            blur-[40px]
          "
        />

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2">
          <span className="h-[1.5px] w-4 bg-[#F97316]" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.20em] text-[#F97316]">
            PARTNERSHIP &amp; PROCUREMENT
          </span>
          <span className="h-[1.5px] w-4 bg-[#F97316]" />
        </div>

        {/* Heading */}
        <h2
          className="
            mt-2
            font-heading
            text-lg
            font-bold
            tracking-[-0.02em]
            text-white
            sm:text-xl
            lg:text-[22px]
          "
        >
          Join Our Network of Trusted Utility Partners
        </h2>

        {/* Description */}
        <p className="mx-auto mt-2 max-w-[560px] font-sans text-[12.5px] leading-[1.6] text-[#CBD5E1] sm:text-[13px]">
          Interested in becoming part of our growing list of clients? Partner with HVTI
          to equip your grid, substation, or plant with certified dielectric testing apparatus.
        </p>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <Link
            href="/contact"
            className="
              inline-flex
              h-[38px]
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[#FB923C]/60
              bg-gradient-to-r
              from-[#F97316]
              via-[#EA580C]
              to-[#C2410C]
              px-5
              font-sans
              text-[11.5px]
              font-bold
              tracking-[0.06em]
              text-white
              shadow-[0_0_15px_rgba(249,115,22,0.25)]
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:border-[#FB923C]
              hover:shadow-[0_0_25px_rgba(249,115,22,0.45)]
            "
          >
            <span>DISCUSS PROCUREMENT</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>

          <Link
            href="/products"
            className="
              inline-flex
              h-[38px]
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-white/[0.12]
              bg-[#05070D]/70
              px-4.5
              font-sans
              text-[11.5px]
              font-semibold
              text-[#CBD5E1]
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-[#A855F7]/60
              hover:bg-[#0A0F1D]
              hover:text-white
            "
          >
            <span>VIEW PRODUCT CATALOGUE</span>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 border-t border-white/[0.06] pt-3 sm:gap-6">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#94A3B8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
            <span>Govt. &amp; PSU Compliant</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#94A3B8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span>NABL Calibrated</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#94A3B8]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
            <span>Pan-India Field Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
