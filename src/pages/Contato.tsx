import { Box, Heading, Text, Flex, Link, Icon, VStack } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contato() {
  return (
    <Box
      p={5}
      height={"80vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Flex
        width={"80%"}
        maxW={"1200px"}
        justifyContent={"space-between"} // Espaço entre as colunas
        alignItems={"center"}
        flexDirection={{ base: "column", md: "row" }} // Coluna em telas menores, linha em maiores
      >
        {/* Informações de contato */}
        <Box textAlign={{ base: "center", md: "left" }} flex="1">
          <Heading size="lg" color={"#fff"}>
            Contato
          </Heading>
          <Text mt={3} color={"#fff"}>
            Se você deseja entrar em contato comigo, pode me enviar um email ou
            conectar-se comigo através das redes sociais.
          </Text>
          <Text mt={2} color={"#fff"}>
            Email: tadeucassis@gmail.com
          </Text>
        </Box>

        {/* Ícones das redes sociais */}
        <VStack
          spacing={7}
          alignItems={{ base: "center", md: "flex-start" }}
          mb={{ base: 8, md: 0 }} // Margem inferior em telas pequenas
          flex="1"
        >
          <Link
            href="https://www.instagram.com/tadeucassis"
            isExternal
            sx={{
              _hover: {
                transform: "scale(1.2)",
                transition: "transform 0.2s",
              },
            }}
          >
            <Flex align="center">
              <Icon as={FaInstagram} w={10} h={10} color="#fff" />
              <Text ml={2} color="#fff" fontSize={20}>
                Instagram
              </Text>
            </Flex>
          </Link>
          <Link
            href="https://wa.me/61985785880"
            isExternal
            sx={{
              _hover: {
                transform: "scale(1.2)",
                transition: "transform 0.2s",
              },
            }}
          >
            <Flex align="center">
              <Icon as={FaWhatsapp} w={10} h={10} color="#fff" />
              <Text ml={2} color="#fff" fontSize={20}>
                WhatsApp
              </Text>
            </Flex>
          </Link>
          <Link
            href="https://github.com/Tadeucassis-dev"
            isExternal
            sx={{
              _hover: {
                transform: "scale(1.2)",
                transition: "transform 0.2s",
              },
            }}
          >
            <Flex align="center">
              <Icon as={FaGithub} w={10} h={10} color="#fff" />
              <Text ml={2} color="#fff" fontSize={20}>
                GitHub
              </Text>
            </Flex>
          </Link>
          <Link
            href="mailto:tadeucassis@gmail.com"
            sx={{
              _hover: {
                transform: "scale(1.2)",
                transition: "transform 0.2s",
              },
            }}
          >
            <Flex align="center">
              <Icon as={FaEnvelope} w={10} h={10} color="#fff" />
              <Text ml={2} color="#fff" fontSize={20}>
                Email
              </Text>
            </Flex>
          </Link>
        </VStack>
      </Flex>
    </Box>
  );
}
