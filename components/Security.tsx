"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Security() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Seat by seat authentication",
    "Role based access",
    "Audit trails",
    "VPC and on prem options",
    "Data residency by region",
  ];

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12 text-center"
        >
          <h2 className="text-display-l">Built for enterprise</h2>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -24 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }
                }
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + index * 0.1,
                }}
                className="flex items-center justify-center space-x-4"
              >
                <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <p className="text-body-m text-inkSoft">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
