import { Avatar, Box, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import FullScreenSection from './FullScreenSection';

const LandingSection = () => {
  const data = useSelector(state => state.landing);
  const { introduction, greeting, bio, name, src } = data;
  const [colorChanged, setColorChanged] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setColorChanged(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <FullScreenSection
      justifyContent='center'
      alignItems='center'
      isDarkBackground
      backgroundColor='primary.20'
    >
      <VStack spacing={8} alignItems='center' width='80%'>
        <Avatar
          name={name}
          src={src}
          size='xl'
          borderRadius='full'
          boxSize='220px'
          mt='70px'
        />
        <Heading as='h1' size='lg' textAlign='center' textStyle='center'>
          <Text mb={4} textTransform='uppercase'>
            {[...introduction.toUpperCase()].map((letter, index) => (
              <Text
                key={index}
                as='span'
                display='inline'
                color={
                  colorChanged ? `white` : `primary.${[30, 40, 50][index % 3]}`
                }
                transition='color 0.5s'
              >
                {letter}
              </Text>
            ))}
          </Text>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={8} alignItems='center' width='80%' my={8}>
        <Box maxW='100%'>
          <Heading
            as='h2'
            size='md'
            textAlign={['justify', 'justify', 'center']}
            display='inline-block'
            width='fit-content'
            fontWeight={['normal', 'normal', 'bold']}
          >
            {bio.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Heading>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
