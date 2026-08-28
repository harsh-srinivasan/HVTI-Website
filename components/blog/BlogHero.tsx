"use client";

import React, { useEffect, useRef, useState } from "react";
import { blogCategories } from "@/data/blog";

/* ================================================================
   HVTI BLOG — FULL-VIEWPORT HERO SECTION
   File: components/blog/BlogHero.tsx
   ================================================================ */

interface BlogHeroProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

function useReveal(threshold = 0.08) {
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

export default function BlogHero({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: BlogHeroProps) {
  const { ref: heroRef, visible: heroVisible } = useReveal(0.08);

  const scrollToArticles = () => {
    const el = document.getElementById("blog-articles");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="blog-hero"
      className="
        relative
        z-10
        flex
        min-h-[100svh]
        min-h-screen
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-6
        py-16
        pt-[95px]
        text-center
        sm:px-10
        sm:py-20
        sm:pt-[115px]
        lg:px-14
        xl:px-20
      "
    >
      <div
        ref={heroRef}
        className={`
          my-auto
          flex
          w-full
          max-w-[1050px]
          flex-col
          items-center
          transition-all
          duration-[1000ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${heroVisible ? "translate-y-0 opacity-100" : "translate-y-[24px] opacity-0"}
        `}
      >
        {/* Eyebrow */}
        <div className="mb-3.5 flex items-center gap-3.5">
          <span className="h-[2px] w-8 shrink-0 bg-[#F97316] sm:w-10" />
          <span className="font-mono text-[11.5px] font-bold uppercase tracking-[0.20em] text-[#F97316] sm:text-[12.5px]">
            ENGINEERING INSIGHTS &amp; GRID RESEARCH
          </span>
          <span className="h-[2px] w-8 shrink-0 bg-[#F97316] sm:w-10" />
        </div>

        {/* Title */}
        <h1
          className="
            font-heading
            text-3xl
            font-bold
            leading-[1.08]
            tracking-[-0.035em]
            text-white
            drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)]
            sm:text-4xl
            md:text-[48px]
            lg:text-[54px]
            xl:text-[58px]
          "
        >
          <span>High-Voltage Insights &amp;</span>{" "}
          <span className="text-[#A855F7]">Power Engineering</span>
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-[780px] font-sans text-[14.5px] leading-[1.7] text-[#CBD5E1] sm:text-base lg:text-[17px]">
          Authoritative technical articles on HVAC vs HVDC transmission, partial discharge
          diagnostics, live-line safety apparatus, and renewable power grid modernization.
        </p>

        {/* Search Bar */}
        <div className="relative mt-7 w-full max-w-[520px]">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search articles by topic, keyword, or standard..."
            className="
              w-full
              rounded-full
              border
              border-white/[0.15]
              bg-[#0C1120]/90
              py-3
              pl-11
              pr-5
              font-sans
              text-[13px]
              text-white
              placeholder-[#64748B]
              shadow-[0_4px_20px_rgba(0,0,0,0.4)]
              backdrop-blur-md
              transition-all
              duration-200
              focus:border-[#A855F7]
              focus:outline-none
              focus:ring-2
              focus:ring-[#A855F7]/25
            "
          />
          {/* Search Icon */}
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-white"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {blogCategories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onSelectCategory(category)}
                className={`
                  rounded-full
                  px-3.5
                  py-1.5
                  font-sans
                  text-[11.5px]
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
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Scroll Down Cue */}
      <div className="mt-auto pt-4">
        <button
          type="button"
          onClick={scrollToArticles}
          className="
            group
            inline-flex
            flex-col
            items-center
            gap-1.5
            font-mono
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-[#64748B]
            transition-colors
            duration-200
            hover:text-[#F97316]
          "
        >
          <span>EXPLORE ARTICLES</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-bounce text-[#A855F7] group-hover:text-[#F97316]"
            aria-hidden="true"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
