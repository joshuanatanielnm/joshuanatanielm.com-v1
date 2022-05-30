import {
  Box,
  Heading,
  Text,
  VStack,
  Skeleton,
  Stack,
  Link,
} from "@chakra-ui/react";

import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";
import React from "react";

const About: React.FC = () => {
  const [loaded, setLoaded] = React.useState(true);
  return (
    <>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NextSeo
        openGraph={{
          title: "About Me",
          description: "College student that enjoy creating digital product",
          url: "https://joshuanatanielm.com/about",
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
        p={{ base: 8, md: 24 }}
        spacing={6}
      >
        <VStack textAlign="center" py="50px" spacing="24px">
          <Box>
            <Image
              src="/profileilus.png"
              alt="profile"
              width="200"
              height="200"
              onLoad={() => setLoaded(false)}
            />
            {loaded && <Skeleton w="full" width="200" height="200" />}
          </Box>
          <Heading fontFamily="poppins" as="h1" size="2xl" pb="2">
            Hello i'am Jojo. 👋
          </Heading>
          <Stack
            fontSize={{ base: "xl", md: "2xl" }}
            textAlign="left"
            spacing={4}
          >
            <Text>
              I am a frontend developer based in Surabaya, Indonesia (ID). Now
              I'm in my 8th semester working on my bachelor's degree in
              information system on Institut Teknologi Adhi Tama Surabaya.
            </Text>
            <Text>
              I love to create user interface using react, currently working as
              a Product Engineer - Zero One Group. My daily role is to create
              user interface using ReactJS, write unit test, handle large data
              efficiently, and Integrate endpoint. Sometimes I also do back end
              stuff using NodeJS if needed. Working on various projects in the
              agency got me used to learning new technologies, to solve client
              problems.
            </Text>
            <Text>
              View my resume in{" "}
              <Link href="/resume.pdf" color="blue.600" passHref>
                <a target="_blank">PDF format</a>
              </Link>{" "}
              or online via{" "}
              <Link
                href="https://resume.io/r/JiQEzeD3Y"
                color="blue.600"
                passHref
              >
                <a target="_blank">resume.io</a>
              </Link>
              .
            </Text>
          </Stack>
        </VStack>
      </Box>
    </>
  );
};

export default About;
