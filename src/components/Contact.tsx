import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Get In Touch
        </h2>
        <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

        <div className="max-w-4xl mx-auto">
          <p className={`text-center text-xl text-slate-300 mb-12 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className={`group bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-slate-300 text-sm break-all">{personalInfo.email}</p>
                </div>
              </div>
            </a>

            <div
              className={`group bg-white/10 backdrop-blur-sm p-8 rounded-2xl transition-all duration-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-slate-300 text-sm">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`flex justify-center gap-6 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 backdrop-blur-sm"
            >
              <Github className="w-8 h-8 text-white" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 backdrop-blur-sm"
            >
              <Linkedin className="w-8 h-8 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
