import { MapPin, QrCode, MonitorPlay, Bot, UserCheck } from "lucide-react";

const steps = [
  { icon: <MapPin className="h-6 w-6" />, title: "Offline Traffic", description: "A customer walks into your gym, clinic, cafe or event" },
  { icon: <QrCode className="h-6 w-6" />, title: "They Scan a QR", description: "One scan — no app download, no form filling, no friction" },
  { icon: <MonitorPlay className="h-6 w-6" />, title: "Digital Hoarding Seen", description: "Your brand appears on high-footfall digital hoardings — building instant recall" },
  { icon: <Bot className="h-6 w-6" />, title: "AI Takes Over", description: "The AI bot qualifies, nurtures and follows up 24/7 — automatically" },
  { icon: <UserCheck className="h-6 w-6" />, title: "You Get a Customer", description: "A warm, ready-to-buy customer — without you lifting a finger" },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-14 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">The Process</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            From Someone Walking In to <span className="text-gradient">Paying Customer</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            The whole thing is automated. You focus on running your business.
          </p>
        </div>

        {/* Desktop flow */}
        <div className="hidden md:block relative">
          <div className="absolute top-[2.35rem] left-[10%] right-[10%] h-px border-t-2 border-dashed border-primary/25 z-0" />
          <div className="flex items-start justify-between relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center w-[18%]">
                <div className="h-8 w-8 rounded-full gradient-ai flex items-center justify-center text-primary-foreground text-sm font-bold mb-3 ring-4 ring-background shadow-sm">
                  {i + 1}
                </div>
                <div className="h-14 w-14 rounded-2xl bg-card border border-border flex items-center justify-center text-primary mb-3 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="font-display text-sm font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile flow */}
        <div className="md:hidden space-y-3">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4 bg-card border border-border rounded-xl p-4">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="h-7 w-7 rounded-full gradient-ai flex items-center justify-center text-primary-foreground text-xs font-bold">
                  {i + 1}
                </div>
                {i < steps.length - 1 && <div className="w-px h-4 bg-border" />}
              </div>
              <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-primary flex-shrink-0">
                {step.icon}
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-foreground">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
