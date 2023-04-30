import { Flex, Image, Text } from "@chakra-ui/react";
import { SectionProps } from "./Section";
import Section from "./Section";

export interface HeroProps extends SectionProps {}

export default function Hero(props: HeroProps) {
  return (
    <Section>
      <Flex direction="column" height="100%">
        <Image borderRadius="full" boxSize="150px" src="public/photo.jpg" />
        <Text>CHRISTIAN MORONTA</Text>
        <Text>
          BLAH BLAH BLAH INTEREST IN REACT, TYPESCRIPT, DIGITIAL SIGNALS
          PROCESSING, and more dumbass shit
        </Text>
      </Flex>
    </Section>
  );
}
