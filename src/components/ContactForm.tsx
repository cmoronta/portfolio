import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";

export interface ContactFormProps extends BoxProps {}

export default function ContactForm(props: ContactFormProps) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      text: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex h="100%" justifyContent="center">
        <VStack
          height="100%"
          justifyContent="center"
          alignItems="flex-start"
          spacing={4}
          width={{ base: "100%", lg: "80%" }}
          pl={{ xl: 16 }}
          pr={{ xl: 16 }}
        >
          <Heading size={{ base: "xl", lg: "2xl" }}>Send me an email!</Heading>
          <Input
            placeholder="Name"
            variant="filled"
            type="text"
            name="name"
            id="name"
            p={2}
            _focus={{ background: "white" }}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <Input
            _focus={{ background: "white" }}
            p={2}
            type="email"
            name="email"
            id="email"
            variant="filled"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Textarea
            p={2}
            variant="filled"
            placeholder="Write Your Message"
            height={64}
            name="text"
            id="text"
            _focus={{
              background: "white",
            }}
            resize="none"
            onChange={formik.handleChange}
            value={formik.values.text}
          />
          <Button type="submit" width="100%" bg="orange.300">
            Submit
          </Button>
        </VStack>
      </Flex>
    </form>
  );
}
