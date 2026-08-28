import { Metadata } from "next";
import UpcomingEventsPage from "@/components/events/UpcomingEventsPage";

export const metadata: Metadata = {
  title: "Events & Exhibitions | HVTI High Voltage Testing Instruments",
  description:
    "Explore upcoming and past technical exhibitions, conferences, and trade shows where HVTI demonstrates high-voltage testing and safety innovations.",
};

export default function Page() {
  return <UpcomingEventsPage />;
}
