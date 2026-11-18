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
            tone === 'pathwise' ? 'text-teal-700 dark:text-teal-400' : 'text-cyan-700 dark:text-neon-blue'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Heading id={id} className="text-4xl md:text-5xl font-bold font-display mb-4">
        <span className="gradient-text">{title}</span>
      </Heading>
      {subtitle && (
        <p className={`text-gray-400 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-purple ${
        align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
      }`} />
    </motion.div>
  );
};

export default SectionTitle;
