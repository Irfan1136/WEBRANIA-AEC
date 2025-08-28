import PlaceholderPage from "@/components/PlaceholderPage";
import { Target } from "lucide-react";

export default function Mission() {
  return (
    <PlaceholderPage
      title="Our Mission"
      description="Explore our mission to empower businesses through innovative web solutions and cutting-edge technology."
      icon={<Target className="h-16 w-16 mx-auto tech-gradient-text" />}
    />
  );
}
