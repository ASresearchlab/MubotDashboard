import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

// Custom components
//import { HorizonLogo } from "components/icons/Icons";
import Logo from '../../../assets/img/logo2.png';
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <Link to="/admin">
        <img src={Logo} alt="icon" height="30" style={{ padding: 5 }} to="/admin" />
      </Link>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
