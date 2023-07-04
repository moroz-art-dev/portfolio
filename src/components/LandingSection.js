import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Heading, VStack, Box, Text } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const LandingSection = ({ data }) => {
  const { introduction, greeting, bio, name, src } = data;

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
                color={`primary.${[30, 40, 50][index % 3]}`}
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

LandingSection.propTypes = {
  data: PropTypes.shape({
    introduction: PropTypes.string.isRequired,
    greeting: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
};

export default LandingSection;
