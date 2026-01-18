import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { useSubmitQuery } from '@/hooks/useQueries';
import { toast } from 'sonner';
import { Send, Loader2, Sparkles } from 'lucide-react';

export default function QueryFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const submitQuery = useSubmitQuery();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast.error('Please enter a valid email address');
      return;
    }

    try {
      await submitQuery.mutateAsync({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message.trim()
      });

      toast.success('Your query has been submitted successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error: any) {
      console.error('Submit query error:', error);
      toast.error('Failed to submit query. Please try again.');
    }
  };

  return (
    <section id="query" ref={sectionRef} className="py-24 bg-gradient-to-b from-background via-primary/5 to-background scroll-snap-section">
      <div className="container mx-auto px-4">
        <div className={`max-w-2xl mx-auto transition-all duration-1000 ease-out gpu-accelerated ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="border-2 border-border shadow-depth-lg hover:shadow-depth-lg transition-all duration-500 group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <CardHeader className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mx-auto">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Let's Connect</span>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold">
                Send Us a Query
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                Have a question or need assistance? Fill out the form below and our team will respond promptly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className={`space-y-2 transition-all duration-700 ease-out gpu-accelerated ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
                  <Label htmlFor="name" className="text-sm font-semibold">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    disabled={submitQuery.isPending}
                    className="transition-all duration-300 focus:scale-[1.01] border-2 gpu-accelerated"
                  />
                </div>

                <div className={`space-y-2 transition-all duration-700 ease-out gpu-accelerated ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
                  <Label htmlFor="email" className="text-sm font-semibold">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    disabled={submitQuery.isPending}
                    className="transition-all duration-300 focus:scale-[1.01] border-2 gpu-accelerated"
                  />
                </div>

                <div className={`space-y-2 transition-all duration-700 ease-out gpu-accelerated ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
                  <Label htmlFor="phone" className="text-sm font-semibold">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={submitQuery.isPending}
                    className="transition-all duration-300 focus:scale-[1.01] border-2 gpu-accelerated"
                  />
                </div>

                <div className={`space-y-2 transition-all duration-700 ease-out gpu-accelerated ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                  <Label htmlFor="message" className="text-sm font-semibold">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    disabled={submitQuery.isPending}
                    className="transition-all duration-300 focus:scale-[1.01] border-2 gpu-accelerated resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className={`w-full transition-all duration-400 hover:scale-105 hover:shadow-depth-lg gpu-accelerated group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: '500ms' }}
                  disabled={submitQuery.isPending}
                >
                  {submitQuery.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      Submit Query
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
