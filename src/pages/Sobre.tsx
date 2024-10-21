import { Box, Heading, Text } from "@chakra-ui/react";

export default function Sobre() {
    return (
      <Box 
      p={5}
      height={"80vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      >
        <Heading size="lg" color={'#fff'}>Sobre Mim </Heading>
        <Text mt={3} color={'#fff'}>
          Sou um desenvolvedor Front-end com experiência em React e interfaces responsivas.
        </Text>
      </Box>
    );
  }