import { VStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? 'white' : 'black'}
    >
      <VStack maxWidth='1280px' minHeight='100vh' {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

FullScreenSection.propTypes = {
  children: PropTypes.node.isRequired,
  isDarkBackground: PropTypes.bool,
  boxProps: PropTypes.object,
};

export default FullScreenSection;
