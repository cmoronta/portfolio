import {
	Flex,
	FlexProps,
	Heading,
	Link,
	Text,
	VStack,
	Tag,
} from "@chakra-ui/react";

export interface ProjectCardProps extends FlexProps {
	title: string;
	text: string;
	tags: string;
	date: string;
	link: string;
}

export default function ProjectCard(props: ProjectCardProps) {
	let tags = props.tags.split(" / ");
	let tagComponents = tags.map((tag) => {
		return (
			<Tag color="gray.900" m={0.5} bg="#C5C6D0" width="auto">
				{tag}
			</Tag>
		);
	});
	return (
		<Flex
			bg="rgba( 255, 255, 255, 0.05 )"
			borderRadius="20px"
			backdropBlur="8px"
			backdropFilter="blur(3px)"
			boxShadow="lg"
			height="24rem"
		>
			<Link
				href={props.link}
				target="_blank"
				rel="=noopener"
				_hover={{ textDecoration: "none" }}
				w="100%"
				h="100%"
				p={4}
			>
				<VStack
					height="100%"
					direction="column"
					alignItems={"space-between"}
					spacing={4}
					justifyContent={"space-between"}
				>
					<VStack spacing={2} alignItems="flex-start">
						<Heading>{props.title}</Heading>
						<Text>{props.date}</Text>
						<Text>{props.text}</Text>
					</VStack>
					{/* <Text fontWeight="600">{props.tags}</Text> */}
					<Flex justifyContent="flex-start" direction="row" flexWrap="wrap">
						{tagComponents}
					</Flex>
				</VStack>
			</Link>
		</Flex>
	);
}
