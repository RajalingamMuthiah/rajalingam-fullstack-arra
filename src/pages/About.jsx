import React from "react";
import { motion } from "framer-motion";
import { User, Target, Heart, Zap, Coffee, Code2 } from "lucide-react";
import PageTransition from "../components/common/PageTransition";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import { about } from "../data/portfolio";

const ICONS = { code: Code2, zap: Zap, heart: Heart, coffee: Coffee, target: Target };

const About = () => {
  const stats = about.stats.map((s) => ({ ...s, icon: ICONS[s.icon] }));

  const values = about.values.map((v) => ({ ...v, icon: ICONS[v.icon] }));

  const interests = about.interests;

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
                    src={about.photo.src}
                    alt={about.photo.alt}
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
                  {about.heading}
                </h2>
                {about.paragraphs.map((text) => (
                  <p key={text} className="text-gray-300 leading-relaxed">
                    {text}
                  </p>
                ))}
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
