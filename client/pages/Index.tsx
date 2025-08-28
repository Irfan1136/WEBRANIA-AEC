import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  Zap, 
  Globe, 
  Users, 
  TrendingUp, 
  Code, 
  Rocket,
  ArrowRight,
  Play
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Cutting-edge technology that delivers unparalleled performance and speed."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "Connect with audiences worldwide through our innovative web solutions."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Industry professionals dedicated to bringing your vision to life."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth Focused",
      description: "Strategies and solutions designed to scale with your business."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-tech-blue-900/20 via-background to-tech-violet-900/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.03)_50%,transparent_75%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="block">Welcome to</span>
                <span className="tech-gradient-text">WebRana</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Transforming digital experiences through innovative web technologies, 
                cutting-edge design, and strategic digital solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="tech-gradient hover:scale-105 transition-transform px-8 py-6 text-lg">
                <Rocket className="mr-2 h-5 w-5" />
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-tech-blue-500/30 hover:bg-tech-blue-500/10 px-8 py-6 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold tech-gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="tech-gradient-text">WebRana</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with creative innovation to deliver 
              exceptional digital experiences that drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="tech-border hover:tech-glow transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 tech-gradient rounded-lg text-white group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="tech-border tech-glow">
            <CardContent className="p-12 text-center">
              <div className="space-y-6">
                <Code className="h-16 w-16 mx-auto tech-gradient-text" />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to <span className="tech-gradient-text">Transform</span> Your Digital Presence?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join hundreds of satisfied clients who have revolutionized their 
                  business with our cutting-edge web solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                  <Button size="lg" className="tech-gradient hover:scale-105 transition-transform px-8 py-6">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-tech-violet-500/30 hover:bg-tech-violet-500/10 px-8 py-6">
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-tech-blue-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 tech-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-bold tech-gradient-text">WebRana</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 WebRana. All rights reserved. Transforming digital experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
