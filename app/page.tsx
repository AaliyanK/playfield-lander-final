import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import Pillars from "@/components/Pillars";
import About from "@/components/About";
import WhyNow from "@/components/WhyNow";
import Technology from "@/components/Technology";
import HowItWorks from "@/components/HowItWorks";
import DayOne from "@/components/DayOne";
import WhoFor from "@/components/WhoFor";
import Security from "@/components/Security";
import Integrations from "@/components/Integrations";
import Learning from "@/components/Learning";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhatIs />
      <Pillars />
      <About />
      <WhyNow />
      <Technology />
      <HowItWorks />
      <DayOne />
      <WhoFor />
      <Security />
      <Integrations />
      <Learning />
      <CTA />
      <Footer />
    </main>
  );
}
