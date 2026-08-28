"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

/* ================================================================
   HVTI COMPANY OVERVIEW — FACILITIES & CAMPUS GATEWAY CTA
   File: components/about/AboutCTA.tsx
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

export default function AboutCTA() {
  const { ref: ctaRef, visible: ctaVisible } = useReveal(0.25);

  return (
    <section
      id="about-cta"
      className="
        relative
        z-10
        w-full
        px-6
        py-10
        sm:px-10
        sm:py-12
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
          max-w-[760px]
          overflow-hidden
          rounded-2xl
          border
          border-white/[0.10]
          bg-[#0A0F1D]/85
          p-6
          text-center
          shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(168,85,247,0.10)]
          backdrop-blur-md
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          sm:p-7
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
            w-[360px]
            -translate-x-1/2
            rounded-full
            bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.18),transparent_70%)]
            blur-[40px]
          "
        />

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2">
          <span className="h-[1.5px] w-4 bg-[#F97316]" />
          <span className="font-mono text-[10.5px] font-bold uppercase tracking-[0.20em] text-[#F97316]">
            DISCOVER OUR FACILITIES
          </span>
          <span className="h-[1.5px] w-4 bg-[#F97316]" />
        </div>

        {/* Heading */}
        <h2
          className="
            mt-2.5
            font-heading
            text-xl
            font-bold
            tracking-[-0.02em]
            text-white
            sm:text-2xl
            lg:text-[25px]
          "
        >
          Visit HVTI Campus &amp; Laboratories in Gurgaon
        </h2>

        {/* Description */}
        <p className="mx-auto mt-2.5 max-w-[580px] font-sans text-[13px] leading-[1.65] text-[#CBD5E1] sm:text-[13.5px]">
          Tour our corporate headquarters or explore our 15,000 sq. ft. high-voltage testing, dielectric diagnostic, and R&amp;D engineering laboratories.
        </p>

        {/* Facility Action Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/management-office"
            className="
              inline-flex
              h-[40px]
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[#F97316]/45
              bg-gradient-to-r
              from-[#F97316]
              to-[#EA580C]
              px-5
              font-sans
              text-[12px]
              font-bold
              tracking-[0.08em]
              text-white
              shadow-[0_0_20px_rgba(249,115,22,0.25)]
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-[0_0_28px_rgba(249,115,22,0.45)]
            "
          >
            <span>MANAGEMENT OFFICE (SEC 21)</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/laboratory-facilities"
            className="
              inline-flex
              h-[40px]
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-[#A855F7]/40
              bg-[#120B24]
              px-5
              font-sans
              text-[12px]
              font-bold
              tracking-[0.08em]
              text-[#C084FC]
              shadow-[0_0_20px_rgba(168,85,247,0.15)]
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:border-[#A855F7]
              hover:bg-[#1A0F33]
              hover:text-white
              hover:shadow-[0_0_28px_rgba(168,85,247,0.35)]
            "
          >
            <span>LABORATORY FACILITIES (UDYOG VIHAR)</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
