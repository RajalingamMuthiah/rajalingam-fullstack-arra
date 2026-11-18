import { motion } from "framer-motion";
import { ArrowRight, Code2, Compass, GraduationCap, MessageCircle } from "lucide-react";
import Button from "../common/Button";
import { mentorship } from "../../data/portfolio";

const ICONS = { compass: Compass, code: Code2, graduation: GraduationCap };

/** Compact Pathwise teaser on Home; the full landing page is /mentorship. */
const PathwiseTeaser = () => (
  <section
    id="pathwise"
    aria-labelledby="pathwise-teaser-heading"
    className="scroll-mt-header py-8 px-4 sm:px-6 lg:px-8"
  >
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] items-center rounded-2xl border border-teal-600/40 bg-teal-50 p-6 sm:p-8 dark:border-teal-400/30 dark:bg-teal-400/[0.05]"
    >
      <div className="space-y-4">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">
          Mentorship
        </p>
        <h2
          id="pathwise-teaser-heading"
          className="text-2xl sm:text-3xl font-bold font-display"
        >
          {mentorship.teaser.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-[70ch]">
          {mentorship.teaser.text}
        </p>
        <ul className="flex flex-wrap gap-2" aria-label="Pathwise services">
          {mentorship.services.map(({ icon, title }) => {
            const Icon = ICONS[icon] ?? Compass;
            return (
              <li
                key={title}
                className="inline-flex items-center gap-1.5 rounded-full border border-teal-600/30 bg-white px-3 py-1 text-sm font-medium text-teal-800 dark:border-teal-400/30 dark:bg-transparent dark:text-teal-300"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
        <Button to="/mentorship" variant="pathwise" icon={ArrowRight}>
          {mentorship.teaser.cta}
        </Button>
        <Button
          href={mentorship.bookCall.href}
          variant="ghost"
          icon={MessageCircle}
          aria-label="Book a free 20-minute call on WhatsApp (opens in a new tab)"
        >
          Book a free call
        </Button>
      </div>
    </motion.div>
  </section>
);

export default PathwiseTeaser;
