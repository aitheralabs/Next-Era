import { MapPin, QrCode, MessageCircle, Bot, UserCheck, ArrowRight as ArrowIcon } from "lucide-react";

const steps = [
  { icon: <MapPin className="h-6 w-6" />, title: "Offline Traffic", description: "Customers visit your gym, clinic, cafe or event" },
  { icon: <QrCode className="h-6 w-6" />, title: "QR Scan", description: "They scan a smart QR code at your location" },
  { icon: <MessageCircle className="h-6 w-6" />, title: "WhatsApp Funnel", description: "Leads enter your WhatsApp automation funnel" },
  { icon: <Bot className="h-6 w-6" />, title: "AI Follow-ups", description: "AI bot nurtures and qualifies leads 24/7" },
  { icon: <UserCheck className="h-6 w-6" />, title: "Customer Conversion", description: "You get real, paying customers" },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-14 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">The Process</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            From Offline Traffic to <span className="text-gradient">Paying Customers</span>
          </h2>
        </div>

        {/* Desktop flow */}
        <div className="hidden md:flex items-start justify-center gap-2">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start">
              <div className="flex flex-col items-center text-center max-w-[180px]">
                <div className="h-16 w-16 rounded-2xl gradient-ai flex items-center justify-center text-primary-foreground mb-3">
                  {step.icon}
                </div>
                <h3 className="font-display text-sm font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center pt-5 px-1">
                  <ArrowIcon className="h-6 w-6 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile flow */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4 bg-card border border-border rounded-xl p-4">
              <div className="h-12 w-12 rounded-xl gradient-ai flex items-center justify-center text-primary-foreground flex-shrink-0">
                {step.icon}
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-foreground">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
