"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductData, ProductVariant } from "@/types/product";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CategoryProductRangeProps {
  product?: ProductData;
  products?: ProductVariant[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export default function CategoryProductRange({
  product,
  products,
  eyebrow,
  title,
  subtitle,
}: CategoryProductRangeProps) {
  const { ref: sectionRef, visible } = useScrollReveal({ threshold: 0.1 });

  // Normalize items from products prop or product.variants or product.productVariants
  const rawItems = products || product?.variants || product?.productVariants || [];
  
  if (rawItems.length === 0) return null;

  const displayEyebrow = eyebrow || product?.rangeEyebrow || "OUR PRODUCT RANGE";
  const displayTitle = title || product?.rangeHeading || "Choose the right system for your application.";

  return (
    <section id="our-range" className="relative z-10 w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 bg-transparent">
      <div
        ref={sectionRef}
        className={`mx-auto max-w-[1360px] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="mb-2.5 flex items-center gap-3">
            <span className="h-[2px] w-6 bg-[#F97316]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#F97316]">
              {displayEyebrow}
            </span>
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            {displayTitle}
          </h2>
          {subtitle && (
            <p className="mt-2.5 text-sm text-gray-400 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Product Cards Grid */}
        <div
          className={`grid grid-cols-1 gap-6 sm:gap-8 ${
            rawItems.length === 2
              ? "md:grid-cols-2"
              : rawItems.length === 3
              ? "md:grid-cols-2 lg:grid-cols-3"
              : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
        >
          {rawItems.map((variant: any, idx: number) => {
            const id = variant.id || `variant-${idx}`;
            const bullets: string[] = variant.highlights || variant.bulletPoints || [];
            const ctaUrl = variant.productUrl || variant.ctaLink || "#technical-specifications";

            return (
              <div
                key={id}
                className="
                  group
                  relative
                  flex
                  flex-col
                  justify-between
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  p-4
                  sm:p-5
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#F97316]/40
                  hover:bg-white/[0.04]
                  hover:shadow-[0_12px_32px_rgba(249,115,22,0.12)]
                "
              >
                <div>
                  {/* Top Badge */}
                  {variant.badge && (
                    <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 font-mono text-[9.5px] font-bold text-[#F97316]">
                      <span>●</span>
                      <span>{variant.badge}</span>
                    </div>
                  )}

                  {/* Product Title */}
                  <h3 className="font-heading text-lg font-bold text-white sm:text-xl group-hover:text-orange-300 transition-colors leading-snug">
                    {variant.name}
                  </h3>
                  {variant.subtitle && (
                    <p className="mt-0.5 font-sans text-xs font-medium text-slate-300">
                      {variant.subtitle}
                    </p>
                  )}

                  {/* Product Featured Image Frame */}
                  <div className="relative my-3.5 flex h-32 w-full items-center justify-center rounded-xl border border-white/[0.05] bg-gradient-to-b from-white/[0.03] to-transparent p-2 sm:h-36">
                    {variant.image ? (
                      <Image
                        src={variant.image}
                        alt={variant.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <span className="text-xs font-mono text-gray-500">HVTI EQUIPMENT</span>
                    )}
                  </div>

                  {/* Description */}
                  {variant.description && (
                    <p className="mb-3 font-sans text-xs leading-relaxed text-slate-300 line-clamp-2">
                      {variant.description}
                    </p>
                  )}

                  {/* Key Bullets with Checkmarks */}
                  {bullets.length > 0 && (
                    <ul className="mb-4 space-y-1.5 font-sans text-xs text-slate-200">
                      {bullets.map((bp: string, bpIdx: number) => (
                        <li key={bpIdx} className="flex items-start gap-2">
                          <svg
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F97316]"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="leading-snug">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* View Details CTA */}
                <div className="mt-1 pt-3 border-t border-white/[0.06]">
                  <Link
                    href={ctaUrl}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      font-mono
                      text-[11.5px]
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
