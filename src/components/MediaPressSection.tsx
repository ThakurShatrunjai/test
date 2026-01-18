import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
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
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pressReleases = [
    {
      date: 'October 15, 2023',
      title: 'D P GLOBAL Announces New European Logistics Hub',
      description:
        'Expanding our footprint to better serve the Euro-Asian trade corridor with a state-of-the-art facility in Rotterdam.',
    },
    {
      date: 'September 22, 2023',
      title: 'Vijay Shukla Interviewed on Future of Indian Trade',
      description:
        'Our founder discusses the pivotal role of digitalization in modernizing India’s supply chain infrastructure.',
    },
    {
      date: 'August 05, 2023',
      title: 'D P GLOBAL Achieves ISO 9001:2015 Certification',
      description:
        'Reaffirming our commitment to quality management and operational excellence.',
    },
  ];

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

        {/* 🔹 EVENT AT TOP (BELOW HEADER) */}
        <div
          className={`mb-24 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Event
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center bg-card border border-border rounded-3xl shadow-xl overflow-hidden">
            {/* Event Image */}
            <img
              src={`${base}assets/event-1.png`}
              alt="DP GLOBAL Event"
              className="w-full h-full object-cover min-h-[280px]"
            />

            {/* Event Content */}
            <div className="p-8 md:p-10 space-y-4">
              <div className="text-sm text-primary font-semibold">
                October 15, 2023
              </div>

              <h3 className="text-2xl font-bold text-foreground">
                DP GLOBAL at Global Logistics Meet 2024
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                DP GLOBAL showcased its expertise in Sea Freight, Air Freight,
                and end-to-end logistics solutions at the Global Logistics Meet
                2024, engaging with industry leaders and global partners.
              </p>

              <Button className="mt-4">
                View Event Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* 🔹 PRESS RELEASES */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-7 w-7 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">
              Press Releases
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressReleases.map((release, index) => (
              <Card key={index} className="hover:shadow-xl transition">
                <CardHeader>
                  <div className="text-sm text-primary font-semibold mb-2">
                    {release.date}
                  </div>
                  <CardTitle className="text-xl">
                    {release.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {release.description}
                  </CardDescription>
                  <Button variant="ghost" className="p-0 text-primary">
                    Read Full Release
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
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
