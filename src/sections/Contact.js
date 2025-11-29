import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact</h2>

      <div style={styles.container}>
        {/* Email */}
        <a href="mailto:shizasultan117@gmail.com" style={styles.item}>
          <Mail style={styles.icon} />
          <span>Email: <strong>shizasultan117@gmail.com</strong></span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/shiza123-me"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.item}
        >
          <Github style={styles.icon} />
          <span>GitHub: <strong>shiza123-me</strong></span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shiza-sultan-aba8a4314"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.item}
        >
          <Linkedin style={styles.icon} />
          <span>LinkedIn: <strong>Shiza Sultan</strong></span>
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "#0d0d0d",
    color: "white",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#ffffff",
    fontWeight: "700",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    maxWidth: "500px",
    margin: "0 auto",
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 20px",
    backgroundColor: "#3A6F43",
    borderRadius: "10px",
    textDecoration: "none",
    color: "#ffffff",
    border: "1px solid #333",
    transition: "0.3s",
  },
  icon: {
    width: "22px",
    height: "22px",
  },
};
