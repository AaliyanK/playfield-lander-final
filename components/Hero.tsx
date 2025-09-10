"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AbstractBrainSilhouette from "./AbstractBrainSilhouette";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
      >
        {/* Abstract Brain Silhouette */}
        <AbstractBrainSilhouette />

        {/* Abstract Background - Dot Matrix */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-drift" />
          <div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-drift"
            style={{ animationDelay: "10s" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-saans-header text-balance max-w-4xl mx-auto">
              We transform your legacy enterprise systems for the AI era
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "33%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
              className="accent-rule mx-auto"
            />

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              className="text-saans-body max-w-2xl mx-auto text-balance"
            >
              Your data is trapped in old systems. Playfield builds a custom,
              AI-first interface that reads, reasons, and acts—so your teams
              move faster with confidence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Animation/Visual Grid Area */}
      <section className="relative w-full min-h-[40vh] bg-paper border-t border-rule">
        <div className="w-full h-full flex items-center justify-center">
          {/* Placeholder for your animation/image content */}
          <div className="w-full max-w-7xl mx-auto px-6 py-8">
            <div className="w-full h-80 bg-gray-100/50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative">
              {/* Grid lines around the content area */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-rule"></div>
                {/* Bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-rule"></div>
                {/* Left border */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-rule"></div>
                {/* Right border */}
                <div className="absolute right-0 top-0 bottom-0 w-px bg-rule"></div>
              </div>

              <div className="text-center text-gray-500 relative z-10">
                <div className="text-lg font-medium mb-2">
                  Animation/Visual Area
                </div>
                <div className="text-sm">Ready for your content</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
