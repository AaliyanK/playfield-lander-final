"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface TopBarProps {
  hoveredNavItem?: number | null;
  onTopBarHover?: (hovered: boolean) => void;
}

export default function TopBar({ hoveredNavItem, onTopBarHover }: TopBarProps) {
  const [isTalkToUsHovered, setIsTalkToUsHovered] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const handleTopBarHover = (hovered: boolean) => {
    onTopBarHover?.(hovered);
  };

  return (
    <header
      className="fixed top-0 right-0 left-64 bg-paper z-40"
      onMouseEnter={() => handleTopBarHover(true)}
      onMouseLeave={() => handleTopBarHover(false)}
    >
      <div className="flex justify-between items-center h-16 px-6">
        {/* Playfield Logo */}
        <div
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
                delay: 0.3,
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
                delay: 0.4,
              }}
            />
          </div>
        </div>

        {/* Talk to Us Button */}
        <button
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          onMouseEnter={() => setIsTalkToUsHovered(true)}
          onMouseLeave={() => setIsTalkToUsHovered(false)}
          className={`relative group transition-all duration-300 ${
            hoveredNavItem !== null ? "blur-sm" : ""
          }`}
          style={{ outline: "none" }}
        >
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <motion.div
                className="w-1 h-1 bg-accent rounded-full"
                animate={{
                  y: isTalkToUsHovered ? [-2, -8, -2] : 0,
                  scale: isTalkToUsHovered ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 0.6,
                  repeat: isTalkToUsHovered ? Infinity : 0,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-1 h-1 bg-accent rounded-full"
                animate={{
                  y: isTalkToUsHovered ? [-2, -8, -2] : 0,
                  scale: isTalkToUsHovered ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 0.6,
                  repeat: isTalkToUsHovered ? Infinity : 0,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.1,
                }}
              />
              <motion.div
                className="w-1 h-1 bg-accent rounded-full"
                animate={{
                  y: isTalkToUsHovered ? [-2, -8, -2] : 0,
                  scale: isTalkToUsHovered ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 0.6,
                  repeat: isTalkToUsHovered ? Infinity : 0,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
              <motion.div
                className="w-1 h-1 bg-accent rounded-full"
                animate={{
                  y: isTalkToUsHovered ? [-2, -8, -2] : 0,
                  scale: isTalkToUsHovered ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 0.6,
                  repeat: isTalkToUsHovered ? Infinity : 0,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
              <motion.div
                className="w-1 h-1 bg-accent rounded-full"
                animate={{
                  y: isTalkToUsHovered ? [-2, -8, -2] : 0,
                  scale: isTalkToUsHovered ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 0.6,
                  repeat: isTalkToUsHovered ? Infinity : 0,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              />
            </div>
            <div className="w-2 h-0.5 bg-accent"></div>
            <span className="text-caption-s text-accent font-medium group-hover:underline">
              TALK TO US
            </span>
          </div>
        </button>
      </div>
    </header>
  );
}
