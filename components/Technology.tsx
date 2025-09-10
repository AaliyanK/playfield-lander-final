"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(-1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isInView || !isClient) return;

    // Reset active step
    setActiveStep(-1);

    // Start the signal flow animation
    const timer = setTimeout(() => {
      const stepTimers = steps.map((_, index) => {
        return setTimeout(() => {
          setActiveStep(index);
        }, index * 800); // 800ms between each step
      });

      return () => {
        stepTimers.forEach(clearTimeout);
      };
    }, 500); // Initial delay

    return () => {
      clearTimeout(timer);
    };
  }, [isInView, isClient]);

  const steps = [
    {
      icon: "Sense",
      title: "Sense",
      description: "Understand the request and load relevant tools.",
    },
    {
      icon: "Plan",
      title: "Plan",
      description: "Select actions and constraints based on the map.",
    },
    {
      icon: "Act",
      title: "Act",
      description: "Run code in an isolated sandbox.",
    },
    {
      icon: "Verify",
      title: "Verify",
      description: "Assert success with checks and receipts.",
    },
  ];

  return (
    <section ref={ref} id="technology" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h2 className="text-saans-header">Technology</h2>
            <p className="text-saans-body max-w-2xl mx-auto">
              The operator moves from request to result with four quiet steps.
            </p>
          </div>

          {/* Timeline with Signal Flow */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="relative h-1 bg-ink/10 rounded-full mx-8 md:mx-16">
              {/* Signal Pulse */}
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#88B772] rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : { width: 0 }}
                transition={{
                  duration: 3.2, // 4 steps × 800ms
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5,
                }}
              />
            </div>

            {/* Timeline Dots and Steps */}
            <div className="grid grid-cols-4 gap-4 mt-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                  }
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + index * 0.1,
                  }}
                  className="text-center relative"
                >
                  {/* Timeline Dot */}
                  <div className="relative mb-6">
                    <motion.div
                      className="w-4 h-4 mx-auto rounded-full border-2 border-ink/20 bg-paper relative z-10"
                      animate={{
                        borderColor:
                          activeStep >= index ? "#88B772" : "#0B0B0C20",
                        backgroundColor:
                          activeStep >= index ? "#88B772" : "#F8F8F8",
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Pulse Ring */}
                    <motion.div
                      className="absolute inset-0 w-4 h-4 mx-auto rounded-full border-2 border-[#88B772]"
                      initial={{ scale: 1, opacity: 0 }}
                      animate={{
                        scale: activeStep === index ? [1, 2, 1] : 1,
                        opacity: activeStep === index ? [0, 0.6, 0] : 0,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                    />
                  </div>

                  {/* Step Content */}
                  <motion.div
                    animate={{
                      color: activeStep >= index ? "#88B772" : "#0B0B0C",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-saans-header mb-4 font-medium">
                      {step.title}
                    </h3>
                    <p className="text-saans-body">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
