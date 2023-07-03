import { BoxProps, Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface NavLinkProps extends ButtonProps {
  activeIndex?: number;
  listIndex: number;
  mapRef: React.RefObject<Map<number, HTMLDivElement>>;
  children?: ReactNode;
}

const NavLink = (props: NavLinkProps) => {
  const handleClick = () => {
    const node = props.mapRef.current?.get(props.listIndex);
    node?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <Button
      px={1}
      py={6}
      rounded={"md"}
      onClick={handleClick}
      w="100%"
      mr={{ base: 2, md: "none" }}
      fontSize={{ base: "lg", lg: "xl", xl: "2xl" }}
      _hover={{
        textDecoration: "none",
        bg: "rgba(0, 0, 0, 0.24)",
      }}
      fontWeight="normal"
      background={
        props.listIndex === props.activeIndex ? "rgba(0, 0, 0, 0.24)" : "none"
      }
    >
      {props.children}
    </Button>
  );
};

export default NavLink;
