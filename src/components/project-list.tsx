import * as React from 'react'

import { Box, Flex, HStack, Heading, Spacer, Stack, Text, VStack } from '@chakra-ui/layout';

import { FaArrowCircleRight } from "react-icons/fa";
import NextLink from "next/link";
import type {Project} from "@/generated/graphql"

interface ProjectListProps {
  project: Project[];
}

const ProjectList:React.FC<ProjectListProps> = ({ project }) => {
  return (
    <>
      <VStack spacing='15px'>
        {
          project.map((v, i) => (
            <React.Fragment key={v.sys?.id || v.slug}>
              <NextLink href={`/project/${v.slug}`}>
                <HStack cursor='pointer' bgColor='blue.800' color='white' w='full' p={4} borderRadius='lg' _hover={{bgColor:'blue.900'}}>
                  <Box>
                    <Heading as='h3' size='lg'>{v.name}</Heading>
                    <Text>{v.shortDescription}</Text>
                    <Text mt='2'>Category : {v.category}</Text>
                  </Box>
                  <Spacer/>
                  <Box fontSize='3xl'>
                     <FaArrowCircleRight />
                  </Box>
                </HStack>
              </NextLink>
            </React.Fragment>
          ))
        }
      </VStack>
    </>
  )
}

export default ProjectList;
