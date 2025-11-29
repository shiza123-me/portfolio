import React, { useState } from "react";

export default function Skills() {
  const skills = [
    "React JS", "JavaScript", "HTML / CSS",
    "React Native (Expo)", "Firebase Auth",
    "MongoDB", "Express JS", "Node JS",
    "REST APIs", "UI/UX", "Git & GitHub","Socket.io"
  ];

  // Inline styles
  const styles = {
    section: {
      padding: "60px 20px",
      textAlign: "center",
    },
    title: {
      color: "white",
      fontSize: "32px",
      marginBottom: "30px",
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "20px",
      padding: "10px",
    },
    card: {
      padding: "18px 20px",
      background: " #3A6F43",
      color: "white",
      borderRadius: "14px",
      fontSize: "18px",
      fontWeight: "600",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow: "0px 0px 8px rgba(255,255,255,0.05)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
  };

  // Hover effect using React state
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.title}>My Skills</h2>

      <div style={styles.grid}>
        {skills.map((skill, i) => (
          <div
            key={i}
            style={{
              ...styles.card,
              transform: hoverIndex === i ? "translateY(-6px)" : "translateY(0)",
              boxShadow:
                hoverIndex === i
                  ? "0px 10px 20px rgba(255,255,255,0.15)"
                  : "0px 0px 8px rgba(255,255,255,0.05)",
              border:
                hoverIndex === i
                  ? "1px solid rgba(255, 255, 255, 0.3)"
                  : "1px solid rgba(255, 255, 255, 0.1)",
            }}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
