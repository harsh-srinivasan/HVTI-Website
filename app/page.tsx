import Hero from "@/components/home/hero";
import DesktopProductCard from "@/components/home/ProductTypes";
import HomeFacilities from "@/components/home/HomeFacilities";
import TrustedOrganizations from "@/components/home/TrustedOrganization";
import CustomEngineering from "@/components/home/CustomEngineering";
import ViewAllCanvas from "@/components/viewAll/ViewAllCanvas";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#05070D]">
      {/* 0. Continuous Minimalist Stardust Canvas */}
      <ViewAllCanvas />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Product Categories Showcase */}
      <DesktopProductCard />

      {/* 3. World-Class Facilities & Infrastructure (Management Office & Laboratory) */}
      <HomeFacilities />

      {/* 4. Trusted Organizations Marquee */}
      <TrustedOrganizations />

      {/* 5. Custom Engineering & Direct Inquiries */}
      <CustomEngineering />
    </main>
  );
}