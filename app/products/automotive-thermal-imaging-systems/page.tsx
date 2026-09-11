import { Metadata } from "next";
import automotiveThermalImagingSystems from "@/data/products/automotive-thermal-imaging-systems";
import ProductAtmosphere from "@/components/products/ProductAtmosphere";
import MultiProductHero from "@/components/products/MultiProductHero";
import ProductEngineeringAtAGlance from "@/components/products/ProductEngineeringAtAGlance";
import ProductRangeSelector from "@/components/products/ProductRangeSelector";
import ComparisonMatrix from "@/components/products/ComparisonMatrix";
import ProductApplications from "@/components/products/ProductApplications";
import DedicatedConsultationCTA from "@/components/products/DedicatedConsultationCTA";

export const metadata: Metadata = {
  title: "Automotive Thermal Imaging Systems | HVTI",
  description:
    "Explore vehicle-mounted automotive thermal imaging systems (SATIR NV618S & NV618W) for night driving safety, pedestrian detection, and adverse weather visibility.",
};

export default function AutomotiveThermalImagingSystemsPage() {
  const product = automotiveThermalImagingSystems;

  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#05070D] text-white">
      {/* Continuous Atmospheric Background */}
      <ProductAtmosphere />

      {/* 01 — HERO */}
      <MultiProductHero
        product={product}
        breadcrumbCategory="Cameras & Imaging"
        ctaText="Request a Quote"
        ctaLink="/contact?subject=Automotive%20Thermal%20Imaging%20Inquiry"
      />

      {/* 02 — ENGINEERING AT A GLANCE */}
      {product.engineeringAtAGlance && product.engineeringAtAGlance.length > 0 && (
        <ProductEngineeringAtAGlance items={product.engineeringAtAGlance} />
      )}

      {/* 03 — PRODUCT SELECTION (VARIANT CARDS) */}
      <ProductRangeSelector product={product} />

      {/* 04 — COMPARISON MATRIX */}
      <ComparisonMatrix product={product} />

      {/* 05 — APPLICATIONS (ORBITAL ENERGY SYSTEM) */}
      {product.applications && product.applications.length > 0 && (
        <ProductApplications applications={product.applications} />
      )}

      {/* 05 — CONSULTATION CTA */}
      <DedicatedConsultationCTA
        cta={product.cta}
        defaultTitle="Need help with automotive thermal imaging?"
        defaultDescription="Contact our engineering team to explore vehicle integration kits, fleet pilot trials, and commercial quotation options."
        supportingImage="/images/products/satir-nv618s.png"
      />
    </main>
  );
}
