"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TransformationVisual() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="w-full h-full bg-gray-100/50 rounded-2xl" />;
  }

  return (
    <div className="w-full h-full relative overflow-hidden rounded-2xl bg-black">
      {/* Left Side - Static Grid */}
      <div className="absolute left-0 top-0 w-1/2 h-full">
        <svg viewBox="0 0 400 400" className="w-full h-full opacity-60">
          <defs>
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>

          {/* Grid Background */}
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Grid Dots */}
          {Array.from({ length: 20 }, (_, i) =>
            Array.from({ length: 20 }, (_, j) => (
              <motion.circle
                key={`${i}-${j}`}
                cx={j * 20 + 10}
                cy={i * 20 + 10}
                r="1"
                fill="rgba(255,255,255,0.4)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (i + j) * 0.01 }}
              />
            ))
          )}
        </svg>
      </div>

      {/* Right Side - Active Network */}
      <div className="absolute right-0 top-0 w-1/2 h-full">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient
              id="nodeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#88B772" stopOpacity="1" />
              <stop offset="100%" stopColor="#88B772" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient
              id="connectionGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#88B772" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#88B772" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Network Nodes */}
          {[
            { x: 100, y: 80, size: 8 },
            { x: 150, y: 120, size: 6 },
            { x: 200, y: 100, size: 7 },
            { x: 250, y: 140, size: 5 },
            { x: 300, y: 90, size: 6 },
            { x: 120, y: 180, size: 5 },
            { x: 180, y: 200, size: 7 },
            { x: 240, y: 220, size: 6 },
            { x: 280, y: 180, size: 5 },
            { x: 160, y: 280, size: 6 },
            { x: 220, y: 300, size: 7 },
            { x: 280, y: 280, size: 5 },
            { x: 320, y: 250, size: 6 },
          ].map((node, index) => (
            <motion.circle
              key={index}
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="url(#nodeGradient)"
              filter="url(#glow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                r: [node.size, node.size * 1.2, node.size],
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
            />
          ))}

          {/* Network Connections */}
          {[
            { x1: 100, y1: 80, x2: 150, y2: 120 },
            { x1: 150, y1: 120, x2: 200, y2: 100 },
            { x1: 200, y1: 100, x2: 250, y2: 140 },
            { x1: 250, y1: 140, x2: 300, y2: 90 },
            { x1: 100, y1: 80, x2: 120, y2: 180 },
            { x1: 120, y1: 180, x2: 180, y2: 200 },
            { x1: 180, y1: 200, x2: 240, y2: 220 },
            { x1: 240, y1: 220, x2: 280, y2: 180 },
            { x1: 280, y1: 180, x2: 300, y2: 90 },
            { x1: 180, y1: 200, x2: 160, y2: 280 },
            { x1: 160, y1: 280, x2: 220, y2: 300 },
            { x1: 220, y1: 300, x2: 280, y2: 280 },
            { x1: 280, y1: 280, x2: 320, y2: 250 },
            { x1: 320, y1: 250, x2: 300, y2: 90 },
          ].map((connection, index) => (
            <motion.line
              key={index}
              x1={connection.x1}
              y1={connection.y1}
              x2={connection.x2}
              y2={connection.y2}
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                pathLength: 1,
              }}
              transition={{
                delay: index * 0.05 + 0.5,
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1.5,
              }}
            />
          ))}

          {/* Data Flow Particles */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.circle
              key={`particle-${i}`}
              r="2"
              fill="#88B772"
              filter="url(#glow)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: [50, 350],
                y: [100 + i * 30, 200 + i * 20],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      {/* Center Divider */}
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2" />
    </div>
  );
}
