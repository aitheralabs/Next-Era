import { Check, ArrowRight, Mail, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    period: "/month",
    description: "Try it out — perfect for small businesses that want to start capturing leads without a big investment.",
    features: [
      "1 Smart QR Code Setup",
      "Basic WhatsApp Auto-reply",
      "Up to 100 Leads/month",
      "1 Simple Landing Page",
      "Basic Lead Dashboard",
      "WhatsApp Support",
    ],
    popular: false,
    enterprise: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "₹6,999",
    period: "/month",
    description: "The complete starter system — QR campaigns + AI WhatsApp follow-up running automatically.",
    features: [
      "3 Smart QR Campaigns",
      "AI WhatsApp Automation",
      "Up to 500 Leads/month",
      "1 Sales Funnel Page",
      "Weekly Lead Report",
      "Hyperlocal Targeting (5km)",
      "Priority WhatsApp Support",
    ],
    popular: true,
    enterprise: false,
    cta: "Start Growing",
  },
  {
    name: "Pro",
    price: "₹12,999",
    period: "/month",
    description: "For businesses ready to scale — multiple campaigns, deeper automation, and real brand presence.",
    features: [
      "Unlimited QR Campaigns",
      "Advanced AI WhatsApp Funnel",
      "Up to 2,000 Leads/month",
      "3 Landing Pages & Funnels",
      "AI Lead Scoring Dashboard",
      "1 Brand Activation Event/mo",
      "Dedicated Account Manager",
      "Monthly Strategy Call",
    ],
    popular: false,
    enterprise: false,
    cta: "Go Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Multiple locations, high volumes, or custom integrations — we'll build a plan around your business.",
    features: [
      "Everything in Pro",
      "Multi-location Management",
      "Custom API Integrations",
      "White-label Reporting",
      "Chai & Coffee Vending Supply",
      "Dedicated Success Team",
      "Quarterly Business Reviews",
    ],
    popular: false,
    enterprise: true,
    cta: "Talk to Us",
  },
];

const steps = [
  { number: "1", text: "Message us on WhatsApp" },
  { number: "2", text: "Free 20-min strategy call" },
  { number: "3", text: "Campaign live in 24 hours" },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Pricing</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            No hidden fees. No lock-in contracts. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden
                ${plan.popular
                  ? "border-primary shadow-lg shadow-primary/10"
                  : plan.enterprise
                  ? "border-accent/40 hover:border-accent/70"
                  : "border-border hover:border-primary/40"
                } bg-card`}
            >
              {/* Top accent bar */}
              {plan.popular && (
                <div className="h-1 w-full gradient-ai" />
              )}
              {plan.enterprise && (
                <div className="h-1 w-full bg-accent" />
              )}

              {/* Popular badge */}
              {plan.popular && (
                <div className="flex items-center justify-center gap-1.5 bg-primary/10 py-2 px-4 border-b border-primary/20">
                  <Zap className="h-3.5 w-3.5 text-primary fill-primary" />
                  <span className="text-xs font-bold text-primary uppercase tracking-wide">Most Popular</span>
                </div>
              )}
              {plan.enterprise && (
                <div className="flex items-center justify-center bg-accent/10 py-2 px-4 border-b border-accent/20">
                  <span className="text-xs font-bold text-accent uppercase tracking-wide">Enterprise</span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1 gap-5">
                {/* Header */}
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className={`font-display text-4xl font-bold ${plan.popular ? "text-gradient" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${plan.popular ? "text-primary" : "text-accent"}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.enterprise ? (
                  <a
                    href="https://wa.me/917054890622?text=Hi%2C%20I%27m%20interested%20in%20your%20Enterprise%20plan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full font-semibold" variant="outline">
                      <Mail className="mr-2 h-4 w-4" />
                      {plan.cta}
                    </Button>
                  </a>
                ) : (
                  <a
                    href={`https://wa.me/917054890622?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button
                      className={`w-full font-semibold ${plan.popular ? "gradient-ai text-primary-foreground hover:opacity-90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* What happens next */}
        <div className="mt-14 max-w-xl mx-auto">
          <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">
            What happens after you click
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full gradient-ai flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                  {step.number}
                </div>
                <span className="text-sm text-foreground">{step.text}</span>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden sm:block h-4 w-4 text-muted-foreground flex-shrink-0 ml-1" />
                )}
              </div>
            ))}
          </div>
          <p className="text-center mt-5 text-xs text-muted-foreground">
            No credit card required · No long-term contract · Setup in 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
