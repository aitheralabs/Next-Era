import { Dumbbell, Stethoscope, Coffee, GraduationCap, Building2 } from "lucide-react";

const industries = [
  { icon: <Dumbbell className="h-8 w-8" />, name: "Gyms & Fitness" },
  { icon: <Stethoscope className="h-8 w-8" />, name: "Clinics & Healthcare" },
  { icon: <Coffee className="h-8 w-8" />, name: "Cafes & Restaurants" },
  { icon: <GraduationCap className="h-8 w-8" />, name: "Coaching Institutes" },
  { icon: <Building2 className="h-8 w-8" />, name: "Real Estate" },
];

const WhoWeWorkWith = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Industries</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Who We <span className="text-gradient">Work With</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 bg-card border border-border rounded-2xl px-8 py-6 hover:glow-card hover:border-primary/40 transition-all duration-300 min-w-[150px]"
            >
              <div className="text-primary">{ind.icon}</div>
              <span className="font-display font-semibold text-foreground text-sm text-center">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
