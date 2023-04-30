import { Box, BoxProps } from "@chakra-ui/react";

export interface SectionProps extends BoxProps {}

export default function Section(props: SectionProps) {
	return (
		<Box scrollSnapAlign="start" height="100vh">
			{props?.children}
		</Box>
	);
}