import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Target, ArrowRight } from "lucide-react";

export default function Vision() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-12">
            {/* Section Label */}
            <div className="space-y-2">
              <div className="inline-block px-4 py-2 tech-border rounded-full">
                <span className="text-tech-blue-400 text-sm font-medium">
                  Our Vision
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="block text-foreground">
                  Shaping the Future of{" "}
                </span>
                <span className="tech-gradient-text">Computer Science</span>
              </h1>

              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 tech-gradient rounded-full flex items-center justify-center tech-glow">
                  <Target className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>

            {/* Vision Statement */}
            <Card className="tech-border tech-glow max-w-4xl mx-auto">
              <CardContent className="p-12">
                <blockquote className="text-xl md:text-2xl leading-relaxed text-center text-muted-foreground italic">
                  "To build a strong and united Computer Science community where
                  students, seniors, and faculty collaborate to share knowledge,
                  solve challenges, and create opportunities for growth,
                  innovation, and holistic development."
                </blockquote>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/mission">
                <Button className="tech-gradient hover:scale-105 transition-transform px-8 py-6">
                  View Our Mission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/">
                <Button
                  variant="outline"
                  className="border-tech-blue-500/30 hover:bg-tech-blue-500/10 px-8 py-6"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-tech-blue-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 tech-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-lg font-bold tech-gradient-text">
                  WEBRANIA
                </span>
                <span className="text-xs text-tech-blue-400">
                  AL-AMEEN ENGINEERING COLLEGE
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 WEBRANIA. CSE Department Association. Building Tomorrow's
              Tech Leaders.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
