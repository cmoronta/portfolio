import { Box } from "@chakra-ui/react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Who from "./components/Who";
import Container from "./components/Container";
import NavBar from "./components/NavBar";
import "./index.css";

function App() {
	return (
		<Container>
			<Box justifySelf="flex-start" width="100%" mr={140}>
				<Hero />
				<Who />
				<Experience />
				<Projects />
				<Contact />
			</Box>
			<NavBar />
		</Container>
	);
}

export default App;
