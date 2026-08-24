import type { Metadata } from "next";
import ManagementOfficePage from "@/components/office/ManagementOfficePage";

/* ================================================================
   HVTI MANAGEMENT OFFICE ROUTE
   File: app/management-office/page.tsx
   ================================================================ */

export const metadata: Metadata = {
  title: "Management Office | HVTI High Voltage Testing & Instruments",
  description:
    "Explore the HVTI Management Office in Gurgaon, NCR — housing our corporate headquarters, executive operations hub, in-house R&D facility, workshop, and 15kW rooftop solar plant.",
};

export default function ManagementOfficeRoute() {
  return <ManagementOfficePage />;
}
