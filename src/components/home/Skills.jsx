import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

const Skills = () => {
  const techStack = [
    // Frontend Technologies
    {
      name: "HTML5",
      icon: "🌐",
      color: "text-orange-500",
      category: "Frontend",
    },
    { name: "CSS3", icon: "🎨", color: "text-blue-500", category: "Frontend" },
    {
      name: "React.js",
      icon: "⚛️",
      color: "text-cyan-400",
      category: "Frontend",
    },
    {
      name: "Angular",
      icon: "🔴",
      color: "text-red-600",
      category: "Frontend",
    },
    {
      name: "Tailwind CSS",
      icon: "🦋",
      color: "text-cyan-500",
      category: "Frontend",
    },

    // Backend Technologies
    {
      name: "Python",
      icon: "🐍",
      color: "text-yellow-400",
      category: "Backend",
    },
    { name: "Flask", icon: "🔨", color: "text-green-600", category: "Backend" },
    { name: "Java", icon: "☕", color: "text-orange-600", category: "Backend" },
    {
      name: "RESTful API",
      icon: "🔌",
      color: "text-blue-400",
      category: "Backend",
    },

    // AI/ML & Computer Vision
    { name: "NumPy", icon: "📊", color: "text-blue-600", category: "AI/ML" },
    { name: "Pandas", icon: "🐼", color: "text-blue-500", category: "AI/ML" },
    {
      name: "Scikit-learn",
      icon: "🤖",
      color: "text-orange-400",
      category: "AI/ML",
    },
    { name: "OpenCV", icon: "👁️", color: "text-red-500", category: "AI/ML" },
    { name: "YOLO", icon: "🎯", color: "text-yellow-600", category: "AI/ML" },
    {
      name: "MediaPipe",
      icon: "🎬",
      color: "text-purple-600",
      category: "AI/ML",
    },
    {
      name: "Predictive Modeling",
      icon: "📈",
      color: "text-green-500",
      category: "AI/ML",
    },

    // Cloud & Enterprise Platforms
    { name: "AWS", icon: "☁️", color: "text-orange-500", category: "Cloud" },
    {
      name: "Salesforce",
      icon: "☁️",
      color: "text-blue-700",
      category: "Cloud",
    },
    {
      name: "Lightning",
      icon: "⚡",
      color: "text-yellow-500",
      category: "Cloud",
    },

    // Database
    { name: "MySQL", icon: "🐬", color: "text-blue-400", category: "Database" },
    {
      name: "MongoDB",
      icon: "🍃",
      color: "text-green-600",
      category: "Database",
    },

    // Tools
    { name: "Git", icon: "📦", color: "text-orange-600", category: "Tools" },
    { name: "GitHub", icon: "🐙", color: "text-gray-400", category: "Tools" },
    {
      name: "Postman",
      icon: "📮",
      color: "text-orange-400",
      category: "Tools",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Tech Stack"
          subtitle="Technologies and tools I work with to bring ideas to life"
        />

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {techStack.map(({ name, icon, color }, index) => (
              <motion.div
                key={name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="glass rounded-xl p-4 flex flex-col items-center justify-center space-y-2 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                  {icon}
                </span>
                <span className={`text-xs font-medium ${color} text-center`}>
                  {name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
