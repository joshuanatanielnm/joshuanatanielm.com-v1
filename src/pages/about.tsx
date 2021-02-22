import { Box, Button, Divider, Heading, Link, Stack, Text, VStack } from '@chakra-ui/react';

import Head from 'next/head'
import IlusProfile from '@/components/ilus-profile'
import { NextSeo } from "next-seo";
import React from 'react'

const About:React.FC = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NextSeo
        openGraph={{
          title: 'About Me',
          description: 'Collage student that enjoy creating digital product',
          url: 'https://personal-website-fawn-two.vercel.app/about',
          images: [
            {
              url: 'https://personal-website-fawn-two.vercel.app/favicon.png',
              width: 850,
              height: 650,
              alt: 'Profile Photo',
            },
          ],
        }}
      />

      <Box fontFamily='poppins' bgGradient="linear(to-br, white, blue.100)"  borderRadius="xl" p={{base:8, md:24}} spacing={6}>
        <VStack textAlign='center' py='50px' spacing='24px'>
          <IlusProfile />
          <Heading fontFamily='poppins' as='h1' size='2xl'>
            Hello i'am Jojo. 👋
          </Heading>
          <Box fontSize={{base:'xl', md:'2xl'}} textAlign='left'>
            <Text >
              I’am a self taught Website developer based in <span style={{fontWeight:'bold'}}>Surabaya, Indonesia</span>, currently i working on my bachelor's degree in information system on <span style={{fontWeight:'bold'}}>Institut Teknologi Adhi Tama Surabaya</span> and doing some freelance projects.
            </Text>
            <Text>
              i start learning about web dev since 2018, and start with backend development using php and laravel. but for now i spend more time to explore about frontend development espicially using Reactjs.
            </Text>
          </Box>
        </VStack>
      </Box>
    </>
  )
}

export default About
