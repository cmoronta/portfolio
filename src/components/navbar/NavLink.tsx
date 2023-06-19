import { BoxProps, FlexProps, Link, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface NavLinkProps extends FlexProps {}
const NavLink = ({
	children,
	props,
}: {
	children: ReactNode;
	props?: NavLinkProps;
}) => (
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
		display={{ base: "none", lg: "flex" }}
	>
		{children}
	</Link>
);

export default NavLink;
