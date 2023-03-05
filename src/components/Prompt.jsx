import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

const Prompt = ({ setUserPrompt }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserPrompt(inputValue);
    setInputValue('');
  };

  const handleChange = (value) => {
    setInputValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<ChevronRightIcon color='neonGreen' boxSize={5} />}
        />
        <Input
          borderRadius='none'
          bg='brand.750'
          _focus={{ bg: 'brand.725' }}
          color='neonGreen'
          placeholder='Digite um comando para proceder ou "ajuda" para uma lista de comandos.'
          fontSize='xs'
          autoFocus
          focusBorderColor='transparent'
          variant='filled'
          type='text'
          value={inputValue}
          onChange={(event) => handleChange(event.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default Prompt;
