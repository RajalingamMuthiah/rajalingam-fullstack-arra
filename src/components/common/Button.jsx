import { motion } from 'framer-motion';
import SmartLink from './SmartLink';
import { Loader2 } from 'lucide-react';

const MotionSmartLink = motion.create(SmartLink);

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  loading = false,
  className = '',
  to,
  href,
  section,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-blue';

  const variants = {
    primary: 'text-white bg-gradient-to-r from-cyan-600 to-purple-600 hover:shadow-lg hover:shadow-neon-blue/40',
    // Pathwise mentoring actions use teal so they are recognisable site-wide.
    pathwise: 'text-white bg-teal-700 hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/40',
    secondary: 'glass hover:bg-white/10',
    outline: 'border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-gray-900',
    ghost: 'border border-gray-400/40 hover:border-gray-400/70 hover:bg-gray-500/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  // Render as a link (route, Home section or URL — see SmartLink) or a button;
  // never a button nested in a link.
  const isLink = Boolean(to || href || section);
  const Component = isLink ? MotionSmartLink : motion.button;
  const elementProps = isLink ? { to, href, section } : { disabled: loading };

  return (
    <Component
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...elementProps}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {Icon && <Icon className="w-5 h-5 mr-2" aria-hidden="true" />}
          {children}
        </>
      )}
    </Component>
  );
};

export default Button;
