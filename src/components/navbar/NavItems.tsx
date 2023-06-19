import { BoxProps, Link, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import NavLink from "./NavLink";

export interface NavItemsProps extends BoxProps {}

export default function NavItems(props: NavItemsProps) {
	const links = ["Home", "Experience", "Skills", "Projects", "Contact"];

	return (
		<VStack w="100%" as={"nav"} spacing={2} mr={{ md: 8 }}>
			{links.map((link) => (
				<NavLink key={link}>{link}</NavLink>
			))}
		</VStack>
	);
}
