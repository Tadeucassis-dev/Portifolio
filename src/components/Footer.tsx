import { Box, Icon, Link, Text, Flex } from '@chakra-ui/react';
import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
      <Box 
        p={5} 
        bg="#3c3c3c"
        textAlign="center"
        color="white"
      >
        <Flex
          justify="space-around"
          align="center"
          maxW="1200px"
          mx="auto"
        >
          <Text>© 2024 Tadeu César. Todos os direitos reservados.</Text>
          <Flex gap={10}>
            <Link href="https://www.instagram.com/tadeucassis" isExternal>
              <Icon as={FaInstagram} w={6} h={6} />
            </Link>
            <Link href="https://wa.me/61985785880" isExternal>
              <Icon as={FaWhatsapp} w={6} h={6} />
            </Link>
            <Link href="https://github.com/Tadeucassis-dev" isExternal>
              <Icon as={FaGithub} w={6} h={6} />
            </Link>
            <Link href="mailto:tadeucassis@gmail.com">
              <Icon as={FaEnvelope} w={6} h={6} />
            </Link>
          </Flex>
        </Flex>
      </Box>
    );
  };
  
  export default Footer;
