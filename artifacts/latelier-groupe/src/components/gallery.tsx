import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "photo-1.jpg", alt: "Intérieur du salon L'Atelier Groupe El Jadida" },
  { src: "photo-3.jpg", alt: "Coiffeur expert à L'Atelier Groupe El Jadida" },
  { src: "photo-4.jpg", alt: "Coiffeur homme à El Jadida — L'Atelier Groupe" },
  { src: "photo-2.jpg", alt: "Entrée du salon L'Atelier Groupe à El Jadida" },
  { src: "photo-5.jpg", alt: "Hammam luxe à El Jadida — L'Atelier Groupe spa" },
  { src: "photo-6.jpg", alt: "Nail bar et manucure à El Jadida — L'Atelier Groupe" },
  { src: "photo-7.jpg", alt: "Espace coiffure femme à El Jadida — L'Atelier Groupe" },
  { src: "photo-8.jpg", alt: "Hammam ambiance verte — L'Atelier Groupe El Jadida" },
  { src: "photo-9.jpg", alt: "Nail bar moderne à El Jadida — L'Atelier Groupe" },
];

const looped = [...images, ...images, ...images]; // triple for seamless loop
const SPEED = 0.035; // px per ms

export function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const [, forceRender] = useState(0);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Drag state
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const velocity = useRef(0);
  const lastDragX = useRef(0);
  const lastDragTime = useRef(0);

  const getHalfWidth = () => {
    const track = trackRef.current;
    if (!track) return 1;
    return track.scrollWidth / 3; // one-third since we tripled
  };

  const clampOffset = (val: number) => {
    const half = getHalfWidth();
    let v = val % (half * 2);
    if (v < 0) v += half * 2;
    return v;
  };

  const tick = useCallback((ts: number) => {
    if (isDragging.current) {
      animRef.current = requestAnimationFrame(tick);
      return;
    }
    if (lastTimeRef.current === null) lastTimeRef.current = ts;
    const dt = Math.min(ts - lastTimeRef.current, 50);
    lastTimeRef.current = ts;
    offsetRef.current = clampOffset(offsetRef.current + SPEED * dt);
    forceRender((n) => n + 1);
    animRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(tick);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [tick]);

  // Pointer (mouse + touch) drag handlers
  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
    lastDragX.current = e.clientX;
    lastDragTime.current = performance.now();
    velocity.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const now = performance.now();
    const dt = now - lastDragTime.current;
    if (dt > 0) {
      velocity.current = (lastDragX.current - e.clientX) / dt;
      lastDragX.current = e.clientX;
      lastDragTime.current = now;
    }
    const delta = dragStartX.current - e.clientX;
    offsetRef.current = clampOffset(dragStartOffset.current + delta);
    forceRender((n) => n + 1);
  };

  const onPointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    lastTimeRef.current = null;
    // Apply momentum
    const applyMomentum = () => {
      if (Math.abs(velocity.current) < 0.01) return;
      velocity.current *= 0.92;
      offsetRef.current = clampOffset(offsetRef.current + velocity.current * 16);
      forceRender((n) => n + 1);
      requestAnimationFrame(applyMomentum);
    };
    requestAnimationFrame(applyMomentum);
  };

  const nudge = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const amount = track.clientWidth * 0.42;
    offsetRef.current = clampOffset(
      offsetRef.current + (dir === "right" ? amount : -amount)
    );
    forceRender((n) => n + 1);
  };

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-background relative overflow-hidden"
      aria-label="Notre univers beauté à El Jadida"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
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
            <button onClick={() => nudge("left")} aria-label="Précédent"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-200 hover:bg-foreground hover:text-background">
              <ChevronLeft size={20} />
            </button>
            <button onClick={() => nudge("right")} aria-label="Suivant"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-all duration-200 hover:bg-foreground hover:text-background">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Infinite strip */}
      <div className="overflow-hidden select-none">
        <div
          ref={trackRef}
          className="flex gap-4 cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(-${offsetRef.current}px)`,
            willChange: "transform",
            touchAction: "pan-y",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {looped.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 overflow-hidden rounded-xl shadow-md group"
              style={{ width: "clamp(240px, 36vw, 520px)", aspectRatio: "4/3" }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${img.src}`}
                alt={img.alt}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile arrows */}
      <div className="flex md:hidden items-center justify-center gap-4 mt-8">
        <button onClick={() => nudge("left")} aria-label="Précédent"
          className="w-11 h-11 rounded-full border border-border flex items-center justify-center transition-all duration-200 hover:bg-foreground hover:text-background">
          <ChevronLeft size={18} />
        </button>
        <button onClick={() => nudge("right")} aria-label="Suivant"
          className="w-11 h-11 rounded-full border border-border flex items-center justify-center transition-all duration-200 hover:bg-foreground hover:text-background">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
