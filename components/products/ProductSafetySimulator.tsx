"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ProductData } from "@/types/product";
import HelmetProximitySimulator from "./HelmetProximitySimulator";

/* ================================================================
   HVTI PRODUCT SAFETY SIMULATOR: HIGH VOLTAGE DETECTOR MODEL TP-S9
   File: components/products/ProductSafetySimulator.tsx

   Unified Single-Viewport 3-Column Cockpit Layout:
   - Left Column (2 Cols): Voltage Selector Switchboard & Line State Breakers
   - Center Column (6 Cols): High-Fidelity SVG Canvas & Telescopic Extension Controls
   - Right Column (4 Cols): Hardware Strobe Verification & Technical Telemetry
   - Ergonomic Proportions: Slender yellow composite stick, compact TP-S9 unit
   ================================================================ */

interface VoltageOption {
  label: string;
  value: number;
  unit: string;
  category: string;
  description: string;
}

const VOLTAGE_OPTIONS: VoltageOption[] = [
  { label: "11 kV", value: 11, unit: "kV", category: "Distribution Feeder", description: "11 kV distribution line" },
  { label: "33 kV", value: 33, unit: "kV", category: "Substation Incomer", description: "33 kV primary distribution busbar" },
  { label: "66 kV", value: 66, unit: "kV", category: "Sub-Transmission", description: "66 kV regional feeder line" },
  { label: "132 kV", value: 132, unit: "kV", category: "Grid Transmission", description: "132 kV transmission circuit" },
  { label: "220 kV", value: 220, unit: "kV", category: "Bulk Transmission", description: "220 kV regional interconnector" },
  { label: "400 kV", value: 400, unit: "kV", category: "Extra High Voltage (EHV)", description: "400 kV national grid line" },
  { label: "765 kV", value: 765, unit: "kV", category: "Ultra High Voltage (UHV)", description: "765 kV super-grid transmission line" },
];

export default function ProductSafetySimulator({
  product,
}: {
  product: ProductData;
}) {
  const config = product.safetySimulator;

  if (config?.type === "proximity" || product.slug === "helmet-mounted-voltage-detector") {
    return <HelmetProximitySimulator product={product} />;
  }

  const voltageList = config?.voltageOptions || VOLTAGE_OPTIONS;

  // Simulation Controls & States
  const [isLineEnergized, setIsLineEnergized] = useState<boolean>(true);
  const [selectedVoltage, setSelectedVoltage] = useState<number>(
    config?.defaultVoltage || 33
  );
  // Default to 0% (retracted compact stick far below wire)
  const [stickElevationPct, setStickElevationPct] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [isAutoTesting, setIsAutoTesting] = useState<boolean>(false);
  const [isSelfTesting, setIsSelfTesting] = useState<boolean>(false);
  const [selfTestSuccess, setSelfTestSuccess] = useState<boolean>(true);

  // Audio References
  const audioCtxRef = useRef<AudioContext | null>(null);
  const buzzerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoTestRafRef = useRef<number | null>(null);
  const selfTestTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentVoltageObj =
    voltageList.find((v) => v.value === selectedVoltage) || voltageList[1];

  // Contact condition:
  // Hook probe touches the overhead conductor when stickElevationPct >= 92%
  const isTouchingLine = stickElevationPct >= 92;

  // Core Product Verification States:
  // 1. LIVE: Touching line AND line is energized
  const isVoltageDetectedLive = isTouchingLine && isLineEnergized;
  // 2. DEAD: Touching line AND line is de-energized
  const isNoVoltageDetectedDead = isTouchingLine && !isLineEnergized;

  // Physical stick extension in meters
  // Retracted standard stick = 1.80 m; Extended with extension handles = up to 7.00 m
  const stickLengthMeters = (1.8 + (stickElevationPct / 100) * 5.2).toFixed(2);

  /* ==============================================================
     WEB AUDIO API SOUND GENERATOR
     ============================================================== */
  const initAudio = useCallback(() => {
    if (!audioCtxRef.current && typeof window !== "undefined") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  }, []);

  const playBuzzerBeep = useCallback(() => {
    if (!audioCtxRef.current || !soundEnabled) return;
    try {
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(2400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(2100, ctx.currentTime + 0.07);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // Audio autoplay fallback
    }
  }, [soundEnabled]);

  const playSelfTestChime = useCallback(() => {
    if (!audioCtxRef.current || !soundEnabled) return;
    try {
      const ctx = audioCtxRef.current;
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(1050, ctx.currentTime);
      osc1.frequency.setValueAtTime(1600, ctx.currentTime + 0.14);

      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(2100, ctx.currentTime + 0.14);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start(ctx.currentTime + 0.14);
      osc1.stop(ctx.currentTime + 0.4);
      osc2.stop(ctx.currentTime + 0.4);
    } catch {
      // Audio fallback
    }
  }, [soundEnabled]);

  // Handle active alarm beeping
  useEffect(() => {
    if (buzzerIntervalRef.current) {
      clearInterval(buzzerIntervalRef.current);
      buzzerIntervalRef.current = null;
    }

    if (soundEnabled && isVoltageDetectedLive) {
      playBuzzerBeep();
      buzzerIntervalRef.current = setInterval(() => {
        playBuzzerBeep();
      }, 130);
    }

    return () => {
      if (buzzerIntervalRef.current) {
        clearInterval(buzzerIntervalRef.current);
        buzzerIntervalRef.current = null;
      }
    };
  }, [isVoltageDetectedLive, soundEnabled, playBuzzerBeep]);

  /* ==============================================================
     AUTO-INSPECT ROUTINE
     ============================================================== */
  const handleToggleAutoTest = () => {
    if (isAutoTesting) {
      setIsAutoTesting(false);
      if (autoTestRafRef.current) {
        cancelAnimationFrame(autoTestRafRef.current);
      }
      return;
    }

    initAudio();
    setIsAutoTesting(true);
    let current = stickElevationPct;
    let direction = 1;
    let holdCounter = 0;

    const step = () => {
      if (direction === 1) {
        current += 0.85;
        if (current >= 100) {
          current = 100;
          holdCounter++;
          if (holdCounter > 120) {
            direction = -1;
            holdCounter = 0;
          }
        }
      } else {
        current -= 0.85;
        if (current <= 0) {
          current = 0;
          setStickElevationPct(0);
          setIsAutoTesting(false);
          return;
        }
      }

      setStickElevationPct(current);
      autoTestRafRef.current = requestAnimationFrame(step);
    };

    autoTestRafRef.current = requestAnimationFrame(step);
  };

  /* ==============================================================
     INBUILT PROVING UNIT (SELF-CHECK)
     ============================================================== */
  const handleTriggerSelfTest = () => {
    initAudio();
    setIsSelfTesting(true);
    setSelfTestSuccess(false);

    if (selfTestTimeoutRef.current) {
      clearTimeout(selfTestTimeoutRef.current);
    }

    selfTestTimeoutRef.current = setTimeout(() => {
      setSelfTestSuccess(true);
      playSelfTestChime();
      selfTestTimeoutRef.current = setTimeout(() => {
        setIsSelfTesting(false);
      }, 2200);
    }, 1000);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (buzzerIntervalRef.current) clearInterval(buzzerIntervalRef.current);
      if (autoTestRafRef.current) cancelAnimationFrame(autoTestRafRef.current);
      if (selfTestTimeoutRef.current) clearTimeout(selfTestTimeoutRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <section
      id="safety-simulator"
      className="relative w-full overflow-hidden bg-transparent py-12 sm:py-16 lg:py-20"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            SECTION HEADER (COMPACT & SLEEK)
            ======================================================== */}
        <div className="mb-8 text-center sm:mb-10">
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#A855F7]" />
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-[#A855F7]">
              {config?.badge || "Interactive Testing Simulator"}
            </span>
            <span className="h-[2px] w-8 bg-[#A855F7]" />
          </div>

          <h2 className="mx-auto max-w-[840px] font-heading text-[28px] font-bold leading-tight tracking-tight text-white sm:text-[34px] xl:text-[38px]">
            {config?.title || "Live vs. Dead Voltage Verification Simulator"}
          </h2>
        </div>

        {/* ========================================================
            3-COLUMN SINGLE VIEWPORT COCKPIT GRID
            - Left Column (2 Cols): Voltage Switchboard & Line State
            - Center Column (6 Cols): Canvas & Elevation Controls
            - Right Column (4 Cols): Strobe Indicator & Telemetry
            ======================================================== */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-5 xl:gap-6 items-start">
          {/* ======================================================
              LEFT COLUMN: VOLTAGE SELECTOR & LINE STATE BREAKER (2 COLS)
              ====================================================== */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#0B101B]/90 p-4 backdrop-blur-xl shadow-xl">
              {/* Tested Voltage Level Stack */}
              <div className="flex flex-col gap-2.5">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  Tested Voltage Level
                  <span className="block text-[9.5px] font-normal text-white/40">
                    (LT – 765 kV)
                  </span>
                </span>

                <div className="flex flex-col gap-1.5">
                  {voltageList.map((v) => {
                    const isSelected = selectedVoltage === v.value;
                    return (
                      <button
                        key={v.value}
                        type="button"
                        onClick={() => setSelectedVoltage(v.value)}
                        className={`group flex items-center justify-between rounded-xl px-3 py-2 text-left transition-all duration-200 ${
                          isSelected
                            ? "border border-[#A855F7]/60 bg-[#A855F7]/20 shadow-[0_0_14px_rgba(168,85,247,0.35)]"
                            : "border border-white/5 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.07]"
                        }`}
                      >
                        {/* Toggle Switch Track */}
                        <div
                          className={`relative h-4 w-7 rounded-full transition-colors duration-200 ${
                            isSelected ? "bg-[#A855F7]" : "bg-white/15"
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition-transform duration-200 ${
                              isSelected
                                ? "translate-x-3.5 shadow-[0_0_6px_#ffffff]"
                                : "translate-x-0.5"
                            }`}
                          />
                        </div>

                        {/* Voltage Label */}
                        <span
                          className={`font-mono text-[12px] font-bold transition-colors ${
                            isSelected ? "text-white" : "text-[#94A3B8] group-hover:text-white"
                          }`}
                        >
                          {v.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Overhead Line State Toggles */}
              <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#94A3B8]">
                  Overhead Line State
                </span>

                <div className="flex flex-col gap-2">
                  {/* Live Button */}
                  <button
                    type="button"
                    onClick={() => setIsLineEnergized(true)}
                    className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                      isLineEnergized
                        ? "border-red-500/60 bg-red-500/20 text-red-300 shadow-[0_0_18px_rgba(239,68,68,0.35)]"
                        : "border-white/5 bg-white/[0.03] text-[#94A3B8] hover:bg-white/[0.07] hover:text-white"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        isLineEnergized
                          ? "animate-pulse bg-red-500 shadow-[0_0_8px_#ef4444]"
                          : "bg-white/20"
                      }`}
                    />
                    Live (Energized)
                  </button>

                  {/* Dead Button */}
                  <button
                    type="button"
                    onClick={() => setIsLineEnergized(false)}
                    className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                      !isLineEnergized
                        ? "border-emerald-500/60 bg-emerald-500/20 text-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.35)]"
                        : "border-white/5 bg-white/[0.03] text-[#94A3B8] hover:bg-white/[0.07] hover:text-white"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        !isLineEnergized
                          ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
                          : "bg-white/20"
                      }`}
                    />
                    Dead
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================
              CENTER COLUMN: HIGH-FIDELITY SVG CANVAS & EXTENSION CONTROLS (6 COLS)
              ====================================================== */}
          <div className="flex flex-col gap-3 lg:col-span-6">
            {/* SVG Visualizer Canvas Container */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#060913] via-[#080E1D] to-[#04060B] shadow-2xl">
              {/* Technical Telemetry Overlays Top Left */}
              <div className="pointer-events-none absolute left-3 top-3 z-20 flex flex-col gap-1 sm:left-4 sm:top-4">
                <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-[#05070D]/90 px-2.5 py-1 text-[10.5px] font-medium text-[#94A3B8] backdrop-blur-md">
                  <span className="font-mono text-[#06B6D4]">LINE:</span>
                  <span className="text-white font-semibold">
                    {currentVoltageObj.label} {currentVoltageObj.category}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-[#05070D]/90 px-2.5 py-1 text-[10.5px] font-medium text-[#94A3B8] backdrop-blur-md">
                  <span className="font-mono text-[#FFD200]">YELLOW STICK:</span>
                  <span className="font-mono font-bold text-white">{stickLengthMeters} m Extended</span>
                </div>
              </div>

              {/* Status Pill Top Right */}
              <div className="pointer-events-none absolute right-3 top-3 z-20 sm:right-4 sm:top-4">
                {isVoltageDetectedLive ? (
                  <div className="flex items-center gap-2 rounded-full border border-red-500/60 bg-red-950/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-red-200 shadow-[0_0_20px_rgba(239,68,68,0.6)] backdrop-blur-md animate-pulse">
                    <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
                    VOLTAGE DETECTED: LINE IS LIVE
                  </div>
                ) : isNoVoltageDetectedDead ? (
                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/60 bg-emerald-950/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.5)] backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    NO VOLTAGE DETECTED: LINE IS DEAD
                  </div>
                ) : (
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-[#05070D]/85 px-3 py-1 text-[10.5px] font-medium text-[#94A3B8] backdrop-blur-md">
                    STANDBY — LIFT YELLOW STICK TO CONDUCTOR
                  </div>
                )}
              </div>

              {/* SVG Canvas (800 x 520) */}
              <svg
                viewBox="0 0 800 520"
                className="w-full h-auto select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Sky Gradient */}
                  <linearGradient id="simSkyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#060914" />
                    <stop offset="50%" stopColor="#0A1227" />
                    <stop offset="100%" stopColor="#0F1B38" />
                  </linearGradient>

                  {/* Ground Foundation Gradient */}
                  <linearGradient id="simGroundGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="15%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#05070D" />
                  </linearGradient>

                  {/* Glow Filters */}
                  <filter id="liveNeonGlow" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="6" result="blur1" />
                    <feGaussianBlur stdDeviation="12" result="blur2" />
                    <feMerge>
                      <feMergeNode in="blur2" />
                      <feMergeNode in="blur1" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="greenProvingGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* 1. Environment Background */}
                <rect x="0" y="0" width="800" height="430" fill="url(#simSkyGrad)" />
                <rect x="0" y="430" width="800" height="90" fill="url(#simGroundGrad)" />

                {/* Substation Ground Line */}
                <line x1="0" y1="430" x2="800" y2="430" stroke="#64748B" strokeWidth="2" />
                <line x1="0" y1="446" x2="800" y2="446" stroke="#334155" strokeWidth="1" strokeDasharray="6 6" />

                {/* Safety Warning Perimeter Stripes on Floor */}
                <g opacity="0.35">
                  <polygon points="320,431 335,431 325,445 310,445" fill="#FACC15" />
                  <polygon points="350,431 365,431 355,445 340,445" fill="#FACC15" />
                  <polygon points="380,431 395,431 385,445 370,445" fill="#FACC15" />
                  <polygon points="410,431 425,431 415,445 400,445" fill="#FACC15" />
                  <polygon points="440,431 455,431 445,445 430,445" fill="#FACC15" />
                  <polygon points="470,431 485,431 475,445 460,445" fill="#FACC15" />
                </g>

                {/* Height Scale on Left */}
                <g opacity="0.45">
                  <line x1="48" y1="430" x2="48" y2="70" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="36" y="94" fontSize="10" fontFamily="monospace" fill="#94A3B8" textAnchor="end">7.0 m</text>
                  <line x1="42" y1="90" x2="54" y2="90" stroke="#94A3B8" strokeWidth="1.5" />
                  <text x="36" y="204" fontSize="10" fontFamily="monospace" fill="#94A3B8" textAnchor="end">5.0 m</text>
                  <line x1="42" y1="200" x2="54" y2="200" stroke="#94A3B8" strokeWidth="1.5" />
                  <text x="36" y="314" fontSize="10" fontFamily="monospace" fill="#94A3B8" textAnchor="end">3.0 m</text>
                  <line x1="42" y1="310" x2="54" y2="310" stroke="#94A3B8" strokeWidth="1.5" />
                  <text x="36" y="414" fontSize="10" fontFamily="monospace" fill="#94A3B8" textAnchor="end">1.0 m</text>
                  <line x1="42" y1="410" x2="54" y2="410" stroke="#94A3B8" strokeWidth="1.5" />
                </g>

                {/* 2. Substation Steel Gantry Towers (Left and Right) */}
                {/* Left Tower */}
                <g opacity="0.32">
                  <line x1="75" y1="430" x2="75" y2="55" stroke="#64748B" strokeWidth="3.5" />
                  <line x1="120" y1="430" x2="120" y2="55" stroke="#64748B" strokeWidth="3.5" />
                  <line x1="75" y1="55" x2="120" y2="55" stroke="#64748B" strokeWidth="4" />
                  <line x1="75" y1="120" x2="120" y2="120" stroke="#475569" strokeWidth="2" />
                  <line x1="75" y1="195" x2="120" y2="195" stroke="#475569" strokeWidth="2" />
                  <line x1="75" y1="270" x2="120" y2="270" stroke="#475569" strokeWidth="2" />
                  <line x1="75" y1="355" x2="120" y2="355" stroke="#475569" strokeWidth="2" />
                  <line x1="75" y1="55" x2="120" y2="120" stroke="#334155" strokeWidth="1.2" />
                  <line x1="120" y1="55" x2="75" y2="120" stroke="#334155" strokeWidth="1.2" />
                  <line x1="75" y1="120" x2="120" y2="195" stroke="#334155" strokeWidth="1.2" />
                  <line x1="120" y1="120" x2="75" y2="195" stroke="#334155" strokeWidth="1.2" />
                  <line x1="75" y1="195" x2="120" y2="270" stroke="#334155" strokeWidth="1.2" />
                  <line x1="120" y1="195" x2="75" y2="270" stroke="#334155" strokeWidth="1.2" />
                  <g transform="translate(98, 55)">
                    <line x1="0" y1="0" x2="0" y2="35" stroke="#94A3B8" strokeWidth="2.2" />
                    <ellipse cx="0" cy="10" rx="9" ry="3.5" fill="#64748B" />
                    <ellipse cx="0" cy="18" rx="9" ry="3.5" fill="#64748B" />
                    <ellipse cx="0" cy="26" rx="9" ry="3.5" fill="#64748B" />
                  </g>
                </g>

                {/* Right Tower */}
                <g opacity="0.32">
                  <line x1="680" y1="430" x2="680" y2="55" stroke="#64748B" strokeWidth="3.5" />
                  <line x1="725" y1="430" x2="725" y2="55" stroke="#64748B" strokeWidth="3.5" />
                  <line x1="680" y1="55" x2="725" y2="55" stroke="#64748B" strokeWidth="4" />
                  <line x1="680" y1="120" x2="725" y2="120" stroke="#475569" strokeWidth="2" />
                  <line x1="680" y1="195" x2="725" y2="195" stroke="#475569" strokeWidth="2" />
                  <line x1="680" y1="270" x2="725" y2="270" stroke="#475569" strokeWidth="2" />
                  <line x1="680" y1="355" x2="725" y2="355" stroke="#475569" strokeWidth="2" />
                  <line x1="680" y1="55" x2="725" y2="120" stroke="#334155" strokeWidth="1.2" />
                  <line x1="725" y1="55" x2="680" y2="120" stroke="#334155" strokeWidth="1.2" />
                  <line x1="680" y1="120" x2="725" y2="195" stroke="#334155" strokeWidth="1.2" />
                  <line x1="725" y1="120" x2="680" y2="195" stroke="#334155" strokeWidth="1.2" />
                  <line x1="680" y1="195" x2="725" y2="270" stroke="#334155" strokeWidth="1.2" />
                  <line x1="725" y1="195" x2="680" y2="270" stroke="#334155" strokeWidth="1.2" />
                  <g transform="translate(702, 55)">
                    <line x1="0" y1="0" x2="0" y2="35" stroke="#94A3B8" strokeWidth="2.2" />
                    <ellipse cx="0" cy="10" rx="9" ry="3.5" fill="#64748B" />
                    <ellipse cx="0" cy="18" rx="9" ry="3.5" fill="#64748B" />
                    <ellipse cx="0" cy="26" rx="9" ry="3.5" fill="#64748B" />
                  </g>
                </g>

                {/* 3. Overhead Conductor Line (Center at Y = 90) */}
                {isLineEnergized && (
                  <path
                    d="M 98 90 Q 400 98 702 90"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="8"
                    opacity={isVoltageDetectedLive ? "0.7" : "0.22"}
                    filter="url(#liveNeonGlow)"
                  />
                )}
                <path
                  d="M 98 90 Q 400 98 702 90"
                  fill="none"
                  stroke={isLineEnergized ? (isVoltageDetectedLive ? "#EF4444" : "#F59E0B") : "#64748B"}
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* 4. Technician Avatar (Centered at X = 365, Y = 430) */}
                <g transform="translate(365, 430)">
                  {/* Ground Shadow */}
                  <ellipse cx="0" cy="-2" rx="30" ry="6" fill="#020617" opacity="0.9" />

                  {/* Dielectric Boots */}
                  <rect x="-16" y="-14" width="13" height="14" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="1.2" />
                  <rect x="3" y="-14" width="13" height="14" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="1.2" />
                  <rect x="-18" y="-5" width="16" height="5" rx="1.5" fill="#475569" />
                  <rect x="2" y="-5" width="16" height="5" rx="1.5" fill="#475569" />

                  {/* Lineman Trousers */}
                  <path d="M -15 -14 L -13 -54 L -2 -54 L -4 -14 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
                  <path d="M 3 -14 L 1 -54 L 12 -54 L 14 -14 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />

                  {/* Hi-Vis Orange Utility Jacket */}
                  <rect x="-16" y="-92" width="32" height="38" rx="4" fill="#EA580C" stroke="#C2410C" strokeWidth="1.2" />
                  <rect x="-16" y="-84" width="32" height="5" fill="#FEF08A" opacity="0.9" />
                  <rect x="-16" y="-70" width="32" height="5" fill="#FEF08A" opacity="0.9" />
                  <line x1="-7" y1="-92" x2="-7" y2="-54" stroke="#FEF08A" strokeWidth="3" opacity="0.9" />
                  <line x1="7" y1="-92" x2="7" y2="-54" stroke="#FEF08A" strokeWidth="3" opacity="0.9" />

                  {/* Head & Safety Helmet */}
                  <circle cx="0" cy="-101" r="8.5" fill="#FBBF24" />
                  <path
                    d="M -11 -105 C -11 -116 11 -116 11 -105 L 12 -102 L -12 -102 Z"
                    fill="#FACC15"
                    stroke="#CA8A04"
                    strokeWidth="1.2"
                  />
                  <rect x="-13" y="-102" width="26" height="3" rx="1.5" fill="#CA8A04" />
                  <path d="M -8 -102 L -6 -96 L 6 -96 L 8 -102 Z" fill="#0284C7" opacity="0.8" />

                  {/* Arms Reaching to the Right (Holding Slender Stick at X = 396 -> +31 in relative coords) */}
                  <path
                    d="M -12 -86 Q 10 -96 28 -87"
                    fill="none"
                    stroke="#EA580C"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 12 -86 Q 22 -95 34 -87"
                    fill="none"
                    stroke="#EA580C"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </g>

                {/* ====================================================
                    5. SLENDER BRIGHT SAFETY YELLOW TELESCOPIC HOT STICK & COMPACT TP-S9 UNIT
                    - Slender realistic composite rod (7px base, 5.6px / 4.2px / 3.2px extensions)
                    - Positioned at X = 396
                    - Grip position in hands at Y = 343
                    - Compact lower handle terminating at waist level Y = 368
                    - Compact Model TP-S9 detector unit (15px width, all-yellow Sunrise jaw)
                    - When elevation = 0%:
                        Top of stick is at Y = 265 (Tip of TP-S9 hook at Y = 243, compact standby!)
                    - When elevation = 100%:
                        Top of stick extends up to Y = 112 (Tip of TP-S9 hook touches wire at Y = 90!)
                    ==================================================== */}
                {(() => {
                  const stickX = 396;
                  const gripY = 343; // Position where hands hold the stick
                  const handleBottomY = 368; // Compact lower handle ending naturally at hip/waist

                  // At 0% (retracted), hook tip is at Y = 243 (clear air gap below wire)
                  // At 100% (extended), hook tip touches wire at Y = 90
                  const minTipY = 243; 
                  const maxTipY = 90;
                  const currentHookTipY = minTipY - (stickElevationPct / 100) * (minTipY - maxTipY);

                  // Compact TP-S9 unit height is ~22px
                  const detectorBaseDrumY = currentHookTipY + 22;

                  // Telescoping joint tops relative to elevation
                  const section1TopY = gripY - (gripY - (detectorBaseDrumY + 8)) * 0.35;
                  const section2TopY = gripY - (gripY - (detectorBaseDrumY + 8)) * 0.70;
                  const section3TopY = detectorBaseDrumY + 6; // Sunrise fitting attachment

                  return (
                    <g id="slender-yellow-hotstick-assembly">
                      {/* Section 0: Main Base Yellow Composite Tube (7px wide slender rod) */}
                      <rect
                        x={stickX - 3.5}
                        y={gripY - 20}
                        width={7}
                        height={handleBottomY - (gripY - 20)}
                        rx={2}
                        fill="#FFD200"
                        stroke="#B45309"
                        strokeWidth="1"
                      />
                      {/* Black Rubber Bottom Cap */}
                      <rect
                        x={stickX - 4.5}
                        y={handleBottomY - 2}
                        width={9}
                        height={4}
                        rx={1.5}
                        fill="#0F172A"
                        stroke="#334155"
                        strokeWidth="0.8"
                      />

                      {/* Black Handguard Safety Collar */}
                      <rect
                        x={stickX - 5}
                        y={gripY - 12}
                        width={10}
                        height={3.5}
                        rx={1}
                        fill="#0F172A"
                        stroke="#64748B"
                        strokeWidth="0.8"
                      />

                      {/* Telescoping Joint 1 Locking Collar */}
                      <rect
                        x={stickX - 4.5}
                        y={gripY - 24}
                        width={9}
                        height={5}
                        rx={1.2}
                        fill="#1E293B"
                        stroke="#0F172A"
                        strokeWidth="0.8"
                      />

                      {/* Section 1: Mid Telescoping Slender Yellow Tube (5.6px wide) */}
                      <rect
                        x={stickX - 2.8}
                        y={section1TopY}
                        width={5.6}
                        height={Math.max(3, (gripY - 20) - section1TopY)}
                        rx={1.5}
                        fill="#FFDA1A"
                        stroke="#B45309"
                        strokeWidth="0.8"
                      />
                      {/* Telescoping Joint 2 Collar */}
                      <rect
                        x={stickX - 3.8}
                        y={section1TopY - 2.5}
                        width={7.6}
                        height={4.5}
                        rx={1.2}
                        fill="#1E293B"
                        stroke="#0F172A"
                        strokeWidth="0.8"
                      />

                      {/* Section 2: Upper Telescoping Slender Yellow Tube (4.2px wide) */}
                      <rect
                        x={stickX - 2.1}
                        y={section2TopY}
                        width={4.2}
                        height={Math.max(3, section1TopY - section2TopY)}
                        rx={1.2}
                        fill="#FFE24D"
                        stroke="#B45309"
                        strokeWidth="0.8"
                      />
                      {/* Telescoping Joint 3 Collar */}
                      <rect
                        x={stickX - 3.2}
                        y={section2TopY - 2.5}
                        width={6.4}
                        height={4}
                        rx={1}
                        fill="#1E293B"
                        stroke="#0F172A"
                        strokeWidth="0.8"
                      />

                      {/* Section 3: Top Slender Yellow Rod (3.2px wide) */}
                      <rect
                        x={stickX - 1.6}
                        y={section3TopY}
                        width={3.2}
                        height={Math.max(3, section2TopY - section3TopY)}
                        rx={1}
                        fill="#FFEC80"
                        stroke="#B45309"
                        strokeWidth="0.8"
                      />

                      {/* Silver Universal Sunrise Connector Fitting */}
                      <rect
                        x={stickX - 2.5}
                        y={section3TopY - 2}
                        width={5}
                        height={4.5}
                        rx={1}
                        fill="#CBD5E1"
                        stroke="#475569"
                        strokeWidth="0.8"
                      />
                      <circle cx={stickX} cy={section3TopY + 0.5} r="1" fill="#0F172A" />

                      {/* ==============================================
                          COMPACT, HANDY MODEL TP-S9 DETECTOR UNIT
                          - All-yellow Sunrise U-Notch Jaw (Exact match to product)
                          - Flared yellow base drum housing (15px wide)
                          - Two raised ruby red dome lenses on left and right
                          - Center sensitivity dial knob
                          - Fluted yellow cylindrical shaft
                          ============================================== */}
                      <g transform={`translate(${stickX}, ${currentHookTipY})`}>
                        {/* 1. Flared Yellow Base Drum Housing (Compact 15px width) */}
                        <path
                          d="M -7.5 22 L 7.5 22 L 6 14 L -6 14 Z"
                          fill="#FFD200"
                          stroke="#CA8A04"
                          strokeWidth="0.8"
                        />
                        <rect
                          x="-8"
                          y="20.5"
                          width="16"
                          height="3"
                          rx="1"
                          fill="#EAB308"
                          stroke="#A16207"
                          strokeWidth="0.6"
                        />

                        {/* 2. Fluted Cylindrical Yellow Shaft */}
                        <rect
                          x="-3"
                          y="5"
                          width="6"
                          height="10"
                          rx="1.5"
                          fill="#FFD200"
                          stroke="#CA8A04"
                          strokeWidth="0.8"
                        />
                        <line x1="-1.5" y1="6.5" x2="-1.5" y2="13.5" stroke="#CA8A04" strokeWidth="0.6" />
                        <line x1="1.5" y1="6.5" x2="1.5" y2="13.5" stroke="#CA8A04" strokeWidth="0.6" />

                        {/* 3. Top Yellow Sunrise U-Notch Jaw (Exact match to product photo) */}
                        <path
                          d="M -3 5 L -3 -3 L -1.2 0 L 1.2 0 L 3 -3 L 3 5 Z"
                          fill="#FFD200"
                          stroke="#CA8A04"
                          strokeWidth="0.8"
                        />
                        {/* Serrated Sunrise Grip Teeth */}
                        <path
                          d="M -3 -1 L -4 -2 L -3 -3 L -1.5 0 L 1.5 0 L 3 -3 L 4 -2 L 3 -1 Z"
                          fill="#FFD200"
                          stroke="#B45309"
                          strokeWidth="0.6"
                        />

                        {/* 4. Face of Base Drum:
                            - 2 Ruby Red Dome Lenses (Left & Right)
                            - Central Rotary Dial
                        */}
                        <circle cx="0" cy="18" r="1.8" fill="#0F172A" stroke="#475569" strokeWidth="0.5" />
                        <line x1="0" y1="18" x2="0" y2="16.8" stroke="#FFFFFF" strokeWidth="0.5" />

                        {/* LEFT RED DOME LENS */}
                        <g transform="translate(-4.5, 18)">
                          <circle cx="0" cy="0" r="1.8" fill="#991B1B" stroke="#7F1D1D" strokeWidth="0.5" />
                          {isVoltageDetectedLive && (
                            <g>
                              <circle cx="0" cy="0" r="8" fill="#EF4444" opacity="0.8" filter="url(#liveNeonGlow)" />
                              <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" filter="url(#liveNeonGlow)" />
                              <circle cx="0" cy="0" r="1.8" fill="#EF4444" />
                            </g>
                          )}
                        </g>

                        {/* RIGHT RED DOME LENS */}
                        <g transform="translate(4.5, 18)">
                          <circle cx="0" cy="0" r="1.8" fill="#991B1B" stroke="#7F1D1D" strokeWidth="0.5" />
                          {isVoltageDetectedLive && (
                            <g>
                              <circle cx="0" cy="0" r="8" fill="#EF4444" opacity="0.8" filter="url(#liveNeonGlow)" />
                              <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" filter="url(#liveNeonGlow)" />
                              <circle cx="0" cy="0" r="1.8" fill="#EF4444" />
                            </g>
                          )}
                        </g>

                        {/* Proving Test Green Indicator */}
                        {(isNoVoltageDetectedDead || (isSelfTesting && selfTestSuccess)) && (
                          <g transform="translate(0, 21)">
                            <circle cx="0" cy="0" r="5" fill="#10B981" opacity="0.8" filter="url(#greenProvingGlow)" />
                            <circle cx="0" cy="0" r="1.8" fill="#10B981" />
                          </g>
                        )}

                        {/* Contact Arc Flash on Live Contact */}
                        {isVoltageDetectedLive && (
                          <g>
                            <line x1="0" y1="-3" x2="-4" y2="-8" stroke="#FFFFFF" strokeWidth="1.5" filter="url(#liveNeonGlow)" />
                            <line x1="0" y1="-3" x2="4" y2="-7" stroke="#67E8F9" strokeWidth="1.4" filter="url(#liveNeonGlow)" />
                            <circle cx="0" cy="-3" r="3.5" fill="#FFFFFF" opacity="0.95" filter="url(#liveNeonGlow)" />
                          </g>
                        )}
                      </g>

                      {/* 6. Dielectric Safety Gloves (Ergonomic grip around slender 7px pole) */}
                      <rect
                        x={stickX - 5.5}
                        y={gripY - 6}
                        width={5.5}
                        height={8}
                        rx={2}
                        fill="#0F172A"
                        stroke="#64748B"
                        strokeWidth="1.2"
                      />
                      <rect
                        x={stickX}
                        y={gripY - 6}
                        width={5.5}
                        height={8}
                        rx={2}
                        fill="#0F172A"
                        stroke="#64748B"
                        strokeWidth="1.2"
                      />
                    </g>
                  );
                })()}
              </svg>
            </div>

            {/* Bottom Controls Bar Directly Under Canvas */}
            <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0B101B]/90 p-4 backdrop-blur-xl shadow-xl">
              {/* Stick Elevation Slider */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-[12.5px]">
                  <label htmlFor="stickElevationSlider" className="font-semibold text-[#CBD5E1] flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFD200] shadow-[0_0_6px_#FFD200]" />
                    Insulated Hot Stick Extension (Yellow Telescopic Pole):
                  </label>
                  <span className="font-mono text-[13px] font-bold text-[#FFD200]">
                    {Math.round(stickElevationPct)}% ({stickLengthMeters} m Total Reach)
                  </span>
                </div>
                <input
                  id="stickElevationSlider"
                  type="range"
                  min="0"
                  max="100"
                  value={stickElevationPct}
                  onChange={(e) => {
                    initAudio();
                    setIsAutoTesting(false);
                    setStickElevationPct(Number(e.target.value));
                  }}
                  className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-white/15 accent-[#FFD200]"
                />
                <div className="flex justify-between font-mono text-[10.5px] text-[#94A3B8]">
                  <button
                    type="button"
                    onClick={() => {
                      initAudio();
                      setIsAutoTesting(false);
                      setStickElevationPct(0);
                    }}
                    className="hover:text-white"
                  >
                    [ Retract (1.80 m) ]
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      initAudio();
                      setIsAutoTesting(false);
                      setStickElevationPct(50);
                    }}
                    className="hover:text-white"
                  >
                    [ Half Extension (4.40 m) ]
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      initAudio();
                      setIsAutoTesting(false);
                      setStickElevationPct(100);
                    }}
                    className="font-bold text-[#FFD200] hover:underline"
                  >
                    [ Touch Conductor (7.00 m) ]
                  </button>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
                {/* Auto-Inspect Demo */}
                <button
                  type="button"
                  onClick={handleToggleAutoTest}
                  className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-[12px] font-semibold transition-all duration-200 ${
                    isAutoTesting
                      ? "bg-[#A855F7] text-white shadow-[0_0_16px_rgba(168,85,247,0.45)]"
                      : "border border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  {isAutoTesting ? "⏸ Stop Auto-Test" : "▶ Auto-Test Verification"}
                </button>

                {/* Inbuilt Proving Unit (Self-Check) */}
                <button
                  type="button"
                  onClick={handleTriggerSelfTest}
                  disabled={isSelfTesting}
                  className={`flex items-center gap-1.5 rounded-xl border border-[#06B6D4]/40 bg-[#06B6D4]/10 px-3.5 py-2 text-[12px] font-semibold text-[#06B6D4] transition-all duration-200 hover:bg-[#06B6D4]/20 ${
                    isSelfTesting ? "animate-pulse" : ""
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  {isSelfTesting
                    ? selfTestSuccess
                      ? "✓ Self-Test Passed"
                      : "Testing Health..."
                    : "Inbuilt Proving Check"}
                </button>

                {/* Audio Buzzer Toggle */}
                <button
                  type="button"
                  onClick={() => {
                    initAudio();
                    setSoundEnabled(!soundEnabled);
                  }}
                  className={`ml-auto flex items-center gap-1.5 rounded-xl border px-3 py-2 text-[11.5px] font-medium transition-all duration-200 ${
                    soundEnabled
                      ? "border-white/20 bg-white/15 text-white shadow-[0_0_10px_rgba(255,255,255,0.15)]"
                      : "border-white/10 bg-white/5 text-[#94A3B8] hover:text-white"
                  }`}
                >
                  {soundEnabled ? "🔊 Sound: ON" : "🔈 Sound: OFF"}
                </button>
              </div>
            </div>
          </div>

          {/* ======================================================
              RIGHT COLUMN: HARDWARE TELEMETRY & VERIFICATION PANEL (4 COLS)
              ====================================================== */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            {/* Hardware Unit Visualizer Card */}
            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#0B101B]/90 p-4 sm:p-5 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#FFD200]">
                    HV VOLTAGE TESTER
                  </span>
                  <h3 className="font-heading text-[16px] font-semibold text-white">
                    Model TP-S9 Detector
                  </h3>
                </div>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10.5px] text-[#94A3B8]">
                  LT to 765 kV
                </span>
              </div>

              {/* Hardware High-Intensity Visual Strobe Mockup */}
              <div className="relative flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#05070D] p-4 text-center">
                {/* Physical Strobe Indicator Lights */}
                <div className="relative mb-2 flex items-center justify-center">
                  <div
                    className={`h-12 w-12 rounded-full border-2 transition-all duration-200 ${
                      isVoltageDetectedLive
                        ? "border-red-500 bg-red-500 shadow-[0_0_35px_rgba(239,68,68,0.85)] animate-ping"
                        : isNoVoltageDetectedDead || (isSelfTesting && selfTestSuccess)
                        ? "border-emerald-400 bg-emerald-500 shadow-[0_0_24px_rgba(16,185,129,0.7)]"
                        : "border-white/20 bg-white/5"
                    }`}
                  />
                  <div
                    className={`absolute h-6 w-6 rounded-full transition-all duration-200 ${
                      isVoltageDetectedLive
                        ? "bg-white shadow-[0_0_16px_#ffffff]"
                        : isNoVoltageDetectedDead || (isSelfTesting && selfTestSuccess)
                        ? "bg-white shadow-[0_0_12px_#34d399]"
                        : "bg-white/10"
                    }`}
                  />
                </div>

                {/* Strictly 2-State Product Verification Verdict */}
                <div className="mt-1 w-full">
                  {isVoltageDetectedLive ? (
                    <div className="rounded-xl border border-red-500/50 bg-red-500/15 p-2.5 text-center shadow-[0_0_20px_rgba(239,68,68,0.25)] animate-pulse">
                      <div className="font-heading text-[14px] font-bold tracking-tight text-red-400">
                        VOLTAGE DETECTED: LINE IS LIVE
                      </div>
                      <p className="mt-0.5 text-[11px] leading-tight text-red-200/90">
                        Dual high-intensity red dome lights flashing & audible buzzer active. Hazardous live voltage!
                      </p>
                    </div>
                  ) : isNoVoltageDetectedDead ? (
                    <div className="rounded-xl border border-emerald-500/50 bg-emerald-500/15 p-2.5 text-center shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                      <div className="font-heading text-[14px] font-bold tracking-tight text-emerald-400">
                        NO VOLTAGE DETECTED: LINE IS DEAD
                      </div>
                      <p className="mt-0.5 text-[11px] leading-tight text-emerald-200/90">
                        Zero electrical charge detected. Equipment is dead and safe for grounding & maintenance.
                      </p>
                    </div>
                  ) : (
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center">
                      <div className="font-heading text-[13.5px] font-semibold text-[#CBD5E1]">
                        STANDBY — READY FOR TESTING
                      </div>
                      <p className="mt-0.5 text-[11px] text-[#94A3B8]">
                        Lift the yellow insulated stick to touch the conductor to verify live or dead status.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Technical Specifications & Telemetry Readouts */}
              <div className="flex flex-col gap-2 font-mono text-[11.5px]">
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span className="text-[#94A3B8]">Circuit Tested:</span>
                  <span className="font-bold text-white">
                    {currentVoltageObj.label} ({isLineEnergized ? "Energized" : "Isolated"})
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span className="text-[#94A3B8]">Conductor Voltage:</span>
                  <span
                    className={`font-bold ${
                      isLineEnergized ? "text-red-400" : "text-emerald-400"
                    }`}
                  >
                    {isLineEnergized
                      ? `${(selectedVoltage * 1000).toLocaleString()} V AC`
                      : "0 V (De-energized)"}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span className="text-[#94A3B8]">Detection Method:</span>
                  <span className="font-bold text-white">Capacitive Sensor</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span className="text-[#94A3B8]">Inbuilt Self Check:</span>
                  <span className="font-bold text-[#06B6D4]">
                    {isSelfTesting
                      ? "Verifying Proving Unit..."
                      : "Continuous Inbuilt Health OK"}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span className="text-[#94A3B8]">Connector:</span>
                  <span className="font-bold text-white">Universal Sunrise</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#94A3B8]">Power Supply:</span>
                  <span className="font-bold text-white">3× Universal &quot;C&quot; Cells</span>
                </div>
              </div>
            </div>

            {/* Authentic Engineering Takeaway Card */}
            <div className="rounded-2xl border border-white/10 bg-[#0F172A]/50 p-4 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[12px] font-bold text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#FFD200]">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Pre-Maintenance Verification (Neon Tester / HV Power Tester)
              </div>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-[#94A3B8]">
                Commonly known as a Neon Tester or HV Power Tester, the TP-S9 ensures high-voltage installations, overhead lines, and switchyard apparatus are completely dead before technicians begin inspection, preventing accidental contact and reducing electrical risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
