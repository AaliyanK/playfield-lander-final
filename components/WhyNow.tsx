"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function WhyNow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const reasons = [
    {
      title: "Modern stacks are rich with APIs yet brittle for agents",
      description:
        "We make them agent first with realistic replicas and guardrails.",
    },
    {
      title: "Governance matters",
      description:
        "Our reasoning map keeps context permissions and lineage attached to every step.",
    },
    {
      title: "Every enterprise deserves results they can trust",
      description: "We prioritize verifiable success metrics over vibes.",
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-ink/2 relative">
      {/* Unified Network Grid Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {isClient && (
          <svg
            viewBox="0 0 1200 500"
            className="w-full h-full opacity-60"
            style={{ filter: "blur(0.2px)" }}
          >
            {/* Network Grid - Horizontal and Vertical Lines */}
            {/* Horizontal lines */}
            <line
              x1="100"
              y1="80"
              x2="1100"
              y2="80"
              stroke="#88B772"
              strokeWidth="1.0"
              opacity="0.5"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.6;0.3"
                dur="6s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="100"
              y1="180"
              x2="1100"
              y2="180"
              stroke="#88B772"
              strokeWidth="1.0"
              opacity="0.5"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.6;0.3"
                dur="6s"
                repeatCount="indefinite"
                begin="1.5s"
              />
            </line>
            <line
              x1="100"
              y1="280"
              x2="1100"
              y2="280"
              stroke="#88B772"
              strokeWidth="1.0"
              opacity="0.5"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.6;0.3"
                dur="6s"
                repeatCount="indefinite"
                begin="3s"
              />
            </line>
            <line
              x1="100"
              y1="380"
              x2="1100"
              y2="380"
              stroke="#88B772"
              strokeWidth="1.0"
              opacity="0.5"
            >
              <animate
                attributeName="opacity"
                values="0.3;0.6;0.3"
                dur="6s"
                repeatCount="indefinite"
                begin="4.5s"
              />
            </line>

            {/* Vertical lines */}
            <line
              x1="200"
              y1="30"
              x2="200"
              y2="450"
              stroke="#88B772"
              strokeWidth="0.8"
              opacity="0.4"
            >
              <animate
                attributeName="opacity"
                values="0.25;0.5;0.25"
                dur="8s"
                repeatCount="indefinite"
                begin="1s"
              />
            </line>
            <line
              x1="400"
              y1="30"
              x2="400"
              y2="450"
              stroke="#88B772"
              strokeWidth="0.8"
              opacity="0.4"
            >
              <animate
                attributeName="opacity"
                values="0.25;0.5;0.25"
                dur="8s"
                repeatCount="indefinite"
                begin="2.5s"
              />
            </line>
            <line
              x1="600"
              y1="30"
              x2="600"
              y2="450"
              stroke="#88B772"
              strokeWidth="0.8"
              opacity="0.4"
            >
              <animate
                attributeName="opacity"
                values="0.25;0.5;0.25"
                dur="8s"
                repeatCount="indefinite"
                begin="4s"
              />
            </line>
            <line
              x1="800"
              y1="30"
              x2="800"
              y2="450"
              stroke="#88B772"
              strokeWidth="0.8"
              opacity="0.4"
            >
              <animate
                attributeName="opacity"
                values="0.25;0.5;0.25"
                dur="8s"
                repeatCount="indefinite"
                begin="5.5s"
              />
            </line>
            <line
              x1="1000"
              y1="30"
              x2="1000"
              y2="450"
              stroke="#88B772"
              strokeWidth="0.8"
              opacity="0.4"
            >
              <animate
                attributeName="opacity"
                values="0.25;0.5;0.25"
                dur="8s"
                repeatCount="indefinite"
                begin="7s"
              />
            </line>

            {/* Network Nodes */}
            <circle cx="200" cy="80" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="400" cy="80" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="1s"
              />
            </circle>
            <circle cx="600" cy="80" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="2s"
              />
            </circle>
            <circle cx="800" cy="80" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="3s"
              />
            </circle>
            <circle cx="1000" cy="80" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="4s"
              />
            </circle>

            <circle cx="200" cy="180" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="0.5s"
              />
            </circle>
            <circle cx="400" cy="180" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="1.5s"
              />
            </circle>
            <circle cx="600" cy="180" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="2.5s"
              />
            </circle>
            <circle cx="800" cy="180" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="3.5s"
              />
            </circle>
            <circle cx="1000" cy="180" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="4.5s"
              />
            </circle>

            <circle cx="200" cy="280" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="1s"
              />
            </circle>
            <circle cx="400" cy="280" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="2s"
              />
            </circle>
            <circle cx="600" cy="280" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="3s"
              />
            </circle>
            <circle cx="800" cy="280" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="4s"
              />
            </circle>
            <circle cx="1000" cy="280" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="5s"
              />
            </circle>

            {/* Fourth row of nodes */}
            <circle cx="200" cy="380" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="1.5s"
              />
            </circle>
            <circle cx="400" cy="380" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="2.5s"
              />
            </circle>
            <circle cx="600" cy="380" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="3.5s"
              />
            </circle>
            <circle cx="800" cy="380" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="4.5s"
              />
            </circle>
            <circle cx="1000" cy="380" r="2.5" fill="#88B772" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="5s"
                repeatCount="indefinite"
                begin="5.5s"
              />
            </circle>

            {/* Diagonal connections for network feel */}
            <line
              x1="200"
              y1="80"
              x2="400"
              y2="180"
              stroke="#88B772"
              strokeWidth="0.6"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.4;0.2"
                dur="10s"
                repeatCount="indefinite"
                begin="2s"
              />
            </line>
            <line
              x1="400"
              y1="80"
              x2="600"
              y2="180"
              stroke="#88B772"
              strokeWidth="0.6"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.4;0.2"
                dur="10s"
                repeatCount="indefinite"
                begin="4s"
              />
            </line>
            <line
              x1="600"
              y1="80"
              x2="800"
              y2="180"
              stroke="#88B772"
              strokeWidth="0.6"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.4;0.2"
                dur="10s"
                repeatCount="indefinite"
                begin="6s"
              />
            </line>
            <line
              x1="800"
              y1="80"
              x2="1000"
              y2="180"
              stroke="#88B772"
              strokeWidth="0.6"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.4;0.2"
                dur="10s"
                repeatCount="indefinite"
                begin="8s"
              />
            </line>

            <line
              x1="200"
              y1="180"
              x2="400"
              y2="280"
              stroke="#88B772"
              strokeWidth="0.6"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.4;0.2"
                dur="10s"
                repeatCount="indefinite"
                begin="3s"
              />
            </line>
            <line
              x1="400"
              y1="180"
              x2="600"
              y2="280"
              stroke="#88B772"
              strokeWidth="0.6"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.4;0.2"
                dur="10s"
                repeatCount="indefinite"
                begin="5s"
              />
            </line>
            <line
              x1="600"
              y1="180"
              x2="800"
              y2="280"
              stroke="#88B772"
              strokeWidth="0.6"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.4;0.2"
                dur="10s"
                repeatCount="indefinite"
                begin="7s"
              />
            </line>
            <line
              x1="800"
              y1="180"
              x2="1000"
              y2="280"
              stroke="#88B772"
              strokeWidth="0.6"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.4;0.2"
                dur="10s"
                repeatCount="indefinite"
                begin="9s"
              />
            </line>

            {/* Additional diagonal connections for third and fourth rows */}
            <line
              x1="200"
              y1="280"
              x2="400"
              y2="380"
              stroke="#88B772"
              strokeWidth="0.6"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.4;0.2"
                dur="10s"
                repeatCount="indefinite"
                begin="1s"
              />
            </line>
            <line
              x1="400"
              y1="280"
              x2="600"
              y2="380"
              stroke="#88B772"
              strokeWidth="0.6"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.4;0.2"
                dur="10s"
                repeatCount="indefinite"
                begin="3s"
              />
            </line>
            <line
              x1="600"
              y1="280"
              x2="800"
              y2="380"
              stroke="#88B772"
              strokeWidth="0.6"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.4;0.2"
                dur="10s"
                repeatCount="indefinite"
                begin="5s"
              />
            </line>
            <line
              x1="800"
              y1="280"
              x2="1000"
              y2="380"
              stroke="#88B772"
              strokeWidth="0.6"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.4;0.2"
                dur="10s"
                repeatCount="indefinite"
                begin="7s"
              />
            </line>
          </svg>
        )}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-16"
        >
          <h2 className="text-display-l text-center">Why now</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + index * 0.1,
                }}
                className="space-y-4"
              >
                <h3 className="text-display-l text-ink">{reason.title}</h3>
                <p className="text-body-m text-inkSoft">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
