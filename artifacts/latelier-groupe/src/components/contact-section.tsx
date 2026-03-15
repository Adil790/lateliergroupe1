import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
            title: "Demande envoyée",
            description: "Nous vous recontacterons très vite.",
            className: "bg-foreground text-background border-none rounded-none",
          });
          form.reset();
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "Erreur",
            description: "Impossible d'envoyer la demande.",
          });
        },
      }
    );
  };

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
                <a href="tel:0681032037" className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                  06 81 03 20 37
                </a>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">ADRESSE</h4>
                <p className="text-foreground text-lg font-medium">
                  123 Avenue de l'Excellence<br />
                  75008 Paris, France
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">HORAIRES</h4>
                <ul className="text-foreground font-medium text-lg space-y-2">
                  <li className="flex justify-between w-full max-w-[280px]"><span>Lun - Ven</span> <span>09:00 - 20:00</span></li>
                  <li className="flex justify-between w-full max-w-[280px]"><span>Samedi</span> <span>09:00 - 18:00</span></li>
                  <li className="flex justify-between w-full max-w-[280px] text-muted-foreground"><span>Dimanche</span> <span>Fermé</span></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Nom complet</FormLabel>
                        <FormControl>
                          <Input placeholder="Jean Dupont" className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-foreground transition-colors" {...field} />
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
                        <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Téléphone</FormLabel>
                        <FormControl>
                          <Input placeholder="06 00 00 00 00" className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-foreground transition-colors" {...field} />
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
                      <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="jean@exemple.com" className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-foreground transition-colors" {...field} />
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
                      <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Prestation</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus:ring-0 focus:border-foreground transition-colors">
                            <SelectValue placeholder="Choisir un service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-none border-border">
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
                      <FormLabel className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Vos besoins particuliers..." 
                          className="resize-none min-h-[100px] bg-transparent border-0 border-b border-border rounded-none px-0 py-4 focus-visible:ring-0 focus-visible:border-foreground transition-colors" 
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
                  className="w-full sm:w-auto py-7 px-10 rounded-full uppercase tracking-widest font-bold text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {submitMutation.isPending ? "ENVOI EN COURS..." : "RÉSERVER MAINTENANT"}
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
