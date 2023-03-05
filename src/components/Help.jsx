import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import UserLocation from './UserLocation';
import comandos from '../config/comandos';
import explicacoes from '../config/explicacoes';

const Help = ({ location }) => {
  return (
    <>
      <Stack py={1}>
        {comandos?.map((message, index) =>
          index > 0 ? (
            <Flex key={index} gap={1} align='center'>
              <Text
                py={1}
                ml={2}
                fontSize={{ base: 'xs', md: 'sm' }}
                color='lightBlue'
                fontWeight='700'
                key={index}>
                <ChevronRightIcon boxSize={4} color='brightYellow' />
                {message}
              </Text>
              <Text fontSize={{ base: 'xs', md: 'sm' }} color='brand.500'>
                | {explicacoes.find((_, i) => i === index)}
              </Text>
            </Flex>
          ) : (
            <Text fontSize={{ base: 'xs', md: 'sm' }} color='neonGreen' key={index}>
              {message}
            </Text>
          )
        )}
      </Stack>
      <UserLocation location={location} />
    </>
  );
};

export default Help;
