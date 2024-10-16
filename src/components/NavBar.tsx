import { Flex, Link } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex
      bg="#3d3d3d"
      fontSize={"xl"}
      color="white"
      height="80px"
      display="flex"
      justifyContent="center"
      gap={10}
      fontWeight="bold"
      align="center"
      justify="space-between"
      direction={{ base: "column", md: "row" }}
    >
      <Link href="/">Home</Link>
      <Link href="/sobre">Sobre Mim</Link>
      <Link href="/projetos">Projetos</Link>
      <Link href="contato/">Contato</Link>
    </Flex>
  );
};

export default NavBar;
