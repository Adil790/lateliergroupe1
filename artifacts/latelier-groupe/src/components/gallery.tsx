import { motion } from "framer-motion";

export function Gallery() {
  const images = [
    {
      id: 2,
      src: `${import.meta.env.BASE_URL}images/gallery-2.png`,
      alt: "Spa treatment tools",
      className: "col-span-1 aspect-[3/4]",
    },
    {
      id: 3,
      src: `${import.meta.env.BASE_URL}images/gallery-3.png`,
      alt: "Barber shop",
      className: "col-span-2 aspect-[4/3]",
    },
    {
      id: 4,
      src: `${import.meta.env.BASE_URL}images/gallery-4.png`,
      alt: "Facial treatment",
      className: "col-span-2 aspect-[4/3]",
    },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-foreground uppercase">
            NOTRE UNIVERS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${images[0].className} overflow-hidden rounded-lg group shadow-md`}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${images[1].className} overflow-hidden rounded-lg group shadow-md`}
          >
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`${images[2].className} overflow-hidden rounded-lg group shadow-md`}
          >
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1 flex items-center justify-center p-8 bg-secondary/50 rounded-lg"
          >
            <p className="font-serif text-3xl md:text-4xl italic text-foreground text-center font-light leading-snug">
              "L'art du beau<br/>au quotidien"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
