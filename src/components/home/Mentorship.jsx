import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Compass,
  Code2,
  GraduationCap,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Mail,
  X,
  ZoomIn,
} from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import Button from "../common/Button";
import { mentorship } from "../../data/portfolio";

const ICONS = { compass: Compass, code: Code2, graduation: GraduationCap };

/** Full-size flyer viewer. Closes on Esc, backdrop click or the close button. */
const FlyerLightbox = ({ open, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Pathwise flyer, full size"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close flyer"
            className="absolute top-4 right-4 p-2 rounded-lg glass hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
          <motion.img
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            src={mentorship.flyer.src}
            alt={mentorship.flyer.alt}
            width={mentorship.flyer.width}
            height={mentorship.flyer.height}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-auto max-w-full rounded-xl shadow-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Mentorship = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const triggerRef = useRef(null);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    triggerRef.current?.focus();
  }, []);

  return (
    <section
      id="pathwise"
      className="scroll-mt-header py-8 md:py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title={mentorship.sectionTitle}
          subtitle="Career mentoring for students and early-career engineers"
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start">
          {/* Flyer */}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label="Open the Pathwise flyer at full size"
            className="group relative block w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-neon-blue/10 border border-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-neon-blue"
          >
            <img
              src={mentorship.flyer.src}
              alt={mentorship.flyer.alt}
              width={mentorship.flyer.width}
              height={mentorship.flyer.height}
              loading="lazy"
              decoding="async"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-black/70 text-white">
              <ZoomIn className="w-4 h-4" aria-hidden="true" />
              View full size
            </span>
          </button>

          {/* Text */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                {mentorship.heading}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {mentorship.intro}
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-3">
              {mentorship.services.map(({ icon, title, description }) => {
                const Icon = ICONS[icon] ?? Compass;
                return (
                  <li key={title}>
                    <Card glow hover={false} className="h-full !p-5 space-y-2">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                      </span>
                      <h4 className="font-bold">{title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {description}
                      </p>
                    </Card>
                  </li>
                );
              })}
            </ul>

            <div>
              <h4 className="text-sm font-semibold text-neon-blue uppercase tracking-wide mb-3">
                Meet your mentor
              </h4>
              <ul className="space-y-2">
                {mentorship.credentials.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2
                      className="w-5 h-5 text-neon-blue flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              {mentorship.location}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                href={mentorship.bookCall.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                icon={MessageCircle}
                aria-label={`${mentorship.bookCall.label} on WhatsApp (opens in a new tab)`}
              >
                {mentorship.bookCall.label}
              </Button>
              <Button href={mentorship.email.href} variant="secondary" icon={Mail}>
                {mentorship.email.label}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FlyerLightbox open={lightboxOpen} onClose={closeLightbox} />
    </section>
  );
};

export default Mentorship;
