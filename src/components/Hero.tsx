import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-magician.jpg";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Floating 3D elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-60 animate-float-slow">
        <div className="w-full h-full rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-sm glow-border transform rotate-12" />
      </div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 opacity-50 animate-float">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/30 to-primary/30 backdrop-blur-sm glow-border-accent" />
      </div>
      <div className="absolute bottom-1/4 left-1/3 w-20 h-20 opacity-40 animate-levitate">
        <div className="w-full h-full rounded-lg bg-gradient-to-br from-secondary/30 to-primary/30 backdrop-blur-sm glow-border transform -rotate-12" />
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="font-cinzel text-7xl md:text-9xl font-bold mb-8 text-glow tracking-tight">
          MYSTIQUE
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-foreground/70 font-light tracking-[0.3em] uppercase">
          Master of Illusions
        </p>
        <Button 
          size="lg"
          className="relative group overflow-hidden bg-foreground text-background font-medium px-10 py-6 text-base rounded-none hover:bg-foreground/90 transition-all duration-500 tracking-wider uppercase"
        >
          <span className="relative z-10">Book a Show</span>
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
