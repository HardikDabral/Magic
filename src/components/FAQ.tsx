import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of events do you perform at?",
    answer: "I perform at a wide range of events including corporate gatherings, private parties, weddings, theaters, and special occasions. Each performance is tailored to suit the venue and audience.",
  },
  {
    question: "How far in advance should I book?",
    answer: "I recommend booking at least 3-6 months in advance for major events. However, I do accept last-minute bookings based on availability. Contact me to discuss your date.",
  },
  {
    question: "Do you travel for performances?",
    answer: "Yes, I perform internationally and am available to travel anywhere in the world. Travel arrangements and accommodations can be discussed during booking.",
  },
  {
    question: "Can you customize the performance for our event?",
    answer: "Absolutely! Every show is customized to match your event's theme, audience, and duration. We'll work together to create an unforgettable magical experience.",
  },
  {
    question: "What is included in a typical performance?",
    answer: "A standard performance includes a mix of close-up magic, stage illusions, and audience interaction. The exact format depends on your event type and preferences.",
  },
];

export const FAQ = () => {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-cinzel text-5xl md:text-6xl font-bold text-center mb-6 tracking-tight">
          Frequently Asked
        </h2>
        <p className="text-center text-foreground/50 text-lg mb-20 tracking-wide">
          Everything you need to know about booking a magical experience
        </p>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-t border-foreground/10 px-0 bg-transparent hover:bg-card/5 transition-all duration-300"
            >
              <AccordionTrigger className="font-cinzel text-lg text-left hover:text-foreground transition-colors py-6 tracking-wide">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/50 text-base leading-relaxed pb-6 tracking-wide">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
