import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="hero-title">
            Lead <span className="hero-highlight">React Engineer</span>  
            building scalable, high‑impact frontends.
          </h1>

          <p className="hero-subtitle">
            Lead React Engineer based in the UK with 7+ years of experience delivering
            production‑grade frontends for aviation, banking and enterprise platforms.
            Currently open to freelance and contract roles across the UK and remote.
          </p>

          <div className="hero-badges">
            <span className="badge">Right to work in the UK</span>
            <span className="badge">Freelance & contract availability</span>
            <span className="badge">React · TypeScript · Architecture</span>
          </div>

          <div className="hero-actions">
            <button
              className="btn-primary"
              onClick={() => (window.location = "#projects")}
            >
              View projects
            </button>
            <button
              className="btn-ghost"
              onClick={() => (window.location = "#contact")}
            >
              Let’s talk <span>→</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="hero-card-header">
            <span>Recent impact</span>
            <span>Production systems</span>
          </div>

          <div className="hero-metrics">
            <div className="metric-pill">
              <strong>30%</strong> uptick in client acquisition via
              configuration‑based architecture.
            </div>
            <div className="metric-pill">
              <strong>60%</strong> UI performance improvement on banking
              micro‑frontends.
            </div>
            <div className="metric-pill">
              <strong>50%</strong> reduction in load times on investment
              platforms.
            </div>
            <div className="metric-pill">
              <strong>45%</strong> decline in production bugs with 90%+ coverage.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}