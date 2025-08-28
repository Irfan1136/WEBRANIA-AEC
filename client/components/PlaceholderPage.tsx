import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ArrowRight, Code } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const PlaceholderPage = ({ title, description, icon }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="tech-border tech-glow">
            <CardContent className="p-12 text-center">
              <div className="space-y-6">
                {icon || <Code className="h-16 w-16 mx-auto tech-gradient-text" />}
                <h1 className="text-4xl md:text-5xl font-bold">
                  <span className="tech-gradient-text">{title}</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {description}
                </p>
                <div className="pt-6">
                  <p className="text-muted-foreground mb-6">
                    This page is coming soon. We're working hard to bring you amazing content.
                  </p>
                  <Button className="tech-gradient hover:scale-105 transition-transform">
                    Back to Home
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default PlaceholderPage;
