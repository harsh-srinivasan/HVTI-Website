"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

/* ================================================================
   VIEWPORT 4 — CEO'S MESSAGE (RAGHBINDRA SINGH)
   File: components/about/AboutCEO.tsx

   - Authentic portrait of CEO Raghbindra Singh (1:1 / 4:5 native portrait frame)
   - 30+ Years Industry Experience & B.Tech Electrical (MSRIT Bengaluru)
   - Made in India mission statement
   - Sits directly over the continuous architectural canvas
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

export default function AboutCEO() {
  const { ref: sectionRef, visible: sectionVisible } = useReveal(0.2);

  return (
    <section
      id="about-ceo"
      className="
        relative
        w-full
        overflow-hidden
        px-6
        py-16
        sm:px-8
        sm:py-20
        lg:px-12
        lg:py-24
      "
    >
      {/* Central Constrained Canvas (Max Width: 960px) */}
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
        {/* Text Column (LEFT) */}
        <div className="flex flex-col justify-center">
          <span className="font-sans text-[11px] font-bold tracking-[0.18em] text-[#A855F7]">
            EXECUTIVE LEADERSHIP &amp; VISION
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
            <span>CEO&apos;s Message:</span>
            <br />
            <span className="text-[#A855F7]">Powering a Safer Future</span>
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
            <p className="italic text-white/90">
              &ldquo;With over three decades of experience in the electrical power transmission
              and distribution industry, I have witnessed the evolving demand for reliable,
              innovative, and safety-oriented high-voltage solutions.&rdquo;
            </p>
            <p>
              My journey began with a Bachelor of Technology in Electrical Engineering
              from the Ramaiah Institute of Technology, Bengaluru, cultivating an enduring
              passion for engineering rigor and problem-solving.
            </p>
            <p>
              At HVTI, our mission is to empower the power sector with cutting-edge
              electrical safety and testing equipment while maintaining the highest
              standards of quality, calibration accuracy, and service.
            </p>
            <p className="text-[#94A3B8]">
              HVTI&apos;s commitment to <strong className="font-semibold text-[#F97316]">&ldquo;Made in India&rdquo;</strong> manufacturing
              ensures we deliver world-class instruments while driving the nation&apos;s
              industrial and electrical resilience forward.
            </p>
          </div>

          {/* Signature Block */}
          <div className="mt-6 border-t border-white/[0.08] pt-4">
            <h4 className="font-heading text-[16px] font-bold text-white">
              Raghbindra Singh
            </h4>
            <p className="font-mono text-[11px] font-medium text-[#A855F7]">
              CEO, High Voltage Testing Instruments (HVTI) Pvt. Ltd.
            </p>
          </div>
        </div>

        {/* Photo Column (RIGHT) */}
        <div className="relative mx-auto w-full max-w-[380px] md:max-w-none">
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
              src="/images/about/ceo-raghbindra-singh.jpg"
              alt="Raghbindra Singh — CEO of HVTI"
              fill
              quality={95}
              className="object-cover object-top transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 420px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-transparent to-transparent opacity-40" />

            {/* Nameplate Overlay */}
            <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/[0.12] bg-[#05070D]/85 p-2.5 backdrop-blur-md">
              <span className="font-heading text-[13.5px] font-bold text-white">
                Raghbindra Singh
              </span>
              <p className="font-mono text-[10.5px] font-medium text-[#A855F7]">
                Chief Executive Officer | B.Tech Electrical
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
