import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <button
              onClick={scrollToTop}
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              VK
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors hover:text-blue-500 ${
                    isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button
            onClick={scrollToTop}
            className="text-white text-2xl font-bold hover:text-blue-400 transition-colors"
          >
            Home
          </button>
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-white text-2xl font-medium hover:text-blue-400 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1 + 0.2}s forwards` }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
