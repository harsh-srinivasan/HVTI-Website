import { Metadata } from "next";
import cableFaultLocationTesting from "@/data/products/cable-fault-location-testing";
import ProductAtmosphere from "@/components/products/ProductAtmosphere";
import MultiProductHero from "@/components/products/MultiProductHero";
import ProductEngineeringAtAGlance from "@/components/products/ProductEngineeringAtAGlance";
import CategoryProductRange from "@/components/products/CategoryProductRange";
import ExpandableTechnicalSpecs from "@/components/products/ExpandableTechnicalSpecs";
import CategoryWorkflowSteps from "@/components/products/CategoryWorkflowSteps";
import ProductApplications from "@/components/products/ProductApplications";
import DedicatedConsultationCTA from "@/components/products/DedicatedConsultationCTA";

export const metadata: Metadata = {
  title: "Cable Fault Location & Testing | HVTI",
  description:
    "Advanced cable fault locating and testing solutions — TDR pre-location up to 3000 m, high-voltage surge generators (thumpers), and precision acoustic pinpointing.",
};

export default function CableFaultLocationTestingPage() {
  const product = cableFaultLocationTesting;

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
          ctaLink="/contact?subject=Cable%20Fault%20Location%20Testing%20Inquiry"
        />

        {/* 02 — ENGINEERING AT A GLANCE (SIGNATURE COMPONENT) */}
        {product.engineeringAtAGlance && product.engineeringAtAGlance.length > 0 && (
          <ProductEngineeringAtAGlance items={product.engineeringAtAGlance} />
        )}

        {/* 03 — PRODUCT RANGE CARDS */}
        <CategoryProductRange
          product={product}
          eyebrow="OUR PRODUCTS"
          title="Explore our cable testing solutions."
          subtitle="From fault location to cable condition assessment, our solutions help you quickly identify and analyse cable faults, ensuring minimal downtime and reliable power delivery."
        />

        {/* 04 — KEY TECHNICAL SPECIFICATIONS + EXPANDABLE FULL SPECS */}
        <ExpandableTechnicalSpecs product={product} />

        {/* 05 — HOW IT WORKS / TESTING WORKFLOW */}
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
          defaultTitle="Need help with cable fault location & testing?"
          defaultDescription="Our engineering team can help you choose the right solution based on your cable type, test requirements and site conditions."
          supportingImage="/images/products/miscellaneous-testing-equipment-hd.png"
        />
      </div>
    </main>
  );
}
