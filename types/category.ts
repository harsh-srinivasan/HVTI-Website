/* ================================================================
   HVTI PRODUCT CATEGORY & VIEW-ALL SYSTEM — TYPE DEFINITIONS
   File: types/category.ts
   ================================================================ */

export interface ProductFeatureItem {
  title: string;
  description: string;
}

export interface CategoryProduct {
  id: string;
  slug?: string;              // Optional slug if full interactive product detail page exists
  title: string;
  subtitle?: string;
  description: string;        // Full technical overview
  shortDescription?: string;  // Concise summary
  features: ProductFeatureItem[]; // 3 distinct engineered capability rows
  button?: string;            // Button text (e.g. "View Product", "Explore Specifications")
  image: string;              // Path to authentic product render/photography
  badge?: string;             // e.g., "25 – 300 kV AC", "Up to 800 kV", "Online Diagnostics"
  categorySlug: string;
  categoryTitle: string;
  specHighlights?: string[];  // 2-3 key technical highlights
  isAvailable?: boolean;      // True if active in HVTI production
}

export interface CategoryStat {
  value: string;
  label: string;
}

export interface CategoryData {
  slug: string;               // e.g. "electrical-testing-equipment"
  title: string;              // e.g. "Electrical Testing Equipment"
  eyebrow: string;            // e.g. "DIELECTRIC, IMPULSE & HIPOT TESTING"
  tagline: string;            // Short punchy headline
  description: string;        // Full category overview paragraph
  heroImage?: string;         // Featured high-res category preview image
  stats?: CategoryStat[];
  products: CategoryProduct[];
}
