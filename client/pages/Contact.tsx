import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Users, ShieldCheck, Phone, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  const associationMembers = [
    {
      name: "MOHAMED IRFAN M",
      role: "SECRETARY",
      phone: "7598659947",
      icon: <Users className="h-6 w-6" />
    },
    {
      name: "DHARSHAN S L",
      role: "JOINT SECRETARY", 
      phone: "8248784058",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const staffInCharge = [
    {
      name: "Mrs. AAFIYA THAHASEEN A",
      role: "HEAD OF DEPARTMENT",
      phone: "8122291174",
      icon: <ShieldCheck className="h-6 w-6" />
    },
    {
      name: "Mr. MOHAMMED IBRAHIM S",
      role: "STAFF",
      phone: "9994222784", 
      icon: <ShieldCheck className="h-6 w-6" />
    }
  ];

  const ContactCard = ({ person, bgColor }: { person: any, bgColor: string }) => (
    <Card className="tech-border hover:tech-glow transition-all duration-300 group">
      <CardContent className="p-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center text-white`}>
            {person.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground">{person.name}</h3>
            <p className="text-tech-blue-400 font-medium text-sm">{person.role}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 tech-border rounded-lg hover:bg-tech-blue-500/5 transition-colors">
          <Phone className="h-5 w-5 text-tech-green-400" />
          <span className="text-lg font-mono text-muted-foreground">{person.phone}</span>
        </div>
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
                <span className="text-tech-blue-400 text-sm font-medium">Association Members & Staff</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="block text-foreground">Contact </span>
                <span className="tech-gradient-text">Information</span>
              </h1>
            </div>

            {/* Contact Cards */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Association Members */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-tech-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold tech-gradient-text mb-2">Association Members</h2>
                </div>
                
                <div className="space-y-6">
                  {associationMembers.map((member, index) => (
                    <ContactCard 
                      key={index} 
                      person={member} 
                      bgColor="bg-tech-blue-500" 
                    />
                  ))}
                </div>
              </div>

              {/* Staff In Charge */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-tech-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold tech-gradient-text mb-2">Staff In Charge</h2>
                </div>
                
                <div className="space-y-6">
                  {staffInCharge.map((staff, index) => (
                    <ContactCard 
                      key={index} 
                      person={staff} 
                      bgColor="bg-tech-violet-500" 
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Contact Info */}
            <Card className="tech-border tech-glow max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="space-y-6">
                  <Mail className="h-12 w-12 mx-auto tech-gradient-text" />
                  <h3 className="text-2xl font-bold">Get in Touch</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Have questions, suggestions, or want to get involved with WEBRANIA? 
                    Feel free to reach out to any of our team members. We're here to help 
                    and would love to hear from you!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button className="tech-gradient">
                      Join Our WhatsApp Group
                    </Button>
                    <Button variant="outline" className="border-tech-blue-500/30 hover:bg-tech-blue-500/10">
                      Follow on Social Media
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/events">
                <Button className="tech-gradient hover:scale-105 transition-transform px-8 py-6">
                  View Our Events
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" className="border-tech-violet-500/30 hover:bg-tech-violet-500/10 px-8 py-6">
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
