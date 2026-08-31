/* ================================================================
   HVTI PRODUCT PAGE SYSTEM — TYPE DEFINITIONS
   File: types/product.ts

   Strongly typed, extensible product schema supporting any HVTI product.
   All sections below the Hero are optional.
   ================================================================ */

/** Single technical metric or glance item */
export interface ProductMetric {
  id?: string;
  icon?: string;          // Identifier for ProductIcons (e.g., "voltage", "frequency", "current", "power", "control", "pd", "testing")
  code?: string;          // Short technical code (e.g., "VOLT", "FREQ", "CURR")
  label?: string;         // Metric label (e.g., "OUTPUT VOLTAGE", "FREQUENCY")
  value: string;          // Formatted value (e.g., "25 – 300 kV AC", "50 / 60 Hz")
  description?: string;   // Supporting description (e.g., "Wide voltage range for diverse testing needs")
  subtext?: string;       // Secondary note (e.g., "Adjustable", "Power Frequency")
  highlighted?: boolean;  // Optional flag for center / hero emphasis
}

/** 3-column technical specification row */
export interface ProductSpecRow {
  parameter: string;      // e.g., "Output Voltage (AC)"
  details?: string;       // e.g., "Adjustable"
  range?: string;         // e.g., "25 kV – 300 kV"
  value?: string;         // Fallback single value
}

/** Application item */
export interface ProductApplication {
  id?: string;
  title: string;          // e.g., "Motors", "Generators", "Switchgears"
  icon?: string;          // e.g., "motor", "generator", "switchgear", "cable", "transformer"
  description?: string;   // Optional context
  isCenter?: boolean;     // Optional hint for orbital/radial layout
}

/** Editorial feature item */
export interface ProductFeature {
  title: string;          // e.g., "Automated & Manual Control"
  description: string;    // Clear technical description
  code?: string;          // Optional custom code/numbering override
}

/** Engineered value / benefit proposition */
export interface ProductBenefit {
  id?: string;
  icon?: string;          // e.g., "shield", "gear", "briefcase"
  title: string;          // e.g., "Reliable High-Voltage Testing"
  description: string;    // Value narrative
}

/** CTA and document conversion configuration */
export interface ProductCTAData {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  brochureUrl?: string;
  brochureText?: string;
  supportingImage?: string; // Optional real asset path (never mandatory)
}

/** Interactive voltage detector / safety simulator configuration */
export interface ProductSafetySimulatorConfig {
  enabled: boolean;
  type?: "stick" | "proximity"; // "stick" for TP-S9 telescopic stick, "proximity" for HMD walking avatar
  title?: string;
  subtitle?: string;
  badge?: string;
  description?: string;
  productModel?: string;
  defaultVoltage?: number;
  voltageOptions?: {
    label: string;
    value: number;
    unit: string;
    category: string;
    description?: string;
    warningDistanceMeters?: number; // Distance in meters at which alarm triggers
  }[];
}

/** Complete product schema */
export interface ProductData {
  slug: string;
  title: string;
  category: string;
  description: string;
  overview?: string;
  highlights?: string[];               // Hero checkmarks (variable count: 2, 3, 4, etc.)
  modelUrl?: string;                   // 3D GLB model path (e.g., "/models/hv-ac-testing-kit.glb")
  renderType?: "3d" | "image" | "none";
  image?: string;                      // Optional primary product image

  // Optional Data-Driven Sections:
  engineeringAtAGlance?: ProductMetric[];
  metrics?: ProductMetric[];
  atAGlance?: ProductMetric[];
  specificationsTable?: ProductSpecRow[];
  specifications?: { parameter: string; value: string }[];
  specImage?: string;                  // Optional real hardware preview photo
  applications?: (string | ProductApplication)[];
  features?: ProductFeature[];
  benefits?: ProductBenefit[];
  safetySimulator?: ProductSafetySimulatorConfig; // Interactive safety / voltage verification simulator
  brochure?: string;
  cta?: ProductCTAData;
}

