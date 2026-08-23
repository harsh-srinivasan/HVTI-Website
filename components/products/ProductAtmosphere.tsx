"use client";

/* ================================================================
   PRODUCT ATMOSPHERE
   File: components/products/ProductAtmosphere.tsx

   Unified continuous atmospheric background system & flowing
   high-voltage electric current line.

   - Desktop (>= lg): Established studio lighting + continuous electric wave (100% preserved)
   - Mobile (< lg): Deep studio atmosphere + intentional negative-space electric current line
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
          01. DESKTOP ATMOSPHERIC BACKGROUND SYSTEM (>= lg)
          100% PRESERVED EXACTLY AS ESTABLISHED
          ========================================================== */}

      <div className="hidden lg:block">
        {/* Hero / Top Zone: Deep luminous purple ambient field */}
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

        {/* Hero / Overview Transition: Warm subtle orange bounce */}
        <div
          className="
            absolute
            right-0
            top-[480px]
            h-[850px]
            w-[75%]
            bg-[radial-gradient(ellipse_at_85%_40%,rgba(249,115,22,0.045),transparent_55%)]
          "
        />

        {/* Overview / Engineering Glance: Luminous purple technical light */}
        <div
          className="
            absolute
            left-0
            top-[1050px]
            h-[950px]
            w-full
            bg-[radial-gradient(ellipse_at_80%_30%,rgba(168,85,247,0.065),transparent_55%)]
          "
        />

        <div
          className="
            absolute
            left-0
            top-[1450px]
            h-[750px]
            w-full
            bg-[radial-gradient(ellipse_at_50%_40%,rgba(124,58,237,0.055),transparent_60%)]
          "
        />

        {/* Technical Specifications: Deep, calm cool slate / indigo zone */}
        <div
          className="
            absolute
            left-0
            top-[1950px]
            h-[950px]
            w-full
            bg-[radial-gradient(ellipse_at_20%_40%,rgba(30,41,59,0.22),transparent_60%)]
          "
        />

        {/* Applications + Features: Vibrant purple engineering light on left */}
        <div
          className="
            absolute
            left-0
            top-[2700px]
            h-[1100px]
            w-full
            bg-[radial-gradient(ellipse_at_25%_40%,rgba(168,85,247,0.065),transparent_55%)]
          "
        />

        {/* Benefits: Warm subtle orange accent */}
        <div
          className="
            absolute
            right-0
            top-[3550px]
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

        {/* Desktop Continuous Energy Wave */}
        <svg
          className="
            absolute
            inset-0
            h-full
            w-full
            opacity-90
          "
          viewBox="0 0 1440 4600"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="hvEnergyGradMain"
              x1="0"
              y1="0"
              x2="0"
              y2="4600"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.5" />
              <stop offset="8%" stopColor="#C084FC" stopOpacity="0.95" />
              <stop offset="16%" stopColor="#E879F9" stopOpacity="0.85" />
              <stop offset="24%" stopColor="#F97316" stopOpacity="0.90" />
              <stop offset="34%" stopColor="#A855F7" stopOpacity="0.80" />
              <stop offset="48%" stopColor="#C084FC" stopOpacity="0.65" />
              <stop offset="60%" stopColor="#A855F7" stopOpacity="0.85" />
              <stop offset="72%" stopColor="#EC4899" stopOpacity="0.75" />
              <stop offset="82%" stopColor="#F97316" stopOpacity="0.90" />
              <stop offset="92%" stopColor="#C084FC" stopOpacity="0.80" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.4" />
            </linearGradient>

            <linearGradient
              id="hvEnergyGradHarmonic"
              x1="0"
              y1="0"
              x2="0"
              y2="4600"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#C084FC" stopOpacity="0.3" />
              <stop offset="20%" stopColor="#A855F7" stopOpacity="0.5" />
              <stop offset="45%" stopColor="#F97316" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#A855F7" stopOpacity="0.5" />
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

          {/* Outer Glow */}
          <path
            d="
              M -40 380
              C 280 340, 520 220, 840 240
              C 1120 260, 1340 180, 1480 230
              C 1360 620, 1240 820, 1080 890
              C 880 980, 580 1080, 280 1280
              C -20 1480, 120 1720, 480 1780
              C 860 1840, 1240 1760, 1480 1880
              C 1340 2260, 1060 2520, 720 2680
              C 380 2840, 120 2920, -40 3080
              C 180 3340, 620 3480, 960 3620
              C 1280 3760, 1420 3980, 1480 4120
              C 1320 4340, 980 4480, 720 4580
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
              C 1360 620, 1240 820, 1080 890
              C 880 980, 580 1080, 280 1280
              C -20 1480, 120 1720, 480 1780
              C 860 1840, 1240 1760, 1480 1880
              C 1340 2260, 1060 2520, 720 2680
              C 380 2840, 120 2920, -40 3080
              C 180 3340, 620 3480, 960 3620
              C 1280 3760, 1420 3980, 1480 4120
              C 1320 4340, 980 4480, 720 4580
            "
            stroke="url(#hvEnergyGradMain)"
            strokeWidth="2.0"
            strokeLinecap="round"
            strokeOpacity="0.95"
          />

          {/* Harmonic Trace */}
          <path
            d="
              M -40 410
              C 260 380, 500 250, 820 265
              C 1100 280, 1320 210, 1480 255
              C 1340 650, 1210 850, 1050 915
              C 850 1000, 560 1110, 250 1310
              C -40 1510, 100 1750, 450 1810
              C 830 1870, 1210 1790, 1480 1910
              C 1320 2290, 1030 2550, 690 2710
              C 350 2870, 90 2950, -40 3110
              C 150 3370, 590 3510, 930 3650
              C 1250 3790, 1390 4010, 1480 4150
              C 1290 4370, 950 4510, 700 4600
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
          02. MOBILE ATMOSPHERIC & ELECTRIC CURRENT SYSTEM (< lg)
          Luminous energy line tailored through negative space
          ========================================================== */}

      <div className="block lg:hidden">
        {/* Mobile Ambient Light Fields (Surrounding depth) */}
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
            top-[500px]
            h-[900px]
            w-full
            bg-[radial-gradient(ellipse_110%_75%_at_50%_45%,rgba(124,58,237,0.075),transparent_65%)]
          "
        />

        <div
          className="
            absolute
            left-0
            top-[1200px]
            h-[1000px]
            w-full
            bg-[radial-gradient(ellipse_120%_80%_at_30%_50%,rgba(168,85,247,0.065),transparent_68%)]
          "
        />

        <div
          className="
            absolute
            left-0
            top-[2200px]
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

        {/* Mobile Luminous Electric Current Wave */}
        <svg
          className="
            absolute
            inset-0
            h-full
            w-full
            opacity-90
          "
          viewBox="0 0 400 4900"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="hvEnergyGradMobile"
              x1="0"
              y1="0"
              x2="0"
              y2="4900"
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

          {/* Layer 1: Mobile Outer Glow (4.5px soft blur) */}
          <path
            d="
              M 410 120
              C 410 260, 390 400, 380 500
              C 370 620, 260 700, 160 740
              C 60 780, -20 830, 20 920
              C 60 1000, 240 1060, 380 1140
              C 420 1300, 320 1480, 180 1560
              C 40 1640, -30 1720, 20 1820
              C 80 1960, 280 2100, 380 2280
              C 420 2400, 360 2550, 240 2680
              C 120 2800, -20 2950, 40 3120
              C 100 3290, 280 3420, 380 3580
              C 420 3750, 340 4050, 180 4300
              C 20 4550, 80 4750, 200 4850
            "
            stroke="url(#hvEnergyGradMobile)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeOpacity="0.40"
            filter="url(#energyGlowMobile)"
          />

          {/* Layer 2: Mobile Primary Electric Trace (1.8px core stroke) */}
          <path
            d="
              M 410 120
              C 410 260, 390 400, 380 500
              C 370 620, 260 700, 160 740
              C 60 780, -20 830, 20 920
              C 60 1000, 240 1060, 380 1140
              C 420 1300, 320 1480, 180 1560
              C 40 1640, -30 1720, 20 1820
              C 80 1960, 280 2100, 380 2280
              C 420 2400, 360 2550, 240 2680
              C 120 2800, -20 2950, 40 3120
              C 100 3290, 280 3420, 380 3580
              C 420 3750, 340 4050, 180 4300
              C 20 4550, 80 4750, 200 4850
            "
            stroke="url(#hvEnergyGradMobile)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.95"
          />

          {/* Layer 3: Mobile Harmonic Resonance (1.0px dashed trace) */}
          <path
            d="
              M 410 140
              C 410 280, 375 410, 365 510
              C 355 630, 245 710, 145 750
              C 45 790, -30 840, 10 930
              C 50 1010, 230 1070, 370 1150
              C 410 1310, 310 1490, 170 1570
              C 30 1650, -40 1730, 10 1830
              C 70 1970, 270 2110, 370 2290
              C 410 2410, 350 2560, 230 2690
              C 110 2810, -30 2960, 30 3130
              C 90 3300, 270 3430, 370 3590
              C 410 3760, 330 4060, 170 4310
              C 10 4560, 70 4760, 190 4860
            "
            stroke="url(#hvEnergyGradMobile)"
            strokeWidth="1.0"
            strokeLinecap="round"
            strokeDasharray="3 6"
            strokeOpacity="0.30"
          />
        </svg>
      </div>
    </div>
  );
}
