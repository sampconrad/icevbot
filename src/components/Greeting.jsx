import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import UserLocation from './UserLocation';
import ASCIIlogo from './ASCIIogo';
import comandos from '../config/comandos';

const Greeting = ({ setLoading, setShowInput, showInput }) => {
  const [initialMessages, setInitialMessages] = useState([]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const printGreeting = async () => {
    setLoading(true);
    await delay(1000);
    setInitialMessages([...initialMessages, <ASCIIlogo />]);
    await delay(500);
    setInitialMessages((prev) => [...prev, 'Starting the server...']);
    await delay(3000);
    setInitialMessages((prev) => [...prev, 'Server online!']);
    await delay(500);
    setInitialMessages((prev) => [...prev, 'Type any of the following prompts to proceed:']);

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
      {initialMessages.map((comando, index) =>
        index <= 3 ? (
          <Text fontSize={{ base: 'xs', md: 'sm' }} color='neonGreen' key={index}>
            {comando}
          </Text>
        ) : (
          <Flex key={index} gap={1} align='center'>
            <Text
              py={1}
              ml={2}
              fontSize={{ base: 'xs', md: 'sm' }}
              color='lightBlue'
              fontWeight='700'>
              <ChevronRightIcon boxSize={4} color='brightYellow' />
              {comando.prompt}
            </Text>
            <Text fontSize={{ base: 'xs', md: 'sm' }} color='brand.500'>
              | {comando.explanation}
            </Text>
          </Flex>
        )
      )}
      {showInput && <UserLocation location={'root'} />}
    </Stack>
  );
};

export default Greeting;
