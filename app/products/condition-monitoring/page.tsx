import { Metadata } from "next";
import ViewAllPage from "@/components/viewAll/ViewAllPage";
import { categoriesData } from "@/data/categories";

export const metadata: Metadata = {
  title: "Condition Monitoring Systems | HVTI",
  description:
    "Explore HVTI's 24/7 condition monitoring systems: Wireless Fiber Optic Temperature Monitoring and Online Partial Discharge (PD) Tracking.",
};

export default function Page() {
  const category = categoriesData["condition-monitoring"];
  return <ViewAllPage category={category} />;
}
