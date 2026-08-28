"use client";

import React from "react";

/* ================================================================
   HVTI LABORATORY FACILITIES — PROCEDURAL ARCHITECTURAL CANVAS
   File: components/laboratory/LaboratoryAtmosphere.tsx

   100% Procedural / CSS / SVG atmospheric environment:
   - Deep #05070D dark corporate canvas
   - Organic, asymmetrical violet/purple atmospheric nebula glows
   - Clearly visible yet subtle architectural blueprint & test bay geometry
   - Structural perspective wireframes, coordinate matrices & compass arcs
   - Zero raster background image assets — 100% lightweight vector
   ================================================================ */

export default function LaboratoryAtmosphere() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
        bg-[#05070D]
      "
      aria-hidden="true"
    >
      {/* 1. Base Dark Solid Canvas */}
      <div className="absolute inset-0 bg-[#05070D]" />

      {/* ==========================================================
          2. ATMOSPHERIC NEBULA GLOW FIELDS (CSS Radial Gradients)
          ========================================================== */}
      {/* Top-Left Deep Violet Nebula (Upper Hero Corner) */}
      <div
        className="
          absolute
          -left-[180px]
          top-[0px]
          h-[800px]
          w-[580px]
          rounded-full
          bg-[radial-gradient(ellipse_at_25%_25%,rgba(124,58,237,0.12),rgba(76,29,149,0.04)_50%,transparent_70%)]
          blur-[95px]
        "
      />

      {/* Top-Right Luminous Violet Nebula (Hero Right Margin) */}
      <div
        className="
          absolute
          -right-[180px]
          top-[220px]
          h-[850px]
          w-[580px]
          rounded-full
          bg-[radial-gradient(ellipse_at_75%_45%,rgba(168,85,247,0.12),rgba(124,58,237,0.04)_45%,transparent_70%)]
          blur-[95px]
        "
      />

      {/* Mid-Page Left Violet Bloom (Behind Infrastructure & R&D) */}
      <div
        className="
          absolute
          -left-[160px]
          top-[1350px]
          h-[950px]
          w-[580px]
          rounded-full
          bg-[radial-gradient(ellipse_at_25%_50%,rgba(124,58,237,0.10),transparent_65%)]
          blur-[100px]
        "
      />

      {/* Mid-Page Right Architectural Glow (Behind Manufacturing 800kV Section) */}
      <div
        className="
          absolute
          -right-[180px]
          top-[2100px]
          h-[950px]
          w-[620px]
          rounded-full
          bg-[radial-gradient(ellipse_at_75%_50%,rgba(168,85,247,0.10),rgba(249,115,22,0.025)_50%,transparent_65%)]
          blur-[105px]
        "
      />

      {/* Lower-Left Deep Violet Glow (Behind Testing & Quality Assurance) */}
      <div
        className="
          absolute
          -left-[140px]
          top-[2900px]
          h-[900px]
          w-[580px]
          rounded-full
          bg-[radial-gradient(ellipse_at_30%_50%,rgba(76,29,149,0.09),transparent_65%)]
          blur-[110px]
        "
      />

      {/* Lower-Right Coordinate Matrix Nebula (Near Commitment to Excellence) */}
      <div
        className="
          absolute
          -right-[120px]
          top-[3450px]
          h-[850px]
          w-[650px]
          rounded-full
          bg-[radial-gradient(ellipse_at_70%_55%,rgba(168,85,247,0.12),rgba(249,115,22,0.03)_50%,transparent_75%)]
          blur-[95px]
        "
      />

      {/* Bottom Center Subtle Purple Glow */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[650px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(ellipse_at_50%_70%,rgba(124,58,237,0.08),transparent_70%)]
          blur-[90px]
        "
      />

      {/* ==========================================================
          3. DESKTOP CONTINUOUS ARCHITECTURAL BLUEPRINT SVG (>= lg)
          ========================================================== */}
      <div className="hidden lg:block">
        <svg
          className="absolute inset-0 h-full w-full opacity-95"
          viewBox="0 0 1440 4300"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="labBpGradPurple" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="labBpGradFadeH" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="labBpGradFadeHRev" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* ========================================================
              REGION A: TOP-LEFT ARCHITECTURAL CAD GRID (y: 30 - 260)
              ======================================================== */}
          <g>
            <line x1="20" y1="60" x2="160" y2="60" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.38" />
            <line x1="20" y1="120" x2="210" y2="120" stroke="url(#labBpGradFadeH)" strokeWidth="0.9" />
            <line x1="20" y1="180" x2="160" y2="180" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.38" />
            <line x1="20" y1="240" x2="230" y2="240" stroke="url(#labBpGradFadeH)" strokeWidth="0.9" />

            <line x1="50" y1="30" x2="50" y2="260" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.38" />
            <line x1="110" y1="30" x2="110" y2="260" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="4 4" />
            <line x1="170" y1="30" x2="170" y2="260" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="4 4" />

            {/* Floorplan Structural Wall Bays */}
            <rect x="25" y="70" width="75" height="80" stroke="#C084FC" strokeWidth="1.0" strokeOpacity="0.42" fill="none" />
            <rect x="100" y="70" width="55" height="80" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.32" fill="none" strokeDasharray="3 3" />

            {/* Dimension Extension Line & Tick */}
            <line x1="20" y1="250" x2="160" y2="250" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.40" />
            <line x1="16" y1="246" x2="24" y2="254" stroke="#F97316" strokeWidth="1.3" strokeOpacity="0.85" />
            <line x1="156" y1="246" x2="164" y2="254" stroke="#F97316" strokeWidth="1.3" strokeOpacity="0.85" />

            {/* Intersection Dots */}
            <circle cx="50" cy="120" r="2.2" fill="#C084FC" fillOpacity="0.80" />
            <circle cx="110" cy="120" r="2.2" fill="#C084FC" fillOpacity="0.75" />
            <circle cx="50" cy="180" r="2.2" fill="#C084FC" fillOpacity="0.75" />
            <circle cx="110" cy="180" r="2.2" fill="#F97316" fillOpacity="0.90" />
          </g>

          {/* ========================================================
              REGION B: TOP-RIGHT COORDINATE MATRIX & COMPASS (y: 320 - 680)
              ======================================================== */}
          <g>
            <circle cx="1360" cy="480" r="150" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.32" />
            <circle cx="1360" cy="480" r="220" stroke="#C084FC" strokeWidth="0.7" strokeOpacity="0.22" strokeDasharray="4 6" />
            <circle cx="1360" cy="480" r="85" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.36" />

            <line x1="1140" y1="480" x2="1440" y2="480" stroke="url(#labBpGradFadeHRev)" strokeWidth="0.8" />
            <line x1="1360" y1="300" x2="1360" y2="660" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.32" />

            {[0, 1, 2, 3, 4].map((i) =>
              [0, 1, 2, 3].map((j) => (
                <circle
                  key={`lab-top-grid-${i}-${j}`}
                  cx={1240 + i * 36}
                  cy={360 + j * 36}
                  r="1.3"
                  fill="#C084FC"
                  fillOpacity="0.45"
                />
              ))
            )}

            <circle cx="1360" cy="480" r="3.2" fill="#F97316" fillOpacity="0.90" />
            <circle cx="1275" cy="480" r="2.2" fill="#C084FC" fillOpacity="0.80" />
            <circle cx="1360" cy="395" r="2.2" fill="#C084FC" fillOpacity="0.80" />
          </g>

          {/* ========================================================
              REGION C: UPPER-MID LEFT TEST BAY ARCS & DATUMS (y: 1200 - 1750)
              ======================================================== */}
          <g>
            <circle cx="0" cy="1480" r="280" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.34" />
            <circle cx="0" cy="1480" r="340" stroke="#C084FC" strokeWidth="0.7" strokeOpacity="0.22" strokeDasharray="5 7" />

            <line x1="0" y1="1480" x2="440" y2="1480" stroke="url(#labBpGradFadeH)" strokeWidth="0.9" />
            <line x1="0" y1="1400" x2="340" y2="1400" stroke="url(#labBpGradFadeH)" strokeWidth="0.7" strokeDasharray="4 6" />
            <line x1="0" y1="1560" x2="300" y2="1560" stroke="url(#labBpGradFadeH)" strokeWidth="0.7" strokeDasharray="4 6" />

            {[0, 1, 2, 3].map((i) =>
              [0, 1, 2, 3, 4].map((j) => (
                <circle
                  key={`lab-mid-left-grid-${i}-${j}`}
                  cx={40 + i * 36}
                  cy={1300 + j * 36}
                  r="1.3"
                  fill="#C084FC"
                  fillOpacity="0.45"
                />
              ))
            )}
            <circle cx="280" cy="1480" r="3.0" fill="#F97316" fillOpacity="0.85" />
          </g>

          {/* ========================================================
              REGION D: MID-RIGHT HIGH-VOLTAGE TEST BAY SCHEMATIC (y: 1900 - 2550)
              ======================================================== */}
          <g>
            {/* 3D Wireframe of Test Bay Truss & Transformer Bay */}
            <line x1="1100" y1="2020" x2="1440" y2="1940" stroke="#C084FC" strokeWidth="1.0" strokeOpacity="0.38" />
            <line x1="1020" y1="2100" x2="1100" y2="2020" stroke="#C084FC" strokeWidth="1.0" strokeOpacity="0.42" />
            <line x1="1020" y1="2100" x2="1440" y2="2010" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />

            {/* Test Bay Column Gantries */}
            <line x1="1020" y1="2180" x2="1440" y2="2090" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.35" />
            <line x1="1020" y1="2260" x2="1440" y2="2170" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.35" />
            <line x1="1020" y1="2340" x2="1440" y2="2250" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.38" />
            <line x1="1020" y1="2420" x2="1440" y2="2330" stroke="#C084FC" strokeWidth="1.1" strokeOpacity="0.44" />

            <line x1="1020" y1="2100" x2="1020" y2="2420" stroke="#C084FC" strokeWidth="1.1" strokeOpacity="0.44" />
            <line x1="1100" y1="2080" x2="1100" y2="2400" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />
            <line x1="1180" y1="2060" x2="1180" y2="2380" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />
            <line x1="1260" y1="2040" x2="1260" y2="2360" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />
            <line x1="1340" y1="2020" x2="1340" y2="2340" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />

            {/* High-Voltage Corona Ring Schematic */}
            <ellipse cx="1180" cy="2160" rx="38" ry="12" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.45" />
            <ellipse cx="1180" cy="2200" rx="38" ry="12" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.45" />
            <line x1="1180" y1="2200" x2="1180" y2="2280" stroke="#C084FC" strokeWidth="1.0" strokeOpacity="0.45" />

            <circle cx="1180" cy="2160" r="2.5" fill="#F97316" fillOpacity="0.85" />
          </g>

          {/* ========================================================
              REGION E: LOWER-LEFT DIELECTRIC SCHEMATIC WIREFRAME (y: 2800 - 3450)
              ======================================================== */}
          <g>
            <line x1="0" y1="2940" x2="280" y2="3020" stroke="#C084FC" strokeWidth="1.0" strokeOpacity="0.38" />
            <line x1="280" y1="3020" x2="420" y2="2980" stroke="#C084FC" strokeWidth="1.0" strokeOpacity="0.35" />
            <line x1="0" y1="3060" x2="280" y2="3140" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.32" />
            <line x1="280" y1="3140" x2="420" y2="3100" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.28" />
            <line x1="0" y1="3180" x2="280" y2="3260" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.32" />
            <line x1="280" y1="3260" x2="420" y2="3220" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.28" />
            <line x1="0" y1="3300" x2="280" y2="3380" stroke="#C084FC" strokeWidth="1.1" strokeOpacity="0.42" />
            <line x1="280" y1="3380" x2="420" y2="3340" stroke="#C084FC" strokeWidth="1.1" strokeOpacity="0.38" />

            <line x1="280" y1="3020" x2="280" y2="3380" stroke="#C084FC" strokeWidth="1.3" strokeOpacity="0.45" />
            <line x1="140" y1="2980" x2="140" y2="3340" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.28" />
            <line x1="350" y1="3000" x2="350" y2="3360" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.28" />

            <circle cx="280" cy="3380" r="3.0" fill="#F97316" fillOpacity="0.85" />
          </g>

          {/* ========================================================
              REGION F: LOWER-RIGHT INTERSECTING COMPASS & GRID (y: 3200 - 3950)
              ======================================================== */}
          <g>
            <circle cx="1200" cy="3600" r="180" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.34" />
            <circle cx="1200" cy="3600" r="260" stroke="#C084FC" strokeWidth="0.7" strokeOpacity="0.22" strokeDasharray="4 6" />
            <circle cx="1280" cy="3520" r="140" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />
            <circle cx="1280" cy="3520" r="220" stroke="#C084FC" strokeWidth="0.7" strokeOpacity="0.20" strokeDasharray="4 6" />
            <circle cx="1140" cy="3680" r="90" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />

            <line x1="880" y1="3600" x2="1440" y2="3600" stroke="url(#labBpGradFadeHRev)" strokeWidth="0.9" />
            <line x1="1200" y1="3300" x2="1200" y2="3900" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />
            <line x1="960" y1="3520" x2="1440" y2="3520" stroke="url(#labBpGradFadeHRev)" strokeWidth="0.7" strokeDasharray="4 6" />

            <line x1="1020" y1="3420" x2="1380" y2="3780" stroke="#C084FC" strokeWidth="0.7" strokeOpacity="0.24" strokeDasharray="3 5" />

            {[0, 1, 2, 3, 4, 5].map((i) =>
              [0, 1, 2, 3, 4, 5].map((j) => (
                <circle
                  key={`lab-bot-grid-${i}-${j}`}
                  cx={1060 + i * 40}
                  cy={3400 + j * 40}
                  r="1.3"
                  fill="#C084FC"
                  fillOpacity="0.45"
                />
              ))
            )}

            <circle cx="1200" cy="3600" r="3.5" fill="#F97316" fillOpacity="0.90" />
            <circle cx="1280" cy="3520" r="2.6" fill="#C084FC" fillOpacity="0.85" />
            <circle cx="1140" cy="3680" r="2.4" fill="#F97316" fillOpacity="0.85" />
            <circle cx="1020" cy="3600" r="2.2" fill="#C084FC" fillOpacity="0.75" />
            <circle cx="1380" cy="3600" r="2.2" fill="#C084FC" fillOpacity="0.75" />
          </g>

          {/* ========================================================
              REGION G: BOTTOM CENTER TERMINATION DATUM (y: 4050 - 4300)
              ======================================================== */}
          <g>
            <line x1="560" y1="4180" x2="880" y2="4180" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.38" />
            <line x1="720" y1="4140" x2="720" y2="4220" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.38" />
            <circle cx="720" cy="4180" r="3.0" fill="#F97316" fillOpacity="0.90" />
            <circle cx="640" cy="4180" r="1.8" fill="#C084FC" fillOpacity="0.70" />
            <circle cx="800" cy="4180" r="1.8" fill="#C084FC" fillOpacity="0.70" />
          </g>
        </svg>
      </div>

      {/* ==========================================================
          4. MOBILE RESPONSIVE BLUEPRINT SVG (< lg)
          ========================================================== */}
      <div className="block lg:hidden">
        <svg
          className="absolute inset-0 h-full w-full opacity-80"
          viewBox="0 0 420 4100"
          fill="none"
          preserveAspectRatio="none"
        >
          <circle cx="390" cy="320" r="110" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.32" />
          <line x1="240" y1="320" x2="420" y2="320" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.34" />
          <circle cx="390" cy="320" r="2.5" fill="#F97316" fillOpacity="0.85" />

          <circle cx="0" cy="1480" r="140" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.32" />
          <line x1="0" y1="1480" x2="180" y2="1480" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.34" />
          <circle cx="140" cy="1480" r="2.5" fill="#F97316" fillOpacity="0.85" />

          <circle cx="390" cy="3500" r="120" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.32" />
          <line x1="260" y1="3500" x2="420" y2="3500" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.34" />
          <circle cx="390" cy="3500" r="2.5" fill="#F97316" fillOpacity="0.85" />
        </svg>
      </div>

      {/* ==========================================================
          5. FAINT MICRO NOISE GRAIN OVERLAY
          ========================================================== */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.015]
          mix-blend-screen
        "
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
