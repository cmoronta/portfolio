import {
	BoxProps,
	Button,
	Heading,
	Input,
	Textarea,
	VStack,
} from "@chakra-ui/react";

export interface ContactFormProps extends BoxProps {}

export default function ContactForm(props: ContactFormProps) {
	return (
		<VStack alignItems="flex-start" spacing={4}>
			<Heading fontSize="3xl">Contact Me</Heading>
			<Input
				_focus={{ background: "white" }}
				p={2}
				type="text"
				variant="filled"
				placeholder="Name"
			/>
			<Input
				_focus={{ background: "white" }}
				p={2}
				type="email"
				variant="filled"
				placeholder="Email"
			/>
			<Textarea
				p={2}
				variant="filled"
				placeholder="Write Your Message"
				justifyContent="flex-start"
				height={64}
				_focus={{
					background: "white",
				}}
				resize="none"
			/>
			<Button width="100%" bg="orange.300">
				Send
			</Button>
		</VStack>
	);
}
