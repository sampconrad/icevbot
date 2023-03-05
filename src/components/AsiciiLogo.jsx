import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const asiciiArt1 = (
  <Text fontSize={{base: 8, md: 10}} bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text'>
    <pre>
      <code>
        {`
██╗ ██████╗███████╗██╗   ██╗
██║██╔════╝██╔════╝██║   ██║
██║██║     █████╗  ██║   ██║
██║██║     ██╔══╝  ╚██╗ ██╔╝
██║╚██████╗███████╗ ╚████╔╝ 
╚═╝ ╚═════╝╚══════╝  ╚═══╝    
`}
      </code>
    </pre>
  </Text>
);

const asiciiArt2 = (
  <Text fontSize={{base: 8, md: 10}} color='brand.500'>
    <pre>
      <code>
        {`
██████╗  ██████╗ ████████╗
██╔══██╗██╔═══██╗╚══██╔══╝
██████╔╝██║   ██║   ██║   
██╔══██╗██║   ██║   ██║   
██████╔╝╚██████╔╝   ██║   
╚═════╝  ╚═════╝    ╚═╝   
`}
      </code>
    </pre>
  </Text>
);

const AsiciiLogo = () => {
  return (
    <Flex align='center' mt='-10px'>
      {asiciiArt1}
      {asiciiArt2}
    </Flex>
  );
};

export default AsiciiLogo;
