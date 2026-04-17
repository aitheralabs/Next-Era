import { Check, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    period: "/month",
    description: "Perfect for small businesses getting started with lead generation.",
    features: ["Smart QR Campaigns", "Basic Landing Page", "Up to 500 Leads/month", "Email Support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹24,999",
    period: "/month",
    description: "For businesses ready to scale with AI-powered automation.",
    features: ["Everything in Starter", "AI WhatsApp Automation", "Up to 5,000 Leads/month", "Sales Funnel Setup", "Weekly Reports", "Priority Support"],
    popular: true,
  },
  {
    name: "Pro",
    price: "₹49,999",
    period: "/month",
    description: "Full-stack AI marketing engine for maximum growth.",
    features: ["Everything in Growth", "Hyperlocal Campaigns", "Unlimited Leads", "Brand Activation Events", "AI Lead Scoring Dashboard", "Dedicated Account Manager"],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large teams and high-volume operations.",
    features: ["Everything in Pro", "Custom Integrations", "Multi-location Support", "Enterprise SLA", "White-label Options", "Dedicated Success Team"],
    popular: false,
    enterprise: true,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Pricing</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Choose a plan that fits your growth goals. No hidden fees.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={`border-border bg-card relative transition-all duration-300 ${
                plan.popular ? "border-primary glow-card scale-[1.03]" : "hover:glow-card"
              } ${"enterprise" in plan && plan.enterprise ? "border-accent/40" : ""}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              {"enterprise" in plan && plan.enterprise && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Enterprise
                </span>
              )}
              <CardContent className="p-8 space-y-5">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{plan.description}</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground text-sm">{plan.period}</span>}
                </div>
                <ul className="space-y-2.5">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                {"enterprise" in plan && plan.enterprise ? (
                  <a href="https://wa.me/917054890622?text=Hi%2C%20I%27m%20interested%20in%20your%20Enterprise%20plan" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full font-semibold" variant="outline">
                      <Mail className="mr-2 h-4 w-4" /> Get in Touch
                    </Button>
                  </a>
                ) : (
                  <Button
                    className={`w-full font-semibold ${plan.popular ? "gradient-ai text-primary-foreground" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
