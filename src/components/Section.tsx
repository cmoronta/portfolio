import { Box, BoxProps } from "@chakra-ui/react";

export interface SectionProps extends BoxProps {
  bg?: string;
}

export default function Section(props: SectionProps) {
  return (
    <Box
      scrollSnapAlign="start"
      height="100vh"
      bg={props?.bg ?? "rebeccapurple"}
    >
      {props?.children}
    </Box>
  );
}
