import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { experience } from "../../data/portfolio";

const Experience = () => {
  const experiences = experience;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Professional Experience"
          subtitle="My journey in building innovative solutions"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 mb-12"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card glow hover className="relative overflow-hidden">
                {/* Timeline Connector */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-full h-8 w-0.5 bg-gradient-to-b from-neon-blue to-transparent hidden md:block" />
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Timeline Dot & Date */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm md:rotate-0">
                      <Calendar className="w-4 h-4" />
                      <span className="whitespace-nowrap">{exp.period}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-300">
                        <span className="font-semibold">{exp.company}</span>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-neon-blue uppercase tracking-wide">
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-400"
                          >
                            <span className="text-neon-blue mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
