"use client";

import { useEffect, useState, useRef } from "react";
import React from "react";

/* ================================================================
   HVTI HELMET & VOLTAGE DETECTOR DUAL-ASSET 3D VIEWER
   File: components/renders/HelmetDetectorViewer.tsx

   Features:
   - 100% transparent canvas allowing ambient background gradient flow
   - Dual-Asset Switcher: [ ⛑️ Helmet Mounted ] | [ 📦 Standalone Unit ]
   - Instant PBR model swapping (@google/model-viewer)
   - Smooth 360° auto-turntable rotation + full orbit/pitch/zoom controls
   - Tuned camera framing for both large hard hat & compact detector module
   ================================================================ */

interface HelmetDetectorViewerProps {
  initialMode?: "helmet" | "standalone";
  className?: string;
}

export default function HelmetDetectorViewer({
  initialMode = "helmet",
  className = "",
}: HelmetDetectorViewerProps) {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<"helmet" | "standalone">(initialMode);
  const modelViewerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    import("@google/model-viewer")
      .then(() => setMounted(true))
      .catch((err) => console.error("Error loading model-viewer:", err));
  }, []);

  const modelSrc =
    mode === "helmet"
      ? "/models/detector_helmet_mounted.glb"
      : "/models/detector_standalone.glb";

  const altText =
    mode === "helmet"
      ? "HVTI Helmet Mounted Voltage Detector 3D Model"
      : "HVTI Voltage Detector Standalone 3D Model";

  return (
    <div
      className={`
        helmet-detector-viewer-container
        relative
        flex
        h-full
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-transparent
        ${className}
      `}
    >
      {/* 3D Canvas Stage */}
      <div className="relative flex h-full w-full items-center justify-center">
        {mounted ? (
          React.createElement("model-viewer", {
            ref: modelViewerRef,
            key: mode,
            src: modelSrc,
            alt: altText,
            "auto-rotate": true,
            "rotation-per-second": "16deg",
            "camera-controls": true,
            "interaction-prompt": "auto",
            "shadow-intensity": "1.2",
            "shadow-softness": "0.75",
            exposure: "1.15",
            "camera-orbit": mode === "helmet" ? "25deg 75deg 180%" : "0deg 75deg 230%",
            "min-camera-orbit": "auto auto 40%",
            "max-camera-orbit": "auto auto 450%",
            "field-of-view": mode === "helmet" ? "40deg" : "48deg",
            loading: "eager",
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
      </div>

      {/* Floating Dual-Asset Switcher UI (Top Center) */}
      <div
        className="
          absolute
          top-3
          z-30
          flex
          items-center
          gap-1.5
          rounded-full
          border
          border-white/[0.12]
          bg-[#080D1A]/85
          p-1
          shadow-[0_8px_24px_rgba(0,0,0,0.6)]
          backdrop-blur-md
        "
      >
        {/* Option 1: Helmet Mounted */}
        <button
          type="button"
          onClick={() => setMode("helmet")}
          className={`
            flex
            items-center
            gap-1.5
            rounded-full
            px-3.5
            py-1.5
            text-[11px]
            font-semibold
            transition-all
            duration-200
            ${
              mode === "helmet"
                ? "bg-[#F97316] text-white shadow-[0_0_16px_rgba(249,115,22,0.4)]"
                : "text-white/60 hover:bg-white/[0.06] hover:text-white"
            }
          `}
          aria-pressed={mode === "helmet"}
        >
          <span className="text-sm">⛑️</span>
          <span>Helmet Mounted</span>
        </button>

        {/* Option 2: Standalone Unit */}
        <button
          type="button"
          onClick={() => setMode("standalone")}
          className={`
            flex
            items-center
            gap-1.5
            rounded-full
            px-3.5
            py-1.5
            text-[11px]
            font-semibold
            transition-all
            duration-200
            ${
              mode === "standalone"
                ? "bg-[#F97316] text-white shadow-[0_0_16px_rgba(249,115,22,0.4)]"
                : "text-white/60 hover:bg-white/[0.06] hover:text-white"
            }
          `}
          aria-pressed={mode === "standalone"}
        >
          <span className="text-sm">📦</span>
          <span>Standalone Unit</span>
        </button>
      </div>

      {/* 360° Interactive Badge (Bottom Right) */}
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
