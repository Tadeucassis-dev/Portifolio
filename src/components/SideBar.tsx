import { Heading, HStack,} from '@chakra-ui/react'

const SideBar = () => {
  return (
    <HStack
    height={'74vh'}
    width={'20%'}
    backgroundColor={'#696969'}
    color={'white'}
    justifyContent={'center'}
    alignItems={'center'}
    fontSize={'3xl'}
    textAlign={'center'}  
    display={'flex'}
    flexDirection={'column'}
    gap={5}
    position={'fixed'} // Define a barra como fixa na tela
    right={7} // Posiciona no lado direito
    top={160} // Posiciona no topo
    
  >
    <Heading>SideBar</Heading>
  </HStack>
  )
}

export default SideBar
