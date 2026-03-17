import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Gallery() {
  const images = [
    {
      src: `${import.meta.env.BASE_URL}images/photo-1.jpg`,
      alt: "Intérieur du salon L'Atelier Groupe El Jadida - espace barbier et billard",
    },
    {
      src: `${import.meta.env.BASE_URL}images/photo-3.jpg`,
      alt: "Coiffeur expert à L'Atelier Groupe El Jadida",
    },
    {
      src: `${import.meta.env.BASE_URL}images/photo-4.jpg`,
      alt: "Coiffeur homme à El Jadida - L'Atelier Groupe en pleine activité",
    },
    {
      src: `${import.meta.env.BASE_URL}images/photo-2.jpg`,
      alt: "Entrée du salon L'Atelier Groupe à El Jadida",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background relative overflow-hidden" aria-label="Notre univers beauté à El Jadida">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-foreground uppercase">
              Notre Univers à El Jadida
            </h2>
            <p className="mt-4 text-muted-foreground text-sm max-w-lg">
              Découvrez l'ambiance unique de L'Atelier Groupe, votre destination beauté et bien-être à El Jadida.
            </p>
          </div>

          {/* Arrow controls */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0 ml-8">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Précédent"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-200 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Suivant"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-200 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-4 cursor-grab active:cursor-grabbing"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[38vw] overflow-hidden rounded-lg shadow-md group"
              style={{ scrollSnapAlign: "start", aspectRatio: "4/3" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Précédent"
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center transition-all duration-200 hover:bg-foreground hover:text-background disabled:opacity-30"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Suivant"
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center transition-all duration-200 hover:bg-foreground hover:text-background disabled:opacity-30"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
