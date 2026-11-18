import { Briefcase, Calendar, MapPin } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { experience } from "../../data/portfolio";

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-20 py-8 md:py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Professional Experience"
          subtitle="Building reliable AI systems, from document intelligence to LLM evaluation"
        />
        <ol className="space-y-6">
          {experience.map((exp) => (
            <li key={`${exp.company}-${exp.period}`}>
              <Card glow hover={false}>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  {/* Icon & date */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2 md:w-44 flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Briefcase className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold gradient-text mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-300">
                        <span className="font-semibold">{exp.company}</span>
                        <span className="flex items-center gap-1 text-sm text-gray-400">
                          <MapPin className="w-4 h-4" aria-hidden="true" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-sm md:text-base text-gray-300 leading-relaxed"
                        >
                          <span className="text-neon-blue mt-0.5" aria-hidden="true">
                            ▹
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
