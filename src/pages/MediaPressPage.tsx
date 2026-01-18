import SectionBadge from "@/components/ui/SectionBadge";

export default function MediaPressSection() {
  const base = import.meta.env.BASE_URL || "/";

  return (
    <section className="py-28 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4 max-w-5xl">

        <SectionBadge label="Events" />

        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Latest Events & Highlights
        </h2>

        {/* Event Card */}
        <div className="bg-card border border-border rounded-3xl shadow-xl overflow-hidden">

          {/* Event Image */}
          <img
            src={`${base}assets/event-1.png`}
            alt="DP Globals Event"
            className="w-full h-[320px] object-cover"
          />

          {/* Event Content */}
          <div className="p-8 md:p-10 space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              DP Globals at Global Logistics Meet 2024
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              DP GLOBAL participated in the Global Logistics Meet 2024,
              showcasing expertise in Sea Freight, Air Freight, and
              end-to-end logistics solutions.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              The event strengthened partnerships, explored emerging
              logistics trends, and reinforced DP GLOBAL’s commitment
              to innovation and operational excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
