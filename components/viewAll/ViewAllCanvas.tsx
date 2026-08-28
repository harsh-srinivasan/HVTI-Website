"use client";

import React from "react";

/* ================================================================
   VIEW ALL — ULTRA-MINIMALIST SUBTLE MILKY WAY CANVAS
   File: components/viewAll/ViewAllCanvas.tsx

   A whisper-soft, ultra-luxurious, minimalist Milky Way stardust stream:
   - Deep obsidian #05070D canvas base
   - A single, elegant, faint stardust S-curve arching smoothly down the page
   - Delicate microscopic stardust grains (0.35px - 1.1px) with soft opacities (0.15 - 0.55)
   - Whisper-quiet violet & warm amber cosmic dust haze (non-intrusive, zero clutter)
   - Micro-twinkling on rare core particles with slow, organic breathing (5s - 7s cycles)
   - 100% procedural vector SVG + CSS (silky 60fps scrolling)
   ================================================================ */

interface SubtleStar {
  x: number;
  y: number;
  r: number;
  color: string;
  opacity: number;
  anim?: "twinkle-slow" | "twinkle-soft";
  isMicroSparkle?: boolean;
}

// Generate an ultra-delicate stardust stream along an elegant galactic S-curve
function generateSubtleMilkyWayStars(): SubtleStar[] {
  const stars: SubtleStar[] = [];

  // Galactic S-Curve Waypoints [x, y, bandRadius, starCount]
  const curveWaypoints = [
    { x: 320, y: 100, width: 140, count: 12 },
    { x: 480, y: 320, width: 160, count: 16 },
    { x: 700, y: 560, width: 190, count: 20 },
    { x: 920, y: 820, width: 180, count: 18 },
    { x: 1050, y: 1100, width: 160, count: 16 },
    { x: 980, y: 1380, width: 170, count: 18 },
    { x: 780, y: 1660, width: 190, count: 20 },
    { x: 560, y: 1960, width: 180, count: 18 },
    { x: 420, y: 2260, width: 160, count: 16 },
    { x: 460, y: 2560, width: 170, count: 18 },
    { x: 640, y: 2860, width: 190, count: 20 },
    { x: 860, y: 3160, width: 180, count: 18 },
    { x: 1020, y: 3460, width: 160, count: 15 },
    { x: 940, y: 3740, width: 150, count: 12 },
  ];

  const stardustPalette = [
    "#FFFFFF",
    "#F8FAFC",
    "#EDE9FE",
    "#DDD6FE",
    "#C084FC",
    "#FEF3C7",
    "#FDE68A",
  ];

  // 1. Delicate Stardust River Grains
  curveWaypoints.forEach((wp, wpIdx) => {
    for (let i = 0; i < wp.count; i++) {
      // Gaussian distribution tight along the core
      const u1 = Math.sin(wpIdx * 17 + i * 29) * 0.5 + 0.5;
      const u2 = Math.cos(wpIdx * 23 + i * 31) * 0.5 + 0.5;
      const spread = (u1 - 0.5) * 2;
      const xOffset = spread * Math.abs(spread) * (wp.width * 0.48);

      const x = Math.round(Math.max(30, Math.min(1410, wp.x + xOffset)));
      const yOffset = (u2 - 0.5) * 140;
      const y = Math.round(wp.y + yOffset);

      const dist = Math.abs(xOffset) / (wp.width * 0.48);
      const isCore = dist < 0.30;

      // Micro-sized pinpricks
      const r = isCore
        ? Number((0.60 + (i % 3) * 0.20).toFixed(2)) // 0.60px - 1.00px
        : Number((0.35 + (i % 3) * 0.15).toFixed(2)); // 0.35px - 0.65px

      // Very soft, subtle opacities
      const opacity = isCore
        ? Number((0.40 + (i % 4) * 0.05).toFixed(2)) // 0.40 - 0.55
        : Number((0.16 + (i % 4) * 0.05).toFixed(2)); // 0.16 - 0.31

      const color = stardustPalette[(wpIdx + i) % stardustPalette.length];
      const isSparkle = isCore && (i % 11 === 0);

      let anim: SubtleStar["anim"] = undefined;
      if (isSparkle) {
        anim = "twinkle-soft";
      } else if (i % 6 === 0) {
        anim = "twinkle-slow";
      }

      stars.push({
        x,
        y,
        r,
        color,
        opacity,
        anim,
        isMicroSparkle: isSparkle,
      });
    }
  });

  // 2. Ultra-Sparse Deep Space Background Micro-Points
  for (let s = 0; s < 38; s++) {
    const yBase = s * 100 + 45;
    for (let f = 0; f < 3; f++) {
      const pseudoX = (s * 419 + f * 853) % 1380 + 30;
      const pseudoY = yBase + ((s * 19 + f * 47) % 80);
      const r = Number((0.35 + ((s + f) % 2) * 0.20).toFixed(2));
      const opacity = Number((0.15 + ((s + f) % 3) * 0.06).toFixed(2));
      const color = (s + f) % 3 === 0 ? "#DDD6FE" : "#FFFFFF";

      stars.push({
        x: pseudoX,
        y: pseudoY,
        r,
        color,
        opacity,
        anim: (s + f) % 10 === 0 ? "twinkle-slow" : undefined,
      });
    }
  }

  return stars;
}

const DESKTOP_SUBTLE_STARS = generateSubtleMilkyWayStars();

// Mobile subtle subset
const MOBILE_SUBTLE_STARS: SubtleStar[] = [
  { x: 120, y: 120, r: 0.9, color: "#FFFFFF", opacity: 0.55, isMicroSparkle: true, anim: "twinkle-soft" },
  { x: 180, y: 220, r: 0.5, color: "#EDE9FE", opacity: 0.40 },
  { x: 260, y: 380, r: 0.7, color: "#FEF3C7", opacity: 0.45, anim: "twinkle-slow" },
  { x: 310, y: 560, r: 0.9, color: "#FFFFFF", opacity: 0.50, isMicroSparkle: true },
  { x: 270, y: 820, r: 0.5, color: "#C084FC", opacity: 0.35 },
  { x: 210, y: 1100, r: 0.8, color: "#FFFFFF", opacity: 0.45, anim: "twinkle-soft" },
  { x: 140, y: 1380, r: 0.5, color: "#DDD6FE", opacity: 0.35 },
  { x: 110, y: 1680, r: 0.9, color: "#FFFFFF", opacity: 0.55, isMicroSparkle: true },
  { x: 160, y: 1980, r: 0.6, color: "#FEF3C7", opacity: 0.40 },
  { x: 240, y: 2280, r: 0.8, color: "#C084FC", opacity: 0.45, anim: "twinkle-slow" },
  { x: 300, y: 2580, r: 0.5, color: "#FFFFFF", opacity: 0.35 },
  { x: 280, y: 2880, r: 0.9, color: "#FFFFFF", opacity: 0.50, isMicroSparkle: true },
  { x: 200, y: 3180, r: 0.6, color: "#EDE9FE", opacity: 0.40 },
  { x: 140, y: 3480, r: 0.7, color: "#FFFFFF", opacity: 0.45, anim: "twinkle-soft" },
  { x: 190, y: 3720, r: 0.5, color: "#DDD6FE", opacity: 0.35 },

  // Mobile background field dots
  { x: 50, y: 450, r: 0.4, color: "#FFFFFF", opacity: 0.20 },
  { x: 360, y: 1250, r: 0.4, color: "#DDD6FE", opacity: 0.22 },
  { x: 60, y: 2150, r: 0.4, color: "#FFFFFF", opacity: 0.20 },
  { x: 350, y: 3050, r: 0.4, color: "#C084FC", opacity: 0.22 },
];

export default function ViewAllCanvas() {
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
          2. WHISPER-SOFT ATMOSPHERIC GLOW FIELDS (Ultra-Low Opacity)
          ========================================================== */}
      {/* Hero Ambient Violet Haze */}
      <div
        className="
          absolute
          -left-[120px]
          top-[-40px]
          h-[800px]
          w-[800px]
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.065),rgba(76,29,149,0.015)_50%,transparent_70%)]
          blur-[100px]
        "
      />

      {/* Hero Right Faint Warm Amber Radiance */}
      <div
        className="
          absolute
          -right-[100px]
          top-[200px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05),rgba(249,115,22,0.015)_40%,transparent_70%)]
          blur-[90px]
        "
      />

      {/* Mid-Page Left Violet Bloom */}
      <div
        className="
          absolute
          -left-[100px]
          top-[1400px]
          h-[800px]
          w-[600px]
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.045),transparent_65%)]
          blur-[110px]
        "
      />

      {/* Mid-Page Right Atmospheric Glow */}
      <div
        className="
          absolute
          -right-[100px]
          top-[2200px]
          h-[800px]
          w-[600px]
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.045),transparent_65%)]
          blur-[100px]
        "
      />

      {/* Lower-Page Faint Glow */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[600px]
          w-[850px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(ellipse_at_50%_70%,rgba(168,85,247,0.04),transparent_70%)]
          blur-[90px]
        "
      />

      {/* ==========================================================
          3. SLOW, ORGANIC BREATHING CSS KEYFRAMES
          ========================================================== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes subtleTwinkleSlow {
              0%, 100% { opacity: 0.20; transform: scale(0.9); }
              50% { opacity: 0.65; transform: scale(1.1); }
            }
            @keyframes subtleTwinkleSoft {
              0%, 100% { opacity: 0.30; transform: scale(0.92); }
              50% { opacity: 0.80; transform: scale(1.15); filter: drop-shadow(0 0 2.5px rgba(255,255,255,0.7)); }
            }

            .star-anim-twinkle-slow {
              animation: subtleTwinkleSlow 6.5s ease-in-out infinite;
              transform-origin: center;
            }
            .star-anim-twinkle-soft {
              animation: subtleTwinkleSoft 4.8s ease-in-out infinite;
              transform-origin: center;
            }
          `,
        }}
      />

      {/* ==========================================================
          4. DESKTOP CONTINUOUS MINIMALIST MILKY WAY SVG (>= lg)
          ========================================================== */}
      <div className="hidden lg:block">
        <svg
          className="absolute inset-0 h-full w-full opacity-85"
          viewBox="0 0 1440 3800"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Sheer Stardust Stream Ribbon Gradient */}
            <linearGradient id="subtleMwDustGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.06" />
              <stop offset="30%" stopColor="#C084FC" stopOpacity="0.09" />
              <stop offset="50%" stopColor="#FDBA74" stopOpacity="0.06" />
              <stop offset="70%" stopColor="#A855F7" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* ========================================================
              A. ULTRA-SUBTLE GALACTIC S-CURVE DUST STREAM
              ======================================================== */}
          {/* Broad Sheer Outer Dust Haze */}
          <path
            d="
              M 260 0
              C 440 240, 720 480, 940 760
              C 1140 1020, 1080 1280, 880 1520
              C 620 1820, 420 2080, 460 2380
              C 520 2700, 840 2980, 1020 3280
              C 1120 3480, 1020 3680, 900 3800
            "
            stroke="url(#subtleMwDustGrad)"
            strokeWidth="110"
            strokeLinecap="round"
            fill="none"
            opacity="0.30"
            style={{ filter: "blur(35px)" }}
          />

          {/* Narrow Whispering Core Ribbon */}
          <path
            d="
              M 300 0
              C 470 250, 740 490, 960 770
              C 1150 1030, 1090 1290, 890 1530
              C 640 1830, 440 2090, 480 2390
              C 540 2710, 860 2990, 1030 3290
              C 1130 3490, 1030 3690, 920 3800
            "
            stroke="url(#subtleMwDustGrad)"
            strokeWidth="45"
            strokeLinecap="round"
            fill="none"
            opacity="0.45"
            style={{ filter: "blur(16px)" }}
          />

          {/* ========================================================
              B. DELICATE STARDUST GRAINS
              ======================================================== */}
          {DESKTOP_SUBTLE_STARS.map((star, idx) => {
            const animClass = star.anim
              ? `star-anim-${star.anim}`
              : undefined;

            return (
              <g key={`subtle-star-${idx}`} className={animClass}>
                {star.isMicroSparkle ? (
                  <g>
                    {/* Micro 4-Point Diamond Flare */}
                    <path
                      d={`M ${star.x - 4} ${star.y} Q ${star.x} ${star.y} ${star.x} ${star.y - 4} Q ${star.x} ${star.y} ${star.x + 4} ${star.y} Q ${star.x} ${star.y} ${star.x} ${star.y + 4} Z`}
                      fill={star.color}
                      fillOpacity={star.opacity * 0.70}
                    />
                    <circle
                      cx={star.x}
                      cy={star.y}
                      r={star.r}
                      fill="#FFFFFF"
                      fillOpacity={0.90}
                    />
                  </g>
                ) : (
                  <circle
                    cx={star.x}
                    cy={star.y}
                    r={star.r}
                    fill={star.color}
                    fillOpacity={star.opacity}
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* ==========================================================
          5. MOBILE RESPONSIVE SUBTLE MILKY WAY CANVAS (< lg)
          ========================================================== */}
      <div className="block lg:hidden">
        <svg
          className="absolute inset-0 h-full w-full opacity-80"
          viewBox="0 0 420 3800"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Mobile Subtle Dust Curve */}
          <path
            d="
              M 100 40
              C 240 280, 320 540, 260 840
              C 180 1140, 120 1440, 160 1740
              C 220 2040, 300 2340, 260 2640
              C 200 2940, 140 3240, 170 3540
              C 200 3680, 220 3760, 200 3800
            "
            stroke="#A855F7"
            strokeWidth="50"
            strokeOpacity="0.08"
            strokeLinecap="round"
            fill="none"
            style={{ filter: "blur(20px)" }}
          />

          {/* Mobile Stardust */}
          {MOBILE_SUBTLE_STARS.map((star, idx) => {
            const animClass = star.anim
              ? `star-anim-${star.anim}`
              : undefined;

            return (
              <g key={`subtle-mob-star-${idx}`} className={animClass}>
                {star.isMicroSparkle ? (
                  <g>
                    <path
                      d={`M ${star.x - 3} ${star.y} Q ${star.x} ${star.y} ${star.x} ${star.y - 3} Q ${star.x} ${star.y} ${star.x + 3} ${star.y} Q ${star.x} ${star.y} ${star.x} ${star.y + 3} Z`}
                      fill={star.color}
                      fillOpacity={star.opacity * 0.65}
                    />
                    <circle
                      cx={star.x}
                      cy={star.y}
                      r={star.r}
                      fill="#FFFFFF"
                      fillOpacity={0.90}
                    />
                  </g>
                ) : (
                  <circle
                    cx={star.x}
                    cy={star.y}
                    r={star.r}
                    fill={star.color}
                    fillOpacity={star.opacity}
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* ==========================================================
          6. FAINT MICRO NOISE GRAIN OVERLAY
          ========================================================== */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.012]
          mix-blend-screen
        "
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
