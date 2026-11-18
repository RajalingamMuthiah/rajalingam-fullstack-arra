import { useState } from "react";
import PageTransition from "../components/common/PageTransition";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import {
  FeaturedGrid,
  ProjectCard,
} from "../components/projects/ProjectCard";
import { projects, projectCategories } from "../data/portfolio";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));
  const featured = visible.filter((p) => p.featured);
  const others = visible.filter((p) => !p.featured);

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Projects"
            subtitle="AI/ML, computer vision and full-stack work"
          />

          <div
            className="flex flex-wrap justify-center gap-3 mb-10"
            role="group"
            aria-label="Filter projects"
          >
            {projectCategories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? "primary" : "secondary"}
                onClick={() => setFilter(cat.id)}
                aria-pressed={filter === cat.id}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {featured.length > 0 && (
            <section aria-labelledby="featured-heading" className="mb-12">
              <h2
                id="featured-heading"
                className="text-2xl font-bold gradient-text mb-6"
              >
                Featured
              </h2>
              <FeaturedGrid projects={featured} />
            </section>
          )}

          {others.length > 0 && (
            <section aria-labelledby="other-heading">
              <h2
                id="other-heading"
                className="text-2xl font-bold gradient-text mb-6"
              >
                Other Projects
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {others.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
