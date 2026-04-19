import { Phone, MessageCircle } from "lucide-react";

const MobileStickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 flex gap-3">
      <a
        href="tel:+917054890622"
        className="flex-1 flex items-center justify-center gap-2 bg-card border border-border rounded-xl py-3 text-sm font-bold text-foreground active:scale-95 transition-transform"
      >
        <Phone className="h-4 w-4" />
        Call Us
      </a>
      <a
        href="https://wa.me/917054890622?text=Hi%2C%20I%27m%20interested%20in%20Brand%20Bottle%20Studio%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 gradient-ai text-primary-foreground rounded-xl py-3 text-sm font-bold active:scale-95 transition-transform"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp Us
      </a>
    </div>
  );
};

export default MobileStickyBar;
