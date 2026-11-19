import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, Lock, Users, X } from "lucide-react";
import { Badges, LINK_TYPES, ProjectCover, TagList, isPrivate } from "./ProjectCard";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const ResultsTable = ({ results }) => (
  <figure className="space-y-2">
    <figcaption className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-neon-blue">
      {results.caption}
    </figcaption>
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-white/10">
      <table className="w-full min-w-[34rem] text-left text-sm">
        <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-600 dark:bg-white/5 dark:text-gray-400">
          <tr>
            {results.columns.map((c) => (
              <th key={c} scope="col" className="px-3 py-2 font-semibold">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-white/10">
          {results.rows.map(([metric, ...cells]) => (
            <tr key={metric}>
              <th scope="row" className="px-3 py-2 font-medium text-gray-900 dark:text-white">
                {metric}
              </th>
              {cells.map((cell, i) => (
                <td
                  key={i}
                  className={`px-3 py-2 tabular-nums ${i === 1 ? "font-bold text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {results.footnote && (
      <p className="text-xs text-gray-600 dark:text-gray-400">{results.footnote}</p>
    )}
  </figure>
);

/**
 * Accessible case-study dialog: focus moves to the close button, Tab is
 * trapped inside, Esc / backdrop / close button all call onClose, body scroll
 * is locked while open. The caller returns focus to the trigger.
 */
const CaseStudyModal = ({ project, onClose }) => {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const open = Boolean(project);
  // Keep showing the last project while the exit animation runs.
  const lastRef = useRef(project);
  if (project) lastRef.current = project;
  const shown = project ?? lastRef.current;

  useEffect(() => {
    if (!open) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const nodes = [...dialogRef.current.querySelectorAll(FOCUSABLE)];
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey && (document.activeElement === first || !dialogRef.current.contains(document.activeElement))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          data-testid="case-study-backdrop"
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.22 }}
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-2xl border border-gray-200 bg-white shadow-2xl sm:rounded-2xl dark:border-white/10 dark:bg-gray-950"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-colors hover:bg-black/80"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="overflow-y-auto overscroll-contain">
              <ProjectCover project={shown} eager />

              <div className="space-y-5 p-5 sm:p-8">
                <header className="space-y-3">
                  <Badges project={shown} max={10} />
                  <h2
                    id="case-study-title"
                    className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl dark:text-white"
                  >
                    {shown.title}
                  </h2>
                  {shown.subtitle && (
                    <p className="text-gray-600 dark:text-gray-400">{shown.subtitle}</p>
                  )}
                </header>

                <p className="max-w-measure leading-relaxed text-gray-700 dark:text-gray-300">
                  {shown.summary}
                </p>

                {shown.details?.length > 0 && (
                  <ul className="space-y-2">
                    {shown.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="mt-0.5 text-cyan-700 dark:text-neon-blue" aria-hidden="true">
                          ▹
                        </span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {shown.highlights?.length > 0 && !shown.results && (
                  <ul className="flex flex-wrap gap-2" aria-label="Highlights">
                    {shown.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-lg bg-cyan-50 px-2.5 py-1 text-sm font-semibold text-cyan-900 dark:bg-neon-blue/10 dark:text-cyan-100"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {shown.results && <ResultsTable results={shown.results} />}

                {shown.role && (
                  <section className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/5">
                    <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-neon-blue">
                      My role
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">{shown.role}</p>
                  </section>
                )}

                {shown.team && (
                  <p className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <Users className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <span>
                      <span className="font-semibold">Team:</span> {shown.team.join(", ")}
                    </span>
                  </p>
                )}

                {shown.note && (
                  <p className="flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-sm text-amber-900 dark:bg-amber-400/10 dark:text-amber-200">
                    <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <span>{shown.note}</span>
                  </p>
                )}

                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                    Tech stack
                  </h3>
                  <TagList tags={shown.tags} />
                </div>

                <div className="flex flex-wrap gap-2 border-t border-gray-200 pt-5 dark:border-white/10">
                  {LINK_TYPES.filter(({ key }) => shown.links?.[key]).map(({ key, short, icon: Icon }) => (
                    <a
                      key={key}
                      href={shown.links[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${short}: ${shown.title} (opens in a new tab)`}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-800 transition-colors hover:border-cyan-700 hover:text-cyan-800 dark:border-white/15 dark:text-gray-200 dark:hover:border-neon-blue dark:hover:text-neon-blue"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {short}
                    </a>
                  ))}
                  {isPrivate(shown) && (
                    <span className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                      <Lock className="h-4 w-4" aria-hidden="true" />
                      {shown.availability}
                    </span>
                  )}
                  {shown.availability === "Demo on request" && (
                    <span className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400">
                      Live demo available on request
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default CaseStudyModal;
