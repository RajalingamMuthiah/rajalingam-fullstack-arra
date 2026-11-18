import { motion } from "framer-motion";
import { Code2, Zap, GraduationCap } from "lucide-react";
import PageTransition from "../components/common/PageTransition";
import SectionTitle from "../components/common/SectionTitle";
import Card from "../components/common/Card";
import { about } from "../data/portfolio";

const ICONS = { code: Code2, zap: Zap, graduation: GraduationCap };

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="About Me" />

          {/* Intro */}
          <Card glow hover={false} className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden">
              <img
                src={about.photo.src}
                alt={about.photo.alt}
                className="w-full h-full object-cover object-[50%_62%]"
              />
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

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {about.stats.map(({ label, value, icon }) => {
              const Icon = ICONS[icon] ?? Code2;
              return (
                <Card key={label} glow hover={false} className="text-center">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-neon-blue" aria-hidden="true" />
                  <p className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {value}
                  </p>
                  <p className="text-sm text-gray-400">{label}</p>
                </Card>
              );
            })}
          </div>

          {/* Interests */}
          <section aria-labelledby="interests-heading">
            <h2
              id="interests-heading"
              className="text-3xl font-bold text-center gradient-text mb-6"
            >
              Interests & Expertise
            </h2>
            <Card glow hover={false}>
              <ul className="flex flex-wrap justify-center gap-3">
                {about.interests.map((interest, index) => (
                  <motion.li
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </motion.li>
                ))}
              </ul>
            </Card>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
