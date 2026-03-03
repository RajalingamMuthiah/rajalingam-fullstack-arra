import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const LaunchModal = ({ isOpen, onClose }) => {
  // Handle Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
          >
            <div className="glass border border-white/10 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden group relative">
              {/* Animated gradient border on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/5 to-neon-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Header with close button */}
                <div className="flex items-start justify-between p-6 border-b border-white/10">
                  <div className="space-y-1 pr-4">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                      <span>🚀</span>
                      Smart To-Do Launched
                    </h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="p-1.5 hover:bg-white/10 rounded-lg transition-colors duration-200 flex-shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Project Title */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-2"
                  >
                    <h3 className="text-lg font-semibold text-neon-blue">
                      Smart To-Do – AI Productivity Platform
                    </h3>
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Built a Java-based full-stack productivity platform
                      supporting priority-based task management and AI-generated
                      workout planning. Features real-time collaboration,
                      MongoDB database, and PWA capabilities for seamless mobile
                      access.
                    </p>
                  </motion.div>

                  {/* Tech Stack */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2 pt-2"
                  >
                    {["Java", "Spring Boot", "MongoDB", "PWA", "REST APIs"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-neon-blue/10 border border-neon-blue/30 rounded-lg text-neon-blue"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </motion.div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 p-4 sm:p-5 border-t border-white/10">
                  <motion.a
                    href="https://smart-todo-list-fb8d.onrender.com/login.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold text-white text-sm hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Project
                  </motion.a>

                  <motion.a
                    href="https://arjun-portfolio-wheat.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 py-2 bg-transparent border border-white/30 hover:border-white/50 rounded-lg font-medium text-white text-sm transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Arjun Portfolio
                  </motion.a>

                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 py-2 text-gray-400 hover:text-gray-200 text-sm font-medium transition-colors duration-200"
                  >
                    Cancel
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LaunchModal;
