import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const headlineText = "L'EXCELLENCE DE VOTRE STYLE";

export function Hero() {
  const words = headlineText.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="L'Atelier Groupe Interior"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Lighter, minimal overlay */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white mt-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <span className="block font-sans font-semibold tracking-[0.3em] uppercase text-xs md:text-sm text-white/90">
              Salon de Beauté & Spa
            </span>
          </motion.div>
          
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2 mb-8"
          >
            {words.map((word, index) => (
              <motion.span
                variants={child}
                key={index}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-sans font-bold tracking-tighter leading-[0.85] uppercase"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-sm md:text-base text-white/80 max-w-xl mx-auto font-sans font-medium tracking-wide leading-relaxed mb-12"
          >
            UN ESPACE DÉDIÉ À LA COIFFURE, AUX SOINS ET AU BIEN-ÊTRE. 
            DÉCOUVREZ UNE EXPÉRIENCE PREMIUM SUR-MESURE.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto text-xs py-7 px-10 rounded-full uppercase tracking-widest font-bold bg-white text-black hover:bg-white/90 transition-all duration-300"
            >
              <a href="#contact">
                Prendre Rendez-vous
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-xs py-7 px-10 rounded-full uppercase tracking-widest font-bold border-white/50 text-white hover:bg-white hover:text-black bg-transparent transition-all duration-300"
            >
              <a href="tel:0681032037">
                Nous Appeler
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Modern Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
