import Hero from "./components/Hero";
import ProblemSection from "./sections/ProblemSection";
import SolutionSection from "./sections/SolutionSection";
import AuditSection from "./sections/AuditSection";
import Steps from "./components/Steps";
import WhyChoose from "./sections/WhyChoose";
import Demo from "./components/Demo";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// ⭐ NEW: Import the AI Assistant Widget
import ChatWidget from "./assistant/ChatWidget";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <AuditSection />
      <Steps />
      <WhyChoose />
      <Demo />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />

      {/* ⭐ NEW: Floating AI Assistant Widget */}
      <ChatWidget />
    </div>
  );
}

      
