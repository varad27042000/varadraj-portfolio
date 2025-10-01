import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

export default function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Experience
        </h2>
        <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-teal-500 to-blue-500" />

            {experience.map((job, index) => (
              <div
                key={index}
                className={`relative pl-8 md:pl-20 pb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full border-4 border-white shadow-lg" />

                <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{job.position}</h3>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                        <Briefcase className="w-4 h-4" />
                        {job.company}
                      </div>
                      <div className="flex items-center gap-4 text-slate-600 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span>{job.period}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-slate-700">
                        <span className="text-teal-500 mt-1.5 flex-shrink-0">▸</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
