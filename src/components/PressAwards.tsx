import { useEffect, useRef, useState } from "react";
import { Award, Star } from "lucide-react";

const awards = [
  { title: "Magician of the Year", year: "2024", organization: "International Magic Association" },
  { title: "Best Stage Performance", year: "2023", organization: "World Magic Awards" },
  { title: "Innovation in Illusion", year: "2023", organization: "Academy of Magical Arts" },
  { title: "Audience Choice Award", year: "2022", organization: "Global Magic Summit" },
];

const pressQuotes = [
  { quote: "A master of the impossible, redefining modern magic", source: "The Times" },
  { quote: "Mystique creates moments that stay with you forever", source: "Magic Monthly" },
  { quote: "The future of illusion entertainment", source: "Entertainment Weekly" },
];

export const PressAwards = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            awards.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 150);
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
          Recognition & Press
        </h2>
        <p className="text-center text-foreground/50 text-lg mb-24 max-w-2xl mx-auto tracking-wide">
          Honored by the magic community and celebrated in media worldwide
        </p>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`relative p-10 rounded-none premium-border bg-card/10 backdrop-blur-sm transition-all duration-700 ${
                visibleItems.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-20'
              }`}
            >
              <div className="absolute top-6 right-6 text-5xl font-cinzel text-foreground/10 font-light">
                {award.year}
              </div>
              <Award className="text-accent w-8 h-8 mb-6" strokeWidth={1.5} />
              <h3 className="font-cinzel text-xl font-semibold mb-3 tracking-wide">
                {award.title}
              </h3>
              <p className="text-foreground/50 text-sm tracking-wide">{award.organization}</p>
            </div>
          ))}
        </div>

        {/* Press Quotes */}
        <div className="space-y-6">
          {pressQuotes.map((press, index) => (
            <div
              key={index}
              className="relative p-12 rounded-none border-l-2 border-accent/30 bg-card/5 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <p className="font-cinzel text-xl text-foreground/80 mb-6 italic tracking-wide leading-relaxed">
                "{press.quote}"
              </p>
              <p className="text-accent/80 font-light text-sm tracking-widest uppercase">— {press.source}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
