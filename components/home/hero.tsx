"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

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
          DESKTOP HERO
          ============================================================ */}
      <div className="relative hidden min-h-[806px] lg:block">
        {/* DESKTOP HERO BACKGROUND */}
        <div
          className={`
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
            transition-all
            duration-[2200ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${mounted ? "scale-100 opacity-100" : "scale-105 opacity-0"}
          `}
          style={{
            backgroundImage: "url('/images/hero/electrical-grid-hero.jpg')",
          }}
        />

        {/* AMBIENT ELECTRICAL AURA */}
        <div
          className={`
            pointer-events-none
            absolute
            left-[-100px]
            top-[15%]
            h-[500px]
            w-[650px]
            rounded-full
            bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.18),transparent_70%)]
            blur-[100px]
            transition-opacity
            duration-[2500ms]
            ease-out
            ${mounted ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* DESKTOP HERO OVERLAYS */}
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

        {/* DESKTOP CONTENT */}
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
          {/* DESKTOP MAIN CONTENT */}
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
            {/* DESKTOP EYEBROW */}
            <div
              className={`
                mb-6
                flex
                items-center
                gap-3
                transition-all
                duration-[1000ms]
                delay-[200ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
              `}
            >
              <span
                className={`
                  h-[2px]
                  bg-[#F97316]
                  transition-all
                  duration-[900ms]
                  delay-[350ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${mounted ? "w-11 opacity-100" : "w-0 opacity-0"}
                `}
              />

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

            {/* DESKTOP HEADING */}
            <h1
              className={`
                max-w-[760px]
                text-[62px]
                font-bold
                leading-[1.05]
                tracking-[-0.03em]
                text-white
                transition-all
                duration-[1200ms]
                delay-[380ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
              `}
            >
              Engineering Safety.
              <br />
              Testing Power.
              <br />
              <span className="text-[#A855F7]">
                Monitoring Performance.
              </span>
            </h1>

            {/* DESKTOP DESCRIPTION */}
            <p
              className={`
                mt-7
                max-w-[620px]
                text-[17px]
                leading-7
                text-[#CBD5E1]
                transition-all
                duration-[1200ms]
                delay-[580ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
              `}
            >
              High-voltage safety, electrical testing and condition
              monitoring solutions engineered and manufactured in India.
            </p>

            {/* DESKTOP CTA BUTTONS */}
            <div
              className={`
                mt-9
                flex
                flex-row
                items-center
                gap-4
                transition-all
                duration-[1100ms]
                delay-[780ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
              `}
            >
              {/* EXPLORE PRODUCTS */}
              <Link
                href="/products"
                className="
                  group
                  inline-flex
                  h-[52px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#FB923C]/50
                  bg-gradient-to-r
                  from-[#F97316]
                  via-[#EA580C]
                  to-[#C2410C]
                  px-8
                  font-sans
                  text-[13px]
                  font-bold
                  tracking-[0.08em]
                  text-white
                  shadow-[0_0_25px_rgba(249,115,22,0.30)]
                  transition-all
                  duration-300
                  hover:border-[#FB923C]
                  hover:shadow-[0_0_35px_rgba(249,115,22,0.55)]
                  hover:scale-[1.02]
                  active:scale-[0.98]
                "
              >
                <span>EXPLORE PRODUCTS</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              {/* TALK TO AN ENGINEER */}
              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  h-[52px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-white/[0.18]
                  bg-[#0C1120]/75
                  px-7
                  font-sans
                  text-[13px]
                  font-semibold
                  tracking-[0.05em]
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-[#A855F7]/50
                  hover:bg-[#7C3AED]/15
                  hover:shadow-[0_0_20px_rgba(168,85,247,0.20)]
                  hover:scale-[1.02]
                  active:scale-[0.98]
                "
              >
                <span>Talk To An Engineer</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* DESKTOP STATS */}
          <div
            className={`
              grid
              grid-cols-4
              border-t
              border-white/[0.10]
              transition-all
              duration-[1000ms]
              delay-[920ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${mounted ? "opacity-100" : "opacity-0"}
            `}
          >
            {/* DESKTOP STAT 1 */}
            <div
              className={`
                flex
                min-h-[120px]
                items-center
                gap-4
                border-r
                border-white/[0.08]
                px-6
                transition-all
                duration-[1000ms]
                delay-[960ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
              `}
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

            {/* DESKTOP STAT 2 */}
            <div
              className={`
                flex
                min-h-[120px]
                items-center
                gap-4
                border-r
                border-white/[0.08]
                px-6
                transition-all
                duration-[1000ms]
                delay-[1080ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
              `}
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

            {/* DESKTOP STAT 3 */}
            <div
              className={`
                flex
                min-h-[120px]
                items-center
                gap-4
                border-r
                border-white/[0.08]
                px-6
                transition-all
                duration-[1000ms]
                delay-[1200ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
              `}
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

            {/* DESKTOP STAT 4 */}
            <div
              className={`
                flex
                min-h-[120px]
                items-center
                gap-4
                px-6
                transition-all
                duration-[1000ms]
                delay-[1320ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
              `}
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
          MOBILE HERO
          ============================================================ */}
      <div
        className="
          relative
          block
          min-h-[calc(100svh-74px)]
          lg:hidden
        "
      >
        {/* MOBILE HERO BACKGROUND */}
        <div
          className={`
            absolute
            inset-0
            bg-cover
            bg-center
            bg-no-repeat
            transition-all
            duration-[2200ms]
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${mounted ? "scale-100 opacity-100" : "scale-105 opacity-0"}
          `}
          style={{
            backgroundImage:
              "url('/images/hero/electrical-grid-hero-mobile.jpg')",
          }}
        />

        {/* MOBILE HERO OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(180deg,rgba(3,6,13,0.78)_0%,rgba(3,6,13,0.48)_38%,rgba(3,6,13,0.72)_72%,rgba(3,6,13,0.98)_100%)]
          "
        />

        {/* MOBILE HERO CONTENT CONTAINER */}
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
          {/* MOBILE MAIN CONTENT */}
          <div className="flex flex-col">
            {/* MOBILE EYEBROW */}
            <div
              className={`
                mb-10
                flex
                items-center
                gap-2
                transition-all
                duration-[1000ms]
                delay-[200ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
              `}
            >
              <span
                className={`
                  h-[2px]
                  bg-[#F97316]
                  transition-all
                  duration-[900ms]
                  delay-[350ms]
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${mounted ? "w-6 opacity-100" : "w-0 opacity-0"}
                `}
              />

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

            {/* MOBILE MAIN HEADING */}
            <h1
              className={`
                max-w-[390px]
                text-[36px]
                font-bold
                leading-[1.06]
                tracking-[-0.03em]
                text-white
                sm:text-[40px]
                transition-all
                duration-[1200ms]
                delay-[380ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
              `}
            >
              Engineering Safety.
              <br />
              Testing Power.
              <br />
              <span className="text-[#A855F7]">
                Monitoring Performance.
              </span>
            </h1>

            {/* MOBILE DESCRIPTION */}
            <p
              className={`
                mt-9
                max-w-[390px]
                text-[15px]
                leading-[1.65]
                text-[#CBD5E1]
                sm:text-[15.5px]
                transition-all
                duration-[1200ms]
                delay-[580ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
              `}
            >
              High-voltage safety, electrical testing and condition
              monitoring solutions engineered and manufactured in India.
            </p>

            {/* MOBILE CTA BUTTONS */}
            <div
              className={`
                mt-10
                flex
                w-full
                max-w-[300px]
                flex-col
                gap-3
                transition-all
                duration-[1100ms]
                delay-[780ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}
              `}
            >
              {/* EXPLORE PRODUCTS */}
              <Link
                href="/products"
                className="
                  flex
                  h-[46px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-[#F97316]
                  to-[#EA580C]
                  px-5
                  font-sans
                  text-[12px]
                  font-bold
                  tracking-wide
                  text-white
                  shadow-[0_0_20px_rgba(249,115,22,0.30)]
                "
              >
                <span>EXPLORE PRODUCTS</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              {/* TALK TO AN ENGINEER */}
              <Link
                href="/contact"
                className="
                  flex
                  h-[46px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/[0.20]
                  bg-[#0C1120]/80
                  px-5
                  font-sans
                  text-[12px]
                  font-semibold
                  text-white
                  backdrop-blur-md
                "
              >
                <span>Talk To An Engineer</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* MOBILE HERO STATS */}
          <div
            className={`
              mt-auto
              grid
              grid-cols-2
              border-t
              border-white/[0.10]
              transition-all
              duration-[1000ms]
              delay-[920ms]
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${mounted ? "opacity-100" : "opacity-0"}
            `}
          >
            {/* MOBILE STAT 1 */}
            <div
              className={`
                flex
                min-h-[82px]
                items-center
                gap-2.5
                border-b
                border-r
                border-white/[0.08]
                pr-3
                transition-all
                duration-[900ms]
                delay-[960ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
              `}
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

            {/* MOBILE STAT 2 */}
            <div
              className={`
                flex
                min-h-[82px]
                items-center
                gap-2.5
                border-b
                border-white/[0.08]
                pl-3
                transition-all
                duration-[900ms]
                delay-[1080ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
              `}
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

            {/* MOBILE STAT 3 */}
            <div
              className={`
                flex
                min-h-[82px]
                items-center
                gap-2.5
                border-r
                border-white/[0.08]
                pr-3
                transition-all
                duration-[900ms]
                delay-[1200ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
              `}
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

            {/* MOBILE STAT 4 */}
            <div
              className={`
                flex
                min-h-[82px]
                items-center
                gap-2.5
                pl-3
                transition-all
                duration-[900ms]
                delay-[1320ms]
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
              `}
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