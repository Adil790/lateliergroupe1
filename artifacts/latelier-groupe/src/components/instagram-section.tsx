import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, Bookmark } from "lucide-react";

const accounts = [
  {
    handle: "latelier_by_mamy",
    url: "https://www.instagram.com/latelier_by_mamy",
    label: "@latelier_by_mamy",
    posts: [
      { src: "photo-7.jpg", likes: "2 103", caption: "A Passion For Hair 💇‍♀️ Notre espace femme vous attend.", tags: "#coiffure #femme #eljadida" },
      { src: "photo-5.jpg", likes: "1 751", caption: "Le hammam de vos rêves 💙 Une parenthèse de luxe.", tags: "#hammam #spa #eljadida #detente" },
      { src: "photo-8.jpg", likes: "1 432", caption: "Soirée hammam inoubliable 💚 Réservez maintenant.", tags: "#hammam #luxury #spa #latelier" },
      { src: "photo-9.jpg", likes: "1 066", caption: "Notre Nail Bar nouvelle génération 💅 El Jadida.", tags: "#nails #beauty #eljadida" },
      { src: "photo-6.jpg", likes: "843",   caption: "Nail Bar ✨ Des mains parfaites en toutes circonstances.", tags: "#nailbar #manucure #eljadida" },
    ],
  },
  {
    handle: "lateliervip1",
    url: "https://www.instagram.com/lateliervip1/",
    label: "@lateliervip1",
    posts: [
      { src: "photo-1.jpg", likes: "1 284", caption: "L'ambiance qui nous définit ✂️ Bienvenue dans notre univers.", tags: "#coiffeur #eljadida #barbershop" },
      { src: "photo-4.jpg", likes: "987",   caption: "Busy day at L'Atelier 🔥 On vous attend !", tags: "#barbier #eljadida #latelier" },
      { src: "photo-3.jpg", likes: "1 620", caption: "Style & précision 💈 Le meilleur barbier d'El Jadida.", tags: "#barbier #coiffeur #eljadida" },
      { src: "photo-2.jpg", likes: "3 218", caption: "L'Atelier vous ouvre ses portes 🚪 Venez nous rendre visite.", tags: "#lateliervip #eljadida #salon" },
    ],
  },
];

const SPEED = 0.03;
const IG_GRADIENT = "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)";

function InstagramIcon() {
  return (
    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: IG_GRADIENT }}>
      <Instagram size={15} className="text-white" />
    </div>
  );
}

function Carousel({ account }: { account: typeof accounts[0] }) {
  const looped = [...account.posts, ...account.posts, ...account.posts];
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

  const getOneSet = () => (trackRef.current?.scrollWidth ?? 1) / 3;
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
    offsetRef.current = 0;
    lastTimeRef.current = null;
    animRef.current = requestAnimationFrame(tick);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [tick, account.handle]);

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
        {looped.map((post, i) => (
          <a
            key={i}
            href={account.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-background border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col group"
            style={{ width: "clamp(240px, 28vw, 340px)" }}
            draggable={false}
          >
            <div className="flex items-center gap-2.5 px-4 py-3 border-b border-border">
              <InstagramIcon />
              <div>
                <p className="text-xs font-bold text-foreground leading-tight">{account.handle}</p>
                <p className="text-[10px] text-muted-foreground">El Jadida, Maroc</p>
              </div>
              <Instagram size={16} className="ml-auto text-muted-foreground/40" />
            </div>
            <div className="aspect-square w-full overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/${post.src}`}
                alt={post.caption}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
              />
            </div>
            <div className="px-4 pt-3 pb-1 flex items-center gap-3">
              <Heart size={20} className="text-foreground/70" />
              <MessageCircle size={20} className="text-foreground/70" />
              <Bookmark size={20} className="text-foreground/70 ml-auto" />
            </div>
            <div className="px-4 pb-4 pt-1">
              <p className="text-xs font-bold text-foreground mb-1">{post.likes} J'aime</p>
              <p className="text-xs text-foreground/80 leading-relaxed line-clamp-2">
                <span className="font-bold">{account.handle} </span>{post.caption}
              </p>
              <p className="text-[10px] text-muted-foreground mt-1">{post.tags}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export function InstagramSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = accounts[activeIdx];

  return (
    <section className="py-24 md:py-32 bg-secondary/30 overflow-hidden">

      {/* Header */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4">Nos dernières publications</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-foreground uppercase leading-[0.9]">
              Suivez-nous<br />sur Instagram
            </h2>

            {/* Account tab switcher */}
            <div className="flex items-center gap-2 p-1.5 bg-background border border-border rounded-2xl self-start md:self-auto shadow-sm">
              {accounts.map((acc, i) => (
                <button
                  key={acc.handle}
                  onClick={() => setActiveIdx(i)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 ${
                    activeIdx === i
                      ? "text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  style={activeIdx === i ? { background: IG_GRADIENT } : {}}
                >
                  <Instagram size={13} />
                  {acc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active profile link */}
          <div className="mt-6">
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <Instagram size={13} />
              Voir le profil {active.label} →
            </a>
          </div>
        </motion.div>
      </div>

      {/* Carousel — re-mounts on account switch */}
      <motion.div
        key={activeIdx}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Carousel account={active} />
      </motion.div>

    </section>
  );
}
