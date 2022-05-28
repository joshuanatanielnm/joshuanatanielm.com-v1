import { Box, Heading, Stack, VStack } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";

import Head from "next/head";
import { NextSeo } from "next-seo";
import { Project } from "@/generated/graphql";
import ProjectList from "@/components/project-list";
import React from "react";
import { cms } from "@/lib/cms";

interface ProjectPageProps {
  project: Project[];
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await cms().projectStaticProps();
  return {
    props: {
      project: data.projectCollection.items,
    },
  };
};

const Projects: NextPage<ProjectPageProps> = ({ project }) => {
  return (
    <>
      <Head>
        <title>Project</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NextSeo
        openGraph={{
          title: "Projects",
          description: "My recent project",
          url: "https://joshuanatanielm.com/projects",
          images: [
            {
              url: "https://joshuanatanielm.com/favicon.png",
              width: 850,
              height: 650,
              alt: "Profile Photo",
            },
          ],
        }}
      />

      <Box
        fontFamily="poppins"
        bgGradient="linear(to-br, white, blue.100)"
        borderRadius="xl"
      >
        <Stack p={8} spacing={6}>
          <Heading fontFamily="poppins" as="h2" size="xl">
            All Projects
          </Heading>
          <ProjectList project={project} />
        </Stack>
      </Box>
    </>
  );
};
export default Projects;
