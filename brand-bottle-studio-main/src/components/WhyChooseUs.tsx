import { Users, Zap, MapPin, BarChart3 } from "lucide-react";

const reasons = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "We care about paying customers, not follower counts",
    description: "Likes don't pay rent. We build campaigns that bring people through your door — and track every single one.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "QR codes + WhatsApp AI — working while you sleep",
    description: "A customer scans your QR at 11pm. By 11:01pm they've already received a WhatsApp message from your business. No manual work.",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Built for local Indian businesses, not global brands",
    description: "Our campaigns are designed for gyms, clinics, cafes, and coaching centres — not Fortune 500 companies with crore-rupee budgets.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "You see exactly where every lead comes from",
    description: "No more guessing which ad worked. Every campaign has a dashboard — you know exactly how many leads each QR or event generated.",
  },
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
