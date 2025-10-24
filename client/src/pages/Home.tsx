import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DollarSign,
  Zap,
  Home as HomeIcon,
  Battery,
  Sun,
  Settings,
  CheckCircle2,
  ArrowRight,
  TrendingDown,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  const [monthlyBill, setMonthlyBill] = useState("");
  const [savings, setSavings] = useState(0);


  const calculateSavings = () => {
    const bill = parseFloat(monthlyBill);
    if (isNaN(bill) || bill <= 0) {
      setSavings(0);
      return;
    }
    // Assume 80% reduction in electricity bill, 25 years lifespan
    const monthlySavings = bill * 0.8;
    const totalSavings = monthlySavings * 12 * 25;
    setSavings(totalSavings);
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Reduce Electricity Bills",
      description:
        "Drastically cut or eliminate your monthly electricity costs by generating clean power from the sun.",
    },
    {
      icon: Zap,
      title: "Energy Independence",
      description:
        "Gain freedom from unreliable power grids and frequent outages with consistent power day and night.",
    },
    {
      icon: HomeIcon,
      title: "Increase Property Value",
      description:
        "Homes with solar installations are highly attractive to buyers and sell for a premium in Kenya.",
    },
  ];

  const solutions = [
    {
      icon: Sun,
      title: "Solar Panels",
      description:
        "High-efficiency Tier-1 solar panels designed for maximum energy production in the Kenyan climate.",
    },
    {
      icon: Battery,
      title: "Battery Storage",
      description:
        "Ensure 24/7 power with advanced solar battery solutions. Store excess energy for nighttime use.",
    },
    {
      icon: Zap,
      title: "Inverters",
      description:
        "Reliable, top-brand inverters to efficiently convert solar energy into usable electricity.",
    },
    {
      icon: Settings,
      title: "Installation & Maintenance",
      description:
        "Certified technicians ensure safe installation and offer maintenance plans for optimal performance.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Consultation",
      description: "We assess your energy needs and site viability.",
    },
    {
      number: "02",
      title: "System Design",
      description: "We create a custom solar solution tailored for you.",
    },
    {
      number: "03",
      title: "Installation",
      description: "Our professional team installs your system safely.",
    },
    {
      number: "04",
      title: "Support",
      description: "We provide ongoing support and maintenance.",
    },
  ];

  const testimonials = [
    {
      name: "James Kamau",
      location: "Karen, Nairobi",
      project: "5kW Residential System",
      quote:
        "Solar-Gear transformed our home. We haven't paid an electricity bill in over a year. The installation was seamless and professional.",
    },
    {
      name: "Sarah Njeri",
      location: "Runda",
      project: "8kW Villa Installation",
      quote:
        "The team was incredibly knowledgeable and efficient. Our 8kW system powers our entire villa, and the aesthetics are beautiful.",
    },
    {
      name: "Mohamed Ali",
      location: "Mombasa",
      project: "6kW Coastal Home",
      quote:
        "Living on the coast, we needed corrosion-resistant equipment. Solar-Gear delivered exactly that with exceptional service.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider />

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Choose Solar Energy?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the powerful advantages of switching to solar power for
              your home or business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-all duration-300 border-card-border"
                data-testid={`card-benefit-${index}`}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Comprehensive Solar Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From panels to installation, we provide everything you need for a
              complete clean energy transition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-solution-${index}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Simple 4-Step Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We make going solar easy and transparent from your first inquiry to
              final activation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative"
                data-testid={`step-${index}`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="font-heading font-bold text-2xl text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <TrendingDown className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-3">
                  Calculate Your Savings
                </h2>
                <p className="text-lg text-muted-foreground">
                  See how much you could save over 25 years by switching to solar
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="monthly-bill"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Average Monthly Electricity Bill (KES)
                  </label>
                  <Input
                    id="monthly-bill"
                    type="number"
                    placeholder="e.g., 5000"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    className="text-lg"
                    data-testid="input-monthly-bill"
                  />
                </div>

                <Button
                  onClick={calculateSavings}
                  className="w-full text-lg font-semibold min-h-12"
                  data-testid="button-calculate"
                >
                  Calculate Savings
                </Button>

                {savings > 0 && (
                  <div className="bg-primary/5 rounded-lg p-6 text-center border border-primary/20">
                    <p className="text-sm text-muted-foreground mb-2">
                      Your estimated savings over 25 years:
                    </p>
                    <p className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2">
                      KES {savings.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      *Based on 80% reduction in electricity costs
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of satisfied homeowners and businesses across Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`card-testimonial-${index}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Sun key={i} className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                    <Badge variant="secondary" className="mt-2">
                      {testimonial.project}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-chart-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Get a free consultation and discover how much you can save with solar
            energy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button
                size="lg"
                variant="outline"
                className="text-lg font-semibold min-h-12 bg-white text-primary hover:bg-white/90 border-0"
                data-testid="button-cta-view-packages"
              >
                View Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="text-lg font-semibold min-h-12 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                data-testid="button-cta-browse-products"
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
