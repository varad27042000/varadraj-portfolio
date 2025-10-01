import { Code2, Globe, TrendingUp, Music } from "lucide-react";
import { about, skills } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

const iconMap = {
  Code2,
  Globe,
  TrendingUp,
  Music,
};

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-slate-50" ref={ref}>
      <div className="container mx-auto px-6">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          About Me
        </h2>
        <div
          className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-12 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        <div className="max-w-4xl mx-auto mb-16">
          {/* 🔽 Only this block changed */}
          {Array.isArray(about.description) ? (
            about.description.map((para, idx) => (
              <p
                key={idx}
                className={`text-lg text-slate-700 leading-relaxed mb-4 transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + idx * 100}ms` }}
              >
                {para}
              </p>
            ))
          ) : (
            <p
              className={`text-lg text-slate-700 leading-relaxed transition-all duration-700 delay-200 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {about.description}
            </p>
          )}
        </div>

        <div className="mb-16">
          <h3
            className={`text-3xl font-bold text-center mb-12 text-slate-900 transition-all duration-700 delay-300 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            What I'm Doing
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {about.interests.map((interest, index) => {
              const Icon = iconMap[interest.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className={`group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 text-slate-900">
                        {interest.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3
            className={`text-3xl font-bold text-center mb-12 text-slate-900 transition-all duration-700 delay-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${800 + index * 50}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-900">
                    {skill.name}
                  </span>
                  <span className="text-slate-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isInView ? `${skill.level}%` : "0%",
                      transitionDelay: `${800 + index * 50}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
