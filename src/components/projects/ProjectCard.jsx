import {
  ExternalLink,
  Github,
  PlayCircle,
  Users,
  Clock,
  AlertTriangle,
  FolderGit2,
} from "lucide-react";
import Card from "../common/Card";

const LINK_TYPES = [
  { key: "demo", label: "Live demo", icon: ExternalLink },
  { key: "video", label: "Demo video", icon: PlayCircle },
  { key: "github", label: "Code", icon: Github },
];

const ProjectLinks = ({ project }) => {
  const available = LINK_TYPES.filter(({ key }) => project.links?.[key]);
  if (!available.length) return null;
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      {available.map(({ key, label, icon: Icon }) => (
        <a
          key={key}
          href={project.links[key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label}: ${project.title} (opens in a new tab)`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-white/5 border border-white/10 hover:border-neon-blue hover:text-neon-blue transition-colors"
        >
          <Icon className="w-4 h-4" aria-hidden="true" />
          {label}
        </a>
      ))}
    </div>
  );
};

const Badges = ({ project }) => {
  const badges = [
    project.status && { icon: Clock, text: project.status, tone: "amber" },
    project.collaborator && {
      icon: Users,
      text: `Collaborator: ${project.collaborator}`,
      tone: "blue",
    },
    project.availability && { icon: null, text: project.availability, tone: "gray" },
  ].filter(Boolean);
  if (!badges.length) return null;
  const tones = {
    amber: "bg-amber-400/10 text-amber-300 border-amber-400/30",
    blue: "bg-neon-blue/10 text-neon-blue border-neon-blue/30",
    gray: "bg-white/5 text-gray-300 border-white/15",
  };
  return (
    <div className="flex flex-wrap gap-2">
      {badges.map(({ icon: Icon, text, tone }) => (
        <span
          key={text}
          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${tones[tone]}`}
        >
          {Icon && <Icon className="w-3.5 h-3.5" aria-hidden="true" />}
          {text}
        </span>
      ))}
    </div>
  );
};

const Tags = ({ tags }) => (
  <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
    {tags.map((tag) => (
      <li
        key={tag}
        className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium"
      >
        {tag}
      </li>
    ))}
  </ul>
);

const Results = ({ results }) => (
  <div className="rounded-xl border border-neon-blue/20 bg-neon-blue/5 p-4">
    <p className="text-xs uppercase tracking-wide text-neon-blue font-semibold mb-3">
      {results.caption}
    </p>
    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {results.items.map(({ label, value }) => (
        <div key={label}>
          <dt className="text-xs text-gray-400">{label}</dt>
          <dd className="text-lg font-bold whitespace-nowrap">{value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

/**
 * Large card for featured projects: details, results and notes inline.
 * Projects with `results` get a full-width, two-column layout (see
 * isWideFeatured) so short featured cards are not stretched to match.
 */
export const isWideFeatured = (project) => Boolean(project.results);

export const FeaturedProjectCard = ({ project }) => {
  const wide = isWideFeatured(project);

  const intro = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl font-bold gradient-text">{project.title}</h3>
          {project.subtitle && (
            <p className="text-sm text-gray-400 mt-1">{project.subtitle}</p>
          )}
        </div>
        <span className="px-3 py-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-xs font-semibold text-white flex-shrink-0">
          Featured
        </span>
      </div>
      <Badges project={project} />
      <p className="text-gray-300 leading-relaxed">{project.summary}</p>
      {project.details && (
        <ul className="space-y-1.5">
          {project.details.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-gray-400">
              <span className="text-neon-blue" aria-hidden="true">
                ▹
              </span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );

  const outro = (
    <>
      {project.results && <Results results={project.results} />}
      {project.note && (
        <p className="flex items-start gap-2 text-xs text-amber-300/90">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          <span>{project.note}</span>
        </p>
      )}
      <div className="mt-auto space-y-3">
        <Tags tags={project.tags} />
        <ProjectLinks project={project} />
      </div>
    </>
  );

  if (wide) {
    return (
      <Card glow hover={false} className="h-full grid gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col gap-4">{intro}</div>
        <div className="flex flex-col gap-4 lg:pt-12">{outro}</div>
      </Card>
    );
  }
  return (
    <Card glow hover={false} className="h-full flex flex-col gap-4">
      {intro}
      {outro}
    </Card>
  );
};

/** Grid for featured cards: wide ones span the full row, others sit two per row. */
export const FeaturedGrid = ({ projects }) => (
  <div className="grid gap-6 lg:grid-cols-2">
    {projects.map((p) => (
      <div key={p.id} className={isWideFeatured(p) ? "lg:col-span-2" : ""}>
        <FeaturedProjectCard project={p} />
      </div>
    ))}
  </div>
);

/** Compact card for other projects. */
export const ProjectCard = ({ project }) => (
  <Card glow hover={false} className="h-full flex flex-col gap-3 overflow-hidden">
    <div className="relative h-40 -mx-6 -mt-6 mb-1 overflow-hidden">
      {project.image ? (
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 via-neon-purple/15 to-transparent flex items-center justify-center">
          <FolderGit2 className="w-12 h-12 text-neon-blue/70" aria-hidden="true" />
        </div>
      )}
    </div>

    <h3 className="text-lg font-bold">{project.title}</h3>
    {project.date && (
      <p className="text-xs text-neon-blue font-semibold -mt-2">{project.date}</p>
    )}
    <Badges project={project} />
    <p className="text-sm text-gray-400 leading-relaxed">{project.summary}</p>

    <div className="mt-auto space-y-3">
      <Tags tags={project.tags} />
      <ProjectLinks project={project} />
    </div>
  </Card>
);
