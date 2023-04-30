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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "Who", "Experience", "Projects", "Contact"];

const NavLink = ({ children }: { children: ReactNode }) => (
	<Link
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700"),
		}}
		href={"#"}
	>
		{children}
	</Link>
);

export interface NavBarProps extends BoxProps {}

export default function NavBar(props: NavBarProps) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Flex
				h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				width={{ base: "100vw", md: "100vw" }}
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
				<HStack spacing={8} alignItems={"center"}>
					<HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
						{Links.map((link) => (
							<NavLink key={link}>{link}</NavLink>
						))}
					</HStack>
				</HStack>
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
