import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";

const IG_GRADIENT = "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)";

const accounts = [
  {
    handle: "latelier_by_mamy",
    label: "@latelier_by_mamy",
    url: "https://www.instagram.com/latelier_by_mamy",
    description: "Coiffure femme, spa & hammam — El Jadida",
    posts: "127",
    followers: "4 820",
    color: "#E1306C",
  },
  {
    handle: "lateliervip1",
    label: "@lateliervip1",
    url: "https://www.instagram.com/lateliervip1/",
    description: "Barbier & coiffure homme — L'Atelier VIP",
    posts: "94",
    followers: "3 210",
    color: "#833AB4",
  },
  {
    handle: "latelier.silver",
    label: "@latelier.silver",
    url: "https://www.instagram.com/latelier.silver",
    description: "L'Atelier Silver — El Jadida",
    posts: "68",
    followers: "2 560",
    color: "#405DE6",
  },
];

function IgAvatar({ handle, color }: { handle: string; color: string }) {
  return (
    <div
      className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg"
      style={{ background: IG_GRADIENT, border: "3px solid transparent" }}
    >
      <Instagram size={32} className="text-white" />
    </div>
  );
}

export function InstagramSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = accounts[activeIdx];

  return (
    <section className="py-24 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Retrouvez-nous sur Instagram
          </p>
          <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-foreground uppercase leading-[0.9]">
            Suivez-nous<br />sur Instagram
          </h2>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-2 mb-10">
          {accounts.map((acc, i) => (
            <button
              key={acc.handle}
              onClick={() => setActiveIdx(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold tracking-wide border transition-all duration-300 ${
                activeIdx === i
                  ? "text-white border-transparent shadow-md"
                  : "bg-background border-border text-muted-foreground hover:text-foreground"
              }`}
              style={activeIdx === i ? { background: IG_GRADIENT } : {}}
            >
              <Instagram size={13} />
              {acc.label}
            </button>
          ))}
        </div>

        {/* Active account card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="bg-background border border-border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm max-w-2xl"
          >
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: IG_GRADIENT }}
              >
                <Instagram size={38} className="text-white" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold tracking-tight text-foreground mb-1">{active.label}</h3>
              <p className="text-sm text-muted-foreground mb-6">{active.description}</p>

              {/* Stats */}
              <div className="flex justify-center md:justify-start gap-8 mb-8">
                <div>
                  <p className="text-xl font-bold text-foreground">{active.posts}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Publications</p>
                </div>
                <div className="border-l border-border pl-8">
                  <p className="text-xl font-bold text-foreground">{active.followers}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Abonnés</p>
                </div>
              </div>

              {/* CTA */}
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
                style={{ background: IG_GRADIENT }}
              >
                <Instagram size={15} />
                Voir le profil
                <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All accounts quick links */}
        <div className="mt-8 flex flex-wrap gap-4">
          {accounts.map((acc) => (
            <a
              key={acc.handle}
              href={acc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              <Instagram size={12} />
              {acc.label}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
