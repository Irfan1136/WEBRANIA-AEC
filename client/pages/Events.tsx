import PlaceholderPage from "@/components/PlaceholderPage";
import { Calendar } from "lucide-react";

export default function Events() {
  return (
    <PlaceholderPage
      title="Events"
      description="Stay updated with our latest events, workshops, and tech meetups where we share knowledge and connect with the community."
      icon={<Calendar className="h-16 w-16 mx-auto tech-gradient-text" />}
    />
  );
}
