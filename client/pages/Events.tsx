import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Code, Heart, Users, DollarSign, Trophy, ArrowRight, FileText } from "lucide-react";

export default function Events() {
  const technicalEvents = [
    {
      name: "Paper Presentation",
      icon: <FileText className="h-6 w-6" />,
      details: "3-5 Members",
      fee: "₹10 fee/team",
      description: "Present your research and innovative ideas"
    }
  ];

  const nonTechnicalEvents = [
    {
      name: "Talent Show", 
      icon: <Trophy className="h-6 w-6" />,
      details: "No Team Details",
      fee: "Free Entry",
      description: "Showcase your unique talents and creativity"
    }
  ];

  const EventCard = ({ event, bgColor }: { event: any, bgColor: string }) => (
    <Card className="tech-border hover:tech-glow transition-all duration-300 group">
      <CardContent className="p-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center text-white`}>
            {event.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground">{event.name}</h3>
            <p className="text-muted-foreground mt-1">{event.description}</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 tech-border rounded-lg">
            <Users className="h-5 w-5 text-tech-blue-400" />
            <span className="text-muted-foreground">{event.details}</span>
          </div>
          
          <div className="flex items-center space-x-3 p-3 tech-border rounded-lg">
            <DollarSign className="h-5 w-5 text-tech-green-400" />
            <span className="text-muted-foreground">{event.fee}</span>
          </div>
        </div>
        
        <Button className="w-full mt-6 tech-gradient hover:scale-105 transition-transform">
          Register Now
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-16">
            {/* Section Label */}
            <div className="space-y-2">
              <div className="inline-block px-4 py-2 tech-border rounded-full">
                <span className="text-tech-blue-400 text-sm font-medium">Our Events</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="block text-foreground">Join Our </span>
                <span className="tech-gradient-text">Events</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Participate in technical and non-technical events designed to enhance your skills 
                and showcase your talents
              </p>
            </div>

            {/* Events Categories */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Technical Events */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-tech-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold tech-gradient-text mb-4">Technical Events</h2>
                  <p className="text-muted-foreground">
                    Showcase your technical prowess and problem-solving skills
                  </p>
                </div>
                
                <div className="space-y-6">
                  {technicalEvents.map((event, index) => (
                    <EventCard 
                      key={index} 
                      event={event} 
                      bgColor="bg-tech-blue-500" 
                    />
                  ))}
                </div>
              </div>

              {/* Non-Technical Events */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-tech-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold tech-gradient-text mb-4">Non-Technical Events</h2>
                  <p className="text-muted-foreground">
                    Express your creativity and showcase your diverse talents
                  </p>
                </div>
                
                <div className="space-y-6">
                  {nonTechnicalEvents.map((event, index) => (
                    <EventCard 
                      key={index} 
                      event={event} 
                      bgColor="bg-tech-violet-500" 
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Event Information */}
            <Card className="tech-border tech-glow max-w-5xl mx-auto">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tech-gradient-text mb-4">Event Guidelines</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 tech-gradient rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          Registration is open to all CSE department students
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 tech-gradient rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          Team composition should follow specified requirements
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 tech-gradient rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          Payment should be made during registration
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold tech-gradient-text mb-4">Important Dates</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 tech-gradient rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          Registration opens: TBA
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 tech-gradient rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          Registration deadline: TBA
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 tech-gradient rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">
                          Event dates: TBA
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/contact">
                <Button className="tech-gradient hover:scale-105 transition-transform px-8 py-6">
                  Contact for Registration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-tech-violet-500/30 hover:bg-tech-violet-500/10 px-8 py-6">
                  Learn About Us
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
