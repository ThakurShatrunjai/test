export default function MediaPressSection() {
  const base = import.meta.env.BASE_URL || '/';

  return (
    <section className="py-28 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Events Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="inline-block mb-4 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
              Events
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latest Events & Highlights
            </h2>
          </div>

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
                DP GLOBAL proudly participated in the Global Logistics Meet 2024,
                showcasing its expertise in Sea Freight, Air Freight, and
                end-to-end logistics solutions. The event highlighted our
                commitment to innovation, efficiency, and global connectivity.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Our team engaged with industry leaders, explored emerging
                logistics trends, and reinforced strategic partnerships to
                strengthen our global network and service capabilities.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
