import { Metadata } from "next";
import UpcomingEventsPage from "@/components/events/UpcomingEventsPage";

export const metadata: Metadata = {
  title: "Upcoming Events & Exhibitions | HVTI High Voltage Testing Instruments",
  description:
    "Discover upcoming high-voltage engineering exhibitions, trade shows, and technical conferences where HVTI showcases cutting-edge safety and dielectric testing equipment.",
};

export default function Page() {
  return <UpcomingEventsPage />;
}
