import {
	Box,
	Flex,
	HStack,
	ListItem,
	Stack,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import { SectionProps } from "./Section";
import Section from "./Section";

export interface ExperienceProps extends SectionProps {}

export default function Experience(props: ExperienceProps) {
	let expStrings: string[] = [
		"Developed Ansible and PowerShell scripts that improved the user experience for virtual desktop images",
		"Used Git, Jira, and BitBucket to contribute code to a 15+ person team",
		"Built out a full, cloud-based, security focused, ephemeral virtual-desktop-infrastructure (VDI) solution as part of updating documentation",
		"Developed bash scripts to automate part of the VDI build out process",
		"Contributed to infrastructure load testing for the VDI",
	];
	return (
		<Section heading={props.heading}>
			<Flex
				mt={8}
				bg="rgba( 255, 255, 255, 0.05 )"
				borderRadius="20px"
				backdropBlur="8px"
				backdropFilter="blur(3px)"
				boxShadow="lg"
				height="85%"
				alignItems="center"
				direction="column"
				p={8}
			>
				<Stack spacing={1} alignItems={{ base: "flex-start", lg: "center" }}>
					<Text
						fontWeight="bold"
						fontSize={{ base: "2xl", md: "3xl", lg: "3xl", xl: "5xl" }}
					>
						Georgia Tech Research Institute
					</Text>
					<Text fontSize={{ base: "xl", md: "2xl", lg: "2xl", xl: "3xl" }}>
						Cloud DevOps Engineer Intern (Remote)
					</Text>
					<Text fontSize={{ base: "lg", md: "xl", lg: "2xl", xl: "3xl" }}>
						May 2020 - January 2021
					</Text>
				</Stack>
				<Box w="100%" mt={8}>
					<UnorderedList spacing={4}>
						{expStrings.map((str, i) => {
							return (
								<ListItem
									key={i}
									fontSize={{ base: "md", md: "lg", lg: "2xl", xl: "3xl" }}
								>
									{str}
								</ListItem>
							);
						})}
					</UnorderedList>
				</Box>
			</Flex>
		</Section>
	);
}
