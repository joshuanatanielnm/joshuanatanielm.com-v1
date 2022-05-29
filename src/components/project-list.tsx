import * as React from "react";

import {
  Box,
  Skeleton,
  HStack,
  Heading,
  Spacer,
  Image,
  Text,
  VStack,
  Grid,
} from "@chakra-ui/react";

import NextLink from "next/link";
import type { Project } from "@/generated/graphql";

interface ProjectListProps {
  project: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ project }) => {
  const [loaded, setLoaded] = React.useState(true);
  console.log(project);
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {project.map((v, i) => (
          <React.Fragment key={v.sys?.id || v.slug}>
            <NextLink href={`/project/${v.slug}`}>
              <HStack
                cursor="pointer"
                bgColor="blue.800"
                color="white"
                w="full"
                p={4}
                borderRadius="lg"
                _hover={{ bgColor: "blue.900" }}
                boxShadow="lg"
              >
                <Box>
                  <VStack borderRadius="lg" pb={4}>
                    <Image
                      src={v.image.url}
                      borderRadius="xl"
                      width="full"
                      onLoad={() => setLoaded(false)}
                    />
                    {loaded && (
                      <Skeleton
                        w="full"
                        height={{ base: "100px", md: "400px" }}
                      />
                    )}
                  </VStack>
                  <Heading as="h3" size="lg">
                    {v.name}
                  </Heading>
                  <Text>{v.shortDescription}</Text>
                  <Text mt="2">Category : {v.category}</Text>
                </Box>
                <Spacer />
              </HStack>
            </NextLink>
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
};

export default ProjectList;
