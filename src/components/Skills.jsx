import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React.js", "TypeScript", "JavaScript (ESNext)", "Redux",
  "HTML5 & CSS3", "Tailwind / Bootstrap", "Node.js & Express",
  "Micro‑frontends", "i18n & accessibility (WCAG)",
  "Testing (Jest, Enzyme, RTL)", "Webpack & build tooling",
  "Agile (Scrum), code review, repository management"
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Core skills</h2>
          <p className="section-subtitle">
            Focused on scalable, maintainable front‑end systems.
          </p>
        </div>

        <div className="grid grid-3">
          {skills.map((s, i) => (
            <motion.div
              key={s}
              className="card"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}