import React from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award, Code } from "lucide-react";
import PageTransition from "../components/common/PageTransition";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const Resume = () => {
  const experience = [
    {
      title: "Full Stack Developer",
      company: "Tata Consultancy Services",
      period: "June 2023 - Present",
      description:
        "Engineered and deployed responsive UI components for Salesforce-powered enterprise applications, implementing data quality frameworks and automated validation scripts.",
      achievements: [
        "Engineered responsive UI components using Lightning App Builder, Experience Builder, and SLDS, improving user engagement metrics",
        "Implemented data quality framework achieving 99% data accuracy through custom Python scripts and Excel VBA queries",
        "Developed automated data validation scripts using Python (Pandas, NumPy) to support critical business operations",
        "Collaborated with cross-functional teams to align UI/UX design with data architecture requirements",
      ],
    },
    {
      title: "Workflow Analyst",
      company: "Tata Consultancy Services",
      period: "June 2021 - May 2023",
      description:
        "Designed visual assets for digital platforms and streamlined workflow processes to improve team efficiency.",
      achievements: [
        "Designed and delivered visual assets for digital platforms using Adobe Creative Suite (Illustrator, Photoshop)",
        "Streamlined workflow processes and created documentation to improve team efficiency and project delivery timelines",
        "Partnered with business analysts and technical teams to translate requirements into actionable design specifications",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      period: "2016 - 2018",
      gpa: "3.9/4.0",
      focus: "Artificial Intelligence & Machine Learning",
    },
    {
      degree: "Bachelor of Technology in Computer Engineering",
      school: "MIT",
      period: "2012 - 2016",
      gpa: "3.8/4.0",
      focus: "Software Engineering",
    },
  ];

  const skills = {
    Languages: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
    "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Keras"],
    Web: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    Tools: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL"],
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title="Resume"
            subtitle="My professional journey and qualifications"
          />

          {/* Download Button */}
          <div className="flex justify-center mb-12">
            <Button
              variant="primary"
              icon={Download}
              onClick={() => {
                // Replace with actual resume file path
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Your_Name_Resume.pdf";
                link.click();
              }}
            >
              Download Resume PDF
            </Button>
          </div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="w-8 h-8 text-neon-blue" />
              <h2 className="text-3xl font-bold gradient-text">Experience</h2>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    glow
                    className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-neon-blue before:to-neon-purple before:rounded-full"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-neon-blue mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-400 mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-gray-300"
                        >
                          <span className="text-neon-blue mr-2">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center space-x-3 mb-8">
              <GraduationCap className="w-8 h-8 text-neon-blue" />
              // <h2 className="text-3xl font-bold gradient-text">Education</h2>
              //{" "}
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card glow>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-bold text-neon-blue mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold mb-2">
                          {edu.school}
                        </p>
                        <p className="text-sm text-gray-400 mb-2">
                          Focus: {edu.focus}
                        </p>
                      </div>
                      <div className="text-right mt-4 md:mt-0">
                        <p className="text-sm text-gray-400 mb-1">
                          {edu.period}
                        </p>
                        <p className="text-lg font-bold text-neon-blue">
                          GPA: {edu.gpa}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <Code className="w-8 h-8 text-neon-blue" />
              <h2 className="text-3xl font-bold gradient-text">Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card glow>
                    <h3 className="text-lg font-bold mb-4 text-neon-blue">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm font-medium hover:border-neon-blue transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;
