import { useCallback, useEffect, useMemo } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Github, GraduationCap, SearchX } from "lucide-react";
import PageTransition from "../components/common/PageTransition";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import { FeaturedBento, ProjectGrid } from "../components/projects/ProjectCard";
import CaseStudyModal from "../components/projects/CaseStudyModal";
import { projects, projectCategories, socialLinks } from "../data/portfolio";
import useDocumentTitle from "../hooks/useDocumentTitle";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);
const countFor = (id) =>
  id === "all" ? projects.length : projects.filter((p) => p.categories.includes(id)).length;

const STATS = [
  `${projects.length} projects`,
  `${featured.length} featured`,
  `${projects.filter((p) => p.links?.demo).length} live demos`,
  `${projects.filter((p) => p.status === "In progress").length} in progress`,
];

const FROM_CARD = "caseStudyFromCard";
const GITHUB_URL = socialLinks.find((l) => l.key === "github").href;

/**
 * Ends the "More projects" grid evenly: 7 cards + this tile = 8 cells at 2
 * columns (tile spans 1) and 9 cells at 3 columns (tile spans 2).
 */
const githubTile = {
  className: "md:col-span-1 lg:col-span-2",
  node: (
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-github-tile
      aria-label="Explore more on GitHub (opens in a new tab)"
      className="group flex h-full min-h-[16rem] flex-col justify-center gap-4 rounded-2xl border border-dashed border-cyan-700/30 bg-cyan-50/60 p-6 transition-colors hover:border-cyan-700 sm:p-8 dark:border-neon-blue/25 dark:bg-neon-blue/[0.04] dark:hover:border-neon-blue/60"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-600 to-purple-600 text-white">
        <Github className="h-7 w-7" aria-hidden="true" />
      </span>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-neon-blue">
        Open source
      </span>
      <span className="text-2xl font-bold font-display text-gray-900 dark:text-white">
        Explore more on GitHub
      </span>
      <span className="max-w-measure text-gray-700 dark:text-gray-300">
        Code, READMEs and experiments behind these projects, plus work that isn&rsquo;t listed here.
      </span>
      <span className="inline-flex items-center gap-1.5 font-semibold text-cyan-800 dark:text-neon-blue">
        github.com/RajalingamMuthiah
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </a>
  ),
};

const Projects = () => {
  useDocumentTitle({
    title: "Projects — RAG, LLM Evaluation, Computer Vision | Rajalingam Muthiah",
    description:
      "AI/ML, computer vision and full-stack projects by Rajalingam Muthiah, including MedQuery (RAG with hallucination evaluation), ADLC (LangGraph agents), Codey and Askimo.",
  });

  const location = useLocation();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const filter = params.get("filter") ?? "all";

  // Case study modal follows the URL hash: /projects#medquery
  const hashId = decodeURIComponent(location.hash.slice(1));
  const openProject = projects.find((p) => p.id === hashId) ?? null;
  const openedFromCard = Boolean(location.state?.[FROM_CARD]);

  // Deep link (e.g. /services proof links or a shared URL): bring the card
  // into view behind the modal once the page-enter animation has finished.
  useEffect(() => {
    if (!openProject || openedFromCard) return undefined;
    const timer = setTimeout(
      () => document.getElementById(hashId)?.scrollIntoView({ block: "start", behavior: "instant" }),
      450,
    );
    return () => clearTimeout(timer);
  }, [hashId, openProject, openedFromCard]);

  const openCaseStudy = useCallback(
    (id) =>
      navigate(
        { pathname: "/projects", search: location.search, hash: id },
        { state: { [FROM_CARD]: true } },
      ),
    [navigate, location.search],
  );

  const closeCaseStudy = useCallback(() => {
    const id = hashId;
    // Opened from a card: step back so the browser Back button stays natural.
    // Deep link: drop the hash in place.
    if (openedFromCard) navigate(-1);
    else navigate({ pathname: "/projects", search: location.search }, { replace: true });
    requestAnimationFrame(() =>
      document.getElementById(`case-study-${id}`)?.focus({ preventScroll: true }),
    );
  }, [hashId, openedFromCard, navigate, location.search]);

  const setFilter = (id) =>
    setParams(id === "all" ? {} : { filter: id }, { replace: true, preventScrollReset: true });

  // Filtered view: one unified grid, featured first.
  const filtered = useMemo(
    () =>
      projects
        .filter((p) => p.categories.includes(filter))
        .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))),
    [filter],
  );

  return (
    <PageTransition>
      <div className="min-h-screen pt-page pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            as="h1"
            eyebrow="Portfolio"
            title="Projects"
            subtitle="RAG, LLM evaluation, computer vision and agentic AI — built, measured and shipped."
          />

          <ul
            aria-label="Project stats"
            className="-mt-4 mb-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium text-gray-600 dark:text-gray-400"
          >
            {STATS.map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="text-gray-400 dark:text-gray-600">·</span>}
                {s}
              </li>
            ))}
          </ul>

          {/* Filter bar: sticks below the fixed header while the list scrolls */}
          <div
            data-filter-bar
            className="sticky z-30 -mx-4 mb-8 border-b border-gray-200/80 bg-gray-50/85 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 dark:border-white/10 dark:bg-dark-bg/85"
            style={{ top: "var(--header-h)" }}
          >
            <div
              role="group"
              aria-label="Filter projects"
              className="flex gap-2 overflow-x-auto [scrollbar-width:none] sm:justify-center [&::-webkit-scrollbar]:hidden"
            >
              {projectCategories.map((cat) => {
                const active = filter === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setFilter(cat.id)}
                    aria-pressed={active}
                    className={`inline-flex flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      active
                        ? "border-transparent bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-md shadow-cyan-500/20"
                        : "border-gray-300 bg-white text-gray-700 hover:border-cyan-600 dark:border-white/15 dark:bg-white/5 dark:text-gray-300 dark:hover:border-neon-blue/60"
                    }`}
                  >
                    {cat.label}
                    <span
                      className={`rounded-full px-1.5 text-xs tabular-nums ${
                        active ? "bg-white/25" : "bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-400"
                      }`}
                    >
                      {countFor(cat.id)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            {filter === "all" ? (
              <motion.div
                key="all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-14"
              >
                <section aria-labelledby="featured-heading">
                  <h2 id="featured-heading" className="mb-6 text-2xl font-bold">
                    Featured
                  </h2>
                  <FeaturedBento projects={featured} onOpenCaseStudy={openCaseStudy} />
                </section>

                <section aria-labelledby="more-heading">
                  <h2 id="more-heading" className="mb-6 text-2xl font-bold">
                    More projects
                  </h2>
                  <ProjectGrid
                    projects={others}
                    compact
                    gridId="more"
                    onOpenCaseStudy={openCaseStudy}
                    extra={githubTile}
                  />
                </section>
              </motion.div>
            ) : (
              <motion.section
                key="filtered"
                aria-label="Filtered projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <p className="sr-only" aria-live="polite">
                  {filtered.length} projects shown
                </p>
                {filtered.length > 0 ? (
                  <ProjectGrid projects={filtered} gridId="filtered" eagerFirst onOpenCaseStudy={openCaseStudy} />
                ) : (
                  <div
                    data-empty-state
                    className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-gray-300 px-6 py-16 text-center dark:border-white/15"
                  >
                    <SearchX className="h-10 w-10 text-gray-400" aria-hidden="true" />
                    <p className="text-lg font-semibold">No projects in this category yet.</p>
                    <Button variant="ghost" size="sm" onClick={() => setFilter("all")}>
                      Show all projects
                    </Button>
                  </div>
                )}
              </motion.section>
            )}
          </AnimatePresence>

          {/* Closing CTA */}
          <section
            aria-labelledby="projects-cta-heading"
            className="mt-16 grid gap-4 md:grid-cols-2"
          >
            <h2 id="projects-cta-heading" className="sr-only">
              Work with me
            </h2>
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-cyan-600/30 bg-cyan-50 p-6 sm:p-8 dark:border-neon-blue/25 dark:bg-neon-blue/[0.05]">
              <p className="text-xl font-bold font-display">
                Want something like this for your business?
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                RAG chatbots, document AI, computer vision and LLM evaluation — scoped and built for your data.
              </p>
              <Button to="/services" variant="primary" icon={Briefcase} className="mt-auto">
                Hire me for a project
              </Button>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-pathwise-600/40 bg-pathwise-50 p-6 sm:p-8 dark:border-pathwise-400/30 dark:bg-pathwise-400/[0.06]">
              <p className="text-xl font-bold font-display">Want to build projects like these?</p>
              <p className="text-gray-700 dark:text-gray-300">
                Pathwise mentoring: a roadmap, portfolio projects and interview prep. The first 20-minute call is free.
              </p>
              <Button to="/mentorship" variant="pathwise" icon={GraduationCap} className="mt-auto">
                Get mentored
              </Button>
            </div>
          </section>
        </div>
      </div>

      <CaseStudyModal project={openProject} onClose={closeCaseStudy} />
    </PageTransition>
  );
};

export default Projects;
