import { SectionProps } from "./Section";
import Section from "./Section";

export interface ContactProps extends SectionProps {}

export default function Contact(props: ContactProps) {
  return <Section bg="#E71D36">Contact</Section>;
}
