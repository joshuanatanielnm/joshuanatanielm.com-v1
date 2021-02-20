import { Box, Heading, Stack, VStack } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from "next";

import Head from 'next/head'
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

const Talk: NextPage<TalkPageProps> = ({talk}) => {

  return (
    <>
      <Head>
        <title>Talks</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box fontFamily='poppins' bgGradient="linear(to-br, white, blue.100)"  borderRadius="xl" minH=''>
        <Stack p={8} spacing={6}>
          <Heading fontFamily='poppins' as='h2' size='xl'>
            All Talks
          </Heading>
          <TalkList talks={talk}/>
        </Stack>
      </Box>
    </>
  )
}
export default Talk
