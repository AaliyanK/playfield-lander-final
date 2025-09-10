"use client";

import { motion } from "framer-motion";

export default function GlyphNetwork() {
  return (
    <div className="w-16 h-16 relative">
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Network nodes */}
        <motion.circle
          cx="16"
          cy="20"
          r="3"
          fill="#88B772"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="48"
          cy="20"
          r="3"
          fill="#88B772"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        <motion.circle
          cx="32"
          cy="32"
          r="4"
          fill="#88B772"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />
        <motion.circle
          cx="16"
          cy="44"
          r="3"
          fill="#88B772"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.9,
          }}
        />
        <motion.circle
          cx="48"
          cy="44"
          r="3"
          fill="#88B772"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />

        {/* Additional nodes */}
        <motion.circle
          cx="8"
          cy="32"
          r="2"
          fill="#88B772"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1,
          }}
        />
        <motion.circle
          cx="56"
          cy="32"
          r="2"
          fill="#88B772"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
        />
        <motion.circle
          cx="32"
          cy="8"
          r="2"
          fill="#88B772"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.4,
          }}
        />
        <motion.circle
          cx="32"
          cy="56"
          r="2"
          fill="#88B772"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
          }}
        />

        {/* Connections */}
        <line
          x1="16"
          y1="20"
          x2="32"
          y2="32"
          stroke="#88B772"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="48"
          y1="20"
          x2="32"
          y2="32"
          stroke="#88B772"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="16"
          y1="44"
          x2="32"
          y2="32"
          stroke="#88B772"
          strokeWidth="1"
          opacity="0.6"
        />
        <line
          x1="48"
          y1="44"
          x2="32"
          y2="32"
          stroke="#88B772"
          strokeWidth="1"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
