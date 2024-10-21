import { Box, ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import Rotas from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider>
    <Box
      bgImage="/fundo3.jpg"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      height={"100vh"}
    >
      <Rotas />
    </Box>
  </ChakraProvider>
);
