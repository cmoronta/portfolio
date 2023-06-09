import { Flex, Image, Heading, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { SectionProps } from "./Section";
import Section from "./Section";

export interface HomeProps extends SectionProps {}

export default function Home(props: HomeProps) {
	return (
		<Section heading={props.heading}>
			<Flex
				direction="column"
				height="100vh"
				alignItems="center"
				justifyContent="center"
			>
				<Flex
					direction="column"
					alignItems="center"
					justifyContent="center"
					flex="1"
				>
					<Flex
						direction={{ base: "column", lg: "row" }}
						justifyContent="center"
						alignSelf={{ base: "center", lg: "normal" }}
						p={4}
					>
						<Image
							shadow="md"
							borderRadius="full"
							boxSize="14em"
							src="photo.jpg"
							alignSelf="center"
						/>
						<Flex
							ml={{ md: 8 }}
							direction="column"
							justifyContent="center"
							alignContent="center"
							pt={{ base: 8, lg: "none" }}
						>
							<Heading size="4xl">Christian Moronta</Heading>
							<Text fontWeight="400" fontSize="2xl" mt={4}>
								Sofware Engineer based out of metro Atlanta with an interest in
								Audio Signals Processing, Web Development using React, Node,
								TypeScript, Cloud Computing, and Music{" "}
							</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex justifyContent="center">
					<ChevronDownIcon boxSize={12} mb={8} />
				</Flex>
			</Flex>
		</Section>
	);
}
