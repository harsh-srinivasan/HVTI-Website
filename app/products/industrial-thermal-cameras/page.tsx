import { Metadata } from "next";
import industrialThermalCameras from "@/data/products/industrial-thermal-cameras";
import ProductAtmosphere from "@/components/products/ProductAtmosphere";
import MultiProductHero from "@/components/products/MultiProductHero";
import ProductEngineeringAtAGlance from "@/components/products/ProductEngineeringAtAGlance";
import ProductRangeSelector from "@/components/products/ProductRangeSelector";
import ComparisonMatrix from "@/components/products/ComparisonMatrix";
import ProductApplications from "@/components/products/ProductApplications";
import EngineeringValueGrid from "@/components/products/EngineeringValueGrid";
import DedicatedConsultationCTA from "@/components/products/DedicatedConsultationCTA";

export const metadata: Metadata = {
  title: "Industrial & Electrical Thermal Imaging Cameras | HVTI",
  description:
    "Explore certified industrial thermal imaging cameras (PK-80, PK-160, Hotfind S, D300, D500, G96) for electrical inspection, switchgear diagnostics, and predictive maintenance.",
};

export default function IndustrialThermalCamerasPage() {
  const product = industrialThermalCameras;

  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#05070D] text-white">
      {/* Continuous Atmospheric Background */}
      <ProductAtmosphere />

      {/* 01 — HERO */}
      <MultiProductHero
        product={product}
        breadcrumbCategory="Cameras & Imaging"
        ctaText="Talk to an Engineer"
        ctaLink="/contact?subject=Industrial%20Thermal%20Cameras%20Inquiry"
      />

      {/* 02 — ENGINEERING AT A GLANCE */}
      {product.engineeringAtAGlance && product.engineeringAtAGlance.length > 0 && (
        <ProductEngineeringAtAGlance items={product.engineeringAtAGlance} />
      )}

      {/* 03 — PRODUCT SELECTION (01 / 02 / 03 RANGE CARDS) */}
      <ProductRangeSelector product={product} />

      {/* 04 — COMPARISON MATRIX */}
      <ComparisonMatrix product={product} />

      {/* 05 — APPLICATIONS (ORBITAL ENERGY SYSTEM) */}
      {product.applications && product.applications.length > 0 && (
        <ProductApplications applications={product.applications} />
      )}

      {/* 05 — WHY HVTI / VALUE GRID */}
      <EngineeringValueGrid
        benefits={product.benefits}
        eyebrow="WHY HVTI"
        heading="A trusted partner for electrical testing solutions."
      />

      {/* 06 — CONSULTATION CTA */}
      <DedicatedConsultationCTA
        cta={product.cta}
        defaultTitle="Not sure which thermal imaging camera is right for you?"
        defaultDescription="Our high-voltage application engineers will analyze your target distances, thermal sensitivity needs, and temperature ranges to recommend the optimal solution."
        supportingImage="/images/products/satir-hotfind-s.png"
      />
    </main>
  );
}
