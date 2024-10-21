import { Box, Flex, Icon, Link } from "@chakra-ui/react";
import { FaListUl } from "react-icons/fa";

const NavBar = () => {
  return (
    <Flex justify={"space-between"} display={"flex"} padding={"20px"}>
      <Box>
        <Icon as={FaListUl} w={9} h={9} color={"white"} />
      </Box>
      <Box
        fontSize={"2xl"}
        color="white"
        height="80px"
        display="flex"
        justifyContent="right"
        pr={5}
        pt={5}
        gap={8}
        fontWeight="bold"
        fontFamily={"sans-serif"}
      >
        <Link
          href="/"
          sx={{
            _hover: { transform: "scale(1.2)", transition: "transform 0.2s" },
          }}
        >
          Home
        </Link>
        <Link
          href="/sobre"
          sx={{
            _hover: { transform: "scale(1.2)", transition: "transform 0.2s" },
          }}
        >
          Sobre{" "}
        </Link>
        <Link
          href="/projetos"
          sx={{
            _hover: { transform: "scale(1.2)", transition: "transform 0.2s" },
          }}
        >
          Projetos
        </Link>
        <Link
          href="contato/"
          sx={{
            _hover: { transform: "scale(1.2)", transition: "transform 0.2s" },
          }}
        >
          Contato
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
