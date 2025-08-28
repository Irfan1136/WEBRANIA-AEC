import PlaceholderPage from "@/components/PlaceholderPage";
import { Eye } from "lucide-react";

export default function Vision() {
  return (
    <PlaceholderPage
      title="Our Vision"
      description="Discover our vision for the future of web technology and how we're shaping the digital landscape for tomorrow."
      icon={<Eye className="h-16 w-16 mx-auto tech-gradient-text" />}
    />
  );
}
