"use client";

import React from "react";
import { ProductData } from "@/types/product";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ================================================================
   HVTI GAS DETECTION SPECIALIZED FEATURES & SPECS COMPONENT
   File: components/products/GasDetectionFeatures.tsx

   - 5-Card Key Features Grid
   - Clean 2-Column Technical Specifications Table
   - Typical Applications Grid with high-voltage industrial aesthetics
   ================================================================ */

export default function GasDetectionFeatures({ product }: { product: ProductData }) {
  const { ref: sectionRef, visible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="gas-detection-capabilities"
      className={`relative z-10 w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-[1360px]">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[#F97316]" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
              SPECIALIZED CAPABILITIES
            </span>
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Advanced Optical Gas Imaging Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {product.features?.map((feat, idx) => (
            <div
              key={idx}
              className="
                group
                relative
                rounded-2xl
                border
                border-white/[0.07]
                bg-[#0A0D16]/85
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-1.5
                hover:border-orange-500/30
                hover:bg-[#0E121E]
                hover:shadow-[0_12px_36px_rgba(249,115,22,0.08)]
                sm:p-7
              "
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 font-mono text-xs font-bold text-[#F97316]">
                0{idx + 1}
              </div>
              <h3 className="font-heading text-lg font-bold text-white sm:text-xl">{feat.title}</h3>
              <p className="mt-3 font-sans text-[13px] leading-relaxed text-slate-300 sm:text-sm">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
