import { motion } from "framer-motion";

export function Gallery() {
  const images = [
    {
      src: `${import.meta.env.BASE_URL}images/photo-1.jpg`,
      alt: "Intérieur du salon L'Atelier Groupe El Jadida - espace barbier et billard",
      className: "col-span-2 aspect-[4/3]",
    },
    {
      src: `${import.meta.env.BASE_URL}images/photo-3.jpg`,
      alt: "Coiffeur expert à L'Atelier Groupe El Jadida",
      className: "col-span-1 aspect-[3/4]",
    },
    {
      src: `${import.meta.env.BASE_URL}images/photo-4.jpg`,
      alt: "Coiffeur homme à El Jadida - L'Atelier Groupe en pleine activité",
      className: "col-span-1 aspect-[3/4]",
    },
    {
      src: `${import.meta.env.BASE_URL}images/photo-2.jpg`,
      alt: "Entrée du salon L'Atelier Groupe à El Jadida",
      className: "col-span-2 aspect-[4/3]",
    },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background relative overflow-hidden" aria-label="Notre univers beauté à El Jadida">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-foreground uppercase">
            Notre Univers à El Jadida
          </h2>
          <p className="mt-4 text-muted-foreground text-sm max-w-lg">
            Découvrez l'ambiance unique de L'Atelier Groupe, votre destination beauté et bien-être à El Jadida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${img.className} overflow-hidden rounded-lg group shadow-md`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
