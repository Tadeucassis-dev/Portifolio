import { Icon, Link, Text, Flex, Center } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Center p={5} bg="#4c4c4c" textAlign="center" color="white">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
        <Text ml={"200px"} fontSize={20}>
          © 2024 Tadeu César. Todos os direitos reservados.
        </Text>
      </Flex>
      <Flex gap={10} mr={20}>
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
          <Icon as={FaInstagram} w={7} h={7} />
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
          <Icon as={FaWhatsapp} w={7} h={7} />
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
          <Icon as={FaGithub} w={7} h={7} />
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
          <Icon as={FaEnvelope} w={7} h={7} />
        </Link>
      </Flex>
    </Center>
  );
};

export default Footer;