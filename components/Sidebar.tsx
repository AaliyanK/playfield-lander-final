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
    const sections = navItems.map((item) => document.querySelector(item.href) as HTMLElement | null);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Increased offset for better UX

      // Find the section that's most in view
      let activeIndex = 0;
      let minDistance = Infinity;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionCenter = sectionTop + sectionHeight / 2;
          const distance = Math.abs(scrollPosition - sectionCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            activeIndex = index;
          }
        }
      });

      setActiveSection(activeIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Playfield", href: "#home" },
    { label: "Vision", href: "#vision" },
    { label: "Product", href: "#product" },
    { label: "Integrations", href: "#integrations" },
    { label: "Security", href: "#security" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-paper border-r border-rule z-50 flex flex-col">
      {/* Spacer to push navigation to bottom */}
      <div className="flex-1"></div>

      {/* Navigation at bottom */}
      <nav className="p-6">
        <ul className="space-y-4">
          {navItems.map((item, index) => (
            <li key={item.label}>
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
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
