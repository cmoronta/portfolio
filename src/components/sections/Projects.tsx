import { SectionProps } from "./Section";
import Section from "./Section";

export interface ProjectsProps extends SectionProps {}

export default function Projects(props: ProjectsProps) {
  return <Section heading={props.heading}></Section>;
}
