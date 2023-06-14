import { Box, Flex } from "@chakra-ui/react";
import { BoxProps } from "@chakra-ui/react";

export interface ContainerProps extends BoxProps {}

export default function Container(props: ContainerProps) {
	return (
		<Box
			height="100vh"
			width="100%"
			bgGradient="linear(135deg, hsla(42, 93%, 57%, 1) 0%, hsla(23, 85%, 60%, 1) 52%, hsla(358, 78%, 62%, 1) 100%)"
		>
			<Flex
				width="100%"
				height="100%"
				direction={{ base: "column", md: "row" }}
				justifyContent="space-between"
			>
				{props?.children}
			</Flex>
		</Box>
	);
}
