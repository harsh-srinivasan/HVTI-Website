"use client";

/* ================================================================
   HVTI PRODUCT ATMOSPHERE SYSTEM
   File: components/products/ProductAtmosphere.tsx

   Unified, continuous atmospheric background with flowing high-voltage
   electric current lines linking all sections of the product canvas.
   ================================================================ */

export default function ProductAtmosphere() {
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
      {/* ==========================================================
          1. DESKTOP ATMOSPHERIC BACKGROUND SYSTEM (>= lg)
          ========================================================== */}
      <div className="hidden lg:block">
        {/* Hero Zone: Deep luminous purple ambient field */}
        <div
          className="
            absolute
            left-0
            top-0
            h-[1200px]
            w-full
            bg-[radial-gradient(ellipse_at_70%_35%,rgba(168,85,247,0.075),transparent_60%)]
          "
        />

        {/* Hero -> Glance Transition: Subtle warm orange bounce */}
        <div
          className="
            absolute
            right-0
            top-[520px]
            h-[850px]
            w-[75%]
            bg-[radial-gradient(ellipse_at_85%_40%,rgba(249,115,22,0.045),transparent_55%)]
          "
        />

        {/* Engineering Glance: Luminous center purple aura */}
        <div
          className="
            absolute
            left-0
            top-[1100px]
            h-[950px]
            w-full
            bg-[radial-gradient(ellipse_at_50%_40%,rgba(168,85,247,0.065),transparent_55%)]
          "
        />

        {/* Technical Specifications: Cool slate & deep indigo zone */}
        <div
          className="
            absolute
            left-0
            top-[1850px]
            h-[950px]
            w-full
            bg-[radial-gradient(ellipse_at_20%_40%,rgba(30,41,59,0.22),transparent_60%)]
          "
        />

        {/* Applications (Orbital Zone): Vibrant center purple illumination */}
        <div
          className="
            absolute
            left-0
            top-[2650px]
            h-[1100px]
            w-full
            bg-[radial-gradient(ellipse_at_50%_45%,rgba(168,85,247,0.075),transparent_55%)]
          "
        />

        {/* Features: Deep industrial background with left purple accent */}
        <div
          className="
            absolute
            left-0
            top-[3450px]
            h-[950px]
            w-full
            bg-[radial-gradient(ellipse_at_25%_40%,rgba(124,58,237,0.055),transparent_60%)]
          "
        />

        {/* Engineered Value: Warm subtle orange energy transition */}
        <div
          className="
            absolute
            right-0
            top-[4150px]
            h-[850px]
            w-full
            bg-[radial-gradient(ellipse_at_75%_45%,rgba(249,115,22,0.045),transparent_60%)]
          "
        />

        {/* Closing Conversion Banner (CTA): Purple & Orange convergence */}
        <div
          className="
            absolute
            left-0
            bottom-0
            h-[950px]
            w-full
            bg-[radial-gradient(ellipse_at_25%_60%,rgba(168,85,247,0.075),transparent_60%),radial-gradient(ellipse_at_80%_65%,rgba(249,115,22,0.055),transparent_55%)]
          "
        />

        {/* Continuous Full-Canvas Flowing Electric Wave */}
        <svg
          className="
            absolute
            inset-0
            h-full
            w-full
            opacity-90
          "
          viewBox="0 0 1440 5200"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="hvEnergyGradMain"
              x1="0"
              y1="0"
              x2="0"
              y2="5200"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.45" />
              <stop offset="7%" stopColor="#C084FC" stopOpacity="0.95" />
              <stop offset="14%" stopColor="#E879F9" stopOpacity="0.85" />
              <stop offset="22%" stopColor="#F97316" stopOpacity="0.90" />
              <stop offset="32%" stopColor="#A855F7" stopOpacity="0.80" />
              <stop offset="44%" stopColor="#C084FC" stopOpacity="0.70" />
              <stop offset="56%" stopColor="#A855F7" stopOpacity="0.85" />
              <stop offset="68%" stopColor="#EC4899" stopOpacity="0.75" />
              <stop offset="80%" stopColor="#F97316" stopOpacity="0.90" />
              <stop offset="90%" stopColor="#C084FC" stopOpacity="0.80" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.45" />
            </linearGradient>

            <linearGradient
              id="hvEnergyGradHarmonic"
              x1="0"
              y1="0"
              x2="0"
              y2="5200"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.3" />
              <stop offset="18%" stopColor="#A855F7" stopOpacity="0.5" />
              <stop offset="42%" stopColor="#F97316" stopOpacity="0.45" />
              <stop offset="68%" stopColor="#A855F7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0.3" />
            </linearGradient>

            <filter id="energyGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer Glow Path */}
          <path
            d="
              M -40 380
              C 280 340, 520 220, 840 240
              C 1120 260, 1340 180, 1480 230
              C 1360 680, 1240 880, 1080 960
              C 880 1060, 580 1160, 280 1380
              C -20 1600, 120 1860, 480 1940
              C 860 2020, 1240 1960, 1480 2100
              C 1340 2520, 1060 2800, 720 2980
              C 380 3160, 120 3260, -40 3440
              C 180 3720, 620 3880, 960 4040
              C 1280 4200, 1420 4440, 1480 4600
              C 1320 4840, 980 5000, 720 5140
            "
            stroke="url(#hvEnergyGradMain)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeOpacity="0.45"
            filter="url(#energyGlow)"
          />

          {/* Primary Trace */}
          <path
            d="
              M -40 380
              C 280 340, 520 220, 840 240
              C 1120 260, 1340 180, 1480 230
              C 1360 680, 1240 880, 1080 960
              C 880 1060, 580 1160, 280 1380
              C -20 1600, 120 1860, 480 1940
              C 860 2020, 1240 1960, 1480 2100
              C 1340 2520, 1060 2800, 720 2980
              C 380 3160, 120 3260, -40 3440
              C 180 3720, 620 3880, 960 4040
              C 1280 4200, 1420 4440, 1480 4600
              C 1320 4840, 980 5000, 720 5140
            "
            stroke="url(#hvEnergyGradMain)"
            strokeWidth="2.0"
            strokeLinecap="round"
            strokeOpacity="0.95"
          />

          {/* Harmonic Dashed Resonance Trace */}
          <path
            d="
              M -40 410
              C 260 380, 500 250, 820 265
              C 1100 280, 1320 210, 1480 255
              C 1340 710, 1210 910, 1050 985
              C 850 1080, 560 1190, 250 1410
              C -40 1630, 100 1890, 450 1970
              C 830 2050, 1210 1990, 1480 2130
              C 1320 2550, 1030 2830, 690 3010
              C 350 3190, 90 3290, -40 3470
              C 150 3750, 590 3910, 930 4070
              C 1250 4230, 1390 4470, 1480 4630
              C 1290 4870, 950 5030, 700 5160
            "
            stroke="url(#hvEnergyGradHarmonic)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="4 8"
            strokeOpacity="0.40"
          />
        </svg>
      </div>

      {/* ==========================================================
          2. MOBILE ATMOSPHERIC & ELECTRIC CURRENT SYSTEM (< lg)
          ========================================================== */}
      <div className="block lg:hidden">
        <div
          className="
            absolute
            left-0
            top-0
            h-[1000px]
            w-full
            bg-[radial-gradient(ellipse_120%_80%_at_75%_25%,rgba(168,85,247,0.085),transparent_70%)]
          "
        />

        <div
          className="
            absolute
            left-0
            top-[600px]
            h-[900px]
            w-full
            bg-[radial-gradient(ellipse_110%_75%_at_50%_45%,rgba(124,58,237,0.075),transparent_65%)]
          "
        />

        <div
          className="
            absolute
            left-0
            top-[1400px]
            h-[1000px]
            w-full
            bg-[radial-gradient(ellipse_120%_80%_at_30%_50%,rgba(168,85,247,0.065),transparent_68%)]
          "
        />

        <div
          className="
            absolute
            left-0
            top-[2400px]
            h-[1100px]
            w-full
            bg-[radial-gradient(ellipse_120%_80%_at_70%_45%,rgba(124,58,237,0.060),transparent_65%)]
          "
        />

        <div
          className="
            absolute
            left-0
            bottom-0
            h-[1200px]
            w-full
            bg-[radial-gradient(ellipse_110%_70%_at_40%_70%,rgba(168,85,247,0.080),transparent_65%),radial-gradient(ellipse_90%_60%_at_75%_85%,rgba(249,115,22,0.050),transparent_55%)]
          "
        />

        {/* Mobile Electric Current Line */}
        <svg
          className="
            absolute
            inset-0
            h-full
            w-full
            opacity-90
          "
          viewBox="0 0 400 5400"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="hvEnergyGradMobile"
              x1="0"
              y1="0"
              x2="0"
              y2="5400"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4" />
              <stop offset="7%" stopColor="#C084FC" stopOpacity="0.90" />
              <stop offset="14%" stopColor="#E879F9" stopOpacity="0.85" />
              <stop offset="22%" stopColor="#F97316" stopOpacity="0.90" />
              <stop offset="32%" stopColor="#A855F7" stopOpacity="0.80" />
              <stop offset="46%" stopColor="#C084FC" stopOpacity="0.70" />
              <stop offset="60%" stopColor="#A855F7" stopOpacity="0.85" />
              <stop offset="74%" stopColor="#EC4899" stopOpacity="0.75" />
              <stop offset="86%" stopColor="#F97316" stopOpacity="0.90" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.4" />
            </linearGradient>

            <filter id="energyGlowMobile" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Layer 1: Glow */}
          <path
            d="
              M 410 120
              C 410 260, 390 400, 380 500
              C 370 620, 260 720, 160 770
              C 60 820, -20 880, 20 980
              C 60 1070, 240 1140, 380 1230
              C 420 1410, 320 1600, 180 1690
              C 40 1780, -30 1880, 20 1990
              C 80 2140, 280 2300, 380 2500
              C 420 2640, 360 2810, 240 2960
              C 120 3100, -20 3270, 40 3460
              C 100 3650, 280 3800, 380 3980
              C 420 4170, 340 4500, 180 4780
              C 20 5050, 80 5270, 200 5380
            "
            stroke="url(#hvEnergyGradMobile)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeOpacity="0.40"
            filter="url(#energyGlowMobile)"
          />

          {/* Layer 2: Core Trace */}
          <path
            d="
              M 410 120
              C 410 260, 390 400, 380 500
              C 370 620, 260 720, 160 770
              C 60 820, -20 880, 20 980
              C 60 1070, 240 1140, 380 1230
              C 420 1410, 320 1600, 180 1690
              C 40 1780, -30 1880, 20 1990
              C 80 2140, 280 2300, 380 2500
              C 420 2640, 360 2810, 240 2960
              C 120 3100, -20 3270, 40 3460
              C 100 3650, 280 3800, 380 3980
              C 420 4170, 340 4500, 180 4780
              C 20 5050, 80 5270, 200 5380
            "
            stroke="url(#hvEnergyGradMobile)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.95"
          />
        </svg>
      </div>
    </div>
  );
}
