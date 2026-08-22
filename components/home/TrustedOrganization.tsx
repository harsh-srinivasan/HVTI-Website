"use client";

import Image from "next/image";

const organizations = [
  {
    name: "Organization 1",
    logo: "/images/organizations/logo-1.jpg",
  },
  {
    name: "Organization 2",
    logo: "/images/organizations/logo-1.jpg",
  },
  {
    name: "Organization 3",
    logo: "/images/organizations/logo-1.jpg",
  },
  {
    name: "Organization 4",
    logo: "/images/organizations/logo-1.jpg",
  },
  {
    name: "Organization 5",
    logo: "/images/organizations/logo-1.jpg",
  },
  {
    name: "Organization 6",
    logo: "/images/organizations/logo-1.jpg",
  },
];

export default function TrustedBy() {
  return (
    <section
      id="trusted-by"
      className="relative w-full overflow-hidden border-y border-white/[0.06] bg-[#05070D]"
    >
      {/* ============================================================
          TRUSTED BY HEADER

          Larger typography for stronger section presence.
          ============================================================ */}

      <div className="mx-auto w-full max-w-[1440px] px-6 py-12 sm:px-8 lg:px-10">
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-10 bg-[#A855F7]" />

          <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#94A3B8] sm:text-[15px]">
            Trusted By Industry Leaders
          </p>
        </div>
      </div>

      {/* ============================================================
          LOGO MARQUEE

          One continuous visual row.
          Moves from RIGHT → LEFT.
          ============================================================ */}

      <div className="relative w-full overflow-hidden pb-14">

        {/* ==========================================================
            LEFT FADE
            ========================================================== */}

        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#05070D] to-transparent sm:w-40 lg:w-56" />

        {/* ==========================================================
            RIGHT FADE
            ========================================================== */}

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#05070D] to-transparent sm:w-40 lg:w-56" />

        {/* ==========================================================
            MARQUEE VIEWPORT
            ========================================================== */}

        <div className="w-full overflow-hidden">

          {/* ========================================================
              MARQUEE TRACK

              Two identical sequences create the seamless loop.
              Visually they behave as one continuous logo stream.
              ======================================================== */}

          <div className="trusted-marquee">

            {/* ======================================================
                FIRST LOGO SEQUENCE
                ====================================================== */}

            <div className="trusted-marquee-group">

              {organizations.map((organization, index) => (
                <div
                  key={`first-${organization.name}-${index}`}
                  className="flex h-[82px] w-[190px] shrink-0 items-center justify-center sm:w-[210px] lg:w-[230px]"
                >
                  <Image
                    src={organization.logo}
                    alt={organization.name}
                    width={230}
                    height={82}
                    className="h-auto max-h-[58px] w-auto max-w-[190px] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:max-w-[205px] lg:max-w-[220px]"
                  />
                </div>
              ))}

            </div>

            {/* ======================================================
                SECOND LOGO SEQUENCE

                Identical copy required for seamless looping.
                ====================================================== */}

            <div className="trusted-marquee-group">

              {organizations.map((organization, index) => (
                <div
                  key={`second-${organization.name}-${index}`}
                  className="flex h-[82px] w-[190px] shrink-0 items-center justify-center sm:w-[210px] lg:w-[230px]"
                >
                  <Image
                    src={organization.logo}
                    alt={organization.name}
                    width={230}
                    height={82}
                    aria-hidden="true"
                    className="h-auto max-h-[58px] w-auto max-w-[190px] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:max-w-[205px] lg:max-w-[220px]"
                  />
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
        /* ============================================================
           MARQUEE TRACK
           ============================================================ */

        .trusted-marquee {
          display: flex;
          width: max-content;
          flex-shrink: 0;
          align-items: center;

          animation: trusted-marquee-left 32s linear infinite;

          will-change: transform;
        }

        /* ============================================================
           LOGO SEQUENCE

           Larger spacing to match the larger logos.
           ============================================================ */

        .trusted-marquee-group {
          display: flex;
          flex-shrink: 0;
          align-items: center;

          gap: 65px;

          padding-right: 65px;
        }

        /* ============================================================
           RIGHT → LEFT MOVEMENT
           ============================================================ */

        @keyframes trusted-marquee-left {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        /* ============================================================
           MOBILE
           ============================================================ */

        @media (max-width: 640px) {
          .trusted-marquee {
            animation-duration: 26s;
          }

          .trusted-marquee-group {
            gap: 40px;
            padding-right: 40px;
          }
        }

        /* ============================================================
           REDUCED MOTION
           ============================================================ */

        @media (prefers-reduced-motion: reduce) {
          .trusted-marquee {
            animation: none;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}