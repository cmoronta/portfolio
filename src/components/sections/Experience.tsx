import { SectionProps } from "./Section";
import Section from "./Section";

export interface ExperienceProps extends SectionProps {}

export default function Experience(props: ExperienceProps) {
  return <Section heading={props.heading}></Section>;
}
