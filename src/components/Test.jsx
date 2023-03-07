import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import UserLocation from './UserLocation';
import provas from '../config/provas';

const Test = ({ location }) => {
  const dayDelta = 14;
  const filteredTests = provas.filter(
    (prova) => prova.data.getDate() - new Date().getDate() < dayDelta
  );

  return (
    <Stack>
      <Text fontSize='lg' color='orange' fontWeight={700}>
        ~/Tests/in_14_days
      </Text>
      <hr />
      {filteredTests.length === 0 ? (
        <Flex pt={5} align='center' gap={2}>
          <Text fontSize='sm' color='red'>
            No upcoming tests found
          </Text>
        </Flex>
      ) : (
        filteredTests.map((test, index) => (
          <Stack key={index}>
            <Text fontSize={{ base: 'sm', md: 'md' }} color='neonGreen'>
              {test.materia}
            </Text>
            <Flex gap={2}>
              <Text fontSize={{ base: 'xs', md: 'sm' }} color='brand.100'>
                Date:
              </Text>
              <Text fontSize={{ base: 'xs', md: 'sm' }} color='lightBlue'>
                {test.data.toLocaleDateString()}
              </Text>
            </Flex>

            <Text fontSize={{ base: 'xs', md: 'sm' }} color='red'>
              In {test.data.getDate() - new Date().getDate()} day(s)
            </Text>
            <hr />
          </Stack>
        ))
      )}
      <UserLocation location={location} />
    </Stack>
  );
};

export default Test;
