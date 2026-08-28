"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

/* ================================================================
   VIEWPORT 3 — ABOUT / IN MEMORY OF OUR VISIONARY (MR. UMED SINGH)
   File: components/about/AboutVisionary.tsx

   - Mobile: Text ALWAYS rendered first, Photo ALWAYS second
     (Eliminates back-to-back adjacent images across sections)
   - Desktop (md+): Photo on LEFT (md:order-1), Text on RIGHT (md:order-2)
   - 1:1 Aspect Ratio Portrait Frame
   - Recognition highlight: British Fellowship recipient (1985)
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

export default function AboutVisionary() {
  const { ref: sectionRef, visible: sectionVisible } = useReveal(0.2);

  return (
    <section
      id="visionary"
      className="
        relative
        w-full
        overflow-hidden
        px-6
        py-12
        sm:px-8
        sm:py-16
        lg:px-12
        lg:py-20
      "
    >
      <div
        ref={sectionRef}
        className={`
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-[960px]
          grid-cols-1
          items-center
          gap-10
          transition-all
          duration-[1800ms]
          ease-[cubic-bezier(0.16,1,0.3,1)]
          md:grid-cols-2
          md:gap-14
          lg:gap-16
          ${sectionVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        {/* Text Column (Always 1st on mobile, RIGHT on desktop md:order-2) */}
        <div className="w-full md:order-2 flex flex-col justify-center">
          <span className="font-sans text-[11px] font-bold tracking-[0.18em] text-[#F97316]">
            IN MEMORY OF OUR VISIONARY
          </span>

          <h2
            className="
              mt-2
              font-heading
              text-[26px]
              font-bold
              leading-[1.2]
              tracking-[-0.02em]
              text-white
              drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]
              sm:text-[30px]
              lg:text-[34px]
            "
          >
            <span>Legacy of Excellence</span>
            <br />
            <span className="text-[#A855F7]">&amp; Industrial Innovation</span>
          </h2>

          <div
            className={`
              mb-4
              mt-3
              h-[2px]
              bg-[#F97316]
              transition-all
              duration-[1600ms]
              delay-[200ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${sectionVisible ? "w-12" : "w-0"}
            `}
          />

          <div className="space-y-3.5 font-sans text-[14px] leading-[1.75] text-[#CBD5E1] drop-shadow-[0_1px_8px_rgba(0,0,0,0.75)] sm:text-[14.5px]">
            <p>
              At HVTI, our journey is deeply rooted in the legacy of a remarkable
              individual—our visionary, <strong className="font-semibold text-white">Mr. Umed Singh</strong>, whose
              contributions and passion for innovation continue to inspire everything we build.
            </p>
            <p>
              Holding a prestigious <strong className="text-white">British Fellowship in 1985</strong> for
              electrical safety, Mr. Umed Singh dedicated his career to the development of
              indigenous electrical solutions. His pioneering work in live-line maintenance
              and safety equipment set the benchmark for modern power safety standards in India.
            </p>
            <p>
              His life was a testament to the power of perseverance, innovation, and an unwavering
              commitment to human safety. Today, we carry forward his vision, striving to reach new
              heights and transform high-voltage testing infrastructure across the globe.
            </p>
          </div>
        </div>

        {/* Photo Column (Always 2nd on mobile, LEFT on desktop md:order-1) */}
        <div className="w-full md:order-1 relative mx-auto max-w-[380px] md:max-w-none">
          {/* Subtle Purple Underglow */}
          <div
            className="
              pointer-events-none
              absolute
              -inset-2
              rounded-[18px]
              bg-[radial-gradient(ellipse_at_50%_100%,rgba(168,85,247,0.32),rgba(124,58,237,0.12)_50%,transparent_75%)]
              blur-[20px]
            "
          />

          {/* Clean Thin Border Image Frame with 1:1 Aspect Ratio */}
          <div
            className="
              relative
              aspect-square
              w-full
              overflow-hidden
              rounded-[14px]
              border
              border-[#A855F7]/30
              bg-[#080D1A]
              shadow-[0_16px_40px_rgba(0,0,0,0.8),0_0_24px_rgba(168,85,247,0.14)]
            "
          >
            <Image
              src="/images/about/mr-umed-singh.jpg"
              alt="Mr. Umed Singh — Visionary Founder of HVTI"
              fill
              quality={95}
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 420px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent opacity-40" />

            {/* Nameplate Overlay */}
            <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/[0.12] bg-[#05070D]/85 p-2.5 backdrop-blur-md">
              <span className="font-heading text-[13.5px] font-bold text-white">
                Late Mr. Umed Singh
              </span>
              <p className="font-mono text-[10.5px] font-medium text-[#F97316]">
                Pioneer in Electrical Engineering &amp; Industrialist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
