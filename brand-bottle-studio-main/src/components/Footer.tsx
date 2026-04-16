import logo from "@/assets/nextera-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo} alt="NextEra Growth.ai" className="h-8 w-auto" loading="lazy" />
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              AI-powered marketing solutions that turn every interaction into measurable growth.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3 text-sm">Services</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li>AI WhatsApp Automation</li>
              <li>Smart QR Campaigns</li>
              <li>Hyperlocal Marketing</li>
              <li>Gamified Campaigns</li>
              <li>AI Lead Scoring</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li>About Us</li>
              <li>Case Studies</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-background mb-3 text-sm">Contact</h4>
            <ul className="space-y-2 text-background/60 text-sm">
              <li>hello@nexteragrowth.ai</li>
              <li>+91 98765 43210</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/10 mt-10 pt-6 text-center text-background/40 text-sm">
          © 2026 NextEra Growth.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
