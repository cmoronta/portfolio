import { useState } from "react";
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
		<>
			<NavBar />
			<Container as="main" marginTop={16}>
				<Hero />
				<Who />
				<Experience />
				<Projects />
				<Contact />
			</Container>
		</>
	);
}

export default App;
