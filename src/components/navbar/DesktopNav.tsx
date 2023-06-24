import { Box, BoxProps } from "@chakra-ui/react";

export interface DesktopNavProps extends BoxProps {}
const DeskTopNav = (props: DesktopNavProps) => {
  return <Box display={{ base: "none", md: "flex" }}>{props.children}</Box>;
};

export default DeskTopNav;
