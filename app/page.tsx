import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import HowIHelp from "@/components/HowIHelp";
import Expertise from "@/components/Expertise";
import HowIWork from "@/components/HowIWork";
import Services from "@/components/Services";
import Office from "@/components/Office";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Intro />
        <HowIHelp />
        <Expertise />
        <HowIWork />
        <Services />
        <Office />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
