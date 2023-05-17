import { SectionProps } from "./Section";
import Section from "./Section";

export interface ProjectsProps extends SectionProps {}

export default function Projects(props: ProjectsProps) {
  return <Section bg="#999AC6">Projects</Section>;
}
