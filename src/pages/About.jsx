import React from "react";
import { motion } from "framer-motion";
import { User, Target, Heart, Zap, Coffee, Code2 } from "lucide-react";
import PageTransition from "../components/common/PageTransition";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "5+", icon: Code2 },
    { label: "Projects Completed", value: "10+", icon: Zap },
    { label: "Happy Clients", value: "30+", icon: Heart },
    { label: "Cups of Coffee", value: "1000+", icon: Coffee },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "Constantly exploring new technologies and pushing the boundaries of what's possible in AI and ML.",
    },
    {
      icon: Heart,
      title: "Quality",
      description:
        "Committed to delivering high-quality, maintainable, and scalable solutions that exceed expectations.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing every aspect to ensure fast, efficient, and reliable applications.",
    },
  ];

  const interests = [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Web Development",
    "Open Source",
    "Tech Blogging",
    "Mentoring",
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="About Me"
            subtitle="Get to know more about my journey, values, and passion"
          />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <Card glow className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-full h-96 rounded-xl overflow-hidden">
                  <img
                    src="/gallery/Bike-Ride.jpeg"
                    alt="Your professional photo"
                    className="w-full h-full object-cover"
                  />
                  <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-9xl mb-4">👨‍💻</p>
                      <p className="text-sm text-gray-400">
                        Your professional photo
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold gradient-text">
                  Hi, I'm Rajalingam Muthiah
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate AI/ML Engineer and Full Stack Developer with
                  over 5 years of experience building intelligent systems and
                  scalable web applications. My journey in tech started with a
                  curiosity about how machines can learn and has evolved into a
                  career dedicated to creating innovative solutions.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in developing end-to-end AI solutions, from data
                  collection and model training to deployment and monitoring. My
                  expertise spans across computer vision, natural language
                  processing, and deep learning, combined with strong full-stack
                  development skills.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me contributing to
                  open-source projects, writing technical articles, or mentoring
                  aspiring developers. I believe in continuous learning and
                  sharing knowledge with the community.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map(({ label, value, icon: Icon }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card glow hover className="text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-neon-blue" />
                  <h3 className="text-3xl font-bold gradient-text mb-2">
                    {value}
                  </h3>
                  <p className="text-sm text-gray-400">{label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center gradient-text mb-8">
              My Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card glow hover className="h-full text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{title}</h3>
                    <p className="text-gray-400 text-sm">{description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center gradient-text mb-8">
              Interests & Expertise
            </h2>
            <Card glow>
              <div className="flex flex-wrap justify-center gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:border-neon-blue hover:text-neon-blue transition-all duration-300 cursor-pointer"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
