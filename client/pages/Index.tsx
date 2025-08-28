import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Users, Target, Eye, Calendar, Mail, ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-tech-blue-900/20 via-background to-tech-violet-900/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.03)_50%,transparent_75%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-12">
            {/* Logo and College Info */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 tech-gradient rounded-full flex items-center justify-center mb-4 tech-glow">
                    <span className="text-white font-bold text-3xl">W</span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs tech-gradient-text font-semibold">
                    CSE DEPT
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg text-tech-blue-400 font-medium">
                  AL-AMEEN ENGINEERING COLLEGE
                </h3>
                <div className="text-sm text-muted-foreground">
                  (AUTONOMOUS)
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="block text-foreground">Welcome to </span>
                <span className="tech-gradient-text">WEBRANIA</span>
              </h1>
              <p className="text-xl md:text-2xl tech-gradient-text font-semibold">
                "A Association of CSE Department"
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Accredited with NAAC 'A' Grade
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Button
                size="lg"
                className="tech-gradient hover:scale-105 transition-transform px-8 py-6 text-lg"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Quick Links Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16">
              <Link to="/vision">
                <Card className="tech-border hover:tech-glow transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Eye className="h-8 w-8 mx-auto mb-3 tech-gradient-text" />
                    <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      Shaping the Future of Computer Science
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/mission">
                <Card className="tech-border hover:tech-glow transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Target className="h-8 w-8 mx-auto mb-3 tech-gradient-text" />
                    <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">
                      Empowering Through Action
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/events">
                <Card className="tech-border hover:tech-glow transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 mx-auto mb-3 tech-gradient-text" />
                    <h3 className="text-lg font-semibold mb-2">Events</h3>
                    <p className="text-sm text-muted-foreground">
                      Technical & Non-Technical
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/contact">
                <Card className="tech-border hover:tech-glow transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Mail className="h-8 w-8 mx-auto mb-3 tech-gradient-text" />
                    <h3 className="text-lg font-semibold mb-2">Contact</h3>
                    <p className="text-sm text-muted-foreground">
                      Get in Touch
                    </p>
                  </CardContent>
                </Card>
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
