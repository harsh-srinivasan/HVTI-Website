import { Metadata } from "next";
import circuitBreakerTestingAnalysis from "@/data/products/circuit-breaker-testing-analysis";
import ProductAtmosphere from "@/components/products/ProductAtmosphere";
import MultiProductHero from "@/components/products/MultiProductHero";
import ProductEngineeringAtAGlance from "@/components/products/ProductEngineeringAtAGlance";
import CategoryProductRange from "@/components/products/CategoryProductRange";
import ExpandableTechnicalSpecs from "@/components/products/ExpandableTechnicalSpecs";
import CategoryWorkflowSteps from "@/components/products/CategoryWorkflowSteps";
import ProductApplications from "@/components/products/ProductApplications";
import DedicatedConsultationCTA from "@/components/products/DedicatedConsultationCTA";

export const metadata: Metadata = {
  title: "Circuit Breaker Testing & Analysis | HVTI",
  description:
    "Advanced testing solutions for comprehensive circuit breaker evaluation — from contact resistance (DRM/LRM/MM series) to timing, travel, and dynamic motion analysis (SA series).",
};

export default function CircuitBreakerTestingAnalysisPage() {
  const product = circuitBreakerTestingAnalysis;

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
          ctaLink="/contact?subject=Circuit%20Breaker%20Testing%20Analysis%20Inquiry"
        />

        {/* 02 — ENGINEERING AT A GLANCE (SIGNATURE COMPONENT) */}
        {product.engineeringAtAGlance && product.engineeringAtAGlance.length > 0 && (
          <ProductEngineeringAtAGlance items={product.engineeringAtAGlance} />
        )}

        {/* 03 — PRODUCT / SOLUTION RANGE (SA Analyzers, DRM Micro-ohmmeters, LV Coil testers) */}
        <CategoryProductRange
          product={product}
          eyebrow="OUR SOLUTIONS"
          title="Choose the right testing solution."
          subtitle="Our circuit breaker testing instruments are designed to meet a wide range of testing and maintenance requirements for all types of circuit breakers and switchgear."
        />

        {/* 04 — KEY SPECIFICATIONS + EXPANDABLE FULL SPECS */}
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
          defaultTitle="Need help selecting the right circuit breaker testing solution?"
          defaultDescription="Our engineering team can help you choose the best instruments for your applications, testing standards and field conditions."
          supportingImage="/images/products/electrical-testing/circuit-breaker-testing.png"
        />
      </div>
    </main>
  );
}
