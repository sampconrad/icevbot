import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import UserLocation from './UserLocation';
import AsiciiLogo from "./AsiciiLogo";
import comandos from '../config/comandos';
import explicacoes from '../config/explicacoes';


const Greeting = ({ setLoading, setShowInput, showInput }) => {
  const [initialMessages, setInitialMessages] = useState([]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const printGreeting = async () => {
    setLoading(true);
    await delay(1000);
    setInitialMessages([...initialMessages, <AsiciiLogo/>]);
    await delay(500);
    setInitialMessages((prev) => [...prev, 'Starting the server...']);
    
    await delay(3000);
    setInitialMessages((prev) => [...prev, 'Server online!']);
    
    await delay(500);
    for await (const comando of comandos) {
      setInitialMessages((prev) => [...prev, comando]);
      await delay(300);
    }
    setLoading(false);
    await delay(300);
    await setShowInput(true);
  };

  useEffect(() => {
    printGreeting();
  }, []);


  return (
    <Stack>
      {initialMessages.map((message, index) =>
        index > 3 ? (
          <Flex key={index} gap={1} align='center'>
            <Text py={1} ml={2} fontSize={{base: 'xs', md: 'sm'}} color='lightBlue' fontWeight='700'>
              <ChevronRightIcon boxSize={4} color='brightYellow' />
              {message}
            </Text>
            <Text fontSize={{base: 'xs', md: 'sm'}} color='brand.500'>
            | {explicacoes.find((_, i) => i === index - 3)}
            </Text>
          </Flex>
        ) : (
          <Text fontSize={{base: 'xs', md: 'sm'}} color='neonGreen' key={index}>
            {message}
          </Text>
        )
      )}
      {showInput && <UserLocation location={'root'} />}
    </Stack>
  );
};

export default Greeting;
