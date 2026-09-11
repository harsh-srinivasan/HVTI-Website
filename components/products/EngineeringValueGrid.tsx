"use client";

import React from "react";
import { ProductBenefit } from "@/types/product";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ================================================================
   HVTI "WHY HVTI" VALUE GRID COMPONENT
   File: components/products/EngineeringValueGrid.tsx

   - 4-Card restrained value proposition grid
   - Clean numbered typography with subtle orange/purple accents
   ================================================================ */

export default function EngineeringValueGrid({
  benefits,
  eyebrow = "WHY HVTI",
  heading = "A trusted partner for electrical testing solutions.",
}: {
  benefits?: ProductBenefit[];
  eyebrow?: string;
  heading?: string;
}) {
  const { ref: sectionRef, visible } = useScrollReveal({ threshold: 0.1 });

  const defaultBenefits: ProductBenefit[] = [
    {
      id: "expert-guidance",
      title: "Expert Guidance",
      description: "Get the right technical specification and solution architecture tailored specifically to your testing requirements.",
    },
    {
      id: "reliable-products",
      title: "Reliable Products",
      description: "Proven technology from world-class manufacturers with calibrated precision, zero compromise, and robust testing.",
    },
    {
      id: "application-support",
      title: "Application Support",
      description: "From system selection and commissioning to on-site testing workflows and desktop reporting software.",
    },
    {
      id: "long-term-partnership",
      title: "Long-Term Partnership",
      description: "Committed to your long-term success with lifetime technical support, warranty assurance, and calibration servicing.",
    },
  ];

  const items = benefits && benefits.length > 0 ? benefits : defaultBenefits;

  return (
    <section className="relative z-10 w-full px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
      <div
        ref={sectionRef}
        className={`mx-auto max-w-[1440px] transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[#F97316]" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {heading}
          </h2>
        </div>

        {/* 4-Card Value Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div
              key={item.id || idx}
              className="
                group
                relative
                flex
                flex-col
                justify-between
                rounded-2xl
                border
                border-white/[0.07]
                bg-[#0A0D16]/80
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
              <div>
                {/* Index Code */}
                <div className="mb-5 flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#F97316]">
                    0{idx + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500/40" />
                </div>

                <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 font-sans text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
