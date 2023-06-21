import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Heading, VStack, Box } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const LandingSection = ({
  data: { introduction, greeting, bio, name, src },
}) => (
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
      />
      <Heading as='h1' size='lg' textAlign='center' textStyle='center'>
        {introduction}
        <br />
        {greeting}
      </Heading>
    </VStack>
    <VStack spacing={8} alignItems='center'>
      <Box maxW='80%'>
        <Heading as='h2' size='md' textAlign='center'>
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
