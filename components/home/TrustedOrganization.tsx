"use client";

import Image from "next/image";
import Link from "next/link";
import { clientLogos } from "@/data/clients";

/* ================================================================
   HOME — TRUSTED BY INDUSTRY LEADERS LOGO MARQUEE
   File: components/home/TrustedOrganization.tsx

   - Clean card-free borderless client partner logos
   - Increased logo sizing for prominent visibility
   - Smooth continuous infinite marquee with pause on hover
   - Direct link to full Our Clients & Partners page
   ================================================================ */

export default function TrustedBy() {
  // Use a curated set of prominent official client logos for the home marquee
  const marqueeLogos = clientLogos.slice(0, 16);

  return (
    <section
      id="trusted-by"
      className="relative w-full overflow-hidden bg-transparent"
    >
      {/* ============================================================
          TRUSTED BY HEADER
          ============================================================ */}
      <div className="mx-auto w-full max-w-[1440px] px-6 py-9 sm:px-8 sm:py-11 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#A855F7]" />
            <p className="font-mono text-[13px] font-bold uppercase tracking-[0.20em] text-[#94A3B8] sm:text-[14px]">
              Trusted By Power Utilities &amp; Industry Leaders
            </p>
          </div>

          <Link
            href="/our-clients"
            className="
              group
              inline-flex
              items-center
              gap-2
              font-mono
              text-[12px]
              font-bold
              tracking-wider
              text-[#F97316]
              transition-all
              duration-200
              hover:text-[#FB923C]
            "
          >
            <span>VIEW ALL CLIENTS</span>
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ============================================================
          LOGO MARQUEE (CARD-FREE, 0.8x SIZED LOGOS)
          One continuous visual row moving from RIGHT → LEFT.
          ============================================================ */}
      <div className="relative w-full overflow-hidden pb-12 pt-2">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#05070D] via-[#05070D]/80 to-transparent sm:w-40 lg:w-56" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#05070D] via-[#05070D]/80 to-transparent sm:w-40 lg:w-56" />

        {/* Marquee Viewport */}
        <div className="w-full overflow-hidden">
          <div className="trusted-marquee">
            {/* FIRST LOGO SEQUENCE */}
            <div className="trusted-marquee-group">
              {marqueeLogos.map((org, index) => (
                <div
                  key={`first-${org.id}-${index}`}
                  className="group relative flex h-[54px] w-[145px] shrink-0 items-center justify-center sm:h-[64px] sm:w-[176px] lg:h-[70px] lg:w-[200px]"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={org.logo}
                      alt={org.name}
                      fill
                      sizes="(max-width: 640px) 145px, (max-width: 1024px) 176px, 200px"
                      className="object-contain opacity-80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:brightness-110"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* SECOND LOGO SEQUENCE (Seamless loop duplicate) */}
            <div className="trusted-marquee-group" aria-hidden="true">
              {marqueeLogos.map((org, index) => (
                <div
                  key={`second-${org.id}-${index}`}
                  className="group relative flex h-[54px] w-[145px] shrink-0 items-center justify-center sm:h-[64px] sm:w-[176px] lg:h-[70px] lg:w-[200px]"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={org.logo}
                      alt={org.name}
                      fill
                      sizes="(max-width: 640px) 145px, (max-width: 1024px) 176px, 200px"
                      className="object-contain opacity-80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:brightness-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          MARQUEE STYLES
          ============================================================ */}
      <style jsx>{`
        .trusted-marquee {
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: 36px;
        }

        .trusted-marquee:hover .trusted-marquee-group {
          animation-play-state: paused;
        }

        .trusted-marquee-group {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 36px;
          min-width: 100%;
          animation: scroll 38s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - 36px));
          }
        }
      `}</style>
    </section>
  );
}