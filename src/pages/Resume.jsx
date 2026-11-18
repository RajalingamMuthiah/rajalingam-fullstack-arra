import { Download, Briefcase, GraduationCap, Code } from "lucide-react";
import PageTransition from "../components/common/PageTransition";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import SkillGroupsGrid from "../components/common/SkillGroupsGrid";
import { profile, experience, education } from "../data/portfolio";

const SectionHeading = ({ icon: Icon, children }) => (
  <h2 className="flex items-center gap-3 mb-6 text-3xl font-bold">
    <Icon className="w-8 h-8 text-neon-blue" aria-hidden="true" />
    <span className="gradient-text">{children}</span>
  </h2>
);

const Resume = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-page pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title="Resume"
            subtitle={`${profile.title} · ${profile.location}`}
          />

          <div className="flex justify-center mb-12">
            <Button
              href={profile.resume.path}
              download={profile.resume.file}
              variant="primary"
              icon={Download}
            >
              Download Resume PDF
            </Button>
          </div>

          <section className="mb-12" aria-labelledby="resume-experience">
            <SectionHeading icon={Briefcase}>
              <span id="resume-experience">Experience</span>
            </SectionHeading>
            <div className="space-y-6">
              {experience.map((exp) => (
                <Card
                  key={`${exp.company}-${exp.period}`}
                  glow
                  hover={false}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-neon-blue before:to-neon-purple before:rounded-full"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-neon-blue">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold">
                        {exp.company}
                        <span className="text-sm font-normal text-gray-400">
                          {" "}
                          · {exp.location}
                        </span>
                      </p>
                    </div>
                    <span className="text-sm text-gray-400 md:text-right">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start text-sm text-gray-300 leading-relaxed"
                      >
                        <span className="text-neon-blue mr-2" aria-hidden="true">
                          ▹
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12" aria-labelledby="resume-education">
            <SectionHeading icon={GraduationCap}>
              <span id="resume-education">Education</span>
            </SectionHeading>
            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.degree} glow hover={false}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                    <div>
                      <h3 className="text-xl font-bold text-neon-blue">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold">
                        {edu.school}
                        {edu.university && (
                          <span className="text-sm font-normal text-gray-400">
                            {" "}
                            · {edu.university}
                          </span>
                        )}
                      </p>
                    </div>
                    <p className="text-sm text-gray-400 md:text-right">
                      {edu.period}
                      {edu.status && (
                        <span className="block text-neon-blue font-semibold">
                          {edu.status}
                        </span>
                      )}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section aria-labelledby="resume-skills">
            <SectionHeading icon={Code}>
              <span id="resume-skills">Skills</span>
            </SectionHeading>
            <SkillGroupsGrid />
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;
