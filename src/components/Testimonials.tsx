import { useEffect, useRef, useState } from "react";

const testimonials = [
  { text: "An absolutely mesmerizing experience. Mystique left our entire audience speechless.", author: "— Sarah Chen, Event Director" },
  { text: "The most captivating magic show I've witnessed in 20 years of entertainment.", author: "— Michael Rodriguez, Theater Manager" },
  { text: "Pure wonder and artistry. Every moment was filled with the impossible made real.", author: "— Emma Thompson, Corporate Events" },
];

export const Testimonials = () => {
  const [visible, setVisible] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          testimonials.forEach((_, i) => {
            setTimeout(() => setVisible(prev => [...prev, i]), i * 300);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-cinzel text-5xl md:text-6xl font-bold text-center mb-6 tracking-tight">
          Whispers of Wonder
        </h2>
        <p className="text-center text-foreground/50 text-lg mb-24 tracking-wide">
          From those who've experienced the impossible
        </p>
        <div className="space-y-16">
          {testimonials.map((testimonial, i) => (
            <div key={i} className={`text-center transition-all duration-1000 ${visible.includes(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-xl md:text-2xl font-light text-foreground/70 mb-8 italic leading-relaxed max-w-3xl mx-auto">
                "{testimonial.text}"
              </p>
              <div className="w-12 h-px bg-accent/30 mx-auto mb-4" />
              <p className="text-foreground/40 text-sm tracking-widest uppercase font-light">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
