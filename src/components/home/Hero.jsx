import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Briefcase, Download } from "lucide-react";
import Button from "../common/Button";
import { SOCIAL_ICONS, SOCIAL_COLORS } from "../common/socialIcons";
import {
  profile,
  brand,
  destinations,
  socialLinks as socialLinkData,
} from "../../data/portfolio";

const ACCENT_CLASSES = {
  brand: "gradient-text",
  pathwise: "text-pathwise-600 dark:text-pathwise-400",
};

/** Typed tagline; shows the full text at once when reduced motion is preferred. */
const useTyped = (fullText) => {
  const reduce = useReducedMotion();
  const [typed, setTyped] = useState(reduce ? fullText : "");

  useEffect(() => {
    if (reduce) {
      setTyped(fullText);
      return undefined;
    }
    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setTyped(fullText.slice(0, index));
      if (index >= fullText.length) clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, [fullText, reduce]);

  return typed;
};

const Hero = () => {
  const fullText = profile.typedTitle;
  const typedText = useTyped(fullText);

  const socialLinks = socialLinkData
    .filter((link) => link.showIn.includes("hero"))
    .map((link) => ({
      ...link,
      icon: SOCIAL_ICONS[link.key],
      color: SOCIAL_COLORS[link.key],
    }));

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay },
  });

  return (
    <section
      id="hero"
      className="pt-header px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto w-full pt-8 pb-10 lg:pt-14 lg:pb-14 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-10 lg:gap-12 items-center">
        {/* Text */}
        <div className="space-y-6">
          <motion.p
            {...fadeUp(0)}
            className="flex items-center gap-3 text-base sm:text-lg font-semibold text-cyan-700 dark:text-neon-blue"
          >
            <img
              src="/profile-192.webp"
              alt=""
              width="48"
              height="48"
              className="lg:hidden w-12 h-12 rounded-full object-cover border-2 border-white/20"
            />
            {brand.greeting}
          </motion.p>

          <motion.h1
            id="hero-heading"
            {...fadeUp(0.05)}
            className="text-[2rem] leading-tight sm:text-5xl xl:text-6xl font-bold font-display tracking-tight"
          >
            {brand.headline.map(({ text, accent }) =>
              accent ? (
                <span key={text} className={ACCENT_CLASSES[accent]}>
                  {text}
                </span>
              ) : (
                text
              ),
            )}
          </motion.h1>

          <motion.p
            {...fadeUp(0.1)}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-[70ch]"
          >
            {brand.subline.map((item, i) => (
              <span key={item}>
                {i > 0 && (
                  <span aria-hidden="true" className="mx-2 text-gray-600 dark:text-gray-400">
                    ·
                  </span>
                )}
                <span>{item}</span>
              </span>
            ))}
          </motion.p>

          <motion.p
            {...fadeUp(0.15)}
            className="relative text-sm sm:text-base font-mono text-gray-500 dark:text-gray-400"
          >
            <span className="sr-only">{fullText}</span>
            {/* invisible copy reserves the final height while typing */}
            <span className="invisible" aria-hidden="true">
              {fullText}|
            </span>
            <span className="absolute inset-0" aria-hidden="true">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.p>

          <motion.div
            {...fadeUp(0.2)}
            className="flex flex-col sm:flex-row sm:flex-wrap gap-3"
          >
            <Button {...destinations.mentoring} variant="pathwise" icon={GraduationCap}>
              Get mentored
            </Button>
            <Button {...destinations.services} variant="primary" icon={Briefcase}>
              Hire me for a project
            </Button>
            <Button
              href={profile.resume.path}
              download={profile.resume.file}
              variant="ghost"
              icon={Download}
            >
              Download resume
            </Button>
          </motion.div>

          <motion.div {...fadeUp(0.25)} className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, color, label }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-xl glass flex items-center justify-center transition-colors duration-300 ${color}`}
              >
                <Icon className="w-5 h-5" aria-hidden="true" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Photo (desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden lg:flex justify-end"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-neon-blue/40 via-neon-purple/30 to-pathwise-400/30 blur-2xl"
            />
            <img
              src={profile.photo.src}
              srcSet={profile.photo.srcSet}
              sizes="(min-width: 1280px) 384px, 320px"
              alt={profile.photo.alt}
              width="384"
              height="384"
              fetchPriority="high"
              className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full object-cover border-4 border-gray-200 dark:border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
