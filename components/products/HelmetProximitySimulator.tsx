"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ProductData } from "@/types/product";

/* ================================================================
   HVTI PRODUCT SAFETY SIMULATOR: HELMET MOUNTED VOLTAGE DETECTOR
   File: components/products/HelmetProximitySimulator.tsx

   Key Engineering & UI Principles:
   1. Ultra-Smooth 60 FPS Movement & Dynamic Walking Gait:
      - Direct zero-lag SVG coordinate mapping (eliminated CSS transition stutter).
      - Interactive direct canvas drag + slider + smooth button gliding.
      - Realistic walking gait with swinging legs, arms, and subtle torso bobbing.
   2. Real-World 360° Electrostatic Field (1 kV to 500 kV Range):
      - 360° omnidirectional circular electrostatic field radiating from panel.
      - Concentric warning perimeter, mid-field arc, and inner danger core.
   3. Authentic Hardware Indications:
      - Center RDY LED glows bright GREEN when active & safe.
      - Dual Flank ALRM LEDs flash ultra-bright RED upon field breach.
      - Pulsing >70 dB Web Audio API sound generator.
   ================================================================ */

interface VoltageOption {
  label: string;
  value: number;
  unit: string;
  category: string;
  description: string;
  warningDistanceMeters: number;
}

const CALIBRATED_VOLTAGES: VoltageOption[] = [
  { label: "1 kV", value: 1, unit: "kV", category: "Low Voltage Distribution", description: "1 kV auxiliary power panel & motor control center", warningDistanceMeters: 0.4 },
  { label: "3.3 kV", value: 3.3, unit: "kV", category: "Medium Voltage Plant", description: "3.3 kV industrial plant distribution switchboard", warningDistanceMeters: 0.7 },
  { label: "11 kV", value: 11, unit: "kV", category: "Distribution Feeder", description: "11 kV overhead distribution line / kiosk breaker", warningDistanceMeters: 1.1 },
  { label: "33 kV", value: 33, unit: "kV", category: "Substation Incomer", description: "33 kV primary substation switchgear panel", warningDistanceMeters: 1.6 },
  { label: "66 kV", value: 66, unit: "kV", category: "Sub-Transmission", description: "66 kV regional transformer terminal bay", warningDistanceMeters: 2.4 },
  { label: "132 kV", value: 132, unit: "kV", category: "Grid Transmission", description: "132 kV outdoor switchyard busbar & gantry", warningDistanceMeters: 3.5 },
  { label: "220 kV", value: 220, unit: "kV", category: "Bulk Transmission", description: "220 kV substation interconnector bay", warningDistanceMeters: 4.6 },
  { label: "500 kV", value: 500, unit: "kV", category: "Extra High Voltage (EHV)", description: "500 kV bulk grid transmission corridor", warningDistanceMeters: 6.2 },
];

export default function HelmetProximitySimulator({
  product,
}: {
  product: ProductData;
}) {
  const config = product.safetySimulator;
  const voltageList: VoltageOption[] =
    (config?.voltageOptions as VoltageOption[]) || CALIBRATED_VOLTAGES;

  // Simulator States
  const [isPanelEnergized, setIsPanelEnergized] = useState<boolean>(true);
  const [selectedVoltage, setSelectedVoltage] = useState<number>(
    config?.defaultVoltage || 33
  );
  // avatarPct: 0% (Safe Entrance, 10.0m) to 100% (Contact Boundary, 0.4m)
  const [avatarPct, setAvatarPct] = useState<number>(15);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [isAutoPatrol, setIsAutoPatrol] = useState<boolean>(false);
  const [isSelfTesting, setIsSelfTesting] = useState<boolean>(false);
  const [mountMode, setMountMode] = useState<"helmet" | "wrist">("helmet");
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Audio & Animation References
  const audioCtxRef = useRef<AudioContext | null>(null);
  const buzzerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const patrolRafRef = useRef<number | null>(null);
  const glideRafRef = useRef<number | null>(null);
  const patrolDirRef = useRef<number>(1);
  const selfTestTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const currentVoltageObj =
    voltageList.find((v) => v.value === selectedVoltage) || voltageList[3];

  // Physical Distance Calculation:
  // 0% = 10.0 meters (Safe Entrance on Left)
  // 100% = 0.4 meters (Adjacent to Charged Panel)
  const currentDistanceMeters = Math.max(
    0.4,
    Number((10.0 - (avatarPct / 100) * 9.6).toFixed(2))
  );

  const hazardRadiusMeters = currentVoltageObj.warningDistanceMeters || 1.6;

  // Hazard Condition:
  // Avatar is inside the 360° electrostatic radius of the charged panel
  const isInHazardRadius = currentDistanceMeters <= hazardRadiusMeters;

  // Alarm Condition:
  // Inside hazard radius AND panel is energized (or self-test active)
  const isAlarmActive =
    (isInHazardRadius && isPanelEnergized) || isSelfTesting;

  // Electric Field Gradient (kV/m) approximation: E ~ V / (d^1.2)
  const fieldStrength = isPanelEnergized
    ? Math.min(99.9, Number(((selectedVoltage / Math.pow(Math.max(0.4, currentDistanceMeters), 1.2)) * 0.35).toFixed(1)))
    : 0;

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
      osc.frequency.setValueAtTime(2700, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(2200, ctx.currentTime + 0.055);

      gain.gain.setValueAtTime(0.10, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.065);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.065);
    } catch {
      // Autoplay fallback
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
      osc1.frequency.setValueAtTime(1100, ctx.currentTime);
      osc1.frequency.setValueAtTime(1750, ctx.currentTime + 0.12);

      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(2350, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start(ctx.currentTime + 0.12);
      osc1.stop(ctx.currentTime + 0.35);
      osc2.stop(ctx.currentTime + 0.35);
    } catch {
      // Audio fallback
    }
  }, [soundEnabled]);

  // Handle Alarm Audio Pulsing (>70 dB Rapid Beeping)
  useEffect(() => {
    if (isAlarmActive && soundEnabled) {
      initAudio();
      playBuzzerBeep();
      const beepInterval = Math.max(90, Math.min(260, currentDistanceMeters * 45));
      buzzerIntervalRef.current = setInterval(playBuzzerBeep, beepInterval);
    } else {
      if (buzzerIntervalRef.current) {
        clearInterval(buzzerIntervalRef.current);
        buzzerIntervalRef.current = null;
      }
    }

    return () => {
      if (buzzerIntervalRef.current) {
        clearInterval(buzzerIntervalRef.current);
      }
    };
  }, [isAlarmActive, soundEnabled, currentDistanceMeters, initAudio, playBuzzerBeep]);

  // Auto-Patrol Smooth Walking Loop (60 FPS)
  useEffect(() => {
    if (!isAutoPatrol) {
      if (patrolRafRef.current) {
        cancelAnimationFrame(patrolRafRef.current);
        patrolRafRef.current = null;
      }
      return;
    }

    let lastTime = performance.now();
    const animatePatrol = (time: number) => {
      const delta = Math.min(0.05, (time - lastTime) / 1000);
      lastTime = time;

      setAvatarPct((prev) => {
        let next = prev + patrolDirRef.current * delta * 20; // 20% per second
        if (next >= 82) {
          next = 82;
          patrolDirRef.current = -1;
        } else if (next <= 6) {
          next = 6;
          patrolDirRef.current = 1;
        }
        return next;
      });

      patrolRafRef.current = requestAnimationFrame(animatePatrol);
    };

    patrolRafRef.current = requestAnimationFrame(animatePatrol);

    return () => {
      if (patrolRafRef.current) {
        cancelAnimationFrame(patrolRafRef.current);
      }
    };
  }, [isAutoPatrol]);

  // Smooth Gliding for Button Clicks
  const glideToTarget = (targetPct: number) => {
    initAudio();
    if (isAutoPatrol) setIsAutoPatrol(false);
    if (glideRafRef.current) {
      cancelAnimationFrame(glideRafRef.current);
    }

    const startPct = avatarPct;
    const diff = targetPct - startPct;
    const duration = 400; // 400ms smooth glide
    const startTime = performance.now();

    const step = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setAvatarPct(startPct + diff * ease);

      if (progress < 1) {
        glideRafRef.current = requestAnimationFrame(step);
      }
    };

    glideRafRef.current = requestAnimationFrame(step);
  };

  // Self-Test Trigger
  const triggerSelfTest = () => {
    initAudio();
    setIsSelfTesting(true);
    playSelfTestChime();

    if (selfTestTimeoutRef.current) {
      clearTimeout(selfTestTimeoutRef.current);
    }

    selfTestTimeoutRef.current = setTimeout(() => {
      setIsSelfTesting(false);
    }, 1800);
  };

  // Convert distance in meters to SVG pixel coordinates
  // SVG Canvas ViewBox: 920 x 440
  // Panel center: X = 770, Y = 235
  // Ground level: Y = 350
  // Track span: 10.0m is at X = 90 (~68 px per meter)
  const pxPerMeter = 68.0;
  const panelCenterX = 770;
  const panelCenterY = 235;
  const avatarPixelX = panelCenterX - currentDistanceMeters * pxPerMeter;
  const hazardRadiusPixels = hazardRadiusMeters * pxPerMeter;
  const boundaryLineX = panelCenterX - hazardRadiusPixels;

  // Safe position for HUD tag: always in the open yard area, never behind panel!
  const badgeX = Math.min(panelCenterX - 65, Math.max(80, boundaryLineX));

  // Dynamic Walking Gait Calculation (Leg Strides & Arm Swings)
  const walkPhase = avatarPct * 0.45;
  const legAngleL = Math.sin(walkPhase) * 14;
  const legAngleR = -Math.sin(walkPhase) * 14;
  const armAngleL = -Math.sin(walkPhase) * 12;
  const armAngleR = Math.sin(walkPhase) * 12;
  const bodyBobY = Math.abs(Math.sin(walkPhase * 2)) * 1.5;

  // Canvas Drag Handling
  const handleSvgPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    initAudio();
    if (isAutoPatrol) setIsAutoPatrol(false);
    setIsDragging(true);
    handlePointerMove(e);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    if (!svgRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 920;

    // Map clickX to avatarPct (x = 90 is 0%, x = 740 is 100%)
    const trackStart = 90;
    const trackEnd = 740;
    const newPct = Math.max(0, Math.min(100, ((clickX - trackStart) / (trackEnd - trackStart)) * 100));
    setAvatarPct(newPct);
  };

  return (
    <section
      id="product-safety-simulator"
      className="relative w-full overflow-hidden bg-[#030712] py-20 text-white"
    >
      {/* Background Atmosphere Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-[#6366F1]/10 blur-[130px]" />
        <div className="absolute top-1/3 -right-32 h-[550px] w-[550px] rounded-full bg-[#EC4899]/10 blur-[140px]" />
        <div className="absolute -bottom-32 left-1/3 h-[500px] w-[500px] rounded-full bg-[#F59E0B]/8 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            HEADER SECTION
            ======================================================== */}
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              {config?.badge || "Interactive Proximity Simulator"}
            </span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {config?.title ||
              "Hands-Free Electric Field Hazard & Proximity Simulator"}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            {config?.subtitle ||
              "Simulate technician movement near energized high-voltage panels to experience 360° electrostatic proximity detection in real time."}
          </p>
        </div>

        {/* ========================================================
            3-COLUMN COCKPIT CONTAINER
            ======================================================== */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* ------------------------------------------------------
              LEFT COLUMN: ENVIRONMENT CONTROLS & SWITCHBOARD (3 Cols)
              ------------------------------------------------------ */}
          <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl backdrop-blur-xl lg:col-span-3">
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Grid Power State
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                    isPanelEnergized
                      ? "border border-red-500/40 bg-red-500/20 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.4)]"
                      : "border border-emerald-500/40 bg-emerald-500/20 text-emerald-400"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isPanelEnergized
                        ? "animate-ping bg-red-400"
                        : "bg-emerald-400"
                    }`}
                  />
                  {isPanelEnergized ? "LIVE ENERGIZED" : "DE-ENERGIZED (DEAD)"}
                </span>
              </div>

              {/* Main Breaker Toggle */}
              <button
                onClick={() => {
                  initAudio();
                  setIsPanelEnergized(!isPanelEnergized);
                }}
                className={`relative flex w-full items-center justify-between rounded-xl border p-3.5 text-left font-semibold transition-all duration-300 ${
                  isPanelEnergized
                    ? "border-red-500/50 bg-gradient-to-r from-red-950/60 to-slate-900/90 text-white shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:border-red-400"
                    : "border-slate-700 bg-slate-800/80 text-slate-300 hover:border-slate-500"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      isPanelEnergized
                        ? "bg-red-500/20 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                        : "bg-slate-700/50 text-slate-400"
                    }`}
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400">
                      High-Voltage Panel
                    </div>
                    <div className="text-sm font-bold text-white">
                      {isPanelEnergized ? `Panel Energized (${selectedVoltage} kV)` : "Panel Grounded & Dead"}
                    </div>
                  </div>
                </div>
                <div
                  className={`flex h-6 w-11 items-center rounded-full p-1 transition-colors duration-300 ${
                    isPanelEnergized ? "bg-red-500" : "bg-slate-700"
                  }`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-white transition-transform duration-300 ${
                      isPanelEnergized ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Operating Voltage Level Grid (1 kV to 500 kV) */}
            <div>
              <div className="mb-2.5 flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Operating Voltage Level
                </label>
                <span className="text-[11px] font-semibold text-amber-400">
                  Warning Radius: {currentVoltageObj.warningDistanceMeters}m
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {voltageList.map((v) => {
                  const isSelected = v.value === selectedVoltage;
                  return (
                    <button
                      key={v.value}
                      onClick={() => {
                        initAudio();
                        setSelectedVoltage(v.value);
                      }}
                      className={`flex flex-col items-center justify-center rounded-lg border py-2 px-1 text-center transition-all ${
                        isSelected
                          ? "border-amber-400/60 bg-gradient-to-b from-amber-500/20 to-amber-600/10 font-bold text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.25)]"
                          : "border-slate-800 bg-slate-800/40 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                      }`}
                    >
                      <span className="text-xs font-bold">{v.label}</span>
                      <span className="text-[9px] text-slate-500">
                        {v.warningDistanceMeters}m
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detector Placement Mode Toggle */}
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                Detector Placement Mode
              </label>
              <div className="grid grid-cols-2 gap-2 rounded-xl border border-slate-800 bg-slate-950/60 p-1">
                <button
                  onClick={() => setMountMode("helmet")}
                  className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-all ${
                    mountMode === "helmet"
                      ? "bg-slate-800 text-white shadow-md"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span>⛑️</span> Hard Hat Mount
                </button>
                <button
                  onClick={() => setMountMode("wrist")}
                  className={`flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold transition-all ${
                    mountMode === "wrist"
                      ? "bg-slate-800 text-white shadow-md"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span>✋</span> Wrist Mount
                </button>
              </div>
            </div>

            {/* Audio Toggle, Auto-Patrol & Self-Test */}
            <div className="mt-auto flex flex-col gap-2 pt-2">
              <button
                onClick={() => {
                  initAudio();
                  setSoundEnabled(!soundEnabled);
                }}
                className={`flex w-full items-center justify-between rounded-xl border px-3.5 py-2.5 text-xs font-semibold transition-all ${
                  soundEnabled
                    ? "border-emerald-500/40 bg-emerald-950/30 text-emerald-300"
                    : "border-slate-800 bg-slate-800/40 text-slate-400 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{soundEnabled ? "🔊" : "🔇"}</span>
                  <span>Audio Alarm Sound (&gt;70 dB)</span>
                </div>
                <span
                  className={`text-[10px] uppercase font-bold tracking-wider ${
                    soundEnabled ? "text-emerald-400" : "text-slate-500"
                  }`}
                >
                  {soundEnabled ? "ACTIVE" : "MUTED"}
                </span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    initAudio();
                    setIsAutoPatrol(!isAutoPatrol);
                  }}
                  className={`flex items-center justify-center gap-1.5 rounded-xl border py-2.5 text-xs font-semibold transition-all ${
                    isAutoPatrol
                      ? "border-indigo-500/50 bg-indigo-950/50 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.25)]"
                      : "border-slate-800 bg-slate-800/50 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <span>{isAutoPatrol ? "⏸️" : "🚶"}</span>
                  <span>{isAutoPatrol ? "Pause Walk" : "Auto Patrol"}</span>
                </button>

                <button
                  onClick={triggerSelfTest}
                  disabled={isSelfTesting}
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/80 py-2.5 text-xs font-semibold text-white transition-all hover:border-amber-500/50 hover:bg-slate-700 disabled:opacity-50"
                >
                  <span>⚡</span>
                  <span>{isSelfTesting ? "Testing..." : "Self-Test"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------
              CENTER COLUMN: SUBSTATION YARD CANVAS (6 Cols)
              ------------------------------------------------------ */}
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl backdrop-blur-xl lg:col-span-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                  Substation Yard Proximity Field (360°)
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-400">
                  Worker Distance:
                </span>
                <span
                  className={`text-sm font-mono font-bold ${
                    isInHazardRadius && isPanelEnergized
                      ? "text-red-400 animate-pulse"
                      : "text-emerald-400"
                  }`}
                >
                  {currentDistanceMeters.toFixed(2)} m
                </span>
              </div>
            </div>

            {/* Interactive High-Fidelity SVG Canvas (Direct 60fps Dragging) */}
            <div className="relative h-[380px] w-full select-none overflow-hidden rounded-xl border border-slate-800 bg-[#050814]">
              <svg
                ref={svgRef}
                viewBox="0 0 920 440"
                className="h-full w-full cursor-ew-resize"
                preserveAspectRatio="xMidYMid meet"
                onPointerDown={handleSvgPointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={() => setIsDragging(false)}
                onPointerLeave={() => setIsDragging(false)}
              >
                <defs>
                  {/* Sky Gradient */}
                  <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0B132B" />
                    <stop offset="60%" stopColor="#070B18" />
                    <stop offset="100%" stopColor="#04060E" />
                  </linearGradient>

                  {/* Ground Gradient */}
                  <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#0A0F1D" />
                  </linearGradient>

                  {/* Full 360° Spherical Electrostatic Radial Gradient */}
                  <radialGradient id="field360Aura" cx="50%" cy="50%" r="50%">
                    <stop
                      offset="0%"
                      stopColor={isPanelEnergized ? "#EF4444" : "#64748B"}
                      stopOpacity={isPanelEnergized ? "0.45" : "0.08"}
                    />
                    <stop
                      offset="50%"
                      stopColor={isPanelEnergized ? "#F59E0B" : "#475569"}
                      stopOpacity={isPanelEnergized ? "0.25" : "0.03"}
                    />
                    <stop
                      offset="85%"
                      stopColor={isPanelEnergized ? "#3B82F6" : "#334155"}
                      stopOpacity={isPanelEnergized ? "0.10" : "0.01"}
                    />
                    <stop
                      offset="100%"
                      stopColor={isPanelEnergized ? "#3B82F6" : "#334155"}
                      stopOpacity="0"
                    />
                  </radialGradient>

                  {/* Strobe Flare Glow for Avatar HMD */}
                  <radialGradient id="strobeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FF0000" stopOpacity="0.95" />
                    <stop offset="40%" stopColor="#FF4400" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#FF0000" stopOpacity="0" />
                  </radialGradient>

                  {/* Safe Green Glow */}
                  <radialGradient id="readyGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.85" />
                    <stop offset="50%" stopColor="#059669" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </radialGradient>

                  {/* Clip path for upper yard above ground level */}
                  <clipPath id="skyYardClip">
                    <rect x="0" y="0" width="920" height="350" />
                  </clipPath>
                </defs>

                {/* Sky Backdrop */}
                <rect x="0" y="0" width="920" height="350" fill="url(#skyGrad)" />

                {/* Substation Steel Lattice Gantry in Background */}
                <g stroke="#1E293B" strokeWidth="1.5" opacity="0.6">
                  <line x1="140" y1="30" x2="140" y2="350" />
                  <line x1="280" y1="50" x2="280" y2="350" />
                  <line x1="440" y1="30" x2="440" y2="350" />
                  <line x1="600" y1="50" x2="600" y2="350" />
                  <line x1="100" y1="100" x2="740" y2="100" />
                  <line x1="140" y1="30" x2="280" y2="100" />
                  <line x1="280" y1="100" x2="440" y2="30" />
                  <line x1="440" y1="30" x2="600" y2="100" />
                  <circle cx="140" cy="100" r="5" fill="#475569" />
                  <circle cx="280" cy="100" r="5" fill="#475569" />
                  <circle cx="440" cy="100" r="5" fill="#475569" />
                  <circle cx="600" cy="100" r="5" fill="#475569" />
                </g>

                {/* ====================================================
                    FULL 360° ELECTROSTATIC RADIUS FIELD
                    Radiating 360 degrees around panel center (panelCenterX, panelCenterY)
                    ==================================================== */}
                <g clipPath="url(#skyYardClip)">
                  {/* 1. Full 360° Pulsating Electrostatic Field Gradient Glow */}
                  <circle
                    cx={panelCenterX}
                    cy={panelCenterY}
                    r={hazardRadiusPixels}
                    fill="url(#field360Aura)"
                    className={isPanelEnergized ? "animate-pulse" : ""}
                  />

                  {/* 2. Full 360° Outer Warning Boundary Ring (Dashed Circle) */}
                  <circle
                    cx={panelCenterX}
                    cy={panelCenterY}
                    r={hazardRadiusPixels}
                    fill="none"
                    stroke={isPanelEnergized ? "#EF4444" : "#475569"}
                    strokeWidth={isPanelEnergized ? "2.5" : "1"}
                    strokeDasharray={isPanelEnergized ? "8 6" : "4 4"}
                    opacity={isPanelEnergized ? "0.95" : "0.4"}
                  />

                  {isPanelEnergized && (
                    <>
                      {/* 3. Full 360° Mid-Warning Field Ring */}
                      <circle
                        cx={panelCenterX}
                        cy={panelCenterY}
                        r={hazardRadiusPixels * 0.65}
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="1.5"
                        strokeDasharray="6 6"
                        opacity="0.75"
                      />
                      {/* 4. Full 360° Inner Arc-Flash Danger Zone Core */}
                      <circle
                        cx={panelCenterX}
                        cy={panelCenterY}
                        r={hazardRadiusPixels * 0.35}
                        fill="#EF4444"
                        fillOpacity="0.18"
                        stroke="#EF4444"
                        strokeWidth="2"
                        opacity="0.85"
                      />
                    </>
                  )}

                  {/* Vertical Boundary Marker Line from top to ground */}
                  {isPanelEnergized && (
                    <line
                      x1={boundaryLineX}
                      y1="50"
                      x2={boundaryLineX}
                      y2="350"
                      stroke="#EF4444"
                      strokeWidth="1.5"
                      strokeDasharray="6 4"
                      opacity="0.8"
                    />
                  )}

                  {/* Floating HUD Badge above Radius Boundary (Always visible in open yard!) */}
                  <g transform={`translate(${badgeX}, 38)`}>
                    <rect
                      x="-65"
                      y="-12"
                      width="130"
                      height="24"
                      rx="6"
                      fill={isPanelEnergized ? "#7F1D1D" : "#1E293B"}
                      stroke={isPanelEnergized ? "#EF4444" : "#475569"}
                      strokeWidth="1.5"
                    />
                    <text
                      x="0"
                      y="4"
                      fill={isPanelEnergized ? "#FECACA" : "#94A3B8"}
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {isPanelEnergized ? `⚡ 360° MAD: ${hazardRadiusMeters}m` : "INACTIVE FIELD"}
                    </text>
                  </g>
                </g>

                {/* Concrete Substation Ground */}
                <rect x="0" y="350" width="920" height="90" fill="url(#groundGrad)" />
                <line x1="0" y1="350" x2="920" y2="350" stroke="#475569" strokeWidth="2.5" />

                {/* Metric Distance Ruler on Floor (10m down to 0m) */}
                <g opacity="0.85">
                  {[0, 2, 4, 6, 8, 10].map((m) => {
                    const lineX = panelCenterX - m * pxPerMeter;
                    if (lineX < 50) return null;
                    return (
                      <g key={m}>
                        <line x1={lineX} y1="350" x2={lineX} y2="366" stroke="#38BDF8" strokeWidth="2" />
                        <text
                          x={lineX}
                          y="384"
                          fill="#E2E8F0"
                          fontSize="11"
                          fontFamily="monospace"
                          fontWeight="bold"
                          textAnchor="middle"
                        >
                          {m}m
                        </text>
                      </g>
                    );
                  })}
                  {[1, 3, 5, 7, 9].map((m) => {
                    const lineX = panelCenterX - m * pxPerMeter;
                    if (lineX < 50) return null;
                    return (
                      <line key={m} x1={lineX} y1="350" x2={lineX} y2="358" stroke="#64748B" strokeWidth="1" />
                    );
                  })}
                </g>

                {/* High-Voltage Physical Panel Unit (Right Side: centered at panelCenterX) */}
                <g transform={`translate(${panelCenterX - 42}, 130)`}>
                  {/* Top Red Flashing Strobe Beacon (y = -24) */}
                  <ellipse cx="42" cy="-24" rx="7" ry="5" fill={isPanelEnergized ? "#EF4444" : "#475569"} />
                  {isPanelEnergized && (
                    <circle cx="42" cy="-24" r="12" fill="#EF4444" opacity="0.4" className="animate-ping" />
                  )}

                  {/* 3 High-Voltage Insulators / Bushings on Top (y = -22 to 0) */}
                  <rect x="15" y="-18" width="10" height="18" rx="2" fill="#B45309" stroke="#78350F" strokeWidth="1" />
                  <rect x="37" y="-22" width="10" height="22" rx="2" fill="#B45309" stroke="#78350F" strokeWidth="1" />
                  <rect x="59" y="-18" width="10" height="18" rx="2" fill="#B45309" stroke="#78350F" strokeWidth="1" />

                  {/* Cabinet Body (Height 220, resting on ground at y = 220) */}
                  <rect
                    x="0"
                    y="0"
                    width="84"
                    height="220"
                    rx="6"
                    fill="#1E293B"
                    stroke="#334155"
                    strokeWidth="2.5"
                  />
                  {/* Inner Enclosure Bevel */}
                  <rect
                    x="6"
                    y="8"
                    width="72"
                    height="204"
                    rx="4"
                    fill="#0F172A"
                    stroke="#475569"
                    strokeWidth="1.5"
                  />

                  {/* Yellow Hazard Warning Plate */}
                  <rect x="12" y="22" width="60" height="42" rx="3" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1.5" />
                  <polygon points="42,28 27,56 57,56" fill="#DC2626" />
                  <text x="42" y="52" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle">
                    ⚡
                  </text>
                  <text x="42" y="76" fill="#F8FAFC" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                    {selectedVoltage} kV LIVE
                  </text>

                  {/* Busbar Viewing Windows */}
                  <rect x="12" y="90" width="60" height="54" rx="3" fill="#020617" stroke="#334155" strokeWidth="1" />
                  <line x1="24" y1="96" x2="24" y2="138" stroke={isPanelEnergized ? "#EF4444" : "#475569"} strokeWidth="4" />
                  <line x1="42" y1="96" x2="42" y2="138" stroke={isPanelEnergized ? "#F59E0B" : "#475569"} strokeWidth="4" />
                  <line x1="60" y1="96" x2="60" y2="138" stroke={isPanelEnergized ? "#3B82F6" : "#475569"} strokeWidth="4" />

                  {/* Cabinet Ventilation Louvers */}
                  <line x1="22" y1="162" x2="62" y2="162" stroke="#334155" strokeWidth="2" />
                  <line x1="22" y1="172" x2="62" y2="172" stroke="#334155" strokeWidth="2" />
                  <line x1="22" y1="182" x2="62" y2="182" stroke="#334155" strokeWidth="2" />
                </g>

                {/* Laser Distance Measurement Beam */}
                <line
                  x1={avatarPixelX + 16}
                  y1={240}
                  x2={panelCenterX - 42}
                  y2={240}
                  stroke={isAlarmActive ? "#EF4444" : "#10B981"}
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.75"
                />

                {/* ====================================================
                    TECHNICIAN AVATAR (SILKY SMOOTH ZERO-LAG MOVEMENT + GAIT)
                    Grounded on floor at y = 350
                    ==================================================== */}
                <g transform={`translate(${avatarPixelX - 25}, ${215 + bodyBobY})`}>
                  {/* Distance Callout Badge above Avatar */}
                  <g transform="translate(25, -24)">
                    <rect
                      x="-42"
                      y="-12"
                      width="84"
                      height="22"
                      rx="6"
                      fill={isAlarmActive ? "#7F1D1D" : "#064E3B"}
                      stroke={isAlarmActive ? "#EF4444" : "#10B981"}
                      strokeWidth="1.5"
                    />
                    <text
                      x="0"
                      y="2"
                      fill="#FFFFFF"
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      {isAlarmActive ? `ALARM ${currentDistanceMeters}m` : `SAFE ${currentDistanceMeters}m`}
                    </text>
                  </g>

                  {/* Strobe Warning Glow around Hard Hat when Alarming */}
                  {isAlarmActive && (
                    <g transform="translate(32, 22)">
                      <circle cx="0" cy="0" r="38" fill="url(#strobeGlow)" className="animate-ping" />
                      <circle cx="0" cy="0" r="22" fill="#EF4444" opacity="0.6" />
                      {/* Warning Rays */}
                      <line x1="0" y1="-28" x2="0" y2="-40" stroke="#FF0000" strokeWidth="2.5" />
                      <line x1="22" y1="-18" x2="34" y2="-28" stroke="#FF0000" strokeWidth="2.5" />
                      <line x1="28" y1="0" x2="42" y2="0" stroke="#FF0000" strokeWidth="2.5" />
                      <line x1="20" y1="18" x2="32" y2="26" stroke="#FF0000" strokeWidth="2.5" />
                    </g>
                  )}

                  {/* Ready Green Halo when Safe */}
                  {!isAlarmActive && (
                    <circle cx="32" cy="22" r="10" fill="url(#readyGlow)" />
                  )}

                  {/* Avatar Body Illustration with Realistic Walking Gait */}
                  {/* 1. Dynamic Legs & Boots */}
                  <g stroke="#0F172A" strokeWidth="1.5">
                    {/* Left Leg with stride swing */}
                    <g transform={`rotate(${legAngleL}, 20, 100)`}>
                      <line x1="20" y1="100" x2="18" y2="132" stroke="#1E293B" strokeWidth="8.5" strokeLinecap="round" />
                      <rect x="12" y="128" width="16" height="7" rx="2" fill="#451A03" />
                    </g>

                    {/* Right Leg with reciprocal stride swing */}
                    <g transform={`rotate(${legAngleR}, 30, 100)`}>
                      <line x1="30" y1="100" x2="32" y2="132" stroke="#1E293B" strokeWidth="8.5" strokeLinecap="round" />
                      <rect x="26" y="128" width="16" height="7" rx="2" fill="#451A03" />
                    </g>
                  </g>

                  {/* 2. Torso with High-Vis Safety Vest */}
                  <rect x="14" y="44" width="22" height="58" rx="4" fill="#EA580C" />
                  {/* Reflective Silver Stripes */}
                  <line x1="14" y1="62" x2="36" y2="62" stroke="#E2E8F0" strokeWidth="3.5" />
                  <line x1="14" y1="78" x2="36" y2="78" stroke="#E2E8F0" strokeWidth="3.5" />
                  <line x1="20" y1="44" x2="20" y2="102" stroke="#E2E8F0" strokeWidth="2" />
                  <line x1="30" y1="44" x2="30" y2="102" stroke="#E2E8F0" strokeWidth="2" />

                  {/* 3. Dynamic Arms with Walking Swing */}
                  <g transform={`rotate(${armAngleL}, 15, 48)`}>
                    <line x1="15" y1="48" x2="8" y2="82" stroke="#EA580C" strokeWidth="5.5" strokeLinecap="round" />
                    <circle cx="7" cy="84" r="4" fill="#FDBA74" />
                  </g>
                  <g transform={`rotate(${armAngleR}, 35, 48)`}>
                    <line x1="35" y1="48" x2="42" y2="82" stroke="#EA580C" strokeWidth="5.5" strokeLinecap="round" />
                    <circle cx="43" cy="84" r="4" fill="#FDBA74" />
                  </g>

                  {/* 4. Head & Face */}
                  <circle cx="25" cy="30" r="11" fill="#FDBA74" />
                  {/* Safety Glasses */}
                  <rect x="26" y="26" width="10" height="5" rx="1.5" fill="#38BDF8" opacity="0.85" />

                  {/* 5. Hard Hat Helmet (White Shell) */}
                  <path
                    d="M 12 24 C 12 10, 38 10, 38 24 C 43 25, 43 27, 38 27 L 12 27 C 7 27, 7 25, 12 24 Z"
                    fill="#F8FAFC"
                    stroke="#CBD5E1"
                    strokeWidth="1"
                  />
                  {/* Front Visor Rim */}
                  <path d="M 36 24 Q 44 26 42 29 L 36 28 Z" fill="#F1F5F9" />

                  {/* 6. HVTI HMD Detector Module Mounted on Helmet */}
                  {mountMode === "helmet" ? (
                    <g transform="translate(35, 16)">
                      {/* Yellow Chamfered Enclosure */}
                      <rect x="0" y="0" width="8" height="11" rx="1.5" fill="#E2EE25" stroke="#000000" strokeWidth="0.8" />
                      {/* Black Strap */}
                      <line x1="-12" y1="5" x2="0" y2="5" stroke="#111113" strokeWidth="2" />
                      {/* Active LED Strobe on Detector Face: Red ALRM or Green RDY */}
                      <circle
                        cx="4"
                        cy="6"
                        r="2.5"
                        fill={isAlarmActive ? "#FF0000" : "#10B981"}
                      />
                    </g>
                  ) : (
                    /* Wrist Mount on Arm */
                    <g transform="translate(40, 78)">
                      <rect x="0" y="0" width="8" height="8" rx="1.5" fill="#E2EE25" stroke="#000000" strokeWidth="0.8" />
                      <circle
                        cx="4"
                        cy="4"
                        r="2"
                        fill={isAlarmActive ? "#FF0000" : "#10B981"}
                      />
                    </g>
                  )}
                </g>
              </svg>
            </div>

            {/* Position Slider Bar */}
            <div className="flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-950/60 p-3">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-400">
                  Technician Walking Position (X-Axis)
                </span>
                <span className="text-amber-400">
                  {currentDistanceMeters.toFixed(2)} meters from panel
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="0.2"
                value={avatarPct}
                onChange={(e) => {
                  initAudio();
                  if (isAutoPatrol) setIsAutoPatrol(false);
                  setAvatarPct(Number(e.target.value));
                }}
                className="h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-800 accent-amber-500 hover:accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>◀ 10.0m (Safe Entrance)</span>
                <span>5.0m (Yard Center)</span>
                <span>0.4m (Panel Hazard) ▶</span>
              </div>
            </div>

            {/* Smooth Step Gliding Controls */}
            <div className="grid grid-cols-4 gap-2">
              <button
                onClick={() => glideToTarget(0)}
                className="rounded-lg border border-slate-800 bg-slate-800/60 py-2 text-xs font-medium text-slate-300 hover:border-slate-700 hover:text-white"
              >
                Safe Start (10m)
              </button>
              <button
                onClick={() => glideToTarget(Math.max(0, avatarPct - 15))}
                className="rounded-lg border border-slate-800 bg-slate-800/60 py-2 text-xs font-medium text-slate-300 hover:border-slate-700 hover:text-white"
              >
                ⬅ Step Away
              </button>
              <button
                onClick={() => glideToTarget(Math.min(100, avatarPct + 15))}
                className="rounded-lg border border-slate-800 bg-slate-800/60 py-2 text-xs font-medium text-slate-300 hover:border-slate-700 hover:text-white"
              >
                Step Closer ➡
              </button>
              <button
                onClick={() => {
                  const boundaryPct = ((10.0 - hazardRadiusMeters) / 9.6) * 100;
                  glideToTarget(Math.max(0, Math.min(100, boundaryPct + 5)));
                }}
                className="rounded-lg border border-amber-500/40 bg-amber-500/10 py-2 text-xs font-medium text-amber-300 hover:bg-amber-500/20"
              >
                ⚡ Test Radius
              </button>
            </div>
          </div>

          {/* ------------------------------------------------------
              RIGHT COLUMN: HARDWARE STROBE & REAL-TIME TELEMETRY (3 Cols)
              ------------------------------------------------------ */}
          <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl backdrop-blur-xl lg:col-span-3">
            {/* Live Hardware Replica Indicator */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  HMD Hardware Strobe
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  HVTI-HMD-V1
                </span>
              </div>

              {/* Physical Faceplate Replica Box */}
              <div
                className={`relative overflow-hidden rounded-xl border-2 p-4 transition-all duration-300 ${
                  isAlarmActive
                    ? "border-red-500 bg-gradient-to-b from-[#E2EE25] to-[#C7D31E] shadow-[0_0_25px_rgba(239,68,68,0.5)]"
                    : "border-amber-400/80 bg-gradient-to-b from-[#E2EE25] to-[#D4E01C] shadow-lg"
                }`}
              >
                {/* Top Power Button Section with I/O Label */}
                <div className="mb-2 flex flex-col items-center">
                  <div className="mb-1 rounded border border-black/40 bg-[#F5FF80] px-3 py-0.5 text-[10px] font-black text-black">
                    I/O
                  </div>
                  <div className="h-6 w-6 rounded-full border-2 border-black/30 bg-[#18181A] shadow-inner" />
                </div>

                {/* Middle LED Row: ALRM (Red) — RDY (Green) — ALRM (Red) */}
                <div className="my-2.5 flex items-center justify-around rounded-lg bg-black/10 p-2">
                  {/* Left ALRM LED (Flashes RED on alarm) */}
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`h-4 w-4 rounded-full border border-black/40 transition-all ${
                        isAlarmActive
                          ? "bg-red-500 shadow-[0_0_12px_#FF0000] animate-ping"
                          : "bg-red-950 opacity-30"
                      }`}
                    />
                    <span className="text-[8px] font-bold text-black">ALRM</span>
                  </div>

                  {/* Center RDY LED (Glows GREEN when safe & active) */}
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`h-4 w-4 rounded-full border border-black/40 transition-all ${
                        !isAlarmActive
                          ? "bg-emerald-500 shadow-[0_0_10px_#10B981]"
                          : "bg-emerald-950 opacity-30"
                      }`}
                    />
                    <span className="text-[8px] font-bold text-black">RDY</span>
                  </div>

                  {/* Right ALRM LED (Flashes RED on alarm) */}
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`h-4 w-4 rounded-full border border-black/40 transition-all ${
                        isAlarmActive
                          ? "bg-red-500 shadow-[0_0_12px_#FF0000] animate-ping"
                          : "bg-red-950 opacity-30"
                      }`}
                    />
                    <span className="text-[8px] font-bold text-black">ALRM</span>
                  </div>
                </div>

                {/* Bottom Row: CHRG Label & Power Indicator */}
                <div className="mt-3 flex items-center justify-between px-2 text-[8px] font-bold text-black">
                  <span className="rounded bg-[#EDF868] px-2 py-0.5 border border-black/20 font-black">
                    CHRG
                  </span>
                  <div className="flex items-center gap-1.5 font-bold">
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500 shadow-[0_0_6px_#F59E0B]" />
                    <span>PWR OK</span>
                  </div>
                </div>
              </div>

              {/* Dedicated Separate Card: Internal Acoustic Buzzer Status */}
              <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      isAlarmActive
                        ? "bg-red-500/20 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.4)]"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <span className="text-sm">{isAlarmActive ? "🔊" : "🔇"}</span>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-200">
                      Internal Acoustic Buzzer
                    </div>
                    <div
                      className={`text-[10px] font-mono font-semibold ${
                        isAlarmActive ? "text-red-400 animate-pulse" : "text-slate-400"
                      }`}
                    >
                      {isAlarmActive ? "> 75 dB Piercing Beep" : "0 dB (Silent Standby)"}
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  <div
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      isAlarmActive ? "bg-red-500 shadow-[0_0_8px_#EF4444] animate-ping" : "bg-slate-700"
                    }`}
                  />
                  <div
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      isAlarmActive ? "bg-red-500 shadow-[0_0_8px_#EF4444] animate-ping" : "bg-slate-700"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Electrostatic Telemetry Data */}
            <div className="flex flex-col gap-2.5 rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 text-xs">
              <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                <span className="text-slate-400">Field Gradient:</span>
                <span className="font-mono font-bold text-amber-300">
                  {fieldStrength} kV/m
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                <span className="text-slate-400">Hazard Safe Radius:</span>
                <span className="font-mono font-bold text-slate-200">
                  {hazardRadiusMeters.toFixed(1)} m
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
                <span className="text-slate-400">Current Distance:</span>
                <span
                  className={`font-mono font-bold ${
                    isInHazardRadius && isPanelEnergized
                      ? "text-red-400"
                      : "text-emerald-400"
                  }`}
                >
                  {currentDistanceMeters.toFixed(2)} m
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Sensing Coverage:</span>
                <span className="font-mono font-semibold text-indigo-300">
                  360° Spherical
                </span>
              </div>
            </div>

            {/* Safety Assessment Alert Box */}
            <div
              className={`rounded-xl border p-3.5 text-center text-xs font-bold transition-all ${
                isAlarmActive
                  ? "border-red-500/60 bg-red-950/40 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.25)]"
                  : isPanelEnergized
                  ? "border-emerald-500/40 bg-emerald-950/30 text-emerald-300"
                  : "border-slate-700 bg-slate-800/40 text-slate-400"
              }`}
            >
              {isAlarmActive ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-base">⚠️</span>
                  <span>HAZARD ZONE BREACHED! RETREAT IMMEDIATELY</span>
                </div>
              ) : isPanelEnergized ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-base">🛡️</span>
                  <span>SAFE DISTANCE MAINTAINED - ACTIVE MONITORING</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-base">⚪</span>
                  <span>CIRCUIT IS GROUNDED / DE-ENERGIZED</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
