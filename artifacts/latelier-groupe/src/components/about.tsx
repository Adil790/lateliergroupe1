import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Années\nd'expertise" },
  { value: "5k+", label: "Clients\nsatisfaits" },
  { value: "7j/7", label: "Ouvert\ntous les jours" },
];

export function About() {
  return (
    <section id="about" className="bg-background overflow-hidden">

      {/* Top label bar */}
      <div className="border-t border-b border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-5 flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">À Propos</span>
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">El Jadida, Maroc</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image — left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/photo-2.jpg`}
                alt="Façade du salon L'Atelier Groupe à El Jadida"
                className="w-full h-full object-cover"
              />
              {/* Floating tag */}
              <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Depuis</p>
                <p className="text-2xl font-bold tracking-tight text-foreground">2010</p>
              </div>
            </div>
          </motion.div>

          {/* Text — right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="order-1 lg:order-2 flex flex-col gap-10"
          >
            <div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6">Notre histoire</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tighter text-foreground leading-[0.95] uppercase">
                Le meilleur salon de beauté à El&nbsp;Jadida
              </h2>
            </div>

            <div className="space-y-5 text-muted-foreground text-base leading-relaxed max-w-lg">
              <p>
                Chez L'Atelier Groupe à El Jadida, nous croyons que chaque individu possède une beauté unique qui ne demande qu'à être révélée. Fondé sur l'exigence et le raffinement, notre salon est un véritable havre de paix.
              </p>
              <p>
                Nos experts en coiffure homme, coiffure femme, hammam et massage à El Jadida vous offrent une écoute attentive et des conseils personnalisés — ouverts 7j/7.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((s) => (
                <div key={s.value} className="border border-border rounded-xl p-5">
                  <p className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground">{s.value}</p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground whitespace-pre-line leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
