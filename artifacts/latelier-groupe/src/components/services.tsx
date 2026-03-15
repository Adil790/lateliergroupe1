import { motion } from "framer-motion";

const servicesList = [
  {
    num: "01",
    title: "COIFFURE FEMME",
    description: "Coupes tendances, brushing, soins profonds. Révélez la beauté naturelle de vos cheveux avec nos experts visagistes."
  },
  {
    num: "02",
    title: "COIFFURE HOMME & BARBIER",
    description: "Taille de barbe précise, dégradés, soins spécifiques. Un entretien impeccable pour le gentleman moderne."
  },
  {
    num: "03",
    title: "COLORATION & MÈCHES",
    description: "Balayage, ombré hair, coloration sans ammoniaque. Des nuances sur-mesure pour sublimer votre teint."
  },
  {
    num: "04",
    title: "SOINS VISAGE",
    description: "Soins anti-âge, hydratation profonde, pureté. Une peau éclatante grâce à nos protocoles de soin premium."
  },
  {
    num: "05",
    title: "MASSAGES & SPA",
    description: "Détente absolue, modelages relaxants, rituels évasion. Lâchez prise entre les mains de nos praticiennes."
  },
  {
    num: "06",
    title: "MANUCURE & BEAUTÉ",
    description: "Soin des mains et pieds, vernis semi-permanent, beauté du regard. Les détails qui font la perfection."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mb-20 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tighter text-foreground uppercase"
          >
            L'ART DE PRENDRE SOIN DE VOUS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-16">
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="group border-t border-border pt-6 flex flex-col items-start text-left"
            >
              <div className="flex justify-between items-end w-full mb-4">
                <h3 className="text-xl md:text-2xl font-sans font-bold tracking-tight uppercase text-foreground">{service.title}</h3>
                <span className="text-sm font-sans font-semibold text-muted-foreground">{service.num}</span>
              </div>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
