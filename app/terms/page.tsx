import { Metadata } from "next";
import Link from "next/link";
import GeometricAtmosphere from "@/components/ui/GeometricAtmosphere";

export const metadata: Metadata = {
  title: "Terms & Conditions | HVTI",
  description: "Terms and conditions of service and product documentation for High Voltage Testing & Instrumentation (HVTI).",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070D] pt-[95px] pb-24 sm:pt-[110px]">
      <GeometricAtmosphere variant="default" />

      <div className="relative z-10 mx-auto w-full max-w-[960px] px-5 sm:px-8">
        <div className="mb-6 flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[#94A3B8]">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#A855F7]">Terms &amp; Conditions</span>
        </div>

        <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Terms &amp; Conditions
        </h1>

        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-[#CBD5E1]">
          <p>
            Welcome to the official website of HVTI Private Limited. By browsing or accessing this website and its technical product catalogues, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <h2 className="font-heading text-[20px] font-bold text-white">Intellectual Property</h2>
          <p>
            All content, including high-voltage equipment designs, technical schematics, photography, 3D renderings, and software simulations are the intellectual property of HVTI Private Limited.
          </p>
          <h2 className="font-heading text-[20px] font-bold text-white">Technical Specifications</h2>
          <p>
            While every effort is made to maintain accurate technical data, HVTI reserves the right to upgrade equipment parameters and physical dimensions in line with ongoing engineering improvements.
          </p>
        </div>
      </div>
    </main>
  );
}
