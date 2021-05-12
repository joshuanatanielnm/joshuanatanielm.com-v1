import * as React from "react";

import {
  Container,
  Divider,
  HStack,
  Link,
  Spacer,
  Stack,
} from "@chakra-ui/react";

import NextLink from "next/link";

const Navbar: React.FC = () => {
  return (
    <Stack>
      <HStack as="nav" fontSize="lg" py={4} spacing={0}>
        <NextLink href="/">
          <Link fontWeight="bold">Joshuanatanielm</Link>
        </NextLink>
        <Spacer />
        <HStack d={{ base: "none", md: "flex" }} spacing="20px">
          <NextLink href="/about">
            <Link>About</Link>
          </NextLink>
          <NextLink href="/projects">
            <Link>Projects</Link>
          </NextLink>
          <NextLink href="/speaks">
            <Link>Speaks</Link>
          </NextLink>
        </HStack>
      </HStack>
      <Divider />
    </Stack>
  );
};

export default Navbar;
