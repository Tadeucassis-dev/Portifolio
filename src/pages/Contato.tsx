import { Box, Heading, Text } from "@chakra-ui/react";

export default function Contato() {
  return (
    <Box
      p={5}
      height={"80vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading size="lg" color={"#fff"}>
        Contato
      </Heading>
      <Text mt={3} color={"#fff"}>
        Email: exemplo@meuportifolio.com
      </Text>
    </Box>
  );
}
