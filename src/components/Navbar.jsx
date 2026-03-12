import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ mode, setMode }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#timeline", label: "Timeline" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand">SOJIMON CHELAKUNNEL YOHANNAN</div>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          {/*<a href="/resume.pdf" className="nav-link">
            Resume
          </a>*/}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            {/*<a href="/resume.pdf" onClick={() => setOpen(false)}>
              Resume
            </a>*/}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}