import { Metadata } from "next";
import ViewAllPage from "@/components/viewAll/ViewAllPage";
import { categoriesData } from "@/data/categories";

export const metadata: Metadata = {
  title: "Electrical Testing Equipment | HVTI",
  description:
    "Precision high-voltage electrical testing equipment for dielectric withstand, measurement, protection validation, circuit breaker diagnostics, and partial discharge analysis.",
};

export default function ElectricalTestingEquipmentPage() {
  const category = categoriesData["electrical-testing-equipment"];
  return <ViewAllPage category={category} />;
}
