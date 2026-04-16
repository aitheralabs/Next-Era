import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", role: "Marketing Head, FreshBrew Co.", quote: "NextEra Growth.ai helped us generate 50,000 leads in just 2 weeks through their AI-powered QR campaign + WhatsApp automation. Incredible ROI!", rating: 5 },
  { name: "Rahul Mehta", role: "Founder, UrbanFit", quote: "The gamified scan-and-win campaign they ran at our gym locations drove a 300% increase in app downloads. Their AI lead scoring is next-level.", rating: 5 },
  { name: "Ananya Reddy", role: "Growth Manager, UrbanSip", quote: "Their hyperlocal campaigns at college campuses combined with influencer integration generated 10,000+ quality leads. Best marketing investment ever.", rating: 5 },
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
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed italic">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
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
