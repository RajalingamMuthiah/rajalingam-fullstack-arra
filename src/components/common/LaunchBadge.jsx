import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LaunchBadge = ({ onClick }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative inline-block mb-6"
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 blur-xl opacity-60" />

      {/* Badge button */}
      <motion.button
        onClick={onClick}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 20px rgba(0, 200, 255, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        animate={
          isAnimating
            ? {
                scale: [1, 1.08, 1],
              }
            : {}
        }
        transition={{
          duration: isAnimating ? 0.6 : 0.3,
          ease: "easeInOut",
        }}
        className="relative px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/40 hover:border-neon-blue/70 text-sm font-semibold text-white/90 hover:text-white backdrop-blur-md transition-all duration-300 cursor-pointer group overflow-hidden"
      >
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-20"
          animate={{
            boxShadow: [
              "inset 0 0 10px rgba(0, 200, 255, 0)",
              "inset 0 0 20px rgba(0, 200, 255, 0.3)",
              "inset 0 0 10px rgba(0, 200, 255, 0)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Badge text */}
        <span className="relative flex items-center gap-2">
          <span className="text-base">🔥</span>
          <span>New: Smart To-Do Launched</span>
        </span>
      </motion.button>
    </motion.div>
  );
};

export default LaunchBadge;
