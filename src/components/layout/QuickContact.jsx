import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  Download,
  GraduationCap,
  MessageCircle,
  Plus,
} from "lucide-react";
import SmartLink from "../common/SmartLink";
import {
  destinations,
  mentorship,
  profile,
  whatsappLink,
} from "../../data/portfolio";

const FAB_ITEMS = [
  {
    label: "WhatsApp me",
    icon: MessageCircle,
    props: { href: whatsappLink() },
    newTab: true,
  },
  {
    label: "Book mentoring call",
    icon: GraduationCap,
    props: { href: mentorship.bookCall.href },
    newTab: true,
    pathwise: true,
  },
  {
    label: "Download resume",
    icon: Download,
    props: { href: profile.resume.path, download: profile.resume.file },
  },
];

/** Desktop/tablet (≥768px): one floating button that expands into quick actions. */
const FloatingActions = () => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const toggleRef = useRef(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="hidden md:flex fixed bottom-8 right-8 z-[45] flex-col items-end gap-3"
    >
      <AnimatePresence>
        {open && (
          <motion.ul
            id={menuId}
            aria-label="Quick contact"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="flex flex-col items-end gap-2"
          >
            {FAB_ITEMS.map(({ label, icon: Icon, props, newTab, pathwise }) => (
              <li key={label}>
                <SmartLink
                  {...props}
                  onClick={() => setOpen(false)}
                  aria-label={newTab ? `${label} (opens in a new tab)` : undefined}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-blue ${
                    pathwise
                      ? "bg-pathwise-700 text-white"
                      : "bg-white text-gray-900 border border-gray-200 dark:bg-gray-900 dark:text-white dark:border-white/15"
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </SmartLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <button
        ref={toggleRef}
        id="fab-toggle"
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label="Contact me: WhatsApp, mentoring call or resume"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-600 to-purple-600 text-white shadow-xl shadow-cyan-500/30 transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-blue"
      >
        <Plus
          className={`h-6 w-6 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

/** Mobile (<768px): slim sticky bar with the two main actions. */
const MobileActionBar = () => (
  <nav
    aria-label="Quick actions"
    id="mobile-action-bar"
    className="md:hidden fixed inset-x-0 bottom-0 z-[45] border-t border-gray-200 bg-white/95 backdrop-blur-lg px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] dark:border-white/10 dark:bg-dark-bg/95"
  >
    <div className="grid grid-cols-2 gap-2">
      <SmartLink
        {...destinations.mentoring}
        className="flex items-center justify-center gap-2 rounded-xl bg-pathwise-700 py-2.5 text-sm font-semibold text-white"
      >
        <GraduationCap className="h-4 w-4" aria-hidden="true" />
        Mentoring
      </SmartLink>
      <SmartLink
        {...destinations.services}
        className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 py-2.5 text-sm font-semibold text-white"
      >
        <Briefcase className="h-4 w-4" aria-hidden="true" />
        Hire me
      </SmartLink>
    </div>
  </nav>
);

const QuickContact = () => (
  <>
    <FloatingActions />
    <MobileActionBar />
  </>
);

export default QuickContact;
