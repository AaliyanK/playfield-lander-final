"use client";

import { motion } from "framer-motion";
import GlyphStacks from "./visuals/GlyphStacks";
import GlyphNetwork from "./visuals/GlyphNetwork";
import GlyphShield from "./visuals/GlyphShield";
import GlyphPulse from "./visuals/GlyphPulse";

export default function ValueProps() {
  const valueProps = [
    // {
    //   headline: "One interface over your tools",
    //   description:
    //     "Search, summarize, and act across email, docs, tickets, and databases—without leaving one place.",
    //   visual: <GlyphStacks />,
    //   reverse: false,
    // },
    // {
    //   headline: "Configured to your business",
    //   description:
    //     "Every enterprise is unique. We adapt to your policies, controls, and workflows.",
    //   visual: <GlyphNetwork />,
    //   reverse: true,
    // },
    // {
    //   headline: "Operational confidence",
    //   description:
    //     "Policies, approvals, and receipts built-in—so changes stick and audits are easy.",
    //   visual: <GlyphShield />,
    //   reverse: false,
    // },
    // {
    //   headline: "Measurable impact",
    //   description:
    //     "Shorter cycle times, lower backlog, fewer escalations—tracked from day one.",
    //   visual: <GlyphPulse />,
    //   reverse: true,
    // },
  ];

  return (
    <section id="product" className="bg-paper py-20">
      <div className="max-w-7xl mx-auto px-6">
        {valueProps.map((prop, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className={`flex items-center justify-center gap-16 py-16 ${
              prop.reverse ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Content */}
            <div className="flex-1 max-w-md">
              <h2 className="text-saans-header mb-4 text-ink text-left">
                {prop.headline}
              </h2>
              <p className="text-saans-body text-inkSoft leading-relaxed text-left">
                {prop.description}
              </p>
            </div>

            {/* Visual Container */}
            <div className="flex-shrink-0">
              <div className="bg-paper border border-rule rounded-lg p-8">
                <div className="w-48 h-48 flex items-center justify-center">
                  {prop.visual}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
