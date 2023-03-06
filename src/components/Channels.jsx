import { Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import UserLocation from './UserLocation';
import canais from '../config/canais';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { IoLogoWhatsapp, IoMdMail } from 'react-icons/io';

const Channels = ({ location }) => {
  return (
    <Stack>
      <Text fontSize='lg' color='orange' fontWeight={700}>
        ~/Channels
      </Text>
      <hr />
      {canais.map((canal, index) => (
        <Stack key={index}>
          <Text fontSize={{ base: 'sm', md: 'md' }} color='neonGreen'>
            {canal.titulo}
          </Text>
          {canal.link && (
            <Link
              textDecoration='underline'
              color='darkBlue'
              fontSize={{ base: 'xs', md: 'sm' }}
              href={canal.link}
              isExternal
              display='flex'
              alignItems='center'
              gap={1}>
              <IoLogoWhatsapp size={15} mx='4px' color='#25D366' />
              {canal.link}
              <ExternalLinkIcon boxSize={3} mx='4px' color='neonPink' />
            </Link>
          )}
          {canal.email && (
            <Link
              textDecoration='underline'
              color='darkBlue'
              fontSize={{ base: 'xs', md: 'sm' }}
              href={`mailto:${canal.email}`}
              isExternal
              display='flex'
              alignItems='center'
              gap={1}>
              <IoMdMail size={15} mx='4px' color='#ff4e6b' />
              {canal.email}
              <ExternalLinkIcon boxSize={3} mx='4px' color='neonPink' />
            </Link>
          )}
          <hr />
        </Stack>
      ))}
      <UserLocation location={location} />
    </Stack>
  );
};

export default Channels;
