import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
import { Sun, Battery, Zap, Settings, CheckCircle2, ShoppingCart } from "lucide-react";
import productsHero from "@assets/generated_images/Solar_equipment_product_photography_104e02d1.png";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  specs: string[];
  featured: boolean;
}

export default function Products() {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const products: Product[] = [
    {
      id: "panel-1",
      name: "Tier-1 Solar Panel 400W",
      category: "panels",
      price: 45000,
      description:
        "High-efficiency monocrystalline solar panel designed for maximum energy production in Kenyan climate.",
      specs: ["400W Output", "25-Year Warranty", "21% Efficiency", "Weather Resistant"],
      featured: true,
    },
    {
      id: "panel-2",
      name: "Premium Solar Panel 550W",
      category: "panels",
      price: 58000,
      description:
        "Premium-grade solar panel with exceptional performance for residential and commercial use.",
      specs: ["550W Output", "25-Year Warranty", "22.5% Efficiency", "Hail Resistant"],
      featured: false,
    },
    {
      id: "panel-3",
      name: "Compact Solar Panel 300W",
      category: "panels",
      price: 35000,
      description: "Space-efficient panel perfect for smaller installations and tight spaces.",
      specs: ["300W Output", "20-Year Warranty", "19.8% Efficiency", "Lightweight"],
      featured: false,
    },
    {
      id: "inverter-1",
      name: "Hybrid Inverter 5kW",
      category: "inverters",
      price: 120000,
      description:
        "Advanced hybrid inverter with battery integration for seamless power management.",
      specs: ["5kW Capacity", "99% Efficiency", "Smart Monitoring", "10-Year Warranty"],
      featured: true,
    },
    {
      id: "inverter-2",
      name: "Grid-Tie Inverter 8kW",
      category: "inverters",
      price: 180000,
      description: "High-capacity inverter optimized for large residential and commercial systems.",
      specs: ["8kW Capacity", "98.5% Efficiency", "Grid Integration", "10-Year Warranty"],
      featured: false,
    },
    {
      id: "inverter-3",
      name: "Off-Grid Inverter 3kW",
      category: "inverters",
      price: 85000,
      description: "Reliable off-grid solution perfect for remote locations and backup power.",
      specs: ["3kW Capacity", "Pure Sine Wave", "Battery Management", "5-Year Warranty"],
      featured: false,
    },
    {
      id: "battery-1",
      name: "Lithium Battery 10kWh",
      category: "batteries",
      price: 450000,
      description:
        "Advanced lithium-ion battery storage for reliable 24/7 power with long lifespan.",
      specs: ["10kWh Capacity", "6000+ Cycles", "10-Year Warranty", "Fast Charging"],
      featured: true,
    },
    {
      id: "battery-2",
      name: "Deep Cycle Battery 5kWh",
      category: "batteries",
      price: 220000,
      description: "Cost-effective battery solution for smaller residential installations.",
      specs: ["5kWh Capacity", "4000+ Cycles", "7-Year Warranty", "Maintenance-Free"],
      featured: false,
    },
    {
      id: "battery-3",
      name: "Commercial Battery 20kWh",
      category: "batteries",
      price: 850000,
      description: "High-capacity battery system designed for commercial and industrial use.",
      specs: ["20kWh Capacity", "8000+ Cycles", "15-Year Warranty", "Scalable"],
      featured: false,
    },
    {
      id: "equipment-1",
      name: "Mounting System - Roof",
      category: "equipment",
      price: 25000,
      description: "Durable aluminum mounting system for secure panel installation on any roof type.",
      specs: ["Aluminum Frame", "Corrosion Resistant", "Universal Fit", "Easy Installation"],
      featured: false,
    },
    {
      id: "equipment-2",
      name: "Solar Charge Controller",
      category: "equipment",
      price: 35000,
      description: "MPPT charge controller for optimal battery charging and system efficiency.",
      specs: ["MPPT Technology", "LCD Display", "Multiple Protection", "5-Year Warranty"],
      featured: false,
    },
    {
      id: "equipment-3",
      name: "Smart Monitoring System",
      category: "equipment",
      price: 18000,
      description: "Real-time monitoring system to track your solar system's performance.",
      specs: ["Real-Time Data", "Mobile App", "Energy Analytics", "Cloud Storage"],
      featured: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Products", icon: Settings },
    { id: "panels", name: "Solar Panels", icon: Sun },
    { id: "inverters", name: "Inverters", icon: Zap },
    { id: "batteries", name: "Batteries", icon: Battery },
    { id: "equipment", name: "Equipment", icon: Settings },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleQuoteRequest = async () => {
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!selectedProduct) return;

    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/quote-request", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        itemType: "product",
        itemId: selectedProduct.id,
        itemName: selectedProduct.name,
        message: formData.message || null,
      });

      toast({
        title: "Quote Request Sent!",
        description: "We'll contact you within 24 hours with a detailed quote.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
      setSelectedProduct(null);
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
            src={productsHero}
            alt="Solar products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="outline"
            className="mb-4 bg-primary/10 backdrop-blur-sm border-primary/30 text-white"
            data-testid="badge-products-tagline"
          >
            Premium Solar Equipment
          </Badge>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-4">
            Quality Products for
            <br />
            <span className="text-primary">Reliable Solar Power</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Tier-1 certified equipment from world-leading manufacturers
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="mb-12"
          >
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12 h-auto gap-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 py-3"
                  data-testid={`tab-${category.id}`}
                >
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="hover-elevate active-elevate-2 transition-all duration-300 flex flex-col"
                    data-testid={`card-product-${product.id}`}
                  >
                    <CardContent className="p-6 flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          {product.category === "panels" && (
                            <Sun className="h-6 w-6 text-primary" />
                          )}
                          {product.category === "inverters" && (
                            <Zap className="h-6 w-6 text-primary" />
                          )}
                          {product.category === "batteries" && (
                            <Battery className="h-6 w-6 text-primary" />
                          )}
                          {product.category === "equipment" && (
                            <Settings className="h-6 w-6 text-primary" />
                          )}
                        </div>
                        {product.featured && (
                          <Badge variant="default" data-testid={`badge-featured-${product.id}`}>
                            Featured
                          </Badge>
                        )}
                      </div>

                      <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        {product.specs.map((spec, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                            <span className="text-sm text-foreground">{spec}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-border">
                        <p className="font-heading font-bold text-2xl text-primary">
                          KES {product.price.toLocaleString()}
                        </p>
                      </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0 flex gap-2">
                      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() => {
                              setSelectedProduct(product);
                              setDialogOpen(true);
                            }}
                            data-testid={`button-quote-${product.id}`}
                          >
                            Request Quote
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle className="font-heading">
                              Request a Quote
                            </DialogTitle>
                            <DialogDescription>
                              Get a detailed quote for {selectedProduct?.name}
                            </DialogDescription>
                          </DialogHeader>

                          <div className="space-y-4 py-4">
                            <div>
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) =>
                                  setFormData({ ...formData, name: e.target.value })
                                }
                                placeholder="John Doe"
                                data-testid="input-quote-name"
                              />
                            </div>
                            <div>
                              <Label htmlFor="email">Email *</Label>
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData({ ...formData, email: e.target.value })
                                }
                                placeholder="john@example.com"
                                data-testid="input-quote-email"
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone *</Label>
                              <Input
                                id="phone"
                                value={formData.phone}
                                onChange={(e) =>
                                  setFormData({ ...formData, phone: e.target.value })
                                }
                                placeholder="+254 700 000 000"
                                data-testid="input-quote-phone"
                              />
                            </div>
                            <div>
                              <Label htmlFor="message">Message (Optional)</Label>
                              <Textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) =>
                                  setFormData({ ...formData, message: e.target.value })
                                }
                                placeholder="Any specific requirements..."
                                rows={3}
                                data-testid="textarea-quote-message"
                              />
                            </div>
                          </div>

                          <Button
                            onClick={handleQuoteRequest}
                            className="w-full"
                            disabled={isSubmitting}
                            data-testid="button-submit-quote"
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No products found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Quality Guaranteed
                </h3>
                <p className="text-sm text-muted-foreground">
                  All products are Tier-1 certified with comprehensive warranties
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Expert Installation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Professional installation included with every product purchase
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Flexible Financing
                </h3>
                <p className="text-sm text-muted-foreground">
                  Multiple payment options and financing plans available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
