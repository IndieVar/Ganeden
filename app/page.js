import ReviewsSection from "./pages/home/reviewsSection";
import HeroSection from "./pages/home/heroSection";
import ServicesSection from "./pages/home/servicesSection";
import WasBecameSection from "./pages/home/wasBecameSection";
import AboutSection from "./pages/home/aboutSection";


export default function HomePage() {
  return (
    <main className="relative bg-white pb-20">
      <HeroSection />
      <AboutSection />
      <WasBecameSection />
      <ServicesSection />
      <ReviewsSection />
    </main>
  )
}





