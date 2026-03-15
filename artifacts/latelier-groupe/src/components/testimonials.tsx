import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Laurent",
    service: "Coloration & Mèches",
    text: "Un salon magnifique où l'on se sent tout de suite à l'aise. L'équipe a su exactement ce que je voulais pour ma couleur. Le résultat est naturel et lumineux. Je recommande les yeux fermés !",
  },
  {
    name: "Thomas Dubois",
    service: "Coupe & Barbier",
    text: "Service irréprochable. La taille de barbe est millimétrée et le cadre est très relaxant. C'est devenu mon rendez-vous mensuel incontournable. Une vraie pause détente.",
  },
  {
    name: "Camille Morel",
    service: "Soin Visage & Massage",
    text: "J'ai testé le massage évasion et c'était une parenthèse de douceur exceptionnelle. Les praticiennes sont douces et professionnelles. Un vrai bonheur pour lâcher prise.",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Avis Clients
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-foreground"
          >
            Ce qu'ils <span className="italic font-light">disent de nous</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-secondary/40 p-8 rounded-sm relative"
            >
              <div className="text-primary font-serif text-6xl absolute top-4 left-6 opacity-20">"</div>
              <div className="flex gap-1 mb-6 mt-4 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 font-light italic leading-relaxed mb-8 relative z-10">
                {t.text}
              </p>
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-foreground font-serif">{t.name}</h4>
                <p className="text-sm text-primary">{t.service}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
