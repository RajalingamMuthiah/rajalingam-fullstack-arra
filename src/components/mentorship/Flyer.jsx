import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { mentorship } from "../../data/portfolio";

const { flyer } = mentorship;

/** Full-size flyer viewer. Closes on Esc, backdrop click or the close button. */
const FlyerLightbox = ({ open, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      // Only one focusable element inside: keep Tab on it.
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
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
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
          <motion.img
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            src={flyer.src}
            alt={flyer.alt}
            width={flyer.width}
            height={flyer.height}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-auto max-w-full rounded-xl shadow-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/** Flyer thumbnail that opens the full-size viewer. */
const Flyer = ({ className = "", eager = false }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open the Pathwise flyer at full size"
        className={`group relative block w-full rounded-2xl overflow-hidden shadow-2xl shadow-pathwise-500/10 border border-gray-200 dark:border-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pathwise-500 ${className}`}
      >
        <img
          src={flyer.src}
          alt={flyer.alt}
          width={flyer.width}
          height={flyer.height}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-black/75 text-white">
          <ZoomIn className="w-4 h-4" aria-hidden="true" />
          View full size
        </span>
      </button>
      <FlyerLightbox open={open} onClose={close} />
    </>
  );
};

export default Flyer;
