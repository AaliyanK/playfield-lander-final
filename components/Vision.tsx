"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <>
      {/* Foundations Section */}
      <section
        id="foundations"
        className="pt-6 pb-6 bg-gradient-to-b from-accent/3 to-paper"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-saans-header text-left text-ink">
              Foundations
            </h2>

            <div className="space-y-6 text-left max-w-3xl">
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
                Enterprises run on legacy software, and we know migration is
                hard. We're here to smooth that out. In order to enable the
                transition to an agent-first enterprise, we feel two things are
                necessary:
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4,
                }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <ul className="space-y-4 text-saans-body">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>
                      <span className="font-test-signifier font-bold text-ink">
                        A reasoning map of your entire enterprise.
                      </span>{" "}
                      After replicating your software stack as agent
                      environments, we build a real time knowledge graph that
                      learns and updates itself from changes to your systems,
                      files/docs, your workflows, and policies through custom
                      retriever agents (live agentic connectors to your existing
                      systems).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span>
                      <span className="font-test-signifier font-bold text-ink">
                        An interface for an agent to take actions over the
                        reasoning map.
                      </span>{" "}
                      An agent traverses the reasoning map to plan out your
                      intended task and writes code to interact with the agent
                      environments and execute actions within a sandbox.
                    </span>
                  </li>
                </ul>
              </motion.div>
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
                We work directly with our customers to build this knowledge
                graph and populate it with the environments custom to them. We
                also post-train our own coding agents to reliably take actions
                over this knowledge graph structure.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialization Section */}
      <section
        id="specialization"
        className="py-6 bg-gradient-to-b from-paper to-accent/3"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-saans-header text-left text-ink">
              Specialization
            </h2>

            <div className="space-y-6 text-left max-w-3xl">
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
                Customers with complex workflows that take hours, if not days,
                to execute, understand the frustration of today’s agents being
                unable to act reliably across their systems for that period of
                time. We feel without the correct infrastructure in place,
                delegating tasks like these to an agent is asking it to go
                through a sea of tools at each time step and hope it picks the
                right one. The longer the time horizon, the more likely it is
                they make the wrong choice and are unable to complete your task.
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
                className="text-saans-body font-medium"
              >
                Agents are probabilistic machines by nature - our goal is to
                drive them towards determinism.
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
                The way we will do this is through building evals with our
                customers for their specific tasks, and post-training agents
                with reinforcement learning on these evals in the environments
                we built for them as a training ground. This is how we achieve
                reliability whilst optimizing for your objectives in a
                particular workflow.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.8,
                }}
                viewport={{ once: true }}
                className="text-saans-body"
              >
                As our customers populate a repository of these specialized
                agents for their complex workflows, they build towards a world
                where they can delegate agents to do long horizon tasks
                reliably.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
      <section
        id="security"
        className="py-6 bg-gradient-to-b from-accent/3 to-paper"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-saans-header text-left text-ink">Security</h2>

            <div className="space-y-6 text-left max-w-3xl">
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
                We know that forward thinking customers interested in Playfield
                will also have sensitive information stored in their systems and
                regulations to follow. It is our goal to have security and
                compliance as our highest priority, and we support on-prem/VPC
                deployments, VDRs, and seat-by-seat sso/auth. We build around
                our customers and we will build in security measures for our
                platform custom to you.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Today Section */}
      <section id="today" className="py-6 pb-6 bg-paper">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-saans-header text-left text-ink">Today</h2>

            <div className="space-y-6 text-left max-w-3xl">
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
                We are currently accepting early design partners to build our
                platform around and tailor our services to. As a team we've
                worked on reinforcement learning, enterprise data and coding
                agents at top startups - we now want to build to fix your
                problems. Reach out here:{" "}
                <a
                  href="mailto:zayaan19@gmail.com"
                  className="text-accent hover:underline"
                >
                  zayaan19@gmail.com
                </a>
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
                Thanks,
                <br />
                The Playfield team :)
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
