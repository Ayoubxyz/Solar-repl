import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { CheckCircle2, Home, Building2, ArrowRight, Zap } from "lucide-react";
import packagesHero from "@assets/generated_images/Residential_and_commercial_solar_buildings_221fbfca.png";

interface Package {
  id: string;
  name: string;
  type: string;
  price: number;
  capacity: string;
  features: string[];
  energyOutput: string;
  coverageArea: string;
  popular: boolean;
  badge?: string;
}

export default function Packages() {
  const { toast } = useToast();
  const [activeType, setActiveType] = useState("residential");
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const packages: Package[] = [
    {
      id: "res-basic",
      name: "Home Starter",
      type: "residential",
      price: 350000,
      capacity: "3kW System",
      features: [
        "6x 500W Solar Panels",
        "3kW Hybrid Inverter",
        "5kWh Lithium Battery",
        "Professional Installation",
        "Smart Monitoring System",
        "10-Year Warranty",
        "Free Maintenance (1 Year)",
      ],
      energyOutput: "12-15 kWh/day",
      coverageArea: "2-3 Bedroom Home",
      popular: false,
      badge: "Best Value",
    },
    {
      id: "res-standard",
      name: "Home Power",
      type: "residential",
      price: 550000,
      capacity: "5kW System",
      features: [
        "10x 550W Solar Panels",
        "5kW Hybrid Inverter",
        "10kWh Lithium Battery",
        "Premium Installation",
        "Advanced Monitoring",
        "15-Year Warranty",
        "Free Maintenance (2 Years)",
        "Energy Management System",
      ],
      energyOutput: "20-25 kWh/day",
      coverageArea: "3-4 Bedroom Home",
      popular: true,
      badge: "Most Popular",
    },
    {
      id: "res-premium",
      name: "Home Elite",
      type: "residential",
      price: 850000,
      capacity: "8kW System",
      features: [
        "16x 550W Solar Panels",
        "8kW Hybrid Inverter",
        "20kWh Lithium Battery",
        "Premium Installation",
        "AI-Powered Monitoring",
        "25-Year Warranty",
        "Free Maintenance (3 Years)",
        "Complete Energy Independence",
        "Backup Generator Integration",
      ],
      energyOutput: "32-40 kWh/day",
      coverageArea: "5+ Bedroom Villa",
      popular: false,
    },
    {
      id: "com-starter",
      name: "Business Starter",
      type: "commercial",
      price: 1200000,
      capacity: "15kW System",
      features: [
        "30x 550W Solar Panels",
        "15kW Commercial Inverter",
        "30kWh Battery Bank",
        "Industrial Installation",
        "Real-Time Monitoring",
        "20-Year Warranty",
        "Priority Support",
        "Energy Analytics Dashboard",
      ],
      energyOutput: "60-75 kWh/day",
      coverageArea: "Small Office/Retail",
      popular: false,
      badge: "Small Business",
    },
    {
      id: "com-growth",
      name: "Business Growth",
      type: "commercial",
      price: 2500000,
      capacity: "30kW System",
      features: [
        "60x 550W Solar Panels",
        "30kW Commercial Inverter",
        "60kWh Battery Storage",
        "Complete Installation",
        "Advanced Monitoring Suite",
        "25-Year Warranty",
        "24/7 Technical Support",
        "Custom Energy Solutions",
        "Load Management System",
      ],
      energyOutput: "120-150 kWh/day",
      coverageArea: "Medium Office/Factory",
      popular: true,
      badge: "Most Popular",
    },
    {
      id: "com-enterprise",
      name: "Business Enterprise",
      type: "commercial",
      price: 4500000,
      capacity: "50kW+ System",
      features: [
        "100+ Solar Panels",
        "50kW+ Industrial Inverter",
        "100kWh+ Battery Array",
        "Turnkey Installation",
        "Enterprise Monitoring",
        "30-Year Warranty",
        "Dedicated Account Manager",
        "Custom Engineering",
        "Scalable Infrastructure",
        "Grid Integration",
      ],
      energyOutput: "200-250 kWh/day",
      coverageArea: "Large Industrial/Campus",
      popular: false,
    },
  ];

  const filteredPackages = packages.filter((pkg) => pkg.type === activeType);

  const handleQuoteRequest = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!selectedPackage) return;

    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/quote-request", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        itemType: "package",
        itemId: selectedPackage.id,
        itemName: selectedPackage.name,
        message: formData.message || null,
      });

      toast({
        title: "Quote Request Sent!",
        description: "Our team will contact you within 24 hours with a customized quote.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
      setSelectedPackage(null);
      setDialogOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={packagesHero}
            alt="Residential and commercial solar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="outline"
            className="mb-4 bg-primary/10 backdrop-blur-sm border-primary/30 text-white"
            data-testid="badge-packages-tagline"
          >
            Solar Packages
          </Badge>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-4">
            Complete Solar Solutions
            <br />
            <span className="text-primary">For Every Need</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Turnkey packages designed for homes and businesses across Kenya
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeType} onValueChange={setActiveType} className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16 h-14">
              <TabsTrigger
                value="residential"
                className="flex items-center gap-2 text-base"
                data-testid="tab-residential"
              >
                <Home className="h-4 w-4" />
                Residential
              </TabsTrigger>
              <TabsTrigger
                value="commercial"
                className="flex items-center gap-2 text-base"
                data-testid="tab-commercial"
              >
                <Building2 className="h-4 w-4" />
                Commercial
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeType}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredPackages.map((pkg) => (
                  <Card
                    key={pkg.id}
                    className={`hover-elevate active-elevate-2 transition-all duration-300 flex flex-col ${
                      pkg.popular ? "border-primary border-2 shadow-lg" : ""
                    }`}
                    data-testid={`card-package-${pkg.id}`}
                  >
                    <CardHeader className="p-6 pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Zap className="h-6 w-6 text-primary" />
                        </div>
                        {pkg.badge && (
                          <Badge
                            variant={pkg.popular ? "default" : "secondary"}
                            data-testid={`badge-package-${pkg.id}`}
                          >
                            {pkg.badge}
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-heading font-bold text-2xl text-foreground mb-1">
                        {pkg.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{pkg.capacity}</p>
                      <div className="pt-4">
                        <p className="font-heading font-bold text-4xl text-primary">
                          KES {(pkg.price / 1000).toFixed(0)}K
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Installation included
                        </p>
                      </div>
                    </CardHeader>

                    <CardContent className="p-6 pt-2 flex-1">
                      <div className="mb-6 pb-4 border-b border-border">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">
                            Energy Output:
                          </span>
                          <span className="text-sm font-semibold text-foreground">
                            {pkg.energyOutput}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            Coverage:
                          </span>
                          <span className="text-sm font-semibold text-foreground">
                            {pkg.coverageArea}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-foreground mb-3">
                          What's Included:
                        </p>
                        {pkg.features.map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0">
                      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                        <DialogTrigger asChild>
                          <Button
                            className="w-full font-semibold"
                            variant={pkg.popular ? "default" : "outline"}
                            onClick={() => {
                              setSelectedPackage(pkg);
                              setDialogOpen(true);
                            }}
                            data-testid={`button-select-${pkg.id}`}
                          >
                            Get This Package
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle className="font-heading">
                              Request Package Quote
                            </DialogTitle>
                            <DialogDescription>
                              Get started with {selectedPackage?.name} package
                            </DialogDescription>
                          </DialogHeader>

                          <div className="space-y-4 py-4">
                            <div>
                              <Label htmlFor="pkg-name">Full Name *</Label>
                              <Input
                                id="pkg-name"
                                value={formData.name}
                                onChange={(e) =>
                                  setFormData({ ...formData, name: e.target.value })
                                }
                                placeholder="John Doe"
                                data-testid="input-package-name"
                              />
                            </div>
                            <div>
                              <Label htmlFor="pkg-email">Email *</Label>
                              <Input
                                id="pkg-email"
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData({ ...formData, email: e.target.value })
                                }
                                placeholder="john@example.com"
                                data-testid="input-package-email"
                              />
                            </div>
                            <div>
                              <Label htmlFor="pkg-phone">Phone *</Label>
                              <Input
                                id="pkg-phone"
                                value={formData.phone}
                                onChange={(e) =>
                                  setFormData({ ...formData, phone: e.target.value })
                                }
                                placeholder="+254 700 000 000"
                                data-testid="input-package-phone"
                              />
                            </div>
                            <div>
                              <Label htmlFor="pkg-message">Message (Optional)</Label>
                              <Textarea
                                id="pkg-message"
                                value={formData.message}
                                onChange={(e) =>
                                  setFormData({ ...formData, message: e.target.value })
                                }
                                placeholder="Tell us about your energy needs..."
                                rows={3}
                                data-testid="textarea-package-message"
                              />
                            </div>
                          </div>

                          <Button
                            onClick={handleQuoteRequest}
                            className="w-full"
                            disabled={isSubmitting}
                            data-testid="button-submit-package-quote"
                          >
                            {isSubmitting ? "Submitting..." : "Submit Request"}
                          </Button>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Why Choose Our Packages?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete solutions with everything you need for reliable solar power
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Turnkey Solution
                </h3>
                <p className="text-sm text-muted-foreground">
                  Everything from panels to installation included in one package
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Optimized Systems
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pre-designed for maximum efficiency and reliability
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Home className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Expert Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  Professional installation and ongoing maintenance included
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-chart-2">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Not Sure Which Package is Right for You?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Our solar experts will help you choose the perfect solution for your needs
          </p>
          <Button
            size="lg"
            variant="outline"
            className="text-lg font-semibold min-h-12 bg-white text-primary hover:bg-white/90 border-0"
            data-testid="button-consultation"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
