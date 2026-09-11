import { Metadata } from "next";
import satV90GasDetectionCamera from "@/data/products/sat-v90-gas-detection-camera";
import ProductAtmosphere from "@/components/products/ProductAtmosphere";
import MultiProductHero from "@/components/products/MultiProductHero";
import ProductEngineeringAtAGlance from "@/components/products/ProductEngineeringAtAGlance";
import ProductSpecifications from "@/components/products/ProductSpecifications";
import ProductApplications from "@/components/products/ProductApplications";
import GasDetectionFeatures from "@/components/products/GasDetectionFeatures";
import EngineeringValueGrid from "@/components/products/EngineeringValueGrid";
import DedicatedConsultationCTA from "@/components/products/DedicatedConsultationCTA";

export const metadata: Metadata = {
  title: "SAT V90 Gas Detection Camera | Cooled QWIP VOC Leaks | HVTI",
  description:
    "Explore the SAT V90 optical gas imaging camera with cooled QWIP detector for visualizing and locating VOC gas leaks in refineries, oil & gas, and petrochemical plants.",
};

export default function SATV90GasDetectionCameraPage() {
  const product = satV90GasDetectionCamera;

  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#05070D] text-white">
      {/* Continuous Atmospheric Background */}
      <ProductAtmosphere />

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

      {/* 03 — TECHNICAL SPECIFICATIONS (TPS9 STYLE 3-COLUMN TABLE + HARDWARE PREVIEW) */}
      <ProductSpecifications product={product} />

      {/* 04 — APPLICATIONS (ORBITAL ENERGY SYSTEM) */}
      {product.applications && product.applications.length > 0 && (
        <ProductApplications applications={product.applications} />
      )}

      {/* 05 — SPECIALIZED GAS DETECTION CAPABILITIES */}
      <GasDetectionFeatures product={product} />

      {/* 06 — WHY HVTI VALUE GRID */}
      <EngineeringValueGrid
        benefits={product.benefits}
        eyebrow="WHY HVTI"
        heading="Precision High-Voltage & Optical Instrumentation"
      />

      {/* 04 — CONSULTATION CTA */}
      <DedicatedConsultationCTA
        cta={product.cta}
        defaultTitle="Need a solution for gas leak detection?"
        defaultDescription="Request a technical demonstration, consultation, or formal quotation for the SAT V90 Optical Gas Imaging camera."
        supportingImage="/images/products/sat-v90.png"
      />
    </main>
  );
}
