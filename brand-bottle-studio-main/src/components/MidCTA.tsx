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
          <Button size="lg" variant="secondary" className="font-bold text-base px-8 h-12">
            <Phone className="mr-2 h-5 w-5" />
            Book Free Strategy Call
          </Button>
          <Button size="lg" className="bg-primary-foreground text-primary font-bold hover:bg-primary-foreground/90 text-base px-8 h-12">
            Get Free Demo <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MidCTA;
