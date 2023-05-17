import { Heading, SimpleGrid } from "@chakra-ui/react";
import { SectionProps } from "./Section";
import Section from "./Section";
import SkillsCard from "../SkillsCard";
import { SkillCardsProps } from "../SkillsCard";
export interface SkillsProps extends SectionProps {}

export default function Skills(props: SkillsProps) {
  let cardData = [
    {
      title: "Tools & Tech",
      content:
        "React / Chakra-UI / Next / Node / Linux / WSL2.0 / MongoDB / SQL / SQLite / Ansible / Jira / Git / GitHub / BitBucket",
    },
    {
      title: "Cloud",
      content: "AWS S3 / AWS EC2 / AWS VPC / Azure Virtual Machines",
    },
    {
      title: "Languages",
      content:
        "Bash / Python / JavaScript / Java / PowerShell / HTML / CSS / JSX / C / TypeScript",
    },
    {
      title: "Personal",
      content:
        "People Skills / Communication Skills / Collaborative /  Spanish Speaker / Drums / Bass / Guitar / Piano",
    },
  ];
  let cards = cardData.map((data: SkillCardsProps) => {
    return <SkillsCard title={data.title} content={data.content} />;
  });

  return (
    <Section>
      <Heading fontSize="6xl">Skills</Heading>
      <SimpleGrid padding={8} spacing={4} columns={[1, null, 2, null, 1]}>
        {cards}
      </SimpleGrid>
    </Section>
  );
}
