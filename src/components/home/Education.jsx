import { GraduationCap, Calendar } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { education } from "../../data/portfolio";

const Education = () => {
  return (
    <section
      id="education"
      className="scroll-mt-header py-8 md:py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Education" />
        <ol className="grid gap-6 md:grid-cols-3">
          {education.map((edu) => (
            <li key={edu.degree}>
              <Card glow hover={false} className="h-full space-y-3">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center`}
                >
                  <GraduationCap className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold gradient-text">{edu.degree}</h3>
                <p className="font-semibold text-gray-300">
                  {edu.school}
                  {edu.university && (
                    <span className="block text-sm font-normal text-gray-400">
                      {edu.university}
                    </span>
                  )}
                </p>
                <p className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  {edu.period}
                  {edu.status && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-neon-blue/15 text-neon-blue border border-neon-blue/30">
                      {edu.status}
                    </span>
                  )}
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Education;
