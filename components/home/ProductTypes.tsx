"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ================================================================
   HOME — PRODUCT TYPES & CATEGORIES SHOWCASE
   File: components/home/ProductTypes.tsx

   - Seamlessly integrated with the continuous procedural stardust canvas
   - Mobile: 0.8x scaled single-card viewport snap carousel with pagination
   - Desktop: 4-Card responsive grid with luxury glassmorphism & ambient hover aura
   - Calibrated 0.1 threshold for immediate, reliable entrance reveals
   - Smooth staggered vertical entrance choreography with spring easing
   ================================================================ */


const products = [
  {
    title: "Electrical Safety Equipment",
    tag: "LIVE-LINE PROTECTION",
    description:
      "Reliable safety equipment, insulated tools, and PPE engineered for live line working and personnel protection up to 800 kV.",
    image: "/images/products/product-safety.jpg",
    accent: "orange",
    href: "/products/electrical-safety",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="sm:h-[22px] sm:w-[22px]">
        <path d="M12 3L19 6V11C19 15.5 16.2 19.2 12 21C7.8 19.2 5 15.5 5 11V6L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M13 7L9.5 13H12L11.5 17L15 11H12.5L13 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Electrical Testing Equipment",
    tag: "SUBSTATION & APPARATUS",
    description:
      "Advanced precision testing solutions for substations, switchgears, power transformers, and circuit breaker diagnostics.",
    image: "/images/products/product-testing.jpg",
    accent: "purple",
    href: "/products/electrical-testing",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="sm:h-[22px] sm:w-[22px]">
        <path d="M3 12H6L8 6L11 18L14 8L16 14L18 11H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Condition Monitoring Systems",
    tag: "PREDICTIVE ASSET HEALTH",
    description:
      "Continuous online monitoring solutions, acoustic partial discharge sensors, and telemetry to detect anomalies before catastrophic failure.",
    image: "/images/products/product-monitoring.jpg",
    accent: "orange",
    href: "/products/condition-monitoring",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="sm:h-[22px] sm:w-[22px]">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 14L9.5 10L12 13L14.5 8L17 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 21H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Thermal & Imaging Systems",
    tag: "OPTICAL & INFRARED",
    description:
      "High-definition radiometric thermal cameras and optical inspection systems for non-contact thermal diagnostics and corona detection.",
    image: "/images/products/product-thermal.jpg",
    accent: "purple",
    href: "/products/thermal-imaging",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="sm:h-[22px] sm:w-[22px]">
        <rect x="7" y="3" width="10" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="17" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ProductTypes() {
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
      id="product-types"
      className="
        relative
        w-full
        overflow-hidden
        bg-transparent
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-10
        lg:py-24
      "
    >
      {/* Subtle Ambient Violet Glow Bloom */}
      <div
        className={`
          hidden
          lg:block
          pointer-events-none
          absolute
          left-1/2
          top-1/3
          h-[650px]
          w-[950px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.06),rgba(124,58,237,0.02)_50%,transparent_70%)]
          blur-[120px]
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
          max-w-[1400px]
        "
      >
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            {/* Eyebrow */}
            <div
              className={`
                flex
                items-center
                gap-2.5
                transition-all
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
              `}
            >
              <span
                className={`
                  h-[2px]
                  bg-[#F97316]
                  transition-all
                  duration-500
                  delay-75
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${isVisible ? "w-7 opacity-100" : "w-0 opacity-0"}
                `}
              />
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#F97316]">
                Product Categories &amp; Systems
              </span>
              <span
                className={`
                  h-[2px]
                  bg-[#F97316]
                  transition-all
                  duration-500
                  delay-75
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${isVisible ? "w-7 opacity-100" : "w-0 opacity-0"}
                `}
              />
            </div>

            {/* Heading */}
            <h2
              className={`
                mt-3
                font-heading
                text-[28px]
                font-bold
                tracking-[-0.025em]
                text-white
                drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]
                sm:text-[36px]
                lg:text-[42px]
                transition-all
                duration-600
                delay-75
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
              `}
            >
              <span>Solutions for Every</span>{" "}
              <span className="text-[#A855F7]">Critical Need</span>
            </h2>

            {/* Description */}
            <p
              className={`
                mt-2.5
                max-w-[660px]
                font-sans
                text-[14px]
                leading-relaxed
                text-[#94A3B8]
                sm:text-[15px]
                transition-all
                duration-600
                delay-100
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
              `}
            >
              Engineered and certified high-voltage safety equipment, automated testing apparatus,
              and real-time condition monitoring built for safety, reliability, and precision.
            </p>
          </div>

          {/* View All Products Capsule Button */}
          <div
            className={`
              mt-1
              sm:mt-0
              transition-all
              duration-500
              delay-150
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
            `}
          >
            <Link
              href="/products"
              className="
                group
                inline-flex
                h-[30px]
                sm:h-[34px]
                items-center
                gap-1.5
                rounded-full
                border
                border-white/[0.14]
                bg-[#0B101D]/90
                px-3.5
                sm:px-4
                font-sans
                text-[9.5px]
                sm:text-[10.5px]
                font-bold
                tracking-[0.06em]
                text-slate-200
                shadow-[0_2px_12px_rgba(0,0,0,0.4)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#A855F7]/70
                hover:bg-[#0E1526]
                hover:text-white
                hover:shadow-[0_0_16px_rgba(168,85,247,0.25)]
                active:scale-[0.97]
              "
            >
              <span>VIEW COMPLETE CATALOGUE</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                className="text-[#F97316] transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ========================================================
            4-CARD PRODUCT GRID (Mobile Snap Carousel with Peek)
            ======================================================== */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="
            mt-8
            sm:mt-12
            flex
            sm:grid
            overflow-x-auto
            sm:overflow-visible
            snap-x
            snap-mandatory
            gap-3.5
            sm:gap-6
            pb-2
            sm:pb-0
            px-5
            sm:px-0
            -mx-5
            sm:mx-0
            no-scrollbar
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {products.map((product, index) => {
            const isOrange = product.accent === "orange";
            const delayClass =
              index === 0
                ? "delay-[50ms]"
                : index === 1
                ? "delay-[100ms]"
                : index === 2
                ? "delay-[150ms]"
                : "delay-[200ms]";

            return (
              <div
                key={product.title}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className="w-[82vw] max-w-[310px] shrink-0 snap-center sm:w-auto sm:max-w-none sm:shrink flex"
              >
                <article
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
                    bg-[#0A0F1D]/85
                    shadow-[0_10px_32px_rgba(0,0,0,0.45)]
                    backdrop-blur-md
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    hover:-translate-y-2
                    hover:border-white/[0.18]
                    hover:shadow-[0_0_32px_rgba(168,85,247,0.18)]
                    ${delayClass}
                    ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                  `}
                >
                  {/* Product Image Area */}
                  <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full overflow-hidden bg-[#05070D]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1280px) 50vw, 25vw"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-[1.06]
                      "
                    />

                    {/* Gradient Scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/30 to-transparent" />

                    {/* Category Monospace Tag */}
                    <div className="absolute right-2.5 top-2.5 sm:right-3 sm:top-3 rounded-full border border-white/[0.12] bg-[#05070D]/85 px-2 py-0.5 sm:px-2.5 font-mono text-[8px] sm:text-[9.5px] font-semibold tracking-wider text-[#CBD5E1] backdrop-blur-md">
                      {product.tag}
                    </div>
                  </div>

                  {/* Overlapping Icon Badge */}
                  <div className="relative z-10 -mt-4 ml-4 sm:-mt-6 sm:ml-5 flex items-center justify-between pr-4 sm:pr-5">
                    <div
                      className={`
                        flex
                        h-[36px]
                        w-[36px]
                        sm:h-[46px]
                        sm:w-[46px]
                        items-center
                        justify-center
                        rounded-xl
                        border
                        bg-[#0A0F1D]
                        shadow-md
                        transition-all
                        duration-300
                        group-hover:scale-105
                        ${
                          isOrange
                            ? "border-[#F97316]/50 text-[#F97316] group-hover:border-[#F97316] group-hover:shadow-[0_0_18px_rgba(249,115,22,0.30)]"
                            : "border-[#A855F7]/50 text-[#A855F7] group-hover:border-[#A855F7] group-hover:shadow-[0_0_18px_rgba(168,85,247,0.30)]"
                        }
                      `}
                    >
                      {product.icon}
                    </div>

                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#64748B] group-hover:text-[#A855F7]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col justify-between p-3.5 pt-2 sm:p-5 sm:pt-3">
                    <div>
                      <h3 className="font-heading text-[15px] sm:text-[18px] font-bold leading-snug text-white transition-colors duration-200 group-hover:text-white">
                        {product.title}
                      </h3>

                      {/* Accent Indicator */}
                      <div
                        className={`
                          mt-1.5
                          sm:mt-2.5
                          h-[2px]
                          w-6
                          sm:w-7
                          transition-all
                          duration-300
                          group-hover:w-12
                          ${isOrange ? "bg-[#F97316]" : "bg-[#A855F7]"}
                        `}
                      />

                      <p className="mt-2 sm:mt-3 font-sans text-[11.5px] sm:text-[13px] leading-relaxed text-[#94A3B8] line-clamp-2 sm:line-clamp-none">
                        {product.description}
                      </p>
                    </div>

                    {/* Explore Link CTA */}
                    <Link
                      href={product.href}
                      className={`
                        group/link
                        mt-3.5
                        sm:mt-6
                        inline-flex
                        items-center
                        gap-1.5
                        sm:gap-2
                        font-sans
                        text-[11px]
                        sm:text-[12px]
                        font-bold
                        uppercase
                        tracking-wider
                        transition-colors
                        duration-200
                        ${
                          isOrange
                            ? "text-[#F97316] hover:text-[#FB923C]"
                            : "text-[#A855F7] hover:text-[#C084FC]"
                        }
                      `}
                    >
                      <span>EXPLORE CATEGORY</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        className="transition-transform duration-200 group-hover/link:translate-x-1.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>

                  {/* Subtle Hover Aura Line */}
                  <div
                    className={`
                      h-[2px]
                      w-full
                      transition-opacity
                      duration-300
                      ${isOrange ? "bg-[#F97316]" : "bg-[#A855F7]"}
                      opacity-0
                      group-hover:opacity-100
                    `}
                  />
                </article>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            MOBILE PAGINATION & CAROUSEL CONTROLS
            ======================================================== */}
        <div className="mt-3.5 flex items-center justify-between px-1 sm:hidden">
          {/* Active Dots */}
          <div className="flex items-center gap-1.5">
            {products.map((_, idx) => (
              <button
                key={`mob-dot-${idx}`}
                type="button"
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to product category ${idx + 1}`}
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

          {/* Navigation Controls & Counter */}
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[10px] font-semibold text-[#94A3B8]">
              {activeSlide < products.length - 1 ? (
                <span className="flex items-center gap-1 text-[#F97316]">
                  Swipe <span className="animate-pulse">→</span>
                </span>
              ) : (
                <span>04 / 04</span>
              )}
            </span>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
                disabled={activeSlide === 0}
                aria-label="Previous product"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#0A0F1D] text-white transition-all disabled:opacity-25 disabled:pointer-events-none active:scale-95"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => scrollToSlide(Math.min(products.length - 1, activeSlide + 1))}
                disabled={activeSlide === products.length - 1}
                aria-label="Next product"
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