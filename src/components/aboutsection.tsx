import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== undefined) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          const scrollProgress = Math.max(0, -rect.top / (rect.height * 0.5));
          setScrollY(scrollProgress);
        }
      });
    };

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== undefined) {
        cancelAnimationFrame(rafRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden scroll-mt-24 scroll-snap-section">
      {/* Modern parallax background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 parallax-element"
        style={{
          transform: `translate3d(0, ${scrollY * 30}px, 0)`,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ease-out gpu-accelerated ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-semibold text-primary">Who We Are</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            ABOUT US
          </h2>
          <div className="text-left space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              D P GLOBAL has gained a stellar reputation within the Industry for its exceptional offerings in Sea Freight and Air Freight services. Our commitment to excellence and customer satisfaction has positioned us as a trusted partner for businesses seeking reliable logistics solutions.
            </p>
            <p className="text-lg">
              Whether you're a small business looking to expand internationally or a large corporation managing complex supply chains, D P GLOBAL has the expertise and resources to support your growth. Our commitment to innovation and continuous improvement ensures that we stay ahead of industry trends and provide our clients with the most efficient and cost-effective logistics solutions available.
            </p>
          </div>
        </div>

        {/* Commitment Section with modern design */}
        <div className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 ease-out gpu-accelerated ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-2 border-border shadow-depth">
            <div className="text-muted-foreground leading-relaxed">
              <p className="text-lg">
                At D P GLOBAL, we understand that every shipment is critical to your business success. Our dedicated team works tirelessly to ensure your cargo reaches its destination safely, on time, and within budget. We leverage cutting-edge technology and industry best practices to deliver superior logistics services that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
