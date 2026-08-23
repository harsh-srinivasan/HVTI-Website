"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ================================================================
   PRODUCT CTA & CONVERSION BANNER
   File: components/products/ProductCTA.tsx

   Unified high-impact bottom conversion module matching the
   visual reference image.
   ================================================================ */

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.55,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return {
    ref,
    visible,
  };
}

function ArrowIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3V15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 11L12 16L17 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 20H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function ProductCTA({
  product,
  layout = "all",
}: {
  product: any;
  layout?: "desktop" | "mobile" | "all";
}) {
  const { ref, visible } = useReveal();

  return (
    <section
      id="documents"
      className="
        relative
        overflow-hidden
        border-b
        border-white/[0.08]
        bg-transparent
      "
    >
      {/* Subtle purple atmospheric light (Left side) */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_20%_45%,rgba(168,85,247,0.038),transparent_60%)]
        "
      />

      {/* Subtle warm orange atmospheric light near CTA (Right side) */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_80%_60%,rgba(249,115,22,0.028),transparent_55%)]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1280px]
          px-5
          py-14
          sm:px-8
          sm:py-16
          lg:px-10
          lg:py-18
          xl:px-12
        "
      >
        <div
          ref={ref}
          className={`
            relative
            overflow-hidden
            rounded-[14px]
            border
            border-white/[0.09]
            bg-[#080D17]
            px-6
            py-8
            sm:px-10
            sm:py-10
            lg:px-12
            lg:py-12

            transition-all
            duration-[1200ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            motion-reduce:transition-none
            motion-reduce:transform-none
            motion-reduce:opacity-100

            hover:border-[#8B5CF6]/40
            hover:shadow-[0_16px_48px_rgba(124,58,237,0.12)]

            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-[24px] opacity-0"
            }
          `}
        >
          {/* Subtle Ambient Purple Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -left-20
              -top-20
              h-[260px]
              w-[260px]
              rounded-full
              bg-[#7C3AED]/12
              blur-[90px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-20
              -right-20
              h-[260px]
              w-[260px]
              rounded-full
              bg-[#F97316]/[0.06]
              blur-[90px]
            "
          />

          {/* Registration Mark */}
          <div className="pointer-events-none absolute right-4 top-3 font-mono text-[9px] text-white/20">
            +
          </div>

          {/* Conversion Content Layout */}
          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* Left: Solution Inquiry */}
            <div className="max-w-[460px]">
              <h2
                className="
                  font-heading
                  text-[24px]
                  font-semibold
                  leading-snug
                  tracking-[-0.02em]
                  text-white
                  sm:text-[27px]
                  xl:text-[28px]
                "
              >
                Need the right solution for your application?
              </h2>

              <p
                className="
                  mt-2
                  font-sans
                  text-[15px]
                  leading-relaxed
                  text-[#CBD5E1]
                "
              >
                Our engineering team will help you select the ideal HV AC testing kit.
              </p>
            </div>

            {/* Center: Talk to Engineer Primary Action */}
            <div className="flex shrink-0 items-center">
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  h-[52px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-[6px]
                  bg-[#F97316]
                  px-8
                  font-sans
                  text-[12.5px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#FB923C]
                  hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]
                  sm:w-auto
                "
              >
                <span>Talk to an Engineer</span>

                <span
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                >
                  <ArrowIcon />
                </span>
              </Link>
            </div>

            {/* Right: Download Brochure Action */}
            <div
              className="
                flex
                flex-col
                justify-center
                border-t
                border-white/[0.08]
                pt-6
                lg:border-l
                lg:border-t-0
                lg:pl-10
                lg:pt-0
              "
            >
              <Link
                href={product.brochure || "#"}
                aria-label="Download product brochure"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  font-sans
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-[#A855F7]
                  transition-colors
                  duration-200
                  hover:text-[#C084FC]
                "
              >
                <span>Download Brochure</span>

                <span
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-y-0.5
                  "
                >
                  <DownloadIcon />
                </span>
              </Link>

              <p
                className="
                  mt-1.5
                  max-w-[220px]
                  font-sans
                  text-[13px]
                  leading-normal
                  text-[#94A3B8]
                "
              >
                Get detailed product information and specifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}