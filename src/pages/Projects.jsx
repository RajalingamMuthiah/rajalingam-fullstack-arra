import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/common/PageTransition";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import {
  FeaturedGrid,
  ProjectCard,
} from "../components/projects/ProjectCard";
import { projects, projectCategories } from "../data/portfolio";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Projects = () => {
  useDocumentTitle({
    title: "Projects — RAG, LLM Evaluation, Computer Vision | Rajalingam Muthiah",
    description:
      "AI/ML, computer vision and full-stack projects by Rajalingam Muthiah, including MedQuery (RAG with hallucination evaluation), ADLC (LangGraph agents), Codey and Askimo.",
  });
  const [filter, setFilter] = useState("all");
  const { hash } = useLocation();

  // /projects#medquery (e.g. "Proof" links on /services): scroll to that card
  // once the page-enter animation has finished.
  useEffect(() => {
    if (!hash) return undefined;
    const timer = setTimeout(
      () => document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start", behavior: "instant" }),
      450, // PageTransition (300ms) plus a margin, so the layout has settled
    );
    return () => clearTimeout(timer);
  }, [hash]);

  const visible =
    filter === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));
  const featured = visible.filter((p) => p.featured);
  const others = visible.filter((p) => !p.featured);

  return (
    <PageTransition>
      <div className="min-h-screen pt-page pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            as="h1"
            eyebrow="Portfolio"
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
                className="text-2xl font-bold mb-6"
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
                className="text-2xl font-bold mb-6"
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
