import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container contact-center">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Based in Newcastle Upon Tyne, UK · Right to work in the UK · Open to
          freelance and contract opportunities · Open to roles and collaborations.
        </p>

        <button
          className="btn-primary"
          onClick={() => (window.location = "mailto:sojimoncyohannan@gmail.com")}
        >
          Discuss a project
        </button>
      </div>
    </section>
  );
}