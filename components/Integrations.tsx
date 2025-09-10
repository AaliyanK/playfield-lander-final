"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Integrations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const integrations = [
    "Microsoft 365",
    "Salesforce",
    "Slack",
    "Jira",
    "GitHub",
    "AWS",
    "Google Workspace",
    "Notion",
    "Figma",
    "Linear",
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-ink/2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h2 className="text-display-l">Start with Microsoft 365</h2>
            <p className="text-body-m text-inkSoft max-w-2xl mx-auto">
              Begin where most work lives.
              <br />
              Expand through the Model Context Protocol to the rest of your
              stack.
            </p>
          </div>

          {/* Integration Marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative overflow-hidden"
          >
            <div className="flex space-x-8 animate-marquee hover:pause-animation">
              {[...integrations, ...integrations].map((integration, index) => (
                <div
                  key={`${integration}-${index}`}
                  className="flex-shrink-0 px-6 py-3 bg-paper border border-rule rounded-lg text-caption-s text-ink/60 hover:text-accent hover:border-accent/40 transition-colors duration-300 cursor-pointer"
                >
                  {integration}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
