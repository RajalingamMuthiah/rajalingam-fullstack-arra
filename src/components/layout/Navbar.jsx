import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import SmartLink from "../common/SmartLink";
import AnnouncementBar from "./AnnouncementBar";
import { destinations } from "../../data/portfolio";

// Each link has a target: { to } | { section } | { dest } (→ data `destinations`).
const NAV_LINKS = [
  { name: "Home", to: "/" },
  { name: "Experience", section: "experience" },
  { name: "Projects", to: "/projects" },
  { name: "Services", dest: "services" },
  { name: "Skills", section: "skills" },
  { name: "Certificates", to: "/certificates" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];
// Highlighted pill at the right end of the navbar.
const CTA_LINK = { name: "Mentorship", dest: "mentoring" };

const target = (link) =>
  link.dest ? destinations[link.dest] : { to: link.to, section: link.section };

const HOME_SECTIONS = [...NAV_LINKS, CTA_LINK]
  .map((l) => target(l).section)
  .filter(Boolean);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which Home section is in view so the right nav item is highlighted.
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null);
      return undefined;
    }
    const update = () => {
      const header = document.querySelector("header")?.offsetHeight ?? 80;
      const y = window.scrollY + header + 40;
      let current = null;
      for (const id of HOME_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (y >= top && y < top + el.offsetHeight) current = id;
      }
      setActiveSection(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [location.pathname]);

  const isActive = (link) => {
    const t = target(link);
    if (t.section) return location.pathname === "/" && activeSection === t.section;
    if (t.to === "/") return location.pathname === "/" && activeSection === null;
    if (t.to) return location.pathname === t.to;
    return false;
  };

  const onLinkClick = (link) => () => {
    setIsOpen(false);
    // "Home" while already on Home: back to the top.
    if (link.to === "/" && location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const ctaActive = isActive(CTA_LINK);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <AnnouncementBar />
        <motion.nav
          aria-label="Main"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`transition-all duration-300 ${
            scrolled
              ? isDark
                ? "bg-dark-bg/80 backdrop-blur-lg shadow-[0_1px_0_rgba(255,255,255,0.08),0_10px_30px_-10px_rgba(0,217,255,0.15)]"
                : "bg-white/90 backdrop-blur-lg shadow-[0_1px_0_rgba(0,0,0,0.08),0_10px_30px_-12px_rgba(0,0,0,0.15)]"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 gap-4">
              {/* Logo */}
              <SmartLink
                to="/"
                onClick={onLinkClick({ to: "/" })}
                aria-label="Rajalingam Muthiah — home"
                className="flex items-center space-x-2 rounded-xl"
              >
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center font-bold text-xl text-white shadow-lg shadow-neon-blue/40">
                  RM
                </span>
                <span className="hidden sm:block lg:hidden xl:block font-display font-bold text-xl">
                  Portfolio
                </span>
              </SmartLink>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center">
                {NAV_LINKS.map((link) => {
                  const active = isActive(link);
                  return (
                    <SmartLink
                      key={link.name}
                      {...target(link)}
                      onClick={onLinkClick(link)}
                      aria-current={active ? "page" : undefined}
                      className="relative px-2.5 xl:px-3.5 py-2 group rounded-lg"
                    >
                      <span
                        className={`text-sm font-medium transition-colors duration-300 ${
                          active
                            ? isDark
                              ? "text-neon-blue"
                              : "text-cyan-700"
                            : isDark
                              ? "text-gray-300 group-hover:text-white"
                              : "text-gray-700 group-hover:text-gray-900"
                        }`}
                      >
                        {link.name}
                      </span>
                      {active && (
                        <motion.span
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </SmartLink>
                  );
                })}
              </div>

              {/* Mentorship pill, theme toggle, mobile menu button */}
              <div className="flex items-center gap-2 sm:gap-3">
                <SmartLink
                  {...target(CTA_LINK)}
                  onClick={onLinkClick(CTA_LINK)}
                  aria-current={ctaActive ? "page" : undefined}
                  className={`hidden lg:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white bg-teal-700 hover:bg-teal-600 shadow-md shadow-teal-500/30 transition-colors ${
                    ctaActive ? "ring-2 ring-teal-300 ring-offset-2 ring-offset-transparent" : ""
                  }`}
                >
                  <span aria-hidden="true">🎓</span>
                  {CTA_LINK.name}
                </SmartLink>

                <button
                  type="button"
                  onClick={toggleTheme}
                  className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <Sun className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  ) : (
                    <Moon className="w-5 h-5 text-cyan-700" aria-hidden="true" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                >
                  {isOpen ? (
                    <X className="w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Menu className="w-6 h-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className={`fixed inset-y-0 right-0 z-40 w-full sm:w-80 lg:hidden pt-header overflow-y-auto ${
              isDark ? "bg-dark-bg/95 backdrop-blur-lg" : "bg-white border-l border-gray-200"
            }`}
          >
            <nav aria-label="Mobile" className="flex flex-col p-6 space-y-2">
              <SmartLink
                {...target(CTA_LINK)}
                onClick={onLinkClick(CTA_LINK)}
                className="mb-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-white bg-teal-700 hover:bg-teal-600"
              >
                <span aria-hidden="true">🎓</span>
                {CTA_LINK.name}
              </SmartLink>
              {NAV_LINKS.map((link) => {
                const active = isActive(link);
                return (
                  <SmartLink
                    key={link.name}
                    {...target(link)}
                    onClick={onLinkClick(link)}
                    aria-current={active ? "page" : undefined}
                    className={`w-full text-left block px-4 py-3 rounded-lg font-medium transition-colors ${
                      active
                        ? isDark
                          ? "bg-white/10 text-neon-blue"
                          : "bg-cyan-50 text-cyan-800"
                        : isDark
                          ? "hover:bg-white/5 text-gray-300"
                          : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {link.name}
                  </SmartLink>
                );
              })}
            </nav>
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
