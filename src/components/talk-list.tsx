import * as React from 'react'

import { Box, Flex, HStack, Heading, Link, Spacer, Stack, Text, VStack } from '@chakra-ui/layout';

import { FaArrowCircleRight } from "react-icons/fa";
import type {Talks} from "@/generated/graphql"
import format from "date-fns/format";

interface TalkListProps {
  talks: Talks[];
}

const TalkList:React.FC<TalkListProps> = ({ talks }) => {
  return (
    <>
      <VStack spacing='15px'>
        {
          talks.map((v, i) => (
            <React.Fragment key={v.sys?.id}>
              <Link href={`${v.links}`} w='full' isExternal _hover={{textDecor:'none'}}>
                <HStack cursor='pointer' bgColor='blue.800' color='white' w='full' p={4} borderRadius='lg' _hover={{bgColor:'blue.900'}}>
                  <Box>
                    <Heading as='h3' size='lg'>{v.name}</Heading>
                    <Text>{v.description}</Text>
                    <Text mt='2'>{format(new Date(v.date), "DD / MMMM / YYYY")}</Text>
                  </Box>
                  <Spacer/>
                  <Box fontSize='3xl'>
                     <FaArrowCircleRight />
                  </Box>
                </HStack>
              </Link>
            </React.Fragment>
          ))
        }
      </VStack>
    </>
  )
}

export default TalkList;
