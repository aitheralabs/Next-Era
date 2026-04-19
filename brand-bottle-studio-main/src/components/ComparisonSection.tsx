import { Check, X } from "lucide-react";

type CellValue = boolean | string;

const rows: { feature: string; us: CellValue; ads: CellValue; pamphlets: CellValue }[] = [
  { feature: "Lead capture speed", us: "Under 60 seconds", ads: "Hours to days", pamphlets: "Never tracked" },
  { feature: "Cost per lead (approx)", us: "₹15 – ₹40", ads: "₹80 – ₹300+", pamphlets: "Unknown" },
  { feature: "Auto WhatsApp follow-up", us: true, ads: false, pamphlets: false },
  { feature: "Real-time lead dashboard", us: true, ads: true, pamphlets: false },
  { feature: "Works for offline foot traffic", us: true, ads: false, pamphlets: true },
  { feature: "No daily ad budget needed", us: true, ads: false, pamphlets: true },
  { feature: "Lead quality", us: "High — local & intent-based", ads: "Mixed", pamphlets: "Very low" },
  { feature: "Setup time", us: "24–48 hours", ads: "3–5 days", pamphlets: "Days / weeks" },
];

const Cell = ({ value }: { value: CellValue }) => {
  if (typeof value === "boolean") {
    return (
      <div className="flex justify-center">
        {value ? (
          <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center">
            <Check className="h-3.5 w-3.5 text-accent" />
          </div>
        ) : (
          <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center">
            <X className="h-3.5 w-3.5 text-destructive" />
          </div>
        )}
      </div>
    );
  }
  return <span className="text-sm text-foreground/80 text-center block">{value}</span>;
};

const ComparisonSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Why Switch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            How We Compare to <span className="text-gradient">Everything Else</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Before you decide, see exactly how QR + WhatsApp campaigns stack up against what you're probably doing now.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-sm font-semibold text-muted-foreground bg-card w-[34%]">Feature</th>
                <th className="p-4 bg-primary/10 border-x border-primary/20 w-[22%]">
                  <div className="text-center">
                    <span className="font-display font-bold text-primary text-sm">Brand Bottle Studio</span>
                    <div className="text-xs text-primary/70 font-normal mt-0.5">QR + WhatsApp AI</div>
                  </div>
                </th>
                <th className="p-4 bg-card w-[22%]">
                  <div className="text-center text-sm font-semibold text-muted-foreground">Facebook / Instagram Ads</div>
                </th>
                <th className="p-4 bg-card w-[22%]">
                  <div className="text-center text-sm font-semibold text-muted-foreground">Pamphlets / Hoardings</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-background" : "bg-card"}`}>
                  <td className="p-4 text-sm font-medium text-foreground">{row.feature}</td>
                  <td className="p-4 bg-primary/5 border-x border-primary/10"><Cell value={row.us} /></td>
                  <td className="p-4"><Cell value={row.ads} /></td>
                  <td className="p-4"><Cell value={row.pamphlets} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
