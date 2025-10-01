import { useState } from 'react';
import { projects } from '../data/portfolio';
import { useInView } from '../hooks/useInView';

const categories = ['All', 'Full Stack', 'AI/ML'];

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Projects
        </h2>
        <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

        <div className={`flex justify-center gap-3 mb-12 flex-wrap transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-semibold rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
