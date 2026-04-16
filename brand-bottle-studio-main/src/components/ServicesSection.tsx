import { QrCode, MessageCircle, Target, Megaphone, Layout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  { icon: <QrCode className="h-6 w-6" />, title: "QR-Based Lead Generation System", description: "Place smart QR codes at your location and capture leads automatically into your funnel." },
  { icon: <MessageCircle className="h-6 w-6" />, title: "WhatsApp AI Lead Follow-up", description: "AI chatbot follows up with every lead on WhatsApp — 24/7, no manual effort." },
  { icon: <Target className="h-6 w-6" />, title: "Hyperlocal Marketing Campaigns", description: "Target customers within 5km of your business for maximum-quality local leads." },
  { icon: <Megaphone className="h-6 w-6" />, title: "Brand Activation Campaigns", description: "On-ground events at gyms, colleges & malls that drive real sign-ups and engagement." },
  { icon: <Layout className="h-6 w-6" />, title: "High-Converting Landing Pages & Funnels", description: "Optimized pages that turn visitors into leads with proven conversion frameworks." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-14 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">What We Do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Services That <span className="text-gradient">Get You Customers</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Every service is built to generate real, trackable leads for your business.
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
