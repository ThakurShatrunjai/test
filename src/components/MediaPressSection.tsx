import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Newspaper, ArrowRight } from 'lucide-react';

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

        {/* 🔹 EVENT – PROJECT CARGO HANDLING */}
        <div
          className={`mb-24 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
            Project Cargo Handling
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center bg-card border border-border rounded-3xl shadow-xl overflow-hidden">
            
            {/* Event Image */}
            <img
              src={`${base}assets/project-cargo.png`}
              alt="Project Cargo Handling"
              className="w-full h-full object-cover min-h-[300px]"
            />

            {/* Event Content */}
            <div className="p-8 md:p-10 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                D P GLOBAL specializes in complex and time-critical project
                cargo handling, delivering precision logistics solutions
                for oversized and urgent shipments worldwide.
              </p>

              <ul className="space-y-3 text-foreground font-medium">
                <li>• Open Top containers (In-gauge & Out-gauge)</li>
                <li>• Flat Rack shipments (Over-width & Over-weight)</li>
                <li>• Direct delivery from container for urgent cargo</li>
                <li>• Door-to-Door project shipments</li>
              </ul>

              <Button className="mt-4">
                Contact Project Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* 🔹 IN THE NEWS */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="h-7 w-7 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">
              In The News
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {newsArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-xl transition">
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">
                    {article.source}
                  </div>
                  <CardTitle className="text-xl">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
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
