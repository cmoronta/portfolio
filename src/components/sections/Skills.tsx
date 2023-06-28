import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import SkillsCard from "../SkillsCard";
import { SkillCardsProps } from "../SkillsCard";
export interface SkillsProps extends SimpleGridProps {}

export default function Skills(props: SkillsProps) {
  let cardData = [
    {
      title: "Tools & Tech",
      content:
        "React / Chakra-UI / Next / Node / Linux / WSL2.0 / MongoDB / SQL / SQLite / Ansible / Jira / Git / GitHub / BitBucket",
      model: "/models/Wrench.glb",
      scale: 20,
    },
    {
      title: "Cloud",
      content: "AWS S3 / AWS EC2 / AWS VPC / Azure Virtual Machines",
      model: "/models/Cloud.glb",
      scale: 0.01,
    },
    {
      title: "Languages",
      content:
        "Bash / Python / JavaScript / Java / PowerShell / HTML / CSS / JSX / C / TypeScript",
      model: "/models/MacBook Pro.glb",
      scale: 1.7,
    },
    {
      title: "Personal",
      content:
        "People Skills / Communication Skills / Collaborative /  Spanish Speaker / Drums / Bass / Guitar / Piano",
      model: "/models/Guitar Amp.glb",
      scale: 0.01,
    },
  ];
  let cards = cardData.map((data: SkillCardsProps) => {
    return (
      <SkillsCard
        scale={data.scale}
        model={data.model}
        key={data.title}
        title={data.title}
        content={data.content}
      />
    );
  });

  return (
    <SimpleGrid p={8} spacing={4} columns={[1, null, 2, null, null, 2]}>
      {cards}
    </SimpleGrid>
  );
}
