export default function Hero() {
  return (
    <section id="home" className="hero">
      <h1>Hi, I'm <span>Shiza Sultan</span></h1>
      <p>MERN Stack Developer | React Native (Expo) App Developer</p>
      <a href="#projects" className="hero-btn">View My Work</a>
<a
  href="/cv.pdf"
  download
  style={{
     padding: "12px 25px",
    backgroundColor: "#3A6F43",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    width:"fit-content",
    marginTop:"20px"

  }}
>
  Download CV
</a>

    </section>
  );
}
