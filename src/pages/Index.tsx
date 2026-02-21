import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import Problem from "@/components/landing/Problem";
import Method from "@/components/landing/Method";
import Interface from "@/components/landing/Interface";
import AIArchitecture from "@/components/landing/AIArchitecture";
import ClinicalFocus from "@/components/landing/ClinicalFocus";
import Compliance from "@/components/landing/Compliance";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Problem />
      <Method />
      <Interface />
      <AIArchitecture />
      <ClinicalFocus />
      <Compliance />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
