"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section id="vision" className="py-24 bg-paper border-t border-rule">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-saans-header text-balance">Our vision</h2>

          <div className="space-y-8 text-left max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
              viewport={{ once: true }}
              className="text-saans-body"
            >
              Today's reality is fragmented legacy systems where experts waste
              time stitching together data from multiple sources, creating
              governance risks and operational inefficiencies that slow down
              critical business decisions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              viewport={{ once: true }}
              className="text-saans-body"
            >
              Playfield provides a single AI interface, tailored to your
              organization, that can read, reason, and act with your
              policies—transforming how your teams interact with enterprise data
              and systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.6,
              }}
              viewport={{ once: true }}
              className="text-saans-body"
            >
              The outcome: faster decisions, fewer hand-offs, and measurable
              wins across cycle time, backlog burn-down, and SLA
              adherence—giving your teams the confidence to move at the speed of
              business.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
