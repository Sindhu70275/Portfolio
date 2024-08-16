import Stack from "@mui/material/Stack";

import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";

const Portfolio = () => {
  return (
    <Stack sx={{ paddingX: { md: "6rem" } }}>
      <Navbar />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Stack>
  );
};

export default Portfolio;
