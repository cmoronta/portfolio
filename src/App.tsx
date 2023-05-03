import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Who from "./components/Who";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import SectionContainer from "./components/SectionContainer";
import "./index.css";

function App() {
	return (
		<ChakraProvider theme={theme}>
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
		</ChakraProvider>
	);
}

export default App;
