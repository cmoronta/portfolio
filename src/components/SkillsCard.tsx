import { GridItem, Flex, Text, Box, HStack, Heading } from "@chakra-ui/react";
import { BoxProps } from "@chakra-ui/react";

export interface SkillCardsProps extends BoxProps {
  title: string;
  content: string;
}

export default function SkillsCard(props: SkillCardsProps) {
  return (
    <>
      <Box
        p={6}
        bg="rgba( 255, 255, 255, 0.05 )"
        borderRadius="20px"
        backdropBlur="8px"
        backdropFilter="blur(3px)"
        boxShadow="lg"
        w="100%"
      >
        <Flex justifyContent="center" alignItems="center">
          <Flex flexGrow="10">
            <Box width="100%" ml={2}>
              <Heading>{props.title}</Heading>
              <Text fontSize="xl" mt={4}>
                {props.content}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
