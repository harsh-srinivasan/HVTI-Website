import { Metadata } from "next";
import ViewAllPage from "@/components/viewAll/ViewAllPage";
import { categoriesData } from "@/data/categories";

export const metadata: Metadata = {
  title: "Thermal & Imaging Systems | HVTI",
  description:
    "Explore HVTI's optical and thermal inspection systems: Solar-Blind UV Corona Cameras and High-Definition Infrared Thermal Imaging Cameras.",
};

export default function Page() {
  const category = categoriesData["cameras-and-imaging-systems"];
  return <ViewAllPage category={category} />;
}
