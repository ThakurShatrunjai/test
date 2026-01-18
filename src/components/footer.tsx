import { Plane, Ship, Package, TrendingUp, Heart } from 'lucide-react';
import { useNavigate } from '@tanstack/react-router';
import { HEADER_HEIGHT } from './Header';

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

export default function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (path: string, hash?: string) => {
    if (hash) {
      navigate({ to: path }).then(() => {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - HEADER_HEIGHT;
            smoothScrollTo(offsetPosition, 800);
          }
        }, 100);
      });
    } else {
      navigate({ to: path }).then(() => {
        smoothScrollTo(0, 600);
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-700 to-slate-800 border-t-2 border-slate-600 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-8">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white">D P GLOBAL</h3>
            <p className="text-xs font-semibold text-blue-300">
              Navigating Tomorrow's Supply Chain, Today.
            </p>
            <div className="text-xs text-slate-200 leading-relaxed space-y-2">
              <p>
                At D P GLOBAL LOGISTICS we have started our journey in November 2021. We have more than 15 years of experience prior to the foundation of our organization.
              </p>
              <p>
                We have our professional approach and deep working knowledge which make us plan your materials delivery with full protection at its designated place.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('/')}
                  className="text-sm text-slate-200 hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block gpu-accelerated"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/about-us')}
                  className="text-sm text-slate-200 hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block gpu-accelerated"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/contact-us')}
                  className="text-sm text-slate-200 hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block gpu-accelerated"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('/media-press')}
                  className="text-sm text-slate-200 hover:text-blue-300 transition-all duration-300 hover:translate-x-1 inline-block gpu-accelerated"
                >
                  News & Events
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-base font-bold mb-3 text-white">Core Services</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-slate-200 hover:text-blue-300 transition-colors duration-300 group">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 gpu-accelerated">
                  <Plane className="h-3.5 w-3.5 text-blue-300" />
                </div>
                <span>Air Freight</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-200 hover:text-blue-300 transition-colors duration-300 group">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 gpu-accelerated">
                  <Ship className="h-3.5 w-3.5 text-blue-300" />
                </div>
                <span>Ocean Freight</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-200 hover:text-blue-300 transition-colors duration-300 group">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 gpu-accelerated">
                  <Package className="h-3.5 w-3.5 text-blue-300" />
                </div>
                <span>Project Cargo</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-200 hover:text-blue-300 transition-colors duration-300 group">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 gpu-accelerated">
                  <TrendingUp className="h-3.5 w-3.5 text-blue-300" />
                </div>
                <span>Supply Chain Consulting</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold mb-3 text-white">Contact Us</h4>
            <div className="space-y-2.5 text-xs text-slate-200">
              <div>
                <p className="font-semibold text-white mb-1">Address:</p>
                <p className="leading-relaxed">
                  FLAT NO. 123, 2nd FLOOR<br />
                  New Four Storey, Vishal Enclave<br />
                  Tagore Garden Extn.<br />
                  New Delhi-110027
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Phone:</p>
                <p>+91 9999061995</p>
                <p>+91 9891711626</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Email:</p>
                <div className="space-y-1">
                  <p className="text-xs text-slate-300">Sales:</p>
                  <a 
                    href="mailto:accounts@dpglobal.co.in" 
                    className="hover:text-blue-300 transition-colors duration-300 block break-all"
                  >
                    accounts@dpglobal.co.in
                  </a>
                  <p className="text-xs text-slate-300 mt-1.5">General:</p>
                  <a 
                    href="mailto:vijay.shukla@dpglobal.co.in" 
                    className="hover:text-blue-300 transition-colors duration-300 block break-all"
                  >
                    vijay.shukla@dpglobal.co.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-600 pt-6 text-center text-xs text-slate-300">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © 2025. Built with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-glow-pulse" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200 transition-colors duration-300 font-semibold"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
