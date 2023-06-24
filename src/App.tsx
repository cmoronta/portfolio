import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Home from "./components/sections/Home";
import Container from "./components/Container";
import NavBar from "./components/navbar/NavBar";
import SectionContainer from "./components/sections/SectionContainer";
import "./index.css";
import { useRef } from "react";
import useScrollspy from "./hooks/useScrollSpy";

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentActiveIndex] = useScrollspy(containerRef, {
    root: containerRef,
  });
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <SectionContainer>
          <div ref={containerRef}>
            <Home heading={null} />
            <Experience heading="Experience" />
            <Skills heading="Skills" />
            <Projects heading="Projects" />
            <Contact heading="Contact Me" />
          </div>
        </SectionContainer>
        <NavBar activeIndex={currentActiveIndex} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
