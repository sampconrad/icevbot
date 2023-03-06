import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Avatar, Flex, Link, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import UserLocation from './UserLocation';
import ASCIIlogo from './ASCIIogo';
import { SiChakraui, SiReact, SiVite } from 'react-icons/si';

const About = ({ setLoading, location }) => {
  const [data, setData] = useState();
  useEffect(() => {
    setLoading(true);
    fetch('https://api.github.com/users/sampconrad')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, []);

  return (
    <>
      <Stack spacing={2} align='center'>
        <ASCIIlogo />
        <Flex align='center'>
          <Text fontSize={{ base: 'xs', md: 'sm' }} color='neonGreen'>
            Developed by
          </Text>
          <Avatar
            size={{ base: 'xs', md: 'sm' }}
            name={data?.name}
            src={data?.avatar_url}
            margin={'0 3px 0 7px'}
          />
          <Link
            textDecoration='underline'
            color='darkBlue'
            fontSize={{ base: 'xs', md: 'sm' }}
            href='https://github.com/sampconrad/icevbot'
            isExternal>
            github.com/sampconrad
            <ExternalLinkIcon boxSize={3} mx='4px' color='neonPink' />
          </Link>
        </Flex>

        <Text fontSize={{ base: 'xs', md: 'sm' }} color='brand.500' px={{ base: 2, md: '10%' }}>
          iCEVbot is a prompt-based companion app built on{' '}
          <SiReact
            style={{
              marginRight: '4px',
              fontSize: '16px',
              display: 'inline',
              color: '#61DBFB',
              verticalAlign: '-2px',
            }}
          />
          React,{' '}
          <SiVite
            style={{
              marginRight: '4px',
              fontSize: '16px',
              display: 'inline',
              color: '#ffc21a',
              verticalAlign: '-2px',
            }}
          />
          Vite &{' '}
          <SiChakraui
            style={{
              marginRight: '4px',
              fontSize: '16px',
              display: 'inline',
              color: '#63cacc',
              verticalAlign: '-2px',
            }}
          />
          ChakraUI meant to help iCEV's Software Engineering undergrads keep track of classes,
          upcoming tests & assignments (TBA), official channels & more.
        </Text>
      </Stack>
      <UserLocation location={location} />
    </>
  );
};

export default About;
