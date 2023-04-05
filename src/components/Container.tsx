import { Box } from "@chakra-ui/react";
import { BoxProps } from "@chakra-ui/react";

export interface ContainerProps extends BoxProps {}

export default function Container(props: ContainerProps) {
	return (
		<Box
			height="100vh"
			scrollSnapType="y mandatory"
			overflowY="auto"
			scrollSnapAlign="start"
			bgGradient="linear(135deg, hsla(42, 93%, 57%, 1) 0%, hsla(23, 85%, 60%, 1) 52%, hsla(358, 78%, 62%, 1) 100%)"
		>
			{props?.children}
		</Box>
	);
}

// background: hsla(42, 93%, 57%, 1);

// background: linear-gradient(135deg, hsla(42, 93%, 57%, 1) 0%, hsla(23, 85%, 60%, 1) 52%, hsla(358, 78%, 62%, 1) 100%);

// background: -moz-linear-gradient(135deg, hsla(42, 93%, 57%, 1) 0%, hsla(23, 85%, 60%, 1) 52%, hsla(358, 78%, 62%, 1) 100%);

// background: -webkit-linear-gradient(135deg, hsla(42, 93%, 57%, 1) 0%, hsla(23, 85%, 60%, 1) 52%, hsla(358, 78%, 62%, 1) 100%);

// filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#F7BA2C", endColorstr="#F08543", GradientType=1 );
