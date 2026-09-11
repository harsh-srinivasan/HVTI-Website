import { Metadata } from "next";
import thermalSurveillanceObservationSystems from "@/data/products/thermal-surveillance-observation-systems";
import ProductAtmosphere from "@/components/products/ProductAtmosphere";
import MultiProductHero from "@/components/products/MultiProductHero";
import ProductEngineeringAtAGlance from "@/components/products/ProductEngineeringAtAGlance";
import ProductRangeSelector from "@/components/products/ProductRangeSelector";
import ComparisonMatrix from "@/components/products/ComparisonMatrix";
import ProductApplications from "@/components/products/ProductApplications";
import DedicatedConsultationCTA from "@/components/products/DedicatedConsultationCTA";

export const metadata: Metadata = {
  title: "Thermal Surveillance & Observation Systems | HVTI",
  description:
    "Explore tactical thermal surveillance cameras and long-range binoculars (SATIR UMTI & UTR50/75) for night patrolling, perimeter defense, and critical infrastructure protection.",
};

export default function ThermalSurveillanceObservationSystemsPage() {
  const product = thermalSurveillanceObservationSystems;

  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#05070D] text-white">
      {/* Continuous Atmospheric Background */}
      <ProductAtmosphere />

      {/* 01 — HERO */}
      <MultiProductHero
        product={product}
        breadcrumbCategory="Cameras & Imaging"
        ctaText="Request a Quote"
        ctaLink="/contact?subject=Thermal%20Surveillance%20Systems%20Inquiry"
      />

      {/* 02 — ENGINEERING AT A GLANCE */}
      {product.engineeringAtAGlance && product.engineeringAtAGlance.length > 0 && (
        <ProductEngineeringAtAGlance items={product.engineeringAtAGlance} />
      )}

      {/* 03 — SURVEILLANCE RANGE CARDS */}
      <ProductRangeSelector product={product} />

      {/* 04 — TECHNICAL SPECIFICATIONS & COMPARISON MATRIX */}
      <ComparisonMatrix product={product} />

      {/* 05 — KEY APPLICATIONS (ORBITAL ENERGY SYSTEM) */}
      {product.applications && product.applications.length > 0 && (
        <ProductApplications applications={product.applications} />
      )}

      {/* 04 — CONSULTATION CTA */}
      <DedicatedConsultationCTA
        cta={product.cta}
        defaultTitle="Need help with surveillance solutions?"
        defaultDescription="Our security and surveillance specialists will help configure the appropriate optical focal lengths and detector resolutions for your perimeter requirements."
        supportingImage="/images/products/satir-utr50.png"
      />
    </main>
  );
}
