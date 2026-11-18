import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Download,
  ArrowRight,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import LaunchBadge from "../common/LaunchBadge";
import LaunchModal from "../common/LaunchModal";
import { SOCIAL_ICONS, SOCIAL_COLORS } from "../common/socialIcons";
import { profile, socialLinks as socialLinkData } from "../../data/portfolio";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [isLaunchModalOpen, setIsLaunchModalOpen] = useState(false);
  const fullText = profile.typedTitle;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const skills = profile.heroBadges;

  const infoCards = [
    { icon: MapPin, label: "Location", value: profile.location },
    { icon: Briefcase, label: "Expertise", value: profile.experienceLabel },
    { icon: Mail, label: "Email", value: profile.email },
  ];

  const socialLinks = socialLinkData
    .filter((link) => link.showIn.includes("hero"))
    .map((link) => ({
      ...link,
      icon: SOCIAL_ICONS[link.key],
      color: SOCIAL_COLORS[link.key],
    }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full relative"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hi, I'm{" "}
                <span className="gradient-text">{profile.name}</span>
              </motion.h1>

              <div className="h-24 sm:h-20 md:h-16">
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </motion.div>

            {/* Animated Skill Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="px-4 py-2 rounded-full glass border border-neon-blue/30 text-sm font-medium hover:border-neon-blue transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>

            {/* Info Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {infoCards.map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-4 space-y-2 hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-neon-blue" />
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="text-xs font-semibold truncate">{value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 items-center"
            >
              <Link to="/projects">
                <Button variant="primary" icon={ArrowRight}>
                  View Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">Get In Touch</Button>
              </Link>

              {/* Smart To-Do CTA Button */}
              <motion.button
                onClick={() => setIsLaunchModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-4 py-2.5 rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 border border-neon-purple/40 hover:border-neon-purple/70 text-sm font-semibold text-white/90 hover:text-white backdrop-blur-sm transition-all duration-300 group overflow-hidden cursor-pointer"
              >
                {/* Soft glow animation */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple/30 to-neon-blue/30 blur-lg opacity-0 group-hover:opacity-100"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Button content */}
                <span className="relative flex items-center gap-1.5">
                  <Zap className="w-4 h-4" />
                  Smart To-Do
                </span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, color }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-xl glass flex items-center justify-center transition-all duration-300 ${color}`}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Animated Glow Ring */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink blur-2xl opacity-50"
              />

              {/* Profile Image */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
              >
                <img
                  src={profile.photo.src}
                  alt={profile.photo.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-lg shadow-neon-blue/50"
              >
                <span className="text-xl sm:text-2xl">🚀</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center shadow-lg shadow-neon-purple/50"
              >
                <span className="text-xl sm:text-2xl">⚡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Launch Modal */}
        <LaunchModal
          isOpen={isLaunchModalOpen}
          onClose={() => setIsLaunchModalOpen(false)}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
