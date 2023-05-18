import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Home from "./components/sections/Home";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import SectionContainer from "./components/sections/SectionContainer";
import "./index.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <SectionContainer>
          <Home heading={null} />
          <Experience heading="Experience" />
          <Skills heading="Skills" />
          <Projects heading="Projects" />
          <Contact heading="Contact" />
        </SectionContainer>
        <NavBar />
      </Container>
    </ChakraProvider>
  );
}

export default App;
