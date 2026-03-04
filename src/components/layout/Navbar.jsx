import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", path: "/", section: null },
    { name: "Experience", path: "/", section: "experience" },
    { name: "Projects", path: "/projects", section: null },
    { name: "Gallery", path: "/gallery", section: null },
    { name: "Skills", path: "/", section: "skills" },
    { name: "Certificates", path: "/certificates", section: null },
    // { name: "Blog", path: "/blog", section: null },
    { name: "About", path: "/about", section: null },
    { name: "Contact", path: "/contact", section: null },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Professional scroll handler
   * - If on home page ("/") → scroll to section immediately
   * - If on different route → navigate to "/" first, then scroll after delay
   * - Home button → always scroll to top
   */
  const handleNavigation = (path, section) => {
    setIsOpen(false);

    // Case 1: Home button - always scroll to top
    if (!section && path === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
        // Scroll to top after navigation completes
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
      return;
    }

    // Case 2: Section link (Experience, Skills, etc.)
    if (section) {
      if (location.pathname === "/") {
        // Already on home page - scroll directly
        scrollToSection(section);
      } else {
        // On different route - navigate first, then scroll
        navigate("/");
        setTimeout(() => {
          scrollToSection(section);
        }, 100);
      }
      return;
    }

    // Case 3: Regular route navigation (Projects, Gallery, About, etc.)
    navigate(path);
  };

  /**
   * Smooth scroll to section with retry logic
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Retry once if element not immediately available (for slower DOMs)
      setTimeout(() => {
        const retryElement = document.getElementById(sectionId);
        if (retryElement) {
          retryElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? "glass shadow-lg shadow-neon-blue/10"
              : "bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavigation("/", null)}
              className="flex items-center space-x-2"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center font-bold text-xl shadow-lg shadow-neon-blue/50"
              >
                RM
              </motion.div>
              <span className="hidden sm:block font-display font-bold text-xl gradient-text">
                Portfolio
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive =
                  (link.section === null && link.path === location.pathname) ||
                  (location.pathname === "/" &&
                    link.path === "/" &&
                    !link.section &&
                    location.pathname === "/");

                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.path, link.section)}
                    className="relative px-4 py-2 group"
                  >
                    <span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-neon-blue"
                          : isDark
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-700 hover:text-gray-900"
                      }`}
                    >
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300 group-hover:w-full" />
                  </button>
                );
              })}
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-neon-blue" />
                )}
              </motion.button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className={`fixed inset-y-0 right-0 z-40 w-full sm:w-80 lg:hidden pt-20 ${
              isDark ? "glass" : "bg-white border-l border-gray-200"
            }`}
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link, index) => {
                const isActive =
                  (link.section === null && link.path === location.pathname) ||
                  (location.pathname === "/" &&
                    link.path === "/" &&
                    !link.section);

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => handleNavigation(link.path, link.section)}
                      className={`w-full text-left block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue"
                          : isDark
                            ? "hover:bg-white/5 text-gray-300"
                            : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {link.name}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
