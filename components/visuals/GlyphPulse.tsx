"use client";

import { motion } from "framer-motion";

export default function GlyphPulse() {
  return (
    <div className="w-16 h-16 relative">
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Base line */}
        <line
          x1="8"
          y1="32"
          x2="56"
          y2="32"
          stroke="#88B772"
          strokeWidth="2"
          opacity="0.3"
        />

        {/* Pulse line */}
        <motion.line
          x1="8"
          y1="32"
          x2="56"
          y2="32"
          stroke="#88B772"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Traveling dot */}
        <motion.circle
          cx="8"
          cy="32"
          r="3"
          fill="#88B772"
          animate={{ cx: [8, 56, 8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
