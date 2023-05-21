import { Card, Flex, SimpleGrid } from "@chakra-ui/react";
import { SectionProps } from "./Section";
import Section from "./Section";
import ProjectCard from "../ProjectCard";

export interface ProjectsProps extends SectionProps {}

export default function Projects(props: ProjectsProps) {
  return (
    <Section heading={props.heading}>
      <SimpleGrid
        height="100%"
        p={8}
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={4}
      >
        <ProjectCard />
        <ProjectCard />

        <ProjectCard />
        <ProjectCard />

        <ProjectCard />
      </SimpleGrid>
    </Section>
  );
}
