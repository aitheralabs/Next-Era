import { TrendingUp, BarChart3, Target, Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { Icon: TrendingUp, end: 480, suffix: "+", decimals: 0, label: "Campaigns Launched" },
  { Icon: BarChart3, end: 3.2, suffix: "x", decimals: 1, label: "Higher Engagement vs Ads" },
  { Icon: Target, end: 40, suffix: "%", decimals: 0, label: "Better Lead-to-Customer Rate" },
  { Icon: Eye, end: 100, suffix: "%", decimals: 0, label: "Trackable — Every Lead" },
];

const TrustStats = () => {
  const [started, setStarted] = useState(false);
  const [values, setValues] = useState(stats.map(() => 0));
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValues(stats.map(s => parseFloat((eased * s.end).toFixed(s.decimals))));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started]);

  return (
    <section ref={ref} className="py-10 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center p-5 rounded-xl bg-background border border-border hover:glow-card transition-all duration-300">
              <div className="h-12 w-12 rounded-xl gradient-ai flex items-center justify-center text-primary-foreground mb-3">
                <s.Icon className="h-7 w-7" />
              </div>
              <p className="font-display text-3xl font-bold text-gradient">
                {s.decimals > 0 ? values[i].toFixed(s.decimals) : Math.floor(values[i])}{s.suffix}
              </p>
              <p className="text-sm text-muted-foreground font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
