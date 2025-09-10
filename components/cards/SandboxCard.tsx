"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function SandboxCard() {
  const [isClient, setIsClient] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    setIsClient(true);

    // Animation cycle every 10-12 seconds
    const runAnimation = async () => {
      while (true) {
        // Phase 1: Plan token appears and moves to sandbox (1.2s)
        setAnimationPhase(1);
        await new Promise((resolve) => setTimeout(resolve, 1200));

        // Phase 2: Sandbox executes (0.8s)
        setAnimationPhase(2);
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Phase 3: Checks appear (0.36s total with stagger)
        setAnimationPhase(3);
        await new Promise((resolve) => setTimeout(resolve, 360));

        // Phase 4: Result pill appears (0.5s)
        setAnimationPhase(4);
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Phase 5: Hold result (1.5s)
        setAnimationPhase(5);
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Phase 6: Fade result (0.3s)
        setAnimationPhase(6);
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Phase 7: Reset and wait (3-4s)
        setAnimationPhase(0);
        await new Promise((resolve) => setTimeout(resolve, 4000));
      }
    };

    runAnimation();
  }, []);

  if (!isClient) {
    return (
      <div className="bg-paper border border-rule/20 rounded-xl p-6 h-64 shadow-sm">
        <div className="w-full h-full bg-ink/5 rounded-lg" />
      </div>
    );
  }

  return (
    <div className="bg-paper border border-rule/20 rounded-xl p-6 h-64 shadow-sm relative overflow-hidden group">
      {/* Perforation motif with hover bounce */}
      <div className="absolute top-4 right-4 flex space-x-1">
        <motion.div
          className="w-1 h-1 bg-ink/20 rounded-full group-hover:bg-[#88B772]"
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
        <motion.div
          className="w-1 h-1 bg-ink/20 rounded-full group-hover:bg-[#88B772]"
          whileHover={{ y: -2 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
            delay: 0.05,
          }}
        />
        <motion.div
          className="w-1 h-1 bg-ink/20 rounded-full group-hover:bg-[#88B772]"
          whileHover={{ y: -2 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 10,
            delay: 0.1,
          }}
        />
      </div>

      <svg
        viewBox="55 40 80 80"
        className="w-full h-full"
        style={{ filter: "blur(0.2px)" }}
      >
        {/* Vertical flow track */}
        <rect
          x="90"
          y="20"
          width="8"
          height="120"
          rx="4"
          fill="none"
          stroke="#0B0B0C"
          strokeWidth="0.8"
          opacity="0.16"
        />

        {/* Sandbox capsule (center) */}
        <motion.rect
          x="70"
          y="60"
          width="48"
          height="40"
          rx="8"
          fill="none"
          stroke="#0B0B0C"
          strokeWidth="1.2"
          opacity="0.24"
          animate={{
            stroke: animationPhase === 2 ? "#88B772" : "#0B0B0C",
            strokeOpacity: animationPhase === 2 ? 0.35 : 0.24,
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Lock glyph inside sandbox */}
        <path
          d="M 85 75 L 85 80 L 95 80 L 95 75 L 85 75 M 88 75 L 88 78 L 92 78 L 92 75 L 88 75"
          fill="none"
          stroke="#0B0B0C"
          strokeWidth="0.6"
          opacity="0.35"
        />

        {/* Plan token - moves vertically */}
        <motion.circle
          cx="94"
          cy="30"
          r="3"
          fill="#88B772"
          opacity="0.6"
          initial={{ opacity: 0 }}
          animate={{
            opacity: animationPhase >= 1 && animationPhase <= 2 ? 0.6 : 0,
            y: animationPhase >= 1 ? 50 : 0,
          }}
          transition={{
            opacity: { duration: 0.2 },
            y: { duration: 1.2, ease: "easeInOut" },
          }}
        />

        {/* Check badges - vertical stack */}
        <motion.circle
          cx="120"
          cy="40"
          r="4"
          fill="none"
          stroke="#0B0B0C"
          strokeWidth="0.8"
          opacity="0.5"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: animationPhase >= 3 ? 1 : 0.9,
            opacity: animationPhase >= 3 ? 0.5 : 0,
          }}
          transition={{ duration: 0.12, delay: 0 }}
        />
        <motion.path
          d="M 117 40 L 119 42 L 123 38"
          fill="none"
          stroke="#0B0B0C"
          strokeWidth="0.8"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: animationPhase >= 3 ? 1 : 0,
          }}
          transition={{ duration: 0.12, delay: 0 }}
        />

        <motion.circle
          cx="120"
          cy="60"
          r="4"
          fill="none"
          stroke="#0B0B0C"
          strokeWidth="0.8"
          opacity="0.5"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: animationPhase >= 3 ? 1 : 0.9,
            opacity: animationPhase >= 3 ? 0.5 : 0,
          }}
          transition={{ duration: 0.12, delay: 0.12 }}
        />
        <motion.path
          d="M 117 60 L 119 62 L 123 58"
          fill="none"
          stroke="#0B0B0C"
          strokeWidth="0.8"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: animationPhase >= 3 ? 1 : 0,
          }}
          transition={{ duration: 0.12, delay: 0.12 }}
        />

        <motion.circle
          cx="120"
          cy="80"
          r="4"
          fill="none"
          stroke="#0B0B0C"
          strokeWidth="0.8"
          opacity="0.5"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: animationPhase >= 3 ? 1 : 0.9,
            opacity: animationPhase >= 3 ? 0.5 : 0,
          }}
          transition={{ duration: 0.12, delay: 0.24 }}
        />
        <motion.path
          d="M 117 80 L 119 82 L 123 78"
          fill="none"
          stroke="#88B772"
          strokeWidth="0.8"
          opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: animationPhase >= 3 ? 1 : 0,
            opacity: animationPhase >= 3 ? 0.7 : 0,
          }}
          transition={{ duration: 0.12, delay: 0.24 }}
        />

        {/* Result pill - vertical */}
        <motion.rect
          x="110"
          y="110"
          width="20"
          height="40"
          rx="10"
          fill="#88B772"
          opacity="0.8"
          initial={{ height: 0 }}
          animate={{
            height: animationPhase >= 4 ? 40 : 0,
            opacity: animationPhase >= 6 ? 0.7 : animationPhase >= 4 ? 0.8 : 0,
          }}
          transition={{
            height: { duration: 0.5, ease: "easeOut" },
            opacity: { duration: 0.3 },
          }}
        />

        {/* Result text - vertical */}
        <motion.text
          x="120"
          y="135"
          textAnchor="middle"
          fontSize="6"
          fill="#0B0B0C"
          opacity="0.9"
          initial={{ opacity: 0 }}
          animate={{
            opacity: animationPhase >= 4 ? 0.9 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Result
        </motion.text>
      </svg>
    </div>
  );
}
