import { Metadata } from "next";
import PastEventsPage from "@/components/events/PastEventsPage";

export const metadata: Metadata = {
  title: "Past Events & Exhibitions Archive | HVTI High Voltage Testing Instruments",
  description:
    "Explore HVTI's participation in premier trade fairs including National Steel & Power Exhibition Raipur and Windergy India Chennai, showcasing high-voltage safety tools and condition monitoring systems.",
};

export default function Page() {
  return <PastEventsPage />;
}
