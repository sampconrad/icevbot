import { Flex, Text } from "@chakra-ui/react"
import React from 'react'

const UserLocation = ({location}) => {
  return (
    <Flex py={5} align='center' gap={2}>
    <Text fontSize='sm' color='brightYellow'>
      # user
    </Text>
    <Text fontSize='sm' color='darkBlue'>

      in
    </Text>
    <Text fontSize='sm' color='neonPink'>
      {' '}
        ~/iCEVbot/{location}
    </Text>
  </Flex>
  )
}

export default UserLocation