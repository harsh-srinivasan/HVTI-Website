"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

/* ================================================================
   INLINE PRODUCT HIGHLIGHT CARD (EDITORIAL EMBED)
   File: components/blog/EquipmentHighlightCard.tsx
   ================================================================ */

export default function EquipmentHighlightCard() {
  return (
    <div
      className="
        my-10
        overflow-hidden
        rounded-2xl
        border
        border-[#A855F7]/35
        bg-gradient-to-br
        from-[#0A0F1D]
        via-[#05070D]
        to-[#0C1120]
        p-6
        shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(168,85,247,0.15)]
        backdrop-blur-md
        sm:p-8
      "
    >
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8">
        {/* Thumbnail Preview */}
        <div className="relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-xl border border-white/[0.12] bg-[#05070D] p-3 md:col-span-4">
          <Image
            src="/images/products/tp-s9-detector.jpg"
            alt="HVTI TP-S9 Hand-Held High Voltage Detector"
            fill
            className="object-contain p-2"
          />
        </div>

        {/* Specs & CTAs */}
        <div className="md:col-span-8">
          <div className="flex items-center gap-2 font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#F97316]">
            <span>FEATURED SAFETY INSTRUMENT</span>
          </div>

          <h4 className="mt-1 font-heading text-xl font-bold text-white sm:text-2xl">
            TP-S9 Hand-Held High Voltage Detector
          </h4>

          <p className="mt-2 font-sans text-[13px] leading-[1.65] text-[#CBD5E1]">
            Field-tested across Indian substations for non-contact live/dead testing from 240 V up to 510 kV (extendable to 765 kV).
          </p>

          {/* Quick Specs Grid */}
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            <div className="rounded-lg border border-white/[0.08] bg-[#05070D]/80 p-2.5 text-center">
              <span className="block font-mono text-[9.5px] uppercase text-[#94A3B8]">
                Voltage Rating
              </span>
              <span className="font-mono text-[12px] font-bold text-white">
                240 V – 765 kV
              </span>
            </div>

            <div className="rounded-lg border border-white/[0.08] bg-[#05070D]/80 p-2.5 text-center">
              <span className="block font-mono text-[9.5px] uppercase text-[#94A3B8]">
                Ingress Protection
              </span>
              <span className="font-mono text-[12px] font-bold text-[#F97316]">
                IP66 Heavy Duty
              </span>
            </div>

            <div className="col-span-2 rounded-lg border border-white/[0.08] bg-[#05070D]/80 p-2.5 text-center sm:col-span-1">
              <span className="block font-mono text-[9.5px] uppercase text-[#94A3B8]">
                Safety Standard
              </span>
              <span className="font-mono text-[12px] font-bold text-[#A855F7]">
                IEC 61243-1
              </span>
            </div>
          </div>

          {/* Link CTA */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/products/high-voltage-detector-tp-s9"
              className="inline-flex items-center gap-2 rounded-full border border-[#FB923C]/60 bg-gradient-to-r from-[#F97316] to-[#EA580C] px-5 py-2 font-sans text-[12px] font-bold text-white shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:scale-[1.02] transition-all"
            >
              <span>VIEW TECHNICAL DATASHEET</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-[#05070D] px-4 py-2 font-mono text-[11px] font-semibold text-[#CBD5E1] hover:border-white/30 hover:text-white transition-all"
            >
              REQUEST A DEMO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
