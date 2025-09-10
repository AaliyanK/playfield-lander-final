"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AbstractBrainSilhouette from "./AbstractBrainSilhouette";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
          <h1
            className="text-display-xl text-balance max-w-4xl mx-auto"
            style={{ fontWeight: "300" }}
          >
            Superintelligence for enterprise
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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-body-m text-inkSoft max-w-2xl mx-auto text-balance"
          >
            One model reads and writes across your systems. It generates
            interfaces on demand and acts through code.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
