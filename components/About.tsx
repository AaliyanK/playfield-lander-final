"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 text-center"
        >
          <div className="space-y-6 text-body-m text-inkSoft max-w-3xl mx-auto">
            <p>
              Playfield is where enterprise agents learn to work like teammates.
            </p>
            <p>Not toy demos.</p>
            <p>
              Agents that understand the environment policies and desired
              outcomes.
            </p>
            <p>
              Playfield turns your stack into a navigable field then teaches an
              agent to reason over it take actions and show its receipts.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
