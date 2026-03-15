import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8"
          >
            <div>
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                Notre Histoire
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                Notre passion, <br/>
                <span className="italic font-light">votre beauté.</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed">
              <p>
                Chez L'Atelier Groupe, nous croyons que chaque individu possède une beauté unique qui ne demande qu'à être révélée. Fondé sur l'exigence et le raffinement, notre salon est un véritable havre de paix où le temps suspend son vol.
              </p>
              <p>
                Nos experts, constamment formés aux dernières techniques, vous offrent une écoute attentive et des conseils personnalisés. Que vous souhaitiez raviver votre coupe, vous offrir un moment de pure détente au spa, ou parfaire votre style, nous mettons notre savoir-faire au service de vos envies.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <h4 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-1">15<span className="text-primary">+</span></h4>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Années<br/>d'expertise</p>
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-1">5<span className="text-primary">k</span></h4>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Clients<br/>satisfaits</p>
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-1">8</h4>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Experts<br/>passionnés</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 relative w-full"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-sm overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/about-spa.png`}
                alt="Spa and Wellness setup"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[10px] border-background/20 mix-blend-overlay"></div>
            </div>
            
            {/* Decorative block */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/10 rounded-sm -z-10 hidden md:block" />
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary/5 rounded-sm -z-10 hidden md:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
