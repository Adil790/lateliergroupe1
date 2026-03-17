import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/latelier_by_mamy";
const HANDLE = "@latelier_by_mamy";

export function InstagramSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8">

          {/* Animated icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] flex items-center justify-center shadow-lg"
          >
            <Instagram className="text-white" size={30} />
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-3"
          >
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">
              Suivez-nous sur Instagram
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tighter text-foreground uppercase">
              {HANDLE}
            </h2>
            <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
              Découvrez nos dernières créations, tendances coiffure et moments du salon directement sur notre Instagram.
            </p>
          </motion.div>

          {/* CTA button */}
          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
            }}
          >
            <Instagram size={16} />
            Voir notre Instagram
          </motion.a>

        </div>
      </div>
    </section>
  );
}
