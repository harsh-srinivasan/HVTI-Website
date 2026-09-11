"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { WorkflowStep } from "@/types/product";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CategoryWorkflowStepsProps {
  categorySlug?: string;
  category?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  steps?: WorkflowStep[];
  workflow?: {
    categorySlug?: string;
    eyebrow?: string;
    heading?: string;
    steps: WorkflowStep[];
  } | WorkflowStep[];
}

export default function CategoryWorkflowSteps({
  categorySlug,
  category,
  eyebrow = "HOW IT WORKS",
  title = "A simple, reliable testing process.",
  subtitle,
  steps,
  workflow,
}: CategoryWorkflowStepsProps) {
  const { ref: sectionRef, visible } = useScrollReveal({ threshold: 0.1 });
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // Telemetry is the default view mode as requested
  const [visualMode, setVisualMode] = useState<"telemetry" | "equipment">("telemetry");

  const displaySteps: WorkflowStep[] =
    steps ||
    (Array.isArray(workflow) ? workflow : workflow?.steps) ||
    [];

  // Auto-play sequencer loop
  useEffect(() => {
    if (!isPlaying || displaySteps.length === 0) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % displaySteps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, displaySteps.length]);

  if (!displaySteps || displaySteps.length === 0) return null;

  const currentStepData = displaySteps[activeStep] || displaySteps[0];
  const displayEyebrow =
    (!Array.isArray(workflow) && workflow?.eyebrow) || eyebrow;
  const displayTitle =
    (!Array.isArray(workflow) && workflow?.heading) || title;

  const activeCategory = (
    categorySlug ||
    category ||
    (!Array.isArray(workflow) && workflow?.categorySlug) ||
    inferCategoryFromTitle(displayTitle, displayEyebrow)
  ).toLowerCase();

  const activeChecklist =
    currentStepData.technicalDetails ||
    getStageChecklist(activeCategory, activeStep, currentStepData);

  const telemetryMeta = getCategoryTelemetryMeta(activeCategory, activeStep);

  return (
    <section className="relative z-10 w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 bg-transparent overflow-hidden">
      <div
        ref={sectionRef}
        className={`mx-auto max-w-[1360px] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {/* =========================================================================
            SECTION HEADER & SEQUENCER CONTROLS
           ========================================================================= */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="max-w-3xl">
            <div className="mb-2.5 flex items-center gap-3">
              <span className="h-[2px] w-6 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#F97316]">
                {displayEyebrow}
              </span>
            </div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {displayTitle}
            </h2>
            {subtitle && (
              <p className="mt-2.5 text-xs sm:text-sm text-gray-400 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* Interactive Sequencer Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-semibold transition-all duration-300 cursor-pointer ${
                isPlaying
                  ? "border-orange-500/50 bg-orange-500/10 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.25)]"
                  : "border-white/10 bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-orange-400 animate-pulse" : "bg-gray-500"}`} />
              <span>{isPlaying ? "AUTO SEQUENCER ON" : "RUN AUTO SEQUENCE"}</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            HIGH-VOLTAGE BUSBAR PIPELINE (STAGE SELECTOR TABS)
           ========================================================================= */}
        <div className="relative mb-6">
          {/* Conductor Line running behind stage sockets */}
          <div className="absolute top-[24px] left-[5%] right-[5%] h-[2px] bg-white/[0.08] z-0 hidden sm:block">
            {/* Filled Progress Bar */}
            <div
              className="h-full bg-gradient-to-r from-orange-500 via-purple-500 to-orange-400 transition-all duration-700 ease-out"
              style={{
                width: `${((activeStep + 1) / displaySteps.length) * 100}%`,
              }}
            />
          </div>

          {/* Stepper Node Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 relative z-10">
            {displaySteps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPassed = idx < activeStep;

              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-3
                    p-3
                    sm:p-3.5
                    rounded-xl
                    border
                    text-left
                    transition-all
                    duration-300
                    backdrop-blur-xl
                    cursor-pointer
                    ${
                      isActive
                        ? "border-orange-500/60 bg-gradient-to-b from-orange-500/[0.08] to-purple-950/[0.12] shadow-[0_8px_25px_rgba(249,115,22,0.15)]"
                        : isPassed
                        ? "border-purple-500/30 bg-white/[0.02] hover:border-purple-500/50 hover:bg-white/[0.04]"
                        : "border-white/[0.06] bg-white/[0.01] hover:border-white/15 hover:bg-white/[0.03]"
                    }
                  `}
                >
                  {/* Socket Icon / Monogram */}
                  <div
                    className={`
                      w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-all duration-300
                      ${
                        isActive
                          ? "bg-gradient-to-br from-orange-500 to-purple-600 text-white shadow-[0_0_12px_rgba(249,115,22,0.4)] scale-105"
                          : isPassed
                          ? "bg-purple-950/60 border border-purple-500/40 text-purple-300"
                          : "bg-white/[0.04] border border-white/10 text-gray-400 group-hover:text-gray-200"
                      }
                    `}
                  >
                    {step.step || `0${idx + 1}`}
                  </div>

                  {/* Text Details */}
                  <div className="min-w-0">
                    <span className="block font-mono text-[9.5px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-300">
                      Phase {step.step || `0${idx + 1}`}
                    </span>
                    <span
                      className={`block font-heading text-xs sm:text-[12.5px] font-semibold truncate transition-colors ${
                        isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            FEATURED DIAGNOSTIC CONSOLE (DUAL DECK ACTIVE STAGE INSPECTOR)
           ========================================================================= */}
        <div className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-2xl p-5 sm:p-7 lg:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
          {/* Top Edge Illumination */}
          <div className="absolute -top-[1px] left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-10 items-center">
            {/* Left Deck: Methodology & Test Protocol */}
            <div className="flex flex-col justify-between h-full">
              <div>
                {/* Status Row */}
                <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-orange-500/30 bg-orange-500/10 font-mono text-[10px] font-bold text-orange-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
                    {currentStepData.tag || `STAGE 0${activeStep + 1} ACTIVE`}
                  </span>
                  <span className="font-mono text-[11px] text-gray-400">
                    PHASE {activeStep + 1} OF {displaySteps.length}
                  </span>
                </div>

                {/* Primary Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {currentStepData.title}
                </h3>

                {/* Narrative Description */}
                <p className="mt-3 font-sans text-xs sm:text-[13.5px] text-gray-300 leading-relaxed max-w-xl">
                  {currentStepData.description}
                </p>

                {/* Stage Engineering Checklist / Parameter Tags */}
                <div className="mt-5 pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeChecklist.map((item, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300 font-sans">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 12 12">
                          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        </svg>
                      </div>
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage Navigation Buttons */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
                <button
                  disabled={activeStep === 0}
                  onClick={() => {
                    setActiveStep((prev) => Math.max(0, prev - 1));
                    setIsPlaying(false);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.02] text-xs font-mono font-semibold text-gray-300 hover:text-white hover:bg-white/[0.05] disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                >
                  ← PREV
                </button>

                <div className="flex items-center gap-1.5">
                  {displaySteps.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => {
                        setActiveStep(dotIdx);
                        setIsPlaying(false);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeStep === dotIdx
                          ? "w-5 bg-orange-400 shadow-[0_0_8px_#F97316]"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Go to phase ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <button
                  disabled={activeStep === displaySteps.length - 1}
                  onClick={() => {
                    setActiveStep((prev) => Math.min(displaySteps.length - 1, prev + 1));
                    setIsPlaying(false);
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-orange-500/40 bg-orange-500/10 text-xs font-mono font-semibold text-orange-300 hover:bg-orange-500/20 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                >
                  NEXT →
                </button>
              </div>
            </div>

            {/* Right Deck: Custom Telemetry & Waveform Visualizer (Default) + Equipment Toggle */}
            <div className="relative rounded-2xl border border-white/[0.08] bg-black/40 p-4 sm:p-5 backdrop-blur-xl overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[330px]">
              {/* Visual Mode Switcher Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] font-mono text-[10.5px]">
                <div className="flex items-center gap-2 text-orange-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{telemetryMeta.header}</span>
                </div>

                {/* View Mode Toggle Buttons */}
                <div className="flex items-center bg-white/[0.04] p-0.5 rounded-lg border border-white/10">
                  <button
                    onClick={() => setVisualMode("telemetry")}
                    className={`px-2 py-1 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer ${
                      visualMode === "telemetry"
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    TELEMETRY
                  </button>
                  <button
                    onClick={() => setVisualMode("equipment")}
                    className={`px-2 py-1 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer ${
                      visualMode === "equipment"
                        ? "bg-orange-500/20 text-orange-300 border border-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.2)]"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    EQUIPMENT
                  </button>
                </div>
              </div>

              {/* Main Visual Display Area */}
              <div className="relative flex-1 flex items-center justify-center my-1 min-h-[165px]">
                {visualMode === "telemetry" ? (
                  <div className="w-full">
                    <StageVisualizer
                      category={activeCategory}
                      stepIndex={activeStep}
                      step={currentStepData}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-44 sm:h-48 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent rounded-xl pointer-events-none" />

                    {currentStepData.image ? (
                      <div className="relative w-full h-full p-2">
                        <Image
                          src={currentStepData.image}
                          alt={currentStepData.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="text-center font-mono text-xs text-gray-500">
                        <span>HVTI TEST EQUIPMENT</span>
                      </div>
                    )}

                    <div className="absolute bottom-1 right-1 bg-black/70 border border-white/10 px-2 py-0.5 rounded font-mono text-[9px] text-gray-300">
                      {currentStepData.tag || `PHASE 0${activeStep + 1}`}
                    </div>
                  </div>
                )}
              </div>

              {/* Telemetry Footer Status Badges */}
              <div className="pt-2.5 mt-2 border-t border-white/[0.06] grid grid-cols-3 gap-2 font-mono text-[9.5px] text-gray-400 text-center">
                <div className="rounded bg-white/[0.02] border border-white/[0.05] p-1">
                  <span className="block text-[8.5px] text-gray-500">{telemetryMeta.badge1Label}</span>
                  <span className="text-white font-semibold">{telemetryMeta.badge1Val}</span>
                </div>
                <div className="rounded bg-white/[0.02] border border-white/[0.05] p-1">
                  <span className="block text-[8.5px] text-gray-500">{telemetryMeta.badge2Label}</span>
                  <span className="text-emerald-400 font-semibold">{telemetryMeta.badge2Val}</span>
                </div>
                <div className="rounded bg-white/[0.02] border border-white/[0.05] p-1">
                  <span className="block text-[8.5px] text-gray-500">{telemetryMeta.badge3Label}</span>
                  <span className="text-purple-300 font-semibold">{telemetryMeta.badge3Val}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function inferCategoryFromTitle(title: string, eyebrow: string): string {
  const combined = (title + " " + eyebrow).toLowerCase();
  if (combined.includes("dielectric") || combined.includes("withstand") || combined.includes("ac or dc") || combined.includes("ac & dc")) {
    return "high-voltage-ac-dc-testing-systems";
  }
  if (combined.includes("measurement") || combined.includes("divider") || combined.includes("kilovolt")) {
    return "high-voltage-measurement-dividers";
  }
  if (combined.includes("injection") || combined.includes("relay") || combined.includes("protection")) {
    return "current-injection-protection-testing";
  }
  if (combined.includes("breaker") || combined.includes("timing") || combined.includes("micro-ohm")) {
    return "circuit-breaker-testing-analysis";
  }
  if (combined.includes("transformer") || combined.includes("ratio") || combined.includes("winding") || combined.includes("bdv")) {
    return "transformer-testing-diagnostics";
  }
  if (combined.includes("cable") || combined.includes("tdr") || combined.includes("fault") || combined.includes("thumper")) {
    return "cable-fault-location-testing";
  }
  if (combined.includes("specialized") || combined.includes("earth fault") || combined.includes("sf6") || combined.includes("gfl")) {
    return "specialized-electrical-testing-equipment";
  }
  return "partial-discharge-solutions";
}

function getCategoryTelemetryMeta(category: string, stepIndex: number) {
  if (category.includes("ac-dc") || category.includes("testing-systems")) {
    return {
      header: `HV DIELECTRIC HIPOT // CH-1 (${stepIndex === 2 ? "75.4 kV" : "RAMP READY"})`,
      badge1Label: "OUTPUT KV",
      badge1Val: stepIndex === 2 ? "75.4 kV AC" : stepIndex === 3 ? "0.0 kV (DISCHARGED)" : "100 kV CAPABLE",
      badge2Label: "LEAKAGE I",
      badge2Val: stepIndex === 2 ? "2.18 mA" : "< 0.05 mA",
      badge3Label: "WITHSTAND",
      badge3Val: stepIndex === 3 ? "PASS (60s)" : "IEC 60060 OK",
    };
  }

  if (category.includes("measurement") || category.includes("divider")) {
    return {
      header: `PRECISION VOLTAGE DIVIDER // 10000:1 RATIO`,
      badge1Label: "RATIO",
      badge1Val: "10,000 : 1",
      badge2Label: "CREST FACTOR",
      badge2Val: "1.414 (TRUE RMS)",
      badge3Label: "ACCURACY",
      badge3Val: "±0.5% CALIBRATED",
    };
  }

  if (category.includes("current-injection") || category.includes("protection")) {
    return {
      header: `PRIMARY CURRENT INJECTION // PCIT CH-1`,
      badge1Label: "INJECTED I",
      badge1Val: stepIndex >= 2 ? "1850 A RMS" : "5000 A MAX",
      badge2Label: "TRIP TIME",
      badge2Val: stepIndex >= 2 ? "38.4 ms" : "TIMER READY",
      badge3Label: "IEC CURVE",
      badge3Val: stepIndex === 3 ? "PASS (IEC 60255)" : "COORDINATION OK",
    };
  }

  if (category.includes("breaker") || category.includes("circuit-breaker")) {
    return {
      header: `BREAKER TIMING & TRAVEL // SA-SERIES 12-CH`,
      badge1Label: "DISCREPANCY",
      badge1Val: "< 1.2 ms (3-PHASE)",
      badge2Label: "STROKE VELOCITY",
      badge2Val: "2.42 m/s",
      badge3Label: "CONTACT RES",
      badge3Val: "18.2 µΩ (DRM)",
    };
  }

  if (category.includes("transformer") || category.includes("diagnostics") || category.includes("bench")) {
    return {
      header: `TRANSFORMER ASSESSMENT // ART-3D & OTS BDV`,
      badge1Label: "TURNS RATIO",
      badge1Val: stepIndex >= 2 ? "22.45 : 1 (0.04% ERR)" : "10,000:1 MAX",
      badge2Label: "WINDING RES",
      badge2Val: stepIndex >= 2 ? "1.428 mΩ (10A DC)" : "DUAL-CH OK",
      badge3Label: "OIL DIELECTRIC",
      badge3Val: stepIndex === 3 ? "74.8 kV BDV (PASS)" : "IEC 60156 READY",
    };
  }

  if (category.includes("cable") || category.includes("fault") || category.includes("tdr")) {
    return {
      header: `TDR REFLECTOMETRY // TDR-3000 PULSE ECHO`,
      badge1Label: "DISTANCE TO FAULT",
      badge1Val: stepIndex >= 1 ? "1,420.5 m" : "3,000 m RANGE",
      badge2Label: "VOP VELOCITY",
      badge2Val: "80.4 m/µs (XLPE)",
      badge3Label: "SURGE HIPOT",
      badge3Val: stepIndex === 3 ? "PASS (REPAIRED)" : "32 kV THUMPER",
    };
  }

  if (category.includes("specialized") || category.includes("earth-fault") || category.includes("gfl")) {
    return {
      header: `DC EARTH FAULT & TIMING // GFL-T+R & DTIM`,
      badge1Label: "FAULT IMPEDANCE",
      badge1Val: stepIndex >= 1 ? "14.2 kΩ (NEG BUS)" : "< 400 kΩ SENSE",
      badge2Label: "TRIP TIMER",
      badge2Val: stepIndex >= 1 ? "14.82 ms (±0.05%)" : "0.0001s RES",
      badge3Label: "SF6 VACUUM",
      badge3Val: stepIndex >= 2 ? "0.45 mbar (READY)" : "< 1 mbar SPEC",
    };
  }

  // Default: Partial Discharge
  return {
    header: `PRPD & 3D ACOUSTIC RADAR // UHF & HFCT SENSORS`,
    badge1Label: "APPARENT CHARGE",
    badge1Val: stepIndex === 1 ? "320 pC (VOID)" : stepIndex === 3 ? "< 50 pC (ACCEPTABLE)" : "500 pC LIMIT",
    badge2Label: "3D FAULT LOC",
    badge2Val: stepIndex === 2 ? "X:142 Y:89 Z:210" : "SENSORS SYNCED",
    badge3Label: "IEC 60270",
    badge3Val: "DIAGNOSTIC PASS",
  };
}

function getStageChecklist(category: string, index: number, step: WorkflowStep): string[] {
  if (category.includes("ac-dc") || category.includes("testing-systems")) {
    switch (index) {
      case 0:
        return ["Safety Earth Ground Interlock Active", "Zero-Voltage Start Guard Verified", "DUT Capacitance Range Evaluated", "High-Voltage Bushing Clearance Check"];
      case 1:
        return ["Ramp Rate Set (0.5 - 2 kV/s)", "Overcurrent Fast-Trip Limit (10 mA)", "Withstand Dwell Timer Setup (60s)", "Corona & Flashover Guard Armed"];
      case 2:
        return ["Controlled Dielectric Voltage Ramp", "Real-Time Leakage Current Monitoring", "Continuous Insulation Stress Log", "Sub-Cycle Auto-Cutoff Active"];
      default:
        return ["Withstand Proof Test Verified", "Automatic Grounding Discharge Loop", "Leakage Current & Loss Log Export", "IEC 60060 Standard Compliance Certificate"];
    }
  }

  if (category.includes("measurement") || category.includes("divider")) {
    switch (index) {
      case 0:
        return ["Safe Flashover Clearances Checked", "Solid Ground Base Earth Bonded", "High-Voltage Corona Ring Attached", "Divider Ratio Selection (10,000:1)"];
      case 1:
        return ["Double-Shielded 50Ω Coaxial Run", "Digital Kilovoltmeter / Scope Link", "50Ω Impedance Matching Verified", "Noise & EMI Immunity Shielded"];
      case 2:
        return ["Sub-20ns Response Time Division", "AC RMS / DC Peak / Impulse Division", "Zero Phase Angle Distortion Error", "Thermal & Corona Stability Checked"];
      default:
        return ["Class 0.5 High Accuracy Display", "True RMS, Peak & Peak/√2 Readout", "Harmonic Distortion (THD) Analysis", "Traceable NABL Calibration Certificate"];
    }
  }

  if (category.includes("current-injection") || category.includes("protection")) {
    switch (index) {
      case 0:
        return ["High-Current Busbar Clamps Torqued", "CT Polarity & Ratio Verified", "Timer Stop Auxiliary Contacts Wired", "Safety Earth Bond Validated"];
      case 1:
        return ["Current Range Preset (Up to 5000A)", "Instantaneous vs Inverse-Time Mode", "Sub-Millisecond Stop Trigger Armed", "Duty Cycle & Thermal Guard Active"];
      case 2:
        return ["Smooth Motorized Variac Injection", "Primary Current Pulse Duration Log", "Exact Contact Opening Detection", "Relay Pickup & Instantaneous Trip"];
      default:
        return ["Measured vs Standard Curve Plot", "Relay Coordination Margin Verified", "Breaker Auxiliary Contact Verified", "IEC 60255 Standard Compliance Sheet"];
    }
  }

  if (category.includes("breaker") || category.includes("circuit-breaker")) {
    switch (index) {
      case 0:
        return ["4-Wire Kelvin Micro-Ohm Probes Connected", "12-Channel Timing Leads Attached", "Optical Grounding Isolation Active", "Station Earth Bond Verified"];
      case 1:
        return ["Linear / Rotary Transducer Coupled", "Close / Trip Coil Wiring Connected", "DC Station Battery Voltage Sensed", "Motor Charging Current Sense Active"];
      case 2:
        return ["Standard Sequence (C, O, C-O, O-C-O)", "Dual Trip Coil Triggering Initiated", "Simultaneous 3-Phase Actuation", "High-Speed Dynamic Waveform Record"];
      default:
        return ["Sub-Millisecond 3-Phase Discrepancy", "Travel Velocity, Stroke & Contact Wipe", "Dynamic Resistance Profile (DRM)", "Baseline Fingerprint & Health Sheet"];
    }
  }

  if (category.includes("transformer") || category.includes("diagnostics") || category.includes("bench")) {
    switch (index) {
      case 0:
        return ["Electrical vs Oil Quality Path Selected", "Transformer Nameplate Vector Group Setup", "Bushing High-Voltage Clearance Verified", "Oil Test Vessel Sampling Protocol Followed"];
      case 1:
        return ["Kelvin 4-Wire Clamps Attached to Bushings", "Safety Grounding Earth Terminal Bonded", "Oil Vessel Electrode Gap Set (2.5 mm)", "Ambient Temperature Probe Synchronized"];
      case 2:
        return ["Automatic 3-Phase Turns Ratio Excitation", "Dual-Channel 10A DC Resistance Ramp", "Motorized Magnetic Stirrer BDV Spark Cycle", "Coulometric Moisture Extraction in ppm"];
      default:
        return ["Turns Ratio Error < 0.08% Tolerance Verified", "Winding Resistance Phase Discrepancy < 2%", "Oil BDV > 65 kV Dielectric Quality Confirmed", "Automated IEEE C57 / IEC 60076 Certificate"];
    }
  }

  if (category.includes("cable") || category.includes("fault") || category.includes("tdr")) {
    switch (index) {
      case 0:
        return ["Cable De-Energized & Safety Earth Discharged", "TDR Coaxial Leads Clamped to Conductor & Shield", "VoP Preset for Cable Dielectric (80 m/µs)", "Pulse Width Adjusted for Target Distance"];
      case 1:
        return ["Incident & Reflected Pulse Echo Captured", "Dual Digital Cursor Markers Positioned", "Exact Distance-to-Fault Calculated (1,420 m)", "Open vs Short-Circuit Polarity Confirmed"];
      case 2:
        return ["Reflectance Anomaly Amplitude Evaluated", "High-Voltage Thumper Flashover Triggered", "Acoustic Ground Microphone Surface Triangulation", "Surface Excavation Coordinates Marked"];
      default:
        return ["Targeted Minimal Excavation Pit Opened", "Cable Joint / Splice Section Replaced", "DC Proof Withstand Dielectric Retest Passed", "Network Re-Energized & Outage Cleared"];
    }
  }

  if (category.includes("specialized") || category.includes("earth-fault") || category.includes("gfl")) {
    switch (index) {
      case 0:
        return ["DC Floating Bus Voltage Imbalance Check", "Relay Operating Time Requirements Set", "SF6 Gas Compartment Pressure Evaluated", "Specialized Tool Selected from 15-Piece Kit"];
      case 1:
        return ["Safe Low-Frequency Pulser Signal (0.5 Hz)", "Dual Current Clamp Differential Tracing", "Digital Time Interval Counter Armed", "Fault Resistance Readout (14.2 kΩ)"];
      case 2:
        return ["Faulty DC Distribution Branch Isolated", "SF6 Deep Vacuum Evacuation to < 1 mbar", "Regulated SF6 Gas Refill to Rated Pressure", "Relay Contact Alignment & Tension Restored"];
      default:
        return ["DC Positive/Negative Bus Balanced to Earth", "Relay Millisecond Operating Time Verified", "SF6 Compartment Moisture & Leak Free", "Substation Protection System Operational"];
    }
  }

  // Default: Partial Discharge
  switch (index) {
    case 0:
      return ["Acoustic & Airborne Ultrasound (ULD-40)", "Overhead Line Parabolic PD (PD-LT)", "Cable Screen High-Frequency CT (HFCT)", "Non-Intrusive Live Substation Survey"];
    case 1:
      return ["PRPD Phase-Resolved Pattern Capture", "Distinguish Corona vs Void vs Surface", "Multi-Sensor Noise Filtering", "50/60 Hz Power Frequency Sync"];
    case 2:
      return ["AE-150 Magnetic Tank Sensor Mount", "Acoustic Time-of-Flight Triangulation", "3D Millimeter Coordinates [X, Y, Z]", "Pinpoints Internal Winding Faults"];
    default:
      return ["Apparent Charge Quantification in pC", "Insulation Degradation Severity Index", "Targeted Maintenance Action Plan", "IEC 60270 Standard Compliance Certificate"];
  }
}

// =========================================================================
// CUSTOM TELEMETRY RENDERERS PER CATEGORY & PER PHASE
// =========================================================================

function StageVisualizer({
  category,
  stepIndex,
  step,
}: {
  category: string;
  stepIndex: number;
  step: WorkflowStep;
}) {
  if (category.includes("ac-dc") || category.includes("testing-systems")) {
    return <HVTestingTelemetry stepIndex={stepIndex} />;
  }
  if (category.includes("measurement") || category.includes("divider")) {
    return <HVMeasurementTelemetry stepIndex={stepIndex} />;
  }
  if (category.includes("current-injection") || category.includes("protection")) {
    return <CurrentInjectionTelemetry stepIndex={stepIndex} />;
  }
  if (category.includes("breaker") || category.includes("circuit-breaker")) {
    return <CircuitBreakerTelemetry stepIndex={stepIndex} />;
  }
  if (category.includes("transformer") || category.includes("diagnostics") || category.includes("bench")) {
    return <TransformerTelemetry stepIndex={stepIndex} />;
  }
  if (category.includes("cable") || category.includes("fault") || category.includes("tdr")) {
    return <CableFaultTelemetry stepIndex={stepIndex} />;
  }
  if (category.includes("specialized") || category.includes("earth-fault") || category.includes("gfl")) {
    return <SpecializedTelemetry stepIndex={stepIndex} />;
  }
  // Default: Partial Discharge
  return <PDTelemetry stepIndex={stepIndex} />;
}

// 1. High Voltage AC & DC Testing Systems Telemetry
function HVTestingTelemetry({ stepIndex }: { stepIndex: number }) {
  switch (stepIndex) {
    case 0:
      // Safety Earth & HV Source Interlock Loop
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <rect x="25" y="30" width="85" height="75" rx="8" fill="rgba(249,115,22,0.1)" stroke="#F97316" strokeWidth="1.5" />
          <text x="67" y="55" fill="#FFFFFF" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">HV HIPOT SET</text>
          <text x="67" y="72" fill="#F97316" fontSize="8" fontFamily="monospace" textAnchor="middle">AC / DC 100 kV</text>
          <text x="67" y="88" fill="#34D399" fontSize="7.5" fontFamily="monospace" textAnchor="middle">ZERO-V START OK</text>

          <path d="M110 50 L245 50" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="177" cy="50" r="3.5" fill="#F97316" className="animate-ping" />
          <text x="177" y="42" fill="#F97316" fontSize="7.5" fontFamily="monospace" textAnchor="middle">HV BUS LEAD</text>

          <rect x="245" y="30" width="90" height="75" rx="8" fill="rgba(168,85,247,0.1)" stroke="#A855F7" strokeWidth="1.5" />
          <text x="290" y="55" fill="#FFFFFF" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">TEST OBJECT</text>
          <text x="290" y="72" fill="#A855F7" fontSize="8" fontFamily="monospace" textAnchor="middle">TRANSFORMER / CABLE</text>
          <text x="290" y="88" fill="#94A3B8" fontSize="7.5" fontFamily="monospace" textAnchor="middle">DUT ISOLATED</text>

          <path d="M110 90 L245 90" stroke="#34D399" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="177" cy="90" r="3" fill="#34D399" />
          <text x="177" y="105" fill="#34D399" fontSize="7.5" fontFamily="monospace" textAnchor="middle">SAFETY INTERLOCK LOOP: CLOSED</text>
        </svg>
      );
    case 1:
      // Controlled Voltage Ramp Rate Configuration
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <line x1="30" y1="115" x2="330" y2="115" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="30" y1="115" x2="30" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="30" y1="45" x2="330" y2="45" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 4" />
          <text x="325" y="38" fill="#EF4444" fontSize="7.5" fontFamily="monospace" textAnchor="end">OVERCURRENT TRIP (10 mA)</text>

          {/* Ramp Curve */}
          <path d="M30 115 L140 55 L280 55 L330 55" stroke="#F97316" strokeWidth="2.5" fill="none" />
          <circle cx="140" cy="55" r="4" fill="#F97316" className="animate-pulse" />
          <text x="140" y="47" fill="#F97316" fontSize="8" fontFamily="monospace" textAnchor="middle">TARGET: 75.0 kV</text>

          <text x="85" y="95" fill="#E2E8F0" fontSize="7.5" fontFamily="monospace">RAMP: 1.5 kV/s</text>
          <text x="210" y="70" fill="#34D399" fontSize="7.5" fontFamily="monospace">DWELL TIMER: 60s</text>
          <line x1="280" y1="55" x2="280" y2="115" stroke="rgba(255,255,255,0.15)" strokeDasharray="2 2" />
        </svg>
      );
    case 2:
      // Dielectric Withstand Stress & Leakage Current Telemetry
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          {/* Grid */}
          <line x1="30" y1="70" x2="330" y2="70" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
          {/* HV Sine Wave */}
          <path d="M30 70 Q70 20 110 70 T190 70 T270 70 T330 70" stroke="#F97316" strokeWidth="2" fill="none" />
          <text x="35" y="35" fill="#F97316" fontSize="8" fontFamily="monospace" fontWeight="bold">V_TEST: 75.4 kV AC (50.0 Hz)</text>

          {/* Leakage Current Trace */}
          <path d="M30 100 Q70 85 110 100 T190 100 T270 100 T330 100" stroke="#34D399" strokeWidth="1.5" fill="none" />
          <text x="35" y="125" fill="#34D399" fontSize="8" fontFamily="monospace">I_LEAKAGE: 2.18 mA (STABLE &lt; 10 mA LIMIT)</text>

          {/* Dwell Countdown Box */}
          <rect x="230" y="25" width="95" height="28" rx="5" fill="rgba(0,0,0,0.7)" stroke="#A855F7" strokeWidth="1" />
          <text x="277" y="42" fill="#A855F7" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">DWELL: 00:42s</text>
        </svg>
      );
    default:
      // Breakdown Verification & Grounding Discharge Curve
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <line x1="30" y1="115" x2="330" y2="115" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="30" y1="115" x2="30" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

          {/* Exponential Discharge Curve */}
          <path d="M30 40 Q80 40 120 95 T220 115 L330 115" stroke="#34D399" strokeWidth="2.2" fill="none" />
          <text x="140" y="70" fill="#34D399" fontSize="8" fontFamily="monospace">AUTO DISCHARGE: V(t) → 0V</text>

          {/* Pass Stamp */}
          <rect x="130" y="25" width="160" height="34" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10B981" strokeWidth="1.5" />
          <text x="210" y="42" fill="#10B981" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">DIELECTRIC WITHSTAND: PASS</text>
          <text x="210" y="53" fill="#E2E8F0" fontSize="7.5" fontFamily="monospace" textAnchor="middle">IEC 60060-1 / IEEE Std 4</text>
        </svg>
      );
  }
}

// 2. High Voltage Measurement & Dividers Telemetry
function HVMeasurementTelemetry({ stepIndex }: { stepIndex: number }) {
  switch (stepIndex) {
    case 0:
      // RC Voltage Divider Circuit Schematic
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <circle cx="60" cy="40" r="14" fill="rgba(249,115,22,0.15)" stroke="#F97316" strokeWidth="1.5" />
          <text x="60" y="44" fill="#F97316" fontSize="8" fontFamily="monospace" textAnchor="middle">100 kV</text>
          <text x="60" y="20" fill="#FFF" fontSize="7.5" fontFamily="monospace" textAnchor="middle">HV SOURCE</text>

          <line x1="74" y1="40" x2="160" y2="40" stroke="#F97316" strokeWidth="2" />
          <circle cx="160" cy="40" r="12" stroke="#A855F7" strokeWidth="1.5" fill="none" />
          <text x="160" y="24" fill="#A855F7" fontSize="7.5" fontFamily="monospace" textAnchor="middle">CORONA RING</text>

          {/* Divider Stack R1/C1 */}
          <rect x="145" y="55" width="30" height="24" rx="4" fill="rgba(168,85,247,0.2)" stroke="#A855F7" />
          <text x="160" y="70" fill="#FFF" fontSize="7.5" fontFamily="monospace" textAnchor="middle">R1 // C1</text>
          <line x1="160" y1="40" x2="160" y2="55" stroke="#FFF" />
          <line x1="160" y1="79" x2="160" y2="92" stroke="#FFF" />

          {/* Divider Base R2/C2 */}
          <rect x="145" y="92" width="30" height="22" rx="4" fill="rgba(52,211,153,0.2)" stroke="#34D399" />
          <text x="160" y="106" fill="#34D399" fontSize="7" fontFamily="monospace" textAnchor="middle">R2 // C2</text>
          <line x1="160" y1="114" x2="160" y2="125" stroke="#FFF" />
          <line x1="150" y1="125" x2="170" y2="125" stroke="#34D399" strokeWidth="1.5" />

          {/* Output to Meter */}
          <path d="M175" stroke="#34D399" />
          <line x1="175" y1="103" x2="250" y2="103" stroke="#34D399" strokeWidth="1.5" />
          <rect x="250" y="88" width="85" height="32" rx="6" fill="rgba(0,0,0,0.7)" stroke="#34D399" />
          <text x="292" y="103" fill="#FFF" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">RATIO: 10000:1</text>
          <text x="292" y="114" fill="#34D399" fontSize="7" fontFamily="monospace" textAnchor="middle">V_out = 10.00 V</text>
        </svg>
      );
    case 1:
      // 50Ω Coaxial Link & Sub-20ns Response Time Pulse
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <line x1="30" y1="110" x2="330" y2="110" stroke="rgba(255,255,255,0.15)" />
          <line x1="30" y1="110" x2="30" y2="20" stroke="rgba(255,255,255,0.15)" />

          {/* Ultra-Fast Step Response */}
          <path d="M30 110 L100 110 L108 40 L330 40" stroke="#34D399" strokeWidth="2.5" fill="none" />
          <circle cx="108" cy="40" r="3.5" fill="#34D399" className="animate-ping" />

          <text x="120" y="32" fill="#34D399" fontSize="8" fontFamily="monospace" fontWeight="bold">RISE TIME: t_r &lt; 18.2 ns</text>
          <text x="120" y="56" fill="#94A3B8" fontSize="7.5" fontFamily="monospace">50 Ω IMPEDANCE MATCHED (ZERO REFLECTION)</text>
          <text x="120" y="72" fill="#A855F7" fontSize="7.5" fontFamily="monospace">BANDWIDTH: DC to 100 kHz FLAT</text>
        </svg>
      );
    case 2:
      // Synchronized Voltage Division Waveforms (High kV vs Divided V)
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <line x1="30" y1="70" x2="330" y2="70" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
          {/* Primary High Voltage Trace */}
          <path d="M30 70 Q70 20 110 70 T190 70 T270 70 T330 70" stroke="#F97316" strokeWidth="2" fill="none" />
          <text x="35" y="30" fill="#F97316" fontSize="8" fontFamily="monospace" fontWeight="bold">INPUT: 100.0 kV PEAK (AC 50 Hz)</text>

          {/* Divided Output Voltage Trace (Perfect Phase Lock) */}
          <path d="M30 70 Q70 45 110 70 T190 70 T270 70 T330 70" stroke="#A855F7" strokeWidth="2" fill="none" />
          <text x="35" y="115" fill="#A855F7" fontSize="8" fontFamily="monospace" fontWeight="bold">DIVIDED OUTPUT: 10.00 V PEAK (ZERO PHASE SHIFT)</text>
        </svg>
      );
    default:
      // Digital Kilovoltmeter Metrology Screen
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <rect x="30" y="20" width="300" height="95" rx="8" fill="rgba(0,0,0,0.8)" stroke="#A855F7" strokeWidth="1.5" />
          <text x="45" y="42" fill="#94A3B8" fontSize="8" fontFamily="monospace">HVTI DIGITAL KILOVOLTMETER // NABL TRACEABLE</text>

          <text x="45" y="75" fill="#34D399" fontSize="22" fontFamily="monospace" fontWeight="bold">72.48 kV</text>
          <text x="175" y="72" fill="#34D399" fontSize="10" fontFamily="monospace">TRUE RMS</text>

          <text x="45" y="98" fill="#F97316" fontSize="9" fontFamily="monospace">PEAK: 102.5 kV</text>
          <text x="150" y="98" fill="#E2E8F0" fontSize="9" fontFamily="monospace">CREST: 1.414</text>
          <text x="245" y="98" fill="#A855F7" fontSize="9" fontFamily="monospace">THD: 0.42%</text>

          <rect x="235" y="30" width="85" height="20" rx="4" fill="rgba(52,211,153,0.15)" stroke="#34D399" />
          <text x="277" y="43" fill="#34D399" fontSize="7.5" fontFamily="monospace" textAnchor="middle">ACCURACY ±0.5%</text>
        </svg>
      );
  }
}

// 3. Current Injection & Protection Testing Telemetry
function CurrentInjectionTelemetry({ stepIndex }: { stepIndex: number }) {
  switch (stepIndex) {
    case 0:
      // Primary High-Current Busbar Loop Setup
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <rect x="25" y="30" width="90" height="75" rx="8" fill="rgba(249,115,22,0.1)" stroke="#F97316" strokeWidth="1.5" />
          <text x="70" y="55" fill="#FFFFFF" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PCIT INJECTOR</text>
          <text x="70" y="70" fill="#F97316" fontSize="8" fontFamily="monospace" textAnchor="middle">0 - 5000 A</text>
          <text x="70" y="85" fill="#34D399" fontSize="7.5" fontFamily="monospace" textAnchor="middle">VARIAC READY</text>

          {/* Heavy Copper Leads */}
          <path d="M115 50 L245 50" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
          <circle cx="180" cy="50" r="4" fill="#F97316" className="animate-ping" />
          <text x="180" y="40" fill="#F97316" fontSize="7.5" fontFamily="monospace" textAnchor="middle">HEAVY COPPER BUSBAR</text>

          <rect x="245" y="30" width="90" height="75" rx="8" fill="rgba(168,85,247,0.1)" stroke="#A855F7" strokeWidth="1.5" />
          <text x="290" y="55" fill="#FFFFFF" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">CT & BREAKER</text>
          <text x="290" y="70" fill="#A855F7" fontSize="8" fontFamily="monospace" textAnchor="middle">PRIMARY POLES</text>

          <path d="M115 90 L245 90" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
          <text x="180" y="105" fill="#94A3B8" fontSize="7.5" fontFamily="monospace" textAnchor="middle">CURRENT RETURN LOOP</text>
        </svg>
      );
    case 1:
      // Injection Preset & Trigger Thresholds
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <rect x="30" y="20" width="300" height="95" rx="8" fill="rgba(0,0,0,0.8)" stroke="#F97316" strokeWidth="1.5" />
          <text x="45" y="42" fill="#94A3B8" fontSize="8" fontFamily="monospace">INJECTION PARAMETER CONTROLLER</text>

          <text x="45" y="70" fill="#F97316" fontSize="16" fontFamily="monospace" fontWeight="bold">I_SET: 2000 A</text>
          <text x="180" y="70" fill="#34D399" fontSize="11" fontFamily="monospace">MODE: MOMENTARY</text>

          <text x="45" y="95" fill="#E2E8F0" fontSize="8" fontFamily="monospace">TIMER SENSE: DRY CONTACT AUTO-STOP</text>
          <text x="230" y="95" fill="#A855F7" fontSize="8" fontFamily="monospace">DUTY: 30s ON / 5m OFF</text>
        </svg>
      );
    case 2:
      // Primary High Current Pulse & Exact Trip Time Milliseconds
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <line x1="30" y1="110" x2="330" y2="110" stroke="rgba(255,255,255,0.15)" />
          <line x1="30" y1="110" x2="30" y2="20" stroke="rgba(255,255,20,0.15)" />

          {/* High Current Injection Pulse */}
          <path d="M30 110 L80 110 L85 35 L200 35 L202 110 L330 110" stroke="#F97316" strokeWidth="2.5" fill="none" />
          <text x="140" y="28" fill="#F97316" fontSize="8" fontFamily="monospace" fontWeight="bold">INJECTED: 1850 A RMS</text>

          {/* Trip Contact Separation Instant */}
          <line x1="200" y1="20" x2="200" y2="120" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="200" cy="35" r="4" fill="#EF4444" className="animate-ping" />
          <text x="205" y="60" fill="#EF4444" fontSize="8" fontFamily="monospace" fontWeight="bold">TRIP INSTANT</text>

          {/* Measured Time */}
          <rect x="210" y="75" width="110" height="26" rx="5" fill="rgba(52,211,153,0.15)" stroke="#34D399" />
          <text x="265" y="92" fill="#34D399" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">t_trip = 38.4 ms</text>
        </svg>
      );
    default:
      // IEC 60255 Protection Time-Current Curve Verification
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <line x1="30" y1="115" x2="330" y2="115" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="30" y1="115" x2="30" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

          {/* Standard Inverse-Time Curve */}
          <path d="M40 30 Q80 80 180 100 T320 110" stroke="#A855F7" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          <text x="325" y="100" fill="#A855F7" fontSize="7" fontFamily="monospace" textAnchor="end">IEC 60255 CURVE</text>

          {/* Measured Point within Tolerance */}
          <circle cx="160" cy="95" r="5" fill="#34D399" stroke="#FFFFFF" strokeWidth="1.5" className="animate-pulse" />
          <text x="160" y="85" fill="#34D399" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">MEASURED (38.4 ms / 1850 A)</text>

          {/* Pass Banner */}
          <rect x="180" y="25" width="140" height="26" rx="5" fill="rgba(16,185,129,0.15)" stroke="#10B981" />
          <text x="250" y="42" fill="#10B981" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">TRIP COORDINATION: PASS</text>
        </svg>
      );
  }
}

// 4. Circuit Breaker Testing & Analysis Telemetry
function CircuitBreakerTelemetry({ stepIndex }: { stepIndex: number }) {
  switch (stepIndex) {
    case 0:
      // 4-Wire Kelvin Micro-Ohm Contact Resistance (DRM-1A) & 12-Channel Harness
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <rect x="25" y="25" width="95" height="85" rx="8" fill="rgba(249,115,22,0.1)" stroke="#F97316" strokeWidth="1.5" />
          <text x="72" y="48" fill="#FFFFFF" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">DRM-1A OHMMETER</text>
          <text x="72" y="65" fill="#34D399" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">18.2 µΩ</text>
          <text x="72" y="82" fill="#F97316" fontSize="7.5" fontFamily="monospace" textAnchor="middle">100A DC TEST I</text>
          <text x="72" y="96" fill="#94A3B8" fontSize="7" fontFamily="monospace" textAnchor="middle">4-WIRE KELVIN</text>

          <path d="M120 45 L245 45" stroke="#F97316" strokeWidth="1.5" />
          <path d="M120 60 L245 60" stroke="#F97316" strokeWidth="1.5" />
          <path d="M120 75 L245 75" stroke="#34D399" strokeWidth="1.5" />
          <path d="M120 90 L245 90" stroke="#34D399" strokeWidth="1.5" />

          <rect x="245" y="25" width="95" height="85" rx="8" fill="rgba(168,85,247,0.1)" stroke="#A855F7" strokeWidth="1.5" />
          <text x="292" y="48" fill="#FFFFFF" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">BREAKER POLE</text>
          <text x="292" y="65" fill="#A855F7" fontSize="8" fontFamily="monospace" textAnchor="middle">MAIN CONTACTS</text>
          <text x="292" y="80" fill="#34D399" fontSize="7.5" fontFamily="monospace" textAnchor="middle">12-CH TIMING LINK</text>
          <text x="292" y="96" fill="#94A3B8" fontSize="7" fontFamily="monospace" textAnchor="middle">R_contact: OK</text>
        </svg>
      );
    case 1:
      // Travel Transducer Velocity Calibration & Coil Control Wiring
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <line x1="30" y1="110" x2="330" y2="110" stroke="rgba(255,255,255,0.15)" />
          <line x1="30" y1="110" x2="30" y2="20" stroke="rgba(255,255,255,0.15)" />

          {/* Stroke Travel Curve */}
          <path d="M30 110 Q90 105 130 50 L270 45" stroke="#A855F7" strokeWidth="2.2" fill="none" />
          <text x="140" y="38" fill="#A855F7" fontSize="8" fontFamily="monospace" fontWeight="bold">STROKE: 105 mm (TRAVEL TRANSDUCER)</text>

          {/* Coil Current Trigger Signal */}
          <path d="M30 110 L90 110 L95 80 L140 85 L145 110 L330 110" stroke="#F97316" strokeWidth="1.5" fill="none" />
          <text x="100" y="72" fill="#F97316" fontSize="7.5" fontFamily="monospace">TRIP COIL: 4.8 A</text>
        </svg>
      );
    case 2:
      // C, O, C-O, O-C-O Operating Sequence Oscillogram
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          {/* Phase A */}
          <text x="30" y="38" fill="#94A3B8" fontSize="7.5" fontFamily="monospace">PHASE A</text>
          <path d="M80 35 L140 35 L142 50 L250 50 L252 35 L330 35" stroke="#F97316" strokeWidth="2" fill="none" />

          {/* Phase B */}
          <text x="30" y="70" fill="#94A3B8" fontSize="7.5" fontFamily="monospace">PHASE B</text>
          <path d="M80 67 L141 67 L143 82 L251 82 L253 67 L330 67" stroke="#34D399" strokeWidth="2" fill="none" />

          {/* Phase C */}
          <text x="30" y="102" fill="#94A3B8" fontSize="7.5" fontFamily="monospace">PHASE C</text>
          <path d="M80 99 L142 99 L144 114 L252 114 L254 99 L330 99" stroke="#A855F7" strokeWidth="2" fill="none" />

          <text x="195" y="24" fill="#E2E8F0" fontSize="8" fontFamily="monospace" textAnchor="middle">OPEN - CLOSE - OPEN (O-C-O) TIMING PULSE</text>
        </svg>
      );
    default:
      // 12-Channel Contact Timing, Velocity Profile & Bounce Verification
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <rect x="30" y="20" width="300" height="95" rx="8" fill="rgba(0,0,0,0.8)" stroke="#A855F7" strokeWidth="1.5" />
          <text x="45" y="42" fill="#94A3B8" fontSize="8" fontFamily="monospace">SA-SERIES DYNAMIC BREAKER ANALYZER</text>

          <text x="45" y="68" fill="#34D399" fontSize="13" fontFamily="monospace" fontWeight="bold">OPEN TIME: 24.2 ms</text>
          <text x="210" y="68" fill="#F97316" fontSize="13" fontFamily="monospace" fontWeight="bold">CLOSE: 52.8 ms</text>

          <text x="45" y="92" fill="#E2E8F0" fontSize="8" fontFamily="monospace">SYNC DISCREPANCY: 0.8 ms (&lt; 2.0 ms PASS)</text>
          <text x="45" y="105" fill="#A855F7" fontSize="8" fontFamily="monospace">CONTACT BOUNCE: 1.1 ms | VELOCITY: 2.42 m/s</text>

          <rect x="235" y="80" width="85" height="24" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10B981" />
          <text x="277" y="96" fill="#10B981" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">IEC 62271 PASS</text>
        </svg>
      );
  }
}

// 5. Partial Discharge Solutions Telemetry
function PDTelemetry({ stepIndex }: { stepIndex: number }) {
  switch (stepIndex) {
    case 0:
      // Multi-Sensor Live Acoustic & HFCT Detection Matrix
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <rect x="25" y="30" width="90" height="75" rx="8" fill="rgba(249,115,22,0.1)" stroke="#F97316" strokeWidth="1.5" />
          <text x="70" y="52" fill="#FFFFFF" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ULD-40 ACOUSTIC</text>
          <text x="70" y="68" fill="#F97316" fontSize="8" fontFamily="monospace" textAnchor="middle">40 kHz ULTRASONIC</text>
          <text x="70" y="84" fill="#34D399" fontSize="7.5" fontFamily="monospace" textAnchor="middle">LASER AIMED</text>

          <circle cx="180" cy="67" r="28" stroke="#A855F7" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
          <circle cx="180" cy="67" r="8" fill="#F97316" className="animate-ping" />
          <circle cx="180" cy="67" r="4" fill="#F97316" />
          <text x="180" y="30" fill="#E2E8F0" fontSize="7.5" fontFamily="monospace" textAnchor="middle">LIVE ASSET PD ACTIVITY</text>

          <rect x="245" y="30" width="90" height="75" rx="8" fill="rgba(52,211,153,0.1)" stroke="#34D399" strokeWidth="1.5" />
          <text x="290" y="52" fill="#FFFFFF" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">HFCT SENSOR</text>
          <text x="290" y="68" fill="#34D399" fontSize="8" fontFamily="monospace" textAnchor="middle">100 kHz - 50 MHz</text>
          <text x="290" y="84" fill="#94A3B8" fontSize="7.5" fontFamily="monospace" textAnchor="middle">SPLIT-CORE LATCH</text>
        </svg>
      );
    case 1:
      // Phase-Resolved PRPD Pattern Analysis (Void vs Corona)
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          {/* Reference Sine Wave */}
          <path d="M30 70 Q105 15 180 70 T330 70" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" fill="none" />
          <text x="35" y="28" fill="#FFF" fontSize="8" fontFamily="monospace">PRPD CLUSTER: INTERNAL VOID DISCHARGE</text>

          {/* Positive Half-Cycle Discharge Cluster */}
          <circle cx="85" cy="40" r="2" fill="#F97316" opacity="0.9" />
          <circle cx="95" cy="34" r="2.5" fill="#F97316" opacity="0.8" />
          <circle cx="105" cy="38" r="2" fill="#F97316" opacity="0.95" />
          <circle cx="115" cy="45" r="3" fill="#F97316" opacity="0.7" />
          <circle cx="125" cy="52" r="2" fill="#F97316" opacity="0.85" />

          {/* Negative Half-Cycle Discharge Cluster */}
          <circle cx="235" cy="100" r="2" fill="#A855F7" opacity="0.9" />
          <circle cx="245" cy="106" r="2.5" fill="#A855F7" opacity="0.8" />
          <circle cx="255" cy="102" r="2" fill="#A855F7" opacity="0.95" />
          <circle cx="265" cy="95" r="3" fill="#A855F7" opacity="0.7" />

          <text x="325" y="28" fill="#F97316" fontSize="7.5" fontFamily="monospace" textAnchor="end">q_max: 320 pC</text>
        </svg>
      );
    case 2:
      // AE-150 3D Acoustic Sensor Triangulation
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <circle cx="180" cy="70" r="50" stroke="rgba(168,85,247,0.2)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="180" cy="70" r="30" stroke="rgba(249,115,22,0.3)" strokeWidth="1" strokeDasharray="2 2" />

          <rect x="115" y="25" width="20" height="12" rx="3" fill="#A855F7" />
          <text x="125" y="34" fill="#FFF" fontSize="6.5" fontFamily="monospace" textAnchor="middle">S1</text>

          <rect x="225" y="25" width="20" height="12" rx="3" fill="#A855F7" />
          <text x="235" y="34" fill="#FFF" fontSize="6.5" fontFamily="monospace" textAnchor="middle">S2</text>

          <rect x="170" y="115" width="20" height="12" rx="3" fill="#A855F7" />
          <text x="180" y="124" fill="#FFF" fontSize="6.5" fontFamily="monospace" textAnchor="middle">S3</text>

          <line x1="125" y1="37" x2="185" y2="65" stroke="#A855F7" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="235" y1="37" x2="185" y2="65" stroke="#A855F7" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="180" y1="115" x2="185" y2="65" stroke="#A855F7" strokeWidth="1" strokeDasharray="2 2" />

          <circle cx="185" cy="65" r="7" fill="rgba(249,115,22,0.3)" className="animate-ping" />
          <circle cx="185" cy="65" r="3.5" fill="#F97316" />
          <text x="198" y="68" fill="#F97316" fontSize="8" fontFamily="monospace" fontWeight="bold">FAULT: X:142 Y:89 Z:210</text>
        </svg>
      );
    default:
      // Severity Trend & Official IEC 60270 Pass
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <line x1="30" y1="25" x2="330" y2="25" stroke="#EF4444" strokeWidth="1" strokeDasharray="3 3" />
          <text x="325" y="20" fill="#EF4444" fontSize="7.5" fontFamily="monospace" textAnchor="end">MAX IEC THRESHOLD (500 pC)</text>

          <rect x="30" y="55" width="280" height="12" rx="6" fill="rgba(255,255,255,0.06)" />
          <rect x="30" y="55" width="160" height="12" rx="6" fill="url(#pdBarGrad)" />

          <text x="35" y="48" fill="#34D399" fontSize="8" fontFamily="monospace">MEASURED APPARENT CHARGE: 280 pC (ACCEPTABLE)</text>

          <rect x="110" y="90" width="140" height="26" rx="5" fill="rgba(16,185,129,0.15)" stroke="#10B981" />
          <text x="180" y="107" fill="#10B981" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">IEC 60270 DIAGNOSTIC PASS</text>

          <defs>
            <linearGradient id="pdBarGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="70%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
        </svg>
      );
  }
}

// 6. Transformer Testing & Diagnostics Telemetry
function TransformerTelemetry({ stepIndex }: { stepIndex: number }) {
  switch (stepIndex) {
    case 0:
      // Dual Path Assessment Selector (Electrical Bushing vs Oil Vessel)
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <rect x="25" y="25" width="140" height="90" rx="8" fill="rgba(249,115,22,0.1)" stroke="#F97316" strokeWidth="1.5" />
          <text x="95" y="45" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ELECTRICAL TESTS</text>
          <text x="95" y="62" fill="#F97316" fontSize="7.5" fontFamily="monospace" textAnchor="middle">ART-3D TURNS RATIO</text>
          <text x="95" y="76" fill="#34D399" fontSize="7.5" fontFamily="monospace" textAnchor="middle">WRT-10D WINDING OHM</text>
          <text x="95" y="90" fill="#A855F7" fontSize="7.5" fontFamily="monospace" textAnchor="middle">CTTx2 / CTTx5 CT SET</text>
          <rect x="50" y="98" width="90" height="12" rx="3" fill="rgba(52,211,153,0.2)" />
          <text x="95" y="107" fill="#34D399" fontSize="7" fontFamily="monospace" textAnchor="middle">ACTIVE CHANNEL 1</text>

          <rect x="195" y="25" width="140" height="90" rx="8" fill="rgba(168,85,247,0.1)" stroke="#A855F7" strokeWidth="1.5" />
          <text x="265" y="45" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">OIL DIELECTRIC TESTS</text>
          <text x="265" y="62" fill="#A855F7" fontSize="7.5" fontFamily="monospace" textAnchor="middle">OTS BDV (0-100 kV)</text>
          <text x="265" y="76" fill="#38BDF8" fontSize="7.5" fontFamily="monospace" textAnchor="middle">VM-III MOISTURE (PPM)</text>
          <text x="265" y="90" fill="#F472B6" fontSize="7.5" fontFamily="monospace" textAnchor="middle">IFT INTERFACIAL TENSION</text>
          <rect x="220" y="98" width="90" height="12" rx="3" fill="rgba(168,85,247,0.2)" />
          <text x="265" y="107" fill="#C084FC" fontSize="7" fontFamily="monospace" textAnchor="middle">VESSEL READY</text>
        </svg>
      );
    case 1:
      // Kelvin 4-Wire Bushing Interface & 2.5mm Oil Cell Gap
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          {/* 3-Phase Transformer Bushing Array */}
          <rect x="25" y="25" width="170" height="90" rx="8" fill="rgba(0,0,0,0.6)" stroke="#F97316" strokeWidth="1.5" />
          <text x="110" y="42" fill="#94A3B8" fontSize="7.5" fontFamily="monospace" textAnchor="middle">4-WIRE KELVIN BUSHING INTERFACE</text>

          <circle cx="55" cy="65" r="8" fill="#F97316" />
          <text x="55" y="68" fill="#FFF" fontSize="7" fontFamily="monospace" textAnchor="middle">H1</text>
          <circle cx="110" cy="65" r="8" fill="#34D399" />
          <text x="110" y="68" fill="#FFF" fontSize="7" fontFamily="monospace" textAnchor="middle">H2</text>
          <circle cx="165" cy="65" r="8" fill="#38BDF8" />
          <text x="165" y="68" fill="#FFF" fontSize="7" fontFamily="monospace" textAnchor="middle">H3</text>

          <text x="110" y="92" fill="#E2E8F0" fontSize="7" fontFamily="monospace" textAnchor="middle">AUTO VECTOR: Dyn11 / YNd11</text>
          <text x="110" y="105" fill="#34D399" fontSize="6.5" fontFamily="monospace" textAnchor="middle">4-LEAD KELVIN BRIDGE COMPENSATED</text>

          {/* Oil Test Cell 2.5mm Gap */}
          <rect x="210" y="25" width="125" height="90" rx="8" fill="rgba(168,85,247,0.1)" stroke="#A855F7" strokeWidth="1.5" />
          <text x="272" y="42" fill="#C084FC" fontSize="7.5" fontFamily="monospace" textAnchor="middle">IEC 60156 TEST CELL</text>
          
          <rect x="235" y="55" width="25" height="30" rx="2" fill="#A855F7" />
          <rect x="285" y="55" width="25" height="30" rx="2" fill="#A855F7" />
          <line x1="260" y1="70" x2="285" y2="70" stroke="#F97316" strokeWidth="2" strokeDasharray="2 2" />
          <text x="272" y="65" fill="#F97316" fontSize="7" fontFamily="monospace" textAnchor="middle">2.5 mm</text>
          <text x="272" y="102" fill="#34D399" fontSize="6.5" fontFamily="monospace" textAnchor="middle">MAGNETIC STIRRER ON</text>
        </svg>
      );
    case 2:
      // Excitation Ramp, Knee-Point Curve & Breakdown Spark
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <line x1="30" y1="115" x2="330" y2="115" stroke="rgba(255,255,255,0.15)" />
          <line x1="30" y1="115" x2="30" y2="20" stroke="rgba(255,255,255,0.15)" />

          {/* CT Knee Point V/I Curve */}
          <path d="M30 115 L60 80 Q100 45 160 38 L300 32" stroke="#F97316" strokeWidth="2.2" fill="none" />
          <circle cx="120" cy="42" r="4" fill="#F97316" className="animate-pulse" />
          <text x="120" y="30" fill="#F97316" fontSize="8" fontFamily="monospace" fontWeight="bold">KNEE POINT: 240 V / 0.12 A</text>

          {/* Oil BDV Breakdown Voltage Spark */}
          <path d="M190 115 L220 90 L240 60 L260 25" stroke="#38BDF8" strokeWidth="1.8" strokeDasharray="3 3" />
          <polygon points="260,25 255,35 265,33" fill="#38BDF8" />
          <circle cx="260" cy="25" r="5" fill="#38BDF8" className="animate-ping" />
          <text x="260" y="18" fill="#38BDF8" fontSize="7.5" fontFamily="monospace" textAnchor="middle">BDV BREAKDOWN: 74.8 kV</text>

          <text x="45" y="105" fill="#34D399" fontSize="7.5" fontFamily="monospace">WRT-10D: 10A DC DEMAG CYCLE COMPLETE</text>
        </svg>
      );
    default:
      // IEEE C57 / IEC 60076 Health Assessment Certificate
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <rect x="30" y="20" width="300" height="98" rx="8" fill="rgba(0,0,0,0.85)" stroke="#10B981" strokeWidth="1.5" />
          <text x="45" y="38" fill="#94A3B8" fontSize="8" fontFamily="monospace">TRANSFORMER COMPREHENSIVE HEALTH REPORT</text>

          <text x="45" y="60" fill="#34D399" fontSize="11" fontFamily="monospace" fontWeight="bold">TURNS RATIO: 22.450 : 1</text>
          <text x="210" y="60" fill="#34D399" fontSize="9" fontFamily="monospace">ERR: 0.04% (&lt;0.5% PASS)</text>

          <text x="45" y="78" fill="#F97316" fontSize="10" fontFamily="monospace">WINDING R: 1.428 mΩ</text>
          <text x="210" y="78" fill="#F97316" fontSize="9" fontFamily="monospace">PHASE BAL: 0.4% PASS</text>

          <text x="45" y="96" fill="#38BDF8" fontSize="10" fontFamily="monospace">OIL BDV: 74.8 kV</text>
          <text x="145" y="96" fill="#A855F7" fontSize="9" fontFamily="monospace">MOISTURE: 12 ppm</text>
          <text x="245" y="96" fill="#F472B6" fontSize="9" fontFamily="monospace">IFT: 42 mN/m</text>

          <rect x="235" y="28" width="85" height="18" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10B981" />
          <text x="277" y="40" fill="#10B981" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">IEEE / IEC PASS</text>
        </svg>
      );
  }
}

// 7. Cable Fault Location & Testing Telemetry
function CableFaultTelemetry({ stepIndex }: { stepIndex: number }) {
  switch (stepIndex) {
    case 0:
      // TDR Transmitter Connection to Shielded Cable
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <rect x="25" y="25" width="100" height="90" rx="8" fill="rgba(249,115,22,0.1)" stroke="#F97316" strokeWidth="1.5" />
          <text x="75" y="48" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">TDR-3000 UNIT</text>
          <text x="75" y="65" fill="#F97316" fontSize="8" fontFamily="monospace" textAnchor="middle">PULSE: 100 ns</text>
          <text x="75" y="80" fill="#34D399" fontSize="7.5" fontFamily="monospace" textAnchor="middle">VoP: 80.4 m/µs</text>
          <text x="75" y="96" fill="#94A3B8" fontSize="7" fontFamily="monospace" textAnchor="middle">AUTO-IMPEDANCE</text>

          <path d="M125 55 L230 55" stroke="#F97316" strokeWidth="2.5" />
          <circle cx="177" cy="55" r="3.5" fill="#F97316" className="animate-ping" />
          <text x="177" y="45" fill="#F97316" fontSize="7.5" fontFamily="monospace" textAnchor="middle">COAXIAL LEAD</text>

          <path d="M125 85 L230 85" stroke="#34D399" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="177" y="100" fill="#34D399" fontSize="7" fontFamily="monospace" textAnchor="middle">SHEATH EARTH</text>

          <rect x="230" y="25" width="105" height="90" rx="8" fill="rgba(168,85,247,0.1)" stroke="#A855F7" strokeWidth="1.5" />
          <text x="282" y="48" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">33 kV XLPE CABLE</text>
          <text x="282" y="65" fill="#A855F7" fontSize="8" fontFamily="monospace" textAnchor="middle">3-PHASE 240 mm²</text>
          <text x="282" y="80" fill="#EF4444" fontSize="7.5" fontFamily="monospace" textAnchor="middle">FAULT DETECTED</text>
          <text x="282" y="96" fill="#94A3B8" fontSize="7" fontFamily="monospace" textAnchor="middle">DE-ENERGIZED</text>
        </svg>
      );
    case 1:
      // Time Domain Reflectometry (TDR) Pulse Echo Distance-to-Fault
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <line x1="30" y1="75" x2="330" y2="75" stroke="rgba(255,255,255,0.15)" />
          
          {/* Incident Pulse at x=0 */}
          <path d="M30 75 L45 75 L50 25 L60 25 L65 75 L180 75" stroke="#F97316" strokeWidth="2" fill="none" />
          <text x="55" y="18" fill="#F97316" fontSize="7.5" fontFamily="monospace" textAnchor="middle">INCIDENT PULSE (0m)</text>

          {/* Reflected Pulse Spike at d=1420m */}
          <path d="M180 75 L190 75 L195 30 L205 30 L210 75 L330 75" stroke="#34D399" strokeWidth="2.5" fill="none" />
          <line x1="200" y1="20" x2="200" y2="125" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="200" cy="30" r="4" fill="#EF4444" className="animate-pulse" />
          
          <text x="200" y="18" fill="#EF4444" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">FAULT ECHO SPIKE</text>

          {/* Cursor Measurement Readout */}
          <rect x="70" y="95" width="220" height="28" rx="5" fill="rgba(0,0,0,0.8)" stroke="#34D399" />
          <text x="180" y="112" fill="#34D399" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">DISTANCE TO FAULT: 1,420.5 m</text>
        </svg>
      );
    case 2:
      // High Voltage Thumping & Acoustic Triangulation
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          {/* Ground Surface */}
          <line x1="30" y1="65" x2="330" y2="65" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <text x="40" y="55" fill="#94A3B8" fontSize="7.5" fontFamily="monospace">GROUND SURFACE</text>

          {/* Underground Cable with Fault Arc */}
          <line x1="30" y1="110" x2="330" y2="110" stroke="#F97316" strokeWidth="3" />
          <circle cx="190" cy="110" r="10" fill="rgba(249,115,22,0.3)" className="animate-ping" />
          <circle cx="190" cy="110" r="4" fill="#EF4444" />
          <text x="190" y="128" fill="#EF4444" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">32 kV THUMPER ARC (d=1420m)</text>

          {/* Ground Microphone Receiver */}
          <rect x="175" y="45" width="30" height="20" rx="3" fill="#34D399" />
          <text x="190" y="58" fill="#000" fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">MIC</text>
          <line x1="190" y1="65" x2="190" y2="110" stroke="#34D399" strokeWidth="1.5" strokeDasharray="2 2" />
          <text x="190" y="38" fill="#34D399" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">ACOUSTIC PINPOINT (Δt → 0)</text>
        </svg>
      );
    default:
      // Cable Joint Restored & DC Hipot Withstand Verified
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <rect x="30" y="20" width="300" height="98" rx="8" fill="rgba(0,0,0,0.85)" stroke="#34D399" strokeWidth="1.5" />
          <text x="45" y="40" fill="#94A3B8" fontSize="8" fontFamily="monospace">HV CABLE FAULT RESTORATION RECORD</text>

          <text x="45" y="65" fill="#34D399" fontSize="12" fontFamily="monospace" fontWeight="bold">SPLICE REPAIR COMPLETED</text>
          <text x="45" y="84" fill="#E2E8F0" fontSize="9" fontFamily="monospace">DC PROOF HIPOT: 45 kV DC (15 MINS)</text>
          <text x="45" y="98" fill="#F97316" fontSize="9" fontFamily="monospace">LEAKAGE CURRENT: 0.04 mA (&lt; 0.5 mA PASS)</text>

          <rect x="225" y="55" width="95" height="32" rx="5" fill="rgba(16,185,129,0.2)" stroke="#10B981" />
          <text x="272" y="74" fill="#10B981" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SERVICE RESTORED</text>
        </svg>
      );
  }
}

// 8. Specialized Electrical Testing Equipment Telemetry
function SpecializedTelemetry({ stepIndex }: { stepIndex: number }) {
  switch (stepIndex) {
    case 0:
      // Floating DC Battery Distribution Busbar (+110V / -110V)
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <line x1="30" y1="35" x2="330" y2="35" stroke="#EF4444" strokeWidth="2.5" />
          <text x="45" y="28" fill="#EF4444" fontSize="8" fontFamily="monospace" fontWeight="bold">+110 V DC BUS (POSITIVE)</text>

          <line x1="30" y1="70" x2="330" y2="70" stroke="#34D399" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="45" y="64" fill="#34D399" fontSize="7.5" fontFamily="monospace">STATION GROUND (0 V REFERENCE)</text>

          <line x1="30" y1="105" x2="330" y2="105" stroke="#38BDF8" strokeWidth="2.5" />
          <text x="45" y="98" fill="#38BDF8" fontSize="8" fontFamily="monospace" fontWeight="bold">-110 V DC BUS (NEGATIVE)</text>

          {/* Fault Indicator to Ground */}
          <line x1="260" y1="105" x2="260" y2="70" stroke="#F97316" strokeWidth="2" strokeDasharray="2 2" />
          <circle cx="260" cy="87" r="4" fill="#F97316" className="animate-ping" />
          <text x="260" y="125" fill="#F97316" fontSize="7.5" fontFamily="monospace" textAnchor="middle">GROUND FAULT ON NEGATIVE BUS</text>
        </svg>
      );
    case 1:
      // Low-Frequency Signal Injection & Directional Clamp Tracking
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          {/* 0.5 Hz Low Frequency Modulated Signal */}
          <path d="M30 60 Q75 25 120 60 T210 60 T300 60" stroke="#F97316" strokeWidth="2" fill="none" />
          <text x="35" y="25" fill="#F97316" fontSize="8" fontFamily="monospace" fontWeight="bold">GFL-T 0.5 Hz SAFE CODED PULSE (5 mA MAX)</text>

          {/* Dual Current Clamp with Direction Arrow */}
          <rect x="210" y="40" width="110" height="42" rx="6" fill="rgba(0,0,0,0.8)" stroke="#34D399" strokeWidth="1.5" />
          <text x="265" y="55" fill="#34D399" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">GFL-R DETECTOR</text>
          <text x="265" y="68" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" textAnchor="middle">FAULT PATH → [DOWNSTREAM]</text>
          <text x="265" y="78" fill="#F97316" fontSize="7.5" fontFamily="monospace" textAnchor="middle">R_fault: 14.2 kΩ</text>

          <text x="35" y="105" fill="#A855F7" fontSize="7.5" fontFamily="monospace">DTIM TIMER: ARMED (0.0001s RESOLUTION)</text>
        </svg>
      );
    case 2:
      // SF6 TP-ER100 Deep Vacuum & Gas Refill
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <line x1="30" y1="115" x2="330" y2="115" stroke="rgba(255,255,255,0.15)" />
          <line x1="30" y1="115" x2="30" y2="20" stroke="rgba(255,255,255,0.15)" />

          {/* Vacuum Depletion Curve */}
          <path d="M30 30 Q70 100 130 110 L330 110" stroke="#A855F7" strokeWidth="2.2" fill="none" />
          <circle cx="150" cy="110" r="3.5" fill="#A855F7" />
          <text x="150" y="98" fill="#A855F7" fontSize="8" fontFamily="monospace" fontWeight="bold">DEEP VACUUM: 0.45 mbar (&lt; 1 mbar)</text>

          {/* Regulated Refill Gauge */}
          <rect x="210" y="25" width="115" height="36" rx="5" fill="rgba(52,211,153,0.15)" stroke="#34D399" />
          <text x="267" y="42" fill="#34D399" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SF6 REFILL TO 6.0 BAR</text>
          <text x="267" y="53" fill="#E2E8F0" fontSize="7" fontFamily="monospace" textAnchor="middle">MOISTURE FREE &lt; 15 ppm</text>
        </svg>
      );
    default:
      // Substation Protection Ready & Balanced Verification
      return (
        <svg className="w-full h-36 sm:h-40" viewBox="0 0 360 140" fill="none">
          <rect x="30" y="20" width="300" height="98" rx="8" fill="rgba(0,0,0,0.85)" stroke="#34D399" strokeWidth="1.5" />
          <text x="45" y="38" fill="#94A3B8" fontSize="8" fontFamily="monospace">SPECIALIZED UTILITY DIAGNOSTIC VERIFICATION</text>

          <text x="45" y="60" fill="#34D399" fontSize="11" fontFamily="monospace" fontWeight="bold">DC BUS BALANCED: +110.1V / -110.0V</text>
          <text x="45" y="78" fill="#38BDF8" fontSize="10" fontFamily="monospace">DTIM TRIP TIME: 14.82 ms (±0.05% ACCURACY)</text>
          <text x="45" y="96" fill="#A855F7" fontSize="10" fontFamily="monospace">SF6 SYSTEM: 6.0 BAR (LEAK TIGHT)</text>

          <rect x="235" y="60" width="85" height="26" rx="4" fill="rgba(16,185,129,0.2)" stroke="#10B981" />
          <text x="277" y="76" fill="#10B981" fontSize="8.5" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SYSTEM OPERATIONAL</text>
        </svg>
      );
  }
}
