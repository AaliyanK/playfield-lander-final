"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Pillars() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pillars = [
    {
      title: "Replicate",
      description:
        "We mirror your SaaS and internal tools as safe high fidelity agent ready sandboxes.",
    },
    {
      title: "Map",
      description:
        "A live knowledge graph tracks systems data workflows and policies. It updates as things change.",
    },
    {
      title: "Act and verify",
      description:
        "The agent writes and runs code. Ships small internal apps. Checks its own work with verifiable tests.",
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-ink/2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-16"
        >
          <h2 className="text-display-l text-center">Three pillars</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 32, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 32, scale: 0.95 }
                }
                transition={{
                  duration: 1.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3 + index * 0.2,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: {
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
                style={{
                  transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="card-elevation p-8 relative group cursor-pointer h-80"
              >
                {/* Perforation motif with hover bounce */}
                <div className="absolute top-4 right-4 flex space-x-1">
                  <motion.div
                    className="w-1 h-1 bg-ink/20 rounded-full group-hover:bg-[#88B772]"
                    whileHover={{ y: -3, scale: 1.2 }}
                    transition={{
                      duration: 0.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />
                  <motion.div
                    className="w-1 h-1 bg-ink/20 rounded-full group-hover:bg-[#88B772]"
                    whileHover={{ y: -3, scale: 1.2 }}
                    transition={{
                      duration: 0.2,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.05,
                    }}
                  />
                  <motion.div
                    className="w-1 h-1 bg-ink/20 rounded-full group-hover:bg-[#88B772]"
                    whileHover={{ y: -3, scale: 1.2 }}
                    transition={{
                      duration: 0.2,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.1,
                    }}
                  />
                </div>

                {/* Micro Abstract Visual */}
                <div className="absolute bottom-6 right-6 w-20 h-16 opacity-60">
                  {isClient && (
                    <svg viewBox="0 0 80 64" className="w-full h-full">
                      {pillar.title === "Replicate" && (
                        <>
                          {/* Mirrored block-diagram motif */}
                          <rect
                            x="10"
                            y="20"
                            width="20"
                            height="12"
                            rx="2"
                            fill="none"
                            stroke="#88B772"
                            strokeWidth="1.2"
                            opacity="0.8"
                          >
                            <animate
                              attributeName="opacity"
                              values="0.6;1;0.6"
                              dur="3s"
                              repeatCount="indefinite"
                            />
                          </rect>
                          <rect
                            x="50"
                            y="20"
                            width="20"
                            height="12"
                            rx="2"
                            fill="none"
                            stroke="#88B772"
                            strokeWidth="1.2"
                            opacity="0.8"
                          >
                            <animate
                              attributeName="opacity"
                              values="0.6;1;0.6"
                              dur="3s"
                              repeatCount="indefinite"
                              begin="1.5s"
                            />
                          </rect>
                          <line
                            x1="30"
                            y1="26"
                            x2="50"
                            y2="26"
                            stroke="#88B772"
                            strokeWidth="1"
                            opacity="0.6"
                          >
                            <animate
                              attributeName="opacity"
                              values="0.4;0.8;0.4"
                              dur="2s"
                              repeatCount="indefinite"
                              begin="0.5s"
                            />
                          </line>
                          <line
                            x1="50"
                            y1="26"
                            x2="30"
                            y2="26"
                            stroke="#88B772"
                            strokeWidth="1"
                            opacity="0.6"
                          >
                            <animate
                              attributeName="opacity"
                              values="0.4;0.8;0.4"
                              dur="2s"
                              repeatCount="indefinite"
                              begin="1s"
                            />
                          </line>
                        </>
                      )}

                      {pillar.title === "Map" && (
                        <>
                          {/* Tiny network graph */}
                          <circle
                            cx="20"
                            cy="20"
                            r="2.5"
                            fill="#88B772"
                            opacity="0.7"
                          >
                            <animate
                              attributeName="opacity"
                              values="0.5;0.9;0.5"
                              dur="4s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle
                            cx="40"
                            cy="15"
                            r="2"
                            fill="#88B772"
                            opacity="0.6"
                          >
                            <animate
                              attributeName="opacity"
                              values="0.4;0.8;0.4"
                              dur="4s"
                              repeatCount="indefinite"
                              begin="0.8s"
                            />
                          </circle>
                          <circle
                            cx="60"
                            cy="25"
                            r="2.8"
                            fill="#88B772"
                            opacity="0.8"
                          >
                            <animate
                              attributeName="opacity"
                              values="0.6;1;0.6"
                              dur="4s"
                              repeatCount="indefinite"
                              begin="1.6s"
                            />
                          </circle>
                          <circle
                            cx="25"
                            cy="40"
                            r="2.3"
                            fill="#88B772"
                            opacity="0.7"
                          >
                            <animate
                              attributeName="opacity"
                              values="0.5;0.9;0.5"
                              dur="4s"
                              repeatCount="indefinite"
                              begin="2.4s"
                            />
                          </circle>
                          <circle
                            cx="50"
                            cy="45"
                            r="2"
                            fill="#88B772"
                            opacity="0.6"
                          >
                            <animate
                              attributeName="opacity"
                              values="0.4;0.8;0.4"
                              dur="4s"
                              repeatCount="indefinite"
                              begin="3.2s"
                            />
                          </circle>
                          <line
                            x1="20"
                            y1="20"
                            x2="40"
                            y2="15"
                            stroke="#88B772"
                            strokeWidth="0.8"
                            opacity="0.5"
                          />
                          <line
                            x1="40"
                            y1="15"
                            x2="60"
                            y2="25"
                            stroke="#88B772"
                            strokeWidth="0.8"
                            opacity="0.5"
                          />
                          <line
                            x1="20"
                            y1="20"
                            x2="25"
                            y2="40"
                            stroke="#88B772"
                            strokeWidth="0.8"
                            opacity="0.5"
                          />
                          <line
                            x1="60"
                            y1="25"
                            x2="50"
                            y2="45"
                            stroke="#88B772"
                            strokeWidth="0.8"
                            opacity="0.5"
                          />
                          <line
                            x1="25"
                            y1="40"
                            x2="50"
                            y2="45"
                            stroke="#88B772"
                            strokeWidth="0.8"
                            opacity="0.5"
                          />
                        </>
                      )}

                      {pillar.title === "Act and verify" && (
                        <>
                          {/* Process box with dot moving through, then check */}
                          <rect
                            x="15"
                            y="25"
                            width="30"
                            height="15"
                            rx="2"
                            fill="none"
                            stroke="#88B772"
                            strokeWidth="1.2"
                            opacity="0.7"
                          />
                          <motion.circle
                            cx="20"
                            cy="32"
                            r="2"
                            fill="#88B772"
                            opacity="0.8"
                            animate={{
                              x: [0, 20, 0],
                              opacity: [0.8, 0.8, 0.2],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: [0.16, 1, 0.3, 1],
                              times: [0, 0.5, 1],
                            }}
                          />
                          <motion.path
                            d="M 25 30 L 27 32 L 31 28"
                            fill="none"
                            stroke="#88B772"
                            strokeWidth="1.5"
                            opacity="0"
                            animate={{
                              opacity: [0, 0, 0, 0, 0.9, 0.9, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: [0.16, 1, 0.3, 1],
                              times: [0, 0.3, 0.5, 0.6, 0.7, 0.9, 1],
                            }}
                          />
                        </>
                      )}
                    </svg>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-display-l text-ink">{pillar.title}</h3>
                  <p className="text-body-m text-inkSoft">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
