import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Code, Shield, Heart, ArrowRight } from "lucide-react";

export default function About() {
  const focusAreas = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Technical Excellence",
      description: "Advanced workshops on cutting-edge technologies and programming languages"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Student Advocacy", 
      description: "Representing student interests and facilitating productive dialogue with faculty"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community Building",
      description: "Creating lasting bonds and networks that benefit the entire CSE community"
    }
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
                <span className="text-tech-blue-400 text-sm font-medium">About WebRania</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="block text-foreground">Building Tomorrow's </span>
                <span className="tech-gradient-text">Tech Leaders</span>
              </h1>
            </div>

            {/* About Description */}
            <Card className="tech-border tech-glow max-w-5xl mx-auto">
              <CardContent className="p-12">
                <p className="text-xl leading-relaxed text-muted-foreground text-center italic">
                  <strong className="tech-gradient-text">WEBRANIA – The CSE Department Association</strong>, 
                  is formed by students, for students. We aim to create a platform where every 
                  member can learn, innovate, and grow together. From technical 
                  events to cultural programs, from academic support to problem-
                  solving with management, WEBRANIA ensures that every student 
                  feels connected, supported, and inspired.
                </p>
              </CardContent>
            </Card>

            {/* Focus Areas */}
            <div className="space-y-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="tech-gradient-text">Focus Areas</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {focusAreas.map((area, index) => (
                  <Card key={index} className="tech-border hover:tech-glow transition-all duration-300 group">
                    <CardContent className="p-8 text-center h-full">
                      <div className="mb-6 flex justify-center">
                        <div className="p-4 tech-gradient rounded-xl text-white group-hover:scale-110 transition-transform">
                          {area.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 tech-gradient-text">{area.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* College Information */}
            <Card className="tech-border tech-glow max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="space-y-6">
                  <div className="w-16 h-16 tech-gradient rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-2xl">W</span>
                  </div>
                  <h3 className="text-2xl font-bold tech-gradient-text">AL-AMEEN ENGINEERING COLLEGE</h3>
                  <p className="text-lg text-muted-foreground">(AUTONOMOUS)</p>
                  <p className="text-tech-blue-400 font-semibold">Accredited with NAAC 'A' Grade</p>
                  <p className="text-muted-foreground">
                    Fostering innovation and excellence in Computer Science education, 
                    preparing students for the challenges of tomorrow's technology landscape.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/contact">
                <Button className="tech-gradient hover:scale-105 transition-transform px-8 py-6">
                  Contact Our Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/events">
                <Button variant="outline" className="border-tech-violet-500/30 hover:bg-tech-violet-500/10 px-8 py-6">
                  View Events
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
                <span className="text-lg font-bold tech-gradient-text">WEBRANIA</span>
                <span className="text-xs text-tech-blue-400">AL-AMEEN ENGINEERING COLLEGE</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 WEBRANIA. CSE Department Association. Building Tomorrow's Tech Leaders.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
