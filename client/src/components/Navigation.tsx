import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Bolt } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navigation() {
  const [location, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Packages", path: "/packages" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 cursor-pointer hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2" data-testid="link-home-logo">
              <div className="bg-primary rounded-md p-1.5">
                <Sun className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl md:text-2xl text-foreground">
                Solar<span className="text-primary">-Gear</span>
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <a
                  className={`font-medium text-base transition-colors hover:text-primary cursor-pointer ${
                    location === link.path
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                  data-testid={`link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              size="default"
              className="font-semibold"
              onClick={() => setLocation('/packages')}
              data-testid="button-get-quote"
            >
              <Bolt className="h-4 w-4 mr-2" />
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                data-testid="button-menu-toggle"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link key={link.path} href={link.path}>
                    <a
                      onClick={() => setOpen(false)}
                      className={`font-medium text-lg transition-colors hover:text-primary cursor-pointer block ${
                        location === link.path
                          ? "text-primary"
                          : "text-foreground/80"
                      }`}
                      data-testid={`mobile-link-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </a>
                  </Link>
                ))}
                <Button
                  className="w-full font-semibold mt-4"
                  onClick={() => {
                    setOpen(false);
                    setLocation('/packages');
                  }}
                  data-testid="button-mobile-get-quote"
                >
                  <Bolt className="h-4 w-4 mr-2" />
                  Get a Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
