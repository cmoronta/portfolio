import {
	Flex,
	BoxProps,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Drawer,
	useDisclosure,
	DrawerBody,
	IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavItems from "./NavItems";

export interface NavBarProps extends BoxProps {}

export default function NavBar(props: NavBarProps) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Flex
				h={{ base: 16, md: "100vh" }}
				w={{ base: "100%", md: "10em" }}
				mt={{ base: 0, lg: 8 }}
				right={{ lg: "0" }}
				bgGradient={{
					base: "linear(to-r, #f7ba2b, #f08542)",
					lg: "none",
				}}
				position="fixed"
				direction={{ base: "row", xl: "column" }}
			>
				<IconButton
					alignSelf={"center"}
					size={"md"}
					ml={2}
					_hover={{
						bg: "blackAlpha.300",
					}}
					icon={<HamburgerIcon bg="transparent" />}
					aria-label={"Open Menu"}
					display={{ md: "none" }}
					onClick={isOpen ? onClose : onOpen}
					bg="transparent"
				/>
				<Drawer
					closeOnEsc
					placement="left"
					size="xs"
					isOpen={isOpen}
					onClose={onClose}
				>
					<DrawerOverlay />
					<DrawerContent bg="gray.700">
						<DrawerCloseButton color="white" />
						<DrawerBody color="white" mt={12}>
							<NavItems />
						</DrawerBody>
					</DrawerContent>
				</Drawer>
				<NavItems />
			</Flex>
		</>
	);
}
