import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const ASCIIArtLeft = (
  <pre>
    <code>
      <Text
        fontSize={{ base: 8, md: 10 }}
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'>
        {`
██╗ ██████╗███████╗██╗   ██╗
██║██╔════╝██╔════╝██║   ██║
██║██║     █████╗  ██║   ██║
██║██║     ██╔══╝  ╚██╗ ██╔╝
██║╚██████╗███████╗ ╚████╔╝ 
╚═╝ ╚═════╝╚══════╝  ╚═══╝    
`}
      </Text>
    </code>
  </pre>
);

const ASCIIArtRight = (
  <pre>
    <code>
      <Text fontSize={{ base: 8, md: 10 }} color='brand.500'>
        {`
██████╗  ██████╗ ████████╗
██╔══██╗██╔═══██╗╚══██╔══╝
██████╔╝██║   ██║   ██║   
██╔══██╗██║   ██║   ██║   
██████╔╝╚██████╔╝   ██║   
╚═════╝  ╚═════╝    ╚═╝   
`}
      </Text>
    </code>
  </pre>
);

const ASCIIlogo = () => {
  return (
    <Flex align='center' mt='-10px' justify={{ base: 'center', md: 'left' }}>
      {ASCIIArtLeft}
      {ASCIIArtRight}
    </Flex>
  );
};

export default ASCIIlogo;
