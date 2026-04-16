import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-14 gradient-ai relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <Sparkles className="h-8 w-8 text-primary-foreground/80 mx-auto mb-3" />
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
          Ready to Get Real Customers This Week?
        </h2>
        <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
          Join 500+ businesses already getting leads on autopilot with our AI-powered system.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" variant="secondary" className="font-bold text-base px-8 h-14">
            <Phone className="mr-2 h-5 w-5" />
            Book Free Strategy Call
          </Button>
          <Button size="lg" className="bg-primary-foreground text-primary font-bold hover:bg-primary-foreground/90 text-base px-8 h-14">
            Start Your Campaign <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
