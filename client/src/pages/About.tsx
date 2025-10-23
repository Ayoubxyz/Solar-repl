import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Target,
  Award,
  Users,
  Shield,
  Zap,
  ThumbsUp,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import aboutHero from "@assets/generated_images/Solar_installation_team_working_9e1fadb7.png";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To accelerate Kenya's transition to clean, renewable energy by providing accessible, reliable, and affordable solar solutions to every home and business.",
    },
    {
      icon: Users,
      title: "Customer-First",
      description:
        "We prioritize exceptional service, transparent communication, and long-term relationships with every client we serve.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We use only Tier-1 certified equipment and maintain the highest standards in installation and maintenance practices.",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description:
        "With comprehensive warranties and proven track record, we stand behind every system we install.",
    },
  ];

  const certifications = [
    { name: "Tier-1 Panel Certified", icon: Award },
    { name: "Licensed Installer", icon: Shield },
    { name: "25-Year Warranty", icon: Clock },
    { name: "Quality Guaranteed", icon: CheckCircle2 },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "50MW+", label: "Energy Generated" },
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Proven Expertise",
      description:
        "Over 15 years of experience installing solar systems across Kenya, from residential homes to large commercial installations.",
    },
    {
      icon: ThumbsUp,
      title: "End-to-End Service",
      description:
        "From initial consultation to ongoing maintenance, we handle every aspect of your solar journey with professional care.",
    },
    {
      icon: Shield,
      title: "Premium Equipment",
      description:
        "We partner with world-leading manufacturers to provide only the highest quality solar panels, inverters, and batteries.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHero}
            alt="Solar installation team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="outline"
            className="mb-6 bg-primary/10 backdrop-blur-sm border-primary/30 text-white"
            data-testid="badge-about-tagline"
          >
            About Solar-Gear
          </Badge>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            Empowering Kenya with
            <br />
            <span className="text-primary">Clean Energy Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Leading the solar revolution across Kenya with expertise, quality, and
            unwavering commitment to our customers.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Values & Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guided by principles that put our customers and the planet first
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-value-${index}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-chart-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <p className="font-heading font-bold text-4xl md:text-5xl text-white mb-2">
                  {stat.number}
                </p>
                <p className="text-white/90 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Choose Solar-Gear?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise and commitment that sets us apart in the solar industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((reason, index) => (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-all duration-300 border-card-border"
                data-testid={`card-reason-${index}`}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <reason.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-muted/30 rounded-lg p-8 md:p-12">
            <h3 className="font-heading font-semibold text-2xl text-center text-foreground mb-8">
              Certifications & Guarantees
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                  data-testid={`certification-${index}`}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <cert.icon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{cert.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Certified professionals dedicated to delivering excellence in every
              installation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                role: "Lead Engineer",
                expertise: "15+ Years Experience",
                specialization: "System Design & Installation",
              },
              {
                role: "Technical Director",
                expertise: "Certified Installer",
                specialization: "Commercial Projects",
              },
              {
                role: "Customer Success",
                expertise: "Client Relations",
                specialization: "Support & Maintenance",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-team-${index}`}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    {member.role}
                  </h3>
                  <Badge variant="secondary" className="mb-3">
                    {member.expertise}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {member.specialization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Ready to Start Your Solar Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let our experts design the perfect solar solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button
                size="lg"
                className="text-lg font-semibold min-h-12"
                data-testid="button-about-view-packages"
              >
                View Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="text-lg font-semibold min-h-12"
                data-testid="button-about-browse-products"
              >
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
