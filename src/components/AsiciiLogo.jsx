import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const asiciiArt1 = (
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

const asiciiArt2 = (
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

const AsiciiLogo = () => {
  return (
    <Flex align='center' mt='-10px' justify={{ base: 'center', md: 'left' }}>
      {asiciiArt1}
      {asiciiArt2}
    </Flex>
  );
};

export default AsiciiLogo;
