import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Newspaper, FileText, ArrowRight } from 'lucide-react';

export default function MediaPressSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const base = import.meta.env.BASE_URL || '/';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------------- EVENT 2 (OLD – UPDATED) ---------------- */
  const oldEvents = [
    {
      date: 'July 2023',
      title: 'Delhi NCR College – NASA Rover Making Event',
      description:
        'D P GLOBAL participated in an educational and innovation-driven event in the Delhi NCR region, where students collaborated on designing and building NASA-style rover prototypes. The event promoted hands-on learning, engineering excellence, and real-world problem-solving inspired by space exploration.',
      image: `${base}assets/nasa-rover-event.png`,
    },
  ];

  /* ---------------- NEWS (UNCHANGED) ---------------- */
  const newsArticles = [
    {
      source: 'Global Trade Magazine',
      title: 'Top Logistics Companies to Watch in 2024',
      date: 'November 2023',
    },
    {
      source: 'Supply Chain Digest',
      title: 'The Tech Revolution in Freight Forwarding',
      date: 'October 2023',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">

        {/* ================= EVENT 1 (NEW) ================= */}
        <div className="mb-28">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Project Cargo Handling
          </h2>

          <div className="grid md:grid-cols-2 gap-10 bg-card border border-border rounded-3xl shadow-xl overflow-hidden">
            <img
              src={`${base}assets/project-cargo.png`}
              alt="Project Cargo Handling"
              className="w-full h-full object-cover min-h-[320px]"
            />

            <div className="p-8 space-y-5">
              <p className="text-muted-foreground leading-relaxed">
                D P GLOBAL has gained a stellar reputation within the industry
                for handling complex, oversized, and time-critical project
                cargo with precision and safety.
              </p>

              <ul className="space-y-2 font-medium">
                <li>• Open Top containers (In-gauge & Out-gauge)</li>
                <li>• Flat Rack shipments (Over-width & Over-weight)</li>
                <li>• Direct delivery from container for urgent cargo</li>
                <li>• Door-to-Door project shipments</li>
              </ul>

              <Button>
                Contact Project Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* ================= EVENT 2 (OLD – UPDATED) ================= */}
        <div className="mb-28">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-7 w-7 text-primary" />
            <h3 className="text-3xl font-bold">
              Educational & Outreach Event
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-10 bg-card border border-border rounded-3xl shadow-lg overflow-hidden">
            <img
              src={oldEvents[0].image}
              alt={oldEvents[0].title}
              className="w-full h-full object-cover min-h-[300px]"
            />

            <div className="p-8 space-y-4">
              <div className="text-sm font-semibold text-primary">
                {oldEvents[0].date}
              </div>

              <h4 className="text-2xl font-bold">
                {oldEvents[0].title}
              </h4>

              <p className="text-muted-foreground leading-relaxed">
                {oldEvents[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* ================= NEWS ================= */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="h-7 w-7 text-primary" />
            <h3 className="text-3xl font-bold">In The News</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {newsArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-xl transition">
                <CardHeader>
                  <div className="text-sm text-muted-foreground">
                    {article.source}
                  </div>
                  <CardTitle className="text-xl">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm italic text-muted-foreground">
                    {article.date}
                  </span>
                  <Button variant="outline" size="sm">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
