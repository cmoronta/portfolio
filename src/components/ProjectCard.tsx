import { Flex, FlexProps, Link, Text } from "@chakra-ui/react";

export interface ProjectCardProps extends FlexProps {}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Flex
      bg="rgba( 255, 255, 255, 0.05 )"
      borderRadius="20px"
      backdropBlur="8px"
      backdropFilter="blur(3px)"
      boxShadow="lg"
      height="90%"
      p={4}
    >
      <Link _hover={{ textDecoration: "none" }} w="100%" h="100%">
        <Flex>
          <Text>Test</Text>
        </Flex>
      </Link>
    </Flex>
  );
}
