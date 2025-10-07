export const VideoSection = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-cinzel text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Witness the Magic
        </h2>
        <p className="text-foreground/50 text-lg mb-16 max-w-2xl mx-auto tracking-wide">
          Step behind the curtain and experience the wonder of a live performance
        </p>
        
        <div className="relative group">
          <div className="relative aspect-video rounded-none overflow-hidden premium-border bg-card/10 backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-foreground/20 flex items-center justify-center hover:border-foreground/40 transition-all duration-500 cursor-pointer group-hover:scale-110">
                  <svg className="w-8 h-8 text-foreground/60 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-foreground/40 text-sm tracking-widest uppercase font-light">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
