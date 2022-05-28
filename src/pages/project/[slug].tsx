import {
  Box,
  HStack,
  Heading,
  Image,
  Link,
  ListItem,
  Skeleton,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { FaExternalLinkAlt } from "react-icons/fa";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { Project } from "@/generated/graphql";
import React from "react";
import { cms } from "@/lib/cms";

interface ProjectPageProps {
  project: Project;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug as string;
  const data = await cms().projectPageStaticProps({ slug });

  return {
    props: {
      project: data.projectCollection.items[0] ?? null,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await cms().projectStaticPath();

  return {
    paths: data.projectCollection.items.map((params) => ({ params })),
    fallback: false,
  };
};

const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  const [loaded, setLoaded] = React.useState(true);
  return (
    <>
      <Head>
        <title>{project.name}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NextSeo
        openGraph={{
          title: `${project.name}`,
          description: `${project.shortDescription}`,
          url: `https://joshuanatanielm.com/projects/${project.slug}`,
          images: [
            {
              url: `https://joshuanatanielm.com/favicon.png`,
              width: 850,
              height: 650,
              alt: `${project.name} photo`,
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
          <Heading fontFamily="poppins" as="h2" size="xl" textAlign="center">
            {project.name}
          </Heading>
          <VStack borderRadius="lg">
            <Image
              src={project.image.url}
              borderRadius="xl"
              width="full"
              onLoad={() => setLoaded(false)}
            />
            {loaded && (
              <Skeleton w="full" height={{ base: "100px", md: "400px" }} />
            )}
          </VStack>
          <Stack>
            <Heading fontFamily="poppins" as="h3" size="lg">
              Description
            </Heading>
            <Text fontSize="lg">{project.longDescription}</Text>
          </Stack>
          <Stack direction={{ base: "column", sm: "row" }} spacing="10">
            <Stack>
              <Heading fontFamily="poppins" as="h3" size="lg">
                Stack
              </Heading>
              <Box fontSize="lg">
                <UnorderedList>
                  {project.stack.map((v) => (
                    <ListItem key={v}>{v}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Stack>
            <Stack>
              <Heading fontFamily="poppins" as="h3" size="lg">
                Links
              </Heading>
              <Box fontSize="lg">
                <UnorderedList>
                  {project.linkWebsite && (
                    <ListItem>
                      <HStack>
                        <Link href={project.linkWebsite} isExternal>
                          <Text as="i">website</Text>
                        </Link>
                        <FaExternalLinkAlt />
                      </HStack>
                    </ListItem>
                  )}
                  {project.linkRepo && (
                    <ListItem>
                      <HStack>
                        <Link href={project.linkRepo} isExternal>
                          <Text as="i">Repository</Text>
                        </Link>
                        <FaExternalLinkAlt />
                      </HStack>
                    </ListItem>
                  )}
                </UnorderedList>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default ProjectPage;
