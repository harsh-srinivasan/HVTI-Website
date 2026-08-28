import { Metadata } from "next";
import Link from "next/link";
import GeometricAtmosphere from "@/components/ui/GeometricAtmosphere";

export const metadata: Metadata = {
  title: "Privacy Policy | HVTI",
  description: "Privacy Policy and data protection standards of High Voltage Testing & Instrumentation (HVTI).",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070D] pt-[95px] pb-24 sm:pt-[110px]">
      <GeometricAtmosphere variant="default" />

      <div className="relative z-10 mx-auto w-full max-w-[960px] px-5 sm:px-8">
        <div className="mb-6 flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[#94A3B8]">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#A855F7]">Privacy Policy</span>
        </div>

        <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Privacy Policy
        </h1>

        <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-[#CBD5E1]">
          <p>
            HVTI Private Limited is committed to protecting your privacy. This policy explains how we collect, use, and safeguard any technical, corporate, or contact information provided when interacting with our website and product inquiry systems.
          </p>
          <h2 className="font-heading text-[20px] font-bold text-white">Information We Collect</h2>
          <p>
            We only collect information directly submitted by you through our contact and quote forms, such as your name, corporate email address, phone number, and project specifications.
          </p>
          <h2 className="font-heading text-[20px] font-bold text-white">Use of Information</h2>
          <p>
            Information collected is strictly used to prepare technical proposals, answer equipment inquiries, and facilitate customer support. We do not sell or lease corporate data to third parties.
          </p>
        </div>
      </div>
    </main>
  );
}
