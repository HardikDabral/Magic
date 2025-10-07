import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-magician.jpg";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-4 overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-20 right-20 w-40 h-40 opacity-20 animate-float-slow">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Portrait with floating elements */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-none blur-3xl" />
              <img 
                src={heroImage}
                alt="Mystique the Magician"
                className="relative rounded-none shadow-2xl premium-border w-full"
              />
            </div>
          </div>

          {/* Bio text */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h2 className="font-cinzel text-5xl md:text-6xl font-bold mb-10 tracking-tight">
              The Artisan of Amazement
            </h2>
            <div className="space-y-6 text-foreground/60 text-base leading-relaxed tracking-wide">
              <p className="animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
                For over two decades, Mystique has captivated audiences across the globe with breathtaking illusions that blur the line between reality and impossibility.
              </p>
              <p className="animate-fade-in-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
                Trained in the classical arts of prestidigitation and modern theatrical magic, each performance is a meticulously crafted journey into wonder, combining sleight of hand mastery with grand-scale illusions that leave audiences spellbound.
              </p>
              <p className="animate-fade-in-up" style={{ animationDelay: '1s', opacity: 0 }}>
                From intimate close-up magic to spectacular stage productions, Mystique's performances transform ordinary moments into extraordinary memories that resonate long after the final curtain falls.
              </p>
            </div>

            {/* Decorative divider */}
            <div className="pt-12">
              <div className="h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
