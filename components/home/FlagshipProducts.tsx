"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ================================================================
   HOME — FLAGSHIP PRODUCTS SHOWCASE (FULL VIEWPORT)
   File: components/home/FlagshipProducts.tsx

   - Full 100vh (1 Complete Viewport) calibrated layout
   - High Voltage Detector Model TP-S9 & Helmet Mounted Detector (HVTI HMD)
   - Interactive 3D Model viewer / Studio Photography switcher
   - Instant PBR 3D turntable, live-line specs, and quick quotation CTAs
   ================================================================ */

export default function FlagshipProducts() {
  const { ref: sectionRef, visible: isVisible } = useScrollReveal({
    threshold: 0.05,
    rootMargin: "-20px 0px -20px 0px",
  });

  const [tps9View, setTps9View] = useState<"3d" | "photo">("3d");
  const [hmvdView, setHmvdView] = useState<"3d" | "photo">("3d");
  const [hmvd3dMode, setHmvd3dMode] = useState<"helmet" | "standalone">("helmet");
  const [modelViewerLoaded, setModelViewerLoaded] = useState(false);

  useEffect(() => {
    import("@google/model-viewer")
      .then(() => setModelViewerLoaded(true))
      .catch((err) => console.error("Error loading model-viewer:", err));
  }, []);

  return (
    <section
      id="flagship-products"
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        justify-center
        overflow-hidden
        bg-transparent
        px-5
        py-12
        sm:px-8
        lg:h-screen
        lg:min-h-[100dvh]
        lg:px-10
        lg:py-4
        xl:py-6
      "
    >
      {/* Background Subtle Ambient Gradients */}
      <div
        className={`
          pointer-events-none
          absolute
          left-1/4
          top-1/3
          h-[550px]
          w-[550px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.07),transparent_70%)]
          blur-[130px]
          transition-opacity
          duration-1000
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
        aria-hidden="true"
      />
      <div
        className={`
          pointer-events-none
          absolute
          right-1/4
          top-1/2
          h-[550px]
          w-[550px]
          translate-x-1/2
          rounded-full
          bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08),transparent_70%)]
          blur-[130px]
          transition-opacity
          duration-1000
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
        aria-hidden="true"
      />

      <div
        ref={sectionRef}
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          w-full
          max-w-[1440px]
          flex-col
          justify-center
        "
      >
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            {/* Eyebrow */}
            <div
              className={`
                flex
                items-center
                gap-2.5
                transition-all
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}
              `}
            >
              <span
                className={`
                  h-[2px]
                  bg-[#F97316]
                  transition-all
                  duration-500
                  delay-75
                  ${isVisible ? "w-6 opacity-100" : "w-0 opacity-0"}
                `}
              />
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#F97316] sm:text-[11px]">
                FIELD-PROVEN BENCHMARKS • 20,000+ DEPLOYED
              </span>
              <span
                className={`
                  h-[2px]
                  bg-[#F97316]
                  transition-all
                  duration-500
                  delay-75
                  ${isVisible ? "w-6 opacity-100" : "w-0 opacity-0"}
                `}
              />
            </div>

            {/* Heading */}
            <h2
              className={`
                mt-1.5
                font-heading
                text-[24px]
                font-bold
                tracking-[-0.025em]
                text-white
                drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]
                sm:text-[30px]
                lg:text-[34px]
                xl:text-[38px]
                transition-all
                duration-600
                delay-75
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
              `}
            >
              <span>Our</span>{" "}
              <span className="bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#A855F7] bg-clip-text text-transparent">
                Flagship Products
              </span>
            </h2>

            {/* Description */}
            <p
              className={`
                mt-1
                max-w-[680px]
                font-sans
                text-[13px]
                leading-relaxed
                text-[#94A3B8]
                sm:text-[14px]
                transition-all
                duration-700
                delay-100
                ${isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
              `}
            >
              HVTI's signature live-line detectors trusted across Indian power utilities,
              transmission switchyards up to 765 kV, and heavy industrial plants for zero-accident operations.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div
            className={`
              flex
              flex-wrap
              items-center
              gap-2.5
              transition-all
              duration-700
              delay-150
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
            `}
          >
            <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#080D17]/80 px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#10B981]" />
              <span className="font-mono text-[11px] font-semibold text-white sm:text-[12px]">20,000+ Units</span>
              <span className="text-[10px] text-[#94A3B8] sm:text-[11px]">in Service</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#080D17]/80 px-3.5 py-1.5 backdrop-blur-md">
              <span className="font-mono text-[11px] font-semibold text-[#A855F7] sm:text-[12px]">LT to 765 kV</span>
              <span className="text-[10px] text-[#94A3B8] sm:text-[11px]">Tested</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            DUAL FLAGSHIP PRODUCTS GRID (VIEWPORT BALANCED)
            ======================================================== */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:mt-6 lg:grid-cols-2 lg:gap-6 xl:gap-8">
          {/* ====================================================
              CARD 1: HIGH VOLTAGE DETECTOR — MODEL TP-S9
              ==================================================== */}
          <div
            className={`
              group
              relative
              flex
              flex-col
              justify-between
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#080D17]/90
              p-5
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-[#F97316]/40
              hover:shadow-[0_0_35px_rgba(249,115,22,0.12)]
              sm:rounded-3xl
              sm:p-6
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
            `}
            style={{ transitionDelay: "150ms" }}
          >
            <div>
              {/* Top Badge & View Switcher */}
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#F97316] sm:text-[11px]">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  <span>STICK MOUNTED • BENCHMARK</span>
                </div>

                {/* View Switcher */}
                <div className="flex items-center rounded-lg border border-white/[0.08] bg-[#05070D]/80 p-0.5 text-[10px] sm:text-[11px]">
                  <button
                    type="button"
                    onClick={() => setTps9View("3d")}
                    className={`rounded px-2.5 py-0.5 font-semibold transition-all ${
                      tps9View === "3d"
                        ? "bg-[#F97316] text-white shadow"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    3D Orbit
                  </button>
                  <button
                    type="button"
                    onClick={() => setTps9View("photo")}
                    className={`rounded px-2.5 py-0.5 font-semibold transition-all ${
                      tps9View === "photo"
                        ? "bg-[#F97316] text-white shadow"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    Studio
                  </button>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="mt-3">
                <h3 className="font-heading text-[20px] font-bold text-white sm:text-[22px] xl:text-[24px]">
                  High Voltage Detector — Model TP-S9
                </h3>
                <p className="mt-1 text-[12px] leading-relaxed text-[#94A3B8] sm:text-[13px] line-clamp-2">
                  Capacitive field-sensing live-line detector engineered for high-voltage substations,
                  overhead lines, and switchyards from LT up to 765 kV.
                </p>
              </div>

              {/* Visual Display Stage */}
              <div className="relative my-3.5 flex h-[180px] w-full items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0B132B]/40 to-[#05070D]/80 sm:h-[210px] lg:h-[190px] xl:h-[230px]">
                {tps9View === "3d" ? (
                  modelViewerLoaded ? (
                    React.createElement("model-viewer", {
                      src: "/models/voltage_detector_tp_s9.glb",
                      alt: "High Voltage Detector TP-S9 3D Model",
                      "auto-rotate": true,
                      "rotation-per-second": "22deg",
                      "camera-controls": true,
                      "disable-zoom": true,
                      "touch-action": "pan-y",
                      "interaction-prompt": "none",
                      "shadow-intensity": "1.2",
                      exposure: "1.0",
                      "camera-orbit": "45deg 75deg 105%",
                      style: {
                        width: "100%",
                        height: "100%",
                        backgroundColor: "transparent",
                        touchAction: "pan-y",
                      },
                    })
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-white/50">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-[#F97316]" />
                      <span className="text-[10px] tracking-wider uppercase">Loading 3D Model...</span>
                    </div>
                  )
                ) : (
                  <div className="relative h-full w-full p-3">
                    <Image
                      src="/images/products/tp-s9-detector.jpg"
                      alt="HVTI TP-S9 High Voltage Detector"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Tags */}
                <div className="pointer-events-none absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#05070D]/85 px-2.5 py-0.5 text-[9px] font-medium text-white/80 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                  <span>Proving Self-Test Unit</span>
                </div>
                <div className="pointer-events-none absolute bottom-2.5 right-2.5 flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#05070D]/85 px-2.5 py-0.5 text-[9px] font-medium text-white/80 backdrop-blur-md">
                  <span className="text-[#F97316]">⚡</span>
                  <span>LT – 765 kV</span>
                </div>
              </div>

              {/* Core Engineering Specs Matrix */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2 text-center">
                  <div className="text-[9px] uppercase tracking-wider text-[#94A3B8]">Range</div>
                  <div className="mt-0.5 font-mono text-[12px] font-bold text-white">LT – 765 kV</div>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2 text-center">
                  <div className="text-[9px] uppercase tracking-wider text-[#94A3B8]">Alarms</div>
                  <div className="mt-0.5 font-mono text-[12px] font-bold text-[#F97316]">&gt; 80 dB + 6 LEDs</div>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2 text-center">
                  <div className="text-[9px] uppercase tracking-wider text-[#94A3B8]">Self Check</div>
                  <div className="mt-0.5 font-mono text-[12px] font-bold text-[#10B981]">Continuous</div>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2 text-center">
                  <div className="text-[9px] uppercase tracking-wider text-[#94A3B8]">Mounting</div>
                  <div className="mt-0.5 font-mono text-[12px] font-bold text-white">Sunrise Stick</div>
                </div>
              </div>
            </div>

            {/* Card Action Buttons */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5 pt-3 border-t border-white/[0.06]">
              <Link
                href="/products/high-voltage-detector-tp-s9"
                className="
                  inline-flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#F97316]
                  px-4
                  py-2.5
                  text-[12px]
                  font-bold
                  text-white
                  shadow-md
                  shadow-[#F97316]/20
                  transition-all
                  duration-200
                  hover:bg-[#FB923C]
                "
              >
                <span>View TP-S9 Specs</span>
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.12]
                  bg-white/[0.04]
                  px-3.5
                  py-2.5
                  text-[12px]
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:border-white/30
                  hover:bg-white/[0.08]
                "
              >
                Quote
              </Link>
            </div>
          </div>

          {/* ====================================================
              CARD 2: HELMET MOUNTED VOLTAGE DETECTOR (HVTI HMD)
              ==================================================== */}
          <div
            className={`
              group
              relative
              flex
              flex-col
              justify-between
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#080D17]/90
              p-5
              backdrop-blur-xl
              transition-all
              duration-500
              hover:border-[#7C3AED]/40
              hover:shadow-[0_0_35px_rgba(124,58,237,0.12)]
              sm:rounded-3xl
              sm:p-6
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
            `}
            style={{ transitionDelay: "250ms" }}
          >
            <div>
              {/* Top Badge & View Switcher */}
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#A78BFA] sm:text-[11px]">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a5 5 0 0 1 5 5v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1V7a5 5 0 0 1 5-5z" />
                  </svg>
                  <span>HANDS-FREE WEARABLE • 360° SENSING</span>
                </div>

                {/* View Switcher */}
                <div className="flex items-center rounded-lg border border-white/[0.08] bg-[#05070D]/80 p-0.5 text-[10px] sm:text-[11px]">
                  <button
                    type="button"
                    onClick={() => setHmvdView("3d")}
                    className={`rounded px-2.5 py-0.5 font-semibold transition-all ${
                      hmvdView === "3d"
                        ? "bg-[#7C3AED] text-white shadow"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    3D Orbit
                  </button>
                  <button
                    type="button"
                    onClick={() => setHmvdView("photo")}
                    className={`rounded px-2.5 py-0.5 font-semibold transition-all ${
                      hmvdView === "photo"
                        ? "bg-[#7C3AED] text-white shadow"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    Studio
                  </button>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="mt-3">
                <h3 className="font-heading text-[20px] font-bold text-white sm:text-[22px] xl:text-[24px]">
                  Helmet Mounted Voltage Detector (HVTI HMD)
                </h3>
                <p className="mt-1 text-[12px] leading-relaxed text-[#94A3B8] sm:text-[13px] line-clamp-2">
                  Personal hands-free electrostatic proximity warning sensor mounted to standard hard hats or wrists,
                  delivering 360° dual audible buzzer and LED flasher warnings.
                </p>
              </div>

              {/* Visual Display Stage */}
              <div className="relative my-3.5 flex h-[180px] w-full items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#1C1033]/40 to-[#05070D]/80 sm:h-[210px] lg:h-[190px] xl:h-[230px]">
                {hmvdView === "3d" ? (
                  modelViewerLoaded ? (
                    <div className="relative h-full w-full">
                      {React.createElement("model-viewer", {
                        key: hmvd3dMode,
                        src:
                          hmvd3dMode === "helmet"
                            ? "/models/detector_helmet_mounted.glb"
                            : "/models/detector_standalone.glb",
                        alt: "HVTI Helmet Mounted Voltage Detector 3D Model",
                        "auto-rotate": true,
                        "rotation-per-second": "20deg",
                        "camera-controls": true,
                        "disable-zoom": true,
                        "touch-action": "pan-y",
                        "interaction-prompt": "none",
                        "shadow-intensity": "1.2",
                        exposure: "1.0",
                        "camera-orbit":
                          hmvd3dMode === "helmet" ? "45deg 70deg 110%" : "30deg 60deg 95%",
                        style: {
                          width: "100%",
                          height: "100%",
                          backgroundColor: "transparent",
                          touchAction: "pan-y",
                        },
                      })}
                      {/* Asset Switcher */}
                      <div className="absolute top-2 right-2 z-10 flex rounded-md border border-white/[0.1] bg-[#080D17]/80 p-0.5 backdrop-blur-md">
                        <button
                          type="button"
                          onClick={() => setHmvd3dMode("helmet")}
                          className={`rounded px-1.5 py-0.5 text-[9px] font-medium transition-all ${
                            hmvd3dMode === "helmet"
                              ? "bg-[#7C3AED] text-white"
                              : "text-white/60 hover:text-white"
                          }`}
                        >
                          ⛑️ Helmet
                        </button>
                        <button
                          type="button"
                          onClick={() => setHmvd3dMode("standalone")}
                          className={`rounded px-1.5 py-0.5 text-[9px] font-medium transition-all ${
                            hmvd3dMode === "standalone"
                              ? "bg-[#7C3AED] text-white"
                              : "text-white/60 hover:text-white"
                          }`}
                        >
                          📦 Unit
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-white/50">
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-[#7C3AED]" />
                      <span className="text-[10px] tracking-wider uppercase">Loading 3D Model...</span>
                    </div>
                  )
                ) : (
                  <div className="relative h-full w-full p-3">
                    <Image
                      src="/images/products/helmet-mounted-voltage-detector.jpg"
                      alt="HVTI Helmet Mounted Voltage Detector"
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Tags */}
                <div className="pointer-events-none absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#05070D]/85 px-2.5 py-0.5 text-[9px] font-medium text-white/80 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
                  <span>360° Omnidirectional</span>
                </div>
                <div className="pointer-events-none absolute bottom-2.5 right-2.5 flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-[#05070D]/85 px-2.5 py-0.5 text-[9px] font-medium text-white/80 backdrop-blur-md">
                  <span className="text-[#A78BFA]">🔋</span>
                  <span>USB-C Fast Recharge</span>
                </div>
              </div>

              {/* Core Engineering Specs Matrix */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2 text-center">
                  <div className="text-[9px] uppercase tracking-wider text-[#94A3B8]">Sensitivity</div>
                  <div className="mt-0.5 font-mono text-[12px] font-bold text-white">1 kV – 500 kV</div>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2 text-center">
                  <div className="text-[9px] uppercase tracking-wider text-[#94A3B8]">Weight</div>
                  <div className="mt-0.5 font-mono text-[12px] font-bold text-[#A78BFA]">&lt; 75 Grams</div>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2 text-center">
                  <div className="text-[9px] uppercase tracking-wider text-[#94A3B8]">Standby</div>
                  <div className="mt-0.5 font-mono text-[12px] font-bold text-[#10B981]">&gt; 50 Hours</div>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2 text-center">
                  <div className="text-[9px] uppercase tracking-wider text-[#94A3B8]">Alert Decibels</div>
                  <div className="mt-0.5 font-mono text-[12px] font-bold text-white">&gt; 70 dB Audio</div>
                </div>
              </div>
            </div>

            {/* Card Action Buttons */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5 pt-3 border-t border-white/[0.06]">
              <Link
                href="/products/helmet-mounted-voltage-detector"
                className="
                  inline-flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#7C3AED]
                  px-4
                  py-2.5
                  text-[12px]
                  font-bold
                  text-white
                  shadow-md
                  shadow-[#7C3AED]/20
                  transition-all
                  duration-200
                  hover:bg-[#6D28D9]
                "
              >
                <span>View HMD Specs</span>
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/[0.12]
                  bg-white/[0.04]
                  px-3.5
                  py-2.5
                  text-[12px]
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:border-white/30
                  hover:bg-white/[0.08]
                "
              >
                Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
