import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "À Propos", href: "#about" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const textColor = isScrolled ? "text-foreground" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className={`text-xl md:text-2xl font-sans font-bold tracking-tighter uppercase transition-colors ${textColor}`}>
            L'Atelier Groupe
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side: dark toggle + phone CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className={`p-2 rounded-full transition-colors ${
              isScrolled
                ? "text-foreground hover:bg-secondary"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Button
            asChild
            variant="outline"
            className={`rounded-full font-semibold text-xs tracking-widest uppercase px-6 py-5 transition-all duration-300 ${
              !isScrolled
                ? "border-white/50 text-white hover:bg-white hover:text-black bg-transparent"
                : "border-border text-foreground hover:bg-foreground hover:text-background"
            }`}
          >
            <a href="tel:+212681032037">
              06 81 03 20 37
            </a>
          </Button>
        </div>

        {/* Mobile: dark toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className={`p-2 ${textColor}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className={`p-2 ${textColor}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`absolute top-full left-0 w-full bg-background border-b border-border/50 transition-all duration-300 overflow-hidden md:hidden ${
          mobileMenuOpen ? "max-h-[400px] py-6" : "max-h-0 py-0 border-transparent"
        }`}
      >
        <div className="flex flex-col items-center gap-8 px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-primary font-bold text-sm uppercase tracking-[0.2em] w-full text-center"
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="w-full mt-4 py-6 text-xs font-bold tracking-widest uppercase rounded-full">
            <a href="tel:+212681032037">
              06 81 03 20 37
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
