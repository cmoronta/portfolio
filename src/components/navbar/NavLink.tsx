import { BoxProps, Link } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface NavLinkProps extends BoxProps {
  activeIndex?: number;
  listIndex: number;
  children?: ReactNode;
}
const NavLink = (props: NavLinkProps) => {
  return (
    <Link
      px={1}
      py={2}
      rounded={"md"}
      w="100%"
      mr={{ base: 2, md: "none" }}
      fontSize="xl"
      _hover={{
        textDecoration: "none",
        bg: "rgba(0, 0, 0, 0.24)",
      }}
      href={"#"}
      background={
        props.listIndex === props.activeIndex ? "rgba(0, 0, 0, 0.24)" : "none"
      }
    >
      {props.children}
    </Link>
  );
};

export default NavLink;
