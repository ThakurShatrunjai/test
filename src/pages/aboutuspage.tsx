import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionBadge from "@/components/ui/SectionBadge";

export default function AboutUsPage() {
  const base = import.meta.env.BASE_URL || '/';

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          
          {/* Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Image */}
            <div className="relative">
              <img
                src={`${base}assets/about-us.jpg`}
                alt="About DP Globals"
                className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
              />

              {/* Decorative overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
            </div>

            {/* Content */}
            <div>
              <span className="inline-block mb-4 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
                About Us
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Navigating Global Logistics with Precision
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                DP Globals is a trusted logistics partner delivering reliable,
                efficient, and innovative supply chain solutions across the globe.
                Our expertise spans sea freight, air freight, customs clearance,
                and door-to-door delivery.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                With a strong global network and a customer-first approach, we
                ensure seamless movement of goods while maintaining the highest
                standards of safety, transparency, and efficiency.
              </p>
            </div>

          </div>
        </div>
        {/* Industry Expertise Section */}
<section className="py-24 bg-gradient-to-b from-background to-accent/10">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto">

      <div className="text-center mb-14">
        <span className="inline-block mb-4 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
          Industry Expertise
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Proven Excellence Across Global Logistics
        </h2>
      </div>

      <div className="bg-card border border-border rounded-3xl shadow-xl p-8 md:p-12 space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">
            D P GLOBAL has gained a stellar reputation within the industry
          </span>{' '}
          for its exceptional offerings in Sea Freight and Air Freight.
          As a leading freight forwarding company, we have successfully
          managed a diverse array of cargo.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Our experience spans across automotive components and rovers,
          electronics, agricultural machinery, and even highly sensitive
          hospital equipment — each handled with precision, compliance,
          and care.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Our forward-thinking approach has driven us to create innovative
          logistics solutions, including customized consolidation services
          based on origin of pickup, route optimization strategies,
          meticulous dismantling of complex project cargo, and reliable
          just-in-time (JIT) delivery models.
        </p>
      </div>
    </div>
  </div>
</section>

      </main>

      <Footer />
    </div>
  );
}
