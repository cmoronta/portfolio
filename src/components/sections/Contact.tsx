import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import ContactForm from "./../ContactForm";
import Map from "../Map";

export interface ContactProps extends SimpleGridProps {}

export default function Contact(props: ContactProps) {
  return (
    <SimpleGrid height="100%" p={8} columns={[1, 2]} minHeight={72} gap={4}>
      <ContactForm />
      <Map />
    </SimpleGrid>
  );
}
