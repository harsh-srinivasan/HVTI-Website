"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT CTA & CONVERSION SYSTEM — COMPACT
   File: components/products/ProductCTA.tsx
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

function ArrowRightIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function ProductCTA({
  product,
}: {
  product: ProductData;
}) {
  const { ref, visible } = useReveal(0.2);

  const ctaData = product.cta;
  const title = ctaData?.title || "Need the right solution for your application?";
  const description =
    ctaData?.description ||
    `Our engineering team will help you select the ideal ${product.title || "high-voltage testing"} kit.`;
  const primaryText = ctaData?.primaryButtonText || "Talk to an Engineer";
  const primaryLink = ctaData?.primaryButtonLink || "/contact";
  const secondaryText = ctaData?.secondaryButtonText || "Download Brochure";
  const secondaryLink = ctaData?.secondaryButtonLink || product.brochure || "#";
  const supportingImage = ctaData?.supportingImage;

  return (
    <section
      id="cta"
      className="
        relative
        w-full
        overflow-hidden
        bg-transparent
        pb-12
        pt-8
        sm:pb-16
        sm:pt-10
      "
    >
      <div className="relative z-10 mx-auto w-full max-w-[960px] px-6 sm:px-10 lg:px-12">
        <div
          ref={ref}
          className={`
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.12]
            bg-[#080D1A]/90
            p-6
            shadow-[0_16px_40px_rgba(0,0,0,0.6)]
            backdrop-blur-xl
            transition-all
            duration-[1800ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            sm:p-8
            lg:p-9
            ${visible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-[0.98]"}
          `}
        >
          {/* Ambient Glow Orbs */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-[220px] w-[220px] rounded-full bg-[#7C3AED]/15 blur-[70px]" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-[220px] w-[220px] rounded-full bg-[#F97316]/10 blur-[70px]" />

          <div
            className={`
              relative
              z-10
              flex
              flex-col
              gap-6
              ${
                supportingImage
                  ? "lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-center"
                  : "lg:flex-row lg:items-center lg:justify-between"
              }
            `}
          >
            {/* Left Content */}
            <div className="max-w-[560px]">
              <div className="mb-2 flex items-center gap-2">
                <span
                  className={`
                    h-[1.5px]
                    bg-[#F97316]
                    transition-all
                    duration-[1600ms]
                    delay-[200ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${visible ? "w-5" : "w-0"}
                  `}
                />
                <span className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#F97316]">
                  Engineering Consultation
                </span>
              </div>

              <h2
                className="
                  font-heading
                  text-lg
                  font-bold
                  tracking-[-0.02em]
                  text-white
                  sm:text-xl
                  lg:text-[23px]
                "
              >
                {title}
              </h2>

              <p className="mt-2 font-sans text-[12.5px] leading-[1.6] text-[#CBD5E1] sm:text-[13.5px]">
                {description}
              </p>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href={primaryLink}
                  className="
                    group
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
                    font-semibold
                    tracking-[0.04em]
                    text-white
                    shadow-[0_0_15px_rgba(249,115,22,0.25)]
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:border-[#FB923C]
                    hover:shadow-[0_0_25px_rgba(249,115,22,0.45)]
                  "
                >
                  <span>{primaryText}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRightIcon />
                  </span>
                </Link>

                {secondaryText && secondaryLink && (
                  <Link
                    href={secondaryLink}
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
                      font-medium
                      text-[#CBD5E1]
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:border-[#A855F7]/60
                      hover:bg-[#0A0F1D]
                      hover:text-white
                    "
                  >
                    <span>{secondaryText}</span>
                  </Link>
                )}
              </div>
            </div>

            {/* Optional Supporting Product Render Image */}
            {supportingImage && (
              <div className="relative mx-auto aspect-[4/3] w-full max-w-[280px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#05070D]/60 p-3 lg:max-w-none">
                <Image
                  src={supportingImage}
                  alt={title}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>

          {/* Quick SLA / Compliance Badges */}
          <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-white/[0.06] pt-3 sm:gap-6">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#94A3B8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
              <span>4-Hour Quote Response SLA</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#94A3B8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
              <span>Direct R&amp;D Engineer Assignment</span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#94A3B8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
              <span>Custom Voltage &amp; Current Calibration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}