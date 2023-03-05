import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import UserLocation from './UserLocation';
import aulas from '../config/aulas';

const Week = ({ location }) => {
  return (
    <Stack>
      <Text fontSize='xl' color='darkBlue' fontWeight={700}>
        ~/Classes/Week
      </Text>
      {Object.entries(aulas).map((aula, index) => (
        <Stack key={index}>
          <Text fontSize='lg' color='orange' fontWeight={700}>
            {aula[1].dia}
          </Text>

          <hr />
          {aula[1].aulas.map(
            (aula, index) =>
              aula.materia && (
                <Stack key={index}>
                  <Text fontSize={{ base: 'sm', md: 'md' }} color='neonGreen'>
                    {aula.materia}
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color='lightBlue'>
                    {aula.inicio} às {aula.fim}
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color='brand.500'>
                    Prof. {aula.professor}
                  </Text>
                  <hr />
                </Stack>
              )
          )}
        </Stack>
      ))}
      <UserLocation location={location} />
    </Stack>
  );
};

export default Week;
