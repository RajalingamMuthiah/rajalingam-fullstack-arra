import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/common/PageTransition";
import Hero from "../components/home/Hero";
import Experience from "../components/home/Experience";
import Skills from "../components/home/Skills";
import Education from "../components/home/Education";
import ProjectsPreview from "../components/home/ProjectsPreview";
import { scrollToSection } from "../utils/scrollToSection";

// Matches PageTransition's enter animation, so we scroll once layout is final.
const ENTER_ANIMATION_MS = 350;

const Home = () => {
  const location = useLocation();
  const target = location.state?.scrollTo;

  // Navbar section links from other pages navigate here with
  // { state: { scrollTo: "skills" } }; scroll once the section exists.
  useEffect(() => {
    if (!target) return undefined;
    const timer = setTimeout(() => scrollToSection(target), ENTER_ANIMATION_MS);
    return () => clearTimeout(timer);
  }, [target, location.key]);

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <ProjectsPreview />
      </div>
    </PageTransition>
  );
};

export default Home;
