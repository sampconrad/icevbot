import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import UserLocation from './UserLocation';
import provas from '../config/provas';

const Test = ({ location }) => {
  // range of days to search for upcoming tests
  const daysRange = 14;
  const currentDate = new Date().getTime();
  const rouding = 24 * 60 * 60 * 1000;
  const upcomingTests = provas
    .filter(({ data }) => data.getTime() - currentDate < daysRange * rouding)
    .map(({ data, ...rest }) => ({
      ...rest,
      data,
      diasRestantes: Math.floor((data.getTime() - currentDate) / rouding),
    }))
    .sort((a, b) => a.diasRestantes - b.diasRestantes);

  return (
    <Stack>
      <Text fontSize='lg' color='orange' fontWeight={700}>
        ~/Tests/in_14_days
      </Text>
      <hr />
      {upcomingTests.length === 0 ? (
        <Flex pt={5} align='center' gap={2}>
          <Text fontSize='sm' color='red'>
            No upcoming tests found
          </Text>
        </Flex>
      ) : (
        upcomingTests.map((test, index) => (
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

            <Text
              fontSize={{ base: 'xs', md: 'sm' }}
              color={
                test.diasRestantes < 3
                  ? 'red'
                  : test.diasRestantes < 7
                  ? 'orange'
                  : test.diasRestantes < 10
                  ? 'yellow'
                  : 'brand.400'
              }>
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
