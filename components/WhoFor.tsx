"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function WhoFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const examples = [
    {
      category: "Revenue operations and sales",
      tasks: ["CRM hygiene. Pipeline enrichment. Quote workflows. Order ops."],
    },
    {
      category: "Support and success",
      tasks: [
        "Ticket triage and resolution. Entitlement checks. Knowledge updates.",
      ],
    },
    {
      category: "Engineering ops and data",
      tasks: [
        "On call runbooks. CI and CD chores. Data quality fixes. Cost optimization.",
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
          className="space-y-16"
        >
          <h2 className="text-display-l text-center">Who it is for</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {examples.map((example, index) => (
              <motion.div
                key={example.category}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + index * 0.1,
                }}
                className="space-y-4"
              >
                <h3 className="text-display-l text-ink">{example.category}</h3>
                <div className="space-y-2">
                  {example.tasks.map((task, taskIndex) => (
                    <p key={taskIndex} className="text-body-m text-inkSoft">
                      {task}
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
