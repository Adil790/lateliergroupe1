import { Phone } from "lucide-react";

export function FloatingActionButton() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-background border-t border-border">
      <a
        href="tel:0681032037"
        className="flex items-center justify-center w-full py-5 text-sm font-bold tracking-[0.2em] uppercase text-foreground hover:bg-secondary transition-colors"
        aria-label="Appeler maintenant"
      >
        <Phone className="w-4 h-4 mr-3" />
        APPELER — 06 81 03 20 37
      </a>
    </div>
  );
}
