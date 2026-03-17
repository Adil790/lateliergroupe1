import { Instagram } from "lucide-react";

export function Footer() {
  const services = [
    { label: "Coiffeur Femme El Jadida", href: "#services" },
    { label: "Coiffeur Homme El Jadida", href: "#services" },
    { label: "Spa & Massage El Jadida", href: "#services" },
    { label: "Hammam El Jadida", href: "#services" },
    { label: "Soin Visage El Jadida", href: "#services" },
    { label: "Manucure El Jadida", href: "#services" },
  ];

  return (
    <footer className="bg-background text-foreground border-t border-border" aria-label="Pied de page">
      {/* SEO keyword block */}
      <div className="border-b border-border py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand + location */}
            <div>
              <a href="#" aria-label="L'Atelier Groupe - Accueil">
                <span className="text-xl font-sans font-bold tracking-tighter uppercase block mb-4">
                  L'ATELIER GROUPE
                </span>
              </a>
              <address className="not-italic text-sm text-muted-foreground leading-relaxed space-y-1">
                <p className="font-semibold text-foreground">Coiffeur & Spa — El Jadida, Maroc</p>
                <p>El Jadida, Maroc</p>
                <a href="tel:+212681032037" className="hover:text-primary transition-colors block">+212 6 81 03 20 37</a>
                <a href="https://wa.me/212681032037" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block">WhatsApp</a>
                <a href="https://www.instagram.com/latelier_by_mamy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 mt-1">
                  <Instagram size={14} />
                  @latelier_by_mamy
                </a>
              </address>
              <p className="text-xs text-muted-foreground mt-4">
                Ouvert 7j/7 · 10h00 – 22h00
              </p>
            </div>

            {/* Services SEO links */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-5">Nos Services à El Jadida</h3>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="text-sm text-foreground hover:text-primary transition-colors">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation -->*/}
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mb-5">Navigation</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="text-sm text-foreground hover:text-primary transition-colors">Services</a></li>
                <li><a href="#about" className="text-sm text-foreground hover:text-primary transition-colors">À Propos</a></li>
                <li><a href="#gallery" className="text-sm text-foreground hover:text-primary transition-colors">Notre Univers</a></li>
                <li><a href="#testimonials" className="text-sm text-foreground hover:text-primary transition-colors">Avis Clients</a></li>
                <li><a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">Contact & Réservation</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} L'Atelier Groupe El Jadida — Tous droits réservés</p>
          <p className="text-center text-xs text-muted-foreground/60">
            Coiffeur El Jadida · Spa El Jadida · Hammam El Jadida · Massage El Jadida
          </p>
          <div className="flex gap-6 uppercase tracking-wider">
            <a href="#" className="hover:text-foreground transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-foreground transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
