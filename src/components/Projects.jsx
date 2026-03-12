import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Airline Customer Platform",
    company: "IBS Software",
    role: "Lead Solution Developer",
    context: "Large‑scale, customer‑facing web application.",
    tech: "React, Redux, configuration‑based architecture, analytics, i18n",
    bullets: [
      "Led development of a large‑scale React application for airline customers.",
      "Designed a configuration‑based architecture, driving a 30% uptick in client acquisition and reducing deployment time by 15%.",
      "Built an analytics library supporting multiple tools, improving business performance by 20%.",
      "Directed code review and repo management, improving code quality by 45% and reducing development time by 20%.",
      "Implemented advanced i18n, boosting global engagement by 30% and increasing international revenue by 20%."
    ]
  },
  {
    title: "Micro‑Frontend Banking Suite",
    company: "Capgemini",
    role: "Consultant",
    context: "React micro‑frontend architecture for a financial platform.",
    tech: "React, micro‑frontends, Context API, Hooks, Jest, Enzyme",
    bullets: [
      "Engineered a React micro‑frontend architecture, improving system scalability by 35%.",
      "Improved UI performance by 60% by identifying bottlenecks and optimising state management.",
      "Raised unit test coverage to 90%, leading to a 45% decline in production bugs.",
      "Mentored team members and collaborated with business stakeholders in an Agile (Scrum) setup."
    ]
  },
  {
    title: "Investment Platform Modernisation",
    company: "UST Global",
    role: "Senior Software Developer",
    context: "Modern web experience for investment customers.",
    tech: "React, Node.js, lazy loading, code splitting, caching",
    bullets: [
      "Coordinated cross‑functional teams to launch high‑quality software that increased user adoption by 50%.",
      "Optimised performance with lazy loading, code splitting and caching, reducing load times by 50% and improving efficiency by 40%.",
      "Achieved 80% code coverage in two months, boosting reliability and maintainability."
    ]
  },
  {
    title: "Frontend Architecture & Accessibility",
    company: "Tech Innovations",
    role: "Junior Software Programmer",
    context: "Responsive, accessible web applications.",
    tech: "React, responsive design, WCAG, performance optimisation",
    bullets: [
      "Developed and optimised frontend architecture with a focus on responsive design.",
      "Reduced loading time by up to 40% through component optimisation and best practices.",
      "Aligned applications with WCAG standards, improving accessibility by 30% and expanding user base by 20%."
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle">
            Real projects from aviation, banking and enterprise domains.
          </p>
        </div>

        <div className="grid grid-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <h3>{p.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)" }}>
                {p.company} · {p.role}
              </p>
              <p style={{ marginTop: 6, fontSize: "0.85rem", color: "var(--muted)" }}>
                {p.context}
              </p>
              <p style={{ marginTop: 6, fontSize: "0.85rem", color: "var(--muted)" }}>
                {p.tech}
              </p>
              <ul style={{ marginTop: 10, paddingLeft: 18, fontSize: "0.9rem" }}>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}