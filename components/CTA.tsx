"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.currentTarget.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section ref={ref} id="contact" className="py-32 px-6 bg-ink/2">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-12"
          >
            <h2 className="text-saans-header">
              Let Playfield modernize your enterprise
            </h2>

            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-caption-s text-ink/60 mb-2 font-medium">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-paper border-b-2 border-ink/20 focus:border-accent focus:outline-none transition-colors text-saans-body"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-caption-s text-ink/60 mb-2 font-medium">
                    YOUR COMPANY EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-paper border-b-2 border-ink/20 focus:border-accent focus:outline-none transition-colors text-saans-body"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-accent text-ink px-8 py-3 rounded-full font-medium transition-all duration-200 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-accent text-caption-s"
                  >
                    Thanks! We'll be in touch soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-red-500 text-caption-s"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-veil backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-paper border border-rule rounded-xl p-8 max-w-md w-full"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-ink/40 hover:text-ink transition-colors"
            >
              ✕
            </button>

            <div className="space-y-6">
              <h3 className="text-saans-header">Get in touch</h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-caption-s text-ink/60 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-rule rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-caption-s text-ink/60 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-rule rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-caption-s text-ink/60 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-rule rounded-lg focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-caption-s text-ink/60 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-rule rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your use case..."
                  />
                </div>

                <button type="submit" className="w-full btn-primary">
                  Send message
                </button>
              </form>

              <p className="text-caption-s text-ink/40 text-center">
                We respect your privacy. Your information will not be shared.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
