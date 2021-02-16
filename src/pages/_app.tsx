import { AnimatePresence, motion } from "framer-motion";
import { Box, ChakraProvider, Container, Stack } from "@chakra-ui/react";

import type { BoxProps } from "@chakra-ui/react";
import Footer from '@/components/footer'
import Head from "next/head";
import MobileDrawer from '@/components/mobile-drawer';
import NProgress from "nprogress";
import Navbar from '@/components/navbar'
import Router from "next/router";

const MotionBox = motion.custom<BoxProps>(Box);
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>

      <ChakraProvider>
        <Container maxW="6xl" as={Stack} fontFamily='poppins' minH="100vh">
          <Navbar/>
          <AnimatePresence exitBeforeEnter>
            <MotionBox
              animate="enter"
              as="main"
              exit="exit"
              flexGrow={1}
              initial="initial"
              variants={{
                initial: { opacity: 0, y: -80 },
                enter: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 80 },
              }}
            >
              <Component {...pageProps} />
            </MotionBox>
          </AnimatePresence>
          <Footer/>
        </Container>
        <MobileDrawer />
      </ChakraProvider>
    </>
  )
}

export default MyApp
