"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="rule-line pt-8" />

          <div className="flex justify-center">
            <div
              className="text-xl font-serif text-ink"
              style={{ fontWeight: "300" }}
            >
              Playfield
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
