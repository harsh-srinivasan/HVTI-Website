"use client";

import { useEffect, useState } from "react";
import React from "react";

/* ================================================================
   HIGH VOLTAGE DETECTOR TP-S9 3D WEB MODEL RENDERER
   File: components/renders/VoltageDetectorTPS9Render.tsx

   Interactive, lightweight 3D web model viewer leveraging @google/model-viewer:
   - 100% transparent background with zero border artifacts
   - Realistic PBR lighting with translucent glowing red LEDs
   - Auto-rotation with 360° interactive camera orbit controls
   - Optimized for instant web loading (<250 KB .glb asset)
   ================================================================ */

export default function VoltageDetectorTPS9Render({
  modelUrl = "/models/voltage_detector_tp_s9.glb",
}: {
  modelUrl?: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    import("@google/model-viewer")
      .then(() => setMounted(true))
      .catch((err) => console.error("Error loading model-viewer:", err));
  }, []);

  return (
    <div
      className="
        detector-3d-container
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-transparent
      "
    >
      {mounted ? (
        React.createElement("model-viewer", {
          src: modelUrl,
          alt: "High Voltage Live Line Detector TP-S9 3D Model",
          "auto-rotate": true,
          "rotation-per-second": "20deg",
          "camera-controls": true,
          "interaction-prompt": "auto",
          "shadow-intensity": "1.0",
          "shadow-softness": "0.7",
          exposure: "1.0",
          "camera-orbit": "45deg 75deg 105%",
          "min-camera-orbit": "auto auto 40%",
          "max-camera-orbit": "auto auto 250%",
          loading: "lazy",
          reveal: "auto",
          style: {
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            outline: "none",
          },
        })
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 text-white/40">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-[#F97316]" />
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/50">
            Loading 3D Detector...
          </span>
        </div>
      )}

      {/* 360° Interactive Badge */}
      {mounted && (
        <div
          className="
            pointer-events-none
            absolute
            bottom-3
            right-4
            z-20
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/[0.08]
            bg-[#080D17]/75
            px-3
            py-1
            text-[10px]
            font-medium
            tracking-wider
            text-white/60
            backdrop-blur-sm
          "
        >
          <svg
            className="h-3 w-3 text-[#F97316]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
          </svg>
          <span>360° Interactive</span>
        </div>
      )}
    </div>
  );
}
