"use client";

import { motion } from "framer-motion";

export default function GlyphStacks() {
  return (
    <div className="w-16 h-16 relative">
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Legacy stack */}
        <motion.rect
          x="8"
          y="20"
          width="12"
          height="8"
          fill="#88B772"
          opacity="0.3"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="8"
          y="32"
          width="12"
          height="8"
          fill="#88B772"
          opacity="0.3"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        <motion.rect
          x="8"
          y="44"
          width="12"
          height="8"
          fill="#88B772"
          opacity="0.3"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />

        {/* Arrow */}
        <motion.path
          d="M24 36 L36 36"
          stroke="#88B772"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.polygon
          points="32,32 40,36 32,40"
          fill="#88B772"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Agent-first stack */}
        <motion.rect
          x="44"
          y="26"
          width="12"
          height="12"
          fill="#88B772"
          opacity="0.8"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
