"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ================================================================
   VIEWPORT 1 — HERO
   File: components/office/ManagementOfficeHero.tsx

   - Centered composition with generous negative space
   - Refined typography (White + Electric Purple) sitting directly on canvas
   - Floating facility hero image with exact native 16:9 aspect ratio
   - High-definition HD photorealistic facility exterior
   ================================================================ */

function useReveal(threshold = 0.1) {
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

export default function ManagementOfficeHero() {
  const { ref: contentRef, visible: contentVisible } = useReveal(0.08);
  const { ref: imageRef, visible: imageVisible } = useReveal(0.12);

  return (
    <section
      id="management-office-hero"
      className="
        relative
        flex
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-6
        pb-14
        pt-[105px]
        sm:px-8
        sm:pb-16
        sm:pt-[115px]
        lg:px-12
        lg:pt-[125px]
      "
    >
      {/* Central Content Container (constrained to ~860px max width) */}
      <div className="relative z-10 mx-auto flex w-full max-w-[860px] flex-col items-center text-center">
        {/* Heading & Address Block */}
        <div
          ref={contentRef}
          className={`
            relative
            z-10
            flex
            flex-col
            items-center
            transition-all
            duration-[900ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${contentVisible ? "translate-y-0 opacity-100" : "translate-y-[20px] opacity-0"}
          `}
        >
          {/* Main Title */}
          <h1
            className="
              font-heading
              text-[34px]
              font-bold
              tracking-[0.05em]
              text-white
              drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]
              sm:text-[40px]
              md:text-[46px]
            "
          >
            MANAGEMENT{" "}
            <span className="text-[#A855F7]">OFFICE</span>
          </h1>

          {/* Orange Accent Line */}
          <div className="my-3.5 h-[2px] w-12 bg-[#F97316]" />

          {/* Location Pin & Address */}
          <div className="mt-1 flex items-center justify-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F97316]/30 bg-[#0C1120]/80 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
              <LocationPinIcon />
            </div>
            <div className="text-left font-sans text-[13px] leading-[1.4] text-[#CBD5E1] drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)] sm:text-[14px]">
              <span className="font-medium text-white">1171, Sector 21,</span>
              <br />
              <span className="text-[#94A3B8]">Gurgaon, Haryana – 122016, India</span>
            </div>
          </div>
        </div>

        {/* Floating Medium-Sized Facility Hero Image */}
        <div
          ref={imageRef}
          className={`
            relative
            mt-8
            w-full
            max-w-[620px]
            transition-all
            duration-[1000ms]
            delay-[120ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${imageVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-[24px] scale-[0.98] opacity-0"}
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
              src="/images/office/hvti-building-hero-hd.jpg"
              alt="HVTI Management Office Building Facade"
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
