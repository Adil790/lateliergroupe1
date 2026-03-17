import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-12 lg:py-10"
          >
            <div>
              <h2 className="text-5xl md:text-7xl font-sans font-bold tracking-tighter text-foreground uppercase leading-[0.9]">
                Le meilleur salon de beauté à El Jadida
              </h2>
            </div>

            <div className="space-y-6 text-foreground font-sans font-medium text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                Chez L'Atelier Groupe à El Jadida, nous croyons que chaque individu possède une beauté unique qui ne demande qu'à être révélée. Fondé sur l'exigence et le raffinement, notre salon coiffure et spa est un véritable havre de paix au cœur d'El Jadida.
              </p>
              <p className="text-muted-foreground">
                Nos experts en coiffure homme, coiffure femme, hammam et massage à El Jadida, constamment formés aux dernières techniques, vous offrent une écoute attentive et des conseils personnalisés. Le meilleur coiffeur et spa d'El Jadida, ouvert 7j/7.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8">
              <div>
                <h4 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-foreground mb-2">15<span className="text-primary">+</span></h4>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-[0.15em]">Années<br/>d'expertise</p>
              </div>
              <div>
                <h4 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-foreground mb-2">5<span className="text-primary">k</span></h4>
                <p className="text-xs text-muted-foreground font-bold uppercase tracking-[0.15em]">Clients<br/>satisfaits</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full lg:max-w-lg mx-auto pt-10 lg:pt-0"
          >
            <div className="aspect-[4/3] w-full overflow-hidden shadow-2xl rounded-lg">
              <img
                src={`${import.meta.env.BASE_URL}images/about-salon.jpg`}
                alt="Intérieur du salon L'Atelier Groupe à El Jadida - coiffeur barbier"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
