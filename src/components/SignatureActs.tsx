import { useEffect, useRef, useState } from "react";
import cardMagic from "@/assets/card-magic.jpg";
import levitationAct from "@/assets/levitation-act.jpg";
import mentalismAct from "@/assets/mentalism-act.jpg";

const acts = [
  {
    title: "Card Artistry",
    description: "A mesmerizing display of card manipulation where reality bends with every shuffle, cut, and flourish.",
    image: cardMagic,
  },
  {
    title: "Levitation Mysteries",
    description: "Witness the impossible as objects and even people defy gravity in this breathtaking spectacle.",
    image: levitationAct,
  },
  {
    title: "Mind Reading",
    description: "A journey into the depths of consciousness where thoughts become visible and secrets are revealed.",
    image: mentalismAct,
  },
];

export const SignatureActs = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            acts.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-cinzel text-5xl md:text-6xl font-bold text-center mb-6 tracking-tight">
          Signature Acts
        </h2>
        <p className="text-center text-foreground/50 text-lg mb-24 max-w-2xl mx-auto tracking-wide">
          Each performance is a unique masterpiece, crafted to transport you beyond the ordinary
        </p>

        <div className="grid md:grid-cols-3 gap-12 perspective-1000">
          {acts.map((act, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="card-3d relative rounded-none overflow-hidden premium-border bg-card/20 backdrop-blur-sm hover:shadow-card transition-all duration-500">
                {/* Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-10 relative z-10">
                  <h3 className="font-cinzel text-2xl font-semibold mb-4 tracking-wide">
                    {act.title}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed text-sm tracking-wide">
                    {act.description}
                  </p>
                </div>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
