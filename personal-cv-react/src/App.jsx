import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ContactList from "./components/ContactList";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  const education = [
    {
      year: "2023",
      program: "BS Information Technology",
      school: "Your University"
    },
    {
      year: "2019",
      program: "Senior High School",
      school: "Your School"
    }
  ];

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="container">
          <About />
          <Skills skills={skills} />
          <Education education={education}/>
          <Contact />
          <ContactList />
      </main>

      <footer>
          <p>&copy; 2026 Bruce. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;