import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Box, ChakraProvider, Container, Stack } from "@chakra-ui/react";

import { AppContextProps } from "@/lib/store/app";
import type { BoxProps } from "@chakra-ui/react";
import Footer from '@/components/footer'
import Head from "next/head";
import MobileDrawer from '@/components/mobile-drawer';
import NProgress from "nprogress";
import Navbar from '@/components/navbar'
import type { AppProps as NextAppProps } from "next/app";
import Router from "next/router";

const MotionBox = motion.custom<BoxProps>(Box);

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type AppProps = NextAppProps & AppContextProps;

function MyApp(props: AppProps) {
  const { Component, pageProps, router } = props;

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>

      <ChakraProvider>
        <Container maxW="5xl" as={Stack} fontFamily='poppins'>
          <Navbar/>
          <Box minH={{base: "0", md:"80vh"}}>
            <AnimatePresence exitBeforeEnter>
              <MotionBox
                key={router.route}
                animate="enter"
                as="main"
                exit="exit"
                initial="initial"
                variants={{
                  initial: { opacity: 0, x: -20 },
                  enter: { opacity: 1, x: 0 },
                  exit: { opacity: 0, x: 20 },
                }}
              >
                <Component {...pageProps} />
              </MotionBox>
            </AnimatePresence>
          </Box>
          <Footer/>
        </Container>
        <MobileDrawer />
      </ChakraProvider>
    </>
  )
}

export default MyApp
