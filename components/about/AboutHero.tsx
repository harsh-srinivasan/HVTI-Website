"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

/* ================================================================
   VIEWPORT 1 — ABOUT / COMPANY OVERVIEW HERO (FULL MOBILE VIEWPORT)
   File: components/about/AboutHero.tsx
   ================================================================ */

function useReveal(threshold = 0.25) {
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

function LocationPinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-[#F97316]"
      aria-hidden="true"
    >
      <path
        d="M12 2C7.58 2 4 5.58 4 10c0 5.25 7.13 11.37 7.44 11.63.33.28.8.28 1.13 0C12.87 21.37 20 15.25 20 10c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function AboutHero() {
  const { ref: contentRef, visible: contentVisible } = useReveal(0.2);
  const { ref: imageRef, visible: imageVisible } = useReveal(0.25);

  return (
    <section
      id="about-hero"
      className="
        relative
        flex
        min-h-[100svh]
        min-h-screen
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-6
        py-12
        pt-[95px]
        sm:px-8
        sm:py-16
        sm:pt-[115px]
        lg:px-12
        lg:pt-[125px]
      "
    >
      {/* Central Content Container (constrained to ~880px max width) */}
      <div className="relative z-10 my-auto flex w-full max-w-[880px] flex-col items-center text-center">
        {/* Heading & Experience Highlight */}
        <div
          ref={contentRef}
          className={`
            relative
            z-10
            flex
            flex-col
            items-center
            transition-all
            duration-[1800ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${contentVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          `}
        >
          {/* Main Title */}
          <h1
            className="
              font-heading
              text-[30px]
              font-bold
              tracking-[0.05em]
              text-white
              drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]
              sm:text-[40px]
              md:text-[46px]
            "
          >
            COMPANY <span className="text-[#A855F7]">OVERVIEW</span>
          </h1>

          {/* Orange Accent Line */}
          <div
            className={`
              my-3
              h-[2px]
              bg-[#F97316]
              transition-all
              duration-[1600ms]
              delay-[200ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              sm:my-3.5
              ${contentVisible ? "w-14" : "w-0"}
            `}
          />

          {/* Subheading Badge & Highlights */}
          <div
            className={`
              mt-1
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
              transition-all
              duration-[1800ms]
              delay-[300ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${contentVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
            `}
          >
            <span className="font-mono text-[12px] font-bold text-[#F97316] sm:text-[13px]">
              28+ YEARS OF ENGINEERING EXCELLENCE
            </span>
            <span className="hidden h-3 w-px bg-white/20 sm:inline-block" />
            <div className="flex items-center gap-1.5 font-sans text-[12.5px] text-[#CBD5E1] sm:text-[13.5px]">
              <LocationPinIcon />
              <span>Gurgaon, Haryana (5 km from IGI Airport)</span>
            </div>
          </div>
        </div>

        {/* Floating Facility Hero Image */}
        <div
          ref={imageRef}
          className={`
            relative
            mt-6
            w-full
            max-w-[620px]
            transition-all
            duration-[2000ms]
            delay-[400ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            sm:mt-8
            ${imageVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-[0.97] opacity-0"}
          `}
        >
          {/* Subtle Purple Underglow & Perimeter Halo */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-2
              rounded-[18px]
              bg-[radial-gradient(ellipse_at_50%_100%,rgba(168,85,247,0.30),rgba(124,58,237,0.10)_50%,transparent_75%)]
              blur-[20px]
            "
          />

          {/* Clean Thin Border Image Frame with Exact 16:9 Aspect Ratio */}
          <div
            className="
              relative
              aspect-[16/9]
              w-full
              overflow-hidden
              rounded-[12px]
              border
              border-[#A855F7]/30
              bg-[#080D1A]
              shadow-[0_16px_40px_rgba(0,0,0,0.75),0_0_24px_rgba(168,85,247,0.14)]
            "
          >
            <Image
              src="/images/about/hvti-facility-hero-hd.jpg"
              alt="High Voltage Testing Instruments Facility Campus in Gurgaon"
              fill
              priority
              quality={95}
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 620px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
