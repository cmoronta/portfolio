import { HamburgerIcon } from "@chakra-ui/icons";
import {
	Box,
	BoxProps,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	IconButton,
	useDisclosure,
} from "@chakra-ui/react";
import NavItems from "./NavItems";

export interface MobileNavProps extends BoxProps {}

const MobileNav = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box display={{ base: "flex", lg: "none" }}>
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
		</Box>
	);
};

export default MobileNav;
