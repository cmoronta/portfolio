import { Flex, FlexProps } from "@chakra-ui/react";

export interface DesktopNavProps extends FlexProps {}
const DeskTopNav = (props: DesktopNavProps) => {
  return (
    <Flex w="100%" display={{ base: "none", md: "flex" }}>
      {props.children}
    </Flex>
  );
};

export default DeskTopNav;
