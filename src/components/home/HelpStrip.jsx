import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Briefcase, FileText, GraduationCap } from "lucide-react";
import SmartLink from "../common/SmartLink";
import { brand, destinations, trustBadges } from "../../data/portfolio";

const ICONS = { graduation: GraduationCap, briefcase: Briefcase, file: FileText };

/** "I can help you" — one clickable card per audience, then the trust strip. */
const HelpStrip = () => (
  <section
    id="help"
    aria-labelledby="help-heading"
    className="scroll-mt-header px-4 sm:px-6 lg:px-8 pb-8"
  >
    <div className="max-w-7xl mx-auto">
      <h2
        id="help-heading"
        className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-4"
      >
        I can help you
      </h2>

      <ul className="grid gap-4 md:grid-cols-3">
        {brand.audiences.map((a, i) => {
          const Icon = ICONS[a.icon];
          const external = Boolean(destinations[a.destination].href);
          return (
            <motion.li
              key={a.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
            >
              <SmartLink
                {...destinations[a.destination]}
                aria-label={`${a.audience}: ${a.text} ${a.action}${external ? " (opens in a new tab)" : ""}`}
                className={`group flex h-full flex-col gap-3 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  a.pathwise
                    ? "border-teal-600/40 bg-teal-50 hover:border-teal-600 hover:shadow-lg hover:shadow-teal-500/15 focus-visible:outline-teal-500 dark:border-teal-400/30 dark:bg-teal-400/5 dark:hover:border-teal-400"
                    : "border-gray-200 bg-white hover:border-cyan-600/60 hover:shadow-lg hover:shadow-cyan-500/10 focus-visible:outline-neon-blue dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-neon-blue/50"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                      a.pathwise
                        ? "bg-teal-700 text-white"
                        : "bg-gradient-to-br from-cyan-600 to-purple-600 text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-lg font-semibold">
                    {a.audience}
                  </span>
                </span>
                <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {a.text}
                </span>
                <span
                  className={`mt-auto inline-flex items-center gap-1 text-sm font-semibold ${
                    a.pathwise
                      ? "text-teal-700 dark:text-teal-400"
                      : "text-cyan-700 dark:text-neon-blue"
                  }`}
                >
                  {a.action}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </SmartLink>
            </motion.li>
          );
        })}
      </ul>

      {/* Trust strip — text badges only */}
      <ul
        aria-label="Highlights"
        className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3"
      >
        {trustBadges.map((badge) => (
          <li
            key={badge}
            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300"
          >
            <BadgeCheck
              className="h-4 w-4 text-cyan-700 dark:text-neon-blue"
              aria-hidden="true"
            />
            {badge}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HelpStrip;
