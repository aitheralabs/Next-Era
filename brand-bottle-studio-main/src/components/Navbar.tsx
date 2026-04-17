import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/nextera-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="NextEra Growth.ai" className="h-14 md:h-16 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium">Services</a>
          <a href="#how-it-works" className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium">How It Works</a>
          <a href="#showcase" className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium">Showcase</a>
          <a href="#pricing" className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium">Pricing</a>
          <a href="tel:+917054890622"><Button size="sm" className="gradient-ai text-primary-foreground font-semibold">Book Free Call</Button></a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 flex flex-col gap-3">
          <a href="#services" className="text-foreground/70 hover:text-foreground py-2">Services</a>
          <a href="#how-it-works" className="text-foreground/70 hover:text-foreground py-2">How It Works</a>
          <a href="#showcase" className="text-foreground/70 hover:text-foreground py-2">Showcase</a>
          <a href="#pricing" className="text-foreground/70 hover:text-foreground py-2">Pricing</a>
          <a href="tel:+917054890622"><Button size="sm" className="gradient-ai text-primary-foreground font-semibold">Book Free Call</Button></a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
