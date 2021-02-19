import { Box, Button, Divider, Heading, Link, Stack, Text, VStack } from '@chakra-ui/react';

import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box fontFamily='poppins' bgGradient="linear(to-br, white, blue.100)"  borderRadius="xl" p={{base:8, md:24}} spacing={6}>
        <VStack textAlign='center' py='50px' spacing='24px'>
          <Image src="/profileilus.png" alt="me" width="200" height="200" />
          <Heading fontFamily='poppins' as='h1' size='2xl'>
            Hello i'am Jojo. 👋
          </Heading>
          <Box fontSize={{base:'xl', md:'2xl'}} textAlign='left'>
            <Text >
              I’am a self taught Website developer based in Surabaya, Indonesia, currently i working on my bachelor's degree in information system on Institut Teknologi Adhi Tama Surabaya and doing some freelance projects.
            </Text>
            <Text>
              i start learning about web dev since 2018, and start with backend development using php and laravel. but for now i’am more interest to explore about frontend development espicially using Reactjs.
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  )
}

export default About
