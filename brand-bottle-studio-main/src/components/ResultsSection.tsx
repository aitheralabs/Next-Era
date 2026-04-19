import { TrendingUp, BarChart3, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const results = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    metric: "127",
    label: "Leads in 7 Days",
    description: "A local gym in Ahmedabad placed our QR at their entrance. 127 verified leads in the first week — without running a single ad.",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    metric: "3.2x",
    label: "More Engagement",
    description: "A cafe chain switched from pamphlets to our QR campaigns. Engagement went up 3.2x and they stopped wasting money on print.",
  },
  {
    icon: <Target className="h-8 w-8" />,
    metric: "38%",
    label: "Lead-to-Customer Rate",
    description: "A Surat coaching institute used our WhatsApp funnel. 38 out of every 100 leads converted into paid enrollments within 2 weeks.",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Proven Results</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Real Numbers, <span className="text-gradient">Real Businesses</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            These aren't projections. These are actual results from campaigns we've run.
          </p>
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
