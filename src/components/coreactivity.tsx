import { useEffect, useRef, useState } from 'react';

export default function CoreActivitiesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
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

  return (
    <section 
      id="core-activities" 
      ref={sectionRef} 
      className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden scroll-snap-section"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out gpu-accelerated ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-semibold text-primary">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            D P GLOBAL - CORE ACTIVITIES
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive logistics solutions across multimodal transport, value-added services, customs compliance, insurance, and supply chain management.
          </p>
        </div>

        <div className={`max-w-7xl mx-auto transition-all duration-1000 ease-out gpu-accelerated ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <div className="relative group">
            {/* Modern glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-glow-pulse" />
            
            {/* Main infographic with modern styling */}
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-border shadow-depth-lg group-hover:shadow-depth-lg transition-all duration-500 group-hover:scale-[1.01] gpu-accelerated bg-card">
              <img
                src="/assets/zz_page-0001.jpg"
                alt="D P GLOBAL Core Activities - Multimodal Transport, Value Added Services, Customs & Compliance, Insurance, and Supply Chain Solutions"
                className={`w-full h-auto transition-all duration-700 gpu-accelerated ${imageLoaded ? 'loaded' : ''}`}
                loading="lazy"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
