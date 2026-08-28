import { Metadata } from "next";
import TeamPage from "@/components/team/TeamPage";

export const metadata: Metadata = {
  title: "HVTI Core Team | High Voltage Testing & Engineering",
  description:
    "Meet the engineering team behind HVTI's indigenous high-voltage testing systems, live-line safety tools, and predictive diagnostics.",
};

export default function Page() {
  return <TeamPage />;
}
