import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import { FeaturedBento, ProjectCover } from "../projects/ProjectCard";
import { projects } from "../../data/portfolio";

// Same bento pattern as /projects: MedQuery wide, then ADLC and Askimo.
const HOME_FEATURED = ["medquery", "adlc", "askimo"].map((id) =>
  projects.find((p) => p.id === id),
);
const preview = projects.filter((p) => !HOME_FEATURED.includes(p)).slice(0, 4);
const moreTitles = preview.map((p) => p.title.split(" – ")[0]);

const ProjectsPreview = () => (
  <section id="projects" className="scroll-mt-header py-8 md:py-10 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <SectionTitle
        eyebrow="Selected work"
        title="Featured Projects"
        subtitle="RAG with measured hallucination evaluation, agentic planning and computer vision"
      />
      <FeaturedBento projects={HOME_FEATURED}>
        {/* Fills the rest of Askimo's row (2 columns on ≥768px) */}
        <Link
          to="/projects"
          className="group flex flex-col gap-4 rounded-2xl border border-dashed border-cyan-700/30 bg-cyan-50/60 p-6 sm:p-8 transition-colors hover:border-cyan-700 dark:border-neon-blue/25 dark:bg-neon-blue/[0.04] dark:hover:border-neon-blue/60 md:col-span-2"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-neon-blue">
            {projects.length} projects in total
          </span>
          <span className="text-2xl font-bold font-display text-gray-900 dark:text-white">
            More AI, computer vision and full-stack work
          </span>
          <span className="text-gray-700 dark:text-gray-300">
            Including {moreTitles.join(", ")} and more — each with a short case study.
          </span>
          <span className="inline-flex items-center gap-2 font-semibold text-cyan-800 dark:text-neon-blue">
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
          {/* Preview of more covers (decorative; the link text says it all) */}
          <span className="mt-auto grid grid-cols-2 gap-3" aria-hidden="true">
            {preview.map((p) => (
              <span key={p.id} className="block overflow-hidden rounded-xl border border-white/10">
                <ProjectCover project={p} decorative />
              </span>
            ))}
          </span>
        </Link>
      </FeaturedBento>
    </div>
  </section>
);

export default ProjectsPreview;
