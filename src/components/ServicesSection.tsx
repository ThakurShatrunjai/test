import { Ship, Plane, Package, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import SectionBadge from "@/components/ui/SectionBadge";

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Ship,
      title: 'Sea Freight Services',
      description: 'Reliable and cost-effective ocean freight solutions for global trade.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Plane,
      title: 'Air Freight Services',
      description: 'Fast, secure, and time-critical air cargo transportation worldwide.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Package,
      title: 'Custom Clearance',
      description: 'Expert handling of import/export documentation and compliance.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Clock,
      title: 'Door-to-Door Delivery',
      description: 'Complete logistics management from pickup to final delivery.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
    
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-b from-background via-accent/10 to-background"
    >
      <div className="container mx-auto px-4">
        <SectionBadge label="Our Services" />
<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5 text-center">
  Comprehensive Logistics Solutions
</h2>

        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block mb-4 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end logistics services designed for reliability,
            speed, and global reach.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`relative group rounded-3xl p-8 bg-card border border-border shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
