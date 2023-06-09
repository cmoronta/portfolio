import { Grid } from "@chakra-ui/react";
import { SectionProps } from "./Section";
import Section from "./Section";
import ContactForm from "./../ContactForm";

export interface ContactProps extends SectionProps {}

export default function Contact(props: ContactProps) {
	return (
		<Section heading={props.heading}>
			<Grid p={8} templateColumns="repeat(2, 1fr)" gap={4}>
				<ContactForm />
			</Grid>
		</Section>
	);
}
