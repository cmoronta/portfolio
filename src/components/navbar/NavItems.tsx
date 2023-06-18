import { BoxProps, Link, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

const NavLink = ({ children }: { children: ReactNode }) => (
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
	>
		{children}
	</Link>
);

export default function NavItems(props: BoxProps) {
	const links = ["Home", "Experience", "Skills", "Projects", "Contact"];

	return (
		<VStack w="100%" spacing={8} alignItems={"center"}>
			<VStack
				w="100%"
				as={"nav"}
				spacing={4}
				mr={{ md: 8 }}
				display={{ base: "none", md: "flex" }}
			>
				{links.map((link) => (
					<NavLink key={link}>{link}</NavLink>
				))}
			</VStack>
		</VStack>
	);
}
