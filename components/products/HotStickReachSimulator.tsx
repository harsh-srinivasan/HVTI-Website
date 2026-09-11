"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { ProductData } from "@/types/product";

/* ================================================================
   HVTI INTERACTIVE INSULATED HOT STICK REACH & SECTION SIMULATOR
   File: components/products/HotStickReachSimulator.tsx
   ================================================================ */

// 1. Structure / Tower Height Presets
export interface StructureHeightPreset {
  id: string;
  label: string;
  heightMeters: number;
  type: "pole" | "substation" | "transmission";
  structureName: string;
  description: string;
  defaultStickLength: number;
  defaultSections: number;
}

export const STRUCTURE_PRESETS: StructureHeightPreset[] = [
  {
    id: "H5_0",
    label: "5.0 m",
    heightMeters: 5.0,
    type: "pole",
    structureName: "Distribution Pole (LT / 11 kV)",
    description: "Standard roadside wooden/concrete distribution pole with cross-arm cutout",
    defaultStickLength: 3.8,
    defaultSections: 3,
  },
  {
    id: "H7_5",
    label: "7.5 m",
    heightMeters: 7.5,
    type: "pole",
    structureName: "Primary Feeder Pole (33 kV)",
    description: "Overhead 33 kV primary feeder with drop-out (DO) fuse mounting",
    defaultStickLength: 6.4,
    defaultSections: 5,
  },
  {
    id: "H10_0",
    label: "10.0 m",
    heightMeters: 10.0,
    type: "substation",
    structureName: "Substation Gantry (66 / 132 kV)",
    description: "Grid switchyard gantry with gang-operated isolator disconnector switch",
    defaultStickLength: 10.2,
    defaultSections: 8,
  },
  {
    id: "H12_5",
    label: "12.5 m",
    heightMeters: 12.5,
    type: "transmission",
    structureName: "Transmission Tower (220 kV)",
    description: "Lattice steel transmission suspension tower with long insulator string",
    defaultStickLength: 12.5,
    defaultSections: 10,
  },
  {
    id: "H15_0",
    label: "15.0 m",
    heightMeters: 15.0,
    type: "transmission",
    structureName: "EHV Grid Gantry (400 / 800 kV)",
    description: "Extra-high-voltage substation busbar level with high-clearance standoff",
    defaultStickLength: 12.5,
    defaultSections: 10,
  },
];

// 2. Standard Insulated Stick Lengths & Models
export interface StickLengthOption {
  lengthMeters: number;
  recommendedSections: number;
  retractedMeters: number;
  weightKg: number;
  maxVoltageKv: number;
  modelCode: string;
}

export const STICK_LENGTH_OPTIONS: StickLengthOption[] = [
  { lengthMeters: 3.8, recommendedSections: 3, retractedMeters: 1.5, weightKg: 1.8, maxVoltageKv: 33, modelCode: "HS-03" },
  { lengthMeters: 5.0, recommendedSections: 4, retractedMeters: 1.6, weightKg: 2.5, maxVoltageKv: 66, modelCode: "HS-04" },
  { lengthMeters: 6.4, recommendedSections: 5, retractedMeters: 1.7, weightKg: 3.2, maxVoltageKv: 132, modelCode: "HS-05" },
  { lengthMeters: 7.8, recommendedSections: 6, retractedMeters: 1.8, weightKg: 4.1, maxVoltageKv: 230, modelCode: "HS-06" },
  { lengthMeters: 10.2, recommendedSections: 8, retractedMeters: 2.0, weightKg: 5.8, maxVoltageKv: 400, modelCode: "HS-08" },
  { lengthMeters: 12.5, recommendedSections: 10, retractedMeters: 2.2, weightKg: 7.6, maxVoltageKv: 800, modelCode: "HS-10" },
];

// 3. Section Counts (1 to 10 sections)
export const SECTION_OPTIONS = [2, 3, 4, 5, 6, 8, 10];

// 4. Universal Sunrise Spline Tool Head Attachments
export interface ToolHeadOption {
  id: string;
  name: string;
  icon: string;
  actionText: string;
}

export const TOOL_HEADS: ToolHeadOption[] = [
  { id: "hook", name: "Disconnector Hook", icon: "🪝", actionText: "Operating Isolator Switch Blade" },
  { id: "fuse", name: "DO Fuse Puller", icon: "⚡", actionText: "Engaging Drop-Out Fuse Barrel" },
  { id: "earthing", name: "Grounding Clamp", icon: "🛡️", actionText: "Applying Portable Earthing Cluster" },
];

export default function HotStickReachSimulator({
  product,
}: {
  product: ProductData;
}) {
  const config = product.safetySimulator;

  // 1. Core State (Tower Height, Stick Extended Length, Sections, Tool Head, Mode)
  const [towerHeight, setTowerHeight] = useState<number>(7.5);
  const [stickExtendedLength, setStickExtendedLength] = useState<number>(6.4);
  const [sectionsCount, setSectionsCount] = useState<number>(5);
  const [selectedToolId, setSelectedToolId] = useState<string>("hook");
  const [isExtended, setIsExtended] = useState<boolean>(true);
  const [isSwitchOpen, setIsSwitchOpen] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [showSpecModal, setShowSpecModal] = useState<boolean>(false);

  // Audio References
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Lineman Shoulder / Grip Height from Ground
  const LINEMAN_GRIP_HEIGHT = 1.5;

  // Compute Retracted Length (based on extended length and section count)
  const retractedLength = useMemo(() => {
    // Each section overlaps ~0.15m in retracted state
    const singleSectionLen = stickExtendedLength / sectionsCount;
    return Math.max(1.4, parseFloat((singleSectionLen + 0.35).toFixed(2)));
  }, [stickExtendedLength, sectionsCount]);

  // Current Length: Full Working Extension or Retracted Transport Mode
  const currentLengthMeters = useMemo(() => {
    return isExtended ? stickExtendedLength : retractedLength;
  }, [isExtended, stickExtendedLength, retractedLength]);

  // Total Reach Height from Ground
  const totalReachHeight = useMemo(() => {
    return parseFloat((LINEMAN_GRIP_HEIGHT + currentLengthMeters).toFixed(2));
  }, [currentLengthMeters]);

  // Remaining Air Gap to Conductor
  const remainingAirGap = useMemo(() => {
    const gap = towerHeight - totalReachHeight;
    return Math.max(0, parseFloat(gap.toFixed(2)));
  }, [towerHeight, totalReachHeight]);

  // Is Tool Touching / Operating Conductor?
  const isEngagedAtConductor = isExtended && remainingAirGap <= 0.04;

  // Max Reach Possible for this Stick
  const maxPossibleReach = useMemo(() => {
    return parseFloat((LINEMAN_GRIP_HEIGHT + stickExtendedLength).toFixed(2));
  }, [stickExtendedLength]);

  // Is Stick Too Short for Selected Tower Height?
  const isStickTooShort = maxPossibleReach < towerHeight - 0.05;

  // Active Tool Object
  const activeTool = useMemo(
    () => TOOL_HEADS.find((t) => t.id === selectedToolId) || TOOL_HEADS[0],
    [selectedToolId]
  );

  // Structure Type based on height
  const structureType = useMemo(() => {
    if (towerHeight <= 8.0) return "pole";
    if (towerHeight <= 11.5) return "substation";
    return "transmission";
  }, [towerHeight]);

  // Dielectric Rating (100 kV/foot = 328 kV/m)
  const dielectricKvRating = useMemo(() => {
    return Math.round(currentLengthMeters * 328);
  }, [currentLengthMeters]);

  /* ==============================================================
     WEB AUDIO API SOUND GENERATOR
     ============================================================== */
  const initAudio = useCallback(() => {
    if (!audioCtxRef.current && typeof window !== "undefined") {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume().catch(() => {});
    }
  }, []);

  // Global user interaction listener
  useEffect(() => {
    const handleFirstUserGesture = () => {
      initAudio();
    };
    window.addEventListener("click", handleFirstUserGesture, { passive: true });
    window.addEventListener("touchstart", handleFirstUserGesture, { passive: true });
    window.addEventListener("pointerdown", handleFirstUserGesture, { passive: true });
    return () => {
      window.removeEventListener("click", handleFirstUserGesture);
      window.removeEventListener("touchstart", handleFirstUserGesture);
      window.removeEventListener("pointerdown", handleFirstUserGesture);
    };
  }, [initAudio]);

  const playLockSnapSound = useCallback(() => {
    if (!audioCtxRef.current || !soundEnabled) return;
    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume().catch(() => {});
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.045);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.045);
    } catch {
      // Audio fallback
    }
  }, [soundEnabled]);

  const playMechanicalSwitchSound = useCallback(() => {
    if (!audioCtxRef.current || !soundEnabled) return;
    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume().catch(() => {});
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = "triangle";
      osc1.frequency.setValueAtTime(320, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.12);

      osc2.type = "square";
      osc2.frequency.setValueAtTime(640, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.14, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 0.14);
      osc2.stop(ctx.currentTime + 0.14);
    } catch {
      // Audio fallback
    }
  }, [soundEnabled]);

  // Engagement Trigger
  const prevEngagedRef = useRef(isEngagedAtConductor);
  useEffect(() => {
    if (!prevEngagedRef.current && isEngagedAtConductor) {
      playMechanicalSwitchSound();
      setIsSwitchOpen((prev) => !prev);
    }
    prevEngagedRef.current = isEngagedAtConductor;
  }, [isEngagedAtConductor, playMechanicalSwitchSound]);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) audioCtxRef.current.close().catch(() => {});
    };
  }, []);

  return (
    <section
      id="hotstick-reach-simulator"
      className="relative w-full overflow-hidden bg-transparent py-3 sm:py-5"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-3 sm:px-4 lg:px-6">
        {/* ========================================================
            SIMULATOR HEADER WITH MODEL MATRIX MODAL
            ======================================================== */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2.5 rounded-2xl border border-white/10 bg-[#0B101B]/90 px-4 py-2.5 backdrop-blur-xl shadow-lg">
          <div className="flex items-center gap-2.5">
            <span className="rounded-md bg-[#FBBF24]/20 border border-[#FBBF24]/40 px-2 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#FDE047]">
              {config?.badge || "INSULATED HOT STICK SIMULATOR"}
            </span>
            <h2 className="font-heading text-base sm:text-lg font-bold text-white tracking-tight">
              {config?.title || "Insulated Hot Stick Reach, Extension & Section Simulator"}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setShowSpecModal(true)}
            className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90 hover:bg-white/10 hover:text-white transition-all shadow-sm"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
            <span>Model Reference Sheet</span>
          </button>
        </div>

        {/* ========================================================
            2-COLUMN INTUITIVE ARCHITECTURE
            - Left Column (4 cols): Tower Height, Stick Length, Sections & Tool Head
            - Right Column (8 cols): Scaled Structure SVG & Telescoping Reach
            ======================================================== */}
        <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-12 lg:gap-4 items-stretch">
          {/* ======================================================
              LEFT COLUMN: HOT STICK CONFIGURATION DASHBOARD (4 COLS)
              ====================================================== */}
          <div className="flex flex-col justify-between gap-3 lg:col-span-4 rounded-2xl border border-white/10 bg-[#0B101B]/95 p-3.5 sm:p-4 backdrop-blur-xl shadow-xl">
            {/* 1. TOWER / CONDUCTOR HEIGHT SELECTION */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#06B6D4]/20 font-mono text-[10px] font-bold text-cyan-300">
                    1
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Tower / Conductor Height
                  </span>
                </div>

                <span className="font-mono text-[11.5px] font-bold text-cyan-300">
                  {towerHeight.toFixed(1)} m
                </span>
              </div>

              {/* 5 Preset Structure Buttons */}
              <div className="grid grid-cols-5 gap-1 sm:gap-1.5">
                {STRUCTURE_PRESETS.map((p) => {
                  const isSelected = towerHeight === p.heightMeters;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        initAudio();
                        setTowerHeight(p.heightMeters);
                        setStickExtendedLength(p.defaultStickLength);
                        setSectionsCount(p.defaultSections);
                        playLockSnapSound();
                      }}
                      className={`flex flex-col items-center justify-center rounded-lg py-1.5 px-1 text-center transition-all ${
                        isSelected
                          ? "border border-[#06B6D4] bg-[#06B6D4]/25 text-white font-bold shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                          : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.08]"
                      }`}
                    >
                      <span className="font-mono text-[11px] leading-tight font-bold">{p.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Custom Height Slider */}
              <div className="flex items-center gap-2 pt-0.5">
                <span className="text-[10px] font-mono text-slate-400">Custom:</span>
                <input
                  type="range"
                  min="4.0"
                  max="16.0"
                  step="0.5"
                  value={towerHeight}
                  onChange={(e) => {
                    initAudio();
                    setTowerHeight(Number(e.target.value));
                  }}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/15 accent-[#06B6D4]"
                />
                <span className="font-mono text-[10px] text-cyan-300 min-w-[34px] text-right">{towerHeight.toFixed(1)}m</span>
              </div>
            </div>

            {/* 2. NUMBER OF TELESCOPIC SECTIONS */}
            <div className="flex flex-col gap-2 pt-2.5 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#A855F7]/20 font-mono text-[10px] font-bold text-[#D8B4FE]">
                    2
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Number of Telescopic Sections
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11.5px] font-bold text-[#D8B4FE]">
                    {sectionsCount} Sections ({stickExtendedLength} m)
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowSpecModal(true)}
                    className="rounded border border-purple-500/40 bg-purple-500/10 px-1.5 py-0.5 text-[9px] font-bold text-purple-300 hover:bg-purple-500/20"
                  >
                    Spec Sheet 📋
                  </button>
                </div>
              </div>

              {/* 6 Section Options */}
              <div className="grid grid-cols-6 gap-1">
                {[3, 4, 5, 6, 8, 10].map((num) => {
                  const isSelected = sectionsCount === num;
                  const matchingOpt = STICK_LENGTH_OPTIONS.find((o) => o.recommendedSections === num);
                  return (
                    <button
                      key={num}
                      type="button"
                      onClick={() => {
                        initAudio();
                        setSectionsCount(num);
                        if (matchingOpt) {
                          setStickExtendedLength(matchingOpt.lengthMeters);
                        }
                        playLockSnapSound();
                      }}
                      className={`flex flex-col items-center justify-center rounded-lg py-2 text-center transition-all ${
                        isSelected
                          ? "border border-[#A855F7] bg-[#A855F7]/25 text-white font-bold shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                          : "border border-white/10 bg-white/[0.02] text-slate-300 hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                    >
                      <span className="font-mono text-[11px] font-bold">{num} sec</span>
                      <span className="font-mono text-[9.5px] text-purple-300/90">{matchingOpt ? `${matchingOpt.lengthMeters}m` : ""}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. UNIVERSAL SUNRISE TOOL HEAD ATTACHMENT */}
            <div className="flex items-center gap-1.5 pt-2 border-t border-white/10">
              <div className="flex items-center gap-1.5 mr-1">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 font-mono text-[10px] font-bold text-emerald-300">
                  3
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  Tool Head:
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1 flex-1">
                {TOOL_HEADS.map((th) => {
                  const isSelected = selectedToolId === th.id;
                  return (
                    <button
                      key={th.id}
                      type="button"
                      onClick={() => {
                        initAudio();
                        setSelectedToolId(th.id);
                        playLockSnapSound();
                      }}
                      className={`flex items-center justify-center gap-1 rounded-md py-1.5 px-1 text-[10.5px] font-semibold transition-all ${
                        isSelected
                          ? "border border-emerald-400 bg-emerald-500/25 text-emerald-200 shadow-[0_0_8px_rgba(16,185,129,0.3)] font-bold"
                          : "border border-white/10 bg-white/[0.02] text-slate-400 hover:text-white"
                      }`}
                    >
                      <span>{th.icon}</span>
                      <span className="truncate">{th.name.split(" ")[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* LIVE ENGINEERING METRICS SUMMARY CARD */}
            <div className="rounded-xl border border-white/10 bg-[#05070D]/90 p-2.5 flex flex-col gap-1.5 font-mono text-[10.5px]">
              <div className="flex items-center justify-between border-b border-white/10 pb-1">
                <span className="text-slate-400">Active Stick Length:</span>
                <span className="font-bold text-[#FDE047]">{currentLengthMeters} m ({sectionsCount} Sections)</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-1">
                <span className="text-slate-400">Total Ground Reach:</span>
                <span className="font-bold text-cyan-300">{totalReachHeight} m ({LINEMAN_GRIP_HEIGHT}m grip + {currentLengthMeters}m pole)</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-1">
                <span className="text-slate-400">Remaining Air Clearance:</span>
                <span className={`font-bold ${isEngagedAtConductor ? "text-emerald-400" : "text-amber-400"}`}>
                  {isEngagedAtConductor ? "0.0 m (TOUCHING / ENGAGED)" : `${remainingAirGap} m to conductor`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Dielectric Proof (100kV/ft):</span>
                <span className="font-bold text-emerald-400">{dielectricKvRating} kV Withstand (IEC 60855)</span>
              </div>
            </div>
          </div>

          {/* ======================================================
              RIGHT COLUMN: SCALED STRUCTURE & REACH SIMULATION (8 COLS)
              ====================================================== */}
          <div className="flex flex-col justify-between gap-2.5 lg:col-span-8 rounded-2xl border border-white/10 bg-[#0B101B]/95 p-3.5 sm:p-4 backdrop-blur-xl shadow-xl">
            {/* 1. STATUS ALERT BANNER */}
            <div
              className={`flex items-center justify-between rounded-xl border px-3 py-2 transition-all ${
                isEngagedAtConductor
                  ? "border-emerald-500/60 bg-emerald-950/70 text-emerald-200 shadow-[0_0_16px_rgba(16,185,129,0.3)] animate-pulse"
                  : isStickTooShort
                  ? "border-red-500/60 bg-red-950/60 text-red-200"
                  : "border-cyan-500/60 bg-cyan-950/60 text-cyan-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    isEngagedAtConductor
                      ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
                      : isStickTooShort
                      ? "bg-red-400 shadow-[0_0_8px_#ef4444]"
                      : "bg-cyan-400 shadow-[0_0_8px_#06b6d4]"
                  }`}
                />
                <span className="text-xs font-bold font-heading tracking-wide">
                  {isEngagedAtConductor
                    ? `⚡ ${activeTool.actionText.toUpperCase()} — Tool reached ${towerHeight.toFixed(1)}m structure!`
                    : isStickTooShort
                    ? `⚠️ INSUFFICIENT STICK LENGTH — Max reach (${maxPossibleReach}m) is below tower height (${towerHeight.toFixed(1)}m). Select a longer stick length.`
                    : `✓ EXTENDING ${sectionsCount}-SECTION HOT STICK — Reach: ${totalReachHeight}m | Gap to Conductor: ${remainingAirGap.toFixed(2)}m`}
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-white/80">
                <span className="rounded bg-black/40 px-1.5 py-0.5 border border-white/10">
                  {dielectricKvRating} kV Proof
                </span>
              </div>
            </div>

            {/* 2. FIXED 15-METER SCALE & DYNAMIC WIRE ELEVATION VISUALIZER */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#05070D] via-[#070C18] to-[#030509]">
              {(() => {
                const GROUND_Y = 280;
                const PIXELS_PER_METER = 16.0; // 15 meters = 240px (from Y=280 to Y=40)
                const wireY = Math.max(40, Math.min(GROUND_Y - 20, GROUND_Y - towerHeight * PIXELS_PER_METER));

                const stickX = 396;
                const gripY = GROUND_Y - LINEMAN_GRIP_HEIGHT * PIXELS_PER_METER; // 280 - 24 = 256
                const handleBottomY = GROUND_Y - 6; // 274

                const currentStickHeightPx = currentLengthMeters * PIXELS_PER_METER;
                const hookTipY = gripY - currentStickHeightPx;
                const headBaseY = hookTipY + 10;

                const totalSections = sectionsCount;
                const availableStickHeight = Math.max(16, gripY - headBaseY);
                const singleSecHeight = availableStickHeight / totalSections;

                return (
                  <svg
                    viewBox="0 0 800 340"
                    className="w-full h-auto select-none"
                    style={{ maxHeight: "380px" }}
                  >
                    <defs>
                      {/* Glow Filters */}
                      <filter id="toolContactGlow" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                      {/* High-Grade Yellow Fiberglass Texture Gradient */}
                      <linearGradient id="yellowFiberglassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#D97706" />
                        <stop offset="25%" stopColor="#FBBF24" />
                        <stop offset="50%" stopColor="#FEF08A" />
                        <stop offset="75%" stopColor="#FBBF24" />
                        <stop offset="100%" stopColor="#B45309" />
                      </linearGradient>
                    </defs>

                    {/* FIXED 15-METER ELEVATION RULER ON LEFT (0.0 m to 15.0 m) */}
                    <g opacity="0.40">
                      <line x1="42" y1={GROUND_Y} x2="42" y2="40" stroke="#475569" strokeWidth="1.2" strokeDasharray="3 3" />
                      
                      {/* 15.0 m */}
                      <text x="36" y="44" fontSize="8" fontFamily="monospace" fill="#94A3B8" textAnchor="end">15.0 m</text>
                      <line x1="38" y1="40" x2="46" y2="40" stroke="#94A3B8" strokeWidth="1.2" />

                      {/* 12.5 m */}
                      <text x="36" y="84" fontSize="8" fontFamily="monospace" fill="#94A3B8" textAnchor="end">12.5 m</text>
                      <line x1="38" y1="80" x2="46" y2="80" stroke="#94A3B8" strokeWidth="1" />

                      {/* 10.0 m */}
                      <text x="36" y="124" fontSize="8" fontFamily="monospace" fill="#94A3B8" textAnchor="end">10.0 m</text>
                      <line x1="38" y1="120" x2="46" y2="120" stroke="#94A3B8" strokeWidth="1" />

                      {/* 7.5 m */}
                      <text x="36" y="164" fontSize="8" fontFamily="monospace" fill="#94A3B8" textAnchor="end">7.5 m</text>
                      <line x1="38" y1="160" x2="46" y2="160" stroke="#94A3B8" strokeWidth="1" />

                      {/* 5.0 m */}
                      <text x="36" y="204" fontSize="8" fontFamily="monospace" fill="#94A3B8" textAnchor="end">5.0 m</text>
                      <line x1="38" y1="200" x2="46" y2="200" stroke="#94A3B8" strokeWidth="1" />

                      {/* 2.5 m */}
                      <text x="36" y="244" fontSize="8" fontFamily="monospace" fill="#94A3B8" textAnchor="end">2.5 m</text>
                      <line x1="38" y1="240" x2="46" y2="240" stroke="#94A3B8" strokeWidth="1" />

                      {/* 0.0 m (Ground) */}
                      <text x="36" y="284" fontSize="8" fontFamily="monospace" fill="#94A3B8" textAnchor="end">0.0 m</text>
                      <line x1="38" y1={GROUND_Y} x2="46" y2={GROUND_Y} stroke="#94A3B8" strokeWidth="1.5" />

                      {/* Active Wire Elevation Pointer Tick */}
                      <polygon
                        points={`48,${wireY} 54,${wireY - 3} 54,${wireY + 3}`}
                        fill="#06B6D4"
                      />
                    </g>

                    {/* Ground Substation Pad */}
                    <rect x="0" y={GROUND_Y} width="800" height="60" fill="#090E17" stroke="#1E293B" strokeWidth="1" />
                    {Array.from({ length: 28 }).map((_, i) => (
                      <line
                        key={i}
                        x1={i * 30}
                        y1={GROUND_Y}
                        x2={i * 30 + 15}
                        y2={GROUND_Y + 12}
                        stroke="#334155"
                        strokeWidth="1.2"
                        opacity="0.3"
                      />
                    ))}

                    {/* DYNAMIC STRUCTURE RENDERING ADJUSTED TO WIRE ELEVATION */}
                    {structureType === "pole" && (
                      /* Distribution Wooden / Concrete Pole with Cross-Arm */
                      <g opacity="0.35">
                        {/* Left Pole */}
                        <line x1="95" y1={GROUND_Y} x2="95" y2={wireY - 8} stroke="#78716C" strokeWidth="7" strokeLinecap="round" />
                        <line x1="70" y1={wireY + 4} x2="120" y2={wireY + 4} stroke="#57534E" strokeWidth="4.5" strokeLinecap="round" />
                        <rect x="110" y={wireY - 6} width="6" height="10" rx="1.5" fill="#94A3B8" />

                        {/* Right Pole */}
                        <line x1="705" y1={GROUND_Y} x2="705" y2={wireY - 8} stroke="#78716C" strokeWidth="7" strokeLinecap="round" />
                        <line x1="680" y1={wireY + 4} x2="730" y2={wireY + 4} stroke="#57534E" strokeWidth="4.5" strokeLinecap="round" />
                        <rect x="684" y={wireY - 6} width="6" height="10" rx="1.5" fill="#94A3B8" />
                      </g>
                    )}

                    {structureType === "substation" && (
                      /* Steel Gantry Substation Bay Structure */
                      <g opacity="0.3">
                        <line x1="80" y1={GROUND_Y} x2="80" y2={wireY - 6} stroke="#64748B" strokeWidth="3.5" />
                        <line x1="115" y1={GROUND_Y} x2="115" y2={wireY - 6} stroke="#64748B" strokeWidth="3.5" />
                        <line x1="80" y1={wireY - 6} x2="115" y2={wireY - 6} stroke="#64748B" strokeWidth="4" />
                        <line x1="80" y1={(GROUND_Y + wireY) / 2} x2="115" y2={(GROUND_Y + wireY) / 2} stroke="#475569" strokeWidth="2" />

                        <line x1="685" y1={GROUND_Y} x2="685" y2={wireY - 6} stroke="#64748B" strokeWidth="3.5" />
                        <line x1="720" y1={GROUND_Y} x2="720" y2={wireY - 6} stroke="#64748B" strokeWidth="3.5" />
                        <line x1="685" y1={wireY - 6} x2="720" y2={wireY - 6} stroke="#64748B" strokeWidth="4" />
                        <line x1="685" y1={(GROUND_Y + wireY) / 2} x2="720" y2={(GROUND_Y + wireY) / 2} stroke="#475569" strokeWidth="2" />
                      </g>
                    )}

                    {structureType === "transmission" && (
                      /* Lattice Steel Transmission Tower */
                      <g opacity="0.35">
                        <path d={`M 60 ${GROUND_Y} L 95 ${wireY - 10} L 105 ${wireY - 10} L 140 ${GROUND_Y} Z`} fill="none" stroke="#64748B" strokeWidth="2.5" />
                        <line x1="75" y1={(GROUND_Y + wireY) / 2} x2="125" y2={(GROUND_Y + wireY) / 2} stroke="#475569" strokeWidth="1.5" />

                        <path d={`M 660 ${GROUND_Y} L 695 ${wireY - 10} L 705 ${wireY - 10} L 740 ${GROUND_Y} Z`} fill="none" stroke="#64748B" strokeWidth="2.5" />
                        <line x1="675" y1={(GROUND_Y + wireY) / 2} x2="725" y2={(GROUND_Y + wireY) / 2} stroke="#475569" strokeWidth="1.5" />
                      </g>
                    )}

                    {/* OVERHEAD CONDUCTOR LINE AT DYNAMIC WIRE ELEVATION (wireY) */}
                    <line
                      x1="95"
                      y1={wireY}
                      x2="705"
                      y2={wireY}
                      stroke={isEngagedAtConductor ? "#10B981" : "#EF4444"}
                      strokeWidth={isEngagedAtConductor ? "4.5" : "3.5"}
                      strokeLinecap="round"
                      filter={isEngagedAtConductor ? "url(#toolContactGlow)" : undefined}
                    />

                    {/* Substation Isolator Switch Blade at wireY */}
                    <g transform={`translate(396, ${wireY})`}>
                      {/* Switch Terminal Base */}
                      <rect x="-14" y="-3.5" width="8" height="7" rx="1.5" fill="#334155" stroke="#64748B" strokeWidth="0.8" />
                      <rect x="6" y="-3.5" width="8" height="7" rx="1.5" fill="#334155" stroke="#64748B" strokeWidth="0.8" />

                      {/* Switch Blade Contact */}
                      <line
                        x1="-10"
                        y1="0"
                        x2={isSwitchOpen ? 4 : 10}
                        y2={isSwitchOpen ? -14 : 0}
                        stroke={isSwitchOpen ? "#F59E0B" : "#10B981"}
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* Pull Ring on Disconnector */}
                      <circle
                        cx={isSwitchOpen ? 4 : 10}
                        cy={isSwitchOpen ? -14 : 0}
                        r="3.2"
                        fill="none"
                        stroke="#FBBF24"
                        strokeWidth="1.2"
                      />
                    </g>

                    {/* Conductor Tag Badge at wireY */}
                    <g transform={`translate(180, ${wireY})`}>
                      <rect x="-6" y="-7.5" width="165" height="15" rx="3" fill="#0B101B" fillOpacity="0.92" stroke="#EF4444" strokeWidth="1" />
                      <text x="76.5" y="3.5" fontSize="8" fontFamily="monospace" fill="#FCA5A5" textAnchor="middle" fontWeight="bold">
                        {towerHeight.toFixed(1)} m Overhead Line / Switch
                      </text>
                    </g>

                    {/* Lineman Avatar at Ground Level (X = 365, Y = GROUND_Y) */}
                    <g transform={`translate(365, ${GROUND_Y})`}>
                      <ellipse cx="0" cy="-2" rx="24" ry="4" fill="#020617" opacity="0.9" />
                      {/* Boots */}
                      <rect x="-12" y="-10" width="10" height="10" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="1" />
                      <rect x="2" y="-10" width="10" height="10" rx="2" fill="#0F172A" stroke="#334155" strokeWidth="1" />
                      {/* Trousers */}
                      <path d="M -11 -10 L -9 -38 L -2 -38 L -3 -10 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
                      <path d="M 2 -10 L 1 -38 L 8 -38 L 10 -10 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
                      {/* Jacket */}
                      <rect x="-12" y="-65" width="24" height="27" rx="3" fill="#EA580C" stroke="#C2410C" strokeWidth="1" />
                      <rect x="-12" y="-58" width="24" height="3" fill="#FEF08A" opacity="0.9" />
                      <rect x="-12" y="-48" width="24" height="3" fill="#FEF08A" opacity="0.9" />
                      {/* Helmet */}
                      <circle cx="0" cy="-71" r="6.5" fill="#FBBF24" />
                      <path d="M -8 -75 C -8 -82 8 -82 8 -75 L 9 -72 L -9 -72 Z" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
                      <rect x="-9" y="-72" width="18" height="2" rx="1" fill="#CA8A04" />
                      {/* Arms */}
                      <path d="M -8 -60 Q 7 -67 22 -61" fill="none" stroke="#EA580C" strokeWidth="5" strokeLinecap="round" />
                      <path d="M 8 -60 Q 15 -66 26 -61" fill="none" stroke="#EA580C" strokeWidth="5" strokeLinecap="round" />
                    </g>

                    {/* TELESCOPIC HOT STICK ASSEMBLY WITH EXACT SECTION COUNT & REAL REACH */}
                    <g id="telescopic-hotstick-assembly">
                      {/* Live Reach Caliper Line */}
                      {remainingAirGap >= 0.05 && (
                        <g id="reach-caliper">
                          <line x1={stickX + 18} y1={wireY} x2={stickX + 18} y2={hookTipY} stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="3 3" />
                          <line x1={stickX + 14} y1={wireY} x2={stickX + 22} y2={wireY} stroke="#38BDF8" strokeWidth="1.2" />
                          <line x1={stickX + 14} y1={hookTipY} x2={stickX + 22} y2={hookTipY} stroke="#38BDF8" strokeWidth="1.2" />
                          <rect
                            x={stickX + 24}
                            y={(wireY + hookTipY) / 2 - 8}
                            width="85"
                            height="16"
                            rx="3"
                            fill="#05070D"
                            fillOpacity="0.92"
                            stroke="#38BDF8"
                            strokeWidth="1"
                          />
                          <text
                            x={stickX + 66.5}
                            y={(wireY + hookTipY) / 2 + 3.5}
                            fontSize="8"
                            fontFamily="monospace"
                            fill="#7DD3FC"
                            textAnchor="middle"
                            fontWeight="bold"
                          >
                            {remainingAirGap.toFixed(2)} m to Wire
                          </text>
                        </g>
                      )}

                      {/* Multi-Section Telescopic Fiberglass Tubes */}
                      {Array.from({ length: totalSections }).map((_, idx) => {
                        const secTopY = headBaseY + idx * singleSecHeight;
                        const secHeight = singleSecHeight;
                        // Taper tube width from 7.5mm at bottom to 3.8mm at top
                        const tubeWidth = 7.5 - idx * (3.7 / totalSections);
                        const isBottomSec = idx === totalSections - 1;

                        return (
                          <g key={idx}>
                            {/* Fiberglass Section Tube */}
                            <rect
                              x={stickX - tubeWidth / 2}
                              y={secTopY}
                              width={tubeWidth}
                              height={secHeight + 2}
                              rx={1.5}
                              fill="url(#yellowFiberglassGrad)"
                              stroke="#B45309"
                              strokeWidth="0.8"
                            />

                            {/* Black Rubber Collar & Brass Spring Push-Button Lock */}
                            {!isBottomSec && (
                              <g transform={`translate(${stickX}, ${secTopY})`}>
                                <rect x={-tubeWidth / 2 - 1} y="-2" width={tubeWidth + 2} height="3.5" rx="1" fill="#0F172A" stroke="#475569" strokeWidth="0.5" />
                                <circle cx="0" cy="0" r="1.1" fill="#FDE047" stroke="#B45309" strokeWidth="0.4" />
                              </g>
                            )}
                          </g>
                        );
                      })}

                      {/* Base Silicone Handguard Grip & Neoprene Rubber Boot */}
                      <rect x={stickX - 5.5} y={gripY - 14} width="11" height={handleBottomY - (gripY - 14)} rx="2" fill="#0F172A" stroke="#334155" strokeWidth="1" />
                      <rect x={stickX - 6.5} y={handleBottomY - 2} width="13" height="4.5" rx="2" fill="#020617" stroke="#475569" strokeWidth="0.8" />

                      {/* Universal Sunrise Spline Splined Head Fitting with Selected Tool */}
                      <g transform={`translate(${stickX}, ${headBaseY})`}>
                        {/* Cast Bronze Sunrise Spline Collar & Wing Nut */}
                        <rect x="-3.5" y="-6" width="7" height="6" rx="1" fill="#D97706" stroke="#92400E" strokeWidth="0.8" />
                        <ellipse cx="-4.5" cy="-3" rx="1.5" ry="1" fill="#B45309" />
                        <ellipse cx="4.5" cy="-3" rx="1.5" ry="1" fill="#B45309" />

                        {/* 🪝 Disconnect Switch Hook */}
                        {selectedToolId === "hook" && (
                          <g transform="translate(0, -6)">
                            <path
                              d="M 0 0 L 0 -12 C 0 -18 7 -18 7 -12 C 7 -8 3 -7 3 -4"
                              fill="none"
                              stroke="#FBBF24"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                            {isEngagedAtConductor && (
                              <circle cx="5" cy="-14" r="3.5" fill="#10B981" opacity="0.85" filter="url(#toolContactGlow)" />
                            )}
                          </g>
                        )}

                        {/* ⚡ Drop-Out (DO) Fuse Puller Jaws */}
                        {selectedToolId === "fuse" && (
                          <g transform="translate(0, -6)">
                            <path d="M -3 0 L -3 -12 L 0 -15 L 3 -12 L 3 0 Z" fill="#D97706" stroke="#92400E" strokeWidth="1" />
                            <path d="M -5 -12 L -2 -16 L 2 -16 L 5 -12" fill="none" stroke="#FDE047" strokeWidth="1.8" />
                            {isEngagedAtConductor && (
                              <circle cx="0" cy="-16" r="4" fill="#10B981" opacity="0.85" filter="url(#toolContactGlow)" />
                            )}
                          </g>
                        )}

                        {/* 🛡️ Grounding Clamp Hex Bayonet Applicator */}
                        {selectedToolId === "earthing" && (
                          <g transform="translate(0, -6)">
                            <rect x="-3" y="-14" width="6" height="14" rx="1" fill="#94A3B8" stroke="#475569" strokeWidth="1" />
                            <circle cx="0" cy="-14" r="3.5" fill="#FBBF24" stroke="#B45309" strokeWidth="1" />
                            {isEngagedAtConductor && (
                              <circle cx="0" cy="-14" r="4" fill="#10B981" opacity="0.85" filter="url(#toolContactGlow)" />
                            )}
                          </g>
                        )}
                      </g>

                      {/* Gloves on Handle */}
                      <rect x={stickX - 5.5} y={gripY - 4} width="5" height="7" rx="1.5" fill="#0F172A" stroke="#64748B" strokeWidth="1" />
                      <rect x={stickX + 0.5} y={gripY - 4} width="5" height="7" rx="1.5" fill="#0F172A" stroke="#64748B" strokeWidth="1" />
                    </g>
                  </svg>
                );
              })()}
            </div>

            {/* 3. HOT STICK DEPLOYMENT & OPERATION CONTROLS (NO SLIDER) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 rounded-xl border border-white/10 bg-[#05070D]/80 p-2.5 sm:p-3">
              {/* Mode Selector: Working Mode vs Transport Mode */}
              <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-1">
                <button
                  type="button"
                  onClick={() => {
                    initAudio();
                    setIsExtended(true);
                    playLockSnapSound();
                  }}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold transition-all ${
                    isExtended
                      ? "bg-[#FBBF24] text-black shadow-[0_0_12px_rgba(251,191,36,0.35)]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10B981]" />
                  <span>⚡ Working Mode ({stickExtendedLength} m)</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    initAudio();
                    setIsExtended(false);
                    playLockSnapSound();
                  }}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold transition-all ${
                    !isExtended
                      ? "bg-white/20 text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span>📦 Transport ({retractedLength} m)</span>
                </button>
              </div>

              {/* Action Buttons: Operate Switch & Sound Toggle */}
              <div className="flex items-center justify-between sm:justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    initAudio();
                    if (!isExtended) {
                      setIsExtended(true);
                    }
                    playMechanicalSwitchSound();
                    setIsSwitchOpen((prev) => !prev);
                  }}
                  disabled={isStickTooShort}
                  className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-bold transition-all ${
                    isStickTooShort
                      ? "cursor-not-allowed border-white/5 bg-white/[0.02] text-slate-500"
                      : isSwitchOpen
                      ? "border-amber-500/60 bg-amber-500/20 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.3)] hover:bg-amber-500/30"
                      : "border-emerald-500/60 bg-emerald-500/20 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:bg-emerald-500/30"
                  }`}
                >
                  {isStickTooShort ? (
                    "⚠️ Stick Too Short to Reach"
                  ) : (
                    <>
                      <span>{activeTool.icon}</span>
                      <span>{isSwitchOpen ? "Close Disconnect Switch" : "Open Disconnect Switch"}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    initAudio();
                    setSoundEnabled(!soundEnabled);
                  }}
                  className={`flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold transition-all ${
                    soundEnabled
                      ? "border-white/25 bg-white/15 text-white"
                      : "border-white/10 bg-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {soundEnabled ? "🔊 Sound ON" : "🔈 Sound OFF"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          HOT STICK MODEL SPECIFICATION MATRIX MODAL
          ======================================================== */}
      {showSpecModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-5xl rounded-2xl border border-white/15 bg-[#0B101B] p-4 sm:p-6 shadow-2xl max-h-[90vh] flex flex-col">
            <div className="flex items-start justify-between border-b border-white/10 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-[#FBBF24]/20 px-2 py-0.5 font-mono text-[11px] font-bold text-[#FDE047]">
                    MANUFACTURER SPECIFICATION SHEET
                  </span>
                  <span className="text-[12px] text-[#94A3B8]">HVTI Insulated Telescopic Operating Sticks</span>
                </div>
                <h3 className="mt-1 font-heading text-[18px] sm:text-[20px] font-bold text-white">
                  Telescopic & Sectional Hot Stick Engineering Reference Chart
                </h3>
                <p className="text-[11.5px] text-[#94A3B8]">
                  Tested as per IEC 60855, IEC 61235, IS 13770 & ASTM F711. Dielectric strength: 100 kV/foot.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowSpecModal(false)}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 hover:bg-white/10 hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="mt-3 flex-1 overflow-auto rounded-xl border border-white/10 bg-[#05070D]">
              <table className="w-full border-collapse font-mono text-[11px] text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.04] text-slate-300">
                    <th className="p-2.5">Model No.</th>
                    <th className="p-2.5 text-center">Sections</th>
                    <th className="p-2.5 text-center">Retracted (m)</th>
                    <th className="p-2.5 text-center">Extended (m)</th>
                    <th className="p-2.5 text-center">Max Voltage</th>
                    <th className="p-2.5 text-center">Weight (kg)</th>
                    <th className="p-2.5 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {STICK_LENGTH_OPTIONS.map((row) => {
                    const isSelected = stickExtendedLength === row.lengthMeters;
                    return (
                      <tr
                        key={row.modelCode}
                        className={`border-b border-white/5 transition-colors ${
                          isSelected ? "bg-[#FBBF24]/15 font-bold text-white" : "text-slate-300 hover:bg-white/[0.03]"
                        }`}
                      >
                        <td className="p-2.5 text-amber-300 font-bold">{row.modelCode}</td>
                        <td className="p-2.5 text-center">{row.recommendedSections}</td>
                        <td className="p-2.5 text-center">{row.retractedMeters} m</td>
                        <td className="p-2.5 text-center">{row.lengthMeters} m</td>
                        <td className="p-2.5 text-center text-cyan-300">{row.maxVoltageKv} kV</td>
                        <td className="p-2.5 text-center">{row.weightKg} kg</td>
                        <td className="p-2.5 text-center">
                          <button
                            type="button"
                            onClick={() => {
                              setStickExtendedLength(row.lengthMeters);
                              setSectionsCount(row.recommendedSections);
                              setShowSpecModal(false);
                            }}
                            className={`rounded px-2 py-0.5 text-[10px] font-bold ${
                              isSelected
                                ? "bg-amber-400 text-black"
                                : "bg-white/10 text-white hover:bg-white/20"
                            }`}
                          >
                            {isSelected ? "Selected" : "Select"}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5 text-[11px] text-[#94A3B8]">
              <span>Closed-cell foam-filled fiberglass tubing eliminates internal moisture condensation and tracking.</span>
              <button
                type="button"
                onClick={() => setShowSpecModal(false)}
                className="rounded-xl bg-[#FBBF24] px-4 py-1.5 font-semibold text-black hover:bg-[#FACC15]"
              >
                Close Reference Chart
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
