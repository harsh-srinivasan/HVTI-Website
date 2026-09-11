"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductData } from "@/types/product";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ================================================================
   HVTI PRODUCT RANGE SELECTOR COMPONENT (VIEWPORT OPTIMIZED)
   File: components/products/ProductRangeSelector.tsx

   - Designed to fit gracefully within a single desktop viewport
   - Compact, restrained card sizing with authentic product thumbnails
   - Crisp typography and sleek hover micro-interactions
   ================================================================ */

export default function ProductRangeSelector({ product }: { product: ProductData }) {
  const { ref: sectionRef, visible } = useScrollReveal({ threshold: 0.1 });

  const hasRangeGroups = product.rangeGroups && product.rangeGroups.length > 0;
  const hasVariants = product.productVariants && product.productVariants.length > 0;

  if (!hasRangeGroups && !hasVariants) return null;

  return (
    <section id="our-range" className="relative z-10 w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
      <div
        ref={sectionRef}
        className={`mx-auto max-w-[1360px] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {/* Section Header */}
        <div className="mb-8 max-w-3xl">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[#F97316]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#F97316]">
              {product.rangeEyebrow || "OUR RANGE"}
            </span>
          </div>
          <h2 className="font-heading text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
            {product.rangeHeading || "Choose the right system for your application."}
          </h2>
        </div>

        {/* Pattern A: Range Groups (01 Portable / 02 Professional / 03 Advanced) */}
        {hasRangeGroups && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {product.rangeGroups!.map((group, idx) => (
              <div
                key={idx}
                className="
                  group
                  relative
                  flex
                  flex-col
                  justify-between
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-[#0A0D16]/90
                  p-5
                  backdrop-blur-xl
                  transition-all
                  duration-400
                  hover:-translate-y-1
                  hover:border-[#F97316]/40
                  hover:shadow-[0_10px_30px_rgba(249,115,22,0.10)]
                  sm:p-6
                "
              >
                <div>
                  {/* Number & Title */}
                  <div className="mb-3 flex items-baseline justify-between border-b border-white/[0.06] pb-3">
                    <span className="font-mono text-xl font-extrabold text-[#F97316] sm:text-2xl">
                      {group.index}
                    </span>
                    <h3 className="font-heading text-base font-bold text-white sm:text-lg">
                      {group.title}
                    </h3>
                  </div>

                  {group.description && (
                    <p className="mb-4 font-sans text-[13px] leading-relaxed text-slate-200">
                      {group.description}
                    </p>
                  )}

                  {/* Product Compact Thumbnails */}
                  <div
                    className={`my-3 grid gap-3 ${
                      group.products.length === 1
                        ? "grid-cols-1"
                        : group.products.length === 2
                        ? "grid-cols-2"
                        : "grid-cols-3"
                    }`}
                  >
                    {group.products.map((p, pIdx) => (
                      <div
                        key={pIdx}
                        className="
                          flex
                          flex-col
                          items-center
                          rounded-xl
                          border
                          border-white/[0.05]
                          bg-white/[0.02]
                          p-2.5
                          text-center
                          transition-colors
                          group-hover:border-white/10
                        "
                      >
                        <div className="relative mb-1.5 h-15 w-full sm:h-18">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            sizes="120px"
                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <span className="font-heading text-[12.5px] font-bold text-white sm:text-[13px]">{p.name}</span>
                        {p.tag && <span className="font-mono text-[10px] font-medium text-[#F97316]">{p.tag}</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-3 pt-3 border-t border-white/[0.06]">
                  <Link
                    href={group.ctaLink || "#comparison-table"}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      font-mono
                      text-[12px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#F97316]
                      transition-colors
                      hover:text-orange-400
                    "
                  >
                    <span>{group.ctaText || "View Details"}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pattern B: Dedicated Variant Cards (NV618S/NV618W, CoroCAM 6D/7/8, Surveillance) */}
        {hasVariants && (
          <div
            className={`grid grid-cols-1 gap-5 ${
              product.productVariants!.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {product.productVariants!.map((variant) => (
              <div
                key={variant.id}
                className="
                  group
                  relative
                  flex
                  flex-col
                  justify-between
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-[#0A0D16]/90
                  p-5
                  backdrop-blur-xl
                  transition-all
                  duration-400
                  hover:-translate-y-1
                  hover:border-[#F97316]/40
                  hover:shadow-[0_10px_30px_rgba(249,115,22,0.10)]
                  sm:p-6
                "
              >
                <div>
                  {/* Top Badge */}
                  {variant.badge && (
                    <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 font-mono text-[10.5px] font-bold text-[#F97316]">
                      <span>●</span>
                      <span>{variant.badge}</span>
                    </div>
                  )}

                  {/* Product Title */}
                  <h3 className="font-heading text-xl font-bold text-white sm:text-[22px]">
                    {variant.name}
                  </h3>
                  {variant.subtitle && (
                    <p className="mt-0.5 font-sans text-[13px] font-medium text-slate-300">
                      {variant.subtitle}
                    </p>
                  )}

                  {/* Product Featured Image Frame */}
                  <div className="relative my-3.5 flex h-36 w-full items-center justify-center rounded-xl border border-white/[0.05] bg-gradient-to-b from-white/[0.02] to-transparent p-2 sm:h-40">
                    <Image
                      src={variant.image}
                      alt={variant.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)] transition-transform duration-400 group-hover:scale-105"
                    />
                  </div>

                  {/* Description */}
                  {variant.description && (
                    <p className="mb-3 font-sans text-[13px] leading-relaxed text-slate-200 line-clamp-2">
                      {variant.description}
                    </p>
                  )}

                  {/* Key Bullets */}
                  {variant.bulletPoints && variant.bulletPoints.length > 0 && (
                    <ul className="mb-3.5 space-y-1.5 font-sans text-[13px] text-slate-200">
                      {variant.bulletPoints.slice(0, 3).map((bp, bpIdx) => (
                        <li key={bpIdx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F97316]" />
                          <span className="line-clamp-1">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* View Details CTA */}
                <div className="mt-2 pt-3 border-t border-white/[0.06]">
                  <Link
                    href={variant.ctaLink || "#comparison-table"}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      font-mono
                      text-[12px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#F97316]
                      transition-colors
                      hover:text-orange-400
                    "
                  >
                    <span>{variant.ctaText || "View Details"}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
