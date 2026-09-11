import { Metadata } from "next";
import specializedElectricalTestingEquipment from "@/data/products/specialized-electrical-testing-equipment";
import ProductAtmosphere from "@/components/products/ProductAtmosphere";
import MultiProductHero from "@/components/products/MultiProductHero";
import ProductEngineeringAtAGlance from "@/components/products/ProductEngineeringAtAGlance";
import CategoryProductRange from "@/components/products/CategoryProductRange";
import ExpandableTechnicalSpecs from "@/components/products/ExpandableTechnicalSpecs";
import CategoryWorkflowSteps from "@/components/products/CategoryWorkflowSteps";
import ProductApplications from "@/components/products/ProductApplications";
import DedicatedConsultationCTA from "@/components/products/DedicatedConsultationCTA";

export const metadata: Metadata = {
  title: "Specialized Electrical Testing Equipment | HVTI",
  description:
    "Specialized diagnostic instrumentation — live DC earth fault locators (GFL-T+R), digital time interval meters (DTIM), cart-mounted SF6 handling equipment (TP-ER100), and 15-piece relay toolkits.",
};

export default function SpecializedElectricalTestingEquipmentPage() {
  const product = specializedElectricalTestingEquipment;

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
          ctaLink="/contact?subject=Specialized%20Electrical%20Testing%20Inquiry"
        />

        {/* 02 — ENGINEERING AT A GLANCE (SIGNATURE COMPONENT) */}
        {product.engineeringAtAGlance && product.engineeringAtAGlance.length > 0 && (
          <ProductEngineeringAtAGlance items={product.engineeringAtAGlance} />
        )}

        {/* 03 — PRODUCT RANGE CARDS */}
        <CategoryProductRange
          product={product}
          eyebrow="OUR PRODUCT RANGE"
          title="Specialized electrical testing solutions."
          subtitle="Trusted by utilities and industry worldwide, our specialized testing equipment is designed for accurate diagnostics, simpler maintenance and improved system reliability."
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
          defaultTitle="Need a specialized testing solution?"
          defaultDescription="Our team can help you choose the right equipment based on your application, testing requirements and field conditions."
          supportingImage="/images/products/dc-earth-fault-locator-hd.png"
        />
      </div>
    </main>
  );
}
