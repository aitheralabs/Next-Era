import showcaseEvent from "@/assets/showcase-event.jpg";
import showcaseWhatsapp from "@/assets/showcase-whatsapp.jpg";
import showcaseMerchandise from "@/assets/showcase-merchandise.jpg";
import showcaseGamified from "@/assets/showcase-gamified.jpg";
import showcaseQr from "@/assets/showcase-qr.jpg";
import showcaseVending from "@/assets/showcase-vending.jpg";
import showcaseVideo from "@/assets/showcase-video.mp4.asset.json";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const showcaseItems = [
  { img: showcaseEvent, title: "Brand Activation — College Campaign", desc: "50,000+ leads generated through QR bottle scanning at 20+ campus events", tag: "Events" },
  { img: showcaseWhatsapp, title: "AI WhatsApp Automation", desc: "Automated lead nurturing with 85% response rate for D2C brand", tag: "AI Chatbot" },
  { img: showcaseMerchandise, title: "Smart Merchandise Marketing", desc: "Custom branded bottles & t-shirts with QR codes driving 3x repeat engagement", tag: "Merchandise" },
  { img: showcaseGamified, title: "Scan & Win Campaign", desc: "Gamified spin-to-win at malls generated 30,000 leads in 1 week", tag: "Gamification" },
  { img: showcaseQr, title: "Smart QR at Cafes", desc: "Dynamic QR campaigns at 500+ cafe locations with real-time lead tracking", tag: "QR Campaigns" },
  { img: showcaseVending, title: "Chai & Coffee Vending at Events", desc: "Branded chai & coffee vending machines supplied at corporate events, fests & activations — turning every cup into a lead opportunity", tag: "Event Supply" },
];

const ProductShowcase = () => {
  return (
    <section id="showcase" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Our Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            See It In <span className="text-gradient">Action</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Real campaigns. Real results. Here's how we drive growth for leading brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg hover:glow-card transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={512}
                />
                <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video showcase */}
        <div className="mt-14 relative rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
          <video
            src={showcaseVideo.url}
            className="w-full aspect-video object-cover"
            controls
            playsInline
            preload="metadata"
            poster={showcaseEvent}
          >
            Your browser does not support the video tag.
          </video>
          <div className="p-5 text-center">
            <h3 className="font-display text-xl font-bold text-foreground">Watch How We Drive 10x Growth</h3>
            <p className="text-muted-foreground text-sm mt-1">See our AI-powered campaigns in action — from offline to online</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button size="lg" className="gradient-ai text-primary-foreground font-semibold">
            View All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
