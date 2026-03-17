import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "photo-1.jpg", alt: "Intérieur du salon L'Atelier Groupe El Jadida" },
  { src: "photo-3.jpg", alt: "Coiffeur expert à L'Atelier Groupe El Jadida" },
  { src: "photo-4.jpg", alt: "Coiffeur homme à El Jadida - L'Atelier Groupe" },
  { src: "photo-2.jpg", alt: "Entrée du salon L'Atelier Groupe à El Jadida" },
  { src: "photo-5.jpg", alt: "Hammam luxe à El Jadida - L'Atelier Groupe spa" },
  { src: "photo-6.jpg", alt: "Nail bar et manucure à El Jadida - L'Atelier Groupe" },
  { src: "photo-7.jpg", alt: "Espace coiffure femme à El Jadida - L'Atelier Groupe" },
  { src: "photo-8.jpg", alt: "Hammam ambiance verte - L'Atelier Groupe El Jadida" },
];

// Duplicate for seamless infinite loop
const looped = [...images, ...images];

const CARD_WIDTH_VW = 38; // % of viewport width per card on desktop
const GAP = 16; // px gap between cards

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const SPEED = 0.04; // px per ms

  const step = useCallback((ts: number) => {
    if (lastTimeRef.current === null) lastTimeRef.current = ts;
    const dt = ts - lastTimeRef.current;
    lastTimeRef.current = ts;

    setOffset((prev) => {
      const track = trackRef.current;
      if (!track) return prev;
      // Half the track width = one full set of images
      const halfWidth = track.scrollWidth / 2;
      const next = prev + SPEED * dt;
      // Seamlessly jump back
      return next >= halfWidth ? next - halfWidth : next;
    });

    animRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      lastTimeRef.current = null;
      animRef.current = requestAnimationFrame(step);
    } else {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    }
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPaused, step]);

  const nudge = (dir: "left" | "right") => {
    setOffset((prev) => {
      const track = trackRef.current;
      if (!track) return prev;
      const halfWidth = track.scrollWidth / 2;
      const amount = track.clientWidth * 0.42;
      let next = dir === "right" ? prev + amount : prev - amount;
      if (next < 0) next += halfWidth;
      if (next >= halfWidth) next -= halfWidth;
      return next;
    });
  };

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      aria-label="Notre univers beauté à El Jadida"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-foreground uppercase">
              Notre Univers à El Jadida
            </h2>
            <p className="mt-4 text-muted-foreground text-sm max-w-lg">
              Découvrez l'ambiance unique de L'Atelier Groupe, votre destination beauté et bien-être à El Jadida.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3 flex-shrink-0 ml-8">
            <button
              onClick={() => nudge("left")}
              aria-label="Précédent"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-200 hover:bg-foreground hover:text-background"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => nudge("right")}
              aria-label="Suivant"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-200 hover:bg-foreground hover:text-background"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Full-width infinite strip */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-4"
          style={{ transform: `translateX(-${offset}px)`, willChange: "transform" }}
        >
          {looped.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 overflow-hidden rounded-xl shadow-md group"
              style={{
                width: `clamp(260px, ${CARD_WIDTH_VW}vw, 560px)`,
                aspectRatio: "4/3",
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${img.src}`}
                alt={img.alt}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 pointer-events-none select-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile arrows */}
      <div className="flex md:hidden items-center justify-center gap-4 mt-8">
        <button
          onClick={() => nudge("left")}
          aria-label="Précédent"
          className="w-11 h-11 rounded-full border border-border flex items-center justify-center transition-all duration-200 hover:bg-foreground hover:text-background"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => nudge("right")}
          aria-label="Suivant"
          className="w-11 h-11 rounded-full border border-border flex items-center justify-center transition-all duration-200 hover:bg-foreground hover:text-background"
        >
          <ChevronRight size={18} />
        </button>
      </div>

    </section>
  );
}
