import React, { useState } from "react";
import Sizedbox from 'components/Sizedbox';
// chakra imports
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  Icon,
  useColorModeValue,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
  Button
} from "@chakra-ui/react";
import Content from "components/sidebar/components/Content";
import { MdMenu } from 'react-icons/md';
import {
  renderThumb,
  renderTrack,
  renderView,
} from "components/scrollbar/Scrollbar";
import { Scrollbars } from "react-custom-scrollbars-2";
import PropTypes from "prop-types";
import SidebarLink from ".//components/Links";
import Brand from "components/sidebar/components/Brand";
import SidebarCard from "components/sidebar/components/SidebarCard";
// Assets
import { IoMenuOutline } from "react-icons/io5";

function Sidebar(props) {
  const { routes } = props;
  const [isFull, setSmall] = useState('true');
  const toggleWidth = () => {
    setSmall((prevIsFull) => !prevIsFull); // Toggle isFull value
  };
  let variantChange = "0.2s linear";
  let shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );
  // Chakra Color Mode
  let sidebarBg = useColorModeValue("#e7e2d1", "navy.800");
  let sidebarMargins = "0px";

  // SIDEBAR
  return (
    <Box display={{ sm: "none", xl: "block" }} w="100%" position='fixed' minH='100%'>
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w={isFull ? "300px" : "100px"}
        h='100vh'
        m={sidebarMargins}
        minH='100%'
        overflowX='hidden'
        boxShadow={shadow}>
        <Scrollbars
          autoHide
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={renderView}>
          {/* <Content routes={routes} /> */}
          <Brand />
          <Button float='right' w="30px" h="30px" backgroundColor='transparent' onClick={toggleWidth}><Icon mt="6px" w='20px' h='20px' as={MdMenu}  /></Button>
          <Sizedbox height={40} />
          <SidebarLink routes={routes} isFull={isFull} />
          <Box
            mt='60px'
            mb='40px'
            borderRadius='30px'>
            <SidebarCard isFull={isFull} />
          </Box>
        </Scrollbars>

      </Box>
    </Box>
  );
}

// FUNCTIONS
export function SidebarResponsive(props) {
  let sidebarBackgroundColor = useColorModeValue("#e7e2d1", "navy.800");
  let menuColor = useColorModeValue("gray.400", "white");
  // // SIDEBAR
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { routes } = props;
  // let isWindows = navigator.platform.startsWith("Win");
  //  BRAND
  const [isFull, setSmall] = useState('true');
  const toggleWidth = () => {
    setSmall((prevIsFull) => !prevIsFull); // Toggle isFull value
  };
  return (
    <Flex display={{ sm: "flex", xl: "none" }} alignItems='center'>
      <Flex ref={btnRef} w='max-content' h='max-content' onClick={onOpen}>
        <Icon
          as={IoMenuOutline}
          color={menuColor}
          my='auto'
          w='20px'
          h='20px'
          me='10px'
          _hover={{ cursor: "pointer" }}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={document.documentElement.dir === "rtl" ? "right" : "left"}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent w='250px' maxW={isFull ? "200px" : "50px"} bg={sidebarBackgroundColor}>
          <DrawerCloseButton
            zIndex='3'
            onClose={onClose}
            _focus={{ boxShadow: "none" }}
            _hover={{ boxShadow: "none" }}
          />
          <DrawerBody maxW='250px' px='0rem' pb='0'>
            <Scrollbars
              autoHide
              renderTrackVertical={renderTrack}
              renderThumbVertical={renderThumb}
              renderView={renderView}>
              <Brand />
              <Button onClick={toggleWidth}>Test</Button>
              <SidebarLink routes={routes} isFull={isFull} />
              <Box
                mt='60px'
                mb='40px'
                borderRadius='30px'>
                <SidebarCard isFull={isFull} />
              </Box>
            </Scrollbars>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
// PROPS

Sidebar.propTypes = {
  logoText: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  variant: PropTypes.string
};

export default Sidebar;
