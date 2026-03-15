import { motion } from "framer-motion";
import { Scissors, User, Sparkles, Flower2, Hand, Palette } from "lucide-react";

const servicesList = [
  {
    icon: Scissors,
    title: "Coiffure Femme",
    description: "Coupes tendances, brushing, soins profonds. Révélez la beauté naturelle de vos cheveux avec nos experts visagistes."
  },
  {
    icon: User,
    title: "Coiffure Homme & Barbier",
    description: "Taille de barbe précise, dégradés, soins spécifiques. Un entretien impeccable pour le gentleman moderne."
  },
  {
    icon: Palette,
    title: "Coloration & Mèches",
    description: "Balayage, ombré hair, coloration sans ammoniaque. Des nuances sur-mesure pour sublimer votre teint."
  },
  {
    icon: Sparkles,
    title: "Soins Visage",
    description: "Soins anti-âge, hydratation profonde, pureté. Une peau éclatante grâce à nos protocoles de soin premium."
  },
  {
    icon: Flower2,
    title: "Massages & Spa",
    description: "Détente absolue, modelages relaxants, rituels évasion. Lâchez prise entre les mains de nos praticiennes."
  },
  {
    icon: Hand,
    title: "Manucure & Beauté",
    description: "Soin des mains et pieds, vernis semi-permanent, beauté du regard. Les détails qui font la perfection."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            Nos Prestations
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-foreground"
          >
            L'Art de Prendre Soin <span className="italic font-light">de Vous</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-primary mx-auto mt-8"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-card group p-8 md:p-10 rounded-sm border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors duration-500" />
                
                <div className="w-16 h-16 rounded-full bg-secondary/80 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 relative z-10">
                  <Icon strokeWidth={1.5} size={28} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4 text-foreground relative z-10">{service.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed relative z-10">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
