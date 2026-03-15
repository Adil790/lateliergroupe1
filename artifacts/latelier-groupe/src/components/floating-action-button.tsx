import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down a bit to avoid clashing with hero CTAs
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="tel:0681032037"
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center justify-center transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-90 pointer-events-none"
      }`}
      aria-label="Appeler maintenant"
    >
      <div className="relative group">
        {/* Pulse ring animation */}
        <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping opacity-75"></div>
        <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse delay-75"></div>
        
        {/* Button body */}
        <div className="relative w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl hover:bg-primary/90 transition-colors hover:scale-105 duration-300">
          <Phone className="w-7 h-7" strokeWidth={2} />
        </div>
        
        {/* Tooltip on hover */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <div className="bg-foreground text-white text-sm font-medium py-2 px-4 rounded-sm shadow-xl flex items-center gap-2">
            Appeler: <span className="text-primary font-bold tracking-wider">06 81 03 20 37</span>
            {/* Arrow */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[-4px] w-2 h-2 bg-foreground rotate-45"></div>
          </div>
        </div>
      </div>
    </a>
  );
}
