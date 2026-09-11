import { Metadata } from "next";
import currentInjectionProtectionTesting from "@/data/products/current-injection-protection-testing";
import ProductAtmosphere from "@/components/products/ProductAtmosphere";
import MultiProductHero from "@/components/products/MultiProductHero";
import ProductEngineeringAtAGlance from "@/components/products/ProductEngineeringAtAGlance";
import CategoryProductRange from "@/components/products/CategoryProductRange";
import ExpandableTechnicalSpecs from "@/components/products/ExpandableTechnicalSpecs";
import CategoryWorkflowSteps from "@/components/products/CategoryWorkflowSteps";
import ProductApplications from "@/components/products/ProductApplications";
import DedicatedConsultationCTA from "@/components/products/DedicatedConsultationCTA";

export const metadata: Metadata = {
  title: "Primary & Secondary Current Injection Testing Sets | HVTI",
  description:
    "Reliable, high-performance current injection systems for testing circuit breakers, CTs, relays, busbars and protection systems across utilities and industry.",
};

export default function CurrentInjectionProtectionTestingPage() {
  const product = currentInjectionProtectionTesting;

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
          ctaLink="/contact?subject=Current%20Injection%20Testing%20Sets%20Inquiry"
        />

        {/* 02 — ENGINEERING AT A GLANCE (SIGNATURE COMPONENT) */}
        {product.engineeringAtAGlance && product.engineeringAtAGlance.length > 0 && (
          <ProductEngineeringAtAGlance items={product.engineeringAtAGlance} />
        )}

        {/* 03 — PRODUCT RANGE CARDS */}
        <CategoryProductRange
          product={product}
          eyebrow="OUR PRODUCTS"
          title="Choose the right current injection system."
          subtitle="Our primary and secondary current injection systems are designed to meet a wide range of testing requirements across power utilities, industries and maintenance teams."
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
          defaultTitle="Need help selecting the right current injection system?"
          defaultDescription="Our team can help you choose the best solution for your testing requirements, based on your application and testing standards."
          supportingImage="/images/products/electrical-testing/primary-secondary-current-injection-testing-sets.png"
        />
      </div>
    </main>
  );
}
