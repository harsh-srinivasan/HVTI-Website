import { Metadata } from "next";
import coronaCameras from "@/data/products/corona-cameras";
import ProductAtmosphere from "@/components/products/ProductAtmosphere";
import MultiProductHero from "@/components/products/MultiProductHero";
import ProductEngineeringAtAGlance from "@/components/products/ProductEngineeringAtAGlance";
import ProductRangeSelector from "@/components/products/ProductRangeSelector";
import ComparisonMatrix from "@/components/products/ComparisonMatrix";
import ProductApplications from "@/components/products/ProductApplications";
import EngineeringValueGrid from "@/components/products/EngineeringValueGrid";
import DedicatedConsultationCTA from "@/components/products/DedicatedConsultationCTA";

export const metadata: Metadata = {
  title: "Solar-Blind UV Corona Cameras | CoroCAM 6D, 7 & 8 | HVTI",
  description:
    "Explore the CoroCAM® series of solar-blind UVc inspection cameras (CoroCAM 6D, 7, and Tri-Spectral 8) for detecting high-voltage corona discharges, arcing, and insulation degradation in broad daylight.",
};

export default function CoronaCamerasPage() {
  const product = coronaCameras;

  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#05070D] text-white">
      {/* Continuous Atmospheric Background */}
      <ProductAtmosphere />

      {/* 01 — HERO */}
      <MultiProductHero
        product={product}
        breadcrumbCategory="Cameras & Imaging"
        ctaText="Talk to an Engineer"
        ctaLink="/contact?subject=Corona%20Cameras%20Inquiry"
      />

      {/* 02 — ENGINEERING AT A GLANCE */}
      {product.engineeringAtAGlance && product.engineeringAtAGlance.length > 0 && (
        <ProductEngineeringAtAGlance items={product.engineeringAtAGlance} />
      )}

      {/* 03 — CORONA CAMERA RANGE (VARIANT CARDS) */}
      <ProductRangeSelector product={product} />

      {/* 04 — COMPARISON MATRIX */}
      <ComparisonMatrix product={product} />

      {/* 05 — APPLICATIONS (ORBITAL ENERGY SYSTEM) */}
      {product.applications && product.applications.length > 0 && (
        <ProductApplications applications={product.applications} />
      )}

      {/* 05 — WHY HVTI / VALUE PROPOSITION */}
      <EngineeringValueGrid
        benefits={product.benefits}
        eyebrow="ENGINEERED VALUE"
        heading="Why Global High-Voltage Utilities Choose CoroCAM"
      />

      {/* 06 — CONSULTATION CTA */}
      <DedicatedConsultationCTA
        cta={product.cta}
        defaultTitle="Need help selecting the right corona camera?"
        defaultDescription="Our high-voltage diagnostics specialists will help you choose between the CoroCAM 6D, 7, and Tri-Spectral 8 based on your inspection voltage levels and operating environments."
        supportingImage="/images/products/corocam-8.png"
      />
    </main>
  );
}
