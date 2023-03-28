import { Flex } from "@chakra-ui/react";
import { FlexProps } from "@chakra-ui/react";

export interface ContainerProps extends FlexProps {}

export default function Container(props: ContainerProps) {
  return <Flex direction="column">{props?.children}</Flex>;
}
