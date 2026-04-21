import logo from "@/assets/nextera-logo.png";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="Brand Bottle Studio" className="h-8 w-auto" loading="lazy" />
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-4">
              AI-powered marketing that turns every interaction into a paying customer.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/brandbottlestudio" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center text-background/60 hover:text-background transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/company/brandbottlestudio" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center text-background/60 hover:text-background transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://youtube.com/@brandbottlestudio" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center text-background/60 hover:text-background transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3 text-sm">Services</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li><a href="#services" className="hover:text-background/90 transition-colors">AI WhatsApp Automation</a></li>
              <li><a href="#services" className="hover:text-background/90 transition-colors">Smart QR Campaigns</a></li>
              <li><a href="#services" className="hover:text-background/90 transition-colors">Hyperlocal Marketing</a></li>
              <li><a href="#services" className="hover:text-background/90 transition-colors">Gamified Campaigns</a></li>
              <li><a href="#services" className="hover:text-background/90 transition-colors">AI Lead Scoring</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li><a href="#" className="hover:text-background/90 transition-colors">About Us</a></li>
              <li><a href="#showcase" className="hover:text-background/90 transition-colors">Case Studies</a></li>
<li><a href="tel:+917054890622" className="hover:text-background/90 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3 text-sm">Contact</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li><a href="mailto:info@nexteragrowth.in" className="hover:text-background/90 transition-colors">info@nexteragrowth.in</a></li>
              <li><a href="tel:+917054890622" className="hover:text-background/90 transition-colors">+91 70548 90622</a></li>
              <li>Ahmedabad, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 mt-10 pt-6 text-center text-background/40 text-sm">
          © 2026 Brand Bottle Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
