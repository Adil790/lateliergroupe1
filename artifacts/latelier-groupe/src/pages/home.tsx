import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { FloatingActionButton } from "@/components/floating-action-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <ContactSection />
      </main>

      <Footer />
      
      <FloatingActionButton />
    </div>
  );
}
