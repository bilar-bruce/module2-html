import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
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
      {/* 1. We pass the state and the function DOWN to the Header */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* 2. This container brings back the 800px width limit */}
      <main className="container">
          <About />
          <Skills skills = {skills} />
          <Education education = {education}/>
          <Contact />
      </main>

      <footer>
          <p>&copy; 2026 Bruce. All rights reserved.</p>
      </footer>
    </>
  );
}


export default App;