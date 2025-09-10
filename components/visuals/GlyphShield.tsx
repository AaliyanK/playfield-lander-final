"use client";

import { motion } from "framer-motion";

export default function GlyphShield() {
  return (
    <div className="w-16 h-16 relative">
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Shield shape */}
        <motion.path
          d="M32 8 L48 16 L48 32 C48 40 32 56 32 56 C32 56 16 40 16 32 L16 16 Z"
          fill="#88B772"
          opacity="0.3"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Checkmark */}
        <motion.path
          d="M24 32 L30 38 L40 26"
          stroke="#88B772"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
      </svg>
    </div>
  );
}
