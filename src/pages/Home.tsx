import { Flex, Box, Heading, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        p={{ base: 5, md: 10 }} // Padding adaptável
        color="white"
        height="80vh"
        flexDirection={{ base: 'column', md: 'row' }} // Flex direction responsivo
        textAlign={{ base: 'center', md: 'left' }}
      >
        <Box flex="1" display="flex" justifyContent="center" mb={{ base: 4, md: 0 }}>
          <Image
            borderRadius="full"
            boxSize={{ base: "100px", md: "150px" }} // Tamanho da imagem adaptável
            src="/tadeu.jpeg"
            alt="Foto"
            objectFit="cover"
            height={{ base: "30vh", md: "50vh" }} // Tamanho adaptável
            width={{ base: "30vh", md: "50vh" }}
          />
        </Box>
        <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={2}>
            Olá, eu sou Tadeu César
          </Heading>
          <Text fontSize={{ base: "md", md: "xl" }}>
            Sou desenvolvedor front-end com uma paixão por criar interfaces web dinâmicas e intuitivas. 
            Neste portfólio, você encontrará uma visão completa das minhas habilidades, 
            os projetos em que trabalhei e a jornada que trilhei até aqui.
          </Text>
        </Box>
      </Flex>
    </>
  );
}