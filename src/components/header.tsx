import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useNavigate, useRouterState } from '@tanstack/react-router';

export const HEADER_HEIGHT = 96;

const getAssetPath = (path: string) => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path}`.replace(/\/+/g, '/');
};

const smoothScrollTo = (targetPosition: number, duration: number = 800) => {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = easeInOutCubic(progress);
    
    window.scrollTo(0, startPosition + distance * easeProgress);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

interface NavItem {
  label: string;
  path: string;
  hash?: string;
}

export default function Header() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const currentPath = routerState.location.pathname;
  const isHomePage = currentPath === '/';

  useEffect(() => {
    let rafId: number;
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.pageYOffset;
        if (Math.abs(currentScrollY - lastScrollY) > 5) {
          setIsScrolled(currentScrollY > 20);
          lastScrollY = currentScrollY;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const timeoutId = setTimeout(() => {
        scrollToSection(hash);
      }, 200);
      return () => clearTimeout(timeoutId);
    }
  }, [currentPath]);

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'News & Events', path: '/media-press' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - HEADER_HEIGHT;
      smoothScrollTo(offsetPosition, 800);
    }
  };

  const handleNavClick = (path: string, hash?: string) => {
    setMobileMenuOpen(false);
    
    if (hash && currentPath === path) {
      scrollToSection(hash);
      window.history.replaceState(null, '', `#${hash}`);
    } else if (hash) {
      navigate({ to: path }).then(() => {
        window.location.hash = hash;
        setTimeout(() => {
          scrollToSection(hash);
        }, 300);
      });
    } else {
      navigate({ to: path }).then(() => {
        smoothScrollTo(0, 600);
      });
    }
  };

  // Determine header styling based on scroll state and current page
  const getHeaderClasses = () => {
    if (isHomePage && isScrolled) {
      // Fully opaque on homepage when scrolled
      return 'bg-background dark:bg-background backdrop-blur-xl border-b border-border/60 shadow-depth-sm';
    } else if (isScrolled) {
      // Semi-transparent on other pages when scrolled
      return 'bg-background/95 dark:bg-background/98 backdrop-blur-xl border-b border-border/60 shadow-depth-sm';
    } else {
      // Semi-transparent when at top
      return 'bg-background/80 dark:bg-background/85 backdrop-blur-lg border-b border-border/30';
    }
  };

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-500 gpu-accelerated ${getHeaderClasses()}`}
    >
      <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        <button 
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-3 transition-all duration-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded-xl p-2 gpu-accelerated group"
          aria-label="DP Globals Home"
        >
          <img 
            src={getAssetPath('assets/logo2-1.png')}
            alt="DP Globals - Logistically Ahead" 
            className="h-12 md:h-16 w-auto object-contain transition-all duration-400 gpu-accelerated group-hover:brightness-110" 
            loading="eager"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.path, item.hash)}
              className="nav-link relative text-sm font-semibold text-foreground/90 transition-all duration-400 hover:text-primary hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 rounded-lg px-3 py-2 gpu-accelerated"
              aria-label={item.label}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-foreground hover:bg-accent hover:text-primary transition-all duration-300 gpu-accelerated"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-card/95 backdrop-blur-xl border-l border-border/60">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path, item.hash)}
                  className="text-left text-base font-semibold text-foreground hover:text-primary transition-all duration-300 py-3 px-4 hover:translate-x-2 hover:bg-accent/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 gpu-accelerated"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
