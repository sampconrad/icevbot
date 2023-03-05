import { Stack, Text } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import React from 'react';
import UserLocation from './UserLocation';
import grade from '../config/grade';

const Semester = ({ location }) => {
  return (
    <Stack>
      {grade.map((periodo, index) => (
        <Stack key={index}>
          <Text fontSize='lg' color='orange' fontWeight={700}>
            {index + 1}º Semester {index === 0 && <CheckIcon boxSize={3} color='neonGreen' />}
          </Text>
          {periodo.map((materia) => (
            <Text key={materia} fontSize={{ base: 'xs', md: 'sm' }} color='brand.500'>
              - {materia}
            </Text>
          ))}
        </Stack>
      ))}
      <UserLocation location={location} />
    </Stack>
  );
};

export default Semester;
