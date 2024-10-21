import { Box, Heading, Text } from "@chakra-ui/react";

export default function Projetos() {
    return (
      <Box
      p={5}
      height={"80vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      >
        <Heading size="lg" color={'#fff'}>Projetos</Heading>
        <Text mt={3} color={'#fff'}>Em breve...</Text>
      </Box>
    );
  }