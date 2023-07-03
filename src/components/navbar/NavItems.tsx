import { BoxProps, Link, VStack, propNames } from "@chakra-ui/react";
import NavLink from "./NavLink";

export interface NavItemsProps extends BoxProps {
  activeIndex?: number;
  mapRef: React.RefObject<Map<number, HTMLDivElement>>;
}

export default function NavItems(props: NavItemsProps) {
  const links = ["Home", "Experience", "Skills", "Projects", "Contact"];
  // const scrollToSection = (id: number):void => {
  //   propNames.
  // };
  let linkComponents = links.map((link, index) => (
    <NavLink
      mapRef={props.mapRef}
      activeIndex={props.activeIndex}
      key={index}
      listIndex={index}
    >
      {link}
    </NavLink>
  ));
  return (
    <VStack
      w="100%"
      as={"nav"}
      spacing={2}
      mr={{ lg: 8 }}
      justifyContent="flex-start"
    >
      {linkComponents}
    </VStack>
  );
}
