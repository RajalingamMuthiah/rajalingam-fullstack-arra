import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Filter } from "lucide-react";
import PageTransition from "../components/common/PageTransition";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [workInProgressProject, setWorkInProgressProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Smart To-Do – Intelligent Task Planning System",
      description:
        "Java-based full-stack productivity platform with priority-based task management, AI-generated workout plans, and real-time collaboration.",
      fullDescription:
        "A comprehensive full-stack productivity platform built with Java and Spring Boot. Features intelligent task management with priority-based organization, AI-generated workout plans, real-time collaboration capabilities, and MongoDB for scalable data storage. Deployed as a Progressive Web App (PWA) for seamless mobile-first accessibility and offline functionality.",
      image: "/Smart-To-Do.png",
      tags: ["Java", "Spring Boot", "MongoDB", "PWA", "REST APIs"],
      category: "web",
      github: "#",
      demo: "https://smart-todo-list-fb8d.onrender.com/login.html",
      featured: true,
      date: "Feb – Mar 2026",
    },
    {
      id: 2,
      title: "EEMS – Smart Educational Platform",
      description:
        "Full-stack app with role-based dashboards (Admin, Principal, Teacher, HOD), JWT auth, and exam scheduling.",
      fullDescription:
        "A comprehensive educational management system with full-stack architecture. Features role-based access control (Admin, Principal, Teacher, HOD), JWT authentication, and intelligent exam scheduling. Built with Spring Boot backend and modern frontend technologies.",
      image: "/Exam.jpg",
      tags: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      category: "web",
      github: "https://github.com/yourusername/eems",
      demo: "#",
      featured: true,
      date: "Nov – Jan 2025",
      inProgress: true,
    },
    {
      id: 3,
      title: "Cognitive Visual Intelligence Framework",
      description:
        "AI-based computer vision system to identify handwritten response indicators in evaluation sheets.",
      fullDescription:
        "An intelligent computer vision system leveraging deep learning and ML techniques to analyze and identify handwritten response indicators in evaluation sheets. Built with Python and Roboflow for dataset management, achieving high accuracy in document analysis.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      tags: ["Python", "Applied ML", "AI", "Roboflow"],
      category: "ai",
      github: "https://github.com/yourusername/cognitive-vision",
      demo: "#",
      featured: true,
      date: "Feb – Apr 2025",
      inProgress: true,
    },
    {
      id: 4,
      title: "Real-Time Hand Tracking & Watch Overlay",
      description:
        "Real-time 21-point hand landmark tracking with virtual watch overlay using webcam.",
      fullDescription:
        "A sophisticated computer vision application featuring real-time hand tracking using 21-point landmark detection. Includes interactive virtual watch overlay that follows hand movements. Optimized for low-latency performance with live webcam input.",
      image: "/Virtual-Watch.png",
      tags: ["Python", "OpenCV", "MediaPipe"],
      category: "ai",
      github: "https://github.com/yourusername/hand-tracking",
      demo: "https://luxe-time-e-commerce.vercel.app/",
      featured: true,
      date: "Jun – Jul 2025",
    },
    {
      id: 5,
      title: "AyuSangam Fitness Tracker",
      description:
        "React.js dashboard integrating wearable health data with gym logs and real-time analytics.",
      fullDescription:
        "A comprehensive fitness tracking dashboard that aggregates data from wearable devices and gym activities. Features real-time health analytics, progress tracking, and personalized insights. Built with React.js and integrated REST APIs for seamless data synchronization.",
      image: "/Ayusangam.jpg",
      tags: ["React.js", "REST APIs", "Wearables", "Analytics"],
      category: "web",
      github: "https://github.com/yourusername/ayusangam",
      demo: "#",
      featured: true,
      date: "Aug – Oct 2025",
      inProgress: true,
    },
    {
      id: 6,
      title: "Digital Animal Care Platform",
      description:
        "Connected pet owners, vets & rescue teams via WhatsApp alerts and an AI chatbot for consultations.",
      fullDescription:
        "A comprehensive animal care platform connecting pet owners, veterinarians, and rescue teams. Features WhatsApp integration for instant alerts, AI-powered chatbot for consultations, and real-time emergency response coordination. Built with modern web technologies and cloud infrastructure.",
      image: "/Digital-Animal-care.png",
      tags: ["HTML", "CSS", "JavaScript", "Dialog flow", "WhatsApp API"],
      category: "web",
      github: "https://github.com/yourusername/animal-care",
      demo: "https://animalrescue-emergency-response-pla.vercel.app/",
      date: "Oct – Dec 2025",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI/ML" },
    { id: "web", label: "Web Development" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="All Projects"
            subtitle="Explore my portfolio of AI/ML and full-stack development projects"
          />

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? "primary" : "secondary"}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card
                  glow
                  hover
                  onClick={() => setSelectedProject(project)}
                  className="h-full cursor-pointer group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 -m-6 mb-4 overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-60" />
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Date */}
                  {project.date && (
                    <p className="text-xs text-neon-blue mb-3 font-semibold">
                      {project.date}
                    </p>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-1 text-sm hover:text-neon-blue transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (project.inProgress) {
                          e.preventDefault();
                          setWorkInProgressProject(project);
                        }
                      }}
                      className="flex items-center space-x-1 text-sm hover:text-neon-blue transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold gradient-text mb-2">
                        {selectedProject.title}
                      </h2>
                      {selectedProject.date && (
                        <p className="text-sm text-neon-blue font-semibold">
                          {selectedProject.date}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />

                  <p className="text-gray-300 mb-6">
                    {selectedProject.fullDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary" icon={Github}>
                        View Code
                      </Button>
                    </a>
                    {selectedProject.inProgress ? (
                      <button
                        onClick={() => {
                          setSelectedProject(null);
                          setWorkInProgressProject(selectedProject);
                        }}
                      >
                        <Button variant="primary" icon={ExternalLink}>
                          Live Demo
                        </Button>
                      </button>
                    ) : (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary" icon={ExternalLink}>
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Work in Progress Modal */}
          <AnimatePresence>
            {workInProgressProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setWorkInProgressProject(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="glass rounded-2xl p-8 max-w-md w-full text-center"
                >
                  <div className="mb-6">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple mb-4"
                    >
                      <span className="text-2xl">⚙️</span>
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold gradient-text mb-3">
                    Work in Progress
                  </h3>
                  <p className="text-gray-300 mb-6">
                    We're working hard on the{" "}
                    <span className="font-semibold text-neon-blue">
                      {workInProgressProject.title}
                    </span>{" "}
                    demo. Stay tuned!
                  </p>

                  <div className="space-y-3">
                    <p className="text-sm text-gray-400">
                      Check back soon for the live demonstration.
                    </p>
                    <button
                      onClick={() => setWorkInProgressProject(null)}
                      className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300"
                    >
                      Got it!
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
