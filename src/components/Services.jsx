import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "React Application Development",
    description:
      "Building scalable, production‑ready React and TypeScript applications for enterprise and consumer platforms."
  },
  {
    title: "Frontend Architecture & Micro‑Frontends",
    description:
      "Designing modular architectures, including micro‑frontend systems that improve scalability and team autonomy."
  },
  {
    title: "Performance Optimisation",
    description:
      "Profiling and optimising applications to reduce load times, improve rendering, and enhance overall system efficiency."
  },
  {
    title: "UI Engineering & Component Libraries",
    description:
      "Creating reusable UI systems, configuration‑based architectures, and analytics integrations for large teams."
  },
  {
    title: "Testing & Quality Engineering",
    description:
      "Implementing robust test suites with Jest, Enzyme, and RTL to improve reliability and reduce production issues."
  },
  {
    title: "Accessibility & Internationalisation",
    description:
      "Improving accessibility and global reach through WCAG compliance and advanced i18n implementations."
  },
  {
    title: "Frontend Consulting & Audits",
    description:
      "Reviewing codebases, identifying architectural gaps, and advising teams on best practices and performance."
  }
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Freelance and contract work available across the UK.
          </p>
        </div>

        <div className="grid grid-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3>{s.title}</h3>
              <p style={{ color: "var(--muted)", marginTop: "8px" }}>
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}