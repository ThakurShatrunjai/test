import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Newspaper, ArrowRight, Calendar } from 'lucide-react';

export default function MediaPressSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
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

  const events = [
    {
      title: 'NASA Rover Design Engineering Event',
      description: 'This image captures moments from a NASA Rover Design–inspired engineering event held at a Delhi NCR college, successfully organized by DP Global. The event brought together young innovators to design, build, and test rover vehicles under real-world constraints, blending mechanical engineering, teamwork, and competitive spirit. From concept-level fabrication to on-track performance trials, the initiative reflects DP Global\'s commitment to nurturing innovation and engineering excellence.',
    },
  ];

  return (
    <section
      id="media"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-muted/20 scroll-snap-section"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out gpu-accelerated ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            News & Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Latest updates, press releases, and insights from D P GLOBAL and the world of logistics.
          </p>
        </div>

        {/* In The News Section */}
        <div className="mb-16">
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-1000 ease-out gpu-accelerated ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <Newspaper className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">In The News</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {newsArticles.map((article, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 gpu-accelerated ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${300 + index * 100}ms` : '0ms',
                }}
              >
                <CardHeader>
                  <div className="text-sm text-muted-foreground font-medium mb-2">
                    {article.source}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground italic">
                      {article.date}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="group/btn gpu-accelerated"
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 gpu-accelerated" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Events Section */}
        <div>
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-1000 ease-out gpu-accelerated ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <Calendar className="h-8 w-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Events</h3>
          </div>

          <div className="grid gap-6">
            {events.map((event, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 gpu-accelerated ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${600 + index * 100}ms` : '0ms',
                }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {event.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
