"use client";

import React, { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ================================================================
   HOME — UPCOMING PRODUCT TEASER: HVTI-HMD+ (MINIMALIST LUXURY 3D)
   File: components/home/UpcomingProductTeaser.tsx

   - Center-focused luxury teaser with 3D model render + blur shroud
   - Dual-row (8 stats) grid with shuffled public & blurred confidential specs
   - Clean whitespace, single-viewport fit (100vh), zero scroll lag
   - Interactive Early Pilot Access & NDA Datasheet Modal
   ================================================================ */

interface StatPill {
  id: string;
  label: string;
  value: string;
  isClassified: boolean;
  classifiedValue: string;
  accentColor: string;
}

const statPills: StatPill[] = [
  // Row 1 (Asymmetric mix)
  {
    id: "dit-induction",
    label: "Induction Tuning",
    value: "D.I.T. Smart Mode",
    isClassified: true,
    classifiedValue: "Auto-Tune Calibrated",
    accentColor: "text-[#A78BFA]",
  },
  {
    id: "voltage-range",
    label: "Capacitive Range",
    value: "LT – 765 kV+",
    isClassified: false,
    classifiedValue: "",
    accentColor: "text-white",
  },
  {
    id: "wireless-ble",
    label: "Live Telemetry",
    value: "BLE 5.0 Wireless",
    isClassified: false,
    classifiedValue: "",
    accentColor: "text-[#10B981]",
  },
  {
    id: "ai-reports",
    label: "Shift Analytics",
    value: "AI Shift Engine",
    isClassified: true,
    classifiedValue: "Forensic Hazard Logs",
    accentColor: "text-[#FB923C]",
  },
  // Row 2 (Randomized scatter)
  {
    id: "cloud-fleet",
    label: "Central Console",
    value: "Supervisor Hub",
    isClassified: true,
    classifiedValue: "500-Fleet GPS Map",
    accentColor: "text-[#10B981]",
  },
  {
    id: "sos-distress",
    label: "Emergency SOS",
    value: "One-Touch Alert",
    isClassified: true,
    classifiedValue: "Multi-Band Broadcast",
    accentColor: "text-[#A78BFA]",
  },
  {
    id: "g-sensor",
    label: "Man-Down Sensor",
    value: "3-Axis G-Sensor",
    isClassified: false,
    classifiedValue: "",
    accentColor: "text-[#FB923C]",
  },
  {
    id: "ingress-power",
    label: "Rugged & Power",
    value: "IP66 • USB-C",
    isClassified: false,
    classifiedValue: "",
    accentColor: "text-white",
  },
];

export default function UpcomingProductTeaser() {
  const { ref: sectionRef, visible: isVisible } = useScrollReveal({
    threshold: 0.05,
    rootMargin: "-20px 0px -20px 0px",
  });

  const [modelViewerLoaded, setModelViewerLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    import("@google/model-viewer")
      .then(() => setModelViewerLoaded(true))
      .catch((err) => console.error("Error loading model-viewer:", err));
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="upcoming-hmd-plus"
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-transparent
        px-5
        py-10
        sm:px-8
        lg:h-screen
        lg:min-h-[100dvh]
        lg:max-h-[100dvh]
        lg:px-12
        lg:py-4
        xl:py-6
      "
    >
      {/* Subtle Ambient Cosmic Glow Bloom */}
      <div
        className={`
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.10),rgba(249,115,22,0.05)_40%,transparent_70%)]
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
          w-full
          max-w-[1040px]
          flex-col
          items-center
          justify-center
        "
      >
        {/* ========================================================
            CENTERED MASTERPIECE TEASER CARD
            ======================================================== */}
        <div
          className={`
            relative
            flex
            w-full
            flex-col
            items-center
            rounded-3xl
            border
            border-white/[0.08]
            bg-[#080D17]/75
            p-5
            text-center
            backdrop-blur-xl
            shadow-[0_0_60px_rgba(0,0,0,0.85)]
            sm:p-8
            lg:p-8
            xl:p-10
            transition-all
            duration-700
            ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          `}
        >
          {/* Top Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 px-3.5 py-0.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F97316] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F97316]" />
            </span>
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#FB923C] sm:text-[10px]">
              NEXT-GEN LAUNCH • COMING SOON
            </span>
          </div>

          {/* Product Headline */}
          <h2 className="mt-2.5 font-heading text-[24px] font-extrabold tracking-[-0.025em] text-white sm:text-[32px] lg:text-[36px] xl:text-[38px]">
            <span>HVTI-HMD+</span>{" "}
            <span className="bg-gradient-to-r from-[#A78BFA] via-[#F97316] to-[#FB923C] bg-clip-text text-transparent">
              Smart Bluetooth Voltage Detector
            </span>
          </h2>

          {/* Tagline */}
          <p className="mt-1 max-w-[620px] font-sans text-[12px] leading-relaxed text-[#94A3B8] sm:text-[13.5px]">
            The next evolution in personal electrical safety. Hands-free live-line proximity detection up to 765 kV+ with connected worker IoT telemetry.
          </p>

          {/* Central Floating Blurred 3D Prototype Display (Enlarged) */}
          <div className="relative my-3.5 flex h-[175px] sm:h-[200px] lg:h-[195px] xl:h-[220px] w-full max-w-[460px] items-center justify-center overflow-hidden rounded-2xl bg-transparent">
            {/* Soft Ambient Radial Backlight */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-[#7C3AED]/20 via-[#F97316]/20 to-transparent blur-2xl" />

            {/* 3D Model Stage with Transparent Background & Shroud */}
            {modelViewerLoaded ? (
              <div className="relative flex h-full w-full items-center justify-center">
                {React.createElement("model-viewer", {
                  src: "/models/detector_standalone.glb",
                  alt: "HVTI-HMD+ Smart Bluetooth Detector Prototype",
                  "auto-rotate": true,
                  "rotation-per-second": "16deg",
                  "camera-controls": true,
                  "disable-zoom": true,
                  "touch-action": "pan-y",
                  "interaction-prompt": "none",
                  "shadow-intensity": "1.2",
                  exposure: "1.2",
                  "camera-orbit": "20deg 65deg 175%",
                  style: {
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    touchAction: "pan-y",
                    filter: "blur(5px)",
                  },
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1.5 text-white/50">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-[#F97316]" />
                <span className="text-[10px] uppercase tracking-wider">Loading 3D Prototype...</span>
              </div>
            )}

            {/* Minimalist Classified Shroud Pill */}
            <div className="pointer-events-none absolute flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-black/85 px-3.5 py-1 backdrop-blur-md shadow-2xl">
              <svg className="h-3 w-3 text-[#FB923C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#FB923C] sm:text-[10px]">
                CONFIDENTIAL PROTOTYPE • FIELD TRIALS ACTIVE
              </span>
            </div>
          </div>

          {/* 8 Crisp Key Breakthrough Specs (2 Rows x 4 Columns with Classified Blurs) */}
          <div className="grid w-full max-w-[880px] grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
            {statPills.map((stat) => (
              <div
                key={stat.id}
                onClick={() => stat.isClassified && setShowModal(true)}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border
                  p-2.5
                  text-center
                  transition-all
                  duration-200
                  ${
                    stat.isClassified
                      ? "cursor-pointer border-white/[0.08] bg-white/[0.03] hover:border-[#F97316]/40 hover:bg-white/[0.06]"
                      : "border-white/[0.06] bg-white/[0.02]"
                  }
                `}
              >
                {/* Value Line */}
                <div className="flex items-center justify-center gap-1">
                  {stat.isClassified ? (
                    <div className="relative flex items-center gap-1">
                      <span className={`font-mono text-[12px] sm:text-[13px] font-bold ${stat.accentColor} select-none filter blur-[3px] group-hover:blur-[2px] transition-all`}>
                        {stat.classifiedValue}
                      </span>
                      <span className="text-[10px] text-[#FB923C]">🔒</span>
                    </div>
                  ) : (
                    <span className={`font-mono text-[12px] sm:text-[13px] font-bold ${stat.accentColor}`}>
                      {stat.value}
                    </span>
                  )}
                </div>

                {/* Subtitle / Metric Label */}
                <div className="mt-0.5 text-[10px] font-medium text-[#94A3B8]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Discreet Locked Features Note */}
          <div className="mt-3.5 flex items-center justify-center gap-1.5 text-[11px] text-[#64748B]">
            <svg className="h-3 w-3 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Confidential smart algorithms &amp; cloud telemetry locked behind enterprise NDA.</span>
          </div>

          {/* Centered High-Impact CTA */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#F97316]
                px-6
                py-2.5
                text-[12px]
                font-bold
                text-white
                shadow-lg
                shadow-[#F97316]/25
                transition-all
                duration-200
                hover:bg-[#FB923C]
                hover:shadow-[#F97316]/40
              "
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9" />
              </svg>
              <span>Request Early Pilot Access &amp; Datasheet</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          EARLY PILOT ACCESS & NDA SPEC MODAL
          ======================================================== */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-md animate-fadeIn">
          <div
            className="
              relative
              w-full
              max-w-md
              rounded-3xl
              border
              border-[#F97316]/40
              bg-[#080D17]
              p-6
              shadow-[0_0_60px_rgba(249,115,22,0.25)]
              sm:p-8
            "
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white text-[13px]"
            >
              ✕
            </button>

            {!submitted ? (
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#F97316]/30 bg-[#F97316]/10 px-3 py-1 text-[10px] font-bold text-[#FB923C]">
                  <span>HVTI-HMD+ PILOT PROGRAM</span>
                </div>
                <h3 className="mt-3 font-heading text-[22px] font-bold text-white">
                  Request Early Pilot Trial &amp; Datasheet
                </h3>
                <p className="mt-1.5 text-[13px] text-[#94A3B8] leading-relaxed">
                  Register your utility or enterprise email to receive the confidential HMD+ technical dossier and early pilot invitation upon official launch.
                </p>

                <form onSubmit={handleFormSubmit} className="mt-5 space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#CBD5E1]">
                      Official Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="engineer@powergrid.in"
                      className="mt-1 w-full rounded-xl border border-white/10 bg-[#05070D] px-4 py-3 text-[13px] text-white placeholder-white/30 focus:border-[#F97316] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#CBD5E1]">
                      Organization / Utility Name
                    </label>
                    <input
                      type="text"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      placeholder="e.g., PGCIL, NTPC, Tata Power, State DISCOM"
                      className="mt-1 w-full rounded-xl border border-white/10 bg-[#05070D] px-4 py-3 text-[13px] text-white placeholder-white/30 focus:border-[#F97316] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="
                      mt-4
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-[#F97316]
                      py-3.5
                      text-[13px]
                      font-bold
                      text-white
                      shadow-lg
                      shadow-[#F97316]/30
                      hover:bg-[#FB923C]
                      transition-all
                    "
                  >
                    <span>Submit Pilot Request</span>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-4 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#10B981]/20 text-[#10B981]">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="mt-3.5 font-heading text-[20px] font-bold text-white">
                  Pilot Registration Confirmed!
                </h3>
                <p className="mt-1.5 text-[13px] text-[#94A3B8]">
                  Thank you! We have registered <span className="text-white font-semibold">{email}</span> for early pilot access. Our engineering team will reach out with the complete dossier.
                </p>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="mt-5 rounded-xl bg-white/10 px-6 py-2.5 text-[13px] font-semibold text-white hover:bg-white/20 transition-all"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
