import React from "react";
import PageTransition from "../components/common/PageTransition";
import Hero from "../components/home/Hero";
import Experience from "../components/home/Experience";
import Skills from "../components/home/Skills";
import Education from "../components/home/Education";
import ProjectsPreview from "../components/home/ProjectsPreview";

const Home = () => {
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
