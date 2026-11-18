import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layout components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ParticlesBackground from "./components/common/ParticlesBackground";
import QuickContact from "./components/layout/QuickContact";

// Pages: Home ships in the main bundle; the rest load on demand.
import Home from "./pages/Home";
const Projects = lazy(() => import("./pages/Projects"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Resume = lazy(() => import("./pages/Resume"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Mentorship = lazy(() => import("./pages/Mentorship"));
const Services = lazy(() => import("./pages/Services"));

// Context
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function AppContent() {
  const location = useLocation();
  const { isDark } = useTheme();

  // New page → start at the top, unless a navbar section link asked Home to
  // scroll to a section (handled in pages/Home.jsx).
  useEffect(() => {
    if (!location.state?.scrollTo) window.scrollTo(0, 0);
  }, [location.pathname, location.state]);

  return (
    <div
      className={`relative min-h-screen ${isDark ? "bg-dark-bg text-white" : "bg-gray-50 text-gray-900"} overflow-x-hidden`}
    >
      {/* Particle Background */}
      <ParticlesBackground />

      {/* Main Content */}
      <div className="relative z-10 pb-16 md:pb-0">
        <Navbar />

        <Suspense fallback={<div className="min-h-screen" />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/certificates" element={<Certificates />} />

            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        </Suspense>

        <Footer />
      </div>

      {/* Floating action button (≥768px) / sticky action bar (<768px) */}
      <QuickContact />

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isDark ? "dark" : "light"}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
