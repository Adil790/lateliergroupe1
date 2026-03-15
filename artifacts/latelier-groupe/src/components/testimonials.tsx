import { motion } from "framer-motion";

const testimonials = [
  {
    name: "SOPHIE LAURENT",
    service: "COLORATION & MÈCHES",
    text: "Un salon magnifique où l'on se sent tout de suite à l'aise. L'équipe a su exactement ce que je voulais pour ma couleur. Le résultat est naturel et lumineux. Je recommande les yeux fermés.",
  },
  {
    name: "THOMAS DUBOIS",
    service: "COUPE & BARBIER",
    text: "Service irréprochable. La taille de barbe est millimétrée et le cadre est très relaxant. C'est devenu mon rendez-vous mensuel incontournable. Une vraie pause détente.",
  },
  {
    name: "CAMILLE MOREL",
    service: "SOIN VISAGE & MASSAGE",
    text: "J'ai testé le massage évasion et c'était une parenthèse de douceur exceptionnelle. Les praticiennes sont douces et professionnelles. Un vrai bonheur pour lâcher prise.",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background border-y border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-foreground uppercase max-w-2xl leading-[0.9]"
          >
            CE QU'ILS DISENT DE NOUS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col"
            >
              <p className="text-xl md:text-2xl font-serif text-foreground leading-snug mb-8 flex-grow">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-bold text-xs font-sans tracking-[0.2em] uppercase text-foreground mb-1">{t.name}</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
