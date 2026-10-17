import { useEffect, useState } from "react";

const GITHUB_URL = "https://github.com/mathew-g-2408/";
const LINKEDIN_URL = "https://www.linkedin.com/in/g-mathew-8769952b8/";
const EMAIL = "mathewgm6@gmail.com";  

const projects = [
  {
    number: "01",
    name: "NutriTrack",
    type: "Mobile application",
    description:
      "A nutrition-tracking app concept for recording meals and keeping track of daily nutrition goals.",
    stack: ["React Native", "Expo", "JavaScript"],
    repo: `${GITHUB_URL}/NutriTrack`,
  },
  {
    number: "02",
    name: "MacroZone",
    type: "Mobile application",
    description:
      "A macro-tracking app concept with meal logging, a daily overview, theme preferences, and reminders.",
    stack: ["React Native", "AsyncStorage", "Expo"],
    repo: `${GITHUB_URL}/MacroZone`,
  },
  {
    number: "03",
    name: "AWS Cloud Practitioner Learning",
    type: "Cloud learning",
    description:
      "Hands-on learning with core AWS services, including IAM, EC2, S3, cloud security, and cost management.",
    stack: ["AWS", "IAM", "EC2", "S3"],
    repo: GITHUB_URL,
  },
];

const skills = [
  "C", "C++", "Python", "JavaScript", "React", "React Native",
  "HTML", "CSS", "Git", "GitHub", "AWS fundamentals", "SQL",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="background-glow glow-one" aria-hidden="true" />
      <div className="background-glow glow-two" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="G. Mathew home">
          G. Mathew<span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {[
            ["about", "About"],
            ["projects", "Projects"],
            ["journey", "Journey"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <a
              key={id}
              className={activeSection === id ? "nav-link active" : "nav-link"}
              href={`#${id}`}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
          <a className="nav-cta" href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub <Arrow />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-copy reveal">
            <div className="availability"><span className="status-dot" /> OPEN TO LEARNING & OPPORTUNITIES</div>
            <p className="eyebrow">HELLO, WORLD! I'M G. Mathew</p>
            <h1>
              Building things
              <br />
              for the <span className="accent-text">digital world.</span>
            </h1>
            <p className="hero-description">
              I'm a Computer Science student exploring software development,
              problem-solving, and cloud computing — one project at a time.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore projects <Arrow /></a>
              <a className="button button-ghost" href={GITHUB_URL} target="_blank" rel="noreferrer">Visit GitHub <Arrow /></a>
              <a className="button button-ghost" href={`${import.meta.env.BASE_URL}resume/resume.pdf`} download>Resume ↓</a>
            </div>
            <div className="hero-meta">
              <span><i>⌘</i> B.Tech CSE Student</span>
              <span><i>⌁</i> India</span>
            </div>
          </div>

          <div className="terminal-card reveal delay-one" aria-label="Developer terminal introduction">
            <div className="terminal-top">
              <div className="window-dots"><span /><span /><span /></div>
              <span className="terminal-title">mathew@developer: ~</span>
              <span className="terminal-menu">•••</span>
            </div>
            <div className="terminal-body">
              <p><span className="prompt">$</span> whoami</p>
              <p className="terminal-output">Computer Science student.</p>
              <p><span className="prompt">$</span> interests --list</p>
              <p className="terminal-output">Software · Web · Cloud</p>
              <p><span className="prompt">$</span> currently_learning</p>
              <p className="terminal-output">React, AWS, and better ways to build.</p>
              <p><span className="prompt">$</span> <span className="cursor">▌</span></p>
            </div>
            <div className="terminal-footer"><span className="status-dot" /> READY TO BUILD <span>UTF-8</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-shell section-block" id="about">
          <div className="section-heading reveal">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>Curious by nature.<br /><span className="muted-heading">Developer in progress.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-copy reveal">
              <p>
                I'm G. Mathew, a B.Tech Computer Science and Engineering student at
                Jorhat Engineering College. I enjoy understanding how technology
                works and turning what I learn into practical projects.
              </p>
              <p>
                Right now, I'm strengthening my foundations in programming and
                exploring frontend development, mobile apps, and cloud computing.
                I believe the best way to learn is to build, test, improve, and repeat.
              </p>
              <a className="text-link" href={GITHUB_URL} target="_blank" rel="noreferrer">More on GitHub <Arrow /></a>
            </div>
            <div className="skills-panel reveal delay-one">
              <div className="panel-label"><span className="tiny-square" /> TOOLS & TECHNOLOGIES</div>
              <div className="skill-list">
                {skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
              </div>
              <p className="skills-note">Skills are a work in progress — always learning something new.</p>
            </div>
          </div>
        </section>

        <section className="section-shell section-block" id="projects">
          <div className="section-heading reveal">
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2>Projects I've been<br /><span className="muted-heading">learning by building.</span></h2>
            <p className="section-intro">A few projects and learning experiences from my developer journey.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card reveal delay-${index + 1}`} key={project.number}>
                <div className="project-topline">
                  <span className="project-number">{project.number} / PROJECT</span>
                  <a className="icon-link" href={project.repo} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`}><Arrow /></a>
                </div>
                <div className={`project-art project-art-${index + 1}`} aria-hidden="true">
                  {index === 0 ? <div className="art-orbit"><span>n</span></div> : index === 1 ? <div className="macro-bars"><i /><i /><i /><i /><i /></div> : <div className="cloud-art">☁</div>}
                </div>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">View repository <Arrow /></a>
              </article>
            ))}
          </div>
          <p className="project-disclaimer">Project links are placeholders until you update them with your actual GitHub repositories.</p>
        </section>

        <section className="section-shell section-block" id="journey">
          <div className="section-heading reveal">
            <p className="eyebrow">03 / THE JOURNEY</p>
            <h2>Learning is the<br /><span className="muted-heading">whole point.</span></h2>
          </div>
          <div className="timeline">
            <article className="timeline-item reveal">
              <div className="timeline-marker"><span /></div>
              <div className="timeline-date">CURRENT · B.TECH</div>
              <div className="timeline-content">
                <h3>B.Tech — Computer Science & Engineering</h3>
                <p className="timeline-place">Jorhat Engineering College · Assam</p>
                <p>Building a foundation in computer science, programming, data structures, software engineering, and problem-solving.</p>
              </div>
            </article>
            <article className="timeline-item reveal delay-one">
              <div className="timeline-marker"><span /></div>
              <div className="timeline-date">CLOUD LEARNING</div>
              <div className="timeline-content">
                <h3>AWS Cloud Practitioner</h3>
                <p className="timeline-place">Online learning · Udemy</p>
                <p>Studied cloud fundamentals and explored services such as IAM, EC2, and S3 through guided hands-on practice.</p>
              </div>
            </article>
            <article className="timeline-item reveal delay-two">
              <div className="timeline-marker"><span /></div>
              <div className="timeline-date">ONGOING</div>
              <div className="timeline-content">
                <h3>Building, experimenting, improving</h3>
                <p className="timeline-place">Personal projects</p>
                <p>Learning by creating apps, working with development tools, and steadily improving my technical skills.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section-shell contact-section" id="contact">
          <div className="contact-card reveal">
            <p className="eyebrow">04 / CONTACT</p>
            <h2>Have an idea?<br /><span className="accent-text">Let's connect.</span></h2>
            <p className="contact-description">I'm always happy to connect with fellow learners, developers, and people building interesting things.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${EMAIL}`}>Email me <Arrow /></a>
              <a className="button button-ghost" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a className="button button-ghost" href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            </div>
            <p className="replace-note">Remember to replace the sample email and profile URLs in <code>src/App.jsx</code>.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="brand" href="#home">G. Mathew<span></span></a>
        <p>Designed with curiosity. Built with React.</p>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
        <span className="copyright">© {new Date().getFullYear()} G. Mathew</span>
      </footer>
    </>
  );
}

export default App;