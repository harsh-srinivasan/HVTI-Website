import { Metadata } from "next";
import highVoltageMeasurementDividers from "@/data/products/high-voltage-measurement-dividers";
import ProductAtmosphere from "@/components/products/ProductAtmosphere";
import MultiProductHero from "@/components/products/MultiProductHero";
import ProductEngineeringAtAGlance from "@/components/products/ProductEngineeringAtAGlance";
import CategoryProductRange from "@/components/products/CategoryProductRange";
import ExpandableTechnicalSpecs from "@/components/products/ExpandableTechnicalSpecs";
import CategoryWorkflowSteps from "@/components/products/CategoryWorkflowSteps";
import ProductApplications from "@/components/products/ProductApplications";
import DedicatedConsultationCTA from "@/components/products/DedicatedConsultationCTA";

export const metadata: Metadata = {
  title: "High Voltage Measurement & Dividers | HVTI",
  description:
    "Precise measurement and calibration systems for high-voltage testing applications including AC/DC voltage dividers, digital kV measurement systems and standardized sphere gaps.",
};

export default function HighVoltageMeasurementDividersPage() {
  const product = highVoltageMeasurementDividers;

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
          ctaLink="/contact?subject=High%20Voltage%20Measurement%20Dividers%20Inquiry"
        />

        {/* 02 — ENGINEERING AT A GLANCE (SIGNATURE COMPONENT) */}
        {product.engineeringAtAGlance && product.engineeringAtAGlance.length > 0 && (
          <ProductEngineeringAtAGlance items={product.engineeringAtAGlance} />
        )}

        {/* 03 — PRODUCT / SOLUTION RANGE */}
        <CategoryProductRange
          product={product}
          eyebrow="OUR SOLUTIONS"
          title="Choose the right measurement solution."
          subtitle="From precision voltage dividers to standardized sphere gaps, our high-voltage measurement systems help you achieve accurate and reliable test results."
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
          defaultTitle="Need help selecting the right measurement system?"
          defaultDescription="Our engineering team can help you choose the best solution for your testing and calibration requirements."
          supportingImage="/images/products/electrical-testing/high-voltage-ac-dc-dividers.png"
        />
      </div>
    </main>
  );
}
