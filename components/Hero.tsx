"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative min-h-[20vh] flex items-center justify-center overflow-hidden"
      >
        {/* Abstract Background - Dot Matrix */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-drift" />
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-drift"
            style={{ animationDelay: "10s" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-saans-header text-left max-w-4xl">
              We transform your legacy enterprise systems for the AI era
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Full-width Visual Area */}
      <section className="relative w-full min-h-[50vh] bg-paper">
        <div className="w-full h-full flex items-center justify-center">
          {/* Full-width visual content */}
          <div className="w-full px-6 py-2">
            <motion.div
              className="w-full max-w-5xl mx-auto aspect-video rounded-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
            >
              <Image
                src="/images/hero2.png"
                alt="Transformation from legacy systems to AI-powered networks"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
