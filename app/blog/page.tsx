import { Metadata } from "next";
import BlogPage from "@/components/blog/BlogPage";

export const metadata: Metadata = {
  title: "HVTI Blog & Technical Insights | High-Voltage Testing & Grid Research",
  description:
    "Explore in-depth technical articles on HVAC vs HVDC transmission, partial discharge diagnostics, live-line safety tools, and renewable grid modernization from HVTI engineers.",
};

export default function Page() {
  return <BlogPage />;
}
