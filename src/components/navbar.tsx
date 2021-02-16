import * as React from "react";

import { Container, Divider, HStack, Link, Spacer, Stack, } from "@chakra-ui/react";

import NextLink from "next/link";

const Navbar:React.FC = () => {
  return (
    <Stack>
      <HStack as="nav" fontSize="lg" p={4} spacing={0}>
        <NextLink href="/">
          <Link fontWeight='bold'>
          Joshuanatanielm
        </Link>
      </NextLink>
      <Spacer/>
        <HStack d={{ base: "none", md: "flex" }} spacing='20px'>
          <NextLink href="/about">
            <Link>
              About
            </Link>
          </NextLink>
          <NextLink href="/project">
            <Link>
              Project
            </Link>
          </NextLink>
          <NextLink href="/talks">
            <Link>
              Talks
            </Link>
          </NextLink>
          <NextLink href="/blog">
            <Link>
              Blog
            </Link>
          </NextLink>
        </HStack>
      </HStack>
      <Divider />
    </Stack>
  )
}

export default Navbar;
