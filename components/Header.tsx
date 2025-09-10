"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isTalkToUsHovered, setIsTalkToUsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Technology", href: "#technology" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-paper/80 backdrop-blur-sm border-b border-rule"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <div
                className="text-xl font-saans text-ink transition-colors duration-300"
                style={{ fontWeight: "300" }}
              >
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
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8 relative">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`text-saans-body transition-all duration-300 relative ${
                    hoveredItem === index
                      ? "text-accent"
                      : hoveredItem !== null || isTalkToUsHovered
                      ? "text-ink/30 blur-sm"
                      : "text-ink"
                  }`}
                  style={{ outline: "none" }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="w-2 h-2 rounded-full"
                      animate={{
                        backgroundColor:
                          hoveredItem === index ? "#88B772" : "transparent",
                        borderColor:
                          hoveredItem === index ? "#88B772" : "#88B772",
                        borderWidth: hoveredItem === index ? "0px" : "1px",
                        scale: hoveredItem === index ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />
                    <span>{item.label}</span>
                  </div>
                </motion.a>
              ))}
            </nav>

            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              onMouseEnter={() => setIsTalkToUsHovered(true)}
              onMouseLeave={() => setIsTalkToUsHovered(false)}
              className="relative group transition-all duration-300"
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
        </div>
      </motion.header>
    </>
  );
}
