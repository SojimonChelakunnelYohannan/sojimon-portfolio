import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { label: "Load time improvement", value: 50 },
  { label: "Scalability boost", value: 35 },
  { label: "UI performance gain", value: 60 },
  { label: "Test coverage on key flows", value: 90 }
];

export default function Metrics() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Impact at a glance</h2>
          <p className="section-subtitle">
            Metrics drawn from production React projects.
          </p>
        </div>

        <div className="grid grid-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="metric-number">
                <CountUp end={s.value} duration={1.4} />%
              </div>
              <div className="metric-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}