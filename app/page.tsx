"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import ValueProps from "@/components/ValueProps";
// import WhatIs from "@/components/WhatIs";
// import Pillars from "@/components/Pillars";
// import About from "@/components/About";
// import WhyNow from "@/components/WhyNow";
// import Technology from "@/components/Technology";
// import HowItWorks from "@/components/HowItWorks";
// import DayOne from "@/components/DayOne";
// import WhoFor from "@/components/WhoFor";
// import Security from "@/components/Security";
// import Integrations from "@/components/Integrations";
// import Security from "@/components/Security";
// import Learning from "@/components/Learning";
// import CTA from "@/components/CTA";
// import Footer from "@/components/Footer";

export default function Home() {
  const [hoveredNavItem, setHoveredNavItem] = useState<number | null>(null);
  const [topBarHovered, setTopBarHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Playfield", href: "#home" },
    { label: "Introduction", href: "#introduction" },
    { label: "Foundations", href: "#foundations" },
    { label: "Specialization", href: "#specialization" },
    { label: "Security", href: "#security" },
    { label: "Today", href: "#today" },
  ];

  return (
    <div className="min-h-screen flex">
      <Sidebar onNavHover={setHoveredNavItem} topBarHovered={topBarHovered} />

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-paper z-50 md:hidden">
          <div className="flex flex-col h-full pt-16">
            <nav className="flex-1 p-6">
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl font-light text-ink hover:text-accent transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      <main className="flex-1 md:ml-64 lg:ml-80 pt-16">
        <TopBar
          hoveredNavItem={hoveredNavItem}
          onTopBarHover={setTopBarHovered}
          mobileMenuOpen={mobileMenuOpen}
          onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
        <div className="min-h-screen">
          <Hero />
          <Vision />
          <ValueProps />
          {/* <WhatIs />
          <div className="border-t border-rule"></div>
          <Pillars />
          <div className="border-t border-rule"></div>
          <About />
          <div className="border-t border-rule"></div>
          <WhyNow />
          <div className="border-t border-rule"></div>
          <Technology />
          <div className="border-t border-rule"></div>
          <HowItWorks />
          <div className="border-t border-rule"></div>
          <DayOne />
          <div className="border-t border-rule"></div>
          <WhoFor />
          <div className="border-t border-rule"></div>
          <Security />
          <div className="border-t border-rule"></div>
          <Integrations />
          <Security />
          <Learning />
          <CTA />
          <Footer /> */}
        </div>
      </main>
    </div>
  );
}
