import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Fatima Benali", initials: "FB", color: "#4285F4", rating: 5, time: "il y a 2 semaines", text: "Un salon magnifique où l'on se sent tout de suite à l'aise. L'équipe a su exactement ce que je voulais pour ma couleur. Résultat naturel et lumineux. Je recommande les yeux fermés !" },
  { name: "Youssef El Amrani", initials: "YE", color: "#EA4335", rating: 5, time: "il y a 1 mois", text: "Service irréprochable. La taille de barbe est millimétrée et le cadre est très relaxant. C'est devenu mon rendez-vous mensuel incontournable. Une vraie pause détente." },
  { name: "Nadia Chraibi", initials: "NC", color: "#34A853", rating: 5, time: "il y a 3 semaines", text: "J'ai testé le massage évasion et c'était une parenthèse de douceur exceptionnelle. Les praticiennes sont douces et professionnelles. Un vrai bonheur pour lâcher prise !" },
  { name: "Karim Lahlou", initials: "KL", color: "#FBBC05", rating: 5, time: "il y a 5 jours", text: "Le meilleur barbier d'El Jadida sans hésiter. Dégradé parfait, barbe au millimètre. L'ambiance est top, il y a même un billard ! On se détend vraiment bien entre amis." },
  { name: "Samira Idrissi", initials: "SI", color: "#4285F4", rating: 5, time: "il y a 2 mois", text: "Le hammam est absolument magnifique. Une expérience de détente totale dans un cadre luxueux. Les soins du visage sont également excellents. Je reviendrai sans hésiter !" },
  { name: "Omar Tazi", initials: "OT", color: "#EA4335", rating: 5, time: "il y a 1 semaine", text: "Première visite et je suis conquis. Accueil chaleureux, coupe propre, équipe professionnelle. L'endroit est moderne et très propre. Deviendra mon salon habituel à El Jadida." },
  { name: "Zineb Mansouri", initials: "ZM", color: "#34A853", rating: 5, time: "il y a 3 mois", text: "Le nail bar est superbe ! Décoration soignée, vernis de qualité et technicienne très appliquée. Ma manucure a duré 3 semaines sans aucun problème. Vraiment au top." },
  { name: "Amine Berrada", initials: "AB", color: "#FBBC05", rating: 5, time: "il y a 2 semaines", text: "Superbe découverte. Coupe moderne, conseil personnalisé et ambiance détendue. On voit que l'équipe aime ce qu'elle fait. Rapport qualité-prix excellent pour El Jadida." },
  { name: "Houda El Fassi", initials: "HE", color: "#4285F4", rating: 5, time: "il y a 1 mois", text: "Coloration et coupe parfaites ! Ma coloriste a pris le temps d'écouter mes envies et le résultat dépasse mes attentes. Salon propre, moderne et bien équipé. Bravo à toute l'équipe !" },
  { name: "Reda Benhaddou", initials: "RB", color: "#EA4335", rating: 5, time: "il y a 4 jours", text: "Le massage californien était incroyable, je me suis endormi tellement c'était relaxant. Le spa est bien séparé et très propre. Personnel attentionné. Je recommande à 100%." },
];

const looped = [...testimonials, ...testimonials, ...testimonials];
const SPEED = 0.025;

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={13} className={i < count ? "fill-[#FBBC05] text-[#FBBC05]" : "fill-muted text-muted"} />
      ))}
    </div>
  );
}

function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ backgroundColor: color }}>
      {initials}
    </div>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const [, forceRender] = useState(0);
  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const velocity = useRef(0);
  const lastDragX = useRef(0);
  const lastDragTime = useRef(0);

  const getOneSet = () => {
    const track = trackRef.current;
    if (!track) return 1;
    return track.scrollWidth / 3;
  };

  const clamp = (val: number) => {
    const size = getOneSet();
    let v = val % (size * 2);
    if (v < 0) v += size * 2;
    return v;
  };

  const tick = useCallback((ts: number) => {
    if (isDragging.current) { animRef.current = requestAnimationFrame(tick); return; }
    if (lastTimeRef.current === null) lastTimeRef.current = ts;
    const dt = Math.min(ts - lastTimeRef.current, 50);
    lastTimeRef.current = ts;
    offsetRef.current = clamp(offsetRef.current + SPEED * dt);
    forceRender(n => n + 1);
    animRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(tick);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [tick]);

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
    if (dt > 0) { velocity.current = (lastDragX.current - e.clientX) / dt; lastDragX.current = e.clientX; lastDragTime.current = now; }
    offsetRef.current = clamp(dragStartOffset.current + (dragStartX.current - e.clientX));
    forceRender(n => n + 1);
  };

  const onPointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    lastTimeRef.current = null;
    const applyMomentum = () => {
      if (Math.abs(velocity.current) < 0.01) return;
      velocity.current *= 0.92;
      offsetRef.current = clamp(offsetRef.current + velocity.current * 16);
      forceRender(n => n + 1);
      requestAnimationFrame(applyMomentum);
    };
    requestAnimationFrame(applyMomentum);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary/30 overflow-hidden">

      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4">Avis Google</p>
            <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-foreground uppercase leading-[0.9]">
              Ce qu'ils disent<br/>de nous
            </h2>
          </div>
          <div className="flex items-center gap-3 bg-background border border-border rounded-2xl px-5 py-4 self-start md:self-auto shadow-sm">
            <GoogleIcon />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold text-foreground leading-none">5.0</span>
                <Stars count={5} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Basé sur 10+ avis Google</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Infinite drag carousel */}
      <div className="overflow-hidden select-none">
        <div
          ref={trackRef}
          className="flex gap-4 cursor-grab active:cursor-grabbing px-4 md:px-8"
          style={{ transform: `translateX(-${offsetRef.current}px)`, willChange: "transform", touchAction: "pan-y" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {looped.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-background border border-border rounded-2xl p-6 shadow-sm flex flex-col gap-4"
              style={{ width: "clamp(280px, 32vw, 420px)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar initials={t.initials} color={t.color} />
                  <div>
                    <p className="font-bold text-sm text-foreground leading-tight">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.time}</p>
                  </div>
                </div>
                <GoogleIcon />
              </div>

              {/* Stars */}
              <Stars count={t.rating} />

              {/* Review text */}
              <p className="text-sm text-foreground/80 leading-relaxed flex-grow">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
