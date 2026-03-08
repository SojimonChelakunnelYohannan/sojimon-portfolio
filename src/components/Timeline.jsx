import React from "react";
import { motion } from "framer-motion";

const items = [
  { period: "Feb 2022 – Jan 2024", role: "Lead Solution Developer · IBS Software" },
  { period: "Feb 2021 – Jan 2022", role: "Consultant · Capgemini" },
  { period: "Jun 2019 – Feb 2021", role: "Senior Software Developer · UST Global" },
  { period: "Sep 2016 – Jun 2019", role: "Junior Software Programmer · Tech Innovations" }
];

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Career timeline</h2>
          <p className="section-subtitle">
            Progression from junior engineer to lead solution developer.
          </p>
        </div>

        <div className="timeline">
          {items.map((item, i) => (
            <motion.div
              key={item.period}
              className="timeline-item"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="timeline-dot" />
              <h3>{item.period}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                {item.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}