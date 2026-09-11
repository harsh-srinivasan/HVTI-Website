import { Metadata } from "next";
import partialDischargeSolutions from "@/data/products/partial-discharge-solutions";
import ProductAtmosphere from "@/components/products/ProductAtmosphere";
import MultiProductHero from "@/components/products/MultiProductHero";
import ProductEngineeringAtAGlance from "@/components/products/ProductEngineeringAtAGlance";
import PDSolutionsEcosystem from "@/components/products/PDSolutionsEcosystem";
import ExpandableTechnicalSpecs from "@/components/products/ExpandableTechnicalSpecs";
import CategoryWorkflowSteps from "@/components/products/CategoryWorkflowSteps";
import ProductApplications from "@/components/products/ProductApplications";
import DedicatedConsultationCTA from "@/components/products/DedicatedConsultationCTA";

export const metadata: Metadata = {
  title: "Partial Discharge Solutions | HVTI",
  description:
    "Comprehensive partial discharge solutions for high-voltage assets: online spot detection (PD-LT, PDS, ADD), portable analyzers (XDP-II, HFCT), corona detection (ULD-40), 3D acoustic localization (AE-150), and 24/7 continuous monitoring.",
};

export default function PartialDischargeSolutionsPage() {
  const product = partialDischargeSolutions;

  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#05070D] text-white">
      {/* Continuous Atmospheric Glow Backdrop */}
      <ProductAtmosphere />

      <div className="relative z-10 w-full space-y-12 sm:space-y-16 lg:space-y-24">
        {/* 01 — HERO */}
        <MultiProductHero
          product={product}
          breadcrumbCategory="Electrical Testing Equipment"
          breadcrumbHref="/viewall/electrical-testing-equipment"
          ctaText="Request a Quote"
          ctaLink="/contact?subject=Partial%20Discharge%20Solutions%20Inquiry"
        />

        {/* 02 — ENGINEERING AT A GLANCE (SIGNATURE COMPONENT) */}
        {product.engineeringAtAGlance && product.engineeringAtAGlance.length > 0 && (
          <ProductEngineeringAtAGlance items={product.engineeringAtAGlance} />
        )}

        {/* 03 — COMPLETE PD SOLUTIONS ECOSYSTEM (ALL 9+ PD PRODUCTS UNIFIED VIA TABS) */}
        {product.variants && product.variants.length > 0 && (
          <PDSolutionsEcosystem
            eyebrow="OUR PD SOLUTIONS"
            title="Detect. Localize. Diagnose. Monitor."
            subtitle="HVTI provides a complete set of tools for finding, analyzing, localizing and monitoring partial discharge across all high-voltage electrical assets."
            products={product.variants}
          />
        )}

        {/* 04 — KEY SPECIFICATIONS + EXPANDABLE FULL SPECS */}
        <ExpandableTechnicalSpecs product={product} />

        {/* 05 — HOW IT WORKS / PD WORKFLOW */}
        {product.workflow && (
          <CategoryWorkflowSteps workflow={product.workflow} categorySlug={product.slug} />
        )}

        {/* 06 — APPLICATIONS (ORBITAL ENERGY SYSTEM) */}
        {product.applications && product.applications.length > 0 && (
          <ProductApplications applications={product.applications} />
        )}

        {/* 07 — EXPERT CONSULTATION & SUPPORT */}
        <DedicatedConsultationCTA
          cta={product.cta}
          defaultTitle="Need help configuring a partial discharge assessment program?"
          defaultDescription="Our diagnostic specialists can assist you in selecting the ideal sensors, portable analyzers, or continuous online monitoring architecture for your plant."
          supportingImage="/images/products/electrical-testing/partial-discharge-testing-of-transformer-localization-system.png"
        />
      </div>
    </main>
  );
}
