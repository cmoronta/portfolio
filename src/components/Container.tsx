import { Box } from "@chakra-ui/react";
import { BoxProps } from "@chakra-ui/react";

export interface ContainerProps extends BoxProps {}

export default function Container(props: ContainerProps) {
  return (
    <Box
      height="100vh"
      scrollSnapType="y mandatory"
      overflowY="auto"
      scrollSnapAlign="start"
    >
      {props?.children}
    </Box>
  );
}
