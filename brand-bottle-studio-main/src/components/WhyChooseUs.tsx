import { Users, Zap, MapPin, BarChart3 } from "lucide-react";

const reasons = [
  { icon: <Users className="h-6 w-6" />, title: "Real Customers, Not Vanity Metrics", description: "We focus on leads that convert into paying customers — not just likes and impressions." },
  { icon: <Zap className="h-6 w-6" />, title: "AI + Offline Strategy", description: "Our unique combo of physical QR campaigns + AI automation gives you an unfair advantage." },
  { icon: <MapPin className="h-6 w-6" />, title: "Built for Local Businesses", description: "Every campaign is tailored for gyms, clinics, cafes & local service providers." },
  { icon: <BarChart3 className="h-6 w-6" />, title: "Fully Trackable ROI", description: "Know exactly how many leads each campaign generates — complete transparency." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-14 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Why Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Why Businesses <span className="text-gradient">Choose Us</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {reasons.map((r, i) => (
            <div key={i} className="flex gap-4 bg-card border border-border rounded-xl p-6 hover:glow-card transition-all duration-300">
              <div className="h-12 w-12 rounded-xl gradient-ai flex items-center justify-center text-primary-foreground flex-shrink-0">
                {r.icon}
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
