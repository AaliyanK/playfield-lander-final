"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface SidebarProps {
  onNavHover?: (index: number | null) => void;
  topBarHovered?: boolean;
}

export default function Sidebar({ onNavHover, topBarHovered }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<number>(0);

  const navItems = [
    { label: "Playfield", href: "#home" },
    { label: "Introduction", href: "#introduction" },
    { label: "Foundations", href: "#foundations" },
    { label: "Specialization", href: "#specialization" },
    { label: "Security", href: "#security" },
    { label: "Today", href: "#today" },
  ];

  const handleMouseEnter = (index: number) => {
    setHoveredItem(index);
    onNavHover?.(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    onNavHover?.(null);
  };

  // Scroll tracking to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      const sections = navItems.map(
        (item) => document.querySelector(item.href) as HTMLElement | null
      );

      // Find the section that's most in view
      let activeIndex = 0;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            activeIndex = i;
            break;
          }
        }
      }

      setActiveSection(activeIndex);
    };

    // Add a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial position
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 top-0 h-full w-64 lg:w-80 bg-paper border-r border-rule z-50 hidden md:flex flex-col"
    >
      {/* Spacer to push navigation to bottom */}
      <div className="flex-1"></div>

      {/* Navigation at bottom */}
      <nav className="p-6">
        <ul className="space-y-4">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3 + index * 0.1,
              }}
            >
              <a
                href={item.href}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`text-saans-body transition-all duration-300 relative flex items-center space-x-2 ${
                  activeSection === index
                    ? "text-accent"
                    : hoveredItem === index
                    ? "text-accent"
                    : hoveredItem !== null || topBarHovered
                    ? "text-ink/30 blur-sm"
                    : "text-ink"
                }`}
                style={{ outline: "none" }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full"
                  animate={{
                    backgroundColor:
                      activeSection === index || hoveredItem === index
                        ? "#88B772"
                        : "transparent",
                    borderColor: "#88B772",
                    borderWidth:
                      activeSection === index || hoveredItem === index
                        ? "0px"
                        : "1px",
                    scale:
                      activeSection === index || hoveredItem === index
                        ? 1.2
                        : 1,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
                <span>{item.label}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
}
