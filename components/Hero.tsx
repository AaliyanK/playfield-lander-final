"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative flex items-center overflow-hidden pb-6"
      >
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <h1 className="text-saans-header text-left max-w-4xl text-ink">
              Whitepaper
            </h1>

            <div className="space-y-4 md:space-y-6 max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
                className="text-saans-body"
              >
                We're announcing Playfield. We're building for a future where
                enterprises transition from operating through human interfaces
                to delegating tasks to agents end-to-end. For this to happen, we
                believe that the entire world of B2B software needs to be
                re-built for agents to interact with, rather than for humans.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.6,
                }}
                className="text-saans-body"
              >
                We're working with our customers directly to rebuild their
                enterprise software stack as agent environments, and train
                agents to complete their critical workflows within them.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-width Visual Area */}
      <section className="relative w-full bg-paper">
        <div className="w-full h-full flex items-center justify-center">
          {/* Full-width visual content */}
          <div className="w-full px-4 md:px-6 py-6">
            <motion.div
              className="w-full max-w-6xl mx-auto aspect-[3/2] md:aspect-[16/10] rounded-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.8,
              }}
            >
              <Image
                src="/images/hero2.png"
                alt="Transformation from legacy systems to AI-powered networks"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
