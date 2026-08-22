import Hero from "@/components/home/hero";
import DesktopProductCard from "@/components/home/ProductTypes";
import TrustedOrganizations from "@/components/home/TrustedOrganization";
import CustomEngineering from "@/components/home/CustomEngineering";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070D]">
      {/* Home page sections will be added here */}
           <Hero />
           <DesktopProductCard />
            <TrustedOrganizations />
            <CustomEngineering />
    </main>
  );
}