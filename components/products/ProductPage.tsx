"use client";

import { ProductData } from "@/types/product";
import ProductAtmosphere from "./ProductAtmosphere";
import ProductHero from "./ProductHero";
import ProductEngineeringAtAGlance from "./ProductEngineeringAtAGlance";
import ProductSpecifications from "./ProductSpecifications";
import ProductApplications from "./ProductApplications";
import ProductFeatures from "./ProductFeatures";
import ProductBenefits from "./ProductBenefits";
import ProductSafetySimulator from "./ProductSafetySimulator";
import ProductCTA from "./ProductCTA";

/* ================================================================
   HVTI PRODUCT PAGE SYSTEM — PIPELINE ORCHESTRATOR
   File: components/products/ProductPage.tsx

   Data-driven, reusable product page pipeline.
   Every section below the Hero is conditionally rendered based on
   actual product data.
   ================================================================ */

export default function ProductPage({
  product,
}: {
  product: ProductData;
}) {
  return (
    <main className="relative w-full overflow-hidden bg-[#05070D] text-white">
      {/* ==========================================================
          CONTINUOUS ATMOSPHERIC BACKGROUND SYSTEM
          ========================================================== */}
      <ProductAtmosphere />

      {/* ==========================================================
          DYNAMIC SECTION PIPELINE
          ========================================================== */}
      <div className="relative z-10 w-full">
        {/* 01 — HERO (Always rendered) */}
        <ProductHero product={product} />

        {/* 02 — ENGINEERING AT A GLANCE (Render only if data exists) */}
        {product.engineeringAtAGlance && product.engineeringAtAGlance.length > 0 && (
          <ProductEngineeringAtAGlance items={product.engineeringAtAGlance} />
        )}

        {/* 03 — TECHNICAL SPECIFICATIONS & METRICS (Render only if data exists) */}
        {((product.specificationsTable && product.specificationsTable.length > 0) ||
          (product.metrics && product.metrics.length > 0) ||
          (product.specifications && product.specifications.length > 0)) && (
          <ProductSpecifications product={product} />
        )}

        {/* 04 — APPLICATIONS (Render only if data exists) */}
        {product.applications && product.applications.length > 0 && (
          <ProductApplications applications={product.applications} />
        )}

        {/* 05 — FEATURES (Render only if data exists) */}
        {product.features && product.features.length > 0 && (
          <ProductFeatures features={product.features} />
        )}

        {/* 06 — ENGINEERED VALUE / BENEFITS (Render only if data exists) */}
        {product.benefits && product.benefits.length > 0 && (
          <ProductBenefits benefits={product.benefits} />
        )}

        {/* 07 — INTERACTIVE SAFETY / VOLTAGE SIMULATOR (Render only if configured) */}
        {product.safetySimulator?.enabled && (
          <ProductSafetySimulator product={product} />
        )}

        {/* 08 — FINAL CTA / CONVERSION */}
        <ProductCTA product={product} />
      </div>
    </main>
  );
}