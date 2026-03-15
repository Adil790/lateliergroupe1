import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneCall, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="L'Atelier Groupe Interior"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark wash gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <span className="block text-primary font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-4 drop-shadow-md">
            Salon de Beauté & Spa
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 drop-shadow-lg">
            L'excellence au cœur de <br className="hidden md:block" />
            <span className="italic font-light">votre style</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
            Un espace dédié à la coiffure pour hommes et femmes, ainsi qu'aux soins esthétiques et au bien-être. Découvrez une expérience premium sur-mesure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto text-base py-6 px-8 rounded-sm uppercase tracking-wider font-semibold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              <a href="#contact">
                <Calendar className="w-5 h-5 mr-2" />
                Prendre Rendez-vous
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base py-6 px-8 rounded-sm uppercase tracking-wider font-semibold bg-white/10 border-white/30 text-white hover:bg-white hover:text-black backdrop-blur-sm transition-all duration-300"
            >
              <a href="tel:0681032037">
                <PhoneCall className="w-5 h-5 mr-2" />
                Nous Appeler
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Découvrir</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 w-full h-1/2 bg-white"
            animate={{ top: ["-50%", "150%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
