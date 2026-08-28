"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

/* ================================================================
   HOME PAGE — FACILITIES & INFRASTRUCTURE SHOWCASE (SINGLE VIEWPORT)
   File: components/home/HomeFacilities.tsx

   - Single viewport compact design
   - Elegant dual architectural cards:
     1. Management Office (Sec 21 Gurgaon)
     2. Laboratory Facilities (15,000 Sq. Ft. Udyog Vihar)
   - High-voltage blueprint atmospheric styling
   - Slow, cinematic reveal animations with threshold ~0.6
   ================================================================ */

function useReveal(threshold = 0.6) {
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

export default function HomeFacilities() {
  const { ref: sectionRef, visible: isVisible } = useReveal(0.6);

  return (
    <section
      id="facilities"
      className="
        relative
        flex
        w-full
        flex-col
        justify-center
        overflow-hidden
        bg-transparent
        px-5
        py-14
        sm:px-8
        sm:py-16
        lg:px-10
        lg:py-20
      "
    >
      {/* Background Subtle Violet Ambient Nebula */}
      <div
        className={`
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[550px]
          w-[850px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),rgba(168,85,247,0.04)_45%,transparent_70%)]
          blur-[95px]
          transition-opacity
          duration-[3000ms]
          ease-out
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
        aria-hidden="true"
      />

      <div
        ref={sectionRef}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1020px]
        "
      >
        {/* Section Header (Compact & Centered with Slow Staggered Reveal) */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div
            className={`
              flex
              items-center
              gap-2.5
              transition-all
              duration-[1800ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
            `}
          >
            <span
              className={`
                h-[2px]
                bg-[#F97316]
                transition-all
                duration-[1600ms]
                delay-[250ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "w-7 opacity-100" : "w-0 opacity-0"}
              `}
            />
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
              World-Class Infrastructure
            </span>
            <span
              className={`
                h-[2px]
                bg-[#F97316]
                transition-all
                duration-[1600ms]
                delay-[250ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "w-7 opacity-100" : "w-0 opacity-0"}
              `}
            />
          </div>

          {/* Heading */}
          <h2
            className={`
              mt-2.5
              font-heading
              text-[24px]
              font-bold
              tracking-[-0.02em]
              text-white
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]
              sm:text-[28px]
              lg:text-[32px]
              transition-all
              duration-[2000ms]
              delay-[200ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
            `}
          >
            <span>Engineered for Precision,</span>{" "}
            <span className="text-[#A855F7]">Built for Safety</span>
          </h2>

          {/* Description */}
          <p
            className={`
              mt-2.5
              max-w-[620px]
              font-sans
              text-[13.5px]
              leading-relaxed
              text-[#94A3B8]
              sm:text-[14px]
              transition-all
              duration-[2000ms]
              delay-[380ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
            `}
          >
            Explore HVTI&apos;s dual high-voltage facilities in Gurgaon—advancing
            dielectric testing, cutting-edge R&amp;D, and 800 kV equipment
            manufacturing.
          </p>
        </div>

        {/* Dual Compact Facility Cards Grid with Staggered Entrance */}
        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {/* ========================================================
              CARD 1: MANAGEMENT OFFICE
              ======================================================== */}
          <div
            className={`
              group
              relative
              flex
              flex-col
              overflow-hidden
              rounded-xl
              border
              border-white/[0.08]
              bg-[#0A0F1D]/90
              p-4
              shadow-[0_12px_32px_rgba(0,0,0,0.6)]
              backdrop-blur-sm
              transition-all
              duration-[2200ms]
              delay-[520ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:border-[#A855F7]/40
              hover:bg-[#0A0F1D]
              hover:shadow-[0_0_30px_rgba(168,85,247,0.16)]
              sm:p-5
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
            `}
          >
            {/* Compact Photo Frame */}
            <div className="relative aspect-[16/9.5] w-full overflow-hidden rounded-lg border border-white/[0.08] bg-[#05070D]">
              <Image
                src="/images/office/hvti-building-hero-hd.jpg"
                alt="HVTI Management Office in Gurgaon"
                fill
                quality={90}
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-transparent opacity-60" />

              {/* Location Badge */}
              <div className="absolute bottom-2.5 left-2.5 rounded-full border border-white/[0.15] bg-[#05070D]/85 px-2.5 py-0.5 font-sans text-[10.5px] font-medium text-[#CBD5E1] backdrop-blur-md">
                📍 Sector 21, Gurgaon
              </div>
            </div>

            {/* Card Content */}
            <div className="mt-4 flex flex-1 flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#A855F7]">
                  Corporate HQ &amp; Operations
                </span>
                <h3 className="mt-0.5 font-heading text-[18px] font-bold text-white sm:text-[19px]">
                  Management Office
                </h3>
                <p className="mt-1.5 font-sans text-[12.5px] leading-relaxed text-[#94A3B8]">
                  Central nerve center for corporate strategy, executive leadership,
                  client operations, and sustainable 15 kW solar energy governance.
                </p>
              </div>

              <div className="mt-4 pt-1">
                <Link
                  href="/management-office"
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    font-sans
                    text-[12px]
                    font-bold
                    tracking-wide
                    text-[#F97316]
                    transition-all
                    duration-200
                    hover:text-[#FB923C]
                    group-hover:translate-x-1
                  "
                >
                  <span>Explore Management Office</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================
              CARD 2: LABORATORY FACILITIES
              ======================================================== */}
          <div
            className={`
              group
              relative
              flex
              flex-col
              overflow-hidden
              rounded-xl
              border
              border-white/[0.08]
              bg-[#0A0F1D]/90
              p-4
              shadow-[0_12px_32px_rgba(0,0,0,0.6)]
              backdrop-blur-sm
              transition-all
              duration-[2200ms]
              delay-[780ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:border-[#A855F7]/40
              hover:bg-[#0A0F1D]
              hover:shadow-[0_0_30px_rgba(168,85,247,0.16)]
              sm:p-5
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
            `}
          >
            {/* Compact Photo Frame */}
            <div className="relative aspect-[16/9.5] w-full overflow-hidden rounded-lg border border-white/[0.08] bg-[#05070D]">
              <Image
                src="/images/office/hvti-rd-workshop-hd.jpg"
                alt="HVTI High-Voltage Laboratory Facilities in Udyog Vihar"
                fill
                quality={90}
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-transparent opacity-60" />

              {/* Scale & Voltage Badge */}
              <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5">
                <span className="rounded-full border border-[#F97316]/50 bg-[#F97316]/90 px-2 py-0.5 font-mono text-[9.5px] font-bold text-white shadow-[0_0_10px_rgba(249,115,22,0.4)]">
                  15,000 SQ. FT.
                </span>
                <span className="rounded-full border border-white/[0.15] bg-[#05070D]/85 px-2 py-0.5 font-sans text-[10.5px] font-medium text-[#CBD5E1] backdrop-blur-md">
                  📍 Udyog Vihar Ph 4
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="mt-4 flex flex-1 flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#A855F7]">
                  R&amp;D &amp; Manufacturing Up to 800 kV
                </span>
                <h3 className="mt-0.5 font-heading text-[18px] font-bold text-white sm:text-[19px]">
                  Laboratory Facilities
                </h3>
                <p className="mt-1.5 font-sans text-[12.5px] leading-relaxed text-[#94A3B8]">
                  State-of-the-art infrastructure with high-voltage testing bays,
                  dielectric measurement labs, and precision manufacturing up to 800 kV.
                </p>
              </div>

              <div className="mt-4 pt-1">
                <Link
                  href="/laboratory-facilities"
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    font-sans
                    text-[12px]
                    font-bold
                    tracking-wide
                    text-[#F97316]
                    transition-all
                    duration-200
                    hover:text-[#FB923C]
                    group-hover:translate-x-1
                  "
                >
                  <span>Explore Laboratory Facilities</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

