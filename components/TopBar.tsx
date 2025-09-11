"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface TopBarProps {
  hoveredNavItem?: number | null;
  onTopBarHover?: (hovered: boolean) => void;
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}

export default function TopBar({
  hoveredNavItem,
  onTopBarHover,
  mobileMenuOpen,
  onMobileMenuToggle,
}: TopBarProps) {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const handleTopBarHover = (hovered: boolean) => {
    onTopBarHover?.(hovered);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 right-0 left-0 md:left-64 lg:left-80 bg-paper z-40"
      onMouseEnter={() => handleTopBarHover(true)}
      onMouseLeave={() => handleTopBarHover(false)}
    >
      <div className="flex justify-between items-center h-16 px-6">
        {/* Mobile Menu Button */}
        <button
          onClick={onMobileMenuToggle}
          className="md:hidden flex flex-col space-y-1 p-2"
          aria-label="Toggle mobile menu"
        >
          <div
            className={`w-5 h-0.5 bg-ink transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <div
            className={`w-5 h-0.5 bg-ink transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-5 h-0.5 bg-ink transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Playfield Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2,
          }}
          className={`relative cursor-pointer transition-all duration-300 ${
            hoveredNavItem !== null ? "blur-sm" : ""
          }`}
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          <div className="text-xl font-saans text-ink transition-colors duration-300">
            Playfield
          </div>

          {/* Bouncing dots animation */}
          <div className="absolute -bottom-2 left-0 flex space-x-1">
            <motion.div
              className="w-1 h-1 bg-accent rounded-full"
              animate={{
                y: isLogoHovered ? [-2, -8, -2] : 0,
                scale: isLogoHovered ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 0.6,
                repeat: isLogoHovered ? Infinity : 0,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-1 h-1 bg-accent rounded-full"
              animate={{
                y: isLogoHovered ? [-2, -8, -2] : 0,
                scale: isLogoHovered ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 0.6,
                repeat: isLogoHovered ? Infinity : 0,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 0.1,
              }}
            />
            <motion.div
              className="w-1 h-1 bg-accent rounded-full"
              animate={{
                y: isLogoHovered ? [-2, -8, -2] : 0,
                scale: isLogoHovered ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 0.6,
                repeat: isLogoHovered ? Infinity : 0,
                repeatType: "loop",
                ease: "easeInOut",
                delay: 0.2,
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
