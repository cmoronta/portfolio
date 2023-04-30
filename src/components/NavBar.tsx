import { ReactNode } from "react";
import {
	Box,
	Flex,
	Avatar,
	HStack,
	Link,
	IconButton,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	Text,
	useDisclosure,
	useColorModeValue,
	Stack,
	BoxProps,
	VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "Who", "Experience", "Projects", "Contact"];

const NavLink = ({ children }: { children: ReactNode }) => (
	<Link
		px={2}
		py={1}
		rounded={"md"}
		w="100%"
		_hover={{
			textDecoration: "none",
			bg: "rgba(0, 0, 0, 0.24)"
		}}
		href={"#"}
	>
		{children}
	</Link>
);

export interface NavBarProps extends BoxProps { }

export default function NavBar(props: NavBarProps) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Flex
				h={{ base: 16, md: "100vh" }}
				w="10%"
				mt={8}
				alignItems={"flex-start"}
				justifyContent="space-between"
				right="0"
				position="fixed"
			>
				<IconButton
					size={"md"}
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					aria-label={"Open Menu"}
					display={{ md: "none" }}
					alignSelf="center"
					onClick={isOpen ? onClose : onOpen}
					bg="transparent"
				/>
				<VStack w="100%" spacing={8} alignItems={"center"}>
					<VStack w="100%" as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
						{Links.map((link) => (
							<NavLink key={link}>{link}</NavLink>
						))}
					</VStack>
				</VStack>
			</Flex>

			{isOpen ? (
				<Box pb={4} display={{ md: "none" }}>
					<Stack as={"nav"} spacing={4}>
						{Links.map((link) => (
							<NavLink key={link}>{link}</NavLink>
						))}
					</Stack>
				</Box>
			) : null}
		</>
	);
}
