import { Metadata } from "next";
import ClientsPage from "@/components/clients/ClientsPage";

export const metadata: Metadata = {
  title: "Our Clients & Partners | HVTI High Voltage Testing & Engineering",
  description:
    "Explore the prominent power generation, transmission utilities, state electricity boards, and heavy industrial corporations powered by HVTI equipment.",
};

export default function Page() {
  return <ClientsPage />;
}
