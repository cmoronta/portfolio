import { useState } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Who from "./components/Who";
import Container from "./components/Container";
import "./index.css";

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Experience />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
