import { Metadata } from "next";
import ViewAllPage from "@/components/viewAll/ViewAllPage";
import { categoriesList } from "@/data/categories";

export const metadata: Metadata = {
  title: "Products Catalogue | HVTI High-Voltage Equipment",
  description:
    "Explore HVTI's full catalogue of high-voltage testing systems, electrical safety apparatus, 24/7 condition monitoring, and solar-blind corona cameras.",
};

export default function Page() {
  const allProducts = categoriesList.flatMap((cat) => cat.products);
  const masterCatalogue = {
    slug: "all-products",
    title: "All Products Catalogue",
    eyebrow: "HIGH-VOLTAGE TESTING & SAFETY EQUIPMENT",
    tagline: "Smarter Equipment for Safer Electrical Systems",
    description:
      "From 800 kV dielectric testing kits and live-line operating sticks to 24/7 condition monitoring and corona cameras—engineered and manufactured in India.",
    heroImage: "/images/products/product-testing.jpg",
    stats: [
      { value: "4 Divisions", label: "Core Categories" },
      { value: "21+ Systems", label: "Certified Product Lineup" },
      { value: "Up to 800 kV", label: "Voltage Capability" },
    ],
    products: allProducts,
  };

  return <ViewAllPage category={masterCatalogue} />;
}
