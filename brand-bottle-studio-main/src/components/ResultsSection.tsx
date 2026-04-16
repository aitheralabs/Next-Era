import { TrendingUp, BarChart3, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const results = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    metric: "120+",
    label: "Leads in 7 Days",
    description: "Generated 120+ verified leads for a local gym using QR campaigns at their entrance.",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    metric: "3x",
    label: "Engagement Boost",
    description: "3x higher engagement with smart QR campaigns at cafe chains vs traditional marketing.",
  },
  {
    icon: <Target className="h-8 w-8" />,
    metric: "40%",
    label: "Higher Conversion",
    description: "40% higher lead-to-customer conversion using AI WhatsApp funnels for a coaching institute.",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Proven Results</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Real Numbers, <span className="text-gradient">Real Growth</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {results.map((r, i) => (
            <Card key={i} className="border-border bg-card hover:glow-card transition-all duration-300 text-center">
              <CardContent className="p-8 space-y-3">
                <div className="mx-auto h-14 w-14 rounded-xl gradient-ai flex items-center justify-center text-primary-foreground">
                  {r.icon}
                </div>
                <p className="font-display text-4xl font-bold text-gradient">{r.metric}</p>
                <p className="font-display text-lg font-semibold text-foreground">{r.label}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
