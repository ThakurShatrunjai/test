import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const contacts = [
    {
      icon: MapPin,
      department: 'General',
      email: 'vijay.shukla@dpglobal.co.in',
      description: 'For general inquiries and information',
      color: 'from-orange-500/20 to-red-500/20'
    },
    {
      icon: Phone,
      department: 'Operations',
      email: 'customerservice@dpglobal.co.in',
      description: 'For operational support and customer service',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: Mail,
      department: 'Sales',
      email: 'accounts@dpglobal.co.in',
      description: 'For sales inquiries and account management',
      color: 'from-blue-500/20 to-cyan-500/20'
    }
  ];

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

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-gradient-to-b from-background via-accent/5 to-background scroll-snap-section">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ease-out gpu-accelerated ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-semibold text-primary">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Reach out to our team for any inquiries or assistance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {contacts.map((contact, index) => (
            <Card 
              key={index} 
              className={`border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-depth-lg hover:-translate-y-3 group gpu-accelerated card-depth bg-gradient-to-br from-card to-card/50 backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} border border-primary/20 flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:rotate-6 gpu-accelerated shadow-glow group-hover:shadow-glow-lg`}>
                    <contact.icon className="h-6 w-6 text-primary" />
                  </div>
                  {contact.department}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-primary hover:text-secondary font-medium block break-all transition-all duration-300 hover:translate-x-1 gpu-accelerated"
                >
                  {contact.email}
                </a>
                <p className="text-sm text-muted-foreground leading-relaxed">{contact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
