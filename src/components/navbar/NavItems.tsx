import { BoxProps, Link, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import NavLink from "./NavLink";

export interface NavItemsProps extends BoxProps {
  activeIndex?: number;
}

export default function NavItems(props: NavItemsProps) {
  const links = ["Home", "Experience", "Skills", "Projects", "Contact"];
  let linkComponents = links.map((link, index) => (
    <NavLink activeIndex={props.activeIndex} key={index} listIndex={index}>
      {link}
    </NavLink>
  ));
  return (
    <VStack w="100%" as={"nav"} spacing={2} mr={{ lg: 8 }}>
      {linkComponents}
    </VStack>
  );
}
