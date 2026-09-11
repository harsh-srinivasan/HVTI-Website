import { Metadata } from "next";
import transformerTestingDiagnostics from "@/data/products/transformer-testing-diagnostics";
import ProductAtmosphere from "@/components/products/ProductAtmosphere";
import MultiProductHero from "@/components/products/MultiProductHero";
import ProductEngineeringAtAGlance from "@/components/products/ProductEngineeringAtAGlance";
import CategoryProductRange from "@/components/products/CategoryProductRange";
import ExpandableTechnicalSpecs from "@/components/products/ExpandableTechnicalSpecs";
import CategoryWorkflowSteps from "@/components/products/CategoryWorkflowSteps";
import ProductApplications from "@/components/products/ProductApplications";
import DedicatedConsultationCTA from "@/components/products/DedicatedConsultationCTA";

export const metadata: Metadata = {
  title: "Transformer Testing & Diagnostics | HVTI",
  description:
    "Complete transformer assessment solutions — from turns ratio (ART-3D), winding resistance (WRT-10D), and CT test sets to oil breakdown voltage (OTS series) and Karl Fischer moisture analyzers.",
};

export default function TransformerTestingDiagnosticsPage() {
  const product = transformerTestingDiagnostics;

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
          ctaLink="/contact?subject=Transformer%20Testing%20Diagnostics%20Inquiry"
        />

        {/* 02 — ENGINEERING AT A GLANCE (SIGNATURE COMPONENT) */}
        {product.engineeringAtAGlance && product.engineeringAtAGlance.length > 0 && (
          <ProductEngineeringAtAGlance items={product.engineeringAtAGlance} />
        )}

        {/* 03 — PRODUCT RANGE CARDS (6 INSTRUMENTS) */}
        <CategoryProductRange
          product={product}
          eyebrow="OUR SOLUTIONS"
          title="Test every critical parameter."
          subtitle="Our transformer testing equipment covers electrical, mechanical and insulation parameters, giving you a complete view of transformer health and performance."
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
          defaultTitle="Need help selecting the right transformer testing solution?"
          defaultDescription="Our engineering team can help you choose the best equipment based on your testing requirements and applicable standards."
          supportingImage="/images/products/transformer-testing-benches-hd.png"
        />
      </div>
    </main>
  );
}
