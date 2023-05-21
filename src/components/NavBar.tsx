import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  useDisclosure,
  useColorModeValue,
  Stack,
  BoxProps,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "Experience", "Skills", "Projects", "Contact"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={1}
    py={2}
    rounded={"md"}
    w="100%"
    fontSize="xl"
    _hover={{
      textDecoration: "none",
      bg: "rgba(0, 0, 0, 0.24)",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export interface NavBarProps extends BoxProps {}

export default function NavBar(props: NavBarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        h={{ base: 16, md: "100vh" }}
        w={{ base: "100%", md: "10em" }}
        mt={{ base: 2, lg: 8 }}
        right={{ md: "0" }}
        position="fixed"
        justifyContent="flex-end"
        direction={{ base: "row", md: "column" }}
      >
        <IconButton
          size={"md"}
          icon={
            isOpen ? (
              <CloseIcon bg="transparent" />
            ) : (
              <HamburgerIcon bg="transparent" />
            )
          }
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          bg="transparent"
        />
        <VStack w="100%" spacing={8} alignItems={"center"}>
          <VStack
            w="100%"
            as={"nav"}
            spacing={4}
            mr={{ md: 8 }}
            display={{ base: "none", md: "flex" }}
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </VStack>
        </VStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  );
}
