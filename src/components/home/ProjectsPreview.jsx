import { ArrowRight } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import { FeaturedGrid } from "../projects/ProjectCard";
import { projects } from "../../data/portfolio";

const featured = projects.filter((p) => p.featured);

const ProjectsPreview = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-header py-8 md:py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Featured Projects"
          subtitle="RAG and LLM evaluation, agentic planning, secure code execution, and voice-enabled inventory"
        />
        <div className="mb-10">
          <FeaturedGrid projects={featured} />
        </div>
        <div className="text-center">
          <Button to="/projects" variant="primary" icon={ArrowRight}>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
