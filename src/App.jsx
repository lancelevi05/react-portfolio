import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import "./App.css";
import profile1 from "./assets/yuan.jpg";
import profile2 from "./assets/jearwin.jpg";
import profile3 from "./assets/java.jpg";

import javaIcon from "./assets/skill-icon/java.png";
import phpIcon from "./assets/skill-icon/php.png";
import jsIcon from "./assets/skill-icon/java-script.png";
import mysqlIcon from "./assets/skill-icon/mysql.png";
import htmlIcon from "./assets/skill-icon/html.png";
import reactIcon from "./assets/skill-icon/react.svg";
import tailwindIcon from "./assets/skill-icon/tailwind-svgrepo-com.svg";




const teamMembers = [
  {
    id: "yuan-axl-alcuetas",
    name: "Yuan Axl Alcuetas",
    role: "Full-stack development/Cyber security",
    image: profile1,
    studentId: "2023-0142",
    // department: "BS Information Technology",
    education: ["Education, ACLC Ormoc",
      "Franciscan College of the Immaculate Conception (hs)",
      "Baybay Adventist Elementary School (elem)"],
    contact: ["yuanalcuetas2006@gmail.com",
      "09925240270"],
    skills: [
  { name: "Java", icon: javaIcon },
  { name: "PHP", icon: phpIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "HTML", icon: htmlIcon },
  
  { name: "React", icon: reactIcon },
  { name: "Tailwind", icon: tailwindIcon },

],
    bio: "I am a 2nd year BSIT student passionate about full-stack web development and building functional, user-friendly applications. I enjoy working on both front-end and back-end technologies to create complete web solutions. Currently, I am also pursuing cybersecurity to expand my skills in building secure and reliable systems.",
  },
  {
    id: "jearwin-bonjibon",
    name: "Jearwin Bonjibon",
    role: "UI/UX Designer",
    image: profile2,
    studentId: "2023-0088",
    //department: "BS Information Technology",
    education: "3rd Year",
    contact: "jearwin@gmail.com",
    skills: [
  { name: "Java", icon: javaIcon },
  { name: "PHP", icon: phpIcon },
  { name: "JavaScript", icon: jsIcon },





],
    bio: "Designs intuitive layouts and visual systems that keep interfaces consistent and easy to use.",
  },
  {
    id: "lance-levi-java",
    name: "Lance Levi Java",
    role: "Backend Developer",
    image: profile3,
    studentId: "09936303219",
    //department: " CS Department",
    education: ["Nasunogan Elementary School",
      "New Ormoc City National High School",
      "ACLC College of Ormoc(SHS)"
    ],
    
    contact: ["lancelevi05@mail.com"],
    skills: [
  { name: "Java", icon: javaIcon },
  { name: "PHP", icon: phpIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "React", icon: reactIcon },


 


],
    bio: "I am a 2nd-year Bachelor of Science in Information Technology (BSIT) student with a strong interest in backend development. I am currently expanding my knowledge in cybersecurity to complement my backend development skills. I am passionate about learning new technologies and continuously improving my technical abilities to build secure and efficient systems.",
  },
];

function HomePage() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-inner container">
          <h2 className="gradient-text">Alter Zero</h2>

          <div className="nav-links">
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("projects")}>Projects</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>
        </div>
      </nav>

      <section id="home" className="team-hero">
        <div>
          <h1>
            Meet Our <span className="gradient-text">Team</span>
          </h1>

          <p style={{ color: "#aaa", marginTop: "10px" }}>
            Click a member to view full profile details.
          </p>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <Link key={member.id} className="member-link" to={`/team/${member.id}`}>
                <article className="member-card">
                  <div className="profile-circle">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-name">{member.name}</div>
                  <div className="member-role">{member.role}</div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>
            About <span className="gradient-text">Us</span>
          </h2>

          <p>
            We are a team of three students who work together to build websites and applications. We combine our ideas
            and skills to create simple, useful, and creative digital projects while learning new technologies.
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2>
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="projects-grid">
            <div className="card">
              <h3>Student Violation System</h3>
              <p>
                Designed to track and manage student misconduct or rule-breaking incidents within an educational
                institution.
              </p>
            </div>

            <div className="card">
              <h3>Fitness Tracker</h3>
              <p>File reports then submit to the administrator and notify to the advisers.</p>
            </div>

            <div className="card">
              <h3>Analytics Dashboard</h3>
              <p>Real-time charts and business analytics visualization.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent successfully!");
          }}
        >
          <input className="input" type="text" placeholder="Your Name" required />

          <input className="input" type="email" placeholder="Your Email" required />

          <textarea className="input" placeholder="Your Message" required />

          <button className="btn-primary">Send Message</button>
        </form>
      </section>
    </>
  );
}

function TeamMemberPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = teamMembers.find((item) => item.id === id);

  if (!member) {
    return (
      <main className="member-page">
        <div className="member-page-card">
          <h2>Member Not Found</h2>
          <p>This profile does not exist.</p>
          <button className="btn-primary" onClick={() => navigate("/")}>Go Back Home</button>
        </div>
      </main>
    );
  }

  return (
    <main className="resume-layout">

      {/* LEFT SIDEBAR */}
      <aside className="resume-sidebar">
        <img
          src={member.image}
          alt={member.name}
          className="profile-img"
        />

        <h2>{member.name}</h2>
        <p className="sidebar-role">{member.role}</p>

        <div className="sidebar-section">
          <h3>Contact</h3>
          <ul className="education-list">
            {Array.isArray(member.contact) ? (
              member.contact.map((school, index) => (
                <li key={index}>{school}</li>
              ))
            ) : (
              <li>{member.contact}</li>
            )}
          </ul>
          
          <p>{member.department}</p>
        </div>

        <div className="sidebar-section">
  <h3>Skills</h3>

  <div className="skills-grid">
    {member.skills.map((skill, index) => (
      <div key={`${skill.name}-${index}`} className="skill-icon">
        <img src={skill.icon} alt={skill.name} />
      </div>
    ))}
  </div>

</div>
      </aside>

      {/* RIGHT CONTENT */}
      <section className="resume-content">

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>

        <header className="resume-header">
          <h1>{member.name}</h1>
          <h4>{member.role}</h4>
        </header>

        <section className="resume-section">
          <h2>About Me</h2>
          <p>{member.bio}</p>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <ul className="education-list">
            {Array.isArray(member.education) ? (
              member.education.map((school, index) => (
                <li key={index}>{school}</li>
              ))
            ) : (
              <li>{member.education}</li>
            )}
          </ul>
        </section>

      </section>

    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team/:id" element={<TeamMemberPage />} />
      </Routes>
    </BrowserRouter>
  );
}