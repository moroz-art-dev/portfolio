import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import FullScreenSection from './FullScreenSection';
import SkillSection from './SkillSection';

import useStack from '../hooks/useStack';

const SkillStackSection = () => {
  useStack();

  const data = useSelector(state => state.stack.data);
  const { list, title, imageBaseUrl } = data;

  if (!list) {
    return (
      <FullScreenSection
        backgroundColor='primary.20'
        isDarkBackground
        p={8}
        alignItems='center'
        justifyContent='center'
        spacing={8}
      >
        <Spinner size='xl' />
      </FullScreenSection>
    );
  }

  const middleIndex = Math.floor(list.length / 2);
  const leftColumn = list.slice(0, middleIndex);
  const rightColumn = list.slice(middleIndex);

  return (
    <FullScreenSection
      backgroundColor='primary.20'
      isDarkBackground
      p={8}
      alignItems='flex-start'
      spacing={8}
    >
      <Box mt={8} width='100%'>
        <Heading as='h2' size='lg' mb={4} id='stack-section'>
          {title}
        </Heading>
        <Flex flexDirection={['column', null, 'row']} color='gray.800'>
          <Box flex='1' mr={4}>
            {leftColumn.map((section, index) => (
              <SkillSection
                key={index}
                sectionTitle={Object.keys(section)[0]}
                sectionData={Object.values(section)[0]}
                imageBaseUrl={imageBaseUrl}
              />
            ))}
          </Box>
          <Box flex='1'>
            {rightColumn.map((section, index) => (
              <SkillSection
                key={index + leftColumn.length}
                sectionTitle={Object.keys(section)[0]}
                sectionData={Object.values(section)[0]}
                imageBaseUrl={imageBaseUrl}
              />
            ))}
          </Box>
        </Flex>
      </Box>
    </FullScreenSection>
  );
};

export default SkillStackSection;
