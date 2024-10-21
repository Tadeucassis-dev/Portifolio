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
        <Heading fontSize={'4xl'} color={'#fff'}>Sobre Mim</Heading>
        <Text mt={3} color={'#fff'} textAlign="center" maxW="600px" fontSize={'lg'}>
          Sou um desenvolvedor Front-end apaixonado por criar interfaces dinâmicas e intuitivas. 
          Com uma forte experiência em React, TypeScript e JavaScript, desenvolvo aplicações 
          modernas e responsivas que oferecem uma experiência de usuário otimizada em diferentes dispositivos. 
          Tenho conhecimento em design de interfaces, garantindo que os projetos nos quais trabalho sejam não 
          apenas funcionais, mas também esteticamente agradáveis. Estou sempre em busca de novos desafios e 
          oportunidades para expandir minhas habilidades e contribuir para a criação de soluções digitais 
          inovadoras.
        </Text>
      </Box>
    );
  }
