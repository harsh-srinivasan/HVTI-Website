"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { CategoryData } from "@/types/category";

/* ================================================================
   VIEW ALL — FULL VIEWPORT 2-COLUMN CATEGORY HERO
   File: components/viewAll/hero.tsx

   - Occupies the COMPLETE 100vh viewport height
   - Left Side: Confident typography, description & category switcher tabs
   - Right Side: High-voltage featured engineering photo frame
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

const allCategories = [
  { label: "Testing Equipment", slug: "electrical-testing-equipment", href: "/viewall/electrical-testing-equipment" },
  { label: "Safety Equipment", slug: "electrical-safety-equipment", href: "/viewall/electrical-safety-equipment" },
  { label: "Condition Monitoring", slug: "condition-monitoring", href: "/viewall/condition-monitoring" },
  { label: "Cameras & Imaging", slug: "cameras-and-imaging-systems", href: "/viewall/cameras-and-imaging-systems" },
];

export default function Hero({ category }: { category: CategoryData }) {
  const { ref: heroRef, visible: heroVisible } = useReveal(0.15);
  const heroImg = category.heroImage || "/images/products/product-testing.jpg";

  return (
    <section
      id="category-hero"
      className="
        relative
        z-10
        flex
        min-h-screen
        w-full
        items-center
        overflow-hidden
        px-6
        pb-12
        pt-[90px]
        sm:px-10
        sm:pb-16
        sm:pt-[100px]
        lg:px-14
        lg:pb-16
        lg:pt-[110px]
        xl:px-20
      "
    >
      <div
        ref={heroRef}
        className="
          mx-auto
          grid
          w-full
          max-w-[1540px]
          grid-cols-1
          items-center
          gap-10
          lg:grid-cols-[1.1fr_0.9fr]
          lg:gap-14
          xl:gap-16
        "
      >
        {/* =====================================================
            LEFT SIDE — HERO TEXT
            ===================================================== */}
        <div
          className={`
            w-full
            max-w-[760px]
            transition-all
            duration-[1800ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
          `}
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3.5">
            <span
              className={`
                h-[2px]
                shrink-0
                bg-[#F97316]
                transition-all
                duration-[1600ms]
                delay-[200ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${heroVisible ? "w-8 sm:w-10" : "w-0"}
              `}
            />
            <span className="font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-[#F97316] sm:text-[13px]">
              {category.eyebrow}
            </span>
          </div>

          {/* Main Hero Heading */}
          <h1
            className="
              font-heading
              text-3xl
              font-bold
              leading-[1.05]
              tracking-[-0.035em]
              text-white
              drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]
              sm:text-4xl
              md:text-[48px]
              lg:text-[54px]
              xl:text-[60px]
            "
          >
            <span>{category.title.split(" ")[0]}</span>{" "}
            <span className="text-[#A855F7]">
              {category.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          {/* Hero Description */}
          <p className="mt-5 max-w-[660px] font-sans text-base leading-[1.65] text-[#CBD5E1] sm:text-lg lg:text-[18px]">
            {category.description}
          </p>

          {/* Supporting Statement */}
          <div className="mt-6 flex items-center gap-3 font-sans text-sm font-medium text-[#CBD5E1]/90 sm:text-[15px]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#F97316] shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
            <span>Test. Monitor. Protect. Perform with complete confidence.</span>
          </div>

          {/* Divider */}
          <div className="mt-7 h-px w-[260px] bg-gradient-to-r from-white/30 via-[#A855F7]/40 to-transparent sm:mt-8" />

          {/* Category Quick Navigation Tabs */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {allCategories.map((cat) => {
              const isActive = cat.slug === category.slug;
              return (
                <Link
                  key={cat.slug}
                  href={cat.href}
                  className={`
                    rounded-full
                    px-4
                    py-1.5
                    font-sans
                    text-[12px]
                    font-semibold
                    tracking-wide
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "border border-[#F97316]/60 bg-[#F97316]/15 text-[#F97316] shadow-[0_0_16px_rgba(249,115,22,0.25)]"
                        : "border border-white/[0.10] bg-[#0C1120]/75 text-[#94A3B8] hover:border-[#A855F7]/40 hover:text-white"
                    }
                  `}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE — HERO FEATURED IMAGE FRAME
            ===================================================== */}
        <div
          className="
            relative
            hidden
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.12]
            bg-[#080D1A]
            shadow-[0_25px_70px_rgba(0,0,0,0.65),0_0_35px_rgba(168,85,247,0.15)]
            lg:block
            lg:h-[440px]
            xl:h-[480px]
          "
        >
          {/* Subtle Purple Corner Glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-64
              w-64
              rounded-full
              bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.30),transparent_70%)]
              blur-[60px]
            "
          />

          <Image
            src={heroImg}
            alt={category.title}
            fill
            quality={95}
            priority
            className="
              object-cover
              object-center
              transition-transform
              duration-700
              hover:scale-[1.03]
            "
            sizes="(max-width: 1024px) 100vw, 650px"
          />

          {/* Dark Image Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#05070D]/90 via-[#05070D]/30 to-transparent" />

          {/* Image Label & Badge */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#F97316]">
              HVTI ENGINEERING DIVISION
            </div>
            <div className="mt-1 font-heading text-[18px] font-bold text-white sm:text-[20px]">
              {category.tagline}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
