"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import ValueProps from "@/components/ValueProps";
import AnimationSection from "@/components/AnimationSection";
// import WhatIs from "@/components/WhatIs";
// import Pillars from "@/components/Pillars";
// import About from "@/components/About";
// import WhyNow from "@/components/WhyNow";
// import Technology from "@/components/Technology";
// import HowItWorks from "@/components/HowItWorks";
// import DayOne from "@/components/DayOne";
// import WhoFor from "@/components/WhoFor";
// import Security from "@/components/Security";
import Integrations from "@/components/Integrations";
import Security from "@/components/Security";
// import Learning from "@/components/Learning";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [hoveredNavItem, setHoveredNavItem] = useState<number | null>(null);
  const [topBarHovered, setTopBarHovered] = useState(false);

  return (
    <div className="min-h-screen flex">
      <Sidebar onNavHover={setHoveredNavItem} topBarHovered={topBarHovered} />
      <main className="flex-1 ml-64 pt-16">
        <TopBar
          hoveredNavItem={hoveredNavItem}
          onTopBarHover={setTopBarHovered}
        />
        <div className="min-h-screen">
          <Hero />
          <Vision />
          <ValueProps />
          <AnimationSection />
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
          <div className="border-t border-rule"></div> */}
          <Integrations />
          <Security />
          {/* <Learning /> */}
          <CTA />
          <Footer />
        </div>
      </main>
    </div>
  );
}
