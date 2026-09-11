"use client";

import React from "react";

/* ================================================================
   VIEW ALL — MINIMALIST MILKY WAY STARDUST CANVAS (Enhanced Visibility)
   File: components/viewAll/ViewAllCanvas.tsx

   A refined, visible-yet-minimalist Milky Way stardust stream:
   - Deep obsidian #05070D canvas base
   - A sweeping galactic S-curve with visible stardust grains
   - Star sizes: 0.5px–1.8px (core), 0.4px–1.2px (outer), visible without straining
   - Opacities: 0.35–0.85 (core), 0.20–0.50 (outer) — present but not overwhelming
   - Scattered ambient field stars across the full canvas for depth
   - Whisper-quiet violet & warm amber cosmic dust haze
   - Micro-twinkling sparkle diamonds on rare core particles (4s–7s cycles)
   - 100% procedural vector SVG + CSS (silky 60fps scrolling)
   ================================================================ */

interface SubtleStar {
  x: number;
  y: number;
  r: number;
  color: string;
  opacity: number;
  anim?: "twinkle-slow" | "twinkle-soft" | "twinkle-bright";
  isMicroSparkle?: boolean;
}

// Pseudo-random helper (deterministic, seedable)
function pseudoRand(seed: number): number {
  const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

// Generate a visible, elegant stardust stream along a galactic S-curve
function generateSubtleMilkyWayStars(): SubtleStar[] {
  const stars: SubtleStar[] = [];

  // Galactic S-Curve Waypoints [x, y, bandRadius, starCount]
  // Increased count per waypoint for better density
  const curveWaypoints = [
    { x: 280, y: 80, width: 160, count: 16 },
    { x: 400, y: 260, width: 180, count: 20 },
    { x: 560, y: 460, width: 200, count: 24 },
    { x: 740, y: 680, width: 220, count: 26 },
    { x: 920, y: 900, width: 200, count: 22 },
    { x: 1050, y: 1140, width: 180, count: 20 },
    { x: 1000, y: 1380, width: 200, count: 22 },
    { x: 860, y: 1600, width: 220, count: 26 },
    { x: 680, y: 1820, width: 200, count: 22 },
    { x: 520, y: 2040, width: 190, count: 20 },
    { x: 440, y: 2280, width: 180, count: 18 },
    { x: 460, y: 2520, width: 190, count: 20 },
    { x: 560, y: 2760, width: 210, count: 24 },
    { x: 720, y: 2980, width: 220, count: 26 },
    { x: 900, y: 3200, width: 200, count: 22 },
    { x: 1020, y: 3420, width: 180, count: 18 },
    { x: 980, y: 3620, width: 160, count: 16 },
    { x: 900, y: 3780, width: 150, count: 14 },
  ];

  const stardustPalette = [
    "#FFFFFF",
    "#F8FAFC",
    "#F1F5F9",
    "#EDE9FE",
    "#DDD6FE",
    "#C084FC",
    "#FEF3C7",
    "#FDE68A",
    "#FBBF24",
  ];

  // 1. Stardust River Grains — visible but elegant
  curveWaypoints.forEach((wp, wpIdx) => {
    for (let i = 0; i < wp.count; i++) {
      const seed1 = wpIdx * 17 + i * 29;
      const seed2 = wpIdx * 23 + i * 31;

      // Gaussian-ish distribution along the core
      const u1 = pseudoRand(seed1);
      const u2 = pseudoRand(seed2);
      const spread = (u1 - 0.5) * 2;
      const xOffset = spread * Math.abs(spread) * (wp.width * 0.52);

      const x = Math.round(Math.max(20, Math.min(1420, wp.x + xOffset)));
      const yJitter = (u2 - 0.5) * 160;
      const y = Math.round(wp.y + yJitter);

      const dist = Math.abs(xOffset) / (wp.width * 0.52);
      const isCore = dist < 0.35;
      const isMidband = dist < 0.6;

      // Visible star sizes — slightly dialed back
      const r = isCore
        ? Number((0.75 + pseudoRand(seed1 + 100) * 0.75).toFixed(2))  // 0.75px – 1.5px
        : isMidband
        ? Number((0.5 + pseudoRand(seed1 + 200) * 0.5).toFixed(2))    // 0.5px – 1.0px
        : Number((0.35 + pseudoRand(seed1 + 300) * 0.4).toFixed(2));   // 0.35px – 0.75px

      // Softer opacities — visible but restrained
      const opacity = isCore
        ? Number((0.45 + pseudoRand(seed2 + 100) * 0.25).toFixed(2))  // 0.45 – 0.70
        : isMidband
        ? Number((0.28 + pseudoRand(seed2 + 200) * 0.17).toFixed(2))  // 0.28 – 0.45
        : Number((0.16 + pseudoRand(seed2 + 300) * 0.14).toFixed(2)); // 0.16 – 0.30

      const color = stardustPalette[(wpIdx + i) % stardustPalette.length];

      // Sparkle diamonds — less frequent, more precious
      const isSparkle = isCore && (i % 9 === 0);

      let anim: SubtleStar["anim"] = undefined;
      if (isSparkle) {
        anim = "twinkle-bright";
      } else if (isCore && i % 5 === 0) {
        anim = "twinkle-soft";
      } else if (i % 7 === 0) {
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

  // 2. Scattered Ambient Field Stars — sparse depth fill
  for (let s = 0; s < 40; s++) {
    const yBase = s * 95 + 30;
    const starsPerRow = 2 + (s % 3); // 2–4 stars per row slice

    for (let f = 0; f < starsPerRow; f++) {
      const px = pseudoRand(s * 419 + f * 853);
      const py = pseudoRand(s * 337 + f * 571);

      const x = Math.round(px * 1380 + 30);
      const y = Math.round(yBase + py * 60);
      const r = Number((0.35 + pseudoRand(s * 13 + f * 7) * 0.4).toFixed(2));
      const opacity = Number((0.14 + pseudoRand(s * 11 + f * 3) * 0.18).toFixed(2));
      const color = pseudoRand(s + f * 97) > 0.6 ? "#DDD6FE" : "#FFFFFF";

      stars.push({
        x,
        y,
        r,
        color,
        opacity,
        anim: pseudoRand(s * 7 + f) > 0.88 ? "twinkle-slow" : undefined,
      });
    }
  }

  // 3. A few brighter accent stars — rare, precious anchors
  const brightAnchors = [
    { x: 200, y: 400, r: 1.3, color: "#FBBF24", opacity: 0.55 },
    { x: 1100, y: 900, r: 1.2, color: "#C084FC", opacity: 0.50 },
    { x: 600, y: 1800, r: 1.3, color: "#FFFFFF", opacity: 0.60 },
    { x: 350, y: 2800, r: 1.2, color: "#FDE68A", opacity: 0.55 },
    { x: 900, y: 3500, r: 1.3, color: "#C084FC", opacity: 0.50 },
  ];

  brightAnchors.forEach((anchor) => {
    stars.push({
      ...anchor,
      anim: "twinkle-soft",
      isMicroSparkle: true,
    });
  });

  return stars;
}

const DESKTOP_SUBTLE_STARS = generateSubtleMilkyWayStars();

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
          2. ATMOSPHERIC GLOW FIELDS (Desktop Only >= lg)
          — Boosted from near-invisible to subtly visible
          ========================================================== */}

      {/* Hero Ambient Violet Haze — top left */}
      <div
        className="
          hidden
          lg:block
          pointer-events-none
          absolute
          -left-[80px]
          top-[-20px]
          h-[900px]
          w-[900px]
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.07),rgba(76,29,149,0.018)_50%,transparent_70%)]
          blur-[100px]
        "
      />

      {/* Hero Right Faint Warm Violet/Amber Radiance */}
      <div
        className="
          hidden
          lg:block
          pointer-events-none
          absolute
          -right-[80px]
          top-[180px]
          h-[700px]
          w-[700px]
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.055),rgba(249,115,22,0.018)_45%,transparent_70%)]
          blur-[90px]
        "
      />

      {/* Mid-Page Left Violet Bloom */}
      <div
        className="
          hidden
          lg:block
          pointer-events-none
          absolute
          -left-[80px]
          top-[1300px]
          h-[900px]
          w-[700px]
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.055),transparent_60%)]
          blur-[110px]
        "
      />

      {/* Mid-Page Right Atmospheric Glow */}
      <div
        className="
          hidden
          lg:block
          pointer-events-none
          absolute
          -right-[80px]
          top-[2100px]
          h-[900px]
          w-[700px]
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.055),transparent_60%)]
          blur-[100px]
        "
      />

      {/* Lower-Page Centered Violet Glow */}
      <div
        className="
          hidden
          lg:block
          pointer-events-none
          absolute
          -left-[60px]
          top-[2900px]
          h-[800px]
          w-[600px]
          rounded-full
          bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.05),transparent_65%)]
          blur-[100px]
        "
      />

      {/* Bottom Ambient Bloom */}
      <div
        className="
          hidden
          lg:block
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          h-[700px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[radial-gradient(ellipse_at_50%_70%,rgba(168,85,247,0.05),transparent_65%)]
          blur-[90px]
        "
      />

      {/* Mobile Ambient Gradient Backdrop */}
      <div
        className="
          block
          lg:hidden
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-[#0B0F19]/50
          to-transparent
        "
      />

      {/* ==========================================================
          3. CSS KEYFRAMES — Enhanced visibility in animations
          ========================================================== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes subtleTwinkleSlow {
              0%, 100% { opacity: 0.30; transform: scale(0.92); }
              50% { opacity: 0.80; transform: scale(1.12); }
            }
            @keyframes subtleTwinkleSoft {
              0%, 100% { opacity: 0.40; transform: scale(0.94); }
              50% { opacity: 0.90; transform: scale(1.18); filter: drop-shadow(0 0 3px rgba(255,255,255,0.6)); }
            }
            @keyframes subtleTwinkleBright {
              0%, 100% { opacity: 0.50; transform: scale(0.95); }
              40% { opacity: 1.0; transform: scale(1.25); filter: drop-shadow(0 0 4px rgba(255,255,255,0.8)); }
              70% { opacity: 0.70; transform: scale(1.05); }
            }

            .star-anim-twinkle-slow {
              animation: subtleTwinkleSlow 6.5s ease-in-out infinite;
              transform-origin: center;
            }
            .star-anim-twinkle-soft {
              animation: subtleTwinkleSoft 4.8s ease-in-out infinite;
              transform-origin: center;
            }
            .star-anim-twinkle-bright {
              animation: subtleTwinkleBright 3.8s ease-in-out infinite;
              transform-origin: center;
            }
          `,
        }}
      />

      {/* ==========================================================
          4. DESKTOP MILKY WAY SVG (>= lg)
          ========================================================== */}
      <div className="hidden lg:block">
        <svg
          className="absolute inset-0 h-full w-full opacity-90"
          viewBox="0 0 1440 3800"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Stardust Stream Ribbon Gradient — boosted stop opacities */}
            <linearGradient id="subtleMwDustGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.07" />
              <stop offset="25%" stopColor="#C084FC" stopOpacity="0.10" />
              <stop offset="50%" stopColor="#FDBA74" stopOpacity="0.07" />
              <stop offset="75%" stopColor="#A855F7" stopOpacity="0.09" />
              <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.05" />
            </linearGradient>

            {/* Subtle glow filter for sparkle stars */}
            <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
            </filter>
          </defs>

          {/* ========================================================
              A. GALACTIC S-CURVE DUST STREAM
              ======================================================== */}

          {/* Broad Outer Dust Haze — more visible */}
          <path
            d="
              M 220 0
              C 420 220, 700 460, 940 740
              C 1160 1000, 1100 1280, 880 1520
              C 640 1800, 430 2060, 460 2360
              C 520 2680, 820 2960, 1020 3260
              C 1140 3460, 1040 3660, 900 3800
            "
            stroke="url(#subtleMwDustGrad)"
            strokeWidth="130"
            strokeLinecap="round"
            fill="none"
            opacity="0.32"
            style={{ filter: "blur(40px)" }}
          />

          {/* Inner Core Ribbon — clearer presence */}
          <path
            d="
              M 260 0
              C 450 230, 720 470, 960 750
              C 1170 1010, 1110 1290, 890 1530
              C 650 1810, 440 2070, 470 2370
              C 530 2690, 840 2970, 1030 3270
              C 1150 3470, 1050 3670, 910 3800
            "
            stroke="url(#subtleMwDustGrad)"
            strokeWidth="55"
            strokeLinecap="round"
            fill="none"
            opacity="0.42"
            style={{ filter: "blur(18px)" }}
          />

          {/* Tight luminous core thread */}
          <path
            d="
              M 280 0
              C 460 235, 730 475, 965 755
              C 1175 1015, 1115 1295, 895 1535
              C 655 1815, 445 2075, 475 2375
              C 535 2695, 845 2975, 1035 3275
              C 1155 3475, 1055 3675, 915 3800
            "
            stroke="url(#subtleMwDustGrad)"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
            opacity="0.50"
            style={{ filter: "blur(6px)" }}
          />

          {/* ========================================================
              B. STARDUST GRAINS — visible, elegant pinpoints
              ======================================================== */}
          {DESKTOP_SUBTLE_STARS.map((star, idx) => {
            const animClass = star.anim
              ? `star-anim-${star.anim}`
              : undefined;

            return (
              <g key={`subtle-star-${idx}`} className={animClass}>
                {star.isMicroSparkle ? (
                  <g>
                    {/* 4-Point Diamond Sparkle Flare */}
                    <path
                      d={`M ${star.x - 5} ${star.y} Q ${star.x} ${star.y} ${star.x} ${star.y - 5} Q ${star.x} ${star.y} ${star.x + 5} ${star.y} Q ${star.x} ${star.y} ${star.x} ${star.y + 5} Z`}
                      fill={star.color}
                      fillOpacity={star.opacity * 0.65}
                    />
                    {/* Bright center dot */}
                    <circle
                      cx={star.x}
                      cy={star.y}
                      r={star.r * 1.1}
                      fill="#FFFFFF"
                      fillOpacity={0.95}
                    />
                    {/* Soft glow halo */}
                    <circle
                      cx={star.x}
                      cy={star.y}
                      r={star.r * 3}
                      fill={star.color}
                      fillOpacity={star.opacity * 0.15}
                      filter="url(#starGlow)"
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
          6. FAINT MICRO NOISE GRAIN OVERLAY — slightly boosted
          ========================================================== */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.018]
          mix-blend-screen
        "
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
