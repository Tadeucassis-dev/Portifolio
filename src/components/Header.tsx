import { Box, Heading } from "@chakra-ui/react"

const Header = () => {
  return (
    <Box>
    <Heading
    display={"flex"}
    alignContent={"center"}
    justifyContent={"center"}
    alignItems={"center"}
    fontSize={"3xl"}
    textAlign={"center"}
    backgroundColor={"#696969"}
    color={"white"}
    >
      <h1>Header</h1>
    </Heading>
    </Box>
  )
}

export default Header
