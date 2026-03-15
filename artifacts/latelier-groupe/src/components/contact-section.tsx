import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "212681032037";
const WHATSAPP_MESSAGE = encodeURIComponent("Bonjour, je souhaite prendre rendez-vous chez L'Atelier Groupe.");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 lg:max-w-md"
          >
            <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter uppercase text-foreground mb-8 leading-[0.9]">
              CONTACT & ACCÈS
            </h2>

            <div className="space-y-12">
              <div>
                <a
                  href="tel:+212681032037"
                  className="flex items-center gap-3 text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-7 h-7 shrink-0" />
                  06 81 03 20 37
                </a>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> ADRESSE
                </h4>
                <p className="text-foreground text-lg font-medium">
                  123 Avenue de l'Excellence<br />
                  75008 Paris, France
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> HORAIRES
                </h4>
                <ul className="text-foreground font-medium text-lg space-y-2">
                  <li className="flex justify-between w-full max-w-[280px]"><span>Lun - Ven</span><span>09:00 - 20:00</span></li>
                  <li className="flex justify-between w-full max-w-[280px]"><span>Samedi</span><span>09:00 - 18:00</span></li>
                  <li className="flex justify-between w-full max-w-[280px] text-muted-foreground"><span>Dimanche</span><span>Fermé</span></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp Booking */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex flex-col justify-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Réservation
            </p>
            <h3 className="text-3xl md:text-4xl font-sans font-bold tracking-tighter uppercase text-foreground mb-6 leading-tight">
              RÉSERVEZ EN UN MESSAGE
            </h3>
            <p className="text-muted-foreground text-lg font-medium mb-10 max-w-sm leading-relaxed">
              Contactez-nous directement sur WhatsApp pour réserver votre créneau. Réponse rapide garantie.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 self-start bg-[#25D366] text-white font-bold uppercase tracking-widest text-sm px-10 py-6 rounded-full hover:bg-[#1ebe5d] transition-colors duration-300 shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5" />
              Réserver sur WhatsApp
            </a>

            <p className="mt-6 text-xs text-muted-foreground uppercase tracking-widest">
              Disponible 7j/7 — Réponse sous 1h
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
