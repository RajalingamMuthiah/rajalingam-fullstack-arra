import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";
import { education } from "../../data/portfolio";

const Education = () => {
  const educationList = education;

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Education"
          subtitle="My academic journey and continuous learning"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {educationList.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card glow hover className="relative overflow-hidden">
                {/* Timeline Connector */}
                {index !== educationList.length - 1 && (
                  <div className="absolute left-8 top-full h-8 w-0.5 bg-gradient-to-b from-neon-blue to-transparent hidden md:block" />
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Timeline Dot & Date */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-2">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm md:rotate-0">
                      <Calendar className="w-4 h-4" />
                      <span className="whitespace-nowrap">{edu.period}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-2">
                        {edu.degree}
                      </h3>
                      <div className="space-y-1">
                        <p className="font-semibold text-gray-300">
                          {edu.school}
                        </p>
                        {edu.university && (
                          <p className="text-sm text-gray-400">
                            {edu.university}
                          </p>
                        )}
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Coursework */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-neon-blue uppercase tracking-wide flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-sm bg-white/5 border border-neon-blue/30 text-gray-300 hover:border-neon-blue/60 transition-all duration-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Thesis/Project */}
                    {edu.thesis && (
                      <div className="space-y-2 pt-2 border-t border-white/10">
                        <h4 className="text-sm font-semibold text-neon-purple">
                          Thesis Project
                        </h4>
                        <p className="text-sm text-gray-400">{edu.thesis}</p>
                      </div>
                    )}
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

export default Education;
