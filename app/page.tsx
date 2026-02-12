import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { TrustStrip } from "./components/TrustStrip";
import { PortfolioSection } from "./components/PortfolioSection";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ProcessSection } from "./components/ProcessSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <TrustStrip />
        <PortfolioSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <ProcessSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
