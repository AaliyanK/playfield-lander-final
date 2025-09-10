"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CodeCard() {
  const [isClient, setIsClient] = useState(false);
  const [highlightLine, setHighlightLine] = useState(0);

  useEffect(() => {
    setIsClient(true);

    // Animate highlight every 2.5 seconds
    const interval = setInterval(() => {
      setHighlightLine((prev) => (prev + 1) % 4);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return (
      <div className="bg-paper border border-rule/20 rounded-xl p-6 h-64 shadow-sm">
        <div className="w-full h-full bg-ink/5 rounded-lg" />
      </div>
    );
  }

  return (
    <div className="bg-paper border border-rule/20 rounded-xl p-4 h-64 shadow-sm relative overflow-hidden group">
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

      {/* Code snippet */}
      <div className="w-full h-full flex flex-col justify-center">
        {/* Code block with vertical animation */}
        <div className="font-mono text-xs leading-tight space-y-1">
          {/* Line 1: def execute_task(): */}
          <motion.div
            className="relative"
            animate={{
              color: highlightLine === 0 ? "#88B772" : "#0B0B0C",
            }}
            transition={{ duration: 0.3 }}
          >
            def execute_task():
          </motion.div>

          {/* Line 2: plan = analyze() */}
          <motion.div
            className="relative ml-4"
            animate={{
              color: highlightLine === 1 ? "#88B772" : "#0B0B0C",
            }}
            transition={{ duration: 0.3 }}
          >
            plan = analyze()
          </motion.div>

          {/* Line 3: result = run(plan) */}
          <motion.div
            className="relative ml-4"
            animate={{
              color: highlightLine === 2 ? "#88B772" : "#0B0B0C",
            }}
            transition={{ duration: 0.3 }}
          >
            result = run(plan)
          </motion.div>

          {/* Line 4: return verify(result) */}
          <motion.div
            className="relative ml-4"
            animate={{
              color: highlightLine === 3 ? "#88B772" : "#0B0B0C",
            }}
            transition={{ duration: 0.3 }}
          >
            return verify(result)
          </motion.div>
        </div>
      </div>
    </div>
  );
}
