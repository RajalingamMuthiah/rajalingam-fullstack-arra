import SmartLink from "../common/SmartLink";
import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { SOCIAL_ICONS } from "../common/socialIcons";
import {
  profile,
  site,
  mentorship,
  destinations,
  socialLinks as socialLinkData,
} from "../../data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    ...socialLinkData
      .filter((link) => link.showIn.includes("footer"))
      .map((link) => ({ ...link, icon: SOCIAL_ICONS[link.key] })),
    { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  ];

  const footerLinks = [
    { name: "Home", target: { to: "/" } },
    { name: "Projects", target: { to: "/projects" } },
    { name: mentorship.footerLabel, target: destinations.mentoring },
    { name: "Freelance AI services", target: destinations.services },
    { name: "Gallery", target: { to: "/gallery" } },
    { name: "Contact", target: { to: "/contact" } },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center font-bold">
                RM
              </div>
              <span className="font-display font-bold text-lg">
                {site.footerBrand}
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              {site.footerBlurb}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <SmartLink
                    {...link.target}
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:text-neon-blue transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 md:pr-20 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm text-center sm:text-center">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> using
            React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
