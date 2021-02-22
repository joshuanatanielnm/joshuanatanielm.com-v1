import * as React from "react";

import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Icon, IconButton, Link, VStack, useDisclosure } from "@chakra-ui/react";
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
              <VStack>
                <NextLink href="/about">
                  <Link>
                    About
                  </Link>
                </NextLink>
                <NextLink href="/projects">
                  <Link>
                    Project
                  </Link>
                </NextLink>
                <NextLink href="/speaks">
                  <Link>
                    Speaks
                  </Link>
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
