import React from "react";

/* ================================================================
   HVTI TECHNICAL LINE-ART ICON SYSTEM
   File: components/products/ProductIcons.tsx

   Engineering-grade geometric SVG line icons with consistent
   1.5 - 1.8 stroke weights, designed for dark industrial canvases.
   ================================================================ */

export interface IconProps {
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}

/* ================================================================
   1. APPLICATION & APPARATUS ICONS
   ================================================================ */

/** Industrial Electric Motor */
export function MotorIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="10" y="16" width="24" height="20" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M15 16v20M20 16v20M25 16v20M29 16v20" stroke="currentColor" strokeWidth={strokeWidth - 0.2} strokeOpacity="0.8" />
      <rect x="17" y="11" width="10" height="5" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="34" y="19" width="4" height="14" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="38" y="23" width="6" height="6" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="6" y="18" width="4" height="16" rx="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 36v5h8v-5M26 36v5h8v-5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Electrical Generator */
export function GeneratorIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="24" cy="24" r="13.5" stroke="currentColor" strokeWidth={strokeWidth - 0.4} strokeDasharray="2.5 2.5" strokeOpacity="0.6" />
      <circle cx="24" cy="24" r="6.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M20 24c1.2-2.5 2.4-2.5 4 0s2.8 2.5 4 0" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M24 7v3M24 38v3M7 24h3M38 24h3" stroke="currentColor" strokeWidth={strokeWidth + 0.2} strokeLinecap="round" />
      <rect x="21" y="3" width="6" height="4" rx="0.8" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M14 42h20M18 39v3M30 39v3" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

/** High-Voltage Switchgear Cabinet */
export function SwitchgearIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="11" y="6" width="26" height="36" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M11 17h26" stroke="currentColor" strokeWidth={strokeWidth - 0.2} />
      <rect x="15" y="9" width="10" height="5" rx="0.8" stroke="currentColor" strokeWidth={strokeWidth - 0.3} />
      <circle cx="29" cy="11.5" r="1" fill="currentColor" />
      <circle cx="33" cy="11.5" r="1" fill="currentColor" />
      <path d="M11 30h26" stroke="currentColor" strokeWidth={strokeWidth - 0.2} />
      <circle cx="19" cy="23.5" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="29" cy="23.5" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M20.5 23.5l7-3.5" stroke="currentColor" strokeWidth={strokeWidth + 0.2} strokeLinecap="round" />
      <path d="M16 36h16M20 33v5M24 33v5M28 33v5" stroke="currentColor" strokeWidth={strokeWidth - 0.3} strokeLinecap="round" />
      <path d="M9 42h30" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

/** Multi-Layer High-Voltage Cable */
export function CableIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="5" y="15" width="13" height="18" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M9 15v18M14 15v18" stroke="currentColor" strokeWidth={strokeWidth - 0.3} strokeOpacity="0.75" />
      <rect x="18" y="17.5" width="9" height="13" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M22.5 17.5v13" stroke="currentColor" strokeWidth={strokeWidth - 0.4} strokeDasharray="1.5 1.5" />
      <rect x="27" y="20" width="8" height="8" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
      <rect x="35" y="22" width="7" height="4" rx="0.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M42 23h3M42 24.5h3.5M42 26h3" stroke="currentColor" strokeWidth={strokeWidth - 0.2} strokeLinecap="round" />
      <circle cx="41" cy="11" r="4.5" stroke="currentColor" strokeWidth={strokeWidth - 0.4} />
      <circle cx="41" cy="11" r="2.5" stroke="currentColor" strokeWidth={strokeWidth - 0.6} strokeDasharray="1.5 1.5" />
      <circle cx="41" cy="11" r="1" fill="currentColor" />
    </svg>
  );
}

/** High-Voltage Transformer */
export function TransformerIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="17.5" cy="27" r="8.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="30.5" cy="27" r="8.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M9 18h30M9 36h30" stroke="currentColor" strokeWidth={strokeWidth - 0.2} strokeLinecap="round" />
      <path d="M24 16v22" stroke="currentColor" strokeWidth={strokeWidth - 0.4} strokeDasharray="2 2" strokeOpacity="0.7" />
      <path d="M17.5 9v9M30.5 9v9" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M14.5 13h6M27.5 13h6" stroke="currentColor" strokeWidth={strokeWidth - 0.3} strokeLinecap="round" />
      <circle cx="17.5" cy="7" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <circle cx="30.5" cy="7" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 41h24M16 38v3M32 38v3" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

/** Substation & High Voltage Installation */
export function SubstationFieldIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 4L14 44M24 4L34 44" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M11 16h26M8 26h32M13 36h22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M16 16l8 10 8-10M13 26l11 10 11-10" stroke="currentColor" strokeWidth={strokeWidth - 0.3} strokeLinecap="round" />
      <circle cx="24" cy="4" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M5 44h38" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

/** Electrical Maintenance & Inspection */
export function MaintenanceWrenchIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M37 15a8 8 0 0 0-10.8-1.2L22 18l8 8 4.2-4.2A8 8 0 0 0 37 15z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 18L9 31a4 4 0 0 0 5.6 5.6L28 24"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="34" r="1.5" fill="currentColor" />
    </svg>
  );
}

/* ================================================================
   2. TECHNICAL SENSORS, DETECTION & METRICS ICONS
   ================================================================ */

/** High Voltage / Lightning */
export function VoltageIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M26 6L12 26h12l-2 16L36 22H24l2-16Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Capacitive Sensor Detector / Probe */
export function SensorIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 6v10M20 16h8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="24" cy="6" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M16 22h16v18a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V22z" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M20 28h8M20 34h8" stroke="currentColor" strokeWidth={strokeWidth - 0.3} strokeLinecap="round" />
      <path d="M12 12a14 14 0 0 1 24 0" stroke="currentColor" strokeWidth={strokeWidth - 0.4} strokeDasharray="2 3" />
      <path d="M8 8a20 20 0 0 1 32 0" stroke="currentColor" strokeWidth={strokeWidth - 0.4} strokeDasharray="3 3" />
    </svg>
  );
}

/** Audible & Visual Signal Indication */
export function SignalLightAudioIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Light Beacon / Flash */}
      <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M24 8v5M24 35v5M8 24h5M35 24h5" stroke="currentColor" strokeWidth={strokeWidth + 0.2} strokeLinecap="round" />
      <path d="M13 13l4 4M31 31l4 4M13 35l4-4M31 17l4-4" stroke="currentColor" strokeWidth={strokeWidth - 0.2} strokeLinecap="round" />
      {/* Audio Sound Waves */}
      <path d="M38 16a12 12 0 0 1 0 16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M10 16a12 12 0 0 0 0 16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

/** Automatic Inbuilt Self-Check / Proving Unit */
export function CheckProvingIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M16 24l5 5 11-11" stroke="currentColor" strokeWidth={strokeWidth + 0.4} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 7a17 17 0 0 1 17 17" stroke="currentColor" strokeWidth={strokeWidth + 0.2} strokeDasharray="3 3" />
    </svg>
  );
}

/** Output Frequency / Sine Wave */
export function FrequencyIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 24h6c3-14 6-14 9 0s6 14 9 0 6-14 9 0h3"
        stroke="currentColor"
        strokeWidth={strokeWidth + 0.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 24h36"
        stroke="currentColor"
        strokeWidth={strokeWidth - 0.6}
        strokeDasharray="2 3"
        strokeOpacity="0.4"
      />
    </svg>
  );
}

/** Output Current / Ammeter Gauge */
export function CurrentIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12 28a13 13 0 0 1 24 0" stroke="currentColor" strokeWidth={strokeWidth - 0.4} strokeDasharray="3 3" strokeOpacity="0.7" />
      <circle cx="24" cy="28" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M24 28l7-10" stroke="currentColor" strokeWidth={strokeWidth + 0.2} strokeLinecap="round" />
      <path d="M15 15h3M30 15h3M24 11v3" stroke="currentColor" strokeWidth={strokeWidth - 0.3} strokeLinecap="round" />
    </svg>
  );
}

/** Output Power / kVA */
export function PowerIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth={strokeWidth} />
      <path
        d="M25 12L17 25h8l-1 11 9-13h-8l1-11Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Sliders / Automated & Manual Control */
export function SlidersIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 14h18M32 14h8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="29" cy="14" r="3.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 24h8M22 24h18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="19" cy="24" r="3.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 34h22M36 34h4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx="33" cy="34" r="3.5" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

/** Shield / Safety / Protection */
export function ShieldIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 6L40 13V24C40 33 33 39.5 24 43C15 39.5 8 33 8 24V13L24 6Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 24l4 4 8-8"
        stroke="currentColor"
        strokeWidth={strokeWidth + 0.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Briefcase / Field Ready / Durability */
export function BriefcaseIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="7" y="15" width="34" height="25" rx="3" stroke="currentColor" strokeWidth={strokeWidth} />
      <path
        d="M17 15v-4c0-1.6 1.4-3 3-3h8c1.6 0 3 1.4 3 3v4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path d="M24 24v4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M7 26h34" stroke="currentColor" strokeWidth={strokeWidth - 0.4} strokeLinecap="round" strokeDasharray="2 3" />
    </svg>
  );
}

/** Gear / Flexible Configurations */
export function GearIcon({ className = "h-8 w-8 text-current", size, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth={strokeWidth} />
      <path
        d="M38.8 30a3.3 3.3 0 0 0 .66 3.64l.12.12a4 4 0 0 1-5.66 5.66l-.12-.12a3.3 3.3 0 0 0-3.64-.66 3.3 3.3 0 0 0-2 3.02V43a4 4 0 0 1-8 0v-1.18a3.3 3.3 0 0 0-2-3.02 3.3 3.3 0 0 0-3.64.66l-.12.12a4 4 0 0 1-5.66-5.66l.12-.12a3.3 3.3 0 0 0 .66-3.64 3.3 3.3 0 0 0-3.02-2H5a4 4 0 0 1 0-8h1.18a3.3 3.3 0 0 0 3.02-2 3.3 3.3 0 0 0-.66-3.64l-.12-.12a4 4 0 0 1 5.66-5.66l.12.12a3.3 3.3 0 0 0 3.64.66H20a3.3 3.3 0 0 0 2-3.02V5a4 4 0 0 1 8 0v1.18a3.3 3.3 0 0 0 2 3.02 3.3 3.3 0 0 0 3.64-.66l.12-.12a4 4 0 0 1 5.66 5.66l-.12.12a3.3 3.3 0 0 0-.66 3.64V20a3.3 3.3 0 0 0 3.02 2H43a4 4 0 0 1 0 8h-1.18a3.3 3.3 0 0 0-3.02 2z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ================================================================
   3. DYNAMIC ICON RESOLVER
   ================================================================ */

export function renderProductIcon(name?: string, props: IconProps = {}) {
  if (!name) return <VoltageIcon {...props} />;
  const normalized = name.toLowerCase().trim();

  // Applications & Apparatus
  if (normalized.includes("motor")) return <MotorIcon {...props} />;
  if (normalized.includes("generator")) return <GeneratorIcon {...props} />;
  if (normalized.includes("switchgear")) return <SwitchgearIcon {...props} />;
  if (normalized.includes("cable")) return <CableIcon {...props} />;
  if (normalized.includes("transformer")) return <TransformerIcon {...props} />;
  if (normalized.includes("substation") || normalized.includes("install")) return <SubstationFieldIcon {...props} />;
  if (normalized.includes("maint") || normalized.includes("inspect") || normalized.includes("wrench")) return <MaintenanceWrenchIcon {...props} />;

  // Detection & Sensors
  if (normalized.includes("sensor") || normalized.includes("capacitive") || normalized.includes("detect") || normalized.includes("probe")) return <SensorIcon {...props} />;
  if (normalized.includes("signal") || normalized.includes("audio") || normalized.includes("sound") || normalized.includes("light") || normalized.includes("indicat")) return <SignalLightAudioIcon {...props} />;
  if (normalized.includes("selftest") || normalized.includes("self") || normalized.includes("check") || normalized.includes("prov")) return <CheckProvingIcon {...props} />;

  // Metrics
  if (normalized.includes("volt") || normalized.includes("lightning") || normalized.includes("range")) return <VoltageIcon {...props} />;
  if (normalized.includes("freq") || normalized.includes("sine") || normalized.includes("hz")) return <FrequencyIcon {...props} />;
  if (normalized.includes("curr") || normalized.includes("amp") || normalized.includes("ma") || normalized.includes("gauge")) return <CurrentIcon {...props} />;
  if (normalized.includes("power") || normalized.includes("kva") || normalized.includes("watt")) return <PowerIcon {...props} />;

  // Features / Values
  if (normalized.includes("control") || normalized.includes("slider")) return <SlidersIcon {...props} />;
  if (normalized.includes("shield") || normalized.includes("pd") || normalized.includes("protect") || normalized.includes("safe") || normalized.includes("reliab")) return <ShieldIcon {...props} />;
  if (normalized.includes("briefcase") || normalized.includes("test") || normalized.includes("lab") || normalized.includes("field") || normalized.includes("durab") || normalized.includes("operat")) return <BriefcaseIcon {...props} />;
  if (normalized.includes("gear") || normalized.includes("flex") || normalized.includes("config")) return <GearIcon {...props} />;

  return <VoltageIcon {...props} />;
}
