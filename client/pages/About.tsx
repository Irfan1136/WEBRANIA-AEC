import PlaceholderPage from "@/components/PlaceholderPage";
import { Users } from "lucide-react";

export default function About() {
  return (
    <PlaceholderPage
      title="About WebRana"
      description="Learn more about our journey, our team, and what drives us to create exceptional digital experiences for our clients."
      icon={<Users className="h-16 w-16 mx-auto tech-gradient-text" />}
    />
  );
}
