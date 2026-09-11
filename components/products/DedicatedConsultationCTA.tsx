"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductCTAData } from "@/types/product";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ================================================================
   HVTI DEDICATED CONSULTATION CTA COMPONENT
   File: components/products/DedicatedConsultationCTA.tsx

   - Dark glassmorphism banner card with glowing halo
   - Floating product image preview
   - Conversion buttons & trust badges
   ================================================================ */

export default function DedicatedConsultationCTA({
  cta,
  defaultTitle = "Not sure which system is right for your application?",
  defaultDescription = "Our high-voltage application engineering team can help you select the exact specifications and equipment architecture for your facility.",
  supportingImage = "/images/products/satir-hotfind-s.png",
}: {
  cta?: ProductCTAData;
  defaultTitle?: string;
  defaultDescription?: string;
  supportingImage?: string;
}) {
  const { ref: ctaRef, visible } = useScrollReveal({ threshold: 0.1 });

  const title = cta?.title || defaultTitle;
  const description = cta?.description || defaultDescription;
  const primaryText = cta?.primaryButtonText || "Talk to an Engineer";
  const primaryLink = cta?.primaryButtonLink || "/contact?subject=Engineering%20Consultation%20Inquiry";
  const secondaryText = cta?.secondaryButtonText || "Download Brochure";
  const secondaryLink = cta?.secondaryButtonLink || "/resources";
  const image = cta?.supportingImage || supportingImage;

  return (
    <section className="relative z-10 w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16 bg-transparent">
      <div
        ref={ctaRef}
        className={`mx-auto max-w-[1440px] transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/[0.08]
            bg-white/[0.02]
            p-8
            backdrop-blur-2xl
            shadow-[0_24px_60px_rgba(0,0,0,0.4)]
            sm:p-12
            lg:p-14
          "
        >
          {/* Internal Ambient Lights */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.12),transparent_70%)] blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-[350px] w-[350px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12),transparent_70%)] blur-[80px]" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
            {/* Left Column — Consultation Copy & Action Buttons */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[2px] w-6 bg-[#F97316]" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
                  ENGINEERING CONSULTATION
                </span>
              </div>

              <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                {title}
              </h2>

              <p className="mt-4 max-w-xl font-sans text-sm leading-relaxed text-slate-300 sm:text-base">
                {description}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={primaryLink}
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    justify-center
                    gap-2.5
                    rounded-full
                    bg-gradient-to-r
                    from-[#F97316]
                    to-[#EA580C]
                    px-8
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_0_20px_rgba(249,115,22,0.3)]
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]
                  "
                >
                  <span>{primaryText}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>

                <Link
                  href={secondaryLink}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.04]
                    px-7
                    py-3.5
                    text-sm
                    font-medium
                    text-slate-300
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-white/30
                    hover:bg-white/[0.08]
                    hover:text-white
                  "
                >
                  <svg className="h-4 w-4 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>{secondaryText}</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/[0.08] pt-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Expert Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Application Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>After-Sales Assistance</span>
                </div>
              </div>
            </div>

            {/* Right Column — Floating Product Image Frame */}
            {image && (
              <div className="relative flex items-center justify-center">
                <div className="relative h-56 w-full max-w-[320px] sm:h-64 lg:h-72">
                  <Image
                    src={image}
                    alt="HVTI Product Solution"
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
