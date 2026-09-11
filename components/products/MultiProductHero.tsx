"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ProductData } from "@/types/product";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ================================================================
   HVTI MULTI-PRODUCT HERO COMPONENT
   File: components/products/MultiProductHero.tsx

   - Dark architectural styling with deep ambient glow
   - Confident typography, 3-4 feature badges, and primary action CTA
   - Floating technical product imagery with atmospheric glow
   ================================================================ */

export default function MultiProductHero({
  product,
  breadcrumbCategory = "Electrical Testing Equipment",
  breadcrumbHref = "/viewall/electrical-testing-equipment",
  ctaText = "Talk to an Engineer",
  ctaLink = "/contact?subject=Product%20Inquiry",
}: {
  product: ProductData;
  breadcrumbCategory?: string;
  breadcrumbHref?: string;
  ctaText?: string;
  ctaLink?: string;
}) {
  const { ref: heroRef, visible: heroVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="relative z-10 w-full overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-36 xl:px-16">
      {/* Background Radial Ambient Glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12),transparent_70%)] blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.10),transparent_70%)] blur-[90px]" />

      <div
        ref={heroRef}
        className={`mx-auto max-w-[1440px] transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs text-slate-400">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span className="text-slate-600">/</span>
          <Link href="/products" className="transition-colors hover:text-white">
            Products
          </Link>
          <span className="text-slate-600">/</span>
          <Link href={breadcrumbHref} className="transition-colors hover:text-white">
            {breadcrumbCategory}
          </Link>
          <span className="text-slate-600">/</span>
          <span className="font-semibold text-[#F97316]">{product.title}</span>
        </nav>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-16">
          {/* Left Column — Text & CTAs */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-6 bg-[#F97316]" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F97316]">
                {product.category}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[44px] xl:text-[50px] xl:leading-[1.12]">
              {product.title}
            </h1>

            {/* Tagline / Subtitle */}
            {product.tagline && (
              <p className="mt-3 text-lg font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-purple-400 sm:text-xl">
                {product.tagline}
              </p>
            )}

            {/* Description */}
            <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-slate-300 sm:text-[17px]">
              {product.description}
            </p>

            {/* Bullet Badges Grid */}
            {product.highlights && product.highlights.length > 0 && (
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {product.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-[#F97316] ring-1 ring-orange-500/30">
                      <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2.5 6L5 8.5L9.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-200">{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={product.cta?.primaryButtonLink || ctaLink}
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  justify-center
                  gap-2.5
                  overflow-hidden
                  rounded-full
                  bg-gradient-to-r
                  from-[#F97316]
                  to-[#EA580C]
                  px-8
                  py-3.5
                  text-sm
                  font-bold
                  tracking-wide
                  text-white
                  shadow-[0_0_24px_rgba(249,115,22,0.35)]
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-[0_0_35px_rgba(249,115,22,0.55)]
                "
              >
                <span>{product.cta?.primaryButtonText || ctaText}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              <Link
                href="#comparison-table"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.03]
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
                <span>View Range</span>
                <span className="text-slate-400">↓</span>
              </Link>
            </div>
          </div>

          {/* Right Column — Floating Product Visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Ambient Technical Halo */}
            <div className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.18)_0%,rgba(168,85,247,0.12)_50%,transparent_70%)] blur-[40px] sm:h-[400px] sm:w-[400px]" />

            {/* Glowing Backdrop Plate */}
            <div className="relative flex h-[340px] w-full max-w-[460px] items-center justify-center rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-6 backdrop-blur-xl sm:h-[420px] lg:h-[460px]">
              {product.image && (
                <div className="relative h-full w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 460px"
                    className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)] transition-transform duration-700 hover:scale-[1.03]"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
