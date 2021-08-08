import React from 'react'
import { Heading, Text, Link } from '@chakra-ui/react';

import NextLink from "next/link";
import { NextSeo } from "next-seo";

const FourOFour = () => {
  const pageMeta = {
    title: `404`,
    description: `Opsss there is nothing here. `,
  };

  return (
    <>
      <NextSeo {...pageMeta} />
      <Heading>{pageMeta.title}.</Heading>
      <Text>
        {pageMeta.description}
        <NextLink href="/" passHref>
          <Link color="gray.700" fontWeight="semibold">Go back home</Link>
        </NextLink>
      </Text>
    </>
  )
}

export default FourOFour;
