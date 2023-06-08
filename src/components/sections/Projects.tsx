import { Card, Flex, SimpleGrid } from "@chakra-ui/react";
import { SectionProps } from "./Section";
import Section from "./Section";
import ProjectCard from "../ProjectCard";

export interface ProjectsProps extends SectionProps {}

export default function Projects(props: ProjectsProps) {
	let projects = [
		{
			title: "Wave",
			text: "Open source Electron based desktop application used to help the process of transcribing music by ear for learning songs on aninstrument.",
			tags: "React / Electron / ChakraUI / React-Router-Dom / Formik / YouTube Player API / WaveSurfer.js.",
			date: "2023",
			link: "https://github.com/cmoronta/wave-electron",
		},
		{
			title: "ytmp3",
			text: "CLI script implemented using Node.js, yargs, fluent-ffmpeg, and ytdl-core that takes a YouTube video URL or ID as an argument and downloads it as an .mp3 to the Downloads folder. Option to convert to .aiff and/or to split the song by instrument using the demucs ML model",
			tags: "Node / yargs / fluent-ffmpeg / ytdl-cores",
			date: "2022",
			link: "https://github.com/cmoronta/ytmp3",
		},
		{
			title: "CSV to Calendar Events Script",
			text: "Used Python and the Google's calendar API to generate calendar events from a CSV file to organize when social media content is to be posted for my band.",
			tags: "Python / Google Calendar API",
			date: "2023",
			link: "https://github.com/cmoronta/scripts",
		},
		{
			title: "Discord Bot",
			text: 'Discord Bot that DMs a user when a new "free tickets to xyz" post on the Atlanta subreddit is posted.',
			tags: "Python / Discord API / Reddit API",
			date: "2023",
			link: "https://github.com/cmoronta/ticket_bot",
		},
	];

	projects = projects.sort((a, b) => {
		return parseInt(a.date) - parseInt(b.date);
	});

	let projectCards = projects.map((project, i) => {
		return (
			<ProjectCard
				title={project.title}
				date={project.date}
				text={project.text}
				tags={project.tags}
				link={project.link}
				key={i}
			/>
		);
	});
	return (
		<Section heading={props.heading}>
			<SimpleGrid
				height="100%"
				p={8}
				columns={{ base: 1, md: 2, lg: 3 }}
				spacing={4}
			>
				{projectCards}
			</SimpleGrid>
		</Section>
	);
}
