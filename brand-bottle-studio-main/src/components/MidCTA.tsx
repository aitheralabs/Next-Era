import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MidCTA = () => {
  return (
    <section className="py-12 gradient-ai relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
          Stop Wasting Money on Ads That Don't Convert
        </h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto mb-5">
          Get a proven system that delivers real customers to your business — guaranteed.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+917054890622">
            <Button size="lg" variant="secondary" className="font-bold text-base px-8 h-12 w-full">
              <Phone className="mr-2 h-5 w-5" />
              Book Free Strategy Call
            </Button>
          </a>
          <a href="https://wa.me/917054890622?text=Hi%2C%20I%20want%20a%20free%20demo%20of%20your%20marketing%20services" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary-foreground text-primary font-bold hover:bg-primary-foreground/90 text-base px-8 h-12 w-full">
              Get Free Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MidCTA;
