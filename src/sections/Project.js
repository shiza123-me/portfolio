export default function Projects() {
  const projects = [
    {
      title: "Shiza-Damo",
      desc: "A sleek and modern portfolio-style project showcasing UI/UX skills.",
      img: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shiza123-me/Shiza-Domo",
      tags: ["React", "CSS", "UI/UX"],
    },
    {
      title: "E-commerce",
      desc: "An eCommerce website with product listings, cart functionality, and responsive UI.",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shiza123-me/e-commerce",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Frontend Job Portal",
      desc: "A job portal built with clean UI, responsive design, and job listings.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",

      github: "https://github.com/shiza123-me/frontend-job",
      tags: ["React", "Frontend", "UI/UX"],
    },
    {
      title: "Backend Job Portal",
      desc: "A backend API project demonstrating REST API, authentication, and CRUD.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",

      github: "https://github.com/shiza123-me/Backend-Job",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "Food Website",
      desc: "Responsive food-themed website with categories, animations, and images.",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shiza123-me/food-website",
      tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
    },
    {
      title: "Hackathon Project",
      desc: "A project built during a hackathon, showcasing problem-solving and teamwork.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shiza123-me/Hackathon",
      tags: ["React", "APIs", "Team Project"],
    },
    {
      title: "Post App",
      desc: "Create, read, update, delete posts with responsive and user-friendly UI.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shiza123-me/Post",
      tags: ["React", "JavaScript", "CRUD"],
    },
    {
      title: "Web Development",
      desc: "A collection of practice projects, components, and web experiments.",
      img: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80",
      github: "https://github.com/shiza123-me/Web_development",
      tags: ["HTML", "CSS", "JS", "Practice"],
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>

      <div style={styles.grid}>
        {projects.map((item, index) => (
          <div key={index} style={styles.card} className="fade-in">
            <img src={item.img} alt={item.title} style={styles.image} />

            <h3 style={styles.title}>{item.title}</h3>
            <p style={styles.desc}>{item.desc}</p>

            <div style={styles.tags}>
              {item.tags.map((tag, i) => (
                <span key={i} style={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- STYLING ----------
const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "#0d0d0d",
    color: "white",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "30px",
    fontWeight: "700",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#1a1a1a",
    padding: "18px",
    borderRadius: "14px",
    border: "1px solid #333",
    transition: "0.3s",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "12px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  desc: {
    color: "#cccccc",
    marginBottom: "12px",
    fontSize: "15px",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "15px",
  },
  tag: {
    backgroundColor: "#262626",
    padding: "6px 10px",
    borderRadius: "8px",
    fontSize: "12px",
    color: "#ddd",
    border: "1px solid #333",
  },
  button: {
    display: "inline-block",
    padding: "10px 14px",
    backgroundColor: "#ffffff0d",
    border: "1px solid #444",
    borderRadius: "8px",
    textDecoration: "none",
    color: "white",
    transition: "0.3s",
  },
};
