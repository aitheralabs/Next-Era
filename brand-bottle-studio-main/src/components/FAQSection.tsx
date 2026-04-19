import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to set up a campaign?",
    answer: "Most campaigns are live within 24–48 hours. We handle the QR setup, WhatsApp automation, and landing page — you just tell us your offer and we take it from there.",
  },
  {
    question: "Do I need any technical knowledge?",
    answer: "None at all. You don't need to touch any software. We set everything up, train the WhatsApp AI on your business, and hand you a simple dashboard to track leads.",
  },
  {
    question: "What if I don't get results?",
    answer: "We start with a free demo campaign so you can see real results before committing to a paid plan. If the demo doesn't impress you, you don't pay anything.",
  },
  {
    question: "How is this different from running Facebook or Instagram ads?",
    answer: "Ads send people to a page and hope they fill a form. Our QR campaigns capture leads from people already at your location — they're warmer, more local, and cost far less per lead. Plus the WhatsApp follow-up happens automatically, so no lead goes cold.",
  },
  {
    question: "Which businesses work best with this?",
    answer: "We work best with local businesses that already have foot traffic — gyms, clinics, cafes, coaching institutes, salons, real estate offices, and event organisers. If people physically visit you or attend your events, we can turn them into leads.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No lock-ins. Our monthly plans can be cancelled anytime. We'd rather earn your business every month by delivering results than trap you in a contract.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Questions You're <span className="text-gradient">Probably Thinking</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Honest answers. No fluff.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border rounded-xl bg-card overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-secondary/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-display font-semibold text-foreground text-sm md:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
