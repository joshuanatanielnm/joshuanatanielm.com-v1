import { Box, Flex, HStack, Heading, Link, Spacer, Stack, VStack } from "@chakra-ui/react";

import NextLink from "next/link";
import React from 'react'

const Footer:React.FC  = () => {
  return (
    <Stack as='footer' py='20px'>
      <Flex direction={{base:'column-reverse', md:'row'}}>
        <VStack align='left'>
          <Box>
            Create this website with using
          </Box>
          <Box fontWeight='bold'>
            Contentful, Nextjs, <span style={{fontWeight: 'normal'}}>and</span> Chakra ui
          </Box>
          <Spacer/>
          <Box fontWeight='bold'>
            <span style={{fontWeight: 'normal'}}>Created by </span>Joshua Nathaniel M
          </Box>
        </VStack>
        <Spacer/>
        <HStack spacing="24px" pb={{base:'30px', md:0}}>
          <VStack alignItems={{base:'flex-start', md:'flex-end'}}>
            <Heading size='md' as='h5'>Socials</Heading>
            <Link href="https://github.com/joshuanatanielnm" isExternal>
              Github
            </Link>
            <Link href='https://twitter.com/joshuanatanielm' isExternal>
              Twitter
            </Link>
            <Link href='https://www.linkedin.com/in/joshua-manuputty-8a22ba186/' isExternal>
              LinkedIn
            </Link>
          </VStack>

          <VStack alignItems={{base:'flex-start', md:'flex-end'}}>
            <Heading size='md' as='h5'>Links</Heading>
            <NextLink href="/about">
              <Link>
                About
              </Link>
            </NextLink>
            <NextLink href="/projects">
              <Link>
                Projects
              </Link>
            </NextLink>
            <NextLink href="/speaks">
              <Link>
                Speaks
              </Link>
            </NextLink>
          </VStack>
        </HStack>
      </Flex>
    </Stack>
  )
}

export default Footer;
