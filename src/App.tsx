// App.js ou App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Componentes de página
function Home() {
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        p={10}
        bg="#2c2c2c"
        color="white"
        height="80vh"
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box flex="1" display="flex" justifyContent="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="/tadeu.jpeg" // Ajuste o caminho da imagem conforme necessário
            alt="Foto"
            objectFit="cover"
            height="50vh"
            width="50vh"
          />
        </Box>
        <Box flex="1" textAlign={{ base: 'center', md: 'left' }} mb={{ base: 4, md: 0 }}>
          <Heading as="h1" size="2xl" mb={2}>
            Olá, Sou Tadeu César
          </Heading>
          <Text fontSize="xl">
            Desenvolvedor Front-end com paixão por criar interfaces intuitivas e responsivas.
          </Text>
        </Box>
      </Flex>
    </>
  );
}

function Sobre() {
  return (
    <Box p={5} bg="gray.100">
      <Heading size="lg">Sobre Mim</Heading>
      <Text mt={3}>
        Sou um desenvolvedor Front-end com experiência em React e interfaces responsivas.
      </Text>
    </Box>
  );
}

function Projetos() {
  return (
    <Box p={5} bg="white">
      <Heading size="lg">Projetos</Heading>
      {/* Adicione uma lista de projetos aqui */}
    </Box>
  );
}

function Contato() {
  return (
    <Box p={5} bg="gray.100">
      <Heading size="lg">Contato</Heading>
      <Text mt={3}>Email: exemplo@meuportifolio.com</Text>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
