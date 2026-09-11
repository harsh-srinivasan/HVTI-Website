"use client";

import Image from "next/image";
import Link from "next/link";
import { clientLogos } from "@/data/clients";

/* ================================================================
   HOME — TRUSTED BY INDUSTRY LEADERS LOGO MARQUEE
   File: components/home/TrustedOrganization.tsx

   - Clean card-free borderless client partner logos
   - Smooth continuous infinite marquee stream (both mobile & desktop)
   - Sleek luxury capsule CTA button
   - Direct link to full Our Clients & Partners page
   ================================================================ */

export default function TrustedBy() {
  // Use a curated set of prominent official client logos for the home marquee
  const marqueeLogos = clientLogos.slice(0, 16);

  return (
    <section
      id="trusted-by"
      className="relative w-full overflow-hidden bg-transparent pt-16 pb-20 sm:py-12 lg:py-16"
    >
      {/* ============================================================
          TRUSTED BY HEADER
          ============================================================ */}
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-4 sm:px-8 sm:pb-8 lg:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5 sm:gap-4">
            <span className="h-[2px] w-6 sm:w-10 bg-[#A855F7]" />
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#94A3B8] sm:text-[13px] sm:tracking-[0.20em]">
              Trusted By Power Utilities &amp; Industry Leaders
            </p>
          </div>

          <Link
            href="/our-clients"
            className="
              group
              inline-flex
              h-[30px]
              sm:h-[34px]
              self-start
              sm:self-auto
              items-center
              gap-1.5
              rounded-full
              border
              border-white/[0.14]
              bg-[#0B101D]/90
              px-3.5
              sm:px-4
              font-mono
              text-[9.5px]
              sm:text-[10.5px]
              font-bold
              tracking-wider
              text-slate-200
              shadow-[0_2px_12px_rgba(0,0,0,0.4)]
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#A855F7]/70
              hover:bg-[#0E1526]
              hover:text-white
              hover:shadow-[0_0_16px_rgba(168,85,247,0.25)]
              active:scale-[0.97]
            "
          >
            <span>VIEW ALL CLIENTS</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              aria-hidden="true"
              className="text-[#F97316] transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ============================================================
          LOGO MARQUEE (CONTINUOUS SMOOTH INFINITE SCROLL)
          One continuous visual row moving from RIGHT → LEFT.
          ============================================================ */}
      <div className="relative w-full overflow-hidden py-6 sm:py-10 lg:py-14">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#05070D] via-[#05070D]/85 to-transparent sm:w-44 lg:w-60" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#05070D] via-[#05070D]/85 to-transparent sm:w-44 lg:w-60" />

        {/* Marquee Viewport */}
        <div className="w-full overflow-hidden">
          <div className="flex overflow-hidden select-none gap-8 sm:gap-12">
            {/* FIRST LOGO SEQUENCE */}
            <div className="flex shrink-0 items-center justify-around gap-8 sm:gap-12 min-w-full animate-marquee-scroll">
              {marqueeLogos.map((org, index) => (
                <div
                  key={`first-${org.id}-${index}`}
                  className="group relative flex h-[54px] w-[145px] shrink-0 items-center justify-center sm:h-[76px] sm:w-[195px] lg:h-[84px] lg:w-[230px]"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={org.logo}
                      alt={org.name}
                      fill
                      sizes="(max-width: 640px) 145px, (max-width: 1024px) 195px, 230px"
                      className="object-contain opacity-85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:brightness-110"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* SECOND LOGO SEQUENCE (Seamless loop duplicate) */}
            <div className="flex shrink-0 items-center justify-around gap-8 sm:gap-12 min-w-full animate-marquee-scroll" aria-hidden="true">
              {marqueeLogos.map((org, index) => (
                <div
                  key={`second-${org.id}-${index}`}
                  className="group relative flex h-[54px] w-[145px] shrink-0 items-center justify-center sm:h-[76px] sm:w-[195px] lg:h-[84px] lg:w-[230px]"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={org.logo}
                      alt={org.name}
                      fill
                      sizes="(max-width: 640px) 145px, (max-width: 1024px) 195px, 230px"
                      className="object-contain opacity-85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:brightness-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}