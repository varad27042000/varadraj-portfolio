import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="mb-8 inline-block animate-float"
            style={{ animation: 'float 3s ease-in-out infinite' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-xl opacity-50 animate-pulse" />
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white animate-fade-in">
            {personalInfo.name.split(' ').map((word, i) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  animation: `slideUp 0.6s ease-out ${i * 0.1}s both`
                }}
              >
                {word}&nbsp;
              </span>
            ))}
          </h1>

          <p
            className="text-2xl md:text-3xl text-blue-400 mb-3 font-light"
            style={{ animation: 'slideUp 0.6s ease-out 0.3s both' }}
          >
            {personalInfo.title}
          </p>

          <p
            className="text-lg text-slate-400 mb-8 flex items-center justify-center gap-2"
            style={{ animation: 'slideUp 0.6s ease-out 0.4s both' }}
          >
            <MapPin className="w-5 h-5" />
            {personalInfo.subtitle}
          </p>

          <div
            className="flex justify-center gap-4 mb-12"
            style={{ animation: 'slideUp 0.6s ease-out 0.5s both' }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 backdrop-blur-sm"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 backdrop-blur-sm"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 backdrop-blur-sm"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            style={{ animation: 'slideUp 0.6s ease-out 0.6s both' }}
          >
            Explore My Work
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70 hover:text-white transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
