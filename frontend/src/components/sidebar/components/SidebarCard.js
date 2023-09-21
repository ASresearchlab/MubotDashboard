import {
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
  Avatar,
  Tooltip
} from "@chakra-ui/react";
import logoWhite from "assets/img/layout/logoWhite.png";
import React from "react";
import { RiFontFamily } from "react-icons/ri";

export default function SidebarDocs(props) {
  const bgColor = "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)";
  const borderColor = useColorModeValue("white", "navy.800");
  const receivedData = props.isFull;
  // console.log(receivedData);

  return (
    <Flex
      justify='center'
      direction='column'
      //align='center'
      // bg={bgColor}
      borderRadius='30px'
      position='relative'
      marginTop={-59}
      paddingLeft={1}
      paddingBottom={30}
      // margin={30}
    >
      <Flex>
        <Tooltip label="Aegean Solutions">
          <Avatar
            _hover={{ cursor: 'pointer' }}
            color="white"
            name="Aegean Solutions"
            bg="#11047A"
            size="sm"
            w="40px"
            h="40px"
            
          />
          
        </Tooltip>
        <Text style={{paddingLeft:'15px', fontFamily:'DM Sans',color: "#8F9BBA"}} >{receivedData ? 'aegean1234 \ninfo@aegeansolutions.com' : null}</Text>
      </Flex>
      {/* <Flex
        direction='column'
        mb='12px'
        align='center'
        justify='center'
        px='15px'
        pt='55px'>
        <Text
          fontSize={{ base: "lg", xl: "18px" }}
          color='white'
          fontWeight='bold'
          lineHeight='150%'
          textAlign='center'
          px='10px'
          mt="10px"
          mb='6px'>
          Upgrade to PRO
        </Text>
        <Text
          fontSize='14px'
          color={"white"}
          fontWeight='500'
          px='10px'
          mb='6px'
          textAlign='center'>
          Improve your development process and start doing more with Horizon UI
          PRO!
        </Text>
      </Flex>
      <Link href='https://horizon-ui.com/pro?ref=horizon-chakra-free'>
        <Button
          bg='whiteAlpha.300'
          _hover={{ bg: "whiteAlpha.200" }}
          _active={{ bg: "whiteAlpha.100" }}
          mb={{ sm: "16px", xl: "24px" }}
          color={"white"}
          fontWeight='regular'
          fontSize='sm'
          minW='185px'
          mx='auto'>
          Upgrade to PRO
        </Button>
      </Link> */}
    </Flex>

  );
}
