import {
  Box,
  BoxProps,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";

export interface ContactFormProps extends BoxProps {}

export default function ContactForm(props: ContactFormProps) {
  const validateName = (value: string) => {
    let error;

    if (!value) {
      error = "Name is required.";
    }

    return error;
  };

  const validateEmail = (value: string) => {
    let error;

    if (!value) {
      let error = "Email is required.";
    }
    return error;
  };

  const validateMessage = (value: string) => {
    let error;

    if (!value) {
      error = "Message is required";
    } else if (value.length < 40) {
      error = "Message is too short.";
    }
    return error;
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
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
              <Heading size={{ base: "xl", lg: "2xl" }}>
                Send me an email!
              </Heading>
              <FormControl isInvalid={!!errors.name && touched.name}>
                <Field
                  as={Input}
                  placeholder="Name"
                  variant="filled"
                  type="text"
                  name="name"
                  id="name"
                  validate={validateName}
                  p={2}
                  _focus={{ background: "white" }}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email && touched.email}>
                <Field
                  as={Input}
                  _focus={{ background: "white" }}
                  p={2}
                  type="email"
                  name="email"
                  id="email"
                  variant="filled"
                  validate={validateEmail}
                  placeholder="Email"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.message && touched.message}>
                <Field
                  as={Textarea}
                  p={2}
                  validate={validateMessage}
                  variant="filled"
                  placeholder="Write Your Message"
                  height={64}
                  name="message"
                  id="message"
                  _focus={{
                    background: "white",
                  }}
                  resize="none"
                />
                <FormErrorMessage>{errors.message}</FormErrorMessage>
              </FormControl>
              <Button type="submit" width="100%" bg="orange.300">
                Submit
              </Button>
            </VStack>
          </Flex>
        </form>
      )}
    </Formik>
  );
}
