import { QrCode, MessageCircle, Target, Megaphone, Layout, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <QrCode className="h-6 w-6" />,
    title: "QR-Based Lead Generation",
    description: "Put a QR code at your counter, entrance, or packaging. Every scan captures a lead automatically — no forms, no friction.",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "WhatsApp AI Follow-up",
    description: "Every lead gets a WhatsApp message within 60 seconds of scanning — automatically. Your AI handles follow-up while you focus on your business.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Hyperlocal Marketing",
    description: "We target people within 5km of your location who are actively looking for what you offer. No wasted budget on people who'll never visit.",
  },
  {
    icon: <Megaphone className="h-6 w-6" />,
    title: "Brand Activation Campaigns",
    description: "On-ground events at gyms, colleges & malls where real people interact with your brand, scan your QR, and become leads on the spot.",
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Landing Pages & Funnels",
    description: "Pages built with one goal — converting a visitor into a lead. No bloat, no distraction. Just a clear offer and a form that works.",
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Chai & Coffee Vending at Events",
    description: "Branded chai & coffee vending machines at corporate events, fests & activations — every cup served is a brand impression and a lead opportunity.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-14 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">What We Do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Six Ways We <span className="text-gradient">Get You Customers</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Each service is designed to bring real, trackable leads — not just traffic that goes nowhere.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Card key={i} className="group border-border hover:border-primary/40 hover:glow-card transition-all duration-300 bg-card">
              <CardContent className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-xl gradient-ai flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
