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

import MultiProductHero from "./MultiProductHero";
import ProductRangeSelector from "./ProductRangeSelector";
import ComparisonMatrix from "./ComparisonMatrix";
import GasDetectionFeatures from "./GasDetectionFeatures";
import DedicatedConsultationCTA from "./DedicatedConsultationCTA";

/* ================================================================
   HVTI PRODUCT PAGE SYSTEM — PIPELINE ORCHESTRATOR
   File: components/products/ProductPage.tsx

   Data-driven, reusable product page pipeline.
   Supports both single-product engineering deep-dives and
   multi-product category comparison pages.
   ================================================================ */

export default function ProductPage({
  product,
}: {
  product: ProductData;
}) {
  const isMultiProduct =
    Boolean(product.rangeGroups?.length) ||
    Boolean(product.productVariants?.length) ||
    Boolean(product.comparisonMatrix);

  const isGasDetection = product.slug === "sat-v90-gas-detection-camera" || product.slug === "gas-detection-camera";

  if (isGasDetection) {
    return (
      <main className="relative min-h-screen w-full overflow-x-clip bg-[#05070D] text-white">
        <ProductAtmosphere />
        <div className="relative z-10 w-full">
          {/* 01 — HERO */}
          <MultiProductHero
            product={product}
            breadcrumbCategory="Cameras & Imaging"
            ctaText="Request a Quote"
            ctaLink="/contact?subject=SAT%20V90%20Gas%20Detection%20Camera%20Inquiry"
          />

          {/* 02 — ENGINEERING AT A GLANCE */}
          {product.engineeringAtAGlance && product.engineeringAtAGlance.length > 0 && (
            <ProductEngineeringAtAGlance items={product.engineeringAtAGlance} />
          )}

          {/* 03 — TECHNICAL SPECIFICATIONS (TPS9 3-COLUMN TABLE + HARDWARE PREVIEW) */}
          <ProductSpecifications product={product} />

          {/* 04 — APPLICATIONS (ORBITAL ENERGY LOOP) */}
          {product.applications && product.applications.length > 0 && (
            <ProductApplications applications={product.applications} />
          )}

          {/* 05 — SPECIALIZED FEATURES */}
          <GasDetectionFeatures product={product} />

          {/* 06 — BENEFITS / WHY HVTI */}
          {product.benefits && (
            <ProductBenefits benefits={product.benefits} />
          )}

          {/* 07 — CONSULTATION CTA */}
          <DedicatedConsultationCTA
            cta={product.cta}
            defaultTitle="Need a solution for gas leak detection?"
            defaultDescription="Request a technical demonstration, consultation, or formal quotation for the SAT V90 Optical Gas Imaging camera."
            supportingImage="/images/products/sat-v90.png"
          />
        </div>
      </main>
    );
  }

  if (isMultiProduct) {
    return (
      <main className="relative min-h-screen w-full overflow-x-clip bg-[#05070D] text-white">
        <ProductAtmosphere />
        <div className="relative z-10 w-full">
          {/* 01 — HERO */}
          <MultiProductHero product={product} />

          {/* 02 — ENGINEERING AT A GLANCE */}
          {product.engineeringAtAGlance && product.engineeringAtAGlance.length > 0 && (
            <ProductEngineeringAtAGlance items={product.engineeringAtAGlance} />
          )}

          {/* 03 — RANGE / VARIANT SELECTOR */}
          <ProductRangeSelector product={product} />

          {/* 04 — COMPARISON MATRIX */}
          <ComparisonMatrix product={product} />

          {/* 05 — APPLICATIONS (ORBITAL ENERGY LOOP) */}
          {product.applications && product.applications.length > 0 && (
            <ProductApplications applications={product.applications} />
          )}

          {/* 06 — FEATURES (Render only if configured) */}
          {product.features && product.features.length > 0 && (
            <ProductFeatures features={product.features} />
          )}

          {/* 07 — BENEFITS / WHY HVTI */}
          {product.benefits && product.benefits.length > 0 && (
            <ProductBenefits benefits={product.benefits} />
          )}

          {/* 08 — CONSULTATION CTA */}
          <DedicatedConsultationCTA cta={product.cta} supportingImage={product.image} />
        </div>
      </main>
    );
  }

  return (
    <main className="relative w-full overflow-x-clip bg-[#05070D] text-white">
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