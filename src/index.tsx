import { Box, ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import Rotas from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider>
    <Box
      bgImage="url(/background.jpg)"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      height={"100vh"}
      width={"100%"}
      overflow={"hidden"}
      
    >
      <Rotas />
    </Box>
  </ChakraProvider>
);
