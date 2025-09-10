"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OntologyCard() {
  const [isClient, setIsClient] = useState(false);
  const [animationCycle, setAnimationCycle] = useState(0);

  useEffect(() => {
    setIsClient(true);

    // Animation cycle every 6-9 seconds
    const interval = setInterval(() => {
      setAnimationCycle((prev) => (prev + 1) % 3);
    }, 7000);

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
        viewBox="10 40 80 80"
        className="w-full h-full"
        style={{ filter: "blur(0.2px)" }}
      >
        {/* Layer grid - faint dotted backdrop */}
        <defs>
          <pattern
            id="dotGrid"
            x="0"
            y="0"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="4" cy="4" r="0.5" fill="#0B0B0C" opacity="0.08" />
          </pattern>
        </defs>
        <rect width="200" height="160" fill="url(#dotGrid)" />

        {/* System tiles - vertical stack */}
        <rect
          x="20"
          y="20"
          width="24"
          height="16"
          rx="2"
          fill="none"
          stroke="#0B0B0C"
          strokeWidth="0.8"
          opacity="0.35"
        />
        <rect
          x="20"
          y="40"
          width="24"
          height="16"
          rx="2"
          fill="none"
          stroke="#0B0B0C"
          strokeWidth="0.8"
          opacity="0.35"
        />
        <rect
          x="20"
          y="60"
          width="24"
          height="16"
          rx="2"
          fill="none"
          stroke="#0B0B0C"
          strokeWidth="0.8"
          opacity="0.35"
        />
        <rect
          x="20"
          y="80"
          width="24"
          height="16"
          rx="2"
          fill="none"
          stroke="#0B0B0C"
          strokeWidth="0.8"
          opacity="0.35"
        />

        {/* Entity graph - vertical flow from top to bottom */}
        {/* Vertical column of nodes */}
        <circle
          cx="80"
          cy="30"
          r="2.5"
          fill="#88B772"
          opacity="0.4"
          className="node-pulse"
        >
          <animate
            attributeName="opacity"
            values="0.4;0.6;0.4"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0s"
          />
          <animate
            attributeName="r"
            values="2.5;2.9;2.5"
            dur="2.5s"
            repeatCount="indefinite"
            begin="0s"
          />
        </circle>
        <circle
          cx="80"
          cy="50"
          r="2.2"
          fill="#88B772"
          opacity="0.4"
          className="node-pulse"
        >
          <animate
            attributeName="opacity"
            values="0.4;0.6;0.4"
            dur="2.8s"
            repeatCount="indefinite"
            begin="0.3s"
          />
          <animate
            attributeName="r"
            values="2.2;2.6;2.2"
            dur="2.8s"
            repeatCount="indefinite"
            begin="0.3s"
          />
        </circle>
        <circle
          cx="80"
          cy="70"
          r="2.3"
          fill="#88B772"
          opacity="0.4"
          className="node-pulse"
        >
          <animate
            attributeName="opacity"
            values="0.4;0.6;0.4"
            dur="2.6s"
            repeatCount="indefinite"
            begin="0.6s"
          />
          <animate
            attributeName="r"
            values="2.3;2.7;2.3"
            dur="2.6s"
            repeatCount="indefinite"
            begin="0.6s"
          />
        </circle>
        <circle
          cx="80"
          cy="90"
          r="2.1"
          fill="#88B772"
          opacity="0.4"
          className="node-pulse"
        >
          <animate
            attributeName="opacity"
            values="0.4;0.6;0.4"
            dur="2.7s"
            repeatCount="indefinite"
            begin="0.9s"
          />
          <animate
            attributeName="r"
            values="2.1;2.5;2.1"
            dur="2.7s"
            repeatCount="indefinite"
            begin="0.9s"
          />
        </circle>
        <circle
          cx="80"
          cy="110"
          r="2.4"
          fill="#88B772"
          opacity="0.4"
          className="node-pulse"
        >
          <animate
            attributeName="opacity"
            values="0.4;0.6;0.4"
            dur="2.4s"
            repeatCount="indefinite"
            begin="1.2s"
          />
          <animate
            attributeName="r"
            values="2.4;2.8;2.4"
            dur="2.4s"
            repeatCount="indefinite"
            begin="1.2s"
          />
        </circle>
        <circle
          cx="80"
          cy="130"
          r="1.8"
          fill="#88B772"
          opacity="0.4"
          className="node-pulse"
        >
          <animate
            attributeName="opacity"
            values="0.4;0.6;0.4"
            dur="2.9s"
            repeatCount="indefinite"
            begin="1.5s"
          />
          <animate
            attributeName="r"
            values="1.8;2.2;1.8"
            dur="2.9s"
            repeatCount="indefinite"
            begin="1.5s"
          />
        </circle>

        {/* Entity links - vertical flow connections */}
        {/* System tiles to nodes */}
        <line
          x1="32"
          y1="28"
          x2="80"
          y2="30"
          stroke="#88B772"
          strokeWidth="0.6"
          opacity="0.2"
        />
        <line
          x1="32"
          y1="48"
          x2="80"
          y2="50"
          stroke="#88B772"
          strokeWidth="0.6"
          opacity="0.2"
        />
        <line
          x1="32"
          y1="68"
          x2="80"
          y2="70"
          stroke="#88B772"
          strokeWidth="0.6"
          opacity="0.2"
        />
        <line
          x1="32"
          y1="88"
          x2="80"
          y2="90"
          stroke="#88B772"
          strokeWidth="0.6"
          opacity="0.2"
        />

        {/* Vertical node connections */}
        <line
          x1="80"
          y1="30"
          x2="80"
          y2="50"
          stroke="#88B772"
          strokeWidth="0.6"
          opacity="0.2"
        />
        <line
          x1="80"
          y1="50"
          x2="80"
          y2="70"
          stroke="#88B772"
          strokeWidth="0.6"
          opacity="0.2"
        />
        <line
          x1="80"
          y1="70"
          x2="80"
          y2="90"
          stroke="#88B772"
          strokeWidth="0.6"
          opacity="0.2"
        />
        <line
          x1="80"
          y1="90"
          x2="80"
          y2="110"
          stroke="#88B772"
          strokeWidth="0.6"
          opacity="0.2"
        />
        <line
          x1="80"
          y1="110"
          x2="80"
          y2="130"
          stroke="#88B772"
          strokeWidth="0.6"
          opacity="0.2"
        />

        {/* Nodes to policy band */}
        <line
          x1="80"
          y1="130"
          x2="100"
          y2="130"
          stroke="#88B772"
          strokeWidth="0.4"
          opacity="0.15"
        />

        {/* Policy band (bottom) */}
        <line
          x1="30"
          y1="130"
          x2="170"
          y2="130"
          stroke="#0B0B0C"
          strokeWidth="0.8"
          opacity="0.35"
        />

        {/* Policy braces */}
        <path
          d="M 40 125 L 40 135 M 35 130 L 45 130"
          stroke="#0B0B0C"
          strokeWidth="0.6"
          opacity="0.35"
        />
        <path
          d="M 100 125 L 100 135 M 95 130 L 105 130"
          stroke="#0B0B0C"
          strokeWidth="0.6"
          opacity="0.35"
        />
        <path
          d="M 160 125 L 160 135 M 155 130 L 165 130"
          stroke="#0B0B0C"
          strokeWidth="0.6"
          opacity="0.35"
        />

        {/* Flow arrows - vertical animated */}
        <motion.path
          d="M 32 28 L 80 30"
          fill="none"
          stroke="#88B772"
          strokeWidth="0.8"
          opacity="0.3"
          strokeDasharray="4 2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: animationCycle === 0 ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <motion.path
          d="M 80 30 L 80 70"
          fill="none"
          stroke="#88B772"
          strokeWidth="0.8"
          opacity="0.3"
          strokeDasharray="4 2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: animationCycle === 1 ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
        />

        <motion.path
          d="M 80 70 L 80 130"
          fill="none"
          stroke="#88B772"
          strokeWidth="0.8"
          opacity="0.3"
          strokeDasharray="4 2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: animationCycle === 2 ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
        />

        {/* Random link twinkle - vertical */}
        <motion.line
          x1="80"
          y1="30"
          x2="80"
          y2="130"
          stroke="#88B772"
          strokeWidth="0.8"
          opacity="0"
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 6 }}
        />
      </svg>
    </div>
  );
}
