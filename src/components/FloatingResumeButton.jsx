import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Eye, FileText, X } from "lucide-react";

import { profile } from "../data/portfolio";

const RESUME_FILE = profile.resume.file;
const RESUME_PATH = profile.resume.path;

const miniButtonVariants = {
  closed: {
    opacity: 0,
    scale: 0.6,
    y: 8,
    x: 8,
    pointerEvents: "none",
    transition: { duration: 0.18 },
  },
  open: (position) => ({
    opacity: 1,
    scale: 1,
    y: position.y,
    x: position.x,
    pointerEvents: "auto",
    transition: {
      type: "spring",
      stiffness: 420,
      damping: 26,
    },
  }),
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const FloatingResumeButton = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showViewer, setShowViewer] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const rootRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastScrollY.current;
      const shouldHide = isScrollingDown && currentY > 120;
      setShowButton(!shouldHide);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleView = () => {
    setShowViewer(true);
    setMenuOpen(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_PATH;
    link.download = RESUME_FILE;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <motion.div
            ref={rootRef}
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.9 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[70]"
          >
            <div className="relative flex items-center justify-center group">
              <motion.span
                aria-hidden="true"
                className="absolute w-16 h-16 rounded-full bg-cyan-400/20 blur-md"
                animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.65, 0.35] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={backdropVariants}
                    transition={{ duration: 0.2 }}
                    onClick={() => setMenuOpen(false)}
                    className="fixed inset-0 z-[-1] backdrop-blur-[2px]"
                  />
                )}
              </AnimatePresence>

              <motion.button
                type="button"
                aria-label="Resume"
                onClick={() => setMenuOpen((prev) => !prev)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{ rotate: menuOpen ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                className="relative z-20 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/30 border border-cyan-300/30 flex items-center justify-center"
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <FileText className="w-5 h-5" />
                )}
              </motion.button>

              <div className="absolute right-16 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="px-3 py-1.5 rounded-lg bg-black/75 text-xs text-white border border-cyan-400/30 whitespace-nowrap">
                  Resume
                </div>
              </div>

              <AnimatePresence>
                {menuOpen && (
                  <>
                    {/* <motion.button
                      type="button"
                      custom={{ x: -64, y: -6 }}
                      variants={miniButtonVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      onClick={handleView}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      title="View Resume"
                      className="absolute z-10 w-11 h-11 rounded-full bg-white/5 backdrop-blur-lg border border-cyan-400/30 text-cyan-200 shadow-2xl shadow-cyan-500/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <Eye className="w-4.5 h-4.5" />
                    </motion.button> */}

                    {/* <motion.button
                      type="button"
                      custom={{ x: -14, y: -62 }}
                      variants={miniButtonVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      onClick={handleDownload}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      title="Download Resume"
                      className="absolute z-10 w-11 h-11 rounded-full bg-white/5 backdrop-blur-lg border border-cyan-400/30 text-cyan-200 shadow-2xl shadow-cyan-500/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <Download className="w-4.5 h-4.5" />
                    </motion.button> */}

                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ delay: 0.05 }}
                      className="absolute right-16 bottom-16 w-44 p-3 rounded-2xl bg-white/5 backdrop-blur-lg border border-cyan-400/30 shadow-2xl shadow-cyan-500/10"
                    >
                      <div className="space-y-1 text-sm">
                        <button
                          type="button"
                          onClick={handleView}
                          className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 transition-colors duration-200 text-cyan-100"
                        >
                          <Eye className="w-4 h-4 flex-shrink-0" />
                          <span>View Resume</span>
                        </button>
                        <button
                          type="button"
                          onClick={handleDownload}
                          className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 transition-colors duration-200 text-cyan-100"
                        >
                          <Download className="w-4 h-4 flex-shrink-0" />
                          <span>Download Resume</span>
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showViewer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm p-3 sm:p-6"
            onClick={() => setShowViewer(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.24 }}
              className="w-full h-full max-w-5xl mx-auto rounded-2xl bg-white/5 backdrop-blur-lg border border-cyan-400/30 shadow-2xl shadow-cyan-500/20 overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-cyan-400/20 bg-black/20">
                <h2 className="text-sm sm:text-base font-semibold text-cyan-100">
                  Resume Viewer
                </h2>
                <button
                  type="button"
                  onClick={() => setShowViewer(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close resume viewer"
                >
                  <X className="w-4 h-4 text-cyan-100" />
                </button>
              </div>
              <iframe
                src={RESUME_PATH}
                title="Resume PDF"
                className="w-full h-[calc(100%-52px)] bg-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingResumeButton;
