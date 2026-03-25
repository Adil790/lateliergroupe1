import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "212681032037";
const WHATSAPP_MESSAGE = encodeURIComponent("Bonjour, je souhaite prendre rendez-vous chez L'Atelier Groupe.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const info = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "06 81 03 20 37",
    href: "tel:+212681032037",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "El Jadida, Maroc",
    href: null,
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun – Dim · 10:00 – 22:00",
    href: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-background" aria-label="Contact et réservation">

      {/* Top strip — label */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">Contact & Réservation</span>
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">El Jadida, Maroc</span>
        </div>
      </div>

      {/* Main block */}
      <div className="bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

            {/* Left — heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tighter uppercase leading-[0.9] text-background">
                Venez nous<br />voir.
              </h2>
              <p className="mt-8 text-background/60 text-base max-w-sm leading-relaxed">
                Réservez votre créneau en un message WhatsApp. Notre équipe vous répond rapidement.
              </p>
            </motion.div>

            {/* Right — info + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex-1 flex flex-col gap-10"
            >
              {/* Info rows */}
              <div className="divide-y divide-background/10">
                {info.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center justify-between py-5 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-background/70" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-background/50">{label}</span>
                    </div>
                    {href ? (
                      <a href={href} className="text-background font-semibold text-sm md:text-base hover:text-primary transition-colors text-right">
                        {value}
                      </a>
                    ) : (
                      <span className="text-background font-semibold text-sm md:text-base text-right">{value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between w-full bg-[#25D366] text-white rounded-2xl px-8 py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#25D366]/30"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-1">Réserver maintenant</p>
                  <p className="text-xl font-bold tracking-tight">WhatsApp · +212 6 81 03 20 37</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <MessageCircle size={22} />
                </div>
              </a>

              <p className="text-xs text-background/40 uppercase tracking-widest text-center">
                Disponible 7j/7 — Réponse sous 1h
              </p>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
