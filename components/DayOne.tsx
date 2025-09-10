"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function DayOne() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    "End to end task completion not just scaffolds.",
    "Composable internal tools created on the fly.",
    "Enterprise controls. Role aware permissions. Review gates. Environment isolation. Full audit trails.",
  ];

  return (
    <section ref={ref} id="day-one" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <h2 className="text-saans-header text-center">Day one value</h2>

          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + index * 0.1,
                }}
                className="flex items-start space-x-4"
              >
                <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
                <p className="text-saans-body">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
