import { Box } from "@chakra-ui/react";
import NavItems from "./NavItems";

const DeskTopNav = () => {
	return (
		<Box display={{ base: "none", lg: "flex" }}>
			<NavItems />
		</Box>
	);
};

export default DeskTopNav;
