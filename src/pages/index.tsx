import { Box, Button, Divider, Heading, Link, Stack, Text, VStack } from '@chakra-ui/react';
import type { GetStaticProps, NextPage } from "next";
import {Project, Talks} from '@/generated/graphql'

import Head from 'next/head'
import NextLink from "next/link";
import ProjectList from '@/components/project-list'
import TalkList from '@/components/talk-list'
import { cms } from "@/lib/cms";

interface HomePageProps {
  project: Project[];
  talks: Talks[];
}
export const getStaticProps: GetStaticProps = async () => {
  const data = await cms().homePageStaticProps();
  return {
    props: {
      project: data.projectCollection.items,
      talks: data.talksCollection.items
    },
  };
};


const Home: NextPage<HomePageProps> = ({ project, talks }) => {
  return (
    <>
      <Head>
        <title>joshuanatanielm</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box fontFamily='poppins' >
        <VStack textAlign='center' py='50px' spacing='24px'>
          <Heading fontFamily='poppins' as='h1' size='2xl'>
            Hello i'am Jojo. 👋
          </Heading>
          <Box w={{md:2/3}} fontSize='2xl'>
            students who want to be software developer
          </Box>
        </VStack>
        <Stack bgGradient="linear(to-br, white, blue.100)"  borderRadius="xl" p={8} spacing={6}>
          <Box>
            <Heading as='h2' size='xl' mb={2}>About</Heading>
            <Text fontSize='xl'>
              I’am a self taught Website developer based in <span style={{fontWeight: 'bold'}}>Surabaya, ID</span>. Currently i working on my bachelor's degree in information system on <span style={{fontWeight: 'bold'}}>Institut Teknologi Adhi Tama Surabaya</span> and doing some freelance projects.
            </Text>
            <ViewAllButton title='Know me more' href='/about'/>
          </Box>
          <Divider/>
          <Box>
            <Heading as='h2' size='xl' mb={2}>Recent Projects</Heading>
            <ProjectList project={project}/>
            <ViewAllButton title='See all projects' href='/projects'/>
          </Box>
          <Box>
            <Heading as='h2' size='xl' mb={2}>Recent Talks</Heading>
            <TalkList talks={talks}/>
            <ViewAllButton title='See all talks' href='/talk'/>
          </Box>
        </Stack>
      </Box>
    </>
  )
}

function ViewAllButton({ title, href }){
  return(
    <Box mt={3}>
      <NextLink href={href} passHref>
        <Button float="right" w={{base:'full', md:'initial'}} bgColor='gray.700' color='white'
          _hover={{ bg: "#000000" }}
          _active={{
            bg: "#000000",
            transform: "scale(0.98)",
            borderColor: "#000000",
          }}
        >
          {title}
        </Button>
      </NextLink>
    </Box>
  )
}



export default Home
