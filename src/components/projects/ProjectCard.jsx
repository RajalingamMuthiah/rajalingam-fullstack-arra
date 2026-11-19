import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { projectCategories } from "../../data/portfolio";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Check,
  Clock,
  ExternalLink,
  Github,
  GraduationCap,
  Lock,
  PlayCircle,
  Star,
  Users,
} from "lucide-react";

/* -------------------------------------------------------------------------
 * Shared pieces (also used by the case-study modal)
 * ---------------------------------------------------------------------- */

export const LINK_TYPES = [
  { key: "github", label: "GitHub repository", short: "Code", icon: Github },
  { key: "demo", label: "Live demo", short: "Live demo", icon: ExternalLink },
  { key: "video", label: "Demo video", short: "Video", icon: PlayCircle },
];

/** Private repo: a status text but no public GitHub link. */
export const isPrivate = (p) => !p.links?.github && /private/i.test(p.availability ?? "");

const TONES = {
  featured: "bg-gradient-to-r from-cyan-600 to-purple-600 text-white border-transparent",
  purple: "bg-purple-50 text-purple-800 border-purple-600/30 dark:bg-neon-purple/10 dark:text-purple-200 dark:border-neon-purple/30",
  amber: "bg-amber-50 text-amber-800 border-amber-600/30 dark:bg-amber-400/10 dark:text-amber-200 dark:border-amber-400/30",
  blue: "bg-cyan-50 text-cyan-800 border-cyan-700/30 dark:bg-neon-blue/10 dark:text-cyan-100 dark:border-neon-blue/30",
  gray: "bg-gray-100 text-gray-700 border-gray-300 dark:bg-white/5 dark:text-gray-300 dark:border-white/15",
};

/** Badges in priority order; cards show the first `max`. */
export const projectBadges = (p, { featured = true } = {}) =>
  [
    featured && p.featured && { icon: Star, text: "Featured", tone: "featured" },
    ...(p.badges ?? []).map((text) => ({ icon: GraduationCap, text, tone: "purple" })),
    p.status && { icon: Clock, text: p.status, tone: "amber" },
    p.collaborator && { icon: Users, text: `Collaborator: ${p.collaborator}`, tone: "blue" },
    p.availability === "Demo on request" && { icon: null, text: "Demo on request", tone: "gray" },
  ].filter(Boolean);

/** "AI/ML · Full-Stack" — used when a card has no other badge or subtitle. */
export const categoryLabel = (p) =>
  p.categories
    .map((c) => projectCategories.find((x) => x.id === c)?.label)
    .filter(Boolean)
    .join(" · ");

export const Badges = ({ project, max = 3, featured = true, fallback = false }) => {
  let badges = projectBadges(project, { featured }).slice(0, max);
  if (!badges.length && fallback) badges = [{ icon: null, text: categoryLabel(project), tone: "gray" }];
  if (!badges.length) return null;
  return (
    <ul className="flex min-h-[1.375rem] flex-wrap gap-1.5" aria-label="Status">
      {badges.map(({ icon: Icon, text, tone }) => (
        <li
          key={text}
          className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${TONES[tone]}`}
        >
          {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
          {text}
        </li>
      ))}
    </ul>
  );
};

export const TagList = ({ tags = [], max = Infinity, reserve = false }) => {
  const shown = tags.slice(0, max);
  const rest = tags.slice(max);
  return (
    <ul
      className={`flex flex-wrap content-start gap-1.5 ${reserve ? "min-h-[3.25rem]" : ""}`}
      aria-label="Tech stack"
    >
      {shown.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
        >
          {tag}
        </li>
      ))}
      {rest.length > 0 && (
        <li
          title={rest.join(", ")}
          className="rounded-md border border-dashed border-gray-300 px-2 py-0.5 text-xs font-semibold text-gray-600 dark:border-white/20 dark:text-gray-400"
        >
          <span aria-hidden="true">+{rest.length}</span>
          <span className="sr-only">and {rest.join(", ")}</span>
        </li>
      )}
    </ul>
  );
};

const demoHost = (p) => {
  try {
    return new URL(p.links.demo).hostname;
  } catch {
    return p.title;
  }
};

// Same backdrop as the generated SVG covers (scripts/generate-covers.mjs).
const COVER_BG = {
  backgroundColor: "#0b1020",
  backgroundImage: [
    "radial-gradient(circle at 12% 10%, rgba(0,217,255,0.38), transparent 55%)",
    "radial-gradient(circle at 95% 95%, rgba(168,85,247,0.38), transparent 60%)",
    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
    "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
    "linear-gradient(135deg, #0b1020, #111827)",
  ].join(","),
  backgroundSize: "auto, auto, 24px 24px, 24px 24px, auto",
};

/**
 * 16:9 cover. Generated SVG covers are shown as-is; real screenshots sit in a
 * thin browser frame (dots + demo URL) on the same backdrop, so both look like
 * one family. `fill` (horizontal card) keeps 16:9 on mobile and fills the
 * card height from 768px up.
 */
const FeaturedRibbon = () => (
  <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 px-2.5 py-1 text-xs font-semibold text-white shadow-lg shadow-black/30">
    <Star className="h-3.5 w-3.5" aria-hidden="true" />
    Featured
  </span>
);

export const ProjectCover = ({ project, eager = false, fill = false, ribbon = false, decorative = false }) => {
  const screenshot = project.image && !project.image.endsWith(".svg");
  const box = fill ? "relative aspect-[16/9] md:aspect-auto md:h-full" : "relative aspect-[16/9]";
  const img = {
    src: project.image,
    alt: decorative ? "" : project.imageAlt || `Screenshot of ${project.title}`,
    loading: eager ? "eager" : "lazy",
    decoding: "async",
    // lowercase attribute: React 18 DOM does not know `fetchPriority`
    ...(eager ? { fetchpriority: "high" } : {}),
  };

  if (!screenshot) {
    return (
      <div className={`${box} overflow-hidden`} style={COVER_BG}>
        {ribbon && <FeaturedRibbon />}
        <img
          {...img}
          width="1280"
          height="720"
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] ${fill ? "md:object-contain" : ""}`}
        />
      </div>
    );
  }

  return (
    <div className={`${box} overflow-hidden`} style={COVER_BG}>
      {ribbon && <FeaturedRibbon />}
      <div className="absolute inset-x-[7%] top-[9%] -bottom-1 flex flex-col overflow-hidden rounded-t-lg border border-white/15 bg-slate-900 shadow-2xl shadow-black/50 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
        <div className="flex h-6 flex-shrink-0 items-center gap-2 border-b border-white/10 bg-slate-800 px-2.5" aria-hidden="true">
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-red-400/80" />
            <span className="h-2 w-2 rounded-full bg-amber-400/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          </span>
          <span className="min-w-0 flex-1 truncate rounded bg-slate-900/80 px-2 text-center text-[10px] leading-4 text-slate-300">
            {demoHost(project)}
          </span>
        </div>
        <div className="relative flex-1">
          <img {...img} width="1280" height="720" className="absolute inset-0 h-full w-full object-cover object-top" />
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------
 * Card
 * ---------------------------------------------------------------------- */

/** Before → after numbers under the cover of the wide featured card. */
const MetricsPanel = ({ metrics }) => (
  <div className="flex flex-col gap-3 rounded-xl border border-cyan-600/20 bg-cyan-50/70 p-4 xl:p-5 dark:border-neon-blue/20 dark:bg-neon-blue/[0.05]">
    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-neon-blue">
      {metrics.caption}
    </p>
    <dl className="grid gap-2 xl:gap-3">
      {metrics.items.map(({ label, from, to }) => (
        <div key={label} className="flex items-baseline justify-between gap-4 border-b border-gray-200 pb-2 last:border-0 last:pb-0 dark:border-white/10">
          <dt className="text-sm text-gray-700 dark:text-gray-300">{label}</dt>
          <dd className="flex items-center gap-1.5 whitespace-nowrap font-display text-lg font-bold tabular-nums text-gray-900 dark:text-white">
            {from && (
              <>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{from}</span>
                <ArrowRight className="h-4 w-4 text-cyan-700 dark:text-neon-blue" aria-label="to" />
              </>
            )}
            {to}
          </dd>
        </div>
      ))}
    </dl>
  </div>
);

const LinkIcons = ({ project }) => {
  const links = LINK_TYPES.filter(({ key }) => project.links?.[key]);
  if (!links.length) {
    return isPrivate(project) ? (
      <span
        title={project.availability}
        className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 dark:text-gray-400"
      >
        <Lock className="h-3.5 w-3.5" aria-hidden="true" />
        Private repo
      </span>
    ) : null;
  }
  return (
    <ul className="flex items-center gap-1">
      {links.map(({ key, label, icon: Icon }) => (
        <li key={key}>
          <a
            href={project.links[key]}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            aria-label={`${label}: ${project.title} (opens in a new tab)`}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 hover:text-cyan-700 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-neon-blue"
          >
            <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
};

const CASE_BTN =
  "inline-flex items-center gap-1.5 rounded-lg border border-cyan-700/30 bg-cyan-50 px-3 py-1.5 text-sm font-semibold text-cyan-800 transition-colors hover:border-cyan-700 hover:bg-cyan-100 dark:border-neon-blue/30 dark:bg-neon-blue/10 dark:text-cyan-100 dark:hover:border-neon-blue dark:hover:bg-neon-blue/20";

/**
 * "Case study": a button that opens the modal on /projects, or a link to
 * /projects#id elsewhere (which opens the same modal there).
 */
const CaseStudyTrigger = ({ project, onOpen }) => {
  const props = {
    id: `case-study-${project.id}`,
    className: CASE_BTN,
    "aria-label": `Case study: ${project.title}`,
    "aria-haspopup": "dialog",
  };
  const content = (
    <>
      <BookOpen className="h-4 w-4" aria-hidden="true" />
      Case study
    </>
  );
  return onOpen ? (
    <button type="button" onClick={() => onOpen(project.id)} {...props}>
      {content}
    </button>
  ) : (
    <Link to={`/projects#${project.id}`} {...props}>
      {content}
    </Link>
  );
};

/**
 * One card anatomy for every project: cover → badges → title/subtitle →
 * summary (3 lines) → highlights (≤ 3) → tags (4, or 5 on the wide card,
 * then "+N") → footer.
 * `horizontal` puts the cover on the left from 768px up (wide bento card).
 */
export const ProjectCard = forwardRef(
  ({ project, horizontal = false, eager = false, compact = false, onOpenCaseStudy, showFeatured = true }, ref) => (
    <article
      ref={ref}
      aria-labelledby={`title-${project.id}`}
      data-project-card={project.id}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-[border-color,box-shadow] duration-300 hover:border-cyan-600/60 hover:shadow-[0_16px_48px_-20px_rgba(8,145,178,0.45)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-neon-blue/50 dark:hover:shadow-[0_16px_48px_-20px_rgba(0,217,255,0.45)] ${
        horizontal ? "md:flex-row" : ""
      }`}
    >
      <div className={horizontal ? "md:w-1/2 md:flex-shrink-0" : ""}>
        <ProjectCover project={project} eager={eager} fill={horizontal} ribbon={showFeatured && project.featured} />
      </div>

      <div
        className={`flex flex-1 flex-col gap-3 ${
          horizontal ? "p-5 sm:p-6 md:gap-4 xl:gap-5 xl:p-8" : compact ? "p-5" : "p-5 sm:p-6"
        }`}
      >
        {/* Fixed-height blocks keep cards in a row aligned without gaps. */}
        <Badges project={project} featured={false} fallback />

        <div className={horizontal ? "" : compact ? "min-h-[4.25rem]" : "min-h-[4.6rem]"}>
          <h3
            id={`title-${project.id}`}
            className={`font-bold leading-snug text-gray-900 dark:text-white line-clamp-2 ${
              horizontal ? "text-2xl xl:text-3xl" : compact ? "text-lg" : "text-xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-1">
            {project.subtitle ||
              project.date ||
              // the badge row already shows the category when there is no other badge
              (projectBadges(project, { featured: false }).length ? categoryLabel(project) : " ")}
          </p>
        </div>

        <p
          data-summary
          className={`min-h-[4.875em] leading-relaxed text-gray-700 dark:text-gray-300 line-clamp-3 ${
            compact ? "text-sm" : horizontal ? "text-[0.9375rem] xl:text-base" : "text-[0.9375rem]"
          }`}
        >
          {project.summary}
        </p>

        {project.highlights?.length > 0 && (
          <ul
            className={`space-y-1 ${horizontal && project.metrics ? "md:hidden" : ""}`}
            aria-label="Highlights"
          >
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h} className="flex items-center gap-2 text-[13px] font-medium text-gray-800 dark:text-gray-200">
                <Check className="h-3.5 w-3.5 flex-shrink-0 text-cyan-700 dark:text-neon-blue" aria-hidden="true" />
                <span className="truncate" title={h}>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Wide featured card (≥768px): measured results instead of the list */}
        {horizontal && project.metrics && (
          <div className="hidden space-y-2 md:block">
            <MetricsPanel metrics={project.metrics} />
            {project.note && (
              <p className="flex items-start gap-1.5 text-xs text-amber-800 dark:text-amber-200/90">
                <AlertTriangle className="mt-px h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                {project.note}
              </p>
            )}
          </div>
        )}

        <TagList tags={project.tags} max={horizontal ? 5 : 4} reserve={!horizontal} />

        <div
          data-card-footer
          className="mt-auto flex items-center justify-between gap-3 border-t border-gray-200 pt-4 dark:border-white/10"
        >
          <CaseStudyTrigger project={project} onOpen={onOpenCaseStudy} />
          <LinkIcons project={project} />
        </div>
      </div>
    </article>
  ),
);
ProjectCard.displayName = "ProjectCard";

/* -------------------------------------------------------------------------
 * Grids
 * ---------------------------------------------------------------------- */

const item = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.97 },
  transition: { duration: 0.25 },
};

/**
 * Featured bento: the first project is a wide horizontal card (2 columns on
 * ≥768px), the rest are regular cards. 3 columns on ≥1024px, 2 on tablet,
 * 1 on mobile. Grid rows stretch, so cards in a row share one height.
 * `children` can add an extra tile at the end (e.g. "View all" on Home).
 */
export const FeaturedBento = ({ projects, onOpenCaseStudy, children }) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-grid="featured">
    {projects.map((p, i) => (
      <div
        key={p.id}
        id={p.id}
        className={`scroll-mt-project ${i === 0 ? "md:col-span-2" : ""}`}
      >
        <ProjectCard
          project={p}
          horizontal={i === 0}
          eager={i === 0}
          onOpenCaseStudy={onOpenCaseStudy}
        />
      </div>
    ))}
    {children}
  </div>
);

/** Uniform grid used for "More projects" and filtered results (animated). */
export const ProjectGrid = ({ projects, onOpenCaseStudy, compact = false, eagerFirst = false, gridId, extra }) => (
  <motion.ul layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-grid={gridId}>
    <AnimatePresence mode="popLayout" initial={false}>
    {projects.map((p, i) => (
      <motion.li key={p.id} id={p.id} layout {...item} className="scroll-mt-project">
        <ProjectCard
          project={p}
          compact={compact}
          eager={eagerFirst && i === 0}
          onOpenCaseStudy={onOpenCaseStudy}
        />
      </motion.li>
    ))}
    {extra && (
      <motion.li key="extra" layout {...item} className={extra.className}>
        {extra.node}
      </motion.li>
    )}
    </AnimatePresence>
  </motion.ul>
);
