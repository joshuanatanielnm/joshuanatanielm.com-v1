import { Box, Heading, Stack } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from "next";

import Head from 'next/head'
import { NextSeo } from "next-seo";
import React from 'react'
import TalkList from '@/components/talk-list'
import { Talks } from '@/generated/graphql'
import { cms } from "@/lib/cms";

interface TalkPageProps {
  talk: Talks[];
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await cms().talktStaticProps();
  return {
    props: {
      talk: data.talksCollection.items
    },
  };
};

const Speaks: NextPage<TalkPageProps> = ({talk}) => {

  return (
    <>
      <Head>
        <title>Speaks</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NextSeo
        openGraph={{
          title: 'Speaks',
          description: 'joshuanatanielm recent speaks in meetups and other events',
          url: 'https://personal-website-fawn-two.vercel.app/speaks',
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

      <Box fontFamily='poppins' bgGradient="linear(to-br, white, blue.100)"  borderRadius="xl" minH=''>
        <Stack p={8} spacing={6}>
          <Heading fontFamily='poppins' as='h2' size='xl'>
            All Speaks
          </Heading>
          <TalkList talks={talk}/>
        </Stack>
      </Box>
    </>
  )
}
export default Speaks
