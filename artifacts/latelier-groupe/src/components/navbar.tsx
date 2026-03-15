import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "À Propos", href: "#about" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className={`text-2xl md:text-3xl font-serif font-semibold tracking-wide transition-colors ${isScrolled ? "text-foreground" : "text-white drop-shadow-md"}`}>
            L'Atelier <span className="text-primary italic">Groupe</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors ${
                isScrolled ? "text-foreground/80" : "text-white/90 drop-shadow-sm hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            asChild
            className={`rounded-sm font-medium tracking-wide uppercase px-6 py-5 shadow-lg hover:-translate-y-0.5 transition-all duration-300 ${
              !isScrolled ? "bg-white text-foreground hover:bg-white/90" : ""
            }`}
          >
            <a href="tel:0681032037">
              <PhoneCall className="w-4 h-4 mr-2" />
              06 81 03 20 37
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`absolute top-full left-0 w-full bg-background border-b shadow-xl transition-all duration-300 overflow-hidden md:hidden ${
          mobileMenuOpen ? "max-h-[400px] py-4" : "max-h-0 py-0 border-transparent"
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-primary font-medium text-lg uppercase tracking-wider w-full text-center py-2 border-b border-border/50"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="w-full mt-2 py-6 text-lg rounded-sm bg-primary text-primary-foreground">
            <a href="tel:0681032037">
              <PhoneCall className="w-5 h-5 mr-2" />
              06 81 03 20 37
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
