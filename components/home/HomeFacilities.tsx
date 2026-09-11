"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ================================================================
   HOME PAGE — FACILITIES & INFRASTRUCTURE SHOWCASE (SINGLE VIEWPORT)
   File: components/home/HomeFacilities.tsx

   - Single viewport compact design
   - Mobile: 0.8x scaled snap carousel with peek & pagination controls
   - Desktop: Dual architectural cards (Management Office & Laboratory)
   - Silky spring entrance reveals calibrated for all screen sizes
   ================================================================ */

export default function HomeFacilities() {
  const { ref: sectionRef, visible: isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "-40px 0px -40px 0px",
  });

  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    let closestIndex = 0;
    let minDistance = Infinity;

    itemRefs.current.forEach((el, idx) => {
      if (!el || !carouselRef.current) return;
      const distance = Math.abs(
        el.offsetLeft - carouselRef.current.offsetLeft - 20 - scrollLeft
      );
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveSlide(closestIndex);
  };

  const scrollToSlide = (index: number) => {
    const el = itemRefs.current[index];
    if (el && carouselRef.current) {
      const targetScroll = el.offsetLeft - carouselRef.current.offsetLeft - 20;
      carouselRef.current.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
      setActiveSlide(index);
    }
  };

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
        py-12
        sm:px-8
        sm:py-16
        lg:px-10
        lg:py-20
      "
    >
      {/* Background Subtle Violet Ambient Nebula */}
      <div
        className={`
          hidden
          lg:block
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
        {/* Section Header */}
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
              duration-500
              delay-75
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
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
              text-[13px]
              leading-relaxed
              text-[#94A3B8]
              sm:text-[14px]
              transition-all
              duration-500
              delay-100
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
            `}
          >
            Explore HVTI&apos;s dual high-voltage facilities in Gurgaon—advancing
            dielectric testing, cutting-edge R&amp;D, and 800 kV equipment
            manufacturing.
          </p>
        </div>

        {/* Dual Facility Cards (Snap Carousel with Peek on Mobile / 2-Col Grid on Desktop) */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="
            mt-7
            sm:mt-9
            flex
            md:grid
            overflow-x-auto
            md:overflow-visible
            snap-x
            snap-mandatory
            gap-3.5
            md:gap-6
            pb-2
            md:pb-0
            px-5
            md:px-0
            -mx-5
            md:mx-0
            no-scrollbar
            md:grid-cols-2
          "
        >
          {/* ========================================================
              CARD 1: MANAGEMENT OFFICE
              ======================================================== */}
          <div
            ref={(el) => {
              itemRefs.current[0] = el;
            }}
            className="w-[82vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink flex"
          >
            <div
              className={`
                group
                relative
                flex
                w-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0A0F1D]/90
                p-3.5
                sm:p-5
                shadow-[0_12px_32px_rgba(0,0,0,0.6)]
                backdrop-blur-sm
                transition-all
                duration-500
                delay-100
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:border-[#A855F7]/40
                hover:bg-[#0A0F1D]
                hover:shadow-[0_0_30px_rgba(168,85,247,0.16)]
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
              `}
            >
              {/* Compact Photo Frame */}
              <div className="relative aspect-[16/9] md:aspect-[16/9.5] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#05070D]">
                <Image
                  src="/images/office/hvti-building-hero-hd.jpg"
                  alt="HVTI Management Office in Gurgaon"
                  fill
                  quality={90}
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 85vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-transparent opacity-60" />

                {/* Location Badge */}
                <div className="absolute bottom-2 left-2 rounded-full border border-white/[0.15] bg-[#05070D]/85 px-2.5 py-0.5 font-sans text-[9.5px] sm:text-[10.5px] font-medium text-[#CBD5E1] backdrop-blur-md">
                  📍 Sector 21, Gurgaon
                </div>
              </div>

              {/* Card Content */}
              <div className="mt-3.5 flex flex-1 flex-col justify-between sm:mt-4">
                <div>
                  <span className="font-mono text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#A855F7]">
                    Corporate HQ &amp; Operations
                  </span>
                  <h3 className="mt-0.5 font-heading text-[16px] sm:text-[19px] font-bold text-white">
                    Management Office
                  </h3>
                  <p className="mt-1 font-sans text-[11.5px] sm:text-[12.5px] leading-relaxed text-[#94A3B8] line-clamp-2 md:line-clamp-none">
                    Central nerve center for corporate strategy, executive leadership,
                    client operations, and sustainable 15 kW solar energy governance.
                  </p>
                </div>

                <div className="mt-3.5 pt-0.5 sm:mt-4 sm:pt-1">
                  <Link
                    href="/management-office"
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      font-sans
                      text-[11px]
                      sm:text-[12px]
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
          </div>

          {/* ========================================================
              CARD 2: LABORATORY FACILITIES
              ======================================================== */}
          <div
            ref={(el) => {
              itemRefs.current[1] = el;
            }}
            className="w-[82vw] max-w-[320px] shrink-0 snap-center md:w-auto md:max-w-none md:shrink flex"
          >
            <div
              className={`
                group
                relative
                flex
                w-full
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0A0F1D]/90
                p-3.5
                sm:p-5
                shadow-[0_12px_32px_rgba(0,0,0,0.6)]
                backdrop-blur-sm
                transition-all
                duration-500
                delay-150
                ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:border-[#A855F7]/40
                hover:bg-[#0A0F1D]
                hover:shadow-[0_0_30px_rgba(168,85,247,0.16)]
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
              `}
            >
              {/* Compact Photo Frame */}
              <div className="relative aspect-[16/9] md:aspect-[16/9.5] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#05070D]">
                <Image
                  src="/images/office/hvti-rd-workshop-hd.jpg"
                  alt="HVTI High-Voltage Laboratory Facilities in Udyog Vihar"
                  fill
                  quality={90}
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 85vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-transparent opacity-60" />

                {/* Scale & Voltage Badge */}
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                  <span className="rounded-full border border-[#F97316]/50 bg-[#F97316]/90 px-2 py-0.5 font-mono text-[8.5px] sm:text-[9.5px] font-bold text-white shadow-[0_0_10px_rgba(249,115,22,0.4)]">
                    15,000 SQ. FT.
                  </span>
                  <span className="rounded-full border border-white/[0.15] bg-[#05070D]/85 px-2 py-0.5 font-sans text-[9.5px] sm:text-[10.5px] font-medium text-[#CBD5E1] backdrop-blur-md">
                    📍 Udyog Vihar Ph 4
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="mt-3.5 flex flex-1 flex-col justify-between sm:mt-4">
                <div>
                  <span className="font-mono text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#A855F7]">
                    R&amp;D &amp; Manufacturing Up to 800 kV
                  </span>
                  <h3 className="mt-0.5 font-heading text-[16px] sm:text-[19px] font-bold text-white">
                    Laboratory Facilities
                  </h3>
                  <p className="mt-1 font-sans text-[11.5px] sm:text-[12.5px] leading-relaxed text-[#94A3B8] line-clamp-2 md:line-clamp-none">
                    State-of-the-art infrastructure with high-voltage testing bays,
                    dielectric measurement labs, and precision manufacturing up to 800 kV.
                  </p>
                </div>

                <div className="mt-3.5 pt-0.5 sm:mt-4 sm:pt-1">
                  <Link
                    href="/laboratory-facilities"
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      font-sans
                      text-[11px]
                      sm:text-[12px]
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

        {/* ========================================================
            MOBILE PAGINATION & CAROUSEL CONTROLS
            ======================================================== */}
        <div className="mt-3.5 flex items-center justify-between px-1 md:hidden">
          {/* Active Progress Dots */}
          <div className="flex items-center gap-1.5">
            {[0, 1].map((idx) => (
              <button
                key={`fac-dot-${idx}`}
                type="button"
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to facility ${idx + 1}`}
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    activeSlide === idx
                      ? "w-6 bg-gradient-to-r from-[#F97316] to-[#A855F7]"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }
                `}
              />
            ))}
          </div>

          {/* Swipe Hint & Arrow Controls */}
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[10px] font-semibold text-[#94A3B8]">
              {activeSlide === 0 ? (
                <span className="flex items-center gap-1 text-[#F97316]">
                  Swipe <span className="animate-pulse">→</span>
                </span>
              ) : (
                <span>02 / 02</span>
              )}
            </span>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => scrollToSlide(0)}
                disabled={activeSlide === 0}
                aria-label="Previous facility"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#0A0F1D] text-white transition-all disabled:opacity-25 disabled:pointer-events-none active:scale-95"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => scrollToSlide(1)}
                disabled={activeSlide === 1}
                aria-label="Next facility"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#0A0F1D] text-white transition-all disabled:opacity-25 disabled:pointer-events-none active:scale-95"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

