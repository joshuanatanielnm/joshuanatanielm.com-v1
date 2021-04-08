import * as React from "react";

import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Icon, IconButton, Link, VStack, useDisclosure } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";

import NextLink from "next/link";

const MobileDrawer:React.FC = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box bottom={0} d={{ md: "none" }} p={5} pos="fixed" right={0} zIndex={1}>
        <IconButton
          aria-label="Open menu"
          icon={<Icon as={isOpen ? FaTimes : FaBars} />}
          isRound
          onClick={onToggle}
          ref={btnRef}
          size="lg"
        />
      </Box>

      <Drawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        onClose={onClose}
        placement="bottom"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody>
              <VStack spacing="4" py="5">
                <NextLink href="/">
                  <Button w="full" colorScheme="gray" size="md">
                    Home
                  </Button>
                </NextLink>
                <NextLink href="/about">
                  <Button w="full" colorScheme="gray" size="md">
                    About
                  </Button>
                </NextLink>
                <NextLink href="/projects">
                  <Button w="full" colorScheme="gray" size="md">
                    Projects
                  </Button>
                </NextLink>
                <NextLink href="/speaks">
                  <Button w="full" colorScheme="gray" size="md">
                    Speaks
                  </Button>
                </NextLink>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}

export default MobileDrawer;
