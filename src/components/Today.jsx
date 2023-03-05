import { Stack, Text } from '@chakra-ui/react';
import React from 'react';
import UserLocation from './UserLocation';
import aulas from '../config/aulas';

const Today = ({ location }) => {
  const today = new Date().getDay();
  const horarioHoje =
    today === 1
      ? aulas.segunda
      : today === 2
      ? aulas.terca
      : today === 3
      ? aulas.quarta
      : today === 4
      ? aulas.quinta
      : aulas.sexta;

  return (
    <>
      {today === 0 || today === 6 ? (
        <Stack>
          <Text fontSize={{ base: 'xs', md: 'md' }} color='yellow'>
            There are no classes today. Get some rest! 😎
          </Text>
          <UserLocation location={location} />
        </Stack>
      ) : (
        <Stack>
          <Text fontSize='lg' color='orange' fontWeight={700}>
            ~/Classes/{horarioHoje.dia}
          </Text>
          <hr />
          {horarioHoje.aulas.map(
            (aula, index) =>
              aula.materia && (
                <Stack key={index}>
                  <Text fontSize={{ base: 'sm', md: 'md' }} color='neonGreen'>
                    {aula.materia}
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color='lightBlue'>
                    {aula.inicio} - {aula.fim}
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color='brand.500'>
                    Prof. {aula.professor}
                  </Text>
                  <hr />
                </Stack>
              )
          )}
          <UserLocation location={location} />
        </Stack>
      )}
    </>
  );
};

export default Today;
