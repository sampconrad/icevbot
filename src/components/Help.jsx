import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import UserLocation from './UserLocation';
import comandos from '../config/comandos';

const Help = ({ location }) => {
  return (
    <>
      <Stack py={1}>
        <Text fontSize={{ base: 'xs', md: 'sm' }} color='neonGreen'>
          Type any of the following prompts to proceed:
        </Text>
        {comandos?.map((comando, index) => (
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
        ))}
      </Stack>
      <UserLocation location={location} />
    </>
  );
};

export default Help;
