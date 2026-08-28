import { Metadata } from "next";
import TeamPage from "@/components/team/TeamPage";

export const metadata: Metadata = {
  title: "HVTI Core Team & Leadership | High-Voltage Engineering Specialists",
  description:
    "Meet the engineering leadership and technical specialists behind HVTI: aerospace PCB designers, electronics engineers, and production veterans.",
};

export default function Page() {
  return <TeamPage />;
}
