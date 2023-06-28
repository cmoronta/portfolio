import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Home from "./components/sections/Home";
import Container from "./components/Container";
import NavBar from "./components/navbar/NavBar";
import SectionContainer from "./components/sections/SectionContainer";
import Section from "./components/sections/Section";
import "./index.css";
import React, { useState } from "react";

function App() {
  const [currentIntersectingElementIndex, setIndex] = useState<number>(-1);
  const sections: [React.ReactNode, string | null][] = [
    [<Home />, null],
    [<Experience />, "Experience"],
    [<Skills />, "Skills"],
    [<Projects />, "Projects"],
    [<Contact />, "Contact"],
  ];
  const sectionComponents = sections.map(
    (section: [React.ReactNode, string | null], index: number) => {
      return (
        <Section
          heading={section[1]}
          sectionContent={section[0]}
          sectionId={index}
          setIndex={setIndex}
          key={index}
        />
      );
    }
  );

  console.log(sectionComponents[0]);
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <SectionContainer>{sectionComponents}</SectionContainer>
        <NavBar activeIndex={currentIntersectingElementIndex} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
