import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import ProjectCard from "../ProjectCard";

export interface ProjectsProps extends SimpleGridProps {}

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
      text: "CLI script that takes a YouTube video URL or ID as an argument and downloads it as an .mp3 to the specified folder. Option to convert to .aiff and/or to split the song by instrument using the demucs ML model",
      tags: "Node / yargs / fluent-ffmpeg / ytdl-core",
      date: "2022",
      link: "https://github.com/cmoronta/ytmp3",
    },
    {
      title: "Google Calendar Scripts",
      text: "Used Python and Google's calendar API to generate calendar events from a CSV file to organize when social media content is to be posted for my band.",
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
    {
      title: "This website!",
      text: "This is my portfolio site.",
      tags: "React / TypeScript / ChakraUI / Framer Motion / React Three Fiber / MongoDB",
      date: "2023",
      link: "https://github.com/cmoronta/portfolio",
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
    <SimpleGrid
      height="100%"
      p={8}
      columns={{ base: 1, md: 2, xl: 3 }}
      spacing={4}
    >
      {projectCards}
    </SimpleGrid>
  );
}
