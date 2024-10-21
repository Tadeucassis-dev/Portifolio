import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

const projetos = [
  {
    nome: "employee-registration",
    descricao: "Sistema de registro de funcionários.",
    linguagem: "JavaScript",
  },
  {
    nome: "PrimeFlix",
    descricao: "Lista de filmes lançamentos.",
    linguagem: "JavaScript",
  },
  {
    nome: "landing-page-meleva",
    descricao: "Componentes criados para a página da n1Car (contatos e suporte).",
    linguagem: "JavaScript, chakra-ui" ,
  },
  {
    nome: "dashboard-n1",
    descricao: "Dashboard para gerenciamento da n1Car.",
    linguagem: "JavaScript, chakra-ui",
  },
  {
    nome: "ProjetoAcai",
    descricao: "Sistema para gerenciamento de pedidos de açaí.",
    linguagem: "TypeScript, chakra-ui",
  },
  {
    nome: "lista-de-tarefas",
    descricao: "Aplicativo de lista de tarefas.",
    linguagem: "TypeScript, chakra-ui",
  },
  {
    nome: "Portifolio",
    descricao: "Pagina web de portifolio.",
    linguagem: "TypeScript, chakra-ui",
  },
];

export default function Projetos() {
  return (
    <Box
      p={5}
      minHeight="80vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading size="xl" color="#fff">Projetos</Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }} // 1 coluna em telas menores, 2 colunas em telas médias para cima
        spacing={5}
        mt={5}
        w="100%"
        maxW="900px"
      >
        {projetos.map((projeto, index) => (
          <Box key={index} bg="#2D3748" p={4} borderRadius="md" w="100%">
            <Heading size="md" color="#fff">{projeto.nome}</Heading>
            <Text mt={2} color="#A0AEC0">{projeto.descricao}</Text>
            <Text mt={1} color="#CBD5E0">
              <strong>Linguagem: </strong>{projeto.linguagem}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
