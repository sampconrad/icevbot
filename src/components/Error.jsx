import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import UserLocation from "./UserLocation";

const Error = ({errorMsg}) => {
  return (
    <Stack>
      <Flex
        pt={5}
        align='center'
        gap={2}>
        <Text
          fontSize='sm'
          color='red'>
          {errorMsg}
        </Text>
      </Flex>
      <UserLocation location={'root'} />
    </Stack>
  );
};

export default Error;
