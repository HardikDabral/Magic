import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-cinzel text-5xl md:text-6xl font-bold text-center mb-6 tracking-tight">
          Summon the Experience
        </h2>
        <p className="text-center text-foreground/50 text-lg mb-20 tracking-wide">
          Ready to create an unforgettable moment? Let's discuss your vision
        </p>

        <form className="space-y-8 p-12 rounded-none premium-border bg-card/5 backdrop-blur-sm">
          <div className="space-y-3">
            <label htmlFor="name" className="font-cinzel text-sm text-foreground/60 tracking-widest uppercase">
              Your Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="bg-background/30 border-foreground/10 focus:border-foreground/30 rounded-none text-base py-6 tracking-wide"
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="email" className="font-cinzel text-sm text-foreground/60 tracking-widest uppercase">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="bg-background/30 border-foreground/10 focus:border-foreground/30 rounded-none text-base py-6 tracking-wide"
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="event" className="font-cinzel text-sm text-foreground/60 tracking-widest uppercase">
              Event Type
            </label>
            <Input
              id="event"
              type="text"
              placeholder="Corporate, Wedding, Private, etc."
              className="bg-background/30 border-foreground/10 focus:border-foreground/30 rounded-none text-base py-6 tracking-wide"
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="message" className="font-cinzel text-sm text-foreground/60 tracking-widest uppercase">
              Your Message
            </label>
            <Textarea
              id="message"
              placeholder="Tell us about your event and vision..."
              rows={6}
              className="bg-background/30 border-foreground/10 focus:border-foreground/30 rounded-none text-base resize-none tracking-wide"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-foreground text-background font-medium text-sm py-7 rounded-none hover:bg-foreground/90 transition-all duration-500 tracking-[0.3em] uppercase"
          >
            Summon the Magician
          </Button>
        </form>
      </div>
    </section>
  );
};
