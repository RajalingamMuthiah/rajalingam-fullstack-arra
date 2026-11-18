import { motion } from 'framer-motion';

/**
 * Section header: optional small uppercase eyebrow, title, one-line subtitle.
 * `tone="pathwise"` colours the eyebrow teal (mentoring sections only).
 * `as` sets the heading level (h1 on page heroes, h2 elsewhere).
 */
const SectionTitle = ({ eyebrow, title, subtitle, align = 'center', tone = 'brand', as: Heading = 'h2', id }) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-8 md:mb-10 ${alignmentClasses[align]}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] ${
            tone === 'pathwise' ? 'text-pathwise-700 dark:text-pathwise-400' : 'text-cyan-700 dark:text-neon-blue'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Heading id={id} className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-gray-900 dark:text-white mb-3">
        {title}
      </Heading>
      {subtitle && (
        <p className={`text-gray-600 dark:text-gray-400 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
