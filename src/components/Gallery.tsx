import { useRef } from "react";
import { Star } from "lucide-react";

const galleryImages = [
  { id: 1, title: "Corporate Event Spectacle" },
  { id: 2, title: "Private Performance Magic" },
  { id: 3, title: "Grand Theatre Show" },
  { id: 4, title: "Intimate Close-Up Magic" },
];

export const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="font-cinzel text-5xl md:text-6xl font-bold text-center mb-6 tracking-tight">
          Moments of Wonder
        </h2>
        <p className="text-center text-foreground/50 text-lg max-w-2xl mx-auto tracking-wide">
          Captured memories from extraordinary performances around the world
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 px-4 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="relative flex-shrink-0 w-[80vw] md:w-[600px] h-[500px] rounded-none overflow-hidden group"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
            <div className="absolute inset-0 bg-muted/30 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <Star className="w-12 h-12 text-accent/40 mx-auto mb-6" strokeWidth={1} />
                <p className="font-cinzel text-xl text-foreground/60 tracking-wider">{image.title}</p>
              </div>
            </div>
            <div className="absolute inset-0 premium-border opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
