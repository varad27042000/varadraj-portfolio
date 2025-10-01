import { GraduationCap, Award } from "lucide-react";
import { education, certifications } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

export default function Education() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Education & Certifications
        </h2>
        <div
          className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-12 transition-all duration-700 delay-100 ${
            isInView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        <div className="max-w-5xl mx-auto">
          <h3
            className={`text-3xl font-bold mb-8 text-slate-900 flex items-center gap-3 transition-all duration-700 delay-200 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <GraduationCap className="w-8 h-8 text-blue-600" />
            Education
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`group bg-slate-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-slate-600 text-sm">{edu.period}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-2">
                    Relevant Coursework:
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {edu.coursework}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3
            className={`text-3xl font-bold mb-8 text-slate-900 flex items-center gap-3 transition-all duration-700 delay-500 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <Award className="w-8 h-8 text-teal-600" />
            Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  isInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-teal-600 flex-shrink-0">▸</div>
                  <p className="text-slate-800 font-medium leading-relaxed">
                    {cert}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
