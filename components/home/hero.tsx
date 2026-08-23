"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#05070D]
      "
    >
      {/* ============================================================
          ============================================================
          DESKTOP HERO
          ============================================================
          ============================================================ */}

      <div className="relative hidden min-h-[806px] lg:block">
        {/* ============================================================
            DESKTOP HERO BACKGROUND
            File:
            /public/images/hero/electrical-grid-hero.jpg
            ============================================================ */}

        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage:
              "url('/images/hero/electrical-grid-hero.jpg')",
          }}
        />

        {/* ============================================================
            DESKTOP HERO OVERLAY
            ============================================================ */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(90deg,rgba(3,6,13,0.92)_0%,rgba(3,6,13,0.72)_25%,rgba(3,6,13,0.25)_48%,rgba(3,6,13,0)_70%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#05070D]
            via-transparent
            to-[#05070D]/20
          "
        />

        {/* ============================================================
            DESKTOP CONTENT
            ============================================================ */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[806px]
            w-full
            max-w-[1440px]
            flex-col
            justify-between
            px-10
          "
        >
          {/* ========================================================
              DESKTOP MAIN CONTENT
              ======================================================== */}

          <div
            className="
              flex
              max-w-[720px]
              flex-1
              -translate-y-10
              flex-col
              justify-center
              pt-[86px]
            "
          >
            {/* ======================================================
                DESKTOP EYEBROW
                ====================================================== */}

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-11 bg-[#F97316]" />

              <span
                className="
                  text-[15px]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-[#F97316]
                "
              >
                Enhancing Safety, Empowering Energy
              </span>
            </div>

            {/* ======================================================
                DESKTOP HEADING
                ====================================================== */}

            <h1
              className="
                max-w-[760px]
                text-[62px]
                font-bold
                leading-[1.05]
                tracking-[-0.03em]
                text-white
              "
            >
              Engineering Safety.
              <br />
              Testing Power.
              <br />

              <span className="text-[#A855F7]">
                Monitoring Performance.
              </span>
            </h1>

            {/* ======================================================
                DESKTOP DESCRIPTION
                ====================================================== */}

            <p
              className="
                mt-7
                max-w-[620px]
                text-[17px]
                leading-7
                text-[#CBD5E1]
              "
            >
              High-voltage safety, electrical testing and condition
              monitoring solutions engineered and manufactured in India.
            </p>

            {/* ======================================================
                DESKTOP CTA BUTTONS
                ====================================================== */}

            <div className="mt-9 flex flex-row gap-4">
              {/* ====================================================
                  EXPLORE PRODUCTS
                  ==================================================== */}

              <Link
                href="/products"
                className="
                  inline-flex
                  h-[58px]
                  items-center
                  justify-center
                  gap-3
                  rounded-md
                  bg-[#F97316]
                  px-7
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-wide
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#FB923C]
                  hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]
                "
              >
                <span>Explore Products</span>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              {/* ====================================================
                  TALK TO AN ENGINEER
                  ==================================================== */}

              <Link
                href="/contact"
                className="
                  inline-flex
                  h-[58px]
                  items-center
                  justify-center
                  gap-3
                  rounded-md
                  border
                  border-white/50
                  bg-white/[0.02]
                  px-7
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-wide
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-200
                  hover:border-white
                  hover:bg-white/[0.06]
                "
              >
                <span>Talk To An Engineer</span>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* ============================================================
              DESKTOP STATS
              ============================================================ */}

          <div
            className="
              grid
              grid-cols-4
              border-t
              border-white/[0.10]
            "
          >
            {/* ========================================================
                DESKTOP STAT 1
                ======================================================== */}

            <div
              className="
                flex
                min-h-[120px]
                items-center
                gap-4
                border-r
                border-white/[0.08]
                px-6
              "
            >
              <div
                className="
                  flex
                  h-[52px]
                  w-[52px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#A855F7]
                  text-[#A855F7]
                "
              >
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 3L14.2 8.1L19.5 8.6L15.5 12.1L16.7 17.4L12 14.6L7.3 17.4L8.5 12.1L4.5 8.6L9.8 8.1L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M12 14V21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <div className="text-[27px] font-semibold leading-none text-[#F97316]">
                  30+
                </div>

                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  Years
                </div>

                <div className="mt-1 text-[12px] text-[#94A3B8]">
                  Industry Experience
                </div>
              </div>
            </div>

            {/* ========================================================
                DESKTOP STAT 2
                ======================================================== */}

            <div
              className="
                flex
                min-h-[120px]
                items-center
                gap-4
                border-r
                border-white/[0.08]
                px-6
              "
            >
              <div
                className="
                  flex
                  h-[52px]
                  w-[52px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#F97316]
                  text-[#F97316]
                "
              >
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13 2L5 13H11L10 22L19 10H13L13 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <div className="text-[27px] font-semibold leading-none text-[#F97316]">
                  800 kV
                </div>

                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  High Voltage
                </div>

                <div className="mt-1 text-[12px] text-[#94A3B8]">
                  Testing Capability
                </div>
              </div>
            </div>

            {/* ========================================================
                DESKTOP STAT 3
                ======================================================== */}

            <div
              className="
                flex
                min-h-[120px]
                items-center
                gap-4
                border-r
                border-white/[0.08]
                px-6
              "
            >
              <div
                className="
                  flex
                  h-[52px]
                  w-[52px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#A855F7]
                  text-[#A855F7]
                "
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 3L19 6V11C19 15.5 16.2 19.2 12 21C7.8 19.2 5 15.5 5 11V6L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <div className="text-[22px] font-semibold leading-none text-[#F97316]">
                  ISO 9001:2015
                </div>

                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  Certified
                </div>

                <div className="mt-1 text-[12px] text-[#94A3B8]">
                  Quality Management
                </div>
              </div>
            </div>

            {/* ========================================================
                DESKTOP STAT 4
                ======================================================== */}

            <div
              className="
                flex
                min-h-[120px]
                items-center
                gap-4
                px-6
              "
            >
              <div
                className="
                  flex
                  h-[52px]
                  w-[52px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#F97316]
                  text-[#F97316]
                "
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M12 7V17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M7 12H17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <div>
                <div className="text-[27px] font-semibold leading-none text-[#F97316]">
                  INDIA
                </div>

                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  Designed &
                </div>

                <div className="text-[12px] text-[#94A3B8]">
                  Manufactured
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          ============================================================
          MOBILE HERO
          ============================================================
          ============================================================ */}

      <div
        className="
          relative
          block
          min-h-[calc(100svh-74px)]
          lg:hidden
        "
      >
        {/* ============================================================
            MOBILE HERO BACKGROUND

            File:
            /public/images/hero/electrical-grid-hero-mobile.jpg
            ============================================================ */}

        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage:
              "url('/images/hero/electrical-grid-hero-mobile.jpg')",
          }}
        />

        {/* ============================================================
            MOBILE HERO OVERLAY
            ============================================================ */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(180deg,rgba(3,6,13,0.78)_0%,rgba(3,6,13,0.48)_38%,rgba(3,6,13,0.72)_72%,rgba(3,6,13,0.98)_100%)]
          "
        />

        {/* ============================================================
            MOBILE HERO CONTENT CONTAINER

            IMPORTANT:
            pt-[102px] is intentionally restored.

            This keeps the hero content below the fixed navbar.

            mt-auto on the stats pushes them toward the bottom while
            allowing the main content to use its own spacing.
            ============================================================ */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[calc(100svh-74px)]
            w-full
            max-w-[520px]
            flex-col
            px-5
            pb-6
            pt-[102px]
            sm:px-7
            sm:pt-[108px]
          "
        >
          {/* ========================================================
              MOBILE MAIN CONTENT
              ======================================================== */}

          <div className="flex flex-col">
            {/* ======================================================
                MOBILE EYEBROW

                Increased bottom spacing.
                ====================================================== */}

            {/* TAGLINE */}

<div className="mb-10 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#F97316]" />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.07em]
                  text-[#F97316]
                  sm:text-[11px]
                "
              >
                Enhancing Safety, Empowering Energy
              </span>
            </div>

            {/* MAIN HEADING */}

<h1
  className="
    max-w-[390px]
    text-[36px]
    font-bold
    leading-[1.06]
    tracking-[-0.03em]
    text-white
    sm:text-[40px]
  "
>
              Engineering Safety.
              <br />

              Testing Power.
              <br />

              <span className="text-[#A855F7]">
                Monitoring Performance.
              </span>
            </h1>

            {/* ======================================================
                MOBILE DESCRIPTION

                More space between heading and description.
                ====================================================== */}

            {/* DESCRIPTION */}

<p
  className="
    mt-9
    max-w-[390px]
    text-[15px]
    leading-[1.65]
    text-[#CBD5E1]
    sm:text-[15.5px]
  "
>
              High-voltage safety, electrical testing and condition
              monitoring solutions engineered and manufactured in India.
            </p>

            {/* ======================================================
                MOBILE CTA BUTTONS

                More space before buttons.
                ====================================================== */}

            {/* BUTTONS */}

<div
  className="
    mt-10
    flex
    w-full
    max-w-[300px]
    flex-col
    gap-3
  "
>
              {/* ====================================================
                  EXPLORE PRODUCTS
                  ==================================================== */}

              <Link
                href="/products"
                className="
                  flex
                  h-[44px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  bg-[#F97316]
                  px-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-wide
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#FB923C]
                "
              >
                <span>Explore Products</span>

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              {/* ====================================================
                  TALK TO AN ENGINEER
                  ==================================================== */}

              <Link
                href="/contact"
                className="
                  flex
                  h-[44px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  border
                  border-white/50
                  bg-white/[0.02]
                  px-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-wide
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-200
                  hover:border-white
                  hover:bg-white/[0.06]
                "
              >
                <span>Talk To An Engineer</span>

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M13 6L19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* ============================================================
              MOBILE HERO STATS

              mt-auto anchors the stats toward the bottom of the
              available hero space without changing their dimensions.
              ============================================================ */}

          <div
            className="
              mt-auto
              grid
              grid-cols-2
              border-t
              border-white/[0.10]
            "
          >
            {/* ========================================================
                MOBILE STAT 1 — EXPERIENCE
                ======================================================== */}

            <div
              className="
                flex
                min-h-[82px]
                items-center
                gap-2.5
                border-b
                border-r
                border-white/[0.08]
                pr-3
              "
            >
              <div
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#A855F7]
                  text-[#A855F7]
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 3L14.2 8.1L19.5 8.6L15.5 12.1L16.7 17.4L12 14.6L7.3 17.4L8.5 12.1L4.5 8.6L9.8 8.1L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M12 14V21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <div className="text-[18px] font-semibold leading-none text-[#F97316]">
                  30+
                </div>

                <div className="mt-1 text-[8px] font-semibold uppercase tracking-wide text-white">
                  Years
                </div>

                <div className="mt-0.5 text-[9px] text-[#94A3B8]">
                  Industry Experience
                </div>
              </div>
            </div>

            {/* ========================================================
                MOBILE STAT 2 — HIGH VOLTAGE
                ======================================================== */}

            <div
              className="
                flex
                min-h-[82px]
                items-center
                gap-2.5
                border-b
                border-white/[0.08]
                pl-3
              "
            >
              <div
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#F97316]
                  text-[#F97316]
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13 2L5 13H11L10 22L19 10H13L13 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <div className="text-[18px] font-semibold leading-none text-[#F97316]">
                  800 kV
                </div>

                <div className="mt-1 text-[8px] font-semibold uppercase tracking-wide text-white">
                  High Voltage
                </div>

                <div className="mt-0.5 text-[9px] text-[#94A3B8]">
                  Testing Capability
                </div>
              </div>
            </div>

            {/* ========================================================
                MOBILE STAT 3 — ISO
                ======================================================== */}

            <div
              className="
                flex
                min-h-[82px]
                items-center
                gap-2.5
                border-r
                border-white/[0.08]
                pr-3
              "
            >
              <div
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#A855F7]
                  text-[#A855F7]
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 3L19 6V11C19 15.5 16.2 19.2 12 21C7.8 19.2 5 15.5 5 11V6L12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <div className="text-[14px] font-semibold leading-none text-[#F97316]">
                  ISO 9001:2015
                </div>

                <div className="mt-1 text-[8px] font-semibold uppercase tracking-wide text-white">
                  Certified
                </div>

                <div className="mt-0.5 text-[9px] text-[#94A3B8]">
                  Quality Management
                </div>
              </div>
            </div>

            {/* ========================================================
                MOBILE STAT 4 — INDIA
                ======================================================== */}

            <div
              className="
                flex
                min-h-[82px]
                items-center
                gap-2.5
                pl-3
              "
            >
              <div
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#F97316]
                  text-[#F97316]
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M12 7V17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M7 12H17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <div>
                <div className="text-[18px] font-semibold leading-none text-[#F97316]">
                  INDIA
                </div>

                <div className="mt-1 text-[8px] font-semibold uppercase tracking-wide text-white">
                  Designed &
                </div>

                <div className="text-[9px] text-[#94A3B8]">
                  Manufactured
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}