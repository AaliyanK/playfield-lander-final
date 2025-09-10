"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import OntologyCard from "./cards/OntologyCard";
import CodeCard from "./cards/CodeCard";
import SandboxCard from "./cards/SandboxCard";

export default function WhatIs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-8">
            <h2 className="text-saans-header">
              One operator for your enterprise
            </h2>

            <div className="space-y-6">
              <p className="text-saans-body">
                Playfield connects to work systems and understands your
                ontology.
              </p>
              <p className="text-saans-body">
                It plans. Writes code. Executes in a sandbox.
              </p>
              <p className="text-saans-body">
                You query. It returns results you can trust.
              </p>
            </div>
          </div>

          {/* Three Card Layout */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Ontology Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2,
                }}
              >
                <OntologyCard />
              </motion.div>

              {/* Code Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
              >
                <CodeCard />
              </motion.div>

              {/* Sandbox Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.6,
                }}
              >
                <SandboxCard />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
