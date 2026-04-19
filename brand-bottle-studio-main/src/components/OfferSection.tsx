import { ArrowRight, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const OfferSection = () => {
  return (
    <section className="py-14 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-card border-2 border-primary/30 rounded-2xl p-10 glow-card relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 gradient-ai" />
          <Gift className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Get a <span className="text-gradient">Free Demo Campaign</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-md mx-auto">
            We'll set up a demo campaign and show you real results before you pay a single rupee.
          </p>
          <a href="https://wa.me/917054890622?text=Hi%2C%20I%27d%20like%20to%20claim%20my%20free%20demo%20campaign" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gradient-ai text-primary-foreground font-bold text-base px-10 h-14">
              Claim Free Demo Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <p className="text-xs text-muted-foreground mt-4">No credit card required • Setup in 24 hours</p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
