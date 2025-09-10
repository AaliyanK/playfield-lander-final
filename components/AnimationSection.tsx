"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[40vh] bg-paper border-b border-t border-rule"
    >
      <div className="w-full h-full flex items-center justify-center">
        {/* Placeholder for your animation/image content */}
        <div className="w-full max-w-7xl mx-auto px-6 py-8">
          <motion.div
            className="w-full h-80 bg-gray-100/50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Grid lines around the content area */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top border */}
              <div className="absolute top-0 left-0 right-0 h-px bg-rule"></div>
              {/* Bottom border */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-rule"></div>
              {/* Left border */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-rule"></div>
              {/* Right border */}
              <div className="absolute right-0 top-0 bottom-0 w-px bg-rule"></div>
            </div>

            <div className="text-center text-gray-500 relative z-10">
              <div className="text-lg font-medium mb-2">
                Animation/Visual Area
              </div>
              <div className="text-sm">Ready for your content</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
