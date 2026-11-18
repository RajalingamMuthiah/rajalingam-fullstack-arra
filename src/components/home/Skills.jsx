import SectionTitle from "../common/SectionTitle";
import SkillGroupsGrid from "../common/SkillGroupsGrid";

const Skills = () => {
  return (
    <section
      id="skills"
      className="scroll-mt-header py-8 md:py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Skills"
          title="Tech Stack"
          subtitle="Technologies and tools I work with"
        />
        <SkillGroupsGrid />
      </div>
    </section>
  );
};

export default Skills;
