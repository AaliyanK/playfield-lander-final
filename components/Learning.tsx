"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Learning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="learning" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-saans-header">Improves with use</h2>
            <p className="text-saans-body max-w-2xl mx-auto">
              Evals measure success on your workflows.
              <br />
              Feedback tunes the model for accuracy and speed.
            </p>
          </div>

          {/* Simple Line Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative h-64 bg-paper border border-rule rounded-xl p-8"
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 400 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid lines */}
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(0,0,0,0.05)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Trend line */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{
                  duration: 2,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5,
                }}
                d="M 20 160 Q 100 120 180 100 T 360 60"
                stroke="#88B772"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />

              {/* Data points */}
              <motion.circle
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 1.5 }}
                cx="20"
                cy="160"
                r="4"
                fill="#88B772"
              />
              <motion.circle
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 1.7 }}
                cx="180"
                cy="100"
                r="4"
                fill="#88B772"
              />
              <motion.circle
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, delay: 1.9 }}
                cx="360"
                cy="60"
                r="4"
                fill="#88B772"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
