import React from "react";

/* ================================================================
   HVTI TECHNICAL SCHEMATICS & VECTOR BACKGROUNDS
   File: components/products/ProductSchematics.tsx

   Subtle, precision vector engineering schematics and calibration
   graphics. Kept at very low opacity (0.04 - 0.08) as an atmospheric
   depth layer strictly behind the content.
   ================================================================ */

export interface SchematicProps {
  className?: string;
  opacity?: number;
}

/** High Voltage Test Circuit Schematic (used flanking tables / sections) */
export function HVTestCircuitSchematic({
  className = "w-[280px] h-[320px] text-[#A855F7]",
  opacity = 0.08,
}: SchematicProps) {
  return (
    <svg
      viewBox="0 0 280 320"
      fill="none"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Grid crosshair marks */}
      <path d="M10 10h10M10 10v10M270 10h-10M270 10v10M10 310h10M10 310v-10M270 310h-10M270 310v-10" stroke="currentColor" strokeWidth="1" />

      {/* Control Regulator Unit Symbol */}
      <rect x="25" y="120" width="45" height="60" rx="3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M35 135h25M35 150h15M35 165h20" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="58" cy="150" r="2.5" stroke="currentColor" strokeWidth="1" />

      {/* Connection Line 1 */}
      <path d="M70 140h35v-20h20" stroke="currentColor" strokeWidth="1.2" />
      <path d="M70 160h35v20h20" stroke="currentColor" strokeWidth="1.2" />

      {/* Step-Up Test Transformer */}
      {/* Primary coil */}
      <path d="M125 110c5-5 5-15 0-20s-5-15 0-20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {/* Magnetic Core */}
      <path d="M135 60v80M139 60v80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
      {/* Secondary HV Coil */}
      <path d="M149 60c6 6 6 18 0 24s-6 18 0 24 6 18 0 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />

      {/* HV Output Bushing Tower */}
      <path d="M149 60v-30h60" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="209" cy="30" r="8" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="209" cy="30" r="14" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />

      {/* Insulator shed stack */}
      <path d="M209 44v140" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="209" cy="65" rx="22" ry="5" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="209" cy="90" rx="22" ry="5" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="209" cy="115" rx="22" ry="5" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="209" cy="140" rx="22" ry="5" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="209" cy="165" rx="22" ry="5" stroke="currentColor" strokeWidth="1" />

      {/* Transformer Base Tank */}
      <rect x="180" y="184" width="58" height="50" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="195" cy="240" r="4" stroke="currentColor" strokeWidth="1" />
      <circle cx="223" cy="240" r="4" stroke="currentColor" strokeWidth="1" />

      {/* Earth Ground Symbol */}
      <path d="M125 180v30h-40M85 210v15M77 225h16M80 229h10M83 233h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M209 234v15M201 249h16M204 253h10M207 257h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />

      {/* Technical Labels */}
      <text x="28" y="195" fill="currentColor" fontSize="7" fontFamily="monospace" letterSpacing="0.1em">CTRL-UNIT</text>
      <text x="110" y="50" fill="currentColor" fontSize="7" fontFamily="monospace" letterSpacing="0.1em">HV-TRANS</text>
      <text x="228" y="32" fill="currentColor" fontSize="7" fontFamily="monospace" letterSpacing="0.1em">CORONA-RING</text>
    </svg>
  );
}

/** High Voltage Bushing & Insulator Stack Vector */
export function HVBushingSchematic({
  className = "w-[240px] h-[320px] text-[#A855F7]",
  opacity = 0.08,
}: SchematicProps) {
  return (
    <svg
      viewBox="0 0 240 320"
      fill="none"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Top Corona Toroid Ring */}
      <ellipse cx="120" cy="35" rx="42" ry="12" stroke="currentColor" strokeWidth="1.5" />
      <ellipse cx="120" cy="35" rx="26" ry="7" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="120" cy="35" r="4" fill="currentColor" opacity="0.5" />

      {/* Conductor Rod */}
      <path d="M120 47v200" stroke="currentColor" strokeWidth="1.8" />

      {/* Precision Ceramic Sheds */}
      {[70, 95, 120, 145, 170, 195, 220].map((y, idx) => (
        <g key={y}>
          <path
            d={`M${80 - idx * 2} ${y} Q 120 ${y - 6} ${160 + idx * 2} ${y} L ${154 + idx * 2} ${y + 8} Q 120 ${y + 2} ${86 - idx * 2} ${y + 8} Z`}
            stroke="currentColor"
            strokeWidth="1"
          />
        </g>
      ))}

      {/* Mounting Flange & Current Transformer Housing */}
      <rect x="75" y="247" width="90" height="24" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M65 247h110M65 271h110" stroke="currentColor" strokeWidth="1" />
      <circle cx="85" cy="259" r="2" fill="currentColor" />
      <circle cx="155" cy="259" r="2" fill="currentColor" />

      {/* Lower immersion end */}
      <path d="M95 271v35h50v-35" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />

      {/* Calibration markers */}
      <path d="M25 80h15M25 140h15M25 200h15" stroke="currentColor" strokeWidth="0.8" />
      <text x="5" y="83" fill="currentColor" fontSize="6" fontFamily="monospace">KV 300</text>
      <text x="5" y="143" fill="currentColor" fontSize="6" fontFamily="monospace">KV 150</text>
      <text x="5" y="203" fill="currentColor" fontSize="6" fontFamily="monospace">GND 00</text>
    </svg>
  );
}

/** Orbital Energy Rings (Background for Applications / Hero) */
export function OrbitalEnergyRings({
  className = "w-full h-full text-[#A855F7]",
  opacity = 0.12,
}: SchematicProps) {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="schemOrbGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4" />
          <stop offset="60%" stopColor="#A855F7" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient center radial glow */}
      <ellipse cx="400" cy="225" rx="340" ry="170" fill="url(#schemOrbGlow)" />

      {/* Primary Orbital Ellipse */}
      <ellipse cx="400" cy="225" rx="320" ry="140" stroke="#A855F7" strokeWidth="1.4" strokeDasharray="5 5" />
      <ellipse cx="400" cy="225" rx="320" ry="140" stroke="#F97316" strokeWidth="1.2" strokeOpacity="0.5" />

      {/* Outer Harmonic Ellipse */}
      <ellipse cx="400" cy="225" rx="370" ry="175" stroke="#A855F7" strokeWidth="0.8" strokeDasharray="3 7" strokeOpacity="0.6" />

      {/* Inner Resonance Ellipse */}
      <ellipse cx="400" cy="225" rx="160" ry="75" stroke="#C084FC" strokeWidth="1" strokeOpacity="0.7" />

      {/* Crosshair coordinate axes */}
      <path d="M400 25v400M50 225h700" stroke="#A855F7" strokeWidth="0.8" strokeDasharray="2 6" strokeOpacity="0.4" />

      {/* Cardinal orbital calibration ticks */}
      <circle cx="400" cy="85" r="3" fill="#F97316" />
      <circle cx="400" cy="365" r="3" fill="#F97316" />
      <circle cx="80" cy="225" r="3" fill="#A855F7" />
      <circle cx="720" cy="225" r="3" fill="#A855F7" />
    </svg>
  );
}
