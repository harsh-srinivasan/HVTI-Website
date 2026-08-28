"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ================================================================
   HOME — PRODUCT TYPES & CATEGORIES SHOWCASE
   File: components/home/ProductTypes.tsx

   - Seamlessly integrated with the continuous procedural stardust canvas
   - 4-Card responsive grid with luxury glassmorphism & ambient hover aura
   - Calibrated 0.25 threshold for natural, immediate entrance reveals
   - Smooth 1800ms staggered vertical entrance choreography
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="7" y="3" width="10" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="17" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ProductTypes() {
  const { ref: sectionRef, visible: isVisible } = useReveal(0.2);

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
                duration-[1600ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
              `}
            >
              <span
                className={`
                  h-[2px]
                  bg-[#F97316]
                  transition-all
                  duration-[1400ms]
                  delay-[150ms]
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
                  duration-[1400ms]
                  delay-[150ms]
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
                duration-[1800ms]
                delay-[100ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
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
                duration-[1800ms]
                delay-[220ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
              `}
            >
              Engineered and certified high-voltage safety equipment, automated testing apparatus,
              and real-time condition monitoring built for safety, reliability, and precision.
            </p>
          </div>

          {/* View All Products Capsule Button */}
          <div
            className={`
              transition-all
              duration-[1800ms]
              delay-[300ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
            `}
          >
            <Link
              href="/products"
              className="
                group
                inline-flex
                h-[46px]
                items-center
                gap-2.5
                rounded-full
                border
                border-white/[0.14]
                bg-[#0A0F1D]/80
                px-6
                font-sans
                text-[12px]
                font-bold
                tracking-wide
                text-white
                shadow-[0_4px_18px_rgba(0,0,0,0.4)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#A855F7]/60
                hover:bg-[#0A0F1D]
                hover:shadow-[0_0_24px_rgba(168,85,247,0.25)]
                hover:scale-[1.02]
                active:scale-[0.98]
              "
            >
              <span>VIEW COMPLETE CATALOGUE</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ========================================================
            4-CARD PRODUCT GRID (1800ms Staggered Reveals)
            ======================================================== */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => {
            const isOrange = product.accent === "orange";
            const delayClass =
              index === 0
                ? "delay-[250ms]"
                : index === 1
                ? "delay-[400ms]"
                : index === 2
                ? "delay-[550ms]"
                : "delay-[700ms]";

            return (
              <article
                key={product.title}
                className={`
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-[#0A0F1D]/85
                  shadow-[0_12px_36px_rgba(0,0,0,0.45)]
                  backdrop-blur-md
                  transition-all
                  duration-[1800ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:-translate-y-2
                  hover:border-white/[0.18]
                  hover:shadow-[0_0_32px_rgba(168,85,247,0.18)]
                  ${delayClass}
                  ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
                `}
              >
                {/* Product Image Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#05070D]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
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
                  <div className="absolute right-3 top-3 rounded-full border border-white/[0.12] bg-[#05070D]/80 px-2.5 py-0.5 font-mono text-[9.5px] font-semibold tracking-wider text-[#CBD5E1] backdrop-blur-md">
                    {product.tag}
                  </div>
                </div>

                {/* Overlapping Icon Badge */}
                <div className="relative z-10 -mt-6 ml-5 flex items-center justify-between pr-5">
                  <div
                    className={`
                      flex
                      h-[46px]
                      w-[46px]
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

                  <span className="font-mono text-[11px] font-bold text-[#64748B] group-hover:text-[#A855F7]">
                    0{index + 1}
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-5 pt-3">
                  <div>
                    <h3 className="font-heading text-[18px] font-bold leading-snug text-white transition-colors duration-200 group-hover:text-white sm:text-[19px]">
                      {product.title}
                    </h3>

                    {/* Accent Indicator */}
                    <div
                      className={`
                        mt-2.5
                        h-[2px]
                        w-7
                        transition-all
                        duration-300
                        group-hover:w-12
                        ${isOrange ? "bg-[#F97316]" : "bg-[#A855F7]"}
                      `}
                    />

                    <p className="mt-3 font-sans text-[13px] leading-relaxed text-[#94A3B8]">
                      {product.description}
                    </p>
                  </div>

                  {/* Explore Link CTA */}
                  <Link
                    href={product.href}
                    className={`
                      group/link
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      font-sans
                      text-[12px]
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
                      width="13"
                      height="13"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}