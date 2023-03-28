import { SectionProps } from "./Section";
import Section from "./Section";

export interface WhoProps extends SectionProps {}

export default function Who(props: WhoProps) {
  return <Section bg="#FCD0A1">Who</Section>;
}
