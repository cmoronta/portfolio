import { SectionProps } from "./Section";
import Section from "./Section";

export interface HeroProps extends SectionProps {}

export default function Hero(props: HeroProps) {
  return <Section>Hero</Section>;
}
