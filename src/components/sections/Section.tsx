import { Box, BoxProps } from "@chakra-ui/react";

export interface SectionProps extends BoxProps {}

export default function Section(props: SectionProps) {
  return (
    <Box
      scrollSnapAlign={{ base: "none", md: "start" }}
      height={{ md: "100vh" }}
      pl={12}
      pr={12}
      pt={4}
      pb={4}
    >
      {props?.children}
    </Box>
  );
}
