"use client";

import ProductAtmosphere from "./ProductAtmosphere";
import ProductHero from "./ProductHero";
import ProductNavigation from "./ProductNavigation";
import ProductOverview from "./ProductOverview";
import ProductSpecifications from "./ProductSpecifications";
import ProductApplications from "./ProductApplications";
import ProductFeatures from "./ProductFeatures";
import ProductBenefits from "./ProductBenefits";
import ProductCTA from "./ProductCTA";

/* ================================================================
   PRODUCT PAGE
   File: components/products/ProductPage.tsx

   Cohesive, premium industrial engineering product catalogue
   architecture matching the reference visual design.

   Features:
   - Unified continuous atmospheric studio background (ProductAtmosphere)
   - 3D equipment render naturally integrated into the page canvas
   - 100% transparent section layering with refined structural borders
   ================================================================ */

export default function ProductPage({
  product,
}: {
  product: any;
}) {
  return (
    <main className="relative w-full overflow-hidden bg-[#05070D] text-white">

      {/* ==========================================================
          UNIFIED CONTINUOUS ATMOSPHERIC BACKGROUND SYSTEM
          ========================================================== */}

      <ProductAtmosphere />

      {/* ==========================================================
          PRODUCT PAGE SECTIONS (Layered naturally above atmosphere)
          ========================================================== */}

      <div className="relative z-10 w-full">

        {/* 01 — PRODUCT HERO */}
        <ProductHero product={product} />

        {/* 02 — PRODUCT NAVIGATION (STICKY) */}
        <ProductNavigation />

        {/* 03 — UNIFIED PRODUCT OVERVIEW & INFORMATION */}
        <ProductOverview product={product} />

        {/* 04 — TECHNICAL SPECIFICATIONS */}
        <ProductSpecifications product={product} />

        {/* 05 — APPLICATIONS + FEATURES (SHARED 2-COL MODULE) */}
        <section
          id="applications-features"
          className="
            border-b
            border-white/[0.08]
            bg-transparent
          "
        >
          {/* Desktop 2-Column Shared Container */}
          <div
            className="
              mx-auto
              hidden
              w-full
              max-w-[1280px]
              px-10
              py-16
              xl:px-12
              lg:block
            "
          >
            <div
              className="
                grid
                grid-cols-2
                gap-12
                xl:gap-16
              "
            >
              {/* Left: Applications Grid */}
              <div
                className="
                  min-w-0
                  border-r
                  border-white/[0.08]
                  pr-10
                  xl:pr-14
                "
              >
                <ProductApplications product={product} layout="desktop" />
              </div>

              {/* Right: Features Numbered List */}
              <div className="min-w-0">
                <ProductFeatures product={product} layout="desktop" />
              </div>
            </div>
          </div>

          {/* Mobile Stacked Sections */}
          <div className="block lg:hidden">
            <ProductApplications product={product} layout="mobile" />
            <ProductFeatures product={product} layout="mobile" />
          </div>
        </section>

        {/* 06 — ENGINEERED VALUE / BENEFITS */}
        {product.benefits && (
          <ProductBenefits benefits={product.benefits} />
        )}

        {/* 07 — CONVERSION BANNER (DOCUMENTS + CTA) */}
        <ProductCTA product={product} />

      </div>
    </main>
  );
}