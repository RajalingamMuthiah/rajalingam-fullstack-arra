import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
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
      <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
