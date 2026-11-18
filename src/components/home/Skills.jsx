import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { techStack as techStackData } from "../../data/portfolio";

const Skills = () => {
  const techStack = techStackData;

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
