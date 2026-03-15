export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-serif font-semibold tracking-wide">
                L'Atelier <span className="text-primary italic">Groupe</span>
              </span>
            </a>
            <p className="text-white/60 font-light text-sm leading-relaxed mb-6">
              L'excellence au cœur de votre style. Un espace premium dédié à la beauté, la coiffure et au bien-être pour hommes et femmes.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 tracking-wide">Contact</h4>
            <ul className="space-y-4 text-white/70 font-light text-sm">
              <li>123 Avenue de l'Excellence<br/>75008 Paris</li>
              <li>
                <a href="tel:0681032037" className="hover:text-primary transition-colors">06 81 03 20 37</a>
              </li>
              <li>
                <a href="mailto:contact@latelier-groupe.fr" className="hover:text-primary transition-colors">contact@latelier-groupe.fr</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 tracking-wide">Liens Rapides</h4>
            <ul className="space-y-3 text-white/70 font-light text-sm">
              <li><a href="#services" className="hover:text-primary transition-colors">Nos Prestations</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Notre Histoire</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Avis Clients</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Réservation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 tracking-wide">Horaires</h4>
            <ul className="space-y-3 text-white/70 font-light text-sm">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Lun - Ven</span> <span>09:00 - 20:00</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Samedi</span> <span>09:00 - 18:00</span>
              </li>
              <li className="flex justify-between pb-2 text-primary">
                <span>Dimanche</span> <span>Fermé</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-light">
          <p>&copy; {new Date().getFullYear()} L'Atelier Groupe. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
