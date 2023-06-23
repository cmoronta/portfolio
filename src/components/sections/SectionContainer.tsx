import { Box } from "@chakra-ui/react";
import { BoxProps } from "@chakra-ui/react";

export interface SectionContainerProps extends BoxProps {}

export default function SectionContainer(props: SectionContainerProps) {
  return (
    <Box
      justifySelf="flex-start"
      width="100%"
      h="100%"
      mr={"8em"}
      overflowY="auto"
      scrollSnapType={{ xl: "y mandatory" }}
    >
      {props?.children}
    </Box>
  );
}
