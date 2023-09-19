// Chakra imports
// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
  Image, 
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Custom icons
import React from "react";
import {
  MdBarChart,
} from "react-icons/md";
import { Icon }  from "@chakra-ui/react";
export default function Default(props) {
  const { startContent, endContent, name, growth, value, image } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";

  return (
    <Card py='15px'>
      <Flex
        my='auto'
        h='300px'
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}>
        {startContent}

        <Stat my='auto' ms={startContent ? "18px" : "0px"}>
          <StatLabel
            lineHeight='100%'
            color={textColorSecondary}
            fontSize={{
              base: "sm",
            }}>
            {name}
          </StatLabel>
          <StatNumber
            color={textColor}
            fontSize={{
              base: "2xl",
            }}>
            {value}
          </StatNumber>
          {growth ? (
            <Flex align='center'>
              <Icon w='32px' h='32px' as={image}  />
              {/* <Image as={image} ></Image> */}
              <Text color='secondaryGray.600' fontSize='xs' fontWeight='400'>
                {/* since last month */}
              </Text>
            </Flex>
          ) : null}
        </Stat>
        <Flex ms='auto' w='max-content'>
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}
