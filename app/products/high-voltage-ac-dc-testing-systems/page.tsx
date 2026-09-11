import { Metadata } from "next";
import highVoltageAcDcTestingSystems from "@/data/products/high-voltage-ac-dc-testing-systems";
import ProductAtmosphere from "@/components/products/ProductAtmosphere";
import MultiProductHero from "@/components/products/MultiProductHero";
import ProductEngineeringAtAGlance from "@/components/products/ProductEngineeringAtAGlance";
import CategoryProductRange from "@/components/products/CategoryProductRange";
import ExpandableTechnicalSpecs from "@/components/products/ExpandableTechnicalSpecs";
import CategoryWorkflowSteps from "@/components/products/CategoryWorkflowSteps";
import ProductApplications from "@/components/products/ProductApplications";
import DedicatedConsultationCTA from "@/components/products/DedicatedConsultationCTA";

export const metadata: Metadata = {
  title: "High Voltage AC & DC Testing Systems | HVTI",
  description:
    "Reliable and precise high voltage AC and DC test systems up to 300 kV for dielectric withstand testing of electrical equipment in the field and laboratory.",
};

export default function HighVoltageAcDcTestingSystemsPage() {
  const product = highVoltageAcDcTestingSystems;

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
          ctaLink="/contact?subject=High%20Voltage%20AC%20DC%20Testing%20Systems%20Inquiry"
        />

        {/* 02 — ENGINEERING AT A GLANCE (SIGNATURE COMPONENT) */}
        {product.engineeringAtAGlance && product.engineeringAtAGlance.length > 0 && (
          <ProductEngineeringAtAGlance items={product.engineeringAtAGlance} />
        )}

        {/* 03 — PRODUCT RANGE CARDS */}
        <CategoryProductRange
          product={product}
          eyebrow="OUR PRODUCT RANGE"
          title="Choose the right test system for your application."
          subtitle="Whether you need AC or DC testing, conventional or ultra-light systems, HVTI offers a complete range of high voltage test equipment to suit your requirements."
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
          defaultTitle="Not sure which HV system fits your application?"
          defaultDescription="Our engineering team can help you select the right high voltage test system based on your equipment, testing standards and field conditions."
          supportingImage="/images/products/electrical-testing/high-voltage-ac-dc-testing-kits-hipot-kits.png"
        />
      </div>
    </main>
  );
}
