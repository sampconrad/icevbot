import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Greeting from './Greeting';
import Prompt from './Prompt';
import { Box, Flex, Link, Text, Progress, Stack } from '@chakra-ui/react';
import { IoLogoGithub } from 'react-icons/io';
import Error from './Error';
import Help from './Help';
import Today from './Today';
import Week from './Week';
import Semester from './Semester';
import Channels from './Channels';
import About from './About';
import CircleIcon from '../chakra/CircleIcon';

const Terminal = () => {
  const [loading, setLoading] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [userPrompt, setUserPrompt] = useState('');
  const [feed, setFeed] = useState([]);

  const scrollRef = useRef(null);
  const inputValue = userPrompt?.toLocaleLowerCase();

  const printFeed = (component, title) => {
    setFeed((prev) => [...prev, component]);
  };

  useEffect(() => {
    inputValue === 'clear'
      ? setFeed([])
      : inputValue === 'help'
      ? printFeed(<Help location={'help'} />)
      : inputValue === 'today'
      ? printFeed(<Today location={'today'} />)
      : inputValue === 'week'
      ? printFeed(<Week location={'week'} />)
      : inputValue === 'semester'
      ? printFeed(<Semester location={'semester'} />)
      : inputValue === 'channels'
      ? printFeed(<Channels location={'channels'} />)
      : inputValue === 'about'
      ? printFeed(<About setLoading={setLoading} location={'about'} />)
      : userPrompt.length > 1 &&
        (inputValue !== 'today' ||
          inputValue !== 'week' ||
          inputValue !== 'semester' ||
          inputValue !== 'channels')
      ? setFeed((prev) => [...prev, <Error errorMsg={'Invalid command. Please try again.'} />])
      : null;
  }, [userPrompt]);

  useLayoutEffect(() => {
    if (scrollRef) {
      scrollRef.current.addEventListener('DOMNodeInserted', (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, []);

  return (
    <Box
      overflow='hidden'
      borderRadius='8px'
      bg='brand.800'
      border='1px solid'
      borderColor='brand.500'
      width={{ base: '90%', md: '70%', xl: '50%' }}
      height='500px'
      margin='auto'>
      <Flex
        position='relative'
        align='center'
        justify='center'
        bg='brand.700'
        height='24px'
        width='100%'
        py={2}
        px={2}>
        <Flex position='absolute' left='10px' gap='2px'>
          <CircleIcon color='red' />
          <CircleIcon color='yellow' />
          <CircleIcon color='green' />
        </Flex>
        <Link
          display='flex'
          alignItems='center'
          fontSize={{ base: '10', md: '13' }}
          color='brand.500'
          gap={1}
          href='https://github.com/sampconrad'
          isExternal>
          <IoLogoGithub size={15} />
          <Text fontWeight={700}>github.com/sampconrad</Text>
        </Link>
      </Flex>
      {loading ? <Progress size='xs' isIndeterminate /> : <Progress size='xs' />}
      <Stack
        ref={scrollRef}
        px='10px'
        pt='20px'
        height='430px'
        justify='space-between'
        overflowY='scroll'>
        <Greeting setLoading={setLoading} setShowInput={setShowInput} showInput={showInput} />
        {feed.map((component, index) => (
          <Stack key={index}>
            <span>{component}</span>
          </Stack>
        ))}
      </Stack>
      {showInput && <Prompt setUserPrompt={setUserPrompt} />}
    </Box>
  );
};

export default Terminal;
