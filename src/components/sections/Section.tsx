import { Box, BoxProps, Heading } from "@chakra-ui/react";

export interface SectionProps extends BoxProps {
  heading: null | string;
}

export default function Section(props: SectionProps) {
  return (
    <Box
      scrollSnapAlign={{ base: "none", md: "start" }}
      height={{ md: "100vh" }}
      p={4}
    >
      <Heading ml={8} fontSize={["2xl", "3xl", "4xl", "5xl", "6xl"]}>
        {props.heading}
      </Heading>
      {props?.children}
    </Box>
  );
}
