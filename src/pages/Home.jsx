import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/common/PageTransition";
import Hero from "../components/home/Hero";
import HelpStrip from "../components/home/HelpStrip";
import Experience from "../components/home/Experience";
import Skills from "../components/home/Skills";
import Education from "../components/home/Education";
import ProjectsPreview from "../components/home/ProjectsPreview";
import PathwiseTeaser from "../components/home/PathwiseTeaser";
import { scrollToSection } from "../utils/scrollToSection";

// Matches PageTransition's enter animation, so we scroll once layout is final.
const ENTER_ANIMATION_MS = 350;

const Home = () => {
  const location = useLocation();
  const target = location.state?.scrollTo;

  // Section links from other pages (navbar, footer) navigate here with
  // { state: { scrollTo: "skills" } }. Jump straight to the section once the
  // page has rendered: a smooth scroll across the whole page takes ~2.5s on
  // mobile. Links clicked while already on Home scroll smoothly instead.
  useEffect(() => {
    if (!target) return undefined;
    const timer = setTimeout(
      () => scrollToSection(target, "instant"),
      ENTER_ANIMATION_MS,
    );
    return () => clearTimeout(timer);
  }, [target, location.key]);

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Hero />
        <HelpStrip />
        <PathwiseTeaser />
        <Experience />
        <Skills />
        <ProjectsPreview />
        <Education />
      </div>
    </PageTransition>
  );
};

export default Home;
