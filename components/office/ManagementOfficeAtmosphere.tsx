"use client";

import React from "react";

/* ================================================================
   HVTI MANAGEMENT OFFICE — PROCEDURAL ARCHITECTURAL CANVAS
   File: components/office/ManagementOfficeAtmosphere.tsx

   100% Procedural / CSS / SVG atmospheric environment:
   - Deep #05070D dark corporate canvas
   - Organic, asymmetrical violet/purple atmospheric nebula glows
   - Clearly visible yet subtle architectural blueprint geometry
   - Structural perspective wireframes, coordinate matrices & compass arcs
   - Zero raster background image assets — 100% lightweight vector
   ================================================================ */

export default function ManagementOfficeAtmosphere() {
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
      {/* Top-Left Deep Violet Nebula (Upper Corner, High) */}
      <div
        className="
          absolute
          -left-[180px]
          top-[0px]
          h-[750px]
          w-[550px]
          rounded-full
          bg-[radial-gradient(ellipse_at_25%_25%,rgba(124,58,237,0.12),rgba(76,29,149,0.04)_50%,transparent_70%)]
          blur-[95px]
        "
      />

      {/* Top-Right Luminous Violet Nebula (Staggered Lower, around y: 260px) */}
      <div
        className="
          absolute
          -right-[180px]
          top-[220px]
          h-[800px]
          w-[550px]
          rounded-full
          bg-[radial-gradient(ellipse_at_75%_45%,rgba(168,85,247,0.12),rgba(124,58,237,0.04)_45%,transparent_70%)]
          blur-[95px]
        "
      />

      {/* Mid-Page Left Violet Bloom (Behind Prime Location / Operations) */}
      <div
        className="
          absolute
          -left-[160px]
          top-[1400px]
          h-[900px]
          w-[550px]
          rounded-full
          bg-[radial-gradient(ellipse_at_25%_50%,rgba(124,58,237,0.10),transparent_65%)]
          blur-[100px]
        "
      />

      {/* Mid-Page Right Architectural Glow (Behind R&D Innovation Wireframe) */}
      <div
        className="
          absolute
          -right-[180px]
          top-[2000px]
          h-[950px]
          w-[600px]
          rounded-full
          bg-[radial-gradient(ellipse_at_75%_50%,rgba(168,85,247,0.10),transparent_65%)]
          blur-[105px]
        "
      />

      {/* Lower-Left Deep Violet Glow (Behind Sustainability Wireframe) */}
      <div
        className="
          absolute
          -left-[140px]
          top-[2750px]
          h-[900px]
          w-[550px]
          rounded-full
          bg-[radial-gradient(ellipse_at_30%_50%,rgba(76,29,149,0.09),transparent_65%)]
          blur-[110px]
        "
      />

      {/* Lower-Right Coordinate Matrix Nebula (Near Core Values) */}
      <div
        className="
          absolute
          -right-[120px]
          top-[3200px]
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
          viewBox="0 0 1440 4000"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="bpGradPurple" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="bpGradFadeH" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="bpGradFadeHRev" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* ========================================================
              REGION A: TOP-LEFT ARCHITECTURAL CAD GRID & SCHEMATIC
              Position: High in the upper corner (y: 30 - 260)
              ======================================================== */}
          <g>
            {/* Structural Column Grid Lines */}
            <line x1="20" y1="60" x2="160" y2="60" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.38" />
            <line x1="20" y1="120" x2="210" y2="120" stroke="url(#bpGradFadeH)" strokeWidth="0.9" />
            <line x1="20" y1="180" x2="160" y2="180" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.38" />
            <line x1="20" y1="240" x2="230" y2="240" stroke="url(#bpGradFadeH)" strokeWidth="0.9" />

            <line x1="50" y1="30" x2="50" y2="260" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.38" />
            <line x1="110" y1="30" x2="110" y2="260" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="4 4" />
            <line x1="170" y1="30" x2="170" y2="260" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.35" strokeDasharray="4 4" />

            {/* Subtle Floorplan CAD Walls */}
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
              REGION B: TOP-RIGHT COORDINATE MATRIX & COMPASS
              Position: Staggered lower down (y: 320 - 680)
              ======================================================== */}
          <g>
            {/* Subtle Circular Compass Diagram */}
            <circle cx="1360" cy="480" r="150" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.32" />
            <circle cx="1360" cy="480" r="220" stroke="#C084FC" strokeWidth="0.7" strokeOpacity="0.22" strokeDasharray="4 6" />
            <circle cx="1360" cy="480" r="85" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.36" />

            {/* Crosshair Horizontal Line fading towards center */}
            <line x1="1140" y1="480" x2="1440" y2="480" stroke="url(#bpGradFadeHRev)" strokeWidth="0.8" />
            <line x1="1360" y1="300" x2="1360" y2="660" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.32" />

            {/* Dot Matrix Points */}
            {[0, 1, 2, 3, 4].map((i) =>
              [0, 1, 2, 3].map((j) => (
                <circle
                  key={`top-grid-${i}-${j}`}
                  cx={1240 + i * 36}
                  cy={360 + j * 36}
                  r="1.3"
                  fill="#C084FC"
                  fillOpacity="0.45"
                />
              ))
            )}

            {/* Accent Nodes */}
            <circle cx="1360" cy="480" r="3.2" fill="#F97316" fillOpacity="0.90" />
            <circle cx="1275" cy="480" r="2.2" fill="#C084FC" fillOpacity="0.80" />
            <circle cx="1360" cy="395" r="2.2" fill="#C084FC" fillOpacity="0.80" />
          </g>

          {/* ========================================================
              REGION C: UPPER-MID LEFT TECHNICAL CALIPER & ARCS (y: 1150 - 1650)
              ======================================================== */}
          <g>
            {/* Major Left Blueprint Arc */}
            <circle cx="0" cy="1420" r="260" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.34" />
            <circle cx="0" cy="1420" r="320" stroke="#C084FC" strokeWidth="0.7" strokeOpacity="0.22" strokeDasharray="5 7" />

            {/* Horizontal Guide & Elevation Datum */}
            <line x1="0" y1="1420" x2="440" y2="1420" stroke="url(#bpGradFadeH)" strokeWidth="0.9" />
            <line x1="0" y1="1340" x2="340" y2="1340" stroke="url(#bpGradFadeH)" strokeWidth="0.7" strokeDasharray="4 6" />
            <line x1="0" y1="1500" x2="300" y2="1500" stroke="url(#bpGradFadeH)" strokeWidth="0.7" strokeDasharray="4 6" />

            {/* Dot Matrix */}
            {[0, 1, 2, 3].map((i) =>
              [0, 1, 2, 3, 4].map((j) => (
                <circle
                  key={`mid-left-grid-${i}-${j}`}
                  cx={40 + i * 36}
                  cy={1240 + j * 36}
                  r="1.3"
                  fill="#C084FC"
                  fillOpacity="0.45"
                />
              ))
            )}
            <circle cx="260" cy="1420" r="3.0" fill="#F97316" fillOpacity="0.85" />
          </g>

          {/* ========================================================
              REGION D: MID-RIGHT ARCHITECTURAL PERSPECTIVE FACADE (y: 1700 - 2350)
              ======================================================== */}
          <g>
            {/* 3D Perspective Building Wireframe */}
            {/* Roof Parapet */}
            <line x1="1120" y1="1840" x2="1440" y2="1760" stroke="#C084FC" strokeWidth="1.0" strokeOpacity="0.38" />
            <line x1="1040" y1="1920" x2="1120" y2="1840" stroke="#C084FC" strokeWidth="1.0" strokeOpacity="0.42" />
            <line x1="1040" y1="1920" x2="1440" y2="1830" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />

            {/* Floor Slab Slices */}
            <line x1="1040" y1="1990" x2="1440" y2="1900" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.35" />
            <line x1="1040" y1="2060" x2="1440" y2="1970" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.35" />
            <line x1="1040" y1="2130" x2="1440" y2="2040" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.38" />
            <line x1="1040" y1="2200" x2="1440" y2="2110" stroke="#C084FC" strokeWidth="1.1" strokeOpacity="0.44" />

            {/* Vertical Mullion Columns */}
            <line x1="1040" y1="1920" x2="1040" y2="2200" stroke="#C084FC" strokeWidth="1.1" strokeOpacity="0.44" />
            <line x1="1120" y1="1900" x2="1120" y2="2180" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />
            <line x1="1200" y1="1880" x2="1200" y2="2160" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />
            <line x1="1280" y1="1860" x2="1280" y2="2140" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />
            <line x1="1360" y1="1840" x2="1360" y2="2120" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />

            {/* Perspective Ground Lines */}
            <line x1="960" y1="2260" x2="1440" y2="2140" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.26" />
            <line x1="900" y1="2300" x2="1440" y2="2170" stroke="#C084FC" strokeWidth="0.7" strokeOpacity="0.20" strokeDasharray="4 6" />

            {/* Tree Foliage Wireframe Outlines */}
            <path
              d="M 980 2160 C 960 2120, 970 2060, 1010 2040 C 1030 2020, 1070 2030, 1080 2060 C 1100 2090, 1080 2140, 1050 2160 Z"
              stroke="#C084FC"
              strokeWidth="0.7"
              strokeOpacity="0.26"
              strokeDasharray="3 4"
            />
            <line x1="1030" y1="2160" x2="1030" y2="2220" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.35" />
          </g>

          {/* ========================================================
              REGION E: LOWER-LEFT PERSPECTIVE FACADE WIREFRAME (y: 2600 - 3250)
              ======================================================== */}
          <g>
            {/* Corner Facade Wireframe */}
            <line x1="0" y1="2720" x2="280" y2="2800" stroke="#C084FC" strokeWidth="1.0" strokeOpacity="0.38" />
            <line x1="280" y1="2800" x2="420" y2="2760" stroke="#C084FC" strokeWidth="1.0" strokeOpacity="0.35" />
            <line x1="0" y1="2840" x2="280" y2="2920" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.32" />
            <line x1="280" y1="2920" x2="420" y2="2880" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.28" />
            <line x1="0" y1="2960" x2="280" y2="3040" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.32" />
            <line x1="280" y1="3040" x2="420" y2="3000" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.28" />
            <line x1="0" y1="3080" x2="280" y2="3160" stroke="#C084FC" strokeWidth="1.1" strokeOpacity="0.42" />
            <line x1="280" y1="3160" x2="420" y2="3120" stroke="#C084FC" strokeWidth="1.1" strokeOpacity="0.38" />

            {/* Corner Column */}
            <line x1="280" y1="2800" x2="280" y2="3160" stroke="#C084FC" strokeWidth="1.3" strokeOpacity="0.45" />
            <line x1="140" y1="2760" x2="140" y2="3120" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.28" />
            <line x1="350" y1="2780" x2="350" y2="3140" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.28" />

            {/* Street Line */}
            <line x1="0" y1="3160" x2="480" y2="3240" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.26" />
            <circle cx="280" cy="3160" r="3.0" fill="#F97316" fillOpacity="0.85" />
          </g>

          {/* ========================================================
              REGION F: LOWER-RIGHT INTERSECTING COMPASS & GRID (y: 2900 - 3700)
              ======================================================== */}
          <g>
            {/* Concentric Intersecting Rings */}
            <circle cx="1200" cy="3360" r="180" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.34" />
            <circle cx="1200" cy="3360" r="260" stroke="#C084FC" strokeWidth="0.7" strokeOpacity="0.22" strokeDasharray="4 6" />
            <circle cx="1280" cy="3280" r="140" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />
            <circle cx="1280" cy="3280" r="220" stroke="#C084FC" strokeWidth="0.7" strokeOpacity="0.20" strokeDasharray="4 6" />
            <circle cx="1140" cy="3440" r="90" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />

            {/* Horizontal & Vertical Guide Axes */}
            <line x1="880" y1="3360" x2="1440" y2="3360" stroke="url(#bpGradFadeHRev)" strokeWidth="0.9" />
            <line x1="1200" y1="3050" x2="1200" y2="3650" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.30" />
            <line x1="960" y1="3280" x2="1440" y2="3280" stroke="url(#bpGradFadeHRev)" strokeWidth="0.7" strokeDasharray="4 6" />

            {/* Diagonal Construction Rays */}
            <line x1="1020" y1="3180" x2="1380" y2="3540" stroke="#C084FC" strokeWidth="0.7" strokeOpacity="0.24" strokeDasharray="3 5" />

            {/* Coordinate Node Points Matrix */}
            {[0, 1, 2, 3, 4, 5].map((i) =>
              [0, 1, 2, 3, 4, 5].map((j) => (
                <circle
                  key={`bot-grid-${i}-${j}`}
                  cx={1060 + i * 40}
                  cy={3160 + j * 40}
                  r="1.3"
                  fill="#C084FC"
                  fillOpacity="0.45"
                />
              ))
            )}

            {/* High-Precision Accent Nodes */}
            <circle cx="1200" cy="3360" r="3.5" fill="#F97316" fillOpacity="0.90" />
            <circle cx="1280" cy="3280" r="2.6" fill="#C084FC" fillOpacity="0.85" />
            <circle cx="1140" cy="3440" r="2.4" fill="#F97316" fillOpacity="0.85" />
            <circle cx="1020" cy="3360" r="2.2" fill="#C084FC" fillOpacity="0.75" />
            <circle cx="1380" cy="3360" r="2.2" fill="#C084FC" fillOpacity="0.75" />
          </g>

          {/* ========================================================
              REGION G: BOTTOM CENTER TERMINATION DATUM (y: 3800 - 4000)
              ======================================================== */}
          <g>
            <line x1="560" y1="3920" x2="880" y2="3920" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.38" />
            <line x1="720" y1="3880" x2="720" y2="3960" stroke="#C084FC" strokeWidth="0.9" strokeOpacity="0.38" />
            <circle cx="720" cy="3920" r="3.0" fill="#F97316" fillOpacity="0.90" />
            <circle cx="640" cy="3920" r="1.8" fill="#C084FC" fillOpacity="0.70" />
            <circle cx="800" cy="3920" r="1.8" fill="#C084FC" fillOpacity="0.70" />
          </g>
        </svg>
      </div>

      {/* ==========================================================
          4. MOBILE RESPONSIVE BLUEPRINT SVG (< lg)
          ========================================================== */}
      <div className="block lg:hidden">
        <svg
          className="absolute inset-0 h-full w-full opacity-80"
          viewBox="0 0 420 3800"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Top-Right Blueprint Caliper & Grid */}
          <circle cx="390" cy="320" r="110" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.32" />
          <line x1="240" y1="320" x2="420" y2="320" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.34" />
          <circle cx="390" cy="320" r="2.5" fill="#F97316" fillOpacity="0.85" />

          {/* Mid-Left Circular Gauge */}
          <circle cx="0" cy="1400" r="140" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.32" />
          <line x1="0" y1="1400" x2="180" y2="1400" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.34" />
          <circle cx="140" cy="1400" r="2.5" fill="#F97316" fillOpacity="0.85" />

          {/* Lower-Right Compass Matrix */}
          <circle cx="390" cy="3200" r="120" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.32" />
          <line x1="260" y1="3200" x2="420" y2="3200" stroke="#C084FC" strokeWidth="0.8" strokeOpacity="0.34" />
          <circle cx="390" cy="3200" r="2.5" fill="#F97316" fillOpacity="0.85" />
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
