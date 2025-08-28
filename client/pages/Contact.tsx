import PlaceholderPage from "@/components/PlaceholderPage";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <PlaceholderPage
      title="Contact Us"
      description="Get in touch with our team to discuss your project, ask questions, or learn more about how we can help you achieve your goals."
      icon={<Mail className="h-16 w-16 mx-auto tech-gradient-text" />}
    />
  );
}
