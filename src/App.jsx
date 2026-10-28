import React, { useEffect, useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, Menu, X, Github, Mail, Phone, MapPin,
  MonitorCog, Network, Code2, Cloud, Wrench, GraduationCap, Award,
  ExternalLink, CheckCircle2, Terminal, Laptop, Database, Layers3,
  BriefcaseBusiness, Sparkles, ChevronRight, Sun, Moon
} from "lucide-react";

const contactEmail = "ralphjamberpadilla@gmail.com";
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}`;
const profileImage = "/images/profile.jpg";
const educationItems = [
  {
    icon: GraduationCap,
    category: "HIGHER EDUCATION",
    date: "2026 – Present",
    title: "Bachelor of Science in Information Technology",
    description: "STI College Fairview. Studying IT concepts and developing academic projects in systems and web technologies.",
    image: "/images/education/work-in-progress.jpg",
    imageAlt: "STI College Information Technology studies in progress"
  },
  {
    icon: Cloud,
    category: "ONGOING LEARNING",
    date: "Present",
    title: "AWS Cloud Fundamentals",
    description: "Building foundational knowledge of cloud services, infrastructure, and core AWS concepts.",
    image: "/images/education/work-in-progress.jpg",
    imageAlt: "AWS Cloud Fundamentals learning in progress"
  },
  {
    icon: Network,
    category: "ONGOING LEARNING",
    date: "Present",
    title: "Cyber Quotient",
    description: "Developing cybersecurity awareness and learning the fundamentals of safer digital practices.",
    image: "/images/education/work-in-progress.jpg",
    imageAlt: "Cyber Quotient learning in progress"
  },
  {
    icon: Award,
    category: "TECHNICAL TRAINING",
    date: "2023",
    title: "TESDA — Computer Systems Servicing NC II",
    description: "Training in computer hardware installation and configuration, LAN setup, maintenance, and system diagnostics.",
    image: "/images/certificates/tesda-css-nc-ii.jpg",
    imageAlt: "TESDA Computer Systems Servicing NC II certificate"
  }
];

const projects = [
  {
    number: "01",
    title: "Seafudz ng Bayan Ordering System",
    category: "CAPSTONE PROJECT",
    description:
      "A web-based ordering and delivery service system for the Bagong Silang branch, bringing online orders, walk-in POS transactions, order status monitoring, payment recording, and sales reporting into one platform.",
    stack: ["React", "JavaScript", "Supabase", "Google Cloud", "PostgreSQL"],
    icon: Layers3,
    images: [
      { src: "/images/projects/seafudz-dashboard.png", alt: "Seafudz ng Bayan ordering system dashboard" },
      { src: "/images/projects/seafudz-report.png", alt: "Seafudz ng Bayan sales report dashboard" }
    ],
    featured: true,
    note: "Academic capstone · Team project"
  },
  {
    number: "02",
    title: "Grade Calculator",
    category: "WEB DEVELOPMENT",
    description:
      "A simple web application that calculates student grades through a clear interface and interactive form inputs.",
    stack: ["HTML", "CSS", "JavaScript"],
    icon: Code2,
    images: [{ src: "/images/projects/grade-calculator.png", alt: "Grade Calculator project screenshot" }],
    demo: "https://calculator-of-grade-bilib-jmsw5gnhh-bilib12s-projects.vercel.app/",
    repo: "https://github.com/bilib12/Calculator-of-Grade-Bilib"
  },
  {
    number: "03",
    title: "Grade Horror Calculator",
    category: "INTERACTIVE UI",
    description:
      "A horror-themed grade calculator that combines a distinctive visual style with interactive functionality and custom CSS effects.",
    stack: ["HTML", "CSS", "JavaScript"],
    icon: Sparkles,
    images: [{ src: "/images/projects/grade-horror.png", alt: "Grade Horror Calculator project screenshot" }],
    demo: "https://horror-calculator-r97putbgu-bilib12s-projects.vercel.app/",
    repo: "https://github.com/bilib12/Horror-calculator"
  },
  {
    number: "04",
    title: "Mini Capstone: Car Rental Website",
    category: "ACADEMIC PROJECT",
    description:
      "A responsive car rental website concept featuring categorized vehicle listings and a modern interface for presenting rental options.",
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    icon: Laptop,
    images: [],
    repo: "https://github.com/bilib12/bilib"
  }
];

const interests = [
  "IT SUPPORT",
  "NETWORKING",
  "SYSTEMS ADMINISTRATION",
  "FRONT-END DEVELOPMENT",
  "CLOUD FUNDAMENTALS"
];

const skillGroups = [
  {
    icon: Wrench,
    title: "IT Support & Hardware",
    description: "Practical foundations for maintaining and troubleshooting computer systems.",
    skills: ["System troubleshooting", "Hardware servicing", "Hardware installation", "Software installation", "System diagnostics"]
  },
  {
    icon: Network,
    title: "Networking & Systems",
    description: "Core skills developed through computer systems servicing training and practice.",
    skills: ["LAN configuration", "Network setup", "Network maintenance", "Windows installation", "Basic server setup"]
  },
  {
    icon: Code2,
    title: "Front-End Development",
    description: "Building responsive interfaces and interactive academic web projects.",
    skills: ["HTML", "CSS", "Bootstrap", "Basic JavaScript", "Responsive design", "Figma"]
  },
  {
    icon: Cloud,
    title: "Systems & Cloud",
    description: "Continuing to develop knowledge of enterprise systems and cloud concepts.",
    skills: ["AWS Cloud fundamentals", "SAP S/4HANA systems", "UI/UX flowcharts", "Database concepts"]
  }
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [certificateToView, setCertificateToView] = useState(null);
  const [theme, setTheme] = useState(() => (
    window.localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark"
  ));

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!certificateToView) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setCertificateToView(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [certificateToView]);

  return (
    <div className="site-shell" data-theme={theme}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <nav className="nav-wrap container">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Ralph Padilla home">
            <span className="brand-mark"><img src={profileImage} alt="" /></span>
            <span className="brand-name">Ralph Padilla</span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Experience", "#training"],
              ["Projects", "#projects"],
              ["Contact", "#contact"]
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <button className="nav-cta" onClick={() => { setResumeOpen(true); closeMenu(); }}>
              View Resume <ArrowUpRight size={15} />
            </button>
          </div>

          <div className="nav-actions">
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <button
              className="theme-toggle"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> IT STUDENT · OPEN TO LEARNING OPPORTUNITIES</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>Ralph Jambert<br /><span>O. Padilla.</span></h1>
            <h2>Future IT professional<span className="accent">.</span></h2>
            <p className="hero-description">
              I’m an Information Technology student interested in IT support,
              systems administration, networking, and front-end development.
              I enjoy troubleshooting, building practical solutions, and learning
              how technology can make everyday work better.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={18} /></a>
              <a className="button button-ghost" href="#contact">Let's connect <ArrowUpRight size={17} /></a>
            </div>

            <div className="hero-meta">
              <span><MapPin size={15} /> Quezon City, Philippines</span>
              <span><GraduationCap size={16} /> BS Information Technology</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="portrait-frame">
              <div className="portrait-topline"><span>PORTFOLIO / 2026</span><span>01 — 05</span></div>
              <div className="portrait-placeholder">
                <img src={profileImage} alt="Ralph Jambert O. Padilla" />
                <p>TECH · SYSTEMS · WEB</p>
              </div>
              <div className="portrait-bottomline">
                <div><span className="mini-label">FOCUS</span><strong>IT Support & Development</strong></div>
                <div className="portrait-icon"><MonitorCog size={23} /></div>
              </div>
            </div>
            <div className="floating-card float-top"><span className="float-icon"><Wrench size={18} /></span><div><strong>Problem solver</strong><small>Curious by nature</small></div></div>
            <div className="floating-card float-bottom"><span className="float-icon purple"><Code2 size={18} /></span><div><strong>Building & learning</strong><small>One project at a time</small></div></div>
            <div className="hero-index">01 <span>/</span> INTRODUCTION</div>
          </div>
        </section>

        <div className="ticker" aria-label="Areas of interest">
          <div className="ticker-track">
            {[false, true].map((duplicate) => (
              <div className="ticker-group" key={duplicate ? "duplicate" : "original"} aria-hidden={duplicate}>
                {interests.map((item) => (
                  <span key={item}>{item}<i>✳</i></span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <section className="section container" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curious mind.<br /><span className="muted-heading">Practical mindset.</span></>} subtitle="My background, interests, and the direction I'm working toward." />
          <div className="about-grid">
            <article className="about-main panel">
              <span className="panel-number">01 / BACKGROUND</span>
              <h3>Technology is most valuable when it solves real problems.</h3>
              <p>
                I am pursuing a Bachelor of Science in Information Technology at
                STI College Fairview. My training and academic projects have helped
                me build foundational knowledge in computer hardware, network setup,
                system diagnostics, and web development.
              </p>
              <p>
                I’m looking to strengthen these skills through hands-on experience,
                collaboration, and continuous learning—especially in IT support and
                systems-related roles.
              </p>
              <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            </article>

            <article className="about-side panel">
              <span className="panel-number">02 / WHAT I VALUE</span>
              {[
                ["01", "Keep learning", "Stay curious and adapt to new tools and technologies."],
                ["02", "Solve methodically", "Break down technical issues and test solutions carefully."],
                ["03", "Work together", "Communicate clearly and contribute as part of a team."]
              ].map(([number, title, text]) => (
                <div className="value-row" key={number}>
                  <span className="value-number">{number}</span>
                  <div><h4>{title}</h4><p>{text}</p></div>
                </div>
              ))}
            </article>
          </div>
        </section>

        <section className="section section-tinted" id="skills">
          <div className="container">
            <SectionHeading eyebrow="WHAT I'M BUILDING" title={<>Skills & <span className="muted-heading">toolkit.</span></>} subtitle="A growing technical foundation across support, systems, and web development." />
            <div className="skills-grid">
              {skillGroups.map((group, i) => {
                const Icon = group.icon;
                return (
                  <article className="skill-card panel" key={group.title}>
                    <div className="skill-card-top">
                      <div className="skill-icon"><Icon size={22} /></div>
                      <span className="panel-number">0{i + 1}</span>
                    </div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                    <div className="tag-list">
                      {group.skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="soft-skills">
              <span className="soft-skills-label">HOW I WORK</span>
              <div>{["Problem-solving", "Critical thinking", "Team collaboration", "Communication", "Goal-oriented", "Willingness to learn"].map(s => <span key={s}><CheckCircle2 size={15} /> {s}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="section container training-section" id="training">
          <SectionHeading eyebrow="LEARNING & EDUCATION" title={<>Foundations for the <span className="muted-heading">future.</span></>} subtitle="Training and study that support my growing IT skill set." />
          <div className="timeline">
            {educationItems.map((item) => {
              const Icon = item.icon;
              return (
                <article className="timeline-item" key={item.title}>
                  <div className="timeline-marker"><Icon size={19} strokeWidth={1.8} /></div>
                  <div className="timeline-content panel certificate-timeline-card">
                    <div className="certificate-timeline-copy">
                      <div className="timeline-top">
                        <span className="education-category"><Icon size={13} /> {item.category}</span>
                        <span className="date-label">{item.date}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      {item.note && <span className="small-note">{item.note}</span>}
                    </div>
                    <button
                      className={`certificate-thumbnail${item.image ? "" : " certificate-thumbnail-empty"}`}
                      onClick={() => item.image && setCertificateToView(item)}
                      disabled={!item.image}
                      aria-label={item.image ? `View image: ${item.title}` : `Add an image for ${item.title}`}
                      title={item.image ? "Click to view image" : "Add an image to enable preview"}
                    >
                      <img src={item.image} alt={item.imageAlt} />
                      {item.image && <span className="certificate-thumbnail-zoom"><ExternalLink size={14} /></span>}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <SectionHeading eyebrow="SELECTED WORK" title={<>Projects with a <span className="muted-heading">purpose.</span></>} subtitle="Academic and personal projects where I put technical concepts into practice." />
            <div className="projects-grid">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article className={`project-card panel ${project.featured ? "featured-project" : ""}`} key={project.number}>
                    <div className={`project-preview${project.images.length === 0 ? " project-preview-placeholder" : ""}`}>
                      {project.images.length > 0 ? (
                        <>
                          <div
                            className="project-preview-track"
                            role="region"
                            tabIndex={0}
                            aria-label={`${project.images.length} project screenshots; scroll horizontally to see each image`}
                          >
                            {project.images.map((image) => (
                              <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
                            ))}
                          </div>
                          {project.images.length > 1 && (
                            <span className="project-preview-hint">SWIPE TO VIEW {project.images.length} IMAGES <ChevronRight size={13} /></span>
                          )}
                        </>
                      ) : (
                        <div className="project-preview-message">
                          <Icon size={28} aria-hidden="true" />
                          <span className="eyebrow">PROJECT PREVIEW</span>
                          <strong>{project.title}</strong>
                          <small>Screenshot coming soon</small>
                        </div>
                      )}
                    </div>
                    <div className="project-info">
                      <div className="project-top">
                        <div className="project-icon"><Icon size={22} /></div>
                        <span className="project-number">{project.number}</span>
                      </div>
                      <span className="eyebrow project-category">{project.category}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="tag-list project-tags">
                        {project.stack.map(item => <span className="tag" key={item}>{item}</span>)}
                      </div>
                      {project.note && <p className="project-note">{project.note}</p>}
                      <div className="project-links">
                        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={15} /></a>}
                        {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Source code <Github size={15} /></a>}
                        {project.featured && <span className="project-note-inline">Capstone project</span>}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section reflection-section">
          <div className="container reflection-grid">
            <div>
              <span className="eyebrow">LOOKING BACK, MOVING FORWARD</span>
              <h2>Every challenge is<br />a chance to <span className="muted-heading">improve.</span></h2>
            </div>
            <div className="reflection-copy">
              <p>
                My coursework and projects have taught me that technology takes more
                than writing code or following instructions. It requires patience,
                logical thinking, testing, and the willingness to keep improving.
              </p>
              <p>
                While working on responsive websites and technical exercises, I have
                learned to investigate errors, review documentation, and test possible
                solutions. I want to carry that mindset into future opportunities in
                IT support, networking, systems administration, and web development.
              </p>
              <a className="text-link" href="#contact">Let's talk about opportunities <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <span className="eyebrow">HAVE AN OPPORTUNITY?</span>
            <h2>Let's make technology<br /><span>work better.</span></h2>
            <p>I'm open to learning opportunities, collaboration, and professional growth in IT.</p>
            <a className="button button-primary contact-button" href={gmailComposeUrl} target="_blank" rel="noreferrer">
              Send me an email <ArrowUpRight size={18} />
            </a>
            <div className="contact-details">
              <a href={gmailComposeUrl} target="_blank" rel="noreferrer"><Mail size={17} /> {contactEmail}</a>
              <a href="tel:09913617699"><Phone size={17} /> 09913617699</a>
              <span><MapPin size={17} /> Quezon City, Philippines</span>
            </div>
            <div className="social-links">
              <a href="https://github.com/bilib12" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
              <a href="https://www.facebook.com/ralphjamber.ongdico" target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>Designed & built by Ralph Jambert O. Padilla</p>
          <a href="#home" className="back-top">Back to top <ChevronRight size={15} className="up-chevron" /></a>
        </div>
      </footer>

      {resumeOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setResumeOpen(false); }}>
          <div className="resume-modal" role="dialog" aria-modal="true" aria-labelledby="resume-title">
            <div className="resume-modal-header">
              <div><span className="eyebrow">DOCUMENT</span><h3 id="resume-title">My Resume</h3></div>
              <button className="icon-button" onClick={() => setResumeOpen(false)} aria-label="Close resume"><X size={21} /></button>
            </div>
            <div className="resume-modal-body">
              <p>View or download my resume.</p>
              <a className="button button-primary" href="/resume.pdf" target="_blank" rel="noreferrer">Open resume PDF <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </div>
      )}

      {certificateToView && (
        <div className="modal-backdrop certificate-modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setCertificateToView(null); }}>
          <div className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-modal-title">
            <div className="certificate-modal-header">
              <div>
                <span className="eyebrow">{certificateToView.category} · {certificateToView.date}</span>
                <h3 id="certificate-modal-title">{certificateToView.title}</h3>
              </div>
              <button className="icon-button" onClick={() => setCertificateToView(null)} aria-label="Close image preview"><X size={21} /></button>
            </div>
            <img src={certificateToView.image} alt={`${certificateToView.imageAlt} enlarged`} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
