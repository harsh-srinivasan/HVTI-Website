import { Metadata } from "next";
import ViewAllPage from "@/components/viewAll/ViewAllPage";
import { categoriesData } from "@/data/categories";

export const metadata: Metadata = {
  title: "Electrical Safety Equipments | HVTI",
  description:
    "Explore HVTI's certified electrical safety equipment: High Voltage Detectors (TP-S9), Insulated Operating Sticks, Discharge Rods, and Portable Earthing Sets.",
};

export default function Page() {
  const category = categoriesData["electrical-safety-equipment"];
  return <ViewAllPage category={category} />;
}
