import { motion } from 'framer-motion';

/**
 * Base card: rounded-2xl, 1px subtle border (.glass), glow on hover only
 * (`glow`), optional small lift on hover (`hover`).
 */
const Card = ({
  children,
  className = '',
  hover = true,
  glow = false,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      whileHover={hover ? { y: -3 } : undefined}
      className={`glass rounded-2xl p-6 ${glow ? 'glow-card' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
