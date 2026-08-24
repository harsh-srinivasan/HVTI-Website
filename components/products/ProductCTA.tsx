"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT CTA & CONVERSION SYSTEM
   File: components/products/ProductCTA.tsx

   High-impact bottom conversion module.
   Adapts cleanly whether supporting imagery is present or absent.
   ================================================================ */

function useReveal(threshold = 0.25) {
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
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
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
}: {
  product: ProductData;
}) {
  const { ref, visible } = useReveal();

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
        pb-24
        pt-16
        sm:pb-32
        sm:pt-20
      "
    >
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-12">
        <div
          ref={ref}
          className={`
            relative
            overflow-hidden
            rounded-[16px]
            border
            border-white/[0.12]
            bg-[#080D1A]/90
            p-8
            shadow-[0_24px_64px_rgba(0,0,0,0.5)]
            backdrop-blur-xl
            transition-all
            duration-[1200ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            sm:p-12
            lg:p-16
            ${visible ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"}
          `}
        >
          {/* Ambient Glow Orbs */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-[#7C3AED]/15 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full bg-[#F97316]/10 blur-[100px]" />

          <div
            className={`
              relative
              z-10
              flex
              flex-col
              gap-8
              ${
                supportingImage
                  ? "lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-center"
                  : "lg:flex-row lg:items-center lg:justify-between"
              }
            `}
          >
            {/* Left Content */}
            <div className="max-w-[620px]">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#F97316]" />
                <span className="font-sans text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#F97316]">
                  Engineering Consultation
                </span>
              </div>

              <h2
                className="
                  font-heading
                  text-[28px]
                  font-bold
                  leading-[1.12]
                  tracking-[-0.02em]
                  text-white
                  sm:text-[34px]
                  xl:text-[38px]
                "
              >
                {title}
              </h2>

              <p className="mt-4 font-sans text-[16px] leading-relaxed text-[#CBD5E1] sm:text-[17px]">
                {description}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href={primaryLink}
                  className="
                    group
                    inline-flex
                    h-[54px]
                    items-center
                    justify-center
                    gap-3
                    rounded-[8px]
                    bg-[#F97316]
                    px-8
                    font-sans
                    text-[12.5px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-white
                    shadow-[0_4px_24px_rgba(249,115,22,0.3)]
                    transition-all
                    duration-200
                    hover:bg-[#FB923C]
                    hover:shadow-[0_0_36px_rgba(249,115,22,0.4)]
                  "
                >
                  <span>{primaryText}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>

                <Link
                  href={secondaryLink}
                  className="
                    inline-flex
                    items-center
                    gap-2.5
                    rounded-[8px]
                    border
                    border-white/[0.15]
                    bg-white/[0.04]
                    px-6
                    py-3.5
                    font-sans
                    text-[12.5px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#A855F7]
                    transition-all
                    duration-200
                    hover:border-[#A855F7]
                    hover:bg-[#A855F7]/10
                    hover:text-[#C084FC]
                  "
                >
                  <span>{secondaryText}</span>
                  <DownloadIcon />
                </Link>
              </div>
            </div>

            {/* Right Supporting Image (Rendered only when real asset exists) */}
            {supportingImage && (
              <div className="relative min-h-[280px] overflow-hidden rounded-[12px] border border-white/10 lg:min-h-[340px]">
                <Image
                  src={supportingImage}
                  alt={title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}