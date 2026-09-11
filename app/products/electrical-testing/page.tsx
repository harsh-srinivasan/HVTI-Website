import { Metadata } from "next";
import ViewAllPage from "@/components/viewAll/ViewAllPage";
import { categoriesData } from "@/data/categories";

export const metadata: Metadata = {
  title: "Electrical Testing Equipment | HVTI",
  description:
    "Explore HVTI's comprehensive range of electrical testing equipment: High Voltage AC/DC Testing Systems, Measurement Dividers, Current Injection, Circuit Breakers, and Partial Discharge Solutions.",
};

export default function Page() {
  const category = categoriesData["electrical-testing-equipment"];
  return <ViewAllPage category={category} />;
}
