export function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="text-xl font-sans font-bold tracking-tighter uppercase">
                L'ATELIER GROUPE
              </span>
            </a>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            <a href="#services" className="text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors">À Propos</a>
            <a href="#testimonials" className="text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors">Avis</a>
            <a href="#contact" className="text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors">Contact</a>
          </nav>

        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} L'ATELIER GROUPE</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">MENTIONS LÉGALES</a>
            <a href="#" className="hover:text-foreground transition-colors">CONFIDENTIALITÉ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
