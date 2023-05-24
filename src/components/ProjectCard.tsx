import { Flex, FlexProps, Heading, Link, Text, VStack } from "@chakra-ui/react";

export interface ProjectCardProps extends FlexProps {
  // title: string;
  // description: string;
  // tags: string;
}

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
      <Link
        href="https:/google.com"
        target="_blank"
        rel="noreferrer noopener"
        _hover={{ textDecoration: "none" }}
        w="100%"
        h="100%"
      >
        <VStack direction="column" alignItems="flex-start">
          <Heading>Project Title</Heading>
          <Text>This is a test</Text>
          <Text>Tags</Text>
        </VStack>
      </Link>
    </Flex>
  );
}
