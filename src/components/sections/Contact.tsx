import { SimpleGrid } from "@chakra-ui/react";
import { SectionProps } from "./Section";
import Section from "./Section";
import ContactForm from "./../ContactForm";
import Map from "../Map";

export interface ContactProps extends SectionProps {}

export default function Contact(props: ContactProps) {
	return (
		<Section heading={props.heading}>
			<SimpleGrid p={8} columns={[1, 2]} minHeight={72} gap={4}>
				<ContactForm />
				<Map />
			</SimpleGrid>
		</Section>
	);
}
