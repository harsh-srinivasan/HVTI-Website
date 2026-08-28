import { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "Company Overview | About HVTI",
  description:
    "Discover HVTI — over 28 years of pioneering high-voltage electrical testing equipment, safety instruments, visionary heritage, and Made in India engineering excellence.",
};

export default function Page() {
  return <AboutPage />;
}
