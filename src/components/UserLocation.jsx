import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const UserLocation = ({ location }) => {
  return (
    <Flex py={5} align='center' gap={2}>
      <Text fontSize={{ base: 'xs', md: 'sm' }} color='brightYellow'>
        # user
      </Text>
      <Text fontSize={{ base: 'xs', md: 'sm' }} color='darkBlue'>
        in
      </Text>
      <Text fontSize={{ base: 'xs', md: 'sm' }} color='neonPink'>
        {' '}
        ~/iCEVbot/{location}
      </Text>
    </Flex>
  );
};

export default UserLocation;
