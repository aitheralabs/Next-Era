import { TrendingUp, BarChart3, Target, Eye } from "lucide-react";

const stats = [
  { icon: <TrendingUp className="h-7 w-7" />, metric: "500+", label: "Campaigns Launched" },
  { icon: <BarChart3 className="h-7 w-7" />, metric: "3X", label: "Customer Engagement" },
  { icon: <Target className="h-7 w-7" />, metric: "40%", label: "Higher Conversion Rate" },
  { icon: <Eye className="h-7 w-7" />, metric: "100%", label: "Trackable Campaigns" },
];

const TrustStats = () => {
  return (
    <section className="py-10 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center p-5 rounded-xl bg-background border border-border hover:glow-card transition-all duration-300">
              <div className="h-12 w-12 rounded-xl gradient-ai flex items-center justify-center text-primary-foreground mb-3">
                {s.icon}
              </div>
              <p className="font-display text-3xl font-bold text-gradient">{s.metric}</p>
              <p className="text-sm text-muted-foreground font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
