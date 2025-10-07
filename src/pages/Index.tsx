import { FloatingParticles } from "@/components/FloatingParticles";
import { CursorTrail } from "@/components/CursorTrail";
import { FlyingCards } from "@/components/FlyingCards";
import { SmokeEffect } from "@/components/SmokeEffect";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SignatureActs } from "@/components/SignatureActs";
import { Gallery } from "@/components/Gallery";
import { VideoSection } from "@/components/VideoSection";
import { PressAwards } from "@/components/PressAwards";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="relative">
      <FloatingParticles />
      <SmokeEffect />
      <FlyingCards />
      <CursorTrail />
      <Hero />
      <About />
      <SignatureActs />
      <Gallery />
      <VideoSection />
      <PressAwards />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
};

export default Index;
