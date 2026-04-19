import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Marketing Head, FreshBrew Co.",
    initials: "PS",
    quote: "The QR campaign setup was smooth and we started seeing leads within the first week. The WhatsApp automation handled follow-ups without any manual effort — exactly what we needed.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Founder, UrbanFit Gym",
    initials: "RM",
    quote: "They ran a scan campaign at two of our gym locations and the engagement was noticeably higher than what we were doing before. Lead quality was good and the reporting was transparent.",
    rating: 4,
  },
  {
    name: "Ananya Reddy",
    role: "Growth Manager, UrbanSip",
    initials: "AR",
    quote: "Hyperlocal campaigns at our cafe outlets brought in genuinely interested customers. Far better lead quality than generic social ads, and the team was responsive throughout.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[150px] -translate-x-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Trusted by <span className="text-gradient">Growth Leaders</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-border bg-card hover:glow-card transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-4 w-4 ${j < t.rating ? "fill-accent text-accent" : "fill-muted text-muted"}`}
                    />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full gradient-ai flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
