"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { ProductData } from "@/types/product";
import HelmetProximitySimulator from "./HelmetProximitySimulator";
import HotStickReachSimulator from "./HotStickReachSimulator";

/* ================================================================
   HVTI PRODUCT SAFETY SIMULATOR: HIGH VOLTAGE DETECTOR MODEL TP-S9
   File: components/products/ProductSafetySimulator.tsx

   Unified Single-Viewport Cockpit Architecture:
   - 100% Single-Viewport Height on Desktop (Zero dead space anywhere)
   - Left Column: 10-Voltage Grid + Live Conductor Specs & Field Meter + Line State Breaker
   - Center Column: Telemetry HUD + High-Fidelity SVG Canvas + Extension Controls
   - Right Column: Rotary Selector Dial + 12 Notches + Hardware Strobe Verification + Verdict
   ================================================================ */

export type SelectorSwitchPosition =
  | "OFF"
  | "TEST"
  | "240V"
  | "2KV"
  | "11KV"
  | "22KV"
  | "33KV"
  | "66KV"
  | "132KV"
  | "230KV"
  | "400KV"
  | "500KV";

export interface LineVoltageData {
  id: string;
  voltageKV: number;
  label: string;
  lineVoltageDisplay: string;
  pnVoltageDisplay: string;
  category: string;
  nominalVoltageText: string;
  safeClearanceMeters: string;
}

export const LINE_VOLTAGES: LineVoltageData[] = [
  {
    id: "240V",
    voltageKV: 0.24,
    label: "240 V",
    lineVoltageDisplay: "240 V (P-N)",
    pnVoltageDisplay: "240 V P-N",
    category: "Low Voltage",
    nominalVoltageText: "240 V Phase-to-Neutral",
    safeClearanceMeters: "0.05 m",
  },
  {
    id: "2KV",
    voltageKV: 2,
    label: "2 kV",
    lineVoltageDisplay: "2 kV Line",
    pnVoltageDisplay: "1.15 kV P-N",
    category: "Medium Voltage",
    nominalVoltageText: "2 kV Line (1.15 kV P-N)",
    safeClearanceMeters: "0.20 m",
  },
  {
    id: "11KV",
    voltageKV: 11,
    label: "11 kV",
    lineVoltageDisplay: "11 kV Line",
    pnVoltageDisplay: "6.3 kV P-N",
    category: "Distribution Feeder",
    nominalVoltageText: "11 kV Line (6.3 kV P-N)",
    safeClearanceMeters: "0.70 m",
  },
  {
    id: "22KV",
    voltageKV: 22,
    label: "22 kV",
    lineVoltageDisplay: "22 kV Line",
    pnVoltageDisplay: "12.7 kV P-N",
    category: "Distribution Feeder",
    nominalVoltageText: "22 kV Line (12.7 kV P-N)",
    safeClearanceMeters: "0.80 m",
  },
  {
    id: "33KV",
    voltageKV: 33,
    label: "33 kV",
    lineVoltageDisplay: "33 kV Line",
    pnVoltageDisplay: "19.0 kV P-N",
    category: "Substation Incomer",
    nominalVoltageText: "33 kV Line (19.0 kV P-N)",
    safeClearanceMeters: "1.00 m",
  },
  {
    id: "66KV",
    voltageKV: 66,
    label: "66 kV",
    lineVoltageDisplay: "66 kV Line",
    pnVoltageDisplay: "38.1 kV P-N",
    category: "Sub-Transmission",
    nominalVoltageText: "66 kV Line (38.1 kV P-N)",
    safeClearanceMeters: "1.40 m",
  },
  {
    id: "132KV",
    voltageKV: 132,
    label: "132 kV",
    lineVoltageDisplay: "132 kV Line",
    pnVoltageDisplay: "76.2 kV P-N",
    category: "Grid Transmission",
    nominalVoltageText: "132 kV Line (76.2 kV P-N)",
    safeClearanceMeters: "1.90 m",
  },
  {
    id: "230KV",
    voltageKV: 230,
    label: "230 kV",
    lineVoltageDisplay: "230 kV Line",
    pnVoltageDisplay: "133 kV P-N",
    category: "Bulk Transmission",
    nominalVoltageText: "230 kV Line (133 kV P-N)",
    safeClearanceMeters: "2.40 m",
  },
  {
    id: "400KV",
    voltageKV: 400,
    label: "400 kV",
    lineVoltageDisplay: "400 kV Line",
    pnVoltageDisplay: "231 kV P-N",
    category: "Extra High Voltage (EHV)",
    nominalVoltageText: "400 kV Line (231 kV P-N)",
    safeClearanceMeters: "3.50 m",
  },
  {
    id: "500KV",
    voltageKV: 500,
    label: "500 kV",
    lineVoltageDisplay: "500 kV Line",
    pnVoltageDisplay: "289 kV P-N",
    category: "Super Grid Transmission",
    nominalVoltageText: "500 kV Line (289 kV P-N)",
    safeClearanceMeters: "4.20 m",
  },
];

export const SELECTOR_POSITIONS: {
  id: SelectorSwitchPosition;
  label: string;
  angleDeg: number;
  description: string;
}[] = [
  { id: "OFF", label: "OFF", angleDeg: -135, description: "Detector is powered off" },
  { id: "TEST", label: "TEST", angleDeg: -110, description: "Battery & proving unit health test" },
  { id: "240V", label: "240V", angleDeg: -85, description: "240V setting (High sensitivity)" },
  { id: "2KV", label: "2kV", angleDeg: -60, description: "2kV line sensitivity" },
  { id: "11KV", label: "11kV", angleDeg: -35, description: "11kV line sensitivity" },
  { id: "22KV", label: "22kV", angleDeg: -10, description: "22kV line sensitivity" },
  { id: "33KV", label: "33kV", angleDeg: 15, description: "33kV line sensitivity" },
  { id: "66KV", label: "66kV", angleDeg: 40, description: "66kV line sensitivity" },
  { id: "132KV", label: "132kV", angleDeg: 65, description: "132kV line sensitivity" },
  { id: "230KV", label: "230kV", angleDeg: 90, description: "230kV line sensitivity" },
  { id: "400KV", label: "400kV", angleDeg: 115, description: "400kV line sensitivity" },
  { id: "500KV", label: "500kV", angleDeg: 140, description: "500kV line sensitivity" },
];

/* Complete Authentic Sensing Distance Lookup Matrix (in meters) */
export const SENSING_DISTANCE_MATRIX: Record<
  string,
  Record<string, { distanceMeters: number | null; displayText: string }>
> = {
  "240V": {
    "240V": { distanceMeters: 0.05, displayText: "5 cm" },
    "2KV": { distanceMeters: 0.7, displayText: "0.7 m" },
    "11KV": { distanceMeters: 1.5, displayText: "1.5 m" },
    "22KV": { distanceMeters: 2.5, displayText: "2.5 m" },
    "33KV": { distanceMeters: 3.0, displayText: "3.0 m" },
    "66KV": { distanceMeters: 4.0, displayText: "4.0 m" },
    "132KV": { distanceMeters: 5.0, displayText: "5.0 m" },
    "230KV": { distanceMeters: 6.0, displayText: "6.0 m" },
    "400KV": { distanceMeters: 7.0, displayText: "7.0 m" },
    "500KV": { distanceMeters: 8.0, displayText: "8.0 m" },
  },
  "2KV": {
    "240V": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "2KV": { distanceMeters: 0.2, displayText: "0.2 m" },
    "11KV": { distanceMeters: 0.7, displayText: "0.7 m" },
    "22KV": { distanceMeters: 1.3, displayText: "1.3 m" },
    "33KV": { distanceMeters: 1.5, displayText: "1.5 m" },
    "66KV": { distanceMeters: 2.0, displayText: "2.0 m" },
    "132KV": { distanceMeters: 2.5, displayText: "2.5 m" },
    "230KV": { distanceMeters: 3.0, displayText: "3.0 m" },
    "400KV": { distanceMeters: 3.5, displayText: "3.5 m" },
    "500KV": { distanceMeters: 4.5, displayText: "4.5 m" },
  },
  "11KV": {
    "240V": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "2KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "11KV": { distanceMeters: 0.2, displayText: "0.2 m" },
    "22KV": { distanceMeters: 0.3, displayText: "0.3 m" },
    "33KV": { distanceMeters: 0.5, displayText: "0.5 m" },
    "66KV": { distanceMeters: 1.0, displayText: "1.0 m" },
    "132KV": { distanceMeters: 1.5, displayText: "1.5 m" },
    "230KV": { distanceMeters: 2.0, displayText: "2.0 m" },
    "400KV": { distanceMeters: 2.5, displayText: "2.5 m" },
    "500KV": { distanceMeters: 3.0, displayText: "3.0 m" },
  },
  "22KV": {
    "240V": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "2KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "11KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "22KV": { distanceMeters: 0.2, displayText: "0.2 m" },
    "33KV": { distanceMeters: 0.3, displayText: "0.3 m" },
    "66KV": { distanceMeters: 0.6, displayText: "0.6 m" },
    "132KV": { distanceMeters: 1.0, displayText: "1.0 m" },
    "230KV": { distanceMeters: 1.5, displayText: "1.5 m" },
    "400KV": { distanceMeters: 2.0, displayText: "2.0 m" },
    "500KV": { distanceMeters: 2.5, displayText: "2.5 m" },
  },
  "33KV": {
    "240V": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "2KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "11KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "22KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "33KV": { distanceMeters: 0.2, displayText: "0.2 m" },
    "66KV": { distanceMeters: 0.4, displayText: "0.4 m" },
    "132KV": { distanceMeters: 0.7, displayText: "0.7 m" },
    "230KV": { distanceMeters: 1.0, displayText: "1.0 m" },
    "400KV": { distanceMeters: 1.5, displayText: "1.5 m" },
    "500KV": { distanceMeters: 2.0, displayText: "2.0 m" },
  },
  "66KV": {
    "240V": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "2KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "11KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "22KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "33KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "66KV": { distanceMeters: 0.2, displayText: "0.2 m" },
    "132KV": { distanceMeters: 0.3, displayText: "0.3 m" },
    "230KV": { distanceMeters: 0.5, displayText: "0.5 m" },
    "400KV": { distanceMeters: 1.0, displayText: "1.0 m" },
    "500KV": { distanceMeters: 1.5, displayText: "1.5 m" },
  },
  "132KV": {
    "240V": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "2KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "11KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "22KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "33KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "66KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "132KV": { distanceMeters: 0.2, displayText: "0.2 m" },
    "230KV": { distanceMeters: 0.3, displayText: "0.3 m" },
    "400KV": { distanceMeters: 0.7, displayText: "0.7 m" },
    "500KV": { distanceMeters: 1.5, displayText: "1.5 m" },
  },
  "230KV": {
    "240V": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "2KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "11KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "22KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "33KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "66KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "132KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "230KV": { distanceMeters: 0.2, displayText: "0.2 m" },
    "400KV": { distanceMeters: 0.3, displayText: "0.3 m" },
    "500KV": { distanceMeters: 0.7, displayText: "0.7 m" },
  },
  "400KV": {
    "240V": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "2KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "11KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "22KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "33KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "66KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "132KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "230KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "400KV": { distanceMeters: 0.2, displayText: "0.2 m" },
    "500KV": { distanceMeters: 0.3, displayText: "0.3 m" },
  },
  "500KV": {
    "240V": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "2KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "11KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "22KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "33KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "66KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "132KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "230KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "400KV": { distanceMeters: null, displayText: "NOT TO BE USED" },
    "500KV": { distanceMeters: 0.2, displayText: "0.2 m" },
  },
};

export default function ProductSafetySimulator({
  product,
}: {
  product: ProductData;
}) {
  const config = product.safetySimulator;

  if (config?.type === "proximity" || product.slug === "helmet-mounted-voltage-detector") {
    return <HelmetProximitySimulator product={product} />;
  }

  if (config?.type === "hotstick" || product.slug === "insulated-operating-sticks") {
    return <HotStickReachSimulator product={product} />;
  }

  // 1. Simulator Primary State Variables
  const [selectedLineId, setSelectedLineId] = useState<string>("11KV");
  const [selectorPosition, setSelectorPosition] = useState<SelectorSwitchPosition>("11KV");
  const [isLineEnergized, setIsLineEnergized] = useState<boolean>(true);
  const [stickElevationPct, setStickElevationPct] = useState<number>(25);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isAutoTesting, setIsAutoTesting] = useState<boolean>(false);
  const [showMatrixModal, setShowMatrixModal] = useState<boolean>(false);

  // Audio References
  const audioCtxRef = useRef<AudioContext | null>(null);
  const buzzerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoTestRafRef = useRef<number | null>(null);

  // Current Line Voltage Object
  const currentLine = useMemo(
    () => LINE_VOLTAGES.find((l) => l.id === selectedLineId) || LINE_VOLTAGES[2],
    [selectedLineId]
  );

  // Current Rotary Selector Object
  const currentSelectorObj = useMemo(
    () => SELECTOR_POSITIONS.find((s) => s.id === selectorPosition) || SELECTOR_POSITIONS[4],
    [selectorPosition]
  );

  // 2. Physical & Sensing Computations
  const stickLengthMeters = useMemo(
    () => (1.8 + (stickElevationPct / 100) * 5.2).toFixed(2),
    [stickElevationPct]
  );

  const airGapMeters = useMemo(() => {
    const raw = ((100 - stickElevationPct) / 100) * 3.5;
    return Math.max(0, parseFloat(raw.toFixed(2)));
  }, [stickElevationPct]);

  // Visual Gap Mapping (ensures small clearances like 0.2m have clear daylight separation in SVG)
  const getVisualGapPx = useCallback((gapMeters: number) => {
    if (gapMeters <= 0.01) return 0;
    const normalized = Math.min(1, Math.max(0, gapMeters / 3.5));
    return Math.min(143, Math.round(Math.pow(normalized, 0.70) * 143));
  }, []);

  const isTouchingConductor = stickElevationPct >= 99.5 || airGapMeters <= 0.01;

  const activeMatrixEntry = useMemo(() => {
    if (selectorPosition === "OFF" || selectorPosition === "TEST") return null;
    return SENSING_DISTANCE_MATRIX[selectorPosition]?.[selectedLineId] ?? null;
  }, [selectorPosition, selectedLineId]);

  const activeThresholdDistance = activeMatrixEntry?.distanceMeters ?? null;
  const isMatrixNotToBeUsed =
    selectorPosition !== "OFF" &&
    selectorPosition !== "TEST" &&
    activeMatrixEntry?.distanceMeters === null;

  const isOff = selectorPosition === "OFF";
  const isBatteryTest = selectorPosition === "TEST";
  const isMatchedCalibration = !isOff && !isBatteryTest && selectorPosition === selectedLineId;
  const isOverSensitive = !isOff && !isBatteryTest && !isMatrixNotToBeUsed && selectorPosition !== selectedLineId;

  const isInDetectionZone =
    !isOff &&
    !isBatteryTest &&
    isLineEnergized &&
    activeThresholdDistance !== null &&
    airGapMeters <= activeThresholdDistance + 0.005;

  const isVoltageDetectedLive = isInDetectionZone;

  const isDeadLineVerified =
    !isOff &&
    !isBatteryTest &&
    !isLineEnergized &&
    isTouchingConductor &&
    !isMatrixNotToBeUsed;

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

  // Global user interaction listener to unlock AudioContext
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

  const playBuzzerBeep = useCallback(() => {
    if (!audioCtxRef.current || !soundEnabled) return;
    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(2600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(2150, ctx.currentTime + 0.065);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.075);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.075);
    } catch {
      // Audio fallback
    }
  }, [soundEnabled]);

  const playDialClick = useCallback(() => {
    if (!audioCtxRef.current || !soundEnabled) return;
    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "square";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.03);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.035);
    } catch {
      // Audio fallback
    }
  }, [soundEnabled]);

  const playBatteryTestChime = useCallback(() => {
    if (!audioCtxRef.current || !soundEnabled) return;
    try {
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(1100, ctx.currentTime);
      osc1.frequency.setValueAtTime(1760, ctx.currentTime + 0.12);

      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(2200, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start(ctx.currentTime + 0.12);
      osc1.stop(ctx.currentTime + 0.45);
      osc2.stop(ctx.currentTime + 0.45);
    } catch {
      // Audio fallback
    }
  }, [soundEnabled]);

  // Audio Buzzer Loop for Active Live Detection
  useEffect(() => {
    if (buzzerIntervalRef.current) {
      clearInterval(buzzerIntervalRef.current);
      buzzerIntervalRef.current = null;
    }

    if (soundEnabled && isVoltageDetectedLive) {
      playBuzzerBeep();
      buzzerIntervalRef.current = setInterval(() => {
        playBuzzerBeep();
      }, 110);
    }

    return () => {
      if (buzzerIntervalRef.current) {
        clearInterval(buzzerIntervalRef.current);
        buzzerIntervalRef.current = null;
      }
    };
  }, [isVoltageDetectedLive, soundEnabled, playBuzzerBeep]);

  const handleSelectSwitchPosition = (pos: SelectorSwitchPosition) => {
    initAudio();
    setSelectorPosition(pos);
    if (pos === "TEST") {
      playBatteryTestChime();
    } else {
      playDialClick();
    }
  };

  const handleAutoCalibrateSwitch = () => {
    const matchingPos = SELECTOR_POSITIONS.find((s) => s.id === selectedLineId)?.id;
    if (matchingPos) {
      handleSelectSwitchPosition(matchingPos);
    }
  };

  /* ==============================================================
     AUTO-INSPECT DEMO ROUTINE
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
          if (holdCounter > 90) {
            direction = -1;
            holdCounter = 0;
          }
        }
      } else {
        current -= 0.85;
        if (current <= 15) {
          current = 15;
          setStickElevationPct(15);
          setIsAutoTesting(false);
          return;
        }
      }

      setStickElevationPct(current);
      autoTestRafRef.current = requestAnimationFrame(step);
    };

    autoTestRafRef.current = requestAnimationFrame(step);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (buzzerIntervalRef.current) clearInterval(buzzerIntervalRef.current);
      if (autoTestRafRef.current) cancelAnimationFrame(autoTestRafRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <section
      id="safety-simulator"
      className="relative w-full overflow-hidden bg-transparent py-3 sm:py-5"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-3 sm:px-4 lg:px-6">
        {/* ========================================================
            CLEAN HEADER WITH MATRIX MODAL TRIGGER
            ======================================================== */}
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2.5 rounded-2xl border border-white/10 bg-[#0B101B]/90 px-4 py-2.5 backdrop-blur-xl shadow-lg">
          <div className="flex items-center gap-2.5">
            <span className="rounded-md bg-[#A855F7]/20 border border-[#A855F7]/40 px-2 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#D8B4FE]">
              {config?.badge || "TP-S9 SENSING SIMULATOR"}
            </span>
            <h2 className="font-heading text-base sm:text-lg font-bold text-white tracking-tight">
              {config?.title || "Model TP-S9 Multi-Voltage Non-Contact Sensing Distance Simulator"}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setShowMatrixModal(true)}
            className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90 hover:bg-white/10 hover:text-white transition-all shadow-sm"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
            <span>10×10 Sensing Matrix</span>
          </button>
        </div>

        {/* ========================================================
            2-COLUMN INTUITIVE SIMULATOR ARCHITECTURE
            - Left Column (4 cols / ~33%): Clear 2-Step Controls Dashboard
            - Right Column (8 cols / ~67%): Large Visual Simulation & Live Feedback
            ======================================================== */}
        <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-12 lg:gap-4 items-stretch">
          {/* ======================================================
              LEFT COLUMN: 2-STEP CONTROL CONSOLE (4 COLS)
              ====================================================== */}
          <div className="flex flex-col justify-between gap-3 lg:col-span-4 rounded-2xl border border-white/10 bg-[#0B101B]/95 p-3.5 sm:p-4 backdrop-blur-xl shadow-xl">
            {/* STEP 1: Overhead Line Voltage Selection */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#06B6D4]/20 font-mono text-[10px] font-bold text-cyan-300">
                    1
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Overhead Line Voltage
                  </span>
                </div>

                {/* Line Energized Toggle Pill */}
                <button
                  type="button"
                  onClick={() => {
                    initAudio();
                    setIsLineEnergized(!isLineEnergized);
                  }}
                  className={`flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold transition-all ${
                    isLineEnergized
                      ? "bg-red-500/20 text-red-300 border border-red-500/40 shadow-[0_0_8px_rgba(239,68,68,0.3)]"
                      : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isLineEnergized ? "bg-red-400 animate-pulse" : "bg-emerald-400"
                    }`}
                  />
                  {isLineEnergized ? "HOT (LIVE)" : "DEAD"}
                </button>
              </div>

              {/* 10 Line Voltage Buttons (5x2 grid) */}
              <div className="grid grid-cols-5 gap-1 sm:gap-1.5">
                {LINE_VOLTAGES.map((lvl) => {
                  const isSelected = selectedLineId === lvl.id;
                  return (
                    <button
                      key={lvl.id}
                      type="button"
                      onClick={() => {
                        initAudio();
                        setSelectedLineId(lvl.id);
                      }}
                      className={`flex flex-col items-center justify-center rounded-lg py-1.5 px-1 text-center transition-all ${
                        isSelected
                          ? "border border-[#06B6D4] bg-[#06B6D4]/25 text-white font-bold shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                          : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.08]"
                      }`}
                    >
                      <span className="font-mono text-[11px] leading-tight font-bold">{lvl.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 px-0.5">
                <span>Selected: <strong className="text-cyan-300">{currentLine.lineVoltageDisplay}</strong></span>
                <span className="font-mono text-[10px] text-slate-400">({currentLine.pnVoltageDisplay})</span>
              </div>
            </div>

            {/* STEP 2: Detector Switch Sensitivity */}
            <div className="flex flex-col gap-2 pt-2.5 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#A855F7]/20 font-mono text-[10px] font-bold text-[#D8B4FE]">
                    2
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Detector Switch Position
                  </span>
                </div>

                <span className="font-mono text-[11px] font-bold text-[#D8B4FE]">
                  Pos: {selectorPosition}
                </span>
              </div>

              {/* 12 Rotary Switch Position Pills */}
              <div className="grid grid-cols-6 gap-1 sm:gap-1.5">
                {SELECTOR_POSITIONS.map((pos) => {
                  const isSelected = selectorPosition === pos.id;
                  const isMatch = selectedLineId === pos.id;
                  return (
                    <button
                      key={pos.id}
                      type="button"
                      onClick={() => handleSelectSwitchPosition(pos.id)}
                      className={`relative flex flex-col items-center justify-center rounded-lg py-1.5 px-0.5 text-center transition-all ${
                        isSelected
                          ? "border border-[#A855F7] bg-[#A855F7] text-white font-bold shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                          : isMatch
                          ? "border border-emerald-500/60 bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25"
                          : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.08]"
                      }`}
                    >
                      <span className="font-mono text-[10px] leading-tight font-bold">{pos.label}</span>
                      {isMatch && !isSelected && (
                        <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_4px_#34d399]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Auto-Calibrate button if not matched */}
              {!isMatchedCalibration && selectorPosition !== "TEST" && selectorPosition !== "OFF" && (
                <button
                  type="button"
                  onClick={handleAutoCalibrateSwitch}
                  className="mt-0.5 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#A855F7] to-[#7C3AED] py-1.5 text-[11px] font-bold text-white shadow-md hover:brightness-110 active:scale-95 transition-all"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  <span>Auto-Match Switch to {currentLine.label} (0.2m Proximity)</span>
                </button>
              )}
            </div>

            {/* Compact Hardware Summary Card */}
            <div className="rounded-xl border border-white/10 bg-[#05070D]/90 p-2.5 flex flex-col gap-1.5 font-mono text-[10.5px]">
              <div className="flex items-center justify-between border-b border-white/10 pb-1">
                <span className="text-slate-400">Line Tested:</span>
                <span className="font-bold text-cyan-300">{currentLine.lineVoltageDisplay}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-1">
                <span className="text-slate-400">Non-Contact Sensing:</span>
                <span className={`font-bold ${activeThresholdDistance !== null ? "text-[#D8B4FE]" : "text-amber-400"}`}>
                  {activeThresholdDistance !== null ? `${activeThresholdDistance} m Threshold` : "NOT TO BE USED"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Current Air Gap:</span>
                <span className="font-bold text-[#FFD200]">{airGapMeters.toFixed(2)} m</span>
              </div>
            </div>
          </div>

          {/* ======================================================
              RIGHT COLUMN: VISUAL SIMULATION & LIVE FEEDBACK (8 COLS)
              ====================================================== */}
          <div className="flex flex-col justify-between gap-2.5 lg:col-span-8 rounded-2xl border border-white/10 bg-[#0B101B]/95 p-3.5 sm:p-4 backdrop-blur-xl shadow-xl">
            {/* 1. Clear, High-Contrast Status Alert Banner */}
            <div
              className={`flex items-center justify-between rounded-xl border px-3 py-2 transition-all ${
                isVoltageDetectedLive
                  ? "border-red-500/60 bg-red-950/70 text-red-200 shadow-[0_0_16px_rgba(239,68,68,0.3)] animate-pulse"
                  : isMatrixNotToBeUsed
                  ? "border-amber-500/60 bg-amber-950/60 text-amber-200"
                  : isOverSensitive
                  ? "border-cyan-500/60 bg-cyan-950/60 text-cyan-200"
                  : isBatteryTest
                  ? "border-emerald-500/60 bg-emerald-950/60 text-emerald-200"
                  : isDeadLineVerified
                  ? "border-emerald-500/60 bg-emerald-950/60 text-emerald-200"
                  : isOff
                  ? "border-slate-700 bg-slate-900 text-slate-400"
                  : "border-slate-700/60 bg-[#05070D] text-slate-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    isVoltageDetectedLive
                      ? "bg-red-500 shadow-[0_0_8px_#ef4444]"
                      : isMatrixNotToBeUsed
                      ? "bg-amber-400 shadow-[0_0_8px_#fbbf24]"
                      : isBatteryTest || isDeadLineVerified
                      ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
                      : isOverSensitive
                      ? "bg-cyan-400 shadow-[0_0_8px_#06b6d4]"
                      : "bg-slate-500"
                  }`}
                />
                <span className="text-xs font-bold font-heading tracking-wide">
                  {isOff
                    ? "DETECTOR IS OFF — Turn switch to begin testing"
                    : isBatteryTest
                    ? "BATTERY TEST / PROVING OK — Internal 4.5V circuit verified"
                    : isMatrixNotToBeUsed
                    ? `⚠️ NOT TO BE USED — Switch (${selectorPosition}) is higher than Line (${currentLine.label})`
                    : isVoltageDetectedLive
                    ? isTouchingConductor
                      ? `⚡ DIRECT CONTACT WITH CONDUCTOR (0.0 m) — Continuous Alarm & Ruby Strobes`
                      : `⚡ NON-CONTACT LIVE FIELD SENSED (${airGapMeters.toFixed(2)} m Air Gap — No Contact Needed!)`
                    : isDeadLineVerified
                    ? "✓ LINE IS DE-ENERGIZED & DEAD — Verified Safe"
                    : `STANDBY — Move detector closer to line (Sensing starts at ${activeThresholdDistance} m)`}
                </span>
              </div>

              <span className="hidden sm:inline font-mono text-[10.5px] font-bold opacity-80">
                Air Gap: {airGapMeters.toFixed(2)} m
              </span>
            </div>

            {/* 2. Visualizer SVG Canvas */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#060913] via-[#080E1D] to-[#04060B] shadow-inner">
              <svg
                viewBox="0 0 800 320"
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

                  {/* Live Neon Glow Filter */}
                  <filter id="liveNeonGlow" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="4" result="blur1" />
                    <feGaussianBlur stdDeviation="10" result="blur2" />
                    <feMerge>
                      <feMergeNode in="blur2" />
                      <feMergeNode in="blur1" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Electric Field Aura Radial Gradient */}
                  <radialGradient id="electricFieldAuraGrad" cx="50%" cy="0%" r="90%">
                    <stop offset="0%" stopColor="#EF4444" stopOpacity="0.45" />
                    <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.25" />
                    <stop offset="85%" stopColor="#A855F7" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                  </radialGradient>

                  {/* Green Proving Glow */}
                  <filter id="greenProvingGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* 1. Environment Background */}
                <rect x="0" y="0" width="800" height="260" fill="url(#simSkyGrad)" />
                <rect x="0" y="260" width="800" height="60" fill="url(#simGroundGrad)" />

                {/* Substation Ground Line */}
                <line x1="0" y1="260" x2="800" y2="260" stroke="#64748B" strokeWidth="2" />
                <line x1="0" y1="270" x2="800" y2="270" stroke="#334155" strokeWidth="1" strokeDasharray="6 6" />

                {/* Safety Warning Perimeter Stripes on Floor */}
                <g opacity="0.35">
                  <polygon points="320,261 335,261 325,270 310,270" fill="#FACC15" />
                  <polygon points="350,261 365,261 355,270 340,270" fill="#FACC15" />
                  <polygon points="380,261 395,261 385,270 370,270" fill="#FACC15" />
                  <polygon points="410,261 425,261 415,270 400,270" fill="#FACC15" />
                  <polygon points="440,261 455,261 445,270 430,270" fill="#FACC15" />
                  <polygon points="470,261 485,261 475,270 460,270" fill="#FACC15" />
                </g>

                {/* Height Scale on Left */}
                <g opacity="0.30">
                  <line x1="38" y1="260" x2="38" y2="40" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />
                  <text x="32" y="58" fontSize="8" fontFamily="monospace" fill="#94A3B8" textAnchor="end">7.0 m</text>
                  <line x1="34" y1="55" x2="42" y2="55" stroke="#94A3B8" strokeWidth="1.2" />
                  <text x="32" y="123" fontSize="8" fontFamily="monospace" fill="#94A3B8" textAnchor="end">5.0 m</text>
                  <line x1="34" y1="120" x2="42" y2="120" stroke="#94A3B8" strokeWidth="1.2" />
                  <text x="32" y="183" fontSize="8" fontFamily="monospace" fill="#94A3B8" textAnchor="end">3.0 m</text>
                  <line x1="34" y1="180" x2="42" y2="180" stroke="#94A3B8" strokeWidth="1.2" />
                  <text x="32" y="248" fontSize="8" fontFamily="monospace" fill="#94A3B8" textAnchor="end">1.0 m</text>
                  <line x1="34" y1="245" x2="42" y2="245" stroke="#94A3B8" strokeWidth="1.2" />
                </g>

                {/* 2. Substation Steel Gantry Towers */}
                {/* Left Tower */}
                <g opacity="0.25">
                  <line x1="75" y1="260" x2="75" y2="30" stroke="#64748B" strokeWidth="3" />
                  <line x1="120" y1="260" x2="120" y2="30" stroke="#64748B" strokeWidth="3" />
                  <line x1="75" y1="30" x2="120" y2="30" stroke="#64748B" strokeWidth="3.5" />
                  <line x1="75" y1="80" x2="120" y2="80" stroke="#475569" strokeWidth="1.8" />
                  <line x1="75" y1="135" x2="120" y2="135" stroke="#475569" strokeWidth="1.8" />
                  <line x1="75" y1="190" x2="120" y2="190" stroke="#475569" strokeWidth="1.8" />
                  <line x1="75" y1="245" x2="120" y2="245" stroke="#475569" strokeWidth="1.8" />
                  <g transform="translate(98, 30)">
                    <line x1="0" y1="0" x2="0" y2="25" stroke="#94A3B8" strokeWidth="2" />
                    <ellipse cx="0" cy="7" rx="6" ry="2.2" fill="#64748B" />
                    <ellipse cx="0" cy="14" rx="6" ry="2.2" fill="#64748B" />
                    <ellipse cx="0" cy="21" rx="6" ry="2.2" fill="#64748B" />
                  </g>
                </g>

                {/* Right Tower */}
                <g opacity="0.25">
                  <line x1="680" y1="260" x2="680" y2="30" stroke="#64748B" strokeWidth="3" />
                  <line x1="725" y1="260" x2="725" y2="30" stroke="#64748B" strokeWidth="3" />
                  <line x1="680" y1="30" x2="725" y2="30" stroke="#64748B" strokeWidth="3.5" />
                  <line x1="680" y1="80" x2="725" y2="80" stroke="#475569" strokeWidth="1.8" />
                  <line x1="680" y1="135" x2="725" y2="135" stroke="#475569" strokeWidth="1.8" />
                  <line x1="680" y1="190" x2="725" y2="190" stroke="#475569" strokeWidth="1.8" />
                  <line x1="680" y1="245" x2="725" y2="245" stroke="#475569" strokeWidth="1.8" />
                  <g transform="translate(702, 30)">
                    <line x1="0" y1="0" x2="0" y2="25" stroke="#94A3B8" strokeWidth="2" />
                    <ellipse cx="0" cy="7" rx="6" ry="2.2" fill="#64748B" />
                    <ellipse cx="0" cy="14" rx="6" ry="2.2" fill="#64748B" />
                    <ellipse cx="0" cy="21" rx="6" ry="2.2" fill="#64748B" />
                  </g>
                </g>

                {/* 3. Dynamic Capacitive Electric Field Sensing Aura Zone */}
                {isLineEnergized && activeThresholdDistance !== null && (
                  (() => {
                    const thresholdGapPx = getVisualGapPx(activeThresholdDistance);
                    const auraBoundaryY = 52 + thresholdGapPx;

                    return (
                      <g id="capacitive-sensing-field-aura">
                        {/* Uniform Electrostatic Field Aura Band */}
                        <rect
                          x="98"
                          y="52"
                          width="604"
                          height={thresholdGapPx}
                          fill="url(#electricFieldAuraGrad)"
                          opacity={isVoltageDetectedLive ? 0.75 : 0.35}
                        />

                        {/* Straight Horizontal Non-Contact Sensing Equi-potential Boundary Line */}
                        <line
                          x1="98"
                          y1={auraBoundaryY}
                          x2="702"
                          y2={auraBoundaryY}
                          stroke={isVoltageDetectedLive ? "#EF4444" : "#A855F7"}
                          strokeWidth="1.5"
                          strokeDasharray="6 4"
                          opacity="0.9"
                        />

                        {/* Non-Contact Threshold Tag Badge on Boundary Line */}
                        <g transform={`translate(190, ${auraBoundaryY})`}>
                          <rect
                            x="-6"
                            y="-7.5"
                            width="170"
                            height="15"
                            rx="3"
                            fill="#0B101B"
                            fillOpacity="0.92"
                            stroke={isVoltageDetectedLive ? "#EF4444" : "#A855F7"}
                            strokeWidth="1"
                          />
                          <text
                            x="79"
                            y="3.5"
                            fontSize="8"
                            fontFamily="monospace"
                            fill={isVoltageDetectedLive ? "#FCA5A5" : "#D8B4FE"}
                            textAnchor="middle"
                            fontWeight="bold"
                          >
                            Non-Contact Sensing Limit: {activeThresholdDistance} m
                          </text>
                        </g>
                      </g>
                    );
                  })()
                )}

                {/* 4. Overhead Conductor Line (Fixed at Y = 52) */}
                {isLineEnergized && (
                  <line
                    x1="98"
                    y1="52"
                    x2="702"
                    y2="52"
                    stroke="#EF4444"
                    strokeWidth="7"
                    opacity={isVoltageDetectedLive ? "0.7" : "0.22"}
                    filter="url(#liveNeonGlow)"
                  />
                )}
                <line
                  x1="98"
                  y1="52"
                  x2="702"
                  y2="52"
                  stroke={isLineEnergized ? (isVoltageDetectedLive ? "#EF4444" : "#F59E0B") : "#64748B"}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* 5. Technician Avatar (Centered at X = 365, Y = 260) */}
                <g transform="translate(365, 260)">
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
                  <path
                    d="M -8 -75 C -8 -82 8 -82 8 -75 L 9 -72 L -9 -72 Z"
                    fill="#FACC15"
                    stroke="#CA8A04"
                    strokeWidth="1"
                  />
                  <rect x="-9" y="-72" width="18" height="2" rx="1" fill="#CA8A04" />

                  {/* Arms */}
                  <path
                    d="M -8 -60 Q 7 -67 22 -61"
                    fill="none"
                    stroke="#EA580C"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 8 -60 Q 15 -66 26 -61"
                    fill="none"
                    stroke="#EA580C"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </g>

                {/* 6. Slender Bright Yellow Telescopic Hot Stick & TP-S9 Detector */}
                {(() => {
                  const stickX = 396;
                  const gripY = 205;
                  const handleBottomY = 225;

                  const currentGapPx = getVisualGapPx(airGapMeters);
                  const currentHookTipY = 52 + currentGapPx;

                  const detectorBaseDrumY = currentHookTipY + 16;

                  const section1TopY = gripY - (gripY - (detectorBaseDrumY + 6)) * 0.35;
                  const section2TopY = gripY - (gripY - (detectorBaseDrumY + 6)) * 0.70;
                  const section3TopY = detectorBaseDrumY + 4;

                  return (
                    <g id="slender-yellow-hotstick-assembly">
                      {/* Live Air Gap Distance Caliper Line */}
                      {currentGapPx >= 4 && (
                        <g id="air-gap-caliper-line">
                          <line
                            x1={stickX + 16}
                            y1={52}
                            x2={stickX + 16}
                            y2={currentHookTipY}
                            stroke={isVoltageDetectedLive ? "#EF4444" : "#38BDF8"}
                            strokeWidth="1.2"
                            strokeDasharray="3 3"
                          />
                          <line x1={stickX + 12} y1={52} x2={stickX + 20} y2={52} stroke={isVoltageDetectedLive ? "#EF4444" : "#38BDF8"} strokeWidth="1.2" />
                          <line
                            x1={stickX + 12}
                            y1={currentHookTipY}
                            x2={stickX + 20}
                            y2={currentHookTipY}
                            stroke={isVoltageDetectedLive ? "#EF4444" : "#38BDF8"}
                            strokeWidth="1.2"
                          />
                          <rect
                            x={stickX + 22}
                            y={(52 + currentHookTipY) / 2 - 8}
                            width="68"
                            height="16"
                            rx="3"
                            fill="#05070D"
                            fillOpacity="0.9"
                            stroke={isVoltageDetectedLive ? "#EF4444" : "#38BDF8"}
                            strokeWidth="1"
                          />
                          <text
                            x={stickX + 56}
                            y={(52 + currentHookTipY) / 2 + 3.5}
                            fontSize="8.5"
                            fontFamily="monospace"
                            fill={isVoltageDetectedLive ? "#FCA5A5" : "#7DD3FC"}
                            textAnchor="middle"
                            fontWeight="bold"
                          >
                            {airGapMeters.toFixed(2)} m gap
                          </text>
                        </g>
                      )}

                      {/* Section 0 */}
                      <rect
                        x={stickX - 3.5}
                        y={gripY - 14}
                        width={7}
                        height={handleBottomY - (gripY - 14)}
                        rx={2}
                        fill="#FFD200"
                        stroke="#B45309"
                        strokeWidth="1"
                      />
                      <rect
                        x={stickX - 4.5}
                        y={handleBottomY - 2}
                        width={9}
                        height={3}
                        rx={1.5}
                        fill="#0F172A"
                        stroke="#334155"
                        strokeWidth="0.8"
                      />

                      {/* Section 1 */}
                      <rect
                        x={stickX - 2.8}
                        y={section1TopY}
                        width={5.6}
                        height={Math.max(3, gripY - 14 - section1TopY)}
                        rx={1.5}
                        fill="#FFDA1A"
                        stroke="#B45309"
                        strokeWidth="0.8"
                      />
                      <rect
                        x={stickX - 3.8}
                        y={section1TopY - 2}
                        width={7.6}
                        height={3}
                        rx={1.2}
                        fill="#1E293B"
                        stroke="#0F172A"
                        strokeWidth="0.8"
                      />

                      {/* Section 2 */}
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
                      <rect
                        x={stickX - 3.2}
                        y={section2TopY - 2}
                        width={6.4}
                        height={2.8}
                        rx={1}
                        fill="#1E293B"
                        stroke="#0F172A"
                        strokeWidth="0.8"
                      />

                      {/* Section 3 */}
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

                      {/* Sunrise Fitting */}
                      <rect
                        x={stickX - 2.5}
                        y={section3TopY - 2}
                        width={5}
                        height={3}
                        rx={1}
                        fill="#CBD5E1"
                        stroke="#475569"
                        strokeWidth="0.8"
                      />

                      {/* TP-S9 DETECTOR UNIT ON STICK */}
                      <g transform={`translate(${stickX}, ${currentHookTipY})`}>
                        <path
                          d="M -6 16 L 6 16 L 4.5 10 L -4.5 10 Z"
                          fill="#FFD200"
                          stroke="#CA8A04"
                          strokeWidth="0.8"
                        />
                        <rect
                          x="-6.5"
                          y="14.5"
                          width="13"
                          height="2.5"
                          rx="1"
                          fill="#EAB308"
                          stroke="#A16207"
                          strokeWidth="0.6"
                        />

                        <rect
                          x="-2.5"
                          y="3.5"
                          width="5"
                          height="7.5"
                          rx="1.2"
                          fill="#FFD200"
                          stroke="#CA8A04"
                          strokeWidth="0.8"
                        />

                        <path
                          d="M -2.5 3.5 L -2.5 -2 L -1 0 L 1 0 L 2.5 -2 L 2.5 3.5 Z"
                          fill="#FFD200"
                          stroke="#CA8A04"
                          strokeWidth="0.8"
                        />
                        <path
                          d="M -2.5 -1 L -3.5 -2 L -2.5 -2.5 L -1 0 L 1 0 L 2.5 -2.5 L 3.5 -2 L 2.5 -1 Z"
                          fill="#FFD200"
                          stroke="#B45309"
                          strokeWidth="0.6"
                        />

                        <circle cx="0" cy="13.5" r="1.6" fill="#0F172A" stroke="#64748B" strokeWidth="0.5" />
                        <line
                          x1="0"
                          y1="13.5"
                          x2={Math.sin((currentSelectorObj.angleDeg * Math.PI) / 180) * 1.4}
                          y2={13.5 - Math.cos((currentSelectorObj.angleDeg * Math.PI) / 180) * 1.4}
                          stroke="#FFFFFF"
                          strokeWidth="0.5"
                        />

                        {/* LEFT RED DOME */}
                        <g transform="translate(-3.5, 13.5)">
                          <circle cx="0" cy="0" r="1.4" fill={isOff ? "#334155" : "#991B1B"} stroke="#7F1D1D" strokeWidth="0.5" />
                          {isVoltageDetectedLive && (
                            <g>
                              <circle cx="0" cy="0" r="6" fill="#EF4444" opacity="0.8" filter="url(#liveNeonGlow)" />
                              <circle cx="0" cy="2.5" fill="#FFFFFF" filter="url(#liveNeonGlow)" />
                              <circle cx="0" cy="1.4" fill="#EF4444" />
                            </g>
                          )}
                        </g>

                        {/* RIGHT RED DOME */}
                        <g transform="translate(3.5, 13.5)">
                          <circle cx="0" cy="0" r="1.4" fill={isOff ? "#334155" : "#991B1B"} stroke="#7F1D1D" strokeWidth="0.5" />
                          {isVoltageDetectedLive && (
                            <g>
                              <circle cx="0" cy="0" r="6" fill="#EF4444" opacity="0.8" filter="url(#liveNeonGlow)" />
                              <circle cx="0" cy="2.5" fill="#FFFFFF" filter="url(#liveNeonGlow)" />
                              <circle cx="0" cy="1.4" fill="#EF4444" />
                            </g>
                          )}
                        </g>

                        {/* Green Proving / Dead Line Indicator */}
                        {(isDeadLineVerified || isBatteryTest) && (
                          <g transform="translate(0, 15)">
                            <circle cx="0" cy="0" r="3.2" fill="#10B981" opacity="0.8" filter="url(#greenProvingGlow)" />
                            <circle cx="0" cy="1.4" fill="#10B981" />
                          </g>
                        )}

                        {/* Contact Arc Flash */}
                        {isVoltageDetectedLive && isTouchingConductor && (
                          <g>
                            <line x1="0" y1="-2" x2="-3.5" y2="-6" stroke="#FFFFFF" strokeWidth="1.5" filter="url(#liveNeonGlow)" />
                            <line x1="0" y1="-2" x2="3.5" y2="-5.5" stroke="#67E8F9" strokeWidth="1.4" filter="url(#liveNeonGlow)" />
                            <circle cx="0" cy="-2" r="2.8" fill="#FFFFFF" opacity="0.95" filter="url(#liveNeonGlow)" />
                          </g>
                        )}
                      </g>

                      {/* Gloves */}
                      <rect x={stickX - 4.2} y={gripY - 4} width={4.2} height={6} rx={1.5} fill="#0F172A" stroke="#64748B" strokeWidth="1" />
                      <rect x={stickX} y={gripY - 4} width={4.2} height={6} rx={1.5} fill="#0F172A" stroke="#64748B" strokeWidth="1" />
                    </g>
                  );
                })()}
              </svg>
            </div>

            {/* 3. Bottom Hot Stick Elevation & Quick Actions */}
            <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-[#05070D]/80 p-2.5 sm:p-3">
              <div className="flex items-center justify-between text-xs">
                <label htmlFor="stickElevationSlider" className="font-bold text-slate-200 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#FFD200] shadow-[0_0_6px_#FFD200]" />
                  Insulated Hot Stick Elevation:
                </label>
                <span className="font-mono text-xs font-bold text-[#FFD200]">
                  {airGapMeters === 0 ? "TOUCHING CONDUCTOR (0.0 m)" : `${airGapMeters.toFixed(2)} m Air Gap`}{" "}
                  <span className="text-slate-400 font-normal">({stickLengthMeters}m reach)</span>
                </span>
              </div>

              <input
                id="stickElevationSlider"
                name="stickElevation"
                type="range"
                min="0"
                max="100"
                step="0.5"
                value={stickElevationPct}
                onChange={(e) => {
                  initAudio();
                  setIsAutoTesting(false);
                  setStickElevationPct(Number(e.target.value));
                }}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/15 accent-[#FFD200]"
              />

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-white/10 text-xs">
                <div className="flex items-center gap-1.5 font-mono text-[10px]">
                  <button
                    type="button"
                    onClick={() => {
                      initAudio();
                      setIsAutoTesting(false);
                      setStickElevationPct(0);
                    }}
                    className="rounded bg-white/5 px-2 py-0.5 text-slate-300 hover:bg-white/10 hover:text-white"
                  >
                    Retract (3.5m)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      initAudio();
                      setIsAutoTesting(false);
                      const targetPct =
                        activeThresholdDistance !== null
                          ? Math.max(0, Math.min(100, Number((100 - (activeThresholdDistance / 3.5) * 100).toFixed(1))))
                          : 94.3;
                      setStickElevationPct(targetPct);
                    }}
                    className="rounded bg-cyan-950/70 border border-cyan-500/40 px-2 py-0.5 font-bold text-cyan-300 hover:bg-cyan-900/80"
                  >
                    ⚡ Test Sensing Limit ({activeThresholdDistance !== null ? activeThresholdDistance : 0.2}m)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      initAudio();
                      setIsAutoTesting(false);
                      setStickElevationPct(100);
                    }}
                    className="rounded bg-white/5 px-2 py-0.5 text-slate-300 hover:bg-white/10 hover:text-white"
                  >
                    Contact (0.0m)
                  </button>
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    type="button"
                    onClick={handleToggleAutoTest}
                    className={`flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all ${
                      isAutoTesting
                        ? "bg-[#A855F7] text-white shadow-md"
                        : "border border-white/15 bg-white/5 text-slate-200 hover:bg-white/10"
                    }`}
                  >
                    {isAutoTesting ? "⏸ Stop Sweep" : "▶ Auto-Sweep"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSelectSwitchPosition("TEST")}
                    className={`flex items-center gap-1 rounded-lg border border-[#10B981]/50 bg-[#10B981]/15 px-2.5 py-1 text-[11px] font-bold text-emerald-300 hover:bg-[#10B981]/25 ${
                      isBatteryTest ? "ring-2 ring-emerald-400 bg-emerald-500/30 text-white" : ""
                    }`}
                  >
                    🔋 Battery Test
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      initAudio();
                      setSoundEnabled(!soundEnabled);
                    }}
                    className={`flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[11px] font-semibold transition-all ${
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
      </div>

      {/* ========================================================
          FULL INTERACTIVE SENSING DISTANCE MATRIX MODAL
          ======================================================== */}
      {showMatrixModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-5xl rounded-2xl border border-white/15 bg-[#0B101B] p-4 sm:p-6 shadow-2xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-[#A855F7]/20 px-2 py-0.5 font-mono text-[11px] font-bold text-[#D8B4FE]">
                    MANUFACTURER SPECIFICATION
                  </span>
                  <span className="text-[12px] text-[#94A3B8]">Model TP-S9 High Voltage Detector</span>
                </div>
                <h3 className="mt-1 font-heading text-[18px] sm:text-[20px] font-bold text-white">
                  Voltage Sensing Distances for Different Test Voltages
                </h3>
                <p className="text-[11.5px] text-[#94A3B8]">
                  (P-N: Phase to Neutral Voltage). Click any cell in the matrix to update the simulator in real time.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowMatrixModal(false)}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 hover:bg-white/10 hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Matrix Table */}
            <div className="mt-3 flex-1 overflow-auto rounded-xl border border-white/10 bg-[#05070D]">
              <table className="w-full border-collapse font-mono text-[11px] text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.04]">
                    <th
                      colSpan={2}
                      className="p-2 font-bold uppercase tracking-wider text-white border-r border-white/10"
                    >
                      SELECTOR SWITCH POSITION
                    </th>
                    <th
                      colSpan={10}
                      className="p-2 text-center font-bold uppercase tracking-wider text-[#A855F7]"
                    >
                      VOLTAGE SENSING DISTANCES FOR DIFFERENT TEST VOLTAGES (P-N : PHASE TO NEUTRAL VOLTAGE)
                    </th>
                  </tr>

                  <tr className="border-b border-white/15 bg-white/[0.02] text-[10px]">
                    <th className="p-2 text-white/70 border-r border-white/10 w-[70px]">Position</th>
                    <th className="p-2 text-white/70 border-r border-white/10 w-[110px]">Function</th>
                    {LINE_VOLTAGES.map((col) => {
                      const isColActive = selectedLineId === col.id;
                      return (
                        <th
                          key={col.id}
                          className={`p-2 text-center border-r border-white/10 transition-colors ${
                            isColActive
                              ? "bg-[#06B6D4]/20 text-cyan-200 font-bold"
                              : "text-[#CBD5E1]"
                          }`}
                        >
                          <div className="font-bold">{col.label}</div>
                          <div className="text-[8.5px] text-[#94A3B8]">{col.pnVoltageDisplay}</div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                <tbody>
                  {/* Row: OFF */}
                  <tr
                    className={`border-b border-white/5 transition-colors cursor-pointer ${
                      selectorPosition === "OFF" ? "bg-white/10" : "hover:bg-white/[0.03]"
                    }`}
                    onClick={() => handleSelectSwitchPosition("OFF")}
                  >
                    <td className="p-2 font-bold text-white border-r border-white/10">OFF</td>
                    <td
                      colSpan={11}
                      className="p-2 text-center font-semibold text-[#94A3B8] tracking-widest bg-white/[0.02]"
                    >
                      DETECTOR IS OFF
                    </td>
                  </tr>

                  {/* Row: TEST */}
                  <tr
                    className={`border-b border-white/10 transition-colors cursor-pointer ${
                      selectorPosition === "TEST" ? "bg-[#10B981]/20" : "hover:bg-white/[0.03]"
                    }`}
                    onClick={() => handleSelectSwitchPosition("TEST")}
                  >
                    <td className="p-2 font-bold text-[#34D399] border-r border-white/10">TEST</td>
                    <td
                      colSpan={11}
                      className="p-2 text-center font-bold text-[#34D399] tracking-wider bg-[#10B981]/10"
                    >
                      BATTERY TEST POSITION (INBUILT PROVING CHECK)
                    </td>
                  </tr>

                  {/* 10 Sensitivity Position Rows */}
                  {SELECTOR_POSITIONS.filter((p) => p.id !== "OFF" && p.id !== "TEST").map((row) => {
                    const isRowActive = selectorPosition === row.id;
                    return (
                      <tr
                        key={row.id}
                        className={`border-b border-white/5 transition-colors ${
                          isRowActive ? "bg-[#A855F7]/15" : "hover:bg-white/[0.02]"
                        }`}
                      >
                        <td className="p-2 font-bold text-white border-r border-white/10">{row.label}</td>
                        <td className="p-2 text-[9.5px] text-[#94A3B8] border-r border-white/10">
                          {row.label} Setting
                        </td>

                        {LINE_VOLTAGES.map((col) => {
                          const cellData = SENSING_DISTANCE_MATRIX[row.id]?.[col.id];
                          const isColActive = selectedLineId === col.id;
                          const isIntersection = isRowActive && isColActive;
                          const isNotUsed = cellData?.distanceMeters === null;

                          return (
                            <td
                              key={col.id}
                              onClick={() => {
                                handleSelectSwitchPosition(row.id as SelectorSwitchPosition);
                                setSelectedLineId(col.id);
                              }}
                              className={`p-2 text-center border-r border-white/5 cursor-pointer transition-all ${
                                isIntersection
                                  ? "bg-[#A855F7] text-white font-bold shadow-[0_0_12px_#A855F7] scale-105 z-10"
                                  : isNotUsed
                                  ? "bg-black/40 text-white/30 text-[8.5px]"
                                  : isRowActive || isColActive
                                  ? "bg-white/[0.06] text-white font-semibold"
                                  : "text-[#CBD5E1] hover:bg-white/10 hover:text-white"
                              }`}
                            >
                              {cellData ? cellData.displayText : "—"}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Modal Footer Notes */}
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-2.5 border-t border-white/10 pt-2.5 text-[11px] text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded bg-[#A855F7]" />
                <span className="text-white">Active Selection Intersection</span>
                <span className="ml-3 h-2.5 w-2.5 rounded bg-black/50 border border-white/20" />
                <span>Not To Be Used (Under-Sensitivity)</span>
              </div>

              <button
                type="button"
                onClick={() => setShowMatrixModal(false)}
                className="rounded-xl bg-[#A855F7] px-4 py-1.5 font-semibold text-white shadow-[0_0_12px_rgba(168,85,247,0.4)] hover:bg-[#9333EA]"
              >
                Apply to Simulator & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
