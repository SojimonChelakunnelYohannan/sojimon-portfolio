import React from "react";
import { motion } from "framer-motion";

const quotes = [
  {
    text: "Recognised among the top 5% of employees for total impact to the firm.",
    author: "Excellence Award · 2023"
  },
  {
    text: "Consistently delivers high‑quality solutions and leads teams effectively.",
    author: "Team Champ Award · 2023"
  },
  {
    text: "Trusted to take ownership of complex front‑end initiatives.",
    author: "Spotlight Award · 2021"
  }
];

export default function Testimonials() {
  return (
    <section>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Recognition</h2>
          <p className="section-subtitle">
            Awards reflecting impact and leadership.
          </p>
        </div>

        <div className="grid grid-3">
          {quotes.map((q, i) => (
            <motion.div
              key={q.text}
              className="card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <p className="testimonial-text">“{q.text}”</p>
              <p><strong>— {q.author}</strong></p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}