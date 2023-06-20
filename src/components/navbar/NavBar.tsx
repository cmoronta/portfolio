import { Flex, BoxProps } from "@chakra-ui/react";
import MobileNav from "./MobileNav";
import DeskTopNav from "./DesktopNav";

export interface NavBarProps extends BoxProps {}

export default function NavBar(props: NavBarProps) {
	return (
		<>
			<Flex
				h={{ base: 16, md: "100vh" }}
				w={{ base: "100%", md: "10em" }}
				mt={{ base: 0, lg: 8 }}
				right={{ md: "0" }}
				bgGradient={{
					base: "linear(to-r, #f7ba2b, #f08542)",
					md: "none",
				}}
				position="fixed"
				direction={{ base: "row", xl: "column" }}
			>
				<MobileNav />
				<DeskTopNav />
			</Flex>
		</>
	);
}
