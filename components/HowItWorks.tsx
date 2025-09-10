"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sections = [
    {
      title: "Replicate",
      content: [
        "We build high fidelity permissioned replicas of your core tools.",
        "Stable APIs. Seeded test data. Autoguardrails that define done.",
        "These replicas evolve with your real systems so training and execution stay in lockstep.",
      ],
    },
    {
      title: "Map",
      content: [
        "We maintain a live graph across systems entities workflows policies and events.",
        "The agent uses this map to plan multi step work and avoid dead ends.",
        "Changes in your stack update the graph automatically.",
      ],
    },
    {
      title: "Act",
      content: [
        "The agent writes and runs code to complete workflows.",
        "When needed it generates lightweight internal web apps so humans can review approve and extend.",
        "Successful plans are promoted to your production endpoints with controls.",
      ],
    },
    {
      title: "Verify",
      content: [
        "Every task carries a machine checkable definition of success.",
        "Assertions. Simulation tests. Policy checks. Human in the loop reviews where required.",
        "We log reasoning artifacts and results so you can audit everything.",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-ink/2">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-20"
        >
          <h2 className="text-display-l text-center">How Playfield works</h2>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + index * 0.1,
                }}
                className="grid lg:grid-cols-3 gap-12 items-start"
              >
                <div className="lg:col-span-1">
                  <h3 className="text-display-l text-ink">{section.title}</h3>
                </div>

                <div className="lg:col-span-2 space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-body-m text-inkSoft">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
