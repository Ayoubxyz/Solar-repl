import { Link } from "wouter";
import { Sun, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary rounded-md p-1.5">
                <Sun className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">
                Solar<span className="text-primary">-Gear</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Powering Kenya's future with reliable, affordable, and sustainable
              solar energy solutions.
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9"
                data-testid="button-social-facebook"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9"
                data-testid="button-social-twitter"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9"
                data-testid="button-social-instagram"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9"
                data-testid="button-social-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Packages", path: "/packages" },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <a
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(" ", "-")}`}
                    >
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground text-sm">Solar Panels</li>
              <li className="text-muted-foreground text-sm">Battery Storage</li>
              <li className="text-muted-foreground text-sm">Inverters</li>
              <li className="text-muted-foreground text-sm">Installation & Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>info@solargear.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-heading font-semibold text-foreground mb-2">
              Stay Updated
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for solar energy tips and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button data-testid="button-subscribe">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Solar-Gear Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a
              href="#"
              className="hover:text-primary transition-colors"
              data-testid="link-privacy-policy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors"
              data-testid="link-terms-of-service"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
