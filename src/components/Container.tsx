import { Box } from "@chakra-ui/react";
import { BoxProps } from "@chakra-ui/react";

export interface ContainerProps extends BoxProps {}

export default function Container(props: ContainerProps) {
	return (
		<Box
			height="100%"
			bgGradient="linear(135deg, hsla(42, 93%, 57%, 1) 0%, hsla(23, 85%, 60%, 1) 52%, hsla(358, 78%, 62%, 1) 100%)"
		>
			{props?.children}
		</Box>
	);
}
