import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Users, Calendar, MessageSquare, ArrowRight } from "lucide-react";

export default function Mission() {
  const missionAreas = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Connect & Collaborate",
      description:
        "Bridge the gap between juniors and seniors, fostering knowledge sharing and mentorship",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Organize Events",
      description:
        "Host department-level events that enhance technical skills, creativity, and teamwork",
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Voice Concerns",
      description:
        "Serve as a platform for students to voice concerns and communicate effectively with management for constructive solutions",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-16">
            {/* Section Label */}
            <div className="space-y-2">
              <div className="inline-block px-4 py-2 tech-border rounded-full">
                <span className="text-tech-blue-400 text-sm font-medium">
                  Our Mission
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="block text-foreground">
                  Empowering Through{" "}
                </span>
                <span className="tech-gradient-text">Action</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our mission drives everything we do, from connecting students to
                organizing impactful events
              </p>
            </div>

            {/* Mission Areas */}
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              {missionAreas.map((area, index) => (
                <Card
                  key={index}
                  className="tech-border hover:tech-glow transition-all duration-300 group"
                >
                  <CardContent className="p-8 text-center h-full">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 tech-gradient rounded-xl text-white group-hover:scale-110 transition-transform">
                        {area.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tech-gradient-text">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Mission Points */}
            <Card className="tech-border tech-glow max-w-5xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-2xl font-bold mb-8 tech-gradient-text">
                  Our Commitments
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 tech-gradient rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        To connect juniors and seniors, enabling them to share
                        experiences, guidance, and career advice.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 tech-gradient rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        To organize department-level events that enhance
                        technical knowledge, creativity, teamwork, and
                        entertainment.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 tech-gradient rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        To encourage leadership, problem-solving, and
                        collaboration among students.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 tech-gradient rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">
                        To create opportunities for skill development through
                        workshops, competitions, and peer learning.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/about">
                <Button className="tech-gradient hover:scale-105 transition-transform px-8 py-6">
                  Learn About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/vision">
                <Button
                  variant="outline"
                  className="border-tech-violet-500/30 hover:bg-tech-violet-500/10 px-8 py-6"
                >
                  View Our Vision
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
