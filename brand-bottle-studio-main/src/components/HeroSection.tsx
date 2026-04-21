import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-marketing.jpg";
import aiAvatar from "@/assets/ai-avatar.png";

const cities = ["Ahmedabad", "Delhi NCR", "Bangalore"];

const HeroSection = () => {
  return (
    <section className="pt-24 pb-10 md:pt-32 md:pb-16 gradient-hero overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-sm font-medium text-accent">
              480+ businesses trust us for real leads
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] text-foreground">
              More Customers.<br />Less Guesswork.{" "}
              <span className="text-gradient">Every Month.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              We set up smart QR campaigns, WhatsApp automation, and hyperlocal marketing so your business gets a steady stream of paying customers — without you chasing leads manually.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="https://wa.me/917054890622?text=Hi%2C%20I%20want%20a%20free%20demo%20of%20your%20marketing%20services" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gradient-ai text-primary-foreground font-bold shadow-lg hover:opacity-90 transition-opacity text-base px-8 h-14 text-[15px] w-full">
                  Get Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="tel:+917054890622">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold text-base px-8 h-14 text-[15px] w-full">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Free Strategy Call
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div>
                <p className="text-2xl font-bold text-foreground">480+</p>
                <p className="text-xs text-muted-foreground">Businesses Served</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">1.2L+</p>
                <p className="text-xs text-muted-foreground">Leads Generated</p>
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">up to 8x</p>
                <p className="text-xs text-muted-foreground">ROI for clients</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs text-accent font-semibold uppercase tracking-wide">Serving:</span>
              {cities.map((city) => (
                <span key={city} className="text-xs bg-secondary border border-border rounded-full px-3 py-1 text-muted-foreground">
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 gradient-neon rounded-3xl opacity-15 blur-2xl" />
              <img
                src={heroImg}
                alt="Brand Bottle Studio marketing campaigns"
                className="relative rounded-2xl shadow-2xl w-full max-w-md border border-border"
                width={800}
                height={800}
              />
              <img
                src={aiAvatar}
                alt="AI Marketing Assistant"
                className="absolute -bottom-6 -left-6 w-24 h-24 animate-float drop-shadow-2xl"
                loading="lazy"
                width={512}
                height={512}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
