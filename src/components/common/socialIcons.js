import { Github, Linkedin, Instagram, Mail } from "lucide-react";

// Maps the `key` of each entry in data/portfolio.js `socialLinks` to its icon.
export const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  email: Mail,
};

export const SOCIAL_COLORS = {
  github: "hover:text-gray-700 dark:hover:text-gray-300",
  linkedin: "hover:text-blue-400",
  instagram: "hover:text-pink-400",
  email: "hover:text-cyan-700 dark:hover:text-neon-blue",
};
