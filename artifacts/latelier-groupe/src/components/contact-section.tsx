import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, MapPin, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useSubmitContact } from "@workspace/api-client-react";

const formSchema = z.object({
  name: z.string().min(2, "Votre nom est requis"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  service: z.string().min(1, "Veuillez choisir une prestation"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const submitMutation = useSubmitContact();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    submitMutation.mutate(
      { data },
      {
        onSuccess: () => {
          toast({
            title: "Demande envoyée avec succès",
            description: "Notre équipe vous contactera dans les plus brefs délais.",
            className: "bg-primary text-primary-foreground border-none",
          });
          form.reset();
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "Erreur",
            description: "Impossible d'envoyer la demande. Veuillez nous appeler directement.",
          });
        },
      }
    );
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 lg:max-w-md"
          >
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Prendre Rendez-vous
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Contact & <span className="italic font-light">Accès</span>
            </h2>
            <p className="text-muted-foreground font-light mb-12 text-lg">
              Prêt à vivre l'expérience L'Atelier Groupe ? Réservez votre moment d'exception ou contactez-nous pour toute demande d'information.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-lg text-foreground mb-1">Téléphone</h4>
                  <a href="tel:0681032037" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                    06 81 03 20 37
                  </a>
                  <p className="text-xs text-muted-foreground/70 mt-1">Appel direct pour une réservation rapide</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-lg text-foreground mb-1">Adresse</h4>
                  <p className="text-muted-foreground text-lg">
                    123 Avenue de l'Excellence<br />
                    75008 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                  <Clock strokeWidth={1.5} size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-lg text-foreground mb-1">Horaires d'ouverture</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li className="flex justify-between w-48"><span>Lun - Ven:</span> <span>09:00 - 20:00</span></li>
                    <li className="flex justify-between w-48"><span>Samedi:</span> <span>09:00 - 18:00</span></li>
                    <li className="flex justify-between w-48"><span>Dimanche:</span> <span>Fermé</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-card p-8 md:p-10 rounded-sm shadow-xl border border-border/50 relative overflow-hidden">
              {/* Subtle accent corner */}
              <div className="absolute top-0 right-0 w-2 h-full bg-primary/20" />
              
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">Demande de réservation en ligne</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80 uppercase tracking-wider text-xs">Nom & Prénom *</FormLabel>
                          <FormControl>
                            <Input placeholder="Jean Dupont" className="bg-background/50 border-border/50 rounded-sm focus-visible:ring-primary/30 py-6" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80 uppercase tracking-wider text-xs">Téléphone</FormLabel>
                          <FormControl>
                            <Input placeholder="06 00 00 00 00" className="bg-background/50 border-border/50 rounded-sm focus-visible:ring-primary/30 py-6" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 uppercase tracking-wider text-xs">Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jean@exemple.com" className="bg-background/50 border-border/50 rounded-sm focus-visible:ring-primary/30 py-6" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 uppercase tracking-wider text-xs">Prestation Souhaitée *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/50 border-border/50 rounded-sm focus:ring-primary/30 py-6">
                              <SelectValue placeholder="Sélectionnez un service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="coiffure-femme">Coiffure Femme</SelectItem>
                            <SelectItem value="coiffure-homme">Coiffure Homme & Barbier</SelectItem>
                            <SelectItem value="coloration">Coloration & Mèches</SelectItem>
                            <SelectItem value="soin-visage">Soins Visage</SelectItem>
                            <SelectItem value="massage-spa">Massages & Spa</SelectItem>
                            <SelectItem value="manucure">Manucure & Beauté</SelectItem>
                            <SelectItem value="autre">Autre demande</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 uppercase tracking-wider text-xs">Message / Détails (Optionnel)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Précisez vos disponibilités ou besoins particuliers..." 
                            className="resize-none min-h-[120px] bg-background/50 border-border/50 rounded-sm focus-visible:ring-primary/30" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={submitMutation.isPending}
                    className="w-full py-6 rounded-sm uppercase tracking-widest font-semibold text-sm hover:-translate-y-0.5 transition-transform"
                  >
                    {submitMutation.isPending ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        Envoyer la demande
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Vos données sont sécurisées. Nous vous rappellerons pour confirmer l'horaire.
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
