import { useEffect, useRef, useState } from 'react';
import { HEADER_HEIGHT } from './Header';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const smoothScrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - HEADER_HEIGHT;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== undefined) {
        cancelAnimationFrame(rafRef.current);
      }
      observer.disconnect();
    };
  }, []);

  // Ensure video plays on mount and handle autoplay restrictions
  useEffect(() => {
    const video = videoRef.current;
    if (video && !videoError) {
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.log('Video autoplay failed, using fallback image');
          setVideoError(true);
        }
      };
      playVideo();
    }
  }, [videoError]);

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="relative min-h-[95vh] overflow-hidden mt-20 md:mt-24 scroll-snap-section"
    >
      {/* Video background with parallax effect */}
      <div 
        className="absolute inset-0 parallax-element"
        style={{
          transform: `translate3d(0, ${scrollY * 50}px, 0)`,
        }}
      >
        {/* Video element */}
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src="/assets/Fast_Web_Background_Video_Generation.mp4" type="video/mp4" />
          </video>
        )}
        
        {/* Fallback image for browsers that don't support video autoplay */}
        {videoError && (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/assets/ho.jpg)',
            }}
          />
        )}
        
        {/* Enhanced dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        
        {/* Additional radial gradient for center focus */}
        <div className="absolute inset-0 bg-radial-gradient-overlay" />
        
        {/* Animated gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-secondary/15 animate-gradient-shift opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Decorative element */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm transition-all duration-1000 ease-out gpu-accelerated ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-sm font-semibold text-white">Global Logistics Excellence</span>
          </div>

          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight transition-all duration-1000 ease-out gpu-accelerated hero-text-shadow ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Navigating Tomorrow's Supply Chain,{' '}
            <span className="text-gradient-hero bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent animate-gradient-shift">
              Today.
            </span>
          </h1>
          
          <p 
            className={`text-2xl md:text-3xl font-bold text-white/95 leading-relaxed transition-all duration-1000 ease-out gpu-accelerated hero-text-shadow ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Reliable. Innovative. Global.
          </p>
          
          <p 
            className={`text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 ease-out gpu-accelerated hero-subtext-shadow ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Partner with D P GLOBAL for logistics solutions that drive your business forward.
          </p>
          
          <div 
            className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 ease-out gpu-accelerated ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <Button
              onClick={() => smoothScrollToElement('query')}
              size="lg"
              className="px-8 py-6 text-lg font-semibold shadow-depth hover:shadow-depth-lg transition-all duration-400 hover:scale-105 gpu-accelerated group bg-primary hover:bg-primary/90 text-white"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 gpu-accelerated">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2 animate-bounce">
          <div className="w-2 h-3 bg-white rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
}
