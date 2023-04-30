import { Box } from "@chakra-ui/react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Who from "./components/Who";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import "./index.css";
import SectionContainer from "./components/SectionContainer";

function App() {
  return (
    <Container>
      <SectionContainer>
        <Hero />
        <Who />
        <Experience />
        <Projects />
        <Contact />
      </SectionContainer>
      <NavBar />
    </Container>
  );
}

export default App;
