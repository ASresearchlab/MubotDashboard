import React, { useState } from "react";
import {
  Flex,
  Box,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const QAComponent = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const Styles = {
    color: '#8F9BBA',
  };

  return (
    <Flex
      height="100vh" // Set the height to 100% of the viewport height
      justifyContent="center" // Center horizontally
      //alignItems="center" // Center vertically
    >
      <Box paddingLeft={60} width={600}>
        <FormControl>
          <Flex alignItems="center">
            <FormLabel style={Styles} htmlFor="question" mr={2}>
              Question:
            </FormLabel>
            <Input
              type="text"
              id="question"
              placeholder="Enter your question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              
            />
          </Flex>
        </FormControl>

        <FormControl>
          <Flex alignItems="center">
            <FormLabel style={Styles} htmlFor="answer" mr={5} mb={6}>
              Answer:
            </FormLabel>
            <Input
              type="text"
              id="answer"
              placeholder="Enter your answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </Flex>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default QAComponent;
