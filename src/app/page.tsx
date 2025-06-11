import WindowEventsHandler from "@/components/landing-page/WindowEventsHandler";
import Header from "@/components/shared/header/Header";
import Hero from "@/components/landing-page/hero/Hero";
import Calculator from "@/components/landing-page/calculator/Calculator";
import About from "@/components/landing-page/about/About";
import Testimonials from "@/components/landing-page/testimonials/Testimonials";
import Footer from "@/components/shared/footer/Footer";

export default function Home() {
  return (
    <WindowEventsHandler> 
      <Header />
      <Hero />
      <Calculator />
      <About />
      <Testimonials />
      <Footer />
    </WindowEventsHandler>
  );
}
