import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Portfolio from "@/app/components/Portfolio";
import Testimonials from "@/app/components/Testimonials";
import FAQ from "@/app/components/FAQ";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
